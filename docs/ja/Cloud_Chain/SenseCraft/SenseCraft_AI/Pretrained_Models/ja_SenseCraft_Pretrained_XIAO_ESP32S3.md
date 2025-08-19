---
description: XIAO ESP32S3 Sense 用モデルの使用方法
title: XIAO ESP32S3 Sense 用
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/14.webp
slug: /ja/sensecraft_ai_pretrained_models_for_xiao
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32S3 Sense 用モデルの使用

SenseCraft AI は、さまざまなデバイスと互換性のある膨大な AI モデルのリポジトリを提供する強力なプラットフォームです。これにより、開発者や愛好家は、自分のハードウェア上でさまざまな AI モデルを簡単にデプロイし、試すことができます。この包括的なチュートリアルでは、SenseCraft AI モデルを XIAO ESP32S3 Sense ボードで使用し、モデルの出力をプレビューする手順を案内します。また、モデルのパフォーマンスを理解し最適化するための重要な概念や設定についても詳しく説明します。

## 必要条件

始める前に、以下を準備してください：

- **XIAO ESP32S3 Sense ボード**：これは、ESP32-S3 マイクロコントローラーのパワーとさまざまなセンサーや周辺機器を組み合わせたコンパクトで多用途な開発ボードです。

- **USB-C ケーブル**：XIAO ESP32S3 Sense ボードをコンピュータに接続してプログラミングや電源供給を行うために USB ケーブルが必要です。

- **SenseCraft AI モデルリポジトリのウェブページへのアクセス**：安定したインターネット接続を確保し、SenseCraft AI のウェブサイトにアクセスできるようにしてください。

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## ステップ 1. XIAO ESP32S3 Sense 用モデルのフィルタリング

ウェブブラウザを開き、SenseCraft AI モデルリポジトリにアクセスします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/model" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ワンクリックでアクセス 🖱️</font></span></strong>
    </a>
</div><br />

モデルリポジトリのページには、さまざまなデバイスやアプリケーション向けの AI モデルが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/13.png" style={{width:1000, height:'auto'}}/></div>

ウェブページの左サイドバーで、**対応デバイス (Supported Devices)** セクションを見つけます。デバイスのリストから **XIAO ESP32S3 Sense** をクリックして、特定のデバイスに対応したモデルをフィルタリングします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/14.png" style={{width:1000, height:'auto'}}/></div>

このステップにより、XIAO ESP32S3 Sense ボードでデプロイおよび実行可能なモデルのみが表示されるようになります。

## ステップ 2. モデルを選択する

このチュートリアルでは、例として**顔検出**モデルを使用します。ただし、興味や要件に応じて他のモデルを自由に探索し、試してみてください。

**顔検出**モデルをクリックして、その専用ページを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/15.png" style={{width:1000, height:'auto'}}/></div>

モデルページでは、モデルの説明、精度、フォーマットなど、モデルに関する詳細情報を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/16.png" style={{width:1000, height:'auto'}}/></div>

モデルのページで、ページ上部にある**Deploy Model**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/17.png" style={{width:1000, height:'auto'}}/></div>

この操作により、選択したモデルのデプロイメントプロセスが開始され、XIAO ESP32S3 Senseボードでダウンロードおよび実行する準備が整います。

## ステップ 3. デバイスを接続する

**Deploy Model**ボタンをクリックした後、デプロイメントページの下部に表示される**Connect Device**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/18.png" style={{width:1000, height:'auto'}}/></div>

新しいページが開きます。この時点で、USB-Cケーブルを使用してXIAO ESP32S3 Senseをコンピュータに接続してください。

デバイス接続ページでは、モデル情報（名前やモデルIDなど）の概要が表示されます。詳細を慎重に確認し、XIAO ESP32S3 Senseボードに適切なモデルが選択されていることを確認してください。情報が正確であれば、**Confirm**ボタンをクリックしてモデルのデプロイメントを進めます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/19.png" style={{width:1000, height:'auto'}}/></div>

