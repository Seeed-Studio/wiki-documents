---
description: XIAO ESP32S3(Sense) と FreeRTOS
title: XIAO ESP32S3(Sense) と FreeRTOS
keywords:
  - ソフトウェア
  - FreeRtos
  - sd
  - カメラ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /xiao-esp32s3-freertos
last_update:
  date: 09/14/2024
  author: Priyanshu Roy
createdAt: '2024-08-05'
updatedAt: '2026-01-21'
url: https://wiki.seeedstudio.com/ja/xiao-esp32s3-freertos/
---

# XIAO ESP32S3(Sense) と FreeRTOS

このWikiでは、[Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/) に対する [FreeRTOS](https://freertos.org/) のサポートについて説明します。このガイドに従うことで、ボードで利用可能な機能セットを活用できるようになります。

## [FreeRTOS](https://www.freertos.org/index.html) とは

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/1.png" alt="pir" width={600} height="auto" /></p>

FreeRTOS は、リアルタイムカーネルと補完的な機能を実装する一連のモジュラーライブラリから構成される C ライブラリ群です。FreeRTOS カーネルはリアルタイムカーネル（またはリアルタイムスケジューラ）であり、FreeRTOS 上に構築されたアプリケーションが厳密なリアルタイム要件を満たせるようにします。これにより、アプリケーションを独立した複数の実行スレッドの集合として構成することができます。

_参考 : [**Mastering the FreeRTOS Real Time Kernel**](https://www.freertos.org/Documentation/02-Kernel/07-Books-and-manual/01-RTOS_book)_

## FreeRTOS ポート

FreeRTOS はオープンソースの RTOS（リアルタイムオペレーティングシステム）カーネルであり、ESP-IDF にコンポーネントとして統合されています。そのため、すべての ESP-IDF アプリケーションおよび多くの ESP-IDF コンポーネントは FreeRTOS をベースに記述されています。FreeRTOS カーネルは、ESP チップで利用可能なすべてのアーキテクチャ（Xtensa および RISC-V）に移植されています。

ここでは FreeRTOS の ESP-IDF ポートを使用します。

## ハードウェアの準備

[Seed Studio XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/) と、オンボードのカメラ、マイク、SD カードリーダー、および ESP32S3 の WiFi 機能を使用します。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3(Sense)</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 追加コンポーネント

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C ディスプレイ、RTC、ボタン
- [Air Quality Sensor v1.3](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-v1-3-Arduino-Compatible.html)
- [Grove - Temperature, Humidity, Pressure and Gas Sensor for Arduino - BME680](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)
- [Acrylic Case for Seeed Studio XIAO Expansion board](https://www.seeedstudio.com/XIAO-p-4812.html)

## ソフトウェアの準備

ここでは ESP-IDF を使用した Visual Studio Code（Windows）を使用します。

1. VSCode のインストール
2. ESP-IDF インストールガイド
3. Git リポジトリ

<div class="table-center">
  <table align="center">
    <tr>
        <th>VS Code</th>
        <th>VSCode 用 ESP-IDF</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> VSCode をダウンロード⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/tutorial/install.md" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> ESP-IDF インストール ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 入門ガイド

### ESP-IDF のセットアップ

[Visual Studio Extension](https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/tutorial/install.md) をセットアップしたら、ターミナルを開き、以下のコマンドを貼り付けて、通常のターミナル環境（VScode の外）から ESP-IDF コマンドラインツールにアクセスできるようにします。

:::note
VS-Code の [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html) 拡張機能の通常のインストールは、90% のユースケースをカバーします。ESP コマンドラインツールを環境の外で使用する必要がある場合にのみ、以下の手順を実行してください。
:::

PowerShell (Windows)

```shell
.$HOME\esp\v5.3\esp-idf\export.ps1
```

:::info
".$HOME\esp\v5.3\esp-idf" はユーザーごとに異なる場合があります。これはデフォルトのインストールパスです。  
お使いのデバイスでのインストールパスに置き換えてください。
:::
:::tip
毎回セットアップするのを避けるために、PowerShell を管理者モードで起動し、次のコマンドを入力します

```shell
notepad $PSHOME\Profile.ps1
```

メモ帳のインスタンスが開きます。エクスポートシェルコマンドをメモ帳に貼り付けて保存します。
PowerShell のインスタンスを開くと、次の出力に近いものが表示されるはずです。

```shell
Done! You can now compile ESP-IDF projects.
```

:::  
すべて正しく行われていれば、次のコマンド：

```shell
idf.py
```

は次のような出力を表示するはずです：

```shell
Usage: idf.py [OPTIONS] COMMAND1 [ARGS]... [COMMAND2 [ARGS]...]...

  ESP-IDF CLI build management tool. For commands that are not known to idf.py an attempt to execute it as a build
  system target will be made. Selected target: None
```

### XIAO ESP32S3 のボード設定

ESP-IDF をセットアップしたら、XIAO ESP32S3 ボードの 8MB フラッシュおよび 8MB Octal PSRAM などのハードウェア機能を活用するために、プロジェクトをボード専用に設定する必要があります。

#### ターゲットデバイスの設定

ESP-IDF プロジェクトディレクトリで、ターゲットを ESP32-S3 に設定します：

```bash
idf.py set-target esp32s3
```

#### フルビルドオプションを有効化

プロジェクトのルート `CMakeLists.txt` で、`MINIMAL_BUILD` が `OFF` に設定されていることを確認します：

```cmake
idf_build_set_property(MINIMAL_BUILD OFF)
```

これにより、menuconfig のすべての設定オプションが有効になります。

#### フラッシュと PSRAM の設定

設定メニューを開きます：

```bash
idf.py menuconfig
```

**フラッシュサイズの設定：**
1. **Serial flasher config → Flash size** に移動
2. **8 MB** に設定

**PSRAM の設定：**
1. **Component config → ESP PSRAM** に移動
2. **Support for external, SPI-connected RAM** を有効化
3. **SPI RAM mode** を **Octal Mode PSRAM** に設定
4. **SPI RAM clock** を **80MHz** に設定

:::info
XIAO ESP32S3 は Quad モードではなく Octal PSRAM を使用します。8MB PSRAM を正しく動作させるには、正しいモードを選択することが重要です。
:::

#### メインコンポーネントの依存関係を更新

`/main/CMakeLists.txt` で、PSRAM と SPI フラッシュコンポーネントが含まれていることを確認します：

```cmake
idf_component_register(
    SRCS "main.c"
    INCLUDE_DIRS "."
    PRIV_REQUIRES esp_psram spi_flash
)
```

#### ボードピン設定コンポーネントの作成

コードをより読みやすく移植性の高いものにするために、XIAO のピン定義用の再利用可能なコンポーネントを作成します：

```bash
mkdir -p ./components/board_config/include/
```

`./components/board_config/include/xiao_pins.h` を作成します：

```c
// xiao_pins.h
#pragma once

#ifdef __cplusplus
extern "C" {
#endif

// Analog / Digital Pins
#define XIAO_D0     1
#define XIAO_D1     2
#define XIAO_D2     3
#define XIAO_D3     4
#define XIAO_D4     5
#define XIAO_D5     6
#define XIAO_D6     43
#define XIAO_D7     44
#define XIAO_D8     7
#define XIAO_D9     8
#define XIAO_D10    9

// Onboard User LED (Active Low)
#define XIAO_LED    21

// I2C Pins (Default)
#define XIAO_SDA    5   // Same as D4
#define XIAO_SCL    6   // Same as D5

// SPI Pins (Default)
#define XIAO_MISO   9   // Same as D10
#define XIAO_MOSI   10
#define XIAO_SCK    8   // Same as D9
#define XIAO_SS     7   // Same as D8

#ifdef __cplusplus
}
#endif
```

`./components/board_config/CMakeLists.txt` を作成します：

```cmake
idf_component_register(INCLUDE_DIRS "include")
```

:::tip
これらのピン定義は XIAO ESP32S3 ボード上のシルク印刷ラベルと一致しているため、コードがより読みやすくなります。たとえば、GPIO 21 をハードコードする代わりに `XIAO_LED` を使用できます。
:::

#### コード内でのピン定義の使用

メインアプリケーションまたは任意のコンポーネントで、ヘッダーをインクルードします：

```c
#include "xiao_pins.h"

void app_main(void) {
    // Example: Configure LED pin
    gpio_set_direction(XIAO_LED, GPIO_MODE_OUTPUT);
    gpio_set_level(XIAO_LED, 0);  // Turn on (active low)
}
```

#### ピンマッピングリファレンス

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=s3" target="_blank" rel="noopener noreferrer">インタラクティブなピン配置を確認</a>
</div>

![Xiao ESP32S3 ピン配置リファレンス画像](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg)

| ラベル | GPIO | 代替機能 |
|-------|------|--------------|
| D0    | 1    | ADC1_CH0     |
| D1    | 2    | ADC1_CH1     |
| D2    | 3    | ADC1_CH2     |
| D3    | 4    | ADC1_CH3     |
| D4    | 5    | ADC1_CH4, SDA |
| D5    | 6    | ADC1_CH5, SCL |
| D6    | 43   | TX           |
| D7    | 44   | RX           |
| D8    | 7    | ADC1_CH6, SS |
| D9    | 8    | ADC1_CH7, SCK |
| D10   | 9    | ADC1_CH8, MISO |

:::note
- GPIO 19 と 20 は USB D-/D+ に使用されており、再設定すべきではありません
- GPIO 21 上のオンボード LED はアクティブ LOW（0 に設定すると点灯）です
- D0〜D10 のすべてのピンは ADC1 によるアナログ入力をサポートします
:::

#### ビルドと書き込み

プロジェクトをビルドします：

```bash
idf.py build
```

XIAO ESP32-S3 に書き込みます：

```bash
idf.py -p /dev/ttyACM0 flash monitor
```

`/dev/ttyACM0` は実際のシリアルポートに置き換えてください（Windows では通常 `COM3`、`COM4` など）。

#### ボード設定のトラブルシューティング

**PSRAM が検出されない場合：**
- Quad ではなく Octal モードが選択されていることを確認する
- フラッシュサイズが 8MB に設定されていることを確認する
- ESP-IDF のバージョンが 4.4 以降であることを確認する

**書き込みに失敗する場合：**
- USB を接続している間、BOOT ボタンを押し続ける
- 書き込み速度を下げてみる：`idf.py -p PORT -b 115200 flash`

**ピンの競合:**
- GPIO ピン 19 および 20（USB D- と D+）の使用は避けてください
- XIAO_LED（GPIO 21）はオンボード LED と共有されています

## タスクとは？

タスクとは、プロセッサーに対して一連の設定とともに実行を要求される、小さな関数／ジョブのことです。タスクは小さな関数から無限ループする関数まで、さまざまなものがあります。  
タスクは ESP-IDF アプリケーションにおける実行の基本単位です。本質的には、他のタスクと同時並行で動作する関数です。これにより、効率的なマルチタスク処理と高い応答性が実現されます。

### タスクのプロパティとは？

このトピックは非常に広範であるため、このガイドで使用する一部のプロパティのみを取り上げます。

- **TaskFunction**: タスクの実際のロジックを含む関数です。タスク実行のエントリーポイントとなります。
- **StackSize**: タスクのスタックに割り当てられるメモリ量を指定します。スタックはローカル変数、関数の戻りアドレス、一時データを格納するために使用されます。
- **TaskPriority**: 他のタスクと比較した際の、このタスクの相対的な重要度を決定します。優先度の高いタスクは、優先度の低いタスクよりも先に実行される可能性が高くなります。
- **TaskParameters**: タスク生成時にタスク関数へ渡すことができる任意の引数です。タスクに追加のコンテキストや設定を提供するために使用できます。
- **CoreAffinity**: タスクをどの CPU コアに割り当てるかを指定します。マルチコアシステムでは、これを利用して性能の最適化や負荷分散を行うことができます。

### タスクの作成

FreeRTOS でタスクを作成するには、`xTaskCreate` 関数を使用します。この関数は、タスク関数、タスク名、スタックサイズ、パラメータ、優先度、作成されたタスクのハンドルなど、複数の引数を取ります。

```c
TaskHandle_t task;
xTaskCreate(
        taskFunction,             /* Function that implements the task. */
        "taskName",               /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, or bytes. */
        NULL,                     /* Parameter passed into the task. */
        tskIDLE_PRIORITY,         /* Priority at which the task is created. */
        &task                     /* Used to pass out the created task's handle. */
        );
```

### コアにピン留めされたタスクの作成

タスクを作成して特定のコアにピン留めするには（使用しているチップがデュアルコアの場合のみ）、`xTaskCreatePinnedToCore` 関数を使用します。この関数は `xTaskCreate` と似ていますが、どのコアを使用するかを指定するための追加パラメータが含まれます。

```c
TaskHandle_t task;
xTaskCreatePinnedToCore(
        taskFunction,             /* Function that implements the task. */
        "taskName",               /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, or bytes. */
        NULL,                     /* Parameter passed into the task. */
        tskIDLE_PRIORITY,         /* Priority at which the task is created. */
        &task,                    /* Used to pass out the created task's handle. */
        0);                       /* Core ID */
```

### タスク関数の呼び出し

タスク関数は、タスクによって実際に実行されるコードです。

```c
void taskFunction(void * pvParameters) {
  /*
  Function definition goes here
  */
}
```

## タスクの可視化

FreeRTOS がどのように動作するかを可視化するために、4 つのシンプルなタスクを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/2.png" alt="pir" width={700} height="auto" /></p>

### 視覚的な表現

```shell
CPU0
-----
taskFunction1 (1000ms delay)

CPU1
-----
taskFunction2 (500ms delay)
taskFunction3 (500ms delay)
taskFunction4 (500ms delay)
```

### コード

```c
#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "sdkconfig.h"
#include "esp_log.h"

TaskHandle_t task1,task2,task3,task4;

void taskFunction1(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task1", "Hello from task 1");
        vTaskDelay(pdMS_TO_TICKS(1000)); // Add a delay to avoid overwhelming the output
    }
}

void taskFunction2(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task2", "Hello from task 2");
        vTaskDelay(pdMS_TO_TICKS(500)); // Add a delay to avoid overwhelming the output
    }
}

void taskFunction3(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task3", "Hello from task 3");
        vTaskDelay(pdMS_TO_TICKS(500)); // Add a delay to avoid overwhelming the output
    }
}

void taskFunction4(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task4", "Hello from task 4");
        vTaskDelay(pdMS_TO_TICKS(500)); // Add a delay to avoid overwhelming the output
    }
}

void app_main(void) {
    xTaskCreatePinnedToCore(
        taskFunction1, /* Function that implements the task. */
        "task_1",        /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, not bytes. */
        NULL,            /* Parameter passed into the task. */
        tskIDLE_PRIORITY, /* Priority at which the task is created. */
        &task1,         /* Used to pass out the created task's handle. */
        0);              /* Core ID */

    xTaskCreatePinnedToCore(
        taskFunction2, /* Function that implements the task. */
        "task_2",        /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, not bytes. */
        NULL,            /* Parameter passed into the task. */
        tskIDLE_PRIORITY, /* Priority at which the task is created. */
        &task2,         /* Used to pass out the created task's handle. */
        1);              /* Core ID */

    xTaskCreatePinnedToCore(
        taskFunction3, /* Function that implements the task. */
        "task_3",        /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, not bytes. */
        NULL,            /* Parameter passed into the task. */
        tskIDLE_PRIORITY, /* Priority at which the task is created. */
        &task3,         /* Used to pass out the created task's handle. */
        1);              /* Core ID */

    xTaskCreatePinnedToCore(
        taskFunction4, /* Function that implements the task. */
        "task_4",        /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, not bytes. */
        NULL,            /* Parameter passed into the task. */
        tskIDLE_PRIORITY, /* Priority at which the task is created. */
        &task4,         /* Used to pass out the created task's handle. */
        1);              /* Core ID */
}
```

:::tip
`configMINIMAL_STACK_SIZE` は `sdkconfig` で変更できます。
:::

1. 4 つのタスク: コードでは `taskFunction1`、`taskFunction2`、`taskFunction3`、`taskFunction4` の 4 つのタスクを定義しています。
2. タスク優先度: すべてのタスクは `tskIDLE_PRIORITY` で作成されています。つまり、同じ優先度を持ちます。
3. タスクのピン留め: `taskFunction1` は CPU0 にピン留めされ、他の 3 つのタスクは CPU1 にピン留めされています。
4. タスクのディレイ: `taskFunction1` のディレイは 1000ms で、他の 3 つは 500ms です。

### CPU0 と CPU1 のタスクスケジュールの作成

CPU0 と CPU1 用に基本的なタスクスケジュールを作成しました。

#### CPU0 タスクスケジュール

```shell
Task: taskFunction1
Priority: Idle (lowest)
Delay: 1000ms
Core: 0
```

#### CPU1 タスクスケジュール

```shell
Tasks: taskFunction2, taskFunction3, taskFunction4
Priorities: All Idle (same priority)
Delays: 500ms for all tasks
Core: 1
```

:::info
これは単純化したスケジュールです。実際のリアルタイムシステムでのタスクスケジューリングには、タスクの優先度、締め切り、リソース制約など、より複雑な要素が関係します。
:::

<details>

<summary> Output</summary>

```shell
I (11412) Task1: Hello from task 1
I (11522) Task3: Hello from task 3
I (11522) Task2: Hello from task 2
I (11532) Task4: Hello from task 4
I (12032) Task3: Hello from task 3
I (12032) Task2: Hello from task 2
I (12042) Task4: Hello from task 4
I (12422) Task1: Hello from task 1
I (12542) Task3: Hello from task 3
I (12542) Task2: Hello from task 2
I (12552) Task4: Hello from task 4
I (13052) Task3: Hello from task 3
I (13052) Task2: Hello from task 2
I (13062) Task4: Hello from task 4
I (13432) Task1: Hello from task 1
I (13562) Task3: Hello from task 3
I (13562) Task2: Hello from task 2
I (13572) Task4: Hello from task 4
I (14072) Task3: Hello from task 3
I (14072) Task2: Hello from task 2
I (14082) Task4: Hello from task 4
```

</details>

## FreeRTOS を使用したセンサーのポーリング

ここでは、アナログセンサー [Air Quality Sensor v1.3](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-v1-3-Arduino-Compatible.html) と ESP_IDF_v5.3 を使用します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Priyanshu0901/Air_quality_Sensor_ESP-IDF.git" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### ハードウェアセットアップ

Xiao-S3 を [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) に取り付け、[Air Quality Sensor v1.3](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-v1-3-Arduino-Compatible.html) をアナログコネクタに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/3.jpg" alt="pir" width={600} height="auto" /></p>

### ソフトウェアセットアップ

git リポジトリを取得したら、VSCode でフォルダを開きます。View->Command Palette->ESP-IDF: Add vscode Configuration Folder に進みます。
下部パネルから正しい COM ポートとチップ（ESP-S3）を選択し、build、flash、monitor を実行します。

### コード概要

このコードは、センサから空気質データを収集し、生データを処理して空気質レベルを判定し、その結果を一定間隔でコンソールに出力するように設計されています。

#### 主なコンポーネント

- センサ初期化：

```c
air_quality_sensor_t air_quality_sensor;

void sensor_setup()
{
    air_quality_sensor._io_num = ADC_CHANNEL_0;
    air_quality_sensor._adc_num = ADC_UNIT_1;
    printf("Starting Air Quality Sensor...\n");
    if(!initialize_air_quality_sensor(&air_quality_sensor))
    {
        printf("Sensor ready.\n");
    }
    else{
        printf("Sensor ERROR!\n");
    }
}
```

- sensor_setup() 関数は、センサの I/O ピンと ADC ユニットを設定します。
- initialize_air_quality_sensor() を使用してセンサの初期化を試みます。
- 初期化が成功すると、センサはデータ収集の準備が整います。

- データ収集タスク：

```c
void poll_read_air_quality_sensor(void *pvParameters)
{
    for (;;)
    {
        air_quality_sensor_slope(&air_quality_sensor);
        vTaskDelay(500 / portTICK_PERIOD_MS);
    }
}
```

- poll_read_air_quality_sensor() タスクは、センサから生データを連続的に読み取るために作成されます。
- air_quality_sensor_slope() を呼び出して生データを処理し、空気質の指標となる傾きを計算します。
- タスクは次のデータポイントを読み取る前に 500 ミリ秒待機します。

- データ出力タスク：

```c

void print_read_air_quality_sensor(void *pvParameters)
{
    for (;;)
    {
        char buf[40];
        air_quality_error_to_message(air_quality_sensor._air_quality,buf);
        printf("Time : %lu\tSlope : %d\tRaw Value : %d\n%s\n", (uint32_t)esp_timer_get_time() / 1000, air_quality_sensor._air_quality, air_quality_sensor._sensor_raw_value,buf);
        vTaskDelay(1000 / portTICK_PERIOD_MS);
    }
}
```

- print_read_air_quality_sensor() タスクは、収集したデータと計算された空気質を定期的に出力するために作成されます。
- air_quality_error_to_message() を使用して、現在時刻、傾き、生の値、および空気質メッセージを取得します。
- タスクはデータを整形してコンソールに出力します。
- タスクは次のデータポイントを出力する前に 1000 ミリ秒待機します。

```c

void app_main(void)
{
    sensor_setup();
    xTaskCreatePinnedToCore(
        poll_read_air_quality_sensor,   /* Function that implements the task. */
        "poll_read_air_quality_sensor", /* Text name for the task. */
        configMINIMAL_STACK_SIZE * 2,   /* Stack size in words, not bytes. */
        NULL,                           /* Parameter passed into the task. */
        tskIDLE_PRIORITY,               /* Priority at which the task is created. */
        NULL,                           /* Used to pass out the created task's handle. */
        0);                             /* Core ID */

    xTaskCreatePinnedToCore(
        print_read_air_quality_sensor,   /* Function that implements the task. */
        "print_read_air_quality_sensor", /* Text name for the task. */
        configMINIMAL_STACK_SIZE * 2,    /* Stack size in words, not bytes. */
        NULL,                            /* Parameter passed into the task. */
        tskIDLE_PRIORITY + 1,            /* Priority at which the task is created. */
        NULL,                            /* Used to pass out the created task's handle. */
        0);                              /* Core ID */
}
```

### 出力

```shell
Time : 37207    Slope : 3       Raw Value : 273
Fresh air.
Time : 38217    Slope : 3       Raw Value : 269
Fresh air.
Time : 39227    Slope : 3       Raw Value : 274
Fresh air.
Time : 40237    Slope : 3       Raw Value : 251
Fresh air.
Time : 41247    Slope : 3       Raw Value : 276
Fresh air.
Time : 42257    Slope : 3       Raw Value : 250
Fresh air.
Time : 43267    Slope : 3       Raw Value : 236
Fresh air.
Time : 44277    Slope : 3       Raw Value : 253
Fresh air.
Time : 45287    Slope : 3       Raw Value : 245
Fresh air.
Time : 46297    Slope : 3       Raw Value : 249
Fresh air.
Time : 47307    Slope : 3       Raw Value : 244
Fresh air.
Time : 48317    Slope : 3       Raw Value : 235
Fresh air.
Time : 49327    Slope : 3       Raw Value : 239
Fresh air.
Time : 50337    Slope : 3       Raw Value : 233
Fresh air.
Time : 51347    Slope : 3       Raw Value : 235
Fresh air.
```

## FreeRTOS におけるカメラと SdCard の使用

ここでは、ESP_IDF_v5.3 とともにオンボードの Camera と SdCard を使用します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Priyanshu0901/Camera-and-SdCard-FreeRTOS.git" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### ハードウェアセットアップ

[microSD card guide](https://wiki.seeedstudio.com/ja/xiao_esp32s3_sense_filesystem/) と [camera guide](https://wiki.seeedstudio.com/ja/xiao_esp32s3_camera_usage/) に従って、カメラと microSD カード拡張ボードを接続します

- microSD カードをフォーマットします（32Gb までサポート）
- microSD カードを拡張ボードに取り付けます

セットアップは次のような見た目になります：

<div class="table-center">
  <table align="center">
    <tr>
        <th>Front</th>
        <th>Back</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/6.jpeg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/7.jpeg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

### ソフトウェアセットアップ

git リポジトリを取得したら、VSCode でフォルダを開きます。View->Command Palette->ESP-IDF: Add vscode Configuration Folder に進みます。
下部パネルから正しい COM ポートとチップ（ESP-S3）を選択し、build、flash、monitor を実行します。

:::tip
OV3660 モデルを使用している場合は、それを駆動できるように IDF で設定する必要があります。ターミナルに **"idf.py menuconfig"** と入力してください
:::

<div class="table-center">
  <table align="center">
    <tr>
        <th>Step 1</th>
        <th>Step 2</th>
        <th>Step 3</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/36601.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/36602.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/36603.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

### カメラコンポーネント

- カメラ設定：
  - 各種カメラ機能（PWDN、RESET、XCLK、SIOD、SIOC、Y9-Y2、VSYNC、HREF、PCLK、LED）に使用される GPIO ピンを定義します。
  - カメラパラメータのデフォルト値（クロック周波数、フレームバッファ位置、ピクセルフォーマット、フレームサイズ、JPEG 品質、フレームバッファ数、グラブモードなど）を設定します。

```c
#ifndef CAMERA_CONFIG_H
#define CAMERA_CONFIG_H

#define PWDN_GPIO_NUM     -1
#define RESET_GPIO_NUM    -1
#define XCLK_GPIO_NUM     10
#define SIOD_GPIO_NUM     40
#define SIOC_GPIO_NUM     39

#define Y9_GPIO_NUM       48
#define Y8_GPIO_NUM       11
#define Y7_GPIO_NUM       12
#define Y6_GPIO_NUM       14
#define Y5_GPIO_NUM       16
#define Y4_GPIO_NUM       18
#define Y3_GPIO_NUM       17
#define Y2_GPIO_NUM       15
#define VSYNC_GPIO_NUM    38
#define HREF_GPIO_NUM     47
#define PCLK_GPIO_NUM     13

#define LED_GPIO_NUM      21

#endif //CAMERA_CONFIG_H
```

- カメラインターフェース：  
  initialize_camera() と createCameraTask() 関数を宣言します。

- カメラ実装：

  - 定義された設定を使用してカメラを初期化します。

  ```c
  void initialize_camera(void)
  {
    camera_config_t camera_config = {
        .pin_pwdn = PWDN_GPIO_NUM,
        .pin_reset = RESET_GPIO_NUM,
        .pin_xclk = XCLK_GPIO_NUM,
        .pin_sccb_sda = SIOD_GPIO_NUM,
        .pin_sccb_scl = SIOC_GPIO_NUM,
        .pin_d7 = Y9_GPIO_NUM,
        .pin_d6 = Y8_GPIO_NUM,
        .pin_d5 = Y7_GPIO_NUM,
        .pin_d4 = Y6_GPIO_NUM,
        .pin_d3 = Y5_GPIO_NUM,
        .pin_d2 = Y4_GPIO_NUM,
        .pin_d1 = Y3_GPIO_NUM,
        .pin_d0 = Y2_GPIO_NUM,
        .pin_vsync = VSYNC_GPIO_NUM,
        .pin_href = HREF_GPIO_NUM,
        .pin_pclk = PCLK_GPIO_NUM,

        .xclk_freq_hz = 20000000,          // The clock frequency of the image sensor
        .fb_location = CAMERA_FB_IN_PSRAM, // Set the frame buffer storage location
        .pixel_format = PIXFORMAT_JPEG,    // The pixel format of the image: PIXFORMAT_ + YUV422|GRAYSCALE|RGB565|JPEG
        .frame_size = FRAMESIZE_UXGA,      // The resolution size of the image: FRAMESIZE_ + QVGA|CIF|VGA|SVGA|XGA|SXGA|UXGA
        .jpeg_quality = 15,                // The quality of the JPEG image, ranging from 0 to 63.
        .fb_count = 2,                     // The number of frame buffers to use.
        .grab_mode = CAMERA_GRAB_LATEST    //  The image capture mode.
    };

    esp_err_t ret = esp_camera_init(&camera_config);
    if (ret == ESP_OK)
    {
        ESP_LOGI(cameraTag, "Camera configured successful");
    }
    else
    {
        ESP_LOGI(cameraTag, "Camera configured unsuccessful");
        return;
    }
  }
  ```

  - カメラパラメータ（明るさ、コントラスト、彩度、特殊効果、ホワイトバランス、露出制御、AEC、AE レベル、AEC 値、ゲイン制御、AGC ゲイン、ゲイン上限、BPC、WPC、raw GMA、LENC、hmirror、vflip、DCW、カラーバー）を設定します。

  ```c
  sensor_t *s = esp_camera_sensor_get();

    s->set_brightness(s, 0);                 // -2 to 2
    s->set_contrast(s, 0);                   // -2 to 2
    s->set_saturation(s, 0);                 // -2 to 2
    s->set_special_effect(s, 0);             // 0 to 6 (0 - No Effect, 1 - Negative, 2 - Grayscale, 3 - Red Tint, 4 - Green Tint, 5 - Blue Tint, 6 - Sepia)
    s->set_whitebal(s, 1);                   // 0 = disable , 1 = enable
    s->set_awb_gain(s, 1);                   // 0 = disable , 1 = enable
    s->set_wb_mode(s, 0);                    // 0 to 4 - if awb_gain enabled (0 - Auto, 1 - Sunny, 2 - Cloudy, 3 - Office, 4 - Home)
    s->set_exposure_ctrl(s, 1);              // 0 = disable , 1 = enable
    s->set_aec2(s, 0);                       // 0 = disable , 1 = enable
    s->set_ae_level(s, 0);                   // -2 to 2
    s->set_aec_value(s, 300);                // 0 to 1200
    s->set_gain_ctrl(s, 1);                  // 0 = disable , 1 = enable
    s->set_agc_gain(s, 0);                   // 0 to 30
    s->set_gainceiling(s, (gainceiling_t)0); // 0 to 6
    s->set_bpc(s, 0);                        // 0 = disable , 1 = enable
    s->set_wpc(s, 1);                        // 0 = disable , 1 = enable
    s->set_raw_gma(s, 1);                    // 0 = disable , 1 = enable
    s->set_lenc(s, 1);                       // 0 = disable , 1 = enable
    s->set_hmirror(s, 0);                    // 0 = disable , 1 = enable
    s->set_vflip(s, 0);                      // 0 = disable , 1 = enable
    s->set_dcw(s, 1);                        // 0 = disable , 1 = enable
    s->set_colorbar(s, 0);                   // 0 = disable , 1 = enable
  ```

  - 画像をキャプチャして SD カードに保存する関数 takePicture() を定義します。

  ```c
  void takePicture()
  {
    ESP_LOGI(cameraTag, "Taking picture...");
    camera_fb_t *pic = esp_camera_fb_get();

    if (pic)
    {
        saveJpegToSdcard(pic);
    }

    ESP_LOGI(cameraTag, "Picture taken! Its size was: %zu bytes", pic->len);

    esp_camera_fb_return(pic);
  }
  ```

  - 5 秒ごとに連続して写真を撮影するタスク cameraTakePicture_5_sec() を作成します。

  ```c
  void cameraTakePicture_5_sec(void *pvParameters)
  {
      for (;;)
      {
          takePicture();
          vTaskDelay(5000 / portTICK_PERIOD_MS);
      }
  }

  void createCameraTask()
  {
      TaskHandle_t task;
      xTaskCreate(
          cameraTakePicture_5_sec,      /* Function that implements the task. */
          "cameraTakePicture_5_sec",    /* Text name for the task. */
          configMINIMAL_STACK_SIZE * 4, /* Stack size in words, or bytes. */
          NULL,                         /* Parameter passed into the task. */
          tskIDLE_PRIORITY,             /* Priority at which the task is created. */
          &task                         /* Used to pass out the created task's handle. */
      );
  }
  ```

Code Structure:

- ヘッダーファイル（camera_config.h、camera_interface.h）と実装ファイル（camera_interface.c）。
- camera_config.h ファイルはカメラの設定パラメータを定義します。
- camera_interface.h ファイルはカメラの初期化およびタスク作成用の関数を宣言します。
- camera_interface.c ファイルはカメラの初期化、撮影、およびタスク作成ロジックを実装します。

### SdCard コンポーネント

- SD カード設定:  
  SD カードインターフェースで使用する GPIO ピン（MISO、MOSI、CLK、CS）を定義します。

```c
#ifndef SDCARD_CONFIG_H
#define SDCARD_CONFIG_H

#define PIN_NUM_MISO  GPIO_NUM_8
#define PIN_NUM_MOSI  GPIO_NUM_9
#define PIN_NUM_CLK   GPIO_NUM_7
#define PIN_NUM_CS    GPIO_NUM_21

#endif //SDCARD_CONFIG_H
```

- SD カードインターフェース:  
  initialize_sdcard(), deinitialize_sdcard(), saveJpegToSdcard() 関数を宣言します。

```c
#ifndef SDCARD_INTERFACE_H
#define SDCARD_INTERFACE_H

#include "esp_camera.h"

void initialize_sdcard(void);
void deinitialize_sdcard();
void saveJpegToSdcard(camera_fb_t *);

#endif //SDCARD_INTERFACE_H
```

- SD カード実装:

  - 定義された設定を使用して SD カードを初期化し、SD カードを FAT ファイルシステムとしてマウントします。

  ```c
  sdmmc_card_t *card;
  sdmmc_host_t host = SDSPI_HOST_DEFAULT();
  const char mount_point[] = "/sd";

  void initialize_sdcard()
  {
      esp_err_t ret;

      // If format_if_mount_failed is set to true, SD card will be partitioned and
      // formatted in case when mounting fails.
      esp_vfs_fat_sdmmc_mount_config_t mount_config = {
  #ifdef FORMAT_IF_MOUNT_FAILED
          .format_if_mount_failed = true,
  #else
          .format_if_mount_failed = false,
  #endif // EXAMPLE_FORMAT_IF_MOUNT_FAILED
          .max_files = 5,
          .allocation_unit_size = 32 * 1024};

      ESP_LOGI(sdcardTag, "Initializing SD card");

      // Use settings defined above to initialize SD card and mount FAT filesystem.
      // Note: esp_vfs_fat_sdmmc/sdspi_mount is all-in-one convenience functions.
      // Please check its source code and implement error recovery when developing
      // production applications.
      ESP_LOGI(sdcardTag, "Using SPI peripheral");

      // By default, SD card frequency is initialized to SDMMC_FREQ_DEFAULT (20MHz)
      // For setting a specific frequency, use host.max_freq_khz (range 400kHz - 20MHz for SDSPI)
      spi_bus_config_t bus_cfg = {
          .mosi_io_num = PIN_NUM_MOSI,
          .miso_io_num = PIN_NUM_MISO,
          .sclk_io_num = PIN_NUM_CLK,
          .quadwp_io_num = -1,
          .quadhd_io_num = -1,
          .max_transfer_sz = host.max_freq_khz,
      };
      ret = spi_bus_initialize(host.slot, &bus_cfg, SDSPI_DEFAULT_DMA);
      if (ret != ESP_OK)
      {
          ESP_LOGE(sdcardTag, "Failed to initialize bus.");
          return;
      }

      // This initializes the slot without card detect (CD) and write protect (WP) signals.
      // Modify slot_config.gpio_cd and slot_config.gpio_wp if your board has these signals.
      sdspi_device_config_t slot_config = SDSPI_DEVICE_CONFIG_DEFAULT();
      slot_config.gpio_cs = PIN_NUM_CS;
      slot_config.host_id = host.slot;

      ESP_LOGI(sdcardTag, "Mounting filesystem");
      ret = esp_vfs_fat_sdspi_mount(mount_point, &host, &slot_config, &mount_config, &card);

      if (ret != ESP_OK)
      {
          if (ret == ESP_FAIL)
          {
              ESP_LOGE(sdcardTag, "Failed to mount filesystem. "
                                  "If you want the card to be formatted, set the FORMAT_IF_MOUNT_FAILED in sdcard_config.h");
          }
          else
          {
              ESP_LOGE(sdcardTag, "Failed to initialize the card (%s). "
                                  "Make sure SD card lines have pull-up resistors in place.",
                      esp_err_to_name(ret));
          }
          return;
      }
      ESP_LOGI(sdcardTag, "Filesystem mounted");

      // Card has been initialized, print its properties
      sdmmc_card_print_info(stdout, card);

      // Format FATFS
  #ifdef FORMAT_SD_CARD
      ret = esp_vfs_fat_sdcard_format(mount_point, card);
      if (ret != ESP_OK)
      {
          ESP_LOGE(sdcardTag, "Failed to format FATFS (%s)", esp_err_to_name(ret));
          return;
      }

      if (stat(file_foo, &st) == 0)
      {
          ESP_LOGI(sdcardTag, "file still exists");
          return;
      }
      else
      {
          ESP_LOGI(sdcardTag, "file doesnt exist, format done");
      }
  #endif // CONFIG_EXAMPLE_FORMAT_SD_CARD
  }
  ```

  - JPEG 画像を SD カードに保存する関数を提供します。

  ```c
  uint16_t lastKnownFile = 0;

  void saveJpegToSdcard(camera_fb_t *captureImage)
  {
    // Find the next available filename
    char filename[32];

    sprintf(filename, "%s/%u_img.jpg", mount_point, lastKnownFile++);

    // Create the file and write the JPEG data
    FILE *fp = fopen(filename, "wb");
    if (fp != NULL)
    {
        fwrite(captureImage->buf, 1, captureImage->len, fp);
        fclose(fp);
        ESP_LOGI(sdcardTag, "JPEG saved as %s", filename);
    }
    else
    {
        ESP_LOGE(sdcardTag, "Failed to create file: %s", filename);
    }
  }
  ```

Component Structure:

- ヘッダーファイル（sdcard_config.h、sdcard_interface.h）と実装ファイル（sdcard_interface.c）。
- sdcard_config.h ファイルは SD カードの設定パラメータを定義します。
- sdcard_interface.h ファイルは SD カードの初期化、非初期化、および画像保存用の関数を宣言します。
- sdcard_interface.c ファイルは SD カードの初期化、非初期化、および画像保存ロジックを実装します。

### メイン関数

```c
// main.c
#include <stdio.h>
#include "camera_interface.h"
#include "sdcard_interface.h"

void initialize_drivers()
{
    initialize_sdcard();
    initialize_camera();
}

void start_tasks()
{
    createCameraTask();
}

void app_main(void)
{
    initialize_drivers();
    start_tasks();
}
```

- カメラおよび SD カードインターフェースに必要なヘッダーファイルをインクルードします。
- 提供された関数を使用して SD カードとカメラの両方を初期化します。
- カメラタスクを開始して、連続的に写真を撮影します。

### 出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/8.gif" alt="pir" width={600} height="auto" /></p>

#### UART 出力

```shell
I (1119) main_task: Calling app_main()
I (1123) sdcard: Initializing SD card
I (1127) sdcard: Using SPI peripheral
I (1132) sdcard: Mounting filesystem
I (1137) gpio: GPIO[21]| InputEn: 0| OutputEn: 1| OpenDrain: 0| Pullup: 0| Pulldown: 0| Intr:0
I (1146) sdspi_transaction: cmd=52, R1 response: command not supported
I (1195) sdspi_transaction: cmd=5, R1 response: command not supported
I (1219) sdcard: Filesystem mounted
Name: SD32G
Type: SDHC/SDXC
Speed: 20.00 MHz (limit: 20.00 MHz)
Size: 30448MB
CSD: ver=2, sector_size=512, capacity=62357504 read_bl_len=9
SSR: bus_width=1
I (1226) s3 ll_cam: DMA Channel=1
I (1230) cam_hal: cam init ok
I (1234) sccb: pin_sda 40 pin_scl 39
I (1238) sccb: sccb_i2c_port=1
I (1252) camera: Detected camera at address=0x30
I (1255) camera: Detected OV2640 camera
I (1255) camera: Camera PID=0x26 VER=0x42 MIDL=0x7f MIDH=0xa2
I (1344) cam_hal: buffer_size: 16384, half_buffer_size: 1024, node_buffer_size: 1024, node_cnt: 16, total_cnt: 375
I (1344) cam_hal: Allocating 384000 Byte frame buffer in PSRAM
I (1351) cam_hal: Allocating 384000 Byte frame buffer in PSRAM
I (1357) cam_hal: cam config ok
I (1361) ov2640: Set PLL: clk_2x: 0, clk_div: 0, pclk_auto: 0, pclk_div: 12
I (1453) camera: Camera configured successful
I (1487) main_task: Returned from app_main()
I (1487) camera: Taking picture...
I (1997) sdcard: JPEG saved as /sd/0_img.jpg
I (1997) camera: Picture taken! Its size was: 45764 bytes
I (6997) camera: Taking picture...
I (7348) sdcard: JPEG saved as /sd/1_img.jpg
I (7349) camera: Picture taken! Its size was: 51710 bytes
I (12349) camera: Taking picture...
I (12704) sdcard: JPEG saved as /sd/2_img.jpg
I (12705) camera: Picture taken! Its size was: 51853 bytes
I (17706) camera: Taking picture...
I (18054) sdcard: JPEG saved as /sd/3_img.jpg
I (18055) camera: Picture taken! Its size was: 51919 bytes
I (23055) camera: Taking picture...
I (23414) sdcard: JPEG saved as /sd/4_img.jpg
I (23414) camera: Picture taken! Its size was: 51809 bytes
I (28415) camera: Taking picture...
I (28768) sdcard: JPEG saved as /sd/5_img.jpg
I (28768) camera: Picture taken! Its size was: 51747 bytes
I (33771) camera: Taking picture...
I (34117) sdcard: JPEG saved as /sd/6_img.jpg
I (34117) camera: Picture taken! Its size was: 51968 bytes
```

#### 出力画像

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/9.jpg" alt="pir" width={600} height="auto" /></p>

## Arduino IDE 向け FreeRtos

FreeRtos は Arduino-IDE ベースの XIAO-S3 ビルドで使用できます。ESP-IDF で使用する場合と似ていますが、1 つのコア上でのみ動作し、ESP-IDF 向けには最適化されていません。

### ハードウェアのセットアップ

Xiao-S3 を [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)（OLED ディスプレイと RTC）に接続し、[Grove - Temperature, Humidity, Pressure and Gas Sensor for Arduino - BME680](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html) を I2c バスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/4.jpg" alt="pir" width={600} height="auto" /></p>

### ソフトウェアのセットアップ

[pcf8563](https://github.com/Bill2462/PCF8563-Arduino-Library)、[U8x8lib](https://github.com/olikraus/U8g2_Arduino)、[bme680](https://github.com/Seeed-Studio/Seeed_Arduino_BME68x) ライブラリ用の Arduino ライブラリをインストールします。Arduino 用ライブラリのインストール方法については、[How to install library](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/) を参照してください。

```cpp
#include "time.h"
#include <WiFi.h>
#include <PCF8563.h>
#include <U8x8lib.h>
#include <Wire.h>
#include "seeed_bme680.h"

#define IIC_ADDR uint8_t(0x76)
Seeed_BME680 bme680(IIC_ADDR); /* IIC PROTOCOL */

// I2C communication library for the PCF8563 real-time clock
PCF8563 pcf;

// OLED display library
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/D4, /* data=*/D5, /* reset=*/U8X8_PIN_NONE);  // OLEDs without Reset of the Display

// WiFi network credentials
const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

// NTP server for time synchronization
const char* ntpServer = "pool.ntp.org";

// Timezone offset (adjust based on your location)
const long gmtOffset_sec = 5.5 * 60 * 60;  // Hours * Minutes * Seconds (here, GMT+5:30)
const int daylightOffset_sec = 0;          // No daylight saving time assumed

// Global variable to store current time information
static Time nowTime;

// Function prototypes for tasks
void printDateAndTime(void* pvParameters);
void updateTime(void* pvParameters);
void ledBlink2Hz(void* pvParameters);
void oledDisplayUpdate(void* pvParameters);
void taskBME680(void* pvParameters);

// Setup function (runs once at startup)
void setup() {

  Serial.begin(115200);  // Initialize serial communication for debugging

  // Set built-in LED pin as output for blinking
  pinMode(LED_BUILTIN, OUTPUT);

  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);  // Connect to WiFi network
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  while (!bme680.init()) {
    Serial.println("bme680 init failed ! can't find device!");
    delay(10000);
  }

  pcf.init();  // Initialize the PCF8563 real-time clock

  // Stop the clock before setting the time
  pcf.stopClock();

  // Configure time synchronization using NTP server
  configTime(gmtOffset_sec, daylightOffset_sec, ntpServer);
  static struct tm timeinfo;
  while (!getLocalTime(&timeinfo)) {
    Serial.println("no received time info ... Waiting ...");
  }

  // Set the time on the PCF8563 clock based on retrieved time
  pcf.setYear(timeinfo.tm_year);
  pcf.setMonth(timeinfo.tm_mon);
  pcf.setDay(timeinfo.tm_mday);
  pcf.setHour(timeinfo.tm_hour);
  pcf.setMinut(timeinfo.tm_min);
  pcf.setSecond(timeinfo.tm_sec);

  pcf.startClock();  // Start the clock after setting the time

  Serial.println("WiFi connected at " + WiFi.localIP());

  u8x8.begin();         // Initialize the OLED display
  u8x8.setFlipMode(1);  // Optionally rotate OLED display content

  // Create tasks for different functionalities
  xTaskCreate(
    updateTime,
    "Get LocalTime",
    configMINIMAL_STACK_SIZE * 2,
    (void*)1,
    tskIDLE_PRIORITY + 1,
    NULL);

  xTaskCreate(
    ledBlink2Hz,
    "Task 2",
    configMINIMAL_STACK_SIZE,
    (void*)1,
    tskIDLE_PRIORITY + 1,
    NULL);

  xTaskCreate(
    oledDisplayUpdate,
    "OLED Display Task",
    configMINIMAL_STACK_SIZE * 2,
    (void*)1,
    tskIDLE_PRIORITY,
    NULL);

  xTaskCreate(
    printDateAndTime,
    "Print Uart",
    configMINIMAL_STACK_SIZE * 2,
    (void*)1,
    tskIDLE_PRIORITY,
    NULL);

  xTaskCreate(
    taskBME680,
    "BME680 Sensor Poll",
    configMINIMAL_STACK_SIZE * 2,
    (void*)1,
    tskIDLE_PRIORITY + 1,
    NULL);
}

// Loop function (doesn't do anything in this case, tasks handle everything)
void loop() {
  // Nothing to do here, all work is done in the tasks
}

// Function that will run as a task: Prints current date and time to serial port
void printDateAndTime(void* pvParameters) {
  for (;;) {
    // Print current time in formatted string (DD/MM/YY\tHH:MM:SS) to serial port
    Serial.printf("%02d/%02d/%02d\t%02d:%02d:%02d\n",
                  nowTime.day, nowTime.month + 1, nowTime.year % 100,
                  nowTime.hour, nowTime.minute, nowTime.second);
    // Delay for 1 second before reading time again
    vTaskDelay(1000 / portTICK_PERIOD_MS);
  }
}

// Function that will run as a task: Reads current time from PCF8563 clock
void updateTime(void* pvParameters) {
  for (;;) {
    // Update the global `nowTime` variable with the current time from the PCF8563 clock
    nowTime = pcf.getTime();
    // Delay for 0.5 second before reading time again (can be adjusted for desired update frequency)
    vTaskDelay(500 / portTICK_PERIOD_MS);
  }
}

// Function that will run as a task: Blinks the built-in LED at 2Hz
void ledBlink2Hz(void* pvParameters) {
  bool state = true;  // Initial state for LED (on or off)
  for (;;) {
    // Set LED state (HIGH for on, LOW for off)
    digitalWrite(LED_BUILTIN, (state ? HIGH : LOW));
    // Delay for 0.5 second to create a 2Hz blinking frequency (one cycle on/off)
    vTaskDelay(500 / portTICK_PERIOD_MS);
    // Toggle LED state for the next cycle
    state = !state;
  }
}

// Function that will run as a task: Updates OLED display with date and time
void oledDisplayUpdate(void* pvParameters) {
  for (;;) {

    // Set font for the first line (date)
    u8x8.setFont(u8x8_font_chroma48medium8_r);

    // Set cursor position for the first line (centered)
    u8x8.setCursor(0, 0);

    char buffer1[12];  // Buffer to hold formatted date string
    std::snprintf(buffer1, sizeof(buffer1), "%02d/%02d/%02d",
                  nowTime.day, nowTime.month + 1, nowTime.year % 100);
    u8x8.print(buffer1);

    // Format time string (HH:MM:SS) into buffer2 using std::snprintf
    std::snprintf(buffer1, sizeof(buffer1), "%02d:%02d:%02d",
                  nowTime.hour, nowTime.minute, nowTime.second);
    // Print formatted time string to OLED display
    u8x8.print(buffer1);

    // Adjust cursor position for the second line (below the first line)
    u8x8.setCursor(0, 10);

    char buffer2[20];  // Buffer to hold formatted sensor data

    std::snprintf(buffer2, sizeof(buffer2), "T: %.1f°C", bme680.sensor_result_value.temperature);
    u8x8.print(buffer2);
    u8x8.setCursor(0, 20);

    std::snprintf(buffer2, sizeof(buffer2), "P: %.1fkPa", bme680.sensor_result_value.pressure / 1000.0);
    u8x8.print(buffer2);

    u8x8.setCursor(0, 30);

    std::snprintf(buffer2, sizeof(buffer2), "H: %.1f%%", bme680.sensor_result_value.humidity);
    u8x8.print(buffer2);

    // std::snprintf(buffer2, sizeof(buffer2), "G: %.1f Kohms", bme680.sensor_result_value.gas / 1000.0);
    // u8x8.print(buffer2);

    vTaskDelay(100 / portTICK_PERIOD_MS);  // Update every 0.1 seconds (adjust as needed)
  }
}

void taskBME680(void* pvParameters) {
  for (;;) {
    if (bme680.read_sensor_data()) {
      Serial.println("Failed to perform reading :(");
    } else {
      Serial.print("T: ");
      Serial.print(bme680.sensor_result_value.temperature, 2);
      Serial.print(" C  P: ");
      Serial.print(bme680.sensor_result_value.pressure / 1000.0, 2);
      Serial.print(" KPa  H: ");
      Serial.print(bme680.sensor_result_value.humidity, 2);
      Serial.print(" %  G: ");
      Serial.print(bme680.sensor_result_value.gas / 1000.0, 2);
      Serial.println(" Kohms");
    }

    vTaskDelay(1000 / portTICK_PERIOD_MS);
  }
}
```

### 出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/5.gif" alt="pir" width={600} height="auto" /></p>

### シリアルモニタ出力

```shell
09/09/24 03:17:20
T: 29.01 C  P: 90.86 KPa  H: 63.41 %  G: 47.41 Kohms
09/09/24 03:17:21
T: 29.03 C  P: 90.86 KPa  H: 63.34 %  G: 47.85 Kohms
```

## Arduino FreeRtos と ESP-IDF FreeRtos の比較

| 機能                    | Arduino FreeRTOS                                                | ESP-IDF FreeRTOS                                                                                                   |
| ----------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 抽象化レイヤー          | より高レベルの抽象化で、初心者にとって扱いやすい               | より低レベルの抽象化で、経験豊富なユーザーにより多くの制御を提供                                                |
| 開発環境                | Arduino IDE                                                     | ESP-IDF コマンドラインツール                                                                                      |
| 互換性                  | 主に Arduino ベースのボードと互換                              | より幅広い ESP32 および ESP32-S2 ボードと互換                                                                    |
| 機能                    | 基本的な RTOS 機能、タスク生成、スケジューリング、同期          | 包括的な RTOS 機能、タスク生成、スケジューリング、同期、イベントグループ、キュー、ミューテックス、セマフォ      |
| パフォーマンス          | 抽象化レイヤーのため、一般的にパフォーマンスは低め             | ハードウェアおよび RTOS API へ直接アクセスできるため、より高いパフォーマンス                                      |
| カスタマイズ性          | カスタマイズオプションは限定的                                 | 設定ファイルと API による幅広いカスタマイズオプション                                                             |
| 学習コスト              | 初心者にとって学びやすい                                       | コマンドラインツールや C/C++ に不慣れな人にとっては学習コストが高い                                              |
| ユースケース            | シンプルな IoT プロジェクト、プロトタイピング                  | 複雑な IoT アプリケーション、リアルタイムシステム、カスタムハードウェア                                          |

## トラブルシューティング

ハードウェア接続、ソフトウェアデバッグ、またはアップロードの過程で、いくつかの問題が発生する可能性があります。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、お客様が弊社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
