---
description: Multiplexación de pines con Seeed Studio XIAO RA4M1.
title: Multiplexación de pines con Seeed Studio XIAO RA4M1
keywords:
- ra4m1
- xiao
- pin multiple
image: https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/1-102010551-Seeed-Studio-XIAO-RA4M1.jpg
sidebar_position: 1
slug: /es/xiao_ra4m1_pin_multiplexing
last_update:
  date: 08/15/2024
  author: Jason
---

## Digital

El XIAO RA4M1 tiene hasta 11 pines GPIO regulares, 6 pines analógicos y 8 puertos IO reutilizables detrás de él. En este ejemplo, usaremos el XIAO RA4M1, la placa de expansión XIAO y un relé para demostrar cómo usar diferentes pines digitales para lectura y escritura.

### Preparación del Hardware

<table align="center">
  <tr>
      <th>Seeed Studio XIAO R4M1</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Relay</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>


Por favor, instale el XIAO RA4M1 o Sense en la placa de expansión, y conecte el relé a la interfaz **A0/D0** de la placa de expansión mediante un cable Grove. Finalmente, conecte el XIAO a la computadora mediante un cable USB-C.

### Implementación del Software

En este ejemplo, implementaremos el control del estado de encendido/apagado de un relé usando un botón conectado a la placa de expansión XIAO. Cuando se presiona el botón, el relé se enciende, y cuando se suelta el botón, el relé se apaga.

```c
const int buttonPin = D1;     // the number of the pushbutton pin
int buttonState = 0;          // variable for reading the pushbutton status
const int relayPin = D0;

void setup() {
  // initialize the Relay pin as an output:
  pinMode(relayPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn Relay on:
    digitalWrite(relayPin, HIGH);
  } else {
    // turn Relay off:
    digitalWrite(relayPin, LOW);
  }
}
```

Si todo va bien, después de cargar el programa, deberías ver el siguiente efecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/31.gif" style={{width:600, height:'auto'}}/></div>

## Digital como PWM

Todos los pines GPIO en XIAO RA4M1 soportan salida PWM. Por lo tanto, puedes usar cualquier pin para generar PWM para ajustar el brillo de las luces, controlar servos y otras funciones.

### Preparación del Hardware

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RA4M1</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Variable Color LED</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED1.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>


Por favor instala XIAO RA4M1 o Sense en la placa de expansión, luego conecta el LED de Color Variable a la interfaz A0/D0 de la placa de expansión usando un cable Grove. Finalmente, conecta XIAO a tu computadora mediante cable USB-C.

### Implementación del Software

En este ejemplo, demostraremos cómo usar la salida PWM para controlar el brillo de una luz.

```cpp
int LED_pin = D0;    // LED connected to digital pin 10

void setup() {
  // declaring LED pin as output
  pinMode(LED_pin, OUTPUT);
}

void loop() {
  // fade in from min to max in increments of 5 points:
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 3) {
    // sets the value (range from 0 to 255):
    analogWrite(LED_pin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }

  // fade out from max to min in increments of 5 points:
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 3) {
    // sets the value (range from 0 to 255):
    analogWrite(LED_pin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }
}
```

Si el programa se ejecuta exitosamente, verás el siguiente efecto de funcionamiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/32.gif" style={{width:600, height:'auto'}}/></div>

## Analógico

La Placa de Desarrollo XIAO RA4M1 tiene hasta 14 bits de ADC para lectura de alta resolución de valores de sensores analógicos, puede ayudarnos a leer valores más precisos. El convertidor analógico-digital (ADC) en una placa de desarrollo XIAO RA4M1. Por defecto, la resolución está configurada a 10 bits, que puede cambiarse tanto a resolución de 12 bits como de 14 bits para mejorar la precisión en las lecturas analógicas.

Datos detallados por precisión del ADC
- 10 bits: 0~1024
- 12 bits: 0~4096
- 14 bits: 0~16383

A continuación, elegiremos dos sensores para reflejar las características del ADC.

### Preparación de Hardware

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RA4M1</th>
      <th>Grove-Variable Color LED</th>
	    <th>Grove-Rotary Angle Sensor </th>
	    <th>Seeed Studio Grove Base for XIAO </th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED1.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>


