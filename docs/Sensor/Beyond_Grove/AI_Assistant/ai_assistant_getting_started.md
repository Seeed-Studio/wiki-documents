---
description: Getting Started with AI Assistant.
title: Getting Started with AI Assistant
image: https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Top_Pic.webp
slug: /ai_assistant_getting_started
# sidebar_position: 2
last_update:
  date: 08/07/2025
  author: Robin(STMicroelectronics),Atom
---

# Getting Started with AI Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/1-114993645-Al-Assistant-v1.1.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
 <a class="get_one_now_item" href="https://www.seeedstudio.com/AI-Assistant-p-6510.html">
   <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
 </a>
</div>

## Introduction

The AI Assistant development kit, jointly created by Seeed Studio and STMicroelectronics. This is a development platform designed for cutting-edge edge AI applications. Centered around the high-performance STM32N657 MCU with its integrated ST Neural-ART AI accelerator, it perfectly blends powerful AI computing capabilities with the classic MCU advantages of low power consumption, a small form factor, and cost-effectiveness. The kit comes equipped with an onboard global shutter camera, an IMU sensor with an AI processing unit, a high-definition touchscreen, and a Wi-Fi module, offering a complete hardware and software solution for developing next-generation smart vision and voice interaction products.

### Features

- **Feature 1:Flagship AI Microcontroller**
 Powered by the ST STM32N657, featuring a high-performance Arm® Cortex®-M55 core and an integrated ST Neural-ART NPU that delivers up to 600 GOPS for efficient AI model acceleration.
- **Feature 2: Professional-grade Vision Sensor**
Equipped with an ST VD55G1 global shutter camera, providing crisp, distortion-free images of fast-moving objects, which is critical for high-accuracy computer vision tasks.
- **Feature 3: Intelligent Sensing with ISPU**
Features an LSM6DSO16IS IMU with a built-in Intelligent Sensor Processing Unit (ISPU), enabling ultra-low power gesture and activity recognition without waking the main processor.
- **Feature 4: Rich Interactive Peripherals**
Integrates a 4.0-inch 480x480 capacitive touch display, a high-fidelity digital microphone, and an audio codec, providing a complete hardware foundation for developing interactive AI applications out of the box.
- **Feature 5: Comprehensive Connectivity**
Includes an onboard Wi-Fi module for seamless IoT connectivity, alongside a USB-C port and multiple expansion headers for maximum development flexibility.

## Hardware Overview

Before everything starts, it is quite essential to have some basic parameters of the product. The following table provides information about the characteristics of **AI Assistant**.

| Category             | Feature               | Specification                                                                 |
|----------------------|------------------------|-------------------------------------------------------------------------------|
| **Core System**      | Main Controller        | STMicroelectronics STM32N657X0H3Q                                             |
|                      | Core Architecture      | Arm® Cortex®-M55                                             |
|                      | Neural Processing Unit | ST Neural-ART, 600 GOPS                                                       |
|                      | External Memory        | 128MB NOR Flash, 32MB DRAM                                                    |
| **Sensors**          | Camera                 | STMicroelectronics VD55G1 (800x700, Global Shutter)                           |
|                      | IMU                    | STMicroelectronics LSM6DSO16IS (6-axis with built-in ISPU)                    |
|                      | Magnetometer           | STMicroelectronics LIS2MDL                                                    |
| **Peripherals**      | Display                | 4.0" TFT LCD (480x480), Capacitive Touch                                      |
|                      | Audio                  | Cirrus Logic WM8994 Codec & ST MP34DT06JTR Digital Mic                        |
| **Connectivity**     | Wireless               | MXCHIP EMW3080 Wi-Fi Module                                                   |
|                      | Interfaces             | USB-C x1, SWD Port x1, Mic Expansion x1, RPi Camera Interface x1              |
| **Mechanical & Power**| Dimensions (Casing)    | 130mm x 90mm                                                                  |
|                      | Power Supply           | 5V via USB-C or Lithium Battery Port                                          |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Hardware_Overview.png" style={{width:800, height:'auto'}}/></div>

