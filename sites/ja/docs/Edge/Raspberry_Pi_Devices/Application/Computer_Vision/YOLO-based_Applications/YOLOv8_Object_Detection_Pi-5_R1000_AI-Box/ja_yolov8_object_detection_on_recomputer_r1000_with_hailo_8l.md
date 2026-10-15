---
description: この Wiki では、Raspberry-pi-AI-kit アクセラレーションを用いて reComputer R シリーズ上で YOLOv8 による物体検出を行う方法を紹介します。
title: YOLOv8 による物体検出（Hailo-8L 搭載 reComputer R シリーズ）
keywords:
  - エッジ
  - reComputer R シリーズ
  - 物体検出
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /yolov8_object_detection_on_recomputer_r1000_with_hailo_8l
sku: 113991274, E24010521, 114993627, 100020831, 100061305, 103990763
last_update:
  date: 04/17/2026
  author: William Zhang
no_comments: false
createdAt: '2024-06-27'
updatedAt: '2025-09-10'
url: https://wiki.seeedstudio.com/ja/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/
---

# YOLOv8 による物体検出（Hailo-8L 搭載 reComputer R シリーズ）

## はじめに

[YOLOv8](https://github.com/ultralytics/ultralytics)（You Only Look Once バージョン 8）は、リアルタイム物体検出モデルである YOLO シリーズの中で最も一般的なモデルです。従来バージョンの長所を受け継ぎつつ、速度、精度、柔軟性の面でいくつかの改良が加えられています。[Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html) は、Hailo-8L チップを中心に構成された 13 TOPS のニューラルネットワーク推論アクセラレータを搭載しており、推論速度を高速化するために使用されます。

この Wiki では、R シリーズ上で Raspberry-pi-AI-kit によるアクセラレーションあり／なしの両方で YOLOv8 を用いた物体検出を実演します。Raspberry Pi AI Kit は Raspberry Pi の性能を引き上げ、スマートリテールやスマートトラフィックなどの人工知能・機械学習アプリケーションにおける潜在能力を引き出します。Raspberry AI Kit は本来 Raspberry Pi 5 向けに設計されていますが、ここでは CM4 搭載のエッジゲートウェイでの動作を検証しました。エッジデバイスをインテリジェントな IoT ゲートウェイへと変身させることにワクワクしています！

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
          <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
  <table align="center">
    <tr>
      <th>reComputer AI Industrial R2100</th>
      <th>reComputer Industrial R20xx</th>
      <th>reComputer Industrial R21xx</th>
      <th>reComputer AI R2100</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/q/q/qq_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2140-12-p-6431.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## このプロジェクトを実行する

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Hailo-8L で実行">

### ステップ 1: AI キットをインストールする

AI アクセラレーションを内蔵した R2000 シリーズデバイスを使用している場合、このステップはスキップできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/install_AIkit.gif" alt="pir" width={1000} height="auto"/></p>

### ステップ 2: システムを更新し、PCIe を Gen3 に設定する

#### システムを更新する

reComputer R1000 上でターミナルを開き、以下のコマンドを入力してシステムを更新します。

```
sudo apt update
sudo apt full-upgrade
```

#### PCIe を Gen3 に設定する

reComputer R1000 上でターミナルを開き、以下のコマンドを入力して reComputer R1000 を設定します。

```
sudo raspi-config
```

オプション "6 Advanced Options" を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step1.png" alt="pir" width={1000} height="auto"/></p>

次にオプション "A8 PCIe Speed" を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step2.png" alt="pir" width={1000} height="auto"/></p>

"Yes" を選択して PCIe Gen 3 モードを有効にします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step3.png" alt="pir" width={1000} height="auto"/></p>

"Finish" をクリックして終了します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step4.png" alt="pir" width={1000} height="auto"/></p>

### ステップ 3: Hailo ソフトウェアをインストールし、インストールを検証する

#### Hailo ソフトウェアをインストールする

reComputer R1000 上でターミナルを開き、以下のコマンドを入力して Hailo ソフトウェアをインストールします。

```
sudo apt install hailo-all
sudo reboot
```

#### ソフトウェアとハードウェアを確認する

reComputer R1000 上でターミナルを開き、以下のコマンドを入力して hailo-all がインストールされているか確認します。

```
hailortcli fw-control identify
```

正しい結果は次のように表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

reComputer R1000 上でターミナルを開き、以下のコマンドを入力して hailo-8L が接続されているか確認します。

```
lspci | grep Hailo
```

正しい結果は次のように表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

### YOLOv8 を実行する

reComputer R1000 上でターミナルを開き、以下のコマンドを入力して YOLOv8 を実行します。

注意：実行中は HDMI ケーブル経由で外部ディスプレイを接続しておく必要があります。接続されていない場合、可視化インターフェースは読み込まれません。

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
bash ./run.sh object-detection-hailo
```

### 結果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_with_AIkit.gif" alt="pir" width={1000} height="auto"/></p>

### 注意
SSH などでリモート接続しており外部ディスプレイが利用できない場合は、コード内の画像レンダリング方法を変更することで、外部ディスプレイに依存せずに可視化インターフェースを描画できるようにできます。

推論コードファイル object-detection-hailo.py を開き、165 行目を修正して、行全体を次のコードに置き換えます。
```
        pipeline_string += f"fpsdisplaysink video-sink=ximagesink name=hailo_display sync={self.sync} text-overlay={self.options_menu.show_fps} signal-fps-measurements=true "
```



</TabItem>

<TabItem value="Method 2" label="Hailo-8L なしで実行">

### YOLOv8 を実行する

reComputer R1000 上でターミナルを開き、以下のコマンドを入力して YOLOv8 を実行します。

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

AI キットによるアクセラレーションの前後で、入力解像度 640×640 の YOLOv8 物体検出における推論速度を比較しました。その結果、アクセラレーション前の推論速度は 0.75 FPS に過ぎませんでしたが、アクセラレーション後は 29.5 FPS に達しました。

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/yZ0IlqLZ86E" title="YOLOv8 Object Detection on reComputer R1000(CM4-Powered Edge Gateway) with Hailo-8L" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## プロジェクトの展望

このプロジェクトでは、物体検出における YOLOv8 の実行速度を、AI キットあり／なしでベンチマークします。その結果、AI キットがエッジデバイスの性能を大幅に向上させることが示されています。今後は、セマンティックセグメンテーションやポーズ推定など、さまざまなシナリオにおける YOLOv8 の実行速度を、AI キットによる高速化後にベンチマークしていきます。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
