---
description: A LED Driver Board for XIAO é um módulo inteligente projetado para personalizar seus espaços com luzes LED inteligentes.
title: LED Driver Board for XIAO
keywords:
  - xiao
  - luz
  - LED
image: https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/LED_Driver_Board_for_Seeed_Studio_XIAO.webp
slug: /led_driver_board
sku: 105100021
last_update:
  date: 05/21/2025
  author: Carla
createdAt: '2025-05-23'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/led_driver_board/
---

# Primeiros passos com a LED Driver Board for XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/dimension.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div><br />

A LED Driver Board for XIAO é uma solução compacta porém poderosa que oferece suporte a fitas de LED de 5V e 12V, incluindo LEDs RGB endereçáveis populares como NeoPixel WS2812, WS2813, WS2815. Compatível com todas as placas XIAO, ela permite controle inteligente e automação por meio de WLED e Home Assistant quando usada com a XIAO ESP32 Série, ao mesmo tempo em que oferece opções de alimentação flexíveis e proteção abrangente para uma operação segura e confiável em sua configuração de iluminação.

## Introdução

### Características

- **Ampla compatibilidade com LEDs**

    Driver versátil que oferece suporte a fitas de LED **5V/3A** e **12V/2A** com regulação de energia integrada. Compatível com LEDs monocromáticos e RGB endereçáveis, incluindo NeoPixel **WS2811, WS2812(B), WS2813, WS2815, SK6812 e outros LEDs com protocolo de 1 fio**, proporcionando amplas opções de iluminação.

