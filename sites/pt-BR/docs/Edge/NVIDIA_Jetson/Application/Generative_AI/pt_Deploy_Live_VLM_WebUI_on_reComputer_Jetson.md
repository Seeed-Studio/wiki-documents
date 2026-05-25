---
description: Este artigo descreve como implantar o Live VLM WebUI em um dispositivo reComputer Jetson para habilitar interação e avaliação em tempo real com um Modelo Visão-Linguagem (VLM). Testes mostram que todo o fluxo de trabalho pode ser executado em hardware com 16 GB de memória, mas a velocidade de inferência é relativamente lenta.
title: Implantar Live VLM WebUI no reComputer Jetson
keywords:
  - reComputer
  - Jetson
  - VLM
  - Live VLM WebUI
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/gptoss-running-live.webp
slug: /deploy_live_vlm_webui_on_jetson
last_update:
  date: 12/26/2025
  author: Youjiang
createdAt: '2025-12-30'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/deploy_live_vlm_webui_on_jetson/
---


# Implantar Live VLM WebUI no reComputer Jetson

## Introdução

Live VLM WebUI é uma interface web universal para interação e avaliação em tempo real de Modelos Visão-Linguagem. Ele pode transmitir o vídeo da sua webcam para qualquer VLM e obter análise ao vivo com IA – perfeito para testar modelos, avaliar desempenho e explorar capacidades de visão com IA em múltiplos domínios e plataformas de hardware.

Este wiki mostrará como implantar o Live VLM WebUI no reComputer Super J4012.

<!-- <div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/live_vlm_webui/webui.png" />
</div> -->


## Pré-requisitos
- reComputer Super J4012
- Câmera USB

<div class="table-center">
<table style={{textAlign: 'center'}}>
    <tr>
        <th> reComputer Super J4012 </th>
        <th> Câmera USB </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110311-recomputer-super-j3010_1.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-114090066--x10-usb-camera.jpg" style={{width:400, height:'auto'}}/>
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
                <a class="get_one_now_item" href="https://www.seeedstudio.com/X10-USB-wired-camera-p-6506.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

:::info
Certifique-se de que o seu dispositivo Jetson tenha o sistema operacional Jetpack 6.2 instalado.
:::

:::info
Antes de configurar o software, conecte a câmera USB à porta Type-A do reComputer Super J4012.
:::


## Implantar Live VLM WebUI

Passo 1. Instale e execute o ollama no reComputer Jetson.

Execute o seguinte comando na janela do terminal no reComputer Jetson.

```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull llama3.2-vision:11b
```
:::note
O download do modelo levará aproximadamente 10 minutos. Aguarde pacientemente.
:::

Passo 2. Instale o Live VLM WebUI.

Execute o seguinte comando na janela do terminal no reComputer Jetson.

```bash
# Install dependencies
sudo apt install openssl python3-pip

# Install the package
python3 -m pip install --user live-vlm-webui

# Add to PATH (one-time setup)
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Run it
live-vlm-webui
```

Passo 3. Configure e inicie o Live VLM WebUI.

Se o aplicativo for executado com sucesso, você poderá abrir o WebUI digitando `https://localhost:8090` no navegador.


- Em VLM API Configuration, selecione o mecanismo de inferência `ollama` e o modelo `llama3.2-vision` que você acabou de baixar.
- Em Camera and App Control, selecione `USB Camera`.
- Após clicar no botão Run, você poderá aguardar os resultados de inferência do backend.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/live_vlm_webui/config.png" />
</div>

## Demonstração do Efeito

Todo o fluxo de trabalho pode ser executado normalmente em um dispositivo reComputer Super J4012 com 16 GB de memória. No entanto, durante os testes reais, verificou-se que a velocidade de inferência é muito lenta.

<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/GrdIRkmiXUc" title="Deploy Live LLM WebUI on reComputer Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referências
- https://ollama.com/download/linux
- https://github.com/NVIDIA-AI-IOT/live-vlm-webui


## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>