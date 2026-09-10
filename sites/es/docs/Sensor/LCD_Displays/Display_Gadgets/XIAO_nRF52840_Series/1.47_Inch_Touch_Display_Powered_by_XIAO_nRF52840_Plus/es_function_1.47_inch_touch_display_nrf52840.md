---
description: Demos independientes a nivel de función para cada periférico integrado de la XIAO 1.47'' IPS Display (nRF52840). Cubre pantalla, táctil, tarjeta SD, micrófono, IMU, botones y detección de voltaje de batería.
title: Uso de periféricos integrados
sidebar_label: Función
keywords:
  - XIAO
  - nRF52840
  - IPS Display
  - LCD
  - Function
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /function_1.47_inch_touch_display_nrf52840
sku: 100004242
sidebar_position: 2
last_update:
  date: 08/20/2026
  author: FaiyuetCik
createdAt: '2026-08-11'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/es/function_1.47_inch_touch_display_nrf52840/
---

# Uso de periféricos integrados

Esta página recopila demos independientes a nivel de función para cada periférico integrado de la pantalla IPS de 1,47''. Cada sección es autónoma: puedes elegir la que coincida con tu caso de uso sin tener que leer las demás.

:::tip
Los GIF de demostración de esta página están acelerados para mantenerlos cortos.
:::

:::note
Todos los demos de esta página requieren **Seeed nRF52 Boards (1.1.13)** como se describe en [Introducción](/es/getting_started_1.47_inch_touch_display_nrf52840), además de la biblioteca **Seeed_GFX2** instalada manualmente como se describe a continuación.
:::

- **Library Manager** — ve a **Sketch > Include Library > Manage Libraries...**, busca e instala:

<div class="table-center">
  <table align="center">
    <tr><th>Library</th><th>Search Keyword</th><th>Author</th><th>Required by</th></tr>
    <tr><td><strong>Seeed Arduino LSM6DS3</strong></td><td><code>Seeed Arduino LSM6DS3</code></td><td>Seeed Studio</td><td>Demos de IMU</td></tr>
  </table>
</div>

:::note
**SdFat** viene incluido con el paquete de placas **Seeed nRF52 Boards (1.1.13)**, por lo que los demos **SD Image Reader** y **Record to SD** no necesitan una instalación separada de SdFat. No instales SdFat desde el Library Manager, ya que podría sobrescribir la versión incluida y causar conflictos de biblioteca o de API.
:::

- **Seeed_GFX2 (instalación manual)** — esta biblioteca no está disponible en Library Manager y debe instalarse manualmente:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Paso 1.** Haz clic en el botón de arriba para descargar `Seeed_GFX2` v1.0.0 como un archivo ZIP (anclado a una etiqueta de versión para que el tutorial siga siendo reproducible). Alternativamente, clona el repositorio desde [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2).

**Paso 2.** En el Arduino IDE, ve a **Sketch > Include Library > Add .ZIP Library...** y selecciona el ZIP descargado. El IDE lee `library.properties` y lo instala automáticamente en la carpeta `Seeed_GFX2` correcta; no necesitas renombrar la carpeta extraída. (Para instalar manualmente en su lugar, descomprime el archivo y renombra la carpeta extraída a `Seeed_GFX2` antes de colocarla en `Documents/Arduino/libraries/`).

**Paso 3.** Reinicia el Arduino IDE para que se detecte la nueva biblioteca.

:::tip
- **Seeed_GFX2** es la biblioteca gráfica de Seeed Studio construida sobre una arquitectura en capas `Board` + `Panel Config`. Cada demo inicializa la pantalla con una única llamada `display.begin<Board_..., Config_...>()`: la plantilla **Board** posee el mapa de pines (CS/DC/SCK/MOSI/RST/BL), y la **Panel Config** integra la resolución 172×320, el orden de color (BGR) y la orientación. No se necesita `driver.h` ni configuración manual de pines.
- En esta placa los demos usan `Board_XIAO_1inch47_Touch_Display<38, 37>` (RST=38, BL=37) con `Config_Seeed_1inch47_Touch_JD9853A` (172×320, BGR, sin inversión).
- El **controlador táctil** (AXS5106L) es gestionado por la capa Touch de `Seeed_GFX2` (`Touch_AXS5106L`) — no se necesita ninguna biblioteca adicional. Los demos de **IMU** usan la biblioteca **Seeed Arduino LSM6DS3** (instalada arriba).
:::

## Obtener el código de demostración

Cada demo de esta página se encuentra en el repositorio [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets), dentro del directorio `code_GFX2/Function/`. Cada demo es una carpeta que contiene un único sketch `.ino`. **Descarga siempre la carpeta completa** en lugar de copiar el código fuente `.ino` desde la vista web de GitHub.

**Opción A — Descargar el repositorio como ZIP (recomendado):**

