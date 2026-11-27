---
description: Orbbec Gemini 336 と YOLOE を搭載した reBot Arm B601-RS で、テーブルトップのビジュアルグラスピングをセットアップします。OBB グリップのプレビュー、ハンドアイキャリブレーションの実行、任意で AnyGrasp または GraspNet-Baseline バックエンドを用いたアームの動作が可能です。
title: reBot-RS マルチバックエンド・ビジュアルグラスピング
sidebar_label: reBot-RS マルチバックエンド・ビジュアルグラスピング
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
updatedAt: '2026-11-25'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_python_visual_grasping/
---

import '/src/css/rebot-wiki-style.css';
import GraspingTabs from '@site/src/components/robotics/RebotGraspingTabs';
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

このチュートリアルでは、reBot Arm B601-RS のエンドエフェクタに取り付けた Orbbec Gemini 336 を使用して、テーブル上の物体を認識し把持します。YOLOE はテキストラベルを用いて物体をセグメンテーションします。グラスプバックエンドは、対象の輪郭と深度データから把持姿勢を推定します。ハンドアイキャリブレーション後、ソフトウェアは候補をロボットベース座標系に変換し、作業空間の制限と逆運動学（IK）をチェックします。

まず、フィルタリングされた Oriented Bounding Box（OBB）バックエンドからの把持候補をプレビューします。次にカメラをキャリブレーションし、アームで把持を試します。AnyGrasp または GraspNet-Baseline を使用して、ポイントクラウドから 6 自由度の把持姿勢を推定します。ROS 2 のピックアンドプレースワークフローについては、[B601-RS Visual Grasping Demo](https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_grasping_demo/) の ROS 2 手法を参照してください。

## ハードウェアとホストを準備する

