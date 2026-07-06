---
description: このチュートリアルでは、RGB-D カメラ、YOLO / OBB、およびオプションの GraspNet 把持パイプラインを使用して、reBot Arm B601-RS 向けの完全なビジュアル把持デモを構築する方法を説明します。
title: reBot Arm B601-RS ビジュアル把持デモ
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif
keywords:
  - reBot Arm
  - B601-RS
  - 把持
  - RGB-D
  - YOLO
  - GraspNet
  - ハンドアイキャリブレーション
  - ロボット
slug: /rebot_arm_b601_rs_grasping_demo
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-07-05
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-15'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_grasping_demo/
---

# reBot Arm B601-RS ビジュアル把持デモ

<div className="rebot-page">
  <section className="doc-hero">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>RGB-D ビジョン、YOLO、および B601-RS を用いてデスクトップ向けビジュアル把持システムを構築する</h2>
      <p>
        このガイドでは、環境構築、カメラ統合、ロボットアーム SDK 設定、ハンドアイキャリブレーション、YOLO / OBB / GraspNet による把持推定、
        そして実機ロボットアームでの実行までを含む、完全なビジュアル把持デモの手順を説明します。
        </p>
      <div className="hero-actions">
      <a href="#クイック-path">ワークフローを見る</a>
        <a href="#実行">デモを実行する</a>
        </div>
      </div>
    <div className="hero-card">
    <strong>推奨構成</strong>
      <span>reBot Arm B601-RS</span>
      <span>Orbbec Gemini 2 または RealSense D435i / D405</span>
      <span>Ubuntu 22.04 + Python 3.10</span>
      </div>
    </section>


  <div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
  <strong>安全上の警告：実行前にロボット作業空間を必ず片付けてください</strong>
    <p>ロボットアームを動かすプログラムを実行する前に、ロボット作業空間の<strong>半径 1 メートル</strong>以内から、貴重品、壊れやすい物体、工具、ケーブル、および無関係な物体をすべて取り除いてください。デバッグおよび動作中は、作業者はロボットの動作範囲から離れている必要があります。</p>
    <ul>
    <li>ロボットアームの電源投入後は、関節、モーター、リンク、グリッパー、エンドエフェクタには触れないでください。</li>
      <li>キャリブレーション、MotorBridge、遠隔操作、データセット収集、IK 制御、軌道制御、重力補償、ビジュアル把持、ROS2 アクション、または MoveIt 実行を行う前に、ロボットアームが確実に固定されていることを確認してください。</li>
      <li>異常な動き、異音、振動、ケーブルの緩み、電源接触不良、または通信断が発生した場合は、直ちにプログラムを停止し、点検前にシステムの電源を切ってください。</li>
      <li>モーターケーブル、CAN ケーブル、PCAN-USB アダプタ、XT30 コネクタ、または電源コネクタを抜き差しする際は、必ずシステムの電源を切ってから行ってください。</li>
      </ul>
    </div>
  </div>

<nav className="doc-nav" aria-label="visual grasping navigation">
    <a href="#クイック-path">ワークフロー</a>
    <a href="#hardware">ハードウェア</a>
    <a href="#install">インストール</a>
    <a href="#camera-sdk">カメラ SDK</a>
    <a href="#graspnet">GraspNet</a>
    <a href="#実行">実行とデバッグ</a>
    <a href="#config">設定</a>
    <a href="#faq">FAQ</a>
    </nav>

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif" alt="reBot Arm B601-RS visual grasping demo" />
  </p>

<p align="center">
  <strong>奥行き認識 · 物体検出 · ハンドアイキャリブレーション · 自律把持 · 完全オープンソース</strong>
  </p>

<div className="video-placeholder">ビデオリンクは後日追加予定：B601-RS ビジュアル把持デモ</div>

<section id="クイック-path" className="section-card">

<div className="step-title-row"><span className="step-pill">ワークフロー</span><div><h2>推奨ワークフロー</h2><p>以下のステージに従って、認識、キャリブレーション、実機アームでの実行を安全に検証してください。</p></div></div>

