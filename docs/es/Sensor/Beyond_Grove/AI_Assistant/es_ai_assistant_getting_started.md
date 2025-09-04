---
description: Primeros pasos con AI Assistant.
title: Primeros pasos con AI Assistant
image: https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Top_Pic.webp
slug: /es/ai_assistant_getting_started
# sidebar_position: 2
last_update:
  date: 08/07/2025
  author: Robin(STMicroelectronics),Atom
---
# Primeros pasos con AI Assistant


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/1-114993645-Al-Assistant-v1.1.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
	<a class="get_one_now_item" href="https://www.seeedstudio.com/AI-Assistant-p-6510.html">
			<strong><span><font color={'FFFFFF'} size={"4"}> Obtener uno ahora 🖱️</font></span></strong>
	</a>
</div>

## Introducción

El kit de desarrollo AI Assistant, creado conjuntamente por Seeed Studio y STMicroelectronics. Esta es una plataforma de desarrollo diseñada para aplicaciones de IA de vanguardia en el borde. Centrado en el MCU STM32N657 de alto rendimiento con su acelerador de IA ST Neural-ART integrado, combina perfectamente las potentes capacidades de computación de IA con las ventajas clásicas de los MCU de bajo consumo de energía, factor de forma pequeño y rentabilidad. El kit viene equipado con una cámara de obturador global integrada, un sensor IMU con una unidad de procesamiento de IA, una pantalla táctil de alta definición y un módulo Wi-Fi, ofreciendo una solución completa de hardware y software para desarrollar productos de próxima generación de visión inteligente e interacción por voz.

### Características

- **Característica 1: Microcontrolador de IA insignia**
	Alimentado por el ST STM32N657, que cuenta con un núcleo Arm® Cortex®-M55 de alto rendimiento y una NPU ST Neural-ART integrada que ofrece hasta 600 GOPS para una aceleración eficiente de modelos de IA.
- **Característica 2: Sensor de visión de grado profesional**
Equipado con una cámara de obturador global ST VD55G1, que proporciona imágenes nítidas y sin distorsión de objetos en movimiento rápido, lo cual es crítico para tareas de visión por computadora de alta precisión.
- **Característica 3: Detección inteligente con ISPU**
Cuenta con un IMU LSM6DSO16IS con una Unidad de Procesamiento de Sensor Inteligente (ISPU) incorporada, que permite el reconocimiento de gestos y actividades de ultra bajo consumo sin despertar el procesador principal.
- **Característica 4: Periféricos interactivos ricos**
Integra una pantalla táctil capacitiva de 4.0 pulgadas 480x480, un micrófono digital de alta fidelidad y un códec de audio, proporcionando una base de hardware completa para desarrollar aplicaciones de IA interactivas desde el primer momento.
- **Característica 5: Conectividad integral**
Incluye un módulo Wi-Fi integrado para conectividad IoT sin problemas, junto con un puerto USB-C y múltiples conectores de expansión para máxima flexibilidad de desarrollo.

## Descripción general del hardware

Antes de que todo comience, es bastante esencial tener algunos parámetros básicos del producto. La siguiente tabla proporciona información sobre las características del **AI Assistant**.


| Categoría            | Característica         | Especificación                                                                |
|----------------------|------------------------|-------------------------------------------------------------------------------|
| **Sistema principal**| Controlador principal  | STMicroelectronics STM32N657X0H3Q                                             |
|                      | Arquitectura del núcleo| Arm® Cortex®-M55                                             |
|                      | Unidad de procesamiento neural | ST Neural-ART, 600 GOPS                                                       |
|                      | Memoria externa        | 128MB NOR Flash, 32MB DRAM                                                    |
| **Sensores**         | Cámara                 | STMicroelectronics VD55G1 (800x700, Obturador global)                         |
|                      | IMU                | STMicroelectronics LSM6DSO16IS (6 ejes con ISPU incorporado)                  |
|                      | Magnetómetro           | STMicroelectronics LIS2MDL                                                    |
| **Periféricos**      | Pantalla               | TFT LCD de 4.0" (480x480), Táctil capacitiva                                  |
|                      | Audio                  | Códec Cirrus Logic WM8994 y micrófono digital ST MP34DT06JTR                  |
| **Conectividad**     | Inalámbrico            | Módulo Wi-Fi MXCHIP EMW3080                                                   |
|                      | Interfaces             | USB-C x1, Puerto SWD x1, Expansión de micrófono x1, Interfaz de cámara RPi x1 |
| **Mecánico y energía**| Dimensiones (carcasa)  | 130mm x 90mm                                                                  |
|                      | Fuente de alimentación | 5V vía USB-C o puerto de batería de litio                                     |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Hardware_Overview.png" style={{width:800, height:'auto'}}/></div>

