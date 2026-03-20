---
description: Placa de expansão Seeed Studio XIAO
title: Base de Placa de Expansão para XIAO
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino-XIAO-Expansion-Board
sku: 103030356
last_update:
  date: 07/18/2024
  author: Spencer
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO-Expansion-Board/
---

## Visão Geral

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" /></div>

Uma poderosa placa de expansão funcional para Seeed Studio XIAO com apenas metade do tamanho de um Raspberry Pi 4. Ela permite construir protótipos e projetos de forma fácil e rápida. Com seus ricos periféricos incluindo OLED, RTC, memória expansível, buzzer passivo, botão RESET/Usuário, conector de servo 5V, múltiplas interfaces de dados… você pode explorar possibilidades infinitas do Seeed Studio XIAO. O [Circuitpython](https://circuitpython.org/) também é bem suportado por esta placa.

Como o formato Seeed Studio XIAO, todas as placas Seeed Studio XIAO suportam tanto o [Grove Shield for Seeed Studio XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) quanto a [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html). Há uma pequena diferença entre os pinos e, consultando o Pinout, é fácil de gerenciar.

Seeed Studio XIAO SAMD21, Seeed Studio XIAO RP2040 e Seeed Studio XIAO nRF52840 são compatíveis com a Seeed Studio Expansion Base for XIAO.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Recursos

- **Protótipo rápido:** Depuração e Reset fáceis com o botão RESET e pino SWD exposto em header macho.
<!-- 0.96”OLED, enables visual data display without PC serial monitor; Convenient plug and play Grove connectors support multiple data protocols, including IIC, Uart, Analog/Digital; No soldering needed with all pin led out. -->
- **Periféricos ricos:** Display OLED, RTC, espaço de memória expansível, buzzer passivo, botão de usuário, chip de gerenciamento de bateria on-board.
- **Sem necessidade de solda:** Todos os pinos expostos. Conectores Grove prontos para uso que suportam múltiplos protocolos de dados, incluindo IIC, UART, Analógico/Digital.
- **Circuit Python suportado:** Suporta bem Circuit Python. O slot para cartão MicroSD permite expandir o espaço de memória, tornando possível alocar mais bibliotecas necessárias em prototipagem e construção de projetos.
- **Tamanho mini:** Compacta e elegante, com apenas metade do tamanho de um Raspberry Pi 4, especialmente adequada para projetos que exigem tamanho reduzido.

## Especificação

<div class="table-center">
<table align="center">
  <tr>
    <th>Item</th>
    <th>Valor</th>
  </tr>
  <tr>
    <td>Tensão de operação</td>
    <td>5V / Bateria de Lítio 3,7V</td>
  </tr>
  <tr>
    <td>Corrente de carga</td>
    <td>460mA (Máx)</td>
  </tr>
  <tr>
    <td>Precisão do temporizador RTC</td>
    <td>± 1.5S/DIA(25°C)</td>
  </tr>
  <tr>
    <td>Bateria do RTC</td>
    <td>CR1220</td>
  </tr>
  <tr>
    <td>Display</td>
    <td>Display OLED 0,96"</td>
  </tr>
  <tr>
    <td>Memória expansível</td>
    <td>Cartão MicroSD</td>
  </tr>
  <tr>
    <td>Interface Grove</td>
    <td>Grove IIC*2, Grove UART*1, A0/D0 Grove*1</td>
  </tr>
  <tr>
    <td>Outro equipamento externo</td>
    <td>Buzzer passivo, botão de usuário, conector de servo 5V</td>
  </tr>
</table>
</div>

## Aplicações

- Depuração SWD
- Protótipo rápido
- Exibição de dados
- Projeto de tamanho mini

## Lista de Peças

|Item|Valor|
|---|---|
|Seeed Studio Expansion Base for XIAO  | *1 |

:::note
Este produto não inclui Seeed Studio XIAO e bateria. Como os pinos SWD são diferentes, esta placa de expansão não suporta o XIAO nRF54L15 e o XIAO MG24. O Seeed Studio XIAO está constantemente lançando novos produtos. Para acompanhar os mais recentes desenvolvimentos de produtos desta série, visite a [página inicial da série XIAO](https://www.seeedstudio.com/xiao-series-page).

<!-- please click this link to get [**Seeed Studio XIAO SAMD21**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html?gclid=Cj0KCQjwufn8BRCwARIsAKzP695mYBI8wwzrR8rXiJgv9QBK5DeTJGCU9bzXvzGUheFVZxqHcuw0SgYaAqDqEALw_wcB) -->

:::

## Primeiros Passos

### Materiais Necessários

| Seeed Studio XIAO SAMD21 (pré-soldado) | Seeed Studio Expansion Base for XIAO|
|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/102010388_Preview-07.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" alt="pir" width={600} height="auto" /></p>
|[**Adquira agora**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[**Adquira agora**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)|

### Visão Geral do Hardware

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/2222222222222222222222222222221.jpg" /></div>

Há um slot externo para cartão MicroSD e um suporte de bateria RTC, o cartão MicroSD é usado principalmente para salvar e executar o arquivo `python.py`, o RTC serve para rastrear o horário atual e pode ser usado para programar ações em um horário específico.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/1111111111111111111111110.jpg" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/ssssssssssccccccccc.png" /></div>

### Diagrama de Pinout

Descrição dos pinos dos headers externos para Grove-Shield for Seeed Studio XIAO.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/pinpinpin4.jpg" /></div>

## Uso da Placa de Expansão

### Conexão

Coloque o Seeed Studio XIAO SAMD21 na placa de expansão, o LED verde do Seeed Studio XIAO SAMD21 deve acender.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO-to-board.png" /></div>

:::note
Primeiro conecte o Seeed Studio XIAO na placa de expansão, depois conecte o cabo Type-C. Lembre-se de encaixar o Seeed Studio XIAO **no meio dos dois conectores fêmea**, caso contrário você irá danificar o Seeed Studio XIAO e a placa de expansão.
:::

## Uso da bateria

A Seeed Studio Expansion Base for XIAO pode ser alimentada por uma bateria, então se você fizer alguma demonstração que precise ser movimentada, essa bateria ajudará você a resolver o problema de alimentação. Quando você conectar a bateria, por favor preste atenção aos pólos positivo e negativo, siga a figura para conectar a bateria para evitar danificar a placa.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/battery-board.png" /></div>

Além disso, a placa carrega a bateria quando você conecta o cabo da bateria e o cabo Type-C e coloca o botão em on.

Como na figura abaixo, se o LED estiver piscando significa que a bateria não está carregando ou que a placa não está conectada à bateria; se o LED permanecer aceso significa que a bateria está carregando.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO_flash_light.png" /></div>

## Módulos na placa de expansão

Periféricos ricos on-board incluindo:

- **Display OLED:** Exibição visual de dados sem conectar ao PC, o que permite uma depuração mais eficiente e a construção de aplicações como hub de sensores, sistema de monitoramento de dados, etc.

- **Botão RESET:** Não é mais necessário fio jumper e curto-circuito, reset fácil com apenas um clique.

- **Depuração SWD:** Pino SWD exposto como header macho, tornando a conexão do depurador e o download de firmware muito mais fáceis.

- **RTC de alta precisão:** Relógio de tempo real de alta precisão com backup de bateria, permitindo manter a hora precisa quando a alimentação principal é desligada.

- **Memória expansível:** Com um slot para cartão MicroSD na parte de trás, não há mais preocupação com limite de memória ao adicionar bibliotecas e usar Circuit Python.

- **Botão de usuário:** Além do botão RESET, também é fornecido outro botão definido pelo usuário.

- **Buzzer passivo:** Você pode alterar a frequência de PMW para obter diferentes sons de beep e conseguir uma "música de buzzer".

- **Conectores Grove:** Todos os pinos expostos, conectores Grove prontos para uso suportam protocolos de dados comuns (Grove IIC*2, Grove UART*1, A0/D0 Grove*1)

- **Carregamento de bateria Lipo:** Conector padrão JST2.0mm para bateria lipo e sistema de gerenciamento de bateria, suporta tanto alimentação por USB quanto por bateria lipo, e recarga de bateria on-board facilitada.

- **Conector de servo 5V:** Saída de 5V exposta em header macho para conexão de servo e sensor 5V.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/444.png" /></div>

### Display OLED

Este exemplo apresenta como usar o display OLED na Seeed Studio Expansion Base for XIAO.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Hello_world11.jpg" /></div>

**Passo 1**. Instale o Seeed Studio XIAO SAMD21 na placa de expansão e então conecte o cabo Type-C.

**Passo 2**. Instale a biblioteca [**u8g2**](https://github.com/olikraus/U8g2_Arduino), aqui está o guia de [**como instalar a biblioteca**](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/).

**Passo 3**. Copie o código e cole na IDE do Arduino e então faça o upload.

**Código do OLED**

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE, /* clock=*/ SCL, /* data=*/ SDA );   // OLEDs without Reset of the Display

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(1);   // Enable (1) and disbale (0) 180 degree rotation of the display content
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("Hello World!");
}
```

### Controle de LED pelo Botão de Usuário

Este exemplo apresenta como usar o botão na Seeed Studio Expansion Base for XIAO para controlar o LED no Seeed Studio XIAO SAMD21.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/LED_botton.gif" /></div>

**Passo 1**. Instale o Seeed Studio XIAO SAMD21 na placa de expansão e então conecte o cabo Type-C.

**Passo 2**. Abra a Arduino IDE, copie o código e cole na Arduino IDE e então faça o upload.

**Código**

```cpp
const int buttonPin = 1;     // the number of the pushbutton pin
int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(LED_BUILTIN, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT_PULLUP);

}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED on:
    digitalWrite(LED_BUILTIN, HIGH);
  } else {
    // turn LED off:
    digitalWrite(LED_BUILTIN, LOW);
  }

}
```

### Buzzer

O buzzer está conectado por padrão ao pino A3, se você quiser remover a função de buzzer, basta seguir a figura abaixo e cortar a trilha.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/111123232325.png" /></div>

#### **Reproduzir música com buzzer passivo**

Este exemplo usa o buzzer na Seeed Studio Expansion Base for XIAO para tocar Happy Birthday.

**Passo 1**. Instale o Seeed Studio XIAO SAMD21 na placa de expansão e então conecte o cabo Type-C.

**Passo 2**. Abra a Arduino IDE, copie o código e cole na Arduino IDE e então faça o upload.

**Código**

```cpp
int speakerPin = D3;
int length = 28; // the number of notes
char notes[] = "GGAGcB GGAGdc GGxecBA yyecdc";
int beats[] = { 2, 2, 8, 8, 8, 16, 1, 2, 2, 8, 8, 8, 16, 1, 2, 2, 8, 8, 8, 8, 16, 1, 2, 2, 8, 8, 8, 16 };
int tempo = 150;
void playTone(int tone, int duration) {
  for (long i = 0; i < duration * 1000L; i += tone * 2) {
    digitalWrite(speakerPin, HIGH);
    delayMicroseconds(tone);
    digitalWrite(speakerPin, LOW);
    delayMicroseconds(tone);
  }
}

