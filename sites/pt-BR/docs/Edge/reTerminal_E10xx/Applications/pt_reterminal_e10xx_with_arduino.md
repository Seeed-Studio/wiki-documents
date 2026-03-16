---
description: Este artigo descreve como fazer o reTerminal E Série Display ePaper funcionar com Arduino.
title: reTerminal E Série Display ePaper Funcionar com Arduino
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /reterminal_e10xx_with_arduino
sidebar_position: 4
last_update:
  date: 08/21/2025
  author: Allen
createdAt: '2025-08-21'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_arduino/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Primeiros Passos com o reTerminal E Série Display ePaper no Arduino

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/147.png" style={{width:800, height:'auto'}}/></div>

## Introdução

O reTerminal E Série representa o mais recente avanço da Seeed Studio em soluções industriais de IHM, com ESP32-S3 como controlador principal e displays ePaper integrados. Este guia irá conduzi-lo pela programação do display ePaper em dispositivos reTerminal E Série usando o Arduino IDE, permitindo que você crie interfaces e aplicativos personalizados com excelente visibilidade e consumo de energia ultrabaixo.

### Materiais Necessários

Para concluir este tutorial, prepare um dos seguintes dispositivos reTerminal E Série:

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparação do Ambiente

Para programar o reTerminal E Série Display ePaper com Arduino, você precisará configurar o Arduino IDE com suporte a ESP32.

:::tip
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Primeiros Passos com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

#### Configuração do Arduino IDE

