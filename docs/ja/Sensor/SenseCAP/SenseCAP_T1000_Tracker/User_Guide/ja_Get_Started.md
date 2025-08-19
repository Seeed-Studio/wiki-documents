---
description: SenseCAP T1000 トラッカーのセットアップ方法
title: クイックスタート
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Get_Started_with_SenseCAP_T1000_tracker
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

この章では、SenseCAP Mate APP を使用して SenseCAP T1000 トラッカーをセットアップする方法を説明します。

<center><iframe width="666" height="360" src="https://www.youtube.com/embed/NBSr06NXC7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/products/SenseCAP/T1000_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide_v1.2.pdf" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> ユーザーガイド </font></span></strong>
    </a>
</div>

## デバイス機能

### 動作モード

異なるシナリオに対応するために、SenseCAP T1000 トラッカーにはいくつかの異なる動作モードがあり、ニーズに応じて選択できます。

|**動作モード**|**説明**|**シーン**|
| - | - | - |
|スタンバイモード|<p>ハートビートパケットのみがアップロードされ、バッテリー情報のみが含まれます。</p><p>位置情報は LoRa ダウンリンクコマンドを使用して取得できます。</p>|デバイスを長時間位置特定する必要があり、充電前にデバイスが長時間動作できる場合、クラウドプラットフォームが位置特定要求コマンドを発行してデバイスを位置特定できます。|
|周期モード|デバイスが位置情報とセンサーのデータを定期的にアップロードする間隔を設定します。|ほとんどのシナリオで推奨されるモードです。|
|イベントモード|トラッカーの温度、光、加速度センサーに応じてアップロード間隔を調整します。これには、温度イベント、光イベント、動作イベント、静止タイムアウト、衝撃イベントが含まれます。|重要なアイテムの輸送を監視するなど、複雑なシナリオで使用できます。ただし、消費電力が大幅に増加します。|

### センサー機能

SenseCAP T1000 トラッカーには、温度センサー、光センサー、3軸加速度計の3つのセンサーが搭載されています。これらのセンサーを有効または無効にすることができます：

* すべてのセンサーをオフにすることができますが、コストを削減するためにセンサーなしのバージョンを選択することもできます。
* 温度センサーと光センサーのみを有効にして、低消費電力でデータを定期的に監視します。
* 温度、照度、加速度計をトリガー条件として使用する場合、センサーは常に電源がオンになり、デバイスは多くの電力を消費します。

|**センサー**|**説明**|
| - | - |
|温度|<p>これは独立したオンボード温度センサーで、**±0.5~1℃の精度**を持っています。ここでは、シェルから分離されているため、温度測定に遅延が生じる可能性があることに注意してください。</p><p>範囲: -20～60℃; 精度: ±1℃(最小0.5℃、最大1℃); 解像度: 0.1℃</p>|
|光|<p>光センサーは実際のルーメン値を監視するものではなく、暗から明までの光の割合を示します。主に防破壊監視や光感知監視に使用できます。</p><p>範囲: 0～100% (0%は暗、100%は最も明るい)</p>|
|3軸加速度計|加速度の値を設定することで、動作イベントや衝撃イベントがトリガーされます。|

### データキャッシュ

デバイスはデータをキャッシュすることができ、Bluetooth設定を通じて「GNSSデータキャッシュ」を開くことで有効にできます。デバイスは確認パケットをアップロードします。LoRaWAN信号のカバー範囲が弱い場合やネットワークカバーがない場合、デバイスがデータをアップロードする際に確認応答を受信できません。この場合、データは保存され、次のサイクルに入ります。デバイスがある時点でデータを正常にアップロードすると、オフラインデータが送信されます。キャッシュできるデータの最大数は1000件です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### ボタン機能

