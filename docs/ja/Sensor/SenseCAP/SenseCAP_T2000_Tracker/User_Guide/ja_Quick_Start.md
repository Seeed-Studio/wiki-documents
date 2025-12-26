---
description: SenseCAP T2000 トラッカーの使用開始
title: クイックスタート
keywords:
- SenseCAP_T2000_tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_QuickStart.webp
slug: /ja/Get_Started_with_SenseCAP_T2000_tracker
last_update:
  date: 12/23/2025
  author: Janet
---

# SenseCAP T2000 トラッカーの使用開始

この章では、SenseCraft アプリを使用して SenseCAP T2000 トラッカーを素早くセットアップする方法を説明します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_QuickStart.png" alt="pir" width={800} height="auto" /></p>

:::caution note
Helium、TTN、またはその他の LoRaWAN ネットワークなど、LoRaWAN ネットワークのカバレッジがあることを確認してください。LoRaWAN ネットワークがないと、デバイスはクラウドにデータを送信できません。トラッカーを使用する最も簡単な方法は、`SenseCAP LoRaWAN Gateway` と `SenseCraft app` を使用することです。
:::

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Hardware_Overview.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000AB_Tracker_Hardware.jpg" alt="pir" width={800} height="auto" /></p>
<div align="center">T2000-A/B 分解図</div>  
<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000C_Tracker_Hardware.jpg" alt="pir" width={800} height="auto" /></p>
<div align="center">ソーラーパネル付き T2000-C 分解図</div>  
<br />

## デバイス機能

### 動作モード

さまざまなシナリオに適用するため、SenseCAP T2000 トラッカーには複数の異なる動作モードがあり、ニーズに応じて選択できます。

| **動作モード** | **説明** | **シーン** |
| - | - | - |
| スタンバイモード | <ul><li>ハートビートパケットのみがアップロードされ、バッテリー情報のみが含まれます。</li><li>位置情報は LoRa ダウンリンクコマンドを使用して取得できます。</li></ul> | デバイスを長時間位置特定する必要があり、充電前にデバイスが長時間動作できる場合、クラウドプラットフォームが位置要求コマンドを発行してデバイスを位置特定できます。 |
| 定期モード | デバイスが定期的に位置情報、3軸加速度計データ、バッテリー情報をアップロードする間隔を設定します。 | ほとんどのシナリオに推奨<ul><li>資産追跡</li><li>家畜監視</li></ul> |
| イベントモード | 3軸加速度計センサーに基づいてアップロード間隔を調整し、動作イベント、静止タイムアウト、衝撃イベントが含まれます。イベントがトリガーされるたびに、デバイスは位置情報、3軸加速度計データ、バッテリー情報をアップロードします。 | 追跡対象の移動状態を監視する必要がある場合に推奨されます。 |

### センサー機能

SenseCAP T2000 トラッカーには 3軸加速度計が搭載されています。

- SenseCraft アプリでセンサーを有効または無効にすることができます（デフォルトでは無効）。
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

#### LED ステータスインジケーター

| ステータス              | LED 色 | インジケーターパターン        |
|---------------------|-----------|--------------------------|
| 電源オン            | 緑     | 1秒間点灯         |
| 電源オフ           | 緑     | 1秒間点灯         |
| ネットワーク参加中     | 緑     | 呼吸ライト          |
| 参加成功        | 緑     | 5回高速点滅       |
| 参加失敗           | 赤       | 5回高速点滅       |
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

- 使用しない場合はデバイスの電源を切ることをお勧めします。
- 初回電源投入時は、GPS が衛星経由で時刻を更新する必要があるため、屋外でテストすることをお勧めします。
- 周波数帯域がゲートウェイの周波数と一致していることを確認してください。
:::

## 使用開始

### SenseCraft アプリへの接続

- **ステップ 1**: SenseCraft アプリのダウンロード

SenseCraft アプリは LoRa パラメーター、間隔の設定、デバイスのアカウントへのバインド、デバイスの基本情報確認に使用されます。