void playNote(char note, int duration) {
  char names[] = {'C', 'D', 'E', 'F', 'G', 'A', 'B',
                  'c', 'd', 'e', 'f', 'g', 'a', 'b',
                  'x', 'y'
                 };
  int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014,
                  956,  834,  765,  593,  468,  346,  224,
                  655 , 715
                };
  int SPEE = 5;

  // play the tone corresponding to the note name

  for (int i = 0; i < 16; i++) {
    if (names[i] == note) {
      int newduration = duration / SPEE;
      playTone(tones[i], newduration);
    }
  }
}

void setup() {
  pinMode(speakerPin, OUTPUT);
}

void loop() {
  for (int i = 0; i < length; i++) {
    if (notes[i] == ' ') {
      delay(beats[i] * tempo); // rest
    } else {
      playNote(notes[i], beats[i] * tempo);
    }
    // pause between notes
    delay(tempo);
  }
}
```

### Controle de servo por sensor de ângulo rotativo

Este exemplo usa um sensor de ângulo rotativo para controlar o servo por meio das portas de integração na Seeed Studio Expansion Base for XIAO.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/rotary_servo.gif" /></div>

**Passo 1**. Instale o Seeed Studio XIAO SAMD21 na placa de expansão e então conecte o cabo Type-C.

**Passo 2**. Conecte o cabo do servo à porta **I2C**, e o sensor de ângulo rotativo à **D0**.

**Passo 3**. Abra a Arduino IDE, copie o código e cole na Arduino IDE e então faça o upload.

:::tip
Se a sua placa de desenvolvimento for a **XIAO ESP32 Série**. Antes de executar o código a seguir, você precisa instalar primeiro a biblioteca ESP32Servo no **Arduino Library Manager** e alterar o seguinte código de ```#include <Servo.h>``` para ```#include <ESP32Servo.h>```.
:::

```cpp
#include <Servo.h>
#include <Arduino.h>
#include <Wire.h>

#define ROTARY_ANGLE_SENSOR A0
#define ADC_REF 3 //reference voltage of ADC is 3v.If the Vcc switch on the seeeduino
#define GROVE_VCC 3 //VCC of the grove interface is normally 3v
#define FULL_ANGLE 300 //full value of the rotary angle is 300 degrees

Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards

int pos = 0;    // variable to store the servo position

void setup() {
  Serial.begin(9600);
  pinMode(ROTARY_ANGLE_SENSOR, INPUT);
  myservo.attach(5);  // attaches the servo on pin 9 to the servo object
}

void loop() {

  float voltage;
  int sensor_value = analogRead(ROTARY_ANGLE_SENSOR);
  voltage = (float)sensor_value * ADC_REF / 1023;
  float degrees = (voltage * FULL_ANGLE) / GROVE_VCC;
  Serial.println("The angle between the mark and the starting position:");
  Serial.println(degrees);
  delay(50);
  myservo.write(degrees);
}
```

