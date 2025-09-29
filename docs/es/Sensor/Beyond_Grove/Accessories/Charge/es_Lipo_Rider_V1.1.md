---
title: Lipo Rider V1.1
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/DC_framework_solenoid_HCNE1-0630/
slug: /es/Lipo_Rider_V1.1
last_update:
  date: 02/03/2022
  author: jianjing Huang
---
<!-- ---
name:  Lipo Rider V1.1
category: Discontinued
bzurl:
oldwikiname: Lipo_Rider_V1.1
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Lipo_Rider_V1-1
sku:
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Liporider-setup.jpg)

¡Alimenta tu kit electrónico favorito con energía verde! La placa Lipo Rider te permite surfear la ola solar para hacer funcionar tu dispositivo de 5V favorito. La placa Lipo Rider es la solución de energía verde ideal para tu diseño de sensor exterior. ¡Conecta la placa Lipo Rider a tu placa de sensor y puede funcionar con energía solar para siempre!

El LipoRider es extremadamente asequible y fácil de usar. No se requiere programación. Conéctalo y funciona. El IC cargador interno maneja todo el flujo de energía entre los diversos componentes.

En caso de que la energía solar no sea suficiente, el puerto microUSB te permite cargar tu batería de litio a través de USB. También se puede usar para programar tu kit sin desconectar la placa Lipo Rider.

El Lipo Rider se puede comprar como una placa separada o como un kit (Lipo Rider + Batería de Litio + Panel Solar) en [Seeed Studio](https://www.seeedstudio.com/depot/).

Modelo:POW115D2P

## Características ##

- Conector Jst 2.0

- Suministro de energía USB estable de 5V independientemente de la fuente

- Algoritmos de carga/recarga integrados en el chip

- Carga de batería de polímero de litio a través de energía solar o USB

- Voltaje de suministro estable a través de batería de litio o USB

- 2 puertos USB te permiten programar tu kit mientras cargas tu batería de litio

- Indicaciones LED para estados de batería llena o cargando

- Diseño simple significa extremadamente asequible

- Escalable a múltiples baterías de litio y paneles solares grandes/múltiples a través de modificaciones simples del usuario final

## Ideas de Aplicación ##

- Energía verde y suministro de respaldo para red de sensores distribuida al aire libre

- Cargador para baterías de litio

## Precauciones ##

- Componentes electrónicos expuestos con corriente

- La placa puede calentarse al suministrar cargas grandes

- Posible cortocircuito o descarga eléctrica, especialmente si el dispositivo se moja cuando se coloca al aire libre para la recolección de energía solar

- No recomendado para cargar teléfonos móviles ya que el módulo puede sobrecalentarse

## Esquemático ##

### Diagrama de Bloques ###

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-rider-blockdiagram.JPG)

## Especificación ##

- Huella Pequeña – Dimensiones = L47 × H37.5 × D6.6

- 600mA corriente máxima de carga para batería de litio

- 350mA corriente máxima de suministro desde batería de litio

- Diodos de potencia para prevenir retroalimentación desde dispositivo USB hacia batería Lipo

### Especificación Clave ###

|Elementos|Mín|Nom|Máx|
|---|---|---|---|
| Iin Solar| 4.8V| 5.0V| 6.5V|
| Icharge (RIset=3.9kΩ)| 400mA| 500mA| 600mA|
| Isupply 0mA|350mA|||
| Vbatt(Rx=0Ω)|4.2V|||
| Vsource USB 5.0V|Vdestination USB 5.0V||||

## Definición de pines y especificaciones ##

### Instrucciones de pines y estado de LED ###

|Nivel del pin CH (estado LED rojo)|Nivel del pin OK (estado LED verde)|Estados|
|---|---|---|
 |nivel bajo (encendido)|nivel alto (apagado)| Cargando|
 | nivel alto (apagado)|nivel bajo (último encendido)|Completo|
 |señal de pulso (parpadeo)|señal de pulso (encendido)| La batería no existe|
 | nivel alto (apagado)|nivel alto (apagado)|  Dos situaciones :-      Voltaje de entrada menor que voltaje de compuerta -      El voltaje de entrada menor que voltaje de batería|

## Uso ##

El Lipo Rider funciona como un módulo de alimentación para suministrar una alimentación estable de 5VDC para proyectos de **MCU**. Aquí hay un ejemplo para generar una onda de salida de 300mA para una fuente de alimentación:

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/MAP001.jpg)

### Configuración de hardware ###

#### Componentes de hardware ####

**Panel solar**

El panel solar se conecta a la placa a través del conector JST inferior. Tenga en cuenta que el IC del cargador solar solo acepta voltaje de entrada dentro del rango de 4.8-6.5V. Si el LED de carga no está encendido, posiblemente se deba a:

1.Batería de litio llena

