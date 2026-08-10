---
description: Implantar NVIDIA TensorRT Edge-LLM no JetPack 7.2 exportando um modelo em um host x86 com GPU, compilando o runtime no Jetson Orin ou Jetson Thor, gerando um engine TensorRT e validando a inferência em C++.
title: Implantar TensorRT Edge-LLM no JetPack 7.2
keywords:
  - Jetson
  - TensorRT
  - LLM
  - TensorRT Edge-LLM
  - JetPack 7.2
  - Jetson Orin
  - Jetson Thor
  - ONNX
image: https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/7.png
slug: /deploy_tensorrt_edge_llm_on_jetpack7.2
last_update:
  date: 07/31/2026
  author: Dongxu Jin
url: https://wiki.seeedstudio.com/pt-br/deploy_tensorrt_edge_llm_on_jetpack7.2/
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
---

# Implantar TensorRT Edge-LLM no JetPack 7.2

## Visão geral

[TensorRT Edge-LLM](https://github.com/NVIDIA/TensorRT-Edge-LLM) é a pilha de inferência de alto desempenho da NVIDIA para implantar modelos de linguagem de grande porte, modelos visão-linguagem, modelos multimodais e cargas de trabalho selecionadas de visão-linguagem-ação em plataformas NVIDIA embarcadas. Ela fornece um pipeline de exportação de checkpoint, construtor de engine TensorRT, runtime em C++ otimizado, exemplos e um servidor experimental compatível com OpenAI.

JetPack 7.2 é o caminho oficialmente suportado do TensorRT Edge-LLM para Jetson Orin. Jetson Thor também é suportado no JetPack 7.x. Este guia fixa o **TensorRT Edge-LLM v0.9.1**, a versão publicada mais recente quando esta página foi atualizada em **31 de julho de 2026**.

:::note
As capturas de tela deste guia reutilizam as imagens de fluxo de trabalho existentes do TensorRT Edge-LLM do tutorial do JetPack 6.2. O fluxo de trabalho geral de exportação no host e engine no alvo é o mesmo, mas nomes de comandos, flags de compilação, números de versão e saída do console podem ser diferentes na v0.9.1.
:::

## Matriz de plataformas

| Alvo | Versão de software | Alvo CMake | Valor do toolkit CUDA | Precisão de runtime |
| --- | --- | --- | --- | --- |
| Jetson Orin | JetPack 7.2 | `jetson-orin` | `13.2` | FP16, INT8, INT4 |
| Jetson Thor | JetPack 7.2 | `jetson-thor` | `13.2` | Verifique a matriz de modelos suportados para cada modelo e precisão. |

:::warning
TensorRT Edge-LLM v0.9.1 não oferece suporte à precisão de runtime FP8, MXFP8, FP4 ou NVFP4 no Jetson Orin. Use checkpoints FP16, INT8 ou INT4 para o Orin. Não copie um engine TensorRT compilado no JetPack 6.2 para o JetPack 7.2; reconstrua o engine no sistema JetPack 7.2 de destino.
:::

A implantação tem duas etapas:

1. **Exportar em um host x86 com GPU**: instalar as ferramentas em Python e exportar um checkpoint do Hugging Face para ONNX.
2. **Compilar e executar no Jetson**: compilar o runtime em C++, construir um engine TensorRT a partir do ONNX e executar a inferência.

## Parte 1: Exportar o modelo em um host x86 com GPU

### Requisitos do host

- Linux x86-64 com Ubuntu 22.04 ou 24.04
- GPU NVIDIA Ampere ou mais recente com compute capability 8.0+
- CUDA 12.x ou 13.x
- Python 3.10+
- RAM, VRAM e espaço em disco suficientes para o checkpoint selecionado

A exportação do modelo pode exigir várias vezes o tamanho do checkpoint em RAM e VRAM do host. Comece com o exemplo pequeno Qwen3-0.6B FP16 antes de avançar para um modelo maior ou quantizado.

### Clonar e instalar a v0.9.1

```bash
git clone --branch v0.9.1 --depth 1 https://github.com/NVIDIA/TensorRT-Edge-LLM.git
cd TensorRT-Edge-LLM
git submodule update --init --recursive

python3 -m venv venv
source venv/bin/activate
python -m pip install --upgrade pip
pip install .
```

Instale as dependências opcionais das ferramentas quando você precisar de quantização de checkpoint, mesclagem de LoRA, redução de vocabulário ou auxiliares de tokenizer:

```bash
pip install ".[tools]"
```

Verifique a interface de linha de comando atual:

```bash
tensorrt-edgellm-export --help
tensorrt-edgellm-quantize --help
```

![Verificação de comando do TensorRT Edge-LLM](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/1.png)

### Exportar Qwen3-0.6B para ONNX

O exemplo a seguir exporta diretamente o checkpoint FP16. FP16 é suportado no Jetson Orin e mantém o primeiro fluxo de validação simples.

```bash
export EDGE_LLM_PATH=$HOME/TensorRT-Edge-LLM
export WORKSPACE_DIR=$HOME/tensorrt-edgellm-workspace
export MODEL_NAME=Qwen3-0.6B
export PYTHONPATH=$EDGE_LLM_PATH:$PYTHONPATH

mkdir -p "$WORKSPACE_DIR"
cd "$WORKSPACE_DIR"

tensorrt-edgellm-export \
  Qwen/Qwen3-0.6B \
  "$WORKSPACE_DIR/$MODEL_NAME/onnx"
```

![Fluxo de trabalho de exportação do modelo](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/2.png)

![Processamento de checkpoint](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/3.png)

![Progresso da exportação ONNX](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/4.png)

![Artefatos de modelo exportado](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/5.png)

O grafo LLM exportado deve estar disponível em:

```text
$WORKSPACE_DIR/Qwen3-0.6B/onnx/llm
```

### Opcional: usar um checkpoint INT4 no Jetson Orin

Para um modelo maior em um dispositivo Orin, use um checkpoint listado como INT4 AWQ ou INT4 GPTQ na matriz oficial de modelos suportados. Checkpoints pré-quantizados podem ser exportados diretamente. Pesos INT4 externalizados reduzem a pressão de memória na construção do engine em dispositivos Orin com memória limitada.

```bash
tensorrt-edgellm-export \
  /path/to/supported-int4-checkpoint \
  "$WORKSPACE_DIR/<model-name>/onnx" \
  --externalize-weights int4_ffn
```

Para um checkpoint INT4 MoE, adicione as opções de pesos externalizados específicas da família de modelos documentadas pelo TensorRT Edge-LLM. Sempre verifique o checkpoint e a precisão exatos na [matriz de modelos suportados](https://nvidia.github.io/TensorRT-Edge-LLM/user_guide/getting_started/supported-models.html).

### Transferir o diretório ONNX para o Jetson

Crie o diretório de destino e copie o modelo exportado:

```bash
ssh <jetson-user>@<jetson-ip> \
  "mkdir -p ~/tensorrt-edgellm-workspace/$MODEL_NAME"

scp -r \
  "$WORKSPACE_DIR/$MODEL_NAME/onnx" \
  <jetson-user>@<jetson-ip>:~/tensorrt-edgellm-workspace/$MODEL_NAME/
```

## Parte 2: Compilar TensorRT Edge-LLM no JetPack 7.2

O fluxo de trabalho principal a seguir tem como alvo o Jetson Orin. Uma configuração para Jetson Thor é fornecida em seguida.

### Verificar o JetPack 7.2

No dispositivo Jetson, verifique a versão do Jetson Linux, o compilador CUDA e os pacotes TensorRT:

```bash
cat /etc/nv_tegra_release
nvcc --version
dpkg -l | grep -E 'tensorrt|libnvinfer'
```

Para a matriz de compilação v0.9.1 do JetPack 7.2, `nvcc --version` deve corresponder ao toolchain CUDA 13.2 esperado pela configuração de compilação.

### Instalar dependências de compilação

```bash
sudo apt update
sudo apt install -y cmake build-essential git
```

### Clonar a versão correspondente no Jetson

Use a mesma versão do TensorRT Edge-LLM para exportação no host e runtime no alvo:

```bash
cd ~
git clone --branch v0.9.1 --depth 1 https://github.com/NVIDIA/TensorRT-Edge-LLM.git
cd TensorRT-Edge-LLM
git submodule update --init --recursive
```

### Configurar e compilar para Jetson Orin

```bash
cd ~/TensorRT-Edge-LLM
mkdir -p build
cd build

cmake .. \
  -DCMAKE_BUILD_TYPE=Release \
  -DTRT_PACKAGE_DIR=/usr \
  -DCMAKE_TOOLCHAIN_FILE=cmake/aarch64_linux_toolchain.cmake \
  -DEMBEDDED_TARGET=jetson-orin \
  -DCUDA_CTK_VERSION=13.2 \
  -DENABLE_CUTE_DSL=ALL

cmake --build . -j"$(nproc)"
```

Os kernels CuTe DSL são habilitados porque os caminhos atuais de modelos Qwen3.5 e outros suportados exigem isso.

Verifique se os exemplos foram compilados:

```bash
./examples/llm/llm_build --help
./examples/llm/llm_inference --help
```

### Variante de compilação para Jetson Thor

No Jetson Thor com JetPack 7.2, use as mesmas etapas de compilação, mas altere o alvo embarcado:

```bash
cmake .. \
  -DCMAKE_BUILD_TYPE=Release \
  -DTRT_PACKAGE_DIR=/usr \
  -DCMAKE_TOOLCHAIN_FILE=cmake/aarch64_linux_toolchain.cmake \
  -DEMBEDDED_TARGET=jetson-thor \
  -DCUDA_CTK_VERSION=13.2 \
  -DENABLE_CUTE_DSL=ALL
```

## Compilar o engine TensorRT

No dispositivo Jetson, defina o workspace e construa um engine a partir do grafo ONNX exportado:

```bash
export WORKSPACE_DIR=$HOME/tensorrt-edgellm-workspace
export MODEL_NAME=Qwen3-0.6B

cd ~/TensorRT-Edge-LLM

./build/examples/llm/llm_build \
  --onnxDir "$WORKSPACE_DIR/$MODEL_NAME/onnx/llm" \
  --engineDir "$WORKSPACE_DIR/$MODEL_NAME/engines" \
  --maxBatchSize 1 \
  --maxInputLen 1024 \
  --maxKVCacheCapacity 4096
```

![Compilação do engine TensorRT](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/6.png)

![Compilação do engine concluída](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/7.png)

O tempo de compilação do engine e o pico de memória dependem do modelo, precisão, comprimento máximo de entrada, capacidade do cache KV e configuração de memória do Jetson.

## Executar inferência em C++

Crie um arquivo de requisição:

```bash
cat > "$WORKSPACE_DIR/input.json" <<'EOF'
{
  "batch_size": 1,
  "temperature": 1.0,
  "top_p": 1.0,
  "top_k": 50,
  "max_generate_length": 128,
  "requests": [
    {
      "messages": [
        {
          "role": "user",
          "content": "What is the capital of the United States?"
        }
      ]
    }
  ]
}
EOF
```

Execute a inferência:

```bash
cd ~/TensorRT-Edge-LLM

./build/examples/llm/llm_inference \
  --engineDir "$WORKSPACE_DIR/$MODEL_NAME/engines" \
  --inputFile "$WORKSPACE_DIR/input.json" \
  --outputFile "$WORKSPACE_DIR/output.json"
```

Visualize o resultado:

```bash
cat "$WORKSPACE_DIR/output.json"
```

A resposta deve conter texto gerado semelhante a:

```json
{
  "responses": [
    {
      "output_text": "The capital of the United States is Washington, D.C.",
      "request_idx": 0,
      "batch_idx": 0
    }
  ]
}
```

![Inferência com TensorRT Edge-LLM](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/8.png)

![Saída da inferência](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/9.png)

## Fazer benchmark do engine

Use `llm_bench` para medições sintéticas de prefill e decode:

```bash
./build/examples/llm/llm_bench \
  --engineDir "$WORKSPACE_DIR/$MODEL_NAME/engines" \
  --mode prefill
```

Registre os seguintes valores ao comparar JetPack 6.2 e JetPack 7.2:

- Pico de memória do sistema durante a compilação do engine
- Memória após o carregamento do engine
- Tempo até o primeiro token
- Vazão de processamento do prompt
- Vazão de decode
- Frequência da GPU, modo de energia, temperatura e potência total da placa

## Diferenças em relação ao fluxo de trabalho do JetPack 6.2

| Item | Caminho compatível com JetPack 6.2 | Caminho suportado no JetPack 7.2 |
| --- | --- | --- |
| Status do Jetson Orin | Compatível | Oficialmente suportado e testado |
| Valor de compilação CUDA | `12.6` | `13.2` |
| Alvo CMake | `jetson-orin` | `jetson-orin` |
| Precisão de runtime no Orin | FP16, INT8, INT4 | FP16, INT8, INT4 |
| CuTe DSL | Dependente da versão | Habilitar com `-DENABLE_CUTE_DSL=ALL` para os caminhos de modelo atuais |
| Reutilização de engine | Recompilar para JetPack 6.2 | Recompilar para JetPack 7.2 |

## Solução de problemas

### CMake não consegue encontrar o TensorRT

Confirme que o JetPack instalou os pacotes de desenvolvimento do TensorRT e que as bibliotecas estão em `/usr`:

```bash
dpkg -l | grep -E 'tensorrt|libnvinfer'
ls /usr/include/NvInfer.h
```

### Versão do CUDA não corresponde

Não altere `CUDA_CTK_VERSION` apenas para contornar verificações de configuração. Confirme que o dispositivo está executando a imagem JetPack 7.2 pretendida e que `nvcc` está apontando para o kit de ferramentas CUDA do JetPack.

### A compilação do engine é encerrada ou fica sem memória

- Comece com Qwen3-0.6B FP16.
- Use um checkpoint INT4 compatível para modelos maiores no Jetson Orin.
- Use pesos INT4 externalizados quando houver suporte.
- Reduza `maxInputLen` e `maxKVCacheCapacity` para a primeira execução de validação.
- Pare contêineres não relacionados e serviços que consomem muita memória antes de compilar o engine.

### Modelo ou precisão são rejeitados

Verifique a [matriz de modelos compatíveis do TensorRT Edge-LLM](https://nvidia.github.io/TensorRT-Edge-LLM/user_guide/getting_started/supported-models.html). Suporte à família de modelos não significa que todo checkpoint, precisão, codificador visual ou combinação de decodificador especulativo seja compatível em todas as plataformas Jetson.

## Próximas etapas

- Adicione um fluxo de trabalho LLM INT4 para um modelo Jetson Orin maior.
- Adicione inferência VLM com um checkpoint compatível Qwen-VL, InternVL, Phi multimodal ou Gemma.
- Avalie a API experimental de alto nível em Python e o servidor compatível com OpenAI.
- Use o [Rapid Prototyping on Jetson with NVIDIA Skills](/pt-br/rapid_prototyping_on_jetson_with_nvidia_skills/) para automatizar inspeção do dispositivo, auditoria de memória e coleta de benchmarks.

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
