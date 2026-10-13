---
description: Caminhos de desenvolvimento de aplicações para RKNN, ROCKIVA e RKLLM no reCamera Pro.
title: Desenvolvimento de IA e NPU
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - C/C++
  - RKNN
  - Desenvolvimento de Aplicações
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_ai_npu_development
sku: 10003420
sidebar_position: 3
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_ai_npu_development/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Desenvolvimento de IA e NPU

Esta página abrange modelos do lado da aplicação, bibliotecas de runtime e projetos de referência. Para builds em C/C++, use [`recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain); você não precisa compilar o sistema completo. Caminhos como `project/app/rkai` referem-se a partes internas do pacote de código-fonte completo e são fornecidos aqui como referências ao pacote-fonte.

O RV1126B possui uma NPU dedicada. O SDK contém três caminhos independentes de desenvolvimento de IA. Escolher o caminho correto logo no início pode economizar bastante tempo.

| Caminho | Localização | Caso de uso | O que você faz |
| --- | --- | --- | --- |
| **RKNN Runtime (C API)** | `media/rknn-llm-mk/`, `project/app/rkai/rkai/common/include/rknn_api.h` | Executar seu próprio modelo de detecção / classificação / segmentação | Converter ONNX para `.rknn` em um PC e então executar inferência por meio da C API na placa |
| **ROCKIVA (biblioteca de algoritmos empacotada)** | `media/iva/iva/` | Detecção pronta de rosto, pessoa, pet e outros | Chamar `rockiva_*_api.h` e usar os modelos `.data` incluídos |
| **RKLLM (modelos de linguagem / multimodais grandes)** | `media/rknn-llm-mk/rknn-llm/`, `project/app/rkllm-inference/` | Executar um LLM / VLM na placa | Converter para `.rkllm` com rkllm-toolkit e executar com `librkllmrt.so` na placa |

## 1. RKNN Runtime

### Bibliotecas de Runtime e Headers

Cópias disponíveis no SDK:

```text
media/rknn-llm-mk/rknn-llm/examples/multimodal_model_demo/deploy/3rdparty/librknnrt/
├── Linux/librknn_api/include/rknn_api.h          # C API header
├── Linux/librknn_api/include/rknn_matmul_api.h   # Matrix multiplication API
├── Linux/librknn_api/aarch64/librknnrt.so        # aarch64 runtime
├── Android/librknn_api/arm64-v8a/librknnrt.so
└── Android/librknn_api/armeabi-v7a/librknnrt.so

media/iva/iva/librockiva/rockiva-rv1126b-Linux/lib/librknnrt.so
media/isp/camera_engine_rkaiq/rkaiq/algos/aiisp/aiisp_relate/librknnrt_64bit.so
media/isp/camera_engine_rkaiq/rkaiq/algos/aiisp/aiisp_relate/librknnrt_32bit.so

project/app/rkai/rkai/common/include/rknn_api.h       # Header used by applications
project/app/rkai/rkai/common/include/rknn_custom_op.h # Custom operators
project/app/rkai/rkai/common/include/rknn_matmul_api.h
```

**No dispositivo**, a biblioteca de runtime é `/oem/usr/lib/librknnrt.so`, que é adicionada a `LD_LIBRARY_PATH` por `/etc/profile.d/RkEnv.sh`.

> **A correspondência de versões é obrigatória:** RKNN-Toolkit2 (ferramenta de conversão no PC), `rknn_api.h` e `librknnrt.so` devem usar versões compatíveis. A base interna para o firmware de produção da Seeed é **RKNN 2.3.2** (`target_platform='rv1126b'`). A `librknnrt.so` incluída no SDK pode ser de uma versão diferente; **use `/oem/usr/lib/librknnrt.so` no dispositivo como fonte da verdade**. Não a substitua por uma biblioteca baixada separadamente ou copiada de outra placa.
>
> Antes da implantação, verifique a versão no dispositivo (a saída exata do comando ainda precisa de verificação em hardware):
>
> ```bash
> # strings /oem/usr/lib/librknnrt.so | grep -i "librknnrt version"
> # cat /sys/kernel/debug/rknpu/version 2>/dev/null || dmesg | grep -i rknpu
> ```
>
> Adicione `/oem/usr/lib` ao RUNPATH ao fazer o link: `-Wl,-rpath,/oem/usr/lib`. **Não sobrescreva a biblioteca no dispositivo.**

### Configuração dos Núcleos da NPU

Máscaras de núcleo disponíveis em `rknn_api.h`:

| Valor | Significado |
| --- | --- |
| `RKNN_NPU_CORE_AUTO` | Selecionar automaticamente |
| `RKNN_NPU_CORE_0` | Usar apenas o núcleo 0 |
| `RKNN_NPU_CORE_0_1` | Usar os núcleos 0 + 1 (`rkllm-inference` usa `2` como argumento) |
| `RKNN_NPU_CORE_0_1_2` | Usar todos os três núcleos (passar `3`) |

Outras flags comuns incluem `RKNN_FLAG_PRIOR_HIGH/MEDIUM/LOW` (prioridade), `RKNN_FLAG_ASYNC_MASK` (execução assíncrona), `RKNN_FLAG_COLLECT_PERF_MASK` (coleta de desempenho), `RKNN_FLAG_MEM_ALLOC_OUTSIDE` (memória externa) e `RKNN_FLAG_SHARE_WEIGHT_MEM` (compartilhar pesos entre modelos).

### Conversão de Modelo (em um PC)

O SDK **não inclui** o RKNN-Toolkit2. Configure um ambiente Python separado em um host Linux x86_64:

```bash
# An isolated conda or venv environment is recommended
pip install rknn-toolkit2==2.3.2
```

Esboço do script de conversão:

```python
from rknn.api import RKNN

rknn = RKNN(verbose=True)
rknn.config(
    mean_values=[[0, 0, 0]],
    std_values=[[255, 255, 255]],
    target_platform='rv1126b',       # Required; do not leave this unset
)
rknn.load_onnx(model='model.onnx')
rknn.build(do_quantization=False)    # Establish an FP16 baseline first
rknn.export_rknn('model.rknn')
```

Diretrizes:

- **Estabeleça primeiro uma base em FP16**, depois verifique se a inferência funciona e confira a acurácia antes de considerar quantização em INT8.
- INT8 requer uma lista representativa de imagens de calibração, um caminho por linha. Mantenha o conjunto de calibração separado do conjunto de validação.
- Mantenha metadados `.rknn.json` com o mesmo nome junto ao modelo exportado, incluindo layout de entrada, normalização, ordem de cores, política de redimensionamento, semântica de saída e pós-processamento. Isso é necessário para implantação e depuração.
- **Não adivinhe** os parâmetros de pré-processamento do modelo. Copie mean/std, tamanho de entrada, NCHW/NHWC e RGB/BGR do script de treinamento ou exportação.
- Uma conversão bem-sucedida significa apenas que um `.rknn` compatível com RV1126B foi produzido; isso **não prova a acurácia do modelo nem a correção em runtime**. Verifique esses pontos separadamente.

### Inferência no Dispositivo com a C API

```c
#include "rknn_api.h"

rknn_context ctx = 0;
rknn_init(&ctx, model_data, model_size, 0, NULL);

rknn_input_output_num io_num;
rknn_query(ctx, RKNN_QUERY_IN_OUT_NUM, &io_num, sizeof(io_num));

rknn_set_core_mask(ctx, RKNN_NPU_CORE_0_1);

rknn_input in[1] = {0};
in[0].type = RKNN_TENSOR_UINT8;
in[0].fmt  = RKNN_TENSOR_NHWC;
in[0].size = width * height * 3;
in[0].buf  = rgb_buffer;
rknn_inputs_set(ctx, 1, in);

rknn_run(ctx, NULL);

rknn_output out[1] = {0};
out[0].want_float = 1;
rknn_outputs_get(ctx, 1, out, NULL);
/* ... post-processing ... */
rknn_outputs_release(ctx, 1, out);
rknn_destroy(ctx);
```

Para uma aplicação usando a C API, comece com o [exemplo de RKNN em `recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain). Configurar manualmente o sysroot, caminhos de headers e flags de link pode introduzir bibliotecas que não correspondem ao firmware; primeiro use o exemplo para estabelecer um build conhecido como correto.

