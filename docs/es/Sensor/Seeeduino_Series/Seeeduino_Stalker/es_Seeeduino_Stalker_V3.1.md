---
description: Seeeduino Stalker V3.1
title: Seeeduino Stalker V3.1
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino_Stalker_V3.1
last_update:
  date: 1/31/2023
  author: shuxu hu
---

Tal vez estés muy familiarizado con la serie Seeeduino stalker, o tal vez seas completamente nuevo en este Nodo de Red de Sensores Inalámbricos rico en características. Sin importar en qué situación te encuentres, si vas a hacer una aplicación de registro de datos al aire libre, encontrarás que Seeeduino Stalker es la mejor placa.

El propósito principal de crear esta serie es crear una placa portadora X-bee para que los usuarios puedan hacer aplicaciones al aire libre de manera más conveniente. Desde que la primera versión fue lanzada en 2009, los Seeders han estado recopilando continuamente comentarios de los usuarios y manteniendo actualizaciones de la placa. han existido 6 versiones durante los últimos 7 años, este verano estamos emocionados de lanzar el miembro más actualizado de la familia Seeeduino stalker----Seeeduino Stalker V3.1.

Seeeduino Stalker V3.1 no es solo una simple actualización de V3.0. La principal sorpresa que encontrarás sobre la placa es un consumo de energía impresionantemente bajo, en modo de suspensión, la corriente de salida de toda la placa será tan baja como 100uA. Esta es una actualización verdaderamente derivada de los comentarios de los usuarios.(realmente nos importa tu opinión). veamos cómo lo logramos.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/cover.JPG)

### Seguimiento de Versiones

|Versión|Fecha de Lanzamiento|Cómo Comprar|
|--------|-----------|-----------|
|Seeeduino Stalker V1.0|23 Dic, 2009|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V2.0|10 Dic, 2010|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V2.1|3 Oct, 2011|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V2.2|27 Dic, 2011|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V2.3|10 Ene, 2013|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V3.0|6 Jun, 2014|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|Seeeduino Stalker V3.1|10 Jul, 2016|[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Stalker-V3.1-p-2686.html)|

### Qué hay de nuevo en Seeeduino Stalker V3.1

**Mejora en la Gestión de Energía**

En V3.1, cuando el MCU está en modo de suspensión, todo el suministro de energía adicional, incluyendo el puerto del área Bee, puerto 3.3v, VCC puede ser cortado manualmente, de modo que realmente se puede ahorrar energía.

**Otros Cambios**

Se añadió un interruptor de palanca al área X-bee, que te permite seleccionar ya sea el puerto serie por hardware o el puerto serie por software basado en lo que quieras conectar.

También añadimos 2 interruptores de palanca en el circuito RTC correspondientes a 2 pines INT del MCU, para que los usuarios puedan elegir fácilmente qué pin INT conectar con el puerto INT del RTC y luego activar el MCU.

## Características

----

- Distribución de pines compatible con Arduino UNO con bootloader Arduino Fio
- IC gestor de batería Lipo y entrada de carga solar (conector jst2.0)
- Chip de Reloj de Tiempo Real integrado **DS1337S** (Socket para una pila de botón CR1220, que actúa como fuente de energía de respaldo para RTC)
- Interfaz serie con DTR para reinicio automático durante la programación cuando opera en modo independiente.
- Socket para tarjeta microSD
- Conector Grove (voltaje de operación seleccionable: 5.0V o 3.3V)
- Botones de reinicio tanto para Módulos XBee como para ATMega328P
- Socket serie Bee 2*10 pin paso 2.0mm

## Especificación

----

