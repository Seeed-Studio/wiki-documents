---
description: Primeros pasos con XIAO 1.47'' IPS Display (nRF52840).
title: Primeros pasos con XIAO 1.47'' IPS Display (nRF52840)
sidebar_label: Primeros pasos
keywords:
  - XIAO
  - nRF52840
  - IPS Display
  - LCD
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /getting_started_1.47_inch_touch_display_nrf52840
sku: 100004242
sidebar_position: 1
type: gettingstarted
last_update:
  date: 09/07/2026
  author: FaiyuetCik
createdAt: '2026-08-11'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/es/getting_started_1.47_inch_touch_display_nrf52840/
---

# Primeros pasos con XIAO 1.47'' IPS Display (nRF52840)

<div class="table-center">
  <table align="center">
    <tr><th>XIAO 1.47'' IPS Display (nRF52840)</th></tr>
    <tr><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/NEW147_nRF52840Plus_display_hardware_hero.jpg" style={{width:600, height:'auto'}}/></div></td></tr>
    <tr><td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/1-47-Inch-Touch-Display-Powered-by-XIAO-nRF52840-Plus-p-6995.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td></tr>
  </table>
</div>

## Introducción

La 1.47'' IPS Display es una placa de expansión diseñada para la serie XIAO, impulsada por la XIAO nRF52840 Plus. Incorpora una pantalla LCD a color de 172×320 con panel táctil capacitivo, micrófono PDM integrado, IMU de 6 ejes (LSM6DS3), ranura para tarjeta MicroSD y gestión de alimentación por batería, todo integrado en un formato compacto.

Esta combinación la convierte en una plataforma ideal para aplicaciones HMI portátiles, paneles IoT, dispositivos wearables y prototipado interactivo.

<div class="table-center">
  <table align="center">
    <tr><th>Especificación</th><th>Detalle</th></tr>
    <tr><td>Posicionamiento del producto</td><td>Táctil e interacción completa</td></tr>
    <tr><td>Controlador principal</td><td>Seeed Studio XIAO nRF52840 Plus</td></tr>
    <tr><td>Procesador</td><td>Nordic nRF52840, procesador ARM® Cortex®-M4 de 32 bits con FPU, 64 MHz</td></tr>
    <tr><td>Memoria</td><td>256 KB RAM + 1 MB Flash interna + 2 MB Flash integrada en placa</td></tr>
    <tr><td>Conectividad inalámbrica</td><td>BLE 5.4</td></tr>
    <tr><td>Tipo de pantalla</td><td>1.47" IPS TFT LCD</td></tr>
    <tr><td>Resolución</td><td>172 × 320</td></tr>
    <tr><td>Controlador de pantalla</td><td>JD9853A</td></tr>
    <tr><td>Interfaz de pantalla</td><td>SPI</td></tr>
    <tr><td>Entrada táctil</td><td>Táctil capacitiva</td></tr>
    <tr><td>IMU de 6 ejes</td><td>Sí</td></tr>
    <tr><td>Micrófono digital PDM</td><td>Sí</td></tr>
    <tr><td>Ranura para tarjeta MicroSD</td><td>Sí</td></tr>
    <tr><td>Conector Grove I2C</td><td>No</td></tr>
    <tr><td>Botones de usuario</td><td>2</td></tr>
    <tr><td>Conector de batería</td><td>Conector JST 2.0 de 2 pines para LiPo de 3.7 V</td></tr>
    <tr><td>Supervisión de batería</td><td>Compatible con detección de estado de la batería; el voltaje de la batería también se puede monitorizar para estimar el nivel de carga.</td></tr>
    <tr><td>Interfaces de expansión</td><td>1x pads I2C, 1x pads I2S, 1x pads SWD, 2x pads de botón de usuario</td></tr>
    <tr><td>Tamaño de la placa</td><td>26.4 × 51.4 × 12.6 mm</td></tr>
    <tr><td>Ideal para</td><td>Interfaz táctil, HMI portátil, medios locales y registro de datos</td></tr>
  </table>
