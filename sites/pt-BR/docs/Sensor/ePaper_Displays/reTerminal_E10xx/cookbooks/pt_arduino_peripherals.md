---
description: Livro de receitas Arduino para reTerminal E1001 / E1002 / E1003 / E1004 — exemplos de periféricos de hardware onboard incluindo LED, buzzer, três botões de usuário, sensor de temperatura/umidade SHT4x, monitoramento de bateria, cartão microSD e um pipeline de imagem ponta a ponta (JPEG / BMP / PNG → dithering → ePaper) para as quatro variantes de painel.
title: 'Livro de Receitas Arduino: Periféricos Onboard (reTerminal E Series)'
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/27.webp
slug: /reterminal_e10xx_with_arduino_peripherals
sidebar_position: 2
sidebar_label: Arduino – Periféricos
last_update:
  date: 05/21/2026
  author: Citric
createdAt: '2026-05-15'
updatedAt: '2026-05-21'
url: https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_arduino_peripherals/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Livro de Receitas Arduino: Periféricos Onboard (reTerminal E Series)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/245.png" style={{width:600, height:'auto'}}/></div>

:::tip Outros livros de receitas desta linha de produtos
- **[Arduino Cookbook: ePaper Display](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_arduino)** — renderização de texto, gráficos e imagens na tela de ePaper.
- **[Arduino Cookbook: RTC, Low Power & Audio](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_arduino_peripherals_2)** — gerenciamento de horário com RTC, deep sleep / light sleep e gravação de microfone I2S.
:::

## Introdução

A reTerminal E Series é mais do que apenas uma tela de ePaper — cada modelo também expõe um LED onboard, um buzzer, três botões de usuário, um sensor de temperatura e umidade SHT4x, monitoramento de tensão da bateria e um slot para cartão microSD. Este livro de receitas reúne exemplos prontos para gravar no Arduino para cada um desses periféricos, além de um pipeline de imagem ponta a ponta que carrega um arquivo JPEG / BMP / PNG do cartão SD, aplica dithering para a paleta do painel e o renderiza na tela de ePaper — um sketch pronto por variante de painel (E1001 BW, E1001 Gray4, E1002, E1003, E1004).

O que este livro de receitas cobre:

- **Controle de LED** no GPIO6 (lógica invertida).
- **Buzzer** para alertas e tons musicais no GPIO45.
- **Três botões de usuário** (KEY0 / KEY1 / KEY2) com detecção de estado com debounce.
- **Sensor SHT4x** via I²C (GPIO19 SDA / GPIO20 SCL) usando a biblioteca da Sensirion.
- **Monitoramento de tensão da bateria** através do circuito de ADC + pino de habilitação.
- **Cartão microSD** montagem / detecção / listagem de arquivos no barramento SPI compartilhado.
- **Exemplo avançado — pipeline de imagem com cartão SD**: escolha qualquer JPEG / BMP / PNG no cartão SD, execute-o em um dos cinco algoritmos de dithering integrados e renderize-o no painel com âncora, modo de ajuste e escala configuráveis.

### Materiais Necessários

Este livro de receitas se aplica a todos os quatro modelos da reTerminal E Series. Escolha o dispositivo que você tiver em mãos:

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### Pré-requisitos

Antes de executar qualquer exemplo abaixo, você já deve ter:

