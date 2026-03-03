---
description: Xadow - RTC (Reloj de Tiempo Real)
title: Xadow - RTC (Reloj de Tiempo Real)
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_RTC
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_RTC/img/Xadow_RTC_01.jpg)

A veces, siempre quieres saber qué hora es. Si he perdido la cita o no, o si es la hora de comer para mi hijo de tres meses. El módulo RTC puede proporcionarte un reloj de tiempo real. Puedes hacer que el controlador le pregunte al módulo: hola, amigo, ¿qué hora es? Al mismo tiempo, no olvides instalar una pequeña pila de botón que puede servirte por más de seis meses.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-RTC-p-1523.html)

##  Especificaciones
---
*   Reloj de Tiempo Real (RTC) que cuenta segundos, minutos, horas, fecha del año, mes, día de la semana y año con compensación de año bisiesto
*   Se puede configurar como formato de 12 horas o formato de 24 horas
*   Válido hasta 2100
*   Dimensiones: 25.43mm x 20.35mm

:::caution
    Para obtener un rendimiento robusto, debes colocar una pila de litio CR1220 de 3 voltios en el portapilas. Si usas solo la alimentación principal, el módulo puede no funcionar normalmente, porque el cristal puede no oscilar.
:::
##  Demostración
---
El siguiente código demuestra una aplicación simple de configurar la hora y leerla.

**Instalación del Hardware:**

![](https://files.seeedstudio.com/wiki/Xadow_RTC/img/XadwoRTC.jpg)

Nota: cuando conectes Xadow RTC a Xadow Main Board, debes preocuparte por la dirección de conexión. El método de conexión es que la esquina no rellena de un módulo Xadow necesita conectarse al ángulo recto de otro módulo (ver las cuatro esquinas de cada módulo Xadow).

**Código de demostración como se muestra a continuación:**

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

*   Establecer la hora. Cambiar los argumentos de la función a la fecha/hora actual. Se debe prestar atención al formato de los argumentos.
```
fillByYMD(2013,6,17);//Jun 17,2013
fillByHMS(23,15,43);//23:15 43"
fillWeek(1);//Monday
```

*   El resultado de salida:

![](https://files.seeedstudio.com/wiki/Xadow_RTC/img/Xadow-RTC_Result.jpg)

El tiempo de salida está cambiando como el reloj. Una vez que estableces una hora, el RTC actualizará constantemente los datos de tiempo del reloj. Entonces necesitas comentar el código como se muestra a continuación y volver a cargar. Aparece un Reloj de Tiempo Real.
```
//setTime();
```


## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_RTC/res/Xadow_RTC.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##   Recursos
---
*   [Archivo Eagle de Xadow RTC](https://files.seeedstudio.com/wiki/Xadow_RTC/res/Xadow_RTC.zip)

*   [Hoja de Datos RTC DS1307](https://files.seeedstudio.com/wiki/Xadow_RTC/res/DS1307.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
