---
description: Este wiki explica como implantar o NVIDIA TensorRT Edge-LLM no JetPack 6.2, incluindo preparação do modelo em um host Linux x86, exportação para ONNX, geração do mecanismo TensorRT no Jetson e validação da inferência de LLM.
title: Implantar TensorRT Edge-LLM no Jetpack6.2
keywords:
  - Jetson
  - TensorRT
  - LLM
  - TensorRT Edge-LLM
  - JetPack 6.2
  - ONNX
  - Edge AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /deploy_tensorrt_edge_llm_on_jetpack6.2
last_update:
  date: 06/16/2026
  author: Dongxu Jin
url: https://wiki.seeedstudio.com/pt-br/deploy_tensorrt_edge_llm_on_jetpack6.2/
createdAt: '2026-06-16'
updatedAt: '2026-06-17'
---

# Implantar TensorRT Edge-LLM no Jetpack6.2

## O que é TensorRT Edge-LLM?

TensorRT Edge-LLM é o runtime de inferência em C++ de alto desempenho da NVIDIA para Modelos de Linguagem de Grande Porte (LLMs) e Modelos Visão-Linguagem (VLMs) em plataformas embarcadas. Ele permite a implantação eficiente de modelos de linguagem de última geração em dispositivos com recursos limitados, como as plataformas NVIDIA Jetson e NVIDIA DRIVE.

TensorRT Edge-LLM oferece suporte a uma ampla gama de modelos de última geração:

- Modelos de Linguagem de Grande Porte: Llama 3.x, Qwen 2/2.5/3, DeepSeek-R1 Distilled

- Modelos Visão-Linguagem: Qwen2/2.5/3-VL, InternVL3-1B-hf, InternVL3-2B-hf, Phi-4-Multimodal

- Quantização: FP16, FP8 (SM89+), INT4 AWQ/GPTQ, NVFP4 (SM100+)

Para a lista completa de modelos suportados, requisitos de precisão e compatibilidade de plataforma, consulte Supported Models.https://nvidia.github.io/TensorRT-Edge-LLM/0.6.0/user_guide/getting_started/supported-models.html

TensorRT Edge-LLM é projetado principalmente para a pilha de software JetPack 7.x. No entanto, a NVIDIA documenta oficialmente o suporte de compatibilidade para JetPack 6.2 por meio de uma versão compatível dedicada. Este guia descreve o fluxo de trabalho de implantação e o processo de validação do TensorRT Edge-LLM no JetPack 6.2.

Para sistemas JetPack 6.2, o TensorRT Edge-LLM v0.6.0 é a versão recomendada e validada.

O fluxo de trabalho de implantação consiste em duas etapas:

1. Preparação do modelo em um host Linux x86

    Em uma estação de trabalho Linux x86 equipada com uma GPU NVIDIA, o modelo de linguagem de grande porte (LLM) de destino é quantizado e exportado para o formato ONNX usando a cadeia de ferramentas TensorRT Edge-LLM.

2. Geração do mecanismo no Jetson

    O modelo ONNX exportado é transferido para o dispositivo Jetson, onde o TensorRT Edge-LLM gera um mecanismo de inferência TensorRT otimizado para implantação e execução em tempo de execução.

## Parte 1: Preparação do modelo (host x86 com GPU)

O pipeline de exportação em Python converte e quantiza modelos. Ele deve ser executado em um sistema Linux x86 com uma GPU NVIDIA.

### Requisitos de sistema

- **Plataforma**: sistema Linux x86-64

- **SO recomendado**: Ubuntu 22.04, 24.04

- **GPU**: GPU NVIDIA com Compute Capability 8.0+ (Ampere ou mais recente)

- **CUDA**: 12.x ou 13.x

- **Python**: 3.10+

### Requisitos de memória（Dependendo do tamanho do modelo que você deseja implantar.）

**Memória de GPU (VRAM):**

- Regra geral: ~2-3x o tamanho do modelo para a maioria das operações, ~5-6x o tamanho do modelo para exportação ONNX em FP8

- Modelos pequenos (0.6B-3B): 8-16GB

- Modelos grandes (7B-8B): 20-48GB

- Modelos muito grandes (13B+): 48GB+

**Memória de CPU (RAM):**

- Regra geral: ~2-3x o tamanho do modelo para a maioria das operações, **~18-20x** o tamanho do modelo para exportação ONNX em FP8

- Modelos pequenos (0.6B-3B): 8-16GB (48GB+ para exportação ONNX em FP8)

- Modelos grandes (7B-8B): 20-48GB (128GB+ para exportação ONNX em FP8)

- Modelos muito grandes (13B+): 48GB+

> **Observação:** a exportação ONNX em FP8 atualmente requer significativamente mais memória de CPU (até 20x o tamanho do modelo) e de GPU (até 6x o tamanho do modelo) devido ao processamento interno. Este é um problema conhecido e está sendo ativamente otimizado.
>
>

### Instalação

1. **Clonar repositório**

    ```
    git clone https://github.com/NVIDIA/TensorRT-Edge-LLM.git
    cd TensorRT-Edge-LLM
    git submodule update --init --recursive
    ```

