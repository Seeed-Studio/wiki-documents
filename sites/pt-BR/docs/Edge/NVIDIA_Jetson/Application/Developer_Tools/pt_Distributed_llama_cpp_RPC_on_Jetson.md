---
description: Este guia fornece instruções passo a passo para executar inferência LLM distribuída usando o backend RPC do llama.cpp em múltiplos dispositivos reComputer Jetson.
title: llama.cpp distribuído no reComputer Jetson (Modo RPC)
keywords:
  - reComputer Jetson
  - llama.cpp
  - Inferência Distribuída
  - RPC
  - CUDA
  - LLM
  - Aceleração por GPU
image: https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg
slug: /ai_robotics_distributed_llama_cpp_rpc_jetson
sku: 100090853,100076722,100060802,100032662
last_update:
  date: 2026-01-09T00:00:00.000Z
  author: Lorraine
createdAt: '2026-01-14'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/ai_robotics_distributed_llama_cpp_rpc_jetson/
---

<div align="center">
    <img width={600}
    src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg" />
</div>

<div style={{ textAlign: "justify" }}>
Executar modelos de linguagem grandes (LLMs) em dispositivos de borda como NVIDIA Jetson pode ser desafiador devido a limitações de memória e computação. Este guia demonstra como distribuir a inferência de LLM entre vários dispositivos reComputer Jetson usando o backend RPC do llama.cpp, permitindo escalonamento horizontal para cargas de trabalho mais exigentes.
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J5012-with-GMSL-extension-board-p-6682.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

## Pré-requisitos

- Dois dispositivos reComputer Jetson com JetPack 6.x+ instalado e drivers CUDA funcionando corretamente
- Ambos os dispositivos na mesma rede local, capazes de `ping` um ao outro
- Máquina local (cliente) com ≥ 64 GB de RAM, nó remoto com ≥ 32 GB de RAM

## 1. Clonar o Código-fonte

**Passo 1.** Clone o repositório llama.cpp:

```bash
git clone https://github.com/ggml-org/llama.cpp.git 
cd llama.cpp
```

## 2. Instalar Dependências de Build

**Passo 1.** Atualize a lista de pacotes e instale as dependências necessárias:

```bash
sudo apt update
sudo apt install -y build-essential cmake git libcurl4-openssl-dev python3-pip
```

## 3. Compilar com Backend RPC + CUDA

**Passo 1.** Configure o CMake com suporte a RPC e CUDA:

```bash
cmake -B build \
  -DGGML_CUDA=ON \
  -DGGML_RPC=ON \
  -DCMAKE_BUILD_TYPE=Release
```

**Passo 2.** Compile com jobs em paralelo:

```bash
cmake --build build --parallel   # Multi-core parallel compilation
```

## 4. Instalar Ferramentas de Conversão em Python

**Passo 1.** Instale o pacote Python em modo de desenvolvimento:

```bash
pip3 install -e .
```

## 5. Baixar e Converter o Modelo
Este exemplo usa TinyLlama-1.1B-Chat-v1.0:

Link do modelo:
https://huggingface.co/TinyLlama/TinyLlama-1.1B-Chat-v1.0

Baixe estes arquivos e coloque-os em uma pasta TinyLlama-1.1B-Chat-v1.0 criada por você.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/RPC_on_jetson/tinyllama_file.png"/>
</div>

**Passo 1.** Converta o modelo do Hugging Face para o formato GGUF:

```bash
# Assuming the model is already downloaded to ~/TinyLlama-1.1B-Chat-v1.0 using git-lfs or huggingface-cli
python3 convert_hf_to_gguf.py \
  --outfile ~/TinyLlama-1.1B.gguf \
  ~/TinyLlama-1.1B-Chat-v1.0
```

## 6. Verificar a Inferência em Uma Única Máquina

**Passo 1.** Teste o modelo com um prompt simples:

```bash
./build/bin/llama-cli \
  -m ~/TinyLlama-1.1B.gguf \
  -p "Hello, how are you today?" \
  -n 64
```

Se você receber uma resposta, o modelo está funcionando corretamente.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/RPC_on_jetson/tinylla_test.png"/>
</div>

## 7. Operação RPC Distribuída

### 7.1 Exemplo de Topologia de Hardware

| Dispositivo | RAM | Papel | IP |
|--------|-----|------|----|
| Máquina A | 64 GB | Cliente + Servidor Local | 192.168.100.2 |
| Máquina B | 32 GB | Servidor Remoto | 192.168.100.1 |

### 7.2 Iniciar Servidor RPC Remoto (Máquina B)

**Passo 1.** Conecte-se à máquina remota e inicie o servidor RPC:

```bash
ssh user@192.168.100.1
cd ~/llama.cpp
CUDA_VISIBLE_DEVICES=0 ./build/bin/rpc-server --host 192.168.100.1
```

O servidor usa por padrão a porta `50052`. Para personalizar, adicione `-p <port>`.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/RPC_on_jetson/worker1_server.png"/>
</div>

### 7.3 Iniciar Servidor RPC Local (Máquina A)

**Passo 1.** Inicie o servidor RPC local:

```bash
cd ~/llama.cpp
CUDA_VISIBLE_DEVICES=0 ./build/bin/rpc-server -p 50052
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/RPC_on_jetson/worker2_server.png"/>
</div>


### 7.4 Inferência Conjunta (Carga Multi-nó)

**Passo 1.** Execute a inferência usando ambos os servidores RPC, local e remoto:

```bash
./build/bin/llama-cli \
  -m ~/TinyLlama-1.1B.gguf \
  -p "Hello, my name is" \
  -n 64 \
  --rpc 192.168.100.1:50052,127.0.0.1:50052 \
  -ngl 99
```

`-ngl 99` descarrega 99% das camadas para as GPUs (tanto nós RPC quanto GPU local).

:::note
Se você quiser executar apenas localmente, remova o endereço remoto de `--rpc`:
`--rpc 127.0.0.1:50052`
:::

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/RPC_on_jetson/worker2_client.png"/>
</div>

## 8. Comparação de Desempenho

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/RPC_on_jetson/rpc_test.png"/>
</div>

*Esquerda: utilização de GPU em 192.168.100.1; Direita: utilização de GPU em 192.168.100.2*


*Ao executar apenas localmente, a pressão na GPU é concentrada em uma única placa*

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/RPC_on_jetson/no_rpc_client.png"/>
</div>
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/RPC_on_jetson/no_rpc_test.png"/>
</div>

## 9. Solução de Problemas

| Problema | Solução |
|-------|----------|
| falha na inicialização do rpc-server | Verifique se a porta está ocupada ou se o firewall está bloqueando 50052/tcp |
| Velocidade de inferência mais lenta | Modelo muito pequeno, latência de rede > benefício de computação; tente um modelo maior ou modo Unix-socket |
| Erro de falta de memória | Reduza o valor de `-ngl` para descarregar menos camadas para a GPU ou mantenha algumas camadas na CPU |

Com esta configuração, agora você pode alcançar “escalonamento horizontal” para inferência de LLM em vários dispositivos Jetson usando o backend RPC do llama.cpp. Para maior throughput, você pode adicionar mais nós RPC ou quantizar ainda mais o modelo para formatos como `q4_0` ou `q5_k_m`.

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