<table>
<tr><th colspan="1"><a name="_hlk134103971"></a><b>アクション</b></th><th colspan="1"><b>説明</b></th><th colspan="1"><b>LEDステータス</b></th><th colspan="1"><b>ブザー</b></th></tr>
<tr><td colspan="1" rowspan="2">ボタンを押して3秒間保持</td><td colspan="1">トラッカーが電源オフの場合、ボタンを3秒間押し続けると電源がオンになります。Bluetoothペアリングが自動的にアクティブになり、ユーザーはアプリを使用してスキャンして接続できます。</td><td colspan="1">LEDが1秒ごとに点滅します。</td><td colspan="1">上昇のメロディ</td></tr>
<tr><td colspan="1">デバイスが電源オンの場合、ボタンを3秒間押し続けるとBluetoothペアリングがアクティブになります。</td><td colspan="1">LEDが1秒ごとに点滅します。</td><td colspan="1">なし</td></tr>
<tr><td colspan="1">ボタンを押して9秒間保持</td><td colspan="1">電源オフ。</td><td colspan="1">なし</td><td colspan="1">下降のメロディ</td></tr>
<tr><td colspan="1">LoRaネットワークに参加</td><td colspan="1">Bluetooth設定を終了した後、LoRaWANネットワークに参加を試みます。</td><td colspan="1">ネットワークにアクセスしようとするときは呼吸ライトが点滅し、ネットワークに成功した場合は速く点滅します。</td><td colspan="1">ネットワークに成功した場合は速くて陽気なメロディ</td></tr>
<tr><td colspan="1" rowspan="2">1回押す</td><td colspan="1">位置情報/センサーデータを取得し、データをアップロードして「1回押す」イベントを即座にトリガーします。</td><td colspan="1">LEDが2秒間明るくなります。</td><td colspan="1">データが正常にアップロードされると音が鳴ります。</td></tr>
<tr><td colspan="1">Bluetoothペアリングがオンの場合、1回押すとBluetoothをオフにできます。</td><td colspan="1">LEDが消灯します。</td><td colspan="1">なし</td></tr>
<tr><td colspan="1" rowspan="3">2回連続で押す</td><td colspan="1">SOSが単発モードに設定されている場合、ボタンを2回押すと単発SOSモードがアクティブになり、位置情報/センサーデータとSOSイベントが1回アップロードされます。</td><td colspan="1">音とともに点滅</td><td colspan="1">3秒間の警告音</td></tr>
<tr><td colspan="1">SOSが連続モードに設定されている場合、ボタンを2回押すと連続SOSモードがアクティブになります。位置情報、センサーデータ、SOSイベントが1分ごとに1回アップロードされ、30回後にモードが自動的に終了します。</td><td colspan="1">音とともに点滅</td><td colspan="1">一定の警告音</td></tr>
<tr><td colspan="1">2回連続で押してSOSモードを終了</td><td colspan="1">なし</td><td colspan="1">なし</td></tr>
</table>

:::info 注意
* 使用しない場合は、デバイスの電源を切ることをお勧めします。
* 初めて電源を入れる際は、GPSが衛星を通じて時間を更新する必要があるため、屋外でテストすることをお勧めします。
* 周波数帯がゲートウェイの周波数と一致していることを確認してください。
:::

## はじめに

### SenseCAP Mate アプリに接続する

* **ステップ 1**: SenseCAP Mate アプリをダウンロードする

SenseCAP Mate アプリは、LoRaパラメータの設定、間隔の調整、デバイスをアカウントにバインドする、デバイスの基本情報を確認するために使用されます。

* iOSの場合、App Storeで「SenseCAP Mate」を検索してダウンロードしてください。
* Androidの場合、Google Storeで「SenseCAP Mate」を検索してダウンロードしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 2**: デバイスを追加する

SenseCAP Mate アプリにログインします。
右上の「Add Device」タブをクリックし、デバイスラベルのQRコードをスキャンします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config.png" alt="pir" width={800} height="auto" /></p>

ボタンを3秒間押し続け、SNでデバイスを選択します。

2つの設定モードがあります：

* **クイック設定**: 基本的なパラメータを迅速に設定するためのモード
* **詳細設定**: より多くのパラメータを設定する場合は、以下の手順を参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setup.png" alt="pir" width={500} height="auto" /></p>

### クイック設定

クイック設定では、以下のパラメータのみを設定する必要があります：

* **周波数**: ゲートウェイと同じである必要があります。
* **アップリンク間隔**: 定期モード（デフォルトモード）のアップリンク間隔。他のモードは「User」ページの「Device Bluetooth Configuration」から設定できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/advanced1.png" alt="pir" width={500} height="auto" /></p>

トラッカーはLoRaWANネットワークへの接続を試みます。ネットワークに接続を試みている間は呼吸ライトが点滅し、ネットワークに正常に接続されるとライトが速く点滅し、明るく楽しいメロディーが流れます。

### 詳細設定

* ボタンを3秒間押し続けて電源を入れると、自動的にBluetoothペアリングがオンになります。アプリを使用してスキャンし、接続できます。
* アプリを開き、「Tracker T1000」をクリックします。「Setup」を選択してトラッカーを設定します。
* デバイスをS/Nで選択します（S/Nはデバイスのラベルに記載されています）。入力後、センサーの基本情報が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_3.png" alt="pir" width={800} height="auto" /></p>

