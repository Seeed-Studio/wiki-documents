---
description: Demos independientes a nivel de función para cada periférico integrado de la XIAO 0.96'' IPS Display (ESP32-S3). Cubre pantalla, IMU, micrófono PDM y audio I2S (grabadora en flash), botones y detección de voltaje de batería.
title: Uso de periféricos integrados
keywords:
  - XIAO
  - ESP32-S3
  - Display
  - LCD
  - Function
  - 0.96
image: https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/logo_esp32s3.webp
slug: /function_0.96_inch_display_esp32s3
sku: 100037468
sidebar_label: Function
sidebar_position: 2
last_update:
  date: 08/26/2026
  author: FaiyuetCik
createdAt: '2026-08-13'
updatedAt: '2026-08-26'
url: https://wiki.seeedstudio.com/es/function_0.96_inch_display_esp32s3/
---

# Uso de periféricos integrados

Esta página recopila demos independientes a nivel de función para cada periférico integrado de la pantalla IPS de 0.96''. Cada sección es autónoma: puedes elegir la que coincida con tu caso de uso sin tener que leer las demás.

:::tip
Los GIF de demostración de esta página están acelerados para mantenerlos cortos.
:::

:::note
Todos los demos de esta página requieren **esp32 Boards by Espressif (3.3.11)** como se describe en [Getting Started](/es/getting_started_0.96_inch_display_esp32s3), además de la librería **Seeed_GFX2** instalada manualmente como se indica a continuación.
:::

- **Seeed_GFX2 (instalación manual)**: esta librería no está disponible en Library Manager y debe instalarse manualmente:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Paso 1.** Haz clic en el botón de arriba para descargar `Seeed_GFX2` v1.0.0 como archivo ZIP (anclado a una etiqueta de versión para que el tutorial siga siendo reproducible). Como alternativa, clona el repositorio desde [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2).

**Paso 2.** En el IDE de Arduino, ve a **Sketch > Include Library > Add .ZIP Library...** y selecciona el ZIP descargado. El IDE lee `library.properties` y lo instala automáticamente en la carpeta `Seeed_GFX2` correcta; no necesitas renombrar la carpeta extraída. (Para instalarlo manualmente en su lugar, descomprime el archivo y renombra la carpeta extraída a `Seeed_GFX2` antes de colocarla en `Documents/Arduino/libraries/`).

**Paso 3.** Reinicia el IDE de Arduino para que se detecte la nueva librería.

:::tip
- **Seeed_GFX2** es la librería gráfica de Seeed Studio construida sobre una arquitectura en capas `Board` + `Panel Config`. Cada demo inicializa la pantalla con una única llamada `display.begin<Board_..., Config_...>()`: el template **Board** posee el mapa de pines (CS/DC/SCK/MOSI/RST/BL), y el **Panel Config** integra la resolución 80×160, el orden de color BGR y la rotación. No se necesita `driver.h` ni construcción manual del panel.
- En esta placa los demos usan `Board_XIAO_0inch96_LCD<13, 12>` (RST=13, BL=12) con `Config_Seeed_0inch96_LCD_ST7789` (80×160, BGR, rotación 2).
- En estos demos la **IMU** se lee directamente por I2C (`Wire`), por lo que no se necesita ninguna librería IMU externa. El **micrófono PDM** y la **salida I2S** usan los drivers de ESP-IDF 5 (`driver/i2s_pdm.h`, `driver/i2s_std.h`) y `LittleFS`, todos incluidos con el paquete de placas esp32.
- La pantalla IPS de 0.96'' **no tiene controlador táctil, ni ranura para tarjeta SD, ni conector Grove**: solo dispone de un pad de prueba I2C de 4 pines en la parte trasera, por lo que no se necesitan librerías de táctil, SD ni Grove.
:::

## Obtener el código de demostración

Cada demo de esta página se encuentra en el repositorio [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets), dentro del directorio `code_GFX2/Function/`. Cada demo es una carpeta que contiene un único sketch `.ino`. **Descarga siempre la carpeta completa** en lugar de copiar el código fuente `.ino` desde la vista web de GitHub.

