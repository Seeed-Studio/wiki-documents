---
title: Multiplexación de pines con Seeed Studio XIAO MG24
description: Multiplexación de pines con Seeed Studio XIAO MG24 (Sense)
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/2.webp
slug: /es/xiao_mg24_pin_multiplexing
keywords:
  - XIAO
  - MG24
last_update:
  date: 02/16/2025
  author: Guillermo
sidebar_position: 1
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/top.png" style={{width:700, height:'auto'}}/></div>

***El XIAO MG24*** cuenta con hasta ***22 pines regulares***, ***18 pines analógicos***, ***18 pines digitales***, ***2 SPI***, ***2 UART***, ***2 I2C***, y es compatible con ***todos los PWM***. Ofrece una amplia variedad de pines disponibles para nuestro uso. En esta wiki, te enseñaré cómo manejar estos pines, ¡permitiéndonos utilizarlos de manera efectiva 😀!

## Digital

### Preparación de hardware

<table align="center">
  <tr>
      <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Seeed Studio Expansion Base para XIAO con Grove OLED</th>
        <th>Grove - Relé</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

Por favor, instala el XIAO MG24(Sense) en la placa de expansión y conecta el relé a la interfaz **A0/D0** de la placa de expansión mediante un cable Grove. Finalmente, conecta el XIAO a la computadora mediante un cable USB-C.

### Implementación de Software

En este ejemplo, implementaremos el control del estado de encendido/apagado de un relé utilizando un botón conectado a la placa de expansión XIAO. Cuando se presiona el botón, el relé se enciende, y cuando se suelta el botón, el relé se apaga.

```c
const int buttonPin = D1;     // el número del pin del botón
int buttonState = 0;          // variable para leer el estado del botón
const int relayPin = D0;

void setup() {
  // inicializar el pin del relé como salida:
  pinMode(relayPin, OUTPUT);
  // inicializar el pin del botón como entrada con resistencia pull-up:
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  // leer el estado del valor del botón:
  buttonState = digitalRead(buttonPin);

  // verificar si el botón está presionado. Si lo está, el estado del botón es HIGH:
  if (buttonState == HIGH) {
    // encender el relé:
    digitalWrite(relayPin, HIGH);
  } else {
    // apagar el relé:
    digitalWrite(relayPin, LOW);
  }
}
```
### Gráfico de resultados

Si todo va bien, después de cargar el programa, deberías ver el siguiente efecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/2.gif" style={{width:500, height:'auto'}}/></div>


## Digital como PWM

Todos los pines GPIO en el XIAO MG24(Sense) son compatibles con salida PWM. Por lo tanto, puedes usar cualquier pin para generar PWM y ajustar el brillo de las luces, controlar servos y otras funciones.

### Preparación de Hardware

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Seeed Studio Expansion Base para XIAO con Grove OLED</th>
        <th>Grove - LED de Color Variable</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

:::tip
Por favor, instala el XIAO MG24(Sense) en la placa de expansión, luego conecta el LED de color variable a la interfaz A0/D0 de la placa de expansión utilizando un cable Grove. Finalmente, conecta el XIAO a tu computadora mediante un cable USB-C.
:::

### Implementación de Software

En este ejemplo, demostraremos cómo usar la salida PWM para controlar el brillo de una luz.

```cpp
int LED_pin = D0;    // LED conectado al pin digital 10

void setup() {
  // declarar el pin del LED como salida
  pinMode(LED_pin, OUTPUT);
}

void loop() {
  // desvanecer de mínimo a máximo en incrementos de 3 puntos:
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 3) {
    // establece el valor (rango de 0 a 255):
    analogWrite(LED_pin, fadeValue);
    // espera 30 milisegundos para ver el efecto de atenuación
    delay(30);
  }

  // desvanecer de máximo a mínimo en incrementos de 3 puntos:
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 3) {
    // establece el valor (rango de 0 a 255):
    analogWrite(LED_pin, fadeValue);
    // espera 30 milisegundos para ver el efecto de atenuación
    delay(30);
  }
}
```
### Gráfico de resultados

Si el programa se ejecuta correctamente, verás el siguiente efecto en funcionamiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/5.gif" style={{width:500, height:'auto'}}/></div>

## Analógico

La placa de desarrollo XIAO MG24(Sense) tiene un ADC de 12 bits para lecturas de alta resolución de los valores de los sensores analógicos, lo que nos ayuda a obtener valores más precisos.

A continuación, elegiremos dos sensores para reflejar las características del ADC.

### Preparación de Hardware

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO MG24 Sense</th>
         <th>Grove-LED de Color Variable</th>
	    <th>Grove-Sensor de ángulo rotativo </th>
	    <th>Seeed Studio Grove Base para XIAO </th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>


