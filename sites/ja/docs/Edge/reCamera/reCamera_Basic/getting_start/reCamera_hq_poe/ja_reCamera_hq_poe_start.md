---
description: reCamera HQ POE を使い始める
title: reCamera HQ POE クイックスタートガイド
keywords:
  - Edge
  - reCamera
  - reCamera HQ POE
  - POE
  - HQ
  - M12
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_hq_poe_getting_started
sku: 100018917, 100041077, 100029708, 100074316
sidebar_position: 1
last_update:
  date: 09/25/2025
  author: Parker Hu
createdAt: '2023-02-16'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/reCamera/reCamera_Basic/getting_start/recamera_hq_poe_getting_started/
---
# reCamera HQ POE クイックスタートガイド

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" /></div>

## はじめに

reCamera HQ POE へようこそ！reCamera 2002 HQ PoE は、高度な CMOS センサーを搭載しており、よりシャープでクリアな画像を実現します。M12 レンズマウントを備えているため、標準レンズを任意の互換性のある 2MP M12 レンズに柔軟に交換できます。また PoE（Power over Ethernet）にも対応しており、別途 USB/DC 電源は不要で、PoE スイッチに 1 本の Ethernet ケーブルを接続するだけで電源とデータ通信が行えます。

このガイドでは、デバイスをすばやくセットアップし、強力な AI ビジョン機能を使い始めるまでの手順を説明します。初心者の方でも経験豊富なユーザーの方でも、このステップバイステップの手順に従うことで、インストール、設定、初回利用までをスムーズに進めることができます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱</font></span></strong>
    </a>
</div>
## 開封

まず reCamera HQ POE を開封します。箱の中には次のものが入っているはずです：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/6-100029708-reCamera-2002-HQ-PoE-8GB.jpg" /></div>

- reCamera HQ POE
- ユーザーマニュアル（同梱）
- USB Type C（[購入リンク](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)）
- Ethernet ケーブル

### デバイスのセットアップとログイン

**Step1:** reCamera HQ POE から PC に USB ケーブルを接続します。ブラウザで `192.168.42.1` にアクセスし、デフォルトパスワードを変更します。POE Ethernet を使用している場合は、ルーターから割り当てられた IP アドレスを確認してアクセスします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_1.png" /></div>

