---
description: Seeed Studio XIAO RP2040 con Arduino
title: Arduino
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /XIAO-RP2040-with-Arduino
last_update:
  date: 1/24/2023
  author: Spencer
createdAt: '2023-01-16'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/es/XIAO-RP2040-with-Arduino/
---

# Seeed Studio XIAO RP2040 con Arduino

Esta es la página en la que vamos a conectar la Seeed Studio XIAO RP2040 y programarla con Arduino. También habrá varios proyectos sobre multiplexación de pines.

## Introducción

Primero, vamos a conectar la Seeed Studio XIAO RP2040 al ordenador y subir un código sencillo desde Arduino para comprobar si la placa funciona correctamente.

### Configuración de hardware

**Materiales necesarios:**

- Seeed Studio XIAO RP2040 x1
- PC x1
- Cable USB tipo C x1

:::tip
Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes comprobar [seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::
**Conexión de hardware:**

- Paso 1. Mantén pulsado el botón BOOT y luego conecta la Seeed Studio XIAO RP2040 al PC.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" /></div>

- Paso 2. Si el disco **RPI-RP2** se muestra en el PC y el LED de encendido de la Seeed Studio XIAO RP2040 se enciende, la conexión está completa.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

### Configuración de software

- **Paso 1.** Descarga e instala la última versión del Arduino IDE según tu sistema operativo

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

- **Paso 2.** Inicia la aplicación Arduino.

- **Paso 3.**  Añade el paquete de placa Seeed Studio XIAO RP2040 a tu Arduino IDE

Ve a **File** > **Preferences**, y rellena **Additional Boards Manager URLs** con la siguiente URL:

```URL
https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json
```

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/5.png"/></div>

Ve a **Tools-> Board-> Boards Manager...**, escribe la palabra clave **arduino-pico** en el cuadro de búsqueda. Selecciona la última versión de **Raspberry Pi Pico/RP2040/RP2350** e instálala.

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/arduino_2.png"/></div>

- **Paso 4.** Selecciona tu placa y puerto. Si el puerto serie no se muestra, entra primero en modo BOOT. Consulta [Configuración de hardware](#Configuración-de-hardware).

- **Paso 5.** Abre el ejemplo Blink navegando a **"File --> Examples --->01.Basics --> Blink"**

<div align="center"><img width ="550" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/select_blink.png"/></div>

**Placa**

Después de instalar el paquete de placa, ve a **Tools-> Board**, busca "**Seeed Studio XIAO RP2040**" y selecciónala. Ahora hemos terminado de configurar la Seeed Studio XIAO RP2040 para Arduino IDE.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/4.png"/></div>

**Puerto**

Ve a Tools > Port y selecciona el nombre del puerto serie de la Seeed Studio XIAO RP2040 conectada. Probablemente será COM3 o superior (**COM1** y **COM2** suelen estar reservados para puertos serie de hardware). El puerto serie de la Seeed Studio XIAO RP2040 conectada suele contener entre paréntesis el texto "Seeed Studio XIAO RP2040".

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png"/></div>

- **Paso 6.** Haz clic en el botón **Upload** para subir el código de ejemplo Blink a la placa.

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl5.png"/></div>

Una vez subido, deberías poder ver que el LED verde (USER) del pin 25 de la placa parpadea una vez por segundo. Si es así, ¡enhorabuena! Esto significa que la conexión se ha realizado correctamente y ahora puedes explorar más proyectos con la Seeed Studio XIAO RP2040.

:::note
Si la carga del programa de Arduino falla, intenta mantener pulsado el botón "BOOT" y luego hacer clic en el botón "RUN". En este punto, la Seeed Studio XIAO RP2040 entrará en modo boot (tu ordenador montará un disco extraíble) y podrás volver a cargar el programa de Arduino.
:::

## Multiplexación de pines en la Seeed Studio XIAO RP2040

La Seeed Studio XIAO RP2040 contiene 11 pines digitales, 4 pines analógicos, 11 pines PWM, 1 interfaz I2C, 1 interfaz UART, 1 interfaz SPI, 1 interfaz de pads de soldadura SWD. Vamos a proporcionar tutoriales sobre estas interfaces para que sean útiles para tus proyectos.

### Digital

Conecta un pulsador al pin D0 y un LED al pin 25. Luego sube el siguiente código para controlar el ENCENDIDO/APAGADO del LED usando el pulsador.

:::warning
Ten en cuenta que el voltaje de funcionamiento de la Seeed Studio XIAO RP2040 es de 3,3 V; si conectas el sensor incorrectamente a 5 V, la placa base puede no funcionar correctamente.
:::

```cpp
const int buttonPin = D0;     // the number of the pushbutton pin
const int ledPin =  25;      // the number of the LED pin

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
    // turn LED off:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED on:
    digitalWrite(ledPin, LOW);
  }
}
```

### Analógico

Conecta un potenciómetro al pin A0 y un LED al pin 25. Luego sube el siguiente código para controlar el intervalo de parpadeo del LED girando la perilla del potenciómetro.

```cpp
const int sensorPin = A0;
const int ledPin =  25; 
void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(sensorPin, INPUT);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // read the value from the sensor:
int sensorValue = analogRead(sensorPin);
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

### Serie

Utiliza el pin D6 como pin TX de UART y el pin D7 como pin RX de UART para enviar el mensaje "Hello World!"

```cpp
void setup() {
    Serial.begin(115200);
    while (!Serial);
}

void loop() {
    Serial.println("Hello,World");
    delay(1000);
}
```

### LEDs indicadores de tres colores

En la XIAO RP2040, junto al indicador de encendido hay tres LEDs discretos de un solo color. GPIO17 controla el LED rojo, GPIO16 controla el LED verde y GPIO25 controla el LED azul. Las definiciones de macros se enumeran a continuación.

```c
#define PIN_LED_R      (17u)
#define PIN_LED_G      (16u)
#define PIN_LED_B      (25u)
```

Código de referencia

```cpp
/*
 * RP2040 RGB LED tutorial
 *
 * LED_R: GPIO17
 * LED_G: GPIO16
 * LED_B: GPIO25
 *
 * This example assumes each LED turns on when its GPIO is HIGH.
 * If your hardware is active-low, swap HIGH and LOW in setLed().
 */


// Turn on one LED at a time and turn the other two LEDs off.
void setLed(uint8_t pin)
{
  digitalWrite(PIN_LED_R, LOW);
  digitalWrite(PIN_LED_G, LOW);
  digitalWrite(PIN_LED_B, LOW);

  digitalWrite(pin, HIGH);
}

void setup()
{
  // Configure the three LED GPIO pins as outputs.
  pinMode(PIN_LED_R, OUTPUT);
  pinMode(PIN_LED_G, OUTPUT);
  pinMode(PIN_LED_B, OUTPUT);

  // Start with all LEDs turned off.
  digitalWrite(PIN_LED_R, LOW);
  digitalWrite(PIN_LED_G, LOW);
  digitalWrite(PIN_LED_B, LOW);
}

void loop()
{
  // Show red, green, and blue in sequence.
  setLed(PIN_LED_R);
  delay(500);

  setLed(PIN_LED_G);
  delay(500);

  setLed(PIN_LED_B);
  delay(500);
}
```

- Los LEDs se encenderán secuencialmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/third_led.gif" style={{width:400, height:'auto'}}/></div><br />

### LED RGB

:::caution

Los LEDs RGB pueden causar fatiga ocular o lesiones si se utilizan con un brillo excesivo; se recomienda una protección ocular adecuada.

:::

En la serie XIAO RP2040, GPIO11 (NEOPIXEL_POWER) actúa como pin de habilitación, mientras que GPIO12 (PIN_NEOPIXEL) controla la salida de color RGB. Sigue los pasos siguientes para su uso.

:::tip

La XIAO RP2040 está equipada con un LED RGB SMD de lente redonda, mientras que la XIAO RP2040 Plus utiliza un LED RGB SMD de parte superior plana.

:::

Primero, necesitamos añadir una biblioteca de terceros.

- **Paso 1.** Abre Arduino IDE, ve a `Sketch > Include Library > Manage Libraries...` para buscar la biblioteca.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Escribe la palabra clave **Adafruit_NeoPixel** en el Arduino Library Manager e instala la última versión.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl6.png" /></div>

- **Paso 2.** Copia el código en Arduino y haz clic en el botón **Upload** para subirlo.

```cpp
#include <Adafruit_NeoPixel.h>

#define NUMPIXELS 1

Adafruit_NeoPixel pixels(NUMPIXELS, PIN_NEOPIXEL, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin();

  pinMode(NEOPIXEL_POWER, OUTPUT);
  digitalWrite(NEOPIXEL_POWER, HIGH);

// Set overall brightness (0~255)
// Recommended eye-friendly range: 10~50
  pixels.setBrightness(50);
}


void loop() {

  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(15, 25, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(103, 25, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 242, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 23, 23));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(12, 66, 101));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.show();
  delay(500);
}
```

El LED RGB mostrará un color arcoíris.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/rgb_led.gif" /></div>

### I2C

Aquí vamos a conectar el Seeed Studio XIAO RP2040 con [Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) a través de IIC y mostrar "Hello world".

**Conexión**:

Vamos a usar el PIN 5 como pin SCL y el PIN 4 como pin SDA.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **Paso 1.** Abre Arduino IDE, ve a `Sketch > Include Library > Manage Libraries...` para buscar la biblioteca.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Escribe la palabra clave "U8G2" en el Arduino Library Manager e instala la última versión.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl7.png" /></div>

- **Paso 2.** Copia el código en Arduino y haz clic en el botón **Upload** para cargarlo.

```cpp
#include <Arduino.h>
#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.clearBuffer();                   // clear the internal memory
  u8g2.setFont(u8g2_font_ncenB08_tr);   // choose a suitable font
  u8g2.drawStr(0,10,"Hello Wrold!");    // write something to the internal memory
  u8g2.drawStr(0,30,"Hello Werold!"); 
  u8g2.drawStr(0,50,"Hello Wrrrold!"); 
  u8g2.sendBuffer();                    // transfer internal memory to the display
  delay(1000);  
}
```

Los resultados se muestran como:

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png" alt="pir" width={600} height="auto" /></p>

### SPI

Aquí vamos a conectar [Grove - OLED Yellow&Blue Display 0.96 (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html) a través de SPI y mostrar "Hello World". La pantalla OLED admite comunicación tanto IIC como SPI y, sin embargo, el modo de comunicación predeterminado es IIC. Es esencial [cambiar la función IIC a la función SPI](https://wiki.seeedstudio.com/es/Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0/) antes de comenzar.

**Conexión**:

Vamos a usar el PIN 8 como pin SCK, el PIN 9 como pin MISO y el PIN10 como pin MOSI.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl9.png" /></div>

- **Paso 1.** Abre Arduino IDE, ve a `Sketch > Include Library > Manage Libraries...` para buscar la biblioteca.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Escribe la palabra clave "Adafruit_GFX" en el Arduino Library Manager e instala la última versión.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/board10.png" /></div>

Escribe la palabra clave "Adafruit_SSD1306" en el Arduino Library Manager e instala la última versión.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl11.png" /></div>

- **Paso 2.** Copia el código en Arduino y haz clic en el botón **Upload** para cargarlo.

```cpp
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 64 // OLED display height, in pixels

