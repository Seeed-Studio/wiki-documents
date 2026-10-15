---
sidebar_position: 2
description: SenseCAP Portal データ管理
title: データ管理
keywords:
  - Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-data-platform/tutorials/data-management
aliases:
  - /Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Data_Management
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-03-01'
updatedAt: '2026-07-13'
url: https://wiki.seeedstudio.com/ja/sensecraft-data-platform/tutorials/data-management/
---


SenseCAP Portal では、さまざまな条件に基づいてクエリをフィルタリングしたり、必要なセンサーデータをエクスポートしたりできるデータクエリ機能を提供しています。

## テーブル

- ① デバイスでは、「Uplink Data」と「Threshold Data」の 2 種類のデータを表示できます。各タイプをクリックして表示します。
- ② フィルタ条件では、EUI、周波数、グループ、ステータス、登録時間に応じてノードをフィルタリングします。
- ③ データ一覧には、EUI、デバイス名、データタイプ、測定値、収集およびアップロード時間などが表示されます。
- ④ EUI をクリックするとデバイス詳細ページに入り、センサーノードの基本情報を確認できます。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement1.png" /></div>

## グラフ
① 「Graph」をクリックします。

<div align="left"><img width={1200} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement2.png" /></div>

② 新しいページを追加し、ページ名を入力して、行数と列数を選択します。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-data_management-2.jpg)

③  作成したアイコンに名前を付け、「finish」をクリックします。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement3.png" /></div>

④ 「Add measurement」をクリックします。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement4.png" /></div>

⑤ 表示する測定タイプと時間範囲を選択します。その後、特定のセンサーデータを選択します。

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement5.png" /></div>
⑥ 次に **Confirm** をクリックして、生成されたグラフデータを表示します。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement6.png" /></div>

- 1 ページあたり最大 3 行 3 列まで設定でき、複数のページを作成できます。詳細な手順については、Dashboard チャートを参照してください。

## アカウント情報の確認

Account Management ページでは、自分のアカウント情報を確認し、クリックして情報を変更できます。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-data_management-4.jpg)




## サブアカウントの追加 / 管理
ここで新しいサブアカウントを登録し、メインアカウントにリンクできます。必要な情報を入力した後、サブアカウントの権限タイプを設定できます。

1. **Limited User**：権限がありません。メインアカウントのデバイスデータを表示したり、デバイスを追加、編集、削除したりすることはできません。
2. **Observer**：メインアカウントにリンクされたデバイスとアップロードされたデータを表示できますが、デバイスを追加、編集、削除することはできません。
3. **Administrator**：メインアカウントにリンクされたデバイスを表示、編集、削除できます。
4. 情報を入力したら、**Confirm** をクリックして登録を完了します。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement7.png" /></div>
<br />

**Sub Account List** をクリックして、サブアカウントを表示および管理します。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement8.png" /></div>

<br />

**Update Account Information** をクリックしてサブアカウントの詳細を変更するか、**Delete** をクリックしてサブアカウントを削除します。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement9.png" /></div>
<br />
新しく追加したサブアカウントとパスワードを入力してログインします。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement10.png" /></div>
<br />
メインアカウントのデバイスステータスおよび関連するデータ情報を表示できます。
<br />
<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Data Management/SenseCAP-Platform-DataManagement11.png" /></div>