---
description: SenseCAP T1000 トラッカーの開始ガイド
title: クイックスタート
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Get_Started_with_SenseCAP_T1000_tracker
last_update:
  date: 12/24/2025
  author: Janet
---


この章では、SenseCAP Mate APP を使用して SenseCAP T1000 トラッカーをセットアップする方法をガイドします。

<div class="video-container">
<iframe width="666" height="360" src="https://www.youtube.com/embed/NBSr06NXC7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/products/SenseCAP/T1000_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide_v1.2.pdf" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> ユーザーガイド </font></span></strong>
    </a>
</div>
<br />

:::caution note
Helium、TTN、またはその他の LoRaWAN ネットワークなど、LoRaWAN ネットワークのカバレッジがあることを確認してください。LoRaWAN ネットワークがないと、デバイスはクラウドにデータを送信できません。トラッカーを使用する最も簡単な方法は、`SenseCAP LoRaWAN Gateway` と `SenseCraft app` を使用することです。
:::

## デバイス機能

### 動作モード

さまざまなシナリオに適用するため、SenseCAP T1000 トラッカーにはいくつかの異なる動作モードがあり、ニーズに応じて選択できます。

|**動作モード**|**説明**|**シーン**|
| - | - | - |
|スタンバイモード|<p>ハートビートパケットのみがアップロードされ、バッテリー情報のみが含まれます。</p><p>位置は LoRa ダウンリンクコマンドを使用して取得できます。</p>|デバイスを長時間位置特定する必要があり、充電前にデバイスが長時間動作できる場合、クラウドプラットフォームは位置要求コマンドを発行してデバイスを位置特定できます。|
|定期モード|デバイスが定期的に位置とセンサーデータをアップロードする間隔を設定します。|このモードはほとんどのシナリオに推奨されます。|
|イベントモード|温度イベント、光イベント、動作イベント、静止タイムアウト、衝撃イベントを含む、トラッカーの温度、光、加速度センサーに応じてアップロード間隔を調整します。|重要なアイテムの輸送監視など、複雑なシナリオで使用できます。ただし、消費電力が大幅に増加します。|

### センサー機能

SenseCAP T1000 トラッカーには 3 つのセンサーが搭載されています：温度センサー、光センサー、3軸加速度計。
これらのセンサーを有効または無効にすることができます：

- すべてのセンサーをオフにしますが、コストを削減するためにセンサーなしのバージョンを選択することもできます。
- 温度センサーと光センサーのみを有効にして、低消費電力で定期的にデータを監視します。
- 温度、照度、加速度計がトリガー条件として使用される場合、センサーは常に電力が供給され、デバイスは大量の電力を消費します。

|**センサー**|**説明**|
| - | - |
|温度|<p>これは **±0.5~1℃の精度** を持つオンボード独立温度センサーです。シェルから分離されているため、ここで温度測定の遅延がある可能性があることに注意してください。</p><p>範囲：-20 から 60℃；精度：± 1℃（最小 0.5℃、最大 1℃）；分解能：0.1℃</p>|
|光|<p>光センサーは監視される実際のルーメン値ではなく、暗闇から明るさまでの光の割合です。主に破壊防止監視といくつかの光感受性監視に使用できます。</p><p>範囲：0 から 100%（0% は暗闇、100% は最も明るい）</p>|
|3軸加速度計|加速度の値を設定することで、動作イベントと衝撃イベントがトリガーされます。|

### データキャッシュ

デバイスはデータをキャッシュでき、「GNSS Data Cache」を開くことで Bluetooth 設定を通じて有効にできます。デバイスは確認パケットをアップロードします。LoRaWAN 信号カバレッジが弱いかネットワークカバレッジがない場合、デバイスはデータをアップロードする際に ack を受信できません。この場合、データは保存され、次のサイクルに入ります。デバイスがある時点でデータのアップロードに成功すると、オフラインデータを送信します。キャッシュできるデータの最大数は 1000 レコードです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### ボタン機能

