---
description: FreeRTOS を Wio Terminal で使用する
title:  FreeRTOS を Wio Terminal で使用する
keywords:
- ソフトウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Software-FreeRTOS
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Arduino で FreeRTOS を使用してマルチタスクを実現する方法

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/FreeRTOS/full.gif"/></div>

## RTOS とは

今日の組み込みシステムにおいて最も重要なコンポーネントの一つが **RTOS**（リアルタイムオペレーティングシステム）です。RTOS はタスクスケジューリングからアプリケーションの実行まで、すべてを管理します。

**RTOS** は予測可能な実行モードを提供するよう設計されています。処理がシステムの時間制限を満たす必要がある場合に RTOS が使用されます。そのため、GPOS（汎用オペレーティングシステム）と比較して、RTOS は通常軽量で小型であり、特定のハードウェア上で特定の種類のアプリケーションを実行するために必要な機能のみを提供します。場合によっては、開発者が既存の RTOS を変更し、特定のアプリケーションに必要な機能だけを提供するように縮小したり、その機能や性能特性をカスタマイズしたりすることができます。

## RTOS の仕組み

**カーネル** はオペレーティングシステムの中核的なコンポーネントです。Linux のようなオペレーティングシステムはカーネルを使用しており、ユーザーが同時にコンピュータにアクセスしているように見せることができます。実行中の各プログラムは、オペレーティングシステムの制御下にあるタスク（またはスレッド）です。このようにして複数のタスクを実行できるオペレーティングシステムは、**マルチタスク** と呼ばれます。

- **マルチタスク**

従来のプロセッサは一度に **1つのタスク** しか実行できませんが、マルチタスクオペレーティングシステムはタスク間を高速で切り替えることで、各タスクが同時に実行されているように見せることができます。以下の図は、3つのタスクの実行モードと時間の関係を示しています。

<div align="center"><img src="https://files.seeedstudio.com/wiki/FreeRTOS/TaskExecution.gif"/></div>

- **スケジューリング**

**スケジューラ** は、特定の時点でどのタスクを実行するかを決定する役割を担うカーネルの一部です。カーネルはタスクのライフサイクル中にタスクを何度も一時停止および再開することができます。

**スケジューリング戦略** は、スケジューラが任意の時点でどのタスクを実行するかを決定するために使用するアルゴリズムです。（非リアルタイムの）マルチユーザーシステム戦略では、各タスクにプロセッサ時間の「公平な」割合を与える可能性があります。

タスクはカーネルによって強制的に中断されるだけでなく、自ら中断を選択することもできます。一定時間 **遅延（スリープ）** したい場合や、リソース（例：シリアルポート）の利用可能性やイベント（例：キー押下）を **待機（ブロック）** したい場合にそうします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/FreeRTOS/suspending.gif"/></div>

