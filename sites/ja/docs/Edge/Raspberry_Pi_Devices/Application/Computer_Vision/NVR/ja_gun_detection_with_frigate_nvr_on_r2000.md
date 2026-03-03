---
description: このwikiは、Frigate NVRとreComputer AIボックスに基づく銃器検出の実装を実演します。
title: R2000でのFrigate NVRによる銃器検出
keywords:
  - Raspberry pi
  - Edge AI Computer
  - reComputer r2130
  - Object detecton
  - Frigate
image: https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/setting_3.webp
slug: /gun_detection_with_frigate_nvr_on_r2000
last_update:
  date: 08/12/2025
  author: Nolan Chen
no_comments: false # for Disqus
---

# R2000でのFrigate NVRによる銃器検出

## はじめに

**Frigate NVR**は、エッジでのAIファーストなリアルタイム映像解析のために設計されたオープンソースのネットワークビデオレコーダーです。Hailoを搭載した**reComputer AIボックス**に展開されたこのシステムは、複数のカメラストリームをローカルで取り込み、定量的物体検出モデルを実行し、ミリ秒以内にMQTTイベントを発信し、クラウドの遅延と帯域幅コストを排除します。

この展開では、Frigateの既存のモデルライブラリを拡張し、ピストルとライフルの認識に特化してファインチューニングされたカスタム**yolov11s**モデルを追加しました。銃器が検出されると、Frigateのルールエンジンが即座にアラートをトリガーし、セキュリティチームに脅威がエスカレートする前にエリアを封鎖し、対応を調整するための貴重な数秒を与えます。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Frigateの設定

### PCIe設定の変更

`config.txt`を開く：

```bash
sudo nano /boot/firmware/config.txt
```

`config.txt`に以下を追加：

```bash
dtparam=pciex1_gen=3
dtoverlay=pciex1-compat-pi5,no-mip
```

その後、`Ctrl+x`を使用してファイルを保存し、AIボックスを再起動します。

### DockerとHailo-allのインストール

```bash
sudo apt update
sudo apt install hailo-all
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
sudo apt install docker-compose-plugin
```

### ymlファイルの作成

Docker ComposeがFrigateを実行できるように`frigate.yml`ファイルを作成します。

```bash
cd ~
sudo nano frigate.yml
```

以下は`frigate.yml`の例です：

```bash
services:
  frigate-hailo:
    container_name: frigate-hailo
    privileged: true
    restart: unless-stopped
    image: ghcr.io/blakeblackshear/frigate:0.16.0-beta3-standard-arm64
    shm_size: "512mb" # calculate on your own
    stop_grace_period: 30s # allow enough time to shut down the various services
    devices:
      - /dev/hailo0:/dev/hailo0
      - /dev/video19:/dev/video19  # USB camera (physical device)
      - /dev/video20:/dev/video20  # USB camera backup device
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ./config/:/config
      - ./data/db/:/data/db
      - ./data/storage:/media/frigate
      - ./media:/media/frigate  # Mapping local media files to the container
      - type: tmpfs
        target: /tmp/cache
        tmpfs:
          size: 1g
    ports:
      - 5000:5000
    environment:
      - FRIGATE_RTSP_PASSWORD=password
      - LIBVA_DRIVER_NAME=i965
    group_add:
      - "44"  # video group
```

ケースビデオをダウンロード：

```bash
mkdir media && cd media
wget -c \
"https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/model_cache/yolov11s.hef"
```

YOLOモデルをダウンロードしてconfig.ymlを作成：

```bash
cd .. && mkdir config && cd config && mkdir model_cache
cd model_cache && wget https://hailo-model-zoo.s3.eu-west-2.amazonaws.com/ModelZoo/Compiled/v2.14.0/hailo8/yolov8n.hef
cd .. && nano config.yml
```

以下はconfig.ymlの例です：

