---
description:  Bugduino
title: Bugduino
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Bugduino
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Bugduino/img/Bugduino-V2r0-Front.jpg)

Bugduino es un módulo compatible con Arduino.

Diseñado para trabajar con la [plataforma BUG de Buglabs](http://www.buglabs.net/).

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bugduino-V2.0-p-863.html)

##   Características
---
*   Compatible con [Arduino](https://arduino.cc), basado en Seeeduino
*   Conector BUG
*   USB a Uart: FT232RL
*   Microcontrolador ATmega328
*   Voltaje de entrada - 7-12V
*   14 Pines de E/S Digitales (6 salidas PWM)
*   8 Entradas Analógicas
*   32k de Memoria Flash
*   Velocidad de Reloj de 16Mhz

**

##   Esquemático

1.  [File:BUGduinoSchematicPDF.pdf](https://files.seeedstudio.com/wiki/Bugduino/res/BUGduinoSchematicPDF.pdf)


##   Especificaciones

<table cellpadding="1" cellspacing="1">
<tr>
<th scope="row">Microprocesador</th>
<td>Atmega328</td>
</tr>
<tr>
<th scope="row">Tamaño de PCB</th>
<td>60.2cm x 60.2cm</td>
</tr>
<tr>
<th scope="row">Indicadores</th>
<td>POWER, LED Verde. LEDs para Txd, Rxd, Rst</td>
</tr>
<tr>
<th scope="row">Fuente de alimentación</th>
<td>5V DC</td>
</tr>
<tr>
<th scope="row">Interfaz</th>
<td>USB Mini-B, conector de pines de 2.54mm</td>
</tr>
<tr>
<th scope="row">Conectividad</th>
<td>USB</td>
</tr>
<tr>
<th scope="row">Protocolo de Comunicación</th>
<td>UART, Bit Bang I/O, SPI, I2C</td>
</tr>
<tr>
<th scope="row">ROHS</th>
<td>SÍ</td>
</tr>
</table>


##   Dimensiones Mecánicas

60.2mm * 60.2mm * 20.5mm

##   Uso

###   Instalación de Hardware

1.  Cambie el Interruptor Serial al lado USB;

2.  Conecte el cable USB;

3.  Seleccione el puerto COM correspondiente en el IDE de Arduino;

4.  Seleccione "Arduino Duemilanove or Nano w/ ATmega328" en el menú de placas de Arduino;

5.  haga clic en el botón de cargar en el IDE de Arduino;

###   Programación
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

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>