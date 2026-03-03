---
description: SenseCAP_Tracker_T1000-A/B_FAQ
title: FAQ
keywords:
- Tracker
- FAQ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/faq_for_SenseCAP_T1000
sku: 114993073,114993106,114993207,114993208
last_update:
  date: 2/14/2026
  author: Janet
---


## 位置情報関連

### GPS 位置精度

GPS 衛星は、ある程度の精度で宇宙空間に信号を送信していますが、実際に受信される精度は、衛星の配置、信号の遮蔽、大気の状態、受信機の設計特性/品質などの追加要因によって左右されます。

GPS の位置精度を低下させる要因は多数あります。一般的な原因は次のとおりです。

- 建物、橋、樹木などによる衛星信号の遮蔽
- 屋内または地下での使用
- 建物や壁で反射した信号（「マルチパス」）

したがって、遮るもののない広い場所では、より良好な GPS 信号を受信でき、その結果、より高精度な位置情報を取得できます。

### GPS 位置情報が表示されないのはなぜですか？

- トラッカーが屋内にある場合、GPS 位置情報が取得できないことがあります。GNSS 測位には開けた屋外環境が必要です。屋内にいる場合、信号が弱いため GPS 位置情報がタイムアウトする可能性があります。GPS 精度を確保するため、デバイスは屋外に設置してください。

- デバイスの前面を上向きにして設置し、アンテナ位置が遮られないようにすることで、正しく設置されていることを確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/install.png" alt="pir" width={700} height="auto" /></p>

### なぜ Wi-Fi または Bluetooth の位置情報が SenseCAP App の地図に表示されないのですか？

- Wi-Fi 位置情報にはサードパーティの地図解析サービスが必要であり、ユーザーが呼び出して解析する必要があります。現在、Mate App は GNSS 測位の表示のみをサポートしています。

- Bluetooth 測位は、Bluetooth ビーコンとその設置位置に依存して正確なトラッキングを行います。アンテナ位置を遮らないようにしてください。

## ネットワーク関連

### Helium Network

