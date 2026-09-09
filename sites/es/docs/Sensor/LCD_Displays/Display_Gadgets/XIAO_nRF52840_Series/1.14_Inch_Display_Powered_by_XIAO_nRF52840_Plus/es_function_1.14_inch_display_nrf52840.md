---
description: Demos independientes a nivel de función para cada periférico integrado de la XIAO 1.14'' IPS Display (nRF52840). Cubre pantalla, IMU, micrófono PDM, grabación en memoria Flash interna y reproducción de audio I2S, botones, batería y Grove I2C.
title: Uso de periféricos integrados
sidebar_label: Función
keywords:
  - XIAO
  - nRF52840
  - Display
  - LCD
  - Function
  - 1.14
  - I2S
  - Audio
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /function_1.14_inch_display_nrf52840
sku: 100069374
sidebar_position: 2
last_update:
  date: 08/12/2026
  author: FaiyuetCik
createdAt: '2026-08-13'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/es/function_1.14_inch_display_nrf52840/
---

# Uso de periféricos integrados

Esta página recopila demos independientes a nivel de función para cada periférico integrado de la pantalla IPS de 1,14''. Cada sección es autónoma: puedes elegir la que coincida con tu caso de uso sin tener que leer las demás.

:::tip
Los GIF de demostración de esta página están acelerados para mantenerlos cortos.
:::

:::note
Todos los demos de esta página requieren **Seeed nRF52 Boards (1.1.13)** como se describe en [Getting Started](/es/getting_started_1.14_inch_display_nrf52840), además de la biblioteca **Seeed_GFX2** instalada manualmente como se describe a continuación.
:::

- **Library Manager** — ve a **Sketch > Include Library > Manage Libraries...**, busca e instala:

<div class="table-center">
  <table align="center">
    <tr><th>Library</th><th>Search Keyword</th><th>Author</th><th>Required by</th></tr>
    <tr><td><strong>Seeed Arduino LSM6DS3</strong></td><td><code>Seeed Arduino LSM6DS3</code></td><td>Seeed Studio</td><td>Demos de IMU</td></tr>
  </table>
</div>

- **Seeed_GFX2 (Manual Installation)** — esta biblioteca no está disponible en Library Manager y debe instalarse manualmente:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Paso 1.** Haz clic en el botón de arriba para descargar `Seeed_GFX2` v1.0.0 como archivo ZIP (anclado a una etiqueta de versión para que el tutorial siga siendo reproducible). Alternativamente, clona el repositorio desde [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2).

**Paso 2.** En el Arduino IDE, ve a **Sketch > Include Library > Add .ZIP Library...** y selecciona el ZIP descargado. El IDE lee `library.properties` y lo instala automáticamente en la carpeta `Seeed_GFX2` correcta; no necesitas renombrar la carpeta extraída. (Para instalarlo manualmente en su lugar, descomprime el archivo y renombra la carpeta extraída a `Seeed_GFX2` antes de colocarla en `Documents/Arduino/libraries/`).

**Paso 3.** Reinicia el Arduino IDE para que se detecte la nueva biblioteca.

:::tip
- **Seeed_GFX2** es la biblioteca gráfica de Seeed Studio construida sobre una arquitectura en capas `Board` + `Panel Config`. Cada demo inicializa la pantalla con una única llamada `display.begin<Board_..., Config_...>()`: la plantilla **Board** posee el mapa de pines (CS/DC/SCK/MOSI/RST/BL), y la **Panel Config** integra la resolución 135×240, el orden de color y la inversión. No se necesita `driver.h` ni configuración manual de pines.
- En esta placa los demos usan `Board_XIAO_1inch14_LCD<38, 37>` (RST=38, BL=37) con `Config_Seeed_1inch14_LCD_ST7789` (135×240). Algunos demos definen una anulación local del sketch `Config_XIAO_1inch14_LCD_ST7789_BGR` para el orden de color BGR.
- Los demos de **IMU** usan la biblioteca **Seeed Arduino LSM6DS3** (instalada arriba).
- La pantalla IPS de 1,14'' **no tiene controlador táctil ni ranura para tarjeta SD**, por lo que no se necesitan bibliotecas de touch ni de SD.
:::

:::note
Las bibliotecas **PDM**, **Adafruit TinyUSB**, **Adafruit LittleFS** e **InternalFileSystem** utilizadas por el tutorial de **Flash Recorder** vienen incluidas con **Seeed nRF52 Boards 1.1.13**; no instales versiones separadas desde Library Manager.

La grabación se almacena en el **sistema de archivos Flash interno** del nRF52840. Esta pantalla no tiene ranura para tarjeta SD y el tutorial no usa SdFat.
:::

## Obtener el código de demostración