</div>

## Descripción general del hardware

Antes de empezar, consulta la siguiente imagen para comprender la disposición física de la 1.47'' IPS Display.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_display_hardware_overview.png" style={{width:1000, height:'auto'}}/></div>

### Mapa de pines

La 1.47'' IPS Display expone todos los pines de la XIAO nRF52840 Plus. La tabla siguiente enumera cada pin, su nombre de red en la placa de pantalla, su función y cómo está conectado a los periféricos integrados.

<div class="table-center">
  <table align="center">
    <tr><th>Pin XIAO</th><th>Nombre de red</th><th>Descripción de la función</th><th>Notas de conexión de hardware</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>MIC_CLK</td><td>Reloj del micrófono digital PDM</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>Datos del micrófono digital PDM</td><td>Conectado internamente al micrófono PDM</td></tr>
    <tr><td>D2</td><td>LCD_CS</td><td>Señal de selección de chip de la pantalla</td><td>Conectado internamente al CI controlador LCD</td></tr>
    <tr><td>D3</td><td>LCD_DC</td><td>Conmutación datos/comandos de la pantalla</td><td>Conectado internamente al CI controlador LCD</td></tr>
    <tr><td>D4</td><td>SDA</td><td>Bus de datos I2C</td><td>Compartición de bus: conectado internamente a la IMU y al CI táctil; expuesto externamente como pads de expansión I2C</td></tr>
    <tr><td>D5</td><td>SCL</td><td>Bus de reloj I2C</td><td>Compartición de bus: conectado internamente a la IMU y al CI táctil; expuesto externamente como pads de expansión I2C</td></tr>
    <tr><td>D6</td><td>SD_CS</td><td>Señal de selección de chip de la tarjeta SD</td><td>Conectado internamente a la ranura de tarjeta MicroSD</td></tr>
    <tr><td>D7</td><td>TOUCH_INT</td><td>Señal de interrupción táctil</td><td>Conectado internamente al CI táctil para activación asíncrona</td></tr>
    <tr><td>D8</td><td>SCK</td><td>Reloj SPI por hardware</td><td>Conectado internamente a la pantalla LCD y a la ranura de tarjeta SD</td></tr>
    <tr><td>D9</td><td>MISO</td><td>Entrada de datos SPI por hardware</td><td>Conectado internamente a la ranura de tarjeta SD</td></tr>
    <tr><td>D10</td><td>MOSI</td><td>Salida de datos SPI por hardware</td><td>Conectado internamente a la pantalla LCD y a la ranura de tarjeta SD</td></tr>
    <tr><td>D11</td><td>I2S_SD</td><td>Línea de datos de audio</td><td>Corresponde al mapeo predeterminado de I2S_SD, expuesto al grupo de pads inferiores</td></tr>
    <tr><td>D12</td><td>I2S_SCK</td><td>Reloj de bits de audio</td><td>Corresponde al mapeo predeterminado de I2S_SCK, expuesto al grupo de pads inferiores</td></tr>
    <tr><td>D13</td><td>I2S_WS</td><td>Selección de palabra de audio</td><td>Corresponde al mapeo predeterminado de I2S_WS, expuesto al grupo de pads inferiores</td></tr>
    <tr><td>D14</td><td>IMU_INT</td><td>Interrupción de movimiento de la IMU</td><td>Reasignación de función: usado para activación por movimiento</td></tr>
    <tr><td>D15</td><td>BTN_B</td><td>Botón físico 2 (USR2)</td><td>Reasignación de función: botón de usuario 2. Expuesto externamente como pad de expansión de botón</td></tr>
    <tr><td>D16</td><td>NC</td><td>Flotante (reservado)</td><td>Sin conexión física</td></tr>
    <tr><td>D17</td><td>LCD_RST</td><td>Señal de reinicio de la pantalla</td><td>Control GPIO independiente para un arranque fiable</td></tr>
    <tr><td>D18</td><td>LCD_BL</td><td>Control de retroiluminación de la pantalla</td><td>Admite ajuste de brillo por PWM por hardware</td></tr>
    <tr><td>D19</td><td>BTN_A</td><td>Botón físico 1 (USR1)</td><td>Botón de usuario 1. Expuesto externamente como pad de expansión de botón</td></tr>
  </table>
