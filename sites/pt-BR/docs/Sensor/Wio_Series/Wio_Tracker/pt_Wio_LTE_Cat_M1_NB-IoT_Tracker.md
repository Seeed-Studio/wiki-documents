---
title: Wio LTE Cat M1/NB-IoT Tracker
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio_LTE_Cat_M1_NB-IoT_Tracker/
slug: /Wio_LTE_Cat_M1_NB-IoT_Tracker
sku: 102991016
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-12'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Wio_LTE_Cat_M1_NB-IoT_Tracker/
---


![](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/img/NBIOT1.JPG)

O Wio LTE CAT M1/NB-IoT da Seeed é projetado para redes LPWAN (Low-Power Wide-Area Network) com módulo combo CAT M1 (eMTC) e NB-IoT. Além disso, possui um MCU ARM Cortex-M4 e módulo GNSS.

É uma placa de desenvolvimento compatível com Arduino que ajuda a rastrear praticamente qualquer coisa em movimento no planeta e então enviar esses dados sem fio. Ao integrar o conector Grove, o Wio LTE CAT M1/NB-IoT permite soluções de comunicação flexíveis com sistemas Grove.

O Wio LTE CAT M1/NB-IoT é bem adequado para projetos externos em que o dispositivo pode se conectar ao sistema de navegação por satélite e fornecer a localização em tempo real do item ao qual está anexado.

<p style={{}}><a href="https://www.seeedstudio.com/Wio-LTE-Cat-M1-NB1-p-3055.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

**Você está procurando o Twilio Developer Kit para T-Mobile Narrowband? Encontre a documentação [aqui](https://www.twilio.com/docs/wireless/nb)**

## Versão

| Versão do Produto            | Alterações                               | Data de Lançamento |
|-------------------------------|------------------------------------------|--------------------|
| Wio LTE Cat M1/NB-IoT v1.0    | Inicial                                  | 26 de maio de 2018 |

## 　Especificações

- Microcontrolador ARM Cortex-M4 com combo LTE CAT M1 e NB-IoT para
uso global
- GNSS com suporte a GPS/GLONASS
- Compatível com Arduino IDE
- 6 portas Grove on-board, suporta no máximo 180 módulos Grove
- Migração fácil a partir do Wio LTE CAT.1

## Recursos de Hardware

- STM32F405RG, ARM Cortex-M4, CPU
rodando até 168MHZ
- 1Mbytes de Flash
- 192+4KBytes de RAM
- Sistema
  - Tensão de operação: 3.3V
  - Baixo consumo: modos Sleep/Standby/Stop
  - Gerador CRC-32
- Conectividade LTE
  - LTE CAT M1 e NB-IoT, Cat M1 half-duplex (375 kb/s DL e UL) Cat NB1 half-duplex (27.2 kb/s DL, 62.5 UL)
  - Protocolos embutidos: TCP/UDP/FTP/HTTP/HTTPS/FTPS/TLS/MQTT/CoAP
- GNSS
  - GPS/GLONASS
  - 2.5m CEP (GPS), 4.0m CEP (GLONASS)
- Periféricos
  - 1 x USB para alimentação e DFU
  - Conector JST 1.0 para bateria
  - 3 botões: Botão de Reset do MCU, Botão de Boot (DFU) do MCU, Botão de Energia do EC21
  - Soquete 2 em 1 para Nano SIM e cartão TF
- Grove
  - 2 portas Digitais
  - 2 portas Analógicas
  - 1 x UART
  - 1 x I2C

:::tip
    Use módulos Grove para expandir sua aplicação. Há 6 conectores Grove na placa. Se esta é a primeira vez que você ouve falar de Grove, consulte [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/) para mais detalhes. Em resumo, Groves são centenas de sensores em um formato padronizado, que consistem em sensores, atuadores, displays e também comunicação.
:::

## Aplicações

- Cidade inteligente
- Medidor inteligente
- Energia inteligente
- Agricultura inteligente
- Varejo inteligente
- Cadeia de suprimentos inteligente
- Transporte inteligente
- Carro conectado
- Edifício conectado
- Saúde conectada
- Equipamentos esportivos
- Rastreamento de animais de estimação
- Segurança de propriedades
- Bicicleta compartilhada
- Sistema de posicionamento para transporte e logística
- Outros

## Visão Geral do Hardware

![](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/img/front.png)

![](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/img/back.png)

:::tip
    Se você quiser usar o conector Grove on-board, use digitalWrite(B10, HIGH) para ligar 3V3_B, exceto D38 que é alimentado por padrão. Caso contrário você não conseguirá fornecer energia aos módulos Grove.
:::

![](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/img/h3.png)

## Primeiros Passos

### Instalar driver USB

- **Usuários Windows**: A maioria das versões do Windows não carrega automaticamente o driver embutido para portas de comunicação USB. Você terá que baixar o driver USB da ST [STM32 Virtual COM Port Driver](https://www.st.com/en/development-tools/stsw-stm32102.html#get-software).

- **Usuários Mac OS X e Chromebook**: A placa vai apenas ser conectada e funcionar, sem drivers!

### Alterar driver DFU

**Para usuários Windows**:

- Passo 1. Pressione e segure o botão BOOT e conecte ao computador; você verá **STM32 Device in DFU Mode** no Gerenciador de Dispositivos, como abaixo.

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/before_driver_installation.png)

- Passo 2. Isso indica que você precisa usar o [zadig_xx.exe](https://files.seeedstudio.com/wiki/Wio_LTE/res/zadig_2.1.2.exe) para alterar o driver DFU de **STTub30** para **WinUSB**, como abaixo. Se não conseguirmos ver nenhuma informação no Zadig, clique em Options--> List All Devices e então selecione STM32 Virtual COM Ports.

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/zadig.png)

- Passo 3. Você verá o "STMicroelectronics Virtual COM Port" no Gerenciador de Dispositivos, como abaixo.

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/after_driver_installation.png)

