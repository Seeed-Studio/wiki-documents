---
description: "reComputer Rugged J401 上で動作する 4 つのフォークリフト向けビジョンアプリケーション：前方トラッキング、後方警告、ドライバー監視、マルチカメラ録画。"
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
slug: /jetson/recomputer_rugged_j401/industrial_vision
aliases:
  - /ai_robotics_recomputer_rugged_j401_cv_demo
sku: 100046979,100002634
last_update:
  date: 09/30/2026
  author: Zibo
createdAt: '2026-09-20'
updatedAt: '2026-09-30'
url: https://wiki.seeedstudio.com/ja/jetson/recomputer_rugged_j401/industrial_vision/
---

import JetsonProductDocNav from '@site/src/components/jetson/JetsonProductDocNav';
import {ruggedJ401DocNav} from '@site/src/data/jetson/productDocNavigation';

# 産業用ビジョン向け reComputer Rugged J401

<JetsonProductDocNav {...ruggedJ401DocNav} />

## はじめに

産業用フォークリフトは、荷捌き場、倉庫、屋外ヤード、冷蔵倉庫、洗浄エリアなどで稼働します。粉じん、水、振動、温度変化、不安定なネットワーク接続などにより、これらは一般的なコンピュータにとって過酷な環境です。車載ビジョンシステムには、防塵防水筐体、安全なコネクタ、安定したカメラ電源、そして車両上で映像を処理できる十分なローカル演算能力が必要です。

産業用フォークリフトは粉じん、洗浄、冷蔵倉庫といった環境で稼働するため、ビジョンシステムはラックではなく車両に搭載する必要があります。reComputer Rugged J401 は、IP66 エンクロージャ、M12 コネクタ、4 つの PoE ポート、Jetson Orin NX をフォークリフトに搭載します。IP66 エンクロージャ、M12 コネクタ、耐振動性、4 つの PoE ポート、Jetson Orin NX により、カメラの近くに設置してビジョンワークロードをローカルで実行できます。

このサンプルでは、実用的な 4 つのタスクを扱います。フォークリフト前方で選択した物体の追跡、後方死角の監視、ドライバーの疲労とヘルメット着用状況の確認、そして後から確認できるよう映像を録画することです。これら 4 つすべてを 1 つの Web コンソールから管理します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/rugged_banner.png" alt="reComputer Rugged バナー：フォークリフトの横にある倉庫内のユニット。Driver Monitoring、Collision Warning、Object Perception、IP66 Protection、Real-Time Edge AI のラベル付き" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Rugged-J4012-p-6920.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}>今すぐ入手 🖱️</font></span></strong>
</a>
</div>


:::warning
このプロジェクトは支援用プロトタイプであり、機能安全システムではありません。安全認証は取得しておらず、オペレーター自身の安全確認を置き換えることはできません。カメラまたは推論パイプラインが故障した場合、後方警告ビューは `SYSTEM ERROR` を報告します。
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
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/poe_connection.png" alt="2 台の PoE カメラが Ethernet 経由で Rugged J401 に接続されており、M12 コネクタと Wi-Fi アンテナが見える" />
</div>

### 前方ビューのターゲットトラッキング

パレットの取り扱い中、フォークリフトが移動しても、オペレーターは特定の荷物や作業エリアを視界に入れておく必要がある場合があります。前方アプリケーションでは、EfficientTAM を用いたクリック・トゥ・セグメント方式のトラッキングを行います。オペレーターが映像内でターゲットを選択すると、システムは後続フレームにわたってその輪郭を追跡します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/seg_demo.jpg" alt="前方セグメンテーションタイル：クリックされたターゲットが緑でマスクされ、Clear target コントロールと USB カメラセレクタが表示されている" />
</div>


これはインタラクティブなトラッキングであり、自動物体認識ではありません。ターゲットがタスクごとに変化し、オペレーターが直接選択できる場合に有用です。

### 後方エリア警告

カウンターウェイトとマストにより、フォークリフトの周囲には大きな死角が生じます。後方向きの PoE カメラは Depth Anything V2 を使用してシーンの奥行きを推定し、人検出器で車両後方の作業エリアを監視します。インターフェースは、設定された距離しきい値に応じて `SAFE`、`WARNING`、`DANGER` を報告します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/depth_demo.jpg" alt="後方警告タイル：奥行きインセット、危険フレーム、NEAREST 0.6 m と表示された STOP ステータス" />
</div>

