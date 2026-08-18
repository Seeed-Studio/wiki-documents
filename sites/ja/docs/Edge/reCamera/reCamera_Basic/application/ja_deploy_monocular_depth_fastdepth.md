---
description: FastDepth 単眼深度推定モデルを TPU-MLIR で reCamera の CV181x TPU 向けに変換・量子化・デプロイし、YOLO11n と並列でデバイス上で 54 FPS で動作させます。
title: 単眼深度推定モデルをデプロイする (FastDepth INT8)
keywords:
  - エッジ
  - reCamera
  - 深度推定
  - FastDepth
  - モデル変換
  - TPU-MLIR
image: https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-indoor-office-result.png
slug: /recamera_deploy_monocular_depth
sidebar_position: 19
last_update:
  date: 08/18/2026
  author: Zafar Khidoyatov
---

# reCamera で単眼深度推定をデプロイする (FastDepth, INT8)

このガイドでは、単眼深度推定モデル — [FastDepth](https://github.com/dwofk/fast-depth) — を reCamera の CV181x TPU 向けに変換・量子化・デプロイし、デバイス上で実行する手順を説明します。すべてのコマンドは実機上で実行し、すべての数値は実測値です。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-indoor-office-result.png" alt="FastDepth INT8 の深度ヒートマップと並べた屋内オフィスフレーム" />
</div>

本ガイドの最後に得られる想定測定結果は次のとおりです：

| 指標 | 結果 |
|---|---|
| 深度推論レイテンシ (INT8, 224×224) | **18.4 ms** (P50 18.36 / P95 18.46, n=300) |
| 単体の深度 FPS | **54** |
| Depth + YOLO11n 直列、1 フレームあたり | 53.9 ms → **18.5 FPS** (モデルレベル) |
| INT8 の精度低下 (BF16 比, DIODE AbsRel) | **< 2%** |
| `.cvimodel` サイズ | 1.5 MB (INT8) / 3.1 MB (BF16) |
| 30 分連続動作 | クラッシュなし、ドリフトなし、メモリ安定 |

:::note 相対深度であり、メートルではありません
FastDepth は**相対的な**深度を予測し、NYU Depth V2 の *屋内* データセットで学習されています。屋内では近距離 / 遠距離の構造を正しく出力しますが、屋外シーンではレンジが大きく圧縮された結果になります（[定性的な結果](#定性的な結果-何が得られるか)を参照）。生の出力をメートル単位として解釈しないでください。
:::

パイプラインの流れ：ONNX → Top-MLIR (`model_transform`) → INT8 キャリブレーションテーブル (`run_calibration`, 500 枚の画像) → コンパイル済み `.cvimodel` (`model_deploy`, 2 段階の検証ゲート) → デバイス上推論 (`cviruntime`)。

## 前提条件

- reCamera 2002 シリーズ (SG2002 SoC, CV181x TPU)、USB 接続 (`192.168.42.1`)、ユーザー `recamera` での ssh アクセス
- 開発マシン上の Docker
- TPU-MLIR ツールチェーンコンテナ：

```bash
docker pull sophgo/tpuc_dev:v3.4
docker run --rm -it -v $(pwd):/workspace sophgo/tpuc_dev:v3.4
```

コンテナ内で、TPU-MLIR をバインドマウント上の仮想環境にインストールします（コンテナ再起動後も残るようにするため）：

```bash
python3 -m venv /workspace/tpu_env
source /workspace/tpu_env/bin/activate
pip install "tpu_mlir[onnx]==1.28.1"
pip install psutil
pip install torch --index-url https://download.pytorch.org/whl/cpu
```

:::caution 2 つのインストール時の落とし穴

1. `[all]` ではなく `[onnx]` エクストラをインストールしてください — `tpu_mlir[all]==1.28.1` は、PyPI から削除されていてもはやインストールできない paddlepaddle のバージョンを固定しています。
2. `psutil` と `torch` は未宣言の依存関係です — これらがないとツールは import 時にクラッシュします。CPU のみ対応の torch ホイールを使用してください（デフォルトの PyPI パッケージは不要な数 GB の CUDA スタックを取得します）。

:::

確認：`model_transform.py --help` を実行すると TPU-MLIR のバージョンバナーが表示されるはずです。

## ステップ 1 — ONNX モデルを取得する

FastDepth（`mobilenet-nnconv5dw-skipadd-pruned` バリアント）を、固定入力 1×3×224×224、opset ≥ 13 で ONNX にエクスポートし、[onnxsim](https://github.com/daquexian/onnx-simplifier) に通します。単純化後のグラフには `Conv / Clip / Relu / Resize / Add` のみが含まれます — これらはすべて CV181x 向け TPU-MLIR でサポートされています。（変換*前*に演算子リストを確認する習慣は後々効いてきます — 後述の [このチップでモデルは動くか？](#このチップでモデルは動くか) を参照してください。）

## ステップ 2 — Top-MLIR へ変換する

FastDepth が想定する前処理は、単純な **リサイズ + RGB + /255** です — mean/std 正規化は不要です。このレシピをここで 1 回だけ宣言すると、それが `.mlir` に焼き込まれ、以降のすべてのツール（キャリブレーション、デプロイ）が自動的に再利用します：

```bash
mkdir -p /workspace/build/fastdepth && cd /workspace/build/fastdepth
model_transform.py --model_name fastdepth \
  --model_def /workspace/fastdepth_224.onnx \
  --input_shapes [[1,3,224,224]] \
  --mean 0.0,0.0,0.0 \
  --scale 0.00392156862745098,0.00392156862745098,0.00392156862745098 \
  --pixel_format rgb \
  --test_input /workspace/test_image.jpg \
  --test_result fastdepth_top_outputs.npz \
  --mlir fastdepth_224.mlir
```

**期待される出力：** ONNX に対するレイヤーごとの比較が表示され、最終的にすべてのレイヤーが合格（`46/46`、コサイン類似度 ≈ 1.0）となります。

`fastdepth_in_f32.npz` と `fastdepth_top_outputs.npz` を保持しておいてください — これらは後で量子化モデルを検証するための固定 float32 参照です。

:::tip
`--test_input` の拡張子チェックは大文字小文字を区別します：`.JPG` は分かりにくいアサーションでクラッシュします。このファイルおよびすべてのキャリブレーション画像には小文字の `.jpg` を使用してください。
:::

## ステップ 3 — キャリブレーションデータセットを作る

ここは多くのチュートリアルが省略している部分ですが、INT8 の品質を左右します。量子化では、各レイヤーが*キャリブレーション画像に対して実際に出力する*値の範囲に 256 段階を割り当てます。推論時にその記録された範囲外の値が出るとクリップされ、そのレイヤーで情報が失われます。そのため、このセットはカメラが実際に見るものをカバーしている必要があります：

- **約 500 枚の画像** — その大半は **対象の reCamera 自身で撮影したフレーム**（昼 / 屋内 / 夜 / 逆光）で、公開データセット（例：[DIODE](https://diode-dataset.org/) の検証用画像）で補完する
- 録画全体から均等にピックアップする — 連続したほぼ同一フレームは避ける
- **デプロイ時と同一の前処理**：元画像をそのまま渡し、ツールに `.mlir` のレシピを適用させる — 自分でリサイズしない
- 小文字の `.jpg` ファイル名

:::caution
**MPEG-TS のフレーム数は当てになりません。** `.ts` 録画からフレームを抽出する際、`CAP_PROP_FRAME_COUNT` は実際の 3 倍のカウントを返すことがあります — 連続して最後まで読み出すことでフレーム数を数えてください。
:::

キャリブレーションテーブルを生成します（500 枚で約 3 分）：

```bash
run_calibration.py fastdepth_224.mlir \
  --dataset /workspace/calib_set --input_num 500 \
  -o fastdepth_cal_table
```

## ステップ 4 — 量子化してコンパイルする

```bash
model_deploy.py --mlir fastdepth_224.mlir --quantize INT8 \
  --calibration_table fastdepth_cal_table --processor cv181x \
  --test_input fastdepth_in_f32.npz \
  --test_reference fastdepth_top_outputs.npz \
  --tolerance 0.85,0.45 \
  --model fastdepth_224_int8.cvimodel
```

このツールは**2 段階の検証ゲート**を実行します — それぞれが異なる問いに答えるので、両方の読み方を理解してください：

| ゲート | 比較対象 | 答える問い | FastDepth の結果 |
|---|---|---|---|
| 1 | 量子化 MLIR vs float32 参照 | *量子化で数値計算は悪化したか？* | コサイン **0.9997** ✅ |
| 2 | コンパイル済み `.cvimodel` (TPU シミュレータ) vs その量子化 MLIR | *コンパイルで数値計算は保たれたか？* | **EQUAL (1.0)** ✅ |

:::caution ゲート 2 は形式的なものではありません
コード生成は警告（例：`cvkcv181x tiu ... wrong parameter`）を出しつつも **`[Success]` を報告する** 場合があり、その一方で数値的に壊れたモデルを生成していることがあります。
これを検出できるのはゲート 2 だけです。ゲート 1 が通過してもゲート 2 が崩壊する場合、問題は量子化ではなくモデルとチップの互換性です — [このチップでモデルは動くか？](#このチップでモデルは動くか) を参照してください。
:::

精度の基準を得るには、同じ手順で BF16 版もビルドします — `--calibration_table` を外し、`--quantize BF16` を使用します（BF16 は実数のレンジを保持するためキャリブレーション不要です）。

## ステップ 5 — reCamera 上で実行する

reCamera の OS イメージには汎用の `.cvimodel` ランナーが同梱されていないため、`cviruntime` API を利用する小さな C プログラムを使用します。これは [sscma-example-sg200x](https://github.com/Seeed-Studio/sscma-example-sg200x) ツールチェーンでクロスコンパイルし、SDK の `libcviruntime-static.a` / `libcvikernel-static.a` / `libcvimath-static.a` に静的リンクします。
API は心地よいほど小さくまとまっています：

```c
#include "cviruntime.h"

CVI_MODEL_HANDLE model = NULL;
CVI_NN_RegisterModel("fastdepth_224_int8.cvimodel", &model);

CVI_TENSOR *inputs, *outputs;
int32_t input_num, output_num;
CVI_NN_GetInputOutputTensors(model, &inputs, &input_num, &outputs, &output_num);

// fill inputs[0] with 1x3x224x224 float32 (RGB/255, CHW), then:
CVI_NN_Forward(model, inputs, input_num, outputs, output_num);
// outputs[0] now holds the 1x1x224x224 depth map (float32)

CVI_NN_CleanupModel(model);
```

<!-- LINK: full runner source (warm-up, P50/P95 timing, dual-model mode) — location TBD -->

ホスト側での前処理（Python — 生の入力ファイルを生成）：

```python
import cv2
img = cv2.imread("frame.jpg")
img = cv2.resize(img, (224, 224))
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
img = img.astype("float32") / 255.0
img.transpose(2, 0, 1).tofile("input.bin")
```

カメラ側では、TPU の利用に root 権限と空いているビデオサブシステムが必要です：

```bash
sudo /etc/init.d/S93sscma-supervisor stop   # frees VPSS/ION held by the stock stack
sudo ./depth_runner fastdepth_224_int8.cvimodel input.bin depth_out.bin 300
```

**期待される出力**（実機からの実際の出力）：

```
model registered: fastdepth_224_int8.cvimodel (target cv181x)
input : name=data fmt=FP32 count=150528 shape=[1,3,224,224]
output: name=decode_conv6/2_Relu_f32 fmt=FP32 count=50176 shape=[1,1,224,224]
depth latency over 300 runs (after 20 warm-up): mean 18.38 ms  P50 18.36 ms  P95 18.46 ms  (54.41 fps mean)
```

結果をヒートマップとして可視化します：

```python
import cv2, numpy as np
d = np.fromfile("depth_out.bin", dtype="float32").reshape(224, 224)
g = ((d - d.min()) / (d.max() - d.min()) * 255).astype("uint8")
cv2.imwrite("depth_map.png", cv2.applyColorMap(g, cv2.COLORMAP_INFERNO))
```

## ベンチマーク結果

すべての数値：224×224 入力、前処理は上記と同じ、20 回の推論でウォームアップ後、300 回の実行を測定、デバイス上（CV181x TPU）：

| ベンチマーク | mean | P50 | P95 | FPS |
|---|---|---|---|---|
| FastDepth INT8 | 18.38 ms | 18.36 | 18.46 | 54.4 |
| FastDepth BF16 | 19.55 ms | 19.54 | 19.58 | 51.2 |
| YOLO11n 検出 INT8 (標準モデル) | 35.51 ms | 35.50 | 35.53 | 28.2 |
| FastDepth INT8 + YOLO11n, 直列 | 53.90 ms | 53.88 | 53.99 | 18.5 |

知っておく価値のある 3 つのポイント：

- **TPU は決定論的です** — すべてのバリアントで P95 − P50 ≤ 0.1 ms です。対処すべきジッタはありません。
- **同居コストはゼロに近いです** — YOLO を同時ロードしても、深度モデルのコスト増は +0.01 ms です。30 分間の連続同時実行でも、クラッシュなし、レイテンシドリフトなし、メモリ安定でした。
- **INT8 の BF16 に対する速度上の優位性は約 6% 程度にとどまります** — このモデルサイズでは TPU は帯域幅ボトルネックであり、INT8 の主な利点は *モデルサイズが半分になる* ことです。どちらの精度も実用的ですが、INT8 は DIODE 上で BF16 と比較して AbsRel の差分が 2% 未満（scale-and-shift で整合）であり、一般的な 5% の許容範囲を大きく下回っています。

## 定性的な結果（何が期待できるか）

- **屋内**（分布内）：大域的な構造は正しく、最も近い物体が最も暗く、遠い壁が明るく、最も奥まった廊下が最も明るくなります。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-indoor-office-result.png" alt="屋内オフィスのフレームと、それに対応する FastDepth INT8 深度ヒートマップ" />
</div>

- **屋外**：NYU で学習した FastDepth にとっては分布外 — 距離レンジが急激に圧縮され（40 m の通りが約 3 ユニット幅にマッピングされ）、構造は粗くなります。せいぜい大まかな近距離/遠距離の手がかりとして利用できる程度です。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-outdoor-street-result.png" alt="屋外の通りのフレームと、レンジ圧縮を示す FastDepth INT8 深度ヒートマップ" />
</div>

- **夜間**：IR 照明なしのカメラでは、街灯などで照らされたシーンは、レンジが最も圧縮された粗いブロブとしてしか得られません。完全に照明のないシーンは入力がほぼ真っ黒で、意味のある結果にはなりません。

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-batch-results-a.png" alt="夜間シーンと FastDepth による深度マップ" />
  <img width="500" src="https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-batch-results-b.png" alt="昼間の屋外シーンと FastDepth による深度マップ" />
</div>

製品で高品質な屋外または夜間の深度が必要な場合は、ターゲットドメインでのファインチューニング、もしくはより強力な教師モデル（例：Depth Anything V2）からチップフレンドリーな生徒アーキテクチャへの蒸留を計画してください。

## あなたのモデルはこのチップで動作するか？

変換に成功することは、**正しく動作することと同義ではありません**。本プロジェクトで実際にあったケースとして、**ZipDepth**（NPU 指向の深度モデル）は正しく量子化され、Gate 1 のコサイン類似度は INT8 *および* BF16 の両方で 0.998 以上でした。しかし、その strip-pooling attention は形状 `[48,1]`、`[1,48]`（ストライド 48）および `[24,24]` の平均プーリングを使用しており、CV181x の TIU プーリングユニットがエンコードできるサイズを超えていました。コード生成は `cvkcv181x tiu avg pool: wrong parameter` を 4 回（プールごとに 1 回）出力しつつも成功と報告し、コンパイルされたモデルはノイズを出力しました — これは Gate 2（負の SQNR）によってのみ検出されました。この不具合は精度に依存しないため、INT8/BF16 混在の量子化テーブルでは回避できません。

reCamera 用の深度モデルにコミットする前のチェックリスト：

- ✅ まず ONNX の op リストを確認する（Netron が役に立ちます）；小さな畳み込みから構成されたアーキテクチャを優先する
- ⚠️ 大きな、またはストリップ状の **average pool** は避ける — 小さな `MaxPool`（例：SPPF の 5×5）は問題なくコンパイルされる
- ✅ 常に `--test_input/--test_reference` を指定して、両方のゲートを実行する
- Gate 1 が通過し、Gate 2 がプーリングに関する警告とともに失敗する場合：このチップをターゲットにする前に、モデルにはアーキテクチャ上の外科手術（例：大きなプールを小さなプールの正確な連鎖に分解する — 等しいグループに対する平均の平均は全体の平均に等しい）が必要です

## トラブルシューティング

| 症状 | 原因 | 対処 |
|---|---|---|
| カメラ上で `Assertion failed ... device_init` | 標準の AI スタックが TPU/ION メモリを保持している | `sudo /etc/init.d/S93sscma-supervisor stop` を実行し、`sudo` 付きで起動 |
| コンテナ内で `model_runner.py: not found` | venv が有効化されていない | `source /workspace/tpu_env/bin/activate` |
| `tpu_mlir[all]` のインストールが失敗する | 削除された paddlepaddle への upstream のピン留め | 代わりに `tpu_mlir[onnx]` をインストールする |
| 有効な画像で `--test_input` のアサーションが発生する | 拡張子が大文字の `.JPG` | 小文字の `.jpg` にリネームする |
| Gate 2 が失敗し、Gate 1 は通過する | コード生成とチップの非互換（`wrong parameter` 警告を確認） | [Will your model run on this chip?](#あなたのモデルはこのチップで動作するか？) を参照 |
| フレーム抽出で想定より少ないフレーム数しか読めない | `.ts` のメタデータにあるフレーム数が誤っている | 逐次読み出しでカウントする |

## リソース

[FastDepth](https://github.com/dwofk/fast-depth)

[TPU-MLIR](https://github.com/sophgo/tpu-mlir)

[DIODE dataset](https://diode-dataset.org/)

[reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

[reCamera example (cross-compile toolchain)](https://github.com/Seeed-Studio/sscma-example-sg200x)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
