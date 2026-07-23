---
title: Seeed Studio XIAO nRF54LM20A Sense のピン多重化
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - pin_multiplexing
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/XIAO_nRD54LM20A_pin_1.webp
slug: /xiao_nrf54lm20a_pin_multiplexing
sku: 100018440
last_update:
  date: 05/13/2026
  author: Zeller
createdAt: '2025-05-15'
updatedAt: '2026-07-06'
url: https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_pin_multiplexing/
---

# Seeed Studio XIAO nRF54LM20A Sense のピン多重化

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/XIAO_nRD54LM20A_pin_1.png" style={{width:600, height:'auto'}}/></div>

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
                  今すぐ入手 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>


XIAO nRF54LM20A は豊富なピンリソースを備え、Digital、Analog、SPI、IIC などの各種標準ペリフェラルインターフェースによる開発をネイティブにサポートしています。本記事では、実際のアプリケーション事例を通して、関連する実装方法を紹介します。

:::tip

このチュートリアルは PlatformIO ビルドシステムと Zephyr RTOS をベースに作成されています。
PlatformIO 上で XIAO nRF54LM20A 用のプロジェクト作成に慣れていない場合は、[Getting Sarted With Seeed Studio XIAO nRF54LM20A Sense](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/) にジャンプしてください。

:::

## Digital

Digital ピンは主に、高レベルと低レベルのロジックを出力することで、外部センサやアクチュエータのオン・オフ制御を実現します。Grove Base for XIAO 拡張ボードと標準 Grove ペリフェラルモジュールを組み合わせて、本セクションでは XIAO nRF54LM20A 上の Digital ピンの低レベルドライバロジックと実際の呼び出し方法について詳しく説明します。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Piezo Buzzer</th>
        <th>Grove - Button</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-08bazaar897330_2.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/p/e/perspectiive.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Buzzer.html" target="_blank">
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

### ソフトウェアの準備

XIAO nRF54LM20A のピン配置に従い、P1.0 を Grove-Button の制御ピンとして、P1.31 を Grove-Pizero Buzzer の制御ピンとして選択できます。

:::tip

