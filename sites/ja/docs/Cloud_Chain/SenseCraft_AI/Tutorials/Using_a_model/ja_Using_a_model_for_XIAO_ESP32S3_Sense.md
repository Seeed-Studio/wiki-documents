---
sidebar_position: 1
description: XIAO ESP32S3 Sense用のモデルの使用方法
title: XIAO ESP32S3 Sense用のモデルの使用
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/14.webp
slug: /ja/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-xiao
aliases:
  - /ja/sensecraft_ai_pretrained_models_for_xiao
last_update:
  date: 12/02/2024
  author: Citric
---

# XIAO ESP32S3 Sense用のモデルの使用

SenseCraft AIは、様々なデバイスと互換性のあるAIモデルの豊富なリポジトリを提供する強力なプラットフォームです。開発者や愛好家が、自分のハードウェア上で異なるAIモデルを簡単にデプロイし、実験することを可能にします。この包括的なチュートリアルでは、XIAO ESP32S3 SenseボードでSenseCraft AIモデルを使用し、モデルの出力をプレビューするプロセスをガイドします。また、モデルの性能を理解し最適化するために、いくつかの重要な概念と設定についても詳しく説明します。

## 前提条件

開始する前に、以下のものが揃っていることを確認してください：

- **XIAO ESP32S3 Senseボード**：これは、ESP32-S3マイクロコントローラーの力と様々なセンサーおよび周辺機器を組み合わせた、コンパクトで多用途な開発ボードです。

- **USB-Cケーブル**：プログラミングと電源供給のために、XIAO ESP32S3 Senseボードをコンピューターに接続するためのUSBケーブルが必要です。

- **SenseCraft AIモデルリポジトリウェブページへのアクセス**：安定したインターネット接続があり、SenseCraft AIウェブサイトにアクセスできることを確認してください。

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
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>

</div>

## ステップ1. XIAO ESP32S3 Sense用のモデルをフィルタリング

Webブラウザを開き、SenseCraft AIモデルリポジトリにアクセスします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/model" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ワンクリック直接アクセス 🖱️</font></span></strong>
    </a>
</div><br />

モデルリポジトリページには、さまざまなデバイスとアプリケーション向けの幅広いAIモデルが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/13.png" style={{width:1000, height:'auto'}}/></div>

Webページの左サイドバーで、**Supported Devices**セクションを見つけます。デバイスのリストから、**XIAO ESP32S3 Sense**をクリックして、お使いの特定のデバイスと互換性のあるモデルをフィルタリングします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/14.png" style={{width:1000, height:'auto'}}/></div>

このステップにより、XIAO ESP32S3 Senseボードにデプロイして実行できるモデルのみが表示されるようになります。

## ステップ2. モデルを選択

このチュートリアルでは、例として**Face Detection**モデルを使用します。ただし、お客様の興味や要件に基づいて、他のモデルも自由に探索・実験してください。

**Face Detection**モデルをクリックして、専用ページを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/15.png" style={{width:1000, height:'auto'}}/></div>

モデルページでは、説明、モデル精度、モデル形式など、モデルに関する詳細情報を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/16.png" style={{width:1000, height:'auto'}}/></div>

モデルのページで、ページ上部にある**Deploy Model**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/17.png" style={{width:1000, height:'auto'}}/></div>

この操作により、選択したモデルのデプロイメントプロセスが開始され、XIAO ESP32S3 Senseボードにダウンロードして実行する準備が整います。

## ステップ3. デバイスを接続

Deploy Modelボタンをクリックした後、デプロイメントページの下に表示される**Connect Device**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/18.png" style={{width:1000, height:'auto'}}/></div>

新しいページが開きます。この時点で、XIAO ESP32S3 SenseをUSB-Cケーブルでコンピュータに接続してください。

デバイス接続ページでは、名前とモデルIDを含むモデル情報の概要が表示されます。詳細を注意深く確認して、XIAO ESP32S3 Senseボード用に正しいモデルが選択されていることを確認してください。情報が正確であれば、**Confirm**ボタンをクリックしてモデルのデプロイメントを続行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/19.png" style={{width:1000, height:'auto'}}/></div>

