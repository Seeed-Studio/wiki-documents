---
description: Get_Started_with_SenseCAP_T1000_tracker
title: クイックスタート
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Get_Started_with_SenseCAP_T1000_tracker
last_update:
  date: 2/14/2026
  author: Janet
---


この章では、SenseCAP Mate APP を使用して SenseCAP T1000 Tracker をセットアップする手順を説明します。

<div class="video-container">
<iframe width="666" height="360" src="https://www.youtube.com/embed/NBSr06NXC7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/products/SenseCAP/T1000_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide_v1.2.pdf" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> User Guide </font></span></strong>
    </a>
</div>
<br />

:::caution note
Helium、TTN などの LoRaWAN ネットワーク、またはその他の LoRaWAN ネットワークのカバレッジがあることを確認してください。LoRaWAN ネットワークがない場合、デバイスはクラウドにデータを送信できません。トラッカーを最も簡単に使用する方法は、`SenseCAP LoRaWAN Gateway` と `SenseCraft app` を併用することです。
:::

## デバイス機能

### 動作モード

さまざまなシナリオに対応するため、SenseCAP T1000 tracker には複数の動作モードが用意されており、ニーズに応じて選択できます。

|**動作モード**|**説明**|**シーン**|
| - | - | - |
|スタンバイモード|<p>ハートビートパケットのみがアップロードされ、バッテリー情報のみを含みます。</p><p>位置情報は LoRa ダウンリンクコマンドを使用して取得できます。</p>|長時間デバイスを位置特定する必要があり、充電前に長時間動作させたい場合、クラウドプラットフォームから位置要求コマンドを発行してデバイスを位置特定できます。|
|周期モード|デバイスが設定した間隔で、位置情報とセンサーデータを定期的にアップロードします。|ほとんどのシナリオで推奨されるモードです。|
|イベントモード|トラッカーの温度、光、加速度センサーに応じてアップロード間隔を調整します。温度イベント、光イベント、動作イベント、静止タイムアウト、衝撃イベントを含みます。|重要物品の輸送監視など、複雑なシナリオで使用できますが、消費電力は大幅に増加します。|

### センサー機能

SenseCAP T1000 Tracker には、温度センサー、光センサー、3 軸加速度センサーの 3 つのセンサーが搭載されています。
これらのセンサーを有効または無効にすることができます：

- すべてのセンサーをオフにすることもできますが、コスト削減のためにセンサーなしバージョンを選択することもできます。
- 低消費電力で定期的にデータを監視するために、温度センサーと光センサーのみを有効にします。
- 温度、照度、加速度センサーをトリガー条件として使用する場合、センサーには常に電源が供給され、デバイスの消費電力は大きくなります。

|**センサー**|**説明**|
| - | - |
|温度|<p>これはオンボードの独立した温度センサーで、**±0.5～1℃の精度**を持ちます。筐体から分離されているため、温度測定に多少の遅れが生じる場合があることに注意してください。</p><p>範囲：-20 ～ 60℃；精度：±1℃（最小 0.5℃、最大 1℃）；分解能：0.1℃</p>|
|光|<p>光センサーは実際のルーメン値を監視するものではなく、暗い状態から明るい状態までの光量をパーセンテージで示します。主に、取り外し防止監視や光に敏感な監視に使用できます。</p><p>範囲：0 ～ 100%（0% は暗闇、100% は最も明るい状態）</p>|
|3 軸加速度センサー|加速度の値を設定することで、動作イベントおよび衝撃イベントがトリガーされます。|

### データキャッシュ

デバイスはデータをキャッシュすることができ、Bluetooth 設定で "GNSS Data Cache" をオンにすることで有効にできます。デバイスは確認パケットをアップロードします。LoRaWAN 信号のカバレッジが弱い、またはネットワークカバレッジがない場合、デバイスはデータをアップロードする際に ack を受信できません。この場合、データは保存され、次のサイクルに入ります。ある時点でデバイスがデータのアップロードに成功すると、オフラインデータが送信されます。キャッシュ可能なデータの最大件数は 1000 レコードです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### ボタン機能

