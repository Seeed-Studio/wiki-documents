---
description: Demos independientes a nivel de función para cada periférico integrado de la XIAO 0.96'' IPS Display (nRF52840). Cubre pantalla, IMU, micrófono PDM, grabación en Flash interna y reproducción de audio I2S, botones y batería.
title: Uso de periféricos integrados
sidebar_label: Función
keywords:
  - XIAO
  - nRF52840
  - Display
  - LCD
  - Function
  - 0.96
  - I2S
  - Audio
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /function_0.96_inch_display_nrf52840
sku: 100063377
sidebar_position: 2
last_update:
  date: 08/25/2026
  author: FaiyuetCik
createdAt: '2026-08-13'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/es/function_0.96_inch_display_nrf52840/
---

# Uso de periféricos integrados

Esta página recopila demos independientes a nivel de función para cada periférico integrado de la pantalla IPS de 0,96''. Cada sección es autónoma: puedes elegir la que coincida con tu caso de uso sin tener que leer las demás.

:::tip
Los GIF de demostración de esta página están acelerados para mantenerlos cortos.
:::

:::note
Todos los demos de esta página requieren **Seeed nRF52 Boards (1.1.13)** como se describe en [Getting Started](/es/getting_started_0.96_inch_display_nrf52840), además de la biblioteca **Seeed_GFX2** instalada manualmente como se describe a continuación.
:::

- **Library Manager** — ve a **Sketch > Include Library > Manage Libraries...**, busca e instala:

<div class="table-center">
  <table align="center">
    <tr><th>Library</th><th>Search Keyword</th><th>Author</th><th>Required by</th></tr>
    <tr><td><strong>Seeed Arduino LSM6DS3</strong></td><td><code>Seeed Arduino LSM6DS3</code></td><td>Seeed Studio</td><td>Quicksand, Wake</td></tr>
  </table>
</div>

- **Seeed_GFX2 (Manual Installation)** — esta biblioteca no está disponible en Library Manager y debe instalarse manualmente:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Paso 1.** Haz clic en el botón de arriba para descargar `Seeed_GFX2` v1.0.0 como un archivo ZIP (anclado a una etiqueta de versión para que el tutorial siga siendo reproducible). Alternativamente, clona el repositorio desde [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2).

**Paso 2.** En el Arduino IDE, ve a **Sketch > Include Library > Add .ZIP Library...** y selecciona el ZIP descargado. El IDE lee `library.properties` y lo instala automáticamente en la carpeta `Seeed_GFX2` correcta; no necesitas cambiar el nombre de la carpeta extraída. (Para instalar manualmente en su lugar, descomprime el archivo y cambia el nombre de la carpeta extraída a `Seeed_GFX2` antes de colocarla en `Documents/Arduino/libraries/`).

**Paso 3.** Reinicia el Arduino IDE para que se detecte la nueva biblioteca.

:::tip
- **Seeed_GFX2** es la biblioteca gráfica de Seeed Studio construida sobre una arquitectura en capas `Board` + `Panel Config`. Cada demo inicializa la pantalla con una única llamada `display.begin<Board_XIAO_0inch96_LCD<38, 37>, Config_Seeed_0inch96_LCD_ST7789>()`: el template **Board** posee el mapa de pines (CS/DC/SCK/MOSI/RST/BL), y la **Panel Config** integra la resolución 80×160, el orden de color BGR y la rotación 2. Seeed_GFX2 controla este panel con un SPI por hardware conservador de 10 MHz, lo que evita el problema de margen de señal que requería SPI por software en demos anteriores.
- La pantalla IPS de 0,96'' **no tiene controlador táctil ni ranura para tarjeta SD**, por lo que no se necesitan bibliotecas de touch ni SD.
:::

## Obtener el código de demostración

Cada demo de esta página se encuentra en el repositorio [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets), en el directorio `code_GFX2/Function/`. Cada demo es una carpeta que contiene un único sketch `.ino`. **Descarga siempre la carpeta completa** en lugar de copiar el código fuente `.ino` desde la vista web de GitHub.

**Opción A — Descargar el repositorio como ZIP (recomendado):**

