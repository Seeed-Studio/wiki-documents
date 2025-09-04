---
description: La Placa Controladora de LED para XIAO es un módulo inteligente diseñado para personalizar tus espacios con luces LED inteligentes.
title: Placa Controladora de LED para XIAO
keywords:
- xiao
- light
- LED
image: https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/LED_Driver_Board_for_Seeed_Studio_XIAO.webp
slug: /es/led_driver_board
last_update: 
  date: 05/21/2025
  author: Carla
---

# Primeros Pasos con la Placa Controladora de LED para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/dimension.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
</div><br />

La Placa Controladora de LED para XIAO es una solución compacta pero potente que soporta tiras LED de 5V y 12V, incluyendo LEDs RGB direccionables populares como NeoPixel WS2812, WS2813, WS2815. Compatible con todas las placas XIAO, permite control inteligente y automatización a través de WLED y Home Assistant cuando se usa con la Serie XIAO ESP32, mientras ofrece opciones de alimentación flexibles y protección integral para una operación segura y confiable en tu configuración de iluminación.

## Introducción

### Características

- **Amplia Compatibilidad con LEDs**

    Controlador versátil que soporta tiras LED de **5V/3A** y **12V/2A** con regulación de potencia integrada. Compatible con LEDs de un solo color y RGB direccionables incluyendo NeoPixel **WS2811, WS2812(B), WS2813, WS2815, SK6812, y otros LEDs de protocolo de 1 cable**, proporcionando extensas opciones de iluminación.