Cada demo de esta página se encuentra en el repositorio [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets), dentro del directorio `code_GFX2/Function/`. Cada demo es una carpeta que contiene un único sketch `.ino`. **Descarga siempre la carpeta completa** en lugar de copiar el código fuente `.ino` desde la vista web de GitHub.

**Opción A — Descargar el repositorio como ZIP (recomendado):**

1. Abre [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) y haz clic en **Code > Download ZIP**, luego extrae el archivo en cualquier lugar conveniente.
2. Navega a `code_GFX2/Function/` y abre la carpeta indicada en la línea **Code location** de cada demo. Por ejemplo, el demo GraphicTest para esta placa se encuentra en `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_graphictest/`.
3. **Haz doble clic en el archivo `.ino`** para abrirlo en el Arduino IDE.

**Opción B — git clone:**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

Luego abre el archivo `.ino` del demo desde la carpeta clonada `code_GFX2/Function/...`.

## Pantalla — GraphicTest

Este demo ejecuta un benchmark gráfico completo en el panel IPS ST7789 de 1,14 pulgadas (135×240), que incluye barras de color, líneas, rectángulos, círculos, triángulos, rectángulos redondeados, texto y un degradado de píxeles. Úsalo para verificar que la pantalla está cableada correctamente y que todas las llamadas de dibujo funcionan como se espera.

**Code location:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

El sketch inicializa el panel IPS ST7789 mediante **Seeed_GFX2**, luego recorre en secuencia diez primitivas gráficas, midiendo el tiempo de ejecución de cada una mediante `micros()` y mostrando el resultado en el monitor serie.

La pantalla se inicializa con una única llamada de plantilla:

```cpp
display.begin<Board_XIAO_1inch14_LCD<38, 37>,
              Config_Seeed_1inch14_LCD_ST7789>();
```

La plantilla **Board** posee el mapa de pines — CS=D2, DC=D3, SCK=D8, MOSI=D10 — y sus parámetros de plantilla `<RST, BL>` toman números GPIO directos, por lo que `<38, 37>` establece RST=GPIO38 y BL=GPIO37. La **Panel Config** integra la resolución 135×240, el orden de color y la inversión (`invert = true`), por lo que no se necesita `driver.h` ni una llamada manual a `invertDisplay()`.

### Ejecutar el demo

**Paso 1.** Abre `xiao_nrf52840_114_graphictest.ino` en Arduino IDE.

**Paso 2.** Selecciona **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** y el **Port** correcto.

**Paso 3.** Haz clic en **Upload**.

**Paso 4.** Abre **Tools > Serial Monitor** (115200 baudios). Deberías ver la salida de tiempos para cada prueba:

```
LCD width: 135
LCD height: 240
Color bars: 34.18 ms
Lines: 2599.61 ms
Fast lines: 57.62 ms
Rectangles: 44.92 ms
Filled rectangles: 125.98 ms
Circles: 291.02 ms
Triangles: 289.06 ms
Round rectangles: 95.70 ms
Text: 1416.02 ms
Pixel gradient: 4774.42 ms
Graphic test finished.
```

En la pantalla verás cada patrón de prueba mostrado durante aproximadamente un segundo antes de que comience el siguiente. Cuando todas las pruebas terminan, aparece una pantalla de "Finished".

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

Después de que el sketch recorra todos los patrones, la pantalla muestra un mensaje de "Finished". Reinicia la placa para ejecutar la prueba de nuevo.

---

## IMU

La pantalla IPS de 1,14'' incorpora una IMU de 6 ejes (LSM6DS3) conectada por I2C en D4/D5. La línea de interrupción de movimiento en **D14** admite activación por hardware y detección de gestos.

Ambos demos siguientes usan el LSM6DS3 en la dirección I2C **0x6A**.

<a id="imu-quicksand"></a>

### Demo 1: Arena movediza electrónica

Este demo convierte la pantalla en una simulación de fluido interactiva: partículas de arena dorada que fluyen y se asientan según la gravedad, medida por la IMU integrada de 6 ejes. Inclina la placa y la arena cambia de dirección en tiempo real.

**Code location:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

La simulación utiliza una **rejilla de ocupación de 22×40** superpuesta en la pantalla de 135×240, donde cada celda es de 6×6 píxeles. Se colocan alrededor de **150 partículas** en la rejilla, cada una con una posición, velocidad y un degradado de color dorado.

El IMU se lee vía I2C (D4/D5) usando la librería Seeed Arduino LSM6DS3 en la dirección `0x6A`. Los valores de aceleración en bruto se filtran con un filtro de paso bajo y se usan para derivar un vector de gravedad. Cuando inclinas la placa:

1. **Actualización del vector de gravedad** — los datos del acelerómetro se suavizan con una media móvil exponencial para evitar el parpadeo.
2. **Velocidad de las partículas** — cada partícula se acelera en la dirección del vector de gravedad, con amortiguamiento y un factor de movilidad por partícula basado en su profundidad en el flujo.
3. **Ocupación de celdas** — las partículas más profundas en el flujo (más cerca del "fondo" relativo a la gravedad) tienen movilidad reducida, creando un efecto de empaquetamiento realista.
4. **Renderizado diferencial** — solo se redibujan las celdas donde las partículas entraron o salieron, minimizando el tráfico SPI y manteniendo la animación fluida.

Las partículas cercanas a la superficie fluyen libremente (mayor movilidad); las partículas enterradas más profundamente se empaquetan firmemente (menor movilidad), imitando cómo se comporta la arena real.

### Ejecución de la demostración

**Paso 1.** Abre `xiao_nrf52840_114_electronic_quicksand.ino` en Arduino IDE.

**Paso 2.** Selecciona la placa y el puerto, luego haz clic en **Upload**.

**Paso 3.** Una vez cargado, la pantalla se llena con partículas doradas en la parte inferior. Inclina la placa en diferentes direcciones: la arena fluye como si fuera atraída por la gravedad.

**Paso 4.** Abre **Tools > Serial Monitor** (115200 baudios) para confirmar la inicialización:

```
=== Electronic Quicksand 1.14 ===
imu.begin=0
```

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

Las partículas de arena dorada fluyen suavemente cuando inclinas la placa. Cuando se mantiene plana, la arena se asienta en la parte inferior de la pantalla. Gira la placa 90 grados y la arena fluye hacia el nuevo "fondo" en un segundo.

---

### Demo 2: Levantar para activar

Esta demostración implementa un **sistema de suspensión/activación de pantalla** impulsado por la interrupción de movimiento integrada del IMU en **D14**. La pantalla se apaga automáticamente (retroiluminación apagada + suspensión System ON del nRF52) después de un período de inactividad configurable, y se activa al instante cuando levantas o mueves el dispositivo.

**Ubicación del código:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

La demostración utiliza el **detector de eventos de activación integrado** del LSM6DS3, una función de hardware que monitoriza internamente los datos del acelerómetro y activa el pin INT1 (enrutado a D14 en esta placa) cuando el movimiento supera un umbral configurable. Esto significa que el MCU no necesita sondear continuamente el acelerómetro.

**Configuración del IMU (LSM6DS3):**

<div class="table-center">
  <table align="center">
    <tr><th>Register</th><th>Value</th><th>Purpose</th></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>Acelerómetro @ 104 Hz, ±2g</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>Habilitar interrupciones integradas</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>Umbral de activación (sensibilidad media-baja)</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>Sin filtro de duración (activación sensible)</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>Enrutar activación a INT1</td></tr>
  </table>
</div>

**Flujo de suspensión/activación:**

1. **Estado activo** — la pantalla está encendida, la retroiluminación al máximo brillo, la interfaz de usuario se actualiza cada 250 ms con datos de IMU en tiempo real. Un temporizador de cuenta regresiva muestra los segundos restantes hasta la suspensión automática.
2. **Suspensión automática** — después del tiempo de inactividad, el sketch apaga la retroiluminación, muestra el mensaje "Sleeping... Pick up device to wake" y entra en suspensión System ON del nRF52 (modo de bajo consumo con retención de RAM). La interrupción de activación del IMU en D14 ya se configuró al inicio, por lo que la detección de movimiento permanece activa durante la suspensión.
3. **Activación** — cuando el usuario levanta la placa, el IMU detecta movimiento y pone D14 en HIGH. El nRF52840 sale de la suspensión System ON, restaura la retroiluminación y vuelve a dibujar la interfaz de usuario. La LCD y el IMU **no** se reinicializan: la suspensión System ON conserva la RAM y la configuración de los periféricos, por lo que ambos mantienen los ajustes aplicados al inicio.

**Botones de prueba manual:**

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Action</th></tr>
    <tr><td>USR1</td><td>D6</td><td>Forzar suspensión</td></tr>
    <tr><td>USR2</td><td>D7</td><td>Forzar activación</td></tr>
  </table>
</div>

### Ejecución de la demostración

**Paso 1.** Abre `xiao_nrf52840_114_wakeup.ino` en Arduino IDE, selecciona la placa y el puerto, y haz clic en **Upload**.

**Paso 2.** La pantalla muestra un panel con el estado de energía, datos de movimiento y un temporizador de cuenta regresiva. Deja la placa quieta: entrará automáticamente en suspensión después del período de inactividad.

**Paso 3.** Levanta la placa o agítala suavemente: la pantalla se activa de inmediato.

**Paso 4.** Abre **Tools > Serial Monitor** (115200 baudios) para observar las transiciones de suspensión/activación:

