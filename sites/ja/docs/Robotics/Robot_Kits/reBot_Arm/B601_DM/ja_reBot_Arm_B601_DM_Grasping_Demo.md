---
description: このチュートリアルでは、RGB-D カメラ、YOLO / OBB、およびオプションの GraspNet 把持パイプラインを使用して、reBot Arm B601 向けの完全なビジュアル把持デモを構築する方法を説明します。
title: reBot Arm B601 ビジュアル把持デモ
keywords:
  - reBot Arm
  - B601-DM
  - B601-RS
  - 把持
  - RGB-D
  - YOLO
  - GraspNet
  - ハンドアイキャリブレーション
  - ロボット
slug: /rebot_arm_b601_dm_grasping_demo
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-07-05
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-22'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_grasping_demo/
---

# reBot Arm B601 ビジュアル把持デモ

<div className="rebot-page">
  <section className="doc-hero">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>RGB-D ビジョン、YOLO、および reBot Arm を用いてデスクトップ向けビジュアル把持システムを構築する</h2>
      <p>
        このガイドでは、環境構築、カメラ統合、ロボットアーム SDK 設定、ハンドアイキャリブレーション、YOLO / OBB / GraspNet による把持推定、
        そして実機ロボットアームでの実行までを含む、完全なビジュアル把持デモの手順を説明します。
        and real robotic arm execution.
      </p>
      <div className="hero-actions">
        <a href="#quick-path">ワークフローを表示</a>
        <a href="#run">デモを実行</a>
      </div>
    </div>
    <div className="hero-card">
      <strong>推奨構成</strong>
      <span>reBot Arm B601-DM / B601-RS</span>
      <span>Orbbec Gemini 2 または RealSense D435i / D405</span>
      <span>Ubuntu 22.04 + Python 3.10</span>
    </div>
  </section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全上の警告：実行前にロボット作業空間を必ず整理してください</strong>
    <p>
      ロボットアームを動かすプログラムを実行する前に、ロボット作業空間の<strong>半径 1 メートル</strong>以内から、
      貴重品、壊れやすい物、工具、ケーブル、および無関係な物体をすべて取り除いてください。デバッグおよび動作中は、
      人員は常にロボットの動作範囲外にいる必要があります。
      the robot motion range.
    </p>
    <ul>
      <li>ロボットアームの電源投入後は、関節、モーター、リンク、グリッパー、エンドエフェクタには触れないでください。</li>
      <li>キャリブレーション、遠隔操作、IK 制御、軌道制御、重力補償、ROS2 / MoveIt 実行、またはビジュアル把持を行う前に、アームベースが確実に固定されていることを確認してください。</li>
      <li>異常な動き、異音、振動、ケーブルの緩み、電源接触不良、通信断などが発生した場合は、直ちにプログラムを停止し、点検前にシステムの電源を切ってください。</li>
      <li>モーターケーブル、CAN ケーブル、USB2CAN / PCAN-USB アダプタ、XT30 コネクタ、電源コネクタを抜き差しする際は、必ず事前にシステムの電源を切ってください。</li>
    </ul>
  </div>
</div>


  <nav className="doc-nav" aria-label="visual grasping navigation">
    <a href="#quick-path">ワークフロー</a>
    <a href="#hardware">ハードウェア</a>
    <a href="#install">インストール</a>
    <a href="#camera-sdk">カメラ SDK</a>
    <a href="#graspnet">GraspNet</a>
    <a href="#run">実行とデバッグ</a>
    <a href="#config">設定</a>
    <a href="#faq">FAQ</a>
  </nav>
</div>

<div className="rebot-page">
  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/demo.gif" alt="reBot Arm B601 visual grasping demo" />
  </div>
</div>

<p align="center">
  <strong>奥行き認識 · 物体検出 · ハンドアイキャリブレーション · 自律把持 · 完全オープンソース</strong>
</p>

