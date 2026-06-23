---
description: このチュートリアルでは、Orbbec Gemini 2 と YOLO/OBB 把持パイプラインを使用して、reBot Arm B601-DM 向けの完全なビジュアル把持デモを構築する方法を説明します。
title: reBot Arm B601-DM ビジュアル把持デモ
keywords:
  - reBot Arm
  - B601-DM
  - 把持
  - Gemini 2
  - YOLO
  - ハンドアイキャリブレーション
  - ロボット
slug: /rebot_arm_b601_dm_grasping_demo
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-06-01
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-22'
updatedAt: '2026-06-01'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_grasping_demo/
---

# reBot Arm B601-DM ビジュアル把持デモ

<p align="center">
  <img src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

<br />

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Camera-Orbbec%20Gemini%202-green.svg" alt="Camera" />
    <img src="https://img.shields.io/badge/Detection-YOLO-yellow.svg" alt="YOLO" />
</p>

<p align="center">
  <strong>奥行き認識 · 物体検出 · ハンドアイキャリブレーション · 自律把持 · 完全オープンソース</strong>
</p>

YOLO は広く利用されているリアルタイム物体検出モデルのファミリーで、1 回のフォワードパスでターゲットの位置特定と分類を行うことができます。このチュートリアルでは、YOLO と Orbbec Gemini 2 深度カメラを組み合わせて、reBot Arm B601-DM 向けのデスクトップ用ビジュアル把持デモを構築します。環境構築、カメラ統合、ハンドアイキャリブレーション、把持検証までをカバーします。

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/demo.gif" alt="reBot Arm B601-DM visual grasping demo" />
</p>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/6dqKZNh_D7k?autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## プロジェクトの特長

1. **YOLO + OBB からの直接把持姿勢推定**  
   このパイプラインでは、検出ボックスまたは OBB の最小外接矩形を直接使用し、短軸をグリッパの開閉方向として扱うことで、複雑な 3D 点群処理を回避します。

2. **GraspNet-Baseline による 6D 把持姿勢推定（オプション）**  
   このプロジェクトは、RGB-D 点群から 6D 把持姿勢を推定する GraspNet-Baseline（`graspnet/graspnet-baseline`）にも対応しており、YOLO のバウンディングボックスを用いてターゲット候補を選択し、より複雑な把持実験を行うことができます。

3. **軽量ロボットアームとグリッパの統合**  
   メインの把持スクリプトは `RebotArm` インターフェースを再利用し、IK、軌道制御、グリッパのステートマシンを統合しています。

4. **オープンソースかつ拡張可能**  
   すべてのソースコードは公開されており、ユーザーは自分のニーズに応じて制御アルゴリズムや動作をカスタマイズできます。

## 仕様

