---
description: Introducción a XIAO 0.96'' IPS Display (ESP32-S3).
title: Introducción a XIAO 0.96'' IPS Display (ESP32-S3)
keywords:
  - XIAO
  - ESP32-S3
  - Display
  - LCD
  - 0.96
image: https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/logo_esp32s3.webp
slug: /getting_started_0.96_inch_display_esp32s3
sku: 100037468
sidebar_label: Introducción
sidebar_position: 1
type: gettingstarted
last_update:
  date: 09/07/2026
  author: FaiyuetCik
createdAt: '2026-08-20'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/es/getting_started_0.96_inch_display_esp32s3/
---

# Introducción a XIAO 0.96'' IPS Display (ESP32-S3)

<div class="table-center">
  <table align="center">
    <tr><th>XIAO 0.96'' IPS Display (ESP32-S3)</th></tr>
    <tr><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_display_hardware_hero.jpg" style={{width:600, height:'auto'}}/></div></td></tr>
    <tr><td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/0-96-Inch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6993.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td></tr>
  </table>
</div>

## Introducción

La pantalla IPS de 0,96'' es una placa de expansión compacta impulsada por la XIAO ESP32-S3 Plus. Combina una pantalla LCD a color IPS de 80×160, un micrófono PDM integrado, un IMU de 6 ejes, dos botones de usuario, pads de expansión I2C e I2S y detección de voltaje de batería en un factor de forma diseñado para dispositivos conectados pequeños.

La ESP32-S3 Plus añade conectividad Wi-Fi y Bluetooth, lo que hace que la placa sea adecuada para wearables compactos, paneles de sensores portátiles, gadgets de llavero y prototipos IoT inalámbricos.

<div class="table-center">
  <table align="center">
    <tr><th>Especificación</th><th>Detalle</th></tr>
    <tr><td>Posicionamiento del producto</td><td>Ultracompacto</td></tr>
    <tr><td>Controlador principal</td><td>Seeed Studio XIAO ESP32-S3 Plus</td></tr>
    <tr><td>Procesador</td><td>ESP32-S3R8, doble núcleo, hasta 240 MHz</td></tr>
    <tr><td>Memoria</td><td>8 MB PSRAM + 16 MB Flash</td></tr>
    <tr><td>Conectividad inalámbrica</td><td>Wi-Fi de 2,4 GHz + BLE 5.0</td></tr>
    <tr><td>Tipo de pantalla</td><td>0.96" IPS TFT LCD</td></tr>
    <tr><td>Resolución</td><td>80 × 160</td></tr>
    <tr><td>Controlador de pantalla</td><td>ST7789</td></tr>
    <tr><td>Interfaz de pantalla</td><td>SPI</td></tr>
    <tr><td>Entrada táctil</td><td>No</td></tr>
    <tr><td>IMU de 6 ejes</td><td>Sí</td></tr>
    <tr><td>Micrófono digital PDM</td><td>Sí</td></tr>
    <tr><td>Ranura para tarjeta MicroSD</td><td>No</td></tr>
    <tr><td>Conector Grove I2C</td><td>No</td></tr>
    <tr><td>Botones de usuario</td><td>2</td></tr>
    <tr><td>Conector de batería</td><td>JST de 2 pines, LiPo de 3,7 V</td></tr>
    <tr><td>Supervisión de batería</td><td>Supervisión del voltaje de la batería mediante D16 ADC; el nivel de batería puede estimarse a partir del voltaje medido. No se admite la detección del estado de carga.</td></tr>
    <tr><td>Interfaces de expansión</td><td>1x pads I2C, 1x pads I2S</td></tr>
    <tr><td>Tamaño de la placa</td><td>18,8 × 43,6 × 10,6 mm</td></tr>
    <tr><td>Ideal para</td><td>Dispositivos IoT diminutos, wearables, pantallas de estado</td></tr>
  </table>
</div>

:::note
Esta placa de pantalla está diseñada para la **XIAO ESP32-S3 Plus**. Si estás usando la versión XIAO nRF52840 Plus, consulta en su lugar la guía [XIAO 0.96'' IPS Display (nRF52840)](/es/getting_started_0.96_inch_display_nrf52840).
:::

:::note
La versión ESP32-S3 Plus utiliza D16 para medir el voltaje del divisor de batería; no proporciona un indicador del estado de carga.
:::

## Descripción del hardware

Consulta la siguiente vista para identificar los conectores y componentes integrados antes de conectar hardware de expansión.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_display_hardware_overview.png" style={{width:1000, height:'auto'}}/></div>

### Mapa de pines

La siguiente tabla enumera los pines de la XIAO ESP32-S3 Plus utilizados por la placa de pantalla y sus periféricos integrados.

