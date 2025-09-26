---
description: Hard Hat Detection - データラベル、AIモデル訓練、NVIDIA Jetson上でのEdge ImpulseによるAIモデルデプロイ
title: Edge Impulseを始める
tags:
  - Data Label
  - AI model train
  - AI model deploy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/HardHat
last_update:
  date: 01/04/2023
  author: Bill
---

# Edge Impulseによるハードハット検出

<iframe width={560} height={315} src="https://www.youtube.com/embed/e5pZdJhoeqM" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## はじめに

工業現場や建設現場などの作業環境では、落下物、他の物体との衝突、破片、雨、電気ショックから頭部を保護するためにハードハットが必要不可欠です。安全性を向上させますが、時として人々は個人的にも産業的にもその重要性を過小評価することがあります。そのため、ハードハットを検出するビデオベースの監視システムは、この安全問題に対する最適化されたソリューションとなり得ます。

そこで、Louis MoreauとMihajlo Raljicのおかげで、ハードハットを検出する組み込み機械学習モデルを訓練し、**Jetson Nano**にデプロイするこの基本的なプロジェクトを提供します。**Jetson NX**と**Jetson AGX**の両方もサポートされています。

<div align="center"><img width="auto" src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonedge.png" /></div>

## 始める

Edge Impulseは、開発者が組み込み機械学習を使用して次世代のインテリジェントデバイスソリューションを作成することを可能にします。エッジでの機械学習により、コスト、帯域幅、または電力制約のために現在破棄されているセンサーデータの99%を有効活用できるようになります。ここでは、Edge Impulseを適用して組み込み機械学習モデルを訓練します。

### ハードウェア

**必要なハードウェア**

このプロジェクトで必要なデバイスは以下の通りです：

- NVIDIA Jetson Nanoまたは[NVIDIA Xavier NX](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html)または[NVIDIA Xavier AGX](https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html)
- PC
- USBケーブルカメラ
- HDMIディスプレイ画面

**ハードウェアセットアップ**

PCとNVIDIA Jetson Nanoの両方を電源に接続し、インターネットに接続する必要があります。NVIDIA Jetson NanoはPCとしてセットアップすることを推奨します。

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsongsa.jpg" /></div>

### ソフトウェア

