---
description: XIAO ESP32C3 with Zephyr(RTOS)
title:  XIAO ESP32C3 with Zephyr(RTOS)
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-ESP32C3-Zephyr
last_update:
  date: 4/17/2023
  author: timo614
---

# XIAO ESP32C3 with Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-esp32c3.png"/></div>

## What is RTOS

One of the most important components of today's embedded systems is the **RTOS** also known as **Real-Time Operating System**, which is responsible for everything from task scheduling to performing applications.

**RTOS** is designed to provide a predictable execution mode. When the processing must meet the time limit of the system, RTOS is used. Therefore, compared with GPOS (General Purpose Operating System), RTOS is usually light in weight and small in size, and generally only provides functions required to run specific types of applications on specific hardware. In some cases, developers can modify the existing RTOS, narrow it down to only provide the functionality required by a specific application, and/or customize its functionality or performance characteristics.

## What is [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

The [**Zephyr**](https://www.zephyrproject.org/) OS is based on a small-footprint kernel designed for use on resource-constrained and embedded systems: from simple embedded environmental sensors and LED wearables to sophisticated embedded controllers, smart watches, and IoT wireless applications.

## Feature
Zephyr offers a large and ever growing number of features including:

### Extensive suite of Kernel services

Zephyr offers a number of familiar services for development:

- *Multi-threading Services* for cooperative, priority-based, non-preemptive, and preemptive threads with optional round robin time-slicing. Includes POSIX pthreads compatible API support.
- *Interrupt Services* for compile-time registration of interrupt handlers.
- *Memory Allocation Services* for dynamic allocation and freeing of fixed-size or variable-size memory blocks.
- *Inter-thread Synchronization Services* for binary semaphores, counting semaphores, and mutex semaphores.
- *Inter-thread Data Passing Services* for basic message queues, enhanced message queues, and byte streams.
- *Power Management Services* such as overarching, application or policy-defined, System Power Management and fine-grained, driver-defined, Device Power Management.

### Multiple Scheduling Algorithms

  Zephyr provides a comprehensive set of thread scheduling choices:
  - Cooperative and Preemptive Scheduling
  - Earliest Deadline First (EDF)
  - Meta IRQ scheduling implementing “interrupt bottom half” or “tasklet” behavior
  - Timeslicing: Enables time slicing between preemptible threads of equal priority
  - Multiple queuing strategies:
    - Simple linked-list ready queue
    - Red/black tree ready queue
    - Traditional multi-queue ready queue

### Bluetooth Low Energy 5.0 support
Bluetooth 5.0 compliant (ESR10) and Bluetooth Low Energy Controller support (LE Link Layer). Includes Bluetooth mesh and a Bluetooth qualification-ready Bluetooth controller.

- Generic Access Profile (GAP) with all possible LE roles
- Generic Attribute Profile (GATT)
- Pairing support, including the Secure Connections feature from Bluetooth 4.2
- Clean HCI driver abstraction
- Raw HCI interface to run Zephyr as a Controller instead of a full Host stack
- Verified with multiple popular controllers
- Highly configurable

Mesh Support:

- Relay, Friend Node, Low-Power Node (LPN) and GATT Proxy features
- Both Provisioning bearers supported (PB-ADV & PB-GATT)
- Highly configurable, fitting in devices with at least 16k RAM

*Reference: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## Getting Started

The first step to working with Zephyr is to get the SDK and toolchain setup for local development. The [Zephyr getting started guide](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) should be referenced for the associated setup procedure needed for your environment.

Once the Zephyr toolchain has been setup and an associated SDK has been downloaded you can begin application development.

For the Xiao ESP32C3 the [board description file](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32c3/doc/index.html) can be referenced for further setup information.

To fetch the blobs needed for using the ESP32C3 run the following command:

```
west blobs fetch hal_espressif
```

After this samples can be built and flashed to the board.

The simplest example is to run the "Hello World" sample on the board. After changing to the directory of the Zephyr install run the following commands.

```
west build -p always -b xiao_esp32c3 samples/hello_world
west flash
west espressif monitor
```

With the final command you should see the response showing the "Hello World!" greeting.

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Hello World! xiao_esp32c3/esp32c3
```

To assist with the process of using Zephyr with Xiao and its expansion board a repository has been constructed with several overlays and configurations used here. The commands included in this wiki article assume it is located `../applications/xiao-zephyr-examples` relative to the zephyr root. An alternative path can be provided to the commands below by updating it.

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## Hardware Preparation

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Seeed Studio Expansion Board</th>
      <th>Grove Red LED</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED-p-1142.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### Developer Knowledge

#### XIAO Expansion Board

  In order to use Grove modules with Seeed Studio XIAO ESP32C3, we will use a [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) and connect XIAO ESP32C3 on it.

  After that, the Grove connectors on the board can be used to connect Grove modules.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### Pin Definitions

  You need to follow the graphic below to use the appropriate internal pin numbers when connecting the Grove modules to the Grove connectors on Grove Shield for Seeed Studio XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png"style={{width:900, height:'auto'}}/></div>

### Primary Functionality

- GPIO / LED Enable
- Bluetooth
- Wi-Fi
- TFLite

#### GPIO / LED Enable

To test this setup we can use the blinky sample with Zephyr but we'll use an additional Grove LED and an overlay to override the LED to the D0 pin to demonstrate this working (the Xiao ESP32C3 does not have a programmable onboard LED):

```
west build -p always -b xiao_esp32c3 samples/basic/blinky -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/d0_led.overlay
west flash
west espressif monitor
```

Double press RESET or short the RST pin to the GND.

```
west flash
```

You will see the attached red LED toggle on and off creating a blinking effect.

Let's dive into this example a bit to see why it works.

The associated example code reference led0:
```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

The LED overlay (`xiao-zephyr-examples/d0_led.overlay`) defines this LED for us:
```
/ {
	aliases {
		led0 = &led0;
	};

	leds {
		compatible = "gpio-leds";
		led0: led_0 {
			gpios = <&xiao_d 0 GPIO_ACTIVE_HIGH>;
			label = "Demo LED";
		};
	};
};
```

This overlay sets D0 (as shown via `&xiao_d 0`) as an LED and associates it with the alias `led0`. `led0` is an alias which allows many samples use it as the LED being controlled as they look specifically for this name.

If you monitor the serial output via `west espressif monitor` you will see an output similar to:
```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
LED state: OFF
LED state: ON
LED state: OFF
LED state: ON
```

#### Bluetooth

To test this setup we can use an existing sample with Zephyr:

```
west build -p always -b xiao_esp32c3 samples/bluetooth/observer
west flash
west espressif monitor
```

You will see a console available for sending commands to the board:
```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Starting Observer Demo
Started scanning...
Device found: E5:44:60:88:DB:99 (random) (RSSI -92), type 0, AD data len 27
Device found: F3:38:F3:AD:FC:C6 (random) (RSSI -63), type 3, AD data len 8
Device found: 49:E6:31:0F:A6:25 (random) (RSSI -55), type 2, AD data len 28
Device found: EC:11:27:22:AF:D2 (public) (RSSI -80), type 0, AD data len 31
Device found: FB:3C:4A:AC:64:33 (random) (RSSI -78), type 0, AD data len 30
Device found: 79:05:36:B8:1E:1B (random) (RSSI -34), type 2, AD data len 4
Device found: 77:4D:FC:E2:12:D4 (random) (RSSI -86), type 2, AD data len 4
Device found: E0:9D:13:29:DA:15 (public) (RSSI -99), type 0, AD data len 31
Device found: 53:17:1B:22:70:23 (random) (RSSI -97), type 0, AD data len 18
```

```
CONFIG_BT=y
CONFIG_BT_OBSERVER=y
```

The [conf file](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf) here enables bluetooth related features for the Zephyr build.

#### Wi-Fi

To test this setup we can use an existing sample with Zephyr:

```
west build -p always -b xiao_esp32c3 samples/net/wifi
west flash
west espressif monitor
```

You will see a console available for sending commands to the board:
```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
uart:~$
```

Several commands exist allowing you to see and connect to local networks, see the [sample readme](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/README.rst) for more information.
```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
uart:~$ wifi scan
Scan requested
Num  | SSID                             (len) | Chan (Band)   | RSSI | Security        | BSSID             | MFP
1    | Maredonia                        9     | 6    (2.4GHz) | -41  | WPA2-PSK        |                   | Disable
2    | Maredonia                        9     | 6    (2.4GHz) | -41  | WPA2-PSK        |                   | Disable
3    | Aernazonea                       10    | 6    (2.4GHz) | -41  | WPA2-PSK        |                   | Disable
4    | Aernazonea                       10    | 6    (2.4GHz) |
```

Let's dive into this example a bit to see why it works:
```
&wifi {
	status = "okay";
};
```

The app [overlay file](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32c3.overlay) is used to setup various board components. Using this file the example can be utilized as the overlay informs the sample logic to enable Wi-Fi.

```
CONFIG_WIFI=y

CONFIG_NETWORKING=y
CONFIG_NET_L2_ETHERNET=y

CONFIG_NET_IPV6=n
CONFIG_NET_IPV4=y
CONFIG_NET_DHCPV4=y
CONFIG_ESP32_WIFI_STA_AUTO_DHCPV4=y

CONFIG_NET_LOG=y
```

The [conf file](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32c3.conf) here enables several networking related features for the Zephyr build.

#### TFLite - Hello World

Enable TFLite with Zephyr and update:
```
west config manifest.project-filter -- +tflite-micro
west update
```

Build the sample and flash to your board:
```
west build -p always -b xiao_esp32c3 samples/modules/tflite-micro/hello_world
west flash
west espressif monitor
```

You will see results returned from the console:
```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
x_value: 1.0*2^-127, y_value: 1.0*2^-127

x_value: 1.2566366*2^-2, y_value: 1.4910772*2^-2

x_value: 1.2566366*2^-1, y_value: 1.1183078*2^-1

x_value: 1.8849551*2^-1, y_value: 1.677462*2^-1

x_value: 1.2566366*2^0, y_value: 1.9316229*2^-1

x_value: 1.5707957*2^0, y_value: 1.0420598*2^0

x_value: 1.8849551*2^0, y_value: 1.9146791*2^-1

x_value: 1.0995567*2^1, y_value: 1.6435742*2^-1

x_value: 1.2566366*2^1, y_value: 1.0674761*2^-1

x_value: 1.4137159*2^1, y_value: 1.8977352*2^-3
```

Additional information about TFLite is outside of the scope of this guide but the example serves as a guide to the capabilities of the device and the components required for running the TFLite setup.

### Additional Components

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C Display
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Button
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)


