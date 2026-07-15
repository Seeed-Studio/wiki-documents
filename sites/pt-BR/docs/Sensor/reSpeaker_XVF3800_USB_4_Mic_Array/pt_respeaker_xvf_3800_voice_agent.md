---
description: Construa seu próprio agente de voz local usando Whisper, Ollama e NVIDIA Jetson. Guia passo a passo para configuração da GPU, speech-to-text, LLM, TTS e IA de voz offline.
title: Implantando um Assistente de Voz Inteligente Offline de Ponta a Ponta
keywords:
  - reSpeaker
  - TTS
  - STT
  - LLM
  - Assistente de Voz
  - Reconhecimento de Fala
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_voice_assistant
last_update:
  date: 12/16/2025
  author: Kasun Thushara
createdAt: '2025-12-17'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/respeaker_voice_assistant/
---

## Visão Geral

Este projeto demonstra um assistente de voz inteligente totalmente local, projetado para escritórios inteligentes e espaços inteligentes. Ele usa o array de microfones ReSpeaker XVF3800 para captura de voz de alta qualidade, combinado com speech-to-text (STT) no dispositivo para transcrição precisa. Um modelo de linguagem grande local (LLM) processa as consultas do usuário de forma inteligente sem depender da nuvem, garantindo privacidade e baixa latência. Text-to-speech (TTS) gera respostas de voz naturais, permitindo interação em tempo real. O sistema é ideal para ambientes como escritórios, shoppings, quiosques e salas de reunião, onde o controle de voz seguro e offline é essencial.

## Hardware Necessário

<table align="center">
  <tr>
    <th>ReSpeaker XVF3800 </th>
    <th>Jetson AGX Orin 32GB H01 Kit</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/6.png" style={{width:500, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## Prepare os Dispositivos

#### ReSpeaker XVF3800 – Instalação de Firmware USB

Certifique-se de que o ReSpeaker XVF3800 USB Mic Array esteja atualizado com o firmware mais recente antes do uso.

