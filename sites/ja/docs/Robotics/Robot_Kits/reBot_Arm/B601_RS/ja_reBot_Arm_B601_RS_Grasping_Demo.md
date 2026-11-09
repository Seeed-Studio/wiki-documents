---
description: このチュートリアルでは、reBot Arm B601-RS 向けに、YOLO/OBB パイプラインと ROS2 ベースの把持ワークフローという 2 つのビジュアルグラスピング実装を扱います。
title: B601-RS のビジュアルグラスピング
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

## 2 つの把持方式はどう違うのか？

このページでは、実装の異なる 2 種類のビジュアルグラスピングデモを扱います。フレームワーク、キャリブレーション要件、起動フローを比較し、下からチュートリアルを選択してください。

<div className={styles.comparison}>
  <section className={styles.methodCard} aria-label="Method 1: Python SDK">
    <span className={styles.methodNumber}>Method 01</span>
    <h3>Python SDK + YOLO / OBB</h3>
    <p>YOLO、RGB-D 深度カメラ、および Python SDK を使用して、環境構築とカメラ統合からハンドアイキャリブレーション、把持デバッグまでの一連のワークフローを実行します。</p>
    <dl>
      <div><dt>把持ロジック</dt><dd>検出ボックスまたは OBB の最小外接矩形から把持姿勢を推定し、短軸をグリッパの開閉方向として利用することで、複雑な 3D 点群処理を回避します。必要に応じて GraspNet を用いた 6D 姿勢推定も利用できます。</dd></div>
      <div><dt>ハンドアイキャリブレーション</dt><dd>最初のフル把持実行前に、ArUco マーカーを用いて Eye-in-Hand キャリブレーションを完了させます。</dd></div>
      <div><dt>起動方法</dt><dd>Python スクリプトを実行して、検出、姿勢推定、ロボット把持を段階的に検証します。</dd></div>
    </dl>
  </section>
  <section className={styles.methodCard} aria-label="Method 2: ROS 2">
    <span className={styles.methodNumber}>Method 02</span>
    <h3>ROS 2 + YOLOE</h3>
    <p>ROS 2 と YOLOE を使用し、アーム、Gemini 2 / D405 / D435i カメラ、および把持ノードを別々のターミナルで起動してピッキングとプレースを行います。</p>
    <dl>
      <div><dt>把持ロジック</dt><dd>ビジュアルグラスピングノードが物体の検出・把持・配置を行います。テキストのクラス名で把持対象と配置先を指定します。</dd></div>
      <div><dt>ハンドアイキャリブレーション</dt><dd>キャリブレーションボードは不要で、オフセットパラメータを調整して、マウント誤差や 3D プリント部品の公差によるわずかなずれを補正します。</dd></div>
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

### 1. プロジェクトの特徴

1. **YOLO + OBB からの直接把持姿勢推定**
   このパイプラインでは、検出ボックスまたは OBB の最小外接矩形を直接利用し、短軸をグリッパの開閉方向として扱うことで、複雑な 3D 点群処理を回避します。
2. **GraspNet-Baseline による 6D 把持姿勢推定（オプション）**
   本プロジェクトは、RGB-D 点群からの 6D 把持姿勢推定のために GraspNet-Baseline（`graspnet/graspnet-baseline`）もサポートしており、YOLO のバウンディングボックスを用いてターゲット候補を選択し、より複雑な把持実験を行うことができます。
3. **ロボットアームおよびグリッパドライバの統合**
   メインの把持スクリプトは、`reBotArm_control_py` のロボットアームおよびエンドポーズコントローラに基づいており、グリッパの開閉、力制御把持、TCP 姿勢読み取りのための軽量な把持ヘルパーを備えています。
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

#### ステップ 0. まずロボットアームの基本準備を完了する

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
ターミナルプロンプトに `rebotarm` と表示され、環境がアクティブになっていることがわかります。PyTorch はまだインストールされていないので、続けて次の 2 フェーズを実行してください。
:::

別の環境名を使用する場合は、上記 2 つのコマンド内の `rebotarm` を置き換えてください。既存の環境を使う場合は、その環境を有効化してから `conda env update -n rebotarm -f environment.yml` を実行し、ベース依存関係を更新します。このコマンドは既存の pip パッケージを削除しません。

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
PyTorch のパスがアクティブな Conda 環境内を指していることを確認します。`CUDA available: False` と表示されていれば正常です。
:::

`config/default.yaml` で次の設定を維持します：

```yaml
yolo:
  device: "cpu"
```

:::tip サポートされるワークフロー
基本的な YOLO / OBB ワークフローは CPU 上で実行できます。推論速度はモデルと使用しているコンピュータに依存します。このプロジェクトの GraspNet CUDA オペレータには NVIDIA GPU が必要なため、以下の GraspNet 高度モジュールはスキップしてください。
:::

</TabItem>
<TabItem value="nvidia" label="NVIDIA GPU (CUDA)">

CUDA 対応版 PyTorch をインストールする前に、ドライバが GPU を認識していることを確認します。以下の例では CUDA 12.8 ビルドを使用しており、GPU アーキテクチャとドライバの両方がこのバージョンをサポートしている必要があります：

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