- [Edge Impusle](https://www.edgeimpulse.com)
- NVIDIA Jetson Nano用[Ubuntu System](https://www.linux.org/pages/download/)

ここでは、ハードハットを検出する組み込み機械学習モデルを訓練します。これを実現するためのいくつかの方法があります。

### 準備

プロジェクトを開始する前に、まず行う必要がある準備作業があります。

- **ステップ 1**. [Edge Impulse website](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1)を開き、アカウントを登録します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs.png" /></div>

- **ステップ 2**. "Create new project"をクリックし、プロジェクトの名前を入力します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Alots/Alots2.png" /></div>

ここでは"Hard hat detection"と入力します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs1.png" /></div>

- **ステップ 3**. ハードハットを検出する組み込みMLモデルを訓練するため、ここでは"image"オプションを選択する必要があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs2.png" /></div>

- **ステップ 4**. 設定を"Classify multiple objects (object detection)"に設定します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs3.png" /></div>

これでプロジェクトを開始できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs4.png" /></div>

## ハードハット検出MLモデルトレーニング

### 入力パブリックデータセットに基づくMLモデルトレーニング

Edge Impulseはデータ収集のためのいくつかの方法を提供しています。まず、パブリックデータをウェブサイトにアップロードし、組み込み機械学習の開発を試みます。

- **ステップ1**. 左側の列の「Data acauistion」ページを選択し、データを収集します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup.png" /></div>

- **ステップ2**. [Flickr-Faces-HQ Dataset Github](https://github.com/NVlabs/ffhq-dataset)からデータセットを選択してダウンロードします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup1.png" /></div>

「Data acquisition」ページの「upload data」ボタンをクリックし、ダウンロードしたデータセットをアップロードします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup2.png" /></div>

Data Acquisition Format（CBOR、JSON、CSV）、WAV、JPG、またはPNGファイルとして既存のデータをプロジェクトにアップロードすることは任意です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs2b.png" /></div>

- **ステップ3**. アップロードが完了すると、収集されたデータはラベル付きの画像で満たされます。ページの左側の「Impulse desigh」をクリックして続行します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup3.png" /></div>

- **ステップ4**. 適切な処理画像ブロックと画像学習ブロックを選択し、インパルスを保存します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png" /></div>

- **ステップ5**. ページの左側の「image」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png" /></div>

「GRB」として設定し、「Save Parameters」をクリックすると、ページは自動的に「Generate features」サイトに移動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png" /></div>

その後、特徴量を生成することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png" /></div>

- **ステップ6**. 「Job completed」が表示されたら、ページの左側の「Object detection」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png" /></div>

「start training」をクリックし、Edge Impulseに生成された特徴量に基づいてモデルをトレーニングさせます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png" /></div>

- **ステップ7**. 「job done」が表示されたら、「Model testing」をクリックしてモデルの動作を確認します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png" /></div>

### カスタマイズされたPCカメラデータセットに基づくMLモデルトレーニング

Edge Impulseはデータ収集のためのいくつかの方法を提供しています。ここでは、独自の画像をカスタマイズし、PCカメラで写真を撮影してウェブサイトにアップロードします。

- **ステップ1**. 「Dashboard」ページに留まり、「LET'S COLLECT SOME DATA」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc.png" /></div>

データ収集のために選択できる複数のオプションがあります。ここではコンピューターを使用して進めます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc1.png" /></div>

- **ステップ2**. しばらくすると、ページにコンピューターに接続されたことが表示されます。「Collecting images?」をクリックし、次に「Give access to the camera」をクリックします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc2.png" /></div>

- **ステップ3**. 「Capture」をクリックして自分や他の人の写真を撮影します。画像データはセクションで「Hard Hat」と「Head」としてラベル付けする必要があります。写真を素早くラベル付けするために、次のカテゴリに移る前に1つのカテゴリのデータ取得を完了することを強く推奨します。つまり、「Hard Hat」の写真の撮影を完了してから「Head」の写真の撮影に移ることを推奨します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc3a.png" /></div>

撮影された写真は自動的に「Data acquistion」に保存されます。トレーニングモデルのより良いパフォーマンスのために、できるだけ多くの写真を収集し、異なるカテゴリで同じ量のデータを収集することを強く推奨します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc4.png" /></div>

- **ステップ4**. 「Labeling queue」をクリックして、写真上で頭部を四角で囲むことでデータにラベルを付けます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc5.png" /></div>

マウスを使用してオブジェクトの周りにボックスをドラッグしてラベルを追加します。次に、Save labelsをクリックして次のアイテムに進みます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc6.png" /></div>

ラベルを「Head」と「Hard Hat」として設定し、ダイアログを入力します。四角が人の頭部の領域を囲んでいることを確認してください。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc7.png" /></div>

- **ステップ5**. データにラベルが付けられたら、「Save labels」をクリックして「Impulse design」に移動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc8a.png" /></div>

- **ステップ6**. 適切な処理画像ブロックと画像学習ブロックを選択し、インパルスを保存します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png" /></div>

- **ステップ7**. ページの左側の「image」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png" /></div>

"GRB"として設定し、"Save Parameters"をクリックすると、ページは自動的に"Generate features"サイトに移動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png" /></div>

その後、特徴量を生成することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png" /></div>

- **ステップ 8**. "Job completed"が表示されたら、ページの左側にある"Object detection"をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png" /></div>

"start training"をクリックし、Edge Impulseに生成された特徴量に基づいてモデルを訓練させます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png" /></div>

- **ステップ 9**. "job done"が表示されたら、"Model testing"をクリックしてモデルの動作を確認します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png" /></div>

### カスタマイズされたNVIDIA Jetsonカメラデータセットに基づくMLモデル訓練

Edge Impulseはデータ収集のためのいくつかの方法を提供しています。ここでは、Nvidia Jetson Nanoに接続されたカメラを通じて写真を撮影することで、独自の画像をカスタマイズし、ウェブサイトにアップロードします。

- **ステップ 1**. ハードウェアに応じて、外部モニターとキーボードの接続のために[NVIDIA Jetson Nano Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#write)または[NVIDIA Jetson Nano 2GB Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit#write)をセットアップします。Jetson Nanoにスクリーンディスプレイを接続します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsonnano.png" /></div>

- **ステップ 2**. Jetson Nanoがインターネットに接続されていることを確認し、Edge Impulseでデバイスをセットアップします。

以下のコマンドでネットワークを確認できます：

```cpp
ping -c 3 www.google.com
```

ネットワークが正常に動作している場合、結果は次のようになります：

```cpp
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
```

以下のコマンドでセットアップが実行開始されます：

```cpp
edge-impulse-linux
```

その後、ウェブサイトはEdge Impulseアカウントを要求します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnanoa.png" /></div>

以下のように表示される内容は、接続が完了したことを意味します。Edge Impulseに保存したすべてのプロジェクトが選択可能です。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano1a.png" /></div>

写真を撮影するため、ここではウェブサイトで使用するUSB-Cameraを選択する必要があります。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano2a.png" /></div>

ウェブサイトに接続したいデバイスに名前を付けます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano3a.png" /></div>

Device Jetson Nanoがプロジェクトに接続されたことが明確に確認できます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano4a.png" /></div>

- **ステップ 3**. Edge Impulseページに戻り、「Devices」列を選択します。接続されたJetson Nanoは以下のように表示されます：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano5.png" /></div>

- **ステップ 4**. Edge Impulseに接続したデバイスを選択し、「Data acquisition」ページに移動します。「Capture」をクリックして、自分自身や他の人の写真を撮影します。画像データは、このセクションで「Hard Hat」と「Head」としてラベル付けする必要があります。写真を素早くラベル付けするために、次のカテゴリに移る前に1つのカテゴリのデータ収集を完了することを強く推奨します。つまり、「Hard Hat」の写真の撮影を完了してから「Head」の写真の撮影に移ることを推奨します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc4.png" /></div>

撮影された写真は「Data acquisition」に自動的に保存されます。トレーニングモデルのより良いパフォーマンスのために、可能な限り多くの写真を収集し、異なるカテゴリで同じ量のデータを収集することを強く推奨します。

- **ステップ 5**. データの収集が完了したら、「Impulse design」に移動します。

- **ステップ 6**. 適切な処理画像ブロックと画像学習ブロックを選択し、インパルスを保存します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png" /></div>

- **ステップ 7**. ページの左側にある「image」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png" /></div>

「GRB」として設定し、「Save Parameters」をクリックすると、ページは自動的に「Generate features」サイトに移動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png" /></div>

その後、特徴量を生成することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png" /></div>

- **ステップ 8**. 「Job completed」が表示されたら、ページの左側にある「Object detection」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png" /></div>

「start training」をクリックし、Edge Impulseに生成された特徴量に基づいてモデルをトレーニングさせます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png" /></div>

- **ステップ 9**. 「job done」が表示されたら、「Model testing」をクリックしてモデルの動作を確認します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png" /></div>

上記で提供した方法を組み合わせて使用し、各モデルのパフォーマンスを確認してどちらが優れているかを確認することを推奨します。

## Jetson NanoにMLモデルをデプロイする

次に、訓練されたMLモデルをJetson Nanoにデプロイし、コードを適用して（）を実現します。

### Edge Impulse Linux CLIを通じてMLモデルをデプロイする

- **ステップ1**. ハードウェアに応じて、外部モニターとキーボードの接続のために[NVIDIA Jetson Nano Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#write)または[NVIDIA Jetson Nano 2GB Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit#write)をセットアップします。Jetson Nanoにスクリーンディスプレイを接続します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsonnano.png" /></div>

- **ステップ2**. Jetson Nanoがインターネットに接続されていることを確認し、Edge Impulseでデバイスをセットアップします。

!!!Note 「カスタマイズされたNVIDIA Jetsonカメラデータセットに基づくMLモデル訓練」のセクションで既にJetson NanoをEdge Impulseに接続している場合、このステップはスキップできます。

以下のコマンドでネットワークを確認できます：

```cpp
ping -c 3 www.google.com
```

ネットワークが正常に動作している場合、結果は次のようになります：

```cpp
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
```

以下のコマンドでセットアップが実行開始されます：

```cpp
edge-impulse-linux
```

ウェブサイトはEdge Impulseアカウントを要求します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnanoa.png" /></div>

以下のように表示される内容は、接続が完了したことを意味します。Edge Impulseに保存したすべてのプロジェクトが選択可能です。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano1a.png" /></div>

写真を撮影するため、ここではウェブサイトで使用するUSB-Cameraを選択する必要があります。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano2a.png" /></div>

ウェブサイトに接続したいデバイスに名前を付けます

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano3a.png" /></div>

Device Jetson Nanoがプロジェクトに接続されたことが明確に確認できます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano4a.png" /></div>

- **ステップ 3**. 以下のコードに従って、MLモデルをJetson Nanoにダウンロードします。

```cpp
edge-impulse-linux-runner
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy.png" /></div>

接続が成功すると以下のように表示され、モデルが自動的にアクティベートされます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy1.png" /></div>

- **ステップ 4**. 表示されたアドレスをコピーし、ブラウザで開きます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy2.png" /></div>

検出結果がブラウザに表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy3a.png" /></div>

データの出力結果は以下のように表示されます：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy4.png" /></div>

### Linux Python SDK を使用したMLモデルのデプロイ

このプロジェクトでは、「立入禁止」と「ようこそ」を表示することで、ヘルメット検出をスクリーンに表示するモデルを適用します。Edge Impulse は、Python を使用して Linux マシン上でMLモデルの実行とセンサーデータの収集を可能にするライブラリを提供しています。この SDK はオープンソースで、[GitHub](https://github.com/edgeimpulse/linux-sdk-python) でホストされています。すでに設定済みの[ミラーイメージ](https://github.com/Zachay-NAU/Hard-Hat-Detectation)も試すことができます。

- **ステップ 1**. Linux 用の最新バージョンの [Python 3](https://www.python.org/downloads/)（>=3.7）をインストールします。

- **ステップ 2**. 以下のコマンドで Linux Python SDK をインストールします：

```cpp
sudo apt-get install libatlas-base-dev libportaudio2 libportaudiocpp0 portaudio19-dev
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk.png" /></div>

```cpp
pip3 install edge_impulse_linux
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk1.png" /></div>

- **ステップ 3**. 以下のコマンドで [Edge Impulse for Linux CLI](https://docs.edgeimpulse.com/docs/edge-impulse-for-linux) をインストールします：

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

Jetson NanoとEdge Impulseの間で初回接続の場合、ウェブサイトはログインのためにEdge Impulseアカウント情報を要求します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk4.png" /></div>

!!!Note これによりファイルがmodelfile.eimにダウンロードされます。プロジェクトを切り替えたい場合は、'--clean'を追加することで実行できます。

- **ステップ 5**. 以下のコマンドでMLモデルを適用するために[hardhat_detectation.py](https://files.seeedstudio.com/wiki/2.23jetsonedge/hardhat_detectation.py)を実行します。コードには外部[ファイル](https://files.seeedstudio.com/wiki/2.23jetsonedge/device_patches.py)が必要な場合があります。

```cpp
python3 hardhat_detectation.py /home/jetson-nano/modelfile.eim
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk8.png" /></div>

- **ステップ 6**. 結果は以下のようになるはずです：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/nvresult.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/nvresult1.png" /></div>

または画像でも可能です。PPE検出パイプライン用のMLアプリケーションを5分でデプロイしませんか？ご期待ください！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

