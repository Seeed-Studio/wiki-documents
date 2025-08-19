---
description: XIAO ESP32-C3 iBeaconとBME680センサーを使用したESP-IDFによる開発
title: XIAO ESP32-C3 iBeaconとBME680センサーを使用したESP-IDFによる開発
keywords:
  - ESP-IDF
  - XIAO
image: https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/8.webp
slug: /ja/xiao-c3-ibeacon
last_update:
  date: 05/15/2025
  author: Priyanshu Roy
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32-C3 iBeaconとBME680センサーを使用したESP-IDFによる開発

このチュートリアルでは、Bluetooth Low Energy (BLE) のiBeacon形式を使用して環境データを送信する低消費電力の温度監視システムを構築します。使用するのはSeeed Studio XIAO ESP32-C3、XIAO拡張ボード、およびGrove BME680環境センサーです。このプロジェクトでは、Espressifの公式開発フレームワークであるESP-IDFを使用して堅牢な組み込みアプリケーションを構築する方法を示します。

## 概要

本システムは以下を実現します：

1. BME680センサーから温度、湿度、気圧を読み取る
2. このデータをBLE広告パケットにパッケージ化する
3. 定期的に起動し、測定を行い、データを送信し、バッテリー消費を抑えるためにスリープ状態に戻る

### システムフローチャート

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/1.png" style={{width:300, height:800}}/></div>

このフローチャートは、システムの主な動作サイクルを示しています。起動から深いスリープ状態に戻るまでの流れを表しています。

## ハードウェア要件

<table align="center">
<tr>
    <th>Seeed Studio XIAO ESP32C3</th>
    <th>Seeed Studio Grove Base for XIAO</th>
    <th>Grove BME680環境センサー</th>
</tr>
<tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/main.jpg" style={{height: 150, objectFit: 'contain'}}/></div></td>
</tr>
<tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
</tr>
</table>

- USB Type-Cケーブル
- ESP-IDFがインストールされたコンピュータ

## ソフトウェア要件

