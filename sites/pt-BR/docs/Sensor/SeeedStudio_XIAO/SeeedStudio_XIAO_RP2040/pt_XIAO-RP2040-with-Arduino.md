---
description: Seeed Studio XIAO RP2040 com Arduino
title: Arduino
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /XIAO-RP2040-with-Arduino
last_update:
  date: 1/24/2023
  author: Spencer
createdAt: '2023-01-16'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/
---

# Seeed Studio XIAO RP2040 com Arduino

Esta é a página em que vamos conectar o Seeed Studio XIAO RP2040 e programá-lo com Arduino. Também haverá vários projetos sobre multiplexação de pinos.

## Introdução

Primeiro, vamos conectar o Seeed Studio XIAO RP2040 ao computador e enviar um código simples a partir do Arduino para verificar se a placa está funcionando bem.

### Configuração de hardware

**Materiais necessários:**

- Seeed Studio XIAO RP2040 x1
- PC x1
- Cabo USB Tipo-C x1

:::tip
Alguns cabos USB podem apenas fornecer energia e não transferir dados. Se você não tiver um cabo USB ou não souber se o seu cabo USB pode transmitir dados, você pode verificar [seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::
**Conexão de hardware:**

- Passo 1. Pressione e segure o botão BOOT e então conecte o Seeed Studio XIAO RP2040 ao PC.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" /></div>

- Passo 2. Se o disco **RPI-RP2** for exibido no PC e o LED de alimentação no Seeed Studio XIAO RP2040 estiver aceso, a conexão estará concluída.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

### Configuração de software

- **Passo 1.** Baixe e instale a versão mais recente da Arduino IDE de acordo com o seu sistema operacional

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

- **Passo 2.** Inicie o aplicativo Arduino.

- **Passo 3.**  Adicione o pacote de placa Seeed Studio XIAO RP2040 à sua Arduino IDE

Navegue até **File** > **Preferences** e preencha **Additional Boards Manager URLs** com a URL abaixo:

```URL
https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json
```

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/5.png"/></div>

Navegue até **Tools-> Board-> Boards Manager...**, digite a palavra-chave **arduino-pico** no campo de busca. Selecione a versão mais recente de **Raspberry Pi Pico/RP2040/RP2350** e instale-a.

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/arduino_2.png"/></div>

- **Passo 4.** Selecione sua placa e porta. Se a porta serial não for exibida, entre primeiro no modo BOOT. Veja [Configuração de hardware](#configuração-de-hardware).

- **Passo 5.** Abra o exemplo Blink navegando em **"File --> Examples --->01.Basics --> Blink"**

<div align="center"><img width ="550" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/select_blink.png"/></div>

**Placa**

Após instalar o pacote de placa, navegue até **Tools-> Board**, encontre "**Seeed Studio XIAO RP2040**" e selecione-o. Agora terminamos a configuração do Seeed Studio XIAO RP2040 para a Arduino IDE.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/4.png"/></div>

**Porta**

Navegue até Tools > Port e selecione o nome da porta serial do Seeed Studio XIAO RP2040 conectado. Provavelmente será COM3 ou superior (**COM1** e **COM2** geralmente são reservadas para portas seriais de hardware). A porta serial do Seeed Studio XIAO RP2040 conectado geralmente contém parênteses em que está escrito "Seeed Studio XIAO RP2040".

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png"/></div>

- **Passo 6.** Clique no botão **Upload** para enviar o código de exemplo Blink para a placa.

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl5.png"/></div>

Depois de enviado, você deverá ver o LED verde (USER) do pino 25 na placa piscando uma vez por segundo. Se isso acontecer, parabéns! Isso significa que a conexão foi bem-sucedida e agora você pode explorar mais projetos com o Seeed Studio XIAO RP2040!

:::note
Se o envio do programa Arduino falhar, tente manter pressionado o botão "BOOT" e depois clicar no botão "RUN". Neste momento, o Seeed Studio XIAO RP2040 entrará no modo boot (seu computador carregará um disco removível) e você poderá enviar o programa Arduino novamente.
:::

## Multiplexação de pinos no Seeed Studio XIAO RP2040

O Seeed Studio XIAO RP2040 contém 11 pinos digitais, 4 pinos analógicos, 11 pinos PWM, 1 interface I2C, 1 interface UART, 1 interface SPI, 1 interface de almofada de ligação SWD. Vamos fornecer tutoriais sobre essas interfaces para ajudar em seus projetos.

### Digital

Conecte um botão de pressão ao pino D0 e um LED ao pino 25. Em seguida, envie o código a seguir para controlar o LIGAR/DESLIGAR do LED usando o botão de pressão.

:::warning
Observe que a tensão de operação do Seeed Studio XIAO RP2040 é 3,3 V; se você conectar o sensor incorretamente a 5 V, a placa-mãe pode não funcionar corretamente.
:::

```cpp
const int buttonPin = D0;     // the number of the pushbutton pin
const int ledPin =  25;      // the number of the LED pin

int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED off:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED on:
    digitalWrite(ledPin, LOW);
  }
}
```

### Analógico

Conecte um potenciômetro ao pino A0 e um LED ao pino 25. Em seguida, envie o código a seguir para controlar o intervalo de piscagem do LED girando o botão do potenciômetro.

```cpp
const int sensorPin = A0;
const int ledPin =  25; 
void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(sensorPin, INPUT);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // read the value from the sensor:
int sensorValue = analogRead(sensorPin);
  // turn the ledPin on
  digitalWrite(ledPin, HIGH);
  // stop the program for <sensorValue> milliseconds:
  delay(sensorValue);
  // turn the ledPin off:
  digitalWrite(ledPin, LOW);
  // stop the program for for <sensorValue> milliseconds:
  delay(sensorValue);
}
```

### Serial

Use o pino D6 como pino TX da UART e o pino D7 como pino RX da UART para enviar a mensagem "Hello World!"

```cpp
void setup() {
    Serial.begin(115200);
    while (!Serial);
}

void loop() {
    Serial.println("Hello,World");
    delay(1000);
}
```

### LEDs indicadores de três cores

No XIAO RP2040, ao lado do indicador de alimentação há três LEDs discretos de cor única. GPIO17 controla o LED vermelho, GPIO16 controla o LED verde e GPIO25 controla o LED azul. As definições de macro estão listadas abaixo.

```c
#define PIN_LED_R      (17u)
#define PIN_LED_G      (16u)
#define PIN_LED_B      (25u)
```

Código de referência

```cpp
/*
 * RP2040 RGB LED tutorial
 *
 * LED_R: GPIO17
 * LED_G: GPIO16
 * LED_B: GPIO25
 *
 * This example assumes each LED turns on when its GPIO is HIGH.
 * If your hardware is active-low, swap HIGH and LOW in setLed().
 */


// Turn on one LED at a time and turn the other two LEDs off.
void setLed(uint8_t pin)
{
  digitalWrite(PIN_LED_R, LOW);
  digitalWrite(PIN_LED_G, LOW);
  digitalWrite(PIN_LED_B, LOW);

  digitalWrite(pin, HIGH);
}

void setup()
{
  // Configure the three LED GPIO pins as outputs.
  pinMode(PIN_LED_R, OUTPUT);
  pinMode(PIN_LED_G, OUTPUT);
  pinMode(PIN_LED_B, OUTPUT);

  // Start with all LEDs turned off.
  digitalWrite(PIN_LED_R, LOW);
  digitalWrite(PIN_LED_G, LOW);
  digitalWrite(PIN_LED_B, LOW);
}

void loop()
{
  // Show red, green, and blue in sequence.
  setLed(PIN_LED_R);
  delay(500);

  setLed(PIN_LED_G);
  delay(500);

  setLed(PIN_LED_B);
  delay(500);
}
```

- Os LEDs acenderão sequencialmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/third_led.gif" style={{width:400, height:'auto'}}/></div><br />

### LED RGB

:::caution

Os LEDs RGB podem causar fadiga ocular ou lesão se operados com brilho excessivo; é recomendável o uso de proteção ocular adequada.

:::

Na série XIAO RP2040, o GPIO11 (NEOPIXEL_POWER) atua como pino de habilitação, enquanto o GPIO12 (PIN_NEOPIXEL) controla a saída de cor RGB. Siga os passos abaixo para o uso.

:::tip

O XIAO RP2040 é equipado com um LED RGB SMD de lente redonda, enquanto o XIAO RP2040 Plus usa um LED RGB SMD de topo plano.

:::

Primeiro, precisamos adicionar uma biblioteca de terceiros.

- **Passo 1.** Abra a Arduino IDE, navegue até `Sketch > Include Library > Manage Libraries...` para buscar a biblioteca.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Digite a palavra-chave **Adafruit_NeoPixel** no Arduino Library Manager e instale a versão mais recente.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl6.png" /></div>

- **Passo 2.** Copie os códigos para o Arduino e clique no botão **Upload** para enviar.

```cpp
#include <Adafruit_NeoPixel.h>

#define NUMPIXELS 1

Adafruit_NeoPixel pixels(NUMPIXELS, PIN_NEOPIXEL, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin();

  pinMode(NEOPIXEL_POWER, OUTPUT);
  digitalWrite(NEOPIXEL_POWER, HIGH);

// Set overall brightness (0~255)
// Recommended eye-friendly range: 10~50
  pixels.setBrightness(50);
}


void loop() {

  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(15, 25, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(103, 25, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 242, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 23, 23));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(12, 66, 101));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.show();
  delay(500);
}
```

O LED RGB exibirá cores em arco-íris.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/rgb_led.gif" /></div>

### I2C

Aqui vamos conectar o Seeed Studio XIAO RP2040 com o [Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) através de IIC e exibir "Hello world".

**Conexão**:

Vamos usar o PIN 5 como pino SCL e o PIN 4 como pino SDA.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **Passo 1.** Abra o Arduino IDE, navegue até `Sketch > Include Library > Manage Libraries...` para pesquisar a biblioteca.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Digite a palavra-chave "U8G2" na Arduino Library Manager e instale a versão mais recente.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl7.png" /></div>

- **Passo 2.** Copie os códigos para o Arduino e clique no botão **Upload** para enviar.

```cpp
#include <Arduino.h>
#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.clearBuffer();                   // clear the internal memory
  u8g2.setFont(u8g2_font_ncenB08_tr);   // choose a suitable font
  u8g2.drawStr(0,10,"Hello Wrold!");    // write something to the internal memory
  u8g2.drawStr(0,30,"Hello Werold!"); 
  u8g2.drawStr(0,50,"Hello Wrrrold!"); 
  u8g2.sendBuffer();                    // transfer internal memory to the display
  delay(1000);  
}
```

Os resultados são mostrados como:

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png" alt="pir" width={600} height="auto" /></p>

### SPI

Aqui vamos conectar o [Grove - OLED Yellow&Blue Display 0.96 (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html) através de SPI e exibir "Hello World". O display OLED suporta comunicação tanto por IIC quanto por SPI e, ainda assim, o modo de comunicação padrão é IIC. É essencial [alterar a função IIC para a função SPI](https://wiki.seeedstudio.com/pt-br/Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0/) antes de começar.

**Conexão**:

Vamos usar o PIN 8 como pino SCK, o PIN 9 como pino MISO e o PIN10 como pino MOSI.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl9.png" /></div>

- **Passo 1.** Abra o Arduino IDE, navegue até `Sketch > Include Library > Manage Libraries...` para pesquisar a biblioteca.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Digite a palavra-chave "Adafruit_GFX" na Arduino Library Manager e instale a versão mais recente.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/board10.png" /></div>

Digite a palavra-chave "Adafruit_SSD1306" na Arduino Library Manager e instale a versão mais recente.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl11.png" /></div>

- **Passo 2.** Copie os códigos para o Arduino e clique no botão **Upload** para enviar.

```cpp
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 64 // OLED display height, in pixels

// Declaration for SSD1306 display connected using software SPI (default case):
#define OLED_MOSI  MOSI   //Connect SSD1315 D1
#define OLED_CLK  SCK     //Connect SSD1315 D0
#define OLED_DC  D4      //Connect SSD1315 D/C
#define OLED_CS  SS      //Connect SSD1315 CS
#define OLED_RESET  D5   //Connect SSD1315 RES
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT,
  OLED_MOSI, OLED_CLK, OLED_DC, OLED_RESET, OLED_CS);

void setup() {
  Serial.begin(9600);
  if(!display.begin(SSD1306_SWITCHCAPVCC)) {
    Serial.println(F("SSD1306 allocation failed"));
    for(;;); // Don't proceed, loop forever
  }
}

void loop() {
  display.clearDisplay();
  display.setTextSize(1);             // Normal 1:1 pixel scale
  display.setTextColor(SSD1306_WHITE);        // Draw white text
  display.setCursor(0,3);             // Start at top-left corner
  display.println(F("Hello"));
  display.setTextSize(2); 
  display.setCursor(0,16);  
  display.println(F("Hello"));
  display.setTextSize(3); 
  display.setCursor(0,38);  
  display.println(F("Hello"));
  display.display();
  delay(2000);
}
```

Os resultados são mostrados abaixo:

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png" alt="pir" width={600} height="auto" /></p>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
