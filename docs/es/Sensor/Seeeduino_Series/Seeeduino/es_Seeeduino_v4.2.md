---
description: Seeeduino v4.2
title: Seeeduino v4.2
keywords:
- Seeeduino_Series
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino_v4.2
last_update:
  date: 1/12/2022
  author: jianjing Huang
---


![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/cover.JPG)

Seeeduino v4.2 es una placa de desarrollo MCU ATmega328 de código abierto y compatible con Arduino. Creemos que Seeeduino v4.2 es uno de los mejores derivados/compatibles de Arduino disponibles. Seeeduino v4.2 es rico en características, mucho más estable, fácil de usar e incluso atractivo.

Seeeduino v4.2 está basado en el bootloader de Arduino UNO, un ATmega16U2 como convertidor UART-a-USB (básicamente funciona como un chip FTDI USB2UART). La placa viene con un conjunto adicional de pads de orificio pasante para todos los pines. Estos pads están alineados a una cuadrícula de 0.1". Esto hace que sea fácil soldar cabeceras de pines adicionales para conectar a una protoboard o crear tu propio accesorio/shield con PCBs de propósito general de matriz de puntos de 0.1".

Puedes programar la placa a través de un cable micro-USB. Además, puedes alimentar la placa a través de una entrada DC Jack (7 a 15V DC es aceptable). Hay un interruptor para elegir el voltaje de alimentación del sistema ya sea 3.3V o 5V, lo cual es muy útil si quieres configurar el sistema a 3.3V para interactuar con sensores de bajo voltaje.

Finalmente, las tres interfaces Grove integradas pueden hacer que tu placa se conecte fácilmente a módulos Grove. Si quieres hacer algo increíble, tal vez solo un Seeeduino v4.2 y algunos Groves sea suficiente.

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" /></a></p>

