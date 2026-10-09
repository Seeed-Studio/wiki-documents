---
description: "Seeed Physical AI Beginner's Course 第29章 — reBot Arm を用いた自律ビジュアル把持の実践：RGB-D カメラ SDK と把持リポジトリのインストール、把持および把持・配置プログラムの実行、位置補正、そしてオプションの GraspNet 点群把持トラック。"
title: 第29章 - reBot Arm 自律ビジュアル把持
hide_title: true
keywords:
  - reBot
  - ロボットアーム
  - ビジュアル把持
  - RGB-D カメラ
  - ハンドアイキャリブレーション
  - GraspNet
  - コース
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_29
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-08
  author: Seeed Studio Robotics Team
createdAt: '2026-10-08'
updatedAt: '2026-10-08'
url: https://wiki.seeedstudio.com/ja/rebot_physical_ai_course_chapter_29/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 6 · 第29章 · 実践</span>
    <h2>29. reBot Arm 自律ビジュアル把持</h2>
    <p>
      Seeed Physical AI Beginner's Course 第29章 — reBot Arm を用いた自律ビジュアル把持の実践：RGB-D カメラ SDK と把持リポジトリのインストール、把持および把持・配置プログラムの実行、位置補正、そしてオプションの GraspNet 点群把持トラック。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章の概要</a>
      <a href="#setup">環境構築</a>
      <a href="#grasping">ビジュアル把持</a>
      <a href="#graspnet">GraspNet</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 29.1 本章の概要

本章では、reBot Arm のビジュアル把持デモをケーススタディとして用い、ロボットのビジュアル把持システムを一通り構築します。

最終的な結果：アームが RGB-D カメラを通して作業空間を観測し、検出モデルでターゲット物体を認識し、深度からターゲットの空間位置を計算し、アームを制御して自動で把持および配置を行います。

この実践では次の内容を扱います：

- RGB-D カメラの導入；
- 検出モデルの実行；
- ビジュアル位置決め；
- ハンドアイキャリブレーション；
- 把持姿勢の計算；
- アーム把持制御。


## 29.2 ハードウェア構成

| コンポーネント | 型番 / 要件 |
| ---- | ---- |
| ロボットアーム | reBot Arm B601（2 構成：DM / RS） |
| 深度カメラ | Orbbec Gemini 2, Intel RealSense D435i / D405 |
| 通信インターフェース | USB2CAN シリアルブリッジ（ロボットアーム用）；USB 3.0（カメラ用） |
| ホスト PC | Ubuntu 22.04+、Python 3.10+、x86_64 |


### 配線

- 深度カメラを USB 3.0 でホストに接続します。
- USB2CAN アダプタをアームの CAN バスに接続します。
- 24V 電源、カメラ、アームがすべて確実に接続されていることを確認します。
- 権限を設定します：

    ```text
    sudo chmod a+rw /dev/bus/usb/*/*   # depth camera USB permission
    sudo chmod 666 /dev/ttyUSB0        # USB2CAN (adjust port as needed)
    ```

<a id="setup"></a>

## 29.3 環境構築

### ステップ 1: ビジュアル把持リポジトリをクローンする

- 公式の Seeed-Projects リポジトリを優先して使用してください。これはビジュアル把持部分のみを含み、アーム制御 SDK は別途インストールする必要があります。

    ```bash
    git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
    cd rebot_grasp
    ```

### ステップ 2: conda 環境を作成・設定する

```bash
conda env create -f environment.yml
conda activate rebotarm
```

- ヒント：別の環境名を使いたい場合は、コマンド内の `rebotarm` を任意の名前に置き換えてください。

### ステップ 3. アーム制御ライブラリをインストールする

