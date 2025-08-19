---
description: Seeed Studio IoTボタンをZigbee経由でHome Assistantに接続する
title: Seeed Studio IoTボタンをZigbee経由でHome Assistantに接続する
keywords:
  - Zigbee
  - IoTボタン
  - ESP32-C6
  - Home Assistant
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.webp
slug: /ja/seeed_iot_button_with_zigbee
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio IoTボタンをZigbee経由でHome Assistantに接続する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:600, height:'auto'}}/></div>

このチュートリアルでは、Seeed Studio IoTボタンをZigbeeを使用してHome Assistantに接続する方法を説明します。Seeed Studio IoTボタンは、Zigbee機能を備えたESP32-C6チップを内蔵しており、スマートホームにおいて多用途に使用できるデバイスです。このチュートリアルでは、Zigbeeファームウェアの書き込み、Home Assistantとのペアリング、さらにはArduino開発を通じたボタンの動作カスタマイズについて学びます。

## 必要な材料

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio IoTボタン</th>
      <th>Zigbeeコーディネーター（例: Home Assistant Connect ZBT-1）</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/ZBT-1.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-SkyConnect-p-5479.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Seeed Studio IoTボタンは、ESP32-C6チップを内蔵した多用途なスマートボタンです。このボタンは、Zigbeeを介してHome Assistantに統合することで、さまざまなデバイスを制御したり、自動化をトリガーしたりすることができます。ESP32-C6チップを搭載しているため、低消費電力で信頼性の高い接続を提供します。

## IoTボタンにおけるZigbeeの概要

IoTボタンは、Zigbee機能を内蔵したESP32-C6マイクロコントローラーを使用しています。これにより、以下のことが可能です：

1. 追加のハードウェアなしでZigbeeネットワークに直接接続
2. Zigbeeエンドデバイス（ZED）として動作
3. ボタンの押下パターンに基づいて異なるコマンドを送信
4. Zigbeeの低消費電力特性により、バッテリー駆動で長期間動作

このボタンは、以下の3つのアクションをサポートしています：
- **シングルクリック**: 素早く押して離す
- **ダブルクリック**: 400ms以内に2回素早く押す
- **長押し**: 1秒以上押し続ける（工場出荷時リセット）

## 方法 1: 事前構築された Zigbee ファームウェアを使用する

最も簡単に始める方法は、IoT ボタン用の事前構築された Zigbee ファームウェアを使用することです。

### ステップ 1: 事前構築されたファームウェアをダウンロードする

