---
description: Usa Zephyr RTOS con los dispositivos ePaper reTerminal E Serie de Seeed Studio, con enlaces a la documentación oficial de placas Zephyr para reTerminal E1001, E1002 y E1003.
title: Trabajar con Zephyr
keywords:
  - pantalla ePaper
  - Zephyr
  - RTOS
  - reTerminal
  - ESP32-S3
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png
slug: /epaper_work_with_zephyr
sidebar_position: 11
last_update:
  date: 06/30/2026
  author: Citric
createdAt: '2026-06-30'
url: https://wiki.seeedstudio.com/es/epaper_work_with_zephyr/
updatedAt: '2026-06-30'
---

# Trabajar con Zephyr

[Zephyr](https://www.zephyrproject.org/) es un sistema operativo en tiempo real de código abierto para dispositivos embebidos. Es útil cuando quieres una pila de firmware orientada a producción con un sistema de compilación, descripción de hardware basada en device tree, servicios de kernel, controladores y definiciones de placa integradas.

Zephyr ya incluye documentación oficial de placas para **reTerminal E1001**, **reTerminal E1002** y **reTerminal E1003**. Esta página del Wiki es un punto de entrada para ePaper de Seeed: úsala para elegir el objetivo de placa correcto y luego sigue la documentación oficial de Zephyr para la instalación, compilación, flasheo y depuración.

## Cuándo usar Zephyr

Usa Zephyr cuando tu proyecto necesite:

- un flujo de trabajo estructurado de desarrollo con RTOS;
- soporte de placa upstream y firmware mantenible a largo plazo;
- funciones de kernel como hilos, temporizadores, colas y controladores de dispositivos;
- un flujo de trabajo coherente de compilación y flasheo en varias placas embebidas;
- acceso directo a los periféricos del ESP32-S3 a través de las API de Zephyr.

Si tu objetivo es un panel de Home Assistant, diseño de páginas sin código o una API de dibujo al estilo Arduino, empieza desde la página de aplicación correspondiente en la [visión general de pantallas ePaper de Seeed](/es/seeed_epaper_displays). Zephyr es más adecuado para desarrolladores que quieren crear firmware personalizado a nivel de RTOS.

## Dispositivos compatibles

Prepara uno de los siguientes dispositivos reTerminal E Serie antes de comenzar el desarrollo con Zephyr.

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:220, height:'auto'}}/></a></div></td>
      <td><div style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:220, height:'auto'}}/></a></div></td>
      <td><div style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:220, height:'auto'}}/></a></div></td>
    </tr>
    <tr>
      <td align="center">ePaper monocromo de 7,5"<br/>800 x 480</td>
      <td align="center">ePaper a todo color de 7,3"<br/>800 x 480</td>
      <td align="center">ePaper monocromo de 10,3"<br/>1404 x 1872, táctil</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
    <tr>
      <td align="center"><code>reterminal_e1001/esp32s3/procpu</code></td>
      <td align="center"><code>reterminal_e1002/esp32s3/procpu</code></td>
      <td align="center"><code>reterminal_e1003/esp32s3/procpu</code></td>
    </tr>
  </table>
</div>

Los siguientes ejemplos de comandos de inicio rápido usan el objetivo `procpu`. Para detalles de doble núcleo, tablas de características de hardware, runners compatibles y opciones de depuración, utiliza la página oficial de la placa para tu dispositivo.

## Ruta de lectura recomendada

Sigue esta ruta cuando configures Zephyr por primera vez:

