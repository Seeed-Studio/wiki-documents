---
description: Wio Tracker 1110 の使用開始
title: Wio Tracker 1110 の使用開始
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Get_Started_with_Wio-Trakcer_1110
sidebar_position: 2
last_update:
  date: 11/3/2023
  author: Jessie
---

このチュートリアルでは、ファクトリーファームウェアを通じてWio Tracker 1110開発ボードを素早くセットアップし、SenseCAPクラウドに接続してデータを確認する方法をユーザーにガイドします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/image.png" alt="pir" width={800} height="auto" /></p>

### 開発ボードをバインドする

SenseCAP Mate APPをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={500} height="auto" /></p>

:::tip 注意
登録時は**Global**バージョンを選択してください。
:::

`+` -> `Add Device`をクリックします。

次に、ボードラベルのQRコードをスキャンします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-board.png" alt="pir" width={500} height="auto" /></p>

デバイスに名前を付け、`Device Group`を選択し（オプション）、`Bind to account`をクリックします。<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-dev.png" alt="pir" width={300} height="auto" /></p>

### 周波数を設定してゲートウェイに接続する

`Device`ページに戻ると、開発ボードがバインドされていることが確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-done.png" alt="pir" width={300} height="auto" /></p>

`Configuration Now`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/1.jpeg" alt="pir" width={300} height="auto" /></p>

`Ready, go to the next step`をクリックして、デバイス検索に入ります。

:::info 注意
デバイスは最初に電源を入れる必要があります。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/2.jpeg" alt="pir" width={300} height="auto" /></p>

`Scan`でデバイスを検索し、リスト内で自分のデバイスと同じ`S/N code`を持つアイテムを見つけたら、クリックして入ります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/3.jpeg" alt="pir" width={300} height="auto" /></p>

`Setting`ページに移動し、プラットフォームを`SenseCAP for the Things Network`または`SenseCAP for Helium`のいずれかから選択します。

:::info 注意
他のプラットフォームも選択できますが、その場合はSenseCAPプラットフォームを使用できません。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/4.jpeg" alt="pir" width={300} height="auto" /></p>

<div style={{textAlign: 'center'}}>
<h2>プラットフォーム</h2>
  <table>
    <tbody>
      <tr>
        <td><h4>プラットフォーム</h4></td>
        <td><h4>説明</h4></td>
      </tr>
      <tr>
        <td>SenseCAP for The Things Network</td>
        <td>デフォルトプラットフォーム。
  SenseCAP Gatewayと組み合わせて使用する必要があります。SenseCAPは独自のTTNサーバーを構築し、SenseCAPゲートウェイとペアリングした際にセンサーをすぐに使用できるようにします。<br />
        <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCAP Outdoor Gateway</span></a><br />
        <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCAP Indoor Gateway</span></a></td>
      </tr>
      <tr>
        <td>SenseCAP for Helium</td>
        <td>Heliumネットワークのカバレッジがある場合、Helium経由でデータをアップロードできます。デバイスはSenseCAPのプライベートHeliumコンソールで動作します。ユーザーはHeliumコンソールでデバイスを作成する必要がなく、SenseCAP Mate AppとPortalですぐに使用できます。<br />
        <a href="https://explorer.helium.com/" target="_blank"><span>Helium Coverage</span></a></td>
      </tr>
      <tr>
        <td>Helium</td>
        <td>デバイスをパブリックHeliumコンソールに接続</td>
      </tr>
      <tr>
        <td>The Things Network</td>
        <td>デバイスをTTN(TTS)サーバーに接続</td>
      </tr>
      <tr>
        <td>Other Platform</td>
        <td>その他のLoRaWANネットワークサーバー</td>
      </tr>
    </tbody>
  </table>
</div>

`Frequency Plan`を選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/5.jpeg" alt="pir" width={300} height="auto" /></p>

`Position Uplink Interval (in minutes)`と`Sensor Uplink Interval (in minutes)`を入力してください。

| パラメータ | 説明 |
| - | - |
| Position Uplink Interval (minutes) | 位置情報の定期アップロード。<br/>デフォルト5分。<br/>頻度が高いほど、消費電力が高くなります。 |
| Sensor Uplink Interval (minutes) | センサーデータの定期アップロード。<br/>デフォルト5分。<br/>頻度が高いほど、消費電力が高くなります。 |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/6.jpeg" alt="pir" width={300} height="auto" /></p>

設定内のすべての情報が要件に合致したら、`Send`をクリックして**Tracker Wio 1110**に送信できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/7.jpeg" alt="pir" width={300} height="auto" /></p>

`Measure`ページに移動し、`Measure`をクリックすると、センサー値を取得できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/8.jpeg" alt="pir" width={500} height="auto" /></p>

### データの確認

開発ボードの電源を入れ、近くにネットワークカバレッジがあることを確認してください。開発ボードがネットワークに正常に接続されると、`Device`ページに`online`と表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/9.jpeg" alt="pir" width={300} height="auto" /></p>