**Opción A — Descargar el repositorio como ZIP (recomendado):**

1. Abre [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) y haz clic en **Code > Download ZIP**, luego extrae el archivo en cualquier lugar conveniente.
2. Navega a `code_GFX2/Function/` y abre la carpeta indicada en la línea **Code location** de cada demo. Por ejemplo, el demo GraphicTest para esta placa se encuentra en `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_graphictest/`.
3. **Haz doble clic en el archivo `.ino`** para abrirlo en el IDE de Arduino.

**Opción B — git clone:**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

Luego abre el archivo `.ino` del demo desde la carpeta clonada `code_GFX2/Function/...`.

## Pantalla — GraphicTest

Este demo ejecuta un benchmark gráfico completo en el panel IPS ST7789 de 0.96 pulgadas (80×160), que incluye barras de color, líneas, rectángulos, círculos, triángulos, rectángulos redondeados, texto y un gradiente de píxeles. Úsalo para verificar que la pantalla está cableada correctamente y que todas las llamadas de dibujo funcionan como se espera.

**Code location:** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

El sketch inicializa el panel IPS ST7789 mediante **Seeed_GFX2**, luego recorre en secuencia diez primitivas gráficas, midiendo el tiempo de ejecución de cada una mediante `micros()` y mostrando el resultado en el monitor serie.

La pantalla se inicializa con una única llamada de template:

```cpp
display.begin<Board_XIAO_0inch96_LCD<13, 12>,
              Config_Seeed_0inch96_LCD_ST7789>();
```

El template **Board** posee el mapa de pines — CS=D2, DC=D3, SCK=D8, MOSI=D10 — y sus parámetros de template `<RST, BL>` toman números GPIO directos, por lo que `<13, 12>` establece RST=GPIO13 (D17) y BL=GPIO12 (D18). El **Panel Config** integra la resolución 80×160, el orden de color BGR y la rotación 2; no se necesita `driver.h` ni una llamada manual a `invertDisplay()`.

### Ejecutar el demo

**Paso 1.** Abre `xiao_esp32s3_096_graphictest.ino` en el IDE de Arduino.

**Paso 2.** Selecciona **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** y el **Port** correcto.

**Paso 3.** Haz clic en **Upload**.

**Paso 4.** Abre **Tools > Serial Monitor** (115200 baudios). Deberías ver el tamaño del panel seguido de la salida de tiempos para cada prueba:

```
=== XIAO ESP32-S3 Plus 0.96 graphic test ===
LCD width: 80
LCD height: 160
Color bars: 56.67 ms
Lines: 1819.10 ms
Fast lines: 85.03 ms
Rectangles: 73.34 ms
Filled rects: 177.53 ms
Circles: 262.63 ms
Triangles: 235.64 ms
Round rects: 100.58 ms
Text: 635.61 ms
Pixel gradient: 1960.36 ms
Graphic test finished.
```

En la pantalla verás cada patrón de prueba mostrado durante aproximadamente un segundo antes de que comience el siguiente. Cuando todas las pruebas finalicen, aparecerá una pantalla con el mensaje "Done! All tests OK".

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

Después de que el sketch recorra todos los patrones, la pantalla muestra un mensaje "Done!". Reinicia la placa para ejecutar la prueba de nuevo.

---

## IMU

La pantalla IPS de 0.96'' incorpora una **LSM6DS3** IMU de 6 ejes (acelerómetro de 3 ejes + giroscopio de 3 ejes) conectada por I2C en D4/D5 con la dirección **0x6A**. La línea de interrupción de movimiento en **D14** admite activación por hardware y detección de gestos.

:::note
La IMU integrada es la **LSM6DS3** (dirección I2C `0x6A`). El demo Electronic Quicksand sondea un sensor compatible con QMI8658 como mecanismo defensivo de reserva. El demo Raise to Wake se dirige a los registros de activación de la LSM6DS3 integrada.
:::

Los demos siguientes leen la IMU directamente por I2C (`Wire`), por lo que no se requiere ninguna librería IMU externa.

<a id="imu-quicksand"></a>

### Demo 1: Electronic Quicksand