モデル情報を確認した後、XIAOボード用のシリアルポートを選択するよう求めるウィンドウがポップアップ表示されます。シリアルポートは、コンピュータとXIAO ESP32S3 Senseボード間の通信チャネルです。XIAO ESP32S3 Senseに対応する正しいポート番号を選択してください。不明な場合は、オペレーティングシステムのデバイスマネージャーまたはボードのドキュメントを参照して、正しいポートを特定できます。

**Connect**ボタンをクリックして、コンピュータとXIAOボード間の接続を確立します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/20.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 4. モデルのアップロード

接続が確立されると、選択されたモデルがXIAOボードへのダウンロードを開始します。モデルのアップロードプロセスは、モデルのサイズとインターネット接続の速度によって約1〜2分かかる場合があります。このステップでは、必要なモデルファイルと依存関係がXIAO ESP32S3 Senseボードに転送され、AIモデルをローカルで実行する準備が整います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/21.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 5. モデルプレビュー

モデルのアップロードが成功すると、プレビュー機能が自動的に開始されます。プレビューウィンドウには、XIAO ESP32S3 Senseのカメラからのリアルタイム映像フィードが表示され、モデルの検出結果が映像にオーバーレイされます。顔検出モデルの場合、映像ストリーム内で検出された顔の周りに境界ボックスが描画されます。各境界ボックスは、モデルが識別した顔を表します。プレビュー機能により、モデルの出力をリアルタイムで確認でき、その性能の即座の視覚的フィードバックを得ることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/22.png" style={{width:1000, height:'auto'}}/></div>

## モデルの微調整（オプション）

1. モデルの性能を最適化したり、特定の用途に適応させたい場合は、プレビューセクションの下にある利用可能なオプションを使用してモデルの設定を微調整できます。

2. 調整できる2つの重要なパラメータは、「信頼度閾値」と「Intersection over Union（IoU）閾値」です。

   - **信頼度閾値**: この値は、モデルが検出を有効と見なすために必要な最小信頼度レベルを決定します。信頼度閾値が高いほど検出数は少なくなりますが確実性が高くなり、閾値が低いほど検出数は多くなりますが偽陽性が含まれる可能性があります。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

   - **IoU閾値**: IoUは、予測された境界ボックスと正解境界ボックス間の重複を測定する指標です。物体検出の精度を決定するために使用されます。IoU閾値は、検出が真陽性と見なされるために必要な最小IoU値を設定します。この閾値を調整することで、モデルの精度と再現率を微調整できます。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

3. 信頼度閾値とIoU閾値の異なる値を試して、顔を正確に検出することと偽陽性を最小化することの最適なバランスを見つけてください。最適な設定は、特定のアプリケーションや画像・映像フィードの特性によって異なる場合があります。

## まとめ

おめでとうございます！XIAO ESP32S3 SenseボードにSenseCraft AI顔検出モデルを正常にデプロイし、その出力をプレビューし、モデルの性能を微調整する方法を学びました。

このチュートリアルで説明した手順に従うことで、XIAO ESP32S3 Sense上でSenseCraft AIリポジトリで利用可能な様々なAIモデルを簡単に探索し、実験することができます。SenseCraft AIプラットフォームは、ユーザーフレンドリーなインターフェースと幅広いモデルの選択肢を提供し、初心者から経験豊富な開発者まで利用しやすくなっています。

サポートされているモデル、その機能、利用可能な追加設定オプションについての詳細情報は、SenseCraft AIとXIAO ESP32S3 Senseボードが提供するドキュメントとリソースを参照してください。

他のモデルを探索し、異なる設定を試し、特定のプロジェクトやアプリケーションに適応させることを自由に行ってください。SenseCraft AIとXIAO ESP32S3 Senseボードの組み合わせにより、可能性は無限大です。

XIAO ESP32S3 Sense上でSenseCraft AIモデルを使った実験と創作を楽しんでください！

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