```
LCD: 135x240
[IMU] Seeed LSM6DS3 begin=0
[IMU] D14 wake interrupt OK
[BOOT] done. Screen should be on.
[WAKE] reason=IMU_D14 wakeCount=1 sleptMs=3568 sleepLoops=0
[SLEEP] screen off, entering System ON sleep
[SLEEP] loops=1 D14=0 awake=N
[WAKE] reason=IMU_D14 wakeCount=2 sleptMs=1378 sleepLoops=439
```

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

La pantalla muestra datos de movimiento en tiempo real mientras está activa. Después del período de inactividad en reposo, la pantalla se oscurece y el nRF52840 entra en suspensión de bajo consumo. Levanta el dispositivo y la pantalla se restaura al instante, con el contador de activaciones incrementado.

---

## Micrófono y altavoz

La pantalla IPS de 1,14'' incorpora el mismo micrófono digital PDM que la versión de 1,47", conectado a los mismos pines:

<div class="table-center">
  <table align="center">
    <tr><th>Pin</th><th>Signal</th><th>Function</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>Salida de reloj PDM hacia el micrófono</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>Entrada de datos PDM desde el micrófono</td></tr>
  </table>
</div>

### Demo 1: Barra de voz

Esta demostración visualiza la entrada de audio en tiempo real del micrófono PDM como una forma de onda dinámica al estilo ecualizador y una barra de volumen segmentada. Habla, aplaude o sopla en el micrófono integrado y observa cómo las barras reaccionan al instante.

**Ubicación del código:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_voice_bar/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_voice_bar" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### Cómo funciona

El sketch utiliza el periférico PDM del nRF52840 mediante la librería `PDM` (incluida con Seeed nRF52 Boards) a 16 kHz, canal único. La ISR (`onPDMdata`) captura muestras PDM en bruto en un búfer circular de 256 muestras y calcula la amplitud pico.

La pantalla se divide en tres zonas:

<div class="table-center">
  <table align="center">
    <tr><th>Zone</th><th>Position</th><th>Description</th></tr>
    <tr><td><strong>Waveform</strong></td><td>Top (y=30–95)</td><td>Visualizador de ecualizador de 27 barras. Las muestras en bruto se submuestrean y se dibujan como barras simétricas alrededor de una línea base central. El color de la forma de onda está determinado por el mismo volumen suavizado que la barra de volumen y la etiqueta de porcentaje: verde (&lt;50%), amarillo (50–90%), rojo (&gt;90%).</td></tr>
    <tr><td><strong>Percentage</strong></td><td>Middle</td><td>Porcentaje de volumen numérico grande (0–100%), codificado por color en verde (&lt;50%), amarillo (50–90%), rojo (&gt;90%).</td></tr>
    <tr><td><strong>Barra de volumen</strong></td><td>Parte inferior (y=130–225)</td><td>Barra de 10 segmentos (degradado verde/amarillo/rojo). Se actualiza con el volumen suavizado a partir del pico PDM.</td></tr>
  </table>
</div>

**Procesamiento de señal:**

1. **PDM ISR** — `onPDMdata()` se dispara a ~62 Hz (16000 / 256). Lee muestras en bruto, calcula la magnitud pico y realiza submuestreo en 27 bins para el visualizador de forma de onda.
2. **Normalización** — los valores de pico por debajo de 10 se tratan como silencio. Los valores por encima de 1500 se saturan al 100%. Entre ambos, un mapeo lineal produce un nivel de volumen de 0.0–1.0.
3. **Suavizado exponencial** — el volumen mostrado se suaviza con un factor de mezcla del 20% (`SMOOTH = 0.20`) para evitar parpadeos. Durante el silencio, el volumen decae un 6% por fotograma.
4. **Renderizado diferencial** — la barra de volumen y la etiqueta de porcentaje solo se redibujan cuando el valor cambia, minimizando el tráfico SPI.

#### Ejecutar la demostración

**Paso 1.** Abre `xiao_nrf52840_114_voice_bar.ino` en Arduino IDE.

**Paso 2.** Selecciona **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** y el **Port** correcto.

**Paso 3.** Haz clic en **Upload**.

**Paso 4.** Abre **Tools > Serial Monitor** (115200 baudios). Deberías ver:

```
[MIC] ready
```

**Paso 5.** Habla, aplaude o sopla en el micrófono. La forma de onda y la barra de volumen responden en tiempo real. La etiqueta de porcentaje cambia de color a medida que aumenta el volumen.

#### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_voice_bar.gif" style={{width:500, height:'auto'}}/></div>

En silencio, la forma de onda es plana y la barra de volumen está vacía (0%). Habla en el micrófono y las barras del ecualizador se animan mientras la barra de volumen se llena de verde a amarillo y luego a rojo. La etiqueta de porcentaje se actualiza en tiempo real.

### Demo 2: Grabadora en Flash con reproducción I2S

Esta demostración graba un breve clip de audio desde el micrófono PDM integrado en el **sistema de archivos Flash interno** del nRF52840 y luego lo reproduce a través de un amplificador I2S externo y un altavoz:

