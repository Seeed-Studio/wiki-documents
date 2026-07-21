---
description: Guía de referencia para controlar cualquier producto Seeed ePaper compatible desde el IDE de Arduino - configuración del IDE de Arduino, instalación de la biblioteca Seeed_GFX, generación de driver.h. Los análisis detallados específicos de hardware se encuentran en el recetario de cada producto.
title: Trabajar con Arduino
keywords:
  - Pantalla ePaper
  - Arduino
  - Seeed_GFX
  - GxEPD2
  - reTerminal
  - XIAO
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /epaper_work_with_arduino
sidebar_position: 4
last_update:
  date: 04/28/2026
  author: dimo
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/es/epaper_work_with_arduino/
updatedAt: '2026-06-17'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabajar con Arduino

:::tip Prueba demos sin configurar un entorno de desarrollo
Si quieres previsualizar rápidamente los resultados del proyecto o probar el firmware demo básico antes de configurar un entorno de desarrollo, abre el **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**. Puedes elegir un dispositivo reTerminal E Serie compatible y flashear firmware de demostración directamente desde un navegador.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Flasher 🖱️</font></span></strong>
    </a>
</div><br />
:::

Esta página es el **manual de referencia** para controlar cualquier producto Seeed ePaper compatible desde el IDE de Arduino. Cubre las partes que son idénticas en todo el hardware:

1. Configurar el IDE de Arduino y el soporte de placas ESP32.
2. Instalar la biblioteca **Seeed_GFX**, nuestro fork mantenido de `TFT_eSPI` con soporte de primera clase para Seeed ePaper.
3. Generar un `driver.h` para tu combinación de placa + pantalla usando la [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/).
4. (Opcionalmente) usar la biblioteca de terceros **GxEPD2** como controlador alternativo.

Para la **guía completa de “abrir la caja, flashear un hello world, encender sensores y botones”**, ve al **recetario** de tu hardware específico: esas páginas reutilizan esta referencia para el código base y luego añaden ejemplos específicos del producto (periféricos, ejemplos de código, resolución de problemas):

