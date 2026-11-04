---
description: このチュートリアルでは、reBot Arm B601-RS 向けに、YOLO/OBB パイプラインと ROS2 ベースの把持ワークフローという 2 つのビジュアルグラスピング実装を扱います。
title: B601-RS によるビジュアルグラスピング
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
  date: 2026-11-04
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-15'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_grasping_demo/
---
import '/src/css/rebot-wiki-style.css';

import GraspingTabs from '@site/src/components/robotics/RebotGraspingTabs';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/components/robotics/rebot-grasping-demo.module.css';

# reBot Arm B601-RS ビジュアルグラスピングデモ

<div className={styles.page}>

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp" alt="reBot Arm B601-RS" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>今すぐ入手</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

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

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif" alt="reBot Arm B601-RS visual grasping demo" />
</p>

## 2 つの把持方式はどう違う？

このページでは、実装の異なる 2 種類のビジュアルグラスピングデモを扱います。フレームワーク、キャリブレーション要件、起動フローを比較し、下からチュートリアルを選択してください。

<div className={styles.comparison}>
  <section className={styles.methodCard} aria-label="Method 1: Python SDK">
    <span className={styles.methodNumber}>Method 01</span>
    <h3>Python SDK + YOLO / OBB</h3>
    <p>YOLO、RGB-D 深度カメラ、および Python SDK を使用して、環境構築とカメラ統合からハンドアイキャリブレーション、把持デバッグまでの一連のワークフローを実行します。</p>
    <dl>
      <div><dt>把持ロジック</dt><dd>検出ボックスまたは OBB の最小外接矩形から把持姿勢を推定し、短軸をグリッパの開閉方向として利用することで、複雑な 3D 点群処理を回避します。必要に応じて GraspNet による 6D 姿勢推定も利用できます。</dd></div>
      <div><dt>ハンドアイキャリブレーション</dt><dd>最初のフル把持実行前に、ArUco マーカーを用いた Eye-in-Hand キャリブレーションを完了させます。</dd></div>
      <div><dt>起動方法</dt><dd>Python スクリプトを実行して、検出、姿勢推定、ロボット把持を順番に検証します。</dd></div>
    </dl>
  </section>
  <section className={styles.methodCard} aria-label="Method 2: ROS 2">
    <span className={styles.methodNumber}>Method 02</span>
    <h3>ROS 2 + YOLOE</h3>
    <p>ROS 2 と YOLOE を使用し、アーム、Gemini 2 / D405 / D435i カメラ、および把持ノードを別々のターミナルで起動してピッキングとプレースを行います。</p>
    <dl>
      <div><dt>把持ロジック</dt><dd>ビジュアルグラスピングノードが物体の検出・把持・配置を行います。テキストのクラス名で把持対象と配置先を指定します。</dd></div>
      <div><dt>ハンドアイキャリブレーション</dt><dd>キャリブレーションボードは不要で、マウント誤差や 3D プリント部品の公差によるわずかなずれを補正するためにオフセットパラメータを調整します。</dd></div>
      <div><dt>起動方法</dt><dd>アーム、カメラ、把持ノードを別々のターミナルで起動し、その後ピッキングとプレースをトリガーします。</dd></div>
    </dl>
  </section>
</div>

## 把持方式を選ぶ

<p className={styles.selectionHint}>タブを切り替えて、選択した方式のチュートリアルを表示し、そのインストール手順と実行手順に従ってください。</p>

<GraspingTabs>
<TabItem value="python-sdk" label="Method 1 · Python SDK / OBB">

## ビジュアルグラスピング方式 1

このルートでは、ROS 2 ワークスペースを使わずに **Python SDK + RGB-D カメラ + YOLO / OBB** を使用します。デフォルトルートは一般的な卓上物体に適しており、より複雑な 6D 把持が必要な場合は、下記のオプションの GraspNet モジュールを有効にしてください。

### 1. プロジェクトの特長

1. **YOLO + OBB からの直接把持姿勢推定**
   このパイプラインでは、検出ボックスまたは OBB の最小外接矩形を直接利用し、短軸をグリッパの開閉方向として扱うことで、複雑な 3D 点群処理を回避します。
2. **GraspNet-Baseline による 6D 把持姿勢推定（オプション）**
   本プロジェクトは、RGB-D 点群からの 6D 把持姿勢推定のために GraspNet-Baseline（`graspnet/graspnet-baseline`）にも対応しており、YOLO のバウンディングボックスを用いてターゲット候補を選択し、より複雑な把持実験を行うことができます。
3. **ロボットアームおよびグリッパドライバの統合**
   主要な把持スクリプトは、`reBotArm_control_py` のロボットアームおよびエンドポーズコントローラをベースとしており、グリッパの開閉、力制御把持、TCP 姿勢読み取りのための軽量な把持ヘルパーを備えています。
4. **オープンソースかつ拡張可能**
   すべてのソースコードは公開されており、ユーザーは自身のニーズに応じて制御アルゴリズムや動作をカスタマイズできます。

### 2. 仕様

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
      <td>Orbbec Gemini 2 / RealSense D435i / D405</td>
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

### 3. 部品表（BOM）

| コンポーネント | 数量 | 同梱 |
|-----------|----------|----------|
| reBot Arm B601-RS ロボットアーム | 1 | ✅ |
| グリッパ | 1 | ✅ |
| USB2CAN シリアルブリッジ | 1 | ✅ |
| 電源アダプタ（48V） | 1 | ✅ |
| USB-C / 通信用ケーブル | 1 | ✅ |
| RGB-D 深度カメラ | 1 | ✅ |
| カメラコネクタ / 取付ブラケット | 1 | ✅ |

#### 配線

1. 深度カメラを USB 3.0 でホストに接続します。
2. USB2CAN アダプタをアームの CAN バスに接続します。
3. 48V 電源、カメラ、ロボットアームがすべて確実に接続されていることを確認します。
4. パーミッションの問題が発生した場合は、次を実行します：

```bash
sudo chmod a+rw /dev/bus/usb/*/*
sudo chmod 666 /dev/ttyUSB0
```

### 4. 環境要件

| 項目 | 要件 |
|------|-------------|
| オペレーティングシステム | Ubuntu 22.04+ |
| Python | 3.10 |

### 5. 基本環境をインストールする

