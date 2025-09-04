---
description: このウィキ記事は、Raspberry Pi 5 と Hailo 8 を使用して Frigate NVR をデプロイする手順を提供します。
title: Raspberry Pi 5 での Frigate NVR
keywords:
  - Edge
  - reComputer r1000
  - オブジェクト検出
image: https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/frigate.webp
slug: /ja/frigate_nvr_with_raspberrypi_5
last_update:
  date: 05/15/2025
  author: Joshua Lee

no_comments: false # for Disqus
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

**Frigate NVR** は、AIモデルを使用したリアルタイムオブジェクト検出のために設計されたオープンソースのネットワークビデオレコーダーです。**Raspberry Pi 5** と組み合わせることで、エッジで効率的なビデオ監視を実現します。このガイドでは、最適なセットアップのためのインストールと構成プロセスを説明します。

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

**または、ビデオストリーミング用に少なくとも1台のカメラが必要です。[推奨ハードウェア](https://docs.frigate.video/frigate/hardware#cameras) を参照して、推奨されるカメラを確認してください。**

### Hailo PCIe ドライバーのインストール

#### ステップ 1: PCIe Gen 3 を有効化

ターミナルを開き、以下のコマンドを実行します。

```bash
$ sudo apt update
$ sudo raspi-config
```

ダイアログで **6 Advanced Options** を選択し、その後 **A8 PCIe Speed** を選択します。

![6 Advanced Options](https://raw.githubusercontent.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/main/resource/1.png)
![A8 PCIe Speed](https://raw.githubusercontent.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/main/resource/2.png)

PCIe Gen 3 モードを有効にするために「Yes」を選択します。

![Choose Yes](https://raw.githubusercontent.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/main/resource/3.png)

その後、「Finish」をクリックして終了します。

`/boot/firmware/config.txt` を編集し、ファイルの末尾に以下の行を追加します。

```
dtoverlay=pciex1-compat-pi5,no-mip
```

#### ステップ 2: Hailo PCIe ドライバーのインストール

dkms パッケージをインストールします。このパッケージは Hailo PCIe ドライバーのインストールに必要です。

```bash
$ sudo apt update
$ sudo apt install dkms
```

[GitHub](https://github.com/hailo-ai/hailort-drivers) から Hailo PCIe ドライバーを取得します。

```bash
$ git clone https://github.com/hailo-ai/hailort-drivers
$ cd hailort-drivers/linux/pcie
$ git checkout 24e7ff2fb58fab7029024c1a1d3f2d1914f56d7b
```

次に、Hailo PCIe ドライバーをインストールします。

```bash
$ sudo make install_dkms
```

インストール後、Hailo のファームウェアをダウンロードし、`/lib/firmware/hailo` ディレクトリにコピーします。

```bash
$ cd ../..
$ ./download_firmware.sh
$ sudo mkdir -p /lib/firmware/hailo
$ sudo cp hailo8_fw*.bin /lib/firmware/hailo/hailo8_fw.bin
```

PCIe max_desc_page_size の問題を回避するために、以下の内容で `/etc/modprobe.d/hailo_pci.conf` にルールを作成します。

```bash
options hailo_pci force_desc_page_size=4096
```

システムを再起動して反映させます。

```bash
$ sudo reboot
```

システムが再起動した後、Hailo PCIe ドライバーが正常にインストールされます。`/dev/hailo0` デバイスが作成されます。以下のコマンドを実行してデバイスを確認します。

```bash
$ ls /dev/hailo*
/dev/hailo0
```

### Frigate NVR のインストール

ここでは、カメラがセットアップされ、1920x1080 解像度で RTSP プロトコルを使用してストリーミングする準備ができていることを前提とします。

- RTSP URL の例: `rtsp://admin:passw0rd@192.168.98.11:554/cam/realmonitor?channel=1&subtype=0`

#### ステップ 1: 環境の準備

1. **システムを更新:**

   ```bash
   $ sudo apt update
   ```

2. **Docker をインストール:**

   ```bash
   $ curl -fsSL get.docker.com | bash
   $ sudo usermod -aG docker $USER
   ```

3. **システムを再起動:**

   ```
   $ sudo reboot
   ```

#### ステップ 2: Frigate のデプロイ

1. **Frigate イメージを取得:**

    [Package frigate](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/versions) にアクセスし、`-h8l` サフィックスが付いたイメージを選択します。この例では、`ghcr.io/blakeblackshear/frigate:0.15.0-rc2-h8l` を選択します。

    ```bash
    $ docker pull ghcr.io/blakeblackshear/frigate:0.15.0-rc2-h8l
    ```

2. **Docker Compose ファイルを作成:**

    以下は `frigate.yml` ファイルの例です。`hailo0` デバイスは前のステップで作成したもので、構成ファイルは `./config` ディレクトリに、データファイルは `./data` ディレクトリに配置されます。

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

3. **Frigate の設定を編集:**

    以下は Frigate アプリケーション用の `config/config.yml` ファイルの例です。

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

4. **Dockerインスタンスの起動:**

    ```bash
    $ docker compose -f frigate.yml up -d
    ```

    Frigateが起動した後、`http://<your-raspberry-pi-ip>:5000`でFrigateのWeb UIにアクセスし、カメラストリームを確認できます。

    ![frigate-web](https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/frigate_web.webp)

## Seeed Frigate 

### PCIe設定の変更

config.txtを開きます。
```
sudo nano /boot/firmware/config.txt 
```

以下のテキストをconfig.txtに追加します。
```
dtparam=pciex1_gen=3
dtoverlay=pciex1-compat-pi5,no-mip
```
その後、`Ctrl+x`を使用してファイルを保存し、AIボックスを再起動します。

### Dockerとhailo-allのインストール

```
sudo apt update
sudo apt install hailo-all
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
sudo apt install docker-compose-plugin
```

### ymlファイルの作成

Frigateを実行するためのfrigate.ymlを作成します。
```
cd ~
sudo nano frigate.yml
```
以下はfrigate.ymlの例です。
```
version: "3.9"
services:
    frigate-hailo:
        container_name: frigate-hailo
        privileged: true
        restart: unless-stopped
        image: frigate_seeed:latest
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

YOLOモデルをダウンロードし、config.ymlを作成します。
```
mkdir config && cd config && mkdir model_cache
cd model_cache && wget https://hailo-model-zoo.s3.eu-west-2.amazonaws.com/ModelZoo/Compiled/v2.14.0/hailo8/yolov8n.hef

cd .. && nano config.yml
```
以下はconfig.ymlの例です。

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

### DockerイメージのプルとFrigateの実行

Frigate_seeedイメージをプルします。

```
cd ~
docker pull frigate_seeed
docker compose -f frigate.yml start 
```
その後、AIボックスのWebブラウザで`localhost:5000`を開きます。
 ![frigate-web](https://files.seeedstudio.com/wiki/AI_box_deepseek/seeed_frigate.png)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>