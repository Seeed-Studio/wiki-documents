---
description: Multiplexación de pines con Seeed Studio XIAO ESP32-S3.
title: Multiplexación de pines con Seeed Studio XIAO ESP32-S3 (Sense)
keywords:
  - esp32s3
  - xiao
  - pin multiple
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_pin_multiplexing
sku: 113991114, 113991115
type: project
last_update:
  date: 4/27/2026
  author: Citric
createdAt: '2022-11-15'
updatedAt: '2026-04-27'
url: https://wiki.seeedstudio.com/es/xiao_esp32s3_pin_multiplexing/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Multiplexación de pines con Seeed Studio XIAO ESP32-S3 (Sense)

<table align="center">
 <tr>
  <th>Seeed Studio XIAO ESP32-S3</th>
  <th>Seeed Studio XIAO ESP32-S3 Sense</th>
  <th>Seeed Studio XIAO ESP32-S3 Plus</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3plus.png" style={{width:250, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
   <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
   </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
   <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
   </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html" target="_blank">
   <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>

El Seeed Studio XIAO ESP32-S3 es una placa de desarrollo potente y versátil que incorpora una variedad de interfaces periféricas y pines GPIO. Estos pines pueden utilizarse para diversos fines, como comunicarse con otros dispositivos, leer sensores analógicos, controlar LEDs y más. En este tutorial, exploraremos el pinout del XIAO ESP32-S3 y de su placa relacionada, el XIAO ESP32-S3 Sense, y aprenderemos cómo utilizar estos pines para diferentes propósitos. En concreto, cubriremos el uso de 1x UART, 1x lIC, 1x lIS, 1x SPI, 11x GPIO (PWM), 9x ADC, 1x LED de usuario, 1x LED de carga, 1x botón de reinicio, 1x botón de arranque y, para el XIAO ESP32-S3 Sense, 1x conector B2B (con 2 GPIO adicionales). Al final de este tutorial, tendrás un buen entendimiento del pinout del XIAO ESP32-S3 y serás capaz de utilizarlo eficazmente en tus proyectos.

## Primeros pasos

### Visión general del pinout

Antes de comenzar, revisemos todos los pines que tiene el XIAO ESP32-S3 y sus funciones con el siguiente esquema.

## Visión general del hardware

Antes de empezar con todo, es bastante esencial contar con algunos parámetros básicos del producto. La siguiente tabla proporciona información sobre las características del Seeed Studio XIAO ESP32-S3.

<Tabs>
<TabItem value="ESP32S3" label="XIAO ESP32-S3" default>

### Parte frontal del XIAO ESP32-S3

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32-S3_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Parte trasera del XIAO ESP32-S3

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32-S3_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**Mapa de pines**

| Pin XIAO                 | Función          | Pin del chip | Funciones alternativas | Descripción                          |
| :---------------------: | :-------------: | :-------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS             |           |                    | Entrada/Salida de alimentación       |
| GND                     |                  |           |                    |                                      |
| 3V3                     | 3V3_OUT          |           |                    | Salida de alimentación               |
| D0                      | Analógico        | GPIO1     | TOUCH1             | GPIO, ADC                            |
| D1                      | Analógico        | GPIO2     | TOUCH2             | GPIO, ADC                            |
| D2                      | Analógico        | GPIO3     | TOUCH3             | GPIO, ADC                            |
| D3                      | Analógico        | GPIO4     | TOUCH4             | GPIO, ADC                            |
| D4                      | Analógico, SDA   | GPIO5     | TOUCH5             | GPIO, datos I2C, ADC                 |
| D5                      | Analógico, SCL   | GPIO6     | TOUCH6             | GPIO, reloj I2C, ADC                 |
| D6                      | TX               | GPIO43    |                    | GPIO, transmisión UART               |
| D7                      | RX               | GPIO44    |                    | GPIO, recepción UART                 |
| D8                      | Analógico, SCK   | GPIO7     | TOUCH7             | GPIO, reloj SPI, ADC                 |
| D9                      | Analógico, MISO  | GPIO8     | TOUCH8             | GPIO, datos SPI, ADC                 |
| D10                     | Analógico, MOSI  | GPIO9     | TOUCH9             | GPIO, datos SPI, ADC                 |
| D11                     | Analógico        | GPIO42    | TOUCH12            | GPIO, ADC                            |
| D12                     | Analógico        | GPIO41    | TOUCH13            | GPIO, ADC                            |
| MTDO                    |                  | GPIO40    |                    | JTAG                                 |
| MTDI                    |                  | GPIO41    |                    | JTAG, ADC                            |
| MTCK                    |                  | GPIO39    |                    | JTAG, ADC                            |
| MTMS                    |                  | GPIO42    |                    | JTAG, ADC                            |
| Reset                   |                  | CHIP_PU   |                    |                                      |
| Boot                    |                  | GPIO0     |                    | Entrar en modo de arranque           |
| U.FL-R-SMT1             |                  | LNA_IN    |                    | Antena UFL                           |
| CHARGE_LED              |                  |           |                    | LED de carga                         |
| USER_LED                |                  | GPIO21    |                    | Luz de usuario                       |

</TabItem>
<TabItem value="ESP32S3Sense" label="XIAO ESP32-S3 Sense">

### Parte frontal del XIAO ESP32-S3 Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32-S3_Sense_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Parte trasera del XIAO ESP32-S3 Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32-S3_Sense_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**Mapa de pines**

