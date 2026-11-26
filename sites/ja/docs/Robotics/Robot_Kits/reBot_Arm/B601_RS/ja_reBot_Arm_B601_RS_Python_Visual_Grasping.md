---
description: Orbbec Gemini 336 と YOLOE を使用して、reBot Arm B601-RS 上でテーブルトップのビジュアルグラスピングをセットアップします。OBB グリップのプレビュー、ハンドアイキャリブレーションの実行、任意で AnyGrasp または GraspNet-Baseline バックエンドを用いたアームの動作が可能です。
title: reBot Arm B601-RS マルチバックエンド・ビジュアルグラスピング
sidebar_label: reBot Arm B601-RS マルチバックエンド・ビジュアルグラスピング
keywords:
  - reBot Arm B601-RS
  - RGB-D
  - YOLOE
  - OBB
  - AnyGrasp
  - GraspNet
  - ハンドアイキャリブレーション
slug: /rebot_arm_b601_rs_python_visual_grasping
sku: 100019336
last_update:
  date: 2026-11-24
  author: LiJie
translation:
  skip: [zh-CN]
createdAt: '2026-11-23'
updatedAt: '2026-11-24'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_python_visual_grasping/
---

import '/src/css/rebot-wiki-style.css';
import styles from '@site/src/components/robotics/rebot-grasping-demo.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="text--center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp" alt="reBot Arm B601-RS" width={800} height={586} style={{ height: 'auto' }} />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true" />
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>今すぐ入手</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7" />
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4" />
    </svg>
  </a>
</div>

<p className="text--center">
  <img src="https://img.shields.io/badge/Camera-Gemini%20336-teal.svg" alt="Orbbec Gemini 336 RGB-D camera" />{' '}
  <img src="https://img.shields.io/badge/Python-3.10-blue.svg" alt="Python 3.10" />{' '}
  <img src="https://img.shields.io/badge/Version-v0.1.0-brightgreen.svg" alt="Version v0.1.0" />{' '}
  <img src="https://img.shields.io/badge/Platform-Ubuntu%20x86--64-orange.svg" alt="Ubuntu x86-64" />
</p>

<p className="text--center"><strong>AnyGrasp · GraspNet · OBB · ハンドアイキャリブレーション · YOLOE</strong></p>

このチュートリアルでは、reBot Arm B601-RS のエンドエフェクタに取り付けた Orbbec Gemini 336 を使用して、テーブル上の物体を認識して把持します。YOLOE はテキストラベルを用いて物体をセグメンテーションします。グラスプバックエンドは、対象の輪郭と深度データから把持姿勢を推定します。ハンドアイキャリブレーション後、ソフトウェアは候補をロボットベース座標系に変換し、作業空間の制限と逆運動学（IK）をチェックします。

まず、フィルタリングされた Oriented Bounding Box（OBB）バックエンドからの把持候補をプレビューします。次にカメラをキャリブレーションし、アームで把持を試します。AnyGrasp または GraspNet-Baseline を使用して、ポイントクラウドから 6 自由度の把持姿勢を推定します。ROS 2 のピックアンドプレースワークフローについては、[B601-RS Visual Grasping Demo](https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_grasping_demo/) の ROS 2 手法を参照してください。

## ハードウェアとホストを準備する

