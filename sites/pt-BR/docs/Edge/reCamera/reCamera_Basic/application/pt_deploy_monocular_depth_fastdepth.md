---
description: Converter, quantizar e implantar o modelo de estimação de profundidade monocular FastDepth no TPU CV181x da reCamera com TPU-MLIR, e executá-lo no dispositivo a 54 FPS junto com YOLO11n.
title: Implantar Estimação de Profundidade Monocular (FastDepth INT8)
keywords:
  - Borda
  - reCamera
  - Estimação de Profundidade
  - FastDepth
  - Conversão de Modelo
  - TPU-MLIR
image: https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-indoor-office-result.png
slug: /recamera_deploy_monocular_depth
sidebar_position: 19
last_update:
  date: 08/18/2026
  author: Zafar Khidoyatov
createdAt: '2026-08-18'
url: https://wiki.seeedstudio.com/pt-br/recamera_deploy_monocular_depth/
updatedAt: '2026-08-18'
---

# Implantar Estimação de Profundidade Monocular na reCamera (FastDepth, INT8)

Este guia explica como converter, quantizar e implantar um modelo de estimação de profundidade monocular — [FastDepth](https://github.com/dwofk/fast-depth) — no TPU CV181x da reCamera e executá‑lo no dispositivo. Todos os comandos foram executados e todos os números medidos em hardware real.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-indoor-office-result.png" alt="Quadro de escritório interno ao lado de seu mapa de calor de profundidade FastDepth INT8" />
</div>

Resultados medidos que você pode esperar ao final:

| Métrica | Resultado |
|---|---|
| Latência de inferência de profundidade (INT8, 224×224) | **18,4 ms** (P50 18,36 / P95 18,46, n=300) |
| FPS de profundidade isolada | **54** |
| Profundidade + YOLO11n em série, por quadro | 53,9 ms → **18,5 FPS** (nível de modelo) |
| Perda de acurácia INT8 vs BF16 (DIODE AbsRel) | **< 2%** |
| Tamanho do `.cvimodel` | 1,5 MB (INT8) / 3,1 MB (BF16) |
| Soak contínuo de 30 minutos | sem travamentos, sem drift, memória estável |

:::note Profundidade relativa, não em metros
FastDepth prediz profundidade **relativa** e foi treinado no conjunto de dados *indoor* NYU Depth V2. Em ambientes internos ele produz uma estrutura perto/longe correta; cenas externas saem com uma faixa fortemente comprimida (veja [Resultados qualitativos](#resultados-qualitativos-o-que-esperar)). Não interprete as saídas brutas como metros.
:::

O pipeline: ONNX → Top-MLIR (`model_transform`) → tabela de calibração INT8 (`run_calibration`, 500 imagens) → `.cvimodel` compilado (`model_deploy`, dois gates de validação) → inferência no dispositivo (`cviruntime`).

## Pré-requisitos

- reCamera série 2002 (SoC SG2002, TPU CV181x), conectada via USB (`192.168.42.1`), acesso ssh como usuário `recamera`
- Docker na sua máquina de desenvolvimento
- O contêiner da cadeia de ferramentas TPU-MLIR:

```bash
docker pull sophgo/tpuc_dev:v3.4
docker run --rm -it -v $(pwd):/workspace sophgo/tpuc_dev:v3.4
```

Dentro do contêiner, instale o TPU-MLIR em um ambiente virtual mantido no bind mount (para que sobreviva a reinicializações do contêiner):

```bash
python3 -m venv /workspace/tpu_env
source /workspace/tpu_env/bin/activate
pip install "tpu_mlir[onnx]==1.28.1"
pip install psutil
pip install torch --index-url https://download.pytorch.org/whl/cpu
```

:::caution Duas armadilhas na instalação

1. Instale o extra `[onnx]`, **não** `[all]` — `tpu_mlir[all]==1.28.1` fixa uma versão do paddlepaddle que foi removida do PyPI e não pode mais ser instalada.
2. `psutil` e `torch` são dependências não declaradas — sem elas as ferramentas travam no momento do import. Use o wheel de torch apenas para CPU (o pacote padrão do PyPI puxa uma pilha CUDA de vários GB de que você não precisa).

:::

Verifique: `model_transform.py --help` deve imprimir o banner de versão do TPU-MLIR.

## Etapa 1 — Obter o modelo ONNX

Exporte o FastDepth (a variante `mobilenet-nnconv5dw-skipadd-pruned`) para ONNX com uma entrada fixa 1×3×224×224, opset ≥ 13, e execute-o através do [onnxsim](https://github.com/daquexian/onnx-simplifier). Após a simplificação o grafo contém apenas `Conv / Clip / Relu / Resize / Add` — todos suportados pelo TPU-MLIR para CV181x. (Auditar a lista de ops *antes* da conversão é um hábito que compensa — veja [Seu modelo vai rodar neste chip?](#seu-modelo-vai-rodar-neste-chip) abaixo.)

## Etapa 2 — Traduzir para Top-MLIR

O pré-processamento esperado do FastDepth é simplesmente **resize + RGB + /255** — sem normalização de média/desvio padrão. Você declara a receita uma vez aqui; ela é incorporada ao `.mlir`, e toda ferramenta a jusante (calibração, implantação) a reutiliza automaticamente:

```bash
mkdir -p /workspace/build/fastdepth && cd /workspace/build/fastdepth
model_transform.py --model_name fastdepth \
  --model_def /workspace/fastdepth_224.onnx \
  --input_shapes [[1,3,224,224]] \
  --mean 0.0,0.0,0.0 \
  --scale 0.00392156862745098,0.00392156862745098,0.00392156862745098 \
  --pixel_format rgb \
  --test_input /workspace/test_image.jpg \
  --test_result fastdepth_top_outputs.npz \
  --mlir fastdepth_224.mlir
```

**Você deve ver:** uma comparação camada a camada contra o ONNX terminando com todas as camadas aprovadas (`46/46`, similaridade de cosseno ≈ 1,0).

Mantenha `fastdepth_in_f32.npz` e `fastdepth_top_outputs.npz` — eles são as referências congeladas em float32 que validam o modelo quantizado depois.

:::tip
A verificação de extensão de `--test_input` diferencia maiúsculas de minúsculas: `.JPG` causa um crash com uma asserção confusa. Use `.jpg` em minúsculas — para este arquivo e para cada imagem de calibração.
:::

## Etapa 3 — Construir um conjunto de dados de calibração

Aqui está a parte que a maioria dos tutoriais ignora, e é ela que decide a qualidade do seu INT8. A quantização distribui 256 níveis sobre a faixa de valores que cada camada *realmente produz nas suas imagens de calibração*. Em inferência, valores fora dessa faixa registrada são truncados — informação destruída na camada. Portanto o conjunto deve cobrir o que a câmera realmente verá:

- **~500 imagens**, em sua maioria quadros capturados **com a própria reCamera alvo** (dia / interior / noite / contraluz), complementadas com um conjunto de dados público (por exemplo, imagens de validação do [DIODE](https://diode-dataset.org/))
- Escolhas distribuídas de forma uniforme entre as gravações — nunca quase duplicatas consecutivas
- **Pré-processamento idêntico ao da implantação**: forneça imagens originais e deixe as ferramentas aplicarem a receita do `.mlir` — não as redimensione você mesmo
- Nomes de arquivo `.jpg` em minúsculas

:::caution
**Contagens de quadros MPEG-TS mentem.** Ao extrair quadros de gravações `.ts`, `CAP_PROP_FRAME_COUNT` pode relatar 3× a contagem real — conte os quadros lendo sequencialmente até o fim.
:::

Gere a tabela de calibração (~3 minutos para 500 imagens):

```bash
run_calibration.py fastdepth_224.mlir \
  --dataset /workspace/calib_set --input_num 500 \
  -o fastdepth_cal_table
```

## Etapa 4 — Quantizar e compilar

```bash
model_deploy.py --mlir fastdepth_224.mlir --quantize INT8 \
  --calibration_table fastdepth_cal_table --processor cv181x \
  --test_input fastdepth_in_f32.npz \
  --test_reference fastdepth_top_outputs.npz \
  --tolerance 0.85,0.45 \
  --model fastdepth_224_int8.cvimodel
```

A ferramenta executa **dois gates de validação** — aprenda a ler ambos, eles respondem a perguntas diferentes:

| Gate | Compara | Pergunta que responde | Resultado FastDepth |
|---|---|---|---|
| 1 | MLIR quantizado vs referência float32 | *a quantização prejudicou a matemática?* | cosseno **0,9997** ✅ |
| 2 | `.cvimodel` compilado (simulador de TPU) vs seu próprio MLIR quantizado | *a compilação preservou a matemática?* | **IGUAL (1,0)** ✅ |

:::caution O Gate 2 não é mera formalidade
A geração de código pode imprimir avisos (por exemplo, `cvkcv181x tiu ... wrong parameter`) e **ainda assim relatar `[Success]`** enquanto produz um modelo numericamente quebrado.
Apenas o Gate 2 detecta isso. Se o Gate 1 passar mas o Gate 2 colapsar, o seu problema é compatibilidade modelo‑vs‑chip, não quantização — veja [Seu modelo vai rodar neste chip?](#seu-modelo-vai-rodar-neste-chip)
:::

Para uma referência de acurácia, construa uma variante BF16 da mesma forma — remova `--calibration_table` e use `--quantize BF16` (sem calibração necessária: BF16 mantém as faixas de números reais).

## Etapa 5 — Executar na reCamera

A imagem de SO da reCamera não inclui um executor genérico de `.cvimodel`, então usamos um pequeno programa em C contra a API `cviruntime`, cross‑compilado com a cadeia de ferramentas [sscma-example-sg200x](https://github.com/Seeed-Studio/sscma-example-sg200x) e ligado estaticamente contra `libcviruntime-static.a` / `libcvikernel-static.a` / `libcvimath-static.a` do SDK.
A API é agradavelmente pequena:

```c
#include "cviruntime.h"

CVI_MODEL_HANDLE model = NULL;
CVI_NN_RegisterModel("fastdepth_224_int8.cvimodel", &model);

CVI_TENSOR *inputs, *outputs;
int32_t input_num, output_num;
CVI_NN_GetInputOutputTensors(model, &inputs, &input_num, &outputs, &output_num);

// fill inputs[0] with 1x3x224x224 float32 (RGB/255, CHW), then:
CVI_NN_Forward(model, inputs, input_num, outputs, output_num);
// outputs[0] now holds the 1x1x224x224 depth map (float32)

CVI_NN_CleanupModel(model);
```

<!-- LINK: full runner source (warm-up, P50/P95 timing, dual-model mode) — location TBD -->

Pré-processamento no lado do host (Python — produz o arquivo de entrada bruta):

```python
import cv2
img = cv2.imread("frame.jpg")
img = cv2.resize(img, (224, 224))
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
img = img.astype("float32") / 255.0
img.transpose(2, 0, 1).tofile("input.bin")
```

Na câmera, o TPU precisa de root e de um subsistema de vídeo livre:

```bash
sudo /etc/init.d/S93sscma-supervisor stop   # frees VPSS/ION held by the stock stack
sudo ./depth_runner fastdepth_224_int8.cvimodel input.bin depth_out.bin 300
```

**Você deve ver** (saída real do nosso dispositivo):

```
model registered: fastdepth_224_int8.cvimodel (target cv181x)
input : name=data fmt=FP32 count=150528 shape=[1,3,224,224]
output: name=decode_conv6/2_Relu_f32 fmt=FP32 count=50176 shape=[1,1,224,224]
depth latency over 300 runs (after 20 warm-up): mean 18.38 ms  P50 18.36 ms  P95 18.46 ms  (54.41 fps mean)
```

Visualize o resultado como um mapa de calor:

```python
import cv2, numpy as np
d = np.fromfile("depth_out.bin", dtype="float32").reshape(224, 224)
g = ((d - d.min()) / (d.max() - d.min()) * 255).astype("uint8")
cv2.imwrite("depth_map.png", cv2.applyColorMap(g, cv2.COLORMAP_INFERNO))
```

## Resultados de benchmark

Todos os números: entrada 224×224, pré-processamento como acima, aquecimento de 20 inferências, 300 execuções medidas, no dispositivo (TPU CV181x):

| Benchmark | média | P50 | P95 | FPS |
|---|---|---|---|---|
| FastDepth INT8 | 18,38 ms | 18,36 | 18,46 | 54,4 |
| FastDepth BF16 | 19,55 ms | 19,54 | 19,58 | 51,2 |
| Detecção YOLO11n INT8 (modelo padrão) | 35,51 ms | 35,50 | 35,53 | 28,2 |
| FastDepth INT8 + YOLO11n, em série | 53,90 ms | 53,88 | 53,99 | 18,5 |

Três descobertas que vale a pena conhecer:

- **O TPU é determinístico** — P95 − P50 ≤ 0,1 ms em todas as variantes. Sem jitter para contornar em engenharia.
- **Co-residência é gratuita** — carregar o YOLO junto custa ao modelo de profundidade +0,01 ms. Uma execução combinada contínua de 30 minutos: sem travamentos, sem drift de latência, memória estável.
- **A vantagem de velocidade do INT8 sobre o BF16 é de apenas ~6%** — nesse tamanho de modelo o TPU é limitado por largura de banda, então INT8 basicamente oferece *metade do tamanho do modelo*. Ambas as precisões são viáveis; o INT8 mediu < 2% de diferença AbsRel em relação ao BF16 no DIODE (alinhado por escala e deslocamento), bem abaixo de uma margem típica de 5%.

## Resultados qualitativos (o que esperar)

- **Ambientes internos** (dentro da distribuição): estrutura global correta — objetos mais próximos mais escuros, paredes distantes claras, corredores mais profundos mais claros.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-indoor-office-result.png" alt="Quadro de escritório interno ao lado de seu mapa de profundidade FastDepth INT8 em mapa de calor" />
</div>

- **Ambientes externos**: fora da distribuição para o FastDepth treinado em NYU — o alcance é comprimido de forma acentuada (uma rua de 40 m é mapeada para um intervalo de ~3 unidades) e a estrutura fica grosseira. Utilizável, na melhor das hipóteses, para pistas aproximadas de perto/longe.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-outdoor-street-result.png" alt="Quadro de rua externa ao lado de seu mapa de profundidade FastDepth INT8 em mapa de calor mostrando compressão de alcance" />
</div>

- **Noite**: em uma câmera sem iluminação IR, cenas iluminadas por lâmpadas produzem manchas grosseiras com os alcances mais comprimidos de todos; cenas totalmente sem iluminação têm entrada quase preta e não são significativas.

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-batch-results-a.png" alt="Cenas noturnas com mapas de profundidade FastDepth" />
  <img width="500" src="https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-batch-results-b.png" alt="Cenas diurnas externas com mapas de profundidade FastDepth" />
</div>

Se o seu produto precisa de profundidade de qualidade em ambientes externos ou noturnos, planeje um fine-tuning no domínio-alvo ou distilação a partir de um professor mais forte (por exemplo, Depth Anything V2) para uma arquitetura de aluno compatível com o chip.

## Seu modelo vai rodar neste chip?

Converter com sucesso **não** é o mesmo que executar corretamente. Um caso real deste projeto: **ZipDepth** (um modelo de profundidade orientado a NPU) é quantizado corretamente: Gate 1 com cosseno ≥ 0.998 tanto em INT8 *quanto* em BF16, mas sua atenção com strip-pooling usa médias de pooling com formas `[48,1]`, `[1,48]` (stride 48) e `[24,24]`: maiores do que a unidade de pooling TIU do CV181x consegue codificar. O codegen imprimiu `cvkcv181x tiu avg pool: wrong parameter` quatro vezes (uma por pool), ainda assim relatou sucesso, e o modelo compilado produziu ruído — detectado apenas pelo Gate 2 (SQNR negativo). A falha é independente de precisão, portanto nenhuma tabela de quantização mista INT8/BF16 consegue contorná-la.

Checklist antes de você se comprometer com um modelo de profundidade para a reCamera:

- ✅ Audite primeiro a lista de ops do ONNX (Netron é seu amigo); prefira arquiteturas construídas a partir de pequenas convoluções
- ⚠️ Evite pools médios (**average pools**) grandes ou em tiras — `MaxPool` pequeno (por exemplo, 5×5 do SPPF) compila bem
- ✅ Sempre passe `--test_input/--test_reference` para que ambos os gates sejam executados
- Se o Gate 1 passa mas o Gate 2 falha com avisos de pooling: o modelo precisa de cirurgia arquitetural (por exemplo, decompor um pool grande em uma cadeia exata de pools pequenos — a média das médias sobre grupos iguais é a média geral) antes que possa ter como alvo este chip

## Solução de problemas

| Sintoma | Causa | Correção |
|---|---|---|
| `Assertion failed ... device_init` na câmera | pilha de IA padrão mantém a memória TPU/ION | `sudo /etc/init.d/S93sscma-supervisor stop`, execute com `sudo` |
| `model_runner.py: not found` no contêiner | venv não ativado | `source /workspace/tpu_env/bin/activate` |
| Falha na instalação de `tpu_mlir[all]` | pin upstream em paddlepaddle removido | instale `tpu_mlir[onnx]` em vez disso |
| Asserção de `--test_input` em uma imagem válida | extensão `.JPG` em maiúsculas | renomeie para `.jpg` em minúsculas |
| Gate 2 falha, Gate 1 passa | incompatibilidade entre codegen/chip (verifique avisos `wrong parameter`) | veja [Seu modelo vai rodar neste chip?](#seu-modelo-vai-rodar-neste-chip) |
| Extração de quadros lê menos quadros do que o esperado | contagem de quadros de metadados do `.ts` está errada | conte por leitura sequencial |

## Recursos

[FastDepth](https://github.com/dwofk/fast-depth)

[TPU-MLIR](https://github.com/sophgo/tpu-mlir)

[DIODE dataset](https://diode-dataset.org/)

[reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

[reCamera example (cross-compile toolchain)](https://github.com/Seeed-Studio/sscma-example-sg200x)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
