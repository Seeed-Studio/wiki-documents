---
description: Introducción a Seeed Studio XIAO SAMD21
title: Introducción a Seeed Studio XIAO SAMD21
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino-XIAO
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Introducción a Seeed Studio XIAO SAMD21

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" alt="pir" width={600} height="auto" /></p>

El Seeed Studio XIAO SAMD21, que anteriormente se llamaba Seeeduino XIAO, es el primer debut de la [familia Seeed Studio XIAO, una serie de potentes placas de desarrollo del tamaño de un pulgar compatibles con Arduino](https://www.seeedstudio.com/xiao-series-page). Lleva el potente ATSAMD21G18A-MU que es un microcontrolador de bajo consumo. Por otro lado, esta pequeña placa tiene un buen rendimiento en procesamiento pero necesita menos energía. Está diseñada en un tamaño diminuto y puede ser utilizada para dispositivos portátiles y proyectos pequeños.

Seeed Studio XIAO SAMD21 tiene 14 pines, que pueden ser utilizados para 11 interfaces digitales, 11 interfaces analógicas, 10 interfaces PWM (d1-d10), 1 pin de salida DAC D0, 1 interfaz de pad SWD, 1 interfaz I2C, 1 interfaz SPI, 1 interfaz UART, indicador de comunicación serie (T/R), luz de parpadeo (L) a través de multiplexación de pines. Los colores de los LEDs (Power, L, RX, TX) son verde, amarillo, azul y azul. Además, Seeed Studio XIAO SAMD21 tiene una interfaz Type-C que puede suministrar energía y descargar código. Hay dos botones de reset, puedes conectarlos en corto para resetear la placa.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## **Documentación**

Hay dos documentos sobre el uso del **Seeed Studio XIAO SAMD21** que se enfocan en diferentes áreas, consulta la tabla a continuación para referencia:

|[**Documentación por Seeed**](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/)|[**Documentación por Nanase**](https://wiki.seeedstudio.com/es/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|Diagrama de Pines|Interfaz|
|Introducción a Seeed Studio XIAO SAMD21|Seeed Studio XIAO SAMD21 con Tarjeta MicroSD (SPI)|
|Uso de GPIO de Seeed Studio XIAO SAMD21|Seeed Studio XIAO SAMD21 con GPS (UART)|
|Recursos de Seeed Studio XIAO SAMD21|IOBUS de Ciclo Único|

### **CircuitPython en Seeed Studio XIAO SAMD21**

- Comienza con [**CircuitPython en Seeed Studio XIAO SAMD21 **](https://wiki.seeedstudio.com/es/Seeeduino-XIAO-CircuitPython).

## **Características**

- CPU potente: Microcontrolador ARM® Cortex®-M0+ de 32 bits a 48MHz (SAMD21G18) con 256KB Flash, 32KB SRAM.
- Compatibilidad flexible: Compatible con Arduino IDE.
- Operación de proyecto fácil: Compatible con protoboard.
- Tamaño pequeño: Tan pequeño como un pulgar (21x17.8mm) para dispositivos portátiles y proyectos pequeños.
- Múltiples interfaces de desarrollo: 11 pines digitales/analógicos, 10 pines PWM, 1 salida DAC, 1 interfaz de pad de enlace SWD, 1 interfaz I2C, 1 interfaz UART, 1 interfaz SPI.

## **Especificaciones**

|Elemento|Valor|
|---|---|
|CPU|CPU ARM Cortex-M0+ (SAMD21G18) funcionando hasta 48MHz|
|Memoria Flash|256KB|
|SRAM|32KB|
|Pines de E/S Digitales|11|
|Pines de E/S Analógicos|11|
|Interfaz I2C|1|
|Interfaz SPI|1|
|QTouch|7 (A0,A1,A6,A7,A8,A9,A10)|
|Interfaz UART|1|
|Interfaz de suministro de energía y descarga| Type-C|
|Energía|3.3V/5V DC|
|Dimensiones|21×17.8×3.5mm|

## **Descripción General del Hardware**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https:///files.seeedstudio.com/wiki/Seeeduino-XIAO/img/new1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino%20XIAO%20pinout%202.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/regulator_to_3.3v.png" alt="pir" width={600} height="auto" /></p>

:::caution
Para pines de E/S generales:
El voltaje de trabajo del MCU es 3.3V. La entrada de voltaje conectada a los pines de E/S generales puede causar daño al chip si es superior a 3.3V.

Para pines de suministro de energía:
El circuito convertidor DC-DC integrado capaz de cambiar el voltaje de 5V a 3.3V permite alimentar el dispositivo con un suministro de 5V a través del PIN-VIN y PIN-5V.

Es crítico entender que los pads VIN y GND en la parte posterior del XIAO SAMD21 no están diseñados para conectar directamente una batería, especialmente no una batería de litio recargable (LiPo/Li-Ion). La placa carece de los circuitos esenciales de gestión de batería requeridos para una operación segura. Estos pads son simplemente un punto de entrada de energía alternativo que evita el diodo de protección integrado de la placa. Si deseas alimentar tu proyecto con una batería, debes usar un módulo externo dedicado de gestión de batería que proporcione carga y protección, y luego conectar la salida regulada de ese módulo al pin 5V o 3V3 del XIAO.

Por favor presta atención al uso, no levantes la cubierta del blindaje.
:::

### **Entrar al Modo Bootloader**

A veces el puerto del Seeed Studio XIAO SAMD21 puede desaparecer cuando el proceso de programación del usuario falla. Podemos resolver este problema con la siguiente operación:

- Conecta el Seeed Studio XIAO SAMD21 a tu computadora.
- Usa pinzas o líneas cortas para hacer un cortocircuito en los pines RST del diagrama dos veces.
- Las luces LED naranjas parpadean y se encienden.

En este punto, el chip entra al modo Bootloader y el puerto de grabación aparece nuevamente. Debido a que el chip samd21 tiene dos particiones, una es el Bootloader y la otra es el programa del usuario. El producto grabará un código bootloader en la memoria del sistema cuando salga de fábrica. Podemos cambiar de modo realizando los pasos anteriores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

### **Reset**

Si quieres resetear el Seeed Studio XIAO SAMD21, realiza los siguientes pasos:

- Conecta el Seeed Studio XIAO SAMD21 a tu computadora.
- Usa pinzas o líneas cortas para hacer un cortocircuito en los pines RST **solo una vez**
- Las luces LED naranjas parpadean y se encienden.

Por favor nota: El comportamiento del LED integrado es inverso al de un Arduino. En el Seeed Studio XIAO SAMD21, el pin tiene que ser puesto en bajo, mientras que en otros microcontroladores tiene que ser puesto en alto.

### **Interrupción**

Todos los pines en Seeed Studio XIAO SAMD21 soportan interrupciones, pero dos pines no pueden ser usados al mismo tiempo: pin 5 y pin 7. Para más detalles sobre Interrupción por favor consulta [aquí](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/master/variants/XIAO_m0/variant.cpp).

### **Multiplexación de Pines**

No necesitamos configurar los pines nosotros mismos, después de usar los pines, puedes llamar una función directamente.

#### **Entrada y Salida Digital**

- Usar el pin 6 como pin digital:

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

#### **AnalogRead**

- Usar el pin 6 como pin analógico:

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

#### **Serial**

- Usar el pin 6 como pin TX de UART (el pin RX de UART es el pin 7):

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

#### **I2C**

- Usar el pin 5 como pin SCL de IIC (el pin SDA de IIC es el pin 4):

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

#### **SPI**

- Usar el pin 8 como pin SCK de SPI (el pin MISO de SPI es el pin 9, el pin MOSI de SPI es el pin 10):

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

#### **QTouch**

Para cómo usar QTouch, proporcionamos un proyecto de ejemplo: [Cómo Hacer un Piano de Frutas con la Función Q-Touch del Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/blog/2020/07/20/how-to-make-a-fruit-piano-on-seeeduino-xiaos-q-touch-function-m/).

#### **Entrada y Salida Analógica**

Aunque todavía tiene "salidas analógicas" basadas en PWM, el SAMD21 también cuenta con salida analógica verdadera en forma de un convertidor digital-a-analógico (DAC). Este módulo puede producir un voltaje analógico entre 0 y 3.3V. Puede ser usado para producir audio con sonido más natural, o como una especie de "potenciómetro digital" para controlar dispositivos analógicos.

El DAC solo está disponible en el pin A0 de Arduino, y se controla usando analogWrite(A0, `<value>`). El DAC se puede configurar hasta una resolución de 10 bits (asegúrate de llamar [**analogWriteResolution(10)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogwriteresolution/) en tu configuración), lo que significa que los valores entre 0 y 1023 establecerán el voltaje en algún lugar entre 0 y 3.3V.

Además del DAC, los canales ADC del SAMD21 también se destacan del ATmega328: están equipados con hasta 12 bits de resolución. Eso significa que los valores de entrada analógica pueden variar de 0-4095, representando un voltaje entre 0 y 3.3V. Para usar los ADC en modo de 12 bits, asegúrate de llamar [**analogReadResolution(12)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogreadresolution/) en tu configuración.

**Graficado Serial del DAC**

Aquí hay un ejemplo que demuestra tanto el DAC como el ADC. Para configurar el experimento, conecta A0 a A1 -- impulsaremos A0 con un voltaje analógico, luego lo leeremos con A1. Es el circuito más simple que hemos puesto en un tutorial:

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/AO_A1.jpg" /></div>

:::note
El Seeed Studio XIAO SAMD21 usando la [**placa de expansión Seeed Studio XIAO SAMD21**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)
:::

Este sketch produce una salida de onda sinusoidal en A0, con valores que van de 0 a 3.3V. Luego usa A1 para leer esa salida en su ADC, y convertirla en un voltaje entre 0 y 3.3V.

Puedes, por supuesto, abrir el monitor serial para ver los valores de voltaje transmitirse. Pero si la onda sinusoidal es difícil de visualizar a través del texto, echa un vistazo al nuevo Graficador Serial de Arduino, yendo a Tools > Serial Plotter.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Serial%20poltting.png" /></div>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_DAC_wave.gif" /></div>

#### **DAC**

Gracias a [Aleksei Tertychnyi](https://github.com/WeSpeakEnglish) por enviar el código, todas las funcionalidades relacionadas fueron desarrolladas y contribuidas por él.

```cpp
#define DAC_PIN A0 // Make code a bit more legible
float x = 0; // Value to take the sin of
float increment = 0.02;  // Value to increment x by each time
int frequency = 440; // Frequency of sine wave

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

## **Introducción**

### **Hardware**

**Materiales requeridos**

- Seeed Studio XIAO SAMD21 x1
- Computadora x1
- Cable USB tipo C x1

:::tip

Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes verificar [seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).
:::

- Paso 1. Prepara un Seeed Studio XIAO SAMD21 y un cable Tipo-C.

- Paso 2. Conecta el Seeed Studio XIAO SAMD21 a tu computadora. Entonces el LED de alimentación amarillo debería encenderse.

### **Software**

:::note

Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino)
:::

- **Paso 1. Necesitas instalar un software de Arduino.**

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong></a>
</div>

**Iniciar la aplicación Arduino**

Haz doble clic en la aplicación Arduino (arduino.exe) que has descargado previamente.

:::note

Si el Software Arduino se carga en un idioma diferente, puedes cambiarlo en el diálogo de preferencias. Consulta la [página del Software Arduino (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para más detalles.
:::

- **Paso 2. Abrir el ejemplo Blink**  

Abre el sketch de ejemplo LED blink: **File > Examples >01.Basics > Blink**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3. Agregar Seeeduino a tu Arduino IDE**

Haz clic en **File > Preference**, y llena Additional Boards Manager URLs con la URL de abajo:

*https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json*

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width={600} height="auto" /></p>

Haz clic en **Tools-> Board-> Boards Manager...**, escribe la palabra clave "**Seeed Studio XIAO SAMD21**" en el campo de búsqueda. Aquí aparece "Seeed SAMD Boards". Instálalo.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png" alt="pir" width={600} height="auto" /></p>

- **Paso 4. Selecciona tu placa y puerto**

Después de instalar la placa, haz clic en **Tools-> Board**, encuentra "**Seeed Studio XIAO**" y selecciónalo. Ahora ya has configurado la placa del Seeed Studio XIAO SAMD21 para Arduino IDE.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/1.jpg" alt="pir" width={600} height="auto" /></p>

Selecciona el dispositivo serial de la placa Arduino desde el menú Tools | Serial Port. Es probable que sea COM3 o superior (**COM1** y **COM2** generalmente están reservados para puertos seriales de hardware). Para averiguarlo, puedes desconectar tu placa Arduino y volver a abrir el menú; la entrada que desaparezca debería ser la placa Arduino. Vuelve a conectar la placa y selecciona ese puerto serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/2.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 5. Subir el programa**  

Ahora, simplemente haz clic en el botón "Upload" en el entorno. Espera unos segundos y si la subida es exitosa, el mensaje "Done uploading." aparecerá en la barra de estado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={800} height="auto" /></p>

 Unos segundos después de que termine la subida, deberías ver el LED del pin 13 (L) en la placa comenzar a parpadear (en naranja). Si lo hace, ¡felicitaciones! Has puesto Arduino en funcionamiento. Si tienes problemas, por favor consulta las sugerencias de solución de problemas.

:::note
el tamaño máximo de flash es 8KB, más información en la hoja de datos ATSAMD218A-MU en recursos
:::

## La aplicación de muestra

- [Cómo usar Seeed Studio XIAO SAMD21 para iniciar sesión en tu Raspberry PI](https://wiki.seeedstudio.com/es/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI)

- [Interfaz de Comunicación SPI](https://wiki.seeedstudio.com/es/XIAO-SPI-Communication-Interface)

- [Cómo reparar un xiao muerto usando raspberry pi](https://forum.seeedstudio.com/t/how-to-unbrick-a-dead-xiao-using-raspberry-pi-guide-openocd/253990). Gracias John_Doe por compartir.

## Recursos

- **[PDF]** [Hoja de datos ATSAMD218A-MU](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)

- **[PDF]** [Esquemático Seeed Studio XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0-SCH-191112.pdf)

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

- **[ZIP]** [Archivo KiCAD Seeed Studio XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-KICAD.zip)

- **[ZIP]** [Archivo Eagle Seeed Studio XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)

- **[DXF]** [Dimensión Seeed Studio XIAO SAMD21 en DXF](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar)

- **[LBR]** [Huella Eagle Seeed Studio XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-footprint-eagle.lbr)

- **[ZIP]** [Firmware de fábrica Seeed Studio XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_final_firmware.zip)

- **[XLSX]** [Hoja de pines Seeed Studio XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-pinout_sheet.xlsx)

- **[STEP]** [Modelo 3D Seeed Studio XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip)

- 🔗 **[Kicad]** [Huella Seeed Studio XIAO SAMD21](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

## Recursos del Curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
