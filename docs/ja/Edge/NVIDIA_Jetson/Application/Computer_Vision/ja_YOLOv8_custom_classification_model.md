---
description: YOLOv8を使用してカスタム分類モデルをトレーニングおよびデプロイする
title: YOLOv8を使用してカスタム分類モデルをトレーニングおよびデプロイする
keywords: 
  - yolov8
  - カスタム分類モデル
  - 分類モデル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/train_and_deploy_a_custom_classification_model_with_yolov8
last_update:
  date: 05/15/2025
  author: Bruno
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# YOLOv8を使用してカスタム分類モデルをトレーニングおよびデプロイする

## はじめに
このガイドでは、YOLOv8を使用してカスタム分類モデルをトレーニングおよびデプロイする方法を説明します。

## 概要
仮想環境を作成し、そこにYOLOv8をインストールして、Roboflowから分類モデルをダウンロードし、それをトレーニングしてデプロイします。

### 画像分類
画像分類はコンピュータビジョンの最も基本的なタスクであり、画像を事前定義されたクラスの1つに分類することを含みます。  
出力として得られるのは、単一のクラスラベルと信頼スコアです。

画像分類は、画像内のオブジェクトの位置を知る必要がなく、画像がどのクラスに属しているかだけを知りたい場合に役立ちます。

## 必要な材料

### ハードウェアセットアップ

このチュートリアルでは、Nvidia [Jetson Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)が必要です。

<div align="center">
    <img width={600} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

### ソフトウェアセットアップ

- reComputerにインストールされたJetPack 6.0
- データセットをダウンロードするためのRoboflowアカウント

## reComputerの準備
Seeed StudioのreComputer J4012は、Jetson Orin NX 16GBです。  
これは非常に強力なマシンですが、Tegra Linuxには多くの機能が含まれており、デフォルトではグラフィカルモードで起動します。これを変更しましょう。

:::note
私はVScodeとX転送を有効にしたSSHターミナルを使用して、リモートで例を実行し、プログラミングを行います。  
X転送は、SSHのオプションで、リモートコンピュータではなく接続側で一部のグラフィカルアプリケーションを実行することができます。
:::

モニター、キーボード、マウスを使用してreComputerに接続する場合は、次のステップをスキップしてください。

### 起動モードの変更
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/1_image.png" />
</div>
これで問題ありませんが、グラフィックスは必要なく、アイドルモードでは約1.5GBのメモリを消費しています。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/2_image.png" />
</div>

これをコマンドラインで起動するように変更します。
```bash
sudo systemctl set-default multi-user
```
これで、reComputerは起動時にCLIに移行します。  
再起動するか、次のコマンドでCLIに移行することもできます。
```bash
sudo systemctl isolate multi-user
```
これで、1.5GBのメモリ使用量から700MBに削減されました。機械学習を使用する際には、メモリの1バイトも重要です。

### 電力モードの変更
デフォルトでは、reComputerはレベル2（15W）で動作しているはずです。  
トレーニングやMLモデルの推論時には、フルパワーで動作できる方が良いでしょう。

その方法を学びましょう。

