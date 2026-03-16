---
description: Seeeduino LoRaWAN
title: Seeeduino LoRaWAN
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_LoRAWAN
sku: 102010129, 102010128
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino_LoRAWAN/
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/cover.png)

Seeeduino LoRaWAN é uma placa de desenvolvimento Arduino com protocolo LoRaWan embutido, através da qual você pode começar rapidamente a experimentar a vantagem do LoRa no campo de IoT. Baseado no módulo de comunicação RHF76-052AM, o Seeeduino LoRaWAN é compatível com LoRaWAN Classe A/C e suporta uma variedade de frequências de comunicação.

Os 4 conectores Grove padrão on-board permitem que o Seeeduino LoRaWan se conecte de forma conveniente a centenas de sensores e atuadores Grove da Seeedstudio; como resultado, os usuários podem focar mais na própria aplicação sem se preocupar com o problema de compatibilidade entre diferentes módulos. Além disso, a placa incorpora um chip de gerenciamento de bateria de lítio integrado que permite que a placa seja carregada pela interface USB. Em modo de baixo consumo, uma bateria de lítio totalmente carregada pode alimentar a placa por vários meses.

Se você deseja construir uma aplicação de IoT rapidamente, o Seeeduino LoRaWAN é a sua melhor escolha.

<iframe width={800} height={450} src="https://www.youtube.com/embed/4df5kaaKa6I" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

|Versão do Produto|Data de Lançamento | Como Comprar|
|-------|-------------|----------|
|Seeeduino LoRaWAN |20 de Dez, 2016|[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html)|
|Seeeduino LoRaWAN W/GPS |20 de Dez, 2016|[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-LoRaWAN-W%2FGPS-p-2781.html)|

## Alteração de Versão

|Item| Seeeduino LoRaWAN W/GPS | Seeeduino LoRaWAN |
|---|---|---|
|Chip Principal|ATSAMD21|ATSAMD21|
|Comunicação GPS|√|x|
|Módulo|RHF76-052DM|RHF76-052AM|
|Tempo de Lançamento do Módulo|2018|2018|

:::note
    Atualize o firmware na primeira vez que for usá-lo. Sempre conecte uma bateria Lipo de 3.7V caso a alimentação via USB não seja suficiente.
:::

:::tip
    Seeeduino LoRaWAN W/GPS é composto por um módulo GPS.
:::

## Recursos

* Corrente mínima (bateria lipo de 3.7V) - 2mA
* Corrente mínima (bateria lipo de 3.7V e remover LED PWR) - 80 uA

**Arduino/Processador**

* ATSAMD21G18 @ 48MHz com lógica/alimentação de 3.3V
* Compatível com Arduino (baseado no bootloader Arduino Zero)
* Embutido com chip de gerenciamento de bateria de lítio e LED indicador de status
* 20 GPIOs
* 4 conectores Grove on-board
* 18 pinos PWM
* 6 entradas analógicas
* 1 saída analógica (A0)
* Regulador de 3.3V com saída de 200mA
* Botão de reset

**LoRaWAN/RHF76-052**

* 1.45uA de corrente em modo sleep em WOR (especificação do módulo, não da placa)
* Alto orçamento de enlace de 160dB. Sensibilidade de -140dBm e potência de saída de 19dBm.
* Banda dupla, 434/470MHz e 868/915MHz
  * 19dBm@434MHz/470MHz
  * 14dBm@868MHz/915MHz
* Suporta protocolo LoRaWAN, Classe A/C
* Comunicação de alcance ultra longo
* Consumo de energia ultra baixo
* Atualização de firmware
* Tamanho pequeno: 23mm X 28mm com encapsulamento SMT de 33 pinos

:::warning
    Diferente da maioria das placas Arduino & Genuino, a Zero funciona a 3.3V. A tensão máxima que os pinos de I/O podem tolerar é 3.3V. Aplicar tensões maiores que 3.3V a qualquer pino de I/O pode danificar a placa.
:::

## Especificação

