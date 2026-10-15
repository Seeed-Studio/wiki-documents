---
description: Bluetooth Bee
title: Bluetooth Bee
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Bluetooth_Bee
last_update:
  date: 1/13/2023
  author: jianjing Huang
createdAt: '2023-02-21'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Bluetooth_Bee/
---
<!-- ---
name:  Bluetooth Bee
category: Discontinued
bzurl:
oldwikiname: Bluetooth_Bee
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Bluetooth-Bee
sku: 113050001
tags:
--- -->

![](http://bz.seeedstudio.com/depot/images/product/bbee_LRG.jpg)

**Bluetooth Bee** é um módulo <font size={4} face="黑体">Bluetooth Serial Port Profile(SPP)</font> fácil de usar, compatível com soquetes **Xbee** existentes, projetado para configuração de conexão serial sem fio transparente.
O módulo Bluetooth de porta serial é totalmente qualificado Bluetooth V2.0+EDR(Enhanced Data Rate) Modulação de 3Mbps com transceptor de rádio completo de 2,4GHz e banda base. Ele usa o sistema Bluetooth de chip único **CSR Bluecore 04**-External com tecnologia CMOS e com AFH(Adaptive Frequency Hopping Feature). Possui a menor área de **12.7mm x 27mm**

Modelo:[WLS125E1P](https://www.seeedstudio.com/depot/bluetooth-bee-p-598.html?cPath=139_142)

## Recursos ##

### Recursos de Hardware ###

- Sensibilidade típica de -80dBm.

- Potência de transmissão RF de até +4dBm.

- Bluetooth totalmente qualificado V2.0+EDR Modulação de 3Mbps.

- Baixo consumo, operação em 1.8V, I/O de 1.8 a 3.6V.

- Controle por PIO.

- Interface UART com taxa de baud programável.

- Antena PCB integrada.

- Cabeçalhos compatíveis com xBee.

### Recursos de Software ###

- Taxa de baud padrão: <font size={4} font face="黑体">38400</font>, Bits de dados:8, Bit de parada:1, Paridade:Sem paridade, Controle de dados: possui.

- Taxas de baud suportadas: 9600,19200,38400,57600,115200,230400,460800.

- Usa CTS e RTS para controlar o fluxo de dados.

- Quando um pulso de subida é detectado em PIO0, o dispositivo será desconectado.

- Porta de indicação de status PIO1: nível baixo – desconectado, nível alto – conectado;

- PIO10 é conectado ao led <font color="red" font>red</font>, PIO11 é conectado ao led verde. Quando mestre e escravo estão pareados, os leds vermelho e verde piscam 1 vez / 2s em intervalo, enquanto desconectado apenas o led verde pisca 2 vezes/ s.

- Reconexão automática ao último dispositivo na energização por padrão.

- Permite conexão do dispositivo pareado por padrão.

- PINCODE padrão:”0000”.

- Reconecta automaticamente em 30 min quando desconectado como resultado de estar além do alcance de conexão.

## Ideias de Aplicação ##

- Como uma porta serial sem fio para Arduino / [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/) e outros MCUs

- Como uma porta serial Bluetooth para PC quando conectado com UartSBee

## Cuidados ##

- Ao usar com Seeeduino / Arduino, ajuste a tensão de operação para 3.3V. Caso contrário, use um conversor de nível lógico adequado.

- Ao usar com UartSBee, ajuste a tensão de operação para 3.3V

- O comando para mudar a taxa de baud é persistente mesmo após o reset. Portanto, lembre-se da taxa de baud para o próximo uso.

- Ao usar SoftwareSerial, não defina a taxa de baud acima de 38400

## Esquemático ##

[Esquemático e arquivos da placa do Bluetooth Bee em formato Eagle s](https://aps-solver.com/services/transportation/refrigerated-cargo/)[serviço de transporte refrigerado](https://aps-solver.com/services/transportation/refrigerated-cargo/)da transportadora APS

## Definição de pinos e Classificação ##

Vista inferior:
![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth-pin.jpg)

| Pino   | #  | Tipo de Pad   | Descrição                    |
|-------|----|----------------------------------------------------|--------------------------------|
| PI09  | 29 | Bidirecional                                       | Linha de entrada/saída programável |
| PI08  | 28 | Bidirecional                                       |                  Linha de entrada/saída programável              |
| PIO7  | 27 | Bidirecional                                       |               Linha de entrada/saída programável                 |
| PIO6  | 26 | Bidirecional                                       |                 Linha de entrada/saída programável               |
| RTS   | 25 | Saída CMOS, tri-state com pull-up interno fraco |                  Solicitação UART para enviar, ativo em nível baixo           |
| PIO5  | 24 | Bidirecional                                       |                 Linha de entrada/saída programável               |
| PI04  | 23 | Bidirecional                                       |                     Linha de entrada/saída programável              |
| PCMSY | 22 | Bidirecional                                       |                   Dados PCM síncronos             |
|     CTS  |   21 |         Saída CMOS, tri-state com pull-up interno fraco                                            |                    UART autorizado para enviar, ativo em nível baixo            |
|  PIO3     |   20 |             Bidirecional                                       |           Linha de entrada/saída programável                        |
|    PIO2   |   19 |               Bidirecional                                     |               Linha de entrada/saída programável                    |
|    USBDP   |  18  |           Bidirecional                                         |                                |
|    USBDN   |   17 |        Bidirecional                                            |                                  |
|    CLK   |   16 |     Saída CMOS, tri-state com pull-up interno fraco                                                      |                  Clock SPI (Serial peripheral interface)              |
|  MI     |   15 |        Saída CMOS, tri-state com pull-up interno fraco                                                   |        Saída de dados SPI                        |
|     MO  |   14 |              Saída CMOS, tri-state com pull-up interno fraco                                             |               Saída de dados SPI                   |
|    CS   |   13 |             Saída CMOS, tri-state com pull-up interno fraco                                              |   Chip select para interface serial periférica, ativo em nível baixo                           |
|     AIO1  |   12 |          Bidirecional                           |         Linha de entrada/saída programável                        |
|    AIO0   |   11 |              Bidirecional                                      |              Linha de entrada/saída programável                   |
|  GND     |   10 |                   VSS                                 |           Porta de aterramento                     |
|  PCMIN     |   9 |            Entrada CMO                                        |               Entrada de dados PCM síncronos
|     PCMOT  |   8 |                Saída CMOS                                    |          Entrada de dados PCM síncronos                        |
|     PCMCK  |   7 |          Bidirecional                                          |               Entrada de dados PCM síncronos                   |
|   PIO1    |   6 |           Bidirecional                                         |                Linha de entrada/saída programável                 |
|    IRST   |   5 |            Saída CMOS, tri-state com pull-up interno fraco                                                |          Reset se em nível baixo, entrada deve ficar em nível baixo por>5ms para causar um reset                      |
|   PIO0    |   4 |        Bidirecional                                             |              Linha de entrada/saída programável                   |
|RX       |   3 |                Saída CMOS, tri-state com pull-up interno fraco                                               |      Entrada de dados UART                          |
|  TX     |   2 |               Saída CMOS, tri-state com pull-up interno fraco                                                | Entrada de dados UART                                 |
|    3V3   |   1 |     3.3V                                               |                   Fonte integrada de 3.3v(+) com saída do regulador linear on-chip entre 3.15-3.3v             |

## Dimensões Mecânicas ##

A placa Bluetooth Bee tem tamanho de 12.7mm x 27mm.

## Uso ##

### Instalação de Hardware ###

#### Conectando ao Arduino com XBee Shield ####

Use um [XBee® Shield](https://seeeddoc.github.io/XBee-Shield/) para conectar o **Bluetooth Bee** ao Seeeduino / Arduino. Consulte a documentação do [XBee® Shield](https://seeeddoc.github.io/XBee-Shield/) sobre como configurar as chaves de alternância para as posições corretas.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Seeeduino_BluetoothBee_Xbee_Shield.JPG)

#### Conectando ao PC com UartSbee ####

Use um UartSBee para conectar o **Bluetooth Bee** ao PC. Ajuste a chave seletora de alimentação para 3.3V antes de conectar o BlueTooth Bee.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/BluetoothBee_with_UartSBee.JPG)

### Instruções de Software ###

#### Mapa de Esboço de Funcionamento ####

O esboço a seguir apresenta uma visão geral da operação do **Bluetooth Bee** nos modos mestre e escravo.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth-1.jpg)

#### Fluxograma ####

O fluxograma a seguir fornece um guia de início rápido para a programação do **Bluetooth Bee**.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth-2.jpg)

#### Comandos para alterar a configuração padrão ####

1. Definir MODE de trabalho

|  \r\n+STWMOD=0\r\n |   Define o modo de trabalho do dispositivo como cliente (escravo). Salva e Redefine. |
|--|||
| **\r\n+STWMOD=1\r\n** | **Define o modo de trabalho do dispositivo como servidor (mestre). Salva e Redefine.**  |

**Nota:**\r\n é necessário para a operação e o valor é **80x0D 0x0A** em Hex. **\r** e **\n** representam **carriage-return** e **line-feed**(ou próxima linha),

2.Definir BAUDRATE

|   \r\n+STBD=115200\r\n | Define a taxa de baud 115200. Salva e Redefine.  |
|---|---|
|    **Supported baudrate: 9600, 19200,38400,57600,115200,230400,460800.**|  ||

 3.Definir NAME do dispositivo

|  \r\n+STNA=abcdefg\r\n  | Define o nome do dispositivo como “abcdefg”. Salva e Redefine.   |
|---|---|
||||

 \r\n+STNA=abcdefg\r\n
 Define o nome do dispositivo como “abcdefg”. Salva e Redefine.

4.Auto-conectar o último dispositivo pareado na energização

| \r\n+STAUTO=0\r\n  |Auto-conexão proibida. Salva e Redefine.   |
|---|---|
|  **\r\n+STAUTO=1\r\n** |  **Permitir Auto-conexão. Salva e Redefine.** |

5.Permitir que o dispositivo pareado se conecte a mim

| \r\n+STOAUT=0\r\n   |   Proibido. Salva e Redefine. |
|---|---|
| **\r\n+STOAUT=1\r\n**  | **Permitir. Salva e Redefine.** |

6.Definir PINCODE

|  \r\n +STPIN=2222\r\n |  Definir pincode “2222”, salvar e reiniciar.  |
|---|
|||                     |

7.Excluir PINCODE (inserir PINCODE pelo MCU)

|   \r\n+DLPIN\r\n |  Excluir pincode. Salvar e reiniciar. |
|---|---|
|   |   ||

8.Ler o ADDRESS CODE local

  |\r\n+RTADDR\r\n |             Retorna o endereço do dispositivo.  |
|---|---|
|   |   ||

9.Reconexão automática quando o dispositivo mestre está além do alcance válido (o dispositivo escravo irá se reconectar automaticamente em 30 min quando estiver além do alcance válido)

|  \r\n+LOSSRECONN=0\r\n  |  Proibir reconexão automática.  |
|---|---|
| **\r\n+LOSSRECONN=1\r\n** |  **Permitir reconexão automática.** |

#### Comandos para Operação Normal ####

#### 1.Consultar

#### a) Mestre

| \r\n+INQ=0\r\n  | Parar consulta   |
|---|---|
|  **\r\n+INQ=1\r\n**  |  **Iniciar/Reiniciar consulta**  |

#### b) Escravo

|   \r\n+INQ=0\r\n | Desativar possibilidade de ser consultado  |
|---|---|
| **\r\n+INQ=1\r\n** |  **Ativar possibilidade de ser consultado** |

Quando o comando **+INQ=1** é executado com sucesso, os LEDs vermelho e verde piscam alternadamente.

#### 2.Módulo Bluetooth retorna o resultado da consulta

|  \r\n+RTINQ=aa,bb,cc,dd,ee,ff;name\r\n |O dispositivo Bluetooth serial com o endereço “aa,bb,cc,dd,ee,ff” e o nome “name” foi consultado   |
|---|---|
|   |   ||

#### 3.Conectar dispositivo

| \r\n+CONN=aa,bb,cc,dd,ee,ff\r\n  | Conectar a um dispositivo com endereço "aa,bb,cc,dd,ee,ff”  |
|---|---|
|   |   ||

#### 4.Módulo Bluetooth solicita inserção de PINCODE

\r\n+INPIN\r\n

#### 5.Inserir PINCODE

|  \r\n+RTPIN=code\r\n  |   |
|---|---|
|   **Exemplo: RTPIN=0000** | **Inserir PINCODE que é quatro zeros** |

#### 6. Desconectar dispositivo

Colocar PIO0 em nível alto irá desconectar o dispositivo Bluetooth em operação.

#### 7. Retornar status

\r\n+BTSTA:xx\r\n

xx status:

- 0 - Inicializando

- 1 - Pronto

- 2 - Consultando

- 3 - Conectando

- 4 - Conectado

(**Nota**: Isto não é um comando, mas a informação retornada pelo módulo após cada comando)

### Programação ###

#### Implementação Baseada em Controle de Fluxo ####

O sketch a seguir configura o **Bluetooth Bee** para [Transportunternehmen](http://aps-solver.de/leistungen/) como Dispositivo Escravo e aguarda uma solicitação de conexão de um PC ou outro dispositivo mestre.
Bluetooth Bee está conectado ao Seeeduino via XBee Shield como mostrado acima. Bluetooth Bee está conectado aos pinos digitais 11 e 12 do Arduino / Seeduino. Usamos a biblioteca NewSoftSerial para suportar comunicação serial nesses pinos. A porta serial de hardware do Arduino fica disponível para carregamento do sketch ou depuração. Este sketch usa um mecanismo de controle de fluxo usando CheckOK(). Ele evita o uso de atrasos arbitrários entre cada comando. Se CheckOK() não for necessário, use um atraso de pelo menos 3 segundos entre os comandos.

```cpp
/*
BluetoothBee Demo Code - Flowcontrol Based Implementation
2010,2011 Copyright (c) Seeed Technology Inc.  All right reserved.

Author: Visweswara R

This demo code is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

For more details about the product please check https://www.seeedstudio.com/depot/

*/


/* Upload this sketch to Seeeduino and press reset*/

#include <SoftwareSerial.h>   //Software Serial Port
#define RxD 11
#define TxD 12

#define DEBUG_ENABLED  1

SoftwareSerial blueToothSerial(RxD,TxD);

void setup()
{
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    setupBlueToothConnection();

}

void loop()
{
  //Typical Bluetoth command - response simulation:

  //Type 'a' from PC Bluetooth Serial Terminal
  //See Bluetooth Bee - Wiki for instructions

  if(blueToothSerial.read() == 'a')
  {
    blueToothSerial.println("You are connected");
    //You can write you BT communication logic here
  }

}


void setupBlueToothConnection()
{
    blueToothSerial.begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400
    delay(1000);
    sendBlueToothCommand("\r\n+STWMOD=0\r\n");
    sendBlueToothCommand("\r\n+STNA=SeeeduinoBluetooth\r\n");
    sendBlueToothCommand("\r\n+STAUTO=0\r\n");
    sendBlueToothCommand("\r\n+STOAUT=1\r\n");
    sendBlueToothCommand("\r\n +STPIN=0000\r\n");
    delay(2000); // This delay is required.
    sendBlueToothCommand("\r\n+INQ=1\r\n");
    delay(2000); // This delay is required.
}

//Checks if the response "OK" is received
void CheckOK()
{
  char a,b;
  while(1)
  {
    if(blueToothSerial.available())
    {
    a = blueToothSerial.read();

    if('O' == a)
    {
      // Wait for next character K. available() is required in some cases, as K is not immediately available.
      while(blueToothSerial.available())
      {
         b = blueToothSerial.read();
         break;
      }
      if('K' == b)
      {
        break;
      }
    }
   }
  }

  while( (a = blueToothSerial.read()) != -1)
  {
    //Wait until all other response chars are received
  }
}

void sendBlueToothCommand(char command[])
{
    blueToothSerial.print(command);
    CheckOK();   
}
```

#### Implementação Baseada em Delay ####

O sketch a seguir é uma modificação do programa acima usando delay() em vez de CheckOK(). Neste caso, a porta serial de hardware é usada para fins de depuração. Abra o monitor serial com configuração de 9600 baud. A comunicação completa entre o MCU e o Bluetooth Bee ficará visível no monitor serial.

```cpp
/*
BluetoothBee Demo Code - Delay Based Implementaion
2011 Copyright (c) Seeed Technology Inc.  All right reserved.

Author: Visweswara R

This demo code is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

For more details about the product please check https://www.seeedstudio.com/depot/

*/

/* Upload this sketch into Seeeduino and press reset*/

#include <SoftwareSerial.h>   //Software Serial Port
#define RxD 11
#define TxD 12

SoftwareSerial blueToothSerial(RxD,TxD);

void setup()
{
    Serial.begin(9600);          //Serial port for debugging, Comment this line if not required  
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    setupBlueToothConnection();

}

void loop()
{

  if(blueToothSerial.read() == 'a')
  {
    blueToothSerial.println("You are connected to Bluetooth Bee");
    //You can write you BT communication logic here
  }
}

void setupBlueToothConnection()
{
    Serial.print("Setting up Bluetooth link");       //For debugging, Comment this line if not required    
    blueToothSerial.begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400
    delay(1000);
    sendBlueToothCommand("\r\n+STWMOD=0\r\n");
    sendBlueToothCommand("\r\n+STNA=modem\r\n");
    sendBlueToothCommand("\r\n+STAUTO=0\r\n");
    sendBlueToothCommand("\r\n+STOAUT=1\r\n");
    sendBlueToothCommand("\r\n+STPIN=0000\r\n");
    delay(2000); // This delay is required.
    blueToothSerial.print("\r\n+INQ=1\r\n");
    delay(2000); // This delay is required.
    Serial.print("Setup complete");

}

void sendBlueToothCommand(char command[])
{
    char a;
    blueToothSerial.print(command);
    Serial.print(command);                          //For debugging, Comment this line if not required    
    delay(3000);

    while(blueToothSerial.available())              //For debugging, Comment this line if not required  
    {                                               //For debugging, Comment this line if not required   
       Serial.print(char(blueToothSerial.read()));  //For debugging, Comment this line if not required  
    }                                               //For debugging, Comment this line if not required   
}
```

#### Conectando Bluetooth Bee ao PC (via Bluetooth Dongle) em GNU/Linux ####

Este procedimento demonstra como o **Bluetooth Bee** pode ser conectado a um PC sob o sistema operacional GNU/Linux. Um USB Bluetooth Dongle é usado no lado do PC para se comunicar com o **Bluetooth Bee**. O sketch de implementação com controle de fluxo é carregado no Seeeduino.

- Instalar gnome-bluetooth

`
sudo apt-get install gnome-bluetooth
`

- Abrir o aplicativo bluetooth-properties a partir do shell

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config0.png)

- Clique em Set up new device

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config1.png)

