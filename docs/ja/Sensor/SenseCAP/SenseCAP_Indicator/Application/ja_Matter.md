---
description: SenseCAP Indicator - Matter アプリケーション開発
title: Matter - SenseCAP Indicator
keywords:
- SenseCAP Indicator
- Matter
- ESP32S3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_Application_Matter
sidebar_position: 8
last_update:
  date: 05/15/2025
  author: Tim
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SenseCAP Indicator - Matter アプリケーション開発

<iframe class="youtube-video" src="https://www.youtube.com/embed/LCIWqwmCZ54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## はじめに

これは、[Matter SDK](https://project-chip.github.io/connectedhomeip-doc/index.html) を使用して SenseCAP Indicator 用の充実したアプリケーションを構築する方法のデモです。

SenseCAP Indicator はタッチスクリーンを備えており、強力なホームオートメーションインターフェースとして機能することができます。Matter は設定の複雑な側面を取り除くことでプロセスをこれまで以上に簡単にします。Matter の SDK を使用すれば、QR コードをすばやくスキャンしてデバイスをホームネットワークに設定することができます。

この記事では、デモを使用してデバイスをセットアップするための手順を説明します。

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br />

Matter SDK は標準的なデバイスセットを提供し、それらのデータへのアクセスや状態をコントローラーにアップロードすることを可能にします。ESP-Matter は、ESP32 シリーズ SoC 用の公式 Matter 開発フレームワークとして Espressif によって開発されました。

SenseCAP Indicator を Matter と連携させるには、以下の主要な手順を実行する必要があります：

1. [esp-idf と esp-matter のインストール](#install_sdks)
2. [環境の設定とビルド](#configure_and_build)
3. [アプリケーションの使用](#using_application)
4. [Home Assistant UI のさらなる設定](#going_beyond)

## 前提条件

始める前に、SenseCAP Indicator ボードの [ユーザーガイド](/ja/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator) を読んで、そのソフトウェアおよびハードウェア情報に慣れておいてください。

## ESP IDF と ESP Matter のインストール {#install_sdks}

[ESP-Matter SDK ドキュメント](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#getting-the-repositories) に記載されている手順に従い、ESP-IDF のバージョン 5.0.1 と ESP-Matter のリリースバージョン 1.1 をインストールしてください。

これらのバージョンをインストールした後、Seeed Studio が提供するパッチをインストールしてください。[提供されたパッチを適用](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/tree/main/tools/patch)してください。

## 環境の設定とビルド {#configure_and_build}

### CLI を使用した設定とビルド

```sh
~/esp/esp-idf/install.sh
~/.espressif/esp-matter/install.sh

. ~/esp/esp-idf/export.sh
. ~/.espressif/esp-matter/export.sh

cd examples/indicator_matter
idf.py set-target esp32s3
idf.py fullclean
idf.py erase-flash
idf.py build flash monitor
```

## アプリケーションの使用方法 {#using_application}

ファームウェアがフラッシュされると、画面にはQRコードだけが表示されます。ホームオートメーション用のスマートフォンアプリを開き、デバイスのプロビジョニングフローに進みます（メーカーによって異なります）。

以下の例では、Home Assistantモバイルアプリを使用して、Matter Betaサービスを実行しているHome Assistant Yellowに接続する方法を示しています。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-1.jpg"/></div>

デバイスをスキャンすると、スマートフォンが直ちにプロビジョニングプロセスを開始します。このプロセスでは、資格情報が安全にデバイスに渡され、Wi-Fiを介してホームオートメーションコントローラーデバイスに接続できるようになります。この方法では、Wi-Fiの資格情報をどこかに書き込む必要がありません。

プロビジョニングが完了すると、デバイスは10秒間隔で温度と湿度をHome Assistantコントローラーに報告し始めます。

### 標準機能

<iframe class="youtube-video" src="https://www.youtube.com/embed/mBhrYeyQQeg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Indicator Matterアプリケーションでは、標準ファームウェアと同様にセンサーデータを閲覧できます。デバイスを起動すると、時計画面が表示され、位置情報に基づいて正確な時刻が設定されます。画面は右や左にスライドするイベントを検出し、時刻、センサー表示、設定画面を切り替えることができます。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-2.jpg" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-3.jpg" style={{width:480, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-4.jpg" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-5.jpg" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

センサーをクリックすると、そのセンサーの状態に関する追加情報が表示され、履歴もこの方法で確認できます。

設定画面では、デバイスの機能に関するいくつかの要素を構成できます。12時間または24時間形式の時計を設定でき、タイムゾーンを上書き可能で、ディスプレイの明るさも調整可能です。

### Matter Home Assistant ダッシュボード

メインの時計画面から下にスワイプすると、Matter Home Assistant ダッシュボード にアクセスできます。このダッシュボードには、Matter側のデモデバイスに関連付けられた複数のコンポーネントがあります。プロビジョニングプロセス中に、これらのデバイスにはエンドポイントが作成され、ライトの調光や完全にオフにするなどの一般的な機能にアクセスできます。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-6.jpg"/></div>

このデモでは、調光可能なライト2つとドアロックが設定されました。ボタンをクリックすると、Home Assistant側もこれらの変更を反映するように更新されるのがわかります。スライダーを動かしてライトの明るさを設定できます。

Home Assistant側からデバイスを有効化または無効化したり、必要に応じて変更したりすることができ、SenseCAP Indicatorもそれを反映して更新されます。このようにして、追加のオートメーションを使用してIndicatorデバイスの機能を無効化または有効化し、画面にリアルタイムでその状態を反映させることができます。

使用しているホームコントローラーの仮想ダッシュボードとオートメーション機能により、さまざまな興味深い組み合わせが可能になります。SenseCAP Indicatorを使用して、家庭環境全体のデバイスを制御する独自のダッシュボードを構築できます。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-7.jpg"/></div>

## ホームアシスタント UI のさらなる設定 {#going_beyond}

UI は [LVGL](https://lvgl.io/) を使用して構築されています。LVGL の詳細な設定方法については、[こちらの記事](https://wiki.seeedstudio.com/ja/using_lvgl_and_tft_on_round_display/)をご覧ください。

ダッシュボードの UI は、LGVL コンポーネントで構成されており、コールバック用のイベントが設定されています。これにより、データはローカルストレージと Matter エンドポイントの両方に永続化されます。仮想ダッシュボードコントローラー（`indicator_virtual_dashboard_controller.c`）は、フォームの更新を処理し、基礎データが変更された際に他のコンシューマー向けに関連イベントを投稿します。

初期例では、3 つのデバイスが設定されており、Matter モデルの基礎ロジックがビューからのイベントに応答し、データを Matter エンドポイントに永続化するか、UI の状態を更新するように処理します。

一般的に、UI を更新して Matter に永続化する際には、以下の点を考慮する必要があります：
- 初期化プロセス中に、`indicator_matter.cpp` モデルのメソッド `indicator_matter_setup()` が Matter で使用する関連デバイスを設定します。さらに、ビューイベント用のコールバックが設定され、変更時に Matter エンドポイントが更新されます。
- `indicator_virtual_dashboard.c` モデルは、仮想ダッシュボードに関連するビューイベントをリッスンし、初期化時に取得できるようデータをストレージに永続化します。
- Matter ロジックは、Matter データが変更された（リモートまたはローカル）際のイベントを購読します。
- 仮想ダッシュボードコントローラーは、Matter コントローラーからの変更に応じて `indicator_matter.cpp` Matter コールバックを介して送信されるイベントに応答し、フォームの状態を必要に応じて更新します。

## リソース

1. **デモ SDK**: SenseCAP Indicator 用のデモ SDK は [GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32) で利用可能です。
2. **ユーザーガイド**: ユーザーガイドには、SenseCAP Indicator ボードのソフトウェアおよびハードウェアに関する詳細情報が記載されています。[こちら](/ja/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator)からご覧いただけます。
3. **ESP-IDF の入門ガイド**: このガイドでは、ESP-IDF を設定してプロジェクトを構築するための完全な手順を提供しています。[こちら](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html)からアクセスできます。
4. **Matter インストールガイド**: ESP-Matter を初めて使用する場合、このガイドがインストールとセットアップをサポートします。[こちら](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html)をご覧ください。

## 技術サポート

**SenseCAP Indicator に関するサポートが必要ですか？私たちがサポートします！**

このチュートリアルを進める中で問題が発生したり質問がある場合は、ぜひ技術サポートにお問い合わせください。いつでもお手伝いします！

[Seeed Official Discord Channel](https://discord.gg/kpY74apCWj) を訪れて質問するか、[GitHub discussions](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) で自由に共有してください！