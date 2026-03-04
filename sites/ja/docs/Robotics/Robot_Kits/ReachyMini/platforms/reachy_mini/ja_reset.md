---
description: nRF Connect アプリまたは Bluetooth Web API 対応ブラウザを使用して Reachy Mini wireless をリセットし、Wi-Fi ホットスポットまたはデーモンをリセットするためのガイドです。
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
  skip: [zh-CN]
---

# スマートフォン向けシンプル Bluetooth ダッシュボード

Bluetooth Web API に対応したブラウザ（chrome ベース / opera / edge）を搭載したスマートフォンがあれば、こちら 👉 [Bluetooth tool](https://pollen-robotics.github.io/reachy_mini/) にアクセスするだけで、ホットスポットのリセット、ネットワーク状態の確認、その他のタスクを簡単に行えます。

お使いのデバイスやブラウザが対応していない場合は、他の解決方法を確認してください。


# ReachyMini nRF Connect ガイド

Reachy Mini wireless は Bluetooth 信号を発信しており、それを利用して Wi-Fi ホットスポットやデーモンをリセットできます。

## 1. nRF Connect をインストールする
- **Android**: [Download here](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en-US&pli=1)
- **iOS**: [Download here](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)


## 2. スキャンして接続する
1. nRF Connect を開きます。
2. デバイスをスキャンし、**ReachyMini** を選択します。
![bluetooth_1.jpg](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/bluetooth_1.jpg)
3. デバイスに接続します。



## 3. Unknown Service と WRITE セクション
- **Unknown Service** に移動します。
- **WRITE** セクションを探します。
- 上部の **READ** セクションを使用して、ロボットからの応答を確認することもできます。
![bluetooth_2.jpg](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/bluetooth_2.jpg)



## 4. コマンドを送信する
コマンドは **16 進数文字列** として送信されます。必要に応じて、[this tool](https://www.rapidtables.com/convert/number/ascii-to-hex.html) を使用して ASCII を 16 進数に変換してください。
コマンドは "STATUS" や "CMD_HOTSPOT" のように、元のテキスト形式で送信することもできます。

**いずれのコマンドを送信する前にも、必ず最初に PIN コードを送信してください。**

### 使用可能なコマンド
| Command                | Hex Value (send after `0x`)       |
|------------------------|-----------------------------------|
| STATUS                 | 535441545553                      |
| PIN_00018              | 50494E5F3030303138                |
| CMD_HOTSPOT            | 434D445F484F5453504F54            |
| CMD_RESTART_DAEMON     | 434D445F524553544152545F4441454D4F4E |
| CMD_SOFTWARE_RESET     | 434D445F534F4654574152455F5245534554 |


### PIN コード

PIN はロボットのシリアル番号の**下 5 桁**です。たとえばシリアル番号が `xxxxxxxx4918400018` の場合、PIN は `00018` となるので、`PIN_00018` または対応する 16 進数の値を送信します。

### 使用可能なコマンド
| Command                | Hex Value (send after `0x`)       |
|------------------------|-----------------------------------|
| STATUS                 | 535441545553                      |
| PIN_00018              | 50494E5F3030303138                |
| CMD_HOTSPOT            | 434D445F484F5453504F54            |
| CMD_RESTART_DAEMON     | 434D445F524553544152545F4441454D4F4E |
| CMD_SOFTWARE_RESET     | 434D445F534F4654574152455F5245534554 |

注意: software reset コマンドを使用すると、ロボットは再起動し、再び利用可能になるまで約 5 分待つ必要があります。

### ヒント

後で再利用できるように、コマンドを保存しておくと便利です。
![bluetooth_3.jpg](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/bluetooth_3.jpg)
![bluetooth_4.jpg](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/bluetooth_4.jpg)