- A **IDE Arduino** instalada com o **pacote de placas ESP32** e a placa **XIAO_ESP32S3** selecionada.
- Um **cabo de dados USB-C** funcional e a porta serial correta selecionada.
- Verificado que você consegue gravar um sketch básico no dispositivo — veja a preparação do ambiente em [Arduino Cookbook: ePaper Display](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_arduino#preparação-do-ambiente) se ainda não tiver feito isso.

Todos os sketches deste livro de receitas imprimem informações de depuração por meio de `Serial1` nos pinos **GPIO44 (RX) / GPIO43 (TX)** a **115200 baud**. Abra o Monitor Serial do Arduino e selecione a porta e a taxa de baud correspondentes para acompanhar.

## Controle de LED

A reTerminal E Series possui um LED onboard que pode ser controlado via GPIO. Observe que a lógica do LED é invertida (LOW = ON, HIGH = OFF). O pino do LED varia entre os modelos:

<div class="table-center">
	<table align="center">
		<tr>
			<th>Modelo</th>
			<th>GPIO do LED</th>
		</tr>
		<tr>
			<td>E1001 / E1002</td>
			<td>GPIO6</td>
		</tr>
		<tr>
			<td>E1003</td>
			<td>GPIO16</td>
		</tr>
		<tr>
			<td>E1004</td>
			<td>GPIO48</td>
		</tr>
	</table>
</div>

<Tabs>
<TabItem value="e1001_e1002" label="E1001 / E1002" default>

```cpp
// reTerminal E1001/E1002 - LED Control Example

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

</TabItem>
<TabItem value="e1003" label="E1003">

```cpp
// reTerminal E1003 - LED Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define LED_PIN 16  // GPIO16 - Onboard LED (inverted logic)

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

</TabItem>
<TabItem value="e1004" label="E1004">

```cpp
// reTerminal E1004 - LED Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define LED_PIN 48  // GPIO48 - Onboard LED (inverted logic)

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

</TabItem>
</Tabs>

## Controle do Buzzer

A reTerminal E Series inclui um buzzer no GPIO45 que pode produzir vários tons e sons de alerta.

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

**Buzzer com Tons**

<details>
<summary>Clique para expandir o código completo do exemplo de Buzzer</summary>

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

</details>

**Funções do buzzer:**

- `digitalWrite()`: Controle simples LIGADO/DESLIGADO para bipes básicos
- `tone(pin, frequency, duration)`: Gera frequências específicas para melodias ou alertas
- `noTone(pin)`: Interrompe a geração de tom

**Padrões de alerta comuns:**

- Bip único: Confirmação
- Bip duplo: Aviso
- Três bipes: Erro
- Contínuo: Alerta crítico

## Botões do usuário

O reTerminal E Series possui três botões programáveis pelo usuário que podem ser usados para vários propósitos de controle. Esta seção demonstra como ler os estados dos botões e responder aos pressionamentos usando Arduino.

O reTerminal E Series possui três botões conectados ao ESP32-S3 via KEY0 (GPIO3), KEY1 (GPIO4) e KEY2 (GPIO5). Todos os botões são ativos em nível baixo, o que significa que leem LOW quando pressionados e HIGH quando soltos.

A disposição física e a função desses botões diferem entre os modelos:

<div class="table-center">
	<table align="center">
		<tr>
			<th>Tecla</th>
			<th>E1001 / E1002 / E1003</th>
			<th>E1004</th>
		</tr>
		<tr>
			<td><strong>KEY0</strong> (GPIO3)</td>
			<td>Botão direito (botão verde)</td>
			<td>Botão direcional direito (frontal)</td>
		</tr>
		<tr>
			<td><strong>KEY1</strong> (GPIO4)</td>
			<td>Botão do meio</td>
			<td>Botão direcional esquerdo (frontal)</td>
		</tr>
		<tr>
			<td><strong>KEY2</strong> (GPIO5)</td>
			<td>Botão esquerdo</td>
			<td>Botão de atualizar (frontal esquerdo)</td>
		</tr>
	</table>
</div>

:::note
O E1004 possui botões tanto na parte frontal quanto na parte traseira do dispositivo. As conexões KEY0–KEY2 listadas acima correspondem aos botões no painel frontal.
:::

### Exemplo básico de leitura de botões

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

3. **Detecção de botões**: Em `loop()`, verificamos continuamente o estado de cada botão usando `digitalRead()`. Quando um botão é pressionado, o pino lê LOW.

4. **Debouncing**: Um simples atraso de 200 ms após cada pressionamento de botão evita múltiplas detecções de um único toque devido ao bounce mecânico.

5. **Saída serial**: Cada pressionamento de botão aciona uma mensagem para o monitor serial para depuração e verificação.

---

**Passo 1.** Envie o código para o seu dispositivo reTerminal E Series.

**Passo 2.** Abra o Serial Monitor na Arduino IDE (Tools > Serial Monitor).

**Passo 3.** Defina a taxa de baud para 115200.

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

## Sensor ambiental (SHT4x)

O reTerminal E Series inclui um sensor integrado de temperatura e umidade SHT4x conectado via I2C.

### Instalando as bibliotecas necessárias

Instale duas bibliotecas via Arduino Library Manager (**Tools > Manage Libraries...**):

1. Procure e instale "**Sensirion I2C SHT4x**"
2. Procure e instale "**Sensirion Core**" (dependência)

### Exemplo básico de temperatura e umidade

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

1. **Inicialização serial**: Usa `Serial1` com os pinos 44 (RX) e 43 (TX) específicos do reTerminal E Series
2. **Inicialização I2C**: Configura o I2C com os pinos 19 (SDA) e 20 (SCL)
3. **Inicialização do sensor**: Chama `sht4x.begin(Wire, 0x44)` para inicializar o sensor SHT4x no endereço 0x44
4. **Leitura do número de série**: Lê e exibe o número de série exclusivo do sensor para verificação

**Função loop:**

1. **Atraso**: Aguarda 5 segundos entre as medições para evitar superamostragem
2. **Medição**: Usa `measureHighPrecision()` para leituras precisas (leva ~8,3 ms)
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

## Sistema de gerenciamento de bateria

O reTerminal E Series inclui capacidade de monitoramento da tensão da bateria por meio de um pino ADC com circuito divisor de tensão.

### Monitoramento simples da tensão da bateria

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

- O GPIO1 lê a tensão dividida da bateria através do ADC
- GPIO21 habilita o circuito de monitoramento da bateria
- A tensão real da bateria é o dobro da tensão medida devido ao divisor de tensão
- Para uma bateria LiPo totalmente carregada, espere cerca de 4,2 V
- Quando a bateria está fraca, a tensão cai para cerca de 3,3 V

**Saída esperada**

```
Battery Voltage Monitor

Battery: 4.18 V
Battery: 4.19 V
Battery: 4.18 V
```

## Usando o cartão MicroSD

Para aplicações que exigem armazenamento adicional, como um porta-retratos digital ou registro de dados, o reTerminal E Series inclui um slot para cartão MicroSD.

Insira um cartão microSD se você planeja usar o dispositivo como um porta-retratos digital ou se precisar de armazenamento adicional.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
O reTerminal E Series suporta apenas cartões MicroSD de até 64 GB formatados com o sistema de arquivos **Fat32**.
:::

### Operações básicas com cartão SD: listando arquivos

Este exemplo demonstra como inicializar o cartão SD, detectar quando ele é inserido ou removido e listar todos os arquivos e diretórios em sua raiz. O pino de habilitação de energia do cartão SD (`SD_EN_PIN`) varia entre os modelos:

<div class="table-center">
	<table align="center">
		<tr>
			<th>Modelo</th>
			<th>SD_EN_PIN</th>
			<th>GPIO</th>
		</tr>
		<tr>
			<td>E1001 / E1002 / E1004</td>
			<td>16</td>
			<td>GPIO16</td>
		</tr>
		<tr>
			<td>E1003</td>
			<td>39</td>
			<td>GPIO39</td>
		</tr>
	</table>
</div>

Todos os outros pinos do cartão SD (DET, CS, MOSI, MISO, SCK) são os mesmos em todos os modelos. Selecione a aba do seu dispositivo e copie o código para o sketch da sua IDE Arduino.

<Tabs>
<TabItem value="e1001_e1002_e1004" label="E1001 / E1002 / E1004" default>

<details>
<summary>Clique para expandir o código completo de exemplo do cartão SD</summary>

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

</details>

</TabItem>
<TabItem value="e1003" label="E1003">

<details>
<summary>Clique para expandir o código completo de exemplo do cartão SD</summary>

```cpp
#include <SD.h>
#include <SPI.h>

// SD Card Pin Definitions
#define SD_EN_PIN   39  // Power enable for the SD card slot (E1003)
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

</details>

</TabItem>
</Tabs>

#### Explicação do código

- **Definições de pinos:** O código começa definindo os pinos GPIO usados para o slot do cartão MicroSD. Observe que os pinos SPI (`MOSI`, `SCK`) são compartilhados com o display de e-paper, mas um Chip Select separado (`SD_CS_PIN`) e uma instância SPI dedicada (`spiSD`) garantem que eles possam ser usados de forma independente.
- **Inicialização do SPI:** Instanciamos um novo objeto SPI, `spiSD(HSPI)`, para usar o segundo controlador SPI de hardware do ESP32 (HSPI). Esta é a melhor prática para evitar conflitos com outros dispositivos SPI.
- **Detecção do cartão:** A função `isCardInserted()` lê o `SD_DET_PIN`. No hardware do reTerminal, esse pino é puxado para LOW quando um cartão está presente.
- **Montar/Desmontar:** A função `mountSD()` habilita a alimentação do cartão, configura o barramento HSPI com os pinos corretos e chama `SD.begin()` para inicializar o sistema de arquivos. `unmountSD()` libera os recursos.
- **Listagem de arquivos:** `listRoot()` abre o diretório raiz (`/`), e `listDir()` é uma função recursiva que percorre o sistema de arquivos, imprimindo os nomes de todos os arquivos e diretórios.
- **`setup()`:** Inicializa `Serial1` para saída, configura o pino de detecção do cartão e realiza uma verificação inicial para ver se um cartão já está inserido quando o dispositivo é ligado.
- **`loop()`:** Em vez de verificar o cartão constantemente, o código usa um temporizador não bloqueante (`millis()`) para verificar uma mudança no status do cartão uma vez por segundo. Se uma mudança for detectada (cartão inserido ou removido), ele monta ou desmonta o cartão e imprime o status no monitor serial.

#### Resultados esperados

1. Envie o código para o seu reTerminal.
2. Abra o Serial Monitor da Arduino IDE (**Tools > Serial Monitor**).
3. Certifique-se de que a taxa de baud está configurada para **115200**.

Você verá uma saída correspondente às seguintes ações:

- **Na inicialização sem cartão:** O monitor imprimirá `[SD] No card detected at startup...`
- **Quando você inserir um cartão:** O monitor imprimirá `[SD] Card inserted.`, seguido por uma listagem completa de todos os arquivos e diretórios no cartão.
- **Quando você remover o cartão:** O monitor imprimirá `[SD] Card removed.`

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

## Exemplo avançado: pipeline de imagem do cartão SD → ePaper

Este é o exemplo principal para o reTerminal E Series. Ele carrega um arquivo **JPEG / BMP / PNG** do cartão microSD, o processa por um pipeline de dithering configurável e renderiza o resultado no painel de ePaper — com controles para **algoritmo de dithering**, **brilho**, **posição de ancoragem** e **ajuste / escala**. A mesma estrutura de código funciona em todas as quatro variantes de painel; o que muda por modelo é apenas a profundidade de cor de saída (1-bit PB, 2-bit Gray4, 4-bit Gray16 ou 6 cores E6).

Cinco sketches prontos para gravação são fornecidos com a biblioteca **Seeed_GFX** — escolha aquele que corresponde ao seu hardware:

### Índice de exemplos

<div class="table-center">
  <table>
    <tr>
      <th>Dispositivo</th>
      <th>Sketch de exemplo</th>
      <th>Resolução do painel</th>
      <th>Paleta de saída</th>
    </tr>
    <tr>
      <td>reTerminal&nbsp;E1001 (BW)</td>
      <td><code>reTerminal_E1001_SDcard_BW</code></td>
      <td>800 × 480</td>
      <td>Preto / branco de 1 bit</td>
    </tr>
    <tr>
      <td>reTerminal&nbsp;E1001 (Gray4)</td>
      <td><code>reTerminal_E1001_SDcard_Gray4</code></td>
      <td>800 × 480</td>
      <td>Escala de cinza de 2 bits e 4 níveis</td>
    </tr>
    <tr>
      <td>reTerminal&nbsp;E1002</td>
      <td><code>reTerminal_E1002_SDcard_Color6</code></td>
      <td>800 × 480</td>
      <td>6 cores (P / B / V / A / G / B)</td>
    </tr>
    <tr>
      <td>reTerminal&nbsp;E1003</td>
      <td><code>reTerminal_E1003_SDcard_Gray16</code></td>
      <td>1872 × 1404</td>
      <td>Escala de cinza de 4 bits e 16 níveis</td>
    </tr>
    <tr>
      <td>reTerminal&nbsp;E1004</td>
      <td><code>reTerminal_E1004_SDcard_Color6</code></td>
      <td>1200 × 1600</td>
      <td>6 cores (P / B / V / A / G / B)</td>
    </tr>
  </table>
</div>

Todos os cinco sketches estão em [`Seeed_GFX/examples/ePaper/reTerminal_SDcard_Bitmap/`](https://github.com/Seeed-Studio/Seeed_GFX/tree/master/examples/ePaper/reTerminal_SDcard_Bitmap). Cada pasta é **totalmente autônoma** — nenhuma biblioteca extra para instalar, basta abrir e gravar.

### O que o pipeline faz

<svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 1050 300" 
  width="100%" 
  height="auto" 
  style={{ 
    backgroundColor: '#ffffff', 
    borderRadius: '12px', 
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
    padding: '20px',
    marginBottom: '20px'
  }}
>
  {/* Definitions for markers and filters */}
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
    </marker>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.05" />
    </filter>
  </defs>

  {/* Title */}
  <text x="525" y="40" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill="#1e293b" textAnchor="middle">
    Image Processing Pipeline: microSD to ePaper
  </text>

  {/* ================= NODES ================= */}

  {/* Node 1: microSD */}
  <g transform="translate(20, 100)">
    <rect x="0" y="0" width="140" height="90" rx="8" fill="#f8fafc" stroke="#3b82f6" strokeWidth="2" filter="url(#shadow)" />
    <path d="M55 15 v14 a2 2 0 0 0 2 2 h12 a2 2 0 0 0 2-2 V19 l-4-4 H57 a2 2 0 0 0-2 2z m4 2 h2 v4 h-2 v-4z m4 0 h2 v4 h-2 v-4z" fill="#3b82f6" />
    <text x="70" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">microSD</text>
    <text x="70" y="75" fontFamily="sans-serif" fontSize="12" fill="#475569" textAnchor="middle">JPG / BMP / PNG</text>
  </g>

  {/* Node 2: PSRAM */}
  <g transform="translate(240, 100)">
    <rect x="0" y="0" width="140" height="90" rx="8" fill="#f8fafc" stroke="#ef4444" strokeWidth="2" filter="url(#shadow)" />
    <path d="M57 17 v12 h20 V17 H57z m2 2 h16 v8 H59 v-8z m-4 2 h-2 v2 h2 v-2z m0 4 h-2 v2 h2 v-2z m24-4 h2 v2 h-2 v-2z m0 4 h2 v2 h-2 v-2z" fill="#ef4444" />
    <text x="70" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">PSRAM</text>
    <text x="70" y="75" fontFamily="sans-serif" fontSize="12" fill="#475569" textAnchor="middle">RGB888</text>
  </g>

  {/* Node 3: Scaled Buffer */}
  <g transform="translate(460, 100)">
    <rect x="0" y="0" width="140" height="90" rx="8" fill="#f8fafc" stroke="#f59e0b" strokeWidth="2" filter="url(#shadow)" />
    <path d="M67 15 l2.3 2.3 -2.89 2.87 1.42 1.42 L70.7 18.7 73 21 V15 h-6z M55 21 l2.3-2.3 2.87 2.89 1.42-1.42 L58.7 17.3 61 15 h-6 v6z m6 12 l-2.3-2.3 2.89-2.87 -1.42-1.42 L57.3 29.3 55 27 v6h6z m12-6 l-2.3 2.3 -2.87-2.89 -1.42 1.42 2.89 2.87 L73 33 v-6z" fill="#f59e0b" />
    <text x="70" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">Scaled Buffer</text>
    <text x="70" y="75" fontFamily="sans-serif" fontSize="12" fill="#475569" textAnchor="middle">scaled RGB888</text>
  </g>

  {/* Node 4: Palette Buffer */}
  <g transform="translate(680, 100)">
    <rect x="0" y="0" width="140" height="90" rx="8" fill="#f8fafc" stroke="#8b5cf6" strokeWidth="2" filter="url(#shadow)" />
    <path d="M70 14 c-5.52 0-10 4.48-10 10 s4.48 10 10 10 c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.17-.64-1.6-.39-.41-.61-.98-.61-1.6 0-1.38 1.12-2.5 2.5-2.5 h1.5 c2.21 0 4-1.79 4-4 0-3.86-4.48-7-10-7z m-4 7 c-.83 0-1.5-.67-1.5-1.5 s.67-1.5 1.5-1.5 s1.5 .67 1.5 1.5 s-.67 1.5-1.5 1.5z m3.5-3 c-.83 0-1.5-.67-1.5-1.5 s.67-1.5 1.5-1.5 s1.5 .67 1.5 1.5 s-.67 1.5-1.5 1.5z m3.5 3 c-.83 0-1.5-.67-1.5-1.5 s.67-1.5 1.5-1.5 s1.5 .67 1.5 1.5 s-.67 1.5-1.5 1.5z m3.5 3 c-.83 0-1.5-.67-1.5-1.5 s.67-1.5 1.5-1.5 s1.5 .67 1.5 1.5 s-.67 1.5-1.5 1.5z" fill="#8b5cf6" />
    <text x="70" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">Palette Buffer</text>
    <text x="70" y="75" fontFamily="sans-serif" fontSize="12" fill="#475569" textAnchor="middle">índices da paleta do painel</text>
  </g>

  {/* Node 5: ePaper */}
  <g transform="translate(900, 100)">
    <rect x="0" y="0" width="130" height="90" rx="8" fill="#f8fafc" stroke="#10b981" strokeWidth="2" filter="url(#shadow)" />
    <path d="M77 15 H53 c-1.1 0-2 .9-2 2 v14 c0 1.1 .9 2 2 2 h24 c1.1 0 2-.9 2-2 V17 c0-1.1-.9-2-2-2z m0 16 H53 V17 h24 v14z" fill="#10b981" />
    <text x="65" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">ePaper</text>
    <text x="65" y="75" fontFamily="sans-serif" fontSize="12" fill="#475569" textAnchor="middle">atualização do painel</text>
  </g>

  {/* ================= ARROWS & LABELS ================= */}

  {/* Arrow 1: Decode */}
  <g>
    <line x1="160" y1="145" x2="232" y2="145" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead)" />
    <text x="196" y="135" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#3b82f6" textAnchor="middle">decode</text>
    <text x="196" y="165" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="middle">pngle / jpeg / bmp</text>
    {/* Animated Data Packet */}
    <circle cy="145" r="4" fill="#3b82f6">
      <animate attributeName="cx" from="160" to="230" dur="1.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.5s" repeatCount="indefinite" />
    </circle>
  </g>

  {/* Arrow 2: Resize */}
  <g>
    <line x1="380" y1="145" x2="452" y2="145" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead)" />
    <text x="416" y="135" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#ef4444" textAnchor="middle">redimensionar</text>
    <text x="416" y="165" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="middle">vizinho mais próximo</text>
    {/* Pacote de dados animado */}
    <circle cy="145" r="4" fill="#ef4444">
      <animate attributeName="cx" from="380" to="450" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
    </circle>
  </g>

  {/* Seta 3: Dither */}
  <g>
    <line x1="600" y1="145" x2="672" y2="145" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead)" />
    <text x="636" y="135" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#f59e0b" textAnchor="middle">dither</text>
    <text x="636" y="165" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="middle">Bayer / FS / ...</text>
    {/* Pacote de dados animado */}
    <circle cy="145" r="4" fill="#f59e0b">
      <animate attributeName="cx" from="600" to="670" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
    </circle>
  </g>

  {/* Seta 4: Push */}
  <g>
    <line x1="820" y1="145" x2="892" y2="145" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead)" />
    <text x="856" y="135" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#8b5cf6" textAnchor="middle">push</text>
    <text x="856" y="165" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="middle">Sprite</text>
    {/* Pacote de dados animado */}
    <circle cy="145" r="4" fill="#8b5cf6">
      <animate attributeName="cx" from="820" to="890" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
    </circle>
  </g>

  {/* Animação de atualização da tela ePaper (pulso) */}
  <rect x="900" y="100" width="130" height="90" rx="8" fill="none" stroke="#10b981" strokeWidth="4" opacity="0">
    <animate attributeName="opacity" values="0;0.6;0" keyTimes="0;0.5;1" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
    <animate attributeName="strokeWidth" values="4;8;4" keyTimes="0;0.5;1" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
  </rect>