### Descripción General de la Capa Superior de la Placa
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Top.png" style={{width:800, height:'auto'}}/></div>

### Descripción General de la Capa Inferior de la Placa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Bottom.png" style={{width:800, height:'auto'}}/></div>

***

## Comenzar con la Aplicación de Referencia AI Assistant

Aplicación de Visión por Computadora para habilitar el despliegue de modelos de detección de objetos en la placa AI Assistant. Está basada en el lanzamiento oficial del paquete de aplicación n6-ai-people-detection-v1.0.0 para la placa STM32N6570-DK.

Esta aplicación está precompilada con un modelo de detección de personas "TinyYOLOv2".

Esta sección proporciona una descripción general de la aplicación. Documentación adicional está disponible en la [Documentación Adicional de la Aplicación](#additional-documentation-of-the-application).


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

- Kit AI Assistant

- Se soportan 3 cámaras:
  - MB1854B IMX335


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/3-114993645-Al-Assistant-v1.1.jpg" style={{width:800, height:'auto'}}/></div>
Kit AI Assistant con cámara VD55G1.

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

**Pinout de los Headers**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/STLC4.PNG" style={{width:1000, height:'auto'}}/></div>

### Modos de Arranque

El STM32N6 no tiene flash interno. Para conservar su firmware después de un reinicio, debe programarlo en el flash externo.
Alternativamente, puede cargar su firmware directamente desde SRAM (modo de desarrollo). Sin embargo, en modo de desarrollo, si apaga la placa, su programa se perderá.

__Modos de arranque:__
- Modo de desarrollo: cargar firmware desde sesión de depuración en RAM (interruptor de arranque hacia la derecha)
- Arranque desde flash: Programar firmware en flash externo (interruptor de arranque hacia la izquierda)

### Inicio Rápido Usando Binarios Precompilados

#### Flashear Binarios Precompilados

Tres binarios deben ser programados en el flash externo de la placa usando el siguiente procedimiento:

  1. Cambiar el interruptor BOOT a la posición superior.
  2. Programar `Binary/ai_assistant_fsbl.hex` (Se hace una vez) (Cargador de arranque de primera etapa).
  3. Programar `Binary/network_data.hex` (parámetros de las redes; Se cambia solo cuando la red es cambiada).
  4. Programar `Binary/AI_Assistant_Ref_Project.hex` (aplicación de firmware).
  5. Cambiar el interruptor BOOT a la posición inferior.
  6. Realizar una secuencia de apagado/encendido.

#### Cómo Programar Archivos Hex Usando la UI de STM32CubeProgrammer

Ver [Cómo Programar Archivos Hex STM32CubeProgrammer](#how-to-program-hex-files).

#### Cómo Programar Archivos Hex Usando Línea de Comandos

Asegúrese de tener la carpeta bin de STM32CubeProgrammer agregada a su ruta.

```bash
export DKEL="<STM32CubeProgrammer_N6 Install Folder>/bin/ExternalLoader/MX66UW1G45G_STM32N6570-DK.stldr"

# First Stage Boot Loader
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Binary/ai_fsbl.hex

# Network Parameters and Biases
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Binary/network_data.hex

# Application Firmware
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Binary/x-cube-n6-ai-people-detection.hex
```

### Inicio rápido usando código fuente

Antes de compilar y ejecutar la aplicación, tienes que programar `network_data.hex` (pesos y sesgos del modelo).

Este paso solo tiene que hacerse una vez a menos que cambies el modelo de IA.
Consulta [Inicio rápido usando binarios precompilados](#quick-start-using-prebuilt-binaries) para más detalles.

Más información sobre los modos de arranque está disponible en [Descripción general del arranque](#boot-overview).

#### Compilación y ejecución de la aplicación - Modo de desarrollo

__Asegúrate de tener el interruptor hacia el lado derecho.__

##### STM32CubeIDE

Haz doble clic en `STM32CubeIDE/.project` para abrir el proyecto en STM32CubeIDE. Compila y ejecuta con los botones de compilación y ejecución.


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

__Asegúrate de tener el interruptor en el lado derecho.__

##### STM32CubeIDE

Haz doble clic en `STM32CubeIDE/.project` para abrir el proyecto en STM32CubeIDE. Compila con el botón de compilación.

##### Makefile

Antes de ejecutar los comandos a continuación, asegúrate de tenerlos en tu PATH.

1. Compila el proyecto usando el `Makefile` proporcionado:

```bash
make -j8
```

Una vez que tu aplicación esté compilada con Makefile, STM32CubeIDE, o EWARM, puedes añadir una firma al archivo bin:

```bash
STM32_SigningTool_CLI -bin build/Project.bin -nk -t ssbl -hv 2.3 -o build/Project_sign.bin
```

Puedes programar el archivo bin firmado en la dirección `0x70100000`.

```bash
export DKEL="<STM32CubeProgrammer_N6 Install Folder>/bin/ExternalLoader/MX66UW1G45G_STM32N6570-DK.stldr"

# Adapt build path to your IDE
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w build/Project_sign.bin 0x70100000
```

Nota: Solo es necesario programar el binario de la App si el FSBL y network_data.hex fueron programados previamente.

### Problemas Conocidos y Limitaciones

- (NN_WIDTH * NN_BPP) debe ser un múltiplo de 16.
- (LCD_BG_WIDTH * 2) debe ser un múltiplo de 16.

***

## Documentación Adicional de la Aplicación

### Descripción General de la Aplicación

#### Flujo de Datos de la Aplicación

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/DataFlow.JPG" style={{width:1000, height:'auto'}}/></div>

#### Diagrama de Temporización de la Aplicación

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/ThreadTiming.JPG" style={{width:1000, height:'auto'}}/></div>

### Detalles de la Huella de Memoria

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

#### Descripción general de DCMIPP

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/DCMIPP.JPG" style={{width:1000, height:'auto'}}/></div>

- El Pipe 1 se habilita usando `CMW_CAMERA_Start(DCMIPP_PIPE1, *ptr_dst, CAMERA_MODE_CONTINUOUS);` para transmitir continuamente imágenes desde imx335 al `lcd_bg_buffer[]` con buffer DISPLAY_BUFFER_NB. Tenga en cuenta que `ptr_dst` se actualizará en el frame_event del pipe1.
- El Pipe 2 se habilita usando `CMW_CAMERA_Start(DCMIPP_PIPE2, *ptr_dst, CAMERA_MODE_CONTINUOUS);` para transmitir continuamente imágenes desde imx335 al `nn_input_buffers[]` con doble buffer. Tenga en cuenta que `ptr_dst` se actualizará en el frame_event del pipe2. Esto permite descartar el frame anterior si el buffer aún está siendo utilizado por el hilo nn.
- Para cada captura, la configuración ISP se actualiza para mejorar la calidad de imagen dependiendo de las condiciones de iluminación. Se inicializa a través de `ISP_Init` y luego se ejecuta con `ISP_BackgroundProcess`.

Para más detalles sobre DCMIPP, consulte la sección Digital Camera Interface Pixel Pipeline (DCMIPP) en el Manual de Referencia STM32N6.

### Descripción general del arranque

#### Modo Dev

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Dev_mode.png" style={{width:1000, height:'auto'}}/></div>

#### Arranque desde Flash con First Stage Boot Loader

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/FSBL1.png" style={{width:1000, height:'auto'}}/></div>

### Opciones de compilación

Algunas características se habilitan usando opciones de compilación o mediante `app_config.h`:

- [Orientación de la cámara](#orientación-de-la-cámara)

Esta documentación explica esas características y cómo modificarlas.

#### Orientación de la cámara

Las cámaras permiten voltear la imagen a lo largo de dos ejes.

- `CMW_MIRRORFLIP_MIRROR`: Modo selfie
- `CMW_MIRRORFLIP_FLIP`: Voltear boca abajo
- `CMW_MIRRORFLIP_FLIP_MIRROR`: Voltear ambos ejes
- `CMW_MIRRORFLIP_NONE`: Por defecto

1. Abra **app_config.h**.

2. Cambie la definición `CAMERA_FLIP`:
```c
/* Defines: CMW_MIRRORFLIP_NONE; CMW_MIRRORFLIP_FLIP; CMW_MIRRORFLIP_MIRROR; CMW_MIRRORFLIP_FLIP_MIRROR; */

#define CAMERA_FLIP CMW_MIRRORFLIP_NONE
```

### Despliega Tu Modelo TFLite

Para ejecutar tu propio modelo de detección de objetos, sigue estos pasos:
- [1. Generar Modelo-C desde Modelo TFLite](#1-generar-modelo-c-desde-modelo-tflite)
- [2. Programar Tus Datos de Red](#2-programar-tus-datos-de-red)
- [3. Proporcionar Información de NN en `app_config.h`](#3-proporcionar-información-de-nn-en-app_configh)
  - [Tipo de Post Proceso](#tipo-de-post-proceso)
  - [Configurar Parámetros de Post Proceso a Través de Archivo de Usuario](#configurar-parámetros-de-post-proceso-a-través-de-archivo-de-usuario)
  - [Información de Tamaño de NN](#información-de-tamaño-de-nn)
  - [Etiquetas de Clase](#etiquetas-de-clase)
  - [Retraso de Visualización](#retraso-de-visualización)
- [4. Construir Aplicación](#4-construir-aplicación)
- [5. Ejecutar Aplicación](#5-ejecutar-aplicación)
  - [Modo Dev](#modo-dev)
  - [Arrancar desde Flash](#arrancar-desde-flash)

#### 1. Generar Modelo-C desde Modelo TFLite

Para generar el `network.c`, `network_ecblobs.h` y el archivo que contiene los parámetros de red, debes instalar STM32Cube.AI

1. Añade `<folderInstall>/Utilities/<your_os>/` a tu ruta para que `stedgeai` sea conocido por tu bash.

2. Añade `<stm32cubeide_folderInstall>/plugins/com.st.stm32cube.ide.mcu.externaltools.gnu-tools-for-<plugin_version>/tools/bin` a tu ruta para que `arm-none-eabi-objcopy` sea conocido por tu bash.

```bash
cd Model
stedgeai generate --no-inputs-allocation --no-outputs-allocation --model quantized_tiny_yolo_v2_224_.tflite --target stm32n6 --st-neural-art default@user_neuralart.json
cp st_ai_output/network_ecblobs.h .
cp st_ai_output/network.c .
cp st_ai_output/network_atonbuf.xSPI2.raw network_data.xSPI2.bin
arm-none-eabi-objcopy -I binary network_data.xSPI2.bin --change-addresses 0x70380000 -O ihex network_data.hex
```

Puedes encontrar el siguiente script en **Model/generate-n6-model.sh**

#### 2. Programa los Datos de tu Red

Ahora puedes programar los datos de tu red en la memoria flash externa.

```bash
export DKEL="<STM32CubeProgrammer_N6 Install Folder>/bin/ExternalLoader/MX66UW1G45G_STM32N6570-DK.stldr"

# Weights and parameters
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Model/network_data.hex
```

#### 3. Proporcionar Información de NN en `app_config.h`

Necesitas editar las últimas líneas de **Inc/app_config.h** para hacer que la aplicación sea compatible con tu red.

##### Tipo de Post Procesamiento

Esta aplicación soporta cuatro tipos de post-procesamiento de detección de objetos. Puedes seleccionar uno de estos. Edita `POSTPROCESS_TYPE` con uno de estos valores.

```c
#define POSTPROCESS_OD_YOLO_V2_UF       (10) /* Yolov2 postprocessing; Input model: uint8; output: float32         */
#define POSTPROCESS_OD_YOLO_V5_UU       (11) /* Yolov5 postprocessing; Input model: uint8; output: uint8           */
#define POSTPROCESS_OD_YOLO_V8_UF       (12) /* Yolov8 postprocessing; Input model: uint8; output: float32         */
#define POSTPROCESS_OD_YOLO_V8_UI       (13) /* Yolov8 postprocessing; Input model: uint8; output: int8            */
```

##### Información del Tamaño de NN

Edita tu `NN_WIDTH` y `NN_HEIGHT`.

__ADVERTENCIA:__ `NN_WIDTH * NN_BPP` debe ser un múltiplo de 16.

__ADVERTENCIA:__ Solo se ha probado el formato RGB888.

##### Etiquetas de Clase

Modifica el `NB_CLASSES` y `classes_table` con tus propias etiquetas de clase y número de clases.

##### Retraso de Visualización

Usar `DISPLAY_DELAY` permite retrasar la imagen mostrada para que la información mostrada del modelo esté alineada con la imagen mostrada. Ajusta este valor según el tiempo de inferencia del modelo.

##### Configurar Parámetros de Post Proceso a Través del Archivo de Usuario

Para cambiar tus parámetros de post-proceso, necesitas editar el **Inc/postprocess_conf.h**.

La documentación de la biblioteca de post-procesamiento está disponible en **Postprocess lib**.

Puedes editar umbrales IOU, valores de ancla y otros parámetros.

Algunos de estos parámetros necesitan estar alineados con tu modelo (número de clases, por ejemplo).

##### Configurar Tamaño del Buffer de Salida

Edita `NN_BUFFER_OUT_SIZE` para que tenga el tamaño en bytes de tu tensor de salida.

#### 4. Construir Aplicación

Una vez que los datos de tu red han sido programados (paso 2) y los detalles de la red configurados (paso 3), puedes construir tu aplicación siguiendo:

[Construcción y ejecución de aplicación](#application-build-and-run---dev-mode)

#### 5. Ejecutar Aplicación

##### Modo Dev

Ver la sección [Construcción y ejecución de aplicación](#application-build-and-run---dev-mode) para más detalles.

##### Arranque desde Flash

Ver [Programar app en flash externo](#application-build-and-run---boot-from-flash) para programar tu firmware.

### Cómo Programar Archivos Hex

0. Asegúrate de que la placa esté en modo dev (interruptor de arranque en posición de modo dev).
1. Abre STM32CubeProgrammer.
2. Selecciona el flash MX66UW1G45G_STM32N6570-DK a través de la pestaña External loaders.
3. Configuración ST-Link: establece el modo en "Hot plug".
4. Conecta la placa.
5. Desde la pestaña "Erasing & programming", selecciona el archivo `Binary/ai_assistant_fsbl.hex`.
6. Espera a que se complete el flasheo.
7. Desde la pestaña "Erasing & programming", selecciona el archivo `Binary/network_data.hex`.
8. Espera a que se complete el flasheo.
9. Desde la pestaña "Erasing & programming", selecciona el archivo `Binary/AI_Assistant_Ref_Project.hex`.
10. Espera a que se complete el flasheo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/selectBoard.JPG" style={{width:1000, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/flashHex.JPG" style={{width:1000, height:'auto'}}/></div>

## Recursos
 - **[PDF]** [Esquemático del AI Assistant](https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/res/SCH_AI%20ASSISTANT_V1-1%20RELEASE_20250314.pdf)

## Soporte Técnico 
Este producto está respaldado por **STMicroelectronics**. 
Para cualquier problema técnico o consulta, por favor contacta:
**Contacto de Soporte Técnico:
 [[Haz clic aquí](https://ols.st.com/s/)]**
