---
sidebar_position: 1
description: SenseCAP Portal Dashboard
title: Dashboard
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /ja/sensecraft-data-platform/tutorials/dashboard
aliases:
  - /ja/Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Dashboard
last_update:
  date: 02/14/2023
  author: Matthew
---


Dashboardでは、デバイスの状態とセンサーデータをリアルタイムで監視できます。

## 概要

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-1.jpg)

① 「Scene」または「Chart」を追加します。
② デバイス概要：デバイスの総数を表示します。
③ 監視：すべてのオフラインデバイスと低電力デバイスをカウントします。
④ データ更新間隔：ページ（Webページ）がどのように、どの時間に更新されるかを設定します。
⑤ お知らせ：ポータルバージョンアップグレードやその他の情報の通知。
⑥ Scene：センサーエリアに応じて対応する視覚表示モジュールが設定されます。
⑦ Chart：同じタイプの1つまたは複数のセンサーを選択して、一定期間の履歴データを表示できます。

## Sceneの設定

設置場所やアプリケーションシナリオに応じて、シーンデータの作成を選択できます。異なるデータをグループ化し、最新データをアイコン形式で表示します。
例：アカウント下にいくつかのグループがあります：station-1、station-2、station-3…station-1のシーンを作成します。
① 名前をカスタマイズし、「station-1」のシーン表示を作成し、「Add measurement type」を選択します。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-2.jpg)

② グループ「station-1」下で表示する測定データを選択し、確認します。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-3.jpg)

## Chartの設定

測定タイプ、デバイスEUI、時間範囲などの情報を表示するチャートを作成できます。
① 「Add」-「Chart」を選択します。
② 名前をカスタマイズし、「add measure type」を選択します。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-4.jpg)
③ 表示するデータタイプと時間を選択します。
④ グループを選択します。
⑤ グループ下の特定のセンサーノードを選択します。
⑥ 測定タイプを選択します。
⑦ 確認します。

:::note
チャートごとに追加できる測定タイプは1つのみです。チャートごとに最大5つの曲線を追加できます。
:::

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-5.jpg)