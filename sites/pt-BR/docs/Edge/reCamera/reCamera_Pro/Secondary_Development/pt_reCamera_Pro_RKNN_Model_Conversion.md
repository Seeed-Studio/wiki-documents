---
description: Converter modelos ONNX para o formato RKNN para o reCamera Pro e criar um modelo quantizado em INT8 com um conjunto de dados de calibração representativo.
title: Converter e Quantizar Modelos
keywords:
  - reCamera
  - reCamera Pro
  - RKNN
  - RKNN-Toolkit2
  - RV1126B
  - quantização de modelo
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_rknn_model_conversion
sku: 10003420
sidebar_position: 2
last_update:
  date: 08/28/2026
  author: yylin
createdAt: '2026-08-28'
updatedAt: '2026-08-28'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_rknn_model_conversion/
---

# Converter e Quantizar Modelos para reCamera Pro com RKNN-Toolkit2

## Introdução

O reCamera Pro usa o Rockchip RV1126B. Para executar um modelo de rede neural personalizado em seu NPU, exporte o modelo para ONNX e compile-o para um modelo RKNN para **RV1126B** em um PC Linux x86_64 ou ambiente WSL.

Este guia cria um modelo base FP16 e um modelo quantizado em INT8. A conversão ocorre no PC host; um reCamera Pro conectado é necessário apenas para a validação final e implantação.

:::note Antes de começar
Este guia usa **RKNN-Toolkit2 2.3.2**, Python 3.10 e `target_platform='rv1126b'`. Mantenha a versão do Toolkit alinhada com o RKNN Runtime fornecido pelo firmware do reCamera Pro. Não use instruções destinadas a um produto reCamera diferente ou a outro SoC Rockchip.
:::

---

## 1. Requisitos

A configuração usada nos exemplos deste guia é a seguinte:

