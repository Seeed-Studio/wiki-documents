---
description: reCamera Pro 用に ONNX モデルを RKNN 形式へ変換し、代表的なキャリブレーションデータセットを用いて INT8 量子化モデルを作成します。
title: モデルの変換と量子化
keywords:
  - reCamera
  - reCamera Pro
  - RKNN
  - RKNN-Toolkit2
  - RV1126B
  - model quantization
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_rknn_model_conversion
sku: 10003420
sidebar_position: 2
last_update:
  date: 08/28/2026
  author: yylin
createdAt: '2026-08-28'
updatedAt: '2026-08-28'
url: https://wiki.seeedstudio.com/ja/recamera_pro_rknn_model_conversion/
---

# reCamera Pro 向けモデルを RKNN-Toolkit2 で変換および量子化する

## はじめに

reCamera Pro は Rockchip RV1126B を使用しています。その NPU 上でカスタムのニューラルネットワークモデルを動作させるには、モデルを ONNX にエクスポートし、x86_64 Linux PC または WSL 環境上で **RV1126B** 向けの RKNN モデルにコンパイルします。

このガイドでは、FP16 ベースラインモデルと INT8 量子化モデルを作成します。変換処理はホスト PC 上で行い、接続された reCamera Pro は最終的な検証とデプロイ時にのみ必要です。

:::note 始める前に
このガイドでは **RKNN-Toolkit2 2.3.2**、Python 3.10、および `target_platform='rv1126b'` を使用します。Toolkit のバージョンは、reCamera Pro ファームウェアに含まれる RKNN Runtime と揃えてください。別の reCamera 製品や Rockchip SoC 向けの手順は使用しないでください。
:::

---

## 1. 必要条件

このガイドのサンプルで使用している構成は次のとおりです。