</svg>

1. **Decodificar** — o formato do arquivo é detectado por bytes mágicos (`FF D8`, `BM` ou `89 50 4E 47`). Uma extensão enganosa é corrigida automaticamente e um aviso é registrado.
2. **Redimensionar** (opcional) — redução de escala por vizinho mais próximo com base em `DISPLAY_FIT` / `DISPLAY_SCALE`.
3. **Dither** — um de cinco algoritmos quantiza RGB de 24 bits na pequena paleta do painel (2 / 4 / 6 / 16 níveis).
4. **Push** — o buffer quantizado é gravado no Sprite do ePaper na posição de ancoragem e, em seguida, `epaper.update()` o envia para o painel.

### Etapa 1 — Abra o exemplo para o seu modelo

No Arduino IDE: **File → Examples → Seeed_GFX → ePaper → reTerminal_SDcard_Bitmap →** *(escolha o seu modelo)*.

<Tabs groupId="reterm-model">
<TabItem value="e1001-bw" label="E1001 BW" default>

```text
reTerminal_SDcard_Bitmap/
└── reTerminal_E1001_SDcard_BW/
    ├── reTerminal_E1001_SDcard_BW.ino   ← config + setup() + loop()
    ├── dither.{h,cpp}                   ← BW dither algorithms
    ├── image_loader.{h,cpp}             ← JPEG / BMP / PNG decoder
    ├── pngle.{h,c} + miniz.{h,c}        ← PNG backend (MIT, vendored)
    └── driver.h                         ← selects Setup520 (UC8179, 800x480)
```

</TabItem>
<TabItem value="e1001-gray4" label="E1001 Gray4">

```text
reTerminal_SDcard_Bitmap/
└── reTerminal_E1001_SDcard_Gray4/
    ├── reTerminal_E1001_SDcard_Gray4.ino
    ├── dither.{h,cpp}                   ← Gray4 dither algorithms
    ├── image_loader.{h,cpp}
    ├── pngle.{h,c} + miniz.{h,c}
    └── driver.h                         ← Setup520 + initGrayMode(4)
```

</TabItem>
<TabItem value="e1002" label="E1002">

```text
reTerminal_SDcard_Bitmap/
└── reTerminal_E1002_SDcard_Color6/
    ├── reTerminal_E1002_SDcard_Color6.ino
    ├── dither.{h,cpp}                   ← 6-color dither algorithms
    ├── image_loader.{h,cpp}
    ├── pngle.{h,c} + miniz.{h,c}
    └── driver.h                         ← Setup521 (ED2208, 800x480 E6)
```

</TabItem>
<TabItem value="e1003" label="E1003">

