---
title: USB To Uart 5V
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Scream_out_loud-110dBA_fixed_tone_Siren/
slug: /es/USB_To_Uart_5V
last_update:
  date: 02/03/2022
  author: jianjing Huang
---
<!-- ---
name: USB To Uart 5V
category: Essentials
bzurl: https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html
oldwikiname:  USB To Uart 5V
prodimagename:  USB_To_Uart_5V_photo.jpg
surveyurl: https://www.research.net/r/USB_To_Uart_5V
sku:  103990051
--- -->
![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/USB_To_Uart_5V_photo.jpg)

USB To Uart 5V es un adaptador USB a serie, que está basado en CH340. CH340 es un chip convertidor de bus USB y puede realizar conversión de USB a interfaz serie, USB a infrarrojos IrDA o USB a interfaz de impresora. Este módulo se puede usar para cargar código o comunicarse con MCUs.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html)

## Características

---

- Interfaz de dispositivo USB de velocidad completa, cumple con la Especificación USB Versión 2.0

- Soporta velocidad de baudios que varía desde 2400bps hasta 115200bps.

- Interfaz serie full duplex por hardware, establece buffer de transmisor y receptor

- Indicador LED

## Especificaciones

---

- Voltaje de Funcionamiento: DC 5V

- Corriente de Funcionamiento &lt;10mA

- Sistema Operativo: Windows, Linux, Mac

## Función de la Interfaz

---
![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/USB_To_Uart_5v_interface.jpg)

- ①: Indicador de Alimentación
- ②: Micro USB

- ③: Indicador TX

- ④: Indicador RX
- ⑤: Conexión Uart

## Uso

---
**Instalación del Controlador**

USB To Uart 5V/3V3 se usa como interfaz de Puerto Serie USB. Necesita instalar el controlador.

**Windows/Linux**

Totalmente compatible con el programa de aplicación serie en el sistema operativo Windows del extremo de la computadora

- 1) Lo conectas a la computadora por Puerto USB.

- 2) Espera un minuto, puedes encontrarlo en el Administrador de Dispositivos.

- 3) Si no puedes encontrar el puerto, por favor descarga el Controlador desde [Aquí](http://wch-ic.com/download/list.asp?id=127)

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/CH340_Driver.jpg)

**Mac OS**

Descarga del controlador: [http://www.wch.cn/download/CH341SER_MAC_ZIP.html](http://www.wch.cn/download/CH341SER_MAC_ZIP.html)

En Mac OS Yosemite:

- 1) Instala el controlador CH340

- 2) Abre el programa Terminal (ubicado en /Applications/Utilities/)

- 3) Escribe el comando: sudo nvram boot-args="debug=0x146 kext-dev-mode=1"

- 4) Escribe la contraseña;

- 5) Reinicia tu computadora;

Si quieres restaurar la configuración de tu Mac, puedes salir del modo desarrollador redefiniendo el boot-arg a tu configuración anterior, o limpiar tus boot-args como sigue: sudo nvram -d boot-args

**Hardware**

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/USB_To_Uart_Download.jpg)

Deberías conectar tu circuito de esta manera.

### Ejemplo

Podemos descargar código al Seeeduino Ethernet mediante USB To Uart 5V.

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/USB_To_Uart_5V_Usage.jpg)

Ten en cuenta que debes seleccionar el tipo de placa correcto y el puerto COM.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="res/USB_To_Uart_5V_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Archivo Eagle USB To Uart 5V v1.0](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_5V_Eagle.zip)

- [Esquema en pdf](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_5V_v1.0_SCH.pdf)

- [Hoja de datos del CH340](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/CH340DS1_EN.PDF)

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
