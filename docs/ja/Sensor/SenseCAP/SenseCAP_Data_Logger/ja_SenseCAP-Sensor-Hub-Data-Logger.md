---
description: SenseCAP センサーハブ データロガー
title: SenseCAP センサーハブ データロガー
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor/SenseCAP/SenseCAP_Data_Logger/SenseCAP-Sensor-Hub-Data-Logger
last_update:
  date: 05/15/2025
  author: Yvonne
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SenseCAP センサーハブ データロガー

## 製品紹介

SenseCAP センサーハブは、リモート環境モニタリングのためのコンパクトなソリューションです。最大40個のRS-485センサーを接続できる強力なデータロガーと幅広いセンサー選択肢を備えており、気象観測所や空気質モニタリングなどの用途に使用できます。IP66規格とソーラー電源供給により、信頼性が高く揮発性のないデータ収集サービスを提供します。SenseCAP センサーハブ データロガーには、2G版と4G版の2種類が用意されています。

![HUB](https://files.seeedstudio.com/products/102991154/wiki%20images/Sensor-Hub-2-1030x736.png)
<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/SenseCAP-Sensor-Hub-4G-Data-Logger-with-builtin-battery-p-4852.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

[SenseCAP Mobile APP](https://solution.seeedstudio.com/product/software-cloud-sensecap-app/)、[SenseCAP ウェブポータル](https://solution.seeedstudio.com/product/software-cloud-sensecap-portal/)、[SenseCAP API](https://sensecap-docs.seeed.cc/introduction.html)、および [SenseCAP ダッシュボード](https://solution.seeedstudio.com/product/software-cloud-sensecap-dashboard/) も利用可能で、迅速な設定やデバイス＋データ管理が可能です。

# 特徴

* リモート制御のためのダウンリンクコマンドが必要なアプリケーションに適合
* インターネット障害時にデータを保存できるオンボードメモリ
* GSM900/1800MHz、LTEバージョンは近日登場予定
* 高速な設置と展開、高い信頼性と安定性
* 最大40個のセンサーとアクチュエーターを接続可能
* 工業用保護：IP66エンクロージャ、温度範囲 -40℃～70℃、屋外用途や過酷な環境に適応
* APP、ウェブポータル、オープンAPIを利用して迅速なプロビジョニングとデータ管理が可能
* 簡単なメンテナンス、OTAアップグレード対応

# 仕様

こちらのドキュメントをご参照ください: https://files.seeedstudio.com/products/114992170/SenseCAP%20SensorHub%20Catalog-v3.1%2020210702.pdf

# アーキテクチャ
![architecture](https://files.seeedstudio.com/products/102991154/wiki%20images/sensor%20hub%20architecture%20.png)

センサーハブ データロガーは、簡単に展開できるセルラーステーションで、2つの電源オプションが利用可能です：充電式バッテリーを備えたソーラー電源と電源アダプター。

4つのRS485データチャネルと幅広いセンサーを備えています。拡張ハブを使用することで、一度に最大40個のセンサーを接続できます。データは2Gまたは4Gを介してクラウドに送信されます。10MBのオンボードメモリを搭載しており、接続が悪い場合でも70万件以上の測定値をローカルに保存できます。工業用グレードおよびIP66設計により、UV、雨、ほこりなどの屋外や過酷な環境に適しています。GNSSが組み込まれており、位置追跡が可能です。

SenseCAP LoRaと比較すると、このデータロガーはアンモニアのような高消費電力センサーに適しています。センサーデータはセンサーハブによって収集され、2Gまたは4Gを使用してSenseCAPサーバーまたは指定されたサーバーに送信されます。

簡単に展開できるよう設計されており、エンクロージャはポールおよび壁取り付けに適しています。

# アプリケーション

<div align="center"><img width="{800}" src="https://www.sensecapmx.com/wp-content/uploads/2023/02/Pasted-into-1-1.png"/></div>