| Item|Valor|
|--------------|-------------------------------------|
|Microcontrolador |ATSAMD21G18, ARM Cortex M0+ de 32 bits |
|Tensão de Operação |3.3V|
|Pinos Digitais de I/O |20|
|Pinos PWM |Todos exceto os pinos 2 e 7|
|UART |2 (Nativo e Programação)|
|Pinos de Entrada Analógica| 6, canais ADC de 12 bits|
|Pinos de Saída Analógica |1, DAC de 10 bits|
|Interrupções Externas |Todos os pinos exceto o pino 4|
|Corrente DC por Pino de I/O |7 mA|
|Memória Flash |256 KB|
|SRAM |32 KB|
|EEPROM |Nenhuma|
|Velocidade de Clock |48 MHz|
|Comprimento |68 mm|
|Largura |53 mm|
|Peso |19.6g(sem GPS), 19.9(com GPS)|

## Ideias de Aplicação

* Internet das Coisas
* Casa Inteligente
* Segurança
* Rede Elétrica Inteligente
* Fazenda Inteligente
* Parque Inteligente

:::tip
    Use módulos Grove para expandir sua aplicação
:::
Há 4 conectores Grove na placa. Se esta é a primeira vez que você ouve falar sobre Grove, consulte [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/) para mais detalhes.
Em resumo, Groves são centenas de sensores em estilo padronizado, que consistem em sensores, atuadores, displays, bem como comunicação.

## Visão Geral de Hardware

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/hw_LoRa.png)

* **1.** Micro USB - Programar e fornecer alimentação para a placa
* **2.** Conectores Grove
* **3.** Entrada de bateria Lipo JST2.0 (3.7V) e LED de status de carregamento
* **4.** Botão DFU - botão do modo de firmware
* **5.** Botão de Reset
* **6.** Pinagem Arduino
* **7.** Pinos ICSP
* **8.** LED de modo de firmware
* **9.** Antena de fio
* **A.** Antena uFL
* **B.** Módulo RF - RHF76-052AM
* **C.** Processador ARM Cortex M0 - ATSAMD21G18
* **D.** LEDs
  * ***RX/TX*** - pisca quando há dados na UART (de/para USB)
  * ***L*** - um LED conectado ao D13
  * ***PWR*** - alimentação

:::tip
    Se você quiser usar os 4 conectores Grove on-board, use digitalWrite(38, HIGH) para ligar o VCC. Caso contrário, você não conseguirá fornecer energia para os módulos Grove.
:::
**Mapa de Pinos**

|Nome do Pino|Nº GPIO|Interrupção Externa|PWM|Entrada Analógica|Saída Analógica|Função|
|--------|--------|-----------|---|---------|----------|--------|
|0       |#0      |SIM        |SIM|         |          | RX(Serial)|
|1       |#1      |SIM        |SIM|         |          | TX(Serial)|
|2       |#2      |SIM        |   |         |          |        |
|3       |#3      |SIM        |SIM|         |          |        |
|4       |#4      |           |SIM|         |          |        |
|5       |#5      |SIM        |SIM|         |          |        |
|6       |#6      |SIM        |SIM|         |          |        |
|7       |#7      |SIM        |   |         |          |        |
|8       |#8      |SIM        |SIM|         |          |        |
|9       |#9      |SIM        |SIM|         |          |        |
|10      |#10     |SIM        |SIM|         |          |        |
|11      |#11     |SIM        |SIM|         |          |        |
|12      |#12     |SIM        |SIM|         |          |        |
|13      |#13     |SIM        |SIM|         |          |        |
|SDA     |#20     |SIM        |SIM|         |          |        |
|SCL     |#21     |SIM        |SIM|         |          |        |
|A0      |#A0     |SIM        |SIM|SIM      |SIM       |        |
|A1      |#A1     |SIM        |SIM|SIM      |          |        |
|A2      |#A2     |SIM        |SIM|SIM      |          |        |
|A3      |#A3     |SIM        |SIM|SIM      |          |        |
|A4      |#A4     |SIM        |SIM|SIM      |          |Tensão da Bateria|
|A5      |#A5     |SIM        |SIM|SIM      |          |Status de Carga|

:::note
    Todos os pinos podem atuar como Entrada e Saída Digital
:::

## Primeiros Passos

:::note
Se esta é a primeira vez que você usa Arduino, recomendamos fortemente que consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino)
:::

