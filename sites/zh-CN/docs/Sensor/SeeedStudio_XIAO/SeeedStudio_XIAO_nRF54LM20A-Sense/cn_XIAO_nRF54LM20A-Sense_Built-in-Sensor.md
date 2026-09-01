---
title: XIAO nRF54LM20A Sense 板载传感器的使用
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
updatedAt: '2026-07-06'
url: https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_with_onboard/
---

# XIAO nRF54LM20A Sense 板载传感器的使用

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
                  立即获取 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

XIAO nRF54LM20A Sense 配备了丰富的板载传感器，可支持多场景应用。它集成了用于姿态识别的 LSM6DS3TR-C 六轴传感器，以及支持 PDM 数字输出和全向拾音的 MSM261DGT006 数字 MEMS 麦克风，适用于智能语音场景。本文将介绍基于 XIAO nRF54LM20A 丰富板载外设的开发与使用方法。

:::tip

- 本文基于 PlatformIO 构建系统和 Zephyr RTOS 进行开发。如果你之前没有相关经验，请参考 [Getting Started With SeeedStudio XIAO nRF54LM20A](https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_sense_getting_started/)

:::

## 硬件准备

本文基于 XIAO nRF54LM20A Sense 进行开发，你需要提前准备好相关硬件。

<div className="table-center">
<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
   <th>适用于 Seeed Studio XIAO 的 6x10 RGB WS2812 点阵</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/7/-/7-6x10-rgb-matrix-for-xiao-feature_1.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
 </tr>
</table>
</div>

## IMU

LSM6DS3TR-C 是一款集成 3 轴数字加速度计和 3 轴数字陀螺仪的六轴传感器，属于意法半导体推出的 iNEMO 惯性测量单元（IMU）。在 XIAO nRF54LM20A Sense 上，该传感器支持中断触发数据输出，具有 ±2/±4/±8/±16 g 的加速度全量程范围和 ±125/±250/±500/±1000/±2000 dps 的角速度范围，并支持持续低功耗模式，适用于多种运动检测场景。板载芯片通过 I2C 协议与其通信以获取数据。
:::tip

