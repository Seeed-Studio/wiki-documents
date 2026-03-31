---
description: この Wiki では、RealSense 深度カメラを用いた点群再構成と、再構成された点群上でのターゲット物体に対する 3D バウンディングボックス検出を紹介します。
title: RealSense 3D セグメンテーション
keywords:
  - RealSense
  - YOLO
  - realsense camera
  - GPU acceleration
  - RGB-D camera
image: https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/3D_Seg/tableseg.webp
slug: /realsense_3d_seg
sku: 113990795,100000540
last_update:
  date: 2025-10-10T00:00:00.000Z
  author: ZhangJiaQuan
createdAt: '2026-03-28'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/ja/realsense_3d_seg/
translation:
  skip:
    - zh-CN
---
# RealSense 3D セグメンテーション
<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/3D_Seg/tableseg.jpg" />
</div>
## デバイス概要

### RealSense D405

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD405/D405.jpg" />
</div>

RealSense D405 深度カメラは、サブミリメートル精度での近距離コンピュータビジョンタスク向けに設計された短距離ステレオカメラです。推奨動作距離は **7 cm ～ 50 cm** です。高解像度グローバルシャッターセンサーを備え、専用の RGB センサーを必要とせずに、イメージシグナルプロセッサ（ISP）を用いて整列済み RGB データを生成します。このコンパクトなカメラは、精密ロボティクス、医用画像処理、自動検査シナリオ向けに最適化されています。

### RealSense D435i

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD435i/D435i_1.jpg" />
</div>

RealSense D435i 深度カメラは、深度知覚とモーショントラッキングを組み合わせたステレオカメラで、ロボティクス、3D 再構成、SLAM、自動認識アプリケーション向けに設計されています。アクティブステレオ深度技術を採用し、広い視野角、グローバルシャッター深度センサー、RGB カラー画像、および内蔵 IMU を提供し、深度・カラー・モーションデータを同期して出力できます。このコンパクトなカメラは、移動ロボットの障害物回避、空間モデリング、経路計画、リアルタイム環境認識などの近距離～中距離コンピュータビジョンタスクに適しています。

## はじめに

このデモは OpenCV セグメンテーションに基づいており、深度カメラを用いて点群を再構成し、その再構成された点群上でターゲット物体検出を行います。出力される情報は次のとおりです：

- オブジェクトカテゴリ
- オブジェクト中心の XYZ 座標
- バウンディングボックスの寸法
- バウンディングボックスのヨー角

また、Open3D による可視化もサポートしています。このソリューションは、テーブルトップ把持、物体位置推定、把持候補姿勢のフィルタリングなどのロボット認識タスクに適しており、ロボットアームの把持計画および後続動作のために安定した 3D 幾何情報を提供できます。

## 前提条件

- RealSense D435i または RealSense D405

## クイックスタート

### 1. プロジェクトコードの取得

まず、プロジェクトをローカルにクローンし、プロジェクトディレクトリに移動します：

```bash
git clone git@github.com:Miscanthus40076/TabletopSeg3D.git
cd TabletopSeg3D
```

> 注：以下のすべてのインストールおよび実行コマンドは、特に断りがない限りプロジェクトルートディレクトリ `TabletopSeg3D` から実行されます。

### 2. Python 仮想環境

専用の Python 仮想環境を使用することを推奨します。推奨バージョンは **Python 3.11** です。

`conda` で環境を作成します：

```bash
conda create -n tabletopseg3d python=3.11
conda activate tabletopseg3d
```

`venv` で環境を作成します：

```bash
python3.11 -m venv .venv
source .venv/bin/activate
```

### 3. システム依存パッケージ

このプロジェクトを実行する前に、深度カメラのデータ取得およびドライバアクセスをサポートするために、システムに **Intel RealSense SDK / librealsense** がインストールされている必要があります。

注意：

- コードを読むだけ、ドキュメントを書く、あるいは静的解析を行うだけであれば、この依存関係は一時的にスキップしても構いません。
- 深度カメラを接続して実際にこのデモを実行したい場合は、この依存関係を事前にインストールしておく必要があります。

### 4. Python 依存パッケージのインストール

このプロジェクトでは、次の 2 つの推奨インストールパスを提供しています：

- デフォルトの CPU インストール
- GPU アクセラレーション付きインストール

お使いのハードウェアに応じて適切なオプションを選択してください。

#### 4.1 デフォルトの CPU インストール

次のコマンドを実行して、プロジェクトの依存パッケージをインストールします：

```bash
python -m pip install -r requirements.txt
```

#### 4.2 GPU アクセラレーション

お使いのデバイスに NVIDIA GPU が搭載され、CUDA 環境が正しく構成されている場合は、GPU インストールパスを使用して YOLO セグメンテーション推論の性能を向上させることができます。

先に進む前に、システムが次の要件を満たしていることを確認してください：

- NVIDIA GPU ドライバがインストールされている
- ドライバと互換性のある CUDA ランタイムがインストールされている
- CUDA バージョンに対応した GPU 版の `torch` および `torchvision` をインストールする予定である

CUDA バージョンに対応した GPU 版の `torch` および `torchvision` をインストールします：

```bash
pip install torch torchvision --index-url https://download.pytorch.org/whl/cuXXX
```

ここで：

- `cuXXX` を実際の CUDA バージョンタグに置き換えます
- 一般的な例としては `cu121` や `cu124` などがあります

## 5. 実行

### 5.1 デバイスシリアル番号の取得

```bash
python scripts/realtime_open3d_scene.py --list-devices
```

### 5.2 可視化モードの起動

シリアル番号を、お使いのデバイスの実際のシリアル番号に置き換えてください：

```bash
python scripts/realtime_open3d_scene.py \
  --serial 419522072950 \
  --device cpu \
  --show-labels
```

### 5.3 GUI なしで実行

Open3D のグラフィカルインターフェースが不要で、各フレームの構造化された検出結果を直接取得したい場合は、ヘッドレスモードで実行できます：

```bash
python scripts/realtime_open3d_scene.py \
  --serial 419522072950 \
  --device cpu \
  --frames 10 \
  --no-display
```

このモードでは、プログラムはフレームごとに JSON データを出力し、主に次の情報を含みます：

- ターゲットカテゴリ
- ターゲット中心の 3D 座標
- ターゲットバウンディングボックスの寸法
- ターゲットバウンディングボックスのヨー角

### 5.4 D405 向け推奨パラメータ

D405 のような近距離用深度カメラでは、より安定した点群結果を得るために、有効な深度範囲を狭めることが一般的に推奨されます。

```bash
python scripts/realtime_open3d_scene.py \
  --serial 409122273421 \
  --device cpu \
  --min-depth 0.02 \
  --max-depth 0.50
```