```text
reTerminal_SDcard_Bitmap/
└── reTerminal_E1003_SDcard_Gray16/
    ├── reTerminal_E1003_SDcard_Gray16.ino
    ├── dither.{h,cpp}                   ← Gray16 dither algorithms
    ├── image_loader.{h,cpp}
    ├── pngle.{h,c} + miniz.{h,c}
    └── driver.h                         ← Setup522 + initGrayMode(16)
```

</TabItem>
<TabItem value="e1004" label="E1004">

```text
reTerminal_SDcard_Bitmap/
└── reTerminal_E1004_SDcard_Color6/
    ├── reTerminal_E1004_SDcard_Color6.ino
    ├── dither.{h,cpp}                   ← 6-color dither algorithms
    ├── image_loader.{h,cpp}
    ├── pngle.{h,c} + miniz.{h,c}
    └── driver.h                         ← Setup523 (T133A01, 1200x1600 E6)
```

</TabItem>
</Tabs>

:::tip Sketches autossuficientes
Você não precisa instalar pngle, miniz ou qualquer outra coisa pelo Arduino Library Manager. O código-fonte do decodificador PNG é fornecido **dentro de cada pasta de exemplo**, então o Arduino IDE o detecta automaticamente quando compila o sketch.
:::

### Código completo do sketch

O código-fonte completo `.ino` para cada variante é mostrado abaixo. Todas as configurações ajustáveis pelo usuário (caminho da imagem, algoritmo de dithering, âncora, ajuste/escala) estão no bloco de **CONFIGURAÇÃO DO USUÁRIO** próximo ao topo — o restante do arquivo é código padrão que normalmente não precisa ser editado.

<Tabs groupId="reterm-model">
<TabItem value="e1001-bw" label="E1001 BW" default>

<details>
<summary>Clique aqui para visualizar o código completo — reTerminal_E1001_SDcard_BW.ino</summary>

```cpp
#include <SPI.h>
#include <FS.h>
#include <SD.h>
#include "TFT_eSPI.h"
#include "dither.h"
#include "image_loader.h"

#ifndef EPAPER_ENABLE
#error "This example requires Setup520_Seeed_reTerminal_E1001 -- check driver.h selects BOARD_SCREEN_COMBO 520"
#endif

EPaper epaper;

static constexpr int    PIN_SD_SCK   = 7;
static constexpr int    PIN_SD_MISO  = 8;
static constexpr int    PIN_SD_MOSI  = 9;
static constexpr int    PIN_SD_CS    = 14;
static constexpr int    PIN_SD_EN    = 16;
static constexpr int    PIN_SD_DET   = 15;
static constexpr int    PIN_DBG_RX   = 44;
static constexpr int    PIN_DBG_TX   = 43;
#define LOG       Serial1
#define TAG       "[e1001-bw]"

// =============================================================================
// USER CONFIGURATION
// =============================================================================

static const char* IMAGE_PATH = "/img/demo.jpg";

// DITHER_NONE / DITHER_BAYER8 / DITHER_FS / DITHER_JARVIS / DITHER_ATKINSON
static const DitherMethod DITHER_METHOD = DITHER_FS;
// 1.0 = neutral, >1.0 darkens, <1.0 brightens
static const float DITHER_GAMMA = 1.0f;
// false = normal, true = invert black/white
static const bool DITHER_INVERT = false;

// ANCHOR_TOP_LEFT / ANCHOR_TOP_CENTER / ANCHOR_TOP_RIGHT /
// ANCHOR_MIDDLE_LEFT / ANCHOR_CENTER / ANCHOR_MIDDLE_RIGHT /
// ANCHOR_BOTTOM_LEFT / ANCHOR_BOTTOM_CENTER / ANCHOR_BOTTOM_RIGHT
enum DisplayAnchor {
  ANCHOR_TOP_LEFT, ANCHOR_TOP_CENTER, ANCHOR_TOP_RIGHT,
  ANCHOR_MIDDLE_LEFT, ANCHOR_CENTER, ANCHOR_MIDDLE_RIGHT,
  ANCHOR_BOTTOM_LEFT, ANCHOR_BOTTOM_CENTER, ANCHOR_BOTTOM_RIGHT,
};
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;

// FIT_ORIGINAL / FIT_CONTAIN / FIT_SCALE
enum DisplayFit { FIT_ORIGINAL, FIT_CONTAIN, FIT_SCALE };
static const DisplayFit DISPLAY_FIT   = FIT_SCALE;
static const float      DISPLAY_SCALE = 0.7f;

// =============================================================================
// (implementation below -- no need to edit)
// =============================================================================

static void log_mem(const char* tag) {
  LOG.printf("[mem] %-22s heap=%lu kB  PSRAM free=%lu/%lu kB\n", tag,
             (unsigned long)(ESP.getFreeHeap() / 1024),
             (unsigned long)(ESP.getFreePsram() / 1024),
             (unsigned long)(ESP.getPsramSize() / 1024));
  LOG.flush();
}

static void list_sd_root(int max_entries = 32) {
  File root = SD.open("/");
  if (!root || !root.isDirectory()) { LOG.println("[sd] cannot open '/'"); return; }
  LOG.println("[sd] contents of '/' :");
  int n = 0;
  File entry = root.openNextFile();
  while (entry) {
    if (entry.isDirectory()) LOG.printf("   <DIR>  %s\n", entry.name());
    else LOG.printf("   %7lu B  %s\n", (unsigned long)entry.size(), entry.name());
    entry.close();
    if (++n >= max_entries) { LOG.printf("   ... (truncated at %d)\n", max_entries); break; }
    entry = root.openNextFile();
  }
  if (n == 0) LOG.println("   (empty)");
  root.close(); LOG.flush();
}

static void compute_target_size(int src_w, int src_h, DisplayFit fit, float scale,
                                int panel_w, int panel_h, int* out_w, int* out_h) {
  switch (fit) {
    case FIT_ORIGINAL: *out_w = src_w; *out_h = src_h; break;
    case FIT_CONTAIN: {
      double s = (double)panel_w/src_w; if ((double)panel_h/src_h < s) s = (double)panel_h/src_h;
      if (s > 1.0) s = 1.0;
      *out_w = (int)(src_w*s+0.5); *out_h = (int)(src_h*s+0.5); break;
    }
    case FIT_SCALE: *out_w = (int)(src_w*scale+0.5); *out_h = (int)(src_h*scale+0.5); break;
  }
  if (*out_w & 7) *out_w &= ~7;
  if (*out_w < 8) *out_w = 8;
  if (*out_h < 1) *out_h = 1;
}

static void compute_anchor_xy(int img_w, int img_h, DisplayAnchor a,
                              int panel_w, int panel_h, int* out_x, int* out_y) {
  int x = 0, y = 0;
  switch (a) {
    case ANCHOR_TOP_LEFT:      x=0;                     y=0;                    break;
    case ANCHOR_TOP_CENTER:    x=(panel_w-img_w)/2;     y=0;                    break;
    case ANCHOR_TOP_RIGHT:     x=panel_w-img_w;         y=0;                    break;
    case ANCHOR_MIDDLE_LEFT:   x=0;                     y=(panel_h-img_h)/2;    break;
    case ANCHOR_CENTER:        x=(panel_w-img_w)/2;     y=(panel_h-img_h)/2;    break;
    case ANCHOR_MIDDLE_RIGHT:  x=panel_w-img_w;         y=(panel_h-img_h)/2;    break;
    case ANCHOR_BOTTOM_LEFT:   x=0;                     y=panel_h-img_h;        break;
    case ANCHOR_BOTTOM_CENTER: x=(panel_w-img_w)/2;     y=panel_h-img_h;        break;
    case ANCHOR_BOTTOM_RIGHT:  x=panel_w-img_w;         y=panel_h-img_h;        break;
  }
  if (x & 7) x &= ~7;
  *out_x = x; *out_y = y;
}

static bool show_image_on_panel(RgbImage* img) {
  int W, H;
  compute_target_size(img->width, img->height, DISPLAY_FIT, DISPLAY_SCALE,
                      EPD_WIDTH, EPD_HEIGHT, &W, &H);
  int x, y;
  compute_anchor_xy(W, H, DISPLAY_ANCHOR, EPD_WIDTH, EPD_HEIGHT, &x, &y);

  if (W != img->width || H != img->height) {
    if (!resize_image(img, W, H)) { LOG.println("[layout] resize OOM"); return false; }
  }
  const size_t npx = (size_t)W * H;
  uint8_t* idx = (uint8_t*)ps_malloc(npx);
  if (!idx) idx = (uint8_t*)malloc(npx);
  if (!idx) { LOG.println(TAG " OOM idx"); return false; }

  static const char* kDN[] = {"NONE","BAYER8","FS","JARVIS","ATKINSON"};
  LOG.printf(TAG " dithering BW with %s, gamma=%.2f\n", kDN[(int)DITHER_METHOD], DITHER_GAMMA);
  if (!dither_image(img->pixels, W, H, PAL_BW, DITHER_METHOD, DITHER_GAMMA, DITHER_INVERT, idx)) {
    free(idx); return false;
  }
  image_free(img);

  const size_t bm_bytes = ((size_t)W+7)/8 * (size_t)H;
  uint8_t* bm = (uint8_t*)ps_malloc(bm_bytes);
  if (!bm) bm = (uint8_t*)malloc(bm_bytes);
  if (!bm) { free(idx); return false; }
  pack_1bpp_msb(idx, bm, W, H, true);
  free(idx);

  epaper.drawBitmap(x, y, bm, W, H, TFT_BLACK, TFT_WHITE);
  epaper.update();
  free(bm);
  return true;
}

void setup() {
  LOG.begin(115200, SERIAL_8N1, PIN_DBG_RX, PIN_DBG_TX);
  delay(2500);
  LOG.println("==============================================");
  LOG.println("  reTerminal E1001 -- SD Bitmap (BW)");
  LOG.println("==============================================");
  log_mem("start");

  pinMode(PIN_SD_EN, OUTPUT); digitalWrite(PIN_SD_EN, HIGH);
  pinMode(PIN_SD_DET, INPUT_PULLUP); delay(50);

  epaper.begin();
  epaper.fillScreen(TFT_WHITE);
  epaper.update();

  // UC8179 is write-only (TFT_MISO=-1 in Setup520). Re-init SPI with MISO for SD.
  SPIClass& spi = epaper.getSPIinstance();
  spi.end();
  spi.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, -1);

  if (!SD.begin(PIN_SD_CS, spi)) {
    LOG.println(TAG " SD.begin FAILED -- aborting"); return;
  }
  list_sd_root();

  RgbImage img;
  if (!load_image_from_sd(IMAGE_PATH, 0, 0, &img)) {
    LOG.println(TAG " load failed -- aborting"); return;
  }
  log_mem("after decode");
  show_image_on_panel(&img);
  image_free(&img);

  epaper.sleep();
  LOG.println(TAG " done.");
}

void loop() { delay(1000); }
```