| Pin XIAO                 | Función          | Pin del chip | Funciones alternativas | Descripción                          |
| :---------------------: | :-------------: | :-------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS             |           |                    | Entrada/Salida de alimentación       |
| GND                     |                  |           |                    |                                      |
| 3V3                     | 3V3_OUT          |           |                    | Salida de alimentación               |
| D0                      | Analógico        | GPIO1     | TOUCH1             | GPIO, ADC                            |
| D1                      | Analógico        | GPIO2     | TOUCH2             | GPIO, ADC                            |
| D2                      | Analógico        | GPIO3     | TOUCH3             | GPIO, ADC                            |
| D3                      | Analógico        | GPIO4     | TOUCH4             | GPIO, ADC                            |
| D4                      | Analógico, SDA   | GPIO5     | TOUCH5             | GPIO, datos I2C, ADC                 |
| D5                      | Analógico, SCL   | GPIO6     | TOUCH6             | GPIO, reloj I2C, ADC                 |
| D6                      | TX               | GPIO43    |                    | GPIO, transmisión UART               |
| D7                      | RX               | GPIO44    |                    | GPIO, recepción UART                 |
| D8                      | Analógico, SCK   | GPIO7     | TOUCH7             | GPIO, reloj SPI, ADC                 |
| D9                      | Analógico, MISO  | GPIO8     | TOUCH8             | GPIO, datos SPI, ADC                 |
| D10                     | Analógico, MOSI  | GPIO9     | TOUCH9             | GPIO, datos SPI, ADC                 |
| D11                     | Analógico        | GPIO42    | TOUCH12            | GPIO, ADC                            |
| D12                     | Analógico        | GPIO41    | TOUCH13            | GPIO, ADC                            |
| MTDO                    |                  | GPIO40    |                    | JTAG                                 |
| MTDI                    |                  | GPIO41    |                    | JTAG, ADC                            |
| MTCK                    |                  | GPIO39    |                    | JTAG, ADC                            |
| MTMS                    |                  | GPIO42    |                    | JTAG, ADC                            |
| Reset                   |                  | CHIP_PU   |                    |                                      |
| Boot                    |                  | GPIO0     |                    | Entrar en modo de arranque           |
| U.FL-R-SMT1             |                  | LNA_IN    |                    | Antena UFL                           |
| CHARGE_LED              |                  |           |                    | LED de carga                         |
| USER_LED                |                  | GPIO21    |                    | Luz de usuario                       |
| Digital microphone_CLK  |                  | GPIO42    |                    | Pin de reloj PDM para MIC            |
| Digital microphone_DATA |                  | GPIO41    |                    | Pin de datos PDM para MIC            |
| Onboard SD Card__CS     |                  | GPIO3     |                    | Pin de selección de chip de tarjeta SD|
| Onboard SD Card_SCK     |                  | GPIO7     |                    | Pin de reloj de tarjeta SD           |
| Onboard SD Card_MISO    |                  | GPIO8     |                    | Pin de entrada de datos de tarjeta SD |
| Onboard SD Card Slot_MOSI|                 | GPIO9     |                    | Pin de salida de datos de tarjeta SD  |

**Cámara**

| Pin del chip  | Descripción                          |
| :-------: | :---------------------------------- |
| GPIO10    | Pin de reloj relacionado con la cámara            |
| GPIO11    | Pin de datos de vídeo de la cámara (Y8)          |
| GPIO12    | Pin de datos de vídeo de la cámara (Y7)          |
| GPIO13    | Pin de reloj de píxeles de la cámara              |
| GPIO14    | Pin de datos de vídeo de la cámara (Y6)          |
| GPIO15    | Pin de datos de vídeo de la cámara (Y2)          |
| GPIO16    | Pin de datos de vídeo de la cámara (Y5)          |
| GPIO17    | Pin de datos de vídeo de la cámara (Y3)          |
| GPIO18    | Pin de datos de vídeo de la cámara (Y4)          |
| GPIO40    | Pin de datos I2C para la cámara             |
| GPIO39    | Pin de reloj I2C para la cámara            |
| GPIO38    | Pin de sincronización vertical de la cámara            |
| GPIO47    | Pin de sincronización horizontal de la cámara          |
| GPIO48    | Pin de datos de vídeo de la cámara (Y9)          |

</TabItem>
<TabItem value="ESP32S3Plus" label="XIAO ESP32-S3 Plus">

### Parte frontal de XIAO ESP32-S3 Plus

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32-S3_Plus_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Parte trasera de XIAO ESP32-S3 Plus

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32-S3_Plus_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**Mapa de pines**

| Pin de XIAO                 | Función         | Pin del chip  | Funciones alternativas | Descripción                          |
| :---------------------: | :-------------: | :-------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS             |           |                    | Entrada/Salida de alimentación                   |
| GND                     |                  |           |                    |                                      |
| 3V3                     | 3V3_OUT          |           |                    | Salida de alimentación                         |
| D0                      | Analógico           | GPIO1     |                    | GPIO, ADC                            |
| D1                      | Analógico           | GPIO2     |                    | GPIO, ADC                            |
| D2                      | Analógico           | GPIO3     |                    | GPIO, ADC                            |
| D3                      | Analógico           | GPIO4     |                    | GPIO, ADC                            |
| D4                      | Analógico, SDA      | GPIO5     |                    | GPIO, datos I2C, ADC                  |
| D5                      | Analógico, SCL      | GPIO6     |                    | GPIO, reloj I2C, ADC                 |
| D6                      | TX               | GPIO43    |                    | GPIO, transmisión UART                  |
| D7                      | RX               | GPIO44    |                    | GPIO, recepción UART                   |
| D8                      | Analógico, SCK      | GPIO7     |                    | GPIO, reloj SPI, ADC                 |
| D9                      | Analógico, MISO     | GPIO8     |                    | GPIO, datos SPI, ADC                  |
| D10                     | Analógico, MOSI     | GPIO9     |                    | GPIO, datos SPI, ADC                  |
| D11                     |                  | GPIO38    |                    | GPIO, ADC                            |
| D12                     |                  | GPIO39    |                    | GPIO, ADC                            |
| D13                     |                  | GPIO40    |                    |                                      |
| D14                     |                  | GPIO41    |                    |                                      |
| D15                     |                  | GPIO42    |                    |                                      |
| D16                     |                  | GPIO10    |                    |                                      |
| D17                     |                  | GPIO13    |                    |                                      |
| D18                     |                  | GPIO12    |                    |                                      |
| D19                     |                  | GPIO11    |                    |                                      |
| MTDO                    |                  | GPIO40    |                    | JTAG                                 |
| MTDI                    |                  | GPIO41    |                    | JTAG, ADC                            |
| MTCK                    |                  | GPIO39    |                    | JTAG, ADC                            |
| MTMS                    |                  | GPIO42    |                    | JTAG, ADC                            |
| Reset                   |                  | CHIP_PU   |                    |                                      |
| Boot                    |                  | GPIO0     |                    | Entrar en modo Boot                      |
| ADC_BAT                 |                  | GPIO10    |                    | Leer el valor de voltaje de la batería           |
| U.FL-R-SMT1             |                  | LNA_IN    |                    | Antena UFL                          |
| CHARGE_LED              |                  | VCC_3V3   |                    | CHG-LED                              |
| USER_LED                |                  | GPIO21    |                    | Luz de usuario                           |

</TabItem>
</Tabs>