#### Grove - Expansion Board - I2C Display

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/xiao_expansion_oled.jpg" style={{width:600, height:'auto'}}/></div>

To test this setup we can use an existing sample with Zephyr:

```
west build -p always -b xiao_esp32c3 samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash
```

You'll see a display showing multiple black boxes and a blinking box in the corner given this display only supports two colors.

Let's dive into this example a bit to see why it works:
```
/ {
    chosen {
      zephyr,display = &ssd1306;
    };
};

&xiao_i2c {
  status = "okay";

  ssd1306: ssd1306@3c {
    compatible = "solomon,ssd1306fb";
    reg = <0x3c>;
    width = <128>;
    height = <64>;
    segment-offset = <0>;
    page-offset = <0>;
    display-offset = <0>;
    multiplex-ratio = <63>;
    segment-remap;
    com-invdir;
    prechargep = <0x22>;
  };
};

```

The shield sets up a SSD1306 OLED screen at the 0x3C register. It is selected as the zephyr display in the chosen section.


#### Grove - Expansion Board - Button

To test this setup we can use an existing sample with Zephyr but we'll use an additional Grove LED and an overlay to override the LED to the D0 pin to demonstrate this working (the Xiao ESP32C3 does not have a programmable onboard LED):

```
west build -p always -b xiao_esp32c3 samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/d0_led.overlay
west flash
west espressif monitor
```