- **USR1** graba desde el micrófono PDM integrado.
- La grabación es de **16 kHz, 16 bits, mono**.
- Cada clip dura aproximadamente **0,7 segundos** — 11.200 muestras (22.400 bytes de PCM).
- El clip se guarda como **`/REC_RAW.WAV`** en el sistema de archivos Flash interno.
- **USR2** reproduce la grabación a través de un **MAX98357A** externo y un altavoz.
- Esta demostración ha sido compilada, flasheada y verificada a nivel de hardware en la XIAO nRF52840 Plus con **Seeed nRF52 Boards 1.1.13**.

**Ubicación del código:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_flash_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_flash_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### Configuración de hardware

La reproducción requiere un **amplificador de audio I2S externo y un altavoz**. La demostración está escrita para una placa **MAX98357A** conectada a las almohadillas de salida I2S de la placa:

<div class="table-center">
  <table align="center">
    <tr><th>Placa de pantalla</th><th>MAX98357A</th></tr>
    <tr><td>3V3</td><td>VIN</td></tr>
    <tr><td>GND</td><td>GND</td></tr>
    <tr><td>D11 / I2S_SD</td><td>DIN</td></tr>
    <tr><td>D12 / I2S_SCK</td><td>BCLK</td></tr>
    <tr><td>D13 / I2S_WS</td><td>LRC / WS</td></tr>
  </table>
</div>

Conecta el altavoz a los terminales **SPK+** y **SPK-** del MAX98357A. **No** conectes un cable del altavoz a GND — el MAX98357A es un amplificador de carga en puente (BTL), por lo que ambos terminales del altavoz deben ir a las salidas SPK.

:::caution
Desconecta la alimentación por USB antes de cablear el amplificador y el altavoz.
:::

#### Cómo funciona

- El micrófono PDM usa **D0 (CLK)** y **D1 (DATA)**.
- La biblioteca `PDM` captura el micrófono a **16 kHz mono**.
- El archivo WAV consta de una **cabecera de 44 bytes** más **22.400 bytes de datos PCM**.
- El sistema de archivos Flash interno (InternalFS) es de solo **28 KB**, lo que limita cada grabación a aproximadamente **0,7 segundos**.
- La reproducción utiliza el **periférico de hardware I2S** del nRF52840 en formato Philips I2S, salida **16 bits, estéreo**.
- Las muestras mono se duplican en ambos canales, izquierdo y derecho.
- Los pines I2S son **D11**, **D12** y **D13**.

#### Ejecutar el tutorial

**Paso 1.** Desconecta la alimentación por USB y cablea el MAX98357A y el altavoz como se muestra arriba.

**Paso 2.** Abre `xiao_nrf52840_114_flash_record.ino` en el Arduino IDE.

**Paso 3.** Selecciona **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** y el **Port** correcto.

**Paso 4.** Compila y sube el sketch.

**Paso 5.** Pulsa **USR1** e inmediatamente habla en el micrófono integrado durante unos **0,7 segundos**.

:::tip
La grabación comienza en el momento en que pulsas **USR1** — no esperes a que aparezca la barra de progreso roja. La ventana de 0,7 segundos se cuenta desde el momento en que se pulsa **USR1**, así que habla de inmediato o perderás el inicio de tu clip.
:::

**Paso 6.** Espera a que la pantalla muestre **Saved WAV**.

**Paso 7.** Pulsa **USR2** y el altavoz reproducirá tu grabación.

#### Resultado esperado

- Al arrancar, la pantalla muestra **Flash Recorder**.
- Cuando no existe ninguna grabación, la pantalla muestra **No recording**.
- Mientras se graba, la pantalla muestra un indicador de progreso.
- Cuando se completa el guardado, la pantalla muestra **Saved WAV**.
- Pulsa **USR2** y oirás la grabación a través del altavoz.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_flash_record_i2s.gif" style={{width:500, height:'auto'}}/></div>

---

## Grove I2C

La pantalla IPS de 1,14'' incorpora un **conector Grove I2C** dedicado que expone D4 (SDA) y D5 (SCL) en un conector Grove estándar de 4 pines (GND / 3V3 / SDA / SCL). A diferencia de la versión de 1,47", donde D4/D5 se comparten además con el controlador táctil, la pantalla de 1,14" solo comparte D4/D5 con el IMU integrado (no tiene controlador táctil).

<div class="table-center">
  <table align="center">
    <tr><th>Pin Grove</th><th>Pin XIAO</th><th>Notas</th></tr>
    <tr><td>GND</td><td>GND</td><td>Tierra común</td></tr>
    <tr><td>3V3</td><td>3V3</td><td>Salida de alimentación de 3,3 V</td></tr>
    <tr><td>SDA</td><td>D4</td><td>Datos I2C — compartido con el IMU integrado</td></tr>
    <tr><td>SCL</td><td>D5</td><td>Reloj I2C — compartido con el IMU integrado</td></tr>
  </table>
