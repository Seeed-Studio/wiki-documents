---
description: Frigateは、IPカメラ用のリアルタイム物体検出機能を備えたオープンソースのNVR（ネットワークビデオレコーダー）です。このガイドでは、NVIDIA Jetsonデバイス上にFrigateをデプロイする手順を説明します。
title: Jetson上にFrigateをデプロイする
image: https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/3.png
slug: /ja/deploy_frigate_on_jetson
last_update:
  date: 08/29/2024
  author: kourosh
---

# reComputer（NVIDIA Jetson）デバイス上にFrigateをデプロイする

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/3.png)

Frigateは、IPカメラ用のリアルタイム物体検出機能を備えたオープンソースのNVR（ネットワークビデオレコーダー）です。このガイドでは、NVIDIA Jetsonデバイス上にFrigateをデプロイする手順を説明します。NVIDIA Jetsonは、AIワークロードの効率的なデプロイメントを可能にするエッジAIプラットフォームです。FrigateとJetsonを組み合わせることで、ハードウェア加速機械学習を活用して、ビデオストリームを効率的に処理し、物体を検出できます。

プロジェクトの目標：

- 効率的なビデオ処理のために、NVIDIA Jetsonデバイス上にFrigate環境をセットアップする。
- 複数のIPカメラからのビデオストリームでリアルタイム物体検出を有効にする。

このプロジェクトの終了時には、ユーザーはリアルタイムで物体を検出し、アラートを送信し、他のスマートデバイスと統合できる完全に動作する監視システムを持つことになります。このソリューションはセキュリティを向上させるだけでなく、処理がローカルで行われることを保証し、プライバシーを保護し、クラウドサービスへの依存を減らします。

<p style={{textAlign: 'center'}}><img src="https://docs.frigate.video/assets/images/media_browser-min-1f8a7c629d1bdbee1c78f99a97a0219a.png" alt="pir" width={900} height="auto" /></p>

## ハードウェアの準備

IPカメラを使用してNVIDIA Jetson上にFrigateを正常にデプロイするには、以下のハードウェアコンポーネントを準備する必要があります。このセクションでは、必要な機器の概要を説明し、開始に役立つ簡単な説明を提供します。

### 1. NVIDIA Jetsonデバイス：

NVIDIA Jetsonデバイスは、Frigateを実行し、リアルタイム物体検出を実行するための中央処理装置として機能します。要件と予算に応じて、いくつかのモデルから選択できます：

- Jetson Nano：少数のカメラを使用する小規模な監視セットアップに十分な処理能力を持つコスト効率的なオプション。
- Jetson Xavier NX：より多くの電力を提供し、大規模なデプロイメントやより複雑な物体検出タスクを処理できます。
- Jetson Orinシリーズ：最も強力なオプションで、高性能アプリケーションや複数カメラセットアップに適しています。

:::info
**必要なアクセサリ**：

- Jetsonモデルに適した電源。
- 最低32GBの容量を持つMicroSDカード（Jetson NanoとOrin用）またはeMMC（Jetson Xavier NX/AGX Orin用）。
- 最適な動作温度を確保するための冷却ソリューション（例：ファンまたはヒートシンク）。
初期セットアップ用のモニター、キーボード、マウス。

:::

### 2. IPカメラ：

IPカメラは、効果的な物体検出に不可欠な高品質のビデオフィードを提供します。RTSP（リアルタイムストリーミングプロトコル）と互換性のあるDahua IPカメラが少なくとも1台必要です。これにより、Frigateがビデオストリームを受信できます。

### 3. 必要なハードウェアの概要：

- Jetsonデバイス：Jetson Nano、Xavier NX、またはOrinシリーズ
- IPカメラ：RTSPと互換性があるもの
- MicroSDカード/eMMC：最低32GB（Jetsonセットアップ用）
- 電源と冷却：Jetsonデバイス用
- ネットワーク機器：イーサネットケーブル
- オプション：外部ストレージ、PoEインジェクター/スイッチ

## ソフトウェア準備

ソフトウェア環境の設定は、NVIDIA JetsonデバイスにFrigateを展開するための重要なステップです。このセクションでは、システムがFrigateの実行とIPカメラからのビデオストリーム処理の準備ができるように、必要なソフトウェアコンポーネントとインストール手順を概説します。

### 1. オペレーティングシステム(Jetpack)

NVIDIA JetsonデバイスがNVIDIA JetPack SDKの最新バージョンを実行していることを確認してください。JetPackは、AI開発に必要なライブラリとツールと共にLinuxベースのオペレーティングシステムを提供します。

