---
description: Este wiki mostra como implantar e usar o Clawdbot no reComputer Jetson.
title: Desenvolver reComputer Jetson usando Clawdbot
keywords:
  - reComputer Super
  - Jetson
  - LLM
  - Clawdbot
  - Qwen
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/chatops_homepage.webp
slug: /develop_recomputer_jetson_using_clawdbot
sku: 114110314, 114090066
last_update:
  date: 01/28/2026
  author: Youjiang
createdAt: '2026-01-28'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/develop_recomputer_jetson_using_clawdbot/
---


# Desenvolver reComputer Jetson usando Clawdbot

## Introdução

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>

    Tradicionalmente, desenvolver em um dispositivo de borda Jetson exigia uma configuração física com monitor, teclado e mouse. Mesmo com acesso remoto via SSH, os desenvolvedores ainda dependiam de fluxos de trabalho baseados em terminal e de ferramentas adicionais para monitoramento e implantação.
    Com o Clawdbot, o desenvolvimento se torna muito mais simples. Agora, os desenvolvedores podem interagir com o reComputer Jetson diretamente por meio de um aplicativo de chat como o WhatsApp — enviando mensagens para verificar o status do dispositivo, executar comandos e depurar scripts de uma forma mais conveniente.

    Este wiki mostra como implantar e usar o Clawdbot no reComputer Jetson.
</div>

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/chatops.png" />
</div>

## Pré-requisitos

- reComputer Super J4012
- Câmera USB

<table align="center">
    <tr>
        <th>reComputer Super J4012</th>
        <th>Câmera USB</th>
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
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html">
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

## Conexão de Hardware

Conecte a câmera USB a uma porta USB Tipo A no dispositivo Jetson.

## Primeiros Passos

1. Instalar o Clawdbot no dispositivo Jetson  
Abra um terminal no dispositivo Jetson e execute:

```bash
curl -fsSL https://molt.bot/install.sh | bash
```

2. Configurar o Clawdbot  
Após a instalação, a página de configuração é aberta automaticamente. Siga as instruções no terminal e preste atenção a:

- Selecionar o LLM e inserir a chave de API
- Escolher o canal de interação (WhatsApp neste exemplo)

3. Iniciar o Agente de IA Clawdbot  
Se tudo estiver configurado corretamente, o agente será iniciado automaticamente. Em seguida, abra a WebUI no navegador do dispositivo Jetson:  
`http://127.0.0.1:18789`

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/webui.png" />
</div>

Agora você pode abrir o WhatsApp no seu telefone e controlar o reComputer Jetson enviando mensagens para você mesmo.

## Demonstração do Efeito

No vídeo de demonstração, usamos um aplicativo de bate-papo móvel para verificar o status do dispositivo Jetson e desenvolvemos um script de depuração de câmera por meio de interação baseada em chat.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/9bQcx7G0CiU" title="Develop reComputer Jetson using Clawdbot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