**Não use `rknn-toolkit-lite2` (Python) para escrever uma aplicação C/C++ no dispositivo.** Ele é destinado a validação rápida; aplicações de produção devem usar a C API.

### Modelos de Detecção Existentes

`project/app/recamera_ipc/model/rknn/` contém modelos e metadados que podem ser usados como referência:

| Arquivo | Descrição |
| --- | --- |
| `yolox_s.rknn` + `yolox_s.json` | Detecção de objetos YOLOX-S |
| `nanodet-plus-m_416.rknn` + `nanodet-plus-m_416.json` | Detecção NanoDet-Plus-M 416×416 |

Os arquivos `.json` contêm metadados relacionados (definições de entrada/saída, limiares e parâmetros de pós-processamento). Crie metadados equivalentes para o seu próprio modelo se quiser que ele seja carregado no framework de inferência `recamera_ipc`. O código relacionado está em `project/app/recamera_ipc/common/rc_infer/`, `rc_model/` e `rockiva/`.

### Projetos de Referência

| Caminho | Conteúdo |
| --- | --- |
| `project/app/rkai/rkai/samples/rkai_samples_vlm.cpp` | Exemplo de VLM (compreensão imagem-texto) |
| `project/app/rkai/rkai/samples/rkai_samples_vlm_vision.cpp` | Exemplo de VLM apenas visão |
| `project/app/rkai/rkai/samples/rkai_samples_llm.cpp` | Exemplo de LLM |
| `project/app/rkai/rkai/rkai_VLM/`, `rkai_LLM/` | Bibliotecas wrapper RKAI (CMake, com `include/` e `src/`) |
| `project/app/rkai/rkai/app_conf/{config,inputs}` | Configuração de runtime e amostras de entrada |
| `project/app/rkai/rkai/RkLunch.sh` | Script de inicialização |
| `project/app/testdemo/yoloworld_demo/` | Demo YOLO-World ponta a ponta (com `3rdparty` e `resources`) |
| `media/rknn-llm-mk/rknn-llm/examples/rkllm_api_demo/` | Exemplo mínimo da API RKLLM |
| `media/rknn-llm-mk/rknn-llm/examples/multimodal_model_demo/` | Exemplo multimodal completo (incluindo `deploy/3rdparty`) |