|Parámetro              |Valor          |
|-------------------    ----|---------------|
|Micro Controlador         |Atmega328P        |
|Velocidad de Reloj              |8 MHz             |
|Voltaje E/S              |3.3V              |
|RTC                      |DS1337S        |
|Placa para Arduino IDE    |Arduino Pro o Pro Mini (3.3v , 8 MHz)w/ATmega328    |
|Fuente de Alimentación            |Batería LiPo 3.7v, Usar panel solar 5VDC para cargar la batería|
|Conector de Alimentación        |JST 2 pines/ USB|
|Conectividad            |I2C, UART, SPI|
|Tarjeta SD                   |tarjeta micro SD |
|Corriente de Circuito Abierto    |6 mA máx|
|Corriente de Carga        |300mA|
|Corriente Máxima en puerto 3.3v |    800mA|
|Tamaño de PCB             |86.74mm x 60.96mm|

## Ideas de Aplicación

----

- Red de Sensores Inalámbricos (usando **XBee** comprado por separado)
- Registro GPS (usando [GPSBee](https://www.seeedstudio.com/wiki/GPS_Bee_kit) comprado por separado)
- Sistema de Adquisición de Datos capaz de comunicarse con una App ejecutándose en iPhone/Teléfono Android (usando [BluetoothBee](https://www.seeedstudio.com/wiki/Bluetooth_Bee) comprado por separado).
- Control Remoto RF (usando [RFBee](https://wiki.seeedstudio.com/es/RFbee_V1.1-Wireless_Arduino_compatible_node/) comprado por separado).
- Como una plataforma simple independiente de computación física compatible con Arduino.

## Descripción General del Hardware

----

### Descripción General

Seeeduino Stalker V3.1 es una placa de aplicación con funciones ricas. RTC, conector de batería Lipo, socket Bee y socket de tarjeta SD, etc. La imagen de descripción general a continuación introducirá cada parte de la placa para ayudarte a conocer mejor la placa.

[![haz clic para ver imagen más grande](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/overview.png)](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/overview.png)

| NOMBRE | FUNCIÓN|
|-------|-------------------------------------|
|RTC BATTERY | Batería de celda para alimentar DS1337S  |
|RTC_INT | Interruptor de interrupción RTC|
|Bee Serial Select|Selección de pin RX/TX de Bee, puedes seleccionar D0/D1 o D6/D7|
|Bee Socket|Insertar un Bee|
|CHARGE STATUS LED|**OK**: un led verde, encendido cuando la carga está completa. **CH**: un led rojo, encendido mientras se carga|
|BEE RST|Reiniciar el Bee|
|SOLAR|Entrada solar para cargar la batería, entrada 4.5~6V|
|LIPO |entrada de batería lipo, 3.7V|
|L|Un LED conectado a D13, puede actuar como monitor|
|GROVE2|Puerto Grove, conecta a I2C|
|GROVE1|Puerto Grove, conecta a D7/8|
|PROGRAM|Puerto de programación, conecta un UartSBee aquí|
|RST|Reiniciar el Atmega328P|
|SD CARD|Un socket de tarjeta micro SD|

### Mapa de pines

Seeeduino Stalker V3.1 es compatible con Arduino, hay muchos pines analógicos, pines digitales así como pines serie disponibles para hacer tu propia aplicación. La imagen del mapa de pines a continuación te ayudará a decidir qué pines están libres o no, así como los pines utilizados.

[![haz clic para ver imagen más grande](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/pinmap1.png)](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/pinmap1.png)

## Comenzar

----
Si esta es tu primera vez programando con un Seeeduino Stalker. Puedes seguir los pasos a continuación para comenzar. Antes de empezar, asegúrate de tener las siguientes cosas a mano:

|Seeeduino Stalker V3.1|UartSBee V4|Cable Mini USB|Cable de 6 pines|
|----------------------|-----------|--------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/gs_stalker.JPG)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/gs_uartsbee.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/gs_miniusb.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/gs_6pincable.jpg)|
|[CONSIGUE UNO AHORA](https://www.seeedstudio.com/Seeeduino-Stalker-V3.1-p-2686.html)|[CONSIGUE UNO AHORA](https://www.seeedstudio.com/UartSBee-V4-p-688.html)|[CONSIGUE UNO AHORA](https://www.seeedstudio.com/Mini-USB-cable-100cm-p-252.html)|[CONSIGUE UNO AHORA](https://www.seeedstudio.com/6-pin-dual-female-jumper-wire-300mm-(5-PCs-pack)-p-128.html)|

:::note
    UartSBee V4, cable Mini USB y cable de 6 pines no están incluidos.
:::

### PASO 1: Conexión

Primero conecta Stalker a UartSBee mediante el cable puente de 6 pines, luego conecta UartSBee a una PC mediante el cable mini USB.

|Seeeduino Stalker|UartSBee V4|
|-----------------|-----------|
|    DTR              |    DTR          |
|    TXD              |    RXD          |
|    RXD              |    TXD          |
|    5V               |    VCC          |
|    GND              |    GND          |


:::note
    El interruptor de alimentación en UartSBee V4 debe estar en 5V
:::

### PASO 2: UartSBee y el Controlador

UartSBee es una interfaz USB a UART Serial que está basada en FT232RL de FDTI. Haz clic para descargar el [controlador](https://www.ftdichip.com/FTDrivers.htm) para la placa.

En nuestro caso, realizará tres funciones:

- Programar el Seeeduino Stalker.
- Comunicarse con Seeeduino Stalker.
- Proporcionar alimentación (desde la alimentación USB de la PC) al Seeeduino Stalker (incluyendo cualquier periférico conectado a él).

### PASO 3: Arduino IDE

Seeeduino Stalker es una placa compatible con Arduino que tiene funciones ricas. Si no tienes un Arduino IDE, necesitas descargar el software Arduino más reciente para programar la placa.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

### PASO 4: Agregar Seeeduino Stalker a tu Arduino IDE

No hay opción de *Seeeduino Stalker* en las placas de tu Arduino IDE, haz clic en [Cómo Agregar placas Seeed al Arduino IDE](https://wiki.seeedstudio.com/es/Seeed_Arduino_Boards/) para las instrucciones.

### PASO 5: Blink

Aquí actualizaremos un código simple al Stalker. Abre tu Arduino IDE, abre **File > Examples > Basics > Blink**

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/arduino_blink.png)

Luego haz clic en el botón Upload, segundos después de que termine la carga, verifica **L** en la placa, parpadeará a la frecuencia de 1s.

### Ejemplos para Stalker V3.1

Hay muchos ejemplos para Seeeduino Stalker V3.1, que consisten en:

- Ejemplo de lectura del voltaje de la batería
- Ejemplo de lectura del estado de carga
- Ejemplo de registro de datos
- Biblioteca RTC y algunos ejemplos
- Función relacionada con el modo de suspensión

## RTC

Hay un DS1307S integrado con una batería de celda de 3V, que puede mantener la hora por más de 3 años incluso cuando no hay suministro de energía a la placa. La biblioteca de DS1307S está incluida en el sketch de Stalker.

### Ajustar Fecha/Hora

Abre Arduino IDE, luego **File > Sketchbook > RTC > Adjust**, luego establece la fecha/hora actual usando el objeto de la Clase DateTime **dt** en el ejemplo:

    DateTime dt(year, month, date, hour, min, sec, week-day(starts from 0 and goes to 6));
    Ex:- DateTime dt(2015, 10, 1, 11, 43, 0, 4);

Compila y carga al Stalker, luego la hora está establecida.

### Obtener Fecha/Hora Actual

Abre Arduino IDE, luego **File > Sketchbook > RTC > Now**, La fecha/hora actual se lee desde DS1337 usando la función **RTC.now()**.

    Ex:- DateTime now = RTC.now();

Compila y carga al Stalker, y abre el monitor Serial, obtendrás la visualización de fecha y hora:

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/rtc_now.png)

### Ejemplo de Interrupciones DS1337

Este ejemplo es una demostración de detección de interrupción desde la salida INT de DS1337. Esta característica es útil para la funcionalidad de registrador de datos donde el MCU se pone en modo de suspensión cuando no está en uso y DS1337 INT despierta la CPU periódicamente. Esto extiende la energía de la batería. La operación completa está documentada en el código.

Hay 2 salidas INT desde DS1337, INTA (conecta a **D2**) e INTB (conecta a **D3**). Hay un interruptor para conectar INTA/INTB y D2/D3, si no necesitas la interrupción, puedes simplemente cerrar el interruptor y ahorrar 1 o 2 E/S. Interruptor como se muestra a continuación:

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/RTC_INT_SELECT.png)

Abre Arduino IDE, luego **File > Sketchbook > RTC > interrupts**, este ejemplo generará una interrupción cada minuto. Si necesitas otro tipo de alarma, por favor consulta el código.

## Tarjeta SD

Hay un socket para tarjeta micro SD en el cual puedes insertar una tarjeta micro SD para almacenar algunos datos. Stalker lee/escribe la tarjeta SD a través de la interfaz SPI. Hay suficientes ejemplos para operar una SD usando la librería SD dentro del Arduino IDE.
Abre tu Arduino IDE, **Archivo > Ejemplos > SD**, obtendrás muchos ejemplos.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/sd_cs.png)

:::note
    El pin CS está conectado al D10 del Stalker, por lo que necesitas cambiar el pin CS a D10 en los ejemplos.
:::

## Administrador de Energía

Hay un circuito de administración de batería Lipo integrado en Stalker. Hay dos funciones útiles disponibles en el sketch.

### Leer el voltaje de la Batería Lipo

Abre Arduino IDE, **Archivo > Sketchbook > ReadBattery** para abrir el ejemplo.

El voltaje de la batería está relacionado con la capacidad de la batería. A continuación hay una referencia, pero ten en cuenta que no es para todas las baterías, para una batería específica, los datos pueden ser un poco diferentes.

|Capacidad(%)|100%| 80% | 60% | 40% | 20% | 0% |
|-----------|----|-----|-----|-----|-----|----|
|**Voltaje(V)**|4.20|4.00 |3.87 |3.79 |3.73 |3.00|

### GET Estado de Carga

Abre Arduino IDE, **File > Sketchbook > ReadChageStatus** para abrir los ejemplos. Esta función devolverá 3 estados:

    0: No hay batería insertada
    1: Cargando
    2: Carga completa

## Bees

Los Bees son una serie de módulos que consisten en funciones ricas. Tales como Wi-Fi, BLE, GPS así como RF etc. Con un XBee, Stalker puede actuar como un nodo que tiene comunicación. Un Stalker hablando con otro Stalker ya no es imposible. Si necesitas más detalles sobre los Bees, a continuación hay algunas referencias.

|Bluetooth Bee |XBee Wi-Fi PCB Antenna| RFbee V1.1|
|---|---|---|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee3.jpg)|
|[OBTENER UNO AHORA](https://www.seeedstudio.com/Bluetooth-Bee-Standalone-p-1157.html)    |<a href="https://www.seeedstudio.com/XBee-Wi-Fi-PCB-Antenna-S6-p-1114.html">OBTENER UNO AHORA</a> |[OBTENER UNO AHORA](https://www.seeedstudio.com/RFbee-V1.1-Wireless-arduino-compatible-node-p-614.html)|
|Bluetooth Bee - Standalone|GPS Bee kit|Mesh Bee|
|:---:|:---:|:---:|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/bee6.jpg)|
|[OBTENER UNO AHORA](https://www.seeedstudio.com/Bluetooth-Bee-v2.0-p-2373.html)    |<a href="https://www.seeedstudio.com/GPS-Bee-kit-(with-Mini-Embedded-Antenna)-p-560.html">OBTENER UNO AHORA</a> |<a href="https://www.seeedstudio.com/Mesh-Bee-Open-Source-Zigbee-Pro-Module-with-MCU-(JN5168)-p-1751.html">OBTENER UNO AHORA</a>|

:::note

- Necesitas seleccionar el pin Serial para un Bee, D0/D1 y D5/D6 están disponibles. Por favor consulta la Descripción General del Hardware para obtener más información.
- D9 está controlando la alimentación del Vcc del socket Bee, si necesitas alimentar un Bee, debes hacer D9 HIGH: digitalWrite(9, HIGH), y no olvides pinMode(9, OUTPUT) en el Setup.
:::

## Ejemplo de Registrador de Datos

-----
La aplicación principal del Seeeduino Stalker v3.0 es el registro de datos de señales de sensores como voltaje de batería, etc. junto con la marca de tiempo. Este sketch pone el MCU en modo de suspensión cuando no está realizando operaciones de muestreo/registro de datos. La implementación completa está muy bien documentada en el código.

Abre Arduino IDE, **File > Sketchbook > StalkerV30_DataLogger_10Sec** para abrir el ejemplo.

- Este sketch registra datos de voltaje de batería en la tarjeta SD configurada por la función RTC.enableInterrupts(h, m, s).
- La periodicidad se proporciona usando h, m y s. Una vez que se detecta una interrupción, el tiempo de la siguiente interrupción se actualiza avanzando el valor de h, m y s. La Clase DateTime es útil para esto.
- ej:- interruptTime = DateTime (interruptTime.get() + interruptInterval); //decide el tiempo para la siguiente interrupción
- Este sketch también produce salida detallada, es decir, los diversos eventos que ocurren dentro del MCU se muestran en el terminal serie.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/data_log_example.png)

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/202000956_Seeeduino%20Stalker%20v3.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---
**Esquemático**

- [Esquemático en **Eagle**](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/202000956_Seeeduino%20Stalker%20v3.1.zip)
- [Esquemático en **PDF**](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/Seeeduino%20Stalker%20v3.1.pdf)

**Hoja de Datos**

- [DS1307](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/ds1307.pdf)
- [CN3065](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/DSE-CN3065.pdf)
- [ETA3406](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/resources/eta3406.pdf)
- [Sketchbook](https://github.com/Seeed-Studio/Sketch_Stalker_V3_1)

## FAQ

----

Aquí hay algunas preguntas que usualmente recibimos de nuevos usuarios. Si tienes cualquier otro problema cuando estés usando Seeeduino Stalker V3.1, bienvenido a la [Comunidad de Arduino](https://community.seeedstudio.com/discover.html?t=Arduino) donde hay muchos usuarios profesionales esperando para darte consejos y también muchos usuarios avanzados proporcionando muchas ideas sobre cómo usar este producto!

**P1:** El RTC se reinicia al tiempo original cuando se apaga y enciende de nuevo.
> Hay una batería de celda para alimentar el RTC cuando no hay energía del sistema. Se supone que la batería de celda dure al menos 3 años. Puedes verificar si la batería de celda se agotó.

**P2:** No puedo subir sketch al Stalker V3.1
> Primero, verifica si tu USB-UART está conectado correctamente al Stalker, luego verifica si seleccionaste el número de puerto correcto y la placa (**Arduino Fio** o **Arduino Arduino Pro or Pro Mini (3.3v , 8 MHz)w/ATmega328**). Finalmente, si habías insertado un Bee en el socket y el RX/TX está seleccionado a D0/D1, debes quitar el bee cuando subas el sketch.

**P3:** El demo de interrupción RTC no funciona, no puedo obtener ninguna interrupción.
> Primero, verifica si configuraste la hora de alarma correctamente, y no olvides poner el interruptor RTC_INT al lado derecho.

**P4:** El panel solar no puede cargar la batería lipo.
> Asegúrate de que tu panel solar sea capaz de suministrar voltaje de 4.5~6V.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
