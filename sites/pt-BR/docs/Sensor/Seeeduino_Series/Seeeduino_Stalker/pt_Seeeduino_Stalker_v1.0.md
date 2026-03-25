---
description: Seeeduino Stalker v1.0
title: Seeeduino Stalker v1.0
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_Stalker_v1.0
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino_Stalker_v1.0/
---
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v1.0/img/Seeeduino-stalker-168.jpg)

**Esta não é a versão mais recente do Seeeduino Stalker e foi descontinuada.
A versão mais recente pode ser encontrada aqui: [Seeeduino Stalker v2.1](https://seeeddoc.github.io/Seeeduino_Stalker_v2.1/)
Veja <a href="/pt-br/Seeeduino_Stalker#Comparison_between_various_versions_of_Seeeduino_Stalker" ><span><font size={"3"}> Arduino </font></span></a> para comparação entre v1.0, v2.0 e v2.1.**

Link para a página do produto deste dispositivo (siga este link para comprar):
**Seeeduino Stalker Atmega 168P v1.0Modelo: [ARD125B5P](https://www.seeedstudio.com/depot/seeeduino-stalker-atmega-168-p-639.html?cPath=79_80)**

Seeeduino Stalker é um nó de Rede de Sensores Sem Fio compatível com Arduino e rico em recursos. Sua estrutura modular e periféricos onboard o tornam conveniente para registrar dados de sensores com carimbo de data e hora periodicamente. O Seeeduino Stalker é uma boa opção para todos os seus projetos de rastreamento, monitoramento e controle.

## Recursos ##

- Compatível com **Arduino**, baseado em [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/)
- Microcontrolador onboard: ATmega168P ou ATmega328P (ambas as variantes disponíveis para compra)

- Modo duplo de operação: como um Arduino independente ou como um Shield empilhado sobre o Arduino. (A posição dos pinos é compatível com o Arduino Duemilanove)

- Chip de Relógio de Tempo Real onboard com bateria tipo moeda CR2032 como fonte de alimentação de backup

- Interface serial com DTR para auto‑reset durante a programação quando operando em modo independente. (Para programação, o [UartSBee](https://seeeddoc.github.io/UartSBee/) deve ser comprado separadamente)

- Soquete para cartão microSD

- Conector de pinos I2C (a tensão de operação é selecionável: 5,0 V ou 3,3 V)

- Interruptor e LED definidos pelo usuário

- **Soquete da série Bee** - 2x10 pinos, passo de 2,0 mm (que irá se conectar ‑ um de cada vez ‑ a qualquer um dos módulos sem fio: **XBee**, [BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/), **GPSBee** ou [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/). Observe que o [UartSBee](https://seeeddoc.github.io/UartSBee/) é incompatível com este soquete ‑ um conector de interface serial separado (conforme mencionado acima) é fornecido para o [UartSBee](https://seeeddoc.github.io/UartSBee/)

## Aplicações ##

- Rede de Sensores Sem Fio (usando **XBee** ‑ comprado separadamente)

- Registro de GPS (usando **GPSBee** ‑ comprado separadamente)

- Sistema de Aquisição de Dados capaz de se comunicar com um App rodando em iPhone/Telefone Android/Telefone Nokia (usando [BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/) ‑ comprado separadamente)

- Controle Remoto por RF (usando [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/) ‑ comprado separadamente)

- Como uma simples plataforma de computação física compatível com Arduino independente (o [UartSBee](https://seeeddoc.github.io/UartSBee/) deve ser comprado separadamente para programação)

## Cuidados ##

- O produto é fornecido no estado em que se encontra. Observe as precauções de ESD, especialmente em clima seco (baixa umidade).

- Desative as portas seriais de bluetooth ao usar uma máquina de desenvolvimento baseada em Windows para evitar que o Arduino IDE congele.

## Diagrama em Blocos ##

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v1.0/img/Stalker-V1-Block.jpg)

## Esquemáticos ##

[Schematics for Seeeduino Stalker v1.0 (PDF)](https://www.seeedstudio.com/depot/datasheet/Seeedstalker_V1.0.pdf)

## Especificações ##

### Principais Especificações Técnicas ###

|Microprocessador:|ATMega168P ou ATmega328P|
|---|---|
|Tamanho da PCB:|6,8 cm x 5,5 cm x 0,16 cm|
|Indicadores:|Reset, Alimentação, LED no PB5 (Pino 13 do Arduino)|
|Fonte de alimentação:|5 V ou 7‑12 V|
|Conector de alimentação:|JST de 2 pinos/ USB|
|Contagem de E/S:|20|
|Entrada ADC:|2 canais dedicados (resolução de 10 bits)|
|Conectividade:|I2C, UART, SPI|
|RoHS:|Sim|

### Características Elétricas ###

|Especificações|Mín|Nom|Máx|Unidades|
|---|---|---|---|---|
|Tensão de entrada|5|9|12|Volts (CC)|
|Consumo Global de Corrente|-|300|1000|mA|
|Tensão I2C de 3,3 V|3,2|3,3|3,5|Volts (CC)|
|Tensão I2C de 5,0 V|4,6|4,7|5|Volts (CC)|
|Taxa de Baud da UART (durante a programação)|-|-|115200|bps|

## Uso ##

### Notas de Aplicação ###

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v1.0/img/Stalker-V1-applications.jpg)

### Notas de Conexão ###

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v1.0/img/Stalker-V1-hardware.jpg)

- Soquete da **série Bee** ‑ 2x10 pinos, passo de 2,0 mm (que irá se conectar ‑ um de cada vez ‑ a qualquer um dos **módulos sem fio**: **XBee**, [BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/), **GPSBee** ou [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/).) A comunicação com esses módulos é feita através da UART.

- Interface serial – Para economizar espaço e reduzir custos, a conectividade USB&lt;-&gt;Serial não é fornecida por padrão. Você pode usar o UartSBee baseado em FT232 ou outro adaptador USB para serial para fazer a programação ou comunicar‑se com o PC.

- LED e Interruptor do usuário – Um LED e um interruptor foram fornecidos onboard para uso em sua aplicação conforme desejado.

- Interruptor principal – Remove a alimentação da placa Seeeduino Stalker. O RTC continuará funcionando se uma bateria CR2032 tiver sido instalada.

- Jumper de Interrupção – Monte este jumper se você quiser permitir que o módulo inserido no soquete da série Bee interrompa o microcontrolador em qualquer evento de recepção de dados. Isso é útil em aplicações de rede de sensores para acordar o microcontrolador do modo de hibernação.

- Interface I2C: O CI de mudança de nível I2C onboard fornece tradução de tensão entre dispositivos de 3,3 V e 5 V. Isso permite que você conecte CIs I2 de 5,0 Volts ao seu microcontrolador quando ele estiver operando em 3,3 Volts.

## Folhas de Dados dos Componentes ##

- [ATmega168](http://www.atmel.com/dyn/resources/prod_documents/doc2545.pdf) - Microcontrolador AVR de 8 bits presente onboard no Seeeduino Stalker.

- [PCA9306](http://www.nxp.com/documents/data_sheet/PCA9306.pdf) - Tradutor de nível de tensão de barramento I2C e SMBus bidirecional duplo.

- [DS1307](http://pdfserv.maxim-ic.com/en/ds/DS1307.pdf) - Chip de Relógio de Tempo Real I2C.

- [LM1117](http://www.national.com/ds/LM/LM1117.pdf) - Regulador linear de tensão de baixa queda usado na seção de fonte de alimentação.

## Exemplos de Código‑Fonte ##

Programar o Seeeduino Stalker é fácil por meio do uso do Arduino e de suas bibliotecas. Alguns trechos de código fornecidos abaixo irão ajudá‑lo a iniciar a codificação do seu projeto. Um arquivo RAR contendo todos os sketches a seguir está disponível **aqui**.

Observe que todos os sketches de demonstração apresentados abaixo fazem uso da biblioteca FileLogger. Consulte [este](https://arduino.cc/cgi-bin/yabb2/YaBB.pl?num=1240704747/all) tópico no Fórum Arduino e faça o download da biblioteca em sua [página do projeto](http://code.google.com/p/arduino-filelogger/) no Google Code.

Além disso, alguns usuários do Seeeduino Stalker compartilharam parte do código desenvolvido por eles em um [tópico](https://arduino.cc/cgi-bin/yabb2/YaBB.pl?num=1273413449%20) no Fórum Arduino.

### Demo 1 - uso do cartão SD ###

Usando uma biblioteca FileLogger para armazenar todos os dados do GPSBee no cartão SD.

```
#include <SD.h>constint chipSelect =10;
String buffer ="";unsignedchar ptr;
File myFile;
byte val;voidsetup(){Serial.begin(19200);pinMode(chipSelect,OUTPUT);if(!SD.begin(chipSelect)){return;}
  File myFile = SD.open("data.log",FILE_WRITE);
   myFile.close();}voidloop(){if(Serial.available()>0){
    val =Serial.read();
    buffer = String(val);
    myFile = SD.open("data.log",FILE_WRITE);
    myFile.print(buffer);
    myFile.close();}}
```

### Demo 2 – Registro de dados de sensor com carimbo de data e hora ###

O módulo de Relógio de Tempo Real onboard pode ser usado para adicionar carimbo de data e hora aos dados de sensor lidos periodicamente.

O sketch Arduino apresentado abaixo ilustra como fazer leituras de sensor do Pino Analógico 0 e salvá‑las no cartão SD juntamente com carimbos de data e hora.

```
#include "FileLogger.h"#include "DS1307.h"#include <WProgram.h>#include <Wire.h>#define Timing 0#define Accept 1#define Record 2

byte start[7]={'B','e','g','i','n',0x0D,0x0A};
byte buffer[20];int temp;
byte ASCII[10]={'0','1','2','3','4','5','6','7','8','9'};unsignedchar result;unsignedchar state;inttime=0;int oldtime=0;voidsetup(void){
    result = FileLogger::append("data.log", start, 7);//Initial the SD Cardwhile(result) result = FileLogger::append("data.log", start, 7);
    RTC.stop();
    RTC.set(DS1307_MIN,30);//set the minutes
    RTC.set(DS1307_HR,10);//set the hours
    RTC.set(DS1307_DATE,22);//set the date
    RTC.set(DS1307_MTH,12);//set the month
    RTC.set(DS1307_YR,9);//set the year
    RTC.start();}voidloop(void){switch(state){case Timing:time=RTC.get(DS1307_SEC,true);delay(200);if(time!=oldtime){
            oldtime=time;
            temp=RTC.get(DS1307_MTH,false);
            buffer[0]=ASCII[(temp/10)];
            buffer[1]=ASCII[(temp%10)];
            buffer[2]='-';
            temp=RTC.get(DS1307_DATE,false);
            buffer[3]=ASCII[(temp/10)];
            buffer[4]=ASCII[(temp%10)];
            buffer[5]='-';
            temp=RTC.get(DS1307_HR,false);
            buffer[6]=ASCII[(temp/10)];
            buffer[7]=ASCII[(temp%10)];
            buffer[8]='-';
            temp=RTC.get(DS1307_MIN,false);
            buffer[9]=ASCII[(temp/10)];
            buffer[10]=ASCII[(temp%10)];
            buffer[11]='-';//temp=RTC.get(DS1307_SEC,false);
            buffer[12]=ASCII[(time/10)];
            buffer[13]=ASCII[(time%10)];
            buffer[14]=':';
            state=Accept;}break;case Accept:
        temp=analogRead(0);
        buffer[15]=ASCII[(temp/100)];
        buffer[16]=ASCII[((temp%100)/10)];
        buffer[17]=ASCII[(temp%10)];
        buffer[18]=0x0D;
        buffer[19]=0x0A;
        state=Record;break;case Record:
        result = FileLogger::append("data.log", buffer, 20);if(result==0){
            state=Timing;}break;default:
        state=Timing;break;}}
```

### Demo 3 Operando o Seeeduino Stalker como um Shield ###

O Seeeduino Stalker pode ser montado como um shield em outra placa compatível com Arduino Duemilanove/UNO.

O sketch a seguir ilustra como receber dados do microcontrolador abaixo via I2C e salvá-los no Cartão SD.

```
#include "FileLogger.h"#include <Wire.h>

byte start[7]={'B','e','g','i','n',0x0D,0x0A};unsignedchar buffer[10];unsignedchar result;unsignedchar state;voidsetup(){
    result = FileLogger::append("data.log", start, 7);//Initial the SD Cardwhile(result) result = FileLogger::append("data.log", start, 7);Wire.begin(4);// join i2c bus with address #4Wire.onReceive(receiveEvent);// register event}voidloop(){}void receiveEvent(int howMany){unsignedchar i=0;while(Wire.available()>0){
        buffer[i]=Wire.receive();// receive byte as a character
        i++;}
    result = FileLogger::append("data.log", buffer, i);while(result) result = FileLogger::append("data.log", start, 7);}
```

## Suporte ##

Se você tiver dúvidas ou outras ideias de design melhores, você pode ir ao nosso [fórum](https://www.seeedstudio.com/forum) ou **wish** para discutir.

## Histórico de Revisões ##

|Revisão|Descrições|Data de Lançamento|
|---|---|---|
|Seeeduino Stalker v1.0 |Lançamento público inicial|23 Dez, 2009|
|Seeeduino Stalker v2.0 | Nova e melhorada versão com mais recursos|17 Dez, 2010|

## Rastreador de Bugs ##

O Rastreador de Bugs é o lugar onde você pode publicar quaisquer bugs que ache que possa ter encontrado durante o uso. Por favor, escreva o que você tem a dizer, suas respostas nos ajudarão a melhorar nossos produtos.

## Ideias Adicionais ##

Ideias Adicionais é o lugar para escrever suas ideias de projetos sobre este produto, ou outros usos que você tenha encontrado. Ou você pode escrevê-las na página de Projetos.

## Recursos ##

[Stalker Eagle Design Files](https://www.seeedstudio.com/wiki/images/4/40/Stalker.zip)

## Como comprar ##

Seeeduino Stalker v1.0 já está fora de estoque (Página do produto [aqui](https://www.seeedstudio.com/depot/seeeduino-stalker-atmega-328-p-600.html?cPath=80), em vez disso, verifique o Seeeduino Stalker v2.0: [Página Wiki](https://seeeddoc.github.io/Seeeduino_Stalker_v2.0/)  | [Página do Produto](https://www.seeedstudio.com/depot/seeeduino-stalker-v2b-p-727.html?cPath=80)

## Veja Também ##

- [Seeeduino Stalker v2.0](https://seeeddoc.github.io/Seeeduino_Stalker_v2.0/)
- [Comparação entre várias versões do Seeeduino Stalker](https://seeeddoc.github.io/Seeeduino_Stalker/#Comparação_entre_várias_versões_do_Seeeduino_Stalker)

## Licenciamento ##

Esta documentação é licenciada sob a [Licença Creative Commons Atribuição-CompartilhaIgual 3.0](http://creativecommons.org/licenses/by-sa/3.0/) Código-fonte e bibliotecas são licenciados sob [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), veja os arquivos de código-fonte para detalhes.

## Suporte Técnico & Discussão de Produtos

   <br />
 Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
