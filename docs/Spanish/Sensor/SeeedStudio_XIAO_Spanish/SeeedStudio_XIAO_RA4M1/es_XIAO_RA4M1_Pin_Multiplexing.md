---
description: Pin multiplexing with Seeed Studio XIAO RA4M1.
title: Multiplexación de Pines con XIAO RA4M1 de Seeed Studio
keywords:
- ra4m1
- xiao
- pin multiple
image: https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/1-102010551-Seeed-Studio-XIAO-RA4M1.jpg
sidebar_position: 1
slug: /es/xiao_ra4m1_pin_multiplexing
last_update:
  date: 02/17/2025
  author: Guillermo
---

## Digital

El XIAO RA4M1 tiene hasta 11 pines GPIO regulares, 6 pines analógicos y 8 puertos IO reutilizables. En este ejemplo, utilizaremos el XIAO RA4M1, la placa de expansión XIAO y un relé para demostrar cómo usar diferentes pines digitales para leer y escribir.

### Preparación del hardware

<table align="center">
  <tr>
      <th>Seeed Studio XIAO R4M1</th>
        <th>Seeed Studio Expansion Base para XIAO con Grove OLED</th>
        <th>Grove - Relé</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

Por favor, instala el XIAO RA4M1 o Sense en la placa de expansión y conecta el relé a la interfaz **A0/D0** de la placa de expansión mediante un cable Grove. Finalmente, conecta el XIAO al ordenador mediante un cable USB-C.

### Implementación de software

En este ejemplo, implementaremos el control del estado de encendido/apagado de un relé utilizando un botón conectado a la placa de expansión XIAO. Cuando se presione el botón, el relé se encenderá, y cuando se suelte el botón, el relé se apagará.

```c
const int buttonPin = D1;     // el número del pin del botón
int buttonState = 0;          // variable para leer el estado del botón
const int relayPin = D0;

void setup() {
  // inicializar el pin del Relay como salida:
  pinMode(relayPin, OUTPUT);
  // inicializar el pin del botón como entrada con pull-up interno:
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  // leer el estado del valor del botón:
  buttonState = digitalRead(buttonPin);

  // comprobar si el botón está presionado. Si es así, el estado del botón es HIGH:
  if (buttonState == HIGH) {
    // encender el Relay:
    digitalWrite(relayPin, HIGH);
  } else {
    // apagar el Relay:
    digitalWrite(relayPin, LOW);
  }
}
```

Si todo va bien, después de cargar el programa, deberías ver el siguiente efecto:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/31.gif" style={{width:600, height:'auto'}}/></div>

## Digital como PWM

Todos los pines GPIO en el XIAO RA4M1 soportan salida PWM. Por lo tanto, puedes usar cualquier pin para emitir PWM y ajustar el brillo de luces, controlar servos y otras funciones.

### Preparación del hardware

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RA4M1</th>
        <th>Seeed Studio Expansion Base para XIAO con Grove OLED</th>
        <th>Grove - LED Color Variable</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED1.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Por favor, instala el XIAO RA4M1 o Sense en la placa de expansión, luego conecta el LED de color variable a la interfaz A0/D0 de la placa de expansión utilizando un cable Grove. Finalmente, conecta el XIAO a tu computadora mediante un cable USB-C.

### Implementación del software

En este ejemplo, demostraremos cómo utilizar la salida PWM para controlar el brillo de una luz.

```cpp
int LED_pin = D0;    // LED conectado al pin digital 10

void setup() {
  // declarar el pin del LED como salida
  pinMode(LED_pin, OUTPUT);
}

void loop() {
  // desvanecerse de mínimo a máximo en incrementos de 3 puntos:
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 3) {
    // establece el valor (rango de 0 a 255):
    analogWrite(LED_pin, fadeValue);
    // esperar 30 milisegundos para ver el efecto de atenuación
    delay(30);
  }

  // desvanecerse de máximo a mínimo en incrementos de 3 puntos:
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 3) {
    // establece el valor (rango de 0 a 255):
    analogWrite(LED_pin, fadeValue);
    // esperar 30 milisegundos para ver el efecto de atenuación
    delay(30);
  }
}
```

