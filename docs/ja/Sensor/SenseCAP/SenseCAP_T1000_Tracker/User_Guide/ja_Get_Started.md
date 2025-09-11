---
description: Get_Started_with_SenseCAP_T1000_tracker
title: クイックスタート
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Get_Started_with_SenseCAP_T1000_tracker
last_update:
  date: 8/15/2023
  author: Jessie
---


この章では、SenseCAP Mate APPを使用してSenseCAP T1000 Trackerをセットアップする方法をガイドします。

<center><iframe width="666" height="360" src="https://www.youtube.com/embed/NBSr06NXC7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/products/SenseCAP/T1000_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide_v1.2.pdf" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> ユーザーガイド </font></span></strong>
    </a>
</div>

## デバイス機能

### 動作モード

異なるシナリオに適用するため、SenseCAP T1000 trackerには複数の異なる動作モードがあり、ニーズに応じて選択できます。

|**動作モード**|**説明**|**シーン**|
| - | - | - |
|スタンバイモード|<p>ハートビートパケットのみがアップロードされ、バッテリー情報のみが含まれます。</p><p>位置情報はLoRaダウンリンクコマンドを使用して取得できます。</p>|デバイスを長時間位置特定する必要があり、充電前にデバイスが長時間動作できる場合、クラウドプラットフォームは位置要求コマンドを発行してデバイスを位置特定できます。|
|定期モード|デバイスが定期的に位置情報とセンサーデータをアップロードする間隔を設定します。|このモードはほとんどのシナリオで推奨されます。|
|イベントモード|トラッカーの温度、光、加速度センサーに応じてアップロード間隔を調整します。温度イベント、光イベント、動作イベント、静止タイムアウト、衝撃イベントが含まれます。|重要なアイテムの輸送監視など、複雑なシナリオで使用できます。ただし、消費電力が大幅に増加します。|

### センサー機能

SenseCAP T1000 Trackerには3つのセンサーが搭載されています：温度センサー、光センサー、3軸加速度計。
これらのセンサーを有効または無効にすることができます：

- すべてのセンサーをオフにしますが、コストを削減するためにセンサーなしのバージョンを選択することもできます。
- 温度センサーと光センサーのみを有効にして、低消費電力で定期的にデータを監視します。
- 温度、照度、加速度計をトリガー条件として使用する場合、センサーは常に電源が供給され、デバイスは大量の電力を消費します。

|**センサー**|**説明**|
| - | - |
|温度|<p>これは**±0.5~1℃の精度**を持つオンボード独立温度センサーです。シェルから分離されているため、温度測定の遅延がある可能性があることに注意してください。</p><p>範囲：-20～60℃；精度：±1℃（最小0.5℃、最大1℃）；分解能：0.1℃</p>|
|光|<p>光センサーは監視される実際のルーメン値ではなく、暗闇から明るさまでの光の割合です。主に改ざん防止監視や光感度監視に使用できます。</p><p>範囲：0～100%（0%は暗闇、100%は最も明るい）</p>|
|3軸加速度計|加速度の値を設定することで、動作イベントと衝撃イベントがトリガーされます。|

### データキャッシュ

デバイスはデータをキャッシュでき、「GNSSデータキャッシュ」を開くことでBluetooth設定を通じて有効にできます。デバイスは確認パケットをアップロードします。LoRaWAN信号カバレッジが弱い場合やネットワークカバレッジがない場合、デバイスはデータをアップロードする際にackを受信できません。この場合、データは保存され、次のサイクルに入ります。デバイスがある時点でデータのアップロードに成功すると、オフラインデータを送信します。キャッシュできるデータの最大数は1000レコードです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### ボタン機能