1. Abre [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) y haz clic en **Code > Download ZIP**, luego extrae el archivo en cualquier lugar conveniente.
2. Navega a `code_GFX2/Function/` y abre la carpeta indicada en la línea **Code location** de cada demo. Por ejemplo, el demo GraphicTest para esta placa se encuentra en `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_graphictest/`.
3. **Haz doble clic en el archivo `.ino`** para abrirlo en el Arduino IDE.

**Opción B — git clone:**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

Luego abre el archivo `.ino` del demo desde la carpeta clonada `code_GFX2/Function/...`.

## Pantalla — GraphicTest

Este demo ejecuta un benchmark gráfico completo en el panel IPS ST7789 de 0,96 pulgadas (80×160), que cubre barras de color, líneas, rectángulos, círculos, triángulos, rectángulos redondeados, texto y un degradado de píxeles. Úsalo para verificar que la pantalla está cableada correctamente y que todas las llamadas de dibujo funcionan como se espera.

**Code location:** `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

El sketch inicializa el panel IPS ST7789 mediante **Seeed_GFX2**, luego recorre en secuencia diez primitivas gráficas, midiendo el tiempo de ejecución de cada una mediante `micros()` e imprimiendo el resultado en el monitor serie.

La pantalla se inicializa con una única llamada de template:

```cpp
display.begin<Board_XIAO_0inch96_LCD<38, 37>,
              Config_Seeed_0inch96_LCD_ST7789>();
```

El template **Board** posee el mapa de pines — CS=D2, DC=D3, SCK=D8, MOSI=D10 — y sus parámetros de template `<RST, BL>` toman números GPIO directos, por lo que `<38, 37>` establece RST=GPIO38 y BL=GPIO37. La **Panel Config** integra la resolución 80×160, el orden de color BGR y la rotación 2 — no se necesita `driver.h` ni una llamada manual a `invertDisplay()`. Seeed_GFX2 controla el panel con un SPI por hardware conservador de 10 MHz, evitando el problema de margen de señal que obligaba a usar SPI por software en demos anteriores.

:::note
**Orden de color (panel BGR).** Este panel de 0,96 pulgadas intercambia físicamente los canales rojo y azul. El demo asigna alias a los colores en consecuencia (por ejemplo, un rojo a nivel de señal `0xF800` aparece azul en pantalla). Si escribes tu propio código de dibujo, usa los alias de color del demo o ten en cuenta el orden BGR; de lo contrario, los rojos y azules aparecerán intercambiados.
:::

### Ejecución del demo

**Paso 1.** Abre `xiao_nrf52840_096_graphictest.ino` en Arduino IDE.

**Paso 2.** Selecciona **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** y el **Port** correcto.

**Paso 3.** Haz clic en **Upload**.

**Paso 4.** Abre **Tools > Serial Monitor** (115200 baudios). Deberías ver la salida de tiempos para cada prueba:

```
=== XIAO nRF52840 Plus 0.96 graphic test ===
LCD: 80x160
Color bars: 13.67 ms
Lines: 1712.89 ms
Fast lines: 25.39 ms
Rectangles: 23.44 ms
Filled rects: 47.85 ms
Circles: 207.03 ms
Triangles: 166.99 ms
Round rects: 48.83 ms
Text: 539.06 ms
Pixel gradient: 1907.23 ms
Graphic test finished.
```

En la pantalla, verás cada patrón de prueba mostrado durante aproximadamente un segundo antes de que comience el siguiente. Cuando todas las pruebas finalicen, aparecerá una pantalla con el mensaje "Done! All tests OK".

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

Después de que el sketch recorra todos los patrones, la pantalla muestra un mensaje "Done!". Reinicia la placa para ejecutar la prueba de nuevo.

---

## IMU

La pantalla IPS de 0,96'' incorpora una IMU de 6 ejes (**LSM6DS3**) conectada mediante I2C en D4/D5. La línea de interrupción de movimiento en **D14** admite activación por hardware y detección de gestos.

Ambos demos siguientes usan el LSM6DS3 en la dirección I2C **0x6A**.

<a id="imu-quicksand"></a>

### Demo 1: Arena movediza electrónica

Este demo convierte la pantalla en una simulación de fluido interactiva: partículas de arena dorada que fluyen y se asientan según la gravedad, medida por la IMU integrada de 6 ejes. Inclina la placa y la arena cambia de dirección en tiempo real.

**Code location:** `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

