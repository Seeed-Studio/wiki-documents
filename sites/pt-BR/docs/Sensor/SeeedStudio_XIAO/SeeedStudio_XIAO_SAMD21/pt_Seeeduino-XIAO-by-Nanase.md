---
description: Seeed Studio XIAO SAMD21 com Nanase
title: Nanase
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino-XIAO-by-Nanase
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO-by-Nanase/
---


# Primeiros Passos com Seeed Studio XIAO SAMD21 por Nanase

Este é um documento escrito por  [@nanase_coder](https://twitter.com/nanase_coder). (Traduzido pela Seeed a partir do documento original em japonês: [コインサイズ Arduino互換機 Seeed Studio XIAO SAMD21 を使ってみた](https://qiita.com/nanase/items/0fed598975c49b1d707e#spi-microsd%E3%82%AB%E3%83%BC%E3%83%89)). Obrigado, Nanase, por compartilhar isso conosco!

## Documentações

Existem duas documentações sobre o uso do **Seeeduino XIAO** que se concentram em áreas diferentes; consulte a tabela abaixo como referência:

|[**Documentação da Seeed**](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/)|[**Documentação da Nanase**](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|Diagrama de pinagem|Interface|
|Seeed Studio XIAO SAMD21 Primeiros Passos|Seeed Studio XIAO SAMD21 com Cartão MicroSD (SPI)|
|Uso de GPIO do Seeed Studio XIAO SAMD21|Seeed Studio XIAO SAMD21 com GPS (UART)|
|Recursos do Seeed Studio XIAO SAMD21|IOBUS de Ciclo Único|

## Recursos

- CPU ARM Cortex M0 + (SAMD21G18) 48MHz
- 256 KB de Flash, 32 KB de SRAM
- USB Type-C
- SPI, I2C, UART, DMA disponíveis
- tamanho de moeda (21mm x 17.8mm)
- Nível lógico: 3,3V

Não há componentes no lado de trás da placa, e todos os pinos possuem furos metalizados em meia-lua (castellated), o que torna fácil soldá-la em outra placa.

### Lista de peças

- 1 x Seeeduino XIAO
- 2 x header de 7 pinos
- 4 x pastilhas adesivas

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F65443a20-c82c-09b8-10e9-6b067e055cb3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=6dd2a53df162d5676a9f8436b91bb7a2) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F65443a20-c82c-09b8-10e9-6b067e055cb3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=6dd2a53df162d5676a9f8436b91bb7a2" alt="pir" width={600} height="auto" /></p>

Furos metalizados em meia-lua (castellated holes):

<!-- ![image](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Castellated-holes-of-xiao-jp.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Castellated-holes-of-xiao-jp.jpg" alt="pir" width={600} height="auto" /></p>

## Especificação

|  | Especificação |
| --- | --- |
| CPU | CPU ARM Cortex-M0+ (SAMD21G18) rodando a até 48MHz (multiplicado a partir de 32.768 kHz) |
| Armazenamento | 256KB Flash, 32KB SRAM |
| Pinos de I/O | 14 pinos GPIO, 11 pinos analógicos, 11 pinos digitais, 1 pino de saída DAC |
|Função dos pinos  |SPI, I2C, UART, PWM, interrupção externa, SWD (Power Pad)  |
| Nível lógico | 3,3V |
| LEDs: |1 LED de usuário, 1 LED de alimentação, dois LEDs para download pela porta serial   |
| Alimentação | Interface USB Type-C, pads de alimentação na parte de trás|
| Tamanho | 21x17.8x3.5mm |

Como você pode ver, é um Arduino do tipo SAMD e é semelhante à série Arduino MKR, portanto, tecnicamente, qualquer biblioteca escrita para eles pode ser usada no Seeed Studio XIAO SAMD21. Por outro lado, como é diferente do Arduino do tipo ATmega, como o Arduino Uno, a biblioteca que depende de algum registrador específico do ATmega não pode ser usada.

Os 14 pinos GPIO referem-se aos 11 pinos laterais, ao pino de reset e ao SWD (SWDIO, SWCLK) na parte de trás.

O UART na função de pino é diferente da serial via USB e pode ser operado por `Serial1`.

## Redefinir sua Placa

Confira [aqui](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/#software) e aprenda como adicionar o Seeed Studio XIAO SAMD21 ao seu Arduino IDE.

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fd8ff0409-7841-0a07-f9aa-ee49fef757b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=c44f4d6b316014dd3a10476ad49311fd) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fd8ff0409-7841-0a07-f9aa-ee49fef757b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=c44f4d6b316014dd3a10476ad49311fd" alt="pir" width={600} height="auto" /></p>

O Seeed Studio XIAO SAMD21 não possui um botão de reset. Em vez disso, há um pad de reset.
Faça uma conexão rápida entre esse pad de reset e o GND para redefinir sua placa.

## Modo Bootloader

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a0107ab-2584-1251-c3c3-184ef2a216ee.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=f688d27c6a82bc7e51932b4504ebd9e1) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a0107ab-2584-1251-c3c3-184ef2a216ee.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=f688d27c6a82bc7e51932b4504ebd9e1" alt="pir" width={600} height="auto" /></p>

Às vezes o programa pode travar ou não ser possível fazer o upload do sketch. Você pode redefinir a placa duas vezes e entrar no modo Bootloader. Nesse modo, os LEDs piscam lentamente e o Seeed Studio XIAO SAMD21 é reconhecido como um dispositivo de memória USB. A porta serial é separada do modo normal e fica sempre em modo de gravação de sketch, sem executar o programa anterior na placa.

Para voltar do modo bootloader para o modo normal, faça o upload de um sketch ou redefina novamente rapidamente duas vezes.

Se você entrar no modo bootloader quando o Seeed Studio XIAO SAMD21 não for reconhecido como um dispositivo USB pelo PC, o LED piscará rapidamente.

## LCD

Assim como no Arduino original, selecione Basics > Blink a partir do sketch de exemplo e faça o upload.

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
```

Ao contrário do Arduino original, ele é ligado em LOW e desligado em HIGH.

### Dois LEDs internos piscáveis

O site oficial descreve dois outros LEDs internos como `two LEDs for serial port downloading`. No entanto, observando o esquemático, não há pino físico conectado a esses LEDs RX e TX.

Se você olhar [USBCore.cpp](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/1.7.2/cores/arduino/USB/USBCore.cpp#L622-L627) aqui, poderá ver que eles são ligados por `digitalWrite` toda vez que ocorre transmissão/recepção pela serial USB, o que significa que os dois LEDs são programáveis.

```cpp
uint32_t USBDeviceClass::recv(uint32_t ep, void *_data, uint32_t len)
{
    if (!_usbConfiguration)
        return -1;

#ifdef PIN_LED_RXL
    if (rxLEDPulse == 0)
        digitalWrite(PIN_LED_RXL, LOW);

    rxLEDPulse = TX_RX_LED_PULSE_MS;
#endif
```

Os números específicos dos pinos são definidos em `variant.h / variant.cpp`, como no Arduino SAMD, e, no caso do Seeeduino XIAO, eles são atribuídos a 11 e 12, conforme abaixo.

```cpp
#define PIN_LED_13  (13u)
#define PIN_LED     PIN_LED_13
#define LED_BUILTIN PIN_LED

#define PIN_LED_RXL          (12u)
#define PIN_LED_TXL          (11u)
#define PIN_LED2             PIN_LED_RXL
#define PIN_LED3             PIN_LED_TXL
```

Abaixo está um sketch que pisca três LEDs. Os LEDs de RX e TX são azuis.

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(PIN_LED2, OUTPUT);
  pinMode(PIN_LED3, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  digitalWrite(PIN_LED2, HIGH);
  digitalWrite(PIN_LED3, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  digitalWrite(PIN_LED2, LOW);
  digitalWrite(PIN_LED3, LOW);
  delay(1000);
}
```

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F94756423-5b1b-e4af-1dac-5fe238689b0a.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=8e0d97933fbf6fbb4ccfe6cd66c1adf0) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F94756423-5b1b-e4af-1dac-5fe238689b0a.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=8e0d97933fbf6fbb4ccfe6cd66c1adf0" alt="pir" width={600} height="auto" /></p>

## Interface

### Serial via USB CDC

Ao contrário do Arduino do tipo ATmega, o estado real da comunicação serial do Seeed Studio XIAO SAMD21 é USB CDC. Em outras palavras, ele pode operar mais rápido do que a comunicação serial normal.

Portanto, especificar o baud rate com `Serial.begin (speed)` não faz sentido, mas, exceto por isso, ele pode ser usado como uma serial normal.

### Medindo a Velocidade

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fc18063f3-999d-6d2a-a5ad-01a137309f9a.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26eda0dc6f1070e2085a15821ec6b4b9) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fc18063f3-999d-6d2a-a5ad-01a137309f9a.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26eda0dc6f1070e2085a15821ec6b4b9" alt="pir" width={600} height="auto" /></p>