<table>
<tr><th colspan="1"><a name="_hlk134103971"></a><b>アクション</b></th><th colspan="1"><b>説明</b></th><th colspan="1"><b>LED ステータス</b></th><th colspan="1"><b>ブザー</b></th></tr>
<tr><td colspan="1" rowspan="2">ボタンを押して 3 秒間保持</td><td colspan="1">トラッカーの電源がオフの場合、ボタンを 3 秒間押し続けて電源をオンにします。Bluetooth ペアリングが自動的にアクティブになり、ユーザーはアプリを使用してスキャンして接続できます。</td><td colspan="1">LED が 1 秒に 1 回点滅します。</td><td colspan="1">上昇メロディー</td></tr>
<tr><td colspan="1">デバイスの電源がオンの場合、ボタンを 3 秒間押し続けて Bluetooth ペアリングをアクティブにします。</td><td colspan="1">LED が 1 秒に 1 回点滅します。</td><td colspan="1">なし</td></tr>
<tr><td colspan="1">ボタンを押して 9 秒間保持</td><td colspan="1">電源オフ。</td><td colspan="1">なし</td><td colspan="1">下降メロディー</td></tr>
<tr><td colspan="1">LoRa ネットワークに参加</td><td colspan="1">Bluetooth 設定を終了した後、LoRaWAN ネットワークへの参加を試みます。</td><td colspan="1">ネットワークへのアクセスを試みるときに呼吸ライトが点滅し、ネットワークに正常に参加した場合は素早く点滅します</td><td colspan="1">ネットワークに正常に参加したときの素早く陽気なメロディー</td></tr>
<tr><td colspan="1" rowspan="2">1 回押す</td><td colspan="1">位置/センサーデータを取得し、データをアップロードし、「1 回押す」イベントを即座にトリガーします。</td><td colspan="1">LED が 2 秒間明るく点灯</td><td colspan="1">データが正常にアップロードされたときに音が鳴ります。</td></tr>
<tr><td colspan="1">Bluetooth ペアリングがオンになっている場合、1 回押すと Bluetooth をオフにできます。</td><td colspan="1">LED がオフになります</td><td colspan="1">なし</td></tr>
<tr><td colspan="1" rowspan="3">連続して 2 回押す</td><td colspan="1">SOS がシングルショットモードに設定されている場合、ボタンをダブルクリックするとシングルショット SOS モードがアクティブになり、位置/センサーデータと SOS イベントを 1 回アップロードします。</td><td colspan="1">音と共に点滅</td><td colspan="1">3 秒間のアラーム音</td></tr>
<tr><td colspan="1">SOS が連続モードに設定されている場合、ボタンをダブルクリックして連続 SOS モードをアクティブにします。位置、センサーデータ、SOS イベントが 1 分ごとに 1 回アップロードされ、30 回後にモードが自動的に終了します。</td><td colspan="1">音と共に点滅</td><td colspan="1">継続的なアラーム音</td></tr>
<tr><td colspan="1">2 回ダブルクリックして SOS モードを終了</td><td colspan="1">なし</td><td colspan="1">なし</td></tr>
</table>

:::info Note

- 使用しない場合はデバイスの電源をオフにすることをお勧めします。
- 初回電源投入時は、GPS が衛星経由で時刻を更新する必要があるため、屋外でテストすることをお勧めします。
- 周波数帯域がゲートウェイの周波数と一致することを確認してください。
:::

## 開始ガイド

### SenseCAP Mate App への接続

- **ステップ 1**：SenseCAP Mate App をダウンロード

SenseCAP Mate App は LoRa パラメータ、間隔の設定、デバイスをアカウントにバインド、デバイスの基本情報確認に使用されます。

- iOS の場合、App Store で「SenseCAP Mate」を検索してダウンロードしてください。
- Android の場合、Google Store で「SenseCAP Mate」を検索してダウンロードしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2**：デバイスを追加

