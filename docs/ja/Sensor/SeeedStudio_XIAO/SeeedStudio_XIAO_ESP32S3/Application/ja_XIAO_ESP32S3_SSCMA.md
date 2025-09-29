---
description: 所有データセット、ラベリング、トレーニング、そしてXIAO ESP32S3への展開に関するガイダンス。
title: データセットからXIAO ESP32S3へのモデル展開
keywords:
- SSCMA
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32s3_sscma
last_update:
  date: 03/12/2024
  author: Citric
---


# データセットからXIAO ESP32S3へのモデル展開

このデータセットをXIAO ESP32S3で動作する完全に機能するモデルに変換する包括的なチュートリアルへようこそ。このガイドでは、Roboflowの直感的なツールを使用してデータセットにラベルを付ける初期ステップから始まり、Google Colabの協調環境内でのモデルトレーニングまでの道のりを進んでいきます。

その後、SenseCraft Model Assistantを使用してトレーニング済みモデルを展開する段階に進みます。これは、トレーニングと実世界のアプリケーションの間のギャップを埋めるプロセスです。このチュートリアルの終わりまでに、XIAO ESP32S3で動作するカスタムモデルを手に入れるだけでなく、モデルの予測結果を解釈し活用するための知識も身に付けることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/0.png" style={{width:1000, height:'auto'}}/></div>

データセットからモデル展開まで、以下の主要なステップを実行します。