Si el programa se ejecuta con éxito, verá el siguiente efecto de ejecución.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/32.gif" style={{width:600, height:'auto'}}/></div>

## Analógico

Placa de Desarrollo XIAO RA4M1 Con hasta 14 bits de resolución en el ADC para lecturas de alta resolución de valores de sensores analógicos, puede ayudarnos a obtener lecturas más precisas. El convertidor analógico-digital (ADC) en una placa de desarrollo XIAO RA4M1. Por defecto, la resolución está configurada a 10 bits, la cual puede cambiarse a resoluciones de 12 bits y 14 bits para mejorar la precisión en las lecturas analógicas.

Detalles de precisión del ADC
- 10 bits:  0~1024
- 12 bits:  0~4096
- 14 bits:  0~16383

A continuación, elegiremos dos sensores para reflejar las características del ADC.

### Preparación del Hardware

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RA4M1</th>
      <th>Grove-LED de Color Variable</th>
	    <th>Grove-Sensor de ángulo rotativo </th>
	    <th>Seeed Studio Grove Base para XIAO </th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED1.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>


### Implementación de Software

``` cpp
#define ADC_Bit_Fourteen 14
#define ADC_Bit_Twelve 12
#define ADC_Bit_Ten 10

const int analogInPin = A1;  // Pin de entrada analógica al que está conectado el potenciómetro
const int analogOutPin = 9;  // Pin de salida analógica al que está conectado el LED

int sensorValue = 0;  // valor leído del potenciómetro
int outputValue = 0;  // valor de salida al PWM (salida analógica)

void setup() {

  Serial.begin(115200);
  // Ten_Bite_ADC_Config(); // 10 bits
  // Twelve_Bite_ADC_Config(); // 12 bits
  Fourteen_Bite_ADC_Config(); // 14 bits
  
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

Al trabajar con el IDE de Arduino, la comunicación serial es una parte esencial de muchos proyectos. Para usar Serial en el IDE de Arduino, debes comenzar abriendo la ventana del Monitor Serial. Esto se puede hacer haciendo clic en el ícono de **Monitor Serial** en la barra de herramientas o presionando la tecla de acceso rápido **Ctrl+Shift+M**.

### Uso General

Algunas de las funciones más utilizadas de Serial incluyen:

- `Serial.begin()` -- que inicializa la comunicación a una tasa de baudios especificada;
- `Serial.print()` -- que envía datos al puerto serial en un formato legible;
- `Serial.write()` -- que envía datos binarios al puerto serial;
- `Serial.available()` -- que verifica si hay datos disponibles para leer desde el puerto serial;
- `Serial.read()` -- que lee un solo byte de datos desde el puerto serial;
- `Serial.flush()` -- que espera a que se complete la transmisión de los datos seriales salientes.

Al utilizar estas funciones de Serial, puedes enviar y recibir datos entre la placa Arduino y tu computadora, lo que abre muchas posibilidades para crear proyectos interactivos.

Aquí tienes un ejemplo de programa:

```c
void setup() {
  // inicializa la comunicación serial a 9600 bits por segundo:
  Serial.begin(9600);
}

void loop() {
  // envía datos al puerto serial
  Serial.println("¡Hola Mundo!");

  // lee datos del puerto serial
  if (Serial.available() > 0) {
    // lee el byte entrante:
    char incomingByte = Serial.read();
    // imprime el byte entrante en el monitor serial:
    Serial.print("Recibí: ");
    Serial.println(incomingByte);
  }
  
  // espera un segundo antes de repetir el ciclo
  delay(1000);
}
```

### Uso de Serial1

Según los diagramas de pines de XIAO RA4M1 para parámetros específicos, podemos observar que hay un pin TX y un pin RX. Esto es diferente de la comunicación serial estándar, pero el uso es muy similar, salvo que se deben agregar algunos parámetros. Así que a continuación, utilizaremos los pines proporcionados por el chip para la comunicación serial.

```c

#define BAUD 115200

void setup() {
    Serial1.begin(BAUD);
}
 