SenseCAP Mate APP にログインします。
右上の「Add Device」タブをクリックし、デバイスラベルの QR コードをスキャンします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config.png" alt="pir" width={800} height="auto" /></p>

ボタンを 3 秒間押し、SN でデバイスを選択します。

2 つの設定モードがあります：

- **クイック設定**：クイックスタートの場合、基本パラメータをクイック設定できます
- **詳細設定**：より多くのパラメータを設定するには、以下の手順を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setup.png" alt="pir" width={500} height="auto" /></p>

### クイック設定

クイック設定では、以下のパラメータのみを設定する必要があります：

- **周波数**：ゲートウェイと同じである必要があります。
- **アップリンク間隔**：定期モード（デフォルトモード）のアップリンク間隔。「User」ページの「Device Bluetooth Configuration」で他のモードを設定できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/advanced1.png" alt="pir" width={500} height="auto" /></p>

トラッカーは LoRaWAN ネットワークへの参加を試み、ネットワークへの参加を試みるときに呼吸ライトが点滅し、ネットワークに正常に参加した場合は素早く陽気なメロディーと共に素早く点滅します。

### 詳細設定

- ボタンを 3 秒間押し続けて電源をオンにし、Bluetooth ペアリングが自動的にオンになり、ユーザーはアプリを使用してスキャンして接続できます。
- アプリを開いて「Tracker T1000」をクリックします。「Setup」を選択してトラッカーを設定します。
- S/N でデバイスを選択します（S/N はデバイスのラベルに記載されています）。その後、入力後にセンサーの基本情報が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_3.png" alt="pir" width={800} height="auto" /></p>

「Measure」をクリックすると、センサー値が取得されます：

|温度|範囲：-20 から 60℃；精度：± 1℃（最小 0.5℃、最大 1℃）；分解能：0.1℃|
| - | - |
|光|0 から 100%（0% は暗闇、100% は最も明るい）|

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_4.png" alt="pir" width={500} height="auto" /></p>

#### LoRa パラメータ設定

トラッカーは 1 つの SKU で 863MHz~928MHz のユニバーサル周波数プランをサポートするように製造されています。すべての単一デバイスは 7 つの周波数プランをサポートできます。

<table align="center">
  <caption> <h2>プラットフォーム</h2> </caption>
  <tbody>
    <tr>
    <td><h4>プラットフォーム</h4></td>
    <td><h4>説明</h4></td>
    </tr>
    <tr>
      <td>SenseCAP for The Things Network</td>
    <td>デフォルトプラットフォーム。
SenseCAP ゲートウェイと組み合わせて使用する必要があります。SenseCAP は独自の TTN サーバーを構築し、SenseCAP ゲートウェイとペアリングした際にセンサーをすぐに使用できるようにします。<br />
    <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCAP 屋外ゲートウェイ</span></a><br />
    <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCAP 屋内ゲートウェイ</span></a></td>
    </tr>
        <tr>
    <td>SenseCAP for Helium</td>
    <td>Helium ネットワークのカバレッジがある場合、Helium 経由でデータをアップロードできます。デバイスは SenseCAP のプライベート Helium コンソールで動作します。ユーザーは Helium コンソールでデバイスを作成する必要がなく、SenseCAP Mate アプリとポータルですぐに使用できます。<br /><a href="https://explorer.helium.com/" target="_blank"><span>Helium カバレッジ</span></a></td>
    </tr>
        <tr>
    <td>Helium</td>
    <td>デバイスをパブリック Helium コンソールに接続</td>
    </tr>
            <tr>
    <td>The Things Network</td>
    <td>デバイスを TTN（TTS）サーバーに接続</td>
    </tr>
            <tr>
    <td>Other Platform</td>
    <td>その他の LoRaWAN ネットワークサーバー</td>
    </tr>
  </tbody>
</table>