CUDA ビルドを選択する際は、[公式の PyTorch バージョン一覧](https://pytorch.org/get-started/previous-versions/)を使用して、GPU・ドライバ・Python バージョンをサポートするビルドを選んでください。GPU シリーズ名や `nvidia-smi` に表示される CUDA の番号だけで選ばないでください。
:::

CUDA が利用できない場合は、ドライバ、GPU アーキテクチャ、選択したホイールを確認するか、CPU タブに従って基本ワークフローを検証してください。

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
`pip check` が `No broken requirements found.` と表示し、検証コマンドがインポートエラーなしで `Vision dependencies OK` と出力します。ロボットアームおよびカメラ SDK をインストールする前に、これらのチェックを完了してください。
:::

:::tip インストール失敗時の対処
`-c requirements-pytorch.txt` は互換性のある PyTorch パッケージバージョンを制約します。この引数は必ず保持し、`--upgrade` を追加しないでください。pip が失敗した場合は、最後に表示されたエラー内容を確認し、該当フェーズを再試行してください。Conda 環境をアクティブにしていても、すべての依存関係が正常にインストールされているとは限りません。

インストールする OpenCV パッケージは `requirements.txt` に指定された標準版のみとしてください。本プロジェクトの ArUco API はバージョン 4.7 で利用可能であり、それと並行して追加の OpenCV ホイールをインストールしないでください。CLIP は Ultralytics の Git リポジトリからインストールされるため、システム上で Git が利用可能である必要があります。YOLOE を初めて読み込む際には、モデルの重みがダウンロードされる場合があります。
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

pip install -e . を実行した際に「Multiple top-level packages discovered in a flat-layout」と表示される場合は、reBotArm_control_py の pyproject.toml に明示的なパッケージ検出設定を追加し、その後もう一度 pip install -e . を実行してください：

```bash
[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

B601 DM および RS の構成は、SDK の設定ファイルを通じて選択します。B601-RS の場合は、`sdk/reBotArm_control_py/config/rebotarm.yaml` で次の内容を確認してください：

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

Orbbec Gemini 2 深度カメラは、Orbbec SDK v2 用の Python ラッパーである `pyorbbecsdk` に依存します。まずは事前ビルド済みの Python パッケージをインストールする方法を推奨します。

Linux / Ubuntu では、どのインストール方法を選ぶ場合でも、初めてカメラを使用する前に udev ルールを設定してください。これにより一般ユーザーが USB デバイスへアクセスできるようになり、システム全体にインストールされるため、各マシンで一度だけ設定すれば十分です。すでにルールが設定されている場合は、該当コマンドをスキップしてください。

<Tabs defaultValue="pip">
<TabItem value="pip" label="オプション 1: pip からインストール（推奨）">

```bash
pip install pyorbbecsdk2
```

**udev ルールを設定する（Linux / Ubuntu）**

`pyorbbecsdk2` 2.1.0 以降には環境セットアップスクリプトが含まれています。conda 環境をアクティブに保ったまま、インストールされたパッケージ内からこのスクリプトを実行してください。sudo 権限を要求し、udev ルールのインストールと再読み込みを自動的に行います。

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

クローンした `pyorbbecsdk` リポジトリのルートから、次のコマンドを実行します。新しいバージョンでは環境セットアップスクリプトを使用し、古いバージョンでは `install_udev_rules.sh` を使用します：

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
対応する検証コマンドが `pyorbbecsdk OK` または `pyrealsense2 OK` を出力し、`ModuleNotFoundError` が発生しないことを確認します。
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

### 6. ディレクトリ構成

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

自動モードでは、アームはあらかじめ設定された 50 個の姿勢を走査し、ArUco マーカーが安定して検出されたタイミングでサンプルを記録します。途中で `c` または `q` で処理を中断した場合でも、スクリプトは収集済みサンプルからキャリブレーション結果の計算を試みます。

サンプリング中にロボットアームを手動で動かしたい場合は、マニュアルモードを使用します：

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

#### 1. 物体検出のみを検証

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
- YOLO による物体検出が期待どおりに動作するか

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### 2. 把持推定のみを検証

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

このスクリプトはロボットアームに接続しません。次の点を検証するためだけに使用します：

- OBB または最小外接矩形が妥当かどうか
- 把持点がターゲット中心付近に位置しているかどうか
- 短軸方向が想定するグリッパの開閉方向と一致しているかどうか

主な操作キー：

- マウス左ボタン：選択したピクセル位置の深度を確認
- `G`: 現在の最良把持姿勢を出力
- `Q` / `Esc`: 終了

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### 3. メイン把持プログラムを実行

```bash
python scripts/main.py
```

把持動作をスキップしつつターゲット姿勢を検証するには：

```bash
python scripts/main.py --dry-run
```

実際の把持を行う前に、`--dry-run` を使って姿勢とワークスペースを検証してください。このモードでは、スクリプトはアームを初期化し、レディ姿勢へ移動し、終了時にクリーンアップと原点復帰を行います。ビジョンのみの検証には、アームに接続しない最初の 2 つのスクリプトを使用してください。

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
5. アームがバナナを箱の中に配置し、初期姿勢に戻る
6. `Q` を押してシステムを終了すると、アームはゼロ位置に戻る

</div>
</section>
</div>

### 9. GraspNet 上級モジュール（オプション）

デフォルトの Python SDK / OBB ルートでは GraspNet は不要です。RGB-D 点群から 6D 把持姿勢推定が必要な場合にのみ、以下の手順を実行してください。

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### ステップ 1. GraspNet と CUDA オペレータをインストール

`scripts/main.py` や `scripts/ordinary_grasp_pipeline.py` を実行するだけなら GraspNet は不要です。GraspNet、CUDA 対応 PyTorch、PointNet2/knn CUDA オペレータ、および学習済みチェックポイントが必要となる `scripts/graspnet_camera_demo.py` または `scripts/grasp.py` を実行したい場合にのみ設定してください。

GraspNet の `pointnet2` / `knn` 拡張には CUDA コンパイラが必要です。開始前に、現在の環境で `nvcc` が利用可能であることを確認し、その CUDA バージョンを PyTorch のビルドに使用されたバージョンと比較してください：

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

PyTorch は基本インストールのステップ 2 で別途インストールします。GraspNet には NVIDIA GPU と動作する CUDA サポートが必要です。CPU オプションに従った場合は、このセクションをスキップしてください。コンパイラを設定する前に、以下の確認を完了してください。

**ステップ 1: GPU を確認**

```bash
nvidia-smi
```

ドライバが NVIDIA GPU を認識している必要があります。CUDA Toolkit をインストールするだけでは、Intel / AMD の統合グラフィックスで本プロジェクトの CUDA オペレータを実行することはできません。

**ステップ 2: PyTorch の CUDA サポートを確認**

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.is_available())"
```

`torch.cuda.is_available()` が `True` と表示される場合は、次のステップに進みます。PyTorch が存在しない、`torch.version.cuda` が `None` である、または CUDA が利用できない場合は、基本インストールのステップ 2 に戻り、NVIDIA のインストールと検証を完了してください。CPU ビルドと CUDA ビルドを切り替える際は、再インストール前に古いビルドを削除してください。

**ステップ 3: PyTorch に一致する CUDA コンパイラをインストール**

`pointnet2` / `knn` はローカル CUDA 拡張です。ビルド時に `nvcc --version` が報告する CUDA バージョンは `torch.version.cuda` と一致している必要があり、一致しない場合は `The detected CUDA version (...) mismatches the version that was used to compile PyTorch (...)` というエラーでビルドが失敗します。まず両方のバージョンを確認してください：

```bash
nvcc --version
python -c "import torch; print(torch.version.cuda)"
```

例として、`torch.version.cuda` が `12.8` と表示されている場合、そのバージョンに一致するコンパイラを conda 環境内にインストールします：

```bash
conda install -c nvidia cuda-nvcc=12.8 cuda-cudart-dev=12.8

which nvcc       # should point to $CONDA_PREFIX/bin/nvcc, not /usr/bin/nvcc
nvcc --version   # should match torch.version.cuda
```

`cuda-nvcc` はコンパイラを提供し、`cuda-cudart-dev` は `targets/x86_64-linux/include` 配下に CUDA ヘッダを提供します。どちらも必須です。conda 環境が有効化されると `$CONDA_PREFIX/bin` がシステムパスより前に来るため、conda の `nvcc` が自動的に古いシステム側（例：Ubuntu リポジトリの CUDA 11.5）を隠蔽します。システム CUDA をアンインストールする必要はありません。

:::warning
古いシステムの `nvcc` に合わせるために PyTorch をダウングレードしないでください。古い CUDA リリースは GPU アーキテクチャをサポートしていない場合があります（CUDA 11.5 がサポートするのは最大 sm_86 までで、RTX 40 シリーズには CUDA 11.8+、RTX 50 シリーズには CUDA 12.8+ が必要です）。また、古い PyTorch ビルドは、最新の ultralytics リリースなど他のプロジェクト依存関係と非互換な場合があります。
:::

**ステップ 4: 検証**

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.is_available())"
nvcc --version
```

CUDA バージョンが一致し、`torch.cuda.is_available()` が `True` を出力すれば、PyTorch のセットアップは完了で、CUDA オペレータのビルドを続行できます。

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
注意：公式の graspnet-baseline リポジトリのドキュメントに従って `python setup.py install` を使用すると、CUDA / PyTorch 関連のエラーが発生する場合があります。アクティブな conda 環境にすでにインストールされている PyTorch と CUDA の構成に対して拡張をビルドするために、`pip install . --no-build-isolation` を使用することを推奨します。
:::

:::tip
ビルド時に `fatal error: cusparse.h: No such file or directory` が発生した場合は、`find $CONDA_PREFIX -name cusparse.h` を実行し、`cusparse.h` を含むディレクトリを `CPATH` / `CPLUS_INCLUDE_PATH` に追加してください（conda の `cuda-toolkit` を使用している場合、通常は `$CONDA_PREFIX/targets/x86_64-linux/include` です）。`'__NV_IS_DEVICE' was not declared in this scope` のようなヘッダ関連エラーが出る場合、多くは pip の `nvidia/cu13` ヘッダと conda の `nvcc` バージョンを混在させていることが原因です。上記の conda の `targets` パスに切り替えてから再ビルドしてください。
:::

:::tip
さらに、古い GraspNet API 依存関係は、非推奨となった `sklearn` パッケージ名をまだ使用している場合があります。インストール中に `The 'sklearn' PyPI package is deprecated` を回避するために、`sed` コマンドで現在推奨されている `scikit-learn` パッケージ名に置き換えています。古い GraspNet API 依存関係も同時にアップグレードしない限り、`transforms3d==0.3.1` が依然として `np.float` のような古い NumPy エイリアスを使用しているため、その `numpy==1.23.4` 制約は維持してください。
:::

**学習済みモデルの設定**

公式の GraspNet 学習済み重みを graspnet-baseline 公式リポジトリからダウンロードし（[Google](https://drive.google.com/file/d/1hd0G8LN6tRpi4742XOTEisbTXNZ-1jmk/view)、[Baidu](https://pan.baidu.com/s/1Eme60l39tTZrilF0I86R5A)）、`checkpoint-rs.tar` を次の場所に配置します：

```bash
mkdir -p ~/rebot_grasp/sdk/graspnet-baseline/checkpoints

sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

その後、`config/default.yaml` を確認します：

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

`checkpoint` フィールドは 3 つの形式をサポートします：ファイル名の場合は `sdk/graspnet-baseline/checkpoints/` 配下として解決されます。相対パスの場合はプロジェクトルートからのパスとして解決されます。絶対パスの場合はそのまま使用されます。

</div>
</section>
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### ステップ 2. GraspNet カメラ推定デモを実行する

```bash
python scripts/graspnet_camera_demo.py
```

このスクリプトは、ロボットアームに接続せずに RGB-D カメラのみで GraspNet の 6D 把持姿勢推定を実行します。ライブカメラプレビューを維持し、YOLO のバウンディングボックスを使用してターゲット領域を選択し、ターゲットの bbox によって GraspNet のフルシーン候補のうち実行可能なものをフィルタリングします。

主な操作：

- `G` / `Space`: 現在のフレームで GraspNet 推論を実行
- `R`: ライブプレビューを再開
- `Q` / `Esc`: 終了

推論後、Open3D で点群と把持候補を可視化できます。

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

このスクリプトは、GraspNet の推定結果をロボットアームの実行フローに接続します。YOLO がターゲットを選択し、GraspNet が 6D 把持姿勢を出力し、ハンドアイキャリブレーションがそれをロボットベース座標系に変換し、スクリプトが IK の到達可能性を確認してから、プレグラスプ、グラスプ、リトリートのモーションシーケンスを実行します。

`python scripts/grasp.py` を実行すると、GraspNet によるロボット把持のフロー全体が開始され、ロボットアームが制御されます。`--dry-run` はターゲット姿勢と候補フィルタリング結果を出力し、把持動作をスキップします。現在のスクリプトはそれでもアームを初期化し、レディポーズへ移動し、終了時にクリーンアップと原点復帰を行います。`--target-class "light blue coffee cup"` は YOLO のターゲットクラスを指定し、そのクラスに対する GraspNet 候補のみをフィルタリングして把持します。

</div>
</section>
</div>

