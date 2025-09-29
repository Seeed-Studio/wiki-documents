---
description: TinyMLワークショップコース
title: AIワークショップ - ほぼすべてにAIを追加する方法
keywords:
- tinyml コース
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/tinyml_workshop_course_new
last_update:
  date: 05/15/2025
  author: Citric, Matthew, Frank
---


# ほぼすべてにAIを追加する方法

## AIワークショップ概要

Seeed Studioが主催するこのハンズオンワークショップは、AI初心者やArduinoファンに特化して設計されています。

親指サイズながら強力なMCUであるXIAO ESP32S3 Senseを使用して、TinyMLの変革的な世界に飛び込みましょう。

このワークショップでは、機械学習の実践的でわかりやすい入門を提供し、AIの世界を解き明かします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/tinyml2.png" style={{width:1000, height:'auto'}}/></div>

このコースを通じて、SenseCraft AI Platformを強力なオンライン開発環境として使用する方法を探求します。データ管理、前処理、特徴エンジニアリング、モデル設計、トレーニング、評価、最適化のプロセスを案内します。

特に、データ収集、前処理、特徴エンジニアリングなどのタスクを簡素化するグラフィカルインターフェースや、適切なモデルアーキテクチャとトレーニングパラメータの選択に焦点を当てます。

<div class="button_tech_support_container">
<a href="https://wiki.seeedstudio.com/ja/sensecraft_ai_main/" class="button_edgelab"></a> 
</div>

このコースに参加することで、以下のスキルと知識を得ることができます：

- SenseCraft AI Platformの基本機能とワークフローに精通する。
- データ前処理、モデルトレーニング、評価などの基本的なステップに習熟する。
- TinyMLの概念とその応用シナリオを理解する。

初心者でも、ある程度の機械学習の背景を持つ経験者でも、このコースはIoTプロジェクトにTinyMLを適用するための貴重な実践経験とスキルを提供します。一緒にこのエキサイティングな学習の旅を始めましょう！

:::note
ワークショップを完了するには、以下の指示に従い、各ページで課題を完了してください。次のステップに進む前に必ず課題を終わらせてください。
:::

## 主な学術参考文献：

<div class="button_tech_support_container">
<a href="https://mlsysbook.ai/" class="button_ml_harvard_book"></a> 
</div>

## ワークショップで使用するキット

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">XIAO ESP32S3 Senseを1つ申請</th>
      <th class="table-trnobg">ML実践クラスキット全体</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-110992064-machine-learning-practical-class-kit-all.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🖱️ 今すぐ入手</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Machine-Learning-Practical-Class-Kit-p-5951.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🖱️ 今すぐ入手</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## はじめに

### ステップ 1: AI「Blink」：AIを素早く活用する

<div class="all_container">
  <div class="getting_started">
      <div class="start_card_wrapper">
          <a href= "/ja/sscma" class="getting_started_label2">1.1 SenseCraft AI プラットフォームの紹介</a>
          <br/>使用するツールに慣れましょう。
      </div>
  </div>
    <div class="getting_started">
      <div class="start_card_wrapper">
          <a href= "/ja/sscma/#the-ai-blink-quickly-using-ai" class="getting_started_label2">1.2 AI「Blink」</a>
          <br/>パブリックAIモデルライブラリをエッジデバイス（XIAO ESP32S3 Sense）に簡単にデプロイする方法を学びます。
      </div>
  </div>
</div>

### ステップ 2: 独自のAIモデルをトレーニングしてデプロイする

<div class="all_container">
  <div class="getting_started">
      <div class="start_card_wrapper">
          <a href= "/ja/train_and_deploy_model" class="getting_started_label2">2. 独自のプロジェクトを構築する</a>
          <br/>独自のモデルを簡単にトレーニングしてデプロイする方法を学びます。  
      </div>
  </div>
</div>

### ステップ 3: フェデレーション（オプション）

<div class="all_container">
  <div class="getting_started">
      <div class="start_card_wrapper">
          <a href= "/ja/train_and_deploy_model/#optional-federate-transmit-data-wide-away" class="getting_started_label2">3. データを広範囲に送信する</a>
          <br/>SenseCraftでモデルを広範囲にフェデレーションする方法を学びます。
      </div>
  </div>
</div>

上記のトピックを順番に進め、次のレベルに進むためのToDoを完了してください。頑張って、楽しいものづくりを🙌。

## ✨ コラボレーション ✨

このコースはオープンソースであり、さらなるコラボレーションを歓迎します！[こちら](https://wiki.seeedstudio.com/ja/Contribution-Guide/)を参照して、コントリビューション（プルリクエスト）ガイドをご覧ください。

:::info
これらのファイルは `docs/Topics/TinyML/TinyML_Workshop` の相対パスにあります。
:::

## （別の方法）Edge Impulse

<div class="button_tech_support_container">
<a href="https://edgeimpulse.com/" class="button_edgeimpulse"></a> 
</div>

Edge Impulseは、組み込みデバイス向けにTinyMLモデルを開発およびデプロイするためのプラットフォームです。リアルタイムデータ収集、モデル量子化、最適化のためのツールを提供し、XIAO ESP32S3のようなデバイスへの効率的なデプロイを可能にします。

詳細については、[こちらのドキュメント](https://wiki.seeedstudio.com/ja/edgeimpulse/)をご覧ください。[キーワードスポッティング](https://wiki.seeedstudio.com/ja/tinyml_course_Key_Word_Spotting/)や[画像分類](https://wiki.seeedstudio.com/ja/tinyml_course_Image_classification_project/)を実行する際には、デフォルトのESP NNフォルダを[提供されているバージョン](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/blob/main/ESP-NN.zip)に置き換えることを忘れないでください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>