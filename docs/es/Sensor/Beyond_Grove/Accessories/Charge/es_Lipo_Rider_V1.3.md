---
description: Lipo Rider V1.3
title: Lipo Rider V1.3
keywords:
- Accessories charge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Lipo_Rider_V1.3
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/LiPo-Rider-v1.3.jpg)

¡Alimenta tu kit electrónico favorito con energía verde! La placa Lipo Rider te permite surfear la ola solar para hacer funcionar tu dispositivo de 5V favorito. La placa Lipo Rider es la solución de energía verde ideal para tu diseño de sensor exterior. ¡Conecta la placa Lipo Rider a tu placa de sensor y puede funcionar con energía solar para siempre!

El LipoRider es extremadamente asequible y fácil de usar. No se requiere programación. Conéctalo y funciona. El IC cargador interno maneja todo el flujo de energía entre los diversos componentes.

En caso de que la energía solar no sea suficiente, el puerto microUSB te permite cargar tu batería de litio a través de USB. También se puede usar para programar tu kit sin desconectar la placa Lipo Rider.

El Lipo Rider se puede comprar como una placa separada o como un kit (Lipo Rider + Batería de Litio + Panel Solar).

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Lipo-Rider-v1.3-p-2403.html)

Características
---------------

- Conector Jst 2.0
- Suministro de energía USB estable de 5V independientemente de la fuente
- Algoritmos de carga/recarga integrados en el chip
- Carga de batería de polímero de litio a través de energía solar o USB
- Voltaje de suministro estable a través de batería de litio o USB
- 2 puertos USB te permiten programar tu kit mientras cargas tu batería de litio
- Indicaciones LED para estados de batería llena o cargando
- Diseño simple significa extremadamente asequible
- Escalable a múltiples baterías de litio y paneles solares grandes/múltiples a través de modificaciones simples del usuario final

Ideas de Aplicación
-------------------

- Energía verde y suministro de respaldo para red de sensores distribuida al aire libre
- Cargador para baterías de litio

:::caution

1. Componentes electrónicos expuestos en vivo.
2. La placa puede calentarse al suministrar cargas grandes.
3. Posible cortocircuito o descarga eléctrica, especialmente si el dispositivo se moja cuando se coloca al aire libre para la recolección de energía solar.
:::

Descripción General del Hardware
--------------------------------

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-rider-blockdiagram.JPG)

Especificaciones
---------------

- Huella Pequeña – Dimensiones = L42 × W34 × D6.8
- Corriente de carga máxima de 900mA para batería de litio
- Corriente de suministro máxima de 600mA desde batería de litio
- Diodos de potencia para prevenir retroalimentación desde dispositivo USB hacia batería Lipo

### Especificaciones Clave

<table border="1">
<tr>
<th>
Elementos
</th>
<th>
Mín
</th>
<th>
Nom
</th>
<th>
Máx
</th>
</tr>
<tr align="center">
<td width="400">
U<sub>in</sub> Solar
</td>
<td width="200">
4.8V
</td>
<td width="200">
5.0V
</td>
<td width="200">
6.0V
</td>
</tr>
<tr align="center">
<td>
I<sub>carga</sub> (R<sub>Iset</sub>=2.0kΩ)
</td>
<td>
700mA
</td>
<td>
800mA
</td>
<td>
900mA
</td>
</tr>
<tr align="center">
<td>
I<sub>suministro</sub>
</td>
<td>
0mA
</td>
<td>
</td>
<td>
600mA
</td>
</tr>
<tr align="center">
<td>
V<sub>bat</sub>(R<sub>x</sub>=0Ω)
</td>
<td colspan="3" rowspan="1">
4.2V
</td>
</tr>
<tr align="center">
<td>
V<sub>fuente USB</sub>
</td>
<td colspan="3" rowspan="1">
5.0V
</td>
</tr>
<tr align="center">
<td>
V<sub>destino USB</sub>
</td>
<td colspan="3" rowspan="1">
5.0V
</td>
</tr>
</table>

Definición de pines y especificaciones
-------------------------------------------------

### Instrucciones de pines y estado de LED

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th>Nivel del pin CH (estado del LED rojo)</th>
<th>Nivel del pin OK (estado del LED verde)</th>
<th>Estados</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Nivel bajo (ENCENDIDO)</td>
<td>Nivel alto (APAGADO)</td>
<td>Cargando</td>
</tr>
<tr class="even">
<td>Nivel alto (APAGADO)</td>
<td>Nivel bajo (último ENCENDIDO)</td>
<td>Completo</td>
</tr>
<tr class="odd">
<td>Señal de pulso (Parpadeo)</td>
<td>Señal de pulso (ENCENDIDO)</td>
<td>La batería no existe</td>
</tr>
<tr class="even">
<td>Nivel alto (APAGADO)</td>
<td>Nivel alto (APAGADO)</td>
<td>
Dos situaciones:
<ul>
<li>Voltaje de entrada menor que el voltaje de umbral</li>
<li>El voltaje de entrada menor que el voltaje de la batería</li>
</ul>
</td>
</tr>
</tbody>
</table>

