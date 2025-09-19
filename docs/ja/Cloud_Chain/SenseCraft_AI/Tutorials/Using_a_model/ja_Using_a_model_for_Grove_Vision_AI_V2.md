---
sidebar_position: 2
description: Grove Vision AI V2 でモデルを使用する方法
title: Grove Vision AI V2 でモデルを使用する
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/23.webp
slug: /ja/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-grove-vision-ai-v2
aliases:
  - /ja/sensecraft_ai_pretrained_models_for_grove_visionai_v2
last_update:
  date: 12/02/2024
  author: Citric
---

# Grove Vision AI V2 でモデルを使用する

SenseCraft AI は、Grove Vision AI V2 を含む様々なデバイスと互換性のある幅広い AI モデルを提供する強力なプラットフォームです。Grove Vision AI V2 は、カメラ、プロセッサ、AI 機能を組み合わせた包括的な AI ビジョンモジュールで、コンピュータビジョンアプリケーションをプロジェクトに簡単に統合できます。このチュートリアルでは、Grove Vision AI V2 で SenseCraft AI モデルを使用し、モデルの出力をプレビューするプロセスをガイドします。また、モデルのパフォーマンスを理解し最適化するのに役立つ重要な概念と設定についても探求します。

## 前提条件

開始する前に、以下のものが揃っていることを確認してください：

- **Grove Vision AI V2**：Grove Vision AI V2 モジュールが準備され、開発ボードまたはコンピュータに適切に接続されていることを確認してください。

- **Raspberry Pi 3B+4B 用 OV5647-62 FOV カメラモジュール**：画像入力に使用されます。

- **USB-C ケーブル**：プログラミングと電源供給のために Grove Vision AI V2 モジュールをコンピュータに接続するための USB ケーブルが必要です。

- **SenseCraft AI モデルリポジトリウェブページへのアクセス**：安定したインターネット接続があり、SenseCraft AI ウェブサイトにアクセスできることを確認してください。

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
      <th>Raspberry Pi 3B+4B 用<br />OV5647-62 FOV カメラモジュール</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>

</div>

## ステップ1. Grove Vision AI V2用のモデルをフィルタリング

Webブラウザを開き、SenseCraft AIモデルリポジトリにアクセスします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/model" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ワンクリック直接アクセス 🖱️</font></span></strong>
    </a>
</div><br />

モデルリポジトリページには、さまざまなデバイスとアプリケーション向けの幅広いAIモデルが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/13.png" style={{width:1000, height:'auto'}}/></div>

Webページの左サイドバーで、**Supported Devices**セクションを見つけます。デバイスリストから**Grove - Vision AI V2**をクリックして、お使いの特定のデバイスと互換性のあるモデルをフィルタリングします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/23.png" style={{width:1000, height:'auto'}}/></div>

このステップにより、Grove Vision AI V2モジュールにデプロイして実行できるモデルのみが表示されるようになります。

## ステップ2. モデルを選択

このチュートリアルでは、例として**Person Detection**モデルを使用します。ただし、お客様の興味や要件に基づいて、他のモデルも自由に探索・実験してください。

**Person Detection**モデルをクリックして、専用ページを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/24.png" style={{width:1000, height:'auto'}}/></div>

モデルページでは、説明、モデル精度、モデル形式など、モデルに関する詳細情報を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/25.png" style={{width:1000, height:'auto'}}/></div>

モデルのページで、ページ上部にある**Deploy Model**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/26.png" style={{width:1000, height:'auto'}}/></div>

この操作により、選択したモデルのデプロイプロセスが開始され、Grove Vision AI V2モジュールにダウンロードして実行する準備が整います。

## ステップ3. デバイスを接続

モデルをデプロイした後、デプロイページの下に表示される**Connect Device**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/18.png" style={{width:1000, height:'auto'}}/></div>

新しいページが開きます。この時点で、Grove Vision AI V2をUSB-Cケーブルでコンピュータに接続してください。

デバイス接続ページでは、モデル名とモデルIDを含むモデル情報の概要が表示されます。詳細を注意深く確認して、Grove Vision AI V2に正しいモデルが選択されていることを確認してください。情報が正確であれば、**Confirm**ボタンをクリックしてモデルのデプロイを続行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/27.png" style={{width:1000, height:'auto'}}/></div>

