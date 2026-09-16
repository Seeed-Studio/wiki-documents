---
description: Demos independientes a nivel de función para cada periférico integrado de la XIAO 1.14'' IPS Display (ESP32-S3). Cubre pantalla, IMU, micrófono PDM y audio I2S (barra de voz + grabadora en flash), Grove I2C, botones y detección de voltaje de batería.
title: Uso de periféricos integrados
keywords:
  - XIAO
  - ESP32-S3
  - Display
  - LCD
  - Function
  - 1.14
image: https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/logo_esp32s3.webp
slug: /function_1.14_inch_display_esp32s3
sku: 100086099
sidebar_label: Function
sidebar_position: 2
last_update:
  date: 08/25/2026
  author: FaiyuetCik
createdAt: '2026-08-13'
updatedAt: '2026-08-25'
url: https://wiki.seeedstudio.com/es/function_1.14_inch_display_esp32s3/
---

# Uso de periféricos integrados

Esta página recopila demos independientes a nivel de función para cada periférico integrado de la pantalla IPS de 1,14''. Cada sección es autónoma: puedes elegir la que coincida con tu caso de uso sin tener que leer las demás.

:::tip
Los GIF de demostración de esta página están acelerados para mantenerlos cortos.
:::

:::note
Todos los demos de esta página requieren **esp32 Boards by Espressif (3.3.11)** como se describe en [Getting Started](/es/getting_started_1.14_inch_display_esp32s3), además de la biblioteca **Seeed_GFX2** instalada manualmente como se describe a continuación.
:::

- **Seeed_GFX2 (instalación manual)**: esta biblioteca no está disponible en Library Manager y debe instalarse manualmente:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Paso 1.** Haz clic en el botón de arriba para descargar `Seeed_GFX2` v1.0.0 como archivo ZIP (anclado a una etiqueta de versión para que el tutorial siga siendo reproducible). Alternativamente, clona el repositorio desde [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2).

**Paso 2.** En el Arduino IDE, ve a **Sketch > Include Library > Add .ZIP Library...** y selecciona el ZIP descargado. El IDE lee `library.properties` y lo instala automáticamente en la carpeta `Seeed_GFX2` correcta; no necesitas renombrar la carpeta extraída. (Para instalar manualmente en su lugar, descomprime el archivo y renombra la carpeta extraída a `Seeed_GFX2` antes de colocarla en `Documents/Arduino/libraries/`).

**Paso 3.** Reinicia el Arduino IDE para que se detecte la nueva biblioteca.

:::tip
- **Seeed_GFX2** es la biblioteca gráfica de Seeed Studio construida sobre una arquitectura en capas `Board` + `Panel Config`. Cada demo inicializa la pantalla con una única llamada `display.begin<Board_..., Config_...>()`: el template **Board** posee el mapa de pines (CS/DC/SCK/MOSI/RST/BL), y la **Panel Config** integra la resolución 135×240, el orden de color y la inversión. No se necesita `driver.h` ni configuración manual de pines.
- En esta placa los demos usan `Board_XIAO_1inch14_LCD<13, 12>` (RST=13, BL=12) con `Config_Seeed_1inch14_LCD_ST7789` (135×240). Algunos demos definen una anulación local del sketch `Config_XIAO_1inch14_LCD_ST7789_BGR` para el orden de color BGR.
- La **IMU** se lee directamente por I2C (`Wire`) en estos demos; no se necesita ninguna biblioteca IMU externa. El **micrófono PDM** y la **salida I2S** usan los drivers de ESP-IDF 5 (`driver/i2s_pdm.h`, `driver/i2s_std.h`) y `LittleFS`, todos incluidos con el paquete de placas esp32.
- La pantalla IPS de 1,14'' **no tiene controlador táctil ni ranura para tarjeta SD**, por lo que no se necesitan bibliotecas de táctil ni de SD.
:::

## Obtener el código de demostración

Cada demo de esta página se encuentra en el repositorio [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets), dentro del directorio `code_GFX2/Function/`. Cada demo es una carpeta que contiene un único sketch `.ino`. **Descarga siempre la carpeta completa** en lugar de copiar el código fuente `.ino` desde la vista web de GitHub.

**Opción A — Descargar el repositorio como ZIP (recomendado):**

