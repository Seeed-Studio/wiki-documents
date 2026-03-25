---
description: WireLess_Gate_Shield_V1.0
title: WireLess Gate Shield V1.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /WireLess_Gate_Shield_V1.0
last_update:
  date: 02/02/2023
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/WireLess_Gate_Shield_V1.0/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WireLess_Gate_Shield_V1.0/img/WLG_h.jpg" alt="pir" width={600} height="auto" /></p>

WireLess Gate Shield é uma placa de expansão compatível com Arduino projetada para construir um sistema de recepção / transmissão e difusão de vários comandos e dados sem fio. Para a máxima cobertura possível, as interfaces de comunicação sem fio na placa incluem uma interface de receptor IR para conexão dos populares transceptores nRF24L01+ e RFM69HW. Além disso, a placa possui um módulo de relógio de tempo real DS1307.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WireLess_Gate_Shield_V1.0/img/WLG_intro.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/WireLess-Gate-Shield-p-2117.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

---

* Interface para conectar o transceptor 315/433/868/915 MHz (dependendo da versão) [RFM69HW](http://devicter.ru/goods/RFM69HW-RF-transceiver)

* Interface para conectar o transceptor em 2,4 GHz [nRF24L01 +](https://www.seeedstudio.com/depot/s/nRF24L01.html?search_in_description=0)

* Receptor IR
* Módulo de relógio em tempo real baseado no DS1307 com bateria de backup
* LED de atividade automática dos módulos de rádio
* LED para o usuário
* Botão de relógio para operação
* Conector compatível com [GROVE](https://www.seeedstudio.com/depot/Grove-t-3.html?ref=top): I2C
* Totalmente compatível com [Ethernet Shield](https://www.seeedstudio.com/depot/W5200-Ethernet-Shield-p-1577.html)

## Layout e esquemáticos

---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WireLess_Gate_Shield_V1.0/img/Wl-top.png" alt="pir" width={600} height="auto" /></p>

No lado esquerdo da WireLess Gate Shield estão as interfaces para os módulos sem fio:

* nRF24l01 +, incluindo a versão aprimorada ("PA") (acima)
* RFM69HW (abaixo).

Entre os módulos sem fio há um conector U.FL para antena externa para o RFM69HW. Se você planeja usar a antena comum (um pedaço de fio do comprimento necessário), é possível soldá-la diretamente na placa Shield (próximo ao conector U.FL)

À direita e um pouco acima do módulo RFM69HW está o LED LED1 "RF433"

Na parte central da placa há um soquete para uma bateria de backup para o módulo de relógio DS1307

À direita e um pouco abaixo do soquete para a bateria - conector I2C.

No lado direito está (de cima para baixo):

* LED LED2 "RF24"
* Receptor IR
* LED LED3 - usuário
* Botão de relógio S1

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WireLess_Gate_Shield_V1.0/img/Wl-Scheme.PNG" alt="pir" width={600} height="auto" /></p>

## Funcionalidade básica

---
Na versão básica (sem o uso de Ethernet Shield) é possível organizar um gateway sem fio entre os rádios e o receptor IR.

Comandos (ou dados) podem ser transmitidos entre todas as três interfaces sem fio de acordo com a lógica do programa do usuário.

A disponibilidade do módulo de relógio em tempo real permitirá automatizar o envio de quaisquer dados ou comandos com referência à data / hora.

O gerenciamento do dispositivo pode ser organizado usando um botão localizado no Shield.

## Capacidades de expansão

---
Adicionalmente, a WireLess Gate Shield pode conectar qualquer dispositivo i2c usando conexões compatíveis com Grove (sensores, displays, etc.).

A WireLess Gate Shield foi projetada para ser totalmente compatível com o [Ethernet Shield](https://www.seeedstudio.com/depot/W5200-Ethernet-Shield-p-1577.html) - assim você pode usar essas duas Shields juntas para criar um dispositivo de controle sem fio ainda mais avançado (registrando em cartão SD e apresentando dados em uma página web, gerenciando dispositivos sem fio via web).

## Interfaces

---

* Interface para o módulo RF nRF24L01 +:
  * D11 - MOSI

    * D12 - MISO
  * D13 - SCK

    * D7 - RF24_CE

    * D8 - RF24_CSN

    * D2 - RF24_IRQ

* Interface para o módulo RF RFM69HW:
  * D11 - MOSI

    * D12 - MISO
  * D13 - SCK

    * D9 - RF433_NSS

    * A0 - RF433_RESET

    * D3 - RF433_IRQ

* A4 (SDA), A5 (SCL) - exibidos no conector "I2C" (os outros dois pinos no conector - VCC e GND para alimentação do sensor)
* A4 (SDA), A5 (SCL) - são utilizados em paralelo para o RTC DS1307
* A1 - Botão
* D6 - LED personalizado (LED3)

## Recursos  WireLess Gate Shield

---

### Módulos sem fio

Ambos os módulos sem fio RFM69HW e nRF24l01 + são conectados ao barramento de hardware SPI.

A seleção de um módulo sem fio específico é feita com um potencial baixo para estabelecer o pino chip select apropriado:

* CSN (D8) para o módulo nRF24l01 +
* NSS (D9) para o módulo RFM69HW

_'Warning', 'If you have installed, but the software is not involved RFM69HW, be sure to install NSS pin of this module in state HIGH (otherwise it will interfere with the normal operation nRF24l01 + and Ethernet Shield._

### Exibição automática dos módulos sem fio

A indicação por LED do módulo sem fio é implementada da seguinte forma:

* O cátodo do LED LED1 "RF24" é conectado ao pino CSN (D8) do módulo nRF24l01 +, o ânodo do LED (através de um resistor limitador de corrente) - ao pino SCK do barramento SPI (D13)
* O cátodo do LED LED2 "RF433" é conectado ao pino NSS (D9) do módulo RFM69HW, o ânodo do LED (através de um resistor limitador de corrente) - ao pino SCK do barramento SPI (D13)

Quando os rádios não estão ativos - nos pinos chip select (CSN e NSS) correspondentes há um potencial alto, e o aparecimento do clock no pino SCK não leva ao acendimento dos LEDs.
Se o mesmo MC "se comunica" com qualquer módulo sem fio, para selecioná-lo no pino apropriado (CSN e NSS) é definido um potencial baixo e, ao mesmo tempo, os pulsos de temporização no pino SCK "acendem" o LED correspondente.

Assim, não é necessário que o usuário organize qualquer trabalho de programação adicional no MC para indicar a operação do módulo.

### Recursos

Se necessário, o LED SMD pode ser substituído por LEDs comuns (por exemplo, para embutir o dispositivo acabado em uma caixa bonita com mostrador):

* A placa está próxima ao equipamento correspondente ao LED, havendo um assento onde você pode soldar terminais de LEDs (ou o cabo apropriado).
* O resistor limitador de corrente está na placa (para a saída do LED não é necessário resistor em série)
* O LED SMD, ao instalar o LED de saída, deve ser removido da placa

### Modificação para controle via IR

O LED personalizado pode ser substituído no pino LED3 por um LED IR e, assim, ampliar ainda mais o uso da WireLess Gate Shield (por exemplo, um comando enviado via qualquer interface sem fio ou LAN - controle de dispositivos usando comandos infravermelhos).

## Bibliotecas

### Biblioteca necessária

Para usar a WireLess Gate Shield são necessárias as seguintes bibliotecas:

* Trabalho com o transceptor nRF24L01 + - [RF24](https://github.com/maniacbug/RF24/archive/master.zip)

* Trabalho com o transceptor RFM69HW - [RFM69](https://github.com/LowPowerLab/RFM69/archive/master.zip)

* Relógio de tempo real (RTC) - [RTClib](https://github.com/adafruit/RTClib/archive/master.zip)

* Receptor IR - [IRremote](https://github.com/shirriff/Arduino-IRremote/archive/master.zip)

Além disso, são necessárias bibliotecas que são usadas ao trabalhar com RF24 e display LCD:

* SPI

As bibliotecas possuem exemplos apenas para entender como funcionam.

### Recursos  uso de bibliotecas

**NRF24l01 +**

A inicialização do módulo nRF24l01 + é a seguinte:

```cpp
//RF24 radio(CE,CSN);
RF24 radio(7,8);
```

**RFM69HW**

Para trabalhar com o módulo sem fio RFM69HW é necessário fazer pequenas correções no arquivo RFM69.h da seguinte forma:

No início do arquivo, encontre a linha:

```cpp
#define SPI_CS               SS // SS is the SPI slave select pin, for instance D10 on atmega328
#define RF69_IRQ_PIN          2 // INT0 on AVRs should be connected to DIO0 (ex on Atmega328 it's D2)
```

E substitua por:

```cpp
//#define SPI_CS               SS // SS is the SPI slave select pin, for instance D10 on atmega328
//#define RF69_IRQ_PIN          2 // INT0 on AVRs should be connected to DIO0 (ex on Atmega328 it's D2)
#define SPI_CS               9 // SS is the SPI slave select pin, for WireLess Gate Shield - D9
#define RF69_IRQ_PIN          3 // INT1 on AVRs should be connected to DIO0 (ex on Atmega328 it's D3)
```

Além disso, no arquivo RFM69.cpp é necessário encontrar a linha:

```cpp
void RFM69::isr0() { selfPointer->interruptHandler(); }
```

E substitua por:

```cpp
//void RFM69::isr0() { selfPointer->interruptHandler(); }
void RFM69::isr1() { selfPointer->interruptHandler(); }
```

A inicialização do módulo RFM69HW é a seguinte:

```cpp
  resetRFM69();
  radio.setCS(9); // NSS - D9
  radio.initialize(FREQUENCY,NODEID,NETWORKID);
```

_'Note:'_ O trabalho com o RFM69HW é determinado pelo estado de seus registradores. Para mais ajustes para pontos finais específicos, são necessárias alterações nas regras no arquivo RFM69.cpp na função RFM69 :: initialize
Para entender melhor a finalidade dos registradores, leia o arquivo RFM69registers.h (também incluído na biblioteca) e a documentação do [rádio RFM69HW](http://st.devicter.ru/9/1115/243/RFM69HW.pdf)

## Demonstração

### Código para a unidade principal com WireLess Gate Shield (funciona com RTC, IR, RFM69HW, nRF24l01 +)

* Envia uma estrutura para outro RFM69HW e recebe uma resposta (ping-pong).
* Escuta o nRF24l01 + e, se chegar o pacote apropriado, o envia para o monitor
* Aceita comandos via receptor IR (os comandos reconhecidos são exibidos no monitor) e acende o LED personalizado

Todos os resultados são exibidos no Serial Monitor

```cpp
#include <RFM69.h>
#include <SPI.h>
#include "RF24.h"
#include <IRremote.h>
#include <Wire.h>
#include "RTClib.h"

RF24 radio24(7,8);

RTC_DS1307 RTC;

int RECV_PIN = 5;

IRrecv irrecv(RECV_PIN);

decode_results results;

// create a framework for the transmission of values
typedef struct{
    int SensorID;        // ID sensor
    int CommandTo;       // command module number ...
    int Command;         // command
    // 0 - answer
    // 1 - get the value
    // 2 - set the value
    int ParamID;         // parameter identifier
    float ParamValue;    // value
    boolean Status;      // status
    // 0 - read-only (RO)
    // 1 -  can change the (RW)
    char Comment[16];    // comment
}
Message;

Message sensor;

const uint64_t pipes[2] = {
0xF0F0F0F0E1LL, 0xF0F0F0F0D2LL };

volatile boolean waitRF24 = false;

#define NODEID      99
#define NETWORKID   100
#define GATEWAYID   1
#define FREQUENCY   RF69_433MHZ //Match this with the version of your Moteino! (others: RF69_433MHZ, RF69_868MHZ)
#define KEY         "thisIsEncryptKey" //has to be same 16 characters/bytes on all nodes, not more not less!
#define LED         6
#define SERIAL_BAUD 115200
#define ACK_TIME    30  // # of ms to wait for an ack

#define RFM69_RESET 14  //A0
#define RFM69_NSS 9
#define RFM69_DIO0 3

#define BUTTON 15 // A1

#define MOSI 11
#define MISO 12
#define SCK 13

int TRANSMITPERIOD = 500; //transmit a packet to gateway so often (in ms)
byte sendSize=0;
boolean requestACK = false;
RFM69 radio;

int delta=2000;

unsigned long blinkStop;
unsigned long timeReady;

typedef struct {
    int           nodeId; //store this nodeId
    unsigned long uptime; //uptime in ms
    float         temp;   //temperature maybe?
}
Payload;
Payload theData;

void setup() {
    Serial.begin(SERIAL_BAUD);

    pinMode(LED, OUTPUT);

    pinMode(RFM69_NSS, OUTPUT);
    pinMode(7, OUTPUT);
    pinMode(8, OUTPUT);
    pinMode(MOSI, OUTPUT);
    pinMode(MISO, INPUT);
    pinMode(SCK, OUTPUT);

    pinMode(RFM69_RESET, OUTPUT);
    pinMode(RFM69_DIO0, INPUT);

    pinMode(BUTTON, INPUT);

    digitalWrite(RFM69_NSS, HIGH);
    digitalWrite(7, HIGH);

    resetRFM69();
    radio.setCS(RFM69_NSS);
    radio.initialize(FREQUENCY,NODEID,NETWORKID);

    //radio.setHighPower(); //uncomment only for RFM69HW!

    radio.encrypt(KEY);
    char buff[50];
    sprintf(buff, "\nTransmitting at %d Mhz...", FREQUENCY==RF69_433MHZ ? 433 : FREQUENCY==RF69_868MHZ ? 868 : 915);
    Serial.println(buff);

    radio24.begin();
    // optionally, increase the delay between retries & # of retries
    radio24.setRetries(15,15);
    radio24.setChannel(119);
    // по умолчанию СЛУШАЕМ
    radio24.openWritingPipe(pipes[1]);
    radio24.openReadingPipe(1,pipes[0]);
    radio24.startListening();

    delay(20);

    attachInterrupt(0, isr_RF24, FALLING);

    irrecv.enableIRIn();

    Wire.begin();
    RTC.begin();

    if (! RTC.isrunning()) {
        Serial.println("RTC is NOT running!");
        // following line sets the RTC to the date & time this sketch was compiled
        RTC.adjust(DateTime(__DATE__, __TIME__));
    }
}

long lastPeriod = -1;
void loop() {

    //check for any received packets
    if (radio.receiveDone())
    {
        Serial.print('[');
        Serial.print(radio.SENDERID, DEC);
        Serial.print("] ");
        for (byte i = 0; i < radio.DATALEN; i++)
        Serial.print((char)radio.DATA[i]);
        Serial.print("   [RX_RSSI:");
        Serial.print(radio.readRSSI());
        Serial.print("]");

        if (radio.ACK_REQUESTED)
        {
            radio.sendACK();
            Serial.print(" - ACK sent");
            delay(10);
        }
        Serial.println();
    }

    int currPeriod = millis()/TRANSMITPERIOD;
    if (currPeriod != lastPeriod)
    {
        //fill in the struct with new values
        theData.nodeId = NODEID;
        theData.uptime = millis();
        theData.temp = radio.readTemperature();//91.23; //it's hot!

        Serial.print("Sending struct (");
        Serial.print(sizeof(theData));
        Serial.print(" bytes) ... ");
        if (radio.sendWithRetry(GATEWAYID, (const void*)(&theData), sizeof(theData)))
        Serial.print(" ok!");
        else Serial.print(" nothing...");
        Serial.println();
        lastPeriod=currPeriod;
    }

    listenRF24();

    if (irrecv.decode(&results)) {
        Serial.println(results.value, HEX);
        irrecv.resume(); // Receive the next value
        blinkStop=millis()+100;
        digitalWrite(LED, HIGH);
    }

    if (digitalRead(BUTTON)==LOW) {
        blinkStop=millis()+1000;
        digitalWrite(LED, HIGH);
    }

    if (millis()>blinkStop) {
        digitalWrite(LED, LOW);
    }

    if(millis()>timeReady){
        timeReady=millis()+2000;
        DateTime now = RTC.now();

        Serial.print(now.year(), DEC);
        Serial.print('/');
        Serial.print(now.month(), DEC);
        Serial.print('/');
        Serial.print(now.day(), DEC);
        Serial.print(' ');
        Serial.print(now.hour(), DEC);
        Serial.print(':');
        Serial.print(now.minute(), DEC);
        Serial.print(':');
        Serial.print(now.second(), DEC);
        Serial.println();
    }
}

void Blink(byte PIN, int DELAY_MS)
{
    pinMode(PIN, OUTPUT);
    digitalWrite(PIN,HIGH);
    delay(DELAY_MS);
    digitalWrite(PIN,LOW);
}

void resetRFM69(){
    digitalWrite(RFM69_RESET, HIGH);
    delay(1);
    digitalWrite(RFM69_RESET, LOW);
    delay(10);
}

void isr_RF24(){
    waitRF24 = true;
}

void listenRF24() {
    if (waitRF24) {
        waitRF24 = false;
        if ( radio24.available() )
        {
            bool done = false;
            while (!done)
            {
                done = radio24.read( &sensor, sizeof(sensor) );
                if(sensor.Command == 0) {
                    Serial.print(sensor.SensorID);
                    Serial.print("  ");
                    Serial.print(sensor.ParamID);
                    Serial.print("  ");
                    Serial.print(sensor.ParamValue);
                    Serial.print(" ");
                    Serial.println(sensor.Comment);
                }
            }
        }
    }
}
```

### Código para "receiver" (para o teste foi usado Arduino Nano e módulo RFM69HW na protoboard)

* Usa a estrutura RFM69HW
* Responsável pela recepção
* Imprime informações adicionais sobre o módulo RFM69HW (registradores, etc.)

```cpp
#include <RFM69.h>
#include <SPI.h>

#define NODEID      1
#define NETWORKID   100
#define FREQUENCY   RF69_433MHZ //Match this with the version of your Moteino! (others: RF69_433MHZ, RF69_868MHZ)
#define KEY         "thisIsEncryptKey" //has to be same 16 characters/bytes on all nodes, not more not less!
#define LED         6
#define SERIAL_BAUD 115200
#define ACK_TIME    30  // # of ms to wait for an ack

#define RFM69_RESET 14

RFM69 radio;
bool promiscuousMode = false; //set to 'true' to sniff all packets on the same network

typedef struct {
    int           nodeId; //store this nodeId
    unsigned long uptime; //uptime in ms
    float         temp;   //temperature maybe?
} Payload;
Payload theData;

void setup() {
    Serial.begin(SERIAL_BAUD);
    pinMode(RFM69_RESET, OUTPUT);
    pinMode(3, INPUT);
    resetRFM69();
    radio.setCS(9);
    //delay(10);
    radio.initialize(FREQUENCY,NODEID,NETWORKID);

    //radio.setHighPower(); //uncomment only for RFM69HW!

    radio.encrypt(KEY);
    radio.promiscuous(promiscuousMode);
    char buff[50];
    sprintf(buff, "\nListening at %d Mhz...", FREQUENCY==RF69_433MHZ ? 433 : FREQUENCY==RF69_868MHZ ? 868 : 915);
    Serial.println(buff);
}

byte ackCount=0;
void loop() {
    //process any serial input
    if (Serial.available() > 0)
    {
        char input = Serial.read();
        if (input == 'r') //d=dump all register values
        radio.readAllRegs();
        if (input == 'E') //E=enable encryption
        radio.encrypt(KEY);
        if (input == 'e') //e=disable encryption
        radio.encrypt(null);
        if (input == 'p')
        {
            promiscuousMode = !promiscuousMode;
            radio.promiscuous(promiscuousMode);
            Serial.print("Promiscuous mode ");Serial.println(promiscuousMode ? "on" : "off");
        }

        if (input == 'd') //d=dump flash area
        {
            Serial.println("Flash content:");
            int counter = 0;

            while(counter<=256){
                //Serial.print(flash.readByte(counter++), HEX);
                Serial.print('.');
            }
            //while(flash.busy());
            Serial.println();
        }
        if (input == 'D')
        {
            Serial.print("Deleting Flash chip content... ");
            //flash.chipErase();
            //while(flash.busy());
            Serial.println("DONE");
        }
        if (input == 'i')
        {
            Serial.print("DeviceID: ");
            //word jedecid = flash.readDeviceId();
            //Serial.println(jedecid, HEX);
        }
    }

    if (radio.receiveDone())
    {
        Serial.print('[');Serial.print(radio.SENDERID, DEC);Serial.print("] ");
        Serial.print(" [RX_RSSI:");Serial.print(radio.readRSSI());Serial.print("]");
        if (promiscuousMode)
        {
            Serial.print("to [");Serial.print(radio.TARGETID, DEC);Serial.print("] ");
        }

        if (radio.DATALEN != sizeof(Payload))
        Serial.print("Invalid payload received, not matching Payload struct!");
        else
        {
            theData = *(Payload*)radio.DATA; //assume radio.DATA actually contains our struct and not something else
            Serial.print(" nodeId=");
            Serial.print(theData.nodeId);
            Serial.print(" uptime=");
            Serial.print(theData.uptime);
            Serial.print(" temp=");
            Serial.print(theData.temp);
        }

        if (radio.ACK_REQUESTED)
        {
            byte theNodeID = radio.SENDERID;
            radio.sendACK();
            Serial.print(" - ACK sent.");

            // When a node requests an ACK, respond to the ACK
            // and also send a packet requesting an ACK (every 3rd one only)
            // This way both TX/RX NODE functions are tested on 1 end at the GATEWAY
            if (ackCount++%3==0)
            {
                Serial.print(" Pinging node ");
                Serial.print(theNodeID);
                Serial.print(" - ACK...");
                delay(3); //need this when sending right after reception .. ?
                if (radio.sendWithRetry(theNodeID, "ACK TEST", 8, 0))  // 0 = only 1 attempt, no retries
                Serial.print("ok!");
                else Serial.print("nothing");
            }
        }
        Serial.println();
        Blink(LED,3);
    }
}

void Blink(byte PIN, int DELAY_MS)
{
    pinMode(PIN, OUTPUT);
    digitalWrite(PIN,HIGH);
    delay(DELAY_MS);
    digitalWrite(PIN,LOW);
}

void resetRFM69(){
    digitalWrite(RFM69_RESET, HIGH);
    delay(1);
    digitalWrite(RFM69_RESET, LOW);
    delay(10);
}
```

## Versões do produto

<table cellPadding="5" cellSpacing="0">
  <tbody>
    <tr>
      <td width="150"> <strong>Revisão</strong> </td>
      <td width="450"> <strong>Descrição</strong> </td>
      <td width="80"> <strong>Lançamento</strong> </td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td> 0.9 </td>
      <td> Protótipo </td>
      <td> 05.05.2014 </td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td> 1.0 </td>
      <td> Versão pública </td>
      <td> 05.07.2014 </td>
    </tr>
  </tbody>
</table>

## Aplicações

* Gateway Wireless Universal RF2,4 GHz (nRF24l01 +), RF433 MHz (RFM69HW), IR e LAN (usando Ethernet Shield)
* Sistema de registro de comandos e dados de dispositivos sem fio com a hora (usando o Ethernet Shield)
* Projeto e construção de sistemas que administram vários comandos sem fio em um determinado horário (por exemplo, "ligar a luz em 23 de agosto de 2014 às 18:02" ou "todos os dias ativar uma irrigação automática às 5:00")

## Perguntas e Respostas

* Blog WireLess Gate Shield RU

* Faça uma pergunta por e-mail support@devicter.ru

## Como comprar

Este produto pode ser adquirido em:

China (envio para o mundo todo)

[Elecrow store](http://www.elecrow.com/wireless-gate-shield-p-1139.html)

[Seeed store](https://www.seeedstudio.com/depot/wireless-gate-shield.html)

Rússia

[Devicter store](http://devicter.ru/goods/WireLess-Gate-Shield)

## Links

* [Descrição RFM69HW](http://st.devicter.ru/9/1115/243/RFM69HW.pdf)

* [Descrição nRF24l01+](ftp://imall.iteadstudio.com/Modules/IM120606002_nRF24L01_module/DS_nRF24L01.pdf)

* [Esquema do dispositivo](http://wiki.devicter.ru/images/c/c7/Wl-Scheme.PNG)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
