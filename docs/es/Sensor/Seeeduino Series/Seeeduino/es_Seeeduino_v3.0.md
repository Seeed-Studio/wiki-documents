---
description: Seeeduino v3.0
title: Seeeduino v3.0
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino_v3.0
last_update:
  date: 1/11/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/img/Seeeduino_v3.0_top.jpg)

## Descripción general ##

El Seeeduino v3 es una placa microcontroladora basada en el ATmega328, y es una placa compatible con Arduino. Tiene un chip controlador FTDI USB-a-serie que puede considerarse como un puente, permitiendo que tu computadora se comunique con la placa. Tiene 14 pines digitales (que incluyen 6 pines PWM y puerto UART) y 8 pines analógicos, un resonador cerámico de 16 MHz, una conexión USB, un botón de reinicio, un encabezado ICSP y un conector de alimentación DC. Tiene dos interruptores de palanca, uno para cambio de voltaje de entrada del ATmega328, el otro es para habilitar/deshabilitar el pin DTR, que puedes usar la función FTDI sola sin la influencia del ATmega328. También tiene dos conectores blancos Grove, y hace conveniente usar productos Grove con la placa.

## Especificaciones ##

|Elemento|Valor|
|---|---|
| Microcontrolador|Atmel ATmega328 (AVR 8-bit) en paquete TQFP-32  |
|  Placa (Cargador de arranque)|Arduino Duemilanove w/Atmega328 |
| Voltaje de Operación|5V o 3.3V (selección por interruptor deslizante)  |  
|  Corriente máxima de salida del puerto 3V3 y puerto 5V|Puerto 5V - 500mA, puerto 3V3 - 800mA(necesita ser alimentado por conector DC o Vin) |
| Corriente máxima de salida de pines digitales|40mA  |
|  Voltaje de Entrada miniUSB|5V.  Máximo es 5.5V. |
|  Voltaje de Entrada Conector DC y Vin|7V a 12V (menor es preferible).  Máximo es 20V.  Si la entrada es menor a 7V y el interruptor está en 5V, entonces VCC en AVR es aproximadamente 2V por debajo de la entrada. |
|Pines E/S Digitales|14 (de los cuales 6 proporcionan salida PWM)   |
|  Pines de Entrada Analógica|8 (de los cuales 2 se usan para comunicación I2C - PC4 y PC5) |
|  Memoria Flash|32 KB  |
|  SRAM|2 KB |
|  EEPROM|1 KB     |
|  Velocidad de Reloj|16 MHz     |

## Uso ##

### USB-a-Serie ###

El Seeeduino tiene un chip controlador FTDI USB-a-serie integrado - FT232R que está programado como un convertidor USB-a-serie.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/img/Seeeduino_FTDI.png)

Diez pines del FT232R han sido señalados, está al lado del puerto ICSP, lo que hace conveniente para ti usar esos pines si es necesario.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/img/Seeeduino_FTDI_pinout.png)

Hay un interruptor de palanca "M_RST_AUTO" integrado. Esto determina si la señal DTR del host está permitida para reiniciar el microcontrolador ATmega328.

Configurar a "AUTO" para modo Automático, que permite al host reiniciar el microcontrolador usando la señal DTR para reiniciar automáticamente el microcontrolador. Nota: Esta posición es requerida durante el desarrollo, por lo tanto será la posición predeterminada para la mayoría de las personas.

Configurar a "M" para modo Manual, que deshabilita la señal DTR del host, requiriendo así que el usuario presione físicamente el botón RESET para reiniciar el microcontrolador. Además, es necesario configurarlo en modo "M" si quieres usar el FT232R solo.

Más información sobre el chip FTDI, puedes referirte a la [página principal de FTDI](https://www.ftdichip.com/index.html)

### Breakout ###

El Seeeduino es una placa principal basada en ATmega328, y todos los pines útiles están señalados. Hay pines de alimentación, 14 pines IO digitales y 8 pines analógicos en el Seeeduino, mientras tanto, seis de los pines IO digitales pueden ser usados como salidas PWM. Todos los pines del Seeeduino están conectados a conectores espaciados a 2.54mm.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/img/Seeeduino_pinout.png)