Usei [este sketch](https://gist.github.com/nanase/6cc57e14a572196baefd893ade67d32e) para medir a velocidade de transferência do Seeed Studio XIAO SAMD21 para o PC, e a taxa de transferência do PC para o Seeed Studio XIAO SAMD21 deve ser a mesma.

O eixo horizontal é o tamanho do buffer (envio de uma vez usando `Serial.write (buf, len)`).
Se você enviar 1 byte de cada vez, obterá apenas 0,11 Mbps (14,53 KB/s), mas se enviar 64 bytes, será significativamente mais rápido, a 6,30 Mbps (805,86 KB/s). Pode-se inferir que o tamanho do buffer interno é de 64 bytes.

Como mencionado acima, o LED pisca na comunicação serial, mas quase não houve redução de velocidade devido a isso.

### SPI (Cartão MicroSD)

O Seeed Studio XIAO SAMD21 tem nível lógico de 3,3V. Em outras palavras, o cartão microSD pode ser manuseado via SPI sem um conversor de nível.
Algumas funções de SPI são diferentes das do Arduino do tipo ATmega; consulte [aqui](https://qiita.com/nanase/items/406a8a848d1b259d3af4) para mais informações.

Aqui vamos ler o cartão microSD usando o [kit DIP de slot para cartão micro SD](http://akizukidenshi.com/catalog/g/gK-05488/) da Akizuki Denshi.

Aqui usamos o código de exemplo do Arduino, mas o parâmetro de `SD.begin (cs_pin)` é especificado como `SS`. De acordo com variant.h, SS = 4, que é o mesmo que os pinos D4 / A4 / SDA. Claro, você pode especificar outros pinos.

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fba2f4257-e0ca-a525-4afd-793296235f7b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=122cf093757e673a26309a4c54602956) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fba2f4257-e0ca-a525-4afd-793296235f7b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=122cf093757e673a26309a4c54602956" alt="pir" width={600} height="auto" /></p>

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fb10e707a-949d-e937-95c3-8c5b3d7f56bc.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1d1117fd8be3286bdd235671098973dd) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fb10e707a-949d-e937-95c3-8c5b3d7f56bc.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1d1117fd8be3286bdd235671098973dd" alt="pir" width={600} height="auto" /></p>

```cpp
#include <SPI.h>
#include <SD.h>

File myFile;

void setup() {
  Serial.begin(9600);
  while (!Serial) ;

  Serial.print("Initializing SD card... ");

  if (!SD.begin(SS)) { // <-------------------------------- SS = D4/A4/SDA pin
    Serial.println("initialization failed!");
    while (1) ;
  }
  Serial.println("initialization done.");

  myFile = SD.open("test.txt", FILE_WRITE);

  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3.");

    myFile.close();
    Serial.println("done.");
  }
  else
    Serial.println("error opening test.txt");

  myFile = SD.open("test.txt");
  if (myFile) {
    Serial.println("test.txt:");

    while (myFile.available())
      Serial.write(myFile.read());

    myFile.close();
  }
  else
    Serial.println("error opening test.txt");
}

void loop() { }
```

Resultado:

```
Initializing SD card...initialization done.
Writing to test.txt...done.
test.txt:
testing 1, 2, 3.
```

### I2C

I2C também está disponível. Dispositivos de 3,3 V podem ser conectados diretamente sem um conversor de nível.

Desta vez, usamos o BME280 para medir temperatura, umidade e pressão atmosférica. O BME280 opera em 3,3 V, portanto pode ser conectado sem um conversor de nível. Verifique [aqui](https://qiita.com/nanase/items/f34e03c29410add9c4d0) para obter instruções detalhadas da conexão entre Arduino e BME280.

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F19f35ca3-f9a6-33d6-124b-a37cf9d1344c.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1f51b8fa4b19fbe4df4707da8ef9ec58) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F19f35ca3-f9a6-33d6-124b-a37cf9d1344c.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1f51b8fa4b19fbe4df4707da8ef9ec58" alt="pir" width={600} height="auto" /></p>

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9fc6d103-1dce-e367-7ef4-ba1be6ee50b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26e6b8e99374c545265758ea41ba218c) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9fc6d103-1dce-e367-7ef4-ba1be6ee50b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26e6b8e99374c545265758ea41ba218c" alt="pir" width={600} height="auto" /></p>

