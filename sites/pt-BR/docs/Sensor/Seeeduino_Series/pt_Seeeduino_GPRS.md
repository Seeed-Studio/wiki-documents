---
description: Seeeduino GPRS
title: Seeeduino GPRS
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_GPRS
sku: 102010016
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-01'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino_GPRS/
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/seeeduino_gprs_cover.jpg)

Seeeduino GPRS é um painel de IoT, você pode se conectar à Internet através da rede sem fio GPRS com ele. Fazer/atender chamadas de voz e enviar/receber mensagens SMS também é suportado. Enquanto isso, o Seeeduino GPRS suporta função de rádio FM e comunicação por bluetooth. Seeeduino GPRS é baseado em Atmage32U4 e SIM800H. Atmage32U4 é um microcontrolador e é compatível com Arduino. SIM800H suporta Quad-band 850/900/1800/1900MHz, ele pode transmitir informações de voz, SMS e dados com baixo consumo de energia. SIM800H também traz alguns recursos extras como, por exemplo, Bluetooth e rádio FM. Ele é projetado com técnica de economia de energia de modo que o consumo de corrente seja tão baixo quanto 0.1mA em modo de repouso.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Seeeduino-GPRS-p-1909.html)

## Ideias de Aplicação

* Internet das Coisas  
* Casa Inteligente
* Design Vestível
* Telefone DIY
* Industrial

Aqui estão alguns projetos divertidos para sua referência.

|Arduino GPS/GSM Tracker|Arduino Phone 2.0|Arduino GPRS Weather Station|
|----------|----------|---------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/example_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/example_2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/example_3.jpg)|
|[Make it Now](https://www.instructables.com/id/Arduino-GPSGSM-Tracker/)|[Make it Now](https://www.instructables.com/id/ArduinoPhone-20-an-Open-Source-Mobile-Phone-Based-/)|[Make it Now](https://www.instructables.com/id/Arduino-GPRS-Weather-Station-Part-1/)|

## Características

* Compatível com Arduino Leonardo padrão
* Quad-Band 850/900/1800/1900MHz
* Conector para fone de ouvido
* Suporte conveniente para cartão SIM externo
* Controle via comandos AT
* Suporta Bluetooth
* Suporta rádio FM
* Corrente < 2A
* Bootloader Arduino Leonardo

## Especificação

**Modelo SIM800H**

|Parâmetro|Valor|
|------------|------------|
|Modelo GPRS|SIM800H|
|Quad-Band|850/900/1800/1900MHz|
|Classe multi-slot GPRS|12/10|
|Classe de estação móvel GPRS|B|
|Padrão de fase GSM|2/2+|
|FM|76~109MHz|
|Bluetooth|Compatível com 3.0+EDR|
|Faixa de tensão de alimentação|3.4 ~ 4.4V|

**Microcontrolador AVR Arduino**

|Parâmetro|Valor|
|------------|-------------|
|Microcontrolador|ATmega32u4|
|Memória Flash|32KB|
|SRAM|2.5kB|
|EEPROM|1kB|
|Frequência de clock|16MHz|
|Tensão de operação|5V|
|Pinos de E/S digitais|20|
|Canais PWM|7|
|Canais de entrada analógica|12|

## Visão Geral do Hardware

As imagens abaixo mostram uma visão geral dos recursos de hardware do Seeeduino GPRS. O pin-out e as funções alternativas de vários pinos do Seeeduino GPRS são mostrados no diagrama de pin-out. Isso pode ser usado como uma referência rápida.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/seeeduino_gprs_hardware2.png)

* **Chave de Alimentação**
Chave deslizante usada para alterar o nível lógico e a saída de energia da placa para 5V ou 3.3V.
Hoje em dia muitos sensores novos e excelentes estão sendo desenvolvidos para funcionar com 3.3V, com outras placas duino você precisaria colocar um conversor de nível lógico entre a placa e esses sensores, com a placa Seeeduino GPRS tudo o que você precisa fazer é deslizar a chave!

* **Entrada DC**
A entrada DC permite que sua placa Seeeduino GPRS seja alimentada por um adaptador de tomada para que você possa fornecer mais energia ao seu projeto, se necessário, por exemplo, ao usar motores DC ou outros dispositivos de alta potência. A entrada DC pode ser de 9V-12V e a corrente de pico é 2A.
Mas há um bug de hardware no Seeeduino GPRS que você precisa notar. Quando há uma alimentação de energia externa, há um curtíssimo 6V no pino de 5V, que dura cerca de 2ms. **É arriscado destruir o dispositivo conectado a 5V.** Portanto, recomendamos que você não use a entrada DC para alimentar o sistema. E já consideramos corrigir o bug, mas isso não sairá muito em breve.

