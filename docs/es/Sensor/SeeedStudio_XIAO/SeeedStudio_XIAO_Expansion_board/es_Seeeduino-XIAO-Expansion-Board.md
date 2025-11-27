---
description: Placa de expansión Seeed Studio XIAO
title: Placa Base de Expansión para XIAO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino-XIAO-Expansion-Board
last_update:
  date: 07/18/2024
  author: Spencer
---

## Descripción General

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" /></div>

Una potente placa de expansión funcional para Seeed Studio XIAO de solo la mitad del tamaño de Raspberry Pi 4. Permite construir prototipos y proyectos de manera fácil y rápida. Con sus ricos periféricos incluyendo OLED, RTC, memoria expandible, zumbador pasivo, botón RESET/Usuario, conector servo de 5V, múltiples interfaces de datos... podrías explorar infinitas posibilidades de Seeed Studio XIAO. [Circuitpython](https://circuitpython.org/) también es bien soportado por esta placa.

Como factor de forma Seeed Studio XIAO, todas las placas Seeed Studio XIAO soportan tanto [Grove Shield para Seeed Studio XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) como [Seeed Studio Expansion Base para XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html). Hay una ligera diferencia entre los pines y refiriéndose al diagrama de pines es fácil de manejar.

Seeed Studio XIAO SAMD21, Seeed Studio XIAO RP2040, y Seeed Studio XIAO nRF52840 son compatibles con la Seeed Studio Expansion Base para XIAO.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- **Prototipado Rápido:** Depuración fácil y Reset con botón RESET y pin SWD llevado a header macho.
<!-- 0.96"OLED, enables visual data display without PC serial monitor; Convenient plug and play Grove connectors support multiple data protocols, including IIC, Uart, Analog/Digital; No soldering needed with all pin led out. -->
- **Periféricos Ricos:** Pantalla OLED, RTC, espacio de memoria expandible, zumbador pasivo, botón de usuario, chip de gestión de batería a bordo.
- **Sin Soldadura Necesaria:** Todos los pines llevados hacia afuera. Conectores Grove convenientes plug and play soportan múltiples protocolos de datos, incluyendo IIC, UART, Analógico/Digital.
- **Circuit Python Soportado:** Soporta bien circuit python. La ranura para tarjeta MicroSD permite expandir el espacio de memoria, haciendo posible asignar más librerías necesarias en prototipado y construcción de proyectos.
- **Tamaño Mini:** Compacto y elegante con solo la mitad del tamaño de Raspberry Pi 4, especialmente adecuado para proyectos que requieren tamaño mini.

## Especificaciones

<div class="table-center">
<table align="center">
  <tr>
    <th>Elemento</th>
    <th>Valor</th>
  </tr>
  <tr>
    <td>Voltaje de operación</td>
    <td>5V / Batería de Litio 3.7V</td>
  </tr>
  <tr>
    <td>Corriente de carga</td>
    <td>460mA (Máx)</td>
  </tr>
  <tr>
    <td>Precisión del temporizador RTC</td>
    <td>± 1.5S/DÍA(25°C)</td>
  </tr>
  <tr>
    <td>Batería RTC</td>
    <td>CR1220</td>
  </tr>
  <tr>
    <td>Pantalla</td>
    <td>Pantalla OLED de 0.96"</td>
  </tr>
  <tr>
    <td>Memoria expandible</td>
    <td>Tarjeta MicroSD</td>
  </tr>
  <tr>
    <td>Interfaz Grove</td>
    <td>Grove IIC*2, Grove UART*1, A0/D0 Grove*1</td>
  </tr>
  <tr>
    <td>Otro Equipo Externo</td>
    <td>Zumbador pasivo, botón de usuario, conector servo de 5V</td>
  </tr>
</table>
</div>

## Aplicaciones

- Depuración SWD
- Prototipado rápido
- Visualización de datos
- Proyecto de Tamaño Mini

## Lista de Partes

|Elemento|Valor|
|---|---|
|Seeed Studio Expansion Base para XIAO  | *1 |

:::note
Este producto no incluye Seeed Studio XIAO y batería, Esta placa de expansión no soporta el XIAO nRF54L15 y XIAO MG24. Seeed Studio XIAO está constantemente introduciendo nuevos productos. Para mantenerse al día con los últimos desarrollos de productos en esta serie, visita la [página principal de la serie XIAO](https://www.seeedstudio.com/xiao-series-page).

<!-- please click this link to get [**Seeed Studio XIAO SAMD21**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html?gclid=Cj0KCQjwufn8BRCwARIsAKzP695mYBI8wwzrR8rXiJgv9QBK5DeTJGCU9bzXvzGUheFVZxqHcuw0SgYaAqDqEALw_wcB) -->

:::

## Primeros Pasos

### Materiales Requeridos

| Seeed Studio XIAO SAMD21 (Pre-soldado) | Seeed Studio Expansion Base para XIAO|
|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/102010388_Preview-07.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" alt="pir" width={600} height="auto" /></p>
|[**Obtener UNO Ahora**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[**Obtener UNO Ahora**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)|

### Descripción General del Hardware

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/2222222222222222222222222222221.jpg" /></div>

Hay una ranura externa para tarjeta MicroSD y un soporte para batería RTC, la tarjeta MicroSD se usa principalmente para guardar y ejecutar el archivo `python.py`, el RTC es para rastrear la hora actual y puede ser usado para programar acciones en un momento específico.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/1111111111111111111111110.jpg" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/ssssssssssccccccccc.png" /></div>

### Diagrama de Pines

Descripción de pines de headers externos para Grove-Shield para Seeed Studio XIAO.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/pinpinpin4.jpg" /></div>

## Uso de la Placa de Expansión

### Conexión

Coloca el Seeed Studio XIAO SAMD21 en la placa de expansión, el LED verde del Seeed Studio XIAO SAMD21 debería encenderse.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO-to-board.png" /></div>

:::note
Por favor conecta primero el Seeed Studio XIAO en la placa de expansión, luego conecta el Type-C, Recuerda conectar el Seeed Studio XIAO en el **medio de los dos conectores hembra**, de lo contrario dañarás el Seeed Studio XIAO y la placa de expansión.
:::

## Uso de batería

La Seeed Studio Expansion Base para XIAO puede ser alimentada por una batería, así que si haces alguna demostración que necesite ser movida, esa batería te ayudará a resolver el problema de suministro de energía. cuando conectes la batería por favor ten cuidado con los ánodos positivo y negativo, sigue la imagen para conectar la batería en caso de dañar la placa.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/battery-board.png" /></div>

Además, la placa carga la batería cuando conectas el cable de la batería y el cable type-C y cambias el botón a encendido.

Como en la imagen de abajo, si el LED parpadea significa que la batería no se carga o la placa no tiene batería conectada, si el LED se mantiene encendido significa que la batería se está cargando.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO_flash_light.png" /></div>

## Módulos en la placa de expansión

Periféricos ricos a bordo incluyendo:

- **Pantalla OLED:** Visualización de datos visual sin conectar a PC, lo que permite depurar de manera más eficiente, y construir aplicaciones como un hub de sensores, sistema de monitoreo de datos, etc.

- **Botón RESET:** No más cables puente y cortocircuitos, reset fácil con solo un clic.

- **Depuración SWD:** Pin SWD llevado como header de pin macho, haciendo la conexión del depurador y descarga de firmware mucho más fácil.

- **RTC de alta precisión:** Reloj de tiempo real de alta precisión con respaldo de batería, permite mantener tiempo preciso cuando la alimentación principal está apagada.

- **Memoria expandible:** Con una ranura para tarjeta MicroSD en la parte trasera, no más preocupaciones sobre límites de memoria al agregar librerías y usar circuit python.

- **Botón de usuario:** Además del botón RESET, también proporciona otro botón definido por el usuario.

- **Zumbador pasivo:** Podrías cambiar la frecuencia PWM para obtener diferentes sonidos de pitido para conseguir una "música de zumbador".

- **Conectores Grove:** Todos los pines llevados hacia afuera, conectores grove plug and play soportan protocolos de datos comunes (Grove IIC*2, Grove UART*1, A0/D0 Grove*1)

- **Carga de Batería Lipo:** Conector de batería lipo estándar JST2.0mm y sistema de gestión de batería, soporta tanto suministro de energía USB como de batería lipo, y recarga de batería a bordo fácil.

- **Conector servo de 5V:** Salida de 5V llevada a header macho para conexión de servo y sensor de 5V.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/444.png" /></div>

### Pantalla OLED

Este ejemplo introduce cómo usar la pantalla OLED en la Seeed Studio Expansion Base para XIAO.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Hello_world11.jpg" /></div>

**Paso 1**. Instala el Seeed Studio XIAO SAMD21 en la placa de Expansión luego conecta el cable Type-C.

**Paso 2**. Instala la librería [**u8g2**](https://github.com/olikraus/U8g2_Arduino), esta es la guía [**cómo instalar la librería**](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/).

**Paso 3**. Copia el código y pégalo en el Arduino IDE luego súbelo.

**Código OLED**

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(1);   // Enable (1) and disbale (0) 180 degree rotation of the display content
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("Hello World!");
}
```

### Control de LED por Botón de Usuario

Este ejemplo introduce cómo usar el botón en la Seeed Studio Expansion Base para XIAO para controlar el LED en el Seeed Studio XIAO SAMD21.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/LED_botton.gif" /></div>

**Paso 1**. Instala el Seeed Studio XIAO SAMD21 en la placa de expansión y luego conecta el cable Type-C.

**Paso 2**. Abre Arduino IDE, copia el código y pégalo en Arduino IDE, luego súbelo.

**Código**

```cpp
const int buttonPin = 1;     // the number of the pushbutton pin
int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(LED_BUILTIN, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT_PULLUP);

}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED on:
    digitalWrite(LED_BUILTIN, HIGH);
  } else {
    // turn LED off:
    digitalWrite(LED_BUILTIN, LOW);
  }

}
```

### Zumbador

El zumbador está conectado por defecto al Pin A3, si quieres eliminar la función del zumbador, simplemente sigue la imagen de abajo, corta la línea.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/111123232325.png" /></div>

#### **Reproducir Canción con Zumbador Pasivo**

Este ejemplo usa el zumbador en la Base de Expansión Seeed Studio para XIAO para reproducir Feliz cumpleaños.

**Paso 1**. Instala el Seeed Studio XIAO SAMD21 en la placa de expansión y luego conecta el cable Type-C.

**Paso 2**. Abre Arduino IDE, copia el código y pégalo en Arduino IDE, luego súbelo.

**Código**

```cpp
int speakerPin = D3;
int length = 28; // the number of notes
char notes[] = "GGAGcB GGAGdc GGxecBA yyecdc";
int beats[] = { 2, 2, 8, 8, 8, 16, 1, 2, 2, 8, 8, 8, 16, 1, 2, 2, 8, 8, 8, 8, 16, 1, 2, 2, 8, 8, 8, 16 };
int tempo = 150;
void playTone(int tone, int duration) {
  for (long i = 0; i < duration * 1000L; i += tone * 2) {
    digitalWrite(speakerPin, HIGH);
    delayMicroseconds(tone);
    digitalWrite(speakerPin, LOW);
    delayMicroseconds(tone);
  }
}