<table>
<tr><th colspan="1"><a name="_hlk134103971"></a><b>操作</b></th><th colspan="1"><b>説明</b></th><th colspan="1"><b>LED ステータス</b></th><th colspan="1"><b>ブザー</b></th></tr>
<tr><td colspan="1" rowspan="2">ボタンを 3 秒間長押し</td><td colspan="1">トラッカーの電源がオフの場合、ボタンを 3 秒間長押しすると電源がオンになります。Bluetooth ペアリングは自動的に有効になり、ユーザーはアプリを使用してスキャンおよび接続できます。</td><td colspan="1">LED が 1 秒に 1 回点滅します。</td><td colspan="1">上昇メロディー</td></tr>
<tr><td colspan="1">デバイスの電源がオンの場合、ボタンを 3 秒間長押しすると Bluetooth ペアリングが有効になります。</td><td colspan="1">LED が 1 秒に 1 回点滅します。</td><td colspan="1">なし</td></tr>
<tr><td colspan="1">ボタンを 9 秒間長押し</td><td colspan="1">電源オフ。</td><td colspan="1">なし</td><td colspan="1">下降メロディー</td></tr>
<tr><td colspan="1">LoRa ネットワークへの参加</td><td colspan="1">Bluetooth 設定を終了した後、LoRaWAN ネットワークへの参加を試みます。</td><td colspan="1">ネットワークへのアクセスを試行している間はブリージングライトが点滅し、ネットワークへの参加に成功すると高速で点滅します。</td><td colspan="1">ネットワークへの参加に成功すると、短く軽快なメロディーが鳴ります。</td></tr>
<tr><td colspan="1" rowspan="2">1 回押す</td><td colspan="1">位置情報/センサーデータを取得し、データをアップロードし、"Press once" イベントを即座にトリガーします。</td><td colspan="1">LED が 2 秒間点灯します。</td><td colspan="1">データのアップロードに成功するとビープ音が鳴ります。</td></tr>
<tr><td colspan="1">Bluetooth ペアリングがオンになっている場合、1 回押すと Bluetooth をオフにできます。</td><td colspan="1">LED が消灯します。</td><td colspan="1">なし</td></tr>
<tr><td colspan="1" rowspan="3">2 回連続で押す</td><td colspan="1">SOS が単発モードに設定されている場合、ボタンをダブルクリックすると単発 SOS モードが有効になり、位置情報/センサーデータおよび SOS イベントが 1 回アップロードされます。</td><td colspan="1">音とともに点滅</td><td colspan="1">3 秒間のアラーム音</td></tr>
<tr><td colspan="1">SOS が連続モードに設定されている場合、ボタンをダブルクリックすると連続 SOS モードが有効になります。位置情報、センサーデータ、および SOS イベントが 1 分ごとに 1 回アップロードされ、このモードは 30 回後に自動的に終了します。</td><td colspan="1">音とともに点滅</td><td colspan="1">連続したアラーム音</td></tr>
<tr><td colspan="1">ダブルクリックを 2 回行うと SOS モードを終了</td><td colspan="1">なし</td><td colspan="1">なし</td></tr>
<tr><td colspan="1">DFU モードに入る</td><td colspan="1">ファームウェアのアップグレードに失敗した後、デバイスが DFU モードに入る場合があります。SenseCraft app でデバイス名 `SENSECAP_GR_DFU_XXXX` を確認できます。 <br />
DFU モードでは、3 分間操作がないとデバイスは自動的に終了します。
すぐに終了したい場合は、ボタンを 3 秒間長押しすると、デバイスが再起動して通常動作に戻ります。</td><td colspan="1">LED ライトが点滅し続けます。</td><td colspan="1">なし</td></tr>
</table>

:::info Note

- 使用しない場合は、デバイスの電源を切ることを推奨します。
- 初回起動時は、GPS が衛星経由で時刻を更新する必要があるため、屋外でのテストを推奨します。
- 周波数帯がゲートウェイの周波数と一致していることを確認してください。
:::

