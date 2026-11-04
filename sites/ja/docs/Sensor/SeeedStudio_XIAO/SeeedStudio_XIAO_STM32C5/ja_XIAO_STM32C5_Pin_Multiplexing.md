---
title:  XIAO STM32C5 によるピンマルチプレクシング
description: ''
keywords:
  - xiao
  - stm32
  - stm32c5
  - pin multiplexing
image: https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/Seeed-Studio-XIAO-STM32C5.webp
slug: /xiao_stm32c5_pin_multiplexing
sku: 100036669
last_update:
  date: 08/26/2026
  author: Zeller
createdAt: '2026-08-26'
updatedAt: '2026-09-01'
url: https://wiki.seeedstudio.com/ja/xiao_stm32c5_pin_multiplexing/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiaostm32c5_pinmux.png" style={{width:600, height:'auto'}}/></div>

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

XIAO STM32C5 は豊富なピンリソースを備え、Digital、Analog、SPI、IIC などの各種標準ペリフェラルインターフェースによる開発をネイティブにサポートします。本記事では、実際のアプリケーション事例を通して関連する実装方法を紹介します。

:::tip

このチュートリアルは PlatformIO ビルドシステムと Zephyr RTOS をベースに作成されています。
PlatformIO 上で XIAO STM32C5 用プロジェクトの作成に慣れていない場合は、[Getting Started With Seeed Studio XIAO STM32C5](https://wiki.seeedstudio.com/ja/xiao_stm32c5_getting_started/#入門ガイド) にジャンプしてください。

:::

## デジタル

デジタルピンは主に、高レベルと低レベルの論理を出力することで外部センサーやアクチュエータのオン・オフ制御を実現します。Grove Base for XIAO 拡張ボードおよび標準 Grove 周辺モジュールと組み合わせて、本セクションでは XIAO STM32C5 上のデジタルピンの低レベルドライバロジックと実際の呼び出し方法について詳しく説明します。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - LED Pack</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-led-pack-all-2.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### ソフトウェアの準備

XIAO STM32C5 のピン配置に従い、Grove - LED Pack の制御ピンとして D1 を選択できます。

:::tip

- XIAO STM32C5 のピン配置については、[XIAO STM32C5 Pin List](https://wiki.seeedstudio.com/ja/xiao_stm32c5_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

:::

main.c 用のプログラムを書きます

```cpp
/*
 * Copyright (c) 2026 Seeed Technology Co., Ltd.
 * SPDX-License-Identifier: Apache-2.0
 *
 * Blinky example for XIAO STM32C5 with TinyUF2 bootloader support.
 * Based on Zephyr samples/basic/blinky.
 *
 * The 1200-bps UF2 bootloader trigger is armed automatically by the
 * board support package — no code changes needed in this example.
 */

#include <zephyr/kernel.h>
#include <zephyr/drivers/gpio.h>

#define SLEEP_TIME_MS 1000

#define D1_PIN 1

static const struct device *const d1_gpio = DEVICE_DT_GET(DT_NODELABEL(gpioa));

int main(void)
{
	int ret;
	bool led_state = true;

	if (!device_is_ready(d1_gpio)) {
		return 0;
	}

	ret = gpio_pin_configure(d1_gpio, D1_PIN, GPIO_OUTPUT_ACTIVE);
	if (ret < 0) {
		return 0;
	}

	while (1) {
		ret = gpio_pin_toggle(d1_gpio, D1_PIN);
		if (ret < 0) {
			return 0;
		}

		led_state = !led_state;
		printk("LED state: %s\n", led_state ? "ON" : "OFF");
		k_msleep(SLEEP_TIME_MS);
	}

	return 0;
}
```

### 結果

ファームウェアを書き込むと、赤色 LED が点滅します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_1.gif" style={{width:600, height:'auto'}}/></div>

シリアルモニタを開き、ボーレートを **115200** に設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_4_2.png" style={{width:600, height:'auto'}}/></div>

## PWM

PWM はデジタル出力 GPIO をベースに実装されたタイミング波形出力機能です。一定の周波数でピンレベルを高速に切り替え、1 サイクル内の高レベルのデューティ比を動的に調整することで、周辺機器に等価なアナログ信号を出力します。実際のエンジニアリング用途では、PWM はサーボモーターの精密な角度制御や LED の滑らかな明るさ調整などに広く利用されています。

### サーボモーターを駆動する

#### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Servo</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedimg2016-06rjmxymiq9lqxkkxxwg6udxfm.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### ソフトウェアの準備

XIAO STM32C5 のピン配置に従い、**D0** を **Grove-Servo** の制御ピンとして選択できます。

:::tip

- XIAO STM32C5 のピン配置については、[XIAO STM32C5 Pin List](https://wiki.seeedstudio.com/ja/xiao_stm32c5_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

:::

1. `app.overlay` ファイルを修正します。XIAO STM32C5 では、D0 は PA0 ピンに対応します。DeviceTree で PA0 を AF1 代替機能として設定することで、TIM2_CH1 を使用して PWM 信号を出力できます。

<details>
<summary>app.overlay</summary>

```dts
#include <zephyr/dt-bindings/pwm/pwm.h>

&{/pwmleds} {
	servo: servo {
		pwms = <&pwm2 1 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
	};
};

&timers2 {
	st,prescaler = <143>;
	status = "okay";

	pwm2: pwm {
		pinctrl-0 = <&tim2_ch1_pa0>;
		pinctrl-names = "default";
		status = "okay";
	};
};

```
</details>

2. `prj.conf` ファイルを修正して、関連する PWM 設定を有効にします。

```prj
CONFIG_PWM=y
```

3. main.c プログラムを作成し、PWM サーボ制御機能を実装するとともに、PWM 周期などのパラメータを設定します。

<details>

<summary>main.c</summary>

```cpp
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/pwm.h>
#include <zephyr/sys/printk.h>

#define SERVO_PERIOD_NS PWM_MSEC(20)
#define SERVO_MIN_NS PWM_USEC(500)
#define SERVO_MAX_NS PWM_USEC(2500)
#define SERVO_CHANNEL 1
#define STEP_FWD_MS 10
#define STEP_RET_MS 30

static const struct device *pwm_dev = DEVICE_DT_GET(DT_NODELABEL(pwm2));

static int set_angle(int degrees)
{
	uint32_t pulse = SERVO_MIN_NS +
		(uint32_t)((uint64_t)degrees *
		(SERVO_MAX_NS - SERVO_MIN_NS) / 180U);

	return pwm_set(pwm_dev, SERVO_CHANNEL, SERVO_PERIOD_NS, pulse,
		PWM_POLARITY_NORMAL);
}

int main(void)
{
	printk("=== boot ===\n");

	if (!device_is_ready(pwm_dev)) {
		printk("Error: PWM device not ready\n");
		return -1;
	}

	printk("Servo control started on D0\n");

	while (1) {
		for (int angle = 0; angle <= 180; angle++) {
			if (set_angle(angle)) {
				printk("PWM error at %d deg\n", angle);
			} else {
				printk("Angle: %d deg\n", angle);
			}
			k_msleep(STEP_FWD_MS);
		}

		for (int angle = 180; angle >= 0; angle--) {
			if (set_angle(angle)) {
				printk("PWM error at %d deg\n", angle);
			} else {
				printk("Angle: %d deg\n", angle);
			}
			k_msleep(STEP_RET_MS);
		}
	}

	return 0;
}
```

</details>

#### 結果

指令角度は 0° から 180° までは 10 ms ごとに 1° ずつ増加し、その後は 30 ms ごとに 1° ずつ減少します。実際の動作速度はサーボによって異なります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_2.gif" style={{width:600, height:'auto'}}/></div>

### ブザーを制御する

Seeed Studio Expansion Board Base for XIAO には、PWM 信号で駆動できるオンボードのパッシブ電磁ブザーが搭載されています。PWM の周波数、デューティ比、出力タイミングを調整することで、ブザー音の音程、音量、継続時間を制御でき、キー操作のプロンプト音、ステータスアラート、アラームなどの機能を実現できます。

#### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>Seeed Studio Expansion Board Base for XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/z/h/zheng2.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### ソフトウェアの準備

:::tip

- XIAO STM32C5 のピン配置については、[XIAO STM32C5 Pin List](https://wiki.seeedstudio.com/ja/xiao_stm32c5_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

:::

1. `app.overlay` ファイルを修正します。XIAO STM32C5 では、A3/D3 は PA3 ピンに対応しており、Seeed Studio Expansion Board Base for XIAO 上の 2N7002PW MOSFET を介してオンボードの LET5020CS-03L パッシブ電磁ブザーに接続されています。DeviceTree で PA3 を AF1 代替機能として設定することで、TIM2_CH4 から周期 250 μs、デューティ比 50% の 4 kHz PWM 信号を出力してブザーを駆動できます。

<details>
<summary>app.overlay</summary>

```dts
#include <zephyr/dt-bindings/gpio/gpio.h>
#include <zephyr/dt-bindings/input/input-event-codes.h>
#include <zephyr/dt-bindings/pwm/pwm.h>

/ {
	buttons {
		compatible = "gpio-keys";

		expansion_button: button {
			gpios = <&xiao_d 1 (GPIO_PULL_UP | GPIO_ACTIVE_LOW)>;
			zephyr,code = <INPUT_KEY_0>;
		};
	};

	pwmleds {
		compatible = "pwm-leds";

		expansion_buzzer: buzzer {
			/* LET5020CS-03L: 4 kHz resonant frequency. */
			pwms = <&pwm2 4 PWM_USEC(250) PWM_POLARITY_NORMAL>;
		};
	};

	aliases {
		sw1 = &expansion_button;
		buzzer = &expansion_buzzer;
	};
};

&timers2 {
	st,prescaler = <143>;
	status = "okay";

	pwm2: pwm {
		pinctrl-0 = <&tim2_ch4_pa3>;
		pinctrl-names = "default";
		status = "okay";
	};
};
```
</details>

2. `prj.conf` ファイルを修正して、関連する PWM 設定を有効にします。

```prj
CONFIG_GPIO=y
CONFIG_PWM=y
```

3. main.c プログラムを修正します。
<details>

<summary>main.c</summary>

```cpp
/*
 * Copyright (c) 2026 Seeed Technology Co., Ltd.
 * SPDX-License-Identifier: Apache-2.0
 *
 * Expansion Board Base for XIAO buzzer demo:
 * press the onboard button (D1) to sound the onboard buzzer (A3/D3).
 */

#include <zephyr/kernel.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/drivers/pwm.h>
#include <zephyr/sys/printk.h>

static const struct gpio_dt_spec button =
	GPIO_DT_SPEC_GET(DT_ALIAS(sw1), gpios);
static const struct pwm_dt_spec buzzer =
	PWM_DT_SPEC_GET(DT_ALIAS(buzzer));

int main(void)
{
	bool buzzer_on = false;
	int ret;

	if (!gpio_is_ready_dt(&button) || !pwm_is_ready_dt(&buzzer)) {
		printk("Button or buzzer device not ready\n");
		return -1;
	}

	ret = gpio_pin_configure_dt(&button, GPIO_INPUT);
	if (ret < 0) {
		printk("Button configuration failed: %d\n", ret);
		return ret;
	}

	ret = pwm_set_dt(&buzzer, buzzer.period, 0);
	if (ret < 0) {
		printk("Buzzer configuration failed: %d\n", ret);
		return ret;
	}

	printk("Press the D1 button to sound the A3 buzzer\n");

	while (1) {
		int pressed = gpio_pin_get_dt(&button);

		if (pressed < 0) {
			printk("Button read failed: %d\n", pressed);
			return pressed;
		}

		if ((pressed != 0) != buzzer_on) {
			ret = pwm_set_dt(&buzzer, buzzer.period,
					 pressed ? buzzer.period / 2U : 0U);
			if (ret < 0) {
				printk("Buzzer control failed: %d\n", ret);
				return ret;
			}

			buzzer_on = pressed != 0;
			printk("Buzzer: %s\n", buzzer_on ? "ON" : "OFF");
		}

		k_msleep(20);
	}
}
```

</details>

#### 結果

Seeed Studio Expansion Board Base for XIAO 上の Button を押すと、ブザーが鳴ります。シリアルモニタを開き、ボーレートを **115200** に設定すると、対応するステータスが出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_4_1.png" style={{width:600, height:'auto'}}/></div>

## アナログ

アナログ I/O はアナログ-デジタルコンバータ（ADC）に基づいており、主に外部センサから出力される連続的なアナログ電圧信号を取得するために使用されます。生のデジタルサンプリング値（Raw Data）を取得した後、特定の線形または非線形変換アルゴリズムを用いて実際の工学的測定値にマッピングできます。この機能は、バッテリ電圧のサンプリングや、土壌水分、周囲温度などの物理量のリアルタイム監視といったシナリオで広く利用されています。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Capacitive Soil Moisture Sensor</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/_/2_1_1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Capacitive-Moisture-Sensor-Corrosion-Resistant-p-2580.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### ソフトウェアの準備

1. `app.overlay` ファイルを修正します。XIAO STM32C5 のボードレベル DTS では、A0 はすでに PA0、ADC1 チャネル 0、12 ビット分解能として完全に設定されています。そのため、`app.overlay` では `zephyr,user` は ADC1 チャネル 0 を参照する必要があります。

```dts
/ {
	zephyr,user {
		io-channels = <&adc1 0>;
	};
};
```

2. `prj.conf` ファイルを修正して、ADC 関連の設定を有効にします。

```prj
CONFIG_ADC=y
```

3. main.c プログラムを修正します。

<details>

<summary>main.c</summary>

```cpp
#include <zephyr/kernel.h>
#include <zephyr/drivers/adc.h>
#include <zephyr/sys/printk.h>

static const struct adc_dt_spec adc_ch =
	ADC_DT_SPEC_GET(DT_PATH(zephyr_user));

int main(void)
{
	int ret;
	int16_t buffer;
	struct adc_sequence sequence = {
		.buffer = &buffer,
		.buffer_size = sizeof(buffer),
	};

	if (!adc_is_ready_dt(&adc_ch)) {
		printk("ADC not ready\n");
		return -1;
	}

	ret = adc_channel_setup_dt(&adc_ch);
	if (ret < 0) {
		printk("ADC channel setup failed: %d\n", ret);
		return ret;
	}

	adc_sequence_init_dt(&adc_ch, &sequence);
	printk("A0 ADC example started\n");

	while (1) {
		ret = adc_read_dt(&adc_ch, &sequence);
		if (ret < 0) {
			printk("ADC read error: %d\n", ret);
		} else {
			printk("ADC raw: %d\n", buffer);
		}

		k_msleep(500);
	}
}
```

</details>

### 結果

プログラムを書き込んだ後、Grove-Capacitive Soil Moisture Sensor を家庭用の鉢植えに挿し込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_3.jpg" style={{width:600, height:'auto'}}/></div>
<br/>
PC 上でシリアルポートアシスタントを開き、出力値を観察します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_3_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip

電圧リファレンス読み取り表

| 状態 | センサ出力電圧 | ADC 生データ値 |
| -------------- | -------------- | ---------------- |
| 空気中（乾燥） | 約 2.0–2.4V | 約 3400–4095 |
| 湿った土壌中 | 約 1.3–1.8V | 約 2200–3000 |
| 完全に水に浸した状態 | 約 0.8–1.2V | 約 1365–2048 |

:::

:::note

測定結果は環境条件によって異なる場合があります。実際の測定値を参照してください。

:::

## UART

Universal Asynchronous Receiver/Transmitter（UART）は、標準的な非同期シリアル通信プロトコルです。同期のために外部クロック信号を必要とせず、通信双方で事前に設定したボーレートに基づいて、非同期のデータ送受信を実現します。物理配線の観点では、デバイスのTXピンとRXピンをクロス接続し、GND同士を接続するだけでフルデュプレックスのデータリンクを構成できます。ハードウェアコストが最小限で、送受信を同時に行えることから、UARTは組み込みシステムにおいて、コンソールログ出力、モジュール型周辺機器のデバッグ、低帯域なポイントツーポイントのデータ通信などに広く採用されています。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>USB to TTL Converter</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-317990026-ch340g-usb-to-serial-_ttl_-module_adapter.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### ソフトウェアの準備

1. app.overlay を変更します。XIAO STM32C5 では、D6 は PA9 / USART1_TX に対応し、D7 は PA10 / USART1_RX に対応します。対応する DeviceTree ノードは usart1 です。デフォルトのボーレートを 115200 に設定します。

```dtsi
/ {
	chosen {
		zephyr,console = &usart1;
		zephyr,shell-uart = &usart1;
	};
};
```

2. prj.conf を変更して、シリアルコンソールのサポートを有効にします。

```prj
CONFIG_SERIAL=y
CONFIG_CONSOLE=y
CONFIG_UART_CONSOLE=y
CONFIG_UART_INTERRUPT_DRIVEN=y
CONFIG_PRINTK=y
```

3. プログラムは起動時に UART ピンのマッピングを出力し、受信データをエコーバックし、定期的な動作状態メッセージを出力します。

<details>

<summary>main.c</summary>

```c
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/uart.h>
#include <zephyr/sys/printk.h>

#define RX_BUFFER_SIZE 128
#define RX_TIMEOUT_MS  50

static const struct device *const uart = DEVICE_DT_GET(DT_NODELABEL(usart1));
K_MSGQ_DEFINE(rx_msgq, sizeof(uint8_t), RX_BUFFER_SIZE, 1);

static void uart_rx_isr(const struct device *dev, void *user_data)
{
	uint8_t data[16];
	int length;

	ARG_UNUSED(user_data);

	if (!uart_irq_update(dev)) {
		return;
	}

	while (uart_irq_rx_ready(dev)) {
		length = uart_fifo_read(dev, data, sizeof(data));
		if (length <= 0) {
			break;
		}

		for (int i = 0; i < length; i++) {
			(void)k_msgq_put(&rx_msgq, &data[i], K_NO_WAIT);
		}
	}
}

int main(void)
{
	char rx_buffer[RX_BUFFER_SIZE];
	size_t rx_length = 0;
	int64_t last_rx_time = 0;
	int64_t last_debug_time = k_uptime_get();

	if (!device_is_ready(uart)) {
		return -1;
	}

	if (uart_irq_callback_user_data_set(uart, uart_rx_isr, NULL) < 0) {
		return -1;
	}

	uart_irq_rx_enable(uart);

	printk("\r\nXIAO STM32C5 UART demo\r\n");
	printk("D6: TX, D7: RX, 115200 8N1\r\n");
	printk("Type a character to test RX and echo.\r\n");

	while (1) {
		uint8_t data;
		int64_t now;

		while (k_msgq_get(&rx_msgq, &data, K_NO_WAIT) == 0) {
			last_rx_time = k_uptime_get();

			if (data == '\r' || data == '\n') {
				if (rx_length > 0) {
					rx_buffer[rx_length] = '\0';
					printk("RX: %s\r\n", rx_buffer);
					rx_length = 0;
				}
			} else if (rx_length < RX_BUFFER_SIZE - 1) {
				rx_buffer[rx_length++] = (char)data;
			}
		}

		now = k_uptime_get();

		/* Also print strings sent without a trailing CR/LF. */
		if (rx_length > 0 && now - last_rx_time >= RX_TIMEOUT_MS) {
			rx_buffer[rx_length] = '\0';
			printk("RX: %s\r\n", rx_buffer);
			rx_length = 0;
		}

		if (now - last_debug_time >= 1000) {
			printk("UART debug: system running\r\n");
			last_debug_time = now;
		}

		k_msleep(1);
	}
}
```

</details>

### 結果

1. 表の順番に従って配線します

| XIAO STM32C5 | CH340 |
| --------------- | ----- |
| GND             | GND   |
| D6 - TX      | RX    |
| D7 - RX      | TX    |

2. シリアルモニタを使用して、実行時の情報を確認できます。また、シリアルポート経由でデータを送信すると、受信したデータがコンソールに出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_4.png" style={{width:800, height:'auto'}}/></div>

## I2C

I2C は同期式のハーフデュプレックスデータ通信プロトコルです。SCL クロックラインと SDA データラインを介したアドレッシングによって複数デバイスの接続を可能にし、IMU や温湿度センサなど、比較的高い伝送レートを必要とするセンサからデータを読み取る用途や、OLED ディスプレイ出力などによく使用されます。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>Seeed Studio Expansion Board Base for XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/z/h/zheng2.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### ソフトウェアの準備

1. XIAO STM32C5 では、D4 は PB7 / I2C1_SDA に対応し、D5 は PB6 / I2C1_SCL に対応します。I2C1 はすでにボードレベルの DTS で有効化されているため、I2C アドレス 0x3C に SSD1306 ディスプレイノードを追加します。app.overlay を次のように変更します：

```dts
/ {
	chosen {
		zephyr,display = &oled;
	};
};

&i2c1 {
	oled: ssd1306@3c {
		compatible = "solomon,ssd1306";
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

2. `prj.conf` ファイルを変更して、I2C およびディスプレイ関連の設定を有効にします。

```conf
CONFIG_DISPLAY=y
CONFIG_CHARACTER_FRAMEBUFFER=y
CONFIG_HEAP_MEM_POOL_SIZE=2048
```

3. 文字列の表示位置と機能を設定するメイン関数を記述します。

<details>

<summary>main.c</summary>

```c
#include <zephyr/device.h>
#include <zephyr/display/cfb.h>
#include <zephyr/sys/printk.h>

int main(void)
{
	const struct device *display = DEVICE_DT_GET(DT_CHOSEN(zephyr_display));

	if (!device_is_ready(display)) {
		printk("OLED not ready\n");
		return -1;
	}

	if (cfb_framebuffer_init(display)) {
		return -1;
	}

	cfb_framebuffer_clear(display, true);
	cfb_framebuffer_set_font(display, 0);
	cfb_print(display, "XIAO STM32C5", 4, 8);
	cfb_print(display, "Hello World", 9, 32);
	cfb_framebuffer_finalize(display);
	display_blanking_off(display);

	return 0;
}
```

</details>

### 結果

プログラムの実行後、OLED に **XIAO STM32C5 Hello World** が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_5.jpg" style={{width:600, height:'auto'}}/></div>

## SPI

SPI は、高速で同期式かつフルデュプレックスの通信プロトコルです。非同期通信とは異なり、SPI は専用の SCLK クロックラインに依存して正確なデータ同期を行います。一般的に、MOSI、MISO、およびチップセレクト CS/SS ピンから成る古典的な 4 線式ハードウェアトポロジが採用されます。独立したデータ送信・受信チャネルと高いバスクロック周波数を備えることで、SPI は優れたデータスループットを実現します。Flash や SD カードなどの大容量ストレージデバイス、高解像度かつ高リフレッシュレートの画面表示、高頻度サンプリングセンサなど、高帯域幅を要求する周辺機器の駆動シーンで広く利用されています。

次に、SD カードの例を示します。SD カードの容量を読み取り、`XIAOTEST.TXT` という名前のファイルを作成して、内容として **Hello XIAO STM32C5** を書き込みます。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>Seeed Studio Expansion Board Base for XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/z/h/zheng2.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

:::tip

さらに、FAT32 形式でフォーマットされた **32 GB 以下** の SD カードも用意する必要があります。

:::

### ソフトウェアの準備

1. XIAO STM32C5 のデフォルトの SPI バスピンは、D8 - SPI_SCK、D9 - SPI_MISO、D10 - SPI_MOSI です。ボードレベル DTS における対応するノードは `SPI3` です。加えて、CS チップセレクトピンを 1 本選択する必要があり、ここでは D2 を選択します。

<details>

<summary>app.overlay</summary>

```dts
#include <zephyr/dt-bindings/gpio/gpio.h>

/ {
	chosen {
		zephyr,display = &oled;
	};
};

&i2c1 {
	oled: ssd1306@3c {
		compatible = "solomon,ssd1306";
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

&spi3 {
	cs-gpios = <&gpioa 2 GPIO_ACTIVE_LOW>; /* D2: SD card CS */

	sdhc0: sdhc@0 {
		compatible = "zephyr,sdhc-spi-slot";
		reg = <0>;
		status = "okay";
		spi-max-frequency = <8000000>;

		mmc {
			compatible = "zephyr,sdmmc-disk";
			disk-name = "SD";
			status = "okay";
		};
	};
};

```

</details>
<br/>

2. prj.conf を変更して、SPI 関連の設定を有効にします。

```prj
CONFIG_DISK_ACCESS=y
CONFIG_FILE_SYSTEM=y
CONFIG_FAT_FILESYSTEM_ELM=y
CONFIG_SDHC=y
CONFIG_SDMMC_SUBSYS=y

CONFIG_DISPLAY=y
CONFIG_CHARACTER_FRAMEBUFFER=y

CONFIG_MAIN_STACK_SIZE=4096
CONFIG_HEAP_MEM_POOL_SIZE=4096
CONFIG_PRINTK=y
```

3. main.c プログラムを変更します。

<details>

<summary>main.c</summary>

```c
/*
 * XIAO STM32C5 SD card read/write example.
 *
 * SD card (SPI3, FAT32):
 *   D8  - SCK
 *   D9  - MISO
 *   D10 - MOSI
 *   D2  - CS
 *
 * 0.96-inch SSD1306 OLED (128x64, I2C address 0x3C):
 *   D4 - SDA
 *   D5 - SCL
 *
 * The example waits 500 ms after power-on, reads the SD card capacity,
 * creates /XIAOTEST.TXT, writes "Hello XIAO STM32C5", then reads the file
 * back for verification. Card size, write progress, and the final result
 * are displayed on the OLED and printed through the USB CDC console.
 */

#include <errno.h>
#include <string.h>
#include <zephyr/device.h>
#include <zephyr/display/cfb.h>
#include <zephyr/fs/fs.h>
#include <zephyr/kernel.h>
#include <zephyr/storage/disk_access.h>
#include <zephyr/sys/printk.h>
#include <ff.h>

#define DISK_NAME   "SD"
#define MOUNT_POINT "/SD:"
#define TEST_FILE   MOUNT_POINT "/XIAOTEST.TXT"
#define TEST_TEXT   "Hello XIAO STM32C5"

static const struct device *const oled = DEVICE_DT_GET(DT_CHOSEN(zephyr_display));
static FATFS fat_fs;
static struct fs_mount_t mount = {
	.type = FS_FATFS,
	.fs_data = &fat_fs,
	.mnt_point = MOUNT_POINT,
};

static void oled_show(const char *line1, const char *line2,
		      const char *line3, const char *line4)
{
	cfb_framebuffer_clear(oled, false);
	cfb_print(oled, line1, 0, 0);
	cfb_print(oled, line2, 0, 16);
	cfb_print(oled, line3, 0, 32);
	cfb_print(oled, line4, 0, 48);
	cfb_framebuffer_finalize(oled);
}

int main(void)
{
	uint32_t sector_count;
	uint32_t sector_size;
	uint64_t size_mb;
	char size_line[24];
	char readback[sizeof(TEST_TEXT)] = { 0 };
	struct fs_file_t file;
	int ret;

	/* Allow the USB CDC console time to become available after power-on. */
	k_msleep(500);
	printk("\n=== XIAO STM32C5 SD Card Test ===\n");
	printk("SD: D8=SCK, D9=MISO, D10=MOSI, D2=CS\n");
	printk("OLED: D4=SDA, D5=SCL\n");

	if (!device_is_ready(oled) || cfb_framebuffer_init(oled) != 0) {
		printk("OLED initialization failed\n");
		return -1;
	}

	cfb_framebuffer_set_font(oled, 0);
	display_blanking_off(oled);
	oled_show("SD Card Test", "Initializing...", "", "");

	/* Initialize the SD card and read its physical capacity. */
	ret = disk_access_ioctl(DISK_NAME, DISK_IOCTL_CTRL_INIT, NULL);
	if (ret != 0) {
		oled_show("SD Card Test", "SD init FAILED", "Check card/wires", "");
		printk("SD card initialization failed: %d\n", ret);
		return ret;
	}
	printk("SD card initialized\n");

	ret = disk_access_ioctl(DISK_NAME, DISK_IOCTL_GET_SECTOR_COUNT,
				&sector_count);
	ret |= disk_access_ioctl(DISK_NAME, DISK_IOCTL_GET_SECTOR_SIZE,
				 &sector_size);
	if (ret != 0) {
		oled_show("SD Card Test", "Read size FAILED", "", "");
		printk("Failed to read SD card capacity: %d\n", ret);
		return ret;
	}

	size_mb = ((uint64_t)sector_count * sector_size) / (1024U * 1024U);
	snprintk(size_line, sizeof(size_line), "Size: %llu MB", size_mb);
	oled_show("SD Card Test", size_line, "Mounting FAT32", "");
	printk("SD card size: %llu MB\n", size_mb);
	printk("Mounting FAT32 file system...\n");

	ret = fs_mount(&mount);
	if (ret != 0) {
		oled_show("SD Card Test", size_line, "Mount FAILED", "Use FAT32 card");
		printk("FAT32 mount failed: %d\n", ret);
		return ret;
	}
	printk("FAT32 mounted\n");

	/* Create or replace the test file and write the requested text. */
	oled_show("SD Card Test", size_line, "Writing file...", "");
	printk("Writing %s...\n", TEST_FILE);
	fs_file_t_init(&file);
	ret = fs_open(&file, TEST_FILE, FS_O_CREATE | FS_O_WRITE | FS_O_TRUNC);
	if (ret == 0) {
		ret = fs_write(&file, TEST_TEXT, sizeof(TEST_TEXT) - 1);
		if (ret == sizeof(TEST_TEXT) - 1) {
			ret = fs_sync(&file);
		} else if (ret >= 0) {
			ret = -EIO;
		}
		fs_close(&file);
	}

	/* Read the file back so SUCCESS means the stored data was verified. */
	if (ret == 0) {
		fs_file_t_init(&file);
		ret = fs_open(&file, TEST_FILE, FS_O_READ);
		if (ret == 0) {
			ret = fs_read(&file, readback, sizeof(readback) - 1);
			fs_close(&file);
			if (ret == sizeof(TEST_TEXT) - 1 &&
			    strcmp(readback, TEST_TEXT) == 0) {
				ret = 0;
			} else if (ret >= 0) {
				ret = -EIO;
			}
		}
	}

	fs_unmount(&mount);
	if (ret == 0) {
		oled_show("SD Card Test", size_line, "Write: SUCCESS", "File verified");
		printk("Write successful: %s\n", TEST_TEXT);
		printk("Readback verification successful\n");
	} else {
		oled_show("SD Card Test", size_line, "Write: FAILED", "Check SD card");
		printk("SD card write failed: %d\n", ret);
	}

	return ret;
}

```

</details>
<br/>

### 結果

- 画面には、SD カードのマウント状態、SD カードの容量、ファイルが正常に書き込まれたかどうかなどの情報が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_6.jpg" style={{width:600, height:'auto'}}/></div>

- シリアルモニタを開いて、ファイル書き込み情報を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_6_1.png" style={{width:600, height:'auto'}}/></div>

- SD カードを取り外し、カードリーダーに挿入してコンピュータに接続し、書き込まれたファイルを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_6_2.png" style={{width:600, height:'auto'}}/></div>

## RTC

RTC（Real-Time Clock）は、正確な時刻およびカレンダー情報を継続的に保持するために使用される、低消費電力のハードウェアタイマ周辺回路です。通常、32.768 kHz の水晶発振器などの独立した低周波クロック源で動作し、メインシステムの電源がオフになってもバックアップ電源ドメインによって動作を継続できます。RTC 周辺回路は一般的に、秒、分、時、日付、曜日、月、年に加え、アラーム、周期的ウェイクアップ、タイムスタンプ機能をサポートします。RTC は、データロガー、産業用コントローラ、スマートホーム機器、携帯型計測器など、長期的な時刻保持、スケジュールされたウェイクアップ、イベント記録、低消費電力動作を必要とするアプリケーションで広く使用されています。

Round Display for Seeed Studio XIAO にはオンボード RTC 回路が搭載されています。以下では、XIAO STM32C5 と組み合わせた RTC クロック機能の動作を示します。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>Round Display for Seeed Studio XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-104030087-seeed-studio-round-display-for-xiao-new-font.jpg" style={{width:400, height:'auto'}}/></div></td>
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

### ソフトウェアの準備

1. app.overlay を変更します：Round Display for Seeed Studio XIAO には 240 × 240 の GC9A01 LCD が搭載されています。XIAO STM32C5 では、LCD は D8（SCK）、D10（MOSI）、D1（CS）、D3（DC）を使用します。D8 と D10 は SPI3 にマッピングされているため、SPI3 を有効にし、GC9A01 ディスプレイノードを追加する必要があります。オンボードの PCF8563 RTC は、D4（SDA）と D5（SCL）を使用して I²C 経由で通信しており、これらは I2C1 にマッピングされています。したがって、I2C1 も有効にし、PCF8563 RTC デバイスノードを追加する必要があります。

<details>

<summary>app.overlay</summary>

```dts
#include <freq.h>
#include <zephyr/dt-bindings/display/panel.h>
#include <zephyr/dt-bindings/gpio/gpio.h>

/ {
	chosen {
		zephyr,display = &gc9a01_round_display;
	};

	aliases {
		rtc = &pcf8563_round_display;
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
	clock-frequency = <I2C_BITRATE_FAST>;

	pcf8563_round_display: pcf8563@51 {
		compatible = "nxp,pcf8563";
		reg = <0x51>;
		status = "okay";
	};
};

&spi3 {
	/* D8=PE2 SCK, D9=PB0 MISO, D10=PB15 MOSI. */
	status = "okay";
	cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>;
};
```

</details>
<br/>

2. 設定を有効にするために prj.conf を変更します。

```prj
CONFIG_GPIO=y
CONFIG_SPI=y
CONFIG_I2C=y
CONFIG_RTC=y
CONFIG_RTC_PCF8563=y

CONFIG_DISPLAY=y
CONFIG_MIPI_DBI=y

CONFIG_MAIN_STACK_SIZE=4096
CONFIG_PRINTK=y
```

3. main.c を作成して PCF8563 RTC を読み取り、日付、時刻、曜日をラウンドスクリーンに表示します。

<details>

<summary>main.c</summary>

```c
/*
 * Copyright (c) 2026 Seeed Technology Co., Ltd.
 * SPDX-License-Identifier: Apache-2.0
 *
 * RTC clock demo for XIAO STM32C5 and Round Display for XIAO.
 *
 * Display: GC9A01, 240x240, hardware SPI3
 *          (D8 SCK, D10 MOSI, D1 CS, D3 DC)
 *          D8=PE2, D9=PB0 and D10=PB15.
 * RTC:     PCF8563 on the Round Display (D4 SDA, D5 SCL)
 * BL:      D6
 *
 * Reads the PCF8563 once per second and shows the date, time and weekday.
 * An invalid RTC value is initialized to 2026-06-16 12:00:00.
 */

#include <stdbool.h>
#include <zephyr/device.h>
#include <zephyr/drivers/display.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/drivers/rtc.h>
#include <zephyr/kernel.h>
#include <zephyr/sys/printk.h>

#define LCD_WIDTH  240
#define LCD_HEIGHT 240

#define COLOR_WHITE  0xFFFFU
#define COLOR_GREEN  0x07E0U
#define COLOR_CYAN   0x07FFU
#define COLOR_NAVY   0x0842U
#define COLOR_GRAY   0x8410U

static const struct device *const display =
	DEVICE_DT_GET(DT_CHOSEN(zephyr_display));
static const struct device *const rtc = DEVICE_DT_GET(DT_ALIAS(rtc));
static const struct gpio_dt_spec backlight =
	GPIO_DT_SPEC_GET(DT_NODELABEL(display_backlight), gpios);

/* Full RGB565 frame buffer, kept global to avoid using the thread stack. */
static uint16_t framebuffer[LCD_WIDTH * LCD_HEIGHT];
static const struct display_buffer_descriptor frame_desc = {
	.buf_size = sizeof(framebuffer),
	.width = LCD_WIDTH,
	.height = LCD_HEIGHT,
	.pitch = LCD_WIDTH,
};

static uint16_t rgb565_be(uint16_t color)
{
	return (uint16_t)((color >> 8) | (color << 8));
}

static void set_pixel(int x, int y, uint16_t color)
{
	if (x >= 0 && x < LCD_WIDTH && y >= 0 && y < LCD_HEIGHT) {
		framebuffer[y * LCD_WIDTH + x] = rgb565_be(color);
	}
}

static void fill_rect(int x, int y, int width, int height, uint16_t color)
{
	for (int py = y; py < y + height; py++) {
		for (int px = x; px < x + width; px++) {
			set_pixel(px, py, color);
		}
	}
}

static void draw_circle(int cx, int cy, int radius, uint16_t color)
{
	int x = radius;
	int y = 0;
	int error = 1 - radius;

	while (x >= y) {
		set_pixel(cx + x, cy + y, color);
		set_pixel(cx + y, cy + x, color);
		set_pixel(cx - y, cy + x, color);
		set_pixel(cx - x, cy + y, color);
		set_pixel(cx - x, cy - y, color);
		set_pixel(cx - y, cy - x, color);
		set_pixel(cx + y, cy - x, color);
		set_pixel(cx + x, cy - y, color);
		y++;
		if (error < 0) {
			error += 2 * y + 1;
		} else {
			x--;
			error += 2 * (y - x) + 1;
		}
	}
}

static void draw_filled_circle(int cx, int cy, int radius, uint16_t color)
{
	for (int y = -radius; y <= radius; y++) {
		for (int x = -radius; x <= radius; x++) {
			if (x * x + y * y <= radius * radius) {
				set_pixel(cx + x, cy + y, color);
			}
		}
	}
}

static void draw_digit(int x, int y, int width, int height, int thickness,
		       int digit, uint16_t color)
{
	static const uint8_t segments[10] = {
		0x3F, 0x06, 0x5B, 0x4F, 0x66,
		0x6D, 0x7D, 0x07, 0x7F, 0x6F
	};
	uint8_t mask = segments[digit];
	int half = height / 2;

	if (mask & BIT(0)) {
		fill_rect(x + thickness, y, width - 2 * thickness, thickness, color);
	}
	if (mask & BIT(1)) {
		fill_rect(x + width - thickness, y + thickness,
			  thickness, half - thickness, color);
	}
	if (mask & BIT(2)) {
		fill_rect(x + width - thickness, y + half,
			  thickness, half - thickness, color);
	}
	if (mask & BIT(3)) {
		fill_rect(x + thickness, y + height - thickness,
			  width - 2 * thickness, thickness, color);
	}
	if (mask & BIT(4)) {
		fill_rect(x, y + half, thickness, half - thickness, color);
	}
	if (mask & BIT(5)) {
		fill_rect(x, y + thickness, thickness, half - thickness, color);
	}
	if (mask & BIT(6)) {
		fill_rect(x + thickness, y + half - thickness / 2,
			  width - 2 * thickness, thickness, color);
	}
}

static void draw_colon(int x, int y, int size, uint16_t color)
{
	fill_rect(x, y, size, size, color);
	fill_rect(x, y + 23, size, size, color);
}

static int write_frame(void)
{
	return display_write(display, 0, 0, &frame_desc, framebuffer);
}

static void clear_frame(uint16_t color)
{
	uint16_t value = rgb565_be(color);

	for (int i = 0; i < LCD_WIDTH * LCD_HEIGHT; i++) {
		framebuffer[i] = value;
	}
}

static bool rtc_time_valid(const struct rtc_time *time)
{
	return time->tm_year >= (2024 - 1900) &&
	       time->tm_year <= (2099 - 1900) &&
	       time->tm_mon >= 0 && time->tm_mon <= 11 &&
	       time->tm_mday >= 1 && time->tm_mday <= 31 &&
	       time->tm_hour >= 0 && time->tm_hour <= 23 &&
	       time->tm_min >= 0 && time->tm_min <= 59 &&
	       time->tm_sec >= 0 && time->tm_sec <= 59;
}

static int render_clock(const struct rtc_time *time)
{
	int year = time->tm_year + 1900;
	int month = time->tm_mon + 1;
	int day = time->tm_mday;
	static const uint8_t date_x[] = { 48, 62, 76, 90, 118, 132, 160, 174 };
	static const uint8_t time_x[] = { 24, 54, 96, 126, 168, 198 };
	uint8_t date_digits[] = {
		(year / 1000) % 10, (year / 100) % 10,
		(year / 10) % 10, year % 10,
		month / 10, month % 10, day / 10, day % 10
	};
	uint8_t time_digits[] = {
		time->tm_hour / 10, time->tm_hour % 10,
		time->tm_min / 10, time->tm_min % 10,
		time->tm_sec / 10, time->tm_sec % 10
	};

	clear_frame(COLOR_NAVY);
	draw_circle(120, 120, 116, COLOR_CYAN);
	draw_circle(120, 120, 115, COLOR_CYAN);
	fill_rect(75, 39, 90, 3, COLOR_CYAN);

	for (int i = 0; i < ARRAY_SIZE(date_digits); i++) {
		draw_digit(date_x[i], 54, 12, 24, 3,
			   date_digits[i], COLOR_GREEN);
	}
	fill_rect(106, 65, 8, 3, COLOR_GREEN);
	fill_rect(148, 65, 8, 3, COLOR_GREEN);

	for (int i = 0; i < ARRAY_SIZE(time_digits); i++) {
		draw_digit(time_x[i], 94, 26, 54, 5,
			   time_digits[i], COLOR_WHITE);
	}
	draw_colon(84, 107, 6, COLOR_CYAN);
	draw_colon(156, 107, 6, COLOR_CYAN);

	for (int i = 0; i < 7; i++) {
		uint16_t color = (i == time->tm_wday) ? COLOR_GREEN : COLOR_GRAY;
		draw_filled_circle(75 + i * 15, 188, 4, color);
	}
	fill_rect(88, 207, 64, 3, COLOR_CYAN);

	return write_frame();
}

int main(void)
{
	struct rtc_time now = { 0 };
	int ret;

	if (!gpio_is_ready_dt(&backlight) || !device_is_ready(display) ||
	    !device_is_ready(rtc)) {
		printk("Display, backlight, or RTC device not ready\n");
		return -1;
	}

	ret = gpio_pin_configure_dt(&backlight, GPIO_OUTPUT_ACTIVE);
	if (ret < 0) {
		printk("Cannot enable display backlight: %d\n", ret);
		return ret;
	}

	ret = display_set_pixel_format(display, PIXEL_FORMAT_RGB_565);
	if (ret < 0) {
		printk("Cannot set RGB565 pixel format: %d\n", ret);
		return ret;
	}
	display_blanking_off(display);

	ret = rtc_get_time(rtc, &now);
	if (ret < 0 || !rtc_time_valid(&now)) {
		struct rtc_time initial_time = {
			.tm_year = 2026 - 1900,
			.tm_mon = 5,
			.tm_mday = 16,
			.tm_hour = 12,
			.tm_min = 0,
			.tm_sec = 0,
			.tm_wday = 2,
		};

		ret = rtc_set_time(rtc, &initial_time);
		if (ret < 0) {
			printk("Cannot set RTC time: %d\n", ret);
			return ret;
		}
		printk("RTC initialized to 2026-06-16 12:00:00\n");
	}

	printk("Round Display RTC clock started\n");

	while (1) {
		ret = rtc_get_time(rtc, &now);
		if (ret < 0) {
			printk("Cannot read RTC time: %d\n", ret);
		} else {
			ret = render_clock(&now);
			if (ret < 0) {
				printk("Display write failed: %d\n", ret);
			}
			printk("%04d-%02d-%02d %02d:%02d:%02d\n",
			       now.tm_year + 1900, now.tm_mon + 1, now.tm_mday,
			       now.tm_hour, now.tm_min, now.tm_sec);
		}
		k_msleep(1000);
	}
}
```

</details>
<br/>

### 結果

このサンプルでは、I²C 経由で Round Display 上の PCF8563 RTC から日付と時刻を設定および読み取り、その結果を円形 LCD に表示します。RTC バックアップ電池がない場合、PCF8563 はシステムに電源が供給されている間は時刻を保持しますが、電源が切れた後に時刻が保持されることは保証されません。CR927 コイン電池を装着すると、メイン電源が切断されている間も RTC は動作を継続し、システムが再び起動したときに正しい時刻を保持できます。
RTC に有効な時刻が含まれていない場合、このサンプルはデモ用として 2026-06-16 12:00:00 に初期化します。RTC を現在時刻に設定する操作は別途行ってください。このサンプルは自動で時刻を同期しません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_7.gif" style={{width:400, height:'auto'}}/></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
