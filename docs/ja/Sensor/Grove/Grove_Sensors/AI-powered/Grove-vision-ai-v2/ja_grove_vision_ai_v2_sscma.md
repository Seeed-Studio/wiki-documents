---
description: 所有データセットから、ラベリング、トレーニング、Grove Vision AI V2 への展開までのガイダンス。
title: データセットから Grove Vision AI V2 へのモデル展開
keywords:
- SSCMA
- Vision AI
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/grove_vision_ai_v2_sscma
last_update:
  date: 03/12/2024
  author: Citric
---


# データセットから Grove Vision AI V2 へのモデル展開

データセットを Grove Vision AI V2 で展開可能な完全に機能するモデルに変換する包括的なチュートリアルへようこそ。このガイドでは、Roboflow の直感的なツールを使用してデータセットにラベルを付ける初期ステップから始まり、Google Colab の協調環境内でのモデルトレーニングまで進んでいきます。

その後、SenseCraft Model Assistant を使用してトレーニング済みモデルを展開する過程に移ります。これは、トレーニングと実世界のアプリケーションの間のギャップを埋めるプロセスです。このチュートリアルの終わりまでに、Grove Vision AI V2 で動作するカスタムモデルを手に入れるだけでなく、モデルの予測結果を解釈し活用する知識も身に付けることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/0.png" style={{width:1000, height:'auto'}}/></div>


データセットからモデル展開まで、以下の主要なステップがあります。

