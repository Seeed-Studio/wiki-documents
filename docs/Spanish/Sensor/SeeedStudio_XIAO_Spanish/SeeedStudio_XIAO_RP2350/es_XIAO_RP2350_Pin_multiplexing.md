---
description: Multiplexación de Pines en XIAO RP2350 de Seeed Studio
title: Multiplexación de Pines en XIAO RP2350
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/2350image.png
slug: /es/XIAO_RP2350_Pin_Multiplexing
sidebar_position: 2
last_update:
  date: 02/18/2025
  author: Guillermo
---

# Multiplexación de Pines

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/2350image.png" style={{width:800, height:'auto'}}/></div>

El Seeed Studio XIAO RP2350 tiene interfaces ricas. Hay **19 pines digitales I/O** que se pueden usar como **pines PWM** y **3 entradas analógicas** que se pueden usar como **pines ADC**. Soporta cuatro interfaces de comunicación serial como **UART, I2C y SPI**. ¡Este wiki será útil para aprender sobre estas interfaces e implementarlas en tus próximos proyectos!

## Preparación

Actualmente, existen algunos problemas con el uso de los pines del XIAO RP2350 debido a problemas de compatibilidad. Hemos solucionado este problema, y la biblioteca oficial de Raspberry Pi ha sido fusionada. La versión actual es la **4.2.0**, y la actualización se completará en la próxima versión, **4.2.1**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/12.png" style={{width:500, height:'auto'}}/></div>

Mientras tanto, por favor reemplaza este archivo yendo a **Arduino15/packages/rp2040/hardware/rp2040/4.2.0/variants/seeed_xiao_rp2350 (Tu Dirección de Biblioteca de Arduino)** y [haciendo clic aquí para descargar el archivo](https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/file.zip). ¡Una vez hecho esto, podrás disfrutar de tu trabajo!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/3.png" style={{width:800, height:'auto'}}/></div>

## Digital

### Preparación de Hardware

<table align="center">
  <tr>
        <th>Seeed Studio XIAO RP2350</th>
        <th>Seeed Studio Expansion Base para XIAO con Grove OLED</th>
        <th>Grove - LED</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102010550-xiao-rp2350.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

Por favor, instala el XIAO RP2350 en la placa de expansión y conecta el Grove LED a la interfaz **A0/D0** de la placa de expansión mediante un cable Grove. Finalmente, conecta el XIAO al computador mediante un cable USB-C.

### Implementación de Software

En este ejemplo, implementaremos el control del estado de encendido/apagado de un relé utilizando un botón conectado a la placa de expansión XIAO. Cuando se presiona el botón, el relé se enciende, y cuando se suelta el botón, el relé se apaga.

```c
//define qué pin usar
int LED_BUILTIN = D0;
// la función setup se ejecuta una vez cuando presionas el botón de reset o enciendes la placa
void setup() {
  // inicializa el pin digital LED_BUILTIN como salida
  pinMode(LED_BUILTIN, OUTPUT);
}

// la función loop se ejecuta una y otra vez para siempre
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // enciende el LED (HIGH es el nivel de voltaje)
  delay(1000);                      // espera un segundo
  digitalWrite(LED_BUILTIN, LOW);   // apaga el LED estableciendo el voltaje en LOW
  delay(1000);                      // espera un segundo
}
```
### Efecto

Si todo va bien, después de subir el programa, deberías ver el siguiente efecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/1.gif" style={{width:500, height:'auto'}}/></div>


## Digital como PWM

Todos los pines GPIO en el XIAO RP2350 soportan salida PWM. Por lo tanto, puedes usar cualquier pin para generar PWM y ajustar el brillo de luces, controlar servos y otras funciones.

### Preparación de Hardware

<table align="center">
  <tr>
        <th>Seeed Studio XIAO RP2350</th>
        <th>Seeed Studio Expansion Base para XIAO con Grove OLED</th>
        <th>Grove - LED</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102010550-xiao-rp2350.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

