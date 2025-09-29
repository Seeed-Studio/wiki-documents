---
description: SenseCAP_Tracker_T1000-A/B_FAQ
title: FAQ
keywords:
- Tracker
- FAQ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/faq_for_SenseCAP_T1000
last_update:
  date: 9/20/2023
  author: Jessie
---


## 位置情報関連

### GPS測位精度

GPS衛星は一定の精度で宇宙空間に信号を送信していますが、受信する精度は衛星の配置、信号の遮蔽、大気条件、受信機の設計機能/品質などの追加要因に依存します。

GPS測位精度を低下させる要因は多数あります。一般的な原因には以下があります：

- 建物、橋、木などによる衛星信号の遮蔽
- 屋内または地下での使用
- 建物や壁で反射された信号（「マルチパス」）

そのため、広く遮蔽物のない場所では、より良いGPS信号を受信でき、より正確な測位結果を得ることができます。

### GPS位置データが取得できないのはなぜですか？

- トラッカーが屋内にある場合、GPS位置情報が利用できない可能性があります。GNSS測位には開放的な屋外環境が必要です。屋内にいる場合、信号が弱いためGPS位置情報がタイムアウトする可能性があります。GPS精度を確保するため、デバイスを屋外に設置してください。

- アンテナの位置が遮蔽されないよう、デバイスの前面を上向きにしてデバイスを適切に設置してください

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/install.png" alt="pir" width={700} height="auto" /></p>

### Wi-FiやBluetooth位置情報がSenseCAP Appマップに表示されないのはなぜですか？

- Wi-Fi位置情報にはサードパーティのマップ解析サービスが必要で、ユーザーが解析のために呼び出す必要があります。現在、Mate AppはGNSS測位表示のみをサポートしています。

- Bluetooth測位は、正確な追跡のためにBluetoothビーコンとそれぞれの位置に依存します。アンテナの位置を遮蔽します。

## ネットワーク関連

### Helium Network