### Implementación de Software

``` cpp
#define ADC_Bit_Fourteen 14
#define ADC_Bit_Twelve 12
#define ADC_Bit_Ten 10

const int analogInPin = A1;  // Analog input pin that the potentiometer is attached to
const int analogOutPin = 9;  // Analog output pin that the LED is attached to

int sensorValue = 0;  // value read from the pot
int outputValue = 0;  // value output to the PWM (analog out)

void setup() {

  Serial.begin(115200);
  // Ten_Bite_ADC_Config(); // 10bit
  // Twelve_Bite_ADC_Config(); // 12bit
  Fourteen_Bite_ADC_Config(); // 14bit
  
}

void loop() {
  sensorValue = analogRead(analogInPin);
  outputValue = map(sensorValue, 0, 4095, 0, 255);
  analogWrite(analogOutPin, outputValue);

  Serial.print("sensor = ");
  Serial.print(sensorValue);
  Serial.print("\t output = ");
  Serial.println(outputValue);
  delay(100);
}

void Ten_Bite_ADC_Config() {
  analogReadResolution(ADC_Bit_Ten);
}

void Twelve_Bite_ADC_Config() {
  analogReadResolution(ADC_Bit_Twelve);
}

void Fourteen_Bite_ADC_Config() {
  analogReadResolution(ADC_Bit_Fourteen);
}
```

Si todo va bien, después de cargar el programa, deberías ver el siguiente efecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/33.gif" style={{width:650, height:'auto'}}/></div>

## Serial

Al trabajar con Arduino IDE, la comunicación Serial es una parte esencial de muchos proyectos. Para 
usar Serial en Arduino IDE, necesitas comenzar abriendo la ventana del Monitor Serie. Esto se puede hacer haciendo clic en el icono **Monitor Serie** en la barra de herramientas o presionando la tecla de acceso directo **Ctrl+Shift+M**.

### Uso General

Algunas de las funciones Serial comúnmente utilizadas incluyen:

- `Serial.begin()` -- que inicializa la comunicación a una velocidad de baudios especificada; 
- `Serial.print()` -- que envía datos al puerto Serial en un formato legible; 
- `Serial.write()` -- que envía datos binarios al puerto Serial;
- `Serial.available()` -- que verifica si hay algún dato disponible para ser leído desde el puerto Serial; 
- `Serial.read()` -- que lee un solo byte de datos desde el puerto Serial; 
- `Serial.flush()` -- que espera a que se complete la transmisión de datos seriales salientes. 

Al usar estas funciones Serial, puedes enviar y recibir datos entre la placa Arduino y tu computadora, lo que abre muchas posibilidades para crear proyectos interactivos.

Aquí hay un programa de ejemplo:

```c
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

void loop() {
  // send data to the serial port
  Serial.println("Hello World!");

  // read data from the serial port
  if (Serial.available() > 0) {
    // read the incoming byte:
    char incomingByte = Serial.read();
    // print the incoming byte to the serial monitor:
    Serial.print("I received: ");
    Serial.println(incomingByte);
  }
  
  // wait for a second before repeating the loop
  delay(1000);
}
```

### Uso de Serial1

Según los diagramas de pines de XIAO RA4M1 anteriores para parámetros específicos, podemos observar que hay pin TX y pin RX.
Esto es diferente de la comunicación serie, pero el uso también es muy similar, excepto que se necesitan agregar algunos parámetros.
Así que a continuación, usaremos los pines sacados por el chip para comunicación serie.

```c

#define BAUD 115200

void setup() {
    Serial1.begin(BAUD);
}
 
void loop() {
  if(Serial1.available() > 0)
  {
    char incominByte = Serial1.read();
    Serial1.print("I received : ");
    Serial1.println(incominByte);
  }
  delay(1000);
}
```

### Uso de Software Serial

```c
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3); // RX, TX

void setup() {
  // initialize serial communication
  Serial.begin(9600);
  while (!Serial);

  // initialize software serial
  mySerial.begin(9600);
}

void loop() {
  // read data from software serial
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("Received data: ");
    Serial.println(data);
  }

  // write data to software serial
  mySerial.print("Hello World!");

  // wait for a second before repeating the loop
  delay(1000);
}
```