2. **Instalar pacote Python**

    Recomenda-se usar um ambiente virtual:

    ```
    python3 -m venv venv
    source venv/bin/activate
    ```

    Em seguida, basta instalar o software:

    ```
    pip3 install .
    ```

3. **Verificar instalação**

    ```
    tensorrt-edgellm-export-llm --help
    tensorrt-edgellm-quantize-llm --help
    ```

![Image](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/1.png)

Se a descrição dos parâmetros for exibida, o TensorRT Edge-LLM foi instalado com sucesso.

### Exportar e quantizar

Vamos usar o Qwen3-0.6B como um exemplo leve:

Observação: os comandos reais podem variar dependendo da sua estrutura específica de pastas.

```Markdown
# Set up workspace directory
export WORKSPACE_DIR=$HOME/tensorrt-edgellm-workspace
export MODEL_NAME=Qwen3-0.6B
mkdir -p $WORKSPACE_DIR
cd $WORKSPACE_DIR

# Step 1: Quantize to FP8 (downloads model automatically)
tensorrt-edgellm-quantize-llm \
    --model_dir Qwen/Qwen3-0.6B \
    --output_dir $MODEL_NAME/quantized \
    --quantization fp8

# Step 2: Export to ONNX
tensorrt-edgellm-export-llm \
    --model_dir $MODEL_NAME/quantized \
    --output_dir $MODEL_NAME/onnx
```

![Image](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/2.png)

![Image](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/3.png)

![Image](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/4.png)

![Image](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/5.png)

## Parte 2: Geração do mecanismo (dispositivo Jetson de borda)

O runtime em C++ constrói e executa modelos no dispositivo de borda de destino. Ele deve ser compilado no ou para o hardware de destino.

### Requisitos de sistema

Plataforma de destino:

- NVIDIA Jetson Orin NX SUPER 16GB

- JetPack 6.2

- Espaço em disco: 20~50GB para arquivos ONNX e mecanismos TensorRT

### Instalar e compilar

1. **Instalar dependências do sistema (no dispositivo de borda)**

    ```
    sudo apt update
    sudo apt install -y \
        cmake \
        build-essential \
        git
    ```

2. **Verificar instalação do CUDA e TensorRT**

    Após o JetPack ser instalado, o TensorRT deve estar instalado em /usr

    Verificar versão do CUDA

    ```
    nvcc  --version  # Should show CUDA 12.6
    ```

3. **Clonar repositório (no dispositivo de borda)**

    ```
    cd ~
    git clone https://github.com/NVIDIA/TensorRT-Edge-LLM.git
    cd TensorRT-Edge-LLM
    git submodule update --init --recursive
    ```

4. **Configurar compilação**

    No seu dispositivo Jetson Thor, configure a compilação com o seguinte comando:

    ```
    mkdir build
    cd build
    cmake .. \
        -DCMAKE_BUILD_TYPE=Release \
        -DTRT_PACKAGE_DIR=/usr \
        -DCMAKE_TOOLCHAIN_FILE=cmake/aarch64_linux_toolchain.cmake \
        -DEMBEDDED_TARGET=jetson-orin
    ```

5. **Compilar projeto**

    ```
    make -j$(nproc)
    ```

    Tempo de compilação: ~1-2 minutos, dependendo do hardware.

**Verificar compilação**

```
# Test C++ examples
./examples/llm/llm_build --help
./examples/llm/llm_inference --help
```

### Construir mecanismo TensorRT

Copie o diretório do modelo ONNX gerado no PC host para o dispositivo Jetson.

No seu Jetson：

```Bash
# Set up workspace directory
export WORKSPACE_DIR=$HOME/tensorrt-edgellm-workspace
export MODEL_NAME=Qwen3-0.6B
cd ~/TensorRT-Edge-LLM

# Build engine
./build/examples/llm/llm_build \
    --onnxDir $WORKSPACE_DIR/$MODEL_NAME/onnx \
    --engineDir $WORKSPACE_DIR/$MODEL_NAME/engines \
    --maxBatchSize 1 \
    --maxInputLen 1024 \
    --maxKVCacheCapacity 4096
```

![Image](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/6.png)

![Image](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/7.png)

### Executar inferência

Crie um arquivo de entrada com uma pergunta de exemplo:

```Bash
cat > $WORKSPACE_DIR/input.json << 'EOF'
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
                    "content": "What is the capital of United States?"
                }
            ]
        }
    ]
}
EOF
```

`"content"`is the input to the LLM.Run engine：

```Bash
cd ~/TensorRT-Edge-LLM

./build/examples/llm/llm_inference \
    --engineDir $WORKSPACE_DIR/$MODEL_NAME/engines \
    --inputFile $WORKSPACE_DIR/input.json \
    --outputFile $WORKSPACE_DIR/output.json
```

Verifique a saída:

```
# View the model response
cat $WORKSPACE_DIR/output.json
```

Você deverá ver uma resposta em JSON com a resposta do modelo, semelhante a:

```
{
  "responses": [
    {
      "text": "The capital of the United States is Washington, D.C.",
      "finish_reason": "stop"
    }
  ]
}
```

![Image](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/8.png)

![Image](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/9.png)

**Sucesso! 🎉** Você executou com sucesso a inferência de LLM no seu dispositivo de borda!

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