<table align="center">
  <caption> <h2></h2> </caption>
  <tbody>
    <tr>
    <td><h4>パラメータ</h4></td>
    <td><h4>説明</h4></td>
    <td><h4></h4></td>
    </tr>
    <tr>
    <td>Frequency Plan</td>
    <td>EU868 / US915 / AU915 / KR920 / IN865 / AS923-1 / AS923-2 / AS923-3 / AS923-4</td>
    <td>デフォルト EU868</td>
    </tr>
        <tr>
    <td>Packet Policy</td>
    <td>1C</td>
    <td>LoRaWAN は確認パケットを使用</td>
    </tr>
            <tr>
    <td>LoRaWAN ADR</td>
    <td>デフォルトで有効</td>
    <td>LoRaWAN パラメータ、デフォルトで有効にすることを推奨</td>
    </tr>
            <tr>
    <td>Restore LoRa Configuration</td>
    <td>"Platform" が他のプラットフォームから SenseCAP に戻る際、LoRa パラメータ（EUI/App EUI/App Key など）を復元する必要があります</td>
    <td>LoRa パラメータを工場出荷時のデフォルトに復元する必要がある場合に、この機能を使用できます</td>
    </tr>
  </tbody>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_5.png" alt="pir" width={800} height="auto" /></p>

センサーは 2 つのネットワークアクセスモードをサポートし、デフォルトで OTAA を使用します。

|**パラメータ**|**説明**|
| - | - |
|OTAA（デフォルト）|Over The Air Activation、Device EUI、App EUI、App Key を通じてネットワークに参加します。|
|ABP|Activation By Personalization、DevAddr、NwkSkey、AppSkey を通じてネットワークに参加します。|

デバイスはデフォルトで OTAA を使用して LoRaWAN ネットワークに参加します。そのため、Device EUI、App EUI、App Key を設定できます。

|**パラメータ**|**タイプ**|
| - | - |
|Device EUI|<a name="ole_link10"></a>16 桁、0 ～ F の 16 進数|
|App EUI|16 桁、0 ～ F の 16 進数|
|App Key|32 桁、0 ～ F の 16 進数|

:::info 注意
SenseCAP プラットフォームを使用する場合、EUI、APP EUI、APP Key は固定されており、センサーラベルと同じです。<br />
センサーが Helium や TTN などのパブリックプラットフォームで使用するように選択された場合、EUI は変更されず、センサーはネットワークアクセス用に新しい固定 App EUI と App Key を生成します。<br />
EUI 情報を一括で取得するには、営業チームにお問い合わせください。
:::

<table>
<tr><th colspan="1" valign="top"><b>周波数</b></th><th colspan="1" valign="top"><b>一般名</b></th><th colspan="2" valign="top"><b>サブバンド</b></th></tr>
<tr><td colspan="1"><a name="ole_link14"></a>EU863-870</td><td colspan="1">EU868</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">US902-928</td><td colspan="1">US915</td><td colspan="1">サブバンド 1 ～ 8（デフォルトサブバンド 2）</td></tr>
<tr><td colspan="1">AU915-928</td><td colspan="1">AU915</td><td colspan="1">サブバンド 1 ～ 8（デフォルトサブバンド 2）</td></tr>
<tr><td colspan="1">KR920-923</td><td colspan="1">KR920</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">IN865-867</td><td colspan="1">IN865</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">AS923-1-TTN</td><td colspan="1">AS1</td><td colspan="1">TTN 用周波数プラン</td></tr>
<tr><td colspan="1">AS923-2-TTN</td><td colspan="1">AS2</td><td colspan="1">TTN 用周波数プラン</td></tr>
<tr><td colspan="1" rowspan="4">AS923</td><td colspan="1">AS923-1</td><td colspan="1" rowspan="4">Helium 用周波数プラン</td></tr>
<tr><td colspan="1">AS923-2</td></tr>
<tr><td colspan="1">AS923-3</td></tr>
<tr><td colspan="1">AS923-4</td></tr>
</table>

