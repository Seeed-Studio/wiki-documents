---
description: RePhone Lumi Kit
title: RePhone Lumi Kit
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/RePhone_Lumi_Kit
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/RePhone_Lumi_Kit_wiki_2.jpg)

RePhone Lumi Kit está especialmente diseñado para los amantes de los LED - ¡integra el módulo Xadow GSM+BLE en tu increíble dispositivo de iluminación y controla la luz vía SMS o Bluetooth!

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/RePhone-Lumi-Kit-p-2623.html)

##   Especificaciones
---
###   Xadow GSM+BLE

<table>
<tr>
<td> Microcontrolador </td>
<td> MT2502 </td>
</tr>
<tr>
<td> Núcleo MCU </td>
<td> Procesador RISC ARM7EJ-STM de 32 bits </td>
</tr>
<tr>
<td> RAM </td>
<td> 4 MB </td>
</tr>
<tr>
<td> Memoria Flash </td>
<td> 16 MB </td>
</tr>
<tr>
<td> Fuente de Alimentación </td>
<td> 3.3 ~ 4.2V(sin SIM)/3.5 ~ 4.2V(con SIM) </td>
</tr>
<tr>
<td> Consumo de Energía </td>
<td> 20mW/30mW/52mW @ reposo(sin radio)/reposo(GSM)/reposo(BT) </td>
</tr>
<tr>
<td> Cuatro bandas </td>
<td> 850/900/1800/1900 MHz </td>
</tr>
<tr>
<td> GPRS </td>
<td> Módem Clase 12 </td>
</tr>
<tr>
<td> Velocidad de Reloj </td>
<td> 260 MHz </td>
</tr>
<tr>
<td> Conectores </td>
<td> Conector de 35 PINES y Conector de 11 PINES para Módulos Xadow; Conector JST 1.0 para la batería </td>
</tr>
<tr>
<td> Interfaces </td>
<td> LCD, Audio, I2C, SPI, UART, y GPIOs etc </td>
</tr>
<tr>
<td> Dimensiones </td>
<td> 25.37mm × 20.30mm / 1" × 0.8" </td>
</tr>
</table>

###   Xadow Duino

<table>
<tr>
<td> Microcontrolador </td>
<td> ATmega32u4 </td>
</tr>
<tr>
<td> Fuente de Alimentación </td>
<td> 5V vía USB, consumo de corriente es 1.5A máximo 3.3 ~ 4.2V vía conector de batería, consumo de corriente es 1.5A máximo 3.3 ~ 6V vía pines de conexión, consumo de corriente es 500 mA máximo 3.3 ~ 4.2 V vía Xadow GSM+BLE, consumo de corriente es 500 mA máximo </td>
</tr>
<tr>
<td> Corriente de Carga </td>
<td> 500 mA </td>
</tr>
<tr>
<td> Memoria Flash </td>
<td> 32 KB (ATmega32u4) de los cuales 4 KB son utilizados por el bootloader </td>
</tr>
<tr>
<td> SRAM </td>
<td> 2.5 KB (ATmega32u4) </td>
</tr>
<tr>
<td> EEPROM </td>
<td> 1 KB (ATmega32u4) </td>
</tr>
<tr>
<td> Velocidad de Reloj </td>
<td> 16 MHz </td>
</tr>
<tr>
<td> Conector </td>
<td> 2 × 11 PIN Conector Xadow Pads de conexión para LED RGB WS2812b </td>
</tr>
<tr>
<td> Interfaces </td>
<td> Interfaz con Xadow GSM+BLE a través de I2C (dirección de 7 bits 0x23) </td>
</tr>
<tr>
<td> Dimensiones </td>
<td> 25.37mm × 20.30mm / 1"× 0.8" </td>
</tr>
</table>

###   Xadow GSM Breakout

<table>
<tr>
<td> Dimensiones </td>
<td> 25.37mm × 20.30mm / 1" × 0.8" </td>
</tr>
</table>


##  Conexión del Módulo
---
El Xadow GSM+BLE integra un conector Xadow de 36 pines y un conector Xadow de 11 pines. Como muestra la imagen aquí, puedes conectar el Xadow GSM+BLE al breakout Xadow GSM con un cable Xadow de 36 pines, pero ten en cuenta que el cable debe insertarse **firmemente** y **plano**, y lo más importante, **mantén el lado 'TOP' hacia arriba**. El conector Xadow de 11 pines tiene un diseño mucho más flexible, puedes conectar el Xadow Duino y la placa principal con un cable de cinta Xadow de 11 pines de la manera que quieras, nuevamente solo asegúrate de que el cable esté insertado firmemente.

![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/RePhone_Lumi_Kit_wiki_2.jpg)

##  ¡Controla la Luz con SMS!
---
Aquí tienes un ejemplo de cómo controlar tus LEDs RGB enviando un mensaje a tu RePhone.

