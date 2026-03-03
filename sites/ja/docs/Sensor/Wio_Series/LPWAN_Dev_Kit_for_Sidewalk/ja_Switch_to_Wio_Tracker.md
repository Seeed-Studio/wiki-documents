---
description: SidewalkバージョンをLoRaWANバージョンに書き換える
title: SidewalkバージョンをLoRaWANバージョンに書き換える
keywords:
- トラッカー
- Sidewalk
- Amazon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/flash_to_wio_tracker
last_update:
  date: 05/15/2025
  author: Jessie
---


このチュートリアルでは、Amazon Sidewalk用LPWAN開発ボードをLoRaWANネットワークを使用したい方向けにWio Tracker 1110開発ボードに書き換える方法を説明します。



### 準備

* Amazon Sidewalk用LPWAN開発キット x 1

* コンピュータ x 1

* USB Type-Cケーブル x 1

* J-Linkデバッグプログラマー x 1

* [ブートローダーファイル](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino/tree/master/bootloader/Seeed_Wio_Tracker_1110)

* [アプリケーションファームウェア](https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/wio_tracker_app_release_sw_0.5_2024-06-06.uf2)




:::note
ボードを書き換えた後は、SenseCAP Cloudを使用することはできません。これはSenseCAP Cloudのキーが含まれていないためです。ただし、TTN、Helium、AWSなどの他のプラットフォームを使用することができます。
:::


### ボードを接続する

開発ボードをJ-Linkデバッグプログラマーに以下のように接続します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/connection-pin.png" alt="pir" width={700} height="auto" /></p>

:::info 接続:
**DIO** (Wio-WM1110開発ボードピン2) -> **SWDIO** (J-Linkデバッグプログラマーピン7)  
**CLK** (Wio-WM1110開発ボードピン4) -> **SWDCLK** (J-Linkデバッグプログラマーピン9)  
**GND** (Wio-WM1110開発ボードピン5) -> **GND** (J-LinkデバッグプログラマーGND)
:::





### ブートローダーを書き込む

* **ステップ1**: 新しいプロジェクトを作成する

JFlashを開き、`Create new project`を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/jlink-create.png" alt="pir" width={700} height="auto" /></p>

`...`をクリックしてターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/jlink-create.png" alt="pir" width={700} height="auto" /></p>

`nRF52840_xxAA`を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/choose-device.png" alt="pir" width={700} height="auto" /></p>

ターゲットインターフェース: `SWD`を選択し、`OK`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/new-created.png" alt="pir" width={700} height="auto" /></p>

* **ステップ2**: ターゲットに接続する

ボードの電源を入れ、JLinkに接続した後、`Target` -> `Connect`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/connect-target.png" alt="pir" width={700} height="auto" /></p>

接続が成功すると、以下のようなプロンプトが表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/connected-.png" alt="pir" width={700} height="auto" /></p>


<details>

<summary>データバックアップ</summary>

ボードを書き換える前に、念のためバックアップを取ることをお勧めします。

`Target` -> `Manual Programming` -> `Read Back` -> `Entire chip`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/entire-chip.png" alt="pir" width={700} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/entire-success.png" alt="pir" width={700} height="auto" /></p>

その後、データを保存します。`File` -> `Save data file as`をクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/files-save.png" alt="pir" width={700} height="auto" /></p>


</details>

* **ステップ3**: ファイルをダウンロードする

`File` -> `Open data file`をクリックし、Wio Tracker 1110開発ボードの[ブートローダー](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino/tree/master/bootloader/Seeed_Wio_Tracker_1110)ファイルを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/open-data-file.png" alt="pir" width={700} height="auto" /></p>

`Target` -> `Production Programming`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/flashing.png" alt="pir" width={700} height="auto" /></p>


プログラミングが成功すると、以下のようなプロンプトが表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/flash-success.png" alt="pir" width={700} height="auto" /></p>

### アプリケーションをダウンロードする

`Reset`ボタンをダブルクリックすると、PCに`BOOT`ディスクが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/boot-disk.png" alt="pir" width={700} height="auto" /></p>

.uf2ファイルをディスクにコピーすると、自動的にダウンロードが開始され、ダウンロードが完了するとディスクがログアウトします。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/uf2-file.png" alt="pir" width={700} height="auto" /></p>

Arduinoを使用して独自のアプリケーションをアップグレードすることもできます。


### ログを確認する

その後、シリアルモニターを開いてログを確認します。
書き換え後、DevEUI/AppEUI/Appkeyは0になります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/join-fail.png" alt="pir" width={700} height="auto" /></p>


SenseCAP Mate APPを使用してプラットフォームを選択し、DevEUI/AppEUI/Appkeyを定義することができます。[Get Started](https://wiki.seeedstudio.com/ja/Get_Started_with_Wio-Trakcer_1110/#configure-the-frequency-and-connect-to-the-gateway)を参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>


:::info note
SenseCAP Cloudを使用したい場合は、sensecap@seeed.ccまでお問い合わせください。
:::

設定後、ボードはリセットされ、ネットワークに再接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/joined.png" alt="pir" width={700} height="auto" /></p>