:::info 注意
国や LoRaWAN ネットワークサーバーによって異なる周波数プランが使用されます。<br />
Helium ネットワークについては、[Helium-frequency-plans](https://docs.helium.com/lorawan-on-helium/frequency-plans) を参照してください。<br />
The Things Network については、[TTN-frequency-plans](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/) を参照してください。
:::

#### 動作モード設定

ニーズに応じて動作モードを設定してください。

<table>
<tr><th colspan="1"><b>パラメータ</b></th><th colspan="1"><b>説明</b></th><th colspan="1"></th></tr>
<tr><td colspan="1">Heartbeat Interval</td><td colspan="1">ハートビート間隔内にデバイスからデータがアップロードされない場合、ハートビートパケットがトリガーされます。このパケットにはバッテリー情報のみが含まれます。</td><td colspan="1">デフォルト 720 分。</td></tr>
<tr><td colspan="1">Enable Temp&Light</td><td colspan="1">このスイッチがオンになっている場合、温度と光が収集・アップロードされますが、消費電力が増加します。</td><td colspan="1">デフォルトでオフ。</td></tr>
<tr><td colspan="1" rowspan="2">SOS Report Mode</td><td colspan="1">Single</td><td colspan="1"><a name="ole_link7"></a>SOS がシングルモードに設定されている場合、ボタンをダブルクリックするとワンショット SOS モードが有効になり、位置/センサーデータと SOS イベントを一度アップロードします</td></tr>
<tr><td colspan="1">Continuous</td><td colspan="1"><p>デフォルトで連続使用。</p><p>SOS が連続モードに設定されている場合、ボタンをダブルクリックして SOS の連続モードを開き、1 分間隔で位置、センサーデータ、SOS イベントをアップロードし、30 回後に自動終了します</p></td></tr>
<tr><td colspan="1" rowspan="3">Work Mode</td><td colspan="1">Standby Mode</td><td colspan="1">ハートビート間隔に基づいてハートビートパケット（バッテリーレベルのみ）をアップロードします。</td></tr>
<tr><td colspan="1">Periodic Mode</td><td colspan="1">アップロード間隔に従って位置とセンサーデータをアップロードします。</td></tr>
<tr><td colspan="1">Event Mode</td><td colspan="1"><a name="ole_link15"></a>温度、光、動きなどの測定値に応じて閾値トリガー条件を設定し、トリガー後のアップロード間隔を調整します。</td></tr>
<tr><td colspan="1">Uplink Interval (min) – Periodic Mode</td><td colspan="1">定期的に位置を特定してデータをアップロードします。</td><td colspan="1"><p>デフォルト 60 分。</p><p>頻度が高いほど、消費電力が高くなります。</p></td></tr>
<tr><td colspan="1">Restore All Settings</td><td colspan="1">LoRa、動作モード、位置情報を含むすべての設定パラメータを工場出荷時設定に復元します。</td><td colspan="1"></td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode.png" alt="pir" width={800} height="auto" /></p>

イベントモードには 5 つのイベントがあります：

<table>
<tr><th><b>イベントモード</b></th><th><b>説明</b></th><th></th></tr>
<tr><td>Uplink Interval – Non-event (min)</td><td><a name="ole_link16"></a>これはイベントがトリガーされていない場合のアップロード間隔です。</td><td><p>デフォルト 60 分。</p><p>範囲：1～10080 分。</p></td></tr>
<tr><td rowspan="2">Shock Event</td><td>ショックイベントが有効になっている場合、トラッカーの衝撃がデータレポートをトリガーし、ショックイベント、位置、センサーデータが含まれます。</td><td>デフォルトでオフ。</td></tr>
<tr><td>3-Axis Motion Threshold (mg)</td><td>デフォルトは 300。加速度が 300mg を超えると、ショックイベントがトリガーされます。</td></tr>
<tr><td rowspan="3">Motion Event</td><td>加速度が設定値を超えるとデバイスが動き始め、2 分間動きがないとデバイスの動きが停止します。動き開始と動き停止に応じてアップロード間隔を設定します。</td><td>デフォルトでオフ。</td></tr>
<tr><td>3-Axis Motion Threshold (mg)</td><td>デフォルトは 30。加速度が 30mg を超えるとデバイスが動いていると判定し、この値を 2 分間下回るとデバイスが静止していると判定します。</td></tr>
<tr><td>Uplink Interval on Motion(min)</td><td>デバイスが動いている際の現在の状態のアップロード間隔を設定します。</td></tr>
<tr><td rowspan="2">Motionless Event</td><td>デバイスが一定時間以上ある場所で静止している場合、静止タイムアウトイベントがトリガーされます。</td><td></td></tr>
<tr><td>Motionless Timeout(min)</td><td>デフォルトは 360 分。</td></tr>
<tr><td rowspan="4">Temperature Event</td><td>温度イベントが有効になっている場合、温度に基づいてアップロード間隔を設定できます。</td><td>例：Uplink Interval=10、Value≥30 の場合、温度が 30°C を超えると、デバイスは 10 分間隔で位置をアップロードします。</td></tr>
<tr><td>Sample Interval (s)</td><td><p>デフォルト 30 秒。</p><p>30 秒ごとに温度が検出されます。閾値がトリガーされると、位置とセンサーデータをアップロードします。</p></td></tr>
<tr><td>Uplink Interval (min)</td><td>温度が閾値を超えた場合、この間隔に従って位置とセンサーデータがアップロードされます。</td></tr>
<tr><td>Value Rule</td><td>4 つの閾値ルールのうち 1 つを設定できます。</td></tr>
<tr><td rowspan="3">Light Event</td><td>光イベントが有効になっている場合、温度に基づいてアップロード間隔を設定できます。</td><td>例：Uplink Interval=10、Value≥30 の場合、温度が 30% を超えると、デバイスは 10 分間隔で位置をアップロードします。</td></tr>
<tr><td>アップリンク間隔（分）</td><td>光が閾値を超えた場合、この間隔に従って位置とセンサーデータがアップロードされます。</td></tr>
<tr><td>値ルール</td><td>4つの閾値ルールのうち1つを設定できます。</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode2.png" alt="pir" width={800} height="auto" /></p>

#### 位置情報モード設定

トラッカーはGNSS、Wi-Fi、Bluetoothによる測位をサポートしています。

- **GNSS**: GPSやその他の衛星測位により経度と緯度を直接取得し、LoRa経由でデータをアップロードします。
- **Wi-Fi**: パッシブスキャンを行い、スキャンした4つのMACアドレスをLoRa経由でアップロードします。
- **BLE**: Beaconのスキャンした3つの最良信号MACアドレスをLoRa経由でアップロードします。

<table>
<tr><th colspan="1"><b>位置情報</b></th><th colspan="1"><b>説明</b></th><th colspan="1"></th></tr>
<tr><td colspan="1" rowspan="8">位置情報戦略</td><td colspan="1">GNSSのみ</td><td colspan="1"><p>デフォルトでGNSSを使用。</p><p>位置情報にはGNSSのみを使用します。</p></td></tr>
<tr><td colspan="1">Wi-Fiのみ</td><td colspan="1">位置情報にはWi-Fiスキャンのみを使用します。</td></tr>
<tr><td colspan="1">Wi-Fi+GNSS</td><td colspan="1">GNSSよりもWi-Fiを優先使用。Wi-Fiが失敗した場合、1つの位置情報サイクルでGNSSを使用します。</td></tr>
<tr><td colspan="1">GNSS + Wi-Fi</td><td colspan="1">Wi-FiよりもGNSSを優先使用。GNSSが失敗した場合、1つの位置情報サイクルでWi-Fiを使用します。</td></tr>
<tr><td colspan="1">Bluetoothのみ</td><td colspan="1">位置情報にはBluetoothスキャンのみを使用します。</td></tr>
<tr><td colspan="1">Bluetooth + Wi-Fi</td><td colspan="1">Wi-FiよりもBluetoothを優先使用。Bluetoothが失敗した場合、1つの位置情報サイクルでWi-Fiを使用します。</td></tr>
<tr><td colspan="1">Bluetooth + GNSS</td><td colspan="1">GNSSよりもBluetoothを優先使用。Bluetoothが失敗した場合、1つの位置情報サイクルでGNSSを使用します。</td></tr>
<tr><td colspan="1">Bluetooth + Wi-Fi + GNSS </td><td colspan="1">Bluetooth、Wi-Fi、GNSSを順番に測位に使用（1つの測位タイプが失敗した後、次のタイプの測位に切り替え）</td></tr>
<tr><td colspan="1">GNSSタイムアウト</td><td colspan="1"><p>GNSSが粗い位置固定を取得するまで</p><p>待機する最大時間</p></td><td colspan="1"><p>デフォルトは60秒。</p><p>変更は推奨されません。時間が長いほど消費電力が大きくなります。</p></td></tr>
<tr><td colspan="1"><a name="ole_link17"></a>GNSSデータキャッシュ</td><td colspan="1">LoRa経由でデータをアップロードできない場合、データはローカルに保存され、LoRa信号が回復したときにアップロードされます。</td><td colspan="1">デフォルトでオフ。</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/mode3.png" alt="pir" width={500} height="auto" /></p>

すべてのパラメータが設定されたら、"Send"をクリックします。
変更が必要なパラメータがない場合は、Bluetooth設定を終了してホームページに戻ります。この時点で、デバイスはLoRaネットワークアクセス要求を開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/send.png" alt="pir" width={400} height="auto" /></p>

### デバイスデータ表示

#### SenseCAP Mate App

アプリで位置情報を確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_view.png" alt="pir" width={800} height="auto" /></p>

#### SenseCAP Portal

SenseCAP Portalの主な機能は、SenseCAPデバイスの管理とデータの保存です。Microsoftのセキュアで信頼性の高いクラウドサービスであるAzure上に構築されています。ユーザーはアカウントを申請し、すべてのデバイスをこのアカウントにバインドできます。SenseCAP PortalはウェブポータルとAPIを提供します。ウェブポータルには、ダッシュボード、デバイス管理、データ管理、アクセスキー管理が含まれます。APIはユーザーのさらなる開発のために公開されています。

- **ダッシュボード:** デバイス概要、お知らせ、シーンデータ、データチャートなどを含みます。
- **デバイス管理:** SenseCAPデバイスを管理します。
- **データ管理:** データテーブルとグラフセクションを含むデータを管理し、データを検索する方法を提供します。
- **サブアカウントシステム:** 異なる権限を持つサブアカウントを登録します。
- **アクセスキー管理:** アクセスキー（APIサービスにアクセスするため）を管理し、キー作成、キー更新、キー確認を含みます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### デバイスデータ表示

[SenseCAP Portal](http://sensecap.seeed.cc)にログインします

アプリでアカウントを作成済みの場合は、直接ログインできます。

1) アカウント登録を選択し、メール情報を入力して"register"をクリックすると、登録メールがユーザーのメールボックスに送信されます

2) "SenseCAP…"メールを開き、ジャンプリンクをクリックして関連情報を入力し、登録を完了します

3) ログイン画面に戻り、ログインを完了します

詳細については[SenseCAP Portal ユーザーガイド](https://sensecap-docs.seeed.cc/quickstart.html)を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## SenseCAP API

SenseCAP APIは、ユーザーがIoTデバイスとデータを管理するためのものです。HTTPプロトコル、MQTTプロトコル、Websocketプロトコルの3種類のAPIメソッドが含まれています。

- HTTP APIを使用すると、ユーザーはLoRaデバイスを管理し、生データや履歴データを取得できます。
- MQTT APIを使用すると、ユーザーはMQTTプロトコルを通じてセンサーのリアルタイム測定データを購読できます。
- Websocket APIを使用すると、ユーザーはWebsocketプロトコルを通じてセンサーのリアルタイム測定データを取得できます。

詳細については[API ユーザーガイド](https://sensecap-docs.seeed.cc/)を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>
