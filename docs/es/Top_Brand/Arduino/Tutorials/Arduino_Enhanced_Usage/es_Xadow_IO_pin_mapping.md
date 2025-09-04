---
description: Mapeo de pines IO de Xadow
title: Mapeo de pines IO de Xadow
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_IO_pin_mapping
last_update:
  date: 1/16/2023
  author: jianjing Huang
---
<!-- ---
name: Xadow IO pin mapping
category: Tutorial
bzurl:
oldwikiname:  Xadow IO pin mapping
prodimagename:
surveyurl: https://www.research.net/r/Xadow_IO_pin_mapping
sku:
--- -->

Página de referencia única para toda la información de pines incluyendo:-

* Cómo usar cada pin en tu código Arduino

* Mapeo de FFC Xadow a pin Atmega32u4

* pines que tienen interrupciones y temporizadores

* los 2 puertos serie, IIc e ISP
* IO adicional en placa, que podría ser hackeado

¡Las tablas proporcionan diferentes vistas de los datos y son especialmente útiles cuando estás planificando qué módulos usar y qué pines IO para uso directo!

## Bus IO FFC Xadow e información correspondiente de Arduino y Atmega y código Arduino de ejemplo

<table>
<tr>
<td colspan="4"> <strong>Pines FFC Xadow</strong></td>
<td colspan="2"> <strong>Arduino</strong></td>
<td colspan="2"> <strong>Pines Atmega32u4</strong></td>
<td></td>
</tr>
<tr>
<td> <strong>Nombre</strong></td>
<td> <strong>Función IO</strong></td>
<td> <strong>Uso alternativo</strong></td>
<td> <strong>#</strong></td>
<td> <strong>Pin IO</strong></td>
<td> <strong>ejemplo(s) de código</strong></td>
<td> <strong>Nombre (<strong>interrupciones en rojo</strong>)</strong></td>
<td> <strong>#</strong></td>
<td> <strong>Notas</strong></td>
</tr>
<tr>
<td> P1</td>
<td> Pin Digital</td>
<td> ISP SCK</td>
<td> 1</td>
<td> <strong>15</strong></td>
<td> PinMode(15, OUTPUT); digitalWrite(15, HIGH);</td>
<td> PB1<strong>(PCINT1</strong>/SCLK)</td>
<td> 9</td>
<td> Pads de cabecera SMD ISP también en la parte trasera de la placa principal Xado</td>
</tr>
<tr>
<td> P2</td>
<td> Pin Digital</td>
<td> ISP MOSI</td>
<td> 2</td>
<td> <strong>16</strong></td>
<td> PinMode(16, OUTPUT); digitalWrite(16, HIGH);</td>
<td> PB2(PDI/<strong>PCINT2</strong>/MOSI)</td>
<td> 10</td>
</tr>
<tr>
<td> P3</td>
<td> Pin Digital</td>
<td> ISP MISO</td>
<td> 3</td>
<td> <strong>14</strong></td>
<td> PinMode(14, OUTPUT); digitalWrite(14, HIGH);</td>
<td> PB3(PDO/<strong>PCINT3</strong>/MISO)</td>
<td> 11</td>
</tr>
<tr>
<td> P4</td>
<td> Pin Analógico</td>
<td> ¡Pin digital!</td>
<td> 4</td>
<td> <strong>A5</strong></td>
<td> analogWrite(A5, 128); pinMode(A5, OUTPUT); digitalWrite(A5, HIGH);</td>
<td> PF0(ADC0)</td>
<td> 41</td>
<td> ¡Los pines analógicos de Arduino también pueden usarse como pines digitales!</td>
</tr>
<tr>
<td> P5</td>
<td> Pin Digital</td>
<td> IIC SCL</td>
<td> 9</td>
<td> <strong>3</strong></td>
<td> PinMode(3, OUTPUT); digitalWrite(3, HIGH);</td>
<td> PD0(OC0B/SCL/<strong>INT0</strong>)</td>
<td> 18</td>
<td></td>
</tr>
<tr>
<td> P6</td>
<td> Pin Digital</td>
<td> IIC SDA</td>
<td> 10</td>
<td> <strong>2</strong></td>
<td> PinMode(2, OUTPUT); digitalWrite(2, HIGH);</td>
<td> PD1 (SDA/<strong>INT1</strong>)</td>
<td> 19</td>
<td></td>
</tr>
<tr>
<td> P7</td>
<td> Pin Digital</td>
<td> Serial Rxd</td>
<td> 11</td>
<td> <strong>0</strong></td>
<td> PinMode(0, OUTPUT); digitalWrite(0, HIGH);</td>
<td> PD2(RXD/<strong>INT2</strong>)</td>
<td> 20</td>
<td>
Ver ejemplos de Xadow BLE/GPS para información de uso de estos pines serie.