- [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/get-started/index.html) (v5.0以降)
- Git
- [プロジェクト GitHub リポジトリ](https://github.com/Priyanshu0901/xiao_ibeacon)

## ステップ 1: ハードウェアセットアップ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/2.webp" style={{width:800, height:'auto'}}/></div>

1. **BME680センサーをXIAO拡張ボードに接続する**:

   - Grove BME680センサーをXIAO拡張ボードのI2Cポートの1つに接続します。
   - センサーはI2Cを介して通信するため、I2C互換のGroveポートであればどれでも使用可能です。

2. **XIAO ESP32-C3を拡張ボードに取り付ける**:

   - XIAO ESP32-C3モジュールを拡張ボードに慎重に配置し、挿入します。
   - ピンが正しく揃っていることを確認し、モジュールがしっかりと固定されていることを確認してください。

3. **コンピュータに接続する**:
   - USB Type-Cケーブルを使用して、XIAO拡張ボードをコンピュータに接続します。

## ステップ 2: 開発環境のセットアップ

1. **ESP-IDFをインストールする**:
   お使いのオペレーティングシステムに応じた[公式インストール手順](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/get-started/index.html)に従ってください。

   Linuxの場合、以下を使用できます:

   ```bash
   mkdir -p ~/esp
   cd ~/esp
   git clone --recursive https://github.com/espressif/esp-idf.git
   cd esp-idf
   ./install.sh
   . ./export.sh
   ```

2. **プロジェクトリポジトリをクローンする**:

   ```bash
   cd ~/Desktop
   git clone --recurse-submodules https://github.com/Priyanshu0901/xiao_ibeacon.git
   cd xiao_ibeacon
   ```

   :::caution
   `--recurse-submodules`フラグは重要です。このプロジェクトはGitサブモジュールとして含まれる外部ライブラリに依存しているため、これがないとコンパイルに失敗します。

   すでにサブモジュールなしでクローンしてしまった場合は、以下を実行してください:

   ```bash
   git submodule update --init --recursive
   ```

   :::

## ステップ 3: プロジェクト構造とコンポーネントの理解

このプロジェクトは、以下の3つの主要コンポーネントで構成されています:

1. **BME680センサーコンポーネント (`sensor_t_a_h`)**:

   - BME680センサーとの通信を処理
   - センサーの初期化、読み取り、データ処理を管理
   - 温度、湿度、気圧データを提供

2. **BLEビーコンコンポーネント (`ble_beacon`)**:

   - BLEスタックを設定
   - センサーデータを含むBLE広告を作成してブロードキャスト
   - BLEの初期化とクリーンアップを管理

3. **電源管理コンポーネント (`power_manager`)**:
   - ディープスリープ機能を処理
   - 省電力動作を管理
   - ウェイクアップソースとスリープ時間を制御

### コンポーネントの相互作用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/3.png" style={{width:800, height:'auto'}}/></div>

この図は、システムのハードウェア要素と異なるソフトウェアコンポーネントがどのように相互作用するかを示しています。

## ステップ 4: 設定の理解

ビルドの前に、主要な設定を理解しましょう:

1. **メインアプリケーション設定** (`main.c`内):

   - `ADV_TIME_MS`: BLE広告の継続時間 (500ms)
   - `POLL_INTERVAL_MS`: センサーをポーリングする頻度 (150ms)
   - `TIMEOUT_MS`: センサー読み取りの最大待機時間 (2000ms)
   - `SLEEP_TIME_MS`: 測定間のスリープ時間 (~29.3秒)

2. **センサー設定** (`components/sensor_t_a_h/Kconfig`内):

   ```
   menu "BME68X Configuration"
       config BME68X_I2C_ADDR
           hex "BME68X I2C Address"
           default 0x76
           help
               BME68XセンサーのI2Cアドレス。デフォルトは0x76です。
               SDOピンが高電位の場合は0x77を使用してください。

       choice BME68X_INTERFACE
           prompt "BME68X Interface"
           default BME68X_USE_I2C
           help
               BME68Xセンサーで使用するインターフェースを選択してください。

           config BME68X_USE_I2C
               bool "I2C Interface"

           config BME68X_USE_SPI
               bool "SPI Interface"
       endchoice

       if BME68X_USE_I2C
           config BME68X_I2C_PORT
               int "I2C Port Number"
               range 0 1
               default 0
               help
                   BME68X用のI2Cポート番号。

           config BME68X_I2C_SDA_PIN
               int "I2C SDA GPIO"
               range 0 48
               default 12
               help
                   I2C SDA用のGPIOピン。

           config BME68X_I2C_SCL_PIN
               int "I2C SCL GPIO"
               range 0 48
               default 13
               help
                   I2C SCL用のGPIOピン。

           config BME68X_I2C_CLOCK_SPEED
               int "I2C Clock Frequency (Hz)"
               range 100000 400000
               default 100000
               help
                   BME68X用のI2Cクロック周波数。標準モード (100 KHz) または高速モード (400 KHz)。
       endif
   endmenu
   ```

3. **BLE設定** (`components/ble_beacon/common.h`内):
   BLEデバイス名は`common.h`ファイルで定義されています:

   ```c
   #define DEVICE_NAME "Xiao_TempSensor"
   ```

### 設定パラメータの変更

#### ESP-IDFのmenuconfigツールを使用

ESP-IDFフレームワークは、プロジェクト設定を変更するための強力な構成ツールである**menuconfig**を提供します。このツールは、Linuxカーネルで使用されるKconfigと同じ構成システムに基づいています。

構成インターフェースを起動するには:

```bash
idf.py menuconfig
```

これにより、以下のような構成カテゴリを持つテキストベースのUIが表示されます:

```
    Application Configuration  --->
    ESP-IDF Components         --->
    SDK tool configuration     --->
    Compiler options          --->
    Component config          --->
    Bootloader config         --->
    Serial flasher config     --->
```

**menuconfigでのナビゲーション:**

- `↑`および`↓`矢印キーで移動
- `Enter`キーでサブメニューに入る
- `Esc`キーで戻る
- `Space`キーでオプションを切り替える
- ブールオプションでは`Y`で「はい」、`N`で「いいえ」
- 現在選択されているオプションのヘルプを表示するには`?`キー
- `Q`または`Esc`を複数回押して終了し、`Y`で変更を保存

**センサー設定の見つけ方:**

1. `Component config`に移動
2. `BME68X Configuration`を見つけるまでスクロール
3. `Enter`キーを押してセンサー設定を表示

**BLE設定の確認:**

1. `Component config` に移動します
2. `Bluetooth` を見つけて選択します
3. `NimBLE Options` を選択します
4. ここで、さまざまなBLEパラメータを設定できます

##### BME680用I2Cピンの設定

BME680センサーのI2Cピンを設定するには、以下の手順を実行します：

1. menuconfigで、`Component config` → `BME68X Configuration` に移動します
2. `I2C SDA GPIO` を選択してSDAピンを変更します
3. SDAのGPIO番号を入力します（デフォルトは12ですが、XIAO ESP32-C3と拡張ボードを使用する場合は6を使用します）
4. `I2C SCL GPIO` を選択してSCLピンを変更します
5. SCLのGPIO番号を入力します（デフォルトは13ですが、XIAO ESP32-C3と拡張ボードを使用する場合は7を使用します）
6. センサーが異なるI2Cアドレスを持つ場合は、`BME68X I2C Address` を選択して変更します

##### menuconfigを使用したBLEパラメータの設定

デバイス名はコード内で定義されていますが、その他のBLEパラメータはmenuconfigを通じて設定できます：

1. `Component config` → `Bluetooth` → `NimBLE Options` に移動します
2. 以下を変更できます：
   - 同時接続の最大数
   - BLEの役割（Central/Peripheral/Observer/Broadcaster）
   - セキュリティ設定
   - GAPおよびGATTパラメータ
   - BLEスタックのメモリ割り当て

##### 高度な設定オプション

上級ユーザー向けに、追加の設定オプションが利用可能です：

1. **電源管理:**

   - `Component config` → `Power Management` に移動します
   - 自動ライトスリープの有効化/無効化
   - DFS（動的周波数スケーリング）の設定

2. **フラッシュ暗号化:**

   - `Security features` に移動します
   - セキュアなデプロイメントのためのフラッシュ暗号化オプションを設定

3. **パーティションテーブル:**

   - `Partition Table` に移動します
   - 異なるアプリケーションニーズに合わせてフラッシュパーティションを変更

4. **ログ出力:**
   - `Component config` → `Log output` に移動します
   - デバッグログレベルと出力先を設定

変更を加えた後、`Q` を押して終了し、`Y` を押して変更を保存します。その後、以下のコマンドでプロジェクトを再ビルドします：

```bash
idf.py build
```

#### BLEデバイス名の変更

BLEデバイス名を変更するには、`components/ble_beacon/common.h` 内の `DEVICE_NAME` マクロを変更する必要があります：

1. ファイルを開きます：

   ```bash
   nano components/ble_beacon/common.h
   ```

2. `DEVICE_NAME` の定義を見つけて、希望する名前に変更します：

   ```c
   #define DEVICE_NAME "MyCustomSensor"
   ```

3. ファイルを保存してプロジェクトを再ビルドします。

## ステップ5: プロジェクトのビルドとフラッシュ

1. **プロジェクトディレクトリに移動**：

   ```bash
   cd ~/Desktop/xiao_ibeacon
   ```

2. **プロジェクトを設定**：

   ```bash
   idf.py set-target esp32c3
   idf.py menuconfig
   ```

   メニューをナビゲートして設定を確認または調整します：

   - Component Config → BME680 Sensor Settings
   - Component Config → BLE Beacon Settings
   - Component Config → Power Management

3. **プロジェクトをビルド**：

   ```bash
   idf.py build
   ```

4. **XIAO ESP32-C3にプロジェクトをフラッシュ**：

   ```bash
   idf.py -p /dev/ttyUSB0 flash
   ```

   注意: ポートは異なる場合があります（Windowsの場合: COM3, COM4など）

5. **出力をモニタリング**（オプション）：

   ```bash
   idf.py -p /dev/ttyUSB0 monitor
   ```

   モニタを終了するには、Ctrl+] を押します。

