---
description: reComputer Rugged J401 を使用して、ターゲット追跡、後方エリア警告、ドライバー監視、ビデオ録画を含む、産業用フォークリフト向けの 4 つのコンピュータビジョンアプリケーションを紹介します。
title: 産業用ビジョン向け reComputer Rugged J401
keywords:
  - reComputer Rugged J401
  - Jetson Orin NX
  - 産業用ビジョン
  - EfficientTAM
  - Depth Anything V2
  - TensorRT
  - RTSP
  - MediaPipe
image: https://files.seeedstudio.com/wiki/rugged/rugged_banner.png
slug: /ai_robotics_recomputer_rugged_j401_cv_demo
sku: 100046979,100002634
last_update:
  date: 09/20/2026
  author: Zibo
createdAt: '2026-09-20'
updatedAt: '2026-09-20'
url: https://wiki.seeedstudio.com/ja/ai_robotics_recomputer_rugged_j401_cv_demo/
---

## はじめに

産業用フォークリフトは、荷積み場、倉庫、屋外ヤード、冷蔵倉庫、洗浄エリアなどで稼働します。粉じん、水、振動、温度変化、不安定なネットワーク接続などにより、これらの環境は一般的なコンピュータにとって過酷です。車載ビジョンシステムには、防塵防水筐体、安全なコネクタ、安定したカメラ電源、そして車両上で映像を処理できる十分なローカル演算能力が必要です。

この wiki では、産業用フォークリフトにおけるコンピュータビジョンの活用方法をいくつか紹介します。サンプルでは reComputer Rugged J401 をエッジコントローラとして使用します。IP66 エンクロージャ、M12 コネクタ、耐振動性、4 つの PoE ポート、Jetson Orin NX により、カメラの近くに設置してビジョンワークロードをローカルで実行できます。

このサンプルは 4 つの実用的な作業をカバーします：フォークリフト前方で選択した物体の追跡、後方死角の監視、ドライバーの疲労とヘルメット着用状況の確認、そして後から確認できるよう映像を録画することです。これら 4 つはすべて 1 つの Web コンソールから管理されます。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/rugged_banner.png" alt="application banner" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Rugged-J4012-p-6920.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}>今すぐ入手 🖱️</font></span></strong>
</a>
</div>


:::warning
このプロジェクトは支援用プロトタイプであり、機能安全システムではありません。安全認証は取得しておらず、オペレーター自身の安全確認を置き換えることはできません。カメラまたは推論パイプラインに障害が発生した場合、後方警告ビューは `SYSTEM ERROR` を報告します。
:::

## 前提条件

- reComputer Rugged J4012 / J3011
- JetPack 5.1.3 がインストール済み
- POE カメラ / USB カメラ
- パッケージおよびモデルのダウンロード用インターネット接続
- 少なくとも 30 GB の空きストレージを推奨


## 産業用フォークリフト向けビジョンアプリケーション
このケースでは、2 台の 48V POE カメラと 1 台の USB カメラを使用します。シナリオに応じて、これらのカメラは自由に入れ替えることができます。
### ハードウェア接続
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/poe_connection.png" alt="application banner" />
</div>

### 前方ビューのターゲット追跡

パレットの取り扱い中、フォークリフトが移動しても、オペレーターは特定の荷物や作業エリアを視界に入れておく必要がある場合があります。前方アプリケーションでは、EfficientTAM を使用してクリックによるセグメント追跡を行います。オペレーターが映像内でターゲットを選択すると、システムは後続フレームにわたってその輪郭を追跡します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/seg_demo.jpg" alt="" />
</div>


これは自動物体認識ではなく、インタラクティブな追跡です。ターゲットが作業ごとに変わり、オペレーターが直接選択できる場合に有用です。

### 後方エリア警告