:::note
パスワードは必ず控えておいてください。忘れてしまうと、デバイスをリセットする際にすべてのログが消去されます。パスワードを忘れてしまった場合は、[ファクトリーリセット](https://wiki.seeedstudio.com/ja/recamera_getting_started/#ファクトリーリセット)を実行してください。
:::

:::note
デフォルトのユーザー名とパスワードはどちらも `recamera` です。ファクトリーリセットを実行した場合や、新品（未設定）のデバイスを使用している場合は、このユーザー名とパスワードを使用してください。
:::

**Step2:** reCamera から PC に USB ケーブルを接続すると、**192.168.42.1** にアクセスして reCamera のロードページを表示できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

Ethernet ポートを使用したい場合は、同梱のデータケーブルをルーターに接続できます。デバイスは **PoE（Power over Ethernet）** のみで給電可能です。カメラ背面のネジを外し、ポートに接続してください。

接続後、ルーターの管理画面で **reCamera の IP アドレス** を確認し、そこから **Web インターフェース** と **Node-RED プラットフォーム** にアクセスできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

**Step3:** reCamera HQ POE のプレビューダッシュボードが表示されます。ここでダッシュボード上の各種コントロールを使って、reCamera の機能を体験できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-1.png" /></div>

## 基本的な Web アクセス

Web URL：

- プレビューページ: ip_address/#/dashboard
- ホームページ: ip_address/#/init
- ワークスペース: ip_address/#/workspace
- ネットワーク設定: ip_address/#/network
- セキュリティ: ip_address/#/security
- ターミナル: ip_address/#/terminal
- システム: ip_address/#/system
- 電源: ip_address/#/power
- 元の Node-RED: ip_address:1880

### reCamera HQ POE ダッシュボードのクイックスタート

**Step1:** **192.168.42.1** から Web ページにアクセスすると、**ライブプレビュー画面** に入ります。

**Step2:** ``IoU`` と ``Confidence`` のしきい値を調整して、より正確な結果を得ることができます。

- IoU=0,Confidence=0:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25,Confidence=33:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

#### AI モデルパラメータ

**Confidence**: YOLO モデルにおける Confidence は、予測されたバウンディングボックスに物体が含まれている確率と、その予測の正確さを表します。0 から 100 の値を取ります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_confidence.png" /></div>

**Intersection over Union (IoU)**: IoU は、予測されたバウンディングボックスと正解のバウンディングボックスの重なり具合を評価する指標です。2 つのボックスの交差領域の面積を、それらの和集合領域の面積で割った比として計算されます。IoU の値は通常 0 から 1 の範囲ですが、ここでは 0〜100 のスケールに標準化しています。IoU 値が 0 の場合は予測ボックスと正解ボックスがまったく重ならないことを意味し、100 の場合は 2 つのボックスが完全に一致していることを意味します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_iou.png" /></div>

### reCamera HQ POE ダッシュボードフローのクイックスタート

ダッシュボードが Node-RED ノードでどのように構成されているか知りたい場合は、右下隅をクリックするか、`ip_address/#/workspace` にアクセスして Gimbal の Node-RED ワークスペースを開きます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-2.png" /></div>

すると、デフォルトの gimbal ダッシュボードフローが表示されます。各ノードをダブルクリックすると、そのノードの詳細を確認できます。ダッシュボードフローは次のような構成になります：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-3.png" /></div>

**モデル設定**:

- スライダーノードを使って、YOLO AI モデルの IoU（Intersection over Union）と Confidence のしきい値を調整できます。

**ダッシュボード UI 表示**:

- UI テンプレートノードは、現在のモデル設定を示すテキストを表示します。
- また、カメラからの base64 画像をレンダリングし、YOLO が検出した物体の検出ボックスを含めて表示します。

**Basic Web Iframe サブフロー**:

- iframe サブフローは、ネットワーク設定、システム情報、デバイス情報などの基本的な Web ページを表示します。
- これらは複数のノードでページをレンダリングするため、CPU リソースを消費する場合があります。不要な場合は削除して構いません。

## クラウド管理とバックアップの適用

新しいアプリケーションを作成したり、アプリケーションを SenseCraft クラウドサービスに保存したい場合は、左下から sensecraft アカウントにログインし、+ アイコンをクリックして新しいアプリケーションを追加します。その後、フローの作成を開始できます。

新しいアプリケーションを作成したり、アプリケーションを SenseCraft クラウドサービスに保存したい場合は、左下から sensecraft アカウントにログインし、`+` アイコンをクリックして新しいアプリケーションを追加します。その後、フローの作成を開始できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_7.png" /></div>

[reCamera - SenseCraft AI](https://sensecraft.seeed.cc/ai/#/recamera) からアプリを閲覧および管理できます。

:::note

プラットフォーム経由でログインしてアプリケーションを同期するには、事前にアカウント登録が必要です。

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_14.png" /></div>

## ポート一覧

以下は reCamera Gimbal で使用されるポートの一覧です：

- **Port 22**: リモート SSH ログインに使用され、クローズ状態です。
- **Port 53**: DNS ドメイン名解決に関連し、Web リダイレクトに不可欠です。デフォルトでオープンです。
- **Port 80**: Node-RED アプリケーションを HTTP で表示する Web ダッシュボードインターフェースとして機能します。
- **Port 554**: RTSP ビデオストリーミングに使用されます。
- **Port 9090**: Web ターミナルアクセス用で、ログインにはパスワードが必要です。
- **Port 1880**: Node-RED の動作専用ポートです。

## OTA OS アップグレード

[OTA アップグレード手順](https://wiki.seeedstudio.com/ja/recamera_getting_started/#ota-アップグレード-from-013-to-latest-version)を参照してください。

## ファクトリーリセット

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-4.jpg" /></div>

デバイスのパスコードを忘れてしまったなどの理由でデバイスをリセットしたい場合は、**User** ボタンを長押ししたままデバイスに電源を接続します。デバイスの `red light` が点滅ではなく **点灯し続ける** 状態になったら、User ボタンを離します。

## リソース

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