<div class="table-center">
  <table align="center">
    <tr><th>Pin XIAO</th><th>Nombre de red</th><th>Descripción de la función</th><th>Notas de conexión de hardware</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>Reloj del micrófono PDM</td><td>Conectado internamente al micrófono PDM integrado</td></tr>
    <tr><td>D1</td><td>PDM_DATA</td><td>Datos del micrófono PDM</td><td>Conectado internamente al micrófono PDM integrado</td></tr>
    <tr><td>D2</td><td>LCD_CS</td><td>Selección de chip de la LCD</td><td>Conectado internamente a la LCD</td></tr>
    <tr><td>D3</td><td>LCD_DC</td><td>Selección de datos/comandos de la LCD</td><td>Conectado internamente a la LCD</td></tr>
    <tr><td>D4</td><td>I2C_SDA</td><td>Datos I2C</td><td>Compartido por el IMU integrado y el pad de prueba I2C en la parte posterior</td></tr>
    <tr><td>D5</td><td>I2C_SCL</td><td>Reloj I2C</td><td>Compartido por el IMU integrado y el pad de prueba I2C en la parte posterior</td></tr>
    <tr><td>D6</td><td>BTN_USR1</td><td>Botón de usuario 1</td><td>Activo en bajo</td></tr>
    <tr><td>D7</td><td>BTN_USR2</td><td>Botón de usuario 2</td><td>Activo en bajo</td></tr>
    <tr><td>D8</td><td>LCD_SCK</td><td>Reloj SPI por hardware</td><td>Conectado internamente a la LCD</td></tr>
    <tr><td>D9</td><td>NC</td><td>No conectado</td><td>Sin conexión física</td></tr>
    <tr><td>D10</td><td>LCD_MOSI</td><td>Salida de datos SPI por hardware</td><td>Conectado internamente a la LCD</td></tr>
    <tr><td>D11</td><td>I2S_SD</td><td>Datos de audio I2S</td><td>Expuesto externamente al pad de expansión inferior</td></tr>
    <tr><td>D12</td><td>I2S_SCK</td><td>Reloj de bits I2S</td><td>Expuesto externamente al pad de expansión inferior</td></tr>
    <tr><td>D13</td><td>I2S_WS</td><td>Selección de palabra I2S</td><td>Expuesto externamente al pad de expansión inferior</td></tr>
    <tr><td>D14</td><td>IMU_INT</td><td>Interrupción del IMU</td><td>Conectado internamente al LSM6DS3 para eventos de movimiento y doble toque</td></tr>
    <tr><td>D15</td><td>NC</td><td>No conectado</td><td>Sin conexión física</td></tr>
    <tr><td>D16</td><td>VBAT_ADC</td><td>Detección de voltaje de batería</td><td>Conectado al divisor de 316 kΩ / 160 kΩ. <strong>No usar externamente</strong></td></tr>
    <tr><td>D17</td><td>LCD_RST</td><td>Reinicio de la LCD</td><td>Conectado internamente a la LCD</td></tr>
    <tr><td>D18</td><td>LCD_BL_PWM</td><td>Control de la retroiluminación de la LCD</td><td>Conectado internamente al circuito controlador de la retroiluminación</td></tr>
    <tr><td>D19</td><td>NC</td><td>No conectado</td><td>Sin conexión física</td></tr>
  </table>
</div>


:::caution
D4 y D5 se comparten con el IMU integrado. Cualquier dispositivo I2C externo conectado al pad de prueba debe usar una dirección única y ser compatible con lógica de 3,3 V.
:::

## Introducción

:::caution
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_display_handing_tips.png" style={{width:600, height:'auto'}}/></div>
:::

Esta guía carga un sketch mínimo de **"Hello, XIAO"** en la placa de pantalla: la pantalla enciende su retroiluminación, se llena de negro e imprime **"Hello,"** y **"XIAO"** como dos líneas centradas de texto grande en verde. Es la forma más rápida de confirmar que la pantalla y tu entorno de desarrollo funcionan antes de profundizar en las demos individuales de periféricos.

### Preparación de software

Necesitarás las siguientes herramientas y librerías:

- **Arduino IDE** (versión 1.8 o posterior)

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div><br />

- **esp32 Boards by Espressif (3.3.11)** — añade la siguiente URL a **File > Preferences > Additional Boards Manager URLs**:

