---
description: SenseCAP_Tracker_T1000-A/B_FAQ
title: FAQ
keywords:
- Tracker
- FAQ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/faq_for_SenseCAP_T1000
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 位置関連

### GPS測位精度

GPS衛星は一定の精度で宇宙空間に信号を送信しますが、受信する信号は衛星の配置、信号の遮断、大気条件、受信機の設計特性や品質などの追加要因によって異なります。

GPS測位精度を低下させる要因は多岐にわたります。一般的な原因には以下が含まれます：

* 建物、橋、木などによる衛星信号の遮断
* 屋内または地下での使用
* 建物や壁から反射された信号（「マルチパス」）

したがって、広く遮るもののない場所では、より良いGPS信号を受信でき、より正確な測位結果が得られます。

### GPS位置データがないのはなぜですか？

* トラッカーが屋内にある場合、GPS位置情報が利用できない可能性があります。GNSS測位には開けた屋外環境が必要です。屋内にいる場合、信号が弱いためGPS位置情報がタイムアウトする可能性があります。GPS精度を確保するためにデバイスを屋外に配置してください。

* デバイスを正しく設置し、デバイスの前面を上向きにしてアンテナの位置が遮られないようにしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/install.png" alt="pir" width={700} height="auto" /></p>



### SenseCAPアプリの地図にWi-FiまたはBluetooth位置情報が表示されないのはなぜですか？

* Wi-Fi位置情報は、ユーザーが呼び出す必要があるサードパーティの地図解析サービスを必要とします。現在、MateアプリはGNSS測位表示のみをサポートしています。

* Bluetooth測位は、Bluetoothビーコンとそのそれぞれの位置に依存して正確な追跡を行います。
アンテナの位置を遮らないようにしてください。




## ネットワーク関連

### Heliumネットワーク

