---
description: Primeros pasos con Seeed Studio XIAO SAMD21
title: Primeros pasos con Seeed Studio XIAO SAMD21
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino-XIAO
sku: 110010004, 102010388, 102010328
last_update:
  date: 6/30/2026
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-06-30'
url: https://wiki.seeedstudio.com/es/Seeeduino-XIAO/
---
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Primeros pasos con Seeed Studio XIAO SAMD21

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" alt="pir" width={600} height="auto" /></p>

El Seeed Studio XIAO SAMD21, que solía llamarse Seeeduino XIAO, es la primera aparición de la [familia Seeed Studio XIAO, una serie de potentes placas de desarrollo del tamaño de un pulgar compatibles con Arduino](https://www.seeedstudio.com/xiao-series-page). Incorpora el potente ATSAMD21G18A-MU, que es un microcontrolador de bajo consumo. Por otro lado, esta pequeña placa tiene un buen rendimiento de procesamiento pero necesita menos energía. Está diseñada en un tamaño diminuto y puede utilizarse para dispositivos wearables y proyectos pequeños.

Seeed Studio XIAO SAMD21 tiene 14 pines, que pueden utilizarse como 11 interfaces digitales, 11 interfaces analógicas, 10 interfaces PWM (d1-d10), 1 pin de salida DAC D0, 1 interfaz de pad SWD, 1 interfaz I2C, 1 interfaz SPI, 1 interfaz UART, indicador de comunicación serie (T/R), luz de parpadeo (L) mediante multiplexación de pines. Los colores de los LED (Power, L, RX, TX) son verde, amarillo, azul y azul. Además, Seeed Studio XIAO SAMD21 tiene una interfaz Type-C que puede suministrar energía y descargar código. Hay dos botones de reinicio, puedes cortocircuitarlos para reiniciar la placa.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Documentación

Hay dos documentos sobre el uso de **Seeed Studio XIAO SAMD21** que se centran en diferentes áreas, consulta la siguiente tabla como referencia:

|[**Documentación de Seeed**](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/)|[**Documentación de Nanase**](https://wiki.seeedstudio.com/es/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|Diagrama de pines|Interfaz|
|Primeros pasos con Seeed Studio XIAO SAMD21|Seeed Studio XIAO SAMD21 con tarjeta MicroSD (SPI)|
|Uso de GPIO en Seeed Studio XIAO SAMD21|Seeed Studio XIAO SAMD21 con GPS (UART)|
|Recursos de Seeed Studio XIAO SAMD21|IOBUS de ciclo único|

### CircuitPython en Seeed Studio XIAO SAMD21

- Comienza con [**CircuitPython en Seeed Studio XIAO SAMD21 **](https://wiki.seeedstudio.com/es/Seeeduino-XIAO-CircuitPython).

## Características

- Potente CPU: microcontrolador ARM® Cortex®-M0+ de 32 bits a 48 MHz (SAMD21G18) con 256KB de Flash y 32KB de SRAM.
- Compatibilidad flexible: compatible con Arduino IDE.
- Operación sencilla de proyectos: compatible con protoboard.
- Tamaño pequeño: tan pequeño como un pulgar (21x17.8mm) para dispositivos wearables y proyectos pequeños.
- Múltiples interfaces de desarrollo: 11 pines digitales/analógicos, 10 pines PWM, 1 salida DAC, 1 interfaz de pad SWD, 1 interfaz I2C, 1 interfaz UART, 1 interfaz SPI.

## Especificaciones

| Nombre del producto | Seeed Studio XIAO SAMD21 |
|-------------|-------------------------|
| **Chipset** | [Microchip SAMD21G18](https://www.microchip.com/en-us/product/atsamd21g18 ) |
| **Procesador** | Procesador ARM Cortex-M0+ funcionando hasta 48 MHz |
| **RAM** | 32KB SRAM |
| **Flash** | 256KB Flash |
| **Interfaz** | Pin GPIO x14<br/>Pin digital x11<br/>Pin analógico x11<br/>DAC x1<br/>I2C x1<br/>UART x1<br/>SPI x1 |
| **Integrado en placa** | LED de usuario x1<br/>LED de encendido x1<br/>LED de estado para comunicación serie (indicadores TX/RX) x2 |
| **Conectividad inalámbrica** | / |
| **Alimentación** | Tensión de entrada (Type-C): 5V<br/>Tensión de entrada (BAT): 5V |
| **Salida máxima** | 5V@500mA<br/>3.3V@200mA |
| **Compatibilidad de software** | Arduino, PlatformIO, MicroPython, CircuitPython, Zephyr<br/>[Exposición para la Serie XIAO - Seeed Studio Wiki](https://wiki.seeedstudio.com/es/xiao_topic_page/ ) |
| **Temperatura de trabajo** | -40 a 85°C |
| **Dimensiones** | 21×17.8mm |
| **Variantes** | [Seeed Studio XIAO SAMD21 (pre-soldado) - Seeed Studio](https://www.seeedstudio.com/Seeeduino-XIAO-Pre-Soldered-p-4747.html  )<br/>[Seeed Studio XIAO SAMD21 - Microcontrolador Arduino - SAMD21 Cortex M0+ (3 PCs） - Seeed Studio](https://www.seeedstudio.com/Seeeduino-XIAO-3Pcs-p-4546.html  ) |

## **Descripción general del hardware**

### Parte frontal

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_SAMD21_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Parte trasera

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_SAMD21_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

:::caution
Para los pines de E/S generales:
El voltaje de trabajo del MCU es de 3.3V. Un voltaje de entrada conectado a los pines de E/S generales puede causar daños al chip si es superior a 3.3V.

Para los pines de alimentación:
El circuito convertidor DC-DC integrado capaz de convertir un voltaje de 5V en 3.3V permite alimentar el dispositivo con una fuente de 5V a través de VIN-PIN y 5V-PIN.

Es fundamental entender que las almohadillas VIN y GND en la parte posterior del XIAO SAMD21 no están diseñadas para conectar directamente una batería, especialmente no una batería recargable de litio (LiPo/Li-Ion). La placa carece del circuito esencial de gestión de batería necesario para un funcionamiento seguro. Estas almohadillas son simplemente un punto de entrada de alimentación alternativo que evita el diodo de protección integrado de la placa. Si deseas alimentar tu proyecto con una batería, debes utilizar un módulo externo de gestión de batería dedicado que proporcione carga y protección, y luego conectar la salida regulada de ese módulo al pin de 5V del XIAO.

Por favor, presta atención al uso, no levantes la cubierta de protección.
:::

## Mapa de pines

| Pin XIAO        | Función      | Pin del chip  |   Descripción      |
| :-------:      | :-----:        | :----------:         |       :---:     |
|5V              |VBUS             |                                      | Entrada/Salida de alimentación     |
| GND           |                 |                                      |                          |
| 3V3           |   3V3_OUT              |                                |    Salida de alimentación           |
|D0             |  Analógico         |   PA02                                |     GPIO, ADC            |
| D1            |   Analógico        |   PA04                                |        GPIO, ADC         |
| D2            |     Analógico      | PA10                                  |    GPIO, ADC             |
| D3            |    Analógico       |  PA11                                 |     GPIO, ADC            |
| D4            |  Analógico,SDA   	| PA08		                              | GPIO, datos I2C, ADC        |
| D5            |  Analógico,SCL     |	PA09	                                |	GPIO, reloj I2C, ADC       |
| D6            | Analógico,TX       |  	PB08	                               |	GPIO, transmisión UART, ADC |  
| D7            |Analógico,RX	      |  PB09	                                |   	GPIO, recepción UART, ADC |
|D8             | Analógico,SPI_SCK  | 	PA07	                              |	GPIO, reloj SPI, ADC   |
|D9             | Analógico,SPI_MISO |  	PA05                                |		GPIO, datos SPI, ADC  |
|D10            | Analógico,SPI_MOSI |  PA06	                                | 	GPIO, datos SPI         |
|Reset          |                 |  RES	                                |	RESET                  |
|TX_LED         |                 |   PA19	                              |	TX_LED                 |
|RX_LED         |                 | PA18	                                |	RX_LED                 |
|Power_LED     |          |        VBUS	                                |       	CHG-LED_Red      |
|USER_LED       |                 |   PA17	                              |	Luz de usuario_Amarillo      |

### Entrar en modo Bootloader

A veces el puerto de Seeed Studio XIAO SAMD21 puede desaparecer cuando falla el proceso de programación del usuario. Podemos resolver este problema mediante la siguiente operación:

- Conecta el Seeed Studio XIAO SAMD21 a tu ordenador.
- Utiliza pinzas o cables cortos para cortocircuitar los pines RST del diagrama dos veces.
- Los LED naranjas parpadearán y se encenderán.

En este punto, el chip entra en modo Bootloader y el puerto de grabación vuelve a aparecer. Debido a que el chip samd21 tiene dos particiones, una es el Bootloader y la otra es el programa de usuario. El producto grabará un código de bootloader en la memoria del sistema cuando salga de fábrica. Podemos cambiar de modo realizando los pasos anteriores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

### Reinicio

Si quieres reiniciar el Seeed Studio XIAO SAMD21, realiza los siguientes pasos:

- Conecta el Seeed Studio XIAO SAMD21 a tu ordenador.
- Utiliza pinzas o cables cortos para cortocircuitar los pines RST **solo una vez**
- Los LED naranjas parpadearán y se encenderán.

Ten en cuenta: El comportamiento del LED integrado es el inverso al de un Arduino. En el Seeed Studio XIAO SAMD21, el pin tiene que ponerse en nivel bajo, mientras que en otros microcontroladores tiene que ponerse en nivel alto.  

### Interrupción

Todos los pines de Seeed Studio XIAO SAMD21 admiten interrupciones, pero hay dos pines que no pueden utilizarse al mismo tiempo: el pin 5 y el pin 7. Para más detalles sobre las interrupciones, consulta [aquí](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/master/variants/XIAO_m0/variant.cpp).

### Multiplexación de pines

No necesitamos configurar los pines nosotros mismos, después de usar los pines, puedes llamar directamente a una función.

#### Entrada y salida digital

- Utiliza el pin 6 como pin digital:

```c
const int buttonPin = 6;     // the number of the pushbutton pin
const int ledPin =  13;      // the number of the LED pin

int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED on:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED off:
    digitalWrite(ledPin, LOW);
  }
}
```

#### AnalogRead

- Usa el pin 6 como pin analógico:

```c


void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // read the value from the sensor:
  sensorValue = analogRead(sensorPin);
  // turn the ledPin on
  digitalWrite(ledPin, HIGH);
  // stop the program for <sensorValue> milliseconds:
  delay(sensorValue);
  // turn the ledPin off:
  digitalWrite(ledPin, LOW);
  // stop the program for for <sensorValue> milliseconds:
  delay(sensorValue);
}
```

#### Serial

- Usa el pin 6 como pin TX de UART (el pin RX de UART es el pin 7):

```c

void setup() {
    Serial1.begin(115200);
    while (!Serial);
}

void loop() {
    Serial1.println("Hello,World");
    delay(1000);
}
```

#### I2C

- Usa el pin 5 como pin SCL de IIC (el pin SDA de IIC es el pin 4):

```c
// Wire Master Writer
// by Nicholas Zambetti <http://www.zambetti.com>

// Demonstrates use of the Wire library
// Writes data to an I2C/TWI slave device
// Refer to the "Wire Slave Receiver" example for use with this

// Created 29 March 2006

// This example code is in the public domain.


#include <Wire.h>

void setup()
{
  Wire.begin(); // join i2c bus (address optional for master)
}

byte x = 0;

void loop()
{
  Wire.beginTransmission(4); // transmit to device #4
  Wire.write("x is ");        // sends five bytes
  Wire.write(x);              // sends one byte  
  Wire.endTransmission();    // stop transmitting
  x++;
  delay(500);
}
```

#### SPI

- Usa el pin 8 como pin SCK de SPI (el pin MISO de SPI es el pin 9, el pin MOSI de SPI es el pin 10):

```c
#include <SPI.h>
const int CS = 7;
void setup (void) {
   digitalWrite(CS, HIGH); // disable Slave Select
   SPI.begin ();
   SPI.setClockDivider(SPI_CLOCK_DIV8);//divide the clock by 8
}

void loop (void) {
   char c;
   digitalWrite(CS, LOW); // enable Slave Select
   // send test string
   for (const char * p = "Hello, world!\r" ; c = *p; p++) {
      SPI.transfer (c);
   }
   digitalWrite(CS, HIGH); // disable Slave Select
   delay(2000);
}
```

#### QTouch

Para saber cómo usar QTouch, proporcionamos un proyecto de ejemplo: [How to Make a Fruit Piano on Seeed Studio XIAO SAMD21 ’s Q-Touch Function](https://www.seeedstudio.com/blog/2020/07/20/how-to-make-a-fruit-piano-on-seeeduino-xiaos-q-touch-function-m/).

#### Entrada y salida analógica

Aunque todavía tiene "salidas analógicas" basadas en PWM, el SAMD21 también incorpora una salida analógica real en forma de un convertidor digital‑analógico (DAC). Este módulo puede producir una tensión analógica entre 0 y 3,3 V. Se puede utilizar para producir audio con un sonido más natural, o como una especie de "potenciómetro digital" para controlar dispositivos analógicos.

El DAC solo está disponible en el pin Arduino A0 y se controla usando analogWrite(A0, `<value>`). El DAC se puede configurar hasta una resolución de 10 bits (asegúrate de llamar a [**analogWriteResolution(10)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogwriteresolution/) en tu configuración), lo que significa que los valores entre 0 y 1023 ajustarán la tensión a algún punto entre 0 y 3,3 V.

Además del DAC, los canales ADC del SAMD21 también se diferencian de los del ATmega328: están equipados con hasta 12 bits de resolución. Eso significa que los valores de entrada analógica pueden ir de 0 a 4095, representando una tensión entre 0 y 3,3 V. Para usar los ADC en modo de 12 bits, asegúrate de llamar a [**analogReadResolution(12)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogreadresolution/) en tu configuración.

**Trazado serie del DAC**

Aquí hay un ejemplo que demuestra tanto el DAC como el ADC. Para montar el experimento, conecta A0 a A1: aplicaremos una tensión analógica a A0 y luego la leeremos con A1. Es el circuito más sencillo que hemos puesto nunca en un tutorial:

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/AO_A1.jpg" /></div>

:::note
El Seeed Studio XIAO SAMD21 utiliza la [**placa de expansión Seeed Studio XIAO SAMD21**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)
:::

Este sketch produce una onda sinusoidal en la salida A0, con valores que van de 0 a 3,3 V. Luego usa A1 para leer esa salida en su ADC y convertirla en una tensión entre 0 y 3,3 V.

Por supuesto, puedes abrir el monitor serie para ver el flujo de valores de tensión. Pero si la onda sinusoidal es difícil de visualizar en forma de texto, prueba el nuevo Serial Plotter de Arduino, yendo a Tools > Serial Plotter.  

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Serial%20poltting.png" /></div>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_DAC_wave.gif" /></div>

Gracias a [Aleksei Tertychnyi](https://github.com/WeSpeakEnglish) por enviar el código; todas las funcionalidades relacionadas fueron desarrolladas y aportadas por él.

```cpp
#define DAC_PIN A0 // Make code a bit more legible
float x = 0; // Value to take the sin of
float increment = 0.02;  // Value to increment x by each time
// Frequency of sine wave is about 1.37 Hz

void setup() 
{
  analogWriteResolution(10); // Set analog out resolution to max, 10-bits
  analogReadResolution(12); // Set analog input resolution to max, 12-bits

  Serial.begin(9600);
}

void loop() 
{
  // Generate a voltage value between 0 and 1023. 
  // Let's scale a sin wave between those values:
  // Offset by 511.5, then multiply sin by 511.5.
  int dacVoltage = (int)(511.5 + 511.5 * sin(x));
  x += increment; // Increase value of x

  // Generate a voltage between 0 and 3.3V.
  // 0= 0V, 1023=3.3V, 512=1.65V, etc.
  analogWrite(DAC_PIN, dacVoltage);

  // Now read A1 (connected to A0), and convert that
  // 12-bit ADC value to a voltage between 0 and 3.3.
  float voltage = analogRead(A1) * 3.3 / 4096.0;
  Serial.println(voltage); // Print the voltage.
  delay(1); // Delay 1ms
}
```

**Resultado**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/THonny_DAC.jpg" alt="pir" width={600} height="auto" /></p>

## Primeros pasos

### Hardware

**Materiales necesarios**

- Seeed Studio XIAO SAMD21 x1
- Ordenador x1
- Cable USB tipo C x1

:::tip

Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes consultar [seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).
:::

- Paso 1. Prepara un Seeed Studio XIAO SAMD21 y un cable Type‑C.

- Paso 2. Conecta el Seeed Studio XIAO SAMD21 a tu ordenador. Entonces el LED de alimentación amarillo debería encenderse.

### Software

:::note

Si es la primera vez que usas Arduino, te recomendamos encarecidamente que consultes [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino)
:::

- **Paso 1. Necesitas instalar el software de Arduino.**

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

**Inicia la aplicación Arduino**

Haz doble clic en la aplicación Arduino (arduino.exe) que has descargado previamente.

:::note

Si el software de Arduino se carga en un idioma diferente, puedes cambiarlo en el cuadro de diálogo de preferencias. Consulta la página [Arduino Software (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para más detalles.
:::

- **Paso 2. Abre el ejemplo Blink**  

Abre el sketch de ejemplo de parpadeo del LED: **File > Examples >01.Basics > Blink**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3. Añade Seeeduino a tu Arduino IDE**

Haz clic en **File > Preference** y rellena Additional Boards Manager URLs con la siguiente URL:

*https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json*

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width={600} height="auto" /></p>

Haz clic en **Tools-> Board-> Boards Manager...**, escribe la palabra clave "**Seeed Studio XIAO SAMD21**" en el cuadro de búsqueda. Aparecerá "Seeed SAMD Boards". Instálalo.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png" alt="pir" width={600} height="auto" /></p>

- **Paso 4. Selecciona tu placa y tu puerto**

Después de instalar la placa, haz clic en **Tools-> Board**, busca "**Seeed Studio XIAO**" y selecciónala. Ahora ya has configurado la placa Seeed Studio XIAO SAMD21 para Arduino IDE.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/1.jpg" alt="pir" width={600} height="auto" /></p>

Selecciona el dispositivo serie de la placa Arduino en el menú Tools | Serial Port. Probablemente será COM3 o superior (**COM1** y **COM2** suelen estar reservados para los puertos serie de hardware). Para averiguarlo, puedes desconectar tu placa Arduino y volver a abrir el menú; la entrada que desaparezca debería ser la placa Arduino. Vuelve a conectar la placa y selecciona ese puerto serie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/2.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 5. Sube el programa**  

Ahora, simplemente haz clic en el botón "Upload" en el entorno. Espera unos segundos y, si la carga se realiza correctamente, aparecerá el mensaje "Done uploading." en la barra de estado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={800} height="auto" /></p>

 Unos segundos después de que termine la carga, deberías ver que el LED del pin 13 (L) de la placa empieza a parpadear (en naranja). Si es así, ¡enhorabuena! Has puesto Arduino en marcha. Si tienes problemas, consulta las sugerencias de resolución de problemas.

:::note
el tamaño máximo de la memoria flash es de 8KB, para más información consulta la hoja de datos ATSAMD218A-MU en recursos
:::

## La aplicación de ejemplo

- [Cómo usar Seeed Studio XIAO SAMD21 para iniciar sesión en tu Raspberry PI](https://wiki.seeedstudio.com/es/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI)

- [Interfaz de comunicación SPI](https://wiki.seeedstudio.com/es/XIAO-SPI-Communication-Interface)

- [Cómo desbrickear un XIAO muerto usando Raspberry Pi](https://forum.seeedstudio.com/t/how-to-unbrick-a-dead-xiao-using-raspberry-pi-guide-openocd/253990). Gracias a John_Doe por compartirlo.

## Recursos

**Diseño de hardware**
- **📄[Hoja de datos]** [Hoja de datos Atmel SAMD21G18](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)
- **📄[Esquemático]** [Esquemático XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0-SCH-191112.pdf)
- **🗃️[Archivos de diseño de PCB]** 
  - [Proyecto KiCad de XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO_SAMD21_v2.1_SCH&PCB_20260304.zip)  
  - [Proyecto Eagle de XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)
- **🗃️[Librerías de diseño de PCB]** 
  - [Huella de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Hoja de distribución de pines]** [Hoja de distribución de pines XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-pinout_sheet.xlsx )

**Diseño mecánico**
- **📄[Dimensiones 2D]** [Dimensiones de XIAO en DXF](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar )
- **📄[Modelo 3D]** [Modelo 3D de XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip )

**Software y herramientas**
- **📄[Firmware de fábrica]** [Firmware de fábrica de XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_final_firmware.zip )

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Recursos del curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Gran potencia, placa pequeña Dominando Arduino y TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
