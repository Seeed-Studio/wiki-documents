---
description: Introducción al Asistente de IA.
title: Introducción al Asistente de IA
image: https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Top_Pic.webp
slug: /es/ai_assistant_getting_started
# sidebar_position: 2
last_update:
  date: 08/07/2025
  author: Robin(STMicroelectronics),Atom
---

# Introducción al Asistente de IA

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/1-114993645-Al-Assistant-v1.1.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
 <a class="get_one_now_item" href="https://www.seeedstudio.com/AI-Assistant-p-6510.html">
   <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
 </a>
</div>

## Introducción

El kit de desarrollo del Asistente de IA, creado conjuntamente por Seeed Studio y STMicroelectronics. Esta es una plataforma de desarrollo diseñada para aplicaciones de IA de vanguardia en el borde. Centrado en el MCU STM32N657 de alto rendimiento con su acelerador de IA ST Neural-ART integrado, combina perfectamente potentes capacidades de computación de IA con las ventajas clásicas de los MCU de bajo consumo de energía, factor de forma pequeño y rentabilidad. El kit viene equipado con una cámara de obturador global integrada, un sensor IMU con una unidad de procesamiento de IA, una pantalla táctil de alta definición y un módulo Wi-Fi, ofreciendo una solución completa de hardware y software para desarrollar productos de próxima generación de visión inteligente e interacción por voz.

### Características

- **Característica 1: Microcontrolador de IA Insignia**
 Alimentado por el ST STM32N657, con un núcleo Arm® Cortex®-M55 de alto rendimiento y una NPU ST Neural-ART integrada que ofrece hasta 600 GOPS para una aceleración eficiente de modelos de IA.
- **Característica 2: Sensor de Visión de Grado Profesional**
Equipado con una cámara de obturador global ST VD55G1, proporcionando imágenes nítidas y sin distorsión de objetos en movimiento rápido, lo cual es crítico para tareas de visión por computadora de alta precisión.
- **Característica 3: Detección Inteligente con ISPU**
Cuenta con un IMU LSM6DSO16IS con una Unidad de Procesamiento de Sensor Inteligente (ISPU) integrada, permitiendo reconocimiento de gestos y actividades de ultra bajo consumo sin despertar el procesador principal.
- **Característica 4: Periféricos Interactivos Ricos**
Integra una pantalla táctil capacitiva de 4.0 pulgadas 480x480, un micrófono digital de alta fidelidad y un códec de audio, proporcionando una base de hardware completa para desarrollar aplicaciones de IA interactivas desde el primer momento.
- **Característica 5: Conectividad Integral**
Incluye un módulo Wi-Fi integrado para conectividad IoT sin problemas, junto con un puerto USB-C y múltiples conectores de expansión para máxima flexibilidad de desarrollo.

## Descripción General del Hardware

Antes de que todo comience, es bastante esencial tener algunos parámetros básicos del producto. La siguiente tabla proporciona información sobre las características del **Asistente de IA**.

| Categoría            | Característica        | Especificación                                                                |
|----------------------|------------------------|-------------------------------------------------------------------------------|
| **Sistema Central**  | Controlador Principal  | STMicroelectronics STM32N657X0H3Q                                             |
|                      | Arquitectura del Núcleo| Arm® Cortex®-M55                                             |
|                      | Unidad de Procesamiento Neural | ST Neural-ART, 600 GOPS                                                       |
|                      | Memoria Externa        | 128MB NOR Flash, 32MB DRAM                                                    |
| **Sensores**         | Cámara                 | STMicroelectronics VD55G1 (800x700, Obturador Global)                         |
|                      | IMU                    | STMicroelectronics LSM6DSO16IS (6 ejes con ISPU integrado)                    |
|                      | Magnetómetro           | STMicroelectronics LIS2MDL                                                    |
| **Periféricos**      | Pantalla               | TFT LCD de 4.0" (480x480), Táctil Capacitivo                                  |
|                      | Audio                  | Códec Cirrus Logic WM8994 y Micrófono Digital ST MP34DT06JTR                  |
| **Conectividad**     | Inalámbrico            | Módulo Wi-Fi MXCHIP EMW3080                                                   |
|                      | Interfaces             | USB-C x1, Puerto SWD x1, Expansión de Micrófono x1, Interfaz de Cámara RPi x1|
| **Mecánico y Energía**| Dimensiones (Carcasa)  | 130mm x 90mm                                                                  |
|                      | Fuente de Alimentación | 5V vía USB-C o Puerto de Batería de Litio                                     |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Hardware_Overview.png" style={{width:800, height:'auto'}}/></div>