以下の手順を順番に実行してください。ステップ 0〜3 はデフォルトルートに必須で、ステップ 4 ではお使いのハードウェアに合わせてカメラ SDK を選択します。GraspNet のインストールと実行手順は、下の上級モジュールで別途説明します。

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">0</span>
<div className="rebot-step-content">

#### ステップ 0. 先にロボットアームの基本準備を完了する

このチュートリアルを始める前に、[reBot Arm B601-RS クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/) の内容（ロボットアームの組み立て、ゼロ点初期化、モーター ID 設定、基本的な接続確認）を完了してください。

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### ステップ 1. リポジトリをクローンする

公式の Seeed-Projects リポジトリを推奨します：

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### ステップ 2. 環境を作成し、ハードウェアに合った PyTorch を選択する

次の 3 フェーズを順番に完了します：ベース環境の作成、ハードウェアに合った PyTorch のインストール、プロジェクト依存関係のインストール。

<div className="rebot-step-flow rebot-step-flow--substeps">
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2.1</span>
<div className="rebot-step-content">

##### ベース環境を作成する

```bash
conda env create -f environment.yml -n rebotarm
conda activate rebotarm
```

:::note 期待される結果
ターミナルプロンプトに `rebotarm` と表示され、環境がアクティブになっていることが分かります。PyTorch はまだインストールされていないので、続けて次の 2 フェーズを実行してください。
:::

別の環境名を使いたい場合は、上記 2 つのコマンド内の `rebotarm` を置き換えてください。既存の環境を使う場合は、その環境を有効化してから `conda env update -n rebotarm -f environment.yml` を実行し、ベース依存関係を更新します。このコマンドは既存の pip パッケージを削除しません。

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2.2</span>
<div className="rebot-step-content">

##### ハードウェアに合った PyTorch をインストールする

どちらのタブも互換性のある同じパッケージバージョンを使用し、異なるのはダウンロードインデックスだけです。現在のバージョンファイルでは、このチュートリアルで使用する Python 3.10、Ubuntu x86_64 環境向けに、PyTorch 2.9.1、torchvision 0.24.1、torchaudio 2.9.1 を指定しています。

<Tabs groupId="rebot-pytorch-backend" defaultValue="cpu">
<TabItem value="cpu" label="CPU (no NVIDIA GPU)">

Intel / AMD の統合グラフィックスを搭載したコンピュータ、またはまず CPU 上で基本ワークフローを検証したい場合にこのオプションを使用します。

```bash
python -m pip install -r requirements-pytorch.txt --index-url https://download.pytorch.org/whl/cpu
python -c "import torch; print(torch.__version__, torch.__file__); print('CUDA available:', torch.cuda.is_available())"
```

:::note 期待される結果
PyTorch のパスがアクティブな Conda 環境内を指していることを確認します。`CUDA available: False` と表示されるのが正しい挙動です。
:::

`config/default.yaml` を次の設定のままにしておきます：

```yaml
yolo:
  device: "cpu"
```

:::tip サポートされるワークフロー
基本的な YOLO / OBB ワークフローは CPU 上で実行できます。推論速度はモデルと使用しているコンピュータに依存します。このプロジェクトの GraspNet CUDA オペレータには NVIDIA GPU が必要なため、以下の GraspNet 上級モジュールはスキップしてください。
:::

</TabItem>
<TabItem value="nvidia" label="NVIDIA GPU (CUDA)">

CUDA 対応 PyTorch をインストールする前に、ドライバが GPU を認識していることを確認します。以下の例では CUDA 12.8 ビルドを使用しており、GPU アーキテクチャとドライバの両方がこのバージョンをサポートしている必要があります：

```bash
nvidia-smi
python -m pip install -r requirements-pytorch.txt --index-url https://download.pytorch.org/whl/cu128
python -c "import torch; print(torch.__version__, torch.__file__); print('CUDA build:', torch.version.cuda); print('CUDA available:', torch.cuda.is_available())"
```

:::note 期待される結果
`nvidia-smi` に GPU が表示され、PyTorch のパスがアクティブな Conda 環境内を指し、`CUDA available: True` が出力されます。これを確認したら、`config/default.yaml` で GPU 0 を選択します：

```yaml
yolo:
  device: "0"
```
:::

:::tip CUDA ビルドの選択


CUDA が利用できない場合は、ドライバ、GPU アーキテクチャ、選択したホイールを確認するか、CPU タブに従って基本ワークフローを検証してください。
:::

If CUDA is unavailable, check your driver, GPU architecture, and selected wheel, or follow the CPU tab to verify the basic workflow.

</TabItem>
</Tabs>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2.3</span>
<div className="rebot-step-content">

##### プロジェクト依存関係のインストールと検証

いずれかのハードウェアオプションを完了したら、プロジェクトルートで次を実行します：

```bash
python -m pip install -r requirements.txt -c requirements-pytorch.txt
python -m pip check
python -c "import torch, torchvision, torchaudio, cv2; from ultralytics import YOLO; from calibration.aruco_pose import ArUcoDetector; ArUcoDetector(); print('Vision dependencies OK:', cv2.__version__)"
```

:::note 期待される結果
`pip check` が `No broken requirements found.` と表示し、検証コマンドがインポートエラーなしで `Vision dependencies OK` と出力されます。ロボットアームおよびカメラ SDK をインストールする前に、これらのチェックを完了してください。
:::

:::tip インストール失敗時の対処
`-c requirements-pytorch.txt` は互換性のある PyTorch パッケージバージョンを制約します。この引数は必ず保持し、`--upgrade` を追加しないでください。pip が失敗した場合は、最後に表示されたエラー内容を確認し、該当するフェーズを再試行してください。Conda 環境をアクティブにしていても、すべての依存関係が正常にインストールされているとは限りません。

`requirements.txt` に指定された標準の OpenCV パッケージのみをインストールしてください。本プロジェクトの ArUco API はバージョン 4.7 で利用可能であり、それと並行して追加の OpenCV ホイールをインストールしないでください。CLIP は Ultralytics の Git リポジトリからインストールされるため、システム上で Git が利用可能である必要があります。YOLOE を初めて読み込む際には、モデルの重みがダウンロードされる場合があります。
:::

</div>
</section>
</div>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### ステップ 3. ロボットアーム SDK をインストールする

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

