---
title: XIAO STM32C5 アプリケーション例
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
url: https://wiki.seeedstudio.com/ja/xiao_stm32c5_application/
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
                  今すぐ入手 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## 概要

XIAO STM32C5 には、3 軸加速度センサと 3 軸ジャイロスコープを統合した LSM6DS3TR-C 6 軸慣性センサが搭載されています。さらにオンボード CAN トランシーバも備えており、モーションセンシングと CAN バス通信の要件を直接満たします。これらのハードウェアリソースにより、姿勢検出、振動監視、低消費電力モーションウェイクアップ、インタラクティブなライティング制御、CAN FD データロギングおよび故障診断など、さまざまなアプリケーションを実装できます。

:::tip

この記事では PlatformIO を使用します。PlatformIO に不慣れな場合は、[XIAO STM32C5 向け PlatformIO 入門](https://wiki.seeedstudio.com/ja/xiao_stm32c5_getting_started/#platformio-入門)を参照してください。

:::

## IMU の使用方法

XIAO STM32C5 には、3 軸加速度センサと 3 軸ジャイロスコープを統合した **[LSM6DS3TR‑C](https://www.st.com.cn/resource/en/datasheet/lsm6ds3tr-c.pdf) 6 軸慣性センサ** が搭載されています。姿勢検出、動作認識、振動監視などの用途に利用できます。

周囲温度の変動がセンサのバイアスや測定安定性に与える影響を軽減するため、ボードには能動的な温度補償用ヒータ回路が実装されています。IMU 周囲に配置されたヒータ抵抗がセンサを均一に加熱し、PWM 信号によって加熱電力を調整できます。IMU 内蔵の温度読み取りと組み合わせてソフトウェア制御を行うことで、センサを比較的安定した温度で動作させることができます。これにより、温度ドリフトによる測定ドリフトが低減され、長時間動作や温度変化のある環境下でのデータ一貫性が向上します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_7.png" style={{width:600, height:'auto'}}/></div>

### 6 軸センサデータの読み取り

- **ハードウェアの準備**

XIAO STM32C5 ボードを 1 枚用意します。

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
 </tr>
</table>
</div>

- **ソフトウェアの準備**

新しい PlatformIO プロジェクトを作成します

1. `app.overlay` でデバイスツリー設定を変更します

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

2. `prj.conf` を変更して、LSM6DS3TR-C 6 軸センサの固定レートポーリングサンプリングと、USB CDC ACM シリアルコンソール出力を有効にします。

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

3. main.c を変更します

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

- 結果

任意のシリアルモニタを使用して、出力される 3 軸加速度センサおよびジャイロスコープの読み取り値を観察します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/app_imu_1.png" style={{width:800, height:'auto'}}/></div>

:::tip

1. PWM 温度補償を有効にすると、XIAO STM32C5 は約 40°C まで加熱されます。そのため、発熱は正常です。
2. PWM 温度補償および IMU INT1 割り込みのコード例を以下に示します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/seeed-xiao-stm32c5/zephyr-imu-temp-pid-6axis" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> IMU Temperature PID</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>
<br/>

:::

### IMU モーションウェイクアップ

オンボードの LSM6DS3TR-C は、XIAO STM32C5 が低消費電力状態にある間も動きを検出できます。動きが設定したウェイクアップしきい値を超えると、IMU が INT1 をアサートしてボードをウェイクアップします。

- **ハードウェアの準備**

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
 </tr>
</table>
</div>

開始する前に、XIAO STM32C5 ボードを 1 枚用意してください。

**ソフトウェアの準備**

1. app.overlay に STOP1 電源状態の設定を追加します。ボードの DTS にはすでに IMU とその INT1 ピンが定義されています。

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

2. `prj.conf` 設定ファイルを変更します。

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

3. main.c でモーションウェイクアップを実装します。IMU は動きを設定済みのウェイクアップしきい値と比較し、トリガーされると INT1 をアサートします。その後 XIAO が起床し、イベント番号と IMU サンプルを記録してからスリープに戻ります。

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

4. 結果

- 動きが設定されたしきい値を超えると、INT1 がボードをウェイクアップします。LED が短時間点灯し、その後ボードはスリープに戻ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/app_imu_2.gif" style={{width:600, height:'auto'}}/></div>

- 各ウェイクアップ時に、イベント番号、WAKE_UP_SRC の値、および IMU サンプルがシリアルポートに出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/app_imu_2.png" style={{width:800, height:'auto'}}/></div>

### IMU Electronic Ocean

Electronic Ocean デモでは、IMU を使用してデバイスの重力方向と動作状態を検知します。直列接続された 2 枚の 6×10 RGB マトリクスを、1 つの 6×20 の表示領域として扱います。プログラムは加速度センサーデータから水面の向きを計算し、ジャイロスコープの読み取り値と動きの強さを用いて波の振幅を制御します。また、水位も動的に調整し、デバイスが回転または傾いたときでも「海水」がおおよそ半分の満たされ具合を保つようにします。これにより、重力の下で液体が流れ、ちゃぷちゃぷと揺れ、うねる様子をシミュレートします。

- 使用方法：
	- 電源投入後、RGB LED はデフォルトで消灯しており、ウェイクアップを待機します。
	- デバイスを大きく振るか、ボタンを 2 秒間押し続けることで Electronic Ocean を起動します。
	- デバイスをゆっくり傾けると、水面が重力に従って滑らかに移動します。
	- デバイスを適度に動かすと、波のうねりや押し寄せる効果が強まります。
	- ボタンを短く押すと、ネオン、ディープシーブルー、スカイシアン、パープルブリージング、スクロールテキストなどの表示モードを切り替えます。
	- 動作中にボタンを 2 秒間押し続けるか、デバイスをしっかり振ると、手動でスリープモードに入ります。
	- デバイスの姿勢が 90 秒間ほとんど変化しない場合、RGB LED は自動的に消灯し、IMU イベントまたはボタン入力によるウェイクアップ待機状態になります。

- **ハードウェアの準備**

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Button.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>
</div>

- **ソフトウェアの準備**

1. `app.overlay` ファイルを変更して、設定したピンを有効にします。ここでは、D1 をボタン制御用に選択し、D0 を RGB WS2812 マトリクスを駆動する信号ピンとして使用します。

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

2. `prj.conf` 設定ファイルを修正します。

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

3. `main.c` にロジックを実装します。リファレンスコードはかなり長いため、コードファイルを開いてその内容を `main.c` にコピーしてください。

    - **📄[c-file]** [electronic-ocean-main.c](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/electronic-ocean-main.c)

4. 結果

- デバイスが静止しているとき、またはスリープモードに入ったときは RGB ライトが消灯し、IMU は低消費電力のモーション検出状態を維持します。
- デバイスを振ると IMU 割り込みがウェイクアップをトリガーし、RGB のオーシャンエフェクトが再び点灯します。
- デバイスをゆっくり傾けると、容器内の水面のように、重力に従って海面がなめらかに傾きます。
- デバイスの向きを変えると、海水が RGB マトリクス全体を連続的に流れていきます。
- 動きや振りの強さが増すにつれて、波のうねりや荒れのエフェクトもそれに応じて強くなります。
- 姿勢が長時間変化しない場合、または大きく振った後は、ライトが再び消灯し、ウェイクアップ待機状態に戻ります。

<div class="table-center">
<iframe width="600" height="500" src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/app_ocean.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
<br/>
:::tip

1. 3D プリント可能なエンクロージャのファイルは以下から入手できます
	- [3D Ocean Shell](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/v4_eletronic_ocean.3mf)
2. バッテリーを取り付けると USB‑C 充電に対応します。詳しくは [Battery Usage](https://wiki.seeedstudio.com/ja/xiao_stm32c5_getting_started/#battery-usage) を参照してください。
3. エンクロージャ内部にバッテリーを収める場合、推奨のリチウムイオンバッテリーは KXW 402030（3.7 V、200 mAh、0.74 Wh）です。

:::

## CAN ロガー

XIAO STM32C5 には 2 チャンネルの CAN FD ペリフェラルがオンボードで搭載されています。[TCAN3403-Q1](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/tcan3403-q1.pdf) トランシーバを備え、120 オームの終端抵抗があらかじめ設定されています。基板裏面の `CAN_H` と `CAN_L` はんだパッドインターフェースを直接使用して、CAN‑BUS 関連のアプリケーションを実現できます。

:::tip

XIAO STM32C5 における CAN および CAN‑FD の使用方法については、[XIAO STM32C5 CANFD Usage](https://wiki.seeedstudio.com/ja/xiao_stm32c5_canfd_usage/) を参照してください。

:::

CAN BUS アプリケーションでは、CAN ペイロードデータの解析、送受信の成功確認、パケットロス率などの要素が、実運用において非常に重要です。しかし CAN BUS プロトコルは複雑であり、開発者にとってトラブルシューティングは困難です。そのため、CAN BUS 上の故障ノードを一次的に特定し、さらなる診断につなげるためのツールが必要となります。

以下の CAN FD 故障シミュレーションおよび可視診断デモは、2 枚の XIAO STM32C5 ボードと Round Display を用いて構成されています。通常フレーム、シーケンス欠落フレーム、アプリケーション層 CRC エラーを含むフレームを生成できます。また、受信統計をリアルタイムに表示し、パケットロス率を推定し、チェック結果を示します。

### ハードウェアの準備

ここでは 2 枚の XIAO STM32C5 ボードが必要です。1 枚は制御と解析を行う CAN ロガーとして動作し、もう 1 枚は CAN BUS ノードを模擬してデータ送信とパケットロスのエミュレーションを行います。2 枚のボードを `CAN_H` と `CAN_L` で接続します。ボードを別々の電源で駆動する場合は、グラウンドも接続してください。

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/1-28-Round-Touch-Display-for-Seeed-Studio-XIAO-ESP32.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>
</div>

### ソフトウェアの準備


#### CANFD 送信メッセージノード

- 1 枚の XIAO STM32C5 を CAN FD 送信ノードとして使用します。
  - 仲裁フェーズのビットレート：500 kbit/s
  - データフェーズのビットレート：2 Mbit/s
  - ペイロード長：64 バイト
  - CAN FD と BRS を有効化
  - データにはシーケンス番号、稼働時間、テストペイロード、および CRC16-CCITT が含まれます

1. デバイスツリーファイル `app.overlay` を修正します

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

2. 対応する設定を有効にするために `prj.conf` を修正します。

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

3. `main.c` にプログラムを書き込みます。本プロジェクトでは、次の 3 種類のデータフレームを周期的に送信します。
	- `0x100`: 通常データ
	連続したシーケンス番号と有効なアプリケーション層 CRC16 を持ちます。
	- `0x101`: フレームロスシミュレーションデータ
	一部のシーケンス番号を意図的にスキップし、受信側がシーケンスの欠落からロストフレーム数を推定できるようにします。
	- `0x102`: チェックサムエラーデータ
	フレーム自体は通常どおり送信されますが、ペイロード内のアプリケーション層 CRC16 を意図的に改ざんし、受信側が CRC の異常を検出できるようにします。
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

#### CAN ロガーノード

- XIAO STM32C5 1台と Round Display を使用して、CAN ロガーのファームウェアコードを開発します。
  - 64バイトの CAN FD テストフレームを受信して解析する
  - フレームタイプ、ペイロード長、プロトコル識別子およびバージョンを検証する
  - シーケンス番号の欠落から、失われたフレーム数とフレーム損失率を推定する
  - 重複データまたは順序の乱れたデータを検出する
  - ペイロード内の CRC16-CCITT を検証する
  - CAN コントローラのステータスおよび TX/RX エラーカウンタを読み取る
  - 通常フレーム、欠落フレーム、CRC エラー、生データを区別するために異なる色を使用する
  - 統計情報と、メモリ上の最新48件のログエントリをラウンドスクリーンに表示する
  - 下部の LAST / ページ番号 / NEXT タッチボタンでページごとにログを閲覧する
  - CHSC6X タッチコントローラを採用し、ハードウェア I²C 経由でタッチデータを読み取る

1. デバイスツリーファイル `app.overlay` を修正して、Seeed Studio XIAO 用に Round Display をバインドします。

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

2. `prj.conf` を修正して、対応する設定を有効にします。

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

3. `main.c` にプログラムを書き込み、CAN FD 解析ロジックを統合します。リファレンスコードはかなり長いため、コードファイルを開いて、その内容を `main.c` にコピーしてください。

	- **📄[c-file]** <a href="https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/can-logger-main.c" download="can-logger-main.c">can-logger-main.c</a>

### 結果

送信ノードとロガーノードは、`CAN_H` を `CAN_H` に、`CAN_L` を `CAN_L` にそれぞれ接続して配線する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_3.png" style={{width:600, height:'auto'}}/></div>

1. 未接続時の表示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/app_log_1.jpg" style={{width:600, height:'auto'}}/></div>
<br/>

2. ノード接続時の表示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/app_log_2.gif" style={{width:600, height:'auto'}}/></div>
<br/>

3. 送信ノードを切断して履歴データを表示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/app_log_3.gif" style={{width:600, height:'auto'}}/></div>
<br/>

## まとめ

これらのシンプルな XIAO STM32C5 のアプリケーション例を通して、その使用シーンについて基本的な理解が得られたはずです。この小さな開発ボードで素晴らしい体験をしていただき、その応用可能性を探求するためのさらなるアイデアが生まれることを願っています。あなたのプロジェクトをオープンソースコミュニティと共有して、皆があなたの作品を見られるようにすることも歓迎します。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>