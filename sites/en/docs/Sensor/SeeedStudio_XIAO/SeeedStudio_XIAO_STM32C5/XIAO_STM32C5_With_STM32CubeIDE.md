---
title: XIAO STM32C5 With STM32CubeIDE
description: ''
keywords:
  - xiao
  - stm32
  - stm32c5
  - stm32cubeide
image: https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/Seeed-Studio-XIAO-STM32C5.webp
slug: /xiao_stm32c5_with_stm32cubeide
sku: 100036669
last_update:
  date: 08/17/2026
  author: Zeller
createdAt: '2026-08-14'
updatedAt: '2026-08-17'
url: https://wiki.seeedstudio.com/xiao_stm32c5_with_stm32cubeide/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiaostm32c5_cubeide.png" style={{width:600, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Get One Now 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## Overview

[STM32CubeIDE](https://www.st.com/content/st_com/en/stm32cubeide.html#st-get-software) is STMicroelectronics’ official free, cross-platform integrated development environment for STM32 microcontrollers. It is also suitable for developing applications for the XIAO STM32C5.

STM32CubeIDE provides the GNU Arm toolchain and supports CMake- and Ninja-based build workflows, reducing the need for additional environment configuration. It covers the complete development workflow, including project creation, peripheral configuration, code editing, compilation, firmware programming, and on-target debugging.

## Hardware Preparation

Before getting started, prepare the following items:

- 1 × XIAO STM32C5
- PC and Type‑C USB cable
- 1 × ST‑LINK/V2 (optional)

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO STM32C5</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Get One Now 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

## Installing STM32CubeIDE

1. Download the installation package. Click [STM32CubeIDE Software](https://www.st.com/en/development-tools/stm32cubeide.html) to navigate to the download page. Select **Get Software** on the homepage, or scroll down to the bottom of the page. Choose the installer matching your PC operating system. It is recommended to use the latest version.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_2.png" style={{width:600, height:'auto'}}/></div>

2. You may download the installer either with a registered account or as a guest. Email and other related information are required for this process.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_3.png" style={{width:600, height:'auto'}}/></div>

3. The download link will be sent to your email address. Click the link to obtain the software installer.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_4.png" style={{width:600, height:'auto'}}/></div>

4. Launch the installer, read the relevant license agreements, then select **I Agree**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_5.png" style={{width:600, height:'auto'}}/></div>

5. Select the installation directory.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_6.png" style={{width:600, height:'auto'}}/></div>

6. Install the driver for the debug probe you plan to use. Probe drivers are not required for the UF2 flashing steps below.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_7.png" style={{width:600, height:'auto'}}/></div>

## Developing with XIAO STM32C5

1. Since the XIAO STM32C5 natively supports flashing UF2‑format firmware, a reference example project is provided to simplify your development. Click the link below to download the example:

- **🗃️[Project]** [XIAO STM32C5 Blink Project](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/xiao_c5_project.zip)

- Extract the archive after downloading. The resulting project structure should match the layout shown below.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_8.png" style={{width:800, height:'auto'}}/></div>

2. Launch STM32CubeIDE; the interface shown below will appear. Content in this section is excerpted from **📄[PDF]** [STM32CubeIDE User Guide](https://www.st.com/resource/en/user_manual/um2609-stm32cubeide-user-guide-stmicroelectronics.pdf)

:::note

On first startup, STM32CubeIDE asks for workspace selection. The default workspace works fine and will not affect later steps.

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_9.png" style={{width:800, height:'auto'}}/></div>

3. Import the project. On the upper‑right toolbar, navigate to **File → STM32 Project Create/Import**, then select **Import STM32CubeMX / STM32CubeIDE Project**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_10.png" style={{width:800, height:'auto'}}/></div>

4. Pick the extracted **xiao_c5_project** project directory and click **Finish**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_11.png" style={{width:800, height:'auto'}}/></div>

5. After import, the project structure is shown in the figure below.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_12.png" style={{width:800, height:'auto'}}/></div>

- **SDK**: Contains the STM32CubeC5 SDK package. This is a trimmed‑down SDK that only includes files essential for building XIAO STM32C5 firmware; it is not the full SDK release.
- **Source**: Source code directory, holding `main.c` and board‑specific definition files for the XIAO STM32C5.
- **Startup**: Mandatory startup files for the XIAO STM32C5.
- **tools**: Contains the `uf2conv.py` script, which converts compiled bin binaries into UF2 format after each build.

### Building and Flashing Firmware

1. Program overview. Open **Source → main.c**. This is a simple on‑board LED blink example for the XIAO STM32C5. It toggles the LED logic level every 500 ms to achieve the blinking effect.

```c
/**
 * @file    main.c
 * @brief   Minimal LED application for the Seeed XIAO STM32C5.
 *
 * SPDX-License-Identifier: MIT
 * Copyright (c) 2026 Seeed Technology Co., Ltd.
 */
#include "board.h"
#include "uart_io.h"

int main(void)
{
    if (HAL_Init() != HAL_OK) {
        Error_Handler();
    }

    board_clock_init();
    board_uart_init();
    board_led_init();

//    uprintln("[LED] PB12 onboard LED is blinking (500 ms interval)");
    uart_log_flush();

    while (1) {
        HAL_GPIO_TogglePin(LED_PORT, LED);
        uprintln("[LED] PB12 onboard LED is blinking");
        uart_log_flush();
        HAL_Delay(500U);
    }
}
```

- `board_clock_init();`: Initializes the peripheral clocks required for XIAO STM32C5.
- `board_uart_init();`: Initializes UART I/O configuration for XIAO STM32C5.
- `board_led_init();`: Initializes I/O configuration for the on‑board user LED of XIAO STM32C5.
- `HAL_GPIO_TogglePin(LED_PORT, LED);`: STM32 HAL library GPIO toggle function, which toggles the GPIO logic level of the user LED.

2. On the toolbar, select **Release** to trigger automatic project building.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_13.png" style={{width:800, height:'auto'}}/></div>

3. After a successful build, a **Release** folder will be generated containing multiple build artifacts. Among these outputs, the bin file and uf2 file are the files you need.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_14.png" style={{width:600, height:'auto'}}/></div>

:::tip

You may also Build the project by selecting **Build**. This creates a **Build** folder which contains the generated firmware files.

:::

### Flashing UF2‑Format Firmware

- Double‑tap the reset button on the XIAO STM32C5. The XIAO STM32C5 mass‑storage drive will pop up. Copy the UF2 file onto this drive to finish flashing.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_15.png" style={{width:800, height:'auto'}}/></div>


### Flashing with [ST-LINK/V2](https://www.st.com/en/development-tools/st-link-v2.html)

[ST-LINK/V2](https://www.st.com/en/development-tools/st-link-v2.html) is an official debugging and programming tool released by STMicroelectronics. It supports STM8 and STM32 microcontroller families, and enables program downloading, firmware flashing and on‑chip debugging via SWIM, JTAG or SWD interfaces. The following section describes how to flash firmware to the XIAO STM32C5 using ST‑LINK/V2 together with STM32CubeIDE

- Connect the ST‑LINK/V2 to your PC. In the IDE, go to **Help → ST‑LINK Upgrade** and update its firmware to the latest version to guarantee good compatibility with STM32C5 devices.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_15_1.png" style={{width:800, height:'auto'}}/></div>

- Connect the ST‑LINK/V2 to the XIAO STM32C5. See below for pin connections. Soldering is required for this step.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_16.png" style={{width:800, height:'auto'}}/></div>

:::tip

1. Among the connection pins, RST is an optional interface and may be left unconnected.
2. You may also use the [**XIAO Debug Mate**](https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html) to connect to the ST‑LINK/V2 tool, which eliminates manual soldering.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_16_1.jpg" style={{width:600, height:'auto'}}/></div>
:::
<br/>
- Click **Run** on the toolbar to complete flashing. STM32CubeIDE will automatically detect the ST‑LINK/V2 programmer.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_17.png" style={{width:800, height:'auto'}}/></div>

## Summary

- After flashing the corresponding firmware to the XIAO STM32C5 using the methods above, the on‑board user LED will toggle and blink every 500 ms.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_4_1.gif" style={{width:500, height:'auto'}}/></div>

You may also connect D6 and D7 to a TTL‑to‑UART adapter. Open any serial monitor; the serial port will print the string **[LED] PB12 onboard LED is blinking** every 500 ms.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_18.png" style={{width:800, height:'auto'}}/></div>

## Files inside the Source Folder

- **board.c / board.h**

  Defines pin mapping and board‑specific resources for XIAO STM32C5. It provides initialization configurations for peripherals including clock, GPIO, CAN and ADC, and can serve as the foundation for application development.

- **test.c / test.h**

  Provides verification routines for on‑board peripherals such as IMU and LED, as well as interfaces including CAN, SPI, I2C and ADC. These routines can be used for hardware function validation and code reference.

- **uart_io.c / uart_io.h**

  Handles character processing and command parsing for received UART data, offering an interactive entry point for test routines. Low‑level communication interfaces are implemented by other modules.

## Reference Resources

- **🗃️[Project]** [XIAO STM32C5 Blink Project](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/xiao_c5_project.zip)
- **📄[Document]** [STM32CubeIDE User Guide](https://www.st.com/resource/en/user_manual/um2609-stm32cubeide-user-guide-stmicroelectronics.pdf)
- **📄[Datasheet]** [STM32C5A3CGX](https://www.st.com/resource/en/datasheet/stm32c5a3cg.pdf)
- **📄[Examples]** [STM32 Example Library](https://dev.st.com/stm32-example-library/)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
