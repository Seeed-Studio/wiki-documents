---
description: SenseCAP_T2000_tracker の使用開始
title: クイックスタート
keywords:
  - SenseCAP_T2000_tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_QuickStart.webp
slug: /Get_Started_with_SenseCAP_T2000_tracker
sku: 100082900,100057727,100087298
last_update:
  date: 1/5/2026
  author: Janet
createdAt: '2025-12-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/Get_Started_with_SenseCAP_T2000_tracker/
---

# SenseCAP T2000 Tracker の使用開始

この章では、SenseCraft App を使用して SenseCAP T2000 Tracker を素早くセットアップする方法を説明します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_QuickStart.png" alt="pir" width={800} height="auto" /></p>

:::caution note
Helium、TTN、またはその他の LoRaWAN ネットワークなど、LoRaWAN ネットワークのカバレッジがあることを確認してください。LoRaWAN ネットワークがないと、デバイスはクラウドにデータを送信できません。トラッカーを使用する最も簡単な方法は、`SenseCAP LoRaWAN Gateway` と `SenseCraft app` を使用することです。
:::

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/krE6HBgWnRA?si=CRcLRApl1NZUHhqM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Hardware_Overview.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000AB_Tracker_Hardware.jpg" alt="pir" width={800} height="auto" /></p>
<div align="center">T2000-A/B 分解図</div>  
<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000C_Tracker_Hardware.jpg" alt="pir" width={800} height="auto" /></p>
<div align="center">ソーラーパネル付き T2000-C 分解図</div>  
<br />

### 動作環境

SenseCAP T2000 Tracker は、安定した性能とバッテリーの安全性を確保するため、特定の温度範囲内で確実に動作するよう設計されています。性能の低下やバッテリーの問題を避けるため、これらの温度範囲内でデバイスを使用し、充電してください。

| パラメータ | T2000-A / T2000-B | ソーラーパネル付き T2000-C|
|---------|------------------|--------|
| 動作温度 | -40 °C ~ 85 °C | -20 °C ~ 60 °C |
| 充電温度 | / | 0 °C ~ 45 °C |

## デバイス機能

### 動作モード

さまざまなシナリオに対応するため、SenseCAP T2000 トラッカーには複数の異なる動作モードがあり、ニーズに応じて選択できます。

| **動作モード** | **説明** | **シーン** |
| - | - | - |
| スタンバイモード | <ul><li>ハートビートパケットのみがアップロードされ、バッテリー情報のみが含まれます。</li><li>位置情報は LoRa ダウンリンクコマンドを使用して取得できます。</li></ul> | 長時間デバイスの位置を特定する必要があり、デバイスが充電前に長時間動作できる場合、クラウドプラットフォームが位置要求コマンドを発行してデバイスを特定できます。 |
| 定期モード | デバイスが定期的に位置情報、3軸加速度計データ、バッテリー情報をアップロードする間隔を設定します。 | ほとんどのシナリオに推奨<ul><li>資産追跡</li><li>家畜監視</li></ul> |
| イベントモード | 3軸加速度計センサーに基づいてアップロード間隔を調整し、動作イベント、静止タイムアウト、衝撃イベントが含まれます。イベントがトリガーされるたびに、デバイスは位置情報、3軸加速度計データ、バッテリー情報をアップロードします。 | 追跡対象の動作状態を監視する必要がある場合に推奨されます。 |

### センサー機能

SenseCAP T2000 Tracker には 3軸加速度計が搭載されています。

- SenseCraft App でセンサーを有効または無効にすることができます（デフォルトでは無効）。
- アプリケーションのニーズに基づいて 3軸加速度計の対応する閾値を設定でき、動作/静止イベントと衝撃イベントがトリガーされます。

### データキャッシュ

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_DataCache2.png" alt="pir" width={800} height="auto" /></p>

デバイスはデータをキャッシュでき、`Location Data Cache` を開くことで Bluetooth 設定を通じて有効にできます。デバイスは確認パケットをアップロードします。LoRaWAN 信号カバレッジが弱い場合やネットワークカバレッジがない場合、デバイスはデータをアップロードする際に ACK を受信できません。この場合、データは保存され、次のサイクルに入ります。デバイスがある時点でデータのアップロードに成功すると、オフラインデータを送信します。