</details>

</TabItem>
<TabItem value="e1001-gray4" label="E1001 Gray4">

<details>
<summary>Clique aqui para visualizar o código completo — reTerminal_E1001_SDcard_Gray4.ino</summary>

```cpp
#include <SPI.h>
#include <FS.h>
#include <SD.h>
#include "TFT_eSPI.h"
#include "dither.h"
#include "image_loader.h"

#ifndef EPAPER_ENABLE
#error "This example requires Setup520_Seeed_reTerminal_E1001 -- check driver.h selects BOARD_SCREEN_COMBO 520"
#endif

EPaper epaper;

static constexpr int PIN_SD_SCK  = 7;
static constexpr int PIN_SD_MISO = 8;
static constexpr int PIN_SD_MOSI = 9;
static constexpr int PIN_SD_CS   = 14;
static constexpr int PIN_SD_EN   = 16;
static constexpr int PIN_SD_DET  = 15;
static constexpr int PIN_DBG_RX  = 44;
static constexpr int PIN_DBG_TX  = 43;
#define LOG  Serial1
#define TAG  "[e1001-g4]"

// =============================================================================
// USER CONFIGURATION
// =============================================================================

static const char* IMAGE_PATH = "/img/demo.jpg";

// DITHER_NONE / DITHER_BAYER8 / DITHER_FS / DITHER_JARVIS / DITHER_ATKINSON
static const DitherMethod DITHER_METHOD = DITHER_FS;
static const float        DITHER_GAMMA  = 1.0f;

enum DisplayAnchor {
  ANCHOR_TOP_LEFT, ANCHOR_TOP_CENTER, ANCHOR_TOP_RIGHT,
  ANCHOR_MIDDLE_LEFT, ANCHOR_CENTER, ANCHOR_MIDDLE_RIGHT,
  ANCHOR_BOTTOM_LEFT, ANCHOR_BOTTOM_CENTER, ANCHOR_BOTTOM_RIGHT,
};
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;

enum DisplayFit { FIT_ORIGINAL, FIT_CONTAIN, FIT_SCALE };
static const DisplayFit DISPLAY_FIT   = FIT_SCALE;
static const float      DISPLAY_SCALE = 0.7f;

// =============================================================================
// (implementation below)
// =============================================================================

static void log_mem(const char* tag) {
  LOG.printf("[mem] %-22s heap=%lu kB  PSRAM free=%lu/%lu kB\n", tag,
             (unsigned long)(ESP.getFreeHeap()/1024),
             (unsigned long)(ESP.getFreePsram()/1024),
             (unsigned long)(ESP.getPsramSize()/1024));
}

static void pack_4bpp_in_place(uint8_t* idx, int W, int H) {
  for (int y = 0; y < H; ++y) {
    const uint8_t* src = idx + (size_t)y * W;
    uint8_t*       dst = idx + (size_t)y * (W/2);
    for (int x = 0; x < W; x += 2)
      dst[x>>1] = (uint8_t)(((src[x] & 0xF) << 4) | (src[x+1] & 0xF));
  }
}

static bool show_image_on_panel(RgbImage* img) {
  int W = img->width, H = img->height;
  // (fit/anchor logic omitted for brevity -- see full source in the library)
  if (W != img->width || H != img->height)
    if (!resize_image(img, W, H)) return false;
  if ((W & 1) || (H & 1)) return false;

  uint8_t* idx = (uint8_t*)ps_malloc((size_t)W*H);
  if (!idx) idx = (uint8_t*)malloc((size_t)W*H);
  if (!idx) return false;

  if (!dither_image(img->pixels, W, H, PAL_GRAY4, DITHER_METHOD, DITHER_GAMMA, false, idx)) {
    free(idx); return false;
  }
  image_free(img);
  pack_4bpp_in_place(idx, W, H);

  int x = (EPD_WIDTH  - W) / 2 & ~1;
  int y = (EPD_HEIGHT - H) / 2;
  epaper.pushImage(x, y, W, H, (uint16_t*)idx);
  epaper.update();
  free(idx);
  return true;
}

void setup() {
  LOG.begin(115200, SERIAL_8N1, PIN_DBG_RX, PIN_DBG_TX);
  delay(2500);
  LOG.println("==============================================");
  LOG.println("  reTerminal E1001 -- SD Bitmap (Gray4)");
  LOG.println("==============================================");

  pinMode(PIN_SD_EN, OUTPUT); digitalWrite(PIN_SD_EN, HIGH);
  pinMode(PIN_SD_DET, INPUT_PULLUP); delay(50);

  epaper.begin();
  epaper.fillScreen(TFT_WHITE);
  epaper.update();
  epaper.initGrayMode(GRAY_LEVEL4);
  epaper.fillSprite(TFT_GRAY_3);

  // UC8179 is write-only (TFT_MISO=-1 in Setup520). Re-init SPI with MISO for SD.
  SPIClass& spi = epaper.getSPIinstance();
  spi.end();
  spi.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, -1);

  if (!SD.begin(PIN_SD_CS, spi)) {
    LOG.println(TAG " SD.begin FAILED"); return;
  }

  RgbImage img;
  if (!load_image_from_sd(IMAGE_PATH, 0, 0, &img)) {
    LOG.println(TAG " load failed"); return;
  }
  log_mem("after decode");
  show_image_on_panel(&img);
  image_free(&img);

  epaper.sleep();
  LOG.println(TAG " done.");
}

void loop() { delay(1000); }
```

</details>

</TabItem>
<TabItem value="e1002" label="E1002">

<details>
<summary>Clique aqui para visualizar o código completo — reTerminal_E1002_SDcard_Color6.ino</summary>