<div className="path-grid">
  <div className="path-card"><span>Step 1</span><strong>ハードウェアの準備</strong><p>アームのバージョン、電源、PCAN-USB / SocketCAN インターフェース、および RGB-D カメラ接続を確認します。</p></div>
  <div className="path-card"><span>Step 2</span><strong>環境のインストール</strong><p>conda 環境を作成し、アーム SDK、カメラ SDK、YOLO、およびオプションの GraspNet をインストールします。</p></div>
  <div className="path-card"><span>Step 3</span><strong>ハンドアイキャリブレーションの完了</strong><p>ArUco の姿勢を収集し、Eye-in-Hand キャリブレーション変換を解きます。</p></div>
  <div className="path-card"><span>Step 4</span><strong>把持デモの実行</strong><p>まずドライランで認識とターゲット姿勢を検証し、その後実機アームで実行します。</p></div>
  </div>

:::tip
このデモを実行する前に、アームのクイックスタートガイドを完了してください：[B601-RS クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/)。
:::

</section>

<section className="section-card">
  <div className="section-title">
  <span>詳細ステップ</span>
    <h2>詳細な実装ステージ</h2>
    <p>このチェックリストを使って、認識のみの検証から、安全な実機アーム実行へと進めてください。</p>
    </div>
  <div className="step-card-grid">
  <div className="step-card"><span className="step-mini">Step 0</span><strong>まずクイックスタートを完了する</strong><p>認識をロボット動作に接続する前に、電源、PCAN-USB / SocketCAN、ゼロ位置、および基本動作を確認します。</p></div>
    <div className="step-card"><span className="step-mini">Step 1</span><strong>RGB-D ビジョンの準備</strong><p>カメラ SDK をインストールし、キャリブレーション前に安定したカラー / 深度ストリームを確認します。</p></div>
    <div className="step-card"><span className="step-mini">Step 2</span><strong>Eye-in-Hand のキャリブレーション</strong><p>十分な ArUco サンプルを収集し、ハンドアイ変換の精度を検証します。</p></div>
    <div className="step-card"><span className="step-mini">Step 3</span><strong>認識のみを検証</strong><p>ロボットを動かさずに OBB または GraspNet デモを実行し、姿勢推定を確認します。</p></div>
    <div className="step-card"><span className="step-mini">Step 4</span><strong>ドライランを実行</strong><p>ターゲット姿勢、IK の到達可能性、プレグラスプ姿勢、および衝突リスクを確認します。</p></div>
    <div className="step-card"><span className="step-mini">Step 5</span><strong>実際の把持を有効化</strong><p>すべての事前チェックに合格した後にのみ、アームを有効化し、実際の把持実行を行ってください。</p></div>
    </div>
  </section>


<section className="section-card">

## プロジェクト概要

**reBot Arm B601-RS Visual Grasping Demo** は、RGB-D 深度カメラと reBot ロボットアーム制御ライブラリを中心に構築された、オープンソースのビジュアル把持プロジェクトです。本システムは B601-RS 構成向けに設計されています。YOLO によるリアルタイムなデスクトップ物体検出を行い、OBB の最小外接矩形で把持方向を推定し、ハンドアイキャリブレーションを通じてカメラ座標系の把持点をロボットベース座標系へ変換し、最終的にロボットアームを駆動して自律把持を完了します。

### コア機能

<div className="feature-grid">
  <div className="path-card"><span>Step 1</span><strong>RGB-D 深度認識</strong><p>Orbbec Gemini 2、RealSense D435i / D405 などの RGB-D カメラをサポートします。</p></div>
  <div className="path-card"><span>Step 2</span><strong>YOLO 物体検出</strong><p>オープンボキャブラリクラスおよび標準的な YOLO セグメンテーションモデルをサポートします。</p></div>
  <div className="path-card"><span>Step 3</span><strong>OBB 把持推定</strong><p>最小外接矩形の短軸をグリッパーの向きとして使用し、深度の分位値から把持高さを決定します。</p></div>
  <div className="path-card"><span>Step 4</span><strong>GraspNet 6D 把持</strong><p>オプションで、より複雑な物体に対して、より豊富な 6D 把持候補を追加できます。</p></div>
  <div className="path-card"><span>Step 5</span><strong>Eye-in-Hand キャリブレーション</strong><p>TSAI ハンドアイキャリブレーションを用いて、カメラ座標系の把持点をロボットベース座標系へ変換します。</p></div>
  <div className="path-card"><span>Step 6</span><strong>実機アーム実行</strong><p>reBotArm_control_py を用いて IK、軌道制御、およびグリッパーの力制御を行います。</p></div>
  </div>