:::caution note
**EU868**/**RU864**地域で動作するユーザーの場合：

アップロード間隔を4分未満に設定することは**推奨されません**。

アップロード間隔を4分未満に設定すると、デバイスのアップリンクと現在時刻の間にタイムスタンプの不整合が発生する可能性があります。
:::

**理由は以下の通りです**：

EU868における[1%デューティサイクル](https://www.thethingsnetwork.org/docs/lorawan/duty-cycle/#maximum-duty-cycle)制約により、デバイスは各アップリンク送信のために約4分間辛抱強く待機する必要があります。さらに、Heliumネットワークは[ADR](https://docs.helium.com/console/profiles/#adr-algorithm)ビットが1に設定された20個の連続アップリンクパケットを蓄積した後にのみ、データレートと電力補正を開始します。

そのため、設定したアップロード間隔が4分未満の場合、リアルタイムデータは一時的にRAMに保存され、Heliumネットワークがデータレートと電力補正をトリガーしてからアップロードされるまで保持されます。

### キーの取得方法

設定ページで、SenseCAP以外のプラットフォームを選択してキーを取得してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get-keys.png" alt="pir" width={700} height="auto" /></p>

## ボタン関連

### ネットワーク参加

ボタンを3秒間長押しすると、緑色のライトがゆっくり点滅します。その後、ボタンを1回押すと、緑色のライトが呼吸するように点灯し、デバイスがLoRaWANネットワークへの参加を試行します。

### 強制再起動

ボタンを長押ししながら充電ケーブルを接続し、接続後にボタンを離すと、緑色のライトが呼吸するように点灯し、デバイスが強制的に再起動されます。

## バッテリー関連

### バッテリー寿命

バッテリー寿命は、アップリンク間隔、センサー使用量、LoRa送信距離、動作温度などの要因に依存します。予測されるバッテリー寿命は、典型的な作業環境（25°C）に基づいており、参考として提供されています。実際のバッテリー寿命は異なる場合があります。

#### EU868(1C/SF12)

|アップロード間隔|1分|5分|60分|1日|
|--|--|--|--|--|
|バッテリー寿命(日)|2.62|27.21|106.78|209.3|

#### US915(1C/SF9)

|アップロード間隔|1分|5分|60分|1日|
|--|--|--|--|--|
|バッテリー寿命（日）|3.02|37.52|117.32|210.7|

詳細なバッテリー寿命の計算については、[バッテリー寿命計算フォーム](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx)を参照してください。

### 充電ステータス

|ステータス|インジケーター|
|----|----|
|充電中| LEDが3秒ごとに1回点滅します。|
|満充電| LEDが常時点灯します。|
|充電異常|デバイスが0°C未満または45°C以上で充電される場合、デバイスは充電保護状態に入り、充電できません。<br/>LEDが高速点滅します。|

:::caution 充電異常アラーム
充電中にインジケーターが`高速点滅`する場合、電源電圧が不足しているか、接触不良の可能性があります。

電源を確認するか、別の電源アダプターをお試しください。
:::

### フル充電にはどのくらい時間がかかりますか？

通常、フル充電には約**2時間**かかります。

### 充電中もデータのアップロードを継続できますか？

はい、充電中もデータのアップロードを継続できます。

## センサー関連

### センサーデータがない

省電力のため、温度/光センサー機能はデフォルトで無効になっているため、まずSenseCAP Mate APPで有効にする必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/enable-sensor.png" alt="pir" width={500} height="auto" /></p>

## キャッシュデータ

### 動作原理

LoRaWAN信号が弱い場合やネットワークカバレッジがない場合、データはデバイスに保存されます。デバイスがLoRaWANネットワークカバレッジのあるエリアに戻ると、まずリアルタイムデータを送信し、その後キャッシュデータをアップロードします。

各アップロード期間中、最新の位置情報を最初にアップロードし、その後キャッシュデータをアップロードします。
サイクルごとに少数の履歴データパケットのみがアップロードされるため、デューティサイクルに影響しません。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={700} height="auto" /></p>

### 注意事項

デバイスは約1,000件のオフラインデータしかキャッシュできないため、LoRaWANネットワークカバレッジのない場所に長時間いる場合、オフラインデータが上限に達すると、古いデータが新しいデータで上書きされ、一部のデータが「失われる」可能性があります。

## バッチ設定方法

最初のデバイスをセットアップするには[クイックスタート](https://wiki.seeedstudio.com/ja/Get_Started_with_SenseCAP_T1000_tracker/#connect-to-sensecap-mate-app)を確認し、その後右上角の`Template`モジュールをクリックしてください。

`Save as Template`をクリックし、テンプレートに名前を付けて`Confirm`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/template-save.png" alt="pir" width={600} height="auto" /></p>

後で他のデバイスを設定する際は、保存したテンプレートを直接選択できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/choose-template.png" alt="pir" width={600} height="auto" /></p>

テンプレートを他の人と共有したい場合は、`Copy Link to Share`または`Download Template`を選択できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/share-temp.png" alt="pir" width={600} height="auto" /></p>

他のユーザーは、共有URLをコピーするか、テンプレートファイルをインポートすることで、あなたのテンプレートを使用することを選択できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/import-temp.png" alt="pir" width={600} height="auto" /></p>

## タイムスタンプエラー

ペイロード内のタイムスタンプが間違っている場合は、ファームウェアを最新バージョンにアップグレードしてください。

詳細については[ファームウェアアップグレードとリリースノート](https://wiki.seeedstudio.com/ja/fm_release_for_SenseCAP_T1000/)を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/time-error.png" alt="pir" width={400} height="auto" /></p>

## 統合

アプリケーションの統合は、ニーズと目標に応じて様々な方法で行うことができます。以下は一般的な統合オプションです：

- **SenseCAP API**:

アプリケーションプログラミングインターフェース（API）を使用することは、アプリケーションが他のアプリケーションやサービスと通信できるようにする一般的な方法です。デバイスをSenseCAP Cloudに接続し、SenseCAP APIを使用してデータを取得できます。

SenseCAP APIは、ユーザーがIoTデバイスとデータを管理するためのものです。HTTPプロトコル、MQTTプロトコル、WebSocketプロトコルの3種類のAPIメソッドを組み合わせています。

詳細については[SenseCAP API](https://wiki.seeedstudio.com/ja/Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction/)をご確認ください。

- **LoRaWAN Network Server**：

[SenseCAP M2 Multi-Platformゲートウェイ](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)を使用することで、内蔵のLoRaWAN Network Serverを直接統合に使用できます。

詳細については[LNS Configuration](https://wiki.seeedstudio.com/ja/SenseCAP_m2_LNS_config)をご確認ください。
