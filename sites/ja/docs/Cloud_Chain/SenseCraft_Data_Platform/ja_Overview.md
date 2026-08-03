---
sidebar_position: 1
title: 概要
description: SenseCraft Data Platform のクイックスタートガイド — 安全で信頼性の高いクラウドプラットフォームで SenseCAP デバイスを管理し、センサーデータを可視化します。
keywords:
  - Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cloud/sensecraft-data/sensecraft-data-platform/overview
aliases:
  - /Cloud_Chain/SenseCAP_Portal/QuickStart
last_update:
  date: 06/06/2025
  author: Matthew
createdAt: '2023-03-01'
updatedAt: '2026-07-13'
url: https://wiki.seeedstudio.com/ja/cloud/sensecraft-data/sensecraft-data-platform/overview/
---

# SenseCraft Data Platform クイックスタート

:::tip
**お知らせ：**  
2025 年より、**SenseCAP Portal** は正式に **SenseCraft Data Platform** に名称変更されました。機能はそのままに、AIoT およびマルチセンサーのシナリオをより良くサポートするための改善が継続的に行われています。
:::

SenseCraft Data Platform をどのように使うのでしょうか？さっそく始めましょう！

## はじめに

SenseCraft Data Platform の主な機能は、SenseCAP デバイスの管理とデータの保存です。Microsoft の安全で信頼性の高いクラウドサービスである Azure 上に構築されています。アカウントを申請し、すべてのデバイスをこのアカウントに紐付けることができます。SenseCraft は Web プラットフォームと API を提供します。Web プラットフォームには、ダッシュボード、デバイス管理、データ管理、アクセスキー管理が含まれ、API はユーザーによるさらなる開発のために公開されています。

## Web サイト

- グローバルステーション: <a href="https://sensecap.seeed.cc/">https://sensecap.seeed.cc</a>

## 新しいアカウントを作成する

① 「Register Account」を選択し、メールアドレス情報を入力して「Register」をクリックします。登録メールがあなたのメールボックスに送信されます。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-1.jpg)

② 「SenseCAP...」または「SenseCraft…」という件名のメールを開き、リンクをクリックして、関連情報を入力し、登録を完了します。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-2.jpg)

③ ログイン画面に戻り、ログインを完了します。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-3.jpg)

:::note
メールが見つからない場合は、自動的に「spam」と判定され、「trash can」に入れられている可能性があります。<br />
ログイン時にパスワードを忘れた場合は、メールを通じて再設定できます。
:::

## SenseCAP アプリをダウンロードする

`SenseCraft App` をインストールしてログインします。

- Android: <a href="http://sensecap-app-download.seeed.cn/">Download App</a> からダウンロードし、QR コードをスキャンします。
- iOS: App Store で「SenseCraft」を検索します。

## デバイスをバインドする

各 SenseCAP デバイスには、下図のようなラベルが筐体に貼付されています。EUI は SenseCAP デバイスの一意のコードです。Key は暗号化フィールドであり、無視してかまいません。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/label.jpg)


SenseCAP アプリのメインページで「Bind」ボタンをクリックし、QR コードをスキャンしてデバイスをバインドします。

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview1.png" /></div>

SenseCAP Platform 上で、Dashboard ページに移動し、**Bind Device** をクリックします。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview2.png" /></div>

デバイスの EUI と KEY を入力して、バインドを完了します。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview3.png" /></div>

## データを確認する

`SenseCraft Data Platform` にログインし、「Device/Sensor Node」セクションでデバイスのステータスと基本情報を確認し、「Data/Table」セクションでセンサーデータを表示します。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview4.png" /></div>