<!-- Primero necesitas seguir las instrucciones en **[Arduino IDE for RePhone Kit](/Arduino_IDE_for_RePhone_Kit "Arduino IDE for RePhone Kit")** para descargar el Arduino IDE para RePhone Kit así como instalar los controladores. -->
Luego copia el siguiente código a tu Arduino IDE para RePhone. Elige la **placa como "RePhone"** y **descárgalo con el "MTK USB Debug Port"**.
```
#include <LCheckSIM.h>
#include <LGSM.h>
#include <LWs2812.h>
#include <string.h>
#include <stdio.h>
#include <stdlib.h>

//SMS command 0 : "OFF" - off display.
//SMS command 1 : "R100G0B0" - red color is 100, green color is 0, blue coler is 0.
char num[20];
char buf_contex[200];


void setup()
{
    Serial.begin(115200);
    Serial.print("Ws2812 test.\r\n");
}

void loop()
{
    unsigned long rgb_color;

    if(LSMS.available())
    {
        LSMS.remoteNumber(num, 20);
        LSMS.remoteContent(buf_contex, 50);

        Serial.println("Get new sms: ");

        Serial.print("Number:");
        Serial.println(num);

        Serial.print("Content:");
        Serial.println(buf_contex);

        if(strcmp("OFF", buf_contex) == 0)
        {
            Serial.print("RGB off.\r\n");
            LWs2812.monochrome(5, 0, 1);
        }
        else
        {
            if(StingFind(buf_contex, "R", 1))
            {
                if(StingFind(buf_contex, "G", 1))
                {
                    if(StingFind(buf_contex, "B", 1))
                    {
                        Serial.print("RGB flag is find.\r\n");
                        char color_r[4] = {0};
                        char color_g[4] = {0};
                        char color_b[4] = {0};

                        sscanf(buf_contex + 1,"%[^G]", color_r);
                        sscanf(buf_contex,"%*[^G]G%[^B]", color_g);
                        sscanf(buf_contex,"%*[^B]B%[^\0]", color_b);

                        rgb_color = atol(color_r)*256*256 + atol(color_g)*256 + atol(color_b);

                        Serial.print("rgb color is ");
                        Serial.println(rgb_color);
                        delay(100);
                        LWs2812.monochrome(5, rgb_color, 0);
                        delay(100);
                        LWs2812.monochrome(5, rgb_color, 0);
                    }
                }
            }
        }
    }
}

int StingFind(char* string, char* find, int number)
{
    char* pos = string;
    char* p = string;
    int count = 0;

    while(number > 0)
    {
        pos = strstr(p, find);
        if(pos == 0)return -1;

        while(p <= pos)
        {
            if(*p > 0x80 || *p < 0)
            {
                p ++;
            }
            p ++;
            count ++;
        }
        number --;
    }
    return count;
}
```

En este código establecemos el comando SMS como:
···
**"OFF"** - apagar pantalla.
**"R100G0B0"** - el color rojo es 100, el color verde es 0, el color azul es 0.
···

Así que si enviamos **"R100G0B0"** al RePhone, los LEDs se volverán rojos como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/TESTR100.jpg)

##  Más Código de Ejemplo
---
Jugar con algunos códigos de ejemplo sería un buen comienzo si te diriges hacia algún proyecto aún más interesante.

1. Simplemente configura tu **ubicación del sketchbook** en las **preferencias** como donde instalaste el Arduino IDE para RePhone, entonces podrás ver los códigos de ejemplo.

![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/Arduino_Sketchlocation.png)

2. Puedes encontrar el código de ejemplo de Arduino codificado manualmente para todos los módulos RePhone en la siguiente ruta:

_**Arduino_IDE_for_RePhone-master\hardware\arduino\mtk\libraries**_

![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/Example_code_Arduino_IDE.png)

##  Comunidad RePhone
---
[![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/RePhone_Community-2.png)](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

Hemos estado buscando un mejor lugar donde nuestros patrocinadores (Usuarios de RePhone) puedan sentarse juntos, cálida y cómodamente, tener conversaciones sobre RePhone, discutir problemas técnicos, compartir ideas/proyectos, y dar retroalimentación sobre el desarrollo de los módulos en el futuro. Y entonces aquí vamos, la Comunidad RePhone.

¡Ahora únete a nosotros en la [Comunidad RePhone](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)! Juntos buscamos respuestas, hacemos cosas interesantes, nos cuidamos unos a otros, y compartimos nuestras experiencias.

###   Preguntas Frecuentes

Algunas preguntas frecuentes en la Comunidad RePhone son recopiladas y respondidas en el tema **["Preguntas Frecuentes de RePhone (FAQ)"](https://forum.seeedstudio.com/viewtopic.php?f=71&amp;t=6664&amp;p=23753#p23753)** , el tema se mantendrá actualizándose cada vez que surja una nueva FAQ.

##  Recursos
---
<!-- Please go the Wiki page [Xadow Duino](/es/Xadow_Duino) for more info. -->

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
