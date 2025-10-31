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
  date: 8/28/2023
  author: Tim
---

# SenseCAP Indicator - Matter アプリケーション開発

<div class="video-container">
<iframe class="youtube-video" src="https://www.youtube.com/embed/LCIWqwmCZ54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## はじめに

これは、[Matter SDK](https://project-chip.github.io/connectedhomeip-doc/index.html)を使用してSenseCAP Indicator用の豊富なアプリケーションを構築する方法のデモです。

SenseCAP Indicatorにはタッチスクリーンが搭載されており、強力なホームオートメーションインターフェースとして機能することができます。Matterは設定の複雑な側面の多くを取り除くため、これまで以上にプロセスを簡単にします。MatterのSDKの助けを借りて、QRコードを素早くスキャンしてデバイスをホームネットワークに設定することができます。

この記事では、デモでデバイスを起動して実行するために必要な手順を説明します。

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

<br />

Matter SDKは標準的なデバイスセットを提供し、それらのデータへのアクセスとコントローラーへの状態のアップロードを可能にします。ESP-MatterはEspressifによってESP32シリーズSoC用の公式Matter開発フレームワークとして開発されました。

SenseCAP IndicatorをMatterで動作させるには、いくつかの主要な手順に従う必要があります：

1. [esp-idfとesp-matterのインストール](#install_sdks)
2. [環境の設定とビルド](#configure_and_build)
3. [アプリケーションの使用](#using_application)
4. [Home Assistant UIのさらなる設定](#going_beyond)

## 前提条件

始める前に、SenseCAP Indicatorボードの[ユーザーガイド](/ja/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator)を読んで、そのソフトウェアとハードウェア情報に慣れ親しんでください。

## ESP IDFとESP Matterのインストール {#install_sdks}

[ESP-Matter SDK ドキュメントで提供されている手順](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#getting-the-repositories)に従って、ESP-IDFのバージョン5.0.1とESP-Matterのリリースバージョン1.1をインストールしてください。

これらのバージョンがインストールされた後、Seeed Studioが提供するパッチをインストールしてください[提供されたパッチを適用](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/tree/main/tools/patch)。

## 環境の設定とビルド {#configure_and_build}

### CLIを使用した設定とビルド

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

## アプリケーションの使用 {#using_application}

ファームウェアがフラッシュされると、画面はQRコードのみで開始されます。ホームオートメーションのスマートフォンアプリケーションを開き、デバイスプロビジョニングフローに入ります（メーカーによって異なります）。

以下の例では、Matter Betaサービスを実行しているHome Assistant Yellowに接続するためにHome Assistantモバイルアプリケーションを使用している様子を見ることができます。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-1.jpg"/></div>

デバイスをスキャンすると、私のスマートフォンは即座にプロビジョニングプロセスを開始します。プロビジョニングプロセスは、デバイスがwifi経由でホームオートメーションコントローラーデバイスに接続できるように、認証情報をデバイスに安全に渡すことを処理します。この方法により、実際にwifi認証情報をどこかに書く必要がありません。

プロビジョニング後、デバイスは10秒間隔でホームアシスタントコントローラーに温度と湿度を報告し始めます。

### 標準機能

<div class="video-container">
<iframe class="youtube-video" src="https://www.youtube.com/embed/mBhrYeyQQeg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Indicator Matterアプリケーションは、標準ファームウェアと同様の方法でセンサーデータを閲覧することができます。デバイスを読み込むと、あなたの位置に基づいて設定された時計画面が表示され、正確な時刻を提供します。画面には右と左にスライドすることを検出するイベントがあり、時刻、センサー表示、設定画面を循環します。

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

センサーをクリックすると、そのセンサーの状態に関する追加情報が表示され、この方法で履歴を確認することができます。

設定画面では、デバイス機能のいくつかの要素を設定できます。12時間または24時間表示の時計を設定でき、タイムゾーンは上書き可能で、ディスプレイの明度も調整できます。

### Matter Home Assistant ダッシュボード

Matter Home Assistant ダッシュボードにアクセスするには、メインの時計画面から下にスワイプします。このダッシュボードには複数の異なるコンポーネントがあり、これらはMatter側のデモデバイスに関連付けられています。プロビジョニングプロセス中に、これらのデバイスにはエンドポイントが作成され、ライトの調光や完全な消灯などの一般的な機能にアクセスするために使用できます。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-6.jpg"/></div>

このデモの場合、2つの調光可能なライトとドアロックが設定されています。ボタンをクリックすると、Home Assistantサイドもこれらの変更を反映するように更新されることがわかります。スライダーを動かしてライトの明度を設定できます。

Home Assistantサイドからは、デバイスを必要に応じて有効化、無効化、または変更でき、SenseCAP Indicatorもそれを反映するように更新されます。この方法で、追加の自動化によってIndicatorデバイスの機能を無効化または有効化し、画面にその状態をリアルタイムで反映させることができます。

使用中のホームコントローラーの仮想ダッシュボードと自動化機能により、様々な興味深い組み合わせが可能になります。SenseCAP Indicatorを使用して、ホーム環境全体のデバイスを制御するための独自のダッシュボードを構築できます。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-7.jpg"/></div>

## Home Assistant UIのさらなる設定 {#going_beyond}

UI自体は[LVGL](https://lvgl.io/)を使用して構築されています。LVGLの設定に関するより詳細な情報については、[以下の記事](https://wiki.seeedstudio.com/ja/using_lvgl_and_tft_on_round_display/)を参照してください。

ダッシュボードのUIは、データがローカルストレージとMatterエンドポイントの両方に永続化されるように、コールバック用のイベントが設定されたLGVLコンポーネントで構成されています。仮想ダッシュボードコントローラー（`indicator_virtual_dashboard_controller.c`）は、基盤となるデータが変更されたときに、フォームの更新と他のコンシューマー向けの関連イベントの投稿を処理します。

初期例では3つのデバイスが設定されており、Matterモデルの基盤となるロジックが、ビューからのイベントへの応答とMatterエンドポイントへのデータの永続化、またはUIの状態更新を処理します。

一般的に、UIを更新してMatterに永続化する際は、以下の考慮事項を考慮する必要があります：

- 初期化プロセス中に、`indicator_matter.cpp`モデルの`indicator_matter_setup()`メソッドが、Matterで使用するための関連デバイスを設定します。さらに、変更時にMatterエンドポイントが更新されるように、ビューイベント用のコールバックが設定されます。
- `indicator_virtual_dashboard.c`モデルは、仮想ダッシュボードに関連するビューイベントをリッスンし、初期化時の取得のためにデータをストレージに永続化します。
- Matterロジックは、変更されたMatterデータ（リモートまたはローカル）に関するイベントを購読します。
- 仮想ダッシュボードコントローラーは、Matterコントローラーからの変更に対する`indicator_matter.cpp` Matterコールバックを介して送信されるイベントに応答して、必要に応じてフォームの状態更新を処理します。

## Resources

1. **Demo SDK**: SenseCAP IndicatorのDemo SDKは[GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32)で入手できます。
2. **ユーザーガイド**: ユーザーガイドはSenseCAP Indicatorボードのソフトウェアとハードウェアに関する詳細情報を提供します。[こちら](/ja/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator)で読むことができます。
3. **ESP-IDFスタートガイド**: このガイドはESP-IDFを設定してプロジェクトをビルドするための完全な手順を提供します。[こちら](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html)でアクセスできます。
4. **Matterインストールガイド**: ESP-Matterが初めての場合、このガイドがインストールとセットアップをサポートします。[こちら](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html)で見つけることができます。

## Tech Support

**SenseCAP Indicatorでお困りですか？サポートいたします！**

このチュートリアルに従っている間に問題が発生したり、質問がある場合は、お気軽に技術サポートにお問い合わせください。私たちはいつでもお手伝いします！

[Seeed公式Discordチャンネル](https://discord.gg/kpY74apCWj)で質問するか、[GitHub discussions](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions)で共有したいことをすべて投稿してください！
