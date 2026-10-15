---
sidebar_position: 1
description: XIAO ESP32S3 Sense でモデルを使用する方法
title: XIAO ESP32S3 Sense でモデルを使用する
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/14.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-xiao
aliases:
  - /sensecraft_ai_pretrained_models_for_xiao
last_update:
  date: 12/02/2024
  author: Citric
createdAt: '2024-12-02'
updatedAt: '2026-08-04'
url: https://wiki.seeedstudio.com/ja/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-xiao/
---

# XIAO ESP32S3 Sense でモデルを使用する

SenseCraft AI は、さまざまなデバイスに対応した多数の AI モデルを提供する強力なプラットフォームです。開発者や愛好家は、ハードウェア上でさまざまな AI モデルを簡単にデプロイし、試すことができます。この包括的なチュートリアルでは、XIAO ESP32S3 Sense ボード上で SenseCraft AI モデルを使用し、その出力をプレビューする手順を順を追って説明します。また、モデルの性能を理解し最適化するのに役立つ、いくつかの重要な概念や設定についても掘り下げて解説します。

## 事前準備

始める前に、以下のものを用意してください。

- **XIAO ESP32S3 Sense ボード**: ESP32-S3 マイコンの性能と、各種センサーや周辺機能を組み合わせた、コンパクトで多用途な開発ボードです。

- **USB-C ケーブル**: XIAO ESP32S3 Sense ボードをコンピュータに接続し、書き込みと電源供給を行うための USB ケーブルが必要です。

- **SenseCraft AI モデルリポジトリ Web ページへのアクセス**: 安定したインターネット接続を用意し、SenseCraft AI の Web サイトにアクセスできることを確認してください。

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
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## ステップ 1. XIAO ESP32S3 Sense 用モデルのフィルタリング

Web ブラウザを開き、SenseCraft AI モデルリポジトリにアクセスします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_model_library#/model" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ワンクリックで直接アクセス 🖱️</font></span></strong>
    </a>
</div><br />

モデルリポジトリのページには、さまざまなデバイスやアプリケーション向けに利用可能な幅広い AI モデルが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/13.png" style={{width:1000, height:'auto'}}/></div>

Web ページ左側のサイドバーで、**Supported Devices** セクションを探します。デバイス一覧から **XIAO ESP32S3 Sense** をクリックし、お使いのデバイスに対応したモデルだけが表示されるようにフィルタリングします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/14.png" style={{width:1000, height:'auto'}}/></div>

このステップにより、XIAO ESP32S3 Sense ボードにデプロイして実行できるモデルのみが表示されるようになります。

## ステップ 2. モデルを選択する

このチュートリアルでは例として **Face Detection** モデルを使用します。ただし、興味や要件に応じて、他のモデルを自由に探索・試用して構いません。

**Face Detection** モデルをクリックして、その専用ページを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/15.png" style={{width:1000, height:'auto'}}/></div>

モデルのページには、説明、モデル精度、モデル形式など、モデルに関する詳細情報が記載されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/16.png" style={{width:1000, height:'auto'}}/></div>

モデルのページで、ページ上部にある **Deploy Model** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/17.png" style={{width:1000, height:'auto'}}/></div>

この操作により、選択したモデルのデプロイプロセスが開始され、XIAO ESP32S3 Sense ボードにダウンロードして実行するための準備が行われます。

## ステップ 3. デバイスを接続する

Deploy Model ボタンをクリックした後、デプロイページ下部に表示される **Connect Device** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/18.png" style={{width:1000, height:'auto'}}/></div>

新しいページが開きます。この時点で、XIAO ESP32S3 Sense を USB-C ケーブルでコンピュータに接続してください。

デバイス接続ページには、モデル名やモデル ID など、モデル情報の概要が表示されます。XIAO ESP32S3 Sense ボード用に正しいモデルが選択されているかを確認するため、内容をよく確認してください。情報に問題がなければ、**Confirm** ボタンをクリックしてモデルのデプロイを続行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/19.png" style={{width:1000, height:'auto'}}/></div>

