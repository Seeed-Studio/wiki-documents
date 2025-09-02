---
description: Battery Detector with Polymer Lithium Ion 5100mAh 3.8V
title: Detector de Batería con Batería de Polímero de Litio 5100 mAh 3.8 V
keywords:
- Accessories charge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V
last_update:
  date: 1/13/2023
  author: Guillermo
---


![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/img/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_700_s.jpg)

Este producto incluye dos elementos: una batería de polímero de litio de 5100 mAh y un detector de energía de batería para medir la carga restante.

La batería Li-ion es muy delgada, ligera y rentable. Tiene un voltaje nominal de salida de 3.8 V. Puede cargarse con un cargador especializado con una corriente máxima de entrada de 2500 mA y un voltaje máximo de 4.2 V. La batería viene con un conector JST 2.0 preinstalado, lo que permite conectarla y desconectarla fácilmente. También cuenta con protección incorporada contra sobrecorriente para evitar cortocircuitos.  
**Sin embargo, se debe tener precaución en su uso. Nunca la cargues o utilices sin supervisión.**

El detector de batería puede medir voltajes de entrada en el rango de 3 a 4.2 V. Incluye tres conectores JST (JST 1.0, JST 2.0 y JST 2.0) y dos pads de soldadura para baterías con conectores diferentes. Al conectar una batería, los cuatro LEDs integrados indican el nivel restante de carga (0–25 %, 26–50 %, 51–75 %, 76–100 %). Un LED adicional se iluminará si conectas la batería con polaridad inversa.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Battery-Detector-with-Polymer-Lithium-Ion-5100mAh-38V-p-2647.html)

:::note
1. Solo se puede analizar una batería a la vez.  
2. Si el voltaje de entrada supera los 9 V, se dañará el detector.  
3. Nunca utilices la batería mientras está siendo cargada.  
:::


Seguimiento de Versiones
----------------

| Revisión del producto                                              | Fecha de lanzamiento | Estado de soporte | Notas |
|--------------------------------------------------------------------|----------------------|-------------------|-------|
| Detector con batería de 5100 mAh 3.8 V (versión actual)            | Mayo 2016            | Soportado         | —     |

Características
--------

**Batería:**
- Conector JST 2.0 preinstalado  
- Protección contra cortocircuitos  
- Económica

**Detector de batería:**
- Indicación visual del nivel de carga  
- Soporte para diferentes conectores JST

Especificaciones
--------------

### Batería

| Parámetro                    | Valor                                      |
|-----------------------------|---------------------------------------------|
| Capacidad                   | 5100 mAh                                    |
| Voltaje nominal (DC)        | 3.8 V                                       |
| Conector                    | JST 2.0                                     |
| Corriente máxima de carga   | 2500 mA                                     |
| Protección                  | Contra cortocircuitos                       |
| Peso                        | 76 g (paquete completo: 91 g)               |
| Dimensiones                 | 59.8 mm × 10.8 mm × 59.5 mm                 |

### Detector de batería

| Parámetro           | Valor                                                                                     |
|---------------------|-------------------------------------------------------------------------------------------|
| Voltaje de entrada  | 3 – 4.2 V                                                                                 |
| Corriente operativa | 15 mA                                                                                     |
| Indicador           | Cuatro LEDs que muestran el nivel de carga                                               |
| Conectores          | Tres conectores JST + dos pads de soldadura para baterías                                |
| Dimensiones         | 30 mm × 25 mm                                                                             |
| CN1185              | [Datasheet](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/CN1185_Datasheet.pdf) |
| Peso                | 3.2 g                                                                                     |
| Notas               | Solo conectar una batería a la vez; no exceder 9 V o se dañará el módulo.                |

Compatibilidad con Plataformas (solo batería)
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
Beaglebone (con Grove Cape v2)
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
Soportado
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
Si no se menciona número de versión para una plataforma, significa que el producto es compatible con todas las versiones de dicha plataforma.
</td>
</tr>
</table>

Vista General del Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/img/Battery_kit-3.7V_520mAh_Battery_power_detector_components_description_1200_s.jpg)

- **CN1185**: circuito de monitoreo de voltaje  
- **Pads de soldadura**: para conectar cables de baterías sin conector JST

## Componentes Incluidos

| Nombre del componente      | Cantidad |
|---------------------------|----------|
| Batería de polímero de litio  | 1        |
| Detector de batería           | 1        |

Primeros Pasos
---------------

Conecta la batería al detector como se muestra en la imagen. Los LEDs encendidos indican la carga restante actual.

![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/img/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_700_s.jpg)

<!-- [[|600px|none|Front view ]] -->

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/110060467_Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_Battery_Power_Detector.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Archivo esquemático (Eagle)](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/110060467_Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_Battery_Power_Detector.zip)  
- [CN1185 Datasheet](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/CN1185_Datasheet.pdf)  
- [Ficha técnica de la batería](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_Battery_Datasheet.pdf)  
- [Certificaciones e informes de prueba](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/Certifications_and_Test_Report.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V -->

## Soporte Técnico y Discusión

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte distintos canales de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