### 10. FAQ

<h4>1. <code>ModuleNotFoundError: No module named 'motorbridge'</code></h4>

これは、現在の Python 環境にロボットアーム SDK の依存関係がインストールされていないことを意味します。`conda env update` はベース環境のみを更新します。プロジェクトの依存関係は別途インストールしてください。プロジェクトルートで次を実行します：

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

検証（`pointnet2_utils` / `knn_modules` はソースディレクトリからトップレベルモジュールとしてインポートされます。これは `models/` がそれらをインポートする方法と同じです。把持スクリプトはソースディレクトリを自動的に `sys.path` に追加します）：

```bash
cd sdk/graspnet-baseline
python -c "import sys; sys.path[:0]=['pointnet2','knn']; import pointnet2_utils, knn_modules; print('import works')"
```

<h4>5. GraspNet 実行時に新しい GPU で CUDA アーキテクチャ互換性の問題が発生する</h4>

`no kernel image is available for execution on the device` が表示されたり、PyTorch が現在の GPU CUDA ケイパビリティがサポートされていないと報告する場合、インストールされている PyTorch ホイールにその GPU アーキテクチャ向けの CUDA カーネルが含まれていない可能性が高いです。現在の CUDA / GPU アーキテクチャをサポートする PyTorch ビルドをインストールし、その後 GraspNet のローカル CUDA 拡張を再ビルドしてください。

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.get_device_name(0))"

cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

ビルドアーキテクチャを手動で指定する必要がある場合は、再ビルド前に `TORCH_CUDA_ARCH_LIST` を設定してください。GPU アーキテクチャと PyTorch / CUDA バージョンに応じて値を選択します。

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

このワークフローでは、**ROS 2** と **YOLOE** を使用して reBot Arm B601-RS 上で物体検出、把持、および配置を行います。アーム、深度カメラ、把持ノードをそれぞれ別のターミナルで起動します。

対応している深度カメラは **Orbbec Gemini 2** と **RealSense D405 / D435i** です。ロボットモデルにはカメラ取り付け用の外部パラメータがプリセットされているため、キャリブレーションボードを使ったハンドアイキャリブレーションデータの収集を省略できます。カメラには指定されたブラケットと取り付け位置を使用してください。取り付けや造形部品の公差によって誤差が生じる可能性があります。オフセットを微調整する前に、TF とターゲット姿勢を確認してください。

### 2. 環境構築

このワークフローでは Ubuntu 22.04、ROS 2 Humble、システムの Python 3.10、および `yolo` という名前の専用 Conda 環境を使用します。YOLOE 推論用の Conda 環境を作成する前に、システム環境内でアーム、カメラドライバ、ビジュアルグラスピングパッケージをまとめてセットアップしてビルドします。

手順 1〜4 は、Conda が無効な新しいターミナルで実行します。システムの ROS セットアップだけを source し、古いワークスペースは source しないでください。ターミナル A、B、D、E もシステム環境を使用します。ターミナル C でのみ `yolo` 環境を使用します。Python SDK / OBB ワークフローの環境ファイルとインストールコマンドは、そのワークフロー専用です。

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### ステップ 1. ロボットアームの ROS 2 ワークスペースをインストールする

[reBot Arm B601-RS ROS 2 Integration](https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_ros2_integration/) ガイドに従ってアームを準備し、ROS 2 Humble、ビルドツール、アームのワークスペース、低レベル SDK をインストールします。アームのワークスペースが正常にビルドできることを確認してください。このガイドでも同じ `~/rebotarm_ros2` ワークスペースを使い続けます。

```bash
source /opt/ros/humble/setup.bash
echo "$ROS_DISTRO"
sudo apt update
sudo apt install -y python3-rosdep python3-colcon-common-extensions git wget cmake build-essential
```

`ROS_DISTRO` が `humble` を返すことを確認してください。ワークスペースにすでに以下のリポジトリのいずれかが含まれている場合は、先に進む前にそのブランチと内容を確認します。各リポジトリはパスごとに 1 回だけクローンしてください。

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### ステップ 2. カメラをインストールする

使用するカメラのセットアップ手順を展開してください。

<details className="content-details">
<summary>クリックして Gemini 2 のセットアップを展開</summary>

Orbbec ROS 2 SDK をワークスペースにクローンし、`v2-main` ブランチに切り替えます。

```bash
cd ~/rebotarm_ros2/src
git clone https://github.com/xiehuangbao888/OrbbecSDK_ROS2.git
cd OrbbecSDK_ROS2
git checkout v2-main
```

ドライバリポジトリに記載されているネイティブ依存関係をインストールします。ROS の依存関係はステップ 3 でまとめてインストールします。

```bash
sudo apt install -y libgflags-dev nlohmann-json3-dev libgoogle-glog-dev libdw-dev libssl-dev mesa-utils libgl1 \
  ros-humble-image-transport-plugins ros-humble-compressed-image-transport
```

udev ルールをインストールします。

```bash
cd ~/rebotarm_ros2/src/OrbbecSDK_ROS2/orbbec_camera/scripts
sudo bash install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

</details>

<details className="content-details">
<summary>クリックして D405 / D435i のセットアップを展開</summary>

1. ビルド依存関係をインストールしてから RealSense SDK をクローンし、`v2.58.1` に切り替えます。

```bash
sudo apt update
sudo apt install -y cmake build-essential git pkg-config libusb-1.0-0-dev libudev-dev libssl-dev v4l-utils
```

```bash
cd ~
git clone https://github.com/realsenseai/librealsense.git
cd librealsense
git checkout v2.58.1
```

2. udev ルールをインストールします。

```bash
cd ~/librealsense
./scripts/setup_udev_rules.sh
```

3. SDK をビルドしてインストールします。

このビルドでは、カーネルの UVC モジュールにパッチを当てることを避けるために RSUSB バックエンドを使用します。サンプルと GLSL 拡張は無効化します。`BUILD_TOOLS=ON` により、`rs-enumerate-devices` などのコマンドラインツールが利用可能なままになります。`realsense-viewer` はグラフィカルなサンプルです。

```bash
cd ~/librealsense &&
mkdir -p build && cd build &&
cmake .. -DCMAKE_BUILD_TYPE=Release \
  -DFORCE_RSUSB_BACKEND=ON \
  -DBUILD_EXAMPLES=OFF \
  -DBUILD_TOOLS=ON \
  -DBUILD_GRAPHICAL_EXAMPLES=OFF \
  -DBUILD_GLSL_EXTENSIONS=OFF &&
