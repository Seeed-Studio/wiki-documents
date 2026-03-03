---
description: Seeeduino Stalker
title: Seeeduino Stalker
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino_Stalker
last_update:
  date: 1/31/2023
  author: shuxu hu
---

**Seeeduino Stalker** es un nodo de **Red de Sensores Inalámbricos** compatible con Arduino rico en características con **funcionalidad de registrador de datos**. Su estructura modular y periféricos integrados lo hacen conveniente para registrar datos de sensores con marca de tiempo de forma periódica. **Seeeduino Stalker** viene con un _sensor de temperatura, RTC con alimentación de respaldo, socket para tarjeta SD, socket Bee y cargador de batería solar de iones de litio polímero_. El **Seeeduino Stalker** es un buen candidato para todos sus proyectos de seguimiento, monitoreo y control.

Tenga en cuenta que la versión actual (y también la más reciente) es Seeeduino-Stalker v3.

Hacer clic en las imágenes a continuación lo llevará a la documentación de la versión correspondiente.

|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeeduino-stalker-168.jpg)   |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Stalkerv21.jpg)   |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeduino_Stalker_v2.1.jpg)   |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeduino_Stalker_v2.2.jpg)   | ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeduino_Stalker_v2.2.jpg)| ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeed_Stalker_v3-6.png)|
|---|---|---|---|---|---|
| Seeeduino Stalker v1.0  |Seeeduino Stalker v2.0   |Seeeduino Stalker v2.1   |Seeeduino Stalker v2.2   | Seeeduino Stalker v2.3  | Seeeduino-Stalker v3  |

### Comparación entre varias versiones de Seeeduino Stalker

