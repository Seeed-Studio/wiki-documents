---
description: Este wiki apresenta uma solução de controle de motor por voz baseada na plataforma Jetson, detalhando o hardware necessário, métodos de conexão e etapas de implantação de software.
title: Controlar Motor por Voz com LLM no Jetson
keywords:
  - reComputer
  - Jetson
  - LLM
  - Motor
  - Qwen
  - Function Calling
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/hardware_connect.webp
slug: /control_motor_by_voice_llm_on_jetson
last_update:
  date: 08/19/2025
  author: Youjiang
createdAt: '2025-08-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/control_motor_by_voice_llm_on_jetson/
---


# Controlar Motor por Voz com LLM no Jetson

## Introdução

Este wiki constrói um sistema de motor controlado por voz de ponta a ponta baseado na plataforma Jetson (reComputer Robotics J4012), integrando reconhecimento de fala, compreensão de intenção por modelo de linguagem grande (LLM) na borda e controle de hardware para possibilitar uma interação natural entre humanos e máquina — usuários podem controlar Motores MyActuator X Série com comandos de voz simples (por exemplo, "Gire 90 graus no sentido horário").

## Pré-requisitos
- reComputer Robotics J4012
- reSpeaker XVF3800
- Motores MyActuator X Série

<table align="center">
    <tr>
        <th>reComputer Robotics J4012</th>
        <th>reSpeaker XVF3800</th>
        <th>Motores MyActuator X Série</th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg" style={{width:250, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.jpg" style={{width:250, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-motor.png" style={{width:250, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>

## Conexão de Hardware

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/hardware_connect.jfif" />
</div>

## Primeiros Passos

O fluxo de trabalho de todo o sistema envolve três etapas:

1. ASR: O microfone captura comandos de áudio do usuário e os converte em texto usando Whisper.
2. Function Calling: O modelo de linguagem grande gera parâmetros de controle do motor que atendem aos requisitos com base nas instruções de entrada do usuário.
3. Controle do Motor: O programa de controle apropriado é chamado para acionar o motor a girar até a posição especificada.

Em seguida, explicaremos em detalhes a implementação de cada etapa.

### Instalar o Servidor Whisper

Primeiro, precisamos instalar o serviço Whisper para habilitar a funcionalidade de ASR. Abra uma janela de terminal no dispositivo Jetson e execute o seguinte comando.

```bash
git clone https://github.com/jjjadand/whisper-stable4curl
cd whisper-stable4curl
export PATH=/usr/local/cuda-12.6/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda-12.6/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
cmake --build build -j --config Release
```

Se tudo correr bem, você verá os seguintes logs na janela do terminal.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/whisper.png" />
</div>

Em seguida, iniciamos o serviço de inferência do Whisper:

```bash
./build/bin/whisper-stream -m ./models/ggml-base.en-q5_1.bin -t 8 --step 0 --length 7000 -vth 0.7 --keep 1200
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/launch_whisper.png" />
</div>

### Instalar o Ollama

Ollama é um framework de inferência de LLM de computação de borda extremamente fácil de usar, que pode ser implantado no Jetson com apenas um único comando. Abra uma nova janela de terminal no seu dispositivo Jetson e execute:

```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull qwen2.5
```

:::info
Aqui, usamos o modelo de linguagem grande Qwen 2.5 para entender a intenção do usuário.
:::

### Instalar o Script de Controle do Motor

Execute o seguinte comando para iniciar o script de controle do motor:

```bash
git clone https://github.com/yuyoujiang/voice_control.git
cd voice_control
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
python app.py
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/motor_control.png" />
</div>


## Demonstração do Efeito


<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/ORv8x0aSXfQ" title="🤖 Voice-Controlled Robot: Full Pipeline from Speech Recognition to Motor Control!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


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