### Implementación de Software

``` cpp
const int analogInPin = D1;  // Pin de entrada analógica al que está conectado el potenciómetro
const int analogOutPin = 9;  // Pin de salida analógica al que está conectada la LED

int sensorValue = 0;  // valor leído desde el potenciómetro
int outputValue = 0;  // valor de salida para el PWM (salida analógica)

void setup() {
  Serial.begin(115200);
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
```
### Gráfico de resultados  
Si todo funciona correctamente, después de cargar el programa, deberías ver el siguiente efecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/4.gif" style={{width:500, height:'auto'}}/></div>

## UART  

Cuando se trabaja con Arduino IDE, la comunicación serial es una parte esencial de muchos proyectos. Para utilizar **Serial** en Arduino IDE, primero debes abrir la ventana del **Monitor Serial**. Esto se puede hacer haciendo clic en el icono del **Monitor Serial** en la barra de herramientas o presionando el atajo de teclado **Ctrl+Shift+M**.  

### Uso general de Serial  

Algunas de las funciones más utilizadas en la comunicación Serial incluyen:  

- `Serial.begin()` -- Inicializa la comunicación a una velocidad en baudios específica.  
- `Serial.print()` -- Envía datos al puerto Serial en un formato legible.  
- `Serial.write()` -- Envía datos binarios al puerto Serial.  
- `Serial.available()` -- Verifica si hay datos disponibles para ser leídos desde el puerto Serial.  
- `Serial.read()` -- Lee un solo byte de datos desde el puerto Serial.  
- `Serial.flush()` -- Espera a que la transmisión de datos seriales salientes se complete.  

Mediante estas funciones, puedes enviar y recibir datos entre la placa Arduino y tu computadora, lo que permite la creación de proyectos interactivos.  

Aquí tienes un programa de ejemplo:

```c
void setup() {
  // inicializar la comunicación serial a 9600 bits por segundo:
  Serial.begin(9600);
}

void loop() {
  // enviar datos al puerto serie
  Serial.println("Hello World!");

  // leer datos del puerto serie
  if (Serial.available() > 0) {
    // leer el byte entrante:
    char incomingByte = Serial.read();
    // imprimir el byte recibido en el monitor serie:
    Serial.print("He recibido: ");
    Serial.println(incomingByte);
  }
  
  // esperar un segundo antes de repetir el bucle
  delay(1000);
}
```

### Uso de Serial1  

De acuerdo con los diagramas de pines de XIAO MG24(Sense) para parámetros específicos, podemos observar que hay un pin TX y un pin RX.  
Esto es diferente de la comunicación serial tradicional, pero su uso es muy similar, excepto que se deben agregar algunos parámetros adicionales.  
A continuación, utilizaremos los pines expuestos por el chip para la comunicación serial.

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

## I2C  

XIAO MG24(Sense) tiene una interfaz I2C que puede utilizarse para la transmisión de datos y el análisis de muchos sensores, así como para el uso de algunas pantallas OLED.

### Preparación de Hardware

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO MG24 Sense</th>
        <th>Seeed Studio Expansion Base para XIAO con Grove OLED</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:400, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

La pantalla OLED en la placa de expansión de XIAO utiliza el protocolo I2C y está conectada a la interfaz I2C de XIAO a través del circuito I2C de la placa. Por lo tanto, podemos conectar directamente XIAO a la placa de expansión y programarla para mostrar contenido en la pantalla.  

### Implementación de Software  

Este ejemplo muestra cómo utilizar la pantalla OLED en la Seeed Studio Expansion Base para XIAO MG24(Sense).  

***Paso 1. Instalar el Seeed Studio XIAO MG24(Sense) en la placa de expansión y conectar el cable Type-C.***  

***Paso 2. Instalar la biblioteca u8g2.***

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

***Paso 3. Copiar el código y pegarlo en el Arduino IDE, luego subirlo.***  
- Descarga el archivo zip a continuación

📄 **[ZIP]** [Header de carita sonriente](https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/smiley_face.zip)

- Crea un archivo de encabezado llamado **"smiley_face.h"** y copia el contenido del archivo zip descargado en el archivo de encabezado que creaste.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/8.png" style={{width:800, height:'auto'}}/></div>

