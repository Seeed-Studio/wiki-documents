---
description: Gravador ISP USB Atmel AVRISP STK500
title: Gravador ISP USB Atmel AVRISP STK500
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Atmel_AVRISP_STK500_USB_ISP_Programmer
sku: 105990010
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Atmel_AVRISP_STK500_USB_ISP_Programmer/
---


![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/Avrisp_stk500_usb.jpg)

<!-- <p style=":center"><a href="https://www.seeedstudio.com/depot/atmel-avrisp-stk500-usb-isp-programmer-p-207.html?cPath=132_135" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/depot/atmel-avrisp-stk500-usb-isp-programmer-p-207.html?cPath=132_135" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p>

## Recursos
- Ele pode oferecer suporte a uma ampla gama de microcontroladores ATMEL AVR.
- Ele pode funcionar com AVR Studio ou WINAVR (GCC)

:::note   
   Se você não conseguir baixar o ATMEL AVR Studio 4.13, baixe o avrstudio7, baixe a versão mais recente do AvrStudio. Em Tools selecione stk500.
:::

## Ideias de Aplicação
- Programação AVR
- Gravar Bootloader AVR

## Dispositivos Suportados
|                       |                       |                     |                       |
|-----------------------|-----------------------|---------------------|-----------------------|
| AT90S1200             | AT90S2313             | AT90S2323           | AT90S2343             |
| AT90S4433             | AT90S8515             | AT90S8535           | ATmega128             |
| ATmega1280            | ATmega1281            | ATmega128RZAV       | ATmega128RZBV         |
| ATmega16              | ATmega161             | ATmega162           | ATmega163             |
| ATmega164P            | ATmega164P Automotive | ATmega165           | ATmega168             |
| ATmega168 Automotive  | ATmega168P            | ATmega169           | ATmega16A             |
| ATmega16U4            | ATmega2560            | ATmega2561          | ATmega256RZAV         |
| ATmega256RZBV         | ATmega32              | ATmega323           | ATmega324P            |
| ATmega324P automotive | ATmega325             | ATmega3250          | ATmega3250P           |
| ATmega325P            | ATmega328P            | ATmega329           | ATmega3290            |
| ATmega3290P           | ATmega329P            | ATmega32A           | ATmega32U4            |
| ATmega48              | ATmega48 Automotive   | ATmega48P           | ATmega64              |
| ATmega640             | ATmega644             | ATmega644P          | ATmega644P Automotive |
| ATmega645             | ATmega6450            | ATmega649           | ATmega6490            |
| ATmega8535            | ATmega88              | ATmega88 Automotive | ATmega88P             |
| ATtiny12              | ATtiny13              | ATtiny13A           | ATtiny15L             |
| ATtiny2313            | ATtiny26              | ATtiny88            |                       |


## Conexão de Hardware
<!-- <p style=":center"><a target="_blank"><img src="https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-1.JPG"  /></a></p> -->
![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-1.JPG)

<!-- <p style=":center"><a target="_blank"><img src="https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-2.jpg"  /></a></p> -->
![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-2.jpg)

## Exemplo: Gravar Bootloader no Arduino UNO

- 1.Como conectar: veja a figura acima
- 2.Instale o driver AVRISP no CD.
- 3.Baixe o AVR STUDIO4.19 e instale-o.

:::warning
    O software AVR STUDIO4.13 está no CD.
:::
- 4.Gravar Bootloader no Arduino UNO

    - Passo 1. Abra o AVR STUDIO4.19
    - Passo 2. Conecte ao STK500

        ![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP0.jpg)

    - Passo 3. Selecione Platform

        ![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-3.jpg)

    - Passo 4. Selecione o dispositivo "ATmega328P"
    ![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-4.jpg)

    - Passo 5. Selecione o Bootloader > Path:\arduino-1.0\hardware\arduino\bootloaders\optiboot\optiboot_atmega328.hex
    ![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-5.png)

    - Passo 6. Program


## Recursos

- [Driver USB](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/USB+Driver/CH341SER.EXE)
- [aStudio4b528](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/aStudio4b528/aStudio413b528.exe)
- [Guia do Usuário do AVRISP](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/res/AVRISP.chm)

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