e clique em Forward

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config2.png)

- Abra PIN options...

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config2.1.png)

- Defina Fixed PIN 0000. 0000 é o PIN padrão usado no sketch acima.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config3.png)

- A janela Device Setup é aberta

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config4.png)

- e a caixa de diálogo Setup Completed é aberta. Clique em Close.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config5.png)

- O endereço do **Bluetooth Bee** 00:13:EF:00:00:24 é exibido no shell.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config6.png)

- Vincule o **Bluetooth Bee** à porta rfcomm. Aqui o endereço do **Bluetooth Bee** está vinculado a um dispositivo de porta serial /dev/rfcomm0

```
user@user-desktop:~$ sudo rfcomm bind 0 00:13:EF:00:00:24 1
user@user-desktop:~$ ls /dev/rfcomm*
/dev/rfcomm0
```

- Esta porta serial /dev/rfcomm0 pode ser acessada por qualquer terminal de porta serial como o cutecom.

- Abra /dev/rfcomm0 com baud rate:38400, bits de dados: 8, bits de parada: 1 e sem controle de fluxo
- Envie o caractere 'a'

- Seeeduino + Bluetooth Bee irá responder com **"You are connected to Bluetooth Bee"**

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config8.png)

#### Conectando o Bluetooth Bee ao PC (via Dongle Bluetooth) no Windows ####