:::note
単眼深度推定には限界があります。実際の距離は信頼できません。現場の状況と要件に基づいて、警報しきい値を調整する必要があります！
:::

### ドライバーおよび PPE 監視

キャビン内カメラは、外部からは見えない状態を確認できます。MediaPipe の顔ランドマークは疲労に関連する信号を提供し、別のモデルがヘルメットの着用状況を確認します。モデルアルゴリズムが運転中のドライバーの疲労を検出すると、警告灯を点灯させてドライバーに注意を促し、疲労運転による重大な安全事故を防止します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/detect_demo.jpg" alt="キャビン検出タイル：ドライバーが PERSON 1 | HELMET: NOT WORN のラベル付きバウンディングボックスで囲まれている" />
</div>


### マルチカメラ録画

異なる視点からの監視映像を 1 つのダッシュボードに表示できるため、状況をリアルタイムで監視しやすくなります。

<div align="center">
  <img width="1000" src="https://raw.githubusercontent.com/zibochen6/rugged_cv_demo/main/docs/images/dashboard.png" alt="Front segmentation、Rear warning、Cabin detection タイル、後方距離しきい値、統合イベントストリームを備えた Forklift Vision Control ダッシュボード" />
</div>


## システム概要

| アプリケーション | カメラ | ビジョン手法 |
| --- | --- | --- |
| 前方 | PoE RTSP | EfficientTAM によるクリック・トゥ・セグメントトラッキング |
| 後方 | PoE RTSP | Depth Anything V2 による `SAFE`、`WARNING`、`DANGER`、`SYSTEM ERROR` 状態付きメートル単位深度警告 |
| キャビン | USB UVC | MediaPipe による疲労検出とヘルメット状態判定 |
| 録画 | 任意の設定済みカメラ | AI 推論なしの 1080p H.264 MP4 録画 |

FastAPI サーバーは各アプリケーションの開始と停止を行い、2 つのアプリケーションが同じカメラを開かないようにし、ビデオストリームをブラウザへ送信します。モデルとカメラは要求されるまでアイドル状態のままなので、未使用のアプリケーションが GPU メモリを占有することはありません。

## サンプルアプリケーションのデプロイ

### ステップ 1. システムパッケージをインストールする

```bash
sudo apt-get update
sudo apt-get install -y python3.8-venv python3-opencv libopenblas-base logrotate nodejs npm

python3 -c "import cv2; print([line.strip() for line in cv2.getBuildInformation().splitlines() if 'GStreamer' in line])"
```

出力に `GStreamer: YES` と表示されている必要があります。システムの OpenCV を PyPI の `opencv-python` ホイールに置き換えないでください。そのホイールには、このセットアップで RTSP キャプチャに使用している GStreamer サポートが含まれていません。

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

仮想環境を JetPack の OpenCV と TensorRT パッケージを指すように設定し、その後プロジェクトの依存関係をインストールします：

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

depth モデルと person モデルを書き出し、その後 experimental helmet モデルをダウンロードします：

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

3 つすべてのエンジンを J401 上でビルドします。TensorRT エンジンは GPU アーキテクチャと TensorRT バージョンに依存するため、別のコンピュータでビルドしたエンジンをコピーしないでください。

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

各カードのカメラセレクタを使って、前方、後方、キャビンのソースを確認します。すでに使用中のカメラは、そのアプリケーションが停止するまで他のアプリケーションでは利用できません。**Start All** を使う前に、各アプリケーションを個別にテストしてください。

### フォークリフト前方の物体を追跡する

1. 前方を向いた PoE カメラを選択し、front アプリケーションを開始します。
2. 追跡すべき物体または荷をクリックします。
3. マスクに背景の一部が含まれている場合は、負のポイントを追加します。
4. 別のターゲットを選ぶ前に選択をクリアします。

最初のモデル読み込みには数秒かかります。ターゲットが選択されると、マスクは後続フレームでもそれに追従し、一時的に視界から外れても再びロックしようとします。

### 後方の作業エリアを確認する

後方を向いた PoE カメラを選択し、rear アプリケーションを開始します。推定距離が設定したしきい値をまたぐと、ステータスパネルは `SAFE`、`WARNING`、`DANGER` の間で変化します。

