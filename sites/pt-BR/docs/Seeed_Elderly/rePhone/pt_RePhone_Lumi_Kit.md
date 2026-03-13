---
description: Kit RePhone Lumi
title: Kit RePhone Lumi
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /RePhone_Lumi_Kit
sku: 113060002
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/RePhone_Lumi_Kit/
---
![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/RePhone_Lumi_Kit_wiki_2.jpg)

O Kit RePhone Lumi é especialmente projetado para amantes de LED - incorporando o módulo Xadow GSM+BLE ao seu incrível dispositivo de iluminação e controlando a luz via SMS ou Bluetooth!

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/RePhone-Lumi-Kit-p-2623.html)

##   Especificação
---
###   Xadow GSM+BLE

<table>
<tr>
<td> Microcontrolador </td>
<td> MT2502 </td>
</tr>
<tr>
<td> Núcleo do MCU </td>
<td> Processador RISC ARM7EJ-STM de 32 bits </td>
</tr>
<tr>
<td> RAM </td>
<td> 4 MB </td>
</tr>
<tr>
<td> Memória Flash </td>
<td> 16 MB </td>
</tr>
<tr>
<td> Fonte de Alimentação </td>
<td> 3.3 ~ 4.2V(sem SIM)/3.5 ~ 4.2V(com SIM) </td>
</tr>
<tr>
<td> Consumo de Energia </td>
<td> 20mW/30mW/52mW em espera(sem rádio)/espera(GSM)/espera(BT) </td>
</tr>
<tr>
<td> Quad-band </td>
<td> 850/900/1800/1900 MHz </td>
</tr>
<tr>
<td> GPRS </td>
<td> Modem Classe 12 </td>
</tr>
<tr>
<td> Velocidade de Clock </td>
<td> 260 MHz </td>
</tr>
<tr>
<td> Conectores </td>
<td> Conector de 35 PIN e Conector de 11 PIN para Módulos Xadow; Conector JST 1.0 para a bateria </td>
</tr>
<tr>
<td> Interfaces </td>
<td> LCD, Áudio, I2C, SPI, UART e GPIOs etc. </td>
</tr>
<tr>
<td> Dimensões </td>
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
<td> Fonte de Alimentação </td>
<td> 5V via USB, corrente de 1.5A Máx; 3.3 ~ 4.2V via soquete de bateria, corrente de 1.5A Máx; 3.3 ~ 6V via pinos de breakout, corrente de 500 mA Máx; 3.3 ~ 4.2 V via Xadow GSM+BLE, corrente de 500 mA Máx </td>
</tr>
<tr>
<td> Corrente de Carga </td>
<td> 500 mA </td>
</tr>
<tr>
<td> Memória Flash </td>
<td> 32 KB (ATmega32u4), dos quais 4 KB usados pelo bootloader </td>
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
<td> Velocidade de Clock </td>
<td> 16 MHz </td>
</tr>
<tr>
<td> Conector </td>
<td> 2 × 11 PIN Conector Xadow; ilhas de solda para LED RGB WS2812b </td>
</tr>
<tr>
<td> Interfaces </td>
<td> Interface com Xadow GSM+BLE através de I2C (endereço de 7 bits 0x23) </td>
</tr>
<tr>
<td> Dimensões </td>
<td> 25.37mm × 20.30mm / 1"× 0.8" </td>
</tr>
</table>

###   Xadow GSM Breakout

<table>
<tr>
<td> Dimensões </td>
<td> 25.37mm × 20.30mm / 1" × 0.8" </td>
</tr>
</table>

##  Conexão do Módulo
---
O Xadow GSM+BLE integra um conector Xadow de 36 pinos e um conector Xadow de 11 pinos. Como mostra a imagem aqui, você pode conectar o Xadow GSM+BLE ao Xadow GSM breakout com um cabo Xadow de 36 pinos, mas lembre-se de que o cabo deve ser inserido **firmemente** e **plano** e, o mais importante, **mantenha o lado 'TOP' voltado para cima**. O conector Xadow de 11 pinos tem um design muito mais flexível; você pode conectar o Xadow Duino e a placa principal com um cabo flat Xadow de 11 pinos da maneira que quiser, apenas certifique-se novamente de que o cabo esteja firmemente inserido.

![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/RePhone_Lumi_Kit_wiki_2.jpg)

##  Controle a Luz com SMS!
---
Aqui está um exemplo de como controlar seus LEDs RGB enviando uma mensagem para o seu RePhone.

<!-- Firstly you need to follow the instructions in the **[Arduino IDE for RePhone Kit](/pt-br/Arduino_IDE_for_RePhone_Kit "Arduino IDE for RePhone Kit")** to download the Arduino IDE for RePhone Kit as well as install the drivers. -->
Em seguida, copie o código a seguir para o seu Arduino IDE para RePhone. Escolha a **placa como "RePhone"** e **faça o download com a "MTK USB Debug Port"**.
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

Neste código definimos o comando SMS como:
···
**"OFF"** - desligar o display.
**"R100G0B0"** - cor vermelha é 100, cor verde é 0, cor azul é 0.
···

Então, se enviarmos **"R100G0B0"** para o RePhone, os LEDs ficarão vermelhos, como mostrado abaixo:

![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/TESTR100.jpg)

##  Mais Código de Exemplo
---
Brincar com algum código de exemplo seria um bom começo se você estiver partindo para um projeto ainda mais interessante.

1. Simplesmente configure o seu **local do sketchbook** em **preference** como o local onde você instalou o Arduino IDE para RePhone, então você poderá ver os códigos de exemplo.

![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/Arduino_Sketchlocation.png)

2. Você pode encontrar os exemplos de Arduino codificados manualmente para todos os módulos RePhone no seguinte caminho:

_**Arduino_IDE_for_RePhone-master\hardware\arduino\mtk\libraries**_

![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/Example_code_Arduino_IDE.png)

##  Comunidade RePhone
---
[![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/RePhone_Community-2.png)](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

Temos procurado um lugar melhor onde nossos apoiadores (usuários do RePhone) possam se reunir, de forma acolhedora e confortável, conversar sobre o RePhone, discutir problemas técnicos, compartilhar ideias/projetos e dar feedback sobre o desenvolvimento dos módulos no futuro. E então, aqui está, a Comunidade RePhone.

Agora junte-se a nós na [Comunidade RePhone](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)! Juntos buscamos respostas, fazemos coisas interessantes, cuidamos uns dos outros e compartilhamos nossas experiências.

###   Perguntas Frequentes

Algumas perguntas frequentes na Comunidade RePhone são coletadas e respondidas no tópico **["Frequently Asked Questions of RePhone (FAQ)"](https://forum.seeedstudio.com/viewtopic.php?f=71&amp;t=6664&amp;p=23753#p23753)**, que será mantido atualizado sempre que surgir uma nova FAQ.

##  Recursos
---
<!-- Please go the Wiki page [Xadow Duino](/pt-br/Xadow_Duino) for more info. -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