La simulación utiliza una **rejilla de ocupación de 13×26** superpuesta sobre la pantalla de 80×160, donde cada celda es de 6×6 píxeles. Se colocan alrededor de **65 partículas** en la rejilla, cada una con una posición, velocidad y un degradado de color dorado.

El IMU se lee vía I2C (D4/D5) usando la librería Seeed Arduino LSM6DS3 en la dirección `0x6A`. Los valores de aceleración en bruto se filtran con un filtro de paso bajo y se usan para derivar un vector de gravedad. Cuando inclinas la placa:

1. **Actualización del vector de gravedad**: los datos del acelerómetro se suavizan con una media móvil exponencial para evitar el parpadeo.
2. **Velocidad de las partículas**: cada partícula se acelera en la dirección del vector de gravedad, con amortiguamiento y un factor de movilidad por partícula basado en su profundidad en el flujo.
3. **Ocupación de celdas**: las partículas más profundas en el flujo (más cerca del "fondo" relativo a la gravedad) tienen movilidad reducida, creando un efecto de empaquetamiento realista.
4. **Renderizado diferencial**: solo se redibujan las celdas en las que las partículas entraron o salieron, minimizando el tráfico SPI y manteniendo la animación fluida en el pequeño panel.

Las partículas cercanas a la superficie fluyen libremente (mayor movilidad); las partículas enterradas más profundamente se empaquetan firmemente (menor movilidad), imitando cómo se comporta la arena real.

### Ejecución de la demo

**Paso 1.** Abre `xiao_nrf52840_096_electronic_quicksand.ino` en Arduino IDE.

**Paso 2.** Selecciona la placa y el puerto, luego haz clic en **Upload**.

**Paso 3.** Una vez subido, la pantalla se llena de partículas doradas en la parte inferior. Inclina la placa en diferentes direcciones: la arena fluye como si fuera atraída por la gravedad.

**Paso 4.** Abre **Tools > Serial Monitor** (115200 baudios) para confirmar la inicialización:

```
LCD w=80 h=160
=== Electronic Quicksand 0.96 ===
imu.begin=0
```

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

Las partículas de arena dorada fluyen suavemente cuando inclinas la placa. Cuando se mantiene plana, la arena se asienta en la parte inferior de la pantalla. Gira la placa 90 grados y la arena fluye hacia el nuevo "fondo" en un segundo.

---

### Demo 2: Levantar para activar

Esta demo implementa un **sistema de suspensión/activación de pantalla** impulsado por la interrupción de movimiento integrada del IMU en **D14**. La pantalla se apaga automáticamente (retroiluminación apagada + suspensión System ON del nRF52) después de un período de inactividad configurable, y se activa al instante cuando levantas o mueves el dispositivo.

