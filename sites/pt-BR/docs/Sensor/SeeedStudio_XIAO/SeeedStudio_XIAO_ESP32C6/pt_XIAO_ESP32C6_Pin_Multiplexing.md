---
description: Multiplexação de pinos com o Seeed Studio XIAO ESP32C6.
title: Multiplexação de Pinos com Seeed Studio XIAO ESP32C6
keywords:
  - esp32c6
  - xiao
  - pin multiple
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg
slug: /xiao_pin_multiplexing_esp32c6
sidebar_position: 2
last_update:
  date: 04/10/2024
  author: Spencer
createdAt: '2024-04-11'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_pin_multiplexing_esp32c6/
---

# Programação Arduino com Seeed Studio XIAO ESP32C6

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

O Seeed Studio XIAO ESP32C6 é alimentado pelo altamente integrado [ESP32-C6 SoC](https://www.espressif.com/en/products/socs/esp32-c6), construído sobre **dois processadores RISC-V de 32 bits**, com um processador de alto desempenho (HP) **rodando até 160 MHz**, e um processador RISC-V de 32 bits de baixo consumo (LP), que pode operar até 20 MHz. Há **512KB de SRAM e 4 MB de Flash no chip**, permitindo mais espaço de programação e trazendo mais possibilidades para cenários de controle de IoT.

## Primeiros Passos

### Visão Geral dos Pinos

Antes de começarmos, vamos revisar todos os pinos que o XIAO ESP32C6 possui e suas funções com o seguinte esquema.

<table align="center">
 <tr>
     <th>Diagrama de indicação XIAO ESP32C6/XIAO ESP32C6</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_556525_Slxs4ARdyuXRrJK-_1711096256?w=9854&h=3367&type=image/png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>Lista de Pinos XIAO ESP32C6/XIAO ESP32C6 Sense</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_318648_dMoXitoaQiq2N3-a_1711678067?w=1486&h=1228" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

- 5V - Esta é a saída de 5 V da porta USB. Você também pode usar isto como entrada de tensão, mas deve ter algum tipo de diodo (schottky, sinal, potência) entre sua fonte de alimentação externa e este pino, com o ânodo na bateria e o cátodo no pino de 5V.
- 3V3 - Esta é a saída regulada do regulador onboard. Você pode drenar 700mA
- GND - Terra de alimentação/dados/sinal <!-- Need to be confirmed -->

## Comunicação Serial

Existem dois métodos para comunicação serial com o XIAO ESP32C6: `software serial` e `hardware serial`. Software serial é comumente usado pela flexibilidade, enquanto hardware serial oferece melhor desempenho.

### Configuração de Hardware

1. Conecte o **pino TX** do dispositivo externo ao pino RX (`D7`) do XIAO ESP32C6.
2. Conecte o **pino RX** do dispositivo externo ao pino TX (`D6`) do XIAO ESP32C6.

### Exemplos de Código

#### Software Serial

Para usar software serial, instale a biblioteca [EspSoftwareSerial](https://github.com/plerup/espsoftwareserial).

:::tip
Atualmente recomendamos a versão **7.0.0** da biblioteca EspSoftwareSerial. Outras versões podem ter vários tipos de problemas que impedem que a porta serial por software funcione corretamente.
:::

```cpp
#include <SoftwareSerial.h>

SoftwareSerial mySerial(D7, D6); // RX, TX

void setup() {
  Serial.begin(9600);
  mySerial.begin(9600);
}

void loop() {
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("Received via software serial: ");
    Serial.println(data);
  }

  if (Serial.available()) {
    char data = Serial.read();
    mySerial.print("Received via hardware serial: ");
    mySerial.println(data);
  }
}
```

Este exemplo configura o software serial nos pinos `D7 (RX)` e `D6 (TX)` a 9600 baud. Ele monitora tanto a serial de hardware (USB) quanto a porta serial por software, ecoando os dados recebidos entre elas.

#### Hardware Serial

O XIAO ESP32C6 possui uma UART de hardware (UART0) para comunicação serial, correspondente aos pinos D7/D6.

```cpp
#include <HardwareSerial.h>

HardwareSerial mySerial(0); // UART0 (Serial0)

void setup() {
  Serial.begin(9600);  // USB serial
  mySerial.begin(9600); // UART0
}

void loop() {
  if (Serial.available()) {
    char data = Serial.read();
    Serial.print("Received on USB: ");
    Serial.println(data);
  }

  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("Received on UART0: ");
    Serial.println(data);
  }
}
```

Este exemplo usa a UART0 de hardware (Serial0) para comunicação. Ele inicializa tanto a serial USB quanto a UART0, e então monitora ambas as portas em busca de dados de entrada, imprimindo as mensagens recebidas na porta serial USB.

#### Uso do Serial1

De acordo com os diagramas de pinos do XIAO ESP32C6 acima para parâmetros específicos, podemos observar que há pino TX e pino RX.
Isto é diferente da comunicação serial, mas o uso também é muito semelhante, exceto que alguns parâmetros precisam ser adicionados.
Então, a seguir, usaremos os pinos expostos pelo chip para comunicação serial.

Função principal que precisa ser incluída:

- `Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);` -- habilita o Serial1, o protótipo da função é: `<Serial.Type>.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin);`
  - `baud`  :taxa de baud
  - `config`:bit de configuração
  - `rxPin` :Pino de Recepção
  - `txPin` :Pino de Envio

Vale ressaltar que se usarmos a porta de pino digital para definir, este lugar deve ser `#define RX_PIN D7`、`#define TX_PIN D6`, por favor, consulte os diagramas de pinos das diferentes Série XIAO para parâmetros específicos.

Aqui está um programa de exemplo:

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

Depois de enviar o programa, abra o Monitor Serial na Arduino IDE e defina a taxa de baud para 115200. Então, você pode enviar o conteúdo que quiser para o XIAO ESP32C6 através do monitor serial Serial, e o XIAO irá imprimir cada byte do conteúdo que você enviar. Aqui, o conteúdo que eu digitei é "Hello Everyone", meu gráfico de resultados é o seguinte

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/114.png" style={{width:600, height:'auto'}}/></div>

## E/S Digital

O XIAO ESP32C6 possui 12 pinos GPIO que você pode configurar como entrada ou saída.

### Preparação de Hardware

1. Conecte um botão ao pino `D1`:
   - Use um resistor de pull-up externo (opcional se estiver usando o resistor de pull-up interno).
2. Conecte um LED ao pino `D10`:
   - Inclua um resistor limitador de corrente em série com o LED.

### Implementação de Software

A API de GPIO fornece funções para configurar e interagir com os pinos GPIO. Consulte a documentação da [GPIO API](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/gpio.html) para mais detalhes.

```cpp
const int buttonPin = D1; // Button pin
const int ledPin = D10; // LED pin

void setup() {
  pinMode(ledPin, OUTPUT); // Set LED pin as output
  pinMode(buttonPin, INPUT); // Set button pin as input
  // If not using an external pull-up resistor
  pinMode(buttonPin, INPUT_PULLUP); // Enable internal pull-up resistor
}

void loop() {
  int buttonState = digitalRead(buttonPin); // Read button state
  digitalWrite(ledPin, buttonState); // Write button state to LED
}
```

#### Método de Interrupção

Você também pode usar interrupções para lidar com os pressionamentos de botão de forma mais eficiente.

```cpp
// Define the pin numbers for the button and LED
const int buttonPin = D1;
const int ledPin = D10;

// Define a structure to hold button-related data
struct Button {
    const uint8_t PIN; // Pin number for the button
    uint32_t numberKeyPresses; // Counter for the number of button presses
    bool pressed; // Flag to indicate if the button is currently pressed
};

// Create an instance of the Button structure for the button
Button my_button = {buttonPin, 0, false};

// Interrupt Service Routine (ISR) to handle button presses
void ARDUINO_ISR_ATTR isr(void* arg) {
    Button* s = static_cast<Button*>(arg); // Cast the argument to a Button pointer
    s->numberKeyPresses += 1; // Increment the number of button presses
    s->pressed = true; // Set the pressed flag
}

void setup() {
    Serial.begin(115200);
    pinMode(my_button.PIN, INPUT_PULLUP); // Set the button pin as input with internal pull-up resistor
    attachInterruptArg(my_button.PIN, isr, &my_button, FALLING); // Attach the ISR to the button pin, triggered on falling edge
}

void loop() {
    if (my_button.pressed) { // Check if the button is pressed
        Serial.printf("Button 1 has been pressed %lu times\n", my_button.numberKeyPresses); // Print the number of button presses
        my_button.pressed = false; // Reset the pressed flag
    }

    static uint32_t lastMillis = 0; // Variable to store the last time the interrupt was detached
    if (millis() - lastMillis > 10000) { // Check if 10 seconds have elapsed
        lastMillis = millis(); // Update the last detach time
        detachInterrupt(my_button.PIN); // Detach the interrupt from the button pin
    }
}
```

Neste exemplo, usamos uma estrutura `Button` para armazenar os dados relacionados ao botão, incluindo o número do pino, o número de pressionamentos de tecla e um sinalizador para indicar se o botão está atualmente pressionado.

A função `isr` é uma Rotina de Serviço de Interrupção (ISR) que lida com os pressionamentos de botão. Ela incrementa o número de pressionamentos e define o sinalizador de pressionado como verdadeiro.

Na função `setup`, inicializamos a comunicação serial, configuramos o pino do botão como entrada com resistor de pull-up interno e associamos a função `isr` ao pino do botão como um manipulador de interrupção acionado na borda de descida (pressionamento do botão).

Na função `loop`, verificamos se o botão está pressionado. Se estiver, imprimimos o número de pressões do botão no monitor serial e redefinimos a flag de pressionado. Além disso, incluímos uma seção que desconecta a interrupção do pino do botão a cada 10 segundos, presumivelmente para permitir outras operações ou evitar interrupções indesejadas.

Certo, entendido. Aqui está a versão reescrita e mais compreensível:

## ADC - Conversor Analógico‑Digital

O XIAO ESP32C6 possui vários pinos de entrada analógica que permitem ler tensões analógicas.

Consulte a documentação da [API ADC](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/adc.html) para mais detalhes.

### Configuração de Hardware

1. Conecte um potenciômetro ao pino A0, com uma extremidade conectada a 3,3 V e a outra ao GND.

### Implementação de Software

Aqui está um sketch Arduino que lê um valor analógico:

```cpp
const int analogPin = A0; 

void setup() {
  // Initialize serial communication at 115200 bits per second
  Serial.begin(115200);

  // Set the resolution to 12 bits (0-4095)
  analogReadResolution(12);
}

void loop() {
  // Read the analog value and millivolts for the analogPin
  int analogValue = analogRead(analogPin);
  int analogVolts = analogReadMilliVolts(analogPin);

  // Print the values to the Serial Monitor
  Serial.printf("ADC analog value = %d\n", analogValue);
  Serial.printf("ADC millivolts value = %d\n", analogVolts);

  delay(100); // Delay for clear reading from serial
}
```

Este código lê o valor analógico do pino especificado e o imprime, juntamente com o valor em milivolts, no Serial Monitor.

## Sinal PWM / Controle de LED

O XIAO ESP32-C6 possui 6 canais LEDC que podem gerar formas de onda independentes, que podem ser usados, por exemplo, para acionar dispositivos de LED RGB.

Consulte a documentação da [API LEDC](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/ledc.html) para mais detalhes.

### Configuração de Hardware

1. Conecte um LED ao pino `D2` com um resistor limitador de corrente em série.

### Implementação de Software

Aqui estão sketches Arduino que demonstram a saída PWM:

#### PWM Geral

```cpp
const int ledPin = D2;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  for (int dutyCycle = 0; dutyCycle <= 255; dutyCycle++) {
    analogWrite(ledPin, dutyCycle);
    delay(10);
  }
}
```

Este código aumenta gradualmente o brilho do LED usando PWM.

#### Controle de LED

```cpp
/*
 LEDC Software Fade

 This example shows how to software fade an LED
 using the ledcWrite function.

 Code adapted from the original Arduino Fade example:
 https://www.arduino.cc/en/Tutorial/Fade

 This example code is in the public domain.
 */

// Use 12-bit precision for the LEDC timer
#define LEDC_TIMER_12_BIT  12

// Use 5000 Hz as the LEDC base frequency
#define LEDC_BASE_FREQ     5000

// Fade LED PIN (replace with LED_BUILTIN constant for the built-in LED)
#define LED_PIN            D5

int brightness = 0;    // How bright the LED is
int fadeAmount = 5;    // How many points to fade the LED by

// Arduino-like analogWrite
// Value has to be between 0 and valueMax
void ledcAnalogWrite(uint8_t pin, uint32_t value, uint32_t valueMax = 255) {
  // Calculate duty, 4095 from 2 ^ 12 - 1
  uint32_t duty = (4095 / valueMax) * min(value, valueMax);

  // Write duty to LEDC
  ledcWrite(pin, duty);
}

void setup() {
  // Setup timer and attach timer to the LED pin
  ledcAttach(LED_PIN, LEDC_BASE_FREQ, LEDC_TIMER_12_BIT);
}

void loop() {
  // Set the brightness on the LEDC channel
  ledcAnalogWrite(LED_PIN, brightness);

  // Change the brightness for the next loop iteration
  brightness = brightness + fadeAmount;

  // Reverse the direction of the fading at the ends of the fade
  if (brightness <= 0 || brightness >= 255) {
    fadeAmount = -fadeAmount;
  }
  // Wait for 30 milliseconds to see the dimming effect
  delay(30);
}
```

Este código demonstra como fazer o fade de um LED usando a função ledcWrite. O brilho do LED aumenta e diminui gradualmente em um loop contínuo.

## I2C

O XIAO ESP32C6 possui uma interface I2C por hardware para comunicação com dispositivos I2C.

Consulte a documentação da [API I2C](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/i2c.html) para mais detalhes.

### Preparação de Hardware

1. Conecte o pino SDA do dispositivo I2C ao pino SDA (`D4`) do XIAO.
2. Conecte o pino SCL do dispositivo I2C ao pino SCL (`D5`) do XIAO.

### Implementação de Software

#### Modo Mestre

Aqui está um sketch Arduino que demonstra a leitura de um sensor I2C:

```cpp
#include <Wire.h>

const int sensorAddress = 0x40;

void setup() {
  Wire.begin();
  Serial.begin(115200);
}

void loop() {
  Wire.beginTransmission(sensorAddress);
  Wire.write(0x01);  // Register address
  Wire.endTransmission();

  Wire.requestFrom(sensorAddress, 2);
  if (Wire.available() >= 2) {
    int data = Wire.read() << 8 | Wire.read();
    Serial.println(data);
  }

  delay(100);
}
```

Este código lê um valor de 16 bits do registrador `0x01` de um sensor I2C.

#### Modo Escravo

Aqui está um sketch Arduino que demonstra o uso do XIAO ESP32C6 como um *dispositivo escravo* I2C:

```cpp
#include "Wire.h"

#define I2C_DEV_ADDR 0x55

uint32_t i = 0;

void onRequest() {
  Wire.print(i++);
  Wire.print(" Packets.");
  Serial.println("onRequest");
}

void onReceive(int len) {
  Serial.printf("onReceive[%d]: ", len);
  while (Wire.available()) {
    Serial.write(Wire.read());
  }
  Serial.println();
}

void setup() {
  Serial.begin(115200);
  Serial.setDebugOutput(true);
  Wire.onReceive(onReceive);
  Wire.onRequest(onRequest);
  Wire.begin((uint8_t)I2C_DEV_ADDR);

#if CONFIG_IDF_TARGET_ESP32
  char message[64];
  snprintf(message, 64, "%lu Packets.", i++);
  Wire.slaveWrite((uint8_t *)message, strlen(message));
#endif
}

void loop() {
  // Slave device code here
}
```

Neste exemplo de modo escravo, o XIAO ESP32C6 é configurado como um dispositivo escravo I2C com endereço `0x55`. A função de callback `onReceive` é chamada quando o escravo recebe dados do mestre, e a função de callback `onRequest` é chamada quando o mestre solicita dados do escravo.

## SPI

A placa microcontroladora XIAO ESP32C6 possui uma interface SPI integrada, facilitando a troca rápida de dados com outros dispositivos compatíveis com SPI. Isso é particularmente útil em projetos que exigem comunicação rápida entre vários dispositivos.

- Para especificações técnicas detalhadas, consulte o [Datasheet do XIAO ESP32C6](https://www.espressif.com/sites/default/files/documentation/esp32-c6_datasheet_en.pdf).
- Saiba mais sobre como usar a interface SPI com o XIAO ESP32C6 consultando a [Documentação da API SPI](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/spi.html#).

### Preparação de Hardware

Para conectar seu XIAO ESP32C6 a outro dispositivo SPI, siga estas etapas:

1. **MOSI (Master Out Slave In):** Conecte o pino `MOSI` do dispositivo SPI ao pino `D10` no XIAO.
2. **MISO (Master In Slave Out):** Conecte o pino `MISO` do dispositivo SPI ao pino `D9` no XIAO.
3. **SCK (Serial Clock):** Conecte o pino `SCK` do dispositivo SPI ao pino `D8` no XIAO.
4. **CS (Chip Select):** Conecte o pino `CS` do dispositivo SPI a um pino digital (por exemplo, `D3`) no XIAO.

```
MOSI -> D10
MISO -> D9
SCK -> D8
CS -> D3 (as an example)
```

### Implementação de Software

Abaixo está um sketch Arduino simplificado que demonstra a comunicação SPI básica com um dispositivo SPI usando o XIAO ESP32C6. Este sketch envia um comando para o dispositivo SPI e lê a resposta (lê dados de volta de um dispositivo SPI).

```cpp
#include <SPI.h>

const int csPin = 3;  // Use pin D3 for Chip Select (CS)

void setup() {
  // Initialize SPI communication
  SPI.begin();            
  // Set the CS pin as an output
  pinMode(csPin, OUTPUT); 
  // Set the CS pin high to indicate no active communication
  digitalWrite(csPin, HIGH);
}

void loop() {
  // Start communication with the device
  digitalWrite(csPin, LOW);
  SPI.transfer(0x01);  // Send a command to the device
  int data = SPI.transfer(0);  // Read the response
  digitalWrite(csPin, HIGH);  // End communication

  // Print the received data
  Serial.println(data);       
  delay(100);  // Wait for a short period
}
```

:::note
Certifique-se de que as atribuições de pinos no seu sketch correspondam às conexões físicas na sua configuração de hardware. O exemplo acima usa números de pinos predefinidos com base no arquivo `pin_arduino.h` para o XIAO ESP32-C6, com uma definição adicional para o pino CS.
:::

## Recursos

- [Documentação do XIAO ESP32C6](https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_getting_started/)
- [Datasheet do ESP32-C6](https://www.espressif.com/sites/default/files/documentation/esp32-c6_datasheet_en.pdf)
- [Referência Arduino](https://www.arduino.cc/reference/en/)
- [Referência Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/index.html)
