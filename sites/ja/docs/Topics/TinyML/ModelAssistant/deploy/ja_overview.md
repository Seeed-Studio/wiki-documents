---
description: モデルアシスタントのデプロイメント
title: デプロイメント
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ModelAssistant_Deploy_Overview
last_update:
  date: 05/15/2025
  author: LynnL4
---


# デプロイメント

SSCMA は、ノーコードのビジュアルモデルデプロイメントツールと CPP ベースの SDK を提供するオープンソースプロジェクトです。これにより、ユーザーは複雑なコードを書くことなく、さまざまなプラットフォームにモデルを簡単にデプロイできます。

現在サポートされているプラットフォームは以下の通りです：

| デバイス | SenseCraft-AI | SSCMA-Micro SDK |
| :--- | :--- | :--- |
| [Xiao ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html) | ✅ | ✅ |
| [Grove Vision AI V2](https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html) | ✅ | ✅ |

## SenseCraft-AI

SenseCraft-AI は、SSCMA が提供するビジュアルモデルデプロイメントツールです。このツールを使用することで、ユーザーは簡単な操作でさまざまなプラットフォームにモデルをデプロイできます。このツールは使いやすいインターフェースを提供し、コーディングは不要です。

[SenseCraft-AI](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/) の主な特徴は以下の通りです：

- コーディングスキル不要のビジュアルインターフェース
- さまざまなプラットフォームへの迅速なモデルデプロイ
- TFLite モデルのサポート

手順 1. SenseCraft-AI のウェブサイトを開く

<div align="center">
  <a href="https://seeed-studio.github.io/SenseCraft-Web-Toolk"><img width="10%" src="https://files.seeedstudio.com/sscma/docs/images/SSCMA-Hero.png"/></a>
</div>

手順 2. デバイスをコンピュータに接続する

データ転送機能を備えたデータケーブルを使用して、デバイスをコンピュータに接続します。

手順 3. デバイスを選択して接続する

SenseCraft-AI のホームページに入ったら、まずデバイスを接続する必要があります。接続ボタンをクリックしてください。

![step3-1](https://files.seeedstudio.com/sscma/docs/static/deploy/step3-1.png)

次に、ブラウザにウィンドウが表示されます。ここで正しい Xiao ポートを選択する必要があります。Windows システムの場合、ポートは通常 COM で始まり、MacOS システムの場合、ポートは通常 /dev/tty で始まり、USB JTAG ラベルが付いています。正しいポートがわからない場合は、デバイスを接続した後にこのページを更新し、再度接続ボタンをクリックすると、ドロップダウンリストに新しいポートが表示されます。

![step3-2](https://files.seeedstudio.com/sscma/docs/static/deploy/step3-2.png)

手順 4. モデルを選択する

接続ボタンが赤い切断ボタンに変わったら、「Available AI Models」リストからモデルを選択できます。ここでは、デモとして顔認識を選択しました。選択後、送信ボタンをクリックし、数秒待ちます。

![step4-1](https://files.seeedstudio.com/sscma/docs/static/deploy/step4-1.png)

手順 5. モデルをデプロイする

![step5-1](https://files.seeedstudio.com/sscma/docs/static/deploy/step5-1.png)

最後にプレビューセクションに進みます。右上の停止ボタンを一度クリックし、その後呼び出しボタンをクリックしてください。すべてが正常に動作していれば、リアルタイムの画面効果が確認できます。

![step5-2](https://files.seeedstudio.com/sscma/docs/static/deploy/step5-2.png)

## SSCMA-Micro SDK

SSCMA はまた、SSCMA-Micro と呼ばれる CPP ベースの SDK を提供しており、ユーザーが独自のプロジェクトにモデルをデプロイすることを可能にします。SSCMA-Micro を統合することで、ユーザーはデプロイされたモデルをアプリケーション内で簡単に利用できます。

[SSCMA-Micro](https://github.com/Seeed-Studio/SSCMA-Micro) SDK の特徴は以下の通りです：

- CPP ベースで、さまざまな組み込みシステムやプラットフォームに適応
- モデルの呼び出しや推論のためのシンプルで強力な API を提供
- TFLite モデルのサポート

:::tip
さらなる例が近日公開予定です。お楽しみに。
:::