1. Abre [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) y haz clic en **Code > Download ZIP**, luego extrae el archivo en cualquier lugar conveniente.
2. Navega a `code_GFX2/Function/` y abre la carpeta indicada en la línea **Code location** de cada demo. Por ejemplo, el demo GraphicTest para esta placa se encuentra en `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_graphictest/`.
3. **Haz doble clic en el archivo `.ino`** para abrirlo en el Arduino IDE.

**Opción B — git clone:**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

Luego abre el archivo `.ino` del demo desde la carpeta clonada `code_GFX2/Function/...`.

## Pantalla — GraphicTest

Este demo ejecuta un benchmark gráfico completo en el panel IPS ST7789 de 1,14 pulgadas (135×240), que cubre barras de color, líneas, rectángulos, círculos, triángulos, rectángulos redondeados, texto y un degradado de píxeles. Úsalo para verificar que la pantalla está cableada correctamente y que todas las llamadas de dibujo funcionan como se espera.

**Code location:** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

El sketch inicializa el panel IPS ST7789 mediante **Seeed_GFX2**, luego recorre en secuencia diez primitivas gráficas, midiendo el tiempo de ejecución de cada una mediante `micros()` y mostrando el resultado en el monitor serie.

La pantalla se inicializa con una única llamada de template:

```cpp
display.begin<Board_XIAO_1inch14_LCD<13, 12>,
              Config_Seeed_1inch14_LCD_ST7789>();
```

El template **Board** posee el mapa de pines — CS=D2, DC=D3, SCK=D8, MOSI=D10 — y sus parámetros de template `<RST, BL>` toman números GPIO directos, por lo que `<13, 12>` establece RST=GPIO13 (D17) y BL=GPIO12 (D18). La **Panel Config** integra la resolución 135×240, el orden de color y la inversión (`invert = true`), por lo que no se necesita `driver.h` ni una llamada manual a `invertDisplay()`.

### Ejecutar el demo

**Paso 1.** Abre `xiao_esp32s3_114_graphictest.ino` en Arduino IDE.

**Paso 2.** Selecciona **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** y el **Port** correcto.

**Paso 3.** Haz clic en **Upload**.

**Paso 4.** Abre **Tools > Serial Monitor** (115200 baudios). Deberías ver el tamaño del panel seguido de la salida de tiempos para cada prueba:

```
=== XIAO ESP32-S3 Plus 1.14 graphic test ===
LCD width: 135
LCD height: 240
Color bars: 96.02 ms
Lines: 2634.02 ms
Fast lines: 143.65 ms
Rectangles: 113.85 ms
Filled rectangles: 340.06 ms
Circles: 358.57 ms
Triangles: 378.17 ms
Round rectangles: 163.69 ms
Text: 1458.63 ms
Pixel gradient: 4670.28 ms
Graphic test finished.
```

En la pantalla verás cada patrón de prueba mostrado durante aproximadamente un segundo antes de que comience el siguiente. Cuando todas las pruebas terminan, aparece una pantalla "Graphic / Finished" con un borde de rectángulo redondeado azul.

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

Después de que el sketch recorra todos los patrones, la pantalla muestra el mensaje "Graphic / Finished" con "Reset to rerun" debajo. Reinicia la placa para ejecutar la prueba de nuevo.

---

## IMU

La pantalla IPS de 1,14'' incorpora una **LSM6DS3** IMU de 6 ejes (acelerómetro de 3 ejes + giroscopio de 3 ejes) conectada por I2C en D4/D5 con la dirección **0x6A**. La línea de interrupción de movimiento en **D14** admite activación por hardware y detección de gestos.

:::note
La IMU integrada es la **LSM6DS3** (confirmado en el esquema de la placa, dirección I2C `0x6A`). El demo Electronic Quicksand sondea un sensor compatible con QMI8658 como mecanismo defensivo de reserva. El demo Raise to Wake se dirige a los registros de activación de la LSM6DS3 integrada.
:::

Los demos siguientes leen la IMU directamente por I2C (`Wire`); no se requiere ninguna biblioteca IMU externa.

<a id="imu-quicksand"></a>

### Demo 1: Electronic Quicksand

