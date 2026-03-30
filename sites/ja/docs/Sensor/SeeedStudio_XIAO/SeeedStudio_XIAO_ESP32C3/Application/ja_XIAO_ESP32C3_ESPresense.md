---
description: XIAO ESP32-C3をベースとした存在検知ノードは、Home AssistantのMQTT Roomコンポーネントと連携して屋内位置測定を可能にします。
title: Seeed Studio XIAO ESP32-C3でESPresenseをHome Assistantと連携してデプロイする
keywords:
  - ESPresense
  - XIAO
  - Home Assistant
  - MQTT
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image132.webp
slug: /xiao-esp32c3-espresense
sku: 113991054
last_update:
  date: 01/16/2026
  author: Carla Guo
createdAt: '2026-01-20'
updatedAt: '2026-01-20'
url: https://wiki.seeedstudio.com/ja/xiao-esp32c3-espresense/
---

# Seeed Studio XIAO ESP32-C3でESPresenseをHome Assistantと連携してデプロイする


この文書では、オープンソースのBluetooth存在検知システム**ESPresense**を**Seeed Studio XIAO ESP32-C3**と統合する方法について説明します。XIAO ESP32-C3をベースとした存在検知ノードは、Home Assistantの[MQTT Roomコンポーネント](https://www.home-assistant.io/components/sensor.mqtt_room/)と連携して屋内位置測定を可能にします。



## プロジェクト概要

**ESPresense**は、**MQTT**を使用して**Home Assistant**と連携するように設計されたオープンソースのBluetooth Low Energy（BLE）存在検知システムです。

この移行では：

### 1. XIAO ESP32-C3ビルド環境の追加

`.ini`設定が更新され、**Seeed Studio XIAO ESP32-C3**専用のビルド環境が追加されました。

```ini
[env:seeed_xiao_esp32c3]
extends = esp32c3-cdc            ; XIAO ESP32-C3 uses native USB CDC
board = seeed_xiao_esp32c3
board_build.filesystem = spiffs
lib_deps =
  ${esp32c3.lib_deps}
  ${sensors.lib_deps}
build_flags =
  -D CORE_DEBUG_LEVEL=1
  -D FIRMWARE='"xiao-esp32c3"'   ; Firmware identifier
  -D SENSORS
  ${esp32c3-cdc.build_flags}
```

### 2. レポート応答性の向上

データレポートをより応答性の高いものにするため、`defaults.h`の複数のパラメータが以下のように調整されました：

#### A. 移動感度の向上

早期レポートをトリガーする距離閾値が**0.5 m**から**0.1 m**に削減されました。小さな移動でも「早期レポート」ロジックが有効になります。

```cpp
#define DEFAULT_SKIP_DISTANCE 0.1  // changed from 0.5
```

#### B. 強制レポート間隔の短縮

最大レポート間隔が**5秒**から**1〜2秒**に削減され、移動が最小限の場合でもよりタイムリーなデータ更新が保証されます。

```cpp
#define DEFAULT_SKIP_MS 1000       // changed from 5000, now is 1 second
```

#### C. Wi-FiとBLEの共存改善（2.4 GHz）

2.4 GHz Wi-Fi（非C5チップ）を使用する場合、Bluetoothスキャンは共有アンテナを独占しないように調整されます。BLEスキャンウィンドウはスキャン間隔よりもわずかに小さく設定され、Wi-FiがMQTT接続とデータ送信に十分なエアタイムを確保できます。

```cpp
#define BLE_SCAN_INTERVAL 0x80  // 128
#define BLE_SCAN_WINDOW   0x60  // reduced from 0x80 (~75% duty cycle)
```

この変更により、内部競合を削減し、無線リソースの先取りによる遅延を最小限に抑えることができます。


## ハードウェア要件

* Seeed Studio **XIAO ESP32-C3**
* USB-Cケーブル（データ転送対応）
* PC（Windows/macOS/Linux）
* 安定したWi-Fiネットワーク（2.4 GHz）
* Home Assistantインスタンス


## ソフトウェア・ツール

| ツール                               | 目的                                               |
| ---------------------------------- | ----------------------------------------------------- |
| **PlatformIO**                     | ビルドシステム・フラッシュツール                          |
| ESP-IDFツールチェーン（ESPresense経由） | ファームウェアビルド                                        |
| Webブラウザ                        | デバイス設定                                  |
| Home Assistant                     | 存在検知統合                                  |
| Mosquitto Broker（HAアドオン）       | MQTTバックエンド                                          |
| MQTT Explorer（オプション）           | MQTTデバッグ                                        |
| nRF Connect（Androidのみ）         | BLEアドバタイジング                                       |




## 1. Home Assistant – MQTTブローカーセットアップ

### Mosquitto Brokerアドオンのインストール

- **Home Assistant**を開く

   > Home Assistantをまだセットアップしていない場合は、設定について[ガイド](https://www.home-assistant.io/installation/)を参照してください。

- **Settings → Add-ons → Add-on Store**をクリック
- **Mosquitto broker**を検索してインストール。インストール後：
   - **Start**をクリック
   - 有効にする：

     - ✔ Start on boot
     - ✔ Watchdog

### MQTT認証情報の作成

- **Configuration → Logins → Add**に移動
- 専用のMQTTユーザーを作成（推奨）
- 記録：

   - ユーザー名
   - パスワード
   - Home AssistantのIPアドレス

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image1.png" style={{width:1000, height:'auto'}}/></div>


    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image2.png" style={{width:1000, height:'auto'}}/></div>





## 2. ESPresenseのビルド・フラッシュ

- [ESPresenseコードファイル](https://github.com/Seeed-Studio/OSHW-XIAO-Series/tree/main/project/XIAO_ESP32-C3_BLE_ESPresense)をダウンロードし、PlatformIOを使用してプロジェクトを開きます。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image3.png" style={{width:1000, height:'auto'}}/></div>

   > Platform IOをまだセットアップしていない場合は、ダウンロードについて[ガイド](https://docs.platformio.org/en/latest/integration/ide/vscode.html)を参照してください。

- 依存関係のインストールと環境セットアップが完了するまで待ちます。**seeed_xiao_esp32c3**環境を選択し、正しいポートを選択してビルド・アップロードします。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image4.png" style={{width:1000, height:'auto'}}/></div>

- ファームウェアのフラッシュが完了するまで待ち、Resetボタンを押してXIAO ESP32-C3を再起動します。


## 3. Wi-Fi・MQTT設定（キャプティブポータル）

- XIAO ESP32-C3に電源を供給

- PCまたはスマートフォンで**Wi-Fi設定**を開き、ESPresense AP（例：`ESPresense-XXXX`）に接続

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image5.png" style={{width:400, height:'auto'}}/></div>

- ブラウザを開く：`http://192.168.4.1`

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image6.png" style={{width:1000, height:'auto'}}/></div>

- Webページで以下のフィールドを入力：

   | フィールド              | 説明                            |
   | ------------------ | -------------------------------------- |
   | **Room Name**      | 論理的な部屋識別子（例：`room1`） |
   | **Wi-Fi SSID**     | 2.4 GHzネットワーク                        |
   | **Wi-Fi Password** | ネットワークパスワード                       |
   | **MQTT Broker IP** | Home AssistantのIP                      |
   | **MQTT Port**      | `1883`（デフォルト）                       |
   | **MQTT Username**  | Mosquittoセットアップから                   |
   | **MQTT Password**  | Mosquittoセットアップから                   |

- **Save**をクリック
- 保存後、XIAO ESP32-C3を再起動します。デバイスは自動的にWiFiとMQTTに接続します。

   > **推奨事項：**
   > 意味のある存在比較のために、異なる部屋に**少なくとも2つのXIAO ESP32-C3ノード**をデプロイしてください。

- 次に、**Home Assistant**を開き、**Settings → Devices & Services**に移動


- ESPresenseノードが自動的に表示され、デバイス名の形式は：

   ```
   ESPresense + <Room Name>
   ```
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image7.png" style={{width:1000, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image8.png" style={{width:1000, height:'auto'}}/></div>



## 4. BLEデバイスブロードキャスト

次に、個人デバイスをBLE経由でESPresenseが検出できるようにする必要があります。場合によっては、デバイスがBLE経由でブロードキャストできるようにするアプリをインストールする必要があります。

### iOSデバイス

Appleデバイスは様々なBTLE連続性メッセージを発信し、多くの場合`apple:100?:*-*`のフィンガープリントで識別されます。
>複数のiPhoneがある家庭では、近接情報が衝突し、重複したフィンガープリントが発生する可能性があります。この問題を解決するには、https://espresense.com/devices/apple を参照してください。

### Androidデバイス（手動アドバタイジング）

Androidデバイスは通常口が重く、BLEアドバタイズメントを発信させるためにアプリが必要です。そのため、デバイスを見つけるためのアプリが必要になります。

- **nRF Connect**をインストールしてアプリを開く
- **ADVERTISER → "+" → ADD RECORD**に移動し、**Manufacturer Data**を選択
- 入力：

   | フィールド      | 値                                            |
   | ---------- | ------------------------------------------------ |
   | Company ID | `0x004C`（これはApple Inc.の固定IDで、すべてのiBeaconはこのメーカーIDを使用する必要があります。）|
   | Data       | `0215E2C56DB5DFFB48D2B060D0F5A71096E000010001C5` |

   **データ形式の説明**

   | セクション         | 説明     |
   | --------------- | --------------- |
   | `0215`          | iBeaconプレフィックス  |
   | `E2C56D...96E0` | UUID（16バイト） |
   | `0001`          | Major           |
   | `0001`          | Minor           |
   | `C5`            | 測定電力  |

- 保存してアドバタイジングを**ON**に切り替え

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image9.png" style={{width:400, height:'auto'}}/><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image10.png" style={{width:400, height:'auto'}}/></div>




### その他のサポートされているデバイス：
[https://espresense.com/devices](https://espresense.com/devices)



### MQTTデータ検証

[**MQTT Explorer**](https://mqtt-explorer.com/)を使用して、ESPresenseが公開するすべてのトピックを表示できます。
-  接続先：
   * Host：HAのIP
   * Port：1883
   * Username / Password

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image11.png" style={{width:1000, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image12.png" style={{width:1000, height:'auto'}}/></div>

-  **UUIDの最初の8文字**を使用して検索

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image13.png" style={{width:1000, height:'auto'}}/></div>






## 5. MQTT Roomセンサーによる部屋の存在検知

### `configuration.yaml` を編集

- **Settings → Add-ons → Terminal** に移動し、ターミナルを開く
- 実行：

    ```bash
    ls /config
    ```
    `configuration.yaml` が存在することを確認します。

- ファイルを編集：

    ```bash
    nano /config/configuration.yaml
    ```
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image14.png" style={{width:1000, height:'auto'}}/></div>

- 追加：

    ```yaml
    sensor:
      - platform: mqtt_room
        device_id: "iBeacon:e2c56db5-dffb-48d2-b060-d0f5a71096e0-1-1"
        name: "My iBeacon"
        state_topic: "espresense/devices/iBeacon:e2c56db5-dffb-48d2-b060-d0f5a71096e0-1-1"
        timeout: 60
        away_timeout: 120
    ```
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image15.png" style={{width:1000, height:'auto'}}/></div>

>⚠ **YAML のインデントは重要です**
>* スペースのみを使用
>* TAB は使用しない

- 保存：

   * `Ctrl + O` → Enter
   * `Ctrl + X`



### 検証と再起動

- **Settings → System → Developer Tools** に移動
- **YAML** タブを開き、**Check Configuration** をクリック、有効な場合は **Restart** をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image16.png" style={{width:1000, height:'auto'}}/></div>



## 6. ダッシュボードにエンティティを追加

再起動後：

- **Developer Tools → States** に移動
- 検索：

    ```
    sensor.my_ibeacon
    ```

- エンティティが部屋名で更新される場合、セットアップは完了です

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image17.png" style={{width:1000, height:'auto'}}/></div>

    >センサーの初期化には時間がかかる場合があります。ステータスが not_home と表示される場合は、しばらくお待ちください。長時間経過しても状態の更新がない場合は、MQTT Explorer を使用して ESPresense がオフラインになっていないか確認するか、個人デバイスが正常にスキャンできることを確認することをお勧めします。

- エンティティを **Dashboard** に追加

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image18.png" style={{width:1000, height:'auto'}}/></div>




## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
