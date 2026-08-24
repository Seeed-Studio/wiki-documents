---
description: このWikiでは、NVIDIA Jetson 上で reBot Arm B601-DM GraspNet ビジュアル把持デモをデプロイする方法を説明します。Jetson 環境構築、GraspNet CUDA オペレータ、Orbbec Gemini 2 RGB-D カメラ設定、YOLO TensorRT エクスポート、ハンドアイキャリブレーション、Web UI の使用方法、CLI の使用方法、HTTP API 制御について扱います。
title: Jetson 上での reBot-DM を用いた GraspNet ビジュアル把持
keywords:
  - reBot Arm
  - B601-DM
  - GraspNet
  - Jetson
  - Physical AI
  - Orbbec Gemini 2
  - YOLO
  - TensorRT
  - Visual Grasping
image: https://files.seeedstudio.com/wiki/graspnet/front-graspnet.png
slug: /rebot_arm_b601_dm_graspnet_visual_grasping
sku: E26051901
last_update:
  date: 06/15/2026
  author: Dayu
createdAt: '2026-06-15'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_graspnet_visual_grasping/
---

# reBot Arm B601-DM GraspNet ビジュアル把持 on Jetson

このWikiでは、NVIDIA Jetson 上で **reBot Arm B601-DM ビジュアル把持デモ** をデプロイする方法を説明します。このデモは、RGB-D カメラ、YOLO インスタンスセグメンテーション、GraspNet 6自由度把持姿勢推定、アイインハンドキャリブレーション、実機ロボット制御を組み合わせ、アームがテーブル上の一般的な物体を選択して把持できるようにします。

本ガイドのバージョン 1.0 では、信頼性の高い単一 Jetson デプロイと日常運用フローに焦点を当てています。デフォルト構成では、RGB-D カメラとして **Orbbec Gemini 2**、ターゲットフィルタリングとして **YOLO11n-seg TensorRT**、汎用 6自由度把持姿勢生成として **GraspNet** を使用します。

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/graspnet/front-graspnet.png" />
</div>

<div class="table-center">
<table style={{ textAlign: 'center' }}>
  <tr>
    <th>Jetson Orin 付き reBot Arm B601-DM バンドル</th>
  </tr>
  <tr>
    <td>
      <div style={{ textAlign: 'center' }}>
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-e26052001-rebot-arm-b601-dm-bundle-with-jetson-thor.jpg" style={{ width: 600, height: 'auto' }} />
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <div class="get_one_now_container" style={{ textAlign: 'center' }}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle-with-Jetson-Orin.html">
          <strong><span><font color={'FFFFFF'} size={"4"}>今すぐ入手</font></span></strong>
        </a>
      </div>
    </td>
  </tr>
</table>
</div>

## 作成するもの

ランタイムパイプラインは次のとおりです：

```text
Orbbec Gemini 2 RGB-D camera
        |
YOLO instance segmentation for target filtering
        |
GraspNet 6-DoF grasp pose estimation
        |
Eye-in-hand calibration transform
        |
reBot Arm IK trajectory and gripper force control
        |
Optional base rotation and object placement
```

このプロジェクトでは、システムを利用するための実用的な 3 つの方法を提供します：

| モード | エントリーポイント | 典型的な用途 |
| --- | --- | --- |
| Web UI | `scripts/grasp_web.py` | ライブ映像、ターゲット選択、把持プレビュー、実際の把持、オフセット調整 |
| CLI | `scripts/grasp.py` | ヘッドレス把持やスクリプトによるテスト |
| HTTP API | `scripts/grasp_curl.sh` and `scripts/grasp_api_client.py` | リモート制御、自動化、他アプリとの連携 |

## ハードウェアとシステムの準備

開始する前に、以下のハードウェアを準備します：