カウンターウェイトとマストにより、フォークリフトの周囲には大きな死角が生じます。後方向きの PoE カメラは Depth Anything V2 を使用してシーンの奥行きを推定し、人検出器で車両後方の作業エリアを監視します。インターフェースは、設定された距離しきい値に応じて `SAFE`、`WARNING`、`DANGER` を報告します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/depth_demo.jpg" alt="" />
</div>

:::note
単眼深度推定には制約があります。実際の距離は信頼できません。現場の状況と要件に基づいて、警報しきい値を調整する必要があります！
:::

### ドライバーおよび PPE 監視

キャビン内カメラは、外部からは見えない状況を確認できます。MediaPipe の顔ランドマークは疲労に関連する信号を提供し、別のモデルがヘルメットの着用状態を確認します。モデルアルゴリズムが運転中のドライバーの疲労を検出すると、警告灯を作動させてドライバーに注意を促し、疲労運転による重大な安全事故を防ぎます。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/detect_demo.jpg" alt="" />
</div>


### マルチカメラ録画

異なる視点からの監視映像を 1 つのダッシュボードに表示できるため、状況をリアルタイムで監視しやすくなります。

<div align="center">
  <img width="1000" src="https://raw.githubusercontent.com/zibochen6/rugged_cv_demo/main/docs/images/dashboard.png" alt="Industrial forklift vision dashboard" />
</div>


## システム概要

| アプリケーション | カメラ | ビジョン手法 |
| --- | --- | --- |
| 前方 | PoE RTSP | EfficientTAM によるクリック・トゥ・セグメント追跡 |
| 後方 | PoE RTSP | Depth Anything V2 によるメートル単位の深度警告（`SAFE`、`WARNING`、`DANGER`、`SYSTEM ERROR` 状態） |
| キャビン | USB UVC | MediaPipe による疲労検出とヘルメット状態の確認 |
| 録画 | 任意の設定済みカメラ | AI 推論なしの 1080p H.264 MP4 録画 |

FastAPI サーバーは各アプリケーションの開始と停止を行い、2 つのアプリケーションが同じカメラを開かないようにし、ビデオストリームをブラウザへ送信します。モデルとカメラは要求されるまでアイドル状態のままなので、未使用のアプリケーションが GPU メモリを占有することはありません。

## サンプルアプリケーションのデプロイ

### ステップ 1. システムパッケージをインストールする

```bash
sudo apt-get update
sudo apt-get install -y python3.8-venv python3-opencv libopenblas-base logrotate nodejs npm

python3 -c "import cv2; print([line.strip() for line in cv2.getBuildInformation().splitlines() if 'GStreamer' in line])"
```

出力に `GStreamer: YES` と表示されている必要があります。システムの OpenCV を PyPI の `opencv-python` ホイールに置き換えないでください。このホイールには、本セットアップで RTSP キャプチャに使用している GStreamer サポートが含まれていません。

### ステップ 2. プロジェクトをクローンして環境を作成する

```bash
git clone https://github.com/zibochen6/rugged_cv_demo.git /home/seeed/workspace/seg_demo
cd /home/seeed/workspace/seg_demo

python3 -m venv .venv
.venv/bin/python -m pip install --upgrade pip setuptools wheel
.venv/bin/pip install "numpy==1.24.4"

curl -fL --retry 3 -o /tmp/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl \
  https://developer.download.nvidia.com/compute/redist/jp/v512/pytorch/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
.venv/bin/pip install /tmp/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl

git clone --branch v0.16.2 --depth 1 https://github.com/pytorch/vision.git /tmp/vision
cd /tmp/vision
MAX_JOBS=4 /home/seeed/workspace/seg_demo/.venv/bin/python setup.py install
cd /home/seeed/workspace/seg_demo
```

仮想環境を JetPack の OpenCV および TensorRT パッケージを参照するように設定し、その後プロジェクトの依存関係をインストールします：

