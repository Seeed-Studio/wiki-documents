---
description: XIAO ESP32S3(Sense) と FreeRTOS
title: XIAO ESP32S3(Sense) と FreeRTOS
keywords:
  - ソフトウェア
  - FreeRTOS
  - SD
  - カメラ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/xiao-esp32s3-freertos
last_update:
  date: 05/15/2025
  author: Priyanshu Roy
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32S3(Sense) と FreeRTOS

このウィキでは、[Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/) における [FreeRTOS](https://freertos.org/) のサポートについて説明します。このガイドを使用することで、ボードで利用可能な機能セットを活用できるようになります。

## [FreeRTOS](https://www.freertos.org/index.html) とは

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/1.png" alt="pir" width={600} height="auto" /></p>

FreeRTOS は、リアルタイムカーネルと補完的な機能を実装するモジュール式ライブラリ群で構成された C ライブラリのコレクションです。FreeRTOS カーネルはリアルタイムカーネル（またはリアルタイムスケジューラ）であり、FreeRTOS 上に構築されたアプリケーションが厳密なリアルタイム要件を満たすことを可能にします。これにより、アプリケーションを独立した実行スレッドのコレクションとして整理することができます。

_参考: [**Mastering the FreeRTOS Real Time Kernel**](https://www.freertos.org/Documentation/02-Kernel/07-Books-and-manual/01-RTOS_book)_

## FreeRTOS ポート

FreeRTOS はオープンソースの RTOS（リアルタイムオペレーティングシステム）カーネルであり、ESP-IDF にコンポーネントとして統合されています。そのため、すべての ESP-IDF アプリケーションおよび多くの ESP-IDF コンポーネントは FreeRTOS に基づいて記述されています。FreeRTOS カーネルは、ESP チップで利用可能なすべてのアーキテクチャ（Xtensa および RISC-V）に移植されています。

ここでは、FreeRTOS の ESP IDF ポートを使用します。

## ハードウェア準備

私は [Seeed Studio XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/) と、オンボードのカメラ、マイク、SDカードリーダー、さらに ESP32S3 の Wi-Fi 機能を使用します。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 追加コンポーネント

- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C ディスプレイ、RTC、ボタン
- [空気質センサー v1.3](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-v1-3-Arduino-Compatible.html)
- [Grove - 温度、湿度、圧力、ガスセンサー for Arduino - BME680](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)
- [Seeed Studio XIAO 拡張ボード用アクリルケース](https://www.seeedstudio.com/XIAO-p-4812.html)

## ソフトウェア準備

私は Visual Studio Code（Windows）と ESP-IDF を使用しています。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> ESP-IDF をインストール⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## はじめに

### ESP-IDF のセットアップ

[Visual Studio Extension](https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/tutorial/install.md) をセットアップした後、ターミナルを開き、以下のコマンドを貼り付けて、通常のターミナル環境（VSCode の外部）から ESP-IDF コマンドラインツールにアクセスします。

:::note
通常の [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html) 拡張機能のインストールは、90% のユースケースをカバーします。以下の手順は、環境外で ESP コマンドラインツールが必要な場合のみ実行してください。
:::

PowerShell（Windows）

```shell
.$HOME\esp\v5.3\esp-idf\export.ps1
```

:::info
".$HOME\esp\v5.3\esp-idf" はユーザーごとに異なる場合があります。これはデフォルトのインストールパスです。  
デバイス上のインストールパスに置き換えてください。
:::
:::tip
繰り返しセットアップを避けるために、PowerShell を管理者モードで起動し、以下のコマンドを入力してください。

```shell
notepad $PSHOME\Profile.ps1
```

メモ帳が開きます。エクスポートシェルコマンドをメモ帳に貼り付けて保存してください。  
PowerShell のインスタンスを開くと、以下のような出力が表示されるはずです。

```shell
Done! You can now compile ESP-IDF projects.
```

:::  
すべてが正しく行われている場合、以下のコマンド：

```shell
idf.py
```

は以下の出力を表示するはずです：

```shell
Usage: idf.py [OPTIONS] COMMAND1 [ARGS]... [COMMAND2 [ARGS]...]...

  ESP-IDF CLI build management tool. For commands that are not known to idf.py an attempt to execute it as a build
  system target will be made. Selected target: None
```

## タスクとは？

タスクとは、プロセッサが特定の設定で実行するよう要求される小さな関数やジョブのことです。タスクは小さな関数から無限ループ関数まで幅広く存在します。  
タスクは ESP-IDF アプリケーションにおける実行の基本単位です。これらは他のタスクと並行して実行される関数であり、効率的なマルチタスクと応答性を可能にします。

### タスクのプロパティとは？

このトピックは非常に広範囲にわたるため、このガイドで使用するいくつかのプロパティのみを取り上げます。

- **TaskFunction**: タスクの実際のロジックを含む関数です。タスクの実行のエントリポイントとなります。
- **StackSize**: タスクのスタックに割り当てられるメモリ量を指定します。スタックはローカル変数、関数の戻りアドレス、一時データを格納するために使用されます。
- **TaskPriority**: 他のタスクと比較したタスクの相対的な重要性を決定します。優先度が高いタスクは、優先度が低いタスクよりも先に実行される可能性が高くなります。
- **TaskParameters**: タスクが作成される際にタスク関数に渡すことができるオプションの引数です。これにより、タスクに追加のコンテキストや設定を提供できます。
- **CoreAffinity**: タスクを割り当てる CPU コアを指定します。複数のコアを持つシステムでは、これを使用してパフォーマンスを最適化したり、負荷を分散したりできます。

### タスクの作成

FreeRTOS でタスクを作成するには、xTaskCreate 関数を使用します。この関数は、タスク関数、タスク名、スタックサイズ、パラメータ、優先度、作成されたタスクのハンドルを含むいくつかのパラメータを取ります。

```c
TaskHandle_t task;
xTaskCreate(
        taskFunction,             /* タスクを実装する関数。 */
        "taskName",               /* タスクのテキスト名。 */
        configMINIMAL_STACK_SIZE, /* スタックサイズ（ワードまたはバイト）。 */
        NULL,                     /* タスクに渡されるパラメータ。 */
        tskIDLE_PRIORITY,         /* タスクが作成される優先度。 */
        &task                     /* 作成されたタスクのハンドルを渡すために使用。 */
        );
```

### コアに固定されたタスクの作成

特定のコアにタスクを固定して作成するには（使用しているチップがデュアルコアの場合のみ）、xTaskCreatePinnedToCore 関数を使用します。この関数は xTaskCreate に似ていますが、コアを指定する追加のパラメータを含みます。

```c
TaskHandle_t task;
xTaskCreatePinnedToCore(
        taskFunction,             /* タスクを実装する関数。 */
        "taskName",               /* タスクのテキスト名。 */
        configMINIMAL_STACK_SIZE, /* スタックサイズ（ワードまたはバイト）。 */
        NULL,                     /* タスクに渡されるパラメータ。 */
        tskIDLE_PRIORITY,         /* タスクが作成される優先度。 */
        &task,                    /* 作成されたタスクのハンドルを渡すために使用。 */
        0);                       /* コア ID */
```

### タスク関数の呼び出し

タスク関数は、タスクによって実行される実際のコードです。

```c
void taskFunction(void * pvParameters) {
  /*
  関数の定義はここに記述します
  */
}
```

## タスクの可視化

私は FreeRTOS の動作を視覚化するために、4つのシンプルなタスクを作成しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/2.png" alt="pir" width={700} height="auto" /></p>

### 視覚的な表現

```shell
CPU0
-----
taskFunction1 (1000ms の遅延)

CPU1
-----
taskFunction2 (500ms の遅延)
taskFunction3 (500ms の遅延)
taskFunction4 (500ms の遅延)
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
        ESP_LOGI("Task1", "タスク1からこんにちは");
        vTaskDelay(pdMS_TO_TICKS(1000)); // 出力を圧迫しないように遅延を追加
    }
}

void taskFunction2(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task2", "タスク2からこんにちは");
        vTaskDelay(pdMS_TO_TICKS(500)); // 出力を圧迫しないように遅延を追加
    }
}

void taskFunction3(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task3", "タスク3からこんにちは");
        vTaskDelay(pdMS_TO_TICKS(500)); // 出力を圧迫しないように遅延を追加
    }
}

void taskFunction4(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task4", "タスク4からこんにちは");
        vTaskDelay(pdMS_TO_TICKS(500)); // 出力を圧迫しないように遅延を追加
    }
}

void app_main(void) {
    xTaskCreatePinnedToCore(
        taskFunction1, /* タスクを実装する関数 */
        "task_1",        /* タスクの名前 */
        configMINIMAL_STACK_SIZE, /* スタックサイズ（バイトではなくワード単位） */
        NULL,            /* タスクに渡されるパラメータ */
        tskIDLE_PRIORITY, /* タスク作成時の優先度 */
        &task1,         /* 作成されたタスクのハンドルを渡すために使用 */
        0);              /* コアID */

    xTaskCreatePinnedToCore(
        taskFunction2, /* タスクを実装する関数 */
        "task_2",        /* タスクの名前 */
        configMINIMAL_STACK_SIZE, /* スタックサイズ（バイトではなくワード単位） */
        NULL,            /* タスクに渡されるパラメータ */
        tskIDLE_PRIORITY, /* タスク作成時の優先度 */
        &task2,         /* 作成されたタスクのハンドルを渡すために使用 */
        1);              /* コアID */

    xTaskCreatePinnedToCore(
        taskFunction3, /* タスクを実装する関数 */
        "task_3",        /* タスクの名前 */
        configMINIMAL_STACK_SIZE, /* スタックサイズ（バイトではなくワード単位） */
        NULL,            /* タスクに渡されるパラメータ */
        tskIDLE_PRIORITY, /* タスク作成時の優先度 */
        &task3,         /* 作成されたタスクのハンドルを渡すために使用 */
        1);              /* コアID */

    xTaskCreatePinnedToCore(
        taskFunction4, /* タスクを実装する関数 */
        "task_4",        /* タスクの名前 */
        configMINIMAL_STACK_SIZE, /* スタックサイズ（バイトではなくワード単位） */
        NULL,            /* タスクに渡されるパラメータ */
        tskIDLE_PRIORITY, /* タスク作成時の優先度 */
        &task4,         /* 作成されたタスクのハンドルを渡すために使用 */
        1);              /* コアID */
}
```

:::tip
`configMINIMAL_STACK_SIZE` は `sdkconfig` で変更可能です。
:::

1. **4つのタスク**: このコードでは、`taskFunction1`、`taskFunction2`、`taskFunction3`、`taskFunction4` の4つのタスクを定義しています。
2. **タスクの優先度**: すべてのタスクは `tskIDLE_PRIORITY` で作成されています。つまり、同じ優先度を持っています。
3. **タスクのピン留め**: `taskFunction1` は CPU0 にピン留めされ、他の3つのタスクは CPU1 にピン留めされています。
4. **タスクの遅延**: `taskFunction1` は 1000ms の遅延があり、他の3つは 500ms の遅延があります。

### CPU0 と CPU1 のタスクスケジュールの作成

CPU0 と CPU1 の基本的なタスクスケジュールを作成しました。

#### CPU0 のタスクスケジュール

```shell
タスク: taskFunction1
優先度: Idle (最も低い)
遅延: 1000ms
コア: 0
```

#### CPU1 のタスクスケジュール

```shell
タスク: taskFunction2, taskFunction3, taskFunction4
優先度: すべて Idle (同じ優先度)
遅延: すべて 500ms
コア: 1
```

:::info
これは簡略化されたスケジュールです。リアルタイムシステムでの実際のタスクスケジューリングは、タスクの優先度、締め切り、リソース制約など、より複雑な要因を含みます。
:::

<details>

<summary>出力</summary>

```shell
I (11412) Task1: タスク1からこんにちは
I (11522) Task3: タスク3からこんにちは
I (11522) Task2: タスク2からこんにちは
I (11532) Task4: タスク4からこんにちは
I (12032) Task3: タスク3からこんにちは
I (12032) Task2: タスク2からこんにちは
I (12042) Task4: タスク4からこんにちは
I (12422) Task1: タスク1からこんにちは
I (12542) Task3: タスク3からこんにちは
I (12542) Task2: タスク2からこんにちは
I (12552) Task4: タスク4からこんにちは
I (13052) Task3: タスク3からこんにちは
I (13052) Task2: タスク2からこんにちは
I (13062) Task4: タスク4からこんにちは
I (13432) Task1: タスク1からこんにちは
I (13562) Task3: タスク3からこんにちは
I (13562) Task2: タスク2からこんにちは
I (13572) Task4: タスク4からこんにちは
I (14072) Task3: タスク3からこんにちは
I (14072) Task2: タスク2からこんにちは
I (14082) Task4: タスク4からこんにちは
```

</details>

## FreeRTOS を使用したセンサーのポーリング

ここでは、ESP_IDF_v5.3 とともにアナログセンサー [Air Quality Sensor v1.3](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-v1-3-Arduino-Compatible.html) を使用します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Priyanshu0901/Air_quality_Sensor_ESP-IDF.git" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### ハードウェアセットアップ

Xiao-S3 を [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) に接続し、[Air Quality Sensor v1.3](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-v1-3-Arduino-Compatible.html) をアナログコネクタに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/3.jpg" alt="pir" width={600} height="auto" /></p>

### ソフトウェアセットアップ

Git リポジトリを取得した後、フォルダを VSCode で開きます。View->Command Palette->ESP-IDF: Add vscode Configuration Folder を選択します。
下部パネルから正しい COM ポート、チップ (ESP-S3) を選択し、ビルド、フラッシュ、モニタリングを行います。

### コード概要

このコードは、センサーから空気品質データを収集し、生データを処理して空気品質レベルを判定し、結果を定期的にコンソールに出力するよう設計されています。

#### 主なコンポーネント:

- センサーの初期化:

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

- `sensor_setup()` 関数はセンサーの I/O ピンと ADC ユニットを設定します。
- `initialize_air_quality_sensor()` を使用してセンサーの初期化を試みます。
- 初期化が成功すると、センサーはデータ収集の準備が整います。

- データ収集タスク:

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

- `poll_read_air_quality_sensor()` タスクは、センサーから生データを継続的に読み取るために作成されます。
- `air_quality_sensor_slope()` を呼び出して生データを処理し、空気品質の指標となるスロープを計算します。
- タスクは 500 ミリ秒遅延してから次のデータポイントを読み取ります。

- データ出力タスク:

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

- `print_read_air_quality_sensor()` タスクは、収集したデータと計算された空気品質を定期的に出力するために作成されます。
- 現在の時刻、スロープ、生データ値、および空気品質メッセージを `air_quality_error_to_message()` を使用して取得します。
- タスクはデータをフォーマットしてコンソールに出力します。
- タスクは 1000 ミリ秒遅延してから次のデータポイントを出力します。

```c

void app_main(void)
{
    sensor_setup();
    xTaskCreatePinnedToCore(
        poll_read_air_quality_sensor,   /* タスクを実装する関数 */
        "poll_read_air_quality_sensor", /* タスクの名前 */
        configMINIMAL_STACK_SIZE * 2,   /* スタックサイズ（ワード単位） */
        NULL,                           /* タスクに渡すパラメータ */
        tskIDLE_PRIORITY,               /* タスクの優先度 */
        NULL,                           /* 作成されたタスクのハンドルを渡すために使用 */
        0);                             /* コア ID */

    xTaskCreatePinnedToCore(
        print_read_air_quality_sensor,   /* タスクを実装する関数 */
        "print_read_air_quality_sensor", /* タスクの名前 */
        configMINIMAL_STACK_SIZE * 2,    /* スタックサイズ（ワード単位） */
        NULL,                            /* タスクに渡すパラメータ */
        tskIDLE_PRIORITY + 1,            /* タスクの優先度 */
        NULL,                            /* 作成されたタスクのハンドルを渡すために使用 */
        0);                              /* コア ID */
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

## FreeRTOSにおけるカメラとSDカードの使用

ここでは、ESP_IDF_v5.3を使用してオンボードのカメラとSDカードを利用します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Priyanshu0901/Camera-and-SdCard-FreeRTOS.git" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### ハードウェアセットアップ

カメラとmicroSDカード拡張ボードを接続するには、[microSDカードガイド](https://wiki.seeedstudio.com/ja/xiao_esp32s3_sense_filesystem/)および[カメラガイド](https://wiki.seeedstudio.com/ja/xiao_esp32s3_camera_usage/)を参照してください。

- microSDカードをフォーマット（最大32GBまで対応）
- microSDカードを拡張ボードに接続

セットアップは以下のようになります：

<div class="table-center">
  <table align="center">
    <tr>
        <th>前面</th>
        <th>背面</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/6.jpeg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/7.jpeg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

### ソフトウェアセットアップ

Gitリポジトリをクローンした後、フォルダをVSCodeで開きます。  
View -> Command Palette -> ESP-IDF: Add vscode Configuration Folder を選択します。  
下部パネルから正しいCOMポート、チップ（ESP-S3）を選択し、ビルド、フラッシュ、モニタリングを行います。

### カメラコンポーネント

- カメラ設定:
  - カメラの各機能に使用するGPIOピンを定義します（PWDN、RESET、XCLK、SIOD、SIOC、Y9-Y2、VSYNC、HREF、PCLK、LED）。
  - カメラパラメータのデフォルト値を設定します（例：クロック周波数、フレームバッファの場所、ピクセルフォーマット、フレームサイズ、JPEG品質、フレームバッファ数、キャプチャモード）。

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

- カメラインターフェース:  
  initialize_camera() および createCameraTask() 関数を宣言します。

- カメラ実装:

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

        .xclk_freq_hz = 20000000,          // イメージセンサーのクロック周波数
        .fb_location = CAMERA_FB_IN_PSRAM, // フレームバッファの保存場所を設定
        .pixel_format = PIXFORMAT_JPEG,    // イメージのピクセルフォーマット: PIXFORMAT_ + YUV422|GRAYSCALE|RGB565|JPEG
        .frame_size = FRAMESIZE_UXGA,      // イメージの解像度サイズ: FRAMESIZE_ + QVGA|CIF|VGA|SVGA|XGA|SXGA|UXGA
        .jpeg_quality = 15,                // JPEGイメージの品質（0～63）
        .fb_count = 2,                     // 使用するフレームバッファの数
        .grab_mode = CAMERA_GRAB_LATEST    // イメージキャプチャモード
    };

    esp_err_t ret = esp_camera_init(&camera_config);
    if (ret == ESP_OK)
    {
        ESP_LOGI(cameraTag, "カメラの設定に成功しました");
    }
    else
    {
        ESP_LOGI(cameraTag, "カメラの設定に失敗しました");
        return;
    }
  }
  ```

  - カメラパラメータを設定します（明るさ、コントラスト、彩度、特殊効果、ホワイトバランス、露出制御、AEC、AEレベル、AEC値、ゲイン制御、AGCゲイン、ゲイン上限、BPC、WPC、raw GMA、LENC、水平反転、垂直反転、DCW、カラーバー）。

  ```c
  sensor_t *s = esp_camera_sensor_get();

    s->set_brightness(s, 0);                 // -2 ～ 2
    s->set_contrast(s, 0);                   // -2 ～ 2
    s->set_saturation(s, 0);                 // -2 ～ 2
    s->set_special_effect(s, 0);             // 0 ～ 6 (0 - 効果なし, 1 - ネガ, 2 - グレースケール, 3 - 赤色, 4 - 緑色, 5 - 青色, 6 - セピア)
    s->set_whitebal(s, 1);                   // 0 = 無効, 1 = 有効
    s->set_awb_gain(s, 1);                   // 0 = 無効, 1 = 有効
    s->set_wb_mode(s, 0);                    // 0 ～ 4 - awb_gainが有効な場合 (0 - 自動, 1 - 晴天, 2 - 曇り, 3 - オフィス, 4 - 家庭)
    s->set_exposure_ctrl(s, 1);              // 0 = 無効, 1 = 有効
    s->set_aec2(s, 0);                       // 0 = 無効, 1 = 有効
    s->set_ae_level(s, 0);                   // -2 ～ 2
    s->set_aec_value(s, 300);                // 0 ～ 1200
    s->set_gain_ctrl(s, 1);                  // 0 = 無効, 1 = 有効
    s->set_agc_gain(s, 0);                   // 0 ～ 30
    s->set_gainceiling(s, (gainceiling_t)0); // 0 ～ 6
    s->set_bpc(s, 0);                        // 0 = 無効, 1 = 有効
    s->set_wpc(s, 1);                        // 0 = 無効, 1 = 有効
    s->set_raw_gma(s, 1);                    // 0 = 無効, 1 = 有効
    s->set_lenc(s, 1);                       // 0 = 無効, 1 = 有効
    s->set_hmirror(s, 0);                    // 0 = 無効, 1 = 有効
    s->set_vflip(s, 0);                      // 0 = 無効, 1 = 有効
    s->set_dcw(s, 1);                        // 0 = 無効, 1 = 有効
    s->set_colorbar(s, 0);                   // 0 = 無効, 1 = 有効
  ```

- `takePicture()` 関数を定義し、画像をキャプチャして SD カードに保存します。

  ```c
  void takePicture()
  {
    ESP_LOGI(cameraTag, "写真を撮影中...");
    camera_fb_t *pic = esp_camera_fb_get();

    if (pic)
    {
        saveJpegToSdcard(pic);
    }

    ESP_LOGI(cameraTag, "写真を撮影しました！ サイズ: %zu バイト", pic->len);

    esp_camera_fb_return(pic);
  }
  ```

- 5 秒ごとに写真を撮影するタスク `cameraTakePicture_5_sec()` を作成します。

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
          cameraTakePicture_5_sec,      /* タスクを実装する関数 */
          "cameraTakePicture_5_sec",    /* タスクの名前 */
          configMINIMAL_STACK_SIZE * 4, /* スタックサイズ（ワードまたはバイト単位） */
          NULL,                         /* タスクに渡すパラメータ */
          tskIDLE_PRIORITY,             /* タスクの優先度 */
          &task                         /* 作成されたタスクのハンドルを渡すためのポインタ */
      );
  }
  ```

コード構造:

- ヘッダーファイル (`camera_config.h`, `camera_interface.h`) と実装ファイル (`camera_interface.c`)。
- `camera_config.h` ファイルはカメラの設定パラメータを定義します。
- `camera_interface.h` ファイルはカメラの初期化とタスク作成の関数を宣言します。
- `camera_interface.c` ファイルはカメラの初期化、写真撮影、およびタスク作成のロジックを実装します。

### SD カードコンポーネント

- SD カード設定:  
  SD カードインターフェースに使用する GPIO ピン (MISO, MOSI, CLK, CS) を定義します。

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
  `initialize_sdcard()`、`deinitialize_sdcard()`、および `saveJpegToSdcard()` 関数を宣言します。

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

      // format_if_mount_failed が true に設定されている場合、
      // マウントに失敗した場合に SD カードがパーティション分割およびフォーマットされます。
      esp_vfs_fat_sdmmc_mount_config_t mount_config = {
  #ifdef FORMAT_IF_MOUNT_FAILED
          .format_if_mount_failed = true,
  #else
          .format_if_mount_failed = false,
  #endif // EXAMPLE_FORMAT_IF_MOUNT_FAILED
          .max_files = 5,
          .allocation_unit_size = 32 * 1024};

      ESP_LOGI(sdcardTag, "SD カードを初期化中");

      // 上記の設定を使用して SD カードを初期化し、FAT ファイルシステムをマウントします。
      // 注意: esp_vfs_fat_sdmmc/sdspi_mount は便利なオールインワン関数です。
      // ソースコードを確認し、製品アプリケーションを開発する際にはエラー回復を実装してください。
      ESP_LOGI(sdcardTag, "SPI ペリフェラルを使用中");

      // デフォルトでは、SD カードの周波数は SDMMC_FREQ_DEFAULT (20MHz) に初期化されます。
      // 特定の周波数を設定するには、host.max_freq_khz を使用します
      // (SDSPI の範囲は 400kHz - 20MHz)。
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
          ESP_LOGE(sdcardTag, "バスの初期化に失敗しました。");
          return;
      }

      // カード検出 (CD) および書き込み保護 (WP) 信号なしでスロットを初期化します。
      // ボードにこれらの信号がある場合は、slot_config.gpio_cd および slot_config.gpio_wp を変更してください。
      sdspi_device_config_t slot_config = SDSPI_DEVICE_CONFIG_DEFAULT();
      slot_config.gpio_cs = PIN_NUM_CS;
      slot_config.host_id = host.slot;

      ESP_LOGI(sdcardTag, "ファイルシステムをマウント中");
      ret = esp_vfs_fat_sdspi_mount(mount_point, &host, &slot_config, &mount_config, &card);

      if (ret != ESP_OK)
      {
          if (ret == ESP_FAIL)
          {
              ESP_LOGE(sdcardTag, "ファイルシステムのマウントに失敗しました。"
                                  "カードをフォーマットする場合は、sdcard_config.h で FORMAT_IF_MOUNT_FAILED を設定してください。");
          }
          else
          {
              ESP_LOGE(sdcardTag, "カードの初期化に失敗しました (%s)。"
                                  "SD カードラインにプルアップ抵抗があることを確認してください。",
                      esp_err_to_name(ret));
          }
          return;
      }
      ESP_LOGI(sdcardTag, "ファイルシステムがマウントされました");

      // カードが初期化されたので、そのプロパティを出力します。
      sdmmc_card_print_info(stdout, card);

      // FATFS をフォーマット
  #ifdef FORMAT_SD_CARD
      ret = esp_vfs_fat_sdcard_format(mount_point, card);
      if (ret != ESP_OK)
      {
          ESP_LOGE(sdcardTag, "FATFS のフォーマットに失敗しました (%s)", esp_err_to_name(ret));
          return;
      }

      if (stat(file_foo, &st) == 0)
      {
          ESP_LOGI(sdcardTag, "ファイルはまだ存在します");
          return;
      }
      else
      {
          ESP_LOGI(sdcardTag, "ファイルは存在しません。フォーマットが完了しました");
      }
  #endif // CONFIG_EXAMPLE_FORMAT_SD_CARD
  }
  ```

  - JPEG 画像を SD カードに保存する関数を提供します。

  ```c
  uint16_t lastKnownFile = 0;

  void saveJpegToSdcard(camera_fb_t *captureImage)
  {
    // 次に利用可能なファイル名を探します。
    char filename[32];

    sprintf(filename, "%s/%u_img.jpg", mount_point, lastKnownFile++);

    // ファイルを作成し、JPEG データを書き込みます。
    FILE *fp = fopen(filename, "wb");
    if (fp != NULL)
    {
        fwrite(captureImage->buf, 1, captureImage->len, fp);
        fclose(fp);
        ESP_LOGI(sdcardTag, "JPEG を保存しました: %s", filename);
    }
    else
    {
        ESP_LOGE(sdcardTag, "ファイルの作成に失敗しました: %s", filename);
    }
  }
  ```

コンポーネント構造：

- ヘッダーファイル（sdcard_config.h、sdcard_interface.h）および実装ファイル（sdcard_interface.c）。
- sdcard_config.h ファイルは SD カードの設定パラメータを定義します。
- sdcard_interface.h ファイルは SD カードの初期化、非初期化、および画像保存のための関数を宣言します。
- sdcard_interface.c ファイルは SD カードの初期化、非初期化、および画像保存のロジックを実装します。

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

- カメラと SD カードインターフェースに必要なヘッダーファイルをインクルードします。
- 提供された関数を使用して、SD カードとカメラの両方を初期化します。
- カメラタスクを開始し、連続して写真を撮影します。

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

## Arduino IDE 用 FreeRtos

FreeRtos は Arduino-IDE ベースの XIAO-S3 ビルドで使用できます。これは ESP-IDF に似ていますが、1つのコアでのみ動作し、ESP-IDF 用に最適化されていません。

### ハードウェアセットアップ

Xiao-S3 を [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)（OLED ディスプレイと RTC）に接続し、[Grove - Temperature, Humidity, Pressure and Gas Sensor for Arduino - BME680](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html) を I2C バスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/4.jpg" alt="pir" width={600} height="auto" /></p>

### ソフトウェアセットアップ

[pcf8563](https://github.com/Bill2462/PCF8563-Arduino-Library)、[U8x8lib](https://github.com/olikraus/U8g2_Arduino)、および [bme680](https://github.com/Seeed-Studio/Seeed_Arduino_BME68x) ライブラリを Arduino 用にインストールします。ライブラリのインストール方法については、[How to install library](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/) を参照してください。

```cpp
#include "time.h"
#include <WiFi.h>
#include <PCF8563.h>
#include <U8x8lib.h>
#include <Wire.h>
#include "seeed_bme680.h"

#define IIC_ADDR uint8_t(0x76)
Seeed_BME680 bme680(IIC_ADDR); /* IIC プロトコル */

// PCF8563 リアルタイムクロック用 I2C 通信ライブラリ
PCF8563 pcf;

// OLED ディスプレイライブラリ
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/D4, /* data=*/D5, /* reset=*/U8X8_PIN_NONE);  // リセットなしの OLED

// WiFi ネットワークの認証情報
const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

// 時刻同期用 NTP サーバー
const char* ntpServer = "pool.ntp.org";

// タイムゾーンオフセット（場所に応じて調整）
const long gmtOffset_sec = 5.5 * 60 * 60;  // 時間 * 分 * 秒（ここでは GMT+5:30）
const int daylightOffset_sec = 0;          // 夏時間は考慮しない

// 現在の時刻情報を格納するグローバル変数
static Time nowTime;

// タスク用の関数プロトタイプ
void printDateAndTime(void* pvParameters);
void updateTime(void* pvParameters);
void ledBlink2Hz(void* pvParameters);
void oledDisplayUpdate(void* pvParameters);
void taskBME680(void* pvParameters);

// セットアップ関数（起動時に一度だけ実行）
void setup() {

  Serial.begin(115200);  // デバッグ用シリアル通信を初期化

  // 内蔵 LED ピンを出力モードに設定
  pinMode(LED_BUILTIN, OUTPUT);

  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);  // WiFi ネットワークに接続
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  while (!bme680.init()) {
    Serial.println("bme680 の初期化に失敗しました！デバイスが見つかりません！");
    delay(10000);
  }

  pcf.init();  // PCF8563 リアルタイムクロックを初期化

  // 時刻を設定する前にクロックを停止
  pcf.stopClock();

  // NTP サーバーを使用した時刻同期を設定
  configTime(gmtOffset_sec, daylightOffset_sec, ntpServer);
  static struct tm timeinfo;
  while (!getLocalTime(&timeinfo)) {
    Serial.println("時刻情報を受信できません... 待機中...");
  }

  // 取得した時刻を基に PCF8563 クロックの時刻を設定
  pcf.setYear(timeinfo.tm_year);
  pcf.setMonth(timeinfo.tm_mon);
  pcf.setDay(timeinfo.tm_mday);
  pcf.setHour(timeinfo.tm_hour);
  pcf.setMinut(timeinfo.tm_min);
  pcf.setSecond(timeinfo.tm_sec);

  pcf.startClock();  // 時刻設定後にクロックを開始

  Serial.println("WiFi に接続しました: " + WiFi.localIP());

  u8x8.begin();         // OLED ディスプレイを初期化
  u8x8.setFlipMode(1);  // 必要に応じて OLED ディスプレイの内容を回転

  // 各機能のタスクを作成
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

// ループ関数（この場合は何もしない、すべての作業はタスクで処理）
void loop() {
  // ここでは何もしません。すべての作業はタスクで処理されます。
}

// タスクとして実行される関数: 現在の日付と時刻をシリアルポートに出力
void printDateAndTime(void* pvParameters) {
  for (;;) {
    // 現在の時刻をフォーマットされた文字列 (DD/MM/YY\tHH:MM:SS) でシリアルポートに出力
    Serial.printf("%02d/%02d/%02d\t%02d:%02d:%02d\n",
                  nowTime.day, nowTime.month + 1, nowTime.year % 100,
                  nowTime.hour, nowTime.minute, nowTime.second);
    // 1秒待機してから再度時刻を読み取る
    vTaskDelay(1000 / portTICK_PERIOD_MS);
  }
}

// タスクとして実行される関数: PCF8563 クロックから現在の時刻を読み取る
void updateTime(void* pvParameters) {
  for (;;) {
    // PCF8563 クロックから現在の時刻を取得し、グローバル変数 `nowTime` を更新
    nowTime = pcf.getTime();
    // 0.5秒待機してから再度時刻を読み取る（更新頻度に応じて調整可能）
    vTaskDelay(500 / portTICK_PERIOD_MS);
  }
}

// タスクとして実行される関数: 内蔵 LED を 2Hz で点滅
void ledBlink2Hz(void* pvParameters) {
  bool state = true;  // LED の初期状態（オンまたはオフ）
  for (;;) {
    // LED の状態を設定（HIGH はオン、LOW はオフ）
    digitalWrite(LED_BUILTIN, (state ? HIGH : LOW));
    // 0.5秒待機して 2Hz の点滅周波数を作成（1サイクルオン/オフ）
    vTaskDelay(500 / portTICK_PERIOD_MS);
    // 次のサイクルのために LED の状態を切り替え
    state = !state;
  }
}

// タスクとして実行される関数: OLED ディスプレイに日付と時刻を更新
void oledDisplayUpdate(void* pvParameters) {
  for (;;) {

    // 最初の行（日時）のフォントを設定
    u8x8.setFont(u8x8_font_chroma48medium8_r);

    // 最初の行のカーソル位置を設定（中央揃え）
    u8x8.setCursor(0, 0);

    char buffer1[12];  // フォーマットされた日付文字列を保持するバッファ
    std::snprintf(buffer1, sizeof(buffer1), "%02d/%02d/%02d",
                  nowTime.day, nowTime.month + 1, nowTime.year % 100);
    u8x8.print(buffer1);

    // 時刻文字列 (HH:MM:SS) を buffer2 にフォーマット
    std::snprintf(buffer1, sizeof(buffer1), "%02d:%02d:%02d",
                  nowTime.hour, nowTime.minute, nowTime.second);
    // フォーマットされた時刻文字列を OLED ディスプレイに出力
    u8x8.print(buffer1);

    // 2行目のカーソル位置を調整（1行目の下）
    u8x8.setCursor(0, 10);

    char buffer2[20];  // フォーマットされたセンサーデータを保持するバッファ

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

    vTaskDelay(100 / portTICK_PERIOD_MS);  // 0.1秒ごとに更新（必要に応じて調整）
  }
}

void taskBME680(void* pvParameters) {
  for (;;) {
    if (bme680.read_sensor_data()) {
      Serial.println("読み取りに失敗しました :(");
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

### シリアルモニター出力

```shell
09/09/24	03:17:20
T: 29.01 C  P: 90.86 KPa  H: 63.41 %  G: 47.41 Kohms
09/09/24	03:17:21
T: 29.03 C  P: 90.86 KPa  H: 63.34 %  G: 47.85 Kohms
```

## Arduino FreeRTOS vs ESP-IDF FreeRTOS

| 特徴                     | Arduino FreeRTOS                                                | ESP-IDF FreeRTOS                                                                                                   |
| ----------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 抽象化レイヤー           | 高レベルの抽象化、初心者にとって簡単                           | 低レベルの抽象化、経験豊富なユーザー向けのより多くの制御                                                           |
| 開発環境                 | Arduino IDE                                                     | ESP-IDF コマンドラインツール                                                                                       |
| 互換性                   | 主にArduinoベースのボードと互換性あり                           | より広範なESP32およびESP32-S2ボードと互換性あり                                                                    |
| 機能                     | 基本的なRTOS機能、タスク作成、スケジューリング、同期             | 包括的なRTOS機能、タスク作成、スケジューリング、同期、イベントグループ、キュー、ミューテックス、セマフォ            |
| パフォーマンス           | 抽象化レイヤーのため一般的にパフォーマンスが低い               | ハードウェアとRTOS APIへの直接アクセスによりパフォーマンスが高い                                                   |
| カスタマイズ性           | カスタマイズオプションが限定的                                  | 設定ファイルとAPIを通じた広範なカスタマイズオプション                                                              |
| 学習曲線                 | 初心者にとって学びやすい                                       | コマンドラインツールやC/C++に不慣れな人にとって学習曲線が急                                                        |
| 使用例                   | シンプルなIoTプロジェクト、プロトタイピング                     | 複雑なIoTアプリケーション、リアルタイムシステム、カスタムハードウェア                                               |

## トラブルシューティング

ハードウェア接続、ソフトウェアデバッグ、またはアップロードの過程でいくつかの問題が発生する可能性があります。

## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>