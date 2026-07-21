---
title: XIAO nRF54LM20A Sense 内蔵センサーの使用方法
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
updatedAt: '2026-07-08'
url: https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_with_onboard/
---

# XIAO nRF54LM20A Sense 内蔵センサーの使用方法

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
                  今すぐ入手 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

XIAO nRF54LM20A Sense は、マルチシナリオのアプリケーションをサポートする豊富なオンボードセンサーを搭載しています。姿勢認識用の 6 軸センサー LSM6DS3TR-C、PDM デジタル出力と無指向性集音に対応し、インテリジェントボイスシナリオに適したデジタル MEMS マイク MSM261DGT006 を備えています。本記事では、XIAO nRF54LM20A の豊富なオンボード周辺機能に基づく開発および使用方法を紹介します。

:::tip

- 本記事は PlatformIO ビルドシステムと Zephyr RTOS をベースに開発されています。これらの使用経験がない場合は、[Getting Started With SeeedStudio XIAO nRF54LM20A](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_sense_getting_started/) を参照してください。

:::

## ハードウェアの準備

本記事は XIAO nRF54LM20A Sense をベースに開発されており、事前に関連ハードウェアを準備する必要があります。

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
 </tr>
</table>
</div>

## IMU

LSM6DS3TR-C は、3 軸デジタル加速度センサーと 3 軸デジタルジャイロスコープを統合した 6 軸センサーで、STMicroelectronics が提供する iNEMO 慣性計測ユニット（IMU）に属します。XIAO nRF54LM20A Sense では、このセンサーは割り込みトリガによるデータ出力をサポートします。加速度のフルスケールレンジは ±2/±4/±8/±16 g、角速度レンジは ±125/±250/±500/±1000/±2000 dps を備え、持続的な低消費電力モードをサポートしており、さまざまな動作検知シナリオに適しています。オンボードチップは I2C プロトコルを介してこのセンサーと通信し、データを取得します。
:::tip

- LSM6DS3TR-C の詳細については、[Product overview for LSM6DS3TR-C](https://www.st.com/en/mems-and-sensors/lsm6ds3tr-c.html) および [LSM6DS3TR-C Datasheet](https://www.st.com/resource/en/datasheet/lsm6ds3tr-c.pdf) を参照してください。

:::

### 6 軸データの取得

1. デバイスツリーファイル `app.overlay` を編集し、LSM6DS3TR-C が使用するハードウェアピンをデバイスツリーにバインドします。IMU_SDA と IMU_SCL を i2c30 ノードにバインドし、XIAO nRF54LM20A Sense 上の P0.08 および P0.07 に対応させます。割り込みトリガピン IMU_INT1 を P0.06 にバインドします。

:::tip

- XIAO nRF54LM20A のピン配置については、[XIAO nRF54LM20A Sense Pin List](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/#ハードウェア概要) をクリックして詳細を確認してください。

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
                        regulator-boot-on;
                };
        };
};

&lsm6ds3tr_c {
        zephyr,deferred-init;
};