```bash
SP="$(.venv/bin/python -c 'import site; print(site.getsitepackages()[0])')"
printf "import sys; sys.path.insert(0, '/usr/lib/python3.8/dist-packages')\n" \
  > "$SP/_system_opencv_prepend.pth"

.venv/bin/pip install -r requirements-jetson.txt
.venv/bin/pip install -r backend/requirements.txt

cd frontend
npm ci
npm run build
cd ..
```

### ステップ 3. EfficientTAM をインストールし、モデルをダウンロードする

```bash
mkdir -p third_party checkpoints models/onnx models/tensorrt models/mediapipe
git clone --depth 1 https://github.com/yformer/EfficientTAM.git third_party/EfficientTAM

Efficient_Track_Anything_BUILD_CUDA=0 .venv/bin/pip install \
  -e third_party/EfficientTAM --no-build-isolation --no-deps --ignore-requires-python

.venv/bin/pip install --no-deps "ultralytics==8.3.40" "ultralytics-thop==2.0.14"
.venv/bin/pip install "onnx==1.14.1" "matplotlib==3.7.5" "pandas==2.0.3" \
  "seaborn==0.13.2" "psutil==6.1.1" "py-cpuinfo==9.0.0" "scipy==1.10.1"

curl -fL --retry 3 -o checkpoints/efficienttam_ti_512x512.pt \
  https://huggingface.co/yunyangx/efficient-track-anything/resolve/main/efficienttam_ti_512x512.pt

.venv/bin/huggingface-cli download depth-anything/Depth-Anything-V2-Metric-Indoor-Small-hf \
  --local-dir checkpoints/depth_anything_v2_metric_indoor_small

curl -fL --retry 3 -o models/mediapipe/face_landmarker.task \
  https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task

curl -fL --retry 3 -o checkpoints/yolov8n.pt \
  https://github.com/ultralytics/assets/releases/download/v8.3.0/yolov8n.pt
```

<details>
<summary>ONNX モデルをエクスポートし、TensorRT エンジンをビルドする</summary>

プロジェクトルートに `export_depth_onnx.py` を作成します：

```python
import os
import torch
from transformers import DepthAnythingForDepthEstimation

cam_w, cam_h = 2304, 1296
longest, multiple = 518, 14
scale = longest / float(max(cam_h, cam_w))
in_h = max(multiple, (int(round(cam_h * scale)) // multiple) * multiple)
in_w = max(multiple, (int(round(cam_w * scale)) // multiple) * multiple)
output = "models/onnx/depth_metric_small_518.onnx"

model = DepthAnythingForDepthEstimation.from_pretrained(
    "checkpoints/depth_anything_v2_metric_indoor_small"
).eval()


class Wrapped(torch.nn.Module):
    def __init__(self, depth_model):
        super().__init__()
        self.depth_model = depth_model

    def forward(self, pixel_values):
        return self.depth_model(pixel_values=pixel_values).predicted_depth


os.makedirs(os.path.dirname(output), exist_ok=True)
torch.onnx.export(
    Wrapped(model),
    (torch.zeros((1, 3, in_h, in_w), dtype=torch.float32),),
    output,
    input_names=["pixel_values"],
    output_names=["predicted_depth"],
    opset_version=16,
    do_constant_folding=True,
)
print("ONNX written:", output)
```

深度モデルと人物モデルをエクスポートし、その後、実験的なヘルメットモデルをダウンロードします：

```bash
.venv/bin/python export_depth_onnx.py

.venv/bin/python - <<'PY'
from pathlib import Path
from ultralytics import YOLO

result = Path(YOLO("checkpoints/yolov8n.pt").export(
    format="onnx", imgsz=640, opset=12, simplify=False, dynamic=False
))
Path("models/onnx/yolov8n_person.onnx").write_bytes(result.read_bytes())
PY

curl -fL --retry 3 -o models/onnx/ppe_hard_hat.experimental.onnx \
  https://raw.githubusercontent.com/Sanaurrehmanarain/object-detection-yolov8/main/best.onnx
```

