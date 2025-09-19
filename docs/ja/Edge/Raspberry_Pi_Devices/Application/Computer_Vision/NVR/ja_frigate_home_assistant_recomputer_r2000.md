---
description: reComputer R2000上でFrigate NVRとHailo AIアクセラレータを使用したDIY AI搭載ホーム監視システム。リアルタイムスマートアラート、物体検出、エッジでの効率的なローカル動画処理のためにHome Assistantとシームレスに統合されます。

title: reComputer R2000上のFrigate NVRとHailoをHome Assistantに接続

keywords:
- Raspberry pi
- Edge AI Computer
- reComputer R2000
- Frigate
- Home Assistant
image: https://files.seeedstudio.com/wiki/recomputer-r2000-getting-start/1_24_1.webp
slug: /ja/r2000_series_frigate_and_home_assistant
last_update:
  date: 6/18/2025
  author: Kasun Thushara
---

# reComputer R2000上のFrigate NVRとHailoをHome Assistantに接続

## はじめに

Frigate NVRは、AIモデルを使用したリアルタイム物体検出専用に設計されたオープンソースのネットワークビデオレコーダー（NVR）です。軽量で強力であり、RTSPプロトコルを介してカメラとシームレスに動作します。

Home Assistant（HA）は、家庭内のデバイスを制御・自動化できるスマートホーム自動化のためのオープンソースプラットフォームです。

このガイドでは、**Hailo PCIe**を搭載した**reComputer AIボックス**に**Frigateをインストール**し、**MQTT**を使用して既存の**Home Assistant**セットアップに最小限の手間で接続する方法を説明します。

## 前提条件

### ハードウェア要件

<div class="table-center">
  <table align="center">
    <tr>
        <th>reComputer AI Industrial R2000</th>
         <th>reComputer AI R2000</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114993595-recomputer-ai-industrial-r2135-12.jpg" style={{width:250, height:'auto'}}/></div></td>
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Hailo PCIeドライバーのインストール

### ステップ1：Raspberry Piの設定

```bash
sudo apt update
sudo raspi-config
```

- `6 Advanced Options > A8 PCIe Speed` に移動します
- `Yes` を選択して PCIe Gen 3 を有効にします
- 終了して `Finish` を選択します
  
<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/pcie.png"
    style={{ width: 600}}
  />
</div>

`/boot/firmware/config.txt` の末尾に以下の行を追加します：

```bash
dtoverlay=pciex1-compat-pi5,no-mip
```

### ステップ 2: PCIe ドライバーのインストール

```bash
sudo apt update
sudo apt install dkms
```

```bash
git clone https://github.com/hailo-ai/hailort-drivers
cd hailort-drivers/linux/pcie
git checkout 24e7ff2fb58fab7029024c1a1d3f2d1914f56d7b
sudo make install_dkms
```

### ステップ 3: ファームウェアのインストール

```bash
cd ../..
./download_firmware.sh
sudo mkdir -p /lib/firmware/hailo
sudo cp hailo8_fw*.bin /lib/firmware/hailo/hailo8_fw.bin
```

### ステップ4: PCIeディスクリプタサイズの問題を修正

以下の内容で `/etc/modprobe.d/hailo_pci.conf` を作成します：

```bash
options hailo_pci force_desc_page_size=4096
```

### ステップ5：再起動と確認

```bash
sudo reboot
ls /dev/hailo*
```

期待される出力：

```bash
/dev/hailo0
```

## Frigate NVRをDockerでインストール

### 前提条件

カメラが1920x1080解像度でRTSPストリーミング用に設定されていることを確認してください。

### システムの更新

```bash
sudo apt update
```

### Dockerのインストール

```bash
curl -fsSL get.docker.com | bash
sudo usermod -aG docker $USER
sudo reboot
```

### Pull Frigate Image

```bash
docker pull ghcr.io/blakeblackshear/frigate:0.15.0-rc2-h8l
```

### ディレクトリ構造の作成

```bash
mkdir -p ~/frigate/config
mkdir -p ~/frigate/data/db
mkdir -p ~/frigate/data/storage
cd ~/frigate
```

### Create Docker Compose File (frigate.yml)

```bash
nano frigate.yml
```