モデル情報を確認した後、シリアルポートを選択するよう求めるウィンドウが表示されます。シリアルポートは、コンピュータとXIAO ESP32S3 Senseボード間の通信チャネルです。XIAO ESP32S3 Senseに対応する正しいポート番号を選択してください。不明な場合は、オペレーティングシステムのデバイスマネージャーやボードのドキュメントを参照して正しいポートを特定してください。

**Connect**ボタンをクリックして、コンピュータとXIAOボード間の接続を確立します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/20.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 4. モデルのアップロード

接続が確立されると、選択したモデルがXIAOボードにダウンロードされ始めます。モデルのアップロードプロセスには、モデルのサイズやインターネット接続速度に応じて約1～2分かかる場合があります。このステップでは、必要なモデルファイルや依存関係がXIAO ESP32S3 Senseボードに転送され、AIモデルをローカルで実行する準備が整います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/21.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 5. モデルプレビュー

モデルのアップロードが成功すると、プレビュー機能が自動的に開始されます。プレビューウィンドウには、XIAO ESP32S3 Sense のカメラからのリアルタイムビデオフィードが表示され、モデルの検出結果がビデオ上にオーバーレイされます。たとえば、顔検出モデルの場合、ビデオストリーム内で検出された顔の周囲にバウンディングボックスが描画されます。各バウンディングボックスは、モデルが識別した顔を表しています。このプレビュー機能により、モデルの出力をリアルタイムで確認でき、その性能について即座に視覚的なフィードバックを得ることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/22.png" style={{width:1000, height:'auto'}}/></div>

## モデルの微調整（オプション）

1. モデルの性能を最適化したり、特定のユースケースに適応させたりしたい場合は、プレビューセクションの下にあるオプションを使用してモデルの設定を微調整できます。

2. 調整可能な重要なパラメータとして、「信頼度しきい値」と「IoU（Intersection over Union）しきい値」があります。

   - **信頼度しきい値**: この値は、モデルが検出を有効と見なすために必要な最小信頼度レベルを決定します。信頼度しきい値を高く設定すると、検出数は減少しますが、確実性が高まります。一方、しきい値を低く設定すると、検出数は増加しますが、一部の誤検出が含まれる可能性があります。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

   - **IoUしきい値**: IoUは、予測されたバウンディングボックスと実際のバウンディングボックスの重なりを測定する指標です。これは、物体検出の精度を判断するために使用されます。IoUしきい値は、検出が真陽性と見なされるために必要な最小IoU値を設定します。このしきい値を調整することで、モデルの精度と再現率を微調整することができます。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

3. 信頼度しきい値とIoUしきい値の異なる値を試して、顔を正確に検出しつつ誤検出を最小限に抑える最適なバランスを見つけてください。最適な設定は、特定のアプリケーションや画像やビデオフィードの特性によって異なる場合があります。

## 結論

おめでとうございます！SenseCraft AI 顔検出モデルを XIAO ESP32S3 Sense ボードに正常にデプロイし、その出力をプレビューし、モデルの性能を微調整する方法を学びました。

このチュートリアルで説明した手順に従うことで、SenseCraft AI リポジトリにあるさまざまなAIモデルを XIAO ESP32S3 Sense 上で簡単に探索し、実験することができます。SenseCraft AI プラットフォームは、初心者から経験豊富な開発者まで利用可能な、使いやすいインターフェースと幅広いモデルを提供しています。

SenseCraft AI および XIAO ESP32S3 Sense ボードが提供するドキュメントやリソースを参照して、サポートされているモデル、その機能、および利用可能な追加の設定オプションについてさらに詳しく学んでください。

他のモデルを探索したり、さまざまな設定を試したり、それらを特定のプロジェクトやアプリケーションに適応させたりすることを自由に行ってください。SenseCraft AI と XIAO ESP32S3 Sense ボードの組み合わせにより、可能性は無限大です。

SenseCraft AI モデルを XIAO ESP32S3 Sense 上で実験し、創造することを楽しんでください！

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>