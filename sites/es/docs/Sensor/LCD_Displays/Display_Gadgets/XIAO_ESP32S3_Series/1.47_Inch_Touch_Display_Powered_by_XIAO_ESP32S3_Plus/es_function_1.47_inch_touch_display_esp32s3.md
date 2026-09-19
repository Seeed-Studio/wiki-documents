---
description: Demos independientes a nivel de función para cada periférico integrado de la XIAO 1.47'' IPS Display (ESP32-S3). Cubre pantalla, tarjeta SD, IMU, táctil, micrófono PDM, grabación y reproducción de audio en SD, botones y detección de voltaje de batería.
title: Uso de periféricos integrados
keywords:
  - XIAO
  - ESP32-S3
  - IPS Display
  - LCD
  - Función
image: https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/logo_esp32s3.webp
slug: /function_1.47_inch_touch_display_esp32s3
sku: 100069905
sidebar_label: Función
sidebar_position: 2
last_update:
  date: 08/26/2026
  author: FaiyuetCik
createdAt: '2026-08-11'
updatedAt: '2026-08-26'
url: https://wiki.seeedstudio.com/es/function_1.47_inch_touch_display_esp32s3/
---

# Uso de periféricos integrados

Esta página recopila demos independientes a nivel de función para cada periférico integrado de la pantalla IPS de 1,47''. Cada sección es autónoma: puedes elegir la que coincida con tu caso de uso sin tener que leer las demás.

:::tip
Los GIF de demostración de esta página están acelerados para mantenerlos cortos.
:::

:::note
Todos los demos de esta página requieren **esp32 Boards by Espressif (3.3.11)** como se describe en [Getting Started](/es/getting_started_1.47_inch_touch_display_esp32s3), además de la biblioteca **Seeed_GFX2** instalada manualmente como se describe a continuación.
:::

- **Seeed_GFX2 (instalación manual)**: esta biblioteca no está disponible en Library Manager y debe instalarse manualmente:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Paso 1.** Haz clic en el botón de arriba para descargar `Seeed_GFX2` v1.0.0 como archivo ZIP (anclado a una etiqueta de versión para que el tutorial siga siendo reproducible). Como alternativa, clona el repositorio desde [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2).

**Paso 2.** En el Arduino IDE, ve a **Sketch > Include Library > Add .ZIP Library...** y selecciona el ZIP descargado. El IDE lee `library.properties` y lo instala automáticamente en la carpeta `Seeed_GFX2` correcta; no necesitas cambiar el nombre de la carpeta extraída. (Para instalarlo manualmente en su lugar, descomprime el archivo y cambia el nombre de la carpeta extraída a `Seeed_GFX2` antes de colocarla en `Documents/Arduino/libraries/`).

**Paso 3.** Reinicia el Arduino IDE para que se detecte la nueva biblioteca.

:::tip
- **Seeed_GFX2** es la biblioteca gráfica de Seeed Studio construida sobre una arquitectura en capas de `Board` + `Panel Config`. Cada demo inicializa la pantalla con una única llamada `display.begin<Board_..., Config_...>()`: la plantilla **Board** posee el mapa de pines (CS/DC/SCK/MOSI/RST/BL), y la **Panel Config** integra la resolución, el orden de color (BGR) y la orientación. No se necesita `driver.h` ni configuración manual de pines.
- En esta placa los demos usan `Board_XIAO_1inch47_Touch_Display<13, 12>` (RST=13, BL=12) con `Config_Seeed_1inch47_Touch_JD9853A` (172×320, BGR, sin inversión).
- El **controlador táctil** (AXS5106L) es gestionado por la capa táctil de `Seeed_GFX2` (`Touch_AXS5106L`), por lo que no se necesita ninguna biblioteca adicional. La **IMU** se lee sobre I2C básico (`Wire`) en los sketches.
- Los ejemplos **SD BMP Reader** y **SD Recorder** usan la **`SD.h`** integrada en el paquete de placas ESP32 para el acceso a la tarjeta SD.
:::

## Obtener el código de demostración

Cada demo de esta página se encuentra en el repositorio [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets), dentro del directorio `code_GFX2/Function/`. Cada demo es una carpeta que contiene un único sketch `.ino`. **Descarga siempre la carpeta completa** en lugar de copiar el código fuente `.ino` desde la vista web de GitHub.

**Opción A — Descargar el repositorio como ZIP (recomendado):**

1. Abre [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) y haz clic en **Code > Download ZIP**, luego extrae el archivo en cualquier lugar conveniente.
2. Navega a `code_GFX2/Function/` y abre la carpeta indicada en la línea **Code location** de cada demo. Por ejemplo, el demo GraphicTest para esta placa se encuentra en `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_graphictest/`.
3. **Haz doble clic en el archivo `.ino`** para abrirlo en el Arduino IDE.

**Opción B — git clone:**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

Luego abre el archivo `.ino` del demo desde la carpeta clonada `code_GFX2/Function/...`.

## Pantalla — GraphicTest