cmake --build . --parallel 2 &&
sudo cmake --install . &&
sudo ldconfig
```

:::tip CMake が `OpenGL::GL` を見つけられない
librealsense `v2.58.1` では、`BUILD_GRAPHICAL_EXAMPLES` だけを無効にしても、標準サンプルが `OpenGL::GL` にリンクされたままのため、CMake がビルドファイルを生成できない場合があります。`BUILD_EXAMPLES=ON` でこのエラーが発生した場合は、上記のコマンドを再実行して、既存の `build` ディレクトリ内のオプションを更新してください。
:::

4. RealSense ROS 2 ドライバをクローンします。

```bash
cd ~/rebotarm_ros2/src
git clone https://github.com/xiehuangbao888/realsense-ros.git
```

カメラドライバの ROS 依存関係はステップ 3 でインストールし、ワークスペースはステップ 4 でビルドします。カメラを再接続し、`lsusb -t` を実行して USB 3.x で接続されていることを確認します。速度は通常 `5000M` 以上である必要があります。

</details>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### ステップ 3. ビジュアルグラスピングパッケージを追加し、ROS 依存関係をインストールする

```bash
cd ~/rebotarm_ros2/src/
git clone https://github.com/xiehuangbao888/rebot_visual_grasp.git
```

初回使用時に `rosdep` を初期化します。`default sources list file already exists` と表示された場合は、インデックスの更新に直接進んでください。

```bash
sudo rosdep init
```

```bash
rosdep update
cd ~/rebotarm_ros2
rosdep install --from-paths src --ignore-src -r -y --rosdistro humble --skip-keys="librealsense2 orbbec_description realsense2_description"
```

このコマンドは、クローンした ROS パッケージで宣言されているシステム依存関係をインストールします。`diagnostic_updater`、`cv_bridge`、`xacro` などが含まれます。RealSense のセットアップではすでに `librealsense2` をソースからインストール済みです。残りの 2 つのキーはカメラ記述パッケージです。ステップ 2 でクローンしたソースには使用中のカメラ用の記述パッケージが含まれており、もう一方のカメラのパッケージはこのセットアップでは任意です。これらのキーを省略することで、SDK の再インストールや、もう一方のカメラ用依存関係によるブロックを避けられます。

`All required rosdeps installed successfully` と表示されることを確認してください。ビルド前に残っている依存関係エラーをすべて解消します。インストールが正常に完了したことを確認するために、出力全体を確認してください。

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

#### ステップ 4. ワークスペースをビルドする

このワークスペースをビルドする際は、カメラドライバとビジュアルグラスピングパッケージを追加した後も含めて、一貫して `--symlink-install` を使用してください。

:::tip 以前のビルドディレクトリとの競合
以前に `--symlink-install` なしでビルドしていた場合、これに切り替えると `failed to create symbolic link` や `existing path cannot be removed: Is a directory` が発生することがあります。前回のビルドで作成されたディレクトリが、新しいシンボリックリンクと競合しているためです。ビルド成果物を削除してから再ビルドしてください。

Conda が無効で、ワークスペースの `install/setup.bash` を source していない新しいターミナルを開き、次のコマンドを実行します。

```bash
cd ~/rebotarm_ros2
rm -rf build install log
```

これにより、ワークスペースの build、install、log ディレクトリが削除され、`src` やその他のソースファイルは保持されます。その後、使用しているカメラ用のコマンドを使ってワークスペース全体を再ビルドします。
:::

```bash
cd ~/rebotarm_ros2
source /opt/ros/humble/setup.bash
```

<Tabs groupId="rebot-ros2-camera-build" defaultValue="realsense">
<TabItem value="realsense" label="RealSense D405 / D435i">

```bash
colcon build --symlink-install --cmake-args -DCMAKE_BUILD_TYPE=Release -DUSE_LIFECYCLE_NODE=OFF
```

</TabItem>
<TabItem value="orbbec" label="Orbbec Gemini 2">

```bash
colcon build --symlink-install --cmake-args -DCMAKE_BUILD_TYPE=Release
```

</TabItem>
</Tabs>

ビルドが成功したら、ワークスペースを source し、ビジュアルグラスピングパッケージを確認します。

```bash
source ~/rebotarm_ros2/install/setup.bash
ros2 pkg prefix rebot_visual_grasp
```

RealSense の場合は `ros2 pkg prefix realsense2_camera` も実行します。Gemini 2 の場合は `ros2 pkg prefix orbbec_camera` を実行します。現在のワークスペース内で、選択したパッケージのインストールパスが表示されることを確認してください。

**ビルド結果を確認する**

最後の `Summary` を確認します。すべてのパッケージが `Finished` と表示され、`Failed` や `Aborted` が 1 つもなければビルドは成功です。たとえば、RealSense ドライバとビジュアルグラスピングパッケージを含むワークスペースでは、次のような出力が表示される場合があります。

```text
Summary: 11 packages finished [33.8s]
  4 packages had stderr output: realsense2_camera_msgs realsense2_description rebotarm_moveit_config rebotarm_msgs
```

パッケージ数やビルド時間は、ワークスペースやコンピュータによって異なります。`packages had stderr output` は、それらのパッケージが標準エラーに出力したことを意味します。何が起きたかを確認するためにログを確認してください。出力が以下で説明する CMake の警告だけであれば、ビルドは成功している可能性があります。

:::tip クリーンアップ後の古いパスと CMake の警告
ワークスペースの `install/setup.bash` を source したターミナルで `install` を削除し、そのまま同じターミナルで再ビルドした場合、`AMENT_PREFIX_PATH` や `CMAKE_PREFIX_PATH` に存在しないパスに関する警告が表示されることがあります。ターミナルには以前のインストールパスが残っているためです。すべてのパッケージが正常にビルドできていれば、上記のように新しい `install/setup.bash` を source して続行してください。

以降のビルドでは、新しいターミナルを使用し、ビルド前に `/opt/ros/humble/setup.bash` のみを source してください。`~/.bashrc` が自動的にワークスペースを source している場合は、クリーンアップ後に再ビルドする前に、その行を一時的に無効にしてください。

`--cmake-args -DUSE_LIFECYCLE_NODE=OFF` を指定すると、一部のパッケージで `Manually-specified variables were not used by the project: USE_LIFECYCLE_NODE` と表示される場合があります。この CMake の警告は、そのオプションを使用しているドライバ以外のパッケージでは想定されたものです。
:::

ROS ワークスペースをビルドしたら、ステップ 5 で Conda 推論環境を作成します。新しいターミナルを開くたびに、ROS コマンドを実行する前に両方のセットアップファイルを source してください。

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
```

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">5</span>
<div className="rebot-step-content">

