---
description: Wio-Trcker L2 をベースにした Meshtastic MQTT ゲートウェイ設定チュートリアル。グローバルメッセージングを可能にし、メッシュ信号が弱いときのバックアップを提供し、インターネット経由でより高速なメッセージ配信を実現します。
title: MQTT ゲートウェイ
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/mqttworkflow.png
slug: /set_up_mqtt_gateway_l2
sku: 100029766
sidebar_position: 3
last_update:
  date: 3/4/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/ja/set_up_mqtt_gateway_l2/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## なぜ Meshtastic + mqtt が必要なのか

MQTT を Meshtastic と統合することで、離れたネットワーク同士をブリッジし、オフグリッド通信を拡張できます。これにより、グローバルメッセージングが可能になり、メッシュ信号が弱いときのバックアップとなり、インターネット経由でより高速なメッセージ配信を実現します。遠隔地や緊急時の利用に最適です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/mqttworkflow.png" style={{width:900, height:'auto'}}/></div>

## ハードウェアの準備

Meshtastic ゲートウェイをセットアップするには、LoRa と Wifi の両方を動作させることができるデバイスが必要です。さらに、mqtt 経由でゲートウェイの位置情報を共有したい場合は、GPS モジュールを追加できます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手🖱️</font></span></strong>
</a>
</div>

## セットアップ

### ステップ1 ファームウェアを書き込む