「Measure」をクリックすると、センサー値が取得できます：

|温度|範囲: -20～60℃; 精度: ±1℃（最小0.5℃、最大1℃）; 解像度: 0.1℃|
| - | - |
|光|0～100%（0%は暗闇、100%は最も明るい）|

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_4.png" alt="pir" width={500} height="auto" /></p>

#### LoRaパラメータ設定

トラッカーは、1つのSKUで863MHz～928MHzのユニバーサル周波数プランをサポートするように製造されています。各デバイスは7つの周波数プランをサポートできます。

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
SenseCAP Gatewayと一緒に使用する必要があります。SenseCAPは独自のTTNサーバーを構築しており、SenseCAP Gatewayとペアリングすることでセンサーをすぐに使用できます。<br />
    <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCA Outdoor Gateway</span></a><br />
    <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCA Indoor Gateway</span></a></td>
    </tr>
        <tr>
    <td>SenseCAP for Helium</td>
    <td>Heliumネットワークのカバレッジがある場合、データはHeliumを介してアップロードされます。デバイスはSenseCAPのプライベートHeliumコンソールで動作します。ユーザーはHeliumコンソールでデバイスを作成する必要がなく、SenseCAP Mate アプリとポータルで即座に使用できます。<br /><a href="https://explorer.helium.com/" target="_blank"><span>Helium カバレッジ</span></a></td>
    </tr>
        <tr>
    <td>Helium</td>
    <td>デバイスをパブリックHeliumコンソールに接続します</td>
    </tr>
            <tr>
    <td>The Things Network</td>
    <td>デバイスをTTN（TTS）サーバーに接続します</td>
    </tr>
            <tr>
    <td>その他のプラットフォーム</td>
    <td>その他のLoRaWANネットワークサーバー</td>
    </tr>
  </tbody></table>

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
    <td>LoRaWAN 確認パケットを使用</td>
    </tr>
            <tr>
    <td>LoRaWAN ADR</td>
    <td>デフォルトで有効</td>
    <td>LoRaWAN パラメータ、デフォルトで有効を推奨</td>
    </tr>
            <tr>
    <td>LoRa設定の復元</td>
    <td>「プラットフォーム」が他のプラットフォームからSenseCAPに戻る場合、LoRaパラメータ（EUI/App EUI/App Keyなど）を復元する必要があります</td>
    <td>LoRaパラメータを工場出荷時の設定に戻す必要がある場合にこの機能を使用できます</td>
    </tr>
  </tbody></table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_5.png" alt="pir" width={800} height="auto" /></p>

センサーは、デフォルトでOTAAを使用する2つのネットワークアクセスモードをサポートしています。

|**パラメータ**|**説明**|
| - | - |
|OTAA（デフォルト）|Over The Air Activation。Device EUI、App EUI、App Keyを使用してネットワークに参加します。|
|ABP|Activation By Personalization。DevAddr、NwkSkey、AppSkeyを使用してネットワークに参加します。|

デバイスはデフォルトで OTAA を使用して LoRaWAN ネットワークに参加します。そのため、デバイス EUI、App EUI、および App Key を設定できます。

|**パラメータ**|**タイプ**|
| - | - |
|Device EUI|<a name="ole_link10"></a>16桁、0 ～ F の16進数|
|App EUI|16桁、0 ～ F の16進数|
|App Key|32桁、0 ～ F の16進数|

:::info 注意
SenseCAP プラットフォームを使用する場合、EUI、APP EUI、および APP Key は固定されており、センサーラベルと同じです。<br />
センサーが Helium や TTN などの公共プラットフォームで使用される場合、EUI は変更されず、センサーはネットワークアクセス用に新しい固定の App EUI と App Key を生成します。<br />
EUI 情報を一括で取得するには、当社の営業チームにお問い合わせください。
:::

