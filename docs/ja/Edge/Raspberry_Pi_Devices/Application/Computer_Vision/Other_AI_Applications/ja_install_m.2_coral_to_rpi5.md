---
description: このwikiでは、M.2 coralをrpi5にインストールし、coralをテストする方法を説明します。
title: Raspberry Pi 5にM.2 Coralをインストールする
keywords:
  - Edge
  - rpi5
  - M.2 coral
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/install_m2_coral_to_rpi5
last_update:
  date: 07/19/2024
  author: Jiahao

no_comments: false # for Disqus
---

# Raspberry Pi 5にM.2 Coralをインストールする

## はじめに

[Coral M.2 Accelerator](https://www.seeedstudio.com/Coral-M2-Accelerator-with-Dual-Edge-TPU-p-4681.html) with Dual Edge TPUは、利用可能なM.2 E-keyスロットを持つ既存のシステムや製品に2つのEdge TPUコプロセッサを提供するM.2モジュールです。

[Raspberry Pi Fifth Flagship Development Computer](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html)は、強力な2.4GHz 64ビットクアッドコアArmプロセッサと、印象的なグラフィックスを実現する800MHz VideoCore VII GPUを搭載しています。高度なカメラサポート、多様な接続性、強化された周辺機器を提供し、マルチメディア、ゲーム、産業用途に最適です。

このwikiでは、Coral M.2 AcceleratorをRaspberry Pi 5にインストールする方法を説明し、最終的にCoral M.2 Acceleratorをテストします。

## ハードウェアの準備

<div class="table-center">
 <table align="center">
 <tr>
  <th>Raspberry Pi 5 8GB</th>
  <th>Raspberry Pi M.2 HAT+</th>
  <th>Coral M.2 Accelerator B+M key</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102110919-raspberry-pi-5-8gb-font.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-103990663-raspberry-pi-m.2-hat_-_for-raspberry-pi-5_-font.jpg" style={{width:600, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992124-front.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-M-2-HAT-for-Raspberry-Pi-5-p-5881.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## ハードウェアのインストール

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/pycoral_install.gif" alt="pir" width={1000} height="auto"/></p>

## Python3.8のインストール

Coralソフトウェアは、Python3.6-Python3.9のみをサポートしていますが、最新バージョンのRaspberry Pi OSのPythonはPython3.11です。そのため、Python3.8をインストールする必要があります。

### ステップ1: システムの更新

ターミナルを開き、以下のコマンドを実行してシステムを更新します：

```
sudo apt update
sudo apt full-upgrade
```

### ステップ2: 必要なパッケージのインストール

ターミナルを開き、以下のコマンドを実行して必要なパッケージをインストールします：

```
sudo apt-get install -y build-essential tk-dev libncurses5-dev libncursesw5-dev libreadline6-dev libdb5.3-dev libgdbm-dev libsqlite3-dev libssl-dev libbz2-dev libexpat1-dev liblzma-dev zlib1g-dev libffi-dev tar wget vim
```

### ステップ3: Python3.8をダウンロードする

ターミナルを開き、以下のコマンドを実行してPython3.8をダウンロードします：

```
wget https://www.python.org/ftp/python/3.8.0/Python-3.8.0.tgz
```

### ステップ4: Python3.8のインストール

ターミナルを開き、以下のコマンドを実行してPython3.8をインストールします：

```
sudo tar zxf Python-3.8.0.tgz
cd Python-3.8.0
sudo ./configure --enable-optimizations
sudo make -j 4
sudo make altinstall
cd ..
```

### ステップ5: Python3.8の確認

ターミナルを開き、以下のコマンドを実行してPython3.8を確認します：

```
python3.8 -V
```

結果は次のようになります：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/Python3.8.png" alt="pir" width={1000} height="auto"/></p>

### ステップ 6: Python3.8で仮想環境を作成する

```
python3.8 -m venv coral_venv
```

## ハードウェア設定の構成

ターミナルを開き、以下のコマンドを実行して ```config.txt``` を開きます：

```
sudo nano /boot/firmware/config.txt
```

そして、```config.txt```に以下のテキストを追加します：

```
[all]
# Enable the PCIe External connector.
dtparam=pciex1
kernel=kernel8.img
# Enable Pineboards Hat Ai
dtoverlay=pineboards-hat-ai
```

CTRL+Xを押してファイルを保存して閉じ、次にYを押して確認します。その後、システムを再起動します。

```
sudo reboot
```

カーネルを確認する：

ターミナルを開き、以下のコマンドを実行してカーネルを確認します：

:::note
カーネルバージョンが6.6.30以上であることを確認してください
:::

```
uname -a
```

## PCIeドライバーとEdge TPUランタイムのインストール

### ステップ1: 仮想環境に入る

```
source coral_venv/bin/activate
```

### ステップ2: Edge TPU ランタイムのインストール

Google Coral Edge TPU パッケージリポジトリを追加する

```
echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list

curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

sudo apt-get update
```

必要なパッケージと Edge TPU ランタイムをインストールします

```
sudo apt-get install cmake libedgetpu1-std devscripts debhelper dkms dh-dkms
```

### ステップ3: PCIeドライバーをインストールする

```
git clone https://github.com/google/gasket-driver.git
cd gasket-driver
sudo debuild -us -uc -tc -b
cd ..
sudo dpkg -i gasket-dkms_1.0-18_all.deb
```

## udev ルールの設定 デバイス権限を管理するための udev ルールを追加

ターミナルを開き、以下のコマンドを実行して udev ルールを設定します：

```
sudo sh -c "echo 'SUBSYSTEM==\"apex\", MODE=\"0660\", GROUP=\"apex\"' >> /etc/udev/rules.d/65-apex.rules"

sudo groupadd apex

sudo adduser $USER apex

sudo reboot

```

## エッジをチェック TPU

```
lspci -nn | grep 089a
```

結果は次のようになります：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_driver.png" alt="pir" width={1000} height="auto"/></p>

```
ls /dev/apex_0
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_TPU.png" alt="pir" width={1000} height="auto"/></p>

## PyCoral ライブラリをインストールして Edge TPU をテストする

### ステップ 1: PyCoral ライブラリをインストールする

```
source coral_venv/bin/activate
pip install --upgrade pip
python3 -m pip install --extra-index-url https://google-coral.github.io/py-repo/ pycoral~=2.0
```

### ステップ 2: Edge TPU をテストする

サンプル用のリソースをインストールします：

```
mkdir coral && cd coral
git clone https://github.com/google-coral/pycoral.git
cd pycoral
bash examples/install_requirements.sh classify_image.py
```

Edge TPUをテストする：

```
python3 examples/classify_image.py \
--model test_data/mobilenet_v2_1.0_224_inat_bird_quant_edgetpu.tflite \
--labels test_data/inat_bird_labels.txt \
--input test_data/parrot.jpg
```

結果は次のようになります：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/coral_result.png" alt="pir" width={1000} height="auto"/></p>

## 結果

Raspberry Pi 5にM.2 Coralアクセラレータを正常にインストールし、Edge TPUをテストしました。また、Coral M.2アクセラレータ上でint8量子化を使用してYOLOv8sモデルを実行し、入力サイズ640x640、バッチサイズ1で動作させました。推論時間は約800-1000msで、これは約1.1フレーム毎秒（FPS）に相当します。

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/4c8UX06d9Tg" title="Raspberry Pi AI: YOLOv8s Object Detection with Int8 Format Using M.2 Coral Accelerator on RPi 5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
