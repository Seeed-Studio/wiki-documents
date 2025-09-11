---
description: ハードハット検出 - データラベル付け、AIモデルのトレーニング、AIモデルのデプロイをEdge ImpulseとNVIDIA Jetsonで実現
title: Edge Impulseを使った入門
tags:
  - データラベル付け
  - AIモデルトレーニング
  - AIモデルデプロイ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/HardHat
last_update:
  date: 05/15/2025
  author: Bill
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Edge Impulseによるハードハット検出

<iframe width={560} height={315} src="https://www.youtube.com/embed/e5pZdJhoeqM" title="YouTube動画プレイヤー" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## はじめに

工業現場や建設現場などの作業環境では、落下物、他の物体との衝突、破片、雨、電撃などから頭部を保護するために、ハードハット（安全帽）が必要であり、重要です。ハードハットは安全性を向上させますが、その重要性を個人や業界全体で過小評価することがあります。そのため、ハードハットを検出するビデオベースのモニタリングは、この安全性の問題に対する最適な解決策となり得ます。

そこで、Louis Moreau氏とMihajlo Raljic氏の功績により、ハードハットを検出する組み込み機械学習モデルをトレーニングし、**Jetson Nano**にデプロイする基本的なプロジェクトを提供します。**Jetson NX**および**Jetson AGX**もサポートされています。

<div align="center"><img width="auto" src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonedge.png" /></div>

## 入門

Edge Impulseは、組み込み機械学習を使用して次世代のインテリジェントデバイスソリューションを開発するためのプラットフォームを提供します。エッジでの機械学習により、コスト、帯域幅、または電力制約のために今日廃棄されているセンサーデータの99%を有効活用することが可能になります。ここでは、Edge Impulseを使用して組み込み機械学習モデルをトレーニングします。

### ハードウェア

**必要なハードウェア**

このプロジェクトで必要なデバイスは以下の通りです：

- NVIDIA Jetson Nano または [NVIDIA Xavier NX](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) または [NVIDIA Xavier AGX](https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html)
- PC
- USBケーブルカメラ
- HDMIディスプレイ画面

**ハードウェアのセットアップ**

PCとNVIDIA Jetson Nanoの両方を電源オンし、インターネットに接続してください。NVIDIA Jetson NanoはPCとしてセットアップすることを推奨します。

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsongsa.jpg" /></div>

### ソフトウェア