Por favor, instala el XIAO RP2350 en la placa de expansión y conecta el Grove LED a la interfaz **A0/D0** de la placa de expansión mediante un cable Grove. Finalmente, conecta el XIAO al computador mediante un cable USB-C.

### Implementación de Software

En este ejemplo, demostraremos cómo usar la salida PWM para controlar el brillo de una luz.

```cpp
int LED_pin = D0;    // LED conectado al pin digital D0

void setup() {
  // declarando el pin del LED como salida
  pinMode(LED_pin, OUTPUT);
}

void loop() {
  // desvanecer (fade in) desde el mínimo hasta el máximo en incrementos de 3 puntos:
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 3) {
    // establece el valor (rango de 0 a 255):
    analogWrite(LED_pin, fadeValue);
    // espera 30 milisegundos para ver el efecto de atenuación
    delay(30);
  }

  // desvanecer (fade out) desde el máximo hasta el mínimo en incrementos de 3 puntos:
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 3) {
    // establece el valor (rango de 0 a 255):
    analogWrite(LED_pin, fadeValue);
    // espera 30 milisegundos para ver el efecto de atenuación
    delay(30);
  }
}
```
### Efecto

Si el programa se ejecuta correctamente, verás el siguiente efecto en funcionamiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/2.gif" style={{width:500, height:'auto'}}/></div>

## Analógico

La placa de desarrollo XIAO MG24(Sense) tiene un ADC de 12 bits para la lectura de valores de sensores analógicos con alta resolución, lo que nos permite obtener valores más precisos.

A continuación, elegiremos dos sensores para reflejar las características del ADC.

### Preparación de Hardware

<table align="center">
  <tr>
        <th>Seeed Studio XIAO RP2350</th>
        <th>Seeed Studio Expansion Base para XIAO con Grove OLED</th>
        <th>Grove - Sensor de Ruido</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102010550-xiao-rp2350.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comimagesproductloudness20sensor.jpg" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Loudness-Sensor.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>


### Implementación de Software

``` cpp
int loudness;

void setup()
{
    Serial.begin(9600);// Inicializar serial
}

void loop()
{
    loudness = analogRead(A0);// Lee los datos analógicos del pin A0
    Serial.println(loudness);
    delay(200);
}
```
### Efecto  
Si todo sale bien, después de subir el programa, deberías ver el siguiente efecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/5.png" style={{width:800, height:'auto'}}/></div>

## UART

Cuando trabajas con el IDE de Arduino, la comunicación Serial es una parte esencial de muchos proyectos. Para usar Serial en el IDE de Arduino, necesitas comenzar abriendo la ventana del Monitor Serial. Esto se puede hacer haciendo clic en el ícono de **Monitor Serial** en la barra de herramientas o presionando la tecla de acceso directo **Ctrl+Shift+M**.

### Uso General

Algunas de las funciones más comúnmente usadas con Serial incluyen:

- `Serial.begin()` -- que inicializa la comunicación a una velocidad de baudios especificada;
- `Serial.print()` -- que envía datos al puerto serial en un formato legible;
- `Serial.write()` -- que envía datos binarios al puerto serial;
- `Serial.available()` -- que verifica si hay datos disponibles para ser leídos desde el puerto serial;
- `Serial.read()` -- que lee un solo byte de datos desde el puerto serial;
- `Serial.flush()` -- que espera a que se complete la transmisión de datos seriales salientes.