**Ubicación del código:** `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver en GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

La demo utiliza el **detector de eventos de activación integrado** del LSM6DS3, una función de hardware que monitoriza internamente los datos del acelerómetro y activa el pin INT1 (enrutado a D14 en esta placa) cuando el movimiento supera un umbral configurable. Esto significa que el MCU no necesita sondear continuamente el acelerómetro.

**Configuración del IMU (LSM6DS3):**

<div class="table-center">
  <table align="center">
    <tr><th>Registro</th><th>Valor</th><th>Propósito</th></tr>
    <tr><td><code>CTRL3_C</code></td><td><code>0x44</code></td><td>Actualización de datos bloqueada (BDU) + auto-incremento</td></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>Acelerómetro @ 104 Hz, ±2g</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>Habilitar interrupciones integradas</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>Umbral de activación (sensibilidad media-baja)</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>Sin filtro de duración (activación sensible)</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>Enrutar activación a INT1</td></tr>
  </table>
</div>

**Flujo de suspensión/activación:**

1. **Estado activo**: la pantalla está encendida, la retroiluminación al máximo brillo, la interfaz de usuario se actualiza cada 250 ms con datos de IMU en tiempo real.
2. **Suspensión automática**: después de 8 segundos de inactividad, el sketch apaga la retroiluminación, muestra un mensaje "Sleep — Move to wake" y entra en suspensión System ON del nRF52 (modo de bajo consumo con retención de RAM). La interrupción de activación del IMU en D14 ya se configuró al inicio, por lo que la detección de movimiento permanece activa durante la suspensión.
3. **Activación**: cuando el usuario levanta la placa, el IMU detecta movimiento y pone D14 en HIGH. El nRF52840 sale de la suspensión System ON, vuelve a encender la retroiluminación y redibuja la interfaz de usuario; el LCD y el IMU mantienen su estado porque la suspensión System ON conserva la RAM.

**Botones de prueba manual:**

<div class="table-center">
  <table align="center">
    <tr><th>Botón</th><th>Pin</th><th>Acción</th></tr>
    <tr><td>USR1</td><td>D6</td><td>Forzar suspensión</td></tr>
    <tr><td>USR2</td><td>D7</td><td>Forzar activación</td></tr>
  </table>
</div>

### Ejecución de la demo

**Paso 1.** Abre `xiao_nrf52840_096_wakeup.ino` en Arduino IDE, selecciona la placa y el puerto, y haz clic en **Upload**.

**Paso 2.** La pantalla muestra un panel compacto con el estado de energía, datos de movimiento y una cuenta regresiva. Deja la placa quieta: entrará automáticamente en suspensión después de 8 segundos.

**Paso 3.** Levanta la placa o agítala suavemente: la pantalla se activa inmediatamente.

**Paso 4.** Abre **Tools > Serial Monitor** (115200 baudios) para observar el arranque y las transiciones de suspensión/activación:

```
=== XIAO nRF52840 Plus 0.96 IMU Wake Demo ===
[LCD] OK 0.96 ST7789 80x160
[IMU] LSM6DS3 begin=0
[IMU] CTRL1_XL    = 0x40
[IMU] TAP_CFG     = 0x80
[IMU] MD1_CFG     = 0x20
[IMU] WAKE_UP_THS = 0x05
[IMU] D14 wake interrupt OK
[IMU] D14 pin state = 0
[BOOT] done. Screen should be on.
[SLEEP] screen off, entering System ON sleep
[SLEEP] loops=1 D14=0 awake=N
[SLEEP] loops=1025 D14=0 awake=N
[WAKE] D14 pin HIGH (polled)
[WAKE] src=0xA
[WAKE] reason=IMU_D14 wakeCount=8 sleptMs=4142 sleepLoops=1936 wakeSrc=0xA
[WAKE] src=0x0
```

Los campos `sleptMs`, `sleepLoops` y `wakeSrc` varían dependiendo de cuánto tiempo durmió la placa y qué gesto desencadenó la activación.

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

La pantalla muestra datos de movimiento en tiempo real mientras está activa. Después de 8 segundos de quietud, la pantalla se oscurece y el nRF52840 entra en suspensión de bajo consumo. Levanta el dispositivo y la pantalla se restaura al instante, con el contador de activaciones incrementado.

---

## Micrófono y altavoz — Grabadora en flash

Esta demo convierte la pantalla IPS de 0,96'' en una pequeña grabadora de voz. Pulsa USR1 para capturar un clip corto desde el micrófono PDM integrado hacia el sistema de archivos flash interno del nRF52840, luego pulsa USR2 para reproducirlo a través de un amplificador I2S externo.

El micrófono PDM de la pantalla IPS de 0,96'' se conecta a los mismos pines que las otras placas de pantalla XIAO:

<div class="table-center">
  <table align="center">
    <tr><th>Pin</th><th>Señal</th><th>Función</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>Salida de reloj PDM hacia el micrófono</td></tr>
    <tr><td>D1</td><td>PDM_DATA</td><td>Entrada de datos PDM desde el micrófono</td></tr>
  </table>
</div>

**Ubicación del código:** `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_flash_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_flash_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver en GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Configuración de hardware

El lado de reproducción necesita un amplificador I2S externo. La demo está escrita para la placa **MAX98357A**, conectada a los pads de prueba I2S de la pantalla IPS de 0,96'':

<div class="table-center">
  <table align="center">
    <tr><th>Pin XIAO</th><th>Señal I2S</th><th>MAX98357A</th></tr>
    <tr><td>3V3</td><td>Alimentación</td><td>VIN</td></tr>
    <tr><td>GND</td><td>Tierra</td><td>GND</td></tr>
    <tr><td>D11</td><td>I2S_SD (data out)</td><td>DIN</td></tr>
    <tr><td>D12</td><td>I2S_SCK (bit clock)</td><td>BCLK</td></tr>
    <tr><td>D13</td><td>I2S_WS (word select)</td><td>LRC</td></tr>
  </table>
