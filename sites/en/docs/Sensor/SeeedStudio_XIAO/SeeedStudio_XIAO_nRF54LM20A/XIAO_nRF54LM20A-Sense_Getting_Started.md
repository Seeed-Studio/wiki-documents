---
title: Getting Started with Seeed Studio XIAO nRF54LM20A
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - pin_multiplexing
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/Getting_started/Seeed-Studio-XIAO-nRF54LM20A.webp
slug: /xiao_nrf54lm20a_getting_started
sku: 1000100XX
last_update:
  date: 05/13/2026
  author: Brandy
createdAt: '2025-05-13'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/xiao_nrf54lm20a_getting_started/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nrf54lm20a/Getting_Start/" style={{width:600, height:'auto'}}/></div>


<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54LM20A</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nrf54lm20a/Getting_Start/2-101991421-XIAO-nRF54L14.jpg"
            style={{width: 300, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-nrf54lm20a-p-6493.html"
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

## Introduction



### Specification


### Features


## Hardware Overview

<Tabs>
  <TabItem value="54lm20a" label="XIAO nRF54LM20A" default>
    <table align="center">
      <tbody>
        <tr>
          <th>XIAO nRF54LM20A Pin List</th>
        </tr>
        <tr>
          <td>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/4_pin.png"
                style={{width: 800, height: 'auto'}}
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/5_pin.png"
                style={{width: 800, height: 'auto'}}
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </TabItem>
</Tabs>

## **Pin Map**
| XIAO Pin       | Function       | Chip Pin                          | Description                                                                 |
| :------------: | :------------: | :-------------------------------: | :-------------------------------------------------------------------------- |
| **Power Pins** |                |                                   |                                                                             |
| VBUS           | VBUS           | -                                 | 5V Power Input/Output                                                       |
| GND            | GND            | -                                 | Ground                                                                      |
| 3V3            | 3V3-OUT        | -                                 | 3.3V Power Output                                                           |
| BAT+           | BAT+           | -                                 | Battery Input (monitored by nPM1300 via I²C)                                |
| BAT-           | BAT-           | -                                 | Battery Negative Terminal                                                  |
| SHPHLD         | SHPHLD         | -                                 | PMIC Ship/Hibernate Mode Control (ultra-low-power shipping state)          |
| **System & Control Pins** |        |                                   |                                                                             |
| RESET          | RESET          | -                                 | Board Reset                                                                 |
| SWCLK          | SWCLK          | nRF54LM20A SWCLK / SAMD11 SWCLK   | Serial Wire Clock (for nRF54 and SAMD11)                                    |
| SWDIO          | SWDIO          | nRF54LM20A SWDIO / SAMD11 SWDIO   | Serial Wire Data (for nRF54 and SAMD11)                                    |
| SAMD11_RESET   | RESET          | SAMD11 RESET                      | SAMD11 Co-processor Reset                                                  |
| **User & LED Pins** |            |                                   |                                                                             |
| -              | USER_BUTTON    | P0.09                             | User Button Input                                                           |
| -              | RGB-B          | P1.23                             | Onboard RGB LED Blue Channel                                                |
| -              | RGB-G          | P1.24                             | Onboard RGB LED Green Channel                                               |
| -              | RGB-R          | P1.22                             | Onboard RGB LED Red Channel                                                 |
| **Analog Input (ADC) Pins** |      |                                   |                                                                             |
| A0             | AIN0           | P1.00                             | Analog Input 0 / GPIO                                                       |
| A1             | AIN1           | P1.31                             | Analog Input 1 / GPIO                                                       |
| A2             | AIN2           | P1.30                             | Analog Input 2 / GPIO                                                       |
| A3             | AIN3           | P1.29                             | Analog Input 3 / GPIO                                                       |
| A7             | AIN7           | P1.03                             | Analog Input 7 / GPIO                                                       |
| **I2C Pins**   |                |                                   |                                                                             |
| SDA            | I2C_SDA        | P1.03                             | I2C Data Line (IMU & Peripheral)                                            |
| SCL            | I2C_SCL        | P1.07                             | I2C Clock Line (IMU & Peripheral)                                           |
| -              | BAT_SDA        | P1.18                             | Battery Monitor I2C SDA (nPM1300)                                           |
| -              | BAT_SCL        | P1.17                             | Battery Monitor I2C SCL (nPM1300)                                           |
| **UART Pins**  |                |                                   |                                                                             |
| TX             | UART_TX        | P1.08                             | UART Transmit                                                               |
| RX             | UART_RX        | P1.09                             | UART Receive                                                                |
| **SPI Pins**   |                |                                   |                                                                             |
| MOSI           | SPI_MOSI       | P1.06                             | SPI Master Out Slave In                                                     |
| MISO           | SPI_MISO       | P1.05                             | SPI Master In Slave Out                                                     |
| SCK            | SPI_SCK        | P1.04                             | SPI Serial Clock                                                            |
| **Onboard Peripheral Pins** |      |                                   |                                                                             |
| -              | MIC_DAT        | P1.14                             | Microphone Data Line                                                        |
| -              | MIC_CLK        | P1.13                             | Microphone Clock Line                                                       |
| -              | IMU_SDA        | P0.08                             | IMU I2C SDA (Onboard IMU)                                                   |
| -              | IMU_SCL        | P0.07                             | IMU I2C SCL (Onboard IMU)                                                   |
| -              | IMU_CS         | P3.12                             | IMU Chip Select                                                             |
| -              | IMU_INT1       | P0.06                             | IMU Interrupt 1                                                             |
| -              | NFC            | P1.02 / P1.01                     | NFC Antenna Pins                                                            |
| -              | GRTC           | P0.04 / P0.05                     | General Purpose RTC Pins                                                    |
## Getting Started

In this section, we will guide you to quickly get started with the XIAO nRF54LM20A through the multi-color blinking effect of an RGB LED.
Please complete the hardware and software preparations below to set up your XIAO for subsequent development.

### Hardware

You need to prepare the following:

- 1 x [Seeed Studio XIAO nRF54LM20A](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-p-5884.html)
- 1 x Computer
- 1 x USB Type-C cable

<div className="table-center">
  <table>
    <tr>
      <th>Seeed Studio XIAO nRF54LM20A</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/Getting_started/3-100010048-Seeed-Studio-XIAO-nRF54LM20A.jpg"
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
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-p-6609.html"
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



### Software

<Tabs>
  <TabItem value="platformio" label="PlatformIO" default>

  ### Setting Up PlatformIO for XIAO nRF54LM20A

Follow these streamlined steps to configure your development environment and deploy your first application on the XIAO nRF54LM20A.


#### Install PlatformIO IDE Extension for VS Code

If you haven't already, install the PlatformIO IDE extension directly within Visual Studio Code. This powerful extension transforms VS Code into a comprehensive embedded development environment.

- Open VS Code.

- Go to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X).

- Search for ["PlatformIO IDE"](https://platformio.org/platformio-ide) and click Install.


#### Create a New PlatformIO Project

Here you can choose any one of the development version to create a project file, I take XIAO ESP32 C3 for example.

<table align="center">
  <tr>
      <th>Operation one</th>
        <th>Operation two</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_platform/mg24patform2.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/mg24_platformIO.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
</table>



#### Configure platformio.ini for XIAO nRF54LM20A Zephyr Support

Once your project is created, locate the platformio.ini file in the root of your project directory (visible in the VS Code Explorer on the left). This file is the heart of your PlatformIO project configuration.

<table align="center">
  <tbody>
    <tr>
      <th>Operation three</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/1.1.png"
            style={{width: 800, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
  </tbody>
</table>


You need to replace the entire content of your platformio.ini file with the following configuration:

```
[env:seeed-xiao-nrf54lm20a]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54lm20a
monitor_speed = 115200
```

Then re-save the platformio.ini file (Ctrl+S or Cmd+S) and wait for it to load completely.

You can close this project once the loading is complete. This step is to download the necessary library files.

:::tip
If you have installed other XIAO libraries before, we recommend updating this library to the latest version using the following PlatformIO command.
This is the official recommended method. Simply run the command directly in your project root directory (no need to navigate to the platform folder):
`pio pkg update -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"`

:::





#### Compile and Upload Your First Blink Example

Now, let's test your setup with a classic "Blink" example. This code will toggle the built-in LED on your XIAO nRF54LM20A.

Below is the link to download the library. You can choose to download this project directly to your local machine and then open it directly in VS Code. Alternatively, you can follow these steps: Replace and add some demo code. This process involves:

<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="hhttps://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-blink" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />
Step 1: Create a New Project
<table align="center">
  <tbody>
    <tr>
      <th>Operation four</th>
    </tr>
    <tr>
      <td>
<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/2.png"
    style={{width: 800, height: 'auto'}}
  />
</div>
      </td>
    </tr>
  </tbody>
</table>



Step 2: Open the Project
You can compile it first to see if the project you pulled runs correctly. If it does, the project was successfully pulled.
Image below:
<table align="center">
  <tbody>
    <tr>
      <th>Operation five</th>
    </tr>
    <tr>
      <td>
<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/3.png"
    style={{width: 800, height: 'auto'}}
  />
</div>  
      </td>
    </tr>
  </tbody>
</table>



Step 3: Replace the Project Code
- Open the **src/main.c** and **Zephyr/prj.conf**  files and replace the original code with the following code.
<table align="center">
  <tbody>
    <tr>
      <th>Operation six</th>
    </tr>
    <tr>
      <td>
<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/14io.png"
    style={{width: 800, height: 'auto'}}
  />
</div>
      </td>
    </tr>
  </tbody>
</table>


<details>
<summary>src/main.c</summary>
<div>

```c

/*
 * Copyright (c) 2016 Intel Corporation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/pwm.h>
#include <nrfx_power.h>

#define PWM_PERIOD_NS 1000000U
#define STEP_TIME_MS 500

#define LED_R_NODE DT_ALIAS(pwm_led1)
#define LED_G_NODE DT_ALIAS(pwm_led2)
#define LED_B_NODE DT_ALIAS(pwm_led0)

#if !DT_NODE_EXISTS(LED_R_NODE) || !DT_NODE_EXISTS(LED_G_NODE) || !DT_NODE_EXISTS(LED_B_NODE)
#error "This RGB blink demo expects pwm-led0/pwm-led1/pwm-led2 devicetree aliases"
#endif

static const struct pwm_dt_spec led_r = PWM_DT_SPEC_GET(LED_R_NODE);
static const struct pwm_dt_spec led_g = PWM_DT_SPEC_GET(LED_G_NODE);
static const struct pwm_dt_spec led_b = PWM_DT_SPEC_GET(LED_B_NODE);

struct rgb_step {
	uint8_t r;
	uint8_t g;
	uint8_t b;
	uint32_t delay_ms;
};

static int pwm_set_u8(const struct pwm_dt_spec *led, uint8_t level)
{
	uint32_t duty_ns = (PWM_PERIOD_NS * (uint32_t)level) / 255U;

	return pwm_set_dt(led, PWM_PERIOD_NS, duty_ns);
}

static int rgb_set(uint8_t r, uint8_t g, uint8_t b)
{
	int ret;

	ret = pwm_set_u8(&led_r, r);
	if (ret < 0) {
		return ret;
	}

	ret = pwm_set_u8(&led_g, g);
	if (ret < 0) {
		return ret;
	}

	ret = pwm_set_u8(&led_b, b);
	if (ret < 0) {
		return ret;
	}

	return 0;
}

int main(void)
{
	int ret;

#if defined(CONFIG_NRFX_POWER)
	nrfx_power_constlat_mode_request();
#endif

	if (!device_is_ready(led_r.dev) || !device_is_ready(led_g.dev) || !device_is_ready(led_b.dev)) {
		return -1;
	}

	static const struct rgb_step demo[] = {
		{ 255, 0, 0, STEP_TIME_MS },
		{ 0, 255, 0, STEP_TIME_MS },
		{ 0, 0, 255, STEP_TIME_MS },
		{ 255, 255, 0, STEP_TIME_MS },
		{ 0, 255, 255, STEP_TIME_MS },
		{ 255, 0, 255, STEP_TIME_MS },
		{ 255, 255, 255, STEP_TIME_MS },
		{ 0, 0, 0, STEP_TIME_MS },
	};

	while (1) {
		for (size_t i = 0; i < ARRAY_SIZE(demo); i++) {
			ret = rgb_set(demo[i].r, demo[i].g, demo[i].b);
			if (ret < 0) {
				return ret;
			}
			k_msleep(demo[i].delay_ms);
		}
	}

	return 0;
}

```

</div>
</details> 


<details>
<summary>Zephyr/prj.conf</summary>
<div>

```
CONFIG_GPIO=y
CONFIG_PWM=y
CONFIG_SERIAL=n

```

</div>
</details> 


To
志乐
您需要用以下配置替换 cMakeLists.txt 的内容
（这个是草稿，看研发那边什么时候可以修改好这个问题，如果改不好，就要把要修改的文件确定一下）

Now, connect your XIAO nRF54LM20A to your computer via USB. After saving, compiling, and downloading, the RGB light will start blinking.In VS Code:

```
pio run -e seeed-xiao-nrf54lm20a -t upload -v      //Compile and download

```

<table align="center">
  <tbody>
    <tr>
      <th>Operation seven</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/3.png"
            style={{width: 800, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
  </tbody>
</table>

The output in the terminal should indicate a successful compilation and burning process.


  </TabItem>

  <TabItem value="ncs" label="NCS">

  ## nRFConnect SDK Usage

### Using nRF Connect SDK on VSCode

<details>

<summary>Install nRF Connect SDK Knowledge in advance</summary>

This document details how to install the nRF Connect SDK development environment on a Windows 11 computer.The following is an overview of the tools that need to be installed

- Install VS Studio Code

  [Visual Studio Code - Code Editing .Redefined](https://code.visualstudio.com/ )

- nRF Command Line Tools
- nRF Connect for Desktop
- Git

- Ninja

```cpp
ninja --version
```

- CMake

```cpp
cmake --version
```

- Zephyr SDK

```cpp
west --version
```

- nRF Connect SDK
- VSCode nRF Connect plugin

***If you have pre-installed it on your computer, you can check the version number of your tool by following the command below***

</details>

<Steppers>


#### VScode configures the board and builds the burn-in file

Open VS Code and search for nRF Connect for VS Code Extension Pack in the Plugin Center. This plugin pack will automatically install other VS Code plugins required for nRF Connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn8.png" style={{width:600, height:'auto'}}/></div>
<br />
The nRF Connect for VS Code extension enables developers to utilize the popular Visual Studio Code Integrated Development Environment (VS Code IDE) to develop, build, debug and deploy embedded applications based on Nordic's nRF Connect SDK (Software Development Kit). The extension includes useful development tools such as a compiler interface, linker, complete build system, RTOS-enabled debugger, seamless interfacing with the nRF Connect SDK, device tree visualization editor, and an integrated serial terminal.

The nRF Connect extension package for VS Code includes the following components:

- nRF Connect for VS Code: The main extension contains the interface between the build system and the nRF Connect SDK, as well as an interface to manage the nRF Connect SDK version and toolchain.
- nRF DeviceTree: Provides device tree language support and a device tree visualization editor.
- nRF Kconfig: Provides Kconfig language support.
- nRF Terminal: Serial and RTT terminals.
- Microsoft C/C++: Adds language support for C/C++, including features of IntelliSense.
- CMake: CMake language support.
- GNU Linker Mapping Files: Support for linker mapping files.
We can download any preferred version of the nRF Connect SDK and its toolchain via the extension. The full nRF Connect for VS Code documentation is available at https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html.

#### Installing the toolchain

The toolchain is a collection of tools that work together to build nRF Connect SDK applications, including assembler, compiler, linker, and CMake components.
The first time you open nRF Connect for VS Code, you will be prompted to install the toolchain. This usually happens if the extension does not detect any installed toolchain on your computer.
Click Install Toolchain and a list of toolchain versions will be listed that can be downloaded and installed on your computer. Select the version of the toolchain that matches the version of the nRF Connect SDK you plan to use. We always recommend using the latest tagged version of the nRF Connect SDK.

By default, nRF Connect for VS Code only displays the Released tab (i.e., the stable version) of the toolchain. If you are evaluating a new feature and would like to use the Preview tab or another type of tab (e.g. Customer Sampling -cs), click on "Show all toolchain versions" as shown below:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/toolchain2.png" style={{width:800, height:'auto'}}/></div>

:::note
**The ToolChain here is 3.0.1 or above**
:::

#### Installing the nRF Connect SDK

In the nRF Connect extension for VS Code, click on Manage SDK. from the Manage SDK menu, we can install or uninstall the nRF Connect SDK version. Since this is the first time we are using the extension, the interface will only show two options.

Clicking Install SDK will list all available nRF Connect SDK versions that can be downloaded and installed locally. Select the version of the nRF Connect SDK that is required for the development of your project.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/install_sdk.png" style={{width:800, height:'auto'}}/></div>

If you have opened the SDK folder in VS Code, instead of the Manage SDK menu option, you will see the Manage west workspace. To resolve this issue, open another window or folder in VS Code.

:::note
**The nRF Connect SDK here is 3.0.1 or above**
:::

:::tip
If you do not see either of these options, make sure you have the latest version of the nRF Connect for VS Code extension package installed.
It is important to note that the nRF Connect SDK is IDE independent, which means you can choose to use any IDE or none at all. The nRF Connect SDK is available via the https://www.nordicsemi.com/Products/Development-tools/nRF-Util (nrfutil) command line The  (nrfutil) command line interface (CLI) will download and install nRF Connect. However, we highly recommend using our nRF Connect for VS Code extension with VS Code, as it integrates not only a convenient graphical user interface (GUI) and an efficient command line interface (CLI), but also includes a number of features that will greatly simplify firmware development. Configuring other IDEs to work with the nRF Connect SDK requires additional manual steps beyond the scope of this course.
:::

#### Creating User Programs

In this exercise we will write a simple application based on the blinky example to control blinking LEDs on a development board. The same applies to all supported NordicSemiconductor development boards (nRF54, nRF53, nRF52, nRF70 or nRF91 series). The goal is to make sure that all the tools needed to build and burn the example are set up correctly. The focus is on learning how to create an application, build it and burn it to a Nordic chip development board using the “Copy Example” template!

- In VS Code, click the nRF Connect extension icon. In the Welcome view, click Create New Application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/create_project1.png" style={{width:800, height:'auto'}}/></div>

- Type blinky in the search bar and select the second Blinky sample (path zephyr/samples/basic/blinky), as shown below.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/create_project2.png" style={{width:800, height:'auto'}}/></div>

The Blinky example will cause the LED1 on the development board to blink continuously.However, since our nRF54LM20A is equipped with an RGB light, you can modify some files through the following steps to make the RGB light shine with various lighting effects.

Our first application will be based on the Blinky example. The Blinky example is derived from the Zephyr mold block in the nRF Connect SDK, so you will see the zephyr name in the sample path: zephyr\samples\basic\blinky.


#### Add XIAO nRF54LM20A Board

<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

To get started, **clone the repository from the GitHub link**`git clone https://github.com/Seeed-Studio/platform-seeedboards.git` into your preferred local folder. Once cloned, navigate to the `platform-seeedboards/zephyr/` directory. **Remember this `zephyr` folder Path**;

To configure your board for nRF Connect in VS Code, you can follow these steps:

- Open VS Code and go to Settings.

- Type nRF Connect in the search box.

- Find the Board Roots settings item and click Edit in settings.json.

- Add the `zephyr` path of the downloaded XIAO nRF54LM20A board file to the boardRoots array.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/12ncs_2.PNG" style={{width:800, height:'auto'}}/></div>

:::tip
Please note that the end point of the added path is the path of the `boards` folder, not the path of the `platform-seeedboards` folder.
:::

- In the application view, click Add Build Configuration below the application name .

- We can select the model of XIAO nRF54LM20A in the Board target, and select the default prj.config file in the Base configuration files, and finally click `Generate and Build` to build the file.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/11ncs_1.PNG" style={{width:800, height:'auto'}}/></div>


#### Download Burn-in Plug-in

<Tabs>
<TabItem  value="window" label="Window" default>

**Additional Plugins:**

On Windows, we'll use the Chocolatey package manager to install OpenOCD.

**1.Open PowerShell (Run as Administrator):**

- In the Windows search bar, type "PowerShell".
- Right-click "Windows PowerShell" and select "Run as administrator".

**2.Check PowerShell Execution Policy:**

- Type `Get-ExecutionPolicy` and press Enter.
- Type `Get-ExecutionPolicy -List` and press Enter.

**3.Install Chocolatey:**

- Paste and run the following command:

```cpp
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

This command bypasses the execution policy for the current PowerShell session and installs Chocolatey. After installation, close and reopen the PowerShell window (still run as administrator).

**4.Install OpenOCD:**

- In the new PowerShell window (as administrator), type:

```cpp
choco install openocd
```

**5.Verify OpenOCD Installation:**

- Type `Get-Command openocd` and press Enter.

- If the installation is successful, this command will display the path to openocd.exe.

</TabItem>

<TabItem value="mac" label="Mac OS" default>

**Additional Plugins:**

On macOS, we'll use the Homebrew package manager to install the necessary tools.

**1.Install Homebrew (if not already installed):**

- Open Terminal.app.

- Run the following command:

```cpp
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- Follow the on-screen prompts; you might need to enter your macOS user password. After installation, run the commands prompted by the terminal to add Homebrew to your PATH environment variable `(e.g., eval "$(/opt/homebrew/bin/brew shellenv)")`. Then close and reopen the terminal.

**2.Install Ccache:**

In the terminal, type:

```cpp
brew install ccache
```

**3.Install OpenOCD:**

In the terminal, type:

```cpp
brew install openocd
```

**4.Verify OpenOCD Installation::**

- Type `which openocd` and press Enter.

- If the installation is successful, this command will display the path to the `openocd` executable.

</TabItem>

</Tabs>


#### Replace the code and burn it and West Flash burn-in program

- Open the **src/main.c** and **Zephyr/prj.conf**  files and replace the original code with the following code.
<details>
<summary>src/main.c</summary>
<div>

```c

/*
 * Copyright (c) 2016 Intel Corporation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/pwm.h>
#include <nrfx_power.h>

#define PWM_PERIOD_NS 1000000U
#define STEP_TIME_MS 500

#define LED_R_NODE DT_ALIAS(pwm_led1)
#define LED_G_NODE DT_ALIAS(pwm_led2)
#define LED_B_NODE DT_ALIAS(pwm_led0)

#if !DT_NODE_EXISTS(LED_R_NODE) || !DT_NODE_EXISTS(LED_G_NODE) || !DT_NODE_EXISTS(LED_B_NODE)
#error "This RGB blink demo expects pwm-led0/pwm-led1/pwm-led2 devicetree aliases"
#endif

static const struct pwm_dt_spec led_r = PWM_DT_SPEC_GET(LED_R_NODE);
static const struct pwm_dt_spec led_g = PWM_DT_SPEC_GET(LED_G_NODE);
static const struct pwm_dt_spec led_b = PWM_DT_SPEC_GET(LED_B_NODE);

struct rgb_step {
	uint8_t r;
	uint8_t g;
	uint8_t b;
	uint32_t delay_ms;
};

static int pwm_set_u8(const struct pwm_dt_spec *led, uint8_t level)
{
	uint32_t duty_ns = (PWM_PERIOD_NS * (uint32_t)level) / 255U;

	return pwm_set_dt(led, PWM_PERIOD_NS, duty_ns);
}

static int rgb_set(uint8_t r, uint8_t g, uint8_t b)
{
	int ret;

	ret = pwm_set_u8(&led_r, r);
	if (ret < 0) {
		return ret;
	}

	ret = pwm_set_u8(&led_g, g);
	if (ret < 0) {
		return ret;
	}

	ret = pwm_set_u8(&led_b, b);
	if (ret < 0) {
		return ret;
	}

	return 0;
}

int main(void)
{
	int ret;

#if defined(CONFIG_NRFX_POWER)
	nrfx_power_constlat_mode_request();
#endif

	if (!device_is_ready(led_r.dev) || !device_is_ready(led_g.dev) || !device_is_ready(led_b.dev)) {
		return -1;
	}

	static const struct rgb_step demo[] = {
		{ 255, 0, 0, STEP_TIME_MS },
		{ 0, 255, 0, STEP_TIME_MS },
		{ 0, 0, 255, STEP_TIME_MS },
		{ 255, 255, 0, STEP_TIME_MS },
		{ 0, 255, 255, STEP_TIME_MS },
		{ 255, 0, 255, STEP_TIME_MS },
		{ 255, 255, 255, STEP_TIME_MS },
		{ 0, 0, 0, STEP_TIME_MS },
	};

	while (1) {
		for (size_t i = 0; i < ARRAY_SIZE(demo); i++) {
			ret = rgb_set(demo[i].r, demo[i].g, demo[i].b);
			if (ret < 0) {
				return ret;
			}
			k_msleep(demo[i].delay_ms);
		}
	}

	return 0;
}

```

</div>
</details> 


<details>
<summary>Zephyr/prj.conf</summary>
<div>

```
CONFIG_GPIO=y
CONFIG_PWM=y
CONFIG_SERIAL=n

```

</div>
</details> 

- Then open the "Open terminal" and type the `west flash` command.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/13ncs_3.PNG" style={{width:800, height:'auto'}}/></div>



:::tip
If the west flash error occurs, it means that there is a conflict with the CMake plugin in VS Code, and you need to remove the CMake plugin.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/error.jpg" style={{width:800, height:'auto'}}/></div>
:::


</Steppers>



  </TabItem>
</Tabs>

### Code Explanation


- **src/main.c**
Main application entry point that implements demo logic, including LED color configuration, breathing effects, blink rhythm control, button-based mode switching, and other hardware interaction behaviors.

- **zephyr/prj.conf**
Zephyr RTOS configuration file for enabling/disabling system components and peripheral drivers, including logging, UART, PWM, I2C, SPI, low-power management, and other functionalities.

#### Observe the Result


To：志乐
PlatformIO 的 RGB 工程,已经发送
//需要等xiao的贴纸到了，录一下gif图
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light.gif" style={{width:400, height:'auto'}}/></div>

## Bluetooth Antenna

This board uses an external Bluetooth antenna. To use Bluetooth functionality, you must first connect the antenna.
The connection method is shown below:

To：志乐
//需要等xiao的贴纸到了，录一下gif图
<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/4.png"
    alt="Bluetooth antenna connection"
    style={{width: 800, height: 'auto'}}
  />
</div>

## Battery Usage

The XIAO nRF54LM20A is capable of using a 3.7V lithium battery as the power supply input. You can refer to the following diagram for the wiring method.



<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/6_battry.png"
    alt="Battery wiring"
    style={{width: 800, height: 'auto'}}
  />
</div>

:::caution
Please be careful not to short-circuit the positive and negative terminals and burn the battery and equipment when soldering.
If the battery has power, never solder it onto the board, as this may burn out the circuit board. Short-circuiting while the circuit is powered on poses a significant risk; it is recommended to use an adapter.

:::

**Instructions on the use of batteries:**

1. Please use qualified batteries that meet the specifications.
2. XIAO can be connected to your computer device via data cable while using the battery, rest assured that XIAO has a built-in circuit protection chip, which is safe.



### Battery Voltage Detection

The XIAO nRF54LM20A integrates a battery voltage detection feature that centers on efficiently managing battery power measurements using the nPM1300-CAA load switch. This guide will focus on analyzing the software implementation of the battery detection **(especially the main.c code)** and guide you on how to easily deploy and use this feature in a PlatformIO environment, avoiding the complexity of the Zephyr NCS SDK.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/9_battery.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:600, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Detecting Battery Schematic</em></p>
</div>

What the nPM1300-CAA chip does:

nPM1300-CAA is a highly integrated power management IC (PMIC) that replaces the simple load switch function of the TPS22916. It not only controls battery voltage switching for low-power monitoring but also integrates charging, regulation, and precise fuel gauging (via voltage, current, temperature) to maximize battery life for the nRF54LM20A.



<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-battery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

:::note
The following example works for both PlatformIO and nRF Connect SDK. It can be used directly in PlatformIO, while the SDK requires manually adding files. Refer to this [link](https://wiki.seeedstudio.com/xiao_nrf54l15_sense_getting_started/#battery-powered-board)
:::

## Peripherals Overview

The peripheral circuitry on this board includes an IMU and a microphone. You can see their locations in the diagram below:

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/8.IMU_MIC.png"
    alt="IMU and microphone locations"
    style={{width: 400, height: 'auto'}}
  />
</div>

## IMU

The XIAO nRF54LM20A features an LSM6DS3TR-C IMU, supporting 6-axis accelerometer, gyroscope, and magnetometer.
To：志乐，应产品经理的要求，如果补充了这几个项目的相关案例，可以放一个链接在这里
## MIC

The XIAO nRF54LM20A is equipped with an MSM261DGT006 microphone, supporting 16-bit audio capture.
To：志乐，应产品经理的要求，如果补充了这几个项目的相关案例，可以放一个链接在这里

## FAQ

### Issue 1: Stuck at "Reading CMake configuration" on macOS

When compiling and uploading programs with PlatformIO on macOS, the process may get stuck at the **"Reading CMake configuration"** step even after network issues have been ruled out. This is usually caused by a macOS compatibility problem that prevents the Python-based `arm-none-eabi-gdb-py` tool from running correctly.

**Recommended fix:** Replace the faulty `gdb-py` file with a symbolic link.

1. Navigate to the tool directory:
   `/Users/mengdu/.platformio/packages/toolchain-gccarmnoneeabi@1.80201.181220/bin/`
2. Back up the original file by renaming `arm-none-eabi-gdb-py` to `arm-none-eabi-gdb-py.broken.bak`.
3. Create a new symbolic link named `arm-none-eabi-gdb-py` that points to `arm-none-eabi-gdb`.

### Issue 2: Build errors after modifying configuration files

If you previously built the full Zephyr project and later modified configuration files, it is recommended to clean the build cache before rebuilding and uploading. This helps avoid compilation errors caused by stale or corrupted cache files.

```cpp
pio run -t clean  // Clean command
```
### Issue 3: Build errors after modifying configuration files
Some USB cables can only supply power and cannot transfer data. If you don't have a USB cable or don't know if your USB cable can transmit data, you can check [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).

## Resources

### Seeed Studio XIAO nRF54LM20A

**Hardware Design**
- **📄[Datasheet]** [Nordic nRF54LM20A Datasheet](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/nRF54LM20A_nRF54LM20B_Datasheet_v1.0.pdf )
- **📄[Schematic]** [XIAO nRF54LM20A Schematic](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO%20nRF54LM20A%20.pdf )
- **🗃️[PCB Design Files]** [XIAO nRF54LM20A KiCad Project](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO%20nRF54LM20A_V1.0_SCH%20&%20PCB_260202.zip )

- **📄[Pinout Diagram]** [XIAO nRF54LM20A Pinout Sheet](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO%20nRF54LM20A%E5%BC%95%E8%84%9A%E5%AE%9A%E4%B9%89.xlsx )


## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