Primeiro você precisa instalar a versão mais recente da Arduino IDE e [ADICIONAR o Seeeduino LoRa ao seu Arduino IDE](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/).

## Instalar o Driver (Para Windows)

Quando você inserir a placa pela primeira vez, deverá obter um dispositivo USB COM chamado Seeeduino LoRaWAN que precisa da instalação de um driver. Clique no botão abaixo para baixar o driver para a placa.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/driver.png)](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/driver.zip)

Para garantir que o driver foi instalado com sucesso, abra o Gerenciador de Dispositivos para verificar se **Seeeduino LoRaWAN** existe.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/device_manager.png)

## 1. Piscar (Blink)

Agora podemos fazer upload do nosso primeiro demo - Blink para o Seeeduino LoRaWAN.

Abra o seu Arduino IDE e clique em **File > Examples > 01.Basics > Blink** para abrir o sketch ou copie o código abaixo:

```c
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin 13 as an output.
  pinMode(13, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(13, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);              // wait for a second
  digitalWrite(13, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);              // wait for a second
}
```

E então,

* Clique em **Tools > Board > Seeeduino LoRaWAN**

Se você não conseguir encontrar o Seeeduino LoRaWAN, verifique [How to Add Seeed boards to Arduino IDE](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/)

* Clique em **Tools > Port** para selecionar a porta correta. (*Não escolha COM1*)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/blink1.png)

Em seguida, clique no botão **Upload** no canto superior esquerdo do Arduino IDE; segundos depois o sketch terá sido enviado com sucesso.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/blink2.png)

Se o upload for bem-sucedido, você deverá ver algumas informações em vermelho e, por favor, observe o LED on-board, ele estará piscando.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/blink3.png)

## 2. Bateria

Você pode alimentar a placa por meio de uma bateria Lipo de 3.7V. Há um cabo JST2.0 incluído; use-o se você não conseguir uma bateria com conector JST2.0.

:::warning
    Certifique-se de que o polo positivo e o negativo da sua bateria estejam conectados corretamente, caso contrário a placa pode ser danificada.
:::
O pino de status de carga e o pino positivo da bateria foram conectados a A4 e A5, o que permite detectar o status de carga e medir a tensão da bateria via código.

Copie e envie o código abaixo para detectar o status da bateria.

```cpp
// battey of Seeeduino LoRaWAN

const int pin_battery_status  = A5;
const int pin_battery_voltage = A4;

void setup() {
    SerialUSB.begin(115200);
    pinMode(pin_battery_status, INPUT);
}

void loop() {

    int a = analogRead(pin_battery_voltage);
    float v = a/1023.0*3.3*11.0;        // there's an 1M and 100k resistor divider
    SerialUSB.print(v, 2);
    SerialUSB.print('\t');
    SerialUSB.println(digitalRead(pin_battery_status));

    delay(1000);
}
```

:::note
    O status de carga retorna 0 enquanto carrega, retorna 1 quando a carga é concluída ou nenhuma bateria está inserida.
:::

## 3. Exemplo de Envio e Recebimento

Há uma biblioteca bem escrita para os módulos LoRaWAN; para aplicações simples você nem precisa saber muito sobre o protocolo LoRa, que é complexo e difícil de ler.
E observe que você ainda precisa de algum conhecimento sobre o protocolo LoRa se quiser uma aplicação avançada.
Você não precisa baixar a biblioteca, ela já está incluída no pacote. Você pode abri-la em **File > Examples > LoRaWAN**. Esses exemplos incluem:

* p2p-tx
* p2p-rx
* ABP
* OTAA

Você precisa de 2 unidades do Seeeduino LoRaWAN para completar este exemplo, uma para envio e outra para recebimento.

### 3.1 Envio P2P

Abra sua IDE Arduino e clique em **File > Examples > LoRaWAN > p2p_tx** para abrir o sketch ou você pode copiar o código abaixo.
Este sketch irá transmitir uma string "Hello World!" a cada 3000 ms.

