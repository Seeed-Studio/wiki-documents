---
description: Reachy Mini Control アプリ、Web Bluetooth、または nRF Connect を使用して Reachy Mini wireless の Wi-Fi ホットスポットやデーモンをリセットするためのガイドです。
title: Bluetooth 経由で Reachy Mini をリセットする
slug: /reachymini_platforms_reachy_mini_reset
keywords:
  - reset
  - bluetooth
  - nrf connect
  - hotspot
  - daemon
  - wireless
  - troubleshoot
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-02-27'
url: https://wiki.seeedstudio.com/ja/reachymini_platforms_reachy_mini_reset/
---

# Bluetooth リセットと再起動ツール（ワイヤレス）

ロボットの Wi-Fi ホットスポットをリセットしたり、デーモンを再起動したり、その他のメンテナンスコマンドを Bluetooth 経由で実行する必要がある場合は、以下のいずれかの方法を使用します。ノート PC やデスクトップを使用している場合は、**公式の Reachy Mini Control アプリを優先して使用してください**。Bluetooth コンソールが同梱されており、別途ブラウザやスマホアプリを切り替える必要がありません。

## 1. Reachy Mini Control — Bluetooth コンソール（推奨）

**Reachy Mini Control** デスクトップアプリを使用します（[download](https://hf.co/reachy-mini/#/download)）。コンピュータの Bluetooth を有効にしておく必要があります。

1. **Reachy Mini Control** を開きます。セッションを開始する前の **Connect to Reachy** 画面で、フッターまでスクロールし、**First time WiFi setup** をクリックします。

[![control-app-first-time-wifi-setup.png](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-first-time-wifi-setup.png)](https://hf.co/reachy-mini/#/download)

2. **First Time WiFi Setup** ウィザードで、フッターのリンク **Try the Bluetooth Console** を使用します（たとえばホットスポットが検出されない場合や、コンソールを直接使いたい場合など）。

[![control-app-wifi-wizard-bluetooth-console.png](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-wifi-wizard-bluetooth-console.png)](https://hf.co/reachy-mini/#/download)

Bluetooth コンソールからは、ホットスポットのリセット、ネットワーク状態の確認、以下の他の方法と同様のコマンドの実行ができます。

> **Note:** 一部のアプリバージョンでは、入り口のリンクが **First time WiFi setup** ではなく **First time connecting to your WiFi...** と表示される場合がありますが、同じ Wi-Fi セットアップフローが開きます。

## 2. Web Bluetooth ダッシュボード（スマートフォンまたはデスクトップブラウザ）

スマートフォンまたはデスクトップと、**Bluetooth 対応ブラウザ**（Chrome、Opera、Edge）のいずれかを使用して、スタンドアロンツール [Bluetooth tool](https://pollen-robotics.github.io/reachy_mini/) を開きます。デスクトップアプリをインストールしなくても、ホットスポットのリセット、ネットワーク状態の確認などが行えます。

お使いのデバイスまたはブラウザが Web Bluetooth API をサポートしていない場合は、デスクトップアプリ（上記）か、以下の nRF Connect の方法を使用してください。

## 3. nRF Connect（上級者向け）

Reachy Mini wireless は Bluetooth GATT インターフェースを公開しており、汎用 BLE クライアントから Wi-Fi ホットスポットやデーモンをリセットできます。

### 3.1 nRF Connect をインストールする

- **Android**: [Google Play](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en-US&pli=1)
- **iOS**: [App Store](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

### 3.2 スキャンして接続する

1. nRF Connect を開きます。
2. デバイスをスキャンし、**ReachyMini** を選択します。

[![bluetooth_1.jpg](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/bluetooth_1.jpg)

3. デバイスに接続します。

### 3.3 Unknown service と WRITE セクション

- **Unknown Service** を開きます。
- コマンド送信には **WRITE** セクションを使用します。
- 上部の **READ** セクションを使って、ロボットからの応答を確認できます。

[![bluetooth_2.jpg](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/bluetooth_2.jpg)

### 3.4 コマンドの送信

コマンドは **16 進数文字列**（または `STATUS` や `CMD_HOTSPOT` のようなプレーンテキスト）として送信されます。ASCII → 16 進数が必要な場合は [this converter](https://www.rapidtables.com/convert/number/ascii-to-hex.html) を使用してください。

**必ず他のコマンドの前に PIN を送信してください。**

#### PIN コード

PIN はロボットのシリアル番号の **下 5 桁** です。たとえばシリアル番号が `xxxxxxxx4918400018` の場合、PIN は `00018` であり、`PIN_00018` を送信します（または下記の 16 進数値）。

#### コマンドリファレンス

| Command                | Hex value (after `0x`)              |
|------------------------|-------------------------------------|
| STATUS                 | 535441545553                        |
| PIN_00018              | 50494E5F3030303138                  |
| CMD_HOTSPOT            | 434D445F484F5453504F54              |
| CMD_RESTART_DAEMON     | 434D445F524553544152545F4441454D4F4E |
| CMD_SOFTWARE_RESET     | 434D445F534F4654574152455F5245534554 |

**CMD_SOFTWARE_RESET** を使用すると、ロボットは再起動し、再びアクセス可能になるまでに **約 5 分** かかる場合があります。

#### ヒント

よく使うコマンドを保存しておくと、再利用に便利です。

[![bluetooth_3.jpg](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/bluetooth_3.jpg)
[![bluetooth_4.jpg](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/bluetooth_4.jpg)