- 关于 LSM6DS3TR-C 的更多信息，请访问：[LSM6DS3TR-C 产品概述](https://www.st.com/en/mems-and-sensors/lsm6ds3tr-c.html) 和 [LSM6DS3TR-C 数据手册](https://www.st.com/resource/en/datasheet/lsm6ds3tr-c.pdf)

:::

### 获取六轴数据

1. 修改设备树文件 `app.overlay`，将 LSM6DS3TR-C 使用的硬件引脚绑定到设备树中。将 IMU_SDA 和 IMU_SCL 绑定到 i2c30 节点，对应 XIAO nRF54LM20A Sense 上的 P0.08 和 P0.07。将中断触发引脚 IMU_INT1 绑定到 P0.06。

:::tip

- 关于 XIAO nRF54LM20A 的引脚分布，请点击 [XIAO nRF54LM20A Sense Pin List](https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_getting_started/#硬件概述) 查看详情。

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

2. 修改 prj.conf 文件，开启 I2C 和中断触发相关配置。

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

3. 编写程序，通过 USB 串口输出获取到的 3 轴数字加速度计数据和 3 轴数字陀螺仪数据。

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
如果你想直接验证 IMU 的性能，请克隆 Platform-seeedboards 仓库，在 examples 目录下找到 zephyr-imu 示例，然后编译并烧录程序以开始测试。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

:::

#### 结果

烧录固件后，你可以在电脑上打开串口助手进行数据查看。触发频率为 12.5 Hz，间隔为 80 毫秒。

- 三轴数字加速度计：测量 X、Y 和 Z 轴方向的加速度。
- 三轴数字陀螺仪：测量绕 X、Y 和 Z 轴的角速度。

:::tip

1. 通过串口监视器查看数据时，将波特率设置为 115200。
2. 在 PlatformIO IDE 串口监视器中，在 **platformio.ini** 配置文件中将波特率指定为 115200。

```ini
[env:seeed-xiao-nrf54lm20a]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54lm20a
monitor_speed = 115200
```

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboar_imu_1.png" style={{width:800, height:'auto'}}/></div>

### 应用

IMU 可以融合三轴加速度数据来计算俯仰、偏航和横滚姿态角，用于姿态识别。它还可以与相应的控制器配合，实现运动控制，或应用于姿态触发唤醒等低功耗场景。

#### 电子海洋

这是一个基于 XIAO nRF54LM20A Sense 板载 IMU 的示例。它采集姿态数据并融合加速度信息，将运动状态映射到 RGB 灯板上，实现可视化的海洋律动效果。

- **倾斜水位控制** — 通过左右横滚倾斜调节水位高度
- **波浪动画** — 三层频率叠加的波面，2D 波浪传播和边缘反射效果
- **流体惯性** — 具有动量的水面；快速倾斜会产生超调和随后的晃动回弹
- **翻转检测** — 板子翻转时显示自动镜像
- **动态色彩** — 每一列随机渐变切换海洋色调

此外，你可以通过在 main.c 中的宏定义修改板载 RGB 阵列配置。

```cpp
#define COLS 10          // Number of matrix columns
#define ROWS  6          // Number of matrix rows
#define BRIGHTNESS 5     // Overall brightness (0-100)
#define WATER_CENTER 3.5f // Water level when placed horizontally
#define WATER_MIN 0.5f   // Minimum water level
#define WATER_MAX 6.5f   // Maximum water level
```

##### 使用说明

1. 将对应程序 [imu_ocean-main.c](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/imu_ocean_main.c) 的内容复制并粘贴到 main.c 中。<br/>

2. 修改设备树文件 `app.overlay`。

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

3. 使能与 IMU 使用相关的配置

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

- 摇晃设备以触发海浪视觉效果。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/WHPSAryN-W4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div><br/>

- 同时，串口也会输出对应的 IMU 数据以及当前波浪的水位高度。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_imu_2.png" style={{width:800, height:'auto'}}/></div>

#### IMU 唤醒

在本例程中，RGB 的绿色通道在上电后点亮又熄灭，然后系统进入超低功耗睡眠模式。当板子检测到轻敲时，XIAO nRF54LM20A Sense 将通过中断被唤醒。轻敲事件会被记录并通过串口打印输出。

下载该例程即可实现 IMU 唤醒功能。

1. 下载 [imu-click-main.c](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/imu_click_main.c) 程序，并用其内容替换 main.c。

2. 修改设备树文件 `app.overlay`，并添加所需的节点配置。

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

3. 在 prj.conf 中使能相关 IMU 配置

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
- 烧录并上电后，RGB-G LED 会短暂闪烁。轻敲板子任意位置即可点亮 RGB-G LED。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_imu_3_1.gif" style={{width:800, height:'auto'}}/></div>

- 同时，轻敲事件信息也会通过串口输出。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_imu_3.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip

感应位置仅供参考。准确的轻敲位置识别取决于 IMU 融合控制算法。

:::

## RTC

XIAO nRF54LM20A Sense 采用的芯片内置 GRTC 硬件资源，无需额外的 RTC 模块即可实现 RTC 功能。

RTC 支持时间戳计数，即使在断电后也能记录运行时间，方便进行日志记录和时间追踪。

本节介绍在 XIAO nRF54LM20A Sense 上实现的一个示例程序。上电后，通过 RTC 从编译时间开始获取时间戳，并每秒打印一次数据。进入 System OFF 模式后，系统将由 RTC 闹钟唤醒以继续计数。

1. 将 [rtc-main.c](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/rtc-main.c) 拷贝到 main.c 文件中，使用 RTC 功能打印时间戳。

2. 修改设备树 `app.overlay` 以使能 RTC 节点。

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

3. 编辑 prj.conf 文件以使能相关 RTC 配置。

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

### 结果

- 程序从编译和烧录的时间开始计数。打开串口工具观察运行效果，所有预期功能均已实现。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_rtc_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

## MIC 

XIAO nRF54LM20A Sense 搭载 MSM261DGT006 数字 MEMS 麦克风用于语音输入。它通过 PDM 接口直接连接，无需 ADC。适用于可穿戴设备、智能设备、语音识别、音频录制以及其他需要声学感知功能的应用场景。

:::tip

在 XIAO nRF54LM20A 系列中，只有 XIAO nRF54M20A Sense 配备了麦克风，位于开发板的左下角。

:::

### 音频录制与 BLE 上传

本节通过语音示例演示麦克风功能，具体流程如下：

- 按下 BOOT 按钮，RGB-G LED 常亮并开始录音；再次按下停止录音（最长 10 秒）。
- 录音结束后，音频文件将通过蓝牙发送到上位机。传输过程中 RGB-G LED 闪烁。
- 在 Windows 上运行接收脚本，将音频文件保存到 `./recordings` 目录。
- 传输完成后 RGB-G LED 熄灭。

1. 将 <a href="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/main.c" download>mic-main.c</a> 中的程序拷贝到 `main.c` 中。

2. 修改设备树文件 `app.overlay` 以绑定 BLE 节点。

```dts
/*
 * XIAO nRF54LM20A BLE recorder devicetree overlay
 *
 * Logging uses RTT over SWD (CONFIG_LOG_BACKEND_RTT in prj.conf).
 * USB CDC is disabled because the board USB-C connector is attached to the
 * debugger and MCU VBUS is unavailable. Waiting for VBUS would block boot.
 */

/* Disable USB controllers to avoid waiting for unavailable VBUS. */
&usbhs {
	status = "disabled";
};

&vregusb {
	status = "disabled";
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

2. 修改 `prj.conf` 文件以使能蓝牙和麦克风相关配置，并将蓝牙设备名称设置为 **XIAO-MIC**。

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

# Logging over RTT via SWD
CONFIG_LOG=y
# Immediate logging is incompatible with the BLE software Link Layer.
# Deferred logging flushes messages to RTT from the system workqueue.
# USB CDC is disabled because MCU VBUS is unavailable on this board design.
CONFIG_USE_SEGGER_RTT=y
CONFIG_LOG_BACKEND_RTT=y
CONFIG_LOG_BACKEND_RTT_MODE_DROP=y

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

### 结果

编译并烧录程序，然后在 Windows 电脑上借助脚本通过蓝牙接收录制的音频。

1. 运行 Python 脚本

执行前安装所需依赖库：

```bash
pip install bleak 
```

<br/>

复制 Python 脚本文件。

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

脚本执行命令：

```bash
python ble_recorder_receiver.py
```

:::tip
BLE UUID 已在 Python 程序中配置好，因此运行脚本后会自动连接。
:::

2. 检查结果

- 按下 BOOT 键开始录音。常亮的绿色 RGB LED 表示正在录音。你可以对着麦克风大声说话，然后再次按下 BOOT 键停止录音。闪烁的绿色 RGB LED 表示正在传输音频文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_mic_1.gif" style={{width:800, height:'auto'}}/></div>
<br/>

- 打开串口，它会打印日志。请将波特率设置为 921600。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_mic_2.png" style={{width:800, height:'auto'}}/></div>
<br/>

- 将显示接收到的音频文件及其字节大小。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_mic_3.png" style={{width:800, height:'auto'}}/></div>
<br/>

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