void playNote(char note, int duration) {
  char names[] = {'C', 'D', 'E', 'F', 'G', 'A', 'B',
                  'c', 'd', 'e', 'f', 'g', 'a', 'b',
                  'x', 'y'
                 };
  int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014,
                  956,  834,  765,  593,  468,  346,  224,
                  655 , 715
                };
  int SPEE = 5;

  // play the tone corresponding to the note name

  for (int i = 0; i < 16; i++) {
    if (names[i] == note) {
      int newduration = duration / SPEE;
      playTone(tones[i], newduration);
    }
  }
}

void setup() {
  pinMode(speakerPin, OUTPUT);
}

void loop() {
  for (int i = 0; i < length; i++) {
    if (notes[i] == ' ') {
      delay(beats[i] * tempo); // rest
    } else {
      playNote(notes[i], beats[i] * tempo);
    }
    // pause between notes
    delay(tempo);
  }
}
```

### Control de Servo por Sensor de Ángulo Rotativo

Este ejemplo usa un sensor de ángulo rotativo para controlar un servo a través de los puertos de integración en la Base de Expansión Seeed Studio para XIAO.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/rotary_servo.gif" /></div>

**Paso 1**. Instala el Seeed Studio XIAO SAMD21 en la placa de expansión y luego conecta el cable Type-C.

**Paso 2**. Conecta el cable del servo al puerto **I2C**, el sensor de ángulo rotativo a **D0**.

**Paso 3**. Abre Arduino IDE, copia el código y pégalo en Arduino IDE, luego súbelo.

:::tip
Si tu placa de desarrollo es **XIAO ESP32 Series**. Antes de ejecutar el siguiente código, necesitas instalar primero la librería ESP32Servo en **Arduino Library Manager** y cambiar el siguiente código de ```#include <Servo.h>``` a ```#include <ESP32Servo.h>```.
:::

```cpp
#include <Servo.h>
#include <Arduino.h>
#include <Wire.h>

#define ROTARY_ANGLE_SENSOR A0
#define ADC_REF 3 //reference voltage of ADC is 3v.If the Vcc switch on the seeeduino
#define GROVE_VCC 3 //VCC of the grove interface is normally 3v
#define FULL_ANGLE 300 //full value of the rotary angle is 300 degrees

Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards

int pos = 0;    // variable to store the servo position

void setup() {
  Serial.begin(9600);
  pinMode(ROTARY_ANGLE_SENSOR, INPUT);
  myservo.attach(5);  // attaches the servo on pin 9 to the servo object
}

void loop() {

  float voltage;
  int sensor_value = analogRead(ROTARY_ANGLE_SENSOR);
  voltage = (float)sensor_value * ADC_REF / 1023;
  float degrees = (voltage * FULL_ANGLE) / GROVE_VCC;
  Serial.println("The angle between the mark and the starting position:");
  Serial.println(degrees);
  delay(50);
  myservo.write(degrees);
}
```