Este demo convierte la pantalla en una simulación de fluido interactiva: partículas de arena dorada que fluyen y se asientan según la gravedad, medida por la IMU integrada de 6 ejes. Inclina la placa y la arena cambia de dirección en tiempo real.

**Code location:** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

La simulación utiliza una **rejilla de ocupación de 13×26** superpuesta en la pantalla de 80×160, donde cada celda es de 6×6 píxeles. Se colocan alrededor de **65 partículas** en la rejilla, cada una con una posición, velocidad y un degradado de color dorado.

El IMU se lee mediante I2C (D4/D5). El sketch busca un IMU en ambas direcciones conocidas — primero QMI8658 y luego LSM6DS3 — y usa el que responda. Los valores de aceleración en bruto se filtran con un filtro de paso bajo y se usan para derivar un vector de gravedad. Cuando inclinas la placa:

1. **Actualización del vector de gravedad** — los datos del acelerómetro se suavizan con una media móvil exponencial para evitar el parpadeo.
2. **Velocidad de las partículas** — cada particula acelera en la dirección del vector de gravedad, con amortiguación y un factor de movilidad por partícula basado en su profundidad en el flujo.
3. **Ocupación de celdas** — las partículas más profundas en el flujo (más cerca del "fondo" relativo a la gravedad) tienen movilidad reducida, creando un efecto de empaquetado realista.
4. **Renderizado diferencial** — solo se redibujan las celdas donde las partículas entraron o salieron, minimizando el tráfico SPI y manteniendo la animación fluida en el panel pequeño.

Las partículas cercanas a la superficie fluyen libremente (mayor movilidad); las partículas enterradas más profundamente se empaquetan firmemente (menor movilidad), imitando cómo se comporta la arena real.

### Ejecución de la demo

**Paso 1.** Abre `xiao_esp32s3_096_electronic_quicksand.ino` en Arduino IDE.

**Paso 2.** Selecciona la placa y el puerto, luego haz clic en **Upload**.

**Paso 3.** Una vez cargado, la pantalla se llena de partículas doradas en la parte inferior. Inclina la placa en diferentes direcciones: la arena fluye como si fuera atraída por la gravedad.

**Paso 4.** Abre **Tools > Serial Monitor** (115200 baudios) para confirmar la inicialización:

```
=== Electronic Quicksand 0.96 ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
```

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

Las partículas fluyen hacia el borde inferior cuando inclinas la placa. Cuando la pantalla queda plana, la demo conserva la dirección de gravedad anterior.

---

### Demo 2: Levantar para activar

Esta demo implementa un **sistema de suspensión/activación de pantalla** impulsado por la interrupción de activación integrada del IMU en **D14**. La pantalla se apaga automáticamente (retroiluminación apagada) después de 8 segundos de inactividad y se activa al instante cuando levantas o mueves el dispositivo.

**Ubicación del código:** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver en GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

La demo utiliza el **detector de eventos de activación integrado** del IMU compatible con LSM6 — una función de hardware que monitoriza internamente los datos del acelerómetro y activa el pin INT1 (conectado a D14 en esta placa) cuando el movimiento supera un umbral configurable. Esto significa que el MCU no necesita sondear continuamente el acelerómetro.

**Configuración del IMU (compatible con LSM6):**

<div class="table-center">
  <table align="center">
    <tr><th>Registro</th><th>Valor</th><th>Propósito</th></tr>
    <tr><td><code>CTRL3_C</code></td><td><code>0x44</code></td><td>Habilitar BDU + auto-incremento para lecturas en bloque</td></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>Acelerómetro @ 104 Hz, ±2g</td></tr>
    <tr><td><code>CTRL2_G</code></td><td><code>0x40</code></td><td>Giroscopio @ 104 Hz</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>Habilitar interrupciones integradas</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>Umbral de activación (sensibilidad media-baja)</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>Sin filtro de duración (activación sensible)</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>Enrutar activación a INT1</td></tr>
  </table>
</div>

**Flujo de suspensión/activación:**

