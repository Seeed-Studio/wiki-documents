---
sidebar_position: 1
description: SenseCraft App をダウンロードし、対応デバイスに接続してセンサーデータを管理し、デバイス設定を構成し、イベントを確認します。
title: SenseCraft App 概要
keywords:
  - App
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-app/overview
aliases:
  - /sensecraft_app
last_update:
  date: 1/7/2026
  author: Janet
createdAt: '2024-07-26'
updatedAt: '2026-08-04'
url: https://wiki.seeedstudio.com/ja/sensecraft-app/overview/
---

:::tip note
SenseCAP Mate App は正式に SenseCraft App に名称変更されました。
:::

<a id="introduction-and-usage"></a>

# SenseCraft App 概要

SenseCraft App は、データの可視化とデバイス管理のためのモバイルアプリケーションです。

## アプリの特長

- 時間を節約 - スキャン＆プレイの体験を提供し、ユーザーが 4 ステップで全体の設定を完了できるようにします
- 技術的な知識が少ない、またはまったくない人でも、センサーデータを簡単に使い始めることができます
- クリーンなユーザーインターフェースでデータを取得・閲覧できます
- 時間間隔を設定：バッテリー効率を向上
- しきい値を設定：アクションが必要なデータに集中 - 近日対応予定
- データが安全範囲外の場合にアラームを送信 - 近日対応予定

## ダウンロード

SenseCraft App は iOS 版と Android 版の両方が利用可能です。

