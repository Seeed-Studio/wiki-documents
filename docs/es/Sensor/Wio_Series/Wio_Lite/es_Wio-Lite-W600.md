---
title: Wio Lite W600
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio-Lite-W600/
slug: /es/Wio-Lite-W600
last_update:
  date: 01/11/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/Wio-Lite-W600-wiki.jpg)

Wio Lite W600 es una placa compatible con Arduino rentable que incluye el módulo WiFi W600. El Wio Lite W600 cuenta con un microcontrolador basado en Atmel® | SMART™ SAM D21 ARM Cortex-M0+ y el núcleo WiFi W600 es un módulo WiFi de 2.4GHz que incluye ARM Cortex-M3. Dado que el Wio Lite W600 utiliza SAM D21 (el mismo chip usado en Arduino Zero) como su núcleo Arduino, en teoría, es completamente compatible con Arduino Zero.

Expone los pines del SAM D21, el nivel de E/S de esta placa es de 3.3V. Hay 6 pines analógicos y 14 pines digitales, y también están disponibles un UART, un I2C y un puerto ICSP. Puedes alimentar esta placa con USB Tipo C de 5V y batería Lipo de 3.5V~4.2V.

En cuanto al núcleo WiFi, es nuestro viejo amigo - Módulo W600. Ya hemos lanzado el Módulo W600 y [Grove - W600](https://www.seeedstudio.com/W600-Module-p-4020.html), Wio Lite W600 es un nuevo miembro de la [familia W600](https://www.seeedstudio.com/tag/W600-WIFI.html). El Módulo W600 cuenta con ARM Cortex-M3 con 1MB de flash en chip y kernel freeRTOS. Está certificado CE/FCC y soporta 802.11 b/g/n.

Además de eso, hemos lanzado el [Grove Shield para Wio Lite](https://www.seeedstudio.com/Grove-Shield-for-Wio-Lite-p-4156.html) al mismo tiempo. Con este shield, traemos más de 200 sensores, actuadores y pantallas Grove a la serie Wio Lite y la comunidad Feather.

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0-detail.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0-detail.jpg" height="450" width="600" alt="Seeed relay quick selection diagram"  />
  </a>
</figure>
</div>

Adiós, cableado complejo con la protoboard y soldadura molesta con el soldador.

¡Hola, [Grove](https://wiki.seeedstudio.com/es/Grove_System/)!

<p style={{}}><a href="https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Compatible con Arduino Zero/ Compatible con Adafruit Feather
- Módulo WiFi integrado de 2.4GHz soporta 802.11 b/g/n
- Soporta más de 200 módulos Grove
- Rentable

## Especificaciones

|Elemento|Valor|
|------------|-----------|
|Microcontrolador|SAM D21 |
|Frecuencia máxima de CPU|48 MHz|
|SRAM|32 KB|
|Memoria Flash|256 KB|
|Entrada de Alimentación|USB Tipo C 5V Batería Lipo 3.5 V ~ 4.2 V|
|Pines E/S Digitales|14|
|Canales de Entrada Analógica|6|
|Corriente DC por Pin E/S|40 mA|
|Voltaje de Entrada E/S|3.3 V|
|||
|Núcleo WiFi|W600|
|CPU|Cortex-M3 Embebido de 32bit|
|RAM|288 KB|
|Flash|1 MB|
|Modo Wi‐Fi|IEEE802.11b/g/n|
|Rango de Frecuencia|2.4~2.4835 GHz|
|Tipo de Red|STA/AP/AP+STA/Wi‐Fi Direct|
|Protocolo de red|TCP/UDP/ARP/ICMP/DHCP/DNS/HTTP|
|Verificación|WEP/WPA‐PSK/WPA2‐PSK|
|Cifrado|WEP64/WEP128/TKIP/CCMP(AES)|

## Descripción General del Hardware

![](https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/hardware-overview.jpg)

## Primeros Pasos

## Hardware

**Materiales requeridos**

- Wio Lite W600 x1
- Computadora x1
- Cable USB tipo C x1

:::tip
    Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes consultar [cable USB tipo C de Seeed compatible con USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).
:::

Conecta el Wio Lite W600 a tu computadora usando el cable USB.

## Software

## Paso 1. Necesitas instalar un software de Arduino

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Ejecutar la aplicación Arduino**

Haz doble clic en la aplicación Arduino (arduino.exe) que has descargado previamente.

:::note
    Si el software de Arduino se carga en un idioma diferente, puedes cambiarlo en el diálogo de preferencias. Consulta la [página del software de Arduino (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para más detalles.
:::

## Paso 2. Configurar tu Arduino IDE

Abre tu Arduino IDE, haz clic en **Archivo > Preferencias**, y copia la siguiente URL en *URLs adicionales de gestor de tarjetas*

```c
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json

```

 ![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/preference.png)

## Paso 3. Añadir la Placa Wio Lite W600 a tu Arduino IDE  

Por favor sigue la [Guía de Instalación de Placas Seeed](https://wiki.seeedstudio.com/es/Seeed_Arduino_Boards/) y busca la palabra clave **seeeduino_samd_zero** para añadir el **Wio Lite W600** a tu Arduino IDE.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE1.png"/>
  <figcaption> <i>La palabra clave es **seeeduino_samd_zero**</i> </figcaption>
</figure>
</div>

## Paso 4. Añadir la Librería W600 a tu Arduino IDE

Descarga la [Librería W600](https://github.com/Seeed-Studio/Seeed_Arduino_W600/archive/master.zip) desde Seeed Github. Luego consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

## Paso 5. Reinicia el Arduino IDE. Abre el ejemplo AP-Station, puedes abrirlo en el Arduino IDE por la ruta: **File --> Examples -->W600_wifi-->log_data

![](https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE3.png)

## Paso 6. Modifica el código con tu propio AP y Station. En la siguiente imagen, Wio Lite W600 funciona como una estación para unirse al AP marcado **A** y el Wio Lite W600 creará el **B AP** para otros dispositivos. Debes cambiar tanto el nombre del AP como la contraseña

![](https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE-4.jpg)

## Paso 7. Selecciona tu placa y puerto

Necesitarás seleccionar la entrada en el menú **Tools > Board** que corresponde a tu Arduino.
Seleccionando un **Seeeduino Zero**.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE2.png"/>
  <figcaption><i>Elige la placa correcta</i></figcaption>
</figure>
</div>

Selecciona el dispositivo serie de la placa Arduino desde el menú Tools | Serial Port. Es probable que sea COM3 o superior (**COM1** y **COM2** están usualmente reservados para puertos serie de hardware). Para averiguarlo, puedes desconectar tu placa Arduino y reabrir el menú; la entrada que desaparezca debería ser la placa Arduino. Reconecta la placa y selecciona ese puerto serie.

## Paso 8. Subir el código  

Ahora, simplemente haz clic en el botón "Upload" en el entorno. Espera unos segundos y si la subida es exitosa, el mensaje "Done uploading." aparecerá en la barra de estado.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png"/>
  <figcaption><i>Subir el código</i></figcaption>
</figure>
</div>

Unos segundos después de que termine la subida, entonces el Wio Lite W600 accederá al AP que configuraste y puedes usar tu teléfono para acceder al AP creado por Wio Lite W600

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio-Lite-W600/res/Wio-Lite-W600.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Archivo Eagle de Wio Lite W600](https://files.seeedstudio.com/wiki/Wio-Lite-W600/res/Wio-Lite-W600.zip)
- **[PDF]** [Hoja de datos W600](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_User%20Manual_V1.0.0.pdf)

## Soporte Técnico y Discusión de Productos

 si tienes algún problema técnico.  envía el problema a nuestro [foro](http://forum.seeedstudio.com/).
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