2.Voltaje del panel solar fuera de rango (muy probablemente debido a energía solar insuficiente).

En el segundo caso, reposicione su panel solar para recibir más luz solar si es posible.
Ninguna de las condiciones anteriores impedirá que el Lipo Rider proporcione un suministro estable de 5V al USB, a menos que la batería esté descargada.

Ecuaciones del panel solar

Potencia de salida del panel solar = Corriente de salida × Voltaje de suministro

ej. 1W = Iout× 5V

Iout = 200mA

Por lo tanto, cargar durante 1 hora dará 200mAh, ignorando las pérdidas. Para una batería de 1000mAH, cargar de vacío a lleno tomará aproximadamente 5 horas bajo condiciones ideales.

**Batería de litio**

El nombre Lipo Rider sugiere que se use un polímero de litio. Sin embargo, la química de una batería de polímero de litio y una batería de iones de litio es lo suficientemente similar para que los dos tipos de batería se usen indistintamente.
En caso de que se use más de una batería, conéctelas en paralelo en lugar de en serie, ya que el IC del cargador suministra 4.2V.

**Interruptor deslizante**

El interruptor deslizante controla la fuente de alimentación USB de 5V.
ON – Carga habilitada desde batería de litio y/o solar
OFF – Carga deshabilitada desde batería de litio y/o solar

**Puerto USB fuente**

El puerto USB fuente es un puerto mini USB que se usa como un puerto USB normal. El puerto USB fuente se puede usar para cargar la batería de litio o conectarse al dispositivo de destino a través del puerto USB de destino.

**Puerto USB de destino**

El puerto USB de destino es donde se conecta el dispositivo de destino. La alimentación al dispositivo de destino será suministrada por la placa Lipo Rider. El suministro será desde el panel solar, batería de litio o puerto USB fuente.

#### Direcciones de flujo de energía bajo diferentes escenarios de conexión ####

Debido al gran número de combinaciones, solo he incluido los escenarios principales:

Modo independiente

La energía solar carga la batería de litio

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-standalone.JPG)

Modo USB

La energía solar carga la batería de litio. La batería de litio alimenta el dispositivo USB de destino

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-usb.JPG)
Modo programa

El USB fuente cargará la batería de litio y alimentará el dispositivo USB de destino. La conexión de datos se habilitará entre los dispositivos USB fuente y destino

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-program.JPG)

### Ejemplo ###

#### Fuente de alimentación para dispositivo sensor exterior ####

Una aplicación importante de la placa Lipo Rider es como una fuente de alimentación asequible para sensores exteriores. El dispositivo sensor exterior será alimentado por la batería de litio complementada por el panel solar. Tenga en cuenta que no se recomienda ejecutar el sensor exterior SOLO con energía solar, ya que esto puede variar durante el día y puede causar que el sensor se reinicie / se apague inesperadamente. En este caso, el dispositivo está funcionando en "Modo USB".

Si se requiere una reprogramación de firmware para el dispositivo sensor exterior, simplemente conecte el puerto mini USB a su PC, lo que pondrá el dispositivo en "Modo programa" como se explicó anteriormente.

Se pueden usar baterías y/o paneles solares más grandes/múltiples, pero solo con modificaciones del usuario final.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-exam1.JPG)

Lipo Rider alimentando un Arduino Duemilanove (no estrictamente un sensor exterior en este caso ya que no he conectado ningún sensor y no está al aire libre, pero entiendes la idea)

## Soporte ##

Si tienes preguntas u otras mejores ideas de diseño, puedes ir a nuestro [foro](https://www.seeedstudio.com/forum) o **deseas** discutir.

## Seguimiento de Versiones ##

 |Revisión| Descripciones|Fecha|Editor|
 |---|---|---|---|
|Lipo Rider V0.9b | Lanzamiento público inicial|Nov 2, 2010| Lafier|
|Lipo Rider V1.0 |Lanzamiento revisado|Jan 11, 2011|Silas Wan|
|Lipo Rider V1.1 |Cambio del conector Jst de 2.54 a 2.0|Nov 2, 2011|Mike|

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/res/Lipo_rider_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- [Archivo:Lipo rider v1.1.zip](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/res/Lipo_rider_v1.1.zip)

## Cómo comprar ##

Haz clic [aquí](https://www.seeedstudio.com/depot/lipo-rider-p-710.html?cPath=104_107) para comprar [Lipo Rider](https://seeeddoc.github.io/Lipo_Rider/), u otros **productos** que te gusten.

## Ver También ##

[Lipo Rider Pro](https://seeeddoc.github.io/Lipo_Rider_Pro/)

## Licencias ##

Esta documentación está licenciada bajo Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) El código fuente y las librerías están licenciados bajo [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), consulta los archivos de código fuente para más detalles.

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