- Siga o guia oficial de atualização de firmware:

  - Atualização de Firmware do ReSpeaker XVF3800 [Seeed Studio Wiki](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/#update-firmware)

Esta etapa garante entrada de áudio USB estável e compatibilidade com pipelines de processamento de fala posteriores.

#### NVIDIA Jetson AGX Orin – Configuração Inicial

Se o seu Jetson AGX Orin ainda não estiver configurado, faça o flash com a versão apropriada do JetPack.

- Guia oficial de configuração:

  - Jetson AGX Orin 32GB H01 Flash JetPack [Seeed Studio Wiki](https://wiki.seeedstudio.com/pt-br/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack/#prerequisites)

Após fazer o flash e iniciar no Ubuntu, atualize o sistema e instale os componentes do JetPack:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

### Configuração do Ambiente CUDA

#### Verificar Versão do CUDA Instalada

Verifique quais diretórios CUDA estão disponíveis:

```bash
ls /usr/local
```

Você deverá ver uma pasta como `cuda`, `cuda-12.x` ou similar.

#### Adicionar Caminhos do CUDA Permanentemente

Edite o arquivo de configuração do seu shell:

```bash
nano ~/.bashrc
```

Adicione as linhas a seguir ao final (substitua pela versão real do seu CUDA):

```bash
# CUDA paths
export PATH=/usr/local/cuda-(your_version)/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda-(your_version)/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```

Aplique as alterações:

```bash
source ~/.bashrc
```

#### Verificar Instalação do CUDA

Confirme se o CUDA está corretamente instalado e acessível:

```bash
nvcc --version
```

Se a versão do CUDA for exibida, o suporte à GPU está pronto.

### Instalar Whisper com Suporte a GPU

#### Clonar o Repositório do Whisper

Whisper é compilado a partir do código-fonte para habilitar aceleração CUDA.

- Repositório:

  - [https://github.com/ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp)

Instale as dependências necessárias:

```bash
sudo apt-get install libsdl2-dev
```

#### Compilar Whisper com CUDA Habilitado

A partir do diretório `whisper.cpp`, execute:

```bash
cmake -B build -DGGML_CUDA=1 -DWHISPER_SDL2=ON
cmake --build build -j --config Release
```

Isso compila o Whisper com aceleração de GPU e suporte a SDL.

#### Baixar o Modelo Whisper

Baixe o modelo Whisper a partir do Hugging Face:

- Modelo:

  - ggml-base-q8_0.bin

Coloque o modelo baixado dentro do diretório `models/`:

```bash
whisper.cpp/models/
```

#### Executar o Servidor Whisper

Inicie o servidor Whisper com suporte a GPU:

```bash
cd whisper.cpp
./build/bin/whisper-server \
  -m models/ggml-base.en.bin \
  --host 0.0.0.0 \
  --port 8080 \
  --gpu
```

Isso inicia um servidor de speech-to-text em tempo real acessível pela rede.

### Instalar Ollama para Inferência Local de LLM

Ollama oferece suporte oficial a dispositivos NVIDIA Jetson e fornece execução local de LLM acelerada por CUDA.

Instale o Ollama usando o instalador oficial:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

Execute o modelo Gemma 3:

```bash
ollama run gemma3:4b
```

## Assistente de Voz IA Inteligente – Guia de Início Rápido

### Resumo da Arquitetura

1. **Detecção de Palavra de Ativação (Wake Word)** – Ouve continuamente por uma frase de ativação predefinida.
2. **Speech-to-Text (STT)** – Converte a fala do usuário em texto usando um mecanismo local de reconhecimento de fala.
3. **LLM com RAG** – Recupera o contexto relevante de um banco de dados vetorial e gera respostas inteligentes usando um LLM local.
4. **Text-to-Speech (TTS)** – Converte a resposta gerada em fala com som natural.

Todo o processamento é realizado localmente para garantir baixa latência, privacidade de dados e capacidade de uso offline.

Repositório do projeto:

- [https://github.com/KasunThushara/LocalVoiceAssistant.git](https://github.com/KasunThushara/LocalVoiceAssistant)

Clone o repositório

```bash
git clone https://github.com/KasunThushara/LocalVoiceAssistant.git
```

### Início Rápido

#### Instalar Dependências

Certifique-se de que o Python e as dependências de sistema necessárias estejam instalados e, em seguida, execute:

```bash
pip install -r requirements.txt
```

#### Baixar um Modelo de Text-to-Speech (TTS)

Este projeto usa modelos **Piper TTS**. Abaixo está um exemplo usando uma voz masculina em inglês (Amy):

```bash
# Example: female voice (amy)
wget -O models/en_US-amy-low.onnx \
  https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_US/amy/low/en_US-amy-low.onnx

wget -O models/en_US-amy-low.onnx.json \
  https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_US/amy/low/en_US-amy-low.onnx.json
```

Você pode substituir este modelo por qualquer modelo de voz Piper compatível, conforme necessário.

#### Baixar Modelo de Embedding (Configuração Única)

O modelo de embedding é necessário para construir o banco de dados vetorial usado pelo pipeline RAG.

```bash
python download_sentence_tf.py
```

Esta etapa precisa ser executada apenas uma vez.

#### Construir o Banco de Dados Vetorial

Crie ou reconstrua o banco de dados vetorial usado para recuperação contextual:

```bash
python test_scripts/rebuild_vector.py
```

Este processo indexa seus documentos e os prepara para busca semântica rápida.

#### Executar a Aplicação

Inicie o Assistente de Voz IA Inteligente:

```bash
python app.py
```

Uma vez em execução, o sistema ficará escutando a palavra de ativação e responderá a consultas de voz em tempo real.

## Referências

- [Exemplo de Servidor Whisper:](https://github.com/ggml-org/whisper.cpp/tree/master/examples/server)
- [Repositório do Whisper:](https://github.com/ggml-org/whisper.cpp)
- [Biblioteca de Modelos Ollama:](https://ollama.com/library/gemma3)
- [Guia Ollama no Jetson:](https://www.jetson-ai-lab.com/tutorial_ollama.html)

## Suporte Técnico & Discussão de Produtos

Agradecemos por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