</div>

:::note
D4/D5 se comparten entre el conector Grove y el IMU integrado. El IMU está en la dirección `0x6A`. Al conectar un dispositivo I2C externo, asegúrate de que no entre en conflicto con esta dirección.
:::

### Demo: Temperatura y humedad SHT31

Esta demostración lee la temperatura y la humedad de un sensor **Grove SHT31** conectado al conector Grove I2C y muestra las lecturas en la pantalla. El sketch se comunica con el sensor directamente por I2C con `Wire.h` — no se necesita ninguna biblioteca SHT31 — y valida cada lectura con el CRC del sensor.

**Ubicación del código:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_sht31_temperature_humidity/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_sht31_temperature_humidity" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### Configuración de hardware

Conecta un sensor de temperatura y humedad **Grove SHT31** al conector Grove I2C. El sensor se alimenta a 3,3 V y se comunica en la dirección I2C `0x44`:

<div class="table-center">
  <table align="center">
    <tr><th>Pin Grove</th><th>Pin XIAO</th><th>SHT31</th></tr>
    <tr><td>GND</td><td>GND</td><td>GND</td></tr>
    <tr><td>3V3</td><td>3V3</td><td>VCC</td></tr>
    <tr><td>SDA</td><td>D4</td><td>SDA</td></tr>
    <tr><td>SCL</td><td>D5</td><td>SCL</td></tr>
  </table>
</div>

#### Cómo funciona

El sketch lee el SHT31 directamente por I2C (`Wire`) en la dirección `0x44`:

1. **Escaneo I2C** — al arrancar escanea el bus I2C e informa de cada dispositivo encontrado.
2. **Medición de disparo único** — envía un comando de disparo único de alta repetibilidad (`0x24 0x00`, sin estiramiento de reloj), espera 20 ms y luego lee 6 bytes: temperatura alto/bajo + CRC, humedad alto/bajo + CRC.
3. **Comprobación de CRC** — cada valor de 16 bits se verifica frente a su byte CRC; una discrepancia se informa como un error (cableado o un módulo dañado/ruidoso).
4. **Conversión** — los valores en bruto se convierten a temperatura (`-45 + 175 × raw / 65535` °C) y humedad relativa (`100 × raw / 65535` %).

La pantalla se inicializa con `Board_XIAO_1inch14_LCD<38, 37>` y una `Config_XIAO_1inch14_LCD_ST7789_BGR` local del sketch (135×240, orden de color BGR, invertida) para que los colores se muestren correctamente. La pantalla muestra "SHT31 OK" con la temperatura y la humedad en tiempo real, o "SHT31 ERROR" más un código de error si falla una lectura.

#### Ejecutar la demostración

**Paso 1.** Abre `xiao_nrf52840_114_sht31_temperature_humidity.ino` en Arduino IDE.

**Paso 2.** Selecciona **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** y el **Port** correcto, luego haz clic en **Upload**.

**Paso 3.** Abre **Tools > Serial Monitor** (115200 baudios). Deberías ver:

```
=== XIAO nRF52840 1.14 SHT31 Temperature/Humidity ===
[PIN] SDA=D4 SCL=D5 address=0x44
[I2C] scan start
[I2C] found 0x44
[I2C] scan done
[SHT31] OK T=26.81 C H=48.32 %
```

La pantalla muestra "SHT31 OK" con la temperatura y la humedad, actualizándose una vez por segundo. Si el sensor se desconecta o la comprobación CRC falla, la pantalla muestra "SHT31 ERROR" con un código de error.

#### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_sht31.gif" style={{width:500, height:'auto'}}/></div>

La temperatura y la humedad se actualizan una vez por segundo en la pantalla. Sopla sobre el sensor y la lectura de humedad aumentará.

---

## Botones de usuario

La pantalla IPS de 1,14'' tiene **tres botones físicos pulsadores** conectados al XIAO nRF52840 Plus. Los tres botones tienen **resistencias pull-up externas de 1 KΩ** en la placa, por lo que puedes configurar los pines correspondientes como `INPUT` (no se necesita pull-up interno):

<div class="table-center">
  <table align="center">
    <tr><th>Botón</th><th>Pin</th><th>Lógica</th><th>Etiqueta serigrafiada</th><th>Pad de breakout</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>Activo en bajo (pulsado = LOW)</td><td>USR1</td><td>U1</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>Activo en bajo (pulsado = LOW)</td><td>USR2</td><td>U2</td></tr>
    <tr><td><strong>USR3</strong></td><td>D19</td><td>Activo en bajo (pulsado = LOW)</td><td>USR3</td><td>U3</td></tr>
  </table>
</div>

### Lectura de los botones