### Pantalla de reloj RTC

Este ejemplo usa RTC para mostrar el reloj en el OLED.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/time_clock.gif" /></div>

**Paso 1**. Instala el Seeed Studio XIAO SAMD21 en la placa de expansión y luego conecta el cable Type-C.

**Paso 2**. Instala las librerías [**u8g2**](https://github.com/olikraus/U8g2_Arduino) y [**PCF8563**](https://github.com/Bill2462/PCF8563-Arduino-Library), esta es la guía [**cómo instalar la librería**](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/).

**Paso 3**. Copia el código y pégalo en Arduino IDE, luego súbelo.

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <PCF8563.h>
PCF8563 pcf;
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup() {
  Serial.begin(115200);
  u8x8.begin();
  u8x8.setFlipMode(1);
  Wire.begin();
  pcf.init();//initialize the clock
  pcf.stopClock();//stop the clock
  pcf.setYear(20);//set year
  pcf.setMonth(10);//set month
  pcf.setDay(23);//set dat
  pcf.setHour(17);//set hour
  pcf.setMinut(33);//set minut
  pcf.setSecond(0);//set second
  pcf.startClock();//start the clock
}

void loop() {
  Time nowTime = pcf.getTime();//get current time
  u8x8.setFont(u8x8_font_chroma48medium8_r);   // choose a suitable font

  u8x8.setCursor(0, 0);
  u8x8.print(nowTime.day);
  u8x8.print("/");
  u8x8.print(nowTime.month);
  u8x8.print("/");
  u8x8.print("20");
  u8x8.print(nowTime.year);
  u8x8.setCursor(0, 1);
  u8x8.print(nowTime.hour);
  u8x8.print(":");
  u8x8.print(nowTime.minute);
  u8x8.print(":");
  u8x8.println(nowTime.second);
  delay(1000);
}
```

### Función de tarjeta SD

Para el XIAO SAMD21, XIAO RP2040, XIAO ESP32C3 y XIAO ESP32S3, no necesitas instalar una librería de tarjeta SD separada para usar una de terceros. Este procedimiento a continuación es aplicable a estos XIAOs.

:::tip
El circuito de la placa de expansión está diseñado de manera que el pin CS de la ranura de la tarjeta SD esté conectado al pin **D2** del XIAO.
:::

```cpp
#include <SPI.h>
#include <SD.h>
#include "FS.h"

File myFile;

void setup() {
  // Open serial communications and wait for port to open:
  Serial.begin(115200);
  while(!Serial);              // Execute after turning on the serial monitor
  delay(500);

  Serial.print("Initializing SD card...");

  pinMode(D2, OUTPUT);          // Modify the pins here to fit the CS pins of the SD card you are using.
  if (!SD.begin(D2)) {
    Serial.println("initialization failed!");
    return;
  }
  Serial.println("initialization done.");

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  myFile = SD.open("/test.txt", FILE_WRITE);          // The path to read and write files needs to start with "/"

  // if the file opened okay, write to it:
  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3.");
    // close the file:
    myFile.close();
    Serial.println("done.");
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }

  // re-open the file for reading:
  myFile = SD.open("/test.txt");                       // The path to read and write files needs to start with "/"
  if (myFile) {
    Serial.println("test.txt:");

    // read from the file until there's nothing else in it:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // close the file:
    myFile.close();
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }
}

void loop() {
  // nothing happens after setup
}

```

Si estás usando la serie XIAO nRF52840, entonces puede que necesites descargar la [librería SdFat](https://github.com/greiman/SdFat) por separado para poder usar la función de tarjeta SD.

```cpp
#include <SPI.h>
#include "SdFat.h"
SdFat SD;

#define SD_CS_PIN D2
File myFile;

void setup() {
  // Open serial communications and wait for port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }


  Serial.print("Initializing SD card...");

  if (!SD.begin(SD_CS_PIN)) {
    Serial.println("initialization failed!");
    return;
  }
  Serial.println("initialization done.");

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  myFile = SD.open("/test.txt", FILE_WRITE);

  // if the file opened okay, write to it:
  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3.");
    // close the file:
    myFile.close();
    Serial.println("done.");
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }

  // re-open the file for reading:
  myFile = SD.open("test.txt");
  if (myFile) {
    Serial.println("test.txt:");

    // read from the file until there's nothing else in it:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // close the file:
    myFile.close();
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }
}

void loop() {
  // nothing happens after setup
}
```

## Carcasa Acrílica para Seeed Studio Seeed Studio Expansion Base for XIAO

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/110010024_Preview-08.png" /></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/XIAO-p-4812.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

Hicimos esta [**carcasa acrílica**](https://www.seeedstudio.com/XIAO-p-4812.html) para proteger la Seeed Studio Expansion Base for XIAO, estos son los componentes de la carcasa acrílica.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/componets.png" /></div>

Comparado con el Grove Shield for Seeed Studio XIAO, la Seeed Studio Expansion Base for XIAO agregó muchos módulos útiles para los usuarios.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/board_compare.png" /></div>

Esta carcasa acrílica es fácil de ensamblar y también puede hacer que la carcasa se vea más ordenada.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/build_up.gif" /></div>

## Circuitpython en Seeed Studio XIAO SAMD21 con placa de expansión

Este wiki introduce cómo instalar y ejecutar el [**CircuitPython**](https://circuitpython.org/) oficial de Adafruit Industries en la [**placa de desarrollo Seeed Studio XIAO SAMD21**](https://www.seeedstudio.com/Seeeduino-XIAO-Pre-Soldered-p-4747.html)!

CircuitPython es un lenguaje de programación diseñado para simplificar la experimentación y el aprendizaje de programación en placas de microcontroladores de bajo costo. Hace que comenzar sea más fácil que nunca sin necesidad de descargas previas en el escritorio. Una vez que configures tu placa, abre cualquier editor de texto y comienza a editar código. Para más información, consulta [**aquí**](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython).

## Instalando CircuitPython

**Paso 1.** Instala el Seeed Studio XIAO SAMD21 en la placa de expansión y luego conecta el cable Type-C.

**Paso 2.** Descarga el [**Bootloader oficial de CircuitPython para Seeed Studio XIAO SAMD21**](https://circuitpython.org/board/seeeduino_xiao/). Un archivo `.uf2` se almacenará en la descarga de tu PC.

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circutpyhthon.png" /></div>

**Paso 3.** Entra al modo bootloader DFU presionando el botón de reset dos veces rápidamente en la Seeed Studio Expansion Base for XIAO, luego aparecerá la unidad Arduino en tu PC.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/reboot_XIAO.gif" /></div>

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/arduino_boot.png" /></div>

**Paso 4.** Una unidad externa llamada `Arduino` debería aparecer en tu PC. Arrastra los archivos uf2 de CircuitPython descargados a la unidad `Arduino`.

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/python_to_arduino.png" /></div>

**Paso 5.** Una vez cargado el bootloader de CircuitPython, desconecta el USB Type-C y vuelve a conectar. Una nueva unidad externa llamada `CIRCUITPY` debería aparecer.

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Circuitpy.png" /></div>

**Paso 6.** Ahora, CircuitPython está cargado en Seeed Studio XIAO SAMD21! Todo lo que necesitas hacer es escribir tu programa python y nombrarlo `main.py` y arrastrarlo a la unidad `CIRCUITPY`.

### Ejemplo de parpadeo con CircuitPython

Aquí hay un ejemplo simple que introduce cómo usar CircuitPython en el Seeed Studio XIAO.

**Paso 1** Crea un archivo txt llamado `main` en la unidad `CIRCUITPY`.

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/main_create.png" /></div>
<br />

:::note
El nombre `main` es uno de estos: **code.txt**, **code.py**, **main.py**, **main.txt**, hay más detalles sobre [**este comportamiento**](https://docs.circuitpython.org/en/latest/README.html#behavior).
:::

**Paso 2** Usa REPL para obtener los pines del LED naranja. Para detalles sobre REPL, consulta [Welcome to CircuitPython!](https://learn.adafruit.com/welcome-to-circuitpython/the-repl) Para usar REPL, primero necesitas conectarte a la consola serial. Una vez establecida la conexión, presiona CTRL+C dos veces para entrar al modo de edición. Luego, copia el siguiente código e ingrésalo respectivamente.

```
>>> import board
>>> dir(board)
```

Verás una lista de todos los pines en tu placa que están disponibles para usar en tu código. Cada placa diferirá ligeramente dependiendo del número de pines disponibles.
![image.png](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/zh-CN/Seeeduino-XIAO-Expansion-Board12.png)

¿Ves YELLOW_LED_INVERTED? ¡Ese es el pin que usaste para hacer parpadear el LED naranja!

**Paso 3** Pega el código en el archivo `main` y luego guárdalo, verás el LED naranja parpadeando en la placa Seeed Studio XIAO SAMD21.

**Código**

```py
import time
import board
from digitalio import DigitalInOut, Direction