### Descripción General de la Capa Superior de la Placa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Top.png" style={{width:800, height:'auto'}}/></div>

### Descripción General de la Capa Inferior de la Placa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Bottom.png" style={{width:800, height:'auto'}}/></div>

***

## Comenzar con la Aplicación de Referencia del Asistente de IA

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/stm32-hotspot/STM32N6-AI-Assistant-People-Detection" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Para comenzar, **clona el repositorio desde el enlace de GitHub**`git clone https://github.com/stm32-hotspot/STM32N6-AI-Assistant-People-Detection.git` en tu carpeta local preferida.

Aplicación de Visión por Computadora para habilitar el despliegue de modelos de detección de objetos en la placa del Asistente de IA. Está basada en el lanzamiento oficial del paquete de aplicación n6-ai-people-detection-v1.0.0 para la placa STM32N6570-DK.

Esta aplicación está preconstruida con un modelo de detección de personas "TinyYOLOv2".

Esta sección proporciona una descripción general de la aplicación. Documentación adicional está disponible en la [Documentación Adicional de la Aplicación](#documentación-adicional-de-la-aplicación).

### Características Demostradas en Este Ejemplo

- Flujo de aplicación multi-hilo (Azure RTOS ThreadX)
- Inferencia de modelo de IA cuantizado acelerado por NPU
- Tuberías duales DCMIPP
- Recorte, decimación, reducción de escala DCMIPP
- Implementación de doble capa LTDC
- Uso de ISP DCMIPP
- Modo de desarrollo
- Arranque desde Flash Externo

### Soporte de Hardware

- Kit del Asistente de IA

- Se soportan 3 cámaras:
  - MB1854B IMX335

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/3-114993645-Al-Assistant-v1.1.jpg" style={{width:800, height:'auto'}}/></div>
Kit del Asistente de IA con Cámara VD55G1.

### Versión de Herramientas

- STM32CubeIDE (**STM32CubeIDE 1.18.0**)
- STM32CubeProgrammer (**v2.18.0**)
- [STEdgeAI](https://www.st.com/en/development-tools/stedgeai-core.html) (**v2.1.0**)

### Conexión ST-Link

**Conectores del Lado Derecho**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/STLC1.PNG" style={{width:1000, height:'auto'}}/></div>

**Conectores del Lado Izquierdo**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/STLC2.PNG" style={{width:1000, height:'auto'}}/></div>

**Conexión del Depurador**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/STLC3.PNG" style={{width:1000, height:'auto'}}/></div>

**Pinout de los Conectores**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/STLC4.PNG" style={{width:1000, height:'auto'}}/></div>

### Modos de Arranque

El STM32N6 no tiene flash interno. Para conservar tu firmware después de un reinicio, debes programarlo en el flash externo.
Alternativamente, puedes cargar tu firmware directamente desde SRAM (modo de desarrollo). Sin embargo, en modo de desarrollo, si apagas la placa, tu programa se perderá.

**Modos de arranque:**

- Modo de desarrollo: cargar firmware desde sesión de depuración en RAM (interruptor de arranque hacia la derecha)
- Arranque desde flash: Programar firmware en flash externo (interruptor de arranque hacia la izquierda)

### Inicio Rápido Usando Binarios Preconstruidos

#### Flashear Binarios Preconstruidos

Tres binarios deben ser programados en el flash externo de la placa usando el siguiente procedimiento:

  1. Cambiar el interruptor BOOT a la posición superior.
  2. Programar `Binary/ai_assistant_fsbl.hex` (Se hace una vez) (Cargador de arranque de primera etapa).
  3. Programar `Binary/network_data.hex` (parámetros de las redes; Se cambia solo cuando la red es cambiada).
  4. Programar `Binary/AI_Assistant_Ref_Project.hex` (aplicación de firmware).
  5. Cambiar el interruptor BOOT a la posición inferior.
  6. Realizar una secuencia de apagado/encendido.

#### Cómo Programar Archivos Hex Usando la UI de STM32CubeProgrammer

Ver [Cómo Programar Archivos Hex STM32CubeProgrammer](#cómo-programar-archivos-hex).

#### Cómo Programar Archivos Hex Usando Línea de Comandos

Asegúrate de tener la carpeta bin de STM32CubeProgrammer agregada a tu ruta.

```bash
export DKEL="<STM32CubeProgrammer_N6 Install Folder>/bin/ExternalLoader/MX66UW1G45G_STM32N6570-DK.stldr"

# First Stage Boot Loader
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Binary/ai_fsbl.hex

# Network Parameters and Biases
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Binary/network_data.hex

# Application Firmware
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Binary/x-cube-n6-ai-people-detection.hex

```

### Inicio Rápido Usando Código Fuente

Antes de compilar y ejecutar la aplicación, tienes que programar `network_data.hex` (pesos y sesgos del modelo).

Este paso solo debe realizarse una vez a menos que cambies el modelo de IA.
Ver [Inicio Rápido Usando Binarios Preconstruidos](#inicio-rápido-usando-binarios-preconstruidos) para más detalles.

Más información sobre los modos de arranque está disponible en [Resumen de Arranque](#resumen-de-arranque) .

#### Compilación y Ejecución de la Aplicación - Modo Dev

**Asegúrate de tener el interruptor hacia el lado derecho.**

##### STM32CubeIDE

Haz doble clic en `STM32CubeIDE/.project` para abrir el proyecto en STM32CubeIDE. Compila y ejecuta con los botones de compilar y ejecutar.

##### Makefile

Antes de ejecutar los comandos a continuación, asegúrate de tener los comandos en tu PATH.

1. Compila el proyecto usando el `Makefile` proporcionado:

```bash
make -j8
```

2. Abre un servidor GDB conectado al objetivo STM32:

```bash
ST-LINK_gdbserver -p 61234 -l 1 -d -s -cp <path-to-stm32cubeprogramer-bin-dir> -m 1 -g
```

3. En una sesión de terminal separada, inicia una sesión GDB para cargar la imagen del firmware en la memoria del dispositivo:

```bash
$ arm-none-eabi-gdb build/Project.elf
(gdb) target remote :61234
(gdb) monitor reset
(gdb) load
(gdb) continue
```

#### Compilación y Ejecución de la Aplicación - Arranque desde Flash

**Asegúrate de tener el interruptor en el lado derecho.**

##### STM32CubeIDE

Haz doble clic en `STM32CubeIDE/.project` para abrir el proyecto en STM32CubeIDE. Compila con el botón de compilar.

##### Makefile

Antes de ejecutar los comandos a continuación, asegúrate de tenerlos en tu PATH.

1. Compila el proyecto usando el `Makefile` proporcionado:

```bash
make -j8
```

Una vez que tu aplicación esté compilada con Makefile, STM32CubeIDE, o EWARM, puedes agregar una firma al archivo bin:

```bash
STM32_SigningTool_CLI -bin build/Project.bin -nk -t ssbl -hv 2.3 -o build/Project_sign.bin
```

Puedes programar el archivo bin firmado en la dirección `0x70100000`.

```bash
export DKEL="<STM32CubeProgrammer_N6 Install Folder>/bin/ExternalLoader/MX66UW1G45G_STM32N6570-DK.stldr"

# Adapta la ruta de compilación a tu IDE
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w build/Project_sign.bin 0x70100000
```

Nota: Solo el binario de la aplicación necesita ser programado si el FSBL y network_data.hex fueron programados previamente.

### Problemas Conocidos y Limitaciones

- (NN_WIDTH * NN_BPP) debe ser un múltiplo de 16.
- (LCD_BG_WIDTH * 2) debe ser un múltiplo de 16.

***

## Documentación Adicional de la Aplicación

### Resumen de la Aplicación

#### Flujo de Datos de la Aplicación

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/DataFlow.JPG" style={{width:1000, height:'auto'}}/></div>

#### Diagrama de Temporización de la Aplicación

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/ThreadTiming.JPG" style={{width:1000, height:'auto'}}/></div>

### Detalles de Huella de Memoria

#### Datos de Solo Lectura

| Nombre         | Tamaño  | Ubicación | Notas            |
|----------------|---------|-----------|------------------|
| `network_data` | 10.59 MB | .rodata  | FLASH xSPI2 8b   |

#### Datos de Lectura-Escritura

| Nombre             | Tamaño    | Ubicación  | Notas                             |
|--------------------|-----------|------------|-----------------------------------|
| `lcd_bg_buffer`    | 2300 KB   | .psram_bss | PSRAM / (800x480x2) x 3 / RGB565  |
| `lcd_fg_buffer`    | 1500 KB   | .psram_bss | PSRAM / (800x480x2) x 2 / ARGB4444|
| `nn_input_buffers` | 294 KB    | .psram_bss | PSRAM / (224x224x3) x 2 / RGB888  |
| `nn_output_buffers`| 12 KB     | .bss       | SRAM / 5880 x 2                   |
| `activations`      | 507 KB    | 0x34200000 | NPURAMS                           |
| `threads stacks`   | 20 KB     | .bss       | SRAM / 4096 * 5                   |

### DCMIPP e ISP

#### Resumen de DCMIPP

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/DCMIPP.JPG" style={{width:1000, height:'auto'}}/></div>

- El Pipe 1 se habilita usando `CMW_CAMERA_Start(DCMIPP_PIPE1, *ptr_dst, CAMERA_MODE_CONTINUOUS);` para transmitir continuamente imágenes desde imx335 al `lcd_bg_buffer[]` con buffer DISPLAY_BUFFER_NB. Nota que `ptr_dst` se actualizará en el frame_event del pipe1.
- El Pipe 2 se habilita usando `CMW_CAMERA_Start(DCMIPP_PIPE2, *ptr_dst, CAMERA_MODE_CONTINUOUS);` para transmitir continuamente imágenes desde imx335 al `nn_input_buffers[]` con doble buffer. Nota que `ptr_dst` se actualizará en el frame_event del pipe2. Esto permite descartar el frame anterior si el buffer aún está en uso por el hilo nn.
- Para cada captura, la configuración ISP se actualiza para mejorar la calidad de imagen dependiendo de las condiciones de iluminación. Se inicializa a través de `ISP_Init` y luego se ejecuta con `ISP_BackgroundProcess`.

Para más detalles sobre DCMIPP, ver la sección Digital Camera Interface Pixel Pipeline (DCMIPP) en el Manual de Referencia STM32N6.

### Resumen de Arranque

#### Modo Dev

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Dev_mode.png" style={{width:1000, height:'auto'}}/></div>

#### Arranque desde Flash con First Stage Boot Loader

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/FSBL1.png" style={{width:1000, height:'auto'}}/></div>

### Opciones de Compilación

Algunas características se habilitan usando opciones de compilación o usando `app_config.h`:

- [Orientación de la Cámara](#orientación-de-la-cámara)

Esta documentación explica esas características y cómo modificarlas.

#### Orientación de la Cámara

Las cámaras permiten voltear la imagen a lo largo de dos ejes.

- `CMW_MIRRORFLIP_MIRROR`: Modo selfie
- `CMW_MIRRORFLIP_FLIP`: Voltear boca abajo
- `CMW_MIRRORFLIP_FLIP_MIRROR`: Voltear ambos ejes
- `CMW_MIRRORFLIP_NONE`: Por defecto

1. Abre **app_config.h**.

2. Cambia la definición `CAMERA_FLIP`:

```c
/* Defines: CMW_MIRRORFLIP_NONE; CMW_MIRRORFLIP_FLIP; CMW_MIRRORFLIP_MIRROR; CMW_MIRRORFLIP_FLIP_MIRROR; */

#define CAMERA_FLIP CMW_MIRRORFLIP_NONE
```

### Despliega Tu Modelo TFLite

Para ejecutar tu propio modelo de detección de objetos, sigue estos pasos:

- [1. Generar Modelo C desde Modelo TFLite](#1-generar-modelo-c-desde-modelo-tflite)
- [2. Programar Tus Datos de Red](#2-programar-tus-datos-de-red)
- [3. Proporcionar Información NN en `app_config.h`](#3-proporcionar-información-nn-en-app_configh)
  - [Tipo de Post Proceso](#tipo-de-post-proceso)
  - [Configurar Parámetros de Post Proceso a Través de Archivo de Usuario](#configurar-parámetros-de-post-proceso-a-través-de-archivo-de-usuario)
  - [Información de Tamaño NN](#información-de-tamaño-nn)
  - [Etiquetas de Clase](#etiquetas-de-clase)
  - [Retraso de Pantalla](#retraso-de-pantalla)
- [4. Compilar Aplicación](#4-compilar-aplicación)
- [5. Ejecutar Aplicación](#5-ejecutar-aplicación)
  - [Modo Dev](#modo-dev)
  - [Arranque desde Flash](#arranque-desde-flash)

#### 1. Generar Modelo C desde Modelo TFLite

Para generar el `network.c`, `network_ecblobs.h` y el archivo que contiene los parámetros de red, debes instalar STM32Cube.AI

1. Agrega `<folderInstall>/Utilities/<your_os>/` a tu path para que `stedgeai` sea conocido por tu bash.

2. Agrega `<stm32cubeide_folderInstall>/plugins/com.st.stm32cube.ide.mcu.externaltools.gnu-tools-for-<plugin_version>/tools/bin` a tu path para que `arm-none-eabi-objcopy` sea conocido por tu bash.

```bash
cd Model
stedgeai generate --no-inputs-allocation --no-outputs-allocation --model quantized_tiny_yolo_v2_224_.tflite --target stm32n6 --st-neural-art default@user_neuralart.json
cp st_ai_output/network_ecblobs.h .
cp st_ai_output/network.c .
cp st_ai_output/network_atonbuf.xSPI2.raw network_data.xSPI2.bin
arm-none-eabi-objcopy -I binary network_data.xSPI2.bin --change-addresses 0x70380000 -O ihex network_data.hex
```

Puedes encontrar el siguiente script en **Model/generate-n6-model.sh**

#### 2. Programar Tus Datos de Red

Ahora puedes programar tus datos de red en la flash externa.

```bash
export DKEL="<STM32CubeProgrammer_N6 Install Folder>/bin/ExternalLoader/MX66UW1G45G_STM32N6570-DK.stldr"

# Pesos y parámetros
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Model/network_data.hex
```

#### 3. Proporcionar Información NN en `app_config.h`

Necesitas editar las últimas líneas de **Inc/app_config.h** para hacer la aplicación compatible con tu red.

##### Tipo de Post Proceso

Esta aplicación soporta cuatro tipos de post-procesamiento de detección de objetos. Puedes seleccionar uno de estos. Edita `POSTPROCESS_TYPE` con uno de estos valores.

```c
#define POSTPROCESS_OD_YOLO_V2_UF       (10) /* Yolov2 postprocessing; Input model: uint8; output: float32         */
#define POSTPROCESS_OD_YOLO_V5_UU       (11) /* Yolov5 postprocessing; Input model: uint8; output: uint8           */
#define POSTPROCESS_OD_YOLO_V8_UF       (12) /* Yolov8 postprocessing; Input model: uint8; output: float32         */
#define POSTPROCESS_OD_YOLO_V8_UI       (13) /* Yolov8 postprocessing; Input model: uint8; output: int8            */
```

##### Información de Tamaño NN

Edita tu `NN_WIDTH` y `NN_HEIGHT`.

**ADVERTENCIA:** `NN_WIDTH * NN_BPP` debe ser un múltiplo de 16.

**ADVERTENCIA:** Solo el formato RGB888 ha sido probado.

##### Etiquetas de Clase

Modifica el `NB_CLASSES` y `classes_table` con tus propias etiquetas de clase y número de clases.

##### Retraso de Pantalla

Usar `DISPLAY_DELAY` permite retrasar la imagen mostrada para que la información mostrada del modelo esté alineada con la imagen mostrada. Ajusta este valor según el tiempo de inferencia del modelo.

##### Configurar Parámetros de Post Proceso a Través de Archivo de Usuario

Para cambiar tus parámetros de post-proceso, necesitas editar el **Inc/postprocess_conf.h**.

La documentación de la biblioteca de post-procesamiento está disponible en **Postprocess lib**.

Puedes editar umbrales IOU, valores de ancla, y otros parámetros.

Algunos de estos parámetros necesitan estar alineados con tu modelo (número de clases, por ejemplo).

##### Configurar Tamaño del Buffer de Salida

Edita `NN_BUFFER_OUT_SIZE` para que tenga el tamaño en bytes de tu tensor de salida.

#### 4. Compilar Aplicación

Una vez que tus datos de red hayan sido programados (paso 2) y los detalles de red configurados (paso 3), puedes compilar tu aplicación siguiendo:

[Compilación y ejecución de aplicación](#compilación-y-ejecución-de-la-aplicación---modo-dev)

#### 5. Ejecutar Aplicación

##### Modo Dev

Ver la sección [Compilación y ejecución de aplicación](#compilación-y-ejecución-de-la-aplicación---modo-dev) para más detalles.

##### Arranque desde Flash

Ver [Programar aplicación en flash externa](#compilación-y-ejecución-de-la-aplicación---arranque-desde-flash) para programar tu firmware.

### Cómo Programar Archivos Hex

0. Asegúrese de que la placa esté en modo dev (interruptor de arranque en posición de modo dev).
1. Abra STM32CubeProgrammer.
2. Seleccione el flash MX66UW1G45G_STM32N6570-DK a través de la pestaña External loaders.
3. Configuración ST-Link: establezca el modo en "Hot plug".
4. Conecte la placa.
5. Desde la pestaña "Erasing & programming", seleccione el archivo `Binary/ai_assistant_fsbl.hex`.
6. Espere a que se complete la programación.
7. Desde la pestaña "Erasing & programming", seleccione el archivo `Binary/network_data.hex`.
8. Espere a que se complete la programación.
9. Desde la pestaña "Erasing & programming", seleccione el archivo `Binary/AI_Assistant_Ref_Project.hex`.
10. Espere a que se complete la programación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/selectBoard.JPG" style={{width:1000, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/flashHex.JPG" style={{width:1000, height:'auto'}}/></div>

## Recursos

- **[PDF]** [Esquemático del AI Assistant](https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/res/SCH_AI%20ASSISTANT_V1-1%20RELEASE_20250314.pdf)

## Soporte Técnico

Este producto está respaldado por **STMicroelectronics**.
Para cualquier problema técnico o consulta, póngase en contacto con:
**Contacto de Soporte Técnico:
 [[Haga clic aquí](https://ols.st.com/s/)]**
