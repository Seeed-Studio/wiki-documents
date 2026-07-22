---
title: Seeed Studio XIAO nRF54L15 Sense によるピン多重化
description: ''
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg
slug: /xiao_nrf54l15_sense_pin_multiplexing
sidebar_position: 2
keywords:
  - XIAO
  - nRF54L15
last_update:
  date: 7/2/2025
  author: Jason
createdAt: '2025-07-28'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_pin_multiplexing/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

使いやすさのために、以下のピン多重化の例はすべて **PlatformIO** 上で行います。[XIAO nRF54L5](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_with_platform_io/) の設定および使用方法ガイドについては、このリンクをクリックしてください。

:::tip
VS Code をベースとして、nRF Connect SDK 上で以下のケースを使用したい場合は、提示された接続を参照し、`app.overlay` ファイルを追加して `prj.conf` 内の内容を変更してください。

[XIAO nRF54L15 で overlay ファイルを追加し conf ファイルを変更する](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_getting_started/#/add-overlay-and-modify-the-conf-file/)。

:::

## オンボードキー

XIAO nRF54L15(Sense) には、デバイスの動作およびファームウェア書き込みにおいて重要な役割を果たす 2 つの物理ボタン、**Reset ボタン** と **User ボタン** が搭載されています。これらの機能を理解することは、日常的な使用やファームウェア更新のために不可欠です。

---

## ハードウェア概要

<Tabs>
<TabItem  value="XIAO nRF54L15" label="XIAO nRF54L15" default>

### XIAO nRF54L15 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO nRF54L15 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15_back_pinout.png" style={{width:1000, height:'auto'}}/></div>


</TabItem>
<TabItem value="XIAO nRF54L15 Sense" label="XIAO nRF54L15 Sense" default>

### XIAO nRF54L15 Sense 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15_Sense_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO nRF54L15 Sense 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15_Sense_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>


### Reset ボタン

Reset ボタンは、デバイスに対してハードリセット操作を行うために使用されます。

- **機能：**
  - **強制再起動：** このボタンを押すと、現在のすべてのデバイス動作が即座に中断され、電源の入れ直しと同様に再起動が行われます。
  - **フリーズしたプログラムの解消：** デバイス上で動作しているプログラムがクラッシュしたり、無限ループに入ったり、応答しなくなった場合、Reset ボタンを押すことが、通常動作状態に強制的に戻す最も手早い方法です。
  - **ファームウェアへの影響なし：** リセット操作によって、すでにデバイスに書き込まれているファームウェアが消去されたり変更されたりすることはありません。現在実行中のアプリケーションを単に再起動するだけです。

---

### User ボタン

User ボタンは、多用途でプログラム可能な入力であり、アプリケーション内で柔軟な制御を提供します。

**機能：**

- カスタマイズ可能な入力：Reset ボタンの固定機能とは異なり、User ボタンの動作は、あなたが作成したファームウェアによって完全に定義されます。

- イベントトリガ：特定のイベントをトリガしたり、さまざまな機能を制御したり、アプリケーション用の汎用入力として動作させるようにプログラムできます。

## デジタル

### ハードウェア準備

<table align="center">
  <tr>
      <th>Seeed Studio XIAO nRF54L15 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Relay</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

### ソフトウェア実装

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-gpio" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

```c
#include <zephyr/kernel.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/logging/log.h>


LOG_MODULE_REGISTER(main_app, CONFIG_LOG_DEFAULT_LEVEL);

static const struct gpio_dt_spec button = GPIO_DT_SPEC_GET(DT_ALIAS(sw1), gpios); // Get the button device from the device tree alias
static const struct gpio_dt_spec relay = GPIO_DT_SPEC_GET(DT_ALIAS(relay0), gpios); // Get the relay device from the device tree alias

int main(void)
{
    int ret;

    LOG_INF("Starting Zephyr button and relay example...");

    /* Check if GPIO devices are ready */
    if (!gpio_is_ready_dt(&button)) {
        LOG_ERR("Button device %s is not ready", button.port->name); 
        return -1;
    }

    if (!gpio_is_ready_dt(&relay)) {
        LOG_ERR("Relay device %s is not ready", relay.port->name);
        return -1;
    }

    /* Configure button pin as input mode */
    ret = gpio_pin_configure_dt(&button, GPIO_INPUT);
    if (ret != 0) {
        LOG_ERR("Failed to configure %s pin %d (error %d)", button.port->name, button.pin, ret);
        return -1;
    }

    /* Configure relay pin as output mode */
    ret = gpio_pin_configure_dt(&relay, GPIO_OUTPUT_ACTIVE);
    if (ret != 0) {
        LOG_ERR("Failed to configure %s pin %d (error %d)", relay.port->name, relay.pin, ret);
        return -1;
    }

    LOG_INF("Press the button to toggle the relay...");

    while (1) {
        /* Read button state */
        int button_state = gpio_pin_get_dt(&button);

        /* Check if read is successful */
        if (button_state < 0) {
            LOG_ERR("Error reading button pin: %d", button_state);
            return -1;
        }

        if (button_state == 0) { // Button pressed (ACTIVE_LOW)
            gpio_pin_set_dt(&relay, 1); // Turn on relay (high level)
        } else { // Button not pressed
            gpio_pin_set_dt(&relay, 0); // Turn off relay (low level)
        }

        k_msleep(10); /* Short delay to avoid busy looping */
    }
    return 0;
}
```

**デバイスツリー設定**

`static const struct gpio_dt_spec button = GPIO_DT_SPEC_GET(DT_ALIAS(sw1), gpios);`

- このコード行は、Zephyr のデバイスツリーシステムを利用して、`sw1` というエイリアス名を通じてボタンの GPIO デバイス情報を取得します。この方法により、コードは特定のハードウェアピンから切り離され、移植性が向上します。

`static const struct gpio_dt_spec relay = GPIO_DT_SPEC_GET(DT_ALIAS(relay0), gpios);`

- 同様に、このコード行は `relay0` という名前のリレー GPIO デバイスに関する情報を取得します。

**デバイス準備状態の確認**

`if (!gpio_is_ready_dt(&button))` および `if (!gpio_is_ready_dt(&relay))`

- プログラムが何らかの操作を開始する前に、コードはボタンとリレーのデバイスが正常に初期化され、使用可能な状態かどうかを確認します。これは Zephyr ドライバプログラミングにおけるベストプラクティスであり、デバイスが正しく設定されていない場合にプログラムがクラッシュするのを防ぎます。

**ピン設定**

`gpio_pin_configure_dt(&button, GPIO_INPUT);`

- このコード行は、ボタンの GPIO ピンを入力モードに設定します。これはピンのレベルを読み取るために必要なステップであり、プログラムはピンの電圧レベルを監視してボタンが押されているかどうかを判断します。

`gpio_pin_configure_dt(&relay, GPIO_OUTPUT_ACTIVE);`

- このコード行は、リレーの GPIO ピンを出力モードに設定します。`GPIO_OUTPUT_ACTIVE` フラグは通常、リレーを制御する準備として、設定後にピンがアクティブになることを示します。

**メインループロジック**

`while (1):` コードは無限ループに入り、以下の動作を継続的に実行します。

`int button_state = gpio_pin_get_dt(&button);:` 各ループで、プログラムはボタンピンの現在のレベル状態を読み取ります。

`if (button_state == 0):` このロジックはボタンが押されているかどうかを確認します。多くの回路設計では、ボタンが押されるとピンがグラウンド（GND）に接続され、その結果レベルが0（つまり Low）になります。

`gpio_pin_set_dt(&relay, 1);:` ボタン状態が0（押されている）の場合、リレーピンが1（High）に設定され、リレーが閉じて接続されているデバイス（例：ランプ）の電源がオンになります。

`else:` ボタンが押されていない（状態が1）場合、`perform gpio_pin_set_dt(&relay, 0);` を実行してリレーピンを0（Low）に設定し、リレーを閉じて接続されているデバイスの電源をオフにします。

`k_msleep(10);:` このコードは、CPU がビジー状態になることなどを避けるために、各ループの最後に10ミリ秒の短いディレイを追加します。これは簡単なチャタリング防止処理です。ボタンの物理的なチャタリングによる複数回のトリガーを防ぐとともに、消費電力も削減します。

### 結果グラフ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light2.gif" style={{width:700, height:'auto'}}/></div>

## アナログ

### ハードウェアの準備

<table align="center">
 <tr>
     <th>Seeed Studio XIAO nRF54L15 Sense</th>
         <th>Grove-Variable Color LED</th>
     <th>Grove-Rotary Angle Sensor </th>
     <th>Seeed Studio Grove Base for XIAO </th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
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

### ソフトウェア実装

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-pwm" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

``` cpp
#include <zephyr/kernel.h>
#include <zephyr/drivers/adc.h>
#include <zephyr/drivers/pwm.h>
#include <zephyr/logging/log.h>

// Register log module
LOG_MODULE_REGISTER(pot_pwm_example, CONFIG_LOG_DEFAULT_LEVEL);

// --- ADC Configuration ---
#if !DT_NODE_EXISTS(DT_PATH(zephyr_user)) || \
    !DT_NODE_HAS_PROP(DT_PATH(zephyr_user), io_channels)
#error "No suitable devicetree overlay specified for ADC channels"
#endif

#define DT_SPEC_AND_COMMA(node_id, prop, idx) \
    ADC_DT_SPEC_GET_BY_IDX(node_id, idx),

static const struct adc_dt_spec adc_channels[] = {
    DT_FOREACH_PROP_ELEM(DT_PATH(zephyr_user), io_channels, DT_SPEC_AND_COMMA)
};

// Define the index of the potentiometer ADC channel in the adc_channels array
#define POTENTIOMETER_ADC_CHANNEL_IDX 1

// --- PWM Configuration ---
// Get PWM LED device
static const struct pwm_dt_spec led = PWM_DT_SPEC_GET(DT_ALIAS(pwm_led));

// Define PWM period as 1 millisecond (1,000,000 nanoseconds)
// This corresponds to a 1 kHz PWM frequency, suitable for LED brightness adjustment without visible flicker
#define PWM_PERIOD_NS 1000000UL

int main(void)
{
    int ret;
    uint16_t adc_raw_value;
    int32_t adc_millivolts;

    LOG_INF("Starting Zephyr Potentiometer to PWM example...");

    // --- ADC initialization and setup ---
    if (!adc_is_ready_dt(&adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX])) {
        LOG_ERR("ADC controller device %s not ready", adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX].dev->name);
        return 0;
    }

    ret = adc_channel_setup_dt(&adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX]);
    if (ret < 0) {
        LOG_ERR("Could not setup ADC channel for potentiometer (%d)", ret);
        return 0;
    }
    LOG_INF("ADC device %s, channel %d ready for potentiometer.",
            adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX].dev->name,
            adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX].channel_id);

    // --- PWM initialization and setup ---
    if (!device_is_ready(led.dev)) {
        LOG_ERR("Error: PWM device %s is not ready", led.dev->name);
        return 0;
    }
    LOG_INF("PWM Period for LED set to %lu ns (%.1f Hz)",
            PWM_PERIOD_NS, (double)NSEC_PER_SEC / PWM_PERIOD_NS); // Use PWM_PERIOD_NS instead of led.period


    // ADC sequence configuration
    struct adc_sequence sequence = {
        .buffer = &adc_raw_value,
        .buffer_size = sizeof(adc_raw_value),
        .resolution = adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX].resolution,
    };

    // --- Main loop ---
    while (1) {
        (void)adc_sequence_init_dt(&adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX], &sequence);

        ret = adc_read(adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX].dev, &sequence);
        if (ret < 0) {
            LOG_ERR("Error %d: ADC read failed for channel %d",
                    ret, adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX].channel_id);
            k_msleep(100);
            continue;
        }

        int sensor_value = adc_raw_value;

        uint32_t max_adc_raw = (1U << adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX].resolution) - 1;

        // --- Map ADC raw value to PWM duty cycle ---
        uint32_t output_duty_ns = (PWM_PERIOD_NS * sensor_value) / max_adc_raw;

        // Set PWM duty cycle
        ret = pwm_set_dt(&led, PWM_PERIOD_NS, output_duty_ns);
        if (ret < 0) {
            LOG_ERR("Error %d: failed to set PWM duty cycle.", ret);
        }

        // --- Print information ---
        adc_millivolts = sensor_value;
        ret = adc_raw_to_millivolts_dt(&adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX], &adc_millivolts);
        if (ret < 0) {
            LOG_WRN("ADC to mV conversion not supported/failed: %d", ret);
            LOG_INF("Sensor Raw Value = %d\tOutput Duty (ns) = %u", sensor_value, output_duty_ns);
        } else {
            LOG_INF("Sensor Raw Value = %d (%d mV)\tOutput Duty (ns) = %u",
                    sensor_value, adc_millivolts, output_duty_ns);
        }

        k_msleep(100);
    }
    return 0;
}
```

**ADC（アナログ-デジタルコンバータ）および PWM（パルス幅変調）デバイス設定**

- pot_pwm_example ログモジュール：

  - LOG_MODULE_REGISTER(pot_pwm_example, CONFIG_LOG_DEFAULT_LEVEL): これは pot_pwm_example という名前のログモジュールを登録し、そのログレベルをシステムのデフォルト設定にします。これによりデバッグが容易になります。

- ADC 設定：

  - #if !DT_NODE_EXISTS(DT_PATH(zephyr_user)) ... #endif: このプリプロセッサディレクティブは、ADC チャンネル定義を含む有効なオーバーレイファイルが存在することを保証する Device Tree チェックです。これにより、ユーザーは特定のハードウェアに対して正しい設定を提供することが必須となります。

  - static const struct adc_dt_spec adc_channels[];: このコード部分は Zephyr の Device Tree を利用して、設定されたすべての ADC チャンネルの情報を自動的に取得します。このアプローチにより、コードは異なるハードウェア間で手動の設定変更なしに柔軟かつ移植性の高いものになります。

  - #define POTENTIOMETER_ADC_CHANNEL_IDX 1: adc_channels 配列のどのチャンネルにポテンショメータが接続されているかを指定するマクロを定義します。

- PWM 設定：

  - static const struct pwm_dt_spec led = PWM_DT_SPEC_GET(DT_ALIAS(pwm_led));: この行は Device Tree からエイリアス pwm_led に対する PWM デバイス情報を取得します。これはハードウェアデバイスを検索・参照するための、Zephyr における標準的な方法です。

  - #define PWM_PERIOD_NS 1000000UL: これはPWM信号の周期を1ミリ秒（1,000,000ナノ秒）として定義しており、1kHzの周波数に相当します。この周波数は、LEDの調光に適しており、ちらつきが目に見えない程度に十分高くなっています。

**初期化とセットアップ**

- ログ情報:

  - LOG_INF("Starting Zephyr Potentiometer to PWM example...");: プログラムの開始時に情報ログメッセージを出力し、このサンプルが開始されたことをユーザーに通知します。

- ADC の初期化:

  - !adc_is_ready_dt(): ADCデバイスを使用しようとする前に、そのデバイスが使用可能かどうかを確認します。デバイスが準備できていない場合はエラーが記録され、プログラムは終了します。

  - adc_channel_setup_dt(): この関数は、ポテンショメータに接続された特定のADCチャネルを設定し、その分解能やゲインなどを構成します。

- PWM の初期化:

  - !device_is_ready(led.dev): ADCと同様に、この行ではPWMデバイスが準備できているかどうかを確認します。準備できていない場合はエラーが記録され、プログラムは終了します。

  - LOG_INF(...): PWMの周期と周波数の情報を出力し、ユーザーが設定内容を確認できるようにします。

- ADC シーケンスの設定:

  - struct adc_sequence sequence: 単一のADC変換処理を記述するために adc_sequence 構造体を定義します。結果を格納するバッファ（adc_raw_value）、そのサイズ（sizeof(adc_raw_value)）、および使用するADC分解能を指定します。

**メインループ**
コードの中核となるロジックは、無限の while (1) ループ内で実行されます:

- ADC 読み取り:

  - adc_sequence_init_dt(): 各読み取りで正しい設定が使用されるように、ADCシーケンスを初期化します。

  - adc_read(): ポテンショメータからアナログ値を読み取るためにADC変換をトリガーします。読み取りに失敗した場合はエラーが記録され、プログラムは100ミリ秒一時停止してから処理を続行します。

  - int sensor_value = adc_raw_value;: 生のADC値を sensor_value 変数に代入します。

- ADC 値を PWM デューティ比にマッピング:

  - uint32_t max_adc_raw: 取り得る生のADC値の最大値を計算します。

  - uint32_t output_duty_ns = (PWM_PERIOD_NS * sensor_value) / max_adc_raw;: これがマッピング処理の中核です。生のADC値（sensor_value）をPWM周期（PWM_PERIOD_NS）の範囲に比例してスケーリングし、LEDの明るさを調整するためのデューティ比の値を算出します。

- PWM デューティ比の設定:

  - pwm_set_dt(): この関数は、新たに計算されたデューティ比（output_duty_ns）をPWMデバイスに適用し、LEDの明るさを即座に変更します。

- 遅延:

  - k_msleep(100): 各ループの後にプログラムを100ミリ秒一時停止します。これによりADC読み取りとPWM更新の頻度を制御し、CPU負荷の過剰な増加を防ぐとともに、安定したユーザー体験を提供します。

### 結果グラフ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/adc.gif" style={{width:700, height:'auto'}}/></div>

## UART

### ハードウェアの準備

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
   <th>L76K GNSS Module for Seeed Studio XIAO</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/GNSS.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### ソフトウェア実装

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-gps" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

<details>

<summary>Software</summary>

```c
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/uart.h>
#include <zephyr/logging/log.h>
#include <nrfx_power.h>
#include <string.h>
#include <math.h>
#include <stdio.h>
#include <stdlib.h>

// Register log module
LOG_MODULE_REGISTER(gps_app, LOG_LEVEL_INF);

// Type definitions
#define UBYTE uint8_t
#define UWORD uint16_t
#define UDOUBLE uint32_t

// Buffer sizes
#define SENTENCE_SIZE 100
#define BUFFSIZE 800

// NMEA Commands
#define HOT_START "$PMTK101"
#define WARM_START "$PMTK102"
#define COLD_START "$PMTK103"
#define FULL_COLD_START "$PMTK104"
#define SET_PERPETUAL_STANDBY_MODE "$PMTK161"
#define SET_PERIODIC_MODE "$PMTK225"
#define SET_NORMAL_MODE "$PMTK225,0"
#define SET_PERIODIC_BACKUP_MODE "$PMTK225,1,1000,2000"
#define SET_PERIODIC_STANDBY_MODE "$PMTK225,2,1000,2000"
#define SET_PERPETUAL_BACKUP_MODE "$PMTK225,4"
#define SET_ALWAYSLOCATE_STANDBY_MODE "$PMTK225,8"
#define SET_ALWAYSLOCATE_BACKUP_MODE "$PMTK225,9"
#define SET_POS_FIX "$PMTK220"
#define SET_POS_FIX_100MS "$PMTK220,100"
#define SET_POS_FIX_200MS "$PMTK220,200"
#define SET_POS_FIX_400MS "$PMTK220,400"
#define SET_POS_FIX_800MS "$PMTK220,800"
#define SET_POS_FIX_1S "$PMTK220,1000"
#define SET_POS_FIX_2S "$PMTK220,2000"
#define SET_POS_FIX_4S "$PMTK220,4000"
#define SET_POS_FIX_8S "$PMTK220,8000"
#define SET_POS_FIX_10S "$PMTK220,10000"
#define SET_SYNC_PPS_NMEA_OFF "$PMTK255,0"
#define SET_SYNC_PPS_NMEA_ON "$PMTK255,1"
#define SET_NMEA_BAUDRATE "$PMTK251"
#define SET_NMEA_BAUDRATE_115200 "$PMTK251,115200"
#define SET_NMEA_BAUDRATE_57600 "$PMTK251,57600"
#define SET_NMEA_BAUDRATE_38400 "$PMTK251,38400"
#define SET_NMEA_BAUDRATE_19200 "$PMTK251,19200"
#define SET_NMEA_BAUDRATE_14400 "$PMTK251,14400"
#define SET_NMEA_BAUDRATE_9600 "$PMTK251,9600"
#define SET_NMEA_BAUDRATE_4800 "$PMTK251,4800"
#define SET_REDUCTION "$PMTK314,-1"
#define SET_NMEA_OUTPUT "$PMTK314,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0"

// Struct definitions
typedef struct
{
 double Lon;    // GPS Longitude
 double Lat;    // GPS Latitude
 char Lon_area; // E or W
 char Lat_area; // N or S
 UBYTE Time_H;  // Time Hour
 UBYTE Time_M;  // Time Minute
 UBYTE Time_S;  // Time Second
 UBYTE Status;  // 1: Successful positioning, 0: Positioning failed
} GNRMC;

typedef struct
{
 double Lon;
 double Lat;
} Coordinates;

// Global variables and constants
char const Temp[16] = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'};
static const double pi = 3.14159265358979324;
static const double a = 6378245.0;
static const double ee = 0.00669342162296594323;
static const double x_pi = 3.14159265358979324 * 3000.0 / 180.0;

static char buff_t[BUFFSIZE] = {0};
static GNRMC GPS;

// UART device and buffers
static const struct device *uart_dev;
static char latest_gnrmc[SENTENCE_SIZE];
static volatile bool new_gnrmc_available = false;

// Function prototypes
void DEV_Uart_SendByte(char data);
void DEV_Uart_SendString(char *data);
void L76X_Send_Command(char *data);
GNRMC L76X_Gat_GNRMC(void);
Coordinates L76X_Baidu_Coordinates(void);
Coordinates L76X_Google_Coordinates(void);
static double transformLat(double x, double y);
static double transformLon(double x, double y);
static Coordinates bd_encrypt(Coordinates gg);
static Coordinates transform(Coordinates gps);

// UART interrupt callback
static void uart_callback(const struct device *dev, void *user_data)
{
 ARG_UNUSED(user_data);
 static char temp_buffer[SENTENCE_SIZE];
 static int temp_index = 0;

 while (uart_irq_update(dev) && uart_irq_is_pending(dev))
 {
  if (uart_irq_rx_ready(dev))
  {
   uint8_t byte;
   if (uart_fifo_read(dev, &byte, 1) == 1)
   {
    if (byte == '\n')
    {
     temp_buffer[temp_index] = '\0';
     if (strncmp(temp_buffer, "$GNRMC", 6) == 0 || strncmp(temp_buffer, "$PNRMC", 6) == 0)
     {
      strncpy(latest_gnrmc, temp_buffer, SENTENCE_SIZE);
      new_gnrmc_available = true;
     }
     temp_index = 0;
    }
    else
    {
     if (temp_index < SENTENCE_SIZE - 1)
     {
      temp_buffer[temp_index++] = byte;
     }
     else
     {
      temp_index = 0; // Reset on overflow
     }
    }
   }
  }
 }
}

// Main function
int main(void)
{
 // Request constant latency mode for power management
 nrfx_power_constlat_mode_request();
 LOG_INF("Starting L76X GPS Module Example");

 // Initialize UART device
 uart_dev = DEVICE_DT_GET(DT_NODELABEL(xiao_serial));
 if (!device_is_ready(uart_dev))
 {
  LOG_ERR("UART device not ready!");
  return -1;
 }
 LOG_INF("UART device initialized.");

 // Configure UART interrupt
 if (uart_irq_callback_user_data_set(uart_dev, uart_callback, NULL) != 0)
 {
  LOG_ERR("Failed to set UART callback!");
  return -1;
 }
 uart_irq_rx_enable(uart_dev);
 LOG_INF("UART interrupt enabled.");

 // Initialize GPS module
 L76X_Send_Command(SET_NMEA_OUTPUT);
 k_msleep(100);
 L76X_Send_Command(SET_POS_FIX_1S);
 k_msleep(100);

 LOG_INF("GPS module initialized. Waiting for data...");

 while (true)
 {
  // Check for new GNRMC sentence
  if (new_gnrmc_available)
  {
   strncpy(buff_t, latest_gnrmc, BUFFSIZE);
   new_gnrmc_available = false;

   // Log raw GNRMC sentence for debugging
   LOG_INF("Raw GNRMC: %s", buff_t);

   // Parse GNRMC data
   GPS = L76X_Gat_GNRMC();

   // Output GPS data
   LOG_INF("\n--- GPS Data ---");
   LOG_INF("Time (GMT+8): %02d:%02d:%02d", GPS.Time_H, GPS.Time_M, GPS.Time_S);
   if (GPS.Status == 1)
   {
    LOG_INF("Latitude (WGS-84): %.6f %c", GPS.Lat, GPS.Lat_area);
    LOG_INF("Longitude (WGS-84): %.6f %c", GPS.Lon, GPS.Lon_area);

    // Coordinate conversion
    Coordinates baidu_coords = L76X_Baidu_Coordinates();
    LOG_INF("Baidu Latitude: %.6f", baidu_coords.Lat);
    LOG_INF("Baidu Longitude: %.6f", baidu_coords.Lon);

    Coordinates google_coords = L76X_Google_Coordinates();
    LOG_INF("Google Latitude: %.6f", google_coords.Lat);
    LOG_INF("Google Longitude: %.6f", google_coords.Lon);
    LOG_INF("GPS positioning successful.");
   }
   else
   {
    LOG_INF("GPS positioning failed or no valid data.");
   }
  }
  else
  {
   LOG_INF("No new GNRMC data available.");
  }

  k_msleep(2000); // Wait 2 seconds before next reading
 }

 return 0;
}

// Send a single byte
void DEV_Uart_SendByte(char data)
{
 uart_poll_out(uart_dev, data);
}

// Send a string
void DEV_Uart_SendString(char *data)
{
 while (*data)
 {
  DEV_Uart_SendByte(*data++);
 }
}

// Send L76X command with checksum
void L76X_Send_Command(char *data)
{
 char Check = data[1], Check_char[3] = {0};
 UBYTE i = 0;
 DEV_Uart_SendByte('\r');
 DEV_Uart_SendByte('\n');

 for (i = 2; data[i] != '\0'; i++)
 {
  Check ^= data[i]; // Calculate checksum
 }
 Check_char[0] = Temp[Check / 16 % 16];
 Check_char[1] = Temp[Check % 16];
 Check_char[2] = '\0';

 DEV_Uart_SendString(data);
 DEV_Uart_SendByte('*');
 DEV_Uart_SendString(Check_char);
 DEV_Uart_SendByte('\r');
 DEV_Uart_SendByte('\n');
}

// Parse GNRMC data
GNRMC L76X_Gat_GNRMC(void)
{
 GNRMC gps = {0}; // Initialize with zeros
 UWORD add = 0, x = 0, z = 0, i = 0;
 UDOUBLE Time = 0;

 add = 0;
 while (add < BUFFSIZE)
 {
  // Look for GNRMC or PNRMC sentence
  if (buff_t[add] == '$' && buff_t[add + 1] == 'G' && (buff_t[add + 2] == 'N' || buff_t[add + 2] == 'P') &&
   buff_t[add + 3] == 'R' && buff_t[add + 4] == 'M' && buff_t[add + 5] == 'C')
  {
   x = 0;
   for (z = 0; x < 12; z++)
   {
    if (buff_t[add + z] == '\0')
    {
     break;
    }
    if (buff_t[add + z] == ',')
    {
     x++;
     if (x == 1)
     { // Time field
      if (buff_t[add + z + 1] != ',')
      { // Check if time field is not empty
       Time = 0;
       for (i = 0; buff_t[add + z + i + 1] != '.'; i++)
       {
        if (buff_t[add + z + i + 1] == '\0' || buff_t[add + z + i + 1] == ',')
        {
         break;
        }
        Time = (buff_t[add + z + i + 1] - '0') + Time * 10;
       }
       gps.Time_H = Time / 10000 + 8; // Adjust for GMT+8
       gps.Time_M = (Time / 100) % 100;
       gps.Time_S = Time % 100;
       if (gps.Time_H >= 24)
       {
        gps.Time_H = gps.Time_H - 24;
       }
      }
     }
     else if (x == 2)
     { // Status field
      if (buff_t[add + z + 1] == 'A')
      {
       gps.Status = 1; // Position successful
      }
      else
      {
       gps.Status = 0; // Positioning failed
       break;   // Exit early if invalid
      }
     }
     else if (x == 3)
     { // Latitude field
      if (buff_t[add + z + 1] != ',')
      { // Check if latitude field is not empty
       double latitude_val = 0;
       UBYTE decimal_found = 0;
       double decimal_multiplier = 0.1;

       int k = 1;
       while (buff_t[add + z + k] != ',' && buff_t[add + z + k] != '\0')
       {
        if (buff_t[add + z + k] == '.')
        {
         decimal_found = 1;
         k++;
         continue;
        }
        if (!decimal_found)
        {
         latitude_val = latitude_val * 10 + (buff_t[add + z + k] - '0');
        }
        else
        {
         latitude_val = latitude_val + (buff_t[add + z + k] - '0') * decimal_multiplier;
         decimal_multiplier *= 0.1;
        }
        k++;
       }
       gps.Lat = latitude_val;
       gps.Lat_area = buff_t[add + z + k + 1]; // N or S
       z += k + 1;
      }
      else
      {
       gps.Status = 0; // Invalid data
       break;
      }
     }
     else if (x == 5)
     { // Longitude field
      if (buff_t[add + z + 1] != ',')
      { // Check if longitude field is not empty
       double longitude_val = 0;
       UBYTE decimal_found = 0;
       double decimal_multiplier = 0.1;

       int k = 1;
       while (buff_t[add + z + k] != ',' && buff_t[add + z + k] != '\0')
       {
        if (buff_t[add + z + k] == '.')
        {
         decimal_found = 1;
         k++;
         continue;
        }
        if (!decimal_found)
        {
         longitude_val = longitude_val * 10 + (buff_t[add + z + k] - '0');
        }
        else
        {
         longitude_val = longitude_val + (buff_t[add + z + k] - '0') * decimal_multiplier;
         decimal_multiplier *= 0.1;
        }
        k++;
       }
       gps.Lon = longitude_val;
       gps.Lon_area = buff_t[add + z + k + 1]; // E or W
       z += k + 1;
       break;
      }
      else
      {
       gps.Status = 0; // Invalid data
       break;
      }
     }
    }
   }
   break;
  }
  add++;
 }
 return gps;
}

// Convert to Baidu coordinates (BD-09)
Coordinates L76X_Baidu_Coordinates(void)
{
 Coordinates wgs84_coords;
 wgs84_coords.Lat = GPS.Lat;
 wgs84_coords.Lon = GPS.Lon;

 Coordinates gcj02_coords = transform(wgs84_coords);
 Coordinates bd09_coords = bd_encrypt(gcj02_coords);
 return bd09_coords;
}

// Convert to Google coordinates (GCJ-02)
Coordinates L76X_Google_Coordinates(void)
{
 Coordinates wgs84_coords;
 wgs84_coords.Lat = GPS.Lat;
 wgs84_coords.Lon = GPS.Lon;

 Coordinates gcj02_coords = transform(wgs84_coords);
 return gcj02_coords;
}

// Coordinate transformation helper functions
static double transformLat(double x, double y)
{
 double ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * sqrt(fabs(x));
 ret += (20.0 * sin(6.0 * x * pi) + 20.0 * sin(2.0 * x * pi)) * 2.0 / 3.0;
 ret += (20.0 * sin(y * pi) + 40.0 * sin(y / 3.0 * pi)) * 2.0 / 3.0;
 ret += (160.0 * sin(y / 12.0 * pi) + 320 * sin(y * pi / 30.0)) * 2.0 / 3.0;
 return ret;
}

static double transformLon(double x, double y)
{
 double ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * sqrt(fabs(x));
 ret += (20.0 * sin(6.0 * x * pi) + 20.0 * sin(2.0 * x * pi)) * 2.0 / 3.0;
 ret += (20.0 * sin(x * pi) + 40.0 * sin(x / 3.0 * pi)) * 2.0 / 3.0;
 ret += (150.0 * sin(x / 12.0 * pi) + 300.0 * sin(x / 30.0 * pi)) * 2.0 / 3.0;
 return ret;
}

static Coordinates bd_encrypt(Coordinates gg)
{
 Coordinates bd;
 double x = gg.Lon, y = gg.Lat;
 double z = sqrt(x * x + y * y) + 0.00002 * sin(y * x_pi);
 double theta = atan2(y, x) + 0.000003 * cos(x * x_pi);
 bd.Lon = z * cos(theta) + 0.0065;
 bd.Lat = z * sin(theta) + 0.006;
 return bd;
}

static Coordinates transform(Coordinates gps)
{
 Coordinates gg;
 double dLat = transformLat(gps.Lon - 105.0, gps.Lat - 35.0);
 double dLon = transformLon(gps.Lon - 105.0, gps.Lat - 35.0);
 double radLat = gps.Lat / 180.0 * pi;
 double magic = sin(radLat);
 magic = 1 - ee * magic * magic;
 double sqrtMagic = sqrt(magic);
 dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi);
 dLon = (dLon * 180.0) / (a / sqrtMagic * cos(radLat) * pi);
 gg.Lat = gps.Lat + dLat;
 gg.Lon = gps.Lon + dLon;
 return gg;
}
```

</details>

**GPS モジュールの設定と初期化**

- `gps_app` ログモジュール：

 -`LOG_MODULE_REGISTER(gps_app, LOG_LEVEL_INF):` これは gps_app という名前のログモジュールを登録し、そのログレベルを INFO に設定します。これにより、Zephyr のロギングシステムを通じて情報を出力できるようになり、デバッグやモニタリングに役立ちます。

- 型定義とマクロ：

 -`UBYTE`, `UWORD`, `UDOUBLE:`これらは、変数の想定サイズを明確にすることでコードの可読性を向上させる、符号なし整数のカスタム型エイリアスです。

- `SENTENCE_SIZE, BUFFSIZE:` これらは、NMEA センテンスやより大きなデータバッファを格納するために使用されるバッファの固定サイズを定義します。

- `HOT_START, SET_NMEA_OUTPUT:`のようなマクロ：これらのマクロは、L76X GPS モジュールに送信されるさまざまな NMEA プロトコルコマンドを定義し、その動作モード、出力周波数、ボーレートなどを設定します。

- 構造体定義：

  - `GNRMC:` この構造体は、GNRMC（GPS Recommended Minimum Specific data）NMEA センテンスから解析された主要情報（経度、緯度、時刻、ステータス、方位など）を格納するために使用されます。

  - `Coordinates:` 地理座標の経度と緯度を格納するためのシンプルな構造体です。

- グローバル変数と定数：

  - `buff_t:` BUFFSIZE サイズのグローバルバッファで、生の UART データを格納するために使用されます。

 -` GPS: `解析された GPS データを保持するためのグローバルな GNRMC 構造体インスタンスです。

- `uart_dev:` UART 通信に使用される UART デバイス構造体へのポインタです。

- `new_gnrmc_available:` 新しい有効な GNRMC センテンスを受信したときに true に設定される volatile なブールフラグで、メインループに新しいデータが処理可能であることを通知します。

- `uart_callback() 関数:`

  - これは UART がデータを受信したときにトリガーされる UART 割り込みコールバック関数です。

  - この関数は UART FIFO を 1 バイトずつ読み取り、改行文字 \n が検出されたときにデータを 1 つの完全なセンテンスとして処理します。

**メイン関数 main()**

- システム初期化：

  - `nrfx_power_constlat_mode_request():` 電源管理がリアルタイム動作に干渉しないように、一定レイテンシモードを要求します。

  - `uart_dev = DEVICE_DT_GET:` UART デバイスハンドルを取得し、device_is_ready() を使用してデバイスが使用可能かどうかを確認します。

  - `uart_irq_callback_user_data_set()`と `uart_irq_rx_enable():`これらは UART 受信割り込みを設定および有効化し、uart_callback 関数を割り込みハンドラとして登録して GPS データの非同期受信を実現します。

- GPS モジュールの初期化：

  - `L76X_Send_Command(SET_NMEA_OUTPUT):`GNRMC など、指定した NMEA センテンスのみを出力するように GPS モジュールを設定するコマンドを送信し、不要なデータトラフィックを削減します。

 -` L76X_Send_Command(SET_POS_FIX_1S): `GPS モジュールの位置更新頻度を 1 秒に設定します。

- メインループ：

  - ループは無限に実行され、常に new_gnrmc_available フラグをチェックします。

  - フラグが true の場合、latest_gnrmc から最新の GPS センテンスを buff_t にコピーし、その後 L76X_Gat_GNRMC() を呼び出してデータを解析します。

  - 解析結果に基づいて、時刻、WGS-84 の経度と緯度、および変換された Baidu と Google の座標を出力します。

  - GPS.Status が 0 の場合、「positioning failed」というメッセージを出力します。

  - 新しいデータがない場合は、「No new GNRMC data available.」と出力します。

  - k_msleep(2000): 各ループの後にプログラムを 2 秒間一時停止し、出力頻度を制御します。

### 結果グラフ

<div class="table-center">
 <table align="center">
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/gps_diplay.png" style={{width:500, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/gps_conect.jpg" style={{width:340, height:'auto'}}/></div></td>
  </tr>
 </table>
</div>

## I2C

### ハードウェアの準備

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
   <th>Seeed Studio Expansion Board Base for XIAO</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
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
</div>

### ソフトウェア実装

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-expansion-base-for-xiao/oled" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

```c
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/display/cfb.h>
#include <stdio.h>
#include <string.h>

#define LOG_LEVEL CONFIG_LOG_DEFAULT_LEVEL
#include <zephyr/logging/log.h>
LOG_MODULE_REGISTER(main_app, LOG_LEVEL);

/**
 * @brief Initializes the display device.
 * @param[out] dev Pointer to the display device struct.
 * @return 0 on success, -1 on failure.
 */
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

/**
 * @brief Initializes the Compact Framebuffer (CFB) and display blanking.
 * @param dev Pointer to the display device struct.
 * @return 0 on success, -1 on failure.
 */
static int framebuffer_setup(const struct device *dev) {
    if (cfb_framebuffer_init(dev)) {
        LOG_ERR("Framebuffer initialization failed!");
        return -1;
    }
    cfb_framebuffer_clear(dev, true);
    display_blanking_off(dev);
    return 0;
}

/**
 * @brief Selects a suitable font for the display.
 * @param dev Pointer to the display device struct.
 * @param[out] font_width Pointer to store the width of the selected font.
 * @param[out] font_height Pointer to store the height of the selected font.
 * @return 0 on success, -1 if no suitable font is found.
 */
static int select_font(const struct device *dev, uint8_t *font_width, uint8_t *font_height) {
    int chosen_font_idx = -1;
    uint8_t current_font_width, current_font_height;

    for (int idx = 0; idx < 42; idx++) {
        if (cfb_get_font_size(dev, idx, &current_font_width, &current_font_height) == 0) {
            if (current_font_width == 8 && current_font_height == 8) {
                chosen_font_idx = idx;
                *font_width = current_font_width;
                *font_height = current_font_height;
                cfb_framebuffer_set_font(dev, chosen_font_idx);
                LOG_INF("Selected font idx: %d, width: %d, height: %d", chosen_font_idx, *font_width, *font_height);
                break;
            }
            if (chosen_font_idx == -1 && current_font_width > 0 && current_font_height > 0) {
                chosen_font_idx = idx;
                *font_width = current_font_width;
                *font_height = current_font_height;
                cfb_framebuffer_set_font(dev, chosen_font_idx);
                LOG_INF("Defaulting to font idx: %d, width: %d, height: %d", chosen_font_idx, *font_width, *font_height);
            }
        } else {
            break;
        }
    }

    if (chosen_font_idx == -1) {
        LOG_ERR("No suitable font found or loaded!");
        return -1;
    }
    return 0;
}

/**
 * @brief Prints a single line of text at specified row and column.
 * @param dev Pointer to the display device struct.
 * @param text The string to print.
 * @param row The row number (0-indexed) where the text should start.
 * @param col The column number (0-indexed) where the text should start.
 * @param font_width The width of the currently selected font in pixels.
 * @param font_height The height of the currently selected font in pixels.
 */
static void print_text_by_row_col(const struct device *dev, const char *text, int row, int col,
                                  uint8_t font_width, uint8_t font_height) {
    int pixel_x = col * font_width;
    int pixel_y = row * font_height;

    if (cfb_print(dev, text, pixel_x, pixel_y)) {
        LOG_ERR("Failed to print text: \"%s\" at row %d, col %d", text, row, col);
    }
}

int main(void) {
    const struct device *dev;
    uint8_t font_width = 0;
    uint8_t font_height = 0;
    uint16_t x_res, y_res;

    if (display_init(&dev) != 0) {
        return 0;
    }

    if (framebuffer_setup(dev) != 0) {
        return 0;
    }

    if (select_font(dev, &font_width, &font_height) != 0) {
        return 0;
    }

    x_res = cfb_get_display_parameter(dev, CFB_DISPLAY_WIDTH);
    y_res = cfb_get_display_parameter(dev, CFB_DISPLAY_HEIGHT);
    LOG_INF("Display resolution: %dx%d", x_res, y_res);
    cfb_set_kerning(dev, 0);

    while (1) {
        cfb_framebuffer_clear(dev, false);

        const char *line1_text = "nRF54L15";
        // Print line1 at row 1, column 2
        print_text_by_row_col(dev, line1_text, 1, 2, font_width, font_height);

        const char *line2_text = "Hello World";
        // Print line2 at row 2, column 1
        print_text_by_row_col(dev, line2_text, 2, 1, font_width, font_height);

        cfb_framebuffer_finalize(dev);
        k_sleep(K_MSEC(1000));
    }

    return 0;
}

```

**ディスプレイデバイスの設定と初期化**

- `main_app` ログモジュール:

  - #define LOG_LEVEL CONFIG_LOG_DEFAULT_LEVEL と LOG_MODULE_REGISTER(main_app, LOG_LEVEL) によって、main_app という名前のログモジュールを登録し、そのログレベルをシステムのデフォルト設定にします。これにより、開発者は Zephyr のロギングシステムを通じて簡単にデバッグや情報出力を行うことができます。

- `display_init()` 関数:

  - `*dev = DEVICE_DT_GET(DT_CHOSEN(zephyr_display));:` この行は、Zephyr の Device Tree から選択されたディスプレイデバイスを取得します。このアプローチにより、コードはハードウェア非依存になります。

  - `display_set_pixel_format(*dev, PIXEL_FORMAT_MONO10):`このコードは、ディスプレイのピクセルフォーマットを PIXEL_FORMAT_MONO10 に設定しようとします。これに失敗した場合は、PIXEL_FORMAT_MONO01 を試みます。これにより、ディスプレイがモノクロモードで動作することが保証され、OLED や e-Paper など一部のディスプレイ技術に必要となります。

- `framebuffer_setup()` 関数:

  - `cfb_framebuffer_init(dev):`これは Compact Framebuffer (CFB) を初期化します。CFB は Zephyr における軽量なグラフィックスライブラリで、ディスプレイ上にテキストや簡単なグラフィックスを描画するために使用されます。

  - `cfb_framebuffer_clear(dev, true):`これはフレームバッファをクリアし、その内容を直ちにディスプレイへ書き込み、画面をクリーンな状態にします。

  - `display_blanking_off(dev):`これはディスプレイのブランキング機能をオフにします。通常、これはディスプレイがデータを受信して画像を表示する準備ができたことを示す信号です。

- `select_font()` 関数:

  - `cfb_get_font_size():`この関数は利用可能なフォントをループし、適切なフォントを探します。

  - コードは` 8x8 `ピクセルフォントを優先します。これは一般的で読みやすい小さなフォントであるためです。

  - `8x8` フォントが見つからない場合は、フォールバックとして最初に見つかったサイズが 0 でないフォントを選択します。

  - `cfb_framebuffer_set_font(dev, chosen_font_idx):` 適切なフォントが見つかると、それがフレームバッファの現在のフォントとして設定されます。

- `print_text_by_row_col()` 関数:

 -` int pixel_x = col * font_width; `と `int pixel_y = row * font_height;:` この関数はテキストの行・列座標（文字単位）をピクセル座標に変換し、テキストの位置決めを直感的にします。

- `cfb_print():` これは指定したピクセル位置にテキストを印字するために使用される、CFB ライブラリの中核となる関数です。

**メインループ**
コードの中核ロジックは、無限 `while (1)`ループ内で実行されます:

- 画面のクリア: `cfb_framebuffer_clear(dev, false):` 各ループの冒頭で、ディスプレイを即座にリフレッシュすることなくフレームバッファをクリアします。これにより、複数の要素を一度に描画でき、画面のちらつきを防ぎます。

- テキストの表示:

  - 2 つの文字列 `line1_text` と `line2_text` が定義されています。

  - print_text_by_row_col(): カスタム関数を使用して、これら 2 行のテキストを画面上の指定された行と列の位置に表示します。1 行目は `(1, 2)` に、2 行目は `(2, 1)` に表示されます。

  - ディスプレイの更新: `cfb_framebuffer_finalize(dev)`: この関数は、フレームバッファからディスプレイへ保留中の描画コマンドを一括送信し、すべてのコンテンツを同時に表示させます。

  - 遅延: `k_sleep(K_MSEC(1000)):` 各ループの後、プログラムは 1000 ミリ秒（1 秒）一時停止します。これは画面の更新頻度を制御し、時計やセンサーデータなどの静的な情報を安定して表示する用途に適しています。

### 結果グラフ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrf_oled.jpg" style={{width:700, height:'auto'}}/></div>

## SPI

### ハードウェアの準備

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
   <th>ePaper Driver Board for Seeed Studio XIAO</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/epaper-driver-board-for-xiao.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### ソフトウェア実装

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-epaper" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

```cpp
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/display.h>
#include <lvgl.h>

#define LOG_LEVEL CONFIG_LOG_DEFAULT_LEVEL
#include <zephyr/logging/log.h>
LOG_MODULE_REGISTER(epaper_simple);

int main(void)
{
    // Get display device
    const struct device *display_dev = DEVICE_DT_GET(DT_CHOSEN(zephyr_display));
    if (!device_is_ready(display_dev)) {
        LOG_ERR("Display device not ready!");
        return 0;
    }
    LOG_INF("Display device ready.");

    // Initialize LVGL
    // Must be called before any LVGL object creation or operation
    lv_init();

    // Turn off display blanking (for ePaper, this usually triggers a full refresh to clear old content)
    if (display_blanking_off(display_dev)) {
        LOG_ERR("Failed to turn off display blanking!");
        return 0;
    }
    LOG_INF("Display blanking is off. Screen should be cleared by full refresh.");

    // Get the current active screen and set its background to white
    // This is also an LVGL-level "clear" operation to ensure the canvas is white
    lv_obj_t *scr = lv_scr_act();
    lv_obj_set_style_bg_color(scr, lv_color_white(), LV_STATE_DEFAULT);
    lv_obj_set_style_bg_opa(scr, LV_OPA_COVER, LV_STATE_DEFAULT);

    // Remove screen padding and scrollbar
    lv_obj_set_style_pad_all(scr, 0, LV_STATE_DEFAULT);
    lv_obj_set_scrollbar_mode(scr, LV_SCROLLBAR_MODE_OFF);


    // Get display width and height (for layout)
    lv_disp_t *disp = lv_disp_get_default();
    lv_coord_t width = lv_disp_get_hor_res(disp);
    lv_coord_t height = lv_disp_get_ver_res(disp);
    LOG_INF("Display width: %d, height: %d", width, height);


    // Create a centered panel
    lv_obj_t *panel = lv_obj_create(scr);
    lv_obj_set_size(panel, 300, 100);
    lv_obj_align(panel, LV_ALIGN_CENTER, 0, 0);

    // Set panel background to white, border to black for visibility
    lv_obj_set_style_bg_color(panel, lv_color_white(), LV_STATE_DEFAULT);
    lv_obj_set_style_border_color(panel, lv_color_black(), LV_STATE_DEFAULT);
    lv_obj_set_style_border_width(panel, 2, LV_STATE_DEFAULT);
    lv_obj_set_style_pad_all(panel, 10, LV_STATE_DEFAULT);


    // Add text to the panel
    lv_obj_t *label = lv_label_create(panel);
    lv_label_set_text(label, "HELLO EPAPER");

    // Set text color to black for visibility on white background
    lv_obj_set_style_text_color(label, lv_color_black(), LV_STATE_DEFAULT);
    lv_obj_set_style_text_font(label, &lv_font_montserrat_24, LV_STATE_DEFAULT);
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);

    // Add a time label at the top right
    lv_obj_t *time_label = lv_label_create(scr);
    lv_label_set_text(time_label, "Time 07:21 PM");
    lv_obj_set_style_text_color(time_label, lv_color_black(), LV_STATE_DEFAULT);
    lv_obj_set_style_text_font(time_label, &lv_font_montserrat_18, LV_STATE_DEFAULT);
    lv_obj_align(time_label, LV_ALIGN_TOP_RIGHT, -20, 10);

    // Add a Zephyr logo at the top left
    lv_obj_t *zephyr_label = lv_label_create(scr);
    lv_label_set_text(zephyr_label, "Powered by Zephyr");
    lv_obj_set_style_text_color(zephyr_label, lv_color_black(), LV_STATE_DEFAULT);
    lv_obj_set_style_text_font(zephyr_label, &lv_font_montserrat_24, LV_STATE_DEFAULT);
    lv_obj_align(zephyr_label, LV_ALIGN_BOTTOM_LEFT, 20, -10);

    // Add author label at the bottom right
    lv_obj_t *author_label = lv_label_create(scr);
    lv_label_set_text(author_label, "Author: Stellar");
    lv_obj_set_style_text_color(author_label, lv_color_black(), LV_STATE_DEFAULT);
    lv_obj_set_style_text_font(author_label, &lv_font_montserrat_16, LV_STATE_DEFAULT);
    lv_obj_align(author_label, LV_ALIGN_BOTTOM_RIGHT, -20, -10);


    // Add four squares at the top left with a for loop
    lv_obj_t *squares[4];
    int square_offsets = 20;
    for (int i = 0; i < 4; i++) {
        squares[i] = lv_obj_create(scr);
        lv_obj_set_size(squares[i], 30, 30);
        lv_obj_set_style_bg_color(squares[i], lv_color_white(), LV_STATE_DEFAULT);
        lv_obj_set_style_border_color(squares[i], lv_color_black(), LV_STATE_DEFAULT);
        lv_obj_set_style_border_width(squares[i], 2, LV_STATE_DEFAULT);
        lv_obj_set_style_radius(squares[i], 0, LV_STATE_DEFAULT);
        lv_obj_align(squares[i], LV_ALIGN_TOP_LEFT, square_offsets, 20);
        square_offsets+=40;
    }

    while (1) {
        lv_task_handler();
        k_sleep(K_MSEC(1000)); // Lower refresh rate, suitable for ePaper
    }
    return 0;
}
```

**デバイス初期化:**

- このコードはまず、`DEVICE_DT_GET(DT_CHOSEN(zephyr_display)).` を使用してデバイスツリーからディスプレイデバイスを取得します。

- 次に `device_is_ready()` を呼び出して、デバイスが正しく初期化され、動作可能な状態かどうかを確認します。これはあらゆるハードウェアとやり取りする際の重要な最初のステップです。

**LVGL の初期化:**

- `lv_init()` は LVGL グラフィックスライブラリのエントリポイントです。ライブラリの内部状態を初期化するため、LVGL オブジェクトを作成したり、何らかの操作を行ったりする前に必ず呼び出す必要があります。

**画面クリア:**

- `display_blanking_off()` 関数が呼び出されます。E-Paper ディスプレイでは、通常これは画面上の古いコンテンツを消去するためのフルリフレッシュをトリガーします。

- さらにクリーンなキャンバスを確保するために、コードは `lv_scr_act()` を使用して現在アクティブなスクリーンを取得し、`lv_obj_set_style_bg_color()` を使ってその背景色を白に設定し、ディスプレイ領域全体を覆います。

**画面レイアウトの準備:**

- `lv_disp_get_hor_res()` と `lv_disp_get_ver_res()` 関数を使用して、ディスプレイの実際の幅と高さを取得します。これは後で UI 要素を正確に配置するのに役立ちます。

- また、コードはスクリーンのパディング `(lv_obj_set_style_pad_all())` とスクロールバー ` (lv_obj_set_scrollbar_mode()) ` を削除し、使用可能な描画領域を最大化します。

**UI 要素の作成と設定:**

- パネル: `lv_obj_create(scr)` でパネルオブジェクトを作成します。そのサイズと中央揃えは `lv_obj_set_size()` と `lv_obj_align()` を使って設定します。白い背景と黒い枠線を含むスタイルは、`lv_obj_set_style_bg_color()` や `lv_obj_set_style_border_color()` などの関数で設定されます。

- ラベル:

  - `lv_label_create()` を使用してテキストラベルを作成します。

  - `lv_label_set_text()` でラベルのテキスト内容を設定します。

  - `lv_obj_set_style_text_color()` と lv_obj_set_style_text_font() を使用して、テキストの色とフォントサイズを設定します。

- `lv_obj_align()` 関数は、各ラベルを画面の特定の位置（中央、右上、左下、右下など）に配置します。

四角形: for ループを使用して 4 つの小さな四角形オブジェクトを作成します。それぞれのサイズ、スタイル（白い塗りつぶしと黒い枠線）、位置を順番に設定し、画面左上に水平方向に並べて配置します。

**メインループ:**

- `while(1)` ループは、プログラムの連続実行部分です。

- `lv_task_handler()` は、UI 要素の更新やイベント処理など、すべての LVGL 内部タスクを処理するために、ループ内で継続的に呼び出されます。

- `k_sleep(K_MSEC(1000))` はスレッドを 1000 ミリ秒一時停止します。静的な d

### 結果グラフ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/epaper_nrf54.jpg" style={{width:600, height:'auto'}}/></div>

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