- [Edge Impulse](https://www.edgeimpulse.com)
- NVIDIA Jetson Nano用の[Ubuntuシステム](https://www.linux.org/pages/download/)

ここでは、ハードハットを検出する組み込み機械学習モデルをトレーニングします。これを実現するためのいくつかの方法があります。

### 準備

プロジェクトを開始する前に、いくつかの準備作業を行う必要があります。

- **ステップ1**. [Edge Impulseのウェブサイト](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1)を開き、アカウントを登録します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs.png" /></div>

- **ステップ2**. 「新しいプロジェクトを作成」をクリックし、プロジェクト名を入力します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Alots/Alots2.png" /></div>

ここでは「Hard hat detection」と入力します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs1.png" /></div>

- **ステップ3**. ハードハットを検出する組み込みMLモデルをトレーニングするため、ここでは「画像」オプションを選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs2.png" /></div>

- **ステップ4**. 設定を「複数のオブジェクトを分類（オブジェクト検出）」に設定します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs3.png" /></div>

これでプロジェクトを開始する準備が整いました。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs4.png" /></div>

## ハードハット検出機械学習モデルのトレーニング

### 公開データセットに基づく機械学習モデルのトレーニング

Edge Impulseはデータ収集のためのいくつかの方法を提供しています。まず、公開データをウェブサイトにアップロードし、組み込み型機械学習を開発してみます。

- **ステップ 1**. 左側の列にある「データ収集」ページを選択し、データを収集します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup.png" /></div>

- **ステップ 2**. [Flickr-Faces-HQ Dataset Github](https://github.com/NVlabs/ffhq-dataset)からデータセットを選択してダウンロードします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup1.png" /></div>

「データ収集」ページで「データをアップロード」ボタンをクリックし、ダウンロードしたデータセットをアップロードします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup2.png" /></div>

既存のデータをプロジェクトにアップロードすることも可能です。データ収集フォーマット（CBOR、JSON、CSV）として、またはWAV、JPG、PNGファイルとしてアップロードできます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs2b.png" /></div>

- **ステップ 3**. アップロードが完了すると、収集されたデータはラベル付き画像で満たされます。「インパルス設計」をクリックして次に進みます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup3.png" /></div>

- **ステップ 4**. 適切な画像処理ブロックと画像学習ブロックを選択し、インパルスを保存します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png" /></div>

- **ステップ 5**. 左側のページで「画像」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png" /></div>

「GRB」として設定し、「パラメータを保存」をクリックすると、自動的に「特徴を生成」ページに移動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png" /></div>

これで特徴を生成することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png" /></div>

- **ステップ 6**. 「ジョブ完了」が表示されたら、左側のページで「オブジェクト検出」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png" /></div>

「トレーニング開始」をクリックし、Edge Impulseが生成された特徴に基づいてモデルをトレーニングします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png" /></div>

- **ステップ 7**. 「ジョブ完了」が表示されたら、「モデルテスト」をクリックしてモデルの動作を確認します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png" /></div>

### カスタマイズされたPCカメラデータセットに基づく機械学習モデルのトレーニング

Edge Impulseはデータ収集のためのいくつかの方法を提供しています。ここでは、PCカメラを使用して独自の画像をキャプチャし、それをウェブサイトにアップロードします。

- **ステップ 1**. 「ダッシュボード」ページに留まり、「データを収集しましょう」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc.png" /></div>

データを収集するための複数のオプションがあります。ここではコンピュータを使用して進めます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc1.png" /></div>

- **ステップ 2**. しばらくすると、ページがコンピュータに接続されたことを表示します。「画像を収集しますか？」をクリックし、「カメラへのアクセスを許可」を選択します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc2.png" /></div>

- **ステップ 3**. 「キャプチャ」をクリックして、自分自身または他の人の写真を撮ります。画像データはセクション内で「ハードハット」と「頭部」としてラベル付けする必要があります。画像を迅速にラベル付けするために、1つのカテゴリのデータ収集を完了してから次に進むことを強く推奨します。つまり、「ハードハット」の写真を撮り終えた後に「頭部」の写真を撮ることを推奨します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc3a.png" /></div>

キャプチャされた写真は自動的に「データ収集」に保存されます。トレーニングモデルの性能を向上させるために、可能な限り多くの写真を収集し、異なるカテゴリで同じ量のデータを収集することを強く推奨します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc4.png" /></div>

- **ステップ 4**. 「ラベル付けキュー」をクリックして、画像上で頭部を四角で囲むことでデータをラベル付けします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc5.png" /></div>

マウスを使用してオブジェクトの周りにボックスをドラッグしてラベルを追加します。その後、「ラベルを保存」をクリックして次の項目に進みます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc6.png" /></div>

ラベルを「頭部」と「ハードハット」として設定し、ダイアログを記入します。四角が人々の頭部の領域を正確に囲むようにしてください。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc7.png" /></div>

- **ステップ 5**. データがラベル付けされたら、「ラベルを保存」をクリックして「インパルス設計」に進みます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc8a.png" /></div>

- **ステップ 6**. 適切な画像処理ブロックと画像学習ブロックを選択し、インパルスを保存します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png" /></div>

- **ステップ 7**. 左側のページで「画像」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png" /></div>

「GRB」として設定し、「Save Parameters」をクリックすると、ページは自動的に「Generate features」サイトに移動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png" /></div>

これで特徴量を生成することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png" /></div>

- **ステップ 8**. 「Job completed」が表示されたら、ページ左側の「Object detection」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png" /></div>

「start training」をクリックして、Edge Impulseが生成された特徴量に基づいてモデルをトレーニングします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png" /></div>

- **ステップ 9**. 「job done」が表示されたら、「Model testing」をクリックしてモデルの動作を確認します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png" /></div>

### カスタマイズされたNAVDIA Jetson カメラデータセットに基づくMLモデルのトレーニング

Edge Impulseはデータ収集のためのいくつかの方法を提供しています。ここでは、独自の画像をカスタマイズし、Nvidia Jetson Nanoに接続されたカメラを使用して撮影した写真をウェブサイトにアップロードします。

- **ステップ 1**. ハードウェアに応じて、[NVIDIA Jetson Nano Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#write) または [NVIDIA Jetson Nano 2GB Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit#write) をセットアップし、外部モニターとキーボードを接続します。Jetson Nanoにスクリーンディスプレイを接続します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsonnano.png" /></div>

- **ステップ 2**. Jetson Nanoがインターネットに接続されていることを確認し、Edge Impulseでデバイスをセットアップします。

以下のコマンドでネットワークを確認できます：

```cpp
ping -c 3 www.google.com
```

ネットワークが正常に動作している場合、結果は以下のようになります：

```cpp
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
```

以下のコマンドでセットアップを開始します：

```cpp
edge-impulse-linux
```

その後、ウェブサイトがEdge Impulseアカウントを要求します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnanoa.png" /></div>

以下の内容が表示されれば、接続が完了したことを意味します。Edge Impulseに保存したすべてのプロジェクトが選択可能です。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano1a.png" /></div>

写真を撮影するため、ウェブサイトでUSBカメラを選択する必要があります。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano2a.png" /></div>

ウェブサイトに接続するデバイスの名前を指定します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano3a.png" /></div>

デバイス Jetson Nanoがプロジェクトに接続されていることが明確に確認できます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano4a.png" /></div>

- **ステップ 3**. Edge Impulseのページに戻り、「Devices」列を選択します。接続されたJetson Nanoは以下のように表示されます：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano5.png" /></div>

- **ステップ 4**. Edge Impulseに接続したデバイスを選択し、「Data acquisition」ページに移動します。「Capture」をクリックして、自分自身や他の人の写真を撮影します。画像データは「Hard Hat」と「Head」としてラベル付けする必要があります。画像を迅速にラベル付けするために、1つのカテゴリのデータ収集を完了してから次に進むことを強く推奨します。例えば、「Hard Hat」の写真を撮影し終えた後に「Head」の写真を撮影することを推奨します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc4.png" /></div>

撮影した写真は自動的に「Data acquisition」に保存されます。トレーニングモデルの性能を向上させるために、可能な限り多くの写真を収集し、異なるカテゴリで同じ量のデータを収集することを強く推奨します。

- **ステップ 5**. データ収集が完了したら、「Impulse design」に移動します。

- **ステップ 6**. 適切な画像処理ブロックと画像学習ブロックを選択し、インパルスを保存します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png" /></div>

- **ステップ 7**. ページ左側の「image」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png" /></div>

「GRB」として設定し、「Save Parameters」をクリックすると、ページは自動的に「Generate features」サイトに移動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png" /></div>

これで特徴量を生成することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png" /></div>

- **ステップ 8**. 「Job completed」が表示されたら、ページ左側の「Object detection」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png" /></div>

「start training」をクリックして、Edge Impulseが生成された特徴量に基づいてモデルをトレーニングします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png" /></div>

- **ステップ 9**. 「job done」が表示されたら、「Model testing」をクリックしてモデルの動作を確認します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png" /></div>

上記で提供した方法を組み合わせて使用し、各モデルの性能を確認し、どのモデルが優れているかを評価することを推奨します。

## Jetson NanoへのMLモデルのデプロイ

ここでは、トレーニング済みのMLモデルをJetson Nanoにデプロイし、コードを適用して動作させます。

### Edge Impulse Linux CLIを使用したMLモデルのデプロイ

- **ステップ 1**. ハードウェアに応じて、外部モニターとキーボードを接続するために[NVIDIA Jetson Nano Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#write)または[NVIDIA Jetson Nano 2GB Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit#write)をセットアップします。Jetson Nanoにスクリーンディスプレイを接続してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsonnano.png" /></div>

- **ステップ 2**. Jetson Nanoがインターネットに接続されていることを確認し、Edge Impulseでデバイスをセットアップします。

!!!注意 すでに「カスタマイズされたNAVDIA Jetson カメラデータセットに基づくMLモデルトレーニング」のセクションでJetson NanoをEdge Impulseに接続している場合、このステップはスキップできます。

以下のコマンドでネットワークを確認できます：

```cpp
ping -c 3 www.google.com
```

ネットワークが正常に動作している場合、結果は以下のようになります：

```cpp
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
```

以下のコマンドでセットアップを開始します：

```cpp
edge-impulse-linux
```

ウェブサイトがEdge Impulseアカウントを要求します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnanoa.png" /></div>

以下のような内容が表示されれば、接続が完了したことを意味します。Edge Impulseに保存したすべてのプロジェクトが選択可能です。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano1a.png" /></div>

写真をキャプチャするため、ウェブサイトでUSBカメラを選択する必要があります。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano2a.png" /></div>

ウェブサイトに接続したいデバイスの名前を付けます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano3a.png" /></div>

デバイスJetson Nanoがプロジェクトに接続されたことが明確に確認できます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano4a.png" /></div>

- **ステップ 3**. 以下のコードを使用してMLモデルをJetson Nanoにダウンロードします。

```cpp
edge-impulse-linux-runner
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy.png" /></div>

以下のように成功した接続が表示され、モデルが自動的にアクティブ化されます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy1.png" /></div>

- **ステップ 4**. 表示されたアドレスをコピーし、ブラウザで開きます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy2.png" /></div>

検出結果がブラウザに表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy3a.png" /></div>

データの結果は以下のように表示されます：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy4.png" /></div>

### Linux Python SDKを使用したMLモデルのデプロイ

このプロジェクトでは、画面に「No entry」や「Welcome」を表示してヘルメットの検出を行うモデルを適用します。Edge Impulseは、Linuxマシン上でPythonを使用してMLモデルの実行やセンサーデータの収集を可能にするライブラリを提供しています。このSDKはオープンソースであり、[GitHub](https://github.com/edgeimpulse/linux-sdk-python)でホストされています。また、すでにセットアップ済みの[ミラーイメージ](https://github.com/Zachay-NAU/Hard-Hat-Detectation)を試すこともできます。

- **ステップ 1**. Linux用の[Python 3](https://www.python.org/downloads/)(>=3.7)の最新バージョンをインストールします。

- **ステップ 2**. 以下のコマンドでLinux Python SDKをインストールします：

```cpp
sudo apt-get install libatlas-base-dev libportaudio2 libportaudiocpp0 portaudio19-dev
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk.png" /></div>

```cpp
pip3 install edge_impulse_linux
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk1.png" /></div>

- **ステップ 3**. 以下のコマンドで[Edge Impulse for Linux CLI](https://docs.edgeimpulse.com/docs/edge-impulse-for-linux)をインストールします：

```cpp
sudo apt install python3.7-dev
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk2.png" /></div>

```cpp
wget -q -0 - https://cdn.edgeimpulse.com/firmware/linux/jetson.sh | bash
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk3.png" /></div>

- **ステップ 4**. 以下のコマンドでMLモデルをJetson Nanoにダウンロードします：

```cpp
edge-impulse-linux-runner --download modelfile.eim
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk5.png" /></div>

初めてJetson NanoとEdge Impulseを接続する場合、ウェブサイトがEdge Impulseアカウント情報のログインを要求します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk4.png" /></div>

!!!注意 このコマンドはファイルをmodelfile.eimにダウンロードします。プロジェクトを切り替えたい場合は、'--clean'を追加することで可能です。

- **ステップ 5**. 以下のコマンドで[hardhat_detectation.py](https://files.seeedstudio.com/wiki/2.23jetsonedge/hardhat_detectation.py)を実行し、MLモデルを適用します。このコードには外部[ファイル](https://files.seeedstudio.com/wiki/2.23jetsonedge/device_patches.py)が必要になる場合があります。

```cpp
python3 hardhat_detectation.py /home/jetson-nano/modelfile.eim
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk8.png" /></div>

- **ステップ 6**. 結果は以下のように表示されるはずです：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/nvresult.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/nvresult1.png" /></div>

または、画像として、5分でPPE検出パイプライン用のMLアプリケーションをデプロイできますか？ぜひご期待ください！

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>