led = DigitalInOut(board.YELLOW_LED_INVERTED)
led.direction = Direction.OUTPUT

while True:
    led.value = True
    time.sleep(1)
    led.value = False
    time.sleep(1)
```

### Tarjeta MicroSD para circuitpython

El Seeed Studio XIAO SAMD21 tiene incorporado aproximadamente 40 KB de flash, pero puede no tener suficiente espacio para almacenar archivos de código python de gran tamaño, afortunadamente, la placa de expansión Seeed Studio XIAO SAMD21 tiene incorporada una ranura para tarjeta MicroSD para extender el espacio de almacenamiento, así que puedes seguir esta instrucción para aprender cómo ejecutar circuitpython en la tarjeta MicroSD.

:::note
El formato del sistema de la tarjeta MicroSD es FAT o exFAT. Si usas otro formato de sistema de tarjeta MicroSD, esto causará que la tarjeta MicroSD no pueda ser reconocida.
:::
**Paso 1.** Prepara una tarjeta micro SD para conectar en la placa de expansión Seeed Studio XIAO SAMD21.

**Paso 2.** Asumiendo que aún no has descargado el [**archivo circuitPython**](https://circuitpython.org/board/seeeduino_xiao/), consulta el capítulo [**Instalando CircuitPython**](https://wiki.seeedstudio.com/es/Seeeduino-XIAO-Expansion-Board/#installing-circuitpython).

**Paso 3.** Descarga [**lib**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/lib.zip) descomprime el archivo, luego reemplázalo con la nueva lib en `CIRCUITPY`.

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/lib_replace.png" /></div>

**Paso 4.** Descarga el archivo [**main.py**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/main.py) en la unidad `CIRCUITPY`.

**El código `main.py`**

```cpp
import sd
f = open("/sd/hello.txt", "r")   ## read the file from SD card
print(f.read())
```

**Paso 5.** Descarga el archivo [**sd.py**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/sd.py) en la unidad `CIRCUITPY`.

**El código `sd.py`**

```cpp
import os
import adafruit_sdcard
import board
import busio
import digitalio
import storage
import sys

# Connect to the card and mount the filesystem for Seeed Studio XIAO .
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)
cs = digitalio.DigitalInOut(board.D2)
sdcard = adafruit_sdcard.SDCard(spi, cs)
vfs = storage.VfsFat(sdcard)
storage.mount(vfs, "/sd")
sys.path.append("/sd")
sys.path.append("/sd/lib")  ## switch to the path to SD card
```

**Ejemplo del Buzzer**

Este ejemplo es para probar el buzzer ejecutando `buzzer.py` en la tarjeta MicroSD.

**Paso 1.** Puedes simplemente pegar [**buzzer.py**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/buzzer.py) en la tarjeta MicroSD.

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/sd_card_store.png" /></div>

**Paso 2.** Abre `main.py` en la unidad `CIRCUITPY`.

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/main.PY.png" /></div>

**Paso 3.** Agrega `import buzzer` en el archivo main.py.
<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/add_buzzer.png" /></div>

Cuando termines todos los pasos, el buzzer funcionará. Si quieres ejecutar otros archivos python en la tarjeta MicroSD, imita el ejemplo.

:::note
Si quieres volver al modo Arduino, solo necesitas subir cualquier programa en el Arduino IDE.
:::

## Demo

### Proyecto 1 - Ventilador de control remoto

**Descripción general**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remoteFan-g.gif" /></div>

Este wiki introduce cómo hacer un mini ventilador para colocar en tu habitación y mantenerte fresco.

**Características**

- Ventilador oscilante automático

**Componentes requeridos**

- [**Seeed Studio XIAO SAMD21**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio Expansion Base for XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Grove mini fan**](https://www.seeedstudio.com/Grove-Mini-Fan-v1-1.html)
- [**Grove-Servo**](https://www.seeedstudio.com/Grove-Servo.html)
- [**Grove - IR (Infrared) Receiver**](https://www.seeedstudio.com/Grove-Infrared-Receiver.html)

**Conexión de Hardware**

Sigue la misma línea de color para conectar cada sensor en la placa. Conecta el cable grove del ventilador a D0, el cable grove del servo a **I2C**, el cable grove IR a **D7**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_fan_pic.png" /></div>

**Instrucciones de Arduino**

**Paso 1**. Sigue la imagen de conexión para conectar todos los sensores en la placa.

**Paso 2**. Instala la librería [**Arduino-IRremote**](https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev), esta es la guía [**cómo instalar la librería**](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/).

**Paso 3**. Copia el código y pégalo en el IDE de Arduino, luego súbelo.

**Paso 4**. Coloca el ventilador en una posición segura, intenta presionar el botón para asegurarte de que pueda funcionar de manera segura.

**Código**

```cpp
#include <IRremote.h>
#include <Servo.h>

Servo myservo;  // create servo object to control a servo
int RECV_PIN = 7; // set pin 2 as IR control

