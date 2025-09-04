---
title: Módulo RFID 125Khz - UART
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/125Khz RFID module - UART/
slug: /es/125Khz_RFID_module-UART
last_update:
  date: 02/03/2022
  author: gunengyu
---
![https://www.seeedstudio.com/depot/images/product/P1240147.jpg](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/img/125khz20uart.jpg)

El mini-módulo de tarjeta RDM 125KHz está diseñado para leer códigos de tarjetas de 125KHz compatibles con etiquetas de solo lectura y tarjetas de lectura/escritura. Puede aplicarse en seguridad de oficina/hogar, identificación personal, control de acceso, anti-falsificación, juguetes interactivos y sistemas de control de producción, etc.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/125Khz-RFID-module-UART-p-171.html)

**Nota:** El módulo notificará cada vez que se acerque una etiqueta de 125khz, el número de serie de la etiqueta se enviará a través del pin TX. Forma fácil para un módulo RFID en proyectos MCU o conexión PC vía UartSB.

##   Características

*   Soporta antena externa
*   Distancia efectiva máxima hasta 50mm
*   Tiempo de decodificación menor a 100ms
*   Interfaz UART TTL
*   Soporta etiquetas compatibles EM4100 de solo lectura o lectura/escritura
*   LED bicolor externo integrado y controlador de zumbador
*   Diseño de contorno pequeño

##   Especificaciones

Puede incluir especificaciones clave y otras especificaciones.

###   Especificaciones Clave

<table>
<tr>
<td width="300px">Frecuencia</td>
<td width="500px">125KHz</td>
</tr>
<tr>
<td>Velocidad de Baudios</td>
<td>9600 (Nivel de Electricidad TTL formato RS232)</td>
</tr>
<tr>
<td>interfaz</td>
<td>Weigang26 O formato RS232 Nivel de Electricidad TTL</td>
</tr>
<tr>
<td>Fuente de alimentación</td>
<td>DC 5V（±5%）</td>
</tr>
<tr>
<td>Corriente</td>
<td>&lt;50Ma</td>
</tr>
<tr>
<td>Rango de operación</td>
<td>&gt;50mm(Depende de la forma de la Tarjeta/Etiqueta, fabricante)</td>
</tr>
<tr>
<td>Puerto I/O expandido</td>
<td>N/A</td>
</tr>
<tr>
<td>Luz indicadora</td>
<td>N/A</td>
</tr>
<tr>
<td>Temperatura de trabajo</td>
<td>-10℃~ +70℃</td>
</tr>
<tr>
<td>Temperatura de almacenamiento</td>
<td>-20℃~ +80℃</td>
</tr>
<tr>
<td>Humedad máx.</td>
<td>Humedad relativa 0 ~ 95%</td>
</tr>
<tr>
<td>Tamaño</td>
<td>38.5mm ×19mm×9mm</td>
</tr>
</table>

##   Definición de pines y clasificación

Mira la imagen de abajo (Dimensiones Mecánicas), y verifica la lista de definición de pines aquí:

<pre>
Definición de Pines :
P1:
  PIN1    TX
  PIN2    RX
  PIN3
  PIN4    GND
  PIN5    +5V(DC)
P2:
  PIN1    ANT1
  PIN2    ANT2
P3:
  PIN1    LED
  PIN2    +5V(DC)
  PIN3    GND
</pre>

##   Dimensiones Mecánicas

![](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/img/RFID-wiegand-dimen.JPG)

##   Uso

###   Formato de salida de datos RS232 Interfaz TTL

1.  9600bps,N,8,1
2.  CHECKSUM: tarjeta 10byte DATA completa hacer operación XOR
<table>
<tr>
<td width="100px">02</td>
<td width="300px">10 Caracteres de Datos ASCII</td>
<td width="100px">Chechsum</td>
<td width="100px">03</td>
</tr>
</table>

Ejemplo: número de tarjeta: 62E3086CED

*   Datos de salida: 36H、32H、45H、33H、30H、38H、36H、43H、45H、44H
*   CHECKSUM: (62H) XOR (E3H) XOR (08H) XOR (6CH) XOR (EDH)=08H

####   Diagrama de secuencia temporal

![](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/img/RFID-wiegand-time-seq.JPG)

###   Ejemplo

![](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/img/125k_RFID_uasge.JPG)

Datos de salida(HEX): 02 | 30 31 30 30 30 37 33 34 45 30 | 44 32 | 03
-&gt;Cambiar a Decimal
Número de Tarjeta Decimal: 48 49 48 48 48 55 51 52 69 48
CheckSum Decimal: 68 50
-&gt;Referirse a la tabla ASCII, obtener valor ASCII
Número de Tarjeta ASCII: 0 1 0 0 0 7 3 4 E 0
CheckSum ASCII : D 2
(01H) xor (00H) xor (07H) xor (34H) xor (E0H) = D2H

###   Programación

Conecta RX/TX al puerto UART de Arduino, código demo Uart:
```
void setup()
{
  Serial.begin(9600);
}
void loop()
{
  if(Serial.available())
  {
    while(Serial.available())
    Serial.write(Serial.read());
  }
}
```

##   Recursos

*   Hoja de datos: [RDM630-Spec.pdf](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/res/RDM630-Spec.pdf)

*   [Cómo conectar Arduino y RFID](https://www.instructables.com/id/Arduino-and-RFID-from-seeedstudio/)

## Soporte Técnico y Discusión del Producto
si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>