- iOS の場合、App Store で「SenseCraft」を検索してダウンロードしてください。
- Android の場合、Google Store で「SenseCraft」を検索してダウンロードしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/App_Download.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2**: デバイスの追加

SenseCraft アプリにログインします。
右上の「+」タブをクリックし、デバイスラベルの QR コードをスキャンします。
「Add to account」をクリックすると、デバイスを「Configure」できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_AddDevice.png" alt="pir" width={800} height="auto" /></p>

磁石をセンサーエリアに近づけて素早く4回タップして電源を入れると、トラッカーは自動的に Bluetooth ペアリングモードに入ります（トラッカーの電源が既に入っている場合は、素早く2回タップして手動で Bluetooth ペアリングモードに入ります）。SN でデバイスを選択します。

2つの設定モードがあります：

- **クイック設定**: クイックスタートの場合、基本パラメーターをクイック設定できます
- **詳細設定**: より多くのパラメーターを設定するには、以下の手順を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_ConfigurationMode.png" alt="pir" width={800} height="auto" /></p>

### クイック設定

クイック設定では、以下のパラメーターのみを設定する必要があります：

- **周波数**: ゲートウェイと同じである必要があります。
- **アップリンク間隔**: 定期モード（デフォルトモード）のアップリンク間隔。「User」ページの「Device Bluetooth Configuration」で他のモードを設定できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_QuickConfiguration.png" alt="pir" width={800} height="auto" /></p>

トラッカーは Bluetooth ペアリングモードを終了後、LoRaWAN ネットワークへの参加を試行します。ネットワークへの参加を試行中は緑色の呼吸ライトが点滅し、ネットワークへの参加が成功すると5回素早く点滅します。

### 詳細設定

- アプリを開き、`User` ページの `Device Bluetooth Configuration` をクリックします。次に `SenseCAP Asset Tracker T2000` を選択して `Setup` に入り、トラッカーを設定します。
- 上記の手順に従って Bluetooth ペアリングモードに入ります。
- S/N でデバイスを選択し（S/N はデバイスのラベルに記載）、`Advanced Configuration` を選択します。入力後、トラッカーの基本情報が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_AdvancedConfiguration.png" alt="pir" width={800} height="auto" /></p>

合計4つの設定ページがあります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_ConfigurationPage.png" alt="pir" width={800} height="auto" /></p>

`Information` - `Basic` ページの `Measure` をクリックすると、センサー値が取得できます：

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
SenseCAP ゲートウェイと組み合わせて使用する必要があります。SenseCAP は独自の TTN サーバーを構築し、SenseCAP ゲートウェイとペアリングした際にセンサーをすぐに使用できるようにします。<br />
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
    <td>Frequency Plan</td>
    <td>EU868 / US915 / AU915 / KR920 / IN865 / AS923-1 / AS923-2 / RU864</td>
    <td>デフォルト EU868</td>
    </tr>
        <tr>
    <td>Packet Policy</td>
    <td>1C</td>
    <td>LoRaWAN 確認パケットを使用</td>
    </tr>
            <tr>
    <td>LoRaWAN ADR</td>
    <td>デフォルトで有効</td>
    <td>LoRaWAN パラメータ、デフォルトで有効にすることを推奨</td>
    </tr>
            <tr>
    <td>Restore LoRa Configuration</td>
    <td>"Platform" が他のプラットフォームから SenseCAP に戻る際、LoRa パラメータ（EUI/App EUI/ App Key など）を復元する必要があります</td>
    <td>LoRa パラメータを工場出荷時設定に復元する必要がある場合にこの機能を使用できます</td>
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

センサーは 2 つのネットワークアクセスモードをサポートし、デフォルトで OTAA を使用します。

|**パラメータ**|**説明**|
| - | - |
|OTAA (デフォルト)|Over The Air Activation、Device EUI、App EUI、App Key を通じてネットワークに参加します。|
|ABP|Activation By Personalization、DevAddr、NwkSkey、AppSkey を通じてネットワークに参加します。|

デバイスはデフォルトで OTAA を使用して LoRaWAN ネットワークに参加します。そのため、Device EUI、App EUI、App Key を設定できます。