Pressing the button with the sample will trigger the D0 associated LED to light up.

You will see results returned from the console:

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Set up button at gpio@60004000 pin 3
Set up LED at gpio@60004000 pin 2
Press the button
Button pressed at 39818120
Button pressed at 63872629
Button pressed at 168304681
Button pressed at 241105558
Button pressed at 346324767
Button pressed at 382181856
Button pressed at 419342954
```

Let's dive into this example a bit to see why it works:
```
/ {
    aliases {
      sw0 = &xiao_button0;
    };

    buttons {
      compatible = "gpio-keys";
      xiao_button0: button_0 {
        gpios = <&xiao_d 1 (GPIO_PULL_UP | GPIO_ACTIVE_LOW)>;
        label = "SW0";
        zephyr,code = <INPUT_KEY_0>;
      };
    };
};
```

The shield / overlay file is used to setup various board components. Using this file the button example can be utilized as the overlay allows the Zephyr to configure the button and make it available for the associated code.

In this case D1 on the Xiao ESP32C3. It is setup in this overlay to act as a button and is aliased to the sw0 name to allow it to be used for the sample which has code expecting this.

The LED as shown above in the LED example is also configured via its overlay file. Now with the button associated pressing it lights this LED.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/led-button.gif?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/led-button.gif" style={{width:600, height:'auto'}}/></div>


#### Grove - Expansion Board - Buzzer

We'll activate our buzzer using the blinky PWM example to control its activation via a PWM signal. For this we'll use a custom overlay which enables the PWM for the A3 pin.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-esp32c3/xiao_expansion_buzzer.overlay"
west flash
```

After flashing you should begin hearing a series of buzzes which change in sound as the sample runs its course.