1. [ラベル付きデータセット](#ラベル付きデータセット) —— この章では、モデルにトレーニング可能なデータセットを取得する方法に焦点を当てます。主に2つの方法があります。1つ目は Roboflow コミュニティが提供するラベル付きデータセットを使用することで、もう1つは独自のシナリオ固有の画像をデータセットとして使用することですが、手動でラベリングを行う必要があります。

2. [トレーニングデータセットエクスポートモデル](#トレーニングデータセットエクスポートモデル) —— この章では、Google Colab プラットフォームを使用して、最初のステップで取得したデータセットに基づいて Grove Vision AI V2 に展開可能なモデルを取得するためのトレーニング方法に焦点を当てます。

3. [SenseCraft Model Assistant を介したモデルアップロード](#SenseCraft-Model-Assistant-を介したモデルアップロード) —— このセクションでは、エクスポートされたモデルファイルを使用して、SenseCraft Model Assistant を使って Grove Vision AI V2 にモデルをアップロードする方法について説明します。

4. [モデルの一般的なプロトコルとアプリケーション](#モデルの一般的なプロトコルとアプリケーション) —— 最後に、SenseCraft AI の統一データ通信フォーマットを紹介し、デバイスとモデルの最大限の可能性を活用して、シナリオに適したアプリケーションを作成できるようにします。

それでは、データに命を吹き込むエキサイティングなプロセスを始めましょう。

## 必要な材料

開始する前に、以下の機器を準備する必要があります。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32S3</th>
			<th>Grove Vision AI V2</th>
      <th>OV5647-62 FOV カメラモジュール<br />Raspberry Pi 3B+4B 用</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
				</a>
			</div></td>
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

これは推奨デバイスモデルで、このチュートリアルで使用されるすべてのハードウェアです。もちろん、OV5647 カメラや XIAO をお持ちでない場合は、他の CSI Raspberry Pi カメラや、UART 対応の Arduino 対応開発ボードでも構いません。


## ラベル付きデータセット

このセクションの内容では、ユーザーが所有するデータセットを自由に選択できます。これには、コミュニティのデータセットや独自のシーンの写真が含まれます。このチュートリアルでは、2つの主要なシナリオを紹介します。1つ目は、[Roboflow](https://roboflow.com/about) コミュニティが提供する既製のラベル付きデータセットを使用することです。もう1つは、撮影した高解像度画像を使用してデータセットにラベルを付けることです。ニーズに応じて、以下の異なるチュートリアルをお読みください。

### ステップ 1: 無料の Roboflow アカウントを作成

Roboflow は、コンピュータビジョンソリューションのラベリング、トレーニング、展開に必要なすべてを提供します。開始するには、[無料の Roboflow アカウント](https://app.roboflow.com/?ref=blog.roboflow.com)を作成してください。

利用規約を確認して同意した後、2つのプランのうち1つを選択するよう求められます：Public Plan と Starter Plan です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/1.png" style={{width:800, height:'auto'}}/></div>


次に、ワークスペースに協力者を招待するよう求められます。これらの協力者は、画像の注釈付けやワークスペース内のビジョンプロジェクトの管理を支援できます。ワークスペースに人を招待した後（希望する場合）、プロジェクトを作成できるようになります。


### データセットの取得方法を選択


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Download Labelled datasets using Roboflow" label="Roboflow を使用してラベル付きデータセットをダウンロード">

直接使用するために Roboflow から適切なデータセットを選択することは、データセットのサイズ、品質、関連性、ライセンスなどの側面を考慮して、プロジェクトの要件に最も適したデータセットを決定することを含みます。

**ステップ 2. Roboflow Universe を探索**

Roboflow Universe は、さまざまなデータセットを見つけることができるプラットフォームです。Roboflow Universe ウェブサイトにアクセスして、利用可能なデータセットを探索してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/2.png" style={{width:1000, height:'auto'}}/></div>

Roboflow は、データセットを見つけるのに役立つフィルターと検索機能を提供します。ドメイン、クラス数、注釈タイプなどでデータセットをフィルタリングできます。これらのフィルターを活用して、条件に適合するデータセットを絞り込んでください。

**ステップ 3. 個別データセットの評価**

候補リストができたら、各データセットを個別に評価してください。以下を確認してください：

**注釈品質**: 注釈が正確で一貫しているかを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/3.png" style={{width:1000, height:'auto'}}/></div>

**データセットサイズ**: モデルが効果的に学習できる十分な大きさでありながら、処理しきれないほど大きくないことを確認してください。

**クラスバランス**: データセットは理想的には各クラスに対してバランスの取れた例数を持つべきです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/4.png" style={{width:1000, height:'auto'}}/></div>

**ライセンス**: 意図した通りに使用できることを確認するため、データセットのライセンスを確認してください。

**ドキュメント**: データセットに付属するドキュメントやメタデータを確認して、その内容と既に適用されている前処理ステップをよりよく理解してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/5.png" style={{width:1000, height:'auto'}}/></div>

:::tip
**[Roboflow Health Check](https://docs.roboflow.com/datasets/dataset-health-check)** を通じてモデルの状態を確認できます。
:::

**ステップ 4. サンプルをダウンロード**

選択したデータセットが見つかったら、それをダウンロードして使用するオプションがあります。Roboflow では通常、データセットのサンプルをダウンロードできます。サンプルをテストして、ワークフローとうまく統合され、モデルに適しているかを確認してください。

後続のステップを続行するために、以下に示す形式でデータセットをエクスポートすることをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/6.png" style={{width:1000, height:'auto'}}/></div>

その後、このモデルの **Raw URL** を取得します。これを安全に保管してください。後ほどモデルトレーニングステップでそのリンクを使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/26.png" style={{width:1000, height:'auto'}}/></div>


:::caution
Roboflow を初めて使用し、データセットの選択について全く判断がつかない場合、データセットでモデルをトレーニングして初期テストを実行し、パフォーマンスを確認するステップが不可欠かもしれません。これにより、データセットが要件を満たすかどうかを判断できます。

データセットが要件を満たし、初期テストで良好なパフォーマンスを示した場合、プロジェクトに適している可能性が高いです。そうでなければ、検索を続けるか、より多くの画像でデータセットを拡張することを検討する必要があるかもしれません。
:::

</TabItem>

<TabItem value="Use your own images as a dataset" label="独自の画像をデータセットとして使用">

ここでは、じゃんけんのジェスチャー画像をデモとして使用し、Roboflow での画像アップロード、ラベリング、データセットエクスポートのタスクをガイドします。

:::note
Grove Vision AI V2を使用してデータセットの写真を撮影することを強く推奨します。これはGrove Vision AI V2に最適です。Grove Vision AI V2は現在写真撮影機能の開発中であり、完成すれば Grove Vision AI V2を使用してデータセット用の写真を撮影できるようになります。それまでは、他のデバイスで撮影した写真をデータセットとして使用できます。
:::

**ステップ 2. 新しいプロジェクトの作成と画像のアップロード**

Roboflowにログインしたら、**Create Project**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/7.png" style={{width:1000, height:'auto'}}/></div>

プロジェクトに名前を付けます（例：「Rock-Paper-Scissors」）。プロジェクトを**Object Detection**として定義します。**Output Labels**を**Categorical**に設定します（Rock、Paper、Scissorsは異なるカテゴリーであるため）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/8.png" style={{width:1000, height:'auto'}}/></div>

次に、手のジェスチャー画像をアップロードします。

グー、パー、チョキのジェスチャーの画像を収集します。様々な背景と照明条件を確保してください。プロジェクトページで「Add Images」をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/9.png" style={{width:1000, height:'auto'}}/></div>

画像をドラッグ&ドロップするか、コンピューターから選択できます。堅牢なデータセットのために、各ジェスチャーの画像を少なくとも100枚アップロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/10.png" style={{width:1000, height:'auto'}}/></div>

:::tip
**データセットのサイズはどのように決定されますか？**

一般的に、タスクモデル、タスクの複雑さ、データの純度など、様々な要因に依存します。例えば、人体検出モデルは多数の人々、広い範囲を含み、タスクがより複雑であるため、より多くのデータを収集する必要があります。
別の例として、ジェスチャー検出モデルは「グー」「チョキ」「パー」の3種類のみを検出する必要があり、必要なカテゴリーが少ないため、収集されるデータセットは約500枚です。
:::

**ステップ 3: 画像の注釈付け**

アップロード後、手のジェスチャーにラベルを付けて画像に注釈を付ける必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/11.png" style={{width:1000, height:'auto'}}/></div>

Roboflowは画像のラベル付けに3つの異なる方法を提供しています：Auto Label、Roboflow Labeling、Manual Labelingです。

- [**Auto Label**](https://blog.roboflow.com/yolo-world-prompting-tips/)：大規模な汎用モデルを使用して画像に自動的にラベルを付けます。
- **Roboflow Labeling**：プロの人間ラベラーチームと協力します。最小ボリュームなし。事前コミットメントなし。バウンディングボックス注釈は\$0.04から、ポリゴン注釈は\$0.08から開始されます。
- **Manual Labeling**：あなたとあなたのチームが独自の画像にラベルを付けます。

以下では、最も一般的に使用される手動ラベル付けの方法について説明します。

「Manual Labeling」ボタンをクリックします。Roboflowが注釈インターフェースを読み込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/12.png" style={{width:1000, height:'auto'}}/></div>

「Start Annotating」ボタンを選択します。各画像の手のジェスチャーの周りにバウンディングボックスを描画します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/13.gif" style={{width:1000, height:'auto'}}/></div>

各バウンディングボックスを「Rock」、「Paper」、または「Scissors」としてラベル付けします。

「>」ボタンを使用してデータセットを移動し、各画像に対して注釈プロセスを繰り返します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/14.gif" style={{width:1000, height:'auto'}}/></div>


**ステップ 4: 注釈の確認と編集**

注釈が正確であることを確認することが重要です。

各画像を確認して、バウンディングボックスが正しく描画され、ラベル付けされていることを確認します。間違いを見つけた場合は、注釈を選択してバウンディングボックスを調整するか、ラベルを変更します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/15.png" style={{width:1000, height:'auto'}}/></div>

:::tip
不正確なラベル付けは訓練の全体的なパフォーマンスに影響し、一部のデータセットがラベル付け要件を満たさない場合は破棄できます。以下は悪いラベル付けの例です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/16.png" style={{width:700, height:'auto'}}/></div>
:::

**ステップ 5: データセットの生成とエクスポート**

すべての画像に注釈が付けられたら、Annotateで右上角の**Add x images to Dataset**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/17.png" style={{width:1000, height:'auto'}}/></div>

次に、新しいポップアップウィンドウの下部にある**Add Images**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/18.png" style={{width:400, height:'auto'}}/></div>

左のツールバーで**Generate**をクリックし、3番目の**Preprocessing**ステップで**Continue**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/19.png" style={{width:1000, height:'auto'}}/></div>

ステップ4の**Augmentation**で、汎化を向上させる**Mosaic**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/20.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/21.png" style={{width:1000, height:'auto'}}/></div>

最終的な**Create**ステップでは、Roboflowのブーストに従って画像数を合理的に計算してください。一般的に、画像が多いほど、モデルの訓練に時間がかかります。しかし、画像が多いからといって必ずしもモデルがより正確になるわけではなく、主にデータセットが十分に良いかどうかに依存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/22.png" style={{width:1000, height:'auto'}}/></div>

**Create**をクリックしてデータセットのバージョンを作成します。Roboflowが画像と注釈を処理し、バージョン管理されたデータセットを作成します。データセットが生成されたら、**Export Dataset**をクリックします。訓練するモデルの要件に合致する**COCO**形式を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/23.png" style={{width:1000, height:'auto'}}/></div>

**Continue**をクリックすると、このモデルのRaw URLが取得されます。これを保存してください。後のモデル訓練ステップでこのリンクを使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/27.png" style={{width:1000, height:'auto'}}/></div>


おめでとうございます！Roboflowを使用してRock-Paper-Scissors手のジェスチャー検出モデル用のデータセットのアップロード、注釈付け、エクスポートに成功しました。データセットの準備ができたので、Google Colabなどのプラットフォームを使用して機械学習モデルの訓練に進むことができます。

将来のモデルの精度を向上させるために、データセットを多様で適切に注釈付けされた状態に保つことを忘れないでください。モデル訓練の成功を祈り、AIの力で手のジェスチャー分類を楽しんでください！
</TabItem>
</Tabs>


## エクスポートされたデータセットモデルの訓練



### ステップ 1. Colabノートブックへのアクセス

[SenseCraft Model AssistantのWiki](https://wiki.seeedstudio.com/ja/ModelAssistant_Introduce_Quick_Start/#model-training)で、様々な種類のモデルGoogle Colabコードファイルを見つけることができます。どのコードを選択すべきかわからない場合は、モデルのクラス（物体検出または画像分類）に応じて、いずれかを選択できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/24.png" style={{width:1000, height:'auto'}}/></div>

まだGoogleアカウントにサインインしていない場合は、Google Colabの全機能にアクセスするためにサインインしてください。

「Connect」をクリックして、Colabセッション用のリソースを割り当てます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/25.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 2. Roboflowデータセットの追加

コードブロックを段階的に正式に実行する前に、コードが準備したデータセットを使用できるようにコードの内容を変更する必要があります。データセットをColabファイルシステムに直接ダウンロードするためのURLを提供する必要があります。

コード内の**Download the dataset**セクションを見つけてください。以下のサンプルプログラムが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/28.png" style={{width:1000, height:'auto'}}/></div>

```sh
%mkdir -p Gesture_Detection_Swift-YOLO_192/dataset 
!wget -c https://universe.roboflow.com/ds/xaMM3ZTeWy?key=5bznPZyI0t -O Gesture_Detection_Swift-YOLO_192/dataset.zip 
!unzip -q Gesture_Detection_Swift-YOLO_192/dataset.zip -d Gesture_Detection_Swift-YOLO_192/dataset
```

このコードは、ディレクトリを作成し、RoboflowからデータセットをダウンロードしてGoogle Colab環境内の新しく作成されたディレクトリに解凍するために使用されます。各行の動作の詳細は以下の通りです：

1. `%mkdir -p Gesture_Detection_Swift-YOLO_192/dataset`:
   - この行は`Gesture_Detection_Swift-YOLO_192`という新しいディレクトリと`dataset`というサブディレクトリを作成します。`-p`フラグは、ディレクトリが既に存在する場合にエラーを返さず、必要な親ディレクトリを作成することを保証します。

2. `!wget -c https://universe.roboflow.com/ds/xaMM3ZTeWy?key=5bznPZyI0t -O Gesture_Detection_Swift-YOLO_192/dataset.zip`:
   - この行は `wget`（コマンドライン ユーティリティ）を使用して、提供された Roboflow URL からデータセットをダウンロードします。`-c` フラグは、ダウンロードが中断された場合に再開できるようにします。`-O` フラグは、ダウンロードされたファイルの出力場所とファイル名を指定します。この場合は `Gesture_Detection_Swift-YOLO_192/dataset.zip` です。

3. `!unzip -q Gesture_Detection_Swift-YOLO_192/dataset.zip -d Gesture_Detection_Swift-YOLO_192/dataset`:
   - この行は `unzip` コマンドを使用して、`dataset.zip` ファイルの内容を先ほど作成した `dataset` ディレクトリに展開します。`-q` フラグは `unzip` コマンドをクワイエットモードで実行し、ほとんどの出力メッセージを抑制します。

Roboflow からの独自のモデルリンクに対してこのコードをカスタマイズするには：

1. `Gesture_Detection_Swift-YOLO_192` を、データセットを保存したい希望のディレクトリ名に置き換えます。

2. Roboflow データセット URL（`https://universe.roboflow.com/ds/xaMM3ZTeWy?key=5bznPZyI0t`）を、エクスポートしたデータセットへのリンク（[ラベル付きデータセットの最後のステップ](#choose-how-you-get-your-dataset)で取得した Raw URL）に置き換えます。アクセスに必要な場合は、key パラメータを含めるようにしてください。

3. 必要に応じて `wget` コマンドの出力ファイル名を調整します（`-O your_directory/your_filename.zip`）。

4. `unzip` コマンドの出力ディレクトリが作成したディレクトリと一致し、ファイル名が `wget` コマンドで設定したものと一致することを確認してください。

:::caution
フォルダディレクトリ `Gesture_Detection_Swift-YOLO_192` の名前を変更する場合、変更前にコード内で使用されていた他のディレクトリ名も変更する必要があることに注意してください。そうしないとエラーが発生する可能性があります！
:::

### ステップ 3. モデルパラメータの調整

次のステップは、モデルの入力パラメータを調整することです。SSCMA でモデルを訓練するセクションにジャンプすると、以下のコードスニペットが表示されます。

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


このコマンドは、SSCMA（Seeed Studio SenseCraft Model Assistant）フレームワークを使用して、機械学習モデル、特に YOLO（You Only Look Once）モデルの訓練プロセスを開始するために使用されます。このコマンドには、訓練プロセスを設定するためのさまざまなオプションが含まれています。各部分の機能は以下の通りです：

- `!sscma.train` は SSCMA フレームワーク内で訓練を開始するコマンドです。

- `configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py` は訓練用の設定ファイルを指定します。これには、モデルアーキテクチャ、訓練スケジュール、データ拡張戦略などの設定が含まれます。

- `--cfg-options` を使用すると、`.py` ファイルで指定されたデフォルト設定を、コマンドラインで提供する設定でオーバーライドできます。

- `work_dir=Gesture_Detection_Swift-YOLO_192` は、ログや保存されたモデルチェックポイントなどの訓練出力が保存されるディレクトリを設定します。

- `num_classes=3` は、モデルが認識するように訓練されるクラス数を指定します。これは持っているタグの数に依存します。例えば、グー、パー、チョキの場合は3つのタグになります。

- `epochs=10` は実行する訓練サイクル（エポック）数を設定します。推奨値は50から100の間です。

- `height=192` と `width=192` は、モデルが期待する入力画像の高さと幅を設定します。

- `data_root=Gesture_Detection_Swift-YOLO_192/dataset/` は、訓練データが配置されているディレクトリへのパスを定義します。

- `load_from=Gesture_Detection_Swift-YOLO_192/pretrain.pth` は、訓練を再開するか、転移学習の開始点として使用する事前訓練済みモデルチェックポイントファイルへのパスを提供します。

独自の訓練用にこのコマンドをカスタマイズするには：

1. カスタム設定ファイルがある場合は、`configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py` を独自の設定ファイルへのパスに置き換えます。

2. `work_dir` を訓練出力を保存したいディレクトリに変更します。

3. `num_classes` を独自のデータセット内のクラス数に合わせて更新します。これは持っているタグの数に依存します。例えば、グー、パー、チョキの場合は3つのタグになります。

4. `epochs` をモデルの希望する訓練エポック数に調整します。推奨値は50から100の間です。

5. `height` と `width` をモデルの入力画像の寸法に合わせて設定します。

:::caution
Colab コード内で画像サイズを変更することは実際にはお勧めしません。この値は、サイズ、精度、推論速度の組み合わせとして検証済みの、より適切なデータセットサイズだからです。このサイズではないデータセットを使用していて、精度を確保するために画像サイズを変更したい場合は、240x240を超えないようにしてください。
:::

6. `data_root` をデータセットのルートディレクトリを指すように変更します。

7. 異なる事前訓練済みモデルファイルがある場合は、それに応じて `load_from` パスを更新します。

### ステップ 4. Google Colab コードの実行

コードブロックを実行する方法は、コードブロックの左上隅にある再生ボタンをクリックすることです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/30.png" style={{width:1000, height:'auto'}}/></div>

ボタンをクリックするとコードブロックが実行され、すべてが順調に進めば、コードブロックの実行が完了したサイン（ブロックの左側にチェックマークが表示される）が表示されます。図に示されているのは、最初のコードブロックの実行が完了した後の効果です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/31.png" style={{width:1000, height:'auto'}}/></div>

上の画像で私と同じエラーメッセージが表示された場合は、**T4 GPU** を使用していることを確認してください。このプロジェクトでは **CPU を使用しないでください**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/32.png" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/33.png" style={{width:600, height:'auto'}}/></div>

その後、コードブロックを再実行します。最初のコードブロックについて、すべてが順調に進めば、以下に示す結果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/34.png" style={{width:1000, height:'auto'}}/></div>

次に、**Download the pretrain model weights file** から **Export the model** までのすべてのコードブロックを実行します。各コードブロックにエラーがないことを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/36.png" style={{width:400, height:'auto'}}/></div>


:::note
コード内に表示される警告は無視できます。
:::

### ステップ 5. モデルの評価

**Evaluate the model** セクションに到達したら、**Evaluate the TFLite INT8 model** コードブロックを実行するオプションがあります。

:::tip
TFLite INT8 モデルの評価には、量子化されたモデルの予測を別のテストデータセットに対してテストして精度とパフォーマンス指標を測定し、量子化がモデルの精度に与える影響を評価し、推論速度とリソース使用量をプロファイリングして、エッジデバイスの展開制約を満たすことを確認することが含まれます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/35.png" style={{width:1000, height:'auto'}}/></div>

以下のスニペットは、このコードブロックを実行した後の結果の有効な部分です。

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

評価結果には、異なる Intersection over Union（IoU）閾値とオブジェクトサイズに対して計算された一連の Average Precision（AP）と Average Recall（AR）指標が含まれており、これらは物体検出モデルのパフォーマンスを評価するために一般的に使用されます。

1. **AP@[IoU=0.50:0.95 | area=all | maxDets=100] = 0.450**
   - このスコアは、0.50から0.95までの IoU 閾値範囲（0.05刻み）におけるモデルの平均精度です。AP が 0.450 であることは、この範囲でモデルが中程度の精度を持つことを示しています。これは COCO データセットで一般的に使用される重要な指標です。

2. **AP@[IoU=0.50 | area=all | maxDets=100] = 0.929**
   - IoU 閾値 0.50 において、モデルは 0.929 の高い平均精度を達成しており、より寛容なマッチング基準の下でオブジェクトを非常に正確に検出することを示しています。

3. **AP@[IoU=0.75 | area=all | maxDets=100] = 0.361**
   - より厳しいIoUしきい値0.75では、モデルの平均精度は0.361に低下し、より厳しいマッチング基準下でのパフォーマンス低下を示しています。

4. **AP@[IoU=0.50:0.95 | area=small/medium/large | maxDets=100]**
   - APスコアは異なるサイズのオブジェクトで変動します。ただし、小さなオブジェクトのAPは-1.000であり、これは小さなオブジェクトの評価データの不足またはモデルの小さなオブジェクト検出における性能の低さを示している可能性があります。中型および大型オブジェクトのAPスコアはそれぞれ0.474と0.456であり、モデルが中型および大型オブジェクトを比較的よく検出することを示唆しています。

5. **AR@[IoU=0.50:0.95 | area=all | maxDets=1/10/100]**
   - 異なる`maxDets`値に対する平均再現率は0.515から0.529の範囲で非常に一貫しており、モデルが真陽性インスタンスの大部分を確実に取得することを示しています。

6. **FPS: 128.350449 fram/s**
   - モデルは推論中に約128.35フレーム/秒の非常に高速でイメージを処理し、リアルタイムまたはほぼリアルタイムアプリケーションの可能性を示しています。

全体的に、モデルはIoU 0.50で優秀な性能を示し、IoU 0.75では中程度の性能を示します。中型および大型オブジェクトの検出では優れた性能を示しますが、小さなオブジェクトの検出に問題がある可能性があります。さらに、モデルは高速で推論を行うため、高速処理が必要なシナリオに適しています。アプリケーションで小さなオブジェクトの検出が重要な場合は、性能を向上させるためにモデルをさらに最適化するか、より多くの小さなオブジェクトデータを収集する必要があるかもしれません。

### ステップ6. エクスポートされたモデルファイルのダウンロード

**Export the model**セクションの後、様々な形式のモデルファイルが取得でき、デフォルトでModelAssistantフォルダに保存されます。このチュートリアルでは、保存ディレクトリは**Gesture_Detection_Swift_YOLO_192**です。

:::tip
Google Colabがフォルダの内容を自動的に更新しない場合があります。この場合、左上角の更新アイコンをクリックしてファイルディレクトリを更新する必要があるかもしれません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/39.png" style={{width:500, height:'auto'}}/></div>

:::

上記のディレクトリでは、XIAO ESP32S3およびGrove Vision AI V2用の**.tflite**モデルファイルが利用可能です。Grove Vision AI V2の場合は、**xxx_int8_vela.tflite**形式を使用するモデルファイルを必ず選択してください。Grove Vision AI V2では他の形式は使用できません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/38.png" style={{width:400, height:'auto'}}/></div>

モデルファイルを見つけたら、できるだけ早くローカルコンピュータにダウンロードしてください。Google Colabは長時間アイドル状態が続くとストレージディレクトリを空にする可能性があります！

ここで実行した手順により、Grove Vision AI V2でサポートできるモデルファイルのエクスポートに成功しました。次に、モデルをデバイスにデプロイしましょう。


## SenseCraft Model Assistantを介したモデルのアップロード

### ステップ7. Grove Vision AI V2へのカスタムモデルのアップロード

次に、Model Assistantページに移動します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Model Assistant 🖱️</font></span></strong>
    </a>
</div>
<br></br>

Grove Vision AI V2を選択した後にデバイスを接続し、ページ下部の**Upload Custom AI Model**を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/40.png" style={{width:1000, height:'auto'}}/></div>

その後、モデルの名前、モデルファイル、およびラベルを準備する必要があります。ここで、ラベルIDの要素がどのように決定されるかを強調したいと思います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/41.png" style={{width:500, height:'auto'}}/></div>

**Roboflowのデータセットを直接ダウンロードしている場合**

Roboflowのデータセットを直接ダウンロードした場合は、Health Checkページで異なるカテゴリとその順序を確認できます。ここに入力された順序に従ってインストールしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/42.png" style={{width:1000, height:'auto'}}/></div>


:::tip
**ID:Object**に数字を入力する必要はありません。カテゴリ名を直接入力するだけで、画像上のカテゴリの前の数字とコロンは自動的に追加されます。
:::

**カスタムデータセットを使用している場合**

カスタムデータセットを使用している場合は、Health Checkページで異なるカテゴリとその順序を確認できます。ここに入力された順序に従ってインストールしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/43.png" style={{width:1000, height:'auto'}}/></div>

:::tip
**ID:Object**に数字を入力する必要はありません。カテゴリ名を直接入力するだけで、画像上のカテゴリの前の数字とコロンは自動的に追加されます。
:::

次に、右下角のSend Modelをクリックします。これには約3〜5分程度かかる場合があります。すべてが順調に進めば、上記のModel NameとPreviewウィンドウでモデルの結果を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/44.png" style={{width:1000, height:'auto'}}/></div>

ここまで到達できたなら、おめでとうございます。独自のモデルの訓練とデプロイに成功しました。


## モデルの一般的なプロトコルとアプリケーション

カスタムモデルのアップロードプロセス中、視覚化してアップロードできるモデルファイルに加えて、デバイスに転送する必要があるデバイスのファームウェアもあります。デバイスのファームウェアには、モデル結果出力の形式を指定し、ユーザーがモデルで何ができるかを定める確立された通信プロトコルのセットがあります。

スペースの問題により、このwikiではこれらのプロトコルの詳細を展開しませんが、Githubのドキュメントを通じてこのセクションを詳しく説明します。より深い開発に興味がある場合は、こちらをご覧ください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft プロトコル</font></span></strong>
    </a>
</div>
<br></br>

XIAOなどのArduinoデバイスを使用してプロトタイプを実現し続けたい場合は、こちらのArduinoサンプルプログラムを参照してください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/grove_vision_ai_v2_software_support/#demo-1-use-xiao-to-get-recognition-results" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Arduino サンプル🖱️</font></span></strong>
    </a>
</div>
<br></br>

初心者で独自のモデルを素早く構築したい場合は、こちらのSenseCraft AIモデル訓練サンプルを参照してください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/sensecraft-ai/tutorials/sensecraft-ai-training-object-detection/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft 訓練</font></span></strong>
    </a>
</div>
<br></br>


## トラブルシューティング

### 1. 手順に従ったにもかかわらず、満足のいかないモデル結果になった場合はどうすればよいですか？

モデルの認識精度が満足できない場合は、以下の側面を考慮して診断と改善を行うことができます：

1. **データの品質と量**
   - **問題**: データセットが小さすぎるか多様性に欠ける、またはアノテーションに不正確さがある可能性があります。
   - **解決策**: 訓練データのサイズと多様性を増やし、データクリーニングを実行してアノテーションエラーを修正します。

2. **訓練プロセス**
   - **問題**: 訓練時間が不十分であるか、学習率が不適切に設定されており、モデルが効果的に学習できない可能性があります。
   - **解決策**: 訓練エポック数を増やし、学習率やその他のハイパーパラメータを調整し、過学習を避けるために早期停止を実装します。

3. **クラス不均衡**
   - **問題**: 一部のクラスが他のクラスよりも大幅に多くのサンプルを持ち、多数クラスに対するモデルバイアスを引き起こします。
   - **解決策**: クラス重みを使用し、少数クラスをオーバーサンプリングするか、多数クラスをアンダーサンプリングしてデータのバランスを取ります。

徹底的な分析と対象を絞った改善の実装により、モデルの精度を段階的に向上させることができます。各修正後にモデルの性能をテストするために検証セットを使用し、改善の効果を確保することを忘れないでください。

### 2. Wikiの手順に従った後、SenseCraftデプロイメントで**Invoke failed**メッセージが表示されるのはなぜですか？

Invoke failedが発生した場合、デバイスでの使用要件を満たさないモデルを訓練したことになります。以下の領域に注目してください。

1. Colabの画像サイズを変更したかどうかを確認してください。デフォルトの圧縮サイズは**192x192**です。Grove Vision AI V2では画像サイズを正方形として圧縮する必要があります。圧縮に非正方形サイズを使用しないでください。また、サイズが大きすぎないようにしてください*（240x240以下を推奨）*。

2. Grove Vision AI V2のモデルファイルは**int8_vela.tflite**の接尾辞を持つ必要があります。他の形式のモデルファイルを使用しないでください。これには**int8.tfliteも含まれ、これもGrove Vision AI V2では使用できません**。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

