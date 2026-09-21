---
description: SenseCAP_Tracker_T1000-A/B_FAQ
title: FAQ
keywords:
  - Tracker
  - FAQ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /faq_for_SenseCAP_T1000
sku: 114993073,114993106,114993207,114993208
last_update:
  date: 9/19/2026
  author: Janet
createdAt: '2023-09-21'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/ja/faq_for_SenseCAP_T1000/
---


## 位置情報関連

### GPS測位精度

GPS衛星は、ある程度の精度で宇宙空間に信号を送信していますが、実際に受信される精度は、衛星の配置、信号の遮蔽、大気の状態、受信機の設計特性や品質など、追加の要因によって左右されます。

GPS測位精度を低下させる要因は多数あります。一般的な原因としては次のようなものがあります：

- 建物、橋、樹木などによる衛星信号の遮蔽
- 屋内または地下での使用
- 建物や壁で反射した信号（「マルチパス」）

したがって、広く遮るもののない場所では、より良好なGPS信号を受信でき、その結果、より高精度な位置情報を取得できます。

### GPS位置情報データがないのはなぜですか？

- トラッカーが屋内にある場合、GPS位置情報が取得できないことがあります。GNSS測位には開けた屋外環境が必要です。屋内にいる場合、信号が弱いためGPS位置情報の取得がタイムアウトすることがあります。GPS精度を確保するため、デバイスを屋外に設置してください。

- デバイスの前面を上向きにして設置し、アンテナ位置が遮られないようにするなど、正しい向きで設置されていることを確認してください

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/install.png" alt="pir" width={700} height="auto" /></p>

T1000がGNSS位置情報データを提供しない場合は、以下のトラブルシューティング手順に従って、デバイスの設定、設置環境、およびGNSS測位ステータスを確認してください。


#### 1. デバイスの設置環境を確認する

GNSS性能は、デバイスの設置環境によって影響を受ける可能性があります。

次の点を必ずご確認ください：

- **T1000の前面が遮られていない**こと。
- デバイスが金属ケースの内部や、GNSS信号を大きく遮る可能性のある素材に囲まれた場所に設置されていないこと。
- **デバイスの近くに金属物がない**こと。
- 空がよく見える**開けた屋外環境**でテストしていること。


#### 2. GNSSスキャン時間を延長する

GNSSスキャン時間は、T1000が測位動作中にGNSS衛星を探索する時間を決定します。

GNSSスキャン時間が短すぎると、特に初回テスト時やGNSS信号が比較的弱い環境では、有効なGNSSフィックスを取得するための時間が不足する場合があります。

SenseCraft AppでT1000の**General settings**を開き、**GNSS Scan Time**を延長してください。

GNSSスキャン時間の最大値は**120秒**です。

> **ヒント：** トラブルシューティングの際は、まず長めのGNSSスキャン時間を設定し、問題が衛星捕捉に利用できる時間に関連しているかどうかを確認することをお勧めします。

#### 3. LoRaWANアップリンクペイロード内のGNSS測位ステータスを確認する

T1000が依然として位置情報を提供しない場合は、**生のLoRaWANアップリンクペイロード**を確認してください。

アップリンクペイロードには、測位結果と測位ステータスが含まれています。生のペイロードを確認することで、次の点を判断できます：

- GNSSスキャンがタイムアウトしたかどうか
- 別の測位方式が使用されたかどうか

例えば、次のペイロードはGNSSスキャンがタイムアウトした場合の例です：

`110100000064a763a0014100002f`

この例では、最初の1バイト目の11が測位ステータスとセンサーパケットを示し、2バイト目の01がGNSSスキャンがタイムアウトし位置情報の取得に失敗したことを示します。詳細については、T1000 Payload Formatドキュメントを参照してください。


#### 4. 生のLoRaWANアップリンクペイロードを提供する

上記の項目を確認しても問題が解決しない場合は、T1000からの**複数の生のLoRaWANアップリンクペイロード**を取得し、techsupport@seeed.io まで当社テクニカルサポートチームにご連絡ください。


### なぜWi-FiまたはBluetoothの位置情報がSenseCAP Appの地図に表示されないのですか？

- Wi-Fi位置情報には、ユーザーが呼び出して解析を行うサードパーティの地図解析サービスが必要です。現在、Mate AppがサポートしているのはGNSS測位表示のみです。

- Bluetooth測位は、Bluetoothビーコンとその設置位置に基づいて正確なトラッキングを行います。アンテナ位置を遮らないようにしてください。

## ネットワーク関連

### Heliumネットワーク