## はじめに

### SenseCAP Mate App に接続する

- **ステップ 1**: SenseCAP Mate App をダウンロードする

SenseCAP Mate App は、LoRa パラメータ、送信間隔の設定、デバイスをアカウントにバインドすること、およびデバイスの基本情報を確認するために使用します。

- iOS の場合、App Store で “SenseCAP Mate” を検索してダウンロードしてください。
- Android の場合、Google Store で “SenseCAP Mate” を検索してダウンロードしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2**: デバイスを追加する

SenseCAP Mate APP にログインします。
右上の 'Add Device' タブをクリックし、デバイスラベル上の QR コードをスキャンします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config.png" alt="pir" width={800} height="auto" /></p>

ボタンを 3 秒間押し、SN でデバイスを選択します。

構成モードは 2 種類あります：

- **クイック構成**: クイックスタート用に、基本パラメータを素早く設定できます。
- **詳細構成**: さらに多くのパラメータを設定するには、以下の手順を参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setup.png" alt="pir" width={500} height="auto" /></p>

### クイック構成

クイック構成では、次のパラメータのみを設定する必要があります：

- **Frequency**: ゲートウェイと同じである必要があります。
- **Uplink interval**: 周期モード（デフォルトモード）のアップリンク間隔です。他のモードは “User” ページの “Device Bluetooth Configuration” から設定できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/advanced1.png" alt="pir" width={500} height="auto" /></p>

トラッカーは LoRaWAN ネットワークへの参加を試みます。ネットワークへの参加を試行している間はブリージングライトが点滅し、ネットワークへの参加に成功すると、短く軽快なメロディーとともに高速で点滅します。

### 詳細構成

- ボタンを 3 秒間長押しして電源をオンにすると、Bluetooth ペアリングが自動的にオンになり、ユーザーはアプリを使用してスキャンおよび接続できます。
- アプリを開き、“Tracker T1000” をクリックします。“Setup” を選択してトラッカーを設定します。
- デバイスの S/N（S/N はデバイスのラベルに記載）でデバイスを選択します。すると、センサーの基本情報が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_3.png" alt="pir" width={800} height="auto" /></p>

“Measure” をクリックすると、センサー値が取得できます：

|温度|範囲：-20 ～ 60℃；精度：±1℃（最小 0.5℃、最大 1℃）；分解能：0.1℃|
| - | - |
|光|0 ～ 100%（0% は暗闇、100% は最も明るい状態）|

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_4.png" alt="pir" width={500} height="auto" /></p>

#### LoRa パラメータ設定

トラッカーは 1 つの SKU で 863MHz〜928MHz のユニバーサル周波数プランをサポートするよう製造されています。各デバイスは 7 つの周波数プランをサポートできます。

<table align="center">
  <caption> <h2>プラットフォーム</h2> </caption>
  <tbody>
    <tr>
    <td><h4>プラットフォーム</h4></td>
    <td><h4>説明</h4></td>
    </tr>
    <tr>
      <td>SenseCAP for The Things Network</td>
    <td>デフォルトのプラットフォームです。