NO es el mismo puerto serie para subir código–ver LED Rojo/Verde abajo.
</td>
</tr>
<tr>
<td> P8</td>
<td> Pin Digital</td>
<td> Serial Txd</td>
<td> 12</td>
<td> <strong>1</strong></td>
<td> PinMode(1, OUTPUT); digitalWrite(1, HIGH);</td>
<td> PD3(TXD/<strong>INT3</strong>)</td>
<td> 21</td>
</tr>
</table>

## Algunos pines de E/S Xadow ADICIONALES - solo en el módulo Principal, NO en el bus FFC

<table>
<tr>
<td colspan="4"> <strong>Pines Xadow</strong></td>
<td colspan="2"> <strong>Arduino</strong></td>
<td colspan="2"> <strong>Pines Atmega32u4</strong></td>
<td></td></tr>
<tr>
<td> <strong>Nombre</strong></td>
<td> <strong>Función E/S</strong></td>
<td> <strong>Uso alternativo</strong></td>
<td> <strong>#</strong></td>
<td> <strong>Pin E/S</strong></td>
<td> <strong>ejemplo(s) de código</strong></td>
<td> <strong>Nombre (<strong>interrupciones en rojo</strong>)</strong></td>
<td> <strong>#</strong></td>
<td> <strong>Notas</strong></td>
</tr>
<tr>
<td> LED Rojo</td>
<td> Rx</td>
<td></td>
<td> -</td>
<td> <strong>17</strong></td>
<td> PinMode(17, OUTPUT); digitalWrite(17, HIGH);</td>
<td> PB0(SS/<strong>PCINT0</strong>)</td>
<td> 8</td>
<td> Carga de código del puerto serie</td>
</tr>
<tr>
<td> LED Verde</td>
<td> Tx</td>
<td></td>
<td> -</td>
<td> <strong>11</strong></td>
<td> PinMode(11, OUTPUT); digitalWrite(11, HIGH);</td>
<td> PB7(<strong>PCINT7</strong>/OC0A/OC1C/!RTS)</td>
<td> 12</td>
</tr>
<tr>
<td> Wake</td>
<td></td>
<td></td>
<td> -</td>
<td> <strong>10</strong></td>
<td> ¡Aún no he conectado y validado esto!</td>
<td> PB^/A10/D10</td>
<td> 30</td>
<td> Interruptor en placa – ¡necesitas habilidades de soldadura súper para acceder a esto!</td>
</tr></table>

Nota: El interruptor de reinicio está conectado al pin 13 de reinicio del Atmega32u4 a través de un diodo, ¡por lo que no hay acceso al pin IO del 32u4 EN EL INTERRUPTOR DE REINICIO!

## La GRAN Tabla de módulos Xadow y el uso de pines del bus IO para cada módulo

¿Por qué una tabla tan grande y complicada? Bueno, reúne toda la información de IO en un solo lugar, pero más importante aún, ¡te permite ver qué pines IO siguen disponibles una vez que has seleccionado varios módulos Xadow! ¡Además, el esquemático tiene números de pin FFC diferentes al resto de la documentación wiki!

Notas:-

1. ¡Recuerda que los dispositivos IIC están conectados en cadena, es decir, pueden conectarse en paralelo, por lo que puedes tener más de un dispositivo IIC conectado a los mismos pines!

2. ¿Necesitas más pines IO? Puedes usar UN pin para varios usos diferentes, de la misma manera que el motor de vibración y el zumbador comparten un pin, o en algunas situaciones puedes usar el mismo pin para diferentes propósitos en DIFERENTES MOMENTOS. ¡Por ejemplo, podrías configurar un pin como salida para activar un sensor ultrasónico, luego cambiar el pin a entrada para detectar cuando se recibe la señal!

3. La mayoría de los módulos IIC &lbrace;excepto el módulo de Placa Principal, LED, RTC&rbrace;, TAMBIÉN tienen pines de conexión IIC.

¡Así que los elementos en púrpura en las columnas IIC SCL e IIC SDA NO tienen también pines de conexión!

4. ¡Los detalles adicionales resaltados en amarillo en el centro de la tabla documentan los pines de conexión **ADICIONALES** en cada módulo Xadow!

5. ? = ¡No se sabe, o aún no verificado!