1. Abre [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) y haz clic en **Code > Download ZIP**, luego extrae el archivo en cualquier lugar conveniente.
2. Navega a `code_GFX2/Function/` y abre la carpeta indicada en la línea **Code location** de cada demo. Por ejemplo, el demo GraphicTest para esta placa se encuentra en `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_graphictest/`.
3. **Haz doble clic en el archivo `.ino`** para abrirlo en el Arduino IDE.

**Opción B — git clone:**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

Luego abre el archivo `.ino` del demo desde la carpeta clonada `code_GFX2/Function/...`.

## Pantalla — GraphicTest

Este demo ejecuta un benchmark gráfico completo en el panel JD9853A de 1,47 pulgadas, que incluye barras de color, líneas, rectángulos, círculos, triángulos, rectángulos redondeados, texto y un gradiente de píxeles. Úsalo para verificar que la pantalla está cableada correctamente y que todas las llamadas de dibujo funcionan como se espera.

**Code location:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver en GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

El sketch inicializa el panel JD9853A mediante **Seeed_GFX2**, luego recorre en secuencia diez primitivas gráficas, midiendo el tiempo de ejecución de cada una mediante `micros()` e imprimiendo el resultado en el monitor serie.

La pantalla se inicializa con una única llamada de plantilla:

```cpp
display.begin<Board_XIAO_1inch47_Touch_Display<38, 37>,
              Config_Seeed_1inch47_Touch_JD9853A>();
```

La plantilla **Board** posee el mapa de pines — CS=D2, DC=D3, SCK=D8, MOSI=D10 — y sus parámetros de plantilla `<RST, BL>` toman números GPIO directos, por lo que `<38, 37>` establece RST=GPIO38 y BL=GPIO37. La **Panel Config** integra la resolución 172×320, el orden de color BGR y sin inversión: no se necesita `driver.h` ni escritura manual de MADCTL.

### Ejecutar el demo

**Paso 1.** Abre `xiao_nrf52840_147_graphictest.ino` en Arduino IDE.

**Paso 2.** Selecciona **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** y el **Port** correcto.

**Paso 3.** Haz clic en **Upload**.

**Paso 4.** Abre **Tools > Serial Monitor** (115200 baudios). Deberías ver la salida de tiempos para cada prueba:

```
LCD width: 172
LCD height: 320
Color bars: 57.62 ms
Lines: 4859.38 ms
Fast lines: 95.70 ms
Rectangles: 74.22 ms
Filled rectangles: 236.33 ms
Circles: 588.87 ms
Triangles: 413.09 ms
Round rectangles: 125.98 ms
Text: 1961.91 ms
Pixel gradient: 8716.80 ms
Graphic test finished.
```

En la pantalla, verás cada patrón de prueba mostrado durante aproximadamente un segundo antes de que comience el siguiente. Cuando todas las pruebas se completen, aparecerá una pantalla de "Finished" con un borde de rectángulo redondeado azul.

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

Después de que el sketch recorra todos los patrones, la pantalla muestra el mensaje "Graphic Test / Finished". Reinicia la placa para ejecutar la prueba de nuevo.

---

## Táctil — Touch Circle

Este demo convierte la pantalla táctil de 1,47 pulgadas en un bloc de dibujo interactivo. Toca en cualquier parte de la pantalla y aparecerá un círculo blanco en la punta de tu dedo. Los círculos permanecen en pantalla y se acumulan a medida que tocas. Toca la barra **CLEAR** en la parte inferior de la pantalla para borrar todos los círculos y empezar de nuevo.

**Code location:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_touch_circle/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver en GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

La demo utiliza el controlador táctil capacitivo **AXS5106L** (dirección I2C `0x63`) conectado mediante I2C en D4/D5. La línea de interrupción táctil en **D7** se activa en el flanco de bajada siempre que un dedo toca o suelta la pantalla. El tacto se gestiona mediante la **capa táctil** de Seeed_GFX2 (`Touch_AXS5106L`):

```cpp
Touch_AXS5106L touch(-1, D7, Wire, 172, 320);
display.attachTouch(touch, display.panel().driver().bus());
// ...
display.getTouch(&x, &y);
```

<div class="table-center">
  <table align="center">
    <tr><th>Pin</th><th>Función</th></tr>
    <tr><td>D4 (SDA)</td><td>Bus de datos I2C — compartido con el IMU</td></tr>
    <tr><td>D5 (SCL)</td><td>Bus de reloj I2C — compartido con el IMU</td></tr>
    <tr><td>D7</td><td>Interrupción táctil (activa en bajo, flanco de bajada)</td></tr>
    <tr><td>RST</td><td>Compartido con el reset de la LCD (GPIO38)</td></tr>
  </table>
</div>

**Dibujo por flanco.** El sketch utiliza un enfoque de detección de flancos: solo añade un círculo en el flanco de bajada de un toque (cuando se apoya el dedo), no mientras el dedo se mantiene. Esto proporciona un comportamiento de toque‑para‑dibujar nítido e intencional en lugar de pintar continuamente una estela al arrastrar.