|**パラメータ**|**タイプ**|
| - | - |
|Device EUI|<a name="ole_link10"></a>16 桁、0 ～ F の 16 進数|
|App EUI|16 桁、0 ～ F の 16 進数|
|App Key|32 桁、0 ～ F の 16 進数|

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
<tr><th colspan="1"><b>パラメータ</b></th><th colspan="1"><b>説明</b></th><th colspan="1"><b>デフォルト / 注意</b></th></tr> <tr><td colspan="1">Heartbeat Interval</td><td colspan="1">ハートビート間隔内にデバイスからデータがアップロードされない場合、ハートビートパケットがトリガーされます。このパケットにはバッテリー情報のみが含まれます。</td><td colspan="1">デフォルト 720 分。</td></tr> <tr><td colspan="1">Enable 3-axis Sensor</td><td colspan="1">このスイッチがオンの場合、3 軸センサーが収集・アップロードされますが、消費電力が増加します。</td><td colspan="1">デフォルトでオフ。</td></tr> <tr><td colspan="1">Enable Disassembly Alarm</td><td colspan="1">このスイッチがオンの場合、設置後にデバイスが取り外されるとアラームが作動します。</td><td colspan="1">デフォルトで有効。</td></tr> <tr><td colspan="1">Disassembly Alarm Duration(min)</td><td colspan="1">このパラメータは、分解アラームがトリガーされた後、デバイスが報告を続ける時間を指定し、アラームイベントと共にリアルタイム位置パケットを毎分送信します。</td><td colspan="1">この設定は Enable Disassembly Alarm がオンの場合のみ表示されます。デフォルト 3 分。</td></tr> <tr><td colspan="1" rowspan="3">Work Mode</td><td colspan="1"><b>Standby Mode</b></td><td colspan="1">ハートビート間隔に基づいてハートビートパケット（バッテリーレベルのみ）をアップロードします。</td></tr> <tr><td colspan="1"><b>Periodic Mode</b></td><td colspan="1">アップリンク間隔に従って位置とセンサーデータをアップロードします。</td></tr> <tr><td colspan="1"><b>Event Mode</b></td><td colspan="1">動きや衝撃などの測定値に基づいて閾値トリガー条件を設定し、イベントがトリガーされない場合のアップリンク間隔を調整します。</td></tr> <tr><td colspan="1">Uplink Interval (min)</td> <td colspan="1"><b>Periodic Mode</b></td> <td colspan="1">定期的に位置を特定してデータをアップロードします。デフォルト 60 分。頻度が高いほど消費電力が増加します。</td></tr> <tr><td colspan="1">Restore All Settings</td><td colspan="2">LoRa、Work Mode、Geolocation を含むすべての設定パラメータを工場出荷時設定に復元します。</td></tr>
</table>

<br />

Event Mode には 3 つのイベントがあります：

<table>
<tr><th><b>Event Mode</b></th><th colspan="2"><b>説明</b></th></tr>
<tr><td>Uplink Interval – Non-event (min)</td><td>イベントがトリガーされない場合のアップロード間隔です。</td><td><p>デフォルト 60 分。</p><p>範囲：1～10080 分。</p></td></tr>
<tr><td rowspan="2">Shock Event</td><td>衝撃イベントが有効な場合、トラッカーの衝撃により衝撃イベント、位置、センサーデータを含むデータレポートがトリガーされます。</td><td>デフォルトでオフ。</td></tr>
<tr><td>3-Axis Motion Threshold (mg)</td><td>デフォルトは 300。加速度が 300mg を超えると、衝撃イベントがトリガーされます。</td></tr>
<tr><td rowspan="3">Motion Event</td><td>加速度が設定値を超えるとデバイスが動き始め、2 分間動きがないとデバイスの動きが停止します。動き開始と動き停止に応じてアップロード間隔を設定します。</td><td>デフォルトでオフ。</td></tr>
<tr><td>3-Axis Motion Threshold (mg)</td><td>デフォルトは 30。加速度が 30mg を超えるとデバイスが動いていると判定し、この値を 2 分間下回るとデバイスが静止していると判定します。</td></tr>
<tr><td>Uplink Interval on Motion(min)</td><td>デバイスが動いている際の現在の状態のアップロード間隔を設定します。</td></tr>
<tr><td rowspan="2">Motionless Event</td><td colspan="2">デバイスが一定時間以上ある場所で静止している場合、静止タイムアウトイベントがトリガーされます。</td></tr>
<tr><td>Motionless Timeout(min)</td><td>デフォルトは 360 分。</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_EventMode.png" alt="pir" width={800} height="auto" /></p>