Let's look at why this works:
```
#include <zephyr/dt-bindings/pwm/pwm.h>

/ {
	aliases {
		pwm-0 = &ledc0;
		pwm-led0 = &pwm_buzzer;
	};

	pwmleds {
		compatible = "pwm-leds";
		pwm_buzzer: pwm_led_gpio0_5 {
			label = "PWM LED0";
			pwms = <&ledc0 0 1000 PWM_POLARITY_NORMAL>;
		};
	};
};

&pinctrl {
	ledc0_default: ledc0_default {
		group1 {
			pinmux = <LEDC_CH0_GPIO5>;
			output-enable;
		};
	};
};

&ledc0 {
	pinctrl-0 = <&ledc0_default>;
	pinctrl-names = "default";
	status = "okay";
	#address-cells = <1>;
	#size-cells = <0>;
	channel0@0 {
		reg = <0x0>;
		timer = <0>;
	};
};
```

The overlay configures the PWM logic for the pin 5 which corresponds with the A3 pin from the ESP32C3 pinout.

#### Grove - Expansion Board - SD Card

We'll use the filesystem sample here along with the Xiao Expansion Board shield to try interfacing with the SD card reader over SPI. The expansion board shield has the CS pin configured for the associated `&xiao_d 2` pin so no work is needed on your part for associating this capability with the board aside from adding the shield. To further prepare it we are using a custom config that enables the SD card functionality.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

Now flash and monitor:
```
west flash
west espressif monitor
```

You should see a response similar to this:
```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
[00:00:00.032,000] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.033,000] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.
Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

In this case my SD card had two files. Their names and their sizes were outputted to my console.

Let's look over the relevant elements at play here:
```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

In the associated config we're enabling SPI, the SDMMC disk driver, and the GPIO. Without this config the overlay will lead to an error as the sample is unable to find the SD card.

The relevant part of the Xiao Expansion Board shield is shown below:

```
&xiao_spi {
	status = "okay";
	cs-gpios = <&xiao_d 2 GPIO_ACTIVE_LOW>;

	sdhc0: sdhc@0 {
		compatible = "zephyr,sdhc-spi-slot";
		reg = <0>;
		status = "okay";
		mmc {
			compatible = "zephyr,sdmmc-disk";
			status = "okay";
		};
		spi-max-frequency = <24000000>;
	};
};
```

As mentioned previously the `&xiao_d 2` pin mapping is used to allow the D2 pin to be selected for this regardless of the board used so long as it supports the `&xiao_d` pin setup.

#### Grove - Temperature and Humidity Sensor (SHT31)

First solder on pins and connect your Xiao ESP32C3 to the expansion board. Then connect a grove connector cable between the Grove SHT31 and one of the I2C ports on the expansion board.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/xiao_sht31.jpg" style={{width:600, height:'auto'}}/></div>


To test this setup we can use an existing sample with Zephyr:

```
west build -p always -b xiao_esp32c3 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
west flash
west espressif monitor
```

You will see results returned from the console:
```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
SHT3XD: 25.92 Cel ; 53.37 %RH
SHT3XD: 25.97 Cel ; 54.37 %RH
SHT3XD: 26.00 Cel ; 54.43 %RH
SHT3XD: 26.02 Cel ; 54.11 %RH
SHT3XD: 26.03 Cel ; 53.33 %RH
SHT3XD: 26.02 Cel ; 52.88 %RH
SHT3XD: 26.04 Cel ; 52.12 %RH
SHT3XD: 26.07 Cel ; 51.87 %RH
SHT3XD: 26.13 Cel ; 52.81 %RH
```

Let's dive into this example a bit to see why it works:
```
 &xiao_i2c {
	sht3xd@44 {
			compatible = "sensirion,sht3xd";
			reg = <0x44>;
		};
	};
```

The app overlay file is used to setup various board components. Using this file the SHT31 example can be utilized as the overlay informs the [sample logic](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) how to configure the sensor for our board.

#### 1.69inch LCD Display Module, 240×280 Resolution, SPI Interface

For this example we'll use SPI to connect to a 1.69 inch LCD with a 240x280 resolution.

First connect your board to the LCD screen using the following image as a guide (in this case we're using the Xiao ESP32C3 but the same pin layout is used for connecting here).

| 1.69-inch LCD SPI Display| XIAO ESP32C3 |
| ------------- | ------------------------- |
| VCC | 3V3 |
| GND | GND |
| DIN | D10 |
| CLK | D8 |
| CS | D1 |
| DC | D3 |
| RST | D0 |
| BL | D6 |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/10.png" style={{width:700, height:'auto'}}/></div>

We can now build and flash the firmware:
```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_esp32c3 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
west flash
```

With the new firmware in place the device now shows the same demo screen we saw previously on the expansion board just now updated for the color LCD over SPI.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/esp32c3/spi_lcd.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp23c3_zephyr/spi_lcd.jpg" style={{width:600, height:'auto'}}/></div>


## ✨ Contributor Project

- This project is supported by the Seeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=57293521).
- Thanks **Tim's efforts** and your work will be [exhibited](https://wiki.seeedstudio.com/Honorary-Contributors/).

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