</div>

:::caution
Desconecta la alimentación USB antes de cablear el amplificador y el altavoz. Conecta el altavoz a los terminales **SPK+** y **SPK-** del MAX98357A; **no** conectes ninguno de los cables del altavoz a GND.
:::

:::note
La pantalla IPS de 0,96'' **no** tiene ranura para tarjeta SD, por lo que esta demo graba en el **sistema de archivos flash interno** (InternalFS) del nRF52840. InternalFS es de aproximadamente **28 KB**: el tutorial graba 11.200 muestras mono a 16 kHz, produciendo unos 22 KB de audio PCM y una duración de grabación de aproximadamente 0,7 segundos.
:::

### Cómo funciona

**Pantalla:**

La pantalla es controlada por **Seeed_GFX2** con `Board_XIAO_0inch96_LCD<38, 37>` y `Config_Seeed_0inch96_LCD_ST7789` (80×160, BGR, rotación 2) mediante SPI por hardware a 10 MHz.

**Grabación (USR1):**

1. El sketch inicia el periférico PDM a **16 kHz, canal único** y captura muestras en bruto en un búfer de 11.200 muestras (≈ 0,7 s, ≈ 22 KB de PCM) a través de una ISR (`onPdmData`).
2. Una pantalla de progreso muestra el porcentaje de grabación y el tiempo transcurrido en tiempo real.
3. Cuando el búfer está lleno, el sketch antepone una cabecera WAV de 44 bytes y escribe el archivo `/REC_RAW.WAV` en InternalFS.

**Reproducción (USR2):**

1. El WAV se vuelve a cargar desde InternalFS.
2. El sketch controla el periférico I2S del nRF52840 en **modo maestro** con una relación de 32× (≈ 16 kHz LRCK), enviando tramas estéreo de 16 bits al MAX98357A con una ganancia de **0,75×** (cada muestra mono se duplica en ambos canales).
3. Un esquema de doble búfer (ping-pong) mantiene el flujo de audio ininterrumpido hasta que termina el clip.

**Botones:**

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Action</th></tr>
    <tr><td>USR1</td><td>D6</td><td>Grabar un nuevo clip (sobrescribe el anterior)</td></tr>
    <tr><td>USR2</td><td>D7</td><td>Reproducir el clip guardado</td></tr>
  </table>
</div>

:::note
Las bibliotecas **PDM**, **Adafruit TinyUSB**, **Adafruit LittleFS** e **InternalFileSystem** vienen incluidas con **Seeed nRF52 Boards 1.1.13**; no instales versiones separadas desde el Library Manager. Este tutorial no utiliza SdFat.
:::

### Ejecutar la demostración

**Paso 1.** Abre `xiao_nrf52840_096_flash_record.ino` en Arduino IDE.

**Paso 2.** Selecciona **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** y el **Port** correcto.

**Paso 3.** Haz clic en **Upload**.

**Paso 4.** La pantalla muestra la pantalla de espera de "Recorder". Pulsa **USR1**: una barra de progreso roja "REC" se llena mientras graba. Al terminar, guarda el WAV y vuelve a la pantalla de espera.

**Paso 5.** Pulsa **USR2**: el clip se reproduce a través del altavoz MAX98357A conectado, mientras la pantalla muestra "Playing...".

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_flash_record.gif" style={{width:500, height:'auto'}}/></div>

Después de pulsar USR1, la barra de progreso roja se llena hasta el 100 % y el clip se guarda. Al pulsar USR2, la grabación se reproduce a través del MAX98357A. El archivo WAV se almacena en InternalFS y sigue disponible después de un reinicio o un ciclo de alimentación. Grabar de nuevo con USR1 sobrescribe el archivo anterior.

:::note
Este tutorial se ha compilado, subido y probado a nivel de hardware con la XIAO nRF52840 Plus, la pantalla IPS de 0,96'', un amplificador MAX98357A y un altavoz externo.
:::

---

## Botones de usuario

