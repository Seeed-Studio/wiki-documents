---
description: YOLOv8 を NVIDIA Jetson 上で TensorRT を使用してデプロイ - データラベル、AI モデルのトレーニング、AI モデルのデプロイ
title: TensorRT を使用した YOLOv8 のデプロイ
tags:
  - データラベル
  - AI モデルトレーニング
  - AI モデルデプロイ
  - Yolov8
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/YOLOv8-TRT-Jetson
last_update:
  date: 05/15/2025
  author: Lakshantha
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# TensorRT を使用して NVIDIA Jetson 上で YOLOv8 をデプロイ

このウィキガイドでは、YOLOv8 モデルを NVIDIA Jetson プラットフォームにデプロイし、TensorRT を使用して推論を実行する方法を説明します。ここでは、Jetson プラットフォーム上で推論性能を最大化するために TensorRT を使用します。

以下のようなさまざまなコンピュータビジョンタスクがここで紹介されます：

- オブジェクト検出
- 画像セグメンテーション
- 画像分類
- ポーズ推定
- オブジェクト追跡

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/8.gif
" style={{width:1000, height:'auto'}}/></div>

## 前提条件

- Ubuntu ホスト PC（ネイティブまたは VMware Workstation Player を使用した仮想マシン）
- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) または JetPack 5.1.1 以上を実行しているその他の NVIDIA Jetson デバイス

:::note
このウィキは、NVIDIA Jetson Orin NX 16GB モジュールを搭載した [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) および reComputer Industrial J4012[https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html] でテストおよび検証されています。
:::

## Jetson に JetPack をフラッシュする