<table>
<tr><th colspan="1" valign="top"><b>周波数</b></th><th colspan="1" valign="top"><b>一般名</b></th><th colspan="1" valign="top"><b>サブバンド</b></th></tr>
<tr><td colspan="1"><a name="ole_link14"></a>EU863-870</td><td colspan="1">EU868</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">US902-928</td><td colspan="1">US915</td><td colspan="1">サブバンド 1 ～ 8（デフォルトはサブバンド 2）</td></tr>
<tr><td colspan="1">AU915-928</td><td colspan="1">AU915</td><td colspan="1">サブバンド 1 ～ 8（デフォルトはサブバンド 2）</td></tr>
<tr><td colspan="1">KR920-923</td><td colspan="1">KR920</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">IN865-867</td><td colspan="1">IN865</td><td colspan="1">--------</td></tr>
<tr><td colspan="1">AS923-1-TTN</td><td colspan="1">AS1</td><td colspan="1">TTN 用周波数プラン</td></tr>
<tr><td colspan="1">AS923-2-TTN</td><td colspan="1">AS2</td><td colspan="1">TTN 用周波数プラン</td></tr>
<tr><td colspan="1">AS923-1</td><td colspan="1">AS923-1</td><td colspan="1">Helium 用周波数プラン</td></tr>
<tr><td colspan="1">AS923-2</td><td colspan="1">AS923-2</td><td colspan="1">Helium 用周波数プラン</td></tr>
<tr><td colspan="1">AS923-3</td><td colspan="1">AS923-3</td><td colspan="1">Helium 用周波数プラン</td></tr>
<tr><td colspan="1">AS923-4</td><td colspan="1">AS923-4</td><td colspan="1">Helium 用周波数プラン</td></tr>
</table>