[SenseCraft 公式ダウンロードセンターから SenseCraft アプリをダウンロードしてください](https://sensecraft.seeed.cc/en/download?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_data_app)。

## アカウント

SenseCraft はデバイスの設定とリモート管理をサポートします。SenseCraft Data Platform（旧 SenseCAP Portal）やその他の機能を利用するには、アカウント登録が必要です。

:::tip Note
Server Location として `Global` を選択してください。<a href="https://sensecap.seeed.cc">SenseCraft Data Platform</a> からアカウントを作成することもできます。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/login-page.PNG" alt="SenseCraft App account login screen" width={300} height="auto" /></p>

## デバイス

- デバイスページで、右上の `+` をクリックして新しいデバイスを追加できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/add-new.png" alt="Add a new device in SenseCraft App" width={500} height="auto" /></p>

- 対象デバイスをクリックしてデータを表示します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/data.png" alt="View device measurements in SenseCraft App" width={500} height="auto" /></p>

- 右上のベルアイコンをクリックしてメッセージセンターに入ります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/message-center.png" alt="Open the SenseCraft App message center" width={500} height="auto" /></p>

## MALL

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/MAll.PNG" alt="SenseCraft App mall page" width={300} height="auto" /></p>

## イベント

イベントを追加して通知を受け取ります。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/add-event.PNG" alt="Create an event alert in SenseCraft App" width={300} height="auto" /></p>

1. 追加アイコンまたは Add Event ボタンをクリックしてイベントアラートを作成します。Add Event ページの Conditions で条件オプションを追加し、Add ボタンをクリックしてデバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_2.png" alt="Select a device when creating an event" style={{width:1000, height:'auto'}}/></div>

2. デバイスを選択し、測定タイプを選択し、アラーム条件を設定します。より大きい、またはより小さいなどの条件を選択し、スライダーバーをドラッグして値を設定し、次のステップをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_3.png" alt="Configure an event measurement and threshold" style={{width:1000, height:'auto'}}/></div>

3. Add Event ページの Back to normal actions で、デバイスが正常に戻ったときの動作を設定し、通知を送信するかどうかを選択します。[Save] をクリックし、イベント名を入力して [Submit] をクリックすると、イベントアラームが正常に追加され、イベントリストに戻ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_4.png" alt="Configure event recovery actions and notifications" style={{width:1000, height:'auto'}}/></div>

4. デバイスページで Message Center をクリックしてアラームメッセージを表示します。Device warning にはデバイスがトリガーしたアラームのプッシュメッセージが表示され、System notification にはシステムメッセージが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_5.png" alt="View event notifications in the message center" style={{width:1000, height:'auto'}}/></div>

5. アラームメッセージをクリックすると、デバイスがトリガーした条件項目とアラームメッセージが表示され、クリックしてアラームの詳細を確認できます。アラームリストに戻るとステータスは既読に変わります。編集ボタンをクリックしてメッセージを選択すると、既読、削除などの操作ができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_6.png" alt="View and manage an event alarm message" style={{width:1000, height:'auto'}}/></div>

6. システムメッセージに切り替え、クリックしてシステムプッシュメッセージの詳細を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_7.png" alt="View a system notification in SenseCraft App" style={{width:1000, height:'auto'}}/></div>

## ユーザー

アカウントの詳細と設定、アプリバージョンなど。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/user-page.PNG" alt="SenseCraft App user settings page" width={300} height="auto" /></p>

**アカウント削除**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/delete.png" alt="Delete a SenseCraft account" width={600} height="auto" /></p>

## Bluetooth 設定

対応する製品を選択して、すばやくバインドします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/configuration.png" alt="Select a device for Bluetooth configuration" width={500} height="auto" /></p>

## テンプレート

SenseCraft app は、**Add New Template、Import Template、Download Template、Apply Preset Template** を含む一連のテンプレート機能を提供し、デバイス設定を簡素化し高速化します。これらの機能により、ユーザーはセットアップ時間を効率的に短縮し、大規模な導入の展開を合理化できます。

### 新しいテンプレートを追加

新しいテンプレートを追加する方法は 2 つあります。

**方法 1** <br />

1. `User` → `Device Bluetooth Configuration` に移動します。<br />
2. 右上の `Template` ボタンをタップします。<br />
3. `+` アイコン → `Add New Template` をタップします。<br />
4. Device Type を選択します。<br />
5. 必要に応じてテンプレートパラメータを設定します。<br />
6. `Confirm` をタップしてテンプレートを保存します。<br />
7. テンプレートページに戻ると、`Save successful` と表示されます。<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/App_Template/add_new_template1.png" alt="Open the template page from Bluetooth configuration" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/App_Template/add_new_template2.png" alt="Add a new device configuration template" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/App_Template/add_new_template3.png" alt="Confirm a new device configuration template" width={300} height="auto" /></p>

**方法 2** <br />

1. Bluetooth Configuration モードに入り、`Advanced Configuration` を選択します。<br />
2. `Setting` ページに移動します。<br />
3. 右上の `Template` アイコンをタップします。<br />
4. 必要に応じてテンプレートパラメータを調整します。<br />
5. `Save as Template` を選択します。<br />
6. テンプレート名を入力します。<br />
7. `Confirm` をタップして保存します。<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/App_Template/add_new_template4.png" alt="Save Bluetooth configuration settings as a template" width={800} height="auto" /></p>

### テンプレートをダウンロード

1. `Template` ページに移動し、ダウンロードしたいテンプレートを選択します。<br />
2. 右上の三点メニューをタップします。<br />
3. `Download Template` を選択します。<br />
4. ファイルをモバイルデバイスのストレージに保存します。<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/App_Template/downlaod_template.png" alt="Download a device configuration template" width={800} height="auto" /></p>

### テンプレートをインポート

1. `User` → `Device Bluetooth Configuration` に移動します。<br />
2. 右上の `Template` をタップします。<br />
3. テンプレートページで `+` アイコンをタップします。<br />
4. `Import Template` を選択します。<br />
5. `file` アイコンをタップします。<br />
6. システムファイルマネージャーで、`“.seeed”` 拡張子の設定ファイルを選択します。<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/App_Template/import_template.png" alt="Import a Seeed device configuration template" width={800} height="auto" /></p>

### プリセットテンプレートを適用

1. デバイスの Bluetooth Configuration モードに入り、`Advanced Configuration` を選択します。<br />
2. `Settings` ページを開き、右上の `Template` アイコンをタップします。<br />
3. `Choose Template` を選択します。<br />
4. Preset Template ページで、目的のテンプレートを選択します。<br />
5. Settings ページに戻り、`Send` をタップして設定を適用します。<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/App_Template/apply_template.png" alt="Choose a preset device configuration template" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/App_Template/apply_template2.png" alt="Apply a preset template to a device" width={600} height="auto" /></p>