- **Compatibilidad XIAO para Control Inteligente**

    Diseñado para todas las [placas Seeed Studio XIAO](https://www.seeedstudio.com/xiao-series-page). Cuando se combina con la Serie XIAO ESP32 (ESP32-C3/S3/C6), desbloquea características inteligentes a través de:
  - Soporte para la aplicación **[WLED](https://kno.wled.ge/)** - Controla colores, efectos, brillo y crea animaciones personalizadas ([XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html) es altamente recomendado)
  - Integración con **[Home Assistant](https://www.home-assistant.io/)** vía ESPHome - Habilita control remoto, automatización y escenarios de hogar inteligente

- **Compatibilidad con el Ecosistema Grove**

    La interfaz Grove integrada plug-and-play es compatible con más de 400 módulos de Seeed Studio, permitiéndote mejorar fácilmente la interactividad de la iluminación con el entorno y movimiento para efectos más inteligentes y personalizados:
  - `Para Detección de Visión AI`

        [Grove - Módulo Vision AI V2](https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html)

        [Grove Sensor de Gestos IR Inteligente (PAJ7660)](https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html)

  - `Para Detección de Temperatura y Humedad`

        [Grove - Sensor de Temperatura y Humedad (DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html)

        [Grove - AHT20 I2C Sensor de Temperatura y Humedad de Grado Industrial](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html)

        [Grove - Sensor de Temp y Humedad (SHT31)](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html)

  - `Para Detección de Movimiento`

        [Grove - Sensor de Movimiento PIR](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)

        [Grove - Acelerómetro Analógico de 3 Ejes](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-ADXL335.html)

        [Grove - IMU 9DOF (ICM20600+AK09918)](https://www.seeedstudio.com/Grove-IMU-9DOF-ICM20600-AK09918.html)

  - **[`Y más de 400+`](https://wiki.seeedstudio.com/es/Grove_System/)**

### Especificaciones

<table style={{textAlign:'center'}}>
 <tr>
        <th>Elemento</th>
        <th>Detalle</th>
 </tr>
    <tr>
        <td>Entrada de Alimentación</td>
        <td>DC 12V/2A</td>
    </tr>
    <tr>
        <td>Soporte de Alimentación LED</td>
        <td>DC 12V / DC 5V</td>
    </tr>
    <tr>
        <td>Corriente Máxima de Operación</td>
        <td>12V/2A 5V/3A</td>
    </tr>
    <tr>
        <td>Conector LED</td>
        <td>Conector de Bloque Terminal de Tornillo de 4 Pines 3.81mm: <br></br>12V | 5V | A0 | GND</td>
    </tr>
    <tr>
        <td>Conector Grove I²C</td>
        <td>D5 | D4 | 5V | GND</td>
    </tr>
    <tr>
        <td>Botón de Usuario</td>
        <td>D3</td>
    </tr>
    <tr>
        <td>Cabecera de Pines de Usuario</td>
        <td>SPI x1, Uart x1, Digital x2</td>
    </tr>
</table>

### Descripción General del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/hardware_overview.png" style={{width:1000, height:'auto'}}/></div>

#### Entrada de alimentación adaptada

- [Adaptador de Corriente, 12V/2A/24W, Enchufe Estándar Europeo, Salida DC](https://www.seeedstudio.com/Power-Adapter-12V-2A-EU-p-5732.html)
- [Adaptador de Corriente, 12V/2A/24W, Enchufe Estándar Americano, Salida DC](https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html)
- Otro Adaptador de Corriente DC 12V con Conector **5.5mm x 2.1mm x 10±0.3mm**
- Cable DC 12V

#### Guía de LEDs Compatibles

<div class="table-center">
<table style={{textAlign:'center'}}>
  <tr>
            <th>Producto</th>
            <th>Nombre</th>
            <th>Voltaje de Operación</th>
            <th>Conectar vía</th>
  </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-WS2813-Mini.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-WS2813-Mini-p-4269.html">Grove - RGB LED (WS2813 Mini)</a></td>
            <td>5V</td>
            <td>Grove</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Stick-10-WS2813-Mini.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Mini.html">Grove - RGB LED Stick (10-WS2813 Mini)</a></td>
            <td>5V</td>
            <td>Grove</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Stick-15-WS2813-Mini.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-15-WS2813-Mini-p-4270.html">Grove - RGB LED Stick (15-WS2813 Mini)</a></td>
            <td>5V</td>
            <td>Grove</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Stick-20-WS2813-Mini.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-20-WS2813-Mini-p-4271.html">Grove - RGB LED Stick (20-WS2813 Mini)</a></td>
            <td>5V</td>
            <td>Grove</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Ring-16-WS2813-Mini.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-16-WS2813-Mini-p-4201.html">Grove - RGB LED Ring (16-WS2813 Mini)</a></td>
            <td>5V</td>
            <td>Grove</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Ring-20-WS2813-Mini.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html">Grove - RGB LED Ring (20-WS2813 Mini)</a></td>
            <td>5V</td>
            <td>Grove</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Ring-24-WS2813-Mini.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-24-WS2813-Mini-p-4202.html">Grove - RGB LED Ring (24-WS2813 Mini)</a></td>
            <td>5V</td>
            <td>Grove</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-Ultimate-RGB-LED-Ring.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Grove-Ultimate-RGB-LED-Ring-p-4203.html">Grove - Ultimate RGB LED Ring</a></td>
            <td>5V</td>
            <td>Grove</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Digital-RGB-LED-Flexi-Strip-30-LED-1-Meter.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Digital-RGB-LED-Flexi-Strip-30-LED-1-Meter-p-1665.html">Grove - WS2813B RGB LED Flexi-Strip 30 LED/m - 1m</a></td>
            <td>5V</td>
            <td>Bloque de Terminales</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/WS2813B-Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter-p-2817.html">Grove - WS2813B RGB LED Flexi-Strip 60 LED/m - 1m</a></td>
            <td>5V</td>
            <td>Bloque de Terminales</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/RGB-LED-Strip-Waterproof-30-LED-m-1m.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Grove-WS2813-RGB-LED-Strip-Waterproof-30-LED-m-1m.html">Grove - WS2813 RGB LED Strip Waterproof - 30 LED/m - 1m</a></td>
            <td>5V</td>
            <td>Grove</td>
        </tr>
        <tr>
            <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/RGB-LED-Strip-Waterproof-60-LED-m-1m.png
            " style={{width:150, height:'auto'}}/></td>
            <td><a href="https://www.seeedstudio.com/Grove-WS2813-RGB-LED-Strip-Waterproof-60-LED-m-1m.html">Grove - WS2813 RGB LED Strip Waterproof - 60 LED/m - 1m</a></td>
            <td>5V</td>
            <td>Grove</td>
        </tr>  
 </table>
</div>

## Comenzando

Esta placa controladora de LED está diseñada específicamente para la serie Seeed Studio XIAO. Su funcionalidad varía dependiendo del microcontrolador XIAO emparejado. Por ejemplo, cuando se usa con el XIAO nRF52840, puede leer datos del IMU integrado para cambiar dinámicamente los colores de los LED. Cuando se empareja con placas de la serie ESP32, puede integrarse en Home Assistant para un control perfecto del hogar inteligente. Además, con el XIAO ESP32-C3, soporta ejecutar WLED para efectos LED avanzados. Sigue el tutorial a continuación para explorar estas capacidades en detalle.

### Jugar con Arduino

Necesitas configurar el entorno Arduino para el XIAO y añadir el paquete integrado.

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

#### Preparación del Software

**Paso 1.** Inicia la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong>
    </a>
</div>

**Paso 2.** Selecciona tu modelo de placa de desarrollo y añádelo al Arduino IDE.

- Si quieres usar **Seeed Studio XIAO SAMD21** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/#software)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO RP2040** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO-RP2040-with-Arduino/#software-setup)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO RP2350** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_rp2350_arduino/#setting-up-the-software)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO nRF52840** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#software-setup)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO ESP32C3** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started#software-setup)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO ESP32C6** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32c6_getting_started/#software-preparation)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO ESP32S3** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started#software-preparation)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO RA4M1** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/getting_started_xiao_ra4m1/#software-preparation)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO MG24** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_mg24_getting_started/#software-preparation)** para terminar de añadirlo.

**Paso 3.** Instala las librerías necesarias.

- Abre Arduino IDE, navega a **Sketch > Include Library > Manage Libraries...** para buscar la librería, escribe la palabra clave "**Adafruit_NeoPixel**" en el Administrador de librerías de Arduino e instala la versión más reciente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl6.png" style={{width:800, height:'auto'}}/></div>

- [Descarga la Librería Seeed_Arduino_LSM6DS3](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) como un archivo zip, abre Arduino IDE, navega a **Sketch > Include Library > Add .ZIP Library...** y abre el archivo zip descargado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" style={{width:800, height:'auto'}}/></div>

:::note

El MG24 actualmente no es compatible con la librería NeoPixel estándar. Sin embargo, Silicon Labs proporciona una alternativa en el núcleo oficial MG24: el controlador <strong>[ezWS2812](https://github.com/SiliconLabs/arduino/tree/refs/heads/main)</strong>, que soporta LEDs WS2812 vía SPI por hardware o GPIO. Puedes encontrar más detalles <strong>[aquí](https://forum.seeedstudio.com/t/driving-an-led-strip-with-xiao-mg24-neopixel-fastled-ezws2812/284695)</strong>.

:::

#### Ejemplo Simple

**Paso 1.** Preparación del hardware

<table align="center">
 <tr>
  <th>Seeed Studio XIAO RP2350</th>
        <th>Placa Controladora LED para XIAO</th>
        <th>Grove - Barra LED RGB (15-WS2813 Mini)</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550%20XIAO%20RP2350-45font.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/45-front.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Stick-15-WS2813-Mini.png" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-15-WS2813-Mini-p-4270.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

**Paso 2.** Conecta Seeed Studio XIAO RP2350, LED Driver Board for XIAO y Grove - RGB LED Stick (15-WS2813 Mini) como se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/rp2350_ledDriver_led.jpg" style={{width:700, height:'auto'}}/></div>

**Paso 3.** El siguiente programa de ejemplo controla LEDs que contienen 3 NeoPixel para que cada una de las tres perlas muestre los colores **rojo**, **verde** y **azul**

```cpp
#include <Adafruit_NeoPixel.h>

// Which pin on the Arduino is connected to the NeoPixels?
#define PIN D5

// How many NeoPixels are attached to the Arduino?
#define NUMPIXELS 3 

// When setting up the NeoPixel library, we tell it how many pixels,
// and which pin to use to send signals. Note that for older NeoPixel
// strips you might need to change the third parameter -- see the
// strandtest example for more information on possible values.
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin(); // INITIALIZE NeoPixel strip object 
}

void loop() {
  pixels.clear(); // Set all pixel colors to 'off'

  // pixels.Color() takes RGB values, from 0,0,0 up to 255,255,255
  // The first NeoPixel in a strand is #0, second is 1, all the way up
  pixels.setPixelColor(0, pixels.Color(255, 0, 0)); 
  pixels.setPixelColor(1, pixels.Color(0, 255, 0));
  pixels.setPixelColor(2, pixels.Color(0, 0, 255));
  // pixels.setBrightness() takes brightness values, from 0 up to 255
  pixels.setBrightness(255);

  pixels.show();   // Send the updated pixel colors to the hardware.

}

```

Sube el programa y enciende la Placa Controladora de LED, si todo va bien, puedes ver algo así:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/rp2350_ledDriver_led_result.jpg" style={{width:700, height:'auto'}}/></div>

#### LED de Sincronización Movimiento-Color

**Paso 1.** Preparación del hardware

<table align="center">
 <tr>
  <th>XIAO nRF52840</th>
        <th>Placa Controladora de LED para XIAO</th>
        <th>LED WS2812</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102010469-seeed-studio-xiao-nrf52840-sense-45font-logo.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/45-front.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ws2812_led.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"></a>
  </div></td>
 </tr>
</table>

**Paso 2.** Conecta el Seeed Studio XIAO nRF52840, la Placa Controladora de LED para XIAO y el LED WS2812 como se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/nRF52840_ledDriver_led_result.jpg" style={{width:700, height:'auto'}}/></div>

**Paso 3.** El siguiente código funciona leyendo los datos del sensor de aceleración LSM6DS3 integrado en el XIAO nRF52840 y cambiando el color de la tira de LED en tiempo real, con el color mapeado desde el valor de aceleración actual.

```cpp
#include <Arduino.h>
#include "LSM6DS3.h"              
#include <Adafruit_NeoPixel.h>     
#include "Wire.h"                  
#include "math.h"                  

// Define the pin connected to the NeoPixel data input
#define PIN A0

// Total number of NeoPixel LEDs
#define NUMPIXELS 300

// Create a NeoPixel strip object
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

// Variables for accelerometer data
float ax = 0;
float ay = 0;
float az = 0;

// RGB color components
uint8_t r = 0;
uint8_t g = 0;
uint8_t b = 0;

// Packed 24-bit RGB color value
uint32_t packedRGB = 0;

// Create an instance of the LSM6DS3 IMU in I2C mode at address 0x6A
LSM6DS3 myIMU(I2C_MODE, 0x6A);


void setup() {

    Serial.begin(9600);

    // Initialize the IMU sensor and check for errors
    if (myIMU.begin() != 0) {
        Serial.println("Device error"); 
    } else {
        Serial.println("Device OK!");   
    }

    // Initialize the NeoPixel strip
    pixels.begin();
}


void loop() {
    // Read acceleration values from the IMU
    ax = myIMU.readFloatAccelX();
    ay = myIMU.readFloatAccelY();
    az = myIMU.readFloatAccelZ();

    // Map acceleration (-1g to +1g) to RGB values (0 to 255)
    // Centered at 128 to allow both positive and negative variations
    r = constrain(ax * 100 + 128, 0, 255);
    g = constrain(ay * 100 + 128, 0, 255);
    b = constrain(az * 100 + 128, 0, 255);

    // Combine RGB components into a single 24-bit color value
    packedRGB = (r << 16) | (g << 8) | b;

    // Clear all existing pixels
    pixels.clear();

    // Fill all LEDs with the computed color
    pixels.fill(packedRGB, 0, NUMPIXELS);
    pixels.setBrightness(255);
    pixels.show();
    delay(100);
}

```

Sube el programa y enciende la Placa Controladora de LED, si todo va bien, puedes ver algo así:

<div style={{textAlign:'center'}}>
<video width={225} height={400} controls preload>
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/nRF52840_ledDriver_led_result.mp4" />
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/nRF52840_ledDriver_led_result.webm" />
</video>
</div>

Cuando agitas el módulo, el color de la tira de luces cambia. Cuanto más violenta sea la agitación, más brillante será el color.

### Jugar con Home Assistant a través de ESPHome

#### Preparación del Hardware

<div class="table-center">
<table style={{textAlign:'center'}}>
    <tr>
        <th>Dispositivos de Home Assistant</th>
    </tr>
    <tr>
        <td><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:300, height:'auto'}}/></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/home_assistant_topic/#-devices-for-home-assistant-" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
    </tr>
</table>
</div>

#### Preparación del Software

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:700, height:'auto'}}/></div>

[ESPHome](https://esphome.io/) es una herramienta que tiene como objetivo hacer que la gestión de tus placas ESP sea lo más simple posible. Lee un archivo de configuración YAML y crea firmware personalizado que instala en tu dispositivo ESP. Los dispositivos o sensores añadidos en la configuración de ESPHome aparecerán automáticamente en la interfaz de usuario de Home Assistant. ESPHome puede ayudarte a conectar y enviar los datos a dispositivos de Home Assistant.

:::note
Si esta es tu primera vez usando Home Assistant y ESPHome, puedes seguir <strong>[aquí](https://www.home-assistant.io/installation/)</strong> para una guía paso a paso sobre la instalación de Home Assistant.
:::

ESPHome está disponible como un **Complemento de Home Assistant** y se puede instalar simplemente a través de la tienda de complementos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png" style={{width:900, height:'auto'}}/></div>

- **Paso 1.** Haz clic en **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **Paso 2.** Habilita todas las opciones y haz clic en **START**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

Verás la siguiente ventana si ESPHome se carga exitosamente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

#### LEDs de Sincronización Temperatura-Color

**Paso 1.** Preparación del hardware

<table align="center" style={{textAlign:'center', overflowX: 'scroll', border: '1px solid #ccc', }}>
 <tr>
  <th>XIAO ESP32S3</th>
        <th>Placa Controladora de LED para XIAO</th>
        <th>Grove - Sensor de Temperatura y Humedad (DHT11)</th>
        <th>LED WS2812</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991114-xiao-esp32s3-font_1.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/45-front.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-temperature-humidity-sensor-dht11-preview.png" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ws2812_led.png" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"></a>
  </div></td>
 </tr>
</table>

**Paso 2.** Conecta Seeed Studio XIAO ESP32S3, LED Driver Board for XIAO y WS2812 LED como se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/esp32s3_ledDriver_led.jpg" style={{width:700, height:'auto'}}/></div>

**Paso 3.** Abre la página de ESPHome, y haz clic en **+ NEW DEVICE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

**Paso 4.** Haz clic en CONTINUE

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

**Paso 5.** Ingresa un **Nombre** para el dispositivo e ingresa las credenciales WiFi como **Nombre de red** y **Contraseña**. Luego haz clic en **NEXT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/1.png" style={{width:400, height:'auto'}}/></div>

**Paso 6.** Selecciona **ESP32-S3** y haz clic

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/2.png" style={{width:400, height:'auto'}}/></div>

**Paso 7.** Haz clic en **SKIP** porque configuraremos esta placa manualmente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

**Paso 8.** Haz clic en **EDIT** debajo de la placa recién creada

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/3.png" style={{width:400, height:'auto'}}/></div>

**Paso 9.** Copia los siguientes códigos al final del archivo .yaml, el XIAO ESP32S3 lee la temperatura de un sensor DHT11 y cambia el color de un LED RGB basado en qué tan lejos está la temperatura de un valor objetivo, usando azul para frío, rojo para caliente, y verde para normal.

```yaml
# DHT11 temperature and humidity sensor
sensor:
  - platform: dht
    pin: GPIO6
    model: DHT11  # Change to DHT22 or AM2302 if using a different model
    temperature:
      name: "Temperature"
      id: temp_sensor
    humidity:
      name: "Humidity"
    update_interval: 3s # Read new values every 3 seconds

# RGB LED (WS2812 single LED)
light:
  - platform: neopixelbus
    variant: ws2813  # ⚠️ Adjust based on your actual LED type (e.g., ws2812, ws2813, sk6812)
    type: GRB  # Color order (Green-Red-Blue)
    pin: GPIO1
    num_leds: 50 # Total number of NeoPixel LEDs
    name: "Temperature Color LED"
    id: rgb_led
    restore_mode: ALWAYS_ON
    default_transition_length: 0s

# Adjustable center temperature threshold
number:
  - platform: template
    name: "Target Temperature" # Center temperature value
    id: target_temp
    optimistic: true 
    min_value: 0 
    max_value: 40
    step: 0.1
    initial_value: 20.0 # Default center temperature (°C)

  - platform: template
    name: "Temperature Tolerance" # Tolerance around target temperature
    id: temp_tolerance
    optimistic: true
    min_value: 0
    max_value: 10
    step: 0.1
    initial_value: 5.0 # Default tolerance value (°C)

# Every 3 seconds, the LED color is updated:
# - Blue if too cold (below center - tolerance),
# - Red if too hot (above center + tolerance),
# - Green if temperature is close to the center,
# - Gradient between blue–green–red in transitional ranges.
#- If the temperature is not available, the LED blinks purple to indicate a sensor error.

interval:
  - interval: 3s
    then:
      - lambda: |-
          float t = id(temp_sensor).state;
          float center = id(target_temp).state;
          float tolerance = id(temp_tolerance).state;
          float r = 0.0, g = 0.0, b = 0.0;
          float ratio = 0.0;

          if (isnan(t)) {
            // Flash purple to indicate missing temperature
            static bool blink = false;
            blink = !blink;
            auto call = id(rgb_led).turn_on();
            call.set_rgb(blink ? 0.5 : 0.0, 0.0, blink ? 0.5 : 0.0);
            call.perform();
            return;
          }

          // Calculate RGB values based on temperature
          if (t <= (center - tolerance)) {
            b = 1.0;
            g = 0.0;
          } else if (t >= (center + tolerance)) {
            r = 1.0;
            g = 0.0;
          } else if (t <= center) {
            ratio = (center - t) / tolerance;
            b = ratio;
            g = 1.0 - ratio;
          } else {
            ratio = (t - center) / tolerance;
            r = ratio;
            g = 1.0 - ratio;
          }
          


          // Update LED
            auto call = id(rgb_led).turn_on();
            call.set_rgb(r, g, b);
            call.perform();
```

**Paso 10.** Haz clic en el botón Install en la esquina superior derecha. Luego selecciona el último elemento **Manual download**, Selecciona **Modern format**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/31.png" style={{width:500, height:'auto'}}/></div>

Entonces tomará mucho tiempo descargar y compilar, así que por favor ten paciencia. Una vez que todo esté listo, el firmware se descargará automáticamente a tu computadora.

**Paso 11.** Usando la [herramienta web ESPhome](https://web.esphome.io/?dashboard_install) para subir el firmware al XIAO ESP32S3, haz clic en **CONNECT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" style={{width:800, height:'auto'}}/></div>

Selecciona el puerto serie del XIAO ESP32 en la ventana emergente, haz clic en **INSTALL** y luego selecciona el archivo .bin descargado de los pasos anteriores.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" style={{width:500, height:'auto'}}/></div>

**Paso 11.** Una vez instalado exitosamente, puedes ver algo así:

<div style={{textAlign:'center'}}>
<video width={600} height={338} controls preload>
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led_result.mp4" />
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led_result.webm" />
</video>
</div>

Cuando se sopla aire frío al sensor de temperatura y humedad, el color de la tira de luces cambia gradualmente de rojo a azul a medida que la temperatura baja.

**Paso 12.** Agregar al Panel de Control

Abre **Setting** >> **Devices & Services**, puedes encontrar tu dispositivo ESPhome, haz clic en **ADD** y agrégalo al panel de control, puedes ver algo así:

  <div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led1.png"/>
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led2.png"/>
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led3.png"/>
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led4.png"/>
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led5.png"/>
  </div>

### Ejecutar WLED

#### Preparación de Hardware

<table align="center">
 <tr>
  <th>XIAO ESP32C3</th>
        <th>Placa Controladora de LED para XIAO</th>
        <th>LED WS2812</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991054-seeed-studio-xiao-esp32c3-45font_1.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/45-front.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ws2812_led.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"></a>
  </div></td>
 </tr>
</table>

Conecta el Seeed Studio XIAO nRF52840, la Placa Controladora de LED para XIAO y el LED WS2812 como se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/esp32c3_ledDriver_led.jpg" style={{width:600, height:'auto'}}/></div>

#### Instalar WLED

**Paso 1.** Abre <strong>[sitio web de instalación de WLED](https://install.wled.me/)</strong>, y conecta tu XIAO ESP32C3 a tu PC, haz clic en **Install**, conecta tu puerto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/wled_install.png" style={{width:800, height:'auto'}}/></div>

**Paso 2.** Después de instalar exitosamente, necesitas configurar el wifi del dispositivo, se recomienda mantener tu XIAO ESP32C3 y tu computadora/teléfono móvil en la misma LAN.

**Paso 3.** Ahora, puedes hacer clic en **VISIT DEVICE** para controlar tu tira de LED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/visit_device.png" style={{width:800, height:'auto'}}/></div>

**Paso 4.** O puedes instalar la aplicación **WLED** en tu tienda de aplicaciones del teléfono, y encontrar tu dispositivo LED con el signo + en la esquina superior derecha del software.

Si todo funciona bien, puedes ver algo así:

<div style={{textAlign:'center'}}>
<video width={600} height={338} controls preload>
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/wled_result.webm" />
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/wled_result.mp4" />
</video>
</div>

## Recursos

- **[PDF]**: [LED_Driver_Board_for_Seeed_Studio_XIAO_SCH_PDF](https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/LED_Driver_Board_for_Seeed_Studio_XIAO_SCH_PDF_20250417.pdf)

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