</section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
  <strong>実行前の安全チェック</strong>
    <p>ロボット作業空間の<strong>半径 1 メートル</strong>以内から貴重品を取り除き、すべての作業者が離れていることを確認してください。このセクションを実行する前に、アームが確実に固定されていることを確認してください。</p>
    </div>
  </div>

<section id="hardware" className="section-card">

<div className="step-title-row"><span className="step-pill">Step 1</span><div><h2>ハードウェア構成</h2><p>ソフトウェアをインストールする前に、アーム、RGB-D カメラ、電源、および SocketCAN インターフェースを確認します。</p></div></div>

| コンポーネント | モデル / 要件 |
|------|------------|
| ロボットアーム | reBot Arm B601-RS |
| 深度カメラ | Orbbec Gemini 2、Intel RealSense D435i / D405 |
| 通信インターフェース | PCAN-USB / SocketCAN、CAN ビットレート 1 Mbps |
| ホスト | Ubuntu 22.04+、Python 3.10、x86_64 |

### 配線とパーミッション

__CODE_LINE_PLH__
```bash
sudo chmod a+rw /dev/bus/usb/*/*   # Depth camera USB permissions

B601-RS では、キャリブレーションや把持スクリプトを実行する前に CAN インターフェースを立ち上げてください：

__CODE_LINE_PLH__
```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
ip -details link show can0

:::danger
B601-RS は 48V DC 電源を使用します。デモを実行する前に、電源、PCAN-USB / SocketCAN インターフェース、および SDK 設定が一致していることを確認してください。
:::

</section>

<section id="install" className="section-card">

<div className="step-title-row"><span className="step-pill">Step 2</span><div><h2>環境インストール</h2><p>プロジェクト環境を作成し、ロボット制御ライブラリをインストールします。</p></div></div>

| 項目 | 要件 |
|------|------|
| OS | Ubuntu 22.04+ |
| Python | 3.10 |
| 推奨環境 | conda |
| 推奨ワークスペース | `rebot_grasp` |
| 推奨環境名 | `rebotarm` |

### Step 1. リポジトリをクローンする

公式の Seeed-Projects リポジトリを推奨します：

__CODE_LINE_PLH__
```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp

現在の開発用リポジトリを使用することもできます：

__CODE_LINE_PLH__
```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp

### Step 2. conda 環境を作成して有効化する

__CODE_LINE_PLH__
```bash
conda env create -f environment.yml
conda activate rebotarm

### Step 3. ロボットアーム制御ライブラリをインストールする

__CODE_LINE_PLH__
```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

もし `pip install -e .` が `Multiple top-level packages discovered in a flat-layout` と表示する場合は、`reBotArm_control_py` 内の `pyproject.toml` に次のパッケージ検出設定を追加してください：