Este demo ejecuta un benchmark gráfico completo en el panel JD9853A de 1,47 pulgadas, que cubre barras de color, líneas, rectángulos, círculos, triángulos, rectángulos redondeados, texto y un degradado de píxeles. Úsalo para verificar que la pantalla está cableada correctamente y que todas las llamadas de dibujo funcionan como se espera.

**Code location:** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

El sketch inicializa el panel JD9853A mediante **Seeed_GFX2**, luego recorre en secuencia diez primitivas gráficas, midiendo el tiempo de ejecución de cada una mediante `micros()` y mostrando el resultado en el monitor serie.

La pantalla se inicializa con una única llamada de plantilla:

```cpp
display.begin<Board_XIAO_1inch47_Touch_Display<13, 12>,
              Config_Seeed_1inch47_Touch_JD9853A>();
```

La plantilla **Board** posee el mapa de pines — CS=D2, DC=D3, SCK=D8, MOSI=D10 — y sus parámetros de plantilla `<RST, BL>` toman números GPIO directos, por lo que `<13, 12>` establece RST=GPIO13 (D17) y BL=GPIO12 (D18). La **Panel Config** integra la resolución 172×320, el orden de color BGR y sin inversión; no se necesita `driver.h` ni escritura manual de MADCTL.

### Ejecutar el demo

**Paso 1.** Abre `xiao_esp32s3_147_graphictest.ino` en Arduino IDE.

**Paso 2.** Selecciona **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** y el **Port** correcto.

**Paso 3.** Haz clic en **Upload**.

**Paso 4.** Abre **Tools > Serial Monitor** (115200 baudios). Deberías ver la salida de tiempos para cada prueba:

```
=== XIAO ESP32-S3 Plus 1.47 graphic test ===
LCD width: 172
LCD height: 320
Color bars: 162.32 ms
Lines: 4562.40 ms
Fast lines: 240.45 ms
Rectangles: 189.31 ms
Filled rectangles: 644.85 ms
Circles: 667.74 ms
Triangles: 531.25 ms
Round rectangles: 236.16 ms
Text: 1899.09 ms
Pixel gradient: 7933.69 ms
Graphic test finished.
```

En la pantalla, verás cada patrón de prueba mostrado durante aproximadamente un segundo antes de que comience el siguiente. Cuando todas las pruebas terminan, aparece una pantalla de "Finished" con un borde de rectángulo redondeado azul.

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

Después de que el sketch recorra todos los patrones, la pantalla muestra el mensaje "Graphic Test / Finished". Reinicia la placa para ejecutar la prueba de nuevo.

---

## Táctil — Touch Circle

Este demo convierte la pantalla táctil de 1,47 pulgadas en un bloc de dibujo interactivo. Toca en cualquier parte de la pantalla y aparecerá un círculo blanco en la punta de tu dedo. Los círculos permanecen en pantalla y se acumulan a medida que tocas. Toca la barra **CLEAR** en la parte inferior de la pantalla para borrar todos los círculos y empezar de nuevo.

**Code location:** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_touch_circle/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_touch_circle" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

El demo utiliza el controlador táctil capacitivo **AXS5106L** (dirección I2C `0x63`) conectado por I2C en D4/D5. El controlador informa de coordenadas absolutas (X, Y) en el rango de píxeles de la pantalla. El tacto se gestiona mediante la **capa táctil** de Seeed_GFX2 (`Touch_AXS5106L`):

```cpp
Touch_AXS5106L touch(-1, D7, Wire, 172, 320);
display.attachTouch(touch, display.panel().driver().bus());
// ...
display.getTouch(&x, &y);
```

<div class="table-center">
  <table align="center">
    <tr><th>Pin</th><th>Function</th></tr>
    <tr><td>D4 (SDA)</td><td>Bus de datos I2C — compartido con el IMU</td></tr>
    <tr><td>D5 (SCL)</td><td>Bus de reloj I2C — compartido con el IMU</td></tr>
    <tr><td>D7</td><td>Interrupción táctil (INT)</td></tr>
    <tr><td>RST</td><td>Compartido con el reinicio de la LCD (GPIO13 / D17)</td></tr>
  </table>
</div>

**Dibujo disparado por flanco.** El sketch usa un enfoque de detección de flancos: solo añade un círculo en el flanco de bajada de un toque (cuando el dedo baja), no mientras el dedo se mantiene. Esto proporciona un comportamiento nítido e intencional de tocar-para-dibujar en lugar de pintar continuamente una estela al arrastrar.

**Reflejo en el eje X.** El panel táctil está físicamente montado en una orientación diferente a la de la LCD, por lo que la coordenada X cruda debe reflejarse. `display.getTouch()` ya aplica internamente este reflejo y devuelve coordenadas de pantalla, por lo que no se necesita una transformación manual `screenX = 172 - 1 - rawX`.

**Búfer de círculos.** Se almacenan hasta 120 círculos en un búfer circular. Cuando el búfer está lleno, se elimina el círculo más antiguo y se vuelve a dibujar la pantalla para mantener la visualización limpia.

**Zona CLEAR.** Los 36 píxeles inferiores de la pantalla se reservan como una barra CLEAR. Al tocar esta área se borran todos los círculos y se reinicia el contador en lugar de dibujar un círculo nuevo.

