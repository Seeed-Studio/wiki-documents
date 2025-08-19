---
description: データセットの所有、ラベリング、トレーニング、デプロイメントから XIAO ESP32S3 への展開までのガイダンス。
title: データセットから XIAO ESP32S3 へのモデル展開
keywords:
- SSCMA
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32s3_sscma
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# データセットから XIAO ESP32S3 へのモデル展開

この包括的なチュートリアルへようこそ。ここでは、データセットを完全に機能するモデルに変換し、XIAO ESP32S3 にデプロイする方法を学びます。このガイドでは、Roboflow の直感的なツールを使用してデータセットをラベリングする初期ステップから始め、Google Colab の協調環境でモデルをトレーニングするプロセスを進めていきます。

次に、SenseCraft Model Assistant を使用してトレーニング済みモデルをデプロイする方法を学びます。このプロセスは、トレーニングと実際のアプリケーションの間のギャップを埋めます。このチュートリアルの終わりには、XIAO ESP32S3 上でカスタムモデルを実行できるだけでなく、モデルの予測結果を解釈し活用するための知識も身につけることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/0.png" style={{width:1000, height:'auto'}}/></div>

データセットからモデルの完成まで、以下の主要なステップを進めます。

1. [ラベル付きデータセット](#labelled-datasets) —— この章では、モデルにトレーニング可能なデータセットを取得する方法に焦点を当てます。主に2つの方法があります。1つ目は、Roboflow コミュニティが提供するラベル付きデータセットを使用する方法、2つ目は、独自のシナリオに特化した画像をデータセットとして使用する方法ですが、この場合は手動でラベリングを行う必要があります。

2. [トレーニングデータセットのエクスポートモデル](#training-dataset-exported-model) —— この章では、Google Colab プラットフォームを使用して、最初のステップで取得したデータセットに基づいて XIAO ESP32S3 にデプロイ可能なモデルをトレーニングする方法に焦点を当てます。

3. [SenseCraft Model Assistant を使用したモデルのアップロード](#upload-models-via-sensecraft-model-assistant) —— このセクションでは、エクスポートされたモデルファイルを使用して、SenseCraft Model Assistant を介してモデルを XIAO ESP32S3 にアップロードする方法を説明します。

4. [モデルの一般的なプロトコルとアプリケーション](#common-protocols-and-applications-of-the-model) —— 最後に、SenseCraft AI の統一データ通信フォーマットを紹介し、デバイスとモデルの最大限の可能性を活用して、シナリオに適したアプリケーションを作成する方法を説明します。

それでは、データを活用するエキサイティングなプロセスを始めましょう。

## 必要な材料

開始する前に、以下の機器を準備する必要があります。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32S3</th>
			<th>Seeed Studio XIAO ESP32S3 Sense</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

XIAO ESP32S3 と Sense バージョンの両方がこのチュートリアルの内容として使用できますが、製品の標準バージョンではカメラ拡張ボードを使用できないため、Sense バージョンを使用することをお勧めします。

## ラベル付きデータセット

このセクションでは、ユーザーが自由にデータセットを選択できるようにしています。これには、コミュニティの写真や自分自身で撮影したシーンの写真が含まれます。このチュートリアルでは、主に2つのシナリオを紹介します。1つ目は、[Roboflow](https://roboflow.com/about)コミュニティが提供する既製のラベル付きデータセットを使用する方法です。もう1つは、高解像度の画像を撮影し、それをラベル付けしてデータセットとして使用する方法です。ニーズに応じて以下の異なるチュートリアルをお読みください。

### ステップ1: 無料のRoboflowアカウントを作成する

Roboflowは、コンピュータビジョンソリューションをラベル付け、トレーニング、デプロイするために必要なすべてを提供します。まずは[無料のRoboflowアカウント](https://app.roboflow.com/?ref=blog.roboflow.com)を作成してください。

利用規約を確認して同意した後、2つのプランのいずれかを選択するよう求められます。Public PlanとStarter Planのいずれかです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/1.png" style={{width:800, height:'auto'}}/></div>

次に、ワークスペースにコラボレーターを招待するよう求められます。これらのコラボレーターは、画像のアノテーションやワークスペース内のビジョンプロジェクトの管理を手助けできます。必要に応じて人を招待した後、プロジェクトを作成することができます。

### データセットの取得方法を選択する

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Roboflowを使用してラベル付きデータセットをダウンロード" label="Roboflowを使用してラベル付きデータセットをダウンロード">

Roboflowから直接使用するための適切なデータセットを選択するには、プロジェクトの要件に最も適したデータセットを選定する必要があります。これには、データセットのサイズ、品質、関連性、ライセンスなどの側面を考慮します。

**ステップ2. Roboflow Universeを探索する**

Roboflow Universeは、さまざまなデータセットを見つけることができるプラットフォームです。Roboflow Universeのウェブサイトを訪問し、利用可能なデータセットを探索してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/2.png" style={{width:1000, height:'auto'}}/></div>

Roboflowはフィルターと検索機能を提供しており、データセットをドメイン、クラス数、アノテーションタイプなどで絞り込むことができます。これらのフィルターを活用して、条件に合ったデータセットを絞り込んでください。

**ステップ3. 個々のデータセットを評価する**

候補を絞り込んだら、各データセットを個別に評価します。以下を確認してください：

**アノテーションの品質**: アノテーションが正確で一貫しているかどうかを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/3.png" style={{width:1000, height:'auto'}}/></div>

**データセットのサイズ**: モデルが効果的に学習できる十分なサイズであること、また扱いきれないほど大きすぎないことを確認します。

**クラスのバランス**: データセットは各クラスの例が均等に含まれていることが理想的です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/4.png" style={{width:1000, height:'auto'}}/></div>

**ライセンス**: データセットのライセンスを確認し、意図した用途で使用できることを確認します。

**ドキュメント**: データセットに付属するドキュメントやメタデータを確認し、その内容や既に適用されている前処理ステップを理解します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/5.png" style={{width:1000, height:'auto'}}/></div>

:::tip
**[Roboflow Health Check](https://docs.roboflow.com/datasets/dataset-health-check)**を使用してモデルの状態を確認することができます。
:::

**ステップ4. サンプルをダウンロードする**

選択したデータセットが見つかった場合、そのデータセットをダウンロードして使用するオプションがあります。Roboflowでは通常、データセットのサンプルをダウンロードすることができます。サンプルをテストして、ワークフローに適合するかどうか、またモデルに適しているかどうかを確認してください。

次のステップに進むには、以下の形式でデータセットをエクスポートすることをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/6.png" style={{width:1000, height:'auto'}}/></div>

その後、このモデルの**Raw URL**を取得します。このリンクを安全に保管してください。後ほどモデルのトレーニングステップで使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/26.png" style={{width:1000, height:'auto'}}/></div>

:::caution
Roboflowを初めて使用し、データセットの選択に全く判断がつかない場合、データセットを使用してモデルをトレーニングし、初期テストを行いパフォーマンスを確認するステップが重要です。これにより、データセットが要件を満たすかどうかを判断する助けになります。

データセットが要件を満たし、初期テストで良好な結果を示した場合、そのデータセットはプロジェクトに適している可能性が高いです。そうでない場合は、検索を続けるか、より多くの画像を追加してデータセットを拡張することを検討してください。
:::

</TabItem>

<TabItem value="自分の画像をデータセットとして使用する" label="自分の画像をデータセットとして使用する">

ここでは、デモとしてじゃんけんのジェスチャー画像を使用し、Roboflowで画像のアップロード、ラベル付け、データセットのエクスポートのタスクを案内します。

:::note
XIAO ESP32S3を使用してデータセットの写真を撮影することを強くお勧めします。これはXIAO ESP32S3に最適です。XIAO ESP32S3 Senseで写真を撮影するためのサンプルプログラムは以下のWikiリンクで見つけることができます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_camera_usage/#taking-photos-with-the-camera" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Wikiへ移動</font></span></strong>
    </a>
</div>
:::

**ステップ2. 新しいプロジェクトを作成し画像をアップロードする**

Roboflowにログインしたら、**Create Project**をクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/7.png" style={{width:1000, height:'auto'}}/></div>

プロジェクトに名前を付けます（例:「じゃんけん」）。プロジェクトを**物体検出**として定義します。**出力ラベル**を**カテゴリカル**（じゃんけんの「グー」「パー」「チョキ」はそれぞれ異なるカテゴリであるため）に設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/8.png" style={{width:1000, height:'auto'}}/></div>

次に、手のジェスチャー画像をアップロードします。

グー、パー、チョキのジェスチャー画像を収集してください。さまざまな背景や照明条件で撮影された画像を用意しましょう。プロジェクトページで「画像を追加」をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/9.png" style={{width:1000, height:'auto'}}/></div>

画像をドラッグ＆ドロップするか、コンピュータから選択してアップロードできます。各ジェスチャーの画像を少なくとも100枚アップロードし、堅牢なデータセットを作成してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/10.png" style={{width:1000, height:'auto'}}/></div>

:::tip
**データセットのサイズはどのように決まるのか？**

一般的には、タスクモデル、タスクの複雑さ、データの純度など、さまざまな要因に依存します。例えば、人間の体を検出するモデルでは、多くの人々を対象とし、広範囲にわたり、タスクがより複雑であるため、より多くのデータを収集する必要があります。
一方、ジェスチャー検出モデルでは、「グー」「チョキ」「パー」の3種類のみを検出する必要があり、カテゴリ数が少ないため、収集するデータセットは約500枚程度です。
:::

**ステップ3: 画像のアノテーション**

画像をアップロードした後、手のジェスチャーをラベル付けしてアノテーションを行います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/11.png" style={{width:1000, height:'auto'}}/></div>

Roboflowは、画像をラベル付けするための3つの方法を提供しています：自動ラベル付け、Roboflowラベル付け、手動ラベル付け。

- [**自動ラベル付け**](https://blog.roboflow.com/yolo-world-prompting-tips/): 汎用モデルを使用して画像を自動的にラベル付けします。
- **Roboflowラベル付け**: プロフェッショナルなラベル付けチームと協力します。最低ボリュームなし。事前のコミットメントなし。バウンディングボックスのアノテーションは\$0.04から、ポリゴンのアノテーションは\$0.08から開始します。
- **手動ラベル付け**: 自分やチームで画像をラベル付けします。

以下では、最も一般的に使用される手動ラベル付けの方法を説明します。

「手動ラベル付け」ボタンをクリックします。Roboflowがアノテーションインターフェースを読み込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/12.png" style={{width:1000, height:'auto'}}/></div>

「アノテーションを開始」ボタンを選択します。各画像内の手のジェスチャーの周りにバウンディングボックスを描画します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/13.gif" style={{width:1000, height:'auto'}}/></div>

各バウンディングボックスに「グー」「パー」「チョキ」とラベル付けします。

「>」ボタンを使用してデータセットを進め、各画像に対してアノテーションプロセスを繰り返します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/14.gif" style={{width:1000, height:'auto'}}/></div>

**ステップ4: アノテーションの確認と編集**

アノテーションが正確であることを確認することが重要です。

各画像を確認し、バウンディングボックスが正しく描画され、ラベル付けされていることを確認します。間違いを見つけた場合は、アノテーションを選択してバウンディングボックスを調整したり、ラベルを変更したりします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/15.png" style={{width:1000, height:'auto'}}/></div>

:::tip
不正確なラベル付けはトレーニング全体のパフォーマンスに影響を与えるため、ラベル付け要件を満たしていないデータセットは破棄される可能性があります。以下は不適切なラベル付けの例です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/16.png" style={{width:700, height:'auto'}}/></div>
:::

**ステップ5: データセットの生成とエクスポート**

すべての画像にアノテーションを付けたら、アノテート画面で右上の**Add x images to Dataset**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/17.png" style={{width:1000, height:'auto'}}/></div>

次に、新しいポップアップウィンドウの下部にある**Add Images**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/18.png" style={{width:400, height:'auto'}}/></div>

左側のツールバーで**Generate**をクリックし、3番目の**Preprocessing**ステップで**Continue**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/19.png" style={{width:1000, height:'auto'}}/></div>

4番目の**Augmentation**ステップでは、**Mosaic**を選択して汎化能力を向上させます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/20.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/21.png" style={{width:1000, height:'auto'}}/></div>

最後の**Create**ステップでは、Roboflowのブーストに基づいて画像数を適切に計算してください。一般的に、画像が多いほどモデルのトレーニングに時間がかかります。ただし、画像が多いからといって必ずしもモデルがより正確になるわけではなく、主にデータセットの質が重要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/22.png" style={{width:1000, height:'auto'}}/></div>

**Create**をクリックしてデータセットのバージョンを作成します。Roboflowが画像とアノテーションを処理し、バージョン化されたデータセットを作成します。データセットが生成されたら、**Export Dataset**をクリックします。トレーニングするモデルの要件に一致する**COCO**形式を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/23.png" style={{width:1000, height:'auto'}}/></div>

**続行**をクリックすると、このモデルのRaw URLが取得できます。このリンクを保持してください。後ほどモデルのトレーニングステップで使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/27.png" style={{width:1000, height:'auto'}}/></div>

おめでとうございます！Roboflowを使用して、Rock-Paper-Scissors（じゃんけん）の手のジェスチャー検出モデル用のデータセットをアップロード、注釈付け、エクスポートすることに成功しました。データセットが準備できたら、Google Colabなどのプラットフォームを使用して機械学習モデルをトレーニングすることができます。

データセットを多様で適切に注釈付けされた状態に保つことで、将来のモデルの精度を向上させることができます。モデルのトレーニングを頑張ってください。そして、AIの力を使って手のジェスチャーを分類する楽しさを味わってください！
</TabItem>
</Tabs>

## トレーニングデータセットのエクスポートモデル

### ステップ1. Colabノートブックにアクセスする

[SenseCraft Model AssistantのWiki](https://wiki.seeedstudio.com/ja/ModelAssistant_Introduce_Quick_Start/#model-training)で、さまざまな種類のモデル用Google Colabコードファイルを見つけることができます。どのコードを選べばよいかわからない場合は、モデルのクラス（物体検出または画像分類）に応じて、どれでも選択できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/24.png" style={{width:1000, height:'auto'}}/></div>

Googleアカウントにまだサインインしていない場合は、Google Colabの全機能にアクセスするためにサインインしてください。

「Connect」をクリックして、Colabセッション用のリソースを割り当てます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/25.png" style={{width:1000, height:'auto'}}/></div>

### ステップ2. Roboflowデータセットを追加する

コードブロックをステップごとに実行する前に、準備したデータセットを使用できるようにコードの内容を変更する必要があります。データセットを直接ColabファイルシステムにダウンロードするためのURLを提供する必要があります。

コード内の**Download the dataset**セクションを見つけてください。以下のサンプルプログラムが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/28.png" style={{width:1000, height:'auto'}}/></div>

```sh
%mkdir -p Gesture_Detection_Swift-YOLO_192/dataset 
!wget -c https://universe.roboflow.com/ds/xaMM3ZTeWy?key=5bznPZyI0t -O Gesture_Detection_Swift-YOLO_192/dataset.zip 
!unzip -q Gesture_Detection_Swift-YOLO_192/dataset.zip -d Gesture_Detection_Swift-YOLO_192/dataset
```

このコードは、Google Colab環境内でディレクトリを作成し、Roboflowからデータセットをダウンロードし、新しく作成したディレクトリに解凍するために使用されます。各行の内容を以下に説明します：

1. `%mkdir -p Gesture_Detection_Swift-YOLO_192/dataset`:
   - この行は`Gesture_Detection_Swift-YOLO_192`という新しいディレクトリと、そのサブディレクトリ`dataset`を作成します。`-p`フラグは、ディレクトリが既に存在している場合にエラーを返さず、必要な親ディレクトリを作成します。

2. `!wget -c https://universe.roboflow.com/ds/xaMM3ZTeWy?key=5bznPZyI0t -O Gesture_Detection_Swift-YOLO_192/dataset.zip`:
   - この行は、コマンドラインユーティリティ`wget`を使用して、指定されたRoboflow URLからデータセットをダウンロードします。`-c`フラグは、ダウンロードが中断された場合に再開を可能にします。`-O`フラグは、ダウンロードしたファイルの出力場所とファイル名を指定します。この場合、`Gesture_Detection_Swift-YOLO_192/dataset.zip`です。

3. `!unzip -q Gesture_Detection_Swift-YOLO_192/dataset.zip -d Gesture_Detection_Swift-YOLO_192/dataset`:
   - この行は、`unzip`コマンドを使用して、`dataset.zip`ファイルの内容を先ほど作成した`dataset`ディレクトリに解凍します。`-q`フラグは、ほとんどの出力メッセージを抑制して静かに実行します。

このコードを自分のRoboflowモデルリンクに合わせてカスタマイズするには：

1. `Gesture_Detection_Swift-YOLO_192`を、データセットを保存したいディレクトリ名に置き換えます。

2. RoboflowデータセットURL（`https://universe.roboflow.com/ds/xaMM3ZTeWy?key=5bznPZyI0t`）を、エクスポートしたデータセットのリンクに置き換えます（これは[Labelled Datasetsの最後のステップ](#choose-how-you-get-your-dataset)で取得したRaw URLです）。アクセスにキーが必要な場合は、キーのパラメータを含めてください。

3. 必要に応じて、`wget`コマンドの出力ファイル名を調整します（`-O your_directory/your_filename.zip`）。

4. `unzip`コマンドの出力ディレクトリが作成したディレクトリと一致し、ファイル名が`wget`コマンドで設定したものと一致していることを確認してください。

:::caution
フォルダディレクトリ名`Gesture_Detection_Swift-YOLO_192`を変更する場合は、コード内で以前に使用された他のディレクトリ名も変更する必要があることに注意してください。そうしないとエラーが発生する可能性があります！
:::

### ステップ3. モデルパラメータの調整

次のステップは、モデルの入力パラメータを調整することです。Train a model with SSCMAセクションに移動すると、以下のコードスニペットが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/29.png" style={{width:1000, height:'auto'}}/></div>

```sh
!sscma.train configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
--cfg-options  \
    work_dir=Gesture_Detection_Swift-YOLO_192 \
    num_classes=3 \
    epochs=10  \
    height=192 \
    width=192 \
    data_root=Gesture_Detection_Swift-YOLO_192/dataset/ \
    load_from=Gesture_Detection_Swift-YOLO_192/pretrain.pth
```

このコマンドは、SSCMA（Seeed Studio SenseCraft Model Assistant）フレームワークを使用して、YOLO（You Only Look Once）モデルの機械学習トレーニングプロセスを開始するために使用されます。コマンドには、トレーニングプロセスを構成するためのさまざまなオプションが含まれています。各部分の説明は以下の通りです：

- `!sscma.train`は、SSCMAフレームワーク内でトレーニングを開始するコマンドです。

- `configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py` はトレーニング用の設定ファイルを指定します。このファイルには、モデルアーキテクチャ、トレーニングスケジュール、データ拡張戦略などの設定が含まれています。

- `--cfg-options` は、コマンドラインで提供する設定を使用して、`.py` ファイルで指定されたデフォルト設定を上書きすることを可能にします。

- `work_dir=Gesture_Detection_Swift-YOLO_192` は、ログや保存されたモデルチェックポイントなど、トレーニング出力が保存されるディレクトリを設定します。

- `num_classes=3` は、モデルが認識するクラス数を指定します。これはタグの数に依存します。例えば、「グー」、「チョキ」、「パー」の場合は3つのタグになります。

- `epochs=10` は、トレーニングサイクル（エポック）の回数を設定します。推奨値は50から100の間です。

- `height=192` と `width=192` は、モデルが期待する入力画像の高さと幅を設定します。

:::caution
Colabコード内で画像サイズを変更することは推奨されません。この値は、サイズ、精度、推論速度のバランスが取れた適切なデータセットサイズとして検証されています。異なるサイズのデータセットを使用する場合、精度を確保するために画像サイズを変更することを検討できますが、240x240を超えないようにしてください。
:::

- `data_root=Gesture_Detection_Swift-YOLO_192/dataset/` は、トレーニングデータが配置されているディレクトリへのパスを定義します。

- `load_from=Gesture_Detection_Swift-YOLO_192/pretrain.pth` は、トレーニングを再開するか、転移学習の開始点として使用する事前学習済みモデルのチェックポイントファイルへのパスを提供します。

このコマンドを自分のトレーニング用にカスタマイズするには、以下を行います：

1. `configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py` を、カスタム設定ファイルがある場合はそのパスに置き換えます。

2. `work_dir` を、トレーニング出力を保存したいディレクトリに変更します。

3. `num_classes` を、自分のデータセット内のクラス数に合わせて更新します。例えば、「グー」、「チョキ」、「パー」の場合は3つのタグになります。

4. `epochs` を、モデルのトレーニングエポック数に応じて調整します。推奨値は50から100の間です。

5. `height` と `width` を、モデルの入力画像の寸法に合わせて設定します。

6. `data_root` を、自分のデータセットのルートディレクトリを指すように変更します。

7. 異なる事前学習済みモデルファイルがある場合は、`load_from` パスを適切に更新します。

### ステップ 4. Google Colab コードを実行する

コードブロックを実行するには、コードブロックの左上にある再生ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/30.png" style={{width:1000, height:'auto'}}/></div>

ボタンをクリックするとコードブロックが実行され、問題がなければコードブロックの実行が完了したことを示すチェックマークがブロックの左側に表示されます。以下の図は、最初のコードブロックの実行が完了した後の効果を示しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/31.png" style={{width:1000, height:'auto'}}/></div>

もし上記の画像と同じエラーメッセージが表示された場合は、**T4 GPU** を使用していることを確認してください。このプロジェクトでは **CPU を使用しないでください**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/32.png" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/33.png" style={{width:600, height:'auto'}}/></div>

その後、コードブロックを再実行してください。最初のコードブロックについては、問題がなければ以下のような結果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/34.png" style={{width:1000, height:'auto'}}/></div>

次に、**Download the pretrain model weights file** から **Export the model** までのすべてのコードブロックを実行してください。そして、各コードブロックにエラーがないことを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/36.png" style={{width:400, height:'auto'}}/></div>

:::note
コード内に表示される警告は無視して構いません。
:::

### ステップ 5. モデルを評価する

**Evaluate the model** セクションに到達したら、**Evaluate the TFLite INT8 model** コードブロックを実行するオプションがあります。

:::tip
TFLite INT8 モデルの評価には、量子化されたモデルの予測を別のテストデータセットと比較して精度とパフォーマンス指標を測定し、量子化がモデルの精度に与える影響を評価し、エッジデバイスの展開制約を満たすための推論速度とリソース使用量をプロファイリングすることが含まれます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/35.png" style={{width:1000, height:'auto'}}/></div>

以下のスニペットは、このコードブロックを実行した後の有効な結果の一部です。

```
 Average Precision  (AP) @[ IoU=0.50:0.95 | area=   all | maxDets=100 ] = 0.450
 Average Precision  (AP) @[ IoU=0.50      | area=   all | maxDets=100 ] = 0.929
 Average Precision  (AP) @[ IoU=0.75      | area=   all | maxDets=100 ] = 0.361
 Average Precision  (AP) @[ IoU=0.50:0.95 | area= small | maxDets=100 ] = -1.000
 Average Precision  (AP) @[ IoU=0.50:0.95 | area=medium | maxDets=100 ] = 0.474
 Average Precision  (AP) @[ IoU=0.50:0.95 | area= large | maxDets=100 ] = 0.456
 Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets=  1 ] = 0.515
 Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets= 10 ] = 0.529
 Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets=100 ] = 0.529
 Average Recall     (AR) @[ IoU=0.50:0.95 | area= small | maxDets=100 ] = -1.000
 Average Recall     (AR) @[ IoU=0.50:0.95 | area=medium | maxDets=100 ] = 0.536
 Average Recall     (AR) @[ IoU=0.50:0.95 | area= large | maxDets=100 ] = 0.537
03/19 01:38:43 - mmengine - INFO - bbox_mAP_copypaste: 0.450 0.929 0.361 -1.000 0.474 0.456
{'coco/bbox_mAP': 0.45, 'coco/bbox_mAP_50': 0.929, 'coco/bbox_mAP_75': 0.361, 'coco/bbox_mAP_s': -1.0, 'coco/bbox_mAP_m': 0.474, 'coco/bbox_mAP_l': 0.456}
FPS: 128.350449 fram/s
```

評価結果には、オブジェクト検出モデルの性能を評価するために一般的に使用される、異なる Intersection over Union (IoU) 閾値やオブジェクトサイズに基づいて計算された一連の平均精度 (AP) と平均再現率 (AR) 指標が含まれています。

1. **AP@[IoU=0.50:0.95 | area=all | maxDets=100] = 0.450**
   - このスコアは、IoU 閾値が 0.50 から 0.95 の範囲で 0.05 刻みで計算されたモデルの平均精度を示します。AP が 0.450 であることは、この範囲でモデルが中程度の精度を持つことを意味します。これは COCO データセットで一般的に使用される重要な指標です。

2. **AP@[IoU=0.50 | area=all | maxDets=100] = 0.929**
   - IoU 閾値が 0.50 の場合、モデルは 0.929 の高い平均精度を達成しており、より緩やかな一致基準の下で非常に正確にオブジェクトを検出していることを示しています。

3. **AP@[IoU=0.75 | area=all | maxDets=100] = 0.361**
   - より厳しい IoU 閾値 0.75 の場合、モデルの平均精度は 0.361 に低下し、より厳しい一致基準の下で性能が低下することを示しています。

4. **AP@[IoU=0.50:0.95 | area=small/medium/large | maxDets=100]**
   - オブジェクトのサイズによって AP スコアが異なります。ただし、小さいオブジェクトに対する AP は -1.000 であり、小さいオブジェクトの評価データが不足しているか、モデルの性能が低い可能性を示しています。中サイズおよび大サイズのオブジェクトに対する AP スコアはそれぞれ 0.474 と 0.456 であり、モデルが中サイズおよび大サイズのオブジェクトを比較的良好に検出していることを示しています。

5. **AR@[IoU=0.50:0.95 | area=all | maxDets=1/10/100]**
   - 異なる `maxDets` 値に対する平均再現率は 0.515 から 0.529 の範囲で一貫しており、モデルがほとんどの真陽性インスタンスを確実に取得していることを示しています。

6. **FPS: 128.350449 fram/s**
   - モデルは推論中に約 128.35 フレーム/秒の非常に高速な速度で画像を処理しており、リアルタイムまたはほぼリアルタイムのアプリケーションに適していることを示しています。

全体として、モデルは IoU が 0.50 の場合に優れた性能を発揮し、IoU が 0.75 の場合には中程度の性能を示します。中サイズおよび大サイズのオブジェクト検出では良好な性能を示しますが、小さいオブジェクトの検出には課題がある可能性があります。また、モデルは高速な推論速度を持ち、迅速な処理が必要なシナリオに適しています。小さいオブジェクトの検出がアプリケーションで重要な場合、モデルをさらに最適化するか、小さいオブジェクトのデータを追加収集して性能を向上させる必要があるかもしれません。

### ステップ 6. エクスポートされたモデルファイルをダウンロードする

**モデルのエクスポート**セクションの後、さまざまな形式のモデルファイルが生成され、デフォルトでは ModelAssistant フォルダに保存されます。このチュートリアルでは、保存ディレクトリは **Gesture_Detection_Swift_YOLO_192** です。

:::tip
Google Colab がフォルダの内容を自動的に更新しない場合があります。この場合、左上の更新アイコンをクリックしてファイルディレクトリを更新する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/39.png" style={{width:500, height:'auto'}}/></div>

:::

上記のディレクトリには、XIAO ESP32S3 および Grove Vision AI V2 用の **.tflite** モデルファイルが含まれています。XIAO ESP32S3 Sense 用の場合は、**xxx_int8.tflite** 形式を使用するモデルファイルを必ず選択してください。他の形式は XIAO ESP32S3 Sense では使用できません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/37.png" style={{width:400, height:'auto'}}/></div>

モデルファイルを見つけたら、できるだけ早くローカルコンピュータにダウンロードしてください。Google Colab は長時間アイドル状態になるとストレージディレクトリを空にする可能性があります！

ここで実行した手順により、XIAO ESP32S3 でサポートされるモデルファイルを正常にエクスポートできました。次に、モデルをデバイスにデプロイしましょう。

## SenseCraft Model Assistant を使用してモデルをアップロードする

### ステップ 7. カスタムモデルを XIAO ESP32S3 にアップロードする

次に、Model Assistant ページに進みます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Model Assistant 🖱️</font></span></strong>
    </a>
</div>
<br></br>

XIAO ESP32S3 を選択した後、デバイスを接続し、ページ下部の **Upload Custom AI Model** を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaos3-sscma/1.png" style={{width:1000, height:'auto'}}/></div>

次に、モデル名、モデルファイル、およびラベルを準備する必要があります。ここで、ラベル ID の要素がどのように決定されるかを強調しておきます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/41.png" style={{width:500, height:'auto'}}/></div>

**Roboflow のデータセットを直接ダウンロードする場合**

Roboflow のデータセットを直接ダウンロードした場合、Health Check ページで異なるカテゴリとその順序を確認できます。ここに入力された順序をそのままインストールしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/42.png" style={{width:1000, height:'auto'}}/></div>

:::tip
**ID:Object** に数字を入力する必要はありません。カテゴリ名を直接入力してください。画像上のカテゴリの前にある数字やコロンは自動的に追加されます。
:::

**カスタムデータセットを使用する場合**

カスタムデータセットを使用する場合、Health Check ページで異なるカテゴリとその順序を確認できます。ここに入力された順序をそのままインストールしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/43.png" style={{width:1000, height:'auto'}}/></div>

:::tip
**ID:Object** に数字を入力する必要はありません。カテゴリ名を直接入力してください。画像上のカテゴリの前にある数字やコロンは自動的に追加されます。
:::

その後、右下の **Send Model** をクリックしてください。これには約 3 ～ 5 分ほどかかる場合があります。すべてが順調に進めば、上部の Model Name と Preview ウィンドウにモデルの結果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/44.png" style={{width:1000, height:'auto'}}/></div>

ここまで進めたら、おめでとうございます！独自のモデルを正常にトレーニングし、デプロイすることができました。

## モデルの一般的なプロトコルとアプリケーション

カスタムモデルをアップロードする過程で、アップロードされるモデルファイルに加えて、デバイスのファームウェアもデバイスに転送する必要があります。デバイスのファームウェアには、モデル結果の出力形式や、ユーザーがモデルを使用して何ができるかを指定する一連の確立された通信プロトコルが含まれています。

スペースの都合上、この Wiki ではこれらのプロトコルの詳細については触れません。このセクションについては Github のドキュメントで詳しく説明します。より深い開発に興味がある場合は、こちらをご覧ください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft Protocols</font></span></strong>
    </a>
</div>
<br></br>

## トラブルシューティング

### 1. 手順に従ったのにモデルの結果が満足できない場合はどうすればよいですか？

モデルの認識精度が満足できない場合、以下の観点を考慮して診断および改善を行うことができます：

1. **データの質と量**
   - **問題**: データセットが小さすぎたり、多様性に欠けていたり、アノテーションに不正確さがある可能性があります。
   - **解決策**: トレーニングデータのサイズと多様性を増やし、データクリーニングを実施してアノテーションエラーを修正してください。

2. **トレーニングプロセス**
   - **問題**: トレーニング時間が不十分であったり、学習率が適切に設定されていないため、モデルが効果的に学習できていない可能性があります。
   - **解決策**: トレーニングエポック数を増やし、学習率やその他のハイパーパラメータを調整し、過学習を防ぐために早期停止を実装してください。

3. **クラスの不均衡**
   - **問題**: 一部のクラスが他のクラスよりもサンプル数が著しく多く、モデルが多数派クラスに偏る可能性があります。
   - **解決策**: クラスウェイトを使用する、少数派クラスをオーバーサンプリングする、または多数派クラスをアンダーサンプリングしてデータをバランスさせてください。

これらの改善を段階的に実施し、モデルの精度を向上させることができます。各変更後に検証セットを使用してモデルの性能をテストし、改善の効果を確認することを忘れないでください。

### 2. Wiki の手順に従った後に SenseCraft デプロイメントで **Invoke failed** メッセージが表示されるのはなぜですか？

**Invoke failed** メッセージが表示される場合、デバイスで使用するための要件を満たしていないモデルをトレーニングした可能性があります。以下の点に注意してください。

1. Colab の画像サイズを変更したかどうかを確認してください。デフォルトの圧縮サイズは **192x192** です。Grove Vision AI V2 では画像サイズを正方形に圧縮する必要があり、非正方形のサイズを使用しないでください。また、サイズが大きすぎないようにしてください（**240x240 以下**を推奨します）。

<!-- 2. Grove Vision AI V2 用のモデルファイルは、**int8_vela.tflite** というサフィックスが必要です。他の形式のモデルファイルは使用しないでください。これには **int8.tflite** も含まれ、Grove Vision AI V2 では使用できません。 -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>