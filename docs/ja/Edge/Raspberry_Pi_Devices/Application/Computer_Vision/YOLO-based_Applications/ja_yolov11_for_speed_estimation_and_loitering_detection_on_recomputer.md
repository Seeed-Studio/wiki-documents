---
description: このwikiでは、速度推定と徘徊検知にYOLOv11を使用する方法を説明します。
title: 速度推定と徘徊検知のためのYOLOv11
keywords:
  - Edge
  - reComputer AI 
  - YOLOv11
  - hailo
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/yolov11_for_speed_estimation_and_loitering_detection_on_recomputer
last_update:
  date: 12/16/2025
  author: Jiahao

no_comments: false # for Disqus
---

# 速度推定と徘徊検知のためのYOLOv11

## はじめに

[YOLOv11](https://github.com/ultralytics/ultralytics)は、「You Only Look Once」（YOLO）ファミリーのリアルタイム物体検出モデルの最新かつ最も先進的なバージョンで、2024年後半にUltralyticsによってリリースされました。

このwikiは、YOLOv11を使用してHailo AIアクセラレータ向けに最適化された包括的なリアルタイム物体検出、追跡、速度推定システムです。このプロジェクトは、同時追跡と速度計算機能を備えた効率的な物体検出（人物と車両に焦点）を可能にします。

## ハードウェアの準備

<div class="table-center">
  <table align="center">
    <tr>
        <th>reComputer AI Industrial R2000</th>
        <th>reComputer AI R2000</th>
        <th>reComputer Industrial R2045</th>
        <th>reComputer Industrial R2135</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114993595-recomputer-ai-industrial-r2135-12.jpg" style={{width:250, height:'auto'}}/></div></td>
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
              <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2045-12-p-6544.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
              <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>


<div style={{ color: 'red', fontWeight: 'bold' }}>
  注意：入力としてUSBカメラが必要です。
</div>

## Hailoソフトウェアのインストールと動作確認

### システムの更新

```bash
sudo apt update
sudo apt full-upgrade
```

:::note
更新中に以下の問題が発生することがあります。

```
Get:1 http://deb.debian.org/debian bookworm InRelease [151 kB]
Get:2 http://deb.debian.org/debian-security bookworm-security InRelease [48.0 kB]
Get:3 http://deb.debian.org/debian bookworm-updates InRelease [55.4 kB]
Get:4 http://archive.raspberrypi.com/debian bookworm InRelease [39.0 kB]
Reading package lists... Done                                   
E: Release file for http://deb.debian.org/debian/dists/bookworm/InRelease is not valid yet (invalid for another 58d 8h 26min 35s). Updates for this repository will not be applied.
E: Release file for http://deb.debian.org/debian-security/dists/bookworm-security/InRelease is not valid yet (invalid for another 84d 18h 23min 59s). Updates for this repository will not be applied.
E: Release file for http://archive.raspberrypi.com/debian/dists/bookworm/InRelease is not valid yet (invalid for another 84d 13h 13min 5s). Updates for this repository will not be applied.
E: Release file for http://deb.debian.org/debian/dists/bookworm-updates/InRelease is not valid yet (invalid for another 85d 0h 52min 29s). Updates for this repository will not be applied. 
```

これはRaspberry Piの時刻が正しく設定されていないためです。以下のコマンドでRaspberry Piの時刻を手動で設定する必要があります：

```
# This command only you can connect google.com
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
```

Raspberry Piの時刻を設定した後、Raspberry Piを更新できます。
:::

### PCIeをgen2/gen3に設定（gen3はgen2より高速）

```/boot/firmware/config.txt```に以下のテキストを追加します

```bash
#Enable the PCIe external connector

dtparam=pciex1

#Force Gen 3.0 speeds

dtparam=pciex1_gen=3

```

:::note
gen2を使用したい場合は、dtparam=pciex1_gen=3をコメントアウトしてください
:::

### hailo-allのインストールと再起動

Raspberry Pi5でターミナルを開き、以下のコマンドを入力してHailoソフトウェアをインストールします。

```bash
sudo apt install hailo-all
sudo reboot
```

### ソフトウェアとハードウェアの確認

Raspberry Pi5でターミナルを開き、以下のコマンドを入力してhailo-allがインストールされているかを確認します。

```bash
hailortcli fw-control identify
```

正しい結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Raspberry Pi5でターミナルを開き、以下のコマンドを入力してhailo-8Lが接続されているかを確認します。

```bash
lspci | grep Hailo
```

正しい結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

## プロジェクトの実行

### プロジェクトのインストール

```bash
cd ~ && git clone https://github.com/Seeed-Projects/YOLOv11-Hailo-Tracker.git
cd YOLOv11-Hailo-Tracker
```

### 環境の準備

```bash
python -m venv .env --system-site-packages
source .env/bin/activate
pip install -r requirements.txt
```

### プロジェクトの実行

`localhost:5000`にアクセスしてフロントエンドに到達し、設定を構成します。

```bash
 python run_api.py
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/yolov11/image.png" alt="pir" width={1000} height="auto"/></p>

## 結果

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/cscCVUAidGo" title="YOLOv11n on Raspberry Pi reComputer for Loitering Detection and Speed Estimation (Hailo-8)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
