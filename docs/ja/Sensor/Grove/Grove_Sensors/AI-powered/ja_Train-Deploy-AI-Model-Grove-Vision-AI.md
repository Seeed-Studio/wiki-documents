---
description: Roboflow、YOLOv5、TensorFlow Liteを使用して独自のAIモデルをトレーニングおよびデプロイする方法
title: Roboflow、YOLOv5、TensorFlow Liteを使用して独自のAIモデルをトレーニングおよびデプロイする方法
keywords:
- Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Train-Deploy-AI-Model-Grove-Vision-AI
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Grove - Vision AIに独自のAIモデルをトレーニングしてデプロイする

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングをサポートするだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66の筐体、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なAPPサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1の気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新のSenseCAP S210xを試してみてください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>SenseCAP 産業用センサー</strong></font></td></tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> データロガー</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空気温度 &amp; 湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空気温度 &amp; 湿度 &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壌水分 &amp; 温度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壌水分 &amp; 温度 &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® コントローラー</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8-in-1 気象ステーション</strong></a></td>
    </tr>
  </tbody></table>

## 概要

このウィキでは、特定のアプリケーション向けに独自のAIモデルをトレーニングし、それをGrove - Vision AI Moduleに簡単にデプロイする方法を説明します。それでは始めましょう！

## ハードウェアの紹介

このウィキ全体を通じて、主にGrove - Vision AI Moduleを使用します。まずは、このハードウェアについて理解を深めましょう。

### Grove - Vision AI モジュール

[Grove Vision AI Module](https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html)は、親指サイズのAIカメラで、カスタマイズされたセンサーが搭載されており、人検出やその他のカスタマイズモデルのための機械学習アルゴリズムがすでにインストールされています。数分で簡単にデプロイおよび表示でき、超低消費電力モードで動作します。また、2つの信号伝送方法と複数のオンボードモジュールを提供しており、AI対応カメラの入門に最適です。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" /></div>

## ソフトウェアの紹介

このウィキでは、以下のソフトウェア技術を使用します。

- Roboflow - アノテーション用
- YOLOv5 - トレーニング用
- TensorFlow Lite - 推論用

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/57.png" /></div>

### Roboflowとは？