**Reflejo en el eje X.** El panel táctil está físicamente montado en una orientación diferente a la LCD, por lo que la coordenada X cruda debe reflejarse. `display.getTouch()` ya aplica internamente este reflejo y devuelve coordenadas de pantalla, por lo que no se necesita la transformación manual `screenX = 172 - 1 - rawX`.

**Búfer de círculos.** Se almacenan hasta 120 círculos en un búfer circular. Cuando el búfer se llena, se elimina el círculo más antiguo y se vuelve a dibujar la pantalla para mantener la visualización limpia.

**Zona CLEAR.** Los 36 píxeles inferiores de la pantalla se reservan como una barra CLEAR. Al tocar esta área se borran todos los círculos y se reinicia el contador en lugar de dibujar un círculo nuevo.

**Área segura de dibujo.** Un borde gris tenue delimita el área donde los círculos son totalmente visibles.

### Ejecución de la demo

**Paso 1.** Abre `xiao_nrf52840_147_touch_circle.ino` en Arduino IDE.

**Paso 2.** Selecciona la placa y el puerto, luego haz clic en **Upload**.

**Paso 3.** Abre **Tools > Serial Monitor** (115200 baudios). Deberías ver:

```
LCD: 172x320
Touch: AXS5106L ready
Tap screen to draw white circles.
Tap CLEAR bar at bottom to erase.
```

**Paso 4.** Toca la pantalla: cada toque imprime las coordenadas de pantalla mapeadas:

```
Touch: screen=(144,124)
Touch: screen=(166,210)
Touch: screen=(121,250)
Touch: screen=(37,231)
Touch: screen=(122,44)
```

Toca la barra CLEAR en la parte inferior para borrar todos los círculos.

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_touch_circle.gif" style={{width:500, height:'auto'}}/></div>

Cada toque deja un círculo blanco en la punta de tu dedo. La barra de título de la pantalla muestra el conteo acumulado. Toca la barra CLEAR y la pantalla se reinicia a en blanco con el borde y la barra de título redibujados.

---

## Tarjeta SD — Lector de imágenes

Esta demo lee archivos de imagen `.bmp` desde una tarjeta MicroSD y los muestra en la pantalla. Es compatible con imágenes BMP sin comprimir de 24 bits y las recorta centradas para ajustarlas a la pantalla de 172×320.

**Ubicación del código:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_sd_image_reader/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

La LCD y la tarjeta SD comparten el mismo bus SPI de hardware (SCK = D8, MOSI = D10, MISO = D9). Para evitar contención en el bus, el sketch desactiva la selección de chip de la tarjeta SD (D6) antes de cualquier operación de la LCD y la vuelve a activar antes del acceso a la SD. La tarjeta SD es controlada por SdFat en modo `SHARED_SPI` sobre la instancia `SPI` predeterminada, mientras que la LCD funciona sobre el host SPI de Seeed_GFX2: ambos comparten los mismos pines físicos D8/D9/D10.

El sketch escanea el directorio raíz de la tarjeta SD en busca de archivos `.bmp` (hasta 24) y luego los muestra en bucle con un intervalo de 2 segundos entre imágenes.

**Formatos BMP compatibles:**

<div class="table-center">
  <table align="center">
    <tr><th>Formato</th><th>Profundidad de bits</th><th>Notas</th></tr>
    <tr><td>BMP sin comprimir</td><td>24 bits</td><td>BGR888 convertido a RGB565 para la visualización</td></tr>
  </table>
</div>

Las imágenes más grandes que 172×320 se recortan centradas.

### Ejecución de la demo

**Paso 1.** Formatea una tarjeta MicroSD como **FAT32**.

**Paso 2.** Copia una o más imágenes `.bmp` a la raíz de la tarjeta SD.

**Paso 3.** Inserta la tarjeta SD en la ranura MicroSD de la placa de pantalla.

**Paso 4.** Abre `xiao_nrf52840_147_sd_image_reader.ino` en Arduino IDE, selecciona la placa y el puerto, y haz clic en **Upload**.

**Paso 5.** Abre **Tools > Serial Monitor** (115200 baudios). Deberías ver:

```
[IMAGE] /Atest.bmp
[IMAGE] /Another test.bmp
[IMAGE] /test.bmp
[SD] mounted @ 8000000
```

:::note
Los nombres de archivo que se muestran reflejan los archivos `.bmp` que colocaste en la tarjeta SD. Tu salida variará según los archivos que copies a la tarjeta.
:::

La pantalla muestra cada imagen durante 2 segundos y luego avanza a la siguiente en un bucle continuo.

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_sd_reader.gif" style={{width:500, height:'auto'}}/></div>

Si no se encuentran archivos BMP, la pantalla muestra "No BMP found". Si una imagen no se puede decodificar, la pantalla muestra brevemente la ruta del archivo con "BMP decode failed" y pasa al siguiente archivo.

---

## Micrófono y altavoz

