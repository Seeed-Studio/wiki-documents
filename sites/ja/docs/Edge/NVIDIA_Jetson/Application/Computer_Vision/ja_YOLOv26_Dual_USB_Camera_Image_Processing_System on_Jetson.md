---
description: このガイドでは、Jetson プラットフォーム上で YOLOv26 モデルと TensorRT アクセラレーションに基づくデュアル GMSL カメラ画像処理システムの構築方法を説明します。特に reComputer J4012/AGX Orin 上の Sensing SG3S-ISX031C-GMSL2F カメラを対象とし、1920x1536@30fps の性能を実現します。
title: Jetson 上の YOLOv26 デュアル GMSL カメラ画像処理システム
keywords:
  - re
  - YOLOv26
  - Dual GMSL Camera
  - TensorRT
  - SG3S-ISX031C-GMSL2F
  - Computer Vision
  - Jetson
  - Object Detection
  - Pose Estimation
  - Image Segmentation
image: https://files.seeedstudio.com/wiki/yolov26_on_jetson/local.png
slug: /ai_roboticsyolov26_dual_camera_system
sku: 100090853,100076722,100060802,100032662
last_update:
  date: 02/10/2026
  author: Lorraine
---
## はじめに

人工知能とエッジコンピューティング技術の急速な発展に伴い、産業用ビジョンシステムはより高いインテリジェンスとリアルタイム処理能力へと進化しています。ディープラーニングモデルを搭載したデュアルカメラ画像処理システムにより、複数視点からの同時解析、物体検出、ポーズ推定、インスタンスセグメンテーションが可能になります。これにより、産業検査、ロボティクス、自動監視アプリケーションの効率と精度が向上します。本ガイドでは、NVIDIA Jetson プラットフォーム上で YOLOv26 と TensorRT アクセラレーションを用いて、高性能なデュアル GMSL カメラ画像処理システムを構築する方法を紹介します。

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/detect.png" />
</div>

この wiki では、**reComputer Robotics J5011** 上で **TensorRT** によって最適化された **YOLOv26** モデルをデプロイし、リアルタイムのマルチタスクビジョン解析を実現します。このシステムは、高帯域幅かつ低レイテンシのビデオ伝送を可能にする GMSL (Gigabit Multimedia Serial Link) カメラを利用しており、過酷な環境下での産業用途に最適です。物体検出、ポーズ推定、インスタンスセグメンテーションという 3 種類の YOLOv26 モデルを同時に実行し、すべて TensorRT によってアクセラレーションすることで、Jetson Orin の強力な GPU 上で最大限のスループットを引き出します。

**デュアル GMSL カメラ画像処理システムとは？**

デュアル GMSL カメラ画像処理システムは、高解像度カメラ 2 台とディープラーニング推論機能を統合したエッジ AI ソリューションです。従来の単眼カメラビジョンシステムとは異なり、デュアルカメラ構成には次のような利点があります：
- **ステレオビジョン**：奥行き認識と 3D シーン再構成を実現
- **広い視野角**：重なり合う視点でより広いエリアをカバー
- **冗長性**：一方のカメラが故障しても連続稼働を確保
- **多角的解析**：異なる視点から物体を捉え、認識精度を向上

このシステムは、シールドケーブルを用いた最長 15 メートルの長距離でも信頼性の高いビデオ伝送を可能にする GMSL インターフェースを活用しており、電磁干渉のある産業環境に適しています。

**なぜ Jetson 上で YOLOv26 を使うのか？**