## Versión

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#ccc;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#6ab0de;}
.tg .tg-yw4l{vertical-align:top;width:20%}
.tg .tg-yw42{vertical-align:top;width:50%}
.tg .tg-4eph{background-color:#f9f9f9;}
.tg .tg-b7b8{background-color:#f9f9f9;vertical-align:top}
</style> -->

<table className="tg" align={"center"} width = {"100%"}>
  <tbody><tr>
      <th className="tg-yw4l">Versión del Producto</th>
      <th className="tg-yw42">Cambios</th>
      <th className="tg-yw4l">Fecha de Lanzamiento</th>
    </tr>
    <tr>
      <td className="tg-4eph">Seeeduino V4.0</td>
      <td className="tg-4eph">Inicial</td>
      <td className="tg-b7b8">15 de agosto, 2014</td>
    </tr>
    <tr>
      <td className="tg-031e">Seeeduino V4.2</td>
      <td className="tg-031e">
        1.Cancelar algunos pads en la esquina superior izquierda.<br />
        <br />
        2.Cambiar la ubicación del usb al centro<br />
        <br />
        3.Mejorar el circuito DCDC para obtener un mejor rendimiento<br />
        <br />
        4.Agregar un conector Grove I2C<br />
        <br />
        5.Cambiar algunas serigrafías y ubicación de partes
      </td>
      <td className="tg-yw4l">24 de agosto, 2015</td>
    </tr>
      <tr>
    <td>Seeeduino V4.3</td>
    <td>Cambio de <strong>ATMEGA328P-MU</strong> a ATMEGA328P-AU en V4.2<br />Reemplazar el chip serial por <strong>cp2102</strong></td>
    <td>Nov. 2022</td>
  </tr>
  </tbody></table>

## Características

- Totalmente compatible con Arduino UNO
- Microcontrolador ATmega328
- 14 Pines de E/S Digitales (6 salidas PWM)
- 6 Entradas Analógicas
- Cabecera ISP
- Compatible con Shield Arduino UNO-R3
- Programación y alimentación por Micro USB
- Conectores Grove integrados
- Interruptor de alimentación del sistema 3.3/5V
- Pads adicionales alineados a cuadrícula de 0.1"

## Especificación

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#6ab0de;}
.tg .tg-vn4c{background-color:#D2E4FC}
.tg .tg-yw4l{vertical-align:top}
.tg .tg-6k2t{background-color:#D2E4FC;vertical-align:top}
</style> -->

<table class="tg" align={"center"} width = {"100%"}>
  <tr>
    <th class="tg-yw4l">  Parámetro</th>
    <th class="tg-yw4l">  Valor/Rango</th>
  </tr>
  <tr>
    <td class="tg-vn4c">  Entrada Jack DC </td>
    <td class="tg-vn4c">  7-12V</td>
  </tr>
  <tr>
    <td class="tg-031e" rowspan="2">  Corriente de Salida DC-Pin 5V </td>
    <td class="tg-031e">  Con Micro USB 500mA Máx</td>
  </tr>
  <tr>
    <td class="tg-vn4c">  Con Alimentación Jack DC 2000mA Máx  </td>
  </tr>
  <tr>
    <td class="tg-031e">  Corriente de Salida DC-Pin 3V3  </td>
    <td class="tg-031e">  500mA Máx</td>
  </tr>
  <tr>
    <td class="tg-vn4c">  Corriente DC por Pin de E/S</td>
    <td class="tg-vn4c">  40mA</td>
  </tr>
  <tr>
    <td class="tg-031e">  Memoria Flash</td>
    <td class="tg-031e">  32 KB</td>
  </tr>
  <tr>
    <td class="tg-vn4c">  RAM</td>
    <td class="tg-vn4c">  2 KB</td>
  </tr>
  <tr>
    <td class="tg-yw4l">  EEPROM</td>
    <td class="tg-yw4l">  1 KB</td>
  </tr>
  <tr>
    <td class="tg-6k2t">  Velocidad de Reloj</td>
    <td class="tg-6k2t">  16 MHz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">  Dimensión</td>
    <td class="tg-yw4l">  68.6mm x 53.4mm</td>
  </tr>
  <tr>
    <td class="tg-6k2t">  Peso</td>
    <td class="tg-6k2t">  26g</td>
  </tr>
</table>

## Descripción General del Hardware

Las imágenes a continuación muestran una descripción general de las características del hardware de Seeeduino v4.2. El diagrama de pines y las funciones alternativas de varios pines de Seeeduino v4.2 se muestran en el diagrama de pines. Esto podría usarse como una referencia rápida.

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/hardware_seeed.png)

- **<font face="" size="5" font color="00b0f0">❶</font> Entrada USB:**
El puerto USB se usa para conectar la placa a tu PC para programación y para alimentación.

- **<font face="" size="5" font color="00b0f0">❷</font> Entrada DC:**
El conector de alimentación DC permite que tu placa Seeeduino sea alimentada desde un adaptador de pared para que puedas suministrar más energía a tu proyecto si es necesario. Por ejemplo, cuando uses motores DC u otros dispositivos de alta potencia. La entrada DC puede ser de 7V-15V.

- **<font face="" size="5" font color="00b0f0">❸</font> Conectores Grove:**
SeeedStudio tiene una variedad de sensores/dispositivos que pueden hacer uso de esta conexión I2C o UART. Además, vendemos conectores Grove independientes para ayudarte a hacer tus propias conexiones de sensores. El conector Grove I2C también está conectado a los pines analógicos A4 y A5 para SDA y SCL respectivamente si prefieres usar esos pines en su lugar. El conector Grove UART está conectado a los pines digitales 0 y 1 para RX y TX respectivamente.

- **<font face="" size="5" font color="00b0f0">�④</font> ICSP:**
Esta es la conexión ICSP para el ATmega328P, está ubicada en la posición estándar ICSP/SPI para hardware compatible con Arduino Uno, Due, Mega y Leonardo (por ejemplo, shields) que pueden usar este conector. Los pines SPI en este puerto: MISO, SCK y MOSI, también están conectados a los pines digitales 12, 13 y 11 respectivamente, igual que los del Arduino Uno.

- **<font face="" size="5" font color="00b0f0">❺</font> USB 2 Uart:**
Distribución de pines de USB-2-Uart. Estos pads pueden usarse para interactuar con otros dispositivos UART poniendo el ATmega328 integrado en modo reset. Esto hace que Seeeduino V4.2 pueda usarse como una placa de utilidad USB2UART.

- **<font face="" size="5" font color="00b0f0">❻</font> Interruptor de Alimentación del Sistema:**
El interruptor deslizante se usa para cambiar el nivel lógico y voltaje de operación de la placa a 5V o 3.3V.

- **<font face="" size="5" font color="00b0f0">❼</font> Reset:**
Este botón está convenientemente ubicado en el lateral para permitirte reiniciar la placa Seeeduino incluso cuando un shield esté colocado encima. Este no es el caso en otras placas Arduino donde el botón está colocado arriba haciéndolo difícil de acceder.

- **<font face="" size="5" font color="00b0f0">❽</font> LED-D13:**
El LED está conectado al pin D13 de la placa. Esto puede usarse como un indicador LED integrado para programas/sketches.

- **<font face="" size="5" font color="00b0f0">❾</font> Indicador RX/TX:**
Los indicadores LED TX y RX están conectados a TX y RX del chip USB-to-UART. Funcionan automáticamente, te permiten saber cuándo la placa está enviando o recibiendo datos respectivamente.

## Primeros Pasos

### Hardware

- Paso 1. Prepara un Seeeduino V4.2 y un cable Micro-USB.
- Paso 2. Conecta el Seeeduino V4.2 a tu computadora con el cable Micro-USB.
Entonces el LED verde de alimentación (etiquetado PWR) debería encenderse.

![](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/connect.jpg)

:::caution

Por favor conecta el cable USB suavemente, de lo contrario podrías dañar la interfaz. Por favor usa el cable USB con 4 cables internos, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.
:::

### Software

:::note
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino)
:::

**Paso 1. Instalar el Controlador**

- **Para Seeeduino V4.2**

Para Windows

Este controlador está disponible para Windows XP, Windows Vista, Windows 7, Windows 8/8.1.

:::note
El controlador se instalará automáticamente cuando instalemos el IDE de arduino en windows 10.
:::

[![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/download_driver.png)](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver/archive/master.zip)

- Conecta tu placa y espera a que Windows comience su proceso de instalación de controladores. Después de unos momentos, el proceso fallará, a pesar de los mejores esfuerzos.
- Haz clic en el Menú Inicio, y abre el Panel de Control.
- Mientras estés en el Panel de Control, navega a Sistema y Seguridad. Luego, haz clic en Sistema. Una vez que la ventana del Sistema esté abierta, abre el **Administrador de Dispositivos**.
- Busca bajo Puertos (COM y LPT). Deberías encontrar un puerto abierto llamado "Seeeduino v4.2". Si no hay una sección COM y LPT, busca bajo "Otros Dispositivos" por "Dispositivo Desconocido".
- Haz clic derecho en el puerto "Seeeduino v4.2" y elige la opción "Actualizar Software del Controlador".
- Luego, elige la opción "Buscar software del controlador en mi equipo".
- Finalmente, navega y selecciona el archivo del controlador llamado "seeed_usb_serial.inf"
- Windows terminará la instalación del controlador desde ahí.

Para Mac OSX y Linux, no necesitas instalar ningún controlador.

- **Para Seeeduino v4.3**

Necesitas instalar el controlador cp2102 para usar el puerto serie de Seeeduino V4.3.

Puedes hacer clic [aquí](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/CP210x_Universal_Windows_Driver.zip) para descargar y descomprimir el controlador de Windows para cp2102.

Si estás usando otro sistema operativo, puedes obtener el controlador en el [sitio web oficial](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads).

**Paso 2. Ejecutar la aplicación Arduino.**

Haz doble clic en la aplicación Arduino (arduino.exe) que has instalado previamente.

:::note
Si el Software Arduino se carga en un idioma diferente, puedes cambiarlo en el diálogo de preferencias. Consulta la [página del Software Arduino (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para más detalles.
:::

**Paso 3. Abrir el ejemplo Blink.**

Encuentra el sketch de ejemplo de parpadeo LED: **File > Examples >01.Basics > Blink**.

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/blink.png)

**Paso 4. Seleccionar tu placa.**

Necesitarás seleccionar la entrada en el menú **Tools > Board** que corresponda a tu Arduino. Selecciona el **Seeeduino v4.2**.

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/select_board.png)

Si no puedes encontrar el Seeeduino v4.2, por favor revisa [Cómo Agregar placas Seeed al IDE de Arduino](https://wiki.seeedstudio.com/es/Seeed_Arduino_Boards/)

**Paso 5. Selecciona tu puerto serie.**

Selecciona el dispositivo serie de la placa Arduino desde el menú Tools | Serial Port. Es probable que sea COM3 o superior (**COM1** y **COM2** usualmente están reservados para puertos serie de hardware). Para averiguarlo, puedes desconectar tu placa Arduino y volver a abrir el menú; la entrada que desaparezca debería ser la placa Arduino. Vuelve a conectar la placa y selecciona ese puerto serie.

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/select_port.png)

:::note
En Mac o Linux, esto debería ser algo con **`/dev/tty.USBmodem`**.
:::

**Paso 6. Sube el programa.**

Ahora, simplemente haz clic en el botón "Upload" en el entorno. Espera unos segundos - deberías ver los indicadores LED RX y TX en la placa parpadeando. Si la subida es exitosa, aparecerá el mensaje "Done uploading."

Unos segundos después de que termine la subida, deberías ver el LED del pin 13 (L) en la placa comenzar a parpadear (en naranja). Si es así, ¡felicitaciones! Has puesto Arduino en funcionamiento. Si tienes problemas, por favor consulta las sugerencias de solución de problemas.

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/Seeeduino_v4_2_L.jpg)

## Ideas de Aplicación

- DIY
- IoT y Hogar Inteligente
- Robot
- Aprendizaje

Aquí tienes algunos proyectos divertidos para tu referencia.

|Hombre de Papel|Cerradura de Huella Digital|Soporte de Monitor|
|-------|-------|-------|
|![](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project3.jpg)|
| [Hazlo Ahora](https://www.instructables.com/id/Paper-Man-a-machine-created-by-Arduino-and-NFC/) | [Hazlo Ahora](https://www.instructables.com/id/Door-to-Open-Source-Hardware-A-fingerprint-lock-so/) | [Hazlo Ahora](https://www.instructables.com/id/DIY-a-Programmable-Acrylic-Monitor-Stand/)|

|Promoción de Escritorio|Máquina Tigre|Pirámide Colorida|
|-------|-------|-------|
|![](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project6.jpg)|
| [Hazlo Ahora](https://www.instructables.com/id/Desk-promo/) | [Hazlo Ahora](https://www.instructables.com/id/How-to-Make-Your-Tiny-Tiger-Machine/) | [Hazlo Ahora](https://www.instructables.com/id/DIY-a-colorful-pyramid/)|

## FAQs

**P1：En Ubuntu, obtengo el error 'avrdue: ser_open(): can't open device `dev/tty/ACM0`: Permission denied'. ¿Cómo conecto Seeeduino V4 a una PC Linux?**

R1： Por favor lee las instrucciones [aquí](http://playground.arduino.cc/Linux/Debian) para hacer que Arduino IDE funcione sin permisos de root en Ubuntu. Por favor encuentra abajo la parte relevante.

**P2: ¿Cuál es la diferencia entre Arduino UNO y Seeeduino v4.2?**

R2: Seeeduino v4.2 es completamente compatible con Arduino UNO. Las principales diferencias se listan abajo:

- Usa un micro USB para alimentar y programar la placa
- 3 conectores Grove integrados
- Interruptor de alimentación del sistema 3.3/5V
- Circuito DCDC en lugar de LDO, más eficiencia
- Otras mejoras de circuito

**P3: Error descargando `<http://downloads.arduino.cc/packages/package_index.json>`**

R3: Por favor sigue los pasos de abajo para resolver el problema.

- Haz clic en Archivo -> Preferencias
- Haz clic en la url C:\Users...\AppData\Local\Arduino15\preferences.txt en la parte inferior de la ventana de Preferencias.
- Elimina todos los archivos excepto preferences.txt, staging y packages.
- Cierra y reabre una ventana del IDE y debería funcionar.

## Visor Online del Esquemático Seeeduino V4.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/SeeeduinoV4.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Descargar Wiki PDF](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.2.pdf)
- **[Eagle]** [Seeeduino V4.2 en archivo EAGLE](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/SeeeduinoV4.2.zip)
- **[PDF]** [Seeeduino V4.2 en PDF](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.2_sch.pdf)
- **[Eagle]** [Seeeduino V4.0 en archivo EAGLE](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.0_sch.pdf)
- **[PDF]** [Seeeduino V4.0 en PDF](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.0_sch.pdf)
- **[Datasheet]** [ATmega328P](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega328.pdf)
- **[Datasheet]** [ATmega16U2](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega16u2.pdf)
- **[MásLectura]** [Comenzando con Arduino](https://www.arduino.cc/en/Guide/HomePage)
- **[MásLectura]** [Referencia del Lenguaje Arduino](https://www.arduino.cc/en/Reference/HomePage)
- **[MásLectura]** [Descargar el Software Arduino(IDE)](https://www.arduino.cc/en/Main/Software)
- **[MásLectura]** [FAQ de Arduino](https://www.arduino.cc/en/Main/FAQ)
- **[MásLectura]** [Introducción a Arduino](https://www.arduino.cc/en/guide/introduction)
- **[MásLectura]** [Página de Wikipedia para Arduino](https://en.wikipedia.org/wiki/Arduino)
- **[MásLectura]** [Cómo ajustar módulos RF Explorer 3G+ IoT en Seeeduino](http://j3.rf-explorer.com/60-rfe/specifications/184-rf-explorer-3g-iot-for-seeeduino)
- **[Firmware]** [Cómo grabar el bootloader](https://files.seeedstudio.com/wiki/forum_doc/reg/seeeduino_boot.zip)

## Proyecto

**Hackeando las Escaleras en la Nueva Oficina de Seeed**: Convierte las escaleras de la oficina en una instalación interactiva, e incluso una forma genial de transmitir el mensaje "SOLO PERSONAL" a los visitantes.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/stairs-hackers/hacking-the-stairs-at-seeed-s-new-office-9ef30b/embed' width='350'></iframe>

**Crea una Matriz de Color Interactiva con Seeeduino/Arduino**: ¡Este es un proyecto de arte interactivo hecho con una placa Seeeduino 4.2, que se ve bien y es fácil de hacer!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/78141/make-an-interactive-color-matrix-with-seeeduino-arduino-f9f3c0/embed' width='350'></iframe>

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