<br />

#### 位置情報モード設定

トラッカーは GNSS、Wi-Fi（T2000-B のみサポート）、Bluetooth による測位をサポートします。

- **GNSS**：GPS やその他の衛星測位により経度と緯度を直接取得し、LoRa 経由でデータをアップロードします。
- **Wi-Fi**：パッシブスキャンで、スキャンした 5 つの MAC アドレスを LoRa 経由でアップロードします。
- **BLE**：Beacon のスキャンした 5 つの MAC アドレスを LoRa 経由でアップロードします。

<table>
<tr><th><b>位置情報戦略</b></th><th colspan="2"><b>説明</b></th></tr>
<tr><td rowspan="9"><b>位置情報戦略</b></td><td>GNSS Only</td><td>デフォルトで GNSS を使用。位置情報には GNSS のみを使用します。</td></tr>
<tr><td>Wi-Fi Only</td><td>位置情報の取得にWi-Fiスキャンのみを使用します。</td></tr>
<tr><td>Bluetooth Only</td><td>位置情報の取得にBluetoothスキャンのみを使用します。</td></tr>
<tr><td>GNSS + Wi-Fi</td><td>Wi-Fiより先にGNSSを使用します。GNSSが失敗した場合、1つの位置情報取得サイクルでWi-Fiを使用します。</td></tr>
<tr><td>GNSS + Bluetooth</td><td>Bluetoothより先にGNSSを使用します。GNSSが失敗した場合、1つの位置情報取得サイクルでBluetoothを使用します。</td></tr>
<tr><td>Wi-Fi + GNSS</td><td>GNSSより先にWi-Fiを使用します。Wi-Fiが失敗した場合、1つの位置情報取得サイクルでGNSSを使用します。</td></tr>
<tr><td>Bluetooth + GNSS</td><td>GNSSより先にBluetoothを使用します。Bluetoothが失敗した場合、1つの位置情報取得サイクルでGNSSを使用します。</td></tr>
<tr><td>Bluetooth + Wi-Fi</td><td>Wi-Fiより先にBluetoothを使用します。Bluetoothが失敗した場合、1つの位置情報取得サイクルでWi-Fiを使用します。</td></tr>
<tr><td>Bluetooth + Wi-Fi + GNSS</td><td>位置情報取得にBluetooth、Wi-Fi、GNSSを順番に使用します（1つの位置情報取得方式が失敗した後、次の方式に切り替えます）。</td></tr>
<tr><td><b>GNSS Max Scan Time(s)</b></td><td>GNSSが粗い位置情報を取得するまでの最大待機時間。</td><td><p>デフォルトは60秒です。</p><p>変更は推奨されません。時間が長いほど消費電力が大きくなります。</p></td></tr>
<tr><td><b>iBeacon Scan Timeout(s)</b></td><td>Bluetooth位置情報取得において、デバイスが周囲のBluetoothビーコンをスキャンして粗い位置情報を取得するための最大時間。</td><td><p>デフォルトは3秒です。</p><p>範囲は1〜10秒です。</p></td></tr>
<tr><td><b>Group UUID (Hex)</b></td><td>トラッカーが指定されたパターンに一致するUUIDを持つBluetoothビーコンのみをスキャンして報告できるようにし、無関係なビーコンをフィルタリングするのに役立ちます。</td><td><p>UUIDフィルターを設定します（最大16バイト）。例えば、'01 02 03 04'に設定すると、'01 02 03 04 xx xx ...'のパターンを持つビーコンをフィルタリングします。</p></td></tr>
<tr><td><b>Location Data Cache</b></td><td>LoRa経由でデータをアップロードできない場合、データはローカルに保存され（最大1000レコード）、LoRaカバレッジが回復したときにアップロードされます。</td><td><p>デフォルトではオフです。</p></td></tr>
<tr><td><b>Clear Cache</b></td><td colspan="2">すべての履歴キャッシュデータをクリアします。</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_ScanTime.png" alt="pir" width={800} height="auto" /></p>