IRrecv irrecv(RECV_PIN);

decode_results results;

int pos = 90;    // variable to store the servo position
int fanPin = 0;  // set D6 as control switch
int fanState = LOW;
int IO = 0;

void setup()
{
  Serial.begin(9600);
  Serial.println("Enabling IRin");  // remind enabling IR
  irrecv.enableIRIn(); // Start the receiver
  Serial.println("Enabled IRin");
  myservo.attach(5);  // attaches the servo on pin 2 to the servo object
  pinMode(fanPin, OUTPUT);

}

void loop() {
  if (irrecv.decode(&results)) { //checking IR signal
    if (results.value == 2155829415) {    // Power off/on
      IO++;
      if (IO % 2 == 0) {
        fanState = HIGH;
        digitalWrite(fanPin, fanState);
        delay(100);
      }
      else {
        fanState = LOW;
        digitalWrite(fanPin, fanState);
        delay(100);
      }
    }

    if (results.value == 2155821255 ) {    // fan swing to left
      for (pos; pos <= 89; pos += 1) { // goes from 0 degrees to 90 degrees
        // in steps of 1 degree
        myservo.write(pos);              // tell servo to go to position in variable 'pos'

        delay(40);                       // waits 15ms for the servo to reach the position
        if (irrecv.decode(&results)) {
          irrecv.resume();
          if (results.value == 2155870215)
            break;
        }
      }
    }

    if (results.value == 2155870215 ) {    // fan swing to right
      for (pos; pos >= 1; pos -= 1) { // goes from 90 degrees to 0 degrees
        myservo.write(pos);              // tell servo to go to position in variable 'pos'
        delay(40);                       // waits 15ms for the servo to reach the position

        if (irrecv.decode(&results)) {
          irrecv.resume();
          if (results.value == 2155821255)
            break;
        }
      }
    }
    Serial.println(pos);
    Serial.println(results.value, HEX);
    Serial.println(results.value);
    irrecv.resume();                    //recive next intrustion
  }
  delay(100);
}
```

### Proyecto 2 - Coche de control remoto

**Descripción general**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_control_car.gif" /></div>

Este wiki presenta cómo hacer un coche de control remoto.

**Características**

- Coche de tamaño mini fácil de atravesar carreteras estrechas

**Componentes requeridos**

- [**Seeed Studio XIAO **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio Expansion Base for XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Grove - I2C Mini Motor Driver**](https://www.seeedstudio.com/Grove-I2C-Mini-Motor-Driver.html)
- [**Motor DC**](https://www.seeedstudio.com/130-DC-Motor-p-2023.html)
- [**Grove - IR (Infrared) Receiver**](https://www.seeedstudio.com/Grove-Infrared-Receiver.html)

**Conexión de hardware**

Por favor sigue la misma línea de color para conectar cada sensor en la placa. Por favor conecta el cable Grove del sensor IR a D0, el cable Grove del Mini Motor Driver a I2C.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_car.jpg" /></div>

**Instrucciones de Arduino**

**Paso 1**. Sigue la imagen de conexión para conectar todos los sensores en la placa.

**Paso 2**. Descarga el [**IDE de Arduino**](https://www.arduino.cc/en/Main/software)

**Paso 3**. Instala las librerías [**Arduino-IRremote**](https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev) y [**Motor driver**](https://github.com/Seeed-Studio/Drv8830_Motor_Driver), esta es la guía [**cómo instalar la librería**](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/).

**Paso 4**. Copia el código y pégalo en el IDE de Arduino, luego súbelo.

**Código**

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <IRremote.h>
#include <SparkFunMiniMoto.h>  // Include the MiniMoto library
// Create two MiniMoto instances, with different address settings.
MiniMoto motor0(0xC4); // A1 = 1, A0 = clear
MiniMoto motor1(0xC0); // A1 = 1, A0 = 1 (default)

#define FAULTn  1     // Pin used for fault detection.

int RECV_PIN = 0; // set pin 2 as IR control
IRrecv irrecv(RECV_PIN);
decode_results results;

void setup() {
  Serial.begin(9600);
  Serial.println("Enabling IRin");  // remind enabling IR
  irrecv.enableIRIn(); // Start the receiver
  pinMode(FAULTn, INPUT);
}

void loop() {
  if (irrecv.decode(&results)) { //checking IR signal
    if (results.value == 2155862055) {
      //Forward  2155862055
      motor0.drive(-600);
      motor1.drive(600);
      delayUntil(20);
    }
    if (results.value == 2155813095) {
      //Brake   2155813095
      motor0.brake();
      motor1.brake();
      delay(100);
    }
    if (results.value == 2155823295) {
      //backward  2155823295
      motor0.drive(600);
      motor1.drive(-600);
      delayUntil(20);
    }
    if (results.value == 2155829415) {
      //Stop  2155829415
      motor0.stop();
      motor1.stop();
      delay(100);
    }
    if (results.value == 2155821255) {
      //turn right   2155821255
      motor0.drive(600);
      motor1.drive(600);
      delayUntil(20);
    }
    if (results.value == 2155837575) {
      //turn left    2155837575
      motor0.drive(-600);
      motor1.drive(-600);
      delayUntil(20);
    }
    irrecv.resume();                    //recive next intrustion

  }
  delay(100);
}

void delayUntil(unsigned long elapsedTime) {
  unsigned long startTime = millis();
  while (startTime + elapsedTime > millis()) {
    if (digitalRead(FAULTn) == LOW) {
      byte result = motor0.getFault();
      result = motor1.getFault();
    }
  }
}
```

### Proyecto 3 - Caja del tesoro que se desbloquea con huella dactilar - Seeed Studio XIAO

**Descripción general**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_open.gif" /></div>

Esta caja puede almacenar tus cosas importantes, y no tienes que preocuparte de que algunas personas tomen tus cosas, la caja tiene la función de huella dactilar para proteger tus cosas, y si la autorización de huella dactilar falla, el zumbador sonará la alarma y el anillo LED mostrará el color rojo, solo tu dedo que ha sido registrado en la placa al principio, luego pon tu dedo en la placa, cuando la huella dactilar pase la autorización, el anillo LED mostrará color verde.

**Características**

- Fácil de registrar tu huella dactilar
- El anillo LED puede recordarte el estado del bloqueo
- La pantalla OLED puede mostrar la información actual
- El zumbador puede recordarte si la huella dactilar pasa la autorización