```
// Seduino LoRaWAN - TX example
#include <LoRaWan.h>

void setup(void)
{
    SerialUSB.begin(115200);
    lora.init();
    lora.initP2PMode(433, SF12, BW125, 8, 8, 20);
}

void loop(void)
{
    lora.transferPacketP2PMode("Hello World!");
    SerialUSB.println("Send string.");
    delay(3000);
}
```

### 3.2 Recebimento P2P

Abra sua IDE Arduino e clique em **File > Examples > LoRaWAN > p2p_rx** para abrir o sketch ou você pode copiar o código abaixo.

```
// Seduino LoRaWAN - RX example
#include <LoRaWan.h>

unsigned char buffer[128] = {0, };

void setup(void)
{
    SerialUSB.begin(115200);
    lora.init();
    lora.initP2PMode(433, SF12, BW125, 8, 8, 20);
}

void loop(void)
{
    short length = 0;
    short rssi = 0;

    memset(buffer, 0, 128);
    length = lora.receivePacketP2PMode(buffer, 128,  &rssi, 1);

    if(length)
    {
        SerialUSB.print("Length is: ");
        SerialUSB.println(length);
        SerialUSB.print("RSSI is: ");
        SerialUSB.println(rssi);
        SerialUSB.print("Data is: ");
        for(unsigned char i = 0; i < length; i ++)
        {
            SerialUSB.print("0x");
            SerialUSB.print(buffer[i], HEX);
            SerialUSB.print(" ");
        }
        SerialUSB.println();
    }
}
```

Depois que ambos os sketches forem carregados corretamente, abra o monitor serial da placa receptora e verifique se você consegue obter alguns dados como abaixo.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/monitor_rx.png)

### 3.3 ABP