Documentação: `project/app/rkai/rkai/doc/Rockchip_Developer_Guide_Linux_RKAI_CN.md` (uma versão em inglês está disponível).

## 2. ROCKIVA

Localizado em `media/iva/iva/`, incluindo `CMakeLists.txt`, `librockiva/` e `models/`.

Pacote RV1126B:

```text
media/iva/iva/librockiva/rockiva-rv1126b-Linux/
├── include/
│   ├── rockiva_common.h       # Common types and initialization
│   ├── rockiva_one_api.h      # Unified API (most commonly used)
│   ├── rockiva_det_api.h      # Detection
│   ├── rockiva_face_api.h     # Face processing
│   ├── rockiva_ba_api.h       # Behavior analysis
│   └── rockiva_image.h        # Image structures
├── lib/librockiva.so
├── lib/librknnrt.so           # Includes another copy of the RKNN runtime
└── lib64/
```

Dados de modelo:

```text
media/iva/iva/models/rockiva_data_rv1126b/
├── iva_object_detection_pfp.data        # Person / face / pet detection
├── iva_object_detection_v3_pfp.data
└── iva_object_detection_v3_cls8.data    # 8-class detection
```

Faça o link com `-lrockiva -lrknnrt` e passe o diretório de modelos `.data` para a API de inicialização em tempo de execução.