Con el pull-up externo de 1 KΩ ya en la placa, puedes leer los botones con una simple lectura directa:

```cpp
const int USR1 = D6;
const int USR2 = D7;
const int USR3 = D19;

void setup() {
  // External 1K pull-up on the board — no internal pull-up needed.
  pinMode(USR1, INPUT);
  pinMode(USR2, INPUT);
  pinMode(USR3, INPUT);
  Serial.begin(115200);
}

void loop() {
  if (digitalRead(USR1) == LOW) {
    Serial.println("USR1 (D6) pressed");
    delay(200); // simple debounce
  }
  if (digitalRead(USR2) == LOW) {
    Serial.println("USR2 (D7) pressed");
    delay(200);
  }
  if (digitalRead(USR3) == LOW) {
    Serial.println("USR3 (D19) pressed");
    delay(200);
  }
}
```

### Antirrebote con interrupciones

Para un manejo de botones con antirrebote y respuesta rápida sin bloquear el bucle principal, puedes usar interrupciones por cambio de pin:

```cpp
volatile bool btn1Flag = false;
volatile bool btn2Flag = false;
volatile bool btn3Flag = false;

void btn1Isr() { btn1Flag = true; }
void btn2Isr() { btn2Flag = true; }
void btn3Isr() { btn3Flag = true; }

void setup() {
  pinMode(D6, INPUT);
  pinMode(D7, INPUT);
  pinMode(D19, INPUT);
  attachInterrupt(digitalPinToInterrupt(D6), btn1Isr, FALLING);
  attachInterrupt(digitalPinToInterrupt(D7), btn2Isr, FALLING);
  attachInterrupt(digitalPinToInterrupt(D19), btn3Isr, FALLING);
}

void loop() {
  if (btn1Flag) {
    btn1Flag = false;
    delay(30); // debounce settling time
    if (digitalRead(D6) == LOW) {
      // handle USR1 press
    }
  }
  if (btn2Flag) {
    btn2Flag = false;
    delay(30);
    if (digitalRead(D7) == LOW) {
      // handle USR2 press
    }
  }
  if (btn3Flag) {
    btn3Flag = false;
    delay(30);
    if (digitalRead(D19) == LOW) {
      // handle USR3 press
    }
  }
}
```

### Comportamiento predeterminado en el Dashboard de fábrica

En el firmware de fábrica precargado, los botones se asignan de la siguiente manera (puedes sobrescribirlos en tu propio código):

<div class="table-center">
  <table align="center">
    <tr><th>Botón</th><th>Pin</th><th>Acción</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>Cambiar el brillo de la pantalla (100% → 75% → 50% → 25% → 100%)</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>Apagar la pantalla / restaurar al último brillo</td></tr>
    <tr><td><strong>USR3</strong></td><td>D19</td><td>Alternar el título de cabecera entre "Hello,XIAO!" y "Seeed"</td></tr>
  </table>
</div>

Los pads de breakout de los botones (etiquetados como U1, U2 y U3 en la placa) reflejan D6, D7 y D19 respectivamente, lo que te permite conectar botones externos si lo deseas.

---

## Estado de la batería

Esta demostración muestra el estado de la batería — un icono de batería con nivel de carga y estado de carga — en la pantalla IPS de 1,14''. Detecta si una batería LiPo está físicamente conectada y muestra uno de tres estados: **USB PWR** (sin batería), **percentage** (solo batería) o **charging** (USB + batería).

La pantalla IPS de 1,14'' incluye un circuito integrado de medición de voltaje de batería conectado al XIAO nRF52840 Plus.

**Ubicación del código:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver en GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

**Pantalla:**

La pantalla es controlada por **Seeed_GFX2** con `Board_XIAO_1inch14_LCD<38, 37>` y una anulación BGR de `Config_Seeed_1inch14_LCD_ST7789` (135×240, BGR, rotación 2) sobre SPI por hardware a 10 MHz.

**Circuito de batería:**

El nRF52840 Plus usa **tres pines GPIO** para formar un sistema completo de monitorización de batería:

<div class="table-center">
  <table align="center">
    <tr><th>Señal</th><th>Pin nRF52840</th><th>Función</th></tr>
    <tr><td><code>READ_BAT</code></td><td><strong>P0.14</strong></td><td>Habilitación del divisor de voltaje de batería. Activo en bajo — ponlo en LOW para habilitar el divisor, luego suéltalo a HIGH (alta impedancia) para ahorrar energía.</td></tr>
    <tr><td><code>VBAT_ADC</code></td><td><strong>PIN_VBAT</strong> (AIN7 / P0.31)</td><td>Entrada analógica que lee el voltaje de batería dividido.</td></tr>
    <tr><td><code>CHG</code></td><td><strong>P0.17</strong></td><td>Indicador de estado de carga. Activo en bajo — lee LOW cuando un cargador está conectado y la batería se está cargando.</td></tr>
  </table>