1. **Estado activo** — la pantalla está encendida con la retroiluminación iluminada. Los datos del IMU y el voltaje de la batería (D16) se actualizan periódicamente, y una cuenta regresiva muestra los segundos restantes hasta la suspensión automática.
2. **Suspensión automática** — después de 8 segundos sin actividad, el sketch apaga la retroiluminación y muestra un mensaje "Sleep — Move to wake". De forma predeterminada, la demo usa una **suspensión solo de pantalla**: el ESP32-S3 sigue ejecutándose (por lo que el puerto serie USB CDC permanece conectado) y simplemente apaga el panel. La interrupción de activación del IMU en D14 permanece armada, por lo que la detección de movimiento sigue activa. (Configura `ENABLE_LIGHT_SLEEP` en `true` en el sketch para usar la suspensión ligera real del ESP32 con activación por GPIO; ten en cuenta que el USB CDC puede desconectarse mientras el chip está en suspensión).
3. **Activación** — cuando el usuario levanta la placa, el IMU detecta movimiento y pone D14 en HIGH. El sketch vuelve a encender la retroiluminación y redibuja la interfaz de usuario; la LCD y el IMU no se reinicializan.

**Botones de prueba manual:**

<div class="table-center">
  <table align="center">
    <tr><th>Botón</th><th>Pin</th><th>Acción</th></tr>
    <tr><td>USR1</td><td>D6</td><td>Forzar suspensión</td></tr>
    <tr><td>USR2</td><td>D7</td><td>Forzar activación</td></tr>
  </table>
</div>

### Ejecución de la demo

**Paso 1.** Abre `xiao_esp32s3_096_wakeup.ino` en Arduino IDE, selecciona la placa y el puerto, y haz clic en **Upload**.

**Paso 2.** La pantalla muestra un panel compacto con el estado de energía, voltaje/porcentaje de batería, datos de movimiento, conteo de interrupciones y una cuenta regresiva de suspensión. Deja la placa quieta: entrará automáticamente en suspensión después de 8 segundos.

**Paso 3.** Levanta la placa o agítala suavemente: la pantalla se activa de inmediato.

**Paso 4.** Abre **Tools > Serial Monitor** (115200 baudios) para observar las transiciones de arranque y activación:

```
=== XIAO ESP32-S3 Plus 0.96 IMU Wake Demo ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
[READY] awake; USR1=sleep, USR2=manual wake, motion=IMU wake
[READY] auto sleep in 8 seconds
[READY] sleep mode: display only (USB CDC stays connected)
[WAKE] IMU_D14  count=1
[WAKE] IMU_D14  count=2
[SLEEP] USR1
[WAKE] IMU_D14  count=3
[WAKE] IMU_D14  count=4
[SLEEP] USR1
[WAKE] IMU_D14  count=5
[SLEEP] AUTO_TIMEOUT
```

Después del arranque, tres líneas `[READY]` describen los controles: USR1 pone la placa en suspensión, USR2 la activa manualmente y el movimiento dispara una activación del IMU. Cada transición se registra: `[WAKE] IMU_D14 count=N` para activaciones por movimiento (el contador se incrementa cada vez), `[SLEEP] USR1` cuando presionas USR1 y `[SLEEP] AUTO_TIMEOUT` cuando entra en suspensión automática después de 8 segundos sin movimiento.

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

La pantalla muestra datos en tiempo real de movimiento y batería mientras está activa. Después de 8 segundos de quietud, la pantalla se oscurece. Levanta el dispositivo y la pantalla se restaura al instante, con el contador de activaciones incrementado.

---

## Micrófono y altavoz — Grabadora en Flash

Esta demo convierte la pantalla IPS de 0,96'' en una pequeña grabadora de voz. Pulsa USR1 para capturar un clip de 5 segundos desde el micrófono PDM integrado en la memoria Flash integrada y luego pulsa USR2 para reproducirlo a través de un amplificador I2S externo.

El micrófono PDM de la pantalla IPS de 0,96'' se conecta a los mismos pines que las otras placas de pantalla XIAO:

