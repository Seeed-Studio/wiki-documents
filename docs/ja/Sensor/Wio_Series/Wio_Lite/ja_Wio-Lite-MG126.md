---
title: Wio Lite MG126
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wio-Lite-MG126/
slug: /ja/Wio-Lite-MG126
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/Wio-Lite-MG126-wiki.jpg)



Wio Lite MG126は、MG126 Bluetoothモジュールを搭載したコスト効率の高いSAMD21ベースの開発ボードです。SAM D21はARM Cortex-M0+ベースのマイクロコントローラーであり、MG126は2.4GHzのシングルモードBluetoothトランシーバーモジュールです。Wio Lite W600と同様に、このボードもArduino Zero（同じArduino Core SAM D21を使用）と互換性があり、Adafruit Featherシリーズと同じ互換性のあるフォームファクターを持っています。

SAMD21の3.3V I/Oピンをブレークアウトしており、SAM D21チップは豊富なI/Oリソースを備えています。これには、14個のデジタルピン、6個のアナログピン、1つのUARTポート、1つのI2Cポート、1つのICSPポートが含まれます。Seeedの多くのボードでは、電力供給とデータ転送にType-Cインターフェースを使用しており、Wio Lite MG126も同様です。また、JST2.0 Li-Poバッテリーポートがあり、3.5Vまたは4.2VのLi-Poバッテリーを使用してこのボードに電力を供給することができます。

次に、BluetoothコアであるMG126について説明します。MG126は、ソフトウェアで構成可能なレジスタと組み込みのパケット処理エンジンを備えた2.4GHz BLE RFトランシーバーです。超低消費電力で動作することができます。MG126のBluetooth空中データレートは1Mbpsであり、SPIインターフェースを介してArduinoコアと4Mbpsの速度で通信することができます。


<p style={{}}><a href="https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## 特徴


- Arduino Zero互換 / Adafruit Feather互換
- 2.4GHz ISMバンド動作、2MHzチャネル間隔
- 1Mbps空中データレート
- 超低消費電力






## 仕様


|パラメータ|値|
|---|--------|
|**メインコントローラー**||
|マイクロコントローラー|SAM D21|
|デジタルI/Oピン|14|
|アナログ入力チャネル|6|
|各I/OピンのDC電流|40 mA|
|IO入力電圧|3.3 V|
|SRAM|32 KB|
|フラッシュ|256 KB|
|最大CPU周波数|48 MHz|
|**Bluetooth**||
|Bluetoothコア|MG126|
|周波数帯域|2.4GHz ISM|
|データレート|1Mbps空中データレート|
|MCUとの通信|SPI (最大4Mbps)|
|送信機|プログラム可能な出力電力: -28 ~ +4 dBm（外部RF PAなし） 0dBm出力電力で20mA|
|受信機|統合チャネルフィルター -85 dBm感度 プログラム可能なLNAゲイン|
|アンテナ|オンボードPCBアンテナ|
|最大Bluetooth接続距離|10 m|
|**その他**||
|電力入力ポート|USB Type C JST2.0 Li-Poバッテリー|
|動作電圧|USB 5V バッテリー 4.2 V|
|復旧可能なヒューズ|保護電流 1A|
|バッテリー充電電流|400 mA|


 


## ハードウェア概要

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/Hardware-overview.jpg)


:::tip
    - PCBアンテナは取り付け時に金属で遮蔽されないようにしてください。遮蔽されるとBluetooth信号の減衰を引き起こします。
    - バッテリーの正極と負極はモジュールの裏面に示されています。バッテリーの正極と負極を逆に接続することは厳禁です。
:::




## はじめに

開始する前に、Google/Apple Storeから**nRF Connect**アプリをダウンロードしてください。**nRF Connect**は標準Bluetoothプロトコル機能に対応しており、すべての例はこのアプリを基にテストされています。

## ハードウェア

**必要な材料**

- Wio Lite Mg126 x1
- コンピュータ x1
- USBタイプCケーブル x1
- ジャンパー x1

:::tip
一部のUSBケーブルは電力供給のみでデータ転送ができない場合があります。USBケーブルを持っていない場合や、使用しているUSBケーブルがデータ転送可能かどうかわからない場合は、[Seeed USB Type C support USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html)を確認してください。
:::

USBケーブルを使用してWio Lite MG126をコンピュータに接続してください。

## ソフトウェア

### ステップ 1. Arduinoソフトウェアをインストールする

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Arduinoアプリケーションを起動する**

以前にダウンロードしたArduinoアプリケーション（arduino.exe）をダブルクリックしてください。

:::note
Arduinoソフトウェアが異なる言語で読み込まれる場合、設定ダイアログで言語を変更できます。詳細は[Arduino Software (IDE) ページ](https://www.arduino.cc/en/Guide/Environment#languages)をご覧ください。
:::

### ステップ 2. Arduino IDEにWio Lite MG126ボードを追加する

Arduino IDEを開き、**ファイル > 設定**をクリックし、以下のURLを「追加のボードマネージャURL」にコピーしてください。

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/preference.png)