1. [Seeed IoT Button GitHub リポジトリ](https://github.com/Seeed-Projects/Seeed_IoT_Button_Zigbee)にアクセスします。
2. `Zigbee_Seeed_IoT_Button/build/factory_firmware_zigbee` ディレクトリに移動します。
3. 以下のファームウェアファイルをダウンロードします:
   - `Zigbee_Seeed_IoT_Button.merged.bin` (単一ファイルでのフラッシュ用)
   - または、個別のファイルをダウンロードして個別にフラッシュすることも可能です。

### ステップ 2: esptool.py をインストールする

esptool.py がまだインストールされていない場合は、pip を使用してインストールできます:

```bash
pip install esptool
```

### ステップ 3: ファームウェアをフラッシュする

1. IoT ボタンを USB 経由でコンピュータに接続します。
2. 必要に応じてデバイスをブートローダーモードにします。
3. 以下のコマンドのいずれかを使用してファームウェアをフラッシュします:

**オプション 1: マージされたバイナリファイルを使用する (推奨):**

```bash
esptool.py --chip esp32c6 --baud 921600 --before default_reset --after hard_reset write_flash 0x0 "Zigbee_Seeed_IoT_Button.merged.bin"
```

**オプション 2: 個別のファイルを使用する:**

```bash
esptool.py --chip esp32c6 --baud 921600 --before default_reset --after hard_reset write_flash -z --flash_mode keep --flash_freq keep --flash_size keep 0x0 "Zigbee_Seeed_IoT_Button.bootloader.bin" 0x8000 "Zigbee_Seeed_IoT_Button.partitions.bin" 0xe000 "boot_app0.bin" 0x10000 "Zigbee_Seeed_IoT_Button.bin"
```

4. フラッシュプロセスが完了するまで待機します。
5. デバイスは自動的に再起動します。

### ステップ 4: Home Assistant で Zigbee を設定する

IoT ボタンをペアリングする前に、Home Assistant に Zigbee コーディネーターを設定する必要があります:

1. **Zigbee コーディネーターをインストールする**: Home Assistant Connect ZBT-1 のような Zigbee コーディネーターを Home Assistant サーバーに接続します。
2. **Zigbee Home Automation (ZHA) を設定する**:
   - 設定 > デバイス & サービスに移動します。
   - 「統合を追加」をクリックし、「Zigbee Home Automation」を検索します。
   - プロンプトに従って ZHA をコーディネーターとともに設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/5.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 5: IoT ボタンを Home Assistant とペアリングする

1. Home Assistant の設定 > デバイス & サービス > Zigbee Home Automation に移動します。
2. Zigbee コーディネーター デバイスをクリックします。
3. 「デバイスを追加」をクリックしてコーディネーターをペアリングモードにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/15.png" style={{width:1000, height:'auto'}}/></div>

4. IoT ボタンのボタンを押してペアリングを開始します。
5. Home Assistant は IoT ボタンを "Seeed Studio IoT_Button" として検出するはずです。
6. プロンプトに従ってペアリングプロセスを完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/2.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 6: Home Assistant でオートメーションを作成する

ペアリングが完了したら、ボタンのアクションに基づいてオートメーションを作成できます:

1. 設定 > オートメーション & シーン > オートメーションを作成に移動します。
2. トリガータイプとして「デバイス」を選択します。
3. デバイスリストから IoT ボタンを見つけます。
4. トリガータイプを選択します:
   - 「click_1」: シングルクリック
   - 「click_2」: ダブルクリック
5. ボタンが押されたときに実行するアクションを設定します。
6. オートメーションを保存します。

Home Assistant YAML の例:

```yaml
automation:
  - alias: "IoT ボタン シングルクリック - リビングルームのライトを切り替え"
    trigger:
      platform: device
      domain: mqtt
      device_id: [YOUR_DEVICE_ID]
      type: action
      subtype: click_1
    action:
      service: light.toggle
      target:
        entity_id: light.living_room
```

## 方法 2: Arduino を使用したカスタム Zigbee ファームウェアの開発

IoT ボタンの動作をカスタマイズしたい場合は、Arduino を使用して独自の Zigbee ファームウェアを開発することができます。

### ステップ 1: ESP32-C6 用の Arduino IDE をセットアップ

1. 最新バージョンの Arduino IDE をインストールします。
2. ESP32 ボードのサポートを追加します:
   - [ファイル] > [環境設定] に移動します。
   - "追加のボードマネージャーの URL" フィールドに `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json` を追加します。
   - [ツール] > [ボード] > [ボードマネージャー] に移動します。
   - "esp32" を検索し、最新バージョン (少なくとも 3.1.3) をインストールします。

### ステップ 2: 必要なライブラリをインストール

IoT ボタンは Espressif の Zigbee SDK を使用しており、これは ESP32 Arduino パッケージに含まれています。追加のライブラリは必要ありません。

### ステップ 3: Arduino IDE を Zigbee 開発用に設定

1. 正しいボードを選択します:
   - [ツール] > [ボード] > [ESP32 Arduino] > [ESP32-C6 Dev Module]
2. Zigbee 設定を構成します:
   - [ツール] > [Zigbee モード] > [Zigbee Endpoint]
   - [ツール] > [パーティションスキーム] > [Zigbee 4MB with spiffs]

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/1.png" style={{width:800, height:'auto'}}/></div>

### ステップ 4: Zigbee Multi-Button ファイルをセットアップ

1. [Seeed IoT Button GitHub リポジトリ](https://github.com/Seeed-Projects/Seeed_IoT_Button_Zigbee/tree/main/Zigbee_Seeed_IoT_Button) から `ZigbeeMultiButton.h` と `ZigbeeMultiButton.cpp` ファイルをダウンロードします。
2. これらのファイルを Arduino Zigbee エンドポイントディレクトリにコピーします:
   ```
   <Arduino_Installation_Path>/libraries/Zigbee/src/ep/
   ```
3. `<Arduino_Installation_Path>/libraries/Zigbee/src/Zigbee.h` を編集して新しいヘッダーファイルを含めます:
   ```cpp
   // 他のエンドポイントのインクルードと一緒にこの行を追加します
   #include "ep/ZigbeeMultiButton.h"
   ```

### ステップ 5: カスタムファームウェアを作成

新しい Arduino スケッチを作成し、以下のコードを開始点として使用します:

```cpp
#ifndef ZIGBEE_MODE_ED
#error "Zigbee end device mode is not selected in Tools->Zigbee mode"
#endif

#include "Zigbee.h"

// ピン定義
#define BUTTON_PIN 9  // GPIO9 をボタン用に使用

// Zigbee エンドポイント設定
#define BUTTON_ENDPOINT_ID 1

// Zigbee Multi-Button エンドポイントを作成
ZigbeeMultiButton zbButton = ZigbeeMultiButton(BUTTON_ENDPOINT_ID);

void setup() {
  // シリアル通信を初期化
  Serial.begin(115200);
  Serial.println("Seeed Studio IoT Button - Zigbee");
  
  // ボタンピンを初期化
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  
  // Zigbee ボタンエンドポイントを構成
  zbButton.setManufacturerAndModel("Seeed Studio", "IoT_Button");
  
  // Zigbee にエンドポイントを追加
  Zigbee.addEndpoint(&zbButton);
  
  // Zigbee エンドデバイス用の設定を作成
  esp_zb_cfg_t zigbeeConfig = ZIGBEE_DEFAULT_ED_CONFIG();
  
  // Zigbee を開始
  if (!Zigbee.begin(&zigbeeConfig, false)) {
    Serial.println("Zigbee failed to start!");
    Serial.println("Rebooting...");
    ESP.restart();
  }
  
  Serial.println("Connecting to Zigbee network");
  while (!Zigbee.connected()) {
    Serial.print(".");
    delay(100);
  }
  Serial.println("\nSuccessfully connected to Zigbee network");
}

// ボタン状態追跡用の変数
bool lastButtonState = HIGH;  // ボタンが押されていないときはプルアップされる
unsigned long lastDebounceTime = 0;
unsigned long debounceDelay = 50;
unsigned long pressStartTime = 0;
bool isLongPress = false;
int clickCount = 0;
unsigned long lastClickTime = 0;
const unsigned long doubleClickWindow = 400;  // ダブルクリック検出の時間枠

void loop() {
  // ボタン状態を読み取る
  bool reading = digitalRead(BUTTON_PIN);
  
  // ボタンのデバウンス処理
  if (reading != lastButtonState) {
    lastDebounceTime = millis();
  }
  
  if ((millis() - lastDebounceTime) > debounceDelay) {
    // ボタン状態が安定した場合
    
    // ボタンが押された (LOW)
    if (reading == LOW && lastButtonState == HIGH) {
      pressStartTime = millis();
      isLongPress = false;
    }
    
    // ボタンが離された (HIGH)
    if (reading == HIGH && lastButtonState == LOW) {
      unsigned long pressDuration = millis() - pressStartTime;
      
      // 長押し検出 (工場出荷時リセット用)
      if (pressDuration > 1000) {
        isLongPress = true;
        Serial.println("Long press detected - Factory Reset");
        Zigbee.factoryReset();
      } 
      // 短押し検出 (クリックカウント用)
      else {
        clickCount++;
        lastClickTime = millis();
      }
    }
    
    lastButtonState = reading;
  }
  
  // 遅延後にクリックカウントを処理
  if (clickCount > 0 && (millis() - lastClickTime) > doubleClickWindow) {
    if (clickCount == 1) {
      Serial.println("Single click detected");
      zbButton.sendButtonAction(1);  // シングルクリックイベントを送信
    } else if (clickCount == 2) {
      Serial.println("Double click detected");
      zbButton.sendButtonAction(2);  // ダブルクリックイベントを送信
    }
    
    clickCount = 0;
  }
  
  // Zigbee スタックがイベントを処理できるようにする
  delay(10);
}
```

### ステップ 6: ファームウェアをアップロードしてテスト

1. IoT ボタンを USB 経由でコンピュータに接続します。
2. Arduino IDE で正しいポートを選択します。
3. [アップロード] ボタンをクリックします。
4. シリアルモニターを開いてデバッグ情報を確認します。
5. 方法 1 のペアリング手順に従い、ボタンを Home Assistant に接続します。

## Zigbee 実装の理解

IoT ボタンの Zigbee 実装は以下のコンポーネントを使用しています：

### ZigbeeMultiButton クラス

このカスタムエンドポイントクラスは、複数のボタンアクションをサポートするために Zigbee 機能を拡張します：

- Zigbee の On/Off スイッチデバイスタイプを実装します
- ボタンアクションを報告するためのカスタムクラスターを追加します
- Zigbee ネットワークに異なるボタンイベントを送信するためのメソッドを提供します

### ボタンアクションの検出

ファームウェアは以下の3種類のボタンアクションを検出します：

1. **シングルクリック**：短い押下とリリース
2. **ダブルクリック**：400ms以内に2回の短い押下
3. **長押し**：1秒以上押し続ける（工場出荷時リセットに使用）

### Zigbee ネットワーク管理

ファームウェアは Zigbee ネットワーク操作を処理します：

- 起動時に自動的に Zigbee ネットワークに参加
- ボタンアクションをコーディネーターに報告
- 長押しが検出された場合に工場出荷時リセットを実行

## トラブルシューティング

IoT ボタンの Zigbee 機能に問題が発生した場合は、以下のトラブルシューティング手順を試してください：

### ペアリングの問題

1. **ボタンがネットワークに参加しない**：
   - Zigbee コーディネーターがペアリングモードになっていることを確認してください
   - コーディネーターがボタンの範囲内にあることを確認してください
   - ボタンを長押しして工場出荷時リセットを試してください

2. **ボタンが Home Assistant に表示されない**：
   - ZHA が正しく構成されていることを確認してください
   - コーディネーターが正常に動作していることを確認してください
   - ZHA インテグレーションを再起動してみてください

### ボタンアクションの問題

1. **ボタンアクションが検出されない**：
   - デバッグ情報を確認するためにシリアル出力をチェックしてください
   - ボタンが GPIO9 に正しく接続されていることを確認してください
   - ボタンが Zigbee ネットワークに正しくペアリングされていることを確認してください

2. **オートメーションがトリガーされない**：
   - オートメーションが正しく構成されていることを確認してください
   - Home Assistant の Zigbee ログで受信イベントを確認してください
   - ボタンがコーディネーターの範囲内にあることを確認してください

## 高度なカスタマイズ

ファームウェアを変更することで IoT ボタンをさらにカスタマイズできます：

### ボタン動作の変更

`loop()` 関数を変更して異なるボタンパターンを検出できます：

- トリプルクリック検出を追加
- 異なる押下パターンのタイミングパラメータを変更
- 押下とリリースのパターンを実装

### バッテリー監視の追加

ESP32-C6 はバッテリー電圧を監視できます。この機能を追加してバッテリーレベルを Home Assistant に報告します：

```cpp
// setup() に追加
zbButton.setPowerSource(ZB_POWER_SOURCE_BATTERY, 100);  // 初期バッテリーレベル

// loop() に定期的に追加
int batteryLevel = readBatteryLevel();  // この関数を実装
zbButton.setBatteryLevel(batteryLevel);
```

### LED フィードバックの追加

LED を使用してボタンアクションのフィードバックを提供できます：

```cpp
#define LED_PIN 8  // 例: LED ピン

// setup() に追加
pinMode(LED_PIN, OUTPUT);

// アクション検出時に LED フィードバックを追加
digitalWrite(LED_PIN, HIGH);
delay(100);
digitalWrite(LED_PIN, LOW);
```

## 結論

Seeed Studio の Zigbee 機能を備えた IoT ボタンは、スマートホームを制御するための多用途で省電力な方法を提供します。プリビルドのファームウェアを使用する場合でも、独自のカスタムソリューションを開発する場合でも、このボタンは Home Assistant で複雑なオートメーションをトリガーするためのシンプルなインターフェースを提供します。

ESP32-C6 の組み込み Zigbee 機能を活用することで、IoT ボタンはバッテリー電力で長期間動作し、スマートホームエコシステムとの信頼性の高い接続を維持できます。

## トラブルシューティング

### Q1: バッテリーを交換した後、デバイスがインターネットに接続できず、頻繁に切断されるのはなぜですか？バッテリーが充電されていることは確認済みです。

バッテリーを取り外した後、18650バッテリーのチップ保護戦略により、正常に動作させるには充電済みのUSB電源ケーブルで少し活性化する必要があります。

## リソース

- **[GITHUB]** [Seeed IoT Button Github Zigbee リポジトリ](https://github.com/Seeed-Projects/Seeed_IoT_Button_Zigbee)
- **[GITHUB]** [Seeed IoT Button Github ESPHome リポジトリ](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-iot-button)
- **[PDF]** [Seeed IoT Button SCH PDF](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH.pdf)
- **[SCH&PCB]** [Seeed IoT Button SCH & PCB](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH&PCB.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div> 