```

2. prj.conf ファイルを編集し、I2C と割り込みトリガの設定を有効にします。

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

3. 取得した 3 軸デジタル加速度データと 3 軸デジタルジャイロスコープデータを USB シリアルポート経由で出力するプログラムを書きます。

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
IMU の性能を直接検証したい場合は、Platform-seeedboards リポジトリをクローンし、examples ディレクトリ内の zephyr-imu サンプルを見つけてコンパイルおよび書き込みを行い、テストを開始してください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

:::

#### 結果

ファームウェアを書き込んだ後、PC 上でシリアルポートアシスタントを開いてデータを確認できます。トリガー周波数は 12.5 Hz、間隔は 80 ミリ秒です。

- 3 軸デジタル加速度センサ：X、Y、Z 各軸方向の加速度を測定します。
- 3 軸デジタルジャイロスコープ：X、Y、Z 各軸周りの角速度を測定します。

:::tip

1. シリアルモニタでデータを確認する際は、ボーレートを 115200 に設定してください。
2. PlatformIO IDE のシリアルモニタ用に、**platformio.ini** 設定ファイル内でボーレートを 115200 に指定してください。

```ini
[env:seeed-xiao-nrf54lm20a]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54lm20a
monitor_speed = 115200
```

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboar_imu_1.png" style={{width:800, height:'auto'}}/></div>

### 応用

IMU は 3 軸加速度データを融合して、姿勢認識のためのピッチ、ヨー、ロールの姿勢角を算出できます。また、対応するコントローラと連携してモーションコントロールを実現したり、姿勢トリガによるウェイクアップなどの低消費電力シナリオに適用することもできます。

#### Electronic Ocean

これは XIAO nRF54LM20A Sense のオンボード IMU をベースにしたサンプルです。姿勢データを収集し、加速度情報を融合して動作状態を RGB ライトパネル上にマッピングし、視覚的な海のリズム効果を実現します。

- **傾きによる水位制御** — 左右のロール傾きで水位の高さを調整
- **波アニメーション** — 3 層の周波数を重ね合わせた波面、2D 波の伝播と端での反射効果
- **流体慣性** — 慣性を持つ水面；急激に傾けるとオーバーシュートし、その後チャプチャプと揺れ戻る
- **反転検出** — ボードを反転させると表示が自動的にミラー反転
- **ダイナミックカラー** — 各列ごとにランダムなグラデーションの海の色調に切り替え

さらに、main.c 内のマクロ定義を通じて、ボードの RGB 配列設定を変更することもできます。

```cpp
#define COLS 10          // Number of matrix columns
#define ROWS  6          // Number of matrix rows
#define BRIGHTNESS 5     // Overall brightness (0-100)
#define WATER_CENTER 3.5f // Water level when placed horizontally
#define WATER_MIN 0.5f   // Minimum water level
#define WATER_MAX 6.5f   // Maximum water level
```

##### 使用手順

1. 対応するプログラム [imu_ocean-main.c](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/imu_ocean_main.c) の内容をコピーし、main.c に貼り付けます。<br/>

2. デバイスツリーファイル `app.overlay` を修正します。

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

3. IMU 使用に関連する設定を有効にします

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

- デバイスを振ると、海の波のビジュアルエフェクトがトリガーされます。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/WHPSAryN-W4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div><br/>

- 同時に、シリアルポートからも対応する IMU データと現在の波の水位高さが出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_imu_2.png" style={{width:800, height:'auto'}}/></div>

#### IMU ウェイクアップ

このルーチンでは、電源投入後に RGB のグリーンチャネルが点灯して消灯し、その後システムは超低消費電力スリープモードに入ります。ボードがタップを検出すると、割り込みによって XIAO nRF54LM20A Sense がウェイクアップします。タップイベントは記録され、シリアルポート経由で出力されます。

IMU ウェイクアップ機能を実装するには、このルーチンをダウンロードしてください。

1. [imu-click-main.c](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/imu_click_main.c) プログラムをダウンロードし、その内容で main.c を置き換えます。

2. デバイスツリーファイル `app.overlay` を修正し、必要なノード設定を追加します。

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

3. prj.conf で関連する IMU 設定を有効にします

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
- 書き込みと電源投入後、RGB-G LED が短時間点滅します。ボード上の任意の場所をタップすると RGB-G LED が点灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_imu_3_1.gif" style={{width:800, height:'auto'}}/></div>

- 同時に、タップイベント情報もシリアルポート経由で出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_imu_3.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip

検知位置はあくまで参考です。正確なタップ位置の認識は、IMU フュージョン制御アルゴリズムに依存します。

:::

## RTC

XIAO nRF54LM20A Sense に採用されているチップには GRTC ハードウェアリソースが内蔵されており、追加の RTC モジュールなしで RTC 機能を実現できます。

RTC はタイムスタンプカウントをサポートしており、電源断後も動作時間を記録できるため、ログ記録や時間追跡が容易になります。

このセクションでは、XIAO nRF54LM20A Sense 上で実装されたサンプルプログラムを紹介します。電源投入後、RTC を介してコンパイル時刻からのタイムスタンプを取得し、1 秒ごとにデータを出力します。System OFF モードに入った後は、RTC アラームによってシステムがウェイクアップし、カウントを継続します。

1. [rtc-main.c](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/rtc-main.c) を main.c ファイルにコピーします。RTC 関数を使用してタイムスタンプを出力します。

2. デバイスツリー `app.overlay` を変更して RTC ノードを有効にします。

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

3. prj.conf ファイルを編集して、関連する RTC 設定を有効にします。

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

### 結果

- プログラムはコンパイルおよび書き込み時刻からカウントを開始します。シリアルポートツールを開いて動作状況を確認すると、期待されるすべての機能が実装されていることが分かります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_rtc_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

## MIC 

XIAO nRF54LM20A Sense には、音声入力用に MSM261DGT006 デジタル MEMS マイクが搭載されています。PDM インターフェースを介して直接接続され、ADC を必要としません。ウェアラブルデバイス、スマートデバイス、音声認識、音声録音など、音響センシング機能を必要とするアプリケーションシナリオに適しています。

:::tip

XIAO nRF54LM20A シリーズの中でマイクを搭載しているのは XIAO nRF54M20A Sense のみであり、開発ボードの左下隅に配置されています。

:::

### 音声録音と BLE アップロード

このセクションでは、音声サンプルを通してマイク機能をデモします。具体的な手順は次のとおりです。

- BOOT ボタンを押すと RGB-G LED が点灯し、録音を開始します。もう一度押すと録音が停止します（最大 10 秒）。
- 録音後、音声ファイルは Bluetooth 経由でホストコンピュータに送信されます。送信中は RGB-G LED が点滅します。
- Windows 上で受信スクリプトを実行し、音声ファイルをデスクトップに保存します。
- 送信完了後、RGB-G LED は消灯します。

1. <a href="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/mic-main.c" download>mic-main.c</a> からプログラムをコピーして `main.c` に貼り付けます。

2. デバイスツリーファイル `app.overlay` を変更して、BLE ノードをバインドします。

```dts