モデル情報を確認すると、XIAO ボード用のシリアルポートを選択するよう求めるウィンドウがポップアップ表示されます。シリアルポートは、コンピュータと XIAO ESP32S3 Sense ボード間の通信チャネルです。お使いの XIAO ESP32S3 Sense に対応する正しいポート番号を選択してください。不明な場合は、OS のデバイスマネージャやボードのドキュメントを参照して、正しいポートを特定してください。

**Connect** ボタンをクリックして、コンピュータと XIAO ボード間の接続を確立します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/20.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 4. モデルのアップロード

接続が確立されると、選択したモデルの XIAO ボードへのダウンロードが開始されます。モデルのアップロードには、モデルのサイズやインターネット接続速度にもよりますが、おおよそ 1～2 分ほどかかる場合があります。このステップでは、必要なモデルファイルや依存関係が XIAO ESP32S3 Sense ボードに転送され、AI モデルをローカルで実行するための準備が行われます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/21.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 5. モデルのプレビュー

モデルのアップロードが完了すると、自動的にプレビューフィーチャーが起動します。プレビューウィンドウには、XIAO ESP32S3 Sense のカメラからのリアルタイム映像と、その上に重ねて表示されるモデルの検出結果が表示されます。Face Detection モデルの場合、ビデオストリーム内で検出された顔の周囲にバウンディングボックスが描画されます。各バウンディングボックスは、モデルが認識した 1 つの顔を表します。プレビューフィーチャーにより、モデルの出力をリアルタイムで確認でき、その性能を即座に視覚的にフィードバックとして得ることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/22.png" style={{width:1000, height:'auto'}}/></div>

## モデルの微調整（オプション）

1. モデルの性能を最適化したり、特定のユースケースに合わせて調整したい場合は、プレビューセクションの下にあるオプションを使ってモデル設定を微調整できます。

2. 調整可能な重要なパラメータとして、「Confidence Threshold」と「Intersection over Union (IoU) Threshold」の 2 つがあります。

   - **Confidence Threshold**: この値は、検出結果を有効と見なすために必要な最小の信頼度を決定します。Confidence Threshold を高く設定すると、検出数は少なくなりますが確度は高くなり、低く設定すると検出数は増えますが誤検出が含まれる可能性があります。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

   - **IoU Threshold**: IoU は、予測されたバウンディングボックスと正解のバウンディングボックスとの重なり具合を測る指標です。物体検出の精度を判断するために使用されます。IoU Threshold は、検出結果を真陽性と見なすために必要な最小 IoU 値を設定します。このしきい値を調整することで、モデルの適合率（precision）と再現率（recall）を微調整することができます。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

3. Confidence Threshold と IoU Threshold の値をさまざまに変えて試し、顔を正確に検出しつつ誤検出を最小限に抑える最適なバランスを見つけてください。最適な設定は、具体的なアプリケーションや画像・ビデオフィードの特性によって異なる場合があります。

## まとめ

おめでとうございます！SenseCraft AI の Face Detection モデルを XIAO ESP32S3 Sense ボードに正常にデプロイし、その出力をプレビューし、さらにモデルの性能を微調整する方法を学びました。

このチュートリアルで説明した手順に従うことで、SenseCraft AI リポジトリで提供されているさまざまな AI モデルを、XIAO ESP32S3 Sense 上で簡単に探索・試用できます。SenseCraft AI プラットフォームは、初心者から経験豊富な開発者まで利用しやすいユーザーフレンドリーなインターフェースと、豊富なモデル群を提供しています。

対応モデルやその機能、利用可能な追加設定オプションなどの詳細については、SenseCraft AI および XIAO ESP32S3 Sense ボードが提供するドキュメントやリソースを参照してください。

他のモデルを試したり、さまざまな設定を実験したりして、特定のプロジェクトやアプリケーションに合わせてカスタマイズしてみてください。SenseCraft AI と XIAO ESP32S3 Sense ボードを組み合わせれば、その可能性は無限大です。

SenseCraft AI モデルを XIAO ESP32S3 Sense で使って、ぜひ実験や創作を楽しんでください！

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
