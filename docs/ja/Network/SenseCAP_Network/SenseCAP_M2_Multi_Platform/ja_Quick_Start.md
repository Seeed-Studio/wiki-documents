---
description: クイックスタート
title: クイックスタート
keywords:
- ゲートウェイ
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/quick_start_with_M2_MP
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## POE接続

SenseCAP M2はPoE（Power on Ethernet）をサポートしており、IEEE 802.3 af標準に対応しています。

:::tip
モデム/ルーターがPoEをサポートしていない場合は、40V-57V DC電力を供給するPSE（Power Sourcing Equipment）として機能する追加のPoEスイッチが必要です。
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-poe.png" alt="pir" width={800} height="auto" /></p>

## ゲートウェイネットワーク設定

アンテナと電源アダプタをゲートウェイに接続します。電源LEDが赤く点灯し、約15秒後に上部のインジケータが緑色に点滅し、ゲートウェイが起動中であることを示します。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-1.png" alt="pir" width={800} height="auto" /></p>

インターネットに接続する方法は2つあります。自分に合った方法を選択してください。

### イーサネット接続

イーサネットケーブルをイーサネットポートに接続します。ゲートウェイがインターネットに正常に接続されると、上部のインジケータが緑色に点灯します。

### WIFI接続

Luci設定ページにログインする方法は2つあります。

#### ルーター経由でアクセス

* ステップ1: デバイスをイーサネットケーブルに接続し、PCを同じルーターに接続します。

:::note
PCとデバイスは同じルーター/ネットワークに接続されている必要があります。
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3.png" alt="pir" width={800} height="auto" /></p>

* ステップ2: デバイスのIPアドレスを取得する

ルーターの管理ページでデバイスのIPアドレスを確認します。

* ステップ3: デバイスのユーザー名とパスワードを取得する

デバイスラベルにユーザー名とパスワードが記載されています。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

* ステップ4: Luciにログインする

ブラウザにデバイスのIPアドレスを入力してLuciページにアクセスします。その後、デバイスのユーザー名とパスワードを入力してログインします。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/login.png" alt="pir" width={800} height="auto" /></p>

#### デバイスのAPホットスポット経由でアクセス

* ステップ1: デバイスのAPホットスポットをオンにする

ボタンを5秒間押し続けると、青色のインジケータがゆっくり点滅し、設定モードに入ります。

* ステップ2: APホットスポットに接続する

APホットスポット名はSenseCAP_XXXXXX（6桁のMACアドレス）で、デフォルトのパスワードは12345678です。PCをこのAPホットスポットに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wifi.png" alt="pir" width={400} height="auto" /></p>

* ステップ3: デバイスのユーザー名とパスワードを取得する

デバイスラベルにユーザー名とパスワードが記載されています。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

* ステップ4: ローカルコンソールにログインする

ブラウザにIPアドレス（192.168.168.1）を入力してローカルコンソールにアクセスします。その後、デバイスのユーザー名とパスワードを入力し、ログインボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-login.png" alt="pir" width={800} height="auto" /></p>

#### WIFIに接続する

* ステップ1: `Network` - `Wireless`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless.png" alt="pir" width={800} height="auto" /></p>

* ステップ2: `Scan`ボタンをクリックしてWIFIをスキャンします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless2.png" alt="pir" width={800} height="auto" /></p>

* ステップ3: 接続するWIFIを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless3.png" alt="pir" width={800} height="auto" /></p>

* ステップ4: WIFIパスワードを入力し、`Submit`をクリックして保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless4.png" alt="pir" width={800} height="auto" /></p>

その後、`Save and Apply`をクリックして設定を適用します。

ゲートウェイがWIFIに正常に接続されると、上部のインジケータが緑色に点灯します。

### セルラー接続（4Gバージョンの場合）

* ステップ1: Nano-SIMカードスロットにSIMカードを挿入します。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/%E6%8F%92%E5%9B%BE-01.jpg" alt="pir" width={666} height="auto" /></p>

* ステップ2: Luciページにログインし、`Network` - `Cellular`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g1.png" alt="pir" width={800} height="auto" /></p>

* ステップ3: APN情報を設定し、`Save and Apply`をクリックして設定を適用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g3.png" alt="pir" width={800} height="auto" /></p>

