---
description: Xadow - LED 5x7 v1.0
title: Xadow - LED 5x7 v1.0
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_LED_5_multiply_7_v1.0
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_LED_5_multiply_7_v1.0/
---

![](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/img/Xadow_LED_01.jpg)

O Xadow LED 5x7 contém duas partes: um painel de LED e um controlador de LED. O painel de LED é uma matriz monocromática 5x7. O controlador de LED é um módulo de controle para controlar o painel de LED usando 12 pinos de E/S do Atmega168PV. Você pode enviar comandos ao controlador de LED através da interface I2C. Em seguida, deixe o controlador de LED controlar o display de LED. Por exemplo, exibir letras e números ou entrar no modo de suspensão para reduzir o consumo.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/xadow-led-p-1518.html)

##  Especificação
---
*   Tensão de trabalho: 3,3 V
*   Microcontrolador integrado
*   Modo de controle: I2C (endereço 0x04)
*   Dimensões: 25,43 mm x 20,35 mm

##  Demonstração
---
Conforme descrito na introdução, o LED pode exibir letras e números. A seguir mostraremos a você a demonstração interessante.

A instalação de hardware é como mostrado abaixo:

![](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/img/XadowLED5X7.jpg)

Nota: ao conectar o Xadow LED 5X7 à Xadow Main Board, você deve prestar atenção à direção da conexão. O método de conexão é que o canto não preenchido de um módulo Xadow precisa ser conectado ao ângulo reto de outro módulo (veja os quatro cantos de cada módulo Xadow).
O código de teste para exibir string ou caractere:

```
#include "Wire.h"
#define XADOW_DEBUG 1
#define LEDAddress 0x04

#define DISP_CHAR_5X7    0x80
#define DISP_STRING        0x81
#define SET_DISP_ORIENTATION 0x82
/*Marco definitions for the display orientation of the LED matrix*/
#define RIGHT_TO_LEFT 0
#define LEFT_TO_RIGHT 1
#define POWER_DOWN  0x83
uint8_t buffer[24];
int error;
int n;
char *str = "SeeedStudio123";
void setup(void)
{
    Wire.begin();
    delay(100);
#if 0
    TESTIO();
    if(error==0)
    {
        DDRB|=0x80;
        PORTB&=~0x80;
    }
#endif

}
void loop(void)
{
    for(n=0;n<100;n++)
    {
        dispString(str,strlen(str),150);
        delay(300);
    }
    //display the "seeed0728"(9 characters) on the
    //Xadow LED and the character moving one step costs 150m

}

/**********************************************************************/
/*Function: Send command to Xadow LED to display a string by the I2C. */
/*Parameter:-char* data_,Store a string to display on the Xadow LED.  */
/*          -uint8_t len,The length of the data_.                     */
/*            -uint16_t time,The time of the character moving one    step. */
/*Return:    void                                                        */
void dispString(char* data_,uint8_t len,uint16_t time)
{
    Wire.beginTransmission(LEDAddress);
    Wire.write(DISP_STRING);
    Wire.write(len);
    Wire.write((uint8_t*)data_,len);
    Wire.write(time>>8); //high byte of time
    Wire.write(time);//low byte of time
    Wire.endTransmission();
}
void dispChar(uint8_t data_,uint16_t time)
{
    Wire.beginTransmission(LEDAddress);
    Wire.write(DISP_CHAR_5X7);
    Wire.write(data_);
    Wire.write(time>>8); //high byte of time
    Wire.write(time);//low byte of time
    Wire.endTransmission();
}
void setDispOrientation(uint8_t orientation)
{
    Wire.beginTransmission(LEDAddress);
    Wire.write(SET_DISP_ORIENTATION);
    Wire.write(orientation);
    Wire.endTransmission();
}
void powerDown()
{
    Wire.beginTransmission(LEDAddress);
    Wire.write(POWER_DOWN);
    Wire.endTransmission();
    digitalWrite(3,HIGH);
}
void wakeUp()
{
    Wire.beginTransmission(LEDAddress);
    Wire.endTransmission();
}

void TESTIO(void)
{

    DDRB|=0x0e;
    PORTB&=~0x0e;
    DDRF|=0x01;
    PORTF&=~0x01;
    DDRD&=~0x0f;

    PORTB|=0x04;
    PORTF|=0x01;
    delay(30);
    if(!(PIND&0x01))
    {
        error=1;
    }
    if(PIND&0x02)
    {
        error=1;
    }
    if(!(PIND&0x04))
    {
        error=1;
    }
    if(PIND&0x08)
    {
        error=1;
    }
    PORTB&=~0x04;
    PORTB|=0x0a;
    PORTF&=~0x01;
    delay(30);
    if(PIND&0x01)
    {
        error=1;
    }
    if(!(PIND&0x02))
    {
        error=1;
    }
    if(PIND&0x04)
    {
        error=1;
    }
    if(!(PIND&0x08))
    {
        error=1;
    }
    Serial.println(error);
}
```

Você pode ver a cena abaixo depois de enviar o código para a Xadow Main Board.

![](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/img/LED_Effect_Diagram_.JPG)

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/res/Xadow_LED_5X7_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##  Recursos
---
*   [Arquivo Eagle do Xadow LED 5X7](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/res/Xadow_LED_5X7_eagle_file.zip)

*   [Firmware do Xadow LED](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/res/Xadow_LED_Firmware.zip)

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