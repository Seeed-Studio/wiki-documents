---
title: Wio Lite W600
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wio-Lite-W600/
slug: /ja/Wio-Lite-W600
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/Wio-Lite-W600-wiki.jpg)


Wio Lite W600は、W600 WiFiモジュールを搭載したコスト効率の高いArduino互換ボードです。Wio Lite W600は、Atmel® | SMART™ SAM D21 ARM Cortex-M0+ベースのマイクロコントローラーを特徴とし、W600 WiFiコアはARM Cortex-M3を搭載した2.4GHz WiFiモジュールです。Wio Lite W600はArduino CoreとしてSAM D21（Arduino Zeroで使用されているのと同じチップ）を使用しているため、理論上はArduino Zeroと完全に互換性があります。

SAM D21のピンがブレークアウトされており、このボードのI/Oレベルは3.3Vです。6つのアナログピンと14のデジタルピンがあり、さらに1つのUART、1つのI2C、1つのICSPポートが利用可能です。このボードは5V USB Type Cおよび3.5V〜4.2Vのリポバッテリーで電源を供給できます。

WiFiコアについては、私たちの古い友人であるW600モジュールが搭載されています。すでにW600モジュールと[Grove - W600](https://www.seeedstudio.com/W600-Module-p-4020.html)をリリースしており、Wio Lite W600は[W600ファミリー](https://www.seeedstudio.com/tag/W600-WIFI.html)の新しいメンバーです。W600モジュールはARM Cortex-M3を搭載し、1MBのオンチップフラッシュとfreeRTOSカーネルを備えています。CE/FCC認証を取得しており、802.11 b/g/nをサポートしています。

さらに、[Grove Shield for Wio Lite](https://www.seeedstudio.com/Grove-Shield-for-Wio-Lite-p-4156.html)も同時にリリースしました。このシールドを使用することで、200以上のGroveセンサー、アクチュエーター、ディスプレイをWio LiteシリーズおよびFeatherコミュニティに提供できます。

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0-detail.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0-detail.jpg" height="450" width="600" alt="Seeedリレー簡易選択図"  />
  </a>
</figure>
</div>

複雑なブレッドボード配線や面倒なハンダ付け作業にさようなら。

こんにちは、[Grove](https://wiki.seeedstudio.com/ja/Grove_System/)！

<p style={{}}><a href="https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- Arduino Zero互換 / Adafruit Feather互換
- 802.11 b/g/nをサポートする2.4GHzオンボードWiFiモジュール
- 200以上のGroveモジュールをサポート
- コスト効率が高い

## 仕様

|項目|値|
|------------|-----------|
|マイクロコントローラー|SAM D21 |
|最大CPU周波数|48 MHz|
|SRAM|32 KB|
|フラッシュメモリ|256 KB|
|電源入力|USB Type C 5V リポバッテリー 3.5 V ~ 4.2 V|
|デジタルI/Oピン|14|
|アナログ入力チャンネル|6|
|I/OピンあたりのDC電流|40 mA|
|I/O入力電圧|3.3 V|
|||
|WiFiコア|W600|
|CPU|32bit Embedded Cortex-M3|
|RAM|288 KB|
|フラッシュ|1 MB|
|Wi-Fiモード|IEEE802.11b/g/n|
|周波数範囲|2.4~2.4835 GHz|
|ネットワークタイプ|STA/AP/AP+STA/Wi-Fi Direct|
|ネットワークプロトコル|TCP/UDP/ARP/ICMP/DHCP/DNS/HTTP|
|認証|WEP/WPA-PSK/WPA2-PSK|
|暗号化|WEP64/WEP128/TKIP/CCMP(AES)|

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/hardware-overview.jpg) 

## はじめに

## ハードウェア

**必要な材料**

- Wio Lite W600 x1 
- コンピュータ x1
- USB Type-C ケーブル x1

:::tip
    一部のUSBケーブルは電力供給のみでデータ転送ができない場合があります。USBケーブルを持っていない場合や、使用しているUSBケーブルがデータ転送可能かどうかわからない場合は、[Seeed USB Type-C サポート USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html)を確認してください。
:::

USBケーブルを使用してWio Lite W600をコンピュータに接続します。

## ソフトウェア

## ステップ 1. Arduinoソフトウェアをインストールする必要があります。

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Arduinoアプリケーションを起動する**

以前にダウンロードしたArduinoアプリケーション（arduino.exe）をダブルクリックします。

:::note
    Arduinoソフトウェアが異なる言語で読み込まれる場合は、設定ダイアログで変更できます。詳細は[Arduino Software (IDE) ページ](https://www.arduino.cc/en/Guide/Environment#languages)をご覧ください。
:::

## ステップ 2. Arduino IDEの設定

Arduino IDEを開き、**ファイル > 設定**をクリックし、以下のURLを*追加のボードマネージャーURL*にコピーします。

```c
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/preference.png)

## ステップ 3. Wio Lite W600ボードをArduino IDEに追加する

[Seeed Board Installation Guide](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)に従い、キーワード**seeeduino_samd_zero**を検索して**Wio Lite W600**をArduino IDEに追加してください。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE1.png"/>
  <figcaption> <i>キーワードは **seeeduino_samd_zero** です</i> </figcaption>
</figure>
</div>

## ステップ 4. W600ライブラリをArduino IDEに追加する

Seeed Githubから[W600ライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_W600/archive/master.zip)をダウンロードしてください。その後、[ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してArduino用ライブラリをインストールしてください。

## ステップ 5. Arduino IDEを再起動し、AP-Stationの例を開きます。Arduino IDEで以下のパスで開くことができます：**ファイル --> 例 --> W600_wifi --> log_data**。

![](https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE3.png)

## ステップ 6. 自分のAPとステーションでコードを修正します。以下の画像では、Wio Lite W600がステーションとして動作し、**A**とマークされたAPに接続し、他のデバイス用に**B AP**を作成します。AP名とパスワードの両方を変更する必要があります。

![](https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE-4.jpg)

## ステップ 7. ボードとポートを選択する

**ツール > ボード**メニューでArduinoに対応するエントリを選択する必要があります。**Seeeduino Zero**を選択します。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE2.png"/>
  <figcaption><i>正しいボードを選択してください</i></figcaption>
</figure>
</div>

**ツール > シリアルポート**メニューからArduinoボードのシリアルデバイスを選択します。これは通常COM3以上になります（**COM1**および**COM2**は通常ハードウェアシリアルポートに予約されています）。確認するには、Arduinoボードを取り外してメニューを再度開き、消えるエントリがArduinoボードであるはずです。ボードを再接続してそのシリアルポートを選択してください。

## ステップ 8. コードをアップロードする  
環境内で「Upload」ボタンをクリックしてください。数秒待つと、アップロードが成功した場合、ステータスバーに「Done uploading.」というメッセージが表示されます。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png"/>
  <figcaption><i>コードをアップロードする</i></figcaption>
</figure>
</div>

アップロードが完了して数秒後、Wio Lite W600は設定したAPにアクセスします。そして、Wio Lite W600によって作成されたAPにスマートフォンを使用してアクセスすることができます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio-Lite-W600/res/Wio-Lite-W600.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Wio Lite W600 Eagleファイル](https://files.seeedstudio.com/wiki/Wio-Lite-W600/res/Wio-Lite-W600.zip)
- **[PDF]** [W600データシート](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_User%20Manual_V1.0.0.pdf)

## 技術サポートと製品ディスカッション  
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>