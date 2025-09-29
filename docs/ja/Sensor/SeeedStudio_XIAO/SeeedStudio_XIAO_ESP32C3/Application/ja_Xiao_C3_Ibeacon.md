---
description: ESP-IDFを使用したBME680センサー付きXIAO ESP32-C3 iBeacon
title: ESP-IDFを使用したBME680センサー付きXIAO ESP32-C3 iBeacon
keywords:
  - ESP-IDF
  - XIAO
image: https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/8.webp
slug: /ja/xiao-c3-ibeacon
last_update:
  date: 04/14/2025
  author: Priyanshu Roy
---

# ESP-IDFを使用したBME680センサー付きXIAO ESP32-C3 iBeacon

このチュートリアルでは、Bluetooth Low Energy（BLE）をiBeacon形式で使用して環境データをブロードキャストする低消費電力温度監視システムを構築します。Seeed Studio XIAO ESP32-C3、XIAO拡張ボード、およびGrove BME680環境センサーを使用します。このプロジェクトでは、Espressifの公式開発フレームワークであるESP-IDFを使用して堅牢な組み込みアプリケーションを構築する方法を実演します。

## 概要

私たちのシステムは以下を行います：

1. BME680センサーから温度、湿度、気圧を読み取る
2. このデータをBLEアドバタイズメントパケットにパッケージ化する
3. 定期的に起動し、測定を行い、データをアドバタイズし、バッテリー電力を節約するためにスリープに戻る

### システムフローチャート

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/1.png" style={{width:300, height:800}}/></div>

このフローチャートは、起動からディープスリープに戻るまでのシステムの主要な動作サイクルを示しています。

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
    </div></td>
</tr>
</table>

- USB Type-C ケーブル
- ESP-IDF がインストールされたコンピュータ

## ソフトウェア要件

