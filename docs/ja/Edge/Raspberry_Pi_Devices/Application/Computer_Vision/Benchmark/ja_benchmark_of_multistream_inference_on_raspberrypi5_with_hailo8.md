---
description: この Wiki は、Raspberry Pi 5 と Hailo8 を使用した YOLOv8m マルチストリーム検出ベンチマークを示します。
title: Raspberry Pi 5 と Hailo8 を使用したマルチストリーム推論のベンチマーク
keywords:
  - エッジ
  - Raspberry Pi 5
  - オブジェクト検出
image: https://files.seeedstudio.com/wiki/multistream_benchmark_hailo8/raspberry_pi_ai_hat.webp
slug: /ja/benchmark_of_multistream_inference_on_raspberrypi5_with_hailo8
last_update:
  date: 05/15/2025
  author: Jiahao

no_comments: false # Disqus 用
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Raspberry Pi 5 と Hailo8 を使用したマルチストリーム推論のベンチマーク

## はじめに

[YOLOv8](https://github.com/ultralytics/ultralytics) (You Only Look Once バージョン 8) は、リアルタイムポーズ推定およびオブジェクト検出モデルの YOLO シリーズの中で最も人気のあるバージョンです。速度、精度、柔軟性においていくつかの進歩を導入し、従来のモデルの強みを活かしています。[Hailo8](https://www.seeedstudio.com/Raspberry-Pi-Al-HAT-26-TOPS-p-6243.html) は、26 TOPS の AI パフォーマンスを特徴とし、推論速度を加速するために使用されます。

この Wiki では、Raspberry Pi 5 と Hailo8 を使用した YOLOv8m のオブジェクト検出ベンチマークを紹介します。すべてのテストでは、同じモデル (YOLOv8m) を使用し、int8 に量子化され、入力サイズは 640x640 の解像度、バッチサイズは 8 に設定されています。

## ハードウェアの準備

<div class="table-center">
	<table align="center">
	<tr>
		<th>reComputer AI R2130</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### RPi5 に AI キットをインストールする

[こちら](https://www.raspberrypi.com/documentation/accessories/ai-kit.html)を参照してください。

## ソフトウェアの準備

### システムを更新する:

```
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### Hailo ソフトウェアを公式ウェブサイトからダウンロードする

> **注意:**
公式の Hailo アカウントが必要で、ログインしていることを確認してください。
[このリンク](https://hailo.ai/developer-zone/software-downloads/)をクリックして、以下の必要なライブラリをダウンロードしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/multistream_benchmark_hailo8/hailo_download.png" alt="pir" width={1000} height="auto"/></p>

### hailort_4.19.0_arm64.deb を Raspberry Pi 5 にインストールする

```
sudo dpkg -i hailort_4.19.0_arm64.deb 

sudo reboot
```

### dkms をインストールする

```
sudo apt-get install dkms
```

### hailort-pcie-driver_4.19.0_all.deb をインストールする

```
sudo dpkg -i hailort-pcie-driver_4.19.0_all.deb 
sudo reboot
```

### Python 仮想環境を作成してアクティブ化する

```
python -m venv hailo_env
source hailo_env/bin/activate
```

### hailort-4.19.0-cp311-cp311-linux_aarch64.whl をインストールする

```
pip install hailort-4.19.0-cp311-cp311-linux_aarch64.whl 
```

### ソフトウェアがインストールされているか確認する

```
hailortcli fw-control identify
```

結果は以下のように表示されます:

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

### PCIe を Gen2/Gen3 に設定する (Gen3 は Gen2 より高速です):

以下のテキストを ```/boot/firmware/config.txt``` に追加してください。

```
# PCIe 外部コネクタを有効化

dtparam=pciex1

# Gen 3.0 の速度を強制

dtparam=pciex1_gen=3
```

:::note
Gen2 を使用したい場合は、dtparam=pciex1_gen=3 をコメントアウトしてください。
:::

### Tapps をインストールする

#### 必要なライブラリをインストールする

```
sudo apt-get install -y rsync ffmpeg x11-utils python3-dev python3-pip python3-setuptools python3-virtualenv python-gi-dev libgirepository1.0-dev gcc-12 g++-12 cmake git libzmq3-dev

sudo apt-get install -y libopencv-dev python3-opencv

sudo apt-get install -y libcairo2-dev libgirepository1.0-dev libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio gcc-12 g++-12 python-gi-dev

sudo apt install python3-gi python3-gi-cairo gir1.2-gtk-3.0
```

#### hailo_pci の force_desc_page_size を設定する

```
sudo nano /etc/modprobe.d/hailo_pci.conf
```

以下の内容を入力してください。

```
options hailo_pci force_desc_page_size=4096
```

最後に `Ctrl+X` を押し、`Y` を入力して `Enter` を押してファイルを保存します。

その後、Raspberry Pi 5 を再起動します。
```
sudo reboot
```

#### Tapps をダウンロードする

```
git clone --depth 1 https://github.com/hailo-ai/tappas.git
```

#### Tapps に hailort をダウンロードする

```
cd tappas
mkdir hailort
git clone https://github.com/hailo-ai/hailort.git hailort/sources
```

#### common.py を変更する

```
nano downloader/common.py
```

以下のように内容を変更し、common.py に `RaspberryPI5 = 'rpi5'` を追加してください。

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

#### Tapps をインストールする

```
./install.sh --skip-hailort --target-platform rpi5
```

#### バッチサイズを 8 に変更する

```
cd ./apps/h8/gstreamer/general/multistream_detection/
nano multi_stream_detection.sh
```

14 行目に `readonly DEFAULT_BATCH_SIZE=8` を追加してください。

```
readonly DEFAULT_NETWORK_NAME="yolov5"
readonly DEFAULT_BATCH_SIZE=8
readonly MAX_NUM_OF_DEVICES=4
```

19 行目に `batch_size=$DEFAULT_BATCH_SIZE` を追加してください。

```
network_name=$DEFAULT_NETWORK_NAME
batch_size=$DEFAULT_BATCH_SIZE
num_of_src=12
```

154 行目に `batch-size=$batch_size` を追加してください。

```
queue name=hailo_pre_infer_q_0 leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
hailonet hef-path=$hef_path batch-size=$batch_size device-count=$device_count scheduling-algorithm=0 nms-score-threshold=0.3 nms-iou-threshold=0.45 output-format-type=HAILO_FORMAT_TYPE_FLOAT32 ! \
queue name=hailo_postprocess0 leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
```

最後に `Ctrl+X` を押し、`Y` を入力してファイルを保存します。

## マルチストリーム推論の実行

```
sudo chmod +x multi_stream_detection.sh
./multi_stream_detection.sh --network yolov8 --num-of-sources 8 --show-fps
```

## 結果

すべての結果は、モデル入力サイズが 640x640、バッチサイズが 8、ビデオ解像度が 1280x760（720p）の条件で推論を行ったものに基づいています。

<div class="table-center">

| チャンネル数       | PCIE Gen2 パフォーマンス | PCIE Gen3 パフォーマンス |
|---------------------|-------------------------|-------------------------|
| 1 チャンネルストリーム | 39.82FPS               | 76.99FPS               |
| 2 チャンネルストリーム | 19.86FPS               | 38.21FPS               |
| 4 チャンネルストリーム | 8.45FPS                | 16.94FPS               |
| 8 チャンネルストリーム | 3.85FPS                | 8.15FPS                |
| 12 チャンネルストリーム | 2.94FPS                | 5.43FPS                |

</div>

<div align="center">
<iframe width="800" height="400" src="https://www.youtube.com/embed/CHxg7qWTMYw" title="Hailo8 と RPi5 AI ボックスでのマルチストリーム推論" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>