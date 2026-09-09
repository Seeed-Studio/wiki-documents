---
description: このチュートリアルでは、RGB-D デプスカメラと YOLO/OBB 把持パイプラインを使用して、reBot Arm B601-RS 向けの完全なビジュアル把持デモを構築する方法を説明します。
title: reBot Arm B601-RS ビジュアル把持デモ
keywords:
  - reBot Arm
  - B601-RS
  - 把持
  - RGB-D
  - YOLO
  - ハンドアイキャリブレーション
  - ロボット
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif
slug: /rebot_arm_b601_rs_grasping_demo
last_update:
  date: 2026-06-30
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-15'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_grasping_demo/
---

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# reBot Arm B601-RS ビジュアル把持デモ

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Camera-RGB--D-green.svg" alt="Camera" />
    <img src="https://img.shields.io/badge/Detection-YOLO-yellow.svg" alt="YOLO" />
</p>

<p align="center">
  <strong>奥行き認識 · 物体検出 · ハンドアイキャリブレーション · 自律把持 · 完全オープンソース</strong>
</p>

YOLO は広く利用されているリアルタイム物体検出モデルのファミリーで、1 回のフォワードパスでターゲットの位置特定と分類を行うことができます。本チュートリアルでは、YOLO、RGB-D デプスカメラ、および reBot Arm B601-RS を使用して、環境構築、カメラ統合、ハンドアイキャリブレーション、把持検証を含む、デスクトップ向けの動作するビジュアル把持デモを構築します。

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif" alt="reBot Arm B601-RS visual grasping demo" />
</p>

## プロジェクトの特長

1. **YOLO + OBB からの直接把持姿勢推定**
   このパイプラインでは、検出ボックスまたは OBB の最小外接矩形を直接使用し、短軸をグリッパの開閉方向として扱うことで、複雑な 3D 点群処理を回避します。

2. **GraspNet-Baseline による 6D 把持姿勢推定（オプション）**
   本プロジェクトは、RGB-D 点群からの 6D 把持姿勢推定のために GraspNet-Baseline（`graspnet/graspnet-baseline`）にも対応しており、YOLO のバウンディングボックスを用いてターゲット候補を選択し、より複雑な把持実験を行うことができます。

3. **ロボットアームおよびグリッパドライバの統合**
   主要な把持スクリプトは、`reBotArm_control_py` のロボットアームおよびエンドポーズコントローラに基づいており、グリッパの開閉、力制御把持、TCP 姿勢読み取りのための軽量な把持ヘルパーを備えています。

4. **オープンソースかつ拡張可能**
   すべてのソースコードは公開されており、ユーザーは自分のニーズに応じて制御アルゴリズムや動作をカスタマイズできます。

## 仕様