:::caution note
**EU868**/**RU864**地域で運用しているユーザー向け：

アップロード間隔を4分未満に設定することは**推奨されません**。

アップロード間隔を4分未満に設定した場合、デバイスのアップリンクのタイムスタンプと現在時刻の間にずれが生じる可能性があります。
:::

**理由は以下の通りです**：

EU868の[1%デューティサイクル](https://www.thethingsnetwork.org/docs/lorawan/duty-cycle/#maximum-duty-cycle)制約により、デバイスは各アップリンク送信のために約4分間待機する必要があります。さらに、Heliumネットワークは、[ADR](https://docs.helium.com/console/profiles/#adr-algorithm)ビットが1に設定された20個の連続したアップリンクパケットを蓄積した後にのみデータレートと電力補正を開始します。

したがって、アップロード間隔を4分未満に設定すると、リアルタイムデータは一時的にRAMに保存され、Heliumネットワークがデータレートと電力補正をトリガーするまでアップロードが保留されます。


### キーを取得する方法

設定ページで、SenseCAP以外のプラットフォームを選択してキーを取得してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get-keys.png" alt="pir" width={700} height="auto" /></p>

## ボタン関連

### ネットワーク参加

ボタンを3秒間押し続けると、緑色のライトがゆっくり点滅します。その後、ボタンを1回押すと緑色のライトが呼吸状態になり、デバイスがLoRaWANネットワークへの参加を試みます。

### 強制再起動

ボタンを押し続けた状態で充電ケーブルを接続し、接続後にボタンを離します。緑色のライトが呼吸状態になり、デバイスが強制的に再起動されます。

## バッテリー関連

### バッテリー寿命

バッテリー寿命は、アップリンク間隔、センサー使用状況、LoRa送信距離、動作温度などの要因によって異なります。予測されるバッテリー寿命は、典型的な動作環境（25°C）に基づいており、参考値として提供されます。実際のバッテリー寿命は異なる場合があります。

#### EU868(1C/SF12)

|アップロード間隔|1分|5分|60分|1日|
|--|--|--|--|--|
|バッテリー寿命(日)|2.62|27.21|106.78|209.3|

#### US915(1C/SF9)

|アップロード間隔|1分|5分|60分|1日|
|--|--|--|--|--|
|バッテリー寿命(日)|3.02|37.52|117.32|210.7|

詳細なバッテリー寿命計算については、[バッテリー寿命計算フォーム](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx)を参照してください。

### 充電状態

|状態|インジケーター|
|----|----|
|充電中| LEDが3秒ごとに1回点滅します。|
|充電完了| LEDが常時点灯します。|
|充電異常|デバイスが0°C以下または45°C以上で充電される場合、充電保護状態に入り、充電できなくなります。<br/>LEDが急速に点滅します。|

:::caution 充電異常アラーム
充電中にインジケーターが`急速に点滅`する場合、電源電圧が不足しているか、接触不良の可能性があります。

電源を確認するか、別の電源アダプターを試してください。
:::

### 充電完了までの時間はどれくらいですか？

通常、充電完了まで約**2時間**かかります。

### 充電中にデータをアップロードし続けることはできますか？

はい、充電中でもデータをアップロードし続けることができます。

## センサー関連

### センサーデータがない

電力を節約するため、温度/光センサー機能はデフォルトで無効化されています。そのため、まずSenseCAP Mate APPで有効化する必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/enable-sensor.png" alt="pir" width={500} height="auto" /></p>

## キャッシュデータ

### 動作方法

LoRaWAN信号が弱い場合やネットワークがない場合、データはデバイス内に保存されます。デバイスがLoRaWANネットワークのあるエリアに戻ると、リアルタイムデータを最初に送信し、その後キャッシュデータをアップロードします。

各アップロード期間中、最新の位置情報を最初にアップロードし、その後キャッシュデータを送信します。1サイクルあたり数パケットの履歴データのみがアップロードされるため、Duty Cycleには影響しません。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={700} height="auto" /></p>

### 注意事項

デバイスは約1,000件のオフラインデータのみをキャッシュできるため、LoRaWANネットワークがない場所に長期間いる場合、オフラインデータが制限に達すると、古いデータが新しいデータによって上書きされるため、一部のデータを「失う」可能性があります。

## バッチ設定方法

まず、[クイックスタート](https://wiki.seeedstudio.com/ja/Get_Started_with_SenseCAP_T1000_tracker/#connect-to-sensecap-mate-app)を確認して最初のデバイスをセットアップしてください。その後、右上の`Template`モジュールをクリックします。

`Save as Template`をクリックし、テンプレートに名前を付けて`Confirm`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/template-save.png" alt="pir" width={600} height="auto" /></p>

後で他のデバイスを設定する際には、保存したテンプレートを直接選択することができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/choose-template.png" alt="pir" width={600} height="auto" /></p>

テンプレートを他の人と共有したい場合は、`Copy Link to Share`または`Download Template`を選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/share-temp.png" alt="pir" width={600} height="auto" /></p>

他のユーザーは、共有されたURLをコピーするか、テンプレートファイルをインポートすることでテンプレートを使用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/import-temp.png" alt="pir" width={600} height="auto" /></p>

## タイムスタンプエラー

ペイロード内のタイムスタンプが間違っている場合は、ファームウェアを最新バージョンにアップグレードしてください。

詳細については、[ファームウェアアップグレードとリリースノート](https://wiki.seeedstudio.com/ja/fm_release_for_SenseCAP_T1000/)を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/time-error.png" alt="pir" width={400} height="auto" /></p>

## 統合

アプリケーションの統合は、ニーズや目的に応じてさまざまな方法で行うことができます。以下は一般的な統合オプションです：

* **SenseCAP API**：

アプリケーションプログラミングインターフェース（API）を使用することで、アプリケーションが他のアプリケーションやサービスと通信できるようになります。デバイスをSenseCAP Cloudに接続し、SenseCAP APIを使用してデータを取得することができます。

SenseCAP APIは、IoTデバイスとデータを管理するためのものです。HTTPプロトコル、MQTTプロトコル、WebSocketプロトコルの3種類のAPIメソッドを組み合わせています。

詳細については、[SenseCAP API](https://wiki.seeedstudio.com/ja/Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction/)を確認してください。

* **LoRaWANネットワークサーバー**：

[SenseCAP M2 Multi-Platform Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)を使用することで、組み込みのLoRaWANネットワークサーバーを直接利用して統合することができます。

詳細については、[LNS設定](https://wiki.seeedstudio.com/ja/SenseCAP_m2_LNS_config)を確認してください。