:::caution
- Aunque el XIAO ESP32-S3 asigna GPIO41 y GPIO42 a los pines A11 y A12, debido a la naturaleza del chip ESP32-S3, los pines A11 y A12 no soportan la funcionalidad ADC. Asegúrate de distinguir y diferenciarlos.

- El conector B2B de XIAO ESP32-S3 Plus es compatible con la [placa de expansión Wio-SX1262](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) pero no con la placa de sensor de cámara enchufable.
:::

- 5V - Esta es la salida de 5V desde el puerto USB. También puedes usarla como entrada de voltaje, pero debes tener algún tipo de diodo (schottky, de señal, de potencia) entre tu fuente de alimentación externa y este pin, con el ánodo a la batería y el cátodo al pin de 5V.

- 3V3 - Esta es la salida regulada del regulador integrado. Puedes extraer 700mA

- GND - Tierra de alimentación/datos/señal

A continuación se muestra una visión general de los pines funcionales del XIAO ESP32-S3.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Número de pin</th>
   <th>Descripción de la función</th>
  </tr>
    <tr>
   <th colspan="2">-- Pines del micrófono PDM --</th>
  </tr>
  <tr>
   <td align="center">GPIO 41</td>
   <td align="center">Datos del micrófono PDM</td>
  </tr>
  <tr>
   <td align="center">GPIO 42</td>
   <td align="center">Reloj del micrófono PDM</td>
  </tr>
    <tr>
   <th colspan="2">-- Pines SPI de la tarjeta MicroSD --</th>
  </tr>
  <tr>
   <td align="center">GPIO 21</td>
   <td align="center">MicroSD SPI CS</td>
  </tr>
  <tr>
   <td align="center">D8 / A8 / Qt7 / GPIO7</td>
   <td align="center">MicroSD SPI SCK</td>
  </tr>
  <tr>
   <td align="center">D9 / A9 / Qt8 / GPIO8</td>
   <td align="center">MicroSD SPI MISO</td>
  </tr>
  <tr>
   <td align="center">D10 / A10 / Qt9 / GPIO9</td>
   <td align="center">MicroSD SPI MOSI</td>
  </tr>
    <tr>
   <th colspan="2">-- Pines de la cámara --</th>
  </tr>
    <tr>
   <td align="center">GPIO 10</td>
   <td align="center">XMCLK</td>
  </tr>
    <tr>
   <td align="center">GPIO 11</td>
   <td align="center">DVP_Y8</td>
  </tr>
    <tr>
   <td align="center">GPIO 12</td>
   <td align="center">DVP_Y7</td>
  </tr>
    <tr>
   <td align="center">GPIO 13</td>
   <td align="center">DVP_PCLK</td>
  </tr>
    <tr>
   <td align="center">GPIO 14</td>
   <td align="center">DVP_Y6</td>
  </tr>
    <tr>
   <td align="center">GPIO 15</td>
   <td align="center">DVP_Y2</td>
  </tr>
    <tr>
   <td align="center">GPIO 16</td>
   <td align="center">DVP_Y5</td>
  </tr>
    <tr>
   <td align="center">GPIO 17</td>
   <td align="center">DVP_Y3</td>
  </tr>
    <tr>
   <td align="center">GPIO 18</td>
   <td align="center">DVP_Y4</td>
  </tr>
    <tr>
   <td align="center">GPIO 38</td>
   <td align="center">DVP_VSYNC</td>
  </tr>
    <tr>
   <td align="center">GPIO 39</td>
   <td align="center">Camera SCL</td>
  </tr>
    <tr>
   <td align="center">GPIO 40</td>
   <td align="center">Camera SDA</td>
  </tr>
    <tr>
   <td align="center">GPIO 47</td>
   <td align="center">DVP_HREF</td>
  </tr>
    <tr>
   <td align="center">GPIO 48</td>
   <td align="center">DVP_Y9</td>
  </tr>
 </table>
</div>

### Soldar el header

Para utilizar las funciones de cada pin según este tutorial, recomendamos soldar los pines de antemano.

Debido al tamaño miniatura del XIAO ESP32-S3, ten cuidado al soldar los headers, no pegues pines diferentes entre sí y no pegues soldadura al blindaje u otros componentes. De lo contrario, puede provocar que el XIAO se cortocircuite o no funcione correctamente, y las consecuencias causadas por esto serán asumidas por el usuario.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

Si has elegido la versión Sense, ¡enhorabuena! Tendrás dos pines GPIO adicionales. Si planeas utilizarlos, puedes soldar un header separado en ellos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/18.jpg" style={{width:400, height:'auto'}}/></div>

## Digital

El XIAO ESP32-S3 tiene hasta 11 pines GPIO normales y 9 pines analógicos. En este ejemplo, utilizaremos el XIAO ESP32-S3, la placa de expansión XIAO y un relé para demostrar cómo usar diferentes pines digitales para lectura y escritura.

### Preparación de hardware

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3</th>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
        <th>Base de expansión Seeed Studio para XIAO con Grove OLED</th>
        <th>Grove - Relay</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Instala XIAO ESP32-S3 o Sense en la placa de expansión y conecta el relé a la interfaz **A0/D0** de la placa de expansión mediante un cable Grove. Finalmente, conecta XIAO al ordenador mediante un cable USB-C.

### Implementación de software

En este ejemplo, implementaremos el control del estado de encendido/apagado de un relé utilizando un botón conectado a la placa de expansión XIAO. Cuando se pulsa el botón, el relé se enciende y, cuando se suelta el botón, el relé se apaga.

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

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/19.gif" style={{width:500, height:'auto'}}/></div>

:::tip
Si quieres utilizar la función digital, entonces debes usar la letra "D" como prefijo del número de pin, como D4, D5. Por el contrario, si quieres utilizar la función analógica de un pin, debes usar la letra "A" como prefijo del número de pin, como A4, A5.
:::

### Para la versión Sense

Para XIAO ESP32-S3 Sense, además de utilizar los 11 pines digitales en XIAO, también puedes utilizar los dos pines en la placa de expansión, que son **D11** y **D12**. Si quieres utilizarlos, sigue los pasos a continuación.

#### Paso 1. Corta la conexión entre J1 y J2

Debido al número limitado de pines en el ESP32-S3, D11 y D12 en la placa de expansión Sense están reservados para el micrófono por defecto. Si realmente necesitas utilizar D11 y D12 para otros fines, puedes voltear la placa de expansión Sense y cortar la conexión entre J1 y J2 a lo largo de la línea blanca entre las dos almohadillas de soldadura utilizando un cuchillo afilado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/20.png" style={{width:400, height:'auto'}}/></div>