O principal benefício do ROCKIVA é que ele **elimina a necessidade de treinar e pós-processar o seu próprio detector**: ele retorna diretamente bounding boxes de pessoa / rosto / pet. É adequado para aprimorar detecção de movimento, alertas de pessoa, detecção de queda e recursos semelhantes. Um projeto `fall_detect` neste SDK também pode servir como referência.

Documentação: `docs/zh/npu_iva/Rockchip_Developer_Guide_ROCKIVA_SDK_CN.pdf`. (**Não há categoria `npu_iva` em `docs/en`; apenas o manual em chinês está incluído.**)

`recamera_ipc` já contém código de integração ROCKIVA em `project/app/recamera_ipc/common/rockiva/`.

## 3. RKLLM (Modelos de Linguagem Grandes no Dispositivo)

### Conteúdo do SDK

`media/rknn-llm-mk/rknn-llm/`:

| Diretório / arquivo | Conteúdo |
| --- | --- |
| `rkllm-runtime/Linux/` | Runtime no dispositivo (`librkllmrt.so`) |
| `rkllm-toolkit/` | Ferramentas de conversão de modelo no PC (`packages/`, `examples/`) |
| `examples/rkllm_api_demo/` | Exemplo de LLM apenas texto |
| `examples/multimodal_model_demo/` | Exemplo multimodal imagem-texto (inclui `deploy/3rdparty`) |
| `examples/rkllm_server_demo/` | Exemplo de implantação em servidor |
| `doc/Rockchip_RKLLM_SDK_CN_1.2.3.pdf` / `_EN_` | Manuais oficiais do RKLLM SDK 1.2.3 |
| `rknpu-driver/rknpu_driver_0.9.8_20241009.tar.bz2` | Pacote do driver de kernel da NPU |
| `benchmark.md`, `CHANGELOG.md`, `README.md` | Benchmarks de desempenho e registro de alterações |

O wrapper do Makefile é `media/rknn-llm-mk/Makefile`; ele é compilado como parte de `./build.sh media`.

### Aplicativo: `rkllm-inference`

`project/app/rkllm-inference/` (habilitado com `RK_APP_RKLLM_INFERENCE=y`) produz dois binários:

- `rkllm_inference_demo`: inferência interativa imagem-texto
- `rkllm_benchmark_demo`: benchmark de inferência de execução única

```bash
make -C project/app/rkllm-inference
# Outputs: project/app/rkllm-inference/out/bin/{rkllm_inference_demo,rkllm_benchmark_demo}
```

Execute com:

```bash
rkllm_inference_demo \
  <image_path> <encoder_model_path> <llm_model_path> \
  <max_new_tokens> <max_context_len> <rknn_core_num> \
  [img_start] [img_end] [img_content]
```

| Argumento | Significado |
| --- | --- |
| `image_path` | Imagem de entrada |
| `encoder_model_path` | Codificador de visão `.rknn` |
| `llm_model_path` | Modelo de linguagem `.rkllm` |
| `max_new_tokens` | Número máximo de tokens gerados |
| `max_context_len` | Comprimento do contexto |
| `rknn_core_num` | `2` → `RKNN_NPU_CORE_0_1`; `3` → `RKNN_NPU_CORE_0_1_2`; qualquer outro valor → `AUTO` |
| `img_start/img_end/img_content` | Tokens especiais de visão; por padrão, usam tokens no estilo Qwen-VL `vision_start`, `vision_end` e `image_pad` |

A entrada interativa suporta `0` / `1` para prompts de exemplo embutidos, texto personalizado, perguntas imagem-texto prefixadas com `<image>`, `clear` para limpar o cache de KV e `exit` para sair.

