---
description: Grove Vision AI V2 用モデルの使用方法
title: Grove Vision AI V2 用
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/23.webp
slug: /ja/sensecraft_ai_pretrained_models_for_grove_visionai_v2
sidebar_position: 2
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Grove Vision AI V2 用モデルの使用

SenseCraft AI は、Grove Vision AI V2 を含むさまざまなデバイスに対応した幅広い AI モデルを提供する強力なプラットフォームです。Grove Vision AI V2 は、カメラ、プロセッサ、AI 機能を組み合わせた包括的な AI ビジョンモジュールであり、コンピュータビジョンアプリケーションをプロジェクトに簡単に統合できます。このチュートリアルでは、SenseCraft AI モデルを Grove Vision AI V2 で使用し、モデルの出力をプレビューする手順を説明します。また、モデルのパフォーマンスを理解し最適化するための重要な概念と設定についても探ります。

## 必要条件

開始する前に、以下を準備してください：

- **Grove Vision AI V2**: Grove Vision AI V2 モジュールが準備され、開発ボードまたはコンピュータに正しく接続されていることを確認してください。

- **OV5647-62 FOV カメラモジュール（Raspberry Pi 3B+4B 用）**: 画像入力に使用します。

- **USB-C ケーブル**: Grove Vision AI V2 モジュールをコンピュータに接続し、プログラミングと電源供給を行うために USB ケーブルが必要です。

- **SenseCraft AI モデルリポジトリのウェブページへのアクセス**: 安定したインターネット接続があり、SenseCraft AI のウェブサイトにアクセスできることを確認してください。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Grove Vision AI V2</th>
      <th>OV5647-62 FOV カメラモジュール<br />（Raspberry Pi 3B+4B 用）</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## ステップ 1. Grove Vision AI V2 用モデルのフィルタリング

ウェブブラウザを開き、SenseCraft AI モデルリポジトリにアクセスします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/model" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ワンクリックでアクセス 🖱️</font></span></strong>
    </a>
</div><br />

モデルリポジトリページには、さまざまなデバイスやアプリケーション向けの幅広い AI モデルが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/13.png" style={{width:1000, height:'auto'}}/></div>

ウェブページの左サイドバーで、**対応デバイス**セクションを見つけます。デバイスのリストから**Grove - Vision AI V2**をクリックして、特定のデバイスに対応するモデルをフィルタリングします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/23.png" style={{width:1000, height:'auto'}}/></div>

このステップにより、Grove Vision AI V2 モジュールで展開および実行可能なモデルのみが表示されるようになります。

## ステップ 2. モデルを選択する

このチュートリアルでは、例として **Person Detection** モデルを使用します。ただし、興味や要件に応じて他のモデルを探索し、試してみることもできます。

**Person Detection** モデルをクリックして、その専用ページを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/24.png" style={{width:1000, height:'auto'}}/></div>

モデルページでは、モデルの説明、モデル精度、モデル形式など、詳細な情報を確認することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/25.png" style={{width:1000, height:'auto'}}/></div>

モデルのページで、ページ上部にある **Deploy Model** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/26.png" style={{width:1000, height:'auto'}}/></div>

この操作により、選択したモデルのデプロイメントプロセスが開始され、Grove Vision AI V2 モジュールでダウンロードおよび実行する準備が整います。

## ステップ 3. デバイスを接続する

モデルをデプロイした後、デプロイメントページの下に表示される **Connect Device** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/18.png" style={{width:1000, height:'auto'}}/></div>

新しいページが開きます。この時点で、Grove Vision AI V2 を USB-C ケーブルを使用してコンピュータに接続してください。

デバイス接続ページでは、モデル情報の概要が表示されます。モデル名やモデル ID を含む詳細を確認し、Grove Vision AI V2 に適切なモデルが選択されていることを確認してください。情報が正確であれば、**Confirm** ボタンをクリックしてモデルのデプロイメントを進めます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/27.png" style={{width:1000, height:'auto'}}/></div>