:::caution note
**EU868**/**RU864** リージョンで運用しているユーザー向け：

アップロード間隔を 4 分未満に設定することは**推奨されません**。

アップロード間隔を 4 分未満に設定した場合、デバイスのアップリンクのタイムスタンプと現在時刻の間にずれが生じることがあります。
:::

**その理由は次のとおりです。**

EU868 における[1% duty cycle](https://www.thethingsnetwork.org/docs/lorawan/duty-cycle/#maximum-duty-cycle) の制約により、デバイスは各アップリンク送信のたびに約 4 分待機する必要があります。さらに、Helium ネットワークは、[ADR](https://docs.helium.com/console/profiles/#adr-algorithm) ビットが 1 に設定された 20 個連続のアップリンクパケットが蓄積された後にのみ、データレートと送信電力の補正を開始します。

そのため、アップロード間隔を 4 分未満に設定した場合、リアルタイムデータはいったん RAM に一時保存され、Helium ネットワークがデータレートと送信電力の補正をトリガーしてからアップロードされます。

### キーの取得方法

設定ページで、SenseCAP 以外のプラットフォームを選択してキーを取得します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get-keys.png" alt="pir" width={700} height="auto" /></p>

## ボタン関連

### ネットワークへの参加

ボタンを 3 秒間長押しすると、緑色のランプがゆっくり点滅します。その後ボタンを 1 回押すと、緑色のランプがブレス点灯になり、デバイスは LoRaWAN ネットワークへの参加を試行します。

### 強制再起動

ボタンを押し続けたまま充電ケーブルを接続し、接続後にボタンを離すと、緑色のランプがブレス点灯になり、その後デバイスは強制的に再起動します。

## バッテリー関連

### バッテリー寿命

バッテリー寿命は、アップリンク間隔、センサーの使用状況、LoRa 送信距離、動作温度などの要因によって異なります。予測バッテリー寿命は、代表的な動作環境（25°C）に基づく参考値です。実際のバッテリー寿命は異なる場合があります。

#### EU868(1C/SF12)

|アップロード間隔|1 minute|5 minutes |60 minutes|1 day|
|--|--|--|--|--|
|バッテリー寿命（日）|2.62|27.21|106.78|209.3|

#### US915(1C/SF9)

|アップロード間隔|1 minute|5 minutes |60 minutes|1 day|
|--|--|--|--|--|
|バッテリー寿命（日）|3.02|37.52|117.32|210.7|

バッテリー寿命の詳細な計算については、[Battery Life Calculation Form](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx) を参照してください。

### 充電状態

|状態|インジケーター|
|----|----|
|充電中| LED が 3 秒ごとに 1 回点滅します。|
|満充電| LED が常時点灯します。|
|充電異常|デバイスが 0°C 未満または 45°C を超える状態で充電されると、デバイスは充電保護状態に入り、充電できなくなります。<br/>LED が高速で点滅します。|

:::caution Charging abnormality Alarm
充電中にインジケーターが `flashes quickly` の状態になっている場合、電源電圧が不足しているか、接触不良の可能性があります。

電源を確認するか、別の電源アダプターをお試しください。
:::

### フル充電にはどのくらい時間がかかりますか？

通常、フル充電には約 **2 時間**かかります。

### 充電中もデータをアップロードし続けることはできますか？

はい、充電中もデータをアップロードし続けることができます。

## センサー関連

### センサーデータがない

省電力のため、温度/照度センサー機能はデフォルトで無効になっています。そのため、まず SenseCAP Mate APP 上で有効にする必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/enable-sensor.png" alt="pir" width={500} height="auto" /></p>

## キャッシュデータ

### 動作の仕組み

LoRaWAN 信号が弱い、またはネットワークカバレッジがない場合、データはデバイス内に保存されます。デバイスが LoRaWAN ネットワークカバレッジのあるエリアに戻ると、まずリアルタイムデータを送信し、その後にキャッシュデータをアップロードします。

各アップロード期間中は、最新の位置情報を最初にアップロードし、その後にキャッシュデータをアップロードします。
各サイクルでアップロードされる履歴データのパケット数は少数のため、duty cycle に影響を与えることはありません。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={700} height="auto" /></p>

### 注意

デバイスはオフラインデータを約 1,000 件しかキャッシュできないため、LoRaWAN ネットワークカバレッジのない場所に長時間いると、オフラインデータが上限に達した際に、古いデータが新しいデータによって上書きされます。そのため、一部のデータが「失われる」可能性があります。

## 一括設定の方法

最初のデバイスのセットアップについては、[Quick Start](https://wiki.seeedstudio.com/ja/Get_Started_with_SenseCAP_T1000_tracker/#connect-to-sensecap-mate-app) を確認し、その後右上の `Template` モジュールをクリックします。

`Save as Template` をクリックし、テンプレートに名前を付けてから `Confirm` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/template-save.png" alt="pir" width={600} height="auto" /></p>

その後、他のデバイスを設定する際には、保存したテンプレートを直接選択できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/choose-template.png" alt="pir" width={600} height="auto" /></p>

テンプレートを他の人と共有したい場合は、`Copy Link to Share` または `Download Template` を選択できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/share-temp.png" alt="pir" width={600} height="auto" /></p>

他のユーザーは、共有された URL をコピーするか、テンプレートファイルをインポートすることで、あなたのテンプレートを使用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/import-temp.png" alt="pir" width={600} height="auto" /></p>

## DFU モードの終了方法

ファームウェアのアップグレードに失敗すると、デバイスが DFU モードに入る場合があります。SenseCraft app 上でデバイス名 `SENSECAP_GR_DFU_XXXX` が表示され、LED ライトが点滅し続けます。

- DFU モードでは、3 分間操作がないと自動的に終了します。

- すぐに終了したい場合は、ボタンを 3 秒間長押しすると、デバイスが再起動して通常動作に戻ります。

ボタンを 1 回押す、3 秒間長押しする、10 秒間長押しする、といった操作を行ってもデバイスが DFU モードを終了できない場合は、次の手順に従ってください。

**ステップ 1：SenseCraft APP でデバイスを接続**

前の手順に従って T1000 の Bluetooth 設定ページにアクセスし、デバイスを接続すると、次の画面が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/t1000-dfu-mode.png" alt="pir" width={200} height="auto" /></p>

**ステップ 2：ファームウェアファイルをアップロード**

`Upload Firmware File` をクリックし、bin ファイルを選択してファームウェアを書き込みます。

最新のファームウェアファイルについては、**techsupport@seeed.io** までお問い合わせください。

## タイムスタンプエラー

ペイロード内のタイムスタンプが誤っていることに気付いた場合は、ファームウェアを最新バージョンにアップグレードしてください。

詳細については、[Firmware Upgrade and Release Note](https://wiki.seeedstudio.com/ja/fm_release_for_SenseCAP_T1000/) を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/time-error.png" alt="pir" width={400} height="auto" /></p>

## インテグレーション

アプリケーションのインテグレーションは、ニーズや目的に応じてさまざまな方法で行うことができます。ここでは一般的なインテグレーションオプションをいくつか紹介します。

- **SenseCAP API**:

Application Programming Interface (API) を使用することは、アプリケーション同士やサービスと通信させる一般的な方法です。デバイスを SenseCAP Cloud に接続し、その後 SenseCAP API を使用してデータを取得できます。

SenseCAP API は、ユーザーが IoT デバイスとデータを管理するためのものです。HTTP プロトコル、MQTT プロトコル、WebSocket プロトコルという 3 種類の API メソッドを組み合わせています。

詳細については [SenseCAP API](https://wiki.seeedstudio.com/ja/Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction/) を確認してください。

- **LoRaWAN Network Server**：

[SenseCAP M2 Multi-Platform gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) を使用すれば、内蔵の LoRaWAN Network Server をそのままインテグレーションに利用できます。

[LNS Configuration](https://wiki.seeedstudio.com/ja/SenseCAP_m2_LNS_config) を確認して詳細を参照してください。
