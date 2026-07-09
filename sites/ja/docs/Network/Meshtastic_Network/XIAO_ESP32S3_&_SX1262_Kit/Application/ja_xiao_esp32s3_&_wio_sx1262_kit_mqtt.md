---
description: XIAO ESP32S3 & Wio-SX1262 Kit をベースにした Meshtastic MQTT ゲートウェイ設定チュートリアルです。遠距離ネットワークをブリッジしてグローバルメッセージングを可能にし、メッシュ信号が弱いときのバックアップとなり、インターネット経由でより高速なメッセージ配信を実現します。
title: MQTT ゲートウェイのセットアップ
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /xiao_esp32s3_&_wio_sx1262_kit_mqtt
sku: 102010611,113110064
sidebar_position: 1
last_update:
  date: 3/4/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/ja/xiao_esp32s3_&_wio_sx1262_kit_mqtt/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## なぜ Meshtastic + mqtt が必要なのか

MQTT を Meshtastic と統合することで、離れたネットワーク同士をブリッジし、オフグリッド通信を拡張できます。これにより、グローバルなメッセージングが可能になり、メッシュ信号が弱いときのバックアップとなり、インターネット経由でより高速なメッセージ配信を実現します。遠隔地や緊急時の利用に最適です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTFramework.png" style={{width:900, height:'auto'}}/></div>

## ハードウェアの準備

Meshtastic ゲートウェイを構築するには、LoRa と Wifi の両方を動作させることができるデバイスが必要です。さらに、ゲートウェイの位置情報を mqtt 経由で共有したい場合は、GPS モジュールを追加できます。

<table align="center">
<tbody><tr>
<th>Meshtastic & LoRa 用 XIAO ESP32S3 & Wio-SX1262 キット</th>
<th>（オプション）L76K GNSS モジュール</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> もっと見る🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

## ハードウェアの取り付け

### バッテリーへの接続

XIAO ESP32S3 には電源管理チップが内蔵されており、バッテリーを使用して XIAO ESP32S3 を単独で給電したり、XIAO ESP32S3 の USB ポート経由でバッテリーを充電したりできます。

XIAO 用にバッテリーを接続したい場合は、`3.7V lithium` の `protection circuit` 付きの、認証済み充電式バッテリーの購入を推奨します。バッテリーをはんだ付けする際は、必ず正極と負極を正しく区別してください。電源の負極端子は USB ポートに最も近い側であり、電源の正極端子は USB ポートから離れた側になります。

<div class="table-center">
<iframe width="730" height="420" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/video.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### SX-1262 への接続

SX-1262 は B2B インターフェースを介して Xiao ESP32-S3 に接続できます。SX-1262 は SPI を使用して Xiao ESP32-S3 と通信します。
:::warning
互換性のある SX-1262 はキット内でのみ購入できます。
:::

### （オプション）L76K GNSS モジュールへの接続

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Coonection.png" style={{width:600, height:'auto'}}/></div>

## セットアップ

### ステップ1 ファームウェアを書き込む

**1**: まずブラウザを開き、https://flasher.meshtastic.org/# にアクセスします。Chrome または Edge ブラウザが必要です。

**2**: 次に、適切な USB ケーブルを使用してデバイスを PC に接続します。必要に応じて電源を切り、USB ケーブルを挿す間 **BOOT ボタンを押し続けて** ください。

**3**: 表示される手順に従って、後続の書き込み操作を行います。Device は "**Seeed XIAO S3**"、Firmware は **最新** のものを選択し、"**Flash**" をクリックします。以前のファームウェアを上書きしたい場合は、"**Full Erase and Install**" にチェックを入れることを忘れないでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

### ステップ2 デバイス ID を確認する

デバイス ID は通常、MAC アドレスの末尾 4 桁です。シリアルポートモニタを開いて確認できます。

