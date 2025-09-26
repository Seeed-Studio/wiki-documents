---
description: SenseCAP Sensor Hub Data Logger
title: SenseCAP Sensor Hub Data Logger
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor/SenseCAP/SenseCAP_Data_Logger/SenseCAP-Sensor-Hub-Data-Logger
last_update:
  date: 4/11/2023
  author: Yvonne
---

# SenseCAP センサーハブ データロガー

## 製品紹介

SenseCAP Sensor Hubは、リモート環境監視のためのコンパクトなソリューションです。最大40台のRS-485センサーを接続できる強力なデータロガーと幅広いセンサー選択で構成されており、気象観測所や大気質監視などのアプリケーションに使用できます。IP66と太陽光電源により、信頼性が高く不揮発性のデータ収集サービスを提供することができます。SenseCAP Sensor Hub Data Loggerには2Gと4Gの2つのバージョンがあり、どちらも利用可能です。

![HUB](https://files.seeedstudio.com/products/102991154/wiki%20images/Sensor-Hub-2-1030x736.png)
<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/SenseCAP-Sensor-Hub-4G-Data-Logger-with-builtin-battery-p-4852.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

[SesneCAP Mobile APP](https://solution.seeedstudio.com/product/software-cloud-sensecap-app/)、[SenseCAP web-based portal](https://solution.seeedstudio.com/product/software-cloud-sensecap-portal/)、[SenseCAP API](https://sensecap-docs.seeed.cc/introduction.html)、および[SenseCAP Dashboard](https://solution.seeedstudio.com/product/software-cloud-sensecap-dashboard/)も、迅速な設定とデバイス+データ管理のために利用可能です。

# 特徴

- リモート制御のためのダウンリンクコマンドが必要なアプリケーションに適合
- インターネット障害時にデータを保存できるオンボードメモリ
- GSM900/1800MHz、LTEバージョンも近日公開予定
- 迅速な設置と展開、高い信頼性と安定性
- 最大40台のセンサーとアクチュエーターを接続可能
- 産業グレードの保護：IP66筐体、温度-40℃~70℃、屋外アプリケーションと過酷な環境に適合
- APP、Webベースポータル、オープンAPIが迅速なプロビジョニングとデータ管理に利用可能
- 簡単なメンテナンス、OTAアップグレード

# 仕様

このドキュメントを参照してください：https://files.seeedstudio.com/products/114992170/SenseCAP%20SensorHub%20Catalog-v3.1%2020210702.pdf

# アーキテクチャ

![architecture](https://files.seeedstudio.com/products/102991154/wiki%20images/sensor%20hub%20architecture%20.png)

Sensor Hub Data loggerは展開が簡単なセルラーステーションで、2つの電源オプションが利用可能です：充電式バッテリー付き太陽光電源と電源アダプター電源。

4つのRS485データチャネルと幅広いセンサーで構成されています。拡張ハブを使用すると、一度に最大40台のセンサーを接続できます。データは収集され、2Gまたは4Gを通じてクラウドに送信されます。接続が悪い場合に備えて、700,000以上の測定値をローカルに保存できる10MBのオンボードメモリが装備されています。産業グレードとIP66設計で、UV、雨、ほこりなどの屋外や過酷な環境に適しています。位置追跡のためのGNSSが組み込まれています。

SenseCAP LoRaと比較して、このデータロガーはアンモニアなどの高消費電力センサーに適しています。センサーデータはSensor Hubによって収集され、2Gまたは4GでSenseCAP Serverまたは指定されたサーバーに送信されます。

展開が簡単になるよう設計されており、筐体はポールと壁面取り付けに適しています。

# アプリケーション

<div align="center"><img width="{800}" src="https://www.sensecapmx.com/wp-content/uploads/2023/02/Pasted-into-1-1.png"/></div>