## ステップ 6: iBeacon のテスト

1. **スマートフォンに BLE スキャナーアプリをダウンロード**:

   - iOS: "LightBlue" または "nRF Connect"
   - Android: "nRF Connect" または "BLE Scanner"

2. **アプリを開いて BLE デバイスをスキャン**:

   - "Xiao_TempSensor" という名前のデバイスを探します
   - デバイスを選択して、そのアドバタイズデータを確認します

3. **アドバタイズデータを理解する**:
   BLE アドバタイズには以下のデータが含まれます:

   - 温度（摂氏、100 倍スケール）
   - 湿度（パーセント）
   - 気圧（hPa、10 倍スケール）

4. **期待される動作**:
   - デバイスは約 30 秒ごとに起動します
   - BME680 センサーからデータを取得します
   - このデータを 500ms 間ブロードキャストします
   - その後、電力を節約するためにディープスリープに入ります

### Python テストスクリプト

このプロジェクトには、BLE ビーコンの機能をテストおよび検証するための Python スクリプトが含まれています。以下に詳細を説明します。

#### Python 環境のセットアップ

1. テストスクリプトのディレクトリに移動します:

   ```bash
   cd ~/Desktop/xiao_ibeacon/test_scripts
   ```

2. セットアップスクリプトを実行して仮想環境を作成および構成します:

   ```bash
   # Linux/macOS の場合
   chmod +x setup_venv.sh
   ./setup_venv.sh

   # Windows の場合
   setup_venv.bat
   ```