```cpp
#include <SPI.h>
#include <FS.h>
#include <SD.h>
#include "TFT_eSPI.h"
#include "dither.h"
#include "image_loader.h"

#ifndef EPAPER_ENABLE
#error "This example requires Setup521_Seeed_reTerminal_E1002 -- check driver.h selects BOARD_SCREEN_COMBO 521"
#endif

EPaper epaper;

static constexpr int PIN_SD_SCK  = 7;
static constexpr int PIN_SD_MISO = 8;
static constexpr int PIN_SD_MOSI = 9;
static constexpr int PIN_SD_CS   = 14;
static constexpr int PIN_SD_EN   = 16;
static constexpr int PIN_SD_DET  = 15;
static constexpr int PIN_DBG_RX  = 44;
static constexpr int PIN_DBG_TX  = 43;
#define LOG  Serial1
#define TAG  "[e1002]"

// =============================================================================
// USER CONFIGURATION
// =============================================================================

static const char* IMAGE_PATH = "/img/demo.jpg";

// DITHER_NONE / DITHER_BAYER8 / DITHER_FS / DITHER_JARVIS / DITHER_ATKINSON
static const DitherMethod DITHER_METHOD = DITHER_FS;
static const float        DITHER_GAMMA  = 1.0f;

enum DisplayAnchor {
  ANCHOR_TOP_LEFT, ANCHOR_TOP_CENTER, ANCHOR_TOP_RIGHT,
  ANCHOR_MIDDLE_LEFT, ANCHOR_CENTER, ANCHOR_MIDDLE_RIGHT,
  ANCHOR_BOTTOM_LEFT, ANCHOR_BOTTOM_CENTER, ANCHOR_BOTTOM_RIGHT,
};
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;

enum DisplayFit { FIT_ORIGINAL, FIT_CONTAIN, FIT_SCALE };
static const DisplayFit DISPLAY_FIT   = FIT_SCALE;
static const float      DISPLAY_SCALE = 0.7f;

// =============================================================================
// (implementation below)
// =============================================================================

static void log_mem(const char* tag) {
  LOG.printf("[mem] %-22s heap=%lu kB  PSRAM free=%lu/%lu kB\n", tag,
             (unsigned long)(ESP.getFreeHeap()/1024),
             (unsigned long)(ESP.getFreePsram()/1024),
             (unsigned long)(ESP.getPsramSize()/1024));
}

static void pack_4bpp_in_place(uint8_t* idx, int W, int H) {
  for (int y = 0; y < H; ++y) {
    const uint8_t* src = idx + (size_t)y * W;
    uint8_t*       dst = idx + (size_t)y * (W/2);
    for (int x = 0; x < W; x += 2)
      dst[x>>1] = (uint8_t)(((src[x] & 0xF) << 4) | (src[x+1] & 0xF));
  }
}

static bool show_image_on_panel(RgbImage* img) {
  int W = img->width, H = img->height;
  if ((W & 1) || (H & 1)) return false;

  uint8_t* idx = (uint8_t*)ps_malloc((size_t)W*H);
  if (!idx) idx = (uint8_t*)malloc((size_t)W*H);
  if (!idx) return false;

  if (!dither_image(img->pixels, W, H, PAL_E6, DITHER_METHOD, DITHER_GAMMA, false, idx)) {
    free(idx); return false;
  }
  image_free(img);
  pack_4bpp_in_place(idx, W, H);

  int x = (EPD_WIDTH  - W) / 2 & ~1;
  int y = (EPD_HEIGHT - H) / 2;
  epaper.pushImage(x, y, W, H, (uint16_t*)idx);
  epaper.update();
  free(idx);
  return true;
}

void setup() {
  LOG.begin(115200, SERIAL_8N1, PIN_DBG_RX, PIN_DBG_TX);
  delay(2500);
  LOG.println("==============================================");
  LOG.println("  reTerminal E1002 -- SD Bitmap (6-color)");
  LOG.println("==============================================");

  pinMode(PIN_SD_EN, OUTPUT); digitalWrite(PIN_SD_EN, HIGH);
  pinMode(PIN_SD_DET, INPUT_PULLUP); delay(50);

  epaper.begin();
  epaper.fillScreen(TFT_WHITE);
  epaper.update();

  // ED2208 is write-only (TFT_MISO=-1 in Setup521). Re-init SPI with MISO for SD.
  SPIClass& spi = epaper.getSPIinstance();
  spi.end();
  spi.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, -1);

  if (!SD.begin(PIN_SD_CS, spi)) {
    LOG.println(TAG " SD.begin FAILED"); return;
  }

  RgbImage img;
  if (!load_image_from_sd(IMAGE_PATH, 0, 0, &img)) {
    LOG.println(TAG " load failed"); return;
  }
  log_mem("after decode");
  show_image_on_panel(&img);
  image_free(&img);

  epaper.sleep();
  LOG.println(TAG " done.");
}

void loop() { delay(1000); }
```

</details>

</TabItem>
<TabItem value="e1003" label="E1003">

<details>
<summary>Clique aqui para visualizar o código completo — reTerminal_E1003_SDcard_Gray16.ino</summary>

```cpp
#include <SPI.h>
#include <FS.h>
#include <SD.h>
#include "TFT_eSPI.h"
#include "dither.h"
#include "image_loader.h"

#ifndef EPAPER_ENABLE
#error "This example requires Setup522_Seeed_reTerminal_E1003 -- check driver.h selects BOARD_SCREEN_COMBO 522"
#endif

EPaper epaper;

static constexpr int PIN_SD_SCK  = 7;
static constexpr int PIN_SD_MISO = 8;
static constexpr int PIN_SD_MOSI = 9;
static constexpr int PIN_SD_CS   = 14;
static constexpr int PIN_SD_EN   = 39;  // E1003 uses GPIO39, not GPIO16
static constexpr int PIN_SD_DET  = 15;
static constexpr int PIN_DBG_RX  = 44;
static constexpr int PIN_DBG_TX  = 43;
#define LOG  Serial1
#define TAG  "[e1003]"

// =============================================================================
// USER CONFIGURATION
// =============================================================================

static const char* IMAGE_PATH = "/img/demo.jpg";

// DITHER_NONE / DITHER_BAYER8 / DITHER_FS / DITHER_JARVIS / DITHER_ATKINSON
// At 1872x1404, error-diffusion needs >10 MB -- use DITHER_BAYER8 or shrink source first.
static const DitherMethod DITHER_METHOD = DITHER_FS;
static const float        DITHER_GAMMA  = 1.0f;

enum DisplayAnchor {
  ANCHOR_TOP_LEFT, ANCHOR_TOP_CENTER, ANCHOR_TOP_RIGHT,
  ANCHOR_MIDDLE_LEFT, ANCHOR_CENTER, ANCHOR_MIDDLE_RIGHT,
  ANCHOR_BOTTOM_LEFT, ANCHOR_BOTTOM_CENTER, ANCHOR_BOTTOM_RIGHT,
};
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;

enum DisplayFit { FIT_ORIGINAL, FIT_CONTAIN, FIT_SCALE };
static const DisplayFit DISPLAY_FIT   = FIT_ORIGINAL;
static const float      DISPLAY_SCALE = 1.0f;

// =============================================================================
// (implementation below)
// =============================================================================

static void log_mem(const char* tag) {
  LOG.printf("[mem] %-22s heap=%lu kB  PSRAM free=%lu/%lu kB\n", tag,
             (unsigned long)(ESP.getFreeHeap()/1024),
             (unsigned long)(ESP.getFreePsram()/1024),
             (unsigned long)(ESP.getPsramSize()/1024));
}

static void pack_4bpp_in_place(uint8_t* idx, int W, int H) {
  for (int y = 0; y < H; ++y) {
    const uint8_t* src = idx + (size_t)y * W;
    uint8_t*       dst = idx + (size_t)y * (W/2);
    for (int x = 0; x < W; x += 2)
      dst[x>>1] = (uint8_t)(((src[x] & 0xF) << 4) | (src[x+1] & 0xF));
  }
}

static bool show_image_on_panel(RgbImage* img) {
  int W = img->width, H = img->height;
  if ((W & 1) || (H & 1)) return false;

  uint8_t* idx = (uint8_t*)ps_malloc((size_t)W*H);
  if (!idx) idx = (uint8_t*)malloc((size_t)W*H);
  if (!idx) return false;

  if (!dither_image(img->pixels, W, H, PAL_GRAY16, DITHER_METHOD, DITHER_GAMMA, false, idx)) {
    free(idx); return false;
  }
  image_free(img);
  pack_4bpp_in_place(idx, W, H);

  int x = (EPD_WIDTH  - W) / 2 & ~1;
  int y = (EPD_HEIGHT - H) / 2;
  epaper.pushImage(x, y, W, H, (uint16_t*)idx);
  epaper.update();
  free(idx);
  return true;
}

void setup() {
  LOG.begin(115200, SERIAL_8N1, PIN_DBG_RX, PIN_DBG_TX);
  delay(2500);
  LOG.println("==============================================");
  LOG.println("  reTerminal E1003 -- SD Bitmap (Gray16)");
  LOG.println("==============================================");

  pinMode(PIN_SD_EN, OUTPUT); digitalWrite(PIN_SD_EN, HIGH);
  pinMode(PIN_SD_DET, INPUT_PULLUP); delay(50);

  epaper.begin();
  epaper.fillScreen(TFT_WHITE);
  epaper.update();
  epaper.initGrayMode(GRAY_LEVEL16);
  epaper.fillSprite(TFT_GRAY_15);

  // Re-init SPI bus to ensure MISO=GPIO8 is wired (symmetry with E1001/E1002).
  SPIClass& spi = epaper.getSPIinstance();
  spi.end();
  spi.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, -1);

  if (!SD.begin(PIN_SD_CS, spi)) {
    LOG.println(TAG " SD.begin FAILED"); return;
  }

  RgbImage img;
  if (!load_image_from_sd(IMAGE_PATH, 0, 0, &img)) {
    LOG.println(TAG " load failed"); return;
  }
  log_mem("after decode");
  show_image_on_panel(&img);
  image_free(&img);

  epaper.sleep();
  LOG.println(TAG " done.");
}

void loop() { delay(1000); }
```

</details>

</TabItem>
<TabItem value="e1004" label="E1004">

<details>
<summary>Clique aqui para visualizar o código completo — reTerminal_E1004_SDcard_Color6.ino</summary>

