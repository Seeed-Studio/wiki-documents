---
title: USB To Uart 3V3
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Scream_out_loud-110dBA_fixed_tone_Siren/
slug: /es/USB_To_Uart_3V3
last_update:
  date: 02/03/2022
  author: jianjing Huang
---

<!-- ---
name: USB To Uart 3V3
category: Discontinued
bzurl:
oldwikiname: USB_To_Uart_3V3
prodimagename:
bzprodimageurl: https://www.research.net/r/USB_To_Uart_3V3
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/Photo_USB_To_Uart_5V_3V3.JPG)

USB To Uart 3V3 es un adaptador USB a serie, que está basado en CH340, un chip convertidor de bus USB. Puede realizar la conversión de USB a interfaz serie/IrDA infrarrojo/interfaz de impresora. Este módulo se puede usar para cargar código o comunicarse con MCUs.

## Características

- Interfaz de dispositivo USB de velocidad completa, cumple con la Especificación USB Versión 2.0

- Soporta velocidad de baudios que varía desde 2400bps hasta 115200bps.

- Interfaz serie full duplex por hardware, establece buffer de transmisor y receptor

- Indicador LED

## Especificaciones

- Voltaje de Funcionamiento：DC 5V

- Corriente de Funcionamiento &lt;10mA

- Sistema Operativo： Windows、Linux、Mac

## Función de la Interfaz

![](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/USB_To_Uart_3V3_Interface.jpg)

- ①：Indicador de Alimentación
- ②：Micro USB

- ③：Indicador TX

- ④：Indicador RX
- ⑤：Conexión Uart

## Uso

#### Instalación del Controlador  

USB To Uart 5V/3V3 se usa como interfaz de Puerto Serie USB. Necesita instalar el controlador.

##### Windows/Linux

Totalmente compatible con el programa de aplicación serie en el sistema operativo Windows del extremo de la computadora

- 1)Lo conectas a la computadora por Puerto USB.

- 2)Espera un minuto, puedes encontrarlo en el Administrador de Dispositivos.

- 3)Si no puedes encontrar el puerto, por favor descarga el Controlador desde [Aquí](http://wch-ic.com/download/list.asp?id=127)

![](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/CH340_Driver.jpg)

##### Mac OS

Descarga del controlador:  [http://www.wch.cn/download/CH341SER_MAC_ZIP.html](http://www.wch.cn/download/CH341SER_MAC_ZIP.html)

En Mac OS Yosemite:

- 1) Instala el controlador CH340

- 2) Abre el programa Terminal (ubicado en /Applications/Utilities/)

- 3) Escribe el comando: sudo nvram boot-args="debug=0x146 kext-dev-mode=1"

- 4）Escribe la contraseña;

- 5）Reinicia tu computadora;

Si quieres restaurar la configuración de tu Mac, puedes salir del modo desarrollador redefiniendo el boot-arg a tu configuración anterior, o limpiar tus boot-args como sigue:  sudo nvram -d boot-args

#### Hardware

![](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/USB_To_Uart_Download.jpg)

Deberías conectar tu circuito de esta manera.

### Ejemplo

Podemos descargar código al Seeeduino Ethernet por USB To Uart 3V3.

![](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/USB_To_Uart_5V_3v3_Usage.jpg)

Nota que debes seleccionar el tipo de placa correcto y el puerto COM.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_3V3_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]**[Archivo Eagle USB To Uart 3V3 v1.0](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_3V3_Eagle.zip)

- **[PDF]**[USB To Uart_3V3 pdf](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB%20To%20Uart_3V3_Eagle/USB%20To%20Uart_3V3.pdf)

- **[EAGLE]**[USB To Uart_3V3 sch](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB%20To%20Uart_3V3_Eagle/USB%20To%20Uart_3V3.sch)

- **[PDF]**[Esquemático en pdf](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_3V3_SCH.pdf)

- **[Hoja de Datos]**[Hoja de Datos del CH340](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/CH340DS1_EN.PDF)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
