---
sidebar_position: 2
description: Grove Vision AI V2 用モデルの使用方法
title: Grove Vision AI V2 用モデルの使用
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/23.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-grove-vision-ai-v2
aliases:
  - /sensecraft_ai_pretrained_models_for_grove_visionai_v2
last_update:
  date: 12/02/2024
  author: Citric
createdAt: '2024-12-02'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/ja/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-grove-vision-ai-v2/
---

# Grove Vision AI V2 用モデルの使用

SenseCraft AI は、Grove Vision AI V2 を含むさまざまなデバイスに対応した幅広い AI モデルを提供する強力なプラットフォームです。Grove Vision AI V2 は、カメラ、プロセッサ、AI 機能を組み合わせた包括的な AI ビジョンモジュールであり、コンピュータビジョンアプリケーションをプロジェクトに簡単に統合できます。このチュートリアルでは、Grove Vision AI V2 上で SenseCraft AI モデルを使用し、そのモデルの出力をプレビューする手順を説明します。また、モデルの性能を理解し最適化するのに役立つ、いくつかの重要な概念と設定についても解説します。

## 事前準備

始める前に、以下を用意してください：

- **Grove Vision AI V2**: Grove Vision AI V2 モジュールを用意し、開発ボードまたはコンピュータに正しく接続しておきます。

- **OV5647-62 FOV Camera Module for Raspberry Pi 3B+4B**: 画像入力に使用します。

- **USB-C ケーブル**: Grove Vision AI V2 モジュールをコンピュータに接続し、プログラミングと電源供給を行うための USB ケーブルが必要です。

- **SenseCraft AI モデルリポジトリ Web ページへのアクセス**: 安定したインターネット接続を確保し、SenseCraft AI の Web サイトにアクセスできるようにします。

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
      <th>OV5647-62 FOV Camera Module<br />for Raspberry Pi 3B+4B</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## ステップ 1. Grove Vision AI V2 用モデルのフィルタリング

Web ブラウザを開き、SenseCraft AI モデルリポジトリにアクセスします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_model_library#/model" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ワンクリックで直接アクセス 🖱️</font></span></strong>
    </a>
</div><br />

モデルリポジトリのページには、さまざまなデバイスやアプリケーション向けに利用可能な幅広い AI モデルが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/13.png" style={{width:1000, height:'auto'}}/></div>

Web ページ左側のサイドバーで、**Supported Devices** セクションを見つけます。デバイス一覧から **Grove - Vision AI V2** をクリックして、使用しているデバイスと互換性のあるモデルにフィルタリングします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/23.png" style={{width:1000, height:'auto'}}/></div>

このステップにより、Grove Vision AI V2 モジュールにデプロイして実行できるモデルのみが表示されるようになります。

## ステップ 2. モデルを選択する

このチュートリアルでは例として **Person Detection** モデルを使用します。ただし、興味や要件に応じて、他のモデルを自由に探索・試用して構いません。

**Person Detection** モデルをクリックして、その専用ページを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/24.png" style={{width:1000, height:'auto'}}/></div>

モデルのページには、説明、モデル精度、モデル形式など、モデルに関する詳細情報が記載されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/25.png" style={{width:1000, height:'auto'}}/></div>

モデルのページで、ページ上部にある **Deploy Model** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/26.png" style={{width:1000, height:'auto'}}/></div>

この操作により、選択したモデルのデプロイプロセスが開始され、Grove Vision AI V2 モジュールにダウンロードして実行するための準備が行われます。

## ステップ 3. デバイスを接続する

モデルをデプロイしたら、デプロイページの下に表示される **Connect Device** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/18.png" style={{width:1000, height:'auto'}}/></div>

新しいページが開きます。この時点で、USB-C ケーブルを使用して Grove Vision AI V2 をコンピュータに接続してください。

デバイス接続ページには、モデル名やモデル ID など、モデル情報の概要が表示されます。Grove Vision AI V2 用に正しいモデルが選択されていることを確認するため、内容をよく確認してください。情報に問題がなければ、**Confirm** ボタンをクリックしてモデルのデプロイを続行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/27.png" style={{width:1000, height:'auto'}}/></div>