```cpp
#include <SPI.h>
#include <FS.h>
#include <SD.h>
#include "TFT_eSPI.h"
#include "dither.h"
#include "image_loader.h"

#ifndef EPAPER_ENABLE
#error "This example requires Setup523_Seeed_reTerminal_E1004 -- check driver.h selects BOARD_SCREEN_COMBO 523"
#endif

EPaper epaper;

static constexpr int PIN_SD_SCK  = 7;
static constexpr int PIN_SD_MISO = 8;
static constexpr int PIN_SD_MOSI = 9;
static constexpr int PIN_SD_CS   = 14;
static constexpr int PIN_SD_EN   = 16;
static constexpr int PIN_SD_DET  = 15;
static constexpr int PIN_DBG_RX  = 44;
static constexpr int PIN_DBG_TX  = 43;
#define LOG  Serial1
#define TAG  "[e1004]"

// =============================================================================
// USER CONFIGURATION
// =============================================================================

static const char* IMAGE_PATH = "/img/demo.jpg";

// DITHER_NONE / DITHER_BAYER8 / DITHER_FS / DITHER_JARVIS / DITHER_ATKINSON
// Default BAYER8: safe at any source size. Switch to FS only for small images.
static const DitherMethod DITHER_METHOD = DITHER_BAYER8;
static const float        DITHER_GAMMA  = 1.0f;

enum DisplayAnchor {
  ANCHOR_TOP_LEFT, ANCHOR_TOP_CENTER, ANCHOR_TOP_RIGHT,
  ANCHOR_MIDDLE_LEFT, ANCHOR_CENTER, ANCHOR_MIDDLE_RIGHT,
  ANCHOR_BOTTOM_LEFT, ANCHOR_BOTTOM_CENTER, ANCHOR_BOTTOM_RIGHT,
};
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;

enum DisplayFit { FIT_ORIGINAL, FIT_CONTAIN, FIT_SCALE };
static const DisplayFit DISPLAY_FIT   = FIT_ORIGINAL;
static const float      DISPLAY_SCALE = 1.0f;

// =============================================================================
// (implementation below)
// =============================================================================

static void log_mem(const char* tag) {
  LOG.printf("[mem] %-22s heap=%lu kB  PSRAM free=%lu/%lu kB\n", tag,
             (unsigned long)(ESP.getFreeHeap()/1024),
             (unsigned long)(ESP.getFreePsram()/1024),
             (unsigned long)(ESP.getPsramSize()/1024));
}

static void pack_4bpp_in_place(uint8_t* idx, int W, int H) {
  for (int y = 0; y < H; ++y) {
    const uint8_t* src = idx + (size_t)y * W;
    uint8_t*       dst = idx + (size_t)y * (W/2);
    for (int x = 0; x < W; x += 2)
      dst[x>>1] = (uint8_t)(((src[x] & 0xF) << 4) | (src[x+1] & 0xF));
  }
}

static bool show_image_on_panel(RgbImage* img) {
  int W = img->width, H = img->height;
  if ((W & 1) || (H & 1)) return false;

  uint8_t* idx = (uint8_t*)ps_malloc((size_t)W*H);
  if (!idx) idx = (uint8_t*)malloc((size_t)W*H);
  if (!idx) return false;

  if (!dither_image(img->pixels, W, H, PAL_E6, DITHER_METHOD, DITHER_GAMMA, false, idx)) {
    free(idx); return false;
  }
  image_free(img);
  pack_4bpp_in_place(idx, W, H);

  int x = (EPD_WIDTH  - W) / 2 & ~1;
  int y = (EPD_HEIGHT - H) / 2;
  epaper.pushImage(x, y, W, H, (uint16_t*)idx);
  epaper.update();
  free(idx);
  return true;
}

void setup() {
  LOG.begin(115200, SERIAL_8N1, PIN_DBG_RX, PIN_DBG_TX);
  delay(2500);
  LOG.println("==============================================");
  LOG.println("  reTerminal E1004 -- SD Bitmap (6-color)");
  LOG.println("==============================================");

  pinMode(PIN_SD_EN, OUTPUT); digitalWrite(PIN_SD_EN, HIGH);
  pinMode(PIN_SD_DET, INPUT_PULLUP); delay(50);

  epaper.begin();
  epaper.fillScreen(TFT_WHITE);
  epaper.update();

  // Re-init SPI bus for symmetry with E1001/E1002 (no-op on E1004, MISO already configured).
  SPIClass& spi = epaper.getSPIinstance();
  spi.end();
  spi.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, -1);

  if (!SD.begin(PIN_SD_CS, spi)) {
    LOG.println(TAG " SD.begin FAILED"); return;
  }

  RgbImage img;
  if (!load_image_from_sd(IMAGE_PATH, 0, 0, &img)) {
    LOG.println(TAG " load failed"); return;
  }
  log_mem("after decode");
  show_image_on_panel(&img);
  image_free(&img);

  epaper.sleep();
  LOG.println(TAG " done.");
}

void loop() { delay(1000); }
```

</details>

</TabItem>
</Tabs>

:::note Código simplificado vs. código-fonte completo
Os blocos de código acima são **levemente condensados** (funções auxiliares embutidas, chamadas de log verbosas removidas) para mantê-los legíveis aqui. Os sketches na biblioteca — abertos via **File → Examples → Seeed_GFX → ePaper → reTerminal_SDcard_Bitmap** — contêm o log de diagnóstico completo, toda a lógica de ajuste/ancoragem e todos os comentários.
:::

### Etapa 2 — Prepare o cartão microSD

1. Formate o cartão como **FAT32**.
2. Crie uma estrutura de pastas que corresponda ao caminho que você definirá no sketch — o padrão é `/img/demo.jpg`:

   ```text
   <SD root>/
   └── img/
       └── demo.jpg          ← or demo.png / demo.bmp
   ```

3. Insira o cartão no reTerminal **antes** de ligar o dispositivo (hot-plug funciona, mas é menos confiável).

### Etapa 3 — Prepare sua imagem

O carregador aceita três formatos prontos para uso:

| Formato | O que funciona | O que evitar |
|---|---|---|
| **JPEG** (`.jpg` / `.jpeg`) | Baseline 8 bits, YCbCr ou escala de cinza, qualquer subamostragem de croma (4:4:4 / 4:2:2 / 4:2:0). | JPEG progressivo, CMYK, fontes com rotação apenas por EXIF. |
| **BMP** (`.bmp`) | BGR de 24 bits sem compactação, ou indexado de 4 bits (paleta + `BI_RGB`). | `BI_BITFIELDS`, BMPs compactados com RLE. |
| **PNG** (`.png`) | Qualquer PNG padrão (8 bits, 16 bits, paleta, entrelaçado, RGBA). RGBA é composto sobre **branco** porque os painéis de ePaper são opacos. | Nenhum — o pngle lida com todas as variantes padrão de PNG. |

O formato real do arquivo é detectado pelos **magic bytes**, não pela extensão. Um JPEG salvo como `.bmp` ainda funciona (você só verá um aviso no log serial).

Orientação de tamanho por painel:

<Tabs groupId="reterm-model">
<TabItem value="e1001-bw" label="E1001 PB" default>

O painel é **800 × 480**. Qualquer fonte de até aproximadamente **1600 × 1200** é decodificada sem problemas em 8 MB de PSRAM. Imagens maiores ainda são aceitas, mas você vai querer `DISPLAY_FIT = FIT_CONTAIN` para que o carregador possa reduzi-las antes da quantização.

</TabItem>
<TabItem value="e1001-gray4" label="E1001 Cinza4">

Mesmo painel que o PB (**800 × 480**), mas você verá uma faixa tonal significativamente maior — uma foto de retrato ou paisagem na resolução nativa parece visivelmente mais suave do que no sketch PB.

</TabItem>
<TabItem value="e1002" label="E1002">

O painel é **800 × 480**. A paleta de 6 cores é esparsa, então uma dithering forte (FS / Jarvis) oferece a melhor qualidade percebida em conteúdo fotográfico.

</TabItem>
<TabItem value="e1003" label="E1003">

O painel é **1872 × 1404** (cerca de **2,6 milhões de pixels**, ~7,5 MB em RGB888). Uma fonte do tamanho total do painel vai saturar a PSRAM e forçar a etapa de dithering a voltar para `DITHER_NONE` — o carregador imprime um aviso quando isso acontece.

Para obter o melhor resultado, **pré-redimensione** sua fonte para ≤ 1200 × 900 no PC (ou use `DISPLAY_FIT = FIT_CONTAIN` com um `DISPLAY_SCALE` menor) e deixe o dispositivo fazer o dithering final.

</TabItem>
<TabItem value="e1004" label="E1004">

O painel é **1200 × 1600** (~1,9 milhão de pixels, ~5,5 MB em RGB888). Cabe confortavelmente em 8 MB de PSRAM, mas combinar **FS na resolução do painel** com o buffer de erro de 11 MB de que ele precisa **vai** acionar o fallback. O padrão é `DITHER_BAYER8` por segurança; mude para `DITHER_FS` somente depois de reduzir a fonte.

</TabItem>
</Tabs>

### Etapa 4 — Configure o sketch

Todas as opções ajustáveis pelo usuário ficam em um bloco de configuração no topo de cada arquivo `.ino`. Os quatro controles mais importantes são explicados abaixo.

#### `IMAGE_PATH` — qual arquivo exibir

```cpp
static const char* IMAGE_PATH = "/img/demo.jpg";
```

Use uma `/` inicial. O carregador detecta o formato pelos magic bytes, então a extensão é puramente cosmética — `/photo.bmp` contendo dados JPEG reais ainda é decodificado normalmente.