まず、Jetson デバイスに [JetPack](https://developer.nvidia.com/embedded/jetpack) システムがフラッシュされていることを確認する必要があります。JetPack をデバイスにフラッシュするには、NVIDIA SDK Manager またはコマンドラインを使用できます。

Seeed の Jetson 搭載デバイスのフラッシュガイドについては、以下のリンクを参照してください：
- [reComputer J1010 | J101](https://wiki.seeedstudio.com/ja/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/ja/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/ja/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/ja/reComputer_J4012_Flash_Jetpack)
- [A203 キャリアボード](https://wiki.seeedstudio.com/ja/reComputer_A203_Flash_System)
- [A205 キャリアボード](https://wiki.seeedstudio.com/ja/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01 キット](https://wiki.seeedstudio.com/ja/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 キット](https://wiki.seeedstudio.com/ja/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

:::note
JetPack バージョン 5.1.1 をフラッシュしてください。このウィキではそのバージョンで検証されています。
:::

## 1 行のコードで Jetson に YOLOv8 をデプロイ！

Jetson デバイスに JetPack をフラッシュした後、以下のコマンドを実行するだけで YOLOv8 モデルを実行できます。このコマンドは、必要なパッケージや依存関係をダウンロードしてインストールし、環境をセットアップし、YOLOv8 から事前学習済みモデルをダウンロードして、オブジェクト検出、画像セグメンテーション、ポーズ推定、画像分類タスクを実行します！

```sh
wget files.seeedstudio.com/YOLOv8-Jetson.py && python YOLOv8-Jetson.py
```

:::note
上記スクリプトのソースコードは [こちら](https://github.com/yuyoujiang/Run-YOLOv8-in-One-Line-on-Jetson) で確認できます。
:::

## 事前学習済みモデルの使用

YOLOv8を使用する最も簡単な方法は、YOLOv8が提供する事前学習済みモデルを使用することです。ただし、これらはPyTorchモデルであるため、Jetsonで推論を行う際にはCPUのみを使用します。JetsonでGPUを使用してこれらのモデルを最高のパフォーマンスで実行したい場合は、このWikiのセクションに従ってPyTorchモデルをTensorRTにエクスポートしてください。

<!-- コード -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="detec" label="物体検出">

YOLOv8はCOCOデータセットで学習された、入力画像サイズ640x640の物体検出用の5つの事前学習済みPyTorchモデルウェイトを提供しています。以下にそれらを示します。

<table>
  <thead>
    <tr>
      <th>モデル</th>
      <th>サイズ<br />(ピクセル)</th>
      <th>mAPval<br />50-95</th>
      <th>速度<br />CPU ONNX<br />(ms)</th>
      <th>速度<br />A100 TensorRT<br />(ms)</th>
      <th>パラメータ<br />(M)</th>
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

上記の表から希望するモデルを選択してダウンロードし、以下のコマンドを実行して画像に対して推論を行うことができます。

```sh
yolo detect predict model=yolov8n.pt source='https://ultralytics.com/images/bus.jpg' show=True
```

ここで、モデルをyolov8s.pt、yolov8m.pt、yolov8l.pt、yolov8x.ptに変更すると、関連する事前学習済みモデルがダウンロードされます。

また、ウェブカメラを接続して以下のコマンドを実行することもできます。

```sh
yolo detect predict model=yolov8n.pt source='0' show=True
```

:::note
上記のコマンドを実行してエラーが発生した場合は、コマンドの最後に「device=0」を追加してみてください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/2.gif
" style={{width:1000, height:'auto'}}/></div>

:::note
上記はreComputer J4012/ reComputer Industrial J4012で実行され、640x640入力で学習されたYOLOv8sモデルを使用し、TensorRT FP16精度を使用しています。
:::

</TabItem>
<TabItem value="classfiy" label="画像分類">

YOLOv8はImageNetで学習された、入力画像サイズ224x224の画像分類用の5つの事前学習済みPyTorchモデルウェイトを提供しています。以下にそれらを示します。

<table>
  <thead>
    <tr>
      <th>モデル</th>
      <th>サイズ<br />(ピクセル)</th>
      <th>精度<br />top1</th>
      <th>精度<br />top5<br /></th>
      <th>速度<br />CPU ONNX<br />(ms)<br /></th>
      <th>速度<br />A100 TensorRT<br />(ms)<br /><br /></th>
      <th>パラメータ<br />(M)<br /></th>
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

希望するモデルを選択して以下のコマンドを実行し、画像に対して推論を行うことができます。

```sh
yolo classify predict model=yolov8n-cls.pt source='https://ultralytics.com/images/bus.jpg' show=True
```

ここで、モデルをyolov8s-cls.pt、yolov8m-cls.pt、yolov8l-cls.pt、yolov8x-cls.ptに変更すると、関連する事前学習済みモデルがダウンロードされます。

また、ウェブカメラを接続して以下のコマンドを実行することもできます。

```sh
yolo classify predict model=yolov8n-cls.pt source='0' show=True
```

:::note
上記のコマンドを実行してエラーが発生した場合は、コマンドの最後に「device=0」を追加してみてください。
:::

(update with 224 inference)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/5.gif
" style={{width:1000, height:'auto'}}/></div>

:::note
上記はreComputer J4012/ reComputer Industrial J4012で実行され、224x224入力で学習されたYOLOv8s-clsモデルを使用し、TensorRT FP16精度を使用しています。また、TensorRTモデルを使用する場合、推論エンジンがデフォルトで640の画像サイズを受け入れるため、推論コマンド内に**imgsz=224**引数を渡すことを忘れないでください。
:::

</TabItem>
<TabItem value="segment" label="画像セグメンテーション">

YOLOv8は、COCOデータセットで640x640の入力画像サイズでトレーニングされた画像セグメンテーション用の5つの事前学習済みPyTorchモデルウェイトを提供しています。以下にそれらを示します。

<table>
  <thead>
    <tr>
      <th>モデル</th>
      <th>サイズ<br />(ピクセル)</th>
      <th>mAPbox<br />50-95</th>
      <th>mAPmask<br />50-95</th>
      <th>速度<br />CPU ONNX<br />(ms)</th>
      <th>速度<br />A100 TensorRT<br />(ms)</th>
      <th>パラメータ<br />(M)</th>
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

以下のコマンドを実行して、画像に対して推論を行うために希望するモデルを選択できます。

```sh
yolo segment predict model=yolov8n-seg.pt source='https://ultralytics.com/images/bus.jpg' show=True
```

ここで、モデルをyolov8s-seg.pt、yolov8m-seg.pt、yolov8l-seg.pt、yolov8x-seg.ptに変更すると、関連する事前学習済みモデルがダウンロードされます。

また、ウェブカメラを接続して以下のコマンドを実行することもできます。

```sh
yolo segment predict model=yolov8n-seg.pt source='0' show=True
```

:::note
上記のコマンドを実行する際にエラーが発生した場合は、コマンドの末尾に「device=0」を追加してみてください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/3.gif
" style={{width:1000, height:'auto'}}/></div>

:::note
上記はreComputer J4012/ reComputer Industrial J4012で実行され、640x640の入力でトレーニングされたYOLOv8s-segモデルを使用し、TensorRT FP16精度を使用しています。
:::

</TabItem>
<TabItem value="pose" label="ポーズ推定">

YOLOv8は、COCOキーポイントデータセットで640x640の入力画像サイズでトレーニングされたポーズ推定用の6つの事前学習済みPyTorchモデルウェイトを提供しています。以下にそれらを示します。

<table>
  <thead>
    <tr>
      <th>モデル</th>
      <th>サイズ<br />(ピクセル)</th>
      <th>mAPpose<br />50-95</th>
      <th>mAPpose<br />50</th>
      <th>速度<br />CPU ONNX<br />(ms)</th>
      <th>速度<br />A100 TensorRT<br />(ms)</th>
      <th>パラメータ<br />(M)</th>
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

以下のコマンドを実行して、画像に対して推論を行うために希望するモデルを選択できます。

```sh
yolo pose predict model=yolov8n-pose.pt source='https://ultralytics.com/images/bus.jpg'
```

ここで、モデルをyolov8s-pose.pt、yolov8m-pose.pt、yolov8l-pose.pt、yolov8x-pose.pt、yolov8x-pose-p6に変更すると、関連する事前学習済みモデルがダウンロードされます。

また、ウェブカメラを接続して以下のコマンドを実行することもできます。

```sh
yolo pose predict model=yolov8n-pose.pt source='0'
```

:::note
上記のコマンドを実行する際にエラーが発生した場合は、コマンドの末尾に「device=0」を追加してみてください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/4.gif
" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="track" label="オブジェクト追跡">

オブジェクト追跡は、ビデオストリーム内でオブジェクトの位置とクラスを特定し、その検出に一意のIDを割り当てるタスクです。

基本的に、オブジェクト追跡の出力は、オブジェクト検出の出力にオブジェクトIDが追加されたものと同じです。

参照: https://docs.ultralytics.com/modes/track

以下のコマンドを実行して、オブジェクト検出/画像セグメンテーションに基づいたモデルを選択し、ビデオで推論を実行できます。

```sh
yolo track model=yolov8n.pt source="https://youtu.be/Zgi9g1ksQHc"
```

ここで、`model`には`yolov8n.pt`、`yolov8s.pt`、`yolov8m.pt`、`yolov8l.pt`、`yolov8x.pt`、`yolov8n-seg.pt`、`yolov8s-seg.pt`、`yolov8m-seg.pt`、`yolov8l-seg.pt`、`yolov8x-seg.pt`のいずれかを指定できます。これにより、関連する事前学習済みモデルがダウンロードされます。

また、ウェブカメラを接続して以下のコマンドを実行することもできます。

```sh
yolo track model=yolov8n.pt source="0"
```

:::note
上記のコマンドを実行中にエラーが発生した場合は、コマンドの末尾に`device=0`を追加してみてください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/6.gif" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/7.gif" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

---

## TensorRTを使用して推論速度を向上させる

前述の通り、Jetson上でYOLOv8モデルを実行する際に推論速度を向上させたい場合は、まず元のPyTorchモデルをTensorRTモデルに変換する必要があります。

以下の手順に従って、YOLOv8 PyTorchモデルをTensorRTモデルに変換してください。

:::note
これは、前述した4つのコンピュータビジョンタスクすべてに対応しています。
:::

- **ステップ1.** モデルパスを指定してエクスポートコマンドを実行します。

```sh
yolo export model=<path_to_pt_file> format=engine device=0
```

例:

```sh
yolo export model=yolov8n.pt format=engine device=0
```

:::note
`cmake`に関するエラーが発生した場合は無視してください。TensorRTのエクスポートが完了するまで数分かかる場合がありますので、しばらくお待ちください。
:::

TensorRTモデルファイル（`.engine`）が作成されると、以下のような出力が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/1.jpg" style={{width:800, height:'auto'}}/></div>

- **ステップ2.** 追加の引数を渡したい場合は、以下の表を参照してください。

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
    <td>モデルの簡略化</td>
  </tr>
  <tr>
    <td>workspace</td>
    <td>4</td>
    <td>ワークスペースサイズ（GB）</td>
  </tr>
</tbody>
</table>

例えば、PyTorchモデルをFP16量子化でTensorRTモデルに変換したい場合は、以下を実行します。

```sh
yolo export model=yolov8n.pt format=engine half=True device=0
```

モデルが正常にエクスポートされると、**yolo**の**predict**コマンド内の**model=**引数にこのモデルを直接置き換えることができます。これにより、検出、分類、セグメンテーション、ポーズ推定の4つのタスクすべてを実行できます。

例えば、オブジェクト検出の場合:

```sh
yolo detect predict model=yolov8n.engine source='0' show=True
```

## 独自のAIモデルを持ち込む

### データ収集とラベリング

特定のAIアプリケーションを持ち、アプリケーションに適した独自のAIモデルを使用したい場合は、独自のデータセットを収集し、それにラベルを付けた後、YOLOv8を使用してトレーニングを行うことができます。

自分でデータを収集したくない場合は、すぐに利用可能な公開データセットを選ぶこともできます。[COCOデータセット](https://cocodataset.org)、[Pascal VOCデータセット](http://host.robots.ox.ac.uk/pascal/VOC)など、多くの公開データセットをダウンロードできます。[Roboflow Universe](https://universe.roboflow.com)は、幅広いデータセットを提供する推奨プラットフォームであり、[90,000以上のデータセットと6,600万以上の画像](https://blog.roboflow.com/computer-vision-datasets-and-apis)がコンピュータビジョンモデルの構築に利用可能です。また、Googleでオープンソースのデータセットを検索し、利用可能なさまざまなデータセットから選ぶこともできます。

独自のデータセットを持っていて画像に注釈を付けたい場合は、[Roboflow](https://roboflow.com)が提供する注釈ツールを使用することをお勧めします。詳細については、[このWikiの部分](https://wiki.seeedstudio.com/ja/YOLOv5-Object-Detection-Jetson/#annotate-dataset-using-roboflow)を参照してください。また、Roboflowの注釈に関する[このガイド](https://docs.roboflow.com/annotate/use-roboflow-annotate)も参考にしてください。

### トレーニング

ここでは、モデルをトレーニングするための3つの方法を紹介します。

1. 最初の方法は、[Ultralytics HUB](https://ultralytics.com/hub)を使用することです。RoboflowをUltralytics HUBに簡単に統合できるため、すべてのRoboflowプロジェクトがトレーニングにすぐに利用可能になります。ここでは、Google Colabノートブックを使用してトレーニングプロセスを簡単に開始し、リアルタイムでトレーニングの進行状況を確認できます。

2. 2番目の方法は、トレーニングプロセスを簡単にするために作成されたGoogle Colabワークスペースを使用することです。ここでは、Roboflow APIを使用してRoboflowプロジェクトからデータセットをダウンロードします。

3. 3番目の方法は、ローカルPCを使用してトレーニングプロセスを実行することです。この場合、十分に強力なGPUを持っていることを確認し、データセットを手動でダウンロードする必要があります。

<!-- コード -->

<Tabs>
<TabItem value="Ultralytics" label="Ultralytics HUB + Roboflow + Google Colab">

ここでは、Ultralytics HUBを使用してRoboflowプロジェクトを読み込み、Google Colabでトレーニングを行います。

- **ステップ1.** [このURL](https://hub.ultralytics.com/signup)にアクセスしてUltralyticsアカウントにサインアップします。

- **ステップ2.** 新しく作成したアカウントでサインインすると、以下のダッシュボードが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/2.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ3.** [このURL](https://app.roboflow.com/login)にアクセスしてRoboflowアカウントにサインアップします。

- **ステップ4.** 新しく作成したアカウントでサインインすると、以下のダッシュボードが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/11.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ5.** 新しいワークスペースを作成し、[このWikiガイド](https://wiki.seeedstudio.com/ja/YOLOv5-Object-Detection-Jetson/#annotate-dataset-using-roboflow)に従ってワークスペース内に新しいプロジェクトを作成します。また、公式のRoboflowドキュメントから[こちら](https://blog.roboflow.com/getting-started-with-roboflow)を参照してさらに学ぶこともできます。

- **ステップ6.** ワークスペース内にいくつかのプロジェクトがある場合、以下のように表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/12.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ7.** **Settings**に移動し、**Roboflow API**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/13.jpg
" style={{width:300, height:'auto'}}/></div>

- **ステップ8.** **Private API Key**をコピーするために**コピー**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/14.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ9.** Ultralytics HUBダッシュボードに戻り、**Integrations**をクリックし、先ほどコピーしたAPIキーを空欄に貼り付けて**Add**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/15.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ10.** ワークスペース名がリストに表示されている場合、統合が成功したことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/16.jpg
" style={{width:550, height:'auto'}}/></div>

- **ステップ11.** **Datasets**に移動すると、すべてのRoboflowプロジェクトがここに表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/17.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ12.** プロジェクトをクリックしてデータセットの詳細を確認します。ここでは、健康なリンゴと損傷したリンゴを検出できるデータセットを選択しました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/18.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ13.** **Train Model**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/19.jpg
" style={{width:500, height:'auto'}}/></div>

- **ステップ14.** **Architecture**を選択し、**Model name (optional)**を設定してから**Continue**をクリックします。ここでは、モデルアーキテクチャとしてYOLOv8sを選択しました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/22.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ15.** **Advanced options**で設定を好みに応じて構成し、Colabコードをコピーして（後でColabワークスペースに貼り付けます）、**Open Google Colab**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/24.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ16.** まだGoogleアカウントにサインインしていない場合は、サインインします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/25.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ 17** `Runtime > Change runtime type` に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/26.jpg
" style={{width:500, height:'auto'}}/></div>

- **ステップ 18** **Hardware accelerator** の下で **GPU** を選択し、**GPU type** で利用可能な最高のものを選び、**Save** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/27.jpg
" style={{width:500, height:'auto'}}/></div>

- **ステップ 19** **Connect** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/28.jpg
" style={{width:250, height:'auto'}}/></div>

- **ステップ 20** **RAM, Disk** ボタンをクリックして、ハードウェアリソースの使用状況を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/31.jpg
" style={{width:600, height:'auto'}}/></div>

- **ステップ 21** 最初のコードセルを実行するために **Play** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/29.jpg
" style={{width:750, height:'auto'}}/></div>

- **ステップ 22** 以前に Ultralytics HUB からコピーしたコードセルを **Start** セクションの下に貼り付け、それを実行してトレーニングを開始します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/30.jpg
" style={{width:650, height:'auto'}}/></div>

- **ステップ 23** Ultralytics HUB に戻ると、**Connected** というメッセージが表示されます。**Done** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/32.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ 24** Google Colab 上でモデルがトレーニングされている間、リアルタイムで **Box Loss, Class Loss, Object Loss** を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/33.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ 25** トレーニングが終了すると、Google Colab 上で以下のような出力が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/34.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ 26** Ultralytics HUB に戻り、**Preview** タブに移動してテスト画像をアップロードし、トレーニング済みモデルのパフォーマンスを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/35.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ 27** 最後に **Deploy** タブに移動し、推論に使用する形式でトレーニング済みモデルをダウンロードします。ここでは PyTorch を選択しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/36.png
" style={{width:1000, height:'auto'}}/></div>

これで、このダウンロードしたモデルを以前にこの Wiki で説明したタスクで使用できます。モデルファイルを自分のモデルに置き換えるだけです。

例えば：
```
yolo detect predict model=<your_model.pt> source='0' show=True
```

</TabItem>
<TabItem value="Roboflow" label="Roboflow + Google Colab">

ここでは、Google Colaboratory 環境を使用してクラウド上でトレーニングを実行します。さらに、Colab 内で Roboflow API を使用してデータセットを簡単にダウンロードします。

- **ステップ 1.** [こちら](https://colab.research.google.com/gist/lakshanthad/9fbe33058cb7cab49ac8fc345143d849/yolov5-training-for-jetson.ipynb) をクリックして、すでに準備された Google Colab ワークスペースを開き、ワークスペース内の手順を進めてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/39.jpg
" style={{width:800, height:'auto'}}/></div>

トレーニングが完了すると、以下のような出力が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/40.jpg
" style={{width:800, height:'auto'}}/></div>

- **ステップ 2.** Files タブの下で、`runs/train/exp/weights` に移動すると、**best.pt** というファイルが表示されます。これがトレーニングから生成されたモデルです。このファイルをダウンロードして Jetson デバイスにコピーします。このモデルは後で Jetson デバイスで推論に使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/41.jpg
" style={{width:500, height:'auto'}}/></div>

これで、このダウンロードしたモデルを以前にこの Wiki で説明したタスクで使用できます。モデルファイルを自分のモデルに置き換えるだけです。

例えば：
```
yolo detect predict model=<your_model.pt> source='0' show=True
```

</TabItem>
<TabItem value="PC" label="Roboflow + Local PC">

ここでは、Linux OS を搭載した PC を使用してトレーニングを行います。この Wiki では Ubuntu 20.04 PC を使用しています。

- **ステップ 1.** システムに pip がインストールされていない場合は、pip をインストールします。

```sh
sudo apt install python3-pip -y
```

- **ステップ 2.** Ultralytics とその依存関係をインストールします。

```sh
pip install ultralytics
```

- **ステップ 3.** Roboflow 内のプロジェクトで **Versions** に移動し、**Export Dataset** を選択します。**Format** を **YOLOv8** に設定し、**download zip to computer** を選択して **Continue** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/42.jpg
" style={{width:1000, height:'auto'}}/></div>

- **ステップ 4.** ダウンロードした zip ファイルを解凍します。

- **ステップ 5.** 以下を実行してトレーニングを開始します。ここで **path_to_yaml** を、解凍した zip ファイル内にある .yaml ファイルの場所に置き換えてください。

```sh
yolo train data=<path_to_yaml> model=yolov8s.pt epochs=100 imgsz=640 batch=-1
```

:::note
ここでは画像サイズを 640x640 に設定しています。バッチサイズを -1 に設定すると、最適なバッチサイズが自動的に決定されます。また、エポック数はお好みに応じて変更できます。ここでは、事前学習済みモデルを任意の detect、segment、classify、pose モデルに変更することもできます。
:::

トレーニングが完了すると、以下のような出力が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/43.png
" style={{width:1000, height:'auto'}}/></div>

- **ステップ 6.** **runs/detect/train/weights** フォルダ内に **best.pt** というファイルが表示されます。これはトレーニングから生成されたモデルです。このファイルをダウンロードし、Jetson デバイスにコピーしてください。このモデルは後で Jetson デバイスで推論に使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/44.png
" style={{width:500, height:'auto'}}/></div>

これで、このダウンロードしたモデルを以前にこの Wiki で説明したタスクに使用できます。モデルファイルを自分のモデルに置き換えるだけです。

例えば：
```
yolo detect predict model=<your_model.pt> source='0' show=True
```

</TabItem>
</Tabs>

<!-- コード終了 -->

---

## パフォーマンスベンチマーク

### 準備

YOLOv8 がサポートするすべてのコンピュータビジョンタスクについて、NVIDIA Jetson Orin NX 16GB モジュールを搭載した reComputer J4012 / reComputer Industrial J4012 上でパフォーマンスベンチマークを実施しました。

サンプルディレクトリには [trtexec](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html#trtexec) というコマンドラインラッパーツールが含まれています。trtexec は、独自のアプリケーションを開発することなく TensorRT を使用するためのツールです。trtexec ツールには以下の3つの主な目的があります：

- ランダムまたはユーザー提供の入力データを使用したネットワークのベンチマーク。
- モデルからのシリアライズされたエンジンの生成。
- ビルダーからのシリアライズされたタイミングキャッシュの生成。

ここでは、trtexec ツールを使用して、異なるパラメータでモデルを迅速にベンチマークできます。しかし、まず ONNX モデルが必要であり、この ONNX モデルは ultralytics yolov8 を使用して生成できます。

- **ステップ 1.** ONNX をビルドする：

```sh
yolo mode=export model=yolov8s.pt format=onnx
```

- **ステップ 2.** trtexec を使用してエンジンファイルをビルドする：

```sh
cd /usr/src/tensorrt/bin
./trtexec --onnx=<path_to_onnx_file> --saveEngine=<path_to_save_engine_file>
```

例えば：

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --saveEngine=/home/nvidia/yolov8s.engine
```

これにより、以下のようなパフォーマンス結果が出力され、.engine ファイルが生成されます。デフォルトでは、ONNX を FP32 精度の TensorRT 最適化ファイルに変換し、以下のような出力が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/46.jpg
" style={{width:1000, height:'auto'}}/></div>

**FP16** 精度を使用したい場合（**FP32** よりも優れたパフォーマンスを提供）、以下のように上記のコマンドを実行できます：

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --fp16 --saveEngine=/home/nvidia/yolov8s.engine 
```

さらに、**INT8** 精度を使用したい場合（**FP16** よりも優れたパフォーマンスを提供）、以下のように上記のコマンドを実行できます：

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --int8 --saveEngine=/home/nvidia/yolov8s.engine 
```

### 結果

以下に、reComputer J4012 / reComputer Industrial J4012 上で実行された4つのコンピュータビジョンタスクから得られた結果をまとめます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/45.png
" style={{width:1000, height:'auto'}}/></div>

## ボーナスデモ：YOLOv8 を使用したエクササイズ検出およびカウンター

YOLOv8-Pose モデルを使用して、エクササイズ検出およびカウントのためのポーズ推定デモアプリケーションを構築しました。このデモについて詳しく知り、自分の Jetson デバイスにデプロイするには、[こちら](https://github.com/yuyoujiang/Exercise-Counter-with-YOLOv8-on-NVIDIA-Jetson) をご覧ください！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/9.gif
" style={{width:1000, height:'auto'}}/></div>

## NVIDIA Jetson 用 YOLOv8 の手動セットアップ

前述のワンラインスクリプトにエラーがある場合は、以下の手順を一つずつ実行して、Jetson デバイスを YOLOv8 に対応させることができます。

### Ultralytics パッケージのインストール

- **ステップ 1.** Jetson デバイスのターミナルにアクセスし、pip をインストールしてアップグレードします。

```sh
sudo apt update
sudo apt install -y python3-pip -y
pip3 install --upgrade pip
```

- **ステップ 2.** Ultralytics パッケージをインストールします。

```sh
pip3 install ultralytics
```

- **ステップ 3.** numpy のバージョンを最新にアップグレードします。

```sh
pip3 install numpy -U
```

- **ステップ 4.** デバイスを再起動します。

```sh
sudo reboot
```

### Torch と Torchvision のアンインストール

上記の Ultralytics のインストールにより Torch と Torchvision がインストールされます。しかし、pip 経由でインストールされたこれらの 2 つのパッケージは、**ARM aarch64 アーキテクチャ**に基づく Jetson プラットフォームでは互換性がありません。そのため、事前にビルドされた PyTorch の pip ホイールを手動でインストールし、Torchvision をソースからコンパイル/インストールする必要があります。

```sh
pip3 uninstall torch torchvision
```

### PyTorch と Torchvision のインストール

[こちらのページ](https://forums.developer.nvidia.com/t/pytorch-for-jetson) を訪問して、すべての PyTorch と Torchvision のリンクを確認してください。

以下は JetPack 5.0 以上でサポートされているバージョンの一部です。

**PyTorch v2.0.0**

JetPack 5.1 (L4T R35.2.1) / JetPack 5.1.1 (L4T R35.3.1) と Python 3.8 に対応

**ファイル名:** torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl  
**URL:** https://nvidia.box.com/shared/static/i8pukc49h3lhak4kkn67tg9j4goqm0m7.whl

**PyTorch v1.13.0**

JetPack 5.0 (L4T R34.1) / JetPack 5.0.2 (L4T R35.1) / JetPack 5.1 (L4T R35.2.1) / JetPack 5.1.1 (L4T R35.3.1) と Python 3.8 に対応

**ファイル名:** torch-1.13.0a0+d0d6b1f2.nv22.10-cp38-cp38-linux_aarch64.whl  
**URL:** https://developer.download.nvidia.com/compute/redist/jp/v502/pytorch/torch-1.13.0a0+d0d6b1f2.nv22.10-cp38-cp38-linux_aarch64.whl

- **ステップ 1.** 以下の形式で、JetPack バージョンに応じた torch をインストールします。

```sh
wget <URL> -O <file_name>
pip3 install <file_name>
```

例えば、**JP5.1.1** を使用している場合、**PyTorch v2.0.0** を選択します。

```sh
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://nvidia.box.com/shared/static/i8pukc49h3lhak4kkn67tg9j4goqm0m7.whl -O torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl
pip3 install torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl
```

- **ステップ 2.** インストールした PyTorch のバージョンに応じて torchvision をインストールします。例えば、PyTorch v2.0.0 を選択した場合、Torchvision v0.15.2 を選択します。

```sh
sudo apt install -y libjpeg-dev zlib1g-dev
git clone https://github.com/pytorch/vision torchvision
cd torchvision
git checkout v0.15.2
python3 setup.py install --user
```

以下は、PyTorch バージョンに応じた対応する torchvision バージョンのリストです：

- PyTorch v2.0.0 - torchvision v0.15
- PyTorch v1.13.0 - torchvision v0.14

より詳細なリストについては、[こちらのリンク](https://github.com/pytorch/vision) を確認してください。

### ONNX のインストールと Numpy のダウングレード

PyTorch モデルを TensorRT に変換したい場合のみ必要です。

- **ステップ 1.** 必須要件である ONNX をインストールします。

```sh
pip3 install onnx
```

- **ステップ 2.** エラーを修正するために Numpy を低いバージョンにダウングレードします。

```sh
pip3 install numpy==1.20.3
```

## リソース

- [YOLOv8 ドキュメント](https://docs.ultralytics.com)
- [Roboflow ドキュメント](https://docs.roboflow.com)
- [TensorRT ドキュメント](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートをご用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>