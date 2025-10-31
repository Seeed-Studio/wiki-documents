---
description: このwikiでは、Raspberry-pi-AI-kitアクセラレーションを使用したreComputer R1000でのYOLOv8によるオブジェクト検出を実演します。
title: Hailo-8LによるreComputer R1000でのYOLOv8オブジェクト検出
keywords:
  - Edge
  - reComputer r1000
  - Object detecton
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l
last_update:
  date: 06/26/2024
  author: Jiahao

no_comments: false # for Disqus
---

# Hailo-8LによるreComputer R1000でのYOLOv8オブジェクト検出

## はじめに

[YOLOv8](https://github.com/ultralytics/ultralytics)（You Only Look Once version 8）は、リアルタイムオブジェクト検出モデルの人気のYOLOシリーズの最新版です。速度、精度、柔軟性において複数の進歩を導入することで、前身の強みを基盤として構築されています。[Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html)は推論速度を加速するために使用され、Hailo-8Lチップを中心に構築された13 TOPSニューラルネットワーク推論アクセラレータを特徴としています。

このwikiでは、Raspberry-pi-AI-kitアクセラレーションありとなしで[reComputer R1000](https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html)上でYOLOv8を使用したオブジェクト検出を実演します。Raspberry Pi AI Kitは、Raspberry Piの性能を向上させ、スマートリテール、スマートトラフィックなどの人工知能と機械学習アプリケーションにおけるその潜在能力を解き放ちます。Raspberry AI KitはRaspberry Pi 5向けに設計されていますが、私たちはCM4搭載のエッジゲートウェイで実験を行いました。エッジデバイスをインテリジェントなIoTゲートウェイに変える可能性に興奮しています！

## ハードウェアの準備

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer r1000</th>
  <th>Raspberry Pi AI Kit</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113060086-raspberry-pi-ai-kit-45font.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## このプロジェクトを実行する

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Hailo-8Lで実行">

### ステップ1: AIキットをインストール

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/install_AIkit.gif" alt="pir" width={1000} height="auto"/></p>

### ステップ2: システムを更新してPCIeをgen3に設定

#### システムを更新

reComputer R1000でターミナルを開き、以下のコマンドを入力してシステムを更新します。

```
sudo apt update
sudo apt full-upgrade
```

#### PCIeをgen3に設定する

reComputer R1000でターミナルを開き、以下のコマンドを入力してreComputer R1000を設定します。

```
sudo raspi-config
```

オプション「6 Advanced Options」を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step1.png" alt="pir" width={1000} height="auto"/></p>

次にオプション「A8 PCIe Speed」を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step2.png" alt="pir" width={1000} height="auto"/></p>

「Yes」を選択してPCIe Gen 3モードを有効にします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step3.png" alt="pir" width={1000} height="auto"/></p>

「Finish」をクリックして終了します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step4.png" alt="pir" width={1000} height="auto"/></p>

### ステップ3: Hailoソフトウェアのインストールとインストール確認

#### Hailoソフトウェアのインストール

reComputer R1000でターミナルを開き、以下のコマンドを入力してHailoソフトウェアをインストールします。

```
sudo apt install hailo-all
sudo reboot
```

#### ソフトウェアとハードウェアの確認

reComputer R1000でターミナルを開き、以下のコマンドを入力してhailo-allがインストールされているかどうかを確認します。

```
hailortcli fw-control identify
```

正しい結果は以下のように表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

reComputer R1000でターミナルを開き、以下のコマンドを入力してhailo-8Lが接続されているかどうかを確認します。

```
lspci | grep Hailo
```

正しい結果は以下のように表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

### YOLOv8の実行

reComputer R1000でターミナルを開き、以下のコマンドを入力してYOLOv8を実行します。

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
bash ./run.sh object-detection-hailo
```

### 結果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_with_AIkit.gif" alt="pir" width={1000} height="auto"/></p>
</TabItem>

<TabItem value="Method 2" label="Hailo-8Lなしで実行">

### YOLOv8を実行

reComputer R1000でターミナルを開き、以下のコマンドを入力してYOLOv8を実行します。

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
bash ./run.sh object-detection
```

### 結果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_withoutAIkit.gif" alt="pir" width={1000} height="auto"/></p>
</TabItem>
</Tabs>

## 結果

AIキットを使用した加速前後でのYOLOv8物体検出の推論速度を比較しました（入力解像度640*640）。結果は、加速前の推論速度がわずか0.75 FPSであったのに対し、加速後は29.5 FPSに達したことを示しています。

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/yZ0IlqLZ86E" title="YOLOv8 Object Detection on reComputer R1000(CM4-Powered Edge Gateway) with Hailo-8L" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## プロジェクトの展望

このプロジェクトでは、AIキットありとなしでのYOLOv8物体検出の実行速度をベンチマークしました。結果は、AIキットがエッジデバイスの性能を大幅に向上させることができることを示しています。今後は、セマンティックセグメンテーションやポーズ推定など、AIキット加速後の異なるシナリオでのYOLOv8の実行速度をベンチマークする予定です。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