### Exibição de relógio com RTC

Este exemplo usa o RTC para exibir o relógio no OLED.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/time_clock.gif" /></div>

**Passo 1**. Instale o Seeed Studio XIAO SAMD21 na placa de expansão e então conecte o cabo Type-C.

**Passo 2**. Instale as bibliotecas [**u8g2**](https://github.com/olikraus/U8g2_Arduino) e [**PCF8563**](https://github.com/Bill2462/PCF8563-Arduino-Library), este é o guia de [**como instalar a biblioteca**](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/).

**Passo 3**. Copie o código e cole na Arduino IDE e então faça o upload.

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <PCF8563.h>
PCF8563 pcf;
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE, /* clock=*/ SCL, /* data=*/ SDA );   // OLEDs without Reset of the Display

void setup() {
  Serial.begin(115200);
  u8x8.begin();
  u8x8.setFlipMode(1);
  Wire.begin();
  pcf.init();//initialize the clock
  pcf.stopClock();//stop the clock
  pcf.setYear(20);//set year
  pcf.setMonth(10);//set month
  pcf.setDay(23);//set dat
  pcf.setHour(17);//set hour
  pcf.setMinut(33);//set minut
  pcf.setSecond(0);//set second
  pcf.startClock();//start the clock
}

void loop() {
  Time nowTime = pcf.getTime();//get current time
  u8x8.setFont(u8x8_font_chroma48medium8_r);   // choose a suitable font

  u8x8.setCursor(0, 0);
  u8x8.print(nowTime.day);
  u8x8.print("/");
  u8x8.print(nowTime.month);
  u8x8.print("/");
  u8x8.print("20");
  u8x8.print(nowTime.year);
  u8x8.setCursor(0, 1);
  u8x8.print(nowTime.hour);
  u8x8.print(":");
  u8x8.print(nowTime.minute);
  u8x8.print(":");
  u8x8.println(nowTime.second);
  delay(1000);
}
```

### Função de cartão SD

Para o XIAO SAMD21, XIAO RP2040, XIAO ESP32C3 e XIAO ESP32S3, você não precisa instalar separadamente uma biblioteca de cartão SD de terceiros. O procedimento abaixo é aplicável a estes XIAOs.

:::tip
O circuito da placa de expansão é projetado de forma que o pino CS do slot do cartão SD esteja conectado ao pino **D2** do XIAO.
:::

```cpp
#include <SPI.h>
#include <SD.h>
#include "FS.h"

File myFile;

void setup() {
  // Open serial communications and wait for port to open:
  Serial.begin(115200);
  while(!Serial);              // Execute after turning on the serial monitor
  delay(500);

  Serial.print("Initializing SD card...");

  pinMode(D2, OUTPUT);          // Modify the pins here to fit the CS pins of the SD card you are using.
  if (!SD.begin(D2)) {
    Serial.println("initialization failed!");
    return;
  }
  Serial.println("initialization done.");

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  myFile = SD.open("/test.txt", FILE_WRITE);          // The path to read and write files needs to start with "/"

  // if the file opened okay, write to it:
  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3.");
    // close the file:
    myFile.close();
    Serial.println("done.");
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }

  // re-open the file for reading:
  myFile = SD.open("/test.txt");                       // The path to read and write files needs to start with "/"
  if (myFile) {
    Serial.println("test.txt:");

    // read from the file until there's nothing else in it:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // close the file:
    myFile.close();
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }
}

void loop() {
  // nothing happens after setup
}

```

Se você estiver usando a série XIAO nRF52840, talvez seja necessário baixar separadamente a [biblioteca SdFat](https://github.com/greiman/SdFat) para poder usar a função de cartão SD.

```cpp
#include <SPI.h>
#include "SdFat.h"
SdFat SD;

#define SD_CS_PIN D2
File myFile;

void setup() {
  // Open serial communications and wait for port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }


  Serial.print("Initializing SD card...");

  if (!SD.begin(SD_CS_PIN)) {
    Serial.println("initialization failed!");
    return;
  }
  Serial.println("initialization done.");

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  myFile = SD.open("/test.txt", FILE_WRITE);

  // if the file opened okay, write to it:
  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3.");
    // close the file:
    myFile.close();
    Serial.println("done.");
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }

  // re-open the file for reading:
  myFile = SD.open("test.txt");
  if (myFile) {
    Serial.println("test.txt:");

    // read from the file until there's nothing else in it:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // close the file:
    myFile.close();
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }
}

void loop() {
  // nothing happens after setup
}
```

## Case de acrílico para Seeed Studio Expansion Base for XIAO

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/110010024_Preview-08.png" /></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/XIAO-p-4812.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

Nós fizemos este [**case de acrílico**](https://www.seeedstudio.com/XIAO-p-4812.html) para proteger a Seeed Studio Expansion Base for XIAO, estes são os componentes do case de acrílico.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/componets.png" /></div>

Comparado com o Grove Shield for Seeed Studio XIAO, a Seeed Studio Expansion Base for XIAO adicionou muitos módulos úteis para os usuários.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/board_compare.png" /></div>

Este case de acrílico é fácil de montar e também deixa o case com uma aparência mais organizada.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/build_up.gif" /></div>

## Circuitpython no Seeed Studio XIAO SAMD21 com placa de expansão

Este wiki apresenta como instalar e executar o [**CircuitPython**](https://circuitpython.org/) oficial da Adafruit Industries na [**placa de desenvolvimento Seeed Studio XIAO SAMD21**](https://www.seeedstudio.com/Seeeduino-XIAO-Pre-Soldered-p-4747.html)!

CircuitPython é uma linguagem de programação projetada para simplificar experimentos e o aprendizado de programação em placas de microcontroladores de baixo custo. Ele torna o início mais fácil do que nunca, sem necessidade de downloads prévios no desktop. Depois de configurar sua placa, abra qualquer editor de texto e comece a editar o código. Para mais informações, consulte [**aqui**](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython).

## Instalando o CircuitPython

**Passo 1.** Instale o Seeed Studio XIAO SAMD21 na placa de expansão e depois conecte o cabo Type-C.

**Passo 2.** Baixe o [**CircuitPython Bootloader for Seeed Studio XIAO SAMD21 **](https://circuitpython.org/board/seeeduino_xiao/) oficial. Um arquivo `.uf2` será armazenado na pasta de downloads do seu PC.

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circutpyhthon.png" /></div>

**Passo 3.** Entre no modo DFU bootloader pressionando o botão de reset duas vezes rapidamente na Seeed Studio Expansion Base for XIAO, então o seu PC exibirá a unidade Arduino.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/reboot_XIAO.gif" /></div>

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/arduino_boot.png" /></div>

**Passo 4.** Uma unidade externa chamada `Arduino` deve aparecer no seu PC. Arraste os arquivos uf2 do CircuitPython baixados para a unidade `Arduino`.

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/python_to_arduino.png" /></div>

**Passo 5.** Depois de carregar o bootloader do CircuitPython, desconecte o USB Type-C e reconecte. Uma nova unidade externa chamada `CIRCUITPY` deve aparecer.

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Circuitpy.png" /></div>

**Passo 6.** Agora, o CircuitPython está carregado no Seeed Studio XIAO SAMD21! Tudo o que você precisa fazer é escrever seu programa em Python, nomeá‑lo `main.py` e arrastá‑lo para a unidade `CIRCUITPY`.

### Exemplo de piscar com CircuitPython

Aqui está um exemplo simples que apresenta como usar o CircuitPython no Seeed Studio XIAO.

**Passo 1** Crie um arquivo txt chamado `main` na unidade `CIRCUITPY`.

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/main_create.png" /></div>
<br />

:::note
O nome `main` pode ser um destes: **code.txt**, **code.py**, **main.py**, **main.txt**; há mais detalhes sobre [**este comportamento**](https://docs.circuitpython.org/en/latest/README.html#behavior).
:::

**Passo 2** Use o REPL para obter os pinos do LED laranja. Para detalhes sobre o REPL, consulte [Welcome to CircuitPython!](https://learn.adafruit.com/welcome-to-circuitpython/the-repl) Para usar o REPL, você primeiro precisa conectar ao console serial. Depois que a conexão for estabelecida, pressione CTRL+C duas vezes para entrar no modo de edição. Em seguida, copie o código a seguir e insira respectivamente.

```
>>> import board
>>> dir(board)
```

Você verá uma lista de todos os pinos na sua placa que estão disponíveis para você usar no seu código. Cada placa será ligeiramente diferente dependendo do número de pinos disponíveis.
![image.png](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/zh-CN/Seeeduino-XIAO-Expansion-Board12.png)

Você vê YELLOW_LED_INVERTED? Esse é o pino que você usou para piscar o LED laranja!

**Passo 3** Cole o código no arquivo `main` e salve; você verá o LED laranja piscando na placa Seeed Studio XIAO SAMD21.

**Código**

```py
import time
import board
from digitalio import DigitalInOut, Direction