* **Breakout para SIM800h**
Você pode depurar o Sim800h por esta interface.

* **ICSP**
Esta é a conexão ICSP para o ATMEGA32U4-MUR, ela está localizada na posição padrão ICSP/SPI para hardware compatível com Arduino Uno, Due, Mega e Leonardo (por exemplo, shields) que possam usar este conector. Os pinos SPI nesta porta: MISO, SCK e MOSI, note que esses pinos NÃO estão conectados a D11~D13.

* **LED PWR2**
Indicação de alimentação do SIM800H

* **LED STA**
Indicação de estado de operação

* **LED NET**

|Status|Comportamento do SIM800H|
|------------|-------------|
|Desligado|SIM800H não está em execução|
|64ms ligado/800ms desligado|SIM800H não registrou na rede|
|64ms ligado/3000ms desligado|SIM800H registrado na rede|
|64ms ligado/300ms desligado|Comunicação do SIM800H está estabelecida|

## Instalar o Driver

Antes de tudo, você precisa:

* **Obter um cabo Micro-USB**
Você precisa primeiro de um cabo Micro-USB; o cabo de dados de um telefone Android serve bem.
Se você não conseguir encontrar um, pode comprar um [aqui](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100).

* **Conectar a placa**
Conecte a placa Arduino ao seu computador usando o cabo USB. O LED verde de alimentação (rotulado **PWR**) deve acender.

**Para Windows**

:::note
Este driver está disponível para Windows XP, Windows Vista, Windows 7, Windows 8/8.1 e Windows 10.
:::
[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/download_driver.png)](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver/archive/master.zip)

* Conecte sua placa e aguarde o Windows iniciar o processo de instalação do driver. Após alguns instantes, o processo falhará, apesar dos melhores esforços.
* Clique no Menu Iniciar e abra o Painel de Controle.
* No Painel de Controle, vá para Sistema e Segurança. Em seguida, clique em Sistema. Quando a janela Sistema aparecer, abra o **Gerenciador de Dispositivos**.
* Procure em Portas (COM & LPT). Você deverá encontrar uma porta aberta chamada "Seeeduino GPRS". Se não houver seção COM & LPT, procure em "Outros Dispositivos" por "Dispositivo Desconhecido".
* Clique com o botão direito na porta "Seeeduino GPRS" e escolha a opção "Atualizar Software de Driver".
* Em seguida, escolha a opção "Procurar software de driver no computador".
* Por fim, navegue até o arquivo de driver chamado "seeed_usb_serial.inf" e selecione-o
* O Windows concluirá a instalação do driver a partir daí.

**Para Mac OSX**

Você não precisa instalar nenhum driver.

## Primeiros Passos

:::note
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino)
:::

Antes de tudo, você precisa instalar um Software Arduino.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Inicie o aplicativo Arduino**

Clique duas vezes no aplicativo Arduino (arduino.exe) que você baixou anteriormente.

:::note
Se o Software Arduino carregar em um idioma diferente, você pode alterá-lo na caixa de diálogo de preferências. Veja a página [Arduino Software (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para detalhes.
:::

**Abra o exemplo Blink**

Abra o sketch de exemplo de piscar LED: **File > Examples >01.Basics > Blink**.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png)

**Selecione sua placa**

Você precisará selecionar a entrada no menu **Tools > Board** que corresponde ao seu Arduino.
Selecionando um **Arduino Leonardo**. Se você não conseguir encontrar o Arduino Leonardo, verifique [How to Add Seeed boards to Arduino IDE](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/seeeduino_gprs_select_board.png)

**Selecione sua porta serial**

Selecione o dispositivo serial da placa Arduino no menu Tools | Serial Port. Provavelmente será COM3 ou superior (**COM1** e **COM2** são geralmente reservadas para portas seriais de hardware). Para descobrir, você pode desconectar sua placa Arduino e reabrir o menu; a entrada que desaparecer deve ser a placa Arduino. Reconecte a placa e selecione essa porta serial.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/seeeduino_gprs_select_com.png)

:::note
No Mac, deve ser algo como **/dev/tty.USBmodem**.
:::
**Envie o programa**