<div class="table-center">
  <table align="center">
    <tr><th>Pin</th><th>Señal</th><th>Función</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>Salida de reloj PDM hacia el micrófono</td></tr>
    <tr><td>D1</td><td>PDM_DATA</td><td>Entrada de datos PDM desde el micrófono</td></tr>
  </table>
</div>

**Ubicación del código:** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_flash_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_flash_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver en GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Configuración de hardware

La reproducción requiere un **amplificador de audio I2S y altavoz** externos. La demo está escrita para una placa **MAX98357A** conectada a las almohadillas de salida I2S de la placa:

<div class="table-center">
  <table align="center">
    <tr><th>Pad I2S</th><th>Pin XIAO</th><th>MAX98357A</th></tr>
    <tr><td>3V3</td><td>3V3</td><td>VIN</td></tr>
    <tr><td>GND</td><td>GND</td><td>GND</td></tr>
    <tr><td>I2S_SD</td><td>D11</td><td>DIN</td></tr>
    <tr><td>I2S_SCK</td><td>D12</td><td>BCLK</td></tr>
    <tr><td>I2S_WS</td><td>D13</td><td>LRC</td></tr>
  </table>
</div>

Las pads I2S (3V3, GND, D11, D12, D13) están expuestas en el grupo de pads de expansión inferior de la placa de pantalla.

### Cómo funciona

**Grabación (USR1)**: el **micrófono digital PDM (Pulse Density Modulation)** integrado se muestrea a través del periférico I2S del ESP32-S3 configurado en modo PDM RX. En ESP-IDF v5 (núcleo de Arduino 3.3.11), esto utiliza la nueva API del driver (`driver/i2s_pdm.h`). El micrófono se captura a **16 kHz mono** con 4 descriptores DMA de 256 frames cada uno. Cuando pulsas USR1, el sketch muestrea **5 segundos** de audio en un búfer de RAM y luego lo escribe en la Flash integrada como un archivo WAV (`/REC_RAW.WAV`) usando `LittleFS`.

Después de que el micrófono PDM se inicia, el sketch descarta los primeros **300 ms** de datos capturados como datos de calentamiento para reducir el transitorio de arranque al comienzo de la grabación.

Si el sketch no puede capturar todas las muestras en **7 segundos**, detiene la grabación y muestra **"Mic timeout"** en lugar de quedarse bloqueado en el bucle de grabación.

:::note
En esta placa, el pin de selección de canal del micrófono está conectado a GND mediante `R8` (una resistencia de 0 Ω), mientras que `R6`, la alternativa a 3V3, no está montada. Por lo tanto, el micrófono integrado conduce la ranura PDM **izquierda**, razón por la cual el sketch establece `slot_cfg.slot_mask = I2S_PDM_SLOT_LEFT`. Ten esto en cuenta si adaptas el código para un cableado de micrófono diferente.
:::

**Reproducción (USR2)**: al pulsar USR2 se lee el WAV desde la Flash y se transmite a través del periférico I2S en modo estéreo estándar (Philips) en D11/D12/D13 (`driver/i2s_std.h`). Las muestras mono se duplican en ambos canales con una ganancia de `0.75×` aplicada para evitar saturación. El amplificador alimenta un pequeño altavoz para que puedas escuchar la grabación.

:::note
La API de ESP-IDF v5 (`i2s_new_channel()` / `i2s_channel_read()` / `i2s_channel_write()`) es diferente de la versión de este demo para nRF52840, que utiliza la biblioteca `PDM` de nRF52 y el periférico `NRF_I2S` directamente. Si estás portando el código de nRF52840, debes reemplazar por completo la configuración de audio.
:::

**Estados en pantalla:**

<div class="table-center">
  <table align="center">
    <tr><th>Estado</th><th>Descripción</th></tr>
    <tr><td><strong>Ready</strong></td><td>Título "Recorder" con "USR1: record" y "USR2: play" (o "No recording")</td></tr>
    <tr><td><strong>Recording</strong></td><td>"Capturing voice" con "Please speak" mientras captura (sin progreso en vivo)</td></tr>
    <tr><td><strong>Error</strong></td><td>"Mic timeout" con "Try again" cuando la captura supera los 7 segundos</td></tr>
    <tr><td><strong>Saved</strong></td><td>Confirmación "Done — Saved WAV", luego vuelve a Ready</td></tr>
    <tr><td><strong>Playback</strong></td><td>"Playing..." mientras transmite, luego "Finished"</td></tr>
  </table>