```cpp
#include <Wire.h>
#include "SparkFunBME280.h"

BME280 sensor;

void setup() {
  Serial.begin(9600);
  Wire.begin();
  sensor.beginI2C(); // Wire を用いて I2C 接続開始
}

void loop() {
  Serial.print("Temp: ");
  Serial.print(sensor.readTempC(), 2);

  Serial.print(" °C, Humidity: ");
  Serial.print(sensor.readFloatHumidity(), 2);

  Serial.print(" %, Pressure: ");
  Serial.print(sensor.readFloatPressure() / 100.0, 1);
  Serial.println(" hPa");

  delay(5000);
}
```

Resultado:

```
Temp: 22.05 °C, Humidity: 44.99 %, Pressure: 1009.0 hPa
Temp: 22.05 °C, Humidity: 44.72 %, Pressure: 1008.9 hPa
Temp: 22.06 °C, Humidity: 44.81 %, Pressure: 1008.9 hPa
```

### UART

Conforme mencionado anteriormente, os pinos físicos de UART são diferentes daqueles no USB CDC. `Serial1` é usado para comunicação serial utilizando os pinos TX e RX.

Desta vez, conectamos o Seeed Studio XIAO SAMD21 ao kit receptor de GPS e obtemos informações NMEA a partir do PC. É um trabalho muito simples ao usar o Xiao, que é apenas uma ponte entre o kit de GPS e a serial do PC.

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Ff304a688-f887-a7f4-5cd1-17be3f39815b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=74e3abdb6a325a7076b4260b14ac0ef8) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Ff304a688-f887-a7f4-5cd1-17be3f39815b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=74e3abdb6a325a7076b4260b14ac0ef8" alt="pir" width={600} height="auto" /></p>

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F6fbef634-ae29-3a9b-1760-d3419524df31.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=3fea2b970a346d758a31bf8a4ff77c3a) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F6fbef634-ae29-3a9b-1760-d3419524df31.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=3fea2b970a346d758a31bf8a4ff77c3a" alt="pir" width={600} height="auto" /></p>