#### Componentes de Hardware

**Panel Solar**

El panel solar se conecta a la placa a través del conector JST inferior. Tenga en cuenta que el IC del Cargador Solar solo acepta voltaje de entrada dentro del rango de 4.8-6.0V. Si el LED de carga no está encendido, posiblemente se deba a:

1. Batería de Litio Llena
2. Voltaje del panel solar fuera del rango (muy probablemente debido a energía solar insuficiente).

En el segundo caso, reposicione su panel solar para recibir más luz solar si es posible. Ninguna de las condiciones anteriores impedirá que el Lipo Rider proporcione un suministro estable de 5V al USB, a menos que la batería esté descargada.

*Ecuaciones del Panel Solar*

Potencia de Salida del Panel Solar = Corriente de salida × Voltaje de Suministro

ej. 1W = Iout× 5V

Iout = 200mA

Por lo tanto, cargar durante 1 hora dará 200mAh, ignorando las pérdidas. Para una batería de 1000mAH, cargar de vacío a lleno tomará aproximadamente 5 horas bajo condiciones ideales.

**Batería de Litio**

El nombre Lipo Rider sugiere que se use un Polímero de Litio. Sin embargo, la química de una batería de polímero de litio y una batería de iones de litio es lo suficientemente similar para que los dos tipos de batería se usen de manera intercambiable. En caso de que se use más de una batería, conéctelas en paralelo en lugar de en serie, ya que el IC del cargador suministra 4.2V.

**Interruptor deslizante**

El interruptor deslizante controla la fuente de alimentación USB de 5V. ON – Carga habilitada desde batería de litio y/o solar OFF – Carga deshabilitada desde batería de litio y/o solar

**Puerto USB de Origen**

El puerto USB de origen es un puerto **micro-USB** que se usa como un puerto USB normal. El puerto USB de origen se puede usar para cargar la batería de litio o conectarse al dispositivo de destino a través del puerto USB de destino.

**Puerto USB de destino**

El puerto USB de destino es donde se debe conectar el dispositivo de destino. La alimentación al dispositivo de destino será suministrada por la placa Lipo Rider. El suministro será desde el panel solar, batería de litio o puerto USB de origen.

#### Direcciones de Flujo de Energía bajo Diferentes escenarios de conexión

Debido al gran número de combinaciones, solo he incluido los escenarios principales:

**Modo Independiente**

La energía solar carga la batería de litio.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-Rider-v1.2-standalone.JPG)

**Modo USB**

La energía solar carga la batería de litio. La batería de litio suministra al dispositivo USB de destino.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-Rider-v1.2-usb.JPG)

**Modo Programa**

El USB de origen cargará la batería de litio y alimentará el dispositivo USB de destino. La conexión de datos se habilitará entre los dispositivos USB de origen y destino.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-Rider-v1.2-program.JPG)

### Ejemplo

#### Fuente de Alimentación para Dispositivo Sensor Exterior

Una aplicación importante de la placa Lipo Rider es como una fuente de alimentación asequible para sensores exteriores. El dispositivo sensor exterior será alimentado por la batería de litio complementada por el panel solar. Tenga en cuenta que no se recomienda ejecutar el sensor exterior SOLO con energía solar, ya que esto puede variar durante el día y puede causar que el sensor se reinicie / se apague inesperadamente. En este caso, el dispositivo está funcionando en "Modo USB".

Si se requiere una reprogramación de firmware para el dispositivo sensor exterior, simplemente conecte el puerto micro USB a su PC lo que pondrá el dispositivo bajo "Modo Programa" como se explicó anteriormente.

Se pueden usar baterías y/o paneles solares más grandes/múltiples, pero solo con modificaciones del usuario final.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/LiPo-Rider-v1.3_example.jpg)

**Lipo Rider alimentando un Arduino Duemilanove (no estrictamente un sensor exterior en este caso ya que no he conectado ningún sensor y no está al aire libre, pero entiende la idea )**

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/res/Li-Po_Rider_v1.3_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Esquemático y Diseño del Li-Po Rider v1.3 en formato Eagle](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/res/Li-Po_Rider_v1.3_sch_pcb.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Lipo_Rider_V1.3 -->

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
