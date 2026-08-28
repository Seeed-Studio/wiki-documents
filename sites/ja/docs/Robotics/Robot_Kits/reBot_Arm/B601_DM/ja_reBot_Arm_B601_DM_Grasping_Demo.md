---
description: このチュートリアルでは、YOLO/OBB 把持パイプラインを使用して、reBot Arm B601 向けの完全なビジュアル把持デモを構築する方法を説明します。
title: reBot Arm B601 ビジュアル把持デモ
keywords:
  - reBot Arm
  - B601
  - 把持
  - Gemini 2
  - YOLO
  - ハンドアイキャリブレーション
  - ロボット
slug: /rebot_arm_b601_dm_grasping_demo
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-06-30
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-22'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_grasping_demo/
---

import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

# reBot Arm B601 ビジュアル把持デモ

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
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

YOLO は、単一のフォワードパスでターゲットの位置特定と分類を行う、広く利用されているリアルタイム物体検出モデルファミリーです。本チュートリアルでは、YOLO、RGB-D 深度カメラ、および reBot Arm B601-DM を使用して、環境構築、カメラ統合、ハンドアイキャリブレーション、把持検証を含む、デスクトップ向けのビジュアル把持デモを構築します。

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/demo.gif" alt="reBot Arm B601-DM visual grasping demo" />
</p>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/6dqKZNh_D7k?autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
---

## プロジェクト概要

