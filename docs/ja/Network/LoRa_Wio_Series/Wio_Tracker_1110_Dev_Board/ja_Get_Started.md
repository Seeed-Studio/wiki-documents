---
description: Wio Tracker 1110 の使い方
title: Wio Tracker 1110 の使い方
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Get_Started_with_Wio-Trakcer_1110
sidebar_position: 2
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

このチュートリアルでは、Wio Tracker 1110 開発ボードを工場出荷時のファームウェアを使用して迅速にセットアップし、SenseCAP クラウドに接続してデータを確認する方法を案内します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/image.png" alt="pir" width={800} height="auto" /></p>

### 開発ボードをバインドする

SenseCAP Mate APP をダウンロードしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={500} height="auto" /></p>

:::tip 注意
登録時には **Global** バージョンを選択してください。
:::

`+` -> `Add Device` をクリックします。

次に、ボードラベルの QR コードをスキャンします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-board.png" alt="pir" width={500} height="auto" /></p>

デバイスに名前を付け、`Device Group`（オプション）を選択してから `Bind to account` をクリックします。<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-dev.png" alt="pir" width={300} height="auto" /></p>

### 周波数を設定してゲートウェイに接続する

`Device` ページに戻ると、開発ボードがバインドされていることが確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-done.png" alt="pir" width={300} height="auto" /></p>

`Configuration Now` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/1.jpeg" alt="pir" width={300} height="auto" /></p>

`Ready, go to the next step` をクリックして、デバイス検索に進みます。

:::info 注意
デバイスを最初に電源オンする必要があります。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/2.jpeg" alt="pir" width={300} height="auto" /></p>

`Scan` でデバイスを検索し、自分のデバイスと同じ `S/N code` を持つアイテムをリストで見つけたら、クリックして進みます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/3.jpeg" alt="pir" width={300} height="auto" /></p>

`Setting` ページに進み、プラットフォームを `SenseCAP for the Things Network` または `SenseCAP for Helium` として選択します。

:::info 注意
他のプラットフォームを選択することもできますが、その場合 SenseCAP プラットフォームは使用できません。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/4.jpeg" alt="pir" width={300} height="auto" /></p>

<table align="center">
  <caption> <h2>プラットフォーム</h2> </caption>
  <tbody>
    <tr>
    <td><h4>プラットフォーム</h4></td>
    <td><h4>説明</h4></td>
    </tr>
    <tr>
      <td>SenseCAP for The Things Network</td>
    <td>デフォルトのプラットフォーム。
SenseCAP Gateway と一緒に使用する必要があります。SenseCAP は独自の TTN サーバーを構築しており、SenseCAP Gateway とペアリングすることでセンサーをすぐに使用できるようにします。<br />
    <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCAP Outdoor Gateway</span></a><br />
    <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCAP Indoor Gateway</span></a></td>
    </tr>
        <tr>
    <td>SenseCAP for Helium</td>
    <td>Helium ネットワークのカバレッジがある場合、データは Helium を介してアップロードできます。デバイスは SenseCAP のプライベート Helium コンソールで動作します。ユーザーは Helium コンソールでデバイスを作成する必要がなく、SenseCAP Mate App と Portal を使用してすぐに利用できます。<br /><a href="https://explorer.helium.com/" target="_blank"><span>Helium Coverage</span></a></td>
    </tr>
        <tr>
    <td>Helium</td>
    <td>デバイスをパブリック Helium コンソールに接続します</td>
    </tr>
            <tr>
    <td>The Things Network</td>
    <td>デバイスを TTN(TTS) サーバーに接続します</td>
    </tr>
            <tr>
    <td>Other Platform</td>
    <td>その他の LoRaWAN ネットワークサーバー</td>
    </tr>
  </tbody></table>

`Frequency Plan` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/5.jpeg" alt="pir" width={300} height="auto" /></p>

`Position Uplink Interval (in minutes)` と `Sensor Uplink Interval (in minutes)` を入力します。

|パラメータ|説明|
| - | - |
|Position Uplink Interval (minutes)|位置情報の定期アップロード。<br/>デフォルトは 5 分。<br/>頻度が高いほど消費電力が増加します。|
|Sensor Uplink Interval (minutes)|センサーデータの定期アップロード。<br/>デフォルトは 5 分。<br/>頻度が高いほど消費電力が増加します。|

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/6.jpeg" alt="pir" width={300} height="auto" /></p>

設定内のすべての情報が要件に一致したら、`Send` をクリックして **Tracker Wio 1110** に送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/7.jpeg" alt="pir" width={300} height="auto" /></p>

`Measure` ページに進み、`Measure` をクリックするとセンサー値が取得できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/8.jpeg" alt="pir" width={500} height="auto" /></p>

### データを確認する

開発ボードの電源を入れ、近くにネットワークカバレッジがあることを確認してください。開発ボードがネットワークに正常に接続されると、`Device` ページで `online` と表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/9.jpeg" alt="pir" width={300} height="auto" /></p>