void loop() {
  if(Serial1.available() > 0)
  {
    char incominByte = Serial1.read();
    Serial1.print("Recibí: ");
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
  // inicializa la comunicación serial
  Serial.begin(9600);
  while (!Serial);

  // inicializa la serial por software
  mySerial.begin(9600);
}

void loop() {
  // lee datos desde la serial por software
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("Datos recibidos: ");
    Serial.println(data);
  }

  // escribe datos en la serial por software
  mySerial.print("¡Hola Mundo!");

  // espera un segundo antes de repetir el ciclo
  delay(1000);
}
```

En este programa, primero incluimos la librería `SoftwareSerial.h` para usar serial por software. Luego, creamos un nuevo objeto SoftwareSerial llamado mySerial utilizando los pines 2 y 3 como RX y TX, respectivamente.

En la función `setup()`, inicializamos tanto la serial de hardware (`Serial.begin()`) como la serial por software (`mySerial.begin()`).

En la función `loop()`, usamos la función `mySerial.available()` para verificar si hay datos disponibles para leer desde la serial por software. Si es así, leemos el byte entrante usando la función `mySerial.read()` y lo almacenamos en una variable llamada data. Luego, utilizamos las funciones `Serial.print()` y `Serial.println()` para imprimir "Datos recibidos: " seguido del valor de data en la serial de hardware.

También usamos la función `mySerial.print()` para escribir "¡Hola Mundo!" en la serial por software. Esto enviará los datos desde el XIAO al dispositivo conectado al puerto serial por software.

Finalmente, agregamos una función `delay()` para esperar un segundo antes de repetir el ciclo.

## IIC

XIAO RA4M1 tiene una interfaz I2C que se puede utilizar para la transmisión de datos y el análisis de muchos sensores, así como para usar algunas pantallas OLED.

### Preparación del Hardware

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RA4M1</th>
        <th>Seeed Studio Expansion Base para XIAO con Grove OLED</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

La pantalla OLED en la placa de expansión XIAO utiliza el protocolo I2C y está conectada a la interfaz I2C del XIAO a través del circuito I2C en la placa. Por lo tanto, podemos conectar directamente el XIAO a la placa de expansión y programarlo para mostrar contenido en la pantalla.

### Implementación de Software

Este ejemplo introduce cómo usar la pantalla OLED en la Base de Expansión Seeed Studio para XIAO RA4M1.

#### Paso 1. Instala el Seeed Studio XIAO RA4M1 en la placa de expansión y luego conecta el cable Tipo-C.

#### Paso 2. Instala la librería u8g2.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### Paso 3. Copia el código y pégalo en el IDE de Arduino, luego cárgalo.

```c
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reloj=*/ SCL, /* datos=*/ SDA, /* reinicio=*/ U8X8_PIN_NONE);   // OLEDs sin Reset en la Pantalla

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(1);   // establecer número de 1 a 3, la pantalla girará 180 grados
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("i'm XIAO RA4M1");
}
```

En las primeras líneas del código, incluimos las bibliotecas necesarias, como `Arduino.h`, `U8x8lib.h` y `Wire.h`. La biblioteca `U8x8lib.h` proporciona funciones para controlar la pantalla OLED, y la biblioteca `Wire.h` proporciona funciones para la comunicación I2C.

En la función `setup()`, inicializamos la pantalla OLED usando la función `u8x8.begin()`. También configuramos el modo de inversión de la pantalla usando la función `u8x8.setFlipMode()` para rotar la pantalla 180 grados.

En la función `loop()`, configuramos la fuente utilizando la función `u8x8.setFont()` y especificamos la posición del cursor en la pantalla utilizando la función `u8x8.setCursor()`. Finalmente, usamos la función `u8x8.print()` para mostrar la cadena "¡Hola Mundo!" en la pantalla OLED.

Si cargas un programa en el XIAO RA4M1, verás el contenido mostrado en la pantalla OLED de la placa de expansión.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/21.png" style={{width:800, height:'auto'}}/></div>

## SPI

El chip RA4M1 integra múltiples periféricos, incluyendo una interfaz SPI que se puede utilizar para conectar dispositivos SPI externos, como memoria flash, pantallas, sensores y más. El XIAO RA4M1 también es compatible con el modo de transferencia SPI de alta velocidad, que puede alcanzar una tasa máxima de transferencia SPI de 80 MHz, lo que satisface las necesidades de transferencia de datos de la mayoría de los dispositivos SPI.

### Preparación de hardware

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
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Después de preparar el hardware como se mencionó anteriormente, utiliza cables jumper para conectar la interfaz SPI del XIAO y la OLED. Por favor, consulta el siguiente diagrama para el método de cableado.

### Implementación de Software

A continuación, utilizaremos el siguiente programa como ejemplo para introducir cómo usar la interfaz SPI para controlar la pantalla OLED.

Instala la librería u8g2.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
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

En la función `setup()`, se instancia la clase `U8G2_SH1107_128X128_1_4W_HW_SPI` con los argumentos del constructor apropiados que especifican los pines utilizados para la selección de chip (cs), datos/comando (dc) y reinicio. Luego, se llama a la función `u8g2.begin()` para inicializar la pantalla.

En la función `loop()`, la pantalla se actualiza con nuevo contenido usando las funciones `u8g2.firstPage()`, `u8g2.setFont()` y `u8g2.drawStr()`. La función `u8g2.firstPage()` prepara el búfer de la pantalla para la escritura, mientras que `u8g2.nextPage()` muestra el contenido actualizado. El ciclo do-while asegura que el contenido se muestre continuamente hasta que el programa se detenga.

En general, este código demuestra cómo usar la librería U8g2 para controlar una pantalla OLED y mostrar texto en ella.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/15.png" style={{width:700, height:'auto'}}/></div>


## CAN

### Preparación de hardware

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
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-CAN-Bus-Breakout-Board-for-XIAO-and-QT-Py-p-5702.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

#### Paso 1. Prepara dos placas de expansión CAN Bus y el XIAO RA4M1  
#### Paso 2. Inserta cada uno de estos dos XIAO RA4M1 por separado en las placas de expansión CAN Bus  
#### Paso 3. Prepara la conexión con cables DuPont  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/36.png" style={{width:400, height:'auto'}}/></div>

### Preparación del Software

Proporcionamos una [biblioteca de Arduino para la placa MCP2515](https://github.com/limengdu/Arduino_CAN_BUS_MCP2515).

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Arduino_CAN_BUS_MCP2515">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

La biblioteca incluye varios ejemplos, incluyendo:

- ***OBDII-PIDs*** - recuperar datos desde la interfaz OBD-II
- ***send*** - enviar un marco al bus CAN
- ***recv*** - recibir un marco del bus CAN
- ***set_mask_filter_recv*** - recibir un marco del bus CAN con configuraciones de máscara y filtro

### Implementación de Software

:::tip
No se permite encender y descargar programas simultáneamente para dos XIAO RA4M1, ya que esto generará errores al intentar descargar a través del puerto serial. Después de descargar el programa en uno, desconéctalo, luego enciende el otro XIAO RA4M1 para descargar el programa. Finalmente, enciende ambos al mismo tiempo para verificar el mensaje del puerto serial.
:::

**CAN Código de escritura**
```c

