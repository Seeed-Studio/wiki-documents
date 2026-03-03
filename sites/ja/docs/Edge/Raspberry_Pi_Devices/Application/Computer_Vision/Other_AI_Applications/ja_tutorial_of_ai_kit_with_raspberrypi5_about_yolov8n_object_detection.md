---
description: このwikiでは、Raspberry Pi5上のAIキットでyolov8nを使用してオブジェクト検出を行う方法を、トレーニングからデプロイまで実演します
title: YOLOv8nオブジェクト検出に関するRaspberry Pi 5とAIキットのチュートリアル
keywords:
  - Edge
  - rpi5
  - Ai kit
  - YOLO
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /tutorial_of_ai_kit_with_raspberrypi5_about_yolov8n_object_detection
last_update:
  date: 08/6/2024
  author: Jiahao
no_comments: false # for Disqus
---

# YOLOv8nオブジェクト検出に関するRaspberry Pi 5とAIキットのチュートリアル

## はじめに

[YOLOv8](https://github.com/ultralytics/ultralytics)（You Only Look Once version 8）は、リアルタイム姿勢推定とオブジェクト検出モデルの人気のあるYOLO シリーズです。速度、精度、柔軟性において複数の進歩を導入することで、前身の強みを基盤としています。[Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html)は推論速度を加速するために使用され、Hailo-8Lチップを中心に構築された13 TOPSニューラルネットワーク推論アクセラレータを特徴としています。

このwikiでは、Raspberry Pi 5上のAIキットでYOLOv8nをオブジェクト検出に使用する方法を、トレーニングからデプロイまでガイドします。

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
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### Hailo8 26 TOPS用

<div class="table-center">
 <table align="center">
 <tr>
 <th>reComputer R1125</th>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
 </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991334.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## ハードウェアのインストール

[こちら](https://www.raspberrypi.com/documentation/accessories/ai-kit.html)を参照してください

## ホストコンピュータ上で

:::note
hailoソフトウェアをインストールしますので、hailoアカウントを持っていることを確認してください。
:::

### Ultralyticsのインストールとモデルのトレーニング

python3.11をインストール

```
sudo apt install python3.11
```

yolo_envを仮想環境として作成

```
python3.11 -m venv yolo_env
```

環境をアクティベート

```
source yolo_env/bin/activate
```

ultralyticsをインストール

```
pip install ultralytics
```

COCOデータセットを使用してYOLOv8nをトレーニングします。独自のデータセットをトレーニングしたい場合は、その方法について[こちら](https://docs.ultralytics.com)を参照してください。

```
mkdir yolomodel && cd yolomodel
yolo detect train data=coco128.yaml model=yolov8n.pt name=retrain_yolov8n epochs=100 batch=16
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/train.png" alt="pir" width={1000} height="auto"/></p>

トレーニング後、以下に示すように`best.pt`モデルが得られます：

```
cd ./runs/detect/retrain_yolov8n/weights/
ls
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/train_result.png" alt="pir" width={1000} height="auto"/></p>

`.pt`モデルを`.onnx`に変換します。

```
yolo export model=./best.pt imgsz=640 format=onnx opset=11 
```

結果は以下のようになります：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/convert_onnx.png" alt="pir" width={1000} height="auto"/></p>

### hailoソフトウェアのインストール

python 3.8をインストール

```
cd ~
sudo apt install python3.8
```

hailo_envを仮想環境として作成

```
python3.8 -m venv hailo_env
```

環境をアクティベート

```
source hailo_env/bin/activate
```

[Hailo Dataflow Compiler 3.27](https://hailo.ai/developer-zone/software-downloads/)をインストールします。ここでHailoに登録してログインし、ソフトウェアをダウンロードする必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/HDF_install.png" alt="pir" width={1000} height="auto"/></p>

```
pip install hailo_dataflow_compiler-3.27.0-py3-none-linux_x86_64.whl 

```

[Model zoo](https://hailo.ai/developer-zone/software-downloads/)をインストールします。ここでHailoに登録してログインし、ソフトウェアをダウンロードする必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_zoo.png" alt="pir" width={1000} height="auto"/></p>

```
pip install hailo_model_zoo-2.11.0-py3-none-any.whl 
```

`hailo_model_zoo`が正しく機能しているかテストします。

```
hailomz -h
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_zoo_test.png" alt="pir" width={1000} height="auto"/></p>

`hailo_model_zoo`のgithubファイルをインストール

```
cd yolomodel/runs/detect/retrain_yolov8n/weights

git clone https://github.com/hailo-ai/hailo_model_zoo.git
```

yolov8nモデルの評価/最適化/コンパイル用にcocoデータセットをインストール

```
python hailo_model_zoo/datasets/create_coco_tfrecord.py val2017
python hailo_model_zoo/datasets/create_coco_tfrecord.py calib2017
```

### `hailo_model_zoo`を使用してモデルを解析

```
hailomz parse --hw-arch hailo8l --ckpt ./best.onnx yolov8n
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/parse_model.png" alt="pir" width={1000} height="auto"/></p>

### `hailo_model_zoo`を使用してモデルを最適化

:::note
以下のコマンドを実行すると、いくつかのエラーが発生する可能性があります。しかし、`./hailo_model_zoo/hailo_model_zoo`をローカルライブラリにコピーできます。エラーがデータセットが見つからないことを示している場合は、`~/.hailomz`に移動してデータセットを見つけ、ローカルデータセットディレクトリにコピーできます。
:::

```
hailomz optimize --hw-arch hailo8l --har ./yolov8n.har yolov8n
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/optimize_model.png" alt="pir" width={1000} height="auto"/></p>

### `hailo_model_zoo`を使用してモデルをコンパイル

```
hailomz compile  yolov8n --hw-arch hailo8l --har ./yolov8n.har 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_compile.png" alt="pir" width={1000} height="auto"/></p>

すべて完了すると`hef`モデルが得られ、これをAIキット付きのraspberry pi5にデプロイできます

```
ls
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/compile_result.png" alt="pir" width={1000} height="auto"/></p>

## Raspberry Pi5上で

### システムの更新

```
sudo apt update
sudo apt full-upgrade
```

### PCIe を gen2/gen3 に設定（gen3 は gen2 より高速）

```/boot/firmware/config.txt``` に以下のテキストを追加します

```
#Enable the PCIe external connector

dtparam=pciex1

#Force Gen 3.0 speeds

dtparam=pciex1_gen=3

```

:::note
`gen2` を使用したい場合は、`dtparam=pciex1_gen=3` をコメントアウトしてください
:::

### hailo-all をインストールして再起動

Raspberry Pi 5 でターミナルを開き、以下のコマンドを入力して Hailo ソフトウェアをインストールします

```
sudo apt install hailo-all
sudo reboot
```

### ソフトウェアとハードウェアの確認

Raspberry Pi5 でターミナルを開き、以下のコマンドを入力して hailo-all がインストールされているかを確認します。

```
hailortcli fw-control identify
```

正しい結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Raspberry Pi5 でターミナルを開き、以下のコマンドを入力して hailo-8L が接続されているかを確認します。

```
lspci | grep Hailo
```

正しい結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

### プロジェクトのクローン

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
```

### モデルを Raspberry Pi5 にコピー

`hailomodel` という名前のディレクトリを作成します

```
mkdir hailomodel
```

:::note
以下のコマンドは Raspberry Pi 5 ではなく、ホストコンピュータで実行する必要があります。ホストコンピュータと Raspberry Pi 5 の両方が同じネットワークに接続されていることを確認してください。
:::

```
scp -r ./yolomodel/runs/detect/retrain_yolov8n/weights/yolov8n.hef username@ip /home/pi/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/hailomodel/
```

### コードの変更

`object-detection-hailo.py` の 105 行目と 106 行目を見つけて、以下のようにコードを変更します：

```
        elif args.network == "yolov8n":
            self.hef_path = os.path.join(self.current_path, './hailomodel/yolov8n.hef')   
```

`object-detection-hailo.py` の 172 行目を見つけて、以下のようにコードを変更します：

```
    parser.add_argument("--network", default="yolov8n", choices=['yolov6n', 'yolov8s', 'yolox_s_leaky'], help="Which Network to use, defult is yolov6n")
```

### コードの実行

```
bash run.sh object-detection-hailo
```

## 結果

こちらは YOLOv8n モデルをトレーニングして Raspberry Pi 5 にデプロイするプロセスを実演した動画です。バッチサイズを 8、入力サイズを 640x640、入力動画フレームレートを 240 fps に設定しました。達成された推論速度は 136.7 fps で、ほとんどのアプリケーションシナリオにとって非常に高速です。

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/mVNrEVpvvuc" title="YOLOv8n Object Detection on Raspberry Pi 5 with AI Kit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