En este programa, primero incluimos la biblioteca `SoftwareSerial.h` para usar el puerto serie por software. Luego, creamos un nuevo objeto SoftwareSerial llamado mySerial usando los pines 2 y 3 como RX y TX, respectivamente.

En la función `setup()`, inicializamos tanto el puerto serie por hardware (`Serial.begin()`) como el puerto serie por software (`mySerial.begin()`).

En la función `loop()`, usamos la función `mySerial.available()` para verificar si hay datos disponibles para leer desde el puerto serie por software. Si los hay, leemos el byte entrante usando la función `mySerial.read()` y lo almacenamos en una variable llamada data. Luego usamos las funciones `Serial.print()` y `Serial.println()` para imprimir "Received data: " seguido del valor de data al puerto serie por hardware.

También usamos la función `mySerial.print()` para escribir "Hello World!" al puerto serie por software. Esto enviará los datos desde el XIAO al dispositivo conectado al puerto serie por software.

Finalmente, agregamos una función `delay()` para esperar un segundo antes de repetir el bucle.

## IIC

XIAO RA4M1 tiene una interfaz I2C que puede usarse para transmisión de datos y análisis de muchos sensores, así como para usar algunas pantallas OLED.

### Preparación del Hardware

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RA4M1</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

La pantalla OLED en la placa de expansión XIAO utiliza el protocolo I2C y está conectada a la interfaz I2C del XIAO a través del circuito I2C en la placa. Por lo tanto, podemos conectar directamente el XIAO a la placa de expansión y programarlo para mostrar contenido en la pantalla.

### Implementación de Software

Este ejemplo presenta cómo usar la pantalla OLED en la Seeed Studio Expansion Base para XIAO RA4M1.

#### Paso 1. Instala el Seeed Studio XIAO RA4M1 en la placa de expansión y luego conecta el cable Type-C.

#### Paso 2. Instala la biblioteca u8g2.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### Paso 3. Copia el código y pégalo en el IDE de Arduino, luego súbelo.

```c
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(1);   // set number from 1 to 3, the screen word will rotary 180
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("i'm XIAO RA4M1");
}
```

En las primeras líneas del código, incluimos las librerías requeridas como Arduino.h, U8x8lib.h, y Wire.h. La librería U8x8lib.h proporciona funciones para controlar la pantalla OLED, y la librería Wire.h proporciona funciones para la comunicación I2C.

En la función `setup()`, inicializamos la pantalla OLED usando la función `u8x8.begin()`. También configuramos el modo de volteo de la pantalla usando la función `u8x8.setFlipMode()` para rotar la pantalla 180 grados.

En la función `loop()`, configuramos la fuente usando la función `u8x8.setFont()` y especificamos la posición del cursor en la pantalla usando la función `u8x8.setCursor()`. Finalmente, usamos la función `u8x8.print()` para mostrar la cadena "Hello World!" en la pantalla OLED.

Si subes un programa al XIAO RA4M1, verás contenido mostrado en la pantalla OLED de la placa de expansión.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/21.png" style={{width:800, height:'auto'}}/></div>

## SPI

El chip RA4M1 integra múltiples periféricos, incluyendo una interfaz SPI que puede usarse para conectar dispositivos SPI externos como memoria flash, pantallas, sensores, y más. El XIAO RA4M1 también soporta modo de transferencia SPI de alta velocidad, que puede alcanzar una tasa máxima de transferencia SPI de 80 MHz, cumpliendo las necesidades de transferencia de datos de la mayoría de dispositivos SPI.

### Preparación de Hardware

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RA4M1</th>
      <th>Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Main-02.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Después de preparar el hardware como se mencionó anteriormente, usa cables puente para conectar la interfaz SPI del XIAO y el OLED. Por favor, consulta el siguiente diagrama para el método de cableado.


### Implementación de Software

A continuación, tomaremos el siguiente programa como ejemplo para introducir cómo usar la interfaz SPI para controlar la pantalla del OLED.

Instala la biblioteca u8g2.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