- **Compatibilidade com XIAO para controle inteligente**

    Projetada para todas as [placas Seeed Studio XIAO](https://www.seeedstudio.com/xiao-series-page). Quando usada com a XIAO ESP32 Série (ESP32-C3/S3/C6), desbloqueia recursos inteligentes por meio de:
  - Suporte ao app **[WLED](https://kno.wled.ge/)** - Controle cores, efeitos, brilho e crie animações personalizadas ([XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html) é altamente recomendada)
  - Integração com **[Home Assistant](https://www.home-assistant.io/)** via ESPHome - Habilite controle remoto, automação e cenários de casa inteligente

- **Compatibilidade com o ecossistema Grove**

    A interface Grove onboard plug-and-play é compatível com mais de 400 módulos Seeed Studio, permitindo aprimorar facilmente a interatividade da iluminação com o ambiente e o movimento para efeitos mais inteligentes e personalizados:
  - `For AI Vision Detection`

        [Grove - Vision AI Module V2](https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html)

        [Grove Smart IR Gesture Sensor (PAJ7660)](https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html)

  - `For Temperature & Humidity Detection`

        [Grove - Temperature & Humidity Sensor (DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html)

        [Grove - AHT20 I2C Industrial Grade Temperature&Humidity Sensor](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html)

        [Grove - Temp and Humi Sensor(SHT31)](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html)

  - `For Motion Detection`

        [Grove - PIR Motion Sensor](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)

        [Grove - 3-Axis Analog Accelerometer](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-ADXL335.html)

        [Grove - IMU 9DOF (ICM20600+AK09918)](https://www.seeedstudio.com/Grove-IMU-9DOF-ICM20600-AK09918.html)

  - **[`And more 400+`](https://wiki.seeedstudio.com/pt-br/Grove_System/)**

### Especificações

<table style={{textAlign:'center'}}>
 <tr>
        <th>Item</th>
        <th>Detalhe</th>
 </tr>
    <tr>
        <td>Entrada de energia</td>
        <td>DC 12V/2A</td>
    </tr>
    <tr>
        <td>Suporte de alimentação para LED</td>
        <td>DC 12V / DC 5V</td>
    </tr>
    <tr>
        <td>Corrente máxima de operação</td>
        <td>12V/2A 5V/3A</td>
    </tr>
    <tr>
        <td>Conector de LED</td>
        <td>Conector borne de parafuso 4 pinos 3,81mm: <br></br>12V | 5V | A0 | GND</td>
    </tr>
    <tr>
        <td>Conector Grove I²C</td>
        <td>D5 | D4 | 5V | GND</td>
    </tr>
    <tr>
        <td>Botão do usuário</td>
        <td>D3</td>
    </tr>
    <tr>
        <td>Header de pinos do usuário</td>
        <td>SPI x1, Uart x1, Digital x2</td>
    </tr>
</table>

### Visão geral do hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/hardware_overview.png" style={{width:1000, height:'auto'}}/></div>

#### Entrada de energia adaptada

- [PowerAdapter, 12V/2A/24W, European Standard Plug, DC Output](https://www.seeedstudio.com/Power-Adapter-12V-2A-EU-p-5732.html)
- [PowerAdapter, 12V/2A/24W, American Standard Plug, DC Output](https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html)
- Outro adaptador de energia DC 12V com plugue **5.5mm x 2.1mm x 10±0.3mm**
- Fio DC 12V

#### Guia de LEDs suportados

<div class="table-center">
 <table style={{textAlign:'center'}}>
  <tr>
    <th>Produto</th>
    <th>Nome</th>
    <th>Tensão de operação</th>
    <th>Conectar via</th>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-WS2813-Mini.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-WS2813-Mini-p-4269.html">Grove - RGB LED (WS2813 Mini)</a></td>
      <td>5V</td>
      <td>Grove</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Stick-10-WS2813-Mini.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Mini.html">Grove - RGB LED Stick (10-WS2813 Mini)</a></td>
      <td>5V</td>
      <td>Grove</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Stick-15-WS2813-Mini.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-15-WS2813-Mini-p-4270.html">Grove - RGB LED Stick (15-WS2813 Mini)</a></td>
      <td>5V</td>
      <td>Grove</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Stick-20-WS2813-Mini.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-20-WS2813-Mini-p-4271.html">Grove - RGB LED Stick (20-WS2813 Mini)</a></td>
      <td>5V</td>
      <td>Grove</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Ring-16-WS2813-Mini.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-16-WS2813-Mini-p-4201.html">Grove - Anel RGB LED (16-WS2813 Mini)</a></td>
      <td>5V</td>
      <td>Grove</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Ring-20-WS2813-Mini.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html">Grove - Anel RGB LED (20-WS2813 Mini)</a></td>
      <td>5V</td>
      <td>Grove</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Ring-24-WS2813-Mini.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-24-WS2813-Mini-p-4202.html">Grove - Anel RGB LED (24-WS2813 Mini)</a></td>
      <td>5V</td>
      <td>Grove</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-Ultimate-RGB-LED-Ring.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Grove-Ultimate-RGB-LED-Ring-p-4203.html">Grove - Anel RGB LED Ultimate</a></td>
      <td>5V</td>
      <td>Grove</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Digital-RGB-LED-Flexi-Strip-30-LED-1-Meter.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Digital-RGB-LED-Flexi-Strip-30-LED-1-Meter-p-1665.html">Grove - WS2813B RGB LED Flexi-Strip 30 LED/m - 1m</a></td>
      <td>5V</td>
      <td>Terminal Block</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/WS2813B-Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter-p-2817.html">Grove - WS2813B RGB LED Flexi-Strip 60 LED/m - 1m</a></td>
      <td>5V</td>
      <td>Terminal Block</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/RGB-LED-Strip-Waterproof-30-LED-m-1m.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Grove-WS2813-RGB-LED-Strip-Waterproof-30-LED-m-1m.html">Grove - WS2813 RGB LED Strip à prova d'água - 30 LED/m - 1m</a></td>
      <td>5V</td>
      <td>Grove</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/RGB-LED-Strip-Waterproof-60-LED-m-1m.png" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Grove-WS2813-RGB-LED-Strip-Waterproof-60-LED-m-1m.html">Grove - WS2813 RGB LED Strip à prova d'água - 60 LED/m - 1m</a></td>
      <td>5V</td>
      <td>Grove</td>
    </tr>  
  </table>
</div>

## Primeiros passos

Esta placa de driver de LED é projetada especificamente para a série Seeed Studio XIAO. Sua funcionalidade varia dependendo do microcontrolador XIAO emparelhado. Por exemplo, quando usada com a XIAO nRF52840, ela pode ler os dados da IMU onboard para mudar dinamicamente as cores dos LEDs. Quando emparelhada com placas da série ESP32, pode ser integrada ao Home Assistant para um controle de casa inteligente perfeito. Além disso, com a XIAO ESP32-C3, ela oferece suporte à execução de WLED para efeitos avançados de LED. Siga o tutorial abaixo para explorar essas capacidades em detalhes.

### Brincar com Arduino

Você precisa configurar o ambiente Arduino para o XIAO e adicionar o pacote onboard.

:::tip
Se esta é a sua primeira vez usando o Arduino, recomendamos fortemente que você consulte [Primeiros passos com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

#### Preparação de software

**Passo 1.** Inicie o aplicativo Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Baixar Arduino IDE</font></span></strong>
    </a>
</div>

**Passo 2.** Selecione o modelo da sua placa de desenvolvimento e adicione-o ao Arduino IDE.

- Se você quiser usar **Seeed Studio XIAO SAMD21** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/#software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO RP2040** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/#software-setup)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO RP2350** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_rp2350_arduino/#setting-up-the-software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO nRF52840** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#software-setup)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO ESP32C3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started#preparação-de-software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO ESP32C6** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_getting_started/#preparação-de-software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO ESP32S3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started#preparação-de-software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO RA4M1** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/getting_started_xiao_ra4m1/#preparação-de-software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO MG24** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_mg24_getting_started/#preparação-de-software)** para concluir a adição.

**Passo 3.** Instale as bibliotecas necessárias.

- Abra o Arduino IDE, navegue até **Sketch > Include Library > Manage Libraries...** para pesquisar a biblioteca, digite a palavra-chave "**Adafruit_NeoPixel**" no Arduino Library Manager e instale a versão mais recente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl6.png" style={{width:800, height:'auto'}}/></div>

- [Baixe a biblioteca Seeed_Arduino_LSM6DS3](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) como um arquivo zip, abra o Arduino IDE, navegue até **Sketch > Include Library > Add .ZIP Library...** e abra o arquivo zip baixado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" style={{width:800, height:'auto'}}/></div>

:::note

O MG24 atualmente não é suportado pela biblioteca NeoPixel padrão. No entanto, a Silicon Labs fornece uma alternativa no core oficial do MG24: o driver <strong>[ezWS2812](https://github.com/SiliconLabs/arduino/tree/refs/heads/main)</strong>, que suporta LEDs WS2812 via SPI de hardware ou GPIO. Você pode encontrar mais detalhes <strong>[aqui](https://forum.seeedstudio.com/t/driving-an-led-strip-with-xiao-mg24-neopixel-fastled-ezws2812/284695)</strong>.

:::

#### Exemplo simples

**Passo 1.** Preparação de hardware

<table align="center">
 <tr>
  <th>Seeed Studio XIAO RP2350</th>
        <th>Placa Controladora de LED para XIAO</th>
        <th>Grove - RGB LED Stick (15-WS2813 Mini)</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550%20XIAO%20RP2350-45font.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/45-front.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/Grove-RGB-LED-Stick-15-WS2813-Mini.png" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-15-WS2813-Mini-p-4270.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

**Passo 2.**  Conecte Seeed Studio XIAO RP2350, a Placa Controladora de LED para XIAO e o Grove - RGB LED Stick (15-WS2813 Mini) como mostrado abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/rp2350_ledDriver_led.jpg" style={{width:700, height:'auto'}}/></div>

**Passo 3.** O seguinte programa de exemplo controla LEDs contendo 3 NeoPixel para que cada um dos três LEDs exiba as cores **vermelho**, **verde** e **azul**

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

Envie o programa e alimente a Placa Controladora de LED; se tudo correr bem, você verá algo assim:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/rp2350_ledDriver_led_result.jpg" style={{width:700, height:'auto'}}/></div>

#### LED com sincronização de cor e movimento

**Passo 1.** Preparação de hardware

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
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"></a>
  </div></td>
 </tr>
</table>

**Passo 2.**  Conecte Seeed Studio XIAO nRF52840, a Placa Controladora de LED para XIAO e o LED WS2812 como mostrado abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/nRF52840_ledDriver_led_result.jpg" style={{width:700, height:'auto'}}/></div>

**Passo 3.** O código a seguir funciona lendo os dados do sensor de aceleração LSM6DS3 onboard do XIAO nRF52840 e alterando a cor da tira de LED em tempo real, com a cor mapeada a partir do valor atual de aceleração.

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

Carregue o programa e alimente a LED Driver Board; se tudo correr bem, você verá algo assim:

<div style={{textAlign:'center'}}>
<video width={225} height={400} controls preload>
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/nRF52840_ledDriver_led_result.mp4" />
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/nRF52840_ledDriver_led_result.webm" />
</video>
</div>

Quando você sacode o módulo, a cor da tira de luz muda. Quanto mais forte a agitação, mais brilhante a cor.

### Brinque com o Home Assistant via ESPHome

#### Preparação de hardware

<div class="table-center">
  <table style={{textAlign:'center'}}>
    <tr>
      <th>Dispositivos Home Assistant</th>
    </tr>
    <tr>
        <td><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:300, height:'auto'}}/></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/home_assistant_topic/#-devices-for-home-assistant-" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

#### Preparação de software

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:700, height:'auto'}}/></div>

[ESPHome](https://esphome.io/) é uma ferramenta que tem como objetivo tornar o gerenciamento das suas placas ESP o mais simples possível. Ele lê um arquivo de configuração YAML e cria um firmware personalizado que é instalado no seu dispositivo ESP. Dispositivos ou sensores adicionados na configuração do ESPHome aparecerão automaticamente na interface do Home Assistant. O ESPHome pode ajudar você a conectar e enviar os dados para dispositivos Home Assistant.

:::note
Se esta é a sua primeira vez usando Home Assistant e ESPHome, você pode seguir <strong>[aqui](https://www.home-assistant.io/installation/)</strong> para um guia passo a passo sobre como instalar o Home Assistant.
:::

ESPHome está disponível como um **Add-On do Home Assistant** e pode ser simplesmente instalado pela loja de add-ons.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png" style={{width:900, height:'auto'}}/></div>

- **Passo 1.** Clique em **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **Passo 2.** Ative todas as opções e clique em **START**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

Você verá a seguinte janela se o ESPHome for carregado com sucesso

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

#### LEDs sincronizados com a cor da temperatura

**Passo 1.** Preparação de hardware

<table align="center" style={{textAlign:'center', overflowX: 'scroll', border: '1px solid #ccc', }}>
 <tr>
  <th>XIAO ESP32S3</th>
        <th>LED Driver Board for XIAO</th>
        <th>Grove - Temperature & Humidity Sensor (DHT11)</th>
        <th>WS2812 LED</th>
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
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"></a>
  </div></td>
 </tr>
</table>

**Passo 2.** Conecte o Seeed Studio XIAO ESP32S3, a LED Driver Board for XIAO e o WS2812 LED como mostrado abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/esp32s3_ledDriver_led.jpg" style={{width:700, height:'auto'}}/></div>

**Passo 3.** Abra a página do ESPHome e clique em **+ NEW DEVICE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

**Passo 4.** Clique em CONTINUE

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

**Passo 5.** Digite um **Name** para o dispositivo e insira as credenciais de Wi-Fi, como **Network name** e **Password**. Em seguida, clique em **NEXT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/1.png" style={{width:400, height:'auto'}}/></div>

**Passo 6.** Selecione **ESP32-S3** e clique

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/2.png" style={{width:400, height:'auto'}}/></div>

**Passo 7.** Clique em **SKIP** porque vamos configurar esta placa manualmente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

**Passo 8.** Clique em **EDIT** abaixo da placa recém-criada

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/3.png" style={{width:400, height:'auto'}}/></div>

**Passo 9.** Copie os seguintes códigos para o final do arquivo .yaml; o XIAO ESP32S3 lê a temperatura de um sensor DHT11 e altera a cor de um LED RGB com base em quão distante a temperatura está de um valor alvo, usando azul para frio, vermelho para quente e verde para normal.

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

**Passo 10.** Clique no botão Install no canto superior direito. Em seguida, selecione o último item **Manual download**, selecione **Modern format**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/31.png" style={{width:500, height:'auto'}}/></div>

Levará bastante tempo para fazer o download e compilar, portanto, seja paciente. Quando tudo estiver pronto, o firmware será baixado automaticamente para o seu computador.

**Passo 11.** Usando a [ferramenta web ESPhome](https://web.esphome.io/?dashboard_install) para enviar o firmware para o XIAO ESP32S3, clique em **CONNECT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" style={{width:800, height:'auto'}}/></div>

Selecione a porta serial do XIAO ESP32 na janela popup, clique em **INSTALL** e depois selecione o arquivo .bin baixado nos passos acima.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" style={{width:500, height:'auto'}}/></div>

**Passo 11.** Depois que a instalação for concluída com sucesso, você verá algo assim:

<div style={{textAlign:'center'}}>
<video width={600} height={338} controls preload>
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led_result.mp4" />
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led_result.webm" />
</video>
</div>

Quando o ar frio é soprado para o sensor de temperatura e umidade, a cor da faixa de LED muda gradualmente de vermelho para azul à medida que a temperatura cai.

**Passo 12.** Adicionar ao Dashboard

Abra **Setting** >> **Devices & Services**, você pode encontrar o seu dispositivo ESPhome, clique em **ADD** e adicione-o ao dashboard, você verá algo assim:

  <div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led1.png"/>
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led2.png"/>
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led3.png"/>
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led4.png"/>
    <img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ha_led5.png"/>
  </div>

### Executar WLED

#### Preparação de hardware

<table align="center">
 <tr>
  <th>XIAO ESP32C3</th>
        <th>LED Driver Board for XIAO</th>
        <th>WS2812 LED</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991054-seeed-studio-xiao-esp32c3-45font_1.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/45-front.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/ws2812_led.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/LED-Driver-Board-for-Seeed-Studio-XIAO-p-6451.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"></a>
  </div></td>
 </tr>
</table>

Conecte o Seeed Studio XIAO nRF52840, a LED Driver Board for XIAO e o LED WS2812 como mostrado abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/esp32c3_ledDriver_led.jpg" style={{width:600, height:'auto'}}/></div>

#### Instalar WLED

**Passo 1.** Abra <strong>[WLED install web](https://install.wled.me/)</strong> e conecte o seu XIAO ESP32C3 ao PC, clique em **Install** e conecte sua porta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/wled_install.png" style={{width:800, height:'auto'}}/></div>

**Passo 2.** Após a instalação bem-sucedida, será necessário configurar o Wi-Fi do dispositivo; é recomendado manter o seu XIAO ESP32C3 e o seu computador/celular na mesma LAN.

**Passo 3.** Agora, você pode clicar em **VISIT DEVICE** para controlar a sua faixa de LED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/visit_device.png" style={{width:800, height:'auto'}}/></div>

**Passo 4.** Ou você pode instalar o App **WLED** na loja de aplicativos do seu celular e encontrar o seu dispositivo de LED com o ícone de + no canto superior direito do software.

Se tudo funcionar bem, você verá algo assim:

<div style={{textAlign:'center'}}>
<video width={600} height={338} controls preload>
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/wled_result.webm" />
  <source src="https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/wled_result.mp4" />
</video>
</div>

## Recursos

- **[PDF]**: [LED_Driver_Board_for_Seeed_Studio_XIAO_SCH_PDF](https://files.seeedstudio.com/wiki/LED_Driver_Board_for_XIAO/LED_Driver_Board_for_Seeed_Studio_XIAO_SCH_PDF_20250417.pdf)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