```bash
database:
  path: /data/db/frigate.db

go2rtc:
  streams:
    # USB camera streaming
    usb_camera:
      - "ffmpeg:/dev/video0#input=-f v4l2 -input_format mjpeg -video_size 640x480 -framerate 15"

    # RTSP stream configuration

    hikvision_main:
      - "rtsp://admin:password@192.168.1.100:554/h264/ch1/main/av_stream"

    # Video file streaming - close.mp4
    video_files_close:
      - "ffmpeg:/media/frigate/close.mp4"

    # Video file streaming - close2.mp4
    video_files_close2:
      - "ffmpeg:/media/frigate/close2.mp4"

    # Video file streaming - y4.mp4
    video_files_y4:
      - "ffmpeg:/media/frigate/y4.mp4"

    # Video file streaming - y5.mp4
    video_files_y5:
      - "ffmpeg:/media/frigate/y5.mp4"

cameras:
  # USB camera
  usb_camera:
    ffmpeg:
      inputs:
        - path: /dev/video0
          input_args: -f v4l2 -input_format mjpeg -video_size 640x480 -framerate 15
          roles:
            - record
            - detect
    detect:
      width: 640
      height: 480
      fps: 3
    record:
      enabled: true
      retain:
        days: 7
        mode: motion
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 10
          max_area: 100000
          threshold: 0.25

  # Video file camera - close.mp4
  video_files_close:
    ffmpeg:
      inputs:
        - path: /media/frigate/close.mp4
          input_args: -stream_loop -1 -re
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
      fps: 2
    record:
      enabled: false
      retain:
        days: 3
        mode: all
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 20
          max_area: 500000
          threshold: 0.25

  # Video file camera - close2.mp4
  video_files_close2:
    ffmpeg:
      inputs:
        - path: /media/frigate/close2.mp4
          input_args: -stream_loop -1 -re
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
      fps: 2
    record:
      enabled: false
      retain:
        days: 3
        mode: all
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 20
          max_area: 500000
          threshold: 0.25

  # Video file camera - y4.mp4
  video_files_y4:
    ffmpeg:
      inputs:
        - path: /media/frigate/y4.mp4
          input_args: -stream_loop -1 -re
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
      fps: 3
    record:
      enabled: true
      retain:
        days: 3
        mode: all
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 10
          max_area: 500000
          threshold: 0.3

  # Video file camera - y5.mp4
  video_files_y5:
    ffmpeg:
      inputs:
        - path: /media/frigate/y5.mp4
          input_args: -stream_loop -1 -re
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
      fps: 3
    record:
      enabled: true
      retain:
        days: 3
        mode: all
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 10
          max_area: 500000
          threshold: 0.25

  # RTSP IP camera - hikvision
  hikvision_main:
    ffmpeg:
      inputs:
        - path: rtsp://admin:password@192.168.1.100:554/h264/ch1/main/av_stream
          input_args: -rtsp_transport tcp -avoid_negative_ts make_zero
          roles:
            - detect
            - record
    detect:
      width: 1920
      height: 1080
      fps: 3
    record:
      enabled: true
      retain:
        days: 7
        mode: motion
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 20
          max_area: 500000
          threshold: 0.25

mqtt:
  enabled: false

objects:
  track:
    - gun
  filters:
    gun:
      min_area: 10
      max_area: 500000
      threshold: 0.25

detectors:
  hailo8l:
    type: hailo8l
    device: PCIe

model:
  width: 640
  height: 640
  input_tensor: nhwc
  input_pixel_format: rgb
  input_dtype: int
  model_type: yolo-generic
  path: /config/model_cache/yolov11s.hef
  labelmap:
    0: person
    1: gun

detect:
  enabled: true

snapshots:
  enabled: true
  clean_copy: true
  timestamp: true
  bounding_box: true
  crop: false
  retain:
    default: 14
  quality: 95

record:
  enabled: true
  retain:
    days: 30
    mode: all

ui:
  timezone: Asia/Shanghai

auth:
  enabled: false

live:
  height: 720
  quality: 8

birdseye:
  enabled: true
  width: 1280
  height: 720
  quality: 8
  mode: objects
version: 0.16-0
semantic_search:
  enabled: false
  reindex: false
  model_size: small
face_recognition:
  enabled: false
lpr:
  enabled: false
```

## プロジェクトの実行

プロジェクトをプルして実行：

```bash
cd ~
sudo docker pull mjqx2023/frigate_seeed
docker compose -f frigate.yml up -d
```

その後、AIボックスのWebブラウザで**localhost:5000**を開きます：

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/first.png"
    style={{ width: 1000}}
  />
</div>

デバッグを開始するビデオの1つを選択し、表示ボックスを選択すると、結果が自動的に表示されます：

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/setting_1.png"
    style={{ width: 1000}}
  />
</div>

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/setting_2.png"
    style={{ width: 1000}}
  />
</div>

タブを切り替えて過去のテスト結果を表示します：

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/setting_3.png"
    style={{ width: 1000}}
  />
</div>

## 結果

銃を持っている人を検出すると、モデルがそれを識別して選択します。
デバッグモードに切り替えて表示ボックスを選択すると、結果が自動的に表示されます。タブを切り替えて過去の検出結果を表示できます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/gun_detection_gif.gif" alt="pir" width={1000} height="auto"/></p>

## その他の設定

| その他のビデオソースの設定 | フレームレート設定|
|--------------------------|--------------------|
| Frigateは RTSP、ビデオストリーミング、USB カメラをサポートしています。設定ファイルが設定されると、再起動後に有効になります。                | 設定ファイルで各カメラの検出フレームレートを設定でき、再起動後に有効になります。|
| 設定で設定オプションにアクセスできます。例えば、RTSP パスを変更して RTSP カメラに接続できます。変更を行った後、右上角の「保存して再起動」をクリックして変更を有効にします。| ![page](https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/other.png)|

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
