---
title: Grove - Time of Flight Distance Sensor VL53L0X
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-Time_of_Flight_Distance_Sensor-VL53L0X/
slug: /ja/Grove-Time_of_Flight_Distance_Sensor-VL53L0X
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/img/main.JPG)

Grove - Time of Flight Distance Sensor-VL53L0Xは、VL53L0Xを基盤とした高速、高精度、長距離の距離センサーです。

VL53L0Xは、現在市場で最も小型のパッケージに収められた新世代のTime-of-Flight (ToF)レーザー測距モジュールであり、従来の技術とは異なり、ターゲットの反射率に関係なく正確な距離測定を提供します。最大2mまでの絶対距離を測定でき、測距性能の新たな基準を設定し、さまざまな新しいアプリケーションへの扉を開きます。

VL53L0Xは、最先端のSPADアレイ（Single Photon Avalanche Diodes）を統合し、STの第2世代FlightSenseTM特許技術を組み込んでいます。

VL53L0Xの940 nm VCSELエミッター（VerticalCavity Surface-Emitting Laser）は人間の目には完全に見えず、内部の物理的な赤外線フィルターと組み合わせることで、より長い測距距離、周囲光への高い耐性、カバーガラスの光学的クロストークに対する優れた耐性を実現します。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Time-of-Flight-Distance-Sensor-VL53L0X.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- **完全統合型の小型モジュール**
  
  - 940 nmレーザーVCSEL
  - VCSELドライバー
  - 高度な組み込みマイクロコントローラーを備えた測距センサー

- **高速で正確な距離測定**
  - 最大2mまでの絶対距離を測定
  - 報告される距離はターゲットの反射率に依存しない
  - カバーガラス選択を簡素化する高度な組み込み光学クロストーク補正

- **目に安全**
  - 最新のIEC 60825-1:2014 - 第3版に準拠したクラス1レーザー装置

- **簡単な統合**
  - 単一のリフロー可能なコンポーネント
  - 追加の光学部品不要
  - 単一電源供給
  - デバイス制御とデータ転送用のI2Cインターフェース
  - Xshutdown（リセット）および割り込みGPIO
  - プログラム可能なI2Cアドレス

## 仕様

特徴|詳細
---|---
動作電圧|3.3V/5V
動作温度|-20℃ - 70℃
推奨測定距離|30mm-1000mm
分解能|1mm
赤外線エミッター|940 nm
バス速度|最大400 kHz（FASTモード）シリアルバス
IICアドレス|0x29

## アプリケーション

- パソコン/ノートパソコン/タブレットおよびIoTのユーザー検出（省エネルギー）
- ロボティクス（障害物検出）
- 家電製品（自動蛇口、石鹸ディスペンサーなどの手検出）
- 1Dジェスチャー認識
- レーザー補助オートフォーカス。特に難しいシーン（低照度、低コントラスト）や高速動画モードでカメラのオートフォーカスシステムの性能を向上させ、速度を向上。

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
    Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - Time of Flight Distance Sensor |
|----------------|-------------|----------------------------------------|
|![画像をここに入力](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像をここに入力](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![画像をここに入力](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html" target="_blank">今すぐ購入</a>|

:::note
    **1** USBケーブルを慎重に接続してください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

    **2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove - Time of Flight Distance SensorをGrove-Base Shieldのポート**IIC**に接続します。

- **ステップ 2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/img/connect.jpg)

:::note
 Grove Base Shieldがない場合は、以下のようにGrove - Temperature and Humidity Sensor ProをSeeeduinoに直接接続することもできます。
:::

| Seeeduino       | Grove - Time of Flight Distance Sensor |
|-----------------|----------------------------------------|
| 5V             | 赤                                     |
| GND            | 黒                                     |
| SDA            | 白                                     |
| SCL            | 黄色                                   |

#### ソフトウェア

- **ステップ 1.** Githubから[VL53L0Xライブラリ](https://github.com/Seeed-Studio/Grove-Ranging-sensor-VL53L0X)をダウンロードします。

- **ステップ 2.** `Grove-Ranging-sensor-VL53L0X-master.zip`ファイルを`Arduinoライブラリフォルダ`に解凍します。

:::note
  例えば、このライブラリを`D:\Software\WorkWork\arduino-1.8.5\libraries`にダウンロードした場合、zipファイルをここに解凍するだけです。要するに、`Grove-Ranging-sensor-VL53L0X-master`フォルダがArduinoライブラリフォルダ内にあることを確認してください。以下の画像のようになります。
:::

![](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/img/folder.png)

- **ステップ 3.** 解凍した`Grove-Ranging-sensor-VL53L0X-master\examples`フォルダを開くと、5つのサブフォルダが表示されます。

![](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/img/examples.png)

必要に応じて異なる例を選択します。そして、`xxx.ino`ファイルをダブルクリックしてArduino IDEを開きます。

:::note
  このデモでは`high_accuracy_ranging.ino`を使用します。
:::

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 5.** Arduino IDEの**シリアルモニター**を開くには、**ツール->シリアルモニター**をクリックします。または++ctrl+shift+m++キーを同時に押します。すべてが正常に動作していれば、結果が表示されます。

結果は以下のようになります：

```
測定時間: 205
測定距離: 115 mm
測定時間: 205
測定距離: 117 mm
測定時間: 205
測定距離: 120 mm
測定時間: 205
測定距離: 125 mm
測定時間: 204
測定距離: 130 mm
測定時間: 205
測定距離: 138 mm
測定時間: 205
測定距離: 143 mm
測定時間: 205
測定距離: 144 mm
測定時間: 205
測定距離: 152 mm
```

## 回路図オンラインビューア

<div>
  className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/res/Grove%20-%20Time%20of%20Flight%20Distance%20Sensor%20(VL53L0X).zip" style={'{'}{'{'}borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'{'}'}{'}'}&gt;
</div>

## リソース

- **[ZIP]** [Grove-Time of Flight Distance Sensor VL53L0X Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/res/Grove%20-%20Time%20of%20Flight%20Distance%20Sensor%20(VL53L0X).zip)
- **[PDF]** [VL53L0X ユーザーマニュアル](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/res/software-flow.pdf)
- **[PDF]** [VL53L0X データシート](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/res/vl53l0x-datasheet.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>