1. [ラベル付きデータセット](#labelled-datasets) —— この章では、モデルにトレーニングできるデータセットを取得する方法に焦点を当てます。主に2つの方法があります。1つ目はRoboflowコミュニティが提供するラベル付きデータセットを使用する方法、もう1つは独自のシナリオ固有の画像をデータセットとして使用する方法ですが、手動でラベリングを行う必要があります。

2. [トレーニングデータセットエクスポートモデル](#training-dataset-exported-model) —— この章では、Google Colabプラットフォームを使用して、最初のステップで取得したデータセットに基づいて、XIAO ESP32S3に展開できるモデルをトレーニングして取得する方法に焦点を当てます。

3. [SenseCraft Model Assistantを介したモデルのアップロード](#upload-models-via-sensecraft-model-assistant) —— このセクションでは、エクスポートされたモデルファイルを使用して、SenseCraft Model AssistantでXIAO ESP32S3にモデルをアップロードする方法について説明します。

4. [モデルの一般的なプロトコルとアプリケーション](#common-protocols-and-applications-of-the-model) —— 最後に、SenseCraft AIの統一データ通信フォーマットを紹介し、デバイスとモデルの最大限の可能性を活用して、シナリオに適したアプリケーションを作成できるようにします。

それでは、データに命を吹き込むエキサイティングなプロセスを始めましょう。

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

このチュートリアルでは、XIAO ESP32S3 の標準版とSense版の両方を使用できますが、標準版では カメラ拡張ボードが使用できないため、Sense版の使用をお勧めします。

## ラベル付きデータセット

このセクションでは、ユーザーが自由にデータセットを選択できます。これには、コミュニティの写真や独自に撮影したシーンの写真が含まれます。このチュートリアルでは、2つの主要なシナリオを紹介します。1つ目は、[Roboflow](https://roboflow.com/about) コミュニティが提供する既製のラベル付きデータセットを使用することです。もう1つは、自分で撮影した高解像度画像を使用してデータセットにラベルを付けることです。ニーズに応じて、以下の異なるチュートリアルをお読みください。

### ステップ1：無料のRoboflowアカウントを作成する

Roboflowは、コンピュータビジョンソリューションのラベル付け、トレーニング、デプロイに必要なすべてを提供します。開始するには、[無料のRoboflowアカウント](https://app.roboflow.com/?ref=blog.roboflow.com)を作成してください。

利用規約を確認して同意すると、2つのプランのうち1つを選択するよう求められます：パブリックプランとスタータープランです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/1.png" style={{width:800, height:'auto'}}/></div>

次に、ワークスペースに協力者を招待するよう求められます。これらの協力者は、画像の注釈付けやワークスペース内のビジョンプロジェクトの管理を手伝うことができます。ワークスペースに人を招待した後（希望する場合）、プロジェクトを作成できるようになります。

### データセットの取得方法を選択する

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Download Labelled datasets using Roboflow" label="Roboflowを使用してラベル付きデータセットをダウンロード">

Roboflowから直接使用に適したデータセットを選択するには、データセットのサイズ、品質、関連性、ライセンスなどの側面を考慮して、プロジェクトの要件に最も適したデータセットを決定する必要があります。

**ステップ2. Roboflow Universeを探索する**

Roboflow Universeは、さまざまなデータセットを見つけることができるプラットフォームです。Roboflow Universeのウェブサイトにアクセスして、利用可能なデータセットを探索してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/2.png" style={{width:1000, height:'auto'}}/></div>

Roboflowは、データセットを見つけるのに役立つフィルターと検索機能を提供しています。ドメイン、クラス数、注釈タイプなどでデータセットをフィルタリングできます。これらのフィルターを活用して、条件に合うデータセットを絞り込んでください。

**ステップ3. 個別のデータセットを評価する**

候補リストができたら、各データセットを個別に評価してください。以下を確認してください：

**注釈の品質**：注釈が正確で一貫しているかを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/3.png" style={{width:1000, height:'auto'}}/></div>

**データセットのサイズ**：モデルが効果的に学習できる十分な大きさでありながら、処理しきれないほど大きくないことを確認してください。

**クラスバランス**：データセットは理想的には各クラスに対してバランスの取れた例数を持つべきです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/4.png" style={{width:1000, height:'auto'}}/></div>

**ライセンス**：データセットのライセンスを確認して、意図した通りに使用できることを確認してください。

**ドキュメント**：データセットに付属するドキュメントやメタデータを確認して、その内容と既に適用されている前処理ステップをよりよく理解してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/5.png" style={{width:1000, height:'auto'}}/></div>

:::tip
**[Roboflow Health Check](https://docs.roboflow.com/datasets/dataset-health-check)**を通じてモデルの状態を確認できます。
:::

**ステップ4. サンプルをダウンロードする**

選択したデータセットが見つかったら、それをダウンロードして使用するオプションがあります。Roboflowでは通常、データセットのサンプルをダウンロードできます。サンプルをテストして、ワークフローとうまく統合でき、モデルに適しているかを確認してください。

後続のステップを続行するために、以下に示す形式でデータセットをエクスポートすることをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/6.png" style={{width:1000, height:'auto'}}/></div>

その後、このモデルの**Raw URL**が取得できます。これを安全に保管してください。後でモデルトレーニングステップでこのリンクを使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/26.png" style={{width:1000, height:'auto'}}/></div>

:::caution
Roboflowを初めて使用し、データセットの選択について全く判断がつかない場合、データセットでモデルをトレーニングして初期テストを実行し、パフォーマンスを確認するステップが不可欠かもしれません。これにより、データセットが要件を満たすかどうかを判断できます。

データセットが要件を満たし、初期テストで良好なパフォーマンスを示した場合、プロジェクトに適している可能性が高いです。そうでなければ、検索を続けるか、より多くの画像でデータセットを拡張することを検討する必要があるかもしれません。
:::

</TabItem>

<TabItem value="Use your own images as a dataset" label="独自の画像をデータセットとして使用">

ここでは、じゃんけんのジェスチャー画像をデモとして使用し、Roboflowでの画像アップロード、ラベル付け、データセットエクスポートのタスクを案内します。

:::note
データセットの写真撮影にはXIAO ESP32S3の使用を強くお勧めします。これはXIAO ESP32S3に最適です。XIAO ESP32S3 Senseで写真を撮影するサンプルプログラムは、以下のWikiリンクで確認できます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_camera_usage/#taking-photos-with-the-camera" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Wikiへ移動</font></span></strong>
    </a>
</div>
:::

**ステップ2. 新しいプロジェクトの作成と画像のアップロード**

Roboflowにログインしたら、**Create Project**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/7.png" style={{width:1000, height:'auto'}}/></div>

プロジェクトに名前を付けます（例：「Rock-Paper-Scissors」）。プロジェクトを**Object Detection**として定義します。**Output Labels**を**Categorical**に設定します（Rock、Paper、Scissorsは異なるカテゴリであるため）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/8.png" style={{width:1000, height:'auto'}}/></div>

次に、手のジェスチャー画像をアップロードします。

じゃんけんのグー、パー、チョキのジェスチャーの画像を収集します。様々な背景と照明条件を含むようにしてください。プロジェクトページで「Add Images」をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/9.png" style={{width:1000, height:'auto'}}/></div>

画像をドラッグ&ドロップするか、コンピューターから選択できます。堅牢なデータセットのために、各ジェスチャーの画像を少なくとも100枚アップロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/10.png" style={{width:1000, height:'auto'}}/></div>

:::tip
**データセットのサイズはどのように決定されるのでしょうか？**

一般的に、タスクモデル、タスクの複雑さ、データの純度など、様々な要因に依存します。例えば、人体検出モデルは多数の人々を含み、範囲が広く、タスクがより複雑であるため、より多くのデータを収集する必要があります。
別の例として、ジェスチャー検出モデルは「グー」「チョキ」「パー」の3種類のみを検出する必要があり、必要なカテゴリが少ないため、収集されるデータセットは約500枚程度です。
:::

**ステップ3: 画像のアノテーション**

アップロード後、手のジェスチャーにラベルを付けて画像にアノテーションを行う必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/11.png" style={{width:1000, height:'auto'}}/></div>

Roboflowは画像にラベルを付ける3つの異なる方法を提供しています：Auto Label、Roboflow Labeling、Manual Labelingです。

- [**Auto Label**](https://blog.roboflow.com/yolo-world-prompting-tips/)：大規模な汎用モデルを使用して画像に自動的にラベルを付けます。
- **Roboflow Labeling**：プロの人間ラベラーチームと協力します。最小ボリュームなし。事前コミットメントなし。バウンディングボックスアノテーションは\$0.04から、ポリゴンアノテーションは\$0.08から開始されます。
- **Manual Labeling**：あなたとあなたのチームが独自に画像にラベルを付けます。

以下では、最も一般的に使用される手動ラベリングの方法について説明します。

「Manual Labeling」ボタンをクリックします。Roboflowがアノテーションインターフェースを読み込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/12.png" style={{width:1000, height:'auto'}}/></div>

「Start Annotating」ボタンを選択します。各画像の手のジェスチャーの周りにバウンディングボックスを描画します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/13.gif" style={{width:1000, height:'auto'}}/></div>

各バウンディングボックスを「Rock」、「Paper」、または「Scissors」としてラベル付けします。

「>」ボタンを使用してデータセット内を移動し、各画像に対してアノテーションプロセスを繰り返します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/14.gif" style={{width:1000, height:'auto'}}/></div>

**ステップ4: アノテーションのレビューと編集**

アノテーションが正確であることを確認することが重要です。

各画像をレビューして、バウンディングボックスが正しく描画され、ラベル付けされていることを確認します。間違いを見つけた場合は、アノテーションを選択してバウンディングボックスを調整するか、ラベルを変更します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/15.png" style={{width:1000, height:'auto'}}/></div>

:::tip
不正確なラベリングは訓練の全体的なパフォーマンスに影響し、一部のデータセットがラベリング要件を満たさない場合は破棄できます。以下に悪いラベリングの例を示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/16.png" style={{width:700, height:'auto'}}/></div>
:::

**ステップ5: データセットの生成とエクスポート**

すべての画像にアノテーションが完了したら、Annotateで右上角の**Add x images to Dataset**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/17.png" style={{width:1000, height:'auto'}}/></div>

次に、新しいポップアップウィンドウの下部にある**Add Images**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/18.png" style={{width:400, height:'auto'}}/></div>

左のツールバーで**Generate**をクリックし、3番目の**Preprocessing**ステップで**Continue**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/19.png" style={{width:1000, height:'auto'}}/></div>

ステップ4の**Augmentation**で、汎化を向上させる**Mosaic**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/20.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/21.png" style={{width:1000, height:'auto'}}/></div>

最終的な**Create**ステップでは、Roboflowのブーストに従って画像数を合理的に計算してください。一般的に、画像が多いほど、モデルの訓練に時間がかかります。ただし、画像が多いからといって必ずしもモデルがより正確になるわけではなく、主にデータセットが十分に良いかどうかに依存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/22.png" style={{width:1000, height:'auto'}}/></div>

**Create** をクリックして、データセットのバージョンを作成します。Roboflowが画像とアノテーションを処理し、バージョン管理されたデータセットを作成します。データセットが生成された後、**Export Dataset** をクリックします。トレーニングするモデルの要件に合致する **COCO** フォーマットを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/23.png" style={{width:1000, height:'auto'}}/></div>

**Continue** をクリックすると、このモデルのRaw URLが表示されます。このリンクを保存しておいてください。後のモデルトレーニングステップで使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/27.png" style={{width:1000, height:'auto'}}/></div>

おめでとうございます！Roboflowを使用して、じゃんけんの手のジェスチャー検出モデル用のデータセットのアップロード、アノテーション、エクスポートに成功しました。データセットの準備ができたので、Google Colabなどのプラットフォームを使用して機械学習モデルのトレーニングに進むことができます。

将来のモデルの精度を向上させるために、データセットを多様で適切にアノテーションされた状態に保つことを忘れないでください。モデルトレーニングの成功を祈り、AIの力で手のジェスチャー分類を楽しんでください！
</TabItem>
</Tabs>

## トレーニングデータセットエクスポートモデル

### ステップ 1. Colab Notebookへのアクセス

[SenseCraft Model AssistantのWiki](https://wiki.seeedstudio.com/ja/ModelAssistant_Introduce_Quick_Start/#model-training)で、さまざまな種類のモデルGoogle Colabコードファイルを見つけることができます。どのコードを選択すべきかわからない場合は、モデルのクラス（物体検出または画像分類）に応じて、いずれかを選択できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/24.png" style={{width:1000, height:'auto'}}/></div>

まだGoogleアカウントにサインインしていない場合は、Google Colabの全機能にアクセスするためにサインインしてください。

「Connect」をクリックして、Colabセッション用のリソースを割り当てます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/25.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 2. Roboflowデータセットの追加

コードブロックを段階的に正式に実行する前に、コードが準備したデータセットを使用できるように、コードの内容を修正する必要があります。データセットをColabファイルシステムに直接ダウンロードするためのURLを提供する必要があります。

コード内の **Download the dataset** セクションを見つけてください。以下のサンプルプログラムが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/28.png" style={{width:1000, height:'auto'}}/></div>

```sh
%mkdir -p Gesture_Detection_Swift-YOLO_192/dataset 
!wget -c https://universe.roboflow.com/ds/xaMM3ZTeWy?key=5bznPZyI0t -O Gesture_Detection_Swift-YOLO_192/dataset.zip 
!unzip -q Gesture_Detection_Swift-YOLO_192/dataset.zip -d Gesture_Detection_Swift-YOLO_192/dataset
```

このコードは、Google Colab環境内でディレクトリを作成し、Roboflowからデータセットをダウンロードして、新しく作成したディレクトリに解凍するために使用されます。各行の動作の詳細は以下の通りです：

1. `%mkdir -p Gesture_Detection_Swift-YOLO_192/dataset`:
   - この行は`Gesture_Detection_Swift-YOLO_192`という新しいディレクトリと`dataset`というサブディレクトリを作成します。`-p`フラグにより、ディレクトリが既に存在する場合にエラーを返さず、必要な親ディレクトリを作成することが保証されます。

2. `!wget -c https://universe.roboflow.com/ds/xaMM3ZTeWy?key=5bznPZyI0t -O Gesture_Detection_Swift-YOLO_192/dataset.zip`:
   - この行は`wget`というコマンドラインユーティリティを使用して、提供されたRoboflow URLからデータセットをダウンロードします。`-c`フラグにより、ダウンロードが中断された場合に再開できます。`-O`フラグは、ダウンロードしたファイルの出力場所とファイル名を指定します。この場合は`Gesture_Detection_Swift-YOLO_192/dataset.zip`です。

3. `!unzip -q Gesture_Detection_Swift-YOLO_192/dataset.zip -d Gesture_Detection_Swift-YOLO_192/dataset`:
   - この行は`unzip`コマンドを使用して、`dataset.zip`ファイルの内容を先ほど作成した`dataset`ディレクトリに展開します。`-q`フラグは`unzip`コマンドをクワイエットモードで実行し、ほとんどの出力メッセージを抑制します。

Roboflowから独自のモデルリンクに対してこのコードをカスタマイズするには：

1. `Gesture_Detection_Swift-YOLO_192`を、データセットを保存したい希望のディレクトリ名に置き換えます。

2. Roboflowデータセット URL（`https://universe.roboflow.com/ds/xaMM3ZTeWy?key=5bznPZyI0t`）を、エクスポートしたデータセットへのリンクに置き換えます（これは[ラベル付きデータセットの最後のステップ](#choose-how-you-get-your-dataset)で取得したRaw URLです）。アクセスに必要な場合は、keyパラメータを含めるようにしてください。

3. 必要に応じて`wget`コマンドの出力ファイル名を調整します（`-O your_directory/your_filename.zip`）。

4. `unzip`コマンドの出力ディレクトリが作成したディレクトリと一致し、ファイル名が`wget`コマンドで設定したものと一致することを確認してください。

:::caution
フォルダディレクトリ`Gesture_Detection_Swift-YOLO_192`の名前を変更する場合、変更前にコード内で使用されていた他のディレクトリ名も変更する必要があることに注意してください。そうしないとエラーが発生する可能性があります！
:::

### ステップ3. モデルパラメータの調整

次のステップは、モデルの入力パラメータを調整することです。「SSCMAでモデルを訓練する」セクションにジャンプすると、以下のコードスニペットが表示されます。

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

このコマンドは、SSCMA（Seeed Studio SenseCraft Model Assistant）フレームワークを使用して、機械学習モデル、特にYOLO（You Only Look Once）モデルの訓練プロセスを開始するために使用されます。このコマンドには、訓練プロセスを設定するための様々なオプションが含まれています。各部分の機能は以下の通りです：

- `!sscma.train` は、SSCMAフレームワーク内で訓練を開始するコマンドです。

- `configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py` は、モデルアーキテクチャ、訓練スケジュール、データ拡張戦略などの設定を含む訓練用の設定ファイルを指定します。

- `--cfg-options` を使用すると、`.py` ファイルで指定されたデフォルト設定を、コマンドラインで提供する設定で上書きできます。

- `work_dir=Gesture_Detection_Swift-YOLO_192` は、ログや保存されたモデルチェックポイントなどの訓練出力が保存されるディレクトリを設定します。

- `num_classes=3` は、モデルが認識するように訓練されるクラス数を指定します。これは持っているタグの数に依存します。例えば、グー、パー、チョキの場合は3つのタグになります。

- `epochs=10` は、実行する訓練サイクル（エポック）数を設定します。推奨値は50から100の間です。

- `height=192` と `width=192` は、モデルが期待する入力画像の高さと幅を設定します。

:::caution
Colabコードで画像サイズを変更することは実際にはお勧めしません。この値は、サイズ、精度、推論速度の組み合わせとして検証された、より適切なデータセットサイズだからです。このサイズではないデータセットを使用していて、精度を確保するために画像サイズの変更を検討したい場合は、240x240を超えないようにしてください。
:::

- `data_root=Gesture_Detection_Swift-YOLO_192/dataset/` は、訓練データが配置されているディレクトリへのパスを定義します。

- `load_from=Gesture_Detection_Swift-YOLO_192/pretrain.pth` は、訓練を再開するか、転移学習の開始点として使用する事前訓練済みモデルチェックポイントファイルへのパスを提供します。

独自の訓練用にこのコマンドをカスタマイズするには、以下のようにします：

1. カスタム設定ファイルがある場合は、`configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py` を独自の設定ファイルへのパスに置き換えます。

2. `work_dir` を、訓練出力を保存したいディレクトリに変更します。

3. `num_classes` を独自のデータセットのクラス数に合わせて更新します。これは持っているタグの数に依存します。例えば、グー、パー、チョキの場合は3つのタグになります。

4. `epochs` をモデルの希望する訓練エポック数に調整します。推奨値は50から100の間です。

5. `height` と `width` をモデルの入力画像の寸法に合わせて設定します。

6. `data_root` をデータセットのルートディレクトリを指すように変更します。

7. 異なる事前訓練済みモデルファイルがある場合は、それに応じて `load_from` パスを更新します。

### ステップ4. Google Colabコードを実行する

コードブロックを実行する方法は、コードブロックの左上角にある再生ボタンをクリックすることです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/30.png" style={{width:1000, height:'auto'}}/></div>

ボタンをクリックするとコードブロックが実行され、すべてがうまくいけば、コードブロックの実行が完了したサイン - ブロックの左側にチェックマークが表示されます。図に示されているのは、最初のコードブロックの実行が完了した後の効果です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/31.png" style={{width:1000, height:'auto'}}/></div>

上の画像で私と同じエラーメッセージが表示された場合は、**T4 GPU** を使用していることを確認してください。このプロジェクトでは **CPU を使用しないでください**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/32.png" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/33.png" style={{width:600, height:'auto'}}/></div>

その後、コードブロックを再実行します。最初のコードブロックについて、すべてがうまくいけば、以下に示す結果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/34.png" style={{width:1000, height:'auto'}}/></div>

次に、**Download the pretrain model weights file** から **Export the model** まで、すべてのコードブロックを実行します。そして、各コードブロックにエラーがないことを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/36.png" style={{width:400, height:'auto'}}/></div>

:::note
コードに表示される警告は無視できます。
:::

### ステップ5. モデルを評価する

**Evaluate the model** セクションに到達したら、**Evaluate the TFLite INT8 model** コードブロックを実行するオプションがあります。

:::tip
TFLite INT8 モデルの評価には、量子化されたモデルの予測を別のテストデータセットに対してテストして精度とパフォーマンスメトリクスを測定し、量子化がモデルの精度に与える影響を評価し、推論速度とリソース使用量をプロファイリングして、エッジデバイスの展開制約を満たすことを確認することが含まれます。
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

評価結果には、一連の平均精度（AP）と平均再現率（AR）メトリクスが含まれており、これらは異なるIntersection over Union（IoU）閾値とオブジェクトサイズに対して計算され、物体検出モデルの性能を評価するために一般的に使用されます。

1. **AP@[IoU=0.50:0.95 | area=all | maxDets=100] = 0.450**
   - このスコアは、0.50から0.95までのIoU閾値範囲（0.05刻み）におけるモデルの平均精度です。APが0.450であることは、この範囲でモデルが中程度の精度を持つことを示しています。これはCOCOデータセットで一般的に使用される重要なメトリクスです。

2. **AP@[IoU=0.50 | area=all | maxDets=100] = 0.929**
   - IoU閾値0.50において、モデルは0.929の高い平均精度を達成しており、より寛容なマッチング基準の下で非常に正確にオブジェクトを検出することを示しています。

3. **AP@[IoU=0.75 | area=all | maxDets=100] = 0.361**
   - より厳しいIoU閾値0.75では、モデルの平均精度は0.361に低下し、より厳密なマッチング基準の下での性能低下を示しています。

4. **AP@[IoU=0.50:0.95 | area=small/medium/large | maxDets=100]**
   - APスコアは異なるサイズのオブジェクトで変化します。ただし、小さなオブジェクトのAPは-1.000であり、これは小さなオブジェクトの評価データの不足または小さなオブジェクト検出におけるモデル性能の低さを示している可能性があります。中サイズと大サイズのオブジェクトのAPスコアはそれぞれ0.474と0.456であり、モデルが中サイズと大サイズのオブジェクトを比較的よく検出することを示しています。

5. **AR@[IoU=0.50:0.95 | area=all | maxDets=1/10/100]**
   - 異なる`maxDets`値に対する平均再現率は0.515から0.529の範囲で非常に一貫しており、モデルが真陽性インスタンスの大部分を確実に検索することを示しています。

6. **FPS: 128.350449 fram/s**
   - モデルは推論中に約128.35フレーム/秒の非常に高速な処理速度で画像を処理し、リアルタイムまたはほぼリアルタイムアプリケーションの可能性を示しています。

全体的に、モデルはIoU 0.50で優秀な性能を示し、IoU 0.75で中程度の性能を示します。中サイズと大サイズのオブジェクト検出では良好な性能を示しますが、小さなオブジェクトの検出に問題がある可能性があります。さらに、モデルは高速で推論を行うため、高速処理が必要なシナリオに適しています。アプリケーションで小さなオブジェクトの検出が重要な場合は、性能を向上させるためにモデルをさらに最適化するか、より多くの小さなオブジェクトデータを収集する必要があるかもしれません。

### ステップ6. エクスポートされたモデルファイルのダウンロード

**Export the model**セクションの後、様々な形式のモデルファイルが取得でき、これらはデフォルトでModelAssistantフォルダに保存されます。このチュートリアルでは、保存ディレクトリは**Gesture_Detection_Swift_YOLO_192**です。

:::tip
Google Colabがフォルダの内容を自動的に更新しない場合があります。この場合、左上角の更新アイコンをクリックしてファイルディレクトリを更新する必要があるかもしれません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/39.png" style={{width:500, height:'auto'}}/></div>

:::

上記のディレクトリでは、**.tflite**モデルファイルがXIAO ESP32S3とGrove Vision AI V2で利用可能です。XIAO ESP32S3 Senseの場合は、**xxx_int8.tflite**形式を使用するモデルファイルを必ず選択してください。XIAO ESP32S3 Senseでは他の形式は使用できません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/37.png" style={{width:400, height:'auto'}}/></div>

モデルファイルを見つけたら、できるだけ早くローカルコンピュータにダウンロードしてください。Google Colabは長時間アイドル状態が続くとストレージディレクトリを空にする可能性があります！

ここで実行した手順により、XIAO ESP32S3でサポートできるモデルファイルのエクスポートに成功しました。次に、モデルをデバイスにデプロイしましょう。

## SenseCraft Model Assistantを使用してモデルをアップロードする

### ステップ7. XIAO ESP32S3にカスタムモデルをアップロードする

次に、Model Assistantページに移動します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Model Assistant 🖱️</font></span></strong>
    </a>
</div>
<br></br>

XIAO ESP32S3を選択した後にデバイスを接続し、ページ下部の**Upload Custom AI Model**を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaos3-sscma/1.png" style={{width:1000, height:'auto'}}/></div>

その後、モデル名、モデルファイル、ラベルを準備する必要があります。ここで、ラベルIDの要素がどのように決定されるかを強調したいと思います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/41.png" style={{width:500, height:'auto'}}/></div>

**Roboflowのデータセットを直接ダウンロードしている場合**

Roboflowのデータセットを直接ダウンロードした場合、Health Checkページで異なるカテゴリとその順序を確認できます。ここで入力された順序に従ってインストールしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/42.png" style={{width:1000, height:'auto'}}/></div>

:::tip
**ID:Object**に数字を入力する必要はありません。カテゴリ名を直接入力するだけで、画像上のカテゴリの前の数字とコロンは自動的に追加されます。
:::

**カスタムデータセットを使用している場合**

カスタムデータセットを使用している場合、Health Checkページで異なるカテゴリとその順序を確認できます。ここで入力された順序に従ってインストールしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/43.png" style={{width:1000, height:'auto'}}/></div>

:::tip
**ID:Object**に数字を入力する必要はありません。カテゴリ名を直接入力するだけで、画像上のカテゴリの前の数字とコロンは自動的に追加されます。
:::

その後、右下のSend Modelをクリックします。これには約3〜5分程度かかる場合があります。すべてが順調に進めば、上部のModel NameとPreviewウィンドウでモデルの結果を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/44.png" style={{width:1000, height:'auto'}}/></div>

ここまで到達できたなら、おめでとうございます。独自のモデルを正常にトレーニングしてデプロイすることができました。

## モデルの一般的なプロトコルとアプリケーション

カスタムモデルのアップロードプロセス中、視覚的にアップロードされるモデルファイルに加えて、デバイスに転送する必要があるデバイスのファームウェアもあります。デバイスのファームウェアには、モデル結果出力の形式を指定し、ユーザーがモデルで何ができるかを定める確立された通信プロトコルのセットがあります。

スペースの問題により、このwikiではこれらのプロトコルの詳細については展開しませんが、Githubのドキュメントを通じてこのセクションを詳しく説明します。より深い開発に興味がある場合は、こちらをご覧ください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft Protocols</font></span></strong>
    </a>
</div>
<br></br>

## トラブルシューティング

### 1. 手順に従ったにも関わらず、モデルの結果が満足のいくものでない場合はどうすればよいですか？

モデルの認識精度が満足のいくものでない場合は、以下の側面を考慮して診断と改善を行うことができます：

1. **データの品質と量**
   - **問題**: データセットが小さすぎる、多様性に欠ける、またはアノテーションに不正確さがある可能性があります。
   - **解決策**: 訓練データのサイズと多様性を増やし、データクリーニングを実行してアノテーションエラーを修正します。

2. **訓練プロセス**
   - **問題**: 訓練時間が不十分、または学習率が不適切に設定されており、モデルが効果的に学習できない可能性があります。
   - **解決策**: 訓練エポック数を増やし、学習率やその他のハイパーパラメータを調整し、過学習を避けるために早期停止を実装します。

3. **クラス不均衡**
   - **問題**: 一部のクラスが他のクラスよりも大幅に多くのサンプルを持っており、モデルが多数派クラスに偏る原因となっています。
   - **解決策**: クラス重みを使用し、少数派クラスをオーバーサンプリングするか、多数派クラスをアンダーサンプリングしてデータのバランスを取ります。

徹底的な分析と的を絞った改善を実装することで、モデルの精度を段階的に向上させることができます。各修正後にモデルのパフォーマンスをテストするために検証セットを使用し、改善の効果を確実にすることを忘れないでください。

### 2. Wikiの手順に従った後、SenseCraftデプロイメントで**Invoke failed**メッセージが表示されるのはなぜですか？

Invoke failedが発生した場合、デバイスでの使用要件を満たさないモデルを訓練したことになります。以下の領域に焦点を当ててください。

1. Colabの画像サイズを変更したかどうかを確認してください。デフォルトの圧縮サイズは**192x192**です。Grove Vision AI V2では、画像サイズを正方形として圧縮する必要があります。圧縮に非正方形サイズを使用しないでください。また、サイズが大きすぎないようにしてください *（240x240以下を推奨）*。

<!-- 2. Grove Vision AI V2のモデルファイルは**int8_vela.tflite**の拡張子である必要があります。他の形式のモデルファイルは使用しないでください。これには**int8.tfliteも含まれ、これもGrove Vision AI V2では使用できません**。 -->

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
