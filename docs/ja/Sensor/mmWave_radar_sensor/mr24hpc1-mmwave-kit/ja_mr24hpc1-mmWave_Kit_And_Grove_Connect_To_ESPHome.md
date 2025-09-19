---
description: mmWave Kit And Grove を ESPHome に接続
title: mmWave Kit And Grove を ESPHome に接続
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/mmWave_Kit_And_Grove_Connect_To_ESPHome
sidebar_position: 1
last_update:
  date: 12/09/2023
  author: Allen
---

## はじめに

mmWave Human Detection Sensor Kit は Seeed Studio XIAO ESP32C3 を搭載し、Wi-Fi/BLE 接続をサポートし、mmWave センサーによる精密な人体検知を提供します。Grove モジュールをシームレスに接続して機能を追加できます。Home Assistant への簡単なセットアップを 1-2 分で実現し、便利なワイヤレス Over-The-Air (OTA) アップデートと組み合わせます。交換可能な mmWave センサーにより幅広い汎用性を実現します。カスタマイズされたスマートホームオートメーション、侵入検知、高齢者の健康監視に最適です。

## ハードウェアの準備

私は HomeAssistant を実行するサーバーとして Raspberry Pi 4B を使用し、ハードウェアとして mmWave Human Detection Sensor Kit を複数の Grove センサーと組み合わせて使用しています。

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody>
</table>

**Groveセンサー**