3. 仮想環境を有効化します:

   ```bash
   # Linux/macOS の場合
   source venv/bin/activate

   # Windows の場合
   venv\Scripts\activate
   ```

セットアップスクリプトは以下の必要なパッケージをインストールします:

- `bleak`: BLE 通信用
- `colorama`: カラフルなターミナル出力用

#### BLE スキャナースクリプトの使用

BLE スキャナースクリプト (`ble_beacon_scanner.py`) は、BLE アドバタイズをスキャンし、ビーコンからのセンサーデータを表示します。

スキャナーの主な機能:

- "Xiao_TempSensor" という名前のデバイスを探します
- メーカー固有のデータをデコードして、温度、湿度、気圧を抽出します
- フォーマットされたターミナル UI に値を表示します
- 新しいアドバタイズを受信するたびに継続的に更新します

スキャナーを実行するには:

```bash
python ble_beacon_scanner.py
```

スクリプトは最新のセンサー読み取り値をフォーマットされた出力で表示します:

```
╔═══════════════════════════════════════════════╗
║ Xiao Temperature Sensor Beacon Scanner        ║
╠═══════════════════════════════════════════════╣
║ Last Update: 15:42:27                         ║
║ Signal Strength: -63 dBm                      ║
╠═══════════════════════════════════════════════╣
║ Temperature: 23.45 °C                         ║
║ Humidity: 48 %                                ║
║ Pressure: 1013.2 hPa                          ║
╠═══════════════════════════════════════════════╣
║ Press Ctrl+C to exit                          ║
╚═══════════════════════════════════════════════╝
```

スクリプト内で `DEBUG_MODE = True` に設定すると、BLE アドバタイズやデータ解析に関する追加情報が表示されます。

#### ビーコンデータフォーマット

ビーコンは、BLE アドバタイズの制限内に収まるように圧縮フォーマットでデータを送信します:

1. 会社 ID: 0x02E5 (Espressif Systems)
2. 温度: 16 ビット符号付き整数、100 倍スケール（100 で割ると摂氏温度）
3. 湿度: 8 ビット符号なし整数（直接パーセント値）
4. 気圧: 16 ビット符号なし整数、10 倍スケール（10 で割ると hPa）

Python スクリプトはこのフォーマットをデコードし、実際の値を表示します。