:::caution
Como se puede ver en la imagen, debido a las limitaciones de espacio de XIAO, muchas trazas de cableado son muy compactas. Por lo tanto, al cortar la conexión entre J1 y J2, ten mucho cuidado de no cortar fuera de la línea blanca, ¡de lo contrario puede causar un mal funcionamiento de la placa de desarrollo!

Aunque el XIAO ESP32-S3 asigna GPIO41 y GPIO42 a los pines A11 y A12, debido a la naturaleza del chip ESP32-S3, los pines A11 y A12 no soportan la funcionalidad ADC. Asegúrate de distinguir y diferenciar entre ellos.
:::

:::tip
Después de cortar la conexión entre J1 y J2, la función de micrófono en la placa de expansión ya no estará disponible. Si necesitas utilizar la función de micrófono, los pines D11 y D12 no se pueden utilizar simultáneamente. En este caso, puedes soldar por separado las dos almohadillas de J1 y J2 para restaurar la función de micrófono. Como se muestra en la imagen de abajo, suelda por separado las áreas roja y verde.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/21.png" style={{width:400, height:'auto'}}/></div>
:::

Para el esquema del circuito real, consulta el siguiente diagrama:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/92.png" style={{width:600, height:'auto'}}/></div>

#### Paso 2. Preparación de hardware

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
        <th>Grove - Relay</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:200, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### Paso 3. Implementación de software

El siguiente programa conmuta el relé cada 500 milisegundos. Conecta el pin SIG del relé a la interfaz GPIO42 de la placa de expansión.

```c
const int relayPin = 42;

void setup() {
  // initialize the Relay pin as an output:
  pinMode(relayPin, OUTPUT);
}

void loop() {
    // turn Relay on:
    digitalWrite(relayPin, HIGH);
    delay(500);
    // turn Relay off:
    digitalWrite(relayPin, LOW);
    delay(500);
}
```