**Área de dibujo segura.** Un borde gris tenue delimita el área donde los círculos son totalmente visibles.

### Ejecutar la demostración

**Paso 1.** Abre `xiao_esp32s3_147_touch_circle.ino` en Arduino IDE.

**Paso 2.** Selecciona la placa y el puerto, luego haz clic en **Upload**.

**Paso 3.** Abre **Tools > Serial Monitor** (115200 baudios). Deberías ver:

```
=== XIAO ESP32-S3 Touch Circle Demo ===
LCD: 172x320
Touch: AXS5106L ready
Tap screen to draw white circles.
Tap CLEAR bar at bottom to erase.
```

**Paso 4.** Toca la pantalla: cada toque imprime las coordenadas de pantalla mapeadas, y al tocar la barra CLEAR se imprime un mensaje de borrado:

```
Touch: (76,163)
Touch: (64,226)
Touch: (32,80)
Touch: (118,100)
Touch: (37,311)
Clear zone tapped — erasing all circles.
Touch: (72,143)
Touch: (134,61)
Touch: (61,293)
Clear zone tapped — erasing all circles.
```

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_touch_circle.gif" style={{width:500, height:'auto'}}/></div>

Cada toque deja un círculo blanco en la punta de tu dedo. La barra de título de la pantalla muestra el conteo acumulado. Toca la barra CLEAR y la pantalla se reinicia a en blanco con el borde y la barra de título redibujados.

---

## Tarjeta SD — Lector de BMP

Esta demostración lee una imagen `.bmp` de 24 bits sin comprimir desde una tarjeta MicroSD y la muestra en la pantalla. Incluye una prueba de sondeo SD integrada (escritura/lectura) e imprime diagnósticos completos en el monitor serie, lo que la hace útil para verificar tanto el acceso a la tarjeta SD como la decodificación BMP. Las imágenes más grandes que 172×320 se recortan centradas; las imágenes más pequeñas se centran en la pantalla.

**Ubicación del código:** `code_GFX2/Function/147_ESP32/xiao_esp32s3plus_147_sd_bmp_reader_diag_v0_8/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3plus_147_sd_bmp_reader_diag_v0_8" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

La LCD y la tarjeta SD comparten los mismos pines SPI físicos (SCK = D8, MOSI = D10, MISO = D9) pero usan **hosts SPI separados**: la LCD funciona en el host HSPI de Seeed_GFX2, mientras que la tarjeta SD funciona en el host FSPI predeterminado del ESP32. El chip-select de la SD (D6) se mantiene en HIGH cuando está inactiva para que la tarjeta permanezca fuera del bus compartido. El sketch **lee primero la tarjeta SD y luego inicializa la LCD**: monta la SD, decodifica el BMP en un búfer de fotogramas en RAM, llama a `SD.end()` y solo entonces inicializa la pantalla. Este orden evita que los dos hosts SPI compitan por los pines compartidos D8/D10.

El sketch monta la tarjeta SD a varias frecuencias SPI (4 MHz → 1 MHz → 400 kHz), luego ejecuta una rápida prueba de sondeo de escritura/lectura (`/SDPROBE.TXT`) para confirmar que el sistema de archivos es accesible antes de decodificar cualquier imagen. Después busca un archivo BMP en la raíz de la SD (nombres preferidos: `/test.bmp`, `/TEST.BMP`, `/image.bmp`, `/IMAGE.BMP`, etc.), lo decodifica fila por fila en un búfer de fotogramas RGB565 y dibuja el resultado con un encabezado "BMP OK" (que muestra el tiempo de decodificación) y la ruta del archivo a lo largo del borde inferior de la pantalla.

**Formatos BMP compatibles:**

<div class="table-center">
  <table align="center">
    <tr><th>Format</th><th>Bit Depth</th><th>Notes</th></tr>
    <tr><td>BMP sin comprimir (BI_RGB)</td><td>24 bits (también se aceptan 16/32 bits)</td><td>BGR888 convertido a RGB565 para la pantalla</td></tr>
  </table>
</div>

Las imágenes más grandes que 172×320 se recortan centradas; las imágenes más pequeñas se centran. Para obtener los mejores resultados, usa un BMP sin comprimir de 24 bits con un tamaño exactamente de 172×320 píxeles llamado `/test.bmp`.

### Ejecutar la demostración

**Paso 1.** Formatea una tarjeta MicroSD como **FAT32**.

**Paso 2.** Copia una imagen BMP sin comprimir de 24 bits llamada `test.bmp` (idealmente de 172×320 píxeles) en la raíz de la tarjeta SD.

**Paso 3.** Inserta la tarjeta SD en la ranura MicroSD de la placa de pantalla.

**Paso 4.** Abre `xiao_esp32s3plus_147_sd_bmp_reader_diag_v0_8.ino` en Arduino IDE, selecciona la placa y el puerto, y haz clic en **Upload**.

**Paso 5.** Abre **Tools > Serial Monitor** (115200 baudios). Deberías ver:

```
=== XIAO ESP32-S3 Plus 1.47 SD BMP Reader Diagnostic v0.8 ===
[PIN] SD  CS=D6 SCK=D8 MISO=D9 MOSI=D10
[IMG] Put /test.bmp in SD root
[SD] Trying 4000000 Hz...
[SD] OK card=15193 MB freq=4000000 Hz
[PROBE] write /SDPROBE.TXT
[PROBE] write OK
[PROBE] read /SDPROBE.TXT
[PROBE] read OK: XIAO ESP32-S3 SD probe OK

