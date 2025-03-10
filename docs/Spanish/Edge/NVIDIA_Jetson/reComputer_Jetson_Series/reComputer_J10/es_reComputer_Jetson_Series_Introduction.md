---
description: reComputer para la serie Jetson 
title: Introducción a reComputer para la serie Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_Jetson_Series_Introduction
last_update:
  date: 01/03/2023
  author: w0x7ce

---

# Introducción a la serie reComputer Jetson

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerheadline.png" /></div>

## ✨ Proyecto de colaboración

- Actualizaciones públicas de la Wiki de Seeed Studio
- We have a task list for updating this page, which is categorized under our [Proyecto de colaboración](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479), ya que estamos dedicados a mejorar la experiencia del usuario y brindar un mejor soporte a través del desarrollo de nuestra wiki.
- [Tu contribución a esta página](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35025656) ¡Es esencial para nosotros! Realmente valoramos tus aportes y agradeceríamos mucho tu ayuda para generar ideas.

## Introducción

La serie reComputer Jetson son computadoras de vanguardia compactas construidas con sistemas integrados de inteligencia artificial avanzados de NVIDIA: reComputer J10 (Nano) y reComputer J20 (Xavier NX). Con ricos módulos de extensión, periféricos industriales, gestión térmica combinados con décadas de experiencia en hardware de Seeed, la reComputer Jetson está lista para ayudarte a acelerar y escalar tu producto de IA de próxima generación.


La serie es compatible con la pila de software NVIDIA Jetson, los flujos de trabajo nativos de la nube y los marcos de IA líderes en la industria, lo que ayuda a ofrecer una integración perfecta de la IA. Actualmente, hemos lanzado cuatro de ellos como se muestra a continuación:

| Producto                | [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html ) | [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) | [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)   | [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html)   |
|-------------------------|----------------|----------------|------------------|------------------|
| SKU | 110061362 |110061361 |110061363 | 110061401 |
|       Vista Lateral           |  <img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview3_1.png" />|     <img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" />          |     <img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" />            |    <img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png"  />            |
| Módilo equipado       | Jetson Nano 4GB   | Jetson Nano 4GB   | Jetson Xavier NX 8GB | Jetson Xavier NX 16GB |
| Carrier Board | J1010 Carrier Board  | Jetson A206           | Jetson A206             |Jetson A206             |
| Interfaz de alimentación         | Conector Tipo-C  | Adaptador de CC           | Adaptador de CC             | Adaptador de CC            |
|Link |<a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a> |<a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a> |<a href="https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a> |<a href="https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a> |

## Detalles de interfaz

Los 4 productos reComputer actuales tienen la misma apariencia, la diferencia radica en la interfaz en la parte posterior. [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) usa una combinación de interfaz y las otras tres usan la misma combinación de interfaz porque se usan dos Carrier Boards diferentes en el chasis.

### Carrier Board J1010

