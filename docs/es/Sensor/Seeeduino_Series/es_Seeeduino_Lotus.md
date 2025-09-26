---
description: Seeeduino Lotus
title: Seeeduino Lotus
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino_Lotus
last_update:
  date: 1/31/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/Seeeduino_Lotus_Cover.jpg)

Seeeduino Lotus es una placa de desarrollo de microcontrolador ATMEGA328. Es una combinación de Seeeduino y Base Shield. Seeeduino Lotus v1.0 utiliza un Atmel ATMEGA328P-MU y CH340. ATMEGA328P-MU es un microcontrolador AVR de 8 bits de alto rendimiento y bajo consumo. CH340 es un chip convertidor de bus USB que puede realizar una interfaz USB a serie. Seeeduino Lotus v1.1 reemplaza CH340 con CP2102N para habilitar la compatibilidad con MAC, no hay ningún otro cambio comparado con Seeeduino Lotus v1.0. Seeeduino Lotus tiene 14 entradas/salidas digitales (6 de las cuales pueden generar PWM) y 7 entradas/salidas analógicas, una conexión micro USB, un header ICSP, 12 conexiones Grove, un botón de reset.

:::warning
Seeeduino Lotus 1.0 funciona SOLO en el Sistema Operativo Windows. Seeeduino Lotus 1.1 funciona con Windows y Mac.
:::

## Versión

---
| Revisión | Descripciones                                              | Lanzamiento      |Cómo comprar|
|----------|-----------------------------------------------------------|--------------|--------------|
| v1.0   | Lanzamiento público inicial (beta)                             | Jul 22, 2014  |[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)|
| v1.1   | Reemplaza CH340 con CP2102N para habilitar la compatibilidad con MAC |Dic 22,2016   |[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Lotus-V1.1-ATMega328-Board-with-Grove-Interface-p-2917.html)|

## Ideas de Aplicación

* DIY
* IoT y Hogar Inteligente
* Robot
* Aprendizaje
* Juguete

Aquí tienes algunos proyectos divertidos para tu referencia.

|Auto Controlado por Track Ball|Receptor FM|Hacer una Pistola de Madera|
|-------|-------|-------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/example_1.png)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/Fm%20demo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/gun.jpg)|
|[Hazlo Ahora](https://community.seeedstudio.com/A-Car-Controlled-by-Track-Ball-p-1132.html)|<a href="/es/FM_Receiver" ><span><font size={"3"}> Hazlo Ahora </font></span></a>|[Hazlo Ahora](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)|

## Característica

* Totalmente compatible con Arduino UNO
* Microcontrolador ATmega328
* 12 conectores Grove integrados
* 14 Pines de E/S Digitales (6 salidas PWM)
* 6 Entradas Analógicas
* Cabecera ISP
* Compatible con Shield Arduino UNO-R3
* Programación y alimentación por Micro USB
* Voltaje de Operación de 5V

## Especificación

|Elemento|Valor|
|------------|-----------|
|Microcontrolador|ATmega328P-MU|
|Voltaje de Operación|5V|
|Pines de E/S Digitales|14|
|Canales PWM|6|
|Canales de Entrada Analógica|7|
|Corriente DC por Pin de E/S|40 mA|
|Memoria Flash|32 KB|
|RAM|2 KB|
|EEPROM|1 KB|
|Velocidad de Reloj|16 MHz|

## Descripción General del Hardware

Las imágenes a continuación muestran una descripción general de las características del hardware de Seeeduino Lotus. El diagrama de pines y las funciones alternativas de varios pines de Seeeduino Lotus se muestran en el diagrama de pines. Esto podría usarse como una referencia rápida.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/seeeduino_lotus_hardware_overview.jpg)