- [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/get-started/index.html) (v5.0 以降)
- Git
- [プロジェクト GitHub リポジトリ](https://github.com/Priyanshu0901/xiao_ibeacon)

## ステップ 1: ハードウェアセットアップ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/2.webp" style={{width:800, height:'auto'}}/></div>

1. **BME680 センサーを XIAO 拡張ボードに接続**:

   - Grove BME680 センサーを XIAO 拡張ボードの I2C ポートの一つに接続します。
   - センサーは I2C 経由で通信するため、I2C 対応の Grove ポートであればどれでも動作します。

2. **XIAO ESP32-C3 を拡張ボードに取り付け**:

   - XIAO ESP32-C3 モジュールを拡張ボードに慎重に位置合わせして挿入します。
   - ピンが適切に位置合わせされ、モジュールがしっかりと固定されていることを確認してください。

3. **コンピュータに接続**:
   - USB Type-C ケーブルを使用して XIAO 拡張ボードをコンピュータに接続します。

## ステップ 2: 開発環境のセットアップ

1. **ESP-IDF のインストール**:
   お使いのオペレーティングシステム向けの[公式インストール手順](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/get-started/index.html)に従ってください。

   Linux の場合、以下を使用できます:

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
   `--recurse-submodules` フラグは、プロジェクトがGitサブモジュールとして含まれる外部ライブラリに依存しているため重要です。これがないと、コンパイルが失敗します。

   サブモジュールなしで既にクローンしている場合は、以下を実行してください：

   ```bash
   git submodule update --init --recursive
   ```

   :::

## ステップ3: プロジェクト構造とコンポーネントの理解

このプロジェクトは3つの主要なコンポーネントで構成されています：

1. **BME680センサーコンポーネント (`sensor_t_a_h`)**:

   - BME680センサーとの通信を処理
   - センサーの初期化、読み取り、データ処理を管理
   - 温度、湿度、気圧データを提供

2. **BLEビーコンコンポーネント (`ble_beacon`)**:

   - BLEスタックを設定
   - センサーデータを含むBLEアドバタイズメントを作成・送信
   - BLEの初期化とクリーンアップを管理

3. **電源管理コンポーネント (`power_manager`)**:
   - ディープスリープ機能を処理
   - 電力効率的な動作を管理
   - ウェイクアップソースとスリープ時間を制御

### コンポーネントの相互作用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/3.png" style={{width:800, height:'auto'}}/></div>

この図は、異なるソフトウェアコンポーネントがシステムのハードウェア要素とどのように相互作用するかを示しています。

## ステップ4: 設定の理解

ビルドする前に、主要な設定を理解しましょう：

1. **メインアプリケーション設定** (`main.c`内):

   - `ADV_TIME_MS`: BLEアドバタイジングの持続時間 (500ms)
   - `POLL_INTERVAL_MS`: センサーをポーリングする頻度 (150ms)
   - `TIMEOUT_MS`: センサー読み取りを待つ最大時間 (2000ms)
   - `SLEEP_TIME_MS`: 測定間のスリープ時間 (~29.3秒)

2. **センサー設定** (`components/sensor_t_a_h/Kconfig`内):

   ```
   menu "BME68X Configuration"
       config BME68X_I2C_ADDR
           hex "BME68X I2C Address"
           default 0x76
           help
               I2C address of the BME68X sensor. Default is 0x76.
               Use 0x77 if SDO pin is pulled high.

       choice BME68X_INTERFACE
           prompt "BME68X Interface"
           default BME68X_USE_I2C
           help
               Select the interface to use with BME68X sensor.

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
                   I2C port number for BME68X.

           config BME68X_I2C_SDA_PIN
               int "I2C SDA GPIO"
               range 0 48
               default 12
               help
                   GPIO pin for I2C SDA.

           config BME68X_I2C_SCL_PIN
               int "I2C SCL GPIO"
               range 0 48
               default 13
               help
                   GPIO pin for I2C SCL.

           config BME68X_I2C_CLOCK_SPEED
               int "I2C Clock Frequency (Hz)"
               range 100000 400000
               default 100000
               help
                   I2C clock frequency for BME68X. Standard mode (100 KHz) or Fast mode (400 KHz).
       endif
   endmenu
   ```

3. **BLE設定**（`components/ble_beacon/common.h`内）：
   BLEデバイス名は`common.h`ファイルで定義されています：

   ```c
   #define DEVICE_NAME "Xiao_TempSensor"
   ```

### 設定パラメータの変更

#### ESP-IDFのmenuconfigツールの使用

ESP-IDFフレームワークは**menuconfig**と呼ばれる強力な設定ツールを提供しており、プロジェクト設定を変更するためのテキストベースのUIを提供します。このツールはLinuxカーネルで使用されているのと同じ設定システムであるKconfigに基づいています。

設定インターフェースを起動するには：

```bash
idf.py menuconfig
```

これにより、設定カテゴリを含むテキストベースのUIが表示されます：

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

- `↑` と `↓` 矢印キーでナビゲート
- `Enter` を押してサブメニューに入る
- `Esc` を押して戻る
- `Space` を押してオプションを切り替え
- ブール値オプションで `Y` は「はい」、`N` は「いいえ」
- `?` を押して現在選択されているオプションのヘルプを表示
- `Q` または `Esc` を複数回押して終了し、`Y` で変更を保存

**センサー設定の検索:**

1. `Component config` にナビゲート
2. 下にスクロールして `BME68X Configuration` を見つける
3. `Enter` を押してセンサー設定を表示

**BLE設定の検索:**

1. `Component config` にナビゲート
2. `Bluetooth` を見つけて入る
3. `NimBLE Options` を選択
4. ここで様々なBLEパラメータを設定できます

##### BME680のI2Cピン設定

BME680センサーのI2Cピンを設定するには:

1. menuconfigで次の場所にナビゲート: `Component config` → `BME68X Configuration`
2. `I2C SDA GPIO` を選択してSDAピンを変更
3. SDA用のGPIO番号を入力（デフォルトは12ですが、拡張ボード付きのXIAO ESP32-C3では6を使用）
4. `I2C SCL GPIO` を選択してSCLピンを変更
5. SCL用のGPIO番号を入力（デフォルトは13ですが、拡張ボード付きのXIAO ESP32-C3では7を使用）
6. センサーが異なるI2Cアドレスを持つ場合は、`BME68X I2C Address` を選択して変更

##### menuconfigによるBLEパラメータの設定

デバイス名はコードで定義されていますが、他のBLEパラメータはmenuconfigで設定できます:

1. 次の場所にナビゲート: `Component config` → `Bluetooth` → `NimBLE Options`
2. ここで以下を変更できます:
   - 同時接続の最大数
   - BLEロール（Central/Peripheral/Observer/Broadcaster）
   - セキュリティ設定
   - GAPとGATTパラメータ
   - BLEスタック用のメモリ割り当て

##### 高度な設定オプション

上級ユーザー向けに、追加の設定オプションが利用可能です:

1. **電源管理:**

   - 次の場所にナビゲート: `Component config` → `Power Management`
   - 自動ライトスリープの有効/無効
   - DFS（動的周波数スケーリング）の設定

2. **フラッシュ暗号化:**

   - `Security features` にナビゲート
   - セキュアな展開のためのフラッシュ暗号化オプションを設定

3. **パーティションテーブル:**

   - `Partition Table` にナビゲート
   - 異なるアプリケーションニーズに応じてフラッシュパーティショニングを変更

4. **ログ出力:**
   - 次の場所にナビゲート: `Component config` → `Log output`
   - デバッグログレベルと出力先を設定

変更を行った後、`Q` を押して終了し、`Y` で変更を保存します。その後、以下のコマンドでプロジェクトを再ビルドします:

```bash
idf.py build
```

#### BLEデバイス名の変更

BLEデバイス名を変更するには、`components/ble_beacon/common.h`の`DEVICE_NAME`マクロを変更する必要があります：

1. ファイルを開く：

   ```bash
   nano components/ble_beacon/common.h
   ```

2. `DEVICE_NAME` の定義を見つけて、希望する名前に変更します：

   ```c
   #define DEVICE_NAME "MyCustomSensor"
   ```

3. ファイルを保存し、プロジェクトをリビルドします。

## ステップ 5: プロジェクトのビルドとフラッシュ

1. **プロジェクトディレクトリに移動**:

   ```bash
   cd ~/Desktop/xiao_ibeacon
   ```

2. **プロジェクトを設定する**：

   ```bash
   idf.py set-target esp32c3
   idf.py menuconfig
   ```

   メニューを移動して設定を確認または調整します：

   - Component Config → BME680 Sensor Settings
   - Component Config → BLE Beacon Settings
   - Component Config → Power Management

3. **プロジェクトをビルドします**：

   ```bash
   idf.py build
   ```

4. **プロジェクトをXIAO ESP32-C3にフラッシュする**：

   ```bash
   idf.py -p /dev/ttyUSB0 flash
   ```

   注意：あなたのポートは異なる可能性があります（Windows: COM3、COM4など）

5. **出力を監視する**（オプション）：

   ```bash
   idf.py -p /dev/ttyUSB0 monitor
   ```

   Ctrl+]を押してモニターを終了します。