<div className="video-container">
  <iframe
    width="900"
    height="600"
    src="https://www.youtube.com/embed/6dqKZNh_D7k?autoplay=0"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen>
  </iframe>
</div>

<div className="rebot-page">

<section id="quick-path" className="section-card">

## 推奨ワークフロー

<div className="path-grid">
  <div className="path-card"><span>Step 1</span><strong>ハードウェアを準備</strong><p>アームのバージョン、電源、USB2CAN / CAN インターフェース、および RGB-D カメラ接続を確認します。</p></div>
  <div className="path-card"><span>Step 2</span><strong>環境をインストール</strong><p>conda 環境を作成し、アーム SDK、カメラ SDK、YOLO、およびオプションの GraspNet をインストールします。</p></div>
  <div className="path-card"><span>Step 3</span><strong>ハンドアイキャリブレーションを完了</strong><p>ArUco の姿勢を収集し、Eye-in-Hand キャリブレーション変換を解きます。</p></div>
  <div className="path-card"><span>Step 4</span><strong>把持デモを実行</strong><p>まずドライランで認識とターゲット姿勢を検証し、その後実機アームで実行します。</p></div>
</div>

:::tip
このデモを実行する前に、お使いのアームのクイックスタートガイドを完了してください：[B601-DM クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/) または [B601-RS クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/)。
:::

</section>

<section className="section-card">

## プロジェクト概要

**reBot Arm B601 ビジュアル把持デモ**は、RGB-D 深度カメラと reBot ロボットアーム制御ライブラリを中心に構築されたオープンソースのビジュアル把持プロジェクトです。本システムは B601-DM と B601-RS の両構成をサポートします。YOLO によるリアルタイムなデスクトップ物体検出を行い、OBB 最小外接矩形で把持方向を推定し、ハンドアイキャリブレーションを通じてカメラ座標系の把持点をロボットベース座標系へ変換し、最終的にロボットアームを駆動して自律把持を完了します。

### コア機能

<div className="feature-grid">
  <div><strong>RGB-D 深度認識</strong><span>Orbbec Gemini 2、RealSense D435i / D405 などの RGB-D カメラをサポートします。</span></div>
  <div><strong>YOLO 物体検出</strong><span>オープンボキャブラリクラスおよび標準的な YOLO セグメンテーションモデルをサポートします。</span></div>
  <div><strong>OBB 把持推定</strong><span>最小外接矩形の短軸をグリッパの向きとして使用し、深度の分位値から把持高さを算出します。</span></div>
  <div><strong>GraspNet 6D 把持</strong><span>オプションで、より複雑な物体に対して豊富な 6D 把持候補を追加できます。</span></div>
  <div><strong>Eye-in-Hand キャリブレーション</strong><span>TSAI ハンドアイキャリブレーションを用いて、カメラ座標系の把持点をロボットベース座標系へ変換します。</span></div>
  <div><strong>実機アーム実行</strong><span>reBotArm_control_py を用いて IK、軌道制御、グリッパの力制御を行います。</span></div>
</div>

</section>

<section id="hardware" className="section-card">


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>実行前の安全チェック</strong>
    <p>ロボット作業空間の<strong>半径 1 メートル</strong>以内からすべての貴重品を取り除き、すべての人員が離れていることを確認してください。このセクションを実行する前に、アームが確実に固定されていることを確認してください。</p>
  </div>
</div>

## ハードウェア構成

| コンポーネント | モデル / 要件 |
|------|------------|
| ロボットアーム | reBot Arm B601-DM または reBot Arm B601-RS |
| 深度カメラ | Orbbec Gemini 2、Intel RealSense D435i / D405 |
| 通信インターフェース | B601-DM は USB2CAN シリアルブリッジを使用、B601-RS は PCAN-USB / SocketCAN を使用 |
| ホスト | Ubuntu 22.04+、Python 3.10、x86_64 |