- x86_64 Linux PC または WSL 2 環境。モデル変換は reCamera Pro 本体上では行わないでください。
- Python 3.10。
- x86_64 向けの [RKNN-Toolkit2](https://github.com/airockchip/rknn-toolkit2) **2.3.2** と、その同梱要件。
- 入力形状、前処理、出力の意味が既知の ONNX モデル。
- INT8 量子化用：代表的なキャリブレーション画像。ラベルは不要です。

Python のバージョンは変更可能です。RKNN-Toolkit2 は現在 Python 3.6 から 3.12 をサポートしています。使用する Python バージョンに一致する wheel をインストールしてください。wheel ファイル名中の `cp` の後ろの数字が、その CPython バージョンを表します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/Model_Conversion/image.png" alt="RKNN-Toolkit2 Python wheel version example" /></div>

変換前に、モデルのソースとライセンス、エクスポートコマンド、チェックサム、入力レイアウト、色順序、リサイズポリシー、正規化、および後処理を記録しておきます。これは reCamera Pro アプリケーションが再現しなければならないモデル契約です。

:::tip 推奨ワークフロー
必ず最初に FP16 モデルを生成してください。これは、INT8 の精度や性能を検証する前に、グラフと前処理を確認するためのベースラインとなります。
:::

---

## 2. RKNN-Toolkit2 の準備

[公式 Rockchip リポジトリ](https://github.com/airockchip/rknn-toolkit2) から **2.3.2** リリースをダウンロードします。リリースパッケージ内で、`rknn-toolkit2/packages/x86_64` 以下から CPython 3.10 に対応する wheel と requirements を選択します。

分離された環境を作成し、wheel をインストールします。`PATH_TO_TOOLKIT` と wheel ファイル名は、ダウンロードしたパッケージ内のパスに置き換えてください。

```bash
python3.10 -m venv rknn-2.3.2
source rknn-2.3.2/bin/activate

python -m pip install --upgrade pip
python -m pip install -r PATH_TO_TOOLKIT/rknn-toolkit2/packages/x86_64/requirements_cp310*.txt
python -m pip install PATH_TO_TOOLKIT/rknn-toolkit2/packages/x86_64/rknn_toolkit2-2.3.2-*-cp310-*.whl

python -c "from rknn.api import RKNN; print('RKNN-Toolkit2 import succeeded')"
```

:::caution ホスト側の変換ツールキットを使用する
RKNN-Toolkit2 はホスト側の変換ツールキットです。変換には `rknn-toolkit-lite2` を使用しないでください。これは対応ターゲットシステム上でモデルを実行するためのものです。RV1126B 用の `.rknn` は必ず `target_platform='rv1126b'` でビルドする必要があります。
:::

---

## 3. ONNX 入力契約を確認する

静的なバッチ 1 の ONNX 入力を推奨します。モデルを [Netron](https://netron.app/)、ONNX checker、`model-inspect`、またはそのエクスポートプログラムで確認します。これらの値は元のモデル実装から確認し、ファイル名から推測しないでください。

| 項目 | 例 | 重要な理由 |
| --- | --- | --- |
| 入力名と形状 | `images`, `[1, 3, 640, 640]` | `load_onnx()` に必要 |
| レイアウト | NCHW または NHWC | エクスポートされたグラフと一致している必要がある |
| チャンネル順序 | RGB または BGR | チャンネルの入れ替えは精度を大きく低下させる可能性がある |
| 入力レンジと正規化 | `[0,255]` から `[0,1]` | ちょうど 1 回だけ適用される必要がある |
| リサイズポリシー | stretch、crop、または letterbox | 実行時と完全に同一である必要がある |
| 出力と後処理 | scores、boxes、masks など | 予測結果を解釈するために必要 |

たとえば、アプリケーションが `[0,255]` の範囲の uint8 RGB ピクセルを入力し、モデルが `[0,1]` の float を想定している場合、`mean_values=[[0, 0, 0]]` と `std_values=[[255, 255, 255]]` を使用します。RKNN は `(input - mean) / std` を適用します。正規化が ONNX グラフ内に含まれている場合は、二重適用を避けるために恒等値（`mean=[0,0,0]`, `std=[1,1,1]`）を使用します。

`model-inspect` を使用して、モデルの入力と出力を確認します。

```bash
pip install model-inspect-tool

model-inspect ./yolov8n.onnx
```

出力例を以下に示します。

```text
Format:  onnx
Path:    /home/yylin/rknn_test/rknn_model_zoo/examples/yolov8/model/yolov8n.onnx
Backend: onnx
Dynamic: false

Inputs:
  name=images, shape=[1, 3, 640, 640], dtype=float

Outputs:
  name=318, shape=[1, 64, 80, 80], dtype=float
  name=onnx::ReduceSum_326, shape=[1, 80, 80, 80], dtype=float
  name=331, shape=[1, 1, 80, 80], dtype=float
  name=338, shape=[1, 64, 40, 40], dtype=float
  name=onnx::ReduceSum_346, shape=[1, 80, 40, 40], dtype=float
  name=350, shape=[1, 1, 40, 40], dtype=float
  name=357, shape=[1, 64, 20, 20], dtype=float
  name=onnx::ReduceSum_365, shape=[1, 80, 20, 20], dtype=float
  name=369, shape=[1, 1, 20, 20], dtype=float
```

---

## 4. Ultralytics YOLO モデルを RKNN へ直接エクスポートする

Ultralytics YOLO モデルの場合、Ultralytics から RKNN へ直接エクスポートできます。中間の ONNX モデルを作成し、RKNN-Toolkit2 を呼び出してくれるため、別途 ONNX 変換スクリプトを書く必要はありません。

上で準備した RKNN-Toolkit2 環境に Ultralytics をインストールします。

```bash
python -m pip install ultralytics
```

次の例では、reCamera Pro 向けの FP16 RKNN モデルをエクスポートします。`yolo11n.pt` は、`runs/detect/train/weights/best.pt` など、学習済みチェックポイントに置き換えてください。

```python
from ultralytics import YOLO

model = YOLO('yolo11n.pt')
model.export(format='rknn', name='rv1126b', imgsz=640)
```

同等の CLI コマンドは次のとおりです。

```bash
yolo export model=yolo11n.pt format=rknn name=rv1126b imgsz=640
```

エクスポートにより通常、`yolo11n_rknn_model/` のようなディレクトリが作成され、その中に `yolo11n-rv1126b.rknn` のような名前の RKNN ファイルが生成されます。ここで `name='rv1126b'` は Rockchip ターゲットを選択するためのものであり、出力ディレクトリ名ではありません。

INT8 モデルを作成するには、`quantize=8` と代表的な YOLO データセットの YAML 定義を指定します。Ultralytics は、そのデータセット内の画像パスを使用して、RKNN-Toolkit2 に必要なキャリブレーションリストを生成します。

```python
from ultralytics import YOLO

model = YOLO('runs/detect/train/weights/best.pt')
model.export(
    format='rknn',
    name='rv1126b',
    imgsz=640,
    quantize=8,
    data='path/to/data.yaml',
)
```

```bash
yolo export model=runs/detect/train/weights/best.pt format=rknn name=rv1126b imgsz=640 quantize=8 data=path/to/data.yaml
```

:::caution INT8 にはキャリブレーションデータが必須
`data` は、ホストからアクセス可能な画像パスを含む有効な YOLO データセット YAML を指している必要があります。reCamera Pro のデプロイシナリオを代表する画像を使用し、精度評価用には別のホールドアウト画像を確保してください。Ultralytics は、エクスポートが成功しても、タスク精度やデバイス性能を保証するものではありません。
:::

:::tip 直接エクスポートと手動ワークフローの比較
Ultralytics YOLO を素早くエクスポートしたい場合は、このルートを使用してください。モデルが Ultralytics モデルでない場合、Toolkit2 の設定を明示的に制御する必要がある場合、またはエクスポートされた ONNX グラフを診断する必要がある場合は、以下の ONNX ワークフローを使用します。
:::

---

## 5. FP16 RKNN ベースラインを作成する

`convert_onnx_to_rknn.py` を作成します。モデルパス、入力名、形状、および正規化は自分のモデルに合わせて変更してください。

```python
from rknn.api import RKNN

ONNX_MODEL = 'model.onnx'
RKNN_MODEL = 'model-fp16-rv1126b.rknn'

rknn = RKNN(verbose=True)

# Example only: uint8 RGB [0,255] becomes model-domain [0,1].
rknn.config(
    target_platform='rv1126b',
    mean_values=[[0, 0, 0]],
    std_values=[[255, 255, 255]],
)

ret = rknn.load_onnx(
    model=ONNX_MODEL,
    inputs=['images'],                     # Replace with your ONNX input name.
    input_size_list=[[1, 3, 640, 640]],    # Replace with your static shape.
)
if ret != 0:
    raise RuntimeError('Failed to load ONNX model')

# No calibration dataset: build a non-quantized FP16 baseline.
ret = rknn.build(do_quantization=False)
if ret != 0:
    raise RuntimeError('Failed to build RKNN model')

if rknn.export_rknn(RKNN_MODEL) != 0:
    raise RuntimeError('Failed to export RKNN model')
rknn.release()
print(f'Created {RKNN_MODEL}')
```

```bash
python convert_onnx_to_rknn.py
sha256sum model-fp16-rv1126b.rknn
```

Toolkit が未対応のオペレータ、動的入力、無効なグラフを報告した場合は、ONNX モデルを修正または再エクスポートしてください。ビルドを完了させるためだけにオペレータを削除してはいけません。

---

## 6. INT8 キャリブレーションデータセットを準備する

INT8 キャリブレーション画像は、デプロイ時の入力に似ている必要があります。実用的な出発点としては、およそ 100～500 枚の画像を使用し、想定される照明、背景、物体サイズ、視点、モーションブラー、カメラノイズ、および重要な失敗ケースをカバーしてください。キャリブレーション画像は、精度評価用の画像とは分けておきます。キャリブレーションセットが小さすぎると、INT8 モデルの結果が元の ONNX モデルと大きく異なる可能性があります。

リストは 1 行につき 1 つの画像パスを記述し、PNG、JPEG、BMP、NPY 入力が一般的に使用されます。

```bash
find calibration/images -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) \
  | sort > calibration/dataset.txt

wc -l calibration/dataset.txt
head -n 3 calibration/dataset.txt
```

:::caution 前処理を一貫させる
キャリブレーションデータは、推論時と同じチャンネル順序、リサイズポリシー、数値入力の取り扱いを使用しなければなりません。代表性のない画像、RGB/BGR の取り違え、前処理の不一致は、INT8 精度の大幅な低下を招く可能性があります。
:::

---

## 7. INT8 RKNN モデルをビルドする

FP16 スクリプトを `convert_onnx_to_rknn_int8.py` にコピーし、モデル名とビルドブロックを次の内容に置き換えます。

```python
RKNN_MODEL = 'model-int8-rv1126b.rknn'

ret = rknn.build(
    do_quantization=True,
    dataset='calibration/dataset.txt',
)
if ret != 0:
    raise RuntimeError('Failed to build INT8 RKNN model')
```

```bash
python convert_onnx_to_rknn_int8.py
sha256sum model-int8-rv1126b.rknn
```

デフォルトの INT8 構成は、通常は最初のテストとして適しています。タスクへの影響を測定した後にのみ、量子化アルゴリズム、ハイブリッド量子化、または重み圧縮を試してください。

---

## 8. デプロイ前の検証

`build()` と `export_rknn()` が成功したということは、RKNN-Toolkit2 が RV1126B 用にグラフをコンパイルできたことを示します。しかし、それだけではタスク精度、正しい後処理、あるいはデバイス上でのレイテンシを証明するものでは **ありません**。

1. 元の ONNX モデルと FP16 RKNN 構成を保持アウトサンプルで実行し、生のテンソルだけでなく、デコードされたタスク結果を比較します。
2. 同じサンプルで FP16 と INT8 の結果を比較し、許容できない精度劣化を調査します。
3. reCamera Pro 上で、エクスポートした `.rknn` をファームウェアと一致した RKNN Runtime で読み込みます。テンソル属性を問い合わせ、入力タイプ、レイアウト、サイズ、前処理および後処理を検証します。
4. デバイス上でウォームアップ後のレイテンシと持続的な挙動を測定します。

:::note ホスト側検証の限界
ホスト側の RKNN シミュレータと RV1126B NPU は、異なる実行環境です。ホストでの比較は変換と前処理を確認するものに過ぎず、最終的な受け入れには、エクスポートした `.rknn` を reCamera Pro 上でテストすることが必要です。
:::

---

## 9. トラブルシューティング

| 症状 | まず確認すること |
| --- | --- |
| `load_onnx()` が失敗する | ONNX、エクスポータの opset、入力名、静的形状、および external-data ファイルを検証します。 |
| 非対応のオペレータ | 再エクスポートするか、意味的に同等なサポート対象の演算を使用します。 |
| INT8 ビルドが失敗する | すべてのデータセットパス、入力数、dtype/shape、および画像の読み取り可能性を確認します。 |
| INT8 の精度が低い | RGB/BGR、リサイズポリシー、mean/std、キャリブレーションのカバレッジ、および後処理を確認します。 |
| ホストでは動作するがデバイスで失敗する | `rv1126b`、モデルのチェックサム、Toolkit/Runtime 2.3.2 の整合性、およびテンソル属性を確認します。 |
| デバイスでの推論が遅い | ウォームアップ後に測定し、前処理と後処理、さらに NPU 実行も確認します。 |

## 10. 次のステップ

ONNX ソース、変換スクリプト、キャリブレーションリストのチェックサム、`.rknn` のチェックサム、およびエクスポートしたモデルとの前処理/後処理の取り決めを保持してください。次に、reCamera Pro RKNN Runtime C API とモデルを統合し、デバイス上でテストします。
