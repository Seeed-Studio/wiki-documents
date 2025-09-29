---
description: Seeeduino Lotus Cortex-M0+
title: Seeeduino Lotus Cortex-M0+
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino_Lotus_Cortex-M0-
last_update:
  date: 1/31/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/main.jpg)

Seeeduino Lotus Cortex-M0+ es una placa de desarrollo de microcontrolador ATMEGA SAM D21. El Atmel® | SMART™ SAM D21 es una serie de microcontroladores de bajo consumo que utiliza el procesador ARM® Cortex®-M0+ de 32 bits con 256KB de Flash y 32KB de SRAM. Puedes considerar el Seeeduino Lotus Cortex-M0+ como una combinación de Seeeduino y Base Shield.

Seeeduino Lotus Cortex-M0+ tiene 14 entradas/salidas digitales (10 de las cuales soportan PWM) y 6 entradas/salidas analógicas, 3 interfaces de comunicación serie, un conector micro USB, un conector JST2.0 Li-Po, un header ICSP, 12 conectores Grove, un botón de reset.

Seeeduino Lotus Cortex-M0+ es una versión mejorada del [Seeeduino Lotus V1.1](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface-p-2917.html), reemplaza con un chip más potente, optimiza el diseño del circuito, y la fuente de alimentación es más estable. Debido a que este chip soporta salida directa a nivel USB, no hay necesidad de usar un chip de puerto serie a USB, como el CP2102N. Por lo tanto, un puerto serie de hardware adicional está disponible para el usuario.

Seeeduino Lotus tiene 14 entradas/salidas digitales (6 de las cuales pueden generar PWM) y 7 entradas/salidas analógicas, una conexión micro USB, un header ICSP, 12 conexiones Grove, un botón de reset.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)

## Versión

---

| Revisión | Descripciones                                              | Lanzamiento      |Cómo comprar|
|----------|-----------------------------------------------------------|--------------|--------------|
| v1.0   | Lanzamiento público inicial (beta)                             | Jul 22, 2014  |[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)|
| v1.1   | Reemplazar CH340 con CP2102N para habilitar la compatibilidad con MAC |Dec 22,2016   |[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Lotus-V1.1-ATMega328-Board-with-Grove-Interface-p-2917.html)|
|Seeeduino Lotus Cortex-M0+| Cambiar el chip microcontrolador Atmega328 por SAM D21  / Diseño de circuito optimizado, la fuente de alimentación es más estable|October.29, 2018|[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)|

### Instrucciones de Actualización

Comparado con el Seeeduino Lotus V1.1, el Seeeduino Lotus Cortex-M0+ se actualiza principalmente en hardware. Por favor revisa la figura a continuación.

|Elemento|Seeeduino Lotus V1.1|Seeeduino Lotus Cortex-M0+|
|---|---|----|
|MCU|Atmega328 |SAM D21|
|UART|1|2|
|Soporte de batería Li-po|NO|SÍ|
|PIN PWM|6|10|


<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/area_chart.jpg" />
    <figcaption><b>Figura 1</b>. <i>Gráfico de comparación</i></figcaption>
  </figure>
</div>

## Ideas de Aplicación

* DIY
* IoT y Hogar Inteligente
* Robot
* Educación

## Características

* Totalmente compatible con Arduino UNO
* Microcontrolador ARM® Cortex®-M0+ 32bit 48MHz(SAMD21)
* 12 conectores Grove integrados
* 14 Pines de E/S Digitales (10 salidas PWM)
* 6 Entradas Analógicas
* Soporte de Gestión de Ruta de Alimentación
* Soporte de alimentación por micro-usb o batería Li-Po
* Corriente máxima de carga de 2A
* Adecuado para diseño de bajo consumo

## Especificaciones

|Elemento|Valor|
|------------|-----------|
|Microcontrolador|SAM D21|
|Entrada de Alimentación|Micro-USB  / JST2.0|
|Voltaje de Operación|USB:5V / Lipo:3.5V~4.2V|
|Pines de E/S Digitales|14|
|Canales PWM|10|
|Canales de Entrada Analógica|6|
|Corriente DC por Pin de E/S|40 mA|
|Voltaje de Entrada de E/S|3.3V|
|SRAM|32 KB|
|Memoria Flash|256KB|
|Frecuencia máxima de CPU|48 MHz|

## Pinout

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/Pin_out.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/Pin_out.jpg" /></a></p>
    <figcaption><b>Figura 2</b>. <i>Pinout, puedes hacer clic en la imagen para ver el archivo original</i></figcaption>
  </figure>
</div>

## Descripción General del Hardware

Las imágenes a continuación muestran una descripción general de las características del hardware del Seeeduino Lotus. El diagrama de pines y las funciones alternativas de varios pines del Seeeduino Lotus se muestran en el diagrama de pinout. Esto puede usarse como referencia rápida.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/overview.jpg" />
    <figcaption><b>Figura 3</b>. <i>Descripción General del Hardware</i></figcaption>
  </figure>
</div>

* **Grove Digital**  
Hay 6 conectores grove digitales, tomemos **D3** como ejemplo:  

>GND: GND del sistema  
>VCC: Salida VCC de 3.3V  
>D3: Conecta al pin digital 3  
>D2: Conecta al pin digital 2  

Puedes encontrar la serigrafía en la parte posterior de la placa.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/4.jpg" />
    <figcaption><b>Figura 4</b>. <i>Conectores Grove Digitales</i></figcaption>
  </figure>
</div>