dmic_dev: &pdm20 {
	status = "okay";
};

/* Disable Nordic SoftDevice Controller (not available in mainline Zephyr) */
&bt_hci_sdc {
	status = "disabled";
};

/* Enable Zephyr native BLE controller (LL SW Split) */
&bt_hci_controller {
	status = "okay";
};

&pwm20 {
	status = "disabled";
};

&pmic_i2c {
	sda-gpios = <&gpio1 18 GPIO_ACTIVE_HIGH>;
	scl-gpios = <&gpio1 17 GPIO_ACTIVE_HIGH>;
	status = "okay";
};

&pmic {
	regulators {
		dmic_vdd: LDO1 {
			regulator-min-microvolt = <3300000>;
			regulator-max-microvolt = <3300000>;
			regulator-boot-on;
		};
	};
};

&uart20 {
	current-speed = <921600>;
};

/ {
	chosen {
		zephyr,bt-hci = &bt_hci_controller;
	};

	leds {
		compatible = "gpio-leds";
		led2: led_2 {
			gpios = <&gpio1 24 GPIO_ACTIVE_LOW>;
		};
	};
};

/* External 8MB SPI NOR Flash for audio storage */
&py25q64 {
	status = "okay";
};
```

2. `prj.conf` ファイルを変更して、Bluetooth とマイク用の設定を有効にし、Bluetooth デバイス名を **XIAO MIC** に設定します。

```prj
# Audio / DMIC
CONFIG_AUDIO=y
CONFIG_AUDIO_DMIC=y

# GPIO
CONFIG_GPIO=y

# I2C / PMIC
CONFIG_I2C=y
CONFIG_MFD=y
CONFIG_REGULATOR=y

# Logging
CONFIG_LOG=y

# UART for console logging
CONFIG_SERIAL=y
CONFIG_UART_ASYNC_API=y
CONFIG_UART_20_ASYNC=y
CONFIG_UART_21_ASYNC=y
CONFIG_UART_NRFX_UARTE_ENHANCED_RX=y