B601 DM と RS の構成は SDK の設定ファイルで選択します。B601-RS の場合は、`sdk/reBotArm_control_py/config/rebotarm.yaml` で次の内容を確認してください：

```yaml
hardware_yaml: rebotarm_rs.yaml
```

ビジュアルグラスピングプログラムはこの SDK 設定を読み取り、一致するアーム制御モードとグリッパーパラメータを自動的に選択します。

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

#### ステップ 4. 深度カメラ SDK をインストールする

このプロジェクトは Orbbec Gemini 2 や RealSense D435i / D405 などの RGB-D 深度カメラをサポートします。使用しているカメラに対応する SDK をインストールしてください。すでに環境からカメラドライバをインポートできる場合は、このステップをスキップできます。

<Tabs groupId="rebot-depth-camera" defaultValue="orbbec">
<TabItem value="orbbec" label="Orbbec Gemini 2">

Orbbec Gemini 2 深度カメラは Orbbec SDK v2 の Python ラッパーである `pyorbbecsdk` に依存します。まずは事前ビルド済みの Python パッケージをインストールすることを推奨します。

Linux / Ubuntu では、どのインストール方法を選ぶ場合でも、初めてカメラを使用する前に udev ルールを設定してください。これらのルールにより一般ユーザーが USB デバイスへアクセスできるようになり、システム全体にインストールされるため、各マシンで一度だけ設定すれば十分です。すでにルールが設定されている場合は、対応するコマンドをスキップしてください。

<Tabs defaultValue="pip">
<TabItem value="pip" label="オプション 1: pip からインストール（推奨）">

```bash
pip install pyorbbecsdk2
```

**udev ルールを設定する（Linux / Ubuntu）**

`pyorbbecsdk2` 2.1.0 以降には環境セットアップスクリプトが含まれています。conda 環境をアクティブに保ったまま、インストールされたパッケージからこのスクリプトを実行してください。sudo 権限を要求し、udev ルールのインストールとリロードを自動的に行います。

```bash
orbbec_sdk_dir="$(python -c 'import os, pyorbbecsdk; print(os.path.dirname(pyorbbecsdk.__file__))')"
python "$orbbec_sdk_dir/shared/setup_env.py"
```