#### テストプロセスの流れ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/4.png" style={{width:600, height:'auto'}}/></div>

## ステップ 7: 動作の仕組み - 詳細解説

### センサーの初期化と読み取り

BME680センサーは以下の手順で初期化されます：

1. **I2C設定**: 適切なピンでI2C通信を設定します（XIAO ESP32-C3拡張ボードの場合、GPIO6/GPIO7がSDA/SCLに対応）
2. **センサー初期化**: 温度、湿度、気圧、ガス測定の設定を使用してBME680センサーを構成
3. **読み取りプロセス**: 測定を開始し、データが準備されるのを待機
4. **データ処理**: 生のセンサー値を人間が読み取れる測定値に変換

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/5.png" style={{width:800, height:'auto'}}/></div>

### BLEアドバタイズ

BLE機能は以下のように動作します：

1. **BLEスタック初期化**: ESP32のBLEスタックを設定
2. **アドバタイズ設定**: アドバタイズのパラメータ（間隔、データ形式）を構成
3. **データパッケージ化**: センサーの読み取り値を取得し、メーカー固有のデータとしてパッケージ化
4. **アドバタイズの開始/停止**: アドバタイズのタイミングを制御

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/6.png" style={{width:800, height:'auto'}}/></div>

### 電源管理

電源管理システムはESP32-C3の内蔵スリープ機能を使用します：

1. **ディープスリープ設定**: ESP-IDFのスリープAPI（`esp_sleep_enable_timer_wakeup()`）を使用してウェイクアップタイマーを設定
2. **ウェイクアップソース**: タイマーを唯一のウェイクアップソースとして設定（指定された期間後にシステムがウェイクアップ）
3. **スリープエントリ**: アクティブな周辺機器を安全にシャットダウンし、`esp_deep_sleep_start()`でディープスリープに入る
4. **ウェイクアッププロセス**: タイマーが期限切れになると、システムがリセットされ、アプリケーションが最初から再起動

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/7.png" style={{width:800, height:'auto'}}/></div>

電源管理コンポーネント（`power_manager.c`）は、スリープモードを処理するためのシンプルなインターフェースを提供します：

```c
// 電源管理を初期化
power_manager_init();

// 後でスリープするタイミングで：
power_manager_enter_deep_sleep(30000); // 30秒間スリープ
```

デバイスがディープスリープに入ると、消費電力は劇的に低下し（約10-20μA）、長いバッテリー寿命を実現します。デバイスは完全にシャットダウンし、タイマーが期限切れになると再起動するため、保持する必要がある状態はRTCメモリまたは不揮発性ストレージに保存する必要があります。

### 消費電力プロファイル

#### 電力プロファイリングのセットアップ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/8.webp" style={{width:600, height:'auto'}}/></div>

#### 電力プロファイル

システムには以下のような消費電力フェーズがあります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/9.png" style={{width:800, height:'auto'}}/></div>

**消費電力フェーズ:**

1. **スリープフェーズ**: ディープスリープモードで約150μA（ESP32-C3 RTCコントローラーアクティブ + BME680スリープ）
2. **ウェイクアップと初期化**: 起動およびセンサー初期化中に約40mA
3. **アクティブBLEアドバタイズ**: BLE送信中にピークで約16mA
4. **クリーンアップとスリープエントリ**: スリープエントリ前のリソースクリーンアップ中に約5mA

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/10.png" style={{width:800, height:'auto'}}/></div>

**バッテリー寿命の計算:**

- ディープスリープ中の平均電流（28秒間）: 150μA
- アクティブフェーズ中の平均電流（2秒間）: 約40mA
- 実効平均電流: 3.92 mA（1分間で測定）
- 一般的な1500 mAhのリチウムイオンバッテリーの場合：
  - 1500 mAh ÷ 3.92 mA ≈ 382時間 ≈ 15.9日

**電力最適化のヒント:**

- 高電流期間を最小限に抑えるためにアドバタイズ時間を短縮
- 使用可能な最低のアドバタイズ電力を使用
- 未使用の周辺機器を無効化
- センサー読み取りプロセスを最適化
- スリープ期間を延長することを検討

