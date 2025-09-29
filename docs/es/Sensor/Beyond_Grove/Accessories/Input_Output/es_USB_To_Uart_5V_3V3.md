---
description: USB To Uart 5V/3V3
title: USB To Uart 5V/3V3
keywords:
- Accessories charge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/USB_To_Uart_5V_3V3
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/img/Photo_USB_To_Uart_5V_3V3.JPG)

USB To Uart 5V/3V3 es un adaptador USB a serie, que está basado en CH340. CH340 es un chip convertidor de bus USB y puede realizar la conversión de USB a interfaz serie, USB a infrarrojos IrDA o USB a interfaz de impresora. Este módulo es compatible con 5V y 3V3 y se puede usar para cargar código o comunicarse con MCUs.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/USB-To-Uart-5V%263V3-p-1832.html)

## Características

---

- Interfaz de dispositivo USB de velocidad completa, cumple con la Especificación USB Versión 2.0

- E/S compatibles con 3.3V y 5V.

- Soporta velocidad de baudios que varía desde 2400bps hasta 115200bps.

- Interfaz serie full duplex por hardware, establece buffer de transmisor y receptor

- Indicador LED

## Especificaciones

---

- Voltaje de Trabajo: DC 5V

- Corriente de Trabajo &lt;10mA

- Sistema Operativo: Windows, Linux, Mac

## Función de la Interfaz

---
![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/img/USB_To_Uart_5V_3V3.jpg)

- ①: Indicador de Alimentación
- ②: Micro USB

- ③: Indicador TX

- ④: Indicador RX
- ⑤: Conexión Uart

- ⑥: Interruptor VCC: Elección 5V o 3V3

## Uso

---
**Instalación del Controlador**

USB To Uart 5V/3V3 se usa como interfaz de Puerto Serie USB. Necesita instalar el controlador.

**Windows/Linux**

Totalmente compatible con el programa de aplicación serie en el sistema operativo Windows del extremo de la computadora

- 1) Lo conectas a la computadora por Puerto USB.

- 2) Espera un minuto, puedes encontrarlo en el Administrador de Dispositivos.

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/img/CH340_Driver.jpg)

- 3) Si no puedes encontrar el puerto, por favor descarga el Controlador desde [Aquí](http://www.wch.cn/download/CH341SER_ZIP.html)

**Mac OS**

Descarga del controlador: [http://www.wch.cn/download/CH341SER_MAC_ZIP.html](http://www.wch.cn/download/CH341SER_MAC_ZIP.html)

En Mac OS Yosemite:

- 1) Instala el controlador CH340

- 2) Abre el programa Terminal (ubicado en /Applications/Utilities/)

- 3) Escribe el comando: sudo nvram boot-args="debug=0x146 kext-dev-mode=1"

- 4) Escribe la contraseña;

- 5) Reinicia tu computadora;

Si quieres restaurar la configuración de tu Mac, puedes salir del modo desarrollador redefiniendo el boot-arg a tu configuración anterior, o limpiar tus boot-args como sigue: sudo nvram -d boot-args

<big>Hardware</big>

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/img/USB_To_Uart_Download.jpg)

Deberías conectar tu circuito de esta manera.

<big>Ejemplo</big>

Podemos descargar código al Seeeduino Ethernet por USB To Uart 5V/3V3.

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/img/USB_To_Uart_5V_3v3_Usage.jpg)

Nota que debes seleccionar el tipo de placa correcto y el puerto COM.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/res/USB_To_Uart_5V_3V3_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Archivo Eagle USB To Uart 5V/3V3 v1.0](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/res/USB_To_Uart_5V_3V3_Eagle.zip)

- [Esquema en pdf](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/res/USB_To_Uart_5V_3V3_v1.pdf)

- [Hoja de datos del CH340](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/res/CH340DS1_EN.PDF)

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