- reBot Arm B601-DM
- JetPack 6.x または JetPack 7.x を実行している NVIDIA Jetson デバイス
- Orbbec Gemini 2 RGB-D カメラ
- ロボット CAN バス用 USB2CAN アダプタ
- カメラ用 USB 3.0 ケーブル
- ハンドアイキャリブレーション用 ArUco マーカー、`DICT_4X4_50`、ID `0`、一辺 0.1 m
- 安定したテーブル、アーム周辺の十分なクリアランス、および緊急電源遮断手段

:::warning
このデモは実際のロボットアームを駆動します。すべての動作テストおよび把持テスト中は、手、ケーブル、緩んだ物体をアームの作業空間から遠ざけてください。`--dry-run`、読み取り専用チェック、小さなジョグ値から開始し、その後で完全なロボット実行を有効にしてください。
:::

ハードウェアを接続します：

1. Gemini 2 を USB 3.0 で Jetson に接続します。
2. USB2CAN アダプタを reBot Arm の CAN バスに接続し、その後 Jetson に接続します。
3. reBot Arm の電源を入れます。
4. デバイスが認識されていることを確認します：

```bash
lsusb
ls /dev/ttyUSB* /dev/ttyACM* 2>/dev/null || true
```

初回起動のために一時的なデバイスパーミッションを設定します：

```bash
sudo chmod a+rw /dev/bus/usb/*/*
sudo chmod 666 /dev/ttyUSB0 2>/dev/null || true
sudo chmod 666 /dev/ttyACM0 2>/dev/null || true
```

シリアルデバイスについては、現在のユーザーを `dialout` に追加し、その後ログアウトして再ログインすることも推奨されます：

```bash
sudo usermod -aG dialout $USER
```

## Jetson へのプロジェクトデプロイ

**ステップ 1. システムパッケージと Miniconda をインストールする**

```bash
sudo apt update
sudo apt install -y git wget curl build-essential cmake libusb-1.0-0-dev python3-pip

wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
bash Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

**ステップ 2. プロジェクトをクローンする**

```bash
git clone https://github.com/jjjadand/reBot-DevArm-Grasp.git rebot_grasp-jetson
cd rebot_grasp-jetson
```

パブリックリポジトリではなく社内パッケージを使用している場合は、そのプロジェクトディレクトリを Jetson にコピーし、プロジェクトルートから残りのコマンドを実行してください。

**ステップ 3. Python 環境を作成する**

JetPack 6.x では Python 3.10 を使用します。JetPack 7.x / Thor では Python 3.12 を使用します。

```bash
# JetPack 6.x
conda create -y -n graspnet python=3.10

# JetPack 7.x / Thor
# conda create -y -n graspnet python=3.12

conda activate graspnet
python -m pip install -U pip wheel setuptools
```

JetPack と CUDA のバージョンを確認します：

```bash
cat /etc/nv_tegra_release
nvcc --version
```

**ステップ 4. Jetson 対応の PyTorch をインストールする**

Jetson では、汎用の PyPI CPU/GPU PyTorch パッケージをインストールしないでください。JetPack、Python、CUDA のバージョンに一致する wheel をインストールします。reComputer ユーザーは、専用ガイド「[Install Pytorch for reComputer Jetson](https://wiki.seeedstudio.com/ja/install_torch_on_recomputer/)」に従うこともできます。

一般的な出発点は次のとおりです：

```bash
# JetPack 6.x, CUDA 12.x, Python 3.10
pip install --extra-index-url https://pypi.jetson-ai-lab.io/jp6/cu126 torch torchvision

# JetPack 7.x / Thor, CUDA 13.x, Python 3.12
pip install --extra-index-url https://pypi.jetson-ai-lab.io/sbsa/cu130 torch torchvision
```

Python から CUDA を検証します：

```bash
python - <<'PY'
import torch
print("torch:", torch.__version__)
print("cuda available:", torch.cuda.is_available())
print("device:", torch.cuda.get_device_name(0) if torch.cuda.is_available() else "none")
PY
```

続行する前に、`cuda available` が `True` である必要があります。

**ステップ 5. Python 依存パッケージをインストールする**

```bash
pip install -r requirements-graspnet-jetson.txt
```

**ステップ 6. ロボット、GraspNet、および GraspNet API SDK をインストールする**

```bash
mkdir -p sdk