# BLE
CONFIG_BT=y
CONFIG_BT_PERIPHERAL=y
CONFIG_BT_DEVICE_NAME="XIAO-MIC"
CONFIG_BT_DEVICE_APPEARANCE=833
CONFIG_BT_MAX_CONN=1
CONFIG_BT_MAX_PAIRED=1

# BLE log level: ERR only.  Fixed 30 ms application pacing prevents
# buffer exhaustion; this just silences WRN/INF noise from the stack.
CONFIG_BT_LOG_LEVEL_ERR=y

# Disable auto-procedures to avoid LL Procedure Collision (reason 35)
# on nRF54L with Zephyr native BLE controller
CONFIG_BT_AUTO_PHY_UPDATE=n
CONFIG_BT_GAP_AUTO_UPDATE_CONN_PARAMS=n
CONFIG_BT_CTLR_CONN_PARAM_REQ=n

# Disable data length auto-update (can also cause LL races)
CONFIG_BT_DATA_LEN_UPDATE=n

# BLE buffer tuning for high-throughput NUS notifications
# nRF54LM20A has 1.5MB RAM, generous buffer allocation
CONFIG_BT_BUF_ACL_TX_SIZE=251
CONFIG_BT_BUF_ACL_TX_COUNT=32
CONFIG_BT_BUF_EVT_RX_COUNT=33
CONFIG_BT_BUF_ACL_RX_SIZE=251
CONFIG_BT_L2CAP_TX_MTU=247
CONFIG_BT_L2CAP_TX_BUF_COUNT=24
CONFIG_BT_L2CAP_TX_FRAG_COUNT=12
CONFIG_BT_ATT_TX_COUNT=24
CONFIG_BT_CONN_TX_MAX=32

# Note: BT_CTLR_DATA_LENGTH is selected indirectly (e.g. by BT_DATA_LEN_UPDATE).
# It cannot be set directly, so BT_CTLR_DATA_LENGTH_MAX is also omitted.

# BLE NUS
CONFIG_BT_ZEPHYR_NUS=y
CONFIG_BT_ZEPHYR_NUS_DEFAULT_INSTANCE=y

# Memory
CONFIG_HEAP_MEM_POOL_SIZE=16384

# System workqueue stack (increased for BLE work items)
CONFIG_SYSTEM_WORKQUEUE_STACK_SIZE=4096

# External SPI NOR Flash (8MB PY25Q64HA)
CONFIG_SPI=y
CONFIG_SPI_NOR=y
CONFIG_FLASH=y
CONFIG_FLASH_PAGE_LAYOUT=y

# Assert level
CONFIG_ASSERT=y
CONFIG_BT_CTLR_ASSERT_OPTIMIZE_FOR_SIZE=n

```

### 結果

プログラムをコンパイルして書き込み、Windows コンピュータ上でスクリプトを使用して Bluetooth 経由で録音データを受信します。

1. Python スクリプトを実行します

実行前に必要な依存ライブラリをインストールします。

```bash
pip install bleak 
```

<br/>

Python スクリプトファイルをコピーします。

<details>

<summary>ble_recorder_receiver.py</summary>

```py
"""
BLE Audio Receiver for XIAO nRF54LM20A BLE Audio Recorder

Connects to "XIAO-MIC" via BLE, subscribes to Nordic UART Service (NUS)
notifications, receives WAV audio data, and saves it to a file.

Requirements: pip install bleak

Usage: python ble_recorder_receiver.py
"""

import asyncio
import sys
import os
from datetime import datetime

from bleak import BleakScanner, BleakClient, BleakError

# Nordic UART Service (NUS) UUIDs
NUS_SERVICE_UUID = "6E400001-B5A3-F393-E0A9-E50E24DCCA9E"
NUS_TX_CHAR_UUID = "6E400003-B5A3-F393-E0A9-E50E24DCCA9E"  # Notify (device -> host)

DEVICE_NAME = "XIAO-MIC"
OUTPUT_DIR = "./recordings"


def make_output_path():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    return os.path.join(OUTPUT_DIR, f"recording_{timestamp}.wav")