表示される距離を使用する前に、`configs/warning.yaml` でカメラ内部パラメータ、取り付け高さ、ピッチ、距離補正を設定してください。カメラや取り付け位置が変わると、新しいキャリブレーションが必要です。

### キャビン監視を有効にする

キャビンの USB カメラを選択し、cabin アプリケーションを開始します。疲労とヘルメットのチェックにはそれぞれ個別のスイッチがあります。不要な経路はオフにしてください。そのモデルは読み込まれません。

オペレータの視界を妨げることなく、ドライバーの顔が見える位置にカメラを設置します。通常のシフト時と同じ照明条件でテストしてください。


便利なサービスコマンド：

```bash
sudo systemctl restart visual-hub
./scripts/run_visual_hub.sh status
./scripts/run_visual_hub.sh stop
journalctl -u visual-hub -f
```

## 実測パフォーマンス

これらの数値は、4 つのアプリケーションを reComputer Rugged J401（Jetson Orin NX 16GB 搭載）上で動作させた状態で測定したものです。結果を比較する前に `sudo nvpmodel -m 0 && sudo jetson_clocks` を実行してください。

| アプリケーション | 構成 | 測定結果 |
| --- | --- | --- |
| Front segmentation | EfficientTAM-Ti, 512, PyTorch bf16 | 約 13.2 FPS、初回ロードに 7〜8 秒 |
| Rear warning | Depth Anything V2 Metric Small, TensorRT FP16 | depth 処理は約 21 FPS |
| Cabin monitoring | 1280x720 USB camera | 疲労およびヘルメットチェック有効時で約 5.4 FPS |
| Recording | Three streams, `nvv4l2h264enc` | 3 x 1920x1080、15 FPS、H.264 |

実際のスループットは、カメラ解像度、電源モード、温度、アクティブなアプリケーション数によって変化します。

## トラブルシューティング

| 症状 | 確認 | 対処 |
| --- | --- | --- |
| ポート 8000 が使用できない | `systemctl status visual-hub` | サービスを再起動し、`journalctl -u visual-hub` を確認する |
| アプリケーションが `CAMERA_BUSY` を報告する | `curl -s http://127.0.0.1:8000/api/hub/status` | カメラを保持しているアプリケーションまたは録画ジョブを停止する |
| USB カメラが開けない | `sudo dmesg \| grep -i "not enough bandwidth"` | USB 3 に移すか、他の USB ストリームを停止する |
| RTSP ストリームがフリーズする | アプリケーションステータスの `frame_age_s` を確認する | カメラ電源、PoE 予算、ネットワーク経路、RTSP 認証情報を確認する |
| 前方ビューの表示に数秒かかる | `journalctl -u visual-hub` | 最初の EfficientTAM モデル読み込みには通常 7〜8 秒かかります |

セレクタに表示されないカメラについては、まずインベントリを確認します：

```bash
curl -s http://127.0.0.1:8000/api/hub/cameras
```

追加の RTSP ソースを `/etc/seg-demo/visual-hub.env` の `HUB_EXTRA_CAMERAS` に追加するか、セレクタの手動入力行から URL を入力します。

## 安全性とアプリケーションの限界

- 後方エリア警告は単眼 depth を使用しており、物理的な距離センサではありません。低照度、反射、透明な物体、レンズの汚れ、激しい振動などにより、誤った推定値が生じる可能性があります。
- キャビン監視は RGB 画像と固定のタイミングルールを使用します。ドライバーごとのキャリブレーションや暗視機能はありません。
- 前方トラッキングは、ユーザーが選択した 1 つのターゲットを追跡します。対象物を識別したり、それを移動して安全かどうかを判断したりはしません。
- ヘルメットモデルは experimental です。運用で使用する前に、その精度、学習データ、ライセンスを確認してください。
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
- [Getting Started with reComputer Rugged J40](https://wiki.seeedstudio.com/ja/jetson/recomputer_rugged_j401/getting_started/)

## 関連リソース

- [reComputer Robotics J401 インターフェースとピン配置](/ja/recomputer_jetson_robotics_j401_getting_started/)
- [reComputer で EtherCAT 通信を実装する](/ja/recomputer_ethercat_communication/)
- [reComputer 上の PyCuVSLAM](/ja/pycuvslam_recomputer_robotics/)
- [reComputer Rugged J401 製品ページ](https://www.seeedstudio.com/reComputer-Rugged-J401-p-6509.html)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
