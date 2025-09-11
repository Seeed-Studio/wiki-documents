---
description: Wio Tracker 1110 を TTN に接続する
title: Wio Tracker を LoRa Cloud™ Locator に接続する
keywords: 
- トラッカー
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/connect_wio_tracker_to_locator
sidebar_position: 4
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

このドキュメントでは、[Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html)をセットアップし、[LoRa Cloud™ Locator](https://locator.loracloud.com)で設定する手順を詳細に説明します。




## ゲートウェイ設定

### LoRa Cloud™ Locator にゲートウェイを追加する

[LoRa Cloud™ Locator ウェブ](https://locator.loracloud.com)にログインします。

`GATEWAY SETTINGS` に移動し、`Add New Gateway` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/gateway-locator.png" alt="pir" width={800} height="auto" /></p>

ゲートウェイ EUI を入力し、所在地に基づいて適切な LoRaWAN® 周波数帯を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/gateway-locator2.png" alt="pir" width={800} height="auto" /></p>

`Create` をクリックすると、新しいゲートウェイのサポートファイル（証明書、キー）を含むポップアップが表示されます。`Download` をクリックしてファイルを安全な場所に保存してください（ブラウザで複数のファイルのダウンロードを許可する必要がある場合があります）。ダウンロードされるファイルは以下の通りです：

* **cups_url.txt**: CUPS サーバーを指すためにゲートウェイで使用する URL を含む
* **cups.trust**: CUPS 信頼証明書を含む
* **cups.crt**: CUPS サーバーに接続するための証明書を含む
* **cups.key**: CUPS サーバーに接続するための秘密鍵を含む

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/gateway22.png" alt="pir" width={800} height="auto" /></p>

### ゲートウェイのセットアップ

次に、[SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)を設定する必要があります。詳細については、[Get Started](https://wiki.seeedstudio.com/ja/quick_start_with_M2_MP/) を確認してください。

Luci ページにログインし、`LoRa` > `LoRa Network` に移動します。

* **ステップ 1**: LoRa ネットワーク設定  
  **LoRa** > **LoRa Network** に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/lora-network.png" alt="pir" width={800} height="auto" /></p>

* **ステップ 2**: モードを Basics Station に設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/basic-station.png" alt="pir" width={800} height="auto" /></p>

* **ステップ 3**: Basics Station 設定：

1. **Gateway EUI**: 接続されたゲートウェイの EUI を自動的に取得します。

2. **Server**: CUPS を選択します。

3. **URL:**: `cups_url.txt` ファイル内の URL をコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/cups-url.png" alt="pir" width={800} height="auto" /></p>

```cpp
例: https://A321**0HK3U1DZL.cups.lorawan.eu-west-1.amazonaws.com:443
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/server2.png" alt="pir" width={800} height="auto" /></p>

4. **Authentication Mode:** TLS サーバーおよびクライアント認証

5. **trust**/**certificate**/**key**: 先ほどダウンロードしたファイルの内容をコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/certificates.png" alt="pir" width={800} height="auto" /></p>

すべての設定が完了したら、`Save & Apply` をクリックします。

ゲートウェイが正しく設定されると、そのステータスが `Connected` に切り替わります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/connected-locator.png" alt="pir" width={800} height="auto" /></p>

## デバイス設定

### デバイスのセットアップ

[Connect Wio Tracker 1110 Dev Board to TTN](https://wiki.seeedstudio.com/ja/connect_wio_tracker_to_TTN/) を確認して、TTN に接続するプラットフォームを選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

### LoRa Cloud™ Locator にデバイスを追加する

次に、LoRa Cloud™ Locator ウェブページに戻り、`DEVICE SETTINGS` に移動して `Add New Device` をクリックします。

**Tracker type**: `LoRa Basics™ Modem SDK`

APPKey をアクティベーションモードとして選択し、以前に定義した Dev EUI、Join EUI、APP key をコピーします。  
**Network**: `The Things Network Community` を選択し、地域のクラスターを選択してから `Create` をクリックしてデバイスを追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/device-locator.png" alt="pir" width={800} height="auto" /></p>

デバイスがネットワークに正常に参加すると、ここでそのメッセージを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/device-status.png" alt="pir" width={800} height="auto" /></p>

次に `TRACKING` に移動すると、現在の位置を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/tracking.png" alt="pir" width={800} height="auto" /></p>