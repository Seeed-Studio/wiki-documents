---
description: Frigateは、IPカメラ向けのリアルタイムオブジェクト検出機能を備えたオープンソースのNVR（ネットワークビデオレコーダー）です。このガイドでは、NVIDIA Jetson デバイス上でFrigateをデプロイする手順を説明します。
title: NVIDIA Jetson 上でFrigateをデプロイする
image: https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/3.png
slug: /ja/deploy_frigate_on_jetson
last_update:
  date: 05/15/2025
  author: kourosh
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# NVIDIA Jetson デバイス上でFrigateをデプロイする

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/3.png)

Frigateは、IPカメラ向けのリアルタイムオブジェクト検出機能を備えたオープンソースのNVR（ネットワークビデオレコーダー）です。このガイドでは、NVIDIA Jetson デバイス上でFrigateをデプロイする手順を説明します。NVIDIA Jetson は、AIワークロードを効率的にデプロイするためのエッジAIプラットフォームです。FrigateとJetsonを組み合わせることで、ハードウェアアクセラレーションを活用した機械学習により、ビデオストリームを効率的に処理し、オブジェクトを検出できます。

プロジェクトの目的：

* NVIDIA Jetson デバイス上にFrigate環境をセットアップし、効率的なビデオ処理を実現する。
* 複数のIPカメラからのビデオストリームでリアルタイムオブジェクト検出を可能にする。

このプロジェクトの終了時には、ユーザーはリアルタイムでオブジェクトを検出し、アラートを送信し、他のスマートデバイスと統合できる完全な監視システムを構築できます。このソリューションはセキュリティを強化するだけでなく、処理をローカルで行うことでプライバシーを保護し、クラウドサービスへの依存を減らします。

<p style={{textAlign: 'center'}}><img src="https://docs.frigate.video/assets/images/media_browser-min-1f8a7c629d1bdbee1c78f99a97a0219a.png" alt="pir" width={900} height="auto" /></p>

## ハードウェアの準備

NVIDIA Jetson を使用してIPカメラでFrigateをデプロイするには、以下のハードウェアコンポーネントを準備する必要があります。このセクションでは、必要な機器を概説し、開始するための簡単な説明を提供します。

### 1. NVIDIA Jetson デバイス:

NVIDIA Jetson デバイスは、Frigateを実行し、リアルタイムオブジェクト検出を行うための中央処理ユニットとして機能します。要件や予算に応じて、以下のモデルから選択できます：

* Jetson Nano: 少数のカメラを使用した小規模な監視システムに十分な処理能力を持つコスト効率の高いオプション。
* Jetson Xavier NX: より高い処理能力を提供し、大規模なデプロイメントやより複雑なオブジェクト検出タスクに対応可能。
* Jetson Orinシリーズ: 最も強力なオプションで、高性能アプリケーションや複数カメラのセットアップに適しています。

:::info
**必要なアクセサリ**:

* Jetson モデルに適した電源。
* MicroSDカード（Jetson NanoおよびOrin用）またはeMMC（Jetson Xavier NX/AGX Orin用）で、少なくとも32GBの容量。
* 最適な動作温度を確保するための冷却ソリューション（例：ファンやヒートシンク）。
* 初期セットアップ用のモニター、キーボード、マウス。
:::

### 2. IPカメラ:
IPカメラは、高品質のビデオフィードを提供し、効果的なオブジェクト検出に不可欠です。RTSP（リアルタイムストリーミングプロトコル）に対応したDahua IPカメラを少なくとも1台用意してください。これにより、Frigateがビデオストリームを受信できます。

### 3. 必要なハードウェアの概要:

* Jetson デバイス: Jetson Nano、Xavier NX、またはOrinシリーズ
* IPカメラ: RTSP対応
* MicroSDカード/eMMC: 少なくとも32GB（Jetson セットアップ用）
* 電源と冷却装置: Jetson デバイス用
* ネットワーク機器: イーサネットケーブル
* オプション: 外部ストレージ、PoEインジェクター/スイッチ

## ソフトウェア準備

NVIDIA Jetson デバイスで Frigate を展開するためのソフトウェア環境のセットアップは重要なステップです。このセクションでは、IPカメラからのビデオストリームを処理し、Frigate を実行するために必要なソフトウェアコンポーネントとインストール手順を説明します。

### 1. オペレーティングシステム (JetPack):