Este demo convierte la pantalla en una simulación de fluido interactiva: partículas de arena dorada que fluyen y se asientan según la gravedad, medida por la IMU integrada de 6 ejes. Inclina la placa y la arena cambia de dirección en tiempo real.

**Code location:** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

La simulación utiliza una **rejilla de ocupación de 22×40** superpuesta sobre la pantalla de 135×240, donde cada celda es de 6×6 píxeles. Se colocan alrededor de **150 partículas** en la rejilla, cada una con una posición, velocidad y un degradado de color dorado.

El IMU se lee mediante I2C (D4/D5). El sketch busca un IMU en ambas direcciones conocidas — primero QMI8658 y luego LSM6DS3 — y usa el que responda. Los valores de aceleración en bruto se filtran con un filtro paso bajo y se usan para derivar un vector de gravedad. Cuando inclinas la placa:

1. **Actualización del vector de gravedad** — los datos del acelerómetro se suavizan con una media móvil exponencial para evitar el parpadeo.
2. **Velocidad de las partículas** — cada partícula acelera en la dirección del vector de gravedad, con amortiguamiento y un factor de movilidad por partícula basado en su profundidad en el flujo.
3. **Ocupación de celdas** — las partículas más profundas en el flujo (más cerca del "fondo" relativo a la gravedad) tienen movilidad reducida, creando un efecto de empaquetado realista.
4. **Renderizado diferencial** — solo se redibujan las celdas en las que las partículas entraron o salieron, minimizando el tráfico SPI y manteniendo la animación fluida.

Las partículas cercanas a la superficie fluyen libremente (mayor movilidad); las partículas enterradas más profundamente se empaquetan firmemente (menor movilidad), imitando cómo se comporta la arena real.

### Ejecución de la demo

**Paso 1.** Abre `xiao_esp32s3_114_electronic_quicksand.ino` en Arduino IDE.

**Paso 2.** Selecciona la placa y el puerto, luego haz clic en **Upload**.

**Paso 3.** Una vez subido, la pantalla se llena de partículas doradas en la parte inferior. Inclina la placa en diferentes direcciones: la arena fluye como si fuera atraída por la gravedad.

**Paso 4.** Abre **Tools > Serial Monitor** (115200 baudios) para confirmar la inicialización:

```
=== Electronic Quicksand 1.14 ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
```

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

Las partículas fluyen hacia el borde inferior cuando inclinas la placa. Cuando la pantalla queda plana, la demo conserva la dirección de gravedad anterior.

---

### Demo 2: Levantar para activar

Esta demo implementa un **sistema de suspensión/activación de pantalla** impulsado por la interrupción de activación integrada del IMU en **D14**. La pantalla se apaga automáticamente (retroiluminación apagada + sueño ligero del ESP32) después de 8 segundos de inactividad y se activa al instante cuando levantas o mueves el dispositivo.

**Ubicación del código:** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
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

1. **Estado activo** — la pantalla está encendida, retroiluminación en PWM 160. Los datos del IMU y el voltaje de la batería se actualizan periódicamente. Un temporizador de cuenta regresiva muestra los segundos restantes hasta la suspensión automática.
2. **Suspensión automática** — después de 8 segundos sin actividad, el sketch apaga la retroiluminación, muestra el mensaje "Sleeping... Pick up device to wake", configura D14 como fuente de activación mediante `esp_sleep_enable_gpio_wakeup()` y entra en sueño ligero del ESP32.
3. **Activación** — cuando el usuario levanta la placa, el IMU detecta el movimiento y pone D14 en HIGH. El ESP32 sale del sueño ligero y vuelve a dibujar la interfaz.

**Botones de prueba manual:**

<div class="table-center">
  <table align="center">
    <tr><th>Botón</th><th>Pin</th><th>Acción</th></tr>
    <tr><td>USR1</td><td>D6</td><td>Forzar suspensión</td></tr>
    <tr><td>USR2</td><td>D7</td><td>Forzar activación</td></tr>
  </table>
</div>

### Ejecución de la demo

**Paso 1.** Abre `xiao_esp32s3_114_wakeup.ino` en Arduino IDE, selecciona la placa y el puerto, y haz clic en **Upload**.

**Paso 2.** La pantalla muestra un panel con el estado de energía, datos de movimiento y un temporizador de cuenta regresiva. Deja la placa quieta durante 8 segundos: entrará en suspensión automáticamente.