- JetPack SDKのダウンロード: NVIDIA JetPack ダウンロードページにアクセスして、Jetsonデバイスと互換性のある最新のJetPack SDKをダウンロードしてください（私はXavier NXでJetpack 5.1.3を使用しました）。

- Jetsonデバイスのフラッシュ: SDK Managerを使用して、JetPackイメージをJetsonデバイスのSDカード（Jetson Nanoの場合）またはeMMC（Jetson Xavier NX/AGX Orinの場合）にフラッシュしてください。

Seeed Jetson搭載デバイスのフラッシュガイドについては、以下のリンクを参照してください：

- [reComputer J1010 | J101](https://wiki.seeedstudio.com/ja/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/ja/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/ja/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/ja/reComputer_J4012_Flash_Jetpack)
- [A203 Carrier Board](https://wiki.seeedstudio.com/ja/reComputer_A203_Flash_System)
- [A205 Carrier Board](https://wiki.seeedstudio.com/ja/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01 Kit](https://wiki.seeedstudio.com/ja/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 Kit](https://wiki.seeedstudio.com/ja/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

### 2. システムアップデートと依存関係

オペレーティングシステムの設定後、システムアップデートを実行し、必要な依存関係をインストールしてください。

:::info
**システムのアップデート: Jetsonデバイスでターミナルを開き、以下を実行してください:**

```
sudo apt-get update && sudo apt-get upgrade
```

**追加の依存関係をインストール: Jetson上でソフトウェアをビルドおよび実行するために必要な一般的な依存関係をインストールします:**

```
sudo apt-get install -y \
python3-pip \
python3-dev \
python3-venv \
build-essential \
libssl-dev \
libffi-dev \
git
```

:::

### 2. Docker インストール

Frigate は Docker コンテナとして動作します。以下の手順に従って Jetson デバイスに Docker をインストールしてください：

##### 1. docker をインストール

- Docker の依存関係をインストール：

```
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
```

- Dockerの公式GPGキーを追加：

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

- Dockerリポジトリを追加：

```
sudo add-apt-repository "deb [arch=arm64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

- dockerをインストール：

```
sudo apt-get update
sudo apt-get install -y docker-ce
```

##### 2. Docker Compose インストール：

Docker Compose は、Frigate などのマルチコンテナ Docker アプリケーションを定義・実行し、yaml ファイルを処理して docker コンテナを実行するために使用されます。

- Docker Compose をインストール：以下のコマンドを使用して Docker Compose をインストールします：

```
sudo apt-get install -y python3-pip
sudo pip3 install docker-compose
```

- Docker Composeのインストールを確認する：

```
docker-compose --version
```

##### 3. NVIDIA コンテナツールキット

NVIDIA Container Toolkitのインストールについては、参考文献のリンクを参照してください。お使いのシステムに基づいて、以下のインストールガイドラインに従ってください。Dockerコンテナ内でGPUを使用するためにインストールする必要があります。

##### 4. Frigate 設定

- 設定ディレクトリのセットアップ: Frigate設定ファイルを保存するディレクトリを作成します:

```
mkdir ~/frigate
cd ~/frigate
```

- 設定ファイルの作成: ~/frigateディレクトリ内にdocker-compose.ymlとconfig.ymlファイルを作成する必要があります。これらのファイルはFrigateのデプロイ方法とIPカメラへの接続方法を定義します。docker-compose.ymlはFrigateのDockerサービスを定義し、config.ymlはFrigateの設定（カメラストリーム、検出設定、MQTT統合など）を指定します。

これらの手順を完了することで、NVIDIA JetsonデバイスはFrigateを実行する準備が完全に整い、Frigateのデプロイとリアルタイムオブジェクト検出のためのIPカメラ統合を進める準備が整います。

## はじめに

ハードウェアの準備とソフトウェア環境のセットアップが完了したので、NVIDIA JetsonデバイスにFrigateをデプロイし、Dahua IPカメラに接続する時が来ました。デプロイを開始するために以下の手順に従ってください：

### 1. Frigate dockerイメージのプル：

Frigateのウェブサイトでは、composeを使用したDockerでの実行が推奨インストール方法です。まず、TensorRT用に最適化されたFrigate Dockerイメージをプルする必要があります。このイメージは、効率的なオブジェクト検出のためにNVIDIA JetsonデバイスのGPU機能を活用するように特別に設計されています。

ここではJP5.1.3で作業しており、プルリクエストは以下の通りです：

```
docker pull ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5
```

現在の安定版の公式Dockerイメージタグは以下の通りです：

- stable : amd64用の標準Frigateビルド & arm64用のRPi最適化Frigateビルド
- stable-standard-arm64 : arm64用の標準Frigateビルド
- stable-tensorrt : nvidia GPU搭載のamd64デバイス専用のFrigateビルド

現在の安定版のコミュニティサポートDockerイメージタグは以下の通りです：

- stable-tensorrt-jp5 : Jetpack 5を実行するnvidia Jetsonデバイス用に最適化されたFrigateビルド
- stable-tensorrt-jp4 : Jetpack 4.6を実行するnvidia Jetsonデバイス用に最適化されたFrigateビルド
- stable-rk : Rockchip SoC搭載のSBC用Frigateビルド
- stable-rocm : AMD GPUおよびiGPU用Frigateビルド

デプロイメントに応じてこれらのタグを使用できますが、ここではJetsonとtensorrtおよびJetpack 5.1.3を使用しているため、'stable-tensorrt-jp5'をプルする必要があります。このDockerイメージにはFrigateを実行するために必要なすべてのパッケージが含まれており、tensorrtなどを別途インストールする必要はありません。

### 2. Frigate設定ファイルの準備：

デプロイメントを開始する前に、カメラストリームや検出設定を含む特定のセットアップで動作するようにFrigateを設定する必要があります。

config.ymlファイル：このファイルには、カメラ設定や検出パラメータを含むFrigateの設定が含まれます。テキストエディタを使用してconfig.ymlという名前の新しいファイルを作成し、以下の内容を追加してください。この設定は、DahuaのIPカメラからの効率的なオブジェクト検出にTensorRTを使用して、NVIDIA Jetsonデバイス上でFrigateをセットアップします。

```
mqtt:
  enabled: False

cameras:
  dummy_camera: # <--- this will be changed to your actual camera later
    enabled: True
    ffmpeg:
      hwaccel_args: preset-jetson-h264
      inputs:
        - path: rtsp://admin:admin1234@192.168.1.108:554/cam/realmonitor?channel=1&subtype=0
          roles:
            - detect

birdseye:

  enabled: True
  mode: objects
         
detectors:
  tensorrt:
    type: tensorrt
    device: 0 #This is the default, select the first GPU

model:
  path: /config/model_cache/tensorrt/yolov7-320.trt
  input_tensor: nchw
  input_pixel_format: rgb
  width: 320
  height: 320

detect:
  fps : 20
  width: 1280
  height: 720
  
objects:
  track:
    - person 
```

主要なポイントは以下の通りです：

**MQTT 無効**: MQTT 統合が無効になっているため、Frigate は MQTT 経由で検出イベントを送信しません。

**カメラ設定**: dummy_camera という名前のプレースホルダーカメラが有効になっており、FFmpeg を通じて H.264 ビデオストリームのハードウェアアクセラレーションを使用します。検出のために RTSP URL を使用して Dahua IP カメラに接続します。

**Birdseye ビュー有効**: すべてのカメラフィードから検出されたオブジェクトのみを表示する概要を提供します。

**TensorRT 検出器**: プライマリ GPU で推論に TensorRT を使用し、検出速度と効率を最適化します。

**モデル詳細**: オブジェクト検出用の TensorRT 最適化 YOLOv7 モデルを指定し、320x320 の入力サイズと RGB フォーマットを使用します。

**検出設定**: 毎秒 20 フレームでビデオを処理し、1280x720 の検出解像度を使用します。
オブジェクト追跡: 人のみを追跡するように設定されており、計算負荷を軽減し、関連する検出に焦点を当てます。

### 2. docker-compose.yml ファイルの準備：

このファイルは Frigate サービスと、Docker Compose を使用してどのように実行されるかを定義します。同じディレクトリに docker-compose.yml という名前の新しいファイルを作成し、以下の内容を記述してください：

```
services:
  frigate:
    privileged: true
    environment:
      - YOLO_MODELS=yolov7-320
      - USE_FP16=false
    container_name: frigate
    runtime: nvidia 
    #devices:
      #- /dev/video0:/dev/video0 
    volumes:
      - /home/jetson/frigate/config:/config
      - /home/jetson/frigate/storage:/media/frigate
      #- type: tmpfs # Optional: 1GB of memory, reduces SSD/SD Card wear
        #target: /tmp/cache
        #tmpfs:
          #size: 1000000000
    ports:
      - "5000:5000"
      - "8554:8554"
    image: ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5
```

提供されたコードスニペットは、Docker Compose セットアップ内での Frigate サービスの設定のようです。Frigate は、リアルタイムでオブジェクトを検出・追跡できるオープンソースのAI駆動ビデオ監視システムです。

設定の詳細は以下の通りです：

1. **services**: この部分は、Docker Compose セットアップの一部となるサービスを定義します。

2. **frigate**: これは Frigate コンテナのサービス名です。

3. **privileged: true**: これは Frigate コンテナに特権アクセスを付与し、カメラなどのハードウェアデバイスへのアクセスに必要な場合があります。

4. **environment**: この部分は Frigate コンテナに2つの環境変数を設定します：
   - `YOLO_MODELS=yolov7-320`: オブジェクト検出に使用するYOLO（You Only Look Once）モデルを指定します。
   - `USE_FP16=false`: 16ビット浮動小数点精度の使用を無効にし、一部のハードウェアでパフォーマンスを向上させることができます。

5. **container_name: frigate**: Frigate コンテナの名前を設定します。

6. **runtime: nvidia**: Frigate コンテナに使用するランタイム環境を指定し、この場合はGPUアクセラレーション処理用のNVIDIAランタイムです。

7. **volumes**: 以下のディレクトリをマウントします：
   - `/home/jetson/frigate/config:/config`: ローカル設定ディレクトリをコンテナの `/config` ディレクトリにマウントします。
   - `/home/jetson/frigate/storage:/media/frigate`: ローカルストレージディレクトリをコンテナの `/media/frigate` ディレクトリにマウントします。
   - コメントアウトされた行は、キャッシュ用のtmpfs（インメモリファイルシステム）を使用するオプション設定を示しており、ストレージデバイスの摩耗を軽減するのに役立ちます。

8. **ports**: 以下のポートを公開します：
   - `5000:5000`: コンテナのポート5000をホストのポート5000にマップします。
   - `8554:8554`: コンテナのポート8554をホストのポート8554にマップします。

9. **image: ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5**: Frigate コンテナに使用する Docker イメージを指定し、この場合はGitHub Container Registry上の `blakeblackshear/frigate` リポジトリの `stable-tensorrt-jp5` タグです。

この設定は、Docker Compose 環境内で Frigate サービスをセットアップし、カスタマイズされた設定とハードウェアアクセラレーションサポートで Frigate ビデオ監視システムを実行する方法を提供します。

### 3. Docker Compose を使用して Frigate をデプロイする：

設定ファイルがセットアップされ、Docker イメージがプルされたら、Docker Compose を使用して Frigate をデプロイできます。

1. Frigate ディレクトリに移動する: 設定ファイルを作成したディレクトリにいることを確認してください：

```
cd ~/frigate
```

2. Docker Compose で Frigate を開始する: 以下のコマンドを実行して Frigate を開始します:

```
docker-compose up -d
```

このコマンドはFrigateサービスをデタッチドモードで開始します。Dockerコンテナはバックグラウンドで実行されます。

3. Frigateが実行中であることを確認する：以下を使用してFrigateコンテナが実行中であることを確認します：

```
docker ps
```

4. dockerを実行した後、Tensorrtログが表示されることで、FrigateがGPU上で動作していることがわかります。

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/1.png)

### 4. Frigateウェブインターフェースへのアクセス：

Frigateが起動して実行されたら、ウェブインターフェースにアクセスしてビデオフィードを監視し、設定を構成できます：

1. ウェブブラウザを開く：Jetsonデバイスと同じネットワークに接続されたデバイスで、ウェブブラウザを開きます。
2. JetsonデバイスのIPアドレスを入力：アドレスバーに、JetsonデバイスのIPアドレスに続けてポート5000を入力します（例：`http://jetson-ip-address:5000`または`http://127.0.0.1:5000`）。
3. ダッシュボードを表示：Frigateダッシュボードには、接続されたDahua IPカメラからのライブビデオフィード、検出イベント、および設定オプションが表示されます。
4. これで、jtopまたはfrigateシステムでJetsonが検出にGPUを使用していることを確認できます。以下では、検出部分が各フレームに対して約33msで実行されていることがわかります。

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/2.png)

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/4.png)

## トラブルシューティング

ハードウェア接続、ソフトウェアデバッグ、またはアップロードの過程で、特にdockerの実行において、いくつかの問題が発生する可能性があります。docker logを使用してエラーを解決できます。

```
docker logs frigate
```

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 参考文献

1. [Frigate Website](https://frigate.video/)
2. [Frigate Github](https://github.com/blakeblackshear/frigate)
3. [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)