#### ステップ 5. YOLOE 環境をセットアップする

`grasp_yolo` は Python から Ultralytics YOLOE を呼び出します。このノード用に専用の Conda 環境内の Python インタプリタを使用します。

このステップは、Ubuntu 22.04、ROS 2 Humble、Python 3.10 を実行している x86_64 ホストに適用されます。環境を作成し、PyTorch のバックエンドを選択してから、ビジョンおよび ROS の Python 実行時依存関係をインストールします。Conda 内では依存関係を別途確認してください。apt でインストールした Python パッケージは、Conda 環境内では利用できない場合があります。

<div className="rebot-step-flow rebot-step-flow--substeps">
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5.1</span>
<div className="rebot-step-content">

##### 5.1 ベース環境を作成する

```bash
conda create -n yolo python=3.10
conda activate yolo
python -c "import sys; print(sys.executable)"
```

:::note 期待される結果
Python パスは Conda インストール内の `envs/yolo/bin/python` で終わります。すでに `yolo` 環境がある場合は、それを有効化して、以下の PyTorch とプロジェクト依存関係の手順に進んでください。
:::

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5.2</span>
<div className="rebot-step-content">

##### 5.2 ハードウェアに合わせて PyTorch をインストールする

両方のタブで、PyTorch `2.9.1`、torchvision `0.24.1`、torchaudio `2.9.1` をそれぞれのパッケージインデックスからインストールします。アクティブな `yolo` 環境で、どちらか一方のバックエンドを選択してください。

<Tabs groupId="rebot-ros2-pytorch-backend" defaultValue="cpu">
<TabItem value="cpu" label="CPU (NVIDIA GPU なし)">

Intel または AMD の統合グラフィックスを搭載したコンピュータで使用するか、まず CPU 上でセットアップを検証する場合にこのオプションを使用します。

```bash
python -m pip install torch==2.9.1 torchvision==0.24.1 torchaudio==2.9.1 --index-url https://download.pytorch.org/whl/cpu
python -c "import torch; print(torch.__version__, torch.__file__); print('CUDA available:', torch.cuda.is_available()); print(torch.rand(2, 3))"
```

:::note 期待される結果
PyTorch のパスはアクティブな Conda 環境内にあり、コマンドはランダムなテンソルを出力します。このバックエンドでは `CUDA available: False` が期待されます。`grasp_yolo` を起動するときは `-p yolo_device:=cpu` を設定します。CPU 推論のフレームレートはモデルとコンピュータに依存します。
:::

</TabItem>
<TabItem value="nvidia" label="NVIDIA GPU (CUDA)">

PyTorch の CUDA ビルドをインストールする前に、ドライバが NVIDIA GPU を検出していることを確認してください。この例では CUDA 12.8 を使用しており、GPU アーキテクチャとドライバの両方が対応している必要があります。

```bash
nvidia-smi
python -m pip install torch==2.9.1 torchvision==0.24.1 torchaudio==2.9.1 --index-url https://download.pytorch.org/whl/cu128
python -c "import torch; print(torch.__version__, torch.__file__); print('CUDA build:', torch.version.cuda); print('CUDA available:', torch.cuda.is_available()); print(torch.rand(2, 3, device='cuda'))"
```

:::note 期待される結果
`nvidia-smi` が GPU を一覧表示し、PyTorch のパスはアクティブな Conda 環境内にあり、コマンドは `CUDA available: True` と CUDA テンソルを出力します。`grasp_yolo` を起動するときは `-p yolo_device:=0` を使用して GPU 0 を選択します。
:::