```c
#include <Arduino.h>
#include <U8g2lib.h>
#include <Wire.h>
#include "smiley_face.h" 

U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);

int xx = 20; 
int yy = 10; 

void setup() {
    u8g2.begin();
}

void loop() {
    smeil_display();
    delay(500); 
}

void smeil_display() {
    const unsigned char* smileImages[] = {
        semil1, semil2, semil3, semil4, semil5,
        semil6, semil7, semil8, semil9, semil10,
        semil11, semil12, semil13, semil14, semil15,
        semil16, semil17, semil18, semil19, semil20,
        semil21, semil22, semil23, semil24, semil25,
        semil26, semil27
    };

    int delays[] = {
        40, 50, 40, 40, 40,
        40, 40, 50, 40, 40,
        40, 40, 40, 50, 40,
        40, 50, 40, 40, 50,
        40, 50, 40, 40, 50,
        50, 50, 40, 50
    };

    for (int i = 0; i < sizeof(smileImages) / sizeof(smileImages[0]); i++) {
        u8g2.firstPage();
        do {
            u8g2.drawXBMP(xx, yy, 48, 48, smileImages[i]); 
        } while (u8g2.nextPage());
        delay(delays[i]); 
    }
}
```

### Resultado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/7.gif" style={{width:500, height:'auto'}}/></div>

## SPI

El chip XIAO MG24(Sense) integra múltiples periféricos, incluida una interfaz SPI que puede usarse para conectar dispositivos SPI externos, como memoria flash, pantallas, sensores y más.  

### Descripción general de la biblioteca de Arduino

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO_ST7789V2_LCD_Display/tree/main">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


Basándonos en el programa de ejemplo de Arduino proporcionado por **Waveshare**, hemos desarrollado una biblioteca de Arduino para toda la serie XIAO. Puedes acceder directamente al repositorio de GitHub de esta biblioteca mediante el botón a continuación.  

### Preparación del hardware

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO MG24 Sense</th>
			<th>Display LCD SPI 1.69-pulg.</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/6.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### Conexión de pines  

Después de preparar el hardware como se mencionó anteriormente, utiliza cables de puente para conectar la interfaz SPI de XIAO y la pantalla OLED. Consulta el siguiente diagrama para el método de cableado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/3.png" style={{width:700, height:'auto'}}/></div>



### Instalación  

Dado que has descargado la biblioteca en formato zip, abre tu Arduino IDE, haz clic en **Sketch > Incluir biblioteca > Agregar biblioteca .ZIP**. Selecciona el archivo zip que acabas de descargar, y si la biblioteca se instala correctamente, verás **Biblioteca añadida a tus bibliotecas** en la ventana de notificación. Esto significa que la biblioteca se ha instalado con éxito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>


### Implementación de Software  

Después de descargar e instalar correctamente la biblioteca, podrás encontrar dos programas de ejemplo llamados **helloworld.ino** y **bgcolor.ino** en la carpeta de ejemplos. El archivo **bgcolor.ino** es un ejemplo que muestra el color de fondo, estableciendo el color rojo como predeterminado. El archivo **helloworld.ino** es un ejemplo que muestra la animación del logo de nuestra empresa, y este ejemplo incluye el efecto que tiene el ejemplo **bgcolor**.

```cpp
#include <st7789v2.h>
#include "SPI.h"
#include "seeed.h"

st7789v2 Display;

void setup() {
  // pon tu código de configuración aquí, para que se ejecute una vez:
  Display.SetRotate(270);
  Display.Init();
  Display.SetBacklight(100);
  Display.Clear(WHITE);
}

void loop() {
  // pon tu código principal aquí, para que se ejecute repetidamente:
//  Display.SetPixel(100, 100, RED);
//  Display.DrawPoint(50, 50, YELLOW, DOT_PIXEL_8X8, DOT_FILL_AROUND);

  Display.DrawImage(gImage_seeed, 20, 90, 240, 47);

  Display.DrawLine(15, 65, 65, 65, MAGENTA, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  Display.DrawLine(15, 70, 80, 70, MAGENTA, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  
  Display.DrawRectangle(15, 80, 265, 150, GRAY, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  
  Display.DrawCircle(10, 10, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(270, 10, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(10, 230, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(270, 230, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawLine(200, 160, 265, 160, GRAYBLUE, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  Display.DrawLine(215, 165, 265, 165, GRAYBLUE, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  
  Display.DrawString_EN(20, 180, "By: Jason", &Font20, WHITE, BLACK);
//  Display.DrawNum(100, 220, 123456, &Font24, RED, BRED);
  Display.DrawFloatNum(100, 210, 1.00, 2, &Font16, WHITE, BLACK);
}
```

Verás el logotipo de Seeed Studio impreso en la pantalla de forma dinámica.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/1.gif"style={{width:500, height:'auto'}}/></div>

## Conclusión  
Has aprendido las funciones básicas de los pines del XIAO MG24 (Sense). Ahora, vamos a explorar más a fondo los sensores integrados.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/6.png" style={{width:1000, height:'auto'}}/></div>


## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte en diferentes áreas y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

