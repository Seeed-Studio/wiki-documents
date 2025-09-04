---
title: Grove - DMX512
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Sensor_communication/
slug: /es/Grove-DMX512
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-DMX512/img/DMX512_01.jpg)

El Grove – DMX512 es un adaptador de la interfaz Grove a la interfaz DMX512 (interfaz estándar de la industria EIA-485). El módulo está basado en el chip SN75176 que puede balancear líneas de transmisión y cumple con la interfaz estándar ANSI EIA-485. Ahora es conveniente controlar iluminación escénica y consola DMX512 para Arduino.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-DMX512-p-1447.html)

## Características

---

* Interfaz Grove e interfaz estándar EIA-485

* Fácil de usar

* Fuerte practicidad

## Uso

---
Arduino puede controlar fácilmente dispositivos DMX512 usando el módulo Grove - DXM512. Tomando como ejemplo la luz de bola mágica de cristal LED. La operación específica es la siguiente:

* Conecta la interfaz Grove del Grove - DMX512 al puerto D3 del Grove - Base Shield y conecta el Grove - Base Shield a Arduino.

* Conecta la interfaz DMX512 del Grove - DMX512 a la interfaz DMXIN de la luz de bola mágica de cristal LED usando un cable DMX. Y alimenta la luz de bola mágica de cristal LED.

* Configura la luz de bola mágica de cristal LED al modo de control DMX512. El panel de control muestra "A001" en este momento.

![](https://files.seeedstudio.com/wiki/Grove-DMX512/img/DMX512_Usage.jpg)

* Descarga [Archivo: Librería DmxSimple](https://files.seeedstudio.com/wiki/Grove-DMX512/res/DmxSimple.zip) y descomprímela en el archivo de librerías del IDE de Arduino por la ruta: ..\arduino-1.0.1\libraries.

* Abre el código directamente por la ruta: File -> Example -> DmxSimple -> Fadup1.

* Puedes ver una escena interesante. Intenta cambiar el código para tu disfrute.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-DMX512/res/Grove-DMX512_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---
* [Hoja de Datos SN75176](https://files.seeedstudio.com/wiki/Grove-DMX512/res/Sn75176a.pdf)

* [Archivo Eagle Grove - DMX512](https://files.seeedstudio.com/wiki/Grove-DMX512/res/Grove-DMX512_Eagle_File.zip)

* [Librería DmxSimple](https://files.seeedstudio.com/wiki/Grove-DMX512/res/DmxSimple.zip)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>