**ツール > ボード > ボードマネージャ**をクリックします。ボード名で検索し、キーワード`Seeeduino_Wio_Lite_MG126`を検索して対応するボードをインストールしてください。

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-2.jpg)

### ステップ 3. ボードとポートを選択する

Arduino IDEの**ツール > ボード**メニューで、使用するArduinoに対応するエントリを選択してください。**Wio Lite MG126**を選択します。

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-4.jpg)

Arduinoボードのシリアルデバイスを**ツール > シリアルポート**メニューから選択します。通常、COM3以上が選択されます（**COM1**および**COM2**は通常ハードウェアシリアルポートに予約されています）。確認するには、Arduinoボードを取り外してメニューを再度開き、消えるエントリがArduinoボードであるはずです。ボードを再接続してそのシリアルポートを選択してください。

:::caution
**ファイル > 例**タブでWio Lite MG126ボードを選択する前にMG126の例が表示されない場合があります。ボードを選択すると、例がここに表示されます。
:::

### ステップ 4. デモを開く

Seeed Githubから[MG126ライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_MG126)をダウンロードしてください。その後、[Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してArduino用ライブラリをインストールしてください。**ファイル > 例 > Seeeduino Wio Lite MG126 > analog_output**をクリックします。

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-5.png)

このフォルダには7つのデモが含まれています。`button`および`get_bat_vol`デモはBluetoothライブラリを使用せず、その他は使用します。

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-6.jpg)

|デモ名|機能|DeviceInfo|
|-----|-----|----|
|analog_output|開発ボード上のアナログ値をBluetooth経由で取得し、モバイルアプリに表示します。|Wio_BLE_Analog|
|button|オンボードのユーザーボタンを押してシリアルモニターに出力します。||
|echo_ble|Bluetoothエコーサーバー、開発ボードが送信したデータをモバイルが受信します。|Wio_Lite_BLE|
|get_bat_vol|外部バッテリー電圧を取得します。||
|rgb_led_matrix_control|[Grove - RGB LED Matrix](https://www.seeedstudio.com/Grove-RGB-LED-Matrix-w-Driver.html)を制御して表示します。|Wio_Led_matrix|
|serial_transparent_transmission|シリアルポートデータの透過的な送信。モバイルが送信したデータは開発ボードのシリアルポートから送信され、開発ボードのシリアルポートに送信されたデータはモバイルに送信されます。|Wio_Lite_Serial|
|temp_humidity|[Grove - I2C High Accuracy Temp&Humi Sensor (SHT35)](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html)から情報を取得し、モバイルに送信します。|Wio_BLE_T&H|

### ステップ 5. プログラムをアップロードする

環境内で「アップロード」ボタンをクリックしてください。数秒待つと、アップロードが成功した場合、ステータスバーに「Done uploading.」というメッセージが表示されます。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" />
  </figure>
</div>

アップロードが完了すると、Arduino IDEの左下隅に**Done Uploading**という情報が表示されます。

### ステップ 6. 携帯電話でMG126に接続する

[nRF Connect](#getting-started)アプリを開き、**SCANNER**をクリックしてページ内のDeviceInfo名を検索してください。異なるデモには異なるDeviceInfoがあります。`analog_output`の対応するDeviceInfoは`Wio_BLE_Analog`です。

Bluetoothデバイスリストで`Wio_BLE_Analog`を選択してください。**CONNECT**をタップし、次に**Automation IO > Analog**をクリックすると、A0ピンの値が表示されます。

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/ana-0.jpg)

:::caution
Bluetoothのキャッシュ機能のため、Bluetoothの機能値を変更するたび（異なるBluetooth機能を使用する例をダウンロードする場合）、アプリのキャッシュを一度クリアし、携帯電話を再起動する必要があります。
:::


## 関数インターフェース

### WiFi 関数インターフェース

- 1. Bluetooth パッケージクラス

```
MG126_Ble  
```



- 2. Bluetooth プロトコルスタックを初期化し、Bluetooth をオンにする

```
MG126_Ble .ble_init();
```



- 3. Bluetooth 経由でメッセージを報告する

```
sconn_notifydata();
```


ここでは一般的なインターフェースのみを記載しています。他のインターフェースについては例を参照してください。



## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio-Lite-MG126/res/Wio%20Lite%20MG126.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>




## リソース



- **[ZIP]** [Wio lite MG126 回路図ファイル](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/res/Wio%20Lite%20MG126.zip)

- **[PDF]** [DS-MG126-BLE-データシート](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/res/DS-MG126-BLE.pdf)



## 技術サポート & 製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を提出してください。
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>