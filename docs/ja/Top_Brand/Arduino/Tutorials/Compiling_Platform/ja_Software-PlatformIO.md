---
description: Arduino対応ボード向けPlatformIO
title: Arduino対応ボード向けPlatformIO
keywords:
- ソフトウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Software-PlatformIO
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# ArduinoプログラミングのためのPlatformIO IDEの使い方

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO.gif"/></div>

ご存知の通り、Arduino IDEは**Arduinoプログラミング**において生産性を最大化するための最適なIDEではないかもしれません。ここでは、より開発者に優しい選択肢をご紹介します！[**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)や[**Seeeduino XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)を、[**PlatformIO IDE**](https://platformio.org/)を使用して、[Microsoft Visual Studio Code](https://code.visualstudio.com/)内でお気に入りの開発環境で開発しましょう！

## PlatformIOとは

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO.png"/></div>

[**PlatformIO**](https://platformio.org/)は、組み込みシステムやソフトウェアエンジニアが組み込みアプリケーションを記述するためのクロスプラットフォーム、クロスアーキテクチャ、マルチフレームワーク対応のプロフェッショナルなIDEツールです。PlatformIOを使用することで、ユニバーサルなIDEインターフェースを提供し、ハードウェアをより開発者に優しい方法でプログラムすることができます！

このWikiでは、[**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)や[**Seeeduino XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)をサポートするようにPlatformIOを設定し、プログラミングを開始する方法を説明します！

*詳細については、[PlatformIO](https://docs.platformio.org/en/latest/)をご覧ください。*

## PlatformIO IDEの始め方

PlatformIOは、最も人気のあるIDEやテキストエディタをプラグインとしてサポートしています。このWikiでは、例として**VSCode用PlatformIO**を使用します。

他のIDEについては、以下を参考にしてください：

- [CLion](https://docs.platformio.org/en/latest/integration/ide/clion.html#ide-clion)用

- [PlatformIO Core (CLI)](https://docs.platformio.org/en/latest/core/index.html#piocore)

### VSCode用PlatformIO

- **ステップ1. VSCodeをダウンロード**

[Microsoft Visual Studio Code](https://code.visualstudio.com/)をダウンロードしてインストールします。

- **ステップ2. VSCode用PlatformIO IDEプラグインをダウンロード**

VS Codeの左パネルで**拡張機能マーケット**を開くか、以下のキーボードショートカットを使用します：

:::note
キーボードショートカット：**Windows**では`Shift+CTRL+X`、**macOS**では`Shift+CMD+X`。
:::

拡張機能マーケットで**`PlatformIO`**を検索し、**インストール**をクリックします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO-1.png"/></div>

- **ステップ3. PlatformIOホームページを開く**

PlatformIOツールバーの下部にある「PlatformIO Home」ボタンをクリックします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO-2.png"/></div>

これで、PlatformIOがPCにインストールされました！

## Wio Terminal と Seeeduino XIAO の設定

**Wio Terminal と Seeeduino XIAO は現在公式に PlatformIO に対応しています:**

1. PlatformIO のルートディレクトリに移動します:

      - **Unix**の場合: `~/.platformio`

      - **Windows**の場合: `C:\Users\{username}.platformio` （`{username}` はユーザー名を指します）

2. `platforms` フォルダに移動します。

3. 設定済みの [`platform-atmelsam`](https://github.com/platformio/platform-atmelsam.git) を `platforms` フォルダにダウンロードします。

<div align="center"><img  src="https://files.seeedstudio.com/wiki/platformIO/platformIO-3.png"/></div>

### 対応ボード

設定済みの `platform-atmelsam` は以下のボードをサポートしています:

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- Seeeduino Zero シリーズ:
  - [Seeeduino Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html)
  - [Seeeduino Lotus Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)
  - [Wio Lite W600 - ATSAMD21 Cortex-M0 ワイヤレス開発ボード](https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html)
  - [Wio Lite MG126 - ATSAMD21 Cortex-M0 Blue ワイヤレス開発ボード](https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html)
- [Seeeduino LoRaWAN](https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html)

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#d9f5f3', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#83dfd3', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Tip.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{fontWeight: 'bold', marginTop: 10}}>ヒント</p>
    <p style={{fontSize: 14}}>すでに統合されており、まもなく手動で行う必要がなくなります。</p>
  </div>
</div>

## クイックスタート

このチュートリアルでは、PlatformIO IDE の基本的なワークフローを紹介し、Wio Terminal での簡単な「Blink」例を示します。

- **PlatformIO Home** ボタンをクリックします。

- **New Project** をクリックし、ボードとして `Seeed Wio Terminal` を選択します。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/platformIO/platformIO-4.png"/></div>

- `src` フォルダ内の `main.cpp` を開き、以下をコピーします:

```cpp
#include <Arduino.h>

void setup() {
  // デジタルピン LED_BUILTIN を出力として初期化します。
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
}

// ループ関数は永遠に繰り返し実行されます
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   // LED をオンにする (HIGH は電圧レベル)
  delay(1000);                       // 1秒待機
  digitalWrite(LED_BUILTIN, LOW);    // 電圧を LOW にして LED をオフにする
  delay(1000);                       // 1秒待機
}
```

- `platformio.ini` 設定ファイルを開き、正しいことを確認します:

```ini
[env:seeed_wio_terminal]
platform = atmelsam
board = seeed_wio_terminal
framework = arduino
```

- PlatformIO ツールバーの **Build** ボタンまたはキーボードショートカットでプロジェクトをビルドします。

:::note
        プロジェクトのビルド: **Windows** では `ctrl+alt+b`、**macOS** では `cmd+shift+b`。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO-5.png"/></div>

- PlatformIO ツールバーの **Upload** ボタンをクリックしてプロジェクトを Wio Terminal にアップロードします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO-6.png"/></div>

- これで Wio Terminal の LED が点滅しているのが確認できるはずです！

*VSCode 用 PlatformIO の入門については、[こちら](https://docs.platformio.org/en/latest/integration/ide/vscode.html)も参照してください。*

## PlatformIO にライブラリを追加する

### ライブラリを直接インポートする

Github から PlatformIO にライブラリを直接インポートするには、`platformio.ini` を設定し、依存ライブラリの URL を `lib_deps` に追加します。以下のように記述します：

```ini
lib_deps = https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR
```

**- 使用例:**

```cpp
#include <Arduino.h>
#include<LIS3DHTR.h>

LIS3DHTR<TwoWire> lis;

void setup() {
  Serial.begin(115200);
  lis.begin(Wire1);

  if (!lis) {
    Serial.println("ERROR");
    while(1);
  }
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); // データ出力レート
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); // スケール範囲を2gに設定
}

void loop() {
  float x_values, y_values, z_values;
  x_values = lis.getAccelerationX();
  y_values = lis.getAccelerationY();
  z_values = lis.getAccelerationZ();

  Serial.print("X: "); Serial.print(x_values);
  Serial.print(" Y: "); Serial.print(y_values);
  Serial.print(" Z: "); Serial.print(z_values);
  Serial.println();
  delay(50);
}
```

### Arduino からインポートする

別の方法として、`platformio.ini` 設定ファイルで Arduino ライブラリのパスを指定することもできます。例：

```ini
lib_extra_dirs = /Users/{username}/Documents/Arduino/libraries
```

:::caution
これはソースコードを含むライブラリへの直接パスではありません。フォルダごとにグループ化されたライブラリを格納するストレージへのパスである必要があります。例えば、`D:\PlatformIO\extra\libraries` は正しいですが、`D:\PlatformIO\extra\libraries\FooLibrary` は正しくありません。
:::

その他のライブラリオプションについては、[**PlatformIO ライブラリドキュメント**](https://docs.platformio.org/en/latest/projectconf/section_env_library.html) を参照してください。

## Seeed 用の最新 ArduinoCore ライブラリを使用する

PlatformIO の ArduinoCore は PlatformIO 自身によって管理されており、時には Seeed の最新リリースバージョンと一致しない場合があります。この場合、以下のような `platformio.ini` を使用できます。例：

```ini
; PlatformIO プロジェクト設定ファイル
;
;   ビルドオプション: ビルドフラグ、ソースフィルタ
;   アップロードオプション: カスタムアップロードポート、速度、追加フラグ
;   ライブラリオプション: 依存関係、追加ライブラリストレージ
;   高度なオプション: 追加スクリプト
;
; 他のオプションや例についてはドキュメントを参照してください
; https://docs.platformio.org/page/projectconf.html

[env:seeed_wio_terminal]
platform = atmelsam
board = seeed_wio_terminal
framework = arduino
platform_packages = framework-arduino-samd-seeed@https://github.com/Seeed-Studio/ArduinoCore-samd.git
```

## PlatformIO のその他の便利な機能

- [シリアルモニター](https://docs.platformio.org/en/latest/integration/ide/vscode.html#serial-port-monitor)

- [デバッグ](https://docs.platformio.org/en/latest/integration/ide/vscode.html#debugging)