led = DigitalInOut(board.YELLOW_LED_INVERTED)
led.direction = Direction.OUTPUT

while True:
    led.value = True
    time.sleep(1)
    led.value = False
    time.sleep(1)
```

### Cartão MicroSD para CircuitPython

O Seeed Studio XIAO SAMD21 possui cerca de 40 KB de flash interno, mas isso pode não ser espaço suficiente para armazenar arquivos de código Python de grande tamanho. Felizmente, a placa de expansão Seeed Studio XIAO SAMD21 possui um slot para cartão MicroSD para estender o espaço de armazenamento, então você pode seguir estas instruções para aprender como executar o CircuitPython no cartão MicroSD.

:::note
O formato de sistema de arquivos do cartão MicroSD deve ser FAT ou exFAT. Se você usar outro formato de sistema de arquivos no MicroSD, ele não será reconhecido.
:::
**Passo 1.** Prepare um cartão micro SD para conectar na placa de expansão Seeed Studio XIAO SAMD21.

**Passo 2.** Supondo que você ainda não tenha baixado o [**arquivo circuitPython**](https://circuitpython.org/board/seeeduino_xiao/), consulte o capítulo [**Installing CircuitPython**](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO-Expansion-Board/#Instalando-o-CircuitPython).

**Passo 3.** Baixe [**lib**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/lib.zip), descompacte o arquivo e substitua pela nova pasta lib em `CIRCUITPY`.

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/lib_replace.png" /></div>

**Passo 4.** Baixe o arquivo [**main.py**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/main.py) para a unidade `CIRCUITPY`.

**O código de `main.py`**

```cpp
import sd
f = open("/sd/hello.txt", "r")   ## read the file from SD card
print(f.read())
```

**Passo 5.** Baixe o arquivo [**sd.py**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/sd.py) para a unidade `CIRCUITPY`.

**O código de `sd.py`**

```cpp
import os
import adafruit_sdcard
import board
import busio
import digitalio
import storage
import sys

# Connect to the card and mount the filesystem for Seeed Studio XIAO .
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)
cs = digitalio.DigitalInOut(board.D2)
sdcard = adafruit_sdcard.SDCard(spi, cs)
vfs = storage.VfsFat(sdcard)
storage.mount(vfs, "/sd")
sys.path.append("/sd")
sys.path.append("/sd/lib")  ## switch to the path to SD card
```

**Exemplo de buzzer**

Este exemplo serve para testar o buzzer executando o `buzzer.py` no cartão MicroSD.

**Passo 1.** Você pode simplesmente colar o [**buzzer.py**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/buzzer.py) no cartão MicroSD.

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/sd_card_store.png" /></div>

**Passo 2.** Abra o `main.py` na unidade `CIRCUITPY`.

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/main.PY.png" /></div>

**Passo 3.** Adicione `import buzzer` no arquivo main.py.
<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/add_buzzer.png" /></div>

Quando você terminar todas as etapas, o buzzer irá funcionar. Se você quiser executar outros arquivos Python no cartão MicroSD, por favor imite este exemplo.

:::note
Se você quiser voltar para o modo Arduino, basta enviar qualquer programa pela IDE Arduino.
:::

## Demo

### Projeto 1 - Ventilador com controle remoto

**Visão geral**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remoteFan-g.gif" /></div>

Este wiki apresenta como fazer um mini ventilador para colocar no seu quarto e mantê‑lo fresco.

**Funcionalidade**

- Ventilador com oscilação automática

**Componentes necessários**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio Expansion Base for XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Grove mini fan**](https://www.seeedstudio.com/Grove-Mini-Fan-v1-1.html)
- [**Grove-Servo**](https://www.seeedstudio.com/Grove-Servo.html)
- [**Grove - IR (Infrared) Receiver**](https://www.seeedstudio.com/Grove-Infrared-Receiver.html)

**Conexão de hardware**

Siga a linha de cor correspondente para conectar cada sensor na placa. Conecte o cabo Grove do ventilador em D0, o cabo Grove do servo em **I2C** e o cabo Grove do IR em **D7**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_fan_pic.png" /></div>

**Instruções para Arduino**

**Passo 1**. Siga a imagem de conexão para conectar todos os sensores na placa.

**Passo 2**. Instale a biblioteca [**Arduino-IRremote**](https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev), este é o guia de [**como instalar a biblioteca**](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/).

**Passo 3**. Copie o código, cole na Arduino IDE e então faça o upload.

**Passo 4**. Coloque o ventilador em uma posição segura, tente pressionar o botão para ter certeza de que ele pode funcionar com segurança.

**Código**

```cpp
#include <IRremote.h>
#include <Servo.h>

Servo myservo;  // create servo object to control a servo
int RECV_PIN = 7; // set pin 2 as IR control