La pantalla IPS de 1,47'' tiene un **micrófono digital PDM (Pulse Density Modulation)** integrado para entrada de audio, además de pads de salida I2S para controlar un altavoz/amplificador externo. Esta sección muestra dos demos: una visualización en tiempo real de **Barra de volumen** de la entrada del micrófono (sin hardware adicional) y una demo de **Grabación en SD** que graba 5 segundos de audio en una tarjeta MicroSD y los reproduce a través de un amplificador I2S externo.

<div class="table-center">
  <table align="center">
    <tr><th>Pin</th><th>Señal</th><th>Función</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>Salida de reloj PDM hacia el micrófono</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>Entrada de datos PDM desde el micrófono</td></tr>
  </table>
</div>

### Demo 1: Barra de volumen

Esta demo convierte el micrófono PDM integrado en un medidor de volumen grande y sensible. Una barra de 10 segmentos llena el centro de la pantalla: verde en niveles bajos, amarilla en el rango medio y roja cuando es alto. El porcentaje se muestra encima de la barra y cambia de color para coincidir con el nivel.

**Ubicación del código:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_mic_canvas/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### Cómo funciona

El **micrófono digital PDM (Pulse Density Modulation)** integrado está conectado al periférico PDM del nRF52840 mediante **D0 (PDM_CLK)** y **D1 (MIC_DATA)** como se muestra en la tabla de pines anterior.

La **librería PDM** de Arduino gestiona la conversión de bajo nivel de PDM a PCM en hardware. El sketch configura el periférico PDM a **16 kHz mono** con una ganancia de **30**, y luego registra una rutina de devolución de llamada controlada por interrupciones (`onPDMdata`) que se ejecuta siempre que un búfer de 256 muestras está listo.

**Procesamiento de señal:**

1. **Extracción de pico**: cada callback recorre el búfer de 256 muestras en busca del valor absoluto más grande (amplitud pico).
2. **Normalización**: el pico crudo se mapea desde un suelo de 40 hasta un techo de 16 000, produciendo un valor de volumen de 0,0–1,0. Los valores por debajo del suelo se tratan como silencio.
3. **Suavizado exponencial**: el volumen mostrado es una media móvil exponencial del pico crudo (α = 0,20) para evitar parpadeos. Cuando se detecta silencio, el valor mostrado decae por ×0,94 por fotograma.

**Dibujo de la barra:**

<div class="table-center">
  <table align="center">
    <tr><th>Segmento</th><th>Color</th><th>Rango de volumen</th></tr>
    <tr><td>0–4 (5 inferiores)</td><td>Verde</td><td>0% – 50%</td></tr>
    <tr><td>5–8 (4 centrales)</td><td>Amarillo</td><td>50% – 90%</td></tr>
    <tr><td>9 (top)</td><td>Rojo</td><td>90% – 100%</td></tr>
  </table>
</div>

La barra utiliza **renderizado diferencial**: solo se vuelven a dibujar los segmentos cuyo estado cambió desde el último fotograma. Los segmentos sin cambios se dejan como están, minimizando el tráfico SPI y evitando el parpadeo.

#### Ejecución de la demostración

**Paso 1.** Abre `xiao_nrf52840_147_mic_canvas.ino` en Arduino IDE.

**Paso 2.** Selecciona la placa y el puerto, luego haz clic en **Upload**.

**Paso 3.** Abre **Tools > Serial Monitor** (115200 baudios). Deberías ver:

```
[MIC] ready
```

**Paso 4.** Habla en el micrófono PDM (ubicado cerca de la esquina inferior izquierda de la placa de pantalla) o sopla sobre él. La barra se llena de verde a amarillo y luego a rojo, y el porcentaje se actualiza encima.

#### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_mic_bar.gif" style={{width:500, height:'auto'}}/></div>

La barra responde en tiempo real. En una habitación silenciosa la barra permanece vacía. Hablando a un volumen normal desde ~20 cm se iluminan los segmentos verdes. Soplando directamente en el micrófono se entra en la zona amarilla o roja.

---

### Demo 2: Grabar en SD

Esta demostración graba **5 segundos** de audio desde el micrófono PDM integrado en la RAM, lo guarda en una tarjeta MicroSD como un archivo WAV y luego lo reproduce a través de un amplificador I2S externo. Pulsa un botón para grabar y otro para reproducir.

**Ubicación del código:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_sd_unline_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver en GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### Configuración de hardware

La reproducción requiere un **amplificador de audio I2S y altavoz** externos. La demostración está escrita para una placa MAX98357A conectada a las almohadillas de salida I2S de la placa:

<div class="table-center">
  <table align="center">
    <tr><th>Almohadilla I2S</th><th>Pin XIAO</th><th>MAX98357A</th></tr>
    <tr><td>3V3</td><td>3V3</td><td>VIN</td></tr>
    <tr><td>GND</td><td>GND</td><td>GND</td></tr>
    <tr><td>I2S_SD</td><td>D11</td><td>DIN</td></tr>
    <tr><td>I2S_SCK</td><td>D12</td><td>BCLK</td></tr>
    <tr><td>I2S_WS</td><td>D13</td><td>LRC</td></tr>
  </table>