* Etapa 1. Consulte o [LoRa/LoRaWAN Gateway Kit](https://wiki.seeedstudio.com/pt-br/LoRa_LoRaWan_Gateway_Kit/) para configurar primeiro o gateway.  
* Etapa 2. Conecte o [Grove-Temperature_and_Humidity_Sensor_Pro](https://wiki.seeedstudio.com/pt-br/Grove-Temperature_and_Humidity_Sensor_Pro/) à porta D2 do base shield.
* Etapa 3. Conecte o base shield ao Seeeduino Lorawan.
* Etapa 4. Baixe a [DHT Library](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/DHT.zip) e descompacte na pasta de bibliotecas do Arduino.
* Etapa 5. Copie o código abaixo para a IDE Arduino e faça o upload.

```cpp

#include <LoRaWan.h>
#include "DHT.h"

#define DHTPIN            2   
#define DHTTYPE           DHT22
DHT dht(DHTPIN, DHTTYPE);
unsigned char data[2] = {1, 2};
char buffer[256];

void setup(void)
{     
    dht.begin();

    SerialUSB.begin(115200);
    //while(!SerialUSB);

    lora.init();

    memset(buffer, 0, 256);
    lora.getVersion(buffer, 256, 1);
    SerialUSB.print(buffer); 

    memset(buffer, 0, 256);
    lora.getId(buffer, 256, 1);
    SerialUSB.print(buffer);

    lora.setKey("2B7E151628AED2A6ABF7158809CF4F3C", "2B7E151628AED2A6ABF7158809CF4F3C", "2B7E151628AED2A6ABF7158809CF4F3C");

    lora.setDeciveMode(LWABP);
    lora.setDataRate(DR0, EU868);

    lora.setChannel(0, 867.7);
    lora.setChannel(1, 867.9);
    lora.setChannel(2, 868.8);

    lora.setReceiceWindowFirst(0, 867.7);
    lora.setReceiceWindowSecond(869.5, DR3);

    lora.setDutyCycle(false);
    lora.setJoinDutyCycle(false);

    lora.setPower(14);
}

void loop(void)
{   
    bool result = false;

    delay(2000);
    int h = dht.readHumidity();
    int t = dht.readTemperature();

    //result = lora.transferPacket("Hello World!", 10);
    result = lora.transferPacket(data, 2, 10);
    data[0] = h;
    data[1] = t;

    if(result)
    {
        short length;
        short rssi;

        memset(buffer, 0, 256);
        length = lora.receivePacket(buffer, 256, &rssi);

        if(length)
        {
            SerialUSB.print("Length is: ");
            SerialUSB.println(length);
            SerialUSB.print("RSSI is: ");
            SerialUSB.println(rssi);
            SerialUSB.print("Data is: ");
            for(unsigned char i = 0; i < length; i ++)
            {
                SerialUSB.print("0x");
                SerialUSB.print(buffer[i], HEX);
                SerialUSB.print(" ");
            }
            SerialUSB.println();
        }
    }
}

```

* Etapa 6. Para servidor local, clique em Application->Seeed (o nome da aplicação que você acabou de adicionar)->View application data; você verá os dados que acabou de enviar a partir do Seeeduino_LoRAWAN. Para o servidor Loriot, vá para Dashboard -> Applications -> SampleApp -> Device, clique no Node Device EUI ou DevAddr e você encontrará aqui os dados que acabou de enviar.

### 3.4 OTAA

* Etapa 1. Consulte o [User Manual](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/RHF-UM01649-IoT-Discovery-User-Manual-seeed-v2.1.pdf) Seção 3.2.3 para configurar o gateway.
* Etapa 2. Para o Seeeduino Lorawan, abra sua IDE Arduino e clique em **File > Examples > LoRaWAN > OTAA** e consulte o código.

```cpp
#include <LoRaWan.h>


unsigned char data[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0xA,};
char buffer[256];


void setup(void)
{
    SerialUSB.begin(115200);
    while(!SerialUSB);

    lora.init();

    memset(buffer, 0, 256);
    lora.getVersion(buffer, 256, 1);
    SerialUSB.print(buffer); 

    memset(buffer, 0, 256);
    lora.getId(buffer, 256, 1);
    SerialUSB.print(buffer);

    lora.setKey("2B7E151628AED2A6ABF7158809CF4F3C", "2B7E151628AED2A6ABF7158809CF4F3C", "2B7E151628AED2A6ABF7158809CF4F3C");

    lora.setDeciveMode(LWOTAA);
    lora.setDataRate(DR0, EU868);

    lora.setChannel(0, 868.1);
    lora.setChannel(1, 868.3);
    lora.setChannel(2, 868.5);

    lora.setReceiceWindowFirst(0, 868.1);
    lora.setReceiceWindowSecond(869.5, DR3);

    lora.setDutyCycle(false);
    lora.setJoinDutyCycle(false);

    lora.setPower(14);

    while(!lora.setOTAAJoin(JOIN));
}

void loop(void)
{   
    bool result = false;

    result = lora.transferPacket("Hello World!", 10);
    //result = lora.transferPacket(data, 10, 10);

    if(result)
    {
        short length;
        short rssi;

        memset(buffer, 0, 256);
        length = lora.receivePacket(buffer, 256, &rssi);

        if(length)
        {
            SerialUSB.print("Length is: ");
            SerialUSB.println(length);
            SerialUSB.print("RSSI is: ");
            SerialUSB.println(rssi);
            SerialUSB.print("Data is: ");
            for(unsigned char i = 0; i < length; i ++)
            {
                SerialUSB.print("0x");
                SerialUSB.print(buffer[i], HEX);
                SerialUSB.print(" ");
            }
            SerialUSB.println();
        }
    }
}
```

## 4. Dados de GPS

:::note
    Este capítulo funciona apenas com o Seeeduino LoRaWAN W/GPS.
:::

### 4.1 NMEA

* Etapa 1. Copie o código abaixo para o seu Seeeduino LoRaWAN W/GPS.

```cpp
void setup()
{
    Serial2.begin(9600);
    Serial.begin(115200);
}

void loop()
{
    while(Serial2.available())
    {
        Serial.write(Serial2.read());
    }
    while(Serial.available())
    {
        Serial2.write(Serial.read());
    }
}
```

* Etapa 2. Abra o Serial Monitor e então você receberá dados do GPS.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/gps.png)

### 4.2 Lat e Lng

Agradecimentos ao **Todd Krein** por compartilhar o exemplo no Github. Baixe a [TinyGPS++ library](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/TinyGPSPlus-master.zip) e então copie o código abaixo para o Seeeduino Lorawan.

```cpp
#define USE_GPS 1

#include "LoRaWan.h"

#ifdef USE_GPS
#include "TinyGPS++.h"
TinyGPSPlus gps;
#endif


void setup(void)
{

    char c;
#ifdef USE_GPS
    bool locked;
#endif

    SerialUSB.begin(115200);
    while(!SerialUSB);

    lora.init();
    lora.setDeviceReset();

#ifdef USE_GPS
    Serial2.begin(9600);     // open the GPS
    locked = false;

    // For S&G, let's get the GPS fix now, before we start running arbitary
    // delays for the LoRa section

    while (!gps.location.isValid()) {
      while (Serial2.available() > 0) {
        if (gps.encode(c=Serial2.read())) {
          displayInfo();
          if (gps.location.isValid()) {
//            locked = true;
            break;
          }
        }
//        SerialUSB.print(c);
      }

//      if (locked)
//        break;

      if (millis() > 15000 && gps.charsProcessed() < 10)
      {
        SerialUSB.println(F("No GPS detected: check wiring."));
        SerialUSB.println(gps.charsProcessed());
        while(true);
      } 
      else if (millis() > 20000) {
        SerialUSB.println(F("Not able to get a fix in alloted time."));     
        break;
      }
    }
#endif
}


void loop(void)
{
//displayInfo();
//delay(1000);
}

void displayInfo()
{
  SerialUSB.print(F("Location: ")); 
  if (gps.location.isValid())
  {
    SerialUSB.print(gps.location.lat(), 6);
    SerialUSB.print(F(","));
    SerialUSB.print(gps.location.lng(), 6);
  }
  else
  {
    SerialUSB.print(F("INVALID"));
  }

  SerialUSB.print(F("  Date/Time: "));
  if (gps.date.isValid())
  {
    SerialUSB.print(gps.date.month());
    SerialUSB.print(F("/"));
    SerialUSB.print(gps.date.day());
    SerialUSB.print(F("/"));
    SerialUSB.print(gps.date.year());
  }
  else
  {
    SerialUSB.print(F("INVALID"));
  }

  SerialUSB.print(F(" "));
  if (gps.time.isValid())
  {
    if (gps.time.hour() < 10) SerialUSB.print(F("0"));
    SerialUSB.print(gps.time.hour());
    SerialUSB.print(F(":"));
    if (gps.time.minute() < 10) SerialUSB.print(F("0"));
    SerialUSB.print(gps.time.minute());
    SerialUSB.print(F(":"));
    if (gps.time.second() < 10) SerialUSB.print(F("0"));
    SerialUSB.print(gps.time.second());
    SerialUSB.print(F("."));
    if (gps.time.centisecond() < 10) SerialUSB.print(F("0"));
    SerialUSB.print(gps.time.centisecond());
  }
  else
  {
    SerialUSB.print(F("INVALID"));
  }

  SerialUSB.println();
}

```

## 5. Baixo Consumo

A corrente mínima é 80uA (para Seeeduino LoRaWAN) em nossos testes.
Siga as etapas abaixo.

1. Remova o LED PWR (Se você não remover este LED, a corrente será > 2mA)
2. Remova o LED CHG
3. Envie o código abaixo para sua placa.

```
#include <LoRaWan.h>
#include <EnergySaving.h>

EnergySaving nrgSave;

void blink()
{
    for(unsigned char i = 0; i < 5; i ++)
    {
        digitalWrite(13,HIGH);
        delay(500);
        digitalWrite(13,LOW);
        delay(500);
    }
}

void setup()
{
    for(unsigned char i = 0; i < 26; i ++)      // important, set all pins to HIGH to save power
    {
        pinMode(i, OUTPUT);
        digitalWrite(i, HIGH);
    }

    lora.init();
    blink();    
    lora.setDeviceLowPower();
    blink();    
    nrgSave.begin(WAKE_EXT_INTERRUPT, 7, dummy);    // buton on D7 to wake up the board
    nrgSave.standby();
}

void loop()
{
    blink();
    nrgSave.standby();
}

void dummy(void)
{
    // do something
}

// END File
```

## 6. Atualizar firmware

Se você quiser verificar a versão da sua placa, envie o código abaixo para ela.

```cpp
void setup()
{
    Serial1.begin(9600);
    SerialUSB.begin(115200);
}

void loop()
{
    while(Serial1.available())
    {
        SerialUSB.write(Serial1.read());
    }
    while(SerialUSB.available())
    {
        Serial1.write(SerialUSB.read());
    }
}
```

Abra o seu Serial Monitor e DIGITE

```
AT+VER
```

Então você obterá a versão da sua placa.

:::note
    Se a sua placa Seeeduino LoRawan for a versão AM, ela não pode suportar o firmware V3, você precisa da versão DM para atualizar o firmware para acima de 3.0. Porque o firmware V3 é muito grande, a flash AM é muito pequena.
:::  

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/VER.png)

