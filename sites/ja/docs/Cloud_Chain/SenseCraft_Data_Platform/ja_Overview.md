---
sidebar_position: 1
title: 概要
description: SenseCraft Data Platform のクイックスタートガイド — SenseCAP デバイスを管理し、安全で信頼性の高いクラウドプラットフォームでセンサーデータを可視化します。
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /ja/cloud/sensecraft-data/sensecraft-data-platform/overview
aliases:
  - /ja/Cloud_Chain/SenseCAP_Portal/QuickStart
last_update:
  date: 06/06/2025
  author: Matthew
---

# SenseCraft Data Platform クイックスタート

:::tip
**お知らせ:**  
2025年より、**SenseCAP Portal** は正式に **SenseCraft Data Platform** に名称変更されました。機能は同じままで、AIoT およびマルチセンサーシナリオをより良くサポートするための継続的な改善が行われています。
:::

SenseCraft Data Platform の使い方を見てみましょう！

## はじめに

SenseCraft Data Platform の主な機能は、SenseCAP デバイスを管理し、データを保存することです。Microsoft の安全で信頼性の高いクラウドサービスである Azure 上に構築されています。アカウントを申請し、すべてのデバイスをこのアカウントにバインドできます。SenseCraft は Web プラットフォームと API を提供します。Web プラットフォームには、ダッシュボード、デバイス管理、データ管理、アクセスキー管理が含まれ、API はユーザーのさらなる開発のために公開されています。

## ウェブサイト

- グローバルステーション: <a href="https://sensecap.seeed.cc/">https://sensecap.seeed.cc</a>

## 新しいアカウントの作成

① 「アカウント登録」を選択し、メール情報を入力して「登録」をクリックします。登録メールがメールボックスに送信されます。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-1.jpg)

② 「SenseCAP...」または「SenseCraft…」メールを開き、リンクをクリックし、関連情報を入力して登録を完了します。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-2.jpg)

③ ログイン画面に戻り、ログインを完了します。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-3.jpg)

:::note
メールが見つからない場合、自動的に「スパム」として識別され、「ゴミ箱」に入れられている可能性があります。<br />
ログイン時にパスワードを忘れた場合は、メールで回復できます。
:::

## SenseCAP アプリのダウンロード

`SenseCraft App` をインストールしてログインします。

- Android: <a href="http://sensecap-app-download.seeed.cn/">アプリをダウンロード</a> し、QR コードをスキャンします。
- iOS: App Store で「SenseCraft」を検索します。

## デバイスのバインド

各 SenseCAP デバイスには、下図に示すようにエンクロージャにラベルが貼られています。EUI は SenseCAP デバイスの一意のコードです。Key は暗号化フィールドで、無視できます。
SenseCAP アプリのメインページで「バインド」ボタンをクリックし、QR コードをスキャンしてデバイスをバインドします。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/label.jpg)

## データの確認

`SenseCraft Data Platform` にログインし、「Device/Sensor Node」セクションでデバイスのステータスと基本情報を確認し、「Data/Table」セクションでセンサーデータを表示します。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/data_overview.jpg)