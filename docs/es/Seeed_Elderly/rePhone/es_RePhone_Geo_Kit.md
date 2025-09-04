---
description: RePhone Geo Kit
title: RePhone Geo Kit
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/RePhone_Geo_Kit
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/RePhone_Geo_Kit_wiki_2.jpg)

La combinación del módulo GSM y el módulo GPS es lo que hace brillante al RePhone Geo Kit. El kit te permite obtener la posición geográfica en tiempo real, altitud, velocidad de viaje e información de tiempo en cualquier momento, y en todas las condiciones climáticas, a través de la red GSM (SMS). Además, como beneficio adicional, el Xadow GSM Breakout puede proporcionarte más posibilidades para hackear electrónicos.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/RePhone-Geo-Kit-p-2624.html)

## Especificaciones
---
### Xadow GSM+BLE

<!-- Para más información sobre este módulo, por favor consulta la [**Página Wiki de Xadow GSM+BLE**](/es/Xadow_GSMPlusBLE). -->

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

###   Xadow GPS v2

<!-- For more info about this module please check on [**Xadow GPS V2 Wiki Page**](/es/Xadow_GPS_V2). -->

<table>
<tr>
<td> Microcontrolador </td>
<td> Kinetis KL02 </td>
</tr>
<tr>
<td> Núcleo </td>
<td> ARM® 32-bit Cortex® -M0+CPU </td>
</tr>
<tr>
<td> Fuente de Alimentación </td>
<td> 3.3 ~ 6 V (a través de pines de conexión) </td>
</tr>
<tr>
<td> Flash </td>
<td> 32 KB </td>
</tr>
<tr>
<td> SRAM </td>
<td> 4 KB </td>
</tr>
<tr>
<td> Velocidad de Reloj </td>
<td> 48 MHz </td>
</tr>
<tr>
<td> Consumo de Energía </td>
<td> 18mA@Seguimiento, 21mA@Adquisición </td>
</tr>
<tr>
<td> Ahorro de Energía </td>
<td> Típ. 3mA@AlwaysLocateTM, 7uA@Modo de Respaldo, 180uA@Modo de Espera </td>
</tr>
<tr>
<td> Canal </td>
<td> 22(Seguimiento) / 66 (Adquisición) </td>
</tr>
<tr>
<td> Tasa de Actualización </td>
<td> 1Hz(Por defecto), hasta 10Hz </td>
</tr>
<tr>
<td> Precisión de Posición Horizontal </td>
<td> &lt;2.5m CEP </td>
</tr>
<tr>
<td> Precisión de Velocidad </td>
<td> &lt;0.1m/s </td>
</tr>
<tr>
<td> Velocidad Máxima </td>
<td> Máx.515m/s </td>
</tr>
<tr>
<td> Arranque en frío/caliente con EASYTM </td>
<td> 215s/5s </td>
</tr>
<tr>
<td> Sensibilidad de Adquisición </td>
<td> -145dBm </td>
</tr>
<tr>
<td> Sensibilidad de Seguimiento </td>
<td> -163dBm </td>
</tr>
<tr>
<td> Temperatura de Funcionamiento </td>
<td> -40℃ a 85℃ </td>
</tr>
<tr>
<td> Protocolos </td>
<td> NMEA 0183/PMTK </td>
</tr>
<tr>
<td> Tipo de Antena </td>
<td> Antena de chip </td>
</tr>
<tr>
<td> Interfaz </td>
<td> Interfaz con Xadow GSM+BLE a través de I2C (dirección de 7 bits 0x05) </td>
</tr>
<tr>
<td> Dimensiones </td>
<td> 25.37mm X 20.30mm / 1" × 0.8" </td>
</tr>
</table>

###   Xadow GSM Breakout

<!-- For more info about this module please check on [**Xadow GSM Breakout Wiki Page**](/es/Xadow_GSM_Breakout). -->

<table>
<tr>
<td> Dimensiones </td>
<td> 25.37mm × 20.30mm / 1" × 0.8" </td>
</tr>
</table>


##  Conexión del Módulo
---
El Xadow GSM+BLE integra un conector Xadow de 36 pines y un conector Xadow de 11 pines. Como muestra la imagen aquí, si es necesario, puedes conectar el Xadow GSM+BLE al breakout Xadow GSM con un cable Xadow de 36 pines, pero ten en cuenta que el cable debe insertarse **firmemente** y **plano**, y lo más importante, **mantén el lado 'TOP' hacia arriba**. El conector Xadow de 11 pines tiene un diseño mucho más flexible, puedes conectar el Xadow GPS v2 y la placa principal con un cable de cinta Xadow de 11 pines de la manera que desees, nuevamente solo asegúrate de que el cable esté insertado firmemente.

![](https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/RePhone_Geo_Kit_wiki_2.jpg)