SenseCAP Gateway と一緒に使用する必要があります。SenseCAP は独自の TTN サーバーを構築しており、センサーを SenseCAP gateway と組み合わせることで、すぐに使用できるようにします。 <br />
    <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCA Outdoor Gateway</span></a><br />
    <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCA Indoor Gateway</span></a></td>
    </tr>
        <tr>
    <td>SenseCAP for Helium</td>
    <td>Helium ネットワークのカバレッジがある場合、データは Helium 経由でアップロードできます。デバイスは SenseCAP のプライベート Helium console 上で動作します。ユーザーは Helium console 上でデバイスを作成する必要がなく、SenseCAP Mate App と Portal ですぐに利用できます。 <br /><a href="https://explorer.helium.com/" target="_blank"><span>Helium Coverage</span></a></td>
    </tr>
        <tr>
    <td>Helium</td>
    <td>デバイスをパブリック Helium console に接続します</td>
    </tr>
            <tr>
    <td>The Things Network</td>
    <td>デバイスを TTN(TTS) サーバーに接続します</td>
    </tr>
            <tr>
    <td>Other Platform</td>
    <td>その他の LoRaWAN Network Server</td>
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
    <td>LoRaWAN は confirm packet を使用</td>
    </tr>
            <tr>
    <td>LoRaWAN ADR</td>
    <td>デフォルトで有効</td>
    <td>LoRaWAN パラメータ。デフォルトで有効にしておくことを推奨します</td>
    </tr>
            <tr>
    <td>Restore LoRa Configuration</td>
    <td>“Platform” を他のプラットフォームから SenseCAP に戻したとき、LoRa パラメータ（EUI/App EUI/App Key など）を復元する必要があります</td>
    <td>LoRa パラメータを工場出荷時設定に戻す必要がある場合に、この機能を使用できます</td>
    </tr>
  </tbody>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_5.png" alt="pir" width={800} height="auto" /></p>

このセンサーは 2 つのネットワーク接続モードをサポートしており、デフォルトは OTAA です。

|**パラメータ**|**説明**|
| - | - |
|OTAA (default)|Over The Air Activation。Device EUI、App EUI、App Key を通じてネットワークに参加します。|
|ABP|Activation By Personalization。DevAddr、NwkSkey、AppSkey を通じてネットワークに参加します。|

デバイスはデフォルトで OTAA を使用して LoRaWAN ネットワークに参加します。そのため、Device EUI、App EUI、App Key を設定できます。

|**パラメータ**|**タイプ**|
| - | - |
|Device EUI|<a name="ole_link10"></a>16、0 ～ F の 16 進数|
|App EUI|16、0 ～ F の 16 進数|
|App Key|32、0 ～ F の 16 進数|

:::info Note
SenseCAP プラットフォームを使用する場合、EUI、APP EUI、APP Key は固定で、センサーラベルと同じです。<br />
センサーを Helium や TTN などのパブリックプラットフォームで使用するように選択した場合、EUI は変更されず、センサーはネットワーク接続用に新しい固定 App EUI と App Key を生成します。<br />
EUI 情報を一括で取得するには、弊社の営業チームまでお問い合わせください。
:::

<table>
<tr><th colspan="1" valign="top"><b>周波数</b></th><th colspan="1" valign="top"><b>一般名称</b></th><th colspan="2" valign="top"><b>サブバンド</b></th></tr>
<tr><td colspan="1"><a name="ole_link14"></a>EU863-870</td><td colspan="1">EU868</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">US902-928</td><td colspan="1">US915</td><td colspan="1">サブバンド 1 〜 8（デフォルト サブバンド 2）</td></tr>
<tr><td colspan="1">AU915-928</td><td colspan="1">AU915</td><td colspan="1">サブバンド 1 〜 8（デフォルト サブバンド 2）</td></tr>
<tr><td colspan="1">KR920-923</td><td colspan="1">KR920</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">IN865-867</td><td colspan="1">IN865</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">AS923-1-TTN</td><td colspan="1">AS1</td><td colspan="1">TTN 用周波数プラン</td></tr>
<tr><td colspan="1">AS923-2-TTN</td><td colspan="1">AS2</td><td colspan="1">TTN 用周波数プラン</td></tr>
<tr><td colspan="1" rowspan="4">AS923</td><td colspan="1">AS923-1</td><td colspan="1" rowspan="4">Helium 用周波数プラン</td></tr>
<tr><td colspan="1">AS923-2</td></tr>
<tr><td colspan="1">AS923-3</td></tr>
<tr><td colspan="1">AS923-4</td></tr>
</table>