</div>


## Primeros pasos

Esta guía carga un sketch mínimo de **"Hello, XIAO"** en la placa de pantalla: la pantalla enciende su retroiluminación, se rellena de negro e imprime **"Hello,"** y **"XIAO"** como dos líneas centradas de texto grande en verde. Es la forma más rápida de confirmar que la pantalla y tu entorno de desarrollo funcionan antes de profundizar en las demos de periféricos individuales.

### Preparación de software

Necesitarás las siguientes herramientas y librerías:

- **Arduino IDE** (versión 1.8 o posterior)

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div><br />

- **Seeed nRF52 Boards (1.1.13)** — añade la siguiente URL a **File > Preferences > Additional Boards Manager URLs**:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

Luego ve a **Tools > Board > Boards Manager**, busca **Seeed nRF52** e instala la versión **1.1.13**.

- **Seeed_GFX2 (instalación manual)** — esta librería no está disponible en el Library Manager y debe instalarse manualmente:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Paso 1.** Haz clic en el botón de arriba para descargar `Seeed_GFX2` v1.0.0 como archivo ZIP (anclado a una etiqueta de versión para que el tutorial siga siendo reproducible). Alternativamente, clona el repositorio desde [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2).

**Paso 2.** En el Arduino IDE, ve a **Sketch > Include Library > Add .ZIP Library...** y selecciona el ZIP descargado. El IDE lee `library.properties` y lo instala automáticamente en la carpeta `Seeed_GFX2` correcta; no necesitas renombrar la carpeta extraída. (Para instalarlo manualmente en su lugar, descomprime el archivo y renombra la carpeta extraída a `Seeed_GFX2` antes de colocarla en `Documents/Arduino/libraries/`.)

**Paso 3.** Reinicia el Arduino IDE para que se detecte la nueva librería.

:::tip
- **Seeed_GFX2** es la librería gráfica de Seeed Studio construida sobre una arquitectura en capas de `Board` + `Panel Config`. Cada demo inicializa la pantalla con una única llamada `display.begin<Board_..., Config_...>()` — la plantilla **Board** posee el mapa de pines (CS/DC/SCK/MOSI/RST/BL), y la **Panel Config** integra la resolución 172×320, el orden de color (BGR) y la orientación. No se necesita `driver.h` ni configuración manual de pines.
- En esta placa el sketch usa `Board_XIAO_1inch47_Touch_Display<38, 37>` (RST=38, BL=37) con `Config_Seeed_1inch47_Touch_JD9853A`.
- La librería **Adafruit TinyUSB** utilizada por el sketch viene incluida en el paquete **Seeed nRF52 Boards**, por lo que no necesita instalación por separado.
:::

### Descarga el código

El sketch de ejemplo está disponible en GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/getting_started_code/xiao_nrf52840_147_hello" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el código</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Navega a `code_GFX2/getting_started_code/xiao_nrf52840_147_hello/` y abre `xiao_nrf52840_147_hello.ino` en el Arduino IDE. **Descarga la carpeta completa** en lugar de copiar el código fuente `.ino` desde la vista web de GitHub.

### Cargar el sketch

**Paso 1.** Conecta el XIAO nRF52840 Plus a tu ordenador mediante el puerto USB-C.

**Paso 2.** En Arduino IDE, selecciona la placa: **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus**.

**Paso 3.** Selecciona el **Puerto** correcto en **Tools > Port**.

