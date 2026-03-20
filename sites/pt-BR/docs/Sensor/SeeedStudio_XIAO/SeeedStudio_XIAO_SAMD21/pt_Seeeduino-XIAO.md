---
description: Primeiros passos com o Seeed Studio XIAO SAMD21
title: Primeiros passos com o Seeed Studio XIAO SAMD21
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino-XIAO
sku: 110010004, 102010388, 102010328
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/
---

# Primeiros passos com o Seeed Studio XIAO SAMD21

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" alt="pir" width={600} height="auto" /></p>

O Seeed Studio XIAO SAMD21, que costumava ser chamado de Seeeduino XIAO, é a primeira estreia da [família Seeed Studio XIAO, uma série de poderosas placas de desenvolvimento do tamanho de um polegar compatíveis com Arduino](https://www.seeedstudio.com/xiao-series-page). Ele carrega o poderoso ATSAMD21G18A-MU, que é um microcontrolador de baixo consumo. Por outro lado, esta pequena placa tem bom desempenho de processamento, mas precisa de menos energia. Ela é projetada em um tamanho minúsculo e pode ser usada para dispositivos vestíveis e projetos pequenos.

O Seeed Studio XIAO SAMD21 possui 14 PINs, que podem ser usados para 11 interfaces digitais, 11 interfaces analógicas, 10 interfaces PWM (d1-d10), 1 pino de saída DAC D0, 1 interface de pad SWD, 1 interface I2C, 1 interface SPI, 1 interface UART, indicador de comunicação serial (T/R), luz de piscar (L) por meio de multiplexação de pinos. As cores dos LEDs (Power, L, RX, TX) são verde, amarelo, azul e azul. Além disso, o Seeed Studio XIAO SAMD21 possui uma interface Type-C que pode fornecer energia e carregar código. Existem dois botões de reset, você pode conectá-los em curto para reiniciar a placa.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## **Documentações**

Existem dois documentos sobre o uso do **Seeed Studio XIAO SAMD21** que se concentram em áreas diferentes, consulte a tabela abaixo como referência:

|[**Documentação da Seeed**](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/)|[**Documentação da Nanase**](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|Diagrama de pinos|Interface|
|Introdução ao Seeed Studio XIAO SAMD21|Seeed Studio XIAO SAMD21 com MicroSD Card(SPI)|
|Uso de GPIO no Seeed Studio XIAO SAMD21|Seeed Studio XIAO SAMD21 com GPS(UART)|
|Recursos do Seeed Studio XIAO SAMD21|IOBUS de ciclo único|

### **CircuitPython no Seeed Studio XIAO SAMD21**

- Comece com [**CircuitPython no Seeed Studio XIAO SAMD21 **](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO-CircuitPython).

## **Recursos**

- CPU poderosa: microcontrolador ARM® Cortex®-M0+ 32 bits 48MHz (SAMD21G18) com 256KB Flash, 32KB SRAM.
- Compatibilidade flexível: Compatível com Arduino IDE.
- Operação fácil de projeto: Compatível com protoboard.
- Tamanho pequeno: Tão pequeno quanto um polegar (21x17.8mm) para dispositivos vestíveis e projetos pequenos.
- Múltiplas interfaces de desenvolvimento: 11 pinos digitais/analógicos, 10 pinos PWM, 1 saída DAC, 1 interface de pad SWD, 1 interface I2C, 1 interface UART, 1 interface SPI.

## **Especificações**

| Nome do Produto | Seeed Studio XIAO SAMD21 |
|-------------|-------------------------|
| **Chipset** | [Microchip SAMD21G18](https://www.microchip.com/en-us/product/atsamd21g18 ) |
| **Processador** | Processador ARM Cortex-M0+ rodando a até 48 MHz |
| **RAM** | 32KB SRAM |
| **Flash** | 256KB Flash |
| **Interface** | Pino GPIO x14<br/>Pino Digital x11<br/>Pino Analógico x11<br/>DAC x1<br/>I2C x1<br/>UART x1<br/>SPI x1 |
| **Onboard** | LED de usuário x1<br/>LED de energia x1<br/>LEDs de status para comunicação serial (Indicadores TX/RX) x2 |
| **Conectividade sem fio** | / |
| **Alimentação** | Tensão de entrada (Type-C): 5V<br/>Tensão de entrada (BAT): 5V |
| **Saída máxima** | 5V@500mA<br/>3.3V@200mA |
| **Compatibilidade de software** | Arduino, PlatformIO, MicroPython, CircuitPython, Zephyr<br/>[Exibição da Série XIAO - Seeed Studio Wiki](https://wiki.seeedstudio.com/pt-br/xiao_topic_page/ ) |
| **Temperatura de trabalho** | -40 a 85°C |
| **Dimensões** | 21×17.8mm |
| **Variantes** | [Seeed Studio XIAO SAMD21 (Pré-soldado) - Seeed Studio](https://www.seeedstudio.com/Seeeduino-XIAO-Pre-Soldered-p-4747.html  )<br/>[Seeed Studio XIAO SAMD21 - Arduino Microcontroller - SAMD21 Cortex M0+ (3 PCs） - Seeed Studio](https://www.seeedstudio.com/Seeeduino-XIAO-3Pcs-p-4546.html  ) |

## **Visão geral de hardware**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https:///files.seeedstudio.com/wiki/Seeeduino-XIAO/img/new1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino%20XIAO%20pinout%202.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/regulator_to_3.3v.png" alt="pir" width={600} height="auto" /></p>

:::caution
Para pinos gerais de I/O:
A tensão de trabalho do MCU é 3.3V. A tensão de entrada conectada aos pinos gerais de I/O pode causar danos ao chip se for maior que 3.3V.

Para pinos de alimentação:
O circuito conversor DC-DC integrado capaz de transformar a tensão de 5V em 3.3V permite alimentar o dispositivo com uma fonte de 5V via VIN-PIN e 5V-PIN.

É fundamental entender que os pads VIN e GND na parte de trás do XIAO SAMD21 não foram projetados para conectar diretamente uma bateria, especialmente uma bateria recarregável de lítio (LiPo/Li-Ion). A placa não possui o circuito essencial de gerenciamento de bateria necessário para uma operação segura. Esses pads são simplesmente um ponto alternativo de entrada de energia que ignora o diodo de proteção integrado da placa. Se você desejar alimentar seu projeto com uma bateria, deve usar um módulo externo dedicado de gerenciamento de bateria que forneça carga e proteção e, em seguida, conectar a saída regulada desse módulo ao pino de 5V ou 3V3 do XIAO.

Por favor, preste atenção ao usar, não levante a tampa de blindagem.
:::

## **Mapa de pinos**
| Pino XIAO        | Função      | Pino do Chip  |   Descrição      |
| :-------:      | :-----:        | :----------:         |       :---:     |
|5V              |VBUS             |                                      | Entrada/Saída de energia     |
| GND           |                 |                                      |                          |
| 3V3           |   3V3_OUT              |                                |    Saída de energia           |
|D0             |  Analógico         |   PA02                                |     GPIO, ADC            |
| D1            |   Analógico        |   PA04                                |        GPIO, ADC         |
| D2            |     Analógico      | PA10                                  |    GPIO, ADC             |
| D3            |    Analógico       |  PA11                                 |     GPIO, ADC            |
| D4            |  Analógico,SDA   	| PA08		                              | GPIO, Dados I2C, ADC        |
| D5            |  Analógico,SCL     |	PA09	                                |	GPIO, Clock I2C, ADC       |
| D6            | Analógico,TX       |  	PB08	                               |	GPIO, Transmissão UART, ADC |  
| D7            |Analógico,RX	      |  PB09	                                |   	GPIO, Recepção UART, ADC |
|D8             | Analógico,SPI_SCK  | 	PA07	                              |	GPIO, Clock SPI, ADC   |
|D9             | Analógico,SPI_MISO |  	PA05                                |		GPIO, Dados SPI, ADC  |
|D10            | Analógico,SPI_MOSI |  PA06	                                | 	GPIO, Dados SPI         |
|Reset          |                 |  RES	                                |	RESET                  |
|TX_LED         |                 |   PA19	                              |	TX_LED                 |
|RX_LED         |                 | PA18	                                |	RX_LED                 |
|Power_LED     |          |        VBUS	                                |       	CHG-LED_Vermelho      |
|USER_LED       |                 |   PA17	                              |	Luz de usuário_Amarela      |

### **Entrar no modo Bootloader**

Às vezes, a porta do Seeed Studio XIAO SAMD21 pode desaparecer quando o processo de programação do usuário falha. Podemos resolver esse problema com a seguinte operação:

- Conecte o Seeed Studio XIAO SAMD21 ao seu computador.
- Use uma pinça ou fios curtos para fazer curto-circuito nos pinos RST do diagrama duas vezes.
- Os LEDs laranja piscam e acendem.

Neste ponto, o chip entra no modo Bootloader e a porta de gravação aparece novamente. Como o chip samd21 possui duas partições, uma é o Bootloader e a outra é o programa do usuário. O produto grava um código de bootloader na memória do sistema quando sai de fábrica. Podemos alternar os modos executando as etapas acima.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

### **Reset**

Se você quiser resetar o Seeed Studio XIAO SAMD21, execute as etapas a seguir:

- Conecte o Seeed Studio XIAO SAMD21 ao seu computador.
- Use uma pinça ou fios curtos para fazer curto-circuito nos pinos RST **apenas uma vez**
- Os LEDs laranja piscam e acendem.

Observe: O comportamento do LED interno é o oposto daquele em um Arduino. No Seeed Studio XIAO SAMD21, o pino deve ser puxado para nível baixo, enquanto em outros microcontroladores ele deve ser puxado para nível alto.  

### **Interrupção**

Todos os pinos do Seeed Studio XIAO SAMD21 suportam interrupções, mas dois pinos não podem ser usados ao mesmo tempo: pino 5 e pino 7. Para mais detalhes sobre interrupção, verifique [aqui](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/master/variants/XIAO_m0/variant.cpp).

### **Multiplexação de pinos**

Não precisamos configurar os pinos nós mesmos, após usar os pinos, você pode chamar uma função diretamente.

#### **Entrada e saída digital**

- Use o pino 6 como pino digital:

```c
const int buttonPin = 6;     // the number of the pushbutton pin
const int ledPin =  13;      // the number of the LED pin

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
    // turn LED on:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED off:
    digitalWrite(ledPin, LOW);
  }
}
```

#### **AnalogRead**

- Use o pino 6 como pino analógico:

```c


void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // read the value from the sensor:
  sensorValue = analogRead(sensorPin);
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

#### **Serial**

- Use o pino 6 como pino TX da UART (pino RX da UART é o pino 7):

```c

void setup() {
    Serial1.begin(115200);
    while (!Serial);
}

void loop() {
    Serial1.println("Hello,World");
    delay(1000);
}
```

#### **I2C**

- Use o pino 5 como pino SCL do IIC (pino SDA do IIC é o pino 4):

```c
// Wire Master Writer
// by Nicholas Zambetti <http://www.zambetti.com>

// Demonstrates use of the Wire library
// Writes data to an I2C/TWI slave device
// Refer to the "Wire Slave Receiver" example for use with this

// Created 29 March 2006

// This example code is in the public domain.


#include <Wire.h>

void setup()
{
  Wire.begin(); // join i2c bus (address optional for master)
}

byte x = 0;

void loop()
{
  Wire.beginTransmission(4); // transmit to device #4
  Wire.write("x is ");        // sends five bytes
  Wire.write(x);              // sends one byte  
  Wire.endTransmission();    // stop transmitting
  x++;
  delay(500);
}
```

#### **SPI**

- Use o pino 8 como pino SCK do SPI (pino MISO do SPI é o pino 9, pino MOSI do SPI é o pino 10):

```c
#include <SPI.h>
const int CS = 7;
void setup (void) {
   digitalWrite(CS, HIGH); // disable Slave Select
   SPI.begin ();
   SPI.setClockDivider(SPI_CLOCK_DIV8);//divide the clock by 8
}

void loop (void) {
   char c;
   digitalWrite(CS, LOW); // enable Slave Select
   // send test string
   for (const char * p = "Hello, world!\r" ; c = *p; p++) {
      SPI.transfer (c);
   }
   digitalWrite(CS, HIGH); // disable Slave Select
   delay(2000);
}
```

#### **QTouch**

Para saber como usar o QTouch, fornecemos um projeto de exemplo: [How to Make a Fruit Piano on Seeed Studio XIAO SAMD21 ’s Q-Touch Function](https://www.seeedstudio.com/blog/2020/07/20/how-to-make-a-fruit-piano-on-seeeduino-xiaos-q-touch-function-m/).

#### **Entrada e Saída Analógica**

Embora ainda tenha "saídas analógicas" baseadas em PWM, o SAMD21 também apresenta saída analógica verdadeira na forma de um conversor digital‑para‑analógico (DAC). Este módulo pode produzir uma tensão analógica entre 0 e 3,3 V. Ele pode ser usado para produzir áudio com som mais natural ou como uma espécie de "potenciômetro digital" para controlar dispositivos analógicos.

O DAC está disponível apenas no pino Arduino A0 e é controlado usando analogWrite(A0, `<value>`). O DAC pode ser configurado com resolução de até 10 bits (certifique‑se de chamar [**analogWriteResolution(10)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogwriteresolution/) na sua configuração), o que significa que valores entre 0 e 1023 definirão a tensão em algum ponto entre 0 e 3,3 V.

Além do DAC, os canais ADC do SAMD21 também se destacam em relação ao ATmega328: eles vêm equipados com até 12 bits de resolução. Isso significa que os valores de entrada analógica podem variar de 0 a 4095, representando uma tensão entre 0 e 3,3 V. Para usar os ADCs em modo de 12 bits, certifique‑se de chamar [**analogReadResolution(12)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogreadresolution/) na sua configuração.

**Plotando o DAC via Serial**

Aqui está um exemplo que demonstra tanto o DAC quanto o ADC. Para montar o experimento, conecte A0 a A1 — iremos acionar A0 com uma tensão analógica e depois lê‑la com A1. É o circuito mais simples que já colocamos em um tutorial:

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/AO_A1.jpg" /></div>

:::note
O Seeed Studio XIAO SAMD21 usando a [**placa de expansão Seeed Studio XIAO SAMD21**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)
:::

Este sketch produz uma onda senoidal na saída A0, com valores variando de 0 a 3,3 V. Em seguida, ele usa A1 para ler essa saída no seu ADC e convertê‑la em uma tensão entre 0 e 3,3 V.

Você pode, é claro, abrir o monitor serial para ver o fluxo de valores de tensão. Mas se a forma de onda senoidal for difícil de visualizar por texto, experimente o novo Serial Plotter do Arduino, em Tools > Serial Plotter.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Serial%20poltting.png" /></div>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_DAC_wave.gif" /></div>

#### **DAC**

Agradecemos a [Aleksei Tertychnyi](https://github.com/WeSpeakEnglish) por enviar o código; todas as funcionalidades relacionadas foram desenvolvidas e contribuídas por ele.

```cpp
#define DAC_PIN A0 // Make code a bit more legible
float x = 0; // Value to take the sin of
float increment = 0.02;  // Value to increment x by each time
int frequency = 440; // Frequency of sine wave

void setup() 
{
  analogWriteResolution(10); // Set analog out resolution to max, 10-bits
  analogReadResolution(12); // Set analog input resolution to max, 12-bits

  Serial.begin(9600);
}

void loop() 
{
  // Generate a voltage value between 0 and 1023. 
  // Let's scale a sin wave between those values:
  // Offset by 511.5, then multiply sin by 511.5.
  int dacVoltage = (int)(511.5 + 511.5 * sin(x));
  x += increment; // Increase value of x

  // Generate a voltage between 0 and 3.3V.
  // 0= 0V, 1023=3.3V, 512=1.65V, etc.
  analogWrite(DAC_PIN, dacVoltage);

  // Now read A1 (connected to A0), and convert that
  // 12-bit ADC value to a voltage between 0 and 3.3.
  float voltage = analogRead(A1) * 3.3 / 4096.0;
  Serial.println(voltage); // Print the voltage.
  delay(1); // Delay 1ms
}
```

**Resultado**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/THonny_DAC.jpg" alt="pir" width={600} height="auto" /></p>

## **Primeiros Passos**

### **Hardware**

**Materiais necessários**

- Seeed Studio XIAO SAMD21 x1
- Computador x1
- Cabo USB tipo C x1

:::tip

Alguns cabos USB podem apenas fornecer alimentação e não transferir dados. Se você não tem um cabo USB ou não sabe se o seu cabo USB pode transmitir dados, você pode conferir o [seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).
:::

- Passo 1. Prepare um Seeed Studio XIAO SAMD21 e um cabo Type‑C.

- Passo 2. Conecte o Seeed Studio XIAO SAMD21 ao seu computador. Então o LED amarelo de alimentação deve acender.

### **Software**

:::note

Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino)
:::

- **Passo 1. Você precisa instalar o software Arduino.**

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

**Inicie o aplicativo Arduino**

Dê um clique duplo no aplicativo Arduino (arduino.exe) que você baixou anteriormente.

:::note

Se o software Arduino for carregado em um idioma diferente, você pode alterá‑lo na caixa de diálogo de preferências. Veja a página do [Arduino Software (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para mais detalhes.
:::

- **Passo 2. Abra o exemplo Blink**  

Abra o sketch de exemplo de piscar LED: **File > Examples >01.Basics > Blink**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={600} height="auto" /></p>

- **Passo 3. Adicione o Seeeduino ao seu Arduino IDE**

Clique em **File > Preference** e preencha Additional Boards Manager URLs com a URL abaixo:

*https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json*

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width={600} height="auto" /></p>

Clique em **Tools-> Board-> Boards Manager...**, digite a palavra‑chave "**Seeed Studio XIAO SAMD21**" no campo de busca. Aparecerá "Seeed SAMD Boards". Instale‑o.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png" alt="pir" width={600} height="auto" /></p>

- **Passo 4. Selecione sua placa e porta**

Depois de instalar a placa, clique em **Tools-> Board**, encontre "**Seeed Studio XIAO**" e selecione‑a. Agora você já configurou a placa Seeed Studio XIAO SAMD21 para o Arduino IDE.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/1.jpg" alt="pir" width={600} height="auto" /></p>

Selecione o dispositivo serial da placa Arduino no menu Tools | Serial Port. Provavelmente será COM3 ou superior (**COM1** e **COM2** são normalmente reservadas para portas seriais de hardware). Para descobrir, você pode desconectar sua placa Arduino e reabrir o menu; a entrada que desaparecer deve ser a placa Arduino. Reconecte a placa e selecione essa porta serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/2.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 5. Envie o programa**  

Agora, simplesmente clique no botão "Upload" no ambiente. Espere alguns segundos e, se o envio for bem‑sucedido, a mensagem "Done uploading." aparecerá na barra de status.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={800} height="auto" /></p>

 Alguns segundos após o término do upload, você deverá ver o LED do pino 13 (L) na placa começar a piscar (em laranja). Se isso acontecer, parabéns! Você colocou o Arduino para funcionar. Se tiver problemas, consulte as sugestões de solução de problemas.

:::note
o tamanho máximo da flash é 8KB, mais informações no datasheet ATSAMD218A-MU em recursos
:::

## O aplicativo de exemplo

- [Como usar o Seeed Studio XIAO SAMD21 para fazer login no seu Raspberry PI](https://wiki.seeedstudio.com/pt-br/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI)

- [Interface de Comunicação SPI](https://wiki.seeedstudio.com/pt-br/XIAO-SPI-Communication-Interface)

- [Como recuperar um XIAO “morto” usando Raspberry Pi](https://forum.seeedstudio.com/t/how-to-unbrick-a-dead-xiao-using-raspberry-pi-guide-openocd/253990). Obrigado ao John_Doe por compartilhar.

## **Recursos**

**Projeto de Hardware**
- **📄[Datasheet]** [Atmel SAMD21G18 Datasheet](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)
- **📄[Esquemático]** [XIAO SAMD21 Schematic](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0-SCH-191112.pdf)
- **🗃️[Arquivos de Projeto de PCB]** 
  - [Projeto XIAO SAMD21 em KiCad](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-KICAD.zip)  
  - [Projeto XIAO SAMD21 em Eagle](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)
- **🗃️[Bibliotecas de Projeto de PCB]** 
  - [Footprints da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [Símbolos SCH da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Folha de Pinagem]** [Folha de Pinagem XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-pinout_sheet.xlsx )

**Projeto Mecânico**
- **📄[Dimensões 2D]** [Dimensões do XIAO em DXF](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar )
- **📄[Modelo 3D]** [Modelo 3D do XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip )

**Software e Ferramentas**
- **📄[Firmware de Fábrica]** [Firmware de Fábrica do XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_final_firmware.zip )

## Recursos do Curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

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
