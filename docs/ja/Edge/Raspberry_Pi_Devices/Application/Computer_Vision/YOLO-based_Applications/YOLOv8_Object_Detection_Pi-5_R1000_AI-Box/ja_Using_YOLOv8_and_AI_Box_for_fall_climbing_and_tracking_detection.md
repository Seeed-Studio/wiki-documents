---
description: このwikiでは、転倒、バリア越え、人物追跡のためにAI BoxでYOLOモデルを使用する方法を説明します。
title: 転倒、登攀、追跡のためのAI BoxでのYOLOv8
keywords:
  - Edge AI
  - rpi5
  - Hailo
  - YOLO
image: https://files.seeedstudio.com/wiki/YOLOv8_AI_Box/recompuer_ai_box.webp
slug: /ja/yolov8_on_ai_box_for_fall_climbing_tracking
last_update:
  date: 07/29/2025
  author: Jiahao

no_comments: false # for Disqus
---

# YOLOv8 AI Box: 転倒、登攀、追跡


## はじめに

このプロジェクトでは、[reComputed AI Box](https://www.seeedstudio.com/reComputer-AI-R2140-12-p-6431.html)または[reComputed Industry AI Box](https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html)を使用して、YOLOv8モデルによる転倒検出、登攀検出、追跡検出を実装する方法をガイドします。


## ハードウェアの準備

|                                               reCompuer AI Box                                              |                                               reComputer Industry AI Box                                               |
| :----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
| ![Raspberry Pi AI Kit](https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image114993560.jpeg) | ![reComputer R1100](https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114993595-recomputer-ai-industrial-r2135-12.jpg) |
| [**今すぐ購入**](https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html?utm_source=PiAICourse&utm_medium=github&utm_campaign=Course) | [**今すぐ購入**](https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html?utm_source=PiAICourse&utm_medium=github&utm_campaign=Course) |

> 💡 **注意**: このプロジェクトにはreComputer AI BoxまたはreComputer Industry AI Boxが必要です。


##  転倒検出

### ランタイム環境のインストール

```bash
sudo apt update && sudo apt full-upgrade -y && sudo apt install hailo-all
```

### プロジェクトのダウンロード

```bash
git clone https://github.com/Seeed-Projects/fall_detection_with_AIBox.git
cd fall_detection_with_AIBox
```

### Python環境の準備

```bash
python -m venv .env --system-site-packages  && source .env/bin/activate
pip install -r requirements.txt
```

### プロジェクトの実行
```bash
python app.py -i ./falldown_test.mp4 -n ./yolov8n.hef --show-fps -l ./common/coco.txt
```

### 結果

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/H0NaAevLo2k" title="How the Seeed Raspberry Pi AI Box Helps in Abnormal Event Detection" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## フェンス登攀

### ランタイム環境のインストール

```bash
sudo apt update && sudo apt full-upgrade -y && sudo apt install hailo-all
```

### プロジェクトのダウンロード

```
git clone https://github.com/Seeed-Projects/cross_fence_with_AIBox.git
cd cross_fence_with_AIBox
```

### Python環境の準備

```bash
python -m venv .env --system-site-packages  && source .env/bin/activate
pip install -r requirements.txt
```

### プロジェクトの実行

```bash
python app.py -i ./scale_the_fence.mp4 -n ./yolov8n.hef --show-fps -l ./common/coco.txt 
```

### 結果

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/_-89czNbZ_M?list=PLpH_4mf13-A3Wm6hJp7JeT4DD9NXXUAca" title="Seeed Raspberry Pi AI Box Helps in Abnormal Event Detection: Fence Climbing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 追跡 

### ランタイム環境のインストール

```bash
sudo apt update && sudo apt full-upgrade -y && sudo apt install hailo-all
```

### プロジェクトのダウンロード

```bash
git clone https://github.com/Seeed-Projects/track_people_with_AIBox.git
cd fall_detection_with_AIBox
```

### Python環境の準備

```bash
python -m venv .env --system-site-packages  && source .env/bin/activate
pip install -r requirements.txt
```

### プロジェクトの実行

```bash
python app.py -i ./people-walking.mp4 -n ./yolov8n.hef --show-fps -l ./common/coco.txt --track
```

### 結果 

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/xoeMcaG_FxE?list=PLpH_4mf13-A3Wm6hJp7JeT4DD9NXXUAca" title="reComputer Object Detection and Tracking: The Role of YOLOv8 in Shaping Results" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>