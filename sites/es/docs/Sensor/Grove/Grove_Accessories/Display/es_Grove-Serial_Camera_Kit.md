---
description: Grove - Kit de Cámara Serial
title: Grove - Kit de Cámara Serial
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Serial_Camera_Kit
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove - Kit de Cámara Serial
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Serial-Camera-Kit-p-1608.html
oldwikiname:  Grove - Kit de Cámara Serial
prodimagename: GSCK_Introduction.jpg
surveyurl: https://www.research.net/r/Grove_Serial_Camera_Kit
sku:  101020000
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Introduction.jpg)

Grove - Kit de Cámara Serial incluye una placa de control y dos lentes intercambiables, uno es lente estándar y el otro es lente gran angular. Es una excelente cámara para proyectos de reconocimiento de imágenes centrados en Arduino, porque 30W píxeles no serían abrumadores para Arduino, por lo que el reconocimiento de imágenes en tiempo real es posible. Para hacerlo más divertido y jugable, se incluyen lentes de dos especificaciones en este kit. El estándar es para tomas fotográficas comunes y el gran angular es especialmente adecuado para proyectos de monitoreo.

## Especificaciones

---

* Voltaje de Entrada: 5V

* Píxel: 300,000

* Resolución: 640*480, 320*240, 160*120

* Velocidad de Baudios Uart: 9600~115200

* Comunicación: RS485 y RS232

* Compresión JPEG de foto, grados alto, medio y bajo opcionales

* AGC

* Control de Evento de Exposición Automática

* Control de Balance de Blancos Automático

* Enfoque ajustable

## Demostración

---
Esta demostración te mostrará cómo usar Grove - Kit de Cámara Serial. Necesitamos un [Seeeduino](https://www.seeedstudio.com/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7), un [Shield de Tarjeta SD](https://www.seeedstudio.com/sd-card-shield-v40-p-1381.html?cPath=105) y un [Grove - Button](/es/Grove-Button). Cuando se presiona el botón, tomamos una foto y la guardamos en la Tarjeta SD.

Sigue los pasos a continuación paso a paso, puedes ejecutar fácilmente tu Grove - Kit de Cámara Serial. Entonces vamos.

### Instalación de Hardware

Podemos encontrar que hay dos interfaces Grove en el Shield de Tarjeta SD V4.0, así que no necesitamos un Shield Base, solo conecta el Botón al Grove I2C y conecta la Cámara al Grove Uart.

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Hardware.jpg)

### Descargar Código y Subir

Puedes descargar el código de demostración en github, haz clic [aquí](https://github.com/Seeed-Studio/Grove_Serial_Camera_Kit)

Luego sube el código, y funciona.

### Tomar una Foto

Después de terminar de subir el código de demostración, podemos tomar una foto ahora, solo presiona el botón, luego espera unos segundos, una foto se guardará en la tarjeta SD.

La siguiente imagen es el techo de mi oficina usando lente de ángulo recto.

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_60.jpg)

### Reemplazar un Lente

Hay otro lente gran angular, te mostraré cómo reemplazarlo.

Primero deberías tener un destornillador：

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Step1.jpg)

Luego, desatornilla los tornillos en el lado del lente:

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Step2.jpg)

Intenta rotar el lente, puede ser desenroscado：

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Step3.jpg)

Usamos el lente gran angular para tomar una foto, también, ¡es el techo de mi oficina!

¿Encuentras algo diferente de la imagen del techo anterior?

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_90.jpg)

### Cómo Enfocar

El lente atornillado a diferentes profundidades representa diferentes distancias focales, puedes intentarlo.

## Recursos

* **[Librería]** [Código de Demostración](https://github.com/Seeed-Studio/Grove_Serial_Camera_Kit)
* **[Hoja de Datos]** [CJ OV528](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/res/cj-ov528_protocol.pdf)

## Proyecto

**Cámara Grove -> PHPoC -> Aplicación Web** Este proyecto muestra cómo leer datos de la cámara Grove y enviar los datos a una aplicación web vía WebSocket.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/phpoc_man/grove-camera-phpoc-web-application-1dfd63/embed' width='350'></iframe>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>