### 配線とパーミッション

```bash
sudo chmod a+rw /dev/bus/usb/*/*   # Depth camera USB permissions
sudo chmod 666 /dev/ttyUSB0        # B601-DM USB2CAN; adjust the port if needed
```

B601-RS の場合、キャリブレーションや把持スクリプトを実行する前に CAN インターフェースを立ち上げてください：

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
ip -details link show can0
```

:::danger
B601-DM は 24V DC 電源を使用し、B601-RS は 48V DC 電源を使用します。電源、アームのバージョン、SDK 設定が一致していることを必ず確認してください。混在させないでください。
:::

</section>

<section id="install" className="section-card">

## 環境インストール

| 項目 | 要件 |
|------|------|
| OS | Ubuntu 22.04+ |
| Python | 3.10 |
| 推奨環境 | conda |
| 推奨ワークスペース | `rebot_grasp` |
| 推奨環境名 | `rebotarm` |

### Step 1. リポジトリをクローン

公式の Seeed-Projects リポジトリを推奨します：

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

現在の開発用リポジトリを使用することもできます：

```bash
git clone https://github.com/EclipseaHime017/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

### Step 2. conda 環境を作成して有効化

```bash
conda env create -f environment.yml
conda activate rebotarm
```

### Step 3. ロボットアーム制御ライブラリをインストール

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

もし `pip install -e .` 実行時に `Multiple top-level packages discovered in a flat-layout` と表示された場合は、`reBotArm_control_py` 内の `pyproject.toml` に次のパッケージ検出設定を追加してください：

```toml
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

</section>

<section id="camera-sdk" className="section-card">

## 深度カメラ SDK をインストール

<details open className="content-details">
<summary>Orbbec Gemini 2</summary>

Orbbec Gemini 2 は `pyorbbecsdk` に依存します。推奨される方法は、ビルド済みの Python パッケージをインストールすることです：

```bash
pip install pyorbbecsdk2
```

ソースからビルドすることもできます：

```bash
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev
cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

中国本土のユーザー向け：

```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

初回使用時は、udev ルールをインストールしてください：

```bash
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
```

</details>

<details className="content-details">
<summary>Intel RealSense D435i / D405</summary>

```bash
pip install pyrealsense2
python -c "import pyrealsense2; print('pyrealsense2 OK')"
```

完全な RealSense ツールキットや udev ルールが必要な場合は、公式の Intel RealSense SDK ドキュメントを参照し、`librealsense2` をインストールしてください。

</details>

</section>

<section id="graspnet" className="section-card">

## GraspNet の設定（オプション）

YOLO + OBB 把持パイプラインだけを先に実行したい場合は、このセクションをスキップしてください。より豊富な 6D 把持姿勢候補が必要になったときに GraspNet を構成します。

ローカルオペレータをビルドする前に、`nvcc` が利用可能であり、PyTorch が使用している CUDA バージョンと一致していることを確認します：

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

`nvcc` が存在しない、または `torch.version.cuda` と一致しない場合は、現在の PyTorch CUDA バージョンに一致する CUDA コンパイラをインストールしてください。例えば、PyTorch が `13.0` を報告している場合：

```bash
conda install -c nvidia cuda-nvcc=13.0
```

GraspNet のローカルオペレータをビルドします：

```bash
cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline
pip install open3d tensorboard Pillow tqdm

export CUDA_HOME=$CONDA_PREFIX
export TORCH_CUDA_ARCH_LIST="12.0"
export CPATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPATH
export CPLUS_INCLUDE_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPLUS_INCLUDE_PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/lib:$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

cd pointnet2
pip install . --no-build-isolation
cd ../knn
pip install . --no-build-isolation
cd ..

