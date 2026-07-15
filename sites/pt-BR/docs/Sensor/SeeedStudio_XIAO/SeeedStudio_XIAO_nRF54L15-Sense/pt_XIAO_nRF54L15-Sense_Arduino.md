---
description: 'Este artigo foi desenvolvido com base no core Arduino para nRF54L15 escrito pelo desenvolvedor lolren, com o objetivo de fornecer tutoriais de referência para usuários do XIAO nRF54L15 desenvolverem na Arduino IDE.'
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
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_arduino/
---

Este artigo é desenvolvido com base no XIAO nRF54L15 Sense com a plataforma Arduino.

## Agradecimentos

Agradecimentos especiais ao desenvolvedor **[lolren](https://github.com/lolren)** por fornecer suporte de adaptação Arduino para o chip nRF54L15. Isso possibilita o desenvolvimento e a aplicação prática do XIAO nRF54L15 no ecossistema Arduino. Agradecemos também por seus esforços contínuos e contribuições para a construção do ecossistema de código aberto relacionado.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/lolren/nrf54-arduino-core" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> repositório de lolren</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## Introdução

### Preparação de hardware

Antes de começar, prepare o hardware XIAO nRF54L15 ou XIAO nRF54L15 Sense.

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Software

:::tip
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Introdução ao Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

- **Passo 1.** Baixe e instale a versão estável da Arduino IDE de acordo com o seu sistema operacional.

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Baixar Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

- **Passo 2.** Adicionar URL do Boards Manager

  Abra File → Preferences

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_1.png" style={{width:400, height:'auto'}}/></div><br/>

  Adicione a URL para suporte ao XIAO nRF54L15 no campo Additional Boards Manager URLs.

```js
https://raw.githubusercontent.com/lolren/nrf54-arduino-core/main/package_nrf54l15clean_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_2.png" style={{width:800, height:'auto'}}/></div><br/>

- **Passo 3.** Selecione **XIAO nRF54L15 / Sense** e a porta serial

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_3.png" style={{width:800, height:'auto'}}/></div><br/>

- **Passo 4.** Envie o programa

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

Pinos digitais são interfaces do MCU para leitura e escrita de níveis lógicos alto/baixo, que podem adquirir dados externos e controlar dispositivos periféricos. Esta seção ilustra as funções dos pinos digitais implementando o controle de ligar/desligar LED e o efeito de luz respiratória por PWM.

### Preparação de hardware

Você precisa preparar o XIAO nRF54L15 Sense e dispositivos Grove.

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
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="Grove – Chainable RGB LED V2.0" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Chainable-RGB-Led-V2-0.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

### Software

No repositório de lolren, os pinos D0 a D10 do XIAO nRF54L15 são redefinidos como PIN_D0 a PIN_D10.

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

Conecte o Grove – Chainable RGB LED ao pino 0 da Seeed Studio Grove Base for XIAO. O Grove – Chainable RGB LED apresentará efeitos de piscagem e escurecimento gradual de luz respiratória.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_2.gif" style={{width:800, height:'auto'}}/></div><br/>

## UART

UART é um protocolo de comunicação assíncrono half-duplex, comumente usado para depuração de dispositivos, saída de logs e transmissão de dados. O XIAO nRF54L15 fornece um conjunto de pinos UART. Esta seção demonstra o uso de UART por meio da impressão de dados seriais.

### Preparação de hardware

Você precisa preparar o XIAO nRF54L15 e o dispositivo CH340.

<table align="center">
 <tr>
        <th>Seeed Studio XIAO nRF54L15 Sense</th>
        <th>Módulo&Adaptador CH340G USB para Serial (TTL)</th>
 </tr>
 <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-317990026-ch340g-usb-to-serial-_ttl_-module_adapter_1.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Software

No XIAO nRF54L15, D6 e D7 correspondem aos pinos TX e RX, respectivamente. No arquivo de redefinição de pinos de lolren, D6 e D7 são definidos como **PIN_SERIAL1_RX** e **PIN_SERIAL1_TX**. As portas seriais disponíveis para uso são **Serial1** ou **Serial2**.

:::tip
Se você não estiver familiarizado com a distribuição dos pinos do XIAO nRF54L15, clique em [XIAO nRF54L15 Pin List](https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_getting_started/#hardware-overview) para verificar.
:::

:::caution
Não use `PIN_SERIAL1_RX` e `PIN_SERIAL1_TX` para `Serial` (porta serial USB).
Isso interromperá os canais padrão de download e depuração e pode resultar em falha na gravação do programa (falha de SWD/CDC).
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
Fiação
<table align="center">
 <tr>
     <th>XIAO nRF54L15</th>
     <th>Módulo&Adaptador CH340G USB para Serial (TTL)</th>
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

Abra qualquer ferramenta de monitor serial, defina a taxa de baud para 115200 e você poderá observar os dados de saída.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_5.png" style={{width:800, height:'auto'}}/></div><br/>

## Analógico

Os pinos analógicos são usados para ler sinais de tensão contínuos por meio do ADC. Eles podem ser conectados a vários sensores, como potenciômetros, fotorresistores, termistores para detecção de temperatura, sensores analógicos de escala de cinza e sensores infravermelhos. Esta seção demonstra as funções dos pinos analógicos lendo o valor de ajuste de um botão de potenciômetro.

### Preparação de hardware

Você precisa preparar o XIAO nRF54L15 Sense e dispositivos Grove.

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
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Software

Há quatro grupos de pinos analógicos no XIAO nRF54L15, nomeados de A0 a A3. Na redefinição de pinos fornecida por lolren, esses pinos são definidos como PIN_A0 a PIN_A3.

:::tip
Se você não estiver familiarizado com a distribuição dos pinos do XIAO nRF54L15, clique em [XIAO nRF54L15 Pin List](https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_getting_started/#hardware-overview) para verificar.
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

Conecte o Grove-Rotary Angle Sensor ao Seeed Studio Grove Base for XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_5.jpg" style={{width:800, height:'auto'}}/></div><br/>

Gire o botão e o Monitor Serial do Arduino imprimirá o valor de leitura do ADC e a tensão analógica convertida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_3.png" style={{width:800, height:'auto'}}/></div><br/>

## I2C

I2C é um protocolo de comunicação serial síncrono que permite a comunicação multi-dispositivo entre dispositivos mestre e escravo por meio da linha de clock SCL e da linha de dados SDA. O XIAO nRF54L15 / Sense fornece dois conjuntos de interfaces I2C. Esta seção demonstra as funções de I2C controlando o display OLED na Expansion Board Base for XIAO.

### Preparação de hardware

Você precisa preparar o XIAO nRF54L15 Sense e dispositivos com interfaces I2C.

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Software

No XIAO nRF54L15, D4 e D5 servem respectivamente como os pinos SCL e SDA.
No framework lolren, o pino D4 é redefinido como **PIN_WIRE_SCL**, e o pino D5 é redefinido como **PIN_WIRE_SDA**.

:::tip
Se você não estiver familiarizado com a distribuição dos pinos do XIAO nRF54L15, clique em [XIAO nRF54L15 Pin List](https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_getting_started/#hardware-overview) para verificar.
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

Após enviar o programa, as frases "Hello World!" e "XIAO nRF54L15!" serão exibidas na Expansion Board Base for XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_4.jpg" style={{width:800, height:'auto'}}/></div><br/>

## SPI

SPI é um protocolo de comunicação serial síncrono e full-duplex. Geralmente usa quatro fios — clock SCK, MOSI, MISO e CS — para alcançar transmissão de dados em alta velocidade entre dispositivos mestre e escravo. Em comparação com I2C, o SPI apresenta uma taxa de transmissão mais alta, menor latência e comunicação mais simples e direta. No entanto, ele requer mais pinos, e cada dispositivo escravo geralmente ocupa uma linha de seleção de chip independente. É comumente usado para conectar periféricos de alta velocidade, como memória Flash, cartões SD, displays LCD/OLED, módulos ADC/DAC e sensores de alta velocidade. Esta seção demonstra o uso de SPI conectando um display de papel eletrônico.

### Preparação de hardware

Você precisa preparar um XIAO nRF54L15 e um dispositivo que suporte comunicação SPI.

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>

### Software

- Instale a biblioteca GxEPD2

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_6.png" style={{width:400, height:'auto'}}/></div><br/>

Modifique e defina por macro os pinos SPI de acordo com o arquivo de redefinição de pinos do Lolren.

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

Após enviar o programa, `Hello XIAO nRF54L15` será exibido na tela de papel eletrônico.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_6.jpg" style={{width:800, height:'auto'}}/></div>

## FAQ

- P1: Ao enviar o programa, é exibido um aviso informando que não há caminho para py.

- R: C:\Users\yourname\AppData\Local\Arduino15\packages\nrf54l15clean\hardware\nrf54l15clean\0.6.27\platform.txt.
  - Altere `tools.python3.cmd.windows=py` para `tools.python3.cmd.windows=python`.
  - Altere `tools.python3.args.windows=-3` para `tools.python3.args.windows=`.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