モデル情報を確認した後、ウィンドウがポップアップ表示され、Grove Vision AI V2 モジュールのシリアルポートを選択するよう求められます。シリアルポートは、コンピュータと Grove Vision AI V2 モジュール間の通信チャネルです。Grove Vision AI V2 に対応する正しいポート番号を選択してください。ポートが不明な場合は、オペレーティングシステムのデバイスマネージャーやモジュールのドキュメントを参照して正しいポートを特定してください。

**Connect** ボタンをクリックして、コンピュータと Grove Vision AI V2 モジュール間の接続を確立します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/28.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 4. モデルのアップロード

接続が確立されると、選択したモデルが Grove Vision AI V2 モジュールにダウンロードされ始めます。モデルのアップロードプロセスは、モデルのサイズやインターネット接続速度によって約 3～5 分かかる場合があります。このステップでは、必要なモデルファイルや依存関係が Grove Vision AI V2 モジュールに転送され、AI モデルをローカルで実行する準備が整います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/29.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 5. モデルのプレビュー

モデルのアップロードが成功すると、プレビュー機能が自動的に開始されます。プレビューウィンドウには、Grove Vision AI V2のカメラからのリアルタイムのビデオフィードが表示され、モデルの検出結果がビデオ上にオーバーレイされます。例えば、Person Detectionモデルの場合、ビデオストリーム内で検出された人物の周囲にバウンディングボックスが描画されます。各バウンディングボックスは、モデルが識別した人物を表しています。プレビュー機能を使用することで、モデルの出力をリアルタイムで確認でき、その性能に関する即時の視覚的フィードバックを得ることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/30.png" style={{width:1000, height:'auto'}}/></div>

## モデルの微調整（オプション）

1. モデルの性能を最適化したり、特定の用途に適応させたい場合は、プレビューセクションの下にあるオプションを使用してモデルの設定を微調整することができます。

2. 調整可能な重要なパラメータとして、「信頼度閾値（Confidence Threshold）」と「IoU（Intersection over Union）閾値」があります。

   - **信頼度閾値（Confidence Threshold）**: この値は、モデルが検出を有効とみなすために必要な最小信頼度レベルを決定します。信頼度閾値を高く設定すると、検出数は減りますが、確実性が高くなります。一方、閾値を低く設定すると、検出数は増えますが、誤検出が含まれる可能性があります。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

   - **IoU閾値（IoU Threshold）**: IoUは、予測されたバウンディングボックスと実際のバウンディングボックスの重なりを測定する指標です。これは物体検出の精度を判断するために使用されます。IoU閾値は、検出を真陽性（True Positive）とみなすために必要な最小IoU値を設定します。この閾値を調整することで、モデルの精度と再現率を微調整することができます。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

3. 信頼度閾値とIoU閾値の異なる値を試して、人物を正確に検出しつつ誤検出を最小限に抑える最適なバランスを見つけてください。最適な設定は、特定のアプリケーションや画像やビデオフィードの特性によって異なる場合があります。

## 結論

おめでとうございます！SenseCraft AIのPerson DetectionモデルをGrove Vision AI V2モジュールに正常にデプロイし、その出力をプレビューし、モデルの性能を微調整する方法を学びました。

このチュートリアルで説明した手順に従うことで、SenseCraft AIリポジトリにあるさまざまなAIモデルをGrove Vision AI V2モジュールで簡単に探索し、実験することができます。SenseCraft AIプラットフォームは、初心者から経験豊富な開発者まで利用可能なユーザーフレンドリーなインターフェースと幅広いモデルを提供しています。

SenseCraft AIおよびGrove Vision AI V2モジュールが提供するドキュメントやリソースを参照して、サポートされているモデル、その機能、および利用可能な追加の設定オプションについてさらに詳しく学んでください。

他のモデルを探索したり、異なる設定を試したり、特定のプロジェクトやアプリケーションに適応させたりすることを自由に行ってください。SenseCraft AIとGrove Vision AI V2モジュールの組み合わせは、コンピュータビジョンアプリケーションの可能性を広げます。

SenseCraft AIモデルを使用して、Grove Vision AI V2での実験と創造を楽しんでください！

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