:::info 注意
異なる国や LoRaWAN ネットワークサーバーでは異なる周波数プランが使用されます。<br />
Helium ネットワークについては、こちらを参照してください：[Helium-frequency-plans](https://docs.helium.com/lorawan-on-helium/frequency-plans)<br />
The Things Network については、こちらを参照してください：[TTN-frequency-plans](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/)
:::

#### 動作モードの設定

必要に応じて動作モードを設定してください。

<table>
<tr><th colspan="1"><b>パラメータ</b></th><th colspan="1"><b>説明</b></th><th colspan="1"></th></tr>
<tr><td colspan="1">ハートビート間隔</td><td colspan="1">デバイスがハートビート間隔内にデータをアップロードしない場合、ハートビートパケットがトリガーされます。このパケットにはバッテリー情報のみが含まれます。</td><td colspan="1">デフォルトは 720 分。</td></tr>
<tr><td colspan="1">温度＆光の有効化</td><td colspan="1">このスイッチをオンにすると、温度と光が収集されてアップロードされますが、消費電力が増加します。</td><td colspan="1">デフォルトはオフ。</td></tr>
<tr><td colspan="1" rowspan="2">SOS レポートモード</td><td colspan="1">シングル</td><td colspan="1"><a name="ole_link7"></a>SOS がシングルモードに設定されている場合、ボタンをダブルクリックするとシングルショット SOS モードが有効になり、位置情報/センサーデータおよび SOS イベントが 1 回アップロードされます。</td></tr>
<tr><td colspan="1">連続</td><td colspan="1">デフォルトは連続モード。SOS が連続モードに設定されている場合、ボタンをダブルクリックすると SOS の連続モードが有効になり、1 分ごとに位置情報、センサーデータ、および SOS イベントがアップロードされ、30 回後に自動的に終了します。</td></tr>
<tr><td colspan="1" rowspan="3">動作モード</td><td colspan="1">スタンバイモード</td><td colspan="1">ハートビート間隔に基づいてハートビートパケット（バッテリーレベルのみ）をアップロードします。</td></tr>
<tr><td colspan="1">定期モード</td><td colspan="1">アップロード間隔に従って位置情報とセンサーデータをアップロードします。</td></tr>
<tr><td colspan="1">イベントモード</td><td colspan="1"><a name="ole_link15"></a>温度、光、動きなどの測定値に基づいて閾値トリガー条件を設定し、トリガー後にアップロード間隔を調整します。</td></tr>
<tr><td colspan="1">アップリンク間隔（分）– 定期モード</td><td colspan="1">定期的に位置情報とデータをアップロードします。</td><td colspan="1">デフォルトは 60 分。頻度が高いほど消費電力が増加します。</td></tr>
<tr><td colspan="1">すべての設定を復元</td><td colspan="1">すべての構成パラメータを工場出荷時の設定に復元します。LoRa、動作モード、ジオロケーションを含みます。</td><td colspan="1"></td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode.png" alt="pir" width={800} height="auto" /></p>

イベントモードでは、以下の 5 つのイベントがあります：

<table>
<tr><th><b>イベントモード</b></th><th><b>説明</b></th><th><b>詳細</b></th></tr>
<tr><td>アップリンク間隔 – 非イベント（分）</td><td><a name="ole_link16"></a>イベントがトリガーされていない場合のアップロード間隔です。</td><td>デフォルトは 60 分。範囲：1～10080 分。</td></tr>
<tr><td rowspan="2">衝撃イベント</td><td>衝撃イベントが有効になっている場合、トラッカーの衝撃がデータレポートをトリガーし、衝撃イベント、位置情報、センサーデータを含みます。</td><td>デフォルトはオフ。</td></tr>
<tr><td>3 軸モーション閾値（mg）</td><td>デフォルトは 300。加速度が 300mg を超えると衝撃イベントがトリガーされます。</td></tr>
<tr><td rowspan="3">モーションイベント</td><td>加速度が設定値を超えるとデバイスが動き始め、2 分間動きがない場合、デバイスの動きが停止します。開始動作と停止動作に応じてアップロード間隔を設定します。</td><td>デフォルトはオフ。</td></tr>
<tr><td>3 軸モーション閾値（mg）</td><td>デフォルトは 30。加速度が 30mg を超えるとデバイスが動作中と判断され、2 分間この値を下回ると動作なしと判断されます。</td></tr>
<tr><td>動作中のアップリンク間隔（分）</td><td>デバイスが動作中の現在の状態に対するアップロード間隔を設定します。</td></tr>
<tr><td rowspan="2">動作なしイベント</td><td>デバイスが一定時間以上同じ場所に静止している場合、静止タイムアウトイベントがトリガーされます。</td><td></td></tr>
<tr><td>動作なしタイムアウト（分）</td><td>デフォルトは 360 分。</td></tr>
<tr><td rowspan="4">温度イベント</td><td>温度イベントが有効になっている場合、温度に基づいてアップロード間隔を設定できます。</td><td>例：アップリンク間隔=10、値≥30 の場合、温度が 30°C を超えると、デバイスは 10 分間隔で位置情報をアップロードします。</td></tr>
<tr><td>サンプル間隔（秒）</td><td>デフォルトは 30 秒。30 秒ごとに温度を検出します。閾値がトリガーされると、位置情報とセンサーデータをアップロードします。</td></tr>
<tr><td>アップリンク間隔（分）</td><td>温度が閾値を超えた場合、この間隔に従って位置情報とセンサーデータをアップロードします。</td></tr>
<tr><td>値ルール</td><td>4 つの閾値ルールのいずれかを設定できます。</td></tr>
<tr><td rowspan="3">光イベント</td><td>光イベントが有効になっている場合、温度に基づいてアップロード間隔を設定できます。</td><td>例：アップリンク間隔=10、値≥30 の場合、温度が 30% を超えると、デバイスは 10 分間隔で位置情報をアップロードします。</td></tr>
<tr><td>アップリンク間隔（分）</td><td>光が閾値を超えた場合、この間隔に従って位置情報とセンサーデータをアップロードします。</td></tr>
<tr><td>値ルール</td><td>4 つの閾値ルールのいずれかを設定できます。</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/work_mode2.png" alt="pir" width={800} height="auto" /></p>

#### ジオロケーションモード設定

トラッカーは GNSS、Wi-Fi、Bluetooth を使用した位置測定をサポートしています。

- **GNSS**: GPSやその他の衛星測位を通じて経度と緯度を直接取得し、LoRaを介してデータをアップロードします。
- **Wi-Fi**: パッシブスキャンを行い、スキャンされた4つのMACアドレスをLoRaを介してアップロードします。
- **BLE**: Beaconの最良の信号を持つ3つのMACアドレスをLoRaを介してアップロードします。

<table>
<tr><th colspan="1"><b>ジオロケーション</b></th><th colspan="1"><b>説明</b></th><th colspan="1"></th></tr>
<tr><td colspan="1" rowspan="8">ジオロケーション戦略</td><td colspan="1">GNSSのみ</td><td colspan="1">デフォルトでGNSSを使用します。位置測定にはGNSSのみを使用します。</td></tr>
<tr><td colspan="1">Wi-Fiのみ</td><td colspan="1">位置測定にはWi-Fiスキャンのみを使用します。</td></tr>
<tr><td colspan="1">Wi-Fi+GNSS</td><td colspan="1">Wi-FiをGNSSの前に使用します。Wi-Fiが失敗した場合、1つのジオロケーションサイクル内でGNSSを使用します。</td></tr>
<tr><td colspan="1">GNSS + Wi-Fi</td><td colspan="1">GNSSをWi-Fiの前に使用します。GNSSが失敗した場合、1つのジオロケーションサイクル内でWi-Fiを使用します。</td></tr>
<tr><td colspan="1">Bluetoothのみ</td><td colspan="1">位置測定にはBluetoothスキャンのみを使用します。</td></tr>
<tr><td colspan="1">Bluetooth + Wi-Fi</td><td colspan="1">BluetoothをWi-Fiの前に使用します。Bluetoothが失敗した場合、1つのジオロケーションサイクル内でWi-Fiを使用します。</td></tr>
<tr><td colspan="1">Bluetooth + GNSS</td><td colspan="1">BluetoothをGNSSの前に使用します。Bluetoothが失敗した場合、1つのジオロケーションサイクル内でGNSSを使用します。</td></tr>
<tr><td colspan="1">Bluetooth + Wi-Fi + GNSS</td><td colspan="1">Bluetooth、Wi-Fi、GNSSを順番に使用して位置測定を行います（1つの測位タイプが失敗した後に次の測位タイプに切り替えます）。</td></tr>
<tr><td colspan="1">GNSSタイムアウト</td><td colspan="1">粗い位置を取得するためにGNSSを待機する最大時間</td><td colspan="1">デフォルトは60秒です。変更は推奨されません。時間が長くなるほど、消費電力が増加します。</td></tr>
<tr><td colspan="1"><a name="ole_link17"></a>GNSSデータキャッシュ</td><td colspan="1">LoRaを介してデータをアップロードできない場合、データはローカルに保存され、LoRa信号が回復した際にアップロードされます。</td><td colspan="1">デフォルトではオフです。</td></tr>
</table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/mode3.png" alt="pir" width={500} height="auto" /></p>

すべてのパラメータが設定された後、「送信」をクリックします。
変更する必要のあるパラメータがない場合は、Bluetooth設定を終了し、ホームページに戻ります。この時点で、デバイスはLoRaネットワークアクセス要求を開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/send.png" alt="pir" width={400} height="auto" /></p>

### デバイスデータビュー

#### SenseCAP Mate アプリ

アプリで位置情報を確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_view.png" alt="pir" width={800} height="auto" /></p>

#### SenseCAP ポータル

SenseCAP ポータルの主な機能は、SenseCAP デバイスの管理とデータの保存です。これはMicrosoftの安全で信頼性の高いクラウドサービスであるAzure上に構築されています。ユーザーはアカウントを申請し、すべてのデバイスをこのアカウントに紐付けることができます。SenseCAP ポータルはウェブポータルとAPIを提供します。ウェブポータルにはダッシュボード、デバイス管理、データ管理、アクセスキー管理が含まれています。APIはユーザーがさらなる開発を行うために公開されています。

- **ダッシュボード:** デバイス概要、通知、シーンデータ、データチャートなどを含みます。
- **デバイス管理:** SenseCAP デバイスを管理します。
- **データ管理:** データを管理し、データテーブルやグラフセクションを含み、データ検索方法を提供します。
- **サブアカウントシステム:** 異なる権限を持つサブアカウントを登録します。
- **アクセスキー管理:** APIサービスにアクセスするためのアクセスキーを管理し、キーの作成、更新、確認を行います。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### デバイスデータビュー

[SenseCAP ポータル](http://sensecap.seeed.cc) にログインします。

アプリを通じてアカウントを作成した場合は、直接ログインできます。

1) アカウント登録を選択し、メール情報を入力して「登録」をクリックします。登録メールがユーザーのメールボックスに送信されます。

2) "SenseCAP…"メールを開き、ジャンプリンクをクリックして関連情報を記入し、登録を完了します。

3) ログイン画面に戻り、ログインを完了します。

詳細については、[SenseCAP ポータルユーザーガイド](https://sensecap-docs.seeed.cc/quickstart.html) を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## SenseCAP API

SenseCAP API は、IoTデバイスとデータを管理するためのものです。以下の3種類のAPIメソッドが含まれています：HTTPプロトコル、MQTTプロトコル、Websocketプロトコル。
* HTTP APIを使用すると、LoRaデバイスを管理し、生データや履歴データを取得できます。
* MQTT APIを使用すると、MQTTプロトコルを介してセンサーのリアルタイム測定データを購読できます。
* Websocket APIを使用すると、Websocketプロトコルを介してセンサーのリアルタイム測定データを取得できます。

詳細については、[APIユーザーガイド](https://sensecap-docs.seeed.cc/)をご確認ください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>