```text
git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

- `pip install -e .` で `Multiple top-level packages discovered in a flat-layout` と表示された場合は、`reBotArm_control_py/pyproject.toml` に明示的なパッケージ検出設定を追加し、`pip install -e .` を再実行してください：

    ```toml
    [build-system]
    requires = ["setuptools>=61.0", "wheel"]
    build-backend = "setuptools.build_meta"

    [tool.setuptools.packages.find]
    include = ["reBotArm_control_py*"]
    ```

- ビジュアル把持プログラムはこの SDK 設定を読み取り、対応するアーム制御モードとグリッパーパラメータを自動的に選択します。

### ステップ 4. アームモデルを設定する

- `/rebot_grasp/sdk/reBotArm_control_py/config/` 配下でアームの `rebotarm.yaml` を探します。`hardware_yaml:` をアームモデルに合わせて設定すると、プログラムは対応するモーターハードウェアパラメータを読み込みます。

    ```text
    # reBotArm global config
    # Hardware config (motor type, comm params, PID, etc.)

    hardware_yaml: "rebotarm_rs.yaml"

    # rebotarm_rs.yaml is B601 RS
    # rebotarm_dm.yaml is B601 DM
    ```

### ステップ 5. 深度カメラ SDK をインストールする

- 本プロジェクトは Orbbec Gemini 2 や RealSense D435i / D405 などの RGB-D カメラをサポートします。使用するカメラに対応した SDK をインストールしてください。すでにカメラドライバが現在の環境で正しくインポートできる場合は、このステップをスキップできます。
- **Orbbec Gemini 2**
    - Orbbec Gemini 2 には **pyorbbecsdk**（Orbbec SDK v2 の Python 版）が必要です。事前ビルド済みの Python パッケージをインストールする方法を推奨します：
        - **オプション 1: pip でインストール（推奨）**

            ```bash
            pip install pyorbbecsdk2
            ```

        - **オプション 2: GitHub からビルド**

            ```bash
            # install build deps
            sudo apt-get install -y cmake build-essential libusb-1.0-0-dev

            cd sdk
            git clone https://github.com/orbbec/pyorbbecsdk.git
            cd pyorbbecsdk
            pip install -e .
            ```

        - **中国本土のユーザーは次を利用できます**

            ```bash
            git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
            ```

        - ソースからインストールする場合は、まず CMake を使ってネイティブ拡張をビルドし、`install/lib` に `pyorbbecsdk*.so` と Orbbec 共有ライブラリが含まれていることを確認してから、`pip install -e .` を実行してください。
        - 注意：上記の方法がすべてうまくいかない場合は、Orbbec 公式ドキュメントを参照してください。
        - **インストールを検証する**

            ```bash
            python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
            ```

        - **OrbbecViewer（任意、カメラ検証用）**
            - 事前ビルド済みパッケージをダウンロードし、`OrbbecViewer` を実行して、デモを実行する前にカメラ接続と深度ストリームを確認します。
            - GitHub: [https://github.com/orbbec/OrbbecSDK_v2/releases](https://github.com/orbbec/OrbbecSDK_v2/releases)
            - Gitee: [https://gitee.com/orbbecdeveloper/OrbbecSDK_v2/releases](https://gitee.com/orbbecdeveloper/OrbbecSDK_v2/releases)
- **RealSense D435i / D405**
    - RealSense カメラには通常 `pyrealsense2` が必要で、一般的には pip で直接インストールします：

        ```bash
        pip install pyrealsense2
        python -c "import pyrealsense2; print('pyrealsense2 OK')"
        ```


## 29.4 RGB-D カメラの設置

<div className="image-frame">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-29/ch29-01.png" alt="Hand-eye calibration AX = XB" />
</div>

<div className="image-frame">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-29/ch29-02.png" alt="Hand-eye calibration AX = XB" />
</div>


<a id="grasping"></a>

## 29.5 ビジュアル把持

### メイン把持プログラム

`scripts/main.py` — メイン把持プログラムであり、完全なビジュアル把持パイプラインです：

- RGB-D カメラを初期化し、画像ストリームが利用可能であることを確認
- アームとグリッパーを有効化し、事前高さ位置へ移動
- リアルタイムカメラプレビュー + YOLO 検出とインスタンスセグメンテーション
- OBB の短軸からグリッパーの向きを推定し、深度の分位数から把持高さを推定
- `G` を押してフレームを固定し、ハンドアイ変換でアームの目標姿勢を計算
- アームが事前把持点へ移動 -> 降下 -> グリッパーを閉じる -> 持ち上げる -> 事前位置へ戻る

    ```text
    python scripts/main.py
    ```

### 把持・配置プログラム

`scripts/set.py` — 把持・配置プログラムで、バナナを把持して箱に入れます。

- カメラとアームを初期化し、事前位置へ移動
- リアルタイムカメラプレビュー + YOLO 検出とインスタンスセグメンテーション
- `G` を押してフレームを固定し、ハンドアイ変換でアームの目標姿勢を計算
- アームがバナナを把持して持ち上げる
- アームがバナナを箱に入れ、初期姿勢に戻る
- `Q` を押して終了；アームはゼロ位置に戻ります。

    ```text
    python scripts/set.py
    ```

### 位置補正

キャリブレーション後もアームの把持精度が十分でない場合は、`config/default.yaml` を開き、`calibration.hand_eye_compensation_m` 内の `X（前後）、Y（左右）、Z（上下）` の値を調整して位置補正を行ってください。

```yaml
------------------------------------
calibration:
  aruco:
    marker_length_m: 0.1
    dict_id: 0
    target_marker_id: 0
  hand_eye_method: TSAI
  hand_eye_compensation_m:
    x: 0.00
    y: 0.00
    z: -0.02
