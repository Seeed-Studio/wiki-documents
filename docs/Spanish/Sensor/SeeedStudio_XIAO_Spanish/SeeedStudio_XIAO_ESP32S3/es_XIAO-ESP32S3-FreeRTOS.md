---
description: XIAO ESP32S3(Sense) With FreeRTOS
title: XIAO ESP32S3(Sense) con FreeRTOS
keywords:
  - Software
  - FreeRtos
  - sd
  - camera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/xiao-esp32s3-freertos
last_update:
  date: 02/12/2025
  author: Guillermo
---

# XIAO ESP32S3(Sense) con FreeRTOS

Este wiki cubre el soporte de [FreeRTOS](https://freertos.org/) para el [Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started_spanish/). Con la ayuda de esta guía, podrás aprovechar las características disponibles en la placa.

## ¿Qué es [FreeRTOS](https://www.freertos.org/index.html)?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/1.png" alt="pir" width={600} height="auto" /></p>

FreeRTOS es una colección de bibliotecas C compuesta por un núcleo de tiempo real y un conjunto de bibliotecas modulares que implementan funcionalidades complementarias. El núcleo de FreeRTOS es un núcleo de tiempo real (o programador de tiempo real) que permite que las aplicaciones basadas en FreeRTOS cumplan con sus requisitos de tiempo real. Permite que las aplicaciones se organicen como una colección de hilos independientes de ejecución.

_Referencia: [**Mastering the FreeRTOS Real Time Kernel**](https://www.freertos.org/Documentation/02-Kernel/07-Books-and-manual/01-RTOS_book)_

## Puertos de FreeRTOS

FreeRTOS es un sistema operativo en tiempo real (RTOS) de código abierto que está integrado en ESP-IDF como un componente. Por lo tanto, todas las aplicaciones de ESP-IDF y muchos componentes de ESP-IDF están escritos basados en FreeRTOS. El núcleo de FreeRTOS está adaptado a todas las arquitecturas (es decir, Xtensa y RISC-V) disponibles en los chips ESP.

Usaremos el puerto de FreeRTOS para ESP IDF.

## Preparación del Hardware

Estoy utilizando el [Seed Studio XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started_spanish/) y la cámara, micrófono y lector de tarjetas SD integrados, junto con la funcionalidad Wi-Fi del ESP32S3.

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
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Componentes Adicionales

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Pantalla I2C, RTC y Botón
- [Sensor de Calidad del Aire v1.3](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-v1-3-Arduino-Compatible.html)
- [Grove - Sensor de Temperatura, Humedad, Presión y Gas para Arduino - BME680](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)
- [Caja Acrílica para la Placa de Expansión Seeed Studio XIAO](https://www.seeedstudio.com/XIAO-p-4812.html)

## Preparación del Software

Estoy utilizando Visual Studio Code (Windows) con ESP-IDF.

1. Instalación de VSCode
2. Guía de instalación de ESP-IDF
3. Repositorio de Git

<div class="table-center">
  <table align="center">
    <tr>
        <th>VS Code</th>
        <th>ESP-IDF for VSCode</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://code.visualstudio.com/download">
              <strong><span><font color={'FFFFFF'} size={"4"}> Descarga VSCode⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/tutorial/install.md">
              <strong><span><font color={'FFFFFF'} size={"4"}> Instalación ESP-IDF ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Empezando

### Configuración de ESP-IDF

Después de configurar la [extensión de Visual Studio](https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/tutorial/install.md), abre la terminal y pega el siguiente comando para acceder a las herramientas de línea de comandos de ESP-IDF desde el entorno de terminal normal (fuera de VScode).

:::note
La instalación normal de la extensión [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html) en VS-Code cubre el 90% de los casos de uso. Realiza los siguientes pasos solo si necesitas las herramientas de línea de comandos de ESP fuera del entorno de desarrollo.
:::

PowerShell (Windows)

```shell
.$HOME\esp\v5.3\esp-idf\export.ps1
```

:::info
La ruta `".$HOME\esp\v5.3\esp-idf"` puede variar según el usuario. Esta es la ruta de instalación predeterminada.  
Sustitúyela por la ruta de instalación en tu dispositivo.
:::
:::tip
Para evitar la configuración repetida, abre PowerShell en modo administrador y escribe el siguiente comando:

```shell
notepad $PSHOME\Profile.ps1
```

Una instancia de Notepad se abrirá. Pega el comando export en el archivo de Notepad y guárdalo. Luego, abre una instancia de PowerShell, y debería mostrar algo similar a la siguiente salida:

```shell
Done! You can now compile ESP-IDF projects.
```

:::  
Si todo se hace correctamente, escribe el siguiente comando:

```shell
idf.py
```

debería mostrar lo siguiente:

```shell
Usage: idf.py [OPTIONS] COMMAND1 [ARGS]... [COMMAND2 [ARGS]...]...

  ESP-IDF CLI build management tool. For commands that are not known to idf.py an attempt to execute it as a build
  system target will be made. Selected target: None
```

## ¿Qué son las tareas (Tasks)?

Las tareas son pequeñas funciones o trabajos que el procesador debe realizar con un conjunto de configuraciones. Las tareas pueden variar desde funciones pequeñas hasta funciones que se ejecutan en un bucle infinito.  
Las tareas son las unidades fundamentales de ejecución en una aplicación ESP-IDF. Son, esencialmente, funciones que se ejecutan de forma concurrente con otras tareas. Esto permite realizar múltiples tareas de manera eficiente y mejorar la capacidad de respuesta.

### ¿Cuáles son las propiedades de las tareas?

Debido a la amplitud de este tema, cubriré solo algunas de las propiedades que utilizaremos en esta guía.

- **TaskFunction**: Es la función que contiene la lógica real de la tarea. Es el punto de entrada para la ejecución de la tarea.
- **StackSize**: Especifica la cantidad de memoria asignada para la pila de la tarea. La pila se utiliza para almacenar variables locales, direcciones de retorno de funciones y datos temporales.
- **TaskPriority**: Determina la importancia relativa de la tarea en comparación con otras tareas. Las tareas de mayor prioridad tienen más posibilidades de ejecutarse antes que las de menor prioridad.
- **TaskParameters**: Son argumentos opcionales que se pueden pasar a la función de la tarea cuando se crea. Pueden usarse para proporcionar contexto o configuraciones adicionales a la tarea.
- **CoreAffinity**: Especifica a qué núcleo del procesador se debe asignar la tarea. En sistemas con múltiples núcleos, se puede usar para optimizar el rendimiento o equilibrar la carga de trabajo.

### Crear una tarea

Para crear una tarea en FreeRTOS, se utiliza la función xTaskCreate. Esta función toma varios parámetros, incluyendo la función de la tarea, el nombre de la tarea, el tamaño de la pila, los parámetros, la prioridad y un manejador para la tarea creada.

```c
TaskHandle_t task;
xTaskCreate(
        taskFunction,             /* Función que implementa la tarea. */
        "taskName",               /* Nombre de texto para la tarea. */
        configMINIMAL_STACK_SIZE, /* Tamaño de la pila en palabras o bytes. */
        NULL,                     /* Parámetro pasado a la tarea. */
        tskIDLE_PRIORITY,         /* Prioridad con la que se crea la tarea. */
        &task                     /* Se usa para pasar el manejador de la tarea creada. */
        );
```

### Crear una tarea asignada a un núcleo

Para crear una tarea y asignarla a un núcleo específico (solo si el chip en uso es de doble núcleo), se utiliza la función xTaskCreatePinnedToCore. Esta función es similar a xTaskCreate, pero incluye un parámetro adicional para especificar el núcleo.

```c
TaskHandle_t task;
xTaskCreatePinnedToCore(
        taskFunction,             /* Función que implementa la tarea. */
        "taskName",               /* Nombre de texto para la tarea. */
        configMINIMAL_STACK_SIZE, /* Tamaño de la pila en palabras o bytes. */
        NULL,                     /* Parámetro pasado a la tarea. */
        tskIDLE_PRIORITY,         /* Prioridad con la que se crea la tarea. */
        &task,                    /* Se usa para pasar el manejador de la tarea creada. */
        0);                       /* ID del núcleo */
```

### Llamada a la función de tarea

La función de tarea es el código que será ejecutado por la tarea.

```c
void taskFunction(void * pvParameters) {
  /*
  La definición de la función va aquí
  */
}
```

## Visualización de tareas

Estoy creando cuatro tareas simples para visualizar cómo funciona FreeRTOS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/2.png" alt="pir" width={700} height="auto" /></p>

### Representación visual

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

### Code

```c
#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "sdkconfig.h"
#include "esp_log.h"

TaskHandle_t task1,task2,task3,task4;

void taskFunction1(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task1", "Hola desde la tarea 1");
        vTaskDelay(pdMS_TO_TICKS(1000)); // Agregar un retraso para evitar sobrecargar la salida
    }
}

void taskFunction2(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task2", "Hola desde la tarea 2");
        vTaskDelay(pdMS_TO_TICKS(500)); // Agregar un retraso para evitar sobrecargar la salida
    }
}

void taskFunction3(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task3", "Hola desde la tarea 3");
        vTaskDelay(pdMS_TO_TICKS(500)); // Agregar un retraso para evitar sobrecargar la salida
    }
}

void taskFunction4(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task4", "Hola desde la tarea 4");
        vTaskDelay(pdMS_TO_TICKS(500)); // Agregar un retraso para evitar sobrecargar la salida
    }
}

void app_main(void) {
    xTaskCreatePinnedToCore(
        taskFunction1, /* Función que implementa la tarea. */
        "task_1",        /* Nombre de texto para la tarea. */
        configMINIMAL_STACK_SIZE, /* Tamaño de la pila en palabras, no en bytes. */
        NULL,            /* Parámetro pasado a la tarea. */
        tskIDLE_PRIORITY, /* Prioridad con la que se crea la tarea. */
        &task1,         /* Se usa para pasar el manejador de la tarea creada. */
        0);              /* ID del núcleo */

    xTaskCreatePinnedToCore(
        taskFunction2, /* Función que implementa la tarea. */
        "task_2",        /* Nombre de texto para la tarea. */
        configMINIMAL_STACK_SIZE, /* Tamaño de la pila en palabras, no en bytes. */
        NULL,            /* Parámetro pasado a la tarea. */
        tskIDLE_PRIORITY, /* Prioridad con la que se crea la tarea. */
        &task2,         /* Se usa para pasar el manejador de la tarea creada. */
        1);              /* ID del núcleo */

    xTaskCreatePinnedToCore(
        taskFunction3, /* Función que implementa la tarea. */
        "task_3",        /* Nombre de texto para la tarea. */
        configMINIMAL_STACK_SIZE, /* Tamaño de la pila en palabras, no en bytes. */
        NULL,            /* Parámetro pasado a la tarea. */
        tskIDLE_PRIORITY, /* Prioridad con la que se crea la tarea. */
        &task3,         /* Se usa para pasar el manejador de la tarea creada. */
        1);              /* ID del núcleo */

    xTaskCreatePinnedToCore(
        taskFunction4, /* Función que implementa la tarea. */
        "task_4",        /* Nombre de texto para la tarea. */
        configMINIMAL_STACK_SIZE, /* Tamaño de la pila en palabras, no en bytes. */
        NULL,            /* Parámetro pasado a la tarea. */
        tskIDLE_PRIORITY, /* Prioridad con la que se crea la tarea. */
        &task4,         /* Se usa para pasar el manejador de la tarea creada. */
        1);              /* ID del núcleo */
}
```

:::tip
configMINIMAL_STACK_SIZE se puede cambiar en sdkconfig.
:::

1. **Cuatro tareas**: El código define cuatro tareas: `taskFunction1`, `taskFunction2`, `taskFunction3` y `taskFunction4`.
2. **Prioridades de tarea**: Todas las tareas se crean con `tskIDLE_PRIORITY`. Esto significa que tienen la misma prioridad.
3. **Asignación de tareas a núcleos**: `taskFunction1` está asignada al núcleo 0 (CPU0), mientras que las otras tres tareas están asignadas al núcleo 1 (CPU1).
4. **Retrasos de tarea**: `taskFunction1` tiene un retraso de 1000 ms, mientras que las otras tres tienen un retraso de 500 ms.

### Creación del cronograma de tareas para CPU0 y CPU1

He creado un cronograma básico de tareas para CPU0 y CPU1.

#### Cronograma de tareas en CPU0

```shell
Task: taskFunction1
Priority: Idle (lowest)
Delay: 1000ms
Core: 0
```

#### Cronograma de tareas en CPU0

```shell
Tasks: taskFunction2, taskFunction3, taskFunction4
Priorities: All Idle (same priority)
Delays: 500ms for all tasks
Core: 1
```

:::info
Este es un cronograma simplificado. El cronograma real de tareas en un sistema en tiempo real involucraría factores más complejos, como las prioridades de las tareas, los plazos y las restricciones de recursos.
:::

<details>

<summary> Output</summary>

```shell
I (11412) Task1: Hola desde la tarea 1
I (11522) Task3: Hola desde la tarea 3
I (11522) Task2: Hola desde la tarea 2
I (11532) Task4: Hola desde la tarea 4
I (12032) Task3: Hola desde la tarea 3
I (12032) Task2: Hola desde la tarea 2
I (12042) Task4: Hola desde la tarea 4
I (12422) Task1: Hola desde la tarea 1
I (12542) Task3: Hola desde la tarea 3
I (12542) Task2: Hola desde la tarea 2
I (12552) Task4: Hola desde la tarea 4
I (13052) Task3: Hola desde la tarea 3
I (13052) Task2: Hola desde la tarea 2
I (13062) Task4: Hola desde la tarea 4
I (13432) Task1: Hola desde la tarea 1
I (13562) Task3: Hola desde la tarea 3
I (13562) Task2: Hola desde la tarea 2
I (13572) Task4: Hola desde la tarea 4
I (14072) Task3: Hola desde la tarea 3
I (14072) Task2: Hola desde la tarea 2
I (14082) Task4: Hola desde la tarea 4
```

</details>

## Sondeo de sensor usando FreeRTOS

Para esto, estoy utilizando un sensor analógico [Grove Air Quality Sensor v1.3](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-v1-3-Arduino-Compatible.html) junto con ESP_IDF_v5.3.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Priyanshu0901/Air_quality_Sensor_ESP-IDF.git">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga el codigo</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Configuración de hardware

Conecta el Xiao-S3 a la [Placa de expansión Grove](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) y conecta el sensor de calidad del aire, [Grove Air Quality Sensor v1.3](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-v1-3-Arduino-Compatible.html) al conector analógico.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/3.jpg" alt="pir" width={600} height="auto" /></p>

### Configuración de software

Después de clonar el repositorio de Git, abre la carpeta en VSCode. Ve a Ver->Paleta de Comandos->ESP-IDF: Agregar carpeta de configuración de vscode.
Desde el panel inferior, selecciona el puerto COM correcto, el chip (ESP-S3) y construye, flashea y monitorea.

### Descripción del código

Este código está diseñado para recopilar datos de calidad del aire de un sensor, procesar los datos crudos para determinar el nivel de calidad del aire y imprimir los resultados periódicamente en la consola.

#### Componentes clave:

- **Inicialización del sensor**:

```c
air_quality_sensor_t air_quality_sensor;

void sensor_setup()
{
    air_quality_sensor._io_num = ADC_CHANNEL_0;
    air_quality_sensor._adc_num = ADC_UNIT_1;
    printf("Iniciando sensor de calidad del aire...\n");
    if(!initialize_air_quality_sensor(&air_quality_sensor))
    {
        printf("Sensor: listo\n");
    }
    else{
        printf("Sensor: ERROR!\n");
    }
}
```

- La función **sensor_setup()** configura los pines de E/S del sensor y la unidad ADC.
- Intenta inicializar el sensor usando **initialize_air_quality_sensor()**.
- Si la inicialización es exitosa, el sensor está listo para la recolección de datos.

- Tarea de recolección de datos:

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

- La tarea **poll_read_air_quality_sensor()** se crea para leer continuamente los datos crudos del sensor.
- Llama a **air_quality_sensor_slope()** para procesar los datos crudos y calcular la pendiente, que es un indicador de la calidad del aire.
- La tarea se retrasa 500 milisegundos antes de leer el siguiente punto de datos.

- Tarea de impresión de datos:

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

- La tarea **print_read_air_quality_sensor()** se crea para imprimir periódicamente los datos recolectados y la calidad del aire calculada.
- Recupera la hora actual, la pendiente, el valor crudo y el mensaje de calidad del aire utilizando **air_quality_error_to_message()**.
- La tarea imprime los datos en la consola de manera formateada.
- La tarea se retrasa 1000 milisegundos antes de imprimir el siguiente punto de datos.

```c

void app_main(void)
{
    sensor_setup();
    xTaskCreatePinnedToCore(
        poll_read_air_quality_sensor,   /* Función que implementa la tarea. */
        "poll_read_air_quality_sensor", /* Nombre en texto de la tarea. */
        configMINIMAL_STACK_SIZE * 2,   /* Tamaño de la pila en palabras, no en bytes. */
        NULL,                           /* Parámetro pasado a la tarea. */
        tskIDLE_PRIORITY,               /* Prioridad con la que se crea la tarea. */
        NULL,                           /* Se utiliza para pasar el handle de la tarea creada. */
        0);                             /* ID del núcleo */

    xTaskCreatePinnedToCore(
        print_read_air_quality_sensor,   /* Función que implementa la tarea. */
        "print_read_air_quality_sensor", /* Nombre en texto de la tarea. */
        configMINIMAL_STACK_SIZE * 2,    /* Tamaño de la pila en palabras, no en bytes. */
        NULL,                            /* Parámetro pasado a la tarea. */
        tskIDLE_PRIORITY + 1,            /* Prioridad con la que se crea la tarea. */
        NULL,                            /* Se utiliza para pasar el handle de la tarea creada. */
        0);                              /* ID del núcleo */
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

## Uso de la cámara y la tarjeta SD en FreeRTOS

Para esto, estoy utilizando la cámara integrada y la tarjeta SD junto con ESP_IDF_v5.3.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Priyanshu0901/Camera-and-SdCard-FreeRTOS.git">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga el codigo</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Configuración de hardware

Sigue la [guía de la tarjeta microSD](https://wiki.seeedstudio.com/xiao_esp32s3_sense_filesystem/) y la [guía de la cámara](https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage/) para conectar la cámara y la placa de expansión para la microSD.

- Formatea la tarjeta microSD (es compatible hasta 32GB).
- Conecta la tarjeta microSD a la placa de expansión.

La configuración debería verse algo así:

<div class="table-center">
  <table align="center">
    <tr>
        <th>Front</th>
        <th>Back</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/6.jpeg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/7.jpeg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

### Configuración de software

Después de obtener el repositorio de git, abre la carpeta en VSCode. Ve a **Ver->Paleta de Comandos->ESP-IDF: Agregar carpeta de configuración de vscode**.  
Desde el panel inferior, selecciona el puerto COM correcto, el chip (ESP-S3) y luego compila, flashea y monitorea.

### Componente de la cámara

- **Configuración de la cámara**:
  - Define los pines GPIO utilizados para diversas funciones de la cámara (PWDN, RESET, XCLK, SIOD, SIOC, Y9-Y2, VSYNC, HREF, PCLK, LED).
  - Establece los valores predeterminados para los parámetros de la cámara (por ejemplo, frecuencia del reloj, ubicación del búfer de fotogramas, formato de píxeles, tamaño del fotograma, calidad JPEG, número de búferes de fotogramas, modo de captura).

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

- Camera Interface:  
  Declares functions initialize_camera() and createCameraTask().

- Camera Implementation:

  - Initializes the camera using the defined configuration.

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

        .xclk_freq_hz = 20000000,          // La frecuencia del reloj del sensor de imagen
        .fb_location = CAMERA_FB_IN_PSRAM, // Establece la ubicación de almacenamiento del búfer de fotogramas
        .pixel_format = PIXFORMAT_JPEG,    // El formato de píxeles de la imagen: PIXFORMAT_ + YUV422|GRAYSCALE|RGB565|JPEG
        .frame_size = FRAMESIZE_UXGA,      // El tamaño de resolución de la imagen: FRAMESIZE_ + QVGA|CIF|VGA|SVGA|XGA|SXGA|UXGA
        .jpeg_quality = 15,                // La calidad de la imagen JPEG, que va de 0 a 63.
        .fb_count = 2,                     // El número de búferes de fotogramas a utilizar.
        .grab_mode = CAMERA_GRAB_LATEST    // El modo de captura de imagen.

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

  - Establece los parámetros de la cámara (brillo, contraste, saturación, efectos especiales, balance de blancos, control de exposición, AEC, nivel AE, valor AEC, control de ganancia, ganancia AGC, techo de ganancia, BPC, WPC, GMA raw, LENC, espejo horizontal, volteo vertical, DCW, barra de color).

  ```c
  sensor_t *s = esp_camera_sensor_get();

  s->set_brightness(s, 0);                 // -2 a 2
  s->set_contrast(s, 0);                   // -2 a 2
  s->set_saturation(s, 0);                 // -2 a 2
  s->set_special_effect(s, 0);             // 0 a 6 (0 - Sin efecto, 1 - Negativo, 2 - Escala de grises, 3 - Tinte rojo, 4 - Tinte verde, 5 - Tinte azul, 6 - Sepia)
  s->set_whitebal(s, 1);                   // 0 = deshabilitar, 1 = habilitar
  s->set_awb_gain(s, 1);                   // 0 = deshabilitar, 1 = habilitar
  s->set_wb_mode(s, 0);                    // 0 a 4 - si awb_gain está habilitado (0 - Automático, 1 - Soleado, 2 - Nublado, 3 - Oficina, 4 - Casa)
  s->set_exposure_ctrl(s, 1);              // 0 = deshabilitar, 1 = habilitar
  s->set_aec2(s, 0);                       // 0 = deshabilitar, 1 = habilitar
  s->set_ae_level(s, 0);                   // -2 a 2
  s->set_aec_value(s, 300);                // 0 a 1200
  s->set_gain_ctrl(s, 1);                  // 0 = deshabilitar, 1 = habilitar
  s->set_agc_gain(s, 0);                   // 0 a 30
  s->set_gainceiling(s, (gainceiling_t)0); // 0 a 6
  s->set_bpc(s, 0);                        // 0 = deshabilitar, 1 = habilitar
  s->set_wpc(s, 1);                        // 0 = deshabilitar, 1 = habilitar
  s->set_raw_gma(s, 1);                    // 0 = deshabilitar, 1 = habilitar
  s->set_lenc(s, 1);                       // 0 = deshabilitar, 1 = habilitar
  s->set_hmirror(s, 0);                    // 0 = deshabilitar, 1 = habilitar
  s->set_vflip(s, 0);                      // 0 = deshabilitar, 1 = habilitar
  s->set_dcw(s, 1);                        // 0 = deshabilitar, 1 = habilitar
  s->set_colorbar(s, 0);                   // 0 = deshabilitar, 1 = habilitar

  ```

  - Define una función takePicture() para capturar una imagen y guardarla en la tarjeta SD.

  ```c
    void takePicture()
    {
      ESP_LOGI(cameraTag, "Tomando foto...");
      camera_fb_t *pic = esp_camera_fb_get();

      if (pic)
      {
          saveJpegToSdcard(pic);
      }

      ESP_LOGI(cameraTag, "¡Foto tomada! Su tamaño fue: %zu bytes", pic->len);

      esp_camera_fb_return(pic);
    }
    ```

    - Crea una tarea cameraTakePicture_5_sec() para tomar fotos continuamente cada 5 segundos.

    ```c
  void cameraTakePicture_5_sec(void *pvParameters)
  {
      for (;;)
      {
          takePicture();  // Captura una imagen y la guarda en la tarjeta SD.
          vTaskDelay(5000 / portTICK_PERIOD_MS);  // Espera 5 segundos antes de tomar otra foto.
      }
  }

  void createCameraTask()
  {
      TaskHandle_t task;
      xTaskCreate(
          cameraTakePicture_5_sec,      /* Función que implementa la tarea. */
          "cameraTakePicture_5_sec",    /* Nombre de texto para la tarea. */
          configMINIMAL_STACK_SIZE * 4, /* Tamaño de la pila en palabras o bytes. */
          NULL,                         /* Parámetro pasado a la tarea. */
          tskIDLE_PRIORITY,             /* Prioridad con la que se crea la tarea. */
          &task                         /* Se usa para pasar el manejador de la tarea creada. */
      );
  }

  ```

Estructura del código:

- Archivos de encabezado (camera_config.h, camera_interface.h) y archivos de implementación (camera_interface.c).
- El archivo camera_config.h define los parámetros de configuración de la cámara.
- El archivo camera_interface.h declara las funciones para la inicialización de la cámara y la creación de tareas.
- El archivo camera_interface.c implementa la inicialización de la cámara, la captura de imágenes y la lógica para la creación de tareas.

### Componente SdCard

- Configuración de la tarjeta SD:  
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

- SD Card Interface:  
  Declares functions initialize_sdcard(), deinitialize_sdcard(), and saveJpegToSdcard().

```c
#ifndef SDCARD_INTERFACE_H
#define SDCARD_INTERFACE_H

#include "esp_camera.h"

void initialize_sdcard(void);
void deinitialize_sdcard();
void saveJpegToSdcard(camera_fb_t *);

#endif //SDCARD_INTERFACE_H
```

- Implementación de la tarjeta SD:

  - Inicializa la tarjeta SD utilizando la configuración definida y monta la tarjeta SD como un sistema de archivos FAT.

  ```c
  sdmmc_card_t *card;
  sdmmc_host_t host = SDSPI_HOST_DEFAULT();
  const char mount_point[] = "/sd";

  void initialize_sdcard()
  {
      esp_err_t ret;

      // Si format_if_mount_failed está configurado en true, la tarjeta SD será particionada y
      // formateada en caso de que el montaje falle.
      esp_vfs_fat_sdmmc_mount_config_t mount_config = {
  #ifdef FORMAT_IF_MOUNT_FAILED
          .format_if_mount_failed = true,
  #else
          .format_if_mount_failed = false,
  #endif // EXAMPLE_FORMAT_IF_MOUNT_FAILED
          .max_files = 5,
          .allocation_unit_size = 32 * 1024};

      ESP_LOGI(sdcardTag, "Inicializando tarjeta SD");

      // Utiliza la configuración definida anteriormente para inicializar la tarjeta SD y montar el sistema de archivos FAT.
      // Nota: esp_vfs_fat_sdmmc/sdspi_mount son funciones convenientes todo-en-uno.
      // Por favor, revisa su código fuente e implementa recuperación de errores cuando desarrolles
      // aplicaciones de producción.
      ESP_LOGI(sdcardTag, "Usando el periférico SPI");

      // Por defecto, la frecuencia de la tarjeta SD se inicializa a SDMMC_FREQ_DEFAULT (20MHz)
      // Para configurar una frecuencia específica, usa host.max_freq_khz (rango de 400kHz - 20MHz para SDSPI)
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
          ESP_LOGE(sdcardTag, "Fallo al inicializar el bus.");
          return;
      }

      // Esto inicializa el slot sin las señales de detección de tarjeta (CD) y protección contra escritura (WP).
      // Modifica slot_config.gpio_cd y slot_config.gpio_wp si tu placa tiene estas señales.
      sdspi_device_config_t slot_config = SDSPI_DEVICE_CONFIG_DEFAULT();
      slot_config.gpio_cs = PIN_NUM_CS;
      slot_config.host_id = host.slot;

      ESP_LOGI(sdcardTag, "Montando el sistema de archivos");
      ret = esp_vfs_fat_sdspi_mount(mount_point, &host, &slot_config, &mount_config, &card);

      if (ret != ESP_OK)
      {
          if (ret == ESP_FAIL)
          {
              ESP_LOGE(sdcardTag, "Fallo al montar el sistema de archivos. "
                                  "Si deseas que la tarjeta sea formateada, establece FORMAT_IF_MOUNT_FAILED en sdcard_config.h");
          }
          else
          {
              ESP_LOGE(sdcardTag, "Fallo al inicializar la tarjeta (%s). "
                                  "Asegúrate de que las líneas de la tarjeta SD tengan resistores pull-up.",
                      esp_err_to_name(ret));
          }
          return;
      }
      ESP_LOGI(sdcardTag, "Sistema de archivos montado");

      // La tarjeta ha sido inicializada, se imprimen sus propiedades
      sdmmc_card_print_info(stdout, card);

      // Formatea FATFS
  #ifdef FORMAT_SD_CARD
      ret = esp_vfs_fat_sdcard_format(mount_point, card);
      if (ret != ESP_OK)
      {
          ESP_LOGE(sdcardTag, "Fallo al formatear FATFS (%s)", esp_err_to_name(ret));
          return;
      }

      if (stat(file_foo, &st) == 0)
      {
          ESP_LOGI(sdcardTag, "El archivo todavía existe");
          return;
      }
      else
      {
          ESP_LOGI(sdcardTag, "El archivo no existe, formateo realizado");
      }
  #endif // CONFIG_EXAMPLE_FORMAT_SD_CARD
  }

  ```

  - Proporciona funciones para guardar imágenes JPEG en la tarjeta SD.

  ```c
  uint16_t lastKnownFile = 0;

  void saveJpegToSdcard(camera_fb_t *captureImage)
  {
      // Encuentra el siguiente nombre de archivo disponible
      char filename[32];

      sprintf(filename, "%s/%u_img.jpg", mount_point, lastKnownFile++);

      // Crea el archivo y escribe los datos JPEG
      FILE *fp = fopen(filename, "wb");
      if (fp != NULL)
      {
          fwrite(captureImage->buf, 1, captureImage->len, fp);
          fclose(fp);
          ESP_LOGI(sdcardTag, "JPEG guardado como %s", filename);
      }
      else
      {
          ESP_LOGE(sdcardTag, "Fallo al crear el archivo: %s", filename);
      }
  }
  ```

Estructura del componente:

- Archivos de encabezado (sdcard_config.h, sdcard_interface.h) y archivos de implementación (sdcard_interface.c).
- El archivo sdcard_config.h define los parámetros de configuración de la tarjeta SD.
- El archivo sdcard_interface.h declara las funciones para la inicialización, desinicialización y guardado de imágenes en la tarjeta SD.
- El archivo sdcard_interface.c implementa la lógica de inicialización, desinicialización y guardado de imágenes en la tarjeta SD.

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

- Incluye los archivos de encabezado necesarios para las interfaces de la cámara y la tarjeta SD.
- Inicializa tanto la tarjeta SD como la cámara utilizando las funciones proporcionadas.
- Inicia la tarea de la cámara para tomar fotos continuamente.

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

#### Imagen de Output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/9.jpg" alt="pir" width={600} height="auto" /></p>

## FreeRtos para Arduino IDE

FreeRTOS se puede usar para compilaciones basadas en Arduino-IDE para el XIAO-S3. Es similar a ESP-IDF, pero solo se ejecuta en un solo núcleo y no está optimizado para ESP-IDF.

### Configuración de Hardware

Conecta el XIAO-S3 a la [Placa de expansión Grove](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) (Pantalla OLED y RTC) y conecta el [Sensor Grove - Temperatura, Humedad, Presión y Gas para Arduino - BME680](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html) al bus I2C.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/4.jpg" alt="pir" width={600} height="auto" /></p>

### Configuración de Software

Instala las bibliotecas de Arduino para [pcf8563](https://github.com/Bill2462/PCF8563-Arduino-Library), [U8x8lib](https://github.com/olikraus/U8g2_Arduino) y [bme680](https://github.com/Seeed-Studio/Seeed_Arduino_BME68x). Consulta [Cómo instalar una biblioteca](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/) para instalar bibliotecas en Arduino.

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

### Salida en Monitor Serial 

```shell
09/09/24	03:17:20
T: 29.01 C  P: 90.86 KPa  H: 63.41 %  G: 47.41 Kohms
09/09/24	03:17:21
T: 29.03 C  P: 90.86 KPa  H: 63.34 %  G: 47.85 Kohms
```

## Arduino FreeRtos vs ESP-IDF FreeRtos

| Característica          | Arduino FreeRTOS                                                | ESP-IDF FreeRTOS                                                                                                   |
| ----------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Capa de abstracción     | Abstracción de alto nivel, más fácil para principiantes         | Abstracción de bajo nivel, más control para usuarios experimentados                                               |
| Entorno de desarrollo   | Arduino IDE                                                     | Herramientas de línea de comandos de ESP-IDF                                                                        |
| Compatibilidad          | Principalmente compatible con placas basadas en Arduino        | Compatible con una gama más amplia de placas ESP32 y ESP32-S2                                                      |
| Características         | Características básicas de RTOS, creación de tareas, planificación, sincronización | Características completas de RTOS, creación de tareas, planificación, sincronización, grupos de eventos, colas, mutexes, semáforos |
| Rendimiento             | Generalmente menos eficiente debido a la capa de abstracción   | Más eficiente debido al acceso directo al hardware y las APIs de RTOS                                              |
| Personalización         | Opciones limitadas de personalización                           | Amplias opciones de personalización a través de archivos de configuración y APIs                                  |
| Curva de aprendizaje    | Más fácil de aprender para principiantes                       | Curva de aprendizaje más pronunciada para quienes no están familiarizados con herramientas de línea de comandos y C/C++ |
| Casos de uso            | Proyectos simples de IoT, prototipos                           | Aplicaciones complejas de IoT, sistemas en tiempo real, hardware personalizado                                    |                                                   |

## Resolución de problemas

Pueden surgir algunos problemas durante el proceso de conexión de hardware, depuración de software o carga.

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
