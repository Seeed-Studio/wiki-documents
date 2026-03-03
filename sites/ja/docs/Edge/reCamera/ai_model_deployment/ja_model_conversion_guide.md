---
description: reCamera ワークショップ完全ガイド
title: reCamera 用 YOLO11n モデル変換
keywords:
  - Edge
  - reCamera
  - Model Conversion
image: https://files.seeedstudio.com/wiki/reCamera/013.jpg
slug: /ja/model_conversion_guide
last_update:
  date: 10/28/2025
  author: Peter
---

# reCamera 用 YOLO11n モデル変換：完全ガイド

## 目次

1. [はじめに](#はじめに)
2. [ハードウェア制約の理解](#ハードウェア制約の理解)
3. [前提条件](#前提条件)
4. [クラウドプロバイダーセットアップオプション](#クラウドプロバイダーセットアップオプション)
5. [ステップバイステップ変換プロセス](#ステップバイステップ変換プロセス)
6. [よくある問題とトラブルシューティング](#よくある問題とトラブルシューティング)
7. [reCamera への展開](#reCamera-への展開)
8. [よくある質問](#よくある質問)

## はじめに

### モデル変換が必要な理由

reCamera シリーズデバイスは、機械学習推論用の特殊なテンソル処理ユニット（TPU）を使用する Sophgo CV181x チップを搭載したエッジ AI カメラです。汎用 CPU や GPU とは異なり、TPU はそのアーキテクチャに最適化された特定の形式のモデルを必要とします。

**変換が必要な主な理由：**

1. **ハードウェア最適化**: CV181x チップは FP32 の代わりに INT8 量子化を使用し、モデルサイズを約 75% 削減し、推論速度を 4-8 倍向上させます
2. **メモリ制約**: reCamera デバイスは RAM が限られており（256MB-512MB）、圧縮されたモデルが必要です
3. **電力効率**: TPU 最適化モデルは CPU/GPU の代替品よりも大幅に少ない電力を消費します
4. **リアルタイム性能**: エッジデバイスは実用的なアプリケーションのために 100ms 未満の推論時間が必要です

### reCamera ハードウェアについて

reCamera ファミリーには、すべて Sophgo CV181x SoC を中心に構築されたいくつかのバリエーションが含まれています：

- **reCamera Default**: 2MP センサー、USB-C 接続を備えた基本モデル
- **reCamera Microscope**: 交換可能レンズを備えたクローズアップ撮影専用
- **reCamera HD POE**: Power-over-Ethernet サポート付きの高解像度
- **reCamera Gimbal**: オブジェクト追跡機能付きモーター駆動ジンバル

**技術仕様：**

- **プロセッサ**: Sophgo CV181x（RISC-V + TPU）
- **AI 性能**: 0.5 TOPS INT8
- **メモリ**: 256MB DDR3
- **ストレージ**: 16MB SPI Flash + microSD
- **サポート形式**: CVI モデル（Sophgo の独自形式）

### 変換の課題

YOLO11n モデルは通常 PyTorch で訓練され、ONNX 形式にエクスポートされます。しかし、reCamera の CV181x チップは ONNX モデルを直接実行できません。変換プロセスには以下が含まれます：

1. **モデルアーキテクチャ変換**: ONNX から MLIR（Multi-Level Intermediate Representation）への変換
2. **量子化**: 精度を維持しながら FP32 重みを INT8 に変換
3. **ハードウェア最適化**: TPU アクセラレーション用のレイヤー操作の適応
4. **形式変換**: 最終的な CVI モデル形式の作成

## ハードウェア制約の理解

### メモリ制限

- **モデルサイズ制限**: 実用的な展開では通常 8-16MB
- **入力解像度**: 精度と性能のバランスを取るため、YOLO11n では通常 640x640
- **バッチサイズ**: メモリ制約により 1 に制限

### 処理制約

- **サポートされる操作**: すべての ONNX 操作に TPU 相当品があるわけではありません
- **精度損失**: INT8 量子化により精度が 1-3% 低下する可能性があります
- **推論速度**: モデルの複雑さに応じて 10-30 FPS が目標です

### 標準 ML フレームワークが機能しない理由

- **TensorFlow/PyTorch**: x86/ARM CPU と NVIDIA GPU 用に設計されています
- **ONNX Runtime**: CV181x バックエンドサポートがありません
- **TensorRT**: NVIDIA 専用で、Sophgo ハードウェアと互換性がありません

## 前提条件

### 必要な知識

- 基本的な Linux コマンドライン操作
- Docker コンテナの理解
- YOLO モデルアーキテクチャの知識
- クラウド展開のための基本的なネットワーク概念

### 必要なソフトウェア

- Docker Desktop（ローカル開発用）
- SSH クライアント（macOS の Terminal、Windows の PuTTY）
- クラウドプロバイダー管理用のウェブブラウザ
- 設定ファイル用のテキストエディタ

### 必要なファイル

- ONNX 形式で訓練された YOLO11n モデル
- 100 枚のキャリブレーション画像（データセットを代表するもの）
- 検証用の 1 枚のテスト画像

## クラウドプロバイダーセットアップオプション

変換プロセスには Linux と特定のツールチェーンが必要なため、クラウドプロバイダーが最も信頼性の高い環境を提供します。主要プロバイダーのセットアップガイドは以下の通りです：

### オプション 1: DigitalOcean（初心者におすすめ）

**利点**: シンプルなインターフェース、予測可能な価格設定、優れたドキュメント

**セットアップ手順：**

1. [digitalocean.com](https://www.digitalocean.com) で DigitalOcean アカウントを作成
2. 以下の仕様で新しい Droplet を作成：
   - **イメージ**: Ubuntu 22.04 LTS
   - **プラン**: Basic、4GB RAM、2 vCPU（$24/月、使用後削除可能）
   - **リージョン**: お住まいの地域に最も近いものを選択
   - **認証**: SSH キー（推奨）またはパスワード

3. **SSH 接続：**

   ```bash
   ssh root@your_droplet_ip
   ```

4. **依存関係のインストール：**

   ```bash
   apt update && apt upgrade -y
   apt install -y docker.io git wget
   systemctl start docker
   systemctl enable docker
   ```

**推定コスト**: 変換プロセスで $0.50-2.00（使用後すぐに削除した場合）

### オプション 2: AWS EC2

**利点**: 最も包括的なクラウドプラットフォーム、無料利用枠あり

**セットアップ手順：**

1. [aws.amazon.com](https://aws.amazon.com) で AWS アカウントを作成
2. EC2 インスタンスを起動：
   - **AMI**: Ubuntu Server 22.04 LTS
   - **インスタンスタイプ**: t3.medium（2 vCPU、4GB RAM）
   - **セキュリティグループ**: あなたの IP からの SSH（ポート 22）を許可

3. **SSH 接続：**

   ```bash
   ssh -i your-key.pem ubuntu@your-instance-ip
   ```

4. **依存関係のインストール：**

   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io git wget
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker ubuntu
   ```

**推定コスト**: 変換プロセスで $0.10-0.50（t3.medium 価格）

### オプション 3: Google Cloud Platform

**利点**: 新規ユーザー向け $300 無料クレジット、優れた性能

**セットアップ手順：**

1. [cloud.google.com](https://cloud.google.com) で GCP アカウントを作成
2. Compute Engine インスタンスを作成：
   - **マシンタイプ**: e2-standard-2（2 vCPU、8GB RAM）
   - **ブートディスク**: Ubuntu 22.04 LTS、20GB
   - **ファイアウォール**: HTTP/HTTPS トラフィックを許可

3. **ブラウザ経由の SSH**（内蔵ターミナル）または gcloud CLI を使用

4. **依存関係のインストール：**

   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io git wget
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker $USER
   ```

**推定コスト**: クレジットで無料、それ以外は変換で約 $0.20-0.60

### オプション 4: Microsoft Azure

**利点**: Windows エコシステムとの良好な統合、学生割引

**セットアップ手順：**

1. [azure.microsoft.com](https://azure.microsoft.com) で Azure アカウントを作成
2. 仮想マシンを作成：
   - **イメージ**: Ubuntu Server 22.04 LTS
   - **サイズ**: Standard_B2s（2 vCPU、4GB RAM）
   - **認証**: SSH 公開キー

3. **SSH 接続：**

   ```bash
   ssh azureuser@your-vm-ip
   ```

4. **依存関係のインストール：**

   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io git wget
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker azureuser
   ```

**推定コスト**: 変換プロセスで約 $0.30-0.80

### オプション 5: Alibaba Cloud

**利点**: アジアでの強いプレゼンス、競争力のある価格設定

**セットアップ手順：**

1. [alibabacloud.com](https://www.alibabacloud.com) でアカウントを作成
2. ECS インスタンスを作成：
   - **イメージ**: Ubuntu 22.04 64-bit
   - **インスタンスタイプ**: ecs.t6-c1m2.large（2 vCPU、4GB RAM）
   - **セキュリティグループ**: SSH（22/22）を許可

3. **SSH 接続：**

   ```bash
   ssh root@your-ecs-ip
   ```

4. **依存関係のインストール：**

   ```bash
   apt update && apt upgrade -y
   apt install -y docker.io git wget
   systemctl start docker
   systemctl enable docker
   ```

**推定コスト**: 変換プロセスで約 $0.20-0.50

### オプション 6: Tencent Cloud

**利点**: 中国のユーザーに適している、手頃な価格設定

**セットアップ手順：**

1. [intl.cloud.tencent.com](https://intl.cloud.tencent.com) でアカウントを作成
2. CVM インスタンスを作成：
   - **イメージ**: Ubuntu Server 22.04 LTS 64-bit
   - **モデル**: S5.MEDIUM4（2 vCPU、4GB RAM）
   - **セキュリティグループ**: SSH（ポート 22）を許可

3. **SSH 接続：**

   ```bash
   ssh ubuntu@your-cvm-ip
   ```

4. **依存関係のインストール：**

   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io git wget
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker ubuntu
   ```

**推定コスト**: 変換プロセスで約 $0.15-0.40

## ステップバイステップ変換プロセス

### ステップ 1: 環境の準備

1. **SSH 経由でクラウドインスタンスに接続**

2. **TPU-MLIR 環境のセットアップ：**

   ```bash
   # Pull the official TPU-MLIR Docker image
   docker pull sophgo/tpuc_dev:v3.1

   # Create working directory
   mkdir ~/yolo_conversion && cd ~/yolo_conversion

   # Start Docker container
   docker run --privileged --name tpu_converter -v $PWD:/workspace -it sophgo/tpuc_dev:v3.1
   ```

3. **コンテナ内に TPU-MLIR ツールをインストール：**

   ```bash
   pip install tpu_mlir[all]==1.7

   # Clone and build TPU-MLIR
   git clone -b v1.7 --depth 1 https://github.com/sophgo/tpu-mlir.git
   cd tpu-mlir
   source ./envsetup.sh
   ./build.sh
   ```

### ステップ 2: モデルファイルのアップロード

**ローカルマシンからクラウドインスタンスにファイルをアップロード：**

```bash
# Upload ONNX model
scp your_model.onnx user@your-cloud-ip:~/yolo_conversion/

# Upload calibration images (create zip first)
zip -r calibration_images.zip /path/to/calibration/images/
scp calibration_images.zip user@your-cloud-ip:~/yolo_conversion/

# Upload test image
scp test_image.jpg user@your-cloud-ip:~/yolo_conversion/
```

### ステップ 3: ディレクトリ構造の準備

**クラウドインスタンス内で：**

```bash
# Create required directory structure
mkdir -p model_yolo11n/{COCO2017,image,Workspace}

# Extract and organize files
unzip calibration_images.zip
mv calibration_images/* model_yolo11n/COCO2017/
mv test_image.jpg model_yolo11n/image/test.jpg
mv your_model.onnx model_yolo11n/Workspace/yolo11n.onnx

# Rename calibration images to expected format
cd model_yolo11n/COCO2017/
count=1
for file in *.jpg *.png *.jpeg; do
    if [ -f "$file" ]; then
        mv "$file" "Calibration${count}.jpg"
        ((count++))
        if [ $count -gt 100 ]; then break; fi
    fi
done
cd ../..
```

### ステップ 4: Docker コンテナに入り、変換を開始

```bash
# Copy model folder into Docker container
docker cp model_yolo11n tpu_converter:/workspace/tpu-mlir/

# Enter Docker container
docker exec -it tpu_converter /bin/bash

# Navigate to workspace
cd /workspace/tpu-mlir/model_yolo11n/Workspace
```

### ステップ 5: モデル変換パイプライン

**5.1: ONNX バージョンのダウングレード**

```bash
python /workspace/tpu-mlir/downgrade_onnx.py yolo11n.onnx yolo11n_v8.onnx
```

**5.2: ONNX を MLIR に変換**

```bash
model_transform \
--model_name yolo11n \
--model_def yolo11n_v8.onnx \
--input_shapes "[[1,3,640,640]]" \
--mean "0.0,0.0,0.0" \
--scale "0.0039216,0.0039216,0.0039216" \
--keep_aspect_ratio \
--pixel_format rgb \
--output_names "/model.23/cv2.0/cv2.0.2/Conv_output_0,/model.23/cv3.0/cv3.0.2/Conv_output_0,/model.23/cv2.1/cv2.1.2/Conv_output_0,/model.23/cv3.1/cv3.1.2/Conv_output_0,/model.23/cv2.2/cv2.2.2/Conv_output_0,/model.23/cv3.2/cv3.2.2/Conv_output_0" \
--test_input ../image/test.jpg \
--test_result yolo11n_top_outputs.npz \
--mlir yolo11n.mlir
```

**パラメータの説明：**

- **`--model_name`**: 変換パイプラインにおけるモデルの識別子
  - *目的*: プロセス全体を通じて一貫した命名を作成
  - *変更可能*: はい、「traffic_detection」や「person_counter」のような説明的な名前を使用
  - *効果*: 内部命名にのみ影響し、パフォーマンスには影響なし

- **`--model_def`**: ONNX モデルファイルへのパス
  - *目的*: 変換するモデルを指定
  - *変更可能*: はい、実際の ONNX ファイル名と一致する必要があります
  - *効果*: 異なるモデルは異なる結果を生成します

- **`--input_shapes`**: 入力テンソルの次元を定義 `[batch, channels, height, width]`
  - *目的*: 変換器に期待される入力画像形式を伝える
  - *標準値*: YOLO11n の場合は `[[1,3,640,640]]`
  - *変更可能*: ⚠️ **注意** - トレーニング解像度と一致する必要があります
  - *変更の効果*:
    - より小さい（例：`320x320`）: より高速な推論、精度低下
    - より大きい（例：`1280x1280`）: より高い精度、大幅に低速、メモリ制限を超える可能性
    - 異なるアスペクト比: 画像が歪み、結果が悪化

- **`--mean`**: RGB チャンネルのピクセル正規化平均値
  - *目的*: ピクセル値をゼロ周辺に中心化（標準前処理）
  - *標準値*: `"0.0,0.0,0.0"`（平均減算なし）
  - *変更可能*: モデルが異なる正規化でトレーニングされた場合のみ
  - *一般的な代替値*:
    - ImageNet: `"123.675,116.28,103.53"`（モデルが ImageNet 前処理を使用する場合）
    - カスタム: トレーニング前処理と正確に一致させる

- **`--scale`**: ピクセル正規化スケール係数
  - *目的*: ピクセル値を 0-255 範囲から 0-1 範囲にスケール
  - *標準値*: `"0.0039216,0.0039216,0.0039216"`（1/255 と同等）
  - *変更可能*: モデルが異なる入力範囲を期待する場合のみ
  - *変更の効果*:
    - 間違ったスケール値はモデルの完全な失敗を引き起こします
    - モデルがトレーニングされた値と正確に一致する必要があります

- **`--keep_aspect_ratio`**: リサイズ時に画像の比率を維持
  - *目的*: 伸縮ではなくパディングによって画像の歪みを防ぐ
  - *変更可能*: はい、無効にするには `--no_keep_aspect_ratio` を使用
  - *効果*:
    - 有効（デフォルト）: より良い精度、画像に黒いパディング
    - 無効: わずかに高速、ただし画像が歪む可能性

- **`--pixel_format`**: カラーチャンネルの順序
  - *目的*: 入力が RGB または BGR カラー順序を使用するかを指定
  - *標準値*: ほとんどの現代的なモデルでは `rgb`
  - *変更可能*: はい、モデルが期待する場合は `bgr` に
  - *間違った設定の効果*: 色が入れ替わります（赤が青に見えるなど）

- **`--output_names`**: 出力として使用するモデル層を指定
  - *目的*: 検出結果を含む層を変換器に伝える
  - *YOLO11n の標準*: 表示された 6 つの出力層（3 スケール × 各 2 ヘッド）
  - *変更可能*: ⚠️ **上級ユーザーのみ** - 深いモデル知識が必要
  - *効果*: 間違った出力は検出が機能しなくなります

- **`--test_input`**: 検証画像へのパス
  - *目的*: 変換前後の結果を比較して変換精度をテスト
  - *変更可能*: はい、データセットから代表的な画像を使用
  - *推奨*: デプロイメントシナリオに類似した画像を使用

- **`--test_result`**: 検証データの出力ファイル
  - *目的*: 後の比較のための参照結果を保存
  - *変更可能*: はい、`.npz` で終わる任意のファイル名
  - *効果*: ファイル命名にのみ影響

- **`--mlir`**: 出力 MLIR ファイル名
  - *目的*: 次の変換ステップのための中間表現
  - *変更可能*: はい、ただし `.mlir` 拡張子を保持
  - *効果*: ファイル命名にのみ影響

**5.3: キャリブレーションテーブルの生成**

```bash
run_calibration \
yolo11n.mlir \
--dataset ../COCO2017 \
--input_num 100 \
-o yolo11n_calib_table
```

**パラメータの説明：**

- **`yolo11n.mlir`**: 前のステップからの入力 MLIR モデル
  - *目的*: キャリブレーションデータが必要なモデルファイル
  - *変更可能*: ステップ 5.2 の出力ファイル名と一致する必要があります
  - *効果*: 異なるモデルは異なるキャリブレーションテーブルを生成します

- **`--dataset`**: キャリブレーション画像ディレクトリへのパス
  - *目的*: アクティベーション範囲を分析するための代表的な画像を提供
  - *変更可能*: はい、ただしデプロイメントシナリオに類似した画像を含む必要があります
  - *要件*: 画像は `.jpg`、`.png`、または `.bmp` 形式である必要があります
  - *品質への影響*: より多様で代表的な画像 = より良いキャリブレーション

- **`--input_num`**: 使用するキャリブレーション画像の数
  - *目的*: 統計分析のために処理される画像数を決定
  - *標準値*: `100`（精度と処理時間の良いバランス）
  - *変更可能*: はい、実用的な制限内で
  - *変更の効果*:
    - **より少ない画像（25-50）**: より高速なキャリブレーション、潜在的により低い量子化精度
    - **より多い画像（200-500）**: より良いキャリブレーション精度、大幅に長い処理時間
    - **少なすぎる（&lt;10）**: 悪い量子化、大幅な精度低下
    - **多すぎる（>1000）**: 収穫逓減、非常に長い処理時間

- **`-o`（出力ファイル）**: キャリブレーションテーブルファイルの名前
  - *目的*: 量子化のための層アクティベーションに関する統計データを保存
  - *変更可能*: はい、任意のファイル名（拡張子不要）
  - *効果*: ファイル名にのみ影響、内容は同じ

**キャリブレーション中に起こること：**

1. **統計分析**: 各キャリブレーション画像がモデルを通じて処理されます
2. **アクティベーションマッピング**: ツールは各層が生成する値の範囲を記録します
3. **量子化計画**: FP32 値を INT8 に効率的にマップする方法を決定します
4. **精度保持**: 精度損失を最小化する最適なスケーリング係数を見つけます

**期待される出力**: このプロセスは 5-15 分かかり、次のような進行状況が表示されるはずです：

```
input_num = 100, ref = 100
real input_num = 100
activation_collect_and_calc_th for op: /model.23/cv3.2/cv3.2.2/Conv_output_0_Conv
[Progress bar showing completion]
auto tune end, run time: XXX seconds
```

**5.4: 最終 INT8 モデルのコンパイル**

```bash
model_deploy \
--mlir yolo11n.mlir \
--quantize INT8 \
--quant_input \
--processor cv181x \
--calibration_table yolo11n_calib_table \
--test_input ../image/test.jpg \
--test_reference yolo11n_top_outputs.npz \
--customization_format RGB_PACKED \
--fuse_preprocess \
--aligned_input \
--model yolo11n_sym_int8.cvimodel
```

**パラメータの説明：**

- **`--mlir`**: 入力 MLIR モデルファイル
  - *目的*: TPU 用にコンパイルされるモデル表現
  - *変更可能*: ステップ 5.2 の出力と一致する必要があります
  - *効果*: 異なる MLIR ファイルは異なる最終モデルを生成します

- **`--quantize`**: 量子化精度レベル
  - *目的*: モデルの重みとアクティベーションの数値精度を決定
  - *標準値*: reCamera の場合は `INT8`（CV181x TPU に必要）
  - *変更可能*: CV181x では限定的なオプション
  - *利用可能なオプション*:
    - `INT8`: reCamera に必要、4 倍小さく、4-8 倍高速
    - `F16`: より高い精度、より大きなサイズ、メモリに収まらない可能性
    - `F32`: 元の精度、reCamera デプロイメントには大きすぎる

- **`--quant_input`**: 入力前処理を量子化
  - *目的*: 効率のために入力スケーリング/正規化を TPU に移動
  - *変更可能*: はい、このフラグを省略して入力処理を CPU に保持
  - *効果*:
    - **有効**（推奨）: より高速な推論、より良い TPU 利用率
    - **無効**: わずかに低速、ただしより柔軟な入力形式

- **`--processor`**: ターゲットハードウェア仕様
  - *目的*: 特定のチップアーキテクチャ用にコード生成を最適化
  - *標準値*: すべての reCamera モデルで `cv181x`
  - *変更可能*: ⚠️ **絶対に変更しない** - 他の値は reCamera で動作しません
  - *効果*: 間違ったプロセッサ設定はデプロイメント失敗を引き起こします

- **`--calibration_table`**: 量子化参照データ
  - *目的*: 最適な INT8 変換のための統計データを提供
  - *変更可能*: ステップ 5.3 の出力ファイル名と一致する必要があります
  - *効果*: 異なるキャリブレーションデータはモデル精度に影響します

- **`--test_input`**: 精度テスト用の検証画像
  - *目的*: 量子化後のモデル精度を検証
  - *変更可能*: はい、典型的な使用ケースを表すべきです
  - *推奨*: 一貫性のためにステップ 5.2 と同じ画像を使用

- **`--test_reference`**: 比較用の参照出力
  - *目的*: 量子化モデル出力を元の FP32 結果と比較
  - *変更可能*: ステップ 5.2 の出力ファイル名と一致する必要があります
  - *効果*: 検証にのみ使用、最終モデルには影響しません

- **`--customization_format`**: 入力データレイアウト最適化
  - *目的*: TPU 処理のためのメモリレイアウトを最適化
  - *標準値*: 画像データの場合は `RGB_PACKED`
  - *変更可能*: 上級ユーザーのみ
  - *効果*:
    - `RGB_PACKED`: RGB 画像用に最適化（推奨）
    - `NCHW`: 標準テンソル形式、低速の可能性

- **`--fuse_preprocess`**: 前処理をモデルに統合
  - *目的*: 画像のリサイズ/正規化を推論と組み合わせる
  - *変更可能*: はい、フラグを省略して前処理を別途処理
  - *効果*:
    - **有効** (推奨): ワンステップデプロイメント、パフォーマンス向上
    - **無効**: より柔軟性があるが、外部前処理が必要

- **`--aligned_input`**: メモリアライメント最適化
  - *目的*: TPU用の最適なメモリアクセスパターンを確保
  - *変更可能*: はい、ただしパフォーマンスのため保持を推奨
  - *効果*:
    - **有効**: メモリ帯域幅の利用率向上
    - **無効**: わずかに遅くなる可能性

- **`--model`**: 最終変換モデルの出力ファイル名
  - *目的*: reCamera デプロイメント用の `.cvimodel` ファイルを作成
  - *変更可能*: はい、`person_detection.cvimodel` のような説明的な名前を使用
  - *要件*: `.cvimodel` 拡張子で終わる必要がある
  - *効果*: ファイル名にのみ影響

**コンパイル中に起こること:**

1. **レイヤー変換**: 各ニューラルネットワークレイヤーがTPU命令に変換される
2. **メモリ最適化**: モデルの重みが効率的なTPUアクセス用に配置される
3. **量子化適用**: FP32重みがキャリブレーションデータを使用してINT8に変換される
4. **ハードウェアマッピング**: 操作が特定のTPU機能ユニットにマッピングされる
5. **検証**: 最終モデルが参照出力に対してテストされる

**期待される出力**: 変換は99%以上の類似度スコアを示す検証結果で完了するはずです:

```
npz compare PASSED
230 compared
230 passed
min_similarity = (0.9999997615814209, 0.9999984392787142, 116.13544464111328)
```

**変換後のパフォーマンス期待値:**

- **モデルサイズ**: 3-8MB（元のONNXの20-40MBと比較）
- **推論速度**: reCamera で15-30 FPS
- **精度**: 元のモデルパフォーマンスの97-99%
- **メモリ使用量**: 推論中約10-20MB RAM

### ステップ 6: 変換されたモデルのダウンロード

**6.1: Docker を終了してファイルをホストにコピー**

```bash
# Exit Docker container
exit

# Copy converted model from container to host
docker cp tpu_converter:/workspace/tpu-mlir/model_yolo11n/Workspace/yolo11n_sym_int8.cvimodel ./

# Verify file exists and check size (should be 2-10MB)
ls -lh yolo11n_sym_int8.cvimodel
```

**6.2: ローカルマシンにダウンロード**

```bash
# From your local machine
scp user@your-cloud-ip:~/yolo_conversion/yolo11n_sym_int8.cvimodel ~/Downloads/
```

### ステップ 7: クラウドリソースのクリーンアップ

**継続的な課金を避けるため、クラウドインスタンスの終了を忘れずに！**

- **DigitalOcean**: コントロールパネルからDropletを削除
- **AWS**: EC2インスタンスを終了
- **GCP**: Compute Engineインスタンスを削除
- **Azure**: 仮想マシンを削除
- **Alibaba/Tencent**: ECS/CVMインスタンスをリリース

## よくある問題とトラブルシューティング

### 問題 1: 変換中の「ファイルが見つかりません」エラー

**症状**:

```
../image/test.jpg doesn't existed !!!
```

**解決策**:

```bash
# Check if file exists and has correct extension
ls -la ../image/
# If file has .img extension, rename it
mv ../image/test.img ../image/test.jpg
```

### 問題 2: ファイル移動時の「ディレクトリが空ではありません」

**症状**:

```
mv: cannot move 'Download/model_yolo11n' to 'tpu-mlir/model_yolo11n': Directory not empty
```

**解決策**:

```bash
# Remove existing directory and replace
rm -rf tpu-mlir/model_yolo11n
mv Download/model_yolo11n tpu-mlir/
```

### 問題 3: 「入力がありません」でキャリブレーションが失敗

**症状**:

```
RuntimeError: There is no inputs
```

**解決策**:

```bash
# Ensure calibration images are in correct format (.jpg, .png)
cd ../COCO2017/
for file in *.img; do
    mv "$file" "${file%.img}.jpg"
done
```

### 問題 4: Docker 権限エラー

**症状**:

```
permission denied while trying to connect to the Docker daemon socket
```

**解決策**:

```bash
# Add user to docker group
sudo usermod -aG docker $USER
# Log out and log back in, or run:
newgrp docker
```

### 問題 5: メモリ不足エラー

**症状**:

```
CUDA out of memory
```

**解決策**:

- より大きなクラウドインスタンスにアップグレード（8GB以上のRAM）
- 変換コマンドのバッチサイズを削減
- キャリブレーション画像を減らす（最低50枚）

### 問題 6: モデル検証の失敗

**症状**:

```
npz compare FAILED
```

**解決策**:

- テスト画像がトレーニングデータを代表しているか確認
- ONNXモデルが正しいバージョンか確認
- 異なるテスト画像を試す

### 問題 7: SSH接続の問題

**症状**:

```
Connection refused
ssh: connect to host [IP] port 22: Connection refused
```

**解決策**:

- クラウドプロバイダーのセキュリティグループがSSH（ポート22）を許可しているか確認
- インスタンスが実行中か確認
- 異なるSSHキーまたはパスワード認証を試す

## reCamera へのデプロイメント

### ステップ 1: reCamera の接続

1. USB-Cケーブルで reCamera をコンピューターに接続
2. `http://192.168.42.1` でWebインターフェースにアクセス
3. ユーザー名: `root`、パスワード: `recamera.1` でログイン

### ステップ 2: モデルのアップロード

1. Workspace セクションに移動
2. フローエディターでモデルノードをクリック
3. "Upload" ボタンをクリック
4. `.cvimodel` ファイルを選択
5. モデルパラメーターを設定:
   - **Model Name**: `yolo11n_detection`
   - **Classes**: クラス名を入力（カンマ区切り）
   - **Confidence Threshold**: 0.5（必要に応じて調整）
   - **IoU Threshold**: 0.45

### ステップ 3: デプロイとテスト

1. "Deploy" ボタンをクリック
2. "Successfully deployed" メッセージを待つ
3. ライブプレビューのためにダッシュボードに移動
4. 必要に応じて信頼度/IoU閾値を調整

## よくある質問

### Q: 変換プロセスにはどのくらい時間がかかりますか？

**A**: モデルの複雑さとクラウドインスタンスのパフォーマンスによって通常20-45分です。キャリブレーションステップが通常最も長くなります。

### Q: 異なるYOLOバージョンを使用できますか？

**A**: このガイドはYOLO11n専用です。他のバージョン（YOLOv8、YOLOv9）は異なる出力レイヤー名が必要で、互換性の問題がある可能性があります。

### Q: 変換後にモデルの精度が大幅に低下した場合はどうすればよいですか？

**A**: INT8量子化による精度低下（1-3%）は正常です。低下が5%以上の場合は、以下を試してください:

- より代表的なキャリブレーション画像を使用
- キャリブレーション画像数を200-500に増加
- デプロイメント時の信頼度閾値を調整

### Q: カスタムデータセットで訓練されたモデルを変換できますか？

**A**: はい、ただしキャリブレーション画像がカスタムデータセットを代表していることを確認してください。100枚のキャリブレーション画像は、モデルが遭遇するシナリオの多様性をカバーする必要があります。

### Q: サポートされる最大モデルサイズは？

**A**: reCamera のメモリ制限により、実用的なモデルサイズは約8-16MBです。YOLO11nは通常、変換後3-8MBのモデルを生成します。

### Q: クラウドインスタンスを実行し続ける必要がありますか？

**A**: いいえ、変換されたモデルをダウンロードした後、すぐにインスタンスを終了できます。変換は一回限りのプロセスです。

### Q: 複数のモデルをバッチ変換できますか？

**A**: はい、同じ環境を維持し、異なるモデルファイルでステップ5-6を繰り返すことで複数のモデルを変換できます。

### Q: ここでカバーされていないエラーが発生した場合はどうすればよいですか？

**A**:

1. Dockerコンテナログを確認: `docker logs tpu_converter`
2. ONNXモデルが最初にPython環境で正しく読み込まれるか確認
3. より簡単なテストモデルで問題を分離
4. 具体的なエラーメッセージと共にSeeed Studioサポートに連絡

### Q: クラウドデプロイメントの代替手段はありますか？

**A**: はい、以下が可能です:

- Mac/WindowsでDocker Desktopをローカルで使用（大量のRAMが必要）
- WindowsでDockerを使用してWSL2をセットアップ
- ローカルLinuxマシンまたはVMを使用

ただし、信頼性とパフォーマンスのためクラウドデプロイメントが推奨されます。

---

## まとめ

reCamera デプロイメント用のYOLO11nモデルの変換には、ハードウェア制約とTPU-MLIRツールチェーンの両方を理解する必要があります。プロセスにはいくつかのステップがありますが、このガイドに従うことで、エッジAIデプロイメント用に正常に変換されたモデルが得られるはずです。

成功の鍵は:

1. **準備**: すべてのファイルを正しい形式と構造で用意
2. **環境**: 適切に設定されたLinux環境を使用（クラウド推奨）
3. **忍耐**: キャリブレーションと変換ステップに十分な時間を確保
4. **検証**: デプロイメント前に変換されたモデルを徹底的にテスト

追加サポートについては、[SeeedStudio ReCamera wiki](https://wiki.seeedstudio.com/ja/recamera_getting_started/) または [TPU-MLIR documentation](https://github.com/sophgo/tpu-mlir) を参照してください。


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