</div>

Las almohadillas I2S (3V3, GND, D11, D12, D13) están expuestas en el grupo de almohadillas de expansión inferior de la placa de pantalla.

#### Cómo funciona

**Grabación.** El micrófono PDM integrado se captura a **16 kHz mono, 16 bits** a través del periférico PDM del nRF52840, usando los mismos pines **D0 (PDM_CLK)** / **D1 (MIC_DATA)** que en la Demo 1. Cuando pulsas **USR1**, el sketch muestrea 5 segundos de audio directamente en un búfer estático de RAM y luego lo escribe en la tarjeta SD como un archivo WAV (`/REC_001_RAW.WAV`) usando la biblioteca SdFat incluida con Seeed nRF52 Boards 1.1.13.

La grabación se almacena en búfer en la RAM porque el nRF52840 solo tiene **256 KB de RAM**. A 16 kHz × 16 bits mono, 5 segundos necesitan 160 000 bytes, lo cual cabe. 10 segundos necesitarían 320 000 bytes y no cabrían, por lo que la demostración está fijada en 5 segundos.

**Reproducción.** Al pulsar **USR2** se lee el WAV desde la tarjeta SD (saltando la cabecera WAV de 44 bytes) y se transmite a través del periférico I2S del nRF52840 en modo estéreo Philips en **D11/D12/D13**. Las muestras mono se duplican en ambos canales con una ganancia de `0.75×` aplicada para evitar saturación. El amplificador alimenta un pequeño altavoz para que puedas escuchar la grabación.

**Máquina de estados.** La grabadora recorre una secuencia determinista de estados, imprimiendo cada transición en el monitor serie:

```
IDLE → PREPARE_SYSTEM → QUIET_RADIO → PREPARE_PERIPHERALS → START_HFCLK → START_PDM
     → DISCARD_WARMUP → CAPTURE_RAM → STOP_PDM → SAVE_RAW → DONE
```

- **QUIET_RADIO** desactiva el periférico RADIO (este sketch nunca inicializa BLE) para mantener estable la sección de captura sensible al tiempo.
- **START_HFCLK** cambia el reloj de alta frecuencia al cristal externo de 32 MHz, que el periférico PDM necesita para un muestreo preciso.
- **DISCARD_WARMUP** descarta los primeros 300 ms de salida PDM mientras el micrófono se estabiliza.
- **CAPTURE_RAM** llena el búfer hasta que se recolectan 80 000 muestras (5 s), dibujando una barra de progreso en vivo en la pantalla.

**Estados en pantalla:**

<div class="table-center">
  <table align="center">
    <tr><th>Estado</th><th>Descripción</th></tr>
    <tr><td><strong>Ready</strong></td><td>Título "RAM Recorder" con "USR1: record" y "USR2: play last"</td></tr>
    <tr><td><strong>Recording</strong></td><td>Etiqueta "Recording", un temporizador transcurrido ("2.3s / 5s") y una barra de progreso roja</td></tr>
    <tr><td><strong>Done</strong></td><td>Título "Done" con el nombre de archivo guardado y "Saved raw WAV", además de "USR1: record" / "USR2: play raw"</td></tr>
    <tr><td><strong>Playback</strong></td><td>Título "Playback" que muestra "Loading RAW audio..." y luego "Playing RAW audio", terminando en "Finished"</td></tr>
  </table>
</div>

#### Ejecución de la demostración

**Paso 1.** Formatea una tarjeta MicroSD como **FAT32** e insértala en la ranura MicroSD de la placa de pantalla.

**Paso 2.** Conecta un amplificador MAX98357A y un altavoz a las almohadillas I2S como se describió arriba.

**Paso 3.** Abre `xiao_nrf52840_147_sd_unline_record.ino` en Arduino IDE, selecciona la placa y el puerto y haz clic en **Upload**.

**Paso 4.** Abre **Tools > Serial Monitor** (115200 baudios). Al arrancar deberías ver:

```
=== XIAO nRF52840 Plus RAM PDM recorder ===
[RAM] record buffer bytes=160000
[RADIO] BLE is not initialized by this sketch
[PDM] library uses EasyDMA double buffering
[STATE] IDLE
```

**Paso 5.** Pulsa **USR1 (D19)** para grabar 5 segundos de audio desde el micrófono integrado. La barra de progreso se llena mientras graba y la máquina de estados imprime cada transición:

```
[STATE] PREPARE_SYSTEM
[STATE] QUIET_RADIO
[STATE] PREPARE_PERIPHERALS
[STATE] START_HFCLK
[STATE] START_PDM
[STATE] DISCARD_WARMUP
[STATE] CAPTURE_RAM
[STATE] STOP_PDM
[STATE] SAVE_RAW
[STATE] DONE
[SAVE] /REC_001_RAW.WAV
```

**Paso 6.** Pulsa **USR2 (D15)** para reproducir la grabación a través del altavoz:

```
[PLAY] latest RAW audio
[PLAY] finished
```

