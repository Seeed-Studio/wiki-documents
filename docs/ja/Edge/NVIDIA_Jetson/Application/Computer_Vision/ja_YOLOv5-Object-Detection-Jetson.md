---
description: Few-shot Object Detection - データラベル付け、AIモデルのトレーニング、AIモデルのデプロイをYolov5とRoboflowを使用してNVIDIA Jetson上で実行
title: Yolov5とRoboflowを使った入門
tags:
  - データラベル付け
  - AIモデルトレーニング
  - AIモデルデプロイ
  - Roboflow
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/YOLOv5-Object-Detection-Jetson
last_update:
  date: 05/15/2025
  author: w0x7ce
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# YOLOv5とRoboflowを使用したFew-Shotオブジェクト検出

## はじめに

[YOLO](https://docs.ultralytics.com)は、利用可能な最も有名なオブジェクト検出アルゴリズムの1つです。このアルゴリズムは、**少ないサンプルでのトレーニング**が可能で、**トレーニング時間が短く**、**高い精度**を提供します。本Wikiでは、これらの特徴を1つずつ実演しながら、**データを収集し、ラベル付けし、トレーニングし、最終的にトレーニング済みデータを使用してオブジェクトを検出する**という機械学習パイプライン全体をステップバイステップで説明します。また、カスタムデータセットと公開データセットを使用する場合の違いも比較します。

## YOLOv5とは？

YOLOは「You Only Look Once（1回見るだけ）」の略です。これは、リアルタイムで画像内のさまざまなオブジェクトを検出して認識するアルゴリズムです。Ultralyticsの[YOLOv5](https://ultralytics.com/yolov5)はYOLOの最新バージョンであり、現在はPyTorchフレームワークに基づいています。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/YOLOv5_banner.jpg" /></div>

## Few-Shotオブジェクト検出とは？

従来、機械学習モデルをトレーニングする場合、Pascal VOC 2012データセットのような約17112枚の画像を含む公開データセットを使用します。しかし、YOLOv5を使用した転移学習により、非常に少ないトレーニングサンプルでFew-Shotオブジェクト検出を実現できます。本Wikiではこれを実演します。

## 対応ハードウェア

YOLOv5は以下のハードウェアでサポートされています：

- NVIDIA公式開発キット：

  - NVIDIA® Jetson Nano Developer Kit
  - NVIDIA® Jetson Xavier NX Developer Kit
  - NVIDIA® Jetson AGX Xavier Developer Kit
  - NVIDIA® Jetson TX2 Developer Kit

- NVIDIA公式SoM（System on Module）：

  - NVIDIA® Jetson Nano module
  - NVIDIA® Jetson Xavier NX module
  - NVIDIA® Jetson TX2 NX module
  - NVIDIA® Jetson TX2 module
  - NVIDIA® Jetson AGX Xavier module

- Seeed製キャリアボード：

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 Kit
  - A203キャリアボード
  - A203（バージョン2）キャリアボード
  - A205キャリアボード
  - A206キャリアボード

## 前提条件

- 上記のいずれかのJetsonデバイスで、最新のJetPack v4.6.1がインストールされ、すべてのSDKコンポーネントがインストールされていること（インストールの参考として[このWiki](https://wiki.seeedstudio.com/ja/reComputer_J1020_A206_Flash_JetPack/)を参照）

- ホストPC

  - ローカルトレーニングにはLinux PC（推奨：Ubuntu）が必要
  - クラウドトレーニングは任意のOSを搭載したPCで実行可能

## 始めましょう

Jetsonプラットフォームのようなエッジデバイスで最初のオブジェクト検出プロジェクトを実行するには、以下の4つの主要なステップを実行します！

1. データセットを収集するか、公開されているデータセットを使用する

    - データセットを手動で収集
    - 公開されているデータセットを使用

2. Roboflowを使用してデータセットにアノテーションを付ける

3. ローカルPCまたはクラウドでトレーニングを行う

    - ローカルPC（Linux）でトレーニング
    - Google Colabでトレーニング

4. Jetsonデバイスで推論を行う

## データセットを収集するか、公開されているデータセットを使用する

オブジェクト検出プロジェクトの最初のステップは、トレーニング用のデータを取得することです。公開されているデータセットをダウンロードするか、自分でデータセットを作成することができます。通常、公開データセットは教育や研究目的で使用されます。しかし、公開データセットに自分が検出したいオブジェクトが含まれていない場合、独自のデータセットを作成する必要があるかもしれません。

### データセットを手動で収集する

まず、認識したいオブジェクトのビデオ映像を録画することをお勧めします。この際、オブジェクトの全角度（360度）をカバーし、異なる環境、異なる照明条件、異なる天候条件でオブジェクトを配置するようにしてください。
録画したビデオの合計時間は9分で、そのうち4.5分は花、残りの4.5分は葉の映像です。録画内容は以下のように分けられます：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/pink-flowers-2.gif" /></div>

1. 朝の通常の天候
2. 朝の風の強い天候
3. 朝の雨の天候
4. 昼の通常の天候
5. 昼の風の強い天候
6. 昼の雨の天候
7. 夕方の通常の天候
8. 夕方の風の強い天候
9. 夕方の雨の天候

**注意:** 後で、このビデオ映像を一連の画像に変換し、トレーニング用のデータセットを作成します。

### 公開されているデータセットを使用する

[COCOデータセット](https://cocodataset.org)、[Pascal VOCデータセット](http://host.robots.ox.ac.uk/pascal/VOC)など、公開されている多くのデータセットをダウンロードできます。[Roboflow Universe](https://universe.roboflow.com)は、幅広いデータセットを提供する推奨プラットフォームであり、[90,000以上のデータセットと6,600万以上の画像](https://blog.roboflow.com/computer-vision-datasets-and-apis)がコンピュータビジョンモデルの構築に利用可能です。また、Googleで「オープンソースデータセット」を検索し、利用可能なさまざまなデータセットから選ぶこともできます。

## Roboflowを使用してデータセットをアノテーションする

次に、収集したデータセットをアノテーションします。アノテーションとは、検出したい各オブジェクトの周りに矩形のボックスを描き、それにラベルを割り当てることを意味します。ここでは、Roboflowを使用してこれを行う方法を説明します。

[Roboflow](https://roboflow.com)はオンラインベースのアノテーションツールです。ここでは、先ほど録画したビデオ映像を直接Roboflowにインポートし、それを一連の画像に変換できます。このツールは非常に便利で、データセットを「トレーニング、検証、テスト」に分割するのを助けてくれます。また、ラベル付け後にこれらの画像にさらなる処理を追加することも可能です。さらに、ラベル付けされたデータセットを**YOLOV5 PyTorch形式**に簡単にエクスポートできるため、非常に便利です！

- **ステップ1.** [こちら](https://app.roboflow.com/login)をクリックしてRoboflowアカウントにサインアップします。

- **ステップ2.** **Create New Project**をクリックしてプロジェクトを開始します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg" /></div>

- **ステップ3.** **Project Name**を入力し、**License (CC BY 4.0)**と**Project type (Object Detection (Bounding Box))**をデフォルトのままにします。**What will your model predict?**の列にはアノテーショングループ名を入力します。例えば、今回の場合は**plants**を選択します。この名前はデータセットのすべてのクラスを強調する必要があります。最後に、**Create Public Project**をクリックします。

<div align="center"><img width={360} src="https://files.seeedstudio.com/wiki/YOLOV5/20.jpg" /></div>

- **ステップ4.** 録画したビデオ映像をドラッグ＆ドロップします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/4.jpg" /></div>

- **ステップ5.** フレームレートを選択して、ビデオを一連の画像に分割します。ここではデフォルトのフレームレート**1フレーム/秒**を使用し、合計542枚の画像が生成されます。スライダーを操作してフレームレートを選択したら、**Choose Frame Rate**をクリックします。このプロセスは、ビデオの長さに応じて数秒から数分かかる場合があります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/5.png" /></div>

- **ステップ6.** 画像の処理が完了したら、**Finish Uploading**をクリックします。画像がアップロードされるまでしばらく待ちます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/6.jpg" /></div>

- **ステップ7.** 画像がアップロードされたら、**Assign Images**をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/YOLOV5/7.jpg" /></div>

- **ステップ8.** 画像を選択し、花の周りに矩形のボックスを描き、ラベルを**pink flower**に設定して**ENTER**を押します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/21.jpg" /></div>

- **ステップ9.** 残りの花についても同じ操作を繰り返します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/22.jpg" /></div>

- **ステップ10.** 葉の周りに矩形のボックスを描き、ラベルを**leaf**に設定して**ENTER**を押します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/23.jpg" /></div>

- **ステップ11.** 残りの葉についても同じ操作を繰り返します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/24.jpg" /></div>

**注意:** 画像内に見えるすべてのオブジェクトにラベルを付けるようにしてください。オブジェクトの一部しか見えない場合でも、それにラベルを付けるようにしてください。

- **ステップ12.** データセット内のすべての画像をアノテーションし続けます。

Roboflowには**Label Assist**という機能があり、ラベルを事前に予測してラベリングをより迅速に行うことができます。ただし、この機能はすべてのオブジェクトタイプに対応しているわけではなく、特定のオブジェクトタイプに限定されます。この機能を有効にするには、**Label Assist**ボタンを押し、**モデルを選択**し、**クラスを選択**して、予測されたラベルとバウンディングボックスを画像で確認します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/YOLOV5/41.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/39.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/40.png" /></div>

上記のように、これは80クラスに限定されたアノテーションの予測を支援することしかできません。もしあなたの画像にこれらのクラスに該当しないオブジェクトが含まれている場合、ラベル補助機能を使用することはできません。

- **ステップ13.** ラベリングが完了したら、**Add images to Dataset** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg" /></div>

- **ステップ14.** 次に、画像を「Train、Valid、Test」に分割します。デフォルトの分布割合をそのままにして、**Add Images** をクリックします。

<div align="center"><img width={330} src="https://files.seeedstudio.com/wiki/YOLOV5/26.png" /></div>

- **ステップ15.** **Generate New Version** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg" /></div>

- **ステップ16.** 必要に応じて **Preprocessing** と **Augmentation** を追加できます。ここでは **Resize** オプションを削除し、元の画像サイズを保持します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/28.jpg" /></div>

- **ステップ17.** 残りのデフォルト設定をそのままにして、**Generate** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/29.jpg" /></div>

- **ステップ18.** **Export** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/17.jpg" /></div>

- **ステップ19.** **download zip to computer** を選択し、「Select a Format」では **YOLO v5 PyTorch** を選択して **Continue** をクリックします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/18.jpg" /></div>

- **ステップ20.** その後、**.zip ファイル**がコンピュータにダウンロードされます。この .zip ファイルは後でトレーニングに使用します。

## ローカルPCまたはクラウドでのトレーニング

データセットのアノテーションが完了したら、次はデータセットをトレーニングする必要があります。トレーニングには2つの方法を紹介します。1つはオンライン（Google Colab）を使用する方法で、もう1つはローカルPC（Linux）を使用する方法です。

Google Colabでのトレーニングでは、2つの方法を使用します。最初の方法では、Ultralytics HUBを使用してデータセットをアップロードし、Colabでトレーニングを設定し、トレーニングを監視してトレーニング済みモデルを取得します。2つ目の方法では、Roboflow APIを介してRoboflowからデータセットを取得し、Colabでトレーニングを行い、モデルをダウンロードします。

### Ultralytics HUBを使用したGoogle Colabでの利用

[Ultralytics HUB](https://hub.ultralytics.com) は、コードを1行も書かずにモデルをトレーニングできるプラットフォームです。データをUltralytics HUBにアップロードし、モデルをトレーニングして、現実世界にデプロイするだけです！迅速でシンプル、そして使いやすいので、誰でも始められます。

- **ステップ1.** [こちらのリンク](https://hub.ultralytics.com) を訪問して、無料のUltralytics HUBアカウントにサインアップします。

- **ステップ2.** 資格情報を入力し、**メールでサインアップ**するか、**Google、GitHub、Appleアカウント**で直接サインアップします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/1.png" /></div>

Ultralytics HUBにログインすると、以下のようなダッシュボードが表示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/2.png" /></div>

- **ステップ3.** 以前にRoboflowからダウンロードしたzipファイルを解凍し、含まれているすべてのファイルを新しいフォルダに入れます。

- **ステップ4.** **データセットyaml**と**ルートフォルダ**（先ほど作成したフォルダ）が同じ名前であることを確認します。例えば、yamlファイルを **pinkflowers.yaml** と名付けた場合、ルートフォルダも **pinkflowers** と名付ける必要があります。

- **ステップ5.** **pinkflowers.yaml** ファイルを開き、**train** と **val** ディレクトリを以下のように編集します。

```sh
train: train/images
val: valid/images
```

- **ステップ6.** ルートフォルダを **.zip** に圧縮し、ルートフォルダと同じ名前を付けます（この例では **pinkflowers.zip**）。

これで、Ultralytics HUBにアップロードする準備が整ったデータセットが完成しました。

- **ステップ7.** **Datasets** タブをクリックし、**Upload Dataset** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/6.jpg" /></div>

- **ステップ8.** データセットの**名前**を入力し、必要に応じて**説明**を入力し、先ほど作成した .zip ファイルを **Dataset** フィールドにドラッグ＆ドロップして、**Upload Dataset** をクリックします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOv5-2/24.png" /></div>

- **ステップ9.** データセットがアップロードされたら、そのデータセットをクリックして、データセットの詳細を確認します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/25.png" /></div>

- **ステップ10.** **Projects** タブをクリックし、**Create Project** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/5.jpg" /></div>

- **ステップ11.** プロジェクトの**名前**を入力し、必要に応じて**説明**を入力し、必要に応じて**カバー画像**を追加して、**Create Project** をクリックします。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/YOLOv5-2/26.png" /></div>

- **ステップ12.** 新しく作成したプロジェクトに入り、**Create Model** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/27.png" /></div>

- **ステップ13.** **モデル名**を入力し、事前学習済みモデルとして **YOLOv5n** を選択し、**Next** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/28.png" /></div>

**注意:** 通常、事前学習済みモデルとして **YOLOv5n6** が推奨されます。これは、Jetson プラットフォームのようなエッジデバイスで使用するのに適しているためです。しかし、Ultralytics HUBではまだサポートされていません。そのため、**YOLOv5n** を使用します。これは若干似たモデルです。

- **ステップ14.** 先ほどアップロードしたデータセットを選択し、**Next** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/29.png" /></div>

- **ステップ 15.** トレーニングプラットフォームとして **Google Colab** を選択し、**Advanced Options** ドロップダウンメニューをクリックします。ここでトレーニングの設定を変更できます。例えば、エポック数を 300 から 100 に変更し、他の設定はそのままにします。**Save** をクリックしてください。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/30.png" /></div>

**注意:** ローカルトレーニングを行う予定の場合は、**Bring your own agent** を選択することもできます。

- **ステップ 16.** **API キー**をコピーし、**Open Colab** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/31.png" /></div>

- **ステップ 17.** **MODEL_KEY** を先ほどコピーした **API キー** に置き換えます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/YOLOv5-2/16.jpg" /></div>

- **ステップ 18.** `Runtime > Run All` をクリックして、すべてのコードセルを実行し、トレーニングプロセスを開始します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/YOLOv5-2/17.jpg" /></div>

- **ステップ 19.** Ultralytics HUB に戻り、青色に変わったら **Done** をクリックします。また、Colab が **Connected** と表示されるのが確認できます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/32.png" /></div>

これで HUB 上でトレーニングの進行状況が確認できます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/33.png" /></div>

- **ステップ 20.** トレーニングが終了したら、PyTorch をクリックして、PyTorch フォーマットでトレーニング済みモデルをダウンロードします。PyTorch は、Jetson デバイスで推論を行うために必要なフォーマットです。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/37.png" /></div>

**注意:** **Formats** に表示されている他のフォーマットにエクスポートすることも可能です。

Google Colab に戻ると、以下のような詳細が確認できます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/36.png" /></div>

ここで、葉と花の精度 `mAP@.5` はそれぞれ約 90% と 99.4%、全体の精度 `mAP@.5` は約 94.7% です。

### Google Colab と Roboflow API の使用

ここでは、Google Colaboratory 環境を使用してクラウド上でトレーニングを実行します。また、Colab 内で Roboflow API を使用してデータセットを簡単にダウンロードします。

- **ステップ 1.** [こちら](https://colab.research.google.com/gist/lakshanthad/645de50b7cc5870f4070b720be770f8b/yolov5-training-for-jetson.ipynb) をクリックして、すでに準備された Google Colab ワークスペースを開き、ワークスペース内の手順を進めてください。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/82.png" /></div>

トレーニングが終了すると、以下のような出力が表示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/37.png" /></div>

ここで、葉と花の精度 `mAP@.5` はそれぞれ約 91.6% と 99.4%、全体の精度 `mAP@.5` は約 95.5% です。

- **ステップ 2.** **Files** タブの下で、`runs/train/exp/weights` に移動すると、**best.pt** というファイルが表示されます。これはトレーニングから生成されたモデルです。このファイルをダウンロードして、Jetson デバイスにコピーしてください。このモデルを後で Jetson デバイスで推論に使用します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/52.png" /></div>

### ローカル PC の使用

ここでは、Linux OS を搭載した PC を使用してトレーニングを行います。この wiki では Ubuntu 20.04 PC を使用しています。

- **ステップ 1.** **YOLOv5 リポジトリ**をクローンし、**Python>=3.7.0** 環境で **requirements.txt** をインストールします。

```sh
git clone https://github.com/ultralytics/yolov5 
cd yolov5
pip install -r requirements.txt
```

- **ステップ 2.** 以前に Roboflow からダウンロードした .zip ファイルを **yolov5** ディレクトリにコピーして解凍します。

```sh
# 例
cp ~/Downloads/pink-flowers.v1i.yolov5pytorch.zip ~/yolov5
unzip pink-flowers.v1i.yolov5pytorch.zip
```

- **ステップ 3.** **data.yaml** ファイルを開き、**train** と **val** ディレクトリを以下のように編集します。

```sh
train: train/images
val: valid/images
```

- **ステップ 4.** 以下を実行してトレーニングを開始します。

```sh
python3 train.py --data data.yaml --img-size 640 --batch-size -1 --epoch 100 --weights yolov5n6.pt
```

データセットが比較的小さい（約 500 枚の画像）ため、**転移学習** を使用することで、ゼロからトレーニングするよりも良い結果が期待されます。モデルは、事前学習済みの COCO モデルの重みで初期化され、`weights` 引数にモデル名（yolov5n6）を渡すことで設定されます。ここでは、エッジデバイスに最適な **yolov5n6** を使用しています。**画像サイズ** は **640x640** に設定されています。**バッチサイズ** は **-1** に設定されており、これにより最適なバッチサイズが自動的に決定されます。ただし、「GPU メモリが不足している」というエラーが発生した場合は、バッチサイズを **32** または **16** に設定してください。また、**エポック数** は好みに応じて変更可能です。

トレーニングが終了すると、以下のような出力が表示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/65.png" /></div>

ここで、葉と花の精度 `mAP@.5` はそれぞれ約 90.6% と 99.4%、全体の精度 `mAP@.5` は約 95% です。

- **ステップ 5.** `runs/train/exp/weights` に移動すると、**best.pt** というファイルが表示されます。これはトレーニングから生成されたモデルです。このファイルをコピーして Jetson デバイスに貼り付けてください。このモデルを後で Jetson デバイスで推論に使用します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/YOLOV5/33.jpg" /></div>

## Jetson デバイスでの推論

### TensorRT を使用する

ここでは、以前のトレーニングで生成したモデルを使用して、Jetson デバイスで画像の推論（物体検出）を行います。ここでは、[NVIDIA TensorRT](https://developer.nvidia.com/tensorrt) を使用して、Jetson プラットフォームでの推論性能を向上させます。

- **ステップ 1.** Jetson デバイスのターミナルにアクセスし、pip をインストールしてアップグレードします。

```sh
sudo apt update
sudo apt install -y python3-pip
pip3 install --upgrade pip
```

- **ステップ 2.** 以下のリポジトリをクローンします。

```sh
git clone https://github.com/ultralytics/yolov5
```

- **ステップ 3.** **requirements.txt** を開きます。

```sh
cd yolov5
vi requirements.txt
```

- **ステップ 4.** 以下の行を編集します。編集モードに入るには、まず **i** を押します。編集後、**ESC** を押してから **:wq** と入力して保存して終了します。

```sh
matplotlib==3.2.2
numpy==1.19.4
# torch>=1.7.0
# torchvision>=0.8.1
```

**注意:** 後で YOLOv5 を実行する際にエラーが発生しないように、**matplotlib** と **numpy** の固定バージョンを指定しています。また、torch と torchvision は後でインストールするため、ここでは除外しています。

- **ステップ 5.** 以下の依存関係をインストールします。

```sh
sudo apt install -y libfreetype6-dev
```

- **ステップ 6.** 必要なパッケージをインストールします。

```sh
pip3 install -r requirements.txt
```

- **ステップ 7.** torch をインストールします。

```sh
cd ~
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://nvidia.box.com/shared/static/fjtbno0vpo676a25cgvuqc1wty0fkkg6.whl -O torch-1.10.0-cp36-cp36m-linux_aarch64.whl
pip3 install torch-1.10.0-cp36-cp36m-linux_aarch64.whl
```

- **ステップ 8.** torchvision をインストールします。

```sh
sudo apt install -y libjpeg-dev zlib1g-dev
git clone --branch v0.9.0 https://github.com/pytorch/vision torchvision
cd torchvision
sudo python3 setup.py install 
```

- **ステップ 9.** 以下のリポジトリをクローンします。

```sh
cd ~
git clone https://github.com/wang-xinyu/tensorrtx
```

- **ステップ 10.** 前回のトレーニングで生成した **best.pt** ファイルを **yolov5** ディレクトリにコピーします。

- **ステップ 11.** **tensorrtx/yolov5** 内の **gen_wts.py** を **yolov5** ディレクトリにコピーします。

```sh
cp tensorrtx/yolov5/gen_wts.py yolov5
```

- **ステップ 12.** PyTorch の **.pt** ファイルから **.wts** ファイルを生成します。

```sh
cd yolov5
python3 gen_wts.py -w best.pt -o best.wts
```

- **ステップ 13.** **tensorrtx/yolov5** に移動します。

```sh
cd ~
cd tensorrtx/yolov5
```

- **ステップ 14.** **yololayer.h** を **vi テキストエディタ** で開きます。

```sh
vi yololayer.h
```

- **ステップ 15.** **CLASS_NUM** をモデルがトレーニングされたクラス数に変更します。この例では 2 に設定します。

```sh
CLASS_NUM = 2
```

- **ステップ 16.** 新しい **build** ディレクトリを作成し、その中に移動します。

```sh
mkdir build 
cd build
```

- **ステップ 17.** 先ほど生成した **best.wts** ファイルをこの **build** ディレクトリにコピーします。

```sh
cp ~/yolov5/best.wts .
```

- **ステップ 18.** コンパイルします。

```sh
cmake ..
make
```

- **ステップ 19.** モデルをシリアライズします。

```sh
sudo ./yolov5 -s [.wts] [.engine] [n/s/m/l/x/n6/s6/m6/l6/x6 or c/c6 gd gw]
#例
sudo ./yolov5 -s best.wts best.engine n6
```

ここでは、NVIDIA Jetson プラットフォームのようなエッジデバイスに推奨される **n6** を使用します。ただし、Ultralytics HUB を使用してトレーニングを設定した場合、**n6** はまだ HUB でサポートされていないため、**n** のみ使用できます。

- **ステップ 20.** モデルが検出する画像を新しいフォルダ（例: **tensorrtx/yolov5/images**）にコピーします。

- **ステップ 21.** 以下のように画像で推論を実行します。

```sh
sudo ./yolov5 -d best.engine images
```

以下は、Jetson Nano と Jetson Xavier NX での推論時間の比較です。

#### Jetson Nano

ここでは量子化が FP16 に設定されています。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/58.png" /></div>

上記の結果から、平均は約 **47ms** と見積もることができます。この値をフレーム毎秒に変換すると、1000/47 = 21.2766 = **21fps** となります。

#### Jetson Xavier NX

ここでは量子化が FP16 に設定されています。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/59.jpg" /></div>

上記の結果から、平均は約 **20ms** と見積もることができます。この値をフレーム毎秒に変換すると、1000/20 = **50fps** となります。

また、検出された物体を含む出力画像は以下のようになります。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/55.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/56.jpg" /></div>

### TensorRT と DeepStream SDK を使用する

ここでは、[NVIDIA TensorRT](https://developer.nvidia.com/tensorrt) と [NVIDIA DeepStream SDK](https://developer.nvidia.com/deepstream-sdk) を使用して、ビデオ映像で推論を行います。

- **ステップ 1.** Jetson デバイスにすべての **SDK コンポーネント** と **DeepStream SDK** が正しくインストールされていることを確認します。（インストールに関する参考情報は [この wiki](https://wiki.seeedstudio.com/ja/Tutorial-of-A20X-Carrier-Boards) を参照してください）

**注意:** すべての SDK コンポーネントと DeepStream SDK をインストールするには、NVIDIA SDK Manager を使用することを推奨します。

- **ステップ 2.** Jetson デバイスのターミナルにアクセスし、pip をインストールしてアップグレードします。

```sh
sudo apt update
sudo apt install -y python3-pip
pip3 install --upgrade pip
```

- **ステップ 3.** 以下のリポジトリをクローンします。

```sh
git clone https://github.com/ultralytics/yolov5
```

- **ステップ 4.** **requirements.txt** を開きます。

```sh
cd yolov5
vi requirements.txt
```

- **ステップ 5.** 以下の行を編集します。編集モードに入るには、まず **i** を押します。編集後、**ESC** を押してから **:wq** と入力して保存して終了します。

```sh
matplotlib==3.2.2
numpy==1.19.4
# torch>=1.7.0
# torchvision>=0.8.1
```

**注意:** 後で YOLOv5 を実行する際にエラーが発生しないように、**matplotlib** と **numpy** の固定バージョンを指定しています。また、torch と torchvision は後でインストールするため、ここでは除外しています。

- **ステップ 6.** 以下の依存関係をインストールします。

```sh
sudo apt install -y libfreetype6-dev
```

- **ステップ 7.** 必要なパッケージをインストールします。

```sh
pip3 install -r requirements.txt
```

- **ステップ 8.** torch をインストールします。

```sh
cd ~
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://nvidia.box.com/shared/static/fjtbno0vpo676a25cgvuqc1wty0fkkg6.whl -O torch-1.10.0-cp36-cp36m-linux_aarch64.whl
pip3 install torch-1.10.0-cp36-cp36m-linux_aarch64.whl
```

- **ステップ 9.** torchvision をインストールする

```sh
sudo apt install -y libjpeg-dev zlib1g-dev
git clone --branch v0.9.0 https://github.com/pytorch/vision torchvision
cd torchvision
sudo python3 setup.py install 
```

- **ステップ 10.** 以下のリポジトリをクローンする

```sh
cd ~
git clone https://github.com/marcoslucianops/DeepStream-Yolo
```

- **ステップ 11.** **DeepStream-Yolo/utils** 内の **gen_wts_yoloV5.py** を **yolov5** ディレクトリにコピーする

```sh
cp DeepStream-Yolo/utils/gen_wts_yoloV5.py yolov5
```

- **ステップ 12.** **yolov5** リポジトリ内で、YOLOv5 リリースから **pt ファイル** をダウンロードする (例: YOLOv5s 6.1)

```sh
cd yolov5
wget https://github.com/ultralytics/yolov5/releases/download/v6.1/yolov5s.pt
```

- **ステップ 13.** **cfg** と **wts** ファイルを生成する

```sh
python3 gen_wts_yoloV5.py -w yolov5s.pt
```

**注意**: 推論サイズを変更する場合 (デフォルト: 640)

```sh
-s SIZE
--size SIZE
-s HEIGHT WIDTH
--size HEIGHT WIDTH

例: 1280 の場合
-s 1280
または
-s 1280 1280
```

- **ステップ 14.** 生成された **cfg** と **wts** ファイルを **DeepStream-Yolo** フォルダにコピーする

```sh
cp yolov5s.cfg ~/DeepStream-Yolo
cp yolov5s.wts ~/DeepStream-Yolo
```

- **ステップ 15.** **DeepStream-Yolo** フォルダを開き、ライブラリをコンパイルする

```sh
cd ~/DeepStream-Yolo
# DeepStream 6.1 の場合
CUDA_VER=11.4 make -C nvdsinfer_custom_impl_Yolo
# DeepStream 6.0.1 / 6.0 の場合
CUDA_VER=10.2 make -C nvdsinfer_custom_impl_Yolo
```

- **ステップ 16.** **config_infer_primary_yoloV5.txt** ファイルをモデルに合わせて編集する

```sh
[property]
...
custom-network-config=yolov5s.cfg
model-file=yolov5s.wts
...
```

- **ステップ 17.** **deepstream_app_config** ファイルを編集する

```sh
...
[primary-gie]
...
config-file=config_infer_primary_yoloV5.txt
```

- **ステップ 18.** 推論を実行する

```sh
deepstream-app -c deepstream_app_config.txt
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/FP32-yolov5s.gif" /></div>

上記の結果は **Jetson Xavier NX** 上で **FP32** と **YOLOv5s 640x640** を使用して実行されています。**FPS** が約 **30** であることが確認できます。

#### INT8 キャリブレーション

推論に INT8 精度を使用したい場合は、以下の手順を実行してください。

- **ステップ 1.** OpenCV をインストールする

```sh
sudo apt-get install libopencv-dev
```

- **ステップ 2.** OpenCV サポート付きで **nvdsinfer_custom_impl_Yolo** ライブラリをコンパイル/再コンパイルする

```sh
cd ~/DeepStream-Yolo
# DeepStream 6.1 の場合
CUDA_VER=11.4 OPENCV=1 make -C nvdsinfer_custom_impl_Yolo
# DeepStream 6.0.1 / 6.0 の場合
CUDA_VER=10.2 OPENCV=1 make -C nvdsinfer_custom_impl_Yolo
```

- **ステップ 3.** COCO データセットの場合、[val2017](https://drive.google.com/file/d/1gbvfn7mcsGDRZ_luJwtITL-ru2kK99aK/view?usp=sharing) をダウンロードして展開し、**DeepStream-Yolo** フォルダに移動する

- **ステップ 4.** キャリブレーション画像用の新しいディレクトリを作成する

```sh
mkdir calibration
```

- **ステップ 5.** 以下を実行して、COCO データセットからランダムに 1000 枚の画像を選択し、キャリブレーションを実行する

```sh
for jpg in $(ls -1 val2017/*.jpg | sort -R | head -1000); do \
    cp ${jpg} calibration/; \
done
```

**注意:** NVIDIA は良好な精度を得るために少なくとも 500 枚の画像を推奨しています。この例では、より良い精度を得るために 1000 枚の画像を選択しています (画像が多いほど精度が向上します)。INT8_CALIB_BATCH_SIZE の値を高く設定すると、精度が向上し、キャリブレーション速度が速くなります。GPU メモリに応じて設定してください。**head -1000** を変更することで設定できます。例えば、2000 枚の場合は **head -2000**。このプロセスには時間がかかる場合があります。

- **ステップ 6.** 選択したすべての画像を含む **calibration.txt** ファイルを作成する

```sh
realpath calibration/*jpg > calibration.txt
```

- **ステップ 7.** 環境変数を設定する

```sh
export INT8_CALIB_IMG_PATH=calibration.txt
export INT8_CALIB_BATCH_SIZE=1
```

- **ステップ 8.** **config_infer_primary_yoloV5.txt** ファイルを更新する

以下を

```sh
...
model-engine-file=model_b1_gpu0_fp32.engine
#int8-calib-file=calib.table
...
network-mode=0
...
```

以下に変更する

```sh
...
model-engine-file=model_b1_gpu0_int8.engine
int8-calib-file=calib.table
...
network-mode=1
...
```

- **ステップ 9.** 推論を実行する

```sh
deepstream-app -c deepstream_app_config.txt
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/INT8-yolov5s.gif" /></div>

上記の結果は **Jetson Xavier NX** 上で **INT8** と **YOLOv5s 640x640** を使用して実行されています。**FPS** が約 **60** であることが確認できます。

#### ベンチマーク結果

以下の表は **Jetson Xavier NX** 上で異なるモデルがどのように動作するかをまとめたものです。

<table>
<thead>
  <tr>
    <th>モデル名</th>
    <th>精度</th>
    <th>推論サイズ</th>
    <th>推論時間 (ms)</th>
    <th>FPS</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="3">YOLOv5s</td>
    <td>FP32</td>
    <td>320x320</td>
    <td>16.66</td>
    <td>60</td>
  </tr>
  <tr>
    <td>FP32</td>
    <td>640x640</td>
    <td>33.33</td>
    <td>30</td>
  </tr>
  <tr>
    <td>INT8</td>
    <td>640x640</td>
    <td>16.66</td>
    <td>60</td>
  </tr>
  <tr>
    <td>YOLOv5n</td>
    <td>FP32</td>
    <td>640x640</td>
    <td>16.66</td>
    <td>60</td>
  </tr>
</tbody>
</table>

## 公開データセットとカスタムデータセットの比較

ここでは、公開データセットと独自のカスタムデータセットを使用した場合のトレーニングサンプル数とトレーニング時間の違いを比較します。

### トレーニングサンプル数

#### カスタムデータセット

この Wiki では、植物データセットをまず動画として収集し、その後 Roboflow を使用して動画を一連の画像に変換しました。この方法で 542 枚の画像を取得しましたが、これは公開データセットと比較すると非常に小規模なデータセットです。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/62.jpg" /></div>

#### 公開データセット

公開データセットには、**Pascal VOC 2012** や **Microsoft COCO 2017** データセットがあり、それぞれ約 **17112** 枚と **121408** 枚の画像が含まれています。

##### Pascal VOC 2012 データセット

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/63.png" /></div>

##### Microsoft COCO 2017 データセット

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/64.png" /></div>

### トレーニング時間

#### ローカルトレーニング

トレーニングは NVIDIA GeForce GTX 1660 Super グラフィックスカード（6GB メモリ）で実施しました。

##### カスタムデータセットを使用したローカルトレーニング

###### 540 枚の画像データセット

植物のローカルトレーニングを以前に実施した結果は以下の通りです。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/65.png" /></div>

ここでは、100 エポックを実行するのに **2.2 時間** しかかかりませんでした。これは公開データセットを使用したトレーニングよりも比較的速いです。

###### 240 枚の画像データセット

データセットを 240 枚に減らして再度トレーニングを実施した結果は以下の通りです。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/83.png" /></div>

ここでは、100 エポックを実行するのに約 **1 時間** しかかかりませんでした。これも公開データセットを使用したトレーニングよりも比較的速いです。

##### Pascal VOC 2012 データセットを使用したローカルトレーニング

同じトレーニングパラメータを維持したまま Pascal VOC 2012 データセットを使用してトレーニングを実施しました。この場合、1 エポックを実行するのに約 **50 分 (0.846 時間 * 60)** かかることが分かったため、1 エポックでトレーニングを停止しました。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/66.png" /></div>

100 エポックのトレーニング時間を計算すると、約 **50 * 100 分 = 5000 分 = 83 時間** かかることになり、カスタムデータセットのトレーニング時間よりもはるかに長いです。

##### Microsoft COCO 2017 データセットを使用したローカルトレーニング

同じトレーニングパラメータを維持したまま Microsoft COCO 2017 データセットを使用してトレーニングを実施しました。この場合、1 エポックを実行するのに約 **7.5 時間** かかると推定されたため、1 エポックが終了する前にトレーニングを停止しました。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/68.png" /></div>

100 エポックのトレーニング時間を計算すると、約 **7.5 時間 * 100 = 750 時間** かかることになり、カスタムデータセットのトレーニング時間よりもはるかに長いです。

#### Google Colab トレーニング

トレーニングは NVIDIA Tesla K80 グラフィックスカード（12GB メモリ）で実施しました。

##### カスタムデータセット

###### 540 枚の画像データセット

Google Colab を使用して植物の 540 枚の画像でトレーニングを以前に実施した結果は以下の通りです。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/37.png" /></div>

ここでは、100 エポックを実行するのに約 **1.3 時間** しかかかりませんでした。これも公開データセットを使用したトレーニングよりも比較的速いです。

###### 240 枚の画像データセット

データセットを 240 枚に減らして再度トレーニングを実施した結果は以下の通りです。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/79.png" /></div>

ここでは、100 エポックを実行するのに約 **42 分 (0.697 時間 * 60)** しかかかりませんでした。これも公開データセットを使用したトレーニングよりも比較的速いです。

##### Pascal VOC 2012 データセットを使用した Google Colab トレーニング

同じトレーニングパラメータを維持したまま Pascal VOC 2012 データセットを使用してトレーニングを実施しました。この場合、1 エポックを実行するのに約 **9 分 (0.148 時間 * 60)** かかることが分かったため、1 エポックでトレーニングを停止しました。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/67.png" /></div>

100 エポックのトレーニング時間を計算すると、約 **9 * 100 分 = 900 分 = 15 時間** かかることになり、カスタムデータセットのトレーニング時間よりもはるかに長いです。

##### Microsoft COCO 2017 データセットを使用した Google Colab トレーニング

同じトレーニングパラメータを維持したまま Microsoft COCO 2017 データセットを使用してトレーニングを実施しました。この場合、1 エポックを実行するのに約 **1.25 時間** かかると推定されたため、1 エポックが終了する前にトレーニングを停止しました。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/69.png" /></div>

100 エポックのトレーニング時間を計算すると、約 **1.25 時間 * 100 = 125 時間** かかることになり、カスタムデータセットのトレーニング時間よりもはるかに長いです。

### トレーニングサンプル数とトレーニング時間のまとめ

| データセット | トレーニングサンプル数 | ローカル PC (GTX 1660 Super) でのトレーニング時間 | Google Colab (NVIDIA Tesla K80) でのトレーニング時間 |
|---|---|---|---|
| カスタム | 542 | 2.2 時間 | 1.3 時間 |
|  | 240 | 1 時間 | 42 分 |
| Pascal VOC 2012 | 17112 | 83 時間 | 15 時間 |
| Microsoft COCO 2017 | 121408 | 750 時間 | 125 時間 |

## 事前学習済みチェックポイントの比較

以下の表から、事前学習済みチェックポイントについて詳しく学ぶことができます。ここでは、**Google Colab**でトレーニングを行い、**Jetson Nano**および**Jetson Xavier NX**で推論を実行した際のシナリオを、事前学習済みチェックポイントとして**YOLOv5n6**を使用した場合に焦点を当てています。

| モデル | サイズ (ピクセル) | mAPval 0.5:0.95 | mAPval 0.5 | スピード CPU b1 (ms) | スピード V100 b1 (ms) | スピード V100 b32 (ms) | スピード Jetson Nano FP16 (ms) | スピード Jetson Xavier NX FP16 (ms) | パラメータ (M) | FLOPs @640 (B) |
|---|---|---|---|---|---|---|---|---|---|---|
| YOLOv5n | 640 | 28.0 | 45.7 | 45 | 6.3 | 0.6 |  |  | 1.9 | 4.5 |
| YOLOv5s | 640 | 37.4 | 56.8 | 98 | 6.4 | 0.9 |  |  | 7.2 | 16.5 |
| YOLOv5m | 640 | 45.4 | 64.1 | 224 | 8.2 | 1.7 |  |  | 21.2 | 49.0 |
| YOLOv5l | 640 | 49.0 | 67.3 | 430 | 10.1 | 2.7 |  |  | 46.5 | 109.1 |
| YOLOv5x | 640 | 50.7 | 68.9 | 766 | 12.1 | 4.8 |  |  | 86.7 | 205.7 |
| **YOLOv5n6** | **640** | **71.7** | **95.5** | **153** | **8.1** | **2.1** | **47** | **20** | **3.1** | **4.6** |
| YOLOv5s6 | 1280 | 44.8 | 63.7 | 385 | 8.2 | 3.6 |  |  | 12.6 | 16.8 |
| YOLOv5m6 | 1280 | 51.3 | 69.3 | 887 | 11.1 | 6.8 |  |  | 35.7 | 50.0 |
| YOLOv5l6 | 1280 | 53.7 | 71.3 | 1784 | 15.8 | 10.5 |  |  | 76.8 | 111.4 |
| YOLOv5x6 + [TTA] | 1280 1536 | 55.0 55.8 | 72.7 72.7 | 3136 - | 26.2 - | 19.4 - |  |  | 140.7 - | 209.8 - |

> 参考: [YOLOv5 GitHub](https://github.com/ultralytics/yolov5)

## ボーナスアプリケーション

上記で説明したすべての手順は、どの種類の物体検出アプリケーションにも共通しているため、自分の物体検出アプリケーションに合わせてデータセットを変更するだけで済みます！

### 道路標識の検出

ここでは、Roboflowの[道路標識データセット](https://universe.roboflow.com/usmanchaudhry622-gmail-com/traffic-and-road-signs/1)を使用し、NVIDIA Jetsonで推論を実行しました！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/thumb-2.png" /></div>

### 山火事の煙の検出

ここでは、Roboflowの[山火事の煙データセット](https://public.roboflow.com/object-detection/wildfire-smoke)を使用し、NVIDIA Jetsonで推論を実行しました！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Roboflow/20.jpg" /></div>

## リソース

- **[ウェブページ]** [YOLOv5 ドキュメント](https://docs.ultralytics.com)

- **[ウェブページ]** [Ultralytics HUB](https://ultralytics.com/hub)

- **[ウェブページ]** [Roboflow ドキュメント](https://docs.roboflow.com)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品のご利用がスムーズに進むよう、さまざまなサポートをご提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>