---
description: Guia passo a passo para gravar o firmware JetPack em dispositivos Jetson da Seeed Studio usando o Flash Center no Seeed Jetson DevelopTool.
title: Gravar firmware
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - Flash Center
  - JetPack
  - firmware flash
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_flash_firmware
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/pt-br/jetson_developtool_flash_firmware/
---

O módulo **Flash Center** permite baixar e gravar o firmware JetPack oficial em qualquer dispositivo Jetson da Seeed Studio compatível com um único fluxo de trabalho — sem necessidade de scripts BSP na linha de comando.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-flash-center.png" style={{width:800, height:'auto'}}/></div>

## Demo: Tutorial completo de gravação

<div style={{textAlign:'center'}}>
  <video width="800" controls>
    <source src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-firmware-tutorial-en.mp4" type="video/mp4"/>
  </video>
</div>

## Antes de começar

- Um host Linux nativo (Ubuntu 20.04/22.04/24.04) é fortemente recomendado. Consulte [Connect Device](/pt-br/jetson_developtool_connect_device) para a configuração do modo USB Recovery.
- Certifique-se de ter pelo menos **20 GB** de espaço livre em disco para o download e a extração do firmware.

## Fluxo de trabalho de gravação

**Etapa 1. Selecione seu dispositivo e a versão L4T.**

Na aba **Flash Center**, escolha o modelo do seu dispositivo (por exemplo, `J4012s`) e a versão L4T de destino no menu suspenso. Consulte [Supported Devices](/pt-br/jetson_developtool_supported_devices) para a lista completa de compatibilidade.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-step1-select-device.png" style={{width:800, height:'auto'}}/></div>

**Etapa 2. Baixe e verifique o firmware.**

Clique em **Download / Extract BSP**. A ferramenta irá:

- Baixar o pacote de firmware com suporte a retomada (seguro para interromper e continuar)
- Verificar a integridade do download via checksum SHA256
- Extrair o BSP automaticamente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-step1-prepare-bsp.png" style={{width:800, height:'auto'}}/></div>

**Etapa 3. Coloque o dispositivo em modo Recovery.**

Mantenha pressionado o botão **Recovery** no dispositivo enquanto conecta o cabo USB-C ao seu PC host (ou enquanto liga o dispositivo). Solte após 2 segundos.

**Etapa 4. Detecte o dispositivo.**

Clique em **Detect Device** na ferramenta. Você deverá ver o dispositivo detectado via USB. Se ele não for encontrado, verifique novamente o cabo USB e as etapas do modo Recovery.

**Etapa 5. Inicie a gravação.**

Clique em **Start Flash**. O processo leva de **2 a 10 minutos**, dependendo do tamanho do firmware e da velocidade do USB. Não desconecte a alimentação ou o USB durante a gravação.

Quando terminar, o dispositivo será reiniciado automaticamente com o novo firmware.

:::tip
Se você estiver no Windows e a detecção USB falhar, tente o fluxo de trabalho WSL2 + usbipd. A ferramenta irá guiá-lo para anexar o dispositivo USB ao WSL2.
:::

:::caution
A gravação apagará todos os dados na eMMC/NVMe do Jetson. Faça backup dos dados importantes antes de continuar.
:::

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