- [reTerminal E Serie — recetario de pantalla ePaper](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino), cubre reTerminal E1001 / E1002 / E1003 / E1004 con ejemplos Hello World usando tanto `Seeed_GFX` como `GxEPD2`.
- [reTerminal E Serie — recetario de periféricos integrados](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino_peripherals), ejemplos completos de periféricos para los mismos modelos: LED, zumbador, tres botones de usuario, sensor SHT4x, monitor de batería, tarjeta microSD y renderizado de imágenes BMP desde SD.
- [reTerminal E Serie — recetario de RTC, bajo consumo, audio y táctil](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino_peripherals_2), gestión de tiempo del RTC, deep sleep / light sleep, grabación con micrófono I2S y dibujo con toque capacitivo (solo E1003).
- Más recetarios (panel XIAO de 7,5", placas controladoras EE0x, …) llegarán a medida que se añadan los productos correspondientes a la plataforma.

Si solo necesitas el código base (un `Hello World` en un producto completamente nuevo que aún no está cubierto por un recetario), esta página por sí sola es suficiente.

## Hardware compatible

Cada producto Seeed ePaper en la [página principal](https://wiki.seeedstudio.com/es/seeed_epaper_displays) que tenga marcada la columna **Arduino** puede seguir este flujo de trabajo. En resumen:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Línea de producto</th>
      <th>MCU</th>
      <th>Notas</th>
    </tr>
    <tr>
      <td><strong>reTerminal E1001 / E1002 / E1003 / E1004</strong></td>
      <td>XIAO ESP32-S3 (integrado)</td>
      <td>Recetario disponible: consulta el enlace anterior</td>
    </tr>
    <tr>
      <td><strong>EE02 / EE03 / EE04 / EE05</strong></td>
      <td>XIAO ESP32-S3 / ESP32-S3 Plus</td>
      <td>Usa la Configuration Tool con tu elección de pantalla</td>
    </tr>
    <tr>
      <td><strong>EN04 / EN05</strong></td>
      <td>XIAO nRF52840 Plus</td>
      <td>Elige el paquete de placa nRF52840; principalmente orientado a OpenDisplay (BLE) en su lugar</td>
    </tr>
    <tr>
      <td><strong>Panel ePaper XIAO de 7,5"</strong></td>
      <td>XIAO ESP32-C3</td>
      <td>Consulta la [guía dedicada del Panel XIAO de 7,5" + Arduino](https://wiki.seeedstudio.com/es/xiao_075inch_epaper_panel_arduino)</td>
    </tr>
    <tr>
      <td><strong>Kit DIY TRMNL 7,5" (OG)</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td>Consulta la [guía dedicada del Kit DIY TRMNL + Arduino](https://wiki.seeedstudio.com/es/ogdiy_kit_works_with_arduino)</td>
    </tr>
    <tr>
      <td><strong>Placa de expansión XIAO eInk v2 / Placa breakout ePaper</strong></td>
      <td>Cualquier XIAO que conectes</td>
      <td>Usa la Configuration Tool con tu elección de XIAO + pantalla</td>
    </tr>
  </table>
</div>

## Paso 1: Configurar el IDE de Arduino

Para controlar cualquier producto Seeed ePaper que funcione en un ESP32 / ESP32-S3 / ESP32-C3 desde Arduino, necesitas el IDE de Arduino más el soporte de placas ESP32.

:::tip
Si es la primera vez que usas Arduino, consulta primero [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

**Paso 1.** Descarga e instala el [IDE de Arduino](https://www.arduino.cc/en/software).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div><br />

**Paso 2.** Añade el soporte de placas ESP32. En el IDE de Arduino ve a **File → Preferences** y añade en el campo **Additional Boards Manager URLs**:

```text
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**Paso 3.** Instala el paquete de placas ESP32: **Tools → Board → Boards Manager**, busca `esp32` e instala el paquete de Espressif Systems.

**Paso 4.** Elige la placa correcta para tu hardware:

- **reTerminal E Serie / EE04 con EE04 plus / Kit DIY TRMNL**: `XIAO_ESP32S3_PLUS`
- **EE02 / EE03 / EE04 / EE05 estándar / EN04 (ruta Arduino)**: `XIAO_ESP32S3` (o `XIAO_nRF52840` para placas basadas en nRF52840)
- **Panel ePaper XIAO de 7,5"**: `XIAO_ESP32C3`

Si no estás seguro de cuál elegir, el recetario de tu producto te lo indicará.

**Paso 5.** Conecta tu hardware mediante USB-C y selecciona el puerto correcto en **Tools → Port**.

**Paso 6.** Para placas ESP32-S3 (la mayoría de reTerminal E Serie y placas EE0x) habilita la PSRAM:

**Tools → PSRAM → OPI PSRAM**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/open_opi_psram.jpg" style={{width:1000, height:'auto'}}/></div>

## Paso 2: Instalar la biblioteca Seeed_GFX

Seeed_GFX es un fork de `TFT_eSPI` con soporte de primera clase para pantallas Seeed. Es la biblioteca recomendada para toda nuestra línea ePaper.

**Paso 1.** Descarga la biblioteca Seeed_GFX desde GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong>
    </a>
</div><br />

**Paso 2.** **Sketch → Include Library → Add .ZIP Library** y selecciona el ZIP descargado.

:::note
Si instalaste previamente `TFT_eSPI`, elimínala temporalmente o cámbiale el nombre en la carpeta de bibliotecas de Arduino para evitar conflictos.
:::

## Paso 3: Generar `driver.h` para tu hardware

Cada sketch de ejemplo en `Seeed_GFX` busca un `driver.h` local en la carpeta del sketch. Ese archivo de cabecera le indica a la biblioteca qué placa, controlador de pantalla y asignación de pines usar. La Configuration Tool lo genera por ti.

**Paso 1.** Elige un sketch de ejemplo:

- **Pantallas monocromas**: **File → Examples → Seeed_GFX → ePaper → Basic → HelloWorld**
- **Pantallas en color**: **File → Examples → Seeed_GFX → ePaper → Colorful → HelloWorld**

**Paso 2.** En la misma carpeta del sketch, crea un nuevo archivo llamado `driver.h` (usa la flecha de nueva pestaña en el IDE de Arduino).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select.jpg" style={{width:1000, height:'auto'}}/></div>

**Paso 3.** Abre la [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) y elige tu hardware. Cada dispositivo preconfigurado produce el valor correcto de `BOARD_SCREEN_COMBO` (y cualquier definición extra, por ejemplo `USE_XIAO_EPAPER_DISPLAY_BOARD_EE04`).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

**Paso 4.** Copia el contenido generado y pégalo en tu `driver.h`. Valores comunes:

<Tabs groupId="arduino-board">
<TabItem value="reterminal-e1001" label="reTerminal E1001" default>

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

</TabItem>
<TabItem value="reterminal-e1002" label="reTerminal E1002">

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

</TabItem>
<TabItem value="reterminal-e1003" label="reTerminal E1003">

```cpp
#define BOARD_SCREEN_COMBO 522 // reTerminal E1003 (ED103TC2)
```

</TabItem>
<TabItem value="reterminal-e1004" label="reTerminal E1004">

```cpp
#define BOARD_SCREEN_COMBO 523 // reTerminal E1004 (T133A01)
```

</TabItem>
<TabItem value="ee04-583" label="EE04 + 5.83&quot; mono">

```cpp
#define BOARD_SCREEN_COMBO 503 // 5.83 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

</TabItem>
</Tabs>

Para cualquier otra combinación, **confía siempre en la salida de la Configuration Tool**: elige tu placa XIAO (o `None` si es un kit integrado reTerminal/EN04) más la pantalla que tengas conectada.

**Paso 5.** Sube el sketch a tu hardware. En el primer encendido puede aparecer una actualización parcial; las actualizaciones posteriores mostrarán el ejemplo completo de Hello World.

## Paso 4 (opcional): Usar GxEPD2 en su lugar

`Seeed_GFX` es la biblioteca recomendada, pero si ya tienes una base de código basada en `GxEPD2`, también puedes controlar Seeed ePaper con ella. `GxEPD2` es una biblioteca comunitaria popular que cubre una amplia gama de pantallas de tinta electrónica.

Para instalarla manualmente desde GitHub y obtener el soporte más reciente de dispositivos:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/ZinggJM/GxEPD2" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong>
    </a>
</div><br />

**Sketch → Include Library → Add .ZIP Library** y selecciona el ZIP descargado. Los libros de recetas del producto incluyen ejemplos concretos de `GxEPD2` cuando corresponde (por ejemplo, el [libro de recetas de reTerminal E Serie](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino) muestra renderizado a todo color en la E1002).

## Próximos pasos — Libros de recetas

Esta página se detiene intencionalmente en el código base. Los ejemplos de código específicos de hardware y los recorridos de extremo a extremo se encuentran en el libro de recetas de cada producto:

- **[reTerminal E Serie — libro de recetas de pantalla ePaper](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino)** — Hello World en E1001/E1002/E1003/E1004 con `Seeed_GFX` y `GxEPD2`.
- **[reTerminal E Serie — libro de recetas de periféricos integrados](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino_peripherals)** — el conjunto completo de periféricos para los mismos modelos: control de LED, zumbador (pitidos PWM pasivos + reproducción de melodías), entrada de 3 botones, temperatura/humedad SHT4x, gestión de batería, tarjeta microSD, renderizado de imágenes BMP desde SD.
- **[reTerminal E Serie — libro de recetas de RTC, bajo consumo, audio y táctil](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino_peripherals_2)** — gestión de tiempo del RTC, sueño profundo / sueño ligero, grabación con micrófono I2S y dibujo táctil capacitivo (solo E1003).
- **[XIAO 7.5" ePaper Panel + Arduino](https://wiki.seeedstudio.com/es/xiao_075inch_epaper_panel_arduino)** — recorrido con XIAO ESP32-C3 usando `Seeed_GFX`.
- **[TRMNL 7.5" DIY Kit + Arduino](https://wiki.seeedstudio.com/es/ogdiy_kit_works_with_arduino)** — uso del hardware del kit en sketches personalizados de Arduino (en lugar de la plataforma en la nube TRMNL).

Cuando se envían nuevos productos ePaper, el libro de recetas correspondiente se añade en la carpeta de cada producto; esta página principal se actualiza para enlazarlo.

## Problemas comunes

### La pantalla no muestra nada o no se actualiza

- La mayoría de las veces el cable FPC del ePaper está suelto o al revés. Vuelve a colocarlo con los contactos metálicos hacia arriba.
- Comprueba que `OPI PSRAM` esté habilitado en **Tools → PSRAM** para placas ESP32-S3.
- Confirma que `BOARD_SCREEN_COMBO` en `driver.h` coincida con tu hardware. Un valor incorrecto produce silenciosamente una pantalla en blanco.
- Verifica que el sketch de ejemplo que abriste coincida con tu pantalla (Básica vs Colorida).

### No se puede subir el programa a la placa

- Prueba con otro cable USB-C (cable de datos, no solo de alimentación).
- Para placas ESP32-S3: mantén presionado el botón **BOOT** antes de conectar el cable USB para entrar en modo de descarga y luego suéltalo.
- Confirma que **Tools → Port** apunte al dispositivo serie correcto después de volver a conectar.

Para una resolución de problemas más profunda en un producto específico, consulta el libro de recetas para ese hardware.

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