このチュートリアルで使用するハードウェアは、[Seeed Studio](https://www.seeedstudio.com/) によって提供されています。

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
      <td>reBot Arm B601-DM</td>
    </tr>
    <tr>
      <td>自由度</td>
      <td>6-DOF + グリッパ</td>
    </tr>
    <tr>
      <td>カメラモデル</td>
      <td>Orbbec Gemini 2</td>
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
      <td>24V DC</td>
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
| reBot Arm B601-DM ロボットアーム | 1 | ✅ |
| グリッパ | 1 | ✅ |
| USB2CAN シリアルブリッジ | 1 | ✅ |
| 電源アダプタ（24V） | 1 | ✅ |
| USB-C / 通信用ケーブル | 1 | ✅ |
| Orbbec Gemini 2 深度カメラ | 1 | ✅ |
| Gemini 2 カメラコネクタ / 取付ブラケット | 1 | ✅ |

### 配線

1. Gemini 2 を USB 3.0 でホストに接続します。
2. USB2CAN アダプタをアームの CAN バスに接続します。
3. 24V 電源、カメラ、ロボットアームがすべて確実に接続されていることを確認します。
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
| 推奨環境 | conda |
| 推奨ワークスペースフォルダ | `rebot_grasp` |
| 推奨 conda 環境名 | `rebotarm` |

## インストール手順

### ステップ 0. 先にロボットアームの基本準備を完了する

このチュートリアルを始める前に、[reBot Arm B601-DM クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/) の内容（ロボットアームの組み立て、ゼロ点初期化、モーター ID 設定、基本的な接続確認）を完了してください。

### ステップ 1. リポジトリをクローンする

公式の Seeed-Projects リポジトリを使用することを推奨します：

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

現在の開発用リポジトリを使用することもできます：

```bash
git clone https://github.com/EclipseaHime017/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

### ステップ 2. conda 環境を作成・設定する

```bash
conda env create -f environment.yml -n rebotarm
conda activate rebotarm
```

別の環境名を使いたい場合は、コマンド内の `rebotarm` を任意の名前に置き換えてください。

### ステップ 3. ロボットアーム SDK をインストールする

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

### ステップ 4. 深度カメラ SDK をインストールする

**このプロジェクトでは Orbbec Gemini2 深度カメラを使用します。別の深度カメラを使用する場合は、そのカメラに対応する SDK をインストールし、このステップはスキップしてください。**

Orbbec Gemini2 深度カメラは、Orbbec SDK v2 の Python ラッパーである `pyorbbecsdk` に依存します。まずはビルド済みの Python パッケージをインストールすることを推奨します：

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

中国本土のユーザーは次を使用できます：

```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

ソースからインストールする場合は、`pip install -e .` を実行する前に、CMake でネイティブ拡張がビルドされており、`install/lib` に `pyorbbecsdk*.so` と Orbbec の共有ライブラリが含まれていることを確認してください。

上記のすべてのインストール方法がうまくいかない場合は、以下の Orbbec 公式ドキュメントを参照してください。

初めて使用する場合は、udev ルールをインストールすることを推奨します：

```bash
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

### ステップ 5. GraspNet を設定する（オプション）

`scripts/main.py` や `scripts/ordinary_grasp_pipeline.py` を使用するだけであれば、GraspNet は不要です。`scripts/graspnet_camera_demo.py` や `scripts/grasp.py` を実行したい場合のみ設定してください。これらは GraspNet、CUDA 対応の PyTorch、PointNet2/knn の CUDA オペレータ、および学習済みチェックポイントを必要とします。

GraspNet の `pointnet2` / `knn` 拡張は CUDA コンパイラを必要とします。開始する前に、アクティブな環境から `nvcc` が見えることを確認し、`nvcc` が報告する CUDA バージョンが、PyTorch のビルドに使用された CUDA バージョンと一致しているかを確認してください：

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

`nvcc` が存在しない場合、または `nvcc` が報告する CUDA バージョンが `torch.version.cuda` と一致しない場合は、現在の PyTorch の CUDA バージョンに一致する CUDA コンパイラをインストールしてください。たとえば、PyTorch が `13.0` と報告している場合：

```bash
conda install -c nvidia cuda-nvcc=13.0
```

代わりに、現在の `nvcc` バージョンに一致する PyTorch ビルドをインストールすることもできます。2 つのバージョンは一致している必要があり、一致していない場合は `pointnet2` / `knn` のビルドが `The detected CUDA version (...) mismatches the version that was used to compile PyTorch (...)` というエラーで失敗します。

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

***注意: 公式の graspnet-baseline リポジトリのドキュメントに従って `python setup.py install` を使用すると、CUDA / PyTorch 関連のエラーが発生する場合があります。アクティブな conda 環境にすでにインストールされている PyTorch と CUDA の構成に対して拡張をビルドするために、`pip install . --no-build-isolation` を使用することを推奨します。***

***ビルド時に `fatal error: cusparse.h: No such file or directory` が発生した場合は、`find $CONDA_PREFIX -name cusparse.h` を実行し、`cusparse.h` を含むディレクトリが `CPATH` / `CPLUS_INCLUDE_PATH` に含まれていることを確認してください。conda の `cuda-toolkit` から CUDA ヘッダをインストールした場合、インクルードパスは通常、上記の pip の `nvidia/cu13/include` パスではなく、`$CONDA_PREFIX/targets/x86_64-linux/include` になります。***

***さらに、古い GraspNet API 依存関係では、非推奨となった `sklearn` パッケージ名が依然として使用されている場合があります。`sed` コマンドは、インストール中に `The 'sklearn' PyPI package is deprecated` が発生するのを避けるために、現在推奨されている `scikit-learn` パッケージ名に置き換えます。古い GraspNet API 依存関係も同時にアップグレードしない限り、`transforms3d==0.3.1` が依然として `np.float` のような古い NumPy エイリアスを使用しているため、その `numpy==1.23.4` 制約は維持してください。***

公式の graspnet-baseline リポジトリを参照して公式 GraspNet 学習済み重みをダウンロードし、`checkpoint-rs.tar` を次の場所に配置します：

```bash
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

次に `config/default.yaml` を確認します：

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

`checkpoint` フィールドは 3 つの形式をサポートします：ファイル名は `sdk/graspnet-baseline/checkpoints/` 配下として解決されます；相対パスはプロジェクトルートからのパスとして解決されます；絶対パスはそのまま使用されます。

### Step 6. 依存関係を検証する

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
python -c "import motorbridge; print('motorbridge OK')"
```

Orbbec カメラを初めて使用する場合は、インストール済みの `pyorbbecsdk` ディレクトリ内で `scripts/install_udev_rules.sh` を実行することを推奨します。そうしないと、カメラが正しくオープンできない場合があります。

## ハンドアイキャリブレーション

フルの把持パイプラインを実行する前に、まず Eye-in-Hand 方式のハンドアイキャリブレーションを完了させてください。

```bash
python scripts/collect_handeye_eih.py
```

実行前に、`config/default.yaml` 内の次の ArUco サイズパラメータが、実際に印刷したマーカーと一致していることを確認してください：

```yaml
calibration:
  aruco:
    marker_length_m: 0.1
```

自動モードでは、アームは 50 個のプリセット姿勢を走査し、ArUco マーカーが安定して検出されたときにサンプルを記録します。`c` または `q` で処理を中断した場合でも、スクリプトは収集済みサンプルからキャリブレーション結果の計算を試みます。

サンプリング中にロボットアームを手動で動かしたい場合は、手動モードを使用します：

```bash
python scripts/collect_handeye_eih.py --manual
```

手動モードでは、アームは重力補償モードに入ります。エンドエフェクタを適切な視点に動かし、`Enter` を押してキャプチャし、`c` または `q` を押して終了および結果の計算を行います。

キャリブレーション結果は次の場所に保存されます：

```text
config/calibration/orbbec_gemini2/hand_eye.npz
```

推奨サンプル数は少なくとも 5 サンプルで、15 サンプル以上を推奨します。

## 実行とデバッグ

### 1. 物体検出のみを検証する

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

このステップは、次の点を確認するのに有用です：

- カメラが正しくオープンするか
- YOLO モデルが正しくロードされるか
- YOLO の物体検出が期待どおりに動作するか

### 2. 把持推定のみを検証する

```bash
python scripts/ordinary_grasp_pipeline.py
```

把持推論の頻度やプレグラスプの退避距離を調整する必要がある場合は、次を編集します：

```yaml
grasp_pipeline:
  infer_every_live: 3
  grasp:
    depth_quantile: 0.6
    pregrasp_offset_m: 0.080
```

このスクリプトはロボットアームには接続しません。次の点を検証するためだけに使用します：

- OBB または最小外接矩形が妥当かどうか
- 把持点がターゲット中心付近に位置しているかどうか
- 短軸方向が期待されるグリッパ開閉方向と一致しているかどうか

主な操作キー：

- マウス左ボタン：選択したピクセルの深度を確認
- `G`: 現在の最良把持姿勢を出力
- `Q` / `Esc`: 終了

### 3. メインの把持プログラムを実行する

```bash
python scripts/main.py
```

ロボットアームを動かさずにターゲット姿勢だけを検証したい場合：

```bash
python scripts/main.py --dry-run
```

実際の把持を実行する前に、まず `--dry-run` で姿勢と到達可能な作業空間を検証することを推奨します。

`reBotArm_control_py` がデフォルトの場所にない場合は、`config/default.yaml` で指定します：

```yaml
robot:
  repo_root: null
```

通常は `null` のままで十分です。プログラムは最初に `sdk/reBotArm_control_py` を自動検出しようとします。

メインプログラムのフロー：

1. ロボットアームとグリッパを初期化する
2. レディ姿勢に移動する。起動時のレディ姿勢を変更したい場合は、`config/default.yaml` を編集します：

```yaml
robot:
  ready_pose:
    x: 0.3
    y: 0.0
    z: 0.3
    roll: 0.0
    pitch: 1.0
    duration: 3.0
```

3. テーブルトップ上のターゲットをリアルタイムに検出する
4. 短軸から把持姿勢を推定する
5. `G` を押して現在のフレームをキャプチャし、把持を実行する

実行時のキー操作：

- `G`: 現在の最良ターゲットを把持
- `R`: ライブプレビューを再開
- `Q` / `Esc`: 終了

### 4. GraspNet カメラ推定デモ（オプション）

```bash
python scripts/graspnet_camera_demo.py
```

このスクリプトは、ロボットアームに接続せずに RGB-D カメラのみで GraspNet の 6D 把持姿勢推定を実行します。ライブカメラプレビューを維持し、YOLO のバウンディングボックスを使用してターゲット領域を選択し、ターゲットの bbox によって GraspNet のフルシーン候補から実行可能な候補をフィルタリングします。

主な操作キー：

- `G` / `Space`: 現在のフレームで GraspNet 推論を実行
- `R`: ライブプレビューを再開
- `Q` / `Esc`: 終了

推論後、Open3D で点群と把持候補を可視化できます。

### 5. GraspNet ロボット把持プログラム（オプション）

```bash
python scripts/grasp.py
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

このスクリプトは、GraspNet の推定結果をロボットアームの実行フローに接続します。YOLO がターゲットを選択し、GraspNet が 6D 把持姿勢を出力し、ハンドアイキャリブレーションがそれをロボットベース座標系に変換し、スクリプトは IK の到達可能性を確認してから、プレグラスプ、把持、退避のモーションシーケンスを実行します。

`python scripts/grasp.py` を実行すると、GraspNet によるフルのロボット把持フローが開始され、実際にロボットアームを制御します。`--dry-run` はターゲット姿勢と候補フィルタリング結果を出力するだけで、把持動作は実行しません。`--target-class "light blue coffee cup"` は YOLO のターゲットクラスを指定し、そのクラスに対する GraspNet 候補のみをフィルタリングして把持します。

## FAQ

### 1. `ModuleNotFoundError: No module named 'motorbridge'`

これは通常、ロボットアーム SDK の依存関係が現在の Python 環境にインストールされていないことを意味します。次を確認してください：

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
cd sdk/reBotArm_control_py && pip install -e .
```

### 2. `G` を押しても把持が実行されない

よくある原因：

- `hand_eye.npz` が存在しない
- ハンドアイキャリブレーションモードが `eye_in_hand` ではない
- ターゲット姿勢が IK によって到達可能ではない

次を実行することを推奨します：

```bash
python scripts/main.py --dry-run
```

### 3. 把持深度が安定しない

次の調整を試すことができます：

- `grasp_pipeline.grasp.depth_quantile`
- ワークスペースに対するカメラの設置高さ
- ターゲット表面の反射特性

### 4. GraspNet が `pointnet2` から `pointnet2_utils` をインポートできないと報告する

これは通常、`sdk/graspnet-baseline/pointnet2` 配下のローカル CUDA 拡張がアクティブな conda 環境でビルドされていないか、Python が別の `pointnet2` パッケージを解決していることを意味します。プロジェクト環境がアクティブであることを確認し、その同じ環境で `pointnet2` と `knn` の両方を再ビルドしてください：

```bash
conda activate rebotarm
cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

次を確認します：

```bash
python -c "from pointnet2 import pointnet2_utils; print('Submodule import works')"
```

### 5. GraspNet 実行時に新しい GPU で CUDA アーキテクチャ互換性の問題が発生する

`no kernel image is available for execution on the device` が表示されたり、PyTorch が現在の GPU CUDA ケイパビリティがサポートされていないと報告する場合、インストールされている PyTorch ホイールにはその GPU アーキテクチャ向けの CUDA カーネルが含まれていない可能性があります。現在の CUDA/GPU アーキテクチャをサポートする PyTorch ビルドをインストールし、その後 GraspNet のローカル CUDA 拡張を再ビルドしてください。

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.get_device_name(0))"

cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

ビルドアーキテクチャを手動で指定する必要がある場合は、再ビルド前に `TORCH_CUDA_ARCH_LIST` を設定します。GPU アーキテクチャと PyTorch/CUDA バージョンに応じて値を選択してください。

### 6. GraspNet 推論で `RuntimeError: CPU not supported` が報告される

`pointnet2` 内のサンプリングオペレータは CUDA テンソルのみをサポートします。CUDA が利用可能であること、GraspNet ネットワークと入力点群が GPU 上にあること、そして `pointnet2` / `knn` がアクティブな環境の PyTorch バージョンに対してビルドされていることを確認してください。

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

出力が `False` の場合は、まず CUDA / PyTorch のインストールを修正してください。`True` だがエラーが残る場合は、`pointnet2` と `knn` を再ビルドしてください。

## お問い合わせ

- 技術サポート: [Submit an Issue](https://github.com/EclipseaHime017/reBot-DevArm-Grasp/issues)
- プロジェクトページ: [GitHub](https://github.com/EclipseaHime017/reBot-DevArm-Grasp)
- フォーラム: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## 参考文献

- [reBot Arm B601-DM クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/)
- [Getting Started with Pinocchio and MeshCat for reBot Arm B601-DM](https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_pinocchio_meshcat/)
- [Getting Started with LeRobot-based reBot Arm B601-DM and reBot 102 Leader](https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_lerobot/)
- [Orbbec Gemini 2 製品ページ](https://www.orbbec.com/products/stereo-vision-camera/gemini-2/)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [Orbbec SDK v2 API ガイド](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/)
- [pyorbbecsdk リポジトリ](https://github.com/orbbec/pyorbbecsdk)
- [pyorbbecsdk ドキュメント](https://orbbec.github.io/pyorbbecsdk/index.html)
- [Orbbec ROS2 Wrapper](https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Graspnet(Anygrasp) Docs](https://graspnet.net/)