1. Abre la [Guía de inicio de Zephyr](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) e instala la toolchain de Zephyr, las dependencias de Python, west y el SDK para tu sistema operativo.
2. Abre la página oficial de la placa para tu dispositivo desde la sección [Documentación oficial de Zephyr](#Documentación-oficial-de-Zephyr).
3. Lee la visión general de la página de la placa para confirmar el tamaño de la pantalla, el SoC, los sensores integrados, teclas, LED, RTC y hardware relacionado con la batería descritos por Zephyr.
4. Usa la sección **Supported Features** de la página de la placa para comprobar qué periféricos ya están descritos en Zephyr.
5. Usa la sección **Programming and Debugging** de la página de la placa para los comandos de compilación, flasheo, reinicio y depuración.

:::tip
Mantén abierta la página oficial de la placa Zephyr mientras desarrollas. Es la fuente de verdad para los objetivos de placa actuales, características compatibles, runners y opciones de compilación.
:::

## Patrón rápido de comandos

Cuando tu espacio de trabajo de Zephyr esté listo, compila el ejemplo `hello_world` con el objetivo de placa que coincida con tu dispositivo.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Dispositivo</th>
      <th>Comando de compilación</th>
    </tr>
    <tr>
      <td>reTerminal E1001</td>
      <td><code>west build -b reterminal_e1001/esp32s3/procpu samples/hello_world</code></td>
    </tr>
    <tr>
      <td>reTerminal E1002</td>
      <td><code>west build -b reterminal_e1002/esp32s3/procpu samples/hello_world</code></td>
    </tr>
    <tr>
      <td>reTerminal E1003</td>
      <td><code>west build -b reterminal_e1003/esp32s3/procpu samples/hello_world</code></td>
    </tr>
  </table>
</div>

Luego flashea la imagen compilada:

```shell
west flash
```

Si la placa permanece en modo de descarga después de flashear, utiliza la opción de reinicio documentada por Zephyr:

```shell
west flash --reset-type watchdog-reset
```

Para MCUboot, sysbuild, flasheo más rápido, depuración con OpenOCD y opciones avanzadas de runners, sigue la sección **Programming and Debugging** en la página oficial de la placa para tu dispositivo.

## Documentación oficial de Zephyr

Utiliza los siguientes enlaces como referencias principales para la configuración específica de Zephyr y los detalles de las placas:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Tema</th>
      <th>Úsalo cuando necesites</th>
      <th>Enlace</th>
    </tr>
    <tr>
      <td>Zephyr Getting Started</td>
      <td>Instalar Zephyr, west, dependencias de Python y el SDK de Zephyr.</td>
      <td><a href="https://docs.zephyrproject.org/latest/develop/getting_started/index.html" target="_blank" rel="noopener noreferrer">Open Getting Started</a></td>
    </tr>
    <tr>
      <td>Zephyr Boards</td>
      <td>Buscar todas las placas compatibles con Zephyr y confirmar los nombres de objetivos actuales.</td>
      <td><a href="https://docs.zephyrproject.org/latest/boards/index.html" target="_blank" rel="noopener noreferrer">Open Boards index</a></td>
    </tr>
    <tr>
      <td>reTerminal E1001</td>
      <td>Compilar, flashear y depurar aplicaciones Zephyr para reTerminal E1001.</td>
      <td><a href="https://docs.zephyrproject.org/latest/boards/seeed/reterminal_e1001/doc/index.html" target="_blank" rel="noopener noreferrer">Open E1001 docs</a></td>
    </tr>
    <tr>
      <td>reTerminal E1002</td>
      <td>Compilar, flashear y depurar aplicaciones Zephyr para reTerminal E1002.</td>
      <td><a href="https://docs.zephyrproject.org/latest/boards/seeed/reterminal_e1002/doc/index.html" target="_blank" rel="noopener noreferrer">Open E1002 docs</a></td>
    </tr>
    <tr>
      <td>reTerminal E1003</td>
      <td>Compilar, flashear y depurar aplicaciones Zephyr para reTerminal E1003.</td>
      <td><a href="https://docs.zephyrproject.org/latest/boards/seeed/reterminal_e1003/doc/index.html" target="_blank" rel="noopener noreferrer">Open E1003 docs</a></td>
    </tr>
  </table>
</div>

## Páginas relacionadas del Wiki de Seeed

- [Visión general de pantallas ePaper de Seeed](/es/seeed_epaper_displays)
- [Primeros pasos con reTerminal E1001](/es/getting_started_with_reterminal_e1001)
- [Primeros pasos con reTerminal E1002](/es/getting_started_with_reterminal_e1002)
- [Primeros pasos con reTerminal E1003](/es/getting_started_with_reterminal_e1003)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
