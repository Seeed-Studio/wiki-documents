---
sidebar_position: 7
description: この記事では、Grove Vision AI V2とSenseCraft AIを使用して出力を取得する方法について説明します。
title: Grove Vision AI V2のモデル出力
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/54.webp
slug: /ja/sensecraft-ai/tutorials/sensecraft-ai-output-grove-vision-ai
aliases:
  - /ja/sensecraft_ai_output_grove_visionai
last_update:
  date: 12/04/2024
  author: Citric
---

# SenseCraft AIでのGrove Vision AI V2のモデル出力設定

このwiki記事では、SenseCraft AIプラットフォームを使用してGrove Vision AI V2デバイスのモデル出力設定を構成する方法について包括的なガイドを提供します。これらのステップバイステップの手順に従うことで、Grove Vision AI V2で実行されている訓練済みモデルの出力に基づいてトリガー条件とアクションを設定する方法を学習できます。

## 前提条件

開始する前に、以下のものが揃っていることを確認してください：

1. Grove Vision AI V2デバイス

2. Grove Vision AI V2をコンピューターに接続するためのUSB-Cケーブル

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>

</div>

## ステップ1. SenseCraft AI Vision Workspaceにアクセスし、Grove Vision AI V2を接続する

Webブラウザを開き、SenseCraft AI Vision Workspaceページに移動します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1733300644024" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ワンクリック直接アクセス 🖱️</font></span></strong>
    </a>
</div><br />

利用可能なデバイスのリストから、Grove Vision AI V2を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/49.png" style={{width:1000, height:'auto'}}/></div>

USB-Cケーブルを使用して、Grove Vision AI V2デバイスをコンピュータに接続します。デバイスが接続されたら、SenseCraft AI Vision Workspaceページの左上にある**Connect**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## ステップ2. Grove Vision AI V2にモデルがロードされていることを確認する

続行する前に、Grove Vision AI V2デバイスに訓練済みモデルがデプロイされていることを確認してください。まだモデルをデプロイしていない場合は、SenseCraft AIドキュメントを参照して、デバイスにモデルを訓練およびデプロイする方法の手順を確認してください。

- [Grove Vision AI V2でモデルを使用する](https://wiki.seeedstudio.com/ja/sensecraft_ai_pretrained_models_for_grove_visionai_v2/)

独自の訓練済みモデルを使用したい場合は、以下の2つのWikiを参照してください。

- [訓練の種類 - 分類](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_classification/)
- [訓練の種類 - 物体検出](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_object_detection/)

## ステップ3. 出力設定にアクセスする

Vision Workspaceページの左サイドバーで、**Output**オプションをクリックして、Grove Vision AI V2デバイスの出力設定にアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/50.png" style={{width:1000, height:'auto'}}/></div>

ページの右側で、**Trigger action when event conditions are met**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/46.png" style={{width:800, height:'auto'}}/></div>

ダイアログボックスが表示され、希望するアクションのトリガー条件として機能するさまざまなパラメータの入力を求められます。これらのパラメータには以下が含まれます：

- **Object**: モデルがアクションをトリガーするために検出すべきオブジェクトを指定します。例えば、人が検出されたときにアクションを発生させたい場合は「person」です。

- **Condition**: トリガーが発生するために満たされなければならない条件を選択します。オプションには「Greater than」、「Less than」、「Equal to」などがあります。例えば、「Greater than」を選択すると、検出されたオブジェクトの信頼度レベルが指定された値より大きい場合にアクションがトリガーされます。

- **Confidence**: アクションをトリガーするオブジェクト検出に必要な最小信頼度レベルを設定します。この値は1から100の範囲で、100が最高の信頼度です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/51.png" style={{width:600, height:'auto'}}/></div>

希望するトリガー条件を設定した後、**Confirm**ボタンをクリックして設定を保存します。

## ステップ 4. 希望するトリガーアクションを選択する

Grove Vision AI V2 は2種類のトリガーアクションをサポートしています：

- **LED を点灯させる**: このオプションを選択すると、トリガー条件が満たされた際に Grove Vision AI V2 のオンボード LED が点灯します。

- **画像を SD カードに保存する**: このオプションを選択すると、トリガー条件が満たされた際に Grove Vision AI V2 がキャプチャした画像をデバイスに挿入された MicroSD カードに保存します。

希望するトリガーアクションの横にあるチェックボックスを選択して有効にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/52.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 5. トリガー設定を Grove Vision AI V2 に送信する

最後に、**Send** ボタンをクリックしてトリガー設定を Grove Vision AI V2 デバイスに送信します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/53.png" style={{width:1000, height:'auto'}}/></div>

Grove Vision AI V2 は、指定された条件が満たされた際に設定されたトリガーアクションを実行し、モデルの出力を視覚的に示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/54.jpg" style={{width:400, height:'auto'}}/></div>

:::caution
出力機能は SenseCraft AI プラットフォームと Grove Vision AI V2 デバイス間のウェブベースの接続に依存していることを覚えておいてください。接続が失われたり中断されたりすると、設定されたトリガーアクションは動作を停止します。プロセス全体を通して安定した接続を確保してください。
:::

## 結論

このステップバイステップガイドに従うことで、Grove Vision AI V2 デバイス用の SenseCraft AI プラットフォームでモデル出力設定とトリガーアクションを設定する方法を学びました。これで、訓練されたモデルの出力に基づいて、オンボード LED の点灯やキャプチャした画像の保存などの特定のアクションを実行するようにデバイスを設定できます。この機能により、Grove Vision AI V2 と SenseCraft AI を使用してインタラクティブなアプリケーションやプロジェクトを作成できます。シームレスな動作のために、ウェブプラットフォームとデバイス間の安定した接続を維持することを忘れないでください。

Grove Vision AI V2 は本質的には AI カメラセンサーであるため、センサー機能以上のことを期待することはできません。追加の MCU がある場合は、Grove インターフェースや Pin to Pin インターフェースを使用してより興味深いプロジェクトを行うことができます。SenseCraft AI はモデルを配信するための媒体に過ぎません。Grove Vision AI V2 モデルでのより多くの Arduino ルーチンについては、[Getting Started with Grove Vision AI V2](https://wiki.seeedstudio.com/ja/grove_vision_ai_v2_software_support/) を参照してください。

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