:::note
Cada nueva grabación se guarda como un archivo WAV numerado (`REC_001_RAW.WAV`, `REC_002_RAW.WAV`, …), por lo que se conservan las grabaciones anteriores. La pantalla "Done" muestra el nombre de archivo de la grabación más reciente.
:::

#### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_record.gif" style={{width:500, height:'auto'}}/></div>

Pulsa USR1 y la pantalla muestra una barra de progreso de grabación. Después de 5 segundos confirma que el WAV se guardó en la tarjeta SD. Pulsa USR2 y el audio se reproduce a través del altavoz conectado mientras la pantalla muestra el estado de la reproducción.

---

## IMU

### Demo 1: Arena movediza electrónica

Esta demostración convierte la pantalla en una simulación de fluido interactiva: partículas de arena dorada que fluyen y se asientan según la gravedad, medida por la IMU LSM6DS3 de 6 ejes integrada. Inclina la placa y la arena cambia de dirección en tiempo real.

**Ubicación del código:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver en GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

La simulación utiliza una **rejilla de ocupación de 24×45** superpuesta sobre la pantalla de 172×320, donde cada celda es de 7×7 píxeles. Se colocan alrededor de **180 partículas** en la rejilla, cada una con una posición, velocidad y un gradiente de color dorado.

El acelerómetro LSM6DS3 se lee vía I2C (D4/D5) cada **8 ms**. Los valores de aceleración en bruto se filtran con un filtro paso bajo y se usan para derivar un vector de gravedad. Cuando inclinas la placa:

1. **Actualización del vector de gravedad**: los datos del acelerómetro se suavizan con una media móvil exponencial para evitar el jitter.
2. **Velocidad de las partículas**: cada partícula acelera en la dirección del vector de gravedad, con amortiguamiento y un factor de movilidad por partícula basado en su profundidad en el flujo.
3. **Ocupación de celdas**: las partículas más profundas en el flujo (más cerca del "fondo" relativo a la gravedad) tienen movilidad reducida, creando un efecto de empaquetamiento realista.
4. **Renderizado diferencial**: solo se vuelven a dibujar las celdas en las que las partículas entraron o salieron, minimizando el tráfico SPI y manteniendo la animación fluida.

Las partículas cercanas a la superficie fluyen libremente (mayor movilidad); las partículas enterradas más profundamente se compactan firmemente (menor movilidad), imitando el comportamiento de la arena real.

### Ejecución de la demostración

**Paso 1.** Abre `xiao_nrf52840_147_electronic_quicksand.ino` en Arduino IDE.

**Paso 2.** Selecciona la placa y el puerto, luego haz clic en **Upload**.

**Paso 3.** Una vez subido, la pantalla se llena de partículas doradas en la parte inferior. Inclina la placa en diferentes direcciones: la arena fluye como si fuera atraída por la gravedad.

**Paso 4.** Abre **Tools > Serial Monitor** (115200 baudios) para confirmar la inicialización:

```
=== Electronic Quicksand ===
imu.begin=0
```

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

Las partículas de arena dorada fluyen suavemente cuando inclinas la placa. Cuando se mantiene plana, la arena se asienta en la parte inferior de la pantalla. Gira la placa 90 grados y la arena fluye hacia el nuevo "fondo" en menos de un segundo.

---

### Demo 2: Levantar para activar

Esta demostración implementa un **sistema de suspensión/activación de pantalla** impulsado por la interrupción de activación integrada del IMU LSM6DS3 en **D14**. La pantalla se apaga automáticamente (retroiluminación apagada + CPU entra en suspensión System ON) después de 8 segundos de inactividad, y se activa al instante cuando levantas o mueves el dispositivo.

**Ubicación del código:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver en GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

La demostración utiliza el **detector de eventos de activación integrado** del LSM6DS3, una función de hardware que supervisa internamente los datos del acelerómetro y activa el pin INT1 (enrutado a D14 en esta placa) cuando el movimiento supera un umbral configurable. Esto significa que el MCU no necesita sondear continuamente el acelerómetro.

**Configuración del IMU:**

<div class="table-center">
  <table align="center">
    <tr><th>Registro</th><th>Valor</th><th>Propósito</th></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>Acelerómetro @ 104 Hz, ±2g</td></tr>
    <tr><td><code>CTRL3_C</code></td><td><code>0x44</code></td><td>Actualización de datos bloqueada + auto-incremento</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>Habilitar interrupciones integradas</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>Umbral de activación (sensibilidad media-baja)</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>Sin filtro de duración (activación rápida)</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>Enrutar activación a INT1</td></tr>
  </table>
</div>

**Flujo de suspensión/activación:**