Esta Carrier Board es adecuada para la [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-a01mark.png" alt="pir" width={900} height="auto" /></p>

| Marca | Nombre                  | Nota                  |
|-------|-------------------------|-----------------------|
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num1.png" width="30px" height="30px"></image> | DCIN(Type-C interface)  | Power supply only     |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num5.png" width="30px" height="30px"></image>     |  HDMI               |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num4.png" width="30px" height="30px"></image>    | 1x USB 3.0 Type-A port  |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num3.png" width="30px" height="30px"></image>    | 2x USB 2.0 Type-A ports |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num2.png" width="30px" height="30px"></image>    | LAN                     |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num6.png" width="30px" height="30px"></image>   | USB Type-C port         | Data transmitted only |

### Carrier Board Jetson A206

Esta Carrier Board es para la [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html), [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html), y [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-h01mark.png" alt="pir" width={900} height="auto" /></p>

| Marca | Nombre                  | Nota                  |
|-------|-------------------------|-----------------------|
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num1.png" width="30px" height="30px"></image>    | DCIN(circular interface)| Power supply only     |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num5.png" width="30px" height="30px"></image>    | DP
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num4.png" width="30px" height="30px"></image>    | HDMI |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num3.png" width="30px" height="30px"></image>    | 4x USB 3.0 Type-A ports                     |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num2.png" width="30px" height="30px"></image>    | LAN        |             |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num6.png" width="30px" height="30px"></image>    | Micro-B port         | Data transmitted only |

## ¿Qué hay en la caja?

Antes de encender y poner en marcha, es necesario realizar todas las comprobaciones y preparativos para el primer encendido de la reComputer. Desempaca el producto que recibiste y verifica que el contenido del paquete esté completo según el modelo de producto que compraste.

### [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-10-1-A0shangxiang.png" alt="pir" width={500} height="auto" /></p>

**Contenido de la caja:**

- La reComputer J1010 incluye:
  - 4G Jetson Nano module1 x1
  - J1010 carrier board x1

**Accesorios no incluidos pero necesarios para encender:**

- Teclado y mouse USB
- Monitor
- Cable de alimentación Tipo-C power cable y fuente de alimentación

:::nota
    No se incluirá ningún cable de alimentación tipo C ni fuente de alimentación en el producto.
:::

---

### [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-10-1-H0shangxiang.png" alt="pir" width={500} height="auto" /></p>

**Contenido de la caja:**

- La sreComputer J1020 incluye:
  - 4G Jetson Nano module1 x1
  - Jetson A206 carrier board x1
- 12V/2A Adaptador de alimentación (Con cinco conexiones intercambiables) x1

**Accesorios no incluidos pero necesarios para encender:**

- Teclado y mouse USB
- Monitor

:::nota
Habrá 5 adaptadores de corriente seleccionables para ti. Cable de alimentación tipo C y fuente de alimentación incluidos en el producto. Por lo tanto, puedes elegir el que sea adecuado para tu país o región para alimentar la computadora sin tener que comprar ninguna fuente de alimentación adicional.
:::

---

### [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-20-1-H1shangxiang.png" alt="pir" width={500} height="auto" /></p>

**Contenido de la caja:**

- La reComputer Jetson J2011 incluye:
  - 8G Jetson Xavier NX module x1
  - Jetson A206 carrier board x1
- 19V/4.74A (MAX 90W) Adaptador de alimentación (sin cable de alimentación) x1

**Accesorios no incluidos pero necesarios para encender:**

- Teclado y mouse USB
- Monitor
- Adaptador y fuente de alimentación

:::nota
Haz coincidir el cable de alimentación del adaptador de corriente de acuerdo con el estándar de enchufe de alimentación local.
:::

---

### [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-20-1-H2shangxiang.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-20-1-H2shangxiang1.png" alt="pir" width={500} height="auto" /></p>

**Contenido de la caja:**

- La reComputer J2012 incluye:
  - 16G Jetson Xavier NX module x1
  - Jetson A206 carrier board x1
- 19V/4.74A (MAX 90W) adaptador de alimentación (sin cable de alimentación) x1

**Accesorios no incluidos pero necesarios para encender:**

- Teclado y mouse USB
- Monitor
- Cable de alimentación

:::nota
Haz coincidir el cable de alimentación del adaptador de corriente de acuerdo con el estándar de enchufe de alimentación local.
:::

---

## ¿Qué más hay?

Aquí te presentamos tablas más completas sobre la comparación de dispositivos con módulo NVIDIA® Jetson y la comparación de Carrier Boards compatibles con el módulo NVIDIA® Jetson. Puedes hacer click en la imagen para ver mejor.

### <a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png" target="_blank"><span>NVIDIA® Jetson Module Powered Devices Comparison</span></a>

<div class="document">
<div class="document">
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png" alt="" /></a></p>
</div>
</div>

### <a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png" target="_blank"><span>NVIDIA® Jetson Module Compatible Carrier Boards Comparison</span></a>

<div class="document">
<div class="document">
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png" alt="" /></a></p>
</div>
</div>

## Resources

- **[PDF]** [Comparación de dispositivos NVIDIA Jetson y Carrier Boards](https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