A saída do benchmark inclui carregamento do modelo, pré-processamento, codificação de visão, TTFT, decodificação, tempo fim-a-fim e throughput. `prefill_time`, `decode_time` e `memory_usage` vêm de `RKLLMPerfStat` do RKLLM. Após a codificação de visão, ele **descarrega explicitamente o codificador antes de carregar o LLM** para reduzir a pressão de memória nesta plataforma limitada.

Dependências: `librknnrt.so`, `librkllmrt.so` e OpenCV da plataforma de destino. Ele reutiliza `rknn_api.h` de `project/app/rkai/rkai/common/include/rknn_api.h`.

> Se o seu VLM usar tokens de placeholder de visão diferentes, passe os valores corretos de `img_start` / `img_end` / `img_content` em tempo de execução. Caso contrário, a saída pode estar incorreta.

### Observações sobre Memória e Viabilidade

O RV1126B tem muito menos memória do que uma plataforma típica de implantação de LLM. Antes de executar um LLM / VLM:

- Use `rkllm_benchmark_demo` para verificar `memory_usage` e garantir que o modelo não acionará OOM.
- A configuração da placa define `RK_BOOTARGS_CMA_SIZE="8M"`, que é uma região CMA pequena; modelos grandes consomem principalmente memória regular do sistema e memória da NPU.
- A quantização INT4 / INT8 geralmente é necessária; modelos FP16 provavelmente não caberão.

## 4. AI-ISP

`RK_AIISP_MODEL=NONE` significa que o AI-ISP **não está habilitado** nesta configuração de placa, embora o caminho de código esteja presente:

- `media/isp/camera_engine_rkaiq/rkaiq/algos/aiisp/` (inclui `librknnrt_32bit.so` / `librknnrt_64bit.so`)
- Exemplos: `media/samples/example/demo/sample_demo_aiisp.c`, `sample_demo_dual_aiisp.c`
- Testes de estresse: `sample_demo_aiisp_stresstest.c`, `sample_demo_dual_aiisp_stresstest.c`
- Arquivos IQ relacionados a AINR estão em `iqfiles/isp35/ainr/`

Para habilitar o AI-ISP, defina `RK_AIISP_MODEL` para um modelo específico na configuração da placa e forneça os recursos correspondentes.

## 5. Testes de Desempenho e Estresse

| Ferramenta | Caminho |
| --- | --- |
| Teste de estresse da NPU | `project/app/recamera_utils/stress_test/npu_stress.py` |
| Teste de estresse da CPU | `project/app/recamera_utils/stress_test/cpu_stress.py` |
| Teste de estresse de eMMC / SD | `project/app/recamera_utils/stress_test/emmc_sd_stress.py` |
| Teste de EMC | `project/app/recamera_utils/stress_test/emc_test.py` |
| Benchmark RKLLM | `rkllm_benchmark_demo` |

Antes de executar uma carga de trabalho de IA sustentada, avalie o comportamento térmico e de energia. Períodos longos de carga total da NPU podem acionar throttling térmico; consulte `docs/zh/bsp/Rockchip_Developer_Guide_Thermal_CN.pdf`.

## Fluxo de Trabalho de Desenvolvimento Recomendado

1. Em um PC, converta ONNX para `.rknn` para `target_platform='rv1126b'` com RKNN-Toolkit2 2.3.2; comece com FP16.
2. Escreva um aplicativo mínimo com `rknn_api.h` e verifique na placa se o modelo carrega e retorna saída. Comece com uma imagem estática, sem a câmera.
3. Verifique a acurácia comparando as saídas com ONNX no mesmo conjunto de entrada.
4. Adicione o fluxo de vídeo: obtenha quadros NV12 do rockit → converta para RGB / redimensione com RGA → passe para a NPU. Veja [Desenvolvimento de Vídeo e ISP](/pt-br/recamera_pro_video_isp_development/).
5. Para detecção geral de pessoa / rosto, avalie o ROCKIVA antes de implementar a mesma funcionalidade por conta própria.
6. Considere quantização INT8 e otimização multi-core (`RKNN_NPU_CORE_0_1`) somente depois que o pipeline estiver funcionando.

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