Agora, simplesmente clique no botão "Upload" no ambiente. Aguarde alguns segundos e, se o envio for bem-sucedido, a mensagem "Done uploading." aparecerá na barra de status.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png)

Alguns segundos após o término do envio, você deverá ver o LED do pino 13 (LED Pin 13) na placa começar a piscar (em verde). Se isso acontecer, parabéns! Você colocou o Arduino em funcionamento. Se tiver problemas, consulte as sugestões de solução de problemas.

## Primeiros Passos no Linux

Para usar no Linux, acesse [Installing Arduino on Linux](http://playground.arduino.cc/Learning/Linux)

**Função GPRS**

Seeeduino GPRS oferece a função de um telefone celular, como fazer/receber chamadas de voz, enviar/receber SMS, fazer uma conexão TCP, etc. Aqui está a [Seeeduino GPRS Library](https://github.com/Seeed-Studio/Seeeduino_GPRS), faça o download para o seu computador para usar o Seeeduino GPRS. Aqui está uma breve introdução.

Para começar a brincar com o Seeeduino GPRS, são necessários um fone de ouvido e um cartão SIM.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/500px-Seeeduino_gprs_t.jpg)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/500px-Seeeduino_gprs_b.jpg)

**Para fazer uma chamada**

Abra o sketch de exemplo **GPRS_CallUp** em libraries/Seeeduino_GPRS/example/GPRS_CallUp/, substitua o número de telefone na função callUp, depois compile o sketch e envie-o para sua placa. Seeeduino GPRS chamará o número especificado no código.

```
#include <gprs.h>
#include <SoftwareSerial.h>

GPRS gprs;

void setup() {
    Serial.begin(9600);
    Serial.println("GPRS - Call up Test...");
    gprs.preInit();//power on SIM800
    delay(1000);
    while(0 != gprs.init()) { //gprs init
        delay(1000);
        Serial.print("init error\r\n");
    }
    Serial.println("Init success, start to call...");
    gprs.callUp("150****9566");
}

void loop() {
    //nothing to do
}

```

**Para enviar um SMS**

Assim como para fazer chamadas, um SMS pode ser enviado com o Seeeduino GPRS. Abra o sketch de exemplo **GPRS_SendSMS** em libraries/Seeeduino_GPRS/example/GPRS_SendSMS/, substitua o número de telefone e a mensagem na função sendSMS, depois compile o sketch e faça o upload para a sua placa. O Seeeduino GPRS enviará a mensagem para o número especificado no código.

```
#include <gprs.h>
#include <SoftwareSerial.h>

GPRS gprs;

void setup() {
    Serial.begin(9600);
    Serial.println("GPRS - Send SMS Test ...");
    gprs.preInit();
    delay(1000);
    while(0 != gprs.init()) {
        delay(1000);
        Serial.print("init error\r\n");
    }
    Serial.println("Init success, start to send SMS message...");
    gprs.sendSMS("130****3364","hello,world"); //define phone number and text
}

void loop() {
    //nothing to do
}

```

**Para atender uma chamada e ler um SMS**

Se alguém ligar ou enviar uma mensagem para você, o Seeeduino GPRS também pode atender a chamada ou ler a mensagem. Abra o sketch de exemplo **GPRS_LoopHandle** em libraries/Seeeduino_GPRS/example/GPRS_LoopHandle/, então compile o sketch e faça o upload para a sua placa; o Seeeduino GPRS fará uma varredura para verificar se há uma chamada ou SMS recebidos. Se houver uma chamada recebida, o Seeeduino GPRS atenderá a chamada automaticamente. Se houver um SMS recebido, o Seeeduino GPRS mostrará a mensagem no Serial Monitor.

```
#include <gprs.h>
#include <SoftwareSerial.h>
#include <stdio.h>

char gprsBuffer[64];
int i = 0;
char *s = NULL;
int inComing = 0;

GPRS gprs;

void setup() {
    Serial.begin(9600);
    Serial.println("GPRS - LoopHandle Test...");
    gprs.preInit();
    while(0 != gprs.init()) {
        delay(1000);
        Serial.print("init error\r\n");
    }
    Serial.println("Init success, start to monitor your call or message...");
}

void loop() {
    if(gprs.serialSIM800.available()) {
        inComing = 1;
    }else{
        delay(100);
    }

    if(inComing){
        gprs.readBuffer(gprsBuffer,32,DEFAULT_TIMEOUT);
        Serial.print(gprsBuffer);

        if(NULL != strstr(gprsBuffer,"RING")) {
            gprs.answer();
        }else if(NULL != (s = strstr(gprsBuffer,"+CMTI: \"SM\""))) { //SMS: $$+CMTI: "SM",24$$
            char message[MESSAGE_LENGTH];
            int messageIndex = atoi(s+12);
            gprs.readSMS(messageIndex, message,MESSAGE_LENGTH);
            Serial.print(message);
        }
        gprs.cleanBuffer(gprsBuffer,32);
        inComing = 0;
    }
}
```

