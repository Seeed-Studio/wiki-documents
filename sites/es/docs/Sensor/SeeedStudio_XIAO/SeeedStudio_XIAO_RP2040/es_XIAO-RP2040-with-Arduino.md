---
description: Seeed Studio XIAO RP2040 con Arduino
title: Arduino
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /es/XIAO-RP2040-with-Arduino
last_update:
  date: 1/24/2023
  author: Spencer
---

# **Seeed Studio XIAO RP2040 con Arduino**

Esta es la página donde vamos a conectar el Seeed Studio XIAO RP2040 y programar con Arduino. También habrá varios proyectos sobre Multiplexación de Pines.

## **Primeros Pasos**

Primero, vamos a conectar el Seeed Studio XIAO RP2040 a la computadora y cargar un código simple desde Arduino para verificar si la placa está funcionando bien.

### **Configuración del Hardware**

**Materiales requeridos:**

- Seeed Studio XIAO RP2040 x1
- La PC x1
- Cable USB Tipo-C x1

:::tip
Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable usb o no sabes si tu cable usb puede transmitir datos, puedes verificar [seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::
**Conexión del Hardware:**

- Paso 1. Mantén presionado el botón BOOT y luego conecta el Seeed Studio XIAO RP2040 a la PC.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" /></div>

- Paso 2. Si el disco "RPI-RP2" se muestra en la PC y el LED de Energía en el Seeed Studio XIAO RP2040 se enciende, la conexión está completa.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

### **Configuración del Software**

- **Paso 1.** Descarga e Instala la última versión del IDE de Arduino según tu sistema operativo

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"target="_blank"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png" /></a></p>

- **Paso 2.** Inicia la aplicación Arduino.

- **Paso 3.**  Añade el paquete de placa Seeed Studio XIAO RP2040 a tu IDE de Arduino

Navega a **Archivo** > **Preferencias**, y completa **URLs Adicionales del Gestor de Placas** con la url de abajo:

`https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json`

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/5.png"/></div>

Navega a **Herramientas-> Placa-> Gestor de Placas...**, escribe la palabra clave "**RP2040**" en el campo de búsqueda. Selecciona la última versión de "Raspberry Pi Pico/RP2040" e instálala.

:::note Atención

El paquete integrado llamado **Seeed XIAO RP2040 ya no está disponible**, ¡por favor no lo descargues ni uses!

Instala el paquete "Raspberry Pi Pico/RP2040", que incluye la placa "Seeed XIAO RP2040".

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/3.png"/></div>
:::

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/2.png"/></div>

- **Paso 4.** Selecciona tu placa y puerto.

- **Paso 5.** Abre el ejemplo Blink navegando **"Archivo --> Ejemplos --->01.Basics --> Blink"**

<div align="center"><img width ="550" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/select_blink.png"/></div>

**Placa**

Después de instalar el paquete de placa, navega a **Herramientas-> Placa**, encuentra "**Seeed Studio XIAO RP2040**" y selecciónala. Ahora hemos terminado de configurar el Seeed Studio XIAO RP2040 para el IDE de Arduino.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/4.png"/></div>

**Puerto**

Navega a Herramientas > Puerto y selecciona el nombre del puerto serie del Seeed Studio XIAO RP2040 conectado. Es probable que sea COM3 o superior (**COM1** y **COM2** usualmente están reservados para puertos serie de hardware). El puerto serie del Seeed Studio XIAO RP2040 conectado usualmente contiene paréntesis que dicen "Seeed Studio XIAO RP2040".

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png"/></div>

- **Paso 6.** Haz clic en el botón **Cargar** para cargar el código de ejemplo Blink a la placa.

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl5.png"/></div>

Una vez cargado, deberías poder ver el LED Verde (USUARIO) del pin 25 en la placa parpadear una vez por segundo. Si es así, ¡felicitaciones! Esto significa que la conexión es exitosa y ahora puedes explorar más proyectos con el Seeed Studio XIAO RP2040!

:::note
Si la carga del programa Arduino falla, intenta mantener presionado el botón "BOOT" y luego hacer clic en el botón "RUN". En este punto, el Seeed Studio XIAO RP2040 entrará en modo de arranque (tu computadora cargará un disco extraíble), y podrás cargar el programa Arduino nuevamente.
:::

## **Multiplexación de Pines en el Seeed Studio XIAO RP2040**

El Seeed Studio XIAO RP2040 contiene 11 pines digitales, 4 pines analógicos, 11 pines PWM, 1 interfaz I2C, 1 interfaz UART, 1 interfaz SPI, 1 interfaz de pad de enlace SWD. Vamos a proporcionar los tutoriales sobre estas interfaces para que sean útiles en tus proyectos.

### **Digital**

Conecta un pulsador al Pin D0 y un LED al Pin 25. Luego sube el siguiente código para controlar el ENCENDIDO/APAGADO del LED usando el pulsador.

:::warning
Ten en cuenta que el voltaje de operación del Seeed Studio XIAO RP2040 es de 3.3V, si conectas el sensor a 5V incorrectamente, la placa madre puede no funcionar correctamente.
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

### **Analógico**

Conecta un potenciómetro al Pin A0 y un LED al Pin 25. Luego sube el siguiente código para controlar el intervalo de parpadeo del LED girando la perilla del potenciómetro.

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

### **Serial**

Usa el pin D6 como pin TX del UART y el pin D7 como pin RX del UART para enviar el mensaje "Hello World!"

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

### **LED RGB**

El Pin 11 es el pin de habilitación del LED RGB. Puedes encender el LED RGB configurando el Pin 11 en alto. Aquí vamos a hacer que parpadee. Primero, necesitamos añadir una biblioteca de terceros.

- **Paso 1.** Abre Arduino IDE, navega a `Sketch > Include Library > Manage Libraries...` para buscar la biblioteca.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Escribe la palabra clave "Adafruit_NeoPixel" library en el Administrador de bibliotecas de Arduino e instala la versión más reciente.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl6.png" /></div>

- **Paso 2.** Copia los códigos a Arduino y haz clic en el botón **Upload** para cargar.

```cpp
#include <Adafruit_NeoPixel.h>

int Power = 11;
int PIN  = 12;
#define NUMPIXELS 1

Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin();
  pinMode(Power,OUTPUT);
  digitalWrite(Power, HIGH);

}

void loop() { 
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(15, 25, 205));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(103, 25, 205));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 242, 205));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 23, 23));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(12, 66, 101));
  delay(400);
  pixels.show();
  delay(500);

}
```

El LED RGB mostrará colores del arcoíris.

### **I2C**

Aquí vamos a conectar el Seeed Studio XIAO RP2040 con [Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) a través de IIC y mostrar "Hello world".

**Conexión**:

Vamos a usar el PIN 5 como pin SCL y el PIN 4 como pin SDA.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **Paso 1.** Abre Arduino IDE, navega a `Sketch > Include Library > Manage Libraries...` para buscar la biblioteca.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Escribe la palabra clave "U8G2" library en el Administrador de bibliotecas de Arduino e instala la versión más reciente.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl7.png" /></div>

- **Paso 2.** Copia los códigos a Arduino y haz clic en el botón **Upload** para cargar.

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

### **SPI**

Aquí vamos a conectar [Grove - OLED Yellow&Blue Display 0.96 (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html) a través de SPI y mostrar "Hello World". La pantalla OLED soporta comunicación tanto IIC como SPI y sin embargo el modo de comunicación predeterminado es IIC. Es esencial [cambiar la función IIC a la función SPI](https://wiki.seeedstudio.com/es//Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0/) antes de comenzar.

**Conexión**:

Vamos a usar el PIN 8 como pin SCK, el PIN 9 como pin MISO y el PIN10 como pin MOSI.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl9.png" /></div>

- **Paso 1.** Abre Arduino IDE, navega a `Sketch > Include Library > Manage Libraries...` para buscar la librería.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Escribe la palabra clave "Adafruit_GFX" library en el Administrador de librerías de Arduino e instala la versión más reciente.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/board10.png" /></div>

Escribe la palabra clave "Adafruit_SSD1306" library en el Administrador de librerías de Arduino e instala la versión más reciente.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl11.png" /></div>

- **Paso 2.** Copia los códigos a Arduino y haz clic en el botón **Upload** para cargar.

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

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png" alt="pir" width={600} height="auto" /></p>

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