<table>
<tr><th colspan="1"><a name="_hlk134103971"></a><b>操作</b></th><th colspan="1"><b>説明</b></th><th colspan="1"><b>LEDステータス</b></th><th colspan="1"><b>ブザー</b></th></tr>
<tr><td colspan="1" rowspan="2">ボタンを押して3秒間保持</td><td colspan="1">トラッカーの電源がオフの場合、ボタンを3秒間押し続けると電源がオンになります。Bluetoothペアリングが自動的にアクティブになり、ユーザーはアプリを使用してスキャンして接続できます。</td><td colspan="1">LEDが1秒に1回点滅します。</td><td colspan="1">上昇メロディー</td></tr>
<tr><td colspan="1">デバイスの電源がオンの場合、ボタンを3秒間押し続けるとBluetoothペアリングがアクティブになります。</td><td colspan="1">LEDが1秒に1回点滅します。</td><td colspan="1">なし</td></tr>
<tr><td colspan="1">ボタンを押して9秒間保持</td><td colspan="1">電源オフ。</td><td colspan="1">なし</td><td colspan="1">下降メロディー</td></tr>
<tr><td colspan="1">LoRaネットワークに参加</td><td colspan="1">Bluetooth設定を終了した後、LoRaWANネットワークへの参加を試行します。</td><td colspan="1">ネットワークへのアクセスを試行中は呼吸ライトが点滅し、ネットワークに正常に参加すると素早く点滅します</td><td colspan="1">ネットワークに正常に参加すると素早く陽気なメロディー</td></tr>
<tr><td colspan="1" rowspan="2">1回押す</td><td colspan="1">位置情報/センサーデータを取得し、データをアップロードし、「1回押す」イベントを即座にトリガーします。</td><td colspan="1">LEDが2秒間点灯</td><td colspan="1">データが正常にアップロードされるとビープ音が鳴ります。</td></tr>
<tr><td colspan="1">Bluetoothペアリングがオンの場合、1回押すとBluetoothをオフにできます。</td><td colspan="1">LEDがオフになります</td><td colspan="1">なし</td></tr>
<tr><td colspan="1" rowspan="3">連続して2回押す</td><td colspan="1">SOSがシングルショットモードに設定されている場合、ボタンをダブルクリックするとシングルショットSOSモードがアクティブになり、位置情報/センサーデータとSOSイベントを1回アップロードします。</td><td colspan="1">音と共に点滅</td><td colspan="1">3秒間のアラーム音</td></tr>
<tr><td colspan="1">SOSが連続モードに設定されている場合、ボタンをダブルクリックすると連続SOSモードがアクティブになります。位置情報、センサーデータ、SOSイベントが1分ごとに1回アップロードされ、30回後にモードが自動的に終了します。</td><td colspan="1">音と共に点滅</td><td colspan="1">連続アラーム音</td></tr>
<tr><td colspan="1">2回ダブルクリックしてSOSモードを終了</td><td colspan="1">なし</td><td colspan="1">なし</td></tr>
</table>

:::info 注意

- 使用しない場合は、デバイスの電源を切ることをお勧めします。
- 初回電源投入時は、GPSが衛星経由で時刻を更新する必要があるため、屋外でのテストをお勧めします。
- 周波数帯域がゲートウェイの周波数と一致していることを確認してください。
:::

## はじめに

### SenseCAP Mate アプリに接続

- **ステップ 1**: SenseCAP Mate アプリをダウンロード

SenseCAP Mate アプリは、LoRa パラメータの設定、間隔の設定、デバイスのアカウントへのバインド、デバイスの基本情報の確認に使用されます。

- iOS の場合は、App Store で「SenseCAP Mate」を検索してダウンロードしてください。
- Android の場合は、Google Store で「SenseCAP Mate」を検索してダウンロードしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2**: デバイスを追加

SenseCAP Mate アプリにログインします。
右上の「Add Device」タブをクリックし、デバイスラベルの QR コードをスキャンします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config.png" alt="pir" width={800} height="auto" /></p>

ボタンを 3 秒間押し、SN でデバイスを選択します。

2 つの設定モードがあります：

- **クイック設定**：クイックスタートの場合、基本パラメータのクイック設定を選択できます
- **詳細設定**: より多くのパラメータを設定するには、以下の手順を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setup.png" alt="pir" width={500} height="auto" /></p>

### クイック設定

クイック設定では、以下のパラメータのみを設定する必要があります：

- **周波数**：ゲートウェイと同じである必要があります。
- **アップリンク間隔**: 定期モード（デフォルトモード）のアップリンク間隔。「ユーザー」ページの「デバイス Bluetooth 設定」で他のモードを設定できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/advanced1.png" alt="pir" width={500} height="auto" /></p>

トラッカーは LoRaWAN ネットワークへの参加を試行し、ネットワークへの参加を試行中は呼吸ライトが点滅し、ネットワークに正常に参加すると軽快なメロディーと共に素早く点滅します。