:::tip CUDA ビルドを選択する
GPU、ドライバ、Python バージョンをサポートするビルドを選択するには、[公式の PyTorch バージョン一覧](https://pytorch.org/get-started/previous-versions/) を使用してください。ビルドを選択する際は、`nvidia-smi` に表示される CUDA バージョンだけでは不十分なため、これら 3 つすべてを考慮してください。事前ビルド済みホイールは、標準的な YOLOE 推論用の CUDA ランタイムを提供します。

CUDA が利用できない場合は、ドライバ、GPU アーキテクチャ、選択したホイールを確認するか、CPU タブに切り替えて基本的なセットアップを検証してください。PyTorch のバージョンを変更する場合は、対応する torchvision と torchaudio のバージョン、および次のフェーズで使用するピンも更新してください。
:::

</TabItem>
</Tabs>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5.3</span>
<div className="rebot-step-content">

##### 5.3 プロジェクト依存関係をインストールして検証する

いずれか一方のバックエンドをインストールしたら、`yolo` をアクティブに保ったまま、ビジョンおよび Python 実行時の依存関係をインストールします。このコマンドは対応する PyTorch バージョンを維持しつつ、NumPy と OpenCV の制約をまとめて解決します。

```bash
python -m pip install "ultralytics==8.4.202" "torch==2.9.1" "torchvision==0.24.1" "torchaudio==2.9.1" "numpy==1.26.4" "opencv-python==4.11.0.86" transforms3d pyyaml lark typeguard

# YOLOE open-vocabulary classes require the Ultralytics CLIP package.
python -m pip install git+https://github.com/ultralytics/CLIP.git
```

:::tip PyTorch インストール中の ROS 依存関係メッセージ
すでに ROS 2 を source 済みの場合、pip が `generate-parameter-library-py` は `pyyaml` と `typeguard` を必要とすると報告することがあります。最後の `Successfully installed` 行に `torch`、`torchvision`、`torchaudio` が含まれていることを確認してください。欠けている 2 つの依存関係は、このフェーズのコマンドでインストールし、その後 `pip check` と以下のインポートテストを実行します。
:::

`rebotarm_agent` をデフォルトの arm ワークスペース構成でビルドした場合は、フルワークスペースを source した後に `pip check` を通過できるよう、その宣言済み依存関係をインストールしてください。

```bash
python -m pip install fastmcp
```

`fastmcp` は Agent 機能をサポートします。ワークスペースに `rebotarm_agent` が含まれている場合にのみインストールしてください。

このワークフローでは、NumPy を `1.26.4`、OpenCV を `4.11.0.86` にピン留めしています。Ultralytics をインストールまたはアップグレードする際は、これらのピンと対応する PyTorch バージョンを維持してください。

:::tip OpenCV と NumPy の依存関係の競合
NumPy `1.26.4` を個別にインストールする前に `pip install -U ultralytics` を実行した場合、pip が `opencv-python ... requires numpy>=2` と報告することがあります。たとえば、OpenCV `5.0.0.93` は NumPy 2 を必要としますが、このワークフローでは NumPy `1.26.4` を使用します。最終的に `Successfully installed` メッセージが表示されても、依存関係が競合したまま残る可能性があります。

`yolo` 環境をアクティブに保ったまま、互換性のあるバージョンをインストールし、その後で以下の依存関係チェックとインポートチェックを実行してください。

```bash
conda activate yolo
python -m pip install "numpy==1.26.4" "opencv-python==4.11.0.86" transforms3d
```

環境内で `cv2` を提供する OpenCV パッケージは 1 つだけにしてください。`opencv-python`、`opencv-contrib-python`、または対応する headless パッケージなど複数のバリアントをインストールした場合は、それらをアンインストールし、ピン留めされたパッケージを再インストールしてください。

```bash
python -m pip uninstall -y opencv-python opencv-contrib-python opencv-python-headless opencv-contrib-python-headless
python -m pip install "numpy==1.26.4" "opencv-python==4.11.0.86" transforms3d
```
:::

**依存関係をチェックし、YOLOE を検証する**

システムの ROS セットアップとビルド済みワークスペースを source し、アクティブな Conda の Python を使用して依存関係をチェックします。

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
python -m pip check
python -c "import sys, torch, torchvision, torchaudio, cv2, numpy, yaml, lark, transforms3d, clip; from ultralytics import YOLOE; print('Python:', sys.executable); print('PyTorch:', torch.__version__); print('OpenCV:', cv2.__version__); print('NumPy:', numpy.__version__); print('CUDA available:', torch.cuda.is_available()); print('YOLOE OK')"
python -c "import rclpy, cv_bridge, launch_ros; import rebot_visual_grasp.grasp_yolo; print('ROS grasp imports OK')"
```

:::note 期待される結果
`pip check` は `No broken requirements found.` と報告します。Python パスはアクティブな Conda 環境内にあります。ビジョンチェックは `OpenCV: 4.11.0`、`NumPy: 1.26.4`、`YOLOE OK` を出力します。ROS インポートチェックは `ROS grasp imports OK` を出力します。CPU バックエンドでは `CUDA available: False`、GPU バックエンドでは `True` が期待されます。これらのチェックはモジュールをインポートするだけで、アームは待機状態のままです。
:::

`pip check` が `launch-ros ... requires pyyaml` と報告する場合は、上記の依存関係を `yolo` にインストールしたことを確認してください。`rebotarm-agent ... requires fastmcp` と報告する場合は、前述のとおり Agent 依存関係をインストールしてください。`rclpy`、`cv_bridge`、またはワークスペースモジュールのインポートに失敗する場合は、システムの ROS 依存関係、ワークスペースのビルド結果、2 つの `source` コマンドを確認してください。これらの ROS パッケージはシステムおよびワークスペースから使用します。

依存関係とインポートチェックが通過するまで待ってから、重みをダウンロードし、把持ノードを起動してください。

</div>
</section>
</div>

**`~/rebot_visual_model` に重みをダウンロードする**

```bash
mkdir -p ~/rebot_visual_model && cd ~/rebot_visual_model

# MobileCLIP is required by YOLOE set_classes and is about 242 MB.
wget -c https://github.com/ultralytics/assets/releases/download/v8.4.0/mobileclip2_b.ts

# The segmentation weights can download on first use. Download them here to verify the setup before launch.
wget -c https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26s-seg.pt
```

YOLOE がモデルディレクトリから重みをロードし、テキストクラスを設定できることを確認します。これは、アームを起動する前に、モデルファイルや CLIP 依存関係の不足を検出するのに役立ちます。

```bash
cd ~/rebot_visual_model
python -c "from ultralytics import YOLOE; model = YOLOE('yoloe-26s-seg.pt'); model.set_classes(['cube', 'box']); print('YOLOE weights and text encoder OK')"
```

`YOLOE weights and text encoder OK` が表示されることを期待してください。最初のロードには時間がかかる場合があります。このコマンドはビジョンモデルのみをロードし、アームは接続されないままです。プロジェクトを実行する前に、重みや依存関係の不足を解消してください。

</div>
</section>

</div>

### 3. プロジェクトを実行する

開始する前に、アームの電源がオンになっていること、CAN インターフェースが `can0` であること、Gemini 2、D405、または D435i が USB 接続されていることを確認してください。その後、CAN を立ち上げます。

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

:::warning ロボットアームが動作します
ターミナル C では、`move_to_observation_on_start:=true` によってアームが観察姿勢に移動します。ターミナル D は把持と配置をトリガーします。開始前に、ゼロ位置、マウントブラケット、ワークスペース、およびオフセットを確認してください。動作経路から人や障害物を遠ざけ、いつでもアームを停止できるように準備しておいてください。
:::

ターミナル A、B、C、D をこの順番で起動し、前のターミナルはそのまま動かしておきます。お使いのカメラに合わせて起動コマンドを選択してください。スタックをまとめて起動するスタートアップスクリプトを作成することもできます。

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">A</span>
<div className="rebot-step-content">

#### ターミナル A — アームと RViz を起動

<details className="content-details">
<summary>クリックして Gemini 2 を展開</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp bringup_with_camera.launch.py model:=rs channel:=can0 use_rviz:=true
```

</details>

<details className="content-details">
<summary>クリックして D405 を展開</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp bringup_with_d405.launch.py model:=rs channel:=can0 use_rviz:=true
```

</details>

<details className="content-details">
<summary>クリックして D435i を展開</summary>

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

#### ターミナル B — カメラを起動

<details className="content-details">
<summary>クリックして Gemini 2 を展開</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch orbbec_camera gemini2.launch.py
```

</details>

<details className="content-details">
<summary>クリックして D405 を展開</summary>

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
<summary>クリックして D435i を展開</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch realsense2_camera rs_launch.py \
  align_depth.enable:=true \
  depth_module.depth_profile:=640x480x30 \
  rgb_camera.color_profile:=640x480x30
```

</details>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">C</span>
<div className="rebot-step-content">

#### ターミナル C — 観察姿勢へ移動し、YOLOE 検出を開始

最初に `conda activate yolo` を実行するか、実際の環境名で環境を有効化します。`python` コマンドはアクティブな環境を使用し、Miniconda と Miniforge のどちらでも動作します。サンプルではデフォルトで `yolo_device:=cpu` を使用します。GPU 推論を行うには、手順 5 で CUDA チェックを通過したあと、`yolo_device:=0` を設定します。

<details className="content-details">
<summary>クリックして Gemini 2 を展開</summary>

```bash
conda activate yolo
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

python -m rebot_visual_grasp.grasp_yolo --ros-args \
  -p yolo_model:="$HOME/rebot_visual_model/yoloe-26s-seg.pt" \
  -p target_class:="cube" \
  -p place_class:="box" \
  -p yolo_device:=cpu \
  -p grasp_z_offset_m:=0.01 \
  -p place_z_offset_m:=0.1 \
  -p grasp_x_offset_m:=-0.02 \
  -p grasp_y_offset_m:=0.002 \
  -p move_to_observation_on_start:=true \
  -p auto_publish_on_detect:=true
```

</details>

<details className="content-details">
<summary>クリックして D405 を展開</summary>

```bash
conda activate yolo
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

python -m rebot_visual_grasp.grasp_yolo --ros-args \
  -p yolo_model:="$HOME/rebot_visual_model/yoloe-26s-seg.pt" \
  -p color_topic:=/camera/camera/color/image_raw \
  -p depth_topic:=/camera/camera/aligned_depth_to_color/image_raw \
  -p color_info_topic:=/camera/camera/color/camera_info \
  -p optical_frame:=camera_color_optical_frame \
  -p target_class:=cube \
  -p place_class:=box \
  -p yolo_device:=cpu \
  -p grasp_z_offset_m:=0.01 \
  -p grasp_y_offset_m:=-0.005 \
  -p place_z_offset_m:=0.1 \
  -p grasp_x_offset_m:=-0.01 \
  -p move_to_observation_on_start:=true \
  -p auto_publish_on_detect:=true
```

</details>

<details className="content-details">
<summary>クリックして D435i を展開</summary>

```bash
conda activate yolo
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

python -m rebot_visual_grasp.grasp_yolo --ros-args \
  -p yolo_model:="$HOME/rebot_visual_model/yoloe-26s-seg.pt" \
  -p color_topic:=/camera/camera/color/image_raw \
  -p depth_topic:=/camera/camera/aligned_depth_to_color/image_raw \
  -p color_info_topic:=/camera/camera/color/camera_info \
  -p optical_frame:=camera_color_optical_frame \
  -p target_class:="cube" \
  -p place_class:="box" \
  -p yolo_device:=cpu \
  -p grasp_z_offset_m:=0.01 \
  -p place_z_offset_m:=0.1 \
  -p grasp_y_offset_m:=0.01 \
  -p grasp_x_offset_m:=-0.04 \
  -p move_to_observation_on_start:=true \
  -p auto_publish_on_detect:=true
```

</details>

| パラメータ | 説明 |
| ------------------ | ---------------------------------------------------------------------------- |
| `yolo_device:=cpu` | デフォルトで CPU を使用します。CUDA を確認したあと、`yolo_device:=0` を設定すると GPU 0 を使用します。 |
| `target_class` | 把持対象物の YOLOE テキストクラス。対象物に合うように設定します。デフォルトの YOLO クラスがサポートされています。 |
| `place_class` | 置き場所ターゲットの YOLOE テキストクラス。ターゲットに合うように設定します。デフォルトの YOLO クラスがサポートされています。 |
| `grasp_x_offset_m` | `base_link` における前後方向のオフセット。負の値は把持位置を後方へ移動します。 |
| `grasp_y_offset_m` | 把持の左右オフセット。`0.01` は把持位置を左に 1 cm 移動します。負の値は右に移動します。 |
| `grasp_z_offset_m` | 把持高さの調整。デフォルトは標準グリッパーより長いフレキシブルグリッパー用です。使用するグリッパーの高さに合わせてこの値を調整してください。 |
| `place_z_offset_m` | アームが物体を離す、設置ポイント上方の追加高さ。 |

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">D</span>
<div className="rebot-step-content">

#### ターミナル D — 把持と配置をトリガー

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp grasp_go.launch.py
```

遅延時間を変更するには、launch パラメータを追加します。この例では 5 秒後にトリガーされます。

```bash
ros2 launch rebot_visual_grasp grasp_go.launch.py trigger_delay_s:=5.0
```

</div>
</section>
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">E</span>
<div className="rebot-step-content">

#### ターミナル E — ホームに戻る（任意）

通常のシャットダウン時には、アームコントローラはアームをホームポジションに戻し、モーターを無効化しようとします。異常終了や通信障害の後は、自動での原点復帰は信頼できません。手動でホームに戻すには、ターミナル A のコントローラを動作させたままにし、動作経路に障害物がないことを確認してください。

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

- 技術サポート：[Submit an Issue](https://github.com/Seeed-Projects/reBot-DevArm-Grasp/issues)
- プロジェクトページ：[GitHub](https://github.com/Seeed-Projects/reBot-DevArm-Grasp)
- フォーラム：[Seeed Studio Forum](https://forum.seeedstudio.com/)

## 参考資料

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
