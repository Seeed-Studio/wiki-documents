---
description: このWikiでは、reComputer-RK上でYOLOv11を使用する方法を紹介します
title: reComputer-RK上でのYOLOv11による物体検出
keywords:
  - RockChip
  - reComputer RK
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /object_detection_with_yolov11_on_recomputer_rk
last_update:
  date: 3/9/2026
  author: Nolan Chen
no_comments: false
createdAt: 2026-3-9
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/ja/object_detection_with_yolov11_on_recomputer_rk/
---

# reComputer-RK上でのYOLOv11による物体検出
このプロジェクトは、Rockchipシリーズ開発ボード（RK3588 および RK3576）向けに、産業グレードで高性能なコンピュータビジョン（CV）アプリケーションソリューションを提供します。YOLOv11物体検出モデルを深く統合し、NPUアクセラレーションを活用することで、低レイテンシかつ高フレームレートのリアルタイム推論を実現します。
## プロジェクト構成
本プロジェクトは、RKNN-Toolkit2 の特定ドライバおよびランタイム要件を管理するため、プラットフォーム別に構成されています：
```pl
reComputer-RK-CV/
├── docker/                 # Environment setup files
│   ├── rk3576/             # Dockerfile for RK3576 (rknn-rt 2.1.0+)
│   └── rk3588/             # Dockerfile for RK3588 (rknn-rt 2.1.0+)
├── src/                    # Implementation logic
│   ├── rk3576/             # RK3576 source, models, and dependencies
│   └── rk3588/             # RK3588 source, models, and dependencies
└── .github/workflows/      # CI/CD for automated image building
```

## ハードウェア互換性
両方のチップは 6 TOPS のNPU性能を備えていますが、Docker 内で異なるハードウェアパスのマッピングが必要です。

| プラットフォーム | SoC | NPUノード | 推奨カメラ | イメージタグ |
| :--- | :--- | :--- | :--- | :--- |
| **RK3588** | RK3588/RK3588S | `/dev/dri/renderD129` | `/dev/video1` | `rk3588-yolo` |
| **RK3576** | RK3576 | `/dev/dri/renderD128` | `/dev/video0` | `rk3576-yolo` |

## はじめに
### Docker のインストール
ボード上に標準の Docker エンジンをインストールします：
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo systemctl enable --now docker
```

### X11 フォワーディング（任意）
ボードに直接接続されたモニタ上で検出ウィンドウを表示するには：
```bash
xhost +local:docker
```

### 検出プロジェクトの実行
このアプリケーションには自動検出機能があります。ディスプレイが見つからない場合、自動的に MJPEG ストリームを起動し、ブラウザからアクセスできるようにします。
#### reComputer RK3588 の場合：
```bash
sudo docker run --rm --privileged --net=host \
    -e DISPLAY=$DISPLAY \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -e PYTHONUNBUFFERED=1 \
    --device /dev/video1:/dev/video1 \
    --device /dev/dri/renderD129:/dev/dri/renderD129 \
    -v /proc/device-tree/compatible:/proc/device-tree/compatible \
    ghcr.io/seeed-projects/recomputer-rk-cv/rk3588-yolo:latest \
    python web_detection.py --model_path model/yolo11n.rknn --camera_id 1
```

#### reComputer RK3576 の場合：
```bash
sudo docker run --rm --privileged --net=host \
    -e DISPLAY=$DISPLAY \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -e PYTHONUNBUFFERED=1 \
    --device /dev/video0:/dev/video0 \
    --device /dev/dri/renderD128:/dev/dri/renderD128 \
    -v /proc/device-tree/compatible:/proc/device-tree/compatible \
    ghcr.io/seeed-projects/recomputer-rk-cv/rk3576-yolo:latest \
    python web_detection.py --model_path model/yolo11n.rknn --camera_id 0
```


## Web 連携とリアルタイムストリーミング
このプロジェクトには、Ultralytics 標準と互換性のある RESTful API が含まれており、`http://<Board_IP>:8000.` からアクセスできます。
- **リアルタイム動画フィード：** `/api/video_feed` にアクセスします。HTML に直接埋め込むことができます： 
```bash
<img src="http://<IP>:8000/api/video_feed">.
```

- **静止画像推論：**

```bash
curl -X POST "http://localhost:8000/api/models/yolo11/predict" -F "file=@/home/user/test.jpg"
```

- 動的設定：

```bash
# Modify confidence threshold without restarting
curl -X POST "http://localhost:8000/api/config" -d '{"obj_thresh": 0.5}'
```

## 開発者ガイド
### カスタムモデルのデプロイ
1. 変換済みの .rknn モデルをホスト側ディレクトリに配置します。
2. クラス設定ファイル class_config.txt（例："person"、"car"）を作成します。
3. `-v` でマウントし、起動コマンド内でパスを指定します：
```bash
sudo docker run ... \
    -v $(pwd)/my_model.rknn:/app/model/my_model.rknn \
    -v $(pwd)/class_config.txt:/app/class_config.txt \
    ... \
    python web_detection.py --model_path model/my_model.rknn --class_path class_config.txt
```

### CLI 引数リファレンス
`web_detection.py` は以下のパラメータをサポートします：

| 引数 | 説明 | デフォルト |
| :--- | :--- | :--- |
| `--model_path` | RKNN モデルファイルへのパス | （必須） |
| `--camera_id` | カメラ ID（例：`/dev/video0` の場合は 0） | 1 |
| `--class_path` | カスタムクラス設定ファイルへのパス | None（デフォルトは COCO 80） |
| `--port` | Web サーバのポート | 8000 |

## デモ動画
Seeed の今後発売予定の Rockchip RK3576 Dev Kit の最新 EVT サンプル上で YOLOv11 が動作している様子をご覧ください：


<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/5WdCvyrCF5Q" title="reComputer-RK上でのYOLOv11による物体検出" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>