### 詳細設定

- ボタンを押して 3 秒間保持して電源を入れ、Bluetooth ペアリングが自動的に有効になります。ユーザーはアプリを使用してスキャンして接続できます。
- アプリを開いて「Tracker T1000」をクリックします。「Setup」を選択してトラッカーを設定します。
- S/N でデバイスを選択します（S/N はデバイスのラベルに記載されています）。入力後、センサーの基本情報が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_3.png" alt="pir" width={800} height="auto" /></p>

「Measure」をクリックすると、センサー値が取得されます：

|温度|範囲: -20 to 60℃; 精度: ± 1℃(最小 0.5℃, 最大 1℃); 分解能: 0.1℃|
| - | - |
|光|0 to 100%, (0% は暗い、100% は最も明るい)|

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_4.png" alt="pir" width={500} height="auto" /></p>

#### LoRa パラメータ設定

トラッカーは、1 つの SKU で 863MHz～928MHz のユニバーサル周波数プランをサポートするように製造されています。すべてのデバイスは 7 つの周波数プランをサポートできます。

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
    <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCA 屋外ゲートウェイ</span></a><br />
    <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCA 屋内ゲートウェイ</span></a></td>
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
    <td>デバイスを TTN(TTS) サーバーに接続</td>
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
    <td>周波数プラン</td>
    <td>EU868 / US915 / AU915 / KR920 / IN865 / AS923-1 / AS923-2 / AS923-3 / AS923-4</td>
    <td>デフォルト EU868</td>
    </tr>
        <tr>
    <td>パケットポリシー</td>
    <td>1C</td>
    <td>LoRaWAN は確認パケットを使用</td>
    </tr>
            <tr>
    <td>LoRaWAN ADR</td>
    <td>デフォルトで有効</td>
    <td>LoRaWAN パラメータ、デフォルトで有効にすることを推奨</td>
    </tr>
            <tr>
    <td>LoRa 設定の復元</td>
    <td>「プラットフォーム」が他のプラットフォームから SenseCAP に戻る場合、LoRa パラメータ（EUI/App EUI/ App Key など）を復元する必要があります</td>
    <td>LoRa パラメータを工場出荷時のデフォルトに復元する必要がある場合に、この機能を使用できます</td>
    </tr>
  </tbody>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_5.png" alt="pir" width={800} height="auto" /></p>

センサーは2つのネットワークアクセスモードをサポートしており、デフォルトはOTAAです。

|**パラメータ**|**説明**|
| - | - |
|OTAA (デフォルト)|Over The Air Activation、Device EUI、App EUI、App Keyを通じてネットワークに参加します。|
|ABP|Activation By Personalization、DevAddr、NwkSkey、AppSkeyを通じてネットワークに参加します。|

デバイスはデフォルトでOTAAを使用してLoRaWANネットワークに参加します。そのため、Device EUI、App EUI、App Keyを設定できます。

|**パラメータ**|**タイプ**|
| - | - |
|Device EUI|<a name="ole_link10"></a>16桁、0～Fの16進数|
|App EUI|16桁、0～Fの16進数|
|App Key|32桁、0～Fの16進数|

:::info Note
SenseCAP プラットフォームを使用する場合、EUI、APP EUI、APP Key は固定されており、センサーラベルと同じです。<br />
センサーが Helium や TTN などのパブリックプラットフォームでの使用を選択した場合、EUI は変更されず、センサーはネットワークアクセス用の新しい固定 App EUI と App Key を生成します。<br />
EUI 情報を一括で取得するには、営業チームにお問い合わせください。
:::

