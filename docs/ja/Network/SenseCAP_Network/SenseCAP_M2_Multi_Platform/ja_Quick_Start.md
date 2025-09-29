---
description: Quick_Start
title: クイックスタート
keywords:
- gateway
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/quick_start_with_M2_MP
last_update:
  date: 9/26/2023
  author: Jessie
---


## POE接続

SenseCAP M2はPoE（Power on Ethernet）をサポートし、IEEE 802.3 af標準に対応しています。

:::tip
お使いのモデム/ルーターがPoEをサポートしていない場合は、PSE（Power Sourcing Equipment）として40V-57V DC電源を提供する追加のPoEスイッチが必要になります。
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-poe.png" alt="pir" width={800} height="auto" /></p>

## ゲートウェイネットワーク設定

アンテナと電源アダプターをゲートウェイに接続します。
電源LEDが赤色で表示され、約15秒後に上部のインジケーターが緑色に点滅し、ゲートウェイが起動中であることを示します。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-1.png" alt="pir" width={800} height="auto" /></p>

インターネットに接続する方法は2つあります。適切な方法を選択してください。

### イーサネット接続

イーサネットケーブルをイーサネットポートに接続し、ゲートウェイがインターネットに正常に接続されると、上部のインジケーターが緑色の点灯状態になります。

### WIFI接続

ユーザーがLuci設定ページにログインする方法は2つあります。

#### ルーター経由でのアクセス

- ステップ1：デバイスをイーサネットケーブルに接続し、PCを同じルーターに接続します。

:::note PCとデバイスは同じルーター/ネットワークに接続されている必要があります。
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3.png" alt="pir" width={800} height="auto" /></p>

- ステップ2：デバイスのIPアドレスを取得します

ルーターの管理ページでデバイスのIPアドレスを確認します。

- ステップ3：デバイスのユーザー名とパスワードを取得します

ユーザー名とパスワードはデバイスのラベルで確認できます。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

- ステップ4：Luciにログインします

ブラウザでデバイスのIPアドレスを入力してLuciページに入ります。
次に、デバイスのユーザー名とパスワードを入力してログインします。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/login.png" alt="pir" width={800} height="auto" /></p>

#### デバイスAPホットスポット経由でのアクセス

- ステップ1：デバイスAPホットスポットをオンにします。

青色インジケーターがゆっくり点滅するまでボタンを5秒間押して、設定モードに入ります。

- ステップ2：APホットスポットに接続します。
APホットスポット名はSenseCAP_XXXXXX（6桁のMACアドレス）、デフォルトパスワードは12345678です。コンピューターをこのAPホットスポットに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wifi.png" alt="pir" width={400} height="auto" /></p>

- ステップ3：デバイスのユーザー名とパスワードを取得します

ユーザー名とパスワードはデバイスのラベルで確認できます。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

- ステップ4：ローカルコンソールにログインします

ブラウザでIPアドレス（192.168.168.1）を入力してローカルコンソールに入ります。次に、デバイスのユーザー名とパスワードを入力し、ログインボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-login.png" alt="pir" width={800} height="auto" /></p>

#### WIFIへの接続

- ステップ1：`Network` - `Wireless`をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless.png" alt="pir" width={800} height="auto" /></p>

- ステップ2：`Scan`ボタンをクリックしてWIFIをスキャンします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless2.png" alt="pir" width={800} height="auto" /></p>

- ステップ3：ネットワークに参加するWI-FIを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless3.png" alt="pir" width={800} height="auto" /></p>

- ステップ4：Wi-Fiパスワードを入力し、`Submit`をクリックしてSaveします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless4.png" alt="pir" width={800} height="auto" /></p>

次に、Save and Applyをクリックして設定を適用します。

ゲートウェイがWIFIに正常に接続されると、上部のインジケーターが緑色の点灯状態になります。

### セルラー接続（4Gバージョン用）

- ステップ1：SIMカードをNano-SIMカードスロットに挿入します

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/%E6%8F%92%E5%9B%BE-01.jpg" alt="pir" width={666} height="auto" /></p>

- ステップ2：Luciページにログインし、`Network` - `Cellular`をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g1.png" alt="pir" width={800} height="auto" /></p>

- ステップ3：APN情報を設定し、`Save and Apply`をクリックして設定を適用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g3.png" alt="pir" width={800} height="auto" /></p>