- Um PC Linux x86_64 ou ambiente WSL 2. Não converta modelos diretamente no próprio reCamera Pro.
- Python 3.10.
- [RKNN-Toolkit2](https://github.com/airockchip/rknn-toolkit2) **2.3.2** para x86_64 e seus requisitos incluídos.
- Um modelo ONNX com forma de entrada, pré-processamento e semântica de saída conhecidos.
- Para quantização INT8: imagens de calibração representativas. Rótulos não são necessários.

A versão do Python pode ser alterada. O RKNN-Toolkit2 atualmente oferece suporte ao Python 3.6 a 3.12. Instale o wheel que corresponda à sua versão do Python; os dígitos após `cp` no nome do arquivo wheel identificam sua versão do CPython.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/Model_Conversion/image.png" alt="Exemplo de versão do wheel Python do RKNN-Toolkit2" /></div>

Antes da conversão, registre a origem e a licença do modelo, comando de exportação, checksum, layout de entrada, ordem de cores, política de redimensionamento, normalização e pós-processamento. Este é o contrato do modelo que seu aplicativo reCamera Pro deve reproduzir.

:::tip Fluxo de trabalho recomendado
Sempre gere primeiro o modelo FP16. Ele é a linha de base para verificar o grafo e o pré-processamento antes de investigar a precisão ou o desempenho em INT8.
:::

---

## 2. Preparar o RKNN-Toolkit2

Baixe a versão **2.3.2** do [repositório oficial da Rockchip](https://github.com/airockchip/rknn-toolkit2). No pacote de release, escolha o wheel e os requisitos em `rknn-toolkit2/packages/x86_64` que correspondam ao CPython 3.10.

Crie um ambiente isolado e instale o wheel. Substitua `PATH_TO_TOOLKIT` e o nome do arquivo wheel pelos caminhos do pacote que você baixou.

```bash
python3.10 -m venv rknn-2.3.2
source rknn-2.3.2/bin/activate

python -m pip install --upgrade pip
python -m pip install -r PATH_TO_TOOLKIT/rknn-toolkit2/packages/x86_64/requirements_cp310*.txt
python -m pip install PATH_TO_TOOLKIT/rknn-toolkit2/packages/x86_64/rknn_toolkit2-2.3.2-*-cp310-*.whl

python -c "from rknn.api import RKNN; print('RKNN-Toolkit2 import succeeded')"
```

:::caution Use o toolkit de conversão no host
RKNN-Toolkit2 é o toolkit de conversão do lado do host. Não use `rknn-toolkit-lite2` para conversão; ele é destinado à execução de modelos em sistemas-alvo compatíveis. Um `.rknn` para RV1126B deve ser construído com `target_platform='rv1126b'`.
:::

---

## 3. Confirmar o Contrato de Entrada do ONNX

Prefira uma entrada ONNX estática com batch 1. Inspecione o modelo com o [Netron](https://netron.app/), ONNX checker, `model-inspect` ou seu programa de exportação. Confirme esses valores a partir da implementação original do modelo; não os deduza apenas a partir do nome do arquivo.

| Item | Exemplo | Por que é importante |
| --- | --- | --- |
| Nome e forma da entrada | `images`, `[1, 3, 640, 640]` | Exigido por `load_onnx()` |
| Layout | NCHW ou NHWC | Deve corresponder ao grafo exportado |
| Ordem dos canais | RGB ou BGR | Uma troca de canais pode reduzir severamente a precisão |
| Faixa de entrada e normalização | `[0,255]` para `[0,1]` | Deve ser aplicada exatamente uma vez |
| Política de redimensionamento | stretch, crop ou letterbox | Deve ser idêntica em tempo de execução |
| Saídas e pós-processamento | scores, boxes, masks, etc. | Necessários para interpretar as previsões |

Por exemplo, se o aplicativo fornece pixels RGB uint8 em `[0,255]` e o modelo espera floats em `[0,1]`, use `mean_values=[[0, 0, 0]]` e `std_values=[[255, 255, 255]]`. O RKNN aplica `(input - mean) / std`. Se a normalização estiver dentro do grafo ONNX, use valores identidade (`mean=[0,0,0]`, `std=[1,1,1]`) para que ela não seja aplicada duas vezes.

Use `model-inspect` para inspecionar as entradas e saídas do modelo:

```bash
pip install model-inspect-tool

model-inspect ./yolov8n.onnx
```

Um exemplo de saída é mostrado abaixo:

```text
Format:  onnx
Path:    /home/yylin/rknn_test/rknn_model_zoo/examples/yolov8/model/yolov8n.onnx
Backend: onnx
Dynamic: false

Inputs:
  name=images, shape=[1, 3, 640, 640], dtype=float

Outputs:
  name=318, shape=[1, 64, 80, 80], dtype=float
  name=onnx::ReduceSum_326, shape=[1, 80, 80, 80], dtype=float
  name=331, shape=[1, 1, 80, 80], dtype=float
  name=338, shape=[1, 64, 40, 40], dtype=float
  name=onnx::ReduceSum_346, shape=[1, 80, 40, 40], dtype=float
  name=350, shape=[1, 1, 40, 40], dtype=float
  name=357, shape=[1, 64, 20, 20], dtype=float
  name=onnx::ReduceSum_365, shape=[1, 80, 20, 20], dtype=float
  name=369, shape=[1, 1, 20, 20], dtype=float
```

---

## 4. Exportar Diretamente um Modelo Ultralytics YOLO para RKNN

Para modelos Ultralytics YOLO, o Ultralytics pode exportar diretamente para RKNN. Ele cria o modelo ONNX intermediário e invoca o RKNN-Toolkit2 para você, de modo que você não precisa escrever um script separado de conversão ONNX.

Instale o Ultralytics no ambiente RKNN-Toolkit2 preparado acima:

```bash
python -m pip install ultralytics
```

O exemplo a seguir exporta um modelo RKNN FP16 para o reCamera Pro. Substitua `yolo11n.pt` pelo seu checkpoint treinado, por exemplo `runs/detect/train/weights/best.pt`.

```python
from ultralytics import YOLO

model = YOLO('yolo11n.pt')
model.export(format='rknn', name='rv1126b', imgsz=640)
```

Comando CLI equivalente:

```bash
yolo export model=yolo11n.pt format=rknn name=rv1126b imgsz=640
```

A exportação normalmente cria um diretório como `yolo11n_rknn_model/`, contendo um arquivo RKNN com nome semelhante a `yolo11n-rv1126b.rknn`. Aqui, `name='rv1126b'` seleciona o alvo Rockchip; não é o nome de um diretório de saída.

Para criar um modelo INT8, passe `quantize=8` e a definição YAML de um conjunto de dados YOLO representativo. O Ultralytics usa os caminhos de imagem desse conjunto de dados para gerar a lista de calibração exigida pelo RKNN-Toolkit2.

```python
from ultralytics import YOLO

model = YOLO('runs/detect/train/weights/best.pt')
model.export(
    format='rknn',
    name='rv1126b',
    imgsz=640,
    quantize=8,
    data='path/to/data.yaml',
)
```

```bash
yolo export model=runs/detect/train/weights/best.pt format=rknn name=rv1126b imgsz=640 quantize=8 data=path/to/data.yaml
```

:::caution Dados de calibração são necessários para INT8
`data` deve apontar para um arquivo YAML de conjunto de dados YOLO válido cujos caminhos de imagem sejam acessíveis a partir do host. Use imagens representativas do cenário de implantação do reCamera Pro e mantenha imagens separadas reservadas para avaliação de precisão. O Ultralytics não transforma uma exportação bem-sucedida em uma garantia de precisão da tarefa ou desempenho no dispositivo.
:::

:::tip Exportação direta versus fluxo de trabalho manual
Use esta rota para uma exportação rápida de Ultralytics YOLO. Use o fluxo de trabalho ONNX abaixo quando seu modelo não for um modelo Ultralytics, quando você precisar de controle explícito sobre as configurações do Toolkit2 ou quando precisar diagnosticar o grafo ONNX exportado.
:::

---

## 5. Criar uma Linha de Base RKNN FP16

Crie `convert_onnx_to_rknn.py`. Altere o caminho do modelo, nome da entrada, forma e normalização para o seu próprio modelo.

```python
from rknn.api import RKNN

ONNX_MODEL = 'model.onnx'
RKNN_MODEL = 'model-fp16-rv1126b.rknn'

rknn = RKNN(verbose=True)

# Example only: uint8 RGB [0,255] becomes model-domain [0,1].
rknn.config(
    target_platform='rv1126b',
    mean_values=[[0, 0, 0]],
    std_values=[[255, 255, 255]],
)

ret = rknn.load_onnx(
    model=ONNX_MODEL,
    inputs=['images'],                     # Replace with your ONNX input name.
    input_size_list=[[1, 3, 640, 640]],    # Replace with your static shape.
)
if ret != 0:
    raise RuntimeError('Failed to load ONNX model')

# No calibration dataset: build a non-quantized FP16 baseline.
ret = rknn.build(do_quantization=False)
if ret != 0:
    raise RuntimeError('Failed to build RKNN model')

if rknn.export_rknn(RKNN_MODEL) != 0:
    raise RuntimeError('Failed to export RKNN model')
rknn.release()
print(f'Created {RKNN_MODEL}')
```

```bash
python convert_onnx_to_rknn.py
sha256sum model-fp16-rv1126b.rknn
```

Se o toolkit relatar um operador não suportado, entrada dinâmica ou grafo inválido, corrija ou reexporte o modelo ONNX. Não exclua operadores apenas para fazer a compilação ser concluída.

---

## 6. Preparar um Conjunto de Dados de Calibração INT8

As imagens de calibração INT8 devem se assemelhar às entradas de implantação. Como ponto de partida prático, use cerca de 100–500 imagens e cubra iluminação esperada, fundos, tamanhos de objetos, pontos de vista, desfoque de movimento, ruído da câmera e casos de falha importantes. Mantenha as imagens de calibração separadas das imagens de avaliação de precisão. Se o conjunto de calibração for muito pequeno, o modelo INT8 pode produzir resultados que diferem do modelo ONNX original.

A lista tem um caminho de imagem por linha; entradas PNG, JPEG, BMP e NPY são comumente usadas.

```bash
find calibration/images -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) \
  | sort > calibration/dataset.txt

wc -l calibration/dataset.txt
head -n 3 calibration/dataset.txt
```

:::caution Mantenha o pré-processamento consistente
Os dados de calibração devem usar a mesma ordem de canais, política de redimensionamento e convenção numérica de entrada que a inferência. Imagens não representativas, erros RGB/BGR ou pré-processamento incompatível podem causar uma grande queda de precisão em INT8.
:::

---

## 7. Construir o Modelo RKNN INT8

Copie o script FP16 para `convert_onnx_to_rknn_int8.py`, depois substitua o nome do modelo e o bloco de compilação por:

```python
RKNN_MODEL = 'model-int8-rv1126b.rknn'

ret = rknn.build(
    do_quantization=True,
    dataset='calibration/dataset.txt',
)
if ret != 0:
    raise RuntimeError('Failed to build INT8 RKNN model')
```

```bash
python convert_onnx_to_rknn_int8.py
sha256sum model-int8-rv1126b.rknn
```

A configuração INT8 padrão normalmente é um bom primeiro teste. Só experimente algoritmos de quantização, quantização híbrida ou compactação de pesos depois de medir o efeito deles na sua tarefa.

---

## 8. Validar antes da implantação

A conclusão bem-sucedida de `build()` e `export_rknn()` confirma que o RKNN-Toolkit2 compilou o grafo para o RV1126B. Isso **não** prova, por si só, a precisão da tarefa, o pós-processamento correto ou a latência no dispositivo.

1. Execute o modelo ONNX original e a configuração RKNN FP16 em amostras reservadas; compare os resultados decodificados da tarefa, não apenas tensores brutos.
2. Compare os resultados FP16 e INT8 nessas mesmas amostras e investigue regressões inaceitáveis.
3. Na reCamera Pro, carregue o `.rknn` exportado com o RKNN Runtime correspondente ao firmware. Consulte os atributos dos tensores e verifique tipo de entrada, layout, tamanho, pré-processamento e pós-processamento.
4. Meça a latência após aquecimento e o comportamento sustentado no dispositivo.

:::note A validação no host tem limites
O simulador RKNN no host e a NPU RV1126B são ambientes de execução diferentes. A comparação no host verifica a conversão e o pré-processamento; a aprovação final exige testar o `.rknn` exportado na reCamera Pro.
:::

---

## 9. Solução de problemas

| Sintoma | Verificar primeiro |
| --- | --- |
| `load_onnx()` falha | Valide o ONNX, o opset do exportador, o nome da entrada, a forma estática e os arquivos de dados externos. |
| Operador não suportado | Exporte novamente ou use uma operação suportada semanticamente equivalente. |
| Compilação INT8 falha | Verifique todos os caminhos de dataset, contagem de entradas, dtype/shape e legibilidade das imagens. |
| A precisão INT8 é ruim | Verifique RGB/BGR, política de redimensionamento, mean/std, cobertura de calibração e pós-processamento. |
| Funciona no host, mas falha no dispositivo | Confirme `rv1126b`, checksum do modelo, alinhamento entre Toolkit/Runtime 2.3.2 e atributos dos tensores. |
| Inferência no dispositivo é lenta | Meça após o aquecimento; verifique o pré-processamento e o pós-processamento, bem como a execução na NPU. |

## 10. Próximas etapas

Mantenha a fonte ONNX, o script de conversão, o checksum da lista de calibração, o checksum do `.rknn` e o contrato de pré-processamento/pós-processamento junto com o modelo exportado. Em seguida, integre o modelo com a C API do RKNN Runtime da reCamera Pro e teste-o no dispositivo.