`shared/setup_env.py` が見つからない場合は、`pip install --upgrade "pyorbbecsdk2>=2.1.0"` を実行してから、上記のコマンドを再度実行してください。詳細は [公式 Orbbec インストールガイド](https://orbbec.github.io/pyorbbecsdk/source/2_installation/install_the_package.html) を参照してください。

</TabItem>
<TabItem value="github" label="オプション 2: GitHub から取得">

`rebotarm` 環境をアクティブに保ったままにします。ビルド依存関係をインストールし、その後 Python 拡張をコンパイルします：

```bash
sudo apt-get update
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev python3-dev

cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
git checkout v2-main
python -m pip install pybind11
mkdir -p build
cd build
cmake .. -DCMAKE_BUILD_TYPE=Release \
  -DPython3_EXECUTABLE="$(python -c 'import sys; print(sys.executable)')" \
  -Dpybind11_DIR="$(python -m pybind11 --cmakedir)"
cmake --build . --parallel "$(nproc)"
cmake --install .
cd ..
```

中国本土のユーザーは、上記の GitHub クローンコマンドを次のものに置き換えることができます：

```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

ビルド後、`install/lib` に `pyorbbecsdk*.so` と Orbbec 共有ライブラリ（新しいバージョンでは `install/lib/pyorbbecsdk/` 配下）が含まれていることを確認してから、Python パッケージをインストールします。CMake と conda の設定については、[公式 Orbbec ソースビルドガイド](https://orbbec.github.io/pyorbbecsdk/source/2_installation/build_the_package.html) を参照してください。

```bash
pip install -e .
```

**udev ルールを設定する（Linux / Ubuntu）**

クローンした `pyorbbecsdk` リポジトリのルートから次を実行します。新しいバージョンでは環境セットアップスクリプトを使用し、古いバージョンでは `install_udev_rules.sh` を使用します：

```bash
if [ -f scripts/env_setup/setup_env.py ]; then
  python scripts/env_setup/setup_env.py
else
  sudo bash scripts/install_udev_rules.sh
  sudo udevadm control --reload-rules
  sudo udevadm trigger
fi
```

検証および実行ステップを続ける前に、プロジェクトルートに戻ってください：

```bash
cd ../..
```

</TabItem>
</Tabs>

両方のインストール方法が失敗する場合は、以下の公式 Orbbec ドキュメントを参照してください。

**インストールの検証**

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
```

</TabItem>
<TabItem value="realsense" label="RealSense D435i / D405">

RealSense カメラは `pyrealsense2` に依存します。通常は pip で直接インストールできます：

```bash
pip install pyrealsense2
python -c "import pyrealsense2; print('pyrealsense2 OK')"
```

システムに RealSense のフルツールチェーンや udev ルールが必要な場合は、[公式 librealsense ドキュメント](https://github.com/realsenseai/librealsense) に従ってください。

:::warning USB 3.x ポートを使用する
D405 / D435i は USB 3.0/3.2 ポート（通常は青色）に接続する必要があります。USB 2.0 ポートに接続した場合の典型的な症状は、**システムはデバイスを認識し `pipeline.start()` も成功するが、フレームが一切届かない**（`Frame didn't arrive within ...`）というものです。次のコマンドでネゴシエートされた速度を確認してください：

```bash
lsusb -t   # the camera line should show 5000M; 480M means it fell back to a USB 2.0 port — switch ports
```
:::

</TabItem>
</Tabs>

:::note 期待される結果
対応する検証コマンドが `pyorbbecsdk OK` または `pyrealsense2 OK` を出力し、`ModuleNotFoundError` が発生しません。
:::

**SDK リソース概要**

| リソース | リンク |
|----------|------|
| Gemini 2 製品ページ | https://www.orbbec.com.cn/index/Product/info.html?cate=38&id=51 |
| 開発リソース | https://www.orbbec.com.cn/index/Download2025/info.html?cate=121&id=1 |
| Orbbec SDK v2 | https://github.com/orbbec/OrbbecSDK_v2 |
| SDK v2 API ドキュメント | https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/ |
| pyorbbecsdk | https://github.com/orbbec/pyorbbecsdk |
| pyorbbecsdk ドキュメント | https://orbbec.github.io/pyorbbecsdk/index.html |
| ROS2 ラッパー | https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main |
| RealSense SDK | https://github.com/realsenseai/librealsense |

</div>
</section>
</div>

### 6. ディレクトリ構造

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
│   ├── pyorbbecsdk/              # Orbbec SDK Python wrapper (source installation)
│   └── reBotArm_control_py/      # reBot Arm SDK
├── requirements-pytorch.txt      # Compatible versions installed from the CPU / CUDA index
├── requirements.txt              # Project dependencies installed after PyTorch
└── environment.yml               # Base Conda environment
```

### 7. ハンドアイキャリブレーション

完全な把持パイプラインを実行する前に、まず Eye-in-Hand 方式のハンドアイキャリブレーションを完了させてください。

キャリブレーションスクリプトを実行する前に、CAN インターフェースを起動して正常に動作していることを確認します：

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details link show can0
```

実行前に、`config/default.yaml` 内の次の ArUco サイズパラメータが、実際に印刷したマーカーと一致していることを確認してください：

```yaml
calibration:
  aruco:
    marker_length_m: 0.1
```

設定を確認したら、自動キャリブレーションを実行します：

```bash
python scripts/collect_handeye_eih.py
```

自動モードでは、アームはあらかじめ設定された 50 個の姿勢を走査し、ArUco マーカーが安定して検出されたときにサンプルを記録します。途中で `c` または `q` で処理を中断した場合でも、スクリプトは収集済みサンプルからキャリブレーション結果の計算を試みます。

サンプル収集中にロボットアームを手動で動かしたい場合は、マニュアルモードを使用します：

```bash
python scripts/collect_handeye_eih.py --manual
```

マニュアルモードでは、アームは重力補償モードに入ります。エンドエフェクタを適切な視野角に動かし、`Enter` を押してキャプチャし、`c` または `q` を押して終了および結果の計算を行います。

:::tip
キャリブレーション後にロボットアームの把持精度が要件を満たさない場合は、`config/default.yaml` の `calibration.hand_eye_compensation_m` 配下にある `X`（前後）、`Y`（左右）、`Z`（上下）パラメータを設定して、位置補正を行うことができます。
:::

キャリブレーション結果は次の場所に保存されます：

```text
config/calibration/<camera_type>/hand_eye.npz
```

推奨サンプル数は少なくとも 5 個で、15 個以上を推奨します。

### 8. 実行とデバッグ

次の順序でシナリオを確認します。最初の 2 つはロボットアームに接続せず、カメラ、検出、および把持推定を確認するのに役立ちます。次の 2 つはロボットアームに接続して制御します。

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### 1. 物体検出のみを検証する

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

このステップでは次の点を確認できます：

- カメラが正しくオープンするか
- YOLO モデルが正しく読み込まれるか
- YOLO 物体検出が期待どおりに動作するか

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### 2. 把持推定のみを検証する

```bash
python scripts/ordinary_grasp_pipeline.py
```

把持推論の頻度やプレグラスプの退避距離を調整する必要がある場合は、次を編集します：

```yaml
grasp_pipeline:
  infer_every_live: 3
  grasp:
    depth_quantile: 0.5
    pregrasp_offset_m: 0.080
    insertion_depth_m: 0.015
    min_base_z_m: 0.00
```

このスクリプトはロボットアームに接続しません。次の点を検証するためだけに使用します：

- OBB または最小外接矩形が妥当かどうか
- 把持点がターゲット中心付近に位置しているかどうか
- 短軸方向が想定するグリッパの開閉方向と一致しているかどうか

主な操作キー：

- マウス左ボタン：選択したピクセルの深度を確認
- `G`: 現在の最良把持姿勢を出力
- `Q` / `Esc`: 終了

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### 3. メインの把持プログラムを実行する

```bash
python scripts/main.py
```

把持動作をスキップしつつターゲット姿勢を検証するには：

```bash
python scripts/main.py --dry-run
```

実際の把持を行う前に、`--dry-run` で姿勢とワークスペースを検証してください。このモードでは、現在のスクリプトはアームを初期化し、レディ姿勢へ移動し、終了時にクリーンアップと原点復帰を行います。ビジョンのみの検証には、アームに接続しない最初の 2 つのスクリプトを使用してください。

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
5. 短軸から把持姿勢を推定する。
6. `G` を押して現在のフレームをキャプチャし、把持を実行する。

実行時のキー操作：

- `G`: 現在の最良ターゲットを把持
- `R`: ライブプレビューを再開
- `Q` / `Esc`: 終了

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

#### 4. `scripts/set.py` — 把持および配置プログラム

機能：バナナを把持して箱の中に配置します。

```bash
python scripts/set.py
```

完了までのフロー：

1. カメラとアームの初期化、レディ位置への移動
2. リアルタイムカメラプレビュー + YOLO 物体検出およびインスタンスセグメンテーション
3. `G` を押してフレームを固定し、ハンドアイ変換を通じてアームのターゲット姿勢を計算
4. アームがバナナを把持して持ち上げる
5. アームがバナナを箱に配置し、初期姿勢に戻る
6. `Q` を押してシステムを終了すると、アームはゼロ位置に戻る

</div>
</section>
</div>

### 9. GraspNet 上級モジュール（オプション）

デフォルトの Python SDK / OBB ルートでは GraspNet は不要です。RGB-D 点群から 6D 把持姿勢推定が必要な場合にのみ、以下の手順に従ってください。

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### ステップ 1. GraspNet と CUDA オペレータをインストールする

`scripts/main.py` や `scripts/ordinary_grasp_pipeline.py` では GraspNet は不要です。GraspNet が必要な `scripts/graspnet_camera_demo.py` や `scripts/grasp.py` を実行したい場合にのみ設定してください。これらは GraspNet、CUDA 対応 PyTorch、PointNet2/knn CUDA オペレータ、および事前学習済みチェックポイントを必要とします。

GraspNet の `pointnet2` / `knn` 拡張には CUDA コンパイラが必要です。開始する前に、現在の環境で `nvcc` が利用可能であることを確認し、その CUDA バージョンを PyTorch のビルドに使用されたバージョンと比較してください：

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

PyTorch は基本インストールのステップ 2 で別途インストールされています。GraspNet には NVIDIA GPU と動作する CUDA サポートが必要です。CPU オプションに従った場合は、このセクションをスキップしてください。コンパイラを設定する前に、以下の確認を完了してください。

**ステップ 1: GPU を確認する**

```bash
nvidia-smi
```

ドライバが NVIDIA GPU を認識している必要があります。CUDA Toolkit をインストールするだけでは、Intel / AMD の統合グラフィックスで本プロジェクトの CUDA オペレータを実行することはできません。

**ステップ 2: PyTorch の CUDA サポートを確認する**

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.is_available())"
```

`torch.cuda.is_available()` が `True` を出力したら、次のステップに進みます。PyTorch が存在しない場合、`torch.version.cuda` が `None` の場合、または CUDA が利用できない場合は、基本インストールのステップ 2 に戻り、NVIDIA のインストールと検証を完了してください。CPU ビルドと CUDA ビルドを切り替える際は、再インストール前に古いビルドを削除してください。

**ステップ 3: PyTorch に一致する CUDA コンパイラをインストールする**

`pointnet2` / `knn` はローカル CUDA 拡張です。ビルド時に `nvcc --version` が報告する CUDA バージョンは `torch.version.cuda` と一致している必要があります。一致しない場合、`The detected CUDA version (...) mismatches the version that was used to compile PyTorch (...)` というエラーでビルドが失敗します。まず両方のバージョンを確認してください：

```bash
nvcc --version
python -c "import torch; print(torch.version.cuda)"
```

例として、`torch.version.cuda` が `12.8` と表示されている場合、対応するコンパイラを conda 環境内にインストールします：

```bash
conda install -c nvidia cuda-nvcc=12.8 cuda-cudart-dev=12.8

which nvcc       # should point to $CONDA_PREFIX/bin/nvcc, not /usr/bin/nvcc
nvcc --version   # should match torch.version.cuda
```

`cuda-nvcc` はコンパイラを提供し、`cuda-cudart-dev` は `targets/x86_64-linux/include` 配下に CUDA ヘッダを提供します。どちらも必須です。conda 環境がアクティブになると、`$CONDA_PREFIX/bin` がシステムパスより優先されるため、conda の `nvcc` が自動的に古いシステム側（たとえば Ubuntu リポジトリの CUDA 11.5）を隠蔽します — システム CUDA をアンインストールする必要はありません。

:::warning
古いシステムの `nvcc` に合わせるために PyTorch をダウングレードしないでください。古い CUDA リリースは GPU アーキテクチャをサポートしていない可能性があります（CUDA 11.5 は最大 sm_86 までサポート；RTX 40 シリーズには CUDA 11.8+、RTX 50 シリーズには CUDA 12.8+ が必要）、また古い PyTorch ビルドは、最近の ultralytics リリースなど本プロジェクトの他の依存関係と互換性がない場合があります。
:::

**ステップ 4: 検証する**

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.is_available())"
nvcc --version
```

両方の CUDA バージョンが一致し、`torch.cuda.is_available()` が `True` を出力したら、PyTorch のセットアップは完了であり、CUDA オペレータのビルドを続行できます。

```bash
cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline

# Install PyTorch for your CUDA version first, then install GraspNet runtime dependencies
pip install open3d tensorboard Pillow tqdm

# Configure CUDA build paths before building the local operators.
# Note: use the conda cuda-toolkit targets directory for headers/libraries;
# do not mix in the pip nvidia/cu13 directory (a version mismatch with conda nvcc causes build errors).
export CUDA_HOME=$CONDA_PREFIX
export TORCH_CUDA_ARCH_LIST="$(python -c 'import torch; major, minor = torch.cuda.get_device_capability(); print(f"{major}.{minor}")')"
export CPATH=$CONDA_PREFIX/targets/x86_64-linux/include:$CPATH
export CPLUS_INCLUDE_PATH=$CONDA_PREFIX/targets/x86_64-linux/include:$CPLUS_INCLUDE_PATH
export LIBRARY_PATH=$CONDA_PREFIX/targets/x86_64-linux/lib:$CONDA_PREFIX/lib:$LIBRARY_PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/targets/x86_64-linux/lib:$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

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
ビルド時に `fatal error: cusparse.h: No such file or directory` が発生した場合は、`find $CONDA_PREFIX -name cusparse.h` を実行し、`cusparse.h` を含むディレクトリを `CPATH` / `CPLUS_INCLUDE_PATH` に追加してください（conda の `cuda-toolkit` を使用している場合、通常は `$CONDA_PREFIX/targets/x86_64-linux/include` です）。`'__NV_IS_DEVICE' was not declared in this scope` のようなヘッダ関連のエラーが出る場合、多くは pip の `nvidia/cu13` ヘッダと conda の `nvcc` バージョンを混在させていることが原因です — 上記の conda の `targets` パスに切り替えてから再ビルドしてください。
:::

:::tip
さらに、古い GraspNet API 依存パッケージは、非推奨となった `sklearn` パッケージ名をまだ使用している場合があります。`sed` コマンドは、インストール中に `The 'sklearn' PyPI package is deprecated` が発生するのを避けるために、現在推奨されている `scikit-learn` パッケージ名に置き換えます。古い GraspNet API 依存パッケージも同時にアップグレードしない限り、`transforms3d==0.3.1` が `np.float` のような古い NumPy エイリアスをまだ使用しているため、その `numpy==1.23.4` 制約は維持してください。
:::

**学習済みモデルの設定**

graspnet-baseline 公式リポジトリから公式の GraspNet 学習済み重みをダウンロードし（[Google](https://drive.google.com/file/d/1hd0G8LN6tRpi4742XOTEisbTXNZ-1jmk/view)、[Baidu](https://pan.baidu.com/s/1Eme60l39tTZrilF0I86R5A)）、`checkpoint-rs.tar` を次の場所に配置します：

```bash
mkdir -p ~/rebot_grasp/sdk/graspnet-baseline/checkpoints

sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

次に `config/default.yaml` を確認します：

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

`checkpoint` フィールドは 3 つの形式をサポートします：ファイル名の場合は `sdk/graspnet-baseline/checkpoints/` 配下として解決されます；相対パスの場合はプロジェクトルートからのパスとして解決されます；絶対パスの場合はそのまま使用されます。

</div>
</section>
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### ステップ 2. GraspNet カメラ推定デモを実行する

```bash
python scripts/graspnet_camera_demo.py
```

このスクリプトは、ロボットアームを接続せずに RGB-D カメラのみで GraspNet の 6D 把持姿勢推定を実行します。ライブカメラプレビューを維持し、YOLO のバウンディングボックスを使用して対象領域を選択し、対象の bbox によって GraspNet のフルシーン候補のうち実行可能なものをフィルタリングします。

主な操作：

- `G` / `Space`: 現在のフレームに対して GraspNet 推論を実行
- `R`: ライブプレビューを再開
- `Q` / `Esc`: 終了

推論後、Open3D によって点群と把持候補を可視化できます。

</div>
</section>
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### ステップ 3. GraspNet ロボット把持プログラムを実行する

```bash
python scripts/grasp.py
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

このスクリプトは、GraspNet の推定結果をロボットアームの実行フローに接続します。YOLO がターゲットを選択し、GraspNet が 6D 把持姿勢を出力し、ハンドアイキャリブレーションがそれをロボットベース座標系に変換し、スクリプトは IK による到達可能性を確認してから、プレグラスプ、グラスプ、リトリートのモーションシーケンスを実行します。

`python scripts/grasp.py` を実行すると、GraspNet によるロボット把持のフルフローが開始され、ロボットアームが制御されます。`--dry-run` はターゲット姿勢と候補フィルタリング結果を出力し、把持動作をスキップします；現在のスクリプトはそれでもアームを初期化し、レディポーズへ移動し、終了時にクリーンアップと原点復帰を行います。`--target-class "light blue coffee cup"` は YOLO のターゲットクラスを指定し、そのクラスに対する GraspNet 候補のみをフィルタリングして把持します。

</div>
</section>
</div>

### 10. FAQ

<h4>1. <code>ModuleNotFoundError: No module named 'motorbridge'</code></h4>

これは、現在の Python 環境にロボットアーム SDK の依存関係がインストールされていないことを意味します。`conda env update` は base 環境のみを更新します；プロジェクトの依存関係は別途インストールしてください。プロジェクトルートから次を実行します：

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
# Complete the PyTorch installation in basic installation Step 2 first.
python -m pip install -r requirements.txt -c requirements-pytorch.txt
cd sdk/reBotArm_control_py && python -m pip install -e .
```

<h4>2. <code>G</code> を押しても把持が実行されない</h4>

よくある原因：

- `hand_eye.npz` が存在しない
- ハンドアイキャリブレーションモードが `eye_in_hand` になっていない
- ターゲット姿勢が IK によって到達可能ではない

次を実行することを推奨します：

```bash
python scripts/main.py --dry-run
```

<h4>3. 把持深度が安定しない</h4>

次の調整を試すことができます：

- `grasp_pipeline.grasp.depth_quantile`
- ワークスペースに対するカメラの設置高さ
- ターゲット表面の反射特性

<h4>4. GraspNet が <code>pointnet2</code> から <code>pointnet2_utils</code> をインポートできないと報告する</h4>

これは通常、`sdk/graspnet-baseline/pointnet2` 配下のローカル CUDA 拡張がアクティブな conda 環境でビルドされていないか、Python が別の `pointnet2` パッケージを解決していることを意味します。プロジェクト環境がアクティブであることを確認し、その同じ環境で `pointnet2` と `knn` の両方を再ビルドしてください：

```bash
conda activate rebotarm
cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

次を確認します（`pointnet2_utils` / `knn_modules` はソースディレクトリからトップレベルモジュールとしてインポートされます。これは `models/` がそれらをインポートする方法と同じであり、把持スクリプトはソースディレクトリを自動的に `sys.path` に追加します）：

```bash
cd sdk/graspnet-baseline
python -c "import sys; sys.path[:0]=['pointnet2','knn']; import pointnet2_utils, knn_modules; print('import works')"
```

<h4>5. GraspNet 実行時に新しい GPU で CUDA アーキテクチャ互換性の問題が発生する</h4>

`no kernel image is available for execution on the device` が表示されたり、PyTorch が現在の GPU CUDA ケイパビリティがサポートされていないと報告する場合、インストールされている PyTorch ホイールにはその GPU アーキテクチャ向けの CUDA カーネルが含まれていない可能性があります。現在の CUDA/GPU アーキテクチャをサポートする PyTorch ビルドをインストールし、その後 GraspNet のローカル CUDA 拡張を再ビルドしてください。

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.get_device_name(0))"

cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

ビルドアーキテクチャを手動で指定する必要がある場合は、再ビルド前に `TORCH_CUDA_ARCH_LIST` を設定してください。GPU アーキテクチャと PyTorch/CUDA バージョンに応じて値を選択します。

<h4>6. GraspNet 推論で <code>RuntimeError: CPU not supported</code> が報告される</h4>

`pointnet2` のサンプリングオペレータは CUDA テンソルのみをサポートします。CUDA が利用可能であること、GraspNet ネットワークと入力点群が GPU 上にあること、そして `pointnet2` / `knn` がアクティブな環境の PyTorch バージョンに対してビルドされていることを確認してください。

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

出力が `False` の場合は、まず CUDA / PyTorch のインストールを修正してください。`True` だがエラーが残る場合は、`pointnet2` と `knn` を再ビルドしてください。

</TabItem>
<TabItem value="ros2-yoloe" label="方法 2 · ROS 2 / YOLOE">

## ビジュアル把持 方法 2

### 1. プロジェクト概要

このソリューションでは、reBot Arm B601-RS 上で **ROS2** と **YOLO** を使用して物体検出、把持、配置を行います。システムは、アーム、深度カメラ、把持ノードを別々のターミナルで起動します。

深度カメラは現在、**Orbbec Gemini 2** と **RealSense D405 / D435i** をサポートしています。このワークフローでは、ハンドアイキャリブレーション用のキャリブレーションボードは不要です。取り付けや 3D プリント部品の公差により、各アームにはわずかな把持オフセットが生じる場合があります。

### 2. 環境構築

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### ステップ 1. ロボットアーム ROS2 ワークスペースをインストールする

まず、[reBot Arm B601-RS ROS2 Integration](https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_ros2_integration/) に従って `rebotarm_ros2` ワークスペースのインストールとビルドを完了します。

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### ステップ 2. カメラをインストールする

以下のカメラセットアップのいずれかを選択し、対応するセクションを展開してください。

<details className="content-details">
<summary>クリックして Gemini 2 セットアップを展開</summary>

Orbbec ROS2 SDK をワークスペースにクローンし、`v2-main` ブランチに切り替えます：

```bash
cd ~/rebotarm_ros2/src
git clone https://github.com/xiehuangbao888/OrbbecSDK_ROS2.git
cd OrbbecSDK_ROS2
git checkout v2-main
```

ワークスペースをビルドします：

```bash
cd ~/rebotarm_ros2
colcon build --event-handlers console_direct+ --cmake-args -DCMAKE_BUILD_TYPE=Release
```

udev ルールをインストールします：

```bash
cd ~/rebotarm_ros2/src/OrbbecSDK_ROS2/orbbec_camera/scripts
sudo bash install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

</details>

<details className="content-details">
<summary>クリックして D405 / D435i セットアップ手順を展開</summary>

1. RealSense SDK をクローンし、`v2.58.1` に切り替えます：

```bash
cd ~
git clone https://github.com/realsenseai/librealsense.git
cd librealsense
git checkout v2.58.1
```

2. udev ルールをインストールします：

```bash
sudo apt install -y v4l-utils
cd ~/librealsense
./scripts/setup_udev_rules.sh
```

3. SDK をビルドしてインストールします：

:::tip
プロキシが有効になっている場合は、再度設定する前に無効にしてください：

```bash
unset http_proxy https_proxy HTTP_PROXY HTTPS_PROXY all_proxy ALL_PROXY
```
:::

```bash
cd ~/librealsense
mkdir -p build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
make -j$(nproc)
sudo make install
sudo ldconfig
```

4. RealSense ROS2 パッケージをビルドします：

```bash
cd ~/rebotarm_ros2/src
git clone https://github.com/xiehuangbao888/realsense-ros.git
cd ~/rebotarm_ros2
colcon build --cmake-args -DUSE_LIFECYCLE_NODE=OFF
```

</details>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### ステップ 3. Visual grasping パッケージをインポートする

```bash
cd ~/rebotarm_ros2/src/
git clone https://github.com/xiehuangbao888/rebot_visual_grasp.git
cd ~/rebotarm_ros2
colcon build --symlink-install
```

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

#### ステップ 4. YOLO / YOLOE 環境をインストールする

`grasp_yolo` は Python から Ultralytics YOLOE を呼び出します。専用の conda 環境を使用し、システムの `/usr/bin/python3` は使用しないでください。

**環境を作成する**

```bash
conda create -n yolo python=3.10
conda activate yolo

pip install -U ultralytics
pip install "numpy==1.26.4" transforms3d

# YOLOE open-vocabulary classes require the Ultralytics CLIP package, not the PyPI clip package
pip install git+https://github.com/ultralytics/CLIP.git
```

NVIDIA GPU を搭載している場合は、まず CUDA が利用可能か確認します。出力が `False` の場合は、対応する CUDA / PyTorch ビルドをインストールしてください。CPU だけで続行することもできますが、検出フレームレートは低下します：

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

YOLOE を検証します：

```bash
python -c "from ultralytics import YOLOE; print('YOLOE OK')"
```

**`~/rebot_visual_model` にウェイトをダウンロードする**

```bash
mkdir -p ~/rebot_visual_model && cd ~/rebot_visual_model

# MobileCLIP (required by YOLOE set_classes, about 242MB)
wget -c https://github.com/ultralytics/assets/releases/download/v8.4.0/mobileclip2_b.ts

# YOLOE segmentation weights can also download on first run; placing them here is recommended
wget -c https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26s-seg.pt
```

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">5</span>
<div className="rebot-step-content">

#### ステップ 5. ワークスペースをビルドする

```bash
cd ~/rebotarm_ros2
source /opt/ros/humble/setup.bash
colcon build --symlink-install
source ~/rebotarm_ros2/install/setup.bash
```

これで visual grasping 環境の準備が整いました。新しいターミナルを開くたびに、visual grasping コマンドを実行する前に次を source してください：

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
```

</div>
</section>
</div>

### 3. プロジェクトを実行する

開始する前に、アームの電源が入っていること、CAN インターフェースが `can0` であること、Gemini 2、D405、または D435i が USB 接続されていることを確認してください。その後、CAN を起動します：

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

スタックを別々のターミナルで起動すると、把持ロジックを追いやすくなります。Gemini 2、D405、D435i では起動コマンドが異なるため、自分のカメラに合ったものを選択してください。ワンクリック起動にしたい場合は、独自の起動スクリプトを作成できます。

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">A</span>
<div className="rebot-step-content">

#### ターミナル A — アーム + RViz を起動する

<details className="content-details">
<summary>クリックして展開：Gemini 2</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp bringup_with_camera.launch.py model:=rs channel:=can0 use_rviz:=true
```

</details>

<details className="content-details">
<summary>クリックして展開：D405</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp bringup_with_d405.launch.py model:=rs channel:=can0 use_rviz:=true
```

</details>

<details className="content-details">
<summary>クリックして展開：D435i</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp bringup_with_d435i.launch.py model:=rs channel:=can0 use_rviz:=true
```

</details>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">B</span>
<div className="rebot-step-content">

#### ターミナル B — カメラを起動する

<details className="content-details">
<summary>クリックして展開：Gemini 2</summary>

```bash
source /opt/ros/humble/setup.bash

ros2 launch orbbec_camera gemini2.launch.py
```

</details>

<details className="content-details">
<summary>クリックして展開：D405</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch realsense2_camera rs_launch.py \
  align_depth.enable:=true \
  depth_module.depth_profile:=640x360x30 \
  depth_module.color_profile:=640x360x30
```

</details>

<details className="content-details">
<summary>クリックして展開：D435i</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch realsense2_camera rs_launch.py \
  align_depth.enable:=true \
  depth_module.depth_profile:=640x360x30 \
  depth_module.color_profile:=640x360x30
```

</details>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">C</span>
<div className="rebot-step-content">

#### ターミナル C — 観測姿勢への移動 + YOLO 検出

まず `conda activate yolo` で conda 環境を有効化します。環境名が `yolo` でない場合は、実際の conda 環境名に置き換えてください。

<details className="content-details">
<summary>クリックして展開：Gemini 2</summary>

作成した YOLO 環境の Python パスに変更します。

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

~/miniconda3/envs/yolov8/bin/python -m rebot_visual_grasp.grasp_yolo --ros-args \
  -p yolo_model:=~/rebot_visual_model/yoloe-26s-seg.pt \
  -p target_class:="cube" \
  -p place_class:="box" \
  -p yolo_device:=gpu \
  -p grasp_z_offset_m:=0.01 \
  -p place_z_offset_m:=0.1 \
  -p grasp_x_offset_m:=-0.02 \
  -p grasp_y_offset_m:=0.002 \
  -p move_to_observation_on_start:=true \
  -p auto_publish_on_detect:=true
```

</details>

<details className="content-details">
<summary>クリックして展開：D405</summary>

作成した YOLO 環境の Python パスに変更します。

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

~/miniconda3/envs/yolov8/bin/python -m rebot_visual_grasp.grasp_yolo --ros-args \
-p yolo_model:=/home/ubuntu/rebot_visual_model/yoloe-26s-seg.pt \
-p color_topic:=/camera/camera/color/image_raw \
-p depth_topic:=/camera/camera/aligned_depth_to_color/image_raw \
-p color_info_topic:=/camera/camera/color/camera_info \
-p optical_frame:=camera_color_optical_frame \
-p target_class:=cube \
-p place_class:=box \
-p yolo_device:=gpu \
-p grasp_z_offset_m:=0.01 \
-p grasp_y_offset_m:=-0.005 \
-p place_z_offset_m:=0.1 \
-p grasp_x_offset_m:=-0.01 \
-p move_to_observation_on_start:=true \
-p auto_publish_on_detect:=true
```

</details>

<details className="content-details">
<summary>クリックして展開：D435i</summary>

作成した YOLO 環境の Python パスに変更します。

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

~/miniconda3/envs/yolov8/bin/python -m rebot_visual_grasp.grasp_yolo --ros-args \
  -p yolo_model:=~/rebot_visual_model/yoloe-26s-seg.pt \
  -p color_topic:=/camera/camera/color/image_raw \
  -p depth_topic:=/camera/camera/aligned_depth_to_color/image_raw \
  -p color_info_topic:=/camera/camera/color/camera_info \
  -p optical_frame:=camera_color_optical_frame \
  -p target_class:="cube" \
  -p place_class:="box" \
  -p yolo_device:=gpu \
  -p grasp_z_offset_m:=0.01 \
  -p place_z_offset_m:=0.1 \
  -p grasp_y_offset_m:=0.01 \
  -p grasp_x_offset_m:=-0.04 \
  -p move_to_observation_on_start:=true \
  -p auto_publish_on_detect:=true
```

</details>

| パラメータ | 説明 |
|-----------|-------------|
| `yolo_device:=gpu` | GPU を使用します。離散 GPU がない場合は `cpu` を設定してください。GPU 0 を使用するには `yolo_device:=0` も使用できます |
| `target_class` | 把持対象物体の YOLOE テキストクラス名。実際の物体に合わせて変更します。デフォルトの YOLO クラスをサポートします |
| `place_class` | 置き場所ターゲットの YOLOE テキストクラス名。実際の物体に合わせて変更します。デフォルトの YOLO クラスをサポートします |
| `grasp_x_offset_m` | `base_link` における前後オフセット。負の値は姿勢を後方に引き寄せます |
| `grasp_y_offset_m` | 左右の把持オフセット。`0.01` は左に 1 cm シフトします。負の値は右にシフトします |
| `grasp_z_offset_m` | 把持高さの微調整。デフォルトは標準グリッパーより長いフレキシブルグリッパー用です |
| `place_z_offset_m` | 物体を配置する際に使用される追加の持ち上げ量で、配置ポイントの上方どの高さで物体を離すかを制御します |

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">D</span>
<div className="rebot-step-content">

#### ターミナル D — ワンクリックで把持して配置する

デフォルトのトリガー遅延は 3 秒です。

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp grasp_go.launch.py
```

遅延時間を変更するには、パラメータを追加します。例えば、5 秒後にトリガーする場合：

```bash
ros2 launch rebot_visual_grasp grasp_go.launch.py trigger_delay_s:=5.0
```

</div>
</section>
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">E</span>
<div className="rebot-step-content">

#### ターミナル E — ホームに戻る（オプション）

新しい `rebotarm` ビルドでは、ターミナルで `Ctrl + C` を押すとアームが自動的にホームに戻ります。手動でホームに戻すには：

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger {}
```

</div>
</section>
</div>

</TabItem>
</GraspingTabs>

## お問い合わせ

- 技術サポート: [Submit an Issue](https://github.com/Seeed-Projects/reBot-DevArm-Grasp/issues)
- プロジェクトページ: [GitHub](https://github.com/Seeed-Projects/reBot-DevArm-Grasp)
- フォーラム: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## 参考文献

- [reBot Arm B601-RS クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/)
- [reBot Arm B601-RS ROS2 統合](https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_ros2_integration/)
- [rebot_visual_grasp](https://github.com/xiehuangbao888/rebot_visual_grasp)
- [OrbbecSDK_ROS2](https://github.com/xiehuangbao888/OrbbecSDK_ROS2)
- [Orbbec Gemini 2 製品ページ](https://www.orbbec.com/products/stereo-vision-camera/gemini-2/)
- [Orbbec 開発リソース](https://www.orbbec.com.cn/index/Download2025/info.html?cate=121&id=1)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [Orbbec SDK v2 API ガイド](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/)
- [pyorbbecsdk リポジトリ](https://github.com/orbbec/pyorbbecsdk)
- [pyorbbecsdk ドキュメント](https://orbbec.github.io/pyorbbecsdk/index.html)
- [Orbbec ROS2 Wrapper](https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main)
- [realsense-ros](https://github.com/xiehuangbao888/realsense-ros)
- [RealSense SDK](https://github.com/realsenseai/librealsense)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Graspnet(Anygrasp) ドキュメント](https://graspnet.net/)

</div>