デバイスは最初にリアルタイム位置データをアップロードします。プラットフォームがそのアップリンクに対して ACK を返すと、トラッカーは新しいデータを上書きしないよう、最も古いエントリから開始してローカルに保存されたキャッシュデータのアップロードを開始します。

キャッシュアップリンク間隔は 40秒に設定されています。新しいリアルタイム位置アップリンクがトリガーされるか、プロセス中にプラットフォームが ACK を返さなくなるまで、キャッシュデータはこの間隔で継続的に送信されます。

キャッシュできるデータの最大数は 1000 レコードです。

`Clear Cache` ボタンをクリックすると、すべてのキャッシュデータがクリアされます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_DataCache.png" alt="pir" width={800} height="auto" /></p>

### ボタン機能

#### 磁気アタッチメント操作説明

| **ステータス**        | **操作** |
|-------------------|--------------|
| 電源オン          | 磁石をセンサーエリアに近づけて素早く4回タップします。緑色のライトが点灯すると電源オンが成功です。 |
| 電源オフ         | 磁石をセンサーエリアに近づけて素早く4回タップします。緑色のライトが点灯すると電源オフが成功です。 |
| Bluetooth オン      | 磁石をセンサーエリアに近づけて素早く2回タップします。青色のライトが点滅すると Bluetooth スキャンが有効になります。 |
| Bluetooth オフ     | 磁石をセンサーエリアに近づけて素早く2回タップします。 |

#### LED ステータスインジケータ

| ステータス              | LED 色 | インジケータパターン        |
|---------------------|-----------|--------------------------|
| 電源オン            | 緑     | 1秒間点灯         |
| 電源オフ           | 緑     | 1秒間点灯         |
| ネットワーク参加中     | 緑     | 呼吸ライト          |
| 参加成功        | 緑     | 高速点滅5回       |
| 参加失敗           | 赤       | 高速点滅5回       |
| Bluetooth 検索    | 青      | 連続ゆっくり点滅    |
| Bluetooth 接続済み | 青      | 点灯                |
| タンパーアラーム        | 赤       | 連続高速点滅    |
| ファームウェア更新中   | 緑     | 連続ゆっくり点滅    |
| DFU モード開始      | 緑     | 点灯                |

<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_PowerOn.gif" alt="pir" width={400} height="auto" /></p>
<div align="center">電源オン/オフ</div>  
<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_GreenBreathingLight.gif" alt="pir" width={400} height="auto" /></p>
<div align="center">電源オン後の緑色呼吸ライト</div>
<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Bluetooth.gif" alt="pir" width={400} height="auto" /></p>
<div align="center">Bluetooth モード開始/終了</div>  

<br />

:::info Note

- 使用しない場合は、デバイスの電源を切ることをお勧めします。
- 初回電源投入時は、GPS が衛星経由で時刻を更新する必要があるため、屋外でテストすることをお勧めします。
- 周波数帯域がゲートウェイの周波数と一致していることを確認してください。
:::

## 使用開始

### SenseCraft App への接続

- **ステップ 1**: SenseCraft App をダウンロード

SenseCraft App は LoRa パラメータ、間隔の設定、デバイスのアカウントへのバインド、デバイスの基本情報確認に使用されます。

- iOS の場合、App Store で "SenseCraft" を検索してダウンロードしてください。
- Android の場合、Google Store で "SenseCraft" を検索してダウンロードしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/App_Download.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2**: デバイスを追加

SenseCraft APP にログインします。
右上の '+' タブをクリックし、デバイスラベルの QR コードをスキャンします。
'Add to account' をクリックすると、デバイスを 'Configure' できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_AddDevice.png" alt="pir" width={800} height="auto" /></p>

