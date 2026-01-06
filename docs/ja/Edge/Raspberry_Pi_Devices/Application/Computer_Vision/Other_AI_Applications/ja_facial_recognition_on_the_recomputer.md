---
description: このwikiでは、reComputerで顔認識をデプロイする方法を説明します。
title: reComputerで顔認識をデプロイ
keywords:
  - Edge
  - reComputer AI 
  - face recognition
  - hailo
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/facial_recognition_on_the_recomputer
last_update:
  date: 11/18/2025
  author: Jiahao

no_comments: false # for Disqus
---

# reComputerで顔認識をデプロイ

## はじめに

このwikiでは、`Hailo` NPUを搭載したreComputerを使用してリアルタイム顔認識を実装する方法をガイドします。このプロジェクトでは、効率的な顔検出のために`SCRFD-10G`を使用し、小さな顔を含む様々なスケールの顔を迅速かつ正確に検出し、リアルタイム性能を確保します。同時に、軽量な顔認識のために`ArcFace-MobileFaceNet`モデルを採用し、ArcFace損失関数を活用して認識精度を向上させ、効率的な身元確認を可能にします。

## ハードウェアの準備

<div class="table-center">
 <table align="center">
 <tr>
 <th>reComputer R1125</th>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
 </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991334.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
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
  </tr>
 </table>
</div>


<div style={{ color: 'red', fontWeight: 'bold' }}>
  注意：入力としてUSBカメラが必要です。
</div>

## Hailoソフトウェアのインストールと確認

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

これはRaspberry Piの時刻が正しく設定されていないためで、以下のコマンドでRaspberry Piの時刻を手動で設定する必要があります：

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
sudo apt-get -y install libblas-dev nlohmann-json3-dev
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
cd ~ && git clone https://github.com/Seeed-Projects/hailo-apps-infra
cd hailo-apps-infra
./install.sh
source venv_hailo_apps/bin/activate
```

### 写真の追加

```bash
cd /resources/face_recon/train
# change name to the name of the person to be recognized
mkdir name
```

<div style={{ color: 'red', fontWeight: 'bold' }}>
  注意：認識対象の人物の写真を、作成したフォルダに配置してください。
</div>

### データベースへの情報追加

```bash
cd ~/hailo-apps-infra/hailo_apps/hailo_app_python/apps/face_recognition
python face_recognition.py --mode train
```

正しい結果は以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/face/face_1.png" alt="pir" width={1000} height="auto"/></p>

### プロジェクトの実行

以下のコマンドを入力すると、顔認識デモが表示されます：

```bash
 python face_recognition.py --input usb
```

## 結果

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/wcT_ZYsRbAE" title="Facial Recognition On Raspberry Pi CM5 reComputer with Hailo-8 NPU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
