---
sidebar_position: 3
description: SenseCAP ポータル デバイス管理
title: デバイス管理
keywords:
  - Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-data-platform/tutorials/device-management
aliases:
  - /Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-03-01'
updatedAt: '2025-06-12'
url: https://wiki.seeedstudio.com/ja/sensecraft-data-platform/tutorials/device-management/
---


ここでは、Gateway Management、Node Group Management、Sensor Node Management を含む、SenseCAP デバイスを管理するための複数の方法を提供します。

## ゲートウェイ

- ① EUI、周波数、ステータス、登録時間に基づいてゲートウェイをフィルタリングします。
- ② ゲートウェイの一覧で、EUI、名前、ステータスなどを表示します。
- ③ EUI をクリックしてデバイス詳細ページに入り、基本情報、位置情報、バインディングなどを確認します。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-1.jpg)

## ノードグループ管理

グループごとにデバイスをまとめて管理できます。新しいグループの作成、グループの削除、デバイスを特定のグループへ移動することができます。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-2.jpg)

## センサーノード管理

Sensor Node ページでは、アカウントにバインドされているすべての Sensor Node を確認できます。
- ① デバイスには「LoRa」や「NB-IoT」などのタイプがあり、カテゴリ別に表示できます。
- ② フィルタ条件として、EUI、周波数、グループ、ステータス、登録時間に応じてノードを絞り込みます。
- ③ センサーノード一覧で、EUI、名前、ステータス、データタイプなどを表示します。
- ④ EUI をクリックしてデバイス詳細ページに入ります。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-3.jpg)

## 一般情報

一般情報ページでは、デバイス名の設定、デバイスステータス、バッテリーステータス、最近のオンライン記録などを確認できます。

- バッテリーステータス：「Insufficient Battery」と表示されている場合、バッテリー残量が 10% 未満であることを意味します。
- 最近のオンライン記録：ゲートウェイは数分以内にオフラインとなり、他のデバイスはその後（通常は 3 回分のアップロード間隔後）にオフラインになります。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-4.jpg)

## チャンネル

シングルチャネルデバイス：チャネルが 1 つだけであり、ノードは LoRaWAN Sensor Node のように 1 つのプローブにしか接続できません。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-5.jpg)
マルチチャネルデバイス：複数のチャネルを備え、Sensor Hub のように複数のセンサープローブを接続できます。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-6.jpg)

## データ

各チャネルの期間データおよびデバイスステータスデータを確認できます。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-7.jpg)

## 設定

Only Read Key / Full Access Key：これは API と併用します。
デバイス設定：デバイスのデータ収集間隔を 5 ～ 43,200 分の範囲で調整します。新しい収集間隔は、デバイスが次回データをアップロードするときに有効になります。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-8.jpg)

## 位置情報

デバイスに GPS 機能がある場合、位置情報はここで自動的に更新されます。
デバイスに GPS がない場合は、「Search location」-「Map punctuation」-「Set as address」の順に操作して、手動で GPS を設定できます。

:::note
デバイスの GPS を使用する場合は、上部に遮蔽物のない屋外にデバイスを設置するようにしてください。
:::

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-9.jpg)

## デバイスのバインド
新しいデバイスをバインドしたい場合は、**Dashboard** ページに移動し、**Bind Device** をクリックします。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview2.png" /></div>

デバイスの EUI と KEY を入力してバインドを完了します。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview3.png" /></div>

デバイスを別のアカウントに変更したい場合やデバイスを削除したい場合は、このページで操作できます。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-10.jpg)