1. **Estado activo**: la pantalla está encendida, retroiluminación en PWM 120. Los datos del IMU y el estado de la batería se actualizan cada 250 ms / 1000 ms respectivamente. Un temporizador de cuenta regresiva muestra los segundos restantes hasta la suspensión automática.
2. **Suspensión automática**: después de 8 segundos sin actividad, el sketch apaga la retroiluminación, muestra un mensaje "Sleeping... Pick up device to wake" y entra en suspensión **System ON** del nRF52840 mediante WFE (Wait For Event).
3. **Activación**: cuando el usuario levanta la placa, el LSM6DS3 detecta el movimiento y pone D14 en HIGH. Se dispara la interrupción GPIO, la CPU sale de WFE, la retroiluminación se enciende y la interfaz de usuario se redibuja por completo.

En suspensión System ON, toda la RAM y los estados de los periféricos se conservan: la activación es casi instantánea (menos de 1 ms desde la interrupción hasta la retroiluminación encendida).

**Botones de prueba manual:**

<div class="table-center">
  <table align="center">
    <tr><th>Botón</th><th>Pin</th><th>Acción</th></tr>
    <tr><td>USR1</td><td>D19</td><td>Forzar suspensión</td></tr>
    <tr><td>USR2</td><td>D15</td><td>Forzar activación</td></tr>
  </table>
</div>

### Ejecución de la demostración

**Paso 1.** Abre `xiao_nrf52840_147_wakeup.ino` en Arduino IDE, selecciona la placa y el puerto, y haz clic en **Upload**.

**Paso 2.** La pantalla muestra un panel con el estado de energía, datos de movimiento y un temporizador de cuenta regresiva. Deja la placa quieta durante 8 segundos: entrará en suspensión automáticamente.

**Paso 3.** Levanta la placa o agítala suavemente: la pantalla se activa de inmediato.

**Paso 4.** Abre **Tools > Serial Monitor** (115200 baudios) para observar las transiciones de suspensión/activación:

```
[SLEEP] screen backlight off, waiting for IMU D14 wake
[SYS_ON_SLEEP] waiting, sleepLoops=26625 D14=0 awake=N
[SYS_ON_SLEEP] waiting, sleepLoops=27649 D14=0 awake=N
[SYS_ON_SLEEP] waiting, sleepLoops=28673 D14=0 awake=N
[SYS_ON_SLEEP] waiting, sleepLoops=29697 D14=0 awake=N
[WAKE] reason=IMU_D14 wakeCount=1 sleptMs=58776 sleepLoops=29705
[WAKE] reason=IMU_D14 wakeCount=2 sleptMs=60110 sleepLoops=29705
```

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

La pantalla muestra datos en tiempo real del acelerómetro y el giroscopio mientras está activa. Después de 8 segundos de quietud, la pantalla se oscurece y el nRF52840 entra en suspensión de bajo consumo. Levanta el dispositivo y la pantalla se restaura en una fracción de segundo, con el contador de activaciones incrementado.

---

## Botón de usuario

La pantalla IPS de 1,47'' tiene **dos botones físicos pulsadores** conectados al XIAO nRF52840 Plus:

<div class="table-center">
  <table align="center">
    <tr><th>Botón</th><th>Pin</th><th>Lógica</th><th>Etiqueta serigrafiada</th></tr>
    <tr><td><strong>BTN_A</strong></td><td>D19</td><td>Activo en bajo (pulsado = LOW)</td><td>USR1</td></tr>
    <tr><td><strong>BTN_B</strong></td><td>D15</td><td>Activo en bajo (pulsado = LOW)</td><td>USR2</td></tr>
  </table>
</div>

### Lectura de un botón

Ambos botones usan las resistencias de pull-up internas del XIAO. Una lectura simple y no bloqueante se ve así:

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

### Eliminación de rebotes con interrupciones

Para un manejo de botones sensible y sin rebotes, sin bloquear el bucle principal, puedes usar interrupciones por cambio de pin:

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

---

## Estado de la batería

Esta demostración muestra el estado de la batería — un icono de batería con nivel de carga y estado de carga — en la pantalla IPS de 1,47''. Detecta si una batería LiPo está físicamente conectada y muestra uno de tres estados: **USB PWR** (sin batería), **porcentaje** (solo batería) o **cargando** (USB + batería).

La pantalla IPS de 1,47'' incluye un circuito integrado de medición de voltaje de batería. El nRF52840 Plus lee el voltaje de la batería LiPo a través de un divisor de voltaje y puede mostrar la capacidad restante como un porcentaje.

**Ubicación del código:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver en GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

**Pantalla:**

La pantalla es controlada por **Seeed_GFX2** con `Board_XIAO_1inch47_Touch_Display<38, 37>` y `Config_Seeed_1inch47_Touch_JD9853A` (172×320, BGR, rotación 2) mediante SPI por hardware a 10 MHz.

**Circuito de batería:**

El nRF52840 Plus usa **tres pines GPIO** para formar un sistema completo de monitorización de batería:

<div class="table-center">
  <table align="center">
    <tr><th>Señal</th><th>Pin nRF52840</th><th>Función</th></tr>
    <tr><td><code>READ_BAT</code></td><td><strong>P0.14</strong></td><td>Habilitación del divisor de tensión de la batería. Activo en bajo — ponlo en LOW para habilitar el divisor y luego suéltalo a HIGH (alta impedancia) para ahorrar energía.</td></tr>
    <tr><td><code>VBAT_ADC</code></td><td><strong>PIN_VBAT</strong> (AIN7 / P0.31)</td><td>Entrada analógica que lee la tensión de batería dividida.</td></tr>
    <tr><td><code>CHG</code></td><td><strong>P0.17</strong></td><td>Indicador de estado de carga. Activo en bajo — lee LOW cuando un cargador está conectado y la batería se está cargando.</td></tr>
  </table>
</div>

**Detección:**

Con USB-C, una tensión VBAT estática no puede indicar si hay una batería presente: el nodo BAT del cargador puede parecer una celda Li-ion real incluso sin batería conectada. Por ello, la demo primero aprende una **línea base solo USB**, luego confirma la inserción de la batería solo después de un descenso sostenido de VBAT, y confirma la extracción tras una lectura ruidosa/saltada combinada con `~CHG` pasando a HIGH. Esto refleja la lógica de detección del Dashboard de fábrica.

**Estados del icono:**

- **Sin batería** — icono de batería gris con una cruz roja, etiquetado como **USB PWR**.
- **Batería presente** — icono de batería con contorno blanco y relleno de color (verde / amarillo / rojo según el porcentaje), etiquetado con el **porcentaje** y el **voltaje**.
- **Cargando** — relleno cian con un icono de rayo, etiquetado con el porcentaje y el voltaje.

:::note
El pin `~CHG` se lee a través de los **registros GPIO en bruto** del nRF52840 (`nrf_gpio_cfg_input()` y `NRF_P0->IN`) en lugar de `digitalRead()`. En la API de Arduino, los números de pin siguen el mapeo del paquete de la placa, donde `digitalRead(17)` en realidad lee **P0.07** (la línea de datos I2C del IMU de 6 ejes) en lugar de P0.17. Las constantes `14` y `17` aquí son **números de pin P0.x en bruto de Nordic** (P0.14 y P0.17), que es exactamente lo que esperan las llamadas a los registros.
:::

:::note
La demo usa la resistencia de lado bajo **499 kΩ** calibrada de fábrica (relación del divisor ≈ 3.004), no el valor nominal de 510 kΩ. El divisor está integrado en el propio módulo XIAO nRF52840 Plus, no en la placa de pantalla. El pin de habilitación P0.14 es **activo en bajo**: ponlo en LOW para habilitar el divisor y luego suéltalo a alta impedancia (INPUT) para minimizar la corriente de reposo cuando la batería no se está midiendo.
:::

### Ejecutar la demostración

**Paso 1.** Abre `xiao_nrf52840_147_battery_status.ino` en Arduino IDE.

**Paso 2.** Selecciona **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** y el **Puerto** correcto.

**Paso 3.** Haz clic en **Upload**.

**Paso 4.** Observa la pantalla: muestra el icono de la batería con el estado actual. Conecta o desconecta una batería LiPo (o el cable USB-C) para ver cómo el icono cambia entre los tres estados.

### Resultado esperado

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_battery_status_state1.jpg" style={{width:300, height:'auto'}}/><br/><strong>USB PWR</strong> (sin batería)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_battery_status_state2.jpg" style={{width:300, height:'auto'}}/><br/><strong>Porcentaje</strong> (solo batería)</div></td>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_battery_status_state3.jpg" style={{width:300, height:'auto'}}/><br/><strong>Cargando</strong> (USB + batería)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Conector de batería</strong> (parte trasera)</div></td>
    </tr>
  </table>
</div>

Sin una batería, la pantalla muestra una batería gris con una cruz roja y la etiqueta **USB PWR**. Inserta una batería LiPo y el icono cambia a un relleno de color con el porcentaje y el voltaje. Conecta USB-C mientras hay una batería presente y el relleno se vuelve cian con un rayo, indicando que se está cargando.

La demo también imprime una línea de diagnóstico en el Monitor Serie cada 500 ms, por ejemplo:

```
VBAT 3.87V  charging  85  spread=5  usb=ON  base=4.140  baseValid=Y  state=PRESENT  filter=STABLE  removeCount=0
```
---

## Recursos

- **🗃️[Archivos de diseño de PCB]** [XIAO 1.47'' IPS Display (nRF52840) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20KiCad%20Project.zip)
- **📄[Esquemático]** [XIAO 1.47'' IPS Display (nRF52840) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20Schematic.pdf)
- **📦[Modelo 3D]** [XIAO 1.47'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.47%27%27%20IPS%20Display.step)
- **📄[Hoja de datos]** [1.47 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.47%20Inch%20Display%20Datasheet.pdf)
- **💾[Firmware de fábrica]** [XIAO 1.47'' IPS Display (nRF52840) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20Factory%20Firmware.uf2)
- **[Demo]** [Código de demostración de la placa XIAO Display](https://github.com/Seeed-Projects/Display-Gadgets) — todas las demos de Function están en el directorio `code_GFX2/Function/147_nRF52840/`

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