/* Enviar un marco desde el bus CAN

   Tasa de baudios CAN:
   
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

/* Modifique SPI_CS_PIN para adaptarse a su placa.

   CANBed V1        - 17
   CANBed M0        - 3
   CAN Bus Shield   - 9
   CANBed 2040      - 9
   CANBed Dual      - 9
   OBD-2G Dev Kit   - 9
   OBD-II GPS Kit   - 9
   Hud Dev Kit      - 9

   Seeed Studio CAN-Bus Breakout Board para XIAO y QT Py - D7
*/

#define SPI_CS_PIN  D7 

MCP_CAN CAN(SPI_CS_PIN);                                    // Establecer el pin CS

void setup()
{
    Serial.begin(115200);
    while(!Serial);
    
    // El siguiente código es necesario para OBD-II GPS Dev Kit versión Atemga32U4
    // pinMode(A3, OUTPUT);
    // digitalWrite(A3, HIGH);
    
    // El siguiente código es necesario para OBD-II GPS Dev Kit versión RP2040
    // pinMode(12, OUTPUT);
    // digitalWrite(12, HIGH);
    
    while (CAN_OK != CAN.begin(CAN_500KBPS))    // Inicializar el bus CAN: tasa de baudios = 500k
    {
        Serial.println("¡FALLO DEL CAN BUS!");
        delay(100);
    }
    Serial.println("CAN BUS OK!");
}

unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
void loop()
{
    CAN.sendMsgBuf(0x00, 0, 8, stmp);  // Enviar mensaje CAN
    delay(100);                        // Enviar datos cada 100ms
}

// FIN DEL ARCHIVO
```


**CAN Código de lectura**
```c
/*  Recibir un marco desde el bus CAN

    Tasa de baudios CAN:
    
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

/* Modifique SPI_CS_PIN para adaptarse a su placa.

   CANBed V1        - 17
   CANBed M0        - 3
   CAN Bus Shield   - 9
   CANBed 2040      - 9
   CANBed Dual      - 9
   OBD-2G Dev Kit   - 9
   OBD-II GPS Kit   - 9
   Hud Dev Kit      - 9

   Seeed Studio CAN-Bus Breakout Board para XIAO y QT Py - D7
*/


#define SPI_CS_PIN  D7 

MCP_CAN CAN(SPI_CS_PIN);                                    // Establecer pin CS


void setup()
{
    Serial.begin(115200);
    while(!Serial);
    
    // El siguiente código es necesario para OBD-II GPS Dev Kit versión Atemga32U4
    // pinMode(A3, OUTPUT);
    // digitalWrite(A3, HIGH);
    
    // El siguiente código es necesario para OBD-II GPS Dev Kit versión RP2040
    // pinMode(12, OUTPUT);
    // digitalWrite(12, HIGH);
    
    while (CAN_OK != CAN.begin(CAN_500KBPS))    // Inicializar bus CAN: tasa de baudios = 500k
    {
        Serial.println("¡FALLO DEL CAN BUS!");
        delay(100);
    }
    Serial.println("CAN BUS OK!");
}


void loop()
{
    unsigned char len = 0;
    unsigned char buf[8];

    if(CAN_MSGAVAIL == CAN.checkReceive())            // Verificar si hay datos disponibles
    {
        CAN.readMsgBuf(&len, buf);    // Leer los datos, len: longitud de los datos, buf: buffer de datos

        unsigned long canId = CAN.getCanId();
        
        Serial.println("-----------------------------");
        Serial.print("Datos recibidos desde el ID: ");
        Serial.println(canId, HEX);

        for(int i = 0; i<len; i++)    // Imprimir los datos
        {
            Serial.print(buf[i], HEX);
            Serial.print("\t");
        }
        Serial.println();
    }
}

// FIN DEL ARCHIVO

```
:::tip
En este ejemplo, es necesario soldar uno de los pines terminales P1 de la placa de expansión CAN Bus. Solo de esta manera podrás usar cualquier velocidad; de lo contrario, solo podrás usar una velocidad de baudios CAN inferior a 125.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/30.png" style={{width:600, height:'auto'}}/></div>

***¿Cuándo es necesario conectar la resistencia terminal?***
- 1. Comunicación a larga distancia: Si el bus CAN es largo (por ejemplo, más de 1 metro), se deben conectar resistencias terminales en ambos extremos del bus para evitar problemas de comunicación causados por la reflexión de la señal.
- 2. Comunicación con múltiples nodos: Si hay múltiples nodos conectados al mismo bus CAN, las resistencias terminales también son indispensables. Aseguran la estabilidad de la impedancia del bus, evitando así la distorsión de la señal.

***¿Cuándo se puede desconectar la resistencia terminal?***
- 1. Comunicación a corta distancia: En algunas aplicaciones de corta distancia (generalmente menos de 1 metro), se pueden omitir las resistencias terminales porque el impacto de la reflexión de la señal en la comunicación es relativamente pequeño.
- 2. Comunicación con un solo nodo: Si solo hay un nodo en el bus (como en un entorno de depuración) y la distancia es corta, la resistencia terminal puede desconectarse temporalmente.

<table align="center">
	<tr>
	    <th>Resultado del código del remitente</th>
	    <th>Resultado del código receptor</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/25.png" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/26.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
</table>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

