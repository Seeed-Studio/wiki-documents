---
description: TensorRTを使用してNVIDIA JetsonにYOLOv8をデプロイ - データラベル、AIモデル訓練、AIモデルデプロイ
title: TensorRTでYOLOv8をデプロイ
tags:
  - Data Label
  - AI model train
  - AI model deploy
  - Yolov8
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/YOLOv8-TRT-Jetson
last_update:
  date: 07/17/2023
  author: Lakshantha
---

# TensorRTを使用してNVIDIA JetsonにYOLOv8をデプロイ

このwikiガイドでは、YOLOv8モデルをNVIDIA Jetsonプラットフォームにデプロイし、TensorRTを使用して推論を実行する方法を説明します。ここでは、Jetsonプラットフォームでの推論性能を最大化するためにTensorRTを使用します。

以下のような様々なコンピュータビジョンタスクを紹介します：

- 物体検出
- 画像セグメンテーション
- 画像分類
- ポーズ推定
- 物体追跡

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/8.gif
" style={{width:1000, height:'auto'}}/></div>

## 前提条件

- Ubuntu ホストPC（ネイティブまたはVMware Workstation Playerを使用したVM）
- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)またはJetPack 5.1.1以上を実行している他のNVIDIA Jetsonデバイス

:::note
このwikiは[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)およびNVIDIA Jetson orin NX 16GBモジュールを搭載したreComputer Industrial J4012[https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html]でテストおよび検証されています
:::

## JetsonにJetPackをフラッシュ

