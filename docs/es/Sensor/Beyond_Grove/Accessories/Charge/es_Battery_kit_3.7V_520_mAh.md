---
title: Kit de batería 3.7V 520mAh
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Battery_kit_3.7V_520_mAh/
slug: /es/Battery_kit_3.7V_520_mAh
last_update:
  date: 02/03/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/img/Battery_kit-3.7V_520mAh_Product_View_960.jpg)

El kit de batería-3.7V 520mAh contiene dos elementos: una batería de iones de litio de 520mAh y un detector de energía de batería para medir la energía restante en una batería de iones de litio.

La batería de iones de litio es muy delgada, ligera y rentable. Proporciona un voltaje de salida de 3.7 V (nominal). También puedes cargarla con un cargador especializado que tenga una corriente de entrada máxima de 520 mA y un voltaje de entrada máximo de 4.2V. Esta batería viene con un conector JST 1.0 pre-conectado que es práctico para conectar y desconectar. También tiene protección contra sobrecorriente incorporada para proteger contra cortocircuitos de salida. **Sin embargo, por favor ten precaución y no abuses de la batería en el uso. Nunca la cargues o uses sin supervisión.**

El detector de energía de batería puede detectar el rango de voltaje de entrada de 3–4.2 voltios. Hay tres conectores JST (JST 1.0, JST 2.0 y JST 2.0) y dos pads de soldadura de batería que se adaptarán a aquellas baterías con un conector diferente. Cuando conectes una batería a este detector de energía de batería, los cuatro LEDs a bordo indicarán la energía restante en porcentaje (0–25%, 26–50%, 51–75%, 76–100%). Otro LED se encenderá si conectas el conector de la batería de manera incorrecta.

**Nota** que solo hay una batería confiable para ser probada al mismo tiempo.

**Nota** que dañará este detector de energía de batería si el voltaje de entrada está por encima de 9 voltios.

**Nota** que nunca uses la batería cuando se esté cargando.

###  Seguimiento de Versiones ###


|Versión del producto | Fecha de lanzamiento |Estado de soporte | Notas|
|---|---|---|---|
| Kit de batería-3.7V 520 mAh(primera versión)|  Mayo 2016 | Soportado | Ninguna|

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png) ](https://www.seeedstudio.com/depot/Battery-kit37V-520mAh-p-2646.html)

##  Características ##

**Para la batería**

- Conector JST 1.0 pre-conectado

- Protección contra cortocircuitos para el circuito de salida

- Rentable

**Para el detector de energía de batería**

- Indicación visual de la energía restante de una batería

- Diferentes conectores JST para diferentes conectores de batería

##  Especificaciones ##

**Para la batería**

|Elemento|Valor|
|--|--|
 |Capacidad  |520 mAh|
 |Voltaje de salida nominal (DC) | 3.7 voltios|
| Conector  | JST 1.0|
  |Corriente máxima de carga|  520 mA|
|  Protección | Protección contra cortocircuitos para el circuito de salida|
 |Peso | 11 g|
  |Dimensiones |  50(ancho)×2.5(alto)×41(profundidad) mm|

**Para el detector de energía de batería**

|Elemento|Valor|
|---|---|
 |Voltaje de entrada | 3 – 4.2V|
 |Corriente de operación |15 mA|
 |Manera de indicación   |Cuatro LEDs(lo detallaremos más adelante)|
|Conectores   |Tres conectores para diferentes conectores de batería y dos pads de soldadura de batería(lo detallaremos más adelante)|
 |Dimensiones |  30(ancho)×25(profundidad) mm|
 |CN1185| [Hoja de datos](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/CN1185_Datasheet.pdf)|
|  Peso | 3.2 g|
 |Notas | Solo conecte una sola batería a este módulo; El voltaje de entrada a este módulo debe ser menor a 9 voltios, o eso dañará este módulo.|

###  Plataforma soportada(solo para batería) ###


|Plataforma |Seeeduino/Arduino|  Rasberry Pi |  Beaglebone | LinkIt ONE|
|--|--|--|--|--|
 |Estado de soporte| Soportado|  No soportado | Soportado(solo con [Grove Base Cape for Beaglebone](https://seeeddoc.github.io/Grove_Base_Cape_for_BeagleBone_v2/)) | No soportado|
 |Notas|  Si no se representa ningún número de versión para una plataforma específica, significa que este producto soporta todas las versiones dentro de esta plataforma.|||||

##  Descripción del Hardware  ##

Esta sección muestra descripciones para los componentes en el detector de energía de batería.

![](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/img/Battery_kit-3.7V_520mAh_Battery_power_detector_components_description_1200_s.jpg)

- **CN1185**, un circuito de monitoreo de voltaje.

- **Pads de soldadura de batería**, para soldar los cables de la batería.

### El paquete incluye(partes principales)  ###


|Nombre de las partes|    Cantidad|
|---|
  |Batería de iones de litio|  1 pieza|
  |Detector de energía de batería | 1 pieza|

##  Primeros Pasos  ##

Conecte la batería y el detector de energía de batería como se muestra en la siguiente imagen. Puede ver que los LEDs se encienden indicando la energía real que queda.

![](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/img/Battery_kit-3.7V_520mAh_Battery_power_demo_1200_s.jpg)


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Battery_kit-3.7V_520mAh_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##  Recursos ##

- **[Eagle]**[Archivo de esquemas(Eagle)](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Battery_kit-3.7V_520mAh_Schematics.zip)
- **[PDF]**[Battery Detector v1.0 pcb](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Battery%20Detector%20v1.0pcb.pdf)
- **[PDF]**[Battery Detector v1.0 sch](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Battery%20Detector%20v1.0.pdf)
- **[Hoja de datos]**[Hoja de datos CN1185](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/CN1185_Datasheet.pdf)
- **[Hoja de datos]**[Hoja de datos de la batería](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Lithium-ion_Battery_3.7V-520mAH_Datasheet.pdf)

## Soporte Técnico y Discusión de Productos
 si tienes algún problema técnico.  envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>