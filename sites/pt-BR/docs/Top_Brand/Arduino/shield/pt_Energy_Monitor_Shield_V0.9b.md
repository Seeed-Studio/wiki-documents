---
description: Energy Monitor Shield V0.9b
title: Energy Monitor Shield V0.9b
keywords:
  - Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Energy_Monitor_Shield_V0.9b
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Energy_Monitor_Shield_V0.9b/
---

<!-- ---
name: Energy Monitor Shield V0.9b
category: Discontinued
bzurl:
oldwikiname: Energy_Monitor_Shield_V0.9b
prodimagename:
bzprodimageurl: https://www.research.net/r/Energy_Monitor_Shield_V0-9b
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/Energy_Monitor_Shield_V0.9b/img/EMS_intro.jpg)

![](https://files.seeedstudio.com/wiki/Energy_Monitor_Shield_V0.9b/img/EMS_h.jpg)
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Energy-Monitor-Shield-Monitoring-System-with-Nokia-LCD-Screen-p-1775.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

Energy Monitor Shield é uma placa de expansão compatível com Arduino projetada para construir um sistema de monitoramento de energia com tela LCD e uma interface para conectar o transceptor sem fio nRF24L01 +.

Modelo: [830070001](https://www.seeedstudio.com/)

## Recursos

* Conecte até três sensores AC (30-100A).

* Suporte para tela LCD Nokia LCD5110

* Desligue a luz de fundo do LCD com um jumper

* Dois botões para controle (operam um pino analógico)

* Interface para conectar o transceptor a 2.4G nRF24L01 +

* Conector compatível com GROVE: I2C

* Totalmente compatível com Ethernet Shield (Wiznet 5100 + SD)

## Layout e esquemáticos

![](https://files.seeedstudio.com/wiki/Energy_Monitor_Shield_V0.9b/img/Em-top.jpg)

* No lado esquerdo do EM Shield há três conectores para sensores de corrente, à direita - conector para a tela LCD.

* O jumper JP1 é usado para ativar / desativar a luz de fundo real da tela LCD.

* No canto superior direito - conector I2C.

* À direita estão dois botões (rotulados S1 e S2).

* No centro da placa (logo à direita da tela LCD) - conector para nRF24L01 +.

**Esquemático do dispositivo**

## Funcionalidade básica

Na versão básica (sem usar o Ethernet Shield) pode-se organizar o monitoramento do consumo de energia em três circuitos diferentes usando sensores de corrente. As informações sobre o nível atual de consumo podem ser exibidas na tela LCD. O gerenciamento do dispositivo pode ser organizado usando dois botões no Shield. Os dados obtidos podem ser transmitidos pelo transceptor nRF24L01 +.

## Capacidades de expansão

Adicionalmente, o EM Shield pode conectar qualquer dispositivo usando o conector Grove compatível com i2c (sensores, telas, etc.).
O EM Shield foi projetado para ser totalmente compatível com o Ethernet Shield (Wiznet 5100 + SD) - assim você pode usar esses dois Shields juntos para criar um dispositivo de monitoramento de eletricidade ainda mais avançado (registro em cartão SD e apresentação de dados em uma página web).

## Interfaces

* A0, A1, A2 - usados para conectar sensores AC

* A4 (SDA), A5 (SCL) - expostos no conector "I2C" (os outros dois pinos do conector - VCC e GND para alimentação do sensor)

* Interface para conectar módulo RF nRF24L01+:

  * D11 - MOSI

    * D12 - MISO
  * D13 - SCK

    * D8 - RF_CE

    * D7 - RF_CSN

    * D2 - RF_IRQ

* Interface para conectar LCD5110:

  * D11 - MOSI
  * D13 - SCK

    * D5 - LCD_D/C

    * D6 - LCD_RST

    * D3 - LCD_CS

* A3 - Botões

## Bibliotecas

### Bibliotecas necessárias

Para usar o Energy Monitor Shield são necessárias as seguintes bibliotecas:

* Trabalho com o transceptor nRF24L01+ - [RF24](https://github.com/maniacbug/RF24/archive/master.zip)

* Uso da tela LCD 51110 (com suporte a SPI) - [LCD5110_Graph_SPI](https://github.com/stepanovalex/LCD5110_Graph_SPI/archive/master.zip)

* Trabalho com sensores de corrente - [EmonLib](https://github.com/openenergymonitor/EmonLib/archive/master.zip)

* Você deve usar a biblioteca de - [www.mysensors.org](https://github.com/mysensors/Arduino/tree/master)

* MySensors Arduino Library [(v1.5)](http://www.mysensors.org/download/sensor_api_15)

São necessárias as bibliotecas que são usadas ao trabalhar com RF24 e tela LCD: SPI

### Recursos ao usar as bibliotecas

A biblioteca usou exemplos delas apenas para entender como funcionam.

A inicialização do módulo RF é a seguinte:

```
... //RF24 radio(CE,CSN); RF24 radio(7,8); ...
```

A inicialização da tela LCD é a seguinte:

```
... //LCD5110 myGLCD(DC,RST,CS); LCD5110 myGLCD(5,6,3); ...
```

## Demonstração simples

```cpp

#include <SPI.h>
#include <LCD5110_Graph_SPI.h>
#include "EmonLib.h"   

#define WINDOW 15
#define DELTA 1500

EnergyMonitor emon1;

double sIrms;
float Pcur;
float Pmax;
float Pmin=100;

LCD5110 myGLCD(5,6,3);

extern unsigned char SmallFont[];

unsigned long measureTime;
boolean flag=false;
double delta=0;

#define DELTAMEASURE 30000

void setup(void)
{
  myGLCD.InitLCD(70);
  myGLCD.setFont(SmallFont);

  myGLCD.update();

  emon1.current(0, 111.1);             // Current: input pin, calibration.
  double Irms[WINDOW];
  // Calibrate (find offset)
  double cIrms = 0;
  flag = false;

  while (!flag) {
    myGLCD.print("calibrating", 0, 0);
    myGLCD.update();
    Irms[0] = emon1.calcIrms(1480); // the first value in the measurement obviously "crooked"
      //Serial.println("calculate delta");
      for (int i=0; i<WINDOW; i++) {
        Irms[i] = emon1.calcIrms(1480);
        cIrms = cIrms + Irms[i];
        delay(100);
      }
      delta = cIrms/WINDOW;
      flag = true;
  }

//myGLCD.print(" ready", 0, 0);
    //myGLCD.update();    

}

void loop(void)
{
  // write the current value
  sIrms = emon1.calcIrms(1480) - delta;  // Calculate Irms only
  sIrms = abs(sIrms);
  Pcur = sIrms*0.220;

    // the received data is printed
    char tbuf[6];
    dtostrf(Pcur,5,5,tbuf);
    myGLCD.print(tbuf, 0, 0);
    dtostrf(analogRead(A3),4,0,tbuf);
    myGLCD.print(tbuf, 30, 15);

    myGLCD.update();

    delay(250);

}
```

## Demonstração simples com tecnologia sem fio

```cpp
/*
 This example code is in the public domain.
 */

#include <SPI.h>
#include <MySensor.h>  // Include MySensors.org Library V1.5
#include "EmonLib.h" // Include Emon Library
#include <LCD5110_Graph_SPI.h> // Include NOKIA5110 Library

#define CHILD_ID_POWER 0

EnergyMonitor emon;

LCD5110 myGLCD(5,6,3);
extern unsigned char SmallFont[];

MyTransportNRF24 transport(7, 8); //for EMv1
MySensor gw(transport);

unsigned long lastSend;
unsigned long SEND_FREQUENCY = 20000; // Minimum time between send (in milliseconds). We don't wnat to spam the gateway.

float Irms;
float lastIrms = -99;

char tbuf[8];
char sbuf[12];

MyMessage IrmsMsg(CHILD_ID_POWER, V_KWH);

void setup()  
{
  myGLCD.InitLCD();
  myGLCD.setFont(SmallFont);
  myGLCD.update();

  // The third argument enables repeater mode.
  gw.begin(NULL, AUTO, true),
  gw.sendSketchInfo("Energy Monitor v1", "1.0");

//  emon.current(0, 111.1);             // Current: input pin, calibration.
   emon.current(0, 66.5);

  // Register all sensors to gw (they will be created as child devices)

  gw.present(CHILD_ID_POWER, S_POWER);
}

void loop()      
{      
  gw.process();
  unsigned long now = millis();

  double Irms = emon.calcIrms(1480);  // Calculate Irms only
  float realIrms  = emon.Irms*220;        //extract Real Power into variable

 if (realIrms != lastIrms) {
      gw.send(IrmsMsg.set(realIrms, 1)); //send to gateway

  lastIrms=realIrms;
  }

   dtostrf(realIrms,5,2,tbuf);
    sprintf(sbuf, "  %s kWt", tbuf);
    myGLCD.print(sbuf, 20, 0);   
    myGLCD.print("Powr:", 0, 0);  

    dtostrf(Irms,5,2,tbuf);
    sprintf(sbuf, "  %s Amp", tbuf);
    myGLCD.print(sbuf, 20, 10);   
    myGLCD.print("Irms:", 0, 10);  

    myGLCD.update();

      Serial.print("Power: ");
      Serial.println(realIrms);

  gw.sleep(SEND_FREQUENCY);
  }
```

## Rastreador de Versões

<table cellPadding={5} cellSpacing={0}>
  <tbody>
    <tr>
      <td width={150}>Revisão</td>
      <td width={450}>Descrição</td>
      <td width={80}>Lançamento</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>1.0</td>
      <td>Versão pública</td>
      <td>01.04.2014</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>0.9b</td>
      <td>Versão pública (Não produzida)</td>
      <td>20.10.2013</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>0.9</td>
      <td>Protótipo</td>
      <td>10.09.2013</td>
    </tr>
  </tbody>
</table>

## Perguntas e Respostas

* Blog [Energy Monitor Shield - Wireless energy monitoring](/pt-br//devicter.blogspot.ru/2014/03/energy-monitor-shield.html#more) RU

* Faça uma pergunta por e-mail para support@devicter.ru

## Como comprar  

Este produto pode ser adquirido em:

* China (envio mundial)

  * [Loja Seeed](https://www.seeedstudio.com/depot/Energy-Monitor-Shield-Monitoring-System-with-Nokia-LCD-Screen-p-1775.html)

* Rússia

  * [Loja Devicter](http://devicter.ru/goods/EM-Shield)

## Licenciamento  

Esta documentação é licenciada sob a [Licença Creative Commons Atribuição-CompartilhaIgual 3.0](http://creativecommons.org/licenses/by-sa/3.0/) O código-fonte e as bibliotecas são

licenciados sob [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), veja os arquivos de código-fonte para detalhes.

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