**Componentes requeridos**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio Expansion Base for XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - Capacitive Fingerprint Scanner/Sensor**](https://www.hackster.io/products/buy/80263?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove RGB LED Ring - 24**](https://www.hackster.io/products/buy/80264?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - Servo**](https://www.hackster.io/products/buy/80265?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)

**Conexión de hardware**

Por favor conecta cada módulo en la placa como se muestra en la imagen. Conecta el módulo de huella dactilar al puerto UART de la placa de expansión XIAO, y conecta el servo al puerto D0 de la placa de expansión XIAO.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/finger_pinter.png" /></div>

Ten en cuenta que el anillo NeoPixel está conectado directamente a los pines de la placa de desarrollo XIAO a través de tres cables de diferentes colores: Conecta el pin DIN del anillo NeoPixel con el cable amarillo al pin D1 del XIAO, conecta el pin VIN del anillo NeoPixel con el cable rojo al pin 3V3 del XIAO, y conecta el pin GND del anillo NeoPixel con el cable negro al pin GND del XIAO.

![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/zh-CN/Seeeduino-XIAO-Expansion-Board13.jpeg)

**Instrucciones de Arduino**

**Paso 1**. Sigue la imagen de conexión para conectar todos los sensores en la placa.

**Paso 2**. Descarga el [**IDE de Arduino**](https://www.arduino.cc/en/Main/software)

**Paso 3**. Instala las librerías [**u8g2**](https://github.com/olikraus/U8g2_Arduino), [**Servo**](https://github.com/arduino-libraries/Servo), [**Seeed_Arduino_KCT202**](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202) y [**Seeed_LED_Ring**](https://github.com/Seeed-Studio/Seeed_LED_Ring), esta es la guía [**cómo instalar la librería**](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/).

**Paso 4**. Copia el código y pégalo en el IDE de Arduino, luego súbelo.

**Demostración**

1. Registra tu huella dactilar

La pantalla mostrará grabación de dedo al principio, solo necesitas poner tu dedo en el dispositivo de huella dactilar, después de eso, el programa analizará tu huella dactilar, luego terminará el registro.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_record.gif" /></div>

2. Autorización de identidad (certificación aprobada)

La pantalla mostrará "Please verify", necesitas poner tu dedo en el dispositivo de huella dactilar, luego el anillo LED se volverá de color verde.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_open.gif" /></div>

3. Autorización de identidad (certificación no aprobada)

Si otras personas ponen su dedo en él, el anillo LED se volverá de color rojo y la placa mostrará "Identity deny" mientras que la alarma funcionará.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_close.gif" /></div>

**Código**

```cpp
#include <Servo.h>
#include <Arduino.h>
#include <U8x8lib.h>
#include "ATSerial.h"
#include "Protocol.h"
#include "KCT202.h"
#include "Adafruit_NeoPixel.h"

#define PIXEL_PIN    2    // Digital IO pin connected to the NeoPixels.
#define PIXEL_COUNT 24
#define debug SerialUSB
#define uart  Serial1
FingerPrint_KCT202<Uart, Serial_> kct202;
Adafruit_NeoPixel strip = Adafruit_NeoPixel(PIXEL_COUNT, PIXEL_PIN, NEO_GRB + NEO_KHZ800);

Servo myservo;

Protocol_oprt oprt;
uint8_t err_code = 0;
uint8_t param[10];
uint32_t param_len;
int pos = 0;
const int buttonPin = 1;
int buttonState = 0;
int BuzzerPin = A3;

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  Serial.begin(115200);
  strip.setBrightness(255);
  strip.begin();
  strip.show(); // Initialize all pixels to 'off'
  colorWipe(strip.Color(125, 0, 125), 50);
  u8x8.begin();
  u8x8.setFlipMode(0);
  debug.begin(115200);
  pinMode(buttonPin, INPUT_PULLUP);
  pinMode(BuzzerPin, OUTPUT);
  kct202.begin(uart, debug);
  myservo.attach(0);
  myservo.write(0);
  kct202.autoRegisterFingerPrint(1, 4, LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP | OVERRIDE_CURR_FINGER_PRINT);

  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 3);
  u8x8.print("finger recording");
  if (0 == kct202.getRegisterResponAndparse()) {
    debug.println("Register ok!");
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("    be ready    ");
    delay(500);
    colorWipe(strip.Color(0, 125, 125), 50);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 3 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 2 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 1 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   Registered");
    delay(800);
  }
}

void loop(void) {
  uint16_t finger_num = 0;

  kct202.autoVerifyFingerPrint(CHECK_ALL_FINGER_TEMP,
                               LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP);
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 3);
  u8x8.print(" Please verify  ");

  if (0 == kct202.getVerifyResponAndparse(finger_num)) {
    debug.println("Verify ok!");
    debug.print("Your finger temp id = ");
    debug.println(finger_num, HEX);
    colorWipe(strip.Color(0, 255, 30), 50);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("Identity comfirm");
    delay(800);

    analogWrite(BuzzerPin, 128);
    delay(100);
    analogWrite(BuzzerPin, 0);
    delay(100);
    analogWrite(BuzzerPin, 128);
    delay(100);
    analogWrite(BuzzerPin, 0);
    delay(100);

    for (pos = 0; pos <= 90; pos += 1) {
      myservo.write(pos);
      delay(15);
    }
    while (1) {
      //      pinMode(buttonPin, INPUT);
      buttonState = digitalRead(buttonPin);
      u8x8.setFont(u8x8_font_chroma48medium8_r);
      u8x8.setCursor(0, 3);
      u8x8.print("Please close    ");
      Serial.println(pos);
      Serial.println(buttonState);
      if (buttonState == LOW && pos == 91) {
        for (pos = 91; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
          u8x8.setFont(u8x8_font_chroma48medium8_r);
          u8x8.setCursor(0, 3);
          u8x8.print("Lock closing    ");
          myservo.write(pos);              // tell servo to go to position in variable 'pos'
          delay(15);                       // waits 15ms for the servo to reach the position
        }
        colorWipe(strip.Color(255, 0, 0), 50);
        break;
      }
    }
  }

  else {
    colorWipe(strip.Color(255, 0, 0), 50);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print(" Identity deny ");
    //    myservo.write(0);
    delay(200);

  analogWrite(BuzzerPin, 250);
  delay(2000);
    analogWrite(BuzzerPin, 0);
  delay(100);

    u8x8.setCursor(0, 3);
    u8x8.print("  Please retry  ");
    delay(1500);
  }
}

void colorWipe(uint32_t c, uint8_t wait) {
  for (uint16_t i = 0; i < strip.numPixels(); i++) {
    strip.setPixelColor(i, c);
    strip.show();
    delay(70);
  }
}
```

### Proyecto 4 - Base de Expansión Seeed Studio para XIAO - mjolnir

**Descripción General**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/mjolnir/humer1.png" /></div>

Este martillo simula a Mjolnir, necesitas registrar tu huella dactilar en este dispositivo para convertirte en su maestro. El martillo necesita un imán para adherirse al Grove - electroimán hasta que su maestro lo desbloquee mediante huella dactilar, entonces el martillo se puede llevar.

**Componentes requeridos**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Base de Expansión Seeed Studio para XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - Escáner/Sensor de Huellas Dactilares Capacitivo**](https://www.hackster.io/products/buy/81052?s=BAhJIhMzNzQxMDUsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - Electroimán**](https://www.hackster.io/products/buy/32769?s=BAhJIhMzNzQxMDUsUHJvamVjdAY6BkVG%0A)

**Conexión de Hardware**

Por favor conecta la placa de expansión y los módulos requeridos con cable Grove, conecta el módulo Grove electroimán al puerto D0, y conecta el módulo de huellas dactilares al puerto I2C.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/mjolnir/66666.png" /></div>

**Instrucciones de Arduino**

**Paso 1**. Sigue la imagen de conexión para conectar todos los sensores en la placa.

**Paso 2**. Descarga el [**IDE de Arduino**](https://www.arduino.cc/en/Main/software)

**Paso 3**. Instala las librerías [**u8g2**](https://github.com/olikraus/U8g2_Arduino) y [**Seeed_Arduino_KCT202**](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202), esta es la guía [**cómo instalar la librería**](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/).

**Paso 4**. Copia el código y pégalo en el IDE de Arduino, luego súbelo.

**Código**

```cpp
#include <U8x8lib.h>
#include "ATSerial.h"
#include "Protocol.h"
#include "KCT202.h"

#define debug SerialUSB
#define uart  Serial1
FingerPrint_KCT202<Uart, Serial_> kct202;

Protocol_oprt oprt;
uint8_t err_code = 0;
uint8_t param[10];
uint32_t param_len;

int Electromagnet = 0;

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

// the setup routine runs once when you press reset:
void setup() {
  // initialize the digital pin as an output.

  u8x8.begin();
  u8x8.setFlipMode(0);
  debug.begin(115200);
  pinMode(Electromagnet, OUTPUT);
  digitalWrite(Electromagnet, HIGH);  // turn the Electromagnet on (HIGH is the voltage level)
  kct202.begin(uart, debug);
  kct202.autoRegisterFingerPrint(1, 4, LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP | OVERRIDE_CURR_FINGER_PRINT);
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 3);
  u8x8.print("finger recording");
  if (0 == kct202.getRegisterResponAndparse()) {
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("    be ready    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 3 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 2 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 1 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   Registered");
    delay(800);
  }

}

  // the loop routine runs over and over again forever:
  void loop() {

    uint16_t finger_num = 0;
    kct202.autoVerifyFingerPrint(CHECK_ALL_FINGER_TEMP, LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print(" Please verify  ");

    if (0 == kct202.getVerifyResponAndparse(finger_num)) {
      u8x8.setFont(u8x8_font_chroma48medium8_r);
      u8x8.setCursor(0, 3);
      u8x8.print("Identity comfirm");
      delay(800);
      digitalWrite(Electromagnet, LOW);  // turn the Electromagnet on (HIGH is the voltage level)
      delay(5000);
      digitalWrite(Electromagnet, HIGH);
    }

    else {
      u8x8.setFont(u8x8_font_chroma48medium8_r);
      u8x8.setCursor(0, 3);
      u8x8.print(" Identity deny ");
      //    myservo.write(0);
      delay(200);

      u8x8.setCursor(0, 3);
      u8x8.print("  Please retry  ");
      delay(1500);
      digitalWrite(Electromagnet, HIGH);  // turn the Electromagnet on (HIGH is the voltage level)

    }
  }
```

### Proyecto 5 - Centro de Sensores de Calidad del Aire - Base de Expansión Seeed Studio para XIAO

**Descripción General**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Air_Quality_Sensor_Hub/environment_detect_g.gif" /></div>

Este es un dispositivo de detección ambiental para recopilar PM2.5, PM10, temperatura, humedad, CO2 y partículas de polvo a través del Grove - Sensor Láser PM2.5, Grove - Sensor de CO2, Temperatura y Humedad y Grove - Sensor de Polvo respectivamente.

**Componentes requeridos**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Base de Expansión Seeed Studio para XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - Sensor de CO2, Temperatura y Humedad para Arduino (SCD30) - 3 en 1**](https://www.hackster.io/products/buy/80471?s=BAhJIhMzNzE2NzQsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - Sensor Láser de Polvo PM2.5 - Compatible con Arduino - HM3301**](https://www.hackster.io/products/buy/80472?s=BAhJIhMzNzE2NzQsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - Sensor de Polvo（PPD42NS）**](https://www.hackster.io/products/buy/30140?s=BAhJIhMzNzE2NzQsUHJvamVjdAY6BkVG%0A)

**Conexión de Hardware**

Por favor conecta cada sensor como se muestra en el diagrama. Conecta el sensor de CO2 y el sensor PM2.5 a dos puertos I2C respectivamente, y conecta el sensor de polvo al puerto UART.

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Air_Quality_Sensor_Hub/environment_detect_g.png" /></div>

**Instrucciones de Arduino**

**Paso 1**. Sigue la imagen de conexión para conectar todos los sensores en la placa.

**Paso 2**. Descarga el [**IDE de Arduino**](https://www.arduino.cc/en/Main/software)

**Paso 3**. Instala las librerías [**u8g2**](https://github.com/olikraus/U8g2_Arduino), [**Seeed_PM2_5_sensor_HM3301**](https://github.com/Seeed-Studio/Seeed_PM2_5_sensor_HM3301) y [**Seeed_SCD30**](https://github.com/Seeed-Studio/Seeed_SCD30), esta es la guía de [**cómo instalar la librería**](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/).

**Paso 4**. Copia el código y pégalo en el IDE de Arduino, luego súbelo.

**Código**

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <Seeed_HM330X.h>
#include "SCD30.h"

#define SERIAL_OUTPUT SerialUSB
#define SERIAL SerialUSB

int pin = 7;
unsigned long duration;
unsigned long starttime;
unsigned long sampletime_ms = 5000;//sampe 30s ;
unsigned long lowpulseoccupancy = 0;
float ratio = 0;
float concentration = 0;

const int buttonPin = 1;
int buttonState = 0;
int memu = 0;

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);
HM330X sensor;
uint8_t buf[30];

const char* str[] = {"sensor num: ", "PM1.0 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",
                     "PM2.5 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",
                     "PM10 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",
                     "PM1.0 concentration(Atmospheric environment,unit:ug/m3): ",
                     "PM2.5 concentration(Atmospheric environment,unit:ug/m3): ",
                     "PM10 concentration(Atmospheric environment,unit:ug/m3): ",
                    };


///////////////////////////////////////////////////////////////////
//PM2.5 concentration(Atmospheric environment,unit:ug/m3): value
///////////////////////////////////////////////////////////////////
HM330XErrorCode print_result(const char* str, uint16_t value) {
  if (NULL == str) {
    return ERROR_PARAM;
  }
  //  SERIAL_OUTPUT.print(str);
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("PM2.5: ");
  u8x8.setCursor(7, 0);
  u8x8.print(value);
  u8x8.setCursor(11, 0);
  u8x8.print("ug/m");
  Serial.println(value);
  return NO_ERROR;
}

HM330XErrorCode print_result_1(const char* str, uint16_t value) {
  if (NULL == str) {
    return ERROR_PARAM;
  }
  //  SERIAL_OUTPUT.print(str);
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("PM10: ");
  u8x8.setCursor(7, 0);
  u8x8.print(value);
  u8x8.setCursor(11, 0);
  u8x8.print("ug/m");
  Serial.println(value);
  return NO_ERROR;
}

/*parse buf with 29 uint8_t-data*/
HM330XErrorCode parse_result(uint8_t* data) {
  uint16_t value = 0;
  if (NULL == data) {
    return ERROR_PARAM;
  }
  value = (uint16_t) data[6 * 2] << 8 | data[6 * 2 + 1];
  print_result(str[6 - 1], value);
  return NO_ERROR;
}


HM330XErrorCode parse_result2(uint8_t* data) {
  uint16_t value = 0;
  if (NULL == data) {
    return ERROR_PARAM;
  }
  value = (uint16_t) data[7 * 2] << 8 | data[7 * 2 + 1];
  print_result_1(str[7 - 1], value);
  return NO_ERROR;
}

////////////////////////////////////////////////////////////////////

/*30s*/
void setup() {
  Serial.begin(115200);
  Wire.begin();
  u8x8.begin();
  u8x8.setFlipMode(0);
  scd30.initialize();
  pinMode(pin, INPUT);
  pinMode(buttonPin, INPUT_PULLUP);
  starttime = millis();//get the current time;

}

void loop() {
  float result[3] = {0};
  duration = pulseIn(pin, LOW);
  lowpulseoccupancy = lowpulseoccupancy + duration;

  buttonState = digitalRead(buttonPin);

  if (buttonState == LOW) {
    memu++;
    delay(15);
    if (memu == 2) {
      memu = 0;
    }
  }
  Serial.println(memu);

  if (scd30.isAvailable() && memu == 0) {
    scd30.getCarbonDioxideConcentration(result);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("CO2: ");
    u8x8.setCursor(5, 3);
    u8x8.print(result[0]);
    u8x8.setCursor(12, 3);
    u8x8.print("pmm");
    delay(1000);
  }

  if (sensor.read_sensor_value(buf, 29) && memu == 0) {
    SERIAL_OUTPUT.println("HM330X read result failed!!!");
  }
  if(memu == 0){
  parse_result(buf);
  }

  if ((millis() - starttime) > sampletime_ms  && memu == 0) {
    ratio = lowpulseoccupancy / (sampletime_ms * 10.0); // Integer percentage 0=>100
    concentration = 1.1 * pow(ratio, 3) - 3.8 * pow(ratio, 2) + 520 * ratio + 0.62; // using spec sheet curve

    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 6);
    u8x8.print("Dust: ");

    u8x8.setCursor(6, 6);
    u8x8.print(concentration);

    u8x8.setCursor(12, 6);
    u8x8.print("pcs");

    //    Serial.println(concentration);
    lowpulseoccupancy = 0;
    starttime = millis();
  }


  if (scd30.isAvailable() && memu == 1) {
    scd30.getCarbonDioxideConcentration(result);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("Temp: ");
    u8x8.setCursor(6, 3);
    u8x8.print(result[1]);
    u8x8.setCursor(10, 3);
    u8x8.print(" C   ");

    u8x8.setCursor(0, 6);
    u8x8.print("Humi: ");
    u8x8.setCursor(5, 6);
    u8x8.print(result[2]);
    u8x8.setCursor(8, 6);
    u8x8.print("  %     ");

    delay(1000);
  }

  if (sensor.read_sensor_value(buf, 29) && memu == 1) {
    SERIAL_OUTPUT.println("HM330X read result failed!!!");
  }
  if(memu == 1){
  parse_result2(buf);
  }
}
```

### Proyecto 6 - Base de Expansión Seeed Studio para XIAO - Frecuencia Cardíaca

**Descripción General**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Heartrate_Monitor_Watch/heartRate.gif" /></div>

Este proyecto simple y económico está basado en la Base de Expansión Seeed Studio para XIAO para reportar la frecuencia cardíaca.
El dispositivo utilizado tiene una interfaz de dos cables I2C y por lo tanto mantiene el cableado al mínimo.

**Componentes requeridos**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Base de Expansión Seeed Studio para XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - Sensor de Frecuencia Cardíaca con Clip para Dedo**](https://www.hackster.io/products/buy/80359?s=BAhJIhMzNzExNzMsUHJvamVjdAY6BkVG%0A)

**Conexión de Hardware**

Como se muestra en la figura a continuación, conecta el sensor de frecuencia cardíaca a la interfaz I2C de la placa de expansión XIAO.

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Heartrate_Monitor_Watch/heart_detect.png" /></div>

**Instrucciones de Arduino**

**Paso 1**. Sigue la imagen de conexión para conectar todos los sensores en la placa.

**Paso 2**. Descarga el [**IDE de Arduino**](https://www.arduino.cc/en/Main/software)

**Paso 3**. Instala la librería [**u8g2**](https://github.com/olikraus/U8g2_Arduino), esta es la guía de [**cómo instalar la librería**](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/).

**Paso 4**. Copia el código y pégalo en el IDE de Arduino, luego súbelo.

**Código**

```cpp
#include <Arduino.h>
#include <U8x8lib.h>

#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

void setup() {
  Serial.begin(9600);
  Serial.println("heart rate sensor:");

  u8x8.begin();
  u8x8.setFlipMode(1);
  Wire.begin();
}
void loop() {
  Wire.requestFrom(0xA0 >> 1, 1);    // request 1 bytes from slave device
  while (Wire.available()) {         // slave may send less than requested
    unsigned char c = Wire.read();   // receive heart rate value (a byte)
    u8x8.setFont(u8x8_font_chroma48medium8_r);
//    u8x8.setCursor(0, 3);
//    u8x8.print("blood detecting ");
//    delay(10000);

    u8x8.setCursor(0, 3);
    u8x8.print("HeartRate: ");
    u8x8.setCursor(10, 3);
    u8x8.print(c);
    u8x8.setCursor(13, 3);
    u8x8.print("bpm");
    Serial.println(c);

  }
  delay(500);
}
```

## Recursos

- **[PDF]**[**ETA1038**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/ETA1038.pdf)
- **[PDF]**[**ETA3410**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/ETA3410.pdf)
- **[PDF]**[**ETA6003**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/ETA6003.pdf)
- **[PDF]**[**PCF8563T**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/PCF8563T.pdf)
- **[PDF]**[**Base de Expansión Seeed Studio para XIAO_v1.0_SCH_200824**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/Seeeduino%20XIAO%20Expansion%20board_v1.0_SCH_200824.pdf)
- **[SCH]**[**Base de Expansión Seeed Studio para XIAO_v1.0_200824**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/Seeeduino%20XIAO%20Expansion%20board_v1.0_200824.sch)
- **[BRD]**[**Base de Expansión Seeed Studio para XIAO_v1.0_200824**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/Seeeduino%20XIAO%20Expansion%20board_v1.0_200824.brd)

## FAQ

### P1: ¿El PMIC en la placa de expansión XIAO proporciona energía en los pines de 5V?

El PMIC no proporciona energía; los 5V provienen directamente del USB. La corriente proporcionada en el pin de 5V es equivalente a la corriente disponible desde la conexión USB.

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
