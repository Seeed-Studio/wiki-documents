---
description: この記事では、Grove Vision AI V2とSenseCraft AIを使用して出力を取得する方法について説明します。
title: Grove Vision AI V2モデル出力
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/54.webp
slug: /ja/sensecraft_ai_output_grove_visionai
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Grove Vision AI V2のSenseCraft AIでのモデル出力設定

このWiki記事では、SenseCraft AIプラットフォームを使用してGrove Vision AI V2デバイスのモデル出力設定を構成する方法についての包括的なガイドを提供します。このステップバイステップの手順に従うことで、Grove Vision AI V2で実行されているトレーニング済みモデルの出力に基づいてトリガー条件とアクションを設定する方法を学ぶことができます。

## 前提条件

開始する前に、以下を準備してください：

1. Grove Vision AI V2デバイス

2. Grove Vision AI V2をコンピュータに接続するためのUSB-Cケーブル

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## ステップ1. SenseCraft AI Vision Workspaceにアクセスし、Grove Vision AI V2を接続する

ウェブブラウザを開き、SenseCraft AI Vision Workspaceページに移動します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1733300644024" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ワンクリックでアクセス 🖱️</font></span></strong>
    </a>
</div><br />

利用可能なデバイスのリストから、Grove Vision AI V2を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/49.png" style={{width:1000, height:'auto'}}/></div>

USB-Cケーブルを使用して、Grove Vision AI V2デバイスをコンピュータに接続します。デバイスが接続されたら、SenseCraft AI Vision Workspaceページの左上にある**Connect**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## ステップ2. Grove Vision AI V2にモデルがロードされていることを確認する

次に進む前に、Grove Vision AI V2デバイスにトレーニング済みモデルがデプロイされていることを確認してください。まだモデルをデプロイしていない場合は、SenseCraft AIのドキュメントを参照して、デバイスにモデルをトレーニングおよびデプロイする方法を確認してください。

- [Grove Vision AI V2でモデルを使用する](https://wiki.seeedstudio.com/ja/sensecraft_ai_pretrained_models_for_grove_visionai_v2/)

独自のトレーニング済みモデルを使用したい場合は、以下の2つのWikiを参照してください。

- [トレーニングタイプ - 分類](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_classification/)
- [トレーニングタイプ - オブジェクト検出](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_object_detection/)

## ステップ 3. 出力設定にアクセスする

Vision Workspace ページの左サイドバーで、**Output** オプションをクリックして Grove Vision AI V2 デバイスの出力設定にアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/50.png" style={{width:1000, height:'auto'}}/></div>

ページの右側で、**Trigger action when event conditions are met** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/46.png" style={{width:800, height:'auto'}}/></div>

ダイアログボックスが表示され、希望するアクションのトリガー条件として機能するさまざまなパラメータを入力するよう求められます。これらのパラメータには以下が含まれます：

   - **Object**: モデルが検出すべきオブジェクトを指定してアクションをトリガーします。例えば、「person」と指定すると、人が検出されたときにアクションが発生します。

   - **Condition**: トリガーが発生するために満たすべき条件を選択します。「Greater than（より大きい）」、「Less than（より小さい）」、「Equal to（等しい）」などのオプションがあります。例えば、「Greater than」を選択すると、検出されたオブジェクトの信頼度が指定した値より大きい場合にアクションがトリガーされます。

   - **Confidence**: オブジェクト検出がアクションをトリガーするために必要な最小信頼度を設定します。この値は 1 から 100 の範囲で、100 が最も高い信頼度です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/51.png" style={{width:600, height:'auto'}}/></div>

希望するトリガー条件を設定した後、**Confirm** ボタンをクリックして設定を保存します。

## ステップ 4. 希望するトリガーアクションを選択する

Grove Vision AI V2 は以下の 2 種類のトリガーアクションをサポートしています：

  - **LED を点灯する**: このオプションを選択すると、トリガー条件が満たされたときに Grove Vision AI V2 のオンボード LED が点灯します。

  - **画像を SD カードに保存する**: このオプションを選択すると、トリガー条件が満たされたときに Grove Vision AI V2 がキャプチャした画像をデバイスに挿入された MicroSD カードに保存します。

希望するトリガーアクションの横にあるチェックボックスを選択して有効にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/52.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 5. トリガー設定を Grove Vision AI V2 に送信する

最後に、**Send** ボタンをクリックしてトリガー設定を Grove Vision AI V2 デバイスに送信します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/53.png" style={{width:1000, height:'auto'}}/></div>

これで Grove Vision AI V2 は指定された条件が満たされたときに設定されたトリガーアクションを実行し、モデルの出力を視覚的に示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/54.jpg" style={{width:400, height:'auto'}}/></div>


:::caution
出力機能は SenseCraft AI プラットフォームと Grove Vision AI V2 デバイス間のウェブベースの接続に依存していることに注意してください。接続が失われたり中断された場合、設定されたトリガーアクションは動作を停止します。プロセス全体を通じて安定した接続を確保してください。
:::

## 結論

このステップバイステップガイドに従うことで、Grove Vision AI V2デバイス向けにSenseCraft AIプラットフォームでモデル出力設定を構成し、アクションをトリガーする方法を学びました。これにより、トレーニング済みモデルの出力に基づいて、オンボードLEDを点灯させたり、キャプチャした画像を保存したりするなど、特定のアクションを実行するようデバイスを設定できます。この機能を活用することで、Grove Vision AI V2とSenseCraft AIを使用してインタラクティブなアプリケーションやプロジェクトを作成することが可能になります。ウェブプラットフォームとデバイス間の安定した接続を維持することを忘れずに、円滑な操作を確保してください。

Grove Vision AI V2は本質的にはAIカメラセンサーであるため、センサー関連の機能以上のことを期待するのは難しいかもしれません。ただし、追加のMCUがあれば、GroveインターフェースやPin to Pinインターフェースを使用して、より興味深いプロジェクトを実現することができます。SenseCraft AIはモデルを提供するための媒介に過ぎません。Grove Vision AI V2モデルに関するArduinoルーチンについては、[Grove Vision AI V2の使い方](https://wiki.seeedstudio.com/ja/grove_vision_ai_v2_software_support/)をご参照ください。

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>