すべてのパラメータが設定されたら、"Send"をクリックします。
変更が必要なパラメータがない場合は、Bluetooth設定を終了してホームページに戻ります。
この時点で、デバイスはLoRaネットワークアクセス要求を開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_SendButton.png" alt="pir" width={400} height="auto" /></p>

### デバイスデータ表示

#### SenseCraft App

アプリで位置情報を確認します。
デバイスをバインドした後、デバイスページに入り、右上角のボタンをクリックしてデバイスの履歴位置データを表示します。
フィルターをクリックして、'All/GNSS/BLE/Wi-Fi'などの位置情報取得モードでの位置データを選択して表示します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_DataView.png" alt="pir" width={800} height="auto" /></p>

デバイスが分解アラームをトリガーした場合、トリガー期間中の各データパケットの横に赤いアラームアイコンが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Alarm1.png" alt="pir" width={800} height="auto" /></p>

分解アラームは、アプリの`Device`ページと`Details`ページの両方に通知ウィンドウと共に表示され、ユーザーがデバイスの状態を素早く確認するのに役立ちます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_Alarm2.png" alt="pir" width={800} height="auto" /></p>

#### SenseCAP Portal

[SenseCAP Portal](https://sensecap.seeed.cc/portal/#/dashboard)の主な機能は、SenseCAPデバイスを管理し、データを保存することです。これはMicrosoftの安全で信頼性の高いクラウドサービスであるAzure上に構築されています。ユーザーはアカウントを申請し、すべてのデバイスをこのアカウントにバインドできます。SenseCAP Portalは、WebポータルとAPIを提供します。Webポータルには、ダッシュボード、デバイス管理、データ管理、アクセスキー管理が含まれます。APIは、さらなる開発のためにユーザーに公開されています。

- **ダッシュボード：** デバイス概要、お知らせ、シーンデータ、データチャートなどが含まれます。
- **デバイス管理：** SenseCAPデバイスを管理します。
- **データ管理：** データテーブルとグラフセクションを含むデータを管理し、データを検索する方法を提供します。
- **サブアカウントシステム：** 異なる権限を持つサブアカウントを登録します。
- **アクセスキー管理：** アクセスキー（APIサービスにアクセスするため）を管理し、キー作成、キー更新、キー確認が含まれます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### デバイスデータ表示

[SenseCAP Portal](http://sensecap.seeed.cc)にログインします

アプリでアカウントを作成している場合は、直接ログインできます。

1) アカウント登録を選択し、メール情報を入力して"register"をクリックすると、登録メールがユーザーのメールボックスに送信されます

2) "SenseCAP…"メールを開き、ジャンプリンクをクリックして関連情報を入力し、登録を完了します

3) ログインインターフェースに戻り、ログインを完了します

詳細については、[SenseCAP Portal User Guide](https://sensecap-docs.seeed.cc/quickstart.html)を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## SenseCAP API

SenseCAP APIは、ユーザーがIoTデバイスとデータを管理するためのものです。HTTPプロトコル、MQTTプロトコル、WebsocketプロトコルのAPIメソッドが含まれます。

- HTTP APIを使用すると、ユーザーはLoRaデバイスを管理し、生データや履歴データを取得できます。
- MQTT APIを使用すると、ユーザーはMQTTプロトコルを通じてセンサーのリアルタイム測定データを購読できます。
- Websocket APIを使用すると、ユーザーはWebsocketプロトコルを通じてセンサーのリアルタイム測定データを取得できます。

詳細については、[API User Guide](https://sensecap-docs.seeed.cc/)を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
