---
description: このガイドでは、YOLOv26モデルとTensorRTアクセラレーションに基づくデュアルUSBカメラ画像処理システムをJetsonプラットフォーム上で構築する方法を説明します。Dockerまたはローカル環境のセットアップ、YOLOv26モデル（物体検出、姿勢推定、セグメンテーション）のダウンロードと準備、システムの設定、デュアルカメラ処理のデプロイについて説明します。このシステムは、TensorRTアクセラレーション、Webインターフェースプレビュー、安定性向上のためのMJPEG圧縮を備えた、2台のUSBカメラの同時リアルタイム映像ストリーム処理を特徴としています。
title: Jetson上のYOLOv26デュアルUSBカメラ画像処理システム
keywords:
  - reComputer
  - YOLOv26
  - Dual Camera
  - TensorRT
  - Computer Vision
  - Jetson
  - Object Detection
  - Pose Estimation
  - Image Segmentation
image: https://files.seeedstudio.com/wiki/Yolo11/connection.webp
slug: /ja/ai_robotics_yolov26_dual_camera_system
sku: 100090853,100076722,100060802,100032662
last_update:
  date: 01/28/2026
  author: Lorraine
---

<div style={{ textAlign: "justify" }}>
このwikiでは、YOLOv26モデルとTensorRTアクセラレーションに基づくデュアルUSBカメラ画像処理システムをゼロから構築する方法を実演します。このシステムには以下の機能が含まれています：
</div>

- **デュアルカメラ並列処理**：2台のUSBカメラの同時リアルタイム映像ストリーム処理
- **マルチタスク視覚解析**：物体検出、姿勢推定、画像セグメンテーション（SAMモデル）
- **TensorRTアクセラレーション**：NVIDIA TensorRTエンジンを使用して推論速度を大幅に向上
- **Webインターフェースプレビュー**：ブラウザを通じて処理結果をリアルタイムで表示
- **MJPEG圧縮**：USB帯域幅使用量を削減し、システムの安定性を向上

## 前提条件

- [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html) または reComputer シリーズの他の製品
- 2台のUSBカメラ
- USB Type-Cデータ伝送ケーブル（カメラ接続用）

---

## GitHubからダウンロード

### 方法1：リポジトリ全体をクローン（推奨）

これは全ファイルを一度に取得する最も簡単な方法です：

```bash
# 1. Navigate to your home directory
# ！！Replace this with your own username
cd /home/seeed

# 2. Clone the repository
git clone https://github.com/bleaaach/yolov26_jetson.git

# 3. Navigate to the project directory
cd yolov26_jetson

# 4. View downloaded files
ls -la
```
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/file.png"/></div>

以下のファイルが表示されるはずです：
- `run_dual_camera_docker.sh` - Dockerデプロイメントスクリプト
- `run_dual_camera_local.sh` - ローカルデプロイメントスクリプト
- `README.md` - このドキュメントファイル

### 方法2：個別ファイルのダウンロード

特定のスクリプトファイルのみが必要な場合は、wgetを使用して個別にダウンロードできます：

```bash
# 1. Navigate to your home directory
cd /home/seeed

# 2. Create project directory
mkdir -p yolov26_jetson
cd yolov26_jetson

# 3. Download Docker script
wget https://raw.githubusercontent.com/bleaaach/yolov26_jetson/main/run_dual_camera_docker.sh

# 4. Download Local script
wget https://raw.githubusercontent.com/bleaaach/yolov26_jetson/main/run_dual_camera_local.sh

# 5. Download README documentation
wget https://raw.githubusercontent.com/bleaaach/yolov26_jetson/main/README.md

# 6. View downloaded files
ls -la
```

### ダウンロードしたファイルの確認

ダウンロード後、ファイルが存在することを確認します：

```bash
# View file list
ls -la

# Check file permissions
```

スクリプトに実行権限がない場合は、追加します：

```bash
# Add execute permissions
chmod +x run_dual_camera_docker.sh
chmod +x run_dual_camera_local.sh

# Check again
ls -la
```

### 2つのデプロイメント方法の比較

| 機能 | Docker方法 | ローカル方法 |
|---------|---------------|--------------|
| **環境分離** | ✅ 完全に分離、ホスト環境を汚染しない | ❌ ホストに直接インストール |
| **デプロイメント速度** | ✅ 高速、ワンクリック起動 | ❌ 多くの依存関係の手動インストールが必要 |
| **ハードウェアアクセス** | ⚠️ デバイスマッピング設定が必要 | ✅ 全ハードウェアへの直接アクセス |
| **パフォーマンス** | ⚠️ コンテナオーバーヘッドあり | ✅ より良いパフォーマンス |
| **ストレージ容量** | ⚠️ 約2GBのDockerイメージが必要 | ✅ ストレージ使用量が少ない |
| **推奨使用ケース** | クイックテスト、マルチデバイスデプロイメント | 本番環境、最高のパフォーマンス |