##  Ejecutar un Código de Prueba GPS
---
<!-- Firstly you need to follow the instructions in the **[Arduino IDE for RePhone Kit](/Arduino_IDE_for_RePhone_Kit "Arduino IDE for RePhone Kit")** to download the Arduino IDE for RePhone Kit as well as install the drivers. -->
Luego copia el siguiente código de prueba GPS a tu Arduino IDE para RePhone. Elige la **placa como "RePhone"** y **descárgalo con el "MTK USB Debug Port"**.
```
#include <LGPS.h>
#include <stdio.h>

void setup()
{
    Serial.begin(115200);
    Serial.print("GPS test.\r\n");
}

void loop()
{
    unsigned char *utc_date_time = 0;
    char buffer[50] = {0,};

    if(LGPS.check_online())
    {
        utc_date_time = LGPS.get_utc_date_time();
        sprintf(buffer, "GPS UTC:%d-%d-%d  %d:%d:%d\r\n", utc_date_time[0], utc_date_time[1], utc_date_time[2], utc_date_time[3], utc_date_time[4],utc_date_time[5]);
        Serial.print(buffer);

        sprintf(buffer, "GPS status is %c\r\n", LGPS.get_status());
        Serial.print(buffer);

        sprintf(buffer, "GPS latitude is %c:%f\r\n", LGPS.get_ns(), LGPS.get_latitude());
        Serial.print(buffer);

        sprintf(buffer, "GPS longitude is %c:%f\r\n", LGPS.get_ew(), LGPS.get_longitude());
        Serial.print(buffer);

        sprintf(buffer, "GPS speed is %f\r\n", LGPS.get_speed());
        Serial.print(buffer);

        sprintf(buffer, "GPS course is %f\r\n", LGPS.get_course());
        Serial.print(buffer);

        sprintf(buffer, "GPS position fix is %c\r\n", LGPS.get_position_fix());
        Serial.print(buffer);

        sprintf(buffer, "GPS sate used is %d\r\n", LGPS.get_sate_used());
        Serial.print(buffer);

        sprintf(buffer, "GPS altitude is %f\r\n", LGPS.get_altitude());
        Serial.print(buffer);

        sprintf(buffer, "GPS mode is %c\r\n", LGPS.get_mode());
        Serial.print(buffer);

        sprintf(buffer, "GPS mode2 is %c\r\n", LGPS.get_mode2());
        Serial.print(buffer);
    }
    delay(1000);
}
```

**Ten en cuenta que: Para obtener una mejor intensidad de señal, debes colocar el módulo GPS fuera de la ventana/casa en un espacio abierto. Además, después de iniciarlo por primera vez, puede tomar un tiempo antes de que rastree los satélites.**

Ahora **cambia el Puerto a MTK USB Modern Port (es muy importante hacerlo)**, deberías poder ver la información del GPS en el Monitor Serie.

![](https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/GPS_detected.png)
![](https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/GPS_undetected.png.png)

##  Más Código de Ejemplo
---
Jugar con algunos códigos de ejemplo sería un buen comienzo si te diriges hacia algún proyecto aún más interesante.

1. Simplemente configura tu **ubicación del sketchbook** en las **preferencias** donde instalaste el Arduino IDE para RePhone, entonces podrás ver los códigos de ejemplo.

![](https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/Arduino_Sketchlocation.png)

2. Puedes encontrar el código de ejemplo de Arduino codificado manualmente para todos los módulos RePhone en la siguiente ruta:

_**Arduino_IDE_for_RePhone-master\hardware\arduino\mtk\libraries**_

![](https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/Example_code_Arduino_IDE.png)

##  Comunidad RePhone
---
[![](https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/RePhone_Community-2.png)](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

Hemos estado buscando un mejor lugar donde nuestros patrocinadores (Usuarios de RePhone) puedan sentarse juntos, cálida y cómodamente, tener conversaciones sobre RePhone, discutir problemas técnicos, compartir ideas/proyectos, y dar retroalimentación sobre el desarrollo de los módulos en el futuro. Y entonces aquí vamos, la Comunidad RePhone.

¡Ahora únete a nosotros en la [Comunidad RePhone](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)! Juntos buscamos respuestas, hacemos cosas interesantes, nos cuidamos unos a otros, y compartimos nuestras experiencias.

###   Preguntas Frecuentes

Algunas preguntas frecuentes en la Comunidad RePhone son recopiladas y respondidas en el tema **["Preguntas Frecuentes de RePhone (FAQ)"](https://forum.seeedstudio.com/viewtopic.php?f=71&amp;t=6664&amp;p=23753#p23753)** , el tema se mantendrá actualizándose cada vez que surja una nueva FAQ.

##  Recursos

<!-- Please go the Wiki page [Xadow GPS V2](/es/Xadow_GPS_V2) for more info. -->

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