**Paso 3.** Levanta la placa o agítala suavemente: la pantalla se activa de inmediato.

**Paso 4.** Abre **Tools > Serial Monitor** (115200 baudios) para confirmar la inicialización:

```
=== XIAO ESP32-S3 Plus 1.14 IMU Wake Demo ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
```

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

La pantalla muestra datos de movimiento en tiempo real mientras está activa. Después de 8 segundos de quietud, la pantalla se oscurece y el ESP32-S3 entra en sueño ligero. Levanta el dispositivo y la pantalla se restaura en una fracción de segundo, con el contador de activaciones incrementado.

---

## Micrófono y altavoz

La pantalla IPS de 1,14'' tiene un **micrófono digital PDM (Pulse Density Modulation)** integrado para entrada de audio, además de pads de salida I2S para controlar un altavoz/amplificador externo. Esta sección muestra dos demos: una **Barra de voz** en tiempo real que visualiza la entrada del micrófono (sin hardware adicional) y una **Grabadora en Flash** que graba audio en la Flash integrada y lo reproduce a través de un amplificador I2S externo.

<div class="table-center">
  <table align="center">
    <tr><th>Pin</th><th>Señal</th><th>Función</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>Salida de reloj PDM hacia el micrófono</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>Entrada de datos PDM desde el micrófono</td></tr>
  </table>
</div>

### Demo 1: Barra de voz

Esta demo visualiza la entrada de audio en tiempo real del micrófono PDM como una forma de onda dinámica al estilo ecualizador y una barra de volumen segmentada. Habla, aplaude o sopla en el micrófono integrado y observa cómo las barras reaccionan al instante: no se requiere hardware externo.

**Ubicación del código:** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_voice_bar/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_voice_bar" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### Cómo funciona

El sketch captura el micrófono PDM integrado a través del periférico I2S del ESP32-S3 configurado en **modo PDM RX**, usando el driver API de ESP-IDF v5 (`driver/i2s_pdm.h`). Esto requiere **esp32 Boards by Espressif 3.x**: la API heredada `i2s_config_t` del core 2.x no se compilará.

:::note
El API de ESP-IDF v5 (`i2s_new_channel()` / `i2s_channel_read()`) es diferente de la versión de esta demo para nRF52840, que usa la biblioteca `PDM` de nRF52. Si estás portando el código de nRF52840, debes reemplazar por completo la configuración de PDM.
:::

El micrófono se muestrea a **16 kHz mono** en búferes DMA de 256 muestras (4 descriptores). En `loop()`, `i2s_channel_read()` obtiene un búfer, elimina el offset de DC, calcula la amplitud pico y submuestrea la señal en 27 bins para el visualizador de forma de onda. La intensidad de manejo del reloj PDM también se reduce con `gpio_set_drive_capability()` para reducir el ruido EMI/acoplado.

La pantalla se divide en tres zonas:

<div class="table-center">
  <table align="center">
    <tr><th>Zona</th><th>Posición</th><th>Descripción</th></tr>
    <tr><td><strong>Forma de onda</strong></td><td>Parte superior (y=30–95)</td><td>Visualizador de ecualizador de 27 barras. Las muestras sin procesar se submuestrean y se dibujan como barras simétricas alrededor de una línea base central. El color de la forma de onda sigue el volumen suavizado: verde (&lt;50%), amarillo (50–90%), rojo (&gt;90%).</td></tr>
    <tr><td><strong>Porcentaje</strong></td><td>Centro</td><td>Porcentaje de volumen numérico grande (0–100%), codificado por colores: verde (&lt;50%), amarillo (50–90%), rojo (&gt;90%).</td></tr>
    <tr><td><strong>Barra de volumen</strong></td><td>Parte inferior (y=130–225)</td><td>Barra de 10 segmentos (degradado verde/amarillo/rojo). Se actualiza con el volumen suavizado a partir del pico PDM.</td></tr>
  </table>
</div>

**Procesamiento de señal:**

