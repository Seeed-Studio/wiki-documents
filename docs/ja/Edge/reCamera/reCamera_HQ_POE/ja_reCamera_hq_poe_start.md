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
slug: /ja/recamera_hd_poe_getting_started
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

reCamera の開封から始めましょう。箱の中には以下が含まれているはずです：

- reCamera PoE 64GB
- レンズキャップ
- Type-C ケーブル
- 取扱説明書
- Ethernet ケーブル（RJ45 to MX1.25-5P）
- 接続ケーブル（MX1.25-6P to ジャンパー 6P）

すべての部品が含まれていることを確認してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/part_list2.jpg" /></div>

### デバイスのセットアップとログイン

**ステップ1:** reCamera HQ POE から PC に USB ケーブルを接続します。ウェブサイトで `192.168.42.1` にアクセスし、デフォルトパスワードを変更してください。POE Ethernet を使用している場合は、ルーターから割り当てられた IP アドレスを確認してアクセスしてください。

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


### reCamera HQ POE ダッシュボードフローでのクイックスタート

## クラウド管理とバックアップの適用

新しいアプリケーションを作成したり、アプリケーションを SenseCraft クラウドサービスに保存したい場合は、左下で SenseCraft アカウントにログインし、+ アイコンをクリックして新しいアプリケーションを追加できます。その後、フローの作業を開始できます。


新しいアプリケーションを作成したり、アプリケーションを SenseCraft クラウドサービスに保存したい場合は、左下で SenseCraft アカウントにログインし、`+` アイコンをクリックして新しいアプリケーションを追加できます。その後、フローの作業を開始できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_7.png" /></div>

アプリは [reCamera - SenseCraft AI](https://sensecraft.seeed.cc/ai/#/recamera) で表示・管理できます。

:::note

プラットフォーム経由でログインしてアプリケーションを同期するには、事前にアカウントを登録する必要があります。

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_14.png" /></div>

## ポート一覧

以下は reCamera Gimbal で使用されるポートの一覧です：

- **ポート 22**：リモート SSH ログインに使用され、閉じられています。
- **ポート 53**：DNS ドメイン名解決に関連し、ウェブリダイレクションに必要です。デフォルトで開いています。
- **ポート 80**：Node-RED アプリケーションの HTTP 表示用ウェブダッシュボードインターフェースとして機能します。
- **ポート 554**：RTSP ビデオストリーミングに使用されます。
- **ポート 9090**：ウェブターミナルアクセス用で、ログインにはパスワードが必要です。
- **ポート 1880**：Node-RED 操作専用です。

## OTA OS アップグレード

[OTA アップグレード手順](https://wiki.seeedstudio.com/ja/recamera_getting_started/#ota-upgrade-from-013-to-latest-version)を参照してください。

## ファクトリーリセット

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/interface.jpg" /></div>

デバイスのパスコードを忘れた場合などでデバイスをリセットしたい場合は、**User** ボタンを長押ししながらデバイスを電源に接続してください。デバイスの `赤いライト` が点滅ではなく **常時点灯** になったら、User ボタンを離してください。

## リソース

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