**Função de Rádio FM**

O Seeeduino GPRS tem uma função de rádio FM. Abra o sketch de exemplo **FM_Test** em libraries/Seeeduino_GPRS/example/FM_Test/, conecte um botão à sua placa, depois compile o sketch e faça o upload para a sua placa; o Seeeduino GPRS funcionará como um rádio FM. Até mesmo o canal pode ser alterado com o botão.

```
#include <fm.h>
#include <SoftwareSerial.h>

int channelButton = 5; //used for changing channel
FM fm;

void setup() {
    pinMode(channelButton,INPUT);
    Serial.begin(9600);
    Serial.println("FM Test...");
    fm.preInit();
    while(0 != fm.powerOn()){
        Serial.println("FM power on failed, try again...");
        delay(2000);
    }
    fm.setVolume(6); //0,1,2,3,4,5,6
    fm.scanChannel();
    Serial.println("FM init success");
}

void loop() {
    while(HIGH == digitalRead(channelButton)){
        delay(50);
    }
    Serial.print("change Channel\r\n");
    fm.channelNext();
    while(LOW == digitalRead(channelButton)){
        delay(50);
    }
}
```

**Função Bluetooth**

O Seeeduino GPRS pode ser usado como um dispositivo bluetooth, mas ainda não é muito estável. Existem dois sketches de exemplo na biblioteca. O primeiro é **Bluetooth AT Command**, com o qual você pode enviar comando AT ao Seeeduino GPRS, e o outro é **Bluetooth_Communicate**, com o qual você pode se comunicar com o Seeeduino GPRS no perfil SPP, mas ele pode falhar ao conectar ao seu dispositivo bluetooth ou celular. A seguir está o código de Bluetooth AT Command.

```
#include <bluetooth.h>
#include <SoftwareSerial.h>

#define DEFAULT_TIMEOUT 5
#define BT_BUF_LEN      32
BlueTooth bluetooth;

char bluetoothBuffer[BT_BUF_LEN];
int start = 0;

void setup() {
    Serial.begin(9600);
    Serial.println("Bluetooth AT Command Test...");
    bluetooth.preInit();
    delay(3*1000);
    while(0 != bluetooth.powerOn()){ //bluetooth PowerOn
        Serial.println("bluetooth power on failed, try again...");
        delay(2000);
    }
}

void loop() {
    if(bluetooth.serialSIM800.available()) {
        start = 1;
    }else{
        delay(500);
    }

    if(start){
        //bluetooth.cleanBuffer(bluetoothBuffer,64);
        bluetooth.readBuffer(bluetoothBuffer,BT_BUF_LEN,DEFAULT_TIMEOUT);
        if(NULL != strstr(bluetoothBuffer,"+BTPAIRING:")){
            bluetooth.acceptPairing();
        }
        if(NULL != strstr(bluetoothBuffer,"+BTCONNECTING:")){
            bluetooth.acceptConnect();
        }
        start = 0;
    }
}
```

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/Seeeduino_GPRS_v1.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **Esquemático**

    [Arquivo Eagle do Seeeduino GPRS](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/Seeeduino_GPRS_v1.0_Eagle.zip)

    [Arquivo PDF do Seeeduino GPRS](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/Seeeduino_GPRS_v1.0_Schematic.pdf)

* **Firmware**

    [Firmware do Seeeduino GPRS e Guia de Atualização](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/Firmware_update_for_Seeeduino_GPRS_v1.0.zip)

* **SIM800 AT Command**

    [PDF de Comandos AT da Série SIM800](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/SIM800_Series_AT_Command_Manual_V1.01%20(2).pdf)

* **Biblioteca Seeeduino GPRS**  

    [Biblioteca Seeeduino GPRS no GitHub](https://github.com/Seeed-Studio/Seeeduino_GPRS)

## Suporte Técnico e Discussão de Produto

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
