---
description: Taller de animación con XIAO Round Display
title: Guía de optimización de XIAO ESP32-S3 y LVGL
keywords:
  - XIAO
  - Round Display
  - LVGL
  - Animation
slug: /round_display_animation_workshop
last_update:
  date: 02/23/2026
  author: Sunil Pedapudi
createdAt: '2026-02-27'
updatedAt: '2026-02-27'
url: https://wiki.seeedstudio.com/es/round_display_animation_workshop/
---

# Taller de animación: guía de optimización de XIAO ESP32-S3 y LVGL

Bienvenido al Taller de Animación. Este tutorial te guiará por el proceso de tomar animaciones SVG básicas y optimizarlas para el ESP32-S3. Las optimizaciones te llevarán a través de cinco fases que muestran mejoras desde un entrecortado **7-9 FPS** hasta unos fluidos **30 FPS**.

En este taller, implementarás una aplicación que renderiza y anima tres recursos vectoriales: un **Hummingbird**, un **Raccoon** y una **Whale**. Aprenderás a manejar el renderizado SVG complejo en hardware con recursos limitados avanzando por fases de optimización progresiva.

<div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', alignItems: 'flex-start', margin: '20px 0'}}>
  <div style={{flex: 1, minWidth: '200px', maxWidth: '300px'}}>
    <img src="https://files.seeedstudio.com/wiki/round_display_animation_workshop/hb_screen.jpg" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}} alt="Hummingbird" />
    <p style={{textAlign: 'center', fontWeight: 'bold', marginTop: '8px'}}>Hummingbird</p>
  </div>
  <div style={{flex: 1, minWidth: '200px', maxWidth: '300px'}}>
    <img src="https://files.seeedstudio.com/wiki/round_display_animation_workshop/raccoon_screen.gif" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}} alt="Raccoon" />
    <p style={{textAlign: 'center', fontWeight: 'bold', marginTop: '8px'}}>Raccoon</p>
  </div>
  <div style={{flex: 1, minWidth: '200px', maxWidth: '300px'}}>
    <img src="https://files.seeedstudio.com/wiki/round_display_animation_workshop/whale_screen.gif" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}} alt="Whale" />
    <p style={{textAlign: 'center', fontWeight: 'bold', marginTop: '8px'}}>Whale</p>
  </div>
</div>

El código de ejemplo utiliza una [Seeed Studio XIAO ESP32-S3 Plus](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) y una [XIAO Round Display](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html).