このチュートリアルで使用するハードウェアは [Seeed Studio](https://www.seeedstudio.com/) によって提供されています。

<table>
  <thead>
    <tr>
      <th>パラメータ</th>
      <th>仕様</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ロボットアームモデル</td>
      <td>reBot Arm B601-RS</td>
    </tr>
    <tr>
      <td>自由度</td>
      <td>6-DOF + グリッパ</td>
    </tr>
    <tr>
      <td>カメラモデル</td>
      <td>Orbbec Gemini 2 / Intel RealSense D435i / D405</td>
    </tr>
    <tr>
      <td>検出方式</td>
      <td>YOLO + OBB 最小外接矩形</td>
    </tr>
    <tr>
      <td>通信方式</td>
      <td>USB2CAN アダプタ経由の CAN バス；USB 3.0 カメラ接続</td>
    </tr>
    <tr>
      <td>動作電圧</td>
      <td>48V DC</td>
    </tr>
    <tr>
      <td>ホストプラットフォーム</td>
      <td>Ubuntu 22.04+ PC</td>
    </tr>
    <tr>
      <td>推奨 Python バージョン</td>
      <td>Python 3.10</td>
    </tr>
  </tbody>
</table>

## 部品表（BOM）

| コンポーネント | 数量 | 同梱 |
|--|--|--|
| reBot Arm B601-RS ロボットアーム | 1 | ✅ |
| グリッパ | 1 | ✅ |
| USB2CAN シリアルブリッジ | 1 | ✅ |
| 電源アダプタ（48V） | 1 | ✅ |
| USB-C / 通信用ケーブル | 1 | ✅ |
| RGB-D デプスカメラ | 1 | ✅ |
| カメラコネクタ / 取付ブラケット | 1 | ✅ |

### 配線

1. デプスカメラを USB 3.0 でホストに接続します。
2. USB2CAN アダプタをアームの CAN バスに接続します。
3. 48V 電源、カメラ、ロボットアームがすべて確実に接続されていることを確認します。
4. パーミッションを設定します：

```bash
sudo chmod a+rw /dev/bus/usb/*/*
sudo chmod 666 /dev/ttyUSB0
```

## 動作環境要件

| 項目 | 要件 |
|------|-------------|
| オペレーティングシステム | Ubuntu 22.04+ |
| Python | 3.10 |

## インストール手順

### ステップ 0. 先にロボットアームの基本準備を完了する

このチュートリアルを始める前に、[reBot Arm B601-RS クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/) の内容（ロボットアームの組み立て、ゼロ点初期化、モーター ID 設定、基本的な接続確認）を完了してください。

### ステップ 1. リポジトリをクローンする

公式の Seeed-Projects リポジトリを使用することを推奨します：

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

### ステップ 2. conda 環境を作成・設定する

```bash
conda env create -f environment.yml -n rebotarm
conda activate rebotarm
```

別の環境名を使用したい場合は、コマンド内の `rebotarm` を任意の名前に置き換えてください。

### ステップ 3. ロボットアーム SDK をインストールする

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

もし `pip install -e .` が `Multiple top-level packages discovered in a flat-layout` を報告する場合は、`reBotArm_control_py` 内の `pyproject.toml` に明示的なパッケージ検出設定を追加し、その後もう一度 `pip install -e .` を実行してください：

```toml
[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

B601 DM と RS の設定は SDK の設定ファイルで選択します。B601-RS の場合は、`sdk/reBotArm_control_py/config/rebotarm.yaml` 内で次の内容を確認してください：

```yaml
hardware_yaml: rebotarm_rs.yaml
```

ビジュアル把持プログラムはこの SDK 設定を読み取り、対応するアーム制御モードとグリッパパラメータを自動的に選択します。

### ステップ 4. デプスカメラ SDK をインストールする

本プロジェクトは Orbbec Gemini 2 や RealSense D435i / D405 などの RGB-D デプスカメラをサポートします。使用するカメラに対応した SDK をインストールしてください。すでに環境でカメラドライバを import できる場合は、このステップをスキップできます。

**Orbbec Gemini 2**

Orbbec Gemini 2 デプスカメラは、Orbbec SDK v2 の Python ラッパーである `pyorbbecsdk` に依存します。まずはビルド済みの Python パッケージをインストールすることを推奨します：

**オプション 1: pip からインストール（推奨）**

```bash
pip install pyorbbecsdk2
```

**オプション 2: GitHub から取得**

```bash
sudo apt-get update
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev

cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

中国本土のユーザーは次を利用できます：

```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

ソースからインストールする場合は、`pip install -e .` を実行する前に、CMake でネイティブ拡張がビルドされており、`install/lib` に `pyorbbecsdk*.so` と Orbbec の共有ライブラリが含まれていることを確認してください。

上記のすべてのインストール方法がうまくいかない場合は、以下の公式 Orbbec ドキュメントを参照してください。

**インストールの検証**

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
```

初めて使用する場合は、udev ルールをインストールすることを推奨します：

```bash
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

**RealSense D435i / D405**

RealSense カメラは `pyrealsense2` に依存します。通常は pip で直接インストールできます：

```bash
pip install pyrealsense2
python -c "import pyrealsense2; print('pyrealsense2 OK')"
```

システムで RealSense のツールチェーン全体や udev ルールが必要な場合は、公式の RealSense SDK ドキュメントに従って `librealsense2` をインストールしてください。

**SDK リソースまとめ**

| リソース | リンク |
|------|------|
| Gemini 2 製品ページ | https://www.orbbec.com.cn/index/Product/info.html?cate=38&id=51 |
| 開発リソース | https://www.orbbec.com.cn/index/Download2025/info.html?cate=121&id=1 |
| Orbbec SDK v2 | https://github.com/orbbec/OrbbecSDK_v2 |
| SDK v2 API ドキュメント | https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/ |
| pyorbbecsdk | https://github.com/orbbec/pyorbbecsdk |
| pyorbbecsdk ドキュメント | https://orbbec.github.io/pyorbbecsdk/index.html |
| ROS2 ラッパー | https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main |
| Intel RealSense SDK | https://github.com/realsenseai/librealsense |

### ステップ 5. GraspNet を設定する（オプション）

`scripts/main.py` や `scripts/ordinary_grasp_pipeline.py` を使用するだけであれば、GraspNet は不要です。`scripts/graspnet_camera_demo.py` や `scripts/grasp.py` を実行したい場合のみ設定してください。これらは GraspNet、CUDA 対応の PyTorch、PointNet2/knn の CUDA オペレータ、および学習済みチェックポイントを必要とします。

GraspNet の `pointnet2` / `knn` 拡張は CUDA コンパイラを必要とします。開始する前に、アクティブな環境から `nvcc` が見えることを確認し、`nvcc` が報告する CUDA バージョンが PyTorch のビルドに使用された CUDA バージョンと一致しているかを確認してください：

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

もし `nvcc` が存在しない、または `nvcc` が報告する CUDA バージョンが `torch.version.cuda` と一致しない場合は、現在の PyTorch の CUDA バージョンに合った CUDA コンパイラをインストールしてください。たとえば、PyTorch が `13.0` と報告している場合：

```bash
conda install -c nvidia cuda-nvcc=13.0
```

代わりに、現在の `nvcc` バージョンに一致する PyTorch ビルドをインストールすることもできます。2 つのバージョンは一致している必要があり、一致しない場合は `pointnet2` / `knn` のビルド時に `The detected CUDA version (...) mismatches the version that was used to compile PyTorch (...)` というエラーで失敗します。

```bash
cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline

# Install PyTorch for your CUDA version first, then install GraspNet runtime dependencies
pip install open3d tensorboard Pillow tqdm

# Configure CUDA build paths before building the local operators.
export CUDA_HOME=$CONDA_PREFIX
export TORCH_CUDA_ARCH_LIST="12.0"
export CPATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPATH
export CPLUS_INCLUDE_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPLUS_INCLUDE_PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/lib:$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

# Build CUDA operators
cd pointnet2
pip install . --no-build-isolation
cd ../knn
pip install . --no-build-isolation
cd ..

# Install GraspNet API
git clone https://github.com/graspnet/graspnetAPI.git
cd graspnetAPI
sed -i "s/'sklearn'/'scikit-learn'/" setup.py
pip install .
cd ../../..
```

:::tip
注意：公式の graspnet-baseline リポジトリのドキュメントに従って `python setup.py install` を使用すると、CUDA / PyTorch 関連のエラーが発生する場合があります。アクティブな conda 環境にすでにインストールされている PyTorch と CUDA の構成に対して拡張モジュールをビルドするために、`pip install . --no-build-isolation` を使用することを推奨します。
:::

:::tip
ビルド時に `fatal error: cusparse.h: No such file or directory` というエラーが出る場合は、`find $CONDA_PREFIX -name cusparse.h` を実行し、`cusparse.h` を含むディレクトリが `CPATH` / `CPLUS_INCLUDE_PATH` に含まれていることを確認してください。conda の `cuda-toolkit` から CUDA ヘッダをインストールした場合、インクルードパスは通常、上記の pip の `nvidia/cu13/include` パスではなく、`$CONDA_PREFIX/targets/x86_64-linux/include` になります。
:::

:::tip
さらに、古い GraspNet API 依存パッケージは、非推奨となった `sklearn` パッケージ名を依然として使用している場合があります。`sed` コマンドは、インストール中に `The 'sklearn' PyPI package is deprecated` が発生しないよう、現在推奨されている `scikit-learn` パッケージ名に置き換えます。古い GraspNet API 依存パッケージも同時にアップグレードしない限り、`transforms3d==0.3.1` が依然として `np.float` のような古い NumPy エイリアスを使用しているため、その `numpy==1.23.4` 制約は維持してください。
:::

**学習済みモデルの設定**

graspnet-baseline 公式リポジトリから公式の GraspNet 学習済み重みを [Google](https://drive.google.com/file/d/1hd0G8LN6tRpi4742XOTEisbTXNZ-1jmk/view)、[Baidu](https://pan.baidu.com/s/1Eme60l39tTZrilF0I86R5A) からダウンロードし、`checkpoint-rs.tar` を次の場所に配置します：

```bash
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

その後、`config/default.yaml` を確認します：

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

`checkpoint` フィールドは 3 つの形式をサポートします：ファイル名のみの場合は `sdk/graspnet-baseline/checkpoints/` 配下として解決されます；相対パスの場合はプロジェクトルートからの相対パスとして解決されます；絶対パスの場合はそのまま使用されます。

## ディレクトリ構成

```
rebot_grasp/
├── config/
│   ├── default.yaml              # Main configuration file
│   └── calibration/
│       └── <camera_type>/
│           ├── intrinsics.npz    # Camera intrinsics
│           └── hand_eye.npz      # Hand-eye calibration results
├── drivers/
│   ├── camera/
│   │   ├── base.py               # Camera abstract base class
│   │   ├── orbbec_gemini2.py     # Gemini 2 driver
│   │   └── realsense.py          # RealSense driver (alternative)
│   └── robot/
│       └── grasp_driver.py       # Lightweight grasp helper based on arm SDK
├── calibration/
│   ├── aruco_pose.py             # ArUco pose estimation
│   └── hand_eye.py               # Hand-eye calibration solver
├── utils/
│   ├── ordinary_grasp.py         # OBB grasp pose estimation and visualization
│   └── transforms.py             # Coordinate transformation utilities
├── scripts/
│   ├── main.py                   # Main grasping program
│   ├── set.py                    # Grasp and place program
│   ├── ordinary_grasp_pipeline.py
│   ├── object_detection.py
│   └── collect_handeye_eih.py
├── sdk/
│   ├── pyorbbecsdk/              # Orbbec SDK Python wrapper
│   └── reBotArm_control_py/      # reBot Arm SDK
└── environment.yml               # Recommended conda environment file
```

## ハンドアイキャリブレーション

フルの把持パイプラインを実行する前に、まず Eye-in-Hand 方式のハンドアイキャリブレーションを完了させてください。

キャリブレーションスクリプトを実行する前に、CAN インターフェースを起動して動作を確認します：

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details link show can0
```

```bash
python scripts/collect_handeye_eih.py
```

実行前に、`config/default.yaml` 内の次の ArUco サイズパラメータが、実際に印刷したマーカーと一致していることを確認してください：

```yaml
calibration:
  aruco:
    marker_length_m: 0.1
```

自動モードでは、アームはあらかじめ設定された 50 個の姿勢を走査し、ArUco マーカーが安定して検出されたタイミングでサンプルを記録します。`c` または `q` で処理を中断した場合でも、スクリプトは収集済みサンプルからキャリブレーション結果の計算を試みます。

サンプリング中にロボットアームを手動で動かしたい場合は、マニュアルモードを使用します：

```bash
python scripts/collect_handeye_eih.py --manual
```

マニュアルモードでは、アームは重力補償モードに入ります。エンドエフェクタを適切な視点に動かし、`Enter` を押してキャプチャし、`c` または `q` を押して終了し結果を計算します。

:::tip
キャリブレーション後にロボットアームの把持精度が要件を満たさない場合は、`config/default.yaml` の `calibration.hand_eye_compensation_m` 配下にある `X`（前後）、`Y`（左右）、`Z`（上下）パラメータを設定して、位置補正を行うことができます。
:::

キャリブレーション結果は次の場所に保存されます：

```text
config/calibration/<camera_type>/hand_eye.npz
```

推奨されるサンプル数は少なくとも 5 個で、15 個以上を推奨します。

## 実行とデバッグ

### 1. 物体検出のみを検証

```bash
python scripts/object_detection.py
```

検出モデルやクラスを変更する必要がある場合は、`config/default.yaml` を編集します：

```yaml
yolo:
  model_name: "yoloe-26l-seg.pt"
  device: "cpu"
  use_world: true
  custom_classes:
    - "yellow banana"
    - "water bottle"
    - "cup"
```

このステップは次の点を確認するのに有用です：

- カメラが正しくオープンできるか
- YOLO モデルが正しくロードされるか
- YOLO の物体検出が期待どおりに動作するか

### 2. 把持推定のみを検証

```bash
python scripts/ordinary_grasp_pipeline.py
```

把持推論の頻度やプレグラスプ時の退避距離を調整する必要がある場合は、次を編集します：

```yaml
grasp_pipeline:
  infer_every_live: 3
  grasp:
    depth_quantile: 0.5
    pregrasp_offset_m: 0.080
    insertion_depth_m: 0.015
    min_base_z_m: 0.00
```

このスクリプトはロボットアームには接続しません。次の点を検証するためだけに使用します：

- OBB または最小外接矩形が妥当かどうか
- 把持点がターゲット中心付近に位置しているかどうか
- 短軸方向が期待されるグリッパ開閉方向と一致しているかどうか

主な操作キー：

- 左クリック：選択した画素の深度を確認
- `G`：現在の最良把持姿勢を出力
- `Q` / `Esc`：終了

### 3. メインの把持プログラムを実行

```bash
python scripts/main.py
```

ロボットアームを動かさずにターゲット姿勢だけを検証したい場合：

```bash
python scripts/main.py --dry-run
```

実際に把持を行う前に、まず `--dry-run` で姿勢と到達可能な作業空間を検証することを推奨します。

メインプログラムのフロー：

1. RGB-D カメラを初期化し、画像ストリームが利用可能であることを確認する。
2. ロボットアームとグリッパを有効化する。
3. レディ姿勢へ移動する。起動時のレディ姿勢を変更したい場合は、`config/default.yaml` を編集します：

```yaml
robot:
  ready_pose:
    x: 0.3
    y: 0.0
    z: 0.3
    roll: 0.0
    pitch: 0.7
    duration: 3.0
```

4. テーブルトップ上のターゲットをリアルタイムに検出する。
5. 短軸方向から把持姿勢を推定する。
6. `G` を押して現在のフレームをキャプチャし、把持を実行する。

実行時のキー操作：

- `G`：現在の最良ターゲットを把持
- `R`：ライブプレビューを再開
- `Q` / `Esc`：終了

### 4. `scripts/set.py` — 把持と配置プログラム

機能：バナナを把持して箱の中に配置します。

完了する処理フロー：
1. カメラとアームの初期化、レディ位置への移動
2. リアルタイムカメラプレビュー + YOLO による物体検出とインスタンスセグメンテーション
3. `G` を押してフレームを固定し、ハンドアイ変換を通じてアームのターゲット姿勢を計算
4. アームがバナナを把持して持ち上げる
5. アームがバナナを箱に配置し、初期姿勢に戻る
6. `Q` を押してシステムを終了し、アームがゼロ位置に戻る

### 5. GraspNet カメラ推定デモ（任意）

```bash
python scripts/graspnet_camera_demo.py
```

このスクリプトは、ロボットアームに接続せずに RGB-D カメラのみで GraspNet の 6D 把持姿勢推定を実行します。ライブカメラプレビューを維持し、YOLO のバウンディングボックスでターゲット領域を選択し、ターゲットの bbox によって GraspNet のフルシーン候補から実行可能なものをフィルタリングします。

主な操作キー：

- `G` / `Space`：現在のフレームに対して GraspNet 推論を実行
- `R`：ライブプレビューを再開
- `Q` / `Esc`：終了

推論後、Open3D で点群と把持候補を可視化できます。

### 6. GraspNet ロボット把持プログラム（任意）

```bash
python scripts/grasp.py
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

このスクリプトは、GraspNet の推定結果をロボットアームの実行フローに接続します。YOLO がターゲットを選択し、GraspNet が 6D 把持姿勢を出力し、ハンドアイキャリブレーションでそれをロボットベース座標系に変換し、スクリプトはプレグラスプ、把持、退避のモーションシーケンスを実行する前に IK の到達可能性をチェックします。

`python scripts/grasp.py` を実行すると、GraspNet によるロボット把持のフルフローが開始され、実際にロボットアームを制御します。`--dry-run` はターゲット姿勢と候補フィルタリング結果のみを出力し、把持動作は実行しません。`--target-class "light blue coffee cup"` は YOLO のターゲットクラスを指定し、そのクラスに対する GraspNet 候補のみをフィルタリングして把持します。

## FAQ

### 1. `ModuleNotFoundError: No module named 'motorbridge'`

これは通常、現在の Python 環境にロボットアーム SDK の依存パッケージがインストールされていないことを意味します。次を確認してください：

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
cd sdk/reBotArm_control_py && pip install -e .
```

### 2. `G` を押しても把持が実行されない

よくある原因：

- `hand_eye.npz` が存在しない
- ハンドアイキャリブレーションモードが `eye_in_hand` になっていない
- ターゲット姿勢が IK で到達可能ではない

次を実行することを推奨します：

```bash
python scripts/main.py --dry-run
```

### 3. 把持深度が安定しない

次の調整を試すことができます：

- `grasp_pipeline.grasp.depth_quantile`
- 作業空間に対するカメラの設置高さ
- ターゲット表面の反射特性

### 4. GraspNet が `pointnet2` から `pointnet2_utils` をインポートできないと報告する

これは通常、アクティブな conda 環境内で `sdk/graspnet-baseline/pointnet2` 配下のローカル CUDA 拡張がビルドされていないか、Python が別の `pointnet2` パッケージを解決していることを意味します。プロジェクト用の環境がアクティブになっていることを確認し、その同じ環境内で `pointnet2` と `knn` の両方を再ビルドしてください：

```bash
conda activate rebotarm
cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

確認します：

```bash
python -c "from pointnet2 import pointnet2_utils; print('Submodule import works')"
```

### 5. GraspNet 実行時に新しい GPU で CUDA アーキテクチャ互換性の問題が発生する

`no kernel image is available for execution on the device` が表示される、または PyTorch が現在の GPU CUDA ケイパビリティがサポートされていないと報告する場合、インストールされている PyTorch ホイールにその GPU アーキテクチャ向けの CUDA カーネルが含まれていない可能性があります。現在の CUDA / GPU アーキテクチャをサポートする PyTorch ビルドをインストールし、その後 GraspNet のローカル CUDA 拡張を再ビルドしてください。

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.get_device_name(0))"

cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

ビルドアーキテクチャを手動で指定する必要がある場合は、再ビルドの前に `TORCH_CUDA_ARCH_LIST` を設定します。GPU アーキテクチャと PyTorch / CUDA バージョンに応じて値を選択してください。

### 6. GraspNet 推論で `RuntimeError: CPU not supported` が報告される

`pointnet2` のサンプリングオペレータは CUDA テンソルのみをサポートします。CUDA が利用可能であること、GraspNet ネットワークと入力点群が GPU 上にあること、そして `pointnet2` / `knn` がアクティブな環境内の PyTorch バージョンに対してビルドされていることを確認してください。

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

出力が `False` の場合は、まず CUDA / PyTorch のインストールを修正してください。`True` だがエラーが残る場合は、`pointnet2` と `knn` を再ビルドします。

## お問い合わせ

- 技術サポート: [Submit an Issue](https://github.com/Seeed-Projects/reBot-DevArm-Grasp/issues)
- プロジェクトページ: [GitHub](https://github.com/Seeed-Projects/reBot-DevArm-Grasp)
- フォーラム: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## 参考資料

- [reBot Arm B601-RS クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/)
- [reBot Arm B601-RS ROS2 連携](https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_ros2_integration/)
- [Orbbec Gemini 2 製品ページ](https://www.orbbec.com/products/stereo-vision-camera/gemini-2/)
- [Orbbec 開発リソース](https://www.orbbec.com.cn/index/Download2025/info.html?cate=121&id=1)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [Orbbec SDK v2 API ガイド](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/)
- [pyorbbecsdk リポジトリ](https://github.com/orbbec/pyorbbecsdk)
- [pyorbbecsdk ドキュメント](https://orbbec.github.io/pyorbbecsdk/index.html)
- [Orbbec ROS2 Wrapper](https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main)
- [Intel RealSense SDK](https://github.com/realsenseai/librealsense)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Graspnet(Anygrasp) ドキュメント](https://graspnet.net/)