```toml
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

B601-RS の場合は、`sdk/reBotArm_control_py/config/rebotarm.yaml` 内で次の内容を確認してください：

```yaml
hardware_yaml: rebotarm_rs.yaml
```

</section>

<section id="camera-sdk" className="section-card">

<div className="step-title-row"><span className="step-pill">Step 3</span><div><h2>Depth カメラ SDK をインストールする</h2><p>キャリブレーションの前に RGB-D カメラを起動し、SDK を確認します。</p></div></div>

<details open className="content-details">
<summary>Orbbec Gemini 2</summary>

Orbbec Gemini 2 は `pyorbbecsdk` に依存します。推奨される方法は、事前ビルド済みの Python パッケージをインストールすることです：

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

<div className="step-title-row"><span className="step-pill">Optional</span><div><h2>GraspNet を設定する</h2><p>YOLO / OBB パイプラインを超えた 6D 把持候補が必要な場合に、このパスを使用します。</p></div></div>

まず YOLO + OBB 把持パイプラインだけを実行したい場合は、このセクションをスキップしてください。より豊富な 6D 把持姿勢候補が必要になったときに GraspNet を設定します。

ローカルオペレータをビルドする前に、`nvcc` が利用可能であり、PyTorch が使用している CUDA バージョンと一致していることを確認してください：

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

もし `nvcc` が存在しない、または `torch.version.cuda` と一致しない場合は、現在の PyTorch CUDA バージョンに一致する CUDA コンパイラをインストールしてください。例えば、PyTorch が `13.0` と報告している場合：

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

### 事前学習モデルを設定する

公式の GraspNet 事前学習済み重み `checkpoint-rs.tar` をダウンロードし、次の場所に配置します：

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


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>実行前の安全確認</strong>
    <p>ロボットの作業空間から<strong>半径 1 メートル</strong>以内の貴重品を片付け、すべての人が離れていることを確認してください。このセクションを実行する前に、アームがしっかりと固定されていることを必ず確認してください。</p>
  </div>
</div>

<section id="run" className="section-card">

<div className="step-title-row"><span className="step-pill">Step 4</span><div><h2>実行とデバッグ</h2><p>まずドライランと認識のみのスクリプトから始め、その後実機アームの実行を有効にします。</p></div></div>

### 0. アームのバージョンと SDK 設定を確認する

`sdk/reBotArm_control_py/config/rebotarm.yaml` で、対応するハードウェア設定を選択します：

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

ビジュアル把持の一連のフロー：

1. RGB-D カメラを初期化し、画像ストリームが利用可能であることを確認します。
2. アームとグリッパーを有効化し、レディポーズへ移動します。
3. YOLO 物体検出とインスタンスセグメンテーション付きのリアルタイムカメラプレビューを実行します。
4. OBB の短軸を用いてグリッパの向きを推定し、深度の分位点を用いて把持高さを推定します。
5. `G` を押してフレームを固定し、ハンドアイ変換を通じて目標アーム姿勢を計算します。
6. プレグラスプポイントへ移動し、下降してグリッパーを閉じ、持ち上げてレディポーズに戻ります。

```bash
python scripts/main.py
```

デバッグのため、次から始めてください：

```bash
python scripts/main.py --dry-run
```

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>実機実行の前にドライランを行う</strong>
    <p>ロボットを動かす前に、ドライランを使ってカメラ検出、ハンドアイキャリブレーション、目標姿勢、および IK の到達可能性を確認してください。</p>
  </div>
</div>

### 3. 把持＆配置プログラム：`scripts/set.py`

このスクリプトは、バナナを把持して箱の中に配置するデモを行います。

```bash
python scripts/set.py
```

### 4. 簡易把持テスト：`scripts/ordinary_grasp_pipeline.py`

このスクリプトはアームに接続しません。OBB 把持姿勢推定と可視化のみを検証します。

```bash
python scripts/ordinary_grasp_pipeline.py
```

### 5. GraspNet カメラ推定：`scripts/graspnet_camera_demo.py`

このスクリプトはアームに接続しません。RGB-D カメラのみで GraspNet による 6D 把持姿勢推定を実行します。

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

<div className="step-title-row"><span className="step-pill">Config</span><div><h2><code>default.yaml</code> パラメータリファレンス</h2><p>デモを実行する前に、カメラ、キャリブレーション、検出、把持、ロボット、およびグリッパーのパラメータを確認してください。</p></div></div>

<details open className="content-details">
<summary>カメラとキャリブレーション</summary>

| パラメータ | 型 / オプション | 意味 |
| :--- | :--- | :--- |
| `camera.type` | `realsense_d435i` / `realsense_d405` / `orbbec_gemini2` | システムに接続されているカメラの種類。 |
| `camera.serial` | `string` / `null` | デバイスのシリアル番号。`null` に設定すると最初に利用可能なデバイスを使用します。 |
| `calibration.aruco.marker_length_m` | `float` | ArUco マーカーの一辺の長さ（メートル単位）。 |
| `calibration.hand_eye_compensation_m` | `array` | ロボットベース座標系における XYZ 並進補正（メートル単位）。 |

</details>

<details className="content-details">
<summary>検出と把持パイプライン</summary>

| パラメータ | 型 | 意味 |
| :--- | :--- | :--- |
| `detection.conf_threshold` | `float` | YOLO 検出の信頼度しきい値。 |
| `detection.iou_threshold` | `float` | YOLO NMS の IoU しきい値。 |
| `grasp_pipeline.infer_every_live` | `int` | ライブプレビュー中に N フレームごとに検出を実行します。 |
| `grasp_pipeline.grasp.depth_quantile` | `float` | OBB 把持パイプラインで使用される深度分位点。 |
| `grasp_pipeline.grasp.pregrasp_offset_m` | `float` | 最終把持姿勢からプレグラスプ姿勢までの後退距離。 |
| `grasp_pipeline.grasp.insertion_depth_m` | `float` | GraspNet 把持実行で使用される追加の挿入深さ。 |
| `grasp_pipeline.grasp.min_base_z_m` | `float` | ロボットベース座標系で許可される最小把持高さ。 |

</details>

<details className="content-details">
<summary>ロボットとグリッパー</summary>

| パラメータ | 型 / オプション | 意味 |
| :--- | :--- | :--- |
| `robot.repo_root` | `string` / `null` | `reBotArm_control_py` へのパス。`null` の場合は `sdk/reBotArm_control_py` が使用されます。 |
| `robot.ready_pose` | `array` | 起動時および各把持タスク後に使用されるレディポーズ。 |
| `robot.gripper.dm` / `robot.gripper.rs` | object | SDK 設定に基づいて自動的に選択される DM / RS グリッパーパラメータ。 |

`angle_open`、`close_torque`、`default_force` は正の数である必要があります。`counterclockwise` は閉じる方向を定義し、`tau_max` はトルクの上限です。

</details>

### モデルの選択

YOLO モデルは `rebot_grasp/models/` から読み込まれます。ファイルが存在しない場合、通常 Ultralytics が自動的にダウンロードを試みます。

| モデル | 説明 |
| --- | --- |
| `yoloe-26l-seg.pt` | オープンボキャブラリ + セグメンテーション、現在のデフォルト。 |
| `yoloe-26s-seg.pt` | より軽量で高速。 |
| `yolov8n-seg.pt` | クローズドカテゴリのセグメンテーション、小型モデル。 |
| `yolov8s-seg.pt` | クローズドカテゴリのセグメンテーションで、より高い精度。 |

</section>

<section id="faq" className="section-card">

<div className="step-title-row"><span className="step-pill">FAQ</span><div><h2>FAQ</h2><p>インストール、キャリブレーション、検出、GraspNet のコンパイルおよび実行中によく発生する問題。</p></div></div>

<details className="content-details">
<summary>1. `ModuleNotFoundError: No module named 'motorbridge'`</summary>

プロジェクト環境が有効化されていることを確認し、その後環境を同期して arm SDK を再インストールします：

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
cd sdk/reBotArm_control_py && pip install -e .
```

