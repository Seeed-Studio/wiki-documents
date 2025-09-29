---
description: Raspberry Pi RS232 Board v1.0
title: Raspberry Pi RS232 Board v1.0
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Raspberry_Pi_R232_Board_v1.0
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi-R232-Board-v1.0.jpg)

Raspberry Pi RS232 Board v1.0 es un puerto de comunicación estándar para equipos industriales. Este módulo está basado en MAX3232, que es un transmisor/receptor dual que incluye un generador de voltaje capacitivo para suministrar niveles de voltaje TIA/EIA-232-F desde una sola fuente de alimentación de 5V. El shield integra conectores DB9 (hembra) que proporcionan conexión a varios dispositivos con interfaz RS232. También los headers RS232 facilitarán sus conexiones y puesta en marcha. Proporciona áreas de soldadura para aprovechar al máximo el espacio extra disponible, lo cual es muy conveniente para prototipos.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Raspberry-Pi-RS232-Board-v1.0-p-2408.html)

Características
--------

- Corriente de Alimentación Baja: 300μA
- Velocidad de Datos Garantizada: 120kbps
- Cumple con las Especificaciones EIA/TIA-232 hasta 3.0V
- Compatible con Pines del MAX232 Estándar de la Industria
- Velocidad de Cambio Garantizada: 6V/μs
- Indicador LED
- Conectores DB9 (hembra)

Especificaciones
-------------

<table border={1} cellSpacing={0} style={{width: 500, height: 442}} width={800}>
  <tbody>
    <tr>
      <th align="center" scope="col" style={{width: '50%'}}>Elemento</th>
      <th align="center" scope="col">Mín</th>
      <th align="center" scope="col">Típico</th>
      <th align="center" scope="col">Máx</th>
      <th align="center" scope="col">Unidad</th>
    </tr>
    <tr>
      <th scope="row">Rango de Voltaje de Entrada</th>
      <td align="center">-25</td>
      <td align="center">/</td>
      <td align="center">25</td>
      <td align="center">V</td>
    </tr>
    <tr>
      <th scope="row">Umbral de Entrada Bajo (VCC=3.3V/5.0V)</th>
      <td align="center">0.6 / 0.8</td>
      <td align="center">1.2 / 1.5</td>
      <td align="center">/</td>
      <td align="center">V</td>
    </tr>
    <tr>
      <th scope="row">Umbral de Entrada Alto (VCC=3.3V/5.0V)</th>
      <td align="center">/</td>
      <td align="center">1.5 / 1.8</td>
      <td align="center">2.4 / 2.4</td>
      <td align="center">V</td>
    </tr>
    <tr>
      <th scope="row">Velocidad Máxima de Datos</th>
      <td align="center">120</td>
      <td align="center">235</td>
      <td align="center"></td>
      <td align="center">kHz</td>
    </tr>
    <tr>
      <th scope="row">Temperatura de Operación</th>
      <td align="center">0</td>
      <td align="center">/</td>
      <td align="center">70</td>
      <td align="center">℃</td>
    </tr>
    <tr>
      <th scope="row">Dimensión</th>
      <td align="center" colSpan={3}>91.20 *56.15*32</td>
      <td align="center">mm</td>
    </tr>
  </tbody>
</table>

Descripción del Hardware
------------------

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi_RS232_Board_v1.0_p2.jpg)

El pin UART debe estar soldado si desea conectar a raspberry pi.

Uso
-----

Usando puertos serie COM para configurar el sistema en Raspberry Pi.

### Instalación del Hardware

1. Raspberry Pi y cable USB a puerto serie COM.

2. Conecte como se muestra en la siguiente imagen:

    ![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi_RS232_Board_v1.0_p5.jpg)

3. Averigüe qué puerto COM está usando en el administrador de dispositivos de su PC.
4. Ejecute un asistente de puerto serie y configúrelo como se muestra:

    COM debe configurarse como lo que encontró en el administrador de dispositivos de su PC. Luego encienda su raspberry pi. Puede ver el asistente de puerto serie como se muestra a continuación.

    ![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi_RS232_Board_v1.0_p6.jpg)

5. Tenga comunicación con Raspberry Pi exitosamente.

    ![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi_RS232_Board_v1.0_p4.jpg)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/res/Raspberry_Pi_RS232_Board_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Raspberry_Pi_RS232_Board_v1.0_sch_pcb](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/res/Raspberry_Pi_RS232_Board_v1.0_sch_pcb.zip)
- [MAX3232](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/res/MAX3232.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0 -->

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