```c
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
 
U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ D7, /* dc=*/ D4, /* reset=*/ D5);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.firstPage();

  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

En la función `setup()`, se instancia la clase `U8G2_SH1107_128X128_1_4W_HW_SPI` con los argumentos del constructor apropiados que especifican los pines utilizados para chip select (cs), data/command (dc), y reset. Luego, se llama a la función `u8g2.begin()` para inicializar la pantalla.

En la función `loop()`, la pantalla se actualiza con nuevo contenido usando las funciones `u8g2.firstPage()`, `u8g2.setFont()`, y `u8g2.drawStr()`. La función `u8g2.firstPage()` configura el buffer de la pantalla para escritura, mientras que `u8g2.nextPage()` muestra el contenido actualizado. El bucle do-while asegura que el contenido se muestre continuamente hasta que el programa se detenga.

En general, este código demuestra cómo usar la biblioteca U8g2 para controlar una pantalla OLED y mostrar texto en ella.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/15.png" style={{width:700, height:'auto'}}/></div>


## CAN(Placa de Expansión de Bus XIAO CAN)

### Preparación de Hardware

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RA4M1</th>
	    <th>XIAO CAN Bus Expansion Board</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/main.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-CAN-Bus-Breakout-Board-for-XIAO-and-QT-Py-p-5702.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

#### Paso 1. Preparar dos CAN Bus Breakout Board y XIAO RA4M1
#### Paso 2. Insertar estos dos XIAO RA4M1 por separado en CAN Bus Breakout Board
#### Paso 3. Preparar la conexión de línea DuPont

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/36.png" style={{width:400, height:'auto'}}/></div>

### Preparación del Software

Proporcionamos una [biblioteca de Arduino para la placa MCP2515](https://github.com/limengdu/Arduino_CAN_BUS_MCP2515).

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Arduino_CAN_BUS_MCP2515" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

La biblioteca incluye varios ejemplos, incluyendo:

- ***OBDII-PIDs*** - recuperar datos de la interfaz OBD-II
- ***send*** - enviar una trama al bus CAN
- ***recv*** - recibir una trama del bus CAN
- ***set_mask_filter_recv*** - recibir una trama del bus CAN con configuraciones de máscara y filtro

### Implementación del Software

:::tip
No está permitido encender simultáneamente y descargar programas para dos XIAO RA4M1, ya que esto resultará en errores al descargar el puerto serie. Después de descargar uno, desconéctalo, luego enciende el otro XIAO RA4M1 para descargar el programa, y finalmente enciende ambos al mismo tiempo para verificar el mensaje del puerto serie
:::

**Código de Escritura CAN**
```c

/*  send a frame from can bus

    CAN Baudrate,
    
    #define CAN_5KBPS           1
    #define CAN_10KBPS          2
    #define CAN_20KBPS          3
    #define CAN_25KBPS          4 
    #define CAN_31K25BPS        5
    #define CAN_33KBPS          6
    #define CAN_40KBPS          7
    #define CAN_50KBPS          8
    #define CAN_80KBPS          9
    #define CAN_83K3BPS         10
    #define CAN_95KBPS          11
    #define CAN_100KBPS         12
    #define CAN_125KBPS         13
    #define CAN_200KBPS         14
    #define CAN_250KBPS         15
    #define CAN_500KBPS         16
    #define CAN_666KBPS         17
    #define CAN_1000KBPS        18
*/
   
#include <mcp_can.h>
#include <SPI.h>

/* Please modify SPI_CS_PIN to adapt to your board.

   CANBed V1        - 17
   CANBed M0        - 3
   CAN Bus Shield   - 9
   CANBed 2040      - 9
   CANBed Dual      - 9
   OBD-2G Dev Kit   - 9
   OBD-II GPS Kit   - 9
   Hud Dev Kit      - 9

   Seeed Studio CAN-Bus Breakout Board for XIAO and QT Py - D7
*/

#define SPI_CS_PIN  D7 

MCP_CAN CAN(SPI_CS_PIN);                                    // Set CS pin