J401 上で 3 つすべてのエンジンをビルドします。TensorRT エンジンは GPU アーキテクチャと TensorRT バージョンに結び付けられているため、別のコンピュータでビルドしたエンジンをコピーしないでください。

```bash
TRTEXEC=/usr/src/tensorrt/bin/trtexec
[ -x "$TRTEXEC" ] || TRTEXEC="$(command -v trtexec)"

"$TRTEXEC" --onnx=models/onnx/depth_metric_small_518.onnx \
  --saveEngine=models/tensorrt/depth_metric_small_518_fp16.engine \
  --fp16 --workspace=1024

"$TRTEXEC" --onnx=models/onnx/yolov8n_person.onnx \
  --saveEngine=models/tensorrt/yolov8n_person_fp16.engine \
  --fp16 --workspace=2048

"$TRTEXEC" --onnx=models/onnx/ppe_hard_hat.experimental.onnx \
  --saveEngine=models/tensorrt/ppe_hard_hat_fp16.engine \
  --fp16 --workspace=1024
```

</details>

### ステップ 4. サービスをインストールしカメラを設定する

サービスをインストールする前に、システム変更内容をプレビューします：

```bash
sudo ./deploy/install.sh --dry-run
sudo ./deploy/install.sh
```

RTSP 認証情報を保護された環境ファイルに保存します：

```bash
sudo tee /etc/seg-demo/visual-hub.env >/dev/null <<'EOF'
FRONT_CAMERA_URL=rtsp://<user>:<password>@192.168.10.20:554/
REAR_CAMERA_URL=rtsp://<user>:<password>@192.168.10.21:554/
DMS_CAMERA=usb:0
EOF
sudo chmod 600 /etc/seg-demo/visual-hub.env

sudo systemctl start visual-hub
curl -s http://127.0.0.1:8000/api/health
```

## アプリケーションを試す

同じ LAN 上のブラウザから次のアドレスを開きます：

```text
http://<Jetson-LAN-IP>:8000/
```

各カードのカメラセレクタを使用して、フロント、リア、キャビンのソースを確認します。すでに使用中のカメラは、そのアプリケーションが停止するまで他のアプリケーションでは利用できません。**Start All** を使用する前に、各アプリケーションを個別にテストしてください。

### フォークリフト前方の物体を追跡する

1. 前方を向いた PoE カメラを選択し、フロントアプリケーションを開始します。
2. 追跡すべき物体または荷物をクリックします。
3. マスクに背景の一部が含まれている場合は、ネガティブポイントを追加します。
4. 別のターゲットを選ぶ前に選択をクリアします。

最初のモデル読み込みには数秒かかります。ターゲットが選択されると、マスクは後続フレームでもそれに追従し、一時的に視界から外れても再度ロックしようとします。

### 後方の作業エリアを確認する

後方を向いた PoE カメラを選択し、リアアプリケーションを開始します。推定距離が設定されたしきい値をまたぐと、ステータスパネルは `SAFE`、`WARNING`、`DANGER` の間で変化します。

表示される距離を使用する前に、`configs/warning.yaml` でカメラ内部パラメータ、取り付け高さ、ピッチ、距離補正を設定してください。カメラや取り付け位置が変わると、新しいキャリブレーションが必要です。

### キャビンモニタリングを有効にする

キャビンの USB カメラを選択し、キャビンアプリケーションを開始します。疲労とヘルメットのチェックにはそれぞれ個別のスイッチがあります。不要な経路はオフにしてください。そのモデルは読み込まれません。

オペレータの視界を妨げないようにしつつ、運転者の顔が見える位置にカメラを設置します。通常のシフト時と同じ照明条件でテストしてください。


便利なサービスコマンド：

```bash
sudo systemctl restart visual-hub
./scripts/run_visual_hub.sh status
./scripts/run_visual_hub.sh stop
journalctl -u visual-hub -f
```

## 実測パフォーマンス

