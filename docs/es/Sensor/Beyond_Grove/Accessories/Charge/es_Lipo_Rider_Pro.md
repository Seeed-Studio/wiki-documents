---
description: Lipo Rider Pro
title: Lipo Rider Pro
keywords:
- Accessories charge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Lipo_Rider_Pro
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/LiPo_Rider_Pro.jpg)

¡Alimenta tu kit electrónico favorito con energía verde! El LiPo Rider Pro es una mejora del Lipo Rider. Suministra una salida de carga más pesada (pico de 1A) que el Lipo Rider. La placa LiPo Rider Pro te permite surfear la ola solar para hacer funcionar tu dispositivo de 5V favorito. La placa LiPo Rider Pro es la solución de energía verde ideal para tu diseño de sensor exterior. ¡Conecta la placa LiPo Rider Pro a tu placa de sensor y puede funcionar con energía solar para siempre! También se puede usar para cargar teléfonos móviles.

El LiPo Rider Pro es extremadamente asequible y fácil de usar. No se requiere programación. Conéctalo y funciona. El IC cargador interno maneja todo el flujo de energía entre los diversos componentes.

En caso de que la energía solar no sea suficiente, el puerto mini USB te permite cargar tu batería de litio a través de USB. También se puede usar para programar tu kit sin desconectar la placa LiPo Rider Pro.

El LiPo Rider Pro se puede comprar como una placa separada o como un kit (LiPo Rider Pro + Batería de Litio + Panel Solar).

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/LiPo-Rider-Pro-p-992.html)

## Características

--------

- Salida de carga máxima de 1A
- El conector de batería y panel solar es JST 2.0
- Suministro de energía USB estable de 5V independientemente de la fuente
- Algoritmos de carga/recarga integrados en el chip
- Carga batería de polímero de litio a través de energía solar o USB
- Voltaje de suministro estable a través de batería de litio o USB
- 2 puertos USB te permiten programar tu kit mientras cargas tu batería de litio
- Indicaciones LED para estados de batería llena o cargando
- Escalable a múltiples baterías de litio y paneles solares grandes/múltiples a través de modificaciones simples del usuario final
- 4 LED verdes indican la cantidad de electricidad de la batería de litio

## Ideas de Aplicación

-----------------

- Energía verde y suministro de respaldo para red de sensores distribuida al aire libre
- Cargador para baterías de litio
- Cargador para teléfono móvil

:::caution

1. El LiPo Rider Pro tiene conectores diferentes del LiPo Rider v1.0, el primero es JST 2.0 y el segundo es JST 2.54.

2. Componentes electrónicos expuestos en vivo.

3. La placa puede calentarse al suministrar cargas grandes.

4. Potencial cortocircuito o descarga eléctrica, especialmente si el dispositivo se moja cuando se coloca al aire libre para la recolección de energía solar.
:::

## Dimensiones

----------

Las dimensiones del LiPo Rider Pro son como la [Batería de Polímero de Litio de 6A](https://www.seeedstudio.com/depot/lithium-ion-polymer-battery-pack-6a-p-602.html?cPath=178_183).

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/Liporiderprod.jpg)

Especificaciones
--------------

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
V<sub>in</sub> Solar
</td>
<td width="200">
4.8V
</td>
<td width="200">
5.0V
</td>
<td width="200">
6.5V(10s)
</td>
</tr>
<tr align="center">
<td>
I<sub>carga</sub> (R<sub>Iset</sub>=3.9kΩ)
</td>
<td>
400mA
</td>
<td>
500mA
</td>
<td>
600mA
</td>
</tr>
<tr align="center">
<td>
I<sub>carga</sub>
</td>
<td>
0mA
</td>
<td>
</td>
<td>
1000mA
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

**Instrucciones de pines y estado de LED**

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
<td>Dos situaciones:</td>
<ul>
<li>Voltaje de entrada menor que el voltaje de umbral</li>
<li>El voltaje de entrada menor que el voltaje de la batería</li>
</ul>
</tr>
</tbody>
</table>

**Indicador LED de Batería**

El LiPo Rider Pro tiene cuatro indicadores LED de batería como el teléfono celular, y puedes ver la energía de la batería simplemente presionando el botón K2 como se muestra a continuación:
![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/Lipo3.jpg)

**Parámetros del indicador LED de batería**

| Número de indicadores encendidos | Cantidad de electricidad |
|----------------------------------|--------------------------|
| 4                                | 90~100%                  |
| 3                                | 60~90%                   |
| 2                                | 30~60%                   |
| 1                                | 10~30%                   |
| 0                                | 0~10%                    |

Uso
-----

**Ejemplo**

**Fuente de Alimentación para Dispositivo Sensor Exterior**

Una aplicación importante de la placa Lipo Rider Pro es como fuente de alimentación asequible para sensores exteriores. El dispositivo sensor exterior será alimentado por la batería de litio complementada por el panel solar. Tenga en cuenta que no se recomienda hacer funcionar el sensor exterior SOLO con energía solar, ya que esto puede variar durante el día y puede causar que el sensor se reinicie / se apague inesperadamente. En este caso, el dispositivo está funcionando en "Modo USB".

Si se requiere una reprogramación del firmware para el dispositivo sensor exterior, simplemente conecte el puerto mini USB a su PC, lo que pondrá el dispositivo en "Modo de Programación" como se explicó anteriormente.

Se pueden usar baterías más grandes/múltiples y/o paneles solares, pero solo con modificaciones del usuario final.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/Lipo-Rider-pro.JPG)

**Cargar Batería de Polímero de Litio a través de energía solar**

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/LiPo_Rider_Pro1.jpg)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/Lipo_Rider_Pro_v0.9b.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Hoja de Datos CN3065 en PDF](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/DSE-CN3065.pdf)
- [Esquema y Diseño en formato Eagle](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/Lipo_Rider_Pro_v0.9b.rar)
- [Esquema en formato pdf](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/LiPo_Rider_Pro_v0.9b.pdf)
- [Hacer que Lipo rider pro cargue Ipod o Iphone](https://forum.seeedstudio.com/viewtopic.php?f=4&t=3575)
- [Paquete de Batería de polímero de iones de litio - 6A](https://www.seeedstudio.com/Lithium-Ion-polymer-Battery-pack-6A-p-602.html)

## Proyecto

**Monitoreo PlantSigfox** Recuperando humedad del aire/suelo y temperatura y brillo (y rayos RGB). También envía la localización, y así da pronósticos del tiempo.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/plantsigfox-ei2i4/plantsigfox-monitoring-3d66be/embed' width='350'></iframe>

**Sistema de Detección de Pasos Por Un Camino Con Arduino**
El propósito del proyecto es detectar el paso de autos y personas en la entrada a un huerto y un pitido de advertencia dentro de esta casa.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/juan-salvador-aleixandre-talens/step-detection-system-by-a-way-with-arduino-bc6f3a/embed' width='350'></iframe>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