</details>

<details className="content-details">
<summary>2. `G` を押しても把持が実行されない</summary>

よくある原因としては、`hand_eye.npz` が存在しない、ハンドアイキャリブレーションモードが `eye_in_hand` になっていない、またはターゲット姿勢が IK 到達可能範囲外であることなどがあります。まずはドライラン検証から始めてください：

```bash
python scripts/main.py --dry-run
```

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>実行前にドライランを行う</strong>
    <p>ロボットを実際に動かす前に、ドライランを使ってカメラ検出、ハンドアイキャリブレーション、ターゲット姿勢、および IK 到達可能性を検証してください。</p>
  </div>
</div>

</details>

<details className="content-details">
<summary>3. 把持深さが安定しない</summary>

`grasp_pipeline.grasp.depth_quantile`、カメラの取り付け高さ、ターゲット表面の反射率、および作業空間内の深度品質を確認してください。

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



<section className="section-card course-path-section">
  <div className="section-title">
    <span>学習を続ける</span>
    <h2>reBot B601-DM 学習パス</h2>
    <p>これらのチュートリアルは、Robotics ページの学習パスと同じ順序に従います：<strong>Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2</strong>。</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/ja/rebot_b601_rs_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Getting Started</strong><span>開封、配線、電源チェック、ドライバセットアップ、キャリブレーション、初回の動作テストを一通り完了します。</span></span>
      <span className="course-tag">ここから開始</span>
    </a>
    <a className="course-path-item" href="/ja/rebot_arm_b601_rs_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot テレオペレーションとデータ収集</strong><span>アームをテレオペレートし、カメラを接続してデータセットを記録し、ポリシーを学習して実機アームの挙動を評価します。</span></span>
      <span className="course-tag">データ収集</span>
    </a>
    <a className="course-path-item active" href="/ja/rebot_arm_b601_rs_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio 運動学の可視化</strong><span>ロボットモデル、関節、座標フレーム、順運動学 / 逆運動学、軌道、および重力補償について理解します。</span></span>
      <span className="course-tag">現在の記事</span>
    </a>
    <a className="course-path-item active" href="/ja/rebot_arm_b601_rs_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>ビジュアル把持デモ</strong><span>RGB-D 認識、ハンドアイキャリブレーション、YOLO / GraspNet、および把持姿勢生成を組み合わせて、実物体の把持を行います。</span></span>
      <span className="course-tag">現在の記事</span>
    </a>
    <a className="course-path-item" href="/ja/rebot_arm_b601_rs_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>ROS2 連携</strong><span>アームを ROS2、RViz、MoveIt 2、プランニング、およびより高レベルのロボティクスワークフローに接続します。</span></span>
      <span className="course-tag">インテグレーション</span>
    </a>
  </div>