A versão do firmware é 2.0.10, se você quiser atualizar o firmware, algumas etapas precisam ser seguidas.

* Etapa 1. Copie e envie o código abaixo para a sua placa.

```c
// Update firmware to RHF76-052AM
#include <Arduino.h>

void setup()
{
    SerialDBG.begin(115200);
    SerialUSB.begin(115200);
}

void loop()
{
    while(SerialDBG.available())
    {
        SerialUSB.write(SerialDBG.read());
    }
    while(SerialUSB.available())
    {
        SerialDBG.write(SerialUSB.read());
    }
}

```

* Etapa 2. Remova a placa da porta USB e reconecte novamente, então pressione o Botão DFU; depois que o LED de modo Firmware começar a piscar, você pode ir para a próxima etapa.

* Etapa 3. Clique para baixar o firmware mais recente, que é um arquivo .bin.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/firmware_bin.png)](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052am-v2.0.10-20160923.ebin%202.bin)

* Etapa 4. Abra o PuTTy e conecte-se à placa

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/firmware_1.png)

:::tip
    Você pode encontrar o PuTTy mais recente aqui: [http://www.extraputty.com/download.php](http://www.extraputty.com/download.php)
:::

* Etapa 5. Depois de conectar sua placa ao PuTTy com sucesso, você verá o caractere 'C' sendo impresso continuamente no monitor.
Clique em **Files Transfer > Ymodem > Send** e selecione o arquivo .bin que baixamos na Etapa 4.

* Etapa 6. Então a atualização será iniciada.
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/firmware_4.png)