*参考: [**FreeRTOS Fundamentals**](https://www.freertos.org/implementation/a00002.html)*

## FreeRTOS とは

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/FreeRTOS/FreeRTOS-logo.png"/></div>

[**FreeRTOS**](https://www.freertos.org/) は、マイクロコントローラ上で動作するのに十分小型に設計された RTOS の一種です。ただし、その使用はマイクロコントローラアプリケーションに限定されません。FreeRTOS にはカーネルと、業界セクターやアプリケーション全体で使用可能なソフトウェアライブラリのセットが含まれています。FreeRTOS を使用することで、マイクロコントローラベースのハードウェアでマルチタスクを実現できます！

**Arduino 互換性** のために、FreeRTOS を Arduino フレームワークに移植しました。これにより、お気に入りの Arduino ボードで FreeRTOS を簡単に使用できるようになりました！

:::note
2017年に [Amazon](https://aws.amazon.com/freertos/) が FreeRTOS の管理を引き継ぎ、組み込みの世界で信頼性と安全性を提供しています。
:::

## ArduinoでのFreeRTOSのクイックスタート

### FreeRTOS Arduinoライブラリのインストール

1. [**Seeed_Arduino_FreeRTOS**](https://github.com/Seeed-Studio/Seeed_Arduino_FreeRTOS) リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、Seeed_Arduino_FreeRTOSライブラリをArduino IDEにインストールします。Arduino IDEを開き、`スケッチ` -> `ライブラリをインクルード` -> `ZIP形式のライブラリを追加`をクリックし、先ほどダウンロードした`Seeed_Arduino_FreeRTOS`ファイルを選択します。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

:::note
このライブラリは最新のFreeRTOS（10.2.1）を移植しており、Arduino IDEでFreeRTOSプロジェクトを作成できるようにします。
:::

### 対応ボード

[**Seeed_Arduino_FreeRTOS**](https://github.com/Seeed-Studio/Seeed_Arduino_FreeRTOS)は、SeeedのすべてのSAMDボードをサポートしています：

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- Seeeduino Zeroシリーズ：
  - [Seeeduino Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html)
  - [Seeeduino Lotus Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)
  - [Wio Lite W600 - ATSAMD21 Cortex-M0 Wireless Development Board](https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html)
  - [Wio Lite MG126 - ATSAMD21 Cortex-M0 Blue Wireless Development Board](https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html)
- [Seeeduino LoRaWAN](https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html)

## FreeRTOS Arduinoの例

FreeRTOSは、マイクロコントローラーに**リアルタイムスケジューリング機能、タスク間通信、タイミングおよび同期プリミティブ**を提供することで非常に強力です。

FreeRTOSを簡単に始められるように、いくつかの参考例を以下に示します。以下の例はすべてWio Terminalで構築および実行されています。

### Hello Worldの例

この例では、異なる`文字列`を異なる速度でシリアルモニターに出力する**2つのスレッド**を作成します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/FreeRTOS/helloworld.png"/></div>

```cpp
#include <Seeed_Arduino_FreeRTOS.h>

TaskHandle_t Handle_aTask;
TaskHandle_t Handle_bTask;

static void ThreadA(void* pvParameters) {
    Serial.println("Thread A: Started");

    while (1) {
        Serial.println("Hello World!");
        delay(1000);
    }
}

static void ThreadB(void* pvParameters) {
    Serial.println("Thread B: Started");

    for (int i = 0; i < 10; i++) {
        Serial.println("---This is Thread B---");
        delay(2000);
    }
    Serial.println("Thread B: Deleting");
    vTaskDelete(NULL);
}

void setup() {

    Serial.begin(115200);

    vNopDelayMS(1000); // 起動時のUSBドライバクラッシュを防止、これを省略しないでください
    while(!Serial);  // プログラム開始前にシリアルターミナルがポートを開くのを待つ

    Serial.println("");
    Serial.println("******************************");
    Serial.println("        Program start         ");
    Serial.println("******************************");

    // RTOSによって管理されるスレッドを作成
    // 各タスクのスタックサイズと優先度を設定
    // また、タスクと通信し情報を取得するためのハンドラポインタを初期化
    xTaskCreate(ThreadA,     "Task A",       256, NULL, tskIDLE_PRIORITY + 2, &Handle_aTask);
    xTaskCreate(ThreadB,     "Task B",       256, NULL, tskIDLE_PRIORITY + 1, &Handle_bTask);

    // RTOSを開始、この関数は戻らずタスクをスケジュールします
    vTaskStartScheduler();
}

void loop() {
    // 何もしない
}
```

### 点滅の例

この例では、2つのスレッドを作成し、LEDを点灯させる信号を出力します。一方は単純にLEDを点滅させ、もう一方はLEDを呼吸させます。

:::note
        呼吸LEDがPWMピンに接続されていることを確認してください。
:::

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/FreeRTOS/Blink.gif"/></div>

```cpp
#include <Seeed_Arduino_FreeRTOS.h>

#define LEDPIN_1 PIN_WIRE_SCL // Wio TerminalのGroveポート左側
#define LEDPIN_2 D0 // Wio TerminalのGroveポート右側

TaskHandle_t Handle_aTask;
TaskHandle_t Handle_bTask;

// 点滅するLED
static void LED_1(void* pvParameters) {
    while (1) {
        digitalWrite(LEDPIN_1, HIGH);
        delay(1000);
        digitalWrite(LEDPIN_1, LOW);
        delay(1000);
    }
}

// 呼吸するLED
static void LED_2(void* pvParameters) {
    int cnt = 5;
    while (1) {
        for (byte value = 0 ; value < 255; value+=cnt) {
            analogWrite(LEDPIN_2, value);
            delay(20);
        }
        delay(200);
        for (byte value = 255 ; value > 0; value-=cnt) {
            analogWrite(LEDPIN_2, value);
            delay(20);
        }
    }
}

void setup() {
    Serial.begin(115200);

    vNopDelayMS(1000); // 起動時のUSBドライバクラッシュを防止、これを省略しないでください
//    while(!Serial);  // プログラム開始前にシリアルターミナルがポートを開くのを待つ

    pinMode(LEDPIN_1, OUTPUT);
    pinMode(LEDPIN_2, OUTPUT);

    xTaskCreate(LED_1,     "Task A",       256, NULL, tskIDLE_PRIORITY + 2, &Handle_aTask);
    xTaskCreate(LED_2,     "Task B",       256, NULL, tskIDLE_PRIORITY + 1, &Handle_bTask);

    // RTOSを開始、この関数は戻らずタスクをスケジュールします
    vTaskStartScheduler();
}

void loop() {

}
```

### LCDの例

この例は、Wio TerminalでのLCDスプライトなどの他のArduinoライブラリとFreeRTOSを組み合わせたデモンストレーションです。この例では、2つのスレッドで2つのスプライトを作成し、逆方向にカウントします。`taskMonitor`はスレッドを監視し、各スレッドのスタック情報を出力するための関数です。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/FreeRTOS/FreeRTOS-LCD.gif"/></div>

```cpp
#include <Seeed_Arduino_FreeRTOS.h>
#include <TFT_eSPI.h>

TaskHandle_t Handle_aTask;
TaskHandle_t Handle_bTask;
TaskHandle_t Handle_monitorTask;

TFT_eSPI tft = TFT_eSPI();
TFT_eSprite img = TFT_eSprite(&tft);
TFT_eSprite img2 = TFT_eSprite(&tft);

static void LCD_TASK_1 (void* pvParameters) {
    Serial.println("Thread A: Started");
    img.createSprite(100, 100);
    img.fillSprite(tft.color565(229,58,64)); // 赤
    img.setTextSize(8);
    img.setTextColor(TFT_WHITE);
    for(int i = 0; i < 100; i++) {
        img.drawNumber(i, 10, 25);
        img.pushSprite(30, 70);
        img.fillSprite(tft.color565(229,58,64));
        delay(1000);
        if(i== 99) i = 0;
    }
}

static void LCD_TASK_2 (void* pvParameters) {
    Serial.println("Thread B: Started");
    img2.createSprite(100, 100);
    img2.fillSprite(tft.color565(48,179,222)); // 青
    img2.setTextSize(8);
    img2.setTextColor(TFT_WHITE);
    for(int x = 99; x >= 0; x--) {
        img2.drawNumber(x, 10, 25);
        img2.pushSprite(190, 70);
        img2.fillSprite(tft.color565(48,179,222));
        delay(500);
        if(x== 0) x = 99;
    }
}

void taskMonitor(void* pvParameters) {
    int x;
    int measurement;

    Serial.println("Task Monitor: Started");

    // このタスクを数回実行してから終了
    for (x = 0; x < 10; ++x) {

        Serial.println("");
        Serial.println("******************************");
        Serial.println("[スタックの空きバイト数] ");

        measurement = uxTaskGetStackHighWaterMark(Handle_aTask);
        Serial.print("Thread A: ");
        Serial.println(measurement);

        measurement = uxTaskGetStackHighWaterMark(Handle_bTask);
        Serial.print("Thread B: ");
        Serial.println(measurement);

        measurement = uxTaskGetStackHighWaterMark(Handle_monitorTask);
        Serial.print("モニタースタック: ");
        Serial.println(measurement);

        Serial.println("******************************");

        delay(10000); // 10秒ごとに出力
    }

    // 自分自身を削除
    // これを呼び出さないと、システムがクラッシュします
    Serial.println("Task Monitor: Deleting");
    vTaskDelete(NULL);
}

void setup() {

    Serial.begin(115200);

    vNopDelayMS(1000); // 起動時のUSBドライバクラッシュを防止、これを省略しないでください
    while (!Serial) ;  // プログラム開始前にシリアルターミナルがポートを開くのを待つ

    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(tft.color565(9,7,7)); // 黒背景
    tft.setTextColor(tft.color565(239,220,5)); // 黄色テキスト
    tft.setTextSize(2);
    tft.drawString("Thread A", 30, 50);
    tft.drawString("Thread B", 190, 50);

    Serial.println("");
    Serial.println("******************************");
    Serial.println("        Program start         ");
    Serial.println("******************************");

    // RTOSによって管理されるスレッドを作成
    // 各タスクのスタックサイズと優先度を設定
    // また、タスクと通信し情報を取得するためのハンドラポインタを初期化
    xTaskCreate(LCD_TASK_1,     "Task A",       256, NULL, tskIDLE_PRIORITY + 3, &Handle_aTask);
    xTaskCreate(LCD_TASK_2,     "Task B",       256, NULL, tskIDLE_PRIORITY + 2, &Handle_bTask);
    xTaskCreate(taskMonitor, "Task Monitor",    128, NULL, tskIDLE_PRIORITY + 1, &Handle_monitorTask);

    // RTOSを開始、この関数は戻らずタスクをスケジュールします
    vTaskStartScheduler();
}

void loop() {
    // 何もしない
}
```

## Arduino 用 C++ における FreeRTOS

さらに詳しく知りたい方のために、[**Seeed_Arduino_ooFreeRTOS**](https://github.com/Seeed-Studio/Seeed_Arduino_ooFreeRTOS) を提供しています。これは、**FreeRTOS の機能をカプセル化した C++ ラッパーのコレクションであり、Arduino フレームワークの下で動作します。**

### FreeRTOS C++ Arduino ライブラリのインストール

1. [**Seeed_Arduino_ooFreeRTOS**](https://github.com/Seeed-Studio/Seeed_Arduino_ooFreeRTOS) リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、Seeed_Arduino_ooFreeRTOS ライブラリを Arduino IDE にインストールします。Arduino IDE を開き、`スケッチ` -> `ライブラリをインクルード` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `Seeed_Arduino_ooFreeRTOS` ファイルを選択します。

### C++ における点滅（Blink）例

```cpp
#include <Seeed_Arduino_ooFreeRTOS.h>
#include "thread.hpp"
#include "ticks.hpp"

using namespace cpp_freertos;

class BlinkThread : public Thread {
  
public:
  
  BlinkThread(int i, int delayInSeconds)
    : Thread( 256, 1), 
      Id (i), 
      DelayInSeconds(delayInSeconds)
  {
    Start();
  };
  
protected:

  virtual void Run() {
    while (true) {
      Serial.printf("点滅スレッド: %d\n\r", Id);
      digitalWrite(LED_BUILTIN, HIGH);   // LED を点灯 (HIGH は電圧レベル)
      Delay(Ticks::SecondsToTicks(DelayInSeconds));
      digitalWrite(LED_BUILTIN, LOW);    // LED を消灯 (LOW は電圧レベル)
      Delay(Ticks::SecondsToTicks(DelayInSeconds));      
    }
  };

private:
  int Id;
  int DelayInSeconds;
};



void setup (void)
{
  
  // シリアルインターフェースを起動
  Serial.begin(115200);
  Serial.println("FreeRTOS C++ ラッパーのテスト");
  Serial.println("シンプルなタスク");

  // デジタルピン LED_BUILTIN を出力として初期化
  pinMode(LED_BUILTIN, OUTPUT);
  
  static BlinkThread p1(1, 3);
  static BlinkThread p2(2, 5);

  Thread::StartScheduler();
  
  //
  //  Thread::EndScheduler() が呼び出されない限り、
  //  ここに到達することはありません。
  //  
  Serial.println("スケジューラが終了しました！");

}

void loop()
{
  // 空です。タスク内で処理が行われます。
}

```

## リソース

- [公式 FreeRTOS 入門ガイド](https://www.freertos.org/FreeRTOS-quick-start-guide.html)