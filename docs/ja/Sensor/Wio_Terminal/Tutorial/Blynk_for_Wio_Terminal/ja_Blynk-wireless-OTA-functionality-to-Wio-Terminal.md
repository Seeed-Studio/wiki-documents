---
title: WT OTA for Blynk
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Blynk-wireless-OTA-functionality-to-Wio-Terminal/
slug: /ja/Blynk-wireless-OTA-functionality-to-Wio-Terminal
last_update:
  date: 05/15/2025
  author: gunengyu
---


# BlynkのワイヤレスOTA機能をWio Terminalで使用する

このWikiでは、BlynkのワイヤレスOTA機能をWio Terminalで使用する方法について説明します。

- **Blynkとは**

[**Blynk**](https://blynk.io/)は、iOSおよびAndroidデバイスからハードウェアプロジェクトを制御および監視するためのインターフェースを迅速に構築できる新しいプラットフォームです。Blynkアプリをダウンロードした後、プロジェクトダッシュボードを作成し、ボタン、スライダー、グラフ、その他のウィジェットを画面上に配置することができます。

## 必要なハードウェア

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- 携帯電話
- App StoreからBlynkアプリをダウンロード
- WiFi

## 準備作業

[**Blynkにアクセスして登録およびログイン**](https://blynk.cloud/dashboard/login)し、テンプレート画面に移動して新しいテンプレートを作成します。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/1.png)

次に名前を編集し、デバイスと接続モードを選択します。この場合、「Seeed Wio Terminal」と「WiFi」を選択します。
![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/60.jpg)

BLYNK_TEMPLATE_IDとBLYNK_DEVICE_NAMEをメモしてください。
例では以下の通りです：

```cpp
#define BLYNK_TEMPLATE_ID "TMPLCc16MxA1"
#define BLYNK_DEVICE_NAME "WioTerminal"
```

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/3.png)

その後、右上の保存ボタンをクリックします。

## Arduino IDEの設定とコードの調整

次に、サンプルコードをダウンロードしてArduino IDEで開きます。

[**Edgent_Wio_Terminal_0-2.zip**](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/Edgent_Wio_Terminal_0-2.zip)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/4.jpg)

開発ボードオプションからWio Terminalデバイスを選択します（ [**Wio Terminal Wikiページ**](https://blynk.cloud/dashboard/login)を参照してArduino IDEにWio Terminalを追加する方法を確認してください）。

[**blynk-library**](https://github.com/blynkkk/blynk-library)を追加します。

Arduino IDEのライブラリマネージャーで以下のライブラリファイルを検索して追加します：

- Seeed Arduino rpcunified
- Seeed Arduino rpcWiFi
- Seeed Arduino SFUD
- Seeed Arduino FS
- Seeed Arduino mbedtls
- ArduinoOTA
- ArduinoHttpClient

コードの16行目と17行目に、先ほど生成されたIDとNAMEを記入します：

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/5.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/6.jpg)

その後、コードをコンパイルしてWio Terminalにアップロードします（コンパイル中にライブラリファイルが不足している場合は、ライブラリマネージャーで検索してダウンロードしてください）。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/7.png)

プログラムが正常にアップロードされた後、シリアルポートモニターを開き、ボーレートを115200に設定します。5〜10秒待ちます。シリアルポートには以下の情報が表示されます：（シリアルポートモニターが応答しない場合は、データケーブルを再接続してシリアルポートモニターを再度開いてください。）

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/8.jpg)

## モバイルアプリ設定

Blynk IoT アプリをダウンロード：

Android: [https://play.google.com/store/apps/details?id=cloud.blynk&hl=en_IN&gl=US](https://play.google.com/store/apps/details?id=cloud.blynk&hl=en_IN&gl=US)

iOS: [https://apps.apple.com/us/app/blynk-iot/id1559317868](https://apps.apple.com/us/app/blynk-iot/id1559317868)

メイン画面にログインします。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji111.png)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji222.png)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji333.png)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji4454.png)

アプリの設定が成功すると、シリアルポートモニターにネットワーク接続状況が表示されます。「Ready」と表示された場合、WiFi接続が成功しています。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/21.jpg)

これでOTA機能を試す準備が整いました。

## OTA: BLYNK_FIRMWARE_VERSION の更新

"edgent_wio_terminal_0-2"内で、"void setup()"および"void loop()"を使用して個人プログラムを書くことができます。この例では、デモンストレーションのためにプログラムのバージョン情報を直接変更します。プログラムが正常にアップロードされると、バージョン情報が変更されます。
ここでは、BLYNK_FIRMWARE_VERSION を "0.2.0" から "0.2.11" に変更しました。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/22.jpg)

次に「Export compiled Binary」をクリックし、ビルドが完了するのを待ちます。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/23.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/24.png)

その後、フォルダを開き、BINファイルに移動します。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/25.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/26.jpg)

Blynk Air を開き、右上の「New Shipping」を選択します。この画面を下にスクロールして「Firmware」オプションを見つけます。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/27.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/28.jpg)

ここで先ほど生成したbinファイルを選択すると、ソフトウェアバージョンが先ほど設定した "0.2.11" に変更されているのが確認できます。その後、右下の「Start Shipping」ボタンをクリックして、ワイヤレスアップロードプログラムを開始します。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/29.jpg)

ウェブページまたはシリアルモニターでリアルタイムのアップロード状況を確認できます。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/30.jpg)

シリアルポートモニターに出力がない場合は、デバイスを再起動してシリアルポートモニターを再度オンにすると、リアルタイムでアップロードが確認できます。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/31.jpg)

デバイスを再起動すると、ソフトウェアバージョンが先ほど変更した "0.2.11" に更新されているのが確認できます。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/32.jpg)

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供するために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>