1. **I2S PDM RX**: `i2s_channel_read()` obtiene 256 muestras PDM. El sketch elimina el offset de DC (media) para que el pico refleje la sonoridad real y luego calcula la magnitud del pico.
2. **Normalización**: los valores de pico por debajo de `VOL_FLOOR` (20) se tratan como silencio. Los valores por encima de `VOL_CEIL` (2400) se saturan al 100%. Entre ambos, un mapeo lineal produce un nivel de volumen de 0.0–1.0.
3. **Suavizado exponencial**: el volumen mostrado se suaviza con un factor de mezcla del 20% (`SMOOTH = 0.20`) para evitar parpadeos. Durante el silencio, el volumen decae un 6% por fotograma.
4. **Renderizado diferencial**: la barra de volumen y la etiqueta de porcentaje solo se redibujan cuando el valor cambia, minimizando el tráfico SPI.

#### Ejecución de la demo

**Paso 1.** Abre `xiao_esp32s3_114_voice_bar.ino` en Arduino IDE.

**Paso 2.** Selecciona **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** y el **Port** correcto.

**Paso 3.** Haz clic en **Upload**.

**Paso 4.** Abre **Tools > Serial Monitor** (115200 baudios). Deberías ver:

```
=== Voice Bar | XIAO ESP32-S3 Plus 1.14 ===
[MIC] PDM RX ready (ESP-IDF v5)
[MIC] ready
```

**Paso 5.** Habla, aplaude o sopla en el micrófono. La forma de onda y la barra de volumen responden en tiempo real. La etiqueta de porcentaje cambia de color a medida que aumenta el volumen.

#### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_voice_bar.gif" style={{width:500, height:'auto'}}/></div>

En silencio, la forma de onda es plana y la barra de volumen está vacía (0%). Habla en el micrófono y las barras del ecualizador se animan mientras la barra de volumen se llena pasando de verde a amarillo y luego a rojo. La etiqueta de porcentaje se actualiza en tiempo real.

---

### Demo 2: Grabadora en Flash

Esta demo graba 5 segundos de audio desde el micrófono PDM integrado en la memoria Flash integrada y luego lo reproduce a través de un altavoz externo conectado a la salida I2S. Pulsa un botón para grabar y otro para reproducir.

**Ubicación del código:** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_flash_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_flash_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Configuración de hardware

La reproducción requiere un **amplificador de audio I2S y altavoz** externos. La demo está escrita para una placa **MAX98357A** conectada a los pads de salida I2S de la placa:

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

Los pads I2S (3V3, GND, D11, D12, D13) están expuestos en el grupo de pads de expansión inferior de la placa de pantalla.

### Cómo funciona

**Grabación**: el **micrófono digital PDM (Pulse Density Modulation)** integrado se muestrea a través del periférico I2S del ESP32-S3 configurado en modo PDM RX. En ESP-IDF v5 (núcleo de Arduino 3.3.11), esto usa la nueva API del driver (`driver/i2s_pdm.h`). El micrófono se captura a **16 kHz mono** con 4 descriptores DMA de 256 frames cada uno. Cuando pulsas **USR1**, el sketch muestrea 5 segundos de audio en un búfer de RAM y luego lo escribe en la Flash integrada como un archivo WAV (`/REC_RAW.WAV`) usando `LittleFS`.

Después de que el micrófono PDM se inicia, el sketch descarta los primeros **300 ms** de datos capturados como datos de calentamiento para reducir el transitorio de arranque al principio de la grabación.

Si el sketch no puede capturar todas las muestras en **7 segundos**, detiene la grabación y muestra **"Mic capture timeout"** en lugar de permanecer bloqueado en el bucle de grabación.

**Reproducción**: al pulsar **USR2** se lee el WAV desde la Flash y se transmite a través del periférico I2S en modo estéreo estándar (Philips) en D11/D12/D13. Las muestras mono se duplican en ambos canales con una ganancia de `0.75×` aplicada para evitar saturación. El amplificador alimenta un pequeño altavoz para que puedas escuchar la grabación.

**Estados en pantalla:**