### 🌐 El ecosistema
Este proyecto aprovecha una potente pila de código abierto diseñada para gráficos embebidos de alto rendimiento:
* **[ESP32-S3](https://www.espressif.com/en/products/socs/esp32-s3)**: Un MCU de doble núcleo con instrucciones vectoriales y 8MB de Octal PSRAM.
* **[ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/)**: El framework de desarrollo oficial para SoCs de Espressif.
* **[LVGL](https://lvgl.io/)**: La biblioteca de gráficos embebidos de código abierto más popular.
* **`lvgl_cpp`**: Un wrapper moderno en C++20 para LVGL que proporciona seguridad de tipos y abstracciones idiomáticas para objetos, animaciones y pantallas.

---

## Primeros pasos

### Requisitos previos
Antes de sumergirte en el código, asegúrate de tener un ecosistema de desarrollo para trabajar con ESP32. Este tutorial asume que tienes instaladas las siguientes herramientas:
* [Visual Studio Code](https://code.visualstudio.com/)
* [Espressif IDF Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=espressif.esp-idf-extension)

Sin embargo, no hay nada en este proyecto que te impida usar otras herramientas como [PlatformIO](https://platformio.org/) o la [interfaz de línea de comandos de ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/api-guides/tools/idf-cli.html).

### Paso 0:La comprobación "Hello World" (crucial)
Si eres nuevo en el ecosistema ESP32 con ESP-IDF, **no te saltes este paso**.
1. Abre VS Code y pulsa `F1`.
2. Escribe `ESP-IDF: Show Examples Projects`.
3. Selecciona `get-started` -> `blink` (o `hello_world`).
4. Compila, flashea y monitoriza el proyecto en tu dispositivo.

**¿Por qué?** Esto verifica que tu toolchain, los drivers USB y la conexión de hardware funcionan correctamente antes de introducir la complejidad de una biblioteca gráfica en C++.

### Paso 1a: Inicio rápido (clonar el taller)
Si prefieres no empezar desde cero, puedes clonar el repositorio completo del taller, que viene preconfigurado con todos los componentes y ajustes.

```bash
git clone https://github.com/pedapudi/lvgl_workshop.git
cd lvgl_workshop
git submodule update --init --recursive
```

Si eliges este camino, puedes saltar a **Paso 3 (Configuración)** para verificar tus ajustes, o ir directamente a compilar.

### Paso 1b: Crear un nuevo proyecto (desde cero)
Si quieres construir el proyecto tú mismo:
1. Abre de nuevo `ESP-IDF: Show Examples Projects`.
2. Elige `get-started` -> `sample_project`.
3. Haz clic en "Create project using example blink".

### Paso 2:Instalar `lvgl_cpp`
Instalaremos la biblioteca como un componente local. En la terminal de la raíz de tu proyecto:

```bash
mkdir -p components
cd components
git submodule add https://github.com/pedapudi/lvgl_cpp.git lvgl_cpp
git submodule update --init --recursive
```

> **Nota**: `lvgl_cpp` incluye un archivo `idf_component.yml` que descargará automáticamente la versión correcta de `lvgl/lvgl` (v9.x) desde el IDF Component Registry durante la primera compilación. No necesitas instalar LVGL manualmente.

### Paso 3:Configuración
Abre el menú de configuración del proyecto para habilitar C++20 y los ajustes óptimos:
1. Pulsa `F1` y ejecuta `ESP-IDF: SDK Configuration Editor (Menuconfig)`.
2. Navega a `Compiler options` -> `C++ Language Standard` y selecciona `C++20` (o `GNU++20`).
3. (Opcional pero recomendado) Establece `Compiler optimization level` en `Optimize for performance (-O2)`.

---

## 🛠️ Cómo seguir esta guía
Este taller utiliza un "software throttle" para simular limitaciones de hardware sin obligarte a recompilar constantemente el bootloader. Puedes cambiar los niveles de implementación de dos maneras:
1. **La forma del taller**: Usa `idf.py menuconfig` -> `Animation Workshop` para alternar entre las fases 1-5.
2. **La forma manual**: Modifica `#define WORKSHOP_PHASE` en `main/workshop_config.h`.

---

## 📊 Resumen de fases
El taller avanza a través de cuatro etapas de optimización, pasando de una implementación funcional ingenua a una utilización experta de la PSRAM.

| Fase | Título | Optimizaciones clave | Estrategia de búfer | Modo de renderizado |
| :--- | :--- | :--- | :--- | :--- |
| **Phase 1** | Línea base | CPU a 160MHz / SPI a 20MHz | 1x Frame completo (Interno) | Refresco completo |
| **Phase 2** | Fundación | CPU a 240MHz / SPI a 80MHz | 1x Frame completo (Interno) | Refresco completo |
| **Phase 3** | Paralelismo | Doble búfer | 2x Tira parcial (Interno) | Refresco parcial |
| **Phase 4** | Experto | Octal PSRAM / SIMD | 2x Frame completo (PSRAM) | Refresco parcial |
| **Phase 5** | Nativo | Driver nativo / SWAR SIMD | 2x Parcial grande (Interno) | Refresco parcial |

---

## Fase 1: La línea base (implementación ingenua)
**Objetivo:** Mostrar un SVG con una configuración mínima.

En esta fase, nos centramos en la corrección funcional. Usamos el motor **ThorVG** de LVGL para decodificar y renderizar rutas SVG. Sin embargo, como no hemos optimizado el sistema, la CPU es lenta (160MHz) y el modo de renderizado está configurado en **Full Refresh** (redibujar cada píxel en cada frame), lo que provoca una sobrecarga significativa.

### ⚙️ Configuración de ESP-IDF
Para lograr esta línea base en un proyecto de producción, deberías configurar:
- **Frecuencia de la CPU**: `CONFIG_ESP_DEFAULT_CPU_FREQ_MHZ=160` en `sdkconfig`.
- **Pila de la tarea LVGL**: Establécela como un parámetro en tu llamada a `xTaskCreate` (normalmente `8192`).
- **Bus de pantalla**: Establece `.pclk_hz = 20 * 1000 * 1000` (20MHz) en tu struct `esp_lcd_panel_io_spi_config_t`.
- **Optimización**: `CONFIG_COMPILER_OPTIMIZATION_DEFAULT` (-Og).

### 💻 Implementación
Configurar el hardware y la visualización del SVG en la Fase 1 requiere orquestar el driver de pantalla y la capa de portabilidad de LVGL.

**Inicialización de hardware y port (`app_main`):**
```cpp
// Initialize the GC9A01 SPI display
Gc9a01 display_hw(display_cfg);
display_hw.init();

// Initialize the LVGL porting layer with SRAM-only buffers
LvglPort::Config lvgl_config;
lvgl_config.malloc_caps = MALLOC_CAP_DMA | MALLOC_CAP_INTERNAL;
lvgl_config.double_buffered = false;

LvglPort lvgl_port(lvgl_config);
lvgl_port.init(display_hw.get_panel_handle(), display_hw.get_io_handle());
```

**Lógica de visualización SVG:**
```cpp
// 1. skip SVG header metadata to find the XML start tag
const char* raw_svg_ptr = hummingbird_svg;
while (*raw_svg_ptr && *raw_svg_ptr != '<') raw_svg_ptr++;

// 2. create an image descriptor for ThorVG
static lvgl::ImageDescriptor bird_dsc(75, 75, LV_COLOR_FORMAT_RAW,
 (const uint8_t*)raw_svg_ptr,
 strlen(raw_svg_ptr) + 1);

// 3. display the SVG on an image object
auto hummingbird = std::make_unique<lvgl::Image>(parent);
hummingbird->set_src(bird_dsc).center();
```

**Resultado:** ~9 FPS. El colibrí estático se renderiza correctamente y la animación del mapache se ejecuta sin bloquearse (aunque sigue siendo entrecortada). Sin embargo, la pila predeterminada de 8KB está peligrosamente cerca de desbordarse al escalar rutas complejas.

---

## Fase 2: Fundación de hardware
**Objetivo:** Maximizar las velocidades de reloj brutas del ESP32-S3.

El renderizado SVG es un "problema matemático". Al aumentar la frecuencia de la CPU, damos al motor vectorial más ciclos para calcular curvas Bézier.

### ⚡ La estrategia
1. **Impulso de CPU**: Aumentar la frecuencia de 160MHz a **240MHz**.
2. **Overclock de SPI**: Aumentar la velocidad de la autopista de la pantalla de 20MHz a **80MHz**.
3. **Potencia del compilador**: Habilitar las optimizaciones de rendimiento **-O3** para acelerar el motor matemático vectorial.

### ⚙️ Configuración de ESP-IDF
- **Velocidad de la CPU**: `CONFIG_ESP_DEFAULT_CPU_FREQ_MHZ=240` en `sdkconfig`.
- **Bus de pantalla**: `.pclk_hz = 80 * 1000 * 1000` (80MHz) en tu configuración SPI.
 > **Nota**: 80MHz es el límite absoluto para el bus SPI del S3. Velocidades superiores no están soportadas por el hardware, y velocidades inferiores causan un "tearing" visible porque el bus no puede seguir el ritmo de las actualizaciones de frame.
- **Nivel de optimización**: Establece `CONFIG_COMPILER_OPTIMIZATION_PERF=y` en tu configuración para habilitar `-O3`.
- **Corrección de bytes**: En tu `flush_cb`, implementa un bucle para intercambiar bytes de Little-Endian (CPU) a Big-Endian (LCD):
```cpp
void LvglPort::flush_cb(lv_display_t* disp, const lv_area_t* area, uint8_t* px_map) {
 auto* port = (LvglPort*)lv_display_get_user_data(disp);
 uint16_t* buf = (uint16_t*)px_map;
 uint32_t len = (area->x2 - area->x1 + 1) * (area->y2 - area->y1 + 1);

 for (uint32_t i = 0; i < len; i++) {
  uint16_t color = buf[i];
  buf[i] = (color << 8) | (color >> 8);
 }

 esp_lcd_panel_draw_bitmap(port->panel_handle_, area->x1, area->y1,
  area->x2 + 1, area->y2 + 1, buf);
}
```

**Resultado:** ~15 FPS. El movimiento es visiblemente más fluido en comparación con la Fase 1.

---

## Fase 3: Lógica en paralelo y doble búfer
**Objetivo:** Eliminar el "screen tearing" y desacoplar la CPU de la pantalla.

### ⚡ La estrategia
* **Doble búfer**: Asignamos **dos** búferes separados. Mientras el hardware DMA (Direct Memory Access) está enviando el Búfer A a la pantalla, la CPU puede empezar inmediatamente a dibujar en el Búfer B.
* **Impulso de pila**: Aumentamos la pila de la tarea de LVGL a **64KB**. Los gráficos vectoriales usan recursión; una pila de 8KB se desbordará y se bloqueará al escalar recursos complejos.

### ⚙️ Configuración de ESP-IDF
- **DMA habilitado**: Asegúrate de que se use `MALLOC_CAP_DMA` durante la asignación del búfer.
- **Búferes de LVGL**: Al llamar a `lv_display_set_buffers`, proporciona dos punteros en lugar de uno.
- **Modo de búfer**: Establece `LV_DISPLAY_RENDER_MODE_PARTIAL`.

### 💻 Implementación
Pasar a la Fase 3 requiere habilitar el doble búfer y aumentar la pila de la tarea para evitar desbordamientos de pila durante el escalado complejo de SVG.

**Asignación de doble búfer:**
```cpp
// Allocate two strike buffers in internal memory
lvgl_config.double_buffered = true;
lvgl_config.render_mode = LV_DISPLAY_RENDER_MODE_PARTIAL;

// Use small strip buffers (usually 1/10th or 1/20th of the screen)
// to fit both buffers in fast internal SRAM.
lvgl_config.full_frame = false;
```

**Impulso de pila seguro para recursión:**
```cpp
// Increasing from 8KB (Standard) to 64KB (Vector-Safe)
lvgl_config.task_stack_size = 65536;
```

**Resultado:** ~9 FPS (¡regresión!).

### 🧠 Análisis profundo: Penalización por "tiling"
¿Por qué añadir paralelismo a veces hace que la animación sea *más lenta*?

1. **Fase 2 (Fotograma completo)**: El motor ThorVG calcula la ruta vectorial **una vez** por fotograma para toda la imagen de 240x240.
2. **Fase 3 (Tiras parciales)**: Debido a que estamos usando doble búfer en una SRAM limitada, solo podemos alojar búferes pequeños (por ejemplo, 20 líneas). Esto obliga a ThorVG a ejecutar su bucle de cálculo **12 veces** (una por cada tira) para generar la imagen completa.

Esta sobrecarga de recalcular la geometría vectorial 12 veces supera ampliamente el beneficio de la transferencia DMA en paralelo, lo que resulta en un FPS total más bajo (~9 FPS frente a ~15 FPS). Este es el clásico compromiso entre "Cómputo vs. Ancho de banda". Lo resolvemos en la **Fase 4**.

---

## Fase 4: Optimización experta (el secreto de 26 FPS)
**Objetivo:** Eliminar la "Tiling Overhead" usando una gran PSRAM octal.

### ⚡ La estrategia
1. **Búferes de fotograma completo**: Movemos los búferes a la **octal PSRAM** de 8MB y los aumentamos a un **fotograma completo** (240x240 píxeles).
 * *La ganancia*: ThorVG renderiza el mapache en una **sola pasada**. Aunque la PSRAM es ligeramente más lenta que la SRAM, evitar la recalculación 12x es una gran ventaja.
2. **Intrínsecos Xtensa**: Reemplazamos el bucle de intercambio manual con `__builtin_bswap16`, una instrucción de hardware que intercambia bits en un **solo ciclo**.

### ⚙️ Configuración de ESP-IDF
- **Inicialización de PSRAM**: `CONFIG_SPIRAM=y`, `CONFIG_SPIRAM_MODE_OCT=y`, `CONFIG_SPIRAM_SPEED_80M=y`.
- **Capacidades de memoria**: Usa `MALLOC_CAP_DMA | MALLOC_CAP_SPIRAM` para la asignación del búfer de 115KB.
- **Potencia del compilador**: Habilita `CONFIG_COMPILER_OPTIMIZATION_PERF=y` y `CONFIG_COMPILER_OPTIMIZATION_LTO=y`.

**Resultado:** **~25 FPS**. Animación SVG fluida y de alta fidelidad.

### 🧠 Análisis profundo: Intrínsecos de hardware explícitos
La parte más costosa del flujo de renderizado es el **Flush Callback**. Para cada fotograma, debemos intercambiar los bytes de cada píxel (corrección de endianness) e invertir colores (requisito del panel LCD).

En lugar de un bucle matemático estándar en C, la Fase 4 usa:
```cpp
buf[i] = __builtin_bswap16(buf[i]);
```
* **`__builtin_bswap16`**: Este es un intrínseco del compilador que le indica a la CPU que use una instrucción de hardware dedicada (`BE`) para intercambiar bytes en un solo ciclo de reloj.
* **⚠️ NO es una trampa (`~`)**: Puedes ver ejemplos que usan `~__builtin_bswap16()`. Esto se usa para paneles LCD "Active-Low" que requieren inversión bit a bit para mostrar los colores correctamente. Si tus colores se ven como un "negativo fotográfico", elimina el operador `~`.

**Nota:** Durante la implementación de la Fase 1, usar la inversión `~` en paneles GC9A01 estándar a menudo da como resultado colores invertidos. Verifica siempre el nivel lógico de tu panel antes de aplicar negación bit a bit en el bucle de "flush".

---


## Fase 5: Arquitectura nativa (el estándar de 30+ FPS)
**Objetivo:** Búferes SRAM "Large Partial" y cambio de bits SWAR de 32 bits.

Aunque la **Fase 4** forzó el rendimiento usando enormes búferes en PSRAM, introdujo latencia debido a los estados de espera de la memoria externa. La **Fase 5** alcanza el **hito de 30+ FPS** cambiando a una arquitectura de tipo "Mobile-Grade": usando búferes de **SRAM interna** de alta velocidad pero haciéndolos lo suficientemente grandes como para minimizar la sobrecarga de "tiling".

### ⚡ La estrategia: Arquitectura "Mobile-Grade"
1. **Búferes "Large Partial"**: Asignamos búferes de **1/2 pantalla** (240x120) en la SRAM interna. Esto logra lo mejor de ambos mundos: mayor ancho de banda que la PSRAM y solo un multiplicador de "tiling" de 2x (en comparación con 12x en la Fase 3).
2. **Procesamiento SWAR de 32 bits**: Implementamos **SIMD-within-a-Register (SWAR)** en la lógica de "flush" del controlador. Esto nos permite intercambiar e invertir dos píxeles (32 bits) en el mismo tiempo que antes tomaba hacer un píxel (16 bits) usando intrínsecos estándar.
3. **Desanclaje de núcleo**: Al eliminar el anclaje de tareas (`tskNO_AFFINITY`), permitimos que el planificador de FreeRTOS sature los dos núcleos de la S3: un núcleo puede manejar el pesado rasterizado de ThorVG mientras el otro atiende las interrupciones de SPI DMA de alta frecuencia.

### 🚀 Aceleración: parche SIMD
Además de las optimizaciones en C++, confiamos en un acelerador de hardware crítico: el `lvgl_s3_simd_patch`.

* **Problema:** LVGL por defecto usa bucles C genéricos para la mezcla de píxeles. En el ESP32, esto es lento porque procesa un píxel a la vez (ineficiente) o usa optimizaciones genéricas del compilador que no aprovechan instrucciones específicas de la plataforma.
* **Solución:** Inyectamos rutinas en **ensamblador ESP32-S3** escritas a mano (macros como `lv_color_blend_to_rgb565_esp`) que aprovechan las capacidades SIMD (Single Instruction, Multiple Data) del Xtensa LX7.

**Configuración:**
Esto se controla mediante `sdkconfig`:
```properties
CONFIG_LV_USE_DRAW_SW_ASM=255
```

:::note
**Global vs. Fase 5**: Este ajuste está **activo globalmente** para todas las fases del taller (1-5). Sin embargo, probablemente no notarás su impacto hasta la **Fase 5**.

**¿Por qué?** En la Fase 4 (PSRAM), la CPU está constantemente detenida esperando a que la memoria llegue desde el chip de RAM externa. La rutina en ensamblador es rápida, ¡pero no puede ejecutarse si no tiene datos! En la **Fase 5 (SRAM interna)**, el ancho de banda de memoria finalmente es lo suficientemente rápido como para alimentar la canalización SIMD, permitiendo que las optimizaciones en ensamblador brillen.
:::

**Cómo funciona:**
1. **Inyección de cabecera**: El componente `lvgl_s3_simd_patch` se fuerza a sí mismo en la ruta de inclusión de LVGL.
2. **Superposición de macros**: Redefine macros estándar (por ejemplo, `LV_DRAW_SW_COLOR_BLEND_TO_RGB565`) para que apunten a nuestras funciones "shim" personalizadas.
3. **Magia del enlazador**: Usa banderas `-u symbol` para forzar al enlazador a incluir los objetos en ensamblador, asegurando que no se eliminen por optimización.

---

### 💻 Bucle SWAR de 32 bits
El ingrediente secreto de la Fase 5 es la optimización **SIMD-Within-A-Register (SWAR)**.
El procesamiento estándar de píxeles maneja un píxel de 16 bits a la vez. Al convertir el búfer a `uint32_t*`, podemos procesar **dos píxeles** por ciclo de CPU.

**Intuición:**
Necesitamos intercambiar bytes (`RGB565` -> `BGR565`) para dos píxeles empaquetados en un entero de 32 bits `0xAABBCCDD`.
* Objetivo: `0xBBAADDCC`
* Máscara 1 (`0xFF00FF00`): Aísla `AA` y `CC`.
* Máscara 2 (`0x00FF00FF`): Aísla `BB` y `DD`.
* Desplazar y OR: Los mueve a las posiciones correctas simultáneamente.

**Implementación (`esp32_spi.cpp`):**
```cpp
// 1. Cast 16-bit buffer to 32-bit pointer for 2x throughput
uint32_t* buf32 = reinterpret_cast<uint32_t*>(buf);
size_t len32 = len / 2; // Process 2 pixels at once

// 2. Define the SWAR lambda
auto swap_two_pixels = [](uint32_t v) {
 // 0xAABBCCDD -> 0xBBAADDCC
 return ((v & 0xFF00FF00) >> 8) |
        ((v & 0x00FF00FF) << 8);
};

// 3. Unrolled loop (8x) to maximize pipeline usage
// This processes 16 pixels per loop iteration!
size_t i = 0;
for (; i < len32 - 8; i += 8) {
 buf32[i + 0] = swap_two_pixels(buf32[i + 0]);
 buf32[i + 1] = swap_two_pixels(buf32[i + 1]);
 buf32[i + 2] = swap_two_pixels(buf32[i + 2]);
 buf32[i + 3] = swap_two_pixels(buf32[i + 3]);
 buf32[i + 4] = swap_two_pixels(buf32[i + 4]);
 buf32[i + 5] = swap_two_pixels(buf32[i + 5]);
 buf32[i + 6] = swap_two_pixels(buf32[i + 6]);
 buf32[i + 7] = swap_two_pixels(buf32[i + 7]);
}

// 4. Handle remaining pixels
for (; i < len32; i++) {
 buf32[i] = swap_two_pixels(buf32[i]);
}
```

### 🧠 Análisis profundo: ¿Por qué usar un búfer parcial grande es más rápido?
Parece contraintuitivo que los **búferes parciales (Fase 5)** sean más rápidos que el **fotograma completo (Fase 4)**.

* **Fase 4 (PSRAM)**:
 * **Pros**: 1x pasada de renderizado. 0x sobrecarga de "tiling".
 * **Contras**: Las escrituras en PSRAM son ~3-4x más lentas que en SRAM. La CPU pasa una cantidad significativa de tiempo esperando el bus SPI.
* **Fase 5 (SRAM interna)**:
 * **Pros**: Las escrituras en SRAM son casi instantáneas (comparativamente).
 * **Contras**: 2x pasadas de renderizado (mitad superior, mitad inferior).
* **Veredicto**: Para el ESP32-S3 @ 240MHz, el coste de **una pasada extra de renderizado SVG** es *menor* que el coste de escribir 115KB de datos en la PSRAM externa. Este es un hallazgo arquitectónico crítico: **el ancho de banda de memoria a menudo importa más que los ciclos de cómputo.**

**Resultado:** **~30 FPS**. Animación fluida que alcanza los límites del bus SPI de la XIAO Round Display.

---

## 🎨 El motor de animación

Nuestra interfaz no solo muestra imágenes estáticas; reproduce movimiento de alta fidelidad a partir de especificaciones SVG usando `lvgl_cpp`. Aunque el motor de renderizado SVG de LVGL, ThorVG, no admite etiquetas de animación en SVG, este taller aún aprovecha `lvgl::Animation` para animar los SVG. Esta es una utilidad útil para animación y, para los fines de este taller, genera una carga intensiva de CPU para mostrar el rendimiento de las fases del taller.

### El puente SVG-a-LVGL
Las animaciones SVG a menudo usan curvas "Cubic Bezier" (definidas como `keySplines`) para un movimiento fluido. LVGL tiene un motor Bezier integrado, pero tradicionalmente se usa para "easing" interno.

Hemos expuesto esta lógica de forma nativa en `lvgl_cpp` para que puedas usar puntos de control SVG estándar directamente en tu código C++:

```cpp
// From main/ui/workshop_ui.cpp
// ANIMATION: FLAPPING (SVG keySpline="0.25 0.1 0.25 1.0")
a1.set_var(bird_dsc)
 .set_values(0, 7)
 .set_duration(150)
 // ...
 // Explicitly using the SVG cubic bezier curve
 .set_path_cb(lvgl::Animation::Path::CubicBezier(256, 102, 256, 1024));
```
*Nota: Los puntos de control (0.25, 0.1, etc.) se asignan al rango entero 0..1024 utilizado por el motor de matemáticas de punto fijo de LVGL.*

### 🧪 Análisis detallado de la configuración: sdkconfig.defaults
Para animaciones de alto rendimiento, tu `sdkconfig` es tan importante como tu código. Aquí está el desglose de los ajustes utilizados en este taller:

| Configuración | Valor | Propósito |
| :--- | :--- | :--- |
| **`CONFIG_ESP_CONSOLE_USB_SERIAL_JTAG`** | `y` | **Crucial**: Descarga el registro (logging) al hardware dedicado del S3. Esto libera los **GPIO 43/44** en el XIAO S3 Plus, que de otro modo están cableados al UART0 de consola y entran en conflicto con los pines de pantalla/táctil en la Seeed XIAO Round Display. |
| **`CONFIG_ESP_DEFAULT_CPU_FREQ_MHZ_240`** | `y` | Establece el reloj de la CPU a su máximo. El renderizado vectorial es matemáticas puras; cada MHz cuenta. |
| **`CONFIG_COMPILER_OPTIMIZATION_PERF`** | `y` | Habilita las optimizaciones **`-O3`**. Esto indica al compilador que priorice la velocidad de ejecución sobre el tamaño del binario (esencial para los bucles complejos de ThorVG). |
| **`CONFIG_COMPILER_OPTIMIZATION_LTO`** | `y` | Habilita la **optimización en tiempo de enlace (link time optimization)**. Esto permite al compilador optimizar *entre* archivos fuente, potencialmente insertando en línea tu `flush_cb` directamente en el bucle de renderizado del motor. |
| **`CONFIG_SPIRAM`** | `y` | Habilita la PSRAM externa de 8MB. Sin esto, estás limitado a ~320KB de RAM interna, lo que hace imposible el almacenamiento en búfer de fotogramas completos. |
| **`CONFIG_SPIRAM_MODE_OCT`** | `y` | Configura la PSRAM en **modo octal** (8 líneas de datos). Esto proporciona el enorme ancho de banda necesario para que la CPU lea/escriba fotogramas de 240x240 píxeles sin tartamudeos. |
| **`CONFIG_LV_USE_THORVG`** | `y` | Habilita el motor vectorial C++ de alto rendimiento utilizado por LVGL para el renderizado SVG. |
| **`CONFIG_LV_CACHE_DEF_SIZE`** | `2097152` | Asigna una **caché de imágenes de 2MB** en PSRAM. Esto básicamente "recuerda" los fotogramas renderizados, convirtiendo las costosas matemáticas vectoriales en simples copias de memoria para fotogramas estáticos o repetidos. |

---

## 📊 Resumen final de rendimiento
| Fase | Optimización | FPS objetivo | Enfoque principal |
| :--- | :--- | :--- | :--- |
| **Fase 1** | Línea base | ~9 FPS | SPI 20MHz / Refresco completo |
| **Fase 2** | Fundamentos | ~15 FPS | CPU 240MHz / SPI 80MHz |
| **Fase 3** | Paralelismo | ~9 FPS (¡Regresión!) | Doble búfer / DMA |
| **Fase 4** | Ajuste experto | ~25 FPS | PSRAM / Búferes de fotograma completo |
| **Fase 5** | **Nativo** | **~30 FPS** | **SRAM interna / SWAR de 32 bits / SIMD** |

---

### Nota final
En una aplicación de producción, podrías apuntar a los parámetros de la **Fase 5** desde el primer día. El "viaje" es para enseñar, pero el destino es siempre la **arquitectura nativa** en el ESP32-S3. Los archivos fuente contienen comentarios pedagógicos extensos para explicar por qué se eligieron ciertos patrones de C++.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