git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
pip install -e sdk/reBotArm_control_py

git clone https://github.com/graspnet/graspnet-baseline.git sdk/graspnet-baseline
git clone https://github.com/graspnet/graspnetAPI.git sdk/graspnetAPI
pip install -e sdk/graspnetAPI
```

GraspNet のダウンロードページから GraspNet の事前学習済みチェックポイントをダウンロードし、次の場所に配置します：

```text
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

**ステップ 7. CUDA パスを設定し、GraspNet CUDA オペレータをビルドする**

JetPack バージョンに応じて CUDA パスを設定します：

```bash
# JetPack 6.x example
export CUDA_HOME=/usr/local/cuda-12.6

# JetPack 7.x / Thor example
# export CUDA_HOME=/usr/local/cuda-13.0

export PATH="$CUDA_HOME/bin:$PATH"
export LD_LIBRARY_PATH="$CUDA_HOME/lib64:$LD_LIBRARY_PATH"
```

GraspNet が使用する CUDA 拡張をビルドします：

```bash
bash scripts/install_graspnet_cuda_ops.sh
bash scripts/install_graspnet_cuda_ops.sh --check
```

後で JetPack、Python、CUDA、または PyTorch を変更した場合は、次のコマンドで再ビルドします：

```bash
bash scripts/install_graspnet_cuda_ops.sh --force
```

**ステップ 8. Orbbec カメラ SDK をインストールする**

このプロジェクトには、アクティブな Python 環境に `pyorbbecsdk2` をインストールするヘルパーが含まれています：

```bash
bash scripts/install_pyorbbecsdk.sh
```

SDK をローカルでビルドする必要がある場合は、まずソースツリーをクローンし、ソースモードを実行します：

```bash
git clone https://github.com/orbbec/pyorbbecsdk.git sdk/pyorbbecsdk
bash scripts/install_pyorbbecsdk.sh --from-source
```

SDK ソースツリーが利用可能な場合は、Orbbec の udev ルールをインストールします：

```bash
sudo bash sdk/pyorbbecsdk/scripts/env_setup/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

**ステップ 9. YOLO の重みをダウンロードし、対象 Jetson 上で TensorRT をエクスポートする**

TensorRT エンジンファイルはデバイス固有です。デモを実行する Jetson 上で必ず `.engine` をエクスポートしてください。

```bash
mkdir -p models
wget https://github.com/ultralytics/assets/releases/download/v8.3.0/yolo11n-seg.pt -O models/yolo11n-seg.pt

yolo export model=models/yolo11n-seg.pt format=engine imgsz=640 half=True device=0 workspace=4
```

期待される出力は次のとおりです：

```text
models/yolo11n-seg.engine
```

プラットフォーム上で FP16 エクスポートが失敗する場合は、`half=True` を指定せずにエクスポートします：

```bash
yolo export model=models/yolo11n-seg.pt format=engine imgsz=640 device=0 workspace=4
```

## 検証とキャリブレーション

実際の把持を試みる前に、次のチェックを順番に実行します。

**1. RGB-D カメラを確認する**

```bash
conda activate graspnet
cd ~/rebot_grasp-jetson