La pantalla IPS de 0,96'' tiene **dos pulsadores físicos** conectados a la XIAO nRF52840 Plus:

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Logic</th><th>Silkscreen Label</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>Activo en bajo (pulsado = LOW)</td><td>USR1</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>Activo en bajo (pulsado = LOW)</td><td>USR2</td></tr>
  </table>
</div>

:::note
A diferencia de la pantalla IPS de 1,14'', la pantalla IPS de 0,96'' **no tiene un tercer botón** (no hay USR3 en D19). Tampoco tiene pads de salida dedicados para botones.
:::

### Lectura de botones

Las demos integradas configuran los botones con la resistencia de pull-up interna:

```cpp
const int USR1 = D6;
const int USR2 = D7;

void setup() {
  pinMode(USR1, INPUT_PULLUP);
  pinMode(USR2, INPUT_PULLUP);
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
}
```

### Antirrebote con interrupciones

Para un manejo de botones con antirrebote y respuesta rápida sin bloquear el bucle principal, puedes usar interrupciones por cambio de pin:

```cpp
volatile bool btn1Flag = false;
volatile bool btn2Flag = false;

void btn1Isr() { btn1Flag = true; }
void btn2Isr() { btn2Flag = true; }

void setup() {
  pinMode(D6, INPUT_PULLUP);
  pinMode(D7, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(D6), btn1Isr, FALLING);
  attachInterrupt(digitalPinToInterrupt(D7), btn2Isr, FALLING);
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
}
```

### Comportamiento predeterminado en el Dashboard de fábrica

En el firmware de fábrica precargado, los botones se asignan de la siguiente manera (puedes sobrescribir esto en tu propio código):

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Action</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>Cambiar el brillo de la pantalla (100% → 75% → 50% → 25% → 100%)</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>Conmutar la retroiluminación de la pantalla ON/OFF</td></tr>
  </table>
</div>

Cuando la pantalla está apagada (conmutada mediante USR2), al pulsar USR2 de nuevo se restaura al nivel anterior distinto de cero.

---

## Estado de la batería

Esta demo muestra el estado de la batería — un icono de batería con nivel de carga y estado de carga — en la pantalla IPS de 0,96''. Detecta si una batería LiPo está físicamente conectada y muestra uno de tres estados: **USB PWR** (sin batería), **porcentaje** (solo batería) o **charging** (USB + batería).

La pantalla IPS de 0,96'' **no tiene un pin ADC de batería dedicado** (D16 es NC): el voltaje de la batería se mide a través del divisor interno del módulo XIAO nRF52840 Plus.