### Board Top Layer Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Top.png" style={{width:800, height:'auto'}}/></div>

### Board Bottom Layer Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Bottom.png" style={{width:800, height:'auto'}}/></div>

***

## Start with AI Assistant Reference Application

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/stm32-hotspot/STM32N6-AI-Assistant-People-Detection" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

To get started, **clone the repository from the GitHub link**`git clone https://github.com/stm32-hotspot/STM32N6-AI-Assistant-People-Detection.git` into your preferred local folder.

Computer Vision application to enable the deployment of object detection models on AI Assistant board. It's based on the official release of n6-ai-people-detection-v1.0.0 application package for STM32N6570-DK board.

This application is prebuilt with a people detection model "TinyYOLOv2".

This section provides an overview of the application. Additional documentation is available in the [Additional Documentation of The Application](#additional-documentation-of-the-application).

### Features Demonstrated in This Example

- Multi-threaded application flow (Azure RTOS ThreadX)
- NPU accelerated quantized AI model inference
- Dual DCMIPP pipes
- DCMIPP crop, decimation, downscale
- LTDC dual-layer implementation
- DCMIPP ISP usage
- Dev mode
- Boot from External Flash

### Hardware Support

- AI Assistant Kit

- 3 Cameras are supported:
  - MB1854B IMX335

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/3-114993645-Al-Assistant-v1.1.jpg" style={{width:800, height:'auto'}}/></div>
AI Assistant kit with VD55G1 Camera.

### Tools Version

- STM32CubeIDE (**STM32CubeIDE 1.18.0**)
- STM32CubeProgrammer (**v2.18.0**)
- [STEdgeAI](https://www.st.com/en/development-tools/stedgeai-core.html) (**v2.1.0**)

### ST-Link Connection

**Right Hand Side Connectors**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/STLC1.PNG" style={{width:1000, height:'auto'}}/></div>

**Left Hand Side Connectors**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/STLC2.PNG" style={{width:1000, height:'auto'}}/></div>

**Debugger Connection**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/STLC3.PNG" style={{width:1000, height:'auto'}}/></div>

**Headers pinout**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/STLC4.PNG" style={{width:1000, height:'auto'}}/></div>

### Boot Modes

The STM32N6 does not have any internal flash. To retain your firmware after a reboot, you must program it in the external flash.
Alternatively, you can load your firmware directly from SRAM (dev mode). However, in dev mode, if you turn off the board, your program will be lost.

**Boot modes:**

- Dev mode: load firmware from debug session in RAM (boot switch to the right)
- Boot from flash: Program firmware in external flash (boot switch to the left)

### Quick start Using Prebuilt Binaries

#### Flash Prebuilt Binaries

Three binaries must be programmed into the board's external flash using the following procedure:

  1. Switch the BOOT switch to the up position.
  2. Program `Binary/ai_assistant_fsbl.hex` (To be done once) (First stage boot loader).
  3. Program `Binary/network_data.hex` (parameters of the networks; To be changed only when the network is changed).
  4. Program `Binary/AI_Assistant_Ref_Project.hex` (firmware application).
  5. Switch the BOOT switch to the down position.
  6. Perform a power down/up sequence.

#### How to Program Hex Files Using STM32CubeProgrammer UI

See [How to Program Hex Files STM32CubeProgrammer](#how-to-program-hex-files).

#### How to Program Hex Files Using Command Line

Make sure to have the STM32CubeProgrammer bin folder added to your path.

```bash
export DKEL="<STM32CubeProgrammer_N6 Install Folder>/bin/ExternalLoader/MX66UW1G45G_STM32N6570-DK.stldr"

# First Stage Boot Loader
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Binary/ai_fsbl.hex

# Network Parameters and Biases
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Binary/network_data.hex

# Application Firmware
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Binary/x-cube-n6-ai-people-detection.hex
```

### Quick start Using Source Code

Before building and running the application, you have to program `network_data.hex` (model weights and biases).

This step only has to be done once unless you change the AI model.
See [Quick start Using Prebuilt Binaries](#quick-start-using-prebuilt-binaries) for details.

More information about boot modes is available at [Boot Overview](#boot-overview) .

#### Application Build and Run - Dev Mode

**Make sure to have the switch to the right side.**

##### STM32CubeIDE

Double click on `STM32CubeIDE/.project` to open the project in STM32CubeIDE. Build and run with the build and run buttons.

##### Makefile

Before running the commands below, be sure to have the commands in your PATH.

1. Build the project using the provided `Makefile`:

```bash
make -j8
```

2. Open a GDB server connected to the STM32 target:

```bash
ST-LINK_gdbserver -p 61234 -l 1 -d -s -cp <path-to-stm32cubeprogramer-bin-dir> -m 1 -g
```

3. In a separate terminal session, launch a GDB session to load the firmware image into the device memory:

```bash
$ arm-none-eabi-gdb build/Project.elf
(gdb) target remote :61234
(gdb) monitor reset
(gdb) load
(gdb) continue
```

#### Application Build and Run - Boot from Flash

**Make sure to have the switch on the right side.**

##### STM32CubeIDE

Double click on `STM32CubeIDE/.project` to open project in STM32CubeIDE. Build with build button.

##### Makefile

Before running the commands below, be sure to have them in your PATH.

1. Build project using the provided `Makefile`:

```bash
make -j8
```

Once your app is built with Makefile, STM32CubeIDE, or EWARM, you can add a signature to the bin file:

```bash
STM32_SigningTool_CLI -bin build/Project.bin -nk -t ssbl -hv 2.3 -o build/Project_sign.bin
```

You can program the signed bin file at the address `0x70100000`.

```bash
export DKEL="<STM32CubeProgrammer_N6 Install Folder>/bin/ExternalLoader/MX66UW1G45G_STM32N6570-DK.stldr"

# Adapt build path to your IDE
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w build/Project_sign.bin 0x70100000
```

Note: Only the App binary needs to be programmed if the FSBL and network_data.hex were previously programmed.

### Known Issues and Limitations

- (NN_WIDTH * NN_BPP) must be a multiple of 16.
- (LCD_BG_WIDTH * 2) must be a multiple of 16.

***

## Additional Documentation of The Application

### Application Overview

#### Application Data Flow

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/DataFlow.JPG" style={{width:1000, height:'auto'}}/></div>

#### Application Timing Diagram

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/ThreadTiming.JPG" style={{width:1000, height:'auto'}}/></div>

### Memory Footprint Details

#### Read-Only Data

| Name           | Size    | Location | Notes            |
|----------------|---------|----------|------------------|
| `network_data` | 10.59 MB | .rodata  | FLASH xSPI2 8b   |

#### Read-Write Data

| Name               | Size      | Location   | Notes                             |
|--------------------|-----------|------------|-----------------------------------|
| `lcd_bg_buffer`    | 2300 KB   | .psram_bss | PSRAM / (800x480x2) x 3 / RGB565  |
| `lcd_fg_buffer`    | 1500 KB   | .psram_bss | PSRAM / (800x480x2) x 2 / ARGB4444|
| `nn_input_buffers` | 294 KB    | .psram_bss | PSRAM / (224x224x3) x 2 / RGB888  |
| `nn_output_buffers`| 12 KB     | .bss       | SRAM / 5880 x 2                   |
| `activations`      | 507 KB    | 0x34200000 | NPURAMS                           |
| `threads stacks`   | 20 KB     | .bss       | SRAM / 4096 * 5                   |

### DCMIPP and ISP

#### DCMIPP Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/DCMIPP.JPG" style={{width:1000, height:'auto'}}/></div>

- Pipe 1 is enabled using `CMW_CAMERA_Start(DCMIPP_PIPE1, *ptr_dst, CAMERA_MODE_CONTINUOUS);` to continuously transmit images from imx335 to the DISPLAY_BUFFER_NB buffered `lcd_bg_buffer[]`. Note that `ptr_dst` will be updated at pipe1 frame_event.
- Pipe 2 is enabled using `CMW_CAMERA_Start(DCMIPP_PIPE2, *ptr_dst, CAMERA_MODE_CONTINUOUS);` to continuously transmit images from imx335 to the double buffered `nn_input_buffers[]`. Note that `ptr_dst` will be updated at pipe2 frame_event. This allows dropping the previous frame if the buffer is still in use by the nn thread.
- For each capture, the ISP configuration is updated to enhance the image quality depending on the illumination conditions. It is initialized through `ISP_Init` and then executed with `ISP_BackgroundProcess`.

For more details on DCMIPP, see the Digital Camera Interface Pixel Pipeline (DCMIPP) section in the STM32N6 Reference Manual.

### Boot Overview

#### Dev Mode

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Dev_mode.png" style={{width:1000, height:'auto'}}/></div>

#### Boot from Flash with First Stage Boot Loader

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/FSBL1.png" style={{width:1000, height:'auto'}}/></div>

### Build Options

Some features are enabled using build options or by using `app_config.h`:

- [Camera Orientation](#camera-orientation)

This documentation explains those features and how to modify them.

#### Camera Orientation

Cameras allow flipping the image along two axes.

- `CMW_MIRRORFLIP_MIRROR`: Selfie mode
- `CMW_MIRRORFLIP_FLIP`: Flip upside down
- `CMW_MIRRORFLIP_FLIP_MIRROR`: Flip both axes
- `CMW_MIRRORFLIP_NONE`: Default

1. Open **app_config.h**.

2. Change the `CAMERA_FLIP` define:

```c
/* Defines: CMW_MIRRORFLIP_NONE; CMW_MIRRORFLIP_FLIP; CMW_MIRRORFLIP_MIRROR; CMW_MIRRORFLIP_FLIP_MIRROR; */

#define CAMERA_FLIP CMW_MIRRORFLIP_NONE
```

### Deploy Your TFLite Model

To run your own object detection model, follow these steps:

- [1. Generate C-Model from TFLite Model](#1-generate-c-model-from-tflite-model)
- [2. Program Your Network Data](#2-program-your-network-data)
- [3. Provide NN Information in `app_config.h`](#3-provide-nn-information-in-app_configh)
  - [Post Process Type](#post-process-type)
  - [Configure Post Process Parameters Through User File](#configure-post-process-parameters-through-user-file)
  - [NN Size Info](#nn-size-info)
  - [Class Labels](#class-labels)
  - [Display Delay](#display-delay)
- [4. Build Application](#4-build-application)
- [5. Run Application](#5-run-application)
  - [Dev Mode](#dev-mode)
  - [Boot from Flash](#boot-from-flash)

#### 1. Generate C-Model from TFLite Model

To generate the `network.c`, `network_ecblobs.h` and the file containing network parameters, you must install STM32Cube.AI

1. Add `<folderInstall>/Utilities/<your_os>/` to your path to have `stedgeai` known by your bash.

2. Add `<stm32cubeide_folderInstall>/plugins/com.st.stm32cube.ide.mcu.externaltools.gnu-tools-for-<plugin_version>/tools/bin` to your path to have `arm-none-eabi-objcopy` known by your bash.

```bash
cd Model
stedgeai generate --no-inputs-allocation --no-outputs-allocation --model quantized_tiny_yolo_v2_224_.tflite --target stm32n6 --st-neural-art default@user_neuralart.json
cp st_ai_output/network_ecblobs.h .
cp st_ai_output/network.c .
cp st_ai_output/network_atonbuf.xSPI2.raw network_data.xSPI2.bin
arm-none-eabi-objcopy -I binary network_data.xSPI2.bin --change-addresses 0x70380000 -O ihex network_data.hex
```

You can find the following script at **Model/generate-n6-model.sh**

#### 2. Program Your Network Data

Now you can program your network data in external flash.

```bash
export DKEL="<STM32CubeProgrammer_N6 Install Folder>/bin/ExternalLoader/MX66UW1G45G_STM32N6570-DK.stldr"

# Weights and parameters
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Model/network_data.hex
```

#### 3. Provide NN Information in `app_config.h`

You need to edit the last lines of **Inc/app_config.h** to make the app compatible with your network.

##### Post Process Type

This application supports four types of object detection post-processing. You can select one of these. Edit `POSTPROCESS_TYPE` with one of these values.

```c
#define POSTPROCESS_OD_YOLO_V2_UF       (10) /* Yolov2 postprocessing; Input model: uint8; output: float32         */
#define POSTPROCESS_OD_YOLO_V5_UU       (11) /* Yolov5 postprocessing; Input model: uint8; output: uint8           */
#define POSTPROCESS_OD_YOLO_V8_UF       (12) /* Yolov8 postprocessing; Input model: uint8; output: float32         */
#define POSTPROCESS_OD_YOLO_V8_UI       (13) /* Yolov8 postprocessing; Input model: uint8; output: int8            */
```

##### NN Size Info

Edit your `NN_WIDTH` and `NN_HEIGHT`.

**WARNING:** `NN_WIDTH * NN_BPP` must be a multiple of 16.

**WARNING:** Only RGB888 format has been tested.

##### Class Labels

Modify the `NB_CLASSES` and `classes_table` with your own class labels and number of classes.

##### Display Delay

Using `DISPLAY_DELAY` allows delaying the displayed image so that the displayed information from the model is aligned with the displayed image. Adjust this value according to the model inference time.

##### Configure Post Process Parameters Through User File

To change your post-process parameters, you need to edit the **Inc/postprocess_conf.h**.

Documentation of the post-processing library is available at **Postprocess lib**.

You can edit IOU thresholds, anchor values, and other parameters.

Some of these parameters need to be aligned with your model (number of classes, for example).

##### Configure Output Buffer Size

Edit `NN_BUFFER_OUT_SIZE` so it has the size in bytes of your output tensor.

#### 4. Build Application

Once your network data has been programmed (step 2) and network details configured (step 3), you can build your application by following:

[Application build and run](#application-build-and-run---dev-mode)

#### 5. Run Application

##### Dev Mode

See the [Application build and run](#application-build-and-run---dev-mode) section for more details.

##### Boot from Flash

See [Program app in external flash](#application-build-and-run---boot-from-flash) to program your firmware.

### How to Program Hex Files

0. Ensure the board is in dev mode (boot switch in dev mode position).
1. Open STM32CubeProgrammer.
2. Select the MX66UW1G45G_STM32N6570-DK flash through the External loaders tab.
3. ST-Link configuration: set mode to "Hot plug".
4. Connect the board.
5. From the "Erasing & programming" tab, select the `Binary/ai_assistant_fsbl.hex` file.
6. Wait for flashing to complete.
7. From the "Erasing & programming" tab, select the `Binary/network_data.hex` file.
8. Wait for flashing to complete.
9. From the "Erasing & programming" tab, select the `Binary/AI_Assistant_Ref_Project.hex` file.
10. Wait for flashing to complete.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/selectBoard.JPG" style={{width:1000, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/flashHex.JPG" style={{width:1000, height:'auto'}}/></div>

## Resources

- **[PDF]** [AI Assistant Schematic](https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/res/SCH_AI%20ASSISTANT_V1-1%20RELEASE_20250314.pdf)

## Tech Support

This product is supported by **STMicroelectronics**.
For any technical issues or inquiries, please contact:
**Technical Support Contact:
 [[Click here](https://ols.st.com/s/)]**