:::caution note
**EU868**/**RU864**リージョンで運用しているユーザーの方へ：

アップロード間隔を4分未満に設定することは**推奨されません**。

アップロード間隔を4分未満に設定した場合、デバイスのアップリンクと現在時刻との間でタイムスタンプのずれが発生することがあります。
:::

**その理由は次のとおりです：**

EU868における[1%デューティサイクル](https://www.thethingsnetwork.org/docs/lorawan/duty-cycle/#maximum-duty-cycle)制約により、デバイスは各アップリンク送信のたびに約4分待機する必要があります。さらに、Heliumネットワークは、[ADR](https://docs.helium.com/console/profiles/#adr-algorithm)ビットが1に設定された連続20個のアップリンクパケットが蓄積された後にのみ、データレートと送信電力の補正を開始します。

そのため、設定したアップロード間隔が4分未満の場合、リアルタイムデータはいったんRAMに一時保存され、Heliumネットワークがデータレートと送信電力の補正をトリガーしてからアップロードされます。

### キーの取得方法

設定ページで、SenseCAP以外のプラットフォームを選択してキーを取得します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get-keys.png" alt="pir" width={700} height="auto" /></p>

## ボタン関連

### ネットワーク参加

ボタンを3秒間長押しすると、緑色のランプがゆっくり点滅します。その後ボタンを1回押すと、緑色のランプがブレス点灯になり、デバイスはLoRaWANネットワークへの参加を試行します。

### 強制再起動

ボタンを押し続けたまま充電ケーブルを接続し、接続後にボタンを離すと、緑色のランプがブレス点灯になり、その後デバイスが強制的に再起動します。

## バッテリー関連

### バッテリー寿命

バッテリー寿命は、アップリンク間隔、センサーの使用状況、LoRa送信距離、動作温度などの要因によって異なります。予測バッテリー寿命は、代表的な動作環境（25°C）に基づく参考値です。実際のバッテリー寿命は変動する場合があります。

#### EU868(1C/SF12)

|アップロード間隔|1分|5分|60分|1日|
|--|--|--|--|--|
|バッテリー寿命（日）|2.62|27.21|106.78|209.3|

#### US915(1C/SF9)

|アップロード間隔|1分|5分|60分|1日|
|--|--|--|--|--|
|バッテリー寿命（日）|3.02|37.52|117.32|210.7|

バッテリー寿命の詳細な計算については、[Battery Life Calculation Form](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx)を参照してください。

### 充電ステータス

|ステータス|インジケーター|
|----|----|
|充電中| LEDが3秒ごとに1回点滅します。|
|フル充電| LEDが常時点灯します。|
|充電異常|デバイスが0℃未満または45℃を超える状態で充電されている場合、デバイスは充電保護状態に入り、充電できなくなります。<br/>LEDが高速で点滅します。|

:::caution 充電異常アラーム
充電中にインジケーターが`高速で点滅`する場合、電源電圧が不足しているか、接触不良の可能性があります。

電源を確認するか、別の電源アダプターをお試しください。
:::

### フル充電までにどのくらい時間がかかりますか？

通常、フル充電までに約**2時間**かかります。

### 充電中もデータをアップロードし続けることはできますか？

はい、充電中もデータをアップロードし続けることができます。

## センサー関連

### センサーデータがない

省電力のため、温度/照度センサー機能はデフォルトで無効になっています。そのため、まずSenseCAP Mate APPで有効にする必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/enable-sensor.png" alt="pir" width={500} height="auto" /></p>

## キャッシュデータ

### 動作の仕組み

LoRaWAN信号が弱い場合やネットワークカバレッジがない場合、データはデバイス内に保存されます。デバイスがLoRaWANネットワークのカバレッジエリアに戻ると、まずリアルタイムデータを送信し、その後にキャッシュデータをアップロードします。

各アップロード周期ごとに、最新の位置情報を最初にアップロードし、その後にキャッシュデータをアップロードします。
各サイクルでアップロードされる履歴データのパケット数は少数のため、デューティサイクルには影響しません。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={700} height="auto" /></p>

### 注意

デバイスがキャッシュできるオフラインデータは約1,000件のみのため、LoRaWANネットワークのカバレッジがない場所に長期間いると、オフラインデータが上限に達した際に、古いデータが新しいデータによって上書きされ、一部のデータを「失う」可能性があります。

## 一括設定の方法

最初のデバイスのセットアップについては、[Quick Start](https://wiki.seeedstudio.com/ja/Get_Started_with_SenseCAP_T1000_tracker/#connect-to-sensecap-mate-app)を確認し、その後右上の`Template`モジュールをクリックします。

`Save as Template`をクリックし、テンプレートに名前を付けてから`Confirm`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/template-save.png" alt="pir" width={600} height="auto" /></p>

その後、他のデバイスを設定する際には、保存したテンプレートを直接選択できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/choose-template.png" alt="pir" width={600} height="auto" /></p>

テンプレートを他の人と共有したい場合は、`Copy Link to Share`または`Download Template`を選択できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/share-temp.png" alt="pir" width={600} height="auto" /></p>

他のユーザーは、共有されたURLをコピーするかテンプレートファイルをインポートすることで、あなたのテンプレートを使用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/import-temp.png" alt="pir" width={600} height="auto" /></p>

## DFUモードの終了方法

ファームウェアのアップグレードに失敗すると、デバイスがDFUモードに入る場合があります。SenseCraft app上でデバイス名`SENSECAP_GR_DFU_XXXX`が表示され、LEDが点滅し続けます。

- DFUモードでは、3分間操作がないと自動的に終了します。

- すぐに終了したい場合は、ボタンを3秒間長押しすると、デバイスが再起動して通常動作に戻ります。

デバイスが、1回押す、3秒間長押し、10秒間長押しのいずれを行ってもDFUモードを終了できない場合は、次の手順に従ってください。

**ステップ 1：SenseCraft APP でデバイスを接続する**

前述の手順に従って T1000 上の Bluetooth 設定ページにアクセスし、デバイスを接続すると、次のページが表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/t1000-dfu-mode.png" alt="pir" width={200} height="auto" /></p>

**ステップ 2：ファームウェアファイルをアップロードする**

`Upload Firmware File` をクリックし、ファームウェアを書き込むための bin ファイルを選択します。

最新のファームウェアファイルについては、**techsupport@seeed.io** までお問い合わせください。

## タイムスタンプエラー

ペイロード内のタイムスタンプが間違っている場合は、ファームウェアを最新バージョンにアップグレードしてください。

詳細については、[Firmware Upgrade and Release Note](https://wiki.seeedstudio.com/ja/fm_release_for_SenseCAP_T1000/) を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/time-error.png" alt="pir" width={400} height="auto" /></p>

## アプリケーションエラー

### SenseCraft App でデバイスのステータスやデータを確認できますか？

デバイスが SenseCAP Cloud に接続されている場合、オンライン状態、センサーデータ、測位情報などのデバイスのステータスやデータを、SenseCraft App 上で直接確認できます。

デバイスが別の LoRaWAN クラウドプラットフォームに接続されている場合、デバイス情報やデータは SenseCraft App には同期されません。この場合は、使用している LoRaWAN プラットフォーム上で、対応するデバイスステータスとアップリンクデータを確認する必要があります。

## インテグレーション

アプリケーションのインテグレーションは、ニーズや目的に応じてさまざまな方法で行うことができます。ここでは、一般的なインテグレーションオプションをいくつか紹介します：

- **SenseCAP API**：

Application Programming Interface（API）を使用することは、アプリケーション同士やサービスと通信させる一般的な方法です。デバイスを SenseCAP Cloud に接続し、その後 SenseCAP API を使用してデータを取得できます。

SenseCAP API は、ユーザーが IoT デバイスとデータを管理するためのものです。HTTP プロトコル、MQTT プロトコル、WebSocket プロトコルという 3 種類の API メソッドを組み合わせています。

詳細については、[SenseCAP API](https://wiki.seeedstudio.com/ja/Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction/) を確認してください。

- **LoRaWAN Network Server**：

[SenseCAP M2 Multi-Platform gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) を使用すれば、内蔵の LoRaWAN Network Server をそのままインテグレーションに利用できます。

詳細については、[LNS Configuration](https://wiki.seeedstudio.com/ja/SenseCAP_m2_LNS_config) を確認してください。

## T1000 で DevNonce をリセットする方法

DevNonce の問題は、デバイスが OTAA の join を繰り返し試行した場合に発生することがあります。

長期間にわたって join を繰り返し試行すると、DevNonce カウンタが上限に達し、デバイスが正常に join できなくなる可能性があります。

典型的なケースは次のとおりです：
- デバイスは長期間使用されていたが、ある日突然、デバイスの周波数プランがゲートウェイの周波数プランと一致しているにもかかわらず、ネットワークへの join に失敗する。 
- サーバー側でデバイスログを確認すると、DevNonce のオーバーフローエラーが繰り返し発生していることがわかる。

T1000 が DevNonce の問題により LoRaWAN ネットワークに join できない場合は、Seeed のテクニカルサポートチーム（techsupport@seeed.io）にお問い合わせください。DevNonce をクリアまたはリセットする専用ファームウェアを提供し、デバイスが再び正常に LoRaWAN ネットワークに join できるようにします。