void setup()
{
    Serial.begin(115200);
    while(!Serial);
    
    // below code need for OBD-II GPS Dev Kit Atemga32U4 version
    // pinMode(A3, OUTPUT);
    // digitalWrite(A3, HIGH);
    
    // below code need for OBD-II GPS Dev Kit RP2040 version
    // pinMode(12, OUTPUT);
    // digitalWrite(12, HIGH);
    
    while (CAN_OK != CAN.begin(CAN_500KBPS))    // init can bus : baudrate = 500k
    {
        Serial.println("CAN BUS FAIL!");
        delay(100);
    }
    Serial.println("CAN BUS OK!");
}

unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
void loop()
{
    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // send data per 100ms
}

// END FILE
```


**Código de Lectura CAN**
```c
/*  receive a frame from can bus

    CAN Baudrate,
    
    #define CAN_5KBPS           1
    #define CAN_10KBPS          2
    #define CAN_20KBPS          3
    #define CAN_25KBPS          4 
    #define CAN_31K25BPS        5
    #define CAN_33KBPS          6
    #define CAN_40KBPS          7
    #define CAN_50KBPS          8
    #define CAN_80KBPS          9
    #define CAN_83K3BPS         10
    #define CAN_95KBPS          11
    #define CAN_100KBPS         12
    #define CAN_125KBPS         13
    #define CAN_200KBPS         14
    #define CAN_250KBPS         15
    #define CAN_500KBPS         16
    #define CAN_666KBPS         17
    #define CAN_1000KBPS        18

    CANBed V1: https://www.longan-labs.cc/1030008.html
    CANBed M0: https://www.longan-labs.cc/1030014.html
    CAN Bus Shield: https://www.longan-labs.cc/1030016.html
    OBD-II CAN Bus GPS Dev Kit: https://www.longan-labs.cc/1030003.html
*/

#include <SPI.h>
#include "mcp_can.h"

/* Please modify SPI_CS_PIN to adapt to your board.

   CANBed V1        - 17
   CANBed M0        - 3
   CAN Bus Shield   - 9
   CANBed 2040      - 9
   CANBed Dual      - 9
   OBD-2G Dev Kit   - 9
   OBD-II GPS Kit   - 9
   Hud Dev Kit      - 9

   Seeed Studio CAN-Bus Breakout Board for XIAO and QT Py - D7
*/


#define SPI_CS_PIN  D7 

MCP_CAN CAN(SPI_CS_PIN);                                    // Set CS pin


void setup()
{
    Serial.begin(115200);
    while(!Serial);
    
    // below code need for OBD-II GPS Dev Kit Atemga32U4 version
    // pinMode(A3, OUTPUT);
    // digitalWrite(A3, HIGH);
    
    // below code need for OBD-II GPS Dev Kit RP2040 version
    // pinMode(12, OUTPUT);
    // digitalWrite(12, HIGH);
    
    while (CAN_OK != CAN.begin(CAN_500KBPS))    // init can bus : baudrate = 500k
    {
        Serial.println("CAN BUS FAIL!");
        delay(100);
    }
    Serial.println("CAN BUS OK!");
}


void loop()
{
    unsigned char len = 0;
    unsigned char buf[8];

    if(CAN_MSGAVAIL == CAN.checkReceive())            // check if data coming
    {
        CAN.readMsgBuf(&len, buf);    // read data,  len: data length, buf: data buf

        unsigned long canId = CAN.getCanId();
        
        Serial.println("-----------------------------");
        Serial.print("Get data from ID: ");
        Serial.println(canId, HEX);

        for(int i = 0; i<len; i++)    // print the data
        {
            Serial.print(buf[i], HEX);
            Serial.print("\t");
        }
        Serial.println();
    }
}

// END FILE