NVIDIA Jetson デバイスが最新バージョンの NVIDIA JetPack SDK を実行していることを確認してください。JetPack は、Linux ベースのオペレーティングシステムと AI 開発に必要なライブラリやツールを提供します。

* **JetPack SDK のダウンロード**: NVIDIA JetPack ダウンロードページにアクセスして、Jetson デバイスに対応する最新の JetPack SDK をダウンロードしてください (私は JetPack 5.1.3 を Xavier NX で使用しました)。

* **Jetson デバイスのフラッシュ**: SDK Manager を使用して、JetPack イメージを Jetson デバイスの SDカード (Jetson Nano 用) または eMMC (Jetson Xavier NX/AGX Orin 用) にフラッシュします。

Seeed Jetson 搭載デバイスのフラッシュガイドについては、以下のリンクを参照してください:

* [reComputer J1010 | J101](https://wiki.seeedstudio.com/ja/reComputer_J1010_J101_Flash_Jetpack)
* [reComputer J2021 | J202](https://wiki.seeedstudio.com/ja/reComputer_J2021_J202_Flash_Jetpack)
* [reComputer J1020 | A206](https://wiki.seeedstudio.com/ja/reComputer_J1020_A206_Flash_JetPack)
* [reComputer J4012 | J401](https://wiki.seeedstudio.com/ja/reComputer_J4012_Flash_Jetpack)
* [A203 キャリアボード](https://wiki.seeedstudio.com/ja/reComputer_A203_Flash_System)
* [A205 キャリアボード](https://wiki.seeedstudio.com/ja/reComputer_A205_Flash_System)
* [Jetson Xavier AGX H01 キット](https://wiki.seeedstudio.com/ja/Jetson_Xavier_AGX_H01_Driver_Installation)
* [Jetson AGX Orin 32GB H01 キット](https://wiki.seeedstudio.com/ja/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

### 2. システム更新と依存関係:

オペレーティングシステムをセットアップした後、システム更新を実行し、必要な依存関係をインストールします。

:::info
**システムの更新: Jetson デバイスでターミナルを開き、以下を実行してください:**

```
sudo apt-get update && sudo apt-get upgrade
```

**追加の依存関係のインストール: Jetson でソフトウェアを構築および実行するために必要な一般的な依存関係をインストールします:**
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

### 2. Docker のインストール:

Frigate は Docker コンテナとして実行されます。以下の手順を使用して Jetson デバイスに Docker をインストールしてください。

##### 1. Docker のインストール:
* Docker の依存関係をインストール:
```
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
```
* Docker の公式 GPG キーを追加:
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```
* Docker リポジトリを追加:
```
sudo add-apt-repository "deb [arch=arm64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```
* Docker をインストール:
```
sudo apt-get update
sudo apt-get install -y docker-ce
```

##### 2. Docker Compose のインストール:
Docker Compose は、Frigate のようなマルチコンテナ Docker アプリケーションを定義および実行し、yaml ファイルを使用して Docker コンテナを管理します。

* Docker Compose のインストール: 以下のコマンドを使用して Docker Compose をインストールします:
```
sudo apt-get install -y python3-pip
sudo pip3 install docker-compose
```
* Docker Compose のインストール確認:
```
docker-compose --version
```

##### 3. NVIDIA Container Toolkit:

NVIDIA Container Toolkit のインストールについては、参考リンクを参照してください。システムに応じたインストールガイドラインに従ってください。Docker コンテナ内で GPU を使用するためにインストールが必要です。

##### 4. Frigate の設定:
* 設定ディレクトリの作成: Frigate の設定ファイルを保存するディレクトリを作成します:
```
mkdir ~/frigate
cd ~/frigate
```
* 設定ファイルの作成: ~/frigate ディレクトリ内に docker-compose.yml と config.yml ファイルを作成する必要があります。これらのファイルは、Frigate の展開方法や IP カメラとの接続方法を定義します。  
  - **docker-compose.yml**: Frigate の Docker サービスを定義します。  
  - **config.yml**: カメラストリーム、検出設定、MQTT 統合など、Frigate の設定を指定します。

これらの手順を完了することで、NVIDIA Jetson デバイスは Frigate を実行する準備が整い、リアルタイムのオブジェクト検出のために IP カメラを統合する準備ができます。

## はじめに

ハードウェアの準備とソフトウェア環境のセットアップが完了したら、NVIDIA Jetson デバイスに Frigate をデプロイし、Dahua IP カメラに接続する準備をします。以下の手順に従ってデプロイを開始してください。

### 1. Frigate Docker イメージを取得する

Frigate のウェブサイトでは、Docker と Compose を使用したインストール方法が推奨されています。まず、TensorRT に最適化された Frigate Docker イメージを取得する必要があります。このイメージは、NVIDIA Jetson デバイスの GPU 機能を活用して効率的な物体検出を行うように設計されています。

ここでは JP5.1.3 を使用しており、取得するコマンドは以下の通りです：
```
docker pull ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5
```

現在の安定版の公式 Docker イメージタグは以下の通りです：

* stable : amd64 & RPi 用の標準 Frigate ビルド、arm64 用に最適化された Frigate ビルド
* stable-standard-arm64 : arm64 用の標準 Frigate ビルド
* stable-tensorrt : NVIDIA GPU を搭載した amd64 デバイス向けの Frigate ビルド

現在の安定版のコミュニティサポート Docker イメージタグは以下の通りです：

* stable-tensorrt-jp5 : Jetpack 5 を実行している NVIDIA Jetson デバイス向けに最適化された Frigate ビルド
* stable-tensorrt-jp4 : Jetpack 4.6 を実行している NVIDIA Jetson デバイス向けに最適化された Frigate ビルド
* stable-rk : Rockchip SoC を搭載した SBC 向けの Frigate ビルド
* stable-rocm : AMD GPU および iGPU 向けの Frigate ビルド

これらのタグはデプロイに応じて使用できますが、ここでは Jetson、TensorRT、および Jetpack 5.1.3 を使用しているため、`stable-tensorrt-jp5` を取得する必要があります。この Docker イメージには Frigate を実行するために必要なすべてのパッケージが含まれており、TensorRT などを別途インストールする必要はありません。

### 2. Frigate 設定ファイルを準備する

デプロイを開始する前に、カメラストリームや検出設定を含む特定のセットアップに合わせて Frigate を構成する必要があります。

**config.yml ファイル**: このファイルには Frigate の設定が含まれます。カメラ設定や検出パラメータを含む内容を記述します。テキストエディタを使用して新しいファイル `config.yml` を作成し、以下の内容を追加してください。この設定は、Dahua IP カメラから効率的に物体検出を行うために TensorRT を使用して NVIDIA Jetson デバイス上で Frigate をセットアップします。
```
mqtt:
  enabled: False

cameras:
  dummy_camera: # <--- 後で実際のカメラに変更します
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
    device: 0 # デフォルト値、最初の GPU を選択

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

主なポイントは以下の通りです：

**MQTT 無効化**: MQTT 統合が無効化されており、Frigate は検出イベントを MQTT 経由で送信しません。

**カメラ設定**: `dummy_camera` というプレースホルダー名のカメラが有効化されており、FFmpeg を使用して H.264 ビデオストリームのハードウェアアクセラレーションを行います。RTSP URL を使用して Dahua IP カメラに接続します。

**Birdseye ビュー有効化**: すべてのカメラフィードから検出されたオブジェクトのみを表示する概要を提供します。

**TensorRT 検出器**: 主 GPU 上で TensorRT を使用して推論を行い、検出速度と効率を最適化します。

**モデル詳細**: TensorRT に最適化された YOLOv7 モデルを使用して物体検出を行い、入力サイズは 320x320、RGB フォーマットです。

**検出設定**: 20 フレーム/秒でビデオを処理し、検出解像度は 1280x720 です。

**物体追跡**: 人のみを追跡するように設定されており、計算負荷を軽減し、関連する検出に集中します。

### 3. docker-compose.yml ファイルを準備する

このファイルは、Docker Compose を使用して Frigate サービスを定義し、実行方法を指定します。同じディレクトリに `docker-compose.yml` という名前の新しいファイルを作成し、以下の内容を追加してください：
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
      #- type: tmpfs # オプション: 1GB のメモリ、SSD/SD カードの摩耗を軽減
        #target: /tmp/cache
        #tmpfs:
          #size: 1000000000
    ports:
      - "5000:5000"
      - "8554:8554"
    image: ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5
```

このコードスニペットは、Docker Compose 設定内で Frigate サービスを構成するものです。Frigate は、リアルタイムで物体を検出および追跡するオープンソースの AI ベースのビデオ監視システムです。

以下は設定の詳細です：

1. **services**: Docker Compose 設定内で使用されるサービスを定義します。

2. **frigate**: Frigate コンテナのサービス名です。

3. **privileged: true**: Frigate コンテナに特権アクセスを付与します。これはカメラなどのハードウェアデバイスにアクセスする際に必要です。

4. **environment**: Frigate コンテナ用の環境変数を設定します：
   - `YOLO_MODELS=yolov7-320`: 物体検出に使用する YOLO (You Only Look Once) モデルを指定します。
   - `USE_FP16=false`: 16 ビット浮動小数点精度の使用を無効化します。これにより、一部のハードウェアでパフォーマンスが向上する場合があります。

5. **container_name: frigate**: Frigate コンテナの名前を設定します。

6. **runtime: nvidia**: Frigate コンテナに使用するランタイム環境を指定します。この場合、GPU 加速処理のための NVIDIA ランタイムを使用します。

7. **volumes**: 以下のディレクトリをマウントします：
   - `/home/jetson/frigate/config:/config`: ローカルの設定ディレクトリをコンテナの `/config` ディレクトリにマウントします。
   - `/home/jetson/frigate/storage:/media/frigate`: ローカルのストレージディレクトリをコンテナの `/media/frigate` ディレクトリにマウントします。
   - コメントアウトされた行は、キャッシュ用に tmpfs (メモリ内ファイルシステム) を使用するオプション設定を示しています。これにより、ストレージデバイスの摩耗を軽減できます。

8. **ports**: 以下のポートを公開します:
   - `5000:5000`: コンテナのポート5000をホストのポート5000にマッピングします。
   - `8554:8554`: コンテナのポート8554をホストのポート8554にマッピングします。

9. **image: ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5**: Frigateコンテナに使用するDockerイメージを指定します。この場合、GitHub Container Registryの`blakeblackshear/frigate`リポジトリから`stable-tensorrt-jp5`タグを使用します。

この設定により、Docker Compose環境内でFrigateサービスをセットアップし、カスタマイズされた設定とハードウェアアクセラレーションのサポートを提供する形でFrigateビデオ監視システムを実行できます。

### 3. Docker Composeを使用してFrigateをデプロイする:
設定ファイルを作成し、Dockerイメージを取得したら、Docker Composeを使用してFrigateをデプロイできます。

1. Frigateディレクトリに移動: 設定ファイルを作成したディレクトリに移動します:
```
cd ~/frigate
```

2. Docker ComposeでFrigateを起動: 以下のコマンドを実行してFrigateを起動します:
```
docker-compose up -d
```
このコマンドはFrigateサービスをデタッチモードで開始します。Dockerコンテナはバックグラウンドで実行されます。

3. Frigateが実行中であることを確認: 以下のコマンドを使用してFrigateコンテナが実行中であることを確認します:
```
docker ps
```
4. Dockerを実行した後、Tensorrtのログが表示されれば、FrigateがGPU上で実行されていることを意味します。

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/1.png)

### 4. FrigateのWebインターフェースにアクセスする:
Frigateが起動している場合、Webインターフェースにアクセスしてビデオフィードを監視し、設定を構成できます。

1. Webブラウザを開く: Jetsonデバイスと同じネットワークに接続されているデバイスでWebブラウザを開きます。
2. JetsonデバイスのIPアドレスを入力: アドレスバーにJetsonデバイスのIPアドレスを入力し、ポート5000を指定します (例: `http://jetson-ip-address:5000` または `http://127.0.0.1:5000`)。
3. ダッシュボードを表示: Frigateダッシュボードには、接続されたDahua IPカメラのライブビデオフィード、検出イベント、および設定オプションが表示されます。
4. GPUを使用して検出していることを確認: jtopまたはFrigateシステムでJetsonがGPUを使用していることを確認できます。以下の例では、各フレームの検出部分が約33msで実行されていることがわかります。

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/2.png)

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/4.png)

## トラブルシューティング

ハードウェア接続、ソフトウェアデバッグ、またはアップロードの過程で問題が発生する可能性があります。特にDockerの実行中に問題が発生した場合、以下のコマンドを使用してエラーを解決できます。
```
docker logs frigate
```

## 技術サポートと製品ディスカッション

弊社製品をご利用いただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 参考文献
1.  [Frigate 公式ウェブサイト](https://frigate.video/)
2.  [Frigate Github リポジトリ](https://github.com/blakeblackshear/frigate)
3.  [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)