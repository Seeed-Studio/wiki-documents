---
description: クイックスタート
title: クイックスタート
keywords:
  - gateway
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /quick_start_with_M2_MP
last_update:
  date: 9/26/2023
  author: Jessie
createdAt: '2023-09-26'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/ja/quick_start_with_M2_MP/
---


## POE 接続

SenseCAP M2 は PoE（Power on Ethernet）をサポートしており、IEEE 802.3 af 規格と互換性があります。

:::tip
お使いのモデム/ルーターが PoE をサポートしていない場合は、PSE（Power Sourcing Equipment）として 40V〜57V DC 電源を供給する追加の PoE スイッチが必要です。
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-poe.png" alt="pir" width={800} height="auto" /></p>

## ゲートウェイのネットワーク設定

アンテナと電源アダプターをゲートウェイに接続します。
電源 LED が赤く点灯し、約 15 秒後に上部のインジケーターが緑色に点滅して、ゲートウェイが起動中であることを示します。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-1.png" alt="pir" width={800} height="auto" /></p>

インターネットに接続する方法は 2 通りあります。ご利用環境に合った方法を選択してください。

### Ethernet 接続

Ethernet ケーブルを Ethernet ポートに接続すると、ゲートウェイがインターネットに正常に接続されている場合、上部のインジケーターが緑色で点灯します。

### WIFI 接続

Luci 設定ページにログインする方法は 2 通りあります。

#### ルーター経由でアクセス

- ステップ 1: デバイスを Ethernet ケーブルに接続し、PC を同じルーターに接続します

:::note
 PC とデバイスは同じルーター/ネットワークに接続されている必要があります。
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3.png" alt="pir" width={800} height="auto" /></p>

- ステップ 2: デバイスの IP アドレスを取得する

ルーターの管理ページでデバイスの IP アドレスを確認します。

- ステップ 3: デバイスのユーザー名とパスワードを取得する

ユーザー名とパスワードはデバイスのラベルに記載されています。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

- ステップ 4: Luci にログインする

ブラウザにデバイスの IP アドレスを入力して、Luci ページにアクセスします。
その後、デバイスのユーザー名とパスワードを入力してログインします。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/login.png" alt="pir" width={800} height="auto" /></p>

#### デバイスの AP ホットスポット経由でアクセス

- ステップ 1: デバイスの AP ホットスポットをオンにする

ボタンを 5 秒間押し続け、青色のインジケーターがゆっくり点滅し始めたら、設定モードに入ります。

- ステップ 2: AP ホットスポットに接続する
AP ホットスポット名は SenseCAP_XXXXXX（6 桁の MAC アドレス）、デフォルトパスワードは 12345678 です。PC をこの AP ホットスポットに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wifi.png" alt="pir" width={400} height="auto" /></p>

- ステップ 3: デバイスのユーザー名とパスワードを取得する

ユーザー名とパスワードはデバイスのラベルに記載されています。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

- ステップ 4: ローカルコンソールにログインする

ブラウザに IP アドレス（192.168.168.1）を入力してローカルコンソールにアクセスします。その後、デバイスのユーザー名とパスワードを入力し、Login ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-login.png" alt="pir" width={800} height="auto" /></p>

#### WIFI に接続する

- ステップ 1: `Network` - `Wireless` をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless.png" alt="pir" width={800} height="auto" /></p>

- ステップ 2: `Scan` ボタンをクリックして WIFI をスキャンします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless2.png" alt="pir" width={800} height="auto" /></p>

- ステップ 3: 自分の WI-FI を選択してネットワークに参加します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless3.png" alt="pir" width={800} height="auto" /></p>

- ステップ 4: Wi-Fi パスワードを入力し、`Submit` をクリックしてから Save をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless4.png" alt="pir" width={800} height="auto" /></p>

その後、Save and Apply をクリックして設定を適用します

ゲートウェイが WIFI に正常に接続されると、上部のインジケーターが緑色で点灯します

### セルラー接続（4G バージョン用）

- ステップ 1: Nano-SIM カードスロットに SIM カードを挿入します

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/%E6%8F%92%E5%9B%BE-01.jpg" alt="pir" width={666} height="auto" /></p>

- ステップ 2: Luci ページにログインし、`Network` - `Cellular` をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g1.png" alt="pir" width={800} height="auto" /></p>

- ステップ 3: APN 情報を設定し、`Save and Apply` をクリックして設定を適用します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g3.png" alt="pir" width={800} height="auto" /></p>