:::info Note
国や LoRaWAN ネットワークサーバーによって使用される周波数プランは異なります。<br />
Helium ネットワークについては、こちらを参照してください: [Helium-frequency-plans](https://docs.helium.com/lorawan-on-helium/frequency-plans)<br />
The Things Network については、こちらを参照してください:[TTN-frequency-plans](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/)
:::

#### 動作モード設定

ニーズに応じて動作モードを設定してください。

<table>
<tr><th colspan="1"><b>パラメータ</b></th><th colspan="1"><b>説明</b></th><th colspan="1"></th></tr>
<tr><td colspan="1">Heartbeat Interval</td><td colspan="1">デバイスからハートビート間隔内にデータがアップロードされない場合、ハートビートパケットがトリガーされます。このパケットにはバッテリー情報のみが含まれます。</td><td colspan="1">デフォルト 720 分。</td></tr>
<tr><td colspan="1">Enable Temp&Light</td><td colspan="1">このスイッチをオンにすると、温度と光が収集されてアップロードされますが、消費電力が増加します。</td><td colspan="1">デフォルトでは Off。</td></tr>
<tr><td colspan="1" rowspan="2">SOS Report Mode</td><td colspan="1">Single</td><td colspan="1"><a name="ole_link7"></a>SOS を single モードに設定すると、ボタンをダブルクリックすることで単発の SOS モードが有効になり、位置情報/センサーデータおよび SOS イベントを 1 回アップロードします</td></tr>
<tr><td colspan="1">Continuous</td><td colspan="1"><p>デフォルトで continuous を使用します。</p><p>SOS を continuous モードに設定すると、ボタンをダブルクリックして SOS の連続モードをオンにし、1 分ごとに位置情報、センサーデータ、および SOS イベントをアップロードし、30 回後に自動的に終了します</p></td></tr>
<tr><td colspan="1" rowspan="3">Work Mode</td><td colspan="1">Standby Mode</td><td colspan="1">ハートビート間隔に基づいてハートビートパケット（バッテリーレベルのみ）をアップロードします。</td></tr>
<tr><td colspan="1">Periodic Mode</td><td colspan="1">アップロード間隔に従って位置情報とセンサーデータをアップロードします。</td></tr>
<tr><td colspan="1">Event Mode</td><td colspan="1"><a name="ole_link15"></a>温度、光、動きなどの測定値に応じてしきい値トリガー条件を設定し、トリガー後のアップロード間隔を調整します。</td></tr>
<tr><td colspan="1">Uplink Interval (min) – Periodic Mode</td><td colspan="1">定期的に位置を特定してデータをアップロードします。</td><td colspan="1"><p>デフォルト 60 分。 </p><p>頻度が高いほど、消費電力が高くなります。</p></td></tr>
<tr><td colspan="1">Restore All Settings</td><td colspan="1">すべての設定パラメータを工場出荷時設定に復元します。LoRa、Work Mode、Geolocation を含みます。</td><td colspan="1"></td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode.png" alt="pir" width={800} height="auto" /></p>

Event Mode では、5 つのイベントがあります:

<table>
<tr><th><b>Event Mode</b></th><th><b>説明</b></th><th></th></tr>
<tr><td>Uplink Interval – Non-event (min)</td><td><a name="ole_link16"></a>イベントがトリガーされていないときのアップロード間隔です。</td><td><p>デフォルト 60 分。 </p><p>範囲: 1〜10080 分。</p></td></tr>
<tr><td rowspan="2">Shock Event</td><td>Shock Event が有効な場合、トラッカーの衝撃により、Shock Event、位置情報、およびセンサーデータを含むデータレポートがトリガーされます。</td><td>デフォルトでは Off。</td></tr>
<tr><td>3-Axis Motion Threshold (mg)</td><td>デフォルトは 300 です。加速度が 300mg を超えると、Shock Event がトリガーされます。</td></tr>
<tr><td rowspan="3">Motion Event</td><td>加速度が設定値を超えるとデバイスが動き始め、2 分間動きがないとデバイスの動きが停止します。動き開始と動き停止に応じてアップロード間隔を設定します。</td><td>デフォルトでは Off。</td></tr>
<tr><td>3-Axis Motion Threshold (mg)</td><td>デフォルトは 30 です。加速度が 30mg を超えるとデバイスが動作中であると判断し、この値を 2 分間下回るとデバイスが静止していると判断します。</td></tr>
<tr><td>Uplink Interval on Motion(min)</td><td>デバイスが動作中の現在の状態に対するアップロード間隔を設定します。</td></tr>
<tr><td rowspan="2">Motionless Event</td><td>デバイスがある場所で一定時間以上静止していると、静止タイムアウトイベントがトリガーされます。</td><td></td></tr>
<tr><td>Motionless Timeout(min)</td><td>デフォルトは 360 分です。</td></tr>
<tr><td rowspan="4">Temperature Event</td><td>Temperature Event を有効にすると、温度に基づいてアップロード間隔を設定できます。 </td><td>例えば、Uplink Interval=10、Value≥30 の場合、温度が 30 ℃ を超えると、デバイスは 10 分間隔で位置情報をアップロードします。</td></tr>
<tr><td>Sample Interval (s)</td><td><p>デフォルト 30 秒。</p><p>30 秒ごとに温度を検出します。しきい値がトリガーされると、位置情報とセンサーデータをアップロードします。</p></td></tr>
<tr><td>アップリンク間隔 (分)</td><td>温度がしきい値を超えると、この間隔に従って位置情報とセンサーデータがアップロードされます。</td></tr>
<tr><td>値ルール</td><td>4つのしきい値ルールのうち1つを設定できます。</td></tr>
<tr><td rowspan="3">光イベント</td><td>光イベントが有効な場合、温度に基づいてアップロード間隔を設定できます。</td><td>例えば、Uplink Interval=10, Value≥30 の場合、温度が 30 % より高いと、デバイスは 10 分間隔で位置情報をアップロードします。</td></tr>
<tr><td>アップリンク間隔 (分)</td><td>光がしきい値を超えると、この間隔に従って位置情報とセンサーデータがアップロードされます。</td></tr>
<tr><td>値ルール</td><td>4つのしきい値ルールのうち1つを設定できます。</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode2.png" alt="pir" width={800} height="auto" /></p>

#### 位置情報モードの設定

トラッカーは GNSS、Wi-Fi、Bluetooth による測位をサポートしています。

- **GNSS**: GPS などの衛星測位によって経度と緯度を直接取得し、その後 LoRa 経由でデータをアップロードします。
- **Wi-Fi**: 受動スキャンを行い、スキャンした 4 つの MAC アドレスを LoRa 経由でアップロードします。
- **BLE**: Beacon のスキャンされた信号が最も強い 3 つの MAC アドレスを LoRa 経由でアップロードします。

<table>
<tr><th colspan="1"><b>位置情報</b></th><th colspan="1"><b>説明</b></th><th colspan="1"></th></tr>
<tr><td colspan="1" rowspan="8">位置情報ストラテジー</td><td colspan="1">Only GNSS</td><td colspan="1"><p>デフォルトで GNSS を使用します。</p><p>位置情報には GNSS のみが使用されます。</p></td></tr>
<tr><td colspan="1">Only Wi-Fi</td><td colspan="1">位置情報には Wi-Fi スキャンのみが使用されます。</td></tr>
<tr><td colspan="1">Wi-Fi+GNSS</td><td colspan="1">GNSS の前に Wi-Fi を使用します。1 回の位置情報サイクルで Wi-Fi が失敗した場合は GNSS を使用します。</td></tr>
<tr><td colspan="1">GNSS + Wi-Fi</td><td colspan="1">Wi-Fi の前に GNSS を使用します。1 回の位置情報サイクルで GNSS が失敗した場合は Wi-Fi を使用します。</td></tr>
<tr><td colspan="1">Only Bluetooth</td><td colspan="1">位置情報には Bluetooth スキャンのみが使用されます。</td></tr>
<tr><td colspan="1">Bluetooth + Wi-Fi</td><td colspan="1">Wi-Fi の前に Bluetooth を使用します。1 回の位置情報サイクルで Bluetooth が失敗した場合は Wi-Fi を使用します。</td></tr>
<tr><td colspan="1">Bluetooth + GNSS</td><td colspan="1">GNSS の前に Bluetooth を使用します。1 回の位置情報サイクルで Bluetooth が失敗した場合は GNSS を使用します。</td></tr>
<tr><td colspan="1">Bluetooth + Wi-Fi + GNSS </td><td colspan="1">Bluetooth、Wi-Fi、GNSS を順番に使用して測位します（ある種類の測位が失敗した後、次の種類の測位に切り替えます）。</td></tr>
<tr><td colspan="1">GNSS タイムアウト</td><td colspan="1"><p>GNSS が大まかな位置情報を取得するまで待機する最大時間です。</p><p></p></td><td colspan="1"><p>デフォルトは 60s です。</p><p>変更は推奨されません。時間が長くなるほど、消費電力が大きくなります。</p></td></tr>
<tr><td colspan="1"><a name="ole_link17"></a>GNSS データキャッシュ</td><td colspan="1">LoRa を介してデータをアップロードできない場合、データはローカルに保存され、LoRa 信号が回復したときにアップロードされます。</td><td colspan="1">デフォルトでは Off です。</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/mode3.png" alt="pir" width={500} height="auto" /></p>

すべてのパラメータを設定したら、“Send” をクリックします。
変更が必要なパラメータがない場合は、Bluetooth 設定を終了してホームページに戻ります。この時点で、デバイスは LoRa ネットワークへのアクセス要求を開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/send.png" alt="pir" width={400} height="auto" /></p>

### デバイスデータの表示

#### SenseCAP Mate アプリ

APP 上で位置情報を確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_view.png" alt="pir" width={800} height="auto" /></p>

#### SenseCAP Portal

SenseCAP Portal の主な機能は、SenseCAP デバイスを管理し、データを保存することです。Microsoft の安全で信頼性の高いクラウドサービスである Azure 上に構築されています。ユーザーはアカウントを申請し、すべてのデバイスをこのアカウントにバインドできます。SenseCAP Portal は Web ポータルと API を提供します。Web ポータルには、Dashboard、Device Management、Data Management、Access Key Management が含まれます。API はユーザーに公開されており、さらなる開発に利用できます。

- **Dashboard:** Device Overview、Announcement、Scene Data、Data Chart などを含みます。
- **Device Management:** SenseCAP デバイスを管理します。
- **Data Management:** Data Table と Graph セクションを含むデータを管理し、データを検索する方法を提供します。
- **Subaccount System:** 異なる権限を持つサブアカウントを登録します。
- **Access Key Management:** Access Key（API サービスにアクセスするため）を管理し、Key Create、Key Update、Key Check を含みます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### デバイスデータの表示

[SenseCAP Portal](http://sensecap.seeed.cc) にログインします。

APP を通じてアカウントを作成している場合は、そのままログインできます。

1) Register アカウントを選択し、メール情報を入力して "register" をクリックすると、登録メールがユーザーのメールボックスに送信されます。

2) "SenseCAP…"メールを開き、ジャンプリンクをクリックして関連情報を入力し、登録を完了します。

3) ログイン画面に戻り、ログインを完了します。

詳細については、[SenseCAP Portal User Guide](https://sensecap-docs.seeed.cc/quickstart.html) を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## SenseCAP API

SenseCAP API は、ユーザーが IoT デバイスとデータを管理するためのものです。HTTP プロトコル、MQTT プロトコル、Websocket プロトコルの 3 種類の API メソッドが含まれます。

- HTTP API を使用すると、ユーザーは LoRa デバイスを管理し、生データまたは履歴データを取得できます。
- MQTT API を使用すると、ユーザーは MQTT プロトコルを通じてセンサーのリアルタイム測定データを購読できます。
- Websocket API を使用すると、ユーザーは Websocket プロトコルを通じてセンサーのリアルタイム測定データを取得できます。

詳細については、[API User Guide](https://sensecap-docs.seeed.cc/) を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>