[Ultralytics Jetson Guide](https://docs.ultralytics.com/guides/nvidia-jetson/) では、組み込み向けデプロイにおける YOLOv26 の利点がいくつか挙げられています：

1. **ARM64 上での高効率**：モデルアーキテクチャは Jetson デバイスの ARM64 プロセッサ向けに最適化されており、低消費電力を維持しつつ高いスループットを実現します。
2. **Tensor Core アクセラレーション**：**TensorRT** にエクスポートすると、YOLOv26 は Jetson Orin の Ampere GPU アーキテクチャに搭載された専用 Tensor Core を利用します。これにより次のことが可能になります：
    -   **低レイテンシ**：リアルタイム産業検査にとって重要です。
    -   **高スループット**：複数の高解像度ストリームを同時に処理可能。
3. **統一フレームワーク**：単一のアーキテクチャで（Detection、Segmentation、Pose）といった複数タスクをサポートし、リソースに制約のあるエッジデバイスへのデプロイを簡素化します。

<div align="center">
    <img width={600}
    src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J5011-with-GMSL-extension-board-p-6681.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={'4'}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 主な特長

- **高解像度 GMSL キャプチャ**：デュアル [Sensing SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html) カメラを **1920x1536** 解像度でサポート。
- **TensorRT のみの推論**：純粋な TensorRT エンジンを使用することで PyTorch ランタイムのオーバーヘッドを排除し、最大スループットを実現。
- **マルチタスクビジョン解析**：物体検出、ポーズ推定、インスタンスセグメンテーションを同時実行。
- **産業用途向け最適化**：
    - **入力**：1920x1536 @ 30fps（Raw YUY2）
    - **レイテンシ**：DMA バッファとマルチスレッドパイプラインにより最小化

## YOLOv26 モデル概要

このシステムは、リアルタイムコンピュータビジョンのために **YOLOv26** アーキテクチャを使用します。NVIDIA Jetson Orin のようなエッジ AI デバイスで良好に動作する **Nano (n)** シリーズモデルをデプロイします。

**デプロイするモデル**

3 種類のモデルバリアントを同時に実行します：

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/file2.png"/></div>

1.  **物体検出 (`yolov26n`)**：
    -   **タスク**：バウンディングボックスによる検出と分類。
    -   **クラス**：80 個の標準 COCO クラス（Person、Vehicle など）。
    -   **利点**：主要な物体位置特定のための非常に高速な推論。

2.  **ポーズ推定 (`yolov26n-pose`)**：
    -   **タスク**：人体骨格キーポイント検出（17 キーポイント）。
    -   **利点**：外部の重量級ポーズライブラリを用いずにリアルタイム行動解析が可能。

3.  **インスタンスセグメンテーション (`yolov26n-seg`)**：
    -   **タスク**：ピクセルレベルでの物体マスキング。
    -   **利点**：バウンディングボックスだけでは不十分な欠陥検出に有用な、精密な物体輪郭を提供。

**最適化戦略**：すべてのモデルは **FP16 精度**の **TensorRT Engine 形式 (.engine)** にエクスポートされます。これにより PyTorch ランタイムのオーバーヘッドを排除し、Orin の 100+ TOPS（Tera Operations Per Second）の AI 性能を最大限に活用します。

## 前提条件

**ハードウェア**

- **[reComputer Robotics J5011](https://www.seeedstudio.com/reComputer-Robotics-J5011-with-GMSL-extension-board-p-6681.html)**
- **2x [Sensing SG3S-ISX031C-GMSL2F Camera](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)**
- **GMSL デシリアライザボード**：Jetson Orin と互換性のあるもの（ドライバがインストールされていること）
- **ケーブル**：高品質な Fakra ケーブル

**ソフトウェア**
- **JetPack 6.x**（L4T 36.x）
- **GStreamer**（NVIDIA アクセラレーションプラグイン付き、`nvv4l2camerasrc` または `io-mode=dmabuf` を指定した標準 `v4l2src`）
- **Python 3.10+**
- **Ultralytics YOLOv26**

---

## インストールとセットアップ

**ステップ 0：カメラパラメータの確認**

まず、v4l2-ctl を使用してカメラがサポートするフォーマットとフレームレートを確認します：

```bash
v4l2-ctl -d /dev/video0 --list-formats-ext
v4l2-ctl -d /dev/video1 --list-formats-ext
```

このコマンドにより、解像度ごとのカメラの最大フレームレートが表示されます。SG3S-ISX031C-GMSL2F カメラを例にすると、出力は次のようになります：

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/dp.png"/></div>

:::note
<mark>1920x1536 解像度での 30fps 制限は、AGX Orin の性能上限ではなく、カメラハードウェアの制約です。</mark> AGX Orin は、より低い解像度や軽量なモデルであれば、はるかに高いフレームレートを処理することが可能です。別のカメラモデルを使用している場合は、対象解像度での最大フレームレートについて、そのカメラのデータシートを参照してください。
:::

**ステップ 1：リポジトリのクローン**

```bash
cd /home/seeed
git clone https://github.com/bleaaach/yolov26_jetson.git
cd yolov26_jetson
```
<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/file.png"/></div>

**詳細なインストール手順**

環境をゼロからセットアップするには、次の手順に従ってください。

**ステップ 1：パッケージリストの更新と pip のインストール**

```bash
sudo apt update
sudo apt install python3-pip -y
pip install -U pip
```

システムに pip がプリインストールされていない場合は、次のコマンドでインストールします：

```bash
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3 get-pip.py --user
```

**ステップ 2：Ultralytics パッケージのインストール**

```bash
~/.local/bin/pip install ultralytics[export]
```

**ステップ 3：PyTorch と Torchvision のインストール**

pip でインストールした PyTorch と Torchvision は、Jetson の ARM64 アーキテクチャとは互換性がありません。Jetson 向けにビルドされたバージョンを手動でインストールする必要があります。

まず、互換性のないバージョンをアンインストールします：

```bash
~/.local/bin/pip uninstall torch torchvision -y
```

次に、JetPack 6.1 と互換性のあるバージョンをインストールします：

```bash
~/.local/bin/pip install https://github.com/ultralytics/assets/releases/download/v0.0.0/torch-2.5.0a0+872d972e41.nv24.08-cp310-cp310-linux_aarch64.whl
~/.local/bin/pip install https://github.com/ultralytics/assets/releases/download/v0.0.0/torchvision-0.20.0a0+afc54f7-cp310-cp310-linux_aarch64.whl
```

GitHub からのダウンロードが遅い場合は、加速プロキシを使用できます：

```bash
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/torch-2.5.0a0+872d972e41.nv24.08-cp310-cp310-linux_aarch64.whl
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/torchvision-0.20.0a0+afc54f7-cp310-cp310-linux_aarch64.whl
```

**ステップ 4：cuSPARSELt のインストール**

```bash
sudo apt-get install -y libcusparselt0
```

**ステップ 5：onnxruntime-gpu のインストール**

onnxruntime-gpu は一部のモデルエクスポート機能に使用されます。PyPI 上のパッケージには Jetson 向けの aarch64 バイナリが含まれていないため、手動インストールが必要です：

```bash
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/onnxruntime_gpu-1.23.0-cp310-cp310-linux_aarch64.whl
```

または、バージョン 1.20.0 を使用します：

```bash
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/onnxruntime_gpu-1.20.0-cp310-cp310-linux_aarch64.whl
```

**ステップ 6：PATH 環境変数の設定**

```bash
echo 'export PATH=$PATH:~/.local/bin' >> ~/.bashrc
source ~/.bashrc
```

**ステップ 7：インストールの検証**

```bash
python3 -c "import ultralytics; import torch; import torchvision; import onnxruntime; print('ultralytics version:', ultralytics.__version__); print('torch version:', torch.__version__); print('torchvision version:', torchvision.__version__); print('onnxruntime version:', onnxruntime.__version__)"
```

期待される出力：

```
ultralytics version: 8.4.7
torch version: 2.5.0a0+872d972e41.nv24.08
torchvision version: 0.20.0a0+afc54f7
onnxruntime version: 1.23.0
```

**ステップ 8：YOLOv26 推論機能をテストする**

```python
from ultralytics import YOLO
import torch

print(f"CUDA available: {torch.cuda.is_available()}")
if torch.cuda.is_available():
    print(f"CUDA device count: {torch.cuda.device_count()}")
    print(f"CUDA device name: {torch.cuda.get_device_name(0)}")

model = YOLO('yolov26n.pt')
print(f"Model loaded successfully!")

results = model('https://ultralytics.com/images/bus.jpg')
print(f"Inference successful! Detected {len(results[0].boxes)} objects")

for i, box in enumerate(results[0].boxes):
    cls_id = int(box.cls[0])
    conf = float(box.conf[0])
    cls_name = model.names[cls_id]
    print(f"  Object {i+1}: {cls_name} (confidence: {conf:.2f})")
```

**ステップ 9：モデルファイルを準備する**

```bash
ls -la /home/seeed/ultralytics_data/
mkdir -p /home/seeed/ultralytics_data
```

モデルファイルが存在しない場合は、先にダウンロードしてください：

```bash
cd /home/seeed/ultralytics_data
yolo export model=yolov26n.pt format=engine device=0 half=True
yolo export model=yolov26n-pose.pt format=engine device=0 half=True
yolo export model=yolov26n-seg.pt format=engine device=0 half=True
ls -la
```

次のファイルが表示されるはずです：
- `yolov26n.engine`
- `yolov26n-pose.engine`
- `yolov26n-seg.engine`

**ステップ 10：ローカルスクリプトを実行する**

```bash
cd /home/seeed/yolov26_jetson
chmod +x run_dual_gmsl_local.sh
./run_dual_gmsl_local.sh
```

---

## 設定と実行

このシステムは、SG3S-ISX031C カメラ向けに事前設定された `run_dual_gmsl_local.sh` を使用します。

**カメラ設定の詳細**

| パラメータ | 値 | 備考 |
|-----------|-------|------|
| **カメラモデル** | SG3S-ISX031C-GMSL2F | Sensing GMSL2 カメラ |
| **キャプチャ解像度** | **1920 x 1536** | センサーのフル解像度 |
| **キャプチャ FPS** | **30 FPS** | ネイティブフレームレート |
| **処理解像度** | 640 x 480 | 推論用にハードウェア（VIC）でダウンスケール |
| **ピクセルフォーマット** | YUY2 | ハードウェアで BGR に変換 |

**システムの実行**

```bash
cd /home/seeed/yolov26_jetson
chmod +x run_dual_gmsl_local.sh
./run_dual_gmsl_local.sh
```

<video src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/test.mp4" controls width="800"></video>

:::note
SG3S-ISX031C-G-GMSL2F カメラは、フル解像度（1920x1536）で最大 30fps の表示フレームレートに制限されています。これはカメラハードウェアの制約であり、AGX Orin の性能上限ではありません。AGX Orin は、より低い解像度や軽量なモデルであれば、はるかに高いフレームレートを処理することが可能です。AGX Orin の一般的な推論性能については、[Ultralytics Jetson Guide](https://docs.ultralytics.com/guides/nvidia-jetson/#nvidia-jetson-agx-orin-developer-kit-64gb) を参照してください。
:::

## トラブルシューティング

- **FPS が低い？**: `.pt` ではなく `.engine` モデルを使用していることを確認してください。スクリプトは `.engine` の使用を前提としています。
- **ビデオが表示されない？**: GMSL 接続を確認し、`/dev/video*` デバイスが存在することを確認してください。`v4l2-ctl --list-devices` でドライバを検証します。

## リソース

- [Sensing SG3S-ISX031C-GMSL2F 製品ページ](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- [NVIDIA Jetson ダウンロードセンター](https://developer.nvidia.com/embedded/downloads)
- [Ultralytics YOLOv26 on NVIDIA Jetson ガイド](https://docs.ultralytics.com/guides/nvidia-jetson/)


## 技術サポートと製品ディスカッション

Seeed Studio の製品をお選びいただきありがとうございます。技術サポートおよび製品に関するディスカッションには、以下のチャネルをご利用ください：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