:::tip
データ使用量を削減するには、[Low Data Consumption Mode Config](https://wiki.seeedstudio.com/ja/traffic_saving_config) を確認してください。
:::

### チャネルプラン設定

`LoRa` > `Channel Plan` に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP3.png" alt="pir" width={800} height="auto" /></p>

Region と Frequency プランを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP4.png" alt="pir" width={800} height="auto" /></p>

設定後、`Save&Apply` をクリックします。

### ゲートウェイ接続ステータスの確認

ゲートウェイの電源投入後、ゲートウェイの動作状態を確認する方法は 2 通りあります。

#### LED インジケーター

<table>
<tr><th colspan="2" valign="top"><b>モード</b></th><th colspan="1" valign="top"><b>説明</b></th></tr>
<tr><td colspan="1" rowspan="2" valign="top"><p></p><p></p><p>緑</p></td><td colspan="1" valign="top">点灯</td><td colspan="1" valign="top">ゲートウェイは正常で、インターネットに問題なく接続されています。</td></tr>
<tr><td colspan="1" valign="top">ゆっくり点滅</td><td colspan="1" valign="top">ゲートウェイが起動中です。しばらくお待ちください。</td></tr>
<tr><td colspan="1" rowspan="3" valign="top"><p></p><p></p><p></p><p></p><p>青</p></td><td colspan="1" valign="top"><p></p><p>点灯</p></td><td colspan="1" valign="top"><p>ゲートウェイはインターネット接続の準備ができています。</p><p>さらに設定が必要です。</p></td></tr>
<tr><td colspan="1" valign="top">ゆっくり点滅</td><td colspan="1" valign="top">設定モードであり、操作がない場合は 5 分後に自動的に終了します。</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>高速点滅</p></td><td colspan="1" valign="top">ボタンを 30 秒間押し続けてインジケーターが高速点滅すると、ファクトリーリセットが実行されます。</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>オレンジ</p></td><td colspan="1" valign="top"><p></p><p>ゆっくり点滅</p></td><td colspan="1" valign="top">ファームウェアを更新中です。ゲートウェイの電源を切ったり、インターネット接続を切断したりしないでください。</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>白</p></td><td colspan="1" valign="top"><p></p><p>点灯</p></td><td colspan="1" valign="top">ゲートウェイには工場出荷時のファームウェアのみが搭載されており、インターネットに接続されると自動的に最新のファームウェアに更新されます。</td></tr>
<tr><td colspan="1" rowspan="2" valign="top"><p></p><p>赤</p></td><td colspan="1" valign="top">点灯</td><td colspan="1" valign="top">ハードウェアの問題またはインターネット接続の失敗。</td></tr>
<tr><td colspan="1" valign="top">ゆっくり点滅</td><td colspan="1" valign="top">ゲートウェイが LNS に接続されていません。</td></tr>
</table>

#### SenseCAP Mate APP

SenseCAP Mate App では、ゲートウェイがネットワークに接続されているとき、`Online status` が `Online` を示します。
SenseCAP App の入手方法については、次の章を参照してください。

## ゲートウェイをバインドする

SenseCAP Mate APP はデバイスの設定とリモート管理をサポートします。

- ステップ 1: SenseCAP Mate APP をダウンロードする

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

- ステップ 2: APP にログインする
初めて SenseCAP プラットフォームを使用する場合は、まずアカウントを登録してください。

:::tip
Server Location では Global を選択してください。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app-register.png" alt="pir" width={500} height="auto" /></p>

- ステップ 3: デバイスを追加する

右上の `+` をクリックし、Add device を選択します
その後、ゲートウェイラベル上の QR コードをスキャンします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

デバイス名と場所を設定し、設定を確定します。
バインドに成功すると、デバイス一覧にゲートウェイが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app3.png" alt="pir" width={380} height="auto" /></p>

## SenseCAP センサーを接続する

- ステップ 1: デバイスを追加する

右上の `+` をクリックし、Add device を選択します
その後、ゲートウェイラベル上の QR コードをスキャンします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

- ステップ 2: 周波数プランを選択する

`Settings` をクリックし、プラットフォームと周波数を設定します。周波数はゲートウェイの周波数と一致させる必要があります。

例: ゲートウェイが US915 バージョンの場合、センサーも US915 周波数に設定する必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app7.png" alt="pir" width={500} height="auto" /></p>

:::tip
SenseCAP M2 Multi-Platform Gateway は Helium ネットワークには接続できません。
:::

SenseCAP センサーのさらなる設定については、SenseCAP Sensors を参照してください

## SenseCAP ポータルと Mate アプリ

SenseCAP Mate APP と SenseCAP Portal を使用して、デバイスのステータス確認やデバイス管理を行うことができます。

- [SenseCAP Mate APP for iOS on App Store](https://apps.apple.com/cn/app/sensecap-mate/id1619944834)
- [SenseCAP Mate APP for Android on the Google Play Store](https://install.appcenter.ms/orgs/seeed/apps/sensecap-mate/distribution_groups/public)
- [SenseCAP Portal](https://sensecap.seeed.cc/portal/)

### ゲートウェイ情報

SenseCAP Portal と SenseCAP Mate APP でゲートウェイ情報を確認します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app8.png" alt="pir" width={700} height="auto" /></p>

### センサーデータ

SenseCAP Portal と SenseCAP Mate APP でセンサーデータを確認します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app9.png" alt="pir" width={700} height="auto" /></p>