------------------------------------
```

<a id="graspnet"></a>

## 29.6 3D 点群把持【選択】

### GraspNet とは？

GraspNet は主に、「物体の 3D 形状が与えられたとき、ロボットはどこをどのような姿勢で把持すべきか？」という問いに答えます。

GraspNet は点群ベースのロボット把持手法、より正確には 3D 点群に対する 6 自由度把持姿勢の生成・評価フレームワークです。要するに、点群は「ロボットが見ている 3D 世界のデータ」であり、GraspNet は「その 3D データからロボットが最適な把持姿勢を見つける方法」です。

入力：RGB-D データ -> 点群 -> GraspNet -> 把持姿勢

出力：6 自由度の把持姿勢 $G=(x,y,z,R)$。内容は次の通りです：

- 位置：アームのグリッパーがどこへ行くべきか：

    ```text
    x,y,z
    ```

- 姿勢：グリッパーがどの方向を向くべきか：

    ```text
    roll,pitch,yaw
    ```

- 最後にアームへ「この方向から把持せよ」と指示します

### GraspNet の設定

物体の把持姿勢をより正確に推定するために、本プロジェクトでは [graspnet-baseline](https://github.com/graspnet/graspnet-baseline) を適用し、アームの把持性能を向上させています。

GraspNet の `pointnet2` / `knn` 拡張には CUDA コンパイラが必要です。開始前に `nvcc` が見つかること、およびその CUDA バージョンが PyTorch のビルドに使用されたバージョンと一致していることを確認してください：

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

`nvcc` が存在しない、またはその CUDA バージョンが `torch.version.cuda` と異なる場合は、PyTorch の CUDA バージョンに一致する CUDA コンパイラをインストールしてください。例えば、PyTorch が `13.0` と表示している場合：

```bash
conda install -c nvidia cuda-nvcc=13.0
```

この 2 つは一致している必要があります。一致しない場合、`pointnet2` / `knn` のコンパイル時に `The detected CUDA version (...) mismatches the version that was used to compile PyTorch (...)` というエラーが発生します。

```bash
cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline

# after installing PyTorch for your CUDA version, install GraspNet runtime deps
pip install open3d tensorboard Pillow tqdm