## ステップ6: iBeaconのテスト

1. **スマートフォンにBLEスキャナーアプリをダウンロード**:

   - iOS: "LightBlue" または "nRF Connect"
   - Android: "nRF Connect" または "BLE Scanner"

2. **アプリを開いてBLEデバイスをスキャン**:

   - "Xiao_TempSensor"という名前のデバイスを探す
   - デバイスを選択してアドバタイズメントデータを表示

3. **アドバタイズメントデータの理解**:
   BLEアドバタイズメントには以下が含まれます:

   - 温度（摂氏、100倍スケール）
   - 湿度（パーセント）
   - 気圧（hPa、10倍スケール）

4. **期待される動作**:
   - デバイスは約30秒ごとに起動
   - BME680センサーから読み取り値を取得
   - このデータを500ms間ブロードキャスト
   - その後、電力節約のためディープスリープに入る

### Pythonテストスクリプト

このプロジェクトには、BLEビーコン機能のテストと検証を支援するPythonスクリプトが含まれています。それらを見てみましょう:

#### Python環境のセットアップ

1. テストスクリプトディレクトリに移動:

   ```bash
   cd ~/Desktop/xiao_ibeacon/test_scripts
   ```

2. セットアップスクリプトを実行して仮想環境を作成・設定します：

   ```bash
   # On Linux/macOS
   chmod +x setup_venv.sh
   ./setup_venv.sh

   # On Windows
   setup_venv.bat
   ```

3. 仮想環境をアクティベートします：

   ```bash
   # On Linux/macOS
   source venv/bin/activate

   # On Windows
   venv\Scripts\activate
   ```

セットアップスクリプトは必要なパッケージをインストールします：

- `bleak`: BLE通信用
- `colorama`: カラーターミナル出力用

#### BLEスキャナースクリプトの使用

BLEスキャナースクリプト（`ble_beacon_scanner.py`）はBLEアドバタイズメントをスキャンし、ビーコンからのセンサーデータを表示します。