- XIAO nRF54LM20A のピン配置については、[XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

:::

main.c 用のプログラムを書き込みます

```cpp
/*
 * Grove Button (P1.0) + Grove Buzzer (P1.31) - Digital mode
 * Button pressed → Buzzer ON; Button released → Buzzer OFF
 *
 * NOTE: Requires an ACTIVE buzzer (built-in oscillator).
 *       A passive piezo buzzer needs PWM — use plan B instead.
 */

#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/sys/printk.h>

#define BUTTON_PIN 0  /* P1.0 - Grove Button - D0 */
#define BUZZER_PIN 31 /* P1.31 - Grove Buzzer - D1 */

int main(void)
{
	const struct device *gpio1_dev = DEVICE_DT_GET(DT_NODELABEL(gpio1));

	printk("=== Grove Button + Buzzer (Digital Mode) ===\n");

	if (!device_is_ready(gpio1_dev))
	{
		printk("ERROR: gpio1 device is not ready!\n");
		return -1;
	}
	printk("gpio1 device ready: %s\n", gpio1_dev->name);

	/* Grove Button has onboard pull-down; HIGH = pressed */
	gpio_pin_configure(gpio1_dev, BUTTON_PIN, GPIO_INPUT);

	/* Buzzer: HIGH = on */
	gpio_pin_configure(gpio1_dev, BUZZER_PIN, GPIO_OUTPUT_INACTIVE);

	printk("Button:  P1.%d (input)\n", BUTTON_PIN);
	printk("Buzzer:  P1.%d (output)\n", BUZZER_PIN);
	printk("Press the button to turn on the buzzer...\n");

	int last_val = 0;

	while (1)
	{
		int val = gpio_pin_get(gpio1_dev, BUTTON_PIN);
		if (val >= 0)
		{
			gpio_pin_set(gpio1_dev, BUZZER_PIN, val);

			/* Only print on state change to avoid log spam */
			if (val != last_val)
			{
				printk("Button %s → Buzzer %s\n",
				       val ? "PRESSED " : "released",
				       val ? "ON" : "OFF");
				last_val = val;
			}
		}
		k_msleep(10);
	}

	return 0;
}
```

### 結果

ファームウェアを書き込んだ後、ボタンを押すとブザーがビープ音を鳴らし、シリアルポートにステータスが出力されます。

:::tip

ボーレートを 115200 に設定することに注意してください。VS で直接 Monitor を開く場合は、`.ini` ファイルでボーレートを設定することを推奨します。

:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_1.png" style={{width:800, height:'auto'}}/></div>

## PWM

PWM は、Digital 出力 GPIO をベースに実装されたタイミング波形出力機能です。一定の周波数でピンレベルを高速に切り替え、1 サイクル内の高レベルのデューティ比を動的に調整することで、ペリフェラルに等価なアナログ信号を出力します。実際のエンジニアリングアプリケーションでは、PWM はサーボモータの精密な角度制御や LED の滑らかな明るさ調整などに広く利用されています。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Servo</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedimg2016-06rjmxymiq9lqxkkxxwg6udxfm.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
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

### ソフトウェアの準備

XIAO nRF54LM20A のピン配置に従い、**P1.0** を **Grove-Servo** の制御ピンとして選択できます。

:::tip

- XIAO nRF54LM20A のピン配置については、[XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

:::

1. デバイスツリーファイル `app.overlay` を修正します。PWM 出力機能については、ハードウェアインスタンスを `pwm20`、`pwm21`、または `pwm22` ノードに明示的にバインドする必要があります。システムのデフォルト UART コンソール出力は `uart20` ノードに接続されています。

<details>
<summary>app.overlay</summary>

```dts
/*
 * UART20 (console) + PWM20 (servo) configuration for XIAO nRF54LM20A.
 *
 * Note: spi23 and uart20 share the same peripheral instance (0xc6000),
 * so only one can be active at a time. SD card via spi23 is removed here.
 */

/ {
	chosen {
		zephyr,console    = &uart20;
		nordic,rpc-uart   = &uart20;
		zephyr,shell-uart = &uart20;
	};
};

/* ── UART20 (console, TX: P1.11 / RX: P1.10) ── */
&uart20 {
	current-speed = <115200>;
	status = "okay";
};

&uart20_default {
	group1 {
		psels = <NRF_PSEL(UART_TX, 1, 11)>;
	};
	group2 {
		psels = <NRF_PSEL(UART_RX, 1, 10)>;
		bias-pull-up;
	};
};

&uart20_sleep {
	group1 {
		psels = <NRF_PSEL(UART_TX, 1, 11)>,
			<NRF_PSEL(UART_RX, 1, 10)>;
		low-power-enable;
	};
};

/* ── PWM20 (servo, P1.0) ── */
&pwm20 {
	status = "okay";
	pinctrl-0 = <&servo_pwm20_default>;
	pinctrl-1 = <&servo_pwm20_sleep>;
	pinctrl-names = "default", "sleep";
};

&pinctrl {
	servo_pwm20_default: servo_pwm20_default {
		group1 {
			psels = <NRF_PSEL(PWM_OUT0, 1, 0)>; /* P1.0 */
		};
	};
	servo_pwm20_sleep: servo_pwm20_sleep {
		group1 {
			psels = <NRF_PSEL(PWM_OUT0, 1, 0)>;
			low-power-enable;
		};
	};
};
```
</details>

2. `prj.conf` ファイルを変更して、関連する PWM 設定を有効にします。

```prj
CONFIG_PWM=y
CONFIG_SERIAL=y
CONFIG_PRINTK=y
CONFIG_UART_CONSOLE=y
```

3. main.c プログラムを作成し、PWM サーボ制御機能を実装して、PWM 周期などのパラメータを設定します。

```cpp
/*
 * Servo control on P1.0 via PWM (50 Hz).
 * Sweeps 0→180° at ~100°/s, then returns 180→0° at ~33°/s.
 * Current angle is printed to serial console.
 */

#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/pwm.h>
#include <zephyr/sys/printk.h>

/* Standard servo: 50 Hz period, 0.5–2.5 ms pulse for 0–180° */
#define SERVO_PERIOD_NS PWM_MSEC(20)
#define SERVO_MIN_NS PWM_USEC(500)
#define SERVO_MAX_NS PWM_USEC(2500)

#define SERVO_CHANNEL 0

/* 10 ms/step → ~100°/s forward; 30 ms/step → ~33°/s return */
#define STEP_FWD_MS 30
#define STEP_RET_MS 30

static const struct device *pwm_dev = DEVICE_DT_GET(DT_NODELABEL(pwm20));

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

    if (!device_is_ready(pwm_dev))
    {
        printk("Error: PWM device not ready\n");
        return -1;
    }

    printk("Servo control started on P1.0\n");

    while (1)
    {
        /* 0° → 180° (faster) */
        for (int a = 0; a <= 180; a++)
        {
            if (set_angle(a) != 0)
            {
                printk("PWM error at %d deg\n", a);
            }
            else
            {
                printk("Angle: %d deg\n", a);
            }
            k_msleep(STEP_FWD_MS);
        }

        /* 180° → 0° (slower) */
        for (int a = 180; a >= 0; a--)
        {
            if (set_angle(a) != 0)
            {
                printk("PWM error at %d deg\n", a);
            }
            else
            {
                printk("Angle: %d deg\n", a);
            }
            k_msleep(STEP_RET_MS);
        }
    }

    return 0;
}
```

### 結果

ファームウェアの書き込み後、サーボは 0° から 180° まで毎秒 33 ラジアンの速度で回転し、その後 0° に戻ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_1.gif" style={{width:800, height:'auto'}}/></div>

同時に、現在のサーボ角度が USB シリアルポート経由で出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_2.png" style={{width:800, height:'auto'}}/></div>

## アナログ

アナログ I/O はアナログ-デジタルコンバータ（ADC）に基づいており、主に外部センサから出力される連続的なアナログ電圧信号を取得するために使用されます。生のデジタルサンプリング値（Raw Data）を取得した後、特定の線形または非線形変換アルゴリズムを使用して、実際の工学的な測定値にマッピングできます。この機能は、バッテリ電圧サンプリングや、土壌水分、周囲温度などの物理量のリアルタイム監視といったシナリオで広く使用されています。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Capacitive Soil Moisture Sensor</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/_/2_1_1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
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

XIAO nRF54LM20A のピン配置に従って、P1.00 を PWM 出力ピンとして設定します。

:::tip

- XIAO nRF54LM20A のピン配置については、[XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

:::

1. デバイスツリーファイルを変更します。ピン P1.00 は ADC チャネル 0 に対応しており、デバイスツリーノードにバインドする必要があります。

```dts
/*
 * UART20 (console) + ADC channel 0 (P1.0 / AIN0) for XIAO nRF54LM20A.
 */

/ {
	chosen {
		zephyr,console    = &uart20;
		nordic,rpc-uart   = &uart20;
		zephyr,shell-uart = &uart20;
	};

	zephyr,user {
		io-channels = <&adc 0>;
	};
};


/* ── UART20 (console, TX: P1.11 / RX: P1.10) ── */
&uart20 {
	current-speed = <115200>;
	status = "okay";
};

&uart20_default {
	group1 {
		psels = <NRF_PSEL(UART_TX, 1, 11)>;
	};
	group2 {
		psels = <NRF_PSEL(UART_RX, 1, 10)>;
		bias-pull-up;
	};
};

&uart20_sleep {
	group1 {
		psels = <NRF_PSEL(UART_TX, 1, 11)>,
			<NRF_PSEL(UART_RX, 1, 10)>;
		low-power-enable;
	};
};
```

2. `prj.conf` ファイルを変更して、ADC 関連の設定を有効にします。

```prj
CONFIG_ADC=y
CONFIG_ADC_NRFX_SAADC=y
CONFIG_SERIAL=y
CONFIG_PRINTK=y
CONFIG_UART_CONSOLE=y
```

3. main.c プログラムを作成し、P1.00 ピンをアナログ入力ピンとして使用し、読み取った値を 500ms ごとに USB シリアルポート経由で出力します。

```cpp
/*
 * Read ADC on P1.0 (AIN0, channel 0) and print raw value every 500 ms.
 */

#include <zephyr/kernel.h>
#include <zephyr/drivers/adc.h>
#include <zephyr/sys/printk.h>

static const struct adc_dt_spec adc_ch =
    ADC_DT_SPEC_GET(DT_PATH(zephyr_user));

int main(void)
{
    int ret;

    if (!adc_is_ready_dt(&adc_ch))
    {
        printk("ADC not ready\n");
        return -1;
    }

    ret = adc_channel_setup_dt(&adc_ch);
    if (ret < 0)
    {
        printk("ADC channel setup failed: %d\n", ret);
        return ret;
    }

    int16_t buf;
    struct adc_sequence seq = {
        .buffer = &buf,
        .buffer_size = sizeof(buf),
    };
    adc_sequence_init_dt(&adc_ch, &seq);

    while (1)
    {
        ret = adc_read_dt(&adc_ch, &seq);
        if (ret < 0)
        {
            printk("ADC read error: %d\n", ret);
        }
        else
        {
            printk("ADC raw: %d\n", buf);
        }
        k_msleep(500);
    }

    return 0;
}
```

### 結果

プログラムを書き込んだ後、Grove-Capacitive Soil Moisture Sensor を家庭用の鉢植えに挿します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_3.jpg" style={{width:800, height:'auto'}}/></div>
<br/>
PC 上でシリアルポートアシスタントを開き、出力値を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_4.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip

電圧リファレンス読み取り表
| 状態     | センサ出力電圧 | 期待される ADC Raw 値|
| -------------- | -------------- | ---------------- |
| 空気中（乾燥） | ~2.0–2.4V      | ~3400–4095       |
| 湿った土壌中       | ~1.3–1.8V      | ~2200–3000       |
| 完全に水に浸した場合   | ~0.8–1.2V      | ~1365–2048       |

:::

:::caution

部品の個体差により、同じ環境でもモジュールごとの測定値が異なる場合があります。

:::

## UART

Universal Asynchronous Receiver/Transmitter（UART）は、標準的な非同期シリアル通信プロトコルです。同期のために外部クロック信号を必要とせず、通信双方が事前に設定したボーレートに依存して、非同期のデータ送受信を実現します。物理配線の観点では、デバイスの TX と RX ピンをクロス接続し、グラウンド同士を接続するだけで、フルデュプレックスのデータリンクを構成できます。ハードウェアコストが最小で、送受信の同時実行をサポートするという特長から、UART は組み込みシステムにおいて、コンソールログ出力、モジュール型周辺機器のデバッグ、低帯域幅のポイントツーポイントデータ通信などに広く採用されています。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>USB to TTL Converter</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-317990026-ch340g-usb-to-serial-_ttl_-module_adapter.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
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

XIAO nRF54LM20A のピン配置によると、P1.08 と P1.09 をそれぞれシリアル通信の TX ピンおよび RX ピンとして選択できます。

:::tip

- XIAO nRF54LM20A のピン配置については、[XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

:::

1. デバイスツリーファイルを修正し、ピン P1.08 を UART TX、P1.09 を UART RX として `uart21` ノードにマッピングし、シリアルポートのボーレートを 115200 に設定します。

```dtsi
/*
 * UART21 Demo - Device Tree Overlay for XIAO nRF54LM20A
 * UART21: TX=P1.8, RX=P1.9
 *
 * Note: The pinctrl configuration is already defined in the board file.
 * This overlay enables UART21 and sets it as disabled for the default console
 * so it can be used as a general-purpose serial port.
 */

/* UART21 is already configured in the board dts, just make sure it's enabled */
&uart20 {
	current-speed = <115200>;
	status = "okay";
};

/* UART21 is already configured in the board dts, just make sure it's enabled */
&uart21 {
	current-speed = <115200>;
	status = "okay";
};
```

2. `prj.conf` 設定ファイルを修正して、関連する UART 設定を有効にします。

```prj
# Serial and UART
CONFIG_SERIAL=y
# This demo uses uart_poll_in()/uart_poll_out().
# On nrfx UARTE, enabling async mode for the instance makes uart_poll_in()
# return -ENOTSUP, which breaks RX on uart21.

# Console (for logging via UART20)
CONFIG_CONSOLE=y
CONFIG_UART_CONSOLE=y

# Logging
CONFIG_LOG=y
CONFIG_LOG_BACKEND_UART=y
CONFIG_LOG_DEFAULT_LEVEL=3
```

3. メイン関数を作成します。オンボードの BOOT ボタンが押されると、シリアルポートの状態とピン設定がシリアルポート経由でコンピュータに出力されます。押されていない場合は、デフォルトで動作状態が出力されます。

<details>

<summary>main.c</summary>

```c
/*
 * UART21 Demo for XIAO nRF54LM20A (Polling Mode)
 *
 * This demo shows how to use UART21 for serial communication using polling mode.
 * - TX: P1.08
 * - RX: P1.09
 * - Baud rate: 115200
 *
 * The demo will:
 * 1. Send a welcome message on startup
 * 2. Echo back any received characters
 * 3. Periodically send a heartbeat message
 */

#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/uart.h>
#include <zephyr/logging/log.h>
#include <stdio.h>
#include <string.h>

LOG_MODULE_REGISTER(uart21_demo, LOG_LEVEL_INF);

/* UART21 device */
static const struct device *uart21_dev = DEVICE_DT_GET(DT_NODELABEL(uart21));

#define RX_BUF_SIZE 128
#define TX_BUF_SIZE 256
#define HEARTBEAT_INTERVAL_MS 5000

static uint8_t rx_buf[RX_BUF_SIZE];
static size_t rx_buf_pos = 0;
static char tx_buf[TX_BUF_SIZE];

/* Send a string over UART21 using polling */
static void uart21_send_string(const char *str)
{
	while (*str)
	{
		uart_poll_out(uart21_dev, *str++);
	}
}

/* Receive a character from UART21 (non-blocking) */
static int uart21_recv_char(uint8_t *c)
{
	return uart_poll_in(uart21_dev, c);
}

static void handle_complete_line(void)
{
	rx_buf[rx_buf_pos] = '\0';

	if (rx_buf_pos > 0)
	{
		LOG_INF("Received: %s", rx_buf);
		uart21_send_string("\r\nYou sent: ");
		uart21_send_string((const char *)rx_buf);
	}

	uart21_send_string("\r\n");
	rx_buf_pos = 0;
	memset(rx_buf, 0, sizeof(rx_buf));
}

/* Process a received byte and maintain a simple line buffer */
static void process_rx_byte(uint8_t c)
{
	static bool last_was_cr;

	if (c == '\r' || c == '\n')
	{
		if (c == '\n' && last_was_cr)
		{
			last_was_cr = false;
			return;
		}

		uart21_send_string("\r\n");
		handle_complete_line();
		last_was_cr = (c == '\r');
		return;
	}

	last_was_cr = false;
	uart_poll_out(uart21_dev, c);

	if (rx_buf_pos < RX_BUF_SIZE - 1)
	{
		rx_buf[rx_buf_pos++] = c;
		return;
	}

	uart21_send_string("\r\n[Warning] Input too long, buffer cleared.\r\n");
	rx_buf_pos = 0;
	memset(rx_buf, 0, sizeof(rx_buf));
}

int main(void)
{
	uint8_t c;
	uint32_t heartbeat_count = 0;
	int64_t last_heartbeat = 0;

	LOG_INF("========================================");
	LOG_INF("  UART21 Demo for XIAO nRF54LM20A");
	LOG_INF("========================================");
	LOG_INF("");

	/* Check if UART21 device is ready */
	if (!device_is_ready(uart21_dev))
	{
		LOG_ERR("UART21 device not ready!");
		return -1;
	}
	LOG_INF("UART21 device ready: %s", uart21_dev->name);

	/* Send welcome message */
	uart21_send_string("\r\n");
	uart21_send_string("========================================\r\n");
	uart21_send_string("  UART21 Demo for XIAO nRF54LM20A\r\n");
	uart21_send_string("========================================\r\n");
	uart21_send_string("\r\n");
	uart21_send_string("Pin Configuration:\r\n");
	uart21_send_string("  TX: P1.08\r\n");
	uart21_send_string("  RX: P1.09\r\n");
	uart21_send_string("  Baud Rate: 115200\r\n");
	uart21_send_string("\r\n");
	uart21_send_string("Type something and press Enter to see it echoed.\r\n");
	uart21_send_string("\r\n");

	LOG_INF("UART21 demo started. Waiting for data...");
	LOG_INF("Connect UART terminal to P1.8(TX) and P1.9(RX)");

	last_heartbeat = k_uptime_get();

	/* Main loop */
	while (1)
	{
		/* Check for received data */
		if (uart21_recv_char(&c) == 0)
		{
			process_rx_byte(c);
		}

		/* Check for heartbeat */
		int64_t now = k_uptime_get();
		if (now - last_heartbeat >= HEARTBEAT_INTERVAL_MS)
		{
			last_heartbeat = now;
			heartbeat_count++;

			snprintf(tx_buf, sizeof(tx_buf),
					 "\r\n[Heartbeat #%u] UART21 running...\r\n",
					 heartbeat_count);
			uart21_send_string(tx_buf);

			LOG_INF("Heartbeat #%u sent", heartbeat_count);
		}

		/* Small delay to prevent busy loop */
		k_msleep(10);
	}

	return 0;
}

```

</details>

### 結果

1. 表の順番に従って配線します

| XIAO nRF54LM20A | CH340 |
| --------------- | ----- |
| VBUS            | 5V    |
| GND             | GND   |
| P1.08 - TX      | RX    |
| P1.09 - RX      | TX    |

2. パソコンでシリアルポート監視ソフトウェアを開きます。オンボードの BOOT ボタンが押されると、設定されたシリアルポート情報がシリアルポート経由で出力されます。デフォルトでは、文字列 `[Heartbeat # number] UART21 running...` が出力されます。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_uart_1.png" style={{width:800, height:'auto'}}/></div>

## I2C

I2C は同期式の半二重データ通信プロトコルです。SCL クロックラインと SDA データラインによるアドレッシングを通じて複数デバイスの接続を可能にし、IMU や温湿度センサなど、比較的高い伝送速度を必要とするセンサからデータを読み取る場合や、OLED ディスプレイ出力などによく使用されます。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Expansion Board Base for XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/z/h/zheng2.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
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

XIAO nRF54LM20A のピン配置によると、P1.03 と P1.07 を I2C ピンとして設定できます。

:::tip

- XIAO nRF54LM20A のピン配置については、[XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

:::

1. デバイスツリーを修正し、XIAO nRF54LM20A 上の P1.03 と P1.07 をそれぞれ `i2c22` デバイスツリーノードのピンとして設定し、その後ディスプレイ用のデバイスツリーノードを追加します。OLED ディスプレイは 128×64 の解像度を備え、一般的な SSD1306 ドライバチップを採用しています。

```dts
/ {
        chosen {
                zephyr,display = &ssd1306_128x64;
        };
};

&i2c22 {
        status = "okay";
        zephyr,concat-buf-size = <2048>;
        ssd1306_128x64: ssd1306@3c {
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

2. `prj.conf` ファイルを修正して、I2C およびディスプレイ関連の設定を有効にします。

```
CONFIG_STDOUT_CONSOLE=y
CONFIG_HEAP_MEM_POOL_SIZE=16384
CONFIG_I2C=y
CONFIG_DISPLAY=y
CONFIG_SSD1306=y
CONFIG_LOG=y
CONFIG_LOG_DEFAULT_LEVEL=4
CONFIG_CHARACTER_FRAMEBUFFER=y

```

3. 文字列の表示位置と機能を設定するためのメイン関数を書きます。

<details>

<summary>main.c</summary>

```c
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/display/cfb.h>
#include <stdio.h>
#include <string.h>

#define LOG_LEVEL CONFIG_LOG_DEFAULT_LEVEL
#include <zephyr/logging/log.h>
LOG_MODULE_REGISTER(main_app, LOG_LEVEL);

#define CFB_MAX_FONT_INDEX  42

/* Display content */
#define LINE1_TEXT  "Hello XIAO"
#define LINE2_TEXT  "nRF54LM20A"
#define TOTAL_LINES 2

static int display_init(const struct device **dev) {
    *dev = DEVICE_DT_GET(DT_CHOSEN(zephyr_display));
    if (!device_is_ready(*dev)) {
        LOG_ERR("Device %s not ready", (*dev)->name);
        return -1;
    }

    if (display_set_pixel_format(*dev, PIXEL_FORMAT_MONO10) != 0) {
        if (display_set_pixel_format(*dev, PIXEL_FORMAT_MONO01) != 0) {
            LOG_ERR("Failed to set required pixel format");
            return -1;
        }
    }

    LOG_INF("Initialized %s", (*dev)->name);
    return 0;
}

static int framebuffer_setup(const struct device *dev) {
    if (cfb_framebuffer_init(dev)) {
        LOG_ERR("Framebuffer initialization failed!");
        return -1;
    }
    cfb_framebuffer_clear(dev, false);
    display_blanking_off(dev);
    return 0;
}

static int select_font(const struct device *dev, uint8_t *font_width, uint8_t *font_height) {
    int chosen_font_idx = -1;
    uint8_t current_font_width, current_font_height;

    for (int idx = 0; idx < CFB_MAX_FONT_INDEX; idx++) {
        if (cfb_get_font_size(dev, idx, &current_font_width, &current_font_height) != 0) {
            continue;
        }
        if (current_font_width == 0 || current_font_height == 0) {
            continue;
        }
        if (current_font_width == 8 && current_font_height == 8) {
            chosen_font_idx = idx;
            *font_width  = current_font_width;
            *font_height = current_font_height;
            cfb_framebuffer_set_font(dev, chosen_font_idx);
            LOG_INF("Selected 8x8 font idx: %d", chosen_font_idx);
            break;
        }
        if (chosen_font_idx == -1) {
            chosen_font_idx = idx;
            *font_width  = current_font_width;
            *font_height = current_font_height;
            cfb_framebuffer_set_font(dev, chosen_font_idx);
            LOG_INF("Fallback font idx: %d, size: %dx%d",
                    chosen_font_idx, *font_width, *font_height);
        }
    }

    if (chosen_font_idx == -1) {
        LOG_ERR("No suitable font found!");
        return -1;
    }
    return 0;
}

/**
 * @brief Print a line of text centered on the display
 * @param dev         Display device
 * @param text        String to be printed
 * @param line_index  Index of current line (0-indexed)
 * @param total_lines Total number of lines (for vertical centering calculation)
 * @param font_width  Font width in pixels
 * @param font_height Font height in pixels
 * @param x_res       Horizontal resolution of the display
 * @param y_res       Vertical resolution of the display
 */
static void print_text_centered(const struct device *dev,
                                const char *text,
                                int line_index,
                                int total_lines,
                                uint8_t font_width,
                                uint8_t font_height,
                                uint16_t x_res,
                                uint16_t y_res)
{
    int text_len = (int)strlen(text);

    /* Horizontal center: (screen width - total text pixel width) / 2 */
    int pixel_x = (x_res - text_len * font_width) / 2;

    /* Vertical center: calculate total block height first, then offset current line */
    int block_height = total_lines * font_height;
    int pixel_y = (y_res - block_height) / 2 + line_index * font_height;

    /* Prevent coordinate out-of-bounds */
    if (pixel_x < 0) pixel_x = 0;
    if (pixel_y < 0) pixel_y = 0;

    if (cfb_print(dev, text, pixel_x, pixel_y)) {
        LOG_ERR("Failed to print \"%s\" at (%d, %d)", text, pixel_x, pixel_y);
    }

    LOG_DBG("Print \"%s\" at pixel (%d, %d)", text, pixel_x, pixel_y);
}

int main(void) {
    const struct device *dev;
    uint8_t font_width  = 0;
    uint8_t font_height = 0;

    if (display_init(&dev)                          != 0) return 0;
    if (framebuffer_setup(dev)                      != 0) return 0;
    if (select_font(dev, &font_width, &font_height) != 0) return 0;

    uint16_t x_res = cfb_get_display_parameter(dev, CFB_DISPLAY_WIDTH);
    uint16_t y_res = cfb_get_display_parameter(dev, CFB_DISPLAY_HEIGHT);
    LOG_INF("Display resolution: %dx%d", x_res, y_res);
    cfb_set_kerning(dev, 0);

    while (1) {
        cfb_framebuffer_clear(dev, false);

        print_text_centered(dev, LINE1_TEXT, 0, TOTAL_LINES,
                            font_width, font_height, x_res, y_res);
        print_text_centered(dev, LINE2_TEXT, 1, TOTAL_LINES,
                            font_width, font_height, x_res, y_res);

        cfb_framebuffer_finalize(dev);
        k_sleep(K_MSEC(1000));
    }

    return 0;
}
```

</details>

### 結果

プログラムの実行後、テキスト **Hello XIAO nRF54LM20A** が画面に表示され、スレッドデータが USB シリアルポートを通して出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_5.jpg" style={{width:800, height:'auto'}}/></div>

## SPI

SPI は、高速で同期式かつ全二重の通信プロトコルです。非同期通信とは異なり、SPI は専用の SCLK クロックラインに依存して正確なデータ同期を行います。一般的に、MOSI、MISO、およびチップセレクト CS/SS ピンから構成される古典的な 4 線式ハードウェアトポロジが採用されます。独立した送受信チャネルと高いバスクロック周波数を備えているため、SPI は優れたデータスループットを実現します。Flash や SD カードなどの大容量ストレージデバイス、高解像度かつ高リフレッシュレートのディスプレイ、高周波サンプリングセンサなど、高い帯域幅が要求される周辺機器駆動のシナリオで広く使用されています。

### ハードウェアの準備

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Round Display for Seeed Studio XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-104030087-seeed-studio-round-display-for-xiao-new-font.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
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

:::tip

- XIAO nRF54LM20A のピン配置については、[XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

:::

1. デバイスツリーファイルを修正します。LCD 画面を駆動するために、デバイスツリーで spi23 ノードを有効にし、ピンマッピングを設定します。P1.04、P1.05、P1.06 をそれぞれ SPI SCK、MISO、MOSI として設定します。同時に、P1.31 と P1.29 を画面の CS（チップセレクト）および DC（データ/コマンド）制御ピンとして設定します。

<details>

<summary>app.overlay</summary>

```dts
#include <dt-bindings/pinctrl/nrf-pinctrl.h>
#include <zephyr/dt-bindings/gpio/gpio.h>
#include <zephyr/dt-bindings/display/panel.h>

/*
 * GC9X01X 240x240 round LCD configuration for XIAO nRF54LM20A
 * SPI23:  SCK=P1.04  MOSI=P1.06  MISO=P1.05
 * CS:     P1.31  (SPI bus software CS)
 * DC:     P1.29  (Data/Command select, on MIPI DBI node)
 *
 * In Zephyr 4.x the GC9X01X driver uses the MIPI DBI interface.
 * The display node must be a child of a zephyr,mipi-dbi-spi node,
 * which references the SPI controller via spi-dev phandle.
 */

/ {
    chosen {
        zephyr,console    = &uart20;
        nordic,rpc-uart   = &uart20;
        zephyr,shell-uart = &uart20;
        zephyr,display    = &gc9x01x;
    };

    mipi_dbi {
        compatible = "zephyr,mipi-dbi-spi";
        spi-dev = <&spi23>;
        dc-gpios = <&gpio1 29 GPIO_ACTIVE_HIGH>;
        write-only;
        #address-cells = <1>;
        #size-cells = <0>;

        gc9x01x: gc9x01x@0 {
            compatible = "galaxycore,gc9x01x";
            reg = <0>;
            mipi-max-frequency = <40000000>;
            pixel-format = <PANEL_PIXEL_FORMAT_RGB_565>;
            display-inversion;
            width  = <240>;
            height = <240>;
            status = "okay";
        };
    };
};

&spi23 {
    compatible = "nordic,nrf-spim";
    pinctrl-names = "default", "sleep";
    pinctrl-0 = <&spi23_default>;
    pinctrl-1 = <&spi23_sleep>;
    status = "okay";

    /* CS P1.31 — index 0 used by the MIPI DBI driver */
    cs-gpios = <&gpio1 31 GPIO_ACTIVE_LOW>;
};

&uart20 {
    status = "okay";
};

&pinctrl {
    spi23_default: spi23_default {
        group1 {
            psels = <NRF_PSEL(SPIM_SCK,  1, 4)>,
                    <NRF_PSEL(SPIM_MOSI, 1, 6)>;
        };
        group2 {
            psels = <NRF_PSEL(SPIM_MISO, 1, 5)>;
            bias-pull-up;
        };
    };

    spi23_sleep: spi23_sleep {
        group1 {
            psels = <NRF_PSEL(SPIM_SCK,  1, 4)>,
                    <NRF_PSEL(SPIM_MOSI, 1, 6)>,
                    <NRF_PSEL(SPIM_MISO, 1, 5)>;
            low-power-enable;
        };
    };
};

&uart20_default {
    /delete-node/ group1;
    /delete-node/ group2;

    group1 {
        psels = <NRF_PSEL(UART_TX, 1, 11)>;
    };
    group2 {
        psels = <NRF_PSEL(UART_RX, 1, 10)>;
        bias-pull-up;
    };
};

&uart20_sleep {
    /delete-node/ group1;

    group1 {
        psels = <NRF_PSEL(UART_TX, 1, 11)>,
                <NRF_PSEL(UART_RX, 1, 10)>;
        low-power-enable;
    };
};
```

</details>
<br/>

2. SPI 関連の設定を有効にするために prj.conf を変更します。

```prj
CONFIG_LOG=y
CONFIG_LOG_DEFAULT_LEVEL=3
CONFIG_CONSOLE=y
CONFIG_UART_CONSOLE=y
CONFIG_GPIO=y
CONFIG_SPI=y
CONFIG_DISPLAY=y
CONFIG_CHARACTER_FRAMEBUFFER=y
CONFIG_CHARACTER_FRAMEBUFFER_USE_DEFAULT_FONTS=y
CONFIG_HEAP_MEM_POOL_SIZE=32768
CONFIG_MAIN_STACK_SIZE=4096
```

3. main.c プログラムを変更し、単色で画面を塗りつぶすロジックを書き込みます。

<details>

<summary>main.c</summary>

```c
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/display/cfb.h>
#include <zephyr/drivers/display.h>
#include <string.h>
#include <stdlib.h>

#define LOG_LEVEL CONFIG_LOG_DEFAULT_LEVEL
#include <zephyr/logging/log.h>
LOG_MODULE_REGISTER(gc9a01_demo, LOG_LEVEL);

/* GC9A01 Resolution */
#define LCD_W  240
#define LCD_H  240

/* RGB565 Color Definitions */
#define COLOR_BLACK   0x0000U
#define COLOR_WHITE   0xFFFFU
#define COLOR_RED     0xF800U
#define COLOR_GREEN   0x07E0U
#define COLOR_BLUE    0x001FU
#define COLOR_YELLOW  0xFFE0U
#define COLOR_CYAN    0x07FFU
#define COLOR_MAGENTA 0xF81FU
#define COLOR_ORANGE  0xFD20U

/* -------------------------------------------------------
 * Low-level: Fill entire screen using display_write
 * buf: RGB565 pixel buffer, length = w * h * 2 bytes
 * ------------------------------------------------------- */
static uint16_t fb[LCD_W * LCD_H];   /* ~115 KB, declared globally to avoid stack overflow */

static void fill_screen(const struct device *dev, uint16_t color)
{
    /* RGB565 Big-endian (Default for GC9A01) */
    uint16_t be = (color >> 8) | (color << 8);
    for (int i = 0; i < LCD_W * LCD_H; i++) {
        fb[i] = be;
    }

    struct display_buffer_descriptor desc = {
        .buf_size = sizeof(fb),
        .width    = LCD_W,
        .height   = LCD_H,
        .pitch    = LCD_W,
    };
    display_write(dev, 0, 0, &desc, fb);
}

/* -------------------------------------------------------
 * Scene 1: Solid color full-screen fill, cycle colors
 * ------------------------------------------------------- */
static void demo_solid_colors(const struct device *dev)
{
    static const uint16_t colors[] = {
        COLOR_RED, COLOR_GREEN, COLOR_BLUE,
        COLOR_YELLOW, COLOR_CYAN, COLOR_MAGENTA,
    };
    static const char *names[] = {
        "RED", "GREEN", "BLUE", "YELLOW", "CYAN", "MAGENTA",
    };

    for (int i = 0; i < ARRAY_SIZE(colors); i++) {
        LOG_INF("Solid: %s", names[i]);
        fill_screen(dev, colors[i]);
        k_sleep(K_MSEC(600));
    }
}

/* -------------------------------------------------------
 * Scene 2: Color vertical bars (6 bars, 40px width each)
 * ------------------------------------------------------- */
static void demo_color_bars(const struct device *dev)
{
    static const uint16_t bar_colors[] = {
        COLOR_RED, COLOR_ORANGE, COLOR_YELLOW,
        COLOR_GREEN, COLOR_BLUE, COLOR_MAGENTA,
    };
    static const int BAR_W = LCD_W / ARRAY_SIZE(bar_colors);  /* = 40 */

    for (int y = 0; y < LCD_H; y++) {
        for (int x = 0; x < LCD_W; x++) {
            uint16_t c = bar_colors[x / BAR_W];
            uint16_t be = (c >> 8) | (c << 8);
            fb[y * LCD_W + x] = be;
        }
    }

    struct display_buffer_descriptor desc = {
        .buf_size = sizeof(fb),
        .width    = LCD_W,
        .height   = LCD_H,
        .pitch    = LCD_W,
    };
    display_write(dev, 0, 0, &desc, fb);
    LOG_INF("Color bars");
    k_sleep(K_MSEC(2000));
}

/* -------------------------------------------------------
 * Main Application
 * ------------------------------------------------------- */
int main(void)
{
    LOG_INF("GC9A01 demo — XIAO nRF54LM20A");

    const struct device *dev = DEVICE_DT_GET(DT_CHOSEN(zephyr_display));
    if (!device_is_ready(dev)) {
        LOG_ERR("Display device not ready");
        return 0;
    }

    /* Set pixel format: GC9A01 uses RGB565 */
    if (display_set_pixel_format(dev, PIXEL_FORMAT_RGB_565) != 0) {
        LOG_ERR("Failed to set pixel format");
        return 0;
    }

    display_blanking_off(dev);
    LOG_INF("Display ready, starting demo loop");

    while (1) {
        demo_solid_colors(dev);   /* 6-color cycle ~3.6s */
        demo_color_bars(dev);     /* Color vertical bars ~2s */
    }

    return 0;
}
```

</details>
<br/>

### 結果

電源投入後、プログラムは赤、オレンジ、黄、緑、シアン、青、紫の順に画面を更新し、最後にカラフルなストライプ模様を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_spi_1.gif" style={{width:600, height:'auto'}}/></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