- [Grove - 温湿度センサー (DHT20)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html)
- [Grove - 光センサー (LS06-S)](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)
- [Grove - 炎センサー](https://www.seeedstudio.com/Grove-Flame-Sensor.html)

## ソフトウェアの準備

### Home Assistantのインストール

Home Assistantが既に起動して動作していることを確認してください。[製品](https://wiki.seeedstudio.com/ja/home_assistant_topic/#-devices-for-home-assistant-)にHome Assistantをフラッシュする方法を紹介する複数のwikiがあります。私はRaspberry Pi 4Bを使用しているので、[公式のものを直接使用してOSをRaspberry Pi 4Bにフラッシュできます](https://www.home-assistant.io/installation/raspberrypi)。

### Home AssistantにESPHomeをインストール

ESPHomeは**Home Assistantアドオン**として利用でき、アドオンストアから簡単にインストールできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/101.png" style={{width:1000, height:'auto'}}/></div>

- **ステップ1.** **INSTALL**をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/102.png" style={{width:1000, height:'auto'}}/></div>

- **ステップ2.** すべてのオプションを有効にして**START**をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/103.png" style={{width:1000, height:'auto'}}/></div>

ESPHomeが正常に読み込まれると、以下のウィンドウが表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/104.png" style={{width:1000, height:'auto'}}/></div>

## はじめに

### mmWaveキットをESPHomeに接続

#### ステップ1：ハードウェア接続

mmwaveキットをType-Cケーブル経由でHomeAssistantに接続します。下の画像を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/kit.png" style={{width:800, height:'auto'}}/></div>

#### ステップ2：ソフトウェアセットアップ

##### a. mmwaveキットのセットアップ

1. ESPHomeページを開き、右下角の**NEW DEVICE**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/1.png" style={{width:1000, height:'auto'}}/></div>

2. そして、**CONTINUE**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/2.png" style={{width:500, height:'auto'}}/></div>

3. 希望する名前を付けて、**NEXT**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/3.png" style={{width:500, height:'auto'}}/></div>

4. デバイスタイプを選択し、**ESP32-C3**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/4.png" style={{width:500, height:'auto'}}/></div>

5. キーは後で設定ファイルで確認できるので、ここでは**SKIP**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/5.png" style={{width:500, height:'auto'}}/></div>

6. ここで設定ファイルを編集する必要があります。**EDIT**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/6.png" style={{width:500, height:'auto'}}/></div>

7. 以下のコードは参考用です。設定ファイルにコピーできます。コードを完成させた後、右上角の**INSTALL**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/7.png" style={{width:1000, height:'auto'}}/></div>

:::tip

1. apiとota部分にはデフォルトのキーまたはパスワードがあり、変更する必要はありません。
2. wifi部分では、自分のssidとパスワードに変更する必要があります。
3. [コードを見るにはここをクリック](https://github.com/limengdu/mmwave-kit-external-components/blob/mmwave-kit-factory-bin/example/mr24hpc1.yaml)

:::

8. そして、ポップアップウィンドウが表示されるので、3番目のエントリをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/8.png" style={{width:500, height:'auto'}}/></div>

9. 以下のようにクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/9.png" style={{width:500, height:'auto'}}/></div>

10. これでmmwaveキットのセットアップが完了し、このページが表示されます。右下角の**CLOSE**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/10.png" style={{width:1000, height:'auto'}}/></div>

##### b. mmwaveキットデータをオーバービューに追加

1. **Settings**ページに移動し、**Devcies & services**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/11.png" style={{width:1000, height:'auto'}}/></div>

2. Configuredゾーンの**ESPHome**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/12.png" style={{width:1000, height:'auto'}}/></div>

:::tip
ESPHomeがConfiguredゾーンではなく、上のDiscoveredゾーンにある場合は、この[リンク](https://wiki.seeedstudio.com/ja/XIAO-ESP32C3-for-ESPHome-Support/)のステップ15からステップ18に従ってください。
:::

3. **devices**をクリックします。ここでは2つのデバイスがありますが、おそらくあなたの状況では1つのデバイスだけでしょう。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/13.png" style={{width:1000, height:'auto'}}/></div>

4. **mmWave Kit Plus Grove**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/14.png" style={{width:1000, height:'auto'}}/></div>

5. **ADD TO DASHBOARD**をクリックして、これらの情報をダッシュボードに追加します。このページを下にスクロールして、必要な情報をさらに追加できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/15.png" style={{width:1000, height:'auto'}}/></div>

6. 続けて**ADD TO DASHBOARD**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/16.png" style={{width:500, height:'auto'}}/></div>

7. 最後に、左上角の**overview**ボタンをクリックして、ダッシュボードでこれらの情報を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/17.png" style={{width:1000, height:'auto'}}/></div>

### GroveをESPHomeに接続

#### 光センサー(LS06-S)

##### ステップ1: ハードウェア接続

[光センサー](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)をGroveケーブル経由でmmwaveキットに接続します。下の画像を参考にしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/light.png" style={{width:800, height:'auto'}}/></div>

##### ステップ2: ソフトウェアセットアップ

###### a. 光センサーのセットアップ

1. 下の画像を参考に、設定ファイルの対応する位置にこれらのコードを追加してください。

```
  - platform: adc
    pin: GPIO2
    name: "Light Sensor"
    update_interval: 1s
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/18.png" style={{width:1000, height:'auto'}}/></div>

2. そして左上角の**INSTALL**ボタンをクリックします。うまくいけば、この画像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/21.png" style={{width:1000, height:'auto'}}/></div>

:::tip
<span id="jump">エラーが発生した場合は、以下のようにビルドファイルをクリーンできます。</span>
:::

1. おそらくこのようなエラーが発生するでしょう。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/error.png" style={{width:1000, height:'auto'}}/></div>

2. **Clean Build Files**をクリックしていくつかのファイルをクリーンできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/clean.png" style={{width:1000, height:'auto'}}/></div>

3. クリーニング後、**CLOSE**をクリックして再度**INSTALL**を試してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/cleandone.png" style={{width:1000, height:'auto'}}/></div>

###### b. ダッシュボードに光センサーを追加

1. 左上角の**Overview**をクリックし、右上角の**「三点」**と**Edit dashboard**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/22.png" style={{width:1000, height:'auto'}}/></div>

2. 右下角の**ADD CARD**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/23.png" style={{width:1000, height:'auto'}}/></div>

3. **BY ENTITY**をクリックし、**Light Sensor**エントリを選択して**CONTINUE**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/29.png" style={{width:1000, height:'auto'}}/></div>

4. **PICK DIFFERENT CARD**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/30.png" style={{width:800, height:'auto'}}/></div>

5. **Gauge**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/31.png" style={{width:800, height:'auto'}}/></div>

6. 最小値を0、最大値を1に設定し、**SAVE**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/32.png" style={{width:800, height:'auto'}}/></div>

7. 最終的にダッシュボードに光センサーが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/33.png" style={{width:1000, height:'auto'}}/></div>

#### 温湿度センサー(DHT20)

##### ステップ1: ハードウェア接続

[温湿度センサー](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html)をGroveケーブル経由でmmwaveキットに接続します。下の画像を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/DHT20.png" style={{width:800, height:'auto'}}/></div>

##### ステップ2: ソフトウェアセットアップ

###### a. 温湿度センサーのセットアップ

1. 対応する位置の設定ファイルにこれらのコードを追加します。下の画像を参照してください。

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

2. そして左上角の**INSTALL**ボタンをクリックします。うまくいけば、この画像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/28.png" style={{width:1000, height:'auto'}}/></div>

:::tip
エラーが発生した場合は、参考のために[こちら](#jump)にジャンプできます。
:::

###### b. 温湿度センサーをダッシュボードに追加

1. 左上角の**Overview**をクリックし、右上角の**「三点」**と**Edit dashboard**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/22.png" style={{width:1000, height:'auto'}}/></div>

2. 右下角の**ADD CARD**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/23.png" style={{width:1000, height:'auto'}}/></div>

3. **BY ENTITY**をクリックし、**Humidiy**と**Temperature**エントリを選択して、**CONTINUE**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/24.png" style={{width:1000, height:'auto'}}/></div>

4. **ADD TO DASHBOARD**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/25.png" style={{width:500, height:'auto'}}/></div>

5. 最終的に、ダッシュボードに温度と湿度のデータが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/26.png" style={{width:1000, height:'auto'}}/></div>

#### 炎センサー

##### ステップ1：ハードウェア接続

Groveケーブルを使用して[炎センサー](https://www.seeedstudio.com/Grove-Flame-Sensor.html)をmmWaveキットのアナログポートに接続します。下記のビデオを参考にしてください。

##### ステップ2：ソフトウェアセットアップ

###### a. 炎センサーのセットアップ

以下のコードを設定ファイルに追加し、mmWaveキットに**INSTALL**してください。

```
binary_sensor:
  - platform: gpio
    pin:
      number: GPIO3
      inverted: true
    name: "Flame Detecctor"
    device_class: smoke
```

###### b. ダッシュボードに炎センサーを追加する。

上記の光センサーや温湿度センサーを参考にしてください。

#### Yamlファイルを持つその他のセンサー

[Seeed Studio Contributor Program](https://github.com/orgs/Seeed-Studio/projects/12/views/1)によってサポートされており、Mohammedに感謝します。以下にさらにサポートされているセンサーがあります：

[ATH20 sensor](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/AHT20.yaml)
[SHT35 sensor](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/SHT35.yaml)
[SHT40 sensor](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/SHT40.yaml)
[Vibration Sensor](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/Vibration%20Sensor.yaml)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