スキャナーの主な機能：

- "Xiao_TempSensor"という名前のデバイスを検索
- メーカー固有データをデコードして温度、湿度、気圧を抽出
- フォーマットされたターミナルUIで値を表示
- 新しいアドバタイズメントを受信すると継続的に更新

スキャナーを実行するには：

```bash
python ble_beacon_scanner.py
```

スクリプトは最新のセンサー読み取り値を含む、きれいにフォーマットされた出力を表示します：

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

スクリプトでデバッグモードを有効にするには、`DEBUG_MODE = True` を設定します。これにより、BLE アドバタイズメントとデータ解析に関する追加情報が表示されます。

#### ビーコンデータフォーマット

ビーコンは、BLE アドバタイズメントの制限内に収まるよう、圧縮されたフォーマットでデータを送信します：

1. Company ID: 0x02E5 (Espressif Systems)
2. 温度: 16ビット符号付き整数、100倍スケール（100で割って°Cを取得）
3. 湿度: 8ビット符号なし整数（直接のパーセンテージ値）
4. 気圧: 16ビット符号なし整数、10倍スケール（10で割ってhPaを取得）

Python スクリプトはこのフォーマットをデコードし、実際の値を表示します。

#### テストプロセスのフロー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/4.png" style={{width:600, height:'auto'}}/></div>

## ステップ 7: 動作原理 - 詳細解説

### センサーの初期化と読み取り

BME680 センサーは以下のステップで初期化されます：

1. **I2C 設定**: 適切なピンで I2C 通信を設定（XIAO ESP32-C3 と拡張ボードの場合、SDA/SCL に GPIO6/GPIO7 を使用）
2. **センサー初期化**: 温度、湿度、気圧、ガス測定の設定で BME680 センサーを構成
3. **読み取りプロセス**: 測定を開始し、データの準備完了を待機
4. **データ処理**: 生のセンサー値を人間が読める測定値に変換

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/5.png" style={{width:800, height:'auto'}}/></div>

### BLE アドバタイズメント

BLE 機能は以下のように動作します：

1. **BLE スタック初期化**: ESP32 の BLE スタックを設定
2. **アドバタイズメント設定**: アドバタイズメントパラメータ（間隔、データフォーマット）を構成
3. **データパッケージング**: センサー読み取り値を取得し、メーカー固有データにパッケージ化
4. **アドバタイズメント開始/停止**: アドバタイズメントのタイミングを制御

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/6.png" style={{width:800, height:'auto'}}/></div>

### 電源管理

電源管理システムは ESP32-C3 の内蔵スリープ機能を使用します：

1. **ディープスリープ設定**: ESP-IDF のスリープ API（`esp_sleep_enable_timer_wakeup()`）を使用してウェイクアップタイマーを構成
2. **ウェイクアップソース**: タイマーを唯一のウェイクアップソースとして設定（システムは指定された時間後にウェイクアップ）
3. **スリープ開始**: `esp_deep_sleep_start()` でディープスリープに入る前に、アクティブな周辺機器を安全にシャットダウン
4. **ウェイクアッププロセス**: タイマーが満了すると、システムはリセットを実行し、最初からアプリケーションを再開

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/7.png" style={{width:800, height:'auto'}}/></div>

電源管理コンポーネント（`power_manager.c`）は、スリープモードを処理するためのシンプルなインターフェースを提供します：

```c
// Initialize power manager
power_manager_init();

// Later, when it's time to sleep:
power_manager_enter_deep_sleep(30000); // Sleep for 30 seconds
```

デバイスがディープスリープに入ると、消費電力は劇的に低下し（約10-20 μA）、長いバッテリー寿命を実現できます。デバイスは完全にシャットダウンし、タイマーが満了すると再起動するため、保持する必要がある状態はRTCメモリまたは不揮発性ストレージに保存する必要があります。

### 消費電力プロファイル

#### 電力プロファイリングセットアップ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/8.webp" style={{width:600, height:'auto'}}/></div>

#### 電力プロファイル

システムには以下の電力プロファイルに示すように、明確な電力使用フェーズがあります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/9.png" style={{width:800, height:'auto'}}/></div>

**電力フェーズ：**