* **LED-D13**
Un LED está conectado al pin D13 de la placa. Esto puede usarse como un indicador LED integrado para programas/sketches.
* **Entrada USB**
El puerto USB se usa para conectar la placa a tu PC para programación y para alimentación. Micro USB es la versión ubicua de USB, que se encuentra en la mayoría de teléfonos Android y otros dispositivos. Probablemente tengas docenas de estos cables por toda tu casa.
* **Reset**
Este botón está convenientemente ubicado en el lateral para permitirte reiniciar la placa Seeeduino incluso cuando un shield está colocado encima. Este no es el caso en otras placas Arduino donde el botón está colocado arriba haciéndolo difícil de acceder.
* **Pines de Alimentación y Pines Analógicos**
Al igual que las almohadillas de cabecera Digital adicionales, estas conexiones extra son algo que personalmente hemos llegado a darnos cuenta de que la gente necesita en sus proyectos, especialmente las conexiones de alimentación si quieres alimentar más de un sensor/dispositivo sin el uso de una protoboard.
* **Conectores Grove**
SeeedStudio tiene una variedad de sensores/dispositivos que pueden hacer uso de esta conexión Analógica, Digital, I2C y UART. Además, vendemos conectores Grove independientes para ayudarte a hacer tus propias conexiones de sensores.
* **ICSP**
Esta es la conexión ICSP para el ATmega328P, está ubicada en la posición estándar ICSP/SPI para hardware compatible con Arduino Uno, Due, Mega y Leonardo (por ejemplo, shields) que pueden usar este conector. Los pines SPI en este puerto: MISO, SCK y MOSI, también están conectados a los pines digitales 12, 13 y 11 respectivamente, al igual que los del Arduino Uno.
* **USB 2 Uart**
Distribución de pines de USB-2-Uart. Estas almohadillas pueden usarse para interactuar con otros dispositivos UART poniendo el ATmega328 integrado en modo reset. Esto hace que Seeeduino Lotus se use como una placa de utilidad USB2UART.

:::warning
Ten cuidado suave al manejar el conector micro USB, o podrías romper el conector.
:::

## Instalar el Controlador

Primero que todo, necesitas:

* **Obtener un cable Micro-USB**
Necesitas un cable Micro-USB primero; el cable de datos de un teléfono Android funcionará bien.
Si no puedes encontrar uno, puedes comprar uno [aquí](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100).

* **Conectar la placa**
Conecta la placa Arduino a tu computadora usando el cable USB. El LED verde de alimentación (etiquetado **PWR**) debería encenderse.

:::note
Este controlador CH340 (Seeeduino_Lotus V1.0) está disponible para Windows XP, Windows Vista, Windows 7, Windows 8/8.1 y Windows 10.
:::
[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/download_driver_for_seeeduino_lotus.png)](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/CH341SER.EXE)

Haz doble clic en el controlador e instálalo.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/driver_install.png)

:::note
Este controlador CP2102N (Seeeduino_Lotus V1.1) está disponible para Windows XP, Windows Vista, Windows 7, Windows 8/8.1, Windows 10 y Mac.
:::
[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/download_driver_for_seeeduino_lotus.png)](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

## Primeros Pasos

:::note
    Esta parte está basada en Arduino 1.6.9 bajo Windows 10.
:::
Primero que todo, necesitas instalar un Software de Arduino.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Ejecutar la aplicación Arduino**

Haz doble clic en la aplicación Arduino (arduino.exe) que has descargado previamente.

:::note
Si el Software de Arduino se carga en un idioma diferente, puedes cambiarlo en el diálogo de preferencias. Consulta la [página del Software de Arduino (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para más detalles.
:::

**Abrir el ejemplo Blink**

Abre el sketch de ejemplo de parpadeo LED: **File > Examples >01.Basics > Blink**.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png)

**Agregar Seeeduino Lite a tu Arduino IDE**

No hay una opción *Seeeduino Lite* en las placas de tu Arduino IDE, haz clic en [Cómo Agregar placas Seeed al Arduino IDE](https://wiki.seeedstudio.com/es/Seeed_Arduino_Boards/) para las instrucciones.

**Seleccionar tu placa**
Necesitarás seleccionar la entrada en el menú **Tools > Board** que corresponde a tu Arduino.
Seleccionando un **Seeeduino Lotus**.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/select_seeeduino_lotus.jpg)

**Seleccionar tu puerto serie**
Selecciona el dispositivo serie de la placa Arduino desde el menú Tools | Serial Port. Es probable que sea COM3 o superior (**COM1** y **COM2** usualmente están reservados para puertos serie de hardware). Para averiguarlo, puedes desconectar tu placa Arduino y volver a abrir el menú; la entrada que desaparezca debería ser la placa Arduino. Reconecta la placa y selecciona ese puerto serie.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/select_com.jpg)

**Subir el programa**
Ahora, simplemente haz clic en el botón "Upload" en el entorno. Espera unos segundos y si la subida es exitosa, el mensaje "Done uploading." aparecerá en la barra de estado.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png)

