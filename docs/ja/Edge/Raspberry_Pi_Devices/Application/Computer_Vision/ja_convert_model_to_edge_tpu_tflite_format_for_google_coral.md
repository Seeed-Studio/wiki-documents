---
description: このWikiでは、TensorFlowモデルまたはPyTorchモデルをEdge TPUモデルにコンパイルし、実行する方法を示します。
title: Google Coral用のEdge TPU TFlite形式へのモデル変換
keywords:
  - Edge TPU
  - rpi5
  - M.2 coral
  - Tensorflow
  - Pytorch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/convert_model_to_edge_tpu_tflite_format_for_google_coral
last_update:
  date: 05/15/2025
  author: Jiahao

no_comments: false # Disqus用
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Google Coral用のEdge TPU TFlite形式へのモデル変換
## はじめに

[Coral M.2 Accelerator](https://www.seeedstudio.com/Coral-M2-Accelerator-with-Dual-Edge-TPU-p-4681.html)は、デュアルEdge TPUを搭載したM.2モジュールで、M.2 Eキーのスロットが利用可能な既存のシステムや製品にEdge TPUコプロセッサを追加します。[TensorFlow](https://www.tensorflow.org/)と[PyTorch](https://pytorch.org/)は、最も人気のあるディープラーニングフレームワークです。そのため、Edge TPUを使用するには、モデルをEdge TPU形式にコンパイルする必要があります。

この記事では、モデルをコンパイルしてGoogle Coral TPU上で実行するプロセスを案内し、高性能な機械学習アプリケーションのためにその能力を活用する方法を説明します。

## ハードウェアの準備

<div class="table-center">
	<table align="center">
	<tr>
		<th>Raspberry Pi 5 8GB</th>
		<th>Raspberry Pi M.2 HAT+</th>
		<th>Coral M.2 Accelerator B+Mキー</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102110919-raspberry-pi-5-8gb-font.jpg" style={{width:600, height:'auto'}}/></div></td>
	  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-103990663-raspberry-pi-m.2-hat_-_for-raspberry-pi-5_-font.jpg" style={{width:600, height:'auto'}}/></div></td>
	   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992124-front.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-M-2-HAT-for-Raspberry-Pi-5-p-5881.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## ハードウェアのインストール

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/pycoral_install.gif" alt="pir" width={1000} height="auto"/></p>

## モデルの変換

:::note
開始する前に、[インストールガイド](https://wiki.seeedstudio.com/ja/install_m2_coral_to_rpi5/)に従ってGoogle Coral TPUをPi 5にインストールしていることを確認してください。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Tensorflowモデルの場合">

:::note
すべてのプロセスはPython 3.11.9でテストされています。
:::
### Tensorflowのインストール

```
pip install tensorflow
```
### tflite_converterの確認

```
tflite_convert -h
```

結果は以下のようになります：
```
2024-07-23 10:41:03.750087: I tensorflow/core/platform/cpu_feature_guard.cc:182] このTensorFlowバイナリは、パフォーマンスクリティカルな操作で利用可能なCPU命令を使用するように最適化されています。
以下の命令を有効にするには：AVX2 FMA、他の操作では適切なコンパイラフラグでTensorFlowを再構築してください。
2024-07-23 10:41:04.276520: W tensorflow/compiler/tf2tensorrt/utils/py_utils.cc:38] TF-TRT警告：TensorRTが見つかりませんでした
使用法: tflite_convert [-h] --output_file OUTPUT_FILE [--saved_model_dir SAVED_MODEL_DIR | --keras_model_file KERAS_MODEL_FILE] [--saved_model_tag_set SAVED_MODEL_TAG_SET]
                      [--saved_model_signature_key SAVED_MODEL_SIGNATURE_KEY] [--enable_v1_converter] [--experimental_new_converter [EXPERIMENTAL_NEW_CONVERTER]]
                      [--experimental_new_quantizer [EXPERIMENTAL_NEW_QUANTIZER]]

TensorFlow Lite Converterを実行するためのコマンドラインツール。

オプションの引数:
  -h, --help            このヘルプメッセージを表示して終了します。
  --output_file OUTPUT_FILE
                        出力ファイルの完全なファイルパス。
  --saved_model_dir SAVED_MODEL_DIR
                        SavedModelを含むディレクトリの完全なパス。
  --keras_model_file KERAS_MODEL_FILE
                        tf.Kerasモデルを含むHDF5ファイルの完全なファイルパス。
  --saved_model_tag_set SAVED_MODEL_TAG_SET
                        分析するSavedModel内のMetaGraphDefを識別するタグのコンマ区切りセット。すべてのタグが存在する必要があります。空のタグセットを渡すには、""を渡します。（デフォルト "serve"）
  --saved_model_signature_key SAVED_MODEL_SIGNATURE_KEY
                        入力と出力を含むSignatureDefを識別するキー。（デフォルト DEFAULT_SERVING_SIGNATURE_DEF_KEY）
  --enable_v1_converter
                        2.0でTensorFlow V1コンバーターを有効にします。
  --experimental_new_converter [EXPERIMENTAL_NEW_CONVERTER]
                        実験的なフラグ、変更される可能性があります。TOCO変換の代わりにMLIRベースの変換を有効にします。（デフォルト True）
  --experimental_new_quantizer [EXPERIMENTAL_NEW_QUANTIZER]
                        実験的なフラグ、変更される可能性があります。flatbuffer変換の代わりにMLIRベースの量子化器を有効にします。（デフォルト True）

```
### TensorflowモデルをTFliteモデルに変換

```
tflite_convert --saved_model_dir=YOUR_MODEL_PATH --output_file=YOUR_MODEL_NAME.tflite
```
### TFliteモデルをEdge TPUモデルに変換

:::note
TFliteモデルをEdge TPUモデルに変換する前に、モデルを最適化する必要があります。[Tensorflowモデルの最適化](https://www.tensorflow.org/lite/performance/model_optimization)を確認してください。
:::

#### edgetpuコンパイラのインストール

```
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list

sudo apt-get update

sudo apt-get install edgetpu-compiler
```
#### TFliteモデルをEdge TPUモデルに変換

```
edgetpu_compiler YOUR_MODEL_NAME.tflite
```
これで新しいファイル`YOUR_MODEL_NAME_edgetpu.tflite`が生成されます。


</TabItem>

<TabItem value="Method 2" label="Pytorchモデルの場合">

:::note
この方法は推奨されません。実際のプロセスで多くの競合するパッケージが存在するためです。また、TensorFlow Liteは限られた操作セットをサポートしており、一部のPyTorch操作がサポートされない可能性があります。
:::

### PytorchモデルをTFliteモデルに変換

#### 依存関係のインストール

```
pip install -r https://github.com/google-ai-edge/ai-edge-torch/releases/download/v0.1.1/requirements.txt
pip install ai-edge-torch==0.1.1
```

#### 変換
```
import ai_edge_torch
import numpy
import torch
import torchvision


resnet18 = torchvision.models.resnet18(torchvision.models.ResNet18_Weights.IMAGENET1K_V1).eval()
sample_inputs = (torch.randn(1, 3, 224, 224),)
torch_output = resnet18(*sample_inputs)

edge_model = ai_edge_torch.convert(resnet18.eval(), sample_inputs)

edge_model.export('resnet.tflite')
```

これで```resnet.tflite```が生成されます。

### tflite_converterの確認
:::note
TFliteモデルをEdge TPUモデルに変換する前に、モデルを最適化する必要があります。[Tensorflowモデルの最適化](https://www.tensorflow.org/lite/performance/model_optimization)を確認してください。
:::
```
tflite_convert -h
```

結果は以下のようになります：
```
2024-07-23 10:41:03.750087: I tensorflow/core/platform/cpu_feature_guard.cc:182] このTensorFlowバイナリは、パフォーマンスクリティカルな操作で利用可能なCPU命令を使用するように最適化されています。
以下の命令を有効にするには：AVX2 FMA、他の操作では適切なコンパイラフラグでTensorFlowを再構築してください。
2024-07-23 10:41:04.276520: W tensorflow/compiler/tf2tensorrt/utils/py_utils.cc:38] TF-TRT警告：TensorRTが見つかりませんでした
使用法: tflite_convert [-h] --output_file OUTPUT_FILE [--saved_model_dir SAVED_MODEL_DIR | --keras_model_file KERAS_MODEL_FILE] [--saved_model_tag_set SAVED_MODEL_TAG_SET]
                      [--saved_model_signature_key SAVED_MODEL_SIGNATURE_KEY] [--enable_v1_converter] [--experimental_new_converter [EXPERIMENTAL_NEW_CONVERTER]]
                      [--experimental_new_quantizer [EXPERIMENTAL_NEW_QUANTIZER]]

TensorFlow Lite Converterを実行するためのコマンドラインツール。

オプションの引数:
  -h, --help            このヘルプメッセージを表示して終了します。
  --output_file OUTPUT_FILE
                        出力ファイルの完全なファイルパス。
  --saved_model_dir SAVED_MODEL_DIR
                        SavedModelを含むディレクトリの完全なパス。
  --keras_model_file KERAS_MODEL_FILE
                        tf.Kerasモデルを含むHDF5ファイルの完全なファイルパス。
  --saved_model_tag_set SAVED_MODEL_TAG_SET
                        分析するSavedModel内のMetaGraphDefを識別するタグのコンマ区切りセット。すべてのタグが存在する必要があります。空のタグセットを渡すには、""を渡します。（デフォルト "serve"）
  --saved_model_signature_key SAVED_MODEL_SIGNATURE_KEY
                        入力と出力を含むSignatureDefを識別するキー。（デフォルト DEFAULT_SERVING_SIGNATURE_DEF_KEY）
  --enable_v1_converter
                        2.0でTensorFlow V1コンバーターを有効にします。
  --experimental_new_converter [EXPERIMENTAL_NEW_CONVERTER]
                        実験的なフラグ、変更される可能性があります。TOCO変換の代わりにMLIRベースの変換を有効にします。（デフォルト True）
  --experimental_new_quantizer [EXPERIMENTAL_NEW_QUANTIZER]
                        実験的なフラグ、変更される可能性があります。flatbuffer変換の代わりにMLIRベースの量子化器を有効にします。（デフォルト True）
```

### TFliteモデルをEdge TPUモデルに変換する

#### edgetpuコンパイラのインストール

```
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list

sudo apt-get update

sudo apt-get install edgetpu-compiler
```

#### TFliteモデルをEdge TPUモデルに変換する

```
edgetpu_compiler resnet18.tflite
```
その後、新しいファイル `resnet18_edgetpu.tflite` が生成されるはずです。

</TabItem>


<TabItem value="Method 3" label="Yoloモデルの場合">

### Ultralyticsのインストール

```
pip install ultralytics 
```

### YOLOモデルをEdge TPUモデルに変換する

```
# 例えば、yolov8n.ptをyolov8n_integer_quant_edgetpu.tfliteに変換したい場合

yolo export model=yolov8n.pt format=edge int8=True

```
結果は以下のようになります:
```
jiahao@PC:~/yolov8s_saved_model$ ls
assets          saved_model.pb          yolov8s_float32.tflite                     yolov8s_full_integer_quant.tflite
fingerprint.pb  variables               yolov8s_full_integer_quant_edgetpu.log     yolov8s_int8.tflite
metadata.yaml   yolov8s_float16.tflite  yolov8s_full_integer_quant_edgetpu.tflite  yolov8s_integer_quant.tflite
```

`yolov8s_full_integer_quant_edgetpu.tflite` が必要なモデルです。

### 他のTFliteモデルをEdge TPUモデルに変換するには、以下のコマンドを使用できます:

```
# 例えば、yolov8s_int8.tfliteをEdge TPUモデルに変換する場合
edgetpu_compiler yolov8s_int8.tflite

```

</TabItem>
</Tabs>


## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