git clone https://github.com/graspnet/graspnetAPI.git
cd graspnetAPI
sed -i "s/'sklearn'/'scikit-learn'/" setup.py
pip install .
cd ../../..
```

### 学習済みモデルの設定

公式の GraspNet 学習済み重み `checkpoint-rs.tar` をダウンロードし、次の場所に配置します：

```bash
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

その後、`config/default.yaml` を確認します：

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

</section>

<section className="section-card">

## ディレクトリ構造

```text
rebot_grasp/
├── config/
│   ├── default.yaml
│   └── calibration/
│       └── <camera_type>/
│           ├── intrinsics.npz
│           └── hand_eye.npz
├── drivers/
│   ├── camera/
│   └── robot/
├── calibration/
│   ├── aruco_pose.py
│   └── hand_eye.py
├── utils/
├── scripts/
│   ├── main.py
│   ├── set.py
│   ├── ordinary_grasp_pipeline.py
│   ├── graspnet_camera_demo.py
│   ├── grasp.py
│   └── collect_handeye_eih.py
├── sdk/
└── environment.yml
```

</section>

<section id="run" className="section-card">


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>実行前の安全確認</strong>
    <p>ロボット作業空間の<strong>半径 1 メートル</strong>以内から、すべての貴重品を片付け、全員を離れさせてください。このセクションを実行する前に、アームがしっかりと固定されていることを確認してください。</p>
  </div>
</div>

## 実行とデバッグ

### 0. アームのバージョンと SDK 設定の確認

`sdk/reBotArm_control_py/config/rebotarm.yaml` で、対応するハードウェア構成を選択します：

```yaml
hardware_yaml: rebotarm_dm.yaml
```

または：

```yaml
hardware_yaml: rebotarm_rs.yaml
```

### 1. ハンドアイキャリブレーション（把持前に必須）

```bash
python scripts/collect_handeye_eih.py
```

自動モードでは、アームがあらかじめ設定された姿勢を走査し、ArUco 検出が安定したときに自動でサンプリングします。少なくとも 5 サンプルが必要で、安定性を高めるには 15 サンプル以上を推奨します。

サンプル収集のためにアームを手動で動かすには：

```bash
python scripts/collect_handeye_eih.py --manual
```

:::tip
キャリブレーション後に把持精度が十分でない場合は、`config/default.yaml` の `calibration.hand_eye_compensation_m` 内の `X`、`Y`、`Z` を調整してください。
:::

### 2. メイン把持プログラム：`scripts/main.py`

ビジュアル把持フロー全体：

1. RGB-D カメラを初期化し、画像ストリームが利用可能であることを確認します。
2. アームとグリッパを有効化し、レディポーズへ移動します。
3. YOLO 物体検出とインスタンスセグメンテーションを用いたリアルタイムカメラプレビューを実行します。
4. OBB の短軸を用いてグリッパの向きを推定し、深度分位数を用いて把持高さを推定します。
5. `G` を押してフレームを固定し、ハンドアイ変換を通じて目標アーム姿勢を計算します。
6. 事前把持点へ移動し、下降してグリッパを閉じ、持ち上げてレディポーズに戻ります。

```bash
python scripts/main.py
```

デバッグのためには、次から始めてください：

```bash
python scripts/main.py --dry-run
```

### 3. 把持＆配置プログラム：`scripts/set.py`

このスクリプトは、バナナを把持して箱の中に配置するデモを行います。

```bash
python scripts/set.py
```

### 4. 簡易把持テスト：`scripts/ordinary_grasp_pipeline.py`

このスクリプトはアームに接続しません。OBB 把持姿勢の推定と可視化のみを検証します。

```bash
python scripts/ordinary_grasp_pipeline.py
```

### 5. GraspNet カメラ推定：`scripts/graspnet_camera_demo.py`

このスクリプトはアームに接続しません。RGB-D カメラのみを用いて GraspNet による 6D 把持姿勢推定を実行します。

```bash
python scripts/graspnet_camera_demo.py
```

### 6. GraspNet ロボットアーム把持：`scripts/grasp.py`