<div class="table-center">
  <table align="center">
    <tr><th>Estado</th><th>Descripción</th></tr>
    <tr><td><strong>Ready</strong></td><td>Título "Flash Recorder" con "USR1: record" y "USR2: play Flash WAV" (o "No saved recording")</td></tr>
    <tr><td><strong>Warm-up</strong></td><td>"Warming up mic..." con "Please wait" antes de que comience la captura</td></tr>
    <tr><td><strong>Recording</strong></td><td>"Capturing 5 seconds" mostrado mientras se captura (sin progreso en vivo)</td></tr>
    <tr><td><strong>Error</strong></td><td>"Mic capture timeout" con "Try recording again" cuando la captura supera los 7 segundos</td></tr>
    <tr><td><strong>Saved</strong></td><td>Confirmación "Done — Saved Flash WAV", luego vuelve a Ready</td></tr>
    <tr><td><strong>Playback</strong></td><td>"Playing raw audio" mientras se transmite y luego "Finished"</td></tr>
  </table>
</div>

### Ejecución de la demo

**Paso 1.** Conecta un amplificador MAX98357A y un altavoz a los pads I2S como se describe arriba.

**Paso 2.** Abre `xiao_esp32s3_114_flash_record.ino` en Arduino IDE.

**Paso 3.** Selecciona la placa: **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** (usando esp32 Boards **3.3.11**).

**Paso 4.** Selecciona **Tools > Partition Scheme > "Default with spiffs (3MB APP/1.5MB SPIFFS)"**.

**Paso 5.** Selecciona el **Port** correcto y luego haz clic en **Upload**.

:::caution
La grabadora almacena el archivo WAV en `LittleFS`, que usa la partición **SPIFFS**. El esquema de partición predeterminado de la placa (`16M Flash (2MB APP/12.5MB FATFS)`) no contiene ninguna partición SPIFFS, por lo que `LittleFS.begin()` devuelve `false` y la pantalla muestra "Flash write failed / Check partition". **Debes** seleccionar el esquema de partición SPIFFS anterior o la grabación no funcionará.
:::

**Paso 6.** Pulsa **USR1 (D6)** para grabar 5 segundos de audio desde el micrófono integrado. La pantalla muestra "Capturing 5 seconds" mientras graba.

**Paso 7.** Pulsa **USR2 (D7)** para reproducir la grabación a través del altavoz.

:::note
La grabación se almacena en la Flash integrada (`LittleFS`), por lo que sobrevive a un ciclo de encendido: puedes grabar una vez y reproducirla más tarde. Grabar de nuevo sobrescribe el archivo anterior.
:::

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_flash_record.gif" style={{width:500, height:'auto'}}/></div>

Pulsa USR1 y la pantalla muestra "Capturing 5 seconds". Después de 5 segundos confirma que el WAV se guardó. Pulsa USR2 y el audio se reproduce a través del altavoz conectado mientras la pantalla muestra el estado de reproducción.

---

## Grove I2C

La pantalla IPS de 1,14'' incluye un **conector Grove I2C** dedicado que expone D4 (SDA) y D5 (SCL) en un conector Grove estándar de 4 pines (GND / 3V3 / SDA / SCL). D4/D5 se comparten internamente con el IMU integrado.

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

Esta demo lee la temperatura y la humedad de un sensor **Grove SHT31** conectado al conector Grove I2C y muestra las lecturas en la pantalla. El sketch se comunica con el sensor directamente sobre I2C con `Wire.h` — no se necesita ninguna librería SHT31 — y valida cada lectura con el CRC del sensor.

**Ubicación del código:** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_sht31_temperature_humidity/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_sht31_temperature_humidity" target="_blank" rel="noopener noreferrer">
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

1. **Escaneo I2C**: al iniciar, escanea el bus I2C e informa de cada dispositivo encontrado.
2. **Medición de disparo único**: envía un comando de disparo único de alta repetibilidad (`0x24 0x00`, sin clock stretching), espera 20 ms y luego lee 6 bytes: temperatura alto/bajo + CRC, humedad alto/bajo + CRC.
3. **Comprobación de CRC**: cada valor de 16 bits se verifica frente a su byte CRC; una discrepancia se informa como un error (cableado o un módulo dañado/ruidoso).
4. **Conversión**: los valores en bruto se convierten a temperatura (`-45 + 175 × raw / 65535` °C) y humedad relativa (`100 × raw / 65535` %).