El método anterior también es aplicable a las secciones [Digital as PWM](#digital-as-pwm) y [Analog](#analog). Solo necesitas modificar los números de pin de la placa de expansión que quieras utilizar. Esto no se repetirá más adelante.

:::caution
Para los dos pines adicionales D11 y D12 en el XIAO ESP32-S3 Sense, no hemos definido aún las macros de los pines. Es decir, todavía no puedes usar D11/A11 o D12/A12 para controlar estos dos pines, pero puedes controlar estos dos pines utilizando los números GPIO, GPIO42 y GPIO41, respectivamente. Presentaremos las definiciones de macros para estos dos pines lo antes posible y, una vez realizada la contribución, podrás usar D/A en las definiciones de pines.
:::

## Digital as PWM

Todos los pines GPIO en XIAO ESP32-S3 soportan salida PWM. Por lo tanto, puedes utilizar cualquier pin para sacar PWM para ajustar el brillo de las luces, controlar servos y otras funciones.

### Preparación de hardware

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3</th>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Variable Color LED</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Instala XIAO ESP32-S3 o Sense en la placa de expansión, luego conecta el LED de Color Variable a la interfaz A0/D0 de la placa de expansión usando un cable Grove. Finalmente, conecta el XIAO a tu ordenador mediante un cable USB-C.

### Implementación de software

En este ejemplo, mostraremos cómo usar la salida PWM para controlar el brillo de una luz.

```cpp
int LED_pin = D0;    // LED connected to digital pin 10

void setup() {
  // declaring LED pin as output
  pinMode(LED_pin, OUTPUT);
}

void loop() {
  // fade in from min to max in increments of 5 points:
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    // sets the value (range from 0 to 255):
    analogWrite(LED_pin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }

  // fade out from max to min in increments of 5 points:
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    // sets the value (range from 0 to 255):
    analogWrite(LED_pin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }
}
```

Si el programa se ejecuta correctamente, verás el siguiente efecto de funcionamiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/22.gif" style={{width:500, height:'auto'}}/></div>

## Analógico

En XIAO ESP32-S3, entre los 11 pines GPIO integrados, excepto los pines D6 y D7 utilizados para la comunicación serie, los 9 pines restantes admiten la función analógica. Puedes usar estos pines GPIO con funcionalidad analógica para leer valores de sensores que producen señales analógicas, como sensores de oxígeno, sensores de intensidad de luz, etc.

:::caution
Aunque el XIAO ESP32-S3 asigna GPIO41 y GPIO42 a los pines A11 y A12, debido a la naturaleza del chip ESP32-S3, los pines A11 y A12 no admiten la funcionalidad ADC. Asegúrate de distinguirlos y diferenciarlos.
:::

### Preparación de hardware

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3</th>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Oxygen Sensor</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/cover.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Oxygen-Sensor-ME2-O2-f20.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Instala XIAO ESP32-S3 o Sense en la placa de expansión, luego conecta el Sensor de Oxígeno a la interfaz A0/D0 de la placa de expansión con el cable Grove. Finalmente, conecta el XIAO al ordenador mediante un cable USB-C.

### Implementación de software

En el siguiente programa, usaremos el método `analogRead()` para leer el valor analógico del sensor y, usando la interfaz Serial, imprimiremos el resultado del sensor.

```cpp
// Grove - Gas Sensor(O2) test code
// Note:
// 1. It need about about 5-10 minutes to preheat the sensor
// 2. uncomment the module name you're using
// 3. modify VRefer if needed

// comment useless one
// #define MIX8410
#define O2_W2

#ifdef MIX8410
  #define O2_COEFFICIENT 0.21
#elif defined(O2_W2)
  #define O2_COEFFICIENT 0.087
#endif

const float VRefer = 3.34;       // voltage of adc reference
const int pinAdc   = A0;

void setup() 
{
    // put your setup code here, to run once:
    Serial.begin(9600);
    Serial.println("Grove - Oxygen Sensor(MIX8410) Test Code...");
}

void loop() 
{
    // put your main code here, to run repeatedly:
    float Vout =0;
    Serial.print("Vout =");

    Vout = readO2Vout();
    Serial.print(Vout);
    Serial.print(" V, Concentration of O2 is ");
    Serial.println(readConcentration());
    delay(500);
}

float readO2Vout()
{
    long sum = 0;
    for(int i=0; i<32; i++)
    {
        sum += analogRead(pinAdc);
    }

    sum >>= 5;

    float MeasuredVout = sum * (VRefer / 1023.0);
    return MeasuredVout;
}

float readConcentration()
{
    // Vout samples are with reference to 3.3V
    float MeasuredVout = readO2Vout();

    //float Concentration = FmultiMap(MeasuredVout, VoutArray,O2ConArray, 6);
    //when its output voltage is 2.0V,
    float Concentration = MeasuredVout * O2_COEFFICIENT / 2.0;
    float Concentration_Percentage=Concentration*100;
    return Concentration_Percentage;
}
```

:::tip
Si quieres usar la función analógica de un pin, debes usar la letra "A" como prefijo del número de pin, como A4, A5. Por el contrario, si quieres usar la función digital, entonces debes usar la letra "D" como prefijo del número de pin, como D4, D5.
:::

Después de cargar el programa, abre el Monitor Serie en Arduino IDE y ajusta la velocidad en baudios a 9600. Espera a que el sensor de oxígeno se caliente y entonces podrás ver el valor preciso de la concentración de oxígeno.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/23.png" style={{width:600, height:'auto'}}/></div>

## Serie

Al trabajar con Arduino IDE, la comunicación Serial es una parte esencial de muchos proyectos. Para usar Serial en Arduino IDE, primero debes abrir la ventana del Monitor Serie. Esto se puede hacer haciendo clic en el icono **Serial Monitor** en la barra de herramientas o presionando la combinación de teclas **Ctrl+Shift+M**.

### Uso general

Algunas de las funciones Serial más utilizadas incluyen:

- `Serial.begin()` -- que inicializa la comunicación a una velocidad en baudios especificada;
- `Serial.print()` -- que envía datos al puerto serie en un formato legible;
- `Serial.write()` -- que envía datos binarios al puerto serie;
- `Serial.available()` -- que comprueba si hay datos disponibles para ser leídos desde el puerto serie;
- `Serial.read()` -- que lee un solo byte de datos desde el puerto serie;
- `Serial.flush()` -- que espera a que se complete la transmisión de los datos serie salientes.

Al usar estas funciones Serial, puedes enviar y recibir datos entre la placa Arduino y tu ordenador, lo que abre muchas posibilidades para crear proyectos interactivos.

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

En este código, primero inicializamos la comunicación Serial a una velocidad en baudios de **9600** usando la función `Serial.begin()` en la función `setup()`. Luego, en la función `loop()`, usamos la función `Serial.print()` para enviar "Hello World!" al puerto serie.

También usamos la función `Serial.available()` para comprobar si hay datos disponibles para ser leídos desde el puerto serie. Si los hay, leemos el byte entrante usando la función `Serial.read()` y lo almacenamos en una variable llamada incomingByte. Luego usamos las funciones `Serial.print()` y `Serial.println()` para imprimir "I received: " seguido del valor de incomingByte en el monitor serie.

Finalmente, añadimos una función `delay()` para esperar un segundo antes de repetir el bucle. Este código demuestra cómo usar algunas de las funciones Serial más utilizadas en Arduino IDE para enviar y recibir datos a través del puerto serie.

Después de cargar el programa, abre el Monitor Serie en Arduino IDE y ajusta la velocidad en baudios a 9600. Verás el siguiente mensaje en el monitor serie, que muestra 'Hello World!' cada segundo. Además, puedes enviar contenido al XIAO ESP32-S3 a través del monitor serie, y XIAO imprimirá cada byte del contenido que envíes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/24.png" style={{width:600, height:'auto'}}/></div>

### Uso de Serial1

De acuerdo con los diagramas de pines anteriores del XIAO ESP32-S3 para parámetros específicos, podemos observar que hay un pin TX y un pin RX.
Esto es diferente de la comunicación serie, pero el uso también es muy similar, excepto que es necesario añadir algunos parámetros.
Así que a continuación, utilizaremos los pines expuestos por el chip para la comunicación serie.

Función principal que debe incluirse:

- `Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);` -- enalbe Serial1,the function prototype : `<Serial.Type>.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin);`
  - `baud`  :baud rate
  - `config`:Configuration bit
  - `rxPin` :Receive Pin
  - `txPin` :Send Pin

Vale la pena señalar que si utilizamos el puerto de pin digital para definir, este lugar debería ser `#define RX_PIN D7`、`#define TX_PIN D6`, si utilizamos el puerto de pin GPIO para definir, este lugar debería ser `#define RX_PIN 44`、`#define TX_PIN 43`, consulta los diagramas de pines de las diferentes Serie XIAO para parámetros específicos.

Aquí hay un programa de ejemplo:

```c
#define RX_PIN D7
#define TX_PIN D6
#define BAUD 115200

void setup() {
    Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);
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

Después de cargar el programa, abre el Monitor Serie en Arduino IDE y ajusta la velocidad en baudios a 115200. Luego, puedes enviar el contenido que quieras al XIAO ESP32-S3 a través del monitor serie Serial, y XIAO imprimirá cada byte del contenido que envíes. Aquí, el contenido que introduje es "Hello Everyone", mi gráfico de resultados es el siguiente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/114.png" style={{width:600, height:'auto'}}/></div>

### Uso de Software Serial

Si sientes que un puerto serie de hardware no es suficiente, también puedes utilizar la función de software serial del ESP32 para configurar algunos pines como software serial y así ampliar el número de puertos serie.

Por supuesto, recomendamos utilizar el segundo método de asignar puertos serie de hardware, ya que es una característica única del ESP32. Puedes leer más al respecto en la sección [Other Hardware Serial](#Other-Hardware-Serial).

Para los productos de chip de la serie ESP32, si necesitas utilizar el puerto serie por software, debes descargar por separado la biblioteca de puerto serie por software de terceros. Aquí se proporciona una referencia.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/plerup/espsoftwareserial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::tip
Actualmente recomendamos la versión 7.0.0 de la biblioteca EspSoftwareSerial. Otras versiones pueden tener distintos grados de problemas que impidan que el puerto serie por software funcione correctamente.
:::

Dado que has descargado la biblioteca en formato zip, abre tu Arduino IDE, haz clic en **Sketch > Include Library > Add .ZIP Library**. Elige el archivo zip que acabas de descargar, y si la biblioteca se instala correctamente, verás **Library added to your libraries** en la ventana de notificación. Lo que significa que la biblioteca se ha instalado correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

Luego, a continuación, puedes utilizar el puerto serie por software del ESP32.

:::caution
Si tienes instaladas en tu ordenador otras bibliotecas de puerto serie por software, es probable que causen un conflicto, así que por favor compruébalo tú mismo.
:::

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

En la función `setup()`, inicializamos tanto el puerto serie de hardware (`Serial.begin()`) como el puerto serie por software (`mySerial.begin()`).

En la función `loop()`, utilizamos la función `mySerial.available()` para comprobar si hay algún dato disponible para ser leído desde el puerto serie por software. Si lo hay, leemos el byte entrante usando la función `mySerial.read()` y lo almacenamos en una variable llamada data. Luego usamos las funciones `Serial.print()` y `Serial.println()` para imprimir "Received data: " seguido del valor de data en el puerto serie de hardware.

También utilizamos la función `mySerial.print()` para escribir "Hello World!" en el puerto serie por software. Esto enviará los datos desde el XIAO al dispositivo conectado al puerto serie por software.

Finalmente, añadimos una función `delay()` para esperar un segundo antes de repetir el bucle.

:::note
Ten en cuenta que, para utilizar el puerto serie por software en el ESP32-S3, debes seleccionar los pines apropiados para RX y TX que no se utilicen para ningún otro propósito. En este ejemplo, hemos utilizado los pines 9 y 10 para RX y TX, respectivamente.
:::

### Otros puertos serie de hardware

El ESP32S3 tiene un total de tres interfaces de comunicación UART, numeradas de 0 a 2, que son UART0, UART1 y UART2. Los pines de estos tres puertos serie no son fijos y se pueden reasignar a cualquier puerto IO.

Por defecto, no utilizamos **UART0** ya que se usa para la comunicación serie por USB. Puedes utilizar otros puertos serie de hardware personalizando la asignación del puerto serie de hardware.

```c
// Need this for the lower level access to set them up.
#include <HardwareSerial.h>

//Define two Serial devices mapped to the two internal UARTs
HardwareSerial MySerial0(0);
HardwareSerial MySerial1(1);

void setup()
{
    // For the USB, just use Serial as normal:
    Serial.begin(115200);

    // Configure MySerial0 on pins TX=D6 and RX=D7 (-1, -1 means use the default)
    MySerial0.begin(9600, SERIAL_8N1, -1, -1);
    MySerial0.print("MySerial0");

    // And configure MySerial1 on pins RX=D9, TX=D10
    MySerial1.begin(115200, SERIAL_8N1, D9, D10);
    MySerial1.print("MySerial1");
}

void loop()
{

}
```

A continuación, tomaremos como ejemplo el [60GHz mmWave Sensor - Human Resting Breathing and Heartbeat Module](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html), que está disponible para la venta, y explicaremos cómo utilizar los puertos serie de hardware D9 y D10 y el puerto serie USB.

Por favor, prepárate con lo siguiente.

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3</th>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
        <th>60GHz mmWave Sensor -<br/>Human Resting Breathing<br/>and Heartbeat Module</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:240, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:240, height:'auto'}}/></div></td>
        <td><div align="center"><img width = {240} src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Descarga la biblioteca del sensor a tu ordenador. Y añádela al Arduino IDE.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Aquí queremos analizar la información de los datos de latidos y respiración, luego puedes reescribir tu programa de esta manera.

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>
#include <HardwareSerial.h>

HardwareSerial MySerial(0);   //Create a new HardwareSerial class -- D6/D7

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&MySerial);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  MySerial.begin(115200, SERIAL_8N1, 9, 10); // at CPU Freq is 40MHz, work half speed of defined.

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");

  // radar.ModeSelect_fuc(1);  //1: indicates real-time transmission mode, 2: indicates sleep state mode.
  //After setting the mode, if you do not see data returned, you may need to re-power the sensor.
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.Breath_Heart();           //Breath and heartbeat information output
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case HEARTRATEVAL:
        Serial.print("Sensor monitored the current heart rate value is: ");
        Serial.println(radar.heart_rate, DEC);
        Serial.println("----------------------------");
        break;
      case HEARTRATEWAVE:  //Valid only when real-time data transfer mode is on
        Serial.print("The heart rate waveform(Sine wave) -- point 1: ");
        Serial.print(radar.heart_point_1);
        Serial.print(", point 2 : ");
        Serial.print(radar.heart_point_2);
        Serial.print(", point 3 : ");
        Serial.print(radar.heart_point_3);
        Serial.print(", point 4 : ");
        Serial.print(radar.heart_point_4);
        Serial.print(", point 5 : ");
        Serial.println(radar.heart_point_5);
        Serial.println("----------------------------");
        break;
      case BREATHNOR:
        Serial.println("Sensor detects current breath rate is normal.");
        Serial.println("----------------------------");
        break;
      case BREATHRAPID:
        Serial.println("Sensor detects current breath rate is too fast.");
        Serial.println("----------------------------");
        break;
      case BREATHSLOW:
        Serial.println("Sensor detects current breath rate is too slow.");
        Serial.println("----------------------------");
        break;
      case BREATHNONE:
        Serial.println("There is no breathing information yet, please wait...");
        Serial.println("----------------------------");
        break;
      case BREATHVAL:
        Serial.print("Sensor monitored the current breath rate value is: ");
        Serial.println(radar.breath_rate, DEC);
        Serial.println("----------------------------");
        break;
      case BREATHWAVE:  //Valid only when real-time data transfer mode is on
        Serial.print("The breath rate waveform(Sine wave) -- point 1: ");
        Serial.print(radar.breath_point_1);
        Serial.print(", point 2 : ");
        Serial.print(radar.breath_point_2);
        Serial.print(", point 3 : ");
        Serial.print(radar.breath_point_3);
        Serial.print(", point 4 : ");
        Serial.print(radar.breath_point_4);
        Serial.print(", point 5 : ");
        Serial.println(radar.breath_point_5);
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       //Add time delay to avoid program jam
}
```

Por favor, sube el programa, luego abre el monitor serial y ajusta la velocidad en baudios a 115200.

Si todo va bien, verás mensajes de datos en el monitor serial.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/2.png" alt="pir" width="800" height="auto"/></div>

## IIC

XIAO ESP32-S3 tiene una interfaz I2C que se puede utilizar para la transmisión y el análisis de datos de muchos sensores, así como para usar algunas pantallas OLED.

### Preparación de hardware

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3</th>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
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

La pantalla OLED en la placa de expansión XIAO utiliza el protocolo I2C y está conectada a la interfaz I2C de la XIAO a través del circuito I2C de la placa. Por lo tanto, podemos conectar directamente la XIAO a la placa de expansión y programarla para mostrar contenido en la pantalla.

### Implementación de software

Este ejemplo introduce cómo usar la pantalla OLED en la Seeed Studio Expansion Base para XIAO ESP32-S3.

#### Paso 1. Instala la Seeed Studio XIAO ESP32-S3 en la placa de expansión y luego conecta el cable Type-C

#### Paso 2. Instala la biblioteca u8g2

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### Paso 3. Copia el código y pégalo en el IDE de Arduino y luego súbelo

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
  u8x8.print("Hello World!");
}
```

En las primeras líneas del código, incluimos las bibliotecas necesarias como Arduino.h, U8x8lib.h y Wire.h. La biblioteca U8x8lib.h proporciona funciones para controlar la pantalla OLED, y la biblioteca Wire.h proporciona funciones para la comunicación I2C.

En la función `setup()`, inicializamos la pantalla OLED usando la función `u8x8.begin()`. También configuramos el modo de giro de la pantalla usando la función `u8x8.setFlipMode()` para rotar la pantalla 180 grados.

En la función `loop()`, configuramos la fuente usando la función `u8x8.setFont()` y especificamos la posición del cursor en la pantalla usando la función `u8x8.setCursor()`. Finalmente, usamos la función `u8x8.print()` para mostrar la cadena "Hello World!" en la pantalla OLED.

Si subes un programa a la XIAO ESP32-S3, verás contenido mostrado en la pantalla OLED de la placa de expansión.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/29.jpg" style={{width:600, height:'auto'}}/></div>

## SPI

El chip ESP32-S3 integra múltiples periféricos, incluida una interfaz SPI que se puede utilizar para conectar dispositivos SPI externos como memorias flash, pantallas, sensores y más. El ESP32-S3 también admite un modo de transferencia SPI de alta velocidad, que puede alcanzar una velocidad máxima de transferencia SPI de 80 MHz, satisfaciendo las necesidades de transferencia de datos de la mayoría de los dispositivos SPI.

### Preparación de hardware

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3</th>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
      <th>Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Main-02.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Después de preparar el hardware como se mencionó anteriormente, utiliza cables de puente para conectar la interfaz SPI del XIAO y el OLED. Consulta el siguiente diagrama para el método de cableado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/30.jpg" style={{width:800, height:'auto'}}/></div>

### Implementación de software

A continuación, tomaremos el siguiente programa como ejemplo para introducir cómo utilizar la interfaz SPI para controlar la pantalla OLED.

Instala la biblioteca u8g2.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
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

En la función `setup()`, la clase `U8G2_SH1107_128X128_1_4W_HW_SPI` se instancia con los argumentos de constructor apropiados que especifican los pines utilizados para chip select (cs), data/command (dc) y reset. Luego, se llama a la función `u8g2.begin()` para inicializar la pantalla.

En la función `loop()`, la pantalla se actualiza con nuevo contenido utilizando las funciones `u8g2.firstPage()`, `u8g2.setFont()` y `u8g2.drawStr()`. La función `u8g2.firstPage()` configura el búfer de la pantalla para escritura, mientras que `u8g2.nextPage()` muestra el contenido actualizado. El bucle do-while garantiza que el contenido se muestre continuamente hasta que el programa se detenga.

En general, este código demuestra cómo utilizar la biblioteca U8g2 para controlar una pantalla OLED y mostrar texto en ella.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/31.jpg" style={{width:600, height:'auto'}}/></div>

### Para Sense

Si compraste la versión Sense y necesitas conectarla a la placa de expansión, ten en cuenta que la tarjeta SD de la placa de expansión ocupará los pines SPI, lo que puede provocar que los pines SPI no estén disponibles.

Las interfaces de almohadillas de soldadura proporcionadas en la placa de expansión Sense permiten a los usuarios seleccionar las funciones requeridas. Entre ellas, la función de la almohadilla de soldadura **J3** es habilitar la funcionalidad SPI o de la tarjeta SD.

<table align="center">
 <tr>
     <th>Si quieres usar los pines SPI / Desactivar la tarjeta SD de la placa de expansión</th>
     <th>Si quieres habilitar la tarjeta SD en la placa de expansión / Desactivar los pines SPI</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.JPG" style={{width:300, height:'auto'}}/></div></td>
 </tr>
  <tr>
    <td>Corta a lo largo de la línea blanca fina para desconectar la conexión de la almohadilla de soldadura.</td>
    <td>Suelda juntas las dos almohadillas de soldadura.</td>
  </tr>
</table>

:::caution
Como se puede ver en la imagen, debido a las limitaciones de espacio de XIAO, muchas trazas de cableado son muy compactas. Por lo tanto, al cortar la conexión de J3, ten mucho cuidado de no cortar fuera de la línea blanca, ¡de lo contrario puede causar un mal funcionamiento de la placa de desarrollo!
:::

:::caution
Por sentido común, arriba se describe simplemente J3 como una interfaz que enciende o apaga la función de la tarjeta SD, pero esto en realidad no es exacto. La conexión de circuito real se muestra a continuación. Cortar J3 en realidad desconecta las resistencias pull-up de R4 a R6, que es la razón principal por la que la función de la tarjeta SD se deshabilita mientras que la función SPI se restaura a la normalidad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/93.png" style={{width:800, height:'auto'}}/></div>
:::

## Pines táctiles

Además de los pines funcionales comunes mencionados anteriormente, XIAO ESP32-S3/XIAO ESP32-S3 Sense también tiene 9 pines de detección táctil A0~A5, A8~A10.

Podemos comprobar si un pin ha sido tocado leyendo su valor analógico, lo cual es muy conveniente. El siguiente programa se utiliza para detectar si el pin A5 ha sido tocado.

```c
const int touch_pin = A5;