もしお住まいの地域で信号が弱い場合は、単にLoRaWANゲートウェイを設置するだけで解決できます。これはWi-Fiルーターを設定するのと同じくらい簡単です。LoRaの魅力は、その柔軟性とネットワーク拡張の容易さにあります。この信頼性の高いソリューションは、コストパフォーマンスにも優れています。例えば、[SenseCAP M2 Indoor LoRaWAN Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)を使用すれば、最大10kmまでカバー範囲を拡張できます！

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_873855_RPfBjpKfW2xWddri_1693817031?w=680&h=446&type=image/png" alt="pir" width={600} height="auto" /></p>

:::tip
開発ボードを窓際や障害物のない場所に置いてください。これによりGPS信号がより良くなり、ボードが位置データを正常に取得できるようになります。
:::

位置情報やセンサーデータは、SenseCAP MateアプリまたはSenseCAPポータルで確認できます。

**SenseCAP Mateアプリ**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/app-data.png" alt="pir" width={500} height="auto" /></p>

**SenseCAPポータル**

アプリを通じてアカウントを作成した場合は、直接ログインできます。  
デバイスページに移動し、`Data`をクリックして確認してください。

:::info
[SenseCAPポータルユーザーガイド](https://sensecap-docs.seeed.cc/quickstart.html)
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/por.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/portal-da.png" alt="pir" width={800} height="auto" /></p>

### データを即時アップロードする方法

1、開発ボードが振動することで**三軸加速度センサー**がトリガーされ、即座にデータを収集してアップロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/shake.GIF" alt="pir" width={800} height="auto" /></p>

シリアルモニターで情報を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/image-shake.png" alt="pir" width={800} height="auto" /></p>

デバイスが振動すると、SenseCAP Mateアプリのインターフェースにデータパケットが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/shake-app.JPG" alt="pir" width={300} height="auto" /></p>

2、`BUTTON`を一度押すと、デバイスが即座にデータを収集してアップロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/button.GIF" alt="pir" width={800} height="auto" /></p>

シリアルモニターで情報を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/image-button.png" alt="pir" width={800} height="auto" /></p>

SenseCAP Mateアプリのインターフェースには、SOS信号とデータパケットが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/sos-app.JPG" alt="pir" width={300} height="auto" /></p>

### Groveセンサーを追加する（オプション）

Wio Tracker 1110開発ボードにはオンボードセンサーに加え、無限の可能性があります。工場出荷時のファームウェアでは、以下のGroveセンサーがこのボードに接続され、自動的に認識されることが可能です。

<table align="center">
  <caption> <h2>Groveモジュール</h2> </caption>
  <tbody>
    <tr>
    <td><h4>センサー</h4></td>
    <td><h4>今すぐ購入</h4></td>
    <td><h4>センサー</h4></td>
    <td><h4>今すぐ購入</h4></td>
    </tr>
    <tr>
    <td>LM358アンプをベースにしたサウンドセンサー</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Sound-Sensor-Based-on-LM358-amplifier-Arduino-Compatible.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/c_6.png" alt="" width={200} height="auto"/></a>
</div></td>
    <td>高精度バロメーターセンサー-DPS310</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-high-precision-barometer-sensor-dps310-preview.jpg" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
<tr>
    <td>空気質センサー(SGP41)</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-voc-and-eco2-gas-sensor_sgp41_-v1.0-45font.jpg" alt="" width={200} height="auto"/></a>
</div></td>
    <td>日光センサー-SI1151</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Sunlight-Sensor.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar885583_3.jpg" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
<tr>
    <td>超音波距離センサー</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove---ultrasonic-distance-sensor-preview_1.png" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
  </tbody></table>

GroveセンサーをWio Tracker開発ボードの対応するGroveポートに接続してください。

また、[Grove-I2C Hub](https://www.seeedstudio.com/Grove-I2C-Hub.html)を使用して、複数のI2Cセンサーをボードに接続することも可能です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WM1110-A-Grove.jpg" alt="pir" width={800} height="auto" /></p>

## ファームウェアの書き込み

* [最新ファームウェア](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_app_release_sw_0.5_2024-06-06.uf2)

`Reset`ボタンをダブルクリックすると、PC上に`WM1110_BOOT`ドライバが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

`.uf2`ファイルをドライバにドラッグしてください。ダウンロードは自動的に開始され、その後ドライバはログアウトします。

## SenseCAP API

SenseCAP APIは、ユーザーがIoTデバイスとデータを管理するためのものです。以下の3種類のAPIメソッドが含まれています：HTTPプロトコル、MQTTプロトコル、Websocketプロトコル。
* HTTP APIを使用すると、ユーザーはLoRaデバイスを管理し、生データや履歴データを取得できます。
* MQTT APIを使用すると、ユーザーはMQTTプロトコルを通じてセンサーのリアルタイム測定データを購読できます。
* Websocket APIを使用すると、ユーザーはWebsocketプロトコルを通じてセンサーのリアルタイム測定データを取得できます。

詳細については、[APIユーザーガイド](https://sensecap-docs.seeed.cc/)をご確認ください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>