Cada uno de los 14 pines digitales en la placa puede ser usado como entrada o salida, usando las funciones [pinMode()](https://arduino.cc/en/Reference/PinMode)[digitalWrite()](https://arduino.cc/en/Reference/DigitalWrite)[digitalRead()](https://arduino.cc/en/Reference/DigitalRead). Operan a 5 voltios o 3.3 voltios mientras se gira el interruptor de palanca "3V3_VCC_5V" a dos posiciones diferentes. Y cada pin puede proporcionar o recibir un máximo de 40 mA. Y una librería [SoftwareSerial](https://arduino.cc/en/Reference/SoftwareSerial) permite comunicación serie en cualquiera de los pines digitales.

#### UART: D0 (RX) y D1 (TX) ####

Puede ser usado para recibir y transmitir datos serie TTL. Estos dos pines han sido conectados al chip FTDI, lo que hace una comunicación directa entre tu computadora y dispositivos periféricos.

#### Interrupciones Externas: D2 y D3 ####

Los dos pines son las interrupciones externas del ATmega328, puede ser configurado para disparar una interrupción en un valor bajo, un flanco ascendente o descendente, o un cambio en el valor. Más información referirse a la [función attachInterrupt()](https://arduino.cc/en/Reference/AttachInterrupt).

#### PWM: D3, D5, D6, D9, D10, D11 ####

Modulación por Ancho de Pulso, es una técnica para obtener resultados analógicos con medios digitales. Puede ser generado usando analogWrite(), con una salida de una serie de señales de pulso HIGH y LOW repetidas. La frecuencia PWM del Seeeduino es aproximadamente 500Hz, y Proporciona salida PWM de 8 bits con la función [analogWrite()](https://arduino.cc/en/Reference/AnalogWrite). Más información por favor referirse a [PWM](https://arduino.cc/en/Reference/AnalogWrite)

#### SPI: D10 (SS), D11 (MOSI), D12 (MISO), D13 (SCK) ####

Estos pines soportan comunicación SPI usando la [librería SPI](https://arduino.cc/en/Reference/SPI).

##### Diagrama SPI #####

| MISO (D12)|VCC  |
|---|---|
| SCK(D13)|MOSI(D11)  |
|  Reset|GND |

#### Indicador "L" ####

Hay un led "L" en la placa, y está conectado a D13, puedes controlar este led a través de D13.

Hay ocho pines analógicos en el encabezado analógico, etiquetados de A0 a A7. Cada pin puede proporcionar 10 bits de resolución. Esto significa que una entrada analógica entre 0V y 5V (0V a 3.3V) puede ser mapeada de 0 a 1024 (0 a 675). Puedes usar analogRead() para obtener el valor de una entrada analógica.

#### I2C: A4 (SDA) & A5 (SCL) ####

Seeeduino puede generar un reloj de bus para controlar su dispositivo I2C esclavo con una dirección específica. Grove I2C también se conecta a A4 & A5.

Hay un botón de reset en la placa, que está conectado al pin de RST. Presiona el botón y este pin será llevado a bajo, entonces el ATmega328 se reiniciará.

### Alimentación ###

El Seeeduino puede ser alimentado a través de USB o conector DC Jack (Vin). Si usas USB para alimentarlo, el voltaje de entrada debe ser regulado a 5VDC, como una computadora o un adaptador de pared USB. Por otro lado, cuando eliges DC Jack, que debe ser un conector de 2.1mm centro-positivo con orificio exterior de 5.5mm. La entrada de alimentación DC debe ser 7-20V, sin embargo, como resultado del sobrecalentamiento por un voltaje de entrada más alto, se recomienda 7-12V. Hay un regulador de voltaje en la placa, por lo que puede convertir 5v a 3.3v. Al girar el interruptor de palanca "3V3_VCC_5V" a la posición 3V3, el voltaje de entrada del ATmega328 será cambiado a 3.3v, mientras tanto, la placa operará a 3.3 voltios.

### Conectores Grove ###

El Seeeduino tiene dos conectores Grove blancos, uno es puerto IIC y el otro es puerto UART. Estos dos puertos están señalados desde el ATmega328, está diseñado para conectar productos Grove a la placa más convenientemente.

### Indicadores en la placa ###

Hay algunos indicadores en la placa, que pueden mostrar algunos estados.

|  Etiqueta | Conexión|
|---|---|
|  LED de usuario con etiqueta "L" |   Está conectado al pin ATmega328P PB5/SCK (pin 13 del encabezado digital).   |
| LED de Reset con etiqueta "RST"  | Está conectado al pin ATmega328P PC6/RESET. Se enciende cuando Reset está en bajo.  |
|LED de alimentación con etiqueta "PWR"|Está conectado al pin ATmega328P VCC.|
|LED de transmisión con etiqueta "TX"|Está conectado al pin FT232RL CBUS1.|
|LED de recepción con etiqueta "RX"|Está conectado al pin FT232RL CBUS0.|

## Lectura Relacionada ##

- [Cómo usar Seeeduino](https://seeeddoc.github.io/How_to_use_Seeeduino/)
- [Rastreador de Versiones](https://seeeddoc.github.io/Seeeduino/)

## Licencias ##

Esta documentación está licenciada bajo Creative Commons [Licencia Attribution-ShareAlike 3.0](http://creativecommons.org/licenses/by-sa/3.0/) El código fuente y las librerías están licenciados bajo [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), consulta los archivos de código fuente para más detalles.

## Visor de Esquemáticos en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/SeeeduinoV3.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Fuente]**[Archivos fuente de Seeeduino v3.0](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/SeeeduinoV3.0_Source_File.zip)
- **[PDF]**[PCB de Seeeduino v3.0](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/Seeeduino%20v3.0%20PCB.pdf)
- **[PDF]**[Esquemático de Seeeduino v3.0](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/Seeeduino_v3.0%20SCH.pdf)
- **[PDF]**[Esquemático en pdf](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/Seeeduino_v3.0.pdf)

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