* **Grove Analog**  
Hay tres conectores Grove analógicos, el rango de voltaje de entrada es de 0~3.3V. Si necesitas más de 3 entradas analógicas, puedes usar el pin analógico en la zona de encabezados.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/5.jpg" />
    <figcaption><b>Figura 5</b>. <i>Conectores Grove Analógicos</i></figcaption>
  </figure>
</div>

* **Grove UART**  
Proporcionamos 3 puertos UART por hardware, un Grove UART, pines TX-RX en el encabezado, y pin de función multiplexada **SCK** **SDO** en el puerto SWD. Sin embargo, el pin multiplexado no está soportado por el firmware actualmente.
Así que en realidad, solo dos UART por hardware están disponibles ahora. **Serial** corresponde al Grove UART, y **Serial1** corresponde a RX-TX en la zona de encabezados.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/3.jpg" />
    <figcaption><b>Figura 6</b>. <i>Grove UART por Hardware</i></figcaption>
  </figure>
</div>

* **Encabezado Hembra**  
El encabezado hembra del Seeeduino Lotus Cortex-M0+ es completamente compatible con Arduino UNO. Vale la pena mencionar que, en la parte DIGITAL, todos los pines con un **~** al frente soportan salida PWM. Lo que significa **D3,D4,D5,D6,D8,D9,D10,D11,D12,D13**, diez en total.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/2.jpg" />
    <figcaption><b>Figura 7</b>. <i>Encabezado Hembra</i></figcaption>
  </figure>
</div>

* **Encabezado Li-Po**  
Puedes usar tanto USB como batería Li-Po para alimentar el Seeeduino Lotus Cortex-M0+. También puedes usar esta placa para cargar tu batería Li-Po. Cuando alimentes la placa con USB y conectes la batería Li-Po al mismo tiempo, la batería Li-Po se cargará, y el LED **CHR** parpadeará. Después de que la batería esté completamente cargada, el LED **CHR** dejará de parpadear.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/7.jpg" />
    <figcaption><b>Figura 8</b>. <i>Encabezado Li-Po JST2.0</i></figcaption>
  </figure>
</div>

## Primeros Pasos

### Hardware

En primer lugar, necesitas:

* **Obtener un cable Micro-USB**
Necesitas un cable Micro-USB primero; el cable de datos de un teléfono Android funcionará bien.
Si no puedes encontrar uno, puedes comprar uno [aquí](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100).

* **Conectar la placa**
Conecta la placa Arduino a tu computadora usando el cable USB. El LED verde de alimentación (etiquetado como **PWR**) debería encenderse.

### Software

* **Paso 1. Necesitas instalar un software de Arduino.**

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Ejecutar la aplicación Arduino**

Haz doble clic en la aplicación Arduino (arduino.exe) que has descargado previamente.

:::note
    Si el software de Arduino se carga en un idioma diferente, puedes cambiarlo en el diálogo de preferencias. Consulta la [página del Software Arduino (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para más detalles.
:::

* **Paso 2. Abrir el ejemplo Blink**  
Abre el sketch de ejemplo de parpadeo del LED: **File > Examples >01.Basics > Blink**.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" />
    <figcaption><b>Figura 9</b>. <i>Ruta de Blink</i></figcaption>
  </figure>
</div>

* **Paso 3. Añadir la placa Seeed**  
Por favor sigue la [Guía de instalación de placas Seeed](https://wiki.seeedstudio.com/es/Seeed_Arduino_Boards/) para añadir el Seeeduino samd a tu Arduino IDE.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/board2.png" />
    <figcaption><b>Figura 10</b>. <i>La palabra clave es Lotus M0</i></figcaption>
  </figure>
</div>

* **Paso 4. Seleccionar tu placa y puerto**  
Necesitarás seleccionar la entrada en el menú **Tools > Board** que corresponde a tu Arduino.
Seleccionando un **Seeeduino Zero**.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/board1.png" />
    <figcaption><b>Figura 11</b>. <i>Elige la placa correcta</i></figcaption>
  </figure>
</div>

Selecciona el dispositivo serie de la placa Arduino desde el menú Tools | Serial Port. Es probable que sea COM3 o superior (**COM1** y **COM2** están usualmente reservados para puertos serie de hardware). Para averiguarlo, puedes desconectar tu placa Arduino y volver a abrir el menú; la entrada que desaparezca debería ser la placa Arduino. Vuelve a conectar la placa y selecciona ese puerto serie.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/port.png" />
    <figcaption><b>Figura 12</b>. <i>Elige el puerto correcto</i></figcaption>
  </figure>
</div>

* **Paso 5. Subir el programa**  
Ahora, simplemente haz clic en el botón "Upload" en el entorno. Espera unos segundos y si la subida es exitosa, el mensaje "Done uploading." aparecerá en la barra de estado.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" />
    <figcaption><b>Figura 13</b>. <i>Subir el código</i></figcaption>
  </figure>
</div>

Unos segundos después de que termine la subida, deberías ver el LED del pin 13 (L) en la placa comenzar a parpadear (en naranja). Si lo hace, ¡felicitaciones! Has puesto Arduino en funcionamiento. Si tienes problemas, por favor consulta las sugerencias de solución de problemas.

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/res/Seeeduino_Lotus_Cortex-M0%2B.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **[ZIP]** [Archivo Eagle de Seeeduino Lotus Cortex-M0+](https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/res/Seeeduino_Lotus_Cortex-M0%2B.zip)
* **[PDF]** [HOJA DE DATOS SAM D21](https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/res/SAM_D21.pdf)

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
