---
description: reCamera用のAIモデルの変換と量子化
title: モデル変換ガイド
keywords:
  - Edge
  - reCamera
image: https://files.seeedstudio.com/wiki/reCamera/013.jpg
slug: /ja/recamera_model_conversion
last_update:
  date: 10/18/2024
  author: Dayu Li
---

# AIモデルの変換と量子化

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/013.jpg" /></div>

**reCamera**のAIモデル変換ツールは現在、`PyTorch`、`ONNX`、`TFLite`、`Caffe`などのフレームワークをサポートしています。他のフレームワークのモデルは`ONNX`形式に変換する必要があります。他の深層学習アーキテクチャから`ONNX`にモデルを変換する方法については、ONNX公式ウェブサイトを参照してください：https://github.com/onnx/tutorials。

**reCamera**にAIモデルをデプロイするフロー図を以下に示します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/InferToolchain_Arch.png" /></div>
この記事では、簡単な例を通してreCameraのAIモデル変換ツールの使用方法を紹介します。

## 作業環境のセットアップ

### 方法1：Dockerイメージでのインストール（推奨）

[DockerHub（こちらをクリック）](https://hub.docker.com/r/sophgo/tpuc_dev)から必要なイメージをダウンロードし、**バージョン3.1**の使用を推奨します：

```bash
docker pull sophgo/tpuc_dev:v3.1
```

初回にDockerを使用する場合は、インストールと設定のために以下のコマンドを実行できます（初回セットアップ時のみ必要）：

```bash
sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
```

次に、現在のディレクトリに以下のようにコンテナを作成します：

```bash
docker run --privileged --name MyName -v $PWD:/workspace -it sophgo/tpuc_dev:v3.1
```

**`"MyName"`を希望するコンテナ名に置き換えてください*

Dockerコンテナ内で`pip`を使用して`tpu_mlir`をインストールします。`方法1`と同様です：

```bash
pip install tpu_mlir[all]==1.7
```

### 方法2: ローカルインストール

まず、現在のシステム環境が以下の要件を満たしているかを確認してください：

- [Ubuntu 22.04](#jump1)
- [Python 3.10](#jump2)

要件を満たしていない場合やインストールに失敗した場合は、`方法2`を選択してモデル変換ツールをインストールしてください。

`pip`を使用して`tpu_mlir`をインストール：

```bash
pip install tpu_mlir==1.7
```

`tpu_mlir`が必要とする依存関係は、異なるフレームワークからのモデルを処理する際に変わります。ONNXまたはTorchによって生成されたモデルファイルの場合、以下のコマンドを使用して追加の依存関係をインストールしてください：

```bash
pip install tpu_mlir[onnx]==1.7
pip install tpu_mlir[torch]==1.7
```

現在、5つの設定がサポートされています：onnx、torch、tensorflow、caffe、paddle。または、以下のコマンドを使用してすべての依存関係をインストールできます：

```bash
pip install tpu_mlir[all]==1.7
```

`tpu_mlir-{version}.whl` ファイルがローカルに既に存在する場合は、以下のコマンドを使用してインストールすることもできます：

```bash
pip install path/to/tpu_mlir-{version}.whl[all]
```

## AIモデルをcvimodel形式に変換・量子化する

### ONNXの準備

reCameraはすでにYOLOシリーズをローカル推論に適応させています。そのため、このセクションでは`yolo11n.onnx`を例として、ONNXモデルを`cvimodel`に変換する方法を説明します。
**`cvimodel`はreCamera上でローカル推論に使用されるAIモデル形式です。**

PyTorch、TFLite、Caffeモデルの変換・量子化方法は、このセクションと同じです。

以下はyolo11n.onnxのダウンロードリンクです。リンクをクリックしてモデルをダウンロードし、さらなる使用のために`Workspace`にコピーできます。

モデルをダウンロード：
[yolo11n.onnxをダウンロード](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ESj2_zJM4oxOiv62Hh1XKu8BA9gWPQy6zAGSXWd4VL--9w?e=tagPRA)
**このONNXファイルは、IRバージョンやOpsetバージョンを変更する必要なく、以下のセクションの例で直接使用できます。**
:::info
現在、このwikiのONNXは**IRバージョン8およびOpsetバージョン17**に基づいています。2024年12月以降にUltralyticsの例から変換されたONNXファイルの場合、より高いバージョンのため、後続のプロセスで問題が発生する可能性があります。
:::

[Netron](https://netron.app/)を使用してONNXファイルの情報を確認できます：

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/ONNX_IR_opset.jpg" />
</div>

**ONNXファイルがIR v8およびOpset v17より高い場合、ダウングレードを支援する例を提供します。** まず、pipを使用して`onnx`をインストールします：

```bash
pip install onnx
```

ONNXファイルのバージョンを変更するプログラムをGitHubからプルします：

```bash
git clone https://github.com/jjjadand/ONNX_Downgrade.git
cd ONNX_Downgrade/
```

入力と出力のモデルファイルパスをコマンドライン引数として提供してスクリプトを実行します：

```bash
python downgrade_onnx.py <input_model_path> <output_model_path> --target_ir_version <IR_version> --target_opset_version <Opset_version>
```

- `<input_model_path>`: ダウングレードしたい元のONNXモデルのパス。
- `<output_model_path>`: ダウングレードされたモデルが保存されるパス。
- --target_ir_version `<IR_version>`: オプション。ダウングレード先のIRバージョン。デフォルトは8。
- --target_opset_version `<Opset_version>`: オプション。ダウングレード先のOpsetバージョン。デフォルトは17。

例えば、デフォルトバージョン（IR v8、Opset v17）を使用する場合：

```bash
python downgrade_onnx.py model_v12.onnx model_v8.onnx
```

これにより `model_v12.onnx` が読み込まれ、IR バージョン 8 にダウングレードし、opset バージョン 17 を設定し、検証を行い、新しいモデルを `model_v8.onnx` として保存します。

カスタムバージョンの使用（IR v9、Opset v11）：

```bash
python downgrade_onnx.py model_v12.onnx model_v9.onnx --target_ir_version 9 --target_opset_version 11
```

これにより `model_v12.onnx` が読み込まれ、IR バージョン 9 にダウングレードし、opset バージョン 11 を設定し、検証を行い、新しいモデルを `model_v9.onnx` として保存します。

<p style={{ fontSize: '1.2em', color: 'yellow' , textAlign: 'left'}}>
  * エラーを避けるため、IR v8 と Opset v17 を使用した ONNX の使用を推奨します。
</p>

### ワークスペースの準備

`tpu-mlir` と同じレベルに `model_yolo11n` ディレクトリを作成します。画像ファイルは通常、モデルの訓練データセットの一部であり、後続の量子化プロセス中のキャリブレーションに使用されます。
ターミナルで以下のコマンドを入力してください：

```bash
git clone -b v1.7 --depth 1 https://github.com/sophgo/tpu-mlir.git
cd tpu-mlir
source ./envsetup.sh
./build.sh
mkdir model_yolo11n && cd model_yolo11n
cp -rf ${REGRESSION_PATH}/dataset/COCO2017 .
cp -rf ${REGRESSION_PATH}/image .
mkdir Workspace && cd Workspace
```

使用可能なONNXファイルを取得した後、作成した`Workspace`ディレクトリに配置してください。ディレクトリ構造は以下の通りです：

```bash
model_yolo11n
├── COCO2017
├── image
└── Workspace
    └──yolo11n.onnx
```

**後続のステップは、あなたの `Workspace` で実行されます。**

### ONNX から MLIR へ

ONNXから`MLIR`への変換は、モデル変換プロセスの中間ステップです。reCamera上での推論に適したモデルを取得する前に、まずONNXモデルを`MLIR`形式に変換する必要があります。この`MLIR`ファイルは、reCameraの推論エンジン用に最適化された最終モデルを生成するためのブリッジとして機能します。

入力が画像の場合、転送前にモデルの前処理について知る必要があります。モデルが前処理済みのnpzファイルを入力として使用する場合、前処理を考慮する必要はありません。前処理プロセスは以下のように定式化されます（`x`は入力を表します）：

<div align="center">

y = (x − mean) × scale

</div>

yolo11の正規化範囲は**[0, 1]**で、公式yolo11の画像はRGBです。各値は**1/255**で乗算され、`mean`と`scale`に変換される際にそれぞれ**0.0, 0.0, 0.0**と**0.0039216, 0.0039216, 0.0039216**に対応します。`mean`と`scale`のパラメータは、各特定モデルで使用される正規化方法によって決定されるため、モデルによって異なります。

ターミナルで以下のモデル変換コマンドを参照できます：

```bash
model_transform \
  --model_name yolo11n \
  --model_def yolo11n.onnx \
  --input_shapes "[[1,3,640,640]]" \
  --mean "0.0,0.0,0.0" \
  --scale "0.0039216,0.0039216,0.0039216" \
  --keep_aspect_ratio \
  --pixel_format rgb \
  --output_names "/model.23/cv2.0/cv2.0.2/Conv_output_0,/model.23/cv3.0/cv3.0.2/Conv_output_0,/model.23/cv2.1/cv2.1.2/Conv_output_0,/model.23/cv3.1/cv3.1.2/Conv_output_0,/model.23/cv2.2/cv2.2.2/Conv_output_0,/model.23/cv3.2/cv3.2.2/Conv_output_0" \
  --test_input ../image/dog.jpg \
  --test_result yolo11n_top_outputs.npz \
  --mlir yolo11n.mlir
```

`mlir` ファイルに変換した後、`${model_name}_in_f32.npz` ファイルが生成されます。これは後続のモデルの入力ファイルです。

`--output_names` パラメータの選択について、この例のYOLO11モデル変換では、output0という名前の最終出力を選択しません。代わりに、モデルのheadの前にある6つの出力をパラメータとして選択します。`ONNX` ファイルを [Netron](https://netron.app/) にインポートしてモデル構造を確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion04.png" /></div>

YOLOの `head` 内の演算子は **INT8** 量子化後の精度が非常に低くなります。最終的な `output0` をパラメータとして選択した場合、混合精度量子化が必要になります。

**この記事の後続セクションでは混合精度量子化の例を提供し、このセクションでは単一量子化精度を例として使用するため**、`head` の前の出力をパラメータとして選択します。[Netron](https://netron.app/) でONNXモデルを可視化することで、6つの出力名の位置を確認できます：

<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion.00.png" />
</div>
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion.01png" />
</div>
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion02.png" />
</div>

`model_transform` の主要パラメータの説明：

<table style={{ width: '80%', fontSize: '14px', borderCollapse: 'collapse', margin: '20px auto' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid #000', padding: '8px' }}>パラメータ名</th>
      <th style={{ border: '1px solid #000', padding: '8px' }}>必須？</th>
      <th style={{ border: '1px solid #000', padding: '8px' }}>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>model_name</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>はい</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>モデル名を指定します。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>model_def</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>はい</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>'.onnx'、'.tflite'、'.prototxt'などのモデル定義ファイルを指定します。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>input_shapes</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>入力形状を指定します。例：[[1,3,640,640]]。複数の入力をサポートできる二次元配列。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>input_types</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>int32などの入力タイプを指定します。複数の入力はカンマで区切ります。デフォルトはfloat32です。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>resize_dims</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>元の画像をリサイズする寸法を指定します。指定されない場合、モデルの入力サイズにリサイズされます。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>keep_aspect_ratio</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>リサイズ時にアスペクト比を保持するかどうか。デフォルトはfalse。trueの場合、不足部分はゼロパディングされます。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>mean</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>画像の各チャンネルの平均値。デフォルトは0,0,0,0です。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>scale</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>画像の各チャンネルのスケール値。デフォルトは1.0,1.0,1.0です。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>pixel_format</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>画像タイプ。'rgb'、'bgr'、'gray'、'rgbd'のいずれかを指定できます。デフォルトは'bgr'です。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>channel_format</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>画像入力のチャンネルタイプ。'nhwc'または'nchw'を指定できます。非画像入力の場合は'none'を使用します。デフォルトは'nchw'です。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>output_names</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>出力名を指定します。指定されない場合、モデルのデフォルト出力名が使用されます。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>test_input</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>画像、npy、npzファイルなどの検証用入力ファイルを指定します。指定されない場合、精度検証は実行されません。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>test_result</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>検証結果の出力ファイルを指定します。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>excepts</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>検証から除外するネットワーク層をカンマ区切りで指定します。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>mlir</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>はい</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>出力MLIRファイル名とパスを指定します。</td>
    </tr>
  </tbody>
</table>

### MLIR から F16 cvimodel

`mlir`からF16精度の`cvimodel`に変換したい場合は、ターミナルで以下の参考コマンドを入力できます：

```bash
model_deploy \
  --mlir yolo11n.mlir \
  --quant_input \
  --quantize F16 \
  --customization_format RGB_PACKED \
  --processor cv181x \
  --test_input ../image/dog.jpg \
  --test_reference yolo11n_top_outputs.npz \
  --fuse_preprocess \
  --tolerance 0.99,0.9 \
  --model yolo11n_1684x_f16.cvimodel
```

変換が成功すると、推論に直接使用できるFP16精度の`cvimodel`ファイルが得られます。**INT8精度**または**混合精度**の`cvimodel`ファイルが必要な場合は、以下の記事の後続セクションの内容を参照してください。

`model_deploy`の主要パラメータの説明：

<table style={{ width: '80%', fontSize: '14px', borderCollapse: 'collapse', margin: '20px auto' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid #000', padding: '8px' }}>パラメータ名</th>
      <th style={{ border: '1px solid #000', padding: '8px' }}>必須？</th>
      <th style={{ border: '1px solid #000', padding: '8px' }}>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>mlir</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>はい</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>MLIRファイル</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>quantize</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>はい</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>量子化タイプ（F32/F16/BF16/INT8）</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>processor</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>はい</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>使用するプラットフォームに依存します。2024年版のreCameraでは「cv181x」をパラメータとして選択します。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>calibration_table</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>キャリブレーションテーブルのパス。INT8量子化の場合に必要</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>tolerance</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>MLIR量子化とMLIR fp32推論結果間の最小類似度の許容値</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>test_input</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>検証用の入力ファイル。画像、npy、またはnpzファイルが可能。指定されない場合は検証は実行されません</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>test_reference</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>mlir許容値を検証するための参照データ（npz形式）。各オペレータの結果です</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>compare_all</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>設定された場合、すべてのテンソルを比較します</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>excepts</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>検証から除外する必要があるネットワーク層の名前。カンマで区切ります</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>op_divide</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>大きなopを複数の小さなopに分割してionメモリ節約の目的を達成しようとします。特定のモデルに適用されます</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>model</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>はい</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>出力モデルファイルの名前（パスを含む）</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>skip_validation</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>cvimodelの正確性検証をスキップしてデプロイメント効率を向上させます。cvimodel検証はデフォルトで有効です</td>
    </tr>
  </tbody>
</table>

コンパイル後、`yolo11n_1684x_f16.cvimodel` という名前のファイルが生成されます。量子化されたモデルは精度がわずかに低下する可能性がありますが、より軽量で推論速度が高速になります。

### MLIR から INT8 cvimodel へ

#### キャリブレーションテーブルの生成

**INT8** モデルに変換する前に、**キャリブレーションを実行してキャリブレーションテーブルを取得する必要があります。**
入力データの数は状況に応じて約100から1000です。
その後、キャリブレーションテーブルを使用して対称または非対称の `cvimodel` を生成します。対称モデルが既に要件を満たしている場合は、非対称モデルの性能が対称モデルよりもわずかに劣るため、一般的に非対称モデルの使用は推奨されません。
以下は、`COCO2017` から既存の100枚の画像を使用してキャリブレーションを実行する例です：

```bash
run_calibration \
  yolo11n.mlir \
  --dataset ../COCO2017 \
  --input_num 100 \
  -o yolo11n_calib_table
```

上記のコマンドを実行すると、`yolo11n_calib_table` という名前のファイルが生成されます。これは、後続の **INT8** モデルのコンパイルの入力ファイルとして使用されます。

`run_calibration` の主要パラメータの説明：

<table style={{ width: '80%', fontSize: '14px', borderCollapse: 'collapse', margin: '20px auto' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid #000', padding: '8px' }}>パラメータ</th>
      <th style={{ border: '1px solid #000', padding: '8px' }}>必須？</th>
      <th style={{ border: '1px solid #000', padding: '8px' }}>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>N/A</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>はい</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>MLIRファイルを指定</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>dataset</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>入力サンプルディレクトリを指定。パスには対応する画像、npz、またはnpyファイルが含まれます</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>data_list</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>サンプルリストを指定。datasetまたはdata_listのいずれかを選択する必要があります</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>input_num</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>キャリブレーションサンプル数を指定。0に設定すると、すべてのサンプルが使用されます</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>tune_num</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>チューニングサンプル数を指定。デフォルトは10</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>histogram_bin_num</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>ヒストグラムのビン数。デフォルトは2048</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>o</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>はい</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>キャリブレーションテーブルファイルを出力</td>
    </tr>
  </tbody>
</table>

#### INT8対称量子化cvimodelへのコンパイル

`yolo11n_cali_table` ファイルを取得した後、以下のコマンドを実行して **INT8** 対称量子化モデルに変換します：

```bash
model_deploy \
  --mlir yolo11n.mlir \
  --quantize INT8 \
  --quant_input \
  --processor cv181x \
  --calibration_table yolo11n_calib_table \
  --test_input ../image/dog.jpg \
  --test_reference yolo11n_top_outputs.npz \
  --customization_format RGB_PACKED \
  --fuse_preprocess \
  --aligned_input \
  --model yolo11n_1684x_int8_sym.cvimodel
```

コンパイル後、`yolo11n_1684x_int8_sym.cvimodel`という名前のファイルが生成されます。**INT8**に量子化されたモデルは、**F16/BF16**に量子化されたモデルと比較して、より軽量で推論速度が高速です。

### クイックテスト

reCameraのNode-REDを使用して可視化し、変換された`yolo11n_1684x_int8_sym.cvimodel`を素早く検証できます。以下の例動画に示すように、いくつかのノードを設定するだけです：

<div style={{textAlign:'center'}}><iframe width={600} height={300} src="https://www.youtube.com/embed/XdgCt44UR1M" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>

クイック検証のために、`model`ノードで`yolo11n_1684x_int8_sym.cvimodel`を選択する必要があります。modelノードをダブルクリックし、`"Upload"`をクリックして量子化されたモデルをインポートし、次に`"Done"`をクリックし、最後に`"Deploy"`をクリックします。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion05.png" />
</div>

`preview`ノードで**INT8**量子化モデルの推論結果を確認できます。正しい変換と量子化方法で得られた`cvimodel`は依然として信頼性があります：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion06.png" />
</div>

:::tip
現在、reCameraのNode-REDは限られた数のモデルのプレビューテストのみをサポートしています。将来的には、より多くのモデルに対応する予定です。カスタムモデルをNode-REDにインポートする場合、または例で示したような指定された出力テンソルを設定しない場合、`cvimodel`が正しくても、Node-REDのバックエンドはプレビューテストをサポートしません。
:::

様々なモデルの前処理と後処理に関するチュートリアルをリリース予定ですので、独自のコードを書いてカスタム`cvimodel`を推論できるようになります。

### 混合精度量子化

モデル内の特定の層の精度が量子化の影響を受けやすいが、それでもより高速な推論速度が必要な場合、単一精度量子化はもはや適切ではない可能性があります。このような場合、**混合精度**量子化がより良い解決策となります。量子化に敏感な層については**F16/BF16**量子化を選択し、精度損失が最小限の層については**INT8**を使用できます。

次に、`yolov5s.onnx`を例として、モデルを**混合精度**`cvimodel`に素早く変換・量子化する方法を説明します。このセクションを読む前に、**記事の前のセクションを必ず読んでください。このセクションの操作は、前述の内容に基づいて構築されています。**

以下は`yolov5s.onnx`のダウンロードリンクです。リンクをクリックしてモデルをダウンロードし、さらなる使用のためにワークスペースにコピーできます。

モデルをダウンロード：
[yolov5s.onnxをダウンロード](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdX8QYfqMnFEvXGUQ-_NjCoBmOalVQNKPWnZpFxcdNchrw?e=KDUkUP)

モデルをダウンロードした後、次のステップのために`workspace`に配置してください。

```bash
mkdir model_yolov5s && cd model_yolov5s
cp -rf ${REGRESSION_PATH}/dataset/COCO2017 .
cp -rf ${REGRESSION_PATH}/image .
mkdir workspace && cd workspace
```

最初のステップは、モデルを `.mlir` ファイルに変換することです。YOLO の `head` では**混合精度**量子化を使用する際の精度損失が最小限であるため、以前のアプローチとは異なり、`--output_names` パラメータでは `head` の前の出力ではなく、最終的な出力名を選択します。[Netron](https://netron.app/) で `ONNx` を可視化します：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion07.png" />
</div>

yolov5 の正規化パラメータは yolo11 と同じであるため、model_transform の以下のコマンドを取得できます：

```bash
model_transform \
  --model_name yolov5s \
  --model_def yolov5s.onnx \
  --input_shapes [[1,3,640,640]] \
  --mean 0.0,0.0,0.0 \
  --scale "0.0039216,0.0039216,0.0039216" \
  --keep_aspect_ratio \
  --pixel_format rgb \
  --output_names output \
  --test_input ../image/dog.jpg \
  --test_result yolov5s_top_outputs.npz \
  --mlir yolov5s.mlir
```

次に、キャリブレーションテーブルも生成する必要があります。この手順は前のセクションと同じです：

```bash
run_calibration \
  yolov5s.mlir \
  --dataset ../COCO2017 \
  --input_num 100 \
  -o yolov5s_calib_table
```

**int8対称量子化yolo11モデルを変換したセクションとは異なり、model_deployを実行する前に、混合精度量子化テーブルを生成する必要があります**。参考コマンドは以下の通りです：

```bash
run_qtable \
  yolov5s.mlir \
  --dataset ../COCO2017 \
  --calibration_table yolov5s_calib_table \
  --processor cv181x \
  --min_layer_cos 0.99 \
  --expected_cos 0.999 \
  -o yolov5s_qtable
```

`run_qtable` のパラメータ説明を以下の表に示します：

<table style={{ width: '80%', fontSize: '14px', borderCollapse: 'collapse', margin: '20px auto' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid #000', padding: '8px' }}>パラメータ</th>
      <th style={{ border: '1px solid #000', padding: '8px' }}>必須？</th>
      <th style={{ border: '1px solid #000', padding: '8px' }}>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>N/A</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>はい</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>MLIRファイルを指定</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>dataset</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>入力サンプルディレクトリを指定、画像、npz、またはnpyファイルを含む</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>data_list</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>サンプルリストを指定；`dataset` または `data_list` のいずれかを選択する必要があります</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>calibration_table</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>はい</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>入力キャリブレーションテーブル</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>processor</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>はい</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>使用するプラットフォームに依存します。2024年版のreCameraでは「cv181x」をパラメータとして選択します。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>fp_type</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>混合精度の浮動小数点精度タイプを指定、auto、F16、F32、BF16をサポート；デフォルトはauto</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>input_num</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>入力サンプル数を指定；デフォルトは10</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>expected_cos</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>最終ネットワーク出力層の最小期待コサイン類似度を指定；デフォルトは0.99</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>min_layer_cos</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>各層の出力の最小コサイン類似度を指定；この閾値を下回る値は浮動小数点計算を使用；デフォルトは0.99</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>debug_cmd</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>開発用のデバッグコマンド文字列を指定；デフォルトは空</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>global_compare_layers</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>最終出力比較のために置換する層を指定、例：'layer1,layer2' または 'layer1:0.3,layer2:0.7'</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>loss_table</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>すべての層の浮動小数点タイプへの量子化損失値を保存するファイル名を指定；デフォルトはfull_loss_table.txt</td>
    </tr>
  </tbody>
</table>

各レイヤーの前身レイヤーがその `cos` に基づいて対応する浮動小数点モードに変換された後、そのレイヤーに対して計算された `cos` 値がチェックされます。cos が依然として `min_layer_cos` パラメータより小さい場合、現在のレイヤーとその直接の後続レイヤーが浮動小数点演算を使用するように設定されます。

`run_qtable` は、隣接するレイヤーの各ペアを浮動小数点計算を使用するように設定した後、ネットワーク全体の出力の cos を再計算します。cos が指定された `expected_cos` パラメータを超えた場合、検索は終了します。したがって、より大きな `expected_cos` を設定すると、より多くのレイヤーが浮動小数点演算で試行されることになります。

最後に、`model_deploy` を実行して**混合精度**の `cvimodel` を取得します：

```bash
model_deploy \
  --mlir yolov5s.mlir \
  --quantize INT8 \
  --quantize_table yolov5s_qtable \
  --calibration_table yolov5s_calib_table \
  --customization_format RGB_PACKED \
  --fuse_preprocess \
  --aligned_input \
  --processor cv181x \
  --model yolov5s_mix-precision.cvimodel
```

`yolov5s_mix-precision.cvimodel`を取得した後、`model_tool`を使用してモデルの詳細情報を表示できます：

```bash
model_tool --info yolov5s_mix-precision.cvimodel
```

`TensorMap` や `WeightMap` などの重要な情報がターミナルに出力されます：

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion08.png" />
</div>

混合精度量子化されたYOLOv5モデルを検証するために、reCameraで例を実行できます。コンパイル済みのテスト例をプルします：

```bash
git clone https://github.com/jjjadand/yolov5_Test_reCamera.git
```

コンパイルされた例と `yolov5s_mix-precision.cvimodel` を [FileZilla](https://filezilla-project.org/) などのソフトウェアを使用して reCamera にコピーします。（[reCamera の使用開始](https://wiki.seeedstudio.com/ja/recamera_getting_started/) を参照できます）

コピーが完了したら、**reCamera ターミナルでコマンドを実行します：**

```bash
cp /path/to/yolov5s_mix-precision.cvimodel /path/to/yolov5_Test_reCamera/solutions/sscma-model/build/
cd yolov5_Test_reCamera/solutions/sscma-model/build/
sudo ./sscma-model yolov5s_mix-precision.cvimodel Dog.jpg Out.jpg
```

`Out.jog`をプレビューすると、`mixed-precision`量子化されたyolov5モデルの推論結果は以下の通りです：

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/reCamera/yolov5Out.jpg" />
</div>

## リソース

[reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

[reCamera Series](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

[reCamera example](https://github.com/Seeed-Studio/sscma-example-sg200x)

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
