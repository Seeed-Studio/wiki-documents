---
description: mmWaveキットとGroveをESPHomeに接続する
title: mmWaveキットとGroveをESPHomeに接続する
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/mmWave_Kit_And_Grove_Connect_To_ESPHome
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Allen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

mmWave Human Detection Sensor KitはSeeed Studio XIAO ESP32C3を搭載しており、Wi-Fi/BLE接続をサポートし、mmWaveセンサーによる正確な人間検知を提供します。追加機能のためにGroveモジュールをシームレスに接続できます。Home Assistantのセットアップを1～2分で簡単に実現し、便利な無線Over-The-Air（OTA）アップデートを提供します。交換可能なmmWaveセンサーにより広範な汎用性を実現します。スマートホームオートメーションのカスタマイズ、侵入検知、高齢者の健康状態の監視に最適です。

## ハードウェア準備

HomeAssistantを実行するサーバーとしてRaspberry Pi 4Bを使用し、ハードウェアとしてmmWave Human Detection Sensor Kitを使用します。また、複数のGroveセンサーを併用します。

<table align="center">
  <tbody><tr>
      <th>mmWave Human Detection Sensor Kit</th>
      <th>Raspberry Pi 4B</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/mmwavekit.png" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/pi.png" style={{width:350, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody>
</table>

**Groveセンサー**

- [Grove - 温湿度センサー (DHT20)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html)
- [Grove - 光センサー (LS06-S)](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)
- [Grove - 炎センサー](https://www.seeedstudio.com/Grove-Flame-Sensor.html)

## ソフトウェア準備

### Home Assistantのインストール

Home Assistantがすでに稼働していることを確認してください。Home Assistantを[製品](https://wiki.seeedstudio.com/ja/home_assistant_topic/#-devices-for-home-assistant-)にフラッシュする方法を紹介する複数のWikiがあります。私はRaspberry Pi 4Bを使用しているので、[公式の方法を使用してRaspberry Pi 4BにOSをフラッシュできます](https://www.home-assistant.io/installation/raspberrypi)。

### Home AssistantにESPHomeをインストール

ESPHomeは**Home Assistant Add-On**として利用可能で、アドオンストアから簡単にインストールできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/101.png" style={{width:1000, height:'auto'}}/></div>

- **ステップ1.** **INSTALL**をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/102.png" style={{width:1000, height:'auto'}}/></div>

- **ステップ2.** すべてのオプションを有効にして**START**をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/103.png" style={{width:1000, height:'auto'}}/></div>

ESPHomeが正常にロードされると、以下のウィンドウが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/104.png" style={{width:1000, height:'auto'}}/></div>

## はじめに

### mmWaveキットをESPHomeに接続する

#### ステップ1: ハードウェア接続

Type-Cケーブルを使用してmmWaveキットをHomeAssistantに接続します。以下の画像を参考にしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/kit.png" style={{width:800, height:'auto'}}/></div>

#### ステップ2: ソフトウェア設定

##### a. mmWaveキットの設定

1. ESPHomeページを開き、右下の**NEW DEVICE**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/1.png" style={{width:1000, height:'auto'}}/></div>

2. 次に、**CONTINUE**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/2.png" style={{width:500, height:'auto'}}/></div>

3. 任意の名前を入力し、**NEXT**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/3.png" style={{width:500, height:'auto'}}/></div>

4. デバイスタイプを選択し、**ESP32-C3**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/4.png" style={{width:500, height:'auto'}}/></div>

5. 設定ファイル内で後でキーを確認できるので、ここでは**SKIP**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/5.png" style={{width:500, height:'auto'}}/></div>

6. 設定ファイルを編集する必要があります。**EDIT**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/6.png" style={{width:500, height:'auto'}}/></div>

7. 以下のコードは参考用です。これを設定ファイルにコピーしてください。コードを完成させたら、右上の**INSTALL**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/7.png" style={{width:1000, height:'auto'}}/></div>

:::tip
1. `api`と`ota`部分にはデフォルトのキーやパスワードが設定されているため変更する必要はありません。
2. `wifi`部分では、自分のSSIDとパスワードを変更する必要があります。
3. [コードを見るにはこちらをクリック](https://github.com/limengdu/mmwave-kit-external-components/blob/mmwave-kit-factory-bin/example/mr24hpc1.yaml)
:::

8. ポップアップウィンドウが表示されるので、3番目の項目をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/8.png" style={{width:500, height:'auto'}}/></div>

9. 以下のようにクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/9.png" style={{width:500, height:'auto'}}/></div>

10. mmWaveキットの設定が完了し、このページが表示されます。右下の**CLOSE**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/10.png" style={{width:1000, height:'auto'}}/></div>

##### b. mmWaveキットのデータを概要に追加する

1. **Settings**ページに移動し、**Devices & services**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/11.png" style={{width:1000, height:'auto'}}/></div>

2. 設定済みゾーンで**ESPHome**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/12.png" style={{width:1000, height:'auto'}}/></div>

:::tip
ESPHomeが設定済みゾーンに表示されず、発見済みゾーンに表示される場合は、この[リンク](https://wiki.seeedstudio.com/ja/XIAO-ESP32C3-for-ESPHome-Support/)のステップ15からステップ18を参照してください。
:::

3. **devices**をクリックします。ここでは2つのデバイスがありますが、あなたの場合は1つのデバイスだけかもしれません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/13.png" style={{width:1000, height:'auto'}}/></div>

4. **mmWave Kit Plus Grove**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/14.png" style={{width:1000, height:'auto'}}/></div>

5. **ADD TO DASHBOARD**をクリックして、情報をダッシュボードに追加します。このページをスクロールして、追加したい情報をさらに選択できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/15.png" style={{width:1000, height:'auto'}}/></div>

6. **ADD TO DASHBOARD**を続けてクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/16.png" style={{width:500, height:'auto'}}/></div>

7. 最後に、左上の**overview**ボタンをクリックしてダッシュボードに情報が表示されるのを確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/17.png" style={{width:1000, height:'auto'}}/></div>

### GroveをESPHomeに接続する

#### 光センサー(LS06-S)

##### ステップ1: ハードウェア接続

[Grove光センサー](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)をGroveケーブルを使用してmmWaveキットに接続します。以下の画像を参考にしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/light.png" style={{width:800, height:'auto'}}/></div>

##### ステップ2: ソフトウェア設定

###### a. 光センサーの設定

1. 以下のコードを設定ファイルの対応する位置に追加してください。画像を参考にしてください。

```
  - platform: adc
    pin: GPIO2
    name: "Light Sensor"
    update_interval: 1s
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/18.png" style={{width:1000, height:'auto'}}/></div>

2. 次に、左上の**INSTALL**ボタンをクリックします。正常に進行すると以下の画像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/21.png" style={{width:1000, height:'auto'}}/></div>

:::tip
<span id="jump">エラーが発生した場合は、以下のようにビルドファイルをクリーンアップしてください。</span>
:::

1. 以下のようなエラーが発生する可能性があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/error.png" style={{width:1000, height:'auto'}}/></div>

2. **Clean Build Files** をクリックして、一部のファイルをクリーンアップします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/clean.png" style={{width:1000, height:'auto'}}/></div>

3. クリーンアップ後、**CLOSE** をクリックして再度 **INSTALL** を試してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/cleandone.png" style={{width:1000, height:'auto'}}/></div>

###### b. ダッシュボードに光センサーを追加する

1. 左上の **Overview** をクリックし、右上の **"三点アイコン"** と **Edit dashboard** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/22.png" style={{width:1000, height:'auto'}}/></div>

2. 右下の **ADD CARD** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/23.png" style={{width:1000, height:'auto'}}/></div>

3. **BY ENTITY** をクリックし、**Light Sensor** エントリを選択して **CONTINUE** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/29.png" style={{width:1000, height:'auto'}}/></div>

4. **PICK DIFFERENT CARD** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/30.png" style={{width:800, height:'auto'}}/></div>

5. **Gauge** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/31.png" style={{width:800, height:'auto'}}/></div>

6. 最小値を 0、最大値を 1 に設定し、**SAVE** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/32.png" style={{width:800, height:'auto'}}/></div>

7. 最終的にダッシュボードに光センサーが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/33.png" style={{width:1000, height:'auto'}}/></div>

#### 温度・湿度センサー (DHT20)

##### ステップ 1: ハードウェア接続

[温度・湿度センサー](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html) を Grove ケーブルを使用して mmWave キットに接続します。以下の画像を参考にしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/DHT20.png" style={{width:800, height:'auto'}}/></div>

##### ステップ 2: ソフトウェア設定

###### a. 温度・湿度センサーの設定

1. 以下のコードを対応する位置に設定ファイルに追加してください。画像を参考にしてください。

```
i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_0x38
```

```
sensor:
  - platform: aht10
    temperature:
      name: "Living Room Temperature"
    humidity:
      name: "Living Room Humidity"
    update_interval: 60s
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/19.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/20.png" style={{width:1000, height:'auto'}}/></div>

2. その後、左上の **INSTALL** ボタンをクリックします。正常に動作すれば以下の画像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/28.png" style={{width:1000, height:'auto'}}/></div>

:::tip
エラーが発生した場合は、[こちら](#jump) を参考にしてください。
:::

###### b. ダッシュボードに温度・湿度センサーを追加する

1. 左上の **Overview** をクリックし、右上の **"三点アイコン"** と **Edit dashboard** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/22.png" style={{width:1000, height:'auto'}}/></div>

2. 右下の **ADD CARD** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/23.png" style={{width:1000, height:'auto'}}/></div>

3. **BY ENTITY** をクリックし、**Humidity** と **Temperature** エントリを選択して **CONTINUE** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/24.png" style={{width:1000, height:'auto'}}/></div>

4. **ADD TO DASHBOARD** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/25.png" style={{width:500, height:'auto'}}/></div>

5. 最終的にダッシュボードに温度と湿度のデータが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/26.png" style={{width:1000, height:'auto'}}/></div>

#### 火炎センサー

##### ステップ 1: ハードウェア接続

Grove ケーブルを使用して [火炎センサー](https://www.seeedstudio.com/Grove-Flame-Sensor.html) を mmWave キットのアナログポートに接続します。以下の動画を参考にしてください。

##### ステップ 2: ソフトウェア設定

###### a. 火炎センサーの設定

以下のコードを設定ファイルに追加し、mmWave キットに **INSTALL** してください。

```
binary_sensor:
  - platform: gpio
    pin:
      number: GPIO3
      inverted: true
    name: "Flame Detecctor"
    device_class: smoke
```

###### b. ダッシュボードに火炎センサーを追加する

光センサーまたは温度・湿度センサーの手順を参考にしてください。

#### YAML ファイルを使用したその他のセンサー

[Seeed Studio Contributor Program](https://github.com/orgs/Seeed-Studio/projects/12/views/1) によってサポートされています。Mohammed に感謝します。以下のセンサーがさらにサポートされています：

[ATH20 センサー](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/AHT20.yaml)  
[SHT35 センサー](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/SHT35.yaml)  
[SHT40 センサー](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/SHT40.yaml)  
[振動センサー](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/Vibration%20Sensor.yaml)  

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品の使用体験ができる限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>