[Roboflow](https://roboflow.com)は、オンラインベースのアノテーションツールです。このツールを使用すると、すべての画像に簡単にアノテーションを追加し、さらにこれらの画像に処理を加え、ラベル付きデータセットをYOLOv5 PyTorchやPascal VOCなどのさまざまな形式でエクスポートできます。また、Roboflowにはユーザーが利用できる公開データセットも用意されています。

### YOLOv5とは？

YOLOは「You Only Look Once（1回見るだけ）」の略です。これは、リアルタイムで画像内のさまざまなオブジェクトを検出および認識するアルゴリズムです。Ultralyticsの[YOLOv5](https://ultralytics.com/yolov5)は、PyTorchフレームワークに基づいたYOLOのバージョンです。

### TensorFlow Liteとは？

[TensorFlow Lite](https://www.tensorflow.org/lite)は、オープンソースで製品対応のクロスプラットフォーム深層学習フレームワークであり、TensorFlowで事前トレーニングされたモデルを速度やストレージに最適化できる特別な形式に変換します。この特別な形式のモデルは、AndroidやiOSを使用するモバイルや、Raspberry PiやマイクロコントローラーなどのLinuxベースの組み込みデバイスでエッジ推論を行うためにデプロイできます。

## ウィキの構成

このウィキは、以下の3つの主要セクションに分かれています。

1. [公開データセットを使用して独自のAIモデルをトレーニングする](#jump1)
2. [独自のデータセットを使用して独自のAIモデルをトレーニングする](#jump2)
3. [トレーニング済みAIモデルをGrove - Vision AI Moduleにデプロイする](#jump3)

最初のセクションでは、最小限の手順で独自のAIモデルを構築する最速の方法を説明します。2番目のセクションでは、独自のAIモデルを構築するために時間と労力が必要ですが、その知識は確実に価値があります。3番目のセクションでは、AIモデルのデプロイ方法を説明しますが、これは最初のセクションまたは2番目のセクションの後に行うことができます。

このウィキを進めるには、以下の2つの方法があります：

1. [セクション1](#jump1)を進めてから[セクション3](#jump3)を進める - 簡単に進められる方法
2. [セクション2](#jump2)を進めてから[セクション3](#jump3)を進める - 時間がかかる方法

ただし、最初は1つ目の方法を進め、その後2つ目の方法に進むことをお勧めします。

## <span id="jump1">1. 公開データセットを使用して独自のAIモデルをトレーニングする</span>

オブジェクト検出プロジェクトの最初のステップは、トレーニング用のデータを取得することです。公開されているデータセットをダウンロードするか、独自のデータセットを作成することができます。

しかし、オブジェクト検出を始める最も速く簡単な方法は何でしょうか？それは...公開データセットを使用することです。これにより、自分でデータを収集して注釈を付ける時間を大幅に節約できます。これらの公開データセットはすでに注釈が付けられているため、AIビジョンアプリケーションに集中する時間を増やすことができます。

### ハードウェアの準備

- Grove - Vision AI Module
- USB Type-C ケーブル
- インターネット接続が可能な Windows/ Linux/ Mac

### ソフトウェアの準備

- 追加のソフトウェアを準備する必要はありません

### 公開されている注釈付きデータセットを使用する

[COCOデータセット](https://cocodataset.org)、[Pascal VOCデータセット](http://host.robots.ox.ac.uk/pascal/VOC)など、公開されているデータセットをいくつかダウンロードできます。[Roboflow Universe](https://universe.roboflow.com)は、幅広いデータセットを提供する推奨プラットフォームであり、[90,000以上のデータセットと66+百万枚の画像](https://blog.roboflow.com/computer-vision-datasets-and-apis)がコンピュータビジョンモデルの構築に利用可能です。また、Googleで**オープンソースデータセット**を検索し、利用可能なさまざまなデータセットから選ぶこともできます。

- **ステップ1.** [このURL](https://universe.roboflow.com/lakshantha-dissanayake/apple-detection-5z37o/dataset/1)にアクセスして、Roboflow Universeで公開されているApple Detectionデータセットにアクセスします。

- **ステップ2.** **Create Account**をクリックしてRoboflowアカウントを作成します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/53.png" /></div>

- **ステップ3.** **Download**をクリックし、**YOLO v5 PyTorch**を**Format**として選択し、**show download code**をクリックして**Continue**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/51.png" /></div>

これにより、後でGoogle Colabトレーニング内で使用するコードスニペットが生成されます。このウィンドウをバックグラウンドで開いたままにしておいてください。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/52.png" /></div>

### Google ColabでYOLOv5を使用してトレーニングする

公開データセットを選択した後、データセットをトレーニングする必要があります。ここでは、Google Colaboratory環境を使用してクラウド上でトレーニングを実行します。さらに、Roboflow APIをColab内で使用してデータセットを簡単にダウンロードします。

[こちらをクリック](https://colab.research.google.com/gist/lakshanthad/b47a1d1a9b4fac43449948524de7d374/yolov5-training-for-sensecap-a1101.ipynb)して、すでに準備されたGoogle Colabワークスペースを開き、ワークスペースに記載されている手順を確認し、コードセルを一つずつ実行してください。

**注意:** Google Colabの**ステップ4**のコードセルでは、上記で説明したRoboflowから直接コードスニペットをコピーできます。

以下の内容を順に説明します：

- トレーニング環境のセットアップ
- データセットのダウンロード
- トレーニングの実行
- トレーニング済みモデルのダウンロード

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/18.png" /></div>

699枚の画像を含むApple Detectionデータセットの場合、16GBのGPUメモリを持つNVIDIA Tesla T4 GPUで実行されるGoogle Colabで、トレーニングプロセスを完了するのに約7分かかりました。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/43.png" /></div>

上記のColabプロジェクトに従った場合、デバイスに一度に4つのモデルをロードできることがわかります。ただし、一度にロードできるモデルは1つだけです。これはユーザーによって指定され、後でこのWikiで説明されます。

### デプロイと推論

トレーニング済みAIモデルをGrove - Vision AI Moduleにデプロイして推論を実行する方法を説明する**セクション3**に直接ジャンプしたい場合は、[こちらをクリック](#jump3)。

## <span id="jump2">2. 独自のデータセットでAIモデルをトレーニングする</span>

特定の物体検出プロジェクトを構築したい場合、公開されているデータセットに検出したい物体が含まれていないことがあります。その場合は、自分自身でデータセットを作成する必要があります。独自のデータセットを記録する際には、物体の全方向（360度）をカバーし、異なる環境、異なる照明条件、異なる天候条件で物体を配置する必要があります。データセットを記録した後、データセット内の画像にアノテーションを付ける必要もあります。これらの手順はすべて、このセクションで説明します。

データ収集にはスマートフォンのカメラを使用するなど、さまざまな方法がありますが、最も適した方法はGrove - Vision AI Moduleに内蔵されたカメラを使用することです。これは、Grove - Vision AI Moduleで推論を行う際に、色、画像品質、その他の詳細が類似しているため、全体的な検出精度が向上するからです。

### Roboflowを使用してデータセットにアノテーションを付ける

独自のデータセットを使用する場合、データセット内のすべての画像にアノテーションを付ける必要があります。アノテーションとは、検出したい各物体の周りに矩形のボックスを描き、それにラベルを割り当てることを意味します。ここでは、Roboflowを使用してこれを行う方法を説明します。

[Roboflow](https://roboflow.com)はオンラインベースのアノテーションツールです。ここでは、記録したビデオ映像を直接Roboflowにインポートし、それを一連の画像にエクスポートできます。このツールは非常に便利で、データセットを「トレーニング、検証、テスト」に分割するのを支援してくれます。また、ラベル付け後にこれらの画像にさらなる処理を追加することも可能です。さらに、ラベル付けされたデータセットを**YOLOV5 PyTorch形式**に簡単にエクスポートできるため、まさに必要な形式となります！

このWikiでは、リンゴを含む画像のデータセットを使用して、後でリンゴを検出し、カウントも行えるようにします。

- **ステップ1.** [こちら](https://app.roboflow.com/login)をクリックしてRoboflowアカウントにサインアップします。

- **ステップ2.** **Create New Project**をクリックしてプロジェクトを開始します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg" /></div>

- **ステップ3.** **Project Name**を入力し、**License (CC BY 4.0)**と**Project type (Object Detection (Bounding Box))**をデフォルトのままにします。**What will your model predict?**の列にはアノテーショングループ名を入力します。たとえば、ここでは**apples**を選択します。この名前はデータセットのすべてのクラスを強調する必要があります。最後に、**Create Public Project**をクリックします。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/6.jpg" /></div>

- **ステップ4.** Grove - Vision AI Moduleを使用してキャプチャした画像をドラッグ＆ドロップします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/7.png" /></div>

- **ステップ5.** 画像が処理されたら、**Finish Uploading**をクリックします。画像がアップロードされるまでしばらく待ちます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/4.jpg" /></div>

- **ステップ6.** 画像がアップロードされたら、**Assign Images**をクリックします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/5.jpg" /></div>

- **ステップ7.** 画像を選択し、リンゴの周りに矩形のボックスを描き、ラベルを**apple**に設定して**ENTER**を押します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/9.png" /></div>

- **ステップ8.** 残りのリンゴについても同じ操作を繰り返します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/10.png" /></div>

**注意:** 画像内に見えるすべてのリンゴにラベルを付けるようにしてください。リンゴの一部しか見えない場合でも、それにラベルを付けるようにしてください。

- **ステップ9.** データセット内のすべての画像にアノテーションを付け続けます。

Roboflowには**Label Assist**という機能があり、事前にラベルを予測してラベル付けをより迅速に行えるようにします。ただし、この機能はすべての物体タイプに対応しているわけではなく、特定のタイプの物体にのみ対応しています。この機能を有効にするには、**Label Assist**ボタンを押し、**モデルを選択**し、**クラスを選択**して、画像をナビゲートして予測されたラベルとバウンディングボックスを確認します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/YOLOV5/41.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/39.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/40.png" /></div>

上記のように、この機能は80のクラスに対してのみアノテーションを予測するのに役立ちます。画像にこれらのクラスに含まれない物体が含まれている場合、この機能を使用することはできません。

- **ステップ10.** ラベル付けが完了したら、**Add images to Dataset**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg" /></div>

- **ステップ11.** 次に、画像を「Train、Valid、Test」に分割します。デフォルトの分布割合を保持し、**Add Images**をクリックします。

<div align="center"><img width={330} src="https://files.seeedstudio.com/wiki/YOLOV5/26.png" /></div>

- **ステップ12.** **Generate New Version**をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg" /></div>

- **ステップ13.** 必要に応じて**Preprocessing**や**Augmentation**を追加できます。ここでは、**Resize**オプションを**192x192**に変更します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/11.png" /></div>

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/13.png" /></div>

ここで画像サイズを192x192に変更する理由は、トレーニング時にこのサイズを使用するためです。これによりトレーニングが高速化されます。そうしない場合、トレーニングプロセス中にすべての画像を192x192に変換する必要があり、CPUリソースを多く消費し、トレーニングプロセスが遅くなります。

- **ステップ 14.** 次に、残りのデフォルト設定を進めて **Generate** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/14.png" /></div>

- **ステップ 15.** **Export** をクリックし、**Format** を **YOLO v5 PyTorch** に選択し、**show download code** を選択して **Continue** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/54.png" /></div>

これにより、後で Google Colab のトレーニング内で使用するコードスニペットが生成されます。このウィンドウをバックグラウンドで開いたままにしておいてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/55.png" /></div>

### Google Colab 上で YOLOv5 を使用したトレーニング

データセットのアノテーションが完了したら、次にデータセットをトレーニングする必要があります。[こちらのセクション](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-Grove-Vision-AI/#train-using-yolov5-on-google-colab)に進み、Google Colab 上で YOLOv5 を使用して AI モデルをトレーニングする方法を確認してください。

## <span id="jump3">3. トレーニング済みモデルをデプロイして推論を実行する</span>

### Grove - Vision AI モジュール

トレーニングの最後に取得した **model-1.uf2** を Grove - Vision AI モジュールに移動します。ここでは、Grove - Vision AI モジュールを [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) に接続して推論結果を確認します。

**注意:** Arduino を初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino) を参照することを強くお勧めします。また、[このウィキ](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/#getting-started) に従って、Arduino IDE で Wio Terminal をセットアップしてください。

- **ステップ 1.** 最新バージョンの [Google Chrome](https://www.google.com/chrome) または [Microsoft Edge browser](https://www.microsoft.com/en-us/edge?r=1) をインストールして開きます。

- **ステップ 2.** USB Type-C ケーブルを使用して Grove - Vision AI モジュールを PC に接続します。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/47.png" /></div>

- **ステップ 3.** Grove - Vision AI モジュールのブートボタンをダブルクリックして、マスストレージモードに入ります。

<div align="center"><img width={220} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/48.png" /></div>

これにより、ファイルエクスプローラーに **GROVEAI** という新しいストレージドライブが表示されます。

<div align="center"><img width={280} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/19.jpg" /></div>

- **ステップ 4.** **model-1.uf2** ファイルを **GROVEAI** ドライブにドラッグ＆ドロップします。

uf2 ファイルのコピーが完了すると、ドライブが消えます。これは、uf2 がモジュールに正常にアップロードされたことを意味します。

**注意:** 4つのモデルファイルが準備できている場合は、各モデルを1つずつドラッグ＆ドロップできます。最初のモデルをドロップし、コピーが完了するのを待ち、再度ブートモードに入り、次のモデルをドロップする、という手順を繰り返します。

- **ステップ 5.** Grove - Vision AI モジュールを USB を介して PC に接続したまま、Grove I2C ポートを介して Wio Terminal に接続します。

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/49.png" /></div>

- **ステップ 6.** [Seeed_Arduino_GroveAI ライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI) を Arduino IDE にインストールし、**object_detection.ino** の例を開きます。

- **ステップ 7.** Grove - Vision AI モジュールに1つのモデル（インデックス1）だけをロードした場合、そのモデルがロードされます。ただし、複数のモデルをロードした場合は、[使用するモデルを指定](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/examples/object_detection/object_detection.ino#L12) できます。**MODEL_EXT_INDEX_[value]** を変更し、value に 1, 2, 3, 4 のいずれかを指定します。

```cpp
// 例:
if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_2))
```

上記のコードは、インデックス2のモデルをロードします。

- **ステップ 8.** 私たちはリンゴを検出しているため、コードを [こちら](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/examples/object_detection/object_detection.ino#L55) で少し変更します。

```cpp
Serial.print("Number of apples: ");
```

- **ステップ 9.** Wio Terminal を PC に接続し、このコードを Wio Terminal にアップロードして、Arduino IDE のシリアルモニターを 115200 のボーレートで開きます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/42.png" /></div>

上記のように、シリアルモニターで検出情報を確認できます。

- **ステップ 10.** [こちらをクリック](https://files.seeedstudio.com/grove_ai_vision/index.html) して、検出結果を含むカメラストリームのプレビューウィンドウを開きます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/31.png" /></div>

- **ステップ 11.** **Connect** ボタンをクリックします。すると、ブラウザにポップアップが表示されます。**Grove AI - Paired** を選択して **Connect** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/32.png" /></div>

- **ステップ 12.** プレビューウィンドウを使用してリアルタイムの推論結果を確認します！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/33.jpg" /></div>

上記のように、リンゴが検出され、それぞれの周りにバウンディングボックスが表示されています。ここで「0」は同じクラスの各検出を表します。複数のクラスがある場合、それらは 0, 1, 2, 3, 4 などと命名されます。また、各検出されたリンゴの信頼スコア（上記のデモでは 0.8 と 0.84）が表示されています！

## ボーナスコンテンツ

さらに冒険したい場合は、このWikiの残りの部分を続けてみてください！

### 自分のPCでAIモデルをトレーニングできますか？

自分のPCを使用してオブジェクト検出モデルをトレーニングすることも可能です。ただし、トレーニングのパフォーマンスはハードウェアに依存します。また、トレーニングにはLinux OSを搭載したPCが必要です。このWikiではUbuntu 20.04 PCを使用しています。

- **ステップ1.** **yolov5-swiftリポジトリ**をクローンし、**Python>=3.7.0**環境で**requirements.txt**をインストールします。

```sh
git clone https://github.com/Seeed-Studio/yolov5-swift 
cd yolov5-swift
pip install -r requirements.txt
```

- **ステップ2.** このWikiの以前の手順に従った場合、Roboflowでアノテーションを行った後にデータセットをエクスポートしたことを覚えているかもしれません。また、Roboflow Universeでデータセットをダウンロードしました。どちらの方法でも、以下のようなウィンドウが表示され、データセットのダウンロード形式を選択するよう求められました。この時、**download zip to computer**を選択し、**Format**で**YOLO v5 PyTorch**を選択して**Continue**をクリックしてください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/16.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/17.png" /></div>

その後、**.zipファイル**がコンピュータにダウンロードされます。

- **ステップ3.** ダウンロードした.zipファイルを**yolov5-swift**ディレクトリにコピーして解凍します。

```sh
# 例
cp ~/Downloads/Apples.v1i.yolov5pytorch.zip ~/yolov5-swift
unzip Apples.v1i.yolov5pytorch.zip
```

- **ステップ4.** **data.yaml**ファイルを開き、**train**および**val**ディレクトリを以下のように編集します。

```sh
train: train/images
val: valid/images
```

- **ステップ5.** トレーニングに適した事前学習済みモデルをダウンロードします。

```sh
sudo apt install wget
wget https://github.com/Seeed-Studio/yolov5-swift/releases/download/v0.1.0-alpha/yolov5n6-xiao.pt
```

- **ステップ6.** 以下のコマンドを実行してトレーニングを開始します。

ここでは、いくつかの引数を指定できます：

- **img:** 入力画像サイズを定義
- **batch:** バッチサイズを指定
- **epochs:** トレーニングエポック数を定義
- **data:** yamlファイルのパスを設定
- **cfg:** モデル構成を指定
- **weights:** カスタムウェイトのパスを指定
- **name:** 結果の名前
- **nosave:** 最終チェックポイントのみ保存
- **cache:** 高速トレーニングのために画像をキャッシュ

```sh
python3 train.py --img 192 --batch 64 --epochs 100 --data data.yaml --cfg yolov5n6-xiao.yaml --weights yolov5n6-xiao.pt --name yolov5n6_results --cache
```

987枚の画像を含むリンゴ検出データセットでは、NVIDIA GeForce GTX 1660 Super GPU（6GB GPUメモリ）を搭載したローカルPCでトレーニングプロセスを完了するのに約30分かかりました。
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/44.png" /></div>

上記のColabプロジェクトに従った場合、デバイスに一度に4つのモデルをロードできることを知っているでしょう。ただし、1回にロードできるモデルは1つだけです。これはユーザーが指定でき、後ほどこのWikiで説明されます。

- **ステップ7.** `runs/train/exp/weights`に移動すると、**best.pt**という名前のファイルが表示されます。これがトレーニングから生成されたモデルです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/YOLOV5/33.jpg" /></div>

- **ステップ8.** トレーニング済みモデルをTensorFlow Liteにエクスポートします。

```sh
python3 export.py --data {dataset.location}/data.yaml --weights runs/train/yolov5n6_results/weights/best.pt --imgsz 192 --int8 --include tflite  
```

- **ステップ9.** TensorFlow LiteをUF2ファイルに変換します。

UF2はMicrosoftによって開発されたファイル形式です。Seeedはこの形式を使用して.tfliteを.uf2に変換し、Seeedが発売したAIoTデバイスに.tfliteファイルを保存できるようにしています。現在、Seeedのデバイスは最大4つのモデルをサポートしており、各モデル（.tflite）は1M未満です。

-tを使用して、対応するインデックスに配置するモデルを指定できます。

例：

- `-t 1`: インデックス1
- `-t 2`: インデックス2

```sh
# モデルをインデックス1に配置
python3 uf2conv.py -f GROVEAI -t 1 -c runs//train/yolov5n6_results//weights/best-int8.tflite -o model-1.uf2
```

一度にデバイスに4つのモデルをロードできますが、1回にロードできるモデルは1つだけです。これはユーザーが指定でき、後ほどこのWikiで説明されます。

- **ステップ10.** **model-1.uf2**という名前のファイルが生成されます。これが、推論を実行するためにGrove - Vision AIモジュールにロードするファイルです！

## リソース

- **[ウェブページ]** [YOLOv5 ドキュメント](https://docs.ultralytics.com)

- **[ウェブページ]** [Ultralytics HUB](https://ultralytics.com/hub)

- **[ウェブページ]** [Roboflow ドキュメント](https://docs.roboflow.com)

- **[ウェブページ]** [TensorFlow Lite ドキュメント](https://www.tensorflow.org/lite/guide)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>