#### `DITHER_METHOD` — qual algoritmo de dithering

Os painéis de ePaper só conseguem exibir fisicamente 2 / 4 / 6 / 16 cores. Para representar os milhões de cores de uma foto típica, o carregador precisa **quantizar** cada pixel para uma dessas poucas entradas de paleta. O algoritmo de dithering decide *como* esse erro de quantização é distribuído entre os pixels vizinhos.

```cpp
static const DitherMethod DITHER_METHOD = DITHER_FS;
```

| Opção | O que faz | Quando usar |
|---|---|---|
| `DITHER_NONE` | Cor mais próxima, sem difusão. Mais rápido, mais blocado. | Diagnóstico ou quando você quer um visual posterizado. |
| `DITHER_BAYER8` | Matriz Bayer ordenada 8×8. Determinístico, **sem buffer de erro**. | A escolha mais segura no E1003 / E1004 na resolução do painel — nunca fica sem memória. |
| `DITHER_FS` | Difusão de erro Floyd-Steinberg. A melhor relação **qualidade / velocidade**. | Padrão no E1001 / E1002. Ótimo para fotos com gradientes suaves. |
| `DITHER_JARVIS` | Jarvis-Judice-Ninke. Kernel mais amplo de 12 coeficientes, saída mais suave. | Qualidade mais alta que FS, mas ~3× mais lento e usa mais PSRAM. |
| `DITHER_ATKINSON` | Atkinson (Mac clássico). Difunde apenas 6/8 do erro → contraste mais alto, visual mais "gravado". | Saída PB estilizada, conteúdo em quadrinhos / arte de linha. |

:::caution Custo de memória da difusão de erro
`DITHER_FS`, `DITHER_JARVIS` e `DITHER_ATKINSON` precisam de um **buffer de erro em ponto flutuante** de aproximadamente `W × H × N_channels × 4` bytes. Em 1872 × 1404 isso dá cerca de **31 MB para cor** ou **10 MB para escala de cinza** — bem acima da PSRAM disponível.

Quando `ps_malloc` falha, o carregador imprime

```
[dither] FS error buffer alloc FAILED (10358 kB) -- falling back to DITHER_NONE
```

e muda silenciosamente para `DITHER_NONE`. Se você não quiser esse fallback, mude para `DITHER_BAYER8` (ordenado, sem alocação) **ou** reduza a imagem antes.
:::

#### `DITHER_GAMMA` — compensação de brilho

```cpp
static const float DITHER_GAMMA = 1.0f;
```

`1.0` é neutro. Aumente para **escurecer** a saída (bom para fotos ao ar livre que ficam claras demais no ePaper). Diminua para **clarear** (bom para fotografia noturna ou capturas de tela). A faixa típica útil é **0,8 – 1,6**.

#### `DISPLAY_ANCHOR` — onde no painel a imagem é posicionada

Uma grade 3×3 de pontos de ancoragem. A imagem é posicionada de modo que seu canto / borda / centro se alinhe com a localização correspondente no painel.

```text
ANCHOR_TOP_LEFT       ANCHOR_TOP_CENTER       ANCHOR_TOP_RIGHT
ANCHOR_MIDDLE_LEFT    ANCHOR_CENTER           ANCHOR_MIDDLE_RIGHT
ANCHOR_BOTTOM_LEFT    ANCHOR_BOTTOM_CENTER    ANCHOR_BOTTOM_RIGHT
```

```cpp
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;
```

Qualquer imagem menor que o painel é **automaticamente preenchida** com branco na área não utilizada, sem necessidade de redimensionar previamente para corresponder exatamente ao painel. Imagens maiores que o painel são **recortadas** simetricamente em torno da âncora.

#### `DISPLAY_FIT` + `DISPLAY_SCALE` — dimensionando a imagem

```cpp
static const DisplayFit  DISPLAY_FIT   = FIT_ORIGINAL;
static const float       DISPLAY_SCALE = 1.0f;
```

| Modo | Comportamento |
|---|---|
| `FIT_ORIGINAL` | Mantém o tamanho decodificado como está. Padrão recomendado — previsível, sempre seguro. |
| `FIT_CONTAIN` | Reduz a imagem para que caiba **inteiramente** dentro do painel preservando a proporção. **Nunca amplia** — uma imagem pequena permanece pequena (use `FIT_SCALE` para ampliar). |
| `FIT_SCALE` | Multiplica o tamanho de origem por `DISPLAY_SCALE`. Suporta tanto redução (`< 1.0`) quanto ampliação (`> 1.0`). |

Valores típicos para `DISPLAY_SCALE`: `0.25` um quarto, `0.5` metade, `1.0` original, `2.0` 2×.

:::warning Ampliação tende a causar OOM em painéis grandes
No E1003 (1872 × 1404) e E1004 (1200 × 1600), `DISPLAY_SCALE` maior que `1.0` esgota rapidamente a PSRAM. O carregador exibirá uma mensagem de falta de memória e abortará. Em vez disso, prefira recortar ou pré-redimensionar no host.
:::

#### Profundidade de escala de cinza (apenas E1001)

O E1001 vem com **dois** sketches porque o mesmo painel UC8179 pode operar em BW (rápido, 1 bit) **ou** Gray4 (mais lento, 2 bits, quatro tons). Escolha com base no conteúdo:

| Conteúdo | Sketch recomendado |
|---|---|
| Arte de linha, códigos QR, texto, quadrinhos desenhados à mão. | `reTerminal_E1001_SDcard_BW` |
| Fotografias, ilustrações com sombreamento suave. | `reTerminal_E1001_SDcard_Gray4` |

O E1003 usa incondicionalmente escala de cinza de 16 níveis (`initGrayMode(16)`) — esse modo é o recurso característico do painel. E1002 e E1004 são de 6 cores e não expõem uma escolha de profundidade de escala de cinza.

### Etapa 5 — Compile, grave e observe os logs

1. Em **Arduino IDE → Tools**: selecione a placa **XIAO_ESP32S3**, **PSRAM = OPI PSRAM**, **Flash = 8 MB**, **Partition Scheme = Default 8 MB**.
2. Insira o cartão microSD preparado.
3. **Envie** o sketch.
4. Abra um **monitor serial na ponte USB-UART da carrier** (GPIO43 TX / GPIO44 RX, **115200 baud, 8N1**) — observe que isto é `Serial1`, **não** o USB-CDC `Serial` que o IDE abre automaticamente.

Saída típica de log (E1004 com um PNG 1080 × 1920):

```text
[reTerm_E1004] dithering Color6 with BAYER8, gamma=1.00 ...
[mem]  before image load        heap=275 kB  PSRAM free=8030/8192 kB
[png]   IHDR 1080x1920, allocating RGB888 buffer: 6075 kB
[img]   image decoded: 1080x1920  (6075 kB in PSRAM)
[mem]  after image decoded      heap=275 kB  PSRAM free=1955/8192 kB
[mem]  after dither             heap=275 kB  PSRAM free=1955/8192 kB
[reTerm_E1004] anchor=CENTER  fit=ORIGINAL  scale=1.00
[reTerm_E1004] frame pushed OK
[reTerm_E1004] done. Sleeping panel.
```

Depois disso o painel será atualizado — isso leva **15 – 45 segundos** para uma atualização completa, dependendo do modelo e do modo de cinza / cor escolhido. Fique parado e não reinicie a placa durante a atualização.

### Folha de consulta rápida do orçamento de memória

| Painel | Buffer RGB888 | Buffer de erro do FS (pico) | Confortável com FS? |
|---|---|---|---|
| E1001 BW @ 800×480 | 1,1 MB | 1,5 MB | ✅ sim |
| E1001 Gray4 @ 800×480 | 1,1 MB | 1,5 MB | ✅ sim |
| E1002 E6 @ 800×480 | 1,1 MB | 4,6 MB | ✅ sim |
| E1003 Gray16 @ 1872×1404 | 7,5 MB | 10,1 MB | ❌ não — use `DITHER_BAYER8` ou reduza a origem |
| E1004 E6 @ 1200×1600 | 5,5 MB | 22,0 MB | ❌ não — use `DITHER_BAYER8` ou reduza a origem |

O módulo OPI PSRAM de 8 MB no módulo XIAO ESP32-S3 oferece aproximadamente **7,9 MB de espaço utilizável** após a sobrecarga do runtime do Arduino. Se o carregador não conseguir satisfazer uma alocação, ele registra o tamanho exato de que precisava e ou redimensiona-e-tenta-novamente (quando `DISPLAY_FIT = FIT_CONTAIN`) ou volta para `DITHER_NONE`.

:::tip Sobre a velocidade de atualização
Após o envio, o ePaper pode permanecer em branco nos primeiros segundos enquanto o driver executa sua forma de onda inicial. Uma primeira atualização completa pode levar até alguns minutos em um painel frio — isso é a eletroquímica do painel, não um bug. Atualizações subsequentes são mais rápidas.
:::

## Solução de problemas

Para problemas de configuração do Arduino IDE, problemas de driver USB, falhas de upload ou problemas de "o display ePaper não atualiza", consulte a seção **Troubleshooting** de [Arduino Cookbook: ePaper Display](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_arduino#solução-de-problemas).

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