**Ubicación del código:** `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver en GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

**Pantalla:**

La pantalla es controlada por **Seeed_GFX2** con `Board_XIAO_0inch96_LCD<38, 37>` y `Config_Seeed_0inch96_LCD_ST7789` (80×160, BGR, rotación 2) mediante SPI por hardware a 10 MHz.

**Circuito de batería:**

La nRF52840 Plus utiliza **tres pines GPIO** para formar un sistema completo de monitorización de batería:

<div class="table-center">
  <table align="center">
    <tr><th>Signal</th><th>nRF52840 Pin</th><th>Function</th></tr>
    <tr><td><code>READ_BAT</code></td><td><strong>P0.14</strong></td><td>Habilitación del divisor de voltaje de batería. Activo en bajo: ponlo en LOW para habilitar el divisor y luego suéltalo a HIGH (alta impedancia) para ahorrar energía.</td></tr>
    <tr><td><code>VBAT_ADC</code></td><td><strong>PIN_VBAT</strong> (AIN7 / P0.31)</td><td>Entrada analógica que lee el voltaje de batería dividido.</td></tr>
    <tr><td><code>CHG</code></td><td><strong>P0.17</strong></td><td>Indicador de estado de carga. Activo en bajo: lee LOW cuando hay un cargador conectado y la batería se está cargando.</td></tr>
  </table>
</div>

**Detección:**

Con USB-C, un voltaje VBAT estático no puede indicar si hay una batería presente: el nodo BAT del cargador puede parecer una celda Li-ion real incluso sin batería conectada. Por ello, la demo primero aprende una **línea base solo USB** y luego confirma la inserción de la batería solo después de un descenso sostenido de VBAT, y confirma la extracción tras una lectura ruidosa/saltada combinada con `~CHG` pasando a HIGH. Esto refleja la lógica de detección del Dashboard de fábrica.

**Estados del icono:**

- **Sin batería**: icono de batería con contorno gris y una cruz roja, etiquetado como **USB PWR**.
- **Batería presente**: icono de batería con contorno blanco y relleno de color (verde / amarillo / rojo según el porcentaje), etiquetado con el **porcentaje** y el **voltaje**.
- **Cargando**: relleno cian con un icono de rayo, etiquetado con el porcentaje y el voltaje.

:::note
El pin `~CHG` se lee a través de los **registros GPIO en bruto** del nRF52840 (`nrf_gpio_cfg_input()` y `NRF_P0->IN`) en lugar de `digitalRead()`. En la API de Arduino, los números de pin siguen el mapeo del paquete de la placa, donde `digitalRead(17)` en realidad lee **P0.07** (la línea de datos I2C del IMU de 6 ejes) en lugar de P0.17. Las constantes `14` y `17` aquí son **números de pin P0.x en bruto de Nordic** (P0.14 y P0.17), que es exactamente lo que esperan las llamadas a registros.
:::

:::note
La demostración utiliza la resistencia de lado bajo calibrada de fábrica de **499 kΩ** (relación del divisor ≈ 3.004), no el valor nominal de 510 kΩ. El divisor está integrado en el propio módulo XIAO nRF52840 Plus, no en la placa de pantalla. El pin de habilitación P0.14 es **activo en bajo**: ponlo en LOW para habilitar el divisor y luego déjalo en alta impedancia (INPUT) para minimizar el consumo de corriente en reposo cuando la batería no se está midiendo.
:::

### Ejecución de la demostración

**Paso 1.** Abre `xiao_nrf52840_096_battery_status.ino` en Arduino IDE.

**Paso 2.** Selecciona **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** y el **Port** correcto.

**Paso 3.** Haz clic en **Upload**.

**Paso 4.** Observa la pantalla: muestra el icono de la batería con el estado actual. Conecta o desconecta una batería LiPo (o el cable USB-C) para ver cómo el icono cambia entre los tres estados.

### Resultado esperado

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_battery_status_state1.jpg" style={{width:300, height:'auto'}}/><br/><strong>USB PWR</strong> (sin batería)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_battery_status_state2.jpg" style={{width:300, height:'auto'}}/><br/><strong>Percentage</strong> (solo batería)</div></td>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_battery_status_state3.jpg" style={{width:300, height:'auto'}}/><br/><strong>Charging</strong> (USB + batería)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Battery connector</strong> (parte trasera)</div></td>
    </tr>
  </table>
</div>

Sin batería, la pantalla muestra una batería gris con una cruz roja y la etiqueta **USB PWR**. Inserta una batería LiPo y el icono cambia a un relleno de color con el porcentaje y el voltaje. Conecta USB-C mientras haya una batería presente y el relleno se vuelve cian con un rayo, indicando que se está cargando.

La demostración también imprime una línea de diagnóstico en el Monitor Serie cada 500 ms, por ejemplo:

```
VBAT 3.87V  charging  85  spread=5  usb=ON  base=4.140  baseValid=Y  state=PRESENT  filter=STABLE  removeCount=0
```
---

## Recursos

- **🗃️[Archivos de diseño de PCB]** [XIAO 0.96'' IPS Display (nRF52840) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%200.96%27%27%20IPS%20Display%20%28nRF52840%29%20KiCad%20Project.zip)
- **📄[Esquemático]** [XIAO 0.96'' IPS Display (nRF52840) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%200.96%27%27%20IPS%20Display%20%28nRF52840%29%20Schematic.pdf)
- **📦[Modelo 3D]** [XIAO 0.96'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%200.96%27%27%20IPS%20Display.step)
- **📄[Hoja de datos]** [0.96 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/0.96%20Inch%20Display%20Datasheet.pdf)
- **💾[Firmware de fábrica]** [XIAO 0.96'' IPS Display (nRF52840) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%200.96%27%27%20IPS%20Display%20%28nRF52840%29%20Factory%20Firmware.uf2)
- **[Demo]** [Código de demostración de la placa de pantalla XIAO](https://github.com/Seeed-Projects/Display-Gadgets) — todas las demostraciones de Function están en el directorio `code_GFX2/Function/096_nRF52840/`

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
