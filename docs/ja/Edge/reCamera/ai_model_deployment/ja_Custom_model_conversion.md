---
description: reCamera用のAIモデルの変換と量子化
title: モデル変換ガイド
keywords:
  - Edge
  - reCamera
image: https://files.seeedstudio.com/wiki/reCamera/013.jpg
slug: /ja/recamera_model_conversion
last_update:
  date: 05/15/2025
  author: Dayu Li
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# AIモデルの変換と量子化

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/013.jpg" /></div>

**reCamera**のAIモデル変換ツールは現在、`PyTorch`、`ONNX`、`TFLite`、`Caffe`などのフレームワークをサポートしています。他のフレームワークのモデルは`ONNX`形式に変換する必要があります。他の深層学習アーキテクチャから`ONNX`へのモデル変換方法については、公式ONNXウェブサイトをご参照ください: https://github.com/onnx/tutorials。

**reCamera**でAIモデルをデプロイする際のフロー図は以下の通りです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/InferToolchain_Arch.png" /></div>
この記事では、簡単な例を通じてreCameraのAIモデル変換ツールの使用方法を紹介します。

## 作業環境のセットアップ

### 方法1: Dockerイメージでのインストール（推奨）

必要なイメージを[DockerHub（こちらをクリック）](https://hub.docker.com/r/sophgo/tpuc_dev)からダウンロードし、**バージョン3.1**を使用することを推奨します:

```bash
docker pull sophgo/tpuc_dev:v3.1
```

Dockerを初めて使用する場合は、以下のコマンドを実行してインストールと設定を行います（初回セットアップ時のみ必要）:

```bash
sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
```

次に、現在のディレクトリで以下のようにコンテナを作成します:

```bash
docker run --privileged --name MyName -v $PWD:/workspace -it sophgo/tpuc_dev:v3.1
```

** `"MyName"`をコンテナの希望する名前に置き換えてください*

Dockerコンテナ内で`pip`を使用して`tpu_mlir`をインストールします。これは`方法1`と同様です:

```bash
pip install tpu_mlir[all]==1.14
```

### 方法2: ローカルインストール

まず、現在のシステム環境が以下を満たしているか確認してください:

- [Ubuntu 22.04](#jump1)
- [Python 3.10](#jump2)

満たしていない場合やインストールに失敗した場合は、`方法2`を選択してモデル変換ツールをインストールしてください。

`pip`を使用して`tpu_mlir`をインストールします:

```bash
pip install tpu_mlir==1.14
```

`tpu_mlir`が異なるフレームワークのモデルを処理する際に必要な依存関係は異なります。ONNXまたはTorchで生成されたモデルファイルの場合、以下のコマンドを使用して追加の依存関係をインストールしてください:

```bash
pip install tpu_mlir[onnx]==1.14
pip install tpu_mlir[torch]==1.14
```

現在、5つの構成がサポートされています: onnx、torch、tensorflow、caffe、paddle。または以下のコマンドを使用してすべての依存関係をインストールすることもできます:

```bash
pip install tpu_mlir[all]==1.14
```

すでに`tpu_mlir-{version}.whl`ファイルがローカルに存在する場合は、以下のコマンドを使用してインストールすることもできます:

```bash
pip install path/to/tpu_mlir-{version}.whl[all]
```

## AIモデルをcvimodel形式に変換および量子化する

### ONNXの準備

reCameraはすでにYOLOシリーズをローカル推論に適応させています。そのため、このセクションでは`yolo11n.onnx`を例として使用し、ONNXモデルを`cvimodel`に変換する方法を示します。
**`cvimodel`はreCameraでローカル推論に使用されるAIモデル形式です。**

PyTorch、TFLite、Caffeモデルの変換および量子化方法は、このセクションと同じです。

以下はyolo11n.onnxのダウンロードリンクです。リンクをクリックしてモデルをダウンロードし、`Workspace`にコピーして使用してください。

モデルをダウンロード:
[Download yolo11n.onnx](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ESj2_zJM4oxOiv62Hh1XKu8BA9gWPQy6zAGSXWd4VL--9w?e=tagPRA)
**このONNXファイルは、以下のセクションの例で直接使用でき、IRバージョンやOpsetバージョンを変更する必要はありません。**
:::info
現在、このWikiで使用されているONNXは**IRバージョン8およびOpsetバージョン17**に基づいています。2024年12月以降にUltralyticsによって生成された例から変換されたONNXファイルの場合、バージョンが高いために後続のプロセスで問題が発生する可能性があります。
:::

[Netron](https://netron.app/)を使用してONNXファイルの情報を確認できます:

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/ONNX_IR_opset.jpg" />
</div>

**もしONNXファイルがIR v8およびOpset v17よりも高い場合、バージョンをダウングレードするための例を以下に提供します。** まず、`pip`を使用して`onnx`をインストールします:

```bash
pip install onnx
```

GitHubからONNXファイルのバージョンを変更するプログラムを取得します:

```bash
git clone https://github.com/jjjadand/ONNX_Downgrade.git
cd ONNX_Downgrade/
```

入力モデルファイルと出力モデルファイルのパスをコマンドライン引数として指定してスクリプトを実行します:

```bash
python downgrade_onnx.py <input_model_path> <output_model_path> --target_ir_version <IR_version> --target_opset_version <Opset_version>
```

- `<input_model_path>`: ダウングレードしたい元のONNXモデルのパス。
- `<output_model_path>`: ダウングレードされたモデルを保存するパス。
- --target_ir_version `<IR_version>`: オプション。ダウングレードするターゲットIRバージョン。デフォルトは8。
- --target_opset_version `<Opset_version>`: オプション。ダウングレードするターゲットOpsetバージョン。デフォルトは17。

デフォルトバージョン（IR v8、Opset v17）を使用する例:

```bash
python downgrade_onnx.py model_v12.onnx model_v8.onnx
```

これにより、`model_v12.onnx`を読み込み、IRバージョン8にダウングレードし、Opsetバージョン17を設定して検証し、新しいモデルを`model_v8.onnx`として保存します。

カスタムバージョン（IR v9、Opset v11）を使用する例:

```bash
python downgrade_onnx.py model_v12.onnx model_v9.onnx --target_ir_version 9 --target_opset_version 11
```

これにより、`model_v12.onnx`を読み込み、IRバージョン9にダウングレードし、Opsetバージョン11を設定して検証し、新しいモデルを`model_v9.onnx`として保存します。

<p style={{ fontSize: '1.2em', color: 'yellow' , textAlign: 'left'}}>
  * エラーを回避するために、IR v8およびOpset v17のONNXを使用することを推奨します。
</p>

### ワークスペースの準備

`model_yolo11n` ディレクトリを `tpu-mlir` と同じ階層に作成します。画像ファイルは通常、モデルのトレーニングデータセットの一部であり、後続の量子化プロセス中にキャリブレーションに使用されます。以下のコマンドをターミナルで入力してください：

```bash
git clone -b v1.14 --depth 1 https://github.com/sophgo/tpu-mlir.git
cd tpu-mlir
source ./envsetup.sh
./build.sh
mkdir model_yolo11n && cd model_yolo11n
cp -rf ${REGRESSION_PATH}/dataset/COCO2017 .
cp -rf ${REGRESSION_PATH}/image .
mkdir Workspace && cd Workspace
```

使用可能な ONNX ファイルを取得したら、それを作成した `Workspace` ディレクトリに配置します。ディレクトリ構造は以下のようになります：

```bash
model_yolo11n
├── COCO2017
├── image
└── Workspace
    └──yolo11n.onnx
```

**以降の手順は、`Workspace` 内で実行されます。**

### ONNX から MLIR への変換

ONNX から `MLIR` への変換は、モデル変換プロセスの中間ステップです。reCamera 上で推論に適したモデルを得るには、まず ONNX モデルを `MLIR` フォーマットに変換する必要があります。この `MLIR` ファイルは、reCamera の推論エンジンに最適化された最終モデルを生成するための橋渡しとなります。

入力が画像の場合、変換前にモデルの前処理を知る必要があります。モデルが前処理済みの npz ファイルを入力として使用する場合、前処理を考慮する必要はありません。前処理プロセスは以下のように定式化されます（`x` は入力を表します）：

<div align="center">

y = (x − mean) × scale

</div>

yolo11 の正規化範囲は **[0, 1]** であり、公式の yolo11 の画像は RGB です。それぞれの値は **1/255** で乗算され、`mean` と `scale` に変換される際にはそれぞれ **0.0, 0.0, 0.0** と **0.0039216, 0.0039216, 0.0039216** に対応します。`mean` と `scale` のパラメータはモデルごとに異なり、それぞれのモデルで使用される正規化方法によって決定されます。

以下のモデル変換コマンドをターミナルで参照してください：

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

`mlir` ファイルに変換後、`${model_name}_in_f32.npz` ファイルが生成されます。これは後続のモデルの入力ファイルです。

`--output_names` パラメータの選択に関して、この例の YOLO11 モデル変換では、最終出力である output0 を選択しません。その代わりに、モデルのヘッドの前にある6つの出力をパラメータとして選択します。ONNX ファイルを [Netron](https://netron.app/) にインポートしてモデル構造を確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion04.png" /></div>

YOLO の `head` 内の演算子は、**INT8** 量子化後に非常に低い精度になります。もし最終的な output0 をパラメータとして選択した場合、混合精度量子化が必要になります。

**この記事の後続セクションでは混合精度量子化の例を提供しますが、このセクションでは単一の量子化精度を使用した例を示します。** そのため、`head` の前の出力をパラメータとして選択します。ONNX モデルを [Netron](https://netron.app/) で可視化することで、6つの出力名の位置を確認できます：

<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion.00.png" />
</div>
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion.01png" />
</div>
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion02.png" />
</div>

`model_transform` の主なパラメータの説明：

<table style={{ width: '80%', fontSize: '14px', borderCollapse: 'collapse', margin: '20px auto' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid #000', padding: '8px' }}>パラメータ名</th>
      <th style={{ border: '1px solid #000', padding: '8px' }}>必須か？</th>
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
      <td style={{ border: '1px solid #000', padding: '8px' }}>モデル定義ファイルを指定します（例：'.onnx', '.tflite', '.prototxt'）。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>input_shapes</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>入力形状を指定します（例：[[1,3,640,640]]）。複数入力をサポートする2次元配列。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>input_types</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>入力タイプを指定します（例：int32）。複数入力の場合はカンマで区切ります。デフォルトは float32。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>resize_dims</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>元画像をリサイズする寸法を指定します。指定しない場合、モデルの入力サイズにリサイズされます。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>keep_aspect_ratio</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>リサイズ時にアスペクト比を保持するかどうか。デフォルトは false。true の場合、不足部分はゼロで埋められます。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>mean</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>画像の各チャンネルの平均値。デフォルトは 0,0,0,0。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>scale</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>画像の各チャンネルのスケール値。デフォルトは 1.0,1.0,1.0。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>pixel_format</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>画像タイプ（例：'rgb', 'bgr', 'gray', 'rgbd'）。デフォルトは 'bgr'。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>channel_format</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>画像入力のチャンネルタイプ（例：'nhwc', 'nchw'）。画像以外の入力の場合は 'none' を使用。デフォルトは 'nchw'。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>output_names</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>出力名を指定します。指定しない場合、モデルのデフォルト出力名が使用されます。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>test_input</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>検証用の入力ファイルを指定します（例：画像、npy、npz ファイル）。指定しない場合、精度検証は行われません。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>test_result</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>検証結果の出力ファイルを指定します。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>excepts</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>検証から除外するネットワーク層をカンマで区切って指定します。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>mlir</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>はい</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>出力 MLIR ファイルの名前とパスを指定します。</td>
    </tr>
  </tbody>
</table>

### MLIRからF16 cvimodelへの変換

`mlir`をF16精度の`cvimodel`に変換したい場合は、以下の参考コマンドをターミナルに入力してください：

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

変換が成功すると、FP16精度の`cvimodel`ファイルが生成され、直接推論に使用することができます。**INT8精度**または**混合精度**の`cvimodel`ファイルが必要な場合は、この記事の後半セクションを参照してください。

`model_deploy`の主なパラメータの説明：

<table style={{ width: '80%', fontSize: '14px', borderCollapse: 'collapse', margin: '20px auto' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid #000', padding: '8px' }}>パラメータ名</th>
      <th style={{ border: '1px solid #000', padding: '8px' }}>必須か？</th>
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
      <td style={{ border: '1px solid #000', padding: '8px' }}>量子化タイプ (F32/F16/BF16/INT8)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>processor</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>はい</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>使用するプラットフォームに依存します。2024年版のreCameraでは「cv181x」を選択します。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>calibration_table</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>キャリブレーションテーブルのパス。INT8量子化の場合に必要です。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>tolerance</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>MLIR量子化とMLIR fp32推論結果の最小類似性の許容値</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>test_input</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>検証用の入力ファイル。画像、npy、またはnpz形式が使用可能です。指定されない場合は検証が行われません。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>test_reference</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>mlirの許容値を検証するための参照データ（npz形式）。各オペレーターの結果です。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>compare_all</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>設定するとすべてのテンソルを比較します。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>excepts</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>検証から除外する必要があるネットワーク層の名前。カンマで区切ります。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>op_divide</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>大きなオペレーターを複数の小さなオペレーターに分割して、メモリ節約を目的とする。特定のモデルに適しています。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>model</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>はい</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>出力モデルファイルの名前（パスを含む）</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>skip_validation</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>cvimodelの正確性検証をスキップしてデプロイ効率を向上させます。デフォルトではcvimodel検証が有効です。</td>
    </tr>
  </tbody>
</table>

コンパイル後、`yolo11n_1684x_f16.cvimodel`という名前のファイルが生成されます。量子化されたモデルは精度が若干低下する可能性がありますが、より軽量で推論速度が向上します。

### MLIRからINT8 cvimodelへの変換

#### キャリブレーションテーブルの生成

**INT8**モデルに変換する前に、**キャリブレーションを実行してキャリブレーションテーブルを取得する必要があります。**
入力データの数は状況に応じて約100〜1000です。
その後、キャリブレーションテーブルを使用して対称または非対称の`cvimodel`を生成します。対称モデルが要件を満たしている場合は、非対称モデルの使用は一般的に推奨されません。非対称モデルの性能は対称モデルよりも若干劣るためです。
以下は、`COCO2017`の既存の100枚の画像を使用してキャリブレーションを実行する例です：

```bash
run_calibration \
  yolo11n.mlir \
  --dataset ../COCO2017 \
  --input_num 100 \
  -o yolo11n_calib_table
```

上記のコマンドを実行すると、`yolo11n_calib_table`という名前のファイルが生成されます。このファイルは、後続の**INT8**モデルのコンパイルに使用されます。

`run_calibration` の主なパラメータの説明：

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
      <td style={{ border: '1px solid #000', padding: '8px' }}>MLIRファイルを指定します</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>dataset</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>入力サンプルディレクトリを指定します。このパスには対応する画像、npz、またはnpyファイルが含まれます</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>data_list</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>サンプルリストを指定します。datasetまたはdata_listのいずれかを選択する必要があります</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>input_num</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>キャリブレーションサンプルの数を指定します。0に設定すると、すべてのサンプルが使用されます</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>tune_num</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>チューニングサンプルの数を指定します。デフォルトは10です</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>histogram_bin_num</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>ヒストグラムのビン数を指定します。デフォルトは2048です</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>o</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>はい</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>キャリブレーションテーブルファイルを出力します</td>
    </tr>
  </tbody>
</table>

#### INT8対称量子化されたcvimodelへのコンパイル

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

コンパイル後、`yolo11n_1684x_int8_sym.cvimodel` という名前のファイルが生成されます。**INT8** に量子化されたモデルは、**F16/BF16** に量子化されたモデルと比較して、より軽量で推論速度が速くなります。

### クイックテスト

Node-REDを使用してreCamera上で視覚化を行い、変換された `yolo11n_1684x_int8_sym.cvimodel` を迅速に検証できます。以下の例の動画に示されているように、いくつかのノードを設定するだけです：

<div style={{textAlign:'center'}}><iframe width={600} height={300} src="https://www.youtube.com/embed/XdgCt44UR1M" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>

`model` ノードで `yolo11n_1684x_int8_sym.cvimodel` を選択して迅速に検証します。モデルノードをダブルクリックし、`"Upload"` をクリックして量子化されたモデルをインポートし、`"Done"` をクリックしてから `"Deploy"` をクリックします。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion05.png" />
</div>

**INT8** 量子化モデルの推論結果は `preview` ノードで確認できます。正しい変換と量子化方法を通じて得られた `cvimodel` は依然として信頼性があります：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion06.png" />
</div>

:::tip
現在、reCameraのNode-REDは限られた数のモデルに対してのみプレビューテストをサポートしています。将来的には、より多くのモデルに対応する予定です。カスタムモデルをNode-REDにインポートしたり、例で示したように指定された出力テンソルを設定しない場合、Node-REDのバックエンドはプレビューテストをサポートしません。たとえ `cvimodel` が正しくてもです。
:::

さまざまなモデルの前処理および後処理に関するチュートリアルを公開する予定ですので、独自のコードを書いてカスタム `cvimodel` を推論することができます。

### 混合精度量子化

モデル内の特定の層の精度が量子化によって容易に影響を受ける場合でも、より高速な推論速度が必要な場合、単一精度量子化では適切でない場合があります。このような場合、**混合精度** 量子化が状況をより良く解決できます。量子化に対してより敏感な層には **F16/BF16** 量子化を選択し、精度損失が最小限の層には **INT8** を使用できます。

次に、`yolov5s.onnx` を例として使用し、モデルを迅速に変換して **混合精度** の `cvimodel` に量子化する方法を示します。このセクションを読む前に、**記事の前のセクションを必ず確認してください。このセクションの操作は以前の内容に基づいています。**

以下は `yolov5s.onnx` のダウンロードリンクです。リンクをクリックしてモデルをダウンロードし、作業スペースにコピーして使用してください。

モデルをダウンロード：
[Download yolov5s.onnx](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdX8QYfqMnFEvXGUQ-_NjCoBmOalVQNKPWnZpFxcdNchrw?e=KDUkUP)

モデルをダウンロードした後、次のステップのためにそれを `workspace` に配置してください。

```bash
mkdir model_yolov5s && cd model_yolov5s
cp -rf ${REGRESSION_PATH}/dataset/COCO2017 .
cp -rf ${REGRESSION_PATH}/image .
mkdir workspace && cd workspace
```

最初のステップは、モデルを `.mlir` ファイルに変換することです。YOLO の `head` 部分では **混合精度** 量子化を使用しても精度損失が最小限であるため、以前のアプローチとは異なり、`--output_names` パラメータで `head` の前の出力ではなく、最終的な出力名を選択します。[Netron](https://netron.app/) で `ONNx` を可視化してください：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion07.png" />
</div>

yolov5 の正規化パラメータは yolo11 と同じであるため、以下のような model_transform コマンドを使用できます：

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

次に、キャリブレーションテーブルを生成する必要があります。このステップは前のセクションと同じです：

```bash
run_calibration \
  yolov5s.mlir \
  --dataset ../COCO2017 \
  --input_num 100 \
  -o yolov5s_calib_table
```

**int8 対称量子化された yolo11 モデルを変換したセクションとは異なり、model_deploy を実行する前に混合精度量子化テーブルを生成する必要があります。** 参照コマンドは以下の通りです：

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

`run_qtable` のパラメータ説明は以下の表に示されています：

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
      <td style={{ border: '1px solid #000', padding: '8px' }}>MLIR ファイルを指定</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>dataset</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>入力サンプルディレクトリを指定（画像、npz、または npy ファイルを含む）</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>data_list</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>サンプルリストを指定；`dataset` または `data_list` のいずれかを選択する必要があります</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>calibration_table</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>はい</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>キャリブレーションテーブルを入力</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>processor</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>はい</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>使用するプラットフォームに依存します。reCamera の 2024 バージョンでは "cv181x" をパラメータとして選択します。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>fp_type</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>混合精度の浮動小数点精度タイプを指定；auto、F16、F32、BF16 をサポート；デフォルトは auto</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>input_num</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>入力サンプル数を指定；デフォルトは 10</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>expected_cos</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>最終ネットワーク出力層の期待される最小コサイン類似度を指定；デフォルトは 0.99</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>min_layer_cos</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>各層の出力の最小コサイン類似度を指定；この閾値を下回る場合は浮動小数点計算を使用；デフォルトは 0.99</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>debug_cmd</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>開発用のデバッグコマンド文字列を指定；デフォルトは空</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>global_compare_layers</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>最終出力比較のために置き換える層を指定；例：'layer1,layer2' または 'layer1:0.3,layer2:0.7'</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>loss_table</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>いいえ</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>浮動小数点型に量子化されたすべての層の損失値を保存するファイル名を指定；デフォルトは full_loss_table.txt</td>
    </tr>
  </tbody>
</table>

各レイヤーの前のレイヤーがその `cos` に基づいて対応する浮動小数点モードに変換された後、そのレイヤーの計算された `cos` 値がチェックされます。もし `cos` がまだ `min_layer_cos` パラメータより小さい場合、現在のレイヤーとその直接の後続レイヤーは浮動小数点演算を使用するように設定されます。

`run_qtable` は、隣接する各レイヤーペアを浮動小数点計算に設定した後、ネットワーク全体の出力の `cos` を再計算します。もし `cos` が指定された `expected_cos` パラメータを超えた場合、探索は終了します。そのため、より大きな `expected_cos` を設定すると、浮動小数点演算を試みるレイヤーが増加します。

最後に、`model_deploy` を実行して **混合精度** の `cvimodel` を取得します：

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

`yolov5s_mix-precision.cvimodel` を取得した後、`model_tool` を使用してモデルの詳細情報を確認できます：

```bash
model_tool --info yolov5s_mix-precision.cvimodel
```

`TensorMap` や `WeightMap` などの重要な情報がターミナルに表示されます：

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion08.png" />
</div>

reCamera で混合精度量子化 YOLOv5 モデルを検証する例を実行できます。コンパイル済みのテスト例を取得します：

```bash
git clone https://github.com/jjjadand/yolov5_Test_reCamera.git
```

コンパイル済みの例と `yolov5s_mix-precision.cvimodel` を [FileZilla](https://filezilla-project.org/) などのソフトウェアを使用して reCamera にコピーします。（[Getting Started with reCamera](https://wiki.seeedstudio.com/ja/recamera_getting_started/) を参照してください）

コピーが完了したら、**reCamera のターミナルで以下のコマンドを実行します：**

```bash
cp /path/to/yolov5s_mix-precision.cvimodel /path/to/yolov5_Test_reCamera/solutions/sscma-model/build/
cd yolov5_Test_reCamera/solutions/sscma-model/build/
sudo ./sscma-model yolov5s_mix-precision.cvimodel Dog.jpg Out.jpg
```

`Out.jpg` をプレビューすると、`混合精度` 量子化 YOLOv5 モデルの推論結果が以下のように表示されます：

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/reCamera/yolov5Out.jpg" />
</div>

## リソース

[reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

[reCamera シリーズ](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

[reCamera サンプル](https://github.com/Seeed-Studio/sscma-example-sg200x)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様の製品体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>