磁石をセンサーエリアに近づけて素早く4回タップして電源を入れると、トラッカーは自動的に Bluetooth ペアリングモードに入ります（トラッカーの電源が既に入っている場合は、素早く2回タップして手動で Bluetooth ペアリングモードに入ります）。SN でデバイスを選択します。

2つの設定モードがあります：

- **クイック設定**: クイックスタートの場合、基本パラメータをクイック設定できます
- **詳細設定**: より多くのパラメータを設定するには、以下の手順を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_ConfigurationMode.png" alt="pir" width={800} height="auto" /></p>

### クイック設定

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/qne730YZtSo?si=jLYLlO8r6SgnYIEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br />

クイック設定では、以下のパラメータのみを設定する必要があります：

- **周波数**: ゲートウェイと同じである必要があります。
- **アップリンク間隔**: 定期モード（デフォルトモード）のアップリンク間隔。"User" ページの "Device Bluetooth Configuration" で他のモードを設定できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_QuickConfiguration.png" alt="pir" width={800} height="auto" /></p>

トラッカーは Bluetooth ペアリングモードを終了後、LoRaWAN ネットワークへの参加を試行します。ネットワークへの参加を試行中は緑色の呼吸ライトが点滅し、ネットワークへの参加が成功すると 5 回素早く点滅します。

### 高度な設定

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ROjXT6D8xtA?si=roC5PW9Cce4Jp1Kl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br />

- アプリを開き、`User` ページで `Device Bluetooth Configuration` をクリックします。次に `SenseCAP Asset Tracker T2000` を選択して `Setup` に入り、トラッカーを設定します。
- 上記の手順に従って Bluetooth ペアリングモードに入ります。
- S/N でデバイスを選択し（S/N はデバイスのラベルに記載されています）、`Advanced Configuration` を選択します。入力後、トラッカーの基本情報が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_AdvancedConfiguration.png" alt="pir" width={800} height="auto" /></p>

設定ページは全部で 4 つあります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_ConfigurationPage.png" alt="pir" width={800} height="auto" /></p>

`Information` - `Basic` ページで `Measure` をクリックすると、センサー値を取得できます：

1. **3 軸加速度計（X / Y / Z 値）**

- デバイスは X、Y、Z 軸に沿った加速度値を報告します。これらの読み取り値は、動作中や設置中のデバイスの姿勢、動き、振動状態をユーザーが理解するのに役立ちます。

2. **タンパーボタンステータス**
- 押下：デバイスが確実に設置されています
- 非押下：デバイスが完全に取り付けられていないか、取り外されています

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Measure.png" alt="pir" width={800} height="auto" /></p>

<br />

#### LoRa パラメータ設定

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000C_Tracker_Platform.png" alt="pir" width={800} height="auto" /></p>

**プラットフォーム**

<table align="center">
  <tbody>
    <tr>
    <td><h4>プラットフォーム</h4></td>
    <td><h4>説明</h4></td>
    </tr>
    <tr>
      <td>SenseCAP for The Things Network</td>
    <td>デフォルトプラットフォーム。