```bash
services:
  frigate-hailo:
    container_name: frigate-hailo
    privileged: true
    restart: unless-stopped
    image: ghcr.io/blakeblackshear/frigate:0.15.0-rc2-h8l
    shm_size: 1024mb
    devices:
      - /dev/hailo0:/dev/hailo0
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ./config/:/config
      - ./data/db/:/data/db
      - ./data/storage:/media/frigate
      - type: tmpfs
        target: /tmp/cache
        tmpfs:
          size: 1g
    ports:
      - 5000:5000
```

### Frigate設定ファイルの作成 (config/config.yml)

```bash
nano config/config.yml
```

```bash
database:
  path: /data/db/frigate.db

go2rtc:
  streams:
    home:
      - rtsp://admin:passw0rd@192.168.98.11:554/cam/realmonitor?channel=1&subtype=0

cameras:
  home:
    ffmpeg:
      inputs:
        - path: rtsp://admin:passw0rd@192.168.98.11:554/cam/realmonitor?channel=1&subtype=0
          roles:
            - record
            - detect

mqtt:
  enabled: False

objects:
  track:
    - person
    - cat

detectors:
  hailo8l:
    type: hailo8l
    device: PCIe

model:
  width: 300
  height: 300
  model_type: ssd
  path: /config/model_cache/h8l_cache/ssd_mobilenet_v1.hef

version: 0.15-1
```

### Frigateを開始する

```bash
docker compose -f frigate.yml up -d
```

### Web UIへのアクセス

アクセス先: `http://<your-device-ip>:5000`

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/frigate_web.png"
    style={{ width: 600}}
  />
</div>

## Home Assistant統合

### ステップ1: HACSセットアップ

Home Assistant（HA Green、HA Yellow、または類似のスタンドアロンデバイス）を実行していることを前提とします：

- [HACS](https://hacs.xyz/docs/use/)がまだインストールされていない場合はインストールしてください。
- HACSで、コミュニティストアから**Frigate統合**をインストールしてください。

Frigate AIボックスのIPアドレスとポートを使用して設定してください

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/config_frigate.PNG"
    style={{ width: 600}}
  />
</div>

### ステップ2: MQTTアドオンのインストール

[公式MQTT統合ガイド](https://www.home-assistant.io/integrations/mqtt/)に従って、MQTTブローカーアドオンをインストールして設定してください。

### ステップ3: MQTT用のFrigate設定の更新

```bash
mqtt:
  host: <HA IP>
  port: 1883
  topic_prefix: frigate
  client_id: frigate
  user: <HA User Name>
  password: <HA Password>
```

例：

```bash
mqtt:
  host: 10.0.0.136
  port: 1883
  topic_prefix: frigate
  client_id: frigate
  user: kasun
  password: HiezenburgCook
```

完全な例：

```bash
database:
  path: /data/db/frigate.db

go2rtc:
  streams:
    home:
      - rtsp://admin:12345678a@10.0.0.108:554/cam/realmonitor?channel=1&subtype=0

cameras:
  home:
    ffmpeg:
      inputs:
        - path: rtsp://admin:12345678a@10.0.0.108:554/cam/realmonitor?channel=1&subtype=0
          roles:
            - record
            - detect

mqtt:
  host: core-mosquitto
  port: 1883
  topic_prefix: frigate
  client_id: frigate
  user: kasun
  password: HiezenburgCook

objects:
  track:
    - person
    - cat

detectors:
  hailo8l:
    type: hailo8l
    device: PCIe

model:
  width: 300
  height: 300
  model_type: ssd
  path: /config/model_cache/h8l_cache/ssd_mobilenet_v1.hef

version: 0.15-1


```

### ステップ4: Frigateを再起動する

```bash
docker compose -f frigate.yml down
sudo docker compose -f frigate.yml up -d
```

### ステップ 5: MQTT が動作していることを確認する（オプション）

- HA ログまたは MQTT アドオンログをチェックして、Frigate からのメッセージを確認する
- HA では、Frigate イベントを自動化で使用できるようになります（例：モーション警告、検出されたオブジェクトなど）

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/HA_interface.PNG"
    style={{ width: 600}}
  />
</div>

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
