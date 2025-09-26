---
description: Seeeduino Cortex M0
title: Seeeduino Cortex M0
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino-Cortex-M0
last_update:
  date: 1/31/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/102010248-wiki.jpg)

El Seeeduino Cortex-M0+ cuenta con un MCU Atmel SAMD21 que está basado en un procesador ARM® Cortex®-M0+ de 32 bits. Con la ayuda de este núcleo potente, el SAMD21 es mucho más poderoso que AVR y puede lograr muchas funciones y cálculos más complejos que no se pueden implementar en chips AVR.

El [Seeeduino M0+](https://www.seeedstudio.com/tag/Seeeduino-M0%2B.html) es una línea de productos completamente nueva que es totalmente compatible con Arduino Zero y actualmente tenemos Seeeduino Cortex-M0+ y [Seeeduino Lotus Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html) en esta serie.

El Seeeduino Cortex-M0+ tiene la misma distribución de pines de cabecera que el Seeeduino Lotus Cortex-M0+, incluyendo 14 E/S digitales (10 salidas PWM) y 6 E/S analógicas. Al mismo tiempo, proporciona 3 conectores Grove integrados: dos I2C y 1 UART. Si quieres usar más puertos grove, puedes usar un [Base Shield V2](https://www.seeedstudio.com/Base-Shield-V2.html) para trabajar con esta placa.

Además de eso, el Seeeduino Cortex-M0+ es la primera placa de desarrollo Seeeduino con una interfaz USB tipo C. USB Tipo C es la tendencia futura: los conectores son reversibles, mayor velocidad de transferencia de datos y funciones más escalables. Introduciremos más placas de desarrollo con Tipo C. Puedes usar tipo C para suministrar energía y transmitir datos o usar el conector DC de 7~15V para suministrar energía a esta placa.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

<a href="https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></a>

## Características

- CPU ARM Cortex-M0+ funcionando hasta 48MHz
- 256KB de Flash autoprogramable en sistema
- 32KB de memoria SRAM
- Compatible con Arduino Zero
- Convertidor Digital-Analógico (DAC) de 10 bits, 350ksps
- Un Convertidor Analógico-Digital (ADC) de 12 bits, 350ksps con hasta 20 canales
- USB tipo C para energía y datos

## Especificaciones

|Elemento|Valor|
|------------|-----------|
|Microcontrolador|SAM D21|
|Entrada de Energía|USB Tipo C|
|Voltaje de Operación|USB:5V|
|Pines E/S Digitales|14|
|Canales PWM|10|
|Canales de Entrada Analógica|6|
|Corriente DC por Pin E/S|40 mA|
|Voltaje de Entrada E/S|3.3V|
|SRAM|32 KB|
|Memoria Flash|256KB|
|Frecuencia máxima de CPU|48 MHz|


## Descripción General del Hardware

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/hardware.png)

### UART

Para la [placa serie Seeed M0](https://www.seeedstudio.com/tag/SEEEDUINO-M0%2B.html), hay 3 puertos UART como se muestra en la siguiente imagen. Cuando programes con Arduino IDE, debes usar el nombre de puerto correspondiente, que es:

```
SerialUSB or Serial
```

for type C port;

```
Serial1
```

for Grove UART port;

and

```
Serial2
```

para pines UART en el header

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/UART(1).jpg)

### Pinout

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/102010248-pinout.jpg)

## Primeros Pasos

### Hardware

**Materiales requeridos**

- Seeeduino Cortex-M0+ x1
- Computadora x1
- Cable USB tipo C x1

:::tip
    Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes revisar [seeed USB type C support USB 3.1 ](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).
:::

Conecta el Seeeduino Cortex-M0+ a tu computadora usando el cable USB. El LED azul de alimentación (etiquetado **PWR**) debería encenderse.

### Software

- **Paso 1. Necesitas instalar un Software de Arduino.**

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Ejecutar la aplicación Arduino**

Haz doble clic en la aplicación Arduino (arduino.exe) que has descargado previamente.

:::note
    Si el Software de Arduino se carga en un idioma diferente, puedes cambiarlo en el diálogo de preferencias. Consulta la [página del Software de Arduino (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para más detalles.
:::

- **Paso 2. Abrir el ejemplo Blink**  
Abre el sketch de ejemplo de parpadeo del LED: **File > Examples >01.Basics > Blink**.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" />
    <figcaption><i>Ruta de Blink</i></figcaption>
  </figure>
</div>

- **Paso 3. Agregar la Placa Seeed**  
Por favor sigue la [Guía de Instalación de Placas Seeed](https://wiki.seeedstudio.com/es/Seeed_Arduino_Boards/) y busca la palabra clave **Seeeduino samd** para agregar el **Seeeduino Zero** a tu Arduino IDE.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/board2.png" />
    <figcaption><i>La palabra clave es <b>samd_zero</b> </i></figcaption>
  </figure>
</div>

- **Paso 4. Selecciona tu placa y puerto**  
Necesitarás seleccionar la entrada en el menú **Tools > Board** que corresponde a tu Arduino.
Seleccionando el **Seeeduino zero**.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/board1.png" />
    <figcaption> <i>Elige la placa correcta</i></figcaption>
  </figure>
</div>

Selecciona el dispositivo serie de la placa Arduino desde el menú Tools | Serial Port. Es probable que sea COM3 o superior (**COM1** y **COM2** usualmente están reservados para puertos serie de hardware). Para averiguarlo, puedes desconectar tu placa Arduino y volver a abrir el menú; la entrada que desaparezca debería ser la placa Arduino. Vuelve a conectar la placa y selecciona ese puerto serie.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/port.png" />
    <figcaption><i>Elige el puerto correcto</i></figcaption>
  </figure>
</div>

- **Paso 5. Cargar el programa**  
Ahora, simplemente haz clic en el botón "Upload" en el entorno. Espera unos segundos y si la carga es exitosa, el mensaje "Done uploading." aparecerá en la barra de estado.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" />
    <figcaption><i>Cargar el código</i></figcaption>
  </figure>
</div>

Unos segundos después de que termine la carga, deberías ver el LED del pin 13 (L) en la placa comenzar a parpadear. Si lo hace, ¡felicitaciones! Has puesto Arduino en funcionamiento. Si tienes problemas, por favor consulta las sugerencias de solución de problemas.

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/res/Seeeduino%20Cortex-M0%2B%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Archivo Eagle de Seeeduino Cortex-M0+ v1.0](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/res/Seeeduino%20Cortex-M0%2B%20v1.0.zip)
- **[PDF]** [Hoja de datos de SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/res/SAM-D21-Datasheet.pdf)

:::note
        Para usar el UART del Seeeduino Cortex-M0+, necesitas usar ``
:::

## Soporte Técnico y Discusión de Productos

<div>

  <br />¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
</div>