### Brincar com Arduino

**1. Configuração de Software**

- Passo 1. Instale o Arduino IDE, versão recomendada acima de 1.8.0.
- Passo 2. Siga [How to Add Seeed boards to Arduino IDE](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/) para adicionar as placas Seeed STM32F4 ao gerenciador de placas do Arduino.
- Passo 3. Baixe a [WioLTE_Cat_NB1_Arduino_Library](https://github.com/lanselambor/WioLTE_Cat_NB1_Arduino_Library) do Github.
- Passo 4. Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar bibliotecas para o Arduino.
- Passo 5. Antes de enviar o sketch, pressione e segure os botões BOOT0 e RST, solte o botão RST e depois o botão BOOT0; dessa forma a placa entrará no modo STM BOOLARDER.
- Passo 6. Não escolha nenhuma porta Serial para enviar o sketch na aba Tools, apenas clique no ícone de upload.

**2. Brincar com o LED RGB On-board**

- Passo 1. Selecione File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->Seeed_WS2812b sketch.
- Passo 2. Pressione e segure o botão BOOT na parte de trás do Wio LTE Cat NB1 e conecte o USB ao PC.
- Passo 3. Veremos **STM BOOTLARDER** no Gerenciador de Dispositivos.
- Passo 4. Selecione Tools-->Boards-->Wio_Tracker_LTE.
- Passo 5. Mantenha a Porta COM em branco.
- Passo 6. Selecione Sketch-->Upload para enviar o código para o Wio_LTE.

```cpp

#include <Seeed_ws2812.h>
#include <ublox_sara_r4.h>

#define LEN_NUM 1

Ublox_sara_r4 ublox = Ublox_sara_r4();
WS2812 strip = WS2812(LEN_NUM, ublox.RGB_LED_PIN);

void setup() {
  // Set RGB LED power pin high
  ublox.turnOnRGBPower();
  strip.begin();
  strip.brightness = 20;
}

void loop() {  
  strip.RGBCycle(1000);   
  strip.rainbowCycle(20);
}

```

- Passo 7. Pressione **RST**, então você verá o LED RGB on-board funcionar.

**3. Brincar com GNSS**

- Passo 1. Insira o cartão Nano SIM no slot Nano SIM, próximo ao lado da placa de circuito impresso (PCB).
- Passo 2. Selecione File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->GNNS-->GNSS sketch.
- Passo 3. Pressione e segure o botão BOOT na parte de trás do Wio LTE Cat NB1 e conecte o USB ao PC.
- Passo 4. Veremos **STM BOOTLARDER** no Gerenciador de Dispositivos.
- Passo 5. Selecione Tools-->Boards-->Wio_Tracker_LTE.
- Passo 6. Mantenha a Porta COM em branco.
- Passo 7. Selecione Sketch-->Upload para enviar o código para o Wio LTE Cat NB1.
- Passo 8. Pressione o botão **RST** para habilitar a porta COM.

```cpp

#include <ublox_sara_r4_gnss.h>

UBLOX_SARA_R4_GNSS gnss = UBLOX_SARA_R4_GNSS();

void setup()  
{
  // Open GNSS module
  gnss.open_GNSS();
  delay(3000);
  SerialDebug.println("_Start");
}

void loop() {
  gnss.dataFlowMode();
}

```

- Passo 9. Use ferramentas de monitor serial para imprimir as mensagens seriais. **Por favor, não use o monitor serial do Arduino IDE! Isso pode fazer com que o próximo download falhe, mas reabrir o Arduino IDE pode corrigir esse problema**.
- Passo 10. Veremos as informações de lat, lon sendo impressas na tela.

```cpp
$GNRMC,,V,,,,,,,,,,N*4D
$GNVTG,,,,,,,,,N*2E
$GNGGA,,,,,,0,00,99.99,,,,,,*56
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GPGSV,1,1,01,30,,,44*7B
$GLGSV,1,1,00*65
$GNGLL,,,,,,V,N*7A
$GNRMC,,V,,,,,,,,,,N*4D
$GNVTG,,,,,,,,,N*2E
$GNGGA,,,,,,0,00,99.99,,,,,,*56
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GPGSV,1,1,04,07,,,43,17,,,38,18,,,39,30,,,44*70
$GLGSV,1,1,00*65
$GNGLL,,,,,,V,N*7A
$GNRMC,,V,,,,,,,,,,N*4D
$GNVTG,,,,,,,,,N*2E
$GNGGA,,,,,,0,00,99.99,,,,,,*56
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GPGSV,2,1,06,07,,,44,09,,,41,17,,,40,18,,,41*79
$GPGSV,2,2,06,28,,,40,30,,,45*73
$GLGSV,1,1,00*65
$GNGLL,,,,,,V,N*7A
```

**4. Brincar com Cartão SD**

- Passo 1. Insira o cartão micro SD no slot do cartão SD.
- Passo 2. Selecione File--> Examples-->SD-->CardInfo sketch.
- Passo 3. Pressione e segure o botão BOOT na parte de trás do Wio LTE Cat NB1 e conecte o USB ao PC.
- Passo 4. Veremos **STM BOOTLARDER** no Gerenciador de Dispositivos.
- Passo 5. Selecione Tools-->Boards-->Wio Tracker LTE.
- Passo 6. Mantenha a Porta COM em branco.
- Passo 7. Selecione Sketch-->Upload para enviar o código para o Wio_LTE.

```cpp
// include the SD library:
#include <SD.h>

// set up variables using the SD utility library functions:
Sd2Card card;
SdVolume volume;
SdFile root;

// change this to match your SD shield or module;
// Arduino Ethernet shield: pin 4
// Adafruit SD shields and modules: pin 10
// Sparkfun SD shield: pin 8
const int chipSelect = 43;

void setup()
{
 // Open serial communications and wait for port to open:
  // SerialUSB.begin(115200);
  //  while (!Serial) {
  //   ; // wait for serial port to connect. Needed for Leonardo only
  // }


  SerialUSB.print("\nInitializing SD card...");
  // On the Ethernet Shield, CS is pin 4. It's set as an output by default.
  // Note that even if it's not used as the CS pin, the hardware SS pin 
  // (10 on most Arduino boards, 53 on the Mega) must be left as an output 
  // or the SD library functions will not work. 
  pinMode(SS, OUTPUT);


  // we'll use the initialization code from the utility libraries
  // since we're just testing if the card is working!
  while (!card.init(SPI_HALF_SPEED, chipSelect)) {
    SerialUSB.println("initialization failed. Things to check:");
    SerialUSB.println("* is a card is inserted?");
    SerialUSB.println("* Is your wiring correct?");
    SerialUSB.println("* did you change the chipSelect pin to match your shield or module?");
  } 

  // print the type of card
  SerialUSB.print("\nCard type: ");
  switch(card.type()) {
    case SD_CARD_TYPE_SD1:
      SerialUSB.println("SD1");
      break;
    case SD_CARD_TYPE_SD2:
      SerialUSB.println("SD2");
      break;
    case SD_CARD_TYPE_SDHC:
      SerialUSB.println("SDHC");
      break;
    default:
      SerialUSB.println("Unknown");
  }

  // Now we will try to open the 'volume'/'partition' - it should be FAT16 or FAT32
  if (!volume.init(card)) {
    SerialUSB.println("Could not find FAT16/FAT32 partition.\nMake sure you've formatted the card");
    return;
  }


  // print the type and size of the first FAT-type volume
  uint32_t volumesize;
  SerialUSB.print("\nVolume type is FAT");
  SerialUSB.println(volume.fatType(), DEC);
  SerialUSB.println();

  volumesize = volume.blocksPerCluster();    // clusters are collections of blocks
  volumesize *= volume.clusterCount();       // we'll have a lot of clusters
  volumesize *= 512;                            // SD card blocks are always 512 bytes
  SerialUSB.print("Volume size (bytes): ");
  SerialUSB.println(volumesize);
  SerialUSB.print("Volume size (Kbytes): ");
  volumesize /= 1024;
  SerialUSB.println(volumesize);
  SerialUSB.print("Volume size (Mbytes): ");
  volumesize /= 1024;
  SerialUSB.println(volumesize);


  SerialUSB.println("\nFiles found on the card (name, date and size in bytes): ");
  root.openRoot(volume);

  // list all files in the card with date and size
  root.ls(LS_R | LS_DATE | LS_SIZE);
}


void loop(void) {

}

```

- Passo 8. Pressione o botão **RST** para habilitar a porta COM.
- Passo 9. Use ferramentas de monitor da porta COM para imprimir a mensagem serial. **Por favor, não use o monitor serial da IDE Arduino! Isso pode fazer com que o próximo download falhe, mas reabrir a IDE Arduino pode corrigir esse problema**.
- Passo 10. Abra o monitor serial, veremos as informações abaixo na tela.

```cpp
Initializing SD card...
Card type: SDHC

Volume type is FAT32

Volume size (bytes): 2689048576
Volume size (Kbytes): 2626024
Volume size (Mbytes): 2564

Files found on the card (name, date and size in bytes):
```

**5. Brincar com o RSSI da Rede**

- Passo 1. Selecione File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->RSSI sketch.
- Passo 2. Pressione e segure o botão BOOT na parte de trás do Wio LTE Cat NB1 e conecte o USB ao PC.
- Passo 3. Veremos **STM BOOTLARDER** no gerenciador de dispositivos.
- Passo 4. Selecione Tools-->Boards-->Wio_Tracker_LTE.
- Passo 5. Deixe a porta COM em branco.
- Passo 6. Selecione Sketch-->Upload para enviar o código para o Wio_LTE.

```cpp
#include <ublox_sara_r4.h>
#include <UART_Interface.h>

Ublox_sara_r4 ublox = Ublox_sara_r4();

void setup() {

  SerialDebug.println("Begin...");
  ublox.powerOn();
  while(false == ublox.Check_If_Power_On()){
    SerialDebug.println("Waitting for module to alvie...");
    delay(1000);
  }  
  SerialDebug.println("Power On O.K!");

  delay(100);
  check_with_cmd("AT+UGPIOC=23,10\r\n", "OK", CMD);
  check_with_cmd("AT+UGPIOC=16,2\r\n", "OK", CMD);
}

void loop() {
 int signal;
 if(ublox.getSignalStrength(&signal)) {
  SerialDebug.print("RSSI: ");
  SerialDebug.println(signal, DEC);
 } else {
  SerialDebug.print("Error");
 }

 delay(1000);

}

```

- Passo 7. Pressione **RST**, então você poderá ver as informações abaixo na tela.

```cpp
AT+CSQ

+CSQ: 99,99

OKRSSI: 99

AT+CSQ

+CSQ: 99,99

OKRSSI: 99

AT+CSQ

+CSQ: 99,99

OKRSSI: 99

AT+CSQ

+CSQ: 99,99
```

**6. Brincar com o Exemplo TCP do Arduino**

- Passo 1. Selecione File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->Network-->tcp_directLink sketch.
- Passo 2. Pressione e segure o botão BOOT na parte de trás do Wio LTE Cat NB1 e conecte o USB ao PC.
- Passo 3. Veremos **STM BOOTLARDER** no gerenciador de dispositivos.
- Passo 4. Selecione Tools-->Boards-->Wio_Tracker_LTE.
- Passo 5. Deixe a porta COM em branco.
- Passo 6. Selecione Sketch-->Upload para enviar o código para o Wio_LTE.

```cpp
#include <ublox_sara_r4.h>

Ublox_sara_r4 ublox = Ublox_sara_r4();

char *server = "www.arduino.cc";
uint16_t port = 80;
int sockId = -1;

void setup() {
 bool network_attached = false;

 Log_info("Begin...");

 ublox.powerOn();
 Log_info("Waitting for module to alvie...");
 while(false == ublox.isAlive()){
  Log(".");
  delay(100);
 } 
 Logln(); 

 Log_info("Initializing network..");
 if(!ublox.network_Init(120)) { 
  Log_error("Network initialize timeout.");
  while(1);
 }
 Log_info("APN: " + String(ublox._apn));
 Log_info("Local IP: " + String(ublox._str_ip));
 Log_info("Operator: " + String(ublox._operator));
 Log_info("Network attached.");

 // This method is import for setting transparent session
 // use disableDirectLinkMode() to use nontransparent session  
 ublox.enableDirectLinkMode();

 if(-1 == (sockId = ublox.createSocket(TCP))) {
  Log_error("Create socket error!");
  return;
 }
 if(!ublox.sockConnect(sockId, server, port)) {
  Log_error("connect to server failed.");
 }   
 Log_info("Sent TCP message in direct link mode.");

} 

void loop() {
 static uint8_t tries = 0;
 String str_msg = "ublox random number " + String(random(0,100));
 // String str_msg = "/txt HTTP"; 

 ublox.socketWrite((uint8_t *)str_msg.c_str(), (uint16_t)str_msg.length());
 Log_info("Send msg: " + str_msg);

 tries++;
 if(tries > 5) {
  if(ublox.sockClose(sockId)) {
   Log_info("Close socket.");
  }
  Log_info("Enter AT command mode.");
  while(true) AT_bypass();
 }

 delay(2000);
}


```

- Passo 7. Pressione **RST**, então você poderá ver as informações abaixo na tela.

```cpp
[INFO] Begin...
[INFO] Waitting for module to alvie...
...
[INFO] Initializing network..
.............................[INFO] APN: ctnb
[INFO] Local IP: 10.14.8.161
[INFO] Operator: 460 11 ????
[INFO] Network attached.
[INFO] Sent TCP message in direct link mode.
[INFO] Send msg: ublox random number 33
[INFO] Send msg: ublox random number 43
[INFO] Send msg: ublox random number 62
[INFO] Send msg: ublox random number 29
[INFO] Send msg: ublox random number 0
[INFO] Send msg: ublox random number 8
```

**7. Brincar com o Exemplo UDP do Arduino**

- Passo 1. Selecione File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->Network-->udp_directLink sketch.
- Passo 2. Pressione e segure o botão BOOT na parte de trás do Wio LTE Cat NB1 e conecte o USB ao PC.
- Passo 3. Veremos **STM BOOTLARDER** no gerenciador de dispositivos.
- Passo 4. Selecione Tools-->Boards-->Wio_Tracker_LTE.
- Passo 5. Deixe a porta COM em branco.
- Passo 6. Selecione Sketch-->Upload para enviar o código para o Wio_LTE.

```cpp
#include <ublox_sara_r4.h>

Ublox_sara_r4 ublox = Ublox_sara_r4();

char *server = "time.nist.gov";
uint16_t port = 8888;
int sockId = -1;

void setup() {
 bool network_attached = false;

 Log_info("Begin...");

 ublox.powerOn();
 Log_info("Waitting for module to alvie...");
 while(false == ublox.isAlive()) {
  Log(".");
  delay(100);
 }  
 Logln("");

 Log_info("Initializing network..");
 if(!ublox.network_Init(120)) { 
  Log_error("Network initialize timeout.");
  while(1);
 }
 Log_info("APN: " + String(ublox._apn));
 Log_info("Local IP: " + String(ublox._str_ip));
 Log_info("Operator: " + String(ublox._operator));
 Log_info("Network attached.");

 if(-1 == (sockId = ublox.createSocket(UDP))) {
  Log_error("Create socket error!");
 }
 Log("[INFO] Create socket id: ");
 Logln(sockId);

 ublox.enableDirectLinkMode();
 if(!ublox.sockConnect(sockId, server, port)) {
  Log_error("connect to server failed.");
 }
 Log_info("Sent UDP message in direct link mode.");



} 

void loop() {
 static uint8_t tries = 0;

 String str_msg = "ublox random number " + String(random(0,100));

 ublox.socketWrite((uint8_t *)str_msg.c_str(), (uint16_t)str_msg.length());
 Log_info("Send msg: " + str_msg);

 tries++;
 if(tries > 5) {
  if(ublox.sockClose(sockId)) {
   Log_info("Close socket.");
  }
  while(true) AT_bypass();
 }

 delay(2000);
}

```

- Passo 7. Pressione **RST**, então você poderá ver as informações abaixo na tela.

```
[INFO] Waitting for module to alvie...
...
[INFO] Initializing network..
....................[INFO] APN: ctnb
[INFO] Local IP: 10.178.48.90
[INFO] Operator: 460 11 ????
[INFO] Network attached.
[INFO] Create socket id: 0
[INFO] Sent UDP message in direct link mode.
[INFO] Send msg: ublox random number 33
[INFO] Send msg: ublox random number 43
[INFO] Send msg: ublox random number 62
[INFO] Send msg: ublox random number 29
[INFO] Send msg: ublox random number 0
[INFO] Send msg: ublox random number 8
[INFO] Close socket.
```

**8. Brincar com o Exemplo MQTT Subscribe do Arduino**

- Passo 1. Selecione File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->MQTTClient-->mqtt_sub sketch.
- Passo 2. Pressione e segure o botão BOOT na parte de trás do Wio LTE Cat NB1 e conecte o USB ao PC.
- Passo 3. Veremos **STM BOOTLARDER** no gerenciador de dispositivos.
- Passo 4. Selecione Tools-->Boards-->Wio_Tracker_LTE.
- Passo 5. Deixe a porta COM em branco.
- Passo 6. Selecione Sketch-->Upload para enviar o código para o Wio_LTE.

```cpp
#include <Arduino.h>

#include <math.h>

#include <ublox_sara_r4.h>
#include <ublox_sara_r4_mqtt.h>
#include <UART_Interface.h>

#define PRE_FIX  "[MQTT] "

MQTT mqtt;
Ublox_sara_r4 ublox = Ublox_sara_r4();

char *server = "test.mosquitto.org";
uint16_t port = 1883;

void setup() {
 Log_info("Begin...");

 ublox.powerOn();
 Log_info("Waitting for module to alive...");
 while(false == ublox.isAlive()) {
  Log(".");
  delay(100);
 }  
 Logln();

 Log_info("Initializing network..."); 
 if(!ublox.network_Init()) { 
  Log_error("Network initialize timeout.");
  return;
 }

 // Set MQTT server 
 if(!mqtt.setServer(server, port)) {
  Log_error("Set MQTT server failed");
  return;
 } else {
  Logln(PRE_FIX"Set MQTT server success.");
 }

 // Set will
 if(!mqtt.setWill("Heat", "ublox n/r410")) {
  Log_error("Set MQTT will failed");
  return;
 } else {
  Logln(PRE_FIX"Set MQTT will success.");
 }

 // Connect to server
 Logln(PRE_FIX"Connecting to server: " + String(server));
 while(!mqtt.connect()) {}
 Logln(CRLF PRE_FIX"Connected\n\r");
} 

void loop() 
{    
 static uint8_t tries = 0; 
 const char *topic = "Heat";
 String msg = String(random(2000, 3000)*1.0/100.0) + " degree";


 if(mqtt.publish(topic, msg.c_str())) {
  Logln(PRE_FIX" published Topic " + String(topic) + " Messagea " + msg); 
 } else {
  Log_error("MQTT publish failed");
  // while(true);
 }

 tries++;
 if(tries > 5)
 {
  if(mqtt.disconnect()) {
   Logln(PRE_FIX"Disconnect.");
  }
  Log_info("Enter AT command loop");
  while(true) AT_bypass();
 }

 delay(2000);
}

```

- Passo 7. Pressione **RST**, então você poderá ver as informações abaixo na tela.

**9. Brincar com o Exemplo MQTT Publish do Arduino**

- Passo 1. Selecione File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->MQTTClient-->mqtt_pub sketch.
- Passo 2. Pressione e segure o botão BOOT na parte de trás do Wio LTE Cat NB1 e conecte o USB ao PC.
- Passo 3. Veremos **STM BOOTLARDER** no gerenciador de dispositivos.
- Passo 4. Selecione Tools-->Boards-->Wio_Tracker_LTE.
- Passo 5. Deixe a porta COM em branco.
- Passo 6. Selecione Sketch-->Upload para enviar o código para o Wio_LTE.

```cpp
#include <Arduino.h>

#include <math.h>

#include <ublox_sara_r4.h>
#include <ublox_sara_r4_mqtt.h>
#include <UART_Interface.h>

#define PRE_FIX  "[MQTT] "

MQTT mqtt;
Ublox_sara_r4 ublox = Ublox_sara_r4();

char *server = "server name or IP";
uint16_t port = 1883;

void setup() {
 Log_info("Begin...");

 ublox.powerOn();
 Log_info("Waitting for module to alive...");
 while(false == ublox.isAlive()) {
  Log(".");
  delay(100);
 }  
 Logln();

 Log_info("Initializing network..."); 
 if(!ublox.network_Init()) { 
  Log_error("Network initialize timeout.");
  return;
 }

 // Set MQTT server 
 if(!mqtt.setServer(server, port)) {
  Log_error("Set MQTT server failed");
  return;
 } else {
  Logln(PRE_FIX"Set MQTT server success.");
 }

 // Set will
 if(!mqtt.setWill("Heat", "ublox n/r410")) {
  Log_error("Set MQTT will failed");
  return;
 } else {
  Logln(PRE_FIX"Set MQTT will success.");
 }

 // Connect to server
 Logln(PRE_FIX"Connecting to server: " + String(server));
 while(!mqtt.connect()) {}
 Logln(CRLF PRE_FIX"Connected\n\r");
} 

void loop() 
{    
 static uint8_t tries = 0; 
 const char *topic = "Heat";
 String msg = String(random(2000, 3000)*1.0/100.0) + " degree";


 if(mqtt.publish(topic, msg.c_str())) {
  Logln(PRE_FIX" published Topic " + String(topic) + " Messagea " + msg); 
 } else {
  Log_error("MQTT publish failed");
  // while(true);
 }

 tries++;
 if(tries > 5)
 {
  if(mqtt.disconnect()) {
   Logln(PRE_FIX"Disconnect.");
  }
  Log_info("Enter AT command loop");
  while(true) AT_bypass();
 }

 delay(2000);
}

```

- Etapa 7. Pressione **RST**, então você poderá ver as informações abaixo na tela.

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/res/WioLTE_Cat_NB1_Eagle-master.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recurso

- **[Eagle&PDF]** [WioLTE_Cat_NB1](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/res/WioLTE_Cat_NB1_Eagle-master.zip)

- **[Library]** [WioLTE_Cat_NB1_Arduino_Library](https://github.com/Seeed-Studio/WioLTE_Cat_NB1_Arduino_Library)

- **[Datasheet]** [AT Command](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/res/SARA-R4-SARA-N4_ATCommands_(UBX-17003787).pdf)

## Suporte Técnico & Discussão de Produto

 se você tiver qualquer problema técnico, envie o problema para o nosso [fórum](http://forum.seeedstudio.com/).
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