```cpp
void setup() {
  Serial.begin(9600);
  Serial1.begin(9600);
}

void loop() {
  if (Serial.available()) {
    char c = (char)Serial.read();
    Serial1.write(c);
  }

  if (Serial1.available()) {
    char c = (char)Serial1.read();
    Serial.write(c);
  }
}
```

Desta vez usamos o GPSFox para visualizar as informações NMEA. As coordenadas podem ser medidas facilmente.

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F76361d26-4036-aea5-bcdd-d38f30cf16e3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=e346fb482f4d33f4b368c9b812a94308) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F76361d26-4036-aea5-bcdd-d38f30cf16e3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=e346fb482f4d33f4b368c9b812a94308" alt="pir" width={600} height="auto" /></p>

## Outros

### DMA

Como um dos recursos do Arduino do tipo SAMD, você pode usar DMA no Xiao. Verifique [aqui](https://qiita.com/nanase/items/406a8a848d1b259d3af4#dma) para mais informações sobre DMA.

### Single Cycle IOBUS

O Cortex M0+ possui uma função chamada [Single Cycle IOBUS](https://microchipdeveloper.com/32arm:samd21-iobus-overview) que pode operar a saída GPIO em um ciclo de clock. Escrever em um registro específico pode inverter a lógica, desabilitar o pino ou alterar a corrente de acionamento do pino.

### DigitalWrite

Você pode usar digitalWrite para criar um pulso, que é um método que funciona com qualquer placa Arduino - apenas repetindo a sobrecarga.

```cpp
void setup() {
  pinMode(PIN_A7, OUTPUT);
}

#define P                     \
  digitalWrite(PIN_A7, HIGH); \
  digitalWrite(PIN_A7, LOW);

#define W P P P P P P P P P P P P P P P P
void loop() { W W W W W W W W W W W W W W W W }
```

### Usar Registradores

Você também pode criar um pulso operando diretamente o registrador sem usar `digitalWrite`.

```cpp
void setup() {
  pinMode(PIN_A7, OUTPUT);
}

#define P                                                             \
  digitalPinToPort(PIN_A7)->OUTSET.reg = digitalPinToBitMask(PIN_A7); \
  digitalPinToPort(PIN_A7)->OUTCLR.reg = digitalPinToBitMask(PIN_A7);

#define W P P P P P P P P P P P P P P P P
void loop() { W W W W W W W W W W W W W W W W }
```

### Usar Single Cycle IOBUS

Usamos `IOBUS.h` apresentado [aqui](https://lab.sasapea.mydns.jp/2020/03/16/seeeduino-xiao/).

```cpp
#include "IOBUS.h"

#define digitalPinToIOPin(P) ((g_APinDescription[P].ulPort << 5) + g_APinDescription[P].ulPin)
#define PIN_NUM digitalPinToIOPin(PIN_A7)

void setup() {
  IOBUS::pinMode(PIN_NUM, OUTPUT, true);
}

#define P IOBUS::toggleOutput(PIN_NUM);

#define W P P P P P P P P P P P P P P P P
void loop() { W W W W W W W W W W W W W W W W }
```

|  | DigitalWrite | Registradores | Single Cycle IOBUS |
| --- | --- | --- | --- |
| Waveform |<p><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a269f4e-5bd0-8eb4-127e-14b8d239a6a3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=7099c88e5d117efd215ba24fefa7448b" alt="pir" width={600} height="auto" /></p> |<p><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F84a04db3-c854-8862-d253-6ff8fc94aa8f.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=d20b7a169be510b3f73e0bea1c97f2bf" alt="pir" width={600} height="auto" /></p>|<p><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F4358d74f-285c-6d16-1cc3-809946c42125.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=d2e46ad06befc79f8b897fc538f1de89" alt="pir" width={600} height="auto" /></p> |
| frequência | 333 kHz | 6 MHz | 24 MHz |
| Número de ciclos de clock necessários para criar um pulso | 144 | 8 | 2 |

A lógica pode certamente ser invertida em um ciclo (48 MHz).

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
