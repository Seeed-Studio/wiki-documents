---
description: Connect_Wio_Tracker_1110_to_TTN
title: Wio TrackerをLoRa Cloud™ Locatorに接続する
keywords: 
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/connect_wio_tracker_to_locator
sidebar_position: 4
last_update:
  date: 10/23/2023
  author: Jessie
---


この文書では、[Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html)をセットアップし、[LoRa Cloud™ Locator](https://locator.loracloud.com)で設定する手順を詳しく説明します。

## ゲートウェイ設定

### LoRa Cloud™ Locatorにゲートウェイを追加する

[LoRa Cloud™ Locator web](https://locator.loracloud.com)にログインします。

`GATEWAY SETTINGS`に移動し、`Add New Gateway`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/gateway-locator.png" alt="pir" width={800} height="auto" /></p>

Gateway EUIを入力し、お住まいの地域に基づいて適切なLoRaWAN®周波数帯を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/gateway-locator2.png" alt="pir" width={800} height="auto" /></p>

`Create`をクリックすると、新しいゲートウェイのサポートファイル（証明書、キー）を含むポップアップが表示されます。必ずDownloadをクリックして、ファイルを安全な場所に保存してください（ブラウザで複数ファイルのダウンロードを許可する必要がある場合があります）。ダウンロードされるファイルは以下の通りです：

- **cups_url.txt**: ゲートウェイでCUPSサーバーを指すために使用すべきURLが含まれています
- **cups.trust**: CUPS信頼証明書が含まれています
- **cups.crt**: CUPSサーバーへの接続に使用される証明書が含まれています
- **cups.key**: CUPSサーバーへの接続に使用される秘密鍵が含まれています

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/gateway22.png" alt="pir" width={800} height="auto" /></p>

### ゲートウェイをセットアップする

次に[SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)を設定する必要があります。詳細については[Get Started](https://wiki.seeedstudio.com/ja/quick_start_with_M2_MP/)を確認してください。

Luciページにログインし、`LoRa` > `LoRa Network`に移動します

- **ステップ1**: LoRaネットワーク設定
**LoRa** > **LoRa Network**に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/lora-network.png" alt="pir" width={800} height="auto" /></p>

- **ステップ2**: ModeをBasics Stationに設定します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/basic-station.png" alt="pir" width={800} height="auto" /></p>

- **ステップ3**: Basic Station設定：

2. **Gateway EUI**: 接続されたゲートウェイのEUIを自動的に取得します

3. **Server**: CUPSを選択します

4. **URL**: `cups_url.txt`ファイル内のURLをコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/cups-url.png" alt="pir" width={800} height="auto" /></p>

```cpp
例: https://A321**0HK3U1DZL.cups.lorawan.eu-west-1.amazonaws.com:443
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/server2.png" alt="pir" width={800} height="auto" /></p>

5. **Authentication Mode:** TLS Server and Client Authentication

6. **trust**/**certificate**/**key** : 先ほどダウンロードしたファイルの内容をコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/certificates.png" alt="pir" width={800} height="auto" /></p>

すべての設定が完了したら`Save & Apply`をクリックします。

ゲートウェイが適切に設定されると、ステータスが`Connected`に切り替わります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/connected-locator.png" alt="pir" width={800} height="auto" /></p>

## デバイス設定

### デバイスをセットアップする

プラットフォームをTTNに選択するには、[Connect Wio Tracker 1110 Dev Board to TTN](https://wiki.seeedstudio.com/ja/connect_wio_tracker_to_TTN/)を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

### LoRa Cloud™ Locatorにデバイスを追加する

次にLoRa Cloud™ Locator webページに戻り、`DEVICE SETTINGS`に移動し、`Add New Device`をクリックします。

**Tracker type**: `LoRa Basics™ Modem SDK`

アクティベーションモードとしてAPPKeyを選択し、先ほど定義したDev EUI、Join EUI、APP keyをコピーします。
**Network**: `The Things Network Community`を選択し、お住まいの地域クラスターを選択してから、`Create`をクリックしてデバイスを追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/device-locator.png" alt="pir" width={800} height="auto" /></p>

デバイスがネットワークに正常に参加すると、ここでメッセージを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/device-status.png" alt="pir" width={800} height="auto" /></p>

次に`TRACKING`に移動すると、現在の位置を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/tracking.png" alt="pir" width={800} height="auto" /></p>