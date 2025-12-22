---
description: reCamera HQ POE の使用開始
title: クイックスタートガイド
keywords:
  - Edge
  - reCamera
  - reCamera HQ POE
  - POE
  - HQ
  - M12
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /ja/recamera_hq_poe_getting_started
sidebar_position: 1
last_update:
  date: 09/25/2025
  author: Parker Hu
---
# reCamera HQ POE 使用開始ガイド

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" /></div>

## はじめに

reCamera HQ POE へようこそ！reCamera 2002 HQ PoE は、より鮮明でクリアな画像を実現する高度な CMOS センサーを搭載しています。M12 レンズマウントを採用しており、デフォルトレンズを互換性のある 2MP M12 レンズに柔軟に交換できます。また、PoE（Power over Ethernet）をサポートしており、別途 USB/DC 電源は不要で、PoE スイッチへの Ethernet ケーブル 1 本で電源とデータの両方を供給できます。

このガイドでは、デバイスを素早くセットアップし、強力な AI-Vision 機能を活用するための使用開始方法をご案内します。初心者の方でも経験豊富なユーザーの方でも、このステップバイステップのウォークスルーが、インストール、設定、初回使用をガイドします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱</font></span></strong>
    </a>
</div>
## 開封

reCamera HQ POE を開封することから始めましょう。箱の中には以下が含まれています：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/6-100029708-reCamera-2002-HQ-PoE-8GB.jpg" /></div>

- reCamera HQ POE
- ユーザーマニュアル（箱の中）
- USB Type C（[購入リンク](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)）
- Ethernet ケーブル

### デバイスのセットアップとログイン

**ステップ1:** reCamera HQ POE から PC に USB ケーブルを接続します。ウェブサイトで `192.168.42.1` にアクセスし、デフォルトパスワードを変更してください。POE Ethernet を使用している場合は、ルーターから割り当てられた IP アドレスを確認してアクセスしてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_1.png" /></div>