ファイル /etc/nvpmodel.conf には、利用可能な電力モードが記載されています。
```bash
< POWER_MODEL ID=0 NAME=MAXN >
< POWER_MODEL ID=1 NAME=10W >
< POWER_MODEL ID=2 NAME=15W >
< POWER_MODEL ID=3 NAME=25W >
```
次に、*sudo nvpmodel -m `<power model number>`* を使用して電力モードを変更できます。そして、[このスレッド投稿](https://forums.developer.nvidia.com/t/power-mode-in-terminal/287224)によると、設定は再起動後も保持されます。
現在の電力レベルを確認するには、以下を実行します。

```bash
sudo nvpmodel -q
```
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/3_image.png" />
</div>

モデルのトレーニングのために最大電力モードを選択します。
```bash
sudo nvpmodel -m 0
```
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/4_image.png" />
</div>

再起動後、フルパワーで動作していることを確認できます。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/5_image.png" />
</div>

## モデルのトレーニング
モデルのトレーニングには YOLOv8 を使用します。以下は CUDA サポート付きでインストールするための手順です。
また、[roboflow](https://roboflow.com/) アカウントが必要です。

### モデル
私は鳥を分類するためのモデルを作成します。
これは、庭に設置するスマートバードフィーダーのプロジェクトの一環で、どの鳥が餌を食べに来ているのかを知りたいと考えています。

これは分類タスクであるため、写真内の鳥の位置を知る必要はありません。

分類データセットまたはモデルであれば、別のデータセットを使用することも可能です。

私は、自分の地域に生息し、よく見かける12種類の鳥を選び、[分類データセット](https://universe.roboflow.com/bruno-santos-omqsq/bird-classification-19z7c/dataset/1) を Roboflow で作成しました。

識別しようとしている鳥の種類は以下の通りです：
- ツバメ (Barn Swallow)
- キクイタダキ (Common Firecrest)
- サヨナキドリ (Common Nightingale)
- ズアオアトリ (Eurasian Chaffinch)
- イワツバメ (Eurasian Crag Martin)
- ゴシキヒワ (European Goldfinch)
- アオカワラヒワ (European Greenfinch)
- キバラカワラヒワ (European Serin)
- イエスズメ (House Sparrow)
- スペインスズメ (Spanish Sparrow)
- イワツバメ (Western House Martin)
- ハクセキレイ (White Wagtail)

データセットを選択し、Roboflow からダウンロードしてください。
データセットを選択したら、「Download Dataset」を選択します。アカウントが必要です。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/7_image.png" />
</div>

次に、フォーマットで *Folder Structure* を選択し、*show download code* を選択します。

<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/8_image.png" />
</div>

次に、Jupyter Notebook を使用する場合は *Jupyter* を、ターミナルで作業する場合は *Terminal* を選択します。

私は Jupyter Notebook を使用するために Jupyter を選択しました。コードをコピーしてください。
<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/9_image.png" />
</div>

## 環境の作成
仮想環境を作成し、PyTorch をインストールして YOLOv8 をインストールします。
[YOLOv8 のドキュメントのヒント](https://docs.ultralytics.com/quickstart/#install-ultralytics) に従い、まず PyTorch をインストールしてから ultralytics をインストールするのが良いです。

また、VSCode で使用するために jupyterlab パッケージをインストールします。このチュートリアルにはノートブックが添付されています。

まず、いくつかの依存関係をインストールしましょう。

**注意:** YOLOv8 を使用するため、通常は必要ないいくつかの手順を実行する必要があります。

NVIDIA のディープラーニングドキュメントに従って [Torch をインストール](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html) するだけで、CUDA サポート付きの Torch を利用できます。

PIP を使用して通常通り PyTorch をインストールすると、CUDA サポートがありません。

### 依存関係

```bash
sudo apt install libopenblas-dev cuda-toolkit libcudnn8 tensorrt python3-libnvinfer nvidia-l4t-dla-compiler
```

Python 仮想環境を作成します。
```bash
python -m venv birdClassificationModel
```

エラーが発生した場合は、python3-venv パッケージがインストールされていない可能性があります。以下をインストールして、上記のコマンドを再実行してください。

```bash
sudo apt install python3-venv
```

仮想環境を有効化します。

```bash
source birdClassificationModel/bin/activate
```

仮想環境が有効化されている場合、プロンプトの前に環境名が表示されます。

### YOLOv8

まず、[ドキュメントのヒント](https://docs.ultralytics.com/quickstart/#conda-docker-image) に従い、PyTorch をインストールします。

私は JetPack 6.0 を使用しており、これは NVIDIA Jetson Linux 36.3 と CUDA 12.2 を含んでいます。
まず PIP をアップグレードします。

```bash
pip install -U pip
```

YOLOv8 で使用するために Torch をインストールするには、[NVIDIA フォーラムの手順](https://forums.developer.nvidia.com/t/pytorch-for-jetson/72048) に従います。

これを仮想環境が有効な状態で実行し、環境内にインストールします。
Torch バージョン 2.3 を NVIDIA からダウンロードします。

```bash
wget https://nvidia.box.com/shared/static/mp164asf3sceb570wvjsrezk1p4ftj8t.whl -O torch-2.3.0-cp310-cp310-linux_aarch64.whl
sudo apt-get install python3-pip libopenblas-base libopenmpi-dev libomp-dev
pip3 install 'Cython<3'
pip install numpy torch-2.3.0-cp310-cp310-linux_aarch64.whl
```

次に、torchvision をコンパイルします。ホイールからインストールすると、CUDA サポートがありません。

ブランチバージョンはインストールした Torch のバージョンに対応しています。詳細はフォーラムページを参照してください。

仮想環境が有効な状態で実行し、すべてが環境内にインストールされるようにしてください。

```bash
sudo apt-get install libjpeg-dev zlib1g-dev libpython3-dev libopenblas-dev libavcodec-dev libavformat-dev libswscale-dev
git clone --branch v0.18.0 https://github.com/pytorch/vision torchvision
cd torchvision/
export BUILD_VERSION=0.18.0
python setup.py install
```

しばらくすると、コンパイルとインストールが完了します。
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/10_image.png" />
</div>

インストール後、CUDA が利用可能か確認します。
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/11_image.png" />
</div>

コマンドラインで以下を実行します。
```bash
python -c "import torch;print (torch.cuda.is_available())"
```

これが `True` を返すはずです。

#### YOLOv8 のインストール

CUDA サポート付きの PyTorch をインストールしたので、YOLOv8 をインストールすると、インストール済みのバージョンを使用し、新しいパッケージ（同じバージョンでも）をインストールしようとしません。

```bash
pip install ultralytics
```

roboflow と jupyterlab をインストールします。
```bash
pip install roboflow jupyterlab
```

次に、データセットをダウンロードします。
ノートブックを使用している場合は、コードを置き換えてください。

```python
rf = Roboflow(api_key="<your_api_key>")
project = rf.workspace("bruno-santos-omqsq").project("bird-classification-19z7c")
version = project.version(1)
dataset = version.download("folder")
```

モデルをダウンロードした後、3つのディレクトリ（test、train、valid）が用意され、それぞれのクラスから一定数の画像が含まれています。各クラスの画像はそれぞれ独自のディレクトリに配置されています。  
これは画像分類のためのものなので、画像にラベルを付ける必要はありません。  
YOLOv8は、後で作成する設定ファイルだけでなく、ディレクトリ構造からもクラスを認識します。  
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/12_image.png" />
</div>

### トレーニング
通常、データセットには画像とオブジェクトの座標を含むラベル（またはアノテーション）が含まれています。しかし、これは分類タスクなので、それらは必要ありません。画像がクラス名のディレクトリ内にあるだけで十分です。

#### 設定ファイルの準備
YOLOv8がクラスを認識するためには、設定ファイルが必要です。  
このファイルはデータセットディレクトリ内に配置し、拡張子は.yamlとします。ファイル名は重要ではありません。

```bash
cd <dataset_directory>
vi birdClassificationModel.yaml
```
以下のテキストをファイルに挿入します。

```bash
train: train/
valid: valid/
test: test/

# クラス数
nc: 12

# クラス名

names: ["Barn Swallow","Common Firecrest","Common Nightingale","Eurasian Chaffinch","Eurasian Crag Martin","European Goldfinch","European Greenfinch","European Serin","House Sparrow","Spanish Sparrow","Western House Martin","white Wagtail"]
```

分類には、[Ultralyticsが提供する事前学習済みモデル](https://docs.ultralytics.com/tasks/classify/)の1つを使用します。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/13_image.png" />
</div>

これらのモデルはImageNetでトレーニングされており、分類に最適化されています。  
これを使用して、私たちのデータでトレーニングを行います。

これは[転移学習](https://neptune.ai/blog/transfer-learning-guide-examples-for-images-and-text-in-keras)として知られています。

私は[YOLOv8l-cls](https://github.com/ultralytics/assets/releases/download/v8.2.0/yolov8l-cls.pt)モデルを使用します。他のモデルでも問題なく動作する可能性がありますが、リアルタイム性が必要ないため、速度と精度のトレードオフを考慮しています。

それでは、YOLOv8のCLIインターフェースを使用してモデルをトレーニングしましょう。

```bash
yolo task=classify mode=train model=yolov8l-cls.pt data=Bird-Classification-1 epochs=100
```
- task=classify : 画像を分類します
- mode=train : モデルをトレーニングします
- model=yolov8l-cls.pt : 分類用の事前学習済みモデルを使用します
- data=Bird-Classification-1 : データセットが配置されているディレクトリ
- epochs=100 : モデルをトレーニングする期間

トレーニングが開始されると、jtop（tegra-stats）を使用して統計情報を確認できます。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/14_image.png" />
</div>
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/15_image.png" />
</div>
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/16_image.png" />
</div>

数時間後、トレーニングが完了します。  
<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/17_image.png" />
</div>

次に、モデルの動作を確認してみましょう。テストを行います。

```bash
yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=Bird-Classification-1/test/**/*.jpg
```
これにより、YOLOがテストディレクトリ内の画像を予測します。
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/18_image.png" />
</div>
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/19_image.png" />
</div>
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/20_image.png" />
</div>
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/21_image.png" />
</div>

結果はすべて正確です。次に、モデルが一度も見たことのない2つの画像で試してみます。

<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/22_image.png" />
</div>
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/23_image.png" />
</div>

```bash
yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=house_sparrow.jpg
```
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/24_image.png" />
</div>

```bash
yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=white_wagtail.jpg
```
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/25_image.png" />
</div>

これらの結果は素晴らしいと言えるでしょう。

## モデルのエクスポート
モデルはそのまま推論に使用できます。ただ開いて使用するだけです。  
推論時間を短縮するために、NVIDIA Jetson Orin NXを使用している場合、TensorRTやONNXにエクスポートすることができます。

このプロジェクトでは高速な推論時間は必要ありません（リアルタイムビデオで使用するわけではありません）が、使用しているプラットフォームの利点を活用できるのは良いことです。

残念ながら、仮想環境のためにTensorRTへのエクスポートができませんでした。Pythonでtensorrtをインポートできなかったためですが、仮想環境の外ではtensorrtライブラリに問題はありませんでした。

### ONNX
モデルをONNX形式にエクスポートするには、以下のコマンドを使用します。
```bash
yolo export model='./runs/classify/train6/weights/best.pt' format=onnx imgsz=640
```
これにより、推論に使用できる`best.onnx`が生成されます。

ONNXを使用して推論を実行するには、onnxruntime_gpuホイールをインストールする必要があります。

JetPack 6.0を使用してonnxruntime-gpuをインストールするには、[Jetson Zoo](https://elinux.org/Jetson_Zoo#ONNX_Runtime)からダウンロードします。

ここでは、onnxruntime_gpu 1.18.0をダウンロードします。

Pythonのバージョン（Python-3.10）に対応するpipホイールをダウンロードします。
```bash
wget https://nvidia.box.com/shared/static/48dtuob7meiw6ebgfsfqakc9vse62sg4.whl -O onnxruntime_gpu-1.18.0-cp310-cp310-linux_aarch64.whl
```
その後、インストールします。
```bash
pip install onnxruntime_gpu-1.18.0-cp310-cp310-linux_aarch64.whl
```

## 推論
### 写真
以下のコードを使用して、`best.pt`モデルで推論を実行し、結果を確認しました。

```python
# 推論の実行
from ultralytics import YOLO
# モデルをロード
bird_model = YOLO("./runs/classify/train6/weights/best.pt")
# 推論を実行
results = bird_model("house_sparrow.jpg")[0]
# クラス名を取得
class_names = results.names
# 確率が最も高いクラスを取得
top1 = results.probs.top1
# 確率が最も高いクラス名を出力
print (f" The detected bird is: {class_names[top1]}")
```

上記のコードは、モデルをロードし、画像で推論を実行し、結果を`results`変数に保存します。

`results`は、[ultralytics.engine.results.Results](http://ultralytics.engine.results.results/)オブジェクトのリスト型で、1つのアイテムが`Results`のインスタンスです。`results`変数の`[0]`は、推論結果を取得するために使用されます。

```python
results = bird_model("house_sparrow.jpg")[0]
```

次に、結果を使用してクラス名を取得します。クラス名を知らなくても、この方法で他のモデルでも動作するコードになります。

```python
class_names = results.names
```

結果の1つである`top1`変数には、確率が最も高いクラスが格納されています。この`top1`は`probs`リストによって提供されます。

```python
top1 = results.probs.top1
```

次に、確率が最も高いクラス（鳥の種名）を出力します。

```python
print (f" The detected bird is: {class_names[top1]}")
The detected bird is: House Sparrow
```

### カメラ
次に、カメラを使用して推論を実行します。

JetsonはUSBカメラまたはRPIカメラを使用できます。ここではUSBカメラを接続します。

以下のコードは、カメラフィードを表示できるかどうかを確認します。
```python
# USBカメラが使用できるかテスト
import cv2
cap = cv2.VideoCapture(0)
while True:
    ret, img = cap.read()
    cv2.imshow('Camera', img)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
cap.release()
cv2.destroyAllWindows
```

これはデスクトップコンピュータ上での私の作業です。*ssh -X username@jetson_ip*を使用すると、X11ウィンドウがデスクトップに転送されます。これは私がLinuxを使用しているため機能します。WSLでも動作する可能性があります。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/26_image.png" />
</div>

次に、ビデオフィードで推論を実行し、確率が最も高いクラスを表示してみます。

以下がそのコードです。
```python
# 再び、このコードをファイルに保存し、Jetsonで実行します。

import cv2
from ultralytics import YOLO
import time
# 信頼度レベルを定義
# このレベル以上の場合のみ、鳥のクラスとして表示
confidence = 0.95
# 前回のフレームを処理した時間
prev_frame = 0
# 現在のフレームを処理した時間
cur_time = 0
# モデルをロード
bird_model = YOLO("./runs/classify/train6/weights/best.pt")
# cv2フォント
font = cv2.FONT_HERSHEY_SIMPLEX
# カメラを開く
cap = cv2.VideoCapture(0)
while True:
    ret, img = cap.read()
    # FPSを表示
    cur_frame = time.time()
    fps = 1 / (cur_frame - prev_frame)
    prev_frame = cur_frame
    fps = int(fps)
    fps = str(fps)
    cv2.putText (img, fps, (550,50), font, 1, (124,10,120), 2, cv2.LINE_AA)

    # 現在のフレームで推論を実行
    results = bird_model(img, verbose=False)[0]
    # クラス名を取得
    class_names = results.names
    # 確率が最も高いクラスを取得
    top1 = results.probs.top1
    top1conf = results.probs.top1conf.tolist()
    # 定義されたレベル以上の信頼度の場合のみクラス名を表示
    if (top1conf >= confidence):
        bird_class = class_names[top1]
        print (f" The detected bird is: {class_names[top1]}")
        # 色はBGR形式
        confid = round(top1conf,2)
        img = cv2.putText(img, bird_class, (50,50), font, 0.9, (0, 0, 255), 2, cv2.LINE_AA)
        img = cv2.putText(img, "Conf: " + str(confid), (50,80), font, 0.6, (255, 0, 255), 1, cv2.LINE_AA)
        cv2.imshow('Camera', img)
    else:
        img = cv2.imshow('Camera', img)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
cap.release()
cv2.destroyAllWindows
```

<!-- このビデオもファイルに含まれています -->
以下はビデオフィードでの推論を示す動画です。
<!-- <div class="table-center">
<iframe src="https://youtu.be/ovoSMaoA9As" frameBorder={0} />
</div> -->

<iframe width={560} height={315} src="https://www.youtube.com/embed/ovoSMaoA9As?si=-d2buntx0T5oRtr4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio コントリビュータープロジェクトによってサポートされています。
- **Bruno の努力**に感謝します。あなたの作業は[こちら](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)で展示されます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートをご用意しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>