これらの数値は、Jetson Orin NX 16GB を搭載した reComputer Rugged J401 上で 4 つのアプリケーションを同時実行した状態で測定したものです。結果を比較する前に `sudo nvpmodel -m 0 && sudo jetson_clocks` を実行してください。

| アプリケーション | 構成 | 測定結果 |
| --- | --- | --- |
| フロントセグメンテーション | EfficientTAM-Ti, 512, PyTorch bf16 | 約 13.2 FPS、初回ロードに 7～8 秒 |
| リア警告 | Depth Anything V2 Metric Small, TensorRT FP16 | 深度処理は約 21 FPS |
| キャビンモニタリング | 1280x720 USB カメラ | 疲労とヘルメットチェック有効時で約 5.4 FPS |
| 録画 | 3 ストリーム, `nvv4l2h264enc` | 3 x 1920x1080、15 FPS、H.264 |

実際のスループットは、カメラ解像度、電源モード、温度、およびアクティブなアプリケーション数に依存します。

## トラブルシューティング

| 症状 | 確認 | 対処 |
| --- | --- | --- |
| ポート 8000 が使用できない | `systemctl status visual-hub` | サービスを再起動し、`journalctl -u visual-hub` を確認する |
| アプリケーションが `CAMERA_BUSY` を報告する | `curl -s http://127.0.0.1:8000/api/hub/status` | カメラを占有しているアプリケーションまたは録画ジョブを停止する |
| USB カメラが開かない | `sudo dmesg \| grep -i "not enough bandwidth"` | USB 3 に移すか、他の USB ストリームを停止する |
| RTSP ストリームがフリーズする | アプリケーションステータスの `frame_age_s` を確認する | カメラ電源、PoE 予算、ネットワーク経路、RTSP 認証情報を確認する |
| フロントビューの表示に数秒かかる | `journalctl -u visual-hub` | 最初の EfficientTAM モデル読み込みには通常 7～8 秒かかります |

セレクタに表示されないカメラについては、まずインベントリを確認します：

```bash
curl -s http://127.0.0.1:8000/api/hub/cameras
```

追加の RTSP ソースを `/etc/seg-demo/visual-hub.env` の `HUB_EXTRA_CAMERAS` に追加するか、セレクタの手動入力行から URL を入力します。

## 安全性とアプリケーションの限界

- 後方エリア警告は単眼深度を使用しており、物理的な距離センサではありません。低照度、反射、透明な物体、レンズの汚れ、激しい振動などにより、誤った推定値が生じる可能性があります。
- キャビンモニタリングは RGB 画像と固定のタイミングルールを使用します。ドライバーごとのキャリブレーションや暗視機能はありません。
- フロントトラッキングは、ユーザーが選択した 1 つのターゲットを追跡します。対象物を識別したり、それを動かして安全かどうかを判断したりはしません。
- ヘルメットモデルは実験的なものです。運用で使用する前に、その精度、学習データ、ライセンスを確認してください。
## デモ動画

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/X2OEmbMKadA" title="reComputer Rugged J401 industrial forklift vision demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## リソース
- [reComputer Rugged J40 データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_rugged_J401_datasheet.pdf) 
- [キャリアボード回路図](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20Carrier%20Board%20V1.1_SCH.pdf)
- [PSE ボード回路図](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20PSE%20Board%20V1.1_SCH.pdf)
- [3D ファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Rugged_asm.stp)
- [Linux_for_Tegra ソースコード](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [NVIDIA Jetson デバイス比較](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [rugged_cv_demo プロジェクトリポジトリ](https://github.com/zibochen6/rugged_cv_demo)
- [EfficientTAM](https://github.com/yformer/EfficientTAM)
- [Depth Anything V2 Metric Indoor Small](https://huggingface.co/depth-anything/Depth-Anything-V2-Metric-Indoor-Small-hf)
- [MediaPipe Face Landmarker](https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker)
- [Getting Started with reComputer Rugged J40](https://wiki.seeedstudio.com/ja/ai_robotics_recomputer_rugged_j40_getting_started/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