**Passo 1.** Baixe e instale o [Arduino IDE](https://www.arduino.cc/en/software) e inicie o aplicativo Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div><br />

**Passo 2.** Adicione o suporte à placa ESP32 ao Arduino IDE.

No Arduino IDE, vá para **File > Preferences** e adicione a seguinte URL no campo "Additional Boards Manager URLs":

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**Passo 3.** Instale o pacote da placa ESP32.

Navegue até **Tools > Board > Boards Manager**, pesquise por "esp32" e instale o pacote ESP32 da Espressif Systems.

**Passo 4.** Selecione a placa correta.

Vá para **Tools > Board > ESP32 Arduino** e selecione **XIAO_ESP32S3**.

**Passo 5.** Conecte o seu reTerminal E Série Display ePaper ao computador usando um cabo USB-C.

**Passo 6.** Selecione a porta correta em **Tools > Port**.

## Programação do Display ePaper

O **reTerminal E1001 possui um display ePaper preto e branco de 7,5 polegadas**, enquanto o **reTerminal E1002 é equipado com um display ePaper colorido de 7,3 polegadas**. Ambos os displays oferecem excelente visibilidade em várias condições de iluminação com consumo de energia ultrabaixo, tornando-os ideais para aplicações industriais que exigem displays sempre ligados com uso mínimo de energia.

### Usando a Biblioteca Seeed_GFX

Para controlar o display ePaper, usaremos a biblioteca Seeed_GFX, que fornece suporte abrangente para diversos dispositivos de display da Seeed Studio.

**Passo 1.** Baixe a biblioteca Seeed_GFX do GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Passo 2.** Instale a biblioteca adicionando o arquivo ZIP no Arduino IDE. Vá para **Sketch > Include Library > Add .ZIP Library** e selecione o arquivo ZIP baixado.

:::note
Se você já instalou a biblioteca TFT_eSPI anteriormente, talvez seja necessário removê-la temporariamente ou renomeá-la na pasta de bibliotecas do Arduino para evitar conflitos, pois Seeed_GFX é um fork de TFT_eSPI com recursos adicionais para displays da Seeed Studio.
:::

<Tabs>
<TabItem value="Programming reTerminal E1001" label="Programando reTerminal E1001" default>

#### Programando reTerminal E1001 (Display ePaper Preto & Branco de 7,5 polegadas)

Vamos explorar um exemplo simples que demonstra operações básicas de desenho no display ePaper preto e branco.

**Passo 1.** Abra o exemplo de sketch da biblioteca Seeed_GFX: **File > Examples > Seeed_GFX > ePaper > Basic > HelloWorld**

**Passo 2.** Crie um novo arquivo chamado `driver.h` na mesma pasta do seu sketch. Você pode fazer isso clicando no botão de seta no Arduino IDE e selecionando "New Tab", depois nomeando-o como `driver.h`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select.jpg" style={{width:1000, height:'auto'}}/></div>

**Passo 3.** Acesse a [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) e selecione **reTerminal E1001** na lista de dispositivos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

**Passo 4.** Copie o código de configuração gerado e cole-o no arquivo `driver.h`. O código deve se parecer com isto:

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

**Passo 5.** Faça o upload do sketch para o seu reTerminal E1001. Você deverá ver o display mostrando vários gráficos, incluindo linhas, texto e formas, demonstrando as capacidades básicas de desenho.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/148.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
<TabItem value="Programming reTerminal E1002" label="Programando reTerminal E1002">

#### Programando reTerminal E1002 (Display ePaper Colorido de 7,3 polegadas)

O display ePaper colorido oferece suporte às cores vermelho, preto e branco, permitindo interfaces visualmente mais ricas.

**Passo 1.** Abra o sketch de exemplo colorido da biblioteca Seeed_GFX: **File > Examples > Seeed_GFX > ePaper > Colorful > HelloWorld**

**Passo 2.** Crie um novo arquivo chamado `driver.h` na mesma pasta do seu sketch, seguindo o mesmo processo de antes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select2.jpg" style={{width:1000, height:'auto'}}/></div>

**Passo 3.** Acesse a [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) e selecione **reTerminal E1002** na lista de dispositivos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx2.jpg" style={{width:900, height:'auto'}}/></div>

**Passo 4.** Copie o código de configuração gerado e cole-o no arquivo `driver.h`. O código deve se parecer com isto:

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

**Passo 5.** Faça o upload do sketch para o seu reTerminal E1002. O display exibirá gráficos coloridos demonstrando as capacidades de cores completas do display ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/149.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
</Tabs>

### Usando a Biblioteca GxEPD2

Além do Seeed_GFX, você também pode usar a biblioteca `GxEPD2` para controlar o display ePaper do reTerminal. `GxEPD2` é uma biblioteca poderosa e popular que oferece suporte a uma ampla variedade de displays e-paper.

**Instalando a Biblioteca GxEPD2**

Para garantir que você tenha os recursos mais recentes e suporte ao dispositivo, é melhor instalar a biblioteca `GxEPD2` manualmente a partir do seu repositório GitHub.

**Passo 1.** Acesse o repositório GitHub do GxEPD2. Clique no botão "Code" e selecione "Download ZIP" para salvar a biblioteca no seu computador.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/ZinggJM/GxEPD2" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Baixar a biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Passo 2.** No Arduino IDE, instale a biblioteca a partir do arquivo baixado. Navegue até **Sketch > Include Library > Add .ZIP Library...** e selecione o arquivo ZIP que você acabou de baixar.

**Passo 3.** A biblioteca `GxEPD2` precisa da `Adafruit GFX Library` para funcionar, que você também deve instalar. A maneira mais fácil de fazer isso é através do Gerenciador de Bibliotecas: vá para **Tools > Manage Libraries...**, procure por "Adafruit GFX Library" e clique em "Install".

:::note
Embora `GxEPD2` esteja disponível no Gerenciador de Bibliotecas do Arduino para conveniência, a versão encontrada lá muitas vezes pode estar desatualizada. O repositório do GitHub é a fonte definitiva para a versão mais recente, que inclui os recursos mais novos, correções de bugs e suporte para os displays de papel eletrônico mais recentes. Portanto, baixar a biblioteca diretamente do GitHub é a abordagem recomendada para garantir que você tenha o código mais atual.
:::

<Tabs>
<TabItem value="Programming reTerminal E1001 GxEPD2" label="Programando reTerminal E1001" default>

#### Programando reTerminal E1001 (Tela em preto e branco)

Aqui está o código de exemplo para exibir "Hello World!" no display de papel eletrônico preto e branco do reTerminal E1001 usando a biblioteca `GxEPD2`. Defina `EPD_SELECT` como `0` para selecionar o driver para o E1001.

```cpp
#include <GxEPD2_BW.h>
#include <GxEPD2_7C.h>
#include <Fonts/FreeMonoBold9pt7b.h>

// Define ePaper SPI pins
#define EPD_SCK_PIN  7
#define EPD_MOSI_PIN 9
#define EPD_CS_PIN   10
#define EPD_DC_PIN   11
#define EPD_RES_PIN  12
#define EPD_BUSY_PIN 13

// Select the ePaper driver to use
// 0: reTerminal E1001 (7.5'' B&W)
// 1: reTerminal E1002 (7.3'' Color)
#define EPD_SELECT 0

#if (EPD_SELECT == 0)
#define GxEPD2_DISPLAY_CLASS GxEPD2_BW
#define GxEPD2_DRIVER_CLASS GxEPD2_750_GDEY075T7 // 7.5'' B&W driver
#elif (EPD_SELECT == 1)
#define GxEPD2_DISPLAY_CLASS GxEPD2_7C
#define GxEPD2_DRIVER_CLASS GxEPD2_730c_GDEP073E01 // 7.3'' Color driver
#endif

#define MAX_DISPLAY_BUFFER_SIZE 16000

#define MAX_HEIGHT(EPD)                                        \
    (EPD::HEIGHT <= MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8) \
         ? EPD::HEIGHT                                         \
         : MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8))

// Initialize display object
GxEPD2_DISPLAY_CLASS<GxEPD2_DRIVER_CLASS, MAX_HEIGHT(GxEPD2_DRIVER_CLASS)>
    display(GxEPD2_DRIVER_CLASS(/*CS=*/EPD_CS_PIN, /*DC=*/EPD_DC_PIN,
                                /*RST=*/EPD_RES_PIN, /*BUSY=*/EPD_BUSY_PIN));

SPIClass hspi(HSPI);

void setup()
{
  pinMode(EPD_RES_PIN, OUTPUT);
  pinMode(EPD_DC_PIN, OUTPUT);
  pinMode(EPD_CS_PIN, OUTPUT);

  // Initialize SPI
  hspi.begin(EPD_SCK_PIN, -1, EPD_MOSI_PIN, -1);
  display.epd2.selectSPI(hspi, SPISettings(2000000, MSBFIRST, SPI_MODE0));

  // Initialize display
  display.init(0);
  helloWorld();
}

const char HelloWorld[] = "Hello World!";

void helloWorld()
{
  display.setRotation(0);
  display.setFont(&FreeMonoBold9pt7b);
  display.setTextColor(GxEPD_BLACK);
  int16_t tbx, tby; uint16_t tbw, tbh;
  display.getTextBounds(HelloWorld, 0, 0, &tbx, &tby, &tbw, &tbh);

  // center the bounding box by transposition of the origin:
  uint16_t x = ((display.width() - tbw) / 2) - tbx;
  uint16_t y = ((display.height() - tbh) / 2) - tby;

  display.setFullWindow();
  display.firstPage();
  do
  {
    display.fillScreen(GxEPD_WHITE);
    display.setCursor(x, y);
    display.print(HelloWorld);
  }
  while (display.nextPage());
}

void loop() {};
```

</TabItem>
<TabItem value="Programming reTerminal E1002 GxEPD2" label="Programando reTerminal E1002">

#### Programando reTerminal E1002 (Tela colorida)

Para o reTerminal E1002, você só precisa mudar o valor de `EPD_SELECT` para `1`. Isso selecionará o driver apropriado para o display de papel eletrônico colorido de 7,3 polegadas. O restante do código permanece o mesmo.

```cpp
#include <GxEPD2_BW.h>
#include <GxEPD2_7C.h>
#include <Fonts/FreeMonoBold9pt7b.h>

// Define ePaper SPI pins
#define EPD_SCK_PIN  7
#define EPD_MOSI_PIN 9
#define EPD_CS_PIN   10
#define EPD_DC_PIN   11
#define EPD_RES_PIN  12
#define EPD_BUSY_PIN 13

// Select the ePaper driver to use
// 0: reTerminal E1001 (7.5'' B&W)
// 1: reTerminal E1002 (7.3'' Color)
#define EPD_SELECT 1

#if (EPD_SELECT == 0)
#define GxEPD2_DISPLAY_CLASS GxEPD2_BW
#define GxEPD2_DRIVER_CLASS GxEPD2_750_GDEY075T7 // 7.5'' B&W driver
#elif (EPD_SELECT == 1)
#define GxEPD2_DISPLAY_CLASS GxEPD2_7C
#define GxEPD2_DRIVER_CLASS GxEPD2_730c_GDEP073E01 // 7.3'' Color driver
#endif

#define MAX_DISPLAY_BUFFER_SIZE 16000

#define MAX_HEIGHT(EPD)                                        \
    (EPD::HEIGHT <= MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8) \
         ? EPD::HEIGHT                                         \
         : MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8))

// Initialize display object
GxEPD2_DISPLAY_CLASS<GxEPD2_DRIVER_CLASS, MAX_HEIGHT(GxEPD2_DRIVER_CLASS)>
    display(GxEPD2_DRIVER_CLASS(/*CS=*/EPD_CS_PIN, /*DC=*/EPD_DC_PIN,
                                /*RST=*/EPD_RES_PIN, /*BUSY=*/EPD_BUSY_PIN));

SPIClass hspi(HSPI);

void setup()
{
  pinMode(EPD_RES_PIN, OUTPUT);
  pinMode(EPD_DC_PIN, OUTPUT);
  pinMode(EPD_CS_PIN, OUTPUT);

  // Initialize SPI
  hspi.begin(EPD_SCK_PIN, -1, EPD_MOSI_PIN, -1);
  display.epd2.selectSPI(hspi, SPISettings(2000000, MSBFIRST, SPI_MODE0));

  // Initialize display
  display.init(0);
  helloWorld();
}

const char HelloWorld[] = "Hello World!";

void helloWorld()
{
  display.setRotation(0);
  display.setFont(&FreeMonoBold9pt7b);
  // For the color screen, you can set different colors, e.g., GxEPD_BLACK, GxEPD_RED
  display.setTextColor(GxEPD_GREEN);
  int16_t tbx, tby; uint16_t tbw, tbh;
  display.getTextBounds(HelloWorld, 0, 0, &tbx, &tby, &tbw, &tbh);

  // center the bounding box by transposition of the origin:
  uint16_t x = ((display.width() - tbw) / 2) - tbx;
  uint16_t y = ((display.height() - tbh) / 2) - tby;

  display.setFullWindow();
  display.firstPage();
  do
  {
    display.fillScreen(GxEPD_WHITE);
    display.setCursor(x, y);
    display.print(HelloWorld);
  }
  while (display.nextPage());
}

void loop() {};
```

</TabItem>
</Tabs>

:::note
Displays de papel eletrônico têm uma taxa de atualização relativamente lenta (normalmente de 1 a 3 segundos para uma atualização completa). Isso é um comportamento normal e é uma compensação pelo consumo de energia ultrabaixo e excelente visibilidade sem retroiluminação.
:::

## Rotinas de uso para o hardware do reTerminal

Agora vamos explorar os principais recursos do reTerminal E Série com exemplos de código em Arduino.

### Controle de LED

O reTerminal E Série possui um LED onboard que pode ser controlado via GPIO6. Observe que a lógica do LED é invertida (LOW = ON, HIGH = OFF).

```cpp
// reTerminal E Series - LED Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define LED_PIN 6  // GPIO6 - Onboard LED (inverted logic)

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("LED Control Example");

  // Configure LED pin
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  // Turn LED ON (LOW because it's inverted)
  digitalWrite(LED_PIN, LOW);
  Serial1.println("LED ON");
  delay(1000);

  // Turn LED OFF (HIGH because it's inverted)
  digitalWrite(LED_PIN, HIGH);
  Serial1.println("LED OFF");
  delay(1000);
}
```

### Controle de buzzer

O reTerminal E Série inclui um buzzer no GPIO7 que pode produzir vários tons e sons de alerta.

```cpp
// reTerminal E Series - Buzzer Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define BUZZER_PIN 45  // GPIO45 - Buzzer

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("Buzzer Control Example");
}

void loop() {
  Serial1.println("Simple beep");
  tone(BUZZER_PIN, 1000, 100);  // 1kHz for 100ms
  delay(1000);

  Serial1.println("Double beep");
  for (int i = 0; i < 2; i++) {
    tone(BUZZER_PIN, 2000, 50);  // 2kHz for 50ms
    delay(100);
  }
  delay(900);

  Serial1.println("Long beep");
  tone(BUZZER_PIN, 800, 500);  // 800Hz for 500ms
  delay(1500);

  Serial1.println("Alarm sound");
  for (int i = 0; i < 5; i++) {
    tone(BUZZER_PIN, 1500, 100);
    delay(100);
    tone(BUZZER_PIN, 1000, 100);
    delay(100);
  }
  delay(2000);
}
```

**Buzzer com tons**

```cpp
#define SERIAL_RX 44
#define SERIAL_TX 43
#define BUZZER_PIN 45  // GPIO7 - Buzzer

// Reference:  This list was adapted from the table located here:
//    http://www.phy.mtu.edu/~suits/notefreqs.html
#define  NOTE_C0  16.35  //C0
#define  NOTE_Db0 17.32  //C#0/Db0
#define  NOTE_D0  18.35  //D0
#define  NOTE_Eb0 19.45 //D#0/Eb0
#define  NOTE_E0  20.6  //E0
#define  NOTE_F0  21.83  //F0
#define  NOTE_Gb0 23.12  //F#0/Gb0
#define  NOTE_G0  24.5  //G0
#define  NOTE_Ab0 25.96  //G#0/Ab0
#define  NOTE_A0  27.5  //A0
#define  NOTE_Bb0 29.14  //A#0/Bb0
#define  NOTE_B0  30.87  //B0
#define  NOTE_C1  32.7  //C1
#define  NOTE_Db1 34.65  //C#1/Db1
#define  NOTE_D1  36.71  //D1
#define  NOTE_Eb1 38.89  //D#1/Eb1
#define  NOTE_E1  41.2  //E1
#define  NOTE_F1  43.65  //F1
#define  NOTE_Gb1 46.25  //F#1/Gb1
#define  NOTE_G1  49 //G1
#define  NOTE_Ab1 51.91  //G#1/Ab1
#define  NOTE_A1  55  //A1
#define  NOTE_Bb1 58.27  //A#1/Bb1
#define  NOTE_B1  61.74  //B1
#define  NOTE_C2  65.41  //C2 (Middle C)
#define  NOTE_Db2 69.3  //C#2/Db2
#define  NOTE_D2  73.42  //D2
#define  NOTE_Eb2 77.78  //D#2/Eb2
#define  NOTE_E2  82.41  //E2
#define  NOTE_F2  87.31  //F2
#define  NOTE_Gb2 92.5  //F#2/Gb2
#define  NOTE_G2  98  //G2
#define  NOTE_Ab2 103.83  //G#2/Ab2
#define  NOTE_A2  110  //A2
#define  NOTE_Bb2 116.54  //A#2/Bb2
#define  NOTE_B2  123.47  //B2
#define  NOTE_C3  130.81  //C3
#define  NOTE_Db3 138.59  //C#3/Db3
#define  NOTE_D3  146.83  //D3
#define  NOTE_Eb3 155.56  //D#3/Eb3
#define  NOTE_E3  164.81  //E3
#define  NOTE_F3  174.61  //F3
#define  NOTE_Gb3 185  //F#3/Gb3
#define  NOTE_G3  196  //G3
#define  NOTE_Ab3 207.65  //G#3/Ab3
#define  NOTE_A3  220  //A3
#define  NOTE_Bb3 233.08  //A#3/Bb3
#define  NOTE_B3  246.94  //B3
#define  NOTE_C4  261.63  //C4
#define  NOTE_Db4 277.18  //C#4/Db4
#define  NOTE_D4  293.66  //D4
#define  NOTE_Eb4 311.13  //D#4/Eb4
#define  NOTE_E4  329.63  //E4
#define  NOTE_F4  349.23  //F4
#define  NOTE_Gb4 369.99  //F#4/Gb4
#define  NOTE_G4  392  //G4
#define  NOTE_Ab4 415.3  //G#4/Ab4
#define  NOTE_A4  440  //A4
#define  NOTE_Bb4 466.16  //A#4/Bb4
#define  NOTE_B4  493.88  //B4
#define  NOTE_C5  523.25  //C5
#define  NOTE_Db5 554.37  //C#5/Db5
#define  NOTE_D5  587.33  //D5
#define  NOTE_Eb5 622.25  //D#5/Eb5
#define  NOTE_E5  659.26  //E5
#define  NOTE_F5  698.46  //F5
#define  NOTE_Gb5 739.99  //F#5/Gb5
#define  NOTE_G5  783.99  //G5
#define  NOTE_Ab5 830.61  //G#5/Ab5
#define  NOTE_A5  880  //A5
#define  NOTE_Bb5 932.33  //A#5/Bb5
#define  NOTE_B5  987.77  //B5
#define  NOTE_C6  1046.5  //C6
#define  NOTE_Db6 1108.73  //C#6/Db6
#define  NOTE_D6  1174.66  //D6
#define  NOTE_Eb6 1244.51  //D#6/Eb6
#define  NOTE_E6  1318.51  //E6
#define  NOTE_F6  1396.91  //F6
#define  NOTE_Gb6 1479.98  //F#6/Gb6
#define  NOTE_G6  1567.98  //G6
#define  NOTE_Ab6 1661.22  //G#6/Ab6
#define  NOTE_A6  1760  //A6
#define  NOTE_Bb6 1864.66  //A#6/Bb6
#define  NOTE_B6  1975.53  //B6
#define  NOTE_C7  2093  //C7
#define  NOTE_Db7 2217.46  //C#7/Db7
#define  NOTE_D7  2349.32  //D7
#define  NOTE_Eb7 2489.02  //D#7/Eb7
#define  NOTE_E7  2637.02  //E7
#define  NOTE_F7  2793.83  //F7
#define  NOTE_Gb7 2959.96  //F#7/Gb7
#define  NOTE_G7  3135.96  //G7
#define  NOTE_Ab7 3322.44  //G#7/Ab7
#define  NOTE_A7  3520  //A7
#define  NOTE_Bb7 3729.31  //A#7/Bb7
#define  NOTE_B7  3951.07  //B7
#define  NOTE_C8  4186.01  //C8
#define  NOTE_Db8 4434.92  //C#8/Db8
#define  NOTE_D8  4698.64  //D8
#define  NOTE_Eb8 4978.03  //D#8/Eb8

void buzzer_tone (float noteFrequency, long noteDuration, int silentDuration){
  if(silentDuration==0) {silentDuration=1;}

  tone(BUZZER_PIN, noteFrequency, noteDuration);
  delay(noteDuration);     // milliseconds
  noTone(BUZZER_PIN);      // stop the tone

  delay(silentDuration);
}

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("Buzzer Control Example");

  // Configure buzzer pin
  pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
  buzzer_tone(NOTE_C5, 80, 20);
  buzzer_tone(NOTE_E5, 80, 20);
  buzzer_tone(NOTE_G5, 80, 20);
  buzzer_tone(NOTE_C6, 150, 0);
  delay(30000);
}
```

**Funções do buzzer:**

- `digitalWrite()`: Controle simples LIGADO/DESLIGADO para bipes básicos
- `tone(pin, frequency, duration)`: Gera frequências específicas para melodias ou alertas
- `noTone(pin)`: Interrompe a geração de tom

**Padrões de alerta comuns:**

- Bipe único: Confirmação
- Bipe duplo: Aviso
- Bipe triplo: Erro
- Contínuo: Alerta crítico

### Botões de usuário

A reTerminal E Série possui três botões programáveis pelo usuário que podem ser usados para vários propósitos de controle. Esta seção demonstra como ler os estados dos botões e responder aos pressionamentos usando Arduino.

A reTerminal E Série possui três botões conectados ao ESP32-S3:

- **KEY0** (GPIO3): Botão direito (botão verde)
- **KEY1** (GPIO4): Botão do meio
- **KEY2** (GPIO5): Botão esquerdo

Todos os botões são ativos em nível baixo, o que significa que leem LOW quando pressionados e HIGH quando soltos.

#### Exemplo básico de leitura de botão

Este exemplo demonstra como detectar pressionamentos de botões e imprimir mensagens no monitor serial.

```cpp
// reTerminal E Series - Button Test
// Based on hardware schematic

// Define button pins according to schematic
const int BUTTON_KEY0 = 3;   // KEY0 - GPIO3
const int BUTTON_KEY1 = 4;   // KEY1 - GPIO4
const int BUTTON_KEY2 = 5;   // KEY2 - GPIO5

// Button state variables
bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

void setup() {
  // Initialize serial communication
  Serial1.begin(115200, SERIAL_8N1, 44, 43);
  while (!Serial1) {
    delay(10); // Wait for serial port to connect
  }

  Serial1.println("=================================");
  Serial1.println("reTerminal E Series - Button Test");
  Serial1.println("=================================");
  Serial1.println("Press any button to see output");
  Serial1.println();

  // Configure button pins as inputs
  // Hardware already has pull-up resistors, so use INPUT mode
  pinMode(BUTTON_KEY0, INPUT);
  pinMode(BUTTON_KEY1, INPUT);
  pinMode(BUTTON_KEY2, INPUT);

  // Read initial states
  lastKey0State = digitalRead(BUTTON_KEY0);
  lastKey1State = digitalRead(BUTTON_KEY1);
  lastKey2State = digitalRead(BUTTON_KEY2);

  Serial1.println("Setup complete. Ready to detect button presses...");
}

void loop() {
  // Read current button states
  bool key0State = digitalRead(BUTTON_KEY0);
  bool key1State = digitalRead(BUTTON_KEY1);
  bool key2State = digitalRead(BUTTON_KEY2);

  // Check KEY0
  if (key0State != lastKey0State) {
    if (key0State == LOW) {
      Serial1.println("KEY0 (GPIO3) pressed!");
    } else {
      Serial1.println("KEY0 (GPIO3) released!");
    }
    lastKey0State = key0State;
    delay(50); // Debounce delay
  }

  // Check KEY1
  if (key1State != lastKey1State) {
    if (key1State == LOW) {
      Serial1.println("KEY1 (GPIO4) pressed!");
    } else {
      Serial1.println("KEY1 (GPIO4) released!");
    }
    lastKey1State = key1State;
    delay(50); // Debounce delay
  }

  // Check KEY2
  if (key2State != lastKey2State) {
    if (key2State == LOW) {
      Serial1.println("KEY2 (GPIO5) pressed!");
    } else {
      Serial1.println("KEY2 (GPIO5) released!");
    }
    lastKey2State = key2State;
    delay(50); // Debounce delay
  }

  delay(10); // Small delay to prevent excessive CPU usage
}
```

**Como o código funciona:**

1. **Definição de pinos**: Definimos constantes para o número do pino GPIO de cada botão.

2. **Configuração de pinos**: Em `setup()`, configuramos cada pino de botão como `INPUT`.

3. **Detecção de botão**: Em `loop()`, verificamos continuamente o estado de cada botão usando `digitalRead()`. Quando um botão é pressionado, o pino lê LOW.

4. **Debouncing**: Um simples atraso de 200ms após cada pressionamento evita múltiplas detecções de um único toque devido ao bounce mecânico.

5. **Saída serial**: Cada pressionamento de botão aciona uma mensagem para o monitor serial para depuração e verificação.

---

**Passo 1.** Envie o código para o seu dispositivo reTerminal E Série.

**Passo 2.** Abra o Serial Monitor na Arduino IDE (Tools > Serial Monitor).

**Passo 3.** Defina o baud rate para 115200.

**Passo 4.** Pressione cada botão e observe a saída no Serial Monitor.

Saída esperada ao pressionar os botões:

```
=================================
reTerminal E Series - Button Test
=================================
Press any button to see output

KEY0 (GPIO3) pressed!
KEY0 (GPIO3) released!
KEY1 (GPIO4) pressed!
KEY1 (GPIO4) released!
KEY2 (GPIO5) pressed!
KEY2 (GPIO5) released!
```

### Sensor ambiental (SHT4x)

A reTerminal E Série inclui um sensor integrado de temperatura e umidade SHT4x conectado via I2C.

#### Instalando bibliotecas necessárias

Instale duas bibliotecas via Arduino Library Manager (**Tools > Manage Libraries...**):

1. Procure e instale "**Sensirion I2C SHT4x**"
2. Procure e instale "**Sensirion Core**" (dependência)

#### Exemplo básico de temperatura e umidade

```cpp
// reTerminal E Series - SHT40 Temperature & Humidity Sensor Example

#include <Wire.h>
#include <SensirionI2cSht4x.h>

// Serial configuration for reTerminal E Series
#define SERIAL_RX 44
#define SERIAL_TX 43

// I2C pins for reTerminal E Series
#define I2C_SDA 19
#define I2C_SCL 20

// Create sensor object
SensirionI2cSht4x sht4x;

void setup() {
    // Initialize Serial1 for reTerminal E Series
    Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
    while (!Serial1) {
        delay(10);
    }

    Serial1.println("SHT4x Basic Example");

    // Initialize I2C with custom pins
    Wire.begin(I2C_SDA, I2C_SCL);

    uint16_t error;
    char errorMessage[256];

    // Initialize the sensor
    sht4x.begin(Wire, 0x44);

    // Read and print serial number
    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);

    if (error) {
        Serial1.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial1.println(errorMessage);
    } else {
        Serial1.print("Serial Number: ");
        Serial1.println(serialNumber);
        Serial1.println();
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(5000);  // Wait 5 seconds between measurements

    float temperature;
    float humidity;

    // Measure temperature and humidity with high precision
    error = sht4x.measureHighPrecision(temperature, humidity);

    if (error) {
        Serial1.print("Error trying to execute measureHighPrecision(): ");
        errorToString(error, errorMessage, 256);
        Serial1.println(errorMessage);
    } else {
        Serial1.print("Temperature: ");
        Serial1.print(temperature);
        Serial1.print("°C\t");
        Serial1.print("Humidity: ");
        Serial1.print(humidity);
        Serial1.println("%");
    }
}
```

**Função setup:**

1. **Inicialização serial**: Usa `Serial1` com os pinos 44 (RX) e 43 (TX) específicos da reTerminal E Série
2. **Inicialização I2C**: Configura o I2C com os pinos 19 (SDA) e 20 (SCL)
3. **Inicialização do sensor**: Chama `sht4x.begin(Wire, 0x44)` para inicializar o sensor SHT4x no endereço 0x44
4. **Leitura do número de série**: Lê e exibe o número de série exclusivo do sensor para verificação

**Função loop:**

1. **Atraso**: Aguarda 5 segundos entre as medições para evitar superamostragem
2. **Medição**: Usa `measureHighPrecision()` para leituras precisas (leva cerca de 8,3ms)
3. **Tratamento de erros**: Verifica erros e os converte em mensagens legíveis usando `errorToString()`
4. **Exibir resultados**: Imprime a temperatura em Celsius e a umidade relativa em porcentagem

**Saída esperada**

```
SHT4x Basic Example
Serial Number: 331937553

Temperature: 27.39°C Humidity: 53.68%
Temperature: 27.40°C Humidity: 53.51%
Temperature: 27.38°C Humidity: 53.37%
```

### Sistema de gerenciamento de bateria

A reTerminal E Série inclui capacidade de monitoramento da tensão da bateria através de um pino ADC com circuito divisor de tensão.

#### Monitoramento simples da tensão da bateria

```cpp
// reTerminal E Series - Simple Battery Voltage Reading

// Serial configuration
#define SERIAL_RX 44
#define SERIAL_TX 43

// Battery monitoring pins
#define BATTERY_ADC_PIN 1      // GPIO1 - Battery voltage ADC
#define BATTERY_ENABLE_PIN 21  // GPIO21 - Battery monitoring enable

void setup() {
  // Initialize serial
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("Battery Voltage Monitor");

  // Configure battery monitoring enable pin
  pinMode(BATTERY_ENABLE_PIN, OUTPUT);
  digitalWrite(BATTERY_ENABLE_PIN, HIGH);  // Enable battery monitoring

  // Configure ADC
  analogReadResolution(12);  // 12-bit resolution
  analogSetPinAttenuation(BATTERY_ADC_PIN, ADC_11db);

  delay(100);  // Allow circuit to stabilize
}

void loop() {
  // Enable battery monitoring
  digitalWrite(BATTERY_ENABLE_PIN, HIGH);
  delay(5);

  // Read voltage in millivolts
  int mv = analogReadMilliVolts(BATTERY_ADC_PIN);

  // Disable battery monitoring
  digitalWrite(BATTERY_ENABLE_PIN, LOW);

  // Calculate actual battery voltage (2x due to voltage divider)
  float batteryVoltage = (mv / 1000.0) * 2;

  // Print voltage
  Serial1.print("Battery: ");
  Serial1.print(batteryVoltage, 2);
  Serial1.println(" V");

  delay(2000);
}
```

**Explicação do código:**

- GPIO1 lê a tensão dividida da bateria através do ADC
- GPIO21 habilita o circuito de monitoramento da bateria
- A tensão real da bateria é o dobro da tensão medida devido ao divisor de tensão
- Para uma bateria LiPo totalmente carregada, espere em torno de 4,2V
- Quando a bateria está fraca, a tensão cai para cerca de 3,3V

**Saída esperada**

```
Battery Voltage Monitor

Battery: 4.18 V
Battery: 4.19 V
Battery: 4.18 V
```

### Usando o cartão MicroSD

Para aplicações que exigem armazenamento adicional, como um porta-retratos digital ou registro de dados, a reTerminal E Série inclui um slot para cartão MicroSD.

Insira um cartão microSD se você planeja usar o dispositivo como um porta-retratos digital ou se precisar de armazenamento adicional.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
A reTerminal E Série só é compatível com cartões MicroSD de até 64GB formatados com o sistema de arquivos **Fat32**.
:::

#### Operações básicas com cartão SD: listando arquivos

Este exemplo demonstra como inicializar o cartão SD, detectar quando ele é inserido ou removido e listar todos os arquivos e diretórios em sua raiz. O código é idêntico tanto para o **reTerminal E1001** quanto para o **reTerminal E1002**.

Copie o código a seguir para o seu sketch na Arduino IDE.

```cpp
#include <SD.h>
#include <SPI.h>

// SD Card Pin Definitions
#define SD_EN_PIN   16  // Power enable for the SD card slot
#define SD_DET_PIN  15  // Card detection pin
#define SD_CS_PIN   14  // Chip Select for the SD card
#define SD_MOSI_PIN 9   // Shared with ePaper Display
#define SD_MISO_PIN 8
#define SD_SCK_PIN  7   // Shared with ePaper Display

// Serial configuration for reTerminal E Series
#define SERIAL_RX 44
#define SERIAL_TX 43

// Use the HSPI bus for the SD card to avoid conflict with other peripherals
SPIClass spiSD(HSPI);

// Global variables to track SD card state
bool sdMounted = false;
bool lastCardPresent = false;
unsigned long lastCheckMs = 0;
const unsigned long checkIntervalMs = 1000; // Check for card changes every second

// Checks if a card is physically inserted.
// The detection pin is LOW when a card is present.
bool isCardInserted() {
  return digitalRead(SD_DET_PIN) == LOW;
}

// Helper function to print indentation for directory listing
void printIndent(uint8_t level) {
  for (uint8_t i = 0; i < level; ++i) {
    Serial1.print("  ");
  }
}

// Recursively lists files and directories
void listDir(File dir, uint8_t level) {
  while (true) {
    File entry = dir.openNextFile();
    if (!entry) {
      // No more entries in this directory
      break;
    }

    printIndent(level);
    if (entry.isDirectory()) {
      Serial1.print("[DIR]  ");
      Serial1.println(entry.name());
      // Recurse into the subdirectory
      listDir(entry, level + 1);
    } else {
      // It's a file, print its name and size
      Serial1.print("[FILE] ");
      Serial1.print(entry.name());
      Serial1.print("  ");
      Serial1.print(entry.size());
      Serial1.println(" bytes");
    }
    entry.close();
  }
}

// Opens the root directory and starts the listing process
void listRoot() {
  File root = SD.open("/");
  if (!root) {
    Serial1.println("[SD] Failed to open root directory.");
    return;
  }
  if (!root.isDirectory()) {
    Serial1.println("[SD] Root is not a directory.");
    root.close();
    return;
  }
  Serial1.println("[SD] Listing files in /");
  listDir(root, 0);
  root.close();
}

// Initializes the SPI bus and mounts the SD card
bool mountSD() {
  // Enable power to the SD card slot
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);
  delay(5);

  // Initialize the HSPI bus with the correct pins for the SD card
  spiSD.end(); // Guard against repeated begin calls
  spiSD.begin(SD_SCK_PIN, SD_MISO_PIN, SD_MOSI_PIN, SD_CS_PIN);

  // Attempt to mount the SD card file system
  if (!SD.begin(SD_CS_PIN, spiSD)) {
    Serial1.println("[SD] MicroSD initialization failed. Check card formatting.");
    return false;
  }
  Serial1.println("[SD] MicroSD mounted successfully.");
  return true;
}

// Unmounts the SD card by releasing the SPI bus
void unmountSD() {
  SD.end();
  spiSD.end();
  Serial1.println("[SD] MicroSD unmounted.");
}

void setup() {
  // Start the secondary serial port for output
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10); // Wait for Serial1 to be ready
  }

  // Set up the card detection pin with an internal pull-up resistor
  pinMode(SD_DET_PIN, INPUT_PULLUP);
  // Set up the power enable pin
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);

  // Check for a card at startup
  lastCardPresent = isCardInserted();
  if (lastCardPresent) {
    sdMounted = mountSD();
    if (sdMounted) {
      listRoot(); // If mounted, list files
    }
  } else {
    Serial1.println("[SD] No card detected at startup. Please insert a card.");
  }
}

void loop() {
  // Periodically check for card insertion or removal without blocking the loop
  unsigned long now = millis();
  if (now - lastCheckMs >= checkIntervalMs) {
    lastCheckMs = now;

    bool present = isCardInserted();
    if (present != lastCardPresent) {
      lastCardPresent = present; // Update the state

      if (present) {
        Serial1.println("\n[SD] Card inserted.");
        if (!sdMounted) {
          sdMounted = mountSD();
        }
        if (sdMounted) {
          listRoot(); // List files upon insertion
        }
      } else {
        Serial1.println("\n[SD] Card removed.");
        if (sdMounted) {
          unmountSD();
          sdMounted = false;
        }
      }
    }
  }
  // You can place other non-blocking code here
}
```

##### Explicação do código

- **Definições de pinos:** O código começa definindo os pinos GPIO usados para o slot do cartão MicroSD. Note que os pinos SPI (`MOSI`, `SCK`) são compartilhados com o display de papel eletrônico, mas um Chip Select separado (`SD_CS_PIN`) e uma instância SPI dedicada (`spiSD`) garantem que eles possam ser usados de forma independente.
- **Inicialização do SPI:** Instanciamos um novo objeto SPI, `spiSD(HSPI)`, para usar o segundo controlador SPI de hardware do ESP32 (HSPI). Esta é a melhor prática para evitar conflitos com outros dispositivos SPI.
- **Detecção do cartão:** A função `isCardInserted()` lê o `SD_DET_PIN`. No hardware do reTerminal, esse pino é puxado para LOW quando um cartão está presente.
- **Montar/Desmontar:** A função `mountSD()` habilita a alimentação do cartão, configura o barramento HSPI com os pinos corretos e chama `SD.begin()` para inicializar o sistema de arquivos. `unmountSD()` libera os recursos.
- **Listagem de arquivos:** `listRoot()` abre o diretório raiz (`/`), e `listDir()` é uma função recursiva que percorre o sistema de arquivos, imprimindo os nomes de todos os arquivos e diretórios.
- **`setup()`:** Inicializa `Serial1` para saída, configura o pino de detecção do cartão e faz uma verificação inicial para ver se um cartão já está inserido quando o dispositivo é ligado.
- **`loop()`:** Em vez de verificar o cartão constantemente, o código usa um temporizador não bloqueante (`millis()`) para verificar uma mudança no status do cartão uma vez por segundo. Se uma mudança for detectada (cartão inserido ou removido), ele monta ou desmonta o cartão e imprime o status no monitor serial.

##### Resultados esperados

1. Envie o código para o seu reTerminal.
2. Abra o Serial Monitor da Arduino IDE (**Tools > Serial Monitor**).
3. Certifique-se de que a taxa de baud esteja configurada para **115200**.

Você verá uma saída correspondente às seguintes ações:

- **Na inicialização sem cartão:** O monitor irá imprimir `[SD] No card detected at startup...`
- **Quando você inserir um cartão:** O monitor irá imprimir `[SD] Card inserted.`, seguido por uma listagem completa de todos os arquivos e diretórios no cartão.
- **Quando você remover o cartão:** O monitor irá imprimir `[SD] Card removed.`

```
[FILE] live.0.shadowIndexGroups  6 bytes
[FILE] reverseStore.updates  1 bytes
[DIR]  journals.repair
[FILE] Cab.modified  0 bytes
[FILE] live.1.indexPositionTable  8192 bytes
[FILE] live.1.indexTermIds  8192 bytes
[FILE] tmp.spotlight.loc  2143 bytes
[FILE] live.1.shadowIndexTermIds  624 bytes
[FILE] live.1.indexArrays  65536 bytes
[FILE] live.1.shadowIndexArrays  65536 bytes
[FILE] live.1.indexHead  4096 bytes
[FILE] live.1.indexPostings  4096 bytes
```

### Exemplo avançado: exibindo imagens BMP a partir do cartão SD

Este exemplo abrangente combina as funcionalidades das seções anteriores. Vamos escrever um programa que lê um arquivo de imagem Bitmap (`.bmp`) de um cartão MicroSD e o exibe na tela de papel eletrônico do reTerminal. Isso demonstra uma aplicação prática e do mundo real para o dispositivo.

O programa irá procurar por um arquivo chamado `test.bmp` no diretório raiz do cartão SD.

#### Preparação

Antes de executar o código, você deve preparar corretamente tanto o cartão MicroSD quanto o arquivo de imagem. Este é o passo mais crítico para garantir que a imagem seja exibida corretamente.

**1. Formate o cartão MicroSD**

Prepare um cartão MicroSD (64GB ou menor é recomendado) e formate-o usando o sistema de arquivos **FAT32**.

**2. Prepare o arquivo de imagem**

O método para preparar a imagem difere um pouco dependendo do modelo do seu reTerminal. Siga o guia que corresponde ao seu dispositivo.

<Tabs>
<TabItem value="For reTerminal E1001 (B&W Screen)" label="Para reTerminal E1001 (Tela P&B)" default>

A tela em preto e branco só pode exibir pixels pretos e brancos. Embora o nosso código consiga converter uma imagem colorida em escala de cinza em tempo real, você obterá muito melhor contraste e detalhes ao **pré-converter a imagem para uma escala de cinza de alta qualidade no seu computador**.

1. **Redimensione a imagem:** Redimensione sua imagem para **800x480 pixels**.

2. **Converta para escala de cinza (recomendado):** No seu editor de imagens, converta primeiro a imagem para escala de cinza. No **GIMP**:
    - Vá para o menu **Colors > Desaturate > Desaturate...**. Escolha um modo como "Luminosity" para obter os melhores resultados.

3. **Salve como um BMP padrão:** Siga os mesmos passos do guia da tela colorida para salvar o arquivo. Mesmo que a imagem esteja em escala de cinza, salvá-la como um BMP de 24 bits garante a máxima compatibilidade com o código.
    - Vá em **File > Export As...**, dê o nome `test.bmp`.
    - Na janela de exportação, em **Advanced Options**, selecione **"24 bits: R8 G8 B8"**.
    - Clique em **Export**.

4. **Copie para o cartão SD:** Copie o arquivo final `test.bmp` para o diretório raiz do seu cartão MicroSD.

</TabItem>
<TabItem value="For reTerminal E1002 (Color Screen)" label="Para reTerminal E1002 (Tela Colorida)">

A tela colorida pode exibir 6 cores: Preto, Branco, Vermelho, Amarelo, Azul e Verde. O código fornecido inclui um algoritmo de "cor mais próxima" que mapeia de forma inteligente qualquer cor da sua imagem de origem para a melhor cor disponível na tela. Para resultados ideais, siga estes passos:

1. **Redimensione a imagem:** Usando qualquer editor de imagens, redimensione sua imagem para **800x480 pixels**.

2. **Salvar como um BMP Padrão:** O código foi projetado para ler arquivos BMP de 24 ou 32 bits **não compactados**. Usar um editor de imagem profissional é a melhor forma de garantir que o formato esteja correto. Recomendamos o software gratuito e de código aberto **GIMP**:
    - Abra sua imagem redimensionada no GIMP.
    - Vá até o menu **File > Export As...**.
    - Nomeie o arquivo como `test.bmp` e clique em **Export**.
    - Na caixa de diálogo "Export Image as BMP" que aparecer, expanda as **Advanced Options**.
    - Selecione **"24 bits: R8 G8 B8"**. Este é o formato não compactado mais compatível.
    - Clique em **Export**.

3. **Copiar para o Cartão SD:** Copie o arquivo final `test.bmp` para o diretório raiz do seu cartão MicroSD.

</TabItem>
</Tabs>

Se você quiser usar imagens prontas para teste, pode usar as [imagens de exemplo](https://github.com/ZinggJM/GxEPD2/tree/master/examples/GxEPD2_SD_Example/bitmaps) fornecidas pelo GxEPD2.

#### O Código

Este é o código final e validado. Ele inclui todas as verificações necessárias e o algoritmo avançado de correspondência de cores. Basta definir a macro `EPD_SELECT` como `0` para o E1001 (P&B) ou `1` para o E1002 (Colorido).

<Tabs>
<TabItem value="For reTerminal E1001 (B&W Screen)" label="Para reTerminal E1001 (Tela P&B)" default>

```cpp
#include <SD.h>
#include <SPI.h>
#include <GxEPD2_BW.h>
#include <GxEPD2_7C.h>
#include <cmath>

// === Pin Definitions ===
// ePaper Display
#define EPD_SCK_PIN  7
#define EPD_MOSI_PIN 9
#define EPD_CS_PIN   10
#define EPD_DC_PIN   11
#define EPD_RES_PIN  12
#define EPD_BUSY_PIN 13

// SD Card
#define SD_EN_PIN   16
#define SD_DET_PIN  15
#define SD_CS_PIN   14
#define SD_MISO_PIN 8

// Serial Port
#define SERIAL_RX 44
#define SERIAL_TX 43

// File to display
const char* BMP_FILENAME = "/test.bmp";

// === ePaper Driver Selection ===
// 0: reTerminal E1001 (7.5'' B&W)
// 1: reTerminal E1002 (7.3'' Color)
#define EPD_SELECT 1

#if (EPD_SELECT == 0)
#define GxEPD2_DISPLAY_CLASS GxEPD2_BW
#define GxEPD2_DRIVER_CLASS GxEPD2_750_GDEY075T7
#elif (EPD_SELECT == 1)
#define GxEPD2_DISPLAY_CLASS GxEPD2_7C
#define GxEPD2_DRIVER_CLASS GxEPD2_730c_GDEP073E01
#endif

// For displays with RAM limitations
#define MAX_DISPLAY_BUFFER_SIZE 16000
#define MAX_HEIGHT(EPD) (EPD::HEIGHT <= MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8) ? EPD::HEIGHT : MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8))

// === Global Objects ===
SPIClass hspi(HSPI);

GxEPD2_DISPLAY_CLASS<GxEPD2_DRIVER_CLASS, MAX_HEIGHT(GxEPD2_DRIVER_CLASS)>
    display(GxEPD2_DRIVER_CLASS(/*CS=*/EPD_CS_PIN, /*DC=*/EPD_DC_PIN, /*RST=*/EPD_RES_PIN, /*BUSY=*/EPD_BUSY_PIN));

// === BMP Drawing Function ===
// Helper functions to read values from the BMP file
uint16_t read16(File &f) {
  uint16_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read(); // MSB
  return result;
}

uint32_t read32(File &f) {
  uint32_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read();
  ((uint8_t *)&result)[2] = f.read();
  ((uint8_t *)&result)[3] = f.read(); // MSB
  return result;
}

#if (EPD_SELECT == 1)
// Define the RGB values for the 6 available e-paper colors
const uint8_t palette[][3] = {
  {  0,   0,   0}, // 0: Black
  {255, 255, 255}, // 1: White
  {  0, 255,   0}, // 2: Green
  {  0,   0, 255}, // 3: Blue
  {255,   0,   0}, // 4: Red
  {255, 255,   0}, // 5: Yellow
};

// Define the corresponding GxEPD2 color codes
const uint16_t epaper_colors[] = {
  GxEPD_BLACK,
  GxEPD_WHITE,
  GxEPD_GREEN,
  GxEPD_BLUE,
  GxEPD_RED,
  GxEPD_YELLOW,
};

const int num_colors = sizeof(palette) / sizeof(palette[0]);

// This function finds the closest e-paper color for a given RGB color
uint16_t findNearestColor(uint8_t r, uint8_t g, uint8_t b) {
  long min_dist_sq = -1;
  int best_color_index = 0;

  for (int i = 0; i < num_colors; i++) {
    long dr = r - palette[i][0];
    long dg = g - palette[i][1];
    long db = b - palette[i][2];
    long dist_sq = dr * dr + dg * dg + db * db;

    if (min_dist_sq == -1 || dist_sq < min_dist_sq) {
      min_dist_sq = dist_sq;
      best_color_index = i;
    }
  }
  return epaper_colors[best_color_index];
}
#endif


// This function reads a BMP file and draws it to the screen.
// It includes robust error checking and a color-matching algorithm.
void drawBmp(const char *filename, int16_t x, int16_t y) {
  File bmpFile;
  int32_t bmpWidth, bmpHeight;
  uint16_t bmpDepth;
  uint32_t bmpImageoffset;
  bool flip = true;

  if ((x >= display.width()) || (y >= display.height())) return;

  Serial1.print("Loading image '");
  Serial1.print(filename);
  Serial1.println("'");

  bmpFile = SD.open(filename, FILE_READ);
  if (!bmpFile) {
    Serial1.println("File not found");
    return;
  }

  if (read16(bmpFile) != 0x4D42) {
    Serial1.println("Not a valid BMP file");
    bmpFile.close();
    return;
  }

  read32(bmpFile);
  read32(bmpFile);
  bmpImageoffset = read32(bmpFile);
  read32(bmpFile);
  bmpWidth = read32(bmpFile);
  bmpHeight = read32(bmpFile);

  if (read16(bmpFile) != 1) {
    Serial1.println("Unsupported BMP format (planes)");
    bmpFile.close();
    return;
  }

  bmpDepth = read16(bmpFile);
  uint32_t compression = read32(bmpFile);

  if (compression != 0) {
    if (compression == 3) {
      Serial1.println("Error: BMP file uses BI_BITFIELDS compression.");
      Serial1.println("This example only supports uncompressed BMPs.");
      Serial1.println("Please re-save the image with standard R8G8B8 (24-bit) or A8R8G8B8 (32-bit) format.");
    } else {
      Serial1.printf("Unsupported BMP format. Depth: %d, Compression: %d\n", bmpDepth, compression);
    }
    bmpFile.close();
    return;
  }

  if (bmpDepth != 24 && bmpDepth != 32) {
      Serial1.printf("Unsupported BMP bit depth: %d. Only 24-bit and 32-bit are supported.\n", bmpDepth);
      bmpFile.close();
      return;
  }

  if (bmpHeight < 0) {
    bmpHeight = -bmpHeight;
    flip = false;
  }

  Serial1.printf("Image: %d x %d, %d-bit\n", bmpWidth, bmpHeight, bmpDepth);

  display.setPartialWindow(x, y, bmpWidth, bmpHeight);

  uint8_t bytesPerPixel = bmpDepth / 8;
  uint32_t rowSize = (bmpWidth * bytesPerPixel + 3) & ~3;
  uint8_t sdbuffer[rowSize];

  display.firstPage();
  do {
    for (int16_t row = 0; row < bmpHeight; row++) {
      uint32_t rowpos = flip ? (bmpImageoffset + (bmpHeight - 1 - row) * rowSize) : (bmpImageoffset + row * rowSize);
      bmpFile.seek(rowpos);
      bmpFile.read(sdbuffer, rowSize);

      for (int16_t col = 0; col < bmpWidth; col++) {
        uint8_t b = sdbuffer[col * bytesPerPixel];
        uint8_t g = sdbuffer[col * bytesPerPixel + 1];
        uint8_t r = sdbuffer[col * bytesPerPixel + 2];

        uint16_t GxEPD_Color;

        #if (EPD_SELECT == 1) // Color Display
          GxEPD_Color = findNearestColor(r, g, b);
        #else // Black and White Display
          if ((r * 0.299 + g * 0.587 + b * 0.114) < 128) GxEPD_Color = GxEPD_BLACK;
          else GxEPD_Color = GxEPD_WHITE;
        #endif

        display.drawPixel(x + col, y + row, GxEPD_Color);
      }
    }
  } while (display.nextPage());

  bmpFile.close();
  Serial1.println("Done!");
}


void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) delay(10);
  delay(2000); // A small delay to allow Serial Monitor to connect
  Serial1.println("--- ePaper SD Card BMP Example ---");

  // Initialize shared SPI bus
  hspi.begin(EPD_SCK_PIN, SD_MISO_PIN, EPD_MOSI_PIN, -1);

  // Initialize Display
  display.epd2.selectSPI(hspi, SPISettings(4000000, MSBFIRST, SPI_MODE0));
  display.init(115200);
  display.setRotation(0);
  display.fillScreen(GxEPD_WHITE);
  display.hibernate(); // Power down display until needed

  // Initialize SD Card
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);
  pinMode(SD_DET_PIN, INPUT_PULLUP);
  delay(100);

  if (digitalRead(SD_DET_PIN) == HIGH) {
    Serial1.println("No SD card detected. Please insert a card.");
    display.firstPage();
    do {
      display.setCursor(10, 20);
      display.print("No SD card detected.");
    } while(display.nextPage());
    return;
  }

  Serial1.println("SD card detected, attempting to mount...");
  if (!SD.begin(SD_CS_PIN, hspi)) {
    Serial1.println("SD Card Mount Failed!");
    display.firstPage();
    do {
      display.setCursor(10, 20);
      display.print("SD Card Mount Failed!");
    } while(display.nextPage());
    return;
  }
  Serial1.println("SD card mounted successfully.");

  // Draw the BMP from the SD card
  drawBmp(BMP_FILENAME, 0, 0);

  display.hibernate(); // Power down display after drawing
}

void loop() {
  // Nothing to do here for this example
}
```

</TabItem>
<TabItem value="For reTerminal E1002 (Color Screen)" label="Para reTerminal E1002 (Tela Colorida)">

```cpp
#include <SD.h>
#include <SPI.h>
#include <GxEPD2_BW.h>
#include <GxEPD2_7C.h>
#include <cmath>

// === Pin Definitions ===
// ePaper Display
#define EPD_SCK_PIN  7
#define EPD_MOSI_PIN 9
#define EPD_CS_PIN   10
#define EPD_DC_PIN   11
#define EPD_RES_PIN  12
#define EPD_BUSY_PIN 13

// SD Card
#define SD_EN_PIN   16
#define SD_DET_PIN  15
#define SD_CS_PIN   14
#define SD_MISO_PIN 8

// Serial Port
#define SERIAL_RX 44
#define SERIAL_TX 43

// File to display
const char* BMP_FILENAME = "/test.bmp";

// === ePaper Driver Selection ===
// 0: reTerminal E1001 (7.5'' B&W)
// 1: reTerminal E1002 (7.3'' Color)
#define EPD_SELECT 0

#if (EPD_SELECT == 0)
#define GxEPD2_DISPLAY_CLASS GxEPD2_BW
#define GxEPD2_DRIVER_CLASS GxEPD2_750_GDEY075T7
#elif (EPD_SELECT == 1)
#define GxEPD2_DISPLAY_CLASS GxEPD2_7C
#define GxEPD2_DRIVER_CLASS GxEPD2_730c_GDEP073E01
#endif

// For displays with RAM limitations
#define MAX_DISPLAY_BUFFER_SIZE 16000
#define MAX_HEIGHT(EPD) (EPD::HEIGHT <= MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8) ? EPD::HEIGHT : MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8))

// === Global Objects ===
SPIClass hspi(HSPI);

GxEPD2_DISPLAY_CLASS<GxEPD2_DRIVER_CLASS, MAX_HEIGHT(GxEPD2_DRIVER_CLASS)>
    display(GxEPD2_DRIVER_CLASS(/*CS=*/EPD_CS_PIN, /*DC=*/EPD_DC_PIN, /*RST=*/EPD_RES_PIN, /*BUSY=*/EPD_BUSY_PIN));

// === BMP Drawing Function ===
// Helper functions to read values from the BMP file
uint16_t read16(File &f) {
  uint16_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read(); // MSB
  return result;
}

uint32_t read32(File &f) {
  uint32_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read();
  ((uint8_t *)&result)[2] = f.read();
  ((uint8_t *)&result)[3] = f.read(); // MSB
  return result;
}

#if (EPD_SELECT == 1)
// Define the RGB values for the 6 available e-paper colors
const uint8_t palette[][3] = {
  {  0,   0,   0}, // 0: Black
  {255, 255, 255}, // 1: White
  {  0, 255,   0}, // 2: Green
  {  0,   0, 255}, // 3: Blue
  {255,   0,   0}, // 4: Red
  {255, 255,   0}, // 5: Yellow
};

// Define the corresponding GxEPD2 color codes
const uint16_t epaper_colors[] = {
  GxEPD_BLACK,
  GxEPD_WHITE,
  GxEPD_GREEN,
  GxEPD_BLUE,
  GxEPD_RED,
  GxEPD_YELLOW,
};

const int num_colors = sizeof(palette) / sizeof(palette[0]);

// This function finds the closest e-paper color for a given RGB color
uint16_t findNearestColor(uint8_t r, uint8_t g, uint8_t b) {
  long min_dist_sq = -1;
  int best_color_index = 0;

  for (int i = 0; i < num_colors; i++) {
    long dr = r - palette[i][0];
    long dg = g - palette[i][1];
    long db = b - palette[i][2];
    long dist_sq = dr * dr + dg * dg + db * db;

    if (min_dist_sq == -1 || dist_sq < min_dist_sq) {
      min_dist_sq = dist_sq;
      best_color_index = i;
    }
  }
  return epaper_colors[best_color_index];
}
#endif


// This function reads a BMP file and draws it to the screen.
// It includes robust error checking and a color-matching algorithm.
void drawBmp(const char *filename, int16_t x, int16_t y) {
  File bmpFile;
  int32_t bmpWidth, bmpHeight;
  uint16_t bmpDepth;
  uint32_t bmpImageoffset;
  bool flip = true;

  if ((x >= display.width()) || (y >= display.height())) return;

  Serial1.print("Loading image '");
  Serial1.print(filename);
  Serial1.println("'");

  bmpFile = SD.open(filename, FILE_READ);
  if (!bmpFile) {
    Serial1.println("File not found");
    return;
  }

  if (read16(bmpFile) != 0x4D42) {
    Serial1.println("Not a valid BMP file");
    bmpFile.close();
    return;
  }

  read32(bmpFile);
  read32(bmpFile);
  bmpImageoffset = read32(bmpFile);
  read32(bmpFile);
  bmpWidth = read32(bmpFile);
  bmpHeight = read32(bmpFile);

  if (read16(bmpFile) != 1) {
    Serial1.println("Unsupported BMP format (planes)");
    bmpFile.close();
    return;
  }

  bmpDepth = read16(bmpFile);
  uint32_t compression = read32(bmpFile);

  if (compression != 0) {
    if (compression == 3) {
      Serial1.println("Error: BMP file uses BI_BITFIELDS compression.");
      Serial1.println("This example only supports uncompressed BMPs.");
      Serial1.println("Please re-save the image with standard R8G8B8 (24-bit) or A8R8G8B8 (32-bit) format.");
    } else {
      Serial1.printf("Unsupported BMP format. Depth: %d, Compression: %d\n", bmpDepth, compression);
    }
    bmpFile.close();
    return;
  }

  if (bmpDepth != 24 && bmpDepth != 32) {
      Serial1.printf("Unsupported BMP bit depth: %d. Only 24-bit and 32-bit are supported.\n", bmpDepth);
      bmpFile.close();
      return;
  }

  if (bmpHeight < 0) {
    bmpHeight = -bmpHeight;
    flip = false;
  }

  Serial1.printf("Image: %d x %d, %d-bit\n", bmpWidth, bmpHeight, bmpDepth);

  display.setPartialWindow(x, y, bmpWidth, bmpHeight);

  uint8_t bytesPerPixel = bmpDepth / 8;
  uint32_t rowSize = (bmpWidth * bytesPerPixel + 3) & ~3;
  uint8_t sdbuffer[rowSize];

  display.firstPage();
  do {
    for (int16_t row = 0; row < bmpHeight; row++) {
      uint32_t rowpos = flip ? (bmpImageoffset + (bmpHeight - 1 - row) * rowSize) : (bmpImageoffset + row * rowSize);
      bmpFile.seek(rowpos);
      bmpFile.read(sdbuffer, rowSize);

      for (int16_t col = 0; col < bmpWidth; col++) {
        uint8_t b = sdbuffer[col * bytesPerPixel];
        uint8_t g = sdbuffer[col * bytesPerPixel + 1];
        uint8_t r = sdbuffer[col * bytesPerPixel + 2];

        uint16_t GxEPD_Color;

        #if (EPD_SELECT == 1) // Color Display
          GxEPD_Color = findNearestColor(r, g, b);
        #else // Black and White Display
          if ((r * 0.299 + g * 0.587 + b * 0.114) < 128) GxEPD_Color = GxEPD_BLACK;
          else GxEPD_Color = GxEPD_WHITE;
        #endif

        display.drawPixel(x + col, y + row, GxEPD_Color);
      }
    }
  } while (display.nextPage());

  bmpFile.close();
  Serial1.println("Done!");
}


void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) delay(10);
  delay(2000); // A small delay to allow Serial Monitor to connect
  Serial1.println("--- ePaper SD Card BMP Example ---");

  // Initialize shared SPI bus
  hspi.begin(EPD_SCK_PIN, SD_MISO_PIN, EPD_MOSI_PIN, -1);

  // Initialize Display
  display.epd2.selectSPI(hspi, SPISettings(4000000, MSBFIRST, SPI_MODE0));
  display.init(115200);
  display.setRotation(0);
  display.fillScreen(GxEPD_WHITE);
  display.hibernate(); // Power down display until needed

  // Initialize SD Card
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);
  pinMode(SD_DET_PIN, INPUT_PULLUP);
  delay(100);

  if (digitalRead(SD_DET_PIN) == HIGH) {
    Serial1.println("No SD card detected. Please insert a card.");
    display.firstPage();
    do {
      display.setCursor(10, 20);
      display.print("No SD card detected.");
    } while(display.nextPage());
    return;
  }

  Serial1.println("SD card detected, attempting to mount...");
  if (!SD.begin(SD_CS_PIN, hspi)) {
    Serial1.println("SD Card Mount Failed!");
    display.firstPage();
    do {
      display.setCursor(10, 20);
      display.print("SD Card Mount Failed!");
    } while(display.nextPage());
    return;
  }
  Serial1.println("SD card mounted successfully.");

  // Draw the BMP from the SD card
  drawBmp(BMP_FILENAME, 0, 0);

  display.hibernate(); // Power down display after drawing
}

void loop() {
  // Nothing to do here for this example
}
```

</TabItem>
</Tabs>

#### Como Funciona

- **`setup()`**: A função `setup` inicializa todo o hardware necessário em sequência: a porta Serial para depuração, o barramento SPI compartilhado, o display de papel eletrônico e, por fim, o cartão SD. Se todas as inicializações forem bem-sucedidas, ela faz uma única chamada a `drawBmp()` para executar a tarefa principal.
- **`drawBmp()`**: Esta é a função principal. Ela abre o arquivo BMP, analisa o cabeçalho para ler suas dimensões e propriedades e executa verificações de validação cruciais. Ela verifica especificamente tipos de compressão não suportados e fornece uma mensagem de erro útil se encontrar algum.
- **Loop de Desenho**: A função lê a imagem do cartão SD uma linha por vez. Para cada pixel na linha, ela extrai os valores de cor Vermelho, Verde e Azul.
- **Tratamento de Cor**: É aqui que a lógica se divide com base na macro `EPD_SELECT`:
  - **Para Colorido (E1002)**: Ela chama `findNearestColor(r, g, b)`. Esta função calcula a “distância” entre a cor do pixel e cada uma das 6 cores na paleta da tela. Ela retorna a cor da paleta com a menor distância, garantindo a representação de cor mais precisa possível.
  - **Para P&B (E1001)**: Ela usa uma fórmula de luminância padrão (`r * 0.299 + g * 0.587 + b * 0.114`) para converter a cor RGB em um único valor de brilho. Se esse valor estiver abaixo de um limite (128), o pixel é desenhado como preto; caso contrário, é desenhado como branco.

#### Carregar e Executar

1. No Arduino IDE, certifique-se de que a placa correta esteja selecionada (`XIAO_ESP32S3`).
2. Defina a macro `EPD_SELECT` no topo do código como `1` para o reTerminal E1002 ou `0` para o E1001.
3. Insira o seu cartão MicroSD preparado no reTerminal.
4. Carregue o código.
5. Abra o Serial Monitor com uma taxa de baud de `115200`. Você verá os logs de progresso e, após alguns momentos, a imagem será renderizada no display de papel eletrônico.

:::tip Sobre a Velocidade de Atualização
A velocidade de atualização da tela pode ser lenta; às vezes, a tela não responderá até 2–3 minutos após o envio do programa.
:::

## Solução de Problemas

### P1: Por que o display ePaper do reTerminal não mostra nada ou não atualiza ao executar o código acima?

Esse problema pode ocorrer se você tiver inserido um cartão MicroSD no reTerminal. A razão é que o cartão MicroSD e o display ePaper compartilham o mesmo barramento SPI no reTerminal. Se um cartão MicroSD estiver inserido, mas seu pino de habilitação (chip select) não for gerenciado corretamente, isso pode causar um conflito no barramento SPI. Especificamente, o cartão MicroSD pode manter a linha BUSY em nível alto, o que impede o funcionamento correto do display ePaper — resultando em nenhuma atualização ou renovação da tela.

```cpp
// Initialize SD Card
pinMode(SD_EN_PIN, OUTPUT);
digitalWrite(SD_EN_PIN, HIGH);
pinMode(SD_DET_PIN, INPUT_PULLUP);
```

Para resolver isso, você deve garantir que o cartão MicroSD esteja devidamente habilitado usando o código fornecido acima. O código inicializa e habilita o cartão MicroSD configurando corretamente os estados dos pinos, o que evita conflitos no barramento SPI e permite que o cartão SD e o display ePaper funcionem juntos. Sempre use o código de inicialização recomendado ao utilizar um cartão MicroSD com o reTerminal para evitar tais problemas.

Se o cartão MicroSD não for usado em seu projeto, recomendamos desligar o dispositivo e remover o cartão antes de executar o programa de display. Se o cartão tiver sido inserido no reTerminal, você precisará adicionar o código acima para garantir que consiga fazer a tela exibir corretamente, independentemente de estar utilizando um cartão MicroSD ou não.

### P2: Por que não consigo carregar programas para o reTerminal?

Se você se deparar com o seguinte erro ao carregar um programa para o reTerminal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/158.png" style={{width:1000, height:'auto'}}/></div>

Então, é provável que o seu Arduino IDE esteja configurado com uma velocidade de upload excessivamente alta. Altere-a para 115200 baud para resolver esse problema.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/159.png" style={{width:400, height:'auto'}}/></div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