---

## （オプション1）ローカル環境セットアップ

**ステップ1.** パッケージリストの更新とpipのインストール

```bash
# Update package list
sudo apt update

# Install pip
sudo apt install python3-pip -y

# Upgrade pip
pip install -U pip
```

システムにpipがプリインストールされていない場合は、以下のコマンドを使用してインストールします：

```bash
# Download get-pip.py
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py

# Install pip
python3 get-pip.py --user
```

**ステップ2.** Ultralyticsパッケージのインストール

Ultralyticsとそのオプション依存関係（モデルエクスポート用）をインストールします：

```bash
# Install Ultralytics
~/.local/bin/pip install ultralytics[export]
```

**ステップ3.** PyTorchとTorchvisionのインストール

**重要**：pip経由でインストールされるPyTorchとTorchvisionは、JetsonのARM64アーキテクチャと互換性がありません。Jetson専用にビルドされたバージョンを手動でインストールする必要があります。

まず互換性のないバージョンをアンインストールします：

```bash
# Uninstall incompatible versions
~/.local/bin/pip uninstall torch torchvision -y
```

次にJetPack 6.1互換バージョンをインストールします：

```bash
# Install PyTorch 2.5.0
~/.local/bin/pip install https://github.com/ultralytics/assets/releases/download/v0.0.0/torch-2.5.0a0+872d972e41.nv24.08-cp310-cp310-linux_aarch64.whl

# Install Torchvision 0.20
~/.local/bin/pip install https://github.com/ultralytics/assets/releases/download/v0.0.0/torchvision-0.20.0a0+afc54f7-cp310-cp310-linux_aarch64.whl
```

GitHubのダウンロードが遅い場合は、アクセラレーションプロキシを使用できます：

```bash
# Use gh proxy to download PyTorch
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/torch-2.5.0a0+872d972e41.nv24.08-cp310-cp310-linux_aarch64.whl

# Use gh proxy to download Torchvision
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/torchvision-0.20.0a0+afc54f7-cp310-cp310-linux_aarch64.whl
```

**ステップ4.** cuSPARSELtのインストール

cuSPARSELtはPyTorch 2.5.0の依存関係であり、別途インストールする必要があります：

```bash
# Install cuSPARSELt
sudo apt-get install -y libcusparselt0
```

**ステップ5.** onnxruntime-gpuのインストール

onnxruntime-gpuは一部のモデルエクスポート機能に使用されます。PyPI上のパッケージにはJetson用のaarch64バイナリが含まれていないため、手動インストールが必要です：

```bash
# Install onnxruntime-gpu 1.23.0
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/onnxruntime_gpu-1.23.0-cp310-cp310-linux_aarch64.whl
```

またはバージョン1.20.0を使用：

```bash
# Install onnxruntime-gpu 1.20.0
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/onnxruntime_gpu-1.20.0-cp310-cp310-linux_aarch64.whl
```

**ステップ6.** PATH環境変数の設定

ユーザーインストールモードを使用しているため、pipでインストールされた実行ファイルは`~/.local/bin/`ディレクトリに配置されます。このディレクトリをPATH環境変数に追加することを推奨します：

```bash
# Add to .bashrc
echo 'export PATH=$PATH:~/.local/bin' >> ~/.bashrc

# Reload .bashrc
source ~/.bashrc
```

**ステップ7.** インストールの確認

インストールされたパッケージのバージョンを確認します：

```bash
# Check versions
python3 -c "import ultralytics; import torch; import torchvision; import onnxruntime; print('ultralytics version:', ultralytics.__version__); print('torch version:', torch.__version__); print('torchvision version:', torchvision.__version__); print('onnxruntime version:', onnxruntime.__version__)"
```

期待される出力：

```
ultralytics version: 8.4.7
torch version: 2.5.0a0+872d972e41.nv24.08
torchvision version: 0.20.0a0+afc54f7
onnxruntime version: 1.23.0
```

**ステップ8.** YOLOv26推論機能のテスト

```python
from ultralytics import YOLO
import torch

# Check if CUDA is available
print(f"CUDA available: {torch.cuda.is_available()}")
if torch.cuda.is_available():
    print(f"CUDA device count: {torch.cuda.device_count()}")
    print(f"CUDA device name: {torch.cuda.get_device_name(0)}")

# Load YOLOv26n model
model = YOLO('yolo26v26n.pt')
print(f"Model loaded successfully!")

# Perform inference test
results = model('https://ultralytics.com/images/bus.jpg')
print(f"Inference successful! Detected {len(results[0].boxes)} objects")

# Display detection results
for i, box in enumerate(results[0].boxes):
    cls_id = int(box.cls[0])
    conf = float(box.conf[0])
    cls_name = model.names[cls_id]
    print(f"  Object {i+1}: {cls_name} (confidence: {conf:.2f})")
```

