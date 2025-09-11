---
description: reComputerでの完全なYOLOv8モデルトレーニング
title: reComputerでYOLOv8をトレーニングしてデプロイする方法
keywords:
- reComputer
- YOLOv8のトレーニング
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/How_to_Train_and_Deploy_YOLOv8_on_reComputer
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputerでYOLOv8をトレーニングしてデプロイする方法

## はじめに
ますます複雑で動的な課題に直面する中、人工知能の応用は問題解決の新たな道を提供し、グローバル社会の持続可能な発展や人々の生活の質の向上に大きく貢献しています。通常、人工知能アルゴリズムをデプロイする前に、AIモデルの設計とトレーニングは高性能コンピューティングサーバー上で行われます。モデルのトレーニングが完了すると、エッジコンピューティングデバイスにエクスポートされ、エッジ推論が行われます。実際には、これらすべてのプロセスはエッジコンピューティングデバイス上で直接行うことができます。具体的には、データセットの準備、ニューラルネットワークのトレーニング、ニューラルネットワークの検証、モデルのデプロイといったタスクがエッジデバイス上で実行可能です。これにより、データのセキュリティが確保されるだけでなく、追加のデバイス購入に伴うコストも削減されます。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

本ドキュメントでは、[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=f6de8f6c8d814c021e13f4455d041d03&objectID=5586&indexName=bazaar_retailer_products)を使用して交通シーンの物体検出モデルをトレーニングおよびデプロイします。本ドキュメントでは、[YOLOv8](https://www.ultralytics.com/)物体検出アルゴリズムを例として使用し、全プロセスの詳細な概要を提供します。以下に記載されているすべての操作は、Jetsonエッジコンピューティングデバイス上で行われることに注意してください。Jetsonデバイスには、[JetPack 5.0](https://wiki.seeedstudio.com/ja/NVIDIA_Jetson/)以上のオペレーティングシステムがインストールされている必要があります。

## データセット
機械学習のプロセスは、与えられたデータ内のパターンを見つけ、それらのパターンを捉える関数を使用することに関係します。したがって、データセットの品質はモデルの性能に直接影響を与えます。一般的に、トレーニングデータの質と量が良いほど、トレーニングされたモデルも良くなります。そのため、データセットの準備は非常に重要です。

トレーニングデータセットを収集する方法はさまざまです。ここでは、以下の2つの方法を紹介します。1. 事前にアノテーションされたオープンソースの公開データセットをダウンロードする。2. トレーニングデータを収集してアノテーションを行う。最終的に、すべてのデータを統合して、後続のトレーニングフェーズに備えます。

### 公開データセットをダウンロードする
公開データセットは、機械学習や人工知能研究で広く使用される標準化されたデータリソースです。これらは研究者にアルゴリズム性能を評価するための標準的なベンチマークを提供し、分野の革新と協力を促進します。これらのデータセットは、AIコミュニティをよりオープンで革新的かつ持続可能な方向に導きます。

データセットを自由にダウンロードできるプラットフォームは多数あります。例えば、[Roboflow](https://roboflow.com/)、[Kaggle](https://www.kaggle.com/)などです。ここでは、Kaggleから交通シーンに関連するアノテーション済みデータセット[Traffic Detection Project](https://www.kaggle.com/datasets/yusufberksardoan/traffic-detection-project/download?datasetVersionNumber=1)をダウンロードします。

解凍後のファイル構造は以下の通りです：

```sh
archive
├── data.yaml
├── README.dataset.txt
├── README.roboflow.txt
├── test
│   ├── images
│   │   ├── aguanambi-1000_png_jpg.rf.7179a0df58ad6448028bc5bc21dca41e.jpg
│   │   ├── aguanambi-1095_png_jpg.rf.4d9f0370f1c09fb2a1d1666b155911e3.jpg
│   │   ├── ...
│   └── labels
│       ├── aguanambi-1000_png_jpg.rf.7179a0df58ad6448028bc5bc21dca41e.txt
│       ├── aguanambi-1095_png_jpg.rf.4d9f0370f1c09fb2a1d1666b155911e3.txt
│       ├── ...
├── train
│   ├── images
│   │   ├── aguanambi-1000_png_jpg.rf.0ab6f274892b9b370e6441886b2d7b9d.jpg
│   │   ├── aguanambi-1000_png_jpg.rf.dc59d3c5df5d991c1475e5957ea9948c.jpg
│   │   ├── ...
│   └── labels
│       ├── aguanambi-1000_png_jpg.rf.0ab6f274892b9b370e6441886b2d7b9d.txt
│       ├── aguanambi-1000_png_jpg.rf.dc59d3c5df5d991c1475e5957ea9948c.txt
│       ├── ...
└── valid
    ├── images
    │   ├── aguanambi-1085_png_jpg.rf.0608a42a5c9090a4efaf9567f80fa992.jpg
    │   ├── aguanambi-1105_png_jpg.rf.0aa6c5d1769ce60a33d7b51247f2a627.jpg
    │   ├── ...
    └── labels
        ├── aguanambi-1085_png_jpg.rf.0608a42a5c9090a4efaf9567f80fa992.txt
        ├── aguanambi-1105_png_jpg.rf.0aa6c5d1769ce60a33d7b51247f2a627.txt
        ├──...
```

各画像には、その画像の完全なアノテーション情報を含む対応するテキストファイルがあります。`data.json`ファイルにはトレーニング、テスト、検証セットの場所が記録されており、パスを修正する必要があります：

```json
train: ./train/images
val: ./valid/images
test: ./test/images

nc: 5
names: ['bicycle', 'bus', 'car', 'motorbike', 'person']
```

### データの収集とアノテーション

公開データセットがユーザーの要件を満たさない場合、特定のニーズに合わせたカスタムデータセットを収集して作成することを検討する必要があります。これには、関連データの収集、アノテーション、および整理が含まれます。
デモンストレーションのために、[YouTube](https://www.youtube.com/watch?v=iJZcjZD0fw0)から3枚の画像をキャプチャして保存し、[Label Studio](https://www.youtube.com/watch?v=iJZcjZD0fw0)を使用して画像にアノテーションを付ける方法を試みます。

**ステップ 1.** 生データを収集する:

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/raw_datas.png" />
</div>

**ステップ 2.** アノテーションツールをインストールして実行する:
```bash
sudo groupadd docker
sudo gpasswd -a ${USER} docker
sudo systemctl restart docker
sudo chmod a+rw /var/run/docker.sock

mkdir label_studio_data
sudo chmod -R 776 label_studio_data
docker run -it -p 8080:8080 -v $(pwd)/label_studio_data:/label-studio/data heartexlabs/label-studio:latest
```

**ステップ 3.** 新しいプロジェクトを作成し、プロンプトに従ってアノテーションを完了する:
[Label Studio Reference Documentation](https://labelstud.io/blog/quickly-create-datasets-for-training-yolo-object-detection-with-label-studio/#output-the-dataset-in-yolo-format)

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/labeling.png" />
</div>

アノテーションが完了したら、YOLO形式でデータセットをエクスポートし、ダウンロードしたデータとアノテーション済みデータを整理します。最も簡単な方法は、すべての画像を公開データセットのtrain/imagesフォルダにコピーし、生成されたアノテーションテキストファイルを公開データセットのtrain/labelsフォルダにコピーすることです。

この時点で、2つの異なる方法でトレーニングデータを取得し、それらを統合しました。より高品質なトレーニングデータを求める場合、データクリーニングやクラスバランス調整など、追加のステップを検討する必要があります。ただし、今回のタスクは比較的シンプルなため、これらのステップは省略し、上記で取得したデータを使用してトレーニングを進めます。

## モデル
このセクションでは、reComputer上でYOLOv8のソースコードをダウンロードし、実行環境を構成します。

**ステップ 1.** 以下のコマンドを使用してソースコードをダウンロードします:

```bash
git clone https://github.com/ultralytics/ultralytics.git
cd ultralytics
```

**ステップ 2.** requirements.txtを開き、関連する内容を修正します:

```bash
# `vi`コマンドを使用してファイルを開きます
vi requirements.txt

# `a`を押して編集モードに入り、以下の内容を修正します:
torch>=1.7.0 --> # torch>=1.7.0
torchvision>=0.8.1 --> # torchvision>=0.8.1

# 編集モードを終了するには`ESC`を押し、最後に`:wq`を入力してファイルを保存して終了します。
```

**ステップ 3.** 以下のコマンドを実行して、YOLOに必要な依存関係をダウンロードし、YOLOv8をインストールします:
```bash
pip3 install -e .
cd ..
```

**ステップ 4.** JetsonバージョンのPyTorchをインストールします:

```bash
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://developer.download.nvidia.cn/compute/redist/jp/v512/pytorch/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl -O torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
pip3 install torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
```

**ステップ 5.** 対応するtorchvisionをインストールします:
```bash
sudo apt install -y libjpeg-dev zlib1g-dev
git clone --branch v0.16.0 https://github.com/pytorch/vision torchvision
cd torchvision
python3 setup.py install --user
cd ..
```

**ステップ 6.** 以下のコマンドを使用して、YOLOが正常にインストールされたことを確認します:
```bash
yolo detect predict model=yolov8s.pt source='https://ultralytics.com/images/bus.jpg'
```

## トレーニング
モデルのトレーニングは、モデルの重みを更新するプロセスです。モデルをトレーニングすることで、機械学習アルゴリズムはデータからパターンや関係性を学び、新しいデータに対して予測や意思決定を行えるようになります。

**ステップ 1.** トレーニング用の Python スクリプトを作成します：

```bash
vi train.py
```

`a` を押して編集モードに入り、以下の内容を修正します：

```bash
from ultralytics import YOLO

# モデルをロード
model = YOLO('yolov8s.pt')

# モデルをトレーニング
results = model.train(
    data='/home/nvidia/Everything_Happens_Locally/Dataset/data.yaml', 
    batch=8, epochs=100, imgsz=640, save_period=5
)
```

`ESC` を押して編集モードを終了し、最後に `:wq` を入力してファイルを保存して終了します。
`YOLO.train()` メソッドには多くの設定パラメータがあります。詳細については 
[ドキュメント](https://docs.ultralytics.com/modes/train/#arguments) 
を参照してください。また、特定の要件に基づいてトレーニングを開始するための、より簡潔な `CLI` アプローチを使用することもできます。

**ステップ 2.** 以下のコマンドでトレーニングを開始します：
```bash
python3 train.py
```

その後、長い待機プロセスが始まります。待機中にリモート接続ウィンドウを閉じる可能性を考慮して、このチュートリアルでは 
[Tmux](https://github.com/tmux/tmux/wiki)
ターミナルマルチプレクサを使用します。そのため、プロセス中に私が見るインターフェースは以下のようになります：

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/training.png" />
</div>

Tmux はオプションです。モデルが正常にトレーニングされていれば問題ありません。トレーニングプログラムが終了すると、指定されたフォルダ内にトレーニング中に保存されたモデルの重みファイルを見つけることができます：

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/models.png" />
</div>

## 検証
検証プロセスでは、データの一部を使用してモデルの信頼性を検証します。このプロセスは、モデルが実際のアプリケーションで正確かつ堅牢にタスクを実行できることを確認するのに役立ちます。トレーニングプロセス中に出力される情報を詳しく調べると、多くの検証がトレーニング中に散在していることに気付くでしょう。このセクションでは、各評価指標の意味を分析するのではなく、予測結果を調べることでモデルの使用可能性を分析します。

**ステップ 1.** トレーニング済みモデルを使用して特定の画像を推論します：

```bash
yolo detect predict \
    model='./runs/detect/train2/weights/best.pt' \ 
    source='./datas/test/images/ant_sales-2615_png_jpg.rf.0ceaf2af2a89d4080000f35af44d1b03.jpg' \
    save=True show=False
```

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/inference_cmd.png" />
</div>

**ステップ 2.** 推論結果を確認します。

検出結果から、トレーニング済みモデルが期待通りの検出性能を達成していることが確認できます。

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/inference.jpeg" />
</div>

## デプロイメント
デプロイメントは、訓練済みの機械学習または深層学習モデルを実際のシナリオに適用するプロセスです。上記で紹介した内容はモデルの実現可能性を検証しましたが、モデルの推論効率については考慮していません。デプロイメントフェーズでは、検出精度と効率のバランスを見つける必要があります。TensorRT推論エンジンを使用することで、モデルの推論速度を向上させることができます。

**ステップ 1.** 軽量モデルと元のモデルのコントラストを視覚的に示すために、viツールを使用して新しい`inference.py`ファイルを作成し、ビデオファイルの推論を実装します。8行目と9行目を変更することで、推論モデルと入力ビデオを置き換えることができます。このドキュメントの入力は、私が携帯電話で撮影したビデオです。

```python
from ultralytics import YOLO
import os
import cv2
import time
import datetime


model = YOLO("/home/nvidia/Everything_Happens_Locally/runs/detect/train2/weights/best.pt")
cap = cv2.VideoCapture('./sample_video.mp4')

save_dir = os.path.join('runs/inference_test', datetime.datetime.now().strftime('%Y-%m-%d-%H-%M-%S'))
if not os.path.exists(save_dir):
    os.makedirs(save_dir)
fourcc = cv2.VideoWriter_fourcc(*'mp4v')
fps = cap.get(cv2.CAP_PROP_FPS)
size = (int(cap.get(cv2.CAP_PROP_FRAME_WIDTH)), int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT)))
output = cv2.VideoWriter(os.path.join(save_dir, 'result.mp4'), fourcc, fps, size)

while cap.isOpened():
    success, frame = cap.read()
    if success:
        start_time = time.time()
        results = model(frame)
        annotated_frame = results[0].plot()
        total_time = time.time() - start_time
        fps = 1/total_time
        cv2.rectangle(annotated_frame, (20, 20), (200, 60), (55, 104, 0), -1)
        cv2.putText(annotated_frame, f'FPS: {round(fps, 2)}', (30, 50), 0, 0.9, (255, 255, 255), thickness=2, lineType=cv2.LINE_AA)
        print(f'FPS: {fps}')
        cv2.imshow("YOLOv8 推論", annotated_frame)
        output.write(annotated_frame)
        if cv2.waitKey(1) & 0xFF == ord("q"):
            break
    else:
        break

cv2.destroyAllWindows()
cap.release()
output.release()
```

**ステップ 2.** 以下のコマンドを実行し、モデル量子化前の推論速度を記録します：

```bash
python3 inference.py
```

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/inference_pt.png" />
</div>

結果は、モデル量子化前の推論速度が21.9 FPSであることを示しています。

**ステップ 3.** 量子化モデルを生成します：

```bash
pip3 install onnx
yolo export model=/home/nvidia/Everything_Happens_Locally/runs/detect/train2/weights/best.pt format=engine half=True device=0
```

プログラムが完了すると（約10〜20分）、入力モデルと同じディレクトリに`.engine`ファイルが生成されます。このファイルが量子化モデルです。

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/model_engine.png" />
</div>

**ステップ 4.** 量子化モデルを使用して推論速度をテストします。

ここで、ステップ1で作成したスクリプトの8行目の内容を変更する必要があります。

```bash
model = YOLO(<path to .pt>) --> model = YOLO(<path to .engine>)
```

その後、推論コマンドを再実行します：

```bash
python3 inference.py
```

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/inference_engine.png" />
</div>

推論効率の観点から見ると、量子化モデルは推論速度において大幅な改善を示しています。

## まとめ

この記事は、データ収集、モデルのトレーニングからデプロイメントまで、さまざまな側面を網羅した包括的なガイドを読者に提供します。重要なのは、すべてのプロセスがreComputer内で行われるため、ユーザーが追加のGPUを用意する必要がない点です。

<!-- Code END -->

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際の体験がスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>