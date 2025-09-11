---
description: この Wiki は、Raspberry Pi 5 上で AI キットを使用して YOLOv8n による物体検出を行う方法を、トレーニングからデプロイまで説明します。
title: Raspberry Pi 5 と AI キットを使用した YOLOv8n 物体検出のチュートリアル
keywords:
  - Edge
  - rpi5
  - Ai kit
  - YOLO
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/tutorial_of_ai_kit_with_raspberrypi5_about_yolov8n_object_detection
last_update:
  date: 05/15/2025
  author: Jiahao

no_comments: false # Disqus 用
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Raspberry Pi 5 と AI キットを使用した YOLOv8n 物体検出のチュートリアル
## はじめに

[YOLOv8](https://github.com/ultralytics/ultralytics)（You Only Look Once バージョン 8）は、リアルタイムのポーズ推定および物体検出モデルの YOLO シリーズの中で最も人気のあるバージョンです。YOLOv8 は、速度、精度、柔軟性においていくつかの進歩を導入し、従来のバージョンの強みをさらに強化しています。[Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html) は、Hailo-8L チップを中心に構築された 13 TOPS のニューラルネットワーク推論アクセラレータを備えており、推論速度を向上させるために使用されます。

この Wiki では、Raspberry Pi 5 上で AI キットを使用して YOLOv8n による物体検出を行う方法を、トレーニングからデプロイまで説明します。

## ハードウェアの準備

### Hailo8L 13 TOPS の場合
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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### Hailo8 26 TOPS の場合

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## ハードウェアのインストール

[こちら](https://www.raspberrypi.com/documentation/accessories/ai-kit.html)を参照してください。

## ホストコンピュータ上で

:::note
Hailoソフトウェアをインストールします。Hailoアカウントを持っていることを確認してください。
:::

### Ultralyticsのインストールとモデルのトレーニング:

Python3.11をインストールします。
```
sudo apt install python3.11
```

仮想環境として`yolo_env`を作成します。

```
python3.11 -m venv yolo_env
```

環境をアクティブ化します。

```
source yolo_env/bin/activate
```

Ultralyticsをインストールします。

```
pip install ultralytics
```

COCOデータセットを使用してYOLOv8nをトレーニングします。独自のデータセットをトレーニングしたい場合は、[こちら](https://docs.ultralytics.com)を参照してください。

```
mkdir yolomodel && cd yolomodel
yolo detect train data=coco128.yaml model=yolov8n.pt name=retrain_yolov8n epochs=100 batch=16
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/train.png" alt="pir" width={1000} height="auto"/></p>

トレーニング後に`best.pt`モデルが生成されます。以下のように確認できます。

```
cd ./runs/detect/retrain_yolov8n/weights/
ls
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/train_result.png" alt="pir" width={1000} height="auto"/></p>

`.pt`モデルを`.onnx`に変換します。

```
yolo export model=./best.pt imgsz=640 format=onnx opset=11 
```
以下のような結果が得られます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/convert_onnx.png" alt="pir" width={1000} height="auto"/></p>

### Hailoソフトウェアのインストール:

Python3.8をインストールします。

```
cd ~
sudo apt install python3.8
```

仮想環境として`hailo_env`を作成します。

```
python3.8 -m venv hailo_env
```

環境をアクティブ化します。

```
source hailo_env/bin/activate
```

[Hailo Dataflow Compiler 3.27](https://hailo.ai/developer-zone/software-downloads/)をインストールします。ここでHailoに登録し、ログインしてソフトウェアをダウンロードしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/HDF_install.png" alt="pir" width={1000} height="auto"/></p>

``` 
pip install hailo_dataflow_compiler-3.27.0-py3-none-linux_x86_64.whl 
```

[Model zoo](https://hailo.ai/developer-zone/software-downloads/)をインストールします。ここでHailoに登録し、ログインしてソフトウェアをダウンロードしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_zoo.png" alt="pir" width={1000} height="auto"/></p>

```
pip install hailo_model_zoo-2.11.0-py3-none-any.whl 
```

`hailo_model_zoo`が正しく動作しているかテストします。

```
hailomz -h
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_zoo_test.png" alt="pir" width={1000} height="auto"/></p>

`hailo_model_zoo`のGitHubファイルをインストールします。

```
cd yolomodel/runs/detect/retrain_yolov8n/weights

git clone https://github.com/hailo-ai/hailo_model_zoo.git
```

COCOデータセットをインストールして、YOLOv8nモデルを評価/最適化/コンパイルします。

```
python hailo_model_zoo/datasets/create_coco_tfrecord.py val2017
python hailo_model_zoo/datasets/create_coco_tfrecord.py calib2017
```

### `hailo_model_zoo`を使用してモデルを解析:

```
hailomz parse --hw-arch hailo8l --ckpt ./best.onnx yolov8n
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/parse_model.png" alt="pir" width={1000} height="auto"/></p>

### `hailo_model_zoo`を使用してモデルを最適化:

:::note
以下のコマンドを実行すると、いくつかのエラーが発生する可能性があります。ただし、`./hailo_model_zoo/hailo_model_zoo`をローカルライブラリにコピーすることで解決できます。エラーがデータセットが見つからないことを示している場合は、`~/.hailomz`に移動し、データセットをローカルデータセットディレクトリにコピーしてください。
:::

```
hailomz optimize --hw-arch hailo8l --har ./yolov8n.har yolov8n
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/optimize_model.png" alt="pir" width={1000} height="auto"/></p>

### `hailo_model_zoo`を使用してモデルをコンパイル:

```
hailomz compile  yolov8n --hw-arch hailo8l --har ./yolov8n.har 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/model_compile.png" alt="pir" width={1000} height="auto"/></p>

最終的に`hef`モデルが生成されます。このモデルを使用して、AIキットを搭載したRaspberry Pi5にデプロイできます。

```
ls
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/hailo-tutorial/compile_result.png" alt="pir" width={1000} height="auto"/></p>

## Raspberry Pi 5での操作

### システムの更新:

```
sudo apt update
sudo apt full-upgrade
```

### PCIeをgen2/gen3に設定する（gen3はgen2より高速）:

以下のテキストを```/boot/firmware/config.txt```に追加してください。

```
#PCIe外部コネクタを有効化

dtparam=pciex1

#Gen 3.0速度を強制

dtparam=pciex1_gen=3

```
:::note
`gen2`を使用したい場合は、`dtparam=pciex1_gen=3`をコメントアウトしてください。
:::

### hailo-allをインストールして再起動:

Raspberry Pi 5のターミナルを開き、以下のコマンドを入力してHailoソフトウェアをインストールします。

```
sudo apt install hailo-all
sudo reboot
```
### ソフトウェアとハードウェアの確認:

Raspberry Pi 5のターミナルを開き、以下のコマンドを入力してhailo-allがインストールされているか確認します。

```
hailortcli fw-control identify
```

正しい結果は以下のように表示されます:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Raspberry Pi 5のターミナルを開き、以下のコマンドを入力してhailo-8Lが接続されているか確認します。

```
lspci | grep Hailo
```

正しい結果は以下のように表示されます:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>


### プロジェクトをクローン:

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
```

### モデルをRaspberry Pi 5にコピー:

`hailomodel`という名前のディレクトリを作成します。

```
mkdir hailomodel
```

:::note
以下のコマンドはホストコンピュータ上で実行する必要があります。Raspberry Pi 5では実行しないでください。ホストコンピュータとRaspberry Pi 5が同じネットワークに接続されていることを確認してください。
:::

```
scp -r ./yolomodel/runs/detect/retrain_yolov8n/weights/yolov8n.hef username@ip /home/pi/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/hailomodel/
```

### コードの変更

`object-detection-hailo.py`の105行目と106行目を以下のように変更してください:
```
        elif args.network == "yolov8n":
            self.hef_path = os.path.join(self.current_path, './hailomodel/yolov8n.hef')   
```

`object-detection-hailo.py`の172行目を以下のように変更してください:
```
    parser.add_argument("--network", default="yolov8n", choices=['yolov6n', 'yolov8s', 'yolox_s_leaky'], help="Which Network to use, defult is yolov6n")
```

### コードを実行:

```
bash run.sh object-detection-hailo
```

## 結果

以下の動画では、YOLOv8nモデルのトレーニングプロセスとRaspberry Pi 5へのデプロイを示しています。バッチサイズを8、入力サイズを640x640、入力動画のフレームレートを240fpsに設定しました。推論速度は136.7fpsに達し、ほとんどのアプリケーションシナリオにおいて非常に高速です。

<div align="center">
<iframe width="800" height="400" src="https://www.youtube.com/embed/mVNrEVpvvuc" title="YOLOv8n Object Detection on Raspberry Pi 5 with AI Kit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>