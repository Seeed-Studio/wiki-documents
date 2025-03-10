---
description: Seeed Studio XIAO RP2040 with Arduino
title: XIAO RP2040 con Arduino
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /es/XIAO-RP2040-with-Arduino
last_update:
  date: 02/18/2025
  author: Guillermo
---

# **Seeed Studio XIAO RP2040 con Arduino**

Esta es la página donde vamos a conectar el Seeed Studio XIAO RP2040 y programarlo con Arduino. Habrá varios proyectos relacionados con Multiplexación de Pines.

## **Comenzando**

Primero, vamos a conectar el Seeed Studio XIAO RP2040 al computador y cargar un código sencillo desde Arduino para verificar si la placa está funcionando correctamente.

### **Configuración de Hardware**

**Materiales requeridos:**

- Seeed Studio XIAO RP2040 x1
- El PC x1
- Cable USB Tipo-C x1

:::tip
Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes verificar [el soporte USB 3.1 de Seeed para USB tipo C](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::
**Conexión de Hardware:**

- Paso 1. Mantén presionado el botón BOOT y luego conecta el Seeed Studio XIAO RP2040 al PC.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" /></div>

- Paso 2. Si el disco "RPI-RP2" aparece en el PC y el LED de Power en el Seeed Studio XIAO RP2040 está encendido, la conexión está completa.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

### **Configuración de Software**

- **Paso 1.** Descarga e instala la versión más reciente de Arduino IDE según tu sistema operativo.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"target="_blank"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png" /></a></p>

- **Paso 2.** Abre la aplicación Arduino.

- **Paso 3.** Añade el paquete de la placa Seeed Studio XIAO RP2040 a tu Arduino IDE

Ve a **Archivo** > **Preferencias**, y llena el campo **URLs adicionales del gestor de placas** con la siguiente URL:

`https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json`

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/5.png"/></div>

Ve a **Herramientas** > **Placa** > **Gestor de Placas...**, escribe la palabra clave "**RP2040**" en el campo de búsqueda. Selecciona la última versión de "Raspberry Pi Pico/RP2040" e instálala.

:::note Attention

El paquete de la placa **Seeed XIAO RP2040** ya no está disponible, ¡por favor no lo descargues ni lo uses!

Instala el paquete "Raspberry Pi Pico/RP2040", que incluye la placa "Seeed XIAO RP2040".

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/3.png"/></div>
:::

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/2.png"/></div>

- **Paso 4.** Selecciona tu placa y puerto.

- **Paso 5.** Abre el ejemplo Blink navegando a **"Archivo --> Ejemplos --> 01.Básicos --> Blink"**.

<div align="center"><img width ="550" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/select_blink.png"/></div>

**Placa**

Después de instalar el paquete de la placa, ve a **Herramientas -> Placa**, busca "**Seeed Studio XIAO RP2040**" y selecciónala. Ahora hemos terminado de configurar el XIAO RP2040 de Seeed Studio para el Arduino IDE.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/4.png"/></div>

**Puerto**

Ve a Herramientas > Puerto y selecciona el nombre del puerto serial del Seeed Studio XIAO RP2040 conectado. Lo más probable es que sea COM3 o superior (**COM1** y **COM2** generalmente están reservados para puertos seriales de hardware). El puerto serial del XIAO RP2040 conectado generalmente contiene paréntesis con la etiqueta "Seeed Studio XIAO RP2040".

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png"/></div>

- **Paso 6.** Haz clic en el botón **Subir** para cargar el código del ejemplo Blink a la placa.

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl5.png"/></div>

Una vez cargado, deberías ver el LED verde en el pin 25 (USER) de la placa parpadeando una vez por segundo. Si es así, ¡felicitaciones! Esto significa que la conexión ha sido exitosa y ahora puedes explorar más proyectos con el Seeed Studio XIAO RP2040.

:::note
Si la carga del programa de Arduino falla, intenta mantener presionado el botón "BOOT" y luego hacer clic en el botón "CARGAR". En este momento, el Seeed Studio XIAO RP2040 entrará en modo de arranque (tu computadora cargará un disco extraíble) y podrás cargar el programa de Arduino nuevamente.
:::

## **Multiplexación de Pines en el Seeed Studio XIAO RP2040**

El Seeed Studio XIAO RP2040 contiene 11 pines digitales, 4 pines analógicos, 11 pines PWM, 1 interfaz I2C, 1 interfaz UART, 1 interfaz SPI y 1 interfaz de almohadilla de conexión SWD. Vamos a proporcionar tutoriales sobre estas interfaces para hacerlas útiles para tus proyectos.

### **Digital**

Conecta un pulsador al Pin D0 y un LED al Pin 25. Luego, carga el siguiente código para controlar el encendido/apagado del LED utilizando el pulsador.

:::warning
Ten en cuenta que el voltaje de funcionamiento del Seeed Studio XIAO RP2040 es de 3.3V. Si conectas el sensor a 5V incorrectamente, la placa podría no funcionar correctamente.
:::

```cpp
const int buttonPin = D0;     // el número del pin del botón
const int ledPin =  25;       // el número del pin del LED
 
int buttonState = 0;          // variable para leer el estado del botón
 
void setup() {
  // inicializar el pin del LED como salida:
  pinMode(ledPin, OUTPUT);
  // inicializar el pin del botón como entrada:
  pinMode(buttonPin, INPUT);
}
 
void loop() {
  // leer el valor del estado del botón:
  buttonState = digitalRead(buttonPin);
 
  // verificar si el botón está presionado. Si es así, buttonState será HIGH:
  if (buttonState == HIGH) {
    // apagar el LED:
    digitalWrite(ledPin, HIGH);
  } else {
    // encender el LED:
    digitalWrite(ledPin, LOW);
  }
}
```

### **Analógico**

Conecta un potenciómetro al Pin A0 y un LED al Pin 25. Luego, carga el siguiente código para controlar el intervalo de parpadeo del LED al girar el botón del potenciómetro.

```cpp
const int sensorPin = A0;  // el número del pin del sensor
const int ledPin =  25;     // el número del pin del LED

void setup() {
  // declarar el pin del sensor como entrada:
  pinMode(sensorPin, INPUT);
  // declarar el pin del LED como salida:
  pinMode(ledPin, OUTPUT);
}
 
void loop() {
  // leer el valor del sensor:
  int sensorValue = analogRead(sensorPin);
  // encender el LED:
  digitalWrite(ledPin, HIGH);
  // detener el programa por <sensorValue> milisegundos:
  delay(sensorValue);
  // apagar el LED:
  digitalWrite(ledPin, LOW);
  // detener el programa por <sensorValue> milisegundos:
  delay(sensorValue);
}
```

### **Serial**

Utiliza el pin D6 como el pin TX del UART y el pin D7 como el pin RX del UART para enviar el mensaje "¡Hola Mundo!".

```cpp
void setup() {
    Serial.begin(115200);
    while (!Serial);
}

void loop() {
    Serial.println("¡Hola Mundo!");
    delay(1000);
}
```

### **LED RGB**

El pin 11 es el pin de habilitación del LED RGB. Puedes encender el LED RGB configurando el Pin 11 a alto. Aquí vamos a hacer que parpadee. Primero, necesitamos agregar una librería de terceros.

- **Paso 1.** Abre el Arduino IDE, navega a `Sketch > Incluir Librería > Gestionar Librerías...` para buscar la librería.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Escribe la palabra clave "Adafruit_NeoPixel" en el Administrador de Librerías de Arduino e instala la versión más reciente.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl6.png" /></div>

- **Paso 2.** Copia el código en Arduino y haz clic en el botón **Subir** para cargarlo.

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

Aquí vamos a conectar el Seeed Studio XIAO RP2040 con el [Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) a través de IIC y mostrar "Hello world".

**Conexión**:

Vamos a usar el PIN 5 como el pin SCL y el PIN 4 como el pin SDA.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **Paso 1.** Abre el Arduino IDE, navega a `Sketch > Incluir Librería > Gestionar Librerías...` para buscar la librería.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Escribe la palabra clave "U8G2" en el Administrador de Librerías de Arduino e instala la versión más reciente.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl7.png" /></div>

- **Paso 2.** Copia el código en Arduino y haz clic en el botón **Subir** para cargarlo.

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
 
#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* reloj=*/ SCL, /* datos=*/ SDA, /* reset=*/ U8X8_PIN_NONE);
 
void setup(void) {
  u8g2.begin();  // inicializar la pantalla
}
 
void loop(void) {
  u8g2.clearBuffer();                   // limpiar la memoria interna
  u8g2.setFont(u8g2_font_ncenB08_tr);   // elegir una fuente adecuada
  u8g2.drawStr(0,10,"Hello Wrold!");    // escribir algo en la memoria interna
  u8g2.drawStr(0,30,"Hello Werold!"); 
  u8g2.drawStr(0,50,"Hello Wrrrold!"); 
  u8g2.sendBuffer();                    // transferir la memoria interna a la pantalla
  delay(1000);  
}
```

El resultado será el siguiente:

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png" alt="pir" width={600} height="auto" /></p>

### **SPI**

Aquí vamos a conectar el [Grove - OLED Yellow&Blue Display 0.96 (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html) a través de SPI y mostrar "Hola Mundo". El display OLED admite tanto comunicación IIC como SPI, pero el modo de comunicación predeterminado es IIC. Es esencial [cambiar la función IIC a la función SPI](https://wiki.seeedstudio.com//Grove-OLED-Yellow&Blue-Display-0-96-SSD1315_V1.0/) antes de comenzar.

**Conexión**:

Vamos a usar el PIN 8 como el pin SCK, el PIN 9 como el pin MISO y el PIN 10 como el pin MOSI.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl9.png" /></div>

- **Paso 1.** Abre el Arduino IDE, navega a `Esquema > Incluir Librería > Gestionar Librerías...` para buscar la biblioteca.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Escribe "Adafruit_GFX" en el Administrador de Librerías de Arduino e instala la versión más reciente.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/board10.png" /></div>

Escribe "Adafruit_SSD1306" en el Administrador de Librerías de Arduino e instala la versión más reciente.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl11.png" /></div>

- **Paso 2.** Copia el código en Arduino y haz clic en el botón **Subir** para cargarlo.

```cpp
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128 // Ancho de la pantalla OLED, en píxeles
#define SCREEN_HEIGHT 64 // Altura de la pantalla OLED, en píxeles

// Declaración para la pantalla SSD1306 conectada usando SPI software (caso predeterminado):
#define OLED_MOSI  MOSI   // Conectar SSD1315 D1
#define OLED_CLK  SCK     // Conectar SSD1315 D0
#define OLED_DC  D4      // Conectar SSD1315 D/C
#define OLED_CS  SS      // Conectar SSD1315 CS
#define OLED_RESET  D5   // Conectar SSD1315 RES
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT,
  OLED_MOSI, OLED_CLK, OLED_DC, OLED_RESET, OLED_CS);

void setup() {
  Serial.begin(9600);
  if(!display.begin(SSD1306_SWITCHCAPVCC)) {
    Serial.println(F("Fallo al asignar la pantalla SSD1306"));
    for(;;); // No continuar, bucle infinito
  }
}

void loop() {
  display.clearDisplay(); // Limpiar la pantalla
  display.setTextSize(1);             // Escala de píxeles normal 1:1
  display.setTextColor(SSD1306_WHITE);        // Dibujar texto en blanco
  display.setCursor(0,3);             // Comenzar en la esquina superior izquierda
  display.println(F("Hello"));
  display.setTextSize(2); 
  display.setCursor(0,16);  
  display.println(F("Hello"));
  display.setTextSize(3); 
  display.setCursor(0,38);  
  display.println(F("Hello"));
  display.display();  // Mostrar el texto en pantalla
  delay(2000);        // Esperar 2 segundos
}
```

Los resultados se muestran a continuación:

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png" alt="pir" width={600} height="auto" /></p>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
