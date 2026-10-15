---
sidebar_position: 7
description: この記事では、Grove Vision AI V2 と SenseCraft AI を使用して出力を取得する方法について説明します。
title: Grove Vision AI V2 のモデル出力
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/54.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-output-grove-vision-ai
aliases:
  - /sensecraft_ai_output_grove_visionai
last_update:
  date: 12/04/2024
  author: Citric
createdAt: '2024-11-27'
updatedAt: '2026-08-04'
url: https://wiki.seeedstudio.com/ja/sensecraft-ai/tutorials/sensecraft-ai-output-grove-vision-ai/
---

# Grove Vision AI V2 用 SenseCraft AI でのモデル出力の設定

この Wiki 記事では、SenseCraft AI プラットフォームを使用して Grove Vision AI V2 デバイスのモデル出力設定を構成する方法について、包括的なガイドを提供します。ステップバイステップの手順に従うことで、Grove Vision AI V2 上で動作する学習済みモデルの出力に基づいて、トリガー条件とアクションを設定する方法を学ぶことができます。

## 前提条件

開始する前に、以下を用意してください：

1. Grove Vision AI V2 デバイス

2. Grove Vision AI V2 をコンピュータに接続するための USB-C ケーブル

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## ステップ 1. Grove Vision AI V2 ワークスペースへアクセスしデバイスを接続する

**[`SenseCraft AI`](https://sensecraft.seeed.cc/ai/home?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_home)** > **`Models`** > **`Workspace`** > **`Grove Vision AI V2`** の順にクリックして Grove Vision AI V2 ワークスペースにアクセスするか、[ワークスペースへの直接リンク](https://sensecraft.seeed.cc/ai/device/local/36)を使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/grove_vision_ai_v2_workspace.png" style={{width:1000, height:'auto'}}/></div>

USB-C ケーブルを使用して、Grove Vision AI V2 デバイスをコンピュータに接続します。デバイスが接続されたら、ワークスペースページ左上にある **Connect** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## ステップ 2. Grove Vision AI V2 にモデルがロードされていることを確認する

先に進む前に、Grove Vision AI V2 デバイスに学習済みモデルがデプロイされていることを確認してください。まだモデルをデプロイしていない場合は、SenseCraft AI のドキュメントを参照して、デバイスにモデルを学習・デプロイする手順を確認してください。

- [Grove Vision AI V2 用モデルの使用](https://wiki.seeedstudio.com/ja/sensecraft_ai_pretrained_models_for_grove_visionai_v2/)

自分で学習させたモデルを使用したい場合は、次の 2 つの Wiki を参照してください。

- [トレーニングの種類 - 分類](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_classification/)
- [トレーニングの種類 - 物体検出](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_object_detection/)

## ステップ 3. 出力設定にアクセスする

ワークスペースページの左サイドバーで **Output** オプションをクリックし、Grove Vision AI V2 デバイスの出力設定にアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/50.png" style={{width:1000, height:'auto'}}/></div>

ページ右側で、**Trigger action when event conditions are met** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/46.png" style={{width:800, height:'auto'}}/></div>

ダイアログボックスが表示され、希望するアクションのトリガー条件として使用される各種パラメータの入力を求められます。これらのパラメータには次のものが含まれます：

- **Object**: アクションをトリガーするためにモデルが検出すべきオブジェクトを指定します。例えば、人が検出されたときにアクションを実行したい場合は「person」とします。

- **Condition**: トリガーが発生するために満たす必要がある条件を選択します。「Greater than」「Less than」「Equal to」などのオプションがあります。例えば「Greater than」を選択すると、検出されたオブジェクトの信頼度が指定した値より大きい場合にアクションがトリガーされます。

- **Confidence**: オブジェクト検出がアクションをトリガーするために必要な最小信頼度を設定します。この値は 1 から 100 の範囲で、100 が最も高い信頼度です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/51.png" style={{width:600, height:'auto'}}/></div>

希望するトリガー条件を設定したら、**Confirm** ボタンをクリックして設定を保存します。

## ステップ 4. 希望するトリガーアクションを選択する

Grove Vision AI V2 は、次の 2 種類のトリガーアクションをサポートしています：

- **LED を点灯する**: このオプションを選択すると、トリガー条件が満たされたときに Grove Vision AI V2 のオンボード LED が点灯します。

- **画像を SD カードに保存する**: このオプションを選択すると、トリガー条件が満たされたときに、Grove Vision AI V2 はデバイスに挿入された MicroSD カードに撮影した画像を保存します。

有効にしたいトリガーアクションの横にあるチェックボックスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/52.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 5. トリガー設定を Grove Vision AI V2 に送信する

最後に、**Send** ボタンをクリックして、トリガー設定を Grove Vision AI V2 デバイスに送信します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/53.png" style={{width:1000, height:'auto'}}/></div>

これで Grove Vision AI V2 は、指定した条件が満たされたときに設定したトリガーアクションを実行し、モデル出力を視覚的に示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/54.jpg" style={{width:400, height:'auto'}}/></div>

:::caution
出力機能は、SenseCraft AI プラットフォームと Grove Vision AI V2 デバイス間の Web ベースの接続に依存していることに注意してください。接続が失われたり中断されたりすると、設定したトリガーアクションは動作を停止します。作業中は安定した接続を維持してください。
:::

## まとめ

このステップバイステップガイドに従うことで、SenseCraft AI プラットフォーム上で Grove Vision AI V2 デバイスのモデル出力設定とトリガーアクションを構成する方法を学びました。これで、学習済みモデルの出力に基づいて、オンボード LED を点灯したり、撮影した画像を保存したりといった特定のアクションをデバイスに実行させることができます。この機能により、Grove Vision AI V2 と SenseCraft AI を使用してインタラクティブなアプリケーションやプロジェクトを作成できます。シームレスに動作させるために、Web プラットフォームとデバイス間の接続を安定して保つことを忘れないでください。

Grove Vision AI V2 は本質的には AI カメラセンサーであるため、センサー的な用途以上のことを期待することはできません。追加の MCU があれば、Grove インターフェースやピンツーピンインターフェースを使って、より興味深いプロジェクトを行うことができます。SenseCraft AI はモデルを配信するための媒体に過ぎません。Grove Vision AI V2 モジュール向けの Arduino ルーチンについては、[Grove Vision AI V2 入門](https://wiki.seeedstudio.com/ja/grove_vision_ai_v2_software_support/)を参照してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