- **ロボットアーム。** reBot Arm B601-RS、本体に適したグリッパ、電源、設定済みの USB-CAN アダプタを用意します。まず、組み立て、ゼロ位置の設定、および基本的な通信確認を完了してください。[B601-RS クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/)
- **カメラ。** Orbbec Gemini 336、USB 3.0 データケーブル、およびエンドエフェクタ用カメラマウントを使用します。本プロジェクトは Orbbec Gemini 2、RealSense D405、RealSense D435i 用のドライバも提供します。カメラまたはマウントを交換した場合は、カメラビューを再確認し、ハンドアイキャリブレーションをやり直してください。[Camera SDK setup](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup.md#cameras)
- **ホスト。** グラフィカルデスクトップ、Git、curl を備えた Ubuntu x86-64 マシンを使用します。スクリプトは Python 3.10 を使用する `rebot` という名前の Conda 環境を作成します。AnyGrasp と GraspNet-Baseline には互換性のある NVIDIA GPU とドライバが必要です。
- **テスト用オブジェクトとキャリブレーションボード。** 設定済みクラスリストに含まれるバナナなどのオブジェクトを用意します。ArUco キャリブレーションボードを作業面に固定します。[GitHub 上のキャリブレーションボード](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/tree/main/examples/hand_eye/boards)

## 1. 環境と SDK をセットアップする

Ubuntu のターミナルからプロジェクトをクローンします。残りのコマンドはリポジトリのルートから実行します。

```bash
git clone https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping.git
cd Rebot-Arm-B601-Visual-Grasping
```

`config/default.yaml` を開き、`camera.type` を使用するデバイスに合わせて設定します。Gemini 336 のデフォルトは `orbbec_gemini336`、640 × 480、30 FPS です。同じモデルのカメラを複数使用する場合は `camera.serial` を設定します。対応するドライバをインストールするため、セットアップスクリプトを実行する前にモデルを選択してください。

**自動セットアップか手動セットアップのどちらかを選びます。** オプション A は、すべてのグラスプバックエンドと B601 アームサポートをインストールする一般的な選択肢です。オプション B は、依存関係をコンポーネントごとにインストールする場合に使用します。

<div className={styles.tutorials}>
<Tabs defaultValue="automatic" queryString="grasping-setup">

<TabItem value="automatic" label="Automatic setup">

<h3 id="option-a--automatic-setup">オプション A — 自動セットアップ</h3>

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>依存関係を確認してインストールする</h4>

フルセットアップには、互換性のある NVIDIA GPU とドライバが必要です。`nvidia-smi -L` を実行して、ホストが GPU を認識していることを確認します。その後、初期チェック、セットアップスクリプト、インストール後チェックを順に実行します。初期チェックでは不足している依存関係が報告される場合があります。セットアップコマンドを続行して、それらをインストールしてください。セットアップ中はカメラとアームを接続しておく必要はありません。

```bash
bash scripts/check_env.sh
bash scripts/setup_env.sh
bash scripts/check_env.sh
```

- **インストール範囲。** デフォルトのセットアップでは、B601 制御 SDK、カメラドライバ、YOLOE、およびすべてのグラスプバックエンドを構成します。また、必要な CUDA オペレータもビルドします。単一のバックエンドのみを使用する場合は、両方のスクリプトに `--backend obb`、`--backend anygrasp`、または `--backend graspnet` を指定します。B601 制御用には `--robot` を追加します（例：`--backend obb --robot`）。GraspNet の重みのダウンロードに失敗した場合は、`bash scripts/setup_env.sh --checkpoint-file /path/to/checkpoint-rs.tar` をローカルコピーへのパスに向けてください。
- **変更内容の確認。** スクリプトは不足しているコンポーネントをインストールし、既存の Git SDK を再利用します。変更内容を表示し、依存関係のバージョン、Conda ビルド、または SDK ブランチを切り替える前に確認を求めます。`y` を入力して確定します。Enter キーを押す、`n` を入力する、または非対話モードで実行すると、これらの変更はスキップされます。`----` の下に適用された変更が表示されます。
- **結果の確認。** `----` の下に表示されるサマリを確認します。終了コード `3` は `[MANUAL]` 項目のみが残っていることを意味します。AnyGrasp のライセンスと重みを設定し、セクション 3 でハンドアイ行列を生成してから、同じオプションでチェックを再実行してください。

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>環境を有効化する</h4>

スクリプトが Miniforge をインストールした場合は、まず現在のターミナルで `source ~/miniforge3/etc/profile.d/conda.sh` を実行します。その後、環境を有効化します。

```bash
conda activate rebot
```

</div>
</div>

</div>

</TabItem>

<TabItem value="manual" label="Manual setup">

<h3 id="option-b--manual-setup">オプション B — 手動セットアップ</h3>

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

#### 環境を作成し PyTorch をインストールする

Conda が利用可能なターミナルで次のコマンドを実行します。`environment.yml` ファイルでは、Python 3.10、バージョン 2 未満の NumPy、および B601 用の Pinocchio 3.9.0 を指定しています。すでに `rebot` 環境がある場合は、それを有効化し、環境ファイルと依存関係を照合してください。

```bash
conda env create -f environment.yml
conda activate rebot
```

<Tabs defaultValue="cuda">

<TabItem value="cuda" label="NVIDIA GPU">

すべてのバックエンドを使用する場合、または AnyGrasp や GraspNet を実行する場合は、GPU 版の PyTorch をインストールします。本プロジェクトでは CUDA 12.1 を用いた PyTorch 2.5.1 を検証済みです。チェックでは `12.1` と `True` が表示されるはずです。

```bash
python -m pip install 'torch==2.5.1+cu121' 'torchvision==0.20.1+cu121' 'torchaudio==2.5.1+cu121' \
  --index-url https://download.pytorch.org/whl/cu121
python -c 'import torch; print(torch.__version__, torch.version.cuda, torch.cuda.is_available())'
```

</TabItem>

<TabItem value="cpu" label="CPU">

CPU のみのシステムで OBB を使用する場合は、CPU 版の PyTorch をインストールします。

```bash
python -m pip install -r requirements-pytorch.txt --index-url https://download.pytorch.org/whl/cpu
```

</TabItem>

</Tabs>

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

#### カメラドライバ、YOLOE、B601 SDK をインストールする

Orbbec Gemini 336 の場合は `python -m pip install 'pyorbbecsdk2==2.0.18'` を実行します。RealSense D405 または D435i の場合は `python -m pip install 'pyrealsense2>=2.54'` を実行します。USB アクセスを構成するには、カメラメーカーの手順に従ってください。[Camera SDK setup](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup.md#cameras)

```bash
python -m pip install -e '.[obb,yolo,visualization]' scipy
python -m pip install 'git+https://github.com/ultralytics/CLIP.git@7ffa84b3bfa40c42ecc1c77147a855e69cb2dd40'
mkdir -p models
curl -fL --retry 3 -o models/yoloe-26s-seg.pt \
  https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26s-seg.pt
curl -fL --retry 3 -o mobileclip2_b.ts \
  https://github.com/ultralytics/assets/releases/download/v8.4.0/mobileclip2_b.ts
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
python -m pip install 'motorbridge==0.6.0' 'meshcat>=0.3.2' 'matplotlib>=3.10'
```

アームで使用するバックエンドが OBB のみの場合は、`bash scripts/check_env.sh --backend obb --robot` を実行して依存関係を確認し、セクション 2 に進みます。ハンドアイ行列はセクション 3 で生成します。

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">

#### AnyGrasp と GraspNet 用に CUDA ツールチェーンをセットアップする

アクティブな `rebot` 環境内で、CUDA 12.1 と互換性のあるコンパイラとツールチェーンをインストールします。続行する前に、`nvcc --version` の出力に `release 12.1` と表示されることを確認してください。

```bash
conda install --override-channels -c conda-forge 'gcc_linux-64=12' 'gxx_linux-64=12'
conda install --override-channels -c nvidia/label/cuda-12.1.1 -c conda-forge 'cuda-toolkit=12.1'
conda activate rebot
export CUDA_HOME="$CONDA_PREFIX"
export PATH="$CUDA_HOME/bin:$PATH"
export MAX_JOBS=2
nvcc --version
python -m pip install wheel ninja
python -m pip install 'transforms3d>=0.4.2' \
  'graspnetAPI @ git+https://github.com/graspnet/graspnetAPI.git@eb57dd2092d8dbe05312a29c3d0c22f3226efbfc'
```

**AnyGrasp。** SDK とその PointNet2 拡張機能をインストールし、その後 MinkowskiEngine を OpenBLAS でビルドします。必要なファイルを配置するには、[AnyGrasp license and weights](#AnyGrasp-license-and-weights) に従ってください。

```bash
git clone https://github.com/graspnet/anygrasp_sdk.git sdk/anygrasp_sdk
git clone --branch cuda-12-1 https://github.com/chenxi-wang/MinkowskiEngine.git sdk/MinkowskiEngine-cuda-12-1
conda install --override-channels -c conda-forge 'openblas>=0.3.30,<0.4' 'numpy<2'
python -c 'import ctypes, sys; ctypes.CDLL(sys.prefix + "/lib/libopenblas.so")'
python -m pip install --no-build-isolation --no-deps ./sdk/anygrasp_sdk/pointnet2
(
  cd sdk/MinkowskiEngine-cuda-12-1 &&
  python setup.py bdist_wheel --force_cuda --blas=openblas \
    --blas_include_dirs="$CONDA_PREFIX/include" --blas_library_dirs="$CONDA_PREFIX/lib" &&
  python -m pip install --no-deps dist/*.whl
)
```

**GraspNet-Baseline。** GraspNet-Baseline SDK の個別のサブディレクトリに PointNet2 と kNN の拡張機能をインストールします。これにより、AnyGrasp と GraspNet が同じ `rebot` 環境内でそれぞれ独自の PointNet2 ビルドを使用できます。RealSense の事前学習済み重みをダウンロードし、`sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar` に保存します。[Official GraspNet-Baseline pretrained weights](https://github.com/graspnet/graspnet-baseline#training-and-testing)

```bash
git clone https://github.com/graspnet/graspnet-baseline.git sdk/graspnet-baseline
baseline="$PWD/sdk/graspnet-baseline"
python -m pip install --no-build-isolation --no-deps --upgrade --target "$baseline/pointnet2" "$baseline/pointnet2"
touch "$baseline/pointnet2/pointnet2/__init__.py"
python -m pip install --no-build-isolation --no-deps --upgrade --target "$baseline/knn" "$baseline/knn"
mkdir -p "$baseline/checkpoints"
```

手動セットアップをすべて完了したら、`bash scripts/check_env.sh` を実行します。バックエンドの一部のみをセットアップした場合は、`--backend obb`、`--backend anygrasp`、または `--backend graspnet` を使用して、該当する依存関係を確認します。アームも確認するには `--robot` を追加します。[Project manual setup guide](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/README.md#2-manual-environment-and-sdk-setup)

</div>
</div>

</div>

</TabItem>

</Tabs>
</div>

### AnyGrasp license and weights

AnyGrasp を使用するには、公式のライセンスと検出用重みを取得し、`bash scripts/anygrasp_license.sh` で設定します。この手順は自動セットアップと手動セットアップの両方に適用されます。引数なしでスクリプトを実行すると、対話式メニューが開きます。

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>マシンの feature ID を取得する</h4>

推論を実行するマシン上で、デプロイ時に使用するネットワークインターフェースを使用します。`1` を選択して `feature_id` を取得し、それを使ってライセンスと対応する重みをリクエストします。[Official AnyGrasp license registration](https://github.com/graspnet/anygrasp_sdk/tree/main/license_registration)

```bash
bash scripts/anygrasp_license.sh 1
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>ライセンスと重みをインストールする</h4>

公式ライセンスの ZIP または展開済みライセンスディレクトリを、`checkpoint_detection.tar` と同じ配布ディレクトリに配置します。`2` を選択して両方をインストールします。`/path/to/delivery` は、配布ディレクトリへのパスに置き換えてください。

```bash
bash scripts/anygrasp_license.sh 2 "/path/to/delivery"
```

スクリプトは公式 SDK でライセンスを検証し、重みが読み取り可能であることを確認し、`config/backends/anygrasp.yaml` に従ってインストールします。フィルタ済みバックエンドが別の SDK または重みパスを使用する場合は、`bash scripts/anygrasp_license.sh --backend anygrasp_filtered 2 "/path/to/delivery"` を実行して `config/backends/anygrasp_filtered.yaml` を使用します。必要に応じて、環境セットアップとオプション `2` により、アクティブな Python ABI 用の `gsnet.so` 拡張機能が `grasp_detection/` 内の `license/` の隣に配置されます。

デフォルトでは、ライセンスは `sdk/anygrasp_sdk/grasp_detection/license/` に、検出用重みは `sdk/anygrasp_sdk/grasp_detection/log/checkpoint_detection.tar` に配置されます。

```text
sdk/anygrasp_sdk/grasp_detection/
├── license/
│   ├── licenseCfg.json
│   ├── *.lic
│   ├── *.public_key
│   └── *.signature
└── log/
    └── checkpoint_detection.tar
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>インストールを検証する</h4>

`----` の下に表示されるライセンスと重みのステータスを確認します。`[PARTIAL]` と終了コード `3` は、ライセンスは準備完了だが検出用重みがまだ不足していることを意味します。重みが用意できたら、`checkpoint_detection.tar` へのパスをオプション `2` に直接渡します。スクリプトが `[ERROR]` を報告した場合は、マシン ID の不一致や重みが読み取れないなど、報告された原因を確認してください。その後、AnyGrasp の環境チェックを再実行します。

```bash
bash scripts/check_env.sh --backend anygrasp
```

チェックに合格したら、セクション 5 の AnyGrasp カメラプレビューを使用して、モデルの読み込みと推論を確認します。

</div>
</div>

</div>

## 2. カメラフレームと把持候補をプレビューする

サンプルを起動する前に `conda activate rebot` を実行します。サンプルは `scripts/run_python.sh` を使用して、その環境から Python を実行します。デフォルトでは、ランチャーは継承された `PYTHONPATH`、`LD_LIBRARY_PATH`、およびユーザーサイトの Python パッケージから `rebot` を分離するため、ROS Humble や他の環境から依存関係が読み込まれないようにします。[Python launcher](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup.md#python-launcher)

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>RGB-D フレームを記録する</h4>

カメラを接続してフレームを記録します。コマンドは `.npz` ファイルを書き出すはずです。

```bash
bash examples/rgbd_capture/run.sh --output "outputs/rgbd/frame-$(date +%s%N).npz"
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>フィルタ済み OBB プレビューを開く</h4>

ターゲットを画像の中央に配置し、フィルタ済み OBB プレビューを開きます。サンプルのデフォルトは `yellow banana` です。`--target-class` を使用して、設定済みリストから別のクラスを選択します。このコマンドはカメラのみに接続します。

```bash
bash examples/obb_filtered/run.sh
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>把持候補を比較する</h4>

画像ウィンドウで **G** を押してスナップショットを保存し、同じフレームに対する生の候補とフィルタ済み候補を比較します。マスクがターゲットを覆っていること、フィルタ済みの把持中心とグリッパ開口軸が物体に適していることを確認します。終了するには **Q** または **Esc** を押します。セグメンテーションや点群の品質を確認するには、`bash examples/camera_check/run.sh --target-class "yellow banana"` を実行します。[Filtered OBB details](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/obb_filtered.md)

</div>
</div>

</div>

## 3. ハンドアイキャリブレーションを実行する

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>キャリブレーションボードを準備する</h4>

GitHub 上のキャリブレーションボードディレクトリを開き、`aruco_100mm.pdf` をダウンロードして 100% スケールで印刷します。黒い正方形の一辺の長さを測定します。`config/default.yaml` で、`calibration.aruco.marker_length_m` をその長さ（メートル単位）に設定します。デフォルトの長さは `0.100` m で、マーカー ID は `0` です。カメラが複数の姿勢から見えるように、ボードを作業面にしっかり固定します。[ArUco calibration board downloads](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/tree/main/examples/hand_eye/boards)

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>マーカー検出を確認する</h4>

カメラでマーカーを確認します。ターミナルには、10 フレームのうち何フレームに設定済みマーカーの検出が含まれているかが報告されます。検出が安定しない場合は、照明、距離、またはボードの角度を調整してください。

```bash
bash examples/hand_eye/run.sh --check-marker
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>アーム接続を確認する</h4>

`sdk/reBotArm_control_py/config/rebotarm.yaml` で、`hardware_yaml: rebotarm_rs.yaml` が設定されていることを確認します。そのハードウェアプロファイルの CAN インターフェースと運動学モデルを確認します。サンプルの `can0` は、設定したインターフェース名に置き換えてください。[B601-RS control SDK and CAN setup](https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_pinocchio_meshcat/)

```bash
ip -details link show can0
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">
    <h4>自動キャリブレーションを実行する</h4>

:::warning
自動キャリブレーションでは、アームがあらかじめ設定された軌道に沿って動作します。ベースを固定し、動作範囲全体から障害物を取り除き、カメラケーブルに十分な余裕を持たせてください。必要に応じてアクチュエータの電源を切れるように準備しておきます。再キャリブレーションする前に、既存の `hand_eye.npz` をバックアップしておくこともできます。
:::

自動キャリブレーションを開始します。プログラムは、エンドエフェクタの姿勢と、カメラで観測されたマーカーの姿勢を対応付けます。サンプルを収集した後、カメラからエンドエフェクタまでの固定変換を求めます。

```bash
bash examples/hand_eye/run.sh
```

<div className="text--center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_python_visual_grasping/Cal.gif" alt="reBot Arm B601-RS automatic hand-eye calibration demo" width={1138} height={640} loading="lazy" style={{ height: 'auto' }} />
</div>

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">5</span>
  <div className="rebot-step-content">
    <h4>キャリブレーションファイルを確認する</h4>

ターミナルが `[OK] Saved to .../hand_eye.npz` と報告していることを確認します。Gemini 336 の出力先は `config/calibration/orbbec_gemini336/hand_eye.npz` です。他のカメラでは、出力は `config/calibration/` 配下の対応するモデルディレクトリに保存されます。`config/default.yaml` で `calibration.hand_eye_path` を確認します。相対パスは `config/` から解決されます。その後、アームの依存関係とキャリブレーションファイルを確認します。

```bash
bash scripts/check_env.sh --backend obb --robot
```

</div>
</div>

</div>

## 4. フィルタ済み OBB 把持を実行する

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>ターゲットとアームの設定を確認する</h4>

プレビューでターゲットが継続的に検出されていることを確認します。`robot.ready_pose`、グリッパの向き、およびワークスペースの制限を確認します。グリッパを変更している場合は、`planning.T_grasp_tcp` も確認してください。

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>把持を実行する</h4>

:::warning
`--execute` はアームを有効化し、起動時にレディポーズへ移動させます。**G** を押すと把持が開始されます。コマンドを実行する前に、動作範囲内に人、ケーブル、障害物がないことを確認してください。
:::

```bash
bash examples/obb_filtered/run.sh --execute --target-class "yellow banana"
```

アームがレディポーズで停止するまで待ちます。画像ウィンドウで **G** を押して現在のシーンをキャプチャし、チェックを通過したフィルタ済み把持候補を 1 つ選択します。ターゲットや実行可能な候補が見つからない場合、プログラムは試行をスキップします。セッションを終了するには **Q** または **Esc** を押します。

<div className="text--center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_python_visual_grasping/obb.gif" alt="reBot Arm B601-RS filtered OBB grasp demo" loading="lazy" style={{ height: 'auto' }} />
</div>

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>結果を確認する</h4>

ターミナルに表示された実行ディレクトリを開きます。`result/snapshot-NNN/` ディレクトリには、キャプチャされた `frame.npz`、`result.json` 内の把持候補とプラン、`comparison.png` と `comparison.json` における生データとフィルタ済み結果の比較が含まれます。把持試行が開始されると、プログラムは `execution.json` も書き込みます。`object_held` フィールドには、コントローラが報告する把持状態が記録されます。

</div>
</div>

</div>

## 5. ポイントクラウド把持バックエンドを試す

<div className={styles.tutorials}>
<Tabs defaultValue="anygrasp" queryString="grasping-backend">

<TabItem value="anygrasp" label="AnyGrasp">

<h3 id="anygrasp">AnyGrasp</h3>

セクション 1 で環境セットアップを完了し、[AnyGrasp license and weights](#anygrasp-license-and-weights) から取得したファイルを配置したら、カメラプレビューを開始します。

```bash
bash examples/anygrasp_filtered/run.sh --target-class "yellow banana"
```

画像ウィンドウで **G** を押してスナップショットを保存します。左ペインには生のポイントクラウド参照が表示され、右ペインにはフィルタ済み結果が表示されます。デフォルトのクラス順序は `pen`、`orange`、`yellow banana` です。画像ウィンドウで **1**、**2**、**3** を押してクラスを切り替えます。プレビューとハンドアイキャリブレーションを確認したら、プレビューコマンドに `--execute` を追加できます。`bash scripts/check_env.sh --backend anygrasp --robot` でアームの依存関係を確認します。実行モードでは、アームは起動時にレディポーズへ移動します。**G** を押すと、ワークスペースと IK チェックを通過した右ペインの候補を実行します。[Filtered AnyGrasp details](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/examples/anygrasp_filtered/README.md)

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_python_visual_grasping/any.gif" alt="AnyGrasp demo 1" width={1138} height={640} loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_python_visual_grasping/anygrasp.gif" alt="AnyGrasp demo 2" width={1024} height={640} loading="lazy" />
  </figure>
</div>

</TabItem>

<TabItem value="graspnet" label="GraspNet-Baseline">

<h3 id="graspnet-baseline">GraspNet-Baseline</h3>

セクション 1 で GraspNet-Baseline の環境と重みをセットアップした後、依存関係を確認し、カメラプレビューを開きます。

```bash
bash scripts/check_env.sh --backend graspnet
bash examples/graspnet_camera/run.sh
```

カメラウィンドウで **G** または **Space** を押して候補を生成します。**R** を押すとライブ映像を再開し、**Q** または **Esc** で終了します。アーム用のエントリポイントは `bash examples/graspnet_grasp/run.sh --target-class "yellow banana"` です。まずカメラプレビュー、ハンドアイキャリブレーション、アームチェックを完了してください。このコマンドは、`--dry-run` を渡した場合も含め、起動時にアームをレディポーズへ移動させます。[GraspNet arm example](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/examples/graspnet_grasp/README.md)

</TabItem>

</Tabs>
</div>

## トラブルシューティング

- **カメラが記録できない。** `camera.type`、シリアル番号、USB パーミッションを確認します。カメラが選択した解像度とフレームレートをサポートしていることを確認し、セクション 2 のキャプチャコマンドを再実行します。
- **G を押してもアームが動かない。** `--execute` を指定したか確認します。`result.json` とターミナルログを確認し、検出器がターゲットを見逃したのか、ポイントクラウドが品質チェックに失敗したのか、候補がワークスペース外だったのか、あるいは IK が姿勢を到達不能と報告したのかを確認します。
- **画像上では候補が正しく見えるが、把持位置がずれている。** カメラマウントが動いていないか、ハンドアイ行列が現在のカメラに対応しているか、`planning.T_grasp_tcp` が現在のグリッパと一致しているかを確認します。接近方向に沿ったオフセットを確認した後は、フィルタ済みバックエンドで `--insertion-depth-mm` を使用して、その実行に対する追加挿入距離をミリメートル単位で上書きします。フィルタ済み OBB のデフォルトは 0 mm、フィルタ済み AnyGrasp のデフォルトは 5 mm です。調整のたびに候補と、グリッパとテーブルの間のクリアランスを確認してください。
- **環境チェックが `[MANUAL]` と報告する。** 終了コード `3` は、AnyGrasp ライセンス、検出用重み、ハンドアイ行列など、残りの項目を手動で用意する必要があることを意味します。ファイルを追加し、同じ引数でチェックを再実行します。[Environment and SDK troubleshooting](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup.md)
- **古いスクリプトが見つからない。** 各サンプルは、そのディレクトリ内の `run.sh` ファイルから開始してください。互換性のためのランチャーは `scripts/legacy/` 配下にあり、例えば `bash scripts/legacy/anygrasp.sh` です。`bash scripts/run_python.sh -m rebot_grasp --help` を実行して、プロジェクトの CLI オプションを確認します。

エントリポイントと座標系規約の完全な一覧については、[example index](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/examples/README.md) と [project architecture](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/architecture.md) を参照してください。