<table>
<tr>
<th>Parámetro</th>
<th>v1.0</th>
<th>v2.0</th>
<th>v2.1</th>
<th>v2.2</th>
<th>v2.3</th>
<th>v3</th>
<th>Observaciones</th>
</tr>
<tr>
<td><strong><font>Fecha de Lanzamiento del Producto</font></strong></td>
<td><strong><font>23 Dic 2009</font></strong></td>
<td><strong><font>17 Dic 2010</font></strong></td>
<td><strong><font>3 Oct 2011</font></strong></td>
<td><strong><font>27 Dic 2011</font></strong></td>
<td><strong><font>29 Dic 2011</font></strong></td>
<td><strong><font>6 Jun 2014</font></strong></td>
<td></td>
</tr>
<tr>
<td><strong>Estado de Producción</strong></td>
<td><strong><font>Descontinuado</font></strong></td>
<td><strong><font>Descontinuado</font></strong></td>
<td><strong><font>Descontinuado</font></strong></td>
<td><strong><font>Descontinuado</font></strong></td>
<td><strong><font>En Producción</font></strong></td>
<td><strong><font>En Producción</font></strong></td>
<td></td>
</tr>
<tr>
<td><strong>LED de Usuario &amp; Interruptor</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>LED de Usuario</td>
<td>PB5 (Pin Arduino 13)</td>
<td>PB0 (Pin Arduino 8)</td>
<td>PB0 (Pin Arduino 8)</td>
<td>PB5 (Pin Arduino 13)</td>
<td>PB5 (Pin Arduino 13)</td>
<td>PB0 (Pin Arduino 13)</td>
<td></td>
</tr>
<tr>
<td>Interruptor de Usuario</td>
<td>PB4 (Pin Arduino 12)</td>
<td>No Presente</td>
<td>No Presente</td>
<td>No Presente</td>
<td>No Presente</td>
<td>No Presente</td>
<td></td>
</tr>
<tr>
<td><strong>Compatibilidad con Arduino</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Físicamente compatible con el pinout de Arduino</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td>Compatible con Diecimila/Duemilanove/UNO</td>
</tr>
<tr>
<td>Software compatible con Arduino</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td>Bootloader precargado</td>
</tr>
<tr>
<td>Variante Atmega168 Disponible</td>
<td>Sí</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td></td>
</tr>
<tr>
<td>Variante Atmega328 Disponible</td>
<td>No</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td></td>
</tr>
<tr>
<td>Conector AVRISP de 6 pines presente</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td></td>
</tr>
<tr>
<td>FT232RL &amp; Conector USB Presente</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>En ambas versiones "UartSBee V3.1" o <strong>V4.0</strong> debe comprarse por separado y usarse para descargar programas usando Arduino IDE. Un conector para conectar con UartSBee está presente en ambas versiones. El reinicio del microcontrolador será controlado automáticamente por DTR.</td>
</tr>
<tr>
<td>Operación Independiente</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td></td>
</tr>
<tr>
<td>Operación como shield para Arduino/Seeeduino</td>
<td>Sí</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td>No</td>
<td></td>
</tr>
<tr>
<td>¿Se puede apilar más en modo shield?</td>
<td>Sí</td>
<td>N.A.</td>
<td>N.A.</td>
<td>N.A.</td>
<td>N.A.</td>
<td>N.A.</td>
<td>Usando Interfaz I<sup>2</sup>C</td>
</tr>
<tr>
<td><strong>Reloj de Tiempo Real</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Chip</td>
<td>DS1307</td>
<td>RX8025</td>
<td>DS3231</td>
<td>DS3231</td>
<td>DS3231</td>
<td>DS1337</td>
<td></td>
</tr>
<tr>
<td>Fuente de alimentación de respaldo integrada</td>
<td>Pila de Moneda CR2032</td>
<td>Super Condensador</td>
<td>Pila de Moneda CR2032</td>
<td>Pila de Moneda CR2032</td>
<td>Pila de Moneda CR2032</td>
<td>Pila de Moneda CR1220</td>
<td></td>
</tr>
<tr>
<td>Interfaz</td>
<td>I<sup>2</sup>C</td>
<td>I<sup>2</sup>C</td>
<td>I<sup>2</sup>C</td>
<td>I<sup>2</sup>C</td>
<td>I<sup>2</sup>C</td>
<td>I<sup>2</sup>C</td>
<td></td>
</tr>
<tr>
<td><strong>Interfaz I<sup>2</sup>C</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Conector para conexión directa a PC4 y PC5 (es decir SCL y SDA) del microcontrolador</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td></td>
</tr>
<tr>
<td>Traducción de nivel integrada para conectar a dispositivos de 5.0 voltios mientras el microcontrolador opera en modo 3.3v</td>
<td>Sí (usando PCA9306)</td>
<td>Sí (usando MOSFET de mejora de canal N)</td>
<td>Sí (usando MOSFET de mejora de canal N)</td>
<td>Sí (usando MOSFET de mejora de canal N)</td>
<td>Sí (usando MOSFET de mejora de canal N)</td>
<td>Sí (usando MOSFET de mejora de canal N)</td>
<td></td>
</tr>
<tr>
<td><strong>Fuente de Alimentación</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Desde Fuente DC</td>
<td>Sí (5-12V DC)</td>
<td>Sí (conectar al Conector de Celda Solar, pero aplicar solo 5.0 Voltios)</td>
<td>Sí (conectar al Conector de Celda Solar, pero aplicar solo 5.0 Voltios)</td>
<td>Sí (conectar al Conector de Celda Solar, pero aplicar solo 5.0 Voltios)</td>
<td>Sí (conectar al Conector de Celda Solar, pero aplicar solo 5.0 Voltios)</td>
<td>Sí (conectar al Conector de Celda Solar, pero aplicar solo 5.0 Voltios)</td>
<td></td>
</tr>
<tr>
<td>Desde USB</td>
<td>Sí (cuando se usa con UartSBee V3.1)</td>
<td>Sí (cuando se usa con UartSBee V3.1)</td>
<td>Sí (cuando se usa con UartSBee V4.0 o Cable FTDI)</td>
<td>Sí (cuando se usa con UartSBee V4.0 o Cable FTDI)</td>
<td>Sí (cuando se usa con UartSBee V4.0 o Cable FTDI)</td>
<td>Sí (cuando se usa con UartSBee V4.0 o Cable FTDI)</td>
<td></td>
</tr>
<tr>
<td>Desde Panel Solar</td>
<td>No</td>
<td>Sí (Conector Separado Presente)</td>
<td>Sí (Conector Separado Presente)</td>
<td>Sí (Conector Separado Presente)</td>
<td>Sí (Conector Separado Presente)</td>
<td>Sí (Conector Separado Presente)</td>
<td></td>
</tr>
<tr>
<td>Desde Batería de Polímero de Litio</td>
<td>No</td>
<td>Sí (Conector Separado Presente)</td>
<td>Sí (Conector Separado Presente)</td>
<td>Sí (Conector Separado Presente)</td>
<td>Sí (Conector Separado Presente)</td>
<td>Sí (Conector Separado Presente)</td>
<td></td>
</tr>
<tr>
<td>Medición de voltaje de batería</td>
<td>No</td>
<td>Sí (Jumper para conectar a ADC7)</td>
<td>Sí (Jumper para conectar a ADC7)</td>
<td>Sí (Jumper para conectar a ADC7)</td>
<td>Sí (Jumper para conectar a ADC7)</td>
<td>Sí (Voltaje de batería conectando a ADC7)</td>
<td></td>
</tr>
<tr>
<td>¿Carga de Batería?</td>
<td>No</td>
<td>Sí (A través de celda solar, Gestionado por Chip CN3063)</td>
<td>Sí (A través de celda solar, Gestionado por Chip CN3063)</td>
<td>Sí (A través de celda solar, Gestionado por Chip CN3063)</td>
<td>Sí (A través de celda solar, Gestionado por Chip CN3063)</td>
<td>Sí (A través de celda solar, Gestionado por Chip CN3065)</td>
<td></td>
</tr>
<tr>
<td>¿Lectura de Estado de Carga de Batería?</td>
<td>No</td>
<td>Sí (Pin Digital 6&amp;7)</td>
<td>Sí (Pin Digital 6&amp;7)</td>
<td>Sí (ADC6)</td>
<td>Sí (ADC6)</td>
<td>Sí (ADC6)</td>
<td></td>
</tr>
</table>

## Soporte Técnico y Discusión de Productos

   <br />
 ¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