1. **スリープフェーズ**: ディープスリープモードで約150μA（ESP32-C3 RTCコントローラーアクティブ + bme680スリープ）
2. **ウェイクアップ & 初期化**: 起動とセンサー初期化中に約40mA
3. **アクティブBLEアドバタイジング**: BLE送信中のピーク約16mA
4. **クリーンアップ & スリープエントリー**: スリープエントリー前のリソースクリーンアップ中に約5mA

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/10.png" style={{width:800, height:'auto'}}/></div>

**バッテリー寿命計算：**

- ディープスリープ中の平均電流（28秒）: 150μA
- アクティブフェーズ中の平均電流（2秒）: 約40mA
- 実効平均電流: 3.92 mA（1分間で測定）
- 一般的な1500 mAh Li-Ionバッテリーの場合：
  - 1500 mAh ÷ 3.92 mA ≈ 382時間 ≈ 15.9日

**電力最適化のヒント：**

- アドバタイジング時間を短縮して高電流期間を最小化
- 実現可能な最低のアドバタイジング電力を使用
- 未使用の周辺機器を無効化
- センサー読み取りプロセスを最適化
- スリープ時間の延長を検討

## ステップ8: プロジェクトのカスタマイズ

プロジェクトの様々な側面をカスタマイズできます：

1. **スリープ時間の変更**:

   - `main.c`の`SLEEP_TIME_MS`を編集して、読み取り頻度を調整

2. **センサー設定の変更**:

   - `idf.py menuconfig`を使用してセンサーサンプリングレート、フィルターなどを変更

3. **BLEパラメーターの調整**:

   - BLEビーコンコンポーネントでデバイス名やアドバタイジング間隔を変更

4. **追加センサーの追加**:
   - センサーコンポーネントを拡張して他のGroveセンサーを含める

### 独自センサーの追加

このプロジェクトに異なるセンサーを統合するには、以下の手順に従ってください：

1. **新しいセンサーコンポーネントの作成**:

   ```bash
   # Create component directory structure
   mkdir -p components/my_new_sensor/include
   touch components/my_new_sensor/CMakeLists.txt
   touch components/my_new_sensor/Kconfig
   touch components/my_new_sensor/my_new_sensor.c
   touch components/my_new_sensor/include/my_new_sensor.h
   ```

2. **コンポーネントインターフェースの実装**:

   - 初期化関数を定義
   - データ読み取り関数を作成
   - 必要な設定をセットアップ

   ヘッダーファイルの例（`my_new_sensor.h`）:

   ```c
   #pragma once
   #include <stdbool.h>
   #include "esp_err.h"

   typedef struct {
       float value1;
       float value2;
       // Additional sensor values
   } my_sensor_data_t;

   /**
    * @brief Initialize the sensor
    * @return ESP_OK on success
    */
   esp_err_t my_sensor_init(void);

   /**
    * @brief Read data from the sensor
    * @param data Pointer to structure to store readings
    * @return ESP_OK on success
    */
   esp_err_t my_sensor_read(my_sensor_data_t *data);
   ```

3. **ビルドシステムの設定**:
   `CMakeLists.txt`の例:

   ```cmake
   idf_component_register(
       SRCS "my_new_sensor.c"
       INCLUDE_DIRS "include"
       REQUIRES driver
   )
   ```

4. **メインアプリケーションの更新**:

   - メインアプリケーションの依存関係にあなたのコンポーネントを追加
   - メインアプリケーションフローでセンサーを初期化
   - BLEアドバタイズメントデータにセンサーの読み取り値を含める

   `main.c`での統合例:

   ```c
   #include "my_new_sensor.h"

   void app_main(void) {
       // Initialize other components
       // ...

       // Initialize your new sensor
       ESP_ERROR_CHECK(my_new_sensor_init());

       // Read from your sensor
       my_sensor_data_t sensor_data;
       ESP_ERROR_CHECK(my_sensor_read(&sensor_data));

       // Modify BLE data to include your sensor readings
       // ...
   }
   ```

5. **BLE広告データの拡張**:

   - BLEビーコンコンポーネントを更新して、センサーデータを広告に含める
   - 新しい測定値に適切なデータタイプIDを割り当てる

6. **設定の更新**:
   - `components/my_new_sensor/Kconfig`にセンサー用のKconfigオプションを追加
   - これにより、ユーザーはmenuconfigを通じてセンサーを設定できるようになります

この構造化されたアプローチに従うことで、プロジェクトのモジュラーアーキテクチャを維持しながら、追加のセンサーをシームレスに統合できます。

## トラブルシューティング