```bash
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

</section>

<section id="config" className="section-card">

## `default.yaml` パラメータリファレンス

<details open className="content-details">
<summary>カメラとキャリブレーション</summary>

| パラメータ | 型 / オプション | 意味 |
| :--- | :--- | :--- |
| `camera.type` | `realsense_d435i` / `realsense_d405` / `orbbec_gemini2` | システムに接続されているカメラの種類。 |
| `camera.serial` | `string` / `null` | デバイスのシリアル番号。`null` に設定すると最初に利用可能なデバイスを使用します。 |
| `calibration.aruco.marker_length_m` | `float` | ArUco マーカーの一辺の長さ（メートル単位）。 |
| `calibration.hand_eye_compensation_m` | `array` | ロボットベース座標系における XYZ 並進補正量（メートル単位）。 |

</details>

<details className="content-details">
<summary>検出と把持パイプライン</summary>

| パラメータ | 型 | 意味 |
| :--- | :--- | :--- |
| `detection.conf_threshold` | `float` | YOLO 検出の信頼度しきい値。 |
| `detection.iou_threshold` | `float` | YOLO NMS の IoU しきい値。 |
| `grasp_pipeline.infer_every_live` | `int` | ライブプレビュー中に N フレームごとに検出を実行します。 |
| `grasp_pipeline.grasp.depth_quantile` | `float` | OBB 把持パイプラインで使用される深度分位数。 |
| `grasp_pipeline.grasp.pregrasp_offset_m` | `float` | 最終把持姿勢から事前把持姿勢までの後退距離。 |
| `grasp_pipeline.grasp.insertion_depth_m` | `float` | GraspNet 把持実行で使用される追加挿入深さ。 |
| `grasp_pipeline.grasp.min_base_z_m` | `float` | ロボットベース座標系で許可される最小把持高さ。 |

</details>

<details className="content-details">
<summary>ロボットとグリッパ</summary>

| パラメータ | 型 / オプション | 意味 |
| :--- | :--- | :--- |
| `robot.repo_root` | `string` / `null` | `reBotArm_control_py` へのパス。`null` の場合は `sdk/reBotArm_control_py` が使用されます。 |
| `robot.ready_pose` | `array` | 起動時および各把持タスク後に使用されるレディポーズ。 |
| `robot.gripper.dm` / `robot.gripper.rs` | object | SDK 設定に基づいて自動的に選択される DM / RS グリッパパラメータ。 |

`angle_open`、`close_torque`、`default_force` は正の数である必要があります。`counterclockwise` は閉じる方向を定義し、`tau_max` はトルク上限です。

</details>

### モデル選択

YOLO モデルは `rebot_grasp/models/` から読み込まれます。ファイルが存在しない場合、通常 Ultralytics が自動的にダウンロードを試みます。

| モデル | 説明 |
| --- | --- |
| `yoloe-26l-seg.pt` | オープンボキャブラリ + セグメンテーション、現在のデフォルト。 |
| `yoloe-26s-seg.pt` | より軽量で高速。 |
| `yolov8n-seg.pt` | クローズドカテゴリのセグメンテーション、小型モデル。 |
| `yolov8s-seg.pt` | クローズドカテゴリのセグメンテーションで、より高精度。 |

</section>

<section id="faq" className="section-card">

## FAQ

<details className="content-details">
<summary>1. `ModuleNotFoundError: No module named 'motorbridge'`</summary>

プロジェクト環境がアクティブになっていることを確認し、その後環境を同期してアーム SDK を再インストールしてください：

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
cd sdk/reBotArm_control_py && pip install -e .
```

</details>

<details className="content-details">
<summary>2. `G` を押しても把持が実行されない</summary>

よくある原因としては、`hand_eye.npz` が存在しない、ハンドアイキャリブレーションモードが `eye_in_hand` ではない、または目標姿勢が IK 到達可能でないことなどがあります。まずはドライラン検証から始めてください：

