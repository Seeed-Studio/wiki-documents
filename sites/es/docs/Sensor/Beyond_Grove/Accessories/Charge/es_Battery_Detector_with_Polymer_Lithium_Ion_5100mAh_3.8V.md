---
description: Detector de Batería con Ion de Litio Polímero 5100mAh 3.8V
title: Detector de Batería con Ion de Litio Polímero 5100mAh 3.8V
keywords:
- Accessories charge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V
last_update:
  date: 1/13/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/img/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_700_s.jpg)

El Detector de Batería con Ion de Litio Polímero 5100mAh 3.8V contiene dos elementos: una batería de ion de litio de 1050 mAh y un detector de energía de batería para medir la energía restante en una batería de ion de litio.

La batería de ion de litio es muy delgada, ligera y rentable. Proporciona un voltaje de salida de 3.8 V (nominal). También puedes cargarla con un cargador especializado que tiene una corriente de entrada máxima de 5100 mA y un voltaje de entrada máximo de 4.2V. Esta batería viene con un conector JST 2.0 pre-conectado que es conveniente para conectar y desconectar. También tiene protección contra sobrecorriente incorporada para proteger contra cortocircuitos de salida. **Sin embargo, por favor ten precaución y no abuses de la batería en el uso. Nunca la cargues o uses sin supervisión.**

El detector de energía de batería puede detectar el rango de voltaje de entrada de 3–4.2 voltios. Hay tres conectores JST (JST 1.0, JST 2.0 y JST 2.0) y dos almohadillas de soldadura de batería que se adaptarán a aquellas baterías con un conector diferente. Cuando conectes una batería a este detector de energía de batería, los cuatro LEDs a bordo indicarán la energía restante en porcentaje (0–25%, 26–50%, 51–75%, 76–100%). Otro LED se encenderá si conectas el conector de la batería de manera incorrecta.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Battery-Detector-with-Polymer-Lithium-Ion-5100mAh-38V-p-2647.html)

:::note

1. Solo hay una batería confiable para ser probada al mismo tiempo.

2. Dañará este detector de energía de batería si el voltaje de entrada está por encima de 9 voltios.

3. Nunca uses la batería cuando se esté cargando.
:::

Seguimiento de Versiones
----------------

| Revisión del producto                                                        | Fecha de lanzamiento | Estado de soporte | Notas |
|-------------------------------------------------------------------------|--------------|----------------|-------|
| Detector de Batería con Ion de Litio Polímero 1050mAh 3.8V(versión actual) | Mayo 2016     | Soportado      | Ninguna  |

Características
--------

**Para la batería**

- Conector JST 2.0 pre-conectado
- Protección contra cortocircuitos para el circuito de salida
- Rentable

**Para el detector de energía de batería**

- Indicación visual de la energía restante de una batería
- Diferentes conectores JST para diferentes conectores de batería

Especificaciones
--------------

**Para la batería**

| Parámetro                  | Valor                                       |
|----------------------------|---------------------------------------------|
| Capacidad                   | 5100 mAh                                    |
| Voltaje de salida nominal(DC) | 3.8 voltios                                   |
| Conector                  | JST 2.0                                     |
| Corriente de Carga Máxima     | 2500 mA                                     |
| Protección                 | Protección contra cortocircuitos para el circuito de salida |
| Peso                     | 76 g, todo el paquete pesa 91 g.        |
| Dimensiones                 | 59.8(ancho)×10.8(alto)×59.5(profundidad) mm     |

**Para el detector de energía de batería**

| Parámetro         | Valor                                                                                                                                     |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Voltaje de entrada     | 3 – 4.2V                                                                                                                                  |
| Corriente de operación | 15 mA                                                                                                                                     |
| Manera de indicación | Cuatro LEDs (lo detallaremos más adelante)                                                                                                       |
| Conectores           | Tres conectores para diferentes conectores de batería y dos almohadillas de soldadura de batería (lo detallaremos más adelante)                                    |
| Dimensiones        | 30(ancho)×25(profundidad) mm                                                                                                                    |
| CN1185            | [Hoja de datos](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/CN1185_Datasheet.pdf)                                      |
| Peso            | 3.2 g                                                                                                                                     |
| Notas             | Solo conecta una sola batería a este módulo; El voltaje de entrada a este módulo debe ser menor a 9 voltios, o dañará este módulo. |

Plataformas soportadas(solo para la batería)
------------------------

<table>
<tr>
<td>
Plataforma
</td>
<td>
Seeeduino/Arduino
</td>
<td>
Rasberry Pi
</td>
<td>
Beaglebone
</td>
<td>
LinkIt ONE
</td>
</tr>
<tr>
<td>
Estado de soporte
</td>
<td>
Soportado
</td>
<td>
No soportado
</td>
<td>
Soportado(solo con Grove Base Cape para Beaglebone v2)
</td>
<td>
No soportado
</td>
</tr>
<tr>
<td>
Notas
</td>
<td colspan="5">
Si no se menciona número de versión para una plataforma específica, significa que este producto soporta todas las versiones dentro de esta plataforma.
</td>
</tr>
</table>

Descripción General del Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/img/Battery_kit-3.7V_520mAh_Battery_power_detector_components_description_1200_s.jpg)

- **CN1185**, un circuito de monitoreo de voltaje.
- **Pads de soldadura de batería**, para soldar los cables de la batería.

### **El paquete incluye**(partes principales)

| Nombre de las partes   | Cantidad |
|------------------------|----------|
| Batería de iones de litio | 1 pieza  |
| Detector de energía de batería | 1 pieza  |

Primeros Pasos
---------

Conecta la batería y el detector de energía de batería como se muestra en la siguiente imagen. Puedes ver que los LEDs están *ENCENDIDOS* indicando que queda energía real.

![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/img/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_700_s.jpg)

<!-- [[|600px|none|Front view ]] -->

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/110060467_Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_Battery_Power_Detector.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Archivo de Esquemático (Eagle)](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/110060467_Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_Battery_Power_Detector.zip)
- [Hoja de Datos CN1185](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/CN1185_Datasheet.pdf)
- [Hoja de Datos de la Batería](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_Battery_Datasheet.pdf)
- [Certificaciones y Reporte de Pruebas para esta Batería](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/Certifications_and_Test_Report.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V -->

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
