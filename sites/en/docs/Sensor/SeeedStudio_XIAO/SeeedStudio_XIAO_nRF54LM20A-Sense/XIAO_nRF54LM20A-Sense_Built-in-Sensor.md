---
title: Usage of Built-in Sensors for XIAO nRF54LM20A Sense
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - pin_multiplexing
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/XIAO_nRF54LM20A_IMU_MIC.webp
slug: /xiao_nrf54lm20a_with_onboard
sku: 100018440
last_update:
  date: 05/13/2026
  author: Zeller
createdAt: '2025-05-15'
updatedAt: '2026-09-01'
url: https://wiki.seeedstudio.com/xiao_nrf54lm20a_with_onboard/
---

# Usage of Built-in Sensors for XIAO nRF54LM20A Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/8.IMU_MIC.png" style={{width:400, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
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

The XIAO nRF54LM20A Sense is equipped with abundant on-board sensors to support multi-scenario applications. It includes the LSM6DS3TR-C six-axis sensor for posture recognition, and the MSM261DGT006 digital MEMS microphone that supports PDM digital output and omnidirectional sound pickup, which is suitable for intelligent voice scenarios. This article introduces the development and usage methods based on the rich on-board peripherals of XIAO nRF54LM20A.

:::tip

- This article is developed based on the PlatformIO build system and Zephyr RTOS. If you have no prior experience with them, please refer to [Getting Started With SeeedStudio XIAO nRF54LM20A](https://wiki.seeedstudio.com/xiao_nrf54lm20a_sense_getting_started/)

:::

## Hardware Properation

This article is developed based on the XIAO nRF54LM20A Sense, and you need to prepare the relevant hardware in advance.

<div className="table-center">
<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
   <th>6x10 RGB WS2812 Matrix for Seeed Studio XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/7/-/7-6x10-rgb-matrix-for-xiao-feature_1.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
 </tr>
</table>
</div>

## IMU

The LSM6DS3TR-C is a six-axis sensor integrating a 3-axis digital accelerometer and a 3-axis digital gyroscope, which belongs to the iNEMO inertial measurement unit (IMU) launched by STMicroelectronics. On XIAO nRF54LM20A Sense, this sensor supports interrupt-triggered data output. It features a full-scale acceleration range of ±2/±4/±8/±16 g and an angular velocity range of ±125/±250/±500/±1000/±2000 dps, and supports persistent low-power mode, making it suitable for various motion detection scenarios. The on-board chip communicates with it via the I2C protocol to acquire data.
:::tip

- For more information about the LSM6DS3TR-C, please visit:[Product overview for LSM6DS3TR-C](https://www.st.com/en/mems-and-sensors/lsm6ds3tr-c.html) and [LSM6DS3TR-C Datasheet](https://www.st.com/resource/en/datasheet/lsm6ds3tr-c.pdf)

:::

### Obtain Six-axis Data

1. Modify the device tree file `app.overlay` to bind the hardware pins used by LSM6DS3TR-C to the device tree. Bind IMU_SDA and IMU_SCL to the i2c30 node, corresponding to P0.08 and P0.07 on XIAO nRF54LM20A Sense. Bind the interrupt trigger pin IMU_INT1 to P0.06.

:::tip

- For the pinout of the XIAO nRF54LM20A，click [XIAO nRF54LM20A Sense Pin List](https://wiki.seeedstudio.com/xiao_nrf54lm20a_getting_started/#hardware-overview) to view details.

:::

```dtsi
&pmic_i2c {
        sda-gpios = <&gpio1 18 GPIO_ACTIVE_HIGH>;
        scl-gpios = <&gpio1 17 GPIO_ACTIVE_HIGH>;
        status = "okay";
};

&pmic {
        regulators {
                imu_vdd: LDO1 {
                        regulator-min-microvolt = <3300000>;
                        regulator-max-microvolt = <3300000>;
                        /*
                         * Do not enable LDO1 during regulator driver init: the
                         * nPM1300 sits on gpio-i2c, which may not be ready yet.
                         * main() enables this rail before deferred IMU init.
                         * Use /delete-property/ so this also overrides board
                         * revisions that define regulator-boot-on themselves.
                         */
                        /delete-property/ regulator-boot-on;
                };
        };
};

&lsm6ds3tr_c {
        zephyr,deferred-init;
};



```

2. Modify the prj.conf file to enable I2C and interrupt trigger configurations.

```prj
CONFIG_STDOUT_CONSOLE=y

CONFIG_LOG=y
CONFIG_LOG_BACKEND_UART=y
CONFIG_LOG_BACKEND_SHOW_COLOR=n
CONFIG_LOG_DEFAULT_LEVEL=3
CONFIG_MAIN_STACK_SIZE=2048
CONFIG_SYSTEM_WORKQUEUE_STACK_SIZE=2048
CONFIG_GPIO=y
CONFIG_I2C=y
CONFIG_MFD=y
CONFIG_REGULATOR=y
CONFIG_SENSOR=y
CONFIG_LSM6DSL=y
CONFIG_LSM6DSL_TRIGGER_GLOBAL_THREAD=y
CONFIG_CBPRINTF_FP_SUPPORT=y
CONFIG_CBPRINTF_COMPLETE=y

```

3. Write a program to output the acquired 3-axis digital accelerometer data and 3-axis digital gyroscope data via the USB serial port.

<details>

<summary>main.c</summary>

```c
#include <errno.h>
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/sensor.h>
#include <zephyr/drivers/regulator.h>
#include <zephyr/logging/log.h>

LOG_MODULE_REGISTER(zephyr_imu, LOG_LEVEL_INF);

#define IMU_NODE DT_ALIAS(imu0)

/*
 * nrf54lm20a needs power_en (fixed regulator on gpio1.12) and imu_vdd
 * (PMIC NPM1300 LDO1) enabled before the IMU can be used.
 * nrf54l15 has pdm_imu_pwr with regulator-boot-on; power is already on.
 */
#if defined(DT_N_NODELABEL_power_en)
static const struct device *const power_en_dev =
    DEVICE_DT_GET(DT_NODELABEL(power_en));
#endif

#if defined(DT_N_NODELABEL_imu_vdd)
static const struct device *const imu_vdd_dev =
    DEVICE_DT_GET(DT_NODELABEL(imu_vdd));
#endif

static int enable_imu_power(void)
{
#if defined(DT_N_NODELABEL_power_en) || defined(DT_N_NODELABEL_imu_vdd)
    int ret;
#endif

#if defined(DT_N_NODELABEL_power_en)
    if (!device_is_ready(power_en_dev)) {
        LOG_ERR("power_en regulator is not ready");
        return -ENODEV;
    }
    ret = regulator_enable(power_en_dev);
    if (ret < 0 && ret != -EALREADY) {
        LOG_ERR("Failed to enable power_en: %d", ret);
        return ret;
    }
#endif

#if defined(DT_N_NODELABEL_imu_vdd)
    if (!device_is_ready(imu_vdd_dev)) {
        LOG_ERR("imu_vdd regulator is not ready");
        return -ENODEV;
    }
    ret = regulator_enable(imu_vdd_dev);
    if (ret < 0 && ret != -EALREADY) {
        LOG_ERR("Failed to enable imu_vdd: %d", ret);
        return ret;
    }
#endif

#if defined(DT_N_NODELABEL_power_en) || defined(DT_N_NODELABEL_imu_vdd)
    /* Wait for power rail to stabilize */
    k_sleep(K_MSEC(20));
#endif

    return 0;
}

static inline float out_ev(struct sensor_value *val)
{
    return (val->val1 + (float)val->val2 / 1000000);
}

static void fetch_and_display(const struct device *dev)
{
    struct sensor_value x, y, z;
    static int trig_cnt;

    trig_cnt++;

    /* lsm6dsl accel */
    sensor_sample_fetch_chan(dev, SENSOR_CHAN_ACCEL_XYZ);
    sensor_channel_get(dev, SENSOR_CHAN_ACCEL_X, &x);
    sensor_channel_get(dev, SENSOR_CHAN_ACCEL_Y, &y);
    sensor_channel_get(dev, SENSOR_CHAN_ACCEL_Z, &z);

    LOG_INF("accel x:%f m/s^2 y:%f m/s^2 z:%f m/s^2",
            (double)out_ev(&x), (double)out_ev(&y), (double)out_ev(&z));

    /* lsm6dsl gyro */
    sensor_sample_fetch_chan(dev, SENSOR_CHAN_GYRO_XYZ);
    sensor_channel_get(dev, SENSOR_CHAN_GYRO_X, &x);
    sensor_channel_get(dev, SENSOR_CHAN_GYRO_Y, &y);
    sensor_channel_get(dev, SENSOR_CHAN_GYRO_Z, &z);

    LOG_INF("gyro x:%f rad/s y:%f rad/s z:%f rad/s",
            (double)out_ev(&x), (double)out_ev(&y), (double)out_ev(&z));

    LOG_INF("trig_cnt:%d", trig_cnt);
}

static int set_sampling_freq(const struct device *dev)
{
    int ret = 0;
    struct sensor_value odr_attr;

    /* set accel/gyro sampling frequency to 12.5 Hz */
    odr_attr.val1 = 12;
    odr_attr.val2 = 500000;

    ret = sensor_attr_set(dev, SENSOR_CHAN_ACCEL_XYZ,
            SENSOR_ATTR_SAMPLING_FREQUENCY, &odr_attr);
    if (ret != 0) {
        LOG_ERR("Cannot set sampling frequency for accelerometer.");
        return ret;
    }

    ret = sensor_attr_set(dev, SENSOR_CHAN_GYRO_XYZ,
            SENSOR_ATTR_SAMPLING_FREQUENCY, &odr_attr);
    if (ret != 0) {
        LOG_ERR("Cannot set sampling frequency for gyro.");
        return ret;
    }

    return 0;
}

#ifdef CONFIG_LSM6DSL_TRIGGER
static void trigger_handler(const struct device *dev,
                const struct sensor_trigger *trig)
{
    fetch_and_display(dev);
}

static void test_trigger_mode(const struct device *dev)
{
    struct sensor_trigger trig;

    if (set_sampling_freq(dev) != 0) {
        return;
    }

    trig.type = SENSOR_TRIG_DATA_READY;
    trig.chan = SENSOR_CHAN_ACCEL_XYZ;

    if (sensor_trigger_set(dev, &trig, trigger_handler) != 0) {
        LOG_ERR("Could not set sensor type and channel");
        return;
    }

    while (1) {
        k_sleep(K_MSEC(1000));
    }
}

#else
static void test_polling_mode(const struct device *dev)
{
    if (set_sampling_freq(dev) != 0) {
        return;
    }

    while (1) {
        fetch_and_display(dev);
        k_sleep(K_MSEC(1000));
    }
}
#endif

int main(void)
{
    const struct device *const dev = DEVICE_DT_GET(IMU_NODE);
    int ret;

    /* On nrf54lm20a, enable power_en + imu_vdd before accessing IMU.
     * On nrf54l15, these nodes don't exist; function returns immediately.
     */
    ret = enable_imu_power();
    if (ret < 0) {
        LOG_ERR("Failed to enable IMU power: %d", ret);
        return 0;
    }

    /* On nrf54lm20a, IMU has zephyr,deferred-init; must init manually.
     * On nrf54l15, device auto-inits at boot; device_is_ready() is true.
     */
    if (!device_is_ready(dev)) {
        ret = device_init(dev);
        if (ret < 0 && ret != -EALREADY) {
            LOG_ERR("Failed to initialize %s: %d", dev->name, ret);
            return 0;
        }
    }

    if (!device_is_ready(dev)) {
        LOG_ERR("%s: device not ready.", dev->name);
        return 0;
    }

#ifdef CONFIG_LSM6DSL_TRIGGER
    LOG_INF("Testing LSM6DSL sensor in trigger mode.");
    test_trigger_mode(dev);
#else
    LOG_INF("Testing LSM6DSL sensor in polling mode.");
    test_polling_mode(dev);
#endif
    return 0;
}
```
</details>

<br/>

:::tip
If you want to directly verify the performance of the IMU, clone the Platform-seeedboards repository, locate the zephyr-imu example under the examples directory, then compile and flash the program to start the test.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

:::

#### Result

After flashing the firmware, you can open the serial port assistant on your PC for data viewing. The trigger frequency is 12.5 Hz with an interval of 80 milliseconds.

- 3-axis digital accelerometer: Measures acceleration along the X, Y, and Z axes.
- 3-axis digital gyroscope: Measures angular velocity around the X, Y, and Z axes.

:::tip

1. Set the baud rate to 115200 when viewing data via the serial monitor.
2. Specify the baud rate as 115200 in the **platformio.ini** configuration file for the PlatformIO IDE serial monitor.

```ini
[env:seeed-xiao-nrf54lm20a]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54lm20a
monitor_speed = 115200
```

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboar_imu_1.png" style={{width:800, height:'auto'}}/></div>

### Application

The IMU can fuse three-axis acceleration data to calculate pitch, yaw and roll attitude angles for posture recognition. It can also work with corresponding controllers to realize motion control, or be applied in low-power scenarios such as attitude-triggered wake-up.

#### Electronic Ocean

This is an example based on the on-board IMU of XIAO nRF54LM20A Sense. It collects attitude data and fuses acceleration information to map motion states onto the RGB light panel, achieving visual ocean rhythm effects.

- **Tilt Water Level Control** — Adjust water level height via left and right roll tilt
- **Wave Animation** — Three-layer frequency superimposed wave surface, 2D wave propagation and edge reflection effect
- **Fluid Inertia** — Water surface with momentum; rapid tilt causes overshoot and subsequent sloshing rebound
- **Flip Detection** — The display automatically mirrors when the board is flipped
- **Dynamic Color** — Random gradient ocean tone switching for each column

In addition, you can modify the RGB array configuration of the board through macro definitions in main.c.

```cpp
#define COLS 10          // Number of matrix columns
#define ROWS  6          // Number of matrix rows
#define BRIGHTNESS 5     // Overall brightness (0-100)
#define WATER_CENTER 3.5f // Water level when placed horizontally
#define WATER_MIN 0.5f   // Minimum water level
#define WATER_MAX 6.5f   // Maximum water level
```

##### Usage Instructions

1. Copy the contents of the corresponding program [imu_ocean-main.c](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/imu_ocean_main.c) and paste it into main.c.<br/>

2. Modify the device tree file `app.overlay`.

```dts
&lsm6ds3tr_c {
	zephyr,deferred-init;
};

/*
 * The board DTS lists PMIC I2C on gpio1.15/16, but the actual XIAO
 * nRF54LM20A Sense hardware uses gpio1.18 (SDA) and gpio1.17 (SCL).
 * Override here to match the working reference example.
 */
&pmic_i2c {
	sda-gpios = <&gpio1 18 GPIO_ACTIVE_HIGH>;
	scl-gpios = <&gpio1 17 GPIO_ACTIVE_HIGH>;
};

/*
 * Give LDO1 the label "imu_vdd" so main() can call regulator_enable().
 * Voltage is 3.3 V as used by the reference example.
 */
&pmic {
	regulators {
		imu_vdd: LDO1 {
			regulator-min-microvolt = <3300000>;
			regulator-max-microvolt = <3300000>;
			regulator-boot-on;
		};
	};
};

/* WS2812 LED strip on SPI24 (spi21/22 conflict with uart21/i2c22) */
&pinctrl {
	spi24_ws2812_default: spi24_ws2812_default {
		group1 {
			psels = <NRF_PSEL(SPIM_MOSI, 1, 0)>,
				<NRF_PSEL(SPIM_SCK, 1, 1)>;
		};
	};

	spi24_ws2812_sleep: spi24_ws2812_sleep {
		group1 {
			psels = <NRF_PSEL(SPIM_MOSI, 1, 0)>,
				<NRF_PSEL(SPIM_SCK, 1, 1)>;
			low-power-enable;
		};
	};
};


&spi24 {
	status = "okay";
	pinctrl-0 = <&spi24_ws2812_default>;
	pinctrl-1 = <&spi24_ws2812_sleep>;
	pinctrl-names = "default", "sleep";

	led_strip: ws2812@0 {
		compatible = "worldsemi,ws2812-spi";
		reg = <0>;
		/*
		 * 8 MHz SPI: each clock = 125 ns, 8 clocks = 1 µs per WS2812 bit.
		 * 0xF8 = 11111000: T1H=625 ns  T1L=375 ns
		 * 0xC0 = 11000000: T0H=250 ns  T0L=750 ns
		 */
		spi-max-frequency = <8000000>;
		spi-one-frame  = <0xF8>;
		spi-zero-frame = <0xC0>;
		chain-length = <60>;
		color-mapping = <1 0 2>;
		reset-delay = <250>;
	};
};

/ {
	aliases {
		led-strip = &led_strip;
	};
};
```

3. Enable configurations related to IMU usage

```prj
CONFIG_STDOUT_CONSOLE=y
CONFIG_LOG=y
CONFIG_LOG_BACKEND_UART=y
CONFIG_LOG_DEFAULT_LEVEL=3
CONFIG_MAIN_STACK_SIZE=4096
CONFIG_SYSTEM_WORKQUEUE_STACK_SIZE=2048
CONFIG_GPIO=y
CONFIG_I2C=y
CONFIG_MFD=y
CONFIG_REGULATOR=y
CONFIG_SENSOR=y
CONFIG_LSM6DSL=y
CONFIG_SPI=y
CONFIG_LED_STRIP=y
CONFIG_WS2812_STRIP_SPI=y
CONFIG_CBPRINTF_FP_SUPPORT=y
CONFIG_CBPRINTF_COMPLETE=y
CONFIG_FAULT_DUMP=2
CONFIG_LOG_MODE_IMMEDIATE=y
```

- Shake the device to trigger the ocean wave visual effect.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/WHPSAryN-W4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div><br/>

- Meanwhile, the serial port will also output corresponding IMU data and the current water level height of the waves.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_imu_2.png" style={{width:800, height:'auto'}}/></div>

#### IMU Wake-Up

In this routine, the green channel of RGB lights up and turns off after power-on, then the system enters ultra-low power sleep mode. When a tap is detected by the board, XIAO nRF54LM20A Sense will be woken up via interrupt. The tap event will be recorded and printed through the serial port.

Download the routine to implement IMU wake-up function.

1. Download the [imu-click-main.c](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/imu_click_main.c) program and replace the contents of main.c with it.

2. Modify the device tree file `app.overlay` and add the required node configurations.

```dts
/*
 * Disable PWM20 and PWM LEDs to release P1.22/23/24 as GPIO.
 * The board DTS assigns these pins to PWM_OUT0/1/2 via pinctrl,
 * which prevents gpio-leds from controlling them.
 */
&pwm20 {
	status = "disabled";
};

&green_led {
	gpios = <&gpio1 24 GPIO_ACTIVE_LOW>;
};

/* PMIC I2C pin configuration for NPM1300 power management */
&pmic_i2c {
	sda-gpios = <&gpio1 18 GPIO_ACTIVE_HIGH>;
	scl-gpios = <&gpio1 17 GPIO_ACTIVE_HIGH>;
	status = "okay";
};

/* IMU power rail via PMIC LDO1 at 3.3V */
&pmic {
	regulators {
		imu_vdd: LDO1 {
			regulator-min-microvolt = <3300000>;
			regulator-max-microvolt = <3300000>;
			regulator-boot-on;
		};
	};
};

/* Configure I2C30 for LSM6DS3TR-C */
&i2c30 {
	pinctrl-0 = <&i2c30_default>;
	pinctrl-1 = <&i2c30_sleep>;
	pinctrl-names = "default", "sleep";
	status = "okay";
	clock-frequency = <I2C_BITRATE_STANDARD>;

	lsm6ds3tr_c: lsm6ds3tr-c@6a {
		compatible = "st,lsm6dsl";
		reg = <0x6a>;
		irq-gpios = <&gpio0 6 GPIO_ACTIVE_HIGH>;
		status = "okay";
		zephyr,deferred-init;
	};
};

/* Pin control configuration for I2C30 */
&pinctrl {
	i2c30_default: i2c30_default {
		group1 {
			psels = <NRF_PSEL(TWIM_SDA, 0, 8)>,
				<NRF_PSEL(TWIM_SCL, 0, 7)>;
		};
	};

	i2c30_sleep: i2c30_sleep {
		group1 {
			psels = <NRF_PSEL(TWIM_SDA, 0, 8)>,
				<NRF_PSEL(TWIM_SCL, 0, 7)>;
			low-power-enable;
		};
	};
};
```

3. Enable relevant IMU configurations in prj.conf

```prj
CONFIG_STDOUT_CONSOLE=y
CONFIG_LOG=y
CONFIG_LOG_BACKEND_UART=y
CONFIG_LOG_DEFAULT_LEVEL=3
CONFIG_MAIN_STACK_SIZE=4096
CONFIG_SYSTEM_WORKQUEUE_STACK_SIZE=2048
CONFIG_GPIO=y
CONFIG_I2C=y
CONFIG_MFD=y
CONFIG_REGULATOR=y
CONFIG_SENSOR=y
CONFIG_LSM6DSL=y
CONFIG_LSM6DSL_TRIGGER_GLOBAL_THREAD=y
CONFIG_SPI=y
CONFIG_LED_STRIP=y
CONFIG_WS2812_STRIP_SPI=y
CONFIG_CBPRINTF_FP_SUPPORT=y
CONFIG_CBPRINTF_COMPLETE=y
CONFIG_FAULT_DUMP=2
CONFIG_LOG_MODE_IMMEDIATE=y
```

<br/>
- After flashing and powering on, the  RGB-G LED will flash briefly. Tap anywhere on the board to turn on the  RGB-G LED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_imu_3_1.gif" style={{width:800, height:'auto'}}/></div>

- Meanwhile, tap event information will also be output via the serial port.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_imu_3.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip

The sensing position is for reference only. Accurate tap position recognition depends on the IMU fusion control algorithm.

:::

## RTC

The chip adopted by XIAO nRF54LM20A Sense is equipped with built-in GRTC hardware resources, enabling RTC functions without additional RTC modules.

The RTC supports timestamp counting and can record operating time even after power failure, which facilitates log recording and time tracking.

This section introduces a sample program implemented on XIAO nRF54LM20A Sense. After power-on, it obtains timestamps starting from the compilation time via RTC and prints data every second. After entering System OFF mode, the system will be woken up by the RTC alarm to continue counting.

1. Copy [rtc-main.c](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/rtc-main.c) into the main.c file. Use the RTC functions to print the timestamp.

2. Modify the device tree `app.overlay` to enable the RTC node.

```dts
/ {
    cpuapp_sram@2007ec00 {
        compatible = "zephyr,memory-region", "mmio-sram";
        reg = <0x2007ec00 DT_SIZE_K(4)>;
        zephyr,memory-region = "RetainedMem";
        status = "okay";

        retainedmem0: retainedmem {
            compatible = "zephyr,retained-ram";
            status = "okay";
        };
    };

    aliases {
        retainedmemdevice = &retainedmem0;
    };
};

&cpuapp_sram {
    /* Shrink SRAM to avoid overlap with retained memory region:
     * 511 - 4 = 507 KB = 0x7EC00
     */
    reg = <0x20000000 DT_SIZE_K(507)>;
    ranges = <0x0 0x20000000 0x7ec00>;
};
```

3. Edit the prj.conf file to enable relevant RTC configurations.

```prj
# Console and serial
CONFIG_SERIAL=y
CONFIG_CONSOLE=y
CONFIG_PRINTK=y

# Power management and System OFF
CONFIG_PM=y
CONFIG_PM_DEVICE=y
CONFIG_POWEROFF=y

# Hardware info (reset cause detection)
CONFIG_HWINFO=y

# Retained memory (survives System OFF)
CONFIG_RETAINED_MEM=y

# CRC for retained data validation
CONFIG_CRC=y

# Newlib C library (required for sscanf, strcmp etc.)
# Note: mktime() and gmtime() are NOT used — custom tm_to_unix()
# and unix_to_tm() avoid newlib's TZ environment dependency.
CONFIG_NEWLIB_LIBC=y
```

### Result

- The program starts counting from the time of compilation and flashing. Open the serial port tool to observe the running effect, and all expected functions are implemented.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_rtc_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

## MIC 

The XIAO nRF54LM20A Sense is equipped with the MSM261DGT006 digital MEMS microphone for voice input. It connects directly via the PDM interface without requiring an ADC. It is suitable for wearable devices, smart devices, voice recognition, audio recording and other application scenarios that require acoustic sensing functions.

:::tip

Among the XIAO nRF54LM20A series, only the XIAO nRF54M20A Sense is equipped with a microphone, which is located at the bottom-left corner of the development board.

:::

### Audio Recording and BLE Upload

This section demonstrates the microphone function through a voice example. The specific process is as follows:

- Press the BOOT button, the RGB-G LED will stay on and start recording; press it again to stop recording (maximum 10 seconds).
- After recording, the audio file will be sent to the host computer via Bluetooth. The RGB-G LED flashes during transmission.
- Run the receiving script on Windows to save the audio file to the `./recordings` directory.
- The RGB-G LED turns off after the transmission is completed.

1. Copy the program from <a href="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/main.c" download>mic-main.c</a> into `main.c`.

2. Modify the device tree file `app.overlay` to bind the BLE node.

```dts
/*
 * XIAO nRF54LM20A BLE recorder devicetree overlay
 *
 * Logging uses the board's UART20 debug bridge at 115200 baud.
 */

/* Keep the board debug UART configuration explicit and reproducible. */
&uart20 {
	current-speed = <115200>;
	status = "okay";
};

/* Enable the PDM microphone interface. */
&pdm20 {
	status = "okay";
};

/* Enable the external 8 MB SPI NOR flash used for PCM storage. */
&py25q64 {
	status = "okay";
};

/ {
	chosen {
		zephyr,bt-hci = &bt_hci_controller;
	};
};

/* dmic_vdd is the board-defined nPM1300 LDO1 3.3 V supply. The application
 * enables it at runtime. power_en is defined by the board devicetree.
 */
&dmic_vdd {
	/delete-property/ regulator-boot-on;
};
```

2. Modify the `prj.conf` file to enable configurations for Bluetooth and microphone, and set the Bluetooth device name to **XIAO-MIC**.

```prj
# ===== Audio / DMIC =====
CONFIG_AUDIO=y
CONFIG_AUDIO_DMIC=y

# ===== GPIO =====
CONFIG_GPIO=y

# I2C and PMIC support for the nPM1300 microphone supply
CONFIG_I2C=y
CONFIG_MFD=y
CONFIG_REGULATOR=y

# Logging over the board UART debug bridge
CONFIG_LOG=y
CONFIG_LOG_BACKEND_UART=y

# Serial and console
CONFIG_SERIAL=y
CONFIG_CONSOLE=y
CONFIG_UART_CONSOLE=y

# Disable the Arm MPU for compatibility with early LM20A silicon.
CONFIG_ARM_MPU=n

# ===== BLE =====
CONFIG_BT=y
CONFIG_BT_PERIPHERAL=y
CONFIG_BT_DEVICE_NAME="XIAO-MIC"
CONFIG_BT_DEVICE_APPEARANCE=833
CONFIG_BT_MAX_CONN=1
CONFIG_BT_MAX_PAIRED=1
CONFIG_BT_LOG_LEVEL_ERR=y
CONFIG_BT_AUTO_PHY_UPDATE=n
CONFIG_BT_GAP_AUTO_UPDATE_CONN_PARAMS=n
CONFIG_BT_CTLR_CONN_PARAM_REQ=n
CONFIG_BT_DATA_LEN_UPDATE=n
CONFIG_BT_BUF_ACL_TX_SIZE=251
CONFIG_BT_BUF_ACL_TX_COUNT=32
CONFIG_BT_BUF_EVT_RX_COUNT=33
CONFIG_BT_BUF_ACL_RX_SIZE=251
CONFIG_BT_L2CAP_TX_MTU=247
CONFIG_BT_L2CAP_TX_BUF_COUNT=24
CONFIG_BT_L2CAP_TX_FRAG_COUNT=12
CONFIG_BT_ATT_TX_COUNT=24
CONFIG_BT_CONN_TX_MAX=32
CONFIG_BT_ZEPHYR_NUS=y
CONFIG_BT_ZEPHYR_NUS_DEFAULT_INSTANCE=y

# Memory
CONFIG_HEAP_MEM_POOL_SIZE=16384
CONFIG_SYSTEM_WORKQUEUE_STACK_SIZE=4096

# External SPI NOR flash (8 MB PY25Q64HA)
CONFIG_SPI=y
CONFIG_SPI_NOR=y
CONFIG_FLASH=y
CONFIG_FLASH_PAGE_LAYOUT=y

# Assertions
CONFIG_ASSERT=y
CONFIG_BT_CTLR_ASSERT_OPTIMIZE_FOR_SIZE=n

```

### Result

Compile and flash the program, then use a Windows computer to receive recorded audio via Bluetooth with the help of scripts.

1. Run the Python script

Install required dependent libraries before execution:

```bash
pip install bleak 
```

<br/>

Copy the Python script file.

<details>

<summary>ble_recorder_receiver.py</summary>

```py
#!/usr/bin/env python3
"""
BLE recorder receiver for the XIAO nRF54LM20A.

Continuously scans for "XIAO-MIC", connects, subscribes to NUS notifications,
saves WAV data, and reconnects automatically. Each RIFF header starts a new file.

Usage:       python ble_recorder_receiver.py
Dependency:  pip install bleak

Firmware operation:
  Press BOOT once to begin recording (green LED on).
  Press BOOT again, or wait 10 seconds, to begin transfer (green LED blinking).
  The green LED turns off when the transfer is complete.
"""

import asyncio
import os
import sys
from datetime import datetime

from bleak import BleakClient, BleakError, BleakScanner

NUS_SERVICE_UUID = "6e400001-b5a3-f393-e0a9-e50e24dcca9e"
NUS_TX_CHAR_UUID = "6e400003-b5a3-f393-e0a9-e50e24dcca9e"  # Device-to-host notifications

DEVICE_NAME = "XIAO-MIC"
OUTPUT_DIR = "./recordings"
SCAN_TIMEOUT = 10.0
RECONNECT_DELAY = 2.0
RIFF_MAGIC = b"RIFF"
WAV_HEADER_SIZE = 44
WAV_DATA_SIZE_OFFSET = 40


class RecordingWriter:
    """Write NUS notification data to WAV files, splitting on RIFF headers."""

    def __init__(self):
        self.path = None
        self.file = None
        self.total = 0
        self.expected_total = None
        self.header = bytearray()

    def _open(self):
        os.makedirs(OUTPUT_DIR, exist_ok=True)
        stamp = datetime.now().strftime("%Y%m%d_%H%M%S_%f")
        self.path = os.path.join(OUTPUT_DIR, f"recording_{stamp}.wav")
        self.file = open(self.path, "wb")
        self.total = 0
        self.expected_total = None
        self.header.clear()
        print(f"\nNew recording -> {self.path}")

    def on_notification(self, _sender, data):
        # Finalize the current file before starting a new RIFF stream.
        if data[:4] == RIFF_MAGIC and self.total > 0:
            self.close()
        if self.file is None:
            self._open()
        self.file.write(data)
        self.total += len(data)

        if len(self.header) < WAV_HEADER_SIZE:
            needed = WAV_HEADER_SIZE - len(self.header)
            self.header.extend(data[:needed])
            if len(self.header) == WAV_HEADER_SIZE and self.header[:4] == RIFF_MAGIC:
                data_size = int.from_bytes(
                    self.header[WAV_DATA_SIZE_OFFSET:WAV_HEADER_SIZE],
                    byteorder="little",
                )
                self.expected_total = WAV_HEADER_SIZE + data_size

        sys.stdout.write(f"\rReceiving: {self.total} bytes")
        sys.stdout.flush()

        if self.expected_total is not None and self.total >= self.expected_total:
            self.close()

    def close(self):
        if self.file:
            self.file.flush()
            self.file.close()
            self.file = None
            if self.total > 44:
                tag = "WAV, playable"
            elif self.total > 0:
                tag = "incomplete (header only)"
            else:
                tag = "empty"
            print(f"\nSaved: {self.path} ({self.total} bytes) [{tag}]")
            self.total = 0
            self.expected_total = None
            self.header.clear()


async def connect_and_receive(writer):
    while True:
        print(f"\nScanning for '{DEVICE_NAME}'...")
        device = await BleakScanner.find_device_by_name(DEVICE_NAME,
                                                         timeout=SCAN_TIMEOUT)
        if device is None:
            print(f"Not found, retrying in {RECONNECT_DELAY:.0f}s"
                  " (check: board powered on, Bluetooth enabled)")
            await asyncio.sleep(RECONNECT_DELAY)
            continue

        print(f"Found: {device.name} ({device.address}), connecting...")
        disconnect_event = asyncio.Event()

        def on_disconnect(_c):
            disconnect_event.set()

        try:
            async with BleakClient(
                device.address,
                disconnected_callback=on_disconnect,
                timeout=30.0,
                services=[NUS_SERVICE_UUID],
            ) as client:
                print("Connected")
                await client.start_notify(NUS_TX_CHAR_UUID,
                                          writer.on_notification)
                print("Subscribed to NUS, waiting for audio data...")
                print("(Press BOOT on the board to record; press again or wait 10s to transfer)")
                await disconnect_event.wait()
        except BleakError as e:
            print(f"\nBLE error: {e}")
        except asyncio.TimeoutError:
            print("\nConnection timed out")

        writer.close()
        print(f"Disconnected, reconnecting in {RECONNECT_DELAY:.0f}s...")


async def main():
    print(f"=== BLE receiver '{DEVICE_NAME}', Ctrl+C to quit ===\n")
    writer = RecordingWriter()
    try:
        await connect_and_receive(writer)
    except KeyboardInterrupt:
        pass
    finally:
        writer.close()
        print("Stopped.")


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\nStopped.")

```

</details>
<br/>

Script execution command:

```bash
python ble_recorder_receiver.py
```

:::tip
The BLE UUID is already configured in the Python program, so it will connect automatically after running the script.
:::

2. Check the Result

- Press the BOOT key to start recording. The steady green RGB LED indicates recording is in progress. You can speak loudly towards the microphone, then press the BOOT key again to stop recording. The flashing green RGB LED means the audio file is being transmitted.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_mic_1.gif" style={{width:800, height:'auto'}}/></div>
<br/>

- Open the Serial port, it will be print log.Please set the Baud rate for 921600.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_mic_2.png" style={{width:800, height:'auto'}}/></div>
<br/>

- The received audio file and its byte size will be displayed.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_mic_3.png" style={{width:800, height:'auto'}}/></div>
<br/>

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