</div>

### Ejecución de la demostración

**Paso 1.** Conecta un amplificador MAX98357A y un altavoz a las pads I2S como se describe arriba.

**Paso 2.** Abre `xiao_esp32s3_096_flash_record.ino` en Arduino IDE.

**Paso 3.** Selecciona la placa: **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** (usando esp32 Boards **3.3.11**).

**Paso 4.** Selecciona **Tools > Partition Scheme > "Default with spiffs (3MB APP/1.5MB SPIFFS)"**.

**Paso 5.** Selecciona el **Port** correcto y luego haz clic en **Upload**.

:::caution
La grabadora almacena el archivo WAV en `LittleFS`, que utiliza la partición **SPIFFS**. El esquema de partición predeterminado de la placa (`16M Flash (2MB APP/12.5MB FATFS)`) no contiene ninguna partición SPIFFS, por lo que `LittleFS.begin()` devuelve `false`, el archivo WAV no se puede escribir y la pantalla muestra "Write failed / Check flash". **Debes** seleccionar el esquema de partición SPIFFS anterior o la grabación no funcionará.
:::

**Paso 6.** Pulsa **USR1 (D6)** para grabar 5 segundos de audio desde el micrófono integrado. La pantalla muestra "Capturing voice" mientras graba.

**Paso 7.** Pulsa **USR2 (D7)** para reproducir la grabación a través del altavoz.

:::note
La grabación se almacena en la Flash integrada (`LittleFS`), por lo que sobrevive a un ciclo de encendido: puedes grabar una vez y reproducirla más tarde. Grabar de nuevo sobrescribe el archivo anterior.
:::

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_flash_record.gif" style={{width:500, height:'auto'}}/></div>

Pulsa USR1 y la pantalla muestra "Capturing voice". Después de 5 segundos confirma que el WAV se ha guardado. Pulsa USR2 y el audio se reproduce a través del altavoz conectado mientras la pantalla muestra el estado de reproducción.

---

## Botones de usuario

La pantalla IPS de 0,96'' tiene **dos botones físicos pulsadores** conectados al XIAO ESP32-S3 Plus:

<div class="table-center">
  <table align="center">
    <tr><th>Botón</th><th>Pin</th><th>Lógica</th><th>Etiqueta serigrafiada</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>Activo en bajo (pulsado = LOW)</td><td>USR1</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>Activo en bajo (pulsado = LOW)</td><td>USR2</td></tr>
  </table>
</div>

:::note
A diferencia de la pantalla IPS de 1,14'', la pantalla IPS de 0,96'' **no tiene un tercer botón** (no hay USR3 en D19). Tampoco tiene pads de salida dedicados para botones.
:::

### Lectura de botones

Los botones utilizan las resistencias de pull-up internas del XIAO. Una lectura sencilla se ve así:

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

Para un manejo de botones con antirrebote y respuesta rápida, puedes usar interrupciones GPIO con un breve retardo de estabilización:

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

### Comportamiento predeterminado en el panel de fábrica

En el firmware de fábrica precargado, los botones se asignan de la siguiente manera (puedes sobrescribir esto en tu propio código):

<div class="table-center">
  <table align="center">
    <tr><th>Botón</th><th>Pin</th><th>Acción</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>Ciclar el brillo de la pantalla (100% → 75% → 50% → 25% → 100%)</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>Conmutar la retroiluminación de la pantalla ON/OFF</td></tr>
  </table>
</div>

Cuando la pantalla está apagada (conmutada mediante USR2), al pulsar USR2 de nuevo se restaura al nivel distinto de cero anterior.

---

## Detección de voltaje de batería

Esta demostración lee el divisor de voltaje de la batería integrada en **D16** y muestra dos lecturas en vivo en amarillo en la pantalla IPS de 0,96'': el voltaje bruto del divisor D16 y el voltaje de batería calculado. Solo muestra lecturas de voltaje; no estima el porcentaje de batería ni informa el estado de carga.