<table>
<tr><th colspan="1" valign="top"><b>周波数</b></th><th colspan="1" valign="top"><b>一般名</b></th><th colspan="2" valign="top"><b>サブバンド</b></th></tr>
<tr><td colspan="1"><a name="ole_link14"></a>EU863-870</td><td colspan="1">EU868</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">US902-928</td><td colspan="1">US915</td><td colspan="1">サブバンド1～8（デフォルトサブバンド2）</td></tr>
<tr><td colspan="1">AU915-928</td><td colspan="1">AU915</td><td colspan="1">サブバンド1～8（デフォルトサブバンド2）</td></tr>
<tr><td colspan="1">KR920-923</td><td colspan="1">KR920</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">IN865-867</td><td colspan="1">IN865</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">AS923-1-TTN</td><td colspan="1">AS1</td><td colspan="1">TTN用周波数プラン</td></tr>
<tr><td colspan="1">AS923-2-TTN</td><td colspan="1">AS2</td><td colspan="1">TTN用周波数プラン</td></tr>
<tr><td colspan="1" rowspan="4">AS923</td><td colspan="1">AS923-1</td><td colspan="1" rowspan="4">Helium用周波数プラン</td></tr>
<tr><td colspan="1">AS923-2</td></tr>
<tr><td colspan="1">AS923-3</td></tr>
<tr><td colspan="1">AS923-4</td></tr>
</table>