</div>

**Detección:**

Con USB-C, un voltaje VBAT estático no puede indicar si hay una batería presente — el nodo BAT del cargador puede parecer una celda Li-ion real incluso sin batería conectada. Por ello, la demostración primero aprende una **línea base solo USB**, luego confirma la inserción de la batería solo después de un desplazamiento sostenido hacia abajo de VBAT, y confirma la extracción tras una lectura ruidosa/saltada combinada con `~CHG` pasando a HIGH. Esto refleja la lógica de detección del Dashboard de fábrica.

**Estados del icono:**

- **Sin batería** — icono de batería con contorno gris y una cruz roja, etiquetado como **USB PWR**.
- **Batería presente** — icono de batería con contorno blanco y relleno de color (verde / amarillo / rojo según el porcentaje), etiquetado con el **porcentaje** y el **voltaje**.
- **Cargando** — relleno cian con un icono de rayo, etiquetado con el porcentaje y el voltaje.

:::note
El pin `~CHG` se lee a través de los **registros GPIO en bruto** del nRF52840 (`nrf_gpio_cfg_input()` y `NRF_P0->IN`) en lugar de `digitalRead()`. En la API de Arduino, los números de pin siguen el mapeo del paquete de la placa, donde `digitalRead(17)` en realidad lee **P0.07** (la línea de datos I2C del IMU de 6 ejes) en lugar de P0.17. Las constantes `14` y `17` aquí son **números de pin P0.x en bruto de Nordic** (P0.14 y P0.17), que es exactamente lo que esperan las llamadas a los registros.
:::

:::note
La demostración usa la resistencia de lado bajo **499 kΩ** calibrada de fábrica (relación del divisor ≈ 3,004), no el valor nominal de 510 kΩ. El divisor está integrado en el propio módulo XIAO nRF52840 Plus, no en la placa de la pantalla. El pin de habilitación P0.14 es **activo en bajo**: ponlo en LOW para habilitar el divisor, luego suéltalo a alta impedancia (INPUT) para minimizar la corriente de reposo cuando la batería no se está midiendo.
:::

### Ejecutar la demostración

**Paso 1.** Abre `xiao_nrf52840_114_battery_status.ino` en Arduino IDE.

**Paso 2.** Selecciona **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** y el **Port** correcto.

**Paso 3.** Haz clic en **Upload**.

**Paso 4.** Observa la pantalla — muestra el icono de batería con el estado actual. Conecta o desconecta una batería LiPo (o el cable USB-C) para ver cómo el icono cambia entre los tres estados.

### Resultado esperado

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_battery_status_state1.jpg" style={{width:300, height:'auto'}}/><br/><strong>USB PWR</strong> (sin batería)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_battery_status_state2.jpg" style={{width:300, height:'auto'}}/><br/><strong>Percentage</strong> (solo batería)</div></td>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_battery_status_state3.jpg" style={{width:300, height:'auto'}}/><br/><strong>Charging</strong> (USB + batería)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Conector de batería</strong> (parte trasera)</div></td>
    </tr>
  </table>
</div>

Sin una batería, la pantalla muestra una batería gris con una cruz roja y la etiqueta **USB PWR**. Inserta una batería LiPo y el icono cambia a un relleno de color con el porcentaje y el voltaje. Conecta USB-C mientras haya una batería presente y el relleno se vuelve cian con un rayo, lo que indica que se está cargando.

La demo también imprime una línea de diagnóstico en el Monitor Serie cada 500 ms, por ejemplo:

```
VBAT 3.87V  charging  85  spread=5  usb=ON  base=4.140  baseValid=Y  state=PRESENT  filter=STABLE  removeCount=0
```
---

## Recursos

- **🗃️[Archivos de diseño de PCB]** [XIAO 1.14'' IPS Display (nRF52840) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.14%27%27%20IPS%20Display%20%28nRF52840%29%20KiCad%20Project.zip)
- **📄[Esquemático]** [XIAO 1.14'' IPS Display (nRF52840) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.14%27%27%20IPS%20Display%20%28nRF52840%29%20Schematic.pdf)
- **📦[Modelo 3D]** [XIAO 1.14'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.14%27%27%20IPS%20Display.step)
- **📄[Hoja de datos]** [1.14 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.14%20Inch%20Display%20Datasheet.pdf)
- **💾[Firmware de fábrica]** [XIAO 1.14'' IPS Display (nRF52840) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.14%27%27%20IPS%20Display%20%28nRF52840%29%20Factory%20Firmware.uf2)
- **[Demo]** [Código de demostración de la placa XIAO Display](https://github.com/Seeed-Projects/Display-Gadgets) — todas las demos de funciones están en el directorio `code_GFX2/Function/114_nRF52840/`

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

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
