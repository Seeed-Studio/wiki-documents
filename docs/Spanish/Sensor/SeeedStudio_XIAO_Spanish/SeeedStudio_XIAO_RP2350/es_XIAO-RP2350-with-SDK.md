---
description: "Uso de Pico SDK en XIAO RP2350 "
title: XIAO RP2350 de Seeed Studio con C/C++ SDK
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao-rp2350-c-cpp-sdk
sidebar_position: 4
last_update:
    date: 2024-08-14T06:27:29.006Z
    author: Guillermo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introducción

El Seeed Studio XIAO RP2350, impulsado por el microcontrolador RP2350, ofrece un rendimiento robusto en un formato pequeño. Esta guía proporciona los pasos esenciales para configurar y usar el SDK de C/C++ con el XIAO RP2350.

## Requisitos previos

Antes de comenzar, asegúrate de tener lo siguiente:

- Un ordenador con Windows, macOS o Linux.
- Un cable USB para conectar el XIAO RP2350 a tu ordenador.
- Conocimientos básicos de programación en C/C++.

## Guía de instalación a través de Vscode

:::info
Para aquellos que prefieren la experiencia de desarrollo nativa, explora la [Documentación del SDK C/C++ de Raspberry Pi Pico](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf) o el [SDK de Raspberry Pi Pico en GitHub](https://github.com/raspberrypi/pico-sdk).
:::

Para una experiencia más fácil y fluida con la programación SDK, especialmente para aquellos nuevos en este campo, puedes instalar la extensión [Raspberry Pi Pico](https://marketplace.visualstudio.com/items?itemName=raspberry-pi.raspberry-pi-pico) para Visual Studio Code (VSCode).

Esta extensión simplifica el proceso de configuración guiándote a través de las instalaciones necesarias del conjunto de herramientas, evitando la necesidad de instalar cada herramienta individualmente. Sin embargo, aún necesitarás asegurarte de que tu sistema cumpla con los requisitos de la plataforma: Windows x64, macOS (Sonoma o versiones posteriores), Linux x64 o arm64.

Para obtener instrucciones de instalación detalladas adaptadas a tu sistema operativo, consulta la página de [Raspberry Pi Pico Extension for VSCode](https://marketplace.visualstudio.com/items?itemName=raspberry-pi.raspberry-pi-pico).

#### Paso 1: Instalar la extensión

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/0-install-pico-extension.png" style={{width:500, height:'auto'}}/>
<div style={{ marginTop: '-8px' }}><em>Install Extension on VSCode</em></div>
<br></br>
</div>

#### Paso 2: Crear un nuevo proyecto

Una vez que la página se cargue, podrás ver el contenido necesario.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/1-new-example-project.png" style={{width:500, height:'auto'}}/>
<div style={{ marginTop: '-8px' }}><em>Crea un nuevo proyecto a partir de los ejemplos</em></div>
<br></br>
</div>

Intenta crear un proyecto a través de **`Nuevo Proyecto desde Ejemplos`**.

#### Paso 3: Configurar tu proyecto

- **Nombre:** Generalmente, este será el nombre del proyecto de ejemplo; en este caso, elegiremos el proyecto `blink`.
- **Tipo de placa:** `Pico 2`
- **Ubicación:** Elige dónde deseas almacenar tu proyecto XIAO RP2350.
- **Versión del SDK:** Debe ser la versión `v2.0.0` o posterior.
- **Depurador:** Si planeas usar la interfaz de depuración SWD, marca la opción **Depurador SWD** para habilitar la depuración más adelante.

<Tabs>
<TabItem value="c1" label="Configure project">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/2-create-blink-project.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value="c2" label="Adavanced Options">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/3-advanced-options.png" style={{width:500, height:'auto'}}/></div>

Si deseas ajustar la configuración de tu herramienta y evitar descargar recursos redundantes, revisa las **Opciones avanzadas**. Aquí, puedes especificar las rutas para herramientas como Ninja y CMake. Si no has instalado previamente CMake o un entorno de Python, o si prefieres no preocuparte por ello, puedes omitir este paso.

En este ejemplo, utilizaré las versiones del sistema ya instaladas en mi máquina con Windows y agregadas al PATH del sistema. Por lo tanto, selecciono **Usar la versión del sistema**.

</TabItem>
</Tabs>

Si es la primera vez que ejecutas la configuración, al hacer clic en **Crear**, la extensión descargará y gestionará el SDK por ti. En Windows, el SDK generalmente se colocará en `%userprofile%\.pico-sdk`. El tiempo que tome configurar depende de la velocidad de tu conexión a Internet. Una vez completado, se abrirá una nueva ventana con tu proyecto.

#### Paso 4: Compilar el Proyecto

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/4-blink-example-created.png" style={{width:500, height:'auto'}}/></div>

:::caution Attention

"La primera vez que configures tu proyecto, necesitarás modificar manualmente el tipo de placa en el proyecto CMake porque la extensión no incluye la placa XIAO RP2350 por defecto. Establece la placa como `seeed_xiao_rp2350` como se muestra a continuación:" 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/set-xiao-rp2350-board.png" style={{width:500, height:'auto'}}/></div>

"**Después de modificar el tipo de placa, limpia la carpeta `build`** para asegurarte de que utilice la configuración correcta de la placa desde `%userprofile%/.pico-sdk/sdk/2.0.0/src/boards/include/boards/seeed_xiao_rp2350.h`. Luego, escribe los siguientes comandos para generar la caché de CMake en la carpeta de construcción:"
```shell
cmake .. # en la carpeta de compilación
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/get-cmake-cache.png" style={{width:500, height:'auto'}}/></div>

Esto permitirá que la tarea de compilación de la extensión funcione correctamente.

:::

<Tabs>
<TabItem value="compile" label="Compile Project">

Ahora puedes presionar el botón **Compilar** para construir el proyecto. Esto generará el archivo `blink.uf2` en la carpeta `build`, el cual puedes arrastrar y soltar en la unidad RP2350 reconocida por tu computadora.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/5-compile-project.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value="run" label="Run Project">

Si tu dispositivo está en modo BOOT, puedes presionar el botón **Ejecutar** para compilar y copiar automáticamente el archivo `.uf2` al RP2350, eliminando la necesidad de arrastrar y soltar el archivo manualmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/6-run-project.png" style={{width:500, height:'auto'}}/></div>

</TabItem>
</Tabs>

Acabamos de configurar el entorno de desarrollo y crear con éxito un nuevo proyecto utilizando la extensión de Raspberry Pi Pico para VSCode. Con el proyecto listo y tus herramientas configuradas, puedes compilar y ejecutar fácilmente tu código en el XIAO RP2350, agilizando tu proceso de desarrollo.

## Ejemplo 1: Parpadeo de LED

Para demostrar el uso básico del SDK, el siguiente ejemplo detalla cómo programar el LED integrado para que parpadee:

```c title="blink.c"
#include "pico/stdlib.h"

const int sleep_time = 250;

int main() {
    const uint LED_PIN = PICO_DEFAULT_LED_PIN; // GPIO25
    gpio_init(LED_PIN);
    gpio_set_dir(LED_PIN, GPIO_OUT);
    while (true) {
        gpio_put(LED_PIN, 1);
        sleep_ms(sleep_time);
        gpio_put(LED_PIN, 0);
        sleep_ms(sleep_time);
    }
}
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-blink.gif" style={{width:400, height:'auto', "border-radius": '12.8px'}}/></div>

## Ejemplo 2: RGB Blink

<Tabs>
<TabItem value="ws2812.c" label="ws2812.c">

```c
/**
 * Copyright (c) 2020 Raspberry Pi (Trading) Ltd.
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

#include <stdio.h>
#include <stdlib.h>

#include "pico/stdlib.h"
#include "hardware/pio.h"
#include "hardware/clocks.h"
#include "ws2812.pio.h"

#define IS_RGBW true
#define NUM_PIXELS 1

#ifdef PICO_DEFAULT_WS2812_PIN
#define WS2812_PIN PICO_DEFAULT_WS2812_PIN
#else
// Se usa el pin 2 por defecto si la placa no tiene un pin WS2812 por defecto definido
#define WS2812_PIN 22
#endif

static inline void put_pixel(uint32_t pixel_grb) {
    pio_sm_put_blocking(pio0, 0, pixel_grb << 8u);
}

static inline uint32_t urgb_u32(uint8_t r, uint8_t g, uint8_t b) {
    return
            ((uint32_t) (r) << 8) |
            ((uint32_t) (g) << 16) |
            (uint32_t) (b);
}

void pattern_snakes(uint len, uint t) {
    for (uint i = 0; i < len; ++i) {
        uint x = (i + (t >> 1)) % 64;
        if (x < 10)
            put_pixel(urgb_u32(0xff, 0, 0));
        else if (x >= 15 && x < 25)
            put_pixel(urgb_u32(0, 0xff, 0));
        else if (x >= 30 && x < 40)
            put_pixel(urgb_u32(0, 0, 0xff));
        else
            put_pixel(0);
    }
}

void pattern_random(uint len, uint t) {
    if (t % 8)
        return;
    for (int i = 0; i < len; ++i)
        put_pixel(rand());
}

void pattern_sparkle(uint len, uint t) {
    if (t % 8)
        return;
    for (int i = 0; i < len; ++i)
        put_pixel(rand() % 16 ? 0 : 0xffffffff);
}

void pattern_greys(uint len, uint t) {
    int max = 100; // ¡no dibujemos demasiada corriente!
    t %= max;
    for (int i = 0; i < len; ++i) {
        put_pixel(t * 0x10101);
        if (++t >= max) t = 0;
    }
}

typedef void (*pattern)(uint len, uint t);
const struct {
    pattern pat;
    const char *name;
} pattern_table[] = {
        {pattern_snakes,  "¡Serpientes!"},
        {pattern_random,  "Datos aleatorios"},
        {pattern_sparkle, "Destellos"},
        {pattern_greys,   "Grises"},
};

int main() {
    //set_sys_clock_48();
    stdio_init_all();

    const int RGB_POWER = 23;
    gpio_init(RGB_POWER);
    gpio_set_dir(RGB_POWER, GPIO_OUT);
    gpio_put(RGB_POWER, 1);

    printf("Prueba de humo WS2812, usando el pin %d", WS2812_PIN);

    // todo obtener sm libre
    PIO pio = pio0;
    int sm = 0;
    uint offset = pio_add_program(pio, &ws2812_program);

    ws2812_program_init(pio, sm, offset, WS2812_PIN, 800000, IS_RGBW);

    int t = 0;
    while (1) {
        int pat = rand() % count_of(pattern_table);
        int dir = (rand() >> 30) & 1 ? 1 : -1;
        puts(pattern_table[pat].name);
        puts(dir == 1 ? "(adelante)" : "(atrás)");
        for (int i = 0; i < 1000; ++i) {
            pattern_table[pat].pat(NUM_PIXELS, t);
            sleep_ms(10);
            t += dir;
        }
    }
}
```
</TabItem>
<TabItem value="ws2812.pio" label="ws2812.pio">

```assembly
;
; Copyright (c) 2020 Raspberry Pi (Trading) Ltd.
;
; SPDX-License-Identifier: BSD-3-Clause
;

.program ws2812
.side_set 1

.define public T1 2
.define public T2 5
.define public T3 3

.lang_opt python sideset_init = pico.PIO.OUT_HIGH
.lang_opt python out_init     = pico.PIO.OUT_HIGH
.lang_opt python out_shiftdir = 1

.wrap_target
bitloop:
    out x, 1       side 0 [T3 - 1] ; Side-set still takes place when instruction stalls
    jmp !x do_zero side 1 [T1 - 1] ; Branch on the bit we shifted out. Positive pulse
do_one:
    jmp  bitloop   side 1 [T2 - 1] ; Continue driving high, for a long pulse
do_zero:
    nop            side 0 [T2 - 1] ; Or drive low, for a short pulse
.wrap

% c-sdk {
#include "hardware/clocks.h"

static inline void ws2812_program_init(PIO pio, uint sm, uint offset, uint pin, float freq, bool rgbw) {

    pio_gpio_init(pio, pin);
    pio_sm_set_consecutive_pindirs(pio, sm, pin, 1, true);

    pio_sm_config c = ws2812_program_get_default_config(offset);
    sm_config_set_sideset_pins(&c, pin);
    sm_config_set_out_shift(&c, false, true, rgbw ? 32 : 24);
    sm_config_set_fifo_join(&c, PIO_FIFO_JOIN_TX);

    int cycles_per_bit = ws2812_T1 + ws2812_T2 + ws2812_T3;
    float div = clock_get_hz(clk_sys) / (freq * cycles_per_bit);
    sm_config_set_clkdiv(&c, div);

    pio_sm_init(pio, sm, offset, &c);
    pio_sm_set_enabled(pio, sm, true);
}
%}

.program ws2812_parallel

.define public T1 2
.define public T2 5
.define public T3 3

.wrap_target
    out x, 32
    mov pins, !null [T1-1]
    mov pins, x     [T2-1]
    mov pins, null  [T3-2]
.wrap

% c-sdk {
#include "hardware/clocks.h"

static inline void ws2812_parallel_program_init(PIO pio, uint sm, uint offset, uint pin_base, uint pin_count, float freq) {
    for(uint i=pin_base; i<pin_base+pin_count; i++) {
        pio_gpio_init(pio, i);
    }
    pio_sm_set_consecutive_pindirs(pio, sm, pin_base, pin_count, true);

    pio_sm_config c = ws2812_parallel_program_get_default_config(offset);
    sm_config_set_out_shift(&c, true, true, 32);
    sm_config_set_out_pins(&c, pin_base, pin_count);
    sm_config_set_set_pins(&c, pin_base, pin_count);
    sm_config_set_fifo_join(&c, PIO_FIFO_JOIN_TX);

    int cycles_per_bit = ws2812_parallel_T1 + ws2812_parallel_T2 + ws2812_parallel_T3;
    float div = clock_get_hz(clk_sys) / (freq * cycles_per_bit);
    sm_config_set_clkdiv(&c, div);

    pio_sm_init(pio, sm, offset, &c);
    pio_sm_set_enabled(pio, sm, true);
}
%}
```
</TabItem>

<TabItem value="ws2812-cmake" label="CMakeLists.txt">

Copia el siguiente fragmento y añádelo a tu archivo `CMakeLists.txt`.

```cmake title="CMakeLists.txt"
project(pio_ws2812 C CXX ASM)

# Inicializa el SDK de Raspberry Pi Pico
pico_sdk_init()

# Agrega un objetivo ejecutable para pio_ws2812
add_executable(pio_ws2812)

# Crea un directorio para los archivos generados
file(MAKE_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/generated)

# Genera el archivo de cabecera PIO desde ws2812.pio
pico_generate_pio_header(pio_ws2812 ${CMAKE_CURRENT_LIST_DIR}/ws2812.pio OUTPUT_DIR ${CMAKE_CURRENT_LIST_DIR}/generated)

# Agrega el archivo fuente al objetivo pio_ws2812
target_sources(pio_ws2812 PRIVATE ws2812.c)

# Enlaza las bibliotecas necesarias al objetivo pio_ws2812
target_link_libraries(pio_ws2812 PRIVATE pico_stdlib hardware_pio)

# Genera formatos de salida adicionales (por ejemplo, UF2, BIN)
pico_add_extra_outputs(pio_ws2812)

# Opcionalmente, genera un archivo Python desde el ensamblaje PIO para análisis o documentación adicionales
add_custom_command(OUTPUT ${CMAKE_CURRENT_LIST_DIR}/generated/ws2812.py
    DEPENDS ${CMAKE_CURRENT_LIST_DIR}/ws2812.pio
    COMMAND pioasm -o python ${CMAKE_CURRENT_LIST_DIR}/ws2812.pio ${CMAKE_CURRENT_LIST_DIR}/generated/ws2812.py
    VERBATIM)
add_custom_target(pio_ws2812_datasheet DEPENDS ${CMAKE_CURRENT_LIST_DIR}/generated/ws2812.py)
add_dependencies(pio_ws2812 pio_ws2812_datasheet)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/11-ws2812-rgb-cmake.png" style={{width:500, height:'auto'}}/></div>

</TabItem>
</Tabs>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/rp2350-rgb.gif" style={{width:240, height:'auto', "border-radius": '12.8px' }}/></div>

## Ejemplo 3: UART print

:::tip USB Serial
Si deseas habilitar la salida de `printf` a tu computadora a través de USB, necesitarás configurar el archivo `CMakeLists.txt` de tu proyecto añadiendo la siguiente línea:

```cmake
pico_enable_stdio_usb(your_project_name 1)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/10-cmake-usb-enabled.png" alt="CMake USB Enabled" style={{width:400, height:'auto'}}/></div>

Además, asegúrate de inicializar la entrada/salida estándar en tu código añadiendo `stdio_init_all();` en tu función principal.

:::

```c title="hello_uart.c"
#include "hardware/uart.h"
#include "pico/stdlib.h"
#include <pico/stdio.h>
#include <pico/time.h>
#include <stdio.h>

#define UART_ID uart0
#define BAUD_RATE 115200

// Estamos usando los pines 0 y 1, pero consulta la tabla de selección de funciones GPIO en el
// datasheet para obtener información sobre qué otros pines pueden usarse.
#define UART_TX_PIN 0
#define UART_RX_PIN 1

int main() {
   stdio_init_all();
  // Configuramos nuestro UART con la velocidad requerida.
  uart_init(UART_ID, BAUD_RATE);

  // Establecemos los pines TX y RX usando la selección de función en los GPIO
  // Consulta el datasheet para más información sobre la selección de función
  gpio_set_function(UART_TX_PIN, UART_FUNCSEL_NUM(UART_ID, UART_TX_PIN));
  gpio_set_function(UART_RX_PIN, UART_FUNCSEL_NUM(UART_ID, UART_RX_PIN));

  // Usamos algunas de las funciones UART para enviar datos
  // En un sistema por defecto, printf también saldrá a través del UART predeterminado

  // Enviar un carácter sin ninguna conversión
  uart_putc_raw(UART_ID, 'A');

  // Enviar un carácter pero con conversiones CR/LF
  uart_putc(UART_ID, 'B');

  // Enviar una cadena, con conversiones CR/LF
  uart_puts(UART_ID, " ¡Hola, UART!\n");

  // Prueba de impresión
  int i = 0;
  for (;;) {
    sleep_ms(500);
    printf("Hola %d", i++);
  }
}
```

## Exmaple 4: Read Battery Voltage

```c title="hello_adc.c"
#include <stdio.h>
#include "pico/stdlib.h"
#include "hardware/gpio.h"
#include "hardware/adc.h"

void init_gpio() {
    const int gpio = 19;

    gpio_init(gpio);
    gpio_set_dir(gpio, GPIO_OUT);
    gpio_put(gpio, 1);
}

int main() {
    stdio_init_all();
    printf("ADC battery Example - GPIO29 A3\n");

    init_gpio();
    adc_init();

    // Make sure GPIO is high-impedance, no pullups etc
    adc_gpio_init(29);
    // Select ADC input 0 (GPIO26)
    adc_select_input(3);

    while (1) {
        // 12-bit conversion, assume max value == ADC_VREF == 3.3 V
        const float conversion_factor = 3.3f / (1 << 12);
        uint16_t result = adc_read();
        printf("Raw value: 0x%03x, voltage: %f V\n", result, result * conversion_factor * 2);
        sleep_ms(500);
    }
}
```

## Preguntas Frecuentes

#### Submódulo TinyUSB No Inicializado; Soporte USB No Disponible

**Problema:**
Al construir un proyecto, puede aparecer esta advertencia:

```plaintext
El submódulo TinyUSB no ha sido inicializado; el soporte USB no estará disponible
```

**Solución:**

1. **Abre la Terminal** en Linux/macOS o el Símbolo del sistema/PowerShell/Git Bash en Windows.
2. **Navega al directorio de Pico SDK:**

   ```bash
   cd /ruta/a/tu/pico-sdk
   ```

3. **Inicializa el submódulo:**

   ```bash
   git submodule update --init
   ```

Esto habilitará el soporte USB en tu proyecto.

## Recursos

- 🔗 **[Link]** [Raspberry Pi Pico SDK | GitHub](https://github.com/raspberrypi/pico-sdk)
- 📄 **[PDF]** [Raspberry Pi Pico-series C/C++SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf) the book which documents the SDK APIs
- 📄 **[PDF]** [Getting started with Raspberry Pi Pico-series](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf)  - Official Raspberry Pi documentation.
- 📽️ **[Video]** [Intro to Raspberry Pi Pico and RP2040](https://www.youtube.com/watch?v=B5rQSoOmR5w) -  A video tutorial.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>  