:::tip
データ消費を抑えるために、[低データ消費モード設定](https://wiki.seeedstudio.com/ja/traffic_saving_config)を確認してください。
:::

### チャネルプラン設定

`LoRa` > `Channel Plan`に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP3.png" alt="pir" width={800} height="auto" /></p>

地域と周波数プランを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP4.png" alt="pir" width={800} height="auto" /></p>

設定後、`Save&Apply`をクリックします。

### ゲートウェイ接続ステータスの確認

ゲートウェイの電源を入れた後、動作状況を確認する方法は2つあります。

#### LEDインジケータ

| 色 | モード | 説明 |
|---|---|---|
| 緑 | 点灯 | ゲートウェイは正常で、インターネットに正常に接続されています。 |
| 緑 | ゆっくり点滅 | ゲートウェイが起動中です。お待ちください。 |
| 青 | 点灯 | ゲートウェイはインターネット接続の準備ができています。さらなる設定が必要です。 |
| 青 | ゆっくり点滅 | 設定モードで、5分間操作がない場合は自動的に終了します。 |
| 青 | 高速点滅 | ボタンを30秒間押し続けると、インジケータが高速点滅し、工場出荷時設定にリセットされます。 |
| オレンジ | ゆっくり点滅 | ファームウェアを更新中です。ゲートウェイの電源を切ったり、インターネット接続を切断しないでください。 |
| 白 | 点灯 | ゲートウェイは工場出荷時のファームウェアのみを搭載しており、インターネットに接続されると自動的に最新のファームウェアに更新されます。 |
| 赤 | 点灯 | ハードウェアの問題またはインターネット接続の失敗。 |
| 赤 | ゆっくり点滅 | ゲートウェイがLNSに接続されていません。 |

#### SenseCAP Mate アプリ

SenseCAP Mate アプリでは、ゲートウェイがネットワークに接続されている場合、`オンラインステータス`が`オンライン`と表示されます。  
SenseCAP アプリの入手方法については、次の章を参照してください。

## ゲートウェイをバインドする

SenseCAP Mate アプリは、デバイスの設定およびリモート管理をサポートしています。

* ステップ 1: SenseCAP Mate アプリをダウンロードする

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

* ステップ 2: アプリにログインする  
初めて SenseCAP プラットフォームを使用する場合は、まずアカウントを登録してください。

:::tip
サーバーロケーションとして「Global」を選択してください。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app-register.png" alt="pir" width={500} height="auto" /></p>

* ステップ 3: デバイスを追加する  

右上の `+` をクリックし、「デバイスを追加」を選択します。  
次に、ゲートウェイラベル上の QR コードをスキャンします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

デバイス名と場所を設定し、設定を確認します。  
バインドが成功すると、デバイスディレクトリにゲートウェイが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app3.png" alt="pir" width={380} height="auto" /></p>

## SenseCAP センサーを接続する

* ステップ 1: デバイスを追加する  

右上の `+` をクリックし、「デバイスを追加」を選択します。  
次に、ゲートウェイラベル上の QR コードをスキャンします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

* ステップ 2: 周波数プランを選択する  

`設定` をクリックし、プラットフォームと周波数を設定します。周波数はゲートウェイの周波数と一致させる必要があります。

例: ゲートウェイが US915 バージョンの場合、センサーも US915 周波数に設定する必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app7.png" alt="pir" width={500} height="auto" /></p>

:::tip
SenseCAP M2 マルチプラットフォームゲートウェイは Helium ネットワークに接続できません。
:::

SenseCAP センサーに関する詳細な設定については、SenseCAP センサーを参照してください。

## SenseCAP ポータルと Mate アプリ

SenseCAP Mate アプリと SenseCAP ポータルを使用して、デバイスのステータス確認やデバイス管理を行うことができます。

* [iOS 用 SenseCAP Mate アプリ (App Store)](https://apps.apple.com/cn/app/sensecap-mate/id1619944834)
* [Android 用 SenseCAP Mate アプリ (Google Play ストア)](https://install.appcenter.ms/orgs/seeed/apps/sensecap-mate/distribution_groups/public)
* [SenseCAP ポータル](https://sensecap.seeed.cc/portal/)

### ゲートウェイ情報

SenseCAP ポータルおよび SenseCAP Mate アプリでゲートウェイ情報を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app8.png" alt="pir" width={700} height="auto" /></p>

### センサーデータ

SenseCAP ポータルおよび SenseCAP Mate アプリでセンサーデータを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app9.png" alt="pir" width={700} height="auto" /></p>