IRrecv irrecv(RECV_PIN);

decode_results results;

int pos = 90;    // variable to store the servo position
int fanPin = 0;  // set D6 as control switch
int fanState = LOW;
int IO = 0;

void setup()
{
  Serial.begin(9600);
  Serial.println("Enabling IRin");  // remind enabling IR
  irrecv.enableIRIn(); // Start the receiver
  Serial.println("Enabled IRin");
  myservo.attach(5);  // attaches the servo on pin 2 to the servo object
  pinMode(fanPin, OUTPUT);

}

void loop() {
  if (irrecv.decode(&results)) { //checking IR signal
    if (results.value == 2155829415) {    // Power off/on
      IO++;
      if (IO % 2 == 0) {
        fanState = HIGH;
        digitalWrite(fanPin, fanState);
        delay(100);
      }
      else {
        fanState = LOW;
        digitalWrite(fanPin, fanState);
        delay(100);
      }
    }

    if (results.value == 2155821255 ) {    // fan swing to left
      for (pos; pos <= 89; pos += 1) { // goes from 0 degrees to 90 degrees
        // in steps of 1 degree
        myservo.write(pos);              // tell servo to go to position in variable 'pos'

        delay(40);                       // waits 15ms for the servo to reach the position
        if (irrecv.decode(&results)) {
          irrecv.resume();
          if (results.value == 2155870215)
            break;
        }
      }
    }

    if (results.value == 2155870215 ) {    // fan swing to right
      for (pos; pos >= 1; pos -= 1) { // goes from 90 degrees to 0 degrees
        myservo.write(pos);              // tell servo to go to position in variable 'pos'
        delay(40);                       // waits 15ms for the servo to reach the position

        if (irrecv.decode(&results)) {
          irrecv.resume();
          if (results.value == 2155821255)
            break;
        }
      }
    }
    Serial.println(pos);
    Serial.println(results.value, HEX);
    Serial.println(results.value);
    irrecv.resume();                    //recive next intrustion
  }
  delay(100);
}
```

### Projeto 2 - Carro controlado por controle remoto

**Visão geral**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_control_car.gif" /></div>

Este wiki apresenta como fazer um carro controlado por controle remoto.

**Recurso**

- Carro de tamanho mini fácil de atravessar estradas estreitas

**Componentes necessários**

- [**Seeed Studio XIAO **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio Expansion Base for XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Grove - I2C Mini Motor Driver**](https://www.seeedstudio.com/Grove-I2C-Mini-Motor-Driver.html)
- [**DC Motor**](https://www.seeedstudio.com/130-DC-Motor-p-2023.html)
- [**Grove - IR (Infrared) Receiver**](https://www.seeedstudio.com/Grove-Infrared-Receiver.html)

**Conexão de Hardware**

Siga a mesma linha de cor para conectar cada sensor na placa. Conecte o cabo Grove do sensor IR ao D0, e o cabo Grove do Mini Motor Driver ao I2C.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_car.jpg" /></div>

**Instruções para Arduino**

**Passo 1**. Siga a figura de conexão para conectar todos os sensores na placa.

**Passo 2**. Baixe a [**Arduino IDE**](https://www.arduino.cc/en/Main/software)

**Passo 3**. Instale as bibliotecas [**Arduino-IRremote**](https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev) e [**Motor driver**](https://github.com/Seeed-Studio/Drv8830_Motor_Driver), este é o guia de [**como instalar a biblioteca**](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/).

**Passo 4**. Copie o código, cole na Arduino IDE e então faça o upload.

**Código**

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <IRremote.h>
#include <SparkFunMiniMoto.h>  // Include the MiniMoto library
// Create two MiniMoto instances, with different address settings.
MiniMoto motor0(0xC4); // A1 = 1, A0 = clear
MiniMoto motor1(0xC0); // A1 = 1, A0 = 1 (default)

#define FAULTn  1     // Pin used for fault detection.

int RECV_PIN = 0; // set pin 2 as IR control
IRrecv irrecv(RECV_PIN);
decode_results results;

void setup() {
  Serial.begin(9600);
  Serial.println("Enabling IRin");  // remind enabling IR
  irrecv.enableIRIn(); // Start the receiver
  pinMode(FAULTn, INPUT);
}

void loop() {
  if (irrecv.decode(&results)) { //checking IR signal
    if (results.value == 2155862055) {
      //Forward  2155862055
      motor0.drive(-600);
      motor1.drive(600);
      delayUntil(20);
    }
    if (results.value == 2155813095) {
      //Brake   2155813095
      motor0.brake();
      motor1.brake();
      delay(100);
    }
    if (results.value == 2155823295) {
      //backward  2155823295
      motor0.drive(600);
      motor1.drive(-600);
      delayUntil(20);
    }
    if (results.value == 2155829415) {
      //Stop  2155829415
      motor0.stop();
      motor1.stop();
      delay(100);
    }
    if (results.value == 2155821255) {
      //turn right   2155821255
      motor0.drive(600);
      motor1.drive(600);
      delayUntil(20);
    }
    if (results.value == 2155837575) {
      //turn left    2155837575
      motor0.drive(-600);
      motor1.drive(-600);
      delayUntil(20);
    }
    irrecv.resume();                    //recive next intrustion

  }
  delay(100);
}

void delayUntil(unsigned long elapsedTime) {
  unsigned long startTime = millis();
  while (startTime + elapsedTime > millis()) {
    if (digitalRead(FAULTn) == LOW) {
      byte result = motor0.getFault();
      result = motor1.getFault();
    }
  }
}
```

### Projeto 3 - Caixa do tesouro com desbloqueio por impressão digital - Seeed Studio XIAO

**Visão geral**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_open.gif" /></div>

Esta caixa pode guardar seus itens importantes, e você não precisa se preocupar que algumas pessoas peguem suas coisas. A caixa possui a função de impressão digital para proteger seus pertences e, se a autorização da impressão digital falhar, o buzzer irá soar e o anel de LED exibirá a cor vermelha. Somente o seu dedo que foi registrado na placa no início poderá abrir: depois de colocar o seu dedo na placa, quando a impressão digital passar na autorização, o anel de LED exibirá a cor verde.

**Recurso**

- Fácil de registrar sua impressão digital
- O anel de LED pode lembrá-lo do estado da fechadura
- A tela OLED pode exibir as informações atuais
- O buzzer pode avisá-lo se a impressão digital passou ou não na autorização