### 重要なヒント

:::tip
**通常動作中のシリアル出力なし**  
最適な電力効率のため、デバイスは通常動作中にシリアルポートを通じてデバッグ情報を出力しません。デバイスがディープスリープモードの時、LEDも点滅しません。これは消費電力を最小限に抑えるための意図的な設計です。

**デバイスの再フラッシュ**  
デバイスを再フラッシュするには：

1. フラッシュプロセスを開始する際にXIAOボードのリセットボタンを押す
2. フラッシュコマンドのタイミングを短いアクティブ期間（デバイスがディープスリープでない時）に合わせる
3. または、リセットボタンを押し続け、フラッシュコマンドを開始し、フラッシュが始まったらリセットボタンを離す

**開発用のデバッグ出力の再有効化**  
独自のモジュールを開発したりデバッグしたりする際は、シリアル出力を再有効化できます：

1. `idf.py menuconfig`を実行
2. `Component config` → `Log output`に移動
3. デフォルトのログレベルを`INFO`または`DEBUG`に設定
4. ログ出力先を`UART0`として設定
5. バッテリー寿命を保持するため、デプロイ前に詳細ログを再度無効にすることを忘れずに

:::

### センサーが検出されない

センサー検出に問題が発生した場合：

1. **接続の確認**:

   - Groveケーブルがセンサーと拡張ボードの両方に正しく接続されていることを確認
   - I2C Groveポートを使用していることを確認

2. **I2Cアドレスの問題**:

   - BME680のデフォルトI2Cアドレスは0x76です。一部のモジュールでは0x77を使用する場合があります
   - 必要に応じて設定でI2Cアドレスを編集

3. **電源の問題**:
   - XIAOが十分な電力を得ていることを確認
   - 異なるUSBケーブルまたはポートを試す

### BLEが広告しない

BLE広告が検出されない場合：

1. **BLEスキャナーアプリの確認**:

   - 異なるBLEスキャナーアプリを試す
   - 携帯電話でBluetoothが有効になっていることを確認

2. **デバッグ出力の監視**:

   - `idf.py monitor`を使用してエラーメッセージを確認

3. **広告時間**:
   - デフォルト設定では500msしか広告しません。見逃した場合は、`main.c`の`ADV_TIME_MS`を増やす

### ビルドまたはフラッシュの失敗

ビルドまたはフラッシュの問題が発生した場合：

1. **ESP-IDFバージョン**:

   - ESP-IDF v5.0以降を使用していることを確認
   - コマンド前に`. $IDF_PATH/export.sh`（Linux/macOS）または`%IDF_PATH%\export.bat`（Windows）を実行

2. **USB接続**:

   - USB接続が安定していることを確認
   - フラッシュ前にXIAO拡張ボードのリセットボタンを押してみる

3. **ポートの問題**:
   - `ls /dev/tty*`（Linux/macOS）またはデバイスマネージャー（Windows）で正しいポートを特定
   - 正しいポートで`-p`フラグを使用

## まとめ

これで、BLEを使用して温度、湿度、気圧、空気質データを放送する電力効率の高い環境監視システムを構築しました。このプロジェクトは、いくつかの重要な概念を実証しています：

1. **センサー統合**: ESP-IDFでのI2Cセンサーの操作
2. **BLE通信**: BLE広告の作成と管理
3. **電力管理**: バッテリー効率の良い動作のためのディープスリープの実装
4. **ESP-IDF開発**: ESP32用のEspressif公式フレームワークの使用

### 全体的なシステムアーキテクチャ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/11.png" style={{width:800, height:'auto'}}/></div>

この基盤は、より複雑なIoTセンサーノード、環境監視システム、または資産追跡ソリューションを作成するために拡張できます。

## リソース

- [ESP-IDF プログラミングガイド](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/)
- [XIAO ESP32-C3 Wiki](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/)
- [BME680 データシート](https://www.bosch-sensortec.com/products/environmental-sensors/gas-sensors/bme680/)
- [プロジェクト GitHub リポジトリ](https://github.com/Priyanshu0901/xiao_ibeacon)

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio [コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) によってサポートされています。
- [Priyanshu Roy](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=106309063&issue=Seeed-Studio%7Cwiki-documents%7C2422) 氏の献身的な努力に特別な感謝を捧げます。あなたの作品は[展示](https://wiki.seeedstudio.com/contributors/)されます。

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