```bash
python scripts/main.py --dry-run
```

</details>

<details className="content-details">
<summary>3. 把持深さが安定しない</summary>

`grasp_pipeline.grasp.depth_quantile`、カメラの取り付け高さ、対象物表面の反射率、および作業空間内の深度品質を確認してください。

</details>

<details className="content-details">
<summary>4. GraspNet が `pointnet2` から `pointnet2_utils` をインポートできない</summary>

これは通常、ローカル CUDA 拡張 `pointnet2` / `knn` が現在の conda 環境で正しくコンパイルされていないことを意味します。再ビルドしてください：

```bash
conda activate rebotarm
cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

</details>

<details className="content-details">
<summary>5. GraspNet が `RuntimeError: CPU not supported` を報告する</summary>

`pointnet2` のサンプリングオペレータは CUDA テンソルのみをサポートします。CUDA が利用可能であることを確認し、必要に応じてローカル拡張を再ビルドしてください：

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

</details>

</section>

<section className="course-nav-section section-card section-block">
  <div className="section-title">
    <span>ラーニングパス</span>
    <h2>reBot B601-DM ラーニングパスを続けましょう</h2>
    <p>これらのチュートリアルはロボティクスページと同じ順序で読めるように設計されています。基本的な立ち上げから始め、LeRobot によるデータ収集、運動学デバッグ、ビジュアルグラスピング、そして最後に ROS2 連携へと進んでください。</p>
  </div>
  <div className="course-path-grid">
    <a className="course-step" href="/ja/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <div>
        <strong>はじめに</strong>
        <small>開封から配線、電源チェック、ドライバ設定、キャリブレーション、基本的な動作テストまでを一通り行います。</small>
      </div>
      <em>ここから開始</em>
    </a>
    <a className="course-step" href="/ja/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <div>
        <strong>LeRobot テレオペレーションとデータ収集</strong>
        <small>アームをテレオペレートし、カメラを接続してデータセットを記録し、ポリシーを学習させ、実機アームの挙動を評価します。</small>
      </div>
      <em>データ収集</em>
    </a>
    <a className="course-step" href="/ja/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <div>
        <strong>Pinocchio による運動学の可視化</strong>
        <small>ロボットモデル、座標系、順運動学 / 逆運動学、軌道計画、重力補償について理解します。</small>
      </div>
      <em>制御</em>
    </a>
    <a className="course-step active" href="/ja/rebot_arm_b601_dm_grasping_demo/">
      <span className="course-index">4</span>
      <div>
        <strong>ビジュアルグラスピング デモ</strong>
        <small>RGB-D 認識、YOLO / OBB または GraspNet、ハンドアイキャリブレーション、実物体の把持を組み合わせます。</small>
      </div>
      <em>現在の記事</em>
    </a>
    <a className="course-step" href="/ja/rebot_arm_b601_dm_ros2_integration/">
      <span className="course-index">5</span>
      <div>
        <strong>ROS2 連携</strong>
        <small>アームを ROS2、RViz、MoveIt 2、標準サービス、アクション、およびプランニングワークフローに接続します。</small>
      </div>
      <em>インテグレーション</em>
    </a>
  </div>
</section>


## 参考文献

- [reBotArm_control_py](https://github.com/vectorBH6/reBotArm_control_py)
- [reBot-DevArm](https://github.com/Seeed-Projects/reBot-DevArm)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [pyorbbecsdk](https://github.com/orbbec/pyorbbecsdk)
- [RealSense SDK](https://github.com/realsenseai/librealsense)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Ultralytics YOLO](https://github.com/ultralytics/ultralytics)

## 技術サポート

- [Issue を送信](https://github.com/Seeed-Projects/reBot-DevArm-Grasp/issues)

</div>

<style>{`
.rebot-page {
  --rb-bg: #ffffff;
  --rb-surface: #ffffff;
  --rb-surface-soft: #f8fafc;
  --rb-text: #111827;
  --rb-muted: #64748b;
  --rb-border: rgba(148, 163, 184, 0.28);
  --rb-primary: #2563eb;
  --rb-primary-soft: #eff6ff;
  --rb-accent: #14b8a6;
  --rb-accent-soft: #ccfbf1;
  --rb-warning: #f59e0b;
  --rb-danger: #ef4444;
  --rb-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  width: 100%;
}
.rebot-page .doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.rebot-page .doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.rebot-page .eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.rebot-page .doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.rebot-page .doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.rebot-page .hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.rebot-page .hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.rebot-page .hero-actions a:nth-child(2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.rebot-page .hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.rebot-page .hero-card strong { color: var(--rb-text); }
.rebot-page .hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.rebot-page .doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.rebot-page .doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.88rem; transition: all 0.2s ease; }
.rebot-page .doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.rebot-page .section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.rebot-page .section-card > h2 { margin-top: 0; color: var(--rb-text); }
.rebot-page .section-card > h3, .rebot-page .section-card h3 { color: var(--rb-text); }
.rebot-page .section-card p, .rebot-page .section-card li { color: var(--rb-muted); line-height: 1.65; }
.rebot-page .path-grid, .rebot-page .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.9rem; }
.rebot-page .path-card, .rebot-page .feature-grid div { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; transition: all 0.2s ease; }
.rebot-page .path-card:hover { transform: translateY(-3px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.rebot-page .path-card > span:first-child { width: fit-content; padding: 0.32rem 0.6rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); font-weight: 900; font-size: 0.75rem; }
.rebot-page .path-card strong, .rebot-page .feature-grid strong { color: var(--rb-text); }
.rebot-page .path-card p, .rebot-page .feature-grid span { color: var(--rb-muted); line-height: 1.6; font-size: 0.92rem; margin: 0; }
.rebot-page .image-frame { margin: 1rem 0; text-align: center; }
.rebot-page .image-frame img { max-width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.08); }
.rebot-page .content-details, .rebot-page .video-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 16px; background: var(--rb-surface-soft); overflow: hidden; }
.rebot-page .content-details summary, .rebot-page .video-details summary { cursor: pointer; padding: 0.95rem 1rem; color: var(--rb-text); font-weight: 850; list-style: none; }
.rebot-page .content-details summary::-webkit-details-marker, .rebot-page .video-details summary::-webkit-details-marker { display: none; }
.rebot-page .content-details summary::after, .rebot-page .video-details summary::after { content: "Open"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.rebot-page .content-details[open] summary::after, .rebot-page .video-details[open] summary::after { content: "Close"; }
.rebot-page .content-details > :not(summary), .rebot-page .video-details > :not(summary) { margin-left: 1rem; margin-right: 1rem; }
.rebot-page .content-details > :last-child, .rebot-page .video-details > :last-child { margin-bottom: 1rem; }
.rebot-page .video-container, .video-container { position: relative; width: 100%; padding-bottom: 56.25%; margin: 1rem 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border, rgba(148,163,184,0.28)); background: #000; }
.rebot-page .video-container iframe, .video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.rebot-page table { width: 100%; display: table; }
.rebot-page table img { max-width: 220px; height: auto; border-radius: 10px; }
.rebot-page code { word-break: break-word; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-accent-soft: rgba(45,212,191,0.14); --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .rebot-page .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .rebot-page .hero-card, html[data-theme='dark'] .rebot-page .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .rebot-page .doc-nav a:hover { background: #1f2023; }
@media (max-width: 900px) { .rebot-page .doc-hero { grid-template-columns: 1fr; } .rebot-page .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 560px) { .rebot-page .doc-hero, .rebot-page .section-card { padding: 1.1rem; border-radius: 18px; } .rebot-page .doc-nav { grid-template-columns: 1fr; } }

/* 共有の安全警告とコースナビゲーション */
.safety-alert {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.9rem;
  align-items: flex-start;
  margin: 1.15rem 0 1.35rem;
  padding: 1.05rem 1.15rem;
  border-radius: 18px;
  border: 1px solid rgba(239, 68, 68, 0.38);
  background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92));
  color: #7f1d1d;
  box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12);
}
.safety-alert-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 999px;
  background: #fee2e2;
  color: #dc2626;
  font-size: 1.25rem;
  line-height: 1;
  flex-shrink: 0;
}
.safety-alert-content strong {
  display: block;
  margin-bottom: 0.45rem;
  color: #991b1b;
  font-size: 1.05rem;
  font-weight: 900;
}
.safety-alert-content p,
.safety-alert-content ul {
  margin: 0;
  color: #7f1d1d;
  line-height: 1.68;
}
.safety-alert-content ul {
  margin-top: 0.65rem;
  padding-left: 1.2rem;
}
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact {
  margin: 1rem 0;
  padding: 0.9rem 1rem;
  border-radius: 16px;
}
.safety-alert.compact .safety-alert-content strong { margin-bottom: 0.25rem; }
.course-nav-section {
  margin-top: 1.4rem;
}
.course-path-grid {
  display: grid;
  gap: 0.85rem;
}
.course-step {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border, rgba(148, 163, 184, 0.28));
  background: var(--rb-surface, var(--panel-bg, #ffffff));
  text-decoration: none !important;
  color: var(--rb-text, var(--text-main, #111827));
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.course-step:hover {
  transform: translateY(-1px);
  border-color: rgba(37, 99, 235, 0.32);
  box-shadow: 0 16px 32px rgba(37, 99, 235, 0.10);
}
.course-step.active {
  border-color: rgba(37, 99, 235, 0.42);
  background: linear-gradient(135deg, rgba(239, 246, 255, 0.92), rgba(240, 253, 250, 0.78));
}
.course-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 999px;
  color: #ffffff;
  background: #2563eb;
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.24);
}
.course-step strong {
  display: block;
  color: var(--rb-text, var(--text-main, #111827));
  font-size: 1rem;
  margin-bottom: 0.24rem;
}
.course-step small {
  display: block;
  color: var(--rb-muted, var(--text-muted, #64748b));
  line-height: 1.55;
  font-size: 0.92rem;
}
.course-step em {
  justify-self: end;
  white-space: nowrap;
  font-style: normal;
  font-size: 0.78rem;
  font-weight: 800;
  color: #2563eb;
  background: #eff6ff;
  border: 1px solid rgba(37, 99, 235, 0.2);
  border-radius: 999px;
  padding: 0.35rem 0.65rem;
}
html[data-theme='dark'] .safety-alert {
  border-color: rgba(248, 113, 113, 0.42);
  background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18));
  color: #fecaca;
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28);
}
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong,
html[data-theme='dark'] .safety-alert-content p,
html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
html[data-theme='dark'] .course-step {
  background: rgba(31, 32, 35, 0.84);
  border-color: rgba(148, 163, 184, 0.22);
}
html[data-theme='dark'] .course-step.active {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.18), rgba(20, 184, 166, 0.10));
  border-color: rgba(96, 165, 250, 0.38);
}
html[data-theme='dark'] .course-step strong { color: #e5e7eb; }
html[data-theme='dark'] .course-step small { color: #cbd5e1; }
html[data-theme='dark'] .course-step em { color: #93c5fd; background: rgba(37, 99, 235, 0.16); border-color: rgba(96, 165, 250, 0.28); }
@media (max-width: 640px) {
  .safety-alert { grid-template-columns: 1fr; }
  .course-step { grid-template-columns: auto minmax(0, 1fr); }
  .course-step em { grid-column: 2; justify-self: start; }
}


`}</style>