**Componentes necessários**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio Expansion Base for XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - Capacitive Fingerprint Scanner/Sensor**](https://www.hackster.io/products/buy/80263?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove RGB LED Ring - 24**](https://www.hackster.io/products/buy/80264?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - Servo**](https://www.hackster.io/products/buy/80265?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)

**Conexão de Hardware**

Conecte cada módulo na placa conforme mostrado na figura. Conecte o módulo de impressão digital à porta UART da placa de expansão XIAO e conecte o servo à porta D0 da placa de expansão XIAO.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/finger_pinter.png" /></div>

Observe que o anel NeoPixel está conectado diretamente aos pinos da placa de desenvolvimento XIAO através de três fios de cores diferentes: conecte o pino DIN do anel NeoPixel com o fio amarelo ao pino D1 do XIAO, conecte o pino VIN do anel NeoPixel com o fio vermelho ao pino 3V3 do XIAO e conecte o pino GND do anel NeoPixel com o fio preto ao pino GND do XIAO.

![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/zh-CN/Seeeduino-XIAO-Expansion-Board13.jpeg)

**Instruções para Arduino**

**Passo 1**. Siga a figura de conexão para conectar todos os sensores na placa.

**Passo 2**. Baixe a [**Arduino IDE**](https://www.arduino.cc/en/Main/software)

**Passo 3**. Instale as bibliotecas [**u8g2**](https://github.com/olikraus/U8g2_Arduino),  [**Servo**](https://github.com/arduino-libraries/Servo),  [**Seeed_Arduino_KCT202**](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202) e [**Seeed_LED_Ring**](https://github.com/Seeed-Studio/Seeed_LED_Ring), este é o guia de [**como instalar a biblioteca**](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/).

**Passo 4**. Copie o código, cole na Arduino IDE e então faça o upload.

**Demonstração**

1. Registre sua impressão digital

A tela exibirá o registro de dedo no início, você só precisa colocar o seu dedo no dispositivo de impressão digital, depois disso o programa irá analisar sua impressão digital e então concluir o registro.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_record.gif" /></div>

2. Autorização de identidade (passar na certificação)

A tela exibirá "Please verify", você precisa colocar o seu dedo no dispositivo de impressão digital e então o anel de LED ficará na cor verde.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_open.gif" /></div>

3. Autorização de identidade (falha na certificação)

Se outras pessoas colocarem o dedo sobre ele, o anel de LED ficará vermelho e a placa exibirá "Identity deny" enquanto o alarme será acionado.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_close.gif" /></div>

**Código**

```cpp
#include <Servo.h>
#include <Arduino.h>
#include <U8x8lib.h>
#include "ATSerial.h"
#include "Protocol.h"
#include "KCT202.h"
#include "Adafruit_NeoPixel.h"

#define PIXEL_PIN    2    // Digital IO pin connected to the NeoPixels.
#define PIXEL_COUNT 24
#define debug SerialUSB
#define uart  Serial1
FingerPrint_KCT202<Uart, Serial_> kct202;
Adafruit_NeoPixel strip = Adafruit_NeoPixel(PIXEL_COUNT, PIXEL_PIN, NEO_GRB + NEO_KHZ800);

Servo myservo;

Protocol_oprt oprt;
uint8_t err_code = 0;
uint8_t param[10];
uint32_t param_len;
int pos = 0;
const int buttonPin = 1;
int buttonState = 0;
int BuzzerPin = A3;

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  Serial.begin(115200);
  strip.setBrightness(255);
  strip.begin();
  strip.show(); // Initialize all pixels to 'off'
  colorWipe(strip.Color(125, 0, 125), 50);
  u8x8.begin();
  u8x8.setFlipMode(0);
  debug.begin(115200);
  pinMode(buttonPin, INPUT_PULLUP);
  pinMode(BuzzerPin, OUTPUT);
  kct202.begin(uart, debug);
  myservo.attach(0);
  myservo.write(0);
  kct202.autoRegisterFingerPrint(1, 4, LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP | OVERRIDE_CURR_FINGER_PRINT);

  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 3);
  u8x8.print("finger recording");
  if (0 == kct202.getRegisterResponAndparse()) {
    debug.println("Register ok!");
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("    be ready    ");
    delay(500);
    colorWipe(strip.Color(0, 125, 125), 50);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 3 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 2 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 1 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   Registered");
    delay(800);
  }
}

void loop(void) {
  uint16_t finger_num = 0;

  kct202.autoVerifyFingerPrint(CHECK_ALL_FINGER_TEMP,
                               LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP);
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 3);
  u8x8.print(" Please verify  ");

  if (0 == kct202.getVerifyResponAndparse(finger_num)) {
    debug.println("Verify ok!");
    debug.print("Your finger temp id = ");
    debug.println(finger_num, HEX);
    colorWipe(strip.Color(0, 255, 30), 50);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("Identity comfirm");
    delay(800);

    analogWrite(BuzzerPin, 128);
    delay(100);
    analogWrite(BuzzerPin, 0);
    delay(100);
    analogWrite(BuzzerPin, 128);
    delay(100);
    analogWrite(BuzzerPin, 0);
    delay(100);

    for (pos = 0; pos <= 90; pos += 1) {
      myservo.write(pos);
      delay(15);
    }
    while (1) {
      //      pinMode(buttonPin, INPUT);
      buttonState = digitalRead(buttonPin);
      u8x8.setFont(u8x8_font_chroma48medium8_r);
      u8x8.setCursor(0, 3);
      u8x8.print("Please close    ");
      Serial.println(pos);
      Serial.println(buttonState);
      if (buttonState == LOW && pos == 91) {
        for (pos = 91; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
          u8x8.setFont(u8x8_font_chroma48medium8_r);
          u8x8.setCursor(0, 3);
          u8x8.print("Lock closing    ");
          myservo.write(pos);              // tell servo to go to position in variable 'pos'
          delay(15);                       // waits 15ms for the servo to reach the position
        }
        colorWipe(strip.Color(255, 0, 0), 50);
        break;
      }
    }
  }

  else {
    colorWipe(strip.Color(255, 0, 0), 50);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print(" Identity deny ");
    //    myservo.write(0);
    delay(200);

  analogWrite(BuzzerPin, 250);
  delay(2000);
    analogWrite(BuzzerPin, 0);
  delay(100);

    u8x8.setCursor(0, 3);
    u8x8.print("  Please retry  ");
    delay(1500);
  }
}

void colorWipe(uint32_t c, uint8_t wait) {
  for (uint16_t i = 0; i < strip.numPixels(); i++) {
    strip.setPixelColor(i, c);
    strip.show();
    delay(70);
  }
}
```

### Projeto 4 - Seeed Studio Expansion Base para XIAO - mjolnir

**Visão geral**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/mjolnir/humer1.png" /></div>

Este martelo é uma simulação do Mjolnir; você precisa registrar sua impressão digital neste dispositivo e então se tornará seu mestre. O martelo precisa de um ímã para ser adsorvido no Grove - eletroímã até que seu mestre o destrave por meio da impressão digital e possa levar o martelo embora.

**Componentes necessários**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio Expansion Base for XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - Capacitive Fingerprint Scanner/Sensor**](https://www.hackster.io/products/buy/81052?s=BAhJIhMzNzQxMDUsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - Electromagnet**](https://www.hackster.io/products/buy/32769?s=BAhJIhMzNzQxMDUsUHJvamVjdAY6BkVG%0A)

**Conexão de hardware**

Conecte a placa de expansão e os módulos necessários com o cabo Grove, conecte o módulo Grove electromagnet à porta D0 e conecte o módulo de impressão digital à porta I2C.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/mjolnir/66666.png" /></div>

**Instruções do Arduino**

**Passo 1**. Siga a imagem de conexão e conecte todos os sensores na placa.

**Passo 2**. Baixe o [**Aruidno IDE**](https://www.arduino.cc/en/Main/software)

**Passo 3**. Instale as bibliotecas [**u8g2**](https://github.com/olikraus/U8g2_Arduino) e [**Seeed_Arduino_KCT202**](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202); este é o guia de [**como instalar a biblioteca**](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/).

**Passo 4**. Copie o código, cole no Arduino IDE e então faça o upload.

**Código**

```cpp
#include <U8x8lib.h>
#include "ATSerial.h"
#include "Protocol.h"
#include "KCT202.h"

#define debug SerialUSB
#define uart  Serial1
FingerPrint_KCT202<Uart, Serial_> kct202;

Protocol_oprt oprt;
uint8_t err_code = 0;
uint8_t param[10];
uint32_t param_len;

int Electromagnet = 0;

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

// the setup routine runs once when you press reset:
void setup() {
  // initialize the digital pin as an output.

  u8x8.begin();
  u8x8.setFlipMode(0);
  debug.begin(115200);
  pinMode(Electromagnet, OUTPUT);
  digitalWrite(Electromagnet, HIGH);  // turn the Electromagnet on (HIGH is the voltage level)
  kct202.begin(uart, debug);
  kct202.autoRegisterFingerPrint(1, 4, LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP | OVERRIDE_CURR_FINGER_PRINT);
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 3);
  u8x8.print("finger recording");
  if (0 == kct202.getRegisterResponAndparse()) {
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("    be ready    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 3 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 2 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 1 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   Registered");
    delay(800);
  }

}

  // the loop routine runs over and over again forever:
  void loop() {

    uint16_t finger_num = 0;
    kct202.autoVerifyFingerPrint(CHECK_ALL_FINGER_TEMP, LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print(" Please verify  ");

    if (0 == kct202.getVerifyResponAndparse(finger_num)) {
      u8x8.setFont(u8x8_font_chroma48medium8_r);
      u8x8.setCursor(0, 3);
      u8x8.print("Identity comfirm");
      delay(800);
      digitalWrite(Electromagnet, LOW);  // turn the Electromagnet on (HIGH is the voltage level)
      delay(5000);
      digitalWrite(Electromagnet, HIGH);
    }

    else {
      u8x8.setFont(u8x8_font_chroma48medium8_r);
      u8x8.setCursor(0, 3);
      u8x8.print(" Identity deny ");
      //    myservo.write(0);
      delay(200);

      u8x8.setCursor(0, 3);
      u8x8.print("  Please retry  ");
      delay(1500);
      digitalWrite(Electromagnet, HIGH);  // turn the Electromagnet on (HIGH is the voltage level)

    }
  }
```

### Projeto 5 - Hub de Sensor de Qualidade do Ar - Seeed Studio Expansion Base para XIAO

**Visão geral**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Air_Quality_Sensor_Hub/environment_detect_g.gif" /></div>

Este é um dispositivo de detecção ambiental para coletar PM2.5, PM10, temperatura, umidade, CO2 e partículas de poeira por meio, respectivamente, do Grove - Laser PM2.5 Sensor, Grove - CO2 & Temperature & Humidity sensor e Grove - dust Sensor.

**Componentes necessários**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio Expansion Base for XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - Sensor de CO2 & Temperatura & Umidade para Arduino (SCD30) - 3-em-1**](https://www.hackster.io/products/buy/80471?s=BAhJIhMzNzE2NzQsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - Sensor de Poeira a Laser PM2.5 - Compatível com Arduino - HM3301**](https://www.hackster.io/products/buy/80472?s=BAhJIhMzNzE2NzQsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - Sensor de Poeira（PPD42NS）**](https://www.hackster.io/products/buy/30140?s=BAhJIhMzNzE2NzQsUHJvamVjdAY6BkVG%0A)

**Conexão de Hardware**

Conecte cada sensor conforme mostrado no diagrama. Conecte o sensor de CO2 e o sensor de PM2.5 a duas portas I2C respectivamente, e conecte o sensor de poeira à porta UART.

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Air_Quality_Sensor_Hub/environment_detect_g.png" /></div>

**Instruções para Arduino**

**Passo 1**. Siga a figura de conexão para conectar todos os sensores na placa.

**Passo 2**. Baixe o [**Aruidno IDE**](https://www.arduino.cc/en/Main/software)

**Passo 3**. Instale as bibliotecas [**u8g2**](https://github.com/olikraus/U8g2_Arduino),  [**Seeed_PM2_5_sensor_HM3301**](https://github.com/Seeed-Studio/Seeed_PM2_5_sensor_HM3301) e [**Seeed_SCD30**](https://github.com/Seeed-Studio/Seeed_SCD30), este é o guia [**how to install the library**](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/).

**Passo 4**. Copie o código, cole no Arduino IDE e faça o upload.

**Código**

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <Seeed_HM330X.h>
#include "SCD30.h"

#define SERIAL_OUTPUT SerialUSB
#define SERIAL SerialUSB

int pin = 7;
unsigned long duration;
unsigned long starttime;
unsigned long sampletime_ms = 5000;//sampe 30s ;
unsigned long lowpulseoccupancy = 0;
float ratio = 0;
float concentration = 0;

const int buttonPin = 1;
int buttonState = 0;
int memu = 0;

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);
HM330X sensor;
uint8_t buf[30];

const char* str[] = {"sensor num: ", "PM1.0 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",
                     "PM2.5 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",
                     "PM10 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",
                     "PM1.0 concentration(Atmospheric environment,unit:ug/m3): ",
                     "PM2.5 concentration(Atmospheric environment,unit:ug/m3): ",
                     "PM10 concentration(Atmospheric environment,unit:ug/m3): ",
                    };


///////////////////////////////////////////////////////////////////
//PM2.5 concentration(Atmospheric environment,unit:ug/m3): value
///////////////////////////////////////////////////////////////////
HM330XErrorCode print_result(const char* str, uint16_t value) {
  if (NULL == str) {
    return ERROR_PARAM;
  }
  //  SERIAL_OUTPUT.print(str);
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("PM2.5: ");
  u8x8.setCursor(7, 0);
  u8x8.print(value);
  u8x8.setCursor(11, 0);
  u8x8.print("ug/m");
  Serial.println(value);
  return NO_ERROR;
}

HM330XErrorCode print_result_1(const char* str, uint16_t value) {
  if (NULL == str) {
    return ERROR_PARAM;
  }
  //  SERIAL_OUTPUT.print(str);
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("PM10: ");
  u8x8.setCursor(7, 0);
  u8x8.print(value);
  u8x8.setCursor(11, 0);
  u8x8.print("ug/m");
  Serial.println(value);
  return NO_ERROR;
}

/*parse buf with 29 uint8_t-data*/
HM330XErrorCode parse_result(uint8_t* data) {
  uint16_t value = 0;
  if (NULL == data) {
    return ERROR_PARAM;
  }
  value = (uint16_t) data[6 * 2] << 8 | data[6 * 2 + 1];
  print_result(str[6 - 1], value);
  return NO_ERROR;
}


HM330XErrorCode parse_result2(uint8_t* data) {
  uint16_t value = 0;
  if (NULL == data) {
    return ERROR_PARAM;
  }
  value = (uint16_t) data[7 * 2] << 8 | data[7 * 2 + 1];
  print_result_1(str[7 - 1], value);
  return NO_ERROR;
}

////////////////////////////////////////////////////////////////////

/*30s*/
void setup() {
  Serial.begin(115200);
  Wire.begin();
  u8x8.begin();
  u8x8.setFlipMode(0);
  scd30.initialize();
  pinMode(pin, INPUT);
  pinMode(buttonPin, INPUT_PULLUP);
  starttime = millis();//get the current time;

}

void loop() {
  float result[3] = {0};
  duration = pulseIn(pin, LOW);
  lowpulseoccupancy = lowpulseoccupancy + duration;

  buttonState = digitalRead(buttonPin);

  if (buttonState == LOW) {
    memu++;
    delay(15);
    if (memu == 2) {
      memu = 0;
    }
  }
  Serial.println(memu);

  if (scd30.isAvailable() && memu == 0) {
    scd30.getCarbonDioxideConcentration(result);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("CO2: ");
    u8x8.setCursor(5, 3);
    u8x8.print(result[0]);
    u8x8.setCursor(12, 3);
    u8x8.print("pmm");
    delay(1000);
  }

  if (sensor.read_sensor_value(buf, 29) && memu == 0) {
    SERIAL_OUTPUT.println("HM330X read result failed!!!");
  }
  if(memu == 0){
  parse_result(buf);
  }

  if ((millis() - starttime) > sampletime_ms  && memu == 0) {
    ratio = lowpulseoccupancy / (sampletime_ms * 10.0); // Integer percentage 0=>100
    concentration = 1.1 * pow(ratio, 3) - 3.8 * pow(ratio, 2) + 520 * ratio + 0.62; // using spec sheet curve

    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 6);
    u8x8.print("Dust: ");

    u8x8.setCursor(6, 6);
    u8x8.print(concentration);

    u8x8.setCursor(12, 6);
    u8x8.print("pcs");

    //    Serial.println(concentration);
    lowpulseoccupancy = 0;
    starttime = millis();
  }


  if (scd30.isAvailable() && memu == 1) {
    scd30.getCarbonDioxideConcentration(result);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("Temp: ");
    u8x8.setCursor(6, 3);
    u8x8.print(result[1]);
    u8x8.setCursor(10, 3);
    u8x8.print(" C   ");

    u8x8.setCursor(0, 6);
    u8x8.print("Humi: ");
    u8x8.setCursor(5, 6);
    u8x8.print(result[2]);
    u8x8.setCursor(8, 6);
    u8x8.print("  %     ");

    delay(1000);
  }

  if (sensor.read_sensor_value(buf, 29) && memu == 1) {
    SERIAL_OUTPUT.println("HM330X read result failed!!!");
  }
  if(memu == 1){
  parse_result2(buf);
  }
}
```

### Projeto 6 - Seeed Studio Expansion Base for XIAO - Frequência Cardíaca

**Visão geral**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Heartrate_Monitor_Watch/heartRate.gif" /></div>

Este projeto simples e de baixo custo é baseado na Seeed Studio Expansion Base for XIAO para relatar a frequência cardíaca.
O dispositivo usado possui uma interface de dois fios I2C e, portanto, mantém a fiação no mínimo.

**Componente necessário**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio Expansion Base for XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - Sensor de Frequência Cardíaca com Presilha de Dedo**](https://www.hackster.io/products/buy/80359?s=BAhJIhMzNzExNzMsUHJvamVjdAY6BkVG%0A)

**Conexão de Hardware**

Conforme mostrado na figura abaixo, conecte o sensor de frequência cardíaca à interface I2C da placa de expansão XIAO.

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Heartrate_Monitor_Watch/heart_detect.png" /></div>

**Instruções para Arduino**

**Passo 1**. Siga a figura de conexão para conectar todos os sensores na placa.

**Passo 2**. Baixe o [**Aruidno IDE**](https://www.arduino.cc/en/Main/software)

**Passo 3**. Instale a biblioteca [**u8g2**](https://github.com/olikraus/U8g2_Arduino), este é o guia [**how to install the library**](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/).

**Passo 4**. Copie o código, cole no Arduino IDE e faça o upload.

**Código**

```cpp
#include <Arduino.h>
#include <U8x8lib.h>

#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

void setup() {
  Serial.begin(9600);
  Serial.println("heart rate sensor:");

  u8x8.begin();
  u8x8.setFlipMode(1);
  Wire.begin();
}
void loop() {
  Wire.requestFrom(0xA0 >> 1, 1);    // request 1 bytes from slave device
  while (Wire.available()) {         // slave may send less than requested
    unsigned char c = Wire.read();   // receive heart rate value (a byte)
    u8x8.setFont(u8x8_font_chroma48medium8_r);
//    u8x8.setCursor(0, 3);
//    u8x8.print("blood detecting ");
//    delay(10000);

    u8x8.setCursor(0, 3);
    u8x8.print("HeartRate: ");
    u8x8.setCursor(10, 3);
    u8x8.print(c);
    u8x8.setCursor(13, 3);
    u8x8.print("bpm");
    Serial.println(c);

  }
  delay(500);
}
```

## Recursos

- **[PDF]**[**ETA1038**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/ETA1038.pdf)
- **[PDF]**[**ETA3410**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/ETA3410.pdf)
- **[PDF]**[**ETA6003**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/ETA6003.pdf)
- **[PDF]**[**PCF8563T**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/PCF8563T.pdf)
- **[PDF]**[**Seeed Studio Expansion Base for XIAO_v1.0_SCH_200824**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/Seeeduino%20XIAO%20Expansion%20board_v1.0_SCH_200824.pdf)
- **[SCH]**[**Seeed Studio Expansion Base for XIAO_v1.0_200824**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/Seeeduino%20XIAO%20Expansion%20board_v1.0_200824.sch)
- **[BRD]**[**Seeed Studio Expansion Base for XIAO_v1.0_200824**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/Seeeduino%20XIAO%20Expansion%20board_v1.0_200824.brd)

## FAQ

### P1: O PMIC na placa de expansão XIAO fornece energia nos pinos de 5V?

O PMIC não fornece energia; os 5V vêm diretamente do USB. A corrente fornecida no pino de 5V é equivalente à corrente disponível na conexão USB.

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