```
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

Luego ve a **Tools > Board > Boards Manager**, busca **esp32** e instala la versión **3.3.11**.

- **Seeed_GFX2 (instalación manual)** — esta librería no está disponible en el Library Manager y debe instalarse manualmente:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Paso 1.** Haz clic en el botón de arriba para descargar `Seeed_GFX2` v1.0.0 como un archivo ZIP (anclado a una etiqueta de versión para que el tutorial siga siendo reproducible). Alternativamente, clona el repositorio desde [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2).

**Paso 2.** En el Arduino IDE, ve a **Sketch > Include Library > Add .ZIP Library...** y selecciona el ZIP descargado. El IDE lee `library.properties` y lo instala automáticamente en la carpeta `Seeed_GFX2` correcta; no necesitas renombrar la carpeta extraída. (Para instalarlo manualmente en su lugar, descomprime el archivo y renombra la carpeta extraída a `Seeed_GFX2` antes de colocarla en `Documents/Arduino/libraries/`.)

**Paso 3.** Reinicia el Arduino IDE para que se detecte la nueva librería.

:::tip
- **Seeed_GFX2** es la librería gráfica de Seeed Studio construida sobre una arquitectura en capas de `Board` + `Panel Config`. Cada demo inicializa la pantalla con una única llamada `display.begin<Board_..., Config_...>()` — la plantilla **Board** contiene el mapa de pines (CS/DC/SCK/MOSI/RST/BL), y la **Panel Config** integra la resolución 80×160, el orden de color (BGR) y la orientación. No se necesita `driver.h` ni configuración manual de pines.
- En esta placa, el sketch usa `Board_XIAO_0inch96_LCD<13, 12>` (RST=13, BL=12) con `Config_Seeed_0inch96_LCD_ST7789`.
:::

### Descargar el código

El sketch de ejemplo está disponible en GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/getting_started_code/xiao_esp32s3_096_hello" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el código</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Navega a `code_GFX2/getting_started_code/xiao_esp32s3_096_hello/` y abre `xiao_esp32s3_096_hello.ino` en Arduino IDE. **Descarga la carpeta completa** en lugar de copiar el código fuente `.ino` desde la vista web de GitHub.

### Subir el sketch

**Paso 1.** Conecta el XIAO ESP32-S3 Plus a tu ordenador mediante USB-C.

**Paso 2.** Selecciona **Tools > Board > esp32 > XIAO_ESP32S3_PLUS**.

**Paso 3.** Selecciona el **Port** correcto en **Tools > Port**.

**Paso 4.** Haz clic en **Upload**. El sketch se compilará y se subirá a la placa.

### Resultado esperado

Después de subirlo, la pantalla se enciende con un fondo negro y muestra dos líneas centradas de texto grande en verde: **"Hello,"** en la primera línea y **"XIAO"** en la segunda. El saludo permanece en pantalla sin volver a dibujarse.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_display_hello.gif" style={{width:500, height:'auto'}}/></div>

Si la pantalla no se inicializa, el sketch imprime el mensaje de error de la librería en el monitor serie a **115200** baudios. Abre **Tools > Serial Monitor** y ajusta la velocidad en baudios a 115200 para leerlo.

## Qué sigue

La placa de pantalla integra varios periféricos a bordo. La página de [Function](/es/function_0.96_inch_display_esp32s3) proporciona una demo independiente para cada uno:

<div class="table-center">
  <table align="center">
    <tr><th>Periférico</th><th>Demo</th></tr>
    <tr><td>Pantalla</td><td>[GraphicTest](/es/function_0.96_inch_display_esp32s3#screen-display--graphictest) — diez primitivas gráficas con pruebas de rendimiento</td></tr>
    <tr><td>IMU</td><td>[Electronic Quicksand + Raise to Wake](/es/function_0.96_inch_display_esp32s3#imu) — efectos de movimiento de 6 ejes y activación por movimiento</td></tr>
    <tr><td>Micrófono y altavoz</td><td>[Flash Recorder](/es/function_0.96_inch_display_esp32s3#microphone--speaker--flash-recorder) — grabar y reproducir audio</td></tr>
    <tr><td>Botones</td><td>[User Buttons](/es/function_0.96_inch_display_esp32s3#user-buttons) — leer pulsaciones y eliminar rebotes con interrupciones</td></tr>
    <tr><td>Batería</td><td>[Battery Voltage Detection](/es/function_0.96_inch_display_esp32s3#battery-voltage-detection) — medir el voltaje del divisor</td></tr>
  </table>
</div>

## Preguntas frecuentes (FAQ)

### La placa no aparece en el menú Tools > Board

1. Abre **File > Preferences** y añade la URL de ESP32 Boards Manager:

   ```
   https://espressif.github.io/arduino-esp32/package_esp32_index.json
   ```

2. Abre **Tools > Board > Boards Manager**, busca **esp32** e instala la versión **3.3.11**.
3. Selecciona **Tools > Board > esp32 > XIAO_ESP32S3_PLUS**.

Reinicia Arduino IDE si la entrada de la placa aún no aparece.

### ¿Cómo debo sujetar la placa?

Sujeta la placa cerca de los botones y no toques el módulo **XIAO**. Agarra la placa por la zona de los botones.

### [Acerca del firmware de fábrica - DashBoard]

#### ¿Por qué mi pantalla no está brillante cuando conecto el cable USB-C?

Es posible que la retroiluminación de la pantalla esté apagada. Pulsa el botón **USR2 (D7)** para volver a activar la retroiluminación; la pantalla se encenderá con normalidad.

## Recursos

- **🗃️[Archivos de diseño de PCB]** [XIAO 0.96'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[Esquemático]** [XIAO 0.96'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[Modelo 3D]** [XIAO 0.96'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%200.96%27%27%20IPS%20Display.step)
- **📄[Hoja de datos]** [0.96 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/0.96%20Inch%20Display%20Datasheet.pdf)
- **💾[Firmware de fábrica]** [XIAO 0.96'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

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