Al usar estas funciones Serial, puedes enviar y recibir datos entre la placa de Arduino y tu computadora, lo que abre muchas posibilidades para crear proyectos interactivos.

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
    // imprime el byte recibido en el monitor serial:
    Serial.print("Recibí: ");
    Serial.println(incomingByte);
  }
  
  // espera un segundo antes de repetir el ciclo
  delay(1000);
}
```

### Efecto

Si todo sale bien, después de subir el programa, deberías ver el siguiente efecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/2.png" style={{width:500, height:'auto'}}/></div>

### Uso de Serial1

Según los diagramas de pines de XIAO RP2350 para parámetros específicos, podemos observar que hay un pin TX y un pin RX (D6, D7).  
El uso es muy similar, pero necesitamos utilizar una **herramienta de monitoreo de puerto serial** para monitorear los pines D6 y D7 y obtener los datos.  
Así que, a continuación, utilizaremos los pines D6 y D7 para usar **serial1**.

:::tip
Normalmente, usamos **Serial** para comunicar el dispositivo con tu computadora, de modo que podamos saber qué está sucediendo en el programa.

Basado en eso, si deseas usar este dispositivo para comunicarte con otro dispositivo, en este caso, utilizaremos **Serial1**.
:::

```c

void setup() {
    Serial1.begin(115200);
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

### Efecto

Si todo sale bien, después de subir el programa, deberías ver el siguiente efecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/1.png" style={{width:500, height:'auto'}}/></div>

## I2C

El XIAO RP2350 tiene una interfaz I2C que se puede usar para la transmisión de datos y el procesamiento de muchos sensores, así como para el uso de algunas pantallas OLED.

### Preparación de Hardware

<table align="center">
  <tr>
        <th>Seeed Studio XIAO RP2350</th>
        <th>Seeed Studio Expansion Base para XIAO con Grove OLED</th>
        <th>Grove - DHT20 Sensor de temperatura y humedad</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102010550-xiao-rp2350.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/101020932_preview-07-min_1.jpg" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

El sensor DHT20 utiliza el protocolo I2C, por lo que podemos usar el puerto I2C en la placa de expansión XIAO para obtener los datos del sensor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/7.png" style={{width:500, height:'auto'}}/></div>

### Implementación de Software

Este ejemplo muestra cómo obtener los datos del sensor DHT20 a través de la Base de Expansión Seeed Studio para XIAO RP2350.

Paso 1. Instala el Seeed Studio XIAO RP2350 en la placa de expansión y luego conecta el cable Tipo-C.

Paso 2. Instala la biblioteca **Grove Temperature And Humidity Sensor**.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Paso 3. Agregue la biblioteca a Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/10.png" style={{width:800, height:'auto'}}/></div>

Paso 4. Abre el demo DHTtester de la biblioteca que acabas de descargar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/11.png" style={{width:800, height:'auto'}}/></div>

Porque estamos usando el DHT20, necesitamos descomentar las líneas de código correspondientes al DHT20, como en el siguiente ejemplo:

```c
// Ejemplo de prueba para varios sensores de humedad y temperatura DHT
// Escrito por ladyada, dominio público

#include "Grove_Temperature_And_Humidity_Sensor.h"

// ¡Descomenta el tipo de sensor que estás usando!
// #define DHTTYPE DHT11   // DHT 11
// #define DHTTYPE DHT22   // DHT 22  (AM2302)
// #define DHTTYPE DHT21   // DHT 21 (AM2301)
// #define DHTTYPE DHT10   // DHT 10
#define DHTTYPE DHT20   // DHT 20

/*Nota: Los sensores DHT10 y DHT20 son diferentes de otros sensores DHT*, ya que utilizan interfaz I2C en lugar de un cable único*/
/*Por lo tanto, no requieren un pin.*/
// #define DHTPIN 2     // El pin al que estamos conectados (DHT10 y DHT20 no necesitan ser definidos)
// DHT dht(DHTPIN, DHTTYPE);   // DHT11 DHT21 DHT22
DHT dht(DHTTYPE);         // DHT10 DHT20 no necesitan definir el pin

// Conecta el pin 1 (a la izquierda) del sensor a +5V
// Conecta el pin 2 del sensor al pin DHTPIN (los DHT10 y DHT20 no necesitan definirlo)
// Conecta el pin 4 (a la derecha) del sensor a GND
// Conecta una resistencia de 10K desde el pin 2 (dato) al pin 1 (alimentación) del sensor


#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial

#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
#else
    #define debug  Serial
#endif

void setup() {

    debug.begin(115200);
    debug.println("¡Prueba de DHTxx!");
    Wire.begin();

    /*Si estás usando WIO Link, debes activar el pin de alimentación.*/
    // pinMode(PIN_GROVE_POWER, OUTPUT);
    // digitalWrite(PIN_GROVE_POWER, 1);

    dht.begin();
}

void loop() {
    float temp_hum_val[2] = {0};
    // Leer la temperatura o humedad toma aproximadamente 250 milisegundos!
    // Las lecturas del sensor también pueden ser de hasta 2 segundos 'antiguas' (es un sensor muy lento)


    if (!dht.readTempAndHumidity(temp_hum_val)) {
        debug.print("Humedad: ");
        debug.print(temp_hum_val[0]);
        debug.print(" %\t");
        debug.print("Temperatura: ");
        debug.print(temp_hum_val[1]);
        debug.println(" *C");
    } else {
        debug.println("Falló al obtener el valor de temperatura y humedad.");
    }

    delay(1500);
}
```

### Efecto

Si todo sale bien, después de subir el programa, deberías ver el siguiente efecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/xiao_rp2350_pins/V2/4.png" style={{width:800, height:'auto'}}/></div>

## SPI

El chip XIAO RP2350 integra múltiples periféricos, incluyendo una interfaz SPI que se puede usar para conectar dispositivos SPI externos, como memoria flash, pantallas, sensores y más. El XIAO RP2350 también soporta el modo de transferencia SPI de alta velocidad, lo que puede lograr una tasa máxima de transferencia SPI de 80 MHz, satisfaciendo las necesidades de transferencia de datos de la mayoría de los dispositivos SPI.

### Preparación de Hardware

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO RP2350</th>
      <th>Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550%20XIAO%20RP2350-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Main-02.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html">
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

Después de preparar el hardware como se mencionó anteriormente, usa cables de puente para conectar la interfaz SPI del XIAO y la pantalla OLED. Consulta la siguiente tabla para realizar las conexiones: 

|XIAO RP2350| OLED Display|
|-----------|-------------|
|D8|SCL|
|D10|SI|
|D5|RES|
|D4|D/C|
|D7|CS|
|VCC(VBUS)|5V|
|GND|GND|

### Implementación de Software

A continuación, utilizaremos el siguiente programa como ejemplo para mostrar cómo usar la interfaz SPI para controlar la pantalla OLED.

Instala la biblioteca u8g2.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

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

En la función `setup()`, se instancia la clase `U8G2_SH1107_128X128_1_4W_HW_SPI` con los argumentos del constructor apropiados que especifican los pines utilizados para la selección de chip (cs), datos/comando (dc) y reset. Luego, se llama a la función `u8g2.begin()` para inicializar la pantalla.

En la función `loop()`, la pantalla se actualiza con nuevo contenido usando las funciones `u8g2.firstPage()`, `u8g2.setFont()`, y `u8g2.drawStr()`. La función `u8g2.firstPage()` configura el búfer de la pantalla para escribir, mientras que `u8g2.nextPage()` muestra el contenido actualizado. El bucle do-while asegura que el contenido se muestre de manera continua hasta que el programa se detenga.

En general, este código demuestra cómo usar la biblioteca U8g2 para controlar una pantalla OLED y mostrar texto en ella.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/15.png" style={{width:700, height:'auto'}}/></div>


## ¡Finalizamos!

Ya has aprendido las funciones básicas de los pines del XIAO RP2350. Ahora, ¡diviértete experimentando con él!
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/6.png" style={{width:1000, height:'auto'}}/></div>



## Soporte Técnico y Discusión sobre Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>