:::info Note
異なる国やLoRaWANネットワークサーバーは異なる周波数プランを使用します。<br />
Heliumネットワークについては、以下を参照してください：[Helium-frequency-plans](https://docs.helium.com/lorawan-on-helium/frequency-plans)<br />
The Things Networkについては、以下を参照してください：[TTN-frequency-plans](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/)
:::

#### 動作モード設定

ニーズに応じて動作モードを設定してください。

<table>
<tr><th colspan="1"><b>パラメータ</b></th><th colspan="1"><b>説明</b></th><th colspan="1"></th></tr>
<tr><td colspan="1">ハートビート間隔</td><td colspan="1">ハートビート間隔内にデバイスからデータがアップロードされない場合、ハートビートパケットがトリガーされます。このパケットにはバッテリー情報のみが含まれます。</td><td colspan="1">デフォルト720分。</td></tr>
<tr><td colspan="1">温度・光センサー有効化</td><td colspan="1">このスイッチをオンにすると、温度と光が収集・アップロードされますが、消費電力が増加します。</td><td colspan="1">デフォルトでオフ。</td></tr>
<tr><td colspan="1" rowspan="2">SOSレポートモード</td><td colspan="1">シングル</td><td colspan="1"><a name="ole_link7"></a>SOSがシングルモードに設定されている場合、ボタンをダブルクリックするとワンショットSOSモードが有効になり、位置/センサーデータとSOSイベントを1回アップロードします</td></tr>
<tr><td colspan="1">連続</td><td colspan="1"><p>デフォルトで連続を使用。</p><p>SOSが連続モードに設定されている場合、ボタンをダブルクリックするとSOSの連続モードが開き、1分間隔で位置、センサーデータ、SOSイベントをアップロードし、30回後に自動終了します</p></td></tr>
<tr><td colspan="1" rowspan="3">動作モード</td><td colspan="1">スタンバイモード</td><td colspan="1">ハートビート間隔に基づいてハートビートパケット（バッテリーレベルのみ）をアップロードします。</td></tr>
<tr><td colspan="1">定期モード</td><td colspan="1">アップロード間隔に従って位置とセンサーデータがアップロードされます。</td></tr>
<tr><td colspan="1">イベントモード</td><td colspan="1"><a name="ole_link15"></a>温度、光、動きなどの測定値に応じて閾値トリガー条件を設定し、トリガー後のアップロード間隔を調整します。</td></tr>
<tr><td colspan="1">アップリンク間隔（分）– 定期モード</td><td colspan="1">定期的に位置を特定してデータをアップロードします。</td><td colspan="1"><p>デフォルト60分。</p><p>頻度が高いほど、消費電力が高くなります。</p></td></tr>
<tr><td colspan="1">すべての設定を復元</td><td colspan="1">LoRa、動作モード、位置情報を含むすべての設定パラメータを工場出荷時設定に復元します。</td><td colspan="1"></td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode.png" alt="pir" width={800} height="auto" /></p>

イベントモードには、5つのイベントがあります：

<table>
<tr><th><b>イベントモード</b></th><th><b>説明</b></th><th></th></tr>
<tr><td>アップリンク間隔 – 非イベント（分）</td><td><a name="ole_link16"></a>これは、イベントがトリガーされていない時のアップロード間隔です。</td><td><p>デフォルト60分。</p><p>範囲：1~10080分。</p></td></tr>
<tr><td rowspan="2">衝撃イベント</td><td>衝撃イベントが有効になっている場合、トラッカーの衝撃により、衝撃イベント、位置、センサーデータを含むデータレポートがトリガーされます。</td><td>デフォルトでオフ。</td></tr>
<tr><td>3軸モーション閾値（mg）</td><td>デフォルトは300。加速度が300mgを超えると、衝撃イベントがトリガーされます。</td></tr>
<tr><td rowspan="3">モーションイベント</td><td>加速度が設定値を超えると、デバイスが動き始め、2分間動きがない場合、デバイスの動きが停止します。動き開始と動き停止に応じてアップロード間隔を設定します。</td><td>デフォルトでオフ。</td></tr>
<tr><td>3軸モーション閾値（mg）</td><td>デフォルトは30。加速度が30mgを超えると、デバイスが動いていると判定し、この値を2分間下回ると、デバイスが静止していると判定します。</td></tr>
<tr><td>動作中のアップリンク間隔（分）</td><td>デバイスが動作中の現在の状態でのアップロード間隔を設定します。</td></tr>
<tr><td rowspan="2">静止イベント</td><td>デバイスが一定時間以上ある場所で静止している場合、静止タイムアウトイベントがトリガーされます。</td><td></td></tr>
<tr><td>静止タイムアウト（分）</td><td>デフォルトは360分。</td></tr>
<tr><td rowspan="4">温度イベント</td><td>温度イベントが有効になっている場合、温度に基づいてアップロード間隔を設定できます。</td><td>例：アップリンク間隔=10、値≥30、温度が30°Cより高い場合、デバイスは10分間隔で位置をアップロードします。</td></tr>
<tr><td>サンプル間隔（秒）</td><td><p>デフォルト30秒。</p><p>30秒ごとに温度が検出されます。閾値がトリガーされると、位置とセンサーデータをアップロードします。</p></td></tr>
<tr><td>アップリンク間隔（分）</td><td>温度が閾値を超えると、この間隔に従って位置とセンサーデータがアップロードされます。</td></tr>
<tr><td>値ルール</td><td>4つの閾値ルールのうち1つを設定できます。</td></tr>
<tr><td rowspan="3">光イベント</td><td>光イベントが有効になっている場合、温度に基づいてアップロード間隔を設定できます。</td><td>例：アップリンク間隔=10、値≥30、温度が30%より高い場合、デバイスは10分間隔で位置をアップロードします。</td></tr>
<tr><td>アップリンク間隔（分）</td><td>光が閾値を超えると、この間隔に従って位置とセンサーデータがアップロードされます。</td></tr>
<tr><td>値ルール</td><td>4つの閾値ルールのうち1つを設定できます。</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode2.png" alt="pir" width={800} height="auto" /></p>

#### 位置情報モードの設定

トラッカーは、GNSS、Wi-Fi、Bluetoothによる測位をサポートしています。

- **GNSS**: GPSやその他の衛星測位により経度と緯度を直接取得し、LoRa経由でデータをアップロードします。
- **Wi-Fi**: パッシブスキャンを行い、スキャンした4つのMACアドレスをLoRa経由でアップロードします。
- **BLE**: スキャンしたBeaconの最良信号3つのMACアドレスをLoRa経由でアップロードします。

<table>
<tr><th colspan="1"><b>位置情報</b></th><th colspan="1"><b>説明</b></th><th colspan="1"></th></tr>
<tr><td colspan="1" rowspan="8">位置情報戦略</td><td colspan="1">GNSSのみ</td><td colspan="1"><p>デフォルトでGNSSを使用。</p><p>測位にはGNSSのみを使用します。</p></td></tr>
<tr><td colspan="1">Wi-Fiのみ</td><td colspan="1">測位にはWi-Fiスキャンのみを使用します。</td></tr>
<tr><td colspan="1">Wi-Fi+GNSS</td><td colspan="1">GNSSよりもWi-Fiを優先使用。Wi-Fiが失敗した場合、1つの位置情報サイクル内でGNSSを使用します。</td></tr>
<tr><td colspan="1">GNSS + Wi-Fi</td><td colspan="1">Wi-FiよりもGNSSを優先使用。GNSSが失敗した場合、1つの位置情報サイクル内でWi-Fiを使用します。</td></tr>
<tr><td colspan="1">Bluetoothのみ</td><td colspan="1">測位にはBluetoothスキャンのみを使用します。</td></tr>
<tr><td colspan="1">Bluetooth + Wi-Fi</td><td colspan="1">Wi-FiよりもBluetoothを優先使用。Bluetoothが失敗した場合、1つの位置情報サイクル内でWi-Fiを使用します。</td></tr>
<tr><td colspan="1">Bluetooth + GNSS</td><td colspan="1">GNSSよりもBluetoothを優先使用。Bluetoothが失敗した場合、1つの位置情報サイクル内でGNSSを使用します。</td></tr>
<tr><td colspan="1">Bluetooth + Wi-Fi + GNSS </td><td colspan="1">Bluetooth、Wi-Fi、GNSSを順番に測位に使用します（1つの測位タイプが失敗した後、次のタイプの測位に切り替え）</td></tr>
<tr><td colspan="1">GNSSタイムアウト</td><td colspan="1"><p>GNSSが粗い位置測位を取得するまでの</p><p>最大待機時間</p></td><td colspan="1"><p>デフォルトは60秒。</p><p>変更は推奨されません。時間が長いほど消費電力が大きくなります。</p></td></tr>
<tr><td colspan="1"><a name="ole_link17"></a>GNSSデータキャッシュ</td><td colspan="1">LoRa経由でデータをアップロードできない場合、データはローカルに保存され、LoRa信号が回復したときにアップロードされます。</td><td colspan="1">デフォルトではオフ。</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/mode3.png" alt="pir" width={500} height="auto" /></p>

すべてのパラメータが設定されたら、「Send」をクリックします。
パラメータを変更する必要がない場合は、Bluetooth設定を終了し、ホームページに戻ります。この時点で、デバイスはLoRaネットワークアクセス要求を開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/send.png" alt="pir" width={400} height="auto" /></p>

### デバイスデータ表示

#### SenseCAP Mate App

アプリで位置情報を確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_view.png" alt="pir" width={800} height="auto" /></p>

#### SenseCAP Portal

SenseCAP Portalの主な機能は、SenseCAPデバイスを管理し、データを保存することです。これはMicrosoftの安全で信頼性の高いクラウドサービスであるAzure上に構築されています。ユーザーはアカウントを申請し、すべてのデバイスをこのアカウントにバインドできます。SenseCAP Portalは、WebポータルとAPIを提供します。WebポータルにはDashboard、Device Management、Data Management、Access Key Managementが含まれます。APIは、さらなる開発のためにユーザーに公開されています。

- **Dashboard:** Device Overview、Announcement、Scene Data、Data Chartなどが含まれます。
- **Device Management:** SenseCAPデバイスを管理します。
- **Data Management:** Data TableとGraphセクションを含むデータを管理し、データを検索する方法を提供します。
- **Subaccount System:** 異なる権限を持つサブアカウントを登録します。
- **Access Key Management:** Access Key（APIサービスにアクセスするため）を管理し、Key Create、Key Update、Key Checkが含まれます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### デバイスデータ表示

[SenseCAP Portal](http://sensecap.seeed.cc)にログインします

アプリでアカウントを作成している場合は、直接ログインできます。

1) アカウント登録を選択し、メール情報を入力して「register」をクリックすると、登録メールがユーザーのメールボックスに送信されます

2) 「SenseCAP…」メールを開き、ジャンプリンクをクリックして、関連情報を入力し、登録を完了します

3) ログイン画面に戻り、ログインを完了します

詳細については、[SenseCAP Portal User Guide](https://sensecap-docs.seeed.cc/quickstart.html)を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## SenseCAP API

SenseCAP APIは、ユーザーがIoTデバイスとデータを管理するためのものです。HTTPプロトコル、MQTTプロトコル、Websocketプロトコルの3種類のAPIメソッドが含まれます。

- HTTP APIを使用すると、ユーザーはLoRaデバイスを管理し、生データや履歴データを取得できます。
- MQTT APIを使用すると、ユーザーはMQTTプロトコルを通じてセンサーのリアルタイム測定データを購読できます。
- Websocket APIを使用すると、ユーザーはWebsocketプロトコルを通じてセンサーのリアルタイム測定データを取得できます。

詳細については、[API User Guide](https://sensecap-docs.seeed.cc/)を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>