:::note
パスワードを覚えておいてください。忘れた場合、デバイスをリセットするためにすべてのログが消去されます。パスワードを忘れた場合は、デバイスを[工場出荷時設定にリセット](https://wiki.seeedstudio.com/ja/recamera_getting_started/#factory-reset)してください。
:::

:::note
デフォルトのユーザー名とパスワードは両方とも `recamera` です。工場出荷時設定にリセットした場合や、新しい（未設定の）デバイスを使用している場合は、これらのユーザー名とパスワードを使用してください。
:::

**ステップ2:** reCamera から PC に USB ケーブルを接続すると、**192.168.42.1** にアクセスして reCamera の読み込みページを表示できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

Ethernet ポートを使用したい場合は、付属のデータケーブルをルーターに接続できます。デバイスは **PoE（Power over Ethernet）** のみで電源供給できます。カメラの背面のネジを外してポート経由で接続できます。

接続後、ルーターの管理パネルで **reCamera の IP アドレス** を確認し、**ウェブインターフェース** と **Node-RED プラットフォーム** にアクセスできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

**ステップ3:** reCamera HQ POE プレビューダッシュボードに移動し、ダッシュボードのコントロールを使用して reCamera の機能を体験できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-1.png" /></div>

## 基本的なウェブアクセス

ウェブ URL：

- プレビューページ：ip_address/#/dashboard
- ホームページ：ip_address/#/init
- ワークスペース：ip_address/#/workspace
- ネットワーク設定：ip_address/#/network
- セキュリティ：ip_address/#/security
- ターミナル：ip_address/#/terminal
- システム：ip_address/#/system
- 電源：ip_address/#/power
- オリジナル Node-RED：ip_address:1880

### reCamera HQ POE ダッシュボードでのクイックスタート

**ステップ1:** **192.168.42.1** 経由でウェブページにアクセスすると、**ライブプレビューインターフェース** に入ります。

**ステップ2:** ``IoU`` と ``Confidence`` の閾値を調整して、より正確な結果を得ることができます。

- IoU=0、Confidence=0：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25、Confidence=33：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

#### AI モデルパラメータ

**Confidence**：YOLO モデルにおける Confidence は、予測されたバウンディングボックスにオブジェクトが含まれている確率と、その予測の正確性を表します。これは 0 から 100 の間の値です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_confidence.png" /></div>

**Intersection over Union（IoU）**：IoU は、予測されたバウンディングボックスと正解のバウンディングボックス間の重複を評価するメトリクスです。これは、2 つのボックスの交差領域と結合領域の比率として計算されます。IoU の値は通常 0 から 1 の範囲です。私たちはこれを 0 - 100 のスケールに標準化しました。IoU 値 0 は、予測ボックスと正解ボックス間に重複がないことを表します。値 100 は完全一致を示し、2 つのボックスが完全に重複していることを意味します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_iou.png" /></div>

### reCamera HQ POE ダッシュボードフローでのクイックスタート

ダッシュボードが Node-RED ノードでどのように作成されているかを知りたい場合は、右下角をクリックするか、`ip_address/#/workspace` にアクセスして Gimbal の Node-RED ワークスペースにアクセスしてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-2.png" /></div>

すると、デフォルトの gimbal ダッシュボードフローが表示されます。各ノードをダブルクリックしてノードの詳細を表示できます。ダッシュボードフローは次のようになります：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-3.png" /></div>

**モデル設定**：

- スライダーノードを使用して、YOLO AI モデルの IoU（Intersection over Union）と信頼度閾値を調整できます。

**ダッシュボード UI 表示**：

- UI テンプレートノードは、現在のモデル設定を示すテキストを表示します。
- また、YOLO によって識別されたオブジェクトの検出ボックスを含む、カメラからの base64 画像をレンダリングします。

**基本ウェブ Iframe サブフロー**：

- iframe サブフローは、ネットワーク設定、システム情報、デバイス情報などの基本的なウェブページを表示します。
- これらは複数のノードでページをレンダリングするため CPU リソースを消費する可能性があることに注意してください。必要でない場合は削除できます。

## クラウド管理とバックアップの適用

新しいアプリケーションを作成したり、アプリケーションを SenseCraft クラウドサービスに保存したい場合は、左下で sensecraft アカウントにログインし、+ アイコンをクリックして新しいアプリケーションを追加できます。その後、フローの作業を開始できます。

新しいアプリケーションを作成したり、アプリケーションを SenseCraft クラウドサービスに保存したい場合は、左下で sensecraft アカウントにログインし、`+` アイコンをクリックして新しいアプリケーションを追加できます。その後、フローの作業を開始できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_7.png" /></div>

アプリを [reCamera - SenseCraft AI](https://sensecraft.seeed.cc/ai/#/recamera) で表示・管理できます。

:::note

プラットフォーム経由でログインしてアプリケーションを同期するには、事前にアカウントを登録する必要があります。

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_14.png" /></div>

## ポート一覧

以下は reCamera Gimbal で使用されるポートの一覧です：

- **ポート 22**：リモート SSH ログインに使用され、閉じられています。
- **ポート 53**：DNS ドメイン名解決に関連し、ウェブリダイレクションに不可欠です。デフォルトで開いています。
- **ポート 80**：Node-RED アプリケーションの HTTP 表示用ウェブダッシュボードインターフェースとして機能します。
- **ポート 554**：RTSP ビデオストリーミングに使用されます。
- **ポート 9090**：ウェブターミナルアクセス用で、ログインにパスワードが必要です。
- **ポート 1880**：Node-RED 操作専用です。

## OTA OS アップグレード

[OTA アップグレード手順](https://wiki.seeedstudio.com/ja/recamera_getting_started/#ota-upgrade-from-013-to-latest-version)を参照してください。

## 工場出荷時設定にリセット

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-4.jpg" /></div>

デバイスのパスコードを忘れた場合などでデバイスをリセットしたい場合は、**User** ボタンを長押ししてからデバイスを電源に接続してください。デバイスの `赤いライト` が点滅ではなく **常時点灯** になったら、User ボタンを離してください。

## リソース

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