```

:::tip
En este ejemplo, necesitas soldar uno de los pines del terminal P1 de la placa de conexión CAN Bus. Solo entonces se puede usar cualquier velocidad, de lo contrario solo puedes usar una velocidad de baudios CAN por debajo de 125.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/30.png" style={{width:600, height:'auto'}}/></div>


## CAN(Otro transceptor)
Nos gustaría agradecer a [Arduino](https://docs.arduino.cc/tutorials/uno-r4-minima/can/) por proporcionar los tutoriales y el código.

### Preparación del Hardware
El protocolo CAN requiere que el extremo emisor debe recibir el mensaje que envía. Simplemente conectar TX y RX no es suficiente para completar la comunicación; se debe conectar un transceptor para la comunicación. Aquí, usamos el **módulo divisor SN65HVD230** oficial de Arduino.

<table>
    <thead>
        <tr>
            <th>3.3 V</th>
            <th>GND</th>
            <th>D9(CANRX0)</th>
            <th>D10 (CANTX0)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>VCC</th>
            <td>GND</td>
            <th>CANRX</th>
            <td>CANTX</td>
        </tr>
    </tbody>
</table>


### Preparación del Software
**Código de Escritura CAN**
```cpp
/*
  CANWrite

  Write and send CAN Bus messages

  See the full documentation here:
  https://docs.arduino.cc/tutorials/uno-r4-wifi/can
*/

/**************************************************************************************
 * INCLUDE
 **************************************************************************************/

#include <Arduino_CAN.h>

/**************************************************************************************
 * CONSTANTS
 **************************************************************************************/

static uint32_t const CAN_ID = 0x20;

/**************************************************************************************
 * SETUP/LOOP
 **************************************************************************************/

void setup()
{
  Serial.begin(115200);
  while (!Serial) { }

  if (!CAN.begin(CanBitRate::BR_250k))
  {
    Serial.println("CAN.begin(...) failed.");
    for (;;) {}
  }
}

static uint32_t msg_cnt = 0;

void loop()
{
  /* Assemble a CAN message with the format of
   * 0xCA 0xFE 0x00 0x00 [4 byte message counter]
   */
  uint8_t const msg_data[] = {0xCA,0xFE,0,0,0,0,0,0};
  memcpy((void *)(msg_data + 4), &msg_cnt, sizeof(msg_cnt));
  CanMsg const msg(CanStandardId(CAN_ID), sizeof(msg_data), msg_data);

  /* Transmit the CAN message, capture and display an
   * error core in case of failure.
   */
  if (int const rc = CAN.write(msg); rc < 0)
  {
    Serial.print  ("CAN.write(...) failed with error code ");
    Serial.println(rc);
    for (;;) { }
  }

  /* Increase the message counter. */
  msg_cnt++;

  /* Only send one message per second. */
  delay(1000);
}

```

**Código de Lectura CAN**
```cpp
/*
  CANRead

  Receive and read CAN Bus messages

  See the full documentation here:
  https://docs.arduino.cc/tutorials/uno-r4-wifi/can
*/

/**************************************************************************************
 * INCLUDE
 **************************************************************************************/

#include <Arduino_CAN.h>

/**************************************************************************************
 * SETUP/LOOP
 **************************************************************************************/

void setup()
{
  Serial.begin(115200);
  while (!Serial) { }

  if (!CAN.begin(CanBitRate::BR_250k))
  {
    Serial.println("CAN.begin(...) failed.");
    for (;;) {}
  }
}

void loop()
{
  if (CAN.available())
  {
    CanMsg const msg = CAN.read();
    Serial.println(msg);
  }
}

```


***¿Cuándo necesito conectar la resistencia terminal?***
- 1. Comunicación de larga distancia: Si el bus CAN es largo (por ejemplo, más de 1 metro), las resistencias terminales deben conectarse en ambos extremos del bus para evitar problemas de comunicación causados por reflexión de señal.
- 2. Comunicación de múltiples nodos: Si múltiples nodos están conectados al mismo bus CAN, las resistencias terminales también son indispensables. Aseguran la estabilidad de impedancia del bus, previniendo así la distorsión de señal.

***¿Cuándo se puede desconectar la resistencia terminal?***
- 1. Comunicación de corta distancia: En algunas aplicaciones de corta distancia (usualmente menos de 1 metro), las resistencias terminales pueden omitirse porque el impacto de la reflexión de señal en la comunicación es relativamente pequeño.
- 2. Comunicación de un solo nodo: Si hay solo un nodo en el bus (como en un entorno de depuración) y la distancia es corta, la resistencia terminal puede desconectarse temporalmente.

<table align="center">
	<tr>
	    <th>Resultado del Código Emisor</th>
	    <th>Resultado del Código Receptor</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/25.png" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/26.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
</table>

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

