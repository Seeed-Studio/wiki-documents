---
description: Xadow - RTC (Relógio de Tempo Real)
title: Xadow - RTC (Relógio de Tempo Real)
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_RTC
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Xadow_RTC/
---

![](https://files.seeedstudio.com/wiki/Xadow_RTC/img/Xadow_RTC_01.jpg)

Às vezes, você sempre quer saber que horas são. Se perdi o encontro ou não, ou se já é hora da refeição do meu bebê de três meses. O módulo RTC pode fornecer um relógio em tempo real. Você pode fazer o controlador perguntar ao módulo: oi, amigo, que horas são. Ao mesmo tempo, não se esqueça de instalar uma pequena bateria tipo moeda que pode funcionar por mais de seis meses.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-RTC-p-1523.html)

##  Especificação
---
*   Relógio de Tempo Real (RTC) conta segundos, minutos, horas, data do ano, mês, dia da semana e ano com compensação de ano bissexto
*   Pode ser configurado no formato de 12 horas ou 24 horas
*   Válido até 2100
*   Dimensões: 25,43mm x 20,35mm

:::caution
    Para obter um desempenho robusto, você deve colocar uma célula de lítio CR1220 de 3 volts no suporte de bateria. Se você usar apenas a alimentação primária, o módulo pode não funcionar normalmente, porque o cristal pode não oscilar.
:::
##  Demonstração
---
O sketch a seguir demonstra uma aplicação simples de configuração da hora e leitura dela.

**Instalação de Hardware:**

![](https://files.seeedstudio.com/wiki/Xadow_RTC/img/XadwoRTC.jpg)

Observação: ao conectar o Xadow RTC à Placa Principal Xadow, você deve se atentar à direção da conexão. O método de conexão é que o canto sem preenchimento de um módulo Xadow precisa ser conectado ao ângulo reto de outro módulo (veja os quatro cantos de cada módulo Xadow).

**Código de demonstração conforme mostrado abaixo:**

```
#include <Wire.h>
#define DS1337_CTRL_ID 0x68

unsigned char  second,minute,hour;
unsigned char  week,day,month;
unsigned int year;

void setup()
{
    Wire.begin();
    Serial.begin(38400);
    while (!Serial) {
        ; // wait for serial port to connect. Needed for Leonardo only
    }

    fillByYMD(2013,6,17);//Jun 19,2013
    fillByHMS(23,15,43);//23:15 43"
    fillWeek(1);//Monday
    setTime();
}

void loop()
{
    readTime();
    Serial.print(year+2000, DEC);
    Serial.print("/");
    Serial.print(month, DEC);
    Serial.print("/");
    Serial.print(day, DEC);
    Serial.print("  ");
    Serial.print(hour, DEC);
    Serial.print(":");
    Serial.print(minute, DEC);
    Serial.print(":");
    Serial.print(second, DEC);
    Serial.print("    ");
    switch (week)// Friendly printout the weekday
    {
        case 1:
        Serial.print("MON");
        break;
        case 2:
        Serial.print("TUE");
        break;
        case 3:
        Serial.print("WED");
        break;
        case 4:
        Serial.print("THU");
        break;
        case 5:
        Serial.print("FRI");
        break;
        case 6:
        Serial.print("SAT");
        break;
        case 7:
        Serial.print("SUN");
        break;
    }
    Serial.println("  ");
    delay(1000);
}
/*Function: Read time and date from RTC    */
void readTime(void)
{
    // use the Wire lib to connect to tho rtc
    // reset the register pointer to zero
    Wire.beginTransmission(DS1337_CTRL_ID);
    Wire.write(0x00);
    Wire.endTransmission();

    // request the 7 bytes of data    (secs, min, hr, dow, date. mth, yr)
    Wire.requestFrom(DS1337_CTRL_ID, 7);
    // A few of these need masks because certain bits are control bits
    second       = bcdToDec(Wire.read() & 0x7f);
    minute       = bcdToDec(Wire.read());
    hour       = bcdToDec(Wire.read() & 0x3f);// Need to change this if 12 hour am/pm
    week  = bcdToDec(Wire.read());
    day = bcdToDec(Wire.read());
    month      = bcdToDec(Wire.read());
    year       = bcdToDec(Wire.read());
}
/*Function: Write the time that includes the date to the RTC chip */
void  setTime(void)
{
    Wire.beginTransmission(DS1337_CTRL_ID);
    Wire.write(0x00);
    Wire.write(decToBcd(second));// 0 to bit 7 starts the clock
    Wire.write(decToBcd(minute));
    Wire.write(decToBcd(hour));  // If you want 12 hour am/pm you need to set bit 6
    Wire.write(decToBcd(week));
    Wire.write(decToBcd(day));
    Wire.write(decToBcd(month));
    Wire.write(decToBcd(year));
    Wire.endTransmission();
}

unsigned char decToBcd(unsigned char val)
{
    return ( (val/10*16) + (val%10) );
}

//Convert binary coded decimal to normal decimal numbers
unsigned char  bcdToDec(unsigned char val)
{
    return ( (val/16*10) + (val%16) );
}
void fillByYMD(unsigned int _year, unsigned char _month, unsigned char _day)
{
    year = _year-2000;
    month = _month;
    day = _day;
}
void fillWeek(unsigned char _dow)
{
    week = _dow;
}
void  fillByHMS(unsigned char _hour, unsigned char _minute, unsigned char _second)
{
    // assign variables
    hour = _hour;
    minute = _minute;
    second = _second;
}
```

*   Configure o horário. Altere os argumentos da função para a data/hora atuais. Deve-se prestar atenção ao formato dos argumentos.
```
fillByYMD(2013,6,17);//Jun 17,2013
fillByHMS(23,15,43);//23:15 43"
fillWeek(1);//Monday
```
*   O resultado da saída:

![](https://files.seeedstudio.com/wiki/Xadow_RTC/img/Xadow-RTC_Result.jpg)

O tempo de saída está mudando como o de um relógio. Depois que você configura uma hora, o RTC atualizará constantemente os dados de horário do relógio. Em seguida, você precisa comentar o código mostrado abaixo e enviar novamente. Um Relógio de Tempo Real aparece.
```
//setTime();
```


## Visualizador de Esquema Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_RTC/res/Xadow_RTC.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##   Recursos
---
*   [Arquivo Eagle do Xadow RTC](https://files.seeedstudio.com/wiki/Xadow_RTC/res/Xadow_RTC.zip)

*   [Datasheet do RTC DS1307](https://files.seeedstudio.com/wiki/Xadow_RTC/res/DS1307.pdf)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
