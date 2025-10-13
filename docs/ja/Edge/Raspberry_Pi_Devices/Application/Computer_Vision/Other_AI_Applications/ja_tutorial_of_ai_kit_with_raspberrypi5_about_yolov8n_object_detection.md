---
description: このwikiでは、Raspberry Pi5でAI kitを使用してyolov8nでオブジェクト検出を行う方法を、トレーニングからデプロイまで実演します
title: YOLOv8nオブジェクト検出に関するAI Kit with Raspberry Pi 5のチュートリアル
keywords:
  - Edge
  - rpi5
  - Ai kit
  - YOLO
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/tutorial_of_ai_kit_with_raspberrypi5_about_yolov8n_object_detection
last_update:
  date: 08/6/2024
  author: Jiahao

no_comments: false # for Disqus
---

# YOLOv8nオブジェクト検出に関するAI Kit with Raspberry Pi 5のチュートリアル

## はじめに

[YOLOv8](https://github.com/ultralytics/ultralytics)（You Only Look Once version 8）は、リアルタイム姿勢推定とオブジェクト検出モデルの人気のYOLOシリーズです。速度、精度、柔軟性において複数の進歩を導入することで、前身の強みを基盤として構築されています。[Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html)は推論速度を加速するために使用され、Hailo-8Lチップを中心に構築された13 TOPSニューラルネットワーク推論アクセラレータを特徴としています。

このwikiでは、Raspberry Pi 5でAI Kitを使用してYOLOv8nでオブジェクト検出を行う方法を、トレーニングからデプロイまでガイドします。

## ハードウェアの準備

### Hailo8L 13 TOPS用

<div class="table-center">
 <table align="center">
 <tr>
  <th>Raspberry Pi5 8GB</th>
  <th>Raspberry Pi AI Kit</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102110919-raspberry-pi-5-8gb-font.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113060086-raspberry-pi-ai-kit-all.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Hailo8 26 TOPS用

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2130</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>


</div>

## ハードウェアのインストール

[こちら](https://www.raspberrypi.com/documentation/accessories/ai-kit.html)を参照してください

## ホストコンピューター上で

:::note
hailoソフトウェアをインストールしますので、hailoアカウントを持っていることを確認してください。
:::

### Ultralyticsのインストールとモデルの訓練

python3.11をインストール

```
sudo apt install python3.11
```

yolo_env を仮想環境として作成する

```
python3.11 -m venv yolo_env
```

環境をアクティベートする

```
source yolo_env/bin/activate
```

ultralyticsをインストール

```
pip install ultralytics
```

COCO データセットを使用して YOLOv8n をトレーニングします。独自のデータセットをトレーニングしたい場合は、その方法について[こちら](https://docs.ultralytics.com)の手順を参照してください。

```
mkdir yolomodel && cd yolomodel
yolo detect train data=coco128.yaml model=yolov8n.pt name=retrain_yolov8n epochs=100 batch=16
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/train.png" alt="pir" width={1000} height="auto"/></p>

トレーニング後、以下に示すように `best.pt` モデルが得られます：

```
cd ./runs/detect/retrain_yolov8n/weights/
ls
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/train_result.png" alt="pir" width={1000} height="auto"/></p>

`.pt`モデルを`.onnx`に変換します。

```
yolo export model=./best.pt imgsz=640 format=onnx opset=11 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/convert_onnx.png" alt="pir" width={1000} height="auto"/></p>

### hailoソフトウェアのインストール

Python 3.8をインストール

```
cd ~
sudo apt install python3.8
```

hailo_env を仮想環境として作成する

```
python3.8 -m venv hailo_env
```

Activate the environment

```
source hailo_env/bin/activate
```

[Hailo Dataflow Compiler 3.27](https://hailo.ai/developer-zone/software-downloads/)をインストールしてください。ここではHailoに登録してログインし、ソフトウェアをダウンロードする必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/HDF_install.png" alt="pir" width={1000} height="auto"/></p>

```
pip install hailo_dataflow_compiler-3.27.0-py3-none-linux_x86_64.whl 

```

[Model zoo](https://hailo.ai/developer-zone/software-downloads/)をインストールします。ここでHailoに登録してログインし、ソフトウェアをダウンロードする必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_zoo.png" alt="pir" width={1000} height="auto"/></p>

```
pip install hailo_model_zoo-2.11.0-py3-none-any.whl 
```

`hailo_model_zoo` が正常に機能しているかテストします。

```
hailomz -h
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_zoo_test.png" alt="pir" width={1000} height="auto"/></p>

`hailo_model_zoo` githubファイルをインストールする

```
cd yolomodel/runs/detect/retrain_yolov8n/weights

git clone https://github.com/hailo-ai/hailo_model_zoo.git
```

yolov8nモデルの評価/最適化/コンパイルのためにcocoデータセットをインストールする

```
python hailo_model_zoo/datasets/create_coco_tfrecord.py val2017
python hailo_model_zoo/datasets/create_coco_tfrecord.py calib2017
```

### `hailo_model_zoo` を使用してモデルを解析する

```
hailomz parse --hw-arch hailo8l --ckpt ./best.onnx yolov8n
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/parse_model.png" alt="pir" width={1000} height="auto"/></p>

### `hailo_model_zoo` を使用してモデルを最適化する

:::note
以下のコマンドを実行すると、いくつかのエラーが発生する可能性があります。ただし、`./hailo_model_zoo/hailo_model_zoo` をローカルライブラリにコピーすることができます。エラーがデータセットが見つからないことを示している場合は、`~/.hailomz` に移動してデータセットを見つけ、ローカルのデータセットディレクトリにコピーしてください。
:::

```
hailomz optimize --hw-arch hailo8l --har ./yolov8n.har yolov8n
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/optimize_model.png" alt="pir" width={1000} height="auto"/></p>

### `hailo_model_zoo` を使用してモデルをコンパイルする

```
hailomz compile  yolov8n --hw-arch hailo8l --har ./yolov8n.har 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_compile.png" alt="pir" width={1000} height="auto"/></p>

最終的に `hef` モデルが得られ、これを使用して AI キット付きの Raspberry Pi5 にデプロイできます

```
ls
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/compile_result.png" alt="pir" width={1000} height="auto"/></p>

## Raspberry Pi5での実行

### システムの更新

```
sudo apt update
sudo apt full-upgrade
```

### PCIeをgen2/gen3に設定する（gen3はgen2より高速）

以下のテキストを```/boot/firmware/config.txt```に追加してください

```
#Enable the PCIe external connector

dtparam=pciex1

#Force Gen 3.0 speeds

dtparam=pciex1_gen=3

```

:::note
`gen2`を使用したい場合は、`dtparam=pciex1_gen=3`をコメントアウトしてください
:::

### hailo-allをインストールして再起動

Raspberry Pi 5でターミナルを開き、以下のコマンドを入力してHailoソフトウェアをインストールします

```
sudo apt install hailo-all
sudo reboot
```

### ソフトウェアとハードウェアの確認

Raspberry Pi5でターミナルを開き、以下のコマンドを入力してhailo-allがインストールされているかを確認します。

```
hailortcli fw-control identify
```

正しい結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Raspberry Pi5でターミナルを開き、以下のコマンドを入力してhailo-8Lが接続されているかどうかを確認します。

```
lspci | grep Hailo
```

正しい結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

### プロジェクトをクローンする

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
```

### モデルをraspberry pi5にコピーする

`hailomodel`という名前のディレクトリを作成します

```
mkdir hailomodel
```

:::note
以下のコマンドは、Raspberry Pi 5ではなく、ホストコンピュータで実行する必要があります。ホストコンピュータとRaspberry Pi 5の両方が同じネットワークに接続されていることを確認してください。
:::

```
scp -r ./yolomodel/runs/detect/retrain_yolov8n/weights/yolov8n.hef username@ip /home/pi/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/hailomodel/
```

### コードの変更

`object-detection-hailo.py` の105行目と106行目を見つけて、以下のようにコードを変更してください：

```
        elif args.network == "yolov8n":
            self.hef_path = os.path.join(self.current_path, './hailomodel/yolov8n.hef')   
```

`object-detection-hailo.py` の172行目を見つけて、以下のようにコードを変更してください：

```
    parser.add_argument("--network", default="yolov8n", choices=['yolov6n', 'yolov8s', 'yolox_s_leaky'], help="Which Network to use, defult is yolov6n")
```

### コードを実行する

```
bash run.sh object-detection-hailo
```

## 結果

以下は、YOLOv8nモデルの訓練プロセスとRaspberry Pi 5への展開を実演するビデオです。バッチサイズを8、入力サイズを640x640、入力ビデオフレームレートを240 fpsに設定しました。達成された推論速度は136.7 fpsで、ほとんどのアプリケーションシナリオにとって非常に高速です。

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/mVNrEVpvvuc" title="YOLOv8n Object Detection on Raspberry Pi 5 with AI Kit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