</section>

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
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.quick-note { margin: 1rem 0; padding: 0.95rem 1.1rem; border-radius: 16px; color: #7c2d12; background: #fff7ed; border: 1px solid #fed7aa; line-height: 1.65; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.88rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.agent-inline-card { margin: 1rem 0 1.25rem; padding: 1.15rem; border-radius: 18px; background: linear-gradient(135deg, rgba(37,99,235,0.08), rgba(20,184,166,0.08)); border: 1px solid rgba(37,99,235,0.22); }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.image-frame { margin: 1rem 0; text-align: center; }
.image-frame img { max-width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.08); }
.badge-row { display: flex; flex-wrap: wrap; gap: 0.55rem; margin: 1rem 0; }
.badge-row span { padding: 0.35rem 0.65rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 800; font-size: 0.78rem; }
.buy-box { margin: 1rem 0; }
.buy-box a { display: inline-flex; padding: 0.74rem 1.05rem; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); border-radius: 999px; text-decoration: none !important; font-weight: 850; }
.path-grid, .checklist-grid, .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.9rem; }
.path-card, .checklist-grid div, .feature-grid div { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; transition: all 0.2s ease; }
.path-card:hover { transform: translateY(-3px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.path-card b, .checklist-grid strong, .feature-grid strong { color: var(--rb-text); }
.path-card span, .checklist-grid span, .feature-grid span { color: var(--rb-muted); line-height: 1.6; font-size: 0.92rem; }
.path-card em { width: fit-content; padding: 0.32rem 0.6rem; border-radius: 999px; color: #047857; background: #d1fae5; font-style: normal; font-weight: 850; font-size: 0.75rem; }
.path-card.recommended { border-color: rgba(37,99,235,0.35); background: linear-gradient(135deg, rgba(37,99,235,0.10), rgba(20,184,166,0.09)); }
.power-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1rem 0; }
.power-grid div { padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-align: center; }
.power-grid h4 { margin: 0 0 0.35rem; color: var(--rb-text); }
.power-grid p { margin: 0.25rem 0 0.75rem; color: var(--rb-muted); }
.power-grid img { max-width: 100%; border-radius: 14px; }
.step-title-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
.step-pill { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; min-width: 74px; padding: 0.55rem 0.7rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-weight: 900; }
.step-title-row h2 { margin: 0 0 0.25rem; color: var(--rb-text); }
.step-title-row p { margin: 0; color: var(--rb-muted); line-height: 1.55; }
.content-details, .video-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 16px; background: var(--rb-surface-soft); overflow: hidden; }
.content-details summary, .video-details summary { cursor: pointer; padding: 0.95rem 1rem; color: var(--rb-text); font-weight: 850; list-style: none; }
.content-details summary::-webkit-details-marker, .video-details summary::-webkit-details-marker { display: none; }
.content-details summary::after, .video-details summary::after { content: "展开"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.content-details[open] summary::after, .video-details[open] summary::after { content: "收起"; }
.content-details > :not(summary), .video-details > :not(summary) { margin-left: 1rem; margin-right: 1rem; }
.content-details > :last-child, .video-details > :last-child { margin-bottom: 1rem; }
.video-container { position: relative; width: 100%; padding-bottom: 56.25%; margin: 1rem 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.two-col { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.danger-list { padding: 1rem; margin: 1rem 0; border-radius: 16px; border: 1px solid #fecaca; background: #fef2f2; color: #7f1d1d; }
.danger-list strong { display: block; margin-bottom: 0.5rem; }
.danger-list ul { margin-bottom: 0; }
.faq-images { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1rem 0; }
.faq-images img { max-width: 100%; border-radius: 14px; border: 1px solid var(--rb-border); }
.rebot-page table img { max-width: 220px; height: auto; border-radius: 10px; }
.rebot-page table { display: table; width: 100%; }
.rebot-page table { overflow-x: auto; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-accent-soft: rgba(45,212,191,0.14); --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .quick-note { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .danger-list { background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.35); color: #fecaca; }
html[data-theme='dark'] .agent-inline-card { background: linear-gradient(135deg, rgba(96,165,250,0.12), rgba(45,212,191,0.10)); border-color: rgba(96,165,250,0.28); }
html[data-theme='dark'] .path-card em { color: #bbf7d0; background: rgba(34,197,94,0.18); }

.video-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 132px;
  margin: 1rem 0;
  padding: 1.1rem;
  border-radius: 16px;
  border: 1px dashed rgba(37,99,235,0.35);
  background: var(--rb-primary-soft);
  color: var(--rb-primary);
  font-weight: 850;
  text-align: center;
}
.rebot-page .section-card > h2, .rebot-page .section-card > h3 {
  color: var(--rb-text);
}
.rebot-page .section-card p, .rebot-page .section-card li {
  line-height: 1.7;
}
.rebot-page .feature-grid div p, .rebot-page .path-grid div p {
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.6;
}
.rebot-page pre {
  border-radius: 14px;
}
html[data-theme='dark'] .video-placeholder {
  border-color: rgba(96,165,250,0.35);
}

@media (max-width: 900px) { .doc-hero, .power-grid, .two-col, .faq-images { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } .step-title-row { align-items: flex-start; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .step-title-row { display: block; } .step-pill { margin-bottom: 0.75rem; } }


.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239,68,68,0.38); background: linear-gradient(135deg, rgba(254,242,242,0.98), rgba(255,247,237,0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239,68,68,0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.safety-alert.compact .safety-alert-content strong { margin-bottom: 0.25rem; }
html[data-theme='dark'] .safety-alert { border-color: rgba(248,113,113,0.42); background: linear-gradient(135deg, rgba(127,29,29,0.26), rgba(124,45,18,0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0,0,0,0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248,113,113,0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }

.course-path-section { margin-top: 2rem; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface, var(--rb-card, #fff)); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 8px 22px rgba(15,23,42,0.05); transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.course-path-item:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.42); box-shadow: 0 14px 30px rgba(37,99,235,0.12); }
.course-path-item.active { border-color: rgba(37,99,235,0.55); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 900; }
.course-path-item.active .course-index { color: #fff; background: var(--rb-primary); box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
html[data-theme='dark'] .course-path-item { background: #111827; border-color: rgba(148,163,184,0.24); }
html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
@media (max-width: 700px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }



/* 洗練されたステップカードとコースパスの調整 */
.step-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
  margin: 1rem 0 1.35rem;
}
.step-card {
  position: relative;
  padding: 1rem 1.05rem 1rem 1.1rem;
  border: 1px solid var(--rb-border);
  border-radius: 18px;
  background: linear-gradient(180deg, var(--rb-surface, #fff), var(--rb-surface-soft, #f8fafc));
  box-shadow: 0 12px 26px rgba(15, 23, 42, 0.06);
}
.step-card .step-mini {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.1rem;
  height: 2.1rem;
  padding: 0 0.65rem;
  margin-bottom: 0.65rem;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent));
  font-weight: 900;
  font-size: 0.86rem;
}
.step-card strong {
  display: block;
  color: var(--rb-text);
  font-size: 1rem;
  margin-bottom: 0.35rem;
}
.step-card p,
.step-card span {
  display: block;
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.65;
}
.module-summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
  margin: 1rem 0 1.35rem;
}
.module-summary-card {
  padding: 1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border);
  background: var(--rb-surface, #fff);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.module-summary-card b {
  display: block;
  margin-bottom: 0.35rem;
  color: var(--rb-text);
}
.module-summary-card span {
  display: block;
  color: var(--rb-muted);
  line-height: 1.65;
}
.path-grid > div:not([class]) {
  padding: 1rem;
  border: 1px solid var(--rb-border);
  border-radius: 18px;
  background: var(--rb-surface, #fff);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.path-card p { margin: 0.35rem 0 0; color: var(--rb-muted); line-height: 1.6; }
.course-path-section { margin-top: 2rem; }
.course-path-grid {
  display: grid;
  gap: 0.85rem;
  margin-top: 1rem;
}
.course-path-item,
.course-step {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.95rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border);
  background: var(--rb-surface, #fff);
  text-decoration: none !important;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.course-path-item.active,
.course-step.active {
  border-color: rgba(37, 99, 235, 0.45);
  background: linear-gradient(135deg, rgba(37,99,235,0.08), rgba(20,184,166,0.06));
}
.course-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.45rem;
  height: 2.45rem;
  border-radius: 999px;
  color: #fff;
  background: var(--rb-primary);
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(37,99,235,0.24);
}
.course-path-copy strong,
.course-step strong {
  display: block;
  color: var(--rb-text);
  font-size: 1rem;
  margin-bottom: 0.25rem;
}
.course-path-copy span,
.course-step small {
  display: block;
  color: var(--rb-muted);
  line-height: 1.6;
}
.course-tag,
.course-step em {
  justify-self: end;
  white-space: nowrap;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  color: var(--rb-primary);
  background: var(--rb-primary-soft);
  border: 1px solid rgba(37,99,235,0.18);
  font-style: normal;
  font-weight: 800;
  font-size: 0.78rem;
}
@media (max-width: 720px) {
  .course-path-item,
  .course-step { grid-template-columns: auto minmax(0, 1fr); }
  .course-tag,
  .course-step em { grid-column: 2; justify-self: start; }
}
html[data-theme='dark'] .step-card,
html[data-theme='dark'] .module-summary-card,
html[data-theme='dark'] .course-path-item,
html[data-theme='dark'] .course-step,
html[data-theme='dark'] .path-grid > div:not([class]) {
  background: rgba(15, 23, 42, 0.72);
  border-color: rgba(148, 163, 184, 0.22);
}
html[data-theme='dark'] .course-path-item.active,
html[data-theme='dark'] .course-step.active {
  background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12));
}

`}</style>
