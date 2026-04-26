---
description: 'Este artículo se desarrolla sobre la base del núcleo de Arduino para nRF54L15 escrito por el desarrollador lolren, con el objetivo de proporcionar tutoriales de referencia para que los usuarios del XIAO nRF54L15 desarrollen en el Arduino IDE.'
title: Arduino para Seeed Studio XIAO nRF54L15
keywords:
  - nRF54L15
  - xiao
  - Arduino
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_6.webp
slug: /xiao_nrf54l15_sense_arduino
last_update:
  date: 4/22/2026
  author: Zeller
createdAt: '2025-04-22'
updatedAt: '2026-04-24'
url: https://wiki.seeedstudio.com/es/xiao_nrf54l15_sense_arduino/
---

Este artículo se desarrolla sobre la base del XIAO nRF54L15 Sense con la plataforma Arduino.

## Agradecimientos

Un agradecimiento especial al desarrollador **[lolren](https://github.com/lolren)** por proporcionar soporte de adaptación de Arduino para el chip nRF54L15. Esto permite el desarrollo y la aplicación práctica del XIAO nRF54L15 en el ecosistema de Arduino. También se expresa gratitud por sus continuos esfuerzos y contribuciones a la construcción ecológica de código abierto relacionada.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/lolren/nrf54-arduino-core" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Repositorio de lolren</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## Introducción

### Preparación de hardware

Antes de comenzar, prepara el hardware XIAO nRF54L15 o XIAO nRF54L15 Sense.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15</th>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991421-XIAO-nRF54L14.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-p-6493.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Software

:::tip
Si es la primera vez que usas Arduino, te recomendamos encarecidamente que consultes [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

- **Paso 1.** Descarga e instala la versión estable de Arduino IDE de acuerdo con tu sistema operativo.

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

- **Paso 2.** Añadir la URL del Gestor de placas

  Abre File → Preferences

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_1.png" style={{width:400, height:'auto'}}/></div><br/>

  Añade la URL para el soporte de XIAO nRF54L15 en el campo Additional Boards Manager URLs.

```js
https://raw.githubusercontent.com/lolren/nrf54-arduino-core/main/package_nrf54l15clean_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_2.png" style={{width:800, height:'auto'}}/></div><br/>

- **Paso 3.** Selecciona **XIAO nRF54L15 / Sense** y el puerto serie

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_3.png" style={{width:800, height:'auto'}}/></div><br/>

- **Paso 4.** Sube el programa

```c
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, LOW);
  delay(500);
  digitalWrite(LED_BUILTIN, HIGH);
  delay(500);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_4.png" style={{width:800, height:'auto'}}/></div><br/>

Resultado:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light3.gif" style={{width:400, height:'auto'}}/></div>

## Digital

Los pines digitales son interfaces del MCU para leer y escribir niveles lógicos alto/bajo, que pueden adquirir datos externos y controlar dispositivos periféricos. Esta sección ilustra las funciones de los pines digitales implementando el control de encendido y apagado de un LED y el efecto de luz respiratoria PWM.

### Preparación de hardware

Necesitas preparar el XIAO nRF54L15 Sense y los dispositivos Grove.

<table align="center">
  <tr>
      <th>Seeed Studio XIAO nRF54L15 Sense</th>
        <th>Seeed Studio Grove Base for XIAO</th>
         <th>Grove – Chainable RGB LED</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2017-07bazaar501790_10402004845.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="Grove – Chainable RGB LED V2.0" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Chainable-RGB-Led-V2-0.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

### Software

En el repositorio de lolren, los pines D0 a D10 del XIAO nRF54L15 se redefinen como PIN_D0 a PIN_D10.

```c
void setup() {
  pinMode(PIN_D0, OUTPUT);
}

void loop() {
  digitalWrite(PIN_D0, LOW);
  delay(500);
  digitalWrite(PIN_D0, HIGH);
  delay(500);

  for (int i = 0; i <= 255; i++) {
      analogWrite(PIN_D0, i);  // The duty cycle increases gradually.
      delay(5);
    }

  for (int i = 255; i >= 0; i--) {
        analogWrite(PIN_D0, i);  // The duty cycle decreases gradually.
        delay(5);
    }
}
```

### Resultado

Conecta el Grove – Chainable RGB LED al Pin 0 del Seeed Studio Grove Base for XIAO. El Grove – Chainable RGB LED presentará efectos de parpadeo y atenuación gradual tipo respiración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_2.gif" style={{width:800, height:'auto'}}/></div><br/>

## UART

UART es un protocolo de comunicación asíncrono half-dúplex, comúnmente utilizado para depuración de dispositivos, salida de registros y transmisión de datos. El XIAO nRF54L15 proporciona un conjunto de pines UART. Esta sección demuestra el uso de UART mediante la impresión de datos por serie.

### Preparación de hardware

Necesitas preparar el XIAO nRF54L15 y el dispositivo CH340.

<table align="center">
 <tr>
        <th>Seeed Studio XIAO nRF54L15 Sense</th>
        <th>CH340G USB to Serial (TTL) Module&Adapter</th>
 </tr>
 <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-317990026-ch340g-usb-to-serial-_ttl_-module_adapter_1.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Software

En el XIAO nRF54L15, D6 y D7 corresponden respectivamente a los pines TX y RX. En el archivo de redefinición de pines de lolren, D6 y D7 se definen como **PIN_SERIAL1_RX** y **PIN_SERIAL1_TX**. Los puertos serie disponibles para usar son **Serial1** o **Serial2**.

:::tip
Si no estás familiarizado con la distribución de pines del XIAO nRF54L15, haz clic en [XIAO nRF54L15 Pin List](https://wiki.seeedstudio.com/es/xiao_nrf54l15_sense_getting_started/#hardware-overview) para comprobarla.
:::

:::caution
No utilices `PIN_SERIAL1_RX` y `PIN_SERIAL1_TX` para `Serial` (puerto serie USB).
Esto interrumpirá los canales predeterminados de descarga y depuración, y puede provocar un fallo en la grabación del programa (mal funcionamiento de SWD/CDC).
:::

```c
#define RX_PIN PIN_SERIAL1_RX
#define TX_PIN PIN_SERIAL1_TX
#define BAUD 115200

void setup() {
    // Set RX and TX pins
    Serial1.setPins(RX_PIN, TX_PIN);

    // Initialize baud rate and communication configuration
    Serial1.begin(BAUD, SERIAL_8N1); 
}

void loop() {
    Serial1.print("Hello XIAO nRF54L15!\n");
    delay(1000);
}
```

### Resultado

:::tip
<br/>
Cableado
<table align="center">
 <tr>
     <th>XIAO nRF54L15</th>
     <th>Módulo y adaptador CH340G USB a Serial (TTL)</th>
 </tr>
  <tr>
     <th>RX</th>
     <th>TX</th>
 </tr>
  <tr>
     <th>TX</th>
     <th>RX</th>
 </tr>
  <tr>
     <th>GND</th>
     <th>GND</th>
 </tr>
   <tr>
     <th>VBUS</th>
     <th>5V</th>
 </tr>
</table>
:::

Abre cualquier herramienta de monitor serie, configura la velocidad en baudios a 115200 y podrás observar los datos de salida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_5.png" style={{width:800, height:'auto'}}/></div><br/>

## Analógico

Los pines analógicos se utilizan para leer señales de voltaje continuas a través del ADC. Se pueden conectar a varios sensores como potenciómetros, fotorresistencias, termistores para detección de temperatura, sensores analógicos de escala de grises y sensores infrarrojos. Esta sección demuestra las funciones de los pines analógicos leyendo el valor de ajuste de la perilla de un potenciómetro.

### Preparación de hardware

Necesitas preparar el XIAO nRF54L15 Sense y dispositivos Grove.

<table align="center">
 <tr>
     <th>Seeed Studio XIAO nRF54L15 Sense</th>
     <th>Grove-Rotary Angle Sensor </th>
     <th>Seeed Studio Grove Base for XIAO </th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Software

Hay cuatro grupos de pines analógicos en el XIAO nRF54L15, a saber, de A0 a A3. En la redefinición de pines proporcionada por lolren, estos pines se definen como PIN_A0 a PIN_A3.

:::tip
Si no estás familiarizado con la distribución de pines del XIAO nRF54L15, haz clic en [XIAO nRF54L15 Pin List](https://wiki.seeedstudio.com/es/xiao_nrf54l15_sense_getting_started/#hardware-overview) para comprobarla.
:::

```c
const int analogPin = PIN_A0;

void setup() {
  Serial.begin(115200);
  analogReadResolution(12);
}

void loop() {
  int analogValue = analogRead(analogPin);

  // Assume reference voltage is 3.3V
  int voltage_mv = analogValue * 3300 / 4095;

  Serial.printf("ADC value = %d\n", analogValue);
  Serial.printf("Voltage = %d mV\n", voltage_mv);

  delay(1000);
}
```

### Resultado

Conecta el Grove-Rotary Angle Sensor a la Seeed Studio Grove Base for XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_5.jpg" style={{width:800, height:'auto'}}/></div><br/>

Gira la perilla y el Monitor Serie de Arduino imprimirá el valor de lectura del ADC y el voltaje analógico convertido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_3.png" style={{width:800, height:'auto'}}/></div><br/>

## I2C

I2C es un protocolo de comunicación serie síncrono que permite la comunicación multidispositivo entre dispositivos maestro y esclavo a través de la línea de reloj SCL y la línea de datos SDA. El XIAO nRF54L15 / Sense proporciona dos conjuntos de interfaces I2C. Esta sección demuestra las funciones de I2C controlando la pantalla OLED en la Expansion Board Base for XIAO.

### Preparación de hardware

Necesitas preparar el XIAO nRF54L15 Sense y dispositivos con interfaces I2C.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
   <th>Seeed Studio Expansion Board Base for XIAO</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Software

En el XIAO nRF54L15, D4 y D5 sirven como los pines SCL y SDA respectivamente.
En el framework de lolren, el pin D4 se redefine como **PIN_WIRE_SCL**, y el pin D5 se redefine como **PIN_WIRE_SDA**.

:::tip
Si no estás familiarizado con la distribución de pines del XIAO nRF54L15, haz clic en [XIAO nRF54L15 Pin List](https://wiki.seeedstudio.com/es/xiao_nrf54l15_sense_getting_started/#hardware-overview) para comprobarla.
:::

```c
#include <U8x8lib.h>
#include <Wire.h>

#define SCL PIN_WIRE_SCL
#define SDA PIN_WIRE_SDA

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(0);
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);

  u8x8.setCursor(2, 10);
  u8x8.print("Hello World!");
  u8x8.setCursor(1, 28);
  u8x8.print("XIAO nRF54L15!");
}
```

### Resultado

Después de cargar el programa, las frases "Hello World!" y "XIAO nRF54L15!" se mostrarán en la Expansion Board Base for XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_4.jpg" style={{width:800, height:'auto'}}/></div><br/>

## SPI

SPI es un protocolo de comunicación serie síncrono y full-dúplex. Generalmente utiliza cuatro cables — reloj SCK, MOSI, MISO y CS — para lograr una transmisión de datos de alta velocidad entre dispositivos maestro y esclavo. En comparación con I2C, SPI ofrece una mayor velocidad de transmisión, menor latencia y una comunicación más simple y directa. Sin embargo, requiere más pines, y cada dispositivo esclavo suele ocupar una línea de selección de chip independiente. Se utiliza comúnmente para conectar periféricos de alta velocidad como memorias Flash, tarjetas SD, pantallas LCD/OLED, módulos ADC/DAC y sensores de alta velocidad. Esta sección demuestra el uso de SPI conectando una pantalla de papel electrónico.

### Preparación de hardware

Necesitas preparar un XIAO nRF54L15 y un dispositivo que admita comunicación SPI.

 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
   <th>ePaper Driver Board for Seeed Studio XIAO</th>
   <th>2.9" Monochrome eInk</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/epaper-driver-board-for-xiao.jpg" style={{width:250, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-104990853-2.9-monochrome-eink--epaper-display.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>

### Software

- Instala la biblioteca GxEPD2

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_6.png" style={{width:400, height:'auto'}}/></div><br/>

Modifica y define mediante macros los pines SPI según el archivo de redefinición de pines de Lolren.

```c
#include <Arduino.h>
#include <SPI.h>
#include <GxEPD2_BW.h>
#include <Fonts/FreeMonoBold9pt7b.h>
#include <Fonts/FreeMonoBold12pt7b.h>

// -------- Pin Definitions (from pins_arduino.h) --------
// PIN_D0=RST, PIN_D1=CS, PIN_D3=DC, PIN_D5=BUSY
// SPI: SCK=PIN_D8, MISO=PIN_D9, MOSI=PIN_D10 (macros are already defined)
#define EPD_RST  PIN_D0   // 0
#define EPD_CS   PIN_D1   // 1
#define EPD_DC   PIN_D3   // 3
#define EPD_BUSY PIN_D2   // 5

// -------- 029BN-T94-D2 Driver --------
GxEPD2_BW<GxEPD2_290_T94_V2, GxEPD2_290_T94_V2::HEIGHT> display(
  GxEPD2_290_T94_V2(EPD_CS, EPD_DC, EPD_RST, EPD_BUSY)
);

const char* LINE1 = "Hello XIAO nRF54L15";

void setup() {
  Serial.begin(115200);
  delay(2000);
  Serial.println("=== EPaper Start ===");

  // Close serial port to avoid TX(D1) interfering with CS(D1)
  delay(100);
  Serial.end();

  // Directly specify using macros, fully consistent with pins_arduino.h
  SPI.setPins(PIN_SPI_SCK, PIN_SPI_MISO, PIN_SPI_MOSI, -1);
  SPI.begin();

  // Pass 0 to disable GxEPD2 internal serial debug output
  display.init(0);
  display.setRotation(1);  // Landscape 296×128
  display.setTextColor(GxEPD_BLACK);
  display.setFullWindow();

  display.firstPage();
  do {
    display.fillScreen(GxEPD_WHITE);

    // ---- LINE1: Large font, upper half ----
    display.setFont(&FreeMonoBold12pt7b);
    int16_t tbx, tby;
    uint16_t tbw, tbh;
    display.getTextBounds(LINE1, 0, 0, &tbx, &tby, &tbw, &tbh);
    uint16_t x1 = (display.width()  - tbw) / 2 - tbx;
    uint16_t y1 = display.height() / 2 - 4;
    display.setCursor(x1, y1);
    display.print(LINE1);

  } while (display.nextPage());

  display.hibernate();

  // Reopen serial port for confirmation after screen refresh
  Serial.begin(115200);
  delay(100);
  Serial.println("=== Done ===");
}

void loop() {
  delay(1000000);
}
```

### Resultado

Después de cargar el programa, `Hello XIAO nRF54L15` se mostrará en la pantalla de papel electrónico.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_6.jpg" style={{width:800, height:'auto'}}/></div>

## Preguntas frecuentes

- P1: Al cargar el programa, aparece un mensaje indicando que no hay ruta para py.

- R: C:\Users\yourname\AppData\Local\Arduino15\packages\nrf54l15clean\hardware\nrf54l15clean\0.6.27\platform.txt.
  - Cambia `tools.python3.cmd.windows=py` a `tools.python3.cmd.windows=python`.
  - Cambia `tools.python3.args.windows=-3` a `tools.python3.args.windows=`.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