**Ubicación del código:** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver en GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

**Circuito de batería:**

El ESP32-S3 Plus lee el voltaje de la batería LiPo a través de un divisor de voltaje integrado conectado a **D16**:

<div class="table-center">
  <table align="center">
    <tr><th>Señal</th><th>Pin ESP32-S3</th><th>Función</th></tr>
    <tr><td><code>BAT_ADC</code></td><td><strong>D16</strong></td><td>Entrada analógica que lee el voltaje de batería dividido. Conectado internamente a un divisor de voltaje de 316 kΩ / 160 kΩ. <strong>No uses este pin externamente.</strong></td></tr>
  </table>
</div>

**Relación del divisor de voltaje:** 316 kΩ / 160 kΩ → **Relación del divisor = (316 + 160) / 160 ≈ 2,975**

**Lectura:**

El sketch inicializa la pantalla con `Board_XIAO_0inch96_LCD<13, 12>` y `Config_Seeed_0inch96_LCD_ST7789` (80×160, BGR, rotación 2), luego muestrea **D16** doce veces (separadas 700 µs) usando `analogReadMilliVolts()` a resolución de 12 bits con atenuación de 11 dB. Promedia las muestras para obtener el voltaje bruto del divisor, lo multiplica por la relación del divisor para obtener el voltaje de la batería (`Calc = D16 × 2.975`) y dibuja ambos como dos líneas amarillas centradas. La pantalla solo se actualiza cuando cualquiera de los valores cambia en una cantidad significativa (D16 ≥ 0.02 V o Calc ≥ 0.05 V).

:::note
Ninguna señal de estado de carga está conectada a un GPIO del ESP32-S3. Esta demostración solo muestra lecturas de voltaje; no detecta la presencia de la batería ni el estado de carga, ni estima el porcentaje de batería.
:::

### Ejecutar la demostración

**Paso 1.** Abre `xiao_esp32s3_096_battery_status.ino` en Arduino IDE.

**Paso 2.** Selecciona **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** y el **Port** correcto.

**Paso 3.** Haz clic en **Upload**.

**Paso 4.** Observa la pantalla: muestra dos líneas amarillas, el voltaje bruto del divisor D16 y el voltaje calculado de la batería. Conecta o desconecta una batería LiPo (o el cable USB-C) para ver cómo se actualizan los valores.

### Resultado esperado

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_battery_status_display.jpg" style={{width:300, height:'auto'}}/><br/><strong>Lectura de voltaje</strong> (D16 + Calc)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Conector de batería</strong> (parte trasera)</div></td>
    </tr>
  </table>
</div>

La pantalla muestra el voltaje bruto del divisor D16 en la línea superior y el voltaje calculado de la batería (`Calc`) en la línea inferior. Con una batería LiPo conectada, `Calc` se aproxima al voltaje en los terminales de la batería. También puede aparecer una lectura solo con alimentación por USB, por lo que `Calc` por sí solo no puede confirmar si hay una batería conectada.

La demostración también imprime una línea de diagnóstico en el Monitor Serie cada segundo, por ejemplo:

```
D16 1.39V | Calc 4.14V
```

---

## Recursos

- **🗃️[Archivos de diseño de PCB]** [XIAO 0.96'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[Esquemático]** [XIAO 0.96'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[Modelo 3D]** [XIAO 0.96'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%200.96%27%27%20IPS%20Display.step)
- **🖨️[Caja impresa en 3D]** [XIAO 0.96'' IPS Display Enclosure (by gokul)](https://www.printables.com/model/1843001-enclosure-for-xiao-096-ips-display-esp32nrf52840/files)
- **📄[Hoja de datos]** [0.96 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/0.96%20Inch%20Display%20Datasheet.pdf)
- **💾[Firmware de fábrica]** [XIAO 0.96'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)
- **[Demo]** [Código de demostración de la XIAO Display Board](https://github.com/Seeed-Projects/Display-Gadgets) — todas las demostraciones de Function están en el directorio `code_GFX2/Function/096_ESP32/`

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
