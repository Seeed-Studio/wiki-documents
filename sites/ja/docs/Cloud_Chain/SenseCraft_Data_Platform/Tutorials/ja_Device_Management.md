---
sidebar_position: 3
description: SenseCAP Portal Device Management
title: デバイス管理
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /ja/sensecraft-data-platform/tutorials/device-management
aliases:
  - /ja/Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management
last_update:
  date: 02/14/2023
  author: Matthew
---


ここでは、ゲートウェイ管理、ノードグループ管理、センサーノード管理など、SenseCAPデバイスを管理するためのいくつかの方法を提供しています。

## ゲートウェイ

① EUI、周波数、ステータス、登録時間に基づいてゲートウェイをフィルタリングします。
② ゲートウェイのリストで、EUI、名前、ステータスなどを表示します。
③ EUIをクリックしてデバイス詳細ページに入り、基本情報、位置、バインディングなどを確認します。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-1.jpg)

## ノードグループ管理

グループごとにデバイスを便利に管理できます。新しいグループの作成、グループの削除、または特定のグループへのデバイスの移動が可能です。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-2.jpg)

## センサーノード管理

センサーノードページでは、アカウントにバインドされているすべてのセンサーノードを確認できます。
① デバイスには「LoRa」や「NB-IoT」などのタイプが含まれ、カテゴリ別に表示できます。
② フィルタ条件で、EUI、周波数、グループ、ステータス、登録時間に応じてノードをフィルタリングします。
③ センサーノードリストで、EUI、名前、ステータス、データタイプなどを表示します。
④ EUIをクリックしてデバイス詳細ページに入ります。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-3.jpg)

## 一般情報

一般情報ページでは、デバイス名の設定、デバイスステータス、バッテリーステータス、最近のオンライン記録などを確認できます。

- バッテリーステータス：「バッテリー不足」と表示される場合、バッテリーが10%を下回っていることを意味します。
- 最近のオンライン記録：ゲートウェイは数分以内にオフラインになり、その他のデバイスは後でオフラインになります（通常は3回のアップロード間隔）。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-4.jpg)

## チャンネル

シングルチャンネルデバイス：チャンネルが1つのみで、ノードは1つのプローブのみ接続可能です（LoRaWANセンサーノードなど）。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-5.jpg)
マルチチャンネルデバイス：複数のチャンネルを持ち、複数のセンサープローブを接続可能です（センサーハブなど）。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-6.jpg)

## データ

各チャンネルの期間データとデバイスステータスデータを確認できます。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-7.jpg)

## 設定

読み取り専用キー / フルアクセスキー：これはAPIと併用されます。
デバイス設定：デバイスのデータ収集頻度を調整します。範囲は5分から43,200分です。新しい収集頻度は、デバイスが次回データをアップロードする際に有効になります。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-8.jpg)

## 位置

デバイスにGPS機能がある場合、位置情報はここで自動的に更新されます。
デバイスにGPSがない場合、手動でGPSを設定できます：「位置を検索」-「地図上で点を打つ」-「住所として設定」。

:::note
デバイスのGPSを使用する際は、上部に遮蔽物のない屋外にデバイスを設置してください。
:::

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-9.jpg)

## デバイスのバインド

デバイスを別のアカウントに変更したり、デバイスを削除したりする場合は、このページで行うことができます。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-10.jpg)