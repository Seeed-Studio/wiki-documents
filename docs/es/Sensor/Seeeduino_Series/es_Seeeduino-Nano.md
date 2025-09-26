---
description: Seeeduino Nano
title: Seeeduino Nano
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino-Nano
last_update:
  date: 1/31/2023
  author: shuxu hu
---
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/seeeduino-Nano-wiki.jpg)

El Seeeduino Nano es una placa compacta similar al [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)/Arduino UNO, y es completamente compatible con [Arduino Nano](https://store.arduino.cc/usa/arduino-nano) en distribución de pines y dimensiones.

Al igual que el Seeedunio V4.2, el Seeeduino Nano está construido alrededor del Atmega328P -- microcontrolador AVR de 8 bits. Por lo tanto, puedes usar el mismo código de programa en ambas placas. Sin embargo, las dimensiones de las dos son significativamente diferentes. Con menos de un cuarto del tamaño, pero con casi las mismas características, el Seeeduino Nano ahorrará más espacio para tu proyecto, siendo más adecuado para escenarios con limitaciones de espacio.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/seeeduino-Nano-compare-2.jpg)

El Seeeduino Nano ofrece las mismas características y experiencia de alta calidad que el Arduino Nano por menos de la mitad del precio. Por otro lado, el Seeeduino Nano también ha realizado las siguientes mejoras en comparación con el Arduino Nano. 1-Cambiar el Mini-USB por Type-C, que es simétrico y reversible. 2- Agregar un conector Grove I2C, con la ayuda del sistema Grove, puedes jugar con cientos de sensores y actuadores simplemente conectándolos.

Una cosa más, sabemos que solo un conector Grove integrado puede no ser suficiente, por lo que hicimos este [escudo Grove para Arduino Nano](https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html), que tiene 3 conectores digitales Grove, 3 conectores analógicos Grove, 1 conector I2C Grove, y 1 conector UART Grove.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html)

## Características

- Placa pequeña de 43mm*18mm
- ATmega328P de 16M
- Completamente compatible con Arduino Nano
- USB Type C para programación y alimentación
- Conector Grove I2C integrado
- Compatible con protoboard

## Especificaciones

|Elemento|Valor|
|------------|-----------|
|Microcontrolador|ATmega328P|
|Entrada de Alimentación|USB Type C|
|Voltaje de Operación|USB:5V|
|Pines de E/S Digitales|14|
|Canales PWM|6|
|Canales de Entrada Analógica|8|
|Corriente DC por Pin de E/S|40 mA|
|Voltaje de Entrada de E/S|5V|
|SRAM|2 KB|
|Memoria Flash|32KB|
|Frecuencia máxima de CPU|16 MHz|

## Descripción General del Hardware

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/pinout-1.jpg)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/pinout-2.png)

:::note
    La interfaz I2C no está equipada con una resistencia pull-up. Se recomienda usar una resistencia de 4.7k para hacer pull-up a VCC cuando se use.
:::

### Alimentación

En lugar de suministrar energía por el puerto **Type C**, también puedes usar los pines **VIN** y **GND** para alimentar el Seeeduino Nano. El rango de entrada de VIN es de 7V ~ 12 V.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/Power-1.jpg)
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/Power-1.jpg)

Los parámetros máximos de potencia

|Elemento|Valor|
|---|---|
|La corriente máxima de entrada del USB Type C|2A|
|La corriente máxima de salida de VCC|1A|
|La corriente máxima de salida del pin 3V3|200mA|

## Comenzando

### Hardware

**Materiales requeridos**

- Seeeduino Nano x1
- Computadora x1
- Cable USB tipo C x1

:::tip
    Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes consultar [seeed USB type C support USB 3.1 ](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).
:::

Conecta el Seeeduino Nano a tu computadora usando el cable USB. El LED azul de alimentación (etiquetado como **PWR**) debería encenderse.

### Software

- **Paso 1. Necesitas instalar un software de Arduino.**

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Ejecutar la aplicación Arduino**

Haz doble clic en la aplicación Arduino (arduino.exe) que has descargado previamente.

:::note
    Si el software de Arduino se carga en un idioma diferente, puedes cambiarlo en el diálogo de preferencias. Consulta la [página del Software Arduino (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para más detalles.
:::

- **Paso 2. Abrir el ejemplo Blink**  
Abre el sketch de ejemplo de parpadeo del LED: **File > Examples >01.Basics > Blink**.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" />
    <figcaption><b>Figura 9</b>. <i>Ruta de Blink</i></figcaption>
  </figure>
</div>

- **Paso 3. Agregar la placa Seeed**  
Por favor sigue la [Guía de instalación de placas Seeed](https://wiki.seeedstudio.com/es/Seeed_Arduino_Boards/) y busca la palabra clave **Seeeduino AVR** para agregar el **Seeeduino Nano** a tu IDE de Arduino.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/IDE-1.jpg" />
    <figcaption><b>Figura 10</b>. <i>La palabra clave es **Seeeduino Nano**</i></figcaption>
  </figure>
</div>

:::tip
    Cuando instales la placa Seeeduino AVR, por favor asegúrate de seleccionar la versión 1.2.1 o superior.
:::

- **Paso 4. Seleccionar tu placa y puerto**  
Necesitarás seleccionar la entrada en el menú **Tools > Board** que corresponde a tu Arduino.
Seleccionando un **Seeeduino Nano**.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/IDE-2.jpg" />
    <figcaption><b>Figura 11</b>. <i>Elige la placa correcta</i></figcaption>
  </figure>
</div>

Selecciona el dispositivo serie de la placa Arduino desde el menú Tools | Serial Port. Es probable que sea COM3 o superior (**COM1** y **COM2** usualmente están reservados para puertos serie de hardware). Para averiguarlo, puedes desconectar tu placa Arduino y volver a abrir el menú; la entrada que desaparezca debería ser la placa Arduino. Vuelve a conectar la placa y selecciona ese puerto serie.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/IDE-3.jpg" />
    <figcaption><b>Figura 12</b>. <i>Elige el puerto correcto</i></figcaption>
  </figure>
</div>

- **Paso 5. Cargar el programa**  
Ahora, simplemente haz clic en el botón "Upload" en el entorno. Espera unos segundos y si la carga es exitosa, el mensaje "Done uploading." aparecerá en la barra de estado.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" />
    <figcaption><b>Figura 13</b>. <i>Cargar el código</i></figcaption>
  </figure>
</div>

Unos segundos después de que termine la carga, deberías ver el LED del pin 13 (L) en la placa comenzar a parpadear (en naranja). Si lo hace, ¡felicitaciones! Has puesto Arduino en funcionamiento. Si tienes problemas, por favor consulta las sugerencias de solución de problemas.

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/res/Seeeduino%20nano.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Archivo Eagle de Seeeduino nano](https://files.seeedstudio.com/wiki/Seeeduino-Nano/res/Seeeduino%20nano.zip)
- **[PDF]** [Hoja de datos ATmega328](https://files.seeedstudio.com/wiki/Seeeduino-Nano/res/ATmega328-datasheet.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