// Declaration for SSD1306 display connected using software SPI (default case):
#define OLED_MOSI  MOSI   //Connect SSD1315 D1
#define OLED_CLK  SCK     //Connect SSD1315 D0
#define OLED_DC  D4      //Connect SSD1315 D/C
#define OLED_CS  SS      //Connect SSD1315 CS
#define OLED_RESET  D5   //Connect SSD1315 RES
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT,
  OLED_MOSI, OLED_CLK, OLED_DC, OLED_RESET, OLED_CS);

void setup() {
  Serial.begin(9600);
  if(!display.begin(SSD1306_SWITCHCAPVCC)) {
    Serial.println(F("SSD1306 allocation failed"));
    for(;;); // Don't proceed, loop forever
  }
}

void loop() {
  display.clearDisplay();
  display.setTextSize(1);             // Normal 1:1 pixel scale
  display.setTextColor(SSD1306_WHITE);        // Draw white text
  display.setCursor(0,3);             // Start at top-left corner
  display.println(F("Hello"));
  display.setTextSize(2); 
  display.setCursor(0,16);  
  display.println(F("Hello"));
  display.setTextSize(3); 
  display.setCursor(0,38);  
  display.println(F("Hello"));
  display.display();
  delay(2000);
}
```

Los resultados se muestran a continuación:

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png" alt="pir" width={600} height="auto" /></p>

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