La pantalla se inicializa con `Board_XIAO_1inch14_LCD<13, 12>` y un `Config_XIAO_1inch14_LCD_ST7789_BGR` local al sketch (135×240, orden de color BGR, invertida) para que los colores se muestren correctamente. La pantalla muestra "SHT31 OK" con la temperatura y la humedad en tiempo real, o "SHT31 ERROR" más un código de error si una lectura falla.

#### Ejecución de la demostración

**Paso 1.** Abre `xiao_esp32s3_114_sht31_temperature_humidity.ino` en Arduino IDE.

**Paso 2.** Selecciona **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** y el **Port** correcto, luego haz clic en **Upload**.

**Paso 3.** Abre **Tools > Serial Monitor** (115200 baudios). Deberías ver:

```
=== XIAO ESP32-S3 1.14 SHT31 Temperature/Humidity ===
[PIN] SDA=D4 SCL=D5 address=0x44
[I2C] scan start
[I2C] found 0x44
[I2C] scan done
[SHT31] OK T=26.81 C H=48.32 %
```

La pantalla muestra "SHT31 OK" con la temperatura y la humedad, actualizándose una vez por segundo. Si el sensor se desconecta o la comprobación de CRC falla, la pantalla muestra "SHT31 ERROR" con un código de error.

#### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_sht31.gif" style={{width:500, height:'auto'}}/></div>

La temperatura y la humedad se actualizan una vez por segundo en la pantalla. Sopla sobre el sensor y la lectura de humedad aumentará.

---

## Botones de usuario

La pantalla IPS de 1,14'' tiene **tres botones físicos pulsadores** conectados al XIAO ESP32-S3 Plus:

<div class="table-center">
  <table align="center">
    <tr><th>Botón</th><th>Pin</th><th>Lógica</th><th>Etiqueta serigrafiada</th><th>Pad de breakout</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>Activo en bajo (pulsado = LOW)</td><td>USR1</td><td>U1</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>Activo en bajo (pulsado = LOW)</td><td>USR2</td><td>U2</td></tr>
    <tr><td><strong>USR3</strong></td><td>D19</td><td>Activo en bajo (pulsado = LOW)</td><td>USR3</td><td>U3</td></tr>
  </table>
</div>

### Lectura de un botón

Los tres botones tienen resistencias pull-up externas de 1 KΩ en la placa, y el código de demostración además habilita los pull-ups internos del XIAO (`INPUT_PULLUP`). Una lectura simple por sondeo con anti-rebote se ve así:

```cpp
const int USR1 = D6;
const int USR2 = D7;
const int USR3 = D19;

void setup() {
  pinMode(USR1, INPUT_PULLUP);
  pinMode(USR2, INPUT_PULLUP);
  pinMode(USR3, INPUT_PULLUP);
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

### Anti-rebote con interrupciones

Para un manejo de botones con respuesta rápida y anti-rebote, puedes usar interrupciones GPIO con un breve retardo de estabilización:

```cpp
volatile bool btn1Flag = false;
volatile bool btn2Flag = false;
volatile bool btn3Flag = false;

void btn1Isr() { btn1Flag = true; }
void btn2Isr() { btn2Flag = true; }
void btn3Isr() { btn3Flag = true; }