[Meshtastic Web Flasher](https://flasher.meshtastic.org/) にアクセスします。

ターゲットデバイスを `Seeed Wio Tracker L2` に設定し、最新のファームウェアを選択してから `Flash` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/Flash.png" alt="pir" width={800} height="auto" /></p>

デバイスの電源を入れ、`Enter DFU Mode` をクリックします。`Tracker L2` という名前のシリアルポートが表示されるので、それをクリックして接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/StartFlash.png" alt="pir" width={800} height="auto" /></p>

その後 "Flash" をクリックします。以前のファームウェアを上書きしたい場合は、"Full Erase and Install" にチェックを入れることを忘れないでください。

### ステップ2 デバイス ID を確認する

<Tabs>
<TabItem value="23" label="デバイス背面を確認">
MAC アドレスの `最後の4桁` がデバイス ID です。

例えば、下のデバイスのデバイス ID は `A0D4` になります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/MACAd.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="22" label="シリアルツール経由">
[Meshtastic Web Flasher](https://flasher.meshtastic.org/) にアクセスします。<br/>

 `Open Serial Monitor` をクリックし、デバイスを PC に接続して、シリアルログを確認し、キーワード `using nodenum` を探します。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/UsingNodeName.png" alt="pir" width={800} height="auto" /></p>


</TabItem>
</Tabs>

### ステップ3 APP 接続

<Tabs>

<TabItem value="3" label="MUI">

`Setting` ページに移動し、`Reboot/Shutdown` をクリックしてから、`Bluetooth icon` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="pir" width={800} height="auto" /></p>

その後、デバイスは Bluetooth モードで再起動します。Bluetooth ペアリングコードが画面に表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothParingMode1.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="4" label="BaseUI">

デバイスは常に Bluetooth ペアリングモードになっており、特別な操作は不要です。

</TabItem>
</Tabs>

[ここをクリック](https://meshtastic.org/downloads/)して Meshtastic APP をダウンロードします。

デバイスをスマートフォンの APP とペアリングします。

<Tabs>

<TabItem value="5" label="IOS">

- Bluetooth パネルでターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- 画面に表示されているコードを入力し、`Pair` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="6" label="Android">

- Bluetooth パネルでターゲットデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1Connection.png" alt="pir" width={300} height="auto" /></p>

- 画面に表示されているコードを入力し、`OK` をクリックしてデバイスに接続します。

<p style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/CodePairingPhone.png" alt="pir" width={300} height="auto" /></p>


</TabItem>
</Tabs>

### ステップ4 Xiao ESP32S3 Mesh-mqtt ゲートウェイを設定する

<Tabs>
<TabItem value="pypi" label="Android">

**1. LoRa 設定**
- リージョンを UNSET から自分の国/地域に変更します（例：ヨーロッパなら EU868、アメリカなら US など）。
- `OK to MQTT` を選択します。
- Send をクリックします。
- デバイスは自動的に再起動して再接続します。デバイスは自動的に再起動して再接続します。これには 30 秒から 2 分ほどかかる場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTLoRaConfiguration.jpg" style={{width:350, height:'auto'}}/></div>

**2. MQTT 設定**

- デフォルトの `MQTT Address`(mqtt.meshtastic.org)、`User name`(meshdev)、`Password`(large4cats) を使用できます。 
- `MQTT Enabled` を選択します。
- `MQTT Client Proxy Enabled` を選択します。
- （オプション）他の mqtt ユーザーに地図上で自分を表示させたい場合は、`Map Reporting` と `I agree` を選択してください。
- Send をクリックします。
- デバイスは自動的に再起動して再接続します。デバイスは自動的に再起動して再接続します。これには 30 秒から 2 分ほどかかる場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTSetting.jpg" style={{width:350, height:'auto'}}/></div>


**3. チャネル設定**

- プライマリチャネルで `Uplink enabled` と `Downlink enabled` をオンにします。
- Send をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/UPLINKDOWNLINK.jpg" style={{width:350, height:'auto'}}/></div>


**4. ネットワーク設定**

この設定の後、デバイスは Bluetooth 経由では APP に接続できなくなります。ただし、ネットワーク経由で APP に接続できます。

- SSID（Wifi 名）と Wifi パスワードを入力します。使用する Wifi は 2.4G である必要があります。
- Send をクリックします。
- デバイスは自動的に再起動します。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTNetwork.jpg" style={{width:350, height:'auto'}}/></div> 

**5. APP 接続**

この時点で、デバイスは Bluetooth 経由では接続できませんが、ネットワーク経由で接続できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Network%20Connection.png" style={{width:350, height:'auto'}}/></div> 

</TabItem>

<TabItem value="sou" label="IOS">

**1. LoRa 設定**
- リージョンを UNSET から自分の国/地域に変更します（例：ヨーロッパなら EU868、アメリカなら US など）。
- `OK to MQTT` を選択します。
- Send をクリックします。
- デバイスは自動的に再起動して再接続します。デバイスは自動的に再起動して再接続します。これには 30 秒から 2 分ほどかかる場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTLoRa.png" style={{width:350, height:'auto'}}/></div>

**2. MQTT 設定**

- デフォルトの `MQTT Address`(mqtt.meshtastic.org)、`User name`(meshdev)、`Password`(large4cats) を使用できます。 
- `MQTT Enabled` を選択します。
- `MQTT Client Proxy Enabled` を選択します。
- （オプション）他の mqtt ユーザーに地図上で自分を表示させたい場合は、`Map Reporting` と `I agree` を選択してください。
- Send をクリックします。
- デバイスは自動的に再起動して再接続します。デバイスは自動的に再起動して再接続します。これには 30 秒から 2 分ほどかかる場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTSetting.png" style={{width:350, height:'auto'}}/></div>


**3. チャネル設定**

- プライマリチャネルで `Uplink enabled` と `Downlink enabled` をオンにします。
- Send をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTChanel.png" style={{width:350, height:'auto'}}/></div>


**4. ネットワーク設定**

この設定の後、デバイスは Bluetooth 経由では APP に接続できなくなります。ただし、ネットワーク経由で APP に接続できます。

- SSID（Wifi 名）と Wifi パスワードを入力します。使用する Wifi は 2.4G である必要があります。
- Send をクリックします。
- デバイスは自動的に再起動します。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMTTNestwork.png" style={{width:350, height:'auto'}}/></div> 

**5. APP 接続**

この時点で、デバイスは Bluetooth 経由では接続できませんが、ネットワーク経由で接続できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTConnect.png" style={{width:350, height:'auto'}}/></div> 

</TabItem>
</Tabs>

## メッセージ送信

これでインターネット経由で他の人と通信できるようになりました。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTTest.png" style={{width:600, height:'auto'}}/></div> 

MQTT ゲートウェイと同じ周波数帯にある別の Meshtastic デバイスがある場合、そのデバイスも L2 ゲートウェイを介してインターネット上の他の人とメッセージを送受信できます。