void setup(void) {
  Serial.begin(9600);
}

void loop(void) {
  Serial.print("Touch value: ");
  Serial.println(analogRead(touch_pin));
  delay(1000);
}
```

Después de subir el programa, abre el monitor serie y ajusta la velocidad en baudios a 9600. Luego toca el pin A5 y verás que el valor de lectura analógica será significativamente mayor que el valor antes de tocar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/32.gif" style={{width:600, height:'auto'}}/></div>

## Pines USB

ESP32-S3 es un microcontrolador que integra funcionalidades Wi-Fi y Bluetooth, y sus pines D+ y D- se utilizan para admitir la comunicación USB. Específicamente, estos dos pines son líneas de señal diferencial utilizadas para la transmisión de datos de alta velocidad entre dispositivos USB 2.0 y hosts.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.png" style={{width:200, height:'auto'}}/></div>

El pin D+ es la línea de polaridad positiva utilizada para enviar datos, mientras que el pin D- es la línea de polaridad negativa utilizada para enviar datos. Cuando un dispositivo USB se conecta a un host, el host detecta los cambios de voltaje en estos dos pines para determinar el estado de conexión del dispositivo y la velocidad de transmisión. Durante la transmisión de datos, los pines D+ y D- transmiten alternativamente bits de datos y señales de sincronización para lograr una transmisión de datos fiable.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/34.png" style={{width:800, height:'auto'}}/></div>

## Pines JTAG

La interfaz JTAG (Joint Test Action Group) del ESP32-S3 es una interfaz de depuración y prueba que se puede utilizar para depuración y programación de hardware de muy bajo nivel durante el desarrollo, la depuración y las pruebas. La interfaz JTAG incluye un conjunto de líneas de señal estándar, incluidas líneas de reloj, líneas de entrada de datos, líneas de salida de datos, líneas de selección de modo de prueba, líneas de reloj de modo de prueba, etc.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/35.png" style={{width:200, height:'auto'}}/></div>

La interfaz JTAG del ESP32-S3 se puede utilizar para los siguientes propósitos:

1. Depuración: La interfaz JTAG se puede utilizar para depuración y ejecución paso a paso en el chip ESP32-S3 para ayudar a los desarrolladores a encontrar y resolver errores de código.

2. Programación de flasheo: A través de la interfaz JTAG, se pueden cargar en el chip ESP32-S3 programas o firmware de depuración.

3. Lectura del estado de la CPU: La interfaz JTAG se puede utilizar para leer el estado de la CPU, el contenido de la memoria y los valores de los registros del chip ESP32-S3 para depuración y pruebas.

Cabe señalar que el uso de la interfaz JTAG requiere dispositivos de hardware y herramientas de software dedicados, así como los conocimientos y habilidades profesionales correspondientes. Por lo tanto, en general, la interfaz JTAG solo se utiliza en escenarios específicos como desarrollo, depuración y pruebas. Para los usuarios generales, ya es suficiente utilizar otras funciones e interfaces del ESP32-S3.

Si quieres saber más sobre la depuración JTAG, lee la [documentación oficial de ESP32](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/jtag-debugging/index.html).

## Solución de problemas

### P1: ¿Por qué obtengo el siguiente error cuando uso el monitor serie?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/25.png" style={{width:600, height:'auto'}}/></div>

R: Si encuentras este tipo de error, enciende el interruptor **USB CDC On Boot**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/28.png" style={{width:600, height:'auto'}}/></div>

Este problema también puede manifestarse como una salida serie vacía en Arduino IDE 2.x, y también puede estar causado por este mismo motivo.

### P2: ¿Qué funciones admite o no admite el ESP-32?

R: A continuación se muestra una lista de funciones admitidas/no admitidas proporcionada por [ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/libraries.html). A fecha de 10 de abril de 2023.

| Peripheral    | ESP32         | ESP32-S2      | ESP32-C3      | ESP32-S3      | Comments               |
|---------------|---------------|---------------|---------------|---------------|------------------------|
| ADC           | Yes           | Yes           | Yes           | Yes           |                        |
| Bluetooth     | Yes           | Not Supported | Not Supported | Not Supported | Bluetooth Classic      |
| BLE           | Yes           | Not Supported | Yes           | Yes           |                        |
| DAC           | Yes           | Yes           | Not Supported | Not Supported |                        |
| Ethernet      | Yes           | Not Supported | Not Supported | Not Supported | (*)                    |
| GPIO          | Yes           | Yes           | Yes           | Yes           |                        |
| Hall Sensor   | Yes           | Not Supported | Not Supported | Not Supported |                        |
| I2C           | Yes           | Yes           | Yes           | Yes           |                        |
| I2S           | Yes           | Yes           | Yes           | Yes           |                        |
| LEDC          | Yes           | Yes           | Yes           | Yes           |                        |
| Motor PWM     | No            | Not Supported | Not Supported | Not Supported |                        |
| Pulse Counter | No            | No            | No            | No            |                        |
| RMT           | Yes           | Yes           | Yes           | Yes           |                        |
| SDIO          | No            | No            | No            | No            |                        |
| SDMMC         | Yes           | Not Supported | Not Supported | Yes           |                        |
| Timer         | Yes           | Yes           | Yes           | Yes           |                        |
| Temp. Sensor  | Not Supported | Yes           | Yes           | Yes           |                        |
| Touch         | Yes           | Yes           | Not Supported | Yes           |                        |
| TWAI          | No            | No            | No            | No            |                        |
| UART          | Yes           | Yes           | Yes           | Yes           |                        |
| USB           | Not Supported | Yes           | Yes           | Yes           | ESP32-C3 only CDC/JTAG |
| Wi-Fi         | Yes           | Yes           | Yes           | Yes           |                        |

### P3: ¿Por qué siempre puedo ver el mensaje de depuración del chip en el monitor serie?

R: Puedes intentar desactivar la salida de mensajes de depuración utilizando el siguiente método, **Tool -> Core Debug Level: -> None** en el Arduino IDE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/90.png" style={{width:500, height:'auto'}}/></div>

Sin embargo, este método no siempre funciona; de hecho, la información de depuración del ESP32-S3 siempre se imprime desde el puerto serie, lo cual no se puede cambiar. Por favor, compréndelo, simplemente está demasiado ansioso por hacerte saber que está funcionando correctamente.

### P4: ¿Por qué corté la conexión de J3, pero aún así al probar obtengo los pines D8 y D9 en alto? ¿La escritura en la tarjeta microSD sigue teniendo una probabilidad de éxito?

En cuanto al diseño de la tarjeta SD, el circuito correcto debe tener resistencias de pull-up para que la tarjeta microSD funcione correctamente. Si descubres que el nivel de los pines y la lectura y escritura de la tarjeta siguen siendo normales después de cortar J3, esto puede ser solo una situación afortunada y no te recomendamos leer y escribir la tarjeta en este caso, ya que puede causar el problema de pérdida de los datos escritos. Mientras que los pines D8 y D9 se pueden modificar de nivel escribiendo nivel bajo después de cortar J3.

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
