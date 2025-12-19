---
description: このwikiは、Raspberry Pi5とhailo8を使用したyolov8mマルチストリーム検出ベンチマークを実演します。
title: Hailo8を搭載したRaspberrypiでのマルチストリーム推論ベンチマーク
keywords:
  - Edge
  - RasberryPi 5
  - Object detecton
image: https://files.seeedstudio.com/wiki/multistream_benchmark_hailo8/raspberry_pi_ai_hat.webp
slug: /ja/benchmark_of_multistream_inference_on_raspberrypi5_with_hailo8
last_update:
  date: 11/21/2024
  author: Jiahao

no_comments: false # for Disqus
---

# Hailo8を搭載したRaspberrypi 5でのマルチストリーム推論ベンチマーク

## はじめに

[YOLOv8](https://github.com/ultralytics/ultralytics)（You Only Look Once version 8）は、リアルタイム姿勢推定と物体検出モデルの人気の高いYOLOシリーズです。速度、精度、柔軟性において複数の進歩を導入することで、前身の強みを基盤としています。[Hailo8](https://www.seeedstudio.com/Raspberry-Pi-Al-HAT-26-TOPS-p-6243.html)は推論速度を加速するために使用され、26 TOPSのAI性能を特徴としています。

このwikiでは、Raspberry Pi 5とhailo8を使用したYOLOv8mの物体検出ベンチマークを紹介します。すべてのテストは同じモデル（YOLOv8m）を使用し、int8に量子化され、入力サイズは640x640解像度、バッチサイズは8に設定されています。

## ハードウェアの準備

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2140</th>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/q/q/qq_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2140-12-p-6431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
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

### RPi5にAIキットをインストール

[こちら](https://www.raspberrypi.com/documentation/accessories/ai-kit.html)を参照してください

## ソフトウェアの準備

### システムの更新

```
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### hailo公式ウェブサイトからhailoソフトウェアをダウンロード

> **注意：**
公式のHailoアカウントが必要で、ログインしていることを確認してください。
この[リンク](https://hailo.ai/developer-zone/software-downloads/)をクリックして、以下の必要なライブラリをダウンロードしてください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/multistream_benchmark_hailo8/hailo_download.png" alt="pir" width={1000} height="auto"/></p>

### raspberrypi5にhailort_4.19.0_arm64.debをインストール

```
sudo dpkg -i hailort_4.19.0_arm64.deb 

sudo reboot

```

### dkmsのインストール

```
sudo apt-get install dkms
```

### hailort-pcie-driver_4.19.0_all.debのインストール

```
sudo dpkg -i hailort-pcie-driver_4.19.0_all.deb 
sudo reboot

```

### Python仮想環境の作成と有効化

```
python -m venv hailo_env
source hailo_env/bin/activate
```

### hailort-4.19.0-cp311-cp311-linux_aarch64.whlのインストール

```
pip install hailort-4.19.0-cp311-cp311-linux_aarch64.whl 
```

### ソフトウェアがインストールされているかの確認

```
hailortcli fw-control identify
```

結果は以下のように表示されます：

```
ain@pi5-hailo:~ $ hailortcli fw-control identify
Executing on device: 0000:01:00.0
Identifying board
Control Protocol Version: 2
Firmware Version: 4.19.0 (release,app,extended context switch buffer)
Logger Version: 0
Board Name: Hailo-8
Device Architecture: HAILO8
Serial Number: HLLWM2B225100548
Part Number: HM218B1C2FAE
Product Name: HAILO-8 AI ACC M.2 M KEY MODULE EXT TEMP
```

### pcieをgen2/gen3に設定（gen3はgen2より高速）

```/boot/firmware/config.txt```に以下のテキストを追加してください

```
#Enable the PCIe external connector

dtparam=pciex1

#Force Gen 3.0 speeds

dtparam=pciex1_gen=3

```

:::note
gen2を使用したい場合は、dtparam=pciex1_gen=3をコメントアウトしてください
:::

### Tappsのインストール

#### 必要なライブラリのインストール

```
sudo apt-get install -y rsync ffmpeg x11-utils python3-dev python3-pip python3-setuptools python3-virtualenv python-gi-dev libgirepository1.0-dev gcc-12 g++-12 cmake git libzmq3-dev

sudo apt-get install -y libopencv-dev python3-opencv

sudo apt-get install -y libcairo2-dev libgirepository1.0-dev libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio gcc-12 g++-12 python-gi-dev

sudo apt install python3-gi python3-gi-cairo gir1.2-gtk-3.0
```

#### hailo_pci force_desc_page_sizeの設定

```
sudo nano /etc/modprobe.d/hailo_pci.conf
```

そして以下の内容を入力してください。

```
options hailo_pci force_desc_page_size=4096
```

最後に、`Ctrl+X`を押し、`Y`を入力し、`Enter`を押してファイルを保存してください

そしてraspberrypi5を再起動してください

```
sudo reboot
```

#### Tappsのダウンロード

```
git clone --depth 1 https://github.com/hailo-ai/tappas.git
```

#### hailortをtappsにダウンロード

```
cd tappas
mkdir hailort
git clone https://github.com/hailo-ai/hailort.git hailort/sources
```

#### common.pyの変更

```
nano downloader/common.py
```

そして以下のように内容を変更し、common.pyに`RaspberryPI5 = 'rpi5'`を追加してください：

```
class Platform(Enum):
    X86 = 'x86'
    ARM = 'arm'
    IMX8 = 'imx8'
    Rockchip = 'rockchip'
    RaspberryPI = 'rpi'
    RaspberryPI5 = 'rpi5'

    ANY = 'any'

    def __str__(self):
        return self.value
```

#### tappasのインストール

```
./install.sh --skip-hailort --target-platform rpi5

```

#### バッチサイズを8に変更

```
cd ./apps/h8/gstreamer/general/multistream_detection/
nano multi_stream_detection.sh
```

以下のように14行目に`readonly DEFAULT_BATCH_SIZE=8`を追加してください：

```
readonly DEFAULT_NETWORK_NAME="yolov5"
readonly DEFAULT_BATCH_SIZE=8
readonly MAX_NUM_OF_DEVICES=4
```

以下のように19行目に`batch_size=$DEFAULT_BATCH_SIZE`を追加してください：

```
network_name=$DEFAULT_NETWORK_NAME
batch_size=$DEFAULT_BATCH_SIZE
num_of_src=12
```

以下のように154行目に`batch-size=$batch_size`を追加してください：

```
queue name=hailo_pre_infer_q_0 leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
hailonet hef-path=$hef_path batch-size=$batch_size device-count=$device_count scheduling-algorithm=0 nms-score-threshold=0.3 nms-iou-threshold=0.45 output-format-type=HAILO_FORMAT_TYPE_FLOAT32 ! \
queue name=hailo_postprocess0 leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
```

最後に`Ctrl+X`を押し、`Y`を入力してファイルを保存してください。

## マルチストリーム推論の実行

```
sudo chmod +x multi_stream_detection.sh
./multi_stream_detection.sh --network yolov8 --num-of-sources 8 --show-fps
```

## 結果

すべての結果は、モデル入力サイズ640x640、バッチサイズ8、ビデオ解像度1280x760（720p）での推論に基づいています。

<div class="table-center">

| チャンネル数        | PCIE Gen2 性能       | PCIE Gen3 性能       |
|---------------------|-----------------------|-----------------------|
| 1チャンネルストリーム    | 39.82FPS             | 76.99FPS             |
| 2チャンネルストリーム  | 19.86FPS             | 38.21FPS             |
| 4チャンネルストリーム  | 8.45FPS              | 16.94FPS             |
| 8チャンネルストリーム  | 3.85FPS              | 8.15FPS              |
| 12チャンネルストリーム | 2.94FPS              | 5.43FPS              |

</div>

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/CHxg7qWTMYw" title="Multistream Inference on Hailo8 with RPi5 AI Box" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
