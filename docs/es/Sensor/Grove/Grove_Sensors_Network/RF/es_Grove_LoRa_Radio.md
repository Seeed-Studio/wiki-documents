---
title: Grove - Long Range 868MHz
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove_LoRa_Radio/
slug: /es/Grove_LoRa_Radio
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/cover.jpg)

Grove es una plataforma muy poderosa desarrollada por Seeed Studio para simplificar tus proyectos de IoT. Hemos integrado el conector grove a la mayoría de las placas producidas por Seeed para hacer que se conviertan en un sistema. Esta vez, combinamos Grove con LoRa para proporcionarte un módulo inalámbrico de ultra largo alcance.

El módulo funcional principal en Grove - LoRa Radio 433MHz es el RFM98, que es un transceptor que presenta el módem LoRa de largo alcance que proporciona comunicación de espectro ensanchado de ultra largo alcance y alta inmunidad a interferencias mientras minimiza el consumo de corriente. El corazón de Grove - LoRa Radio 433MHz es el ATmega168, un chip ampliamente utilizado con muy alto rendimiento y bajo consumo de energía, especialmente adecuado para este módulo grove.

Ya hemos integrado una antena de alambre simple para recibir señal, si la señal es demasiado débil para recibir, no te preocupes, el conector MHF junto a la antena es para agregar una segunda antena que tiene interfaz MHF para obtener más señal.

Esta es la versión de 433MHz, que puede ser utilizada para comunicación de 433MHz. También puedes encontrar la versión para 868MHz en Grove - LoRa Radio 868MHz.

|Versión|Fecha de Lanzamiento|Cómo Comprar|
|--------|-----------|-----------|
|Grove - LoRa Radio 433 MHz |10 Dic, 2016|[![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Grove-LoRa-Radio-433MHz-p-2777.html)|
|Grove - LoRa Radio 868 MHz |10 Dic, 2016|[![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Grove-LoRa-Radio-868MHz-p-2776.html)|

## Características

---

- Utiliza módulo RFM95 basado en SX1276 LoRa®
- Voltaje de Funcionamiento: 5V/3.3V
- ~28mA(Promedio) @+20dBm transmisión continua
- ~8.4mA(Promedio)@modo standby
- ~20mA(Promedio) @modo recepción, BW-500kHz
- Temperatura de Funcionamiento: -20 – 70℃
- Interfaz: Grove - UART(RX,TX,VCC,GND)
- Antena de alambre simple o Conector MHF para antena externa de alta ganancia
- Frecuencia de Funcionamiento: 868MHz/433MHz
- Capacidad de Salida de Potencia +20dBm 100 mW
- Tamaño: 20*40mm
- Velocidad: 0.3kps~50kps
- Librerías de Arduino listas para usar
- Conector de antena MHF reservado

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Descripción General del Hardware

---

![](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/hardware.png)

1. MCU ATMega168 ([hoja de datos](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/Atmel-2545-8-bit-AVR-Microcontroller-ATmega48-88-168_Datasheet.pdf))
2. Conector MHF
3. Antena de Cable
4. Módulo RFM95 ([hoja de datos](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/RFM95_96_97_98_DataSheet.pdf))
5. Interfaz Grove

|PIN|NOMBRE|FUNCIÓN|
|-------|--------|--------|
|1      |TX |TX de UART|
|2      |RX |RX de UART|
|3      |VCC|Suministro de energía, 3.3V o 5V|
|4      |GND|Conectar Tierra|

## Ideas de Aplicación

---

- Internet de las Cosas
- Hogar Inteligente
- Hub de Sensores
- Comunicación inalámbrica de larga distancia

## Primeros Pasos

Después de esta sección, puedes hacer que **Grove - LoRa Radio** funcione con solo unos pocos pasos.

### Preparativos

Ahora estamos haciendo una demostración para comunicación P2P (punto a punto) con el Grove - Lora Radio 433MHz, el Grove - LoRa Radio 868MHz se usa de la misma manera.

:::tip
    Grove - LoRa Radio 433MHz no puede comunicarse con Grove - LoRa Radio 868MHz.
:::

|Artículo|Cant.|Enlace|
|----|---|----|
|Seeeduino Lotus|2|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)|
|Grove - LoRa Radio 433MHz|2|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/Grove-LoRa-Radio-433MHz-p-2777.html)|
|Cable Micro USB|2|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|

