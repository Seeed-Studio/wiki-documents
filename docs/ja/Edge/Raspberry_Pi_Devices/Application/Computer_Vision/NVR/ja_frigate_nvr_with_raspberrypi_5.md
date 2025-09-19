---
description: この wiki 記事では、Raspberry Pi 5 と Hailo 8 を使用して Frigate NVR をデプロイする方法をステップバイステップで説明します。
title: Raspberry Pi 5 での Frigate NVR
keywords:
  - Edge
  - reComputer r1000
  - Object detecton
image: https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/frigate.webp
slug: /ja/frigate_nvr_with_raspberrypi_5
last_update:
  date: 04/03/2025
  author: Joshua Lee

no_comments: false # for Disqus
---


## はじめに

**Frigate NVR** は、AI モデルによるリアルタイム物体検出を目的として設計されたオープンソースのネットワークビデオレコーダーです。**Raspberry Pi 5** と組み合わせることで、エッジでの効率的なビデオ監視を可能にします。このガイドでは、最適なセットアップのためのインストールと設定プロセスを説明します。

## 公式 Frigate

### ハードウェアの準備

#### 推奨コンポーネント

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

**または、ビデオストリーミング用に少なくとも 1 台のカメラが必要です。推奨カメラについては、[推奨ハードウェア](https://docs.frigate.video/frigate/hardware#cameras) を参照してください。**

### Hailo PCIe ドライバーのインストール

#### ステップ 1: PCIe Gen 3 を有効にする

ターミナルを開いて、以下のコマンドを実行します。

```bash
sudo apt update
sudo raspi-config
```

ダイアログで **6 Advanced Options** を選択し、次に **A8 PCIe Speed** を選択します。

![6 Advanced Options](https://raw.githubusercontent.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/main/resource/1.png)
![A8 PCIe Speed](https://raw.githubusercontent.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/main/resource/2.png)

PCIe Gen 3 モードを有効にするために「Yes」を選択します。

![Choose Yes](https://raw.githubusercontent.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/main/resource/3.png)

その後、「Finish」をクリックして終了します。

`/boot/firmware/config.txt` を編集し、ファイルの最後に以下の行を追加します。

```
dtoverlay=pciex1-compat-pi5,no-mip
```

#### ステップ2: Hailo PCIeドライバーのインストール

dkmsパッケージをインストールします。このパッケージはHailo PCIeドライバーをインストールするために必要です。

```bash
sudo apt update
sudo apt install dkms
```

[GitHub](https://github.com/hailo-ai/hailort-drivers)からHailo PCIeドライバーを取得します。

```bash
git clone https://github.com/hailo-ai/hailort-drivers
cd hailort-drivers/linux/pcie
git checkout 24e7ff2fb58fab7029024c1a1d3f2d1914f56d7b
```

次に、Hailo PCIeドライバーをインストールします。

```bash
sudo make install_dkms
```

インストール後、Hailo用のファームウェアをダウンロードし、`/lib/firmware/hailo`ディレクトリにコピーします。

```bash
cd ../..
./download_firmware.sh
sudo mkdir -p /lib/firmware/hailo
sudo cp hailo8_fw*.bin /lib/firmware/hailo/hailo8_fw.bin
```

PCIe max_desc_page_size の問題を回避するため、以下の内容で `/etc/modprobe.d/hailo_pci.conf` にルールを作成する必要があります。

```bash
options hailo_pci force_desc_page_size=4096
```

システムを再起動して設定を有効にします。

```bash
sudo reboot
```

システムが再起動された後、Hailo PCIeドライバーが正常にインストールされます。`/dev/hailo0`デバイスが作成されます。以下のコマンドを実行してデバイスを確認してください。

```bash
$ ls /dev/hailo*
/dev/hailo0
```

### Frigate NVR のインストール

この部分では、カメラが設定済みで、1920x1080解像度でRTSPプロトコルによるストリーミングの準備ができていることを前提としています。

- RTSP URLの例: `rtsp://admin:passw0rd@192.168.98.11:554/cam/realmonitor?channel=1&subtype=0`

#### ステップ1: 環境の準備

1. **システムを更新する:**

   ```bash
   sudo apt update
   ```

2. **Dockerをインストール:**

   ```bash
   curl -fsSL get.docker.com | bash
   sudo usermod -aG docker $USER
   ```

3. **システムを再起動します：**

   ```
   sudo reboot
   ```

#### ステップ 2: Frigateのデプロイ

1. **Frigateイメージをプル:**

    [Package frigate](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/versions)にアクセスし、`-h8l`サフィックス付きのイメージを選択します。この例では、`ghcr.io/blakeblackshear/frigate:0.15.0-rc2-h8l`を選択します。

    ```bash
    docker pull ghcr.io/blakeblackshear/frigate:0.15.0-rc2-h8l
    ```

2. **Docker Composeファイルを作成:**

    以下は`frigate.yml`ファイルの例です。`hailo0`デバイスは前のステップで作成したもので、設定ファイルは`./config`ディレクトリに、データファイルは`./data`ディレクトリにあります。:

    ```yml
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

3. **Frigate設定を編集:**

    以下はFrigateアプリケーション用の`config/config.yml`ファイルの例です:

    ```yml
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

4. **Dockerインスタンスを開始:**

    ```bash
    docker compose -f frigate.yml up -d
    ```

    Frigateが起動して実行されると、`http://<your-raspberry-pi-ip>:5000`でFrigateのWebUIにアクセスして、カメラストリームを確認できます。

    ![frigate-web](https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/frigate_web.webp)

## Seeed Frigate

### PCIe設定を変更

config.txtを開く

```
sudo nano /boot/firmware/config.txt 
```

Add the following text to config.txt

```
dtparam=pciex1_gen=3
dtoverlay=pciex1-compat-pi5,no-mip
```

その後、`Ctrl+x`を使用してファイルを保存し、AIボックスを再起動します

### dockerとhailo-allのインストール

```
sudo apt update
sudo apt install hailo-all
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
sudo apt install docker-compose-plugin
```

### Create yml file

Create frigate.yml for docker compose to run frigate

```
cd ~
sudo nano frigate.yml
```

以下は frigate.yml の例です

```
version: "3.9"
services:
    frigate-hailo:
        container_name: frigate-hailo
        privileged: true
        restart: unless-stopped
        image: mjqx2023/frigate_seeed:latest
        shm_size: 1024mb
        environment:
            - HAILO_MONITOR=1
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
                  size: 1000000000
        ports:
            - 5000:5000
            - 1984:1984
            - 5002:5002
            - 5003:5003
```

yoloモデルをダウンロードし、config.ymlを作成します。

```
mkdir config && cd config && mkdir model_cache
cd model_cache && wget https://hailo-model-zoo.s3.eu-west-2.amazonaws.com/ModelZoo/Compiled/v2.14.0/hailo8/yolov8n.hef

cd .. && nano config.yml
```

以下は config.yml の例です

```yml
database:
  path: /data/db/frigate.db

go2rtc:
  streams:
    home:
      - rtsp://admin:passw0rd@10.1.1.188:554/cam/realmonitor?channel=1&subtype=1
    home1:
      - rtsp://admin:passw0rd@10.1.1.188:554/cam/realmonitor?channel=1&subtype=1
    yard:
      - rtsp://admin:passw0rd@10.1.1.189:554/cam/realmonitor?channel=1&subtype=1
    yard1:
      - rtsp://admin:passw0rd@10.1.1.189:554/cam/realmonitor?channel=1&subtype=1

cameras:
  home:
    ffmpeg:
      inputs:
        - path: rtsp://127.0.0.1:8554/home
          roles:
            - detect

    motion:
      threshold: 45
      contour_area: 60
      improve_contrast: true

  yard:
    ffmpeg:
      inputs:
        - path: rtsp://127.0.0.1:8554/yard
          roles:
            - detect

    motion:
      threshold: 45
      contour_area: 60
      improve_contrast: true
      
  home1:
    ffmpeg:
      inputs:
        - path: rtsp://127.0.0.1:8554/home1
          roles:
            - detect


    motion:
      threshold: 45
      contour_area: 60
      improve_contrast: true
      
  yard1:
    ffmpeg:
      inputs:
        - path: rtsp://127.0.0.1:8554/yard1
          roles:
            - detect

    motion:
      threshold: 45
      contour_area: 60
      improve_contrast: true
mqtt:
  enabled: false

objects:
  track:
    - person
    - cat

detectors:
  hailo8l:
    type: hailo8l
    device: PCIe

model:
  width: 640
  height: 640
  path: /config/model_cache/yolov8n.hef

version: 0.16-0

camera_groups:
  test:
    order: 1
    icon: LuAlignEndHorizontal
    cameras:
      - home
      - home1
      - yard
      - yard1
```

### dockerイメージをプルしてfrigateを実行

frigate_seedイメージをプル

```
cd ~
docker pull mjqx2023/frigate_seeed
docker compose -f frigate.yml start 
```

その後、AI box のウェブブラウザで `localhost:5000` を開きます：
 ![frigate-web](https://files.seeedstudio.com/wiki/AI_box_deepseek/seeed_frigate.png)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
