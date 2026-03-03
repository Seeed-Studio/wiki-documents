---
description: XIAO ESP32S3(Sense) Con FreeRTOS
title: XIAO ESP32S3(Sense) Con FreeRTOS
keywords:
  - Software
  - FreeRtos
  - sd
  - camera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /xiao-esp32s3-freertos
last_update:
  date: 09/14/2024
  author: Priyanshu Roy
---

# XIAO ESP32S3(Sense) Con FreeRTOS

Esta wiki cubre el soporte de [FreeRTOS](https://freertos.org/) para el [Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started/). Con la ayuda de esta guía podrás utilizar el conjunto de características disponibles para la placa.

## ¿Qué es [FreeRTOS](https://www.freertos.org/index.html)?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/1.png" alt="pir" width={600} height="auto" /></p>

FreeRTOS es una colección de librerías C compuesta por un kernel de tiempo real y un conjunto de librerías modulares que implementan funcionalidad complementaria. El kernel de FreeRTOS es un kernel de tiempo real (o planificador de tiempo real) que permite a las aplicaciones construidas sobre FreeRTOS cumplir con sus requisitos de tiempo real estrictos. Permite que las aplicaciones se organicen como una colección de hilos de ejecución independientes.

_Referencia : [**Mastering the FreeRTOS Real Time Kernel**](https://www.freertos.org/Documentation/02-Kernel/07-Books-and-manual/01-RTOS_book)_

## Puertos de FreeRTOS

FreeRTOS es un kernel RTOS (sistema operativo de tiempo real) de código abierto que está integrado en ESP-IDF como un componente. Por lo tanto, todas las aplicaciones ESP-IDF y muchos componentes ESP-IDF están escritos basándose en FreeRTOS. El kernel de FreeRTOS está portado a todas las arquitecturas (es decir, Xtensa y RISC-V) disponibles de los chips ESP.

Utilizaremos el puerto ESP IDF de FreeRTOS.

## Preparación del Hardware

Estoy usando el [Seed Studio XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started/) y la cámara integrada, micrófono y lector de tarjetas SD junto con la funcionalidad WiFi del ESP32S3.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3(Sense)</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Componentes Adicionales

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Pantalla I2C RTC y Botón
- [Air Quality Sensor v1.3](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-v1-3-Arduino-Compatible.html)
- [Grove - Temperature, Humidity, Pressure and Gas Sensor for Arduino - BME680](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)
- [Acrylic Case for Seeed Studio XIAO Expansion board](https://www.seeedstudio.com/XIAO-p-4812.html)

## Preparación del Software

Estoy usando Visual Studio Code (Windows) con ESP-IDF.

1. Instalación de VSCode
2. Guía de instalación de ESP-IDF
3. Repositorio Git

<div class="table-center">
  <table align="center">
    <tr>
        <th>VS Code</th>
        <th>ESP-IDF para VSCode</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Descargar VSCode⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/tutorial/install.md" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Instalar ESP-IDF ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Introducción

### Configuración de ESP-IDF

Después de configurar la [Extensión de Visual Studio](https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/tutorial/install.md), abre la terminal y pega el siguiente comando para acceder a las Herramientas de Línea de Comandos de ESP-IDF desde el entorno de terminal normal (fuera de VScode).

:::note
La instalación normal de la extensión [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html) de VS-Code se encargará del 90% de los casos de uso. Realiza los siguientes pasos solo si necesitas las herramientas de línea de comandos ESP fuera del entorno.
:::

PowerShell (Windows)

```shell
.$HOME\esp\v5.3\esp-idf\export.ps1
```

:::info
".$HOME\esp\v5.3\esp-idf" puede diferir de usuario a usuario. Esta es la ruta de instalación predeterminada.  
Reemplázala con la ruta de instalación en tu dispositivo.
:::
:::tip
Para evitar configuración repetida, inicia PowerShell en modo administrador y escribe el siguiente comando

```shell
notepad $PSHOME\Profile.ps1
```

Se abrirá una instancia del Bloc de notas. Pega el comando export shell en el bloc de notas y guárdalo.
abre una instancia de powershell y debería tener una salida similar a la siguiente.

```shell
Done! You can now compile ESP-IDF projects.
```

:::  
Si todo está hecho correctamente, el siguiente comando:

```shell
idf.py
```

debería mostrar la siguiente salida:

```shell
Usage: idf.py [OPTIONS] COMMAND1 [ARGS]... [COMMAND2 [ARGS]...]...

  ESP-IDF CLI build management tool. For commands that are not known to idf.py an attempt to execute it as a build
  system target will be made. Selected target: None
```

### Configuración de la Placa para XIAO ESP32S3

Después de configurar ESP-IDF, necesitas configurar tu proyecto específicamente para la placa XIAO ESP32S3 para aprovechar sus características de hardware incluyendo 8MB de Flash y 8MB de PSRAM Octal.

#### Establecer Dispositivo Objetivo

En el directorio de tu proyecto ESP-IDF, establece el objetivo a ESP32-S3:

```bash
idf.py set-target esp32s3
```

#### Habilitar Opciones de Compilación Completa

En el `CMakeLists.txt` raíz de tu proyecto, asegúrate de que `MINIMAL_BUILD` esté establecido en `OFF`:

```cmake
idf_build_set_property(MINIMAL_BUILD OFF)
```

Esto habilita todas las opciones de configuración en menuconfig.

#### Configurar Flash y PSRAM

Abre el menú de configuración:

```bash
idf.py menuconfig
```

**Configuración del Tamaño de Flash:**
1. Navega a: **Serial flasher config → Flash size**
2. Establece a: **8 MB**

**Configuración de PSRAM:**
1. Navega a: **Component config → ESP PSRAM**
2. Habilita: **Support for external, SPI-connected RAM**
3. Establece **SPI RAM mode** a: **Octal Mode PSRAM**
4. Establece **SPI RAM clock** a: **80MHz**

:::info
El XIAO ESP32S3 usa PSRAM Octal, no modo Quad. Seleccionar el modo correcto es esencial para que los 8MB de PSRAM funcionen correctamente.
:::

#### Actualizar Dependencias del Componente Principal

En `/main/CMakeLists.txt`, asegúrate de que los componentes PSRAM y SPI flash estén incluidos:

```cmake
idf_component_register(
    SRCS "main.c"
    INCLUDE_DIRS "."
    PRIV_REQUIRES esp_psram spi_flash
)
```

#### Crear Componente de Configuración de Pines de la Placa

Crea un componente reutilizable para las definiciones de pines XIAO para hacer tu código más legible y portable:

```bash
mkdir -p ./components/board_config/include/
```

Crea `./components/board_config/include/xiao_pins.h`:

```c
// xiao_pins.h
#pragma once

#ifdef __cplusplus
extern "C" {
#endif

// Analog / Digital Pins
#define XIAO_D0     1
#define XIAO_D1     2
#define XIAO_D2     3
#define XIAO_D3     4
#define XIAO_D4     5
#define XIAO_D5     6
#define XIAO_D6     43
#define XIAO_D7     44
#define XIAO_D8     7
#define XIAO_D9     8
#define XIAO_D10    9

// Onboard User LED (Active Low)
#define XIAO_LED    21

// I2C Pins (Default)
#define XIAO_SDA    5   // Same as D4
#define XIAO_SCL    6   // Same as D5

// SPI Pins (Default)
#define XIAO_MISO   9   // Same as D10
#define XIAO_MOSI   10
#define XIAO_SCK    8   // Same as D9
#define XIAO_SS     7   // Same as D8

#ifdef __cplusplus
}
#endif
```

Crea `./components/board_config/CMakeLists.txt`:

```cmake
idf_component_register(INCLUDE_DIRS "include")
```

:::tip
Estas definiciones de pines coinciden con las etiquetas de serigrafía en la placa XIAO ESP32S3, haciendo tu código más legible. Por ejemplo, usa `XIAO_LED` en lugar de codificar directamente GPIO 21.
:::

#### Usar Definiciones de Pines en tu Código

En tu aplicación principal o cualquier componente, incluye el header:

```c
#include "xiao_pins.h"

void app_main(void) {
    // Example: Configure LED pin
    gpio_set_direction(XIAO_LED, GPIO_MODE_OUTPUT);
    gpio_set_level(XIAO_LED, 0);  // Turn on (active low)
}
```

#### Referencia de Mapeo de Pines

![Imagen de referencia del pinout del Xiao ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg)

| Etiqueta | GPIO | Función Alt |
|----------|------|-------------|
| D0       | 1    | ADC1_CH0    |
| D1       | 2    | ADC1_CH1    |
| D2       | 3    | ADC1_CH2    |
| D3       | 4    | ADC1_CH3    |
| D4       | 5    | ADC1_CH4, SDA |
| D5       | 6    | ADC1_CH5, SCL |
| D6       | 43   | TX          |
| D7       | 44   | RX          |
| D8       | 7    | ADC1_CH6, SS |
| D9       | 8    | ADC1_CH7, SCK |
| D10      | 9    | ADC1_CH8, MISO |

:::note
- GPIO 19 y 20 se usan para USB D-/D+ y no deben reconfigurarse
- El LED integrado en GPIO 21 es activo BAJO (establecer a 0 para encender)
- Todos los pines D0-D10 soportan entrada analógica vía ADC1
:::

#### Compilación y Flasheo

Compila tu proyecto:

```bash
idf.py build
```

Flashea al XIAO ESP32-S3:

```bash
idf.py -p /dev/ttyACM0 flash monitor
```

Reemplaza `/dev/ttyACM0` con tu puerto serie real (en Windows, típicamente `COM3`, `COM4`, etc.).

#### Solución de Problemas de Configuración de la Placa

**PSRAM No Detectada:**
- Verifica que el modo Octal esté seleccionado (no Quad)
- Comprueba que el tamaño de flash esté establecido a 8MB
- Asegúrate de que la versión de ESP-IDF sea 4.4 o posterior

**Falla la Carga:**
- Mantén presionado el botón BOOT mientras conectas USB
- Intenta reducir la velocidad de carga: `idf.py -p PORT -b 115200 flash`

**Conflictos de Pines:**
- Evita usar los pines GPIO 19 y 20 (USB D- y D+)
- XIAO_LED (GPIO 21) se comparte con el LED integrado

## ¿Qué son las Tareas?

Las tareas son pequeñas funciones/trabajos que se solicita al procesador que realice con un conjunto de configuraciones. Las tareas pueden variar desde funciones pequeñas hasta funciones de bucle infinito.
Las tareas son las unidades fundamentales de ejecución en una aplicación ESP-IDF. Son esencialmente funciones que se ejecutan de forma concurrente con otras tareas. Esto permite una multitarea eficiente y capacidad de respuesta.

### ¿Qué son las propiedades de las tareas?

Debido a la vastedad de este tema, solo cubriré algunas de las propiedades que usaremos para esta guía.

- **TaskFunction**: Esta es la función que contiene la lógica real de la tarea. Es el punto de entrada para la ejecución de la tarea.
- **StackSize**: Esto especifica la cantidad de memoria asignada para la pila de la tarea. La pila se usa para almacenar variables locales, direcciones de retorno de funciones y datos temporales.
- **TaskPriority**: Esto determina la importancia relativa de la tarea en comparación con otras tareas. Las tareas de mayor prioridad tienen mayor probabilidad de ejecutarse antes que las de menor prioridad.
- **TaskParameters**: Estos son argumentos opcionales que se pueden pasar a la función de la tarea cuando se crea. Se pueden usar para proporcionar contexto adicional o configuración a la tarea.
- **CoreAffinity**: Esto especifica a qué núcleo de CPU debe asignarse la tarea. En sistemas con múltiples núcleos, esto se puede usar para optimizar el rendimiento o equilibrar la carga de trabajo.

### Creando una tarea

Para crear una tarea en FreeRTOS, se usa la función xTaskCreate. Esta función toma varios parámetros, incluyendo la función de la tarea, nombre de la tarea, tamaño de la pila, parámetros, prioridad y un manejador para la tarea creada.

```c
TaskHandle_t task;
xTaskCreate(
        taskFunction,             /* Function that implements the task. */
        "taskName",               /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, or bytes. */
        NULL,                     /* Parameter passed into the task. */
        tskIDLE_PRIORITY,         /* Priority at which the task is created. */
        &task                     /* Used to pass out the created task's handle. */
        );
```

### Creando una tarea fijada a un núcleo

Para crear una tarea y fijarla a un núcleo específico (solo si el chip en uso es de doble núcleo), se usa la función xTaskCreatePinnedToCore. Esta función es similar a xTaskCreate pero incluye un parámetro adicional para especificar el núcleo.

```c
TaskHandle_t task;
xTaskCreatePinnedToCore(
        taskFunction,             /* Function that implements the task. */
        "taskName",               /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, or bytes. */
        NULL,                     /* Parameter passed into the task. */
        tskIDLE_PRIORITY,         /* Priority at which the task is created. */
        &task,                    /* Used to pass out the created task's handle. */
        0);                       /* Core ID */
```

### Llamada de función de tarea

La función de tarea es el código real que será ejecutado por la tarea.

```c
void taskFunction(void * pvParameters) {
  /*
  Function definition goes here
  */
}
```

## Visualización de tareas

Estoy creando cuatro tareas simples para visualizar cómo funciona FreeRTOS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/2.png" alt="pir" width={700} height="auto" /></p>

### Representación Visual

```shell
CPU0
-----
taskFunction1 (1000ms delay)

CPU1
-----
taskFunction2 (500ms delay)
taskFunction3 (500ms delay)
taskFunction4 (500ms delay)
```

### Código

```c
#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "sdkconfig.h"
#include "esp_log.h"

TaskHandle_t task1,task2,task3,task4;

void taskFunction1(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task1", "Hello from task 1");
        vTaskDelay(pdMS_TO_TICKS(1000)); // Add a delay to avoid overwhelming the output
    }
}

void taskFunction2(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task2", "Hello from task 2");
        vTaskDelay(pdMS_TO_TICKS(500)); // Add a delay to avoid overwhelming the output
    }
}

void taskFunction3(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task3", "Hello from task 3");
        vTaskDelay(pdMS_TO_TICKS(500)); // Add a delay to avoid overwhelming the output
    }
}

void taskFunction4(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task4", "Hello from task 4");
        vTaskDelay(pdMS_TO_TICKS(500)); // Add a delay to avoid overwhelming the output
    }
}

void app_main(void) {
    xTaskCreatePinnedToCore(
        taskFunction1, /* Function that implements the task. */
        "task_1",        /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, not bytes. */
        NULL,            /* Parameter passed into the task. */
        tskIDLE_PRIORITY, /* Priority at which the task is created. */
        &task1,         /* Used to pass out the created task's handle. */
        0);              /* Core ID */

    xTaskCreatePinnedToCore(
        taskFunction2, /* Function that implements the task. */
        "task_2",        /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, not bytes. */
        NULL,            /* Parameter passed into the task. */
        tskIDLE_PRIORITY, /* Priority at which the task is created. */
        &task2,         /* Used to pass out the created task's handle. */
        1);              /* Core ID */

    xTaskCreatePinnedToCore(
        taskFunction3, /* Function that implements the task. */
        "task_3",        /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, not bytes. */
        NULL,            /* Parameter passed into the task. */
        tskIDLE_PRIORITY, /* Priority at which the task is created. */
        &task3,         /* Used to pass out the created task's handle. */
        1);              /* Core ID */

    xTaskCreatePinnedToCore(
        taskFunction4, /* Function that implements the task. */
        "task_4",        /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, not bytes. */
        NULL,            /* Parameter passed into the task. */
        tskIDLE_PRIORITY, /* Priority at which the task is created. */
        &task4,         /* Used to pass out the created task's handle. */
        1);              /* Core ID */
}
```

:::tip
configMINIMAL_STACK_SIZE se puede cambiar en sdkconfig.
:::

1. Cuatro Tareas: El código define cuatro tareas: taskFunction1, taskFunction2, taskFunction3 y taskFunction4.
2. Prioridades de Tareas: Todas las tareas se crean con tskIDLE_PRIORITY. Esto significa que tienen la misma prioridad.
3. Fijación de Tareas: taskFunction1 está fijada a CPU0, mientras que las otras tres tareas están fijadas a CPU1.
4. Retrasos de Tareas: taskFunction1 tiene un retraso de 1000ms, mientras que las otras tres tienen un retraso de 500ms.

### Creando la Programación de Tareas para CPU0 y CPU1

He creado una programación básica de tareas para CPU0 y CPU1.

#### Programación de Tareas CPU0

```shell
Task: taskFunction1
Priority: Idle (lowest)
Delay: 1000ms
Core: 0
```

#### Programación de Tareas CPU1

```shell
Tasks: taskFunction2, taskFunction3, taskFunction4
Priorities: All Idle (same priority)
Delays: 500ms for all tasks
Core: 1
```

:::info
Esta es una programación simplificada. La programación real de tareas en un sistema de tiempo real involucraría factores más complejos como prioridades de tareas, fechas límite y restricciones de recursos.
:::

<details>

<summary> Salida</summary>

```shell
I (11412) Task1: Hello from task 1
I (11522) Task3: Hello from task 3
I (11522) Task2: Hello from task 2
I (11532) Task4: Hello from task 4
I (12032) Task3: Hello from task 3
I (12032) Task2: Hello from task 2
I (12042) Task4: Hello from task 4
I (12422) Task1: Hello from task 1
I (12542) Task3: Hello from task 3
I (12542) Task2: Hello from task 2
I (12552) Task4: Hello from task 4
I (13052) Task3: Hello from task 3
I (13052) Task2: Hello from task 2
I (13062) Task4: Hello from task 4
I (13432) Task1: Hello from task 1
I (13562) Task3: Hello from task 3
I (13562) Task2: Hello from task 2
I (13572) Task4: Hello from task 4
I (14072) Task3: Hello from task 3
I (14072) Task2: Hello from task 2
I (14082) Task4: Hello from task 4
```

</details>

## Sondeo de sensores usando FreeRTOS

Para esto estoy usando un sensor analógico [Air Quality Sensor v1.3](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-v1-3-Arduino-Compatible.html) junto con ESP_IDF_v5.3.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Priyanshu0901/Air_quality_Sensor_ESP-IDF.git" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Configuración de Hardware

Conecta el Xiao-S3 a la [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) y conecta el [Air Quality Sensor v1.3](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-v1-3-Arduino-Compatible.html) al conector analógico.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/3.jpg" alt="pir" width={600} height="auto" /></p>

### Configuración de Software

Después de clonar el repositorio git, abre la carpeta en VSCode. Ve a View->Command Palette->ESP-IDF: Add vscode Configuration Folder.
Desde el panel inferior selecciona el puerto COM correcto, chip (ESP-S3) y construye, flashea y monitorea.

### Descripción del Código

Este código está diseñado para recopilar datos de calidad del aire de un sensor, procesar los datos en bruto para determinar el nivel de calidad del aire, e imprimir periódicamente los resultados en la consola.

#### Componentes Clave

- Inicialización del Sensor:

```c
air_quality_sensor_t air_quality_sensor;

void sensor_setup()
{
    air_quality_sensor._io_num = ADC_CHANNEL_0;
    air_quality_sensor._adc_num = ADC_UNIT_1;
    printf("Starting Air Quality Sensor...\n");
    if(!initialize_air_quality_sensor(&air_quality_sensor))
    {
        printf("Sensor ready.\n");
    }
    else{
        printf("Sensor ERROR!\n");
    }
}
```

- La función sensor_setup() configura los pines I/O del sensor y la unidad ADC.
- Intenta inicializar el sensor usando initialize_air_quality_sensor().
- Si la inicialización es exitosa, el sensor está listo para la recopilación de datos.

- Tarea de Recopilación de Datos:

```c
void poll_read_air_quality_sensor(void *pvParameters)
{
    for (;;)
    {
        air_quality_sensor_slope(&air_quality_sensor);
        vTaskDelay(500 / portTICK_PERIOD_MS);
    }
}
```

- La tarea poll_read_air_quality_sensor() se crea para leer continuamente datos en bruto del sensor.
- Llama a air_quality_sensor_slope() para procesar los datos en bruto y calcular la pendiente, que es un indicador de la calidad del aire.
- La tarea se retrasa 500 milisegundos antes de leer el siguiente punto de datos.

- Tarea de Impresión de Datos:

```c

void print_read_air_quality_sensor(void *pvParameters)
{
    for (;;)
    {
        char buf[40];
        air_quality_error_to_message(air_quality_sensor._air_quality,buf);
        printf("Time : %lu\tSlope : %d\tRaw Value : %d\n%s\n", (uint32_t)esp_timer_get_time() / 1000, air_quality_sensor._air_quality, air_quality_sensor._sensor_raw_value,buf);
        vTaskDelay(1000 / portTICK_PERIOD_MS);
    }
}
```

- La tarea print_read_air_quality_sensor() se crea para imprimir periódicamente los datos recopilados y la calidad del aire calculada.
- Recupera el tiempo actual, la pendiente, el valor en bruto y el mensaje de calidad del aire usando air_quality_error_to_message().
- La tarea imprime los datos en la consola de manera formateada.
- La tarea se retrasa 1000 milisegundos antes de imprimir el siguiente punto de datos.

```c

void app_main(void)
{
    sensor_setup();
    xTaskCreatePinnedToCore(
        poll_read_air_quality_sensor,   /* Function that implements the task. */
        "poll_read_air_quality_sensor", /* Text name for the task. */
        configMINIMAL_STACK_SIZE * 2,   /* Stack size in words, not bytes. */
        NULL,                           /* Parameter passed into the task. */
        tskIDLE_PRIORITY,               /* Priority at which the task is created. */
        NULL,                           /* Used to pass out the created task's handle. */
        0);                             /* Core ID */

    xTaskCreatePinnedToCore(
        print_read_air_quality_sensor,   /* Function that implements the task. */
        "print_read_air_quality_sensor", /* Text name for the task. */
        configMINIMAL_STACK_SIZE * 2,    /* Stack size in words, not bytes. */
        NULL,                            /* Parameter passed into the task. */
        tskIDLE_PRIORITY + 1,            /* Priority at which the task is created. */
        NULL,                            /* Used to pass out the created task's handle. */
        0);                              /* Core ID */
}
```

### Salida

```shell
Time : 37207    Slope : 3       Raw Value : 273
Fresh air.
Time : 38217    Slope : 3       Raw Value : 269
Fresh air.
Time : 39227    Slope : 3       Raw Value : 274
Fresh air.
Time : 40237    Slope : 3       Raw Value : 251
Fresh air.
Time : 41247    Slope : 3       Raw Value : 276
Fresh air.
Time : 42257    Slope : 3       Raw Value : 250
Fresh air.
Time : 43267    Slope : 3       Raw Value : 236
Fresh air.
Time : 44277    Slope : 3       Raw Value : 253
Fresh air.
Time : 45287    Slope : 3       Raw Value : 245
Fresh air.
Time : 46297    Slope : 3       Raw Value : 249
Fresh air.
Time : 47307    Slope : 3       Raw Value : 244
Fresh air.
Time : 48317    Slope : 3       Raw Value : 235
Fresh air.
Time : 49327    Slope : 3       Raw Value : 239
Fresh air.
Time : 50337    Slope : 3       Raw Value : 233
Fresh air.
Time : 51347    Slope : 3       Raw Value : 235
Fresh air.
```

## Uso de Cámara y Tarjeta SD en FreeRTOS

Para esto estoy usando la Cámara integrada y la Tarjeta SD junto con ESP_IDF_v5.3.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Priyanshu0901/Camera-and-SdCard-FreeRTOS.git" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Configuración de Hardware

Sigue la [guía de tarjeta microSD](https://wiki.seeedstudio.com/es/xiao_esp32s3_sense_filesystem/) y la [guía de cámara](https://wiki.seeedstudio.com/es/xiao_esp32s3_camera_usage/) para conectar la cámara y la placa de extensión de tarjeta microSD al

- Formatear la tarjeta microSD (soportada hasta 32Gb)
- Conectar la tarjeta microSD a la placa de extensión

La configuración se vería algo así:

<div class="table-center">
  <table align="center">
    <tr>
        <th>Frente</th>
        <th>Atrás</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/6.jpeg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/7.jpeg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

### Configuración de Software

Después de clonar el repositorio git, abre la carpeta en VSCode. Ve a View->Command Palette->ESP-IDF: Add vscode Configuration Folder.
Desde el panel inferior selecciona el puerto COM correcto, chip (ESP-S3) y construye, flashea y monitorea.

:::tip
Si estás usando el modelo OV3660, necesitas configurarlo en el IDF para poder manejarlo. ingresa **"idf.py menuconfig"** en tu terminal
:::

<div class="table-center">
  <table align="center">
    <tr>
        <th>Paso 1</th>
        <th>Paso 2</th>
        <th>Paso 3</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/36601.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/36602.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/36603.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

### Componente de Cámara

- Configuración de Cámara:
  - Define los pines GPIO utilizados para varias funciones de la cámara (PWDN, RESET, XCLK, SIOD, SIOC, Y9-Y2, VSYNC, HREF, PCLK, LED).
  - Establece valores predeterminados para los parámetros de la cámara (por ejemplo, frecuencia de reloj, ubicación del buffer de frame, formato de píxel, tamaño de frame, calidad JPEG, conteo de buffer de frame, modo de captura).

```c
#ifndef CAMERA_CONFIG_H
#define CAMERA_CONFIG_H

#define PWDN_GPIO_NUM     -1
#define RESET_GPIO_NUM    -1
#define XCLK_GPIO_NUM     10
#define SIOD_GPIO_NUM     40
#define SIOC_GPIO_NUM     39

#define Y9_GPIO_NUM       48
#define Y8_GPIO_NUM       11
#define Y7_GPIO_NUM       12
#define Y6_GPIO_NUM       14
#define Y5_GPIO_NUM       16
#define Y4_GPIO_NUM       18
#define Y3_GPIO_NUM       17
#define Y2_GPIO_NUM       15
#define VSYNC_GPIO_NUM    38
#define HREF_GPIO_NUM     47
#define PCLK_GPIO_NUM     13

#define LED_GPIO_NUM      21

#endif //CAMERA_CONFIG_H
```

- Interfaz de Cámara:  
  Declara las funciones initialize_camera() y createCameraTask().

- Implementación de Cámara:

  - Inicializa la cámara usando la configuración definida.

  ```c
  void initialize_camera(void)
  {
    camera_config_t camera_config = {
        .pin_pwdn = PWDN_GPIO_NUM,
        .pin_reset = RESET_GPIO_NUM,
        .pin_xclk = XCLK_GPIO_NUM,
        .pin_sccb_sda = SIOD_GPIO_NUM,
        .pin_sccb_scl = SIOC_GPIO_NUM,
        .pin_d7 = Y9_GPIO_NUM,
        .pin_d6 = Y8_GPIO_NUM,
        .pin_d5 = Y7_GPIO_NUM,
        .pin_d4 = Y6_GPIO_NUM,
        .pin_d3 = Y5_GPIO_NUM,
        .pin_d2 = Y4_GPIO_NUM,
        .pin_d1 = Y3_GPIO_NUM,
        .pin_d0 = Y2_GPIO_NUM,
        .pin_vsync = VSYNC_GPIO_NUM,
        .pin_href = HREF_GPIO_NUM,
        .pin_pclk = PCLK_GPIO_NUM,

        .xclk_freq_hz = 20000000,          // The clock frequency of the image sensor
        .fb_location = CAMERA_FB_IN_PSRAM, // Set the frame buffer storage location
        .pixel_format = PIXFORMAT_JPEG,    // The pixel format of the image: PIXFORMAT_ + YUV422|GRAYSCALE|RGB565|JPEG
        .frame_size = FRAMESIZE_UXGA,      // The resolution size of the image: FRAMESIZE_ + QVGA|CIF|VGA|SVGA|XGA|SXGA|UXGA
        .jpeg_quality = 15,                // The quality of the JPEG image, ranging from 0 to 63.
        .fb_count = 2,                     // The number of frame buffers to use.
        .grab_mode = CAMERA_GRAB_LATEST    //  The image capture mode.
    };

    esp_err_t ret = esp_camera_init(&camera_config);
    if (ret == ESP_OK)
    {
        ESP_LOGI(cameraTag, "Camera configured successful");
    }
    else
    {
        ESP_LOGI(cameraTag, "Camera configured unsuccessful");
        return;
    }
  }
  ```

  - Establece parámetros de la cámara (brillo, contraste, saturación, efecto especial, balance de blancos, control de exposición, AEC, nivel AE, valor AEC, control de ganancia, ganancia AGC, techo de ganancia, BPC, WPC, GMA raw, LENC, hmirror, vflip, DCW, barra de colores).

  ```c
  sensor_t *s = esp_camera_sensor_get();

    s->set_brightness(s, 0);                 // -2 to 2
    s->set_contrast(s, 0);                   // -2 to 2
    s->set_saturation(s, 0);                 // -2 to 2
    s->set_special_effect(s, 0);             // 0 to 6 (0 - No Effect, 1 - Negative, 2 - Grayscale, 3 - Red Tint, 4 - Green Tint, 5 - Blue Tint, 6 - Sepia)
    s->set_whitebal(s, 1);                   // 0 = disable , 1 = enable
    s->set_awb_gain(s, 1);                   // 0 = disable , 1 = enable
    s->set_wb_mode(s, 0);                    // 0 to 4 - if awb_gain enabled (0 - Auto, 1 - Sunny, 2 - Cloudy, 3 - Office, 4 - Home)
    s->set_exposure_ctrl(s, 1);              // 0 = disable , 1 = enable
    s->set_aec2(s, 0);                       // 0 = disable , 1 = enable
    s->set_ae_level(s, 0);                   // -2 to 2
    s->set_aec_value(s, 300);                // 0 to 1200
    s->set_gain_ctrl(s, 1);                  // 0 = disable , 1 = enable
    s->set_agc_gain(s, 0);                   // 0 to 30
    s->set_gainceiling(s, (gainceiling_t)0); // 0 to 6
    s->set_bpc(s, 0);                        // 0 = disable , 1 = enable
    s->set_wpc(s, 1);                        // 0 = disable , 1 = enable
    s->set_raw_gma(s, 1);                    // 0 = disable , 1 = enable
    s->set_lenc(s, 1);                       // 0 = disable , 1 = enable
    s->set_hmirror(s, 0);                    // 0 = disable , 1 = enable
    s->set_vflip(s, 0);                      // 0 = disable , 1 = enable
    s->set_dcw(s, 1);                        // 0 = disable , 1 = enable
    s->set_colorbar(s, 0);                   // 0 = disable , 1 = enable
  ```

  - Define una función takePicture() para capturar una imagen y guardarla en la tarjeta SD.

  ```c
  void takePicture()
  {
    ESP_LOGI(cameraTag, "Taking picture...");
    camera_fb_t *pic = esp_camera_fb_get();

    if (pic)
    {
        saveJpegToSdcard(pic);
    }

    ESP_LOGI(cameraTag, "Picture taken! Its size was: %zu bytes", pic->len);

    esp_camera_fb_return(pic);
  }
  ```

  - Crea una tarea cameraTakePicture_5_sec() para tomar fotos continuamente cada 5 segundos.

  ```c
  void cameraTakePicture_5_sec(void *pvParameters)
  {
      for (;;)
      {
          takePicture();
          vTaskDelay(5000 / portTICK_PERIOD_MS);
      }
  }

  void createCameraTask()
  {
      TaskHandle_t task;
      xTaskCreate(
          cameraTakePicture_5_sec,      /* Function that implements the task. */
          "cameraTakePicture_5_sec",    /* Text name for the task. */
          configMINIMAL_STACK_SIZE * 4, /* Stack size in words, or bytes. */
          NULL,                         /* Parameter passed into the task. */
          tskIDLE_PRIORITY,             /* Priority at which the task is created. */
          &task                         /* Used to pass out the created task's handle. */
      );
  }
  ```

Estructura del Código:

- Archivos de cabecera (camera_config.h, camera_interface.h) y archivos de implementación (camera_interface.c).
- El archivo camera_config.h define los parámetros de configuración de la cámara.
- El archivo camera_interface.h declara las funciones para la inicialización de la cámara y creación de tareas.
- El archivo camera_interface.c implementa la inicialización de la cámara, captura de fotos y lógica de creación de tareas.

### Componente SdCard

- Configuración de Tarjeta SD:  
  Define los pines GPIO utilizados para la interfaz de la tarjeta SD (MISO, MOSI, CLK, CS).

```c
#ifndef SDCARD_CONFIG_H
#define SDCARD_CONFIG_H

#define PIN_NUM_MISO  GPIO_NUM_8
#define PIN_NUM_MOSI  GPIO_NUM_9
#define PIN_NUM_CLK   GPIO_NUM_7
#define PIN_NUM_CS    GPIO_NUM_21

#endif //SDCARD_CONFIG_H
```

- Interfaz de Tarjeta SD:  
  Declara las funciones initialize_sdcard(), deinitialize_sdcard(), y saveJpegToSdcard().

```c
#ifndef SDCARD_INTERFACE_H
#define SDCARD_INTERFACE_H

#include "esp_camera.h"

void initialize_sdcard(void);
void deinitialize_sdcard();
void saveJpegToSdcard(camera_fb_t *);

#endif //SDCARD_INTERFACE_H
```

- Implementación de Tarjeta SD:

  - Inicializa la tarjeta SD usando la configuración definida y monta la tarjeta SD como un sistema de archivos FAT.

  ```c
  sdmmc_card_t *card;
  sdmmc_host_t host = SDSPI_HOST_DEFAULT();
  const char mount_point[] = "/sd";

  void initialize_sdcard()
  {
      esp_err_t ret;

      // If format_if_mount_failed is set to true, SD card will be partitioned and
      // formatted in case when mounting fails.
      esp_vfs_fat_sdmmc_mount_config_t mount_config = {
  #ifdef FORMAT_IF_MOUNT_FAILED
          .format_if_mount_failed = true,
  #else
          .format_if_mount_failed = false,
  #endif // EXAMPLE_FORMAT_IF_MOUNT_FAILED
          .max_files = 5,
          .allocation_unit_size = 32 * 1024};

      ESP_LOGI(sdcardTag, "Initializing SD card");

      // Use settings defined above to initialize SD card and mount FAT filesystem.
      // Note: esp_vfs_fat_sdmmc/sdspi_mount is all-in-one convenience functions.
      // Please check its source code and implement error recovery when developing
      // production applications.
      ESP_LOGI(sdcardTag, "Using SPI peripheral");

      // By default, SD card frequency is initialized to SDMMC_FREQ_DEFAULT (20MHz)
      // For setting a specific frequency, use host.max_freq_khz (range 400kHz - 20MHz for SDSPI)
      spi_bus_config_t bus_cfg = {
          .mosi_io_num = PIN_NUM_MOSI,
          .miso_io_num = PIN_NUM_MISO,
          .sclk_io_num = PIN_NUM_CLK,
          .quadwp_io_num = -1,
          .quadhd_io_num = -1,
          .max_transfer_sz = host.max_freq_khz,
      };
      ret = spi_bus_initialize(host.slot, &bus_cfg, SDSPI_DEFAULT_DMA);
      if (ret != ESP_OK)
      {
          ESP_LOGE(sdcardTag, "Failed to initialize bus.");
          return;
      }

      // This initializes the slot without card detect (CD) and write protect (WP) signals.
      // Modify slot_config.gpio_cd and slot_config.gpio_wp if your board has these signals.
      sdspi_device_config_t slot_config = SDSPI_DEVICE_CONFIG_DEFAULT();
      slot_config.gpio_cs = PIN_NUM_CS;
      slot_config.host_id = host.slot;

      ESP_LOGI(sdcardTag, "Mounting filesystem");
      ret = esp_vfs_fat_sdspi_mount(mount_point, &host, &slot_config, &mount_config, &card);

      if (ret != ESP_OK)
      {
          if (ret == ESP_FAIL)
          {
              ESP_LOGE(sdcardTag, "Failed to mount filesystem. "
                                  "If you want the card to be formatted, set the FORMAT_IF_MOUNT_FAILED in sdcard_config.h");
          }
          else
          {
              ESP_LOGE(sdcardTag, "Failed to initialize the card (%s). "
                                  "Make sure SD card lines have pull-up resistors in place.",
                      esp_err_to_name(ret));
          }
          return;
      }
      ESP_LOGI(sdcardTag, "Filesystem mounted");

      // Card has been initialized, print its properties
      sdmmc_card_print_info(stdout, card);

      // Format FATFS
  #ifdef FORMAT_SD_CARD
      ret = esp_vfs_fat_sdcard_format(mount_point, card);
      if (ret != ESP_OK)
      {
          ESP_LOGE(sdcardTag, "Failed to format FATFS (%s)", esp_err_to_name(ret));
          return;
      }

      if (stat(file_foo, &st) == 0)
      {
          ESP_LOGI(sdcardTag, "file still exists");
          return;
      }
      else
      {
          ESP_LOGI(sdcardTag, "file doesnt exist, format done");
      }
  #endif // CONFIG_EXAMPLE_FORMAT_SD_CARD
  }
  ```

  - Proporciona funciones para guardar imágenes JPEG en la tarjeta SD.

  ```c
  uint16_t lastKnownFile = 0;

  void saveJpegToSdcard(camera_fb_t *captureImage)
  {
    // Find the next available filename
    char filename[32];

    sprintf(filename, "%s/%u_img.jpg", mount_point, lastKnownFile++);

    // Create the file and write the JPEG data
    FILE *fp = fopen(filename, "wb");
    if (fp != NULL)
    {
        fwrite(captureImage->buf, 1, captureImage->len, fp);
        fclose(fp);
        ESP_LOGI(sdcardTag, "JPEG saved as %s", filename);
    }
    else
    {
        ESP_LOGE(sdcardTag, "Failed to create file: %s", filename);
    }
  }
  ```

Estructura del Componente:

- Archivos de cabecera (sdcard_config.h, sdcard_interface.h) y archivos de implementación (sdcard_interface.c).
- El archivo sdcard_config.h define los parámetros de configuración de la tarjeta SD.
- El archivo sdcard_interface.h declara las funciones para la inicialización, desinicialización y guardado de imágenes de la tarjeta SD.
- El archivo sdcard_interface.c implementa la inicialización, desinicialización y lógica de guardado de imágenes de la tarjeta SD.

### Función Principal

```c
// main.c
#include <stdio.h>
#include "camera_interface.h"
#include "sdcard_interface.h"

void initialize_drivers()
{
    initialize_sdcard();
    initialize_camera();
}

void start_tasks()
{
    createCameraTask();
}

void app_main(void)
{
    initialize_drivers();
    start_tasks();
}
```

- Incluye los archivos de cabecera necesarios para las interfaces de cámara y tarjeta SD.
- Inicializa tanto la tarjeta SD como la cámara usando las funciones proporcionadas.
- Inicia la tarea de la cámara para tomar fotos continuamente

### Salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/8.gif" alt="pir" width={600} height="auto" /></p>

#### Salida UART

```shell
I (1119) main_task: Calling app_main()
I (1123) sdcard: Initializing SD card
I (1127) sdcard: Using SPI peripheral
I (1132) sdcard: Mounting filesystem
I (1137) gpio: GPIO[21]| InputEn: 0| OutputEn: 1| OpenDrain: 0| Pullup: 0| Pulldown: 0| Intr:0
I (1146) sdspi_transaction: cmd=52, R1 response: command not supported
I (1195) sdspi_transaction: cmd=5, R1 response: command not supported
I (1219) sdcard: Filesystem mounted
Name: SD32G
Type: SDHC/SDXC
Speed: 20.00 MHz (limit: 20.00 MHz)
Size: 30448MB
CSD: ver=2, sector_size=512, capacity=62357504 read_bl_len=9
SSR: bus_width=1
I (1226) s3 ll_cam: DMA Channel=1
I (1230) cam_hal: cam init ok
I (1234) sccb: pin_sda 40 pin_scl 39
I (1238) sccb: sccb_i2c_port=1
I (1252) camera: Detected camera at address=0x30
I (1255) camera: Detected OV2640 camera
I (1255) camera: Camera PID=0x26 VER=0x42 MIDL=0x7f MIDH=0xa2
I (1344) cam_hal: buffer_size: 16384, half_buffer_size: 1024, node_buffer_size: 1024, node_cnt: 16, total_cnt: 375
I (1344) cam_hal: Allocating 384000 Byte frame buffer in PSRAM
I (1351) cam_hal: Allocating 384000 Byte frame buffer in PSRAM
I (1357) cam_hal: cam config ok
I (1361) ov2640: Set PLL: clk_2x: 0, clk_div: 0, pclk_auto: 0, pclk_div: 12
I (1453) camera: Camera configured successful
I (1487) main_task: Returned from app_main()
I (1487) camera: Taking picture...
I (1997) sdcard: JPEG saved as /sd/0_img.jpg
I (1997) camera: Picture taken! Its size was: 45764 bytes
I (6997) camera: Taking picture...
I (7348) sdcard: JPEG saved as /sd/1_img.jpg
I (7349) camera: Picture taken! Its size was: 51710 bytes
I (12349) camera: Taking picture...
I (12704) sdcard: JPEG saved as /sd/2_img.jpg
I (12705) camera: Picture taken! Its size was: 51853 bytes
I (17706) camera: Taking picture...
I (18054) sdcard: JPEG saved as /sd/3_img.jpg
I (18055) camera: Picture taken! Its size was: 51919 bytes
I (23055) camera: Taking picture...
I (23414) sdcard: JPEG saved as /sd/4_img.jpg
I (23414) camera: Picture taken! Its size was: 51809 bytes
I (28415) camera: Taking picture...
I (28768) sdcard: JPEG saved as /sd/5_img.jpg
I (28768) camera: Picture taken! Its size was: 51747 bytes
I (33771) camera: Taking picture...
I (34117) sdcard: JPEG saved as /sd/6_img.jpg
I (34117) camera: Picture taken! Its size was: 51968 bytes
```

#### Imagen de Salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/9.jpg" alt="pir" width={600} height="auto" /></p>

## FreeRtos para Arduino IDE

FreeRtos puede ser usado para compilaciones de XIAO-S3 basadas en Arduino-IDE. Es similar al uso de ESP-IDF pero se ejecuta solo en un núcleo y no está optimizado para ESP-IDF.

### Configuración de Hardware

Conecta el Xiao-S3 a la [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) (Pantalla OLED y RTC) y conecta el [Grove - Temperature, Humidity, Pressure and Gas Sensor for Arduino - BME680](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html) al Bus I2c.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/4.jpg" alt="pir" width={600} height="auto" /></p>

### Configuración de Software

Instala las librerías de arduino para [pcf8563](https://github.com/Bill2462/PCF8563-Arduino-Library), [U8x8lib](https://github.com/olikraus/U8g2_Arduino) y la librería [bme680](https://github.com/Seeed-Studio/Seeed_Arduino_BME68x). Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/) para instalar librerías para Arduino.

```cpp
#include "time.h"
#include <WiFi.h>
#include <PCF8563.h>
#include <U8x8lib.h>
#include <Wire.h>
#include "seeed_bme680.h"

#define IIC_ADDR uint8_t(0x76)
Seeed_BME680 bme680(IIC_ADDR); /* IIC PROTOCOL */

// I2C communication library for the PCF8563 real-time clock
PCF8563 pcf;

// OLED display library
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/D4, /* data=*/D5, /* reset=*/U8X8_PIN_NONE);  // OLEDs without Reset of the Display

// WiFi network credentials
const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

// NTP server for time synchronization
const char* ntpServer = "pool.ntp.org";

// Timezone offset (adjust based on your location)
const long gmtOffset_sec = 5.5 * 60 * 60;  // Hours * Minutes * Seconds (here, GMT+5:30)
const int daylightOffset_sec = 0;          // No daylight saving time assumed

// Global variable to store current time information
static Time nowTime;

// Function prototypes for tasks
void printDateAndTime(void* pvParameters);
void updateTime(void* pvParameters);
void ledBlink2Hz(void* pvParameters);
void oledDisplayUpdate(void* pvParameters);
void taskBME680(void* pvParameters);

// Setup function (runs once at startup)
void setup() {

  Serial.begin(115200);  // Initialize serial communication for debugging

  // Set built-in LED pin as output for blinking
  pinMode(LED_BUILTIN, OUTPUT);

  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);  // Connect to WiFi network
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  while (!bme680.init()) {
    Serial.println("bme680 init failed ! can't find device!");
    delay(10000);
  }

  pcf.init();  // Initialize the PCF8563 real-time clock

  // Stop the clock before setting the time
  pcf.stopClock();

  // Configure time synchronization using NTP server
  configTime(gmtOffset_sec, daylightOffset_sec, ntpServer);
  static struct tm timeinfo;
  while (!getLocalTime(&timeinfo)) {
    Serial.println("no received time info ... Waiting ...");
  }

  // Set the time on the PCF8563 clock based on retrieved time
  pcf.setYear(timeinfo.tm_year);
  pcf.setMonth(timeinfo.tm_mon);
  pcf.setDay(timeinfo.tm_mday);
  pcf.setHour(timeinfo.tm_hour);
  pcf.setMinut(timeinfo.tm_min);
  pcf.setSecond(timeinfo.tm_sec);

  pcf.startClock();  // Start the clock after setting the time

  Serial.println("WiFi connected at " + WiFi.localIP());

  u8x8.begin();         // Initialize the OLED display
  u8x8.setFlipMode(1);  // Optionally rotate OLED display content

  // Create tasks for different functionalities
  xTaskCreate(
    updateTime,
    "Get LocalTime",
    configMINIMAL_STACK_SIZE * 2,
    (void*)1,
    tskIDLE_PRIORITY + 1,
    NULL);

  xTaskCreate(
    ledBlink2Hz,
    "Task 2",
    configMINIMAL_STACK_SIZE,
    (void*)1,
    tskIDLE_PRIORITY + 1,
    NULL);

  xTaskCreate(
    oledDisplayUpdate,
    "OLED Display Task",
    configMINIMAL_STACK_SIZE * 2,
    (void*)1,
    tskIDLE_PRIORITY,
    NULL);

  xTaskCreate(
    printDateAndTime,
    "Print Uart",
    configMINIMAL_STACK_SIZE * 2,
    (void*)1,
    tskIDLE_PRIORITY,
    NULL);

  xTaskCreate(
    taskBME680,
    "BME680 Sensor Poll",
    configMINIMAL_STACK_SIZE * 2,
    (void*)1,
    tskIDLE_PRIORITY + 1,
    NULL);
}

// Loop function (doesn't do anything in this case, tasks handle everything)
void loop() {
  // Nothing to do here, all work is done in the tasks
}

// Function that will run as a task: Prints current date and time to serial port
void printDateAndTime(void* pvParameters) {
  for (;;) {
    // Print current time in formatted string (DD/MM/YY\tHH:MM:SS) to serial port
    Serial.printf("%02d/%02d/%02d\t%02d:%02d:%02d\n",
                  nowTime.day, nowTime.month + 1, nowTime.year % 100,
                  nowTime.hour, nowTime.minute, nowTime.second);
    // Delay for 1 second before reading time again
    vTaskDelay(1000 / portTICK_PERIOD_MS);
  }
}

// Function that will run as a task: Reads current time from PCF8563 clock
void updateTime(void* pvParameters) {
  for (;;) {
    // Update the global `nowTime` variable with the current time from the PCF8563 clock
    nowTime = pcf.getTime();
    // Delay for 0.5 second before reading time again (can be adjusted for desired update frequency)
    vTaskDelay(500 / portTICK_PERIOD_MS);
  }
}

// Function that will run as a task: Blinks the built-in LED at 2Hz
void ledBlink2Hz(void* pvParameters) {
  bool state = true;  // Initial state for LED (on or off)
  for (;;) {
    // Set LED state (HIGH for on, LOW for off)
    digitalWrite(LED_BUILTIN, (state ? HIGH : LOW));
    // Delay for 0.5 second to create a 2Hz blinking frequency (one cycle on/off)
    vTaskDelay(500 / portTICK_PERIOD_MS);
    // Toggle LED state for the next cycle
    state = !state;
  }
}

// Function that will run as a task: Updates OLED display with date and time
void oledDisplayUpdate(void* pvParameters) {
  for (;;) {

    // Set font for the first line (date)
    u8x8.setFont(u8x8_font_chroma48medium8_r);

    // Set cursor position for the first line (centered)
    u8x8.setCursor(0, 0);

    char buffer1[12];  // Buffer to hold formatted date string
    std::snprintf(buffer1, sizeof(buffer1), "%02d/%02d/%02d",
                  nowTime.day, nowTime.month + 1, nowTime.year % 100);
    u8x8.print(buffer1);

    // Format time string (HH:MM:SS) into buffer2 using std::snprintf
    std::snprintf(buffer1, sizeof(buffer1), "%02d:%02d:%02d",
                  nowTime.hour, nowTime.minute, nowTime.second);
    // Print formatted time string to OLED display
    u8x8.print(buffer1);

    // Adjust cursor position for the second line (below the first line)
    u8x8.setCursor(0, 10);

    char buffer2[20];  // Buffer to hold formatted sensor data

    std::snprintf(buffer2, sizeof(buffer2), "T: %.1f°C", bme680.sensor_result_value.temperature);
    u8x8.print(buffer2);
    u8x8.setCursor(0, 20);

    std::snprintf(buffer2, sizeof(buffer2), "P: %.1fkPa", bme680.sensor_result_value.pressure / 1000.0);
    u8x8.print(buffer2);

    u8x8.setCursor(0, 30);

    std::snprintf(buffer2, sizeof(buffer2), "H: %.1f%%", bme680.sensor_result_value.humidity);
    u8x8.print(buffer2);

    // std::snprintf(buffer2, sizeof(buffer2), "G: %.1f Kohms", bme680.sensor_result_value.gas / 1000.0);
    // u8x8.print(buffer2);

    vTaskDelay(100 / portTICK_PERIOD_MS);  // Update every 0.1 seconds (adjust as needed)
  }
}

void taskBME680(void* pvParameters) {
  for (;;) {
    if (bme680.read_sensor_data()) {
      Serial.println("Failed to perform reading :(");
    } else {
      Serial.print("T: ");
      Serial.print(bme680.sensor_result_value.temperature, 2);
      Serial.print(" C  P: ");
      Serial.print(bme680.sensor_result_value.pressure / 1000.0, 2);
      Serial.print(" KPa  H: ");
      Serial.print(bme680.sensor_result_value.humidity, 2);
      Serial.print(" %  G: ");
      Serial.print(bme680.sensor_result_value.gas / 1000.0, 2);
      Serial.println(" Kohms");
    }

    vTaskDelay(1000 / portTICK_PERIOD_MS);
  }
}
```

### Salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/5.gif" alt="pir" width={600} height="auto" /></p>

### Salida del Monitor Serie

```shell
09/09/24 03:17:20
T: 29.01 C  P: 90.86 KPa  H: 63.41 %  G: 47.41 Kohms
09/09/24 03:17:21
T: 29.03 C  P: 90.86 KPa  H: 63.34 %  G: 47.85 Kohms
```

## Arduino FreeRtos vs ESP-IDF FreeRtos

| Característica          | Arduino FreeRTOS                                               | ESP-IDF FreeRTOS                                                                                                   |
| ----------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Capa de Abstracción     | Abstracción de nivel superior, más fácil para principiantes    | Abstracción de nivel inferior, más control para usuarios experimentados                                           |
| Entorno de Desarrollo   | Arduino IDE                                                     | Herramientas de línea de comandos ESP-IDF                                                                         |
| Compatibilidad          | Principalmente compatible con placas basadas en Arduino        | Compatible con una gama más amplia de placas ESP32 y ESP32-S2                                                     |
| Características         | Características básicas de RTOS, creación de tareas, programación, sincronización | Características completas de RTOS, creación de tareas, programación, sincronización, grupos de eventos, colas, mutexes, semáforos |
| Rendimiento             | Generalmente menos eficiente debido a la capa de abstracción   | Más eficiente debido al acceso directo al hardware y APIs de RTOS                                                 |
| Personalización         | Opciones de personalización limitadas                          | Opciones de personalización extensas a través de archivos de configuración y APIs                                |
| Curva de Aprendizaje    | Más fácil de aprender para principiantes                       | Curva de aprendizaje más pronunciada para aquellos no familiarizados con herramientas de línea de comandos y C/C++ |
| Casos de Uso            | Proyectos IoT simples, prototipado                             | Aplicaciones IoT complejas, sistemas en tiempo real, hardware personalizado                                       |

## Solución de Problemas

Algunos problemas pueden surgir en el proceso de conexión de hardware, depuración de software o carga.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
