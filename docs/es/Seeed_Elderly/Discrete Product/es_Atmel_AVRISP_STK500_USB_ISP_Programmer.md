---
description: Atmel AVRISP STK500 USB ISP Programmer
title: Atmel AVRISP STK500 USB ISP Programmer
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Atmel_AVRISP_STK500_USB_ISP_Programmer
last_update:
  date: 1/13/2023
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/Avrisp_stk500_usb.jpg)

<!-- <p style=":center"><a href="https://www.seeedstudio.com/depot/atmel-avrisp-stk500-usb-isp-programmer-p-207.html?cPath=132_135" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/depot/atmel-avrisp-stk500-usb-isp-programmer-p-207.html?cPath=132_135" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p>

## Características
- Puede soportar una amplia gama de microcontroladores ATMEL AVR.
- Puede funcionar con AVR Studio o WINAVR (GCC)
  
:::note   
   Si no puedes descargar ATMEL AVR Studio 4.13, por favor descarga avrstudio7, por favor descarga la última versión de AvrStudio. En herramientas selecciona stk500.
:::

## Ideas de Aplicación
- Programación AVR
- Grabar Bootloader AVR

## Dispositivos Soportados
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


## Conexión de Hardware
<!-- <p style=":center"><a target="_blank"><img src="https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-1.JPG"  /></a></p> -->
![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-1.JPG)

<!-- <p style=":center"><a target="_blank"><img src="https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-2.jpg"  /></a></p> -->
![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-2.jpg)

## Ejemplo: Grabar Bootloader a Arduino UNO

- 1.Cómo conectar: Ver la imagen de arriba
- 2.Instalar el controlador AVRISP del CD.
- 3.Descargar AVR STUDIO4.19 e instalarlo.

:::warning
    El software AVR STUDIO4.13 está en el CD.
:::
- 4.Grabar Bootloader a Arduino UNO

    - Paso 1. Abrir AVR STUDIO4.19
    - Paso 2. Conectar a STK500

        ![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP0.jpg)

    - Paso 3. Seleccionar Plataforma

        ![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-3.jpg)

    - Paso 4. Seleccionar Dispositivo "ATmega328P"
    ![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-4.jpg)

    - Paso 5. Seleccionar Bootloader > Ruta:\arduino-1.0\hardware\arduino\bootloaders\optiboot\optiboot_atmega328.hex
    ![](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/img/AVRISP-5.png)

    - Paso 6. Programar


## Recursos

- [Controlador USB](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/USB+Driver/CH341SER.EXE)
- [aStudio4b528](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/aStudio4b528/aStudio413b528.exe)
- [Guía del Usuario AVRISP](https://files.seeedstudio.com/wiki/Atmel_AVRISP_STK500_USB_ISP_Programmer/res/AVRISP.chm)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>