python scripts/verify_pyorbbec_stream.py
python scripts/verify_pyorbbec_stream.py --preview --seconds 10
```

テキストのみのチェックでは、RGB と深度フレーム情報が報告されるはずです。プレビューのチェックでは、デスクトップディスプレイが利用可能な場合に RGB と深度のウィンドウが表示されるはずです。

**2. ロボット接続を確認する**

読み取り専用モードから開始します：

```bash
python scripts/verify_rebot_arm_motion.py --read-only
```

アームの経路がクリアであることを確認したら、joint6 の小さなジョグを実行します：

```bash
python scripts/verify_rebot_arm_motion.py --deg 5
```

**3. GraspNet スタックを確認する**

```bash
python scripts/verify_graspnet_stack.py
```

カメラがまだ接続されていないが、Python、CUDA、GraspNet、および YOLO ファイルだけを確認したい場合：

```bash
python scripts/verify_graspnet_stack.py --skip-camera
```

**4. アイインハンドキャリブレーションを実行する**

このプロジェクトではアイインハンドキャリブレーションを使用します。カメラはエンドエフェクタに取り付けられ、ArUco マーカーはテーブル上に固定されます。デフォルト設定では、`DICT_4X4_50`、ID `0`、0.1 m マーカーを想定しています。リポジトリには `aruco100x100.pdf` などの印刷可能なマーカーファイルが含まれています。

自動収集：

```bash
python scripts/collect_handeye_eih.py
```

重力補償付きの手動収集：

```bash
python scripts/collect_handeye_eih.py --manual
```

キャリブレーション結果は、アクティブなカメラディレクトリ配下に保存されます：

```text
config/calibration/orbbec_gemini2/hand_eye.npz
config/calibration/orbbec_gemini2/intrinsics.npz
```

保存されたキャリブレーションを検証します：

```bash
python scripts/verify_handeye_calibration.py
```

カメラマウント、グリッパー、ArUco ボードサイズ、またはテーブル形状が変わった場合は、必ず再キャリブレーションを行ってください。

## Web デモを実行する

Web UI は、最初に使用するインターフェースとして推奨されます。ライブ MJPEG ビデオ、ターゲット選択、把持プレビュー、実際の把持実行、補正調整、ベースのジョグ、グリッパー制御、レディポーズ、およびリセット操作を提供します。

まずプレビューモードで開始します。これは実際のロボット動作は行いません：

```bash
conda activate graspnet
cd ~/rebot_grasp-jetson

python scripts/grasp_web.py \
  --host 0.0.0.0 \
  --port 8090 \
  --num-point 12000 \
  --cloud-crop-nsample 32
```

ブラウザから Web UI を開きます：

```text
http://<jetson_ip>:8090
```

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/graspnet/web.png" />
</div>

プレビューモードを使用して、カメラストリーム、YOLO 検出、ターゲットフィルタリング、および把持点生成を確認します。Web UI の infer または refresh コントロールをクリックして、GraspNet プレビューを更新します。

シーンが安定し、検証ステップが完了したら、実際のロボット実行を開始します：

```bash
python scripts/grasp_web.py \
  --host 0.0.0.0 \
  --port 8090 \
  --enable-robot \
  --num-point 12000 \
  --cloud-crop-nsample 32
```

最初の実機テストでは、把持後の配置を無効にして、アームが把持と復帰動作のみを行うようにします：

```bash
python scripts/grasp_web.py \
  --host 0.0.0.0 \
  --port 8090 \
  --enable-robot \
  --no-place-after-grasp \
  --num-point 12000 \
  --cloud-crop-nsample 32