SenseCAP Gateway と組み合わせて使用する必要があります。SenseCAP は独自の TTN サーバーを構築し、SenseCAP ゲートウェイとペアリングした際にセンサーをすぐに使用できるようにします。<br />
    <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCAP Outdoor Gateway</span></a><br />
    <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCAP Indoor Gateway</span></a></td>
    </tr>
        <tr>
    <td>SenseCAP for Helium</td>
    <td>Helium ネットワークのカバレッジがある場合、Helium 経由でデータをアップロードできます。デバイスは SenseCAP のプライベート Helium コンソールで動作します。ユーザーは Helium コンソールでデバイスを作成する必要がなく、SenseCraft App と Portal ですぐに使用できます。<br /><a href="https://explorer.helium.com/" target="_blank"><span>Helium Coverage</span></a></td>
    </tr>
        <tr>
    <td>Helium</td>
    <td>デバイスをパブリック [Helium console](https://console.helium.com) に接続</td>
    </tr>
            <tr>
    <td>The Things Network</td>
    <td>デバイスを [TTN(TTS) server](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3) に接続</td>
    </tr>
            <tr>
    <td>Other Platform</td>
    <td>その他の LoRaWAN ネットワークサーバー</td>
    </tr>
  </tbody>
</table>

**周波数プラン**

トラッカーは 863MHz～928MHz のユニバーサル周波数プランをサポートするように製造されています。各デバイスは EU868、US915、AU915、AS923-1-TTN、AS923-2-TTN、IN865、KR920、RU864 を含む 8 つの周波数プランをサポートできます。

<table align="center">
  <tbody>
    <tr>
    <td><h4>パラメータ</h4></td>
    <td><h4>説明</h4></td>
    <td><h4></h4></td>
    </tr>
    <tr>
    <td>周波数プラン</td>
    <td>EU868 / US915 / AU915 / KR920 / IN865 / AS923-1 / AS923-2 / RU864</td>
    <td>デフォルト EU868</td>
    </tr>
        <tr>
    <td>パケットポリシー</td>
    <td>1C</td>
    <td>LoRaWAN 確認パケットを使用</td>
    </tr>
            <tr>
    <td>LoRaWAN ADR</td>
    <td>デフォルトで有効</td>
    <td>LoRaWAN パラメータ、デフォルトで有効にすることを推奨</td>
    </tr>
            <tr>
    <td>LoRa 設定の復元</td>
    <td>"Platform" が他のプラットフォームから SenseCAP に戻る場合、LoRa パラメータ（EUI/App EUI/ App Key など）を復元する必要があります</td>
    <td>LoRa パラメータを工場出荷時のデフォルトに復元する必要がある場合に、この機能を使用できます</td>
    </tr>
  </tbody>
</table>

:::info 注意
国や LoRaWAN ネットワークサーバーによって異なる周波数プランが使用されます。<br />
Helium ネットワークについては、[Helium-frequency-plans](https://docs.helium.com/lorawan-on-helium/frequency-plans) を参照してください<br />
The Things Network については、[TTN-frequency-plans](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/) を参照してください
お住まいの地域でどの周波数帯が必要かわからない場合は、技術サポートチームにお問い合わせいただくか、詳細な地域周波数情報について [RP002-1.0.0 LoRaWAN® Regional Parameters](https://lora-alliance.org/wp-content/uploads/2019/11/rp_2-1.0.0_final_release.pdf) を参照してください。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_FrequencyPlan.jpg" alt="pir" width={400} height="auto" /></p>

**アクティベーションタイプ**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_LoRaSetup.png" alt="pir" width={800} height="auto" /></p>

センサーは 2 つのネットワークアクセスモードをサポートし、デフォルトで OTAA です。

|**パラメータ**|**説明**|
| - | - |
|OTAA（デフォルト）|Over The Air Activation、Device EUI、App EUI、App Key を通じてネットワークに参加します。|
|ABP|Activation By Personalization、DevAddr、NwkSkey、AppSkey を通じてネットワークに参加します。|

デバイスはデフォルトで OTAA を使用して LoRaWAN ネットワークに参加します。そのため、Device EUI、App EUI、App Key を設定できます。

|**パラメータ**|**タイプ**|
| - | - |
|Device EUI|<a name="ole_link10"></a>16、0 ～ F の 16 進数|
|App EUI|16、0 ～ F の 16 進数|
|App Key|32、0 ～ F の 16 進数|

:::info 注意
SenseCAP プラットフォームを使用する場合、EUI、APP EUI、APP Key は固定されており、センサーラベルと同じです。<br />
センサーが Helium や TTN などのパブリックプラットフォームで使用するように選択された場合、EUI は変更されず、センサーはネットワークアクセス用の新しい固定 App EUI と App Key を生成します。<br />
EUI 情報を一括で取得するには、営業チームにお問い合わせください。
:::

<br />

#### 動作モード設定

ニーズに応じて動作モードを設定してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_WorkMode.png" alt="pir" width={800} height="auto" /></p>

<table>
<tr><th colspan="1"><b>パラメータ</b></th><th colspan="1"><b>説明</b></th><th colspan="1"><b>デフォルト / 注意</b></th></tr> <tr><td colspan="1">ハートビート間隔</td><td colspan="1">ハートビート間隔内にデバイスからデータがアップロードされない場合、ハートビートパケットがトリガーされます。このパケットにはバッテリー情報のみが含まれます。</td><td colspan="1">デフォルト 720 分。</td></tr> <tr><td colspan="1">3 軸センサーを有効にする</td><td colspan="1">このスイッチがオンになっている場合、3 軸センサーが収集・アップロードされますが、消費電力が増加します。</td><td colspan="1">デフォルトでオフ。</td></tr> <tr><td colspan="1">分解アラームを有効にする</td><td colspan="1">このスイッチがオンになっている場合、設置後にデバイスが取り外されるとアラームが作動します。</td><td colspan="1">デフォルトで有効。</td></tr> <tr><td colspan="1">分解アラーム継続時間（分）</td><td colspan="1">このパラメータは、分解アラームがトリガーされた後、デバイスが報告を続ける時間を指定し、アラームイベントと共にリアルタイム位置パケットを毎分送信します。</td><td colspan="1">この設定は分解アラームを有効にするがオンの場合のみ表示されます。デフォルト 3 分。</td></tr> <tr><td colspan="1" rowspan="3">動作モード</td><td colspan="1"><b>スタンバイモード</b></td><td colspan="1">ハートビート間隔に基づいてハートビートパケット（バッテリーレベルのみ）をアップロードします。</td></tr> <tr><td colspan="1"><b>定期モード</b></td><td colspan="1">アップリンク間隔に従って位置とセンサーデータをアップロードします。</td></tr> <tr><td colspan="1"><b>イベントモード</b></td><td colspan="1">動きや衝撃などの測定値に基づいてしきい値トリガー条件を設定し、イベントがトリガーされない場合のアップリンク間隔を調整します。</td></tr> <tr><td colspan="1">アップリンク間隔（分）</td> <td colspan="1"><b>定期モード</b></td> <td colspan="1">定期的に位置を特定してデータをアップロードします。デフォルト 60 分。頻度が高いほど消費電力が増加します。</td></tr> <tr><td colspan="1">すべての設定を復元</td><td colspan="2">LoRa、動作モード、位置情報を含むすべての設定パラメータを工場出荷時設定に復元します。</td></tr>
</table>

<br />

イベントモードには 3 つのイベントがあります：

<table>
<tr><th><b>イベントモード</b></th><th colspan="2"><b>説明</b></th></tr>
<tr><td>アップリンク間隔 – 非イベント時（分）</td><td>イベントがトリガーされていない時のアップロード間隔です。</td><td><p>デフォルト60分。</p><p>範囲：1~10080分。</p></td></tr>
<tr><td rowspan="2">衝撃イベント</td><td>衝撃イベントが有効になっている場合、トラッカーの衝撃により、衝撃イベント、位置、センサーデータを含むデータレポートがトリガーされます。</td><td>デフォルトでオフ。</td></tr>
<tr><td>3軸モーション閾値（mg）</td><td>デフォルトは300。加速度が300mgを超えると、衝撃イベントがトリガーされます。</td></tr>
<tr><td rowspan="3">モーションイベント</td><td>加速度が設定値を超えると、デバイスが動き始め、2分間動きがない場合、デバイスの動きが停止します。動き開始と動き停止に応じてアップロード間隔を設定します。</td><td>デフォルトでオフ。</td></tr>
<tr><td>3軸モーション閾値（mg）</td><td>デフォルトは30。加速度が30mgを超えると、デバイスが動いていると判定し、この値を2分間下回ると、デバイスが静止していると判定します。</td></tr>
<tr><td>モーション時のアップリンク間隔（分）</td><td>デバイスが動いている時の現在の状態のアップロード間隔を設定します。</td></tr>
<tr><td rowspan="2">静止イベント</td><td colspan="2">デバイスが一定時間以上ある場所で静止している場合、静止タイムアウトイベントがトリガーされます。</td></tr>
<tr><td>静止タイムアウト（分）</td><td>デフォルトは360分。</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_EventMode.png" alt="pir" width={800} height="auto" /></p>

<br />

#### 位置情報モード設定

トラッカーはGNSS、Wi-Fi（T2000-Bのみサポート）、Bluetoothによる測位をサポートしています。

- **GNSS**：GPSなどの衛星測位により経度と緯度を直接取得し、LoRa経由でデータをアップロードします。
- **Wi-Fi**：パッシブスキャンで、スキャンした5つのMACアドレスをLoRa経由でアップロードします。
- **BLE**：スキャンしたBeaconの5つのMACアドレスをLoRa経由でアップロードします。

<table>
<tr><th><b>位置情報戦略</b></th><th colspan="2"><b>説明</b></th></tr>
<tr><td rowspan="9"><b>位置情報戦略</b></td><td>GNSS のみ</td><td>デフォルトでGNSSを使用。位置情報にはGNSSのみを使用します。</td></tr>
<tr><td>Wi-Fi のみ</td><td>位置情報にはWi-Fiスキャンのみを使用します。</td></tr>
<tr><td>Bluetooth のみ</td><td>位置情報にはBluetoothスキャンのみを使用します。</td></tr>
<tr><td>GNSS + Wi-Fi</td><td>Wi-Fiより先にGNSSを使用。GNSSが失敗した場合、1つの位置情報サイクルでWi-Fiを使用します。</td></tr>
<tr><td>GNSS + Bluetooth</td><td>Bluetoothより先にGNSSを使用。GNSSが失敗した場合、1つの位置情報サイクルでBluetoothを使用します。</td></tr>
<tr><td>Wi-Fi + GNSS</td><td>GNSSより先にWi-Fiを使用。Wi-Fiが失敗した場合、1つの位置情報サイクルでGNSSを使用します。</td></tr>
<tr><td>Bluetooth + GNSS</td><td>GNSSより先にBluetoothを使用。Bluetoothが失敗した場合、1つの位置情報サイクルでGNSSを使用します。</td></tr>
<tr><td>Bluetooth + Wi-Fi</td><td>Wi-Fiより先にBluetoothを使用。Bluetoothが失敗した場合、1つの位置情報サイクルでWi-Fiを使用します。</td></tr>
<tr><td>Bluetooth + Wi-Fi + GNSS</td><td>Bluetooth、Wi-Fi、GNSSを順番に測位に使用します（1つの測位タイプが失敗した後、次のタイプの測位に切り替えます）。</td></tr>
<tr><td><b>GNSS最大スキャン時間（秒）</b></td><td>GNSSが粗い位置修正を取得するまで待機する最大時間。</td><td><p>デフォルトは60秒。</p><p>変更は推奨されません。時間が長いほど、消費電力が大きくなります。</p></td></tr>
<tr><td><b>iBeaconスキャンタイムアウト（秒）</b></td><td>Bluetooth測位において、デバイスが周囲のBluetoothビーコンをスキャンして粗い位置修正を取得する最大時間。</td><td><p>デフォルトは3秒。</p><p>範囲1~10秒。</p></td></tr>
<tr><td><b>グループUUID（16進）</b></td><td>トラッカーが指定されたパターンに一致するUUIDを持つBluetoothビーコンのみをスキャンして報告できるようにし、無関係なビーコンをフィルタリングするのに役立ちます。</td><td><p>UUIDフィルターを設定、最大16バイト。例えば、'01 02 03 04'として設定すると、'01 02 03 04 xx xx ...'のパターンを持つビーコンをフィルタリングします</p></td></tr>
<tr><td><b>位置データキャッシュ</b></td><td>LoRa経由でデータをアップロードできない場合、データはローカルに保存され（最大1000レコード）、LoRaカバレッジが回復した時にアップロードされます。</td><td><p>デフォルトでオフ。</p></td></tr>
<tr><td><b>キャッシュクリア</b></td><td colspan="2">すべての履歴キャッシュデータをクリアします。</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_ScanTime.png" alt="pir" width={800} height="auto" /></p>

すべてのパラメータが設定されたら、"Send"をクリックします。
変更が必要なパラメータがない場合は、Bluetooth設定を終了し、ホームページに戻ります。
この時点で、デバイスはLoRaネットワークアクセス要求を開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_SendButton.png" alt="pir" width={400} height="auto" /></p>

### デバイスデータ表示

#### SenseCraft アプリ

アプリで位置を確認します。
デバイスをバインドした後、デバイスページに入り、右上角のボタンをクリックしてデバイスの履歴位置データを表示します。
フィルターをクリックして、'All/GNSS/BLE/Wi-Fi'などの測位モードでの位置データの表示を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_DataView.png" alt="pir" width={800} height="auto" /></p>

`History`をクリックすると、選択した日付のすべての履歴測位データを表示できます。
右上角の測位アイコンをクリックして、すべての`Positioning Abnormal`レコードを表示します。GNSS、Wi-Fi、またはBluetoothスキャンがタイムアウトした場合、関連するイベントがこのページに表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000C_Tracker_DataView2.png" alt="pir" width={800} height="auto" /></p>

デバイスが分解アラームをトリガーした場合、トリガー期間中の各データパケットの横に赤いアラームアイコンが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Alarm1.png" alt="pir" width={800} height="auto" /></p>

分解アラームがトリガーされると、アラーム通知メッセージが携帯電話に送信されます。また、分解アラームは通知ウィンドウと共にアプリの`Device`ページと`Details`ページの両方に表示され、ユーザーがデバイスの状態を迅速に確認するのに役立ちます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Alarm_Message.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Alarm2.png" alt="pir" width={800} height="auto" /></p>

#### SenseCAP Portal

[SenseCAP Portal](https://sensecap.seeed.cc/portal/#/dashboard)の主な機能は、SenseCAPデバイスを管理し、データを保存することです。これはMicrosoftの安全で信頼性の高いクラウドサービスであるAzure上に構築されています。ユーザーはアカウントを申請し、すべてのデバイスをこのアカウントにバインドできます。SenseCAP Portalはウェブポータルとアプリを提供します。ウェブポータルには、ダッシュボード、デバイス管理、データ管理、アクセスキー管理が含まれます。APIはさらなる開発のためにユーザーに開放されています。

- **ダッシュボード：** デバイス概要、お知らせ、シーンデータ、データチャートなどを含みます。
- **デバイス管理：** SenseCAPデバイスを管理します。
- **データ管理：** データテーブルとグラフセクションを含むデータを管理し、データを検索する方法を提供します。
- **サブアカウントシステム：** 異なる権限を持つサブアカウントを登録します。
- **アクセスキー管理：** アクセスキー（APIサービスにアクセスするため）を管理し、キー作成、キー更新、キー確認を含みます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### デバイスデータ表示

[SenseCAP Portal](http://sensecap.seeed.cc)にログインします

アプリを通じてアカウントを作成している場合は、直接ログインできます。

1) アカウント登録を選択し、メール情報を入力して"register"をクリックすると、登録メールがユーザーのメールボックスに送信されます

2) "SenseCAP…"メールを開き、ジャンプリンクをクリックし、関連情報を入力して登録を完了します

3) ログインインターフェースに戻り、ログインを完了します

詳細については、[SenseCAP Portal ユーザーガイド](https://sensecap-docs.seeed.cc/quickstart.html)を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## SenseCAP API

SenseCAP APIは、ユーザーがIoTデバイスとデータを管理するためのものです。HTTPプロトコル、MQTTプロトコル、WebsocketプロトコルのAPIメソッドが含まれています。

- HTTP APIを使用すると、ユーザーはLoRaデバイスを管理し、生データや履歴データを取得できます。
- MQTT APIを使用すると、ユーザーはMQTTプロトコルを通じてセンサーのリアルタイム測定データを購読できます。
- Websocket APIを使用すると、ユーザーはWebsocketプロトコルを通じてセンサーのリアルタイム測定データを取得できます。

詳細については、[API ユーザーガイド](https://sensecap-docs.seeed.cc/)を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