## FAQ

**P1: Seeeduino Lorawan deixou de ser reconhecido pelo PC**

**R1:** Pressione rapidamente duas vezes o botão de reset para recuperar a placa.

**P2：Seeeduino Lorawan não tem Examples > LoRaWAN**

**R2:** Clique [aqui](https://github.com/SeeedDocument/seeeduino_LoraWan) para obtê-lo.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/202001246 Seeeduino LoRaWAN Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* [Esquemáticos em Eagle](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/202001246 Seeeduino LoRaWAN Eagle.zip)
* [Arquivo Sketchup (3D)](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/Seeeduino LoRaWAN.skp)
* [Certificação CE do RHF 76-052](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/ce-rhf76-052.pdf)
* [Firmware RHF76-052 V2.0.10](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052am-v2.0.10-20160923.ebin 2.bin)
* [Firmware RHF76-052 V2.1.16AM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052am-v2.1.16-20171203.ebin.bin)
* [Firmware RHF76-052 V2.1.19AM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052am-v2.1.19-20180525.ebin.bin)
* [Firmware RHF76-052 V3.3.1DM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052dm-v3.3.1-20180707.ebin(1).bin)
* [Firmware RHF76-052 V3.5.13DM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052dm-v3.5.13-20190916.ebin.bin)
* [Datasheet do RHF76-052AM/DM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf-ds01500_rhf76-052_datasheet_v03.pdf)
* [Datasheet do chip de GPS L70B-M39](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/L70B-M39.pdf)
* [Azure IoT Edge LoRaWAN](https://github.com/Azure/iotedge-lorawan-starterkit/)
* [[RHF-PS01709]Especificação de Comandos AT LoRaWAN Classe ABC](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/AT-Command-Specificationv1.2.pdf)

## Projetos

**LoRa IoTea**: Um sistema automático de coleta de informações aplicado a plantações de chá. É parte da coleta de informações agrícolas inteligentes.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed" width={350} />

## Suporte Técnico & Discussão de Produto

   <br />
 Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
