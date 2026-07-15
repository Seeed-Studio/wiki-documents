---
description: Bugduino
title: Bugduino
keywords:
  - grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Bugduino
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-28'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Bugduino/
---
![](https://files.seeedstudio.com/wiki/Bugduino/img/Bugduino-V2r0-Front.jpg)

Bugduino é um módulo compatível com Arduino.

Projetado para funcionar com a [plataforma BUG da Buglabs](http://www.buglabs.net/).

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bugduino-V2.0-p-863.html)

##   Recursos
---
*   Compatível com [Arduino](https://arduino.cc), baseado em Seeeduino
*   Conector BUG
*   USB para Uart: FT232RL
*   Microcontrolador ATmega328
*   Tensão de entrada - 7-12V
*   14 pinos de I/O digitais (6 saídas PWM)
*   8 entradas analógicas
*   32k de memória Flash
*   Clock de 16Mhz

**

##   Esquemático

1.  [File:BUGduinoSchematicPDF.pdf](https://files.seeedstudio.com/wiki/Bugduino/res/BUGduinoSchematicPDF.pdf)


##   Especificações

<table cellpadding="1" cellspacing="1">
<tr>
<th scope="row">Microprocessor</th>
<td>Atmega328</td>
</tr>
<tr>
<th scope="row">PCB size</th>
<td>60.2cm x 60.2cm</td>
</tr>
<tr>
<th scope="row">Indicators</th>
<td>POWER,Green LED. LEDs for Txd, Rxd, Rst</td>
</tr>
<tr>
<th scope="row">Power supply</th>
<td>5V DC</td>
</tr>
<tr>
<th scope="row">Interface</th>
<td>Mini-B USB, 2.54mm pitch pin header</td>
</tr>
<tr>
<th scope="row">Connectivity</th>
<td>USB</td>
</tr>
<tr>
<th scope="row">Communication Protocol</th>
<td>UART, Bit Bang I/O, SPI, I2C</td>
</tr>
<tr>
<th scope="row">ROHS</th>
<td>YES</td>
</tr>
</table>


##   Dimensões mecânicas

60.2mm * 60.2mm * 20.5mm

##   Uso

###   Instalação de hardware

1.  Alterne o Serial Switch para o lado USB;

2.  Conecte o cabo USB;

3.  Selecione a porta COM correspondente na IDE do Arduino;

4.  Selecione "Arduino Duemilanove or Nano w/ ATmega328" no menu Arduino Board;

5.  Clique no botão de upload na IDE do Arduino;

###   Programação
```
#include <Wire.h>

//SLOTS: Vendor:  0x02
//SLOTS: Product  0x10
//SLOTS: Revision 0x20
//A0-->GND, A1-->GND, A2-->GND
#define AT24C02B_Addr  0b1010000

unsigned char bugduino_signature[]=
{
    0x00,0x00,0x02,0x00,0x10,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x0b,0x16,0x00,0x00,0x00,0x0f
};
unsigned char address_map[]=
{
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,0x7f
};

void setup()
{
    Wire.begin();
    Serial.begin(38400);
}
void loop()
{
  /*
   */
    unsigned char i = 0;
    unsigned char eeprom = 0;
    for(i=0;i<20;i++)
    {
        Wire.beginTransmission(AT24C02B_Addr); //start
        Wire.send(address_map[i]);
        Wire.endTransmission();    //stop
        Wire.requestFrom(AT24C02B_Addr, 1);    // request
        delay(1);
        while(Wire.available())    // slave may send less than requested
        {
            unsigned char c = Wire.receive(); // receive a byte as character
            if(c != bugduino_signature[i])
            {
                eeprom =1;
            }
        }
    }
    delay(100);

    if(eeprom)
    {
        Serial.println("Write Signature");
        for(i=0;i<20;i++)
        {
            Wire.beginTransmission(AT24C02B_Addr); //start
            Wire.send(address_map[i]);
            Wire.send(bugduino_signature[i]);
            Wire.endTransmission();    //stop
            delay(10);
        }
    }
    else
    {
        Serial.println("Signature OK");
    }
    for(;;);
}
```

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