# configure CUDA build paths before compiling local ops.
export CUDA_HOME=$CONDA_PREFIX
export TORCH_CUDA_ARCH_LIST="12.0"
export CPATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPATH
export CPLUS_INCLUDE_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPLUS_INCLUDE_PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/lib:$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

# compile CUDA ops
cd pointnet2
pip install . --no-build-isolation
cd ../knn
pip install . --no-build-isolation
cd ..

# install GraspNet API
git clone https://github.com/graspnet/graspnetAPI.git
cd graspnetAPI
sed -i "s/'sklearn'/'scikit-learn'/" setup.py
pip install .
cd ../../..
```

作業を始める前に知っておくべき落とし穴が 3 つあります：

| 症状 | 対処方法 |
| :--- | :--- |
| `python setup.py install` が CUDA / PyTorch のバージョンエラーを出す | 拡張が conda 環境内の既存の PyTorch と CUDA を再利用できるように、`pip install . --no-build-isolation` を使用します |
| コンパイル時に `fatal error: cusparse.h: No such file or directory` と表示される | `find $CONDA_PREFIX -name cusparse.h` を実行し、そのディレクトリを `CPATH` / `CPLUS_INCLUDE_PATH` に追加します。conda の `cuda-toolkit` を使う場合、通常は上記の pip の `nvidia/cu13/include` ではなく `$CONDA_PREFIX/targets/x86_64-linux/include` です |
| `sklearn` パッケージ名に関する警告 | 上記の `sed` によって `scikit-learn` にリネームされます。依存スタックが変わらない限りは `numpy==1.23.4` の固定を維持してください。`transforms3d==0.3.1` は依然として `np.float` のような NumPy エイリアスを使用しているためです |

#### 学習済みモデルの設定

- graspnet-baseline リポジトリから公式の GraspNet 学習済み重み（[Google](https://drive.google.com/file/d/1hd0G8LN6tRpi4742XOTEisbTXNZ-1jmk/view)、[Baidu](https://pan.baidu.com/s/1Eme60l39tTZrilF0I86R5A)）をダウンロードし、`checkpoint-rs.tar` を次の場所に配置します：

    ```bash
    sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
    ```

- その後、`config/default.yaml` を確認します：

    ```yaml
    graspnet:
      checkpoint: "checkpoint-rs.tar"
    ```

- `checkpoint` は 3 つの形式をサポートします：ファイル名のみの場合は `sdk/graspnet-baseline/checkpoints/` 以下を検索します。相対パスはプロジェクトルートから解決され、絶対パスはそのまま使用されます。

### 実行とデバッグ

1. GraspNet カメラ推定デモ — `scripts/graspnet_camera_demo.py`
- アームを接続せずに、RGB-D カメラのみを用いて GraspNet 6D 把持推定を実行します。このスクリプトはライブカメラプレビューを維持し、YOLO ボックスで対象領域を選択し、GraspNet のシーン全体の候補からそのバウンディングボックス内の実行可能な把持をフィルタリングします。`G` または `Space` で現在フレームを推論し、`R` でライブプレビューを再開、`Q` または `Esc` で終了します。推論後は、Open3D を通じて点群と把持候補を表示します。

    ```bash
    python scripts/graspnet_camera_demo.py
    ```

2. GraspNet アーム把持プログラム — `scripts/grasp.py`
- `graspnet_camera_demo.py` の推定結果に基づいてアームを駆動して実行します。YOLO が対象を選択し、GraspNet が 6D 把持姿勢を出力し、ハンドアイキャリブレーションでそれをアームのベース座標系に変換し、その後 IK 到達可能性をチェックして、プレグラスプ／グラスプ／リトリートを実行します。デバッグ中は、`--dry-run` を使用してターゲット姿勢と候補フィルタリングのみを出力することを推奨します。

    ```bash
    python scripts/grasp.py --dry-run
    python scripts/grasp.py --target-class "light blue coffee cup"
    ```

---

</div>
