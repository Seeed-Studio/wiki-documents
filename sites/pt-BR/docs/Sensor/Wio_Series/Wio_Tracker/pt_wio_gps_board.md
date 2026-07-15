---
title: Wio Tracker - GPS, BT3.0, GSM, Compatível com Arduino
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/wio_gps_board/
slug: /wio_gps_board
sku: 102990824
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-12'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/wio_gps_board/
---

![](https://files.seeedstudio.com/wiki/Wio_GPS_Board/images/Wio_GPS_Antanna.jpg)

O que é o Wio Tracker? O Wio Tracker é uma placa de desenvolvimento compatível com Arduino que ajuda você a rastrear qualquer coisa em movimento no planeta. Ao integrar GSM&GPRS assim como GPS&BeiDou em uma única placa, ele fornece uma solução tudo‑em‑um para o seu projeto de IoT ao ar livre.

Se você está acompanhando as últimas notícias sobre Low-Power Wide-Area Network (LPWAN), talvez saiba que 2016 é um ano especial porque surgiram novas tecnologias como LoRa e Sigfox, que impulsionaram notavelmente o desenvolvimento de WAN. O Wio Tracker tem semelhanças com LoRa e Sigfox, mas também é bastante diferente. Ele é mais adequado para rastreamento de movimentação ao ar livre e situações que exigem alta frequência de interação com o cliente e volume médio de dados, por exemplo bicicleta compartilhada, localização em logística, rastreamento de animais de estimação.

Comparado à solução tradicional de rastreamento por GPS, o Wio Tracker da Seeed é muito mais fácil de usar e personalizar para o mercado de IoT em rápida mudança. Como uma placa de desenvolvimento Grove amigável ao usuário, a aparência do Wio Tracker pode lembrar você do Wio Link, outro produto inicial da Seeed. Então você também pode encontrar 6 conectores Grove na placa. Como é uma placa compatível com Arduino, os usuários podem usar o Wio Tracker diretamente com a Arduino IDE.

Por que chamamos o Wio Tracker de solução? Porque ele realmente não é apenas uma placa. Na SeeedStudio, temos a capacidade de ajudar o cliente a personalizar o Wio Tracker para seu próprio projeto e concluir o projeto até a produção em massa. Como o Wio Tracker usa módulo padrão que já está em produção em massa, estamos prontos para produção em massa mesmo quando o cliente ainda está na fase de prototipagem.

Nós já preparamos tudo, a última coisa de que precisamos são seus projetos criativos, então se você estiver desenvolvendo um projeto de rastreamento de IoT ao ar livre, não hesite em usar o Wio Tracker!

:::caution
    Sempre conecte uma bateria Lipo de 3,7 V caso a alimentação via USB não seja suficiente.
:::
[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Wio-Tracker-GPS%2C-BT3.0%2C-GSM%2C-Arduino-Compatible-p-2831.html)

## Recursos

- Motor Multi-GNSS para GPS e BeiDou combinados, localização de maior precisão
- Tecnologia EPO™, fornecendo Extended Prediction Orbit previsto para acelerar o TTFF sem necessidade de servidor extra
- Com base em dados EPO™, a função QuecFastFix™ Online reduz ainda mais o TTFF em cold start, tornando o TTFF de cold start comparável ao de hot start
- Modo GLP (GNSS Low Power), 40% do consumo de energia do modo normal e ligeiramente menor precisão
- Period Mode, também reduz o consumo de energia controlando o tempo de suspensão
- Always Locate™ Technology, um algoritmo inteligente para economia de energia
- Easy™ (Embedded Assist System) Technology, predição de órbita auto‑gerada para correção de posicionamento instantânea, reduzindo o Time To First Fix (TTFF)
- LOCUS™ Technology, solução nativa de registrador de dados de navegação sem necessidade de host e memória flash externa
- Comando AT: GSM 07.07, 07.05 e comando AT aprimorado
- Bluetooth 3.0 com SPP e HFP-AG
- 6 conectores Grove
- Soquete 2 em 1 para Nano SIM e cartão TF
- Compatível com Arduino IDE
- Baixo consumo de energia e tamanho reduzido

### Módulo Quectel MC20

- Tamanho ultracompacto: 18,7 × 16,0 × 2,1 mm
- Constelação de navegação múltipla: GPS/ BeiDou/ QZSS
- Canais do receptor GNSS: 99 canais de aquisição/ 33 canais de rastreamento
- Poderosas funções AGPS: Autonomous AGPS EASY™/ Offline AGPS EPO™/ Online AGPS QuecFastFix
- LNA integrado para melhor sensibilidade GNSS (-167dBm@Tracking): permite usar antena GNSS passiva sem necessidade de LNA extra
- Recursos GNSS aprimorados: comando SDK/ AIC/ LOCUS/ GLP
- GSM quad-band: 850/900/1800/1900MHz
- Múltiplos protocolos de internet: TCP/ UDP/ PPP/ HTTP/ FTP/ SSL
- Suporta Voz, SMS, QuecFOTATM, DSSS, OpenCPU
- Suporta Bluetooth V3.0: perfis SPP & HFP-AG

:::caution
    Diferente da maioria das placas Arduino & Genuino, o Wio Tracker funciona em 3,3 V. A tensão máxima que os pinos de I/O podem suportar é 3,3 V. Aplicar tensões maiores que 3,3 V em qualquer pino de I/O pode danificar a placa.
:::

## Especificação

| Item|Função|Valor|
|--------------|-------------------------------------|-------|
|Microcontrolador |Processador|ATSAMD21G18A-MU, ARM Cortex-M0+, 48MHz|
||Memória Flash|256KB|
||SRAM|32KB|
||Tensão de Operação|3,3V|
||Corrente DC por pino de I/O|7 mA|
||Frequência de Clock |48 MHz|
|GSM/GPRS|GSM|850／900／1800／1900MHz, Classe 4 (2W @850／900MHz), Classe 1 (1W @1800／1900MHz)|
|||Comando AT: GSM 07.07, 07.05 e comando AT aprimorado|
|||Baixo consumo de energia: 1,2mA@DRX=5|
||GPRS|Classe Multi-slot GPRS 12: Down até 85,6kbps, Up até 85,6kbps|
|||Protocolo: TCP／UDP／FTP／HTTP／PPP／SSL|
||SMS|Mensagem ponto a ponto, transmissão de SMS, modo Texto e PDU|
||Áudio|Cancelamento de eco, eliminação de ruído|
||Bluetooth|Bluetooth 3.0: SPP, HFP-AG|
|GNSS|Sistema|GPS L1 1575,42MHz, BeiDou B1 1561,10MHz|
||Precisão|&lt;2,5 m CEP|
||Tecnologia|EASY/LOCUS/AlwaysLocate/EPO/GLP/AIC|
|Periférico|Grove|2 x Porta Digital Grove|
|||2 x Porta Analógica|
|||1 x UART|
|||1 x I2C|
||Antena|Antena GSM|
|||Antena Bluetooth|
|||Antena GNSS|
||Outros|USB: Alimentação e envio de programa|
|||Conector JST 1.0 para bateria|
|||Conector de Áudio 3,5mm|
|||Botão de Alimentação GSM, Botão de Reset|
|||1 x LED RGB de Usuário SK6812|
|||Interface para Alto-falante|
|||Soquete 2 em 1 para Nano SIM e cartão TF|
|Tamanho|Comprimento|54,7mm|
||Largura|48,2mm|
||Peso||

## Ideias de Aplicação

- Transporte inteligente
- Rastreador de animais de estimação
- Equipamentos para esportes ao ar livre
- Gravador de condução
- Dispositivo vestível
- Segurança patrimonial

:::tip
    Use módulos Grove para expandir sua aplicação
:::
Há 6 conectores Grove na placa. Se esta é a primeira vez que você ouve falar de Grove, por favor veja [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/) para mais detalhes.
Em resumo, Groves são centenas de sensores em formato padrão, que consistem em sensores, atuadores, displays e também comunicação.

## Visão Geral de Hardware

![](https://files.seeedstudio.com/wiki/GPS_Tracker/images/GPS_Tracker_v1.2_top.png)

![](https://files.seeedstudio.com/wiki/GPS_Tracker/images/GPS_Tracker_v1.2_bottom.png)

:::tip
    Se você quiser usar o conector Grove on-board, use digitalWrite(12, HIGH) para ligar o 3V3_B. Caso contrário, você não poderá fornecer energia aos módulos Grove.
:::

## Mapa de Pinos

|Nome do Pino|Interrupção Externa|PWM|Entrada Analógica|Saída Analógica|Função|
|--------|-----------|---|---------|----------|--------|
|RX      |SIM        |SIM|         |          |Grove UART|
|TX      |SIM        |SIM|         |          |Grove UART|
|D2      |SIM        |SIM|         |          |Grove Digital|
|D3      |SIM        |SIM|         |          |Grove Digital|
|D4      |SIM        |   |         |          |Grove Digital|
|D5      |SIM        |SIM|         |          |Grove Digital|
|D6      |SIM        |   |         |          |Controle de LED do Usuário|
|D7      |SIM        |   |         |          |Alimentação do MC20|
|D10     |SIM        |SIM|         |          |LED do Usuário|
|D11     |SIM        |SIM|         |          |Verificar Fone de Ouvido|
|D12     |SIM        |SIM|         |          |Controle de Alimentação Grove|
|D13     |SIM        |SIM|         |          |Botão de Alimentação GSM|
|SDA     |SIM        |   |         |          |Grove I2C|
|SCL     |SIM        |   |         |          |Grove I2C|
|A0      |SIM        |   | SIM     |  SIM     |Grove Analógico|
|A1      |SIM        |   | SIM     |  SIM     |Grove Analógico|
|A2      |SIM        |   | SIM     |  SIM     |Grove Analógico|
|A3      |SIM        |   | SIM     |  SIM     |Grove Analógico|
|A4      |SIM        |   | SIM     |          |Verificar bateria|

:::note
    Todos os pinos podem atuar como Entrada e Saída Digital
:::

## Primeiros Passos - Arduino IDE

:::note
    Este capítulo é baseado em Win10 e Arduino IDE v1.6.0
:::
Primeiro você precisa instalar a versão mais recente da Arduino IDE e [ADICIONAR Seeeduino SAMD à sua Arduino IDE](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/).

### Instalar o Driver (Para Windows)

Ao inserir a placa pela primeira vez, você deverá obter um dispositivo USB COM chamado Wio Tracker que precisa de instalação de driver. Clique [aqui](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/driver.zip) para baixar o driver para a placa.

Para garantir que o driver foi instalado com sucesso, abra o Gerenciador de Dispositivos e verifique se **Wio Tracker** existe.

### Instalar a biblioteca do Wio Tracker (Para Windows, Linux e Mac)

Clique [aqui](https://github.com/Seeed-Studio/Seeed_Wio_GPS_Board/archive/master.zip) para baixar a biblioteca (arquivo zip) do Wio Tracker e importe a biblioteca zip para sua Arduino IDE. Se você é novo nisso, clique [aqui](https://www.arduino.cc/en/Guide/Libraries#toc4) para mais informações.

### Blink

Diferente de outras placas, há um LED de Usuário SK6812 no Wio Tracker, que é uma fonte de luz LED de controle inteligente e semelhante ao ws2812b. Agora vamos enviar nosso primeiro demo - Blink para o Wio Tracker, que apresentará como usar o LED de Usuário.

Primeiro, precisamos instalar a [Adafruit NeoPixel Library](https://github.com/adafruit/Adafruit_NeoPixel/archive/master.zip) (para LED ws2812b) e importá-la para a Arduino IDE.

Em seguida, abra sua Arduino IDE e clique em **File > Examples > MC20_GPS_Traker > Blink** para abrir o sketch ou copie o código abaixo:

```c
#include "MC20_Arduino_Interface.h"
#include <Adafruit_NeoPixel.h>

#define RGBPOWER     6          //To use User LED, D6 should be HIGH.
#define RGBPIN       10
#define LED_NUM      1

Adafruit_NeoPixel pixels = Adafruit_NeoPixel(LED_NUM, RGBPIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pinMode(RGBPOWER, OUTPUT);
  digitalWrite(RGBPOWER, HIGH);
  pixels.begin(); // This initializes the NeoPixel library.
}

void loop() {

  // For a set of NeoPixels the first NeoPixel is 0, second is 1, all the way up to the count of pixels minus one.
  // pixels.Color takes RGB values, from 0,0,0 up to 255,255,255
  pixels.setPixelColor(0, pixels.Color(0,0,100)); // Moderately bright blue color.
  pixels.show(); // This sends the updated pixel color to the hardware.
  delay(1000);   // Wait for 1 second
  pixels.setPixelColor(0, pixels.Color(0,0,0));   // Turn off the led.
  pixels.show();
  delay(1000);
}
```

E então,

- Clique em **Tools > Board > Wio Tracker**
- Clique em **Tools > Port** para selecionar uma porta correta. (*Não escolha COM1*)

Em seguida, clique no botão **Upload** no canto superior esquerdo da IDE do Arduino; alguns segundos depois o sketch será enviado com sucesso.

Se o envio for bem-sucedido, você deverá ver algumas informações em vermelho e verá o LED de usuário piscando em azul.

### Verificar bateria

O Wio Tracker é projetado para rastrear coisas em movimento ao ar livre. Assim, você pode alimentar a placa por meio de uma bateria Lipo de 3,7 V com conector JST1.0 e verificar facilmente a tensão da sua bateria.

:::caution
    Certifique-se de que os polos positivo e negativo da sua bateria estejam conectados corretamente, caso contrário a placa poderá ser danificada.
:::
O pino de status da bateria foi conectado ao A4, o que permite medir a tensão da bateria via código.

Abra sua IDE do Arduino e clique em **File > Examples > MC20_GPS_Traker > Check_Battery** para abrir o sketch ou copie o código abaixo:

```c
#include "MC20_Arduino_Interface.h"

const int pin_battery_voltage = A4;

void setup() {
    SerialUSB.begin(115200);
}

void loop() {

    int a = analogRead(pin_battery_voltage);
    float v = a/1023.0*3.3*2.0;        // there's an 10M and 10M resistor divider
    SerialUSB.print("The voltage of battery is ");
    SerialUSB.print(v, 2);
    SerialUSB.println(" V");
    delay(1000);
}
```

### Use módulos Grove para expandir sua aplicação

Para usar 6 conectores Grove no Wio Tracker, precisamos usar `digitalWrite(12, HIGH)` para ligar o 3V3_B e alimentar os módulos Grove (D12 é definido como LOW por padrão para reduzir o consumo).

- O código a seguir mostra como usar módulos Grove analógicos e digitais:

Abra sua IDE do Arduino e clique em **File > Examples > MC20_GPS_Traker > Button_LightSensor** para abrir o sketch ou copie o código abaixo:

```c
#include "MC20_Arduino_Interface.h"

#define GrovePowerPin   12
#define LightSensorPin  A0
#define ButtonPin       2


void setup() {
  SerialUSB.begin(115200);
  pinMode(ButtonPin, INPUT);
  pinMode(GrovePowerPin, OUTPUT);
  // write high to grove power pin to enable all the Grove ports,
  // or only Grove D2 port is usable.
  digitalWrite(GrovePowerPin, HIGH);   
}

void loop() {
    // print analog data when the button is pressed
    if (digitalRead(ButtonPin)) {
        SerialUSB.print("The value of light sensor:");
        SerialUSB.println(analogRead(LightSensorPin));
    }
    delay(500);
}   
```

- O código a seguir mostra como usar a porta Grove UART:

```c
#define GrovePowerPin   12

void setup() {
  pinMode(GrovePowerPin, OUTPUT);
  digitalWrite(GrovePowerPin, HIGH);    //power Grove
  //SerialUSB.begin(115200);
  SerialDBG.begin(115200);    //set Grove UART baud rate 115200
}

void loop() {  
  //SerialUSB.println("Grove UART is sending message");
  SerialDBG.println("This is Grove UART");
  delay(1000);
}
```

Use [USB To Uart](https://www.seeedstudio.com/USB-To-Uart-5V%263V3-p-1832.html) para ler os dados da porta Grove UART.

:::caution
    Se tanto SerialUSB quanto SerialDBG forem usados no código, abra a porta COM do SerialUSB ao utilizá-lo, caso contrário o SerialDBG não funcionará.
:::

### GNSS

O módulo MC20 fornece o conjunto de comandos AT para que o MCU se comunique com seus módulos GSM/GPRS, GNSS e Bluetooth.

E nós instalamos uma biblioteca bem escrita para o Wio GPS; para aplicações simples você nem precisa saber muito sobre como usar os comandos AT, que são complexos e difíceis de ler.

O exemplo a seguir mostra como ler longitude e latitude e imprimi-las no Serial Monitor. Observe que o Wio Tracker deve ser colocado ao ar livre para obter sinal de GPS. E este exemplo precisa de um cartão SIM no Wio Tracker; as imagens a seguir mostram como instalar/desinstalar um cartão SIM:

![](https://files.seeedstudio.com/wiki/Wio_GPS_Board/images/insertsim.jpg)

![](https://files.seeedstudio.com/wiki/Wio_GPS_Board/images/pullsim.jpg)

Abra sua IDE do Arduino e clique em **File > Examples > MC20_GPS_Traker > MC20_GNSS > GNSS_Show_Coordinate** para abrir o sketch ou copie o código abaixo:

```c
#include "MC20_Common.h"
#include "MC20_Arduino_Interface.h"
#include "MC20_GNSS.h"


GNSS gnss = GNSS();

void setup() {
  SerialUSB.begin(115200);
  // while(!SerialUSB);

  gnss.Power_On();
  SerialUSB.println("\n\rPower On!");

  while(!gnss.open_GNSS()){
    delay(1000);
  }

  SerialUSB.println("Open GNSS OK.");
}

void loop() {
  // gnss.dataFlowMode();

  if(gnss.getCoordinate()){
    SerialUSB.print("GNSS: ");
    SerialUSB.print(gnss.longitude, 6);
    SerialUSB.print(",");
    SerialUSB.println(gnss.latitude, 6);  
  } else{
    SerialUSB.println("Error!");
  }

  delay(1000);
}
```

### Leitura de Mensagens SMS

O exemplo a seguir mostra como ler mensagens SMS no Wio Tracker. É necessário um cartão Nano SIM neste exemplo.

Abra sua IDE do Arduino e clique em **File > Examples > MC20_GPS_Traker > MC20_SMSRead** para abrir o sketch ou copie o código abaixo:

```c
#include "MC20_Common.h"
#include "MC20_Arduino_Interface.h"

#define RGBPIN 10

char phone[32];
char dateTime[32];
char buffer[64];
int i = 0;
char *s = NULL;
int inComing = 0;

GPSTracker gpsTracker = GPSTracker();

void setup() {
  // MC20_init();
  pinMode(RGBPIN, OUTPUT);
  digitalWrite(RGBPIN, LOW);
  SerialUSB.begin(115200);
  // while(!SerialUSB);

  gpsTracker.Power_On();
  SerialUSB.println("Power On!");

  // gpsTracker.deleteSMS(1);

}

void loop() {

  if(MC20_check_readable()){
    inComing = 1;
  }else{
    delay(1000);
  }

  if(1 == inComing){
    MC20_read_buffer(buffer, 64);
    SerialUSB.println(buffer);

    if(NULL != (s = strstr(buffer,"+CMTI: \"SM\""))) { //SMS: $$+CMTI: "SM",24$$
        char message[128];
        int messageIndex = atoi(s+12);
        gpsTracker.readSMS(messageIndex, message,128);
        SerialUSB.print("Recv SMS: ");
        SerialUSB.println(message);
     }
     MC20_clean_buffer(buffer,64);  
     inComing = 0;
  }

}
```

### Conexão Bluetooth

Também é muito fácil conectar ao seu dispositivo Bluetooth no Wio Tracker. Abra sua IDE do Arduino e clique em **File > Examples > MC20_GPS_Traker > MC20_BlueTooth > BT_FastConnect** para abrir o sketch ou copie o código abaixo.

Depois altere o deviceName do seu dispositivo Bluetooth; o Wio Tracker irá conectá‑lo automaticamente.

```c
#include "MC20_Common.h"
#include "MC20_BT.h"

// GPSTracker gpsTracker = GPSTracker();
BlueTooth bt = BlueTooth();
int bt_state = -1;
char *deviceName = "N-612";


void setup() {
  SerialUSB.begin(115200);
  while(!SerialUSB);

  bt.Power_On();
  SerialUSB.println("\n\rMC20 power On!");
  bt.BTPowerOn();
  SerialUSB.println("\n\rBT power On!");

  while(IDLE != (bt_state = bt.getBTState())){
    SerialUSB.print("State: ");
    SerialUSB.println(bt_state);
    delay(1000);
  }

  bt.BTFastConnect(deviceName, HFG_PROFILE);
}

void loop() {
  /* Debug */
  if(SerialUSB.available()){
    serialMC20.write(SerialUSB.read());
  }
  if(serialMC20.available()){     
    SerialUSB.write(serialMC20.read());
  }
}
```

### Cartão SD

- **Passo 1.** Conecte o cartão SD à placa Wio GPS.
- **Passo 2.** Use o cabo USB para conectar a placa Wio GPS ao PC.
- **Passo 3.** Abra sua IDE do Arduino, selecione **Tools** -> **Board** -> **Wio GPS board**.
- **Passo 4.** Clique em **File > Examples > Seeed_Wio_GPS_Board\SD_Card_Test_DumpFile** para abrir o sketch ou copie o código abaixo.
- **Passo 5.** Envie o código para a placa Wio GPS; ele mostra como ler um arquivo do cartão SD usando a biblioteca SD e enviá‑lo pela porta serial.

```cpp
/*
  SD card file dump

 This example shows how to read a file from the SD card using the
 SD library and send it over the serial port.

 The circuit:
 * SD card attached to SPI bus as follows:
 ** MOSI - pin 11
 ** MISO - pin 12
 ** CLK - pin 13
 ** CS - pin 4 (for MKRZero SD: SDCARD_SS_PIN)

 created  22 December 2010
 by Limor Fried
 modified 9 Apr 2012
 by Tom Igoe

 This example code is in the public domain.

 */

#include <SPI.h>
#include <SD.h>

const int chipSelect = 4;
char* fileName = "gps.txt";

void setup() {
  // Open serial communications and wait for port to open:
  SerialUSB.begin(115200);
  while (!SerialUSB) {
    ; // wait for serialUSB port to connect. Needed for native USB port only
  }


  SerialUSB.print("Initializing SD card...");

  // see if the card is present and can be initialized:
  if (!SD.begin(chipSelect)) {
    SerialUSB.println("Card failed, or not present");
    // don't do anything more:
    return;
  }
  SerialUSB.println("card initialized.");

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  File dataFile = SD.open(fileName);

  // if the file is available, write to it:
  if (dataFile) {
    while (dataFile.available()) {
      SerialUSB.write(dataFile.read());
    }
    dataFile.close();
  }
  // if the file isn't open, pop up an error:
  else {
    SerialUSB.println("error opening datalog.txt");
  }
}

void loop() {
}
```

## Visualizador online do esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPS_Tracker/resources/GPS_Tracker_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [Esquemáticos em Eagle](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/GPS_Tracker_Eagle.zip)
- [Arquivo Sketchup (3D)](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/GPS_Tracker.skp)
- [Nota de Aplicação GSM Bluetooth](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_GSM_BT_Application_Note_V1.2(C).pdf)
- [Manual de Comandos AT para Arquivos GSM](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_GSM_FILE_AT_Commands_Manual_V1.5.pdf)
- [Manual de Comandos AT do MC20](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_MC20_AT_Commands_Manual_V1.1.pdf)
- [Guia de Aplicação MC20 GNSS AGPS](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_MC20_GNSS_AGPS_ApplicationGuide_V1.1.pdf)
- [Manual de Comandos AT MC20 GNSS](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_MC20_GNSS_AT_Commands_Manual_V1.1.pdf)
- [Especificação de Protocolo MC20 GNSS](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_MC20_GNSS_Protocol_Specification_V1.0.pdf)

## Suporte Técnico e Discussão de Produtos

Se você tiver qualquer problema técnico, envie-o para o nosso [forum](http://forum.seeedstudio.com/).
Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