void setup() {
  pinMode(D6, INPUT_PULLUP);
  pinMode(D7, INPUT_PULLUP);
  pinMode(D19, INPUT_PULLUP);
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

### Comportamiento predeterminado en el panel de fábrica

En el firmware de fábrica precargado, los botones se asignan de la siguiente manera (puedes sobrescribir esto en tu propio código):

<div class="table-center">
  <table align="center">
    <tr><th>Botón</th><th>Pin</th><th>Acción</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>Ciclar el brillo de la pantalla (100% → 75% → 50% → 25% → 0% → 100%)</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>Conmutar pantalla apagada / restaurar al último brillo</td></tr>
    <tr><td><strong>USR3</strong></td><td>D19</td><td>Conmutar el título de cabecera entre "Hello,XIAO!" y "Seeed"</td></tr>
  </table>
</div>

Los pads de breakout de los botones (etiquetados U1, U2 y U3 en la placa) reflejan D6, D7 y D19 respectivamente, lo que te permite conectar botones externos si lo deseas.

---

## Detección de voltaje de batería

Esta demostración lee el divisor de voltaje de batería integrado en **D16** y muestra dos lecturas amarillas en vivo en la pantalla IPS de 1,14'': el voltaje bruto del divisor D16 y el voltaje de batería calculado. Solo muestra lecturas de voltaje; no estima el porcentaje de batería ni informa del estado de carga.

**Ubicación del código:** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Cómo funciona

**Circuito de batería:**

El ESP32-S3 Plus lee el voltaje de la batería LiPo a través de un divisor de voltaje integrado conectado a **D16**:

<div class="table-center">
  <table align="center">
    <tr><th>Señal</th><th>Pin ESP32-S3</th><th>Función</th></tr>
    <tr><td><code>BAT_ADC</code></td><td><strong>D16</strong></td><td>Entrada analógica que lee el voltaje de batería dividido. Conectado internamente a un circuito divisor de voltaje (316K / 160K). <strong>No uses este pin externamente.</strong></td></tr>
  </table>
</div>

**Relación del divisor de voltaje:** R13 = 316 kΩ, R14 = 160 kΩ → **Relación del divisor = (316 + 160) / 160 ≈ 2,975**

**Lectura:**

El sketch inicializa la pantalla con `Board_XIAO_1inch14_LCD<13, 12>` y un `Config_XIAO_1inch14_LCD_ST7789_BGR` local al sketch (135×240, BGR, invert = true), luego muestrea **D16** doce veces (separadas 700 µs) usando `analogReadMilliVolts()` a resolución de 12 bits con atenuación de 11 dB. Promedia las muestras en el voltaje bruto del divisor, lo multiplica por la relación del divisor para obtener el voltaje de batería (`Calc = D16 × 2.975`) y dibuja ambos como dos líneas amarillas centradas. La pantalla solo se actualiza cuando cualquiera de los valores cambia en una cantidad significativa (D16 ≥ 0,02 V o Calc ≥ 0,05 V).

:::note
Ninguna señal de estado de carga está conectada a un GPIO del ESP32-S3. Esta demostración solo muestra lecturas de voltaje; no detecta la presencia de la batería ni el estado de carga, ni estima el porcentaje de batería.
:::

### Ejecución de la demostración

**Paso 1.** Abre `xiao_esp32s3_114_battery_status.ino` en Arduino IDE.

**Paso 2.** Selecciona **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** y el **Port** correcto.

**Paso 3.** Haz clic en **Upload**.

**Paso 4.** Observa la pantalla: muestra dos líneas amarillas, el voltaje bruto del divisor D16 y el voltaje de batería calculado. Conecta o desconecta una batería LiPo (o el cable USB-C) para ver cómo se actualizan los valores.

### Resultado esperado

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_battery_status_display.jpg" style={{width:300, height:'auto'}}/><br/><strong>Lectura de voltaje</strong> (D16 + Calc)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Conector de batería</strong> (parte trasera)</div></td>
    </tr>
  </table>
</div>

La pantalla muestra el voltaje bruto del divisor D16 en la línea superior y el voltaje de batería calculado (`Calc`) en la línea inferior. Con una batería LiPo conectada, `Calc` se aproxima al voltaje en los terminales de la batería. También puede aparecer una lectura solo con alimentación por USB, por lo que `Calc` por sí solo no puede confirmar si hay una batería conectada.

La demo también imprime una línea de diagnóstico en el Monitor Serie cada segundo, por ejemplo:

```
D16 1.39V | Calc 4.14V
```

---

## Recursos

- **🗃️[Archivos de diseño de PCB]** [XIAO 1.14'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.14%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[Esquemático]** [XIAO 1.14'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.14%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[Modelo 3D]** [XIAO 1.14'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.14%27%27%20IPS%20Display.step)
- **🖨️[Caja impresa en 3D]** [XIAO 1.14'' IPS Display Enclosure (by gokul)](https://www.printables.com/model/1843003-enclosure-for-xiao-114-ips-display-esp32nrf52840)
- **📄[Hoja de datos]** [1.14 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.14%20Inch%20Display%20Datasheet.pdf)
- **💾[Firmware de fábrica]** [XIAO 1.14'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.14%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)
- **[Demo]** [Código de demostración de la placa XIAO Display](https://github.com/Seeed-Projects/Display-Gadgets) — todas las demos de funciones están en el directorio `code_GFX2/Function/114_ESP32/`

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