お住まいの地域で信号が弱い場合は、LoRaWANゲートウェイを設置するだけで解決できます。Wi-Fiルーターの設定と同じくらい簡単です。LoRaの美しさは、その柔軟性とネットワーク拡張の容易さにあります。この信頼性の高いソリューションは費用対効果も優れています。例えば、[SenseCAP M2 Indoor LoRaWAN Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)は、最大10kmまでカバレッジを拡張できます！

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_873855_RPfBjpKfW2xWddri_1693817031?w=680&h=446&type=image/png" alt="pir" width={600} height="auto" /></p>

:::tip
開発ボードを窓際や障害物のない場所に置いてください。そうすることで、より良いGPS信号を受信でき、ボードが位置データを正常に取得できます。
:::

SenseCAP Mate APPまたはSenseCAP Portalで位置とセンサーデータを確認できます。

**SenseCAP Mate APP**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/app-data.png" alt="pir" width={500} height="auto" /></p>

**SenseCAP Portal**

APPでアカウントを作成した場合は、直接ログインできます。
デバイスページに移動し、`Data`をクリックして確認してください。

:::info
[SenseCAP Portal ユーザーガイド](https://sensecap-docs.seeed.cc/quickstart.html)
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/por.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/portal-da.png" alt="pir" width={800} height="auto" /></p>

### データを即座にアップロードする方法

1、開発ボードを振って振動を発生させると、**3軸加速度センサー**がトリガーされ、即座にデータを収集してアップロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/shake.GIF" alt="pir" width={800} height="auto" /></p>

シリアルモニターで情報を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/image-shake.png" alt="pir" width={800} height="auto" /></p>

SenseCAP Mate appインターフェースでは、デバイスが振られたときにデータパケットが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/shake-app.JPG" alt="pir" width={300} height="auto" /></p>

2、`BUTTON`を一度押すと、デバイスが即座にデータを収集してアップロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/button.GIF" alt="pir" width={800} height="auto" /></p>

シリアルモニターで情報を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/image-button.png" alt="pir" width={800} height="auto" /></p>

SenseCAP Mate appインターフェースでは、SOS信号とデータパケットが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/sos-app.JPG" alt="pir" width={300} height="auto" /></p>

### Groveセンサーの追加（オプション）

オンボードセンサーに加えて、Wio tracker 1110開発ボードでは無限の可能性があります。工場出荷時のファームウェアでは、以下のGroveセンサーもこのボードにアクセスして自動的に認識されます。

<table align="center">
  <caption> <h2>Groveモジュール</h2> </caption>
  <tbody>
    <tr>
    <td><h4>センサー</h4></td>
    <td><h4>今すぐ入手</h4></td>
    <td><h4>センサー</h4></td>
    <td><h4>今すぐ入手</h4></td>
    </tr>
    <tr>
    <td>Sound Sensor-Based on LM358 amplifier</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Sound-Sensor-Based-on-LM358-amplifier-Arduino-Compatible.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/c_6.png" alt="" width={200} height="auto"/></a>
</div></td>
    <td>High Precision Barometer Sensor-DPS310</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-high-precision-barometer-sensor-dps310-preview.jpg" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
<tr>
    <td>Air Quality Sensor(SGP41)</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-voc-and-eco2-gas-sensor_sgp41_-v1.0-45font.jpg" alt="" width={200} height="auto"/></a>
</div></td>
    <td>Sunlight sensor-SI1151</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Sunlight-Sensor.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar885583_3.jpg" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
<tr>
    <td>Ultrasonic Distance Sensor</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove---ultrasonic-distance-sensor-preview_1.png" alt="" width={200} height="auto"/></a>
</div></td>
</tr>

  </tbody></table>

GroveセンサーをWio Tracker開発ボードの対応するGroveポートに接続してください。

[Grove-I2Cハブ](https://www.seeedstudio.com/Grove-I2C-Hub.html)を使用して、複数のI2Cセンサーをボードに接続することもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WM1110-A-Grove.jpg" alt="pir" width={800} height="auto" /></p>

## ファームウェアの書き込み

- [最新ファームウェア](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_app_release_sw_0.5_2024-06-06.uf2)

`Reset`ボタンをダブルクリックすると、PC上に`WM1110_BOOT`ドライバが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

`.uf2`ファイルをドライバにドラッグしてください。ダウンロードが自動的に実行され、その後ドライバがログアウトします。

## SenseCAP API

SenseCAP APIは、ユーザーがIoTデバイスとデータを管理するためのものです。HTTPプロトコル、MQTTプロトコル、Websocketプロトコルの3種類のAPIメソッドが含まれています。
- HTTP APIを使用すると、ユーザーはLoRaデバイスを管理し、生データや履歴データを取得できます。
- MQTT APIを使用すると、ユーザーはMQTTプロトコルを通じてセンサーのリアルタイム測定データを購読できます。
- Websocket APIを使用すると、ユーザーはWebsocketプロトコルを通じてセンサーのリアルタイム測定データを取得できます。

詳細については、[APIユーザーガイド](https://sensecap-docs.seeed.cc/)をご確認ください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>