async def main():
    output_path = make_output_path()
    total_bytes = 0
    transfer_complete = asyncio.Event()
    connected = False

    def notification_handler(sender, data):
        nonlocal total_bytes
        with open(output_path, "ab") as f:
            f.write(data)
        total_bytes += len(data)
        sys.stdout.write(f"\rReceived: {total_bytes} bytes")
        sys.stdout.flush()

    def disconnected_callback(client):
        nonlocal connected
        connected = False
        print("\nDevice disconnected")
        transfer_complete.set()

    client = None
    try:
        # Step 1: scan with active scanning (find_device_by_name does active scan)
        print(f"Scanning for '{DEVICE_NAME}'...")
        device = await BleakScanner.find_device_by_name(
            DEVICE_NAME, timeout=10.0,
        )

        if device is None:
            print(f"Device '{DEVICE_NAME}' not found. Check:")
            print("  1. XIAO is powered on")
            print("  2. PC Bluetooth is enabled")
            sys.exit(1)

        print(f"Found: {device.name} ({device.address})")

        # Step 2: connect with service UUID filtering
        # By specifying the NUS service UUID, we help Windows discover only what we need
        print("Connecting (this may take up to 30s on Windows)...")

        client = BleakClient(
            device.address,
            disconnected_callback=disconnected_callback,
            timeout=30.0,
            services=[NUS_SERVICE_UUID],
        )
        await client.connect()
        connected = True
        print("Connected")

        # Step 3: subscribe to notifications
        await client.start_notify(NUS_TX_CHAR_UUID, notification_handler)
        print("Subscribed to NUS TX notifications")
        print(f"Saving to: {output_path}")
        print()
        print("Waiting for audio data... Press Ctrl+C to stop.")
        print("On the XIAO: press BOOT button once to start recording,")
        print("press again (or wait 10s) to stop and transfer.\n")

        try:
            await asyncio.wait_for(
                transfer_complete.wait(),
                timeout=600.0,
            )
        except asyncio.TimeoutError:
            print("\nTimeout: no activity for 10 minutes")
        except KeyboardInterrupt:
            print("\nStopped by user")

    except (BleakError, asyncio.TimeoutError) as e:
        print(f"\nBLE error: {e}")
        print()
        print("Windows BLE workarounds:")
        print("  1. Windows Settings > Bluetooth & devices > Devices")
        print("     Remove 'XIAO-MIC' if listed")
        print("  2. Toggle Bluetooth OFF then ON")
        print("  3. Reset XIAO board (replug USB)")
        print("  4. Reboot PC if all else fails")
        sys.exit(1)
    finally:
        if client and connected:
            try:
                await client.stop_notify(NUS_TX_CHAR_UUID)
                await client.disconnect()
            except Exception:
                pass

    file_size = os.path.getsize(output_path) if os.path.exists(output_path) else 0
    print(f"\n{'='*50}")
    print(f"Saved: {output_path}")
    print(f"File size: {file_size} bytes")
    if file_size > 44:
        print("Valid WAV file, ready to play")
    elif file_size > 0:
        print("File may be incomplete (header only)")
    else:
        print("No data received")
    print(f"{'='*50}")


if __name__ == "__main__":
    asyncio.run(main())
```

</details>
<br/>

スクリプト実行コマンド：

```bash
python ble_recorder_receiver.py
```

:::tip
BLE UUID はすでに Python プログラム内で設定されているため、スクリプトを実行すると自動的に接続されます。
:::

2. 結果を確認する

- BOOT キーを押して録音を開始します。緑色の RGB LED が点灯している場合は、録音中であることを示します。マイクに向かって大きな声で話し、再度 BOOT キーを押して録音を停止します。緑色の RGB LED が点滅している場合は、オーディオファイルが送信中であることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_mic_1.gif" style={{width:800, height:'auto'}}/></div>
<br/>

- シリアルポートを開くとログが出力されます。ボーレートを 921600 に設定してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_mic_2.png" style={{width:800, height:'auto'}}/></div>
<br/>

- 受信したオーディオファイルとそのバイトサイズが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_mic_3.png" style={{width:800, height:'auto'}}/></div>
<br/>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