モデル情報を確認すると、Grove Vision AI V2 モジュール用のシリアルポートを選択するよう求めるウィンドウがポップアップ表示されます。シリアルポートは、コンピュータと Grove Vision AI V2 モジュール間の通信チャネルです。Grove Vision AI V2 に対応する正しいポート番号を選択してください。不明な場合は、OS のデバイスマネージャやモジュールのドキュメントを参照して、正しいポートを特定できます。

**Connect** ボタンをクリックして、コンピュータと Grove Vision AI V2 モジュール間の接続を確立します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/28.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 4. モデルのアップロード

接続が確立されると、選択したモデルの Grove Vision AI V2 モジュールへのダウンロードが開始されます。モデルのアップロードプロセスには、モデルのサイズやインターネット接続速度にもよりますが、おおよそ 3～5 分かかる場合があります。このステップでは、必要なモデルファイルと依存関係が Grove Vision AI V2 モジュールに転送され、AI モデルをローカルで実行するための準備が行われます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/29.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 5. モデルのプレビュー

モデルのアップロードが正常に完了すると、プレビューフィーチャーが自動的に開始されます。プレビューウィンドウには、Grove Vision AI V2 のカメラからのリアルタイム映像とともに、その映像上に重ねて表示されるモデルの検出結果が表示されます。Person Detection モデルの場合、ビデオストリーム内で検出された人物の周囲にバウンディングボックスが描画されます。各バウンディングボックスは、モデルが人物として認識した対象を表します。プレビューフィーチャーにより、モデルの出力をリアルタイムで確認でき、その性能に関する即時の視覚的フィードバックが得られます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/30.png" style={{width:1000, height:'auto'}}/></div>

## モデルの微調整（オプション）

1. モデルの性能を最適化したり、特定のユースケースに合わせて調整したい場合は、プレビューセクションの下に用意されているオプションを使ってモデル設定を微調整できます。

2. 調整可能な重要なパラメータとして、「Confidence Threshold」と「Intersection over Union (IoU) Threshold」の 2 つがあります。

   - **Confidence Threshold**: この値は、モデルが検出を有効と見なすために必要な最小の信頼度レベルを決定します。Confidence Threshold を高くすると、検出数は少なくなりますが確信度は高くなり、低くすると検出数は増えますが誤検出が含まれる可能性があります。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

   - **IoU Threshold**: IoU は、予測されたバウンディングボックスと正解のバウンディングボックスとの重なり具合を測定する指標です。物体検出の精度を判断するために使用されます。IoU Threshold は、検出を真陽性と見なすために必要な最小 IoU 値を設定します。このしきい値を調整することで、モデルの適合率（Precision）と再現率（Recall）を微調整するのに役立ちます。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

3. Confidence Threshold と IoU Threshold の値をさまざまに試し、人物を正確に検出しつつ誤検出を最小限に抑える最適なバランスを見つけてください。最適な設定は、具体的なアプリケーションや画像・ビデオフィードの特性によって異なる場合があります。

## まとめ

おめでとうございます！SenseCraft AI の Person Detection モデルを Grove Vision AI V2 モジュールに正常にデプロイし、その出力をプレビューし、モデルの性能を微調整する方法を学びました。

このチュートリアルで説明した手順に従うことで、Grove Vision AI V2 モジュール上で SenseCraft AI リポジトリに用意されたさまざまな AI モデルを簡単に探索・試用できます。SenseCraft AI プラットフォームは、初心者から経験豊富な開発者まで利用しやすいユーザーフレンドリーなインターフェースと、豊富なモデル群を提供しています。

対応モデル、その機能、および利用可能な追加設定オプションの詳細については、SenseCraft AI および Grove Vision AI V2 モジュールが提供するドキュメントやリソースを参照するようにしてください。

他のモデルを試したり、さまざまな設定を実験したりして、ご自身のプロジェクトやアプリケーションに合わせて自由にカスタマイズしてください。SenseCraft AI と Grove Vision AI V2 モジュールを組み合わせることで、コンピュータビジョンアプリケーションの可能性が大きく広がります。

Grove Vision AI V2 上で SenseCraft AI モデルを使って、思う存分実験し、創造をお楽しみください！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
