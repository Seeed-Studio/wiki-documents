---
description: XBee Shield
title: XBee Shield
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XBee_Shield
sku: 113050006
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/XBee_Shield/
---
 ![](https://files.seeedstudio.com/wiki/XBee-Shield/img/Xbshieldn2.jpg) ![](https://files.seeedstudio.com/wiki/XBee-Shield/img/Xbshield_bottom.jpg)

Um **Xbee shield** permite que uma placa **Arduino** ou [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/) se comunique sem fio usando **módulos compatíveis com Bee** (como Zigbee ou BlueTooth Bee). Ele é projetado para ser usado com o **módulo Xbee da MaxStream**. Pode ser usado como **porta serial** / **substituto de USB.** É usado para conectar dois **Seeeduinos** usando **Zigbee** / **Bluetooth Bee** ou conectar um **Seeeduino** a um PC sem fio. Duas chaves de alternância definem como os pinos **Rxd** e **Txd** dos módulos Bee serão conectados aos pinos do **Seeeduino**. Essas duas chaves fornecem opções para conectar as linhas **RxD** e **TxD** dos módulos Bee à **porta serial de hardware do Seeduino** ou aos pinos digitais **11** e **12** ou aos pinos **FTDI** **RxD** e **Txd**.

 **Model:[WLS114A0P](https://www.seeedstudio.com/depot/xbee%C3%82%C2%AE-shield-v11-by-seeedstudio-p-419.html?cPath=104_109)**

O **XBee®_Shield** da Seeed Studio é derivado do [Arduino Xbee shield](https://arduino.cc/en/Main/ArduinoXbeeShield), com os seguintes recursos:

* Formato menor
* Pacote SMT para a maioria dos componentes
* Baixo custo

Para usar o X-CTU com o [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/), faça o upload do seguinte sketch

```c
void setup()
{
  DDRB=0;
  DDRC=0;
  DDRD=0;
}

void loop()
{

}  
```

## Recursos  

1. Placa de 31 mm X 41 mm.
2. Comunica com Arduino/Seeeduino
    * Via porta serial por software pelos pinos 11 e 12 ou
    * Via porta serial de hardware

3. Os módulos Xbee podem ser configurados pelo X-CTU via USB
4. Quebra de todos os pinos

## Ideias de Aplicação  

<!-- *   Communicate two Seeeduinos / Arduinos Wirelessly using Bee Modules (**Xbee**,[BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/),[RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/)) -->
* Comunicar Seeeduino / Arduino com PC sem fio usando módulos Bee.
* Conectar **GPS Bee** ao Arduino / Seeeduino

## Cuidados  

* Ajuste as chaves de alternância para a posição correta antes de conectar aos módulos Bee ou Arduinos.

## Esquemático  

![](https://files.seeedstudio.com/wiki/XBee-Shield/img/Xbee_Shield_Schematic.jpg)

## Especificação  

Veja os [recursos](https://wiki.seeedstudio.com/pt-br/XBee_Shield/#Recursos-"XBee_Shield#Features") acima.

## Dimensões Mecânicas  

O XBee® Shield tem tamanho de 3,1 cm X 4,1 cm.

## Uso  

Um **módulo Bee** é conectado ao Arduino / Seeeduino por meio do XBee Shield. No caso de um Seeeduino, ajuste a chave de tensão de operação para a posição de 3,3 V. Normalmente os módulos Bee são conectados via porta serial por software ajustando as chaves de alternância (**TOG_1** e **TOG_2**) para as posições **do lado esquerdo**. Consulte as tabelas abaixo para diferentes configurações.

### Instalação de Hardware  

![](https://files.seeedstudio.com/wiki/XBee-Shield/img/Seeeduino_XBeeShield_XBeePro.jpg) ![](https://files.seeedstudio.com/wiki/XBee-Shield/img/Seeeduino_BluetoothBee_Xbee_Shield.JPG)

#### Contorno do Xbee Shield e Posição das Chaves de Alternância  

![](https://files.seeedstudio.com/wiki/XBee-Shield/img/XBee_Shield_Outline.jpg)

<table>
<caption>Arduino</caption>
<tr>
<th>TOG_1</th>
<th>TOG_2</th>
<th>Xbee Tx conectado a</th>
<th>Xbee Rx conectado a</th>
</tr>
<tr>
<td width="200">Esquerda</td>
<td width="200">Esquerda</td>
<td width="300">Pino digital 11</td>
<td width="300">Pino digital 12</td>
</tr>
<tr>
<td>Esquerda</td>
<td>Direita</td>
<td>FT232 RxD</td>
<td>FT232 TxD</td>
</tr>
<tr>
<td>Direita</td>
<td>Esquerda</td>
<td>Pino digital 11</td>
<td>Pino digital 12</td>
</tr>
<tr>
<td>Direita</td>
<td>Direita</td>
<td>Atmege RxD</td>
<td>Atmege TxD</td>
</tr>
</table>
<table>
<caption>Arduino Mega</caption>
<tr>
<th>TOG_1</th>
<th>TOG_2</th>
<th>Xbee Tx conectado a</th>
<th>Xbee Rx conectado a</th>
</tr>
<tr>
<td width="200">Esquerda</td>
<td width="200">Esquerda</td>
<td width="300">Pino digital 51</td>
<td width="300">Pino digital 50</td>
</tr>
<tr>
<td>Esquerda</td>
<td>Direita</td>
<td>FT232 RxD</td>
<td>FT232 TxD</td>
</tr>
<tr>
<td>Direita</td>
<td>Esquerda</td>
<td>Pino digital 51</td>
<td>Pino digital 50</td>
</tr>
<tr>
<td>Direita</td>
<td>Direita</td>
<td>Atmege RxD0</td>
<td>Atmege TxD0</td>
</tr>
</table>

### Testando comandos AT nos Bees  

Crie um novo sketch com o código a seguir e faça o download dele para sua placa Arduino.  

```c
//Serial Relay - Arduino will patch a
//serial link between the computer and the Bee Shield
//at 9600 bps 8-N-1
//Computer is connected to Hardware UART
//Bee Shield is connected to the Software UART

#include <NewSoftSerial.h>
#define RxD 11
#define TxD 12

NewSoftSerial mySerial(RxD,TxD);

void setup()
{
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    mySerial.begin(9600);               // the Bee baud rate  
    Serial.begin(9600);                 // the terminal baud rate  
}

void loop()
{
    if(Serial.available())
    {
       mySerial.print((unsigned char)Serial.read());
     }
    else  if(mySerial.available())
    {
       Serial.print((unsigned char)mySerial.read());
     }  

}
```

 Depois disso, abra seu software de terminal serial favorito, escolha a porta COM do Arduino, configure-o para operar na taxa de baud padrão do seu Bee (o padrão do XBee é 9600 8-N-1), conecte e envie os comandos. Tente enviar "+++" (sem as aspas) para o módulo XBee, para a placa Arduino. O XBee deve responder enviando de volta um "OK".

### Enviar AT Versão Atualizada para V 1.0  

O código acima pode ter funcionado em versões anteriores, mas a biblioteca SoftwareSerial agora faz parte do núcleo. O código a seguir é retirado quase diretamente do [manual do Aruino SoftwareSerial.](https://arduino.cc/en/Reference/SoftwareSerial)

```c
/*
Example from Arduino SoftwareSerial tutorial
 */
#include <SoftwareSerial.h>

SoftwareSerial mySerial(11, 12); // RX, TX

void setup()  
{
  // Open serial communications and wait for port to open:
  Serial.begin(9600);
  mySerial.begin(9600);
}

void loop() // run over and over
{
  if (mySerial.available())
    Serial.write(mySerial.read());
  if (Serial.available())
    mySerial.write(Serial.read());
}
```

Carregue este código no Arudino que hospeda o Xbee Shield, inicie o Serial Monitor e, nesse ponto, a porta serial do Arduino estará conectada via rádio a quaisquer outros rádios xbee que estejam operando no momento — qualquer coisa que você digitar no serial monitor será enviada para os outros rádios e vice-versa.

### Programação  

O sketch a seguir configura o [Bluetooth Bee](https://seeeddoc.github.io/Bluetooth_Bee/) como **dispositivo escravo** e aguarda uma solicitação de conexão de um PC ou outro dispositivo mestre. O Bluetooth Bee é conectado ao Seeeduino via **XBee®_Shield** como mostrado acima.

```
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

Upload this sketch to Seeeduino and press reset*/

#include <NewSoftSerial.h>   //Software Serial Port
#define RxD 11
#define TxD 12
#define DEBUG_ENABLED  1

NewSoftSerial blueToothSerial(RxD,TxD);

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
//See Wiki for instructions  

  if(blueToothSerial.read() == st0">'a')
  {
    blueToothSerial.println(st0">"You are connected"); //You can     write you BT communication logic here
  }  
}

void setupBlueToothConnection()
{
  blueToothSerial.begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400
  delay(1000);
  sendBlueToothCommand(\r\n+STWMOD=0\r\n");
  sendBlueToothCommand(\r\n+STNA=SeeeduinoBluetooth\r\n");
  sendBlueToothCommand(\r\n+STAUTO=0\r\n");
  sendBlueToothCommand(\r\n+STOAUT=1\r\n");
  sendBlueToothCommand(\r\n +STPIN=0000\r\n");
  delay(2000); // This delay is required.
  sendBlueToothCommand(\r\n+INQ=1\r\n");
  delay(2000); // This delay is required.
}  


//Checks if the response "OK" is received
void CheckOK()
{
  char a,b;

  while(1)
  {
    if(blueToothSerial.available()) { a = blueToothSerial.read();   if(st0">'O' == a)
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

  while( (a = blueToothSerial.read()) sy3">!= sy2">-1)
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

Consulte **Bluetooth Bee Programming** para mais informações.

## FAQ  

Liste sua pergunta aqui (se houver).

## Suporte  

Se você tiver dúvidas ou outras ideias de design melhores, pode ir ao nosso [fórum](https://www.seeedstudio.com/forum) ou à **wish** para discutir.

## Rastreador de Versões  

<table>
<tbody>
<tr>
<th>Revisão</th>
<th>Descrições</th>
<th>Data de lançamento</th>
</tr>
<tr style={{fontSize: '90%'}}>
<td width={300}>XBee® Shield V1.1</td>
<td width={500}>nova versão da Seeedstudio</td>
<td width={200}>06 jul. 2009</td>
</tr>
</tbody>
</table>

## Rastreador de Bugs  

O Rastreador de Bugs é o lugar onde você pode enviar quaisquer bugs que ache que tenha encontrado durante o uso. Por favor, escreva o que você quiser dizer, suas respostas nos ajudarão a melhorar nossos produtos.

## Ideia Adicional  

A Ideia Adicional é o lugar para escrever suas ideias de projeto sobre este produto, ou outros usos que você encontrou. Ou você pode escrevê-las na página de Projetos.

## Como comprar  

Clique aqui para comprar: [https://www.seeedstudio.com/depot/xbee%C3%82%C2%AE-shield-v11-by-seeedstudio-p-419.html?cPath=104_109](https://www.seeedstudio.com/depot/xbee%C3%82%C2%AE-shield-v11-by-seeedstudio-p-419.html?cPath=104_109)

## Licenciamento  

Esta documentação é licenciada sob a [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) da Creative Commons. O código-fonte e as bibliotecas são licenciados sob [GPL/LGPL](http://www.gnu.org/licenses/gpl.html); consulte os arquivos de código-fonte para mais detalhes.

## Veja também  

[Bluetooth Bee documentation](/pt-br/Bluetooth_Bee "Bluetooth_Bee") demonstrando o uso do **XBee®_Shield**

## Links Externos  

Links para páginas da web externas que fornecem mais ideias de aplicação, documentos/datasheets ou bibliotecas de software.

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XBee-Shield/res/Eagle_XBee_Shield_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos  

* **[Arduino]**    [Página do Arduino Xbee Shield](https://arduino.cc/en/Main/ArduinoXbeeShield)

* **[Eagle]**    [eagle para Xbee_Shield_v1.0](https://files.seeedstudio.com/wiki/XBee-Shield/res/Eagle_XBee_Shield_v1.0.zip)

* **[PDF]**[XBee_Shield pdf](https://files.seeedstudio.com/wiki/XBee-Shield/res/XBee_Shield.pdf)

* **[Eagle]**[XBee_Shield sch](https://files.seeedstudio.com/wiki/XBee-Shield/res/XBee_Shield.sch)

* **[Eagle]**    [eagle para Xbee_Shield_v1.1](https://files.seeedstudio.com/wiki/XBee-Shield/res/Elage_xbee_shield_v1.1.zip)
* **[PDF]**[Xbee_shield_v1.1 pdf](https://files.seeedstudio.com/wiki/XBee-Shield/res/Xbee_shield_v1.11.pdf)

* **[EAGLE]**[Xbee_shield_v1.1 sch](https://files.seeedstudio.com/wiki/XBee-Shield/res/Xbee_shield_v1.11.sch)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
