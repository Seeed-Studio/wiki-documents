---
description: Bluetooth Bee
title: Bluetooth Bee
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Bluetooth_Bee_Standalone
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Bluetooth_Bee_Standalone/
---

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/img/P3302883_02.jpg)

Guarde aquele Arduino extra que você tem sobrando para outro projeto, este dispositivo dois-em-um já vem com o Arduino embutido. O Bluetooth Bee com Arduino é uma versão aprimorada do Bluetooth Bee. Adicionamos um ATMEGA168 onboard para torná-lo um Arduino completo, mantendo o mesmo formato e conjunto de instruções do Bluetooth Bee. Além disso, ele ainda permite empilhamento em XBee Carrier, XBee® Shield e UartSBee para expansão ou reprogramação.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Bee-Standalone-p-1157.html)

## Recursos

---

* Tamanho reduzido
* Configurações e métodos de pareamento idênticos aos do Bluetooth Bee
* Porta serial por software adotada entre o módulo Bluetooth e o ATMEGA168
* Permanece compatível com XBee Carrier, XBee® Shield e UartsBee para expansão

### Recursos de hardware

* Sensibilidade típica de -80dBm.
* Até +4dBm de potência de transmissão RF.
* Bluetooth V2.0+EDR 3Mbps totalmente qualificado.
* Alimentação de 3,3 V
* Antena PCB integrada.
* Desconecte e monitore o Bluetooth via software.
* Headers compatíveis com xBee.

### Recursos de software

* Use o programa SoftSerial para comunicação.
* Taxa de transmissão padrão: **38400**, bits de dados:8, bit de parada:1, paridade:sem paridade, controle de dados: possui.
* Taxas de transmissão suportadas: 9600,19200,38400,57600,115200,230400,460800.
* Use CTS e RTS para controlar o fluxo de dados.
* Desconecte o Bluetooth via uma borda de subida em PC2
* Porta de instrução de status PB2: baixo-desconectado, alto-conectado;
* PIO10 está conectado ao LED vermelho, PIO11 está conectado ao LED azul. Quando mestre e escravo estão pareados, os LEDs vermelho e azul piscam 1 vez / 2 s em intervalo, enquanto desconectado apenas o LED azul pisca 2 vezes/s.
* Reconecta automaticamente ao último dispositivo na energização, por padrão.
* Permite a conexão do dispositivo pareado por padrão.
* PINCODE padrão:”0000”.
* Reconexão automática em 30 min quando desconectado por ficar além do alcance da conexão.

## Ideias de aplicação

---

* Módulo compatível com Arduino com comunicação Bluetooth.
<!-- *   Bluetooth Serial Port for PC when connected with [UartSBee](/pt-br/UartSBee_V4) and uploading SoftSerial program to **ATMEGA168**. -->

:::caution
    *Alimentação de 3,3 V necessária.
    *   Ao usar com UartSBee, ajuste a tensão de operação para 3,3 V
    *   O comando para alterar a taxa de transmissão é persistente mesmo após o reset. Portanto, lembre-se da taxa de transmissão para o próximo uso.
:::

## Definição e classificação dos pinos

---
Vista inferior:
 ![](https://files.seeedstudio.com/Grove-Red_LED/wiki/Bluetooth_Bee_Standalone/img/Bluetooth-standalone_pin.jpg)

* PD4 - PD7 = pinos digitais 4 - 7 do Arduino IDE (5,6 PWM)

* PB0 , PB1 = pinos digitais 8 , 9 do Arduino IDE  (9   PWM)

* PC0 - PC3 = pinos analógicos 0 - 3 do Arduino IDE  (Observação: PC2 desconecta o Bluetooth via uma borda de subida)

## Uso

---
<!-- Example : Use Bluetooth Bee-Standalone to control a [Grove-Red_LED](/pt-br/Grove-Red_LED) with XBee carrier. -->

* Passo 1

Conecte o módulo Grove-Red_LED e o Bluetooth Bee-Standalone ao XBee carrier desta forma.

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/img/Bluetooth_Bee-Standalone3.jpg)

* Passo 2

Escreva um programa com o Arduino-IDE para ler informações da porta Bluetooth Softserial e identificar se deve desligar ou ligar o LED.

```
/*
BluetoothBee Demo Code - Flowcontrol Based Implementation
2010,2011 Copyright (c) Seeed Technology Inc.  All right reserved.

Author: Visweswara R      Modify:Joinj

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

#include <NewSoftSerial.h>   //Software Serial Port
#define RxD 2
#define TxD 3

#define DEBUG_ENABLED  1

NewSoftSerial blueToothSerial(RxD,TxD);

void setup()
{
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    pinMode(5,OUTPUT);
    setupBlueToothConnection();
}

void loop()
{
    unsigned char control;
    unsigned char temp;
    while(temp!='4')  {
        temp=blueToothSerial.read();
    }
    Serial.println("You are connected");
    blueToothSerial.print("You are connected");      //You can write you BT communication logic here
    while(1)  {
        temp=blueToothSerial.read();
        switch(temp)  {
            case 'O':{while(temp!='N')  {temp=blueToothSerial.read();}  digitalWrite(5,HIGH);break;}
            case 'S':{while(temp!='H')  {temp=blueToothSerial.read();}  digitalWrite(5,LOW);break;}
            default:break;
        }
    }
}


void setupBlueToothConnection()
{
    blueToothSerial.begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400
    delay(1000);
    sendBlueToothCommand("\r\n+STWMOD=0\r\n");
    sendBlueToothCommand("\r\n+STNA=SeeedBluetooth-st\r\n");
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

* Passo 3

Conecte o XBee carrier ao computador com cabo USB e envie o programa para o **ATMEGA168** no Bluetooth Bee-Standalone.

* Passo 4

Remova o cabo USB do XBee carrier e conecte a bateria de 3,7 V ao XBee carrier desta forma.

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/img/Bluetooth_Bee-Standalone2.jpg)

* Passo 5

<!-- Use another Bluetooth Bee connect to the Bluetooth Bee-Standalone.How to connect? You can refer to [Bluetooth Bee](/pt-br/Bluetooth_Bee).When you are connected,you can control the LED by another Bluetooth Bee.The LED will work when you send "ON" to Bluetooth Bee-Standalone and it will be off when you send "SH"(short for SHUT). -->

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/img/Bluetooth_Bee-Standalone1.jpg)

## Ideias adicionais

---

* [Como testar o seu Bluetooth Bee - Standalone](http://dejwoot.blogspot.hk/2012/07/howto-test-your-bluetooth-bee-standalone.html)

## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/res/Bluetooth_Bee-Standalone_schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Arquivos Eagle do BlueTooth bee-Standalone](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/res/Bluetooth_Bee-Standalone_schematic.zip).

* [NewSoftLibrary](http://arduiniana.org/NewSoftSerial/NewSoftSerial10c.zip)

* [Informações](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=687) sobre como configurar conexões entre Bluetooth Bees estão disponíveis no Seeedstudio Forum.

* [Informações](https://forum.seeedstudio.com/viewtopic.php?f=18&amp;t=1436&amp;p=5637#p5637) sobre conexão de PC ao Bluetooth Bee no Seeedstudio Forum

* [File:Bluetooth Bee Standalone v1.0.pdf](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/res/Bluetooth_Bee_Standalone_v1.0.pdf "File:Bluetooth Bee Standalone v1.0.pdf")

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