```

便利な起動オプション：

| オプション | 目的 |
| --- | --- |
| `--enable-robot` | 実際のアームとグリッパーの動作を許可 |
| `--target-class cup` | ターゲットクラスを事前選択 |
| `--no-yolo` | YOLO フィルタリングを無効にしてシーン全体に対して GraspNet を実行 |
| `--camera-type orbbec_gemini2` | カメラドライバを強制指定 |
| `--no-place-after-grasp` | 把持後のベース回転と配置をスキップ |
| `--num-point 12000` | Jetson のメモリ向けに GraspNet のポイント数を削減 |
| `--cloud-crop-nsample 32` | Jetson のメモリ向けに CloudCrop サンプル数を削減 |
| `--graspnet-interval 2.0` | 有効時の GraspNet 自動更新間隔を設定 |

通常の Web UI ワークフローは次のとおりです：

1. **Ready** をクリックして、アームをレディポーズに移動します。
2. ターゲットクラスを選択するか、空のままにして検出された物体を使用します。
3. **Infer** または **Refresh** をクリックして把持姿勢を計算します。
4. ビデオ内の把持マーカーが妥当な位置に見えることを確認します。
5. 必要に応じて、グリッパー、カメラ、またはベースの補正を調整します。
6. アームの経路が安全である場合にのみ **Real Grasp** をクリックします。
7. シーンが変化した場合やロボットを安全な状態に戻す必要がある場合は **Reset** を使用します。

補正値は、小さな機械的誤差やキャリブレーション誤差を補正するために使用されます。Web UI で調整した後、値を `config/compensation.json` に保存するか、安定した値をデプロイ用メモにコピーしてください。位置オフセットには 0.005 m、回転オフセットには 1〜2 度など、小さな刻みで調整します。

## CLI と API の使用

ヘッドレスのドライランには次を使用します：

```bash
python scripts/grasp.py --dry-run --camera-type orbbec_gemini2 --target-class cup
```

YOLO フィルタリングなしでシーン全体に対して GraspNet を実行する場合：

```bash
python scripts/grasp.py --dry-run --camera-type orbbec_gemini2 --no-yolo
```

実際の CLI 実行：

```bash
python scripts/grasp.py --camera-type orbbec_gemini2 --target-class cup
```

CLI での立ち上げ時に配置を無効にするには：

```bash
python scripts/grasp.py \
  --camera-type orbbec_gemini2 \
  --target-class cup \
  --no-place-after-grasp
```

ロボットを動かさずに GraspNet のライブ出力を確認するには：

```bash
python scripts/graspnet_camera_demo.py --auto --target-class cup
python scripts/graspnet_camera_demo.py --auto --no-yolo --no-visualizer
```

HTTP 自動化のために、ヘルパーを使って Web サービスを起動します：

```bash
bash scripts/grasp_curl.sh serve --enable-robot --no-auto-graspnet
```

別のターミナルで：

```bash
bash scripts/grasp_curl.sh state
bash scripts/grasp_curl.sh ready
bash scripts/grasp_curl.sh target bottle
bash scripts/grasp_curl.sh infer
bash scripts/grasp_curl.sh grasp
bash scripts/grasp_curl.sh reset
```

同じ操作は `curl` を使って直接呼び出すこともできます：

```bash
BASE=http://127.0.0.1:8090

curl -s "$BASE/state"
curl -s -X POST "$BASE/ready" -H "Content-Type: application/json" -d "{}"
curl -s -X POST "$BASE/target" -H "Content-Type: application/json" -d '{"class_name":"bottle"}'
curl -s -X POST "$BASE/infer" -H "Content-Type: application/json" -d "{}"
curl -s -X POST "$BASE/grasp" -H "Content-Type: application/json" -d "{}"
```

その他の有用なエンドポイント：

| エンドポイント | メソッド | 目的 |
| --- | --- | --- |
| `/state` | GET | 現在の検出結果、把持情報、および Web ランタイム状態 |
| `/robot/state` | GET | ロボットの関節、TCP 姿勢、グリッパー状態 |
| `/stream.mjpg` | GET | MJPEG カメラストリーム |
| `/compensation` | POST | グリッパー、カメラ、ベースの補正値を設定 |
| `/joint/limits` | GET | 関節位置とリミットを読み取り |
| `/joint/jog` | POST | 1 つの関節をジョグ（ベーステストでは多くの場合 `joint1`） |
| `/move/joints` | POST | すべての関節を絶対位置に移動 |
| `/move/pose` | POST | IK または軌道モードで TCP をターゲット姿勢に移動 |
| `/gripper` | POST | グリッパーのオープン、クローズ、リリース、または状態読み取り |
| `/auto_grasp` | POST | バックグラウンドでターゲット探索と把持サイクルを実行 |

## 設定とチューニング

主な設定ファイルは次のとおりです：

```text
config/default.yaml
```

デフォルトのカメラ設定：

```yaml
camera:
  type: orbbec_gemini2
  color_width: 1280
  color_height: 720
  depth_width: 1280
  depth_height: 720
  fps: 30