## ステップ 8: プロジェクトのカスタマイズ

プロジェクトのさまざまな側面をカスタマイズできます：

1. **スリープ時間の変更**:

   - `main.c`内の`SLEEP_TIME_MS`を編集して、読み取り間隔を調整します

2. **センサー設定の変更**:

   - `idf.py menuconfig`を使用して、センサーのサンプリングレートやフィルターなどを変更します

3. **BLEパラメータの調整**:

   - BLEビーコンコンポーネント内でデバイス名やアドバタイズ間隔を変更します

4. **追加センサーの追加**:
   - センサーコンポーネントを拡張して、他のGroveセンサーを含めます

### 独自センサーの追加

別のセンサーをこのプロジェクトに統合するには、以下の手順に従います：

1. **新しいセンサーコンポーネントを作成**:

   ```bash
   # コンポーネントディレクトリ構造を作成
   mkdir -p components/my_new_sensor/include
   touch components/my_new_sensor/CMakeLists.txt
   touch components/my_new_sensor/Kconfig
   touch components/my_new_sensor/my_new_sensor.c
   touch components/my_new_sensor/include/my_new_sensor.h
   ```

2. **コンポーネントインターフェースを実装**:

   - 初期化関数を定義
   - データ読み取り関数を作成
   - 必要な設定をセットアップ

   ヘッダーファイルの例 (`my_new_sensor.h`):

   ```c
   #pragma once
   #include <stdbool.h>
   #include "esp_err.h"

   typedef struct {
       float value1;
       float value2;
       // 追加のセンサー値
   } my_sensor_data_t;

   /**
    * @brief センサーを初期化
    * @return 成功時はESP_OK
    */
   esp_err_t my_sensor_init(void);

   /**
    * @brief センサーからデータを読み取る
    * @param data 読み取り結果を格納する構造体へのポインタ
    * @return 成功時はESP_OK
    */
   esp_err_t my_sensor_read(my_sensor_data_t *data);
   ```

3. **ビルドシステムを設定**:
   `CMakeLists.txt`の例:

   ```cmake
   idf_component_register(
       SRCS "my_new_sensor.c"
       INCLUDE_DIRS "include"
       REQUIRES driver
   )
   ```

4. **メインアプリケーションを更新**:

   - メインアプリケーションの依存関係にコンポーネントを追加
   - メインアプリケーションフローでセンサーを初期化
   - BLEアドバタイズデータにセンサーの読み取り値を含める

   `main.c`での統合例:

   ```c
   #include "my_new_sensor.h"

   void app_main(void) {
       // 他のコンポーネントを初期化
       // ...

       // 新しいセンサーを初期化
       ESP_ERROR_CHECK(my_new_sensor_init());

       // センサーからデータを読み取る
       my_sensor_data_t sensor_data;
       ESP_ERROR_CHECK(my_sensor_read(&sensor_data));

       // BLEデータを修正してセンサーの読み取り値を含める
       // ...
   }
   ```

5. **BLEアドバタイズデータを拡張**:

   - BLEビーコンコンポーネントを更新して、センサーのデータをアドバタイズに含める
   - 新しい測定値に適切なデータタイプIDを割り当てる

6. **設定を更新**:
   - `components/my_new_sensor/Kconfig`にセンサー用のKconfigオプションを追加
   - これにより、`menuconfig`を通じてセンサーを設定可能にする

この構造化されたアプローチに従うことで、プロジェクトのモジュール構造を維持しながら、追加センサーをシームレスに統合できます。

## トラブルシューティング

### 重要なヒント

:::tip
**通常動作中にシリアル出力がない**  
最適な電力効率を実現するため、通常動作中はシリアルポートを介したデバッグ情報は出力されません。デバイスがディープスリープモードにある場合、LEDも点滅しません。これは電力消費を最小限に抑えるための意図的な設計です。

**デバイスの再フラッシュ**  
デバイスを再フラッシュするには：