- **ロボットアーム。** reBot Arm B601-RS、本体に適したグリッパ、電源、設定済みの USB-CAN アダプタを用意します。まず、組み立て、ゼロ位置の設定、および基本的な通信チェックを完了してください。[B601-RS クイックスタート](https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/)
- **カメラ。** Orbbec Gemini 336、USB 3.0 データケーブル、エンドエフェクタ用カメラマウントを使用します。本プロジェクトは Orbbec Gemini 2、RealSense D405、RealSense D435i 用のドライバも提供しています。カメラまたはマウントを交換した場合は、カメラビューを再確認し、ハンドアイキャリブレーションをやり直してください。[Camera SDK setup](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup.md#cameras)
- **ホスト。** グラフィカルデスクトップ、Git、curl を備えた Ubuntu x86-64 マシンを使用します。スクリプトは Python 3.10 を使用する `rebot` という名前の Conda 環境を作成します。AnyGrasp と GraspNet-Baseline には、互換性のある NVIDIA GPU とドライバが必要です。
- **テスト用オブジェクトとキャリブレーションボード。** バナナ、または設定済みクラスリストに含まれる別のオブジェクトを用意します。ハンドアイキャリブレーションには、ArUco キャリブレーションボードを作業面に固定します。[100 mm ArUco ボード（PDF）をダウンロード](https://raw.githubusercontent.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/main/examples/hand_eye/boards/aruco_100mm.pdf)

## 1. 環境と SDK をセットアップする

Ubuntu のターミナルからプロジェクトをクローンします。残りのコマンドはリポジトリのルートから実行します。

```bash
git clone https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping.git
cd Rebot-Arm-B601-Visual-Grasping
```

`config/default.yaml` を開き、`camera.type` を使用するデバイスに合わせて設定します。Gemini 336 のデフォルトは `orbbec_gemini336`、640 × 480、30 FPS です。同じモデルのカメラを複数台使用する場合は、`camera.serial` を設定します。対応するドライバをインストールするため、セットアップスクリプトを実行する前にモデルを選択してください。

**自動セットアップか手動セットアップのどちらかを選択します。** 自動セットアップでは、CPU 上での OBB カメラプレビューから、すべてのグラスプバックエンドまで、必要なものをインストールできます。コンポーネントごとに依存関係をインストールしたい場合は、手動セットアップを選択します。

<div className={styles.page}>
<GraspingTabs defaultValue="automatic" queryString="grasping-setup">

<TabItem value="automatic" label="自動セットアップ">

<h3 id="option-a--automatic-setup">オプション A — 自動セットアップ</h3>

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>依存関係を確認してインストールする</h4>

以下のコマンドセットのうち 1 つを選びます。初期チェック、セットアップスクリプト、インストール後のチェックをこの順番で実行してください。初期チェックで不足している依存関係が報告された場合は、セットアップコマンドを続けて実行します。セットアップ中はカメラとアームを取り外しておいて構いません。

**OBB カメラプレビューのみの場合**、CPU を使用できます。環境をインストールして有効化したら、セクション 2 に進みます。

```bash
bash scripts/check_env.sh --backend obb
bash scripts/setup_env.sh --backend obb
bash scripts/check_env.sh --backend obb
```

**アームを用いた OBB グラスピングの場合**、`--robot` を追加して B601 制御 SDK をインストールおよびチェックします。OBB は CPU 上で動作できます。

```bash
bash scripts/check_env.sh --backend obb --robot
bash scripts/setup_env.sh --backend obb --robot
bash scripts/check_env.sh --backend obb --robot
```

**すべてのバックエンドと B601 制御 SDK をインストールするには**、互換性のある NVIDIA GPU とドライバを使用します。これらのコマンドを実行する前に、`nvidia-smi -L` を実行してホストが GPU を認識していることを確認してください。セットアップスクリプトは必要な CUDA オペレータをビルドします。

```bash
bash scripts/check_env.sh
bash scripts/setup_env.sh
bash scripts/check_env.sh
```

- **単一のポイントクラウドバックエンドをインストールする。** セットアップおよびチェックコマンドで `--backend anygrasp` または `--backend graspnet` を使用します。アームで把持を行う予定がある場合は、`--robot` を追加します。GraspNet の重みのダウンロードに失敗した場合は、セットアップコマンドに `--checkpoint-file /path/to/checkpoint-rs.tar` を追加し、パスをローカルコピーに置き換えてください。
- **変更内容を確認する。** スクリプトは不足しているコンポーネントをインストールし、既存の Git SDK を再利用します。依存関係のバージョン、Conda ビルド、または SDK ブランチを切り替える前に変更内容を表示し、確認を求めます。`y` を入力して確定します。Enter を押す、`n` を入力する、または非対話モードで実行した場合は、これらの変更はスキップされます。`----` の下に適用された変更が表示されます。
- **結果を確認する。** `----` の下に要約が表示されます。終了コード `3` は `[MANUAL]` 項目のみが残っていることを意味します。AnyGrasp については、後述の説明に従ってライセンスと重みを設定してください。アームでグラスピングを行う場合は、セクション 3 でハンドアイ行列を生成します。セットアップに必要なファイルを用意したら、同じオプションでチェックを再実行してください。

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

<TabItem value="manual" label="手動セットアップ">

<h3 id="option-b--manual-setup">オプション B — 手動セットアップ</h3>

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

#### 環境を作成し PyTorch をインストールする

Conda が利用可能なターミナルで、次のコマンドを実行します。`environment.yml` ファイルでは、Python 3.10、バージョン 2 未満の NumPy、B601 用の Pinocchio 3.9.0 を指定しています。すでに `rebot` 環境がある場合は、それを有効化し、環境ファイルと依存関係を照合してください。

```bash
conda env create -f environment.yml
conda activate rebot
```

<Tabs defaultValue="cuda">

<TabItem value="cuda" label="NVIDIA GPU">

すべてのバックエンドを使用する、または AnyGrasp や GraspNet を実行するには、GPU 版の PyTorch をインストールします。本プロジェクトでは、CUDA 12.1 を用いた PyTorch 2.5.1 を検証済みです。チェックでは `12.1` と `True` が表示されるはずです。

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

Orbbec Gemini 336 の場合は `python -m pip install 'pyorbbecsdk2==2.0.18'` を実行します。RealSense D405 または D435i の場合は `python -m pip install 'pyrealsense2>=2.54'` を実行します。USB アクセスを設定するには、カメラメーカーの手順に従ってください。[Camera SDK setup](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup.md#cameras)

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

もしアームで使用するバックエンドが OBB のみであれば、依存関係を確認するために `bash scripts/check_env.sh --backend obb --robot` を実行し、セクション 2 に進んでください。ハンドアイ行列はセクション 3 で生成します。

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">

#### AnyGrasp と GraspNet 用の CUDA ツールチェーンをセットアップする

アクティブな `rebot` 環境内で、CUDA 12.1 と互換性のあるコンパイラとツールチェーンをインストールします。先に進む前に、`nvcc --version` の出力に `release 12.1` と表示されることを確認してください。

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

**AnyGrasp。** SDK とその PointNet2 拡張をインストールし、その後 OpenBLAS を用いて MinkowskiEngine をビルドします。必要なファイルを配置するには、[AnyGrasp license and weights](#AnyGrasp-ライセンスと-weights) に従ってください。

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

**GraspNet-Baseline。** GraspNet-Baseline SDK の個別のサブディレクトリに PointNet2 と kNN の拡張をインストールします。これにより、AnyGrasp と GraspNet が同じ `rebot` 環境内でそれぞれ独自の PointNet2 ビルドを使用できます。RealSense の事前学習済み重みをダウンロードし、`sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar` に保存します。[公式 GraspNet-Baseline 事前学習済み重み](https://github.com/graspnet/graspnet-baseline#training-and-testing)

```bash
git clone https://github.com/graspnet/graspnet-baseline.git sdk/graspnet-baseline
baseline="$PWD/sdk/graspnet-baseline"
python -m pip install --no-build-isolation --no-deps --upgrade --target "$baseline/pointnet2" "$baseline/pointnet2"
touch "$baseline/pointnet2/pointnet2/__init__.py"
python -m pip install --no-build-isolation --no-deps --upgrade --target "$baseline/knn" "$baseline/knn"
mkdir -p "$baseline/checkpoints"
```

完全な手動セットアップを終えたら、`bash scripts/check_env.sh` を実行します。いくつかのバックエンドのみをセットアップした場合は、`--backend obb`、`--backend anygrasp`、または `--backend graspnet` を使用して該当する依存関係を確認してください。アームも確認するには `--robot` を追加します。[プロジェクトの手動セットアップガイド](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/README.md#2-manual-environment-and-sdk-setup)

</div>
</div>

</div>

</TabItem>

</GraspingTabs>
</div>

### AnyGrasp ライセンスと weights

AnyGrasp を使用するには、公式のライセンスと検出用 weights を取得し、`bash scripts/anygrasp_license.sh` で設定します。この手順は自動セットアップと手動セットアップの両方に適用されます。引数なしでスクリプトを実行すると、対話式メニューが開きます。

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>マシンの feature ID を取得する</h4>

推論を実行するマシン上で、デプロイ時に使用するネットワークインターフェースを使用します。`1` を選択して `feature_id` を取得し、それを使ってライセンスと対応する weights を申請します。[公式 AnyGrasp ライセンス登録](https://github.com/graspnet/anygrasp_sdk/tree/main/license_registration)

```bash
bash scripts/anygrasp_license.sh 1
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>ライセンスと weights をインストールする</h4>

公式ライセンスの ZIP もしくは展開済みライセンスディレクトリを、`checkpoint_detection.tar` と同じ配布ディレクトリ内に配置します。`2` を選択して両方をインストールします。`/path/to/delivery` は、あなたの配布ディレクトリへのパスに置き換えてください。

```bash
bash scripts/anygrasp_license.sh 2 "/path/to/delivery"
```

このスクリプトは公式 SDK を使用してライセンスを検証し、weights を読み取れることを確認します。その後、`config/backends/anygrasp.yaml` に従ってファイルをインストールします。

**デフォルトのファイル配置。** ライセンスファイルは `license/`、検出用 weights `checkpoint_detection.tar` は `log/` を確認してください。

```text
sdk/anygrasp_sdk/grasp_detection/
├── gsnet.so
├── license/
│   ├── licenseCfg.json
│   ├── *.lic
│   ├── *.public_key
│   └── *.signature
└── log/
    └── checkpoint_detection.tar
```

必要に応じて、環境セットアップスクリプトとオプション `2` は、アクティブな Python 環境と互換性のあるバージョンの `gsnet.so` を `license/` の隣に配置します。

**フィルタ済みバックエンドが別の SDK または weights パスを使用する場合**、以下のコマンドを使用します。スクリプトは `config/backends/anygrasp_filtered.yaml` に従ってファイルをインストールします。

```bash
bash scripts/anygrasp_license.sh --backend anygrasp_filtered 2 "/path/to/delivery"
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>インストールを検証する</h4>

`----` の下に表示されるライセンスと weights のステータスを確認します。`[PARTIAL]` と終了コード `3` は、ライセンスは準備完了だが検出用 weights がまだ不足していることを意味します。weights を入手したら、`checkpoint_detection.tar` へのパスをオプション `2` に直接渡してください。スクリプトが `[ERROR]` を報告した場合は、マシン ID の不一致や weights が読み取れないなど、報告された原因を確認してください。その後、AnyGrasp 環境チェックを再実行します。

```bash
bash scripts/check_env.sh --backend anygrasp
```

チェックに合格したら、セクション 5 の AnyGrasp カメラプレビューを使用して、モデルの読み込みと推論を確認します。

</div>
</div>

</div>

## 2. カメラフレームと把持候補をプレビューする

サンプルを起動する前に `conda activate rebot` を実行します。サンプルは `scripts/run_python.sh` を使用して、その環境から Python を実行します。デフォルトでは、ランチャーは継承された `PYTHONPATH`、`LD_LIBRARY_PATH`、およびユーザーサイトの Python パッケージから `rebot` を分離し、ROS Humble や他の環境からの依存関係が読み込まれないようにします。[Python ランチャー](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup.md#Python-ランチャー)

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>RGB-D フレームを記録する</h4>

カメラを接続してフレームを記録します。このコマンドは `.npz` ファイルを書き出すはずです。

```bash
bash examples/rgbd_capture/run.sh --output "outputs/rgbd/frame-$(date +%s%N).npz"
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>フィルタ済み OBB プレビューを開く</h4>

ターゲットを画像の中央に配置し、フィルタ済み OBB プレビューを開きます。このサンプルのデフォルトは `yellow banana` です。設定済みリストから別のクラスを選択するには `--target-class` を使用します。このコマンドはカメラのみに接続します。

```bash
bash examples/obb_filtered/run.sh
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>把持候補を比較する</h4>

画像ウィンドウで **G** を押してスナップショットを保存し、同じフレームに対する生の候補とフィルタ済み候補を比較します。マスクがターゲットを覆っていること、フィルタ済みの把持中心とグリッパ開口軸が対象物に適していることを確認します。終了するには **Q** または **Esc** を押します。セグメンテーションや点群の品質を確認するには、`bash examples/camera_check/run.sh --target-class "yellow banana"` を実行します。[フィルタ済み OBB の詳細](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/obb_filtered.md)

</div>
</div>

</div>

## 3. ハンドアイキャリブレーションを実行する

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>キャリブレーションボードを準備する</h4>

`aruco_100mm.pdf` をダウンロードし、100% スケールで印刷します。黒い正方形の一辺の長さを測定します。`config/default.yaml` で、`calibration.aruco.marker_length_m` をその長さ（メートル単位）に設定します。デフォルトの長さは `0.100` m で、マーカー ID は `0` です。カメラが複数の姿勢から見えるように、ボードを作業面に固定します。[100 mm ArUco ボード（PDF）をダウンロード](https://raw.githubusercontent.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/main/examples/hand_eye/boards/aruco_100mm.pdf)

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>マーカー検出を確認する</h4>

カメラでマーカーを確認します。ターミナルには、設定されたマーカーの検出を含む 10 フレーム中のフレーム数が報告されます。検出が安定しない場合は、照明、距離、またはボードの角度を調整してください。

```bash
bash examples/hand_eye/run.sh --check-marker
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>アーム接続を確認する</h4>

`sdk/reBotArm_control_py/config/rebotarm.yaml` で、`hardware_yaml: rebotarm_rs.yaml` が設定されていることを確認します。そのハードウェアプロファイルに対して CAN インターフェースと運動学モデルを確認します。サンプルの `can0` を、設定したインターフェース名に置き換えます。 [B601-RS control SDK and CAN setup](https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_pinocchio_meshcat/)

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
自動キャリブレーションでは、アームがあらかじめ設定された軌道に沿って動作します。ベースを固定し、動作範囲全体から障害物を取り除き、カメラケーブルに十分なたるみを持たせてください。必要に応じてアクチュエータの電源を切れるように準備しておきます。再キャリブレーションする前に、既存の `hand_eye.npz` をバックアップしておくこともできます。
:::

自動キャリブレーションを開始します。このプログラムは、エンドエフェクタの姿勢と、カメラで観測されたマーカーの姿勢を対応付けます。サンプルを収集した後、カメラからエンドエフェクタまでの固定変換を求めます。

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
    <h4>キャリブレーション結果を検証する</h4>

現在の実行について、ターミナルに `[OK] Saved to .../hand_eye.npz` と表示されていることを確認します。スクリプトが 15 個未満の有効なサンプルを報告した場合は、より多くの姿勢からマーカーが見えるようにボードの位置や照明を調整し、再度キャリブレーションを実行してください。

Gemini 336 のキャリブレーションファイルは `config/calibration/orbbec_gemini336/hand_eye.npz` です。その他のカメラでは、出力は `config/calibration/` 配下の対応するモデルディレクトリに保存されます。`config/default.yaml` で `calibration.hand_eye_path` を確認します。相対パスは `config/` から解決されます。その後、アームの依存関係とキャリブレーションファイルを確認します。

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

プレビューでターゲットが安定して検出されていることを確認します。`robot.ready_pose`、グリッパの向き、およびワークスペースの制限を確認します。グリッパを変更している場合は、`planning.T_grasp_tcp` も確認してください。

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>把持を実行する</h4>

:::warning
`--execute` はアームを有効化し、起動時にレディポーズへ移動させます。**G** を押すと把持が開始されます。コマンドを実行する前に、動作エリアに人、ケーブル、障害物がないことを確認してください。
:::

```bash
bash examples/obb_filtered/run.sh --execute --target-class "yellow banana"
```

アームがレディポーズで停止するのを待ちます。画像ウィンドウで **G** を押して現在のシーンをキャプチャし、チェックを通過したフィルタ済み把持候補を 1 つ選択して実行します。ターゲットや実行可能な候補が見つからない場合、プログラムは試行をスキップします。**Q** または **Esc** を押すとセッションを終了します。

<div className="text--center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_python_visual_grasping/obb.gif" alt="reBot Arm B601-RS filtered OBB grasp demo" loading="lazy" style={{ height: 'auto' }} />
</div>

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>結果を確認する</h4>

ターミナルに表示された実行ディレクトリを開きます。`result/snapshot-NNN/` ディレクトリには、取得した `frame.npz`、`result.json` 内の把持候補とプラン、および `comparison.png` と `comparison.json` におけるフィルタ前後の結果が含まれます。把持試行が開始されると、プログラムは `execution.json` も書き込みます。`object_held` フィールドには、コントローラが報告する把持状態が記録されます。

</div>
</div>

</div>

## 5. ポイントクラウド把持バックエンドを試す

<div className={styles.page}>
<GraspingTabs defaultValue="anygrasp" queryString="grasping-backend">

<TabItem value="anygrasp" label="AnyGrasp">

<h3 id="anygrasp">AnyGrasp</h3>

セクション 1 で環境セットアップを完了し、[AnyGrasp license and weights](#anygrasp-license-and-weights) から取得したファイルを配置したら、カメラプレビューを開始します。

```bash
bash examples/anygrasp_filtered/run.sh --target-class "yellow banana"
```

画像ウィンドウで **G** を押してスナップショットを保存します。左ペインには元のポイントクラウドの参照が表示され、右ペインにはフィルタ済みの結果が表示されます。デフォルトのクラス順は `pen`、`orange`、`yellow banana` です。画像ウィンドウで **1**、**2**、**3** を押してクラスを切り替えます。候補を確認したら、**Q** または **Esc** を押してプレビューを終了します。

プレビューとハンドアイキャリブレーションを検証したら、アームの依存関係を確認します。

```bash
bash scripts/check_env.sh --backend anygrasp --robot
```

:::warning
把持コマンドはアームを有効化し、起動時にレディポーズへ移動させます。実行する前に、動作エリアから人、ケーブル、障害物を取り除いてください。
:::

チェックが通ったら、次のコマンドを実行してアームによる把持を開始します。

```bash
bash examples/anygrasp_filtered/run.sh --target-class "yellow banana" --execute
```

アームがレディポーズで停止するのを待ちます。画像ウィンドウで **G** を押して新しいフレームをキャプチャし、右ペインからワークスペースと IK チェックを通過した候補を 1 つ実行します。**Q** または **Esc** を押すとセッションを終了します。 [Filtered AnyGrasp details](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/examples/anygrasp_filtered/README.md)

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

セクション 1 で GraspNet-Baseline の環境と重みをセットアップしたら、依存関係を確認し、カメラプレビューを開きます。

```bash
bash scripts/check_env.sh --backend graspnet
bash examples/graspnet_camera/run.sh
```

カメラウィンドウで **G** または **Space** を押して候補を生成し、ポイントクラウドウィンドウでそれらを確認します。**R** を押すとライブフィードを再開します。候補を確認したら、**Q** または **Esc** を押してプレビューを終了します。

セクション 3 でハンドアイキャリブレーションとアーム接続チェックを完了し、その後 GraspNet で把持するための依存関係を確認します。

```bash
bash scripts/check_env.sh --backend graspnet --robot
```

:::warning
把持コマンドは、`--dry-run` を付けた場合でもアームを有効化し、起動時にレディポーズへ移動させます。実行する前に、動作エリアから人、ケーブル、障害物を取り除いてください。
:::

チェックが通ったら、次のコマンドを実行してアームによる把持を開始します。

```bash
bash examples/graspnet_grasp/run.sh --target-class "yellow banana"
```

アームがレディポーズで停止するのを待ちます。画像ウィンドウで **G** または **Space** を押して推論を実行し、到達可能な把持を実行します。**Q** または **Esc** を押してセッションを終了し、アームをホームポジションに戻します。 [GraspNet arm example](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/examples/graspnet_grasp/README.md)

</TabItem>

</GraspingTabs>
</div>

## トラブルシューティング

- **カメラが記録できない。** `camera.type`、シリアル番号、USB パーミッションを確認します。カメラが選択した解像度とフレームレートをサポートしていることを確認し、セクション 2 でキャプチャコマンドを再実行します。
- **G を押してもアームが動かない。**
  - **Filtered OBB または AnyGrasp。** コマンドに `--execute` が含まれていることを確認します。`result.json` とターミナルログを確認し、検出器がターゲットを見逃したのか、ポイントクラウドが品質チェックに失敗したのか、候補がワークスペース外だったのか、あるいは IK が解を見つけられなかったのかを確認します。
  - **GraspNet-Baseline。** `examples/graspnet_grasp/run.sh` を実行していることを確認します。`--dry-run` を付けると、プログラムは把持動作をスキップします。ターミナルで、ハンドアイキャリブレーションが欠落または無効でないか、到達可能な候補がないという表示がないか確認します。
- **画像上では候補が正しく見えるが、把持位置がずれている。** カメラマウントが動いていないか、ハンドアイ行列が現在のカメラに対応しているか、`planning.T_grasp_tcp` が現在のグリッパと一致しているかを確認します。接近方向に沿ったオフセットを確認した後は、フィルタ済みバックエンドで `--insertion-depth-mm` を使用して、その実行に対する追加挿入距離をミリメートル単位で上書きします。Filtered OBB のデフォルトは 0 mm、Filtered AnyGrasp のデフォルトは 5 mm です。調整のたびに、候補とグリッパとテーブルの間のクリアランスを確認してください。
- **環境チェックが `[MANUAL]` を報告する。** 終了コード `3` は、AnyGrasp ライセンス、検出用重み、ハンドアイ行列など、残りの項目を手動で用意する必要があることを意味します。ファイルを追加し、同じ引数でチェックを再実行してください。 [Environment and SDK troubleshooting](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup.md)
- **古いスクリプトが見つからない。** 各サンプルは、そのディレクトリ内の `run.sh` ファイルから開始してください。互換性のあるランチャーは `scripts/legacy/` 配下にあり、例えば `bash scripts/legacy/anygrasp.sh` です。`bash scripts/run_python.sh -m rebot_grasp --help` を実行して、プロジェクトの CLI オプションを確認してください。

すべてのエントリポイントと座標系の規約の完全な一覧については、[example index](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/examples/README.md) と [project architecture](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/architecture.md) を参照してください。