**Paso 4.** Haz clic en el botón **Upload** (→). El sketch se compilará y cargará en la placa.

:::note
Si encuentras problemas al cargar, haz doble clic en el botón de reinicio para entrar en modo bootloader. El LED USR respirará en rojo y aparecerá en tu ordenador una unidad **NRF52BOOT**, indicando que la placa está en modo bootloader.
:::

### Salida esperada

Después de cargar, la pantalla se enciende con un fondo negro y muestra dos líneas centradas de texto grande en verde: **"Hello,"** en la primera línea y **"XIAO"** en la segunda. El saludo permanece en pantalla sin volver a dibujarse.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_display_hello.gif" style={{width:500, height:'auto'}}/></div>

Si la pantalla no se inicializa, el sketch imprime el mensaje de error de la librería en el monitor serie a **115200** baudios. Abre **Tools > Serial Monitor** y ajusta la velocidad en baudios a 115200 para leerlo.

## Qué sigue

La placa de pantalla integra varios periféricos a bordo. La página de [Function](/es/function_1.47_inch_touch_display_nrf52840) proporciona una demo independiente para cada uno:

<div class="table-center">
  <table align="center">
    <tr><th>Periférico</th><th>Demo</th></tr>
    <tr><td>Pantalla</td><td>[GraphicTest](/es/function_1.47_inch_touch_display_nrf52840#screen-display--graphictest) — diez primitivas gráficas con pruebas de tiempo</td></tr>
    <tr><td>Táctil</td><td>[Touch Circle](/es/function_1.47_inch_touch_display_nrf52840#touch--touch-circle) — un círculo que sigue tu dedo</td></tr>
    <tr><td>Tarjeta SD</td><td>[Image Reader](/es/function_1.47_inch_touch_display_nrf52840#sd-card--image-reader) — muestra un BMP desde la tarjeta MicroSD</td></tr>
    <tr><td>Micrófono y altavoz</td><td>[Volume Bar + Record to SD](/es/function_1.47_inch_touch_display_nrf52840#microphone--speaker) — medidor de nivel PDM en vivo y grabación en SD</td></tr>
    <tr><td>IMU</td><td>[Electronic Quicksand + Raise to Wake](/es/function_1.47_inch_touch_display_nrf52840#imu) — efectos de movimiento de 6 ejes y activación por movimiento</td></tr>
    <tr><td>Botones</td><td>[User Button](/es/function_1.47_inch_touch_display_nrf52840#user-button) — lectura de pulsaciones y eliminación de rebotes con interrupciones</td></tr>
    <tr><td>Batería</td><td>[Battery Status](/es/function_1.47_inch_touch_display_nrf52840#battery-status) — mide el voltaje y lo convierte en un porcentaje</td></tr>
  </table>
</div>

## Preguntas frecuentes (FAQ)

### ¿Qué pasa si la carga falla o la placa no es detectada?

Haz doble clic en el botón de reinicio del XIAO nRF52840 Plus. El LED USR respirará en rojo y aparecerá en tu ordenador una unidad llamada **NRF52BOOT**. Arrastra el archivo `.uf2` compilado a la unidad **NRF52BOOT**. La placa se programará y se reiniciará automáticamente.

## Recursos

- **🗃️[Archivos de diseño de PCB]** [XIAO 1.47'' IPS Display (nRF52840) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20KiCad%20Project.zip)
- **📄[Esquemático]** [XIAO 1.47'' IPS Display (nRF52840) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20Schematic.pdf)
- **📦[Modelo 3D]** [XIAO 1.47'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.47%27%27%20IPS%20Display.step)
- **📄[Hoja de datos]** [1.47 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.47%20Inch%20Display%20Datasheet.pdf)
- **💾[Firmware de fábrica]** [XIAO 1.47'' IPS Display (nRF52840) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20Factory%20Firmware.uf2)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