1. フラッシュプロセスを開始するときにXIAOボードのリセットボタンを押します
2. フラッシュコマンドを、デバイスがディープスリープ状態でない短いアクティブ期間に合わせて実行します
3. または、リセットボタンを押し続け、フラッシュコマンドを開始し、フラッシュが始まったらリセットボタンを離します

**開発用のデバッグ出力を再有効化**  
独自モジュールの開発やデバッグ時には、シリアル出力を再有効化できます：

1. `idf.py menuconfig`を実行
2. `Component config` → `Log output`に移動
3. デフォルトのログレベルを`INFO`または`DEBUG`に設定
4. ログ出力先を`UART0`に設定
5. バッテリー寿命を維持するため、本番環境にデプロイする前に詳細なログを再度無効化することを忘れないでください

:::

### センサーが検出されない場合

センサー検出に問題がある場合：

1. **接続を確認**:

   - Groveケーブルがセンサーと拡張ボードの両方に正しく接続されていることを確認
   - I2C Groveポートを使用していることを確認

2. **I2Cアドレスの問題**:

   - BME680のデフォルトI2Cアドレスは0x76です。一部のモジュールでは0x77を使用する場合があります。
   - 必要に応じて設定でI2Cアドレスを編集

3. **電源の問題**:
   - XIAOが十分な電力を得ていることを確認
   - 別のUSBケーブルやポートを試す

### BLEがアドバタイズされない場合

BLEアドバタイズが検出されない場合：

1. **BLEスキャナーアプリを確認**:

   - 別のBLEスキャナーアプリを試す
   - スマートフォンでBluetoothが有効になっていることを確認

2. **デバッグ出力を監視**:

   - `idf.py monitor`を使用してエラーメッセージを確認

3. **アドバタイズ時間**:
   - デフォルト設定では500msのみアドバタイズします。見逃した場合は、`main.c`内の`ADV_TIME_MS`を増やします

### ビルドまたはフラッシュの失敗

ビルドまたはフラッシュの問題が発生した場合：

1. **ESP-IDFのバージョン**:

   - ESP-IDF v5.0以降を使用していることを確認
   - コマンド実行前に`. $IDF_PATH/export.sh` (Linux/macOS)または`%IDF_PATH%\export.bat` (Windows)を実行

2. **USB接続**:

   - USB接続が安定していることを確認
   - フラッシュ前にXIAO拡張ボードのリセットボタンを押してみる

3. **ポートの問題**:
   - `ls /dev/tty*` (Linux/macOS)またはデバイスマネージャー (Windows)を使用して正しいポートを特定
   - 正しいポートを指定して`-p`フラグを使用

## 結論

これで、温度、湿度、気圧、空気品質データをBLEを使用してブロードキャストする、省電力の環境モニタリングシステムを構築しました。このプロジェクトでは、以下の重要な概念を実証しています：

1. **センサー統合**: ESP-IDFでのI2Cセンサーの操作  
2. **BLE通信**: BLEアドバタイズメントの作成と管理  
3. **電力管理**: バッテリー効率を高めるためのディープスリープの実装  
4. **ESP-IDF開発**: ESP32開発のためのEspressif公式フレームワークの使用  

### 全体的なシステムアーキテクチャ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/11.png" style={{width:800, height:'auto'}}/></div>

この基盤を拡張することで、より複雑なIoTセンサーノード、環境モニタリングシステム、または資産追跡ソリューションを作成することができます。

## リソース

- [ESP-IDF プログラミングガイド](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/)  
- [XIAO ESP32-C3 Wiki](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/)  
- [BME680 データシート](https://www.bosch-sensortec.com/products/environmental-sensors/gas-sensors/bme680/)  
- [プロジェクト GitHub リポジトリ](https://github.com/Priyanshu0901/xiao_ibeacon)  

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio の [コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) によってサポートされています。  
- 特に [Priyanshu Roy](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=106309063&issue=Seeed-Studio%7Cwiki-documents%7C2422) 氏の献身的な努力に感謝します。あなたの作業は [展示](https://wiki.seeedstudio.com/contributors/) されます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品のご利用がスムーズに進むよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>