USB ケーブルでデバイスを接続します。その後、[ここをクリック](https://flasher.meshtastic.org/#)して Meshtastic Web フラッシャーに移動します。`Open the serial port monitor` をクリックします。Device として `Seeed XIAO S3` または `Tiny USB XXX` を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/OpenSerialPortMonitor.png" style={{width:600, height:'auto'}}/></div>

シリアルポートログでデバイス ID を確認します。例えば、以下のログはデバイス ID が 24c0 であることを示しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/DEviceIDD.png" style={{width:600, height:'auto'}}/></div>

### ステップ3 アプリ接続

Meshtastic Android アプリを開き、Bluetooth 経由でデバイスに接続します。デフォルトの PIN コードは 123456 です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/ConnectionESP32S33.png" style={{width:600, height:'auto'}}/></div>

### ステップ4 Xiao ESP32S3 Mesh-mqtt ゲートウェイを設定する

<Tabs>
<TabItem value="pypi" label="Android">

**1. LoRa 設定**
- 地域を UNSET から自分の国／地域に変更します（例：ヨーロッパなら EU868、アメリカなら US など）。
- `OK to MQTT` を選択します
- Send をクリックします
- デバイスは自動的に再起動して再接続します。自動的に再起動および再接続されます。これには 30 秒〜2 分ほどかかる場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTLoRaConfiguration.jpg" style={{width:350, height:'auto'}}/></div>

**2. MQTT 設定**

- 既定の `MQTT Address`(mqtt.meshtastic.org)、`User name`(meshdev)、`Password`(large4cats) をそのまま使用できます。 
- `MQTT Enabled` を選択します
- `MQTT Client Proxy Enabled` を選択します
- （オプション）他の mqtt ユーザーに地図上で自分を表示させたい場合は、`Map Reporting` と `I agree` を選択してください。
- Send をクリックします
- デバイスは自動的に再起動して再接続します。自動的に再起動および再接続されます。これには 30 秒〜2 分ほどかかる場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTSetting.jpg" style={{width:350, height:'auto'}}/></div>


**3. チャンネル設定**

- プライマリチャンネルで `Uplink enabled` と `Downlink enabled` をオンにします
- Send をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/UPLINKDOWNLINK.jpg" style={{width:350, height:'auto'}}/></div>


**4. ネットワーク設定**

この設定の後は、デバイスは Bluetooth 経由ではアプリに接続できなくなりますが、ネットワーク経由でアプリに接続できます。

- SSID（Wifi 名）と Wifi パスワードを入力します。使用する Wifi は 2.4G である必要があります。
- Send をクリックします
- デバイスは自動的に再起動します。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTNetwork.jpg" style={{width:350, height:'auto'}}/></div> 

**5. アプリ接続**

これでデバイスは Bluetooth 経由では接続できなくなりましたが、ネットワーク経由で接続できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Network%20Connection.png" style={{width:350, height:'auto'}}/></div> 

</TabItem>

<TabItem value="sou" label="IOS">

**1. LoRa 設定**
- 地域を UNSET から自分の国／地域に変更します（例：ヨーロッパなら EU868、アメリカなら US など）。
- `OK to MQTT` を選択します
- Send をクリックします
- デバイスは自動的に再起動して再接続します。自動的に再起動および再接続されます。これには 30 秒〜2 分ほどかかる場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTLoRa.png" style={{width:350, height:'auto'}}/></div>

**2. MQTT 設定**

- 既定の `MQTT Address`(mqtt.meshtastic.org)、`User name`(meshdev)、`Password`(large4cats) をそのまま使用できます。 
- `MQTT Enabled` を選択します
- `MQTT Client Proxy Enabled` を選択します
- （オプション）他の mqtt ユーザーに地図上で自分を表示させたい場合は、`Map Reporting` と `I agree` を選択してください。
- Send をクリックします
- デバイスは自動的に再起動して再接続します。自動的に再起動および再接続されます。これには 30 秒〜2 分ほどかかる場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTSetting.png" style={{width:350, height:'auto'}}/></div>


**3. チャンネル設定**

- プライマリチャンネルで `Uplink enabled` と `Downlink enabled` をオンにします
- Send をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTChanel.png" style={{width:350, height:'auto'}}/></div>


**4. ネットワーク設定**

この設定の後は、デバイスは Bluetooth 経由ではアプリに接続できなくなりますが、ネットワーク経由でアプリに接続できます。

- SSID（Wifi 名）と Wifi パスワードを入力します。使用する Wifi は 2.4G である必要があります。
- Send をクリックします
- デバイスは自動的に再起動します。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMTTNestwork.png" style={{width:350, height:'auto'}}/></div> 

**5. アプリ接続**

これでデバイスは Bluetooth 経由では接続できなくなりましたが、ネットワーク経由で接続できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTConnect.png" style={{width:350, height:'auto'}}/></div> 

</TabItem>
</Tabs>

## メッセージ送信

これでインターネット経由で他の人と通信できるようになりました。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTTest.png" style={{width:600, height:'auto'}}/></div> 

ESP32S3 MQTT ゲートウェイと同じ周波数帯の別の Meshtastic デバイスがある場合、そのデバイスも ESP32S3 を介してインターネット上の他の人とメッセージを送受信できます。