- Instale os drivers padrão Microsoft Bluetooth. Abra Painel de Controle -> Dispositivos Bluetooth

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows0.jpg)

- Clique no botão Add.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows1.jpg)

- Marque My devices is set up  and ready to be found e clique no botão Next

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows2.jpg)

- Selecione o dispositivo "SeeedBlueToothBee" e clique em Next.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows3.jpg)

- Selecione Use the passkey found in the documentation e digite 0000

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows4.jpg)

- As senhas são trocadas e uma porta serial de saída COM5 é atribuída para a nossa comunicação.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows5.jpg)

- Um balão na barra de tarefas mostra que um novo link Bluetooth Serial Port foi adicionado.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows6.jpg)

- COM5 é atribuída para comunicação. Esta porta deve ser usada para comunicar o PC com o Bluetooth Bee.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows7.jpg)

- Esta porta serial COM5 pode ser acessada por qualquer terminal de Porta Serial.

- Abra COM5 com baud rate:38400, bits de dados: 8, bits de parada: 1 e sem controle de fluxo
- Envie o caractere 'a'

- Seeeduino + Bluetooth Bee irá responder com "You are connected to Bluetooth Bee"

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows8.jpg)

#### Conectando o Bluetooth Bee ao PC usando UartsBee no modo Master ####