Jetsonデバイスが[JetPack](https://developer.nvidia.com/embedded/jetpack)システムでフラッシュされていることを確認する必要があります。NVIDIA SDK Managerまたはコマンドラインを使用してデバイスにJetPackをフラッシュできます。

Seeed Jetson搭載デバイスのフラッシュガイドについては、以下のリンクを参照してください：

- [reComputer J1010 | J101](https://wiki.seeedstudio.com/ja/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/ja/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/ja/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/ja/reComputer_J4012_Flash_Jetpack)
- [A203 Carrier Board](https://wiki.seeedstudio.com/ja/reComputer_A203_Flash_System)
- [A205 Carrier Board](https://wiki.seeedstudio.com/ja/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01 Kit](https://wiki.seeedstudio.com/ja/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 Kit](https://wiki.seeedstudio.com/ja/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

:::note
このwikiで検証したバージョンであるため、JetPackバージョン5.1.1をフラッシュするようにしてください
:::

## 1行のコードでJetsonにYOLOV8をデプロイ！

JetsonデバイスにJetPackをフラッシュした後、以下のコマンドを実行するだけでYOLOv8モデルを実行できます。これにより、まず必要なパッケージと依存関係をダウンロードしてインストールし、環境をセットアップし、YOLOv8から事前訓練済みモデルをダウンロードして、物体検出、画像セグメンテーション、ポーズ推定、画像分類タスクを実行します！

```sh
wget files.seeedstudio.com/YOLOv8-Jetson.py && python YOLOv8-Jetson.py
```

:::note
上記スクリプトのソースコードは[こちら](https://github.com/yuyoujiang/Run-YOLOv8-in-One-Line-on-Jetson)で確認できます
:::

## 事前学習済みモデルの使用

YOLOv8を始める最も速い方法は、YOLOv8が提供する事前学習済みモデルを使用することです。ただし、これらはPyTorchモデルであるため、Jetsonで推論を行う際にはCPUのみを利用します。JetsonでこれらのモデルをGPU上で実行して最高のパフォーマンスを得たい場合は、このwikiのセクションに従ってPyTorchモデルをTensorRTにエクスポートできます。

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="detec" label="Object Detection">

YOLOv8は、COCOデータセットで入力画像サイズ640x640で学習された、物体検出用の5つの事前学習済みPyTorchモデル重みを提供しています。以下で確認できます

<table>
  <thead>
    <tr>
      <th>Model</th>
      <th>size<br />(pixels)</th>
      <th>mAPval<br />50-95</th>
      <th>Speed<br />CPU ONNX<br />(ms)</th>
      <th>Speed<br />A100 TensorRT<br />(ms)</th>
      <th>params<br />(M)</th>
      <th>FLOPs<br />(B)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8n.pt" target="_blank" rel="noopener noreferrer">YOLOv8n</a></td>
      <td>640</td>
      <td>37.3</td>
      <td>80.4</td>
      <td>0.99</td>
      <td>3.2</td>
      <td>8.7</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8s.pt" target="_blank" rel="noopener noreferrer">YOLOv8s</a></td>
      <td>640</td>
      <td>44.9</td>
      <td>128.4</td>
      <td>1.20</td>
      <td>11.2</td>
      <td>28.6</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8m.pt" target="_blank" rel="noopener noreferrer">YOLOv8m</a></td>
      <td>640</td>
      <td>50.2</td>
      <td>234.7</td>
      <td>1.83</td>
      <td>25.9</td>
      <td>78.9</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8l.pt" target="_blank" rel="noopener noreferrer">YOLOv8l</a></td>
      <td>640</td>
      <td>52.9</td>
      <td>375.2</td>
      <td>2.39</td>
      <td>43.7</td>
      <td>165.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8x.pt" target="_blank" rel="noopener noreferrer">YOLOv8x</a></td>
      <td>640</td>
      <td>53.9</td>
      <td>479.1</td>
      <td>3.53</td>
      <td>68.2</td>
      <td>257.8</td>
    </tr>
  </tbody>
</table>

参考: https://docs.ultralytics.com/tasks/detect

上記の表から希望するモデルを選択してダウンロードし、以下のコマンドを実行して画像に対する推論を実行できます

```sh
yolo detect predict model=yolov8n.pt source='https://ultralytics.com/images/bus.jpg' show=True
```

モデルについては、yolov8s.pt、yolov8m.pt、yolov8l.pt、yolov8x.ptのいずれかに変更することができ、関連する事前訓練済みモデルがダウンロードされます

ウェブカメラを接続して以下のコマンドを実行することもできます

```sh
yolo detect predict model=yolov8n.pt source='0' show=True
```

:::note
上記のコマンドを実行する際にエラーが発生した場合は、コマンドの最後に「device=0」を追加してみてください
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/2.gif
" style={{width:1000, height:'auto'}}/></div>

:::note
上記は reComputer J4012/ reComputer Industrial J4012 で実行され、640x640 入力で訓練された YOLOv8s モデルを使用し、TensorRT FP16 精度を使用しています。
:::

</TabItem>
<TabItem value="classfiy" label="Image Classification">

YOLOv8 は、ImageNet で 224x224 の入力画像サイズで訓練された、画像分類用の 5 つの事前訓練済み PyTorch モデル重みを提供しています。以下で確認できます

<table>
  <thead>
    <tr>
      <th>Model</th>
      <th>size<br />(pixels)</th>
      <th>acc<br />top1</th>
      <th>acc<br />top5<br /></th>
      <th>Speed<br />CPU ONNX<br />(ms)<br /></th>
      <th>Speed<br />A100 TensorRT<br />(ms)<br /><br /></th>
      <th>params<br />(M)<br /></th>
      <th>FLOPs<br />(B) at 640</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>YOLOv8n-cls</td>
      <td>224</td>
      <td>66.6</td>
      <td>87.0</td>
      <td>12.9</td>
      <td>0.31</td>
      <td>2.7</td>
      <td>4.3</td>
    </tr>
    <tr>
      <td>YOLOv8s-cls</td>
      <td>224</td>
      <td>72.3</td>
      <td>91.1</td>
      <td>23.4</td>
      <td>0.35</td>
      <td>6.4</td>
      <td>13.5</td>
    </tr>
    <tr>
      <td>YOLOv8m-cls</td>
      <td>224</td>
      <td>76.4</td>
      <td>93.2</td>
      <td>85.4</td>
      <td>0.62</td>
      <td>17.0</td>
      <td>42.7</td>
    </tr>
    <tr>
      <td>YOLOv8l-cls</td>
      <td>224</td>
      <td>78.0</td>
      <td>94.1</td>
      <td>163.0</td>
      <td>0.87</td>
      <td>37.5</td>
      <td>99.7</td>
    </tr>
    <tr>
      <td> YOLOv8x-cls</td>
      <td>224</td>
      <td>78.4</td>
      <td>94.3</td>
      <td>232.0</td>
      <td>1.01</td>
      <td>57.4</td>
      <td>154.8</td>
    </tr>
  </tbody>
</table>

参考: https://docs.ultralytics.com/tasks/classify

お好みのモデルを選択し、以下のコマンドを実行して画像に対する推論を実行できます

```sh
yolo classify predict model=yolov8n-cls.pt source='https://ultralytics.com/images/bus.jpg' show=True
```

モデルについては、yolov8s-cls.pt、yolov8m-cls.pt、yolov8l-cls.pt、yolov8x-cls.ptのいずれかに変更でき、関連する事前訓練済みモデルがダウンロードされます

ウェブカメラを接続して以下のコマンドを実行することもできます

```sh
yolo classify predict model=yolov8n-cls.pt source='0' show=True
```

:::note
上記のコマンドを実行する際にエラーが発生した場合は、コマンドの最後に「device=0」を追加してみてください
:::

（224推論での更新）
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/5.gif
" style={{width:1000, height:'auto'}}/></div>

:::note
上記はreComputer J4012/ reComputer Industrial J4012で実行され、224x224入力で訓練されたYOLOv8s-clsモデルを使用し、TensorRT FP16精度を使用しています。また、TensorRTエクスポートでの推論コマンド内で引数**imgsz=224**を渡すことを確認してください。推論エンジンはTensorRTモデルを使用する際、デフォルトで640画像サイズを受け入れるためです。
:::

</TabItem>
<TabItem value="segment" label="Image Segmentation">

YOLOv8は、COCOデータセットで入力画像サイズ640x640で訓練された、画像セグメンテーション用の5つの事前訓練済みPyTorchモデル重みを提供しています。以下で確認できます

<table>
  <thead>
    <tr>
      <th>Model</th>
      <th>size<br />(pixels)</th>
      <th>mAPbox<br />50-95</th>
      <th>mAPmask<br />50-95</th>
      <th>Speed<br />CPU ONNX<br />(ms)</th>
      <th>Speed<br />A100 TensorRT<br />(ms)</th>
      <th>params<br />(M)</th>
      <th>FLOPs<br />(B)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8n-seg.pt">YOLOv8n-seg</a></td>
      <td>640</td>
      <td>36.7</td>
      <td>30.5</td>
      <td>96.1</td>
      <td>1.21</td>
      <td>3.4</td>
      <td>12.6</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8s-seg.pt">YOLOv8s-seg</a></td>
      <td>640</td>
      <td>44.6</td>
      <td>36.8</td>
      <td>155.7</td>
      <td>1.47</td>
      <td>11.8</td>
      <td>42.6</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8m-seg.pt">YOLOv8m-seg</a></td>
      <td>640</td>
      <td>49.9</td>
      <td>40.8</td>
      <td>317.0</td>
      <td>2.18</td>
      <td>27.3</td>
      <td>110.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8l-seg.pt">YOLOv8l-seg</a></td>
      <td>640</td>
      <td>52.3</td>
      <td>42.6</td>
      <td>572.4</td>
      <td>2.79</td>
      <td>46.0</td>
      <td>220.5</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8x-seg.pt">YOLOv8x-seg</a></td>
      <td>640</td>
      <td>53.4</td>
      <td>43.4</td>
      <td>712.1</td>
      <td>4.02</td>
      <td>71.8</td>
      <td>344.1</td>
    </tr>
  </tbody>
</table>

参考: https://docs.ultralytics.com/tasks/segment

お好みのモデルを選択し、以下のコマンドを実行して画像で推論を実行できます

```sh
yolo segment predict model=yolov8n-seg.pt source='https://ultralytics.com/images/bus.jpg' show=True
```

モデルについては、yolov8s-seg.pt、yolov8m-seg.pt、yolov8l-seg.pt、yolov8x-seg.ptのいずれかに変更することができ、関連する事前訓練済みモデルがダウンロードされます

ウェブカメラを接続して以下のコマンドを実行することもできます

```sh
yolo segment predict model=yolov8n-seg.pt source='0' show=True
```

:::note
上記のコマンドを実行する際にエラーが発生した場合は、コマンドの最後に「device=0」を追加してみてください
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/3.gif
" style={{width:1000, height:'auto'}}/></div>

:::note
上記はreComputer J4012/ reComputer Industrial J4012で実行され、640x640入力でトレーニングされたYOLOv8s-segモデルを使用し、TensorRT FP16精度を使用しています。
:::

</TabItem>
<TabItem value="pose" label="Pose Estimation">

YOLOv8は、COCO keypointsデータセットで入力画像サイズ640x640でトレーニングされた、ポーズ推定用の6つの事前トレーニング済みPyTorchモデル重みを提供しています。以下で確認できます

<table>
  <thead>
    <tr>
      <th>Model</th>
      <th>size<br />(pixels)</th>
      <th>mAPpose<br />50-95</th>
      <th>mAPpose<br />50</th>
      <th>Speed<br />CPU ONNX<br />(ms)</th>
      <th>Speed<br />A100 TensorRT<br />(ms)</th>
      <th>params<br />(M)</th>
      <th>FLOPs<br />(B)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8n-pose.pt">YOLOv8n-pose</a></td>
      <td>640</td>
      <td>50.4</td>
      <td>80.1</td>
      <td>131.8</td>
      <td>1.18</td>
      <td>3.3</td>
      <td>9.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8s-pose.pt">YOLOv8s-pose</a></td>
      <td>640</td>
      <td>60.0</td>
      <td>86.2</td>
      <td>233.2</td>
      <td>1.42</td>
      <td>11.6</td>
      <td>30.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8m-pose.pt">YOLOv8m-pose</a></td>
      <td>640</td>
      <td>65.0</td>
      <td>88.8</td>
      <td>456.3</td>
      <td>2.00</td>
      <td>26.4</td>
      <td>81.0</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8l-pose.pt">YOLOv8l-pose</a></td>
      <td>640</td>
      <td>67.6</td>
      <td>90.0</td>
      <td>784.5</td>
      <td>2.59</td>
      <td>44.4</td>
      <td>168.6</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8x-pose.pt">YOLOv8x-pose</a></td>
      <td>640</td>
      <td>69.2</td>
      <td>90.2</td>
      <td>1607.1</td>
      <td>3.73</td>
      <td>69.4</td>
      <td>263.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8x-pose-p6.pt">YOLOv8x-pose-p6</a></td>
      <td>1280</td>
      <td>71.6</td>
      <td>91.2</td>
      <td>4088.7</td>
      <td>10.04</td>
      <td>99.1</td>
      <td>1066.4</td>
    </tr>
  </tbody>
</table>

参考: https://docs.ultralytics.com/tasks/pose

お好みのモデルを選択し、以下のコマンドを実行して画像で推論を実行できます

```sh
yolo pose predict model=yolov8n-pose.pt source='https://ultralytics.com/images/bus.jpg'
```

ここでモデルについては、yolov8s-pose.pt、yolov8m-pose.pt、yolov8l-pose.pt、yolov8x-pose.pt、yolov8x-pose-p6のいずれかに変更することができ、関連する事前訓練済みモデルがダウンロードされます

また、ウェブカメラを接続して以下のコマンドを実行することもできます

```sh
yolo pose predict model=yolov8n-pose.pt source='0'
```

:::note
上記のコマンドを実行する際にエラーが発生した場合は、コマンドの末尾に「device=0」を追加してみてください
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/4.gif
" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="track" label="Object Tracking">

オブジェクトトラッキングは、オブジェクトの位置とクラスを識別し、ビデオストリーム内でその検出に一意のIDを割り当てるタスクです。

基本的に、オブジェクトトラッキングの出力は、オブジェクトIDが追加されたオブジェクト検出と同じです。

参考: https://docs.ultralytics.com/modes/track

オブジェクト検出/画像セグメンテーションに基づいて希望するモデルを選択し、以下のコマンドを実行してビデオで推論を実行できます

```sh
yolo track model=yolov8n.pt source="https://youtu.be/Zgi9g1ksQHc"
```

ここでモデルについては、yolov8n.pt、yolov8s.pt、yolov8m.pt、yolov8l.pt、yolov8x.pt、yolov8n-seg.pt、yolov8s-seg.pt、yolov8m-seg.pt、yolov8l-seg.pt、yolov8x-seg.ptのいずれかに変更でき、関連する事前訓練済みモデルがダウンロードされます

ウェブカメラを接続して以下のコマンドを実行することもできます

```sh
yolo track model=yolov8n.pt source="0"
```

:::note
上記のコマンドを実行する際にエラーが発生した場合は、コマンドの最後に「device=0」を追加してみてください
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/6.gif
" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/7.gif
" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

<!-- Code END -->

---

## TensorRTを使用して推論速度を向上させる

前述したように、JetsonでYOLOv8モデルを実行する際の推論速度を向上させたい場合は、まず元のPyTorchモデルをTensorRTモデルに変換する必要があります。

以下の手順に従って、YOLOv8 PyTorchモデルをTensorRTモデルに変換してください。

:::note
これは前述した4つのコンピュータビジョンタスクすべてに対応しています
:::

- **ステップ1.** モデルパスを指定してエクスポートコマンドを実行する

```sh
yolo export model=<path_to_pt_file> format=engine device=0
```

例えば：

```sh
yolo export model=yolov8n.pt format=engine device=0
```

:::note
cmakeに関するエラーが発生した場合は、無視してください。TensorRTのエクスポートが完了するまでお待ちください。数分かかる場合があります
:::

TensorRTモデルファイル（.engine）が作成された後、以下のような出力が表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/1.jpg
" style={{width:800, height:'auto'}}/></div>

- **ステップ 2.** 追加の引数を渡したい場合は、以下の表に従って実行できます

<table>
<thead>
  <tr>
    <th>キー</th>
    <th>値</th>
    <th>説明</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>imgsz</td>
    <td>640</td>
    <td>スカラーまたは(h, w)リストとしての画像サイズ、例：(640, 480)</td>
  </tr>
  <tr>
    <td>half</td>
    <td>False</td>
    <td>FP16量子化</td>
  </tr>
  <tr>
    <td>dynamic</td>
    <td>False</td>
    <td>動的軸</td>
  </tr>
  <tr>
    <td>simplify</td>
    <td>False</td>
    <td>モデルの簡素化</td>
  </tr>
  <tr>
    <td>workspace</td>
    <td>4</td>
    <td>ワークスペースサイズ（GB）</td>
  </tr>
</tbody>
</table>

例えば、PyTorchモデルをFP16量子化でTensorRTモデルに変換したい場合は、以下のように実行します

```sh
yolo export model=yolov8n.pt format=engine half=True device=0
```

モデルのエクスポートが正常に完了したら、検出、分類、セグメンテーション、姿勢推定の4つのタスクすべてを実行する際に、**yolo**の**predict**コマンド内の**model=**引数でこのモデルを直接置き換えることができます。

例えば、物体検出の場合：

```sh
yolo detect predict model=yolov8n.engine source='0' show=True
```

## 独自のAIモデルを持ち込む

### データ収集とラベリング

特定のAIアプリケーションがあり、そのアプリケーションに適した独自のAIモデルを持ち込みたい場合は、独自のデータセットを収集し、ラベル付けを行い、YOLOv8を使用してトレーニングすることができます。

自分でデータを収集したくない場合は、すぐに利用できる公開データセットを選択することもできます。[COCOデータセット](https://cocodataset.org)、[Pascal VOCデータセット](http://host.robots.ox.ac.uk/pascal/VOC)など、多数の公開データセットをダウンロードできます。[Roboflow Universe](https://universe.roboflow.com)は、幅広いデータセットを提供する推奨プラットフォームで、コンピュータビジョンモデルの構築に利用できる[90,000以上のデータセットと6,600万以上の画像](https://blog.roboflow.com/computer-vision-datasets-and-apis)が利用可能です。また、Googleでオープンソースデータセットを検索し、利用可能な様々なデータセットから選択することもできます。

独自のデータセットがあり、画像にアノテーションを付けたい場合は、[Roboflow](https://roboflow.com)が提供するアノテーションツールの使用をお勧めします。詳細については、[このwikiの部分](https://wiki.seeedstudio.com/ja/YOLOv5-Object-Detection-Jetson/#annotate-dataset-using-roboflow)に従ってください。また、アノテーションについてはRoboflowの[このガイド](https://docs.roboflow.com/annotate/use-roboflow-annotate)に従うこともできます。

### トレーニング

ここでは、モデルをトレーニングする3つの方法があります。

1. 最初の方法は[Ultralytics HUB](https://ultralytics.com/hub)を使用することです。RoboflowをUltralytics HUBに簡単に統合できるため、すべてのRoboflowプロジェクトがトレーニングにすぐに利用できるようになります。ここでは、トレーニングプロセスを簡単に開始し、リアルタイムでトレーニングの進行状況を表示するGoogle Colabノートブックを提供しています。

2. 2番目の方法は、トレーニングプロセスを簡単にするために私たちが作成したGoogle Colabワークスペースを使用することです。ここでは、Roboflow APIを使用してRoboflowプロジェクトからデータセットをダウンロードします。

3. 3番目の方法は、トレーニングプロセスにローカルPCを使用することです。ここでは、十分に強力なGPUがあることを確認し、データセットを手動でダウンロードする必要があります。

<!-- Code -->

<Tabs>
<TabItem value="Ultralytics" label="Ultralytics HUB + Roboflow + Google Colab">

ここでは、Ultralytics HUBを使用してRoboflowプロジェクトを読み込み、Google Colabでトレーニングを行います。

- **ステップ1.** [このURL](https://hub.ultralytics.com/signup)にアクセスし、Ultralyticsアカウントにサインアップします

- **ステップ2.** 新しく作成したアカウントでサインインすると、以下のダッシュボードが表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/2.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ3.** [このURL](https://app.roboflow.com/login)にアクセスし、Roboflowアカウントにサインアップします

- **ステップ4.** 新しく作成したアカウントでサインインすると、以下のダッシュボードが表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/11.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ5.** 私たちが準備した[このwikiガイド](https://wiki.seeedstudio.com/ja/YOLOv5-Object-Detection-Jetson/#annotate-dataset-using-roboflow)に従って、新しいワークスペースを作成し、ワークスペース内に新しいプロジェクトを作成します。公式Roboflowドキュメントから詳細を学ぶには、[こちらを確認](https://blog.roboflow.com/getting-started-with-roboflow)することもできます。

- **ステップ6.** ワークスペース内にいくつかのプロジェクトができると、以下のようになります

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/12.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ7.** **Settings**に移動し、**Roboflow API**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/13.jpg
" style={{width:300, height:'auto'}}/></div>

- **ステップ8.** **copy**ボタンをクリックして**Private API Key**をコピーします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/14.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ9.** Ultralytics HUBダッシュボードに戻り、**Integrations**をクリックし、先ほどコピーしたAPI Keyを空の列に貼り付けて**Add**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/15.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ10** ワークスペース名がリストに表示されていれば、統合が成功したことを意味します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/16.jpg
" style={{width:550, height:'auto'}}/></div>

- **ステップ11** **Datasets**に移動すると、すべてのRoboflowプロジェクトがここに表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/17.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ12** プロジェクトをクリックして、データセットの詳細を確認します。ここでは、健康なリンゴと損傷したリンゴを検出できるデータセットを選択しました

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/18.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ13** **Train Model**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/19.jpg
" style={{width:500, height:'auto'}}/></div>

- **ステップ14** **Architecture**を選択し、**Model name（オプション）**を設定してから**Continue**をクリックします。ここでは、モデルアーキテクチャとしてYOLOv8sを選択しました

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/22.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ15** **Advanced options**で、お好みに応じて設定を構成し、Colabコード（これは後でColabワークスペースに貼り付けられます）をコピー＆ペーストしてから**Open Google Colab**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/24.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ16** まだサインインしていない場合は、Googleアカウントにサインインします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/25.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ 17** `Runtime > Change runtime type` に移動します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/26.jpg
" style={{width:500, height:'auto'}}/></div>

- **ステップ 18** **Hardware accelerator** で **GPU** を選択し、**GPU type** で利用可能な最高のものを選択して **Save** をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/27.jpg
" style={{width:500, height:'auto'}}/></div>

- **ステップ 19** **Connect** をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/28.jpg
" style={{width:250, height:'auto'}}/></div>

- **ステップ 20** **RAM, Disk** ボタンをクリックしてハードウェアリソースの使用状況を確認します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/31.jpg
" style={{width:600, height:'auto'}}/></div>

- **ステップ 21** **Play** ボタンをクリックして最初のコードセルを実行します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/29.jpg
" style={{width:750, height:'auto'}}/></div>

- **ステップ 22** 先ほど Ultralytics HUB からコピーしたコードセルを **Start** セクションの下に貼り付けて実行し、トレーニングを開始します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/30.jpg
" style={{width:650, height:'auto'}}/></div>

- **ステップ 23** Ultralytics HUB に戻ると、**Connected** というメッセージが表示されます。**Done** をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/32.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ 24** ここで、Google Colab でモデルがトレーニングされている間、**Box Loss、Class Loss、Object Loss** がリアルタイムで表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/33.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ 25** トレーニングが完了すると、Google Colab で以下の出力が表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/34.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ 26** Ultralytics HUB に戻り、**Preview** タブに移動してテスト画像をアップロードし、トレーニング済みモデルの性能を確認します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/35.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ 26** 最後に **Deploy** タブに移動し、YOLOv8 で推論するために好みの形式でトレーニング済みモデルをダウンロードします。ここでは PyTorch を選択しました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/36.png
" style={{width:1000, height:'auto'}}/></div>

これで、ダウンロードしたモデルを、このwikiで以前に説明したタスクで使用できます。モデルファイルをあなたのモデルに置き換えるだけです。

例えば：

```
yolo detect predict model=<your_model.pt> source='0' show=True
```

</TabItem>
<TabItem value="Roboflow" label="Roboflow + Google Colab">

ここでは、Google Colaboratory環境を使用してクラウド上でトレーニングを実行します。さらに、Colab内でRoboflow APIを使用してデータセットを簡単にダウンロードします。

- **ステップ 1.** [こちら](https://colab.research.google.com/gist/lakshanthad/9fbe33058cb7cab49ac8fc345143d849/yolov5-training-for-jetson.ipynb)をクリックして、すでに準備されたGoogle Colabワークスペースを開き、ワークスペースに記載されている手順を実行してください

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/39.jpg
" style={{width:800, height:'auto'}}/></div>

トレーニングが完了すると、以下のような出力が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/40.jpg
" style={{width:800, height:'auto'}}/></div>

- **ステップ 2.** Filesタブで、`runs/train/exp/weights`に移動すると、**best.pt**というファイルが表示されます。これがトレーニングから生成されたモデルです。このファイルをダウンロードしてJetsonデバイスにコピーしてください。これは後でJetsonデバイス上での推論に使用するモデルです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/41.jpg
" style={{width:500, height:'auto'}}/></div>

これで、ダウンロードしたモデルを、このwikiで以前に説明したタスクで使用できます。モデルファイルをあなたのモデルに置き換えるだけです。

例えば：

```
yolo detect predict model=<your_model.pt> source='0' show=True
```

</TabItem>
<TabItem value="PC" label="Roboflow + ローカルPC">

ここでは、トレーニング用にLinux OSを搭載したPCを使用できます。このwikiではUbuntu 20.04 PCを使用しています。

- **ステップ 1.** システムにpipがない場合は、pipをインストールします

```sh
sudo apt install python3-pip -y
```

- **ステップ 2.** 依存関係と共にUltralyticsをインストールする

```sh
pip install ultralytics
```

- **ステップ 3.** Roboflowで、プロジェクト内の**Versions**に移動し、**Export Dataset**を選択し、**Format**を**YOLOv8**として選択し、**download zip to computer**を選択して**Continue**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/42.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ 4.** ダウンロードしたzipファイルを展開します

- **ステップ 5.** 以下を実行してトレーニングを開始します。ここで、**path_to_yaml**を、先ほど展開したzipファイル内にある.yamlファイルの場所に置き換える必要があります

```sh
yolo train data=<path_to_yaml> model=yolov8s.pt epochs=100 imgsz=640 batch=-1
```

:::note
ここで画像サイズは640x640に設定されています。batch-sizeは-1を使用しています。これにより最適なバッチサイズが自動的に決定されます。お好みに応じてエポック数も変更できます。ここでは事前学習済みモデルを任意の検出、セグメンテーション、分類、ポーズモデルに変更できます。
:::

トレーニングが完了すると、以下のような出力が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/43.png
" style={{width:1000, height:'auto'}}/></div>

- **ステップ 6.** **runs/detect/train/weights**の下に、**best.pt**というファイルが表示されます。これがトレーニングから生成されたモデルです。このファイルをダウンロードしてJetsonデバイスにコピーしてください。これが後でJetsonデバイスでの推論に使用するモデルです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/44.png
" style={{width:500, height:'auto'}}/></div>

これで、ダウンロードしたモデルを、このwikiで以前に説明したタスクで使用できます。モデルファイルをあなたのモデルに置き換えるだけです。

例えば：

```
yolo detect predict model=<your_model.pt> source='0' show=True
```

</TabItem>
</Tabs>

<!-- Code END -->

---

## パフォーマンスベンチマーク

### 準備

NVIDIA Jetson Orin NX 16GBモジュールを搭載したreComputer J4012/ reComputer Industrial J4012で動作するYOLOv8がサポートするすべてのコンピュータビジョンタスクについて、パフォーマンスベンチマークを実施しました。

samplesディレクトリには、[trtexec](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html#trtexec)というコマンドラインラッパーツールが含まれています。trtexecは、独自のアプリケーションを開発することなくTensorRTを使用するためのツールです。trtexecツールには3つの主要な目的があります：

- ランダムまたはユーザー提供の入力データでネットワークをベンチマークする
- モデルからシリアル化されたエンジンを生成する
- ビルダーからシリアル化されたタイミングキャッシュを生成する

ここでは、trtexecツールを使用して、異なるパラメータでモデルを迅速にベンチマークできます。しかし、まずonnxモデルが必要であり、このonnxモデルはultralytics yolov8を使用して生成できます。

- **ステップ 1.** 以下を使用してONNXをビルドします：

```sh
yolo mode=export model=yolov8s.pt format=onnx
```

- **ステップ 2.** 以下のようにtrtexecを使用してエンジンファイルをビルドします：

```sh
cd /usr/src/tensorrt/bin
./trtexec --onnx=<path_to_onnx_file> --saveEngine=<path_to_save_engine_file>
```

例えば：

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --saveEngine=/home/nvidia/yolov8s.engine
```

これにより、生成された .engine ファイルと共に以下のようなパフォーマンス結果が出力されます。デフォルトでは、ONNX を FP32 精度で TensorRT 最適化ファイルに変換し、以下のような出力を確認できます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/46.jpg
" style={{width:1000, height:'auto'}}/></div>

**FP32** よりも優れたパフォーマンスを提供する **FP16** 精度を使用したい場合は、上記のコマンドを以下のように実行できます

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --fp16 --saveEngine=/home/nvidia/yolov8s.engine 
```

ただし、**FP16**よりも優れたパフォーマンスを提供する**INT8**精度が必要な場合は、上記のコマンドを次のように実行できます

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --int8 --saveEngine=/home/nvidia/yolov8s.engine 
```

### 結果

以下に、reComputer J4012/ reComputer Industrial J4012で実行した4つのコンピュータビジョンタスクすべてから得られた結果をまとめます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/45.png
" style={{width:1000, height:'auto'}}/></div>

## ボーナスデモ：YOLOv8を使用したエクササイズ検出・カウンター

YOLOv8-Poseモデルを使用して、YOLOv8でエクササイズ検出とカウントを行うポーズ推定デモアプリケーションを構築しました。このデモの詳細を学び、独自のJetsonデバイスにデプロイするには、[こちら](https://github.com/yuyoujiang/Exercise-Counter-with-YOLOv8-on-NVIDIA-Jetson)のプロジェクトをご確認ください！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/9.gif
" style={{width:1000, height:'auto'}}/></div>

## NVIDIA Jetson用YOLOv8の手動セットアップ

前述のワンラインスクリプトでエラーが発生した場合は、以下の手順を一つずつ実行してJetsonデバイスでYOLOv8を準備できます。

### Ultralyticsパッケージのインストール

- **ステップ1.** Jetsonデバイスのターミナルにアクセスしてpipをインストールし、アップグレードします

```sh
sudo apt update
sudo apt install -y python3-pip -y
pip3 install --upgrade pip
```

- **ステップ 2.** Ultralyticsパッケージをインストールする

```sh
pip3 install ultralytics
```

- **ステップ 3.**  numpy のバージョンを最新にアップグレードする

```sh
pip3 install numpy -U
```

- **ステップ 4.** デバイスを再起動する

```sh
sudo reboot
```

### Torch と Torchvision のアンインストール

上記の ultralytics インストールにより、Torch と Torchvision がインストールされます。しかし、pip 経由でインストールされたこれら 2 つのパッケージは、**ARM aarch64 アーキテクチャ**ベースの Jetson プラットフォーム上では動作しません。そのため、事前にビルドされた PyTorch pip wheel を手動でインストールし、Torchvision をソースからコンパイル/インストールする必要があります。

```sh
pip3 uninstall torch torchvision
```

### PyTorchとTorchvisionのインストール

[このページ](https://forums.developer.nvidia.com/t/pytorch-for-jetson)にアクセスして、すべてのPyTorchとTorchvisionのリンクを確認してください。

以下はJetPack 5.0以降でサポートされているバージョンの一部です。

**PyTorch v2.0.0**

JetPack 5.1 (L4T R35.2.1) / JetPack 5.1.1 (L4T R35.3.1) でPython 3.8をサポート

**file_name:** torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl
**URL:** https://nvidia.box.com/shared/static/i8pukc49h3lhak4kkn67tg9j4goqm0m7.whl

**PyTorch v1.13.0**

JetPack 5.0 (L4T R34.1) / JetPack 5.0.2 (L4T R35.1) / JetPack 5.1 (L4T R35.2.1) / JetPack 5.1.1 (L4T R35.3.1) でPython 3.8をサポート

**file_name:** torch-1.13.0a0+d0d6b1f2.nv22.10-cp38-cp38-linux_aarch64.whl
**URL:** https://developer.download.nvidia.com/compute/redist/jp/v502/pytorch/torch-1.13.0a0+d0d6b1f2.nv22.10-cp38-cp38-linux_aarch64.whl

- **ステップ1.** お使いのJetPackバージョンに応じて、以下の形式でtorchをインストールしてください
pip3

```sh
wget <URL> -O <file_name>
pip3 install <file_name>
```

例えば、ここでは **JP5.1.1** を実行しているため、**PyTorch v2.0.0** を選択します

```sh
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://nvidia.box.com/shared/static/i8pukc49h3lhak4kkn67tg9j4goqm0m7.whl -O torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl
pip3 install torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl
```

- **ステップ 2.** インストールしたPyTorchのバージョンに応じてtorchvisionをインストールします。例えば、PyTorch v2.0.0を選択した場合、Torchvision v0.15.2を選択する必要があります

```sh
sudo apt install -y libjpeg-dev zlib1g-dev
git clone https://github.com/pytorch/vision torchvision
cd torchvision
git checkout v0.15.2
python3 setup.py install --user
```

PyTorchのバージョンに応じてインストールする必要があるtorchvisionバージョンの対応リストは以下の通りです：

- PyTorch v2.0.0 - torchvision v0.15
- PyTorch v1.13.0 - torchvision v0.14

より詳細なリストが必要な場合は、[このリンク](https://github.com/pytorch/vision)をご確認ください。

### ONNXのインストールとNumpyのダウングレード

これはPyTorchモデルをTensorRTに変換したい場合にのみ必要です

- **ステップ1.** 必要なONNXをインストールします

```sh
pip3 install onnx
```

- **ステップ 2.** エラーを修正するために Numpy を低いバージョンにダウングレードする

```sh
pip3 install numpy==1.20.3
```

## リソース

- [YOLOv8 ドキュメント](https://docs.ultralytics.com)
- [Roboflow ドキュメント](https://docs.roboflow.com)
- [TensorRT ドキュメント](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
