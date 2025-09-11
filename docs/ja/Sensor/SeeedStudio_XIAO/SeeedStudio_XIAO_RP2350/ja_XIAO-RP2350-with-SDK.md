---
description: "Pico SDK を XIAO RP2350 で使用する"
title: Seeed Studio XIAO RP2350 と C/C++ SDK
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao-rp2350-c-cpp-sdk
sidebar_position: 4
last_update:
    date: 2024-08-14T06:27:29.006Z
    author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## はじめに

RP2350 マイクロコントローラーを搭載した Seeed Studio XIAO RP2350 は、小型ながら高性能を発揮します。このガイドでは、XIAO RP2350 で C/C++ SDK をセットアップして使用するための基本的な手順を提供します。

## 前提条件

開始する前に、以下を準備してください：

- Windows、macOS、または Linux を実行しているコンピュータ
- XIAO RP2350 をコンピュータに接続するための USB ケーブル
- C/C++ プログラミングの基本的な知識

## VSCode を使用したインストールガイド

:::info
ネイティブな開発環境を好む方は、[Raspberry Pi Pico C/C++ SDK ドキュメント](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf) または [Raspberry Pi Pico SDK | GitHub](https://github.com/raspberrypi/pico-sdk) を参照してください。
:::

特に初心者にとって、SDK プログラミングをより簡単かつ効率的に行うために、Visual Studio Code (VSCode) 用の [Raspberry Pi Pico](https://marketplace.visualstudio.com/items?itemName=raspberry-pi.raspberry-pi-pico) 拡張機能をインストールすることをお勧めします。

この拡張機能は、必要なツールチェーンのインストールをガイドし、各ツールを手動でインストールする手間を省きます。ただし、システムが以下のプラットフォーム要件を満たしていることを確認してください：Windows x64、macOS (Sonoma 以降)、Linux x64 または arm64。

お使いのオペレーティングシステムに合わせた詳細なインストール手順については、[Raspberry Pi Pico Extension for VSCode](https://marketplace.visualstudio.com/items?itemName=raspberry-pi.raspberry-pi-pico) ページを参照してください。

#### ステップ 1: 拡張機能をインストールする

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/0-install-pico-extension.png" style={{width:500, height:'auto'}}/>
<div style={{ marginTop: '-8px' }}><em>VSCode に拡張機能をインストール</em></div>
<br></br>
</div>

#### ステップ 2: 新しいプロジェクトを作成する

ページが読み込まれると、必要なコンテンツが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/1-new-example-project.png" style={{width:500, height:'auto'}}/>
<div style={{ marginTop: '-8px' }}><em>サンプルから新しいプロジェクトを作成</em></div>
<br></br>
</div>

`New Project From Examples` を使用してプロジェクトを作成してみてください。

#### ステップ 3: プロジェクトを設定する

- **名前:** 通常、これはサンプルプロジェクト名になります。この場合、`blink` プロジェクトを選択します。
- **ボードタイプ:** `Pico 2`
- **場所:** XIAO RP2350 プロジェクトを保存する場所を選択します。
- **SDK バージョン:** バージョン `v2.0.0` 以降である必要があります。
- **デバッガー:** SWD デバッグインターフェースを使用する予定がある場合は、SWD Debugger オプションをチェックして後でデバッグを有効にします。

<Tabs>
<TabItem value="c1" label="プロジェクトを設定">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/2-create-blink-project.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value="c2" label="高度なオプション">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/3-advanced-options.png" style={{width:500, height:'auto'}}/></div>

ツールチェーンのセットアップを微調整し、不要なリソースのダウンロードを回避したい場合は、**Advanced Options** をチェックしてください。ここでは、Ninja や CMake などのツールのパスを指定できます。CMake や Python 環境を以前にインストールしていない場合、または気にしたくない場合は、このステップをスキップできます。

この例では、Windows マシンに既にインストールされ、システム PATH に追加されているシステムバージョンを使用します。そのため、**Use system version** を選択します。

</TabItem>
</Tabs>

初めてセットアップを実行する場合、`Create` をクリックすると、拡張機能が SDK をダウンロードして管理します。Windows では、SDK は通常 `%userprofile%\.pico-sdk` に配置されます。セットアップにかかる時間はインターネット速度によります。完了すると、新しいウィンドウが開き、プロジェクトが表示されます。

#### ステップ 4: プロジェクトをビルドする

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/4-blink-example-created.png" style={{width:500, height:'auto'}}/></div>

:::caution 注意

プロジェクトを初めてセットアップする際、CMake プロジェクト内のボードタイプを手動で変更する必要があります。拡張機能にはデフォルトで XIAO RP2350 ボードが含まれていないためです。以下のようにボードを `seeed_xiao_rp2350` に設定してください：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/set-xiao-rp2350-board.png" style={{width:500, height:'auto'}}/></div>

**ボードタイプを変更した後、`build` フォルダをクリーンアップ** して、正しいボード設定を `%userprofile%/.pico-sdk/sdk/2.0.0/src/boards/include/boards/seeed_xiao_rp2350.h` から使用するようにします。その後、以下のコマンドを入力して、ビルドフォルダ内で CMake キャッシュを生成します：
```shell
cmake .. # build フォルダ内で
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/get-cmake-cache.png" style={{width:500, height:'auto'}}/></div>

これにより、拡張機能のコンパイルタスクが正しく動作するようになります。

:::

<Tabs>
<TabItem value="compile" label="プロジェクトをコンパイル">

**Compile** ボタンを押してプロジェクトをビルドできます。これにより、`build` フォルダ内に `blink.uf2` ファイルが生成されます。このファイルをコンピュータで認識された RP2350 ドライブにドラッグ＆ドロップしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/5-compile-project.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value="run" label="プロジェクトを実行">


デバイスがBOOTモードの場合、**Run**ボタンを押すことで、`.uf2`ファイルをコンパイルし、自動的にRP2350にコピーすることができます。これにより、ファイルを手動でドラッグ＆ドロップする必要がなくなります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/6-run-project.png" style={{width:500, height:'auto'}}/></div>

</TabItem>
</Tabs>

これまでに開発環境をセットアップし、VSCodeのRaspberry Pi Pico拡張機能を使用して新しいプロジェクトを作成しました。プロジェクトが準備でき、ツールが構成されている状態で、コードを簡単にコンパイルしてXIAO RP2350上で実行することができ、開発プロセスを効率化できます。

## 例1: LED点滅

基本的なSDKの使用方法を示すために、以下の例ではオンボードLEDを点滅させるプログラムを説明します：

```c title="blink.c"
#include "pico/stdlib.h"

const int sleep_time = 250;

int main() {
    const uint LED_PIN = PICO_DEFAULT_LED_PIN; // GPIO25
    gpio_init(LED_PIN);
    gpio_set_dir(LED_PIN, GPIO_OUT);
    while (true) {
        gpio_put(LED_PIN, 1);
        sleep_ms(sleep_time);
        gpio_put(LED_PIN, 0);
        sleep_ms(sleep_time);
    }
}
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-blink.gif" style={{width:400, height:'auto', "border-radius": '12.8px'}}/></div>

## 例2: RGB点滅

<Tabs>
<TabItem value="ws2812.c" label="ws2812.c">

```c
/**
 * Copyright (c) 2020 Raspberry Pi (Trading) Ltd.
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

#include <stdio.h>
#include <stdlib.h>

#include "pico/stdlib.h"
#include "hardware/pio.h"
#include "hardware/clocks.h"
#include "ws2812.pio.h"

#define IS_RGBW true
#define NUM_PIXELS 1

#ifdef PICO_DEFAULT_WS2812_PIN
#define WS2812_PIN PICO_DEFAULT_WS2812_PIN
#else
// ボードにデフォルトのWS2812ピンが定義されていない場合はピン2を使用
#define WS2812_PIN 22
#endif

static inline void put_pixel(uint32_t pixel_grb) {
    pio_sm_put_blocking(pio0, 0, pixel_grb << 8u);
}

static inline uint32_t urgb_u32(uint8_t r, uint8_t g, uint8_t b) {
    return
            ((uint32_t) (r) << 8) |
            ((uint32_t) (g) << 16) |
            (uint32_t) (b);
}

void pattern_snakes(uint len, uint t) {
    for (uint i = 0; i < len; ++i) {
        uint x = (i + (t >> 1)) % 64;
        if (x < 10)
            put_pixel(urgb_u32(0xff, 0, 0));
        else if (x >= 15 && x < 25)
            put_pixel(urgb_u32(0, 0xff, 0));
        else if (x >= 30 && x < 40)
            put_pixel(urgb_u32(0, 0, 0xff));
        else
            put_pixel(0);
    }
}

void pattern_random(uint len, uint t) {
    if (t % 8)
        return;
    for (int i = 0; i < len; ++i)
        put_pixel(rand());
}

void pattern_sparkle(uint len, uint t) {
    if (t % 8)
        return;
    for (int i = 0; i < len; ++i)
        put_pixel(rand() % 16 ? 0 : 0xffffffff);
}

void pattern_greys(uint len, uint t) {
    int max = 100; // 電流を過剰に消費しないようにする
    t %= max;
    for (int i = 0; i < len; ++i) {
        put_pixel(t * 0x10101);
        if (++t >= max) t = 0;
    }
}

typedef void (*pattern)(uint len, uint t);
const struct {
    pattern pat;
    const char *name;
} pattern_table[] = {
        {pattern_snakes,  "Snakes!"},
        {pattern_random,  "Random data"},
        {pattern_sparkle, "Sparkles"},
        {pattern_greys,   "Greys"},
};

int main() {
    //set_sys_clock_48();
    stdio_init_all();

    const int RGB_POWER = 23;
    gpio_init(RGB_POWER);
    gpio_set_dir(RGB_POWER, GPIO_OUT);
    gpio_put(RGB_POWER, 1);

    printf("WS2812 Smoke Test, using pin %d", WS2812_PIN);

    // todo get free sm
    PIO pio = pio0;
    int sm = 0;
    uint offset = pio_add_program(pio, &ws2812_program);

    ws2812_program_init(pio, sm, offset, WS2812_PIN, 800000, IS_RGBW);

    int t = 0;
    while (1) {
        int pat = rand() % count_of(pattern_table);
        int dir = (rand() >> 30) & 1 ? 1 : -1;
        puts(pattern_table[pat].name);
        puts(dir == 1 ? "(forward)" : "(backward)");
        for (int i = 0; i < 1000; ++i) {
            pattern_table[pat].pat(NUM_PIXELS, t);
            sleep_ms(10);
            t += dir;
        }
    }
}
```
</TabItem>
<TabItem value="ws2812.pio" label="ws2812.pio">

```assembly
;
; Copyright (c) 2020 Raspberry Pi (Trading) Ltd.
;
; SPDX-License-Identifier: BSD-3-Clause
;

.program ws2812
.side_set 1

.define public T1 2
.define public T2 5
.define public T3 3

.lang_opt python sideset_init = pico.PIO.OUT_HIGH
.lang_opt python out_init     = pico.PIO.OUT_HIGH
.lang_opt python out_shiftdir = 1

.wrap_target
bitloop:
    out x, 1       side 0 [T3 - 1] ; 命令が停止している場合でもサイドセットは実行される
    jmp !x do_zero side 1 [T1 - 1] ; シフトアウトしたビットに基づいて分岐。正のパルス
do_one:
    jmp  bitloop   side 1 [T2 - 1] ; 長いパルスのために高電位を維持
do_zero:
    nop            side 0 [T2 - 1] ; または低電位を維持、短いパルス
.wrap

% c-sdk {
#include "hardware/clocks.h"

static inline void ws2812_program_init(PIO pio, uint sm, uint offset, uint pin, float freq, bool rgbw) {

    pio_gpio_init(pio, pin);
    pio_sm_set_consecutive_pindirs(pio, sm, pin, 1, true);

    pio_sm_config c = ws2812_program_get_default_config(offset);
    sm_config_set_sideset_pins(&c, pin);
    sm_config_set_out_shift(&c, false, true, rgbw ? 32 : 24);
    sm_config_set_fifo_join(&c, PIO_FIFO_JOIN_TX);

    int cycles_per_bit = ws2812_T1 + ws2812_T2 + ws2812_T3;
    float div = clock_get_hz(clk_sys) / (freq * cycles_per_bit);
    sm_config_set_clkdiv(&c, div);

    pio_sm_init(pio, sm, offset, &c);
    pio_sm_set_enabled(pio, sm, true);
}
%}

.program ws2812_parallel

.define public T1 2
.define public T2 5
.define public T3 3

.wrap_target
    out x, 32
    mov pins, !null [T1-1]
    mov pins, x     [T2-1]
    mov pins, null  [T3-2]
.wrap

% c-sdk {
#include "hardware/clocks.h"

static inline void ws2812_parallel_program_init(PIO pio, uint sm, uint offset, uint pin_base, uint pin_count, float freq) {
    for(uint i=pin_base; i<pin_base+pin_count; i++) {
        pio_gpio_init(pio, i);
    }
    pio_sm_set_consecutive_pindirs(pio, sm, pin_base, pin_count, true);

    pio_sm_config c = ws2812_parallel_program_get_default_config(offset);
    sm_config_set_out_shift(&c, true, true, 32);
    sm_config_set_out_pins(&c, pin_base, pin_count);
    sm_config_set_set_pins(&c, pin_base, pin_count);
    sm_config_set_fifo_join(&c, PIO_FIFO_JOIN_TX);

    int cycles_per_bit = ws2812_parallel_T1 + ws2812_parallel_T2 + ws2812_parallel_T3;
    float div = clock_get_hz(clk_sys) / (freq * cycles_per_bit);
    sm_config_set_clkdiv(&c, div);

    pio_sm_init(pio, sm, offset, &c);
    pio_sm_set_enabled(pio, sm, true);
}
%}
```
</TabItem>

<TabItem value="ws2812-cmake" label="CMakeLists.txt">

以下のスニペットをコピーして、`CMakeLists.txt` ファイルに追加してください。

```cmake title="CMakeLists.txt"
project(pio_ws2812 C CXX ASM)

# Raspberry Pi Pico SDK を初期化
pico_sdk_init()

# pio_ws2812 用の実行可能ターゲットを追加
add_executable(pio_ws2812)

# 生成されたファイル用のディレクトリを作成
file(MAKE_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/generated)

# ws2812.pio から PIO ヘッダーファイルを生成
pico_generate_pio_header(pio_ws2812 ${CMAKE_CURRENT_LIST_DIR}/ws2812.pio OUTPUT_DIR ${CMAKE_CURRENT_LIST_DIR}/generated)

# pio_ws2812 ターゲットにソースファイルを追加
target_sources(pio_ws2812 PRIVATE ws2812.c)

# 必要なライブラリを pio_ws2812 ターゲットにリンク
target_link_libraries(pio_ws2812 PRIVATE pico_stdlib hardware_pio)

# 追加の出力形式を生成 (例: UF2, BIN)
pico_add_extra_outputs(pio_ws2812)

# オプションで、PIO アセンブリから Python ファイルを生成してさらなる分析やドキュメント化を行う
add_custom_command(OUTPUT ${CMAKE_CURRENT_LIST_DIR}/generated/ws2812.py
    DEPENDS ${CMAKE_CURRENT_LIST_DIR}/ws2812.pio
    COMMAND pioasm -o python ${CMAKE_CURRENT_LIST_DIR}/ws2812.pio ${CMAKE_CURRENT_LIST_DIR}/generated/ws2812.py
    VERBATIM)
add_custom_target(pio_ws2812_datasheet DEPENDS ${CMAKE_CURRENT_LIST_DIR}/generated/ws2812.py)
add_dependencies(pio_ws2812 pio_ws2812_datasheet)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/11-ws2812-rgb-cmake.png" style={{width:500, height:'auto'}}/></div>

</TabItem>
</Tabs>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/rp2350-rgb.gif" style={{width:240, height:'auto', "border-radius": '12.8px' }}/></div>

## 例 3: UART 出力

:::tip USB シリアル
`printf` を使用して USB 経由でコンピュータに出力を行う場合、プロジェクトの `CMakeLists.txt` ファイルに以下の行を追加する必要があります。

```cmake
pico_enable_stdio_usb(your_project_name 1)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/10-cmake-usb-enabled.png" alt="CMake USB Enabled" style={{width:400, height:'auto'}}/></div>

さらに、コード内で標準 I/O を初期化するために、`stdio_init_all();` をメイン関数に追加してください。

:::

```c title="hello_uart.c"
#include "hardware/uart.h"
#include "pico/stdlib.h"
#include <pico/stdio.h>
#include <pico/time.h>
#include <stdio.h>

#define UART_ID uart0
#define BAUD_RATE 115200

// ピン 0 と 1 を使用していますが、他の使用可能なピンについてはデータシートの GPIO 機能選択表を参照してください。
#define UART_TX_PIN 0
#define UART_RX_PIN 1

int main() {
   stdio_init_all();
  // 必要な速度で UART を設定
  uart_init(UART_ID, BAUD_RATE);

  // GPIO の機能選択を使用して TX および RX ピンを設定
  // 詳細はデータシートの機能選択を参照してください
  gpio_set_function(UART_TX_PIN, UART_FUNCSEL_NUM(UART_ID, UART_TX_PIN));
  gpio_set_function(UART_RX_PIN, UART_FUNCSEL_NUM(UART_ID, UART_RX_PIN));

  // 様々な UART 関数を使用してデータを送信
  // デフォルトシステムでは、printf もデフォルト UART 経由で出力されます

  // 変換なしで文字を送信
  uart_putc_raw(UART_ID, 'A');

  // CR/LF 変換を行って文字を送信
  uart_putc(UART_ID, 'B');

  // CR/LF 変換を行って文字列を送信
  uart_puts(UART_ID, " Hello, UART!\n");

  // テスト出力
  int i = 0;
  for (;;) {
    sleep_ms(500);
    printf("Hello %d", i++);
  }
}
```

## 例 4: バッテリー電圧の読み取り

```c title="hello_adc.c"
#include <stdio.h>
#include "pico/stdlib.h"
#include "hardware/gpio.h"
#include "hardware/adc.h"

void init_gpio() {
    const int gpio = 19;

    gpio_init(gpio);
    gpio_set_dir(gpio, GPIO_OUT);
    gpio_put(gpio, 1);
}

int main() {
    stdio_init_all();
    printf("ADC バッテリー例 - GPIO29 A3\n");

    init_gpio();
    adc_init();

    // GPIOを高インピーダンスに設定し、プルアップなどを無効化
    adc_gpio_init(29);
    // ADC入力0 (GPIO26) を選択
    adc_select_input(3);

    while (1) {
        // 12ビット変換、最大値 == ADC_VREF == 3.3 V と仮定
        const float conversion_factor = 3.3f / (1 << 12);
        uint16_t result = adc_read();
        printf("生データ値: 0x%03x, 電圧: %f V\n", result, result * conversion_factor * 2);
        sleep_ms(500);
    }
}
```

## FAQ

#### TinyUSB サブモジュールが初期化されていない; USB サポートが利用不可

**問題:**
プロジェクトをビルドする際、以下の警告が表示される場合があります:

```plaintext
TinyUSB submodule has not been initialized; USB support will be unavailable
```

**解決策:**

1. **ターミナルを開く** (Linux/macOSの場合) または **コマンドプロンプト/PowerShell/Git Bashを開く** (Windowsの場合)。
2. **Pico SDK ディレクトリに移動:**

   ```bash
   cd /path/to/your/pico-sdk
   ```

3. **サブモジュールを初期化:**

   ```bash
   git submodule update --init
   ```

これにより、プロジェクトでUSBサポートが有効になります。

## リソース

- 🔗 **[リンク]** [Raspberry Pi Pico SDK | GitHub](https://github.com/raspberrypi/pico-sdk)
- 📄 **[PDF]** [Raspberry Pi Picoシリーズ C/C++ SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf) - SDK APIを記載した書籍
- 📄 **[PDF]** [Raspberry Pi Picoシリーズの始め方](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf) - Raspberry Pi公式ドキュメント
- 📽️ **[ビデオ]** [Raspberry Pi PicoとRP2040の紹介](https://www.youtube.com/watch?v=B5rQSoOmR5w) - チュートリアルビデオ

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>  