:::tip
データ消費量を削減するには、[低データ消費モード設定](https://wiki.seeedstudio.com/ja/traffic_saving_config)をご確認ください。
:::

### チャンネルプラン設定

`LoRa` > `Channel Plan`に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP3.png" alt="pir" width={800} height="auto" /></p>

地域と周波数プランを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP4.png" alt="pir" width={800} height="auto" /></p>

設定後、`Save&Apply`をクリックします。

### ゲートウェイ接続状態の確認

ゲートウェイの電源を入れた後、ゲートウェイの動作状態を確認する方法は2つあります：

#### LEDインジケーター

<table>
<tr><th colspan="2" valign="top"><b>モード</b></th><th colspan="1" valign="top"><b>説明</b></th></tr>
<tr><td colspan="1" rowspan="2" valign="top"><p></p><p></p><p>緑色</p></td><td colspan="1" valign="top">点灯</td><td colspan="1" valign="top">ゲートウェイは正常で、インターネットが正常に接続されています。</td></tr>
<tr><td colspan="1" valign="top">ゆっくり点滅</td><td colspan="1" valign="top">ゲートウェイが起動中です。お待ちください。</td></tr>
<tr><td colspan="1" rowspan="3" valign="top"><p></p><p></p><p></p><p></p><p>青色</p></td><td colspan="1" valign="top"><p></p><p>点灯</p></td><td colspan="1" valign="top"><p>ゲートウェイはインターネット接続の準備ができています。</p><p>さらなる設定が必要です。</p></td></tr>
<tr><td colspan="1" valign="top">ゆっくり点滅</td><td colspan="1" valign="top">設定モードで、アクティビティがない場合は5分後に自動終了します。</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>速い点滅</p></td><td colspan="1" valign="top">インジケーターが速い点滅を表示するまでボタンを30秒間押すと、工場出荷時設定にリセットされます。</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>オレンジ色</p></td><td colspan="1" valign="top"><p></p><p>ゆっくり点滅</p></td><td colspan="1" valign="top">ファームウェアが更新中です。ゲートウェイの電源を切ったり、インターネットを切断したりしないでください。</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>白色</p></td><td colspan="1" valign="top"><p></p><p>点灯</p></td><td colspan="1" valign="top">ゲートウェイは工場出荷時のファームウェアのみで、インターネットに接続されると自動的に最新のファームウェアに更新されます。</td></tr>
<tr><td colspan="1" rowspan="2" valign="top"><p></p><p>赤色</p></td><td colspan="1" valign="top">点灯</td><td colspan="1" valign="top">ハードウェアの問題またはインターネット接続の失敗。</td></tr>
<tr><td colspan="1" valign="top">ゆっくり点滅</td><td colspan="1" valign="top">ゲートウェイがLNSに接続されていません。</td></tr>
</table>

#### SenseCAP Mate APP

SenseCAP Mate Appでは、ゲートウェイがネットワークに接続されている場合、`Online status`が`Online`と表示されます。
SenseCAP Appの入手については、次の章を参照してください。

## ゲートウェイをバインドする

SenseCAP Mate APPはデバイス設定とリモート管理をサポートしています。

- ステップ1：SenseCAP Mate APPをダウンロードする

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

- ステップ2：APPにログインする
SenseCAPプラットフォームを初めて使用する場合は、まずアカウントを登録してください。

:::tip
Server LocationはGlobalを選択してください。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app-register.png" alt="pir" width={500} height="auto" /></p>

- ステップ3：デバイスを追加する

右上の`+`をクリックしてAdd deviceを選択します
次に、ゲートウェイラベルのQRコードをスキャンします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

デバイス名と場所を設定します。次に設定を確認します。
バインドが成功すると、Deviceディレクトリにゲートウェイが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app3.png" alt="pir" width={380} height="auto" /></p>

## SenseCAPセンサーを接続する

- ステップ1：デバイスを追加する

右上の`+`をクリックしてAdd deviceを選択します
次に、ゲートウェイラベルのQRコードをスキャンします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

- ステップ2：周波数プランを選択する

`Settings`をクリックし、プラットフォームと周波数を設定します。周波数はゲートウェイの周波数と一致させる必要があります。

例：ゲートウェイがUS915バージョンの場合、センサーをUS915周波数に設定する必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app7.png" alt="pir" width={500} height="auto" /></p>

:::tip
SenseCAP M2 Multi-Platform GatewayはHeliumネットワークに接続できません。
:::

SenseCAPセンサーの詳細な設定については、SenseCAP Sensorsを参照してください。

## SenseCAP PortalとMate APP

SenseCAP Mate APPとSenseCAP Portalは、デバイスの状態確認とデバイス管理に使用できます。

- [App StoreのSenseCAP Mate APP for iOS](https://apps.apple.com/cn/app/sensecap-mate/id1619944834)
- [Google Play StoreのSenseCAP Mate APP for Android](https://install.appcenter.ms/orgs/seeed/apps/sensecap-mate/distribution_groups/public)
- [SenseCAP Portal](https://sensecap.seeed.cc/portal/)

### ゲートウェイ情報

SenseCAP PortalとSenseCAP Mate APPでゲートウェイ情報を確認する

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app8.png" alt="pir" width={700} height="auto" /></p>

### センサーデータ

SenseCAP PortalとSenseCAP Mate APPでセンサーデータを確認する

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app9.png" alt="pir" width={700} height="auto" /></p>
