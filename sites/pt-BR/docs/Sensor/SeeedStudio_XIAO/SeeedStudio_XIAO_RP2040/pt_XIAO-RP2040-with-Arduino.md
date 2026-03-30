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
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/
---

# **Seeed Studio XIAO RP2040 com Arduino**

Esta é a página em que vamos conectar o Seeed Studio XIAO RP2040 e programá‑lo com Arduino. Também haverá vários projetos sobre multiplexação de pinos.

## **Primeiros Passos**

Primeiro, vamos conectar o Seeed Studio XIAO RP2040 ao computador e enviar um código simples a partir do Arduino para verificar se a placa está funcionando bem.

### **Configuração de Hardware**

**Materiais necessários:**

- Seeed Studio XIAO RP2040 x1
- PC x1
- Cabo USB Tipo‑C x1

:::tip
Alguns cabos USB só podem fornecer energia e não transferem dados. Se você não tiver um cabo USB ou não souber se o seu cabo USB pode transmitir dados, você pode conferir [seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::
**Conexão de Hardware:**

- Passo 1. Mantenha pressionado o botão BOOT e então conecte o Seeed Studio XIAO RP2040 ao PC.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" /></div>

- Passo 2. Se o disco "RPI-RP2" for exibido no PC e o LED de alimentação no Seeed Studio XIAO RP2040 acender, a conexão está concluída.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

### **Configuração de Software**

- **Passo 1.** Baixe e instale a versão mais recente da Arduino IDE de acordo com o seu sistema operacional

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"target="_blank"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png" /></a></p>

- **Passo 2.** Abra o aplicativo Arduino.

- **Passo 3.**  Adicione o pacote de placa Seeed Studio XIAO RP2040 à sua Arduino IDE

Navegue até **File** > **Preferences** e preencha **Additional Boards Manager URLs** com a URL abaixo:

`https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json`

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/5.png"/></div>

Navegue até **Tools-> Board-> Boards Manager...**, digite a palavra‑chave "**RP2040**" no campo de busca. Selecione a versão mais recente de "Raspberry Pi Pico/RP2040" e instale‑a.

:::note Atenção

O pacote onboard chamado **Seeed XIAO RP2040 não está mais disponível**, por favor não o baixe nem o utilize!

Instale o pacote "Raspberry Pi Pico/RP2040", que inclui a placa "Seeed XIAO RP2040".

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/3.png"/></div>
:::

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/2.png"/></div>

- **Passo 4.** Selecione sua placa e porta.

- **Passo 5.** Abra o exemplo Blink navegando em **"File --> Examples --->01.Basics --> Blink"**

<div align="center"><img width ="550" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/select_blink.png"/></div>

**Placa**

Após instalar o pacote de placas, navegue até **Tools-> Board**, encontre "**Seeed Studio XIAO RP2040**" e selecione‑o. Agora concluímos a configuração do Seeed Studio XIAO RP2040 para a Arduino IDE.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/4.png"/></div>

**Porta**

Navegue até Tools > Port e selecione o nome da porta serial do Seeed Studio XIAO RP2040 conectado. Provavelmente será COM3 ou superior (**COM1** e **COM2** geralmente são reservadas para portas seriais de hardware). A porta serial do Seeed Studio XIAO RP2040 conectado geralmente contém entre parênteses o texto "Seeed Studio XIAO RP2040".

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png"/></div>

- **Passo 6.** Clique no botão **Upload** para enviar o código de exemplo Blink para a placa.

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl5.png"/></div>

Depois do upload, você deverá ver o LED verde (USER) do pino 25 na placa piscando uma vez por segundo. Se isso acontecer, parabéns! Isso significa que a conexão foi bem‑sucedida e agora você pode explorar mais projetos com o Seeed Studio XIAO RP2040!

:::note
Se o envio do programa Arduino falhar, tente manter pressionado o botão "BOOT" e então clicar no botão "RUN". Neste momento, o Seeed Studio XIAO RP2040 entrará em modo de boot (seu computador irá montar um disco removível) e você poderá fazer o upload do programa Arduino novamente.
:::

## **Multiplexação de pinos no Seeed Studio XIAO RP2040**

O Seeed Studio XIAO RP2040 contém 11 pinos digitais, 4 pinos analógicos, 11 pinos PWM, 1 interface I2C, 1 interface UART, 1 interface SPI, 1 interface de almofada de ligação SWD. Vamos fornecer tutoriais sobre essas interfaces para torná‑las úteis para seus projetos.

### **Digital**

Conecte um push button ao pino D0 e um LED ao pino 25. Em seguida, envie o seguinte código para controlar o LIGAR/DESLIGAR do LED usando o push button.

:::warning
Observe que a tensão de operação do Seeed Studio XIAO RP2040 é 3,3 V; se você conectar o sensor incorretamente a 5 V, a placa‑mãe pode não funcionar corretamente.
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

### **Analógico**

Conecte um potenciômetro ao pino A0 e um LED ao pino 25. Em seguida, envie o código a seguir para controlar o intervalo de piscada do LED girando o botão do potenciômetro.

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

### **Serial**

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

### **LED RGB**

O pino 11 é o pino de habilitação do LED RGB. Você pode acender o LED RGB definindo o pino 11 como nível alto. Aqui vamos fazê‑lo piscar. Primeiro, precisamos adicionar uma biblioteca de terceiros.

- **Passo 1.** Abra a Arduino IDE, navegue até `Sketch > Include Library > Manage Libraries...` para pesquisar a biblioteca.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Digite a palavra‑chave "Adafruit_NeoPixel" na Arduino Library Manager e instale a versão mais recente.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl6.png" /></div>

- **Passo 2.** Copie os códigos para o Arduino e clique no botão **Upload** para enviar.

```cpp
#include <Adafruit_NeoPixel.h>

int Power = 11;
int PIN  = 12;
#define NUMPIXELS 1

Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin();
  pinMode(Power,OUTPUT);
  digitalWrite(Power, HIGH);

}

void loop() { 
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(15, 25, 205));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(103, 25, 205));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 242, 205));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 23, 23));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(12, 66, 101));
  delay(400);
  pixels.show();
  delay(500);

}
```

O LED RGB exibirá cores em arco‑íris.

### **I2C**

Aqui vamos conectar o Seeed Studio XIAO RP2040 com o [Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) através de IIC e exibir "Hello world".

**Conexão**:

Vamos usar o PIN 5 como pino SCL e o PIN 4 como pino SDA.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **Passo 1.** Abra a Arduino IDE, navegue até `Sketch > Include Library > Manage Libraries...` para pesquisar a biblioteca.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Digite a palavra‑chave "U8G2" na Arduino Library Manager e instale a versão mais recente.

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

### **SPI**

Aqui vamos conectar o [Grove - OLED Yellow&Blue Display 0.96 (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html) via SPI e exibir "Hello World". O display OLED suporta tanto comunicação IIC quanto SPI, sendo que o modo de comunicação padrão é IIC. É essencial [mudar a função IIC para a função SPI](https://wiki.seeedstudio.com/pt-br/Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0/) antes de começar.

**Conexão**:

Vamos usar o PIN 8 como pino SCK, o PIN 9 como pino MISO e o PIN10 como pino MOSI.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl9.png" /></div>

- **Passo 1.** Abra o Arduino IDE, navegue até `Sketch > Include Library > Manage Libraries...` para buscar a biblioteca.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png" /></div>

Digite a palavra‑chave "Adafruit_GFX" na Arduino Library Manager e instale a versão mais recente.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/board10.png" /></div>

Digite a palavra‑chave "Adafruit_SSD1306" na Arduino Library Manager e instale a versão mais recente.

<div align="center"><img width={780} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl11.png" /></div>

- **Passo 2.** Copie os códigos para o Arduino e clique no botão **Upload** para carregar.

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

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