**reBot Arm B601 ビジュアル把持デモ** は、[reBot Arm B601](https://github.com/Seeed-Projects/reBotArm_control_py) ロボットアーム制御ライブラリと RGB-D 深度カメラに基づくビジュアル把持アルゴリズムのデモプロジェクトです。本システムは B601 アームの DM / RS 構成の両方をサポートします。YOLO モデルを用いてデスクトップ上の物体をリアルタイムに検出し、OBB 最小外接矩形から把持姿勢を推定し、ハンドアイキャリブレーションによって把持点をカメラ座標系からロボットベース座標系へ変換し、ロボットアームを駆動して自律把持を完了させます。

### コア機能

- 📷 **奥行き認識** — Orbbec Gemini 2 や Intel RealSense D435i / D405 などの RGB-D 深度カメラをサポート
- 🔍 **物体検出** — YOLO ベースの認識とオープンボキャブラリのカスタムクラス対応
- 📐 **姿勢推定** — OBB 最小外接矩形の短軸をグリッパの向きに使用し、深度分位値で把持高さを推定
- 🔄 **座標変換** — TSAI ハンドアイキャリブレーション（Eye-in-Hand）により、カメラ座標系の把持点をロボットベース座標系へ変換
- 🦾 **動作実行** — reBotArm_control_py の IK + 軌道コントローラと、内蔵グリッパ力制御ステートマシン

---

## ハードウェア構成

| コンポーネント | モデル / 要件 |
|------|------------|
| ロボットアーム | reBot Arm B601（DM / RS 構成） |
| 深度カメラ | Orbbec Gemini 2、Intel RealSense D435i / D405 |
| 通信インターフェース | USB2CAN シリアルブリッジ（アーム）、USB 3.0（カメラ） |
| ホスト | Ubuntu 22.04+、Python 3.10、x86_64 |

**配線手順**

1. 深度カメラを USB 3.0 でホストに接続します。
2. USB2CAN アダプタをアームの CAN バスに接続します。
3. 24V 電源、カメラ、ロボットアームがすべて確実に接続されていることを確認します。
4. 権限を設定します：

```bash
sudo chmod a+rw /dev/bus/usb/*/*   # Depth camera USB permissions
sudo chmod 666 /dev/ttyUSB0        # USB2CAN (adjust port number as needed)
```

---

## 環境構築

### Step 1. リポジトリをクローンする

公式の Seeed-Projects リポジトリを使用することを推奨します：

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

### Step 2. conda 環境を作成・設定する

```bash
conda env create -f environment.yml
conda activate rebotarm
```
:::tip
別の環境名を使用したい場合は、コマンド内の `rebotarm` を任意の名前に置き換えてください。

:::


### Step 3. ロボットアーム制御ライブラリをインストールする

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

もし `pip install -e .` が `Multiple top-level packages discovered in a flat-layout` を報告する場合は、`reBotArm_control_py` の `pyproject.toml` に明示的なパッケージ検出設定を追加し、その後で `pip install -e .` を再実行してください：

```toml
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

ビジュアル把持プログラムは SDK 設定を読み取り、対応するアーム制御モードとグリッパパラメータを自動的に選択します。

### Step 4. 深度カメラ SDK をインストールする

本プロジェクトは Orbbec Gemini 2 や RealSense D435i / D405 などの RGB-D 深度カメラをサポートします。実際に使用するカメラに対応した SDK をインストールしてください。すでに現在の環境でカメラドライバを正常にインポートできる場合は、このステップを省略できます。

**Orbbec Gemini 2**

Orbbec Gemini 2 は **pyorbbecsdk**（Orbbec SDK v2 の Python 版）に依存します。事前ビルド済みの Python パッケージを直接インストールすることを推奨します：

**オプション 1: pip でインストール（推奨）**

```bash
pip install pyorbbecsdk2
```

**オプション 2: GitHub から取得**

```bash
# Install build dependencies
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev

cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

中国本土のユーザーは、次を利用できます：
```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

ソースからインストールする場合は、まず CMake でネイティブ拡張をビルドし、`install/lib` に `pyorbbecsdk*.so` と Orbbec 共有ライブラリが含まれていることを確認してから、`pip install -e .` を実行してください。

注意：上記のすべてのインストール方法がうまくいかない場合は、以下の公式 Orbbec ドキュメントを参照してインストールしてください。

:::tip
初めて使用する場合は、udev ルールをインストールすることを推奨します：

```bash
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

**インストール確認**

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
```
:::

**OrbbecViewer（任意、カメラ検証用）**

事前ビルド済みパッケージをダウンロードして `OrbbecViewer` を実行すると、デモを実行する前にカメラ接続と深度ストリームが正常に動作しているかを確認できます。

- GitHub: https://github.com/orbbec/OrbbecSDK_v2/releases
- Gitee: https://gitee.com/orbbecdeveloper/OrbbecSDK_v2/releases

**RealSense D435i / D405**

RealSense カメラは `pyrealsense2` に依存します。通常は pip で直接インストールできます：

```bash
pip install pyrealsense2
python -c "import pyrealsense2; print('pyrealsense2 OK')"
```

システムに完全な RealSense ツールキットや udev ルールが必要な場合は、RealSense SDK 公式ドキュメントを参照して `librealsense2` をインストールしてください。


**SDK リソースまとめ**

| リソース | リンク |
|------|------|
| Gemini 2 製品ページ | https://www.orbbec.com.cn/index/Product/info.html?cate=38&id=51 |
| 開発リソース | https://www.orbbec.com.cn/index/Download2025/info.html?cate=121&id=1 |
| Orbbec SDK v2 | https://github.com/orbbec/OrbbecSDK_v2 |
| SDK v2 API ドキュメント | https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/ |
| pyorbbecsdk | https://github.com/orbbec/pyorbbecsdk |
| pyorbbecsdk ドキュメント | https://orbbec.github.io/pyorbbecsdk/index.html |
| ROS2 Wrapper | https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main |
| Intel RealSense SDK | https://github.com/realsenseai/librealsense |

### Step 5. GraspNet を設定する（任意）

物体の把持姿勢推定をより高精度に行うために、本プロジェクトでは [graspnet-baseline](https://github.com/graspnet/graspnet-baseline) を適用し、ロボットアームの把持性能を向上させています。

GraspNet の `pointnet2` / `knn` 拡張は CUDA コンパイラを必要とします。開始前に、現在の環境で `nvcc` が利用可能であること、および `nvcc` が報告する CUDA バージョンが PyTorch のビルドに使用された CUDA バージョンと一致していることを確認してください：

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

もし `nvcc` が存在しない場合、または `nvcc` が報告する CUDA バージョンが `torch.version.cuda` と一致しない場合は、現在の PyTorch CUDA バージョンに一致する CUDA コンパイラをインストールしてください。例えば、PyTorch が `13.0` を示している場合：

```bash
conda install -c nvidia cuda-nvcc=13.0
```

代わりに、現在の `nvcc` バージョンに一致する PyTorch ビルドをインストールすることもできます。2 つのバージョンは一致している必要があり、一致しない場合は `pointnet2` / `knn` のビルドが `The detected CUDA version (...) mismatches the version that was used to compile PyTorch (...)` というエラーで失敗します。

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
注意：公式の graspnet-baseline リポジトリのドキュメントにそのまま従って `python setup.py install` を使用すると、CUDA / PyTorch 関連のエラーが発生する場合があります。現在の conda 環境にすでにインストールされている PyTorch と CUDA の構成に対して拡張をビルドするために、`pip install . --no-build-isolation` を使用することを推奨します。
:::

:::tip
ビルド時に `fatal error: cusparse.h: No such file or directory` というエラーが出る場合は、`find $CONDA_PREFIX -name cusparse.h` を実行し、`cusparse.h` を含むディレクトリを `CPATH` / `CPLUS_INCLUDE_PATH` に追加してください。CUDA ヘッダが conda の `cuda-toolkit` 由来の場合、パスは通常 `$CONDA_PREFIX/targets/x86_64-linux/include` であり、上記に示した pip の `nvidia/cu13/include` パスではありません。
:::

:::tip
さらに、古い GraspNet API 依存関係では、非推奨となった `sklearn` パッケージ名が依然として使用されている場合があります。上記の `sed` コマンドは、インストール時のパッケージ名の問題を避けるために、これを `scikit-learn` に置き換えます。GraspNet API の依存スタックも同時にアップグレードしない限り、`transforms3d==0.3.1` が依然として `np.float` などの NumPy エイリアスを使用しているため、`numpy==1.23.4` の制約は維持してください。
:::

**学習済みモデルの設定**

公式リポジトリ graspnet-baseline から公式 GraspNet 学習済み重みを [Google](https://drive.google.com/file/d/1hd0G8LN6tRpi4742XOTEisbTXNZ-1jmk/view)、[Baidu](https://pan.baidu.com/s/1Eme60l39tTZrilF0I86R5A) からダウンロードし、ダウンロードした `checkpoint-rs.tar` を次の場所に配置します：

```bash
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

その後、`config/default.yaml` 内を確認します：

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

`checkpoint` フィールドは 3 つの形式をサポートします：ファイル名のみの場合は `sdk/graspnet-baseline/checkpoints/` 配下として解決されます；相対パスの場合はプロジェクトルートから解決されます；絶対パスの場合はそのまま使用されます。

---

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
│       └── grasp_driver.py       # Lightweight grasping helper based on arm SDK
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


## 実行とデバッグ

### 0. アームのバージョンと SDK 設定の確認

ロボットアームに接続するスクリプトを実行する前に、アームのバージョン、電源、および SDK 設定が一致していることを確認してください：

- まず基本的なアームの準備を完了してください：[B601-DM クイックスタート](https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/) または [B601-RS クイックスタート](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/)。
- `sdk/reBotArm_control_py/config/rebotarm.yaml` で、対応するハードウェア構成を選択します：

```yaml
hardware_yaml: rebotarm_dm.yaml
```

または：

```yaml
hardware_yaml: rebotarm_rs.yaml
```

- B601-DM は 24V DC 電源、B601-RS は 48V DC 電源を使用します。電源アダプタと配線がアームのバージョンに合っていることを確認してください。
- B601-DM を使用する場合、SDK 設定内のシリアルブリッジデバイスパスが実際のデバイスと一致していることを確認してください。
- B601-RS を使用する場合、キャリブレーションや把持スクリプトを実行する前に CAN インターフェースを起動します：

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details link show can0
```

### 1. ハンドアイキャリブレーション（把持前に必須）

```bash
python scripts/collect_handeye_eih.py
```

自動モードでは、アームが 50 個のプリセット姿勢を自動で走査し、ArUco が安定して検出されたときに自動でサンプリングします。正常終了または途中で中断された場合でも、スクリプトはキャリブレーション結果の計算と保存を試みます；少なくとも 5 サンプルが必要で、より安定した結果のためには 15 サンプル以上を推奨します。

アームを手動で動かして収集したい場合は、次を使用します：

```bash
python scripts/collect_handeye_eih.py --manual
```

手動モードでは、アームは重力補償モードに入ります。エンドエフェクタを適切な視点に押し動かしてから `Enter` を押してキャプチャし、`c` または `q` を押して終了および計算を行います。

:::tip
キャリブレーション後にロボットアームの把持精度が要件を満たさないと感じる場合は、`config/default.yaml` の `calibration.hand_eye_compensation_m` 内の `X`（前後）、`Y`（左右）、`Z`（上下）パラメータを設定して、位置補正を行うことができます。
:::

### 2. `scripts/main.py` — メイン把持プログラム

ビジュアル把持パイプライン全体：

1. RGB-D カメラを初期化し、画像ストリームが利用可能であることを確認
2. アームとグリッパを有効化し、レディポジションへ移動
3. リアルタイムカメラプレビュー + YOLO 物体検出およびインスタンスセグメンテーション
4. OBB の短軸でグリッパの向きを推定し、深度の分位値で把持高さを推定
5. `G` を押してフレームを固定し、ハンドアイ変換を通じてアームの目標姿勢を計算
6. アームがプレグラスプポイントへ移動 → 降下 → グリッパを閉じる → 持ち上げる → レディポジションへ戻る

### 3. `scripts/set.py` — 把持および配置プログラム

機能：バナナを把持して箱の中に配置する

完了するフロー：
1. カメラとアームの初期化、レディポジションへ移動
2. リアルタイムカメラプレビュー + YOLO 物体検出およびインスタンスセグメンテーション
3. `G` を押してフレームを固定し、ハンドアイ変換を通じてアームの目標姿勢を計算
4. アームがバナナを把持して持ち上げる
5. アームがバナナを箱の中に配置し、初期姿勢に戻る
6. `Q` を押してシステムを終了し、アームはゼロポジションに戻る


### 4. `scripts/ordinary_grasp_pipeline.py` — 簡易把持テスト

ロボットアームに依存せず、OBB 把持姿勢推定と可視化効果のみを検証します。認識モジュールのデバッグに適しています。

### 5. `scripts/graspnet_camera_demo.py` — GraspNet カメラ推定デモ

ロボットアームには接続せず、RGB-D カメラを用いて GraspNet の 6D 把持姿勢推定のみを実行します。スクリプトはライブカメラプレビューを維持し、YOLO の検出ボックスでターゲット領域を選択し、そのターゲット bbox 内の GraspNet 全シーン候補から実行可能な把持候補をフィルタリングします。`G` または `Space` を押して現在フレームで推論を実行し、`R` を押してライブプレビューを再開し、`Q` または `Esc` を押して終了します；推論後は、Open3D を通じて点群と把持候補を閲覧できます。

```bash
python scripts/graspnet_camera_demo.py
```

### 6. `scripts/grasp.py` — GraspNet ロボットアーム把持プログラム

`graspnet_camera_demo.py` をベースに、GraspNet の推定結果をロボットアームの実行フローに接続します：YOLO がターゲットを選択し、GraspNet が 6D 把持姿勢を出力し、ハンドアイキャリブレーションでロボットベース座標系へ変換し、その後 IK の到達可能性をチェックして、プレグラスプ、把持、退避動作を実行します。デバッグのため、まず `--dry-run` を使用して、目標姿勢と候補フィルタリング結果のみを出力することを推奨します。

```bash
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

### 7. `scripts/object_detection.py` — 基本検出デモ

純粋な YOLO 検出デモであり、検出ボックスと信頼度スコアをリアルタイム表示するだけで、把持ロジックはありません。

---

## default.yaml パラメータ説明

#### 1. カメラとキャリブレーション設定（`camera` & `calibration`）

| パラメータ | 型 / オプション | 意味と説明 |
| :--- | :--- | :--- |
| `camera.type` | `realsense_d435i`<br/>`realsense_d405`<br/>`orbbec_gemini2` | **カメラタイプ**：現在のシステムに接続されているカメラハードウェアを指定します。 |
| `camera.serial` | `string` / `null` | **デバイスシリアル番号**：デバイスの SN 番号を指定します。`null` に設定すると、システムが検出した最初の利用可能なデバイスを使用します。 |
| `calibration.aruco.marker_length_m` | `float` | **ArUco マーカーサイズ**：ハンドアイキャリブレーションに使用する ArUco キャリブレーションマーカーの実際の一辺の長さで、単位は **メートル (m)** です。 |
| `calibration.hand_eye_compensation_m` | `array` | **ハンドアイキャリブレーション並進補正**：ハンドアイキャリブレーション完了後に **ロボットベース座標系** で実行される XYZ の手動並進補正（形式 `[X, Y, Z]`）、単位は **メートル (m)** です。3 つすべての値が `0.0` の場合、補正行列は単位行列になります。 |

---

#### 2. 物体検出設定（`detection`）

| パラメータ | 型 | 意味と説明 |
| :--- | :--- | :--- |
| `detection.conf_threshold` | `float` | **YOLO 検出信頼度しきい値**：この値未満のスコアを持つ検出ボックスはフィルタリングされます。 |
| `detection.iou_threshold` | `float` | **YOLO NMS IoU しきい値**：重なり合うボックスをフィルタリングするために Non-Maximum Suppression (NMS) で使用される Intersection over Union (IoU) のしきい値です。 |

---

#### 3. ロボットおよびグリッパ設定（`robot`）

| パラメータ | 型 / オプション | 意味と説明 |
| :--- | :--- | :--- |
| `robot.repo_root` | `string` / `null` | **リポジトリルートディレクトリ**：`reBotArm_control_py` リポジトリへのパスです。`null` の場合、内部の相対パス `sdk/reBotArm_control_py` がデフォルトとして使用されます。 |
| `robot.ready_pose` | `array` | **レディポーズ**：システム起動時にアームが移動するレディポジションです。各把持タスク完了後も、アームは自動的にこの位置へ戻ります。 |
| `robot.gripper.dm`<br/>`robot.gripper.rs` | struct オブジェクト | **グリッパハードウェアパラメータ**：SDK 内の現在の実際のハードウェア構成に基づき、システムがこれら 2 つのパラメータグループのうち一方を自動的に選択して適用します。 |

#### グリッパー内部コアパラメータの説明

`robot.gripper.dm` または `robot.gripper.rs` 内のサブパラメータについて：

* **`angle_open`**, **`close_torque`**, **`default_force`**: それぞれ開く角度、閉じるトルク、デフォルト制御力に対応します。すべて**正の数**を記入する必要があります。
* **`counterclockwise`**: ブール値。クローズ時に使用するモーターの回転方向（反時計回りかどうか）を示します。このロジックに基づき、コードは開く角度と閉じるトルクの符号を自動的に導出します。
* **`tau_max`**: トルクの上限。

:::tip
注意：その他の高度なグリッパー制御動作パラメータについては、`drivers/robot/grasp_driver.py` ファイルを参照し、そこで定義してください。
:::

---

#### 4. 把持パイプラインと GraspNet 設定（`grasp_pipeline` & `graspnet`）

| パラメータ | 型 | 意味と説明 |
| :--- | :--- | :--- |
| `grasp_pipeline.infer_every_live` | `int` | **推論フレーム間隔**：リアルタイム映像プレビュー中、N フレームごとに物体検出を実行し、CPU/GPU のリアルタイム計算負荷を効果的に削減します。 |
| `grasp_pipeline.grasp.depth_quantile` | `float` | **深度分位数**：短軸把持パイプラインで使用される深度計算の分位数です。値を大きくすると、通常はより深い把持点になります。 |
| `grasp_pipeline.grasp.pregrasp_offset_m` | `float` | **プレグラスプ位置オフセット**：最終的な目標把持位置に対して、エンドエフェクタの進行方向に沿って後退する距離で、単位は**メートル (m)** です。 |
| `grasp_pipeline.grasp.insertion_depth_m` | `float` | **挿入深さ**：GraspNet が把持を実行する際に、進行方向に沿って追加で押し込む／挿入する深さで、単位は**メートル (m)** です。 |
| `grasp_pipeline.grasp.min_base_z_m` | `float` | **最小把持高さ制限**：**ロボットベース座標系**における許容される最小把持 Z 軸高さで、単位は**メートル (m)** です（低レベルの衝突防止セーフティ境界として使用）。 |
| `graspnet` | struct config | **GraspNet ランタイムパラメータ**：この設定項目配下のすべてのサブパラメータは、`scripts/graspnet_camera_demo.py` および `scripts/grasp.py` 実行時に読み込まれます。 |

### モデル選択ライブラリ

YOLO モデルは `rebot_grasp/models/` ディレクトリから読み込まれます。モデルファイルが存在しない場合、通常 Ultralytics が自動的にダウンロードを試みます。

一般的なモデル：

| モデル | 説明 |
| --- | --- |
| `yoloe-26l-seg.pt` | オープンボキャブラリ + セグメンテーション、現在のデフォルト |
| `yoloe-26s-seg.pt` | より軽量で高速 |
| `yolov8n-seg.pt` | クローズドカテゴリのセグメンテーション、小型モデル |
| `yolov8s-seg.pt` | クローズドカテゴリのセグメンテーション、高精度 |

モデル名に `world` / `yoloe` が含まれ、かつ `yolo.use_world=true` の場合、プログラムは `model.set_classes(custom_classes)` を呼び出して、`yolo.custom_classes` をオープンボキャブラリクラスとして注入します。通常の `yolov8*-seg.pt` モデルは、このオープンボキャブラリクラス群を無視します。

---

## ❓ FAQ

### 1. `ModuleNotFoundError: No module named 'motorbridge'`

これは通常、現在の Python 環境にロボットアーム SDK の依存関係がインストールされていないことを意味します。プロジェクト環境がアクティブになっていることを確認し、環境を再同期してロボットアーム SDK をインストールしてください：

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
cd sdk/reBotArm_control_py && pip install -e .
```

### 2. `G` を押しても把持が実行されない

よくある原因：

- `hand_eye.npz` が存在しない
- ハンドアイキャリブレーションモードが `eye_in_hand` ではない
- 現在のターゲット姿勢が IK 到達可能ではない

まずドライランモードを使用して、認識結果とターゲット姿勢を検証することを推奨します：

```bash
python scripts/main.py --dry-run
```

### 3. 把持点の深さが安定しない

優先的に確認・調整できる項目：

- `grasp_pipeline.grasp.depth_quantile`
- カメラの設置高さ（対象作業空間に対する相対高さ）
- 対象表面の反射率

### 4. GraspNet が `pointnet2` から `pointnet2_utils` をインポートできないと報告する

これは通常、`sdk/graspnet-baseline/pointnet2` 配下のローカル CUDA 拡張が現在の conda 環境で正しくビルドおよびインストールされていないか、Python が誤った `pointnet2` パッケージを解決していることが原因です。プロジェクト環境がアクティブであることを確認し、同じ環境で `pointnet2` と `knn` の両方を再ビルド・再インストールすることを推奨します：

```bash
conda activate rebotarm
cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

検証：

```bash
python -c "from pointnet2 import pointnet2_utils; print('Submodule import works')"
```

### 5. 現在のグラフィックスカードで GraspNet を実行する際の CUDA アーキテクチャ非互換

`no kernel image is available for execution on the device` が表示されたり、PyTorch が現在の GPU の CUDA ケイパビリティがサポートされていないと報告する場合、これは通常、現在の PyTorch ホイールにそのグラフィックスカードアーキテクチャ向けの CUDA カーネルが含まれていないことを意味します。現在の CUDA／グラフィックスカードアーキテクチャをサポートする PyTorch バージョンをインストールし、その後 GraspNet のローカル CUDA 拡張を再ビルドすることを推奨します。

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.get_device_name(0))"

cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

ビルドアーキテクチャを手動で指定する必要がある場合は、再ビルド前に `TORCH_CUDA_ARCH_LIST` を設定し、具体的な値は現在のグラフィックスカードアーキテクチャと PyTorch/CUDA バージョンに応じて確認してください。

### 6. GraspNet 推論時に `RuntimeError: CPU not supported` が報告される

`pointnet2` 内のサンプリングオペレータは CUDA テンソルのみをサポートします。CUDA が利用可能であること、GraspNet ネットワークと入力点群が GPU 上にあること、そして `pointnet2` / `knn` が現在の環境および PyTorch バージョンに対してビルドされていることを確認してください。

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

出力が `False` の場合は、まず CUDA / PyTorch のインストールを修正する必要があります。出力が `True` なのにエラーが続く場合は、`pointnet2` と `knn` を再ビルドすることを推奨します。

---

## 📄 参考文献

- [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py) — ロボットアーム制御ライブラリ
- [reBot-DevArm](https://github.com/Seeed-Projects/reBot-DevArm) — reBot ロボットアームのオープンソースプロジェクト
- [Orbbec Gemini 2 Product Page](https://www.orbbec.com.cn/index/Product/info.html?cate=38&id=51)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [pyorbbecsdk](https://github.com/orbbec/pyorbbecsdk)
- [RealSense SDK](https://github.com/realsenseai/librealsense)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Ultralytics YOLOv11](https://github.com/ultralytics/ultralytics)

---

## ☎ お問い合わせ

- **技術サポート**: [Submit an Issue](https://github.com/Seeed-Projects/reBot-DevArm-Grasp/issues)

---

<p align="center">
  <strong>🌟 このプロジェクトが役に立った場合は、ぜひ Star を付けてください！</strong>
</p>