[IMG] open start /test.bmp
[IMG] open done  /test.bmp
[IMG] file size=117814
[BMP] header OK path=/test.bmp size=122x320 bpp=24 row=368 offset=54
[IMG] BMP loaded /test.bmp
[DONE] BMP loaded path=/test.bmp readMs=7881 totalMs=8016
```

:::note
Los valores exactos (`card=15193 MB`, `file size=117814`, `readMs=7881`, etc.) dependen de tu tarjeta SD y de tu archivo BMP; tu salida será diferente.
:::

La pantalla muestra entonces la imagen decodificada con un encabezado verde "BMP OK" (que muestra el tiempo de decodificación en milisegundos) y la ruta del archivo a lo largo del borde inferior.

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_sd_bmp_reader.gif" style={{width:500, height:'auto'}}/></div>

La imagen aparece en la pantalla con un encabezado verde "BMP OK" (que muestra el tiempo de decodificación) y la ruta del archivo en la parte inferior. Si no se encuentra ningún archivo BMP, la pantalla muestra "No BMP loaded" con instrucciones para comprobar el monitor serie y usar `/test.bmp`.

---

## Micrófono y altavoz

### Demostración 1: Barra de volumen

Esta demostración convierte el micrófono PDM integrado en un gran y sensible medidor de volumen. Una barra de 10 segmentos llena el centro de la pantalla: verde a niveles bajos, amarilla en el rango medio, roja cuando está alto. El porcentaje se muestra encima de la barra y cambia de color para coincidir con el nivel.

**Ubicación del código:** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_mic_canvas/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_mic_canvas" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### Cómo funciona

El **micrófono digital PDM (Pulse Density Modulation)** integrado se muestrea a través del periférico I2S del ESP32-S3 configurado en modo PDM RX. En ESP-IDF v5 (núcleo de Arduino 3.3.11), esto usa la nueva API del driver (`driver/i2s_pdm.h`):

<div class="table-center">
  <table align="center">
    <tr><th>Pin</th><th>Signal</th><th>Function</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>Salida de reloj PDM hacia el micrófono</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>Entrada de datos PDM desde el micrófono</td></tr>
  </table>
</div>

El periférico I2S está configurado a **16 kHz mono** con 4 descriptores DMA de 256 frames cada uno. La fuerza de manejo de PDM CLK se reduce después de la inicialización para minimizar el acoplamiento eléctrico. Las muestras se leen mediante `i2s_channel_read()` con un tiempo de espera de 20 ms en el bucle principal.

**Procesamiento de señal:**

1. **Extracción de pico**: cada búfer de 256 muestras se escanea para encontrar el valor absoluto más grande (amplitud pico).
2. **Normalización**: el pico bruto se mapea desde un mínimo de 40 hasta un máximo de 16,000, produciendo un valor de volumen de 0.0–1.0. Los valores por debajo del mínimo se tratan como silencio.
3. **Suavizado exponencial**: el volumen mostrado es una media móvil exponencial del pico bruto (α = 0.20) para evitar el parpadeo. Cuando se detecta silencio, el valor mostrado decae por ×0.94 por frame.

**Dibujo de la barra:**

<div class="table-center">
  <table align="center">
    <tr><th>Segmento</th><th>Color</th><th>Rango de volumen</th></tr>
    <tr><td>0–4 (5 inferiores)</td><td>Verde</td><td>0% – 50%</td></tr>
    <tr><td>5–8 (4 centrales)</td><td>Amarillo</td><td>50% – 90%</td></tr>
    <tr><td>9 (superior)</td><td>Rojo</td><td>90% – 100%</td></tr>
  </table>
</div>

La barra usa **renderizado diferencial**: solo se redibujan los segmentos cuyo estado cambió desde el último frame. Los segmentos sin cambios se dejan tal cual, minimizando el tráfico SPI y evitando el parpadeo.

#### Ejecutar la demostración

**Paso 1.** Abre `xiao_esp32s3_147_mic_canvas.ino` en Arduino IDE.

**Paso 2.** Selecciona la placa y el puerto, luego haz clic en **Upload**.

**Paso 3.** Abre **Tools > Serial Monitor** (115200 baudios). Deberías ver:

```
=== Volume Bar (ESP32-S3) ===
[MIC] PDM RX ready (IDF v5)
[MIC] ready — speak or blow into the mic
```

**Paso 4.** Habla en el micrófono PDM (ubicado cerca de la esquina inferior izquierda de la placa de pantalla) o sopla sobre él. La barra se llena de verde a amarillo a rojo, y el porcentaje se actualiza encima de ella.

#### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_mic_canvas.gif" style={{width:500, height:'auto'}}/></div>

La barra responde en tiempo real. En una habitación silenciosa la barra permanece vacía. Hablar a un volumen normal desde ~20 cm de distancia enciende los segmentos verdes. Soplar directamente en el micrófono empuja el nivel hacia el rango amarillo o rojo.

---

### Demo 2: Grabadora SD

Esta demostración convierte la placa en una grabadora de voz sencilla. Pulsa **USR1** para grabar 5 segundos de audio desde el micrófono PDM integrado, guárdalo en la tarjeta MicroSD como un archivo WAV y luego pulsa **USR2** para reproducir la grabación a través de un amplificador I2S **MAX98357A** externo y un altavoz.

**Ubicación del código:** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_sd_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_sd_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::note
Esta demostración usa **Seeed_GFX2** para la visualización del estado en pantalla, y la **`SD.h` integrada** del paquete de placas esp32 para el acceso a archivos. **No se requiere SdFat**.
:::

#### Configuración de hardware

**Tarjeta MicroSD.** Inserta una tarjeta MicroSD formateada en FAT32 en la ranura de la tarjeta en la placa de pantalla **antes** de grabar el sketch o encender. El micrófono PDM integrado no necesita cableado externo.

**Salida de altavoz.** Conecta un módulo amplificador I2S MAX98357A a los pads de ruptura I2S inferiores:

<div class="table-center">
  <table align="center">
    <tr><th>Pad I2S</th><th>Pin XIAO</th><th>GPIO</th><th>MAX98357A</th></tr>
    <tr><td>I2S_SD</td><td>D11</td><td>GPIO38</td><td>DIN</td></tr>
    <tr><td>I2S_SCK</td><td>D12</td><td>GPIO39</td><td>BCLK</td></tr>
    <tr><td>I2S_WS</td><td>D13</td><td>GPIO40</td><td>LRC / WS</td></tr>
    <tr><td>3V3</td><td>3V3</td><td>—</td><td>VIN</td></tr>
    <tr><td>GND</td><td>GND</td><td>—</td><td>GND</td></tr>
  </table>
</div>

Conecta el altavoz a los terminales **SPK+** y **SPK-** del MAX98357A.

#### Cómo funciona

La demostración pasa por cuatro etapas, usando cuatro periféricos diferentes en secuencia:

**Micrófono PDM (grabación).** El micrófono PDM integrado se muestrea a través del periférico I2S en modo PDM RX en **D0 (PDM_CLK)** y **D1 (MIC_DATA)** a 16 kHz mono. Los primeros **300 ms** de datos capturados se descartan como datos de calentamiento para evitar un clic al inicio de la grabación.

**Búfer de RAM.** Una grabación de 5 segundos a 16 kHz, 16 bits mono ocupa **160,000 bytes** (`5 s × 16,000 samples/s × 2 bytes`). Las muestras se mantienen en un búfer de RAM antes de escribirse en la tarjeta SD.

**Tarjeta SD (almacenamiento).** La grabación se escribe en `/REC_RAW.WAV` en la tarjeta MicroSD usando la `SD.h` integrada del paquete de placas ESP32. El sketch monta la tarjeta a varias frecuencias SPI — probando **8 MHz → 4 MHz → 1 MHz → 0.4 MHz** — hasta que una tenga éxito. Cada nueva grabación sobrescribe el archivo anterior.

:::caution
Esta demostración elimina `/REC_RAW.WAV` al inicio. Copia la grabación a tu computadora antes de reiniciar la placa si quieres conservarla.
:::

**Reproducción I2S.** La reproducción usa el periférico I2S en modo maestro / transmisión a **16 kHz, 16 bits, Philips estéreo**. Las muestras mono se duplican en ambos canales I2S izquierdo y derecho, permitiendo la reproducción independientemente de la selección de canal del MAX98357A.

**Bus LCD/SD compartido.** La LCD y la tarjeta SD comparten los pines **D8** (SCK), **D9** (MISO) y **D10** (MOSI). La demostración evita que colisionen dándole a cada una su propio host SPI:

- La **LCD** usa el host **HSPI** de Seeed_GFX2.
- La **tarjeta SD** usa el host **FSPI** predeterminado del ESP32.
- Antes de escribir o leer desde la tarjeta SD, el sketch llama a `display.end()` para liberar el control de la LCD sobre los pines compartidos, luego vuelve a inicializar la pantalla una vez que la transferencia SD ha terminado.

Esta separación evita conflictos de transacciones SPI entre las actualizaciones de la LCD y el acceso a la tarjeta SD.

#### Ejecutar la demostración

**Paso 1.** Inserta una tarjeta MicroSD **FAT32** en la ranura de la tarjeta en la placa de pantalla.

**Paso 2.** Conecta el amplificador **MAX98357A** y el altavoz a los pads de ruptura I2S como se describió arriba.

**Paso 3.** Abre `xiao_esp32s3_147_sd_record.ino` en Arduino IDE.

**Paso 4.** Selecciona **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** (con el paquete de placas esp32 **3.3.11**) y el **Port** correcto, luego haz clic en **Upload**.

**Paso 5.** Una vez subido, la pantalla muestra **"SD Recorder"**.

**Paso 6.** Pulsa **USR1** y habla en el micrófono PDM integrado durante 5 segundos.

**Paso 7.** Espera a que la pantalla muestre **"Saved SD WAV"**: la grabación se ha escrito en la tarjeta SD.

**Paso 8.** Pulsa **USR2** para reproducir la grabación a través del altavoz.

#### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_sd_record_i2s.gif" style={{width:500, height:'auto'}}/></div>

- La pantalla muestra el progreso de la grabación mientras se captura.
- Después de que la grabación termina, la pantalla muestra **"Saved SD WAV"**.
- Se crea un archivo `/REC_RAW.WAV` en la tarjeta SD.
- Al pulsar **USR2** se reproduce a través del altavoz el audio que acabas de grabar.

---

## IMU

La pantalla IPS de 1,47'' incorpora una IMU de 6 ejes (LSM6DS3) conectada mediante I2C en D4/D5. La línea de interrupción de movimiento en **D14** admite activación por hardware y detección de gestos.

:::note
La IMU integrada es la **LSM6DS3** (confirmado en el esquema de la placa, dirección I2C `0x6A`). Los sketches de demostración además sondean un sensor compatible con QMI8658 como medida defensiva de respaldo, pero la pantalla IPS de 1,47'' suministrada usa la LSM6DS3.
:::

Ambas demostraciones siguientes leen la **LSM6DS3** integrada a través de I2C. Los sketches también sondean un sensor compatible con QMI8658 como medida defensiva de respaldo, pero la configuración de levantar-para-activar se dirige a los registros de la LSM6DS3.

<a id="imu-quicksand"></a>

### Demo 1: Arena movediza electrónica

Esta demostración convierte la pantalla en una simulación de fluido interactiva: partículas de arena dorada que fluyen y se asientan según la gravedad, medida por la IMU de 6 ejes integrada. Inclina la placa y la arena cambia de dirección en tiempo real.

**Ubicación del código:** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

La simulación utiliza una **rejilla de ocupación de 24×45** superpuesta sobre la pantalla de 172×320, donde cada celda es de 7×7 píxeles. Se colocan alrededor de **180 partículas** en la rejilla, cada una con una posición, velocidad y un degradado de color dorado.

El IMU se lee mediante I2C (D4/D5) cada **8 ms**. El sketch busca un IMU en ambas direcciones conocidas — primero QMI8658 y luego LSM6DS3 — y usa el que responda. Los valores de aceleración en bruto se filtran con un filtro paso bajo y se usan para derivar un vector de gravedad. Cuando inclinas la placa:

1. **Actualización del vector de gravedad** — los datos del acelerómetro se suavizan con una media móvil exponencial para evitar el parpadeo.
2. **Velocidad de las partículas** — cada partícula acelera en la dirección del vector de gravedad, con amortiguamiento y un factor de movilidad por partícula basado en su profundidad en el flujo.
3. **Ocupación de celdas** — las partículas más profundas en el flujo (más cerca del "fondo" relativo a la gravedad) tienen movilidad reducida, creando un efecto de empaquetado realista.
4. **Renderizado diferencial** — solo se redibujan las celdas en las que las partículas entraron o salieron, minimizando el tráfico SPI y manteniendo la animación fluida.

Las partículas cercanas a la superficie fluyen libremente (mayor movilidad); las partículas enterradas más profundamente se empaquetan firmemente (menor movilidad), imitando cómo se comporta la arena real.

### Ejecución de la demo

**Paso 1.** Abre `xiao_esp32s3_147_electronic_quicksand.ino` en Arduino IDE.

**Paso 2.** Selecciona la placa y el puerto, luego haz clic en **Upload**.

**Paso 3.** Una vez cargado, la pantalla se llena de partículas doradas en la parte inferior. Inclina la placa en diferentes direcciones: la arena fluye como si fuera atraída por la gravedad.

**Paso 4.** Abre **Tools > Serial Monitor** (115200 baudios) para confirmar la inicialización:

```
=== Electronic Quicksand ESP32-S3 1.47 ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
```

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

Las partículas fluyen hacia el borde inferior cuando inclinas la placa. Cuando la pantalla queda plana, la demo conserva la dirección de gravedad anterior.

---

### Demo 2: Levantar para activar

Esta demo implementa un **sistema de suspensión/activación de pantalla** impulsado por la interrupción de activación integrada del IMU en **D14**. La pantalla se apaga automáticamente (retroiluminación apagada + sueño ligero del ESP32) después de 8 segundos de inactividad y se activa al instante cuando levantas o mueves el dispositivo.

**Ubicación del código:** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver en GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

La demo utiliza el **detector de eventos de activación integrado** del IMU, una función de hardware que supervisa internamente los datos del acelerómetro y activa el pin INT1 (enrutado a D14 en esta placa) cuando el movimiento supera un umbral configurable. Esto significa que el MCU no necesita sondear continuamente el acelerómetro.

La demo de levantar para activar configura el **LSM6DS3** integrado para la activación disparada por movimiento.

**Configuración del IMU (LSM6DS3):**

<div class="table-center">
  <table align="center">
    <tr><th>Registro</th><th>Valor</th><th>Propósito</th></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>Acelerómetro @ 104 Hz, ±2g</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>Habilitar interrupciones integradas</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>Umbral de activación (sensibilidad media-baja)</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>Sin filtro de duración (activación sensible)</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>Enrutar activación a INT1</td></tr>
  </table>
</div>

**Flujo de suspensión/activación:**

1. **Estado activo**: la pantalla está encendida, retroiluminación a PWM 160. Los datos del IMU y el voltaje de la batería se actualizan cada 250 ms / 1000 ms respectivamente. Un temporizador de cuenta regresiva muestra los segundos restantes hasta la suspensión automática.
2. **Suspensión automática**: después de 8 segundos sin actividad, el sketch apaga la retroiluminación, muestra un mensaje "Sleeping... Pick up device to wake", configura D14 como fuente de activación mediante `esp_sleep_enable_gpio_wakeup()` y entra en sueño ligero del ESP32.
3. **Activación**: cuando el usuario levanta la placa, el IMU detecta movimiento y pone D14 en HIGH. El ESP32 sale del sueño ligero y vuelve a dibujar la interfaz de usuario.

**Botones de prueba manual:**

<div class="table-center">
  <table align="center">
    <tr><th>Botón</th><th>Pin</th><th>Acción</th></tr>
    <tr><td>USR1</td><td>D19</td><td>Forzar activación</td></tr>
    <tr><td>USR2</td><td>D15</td><td>Forzar suspensión</td></tr>
  </table>
</div>

### Ejecución de la demo

**Paso 1.** Abre `xiao_esp32s3_147_wakeup.ino` en Arduino IDE, selecciona la placa y el puerto, y haz clic en **Upload**.

**Paso 2.** La pantalla muestra un panel con el estado de energía, datos de movimiento y un temporizador de cuenta regresiva. Deja la placa quieta durante 8 segundos: entrará en suspensión automáticamente.

**Paso 3.** Levanta la placa o agítala suavemente: la pantalla se activa de inmediato.

**Paso 4.** Abre **Tools > Serial Monitor** (115200 baudios) para observar la detección del IMU y los eventos de activación:

```
=== XIAO ESP32-S3 Plus 1.47 IMU Wake Demo ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
[IMU] wake config OK
[WAKE] IMU_D14  count=1
[WAKE] IMU_D14  count=2
```

Cada activación por movimiento imprime una nueva línea `[WAKE] IMU_D14  count=N` con un contador incrementado. La transición a suspensión se muestra solo en la pantalla: no se imprime ninguna línea serie cuando la placa entra en suspensión.

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

La pantalla muestra datos en tiempo real del acelerómetro y el giroscopio mientras está activa. Después de 8 segundos de quietud, la pantalla se oscurece y el ESP32-S3 entra en sueño ligero. Levanta el dispositivo y la pantalla se restaura en una fracción de segundo, con el contador de activaciones incrementado.

---

## Botón de usuario

La pantalla IPS de 1,47'' tiene **dos botones físicos pulsadores** conectados al XIAO ESP32-S3 Plus:

<div class="table-center">
  <table align="center">
    <tr><th>Botón</th><th>Pin</th><th>Lógica</th><th>Etiqueta serigrafiada</th></tr>
    <tr><td><strong>BTN_A</strong></td><td>D19</td><td>Activo en bajo (pulsado = LOW)</td><td>USR1</td></tr>
    <tr><td><strong>BTN_B</strong></td><td>D15</td><td>Activo en bajo (pulsado = LOW)</td><td>USR2</td></tr>
  </table>
</div>

### Lectura de un botón

Ambos botones usan las resistencias de pull-up internas del XIAO. Una lectura simple por sondeo con anti-rebote se ve así:

```cpp
const int BTN_A = D19;
const int BTN_B = D15;

