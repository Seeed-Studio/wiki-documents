---
title: XIAO STM32C5 应用示例
description: ''
keywords:
  - xiao stm32c5
  - zephyr
  - platformio
  - lsm6ds3tr-c
  - imu
  - motion detection
  - can fd
  - can logger
  - rgb matrix
  - round display
image: https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/Seeed-Studio-XIAO-STM32C5.webp
slug: /xiao_stm32c5_application
sku: 100036669
last_update:
  date: 09/14/2026
  author: Zeller
createdAt: '2026-09-08'
updatedAt: '2026-09-14'
url: https://wiki.seeedstudio.com/cn/xiao_stm32c5_application/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiaostm32c5_applicaton.png" style={{width:600, height:'auto'}}/></div>

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
                  立即获取 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## 概述

XIAO STM32C5 搭载了 LSM6DS3TR-C 六轴惯性传感器，集成 3 轴加速度计和 3 轴陀螺仪。同时板载 CAN 收发器，可直接满足运动感知和 CAN 总线通信的需求。借助这些硬件资源，你可以实现姿态检测、振动监测、低功耗运动唤醒、交互式灯光控制、CAN FD 数据记录和故障诊断等多种应用。

:::tip

本文使用 PlatformIO。如果你还不熟悉它，请参阅 [XIAO STM32C5 的 PlatformIO 入门](https://wiki.seeedstudio.com/cn/xiao_stm32c5_getting_started/#platformio-入门)。

:::

## IMU 使用

XIAO STM32C5 搭载了板载 **[LSM6DS3TR‑C](https://www.st.com.cn/resource/en/datasheet/lsm6ds3tr-c.pdf) 六轴惯性传感器**，集成 3 轴加速度计和 3 轴陀螺仪。可用于姿态检测、运动识别、振动监测等场景。

为减小环境温度变化对传感器零偏和测量稳定性的影响，开发板实现了主动温度补偿加热电路。布置在 IMU 周围的加热电阻为传感器提供均匀加热，并可通过 PWM 信号调节加热功率。结合 IMU 内部的温度读数，软件控制可使传感器工作在相对稳定的温度下，从而降低温度漂移导致的测量漂移，并在长期运行和变温条件下提升数据一致性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_7.png" style={{width:600, height:'auto'}}/></div>

### 读取六轴传感器数据

- **硬件准备**

一块 XIAO STM32C5 开发板。

<div class="table-center">
<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
 </tr>
</table>
</div>

- **软件准备**

创建一个新的 PlatformIO 工程

1. 在 `app.overlay` 中修改设备树配置

<details>

<summary> app.overlay </summary>

```dts
/*
 * No application-level devicetree overrides are required.
 *
 * The board DTS supplies imu0 as the LSM6DS3TR-C on I2C2:
 *   address 0x6a, SCL PB3, SDA PB4.
 *
 * The board DTS also describes INT1 on PC13 and the heater on PA8/TIM1_CH1,
 * but this polling-only application does not configure an IMU trigger and
 * does not enable or access PWM.  Those board-level nodes remain unchanged.
 */

```

</details>

2. 修改 `prj.conf`，以启用 LSM6DS3TR-C 六轴传感器的固定频率轮询采样，以及 USB CDC ACM 串口控制台输出。

<details>

<summary>prj.conf</summary>

```conf
# LSM6DS3TR-C six-axis polling sample.
CONFIG_SENSOR=y
CONFIG_I2C=y

# Fixed sensor configuration: 104 Hz, accel +/-4g, gyro +/-500 dps.
CONFIG_LSM6DSL_ACCEL_ODR=4
CONFIG_LSM6DSL_ACCEL_FS=4
CONFIG_LSM6DSL_GYRO_ODR=4
CONFIG_LSM6DSL_GYRO_FS=500

# USB CDC ACM console for sample output.
CONFIG_SERIAL=y
CONFIG_CONSOLE=y
CONFIG_UART_CONSOLE=y
CONFIG_UF2_DFU_RESET=y
CONFIG_USB_DEVICE_STACK_NEXT=y
CONFIG_USBD_CDC_ACM_CLASS=y
CONFIG_UART_LINE_CTRL=y

# Deliberately not enabled:
# CONFIG_PWM
# CONFIG_LSM6DSL_ENABLE_TEMP
# CONFIG_LSM6DSL_TRIGGER
```

</details>

3. 修改 main.c

<details>

<summary>main.c</summary>

```c
/*
 * Copyright (c) 2026 Seeed Technology Co., Ltd.
 * SPDX-License-Identifier: Apache-2.0
 *
 * XIAO STM32C5 onboard LSM6DS3TR-C six-axis polling sample.
 */

#include <zephyr/device.h>
#include <zephyr/devicetree.h>
#include <zephyr/drivers/sensor.h>
#include <zephyr/kernel.h>
#include <zephyr/sys/printk.h>

#define IMU_NODE DT_ALIAS(imu0)
#define SAMPLE_INTERVAL_MS 100

BUILD_ASSERT(DT_NODE_HAS_STATUS(IMU_NODE, okay),
	     "imu0 alias is not defined or not okay");

static const struct device *const imu = DEVICE_DT_GET(IMU_NODE);

static void print_value(const struct sensor_value *value)
{
	int64_t micro = sensor_value_to_micro(value);
	uint64_t magnitude = micro < 0 ? (uint64_t)(-micro) : (uint64_t)micro;

	printk("%s%lld.%06llu",
	       micro < 0 ? "-" : "",
	       (long long)(magnitude / 1000000U),
	       (unsigned long long)(magnitude % 1000000U));
}

static int read_six_axis(struct sensor_value accel[3],
			 struct sensor_value gyro[3])
{
	int ret = sensor_sample_fetch(imu);

	if (ret < 0) {
		return ret;
	}

	ret = sensor_channel_get(imu, SENSOR_CHAN_ACCEL_XYZ, accel);
	if (ret < 0) {
		return ret;
	}

	return sensor_channel_get(imu, SENSOR_CHAN_GYRO_XYZ, gyro);
}

int main(void)
{
	struct sensor_value accel[3];
	struct sensor_value gyro[3];
	int ret;

	if (!device_is_ready(imu)) {
		printk("IMU device is not ready\n");
		return 0;
	}

	printk("LSM6DS3TR-C polling: accel +/-4g, gyro +/-500 dps, 104 Hz\n");
	printk("INT1 and heater PWM are not used by this application.\n");

	while (true) {
		ret = read_six_axis(accel, gyro);
		if (ret < 0) {
			printk("IMU read failed: %d\n", ret);
			k_msleep(SAMPLE_INTERVAL_MS);
			continue;
		}

		printk("accel(m/s^2) x=");
		print_value(&accel[0]);
		printk(" y=");
		print_value(&accel[1]);
		printk(" z=");
		print_value(&accel[2]);
		printk("  gyro(rad/s) x=");
		print_value(&gyro[0]);
		printk(" y=");
		print_value(&gyro[1]);
		printk(" z=");
		print_value(&gyro[2]);
		printk("\n");

		k_msleep(SAMPLE_INTERVAL_MS);
	}

	return 0;
}
```

</details>

- 结果

使用任意串口监视器观察输出的 3 轴加速度计和陀螺仪读数。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/app_imu_1.png" style={{width:800, height:'auto'}}/></div>

:::tip

1. 如果启用了 PWM 温度补偿，XIAO STM32C5 会被加热到约 40°C，因此发热属于正常现象。
2. PWM 温度补偿和 IMU INT1 中断的代码示例如下所示。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/seeed-xiao-stm32c5/zephyr-imu-temp-pid-6axis" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> IMU Temperature PID</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>
<br/>

:::

### IMU 运动唤醒

板载 LSM6DS3TR-C 可以在 XIAO STM32C5 处于低功耗状态时检测运动。当运动超过配置的唤醒阈值时，IMU 会拉高 INT1 以唤醒开发板。

- **硬件准备**

<div class="table-center">
<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
 </tr>
</table>
</div>

在开始之前，先准备一块 XIAO STM32C5 开发板。

**软件准备**

1. 在 app.overlay 中添加 STOP1 电源状态配置。开发板 DTS 已经定义了 IMU 及其 INT1 引脚。

<details>

<summary> app.overlay </summary>

```dts
/*
 * No IMU-specific devicetree overrides are required.
 *
 * The board DTS supplies imu0 as the LSM6DS3TR-C on I2C2:
 *   address 0x6a, SCL PB3, SDA PB4.
 *
 * The board DTS also describes INT1 on PC13 and the heater on PA8/TIM1_CH1.
 */

 / {
	power-states {
		stop1: stop1 {
			compatible = "zephyr,power-state";
			power-state-name = "suspend-to-idle";
			substate-id = <1>;
			min-residency-us = <1000>;
			exit-latency-us = <100>;
		};
	};
};

&cpu0 {
	cpu-power-states = <&stop1>;
};

```

</details>

2. 修改 `prj.conf` 配置文件。

<details>

<summary> prj.conf</summary>

```conf
CONFIG_I2C=y
CONFIG_GPIO=y
CONFIG_PM=y

CONFIG_SERIAL=y
CONFIG_CONSOLE=y
CONFIG_UART_CONSOLE=y
CONFIG_PRINTK=y
CONFIG_UF2_DFU_RESET=y
CONFIG_USB_DEVICE_STACK_NEXT=y
CONFIG_USBD_CDC_ACM_CLASS=y
CONFIG_UART_LINE_CTRL=y

# The IMU heater/temperature compensation is intentionally unused.
CONFIG_PWM=n
```

</details>

3. 在 main.c 中实现运动唤醒。IMU 将运动与配置的唤醒阈值进行比较，并在触发时拉高 INT1。此时 XIAO 被唤醒，记录事件和一帧 IMU 采样，然后重新进入休眠。

<details>

<summary> main.c </summary>

```c
/* XIAO STM32C5 + LSM6DS3TR-C motion wake-up demo. */

#include <zephyr/device.h>
#include <zephyr/devicetree.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/drivers/i2c.h>
#include <zephyr/kernel.h>
#include <zephyr/pm/pm.h>
#include <zephyr/sys/printk.h>

#include <stm32_ll_cortex.h>
#include <stm32_ll_pwr.h>

#define IMU_NODE DT_ALIAS(imu0)

#define CTRL1_XL   0x10
#define CTRL2_G    0x11
#define CTRL3_C    0x12
#define CTRL6_C    0x15
#define WAKE_SRC   0x1b
#define OUTX_L_G   0x22
#define TAP_CFG    0x58
#define WAKE_THS   0x5b
#define WAKE_DUR   0x5c
#define MD1_CFG    0x5e

static const struct i2c_dt_spec imu = I2C_DT_SPEC_GET(IMU_NODE);
static const struct gpio_dt_spec imu_int =
	GPIO_DT_SPEC_GET(IMU_NODE, irq_gpios);
static const struct gpio_dt_spec led =
	GPIO_DT_SPEC_GET(DT_ALIAS(led0), gpios);

static struct gpio_callback imu_cb;
K_SEM_DEFINE(wake_sem, 0, 1);

extern int stm32_clock_control_init(const struct device *dev);

/* Zephyr 4.4 has no STM32C5 PM backend yet, so provide the STOP1 hooks here. */
void pm_state_set(enum pm_state state, uint8_t substate_id)
{
	if (state == PM_STATE_SUSPEND_TO_IDLE && substate_id == 1) {
		LL_PWR_SetPowerMode(LL_PWR_STOP1_MODE);
		SCB_EnableDeepSleep();
		k_cpu_idle();
	}
}

void pm_state_exit_post_ops(enum pm_state state, uint8_t substate_id)
{
	if (state == PM_STATE_SUSPEND_TO_IDLE && substate_id == 1) {
		SCB_DisableDeepSleep();
		(void)stm32_clock_control_init(NULL);
	}
	irq_unlock(0);
}

static void imu_isr(const struct device *port, struct gpio_callback *cb,
		    gpio_port_pins_t pins)
{
	ARG_UNUSED(port);
	ARG_UNUSED(cb);
	ARG_UNUSED(pins);
	k_sem_give(&wake_sem);
}

static int imu_wakeup_init(void)
{
	int ret;

	if (!i2c_is_ready_dt(&imu) || !gpio_is_ready_dt(&imu_int) ||
	    !gpio_is_ready_dt(&led)) {
		return -ENODEV;
	}

	ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_INACTIVE);
	ret |= gpio_pin_configure_dt(&imu_int, GPIO_INPUT);
	if (ret < 0) {
		return ret;
	}

	gpio_init_callback(&imu_cb, imu_isr, BIT(imu_int.pin));
	ret = gpio_add_callback(imu_int.port, &imu_cb);
	if (ret < 0) {
		return ret;
	}

	return 0;
}

static int enter_imu_low_power(void)
{
	int ret;

	/* Sleep sensing: accel 12.5 Hz low-power +/-2 g, gyro off. */
	ret = i2c_reg_write_byte_dt(&imu, MD1_CFG, 0x00);
	ret |= i2c_reg_write_byte_dt(&imu, CTRL3_C, 0x44);
	ret |= i2c_reg_write_byte_dt(&imu, CTRL2_G, 0x00);
	ret |= i2c_reg_write_byte_dt(&imu, CTRL6_C, 0x10);
	ret |= i2c_reg_write_byte_dt(&imu, CTRL1_XL, 0x10);
	ret |= i2c_reg_write_byte_dt(&imu, WAKE_THS, 0x08);
	ret |= i2c_reg_write_byte_dt(&imu, WAKE_DUR, 0x00);
	ret |= i2c_reg_write_byte_dt(&imu, TAP_CFG, 0x80);
	return ret;
}

static int arm_imu_wakeup(void)
{
	uint8_t source;
	int ret;

	/* Discard the mode-change transient only after the 500 ms settling time. */
	k_sem_reset(&wake_sem);
	ret = i2c_reg_read_byte_dt(&imu, WAKE_SRC, &source);
	ret |= i2c_reg_write_byte_dt(&imu, MD1_CFG, BIT(5));
	ret |= gpio_pin_interrupt_configure_dt(&imu_int,
					       GPIO_INT_EDGE_TO_ACTIVE);
	return ret;
}

static int16_t sample16(const uint8_t *data)
{
	return (int16_t)((uint16_t)data[0] | ((uint16_t)data[1] << 8));
}

static void print_imu_sample(void)
{
	uint8_t data[12];
	int16_t gx, gy, gz, ax, ay, az;

	/* Awake sensing: accel and gyro at 104 Hz. */
	(void)i2c_reg_write_byte_dt(&imu, MD1_CFG, 0x00);
	(void)i2c_reg_write_byte_dt(&imu, CTRL6_C, 0x00);
	(void)i2c_reg_write_byte_dt(&imu, CTRL1_XL, 0x40);
	(void)i2c_reg_write_byte_dt(&imu, CTRL2_G, 0x40);
	k_msleep(30);

	if (i2c_burst_read_dt(&imu, OUTX_L_G, data, sizeof(data)) < 0) {
		printk("IMU sample read failed\n");
		return;
	}

	gx = sample16(&data[0]);
	gy = sample16(&data[2]);
	gz = sample16(&data[4]);
	ax = sample16(&data[6]);
	ay = sample16(&data[8]);
	az = sample16(&data[10]);

	/* +/-2 g: 0.061 mg/LSB; +/-250 dps: 8.75 mdps/LSB. */
	printk("accel[mg]=%d,%d,%d gyro[mdps]=%d,%d,%d\n",
	       ax * 61 / 1000, ay * 61 / 1000, az * 61 / 1000,
	       gx * 875 / 100, gy * 875 / 100, gz * 875 / 100);
}

int main(void)
{
	uint32_t event_count = 0;
	uint8_t source;

	if (imu_wakeup_init() < 0) {
		printk("IMU wake-up init failed\n");
		return 0;
	}

	gpio_pin_set_dt(&led, 1);
	if (enter_imu_low_power() < 0) {
		printk("Failed to configure IMU low-power mode\n");
		return 0;
	}
	k_msleep(500);
	gpio_pin_set_dt(&led, 0);

	while (true) {
		if (arm_imu_wakeup() < 0) {
			printk("Failed to arm IMU wake-up\n");
			return 0;
		}

		printk("Sleeping in STOP1. Move or tap the board to wake it.\n");

		/* With no runnable work, Zephyr selects STOP1 from app.overlay. */
		k_sem_take(&wake_sem, K_FOREVER);

		(void)gpio_pin_interrupt_configure_dt(&imu_int,
						      GPIO_INT_DISABLE);
		(void)i2c_reg_write_byte_dt(&imu, MD1_CFG, 0x00);
		(void)i2c_reg_read_byte_dt(&imu, WAKE_SRC, &source);
		gpio_pin_set_dt(&led, 1);
		printk("Knock event #%u, WAKE_UP_SRC=0x%02x\n",
		       ++event_count, source);
		print_imu_sample();

		/* Let low-power acceleration settle while the LED remains on. */
		if (enter_imu_low_power() < 0) {
			printk("Failed to configure IMU low-power mode\n");
			return 0;
		}
		k_msleep(500);
		gpio_pin_set_dt(&led, 0);
	}

	return 0;
}
```

</details>

4. 结果

- 当运动超过配置的阈值时，INT1 会唤醒开发板。LED 会短暂点亮，然后开发板重新进入休眠。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/app_imu_2.gif" style={{width:600, height:'auto'}}/></div>

- 每次唤醒都会在串口打印事件编号、WAKE_UP_SRC 值以及一帧 IMU 采样数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/app_imu_2.png" style={{width:800, height:'auto'}}/></div>

### IMU 电子海洋

Electronic Ocean 演示程序使用 IMU 感知设备的重力方向和运动状态。两个级联的 6×10 RGB 点阵被视为一个统一的 6×20 显示区域。程序根据加速度计数据计算水面的朝向，并利用陀螺仪读数和运动强度来控制波浪幅度。它还会动态调整水位，在设备旋转或倾斜时保持“海水”大致半满状态，从而模拟流体在重力作用下的流动、晃动和涌动。

- 使用方法：
	- 上电后，RGB LED 默认保持熄灭，等待唤醒。
	- 通过明显摇晃设备，或按住按键 2 秒来唤醒 Electronic Ocean。
	- 缓慢倾斜设备，水面会平滑地随重力方向移动。
	- 适度移动设备，可增强波浪起伏和涌动效果。
	- 短按按键可切换显示模式：霓虹、深海蓝、天空青、紫色呼吸、滚动文字等。
	- 在运行过程中，长按按键 2 秒或用力摇晃设备，可手动进入休眠模式。
	- 如果设备姿态在连续 90 秒内几乎保持不变，RGB LED 将自动熄灭，并等待通过 IMU 事件或按键输入唤醒。

- **硬件准备**

<div class="table-center">
<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>6x10 RGB WS2812 Matrix for Seeed Studio XIAO × 2 </th>
		<th>Grove Button</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/6/-/6-6x10-rgb-matrix-for-xiao-feature.jpg" style={{width:300, height:'auto'}}/></div></td>
	<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/p/e/perspectiive.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Button.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>
</div>

- **软件准备**

1. 修改 `app.overlay` 文件以使配置的引脚生效。这里选择 D1 作为按键控制引脚，D0 作为驱动 RGB WS2812 点阵的信号引脚。

<details>

<summary> app.overlay </summary>

```dts
#include <zephyr/dt-bindings/gpio/gpio.h>

/ {
	aliases {
		rgb-data = &rgb_matrix_data;
		imu-wake = &imu_wake;
		mode-button = &mode_button;
	};

	mode_buttons {
		compatible = "gpio-keys";
		mode_button: mode-button {
			gpios = <&gpioa 1 (GPIO_PULL_DOWN | GPIO_ACTIVE_HIGH)>;
			label = "Grove Button on D1";
		};
	};

	imu_wake_pins {
		compatible = "gpio-keys";
		imu_wake: imu-wake {
			gpios = <&gpioc 13 GPIO_ACTIVE_HIGH>;
			label = "LSM6DS3TR-C INT1";
		};
	};

	/* D0/PA0 drives two cascaded 6 x 10 panels (first DOUT -> second DIN). */
	rgb_matrix_pins {
		compatible = "gpio-leds";

		rgb_matrix_data: rgb-matrix-data {
			gpios = <&gpioa 0 GPIO_ACTIVE_HIGH>;
		};
	};
};

/* The on-board LSM6DS3TR-C is polled at 50 Hz to animate the ocean. */
&i2c2 {
	status = "okay";
};

&lsm6ds3tr_c {
	status = "okay";
};
```

</details>

2. 修改 `prj.conf` 配置文件。

<details>

<summary> prj.conf</summary>

```conf
CONFIG_GPIO=y
CONFIG_I2C=y
CONFIG_SENSOR=y
CONFIG_LSM6DSL=y
CONFIG_PRINTK=y
CONFIG_MAIN_STACK_SIZE=4096
```

</details>

3. 在 `main.c` 中实现逻辑。由于参考代码较长，请前往代码文件并将其内容复制到 `main.c` 中。

    - **📄[c-file]** [electronic-ocean-main.c](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/electronic-ocean-main.c)

4. 结果

- 当设备静止或进入睡眠模式时，RGB 灯会熄灭，IMU 保持在低功耗运动检测状态。
- 摇晃设备，IMU 中断触发唤醒，RGB 海洋效果再次点亮。
- 缓慢倾斜设备，海平面会顺着重力方向平滑倾斜，就像容器中的水面一样。
- 改变设备姿态时，海水会在整个 RGB 点阵上连续流动。
- 随着运动或摇晃强度的增加，波浪起伏和汹涌效果也会相应增强。
- 如果姿态长时间保持不变，或在明显摇晃之后，灯光会再次熄灭并回到等待唤醒状态。

<div class="table-center">
<iframe width="600" height="500" src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/app_ocean.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
<br/>
:::tip

1. 下方提供可 3D 打印的外壳文件
	- [3D Ocean Shell](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/v4_eletronic_ocean.3mf)
2. 安装电池后支持 USB‑C 充电。请参考 [Battery Usage](https://wiki.seeedstudio.com/cn/xiao_stm32c5_getting_started/#电池使用)。
3. 如果你打算在外壳内安装电池，推荐使用的锂离子电池为 KXW 402030（3.7 V，200 mAh，0.74 Wh）。

:::

## CAN 记录仪

XIAO STM32C5 板载双通道 CAN FD 外设，配备 [TCAN3403-Q1](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/tcan3403-q1.pdf) 收发器，并预先配置了 120 欧姆终端电阻。你可以直接使用背面的 `CAN_H` 和 `CAN_L` 焊盘接口进行 CAN‑BUS 相关应用。

:::tip

关于在 XIAO STM32C5 上使用 CAN 和 CAN‑FD 的更多信息，请参考 [XIAO STM32C5 CANFD Usage](https://wiki.seeedstudio.com/cn/xiao_stm32c5_canfd_usage/)

:::

在 CAN BUS 应用中，对 CAN 负载数据的分析、收发是否成功的验证、丢包率以及其他相关因素，对实际部署至关重要。然而，CAN BUS 协议本身较为复杂，使得开发者在排查问题时面临挑战。因此，需要借助一定的工具，对 CAN BUS 上的故障节点进行初步识别，以便进一步诊断。

下面的 CAN FD 故障仿真与可视化诊断演示由两块 XIAO STM32C5 和一块 Round Display 组成。它可以生成正常帧、缺失序列的帧以及应用层 CRC 出错的帧，并实时显示接收统计数据、估算丢包率并展示检查结果。

### 硬件准备

此处需要两块 XIAO STM32C5。一块作为 CAN 记录仪，用于控制和分析；另一块模拟 CAN BUS 节点，用于发送数据并模拟丢包。通过 `CAN_H` 和 `CAN_L` 将两块板连接起来。如果两块板使用独立电源，请同时连接它们的地线。

<div class="table-center">
<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5 × 2 </th>
        <th>Round Display for Seeed Studio XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-104030087-seeed-studio-round-display-for-xiao-new-font.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/1-28-Round-Touch-Display-for-Seeed-Studio-XIAO-ESP32.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>
</div>

### 软件准备


#### CANFD 发送报文节点

- 使用一块 XIAO STM32C5 作为 CAN FD 发送节点。
  - 仲裁阶段比特率：500 kbit/s
  - 数据阶段比特率：2 Mbit/s
  - 负载长度：64 字节
  - 启用 CAN FD 和 BRS
  - 数据包含序列号、运行时间、测试负载和 CRC16-CCITT

1. 修改设备树文件 `app.overlay`

<details>

<summary>app.overlay</summary>

```overlay
/* No application-specific devicetree overlay is required.
 *
 * The board-level DTS already enables FDCAN2 and routes the console to the
 * USB CDC ACM virtual COM port:
 *   - can0 / zephyr,canbus -> &fdcan2 (RX=PB5, TX=PB13)
 *   - CAN_STB (PB14)       -> managed by the board-level can_phy0 transceiver
 *   - zephyr,console       -> &cdc_acm_uart0
 */
```

</details>

2. 修改 `prj.conf` 以启用相应配置。

<details>

<summary>prj.conf</summary>

```conf
CONFIG_GPIO=y
CONFIG_SERIAL=y
CONFIG_CONSOLE=y
CONFIG_UART_CONSOLE=y
CONFIG_PRINTK=y
CONFIG_USB_DEVICE_STACK_NEXT=y
CONFIG_USBD_CDC_ACM_CLASS=y
CONFIG_UART_LINE_CTRL=y
CONFIG_UF2_DFU_RESET=y
CONFIG_CAN=y
CONFIG_CAN_FD_MODE=y
CONFIG_CAN_INIT_PRIORITY=80
CONFIG_CAN_DEFAULT_BITRATE=500000
CONFIG_CAN_DEFAULT_BITRATE_DATA=2000000
CONFIG_MAIN_STACK_SIZE=4096

```

</details>

3. 在 `main.c` 中编写程序。该项目循环发送三种类型的数据帧：
	- `0x100`: 正常数据
	连续的序列号以及有效的应用层 CRC16。
	- `0x101`: 帧丢失仿真数据
	有意跳过某些序列号，使接收端可以根据序列号间的间隔估算丢失帧的数量。
	- `0x102`: 校验和错误数据
	帧正常发送，但负载中的应用层 CRC16 被刻意篡改，以便接收端检测 CRC 故障。
<details>

<summary>main.c</summary>

```c
/* SPDX-License-Identifier: Apache-2.0
 * XIAO STM32C5 CAN FD logger traffic generator.
 */

#include <stdbool.h>
#include <stdint.h>
#include <string.h>
#include <zephyr/device.h>
#include <zephyr/drivers/can.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/kernel.h>
#include <zephyr/sys/printk.h>

#define CAN_NOMINAL_BITRATE 500000U
#define CAN_DATA_BITRATE    2000000U
#define PERIOD_MS           200U
#define FRAME_BYTES         64U
#define ID_NORMAL           0x100U
#define ID_LOSSY            0x101U
#define ID_BAD_CRC          0x102U
#define PACKET_MAGIC_0      0xCAU
#define PACKET_MAGIC_1      0xFDU
#define PACKET_VERSION      1U

enum packet_type { PACKET_NORMAL, PACKET_LOSSY, PACKET_BAD_CRC };

static const struct device *const can_dev =
	DEVICE_DT_GET(DT_CHOSEN(zephyr_canbus));
static const struct gpio_dt_spec led =
	GPIO_DT_SPEC_GET_OR(DT_ALIAS(led0), gpios, { 0 });
static uint32_t tx_ok;
static uint32_t tx_failed;

static uint16_t crc16_ccitt(const uint8_t *data, size_t len)
{
	uint16_t crc = 0xffffU;
	for (size_t i = 0; i < len; ++i) {
		crc ^= (uint16_t)data[i] << 8;
		for (int bit = 0; bit < 8; ++bit) {
			crc = (crc & 0x8000U) != 0U ?
				(uint16_t)((crc << 1) ^ 0x1021U) : (uint16_t)(crc << 1);
		}
	}
	return crc;
}

static void put_u32_le(uint8_t *dst, uint32_t value)
{
	dst[0] = (uint8_t)value;
	dst[1] = (uint8_t)(value >> 8);
	dst[2] = (uint8_t)(value >> 16);
	dst[3] = (uint8_t)(value >> 24);
}

static void build_packet(struct can_frame *frame, uint32_t id,
			 enum packet_type type, uint32_t sequence, bool corrupt_crc)
{
	memset(frame, 0, sizeof(*frame));
	frame->id = id;
	frame->flags = CAN_FRAME_FDF | CAN_FRAME_BRS;
	frame->dlc = can_bytes_to_dlc(FRAME_BYTES);
	frame->data[0] = PACKET_MAGIC_0;
	frame->data[1] = PACKET_MAGIC_1;
	frame->data[2] = PACKET_VERSION;
	frame->data[3] = (uint8_t)type;
	put_u32_le(&frame->data[4], sequence);
	put_u32_le(&frame->data[8], k_uptime_get_32());
	for (uint8_t i = 12U; i < FRAME_BYTES - 2U; ++i) {
		frame->data[i] = (uint8_t)(sequence + id + i * 17U);
	}
	uint16_t crc = crc16_ccitt(frame->data, FRAME_BYTES - 2U);
	if (corrupt_crc) {
		crc ^= 0x0001U;
	}
	frame->data[FRAME_BYTES - 2U] = (uint8_t)crc;
	frame->data[FRAME_BYTES - 1U] = (uint8_t)(crc >> 8);
}

static int send_packet(uint32_t id, enum packet_type type,
		       uint32_t sequence, bool corrupt_crc)
{
	struct can_frame frame;
	build_packet(&frame, id, type, sequence, corrupt_crc);
	int ret = can_send(can_dev, &frame, K_MSEC(100), NULL, NULL);
	if (ret == 0) {
		tx_ok++;
	} else {
		tx_failed++;
		printk("TX failed id=0x%03x seq=%u err=%d\n", id, sequence, ret);
	}
	return ret;
}

int main(void)
{
	uint32_t normal_seq = 0U, lossy_seq = 0U, bad_crc_seq = 0U;
	int ret;

	printk("XIAO STM32C5 CAN FD traffic generator\n");
	printk("nominal=%u data=%u payload=%u bytes BRS=on\n",
	       CAN_NOMINAL_BITRATE, CAN_DATA_BITRATE, FRAME_BYTES);
	if (!device_is_ready(can_dev)) {
		printk("CAN device is not ready\n");
		return -ENODEV;
	}
	if (led.port != NULL && gpio_is_ready_dt(&led)) {
		(void)gpio_pin_configure_dt(&led, GPIO_OUTPUT_INACTIVE);
	}
	ret = can_set_mode(can_dev, CAN_MODE_FD);
	if (ret != 0) {
		printk("Cannot enable CAN FD mode: %d\n", ret);
		return ret;
	}
	ret = can_set_bitrate(can_dev, CAN_NOMINAL_BITRATE);
	if (ret != 0) {
		printk("Cannot set nominal bitrate: %d\n", ret);
		return ret;
	}
	ret = can_set_bitrate_data(can_dev, CAN_DATA_BITRATE);
	if (ret != 0) {
		printk("Cannot set data bitrate: %d\n", ret);
		return ret;
	}
	ret = can_start(can_dev);
	if (ret != 0) {
		printk("Cannot start CAN controller: %d\n", ret);
		return ret;
	}
	printk("0x100 normal, 0x101 skips every 5th, 0x102 has bad app CRC16\n");

	while (true) {
		(void)send_packet(ID_NORMAL, PACKET_NORMAL, normal_seq++, false);
		if ((lossy_seq % 5U) != 4U) {
			(void)send_packet(ID_LOSSY, PACKET_LOSSY, lossy_seq, false);
		} else {
			printk("INTENTIONAL DROP id=0x101 seq=%u\n", lossy_seq);
		}
		lossy_seq++;
		(void)send_packet(ID_BAD_CRC, PACKET_BAD_CRC, bad_crc_seq++, true);
		if ((normal_seq % 10U) == 0U) {
			printk("TX ok=%u failed=%u seq=%u\n", tx_ok, tx_failed, normal_seq);
		}
		if (led.port != NULL) {
			(void)gpio_pin_toggle_dt(&led);
		}
		k_msleep(PERIOD_MS);
	}
}
```

</details>

#### CAN 记录器节点

- 使用一个 XIAO STM32C5 搭配圆形显示屏开发 CAN 记录器固件代码。
  - 接收并解析 64 字节的 CAN FD 测试帧
  - 校验帧类型、载荷长度、协议标识符和版本
  - 根据序列号间隙估算丢帧数量和帧丢失率
  - 检测重复或乱序数据
  - 校验载荷中的 CRC16-CCITT
  - 读取 CAN 控制器状态以及 TX/RX 错误计数器
  - 使用不同颜色区分正常帧、丢失帧、CRC 错误和原始数据
  - 在圆形屏幕上显示统计信息和最新的 48 条内存日志条目
  - 通过底部的 LAST / 页码 / NEXT 触摸按键逐页浏览日志
  - 采用 CHSC6X 触摸控制器；通过硬件 I²C 读取触摸数据

1. 修改设备树文件 `app.overlay`，为 Seeed Studio XIAO 绑定圆形显示屏。

<details>

<summary>app.overlay</summary>

```overlay
#include <freq.h>
#include <zephyr/dt-bindings/display/panel.h>
#include <zephyr/dt-bindings/gpio/gpio.h>
#include <zephyr/dt-bindings/i2c/i2c.h>

/ {
	chosen {
		zephyr,display = &gc9a01_round_display;
	};

	backlight_leds {
		compatible = "gpio-leds";

		display_backlight: backlight {
			gpios = <&xiao_d 6 GPIO_ACTIVE_HIGH>;
		};
	};

	round_display_mipi_dbi {
		compatible = "zephyr,mipi-dbi-spi";
		spi-dev = <&spi3>;
		dc-gpios = <&xiao_d 3 GPIO_ACTIVE_HIGH>;
		write-only;
		#address-cells = <1>;
		#size-cells = <0>;

		gc9a01_round_display: gc9a01@0 {
			compatible = "galaxycore,gc9x01x";
			reg = <0>;
			status = "okay";
			mipi-max-frequency = <DT_FREQ_M(8)>;
			pixel-format = <PANEL_PIXEL_FORMAT_RGB_565>;
			width = <240>;
			height = <240>;
			display-inversion;
		};
	};
};

&usart1 {
	/* Release D6 (PA9) for the display backlight. */
	status = "disabled";
};

&i2c1 {
	/* XIAO D4/PB7=SDA and D5/PB6=SCL. */
	clock-frequency = <I2C_BITRATE_STANDARD>;
	scl-gpios = <&gpiob 6 (GPIO_OPEN_DRAIN | GPIO_PULL_UP)>;
	sda-gpios = <&gpiob 7 (GPIO_OPEN_DRAIN | GPIO_PULL_UP)>;
	status = "okay";
};

&spi3 {
	/* D8=PE2 SCK, D9=PB0 MISO, D10=PB15 MOSI. */
	status = "okay";
	cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>;
};

```

</details>

2. 修改 `prj.conf` 以启用相应的配置。

<details>

<summary>prj.conf</summary>

```conf
CONFIG_GPIO=y
CONFIG_I2C=y
CONFIG_I2C_STM32_BUS_RECOVERY=y
CONFIG_SPI=y
CONFIG_DISPLAY=y
CONFIG_MIPI_DBI=y
CONFIG_CAN=y
CONFIG_CAN_FD_MODE=y
CONFIG_CAN_INIT_PRIORITY=80
CONFIG_CAN_DEFAULT_BITRATE=500000
CONFIG_CAN_DEFAULT_BITRATE_DATA=2000000
CONFIG_SERIAL=y
CONFIG_CONSOLE=y
CONFIG_UART_CONSOLE=y
CONFIG_PRINTK=y
CONFIG_USB_DEVICE_STACK_NEXT=y
CONFIG_USBD_CDC_ACM_CLASS=y
CONFIG_UART_LINE_CTRL=y
CONFIG_UF2_DFU_RESET=y
CONFIG_MAIN_STACK_SIZE=6144

```

</details>

3. 在 `main.c` 中编写程序并集成 CAN FD 分析逻辑。由于参考代码较长，请前往代码文件并将其内容复制到 `main.c` 中。

	- **📄[c-file]** <a href="https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/can-logger-main.c" download="can-logger-main.c">can-logger-main.c</a>

### 结果

发送节点和记录器节点应通过将 `CAN_H` 对接 `CAN_H`、`CAN_L` 对接 `CAN_L` 来连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_3.png" style={{width:600, height:'auto'}}/></div>

1. 未连接时的显示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/app_log_1.jpg" style={{width:600, height:'auto'}}/></div>
<br/>

2. 节点连接时的显示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/app_log_2.gif" style={{width:600, height:'auto'}}/></div>
<br/>

3. 断开发送节点以查看历史数据

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/app_log_3.gif" style={{width:600, height:'auto'}}/></div>
<br/>

## 总结

通过这些简单的 XIAO STM32C5 应用示例，你应该已经对其使用场景有了基本了解。祝你在使用这块小巧的开发板时有愉快的体验，并激发出更多创意去探索它的应用可能性。也欢迎你将自己的项目分享给开源社区，让更多人看到你的作品。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>