**ステップ9.** モデルファイルの準備

モデルファイルが正しい場所にダウンロードされていることを確認します：

```bash
# Check model directory
ls -la /home/seeed/ultralytics_data/

# Create directory if it doesn't exist
mkdir -p /home/seeed/ultralytics_data
```

モデルファイルが存在しない場合は、まずダウンロードします：

```bash
# Navigate to model directory
cd /home/seeed/ultralytics_data

# Download object detection model
yolo export model=yolov26n.pt format=engine device=0

# Download pose estimation model
yolo export model=yolov26n-pose.pt format=engine device=0

# Download segmentation model
yolo export model=yolov26n-seg.pt format=engine device=0

# Verify model files
ls -la
```

以下のファイルが表示されるはずです：
- `yolo26n.engine`
- `yolo26n-pose.engine`
- `yolo26n-seg.engine`

**ステップ10.** ローカルスクリプトの実行

これでローカルスクリプトを実行できます：

```bash
# 1. Navigate to project directory
cd /home/seeed/yolov26_jetson

# 2. Ensure script has execute permissions
chmod +x run_dual_camera_local.sh

# 3. Run Local script
./run_dual_camera_local.sh
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/local.png"/></div>

---

## （オプション2）Docker環境セットアップ

**ステップ1.** Dockerがインストールされていることを確認

まずDockerがインストールされているかを確認します：

```bash
# Check Docker version
docker --version
```

Dockerがインストールされていない場合は、まずインストールします：

```bash
# Update package list
sudo apt update

# Install Docker
sudo apt install docker.io -y

# Start Docker service
sudo systemctl start docker

# Add current user to docker group
sudo usermod -aG docker $USER

# Re-login to apply changes
newgrp docker
```

Docker環境の設定の詳細については、このGitHubリポジトリを参照してください：https://github.com/zibochen6/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.7-Docker/

**ステップ2.** Dockerサービスが実行されていることを確認

```bash
# Check Docker service status
sudo systemctl status docker
```

Dockerが実行されていない場合は、開始します：

```bash
# Start Docker service
sudo systemctl start docker
```

**ステップ3.** モデルファイルの準備

モデルファイルが正しい場所にダウンロードされていることを確認してください：

```bash
# Check model directory
ls -la /home/seeed/ultralytics_data/

# Create directory if it doesn't exist
mkdir -p /home/seeed/ultralytics_data
```

モデルファイルが存在しない場合は、まずダウンロードしてください：

```bash
# Navigate to model directory
cd /home/seeed/ultralytics_data

# Download object detection model
yolo export model=yolov26n.pt format=engine device=0

# Download pose estimation model
yolo export model=yolov26n-pose.pt format=engine device=0

# Download segmentation model
yolo export model=yolov26n-seg.pt format=engine device=0

# Verify model files
ls -la
```

以下のファイルが表示されるはずです：
- `yolo26n.engine`
- `yolo26n-pose.engine`
- `yolo26n-seg.engine`

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/export.png"/></div>

**ステップ 4.** Docker スクリプトの実行

これで Docker スクリプトを実行できます：

```bash
# 1. Navigate to project directory
cd /home/seeed/yolov26_jetson

# 2. Ensure script has execute permissions
chmod +x run_dual_camera_docker.sh

# 3. Run Docker script
./run_dual_camera_docker.sh
```

**ステップ 5.** Web インターフェースへのアクセス

ブラウザで以下のアドレスを開いてください：

```
http://localhost:5000
```

この時点で、ブラウザには両方のカメラからのリアルタイムフィードが「左カメラフィード | 右カメラフィード」のように並んで表示されます。実際のフレームレートと解像度は、ハードウェアの性能によって異なります。

:::note
システムを再起動する必要がある場合：

```bash
# 1. Stop and remove existing container
docker rm -f dual-camera-system

# 2. Re-run script
cd /home/seeed/yolov26_jetson
./run_dual_camera_docker.sh
```

:::
---

## リソース

- [クイックスタートガイド：NVIDIA Jetson と Ultralytics YOLO26](https://docs.ultralytics.com/guides/nvidia-jetson/)
- [Docker のインストール](https://github.com/zibochen6/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.7-Docker/)

## 技術サポートと製品ディスカッション

Seeed Studio 製品をお選びいただき、ありがとうございます！技術サポートと製品ディスカッションについては、以下のチャンネルをご利用ください：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