void setup() {
  pinMode(BTN_A, INPUT_PULLUP);
  pinMode(BTN_B, INPUT_PULLUP);
  Serial.begin(115200);
}

void loop() {
  if (digitalRead(BTN_A) == LOW) {
    Serial.println("BTN_A pressed");
    delay(200); // simple debounce
  }
  if (digitalRead(BTN_B) == LOW) {
    Serial.println("BTN_B pressed");
    delay(200);
  }
}
```

### Anti-rebote con interrupciones

Para un manejo de botones sensible y con anti-rebote, puedes usar interrupciones GPIO con un breve retardo de estabilización:

```cpp
volatile bool btnAFlag = false;
volatile bool btnBFlag = false;

void btnAIsr() { btnAFlag = true; }
void btnBIsr() { btnBFlag = true; }

void setup() {
  pinMode(D19, INPUT_PULLUP);
  pinMode(D15, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(D19), btnAIsr, FALLING);
  attachInterrupt(digitalPinToInterrupt(D15), btnBIsr, FALLING);
}

void loop() {
  if (btnAFlag) {
    btnAFlag = false;
    delay(30); // debounce settling time
    if (digitalRead(D19) == LOW) {
      // handle BTN_A press
    }
  }
  if (btnBFlag) {
    btnBFlag = false;
    delay(30);
    if (digitalRead(D15) == LOW) {
      // handle BTN_B press
    }
  }
}
```

### Comportamiento predeterminado en el panel de fábrica

En el firmware de fábrica precargado, los botones se asignan de la siguiente manera (puedes sobrescribir esto en tu propio código):

<div class="table-center">
  <table align="center">
    <tr><th>Botón</th><th>Acción</th></tr>
    <tr><td><strong>BTN_A (D19)</strong></td><td>Pulsación corta: recorrer el brillo de la pantalla <strong>100% → 75% → 50% → 25% → 0% → 100%</strong></td></tr>
    <tr><td><strong>BTN_B (D15)</strong></td><td>Pulsación corta: <strong>alternar pantalla apagada / restaurar al último brillo</strong></td></tr>
  </table>
</div>

Las almohadillas de salida de los botones (etiquetadas como U1 y U2 en la placa) reflejan D19 y D15 respectivamente, lo que te permite conectar botones externos si lo deseas.

## Detección de voltaje de batería

Esta demo lee el divisor de voltaje de la batería integrada en **D16** y muestra dos lecturas amarillas en vivo en la pantalla IPS de 1,47'': el voltaje bruto del divisor D16 y el voltaje de batería calculado. Solo muestra lecturas de voltaje; no estima el porcentaje de batería ni informa el estado de carga.

**Ubicación del código:** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver en GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

**Circuito de batería:**

El ESP32-S3 Plus lee el voltaje de la batería LiPo a través de un divisor de voltaje integrado conectado a **D16**:

<div class="table-center">
  <table align="center">
    <tr><th>Signal</th><th>ESP32-S3 Pin</th><th>Function</th></tr>
    <tr><td><code>BAT_ADC</code></td><td><strong>D16</strong></td><td>Entrada analógica que lee el voltaje de batería dividido. Conectado internamente a un circuito divisor de voltaje (316K / 160K). <strong>No uses este pin externamente.</strong></td></tr>
  </table>
</div>

**Relación del divisor de voltaje:** R14 = 316 kΩ, R15 = 160 kΩ → **Relación del divisor = (316 + 160) / 160 ≈ 2.975**

**Lectura:**

El sketch inicializa la pantalla con `Board_XIAO_1inch47_Touch_Display<13, 12>` y `Config_Seeed_1inch47_Touch_JD9853A` (172×320, BGR, sin inversión), luego muestrea **D16** doce veces (separadas 700 µs) usando `analogReadMilliVolts()` a resolución de 12 bits con atenuación de 11 dB. Promedia las muestras para obtener el voltaje bruto del divisor, lo multiplica por la relación del divisor para obtener el voltaje de la batería (`Calc = D16 × 2.975`), y dibuja ambos como dos líneas amarillas centradas. La pantalla solo se actualiza cuando cualquiera de los valores cambia en una cantidad significativa (D16 ≥ 0.02 V o Calc ≥ 0.05 V).

:::note
Ninguna señal de estado de carga está conectada a un GPIO del ESP32-S3. Esta demostración solo muestra lecturas de voltaje; no detecta la presencia de la batería ni el estado de carga, ni estima el porcentaje de batería.
:::

### Ejecutar la demostración

**Paso 1.** Abre `xiao_esp32s3_147_battery_status.ino` en Arduino IDE.

**Paso 2.** Selecciona **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** y el **Port** correcto.

**Paso 3.** Haz clic en **Upload**.

**Paso 4.** Observa la pantalla: muestra dos líneas amarillas, el voltaje bruto del divisor D16 y el voltaje de batería calculado. Conecta o desconecta una batería LiPo (o el cable USB-C) para ver cómo se actualizan los valores.

### Resultado esperado

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_battery_status_display.jpg" style={{width:300, height:'auto'}}/><br/><strong>Lectura de voltaje</strong> (D16 + Calc)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Conector de batería</strong> (parte trasera)</div></td>
    </tr>
  </table>
</div>

La pantalla muestra el voltaje bruto del divisor D16 en la línea superior y el voltaje de batería calculado (`Calc`) en la línea inferior. Con una batería LiPo conectada, `Calc` se aproxima al voltaje en los terminales de la batería. También puede aparecer una lectura solo con alimentación por USB, por lo que `Calc` por sí solo no puede confirmar si hay una batería conectada.

La demostración también imprime una línea de diagnóstico en el Monitor Serie cada segundo, por ejemplo:

```
D16 1.39V | Calc 4.14V
```

---

## Recursos

- **🗃️[Archivos de diseño de PCB]** [XIAO 1.47'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.47%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[Esquemático]** [XIAO 1.47'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.47%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[Modelo 3D]** [XIAO 1.47'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.47%27%27%20IPS%20Display.step)
- **🖨️[Caja impresa en 3D]** [XIAO 1.47'' IPS Display Enclosure (by gokul)](https://www.printables.com/model/1843008-enclosure-for-xiao-147-ips-touch-display-esp32nrf5)
- **📄[Hoja de datos]** [1.47 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.47%20Inch%20Display%20Datasheet.pdf)
- **💾[Firmware de fábrica]** [XIAO 1.47'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.47%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)
- **[Demo]** [Código de demostración de la placa XIAO Display](https://github.com/Seeed-Projects/Display-Gadgets) — todas las demostraciones de Function están en el directorio `code_GFX2/Function/147_ESP32/`

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