Unos segundos después de que termine la subida, deberías ver el LED del pin 13 (L) en la placa comenzar a parpadear (en naranja). Si lo hace, ¡felicitaciones! Has puesto Arduino en funcionamiento. Si tienes problemas, por favor consulta las sugerencias de solución de problemas.

## Visor Online del Esquemático Seeeduino Lotus v1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.0_Sch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Visor Online del Esquemático Seeeduino Lotus v1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **Esquemático**
  * [Archivo Eagle de Seeeduino Lotus V1.0](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.0_Sch.zip)
  * [Archivo Eagle de Seeeduino Lotus V1.1](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.1.zip)
  * [Archivo PDF SCH de Seeeduino Lotus V1.0](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.0_SCH.pdf)
  * [Archivo PDF SCH de Seeeduino Lotus V1.1](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino%20Lotus%20v1.1%20SCH.pdf)
  * [Archivo PDF PCB de Seeeduino Lotus V1.0](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.0_PCB.pdf)
  * [Archivo PDF PCB de Seeeduino Lotus V1.1](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino%20Lotus%20v1.1%20PCB.pdf)

* **Hoja de datos**
  * [ATmega328P](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega328.pdf)
  * [ATmega16U2](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega16u2.pdf)

* **Referencias**
  * [Primeros pasos con Arduino](https://www.arduino.cc/en/Guide/HomePage)
  * [Referencia del lenguaje Arduino](https://www.arduino.cc/en/Reference/HomePage)
  * [Descargar el software Arduino (IDE)](https://www.arduino.cc/en/Main/Software)
  * [Preguntas frecuentes de Arduino](https://www.arduino.cc/en/Main/FAQ)
  * [Introducción a Arduino](https://www.arduino.cc/en/guide/introduction)
  * [Página de Wikipedia para Arduino](https://en.wikipedia.org/wiki/Arduino)
  * [Controlador USB de Seeeduino Lotus V1.1](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

## Preguntas frecuentes

**P1. ¿Cuál es la diferencia entre Arduino UNO y Seeeduino Lotus?**

Seeeduino Lotus es completamente compatible con Arduino UNO. Y Seeeduino Lotus tiene 12 conectores Grove, lo que hace conveniente crear tu demostración con los módulos Grove de Seeed Studio. Además, Seeeduino Lotus usa un micro USB para alimentar y programar.

**P2. No puedo cargar mi sketch a Seeeduino Lotus**

Por favor verifica,

* Si el LED de alimentación está encendido
* Si elegiste el puerto y placa correctos (Seeeduino Lotus)
* Cierra y vuelve a abrir Arduino IDE e intenta de nuevo

## Proyecto

**El Código Da Vinci** El trabajo combina arte y electrónica. La parte artística forma el esqueleto y consiste en 11 capas de tablero de fibra de densidad media.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/coding-with-da-vince/the-da-vinci-code-3b91a8/embed" width={350} />

**El Pequeño Universo, una Lámpara de Pie Controlada por Gestos** El Pequeño Universo es una lámpara de pie controlada por gestos con tres patas de madera y una cabeza de lámpara artística.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/100385/the-little-universe-a-gesture-controlled-floor-lamp-323503/embed" width={350} />

## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