```

デフォルトの検出および GraspNet 設定：

```yaml
yolo:
  model_name: "yolo11n-seg.engine"
  device: "auto"

graspnet:
  checkpoint: "checkpoint-rs.tar"
```

デフォルトの配置動作：

```yaml
grasp_pipeline:
  place:
    enabled: true
    base_joint: joint1
    base_delta_deg: 90.0
    base_direction: auto
    base_rotate_duration: 2.5
    base_safety_margin_deg: 5.0
    return_home: false
```

グリッパーが一貫して物体を取り逃す場合は、次の順序で調整します：

| 症状 | 最初に調整すべき対象 |
| --- | --- |
| グリッパーが前後方向に離れすぎている | `grasp_forward_offset` / Web グリッパー前方補正 |
| グリッパーが左右に外れる | `grasp_lateral_offset` またはカメラの X/Y 補正 |
| グリッパーが高すぎる／低すぎる | `grasp_vertical_offset` またはカメラの Z 補正 |
| 手首の角度が正しくない | グリッパーのロール・ピッチ・ヨー補正 |
| すべての把持が同じ方向にずれる | カメラまたはベースの補正 |

## デモ動画

<div align="center">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/_44o0oZ9nqI" title="reBot Arm B601-DM GraspNet Visual Grasping Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## トラブルシューティング

`torch.cuda.is_available()` が `False` を返す：JetPack に対応した PyTorch ホイールを再インストールしてください。汎用の PyPI `torch` は Jetson でのデプロイには適していません。

`No module named pointnet2._ext` または `No module named knn_pytorch.knn_pytorch`：GraspNet の CUDA オペレータを再ビルドします：

```bash
bash scripts/install_graspnet_cuda_ops.sh --force
```

`pyorbbecsdk import failed` またはカメラを開けない：SDK を再インストールし、USB パーミッションを確認します：

```bash
bash scripts/install_pyorbbecsdk.sh
sudo chmod a+rw /dev/bus/usb/*/*
python scripts/verify_pyorbbec_stream.py
```

YOLO の `.engine` が読み込めない：同じ Jetson 上で再エクスポートしてください。Engine ファイルは Jetson モデル、JetPack バージョン、TensorRT バージョン間でコピーすべきではありません。

ArUco マーカーが検出されない：マーカー辞書が `DICT_4X4_50`、ID が `0`、マーカーの一辺の長さが 0.1 m であること、照明が安定していること、マーカーが平坦で完全に見えていることを確認してください。

ロボットは接続されているが動作しない：`verify_rebot_arm_motion.py --read-only` を実行し、USB2CAN デバイスを確認し、モータ電源をチェックし、把持実行を再試行する前に小さな `--deg 5` ジョグをテストしてください。

GraspNet がメモリ不足になる：`--num-point` を減らし、`--cloud-crop-nsample` を減らし、デスクトップアプリケーションを閉じ、複数の重い推論プロセスを同時に実行しないようにします。

## リソース

- reBot Arm GraspNet デモのリファレンス: https://github.com/Seeed-Projects/reBot-DevArm-Grasp
- reBot Arm SDK: https://github.com/Seeed-Projects/reBotArm_control_py
- GraspNet ベースライン: https://github.com/graspnet/graspnet-baseline
- GraspNet API: https://github.com/graspnet/graspnetAPI
- Orbbec pyorbbecsdk: https://github.com/orbbec/pyorbbecsdk
- reComputer Jetson 向け Pytorch のインストール: https://wiki.seeedstudio.com/ja/install_torch_on_recomputer/


## 技術サポートと製品ディスカッション

当社製品をお選びいただきありがとうございます。ご質問、ディスカッション、問題報告のために、いくつかのサポートチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