<table>
<tr>
<td>
</td>
<td>
</td>
<td> <center>SCK</center></td>
<td> <center>MOSI</center></td>
<td> <center>MISO</center></td>
<td> <center>A5</center></td>
<td> <center>3</center></td>
<td> <center>2</center></td>
<td> <center>1</center></td>
<td> <center>0</center></td>
<td> <strong>Nombre del pin de Arduino</strong></td>
</tr>
<tr>
<td>
</td>
<td> <strong>Interrupciones en rojo--------&gt;</strong></td>
<td> PB1(PCINT1/SCLK)</td>
<td> PB2(PDI/<strong>PCINT2</strong>/MOSI)</td>
<td> PB3(PDO/<strong>PCINT3</strong>/MISO)</td>
<td> PF0(ADC0)</td>
<td> PD0(OC0B/SCL/INT0)</td>
<td> PD1(SDA/<strong>INT1</strong>)</td>
<td> PD2(RXD/<strong>INT2</strong>)</td>
<td> PD3(TXD/<strong>INT3</strong>)</td>
<td> Nombre del pin Atmega32u4</td>
</tr>
<tr>
<td> <center><strong>IIC = I2C</strong></center></td>
<td></td>
<td> 9</td>
<td> 10</td>
<td> 11</td>
<td> 41</td>
<td> 18</td>
<td> 19</td>
<td> 20</td>
<td> 21</td>
<td> Pin# Atmega32u4</td>
</tr>
<tr>
<td></td>
<td></td>
<td> P1, 1</td>
<td> P2, 2</td>
<td> P3, 3</td>
<td> P4, 4</td>
<td> P5, 9</td>
<td> P6, 10</td>
<td> P7, 11</td>
<td> P8,12</td>
<td> Nombre del pin FFC, #</td>
</tr>
<tr>
<td> <strong>Módulos Xadow </strong></td>
<td> <strong>Modo de Control del Módulo y Dirección</strong></td>
<td> <center>Pin Digital </center></td>
<td> <center>Pin Digital </center></td>
<td> <center>Pin Digital </center></td>
<td> <center><strong>Pin Analógico o </strong>Digital </center></td>
<td> <center><strong>IIC SCL</strong></center></td>
<td> <center><strong>IIC SDA</strong></center></td>
<td> <center><strong>Serial Rxd</strong></center></td>
<td> <center><strong>Serial Txd</strong></center></td>
<td> <strong>Función del pin Xadow</strong></td>
</tr>
<tr>
<td> <center>Acelerómetro de 3 Ejes </center></td>
<td> <center>IIC 0x53</center></td>
<td> SCK</td>
<td> MOSI</td>
<td> MISO</td>
<td> <center>A5</center></td>
<td> <center>SCL</center></td>
<td> <center>SDA</center></td>
<td> Rxd</td>
<td> TxD</td>
<td></td>
</tr>
<tr>
<td> <center>Barómetro </center></td>
<td> <center>IIC 0x77</center></td>
<td> SCK</td>
<td> MOSI</td>
<td> MISO</td>
<td> <center>A5</center></td>
<td> <center>SCL</center></td>
<td> <center>SDA</center></td>
<td> Rxd</td>
<td> TxD</td>
<td></td>
</tr>
<tr>
<td> <center>BLE Esclavo </center></td>
<td> <center>Serial </center></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td colspan="2"> <center>RX/TX </center></td>
<td> Más pads específicos para BLE en la parte trasera</td>
</tr>
<tr>
<td> <center>Breakout </center></td>
<td> <center>¡Ninguno!</center></td>
<td> SCK</td>
<td> MOSI</td>
<td> MISO</td>
<td> <center>A5</center></td>
<td> <center>SCL</center></td>
<td> <center>SDA</center></td>
<td> Rxd</td>
<td> TxD</td>
<td> + conectores Grove I2C y Serial</td>
</tr>
<tr>
<td> <center>Controlador LED </center></td>
<td> <center>IIC 0x04</center></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td> <center>SCL</center></td>
<td> <center>SDA</center></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> <center>OLED </center></td>
<td> <center>IIC 0x3C</center></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td> <center>SCL</center></td>
<td> <center>SDA</center></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> <center>Motor de Vibración </center></td>
<td> <center>Señal Digital </center></td>
<td></td>
<td> <center>H </center></td>
<td></td>
<td> <center>H </center></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td> _<strong>Desconectar módulo ANTES de usar ISP</strong>_</td>
</tr>
<tr>
<td> <center>RTC </center></td>
<td> <center>IIC 0x68</center></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td> <center>SCL</center></td>
<td> <center>SDA</center></td>
<td></td>
<td></td>
<td> pad trasero conecta INTB – Int0???</td>
</tr>
<tr>
<td> <center>Zumbador </center></td>
<td> <center>Señal Digital </center></td>
<td> <center>H </center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>H </center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> _<strong>Desconectar módulo ANTES de usar ISP</strong>_</td>
</tr>
<tr>
<td> <center>Brújula Digital </center></td>
<td> <center>IIC 0x1E</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td></td>
</tr>
<tr>
<td> <center>Motor </center></td>
<td> <center>TBD </center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td></td>
</tr>
<tr>
<td> <center>GPS </center></td>
<td> <center>Serial </center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td colspan="2"> <center>RX/TX </center></td>
<td></td>
</tr>
<tr>
<td> <center>Almacenamiento </center></td>
<td> <center>IIC 0x50 & 0x51</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td></td>
</tr>
<tr>
<td> <center><strong>Placa Principal</strong></center></td>
<td> <center>?IIC maestro =0x00?</center></td>
<td> ISP – SCK</td>
<td> ISP MOSI</td>
<td> ISP MISO</td>
<td></td>
<td> <center>SCL</center></td>
<td> <center>SDA</center></td>
<td></td>
<td></td>
<td> Todo a través de pads SMD en la parte trasera.</td>
</tr>
</table>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