モデル情報を確認した後、Grove Vision AI V2モジュールのシリアルポートを選択するよう求めるウィンドウがポップアップ表示されます。シリアルポートは、コンピュータとGrove Vision AI V2モジュール間の通信チャネルです。Grove Vision AI V2に対応する正しいポート番号を選択してください。不明な場合は、お使いのオペレーティングシステムのデバイスマネージャーまたはモジュールのドキュメントを参照して、正しいポートを特定してください。

**Connect**ボタンをクリックして、コンピュータとGrove Vision AI V2モジュール間の接続を確立します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/28.png" style={{width:1000, height:'auto'}}/></div>

## ステップ4. モデルアップロード

接続が確立されると、選択されたモデルがGrove Vision AI V2モジュールへのダウンロードを開始します。モデルアップロードプロセスは、モデルのサイズとインターネット接続の速度によって約3-5分かかる場合があります。このステップでは、必要なモデルファイルと依存関係がGrove Vision AI V2モジュールに転送され、AIモデルをローカルで実行する準備が整います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/29.png" style={{width:1000, height:'auto'}}/></div>

## ステップ5. モデルプレビュー

モデルアップロードが成功すると、プレビュー機能が自動的に開始されます。プレビューウィンドウには、Grove Vision AI V2のカメラからのリアルタイム映像フィードが表示され、モデルの検出結果が映像にオーバーレイされます。人物検出モデルの場合、映像ストリーム内で検出された人物の周りにバウンディングボックスが描画されます。各バウンディングボックスは、モデルが識別した人物を表します。プレビュー機能により、モデルの出力をリアルタイムで確認でき、その性能に対する即座の視覚的フィードバックが提供されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/30.png" style={{width:1000, height:'auto'}}/></div>

## モデルの微調整（オプション）

1. モデルの性能を最適化したり、特定の用途に適応させたい場合は、プレビューセクション下部で利用可能なオプションを使用してモデルの設定を微調整できます。

2. 調整可能な2つの重要なパラメータは「信頼度閾値」と「Intersection over Union（IoU）閾値」です。

   - **信頼度閾値**: この値は、モデルが検出を有効と見なすために必要な最小信頼度レベルを決定します。信頼度閾値が高いほど検出数は少なくなりますが確実性が高くなり、閾値が低いほど検出数は多くなりますが偽陽性が含まれる可能性があります。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

   - **IoU閾値**: IoUは、予測されたバウンディングボックスと正解のバウンディングボックス間の重複を測定する指標です。物体検出の精度を決定するために使用されます。IoU閾値は、検出が真陽性と見なされるために必要な最小IoU値を設定します。この閾値を調整することで、モデルの精度と再現率を微調整できます。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

3. 信頼度閾値とIoU閾値の異なる値を試して、人物を正確に検出することと偽陽性を最小化することの最適なバランスを見つけてください。最適な設定は、特定のアプリケーションや画像・映像フィードの特性によって異なる場合があります。

## まとめ

おめでとうございます！Grove Vision AI V2モジュールにSenseCraft AI人物検出モデルを正常にデプロイし、その出力をプレビューし、モデルの性能を微調整する方法を学習しました。

このチュートリアルで説明した手順に従うことで、Grove Vision AI V2モジュール上でSenseCraft AIリポジトリで利用可能な様々なAIモデルを簡単に探索し、実験できます。SenseCraft AIプラットフォームは、ユーザーフレンドリーなインターフェースと幅広いモデル選択肢を提供し、初心者から経験豊富な開発者まで利用しやすくなっています。

サポートされているモデル、その機能、利用可能な追加設定オプションについての詳細情報は、SenseCraft AIとGrove Vision AI V2モジュールが提供するドキュメントとリソースを参照してください。

他のモデルを探索し、異なる設定を試し、特定のプロジェクトやアプリケーションに適応させることを自由に行ってください。SenseCraft AIとGrove Vision AI V2モジュールの組み合わせは、コンピュータビジョンアプリケーションの可能性の世界を開きます。

Grove Vision AI V2でのSenseCraft AIモデルを使った実験と創作を楽しんでください！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