Esta demonstração usa o arranjo de hardware descrito em [Hardware Installation - UartSBee. Conecte o UartSbee ao PC usando um cabo mini USB.

- Abra um terminal serial e conecte-se ao dispositivo de porta serial UartSBee como COM1 no Windows ou /dev/ttyUSB0 no GNU/Linux com baud rate:38400, bits de dados: 8, bits de parada: 1 e sem controle de fluxo

- Envie o comando \r\n+STWMOD=1\r\n. Isto configura o **Bluetooth Bee** no modo master.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/BTBee_Master1.png)

- Envie o comando \r\n+INQ=1\r\n. O **Bluetooth Bee** procura dispositivos Bluetooth disponíveis na vizinhança e lista o endereço dos dispositivos. Neste caso com +RTINQ=0,19,86,0,19,1E;desktop, onde desktop é um PC com interface Bluetooth. Durante a busca o LED vermelho e o LED verde piscam alternadamente.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/BTBee_Master2.png)

- Envie \r\n+CONN=0,19,86,0,19,1E\r\n onde 0,19,86,0,19,1E é o endereço do desktop.

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/BTBee_Master3.png)

- Digite o PIN 0000 no lado do PC e complete a conexão.

## Lista de Materiais (BOM) /lista de peças ##

- [Bluetooth Bee bare PCB](https://seeeddoc.github.io/w/index.php?title=Bluetooth_Bee_bare_PCB&action=edit&redlink=1)
- [Serial_port_bluetooth_module_(Master/Slave)](https://seeeddoc.github.io/Serial_port_bluetooth_module-Master-Slave/)

## Suporte ##

Se você tiver dúvidas ou outras ideias de design melhores, pode ir ao nosso [forum](https://www.seeedstudio.com/forum) ou [wish](http://wish.seeedstudio.com) para discutir.

## Rastreador de Versão ##

| Revisão  |  Descrições  |  Lançamento |
|---|---|---|
|v1.0   | Lançamento público inicial  |  14 Dez, 2009  |
|  v1.1  |  Modificar comando Inquire e adicionar algumas notas | 15 Mar, 2010  |
| v1.2  |  Modificar recursos de Hardware e Software | 04 Abr, 2010  |
|  v1.3  | Atualizar o perfil, adicionar o status de retorno, deletar comando ECHO.  |  21 Abr, 2010 |
|  v2.0 | Atualizar o módulo como HM－01（o mesmo que o mais novo shield Bluetooth）. O comando AT não é compatível com o de antes.  |   4 Dez, 2014 |

## Rastreador de Bugs ##

Bug Tracker é o lugar onde você pode publicar quaisquer bugs que ache que encontrou durante o uso. Por favor, escreva o que você tem a dizer, suas respostas nos ajudarão a melhorar nossos produtos.

## Ideias Adicionais ##

- Implementar um teclado / mouse PS/2 sem fio.

- Controlar sem fio um robô de brinquedo a partir do PC.

## Como comprar ##

Clique aqui para comprar:[https://www.seeedstudio.com/depot/bluetooth-bee-p-598.html?cPath=139_142](https://www.seeedstudio.com/depot/bluetooth-bee-p-598.html?cPath=139_142).

## Licenciamento ##

Esta documentação é licenciada sob a Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/). Código-fonte e bibliotecas são licenciados sob [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), veja os arquivos de código-fonte para detalhes.

## Projetos Relacionados ##

Se você quiser fazer alguns projetos incríveis com o Bluetooth Bee, aqui estão alguns projetos para referência.

### Seeed Pet ###

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Seeed_pet.jpg)

Esta é uma demonstração interessante feita por seeduino e [Grove](https://seeeddoc.github.io/Grove_System/) (title=undefined).
SEEED PET é uma espécie de animal de estimação eletrônico em nosso estúdio. É uma plataforma para os engenheiros novatos se familiarizarem com os produtos e práticas da nossa empresa. Cada engenheiro novato adicionará algumas novas ideias ou elementos no SEEED PET.

[Eu quero fazê-lo.](https://community.seeedstudio.com/project_detail.html?id=16)

### Compartilhe Seus Projetos Incríveis Conosco ###

Nascido com o espírito de fazer e compartilhar, é isso que acreditamos que faz um maker.

E apenas por causa disso, a comunidade de código aberto pode ser tão próspera quanto é hoje.

Não importa quem você é e o que você fez, hacker, maker, artista e engenheiro,

enquanto você começar a compartilhar seus trabalhos com os outros,

você está fazendo parte da comunidade de código aberto e está fazendo suas contribuições.

Agora compartilhe seus projetos incríveis conosco no [Recipe](https://community.seeedstudio.com/projects.html#recipe), e ganhe a chance de se tornar o Usuário Core da Seeed.

- Usuários Core são aqueles que demonstram grande interesse e contribuições significativas nos produtos Seeed.

- Nós cooperamos com nossos Usuários Core no desenvolvimento de nosso novo produto, isto é, em outras palavras, os Usuários Core terão a chance de experimentar quaisquer novos produtos da Seeed antes de seu lançamento oficial, e em troca esperamos feedback valioso deles para nos ajudar a melhorar o desempenho do produto e a experiência do usuário. E, na maioria dos casos, se nossos Usuários Core tiverem boas ideias para fazer coisas, ofereceremos peças de hardware, serviços de PCBA, bem como suporte técnico. Além disso, uma cooperação comercial futura com os Usuários Core é altamente possível.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/pt-br/images/f/f6/Bluetooth_Bee_Schematic_Board.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Eagle]** [Arquivos de Esquemático e Placa do Bluetooth Bee](https://wiki.seeedstudio.com/pt-br/images/f/f6/Bluetooth_Bee_Schematic_Board.zip)

- **[PDF]**[Bluetooth_Bee_v2.0_SCH_PCB.zip](http://images/0/06/Bluetooth_Bee_v2.0_SCH_PCB.zip)

- **[Library]** [NewSoftLibrary](http://arduiniana.org/NewSoftSerial/NewSoftSerial10c.zip)

- **[Information]** [Informações sobre como configurar conexões entre Bluetooth Bees estão disponíveis no Seeedstudio Forum](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=687)

- **[Information]** [PC conectando Bluetooth Bee no Seeedstudio Forum](https://forum.seeedstudio.com/viewtopic.php?f=18&amp;t=1436&amp;p=5637#p5637)

- **[Datasheet]**  [Folha de dados do Bluetooth Bee](https://files.seeedstudio.com/wiki/Bluetooth-Bee/res/Bluetooth_Bee_datasheet.pdf)

- **[Datasheet]**[HM－01_Datasheet](https://files.seeedstudio.com/wiki/Bluetooth-Bee/res/HM%EF%BC%8D01_Datasheet.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