Si es la primera vez que usas [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html), por favor consulta [la wiki de Seeeduino Lotus](https://wiki.seeedstudio.com/es/Seeeduino_Lotus/).

Seeeduino Lotus es completamente compatible con Arduino y funciona tan simple como Arduino.

Si es la primera vez que usas Arduino, por favor dirígete [aquí](https://arduino.cc) para comenzar tu viaje con Arduino.

### Conectando hardware

[Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html) es una combinación de Seeeduino y Base Shield. Podemos conectar el módulo LoRa Radio al socket D5 directamente como muestra la imagen a continuación.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/demo.jpg)

### Descargar Librería

Haz clic para descargar la librería e instalarla ([Cómo instalar una Librería de Arduino](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/))

[![](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/library.png)](https://github.com/Seeed-Studio/Grove_LoRa_433MHz_and_915MHz_RF/archive/master.zip)

:::tip
    La librería soporta dispositivos AVR/SAMD/STM32F4, tanto serial por hardware como por software también.
:::
Hay 2 tipos de puertos seriales. Uno es COMSerial, que significa puerto de comunicación (conectando con Grove-LoRa Radio). El otro es ShowSerial, que significa puerto de visualización de información serial (conectando con PC).

La mayoría de las placas arduino tienen al menos un Serial, algunas tienen múltiples seriales (Arduino Mega tiene 4 Seriales). Se comunica en los pines digitales 0 (RX) y 1 (TX) así como con la computadora vía USB. Así que si conectas un dispositivo UART en el pin D0 y pin D1, tienes que removerlos antes de descargar el programa a través de USB. De lo contrario causará fallas en la carga. A veces necesitas más puertos seriales que el número de puertos seriales por hardware disponibles. Si este es el caso, puedes usar un Serial por Software que usa software para emular el hardware serial. El serial por software requiere mucha ayuda del controlador Arduino para enviar y recibir datos, así que no es tan rápido o eficiente como el serial por hardware. Para más información sobre el Serial, por favor consulta [Seeed Arduino Serial](https://wiki.seeedstudio.com/es/Seeed_Arduino_Serial/).

- **AVR:** Para el ejemplo a continuación, definimos Software Serial como SSCOM (conectando con PC), necesitas un adaptador USB a TTL para conectar con PC. NO todos los pines digitales pueden ser usados para serial por software. Puedes consultar [Software Serial](https://www.arduino.cc/en/Reference/SoftwareSerial) para detalles de pines. Definimos hardware Serial como COMSerial (conectando con Grove-LoRa Radio). Si quieres usar el serial por hardware como COMSerial y serial por software como ShowSerial, puedes definir como **#define ShowSerial Serial** y **#define COMSerial SSerial**. Si usas Arduino Mega, puedes conectar el Serial por hardware a ShowSerial y el otro Serial1/Serial2/Serial3 a COMSerial. Así que puedes consultar la configuración AVR Mega.

- **SAMD:** Para el ejemplo a continuación, el SAMD no soporta serial por software. Usamos el serial por hardware **Serial1** para comunicarnos con Grove-LoRa Radio y **SerialUSB** para imprimir mensajes en PC.

- **STM32F4:** Para el ejemplo a continuación, usamos el serial por hardware **Serial** para comunicarnos con Grove-LoRa Radio y **SerialUSB** para imprimir mensajes en PC.

:::note
    Para más información sobre el Serial, por favor consulta [Seeed Arduino Serial](https://wiki.seeedstudio.com/es/Seeed_Arduino_Serial/).
:::

```
#include <RH_RF95.h>

#################### AVR #######################

#ifdef __AVR__

#include <SoftwareSerial.h>
SoftwareSerial  SSerial(10, 11); // RX, TX

#define COMSerial Serial
#define ShowSerial SSerial 

RH_RF95<HardwareSerial> rf95(COMSerial);

#endif

#################### AVR Mega ###################

#ifdef __AVR__

#define COMSerial Serial1
#define ShowSerial Serial 

RH_RF95<HardwareSerial> rf95(COMSerial);

#endif

#################### SAMD ######################

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE

#define COMSerial Serial1
#define ShowSerial SerialUSB 

RH_RF95<Uart> rf95(COMSerial);

#endif

#################### STM32F4 ###################

#ifdef ARDUINO_ARCH_STM32F4

#define COMSerial Serial
#define ShowSerial SerialUSB 

RH_RF95<HardwareSerial> rf95(COMSerial);

#endif
```

### Abrir el ejemplo

Abre tu Arduino IDE, haz clic en **File > Examples>Grove_LoRa_433MHz_and_915MHz_RF-master** y obtendrás muchos ejemplos para el módulo.

![](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/library_2.png)

|Nodo|Nombre del Ejemplo|Función|
|----|------------------|-------|
|Emisor|rf95_client|Envía "Hello World" cada 1s|
|Receptor|rf95_server|Recibe datos y los imprime|


Haz clic en **Tools>Board** para elegir "Seeeduino Lotus" y selecciona el puerto serie respectivo, luego haz clic en el botón Upload para finalizar los pasos.

:::tip
    Si estás usando el módulo Grove - LoRa Radio 868MHz cambia el siguiente código.
:::

```c
//rf95.setFrequency(434.0);
rf95.setFrequency(868.0);
```

### Resultados de la Revisión

Después de completar la carga, puedes abrir el monitor serie para ver el resultado.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/result.jpg)

### Velocidad de Datos

El siguiente gráfico muestra las relaciones entre la velocidad de banda, el ancho de banda de la señal, el factor de dispersión y la sensibilidad.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/DateRate.png)

# 433MHz

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/433_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# 868MHz

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/868_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- ***Esquemáticos***
  - [Grove - LoRa Radio 433MHz v1.0 Esquemáticos (archivos Eagle)](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/433_eagle.zip)
  - [Grove - LoRa Radio 433MHz v1.0 Esquemáticos (archivos PDF)](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/433_sch.pdf)
  - [Grove - LoRa Radio 868MHz v1.0 Esquemáticos (archivos Eagle)](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/868_eagle.zip)
  - [Grove - LoRa Radio 868MHz v1.0 Esquemáticos (archivos PDF)](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/868_sch.pdf)

- ***Hoja de Datos***
  - [Hoja de Datos RFM95/96/97](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/RFM95_96_97_98_DataSheet.pdf)
  - [Hoja de Datos Atmega168](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/Atmel-2545-8-bit-AVR-Microcontroller-ATmega48-88-168_Datasheet.pdf)

- ***Referencias***
  - [LoRa Alliance](https://www.lora-alliance.org/)

- ***Biblioteca***
  - [Biblioteca y Ejemplos de Grove - LoRa Radio](https://github.com/Seeed-Studio/Grove_LoRa_433MHz_and_915MHz_RF/)
  - [Biblioteca LMIC](https://github.com/matthijskooijman/arduino-lmic)

- [***Descargar TODO lo Anterior***](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/res.zip)

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
