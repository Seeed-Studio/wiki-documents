---
description: ODYSSEY - X86J4105
title: Frigate
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ODYSSEY-X86J4105-Frigate
last_update:
  date: 05/15/2025
  author: w0x7ce

---


# Seeed Odyssey を使用した FRIGATE NVR プロジェクト

## Frigate NVR とは？

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Projects/Frigate/ui.jpeg" /></div>

*Frigate のショーケース画像は [Frigate 公式サイト](https://frigate.video/) より*

>"Frigate はリアルタイム AI オブジェクト検出を中心に構築されたオープンソースの NVR です。すべての処理はローカルのハードウェア上で実行され、カメラフィードが自宅外に出ることはありません。" -- [Frigate NVR](https://frigate.video/)

Frigate NVR は、セキュリティカメラにローカル処理された AI 機能を追加する、最も人気のあるネットワークビデオレコーダープロジェクトの 1 つです。そのため、クラウド推論サーバーに対する高額な料金を支払う必要がなくなるだけでなく、貴重なプライベートカメラストリームデータをインターネット上に公開する必要もありません。Frigate は、単一の Google Coral TPU を使用して 1 秒間に 100 以上のオブジェクト検出を処理できます。検出ゾーンやマスクをカスタマイズして使用ケースに合わせることができ、Home Assistant やその他のオートメーションプラットフォームに最小限の設定で統合することで、より多くのセキュリティ機能を提供し、貴重な資産にエッジ AI ソリューションを統合できます。

## 必要条件

* 1 x [Odyssey Blue: Quad Core Celeron J4125 Mini PC with 128GB external SSD](https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products)
* 1 x [Coral USB Accelerator](https://www.seeedstudio.com/coral-usb-accelerator-p-2899.html?queryID=8e8780bcccd9a9418d210fa8827db40f&objectID=2899&indexName=bazaar_retailer_products) (オプション)
* RTSP カメラストリーム
* キーボードと HDMI ディスプレイ

[Odyssey Blue](https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products) が同じネットワークに接続されているか、RTSP ウェブカメラにアクセスできることを確認してください。

## はじめに

このガイドでは、Seeed Studio の [Odyssey Blue](https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products) と [Coral USB Accelerator](https://www.seeedstudio.com/coral-usb-accelerator-p-2899.html?queryID=8e8780bcccd9a9418d210fa8827db40f&objectID=2899&indexName=bazaar_retailer_products) を使用して、RTSP カメラストリームでローカル AI 検出を実行するための Frigate Docker 環境を設定する方法を説明します。Home Assistant アドオンのセットアップについては、続報をお待ちください！

**ステップ 1:** [Odyssey Blue](https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products) に Debian 11 をインストールしていることを確認してください

[Debian 11](https://cdimage.debian.org/debian-cd/current/amd64/iso-dvd/debian-11.4.0-amd64-DVD-1.iso) OS イメージをダウンロードし、[こちら](https://wiki.seeedstudio.com/ja/ODYSSEY-X86J4105-Installing-OS/) のセットアップガイドに従って [Odyssey Blue](https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products) に Debian 11 オペレーティングシステムをインストールしてください。

**ステップ 2:** Debian 11 に Docker Engine と Docker Compose をインストールしていることを確認してください

[Debian に Docker Engine をインストールする](https://docs.docker.com/engine/install/debian/#install-using-the-repository) ガイドに従って Docker Engine と Docker Compose をインストールしてください。

Docker が正常にインストールされているか確認するには：

ターミナルアプリを開き、以下のコマンドを入力してください：

```bash
docker -v
```

ターミナルに以下のような出力が表示されるはずです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Projects/Frigate/check_docker_version.png" /></div>

**ステップ 3:** Frigate Docker ファイルを作成する

ターミナルアプリで以下のコマンドを入力して、vi テキストエディタを使用して Frigate Docker ファイルを作成します：

```bash
1 mkdir ~/Documents/frigate
2 cd ~/Documents/frigate
3 vi frigate.yml
```

frigate.yml ファイルに以下の行を挿入して Frigate Docker Compose のセットアップを行い、環境設定に応じて必要な部分を置き換えてください。

```bash 
version: "3.9"
services:
  frigate:
    container_name: frigate
    privileged: true # すべてのセットアップで必要ではない場合があります
    restart: unless-stopped
    image: blakeblackshear/frigate:stable-amd64
    shm_size: "64mb" # 上記の計算に基づいてカメラに合わせて更新してください
    devices:
      - /dev/bus/usb:/dev/bus/usb # USB Coral を渡します。他のバージョンの場合は修正が必要です
      - /dev/apex_0:/dev/apex_0 # PCIe Coral を渡します。ドライバの指示に従ってください https://coral.ai/docs/m2/get-started/#2a-on-linux
      - /dev/dri/renderD128 # Intel ハードウェアアクセラレーション用。ハードウェアに合わせて更新が必要です
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /path/to/your/config.yml:/config/config.yml:ro
      - /path/to/your/storage:/media/frigate
      - type: tmpfs # オプション: 1GB のメモリ。SSD/SD カードの摩耗を軽減します
        target: /tmp/cache
        tmpfs:
          size: 1000000000
    ports:
      - "5000:5000"
      - "1935:1935" # RTMP フィード
    environment:
      FRIGATE_RTSP_PASSWORD: "password"
```

Frigate Docker Compose YAML セットアップオプションの詳細については、[Frigate ドキュメントページ](https://docs.frigate.video/installation#docker) を参照してください。

私の場合、frigate.yml は次のようになります：

```bash
version: "3.7"
services:
  frigate:
    container_name: frigate
    privileged: true # すべてのセットアップで必要ではない場合があります
    restart: unless-stopped
    image: blakeblackshear/frigate:stable-amd64
    shm_size: "64mb" # 上記の計算に基づいてカメラに合わせて更新してください
    devices:
      - /dev/bus/usb:/dev/bus/usb # USB Coral を渡します。他のバージョンの場合は修正が必要です
      - /dev/apex_0:/dev/apex_0 # PCIe Coral を渡します。ドライバの指示に従ってください https://coral.ai/docs/m2/get-started/#2a-on-linux
      - /dev/dri/renderD128 # Intel ハードウェアアクセラレーション用。ハードウェアに合わせて更新が必要です
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /home/seeed/Documents/frigate/config/config.yml:/config/config.yml:ro
      - /home/seeed/Documents/frigate:/media/frigate
      - type: tmpfs # オプション: 1GB のメモリ。SSD/SD カードの摩耗を軽減します
        target: /tmp/cache
        tmpfs:
          size: 1000000000
    ports:
      - "5000:5000"
      - "1935:1935" # RTMP フィード
    environment:
      FRIGATE_RTSP_PASSWORD: "password"
```

**ステップ 4:** Frigateの設定ファイルを作成する

ターミナルアプリで以下のコマンドを入力して設定フォルダを作成します：

```bash
1 cd ~/Documents/frigate
2 mkdir config/
3 cd config/
```

viテキストエディタを使用してFrigateの設定ファイルを作成するには、以下のコマンドを入力します：

```bash
1 vi config.yml
```

その後、Frigateを動作させるための最小構成を以下のようにコピーしてください：

```bash
mqtt:
  host: mqtt.server.com # 有効なMQTTブローカーに置き換えてください
cameras:
  back:
    ffmpeg:
      inputs:
        - path: rtsp://viewer:{FRIGATE_RTSP_PASSWORD}@10.0.10.10:554/cam/realmonitor?channel=1&subtype=2 # RTSPカメラのURLに置き換えてください
          roles:
            - detect
            - rtmp
    detect:
      width: 1280
      height: 720
```

すべての設定オプションについては、Frigateのドキュメントページの[configuration](https://docs.frigate.video/configuration/index)セクションをご覧ください。

私の場合、以下の設定を自分の環境に合わせてカスタマイズしましたが、それ以外の設定はデフォルトのままにしています：

* MQTT: broker.hivemq.com
* Detector: [Coral USB Accelerator](https://www.seeedstudio.com/coral-usb-accelerator-p-2899.html?queryID=8e8780bcccd9a9418d210fa8827db40f&objectID=2899&indexName=bazaar_retailer_products)
* Cameras: rtsp://192.168.8.34:8080/unicast
* トラッキング対象: person, cup (注: オブジェクトラベルのリストはFrigateのドキュメントページの[Objects](https://docs.frigate.video/configuration/objects)セクションで確認できます)
* 録画: PersonまたはCupが検出された場合、検出の2秒前と2秒後の録画を行います。

そのため、私の`config.yml`は以下のようになります：

```bash
mqtt:
  host: broker.hivemq.com # テスト目的でHiveMQ MQTT Brokerを使用
detectors:
  # 必須: デテクタの名前
  coral:
    # 必須: デテクタのタイプ
    # 有効な値は 'edgetpu'（以下のdeviceプロパティが必要）および 'cpu'。
    type: edgetpu
    # オプション: デバイス名（詳細は https://coral.ai/docs/edgetpu/multiple-edgetpu/#using-the-tensorflow-lite-python-api を参照）
    device: usb
# オプション: モデルの変更
model:
  # オプション: モデルのパス（デフォルト: 自動設定）
  path: /edgetpu_model.tflite
  # オプション: ラベルマップのパス（デフォルト: 以下に示す）
  labelmap_path: /labelmap.txt
  # 必須: オブジェクト検出モデルの入力幅（デフォルト: 以下に示す）
  width: 320
  # 必須: オブジェクト検出モデルの入力高さ（デフォルト: 以下に示す）
  height: 320
cameras:
  back:
    ffmpeg:
      inputs:
        - path: rtsp://192.168.8.34:8080/unicast
          roles:
            - detect
            - rtmp
# オプション: 検出設定
# 注: カメラレベルで上書き可能
detect:
  # オプション: 検出ロールを持つ入力フレームの幅（デフォルト: 以下に示す）
  width: 800
  # オプション: 検出ロールを持つ入力フレームの高さ（デフォルト: 以下に示す）
  height: 600
  # オプション: カメラの希望FPS（デフォルト: 以下に示す）
  # 注: 推奨値は5。可能であればカメラのFPSを減らしてください。
  fps: 8
  # オプション: カメラの検出を有効化（デフォルト: True）
  # この値はMQTTを介して設定可能で、起動時に保持された値に基づいて更新されます。
  enabled: True
  # オプション: 検出がないフレーム数（デフォルト: フレームレートの5倍）
  max_disappeared: 25
  # オプション: 静止オブジェクトのトラッキング設定
  stationary:
    # オプション: 静止オブジェクトを確認する頻度（デフォルト: 以下に示す）
    interval: 0
    # オプション: 静止オブジェクトと見なすためのフレーム数（デフォルト: フレームレートの10倍または10秒）
    threshold: 50
    # オプション: 静止オブジェクトをトラッキングする最大フレーム数（デフォルト: 設定なし、無期限トラッキング）
    max_frames:
      # オプション: すべてのオブジェクトタイプのデフォルト（デフォルト: 設定なし、無期限トラッキング）
      default: 3000
      # オプション: 特定のオブジェクトの値
      objects:
        person: 1000
# オプション: オブジェクト設定
# 注: カメラレベルで上書き可能
objects:
  # オプション: labelmap.txtからトラッキングするオブジェクトのリスト（デフォルト: 以下に示す）
  track:
    - person
    - cup
# オプション: 録画設定
# 注: カメラレベルで上書き可能
record:
  # オプション: 録画を有効化（デフォルト: 以下に示す）
  enabled: True
  # オプション: クリーンアップ実行間隔（デフォルト: 以下に示す）
  expire_interval: 60
  # オプション: 録画の保持設定
  retain:
    # オプション: イベントに関係なく録画を保持する日数（デフォルト: 以下に示す）
    days: 0
    # オプション: 保持モード。利用可能なオプション: all, motion, active_objects
    mode: all
  # オプション: イベント録画設定
  events:
    # オプション: 長時間のイベント中にビデオを保持する最大時間（デフォルト: 以下に示す）
    max_seconds: 300
    # オプション: イベント前に含める秒数（デフォルト: 以下に示す）
    pre_capture: 2
    # オプション: イベント後に含める秒数（デフォルト: 以下に示す）
    post_capture: 2
    # オプション: 録画を保存するオブジェクト（デフォルト: すべてのトラッキング対象オブジェクト）
    objects:
      - person
      - cup
    # オプション: 指定されたゾーンに入ったオブジェクトに録画を制限（デフォルト: 必要なゾーンなし）
    required_zones: []
    # オプション: イベント録画の保持設定
    retain:
      # 必須: デフォルトの保持日数（デフォルト: 以下に示す）
      default: 10
      # オプション: 保持モード（デフォルト: 以下に示す）
      mode: motion
      # オプション: オブジェクトごとの保持日数
      objects:
        person: 2
        cup: 3
```

**ステップ 5:** Frigate Dockerコンテナを起動する

```bash
1 cd ~/Documents/frigate
2 sudo docker-compose -f frigate.yml up
```

トラブルシューティングを行う場合、以下のコマンドでDockerログを出力してエラーを確認できます：

```bash
sudo docker logs frigate
```

**ステップ 6:** FrigateのWebフロントエンドを表示する

以下のコマンドをターミナルで入力して、[Odyssey Blue](https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products)サーバーのIPアドレスを確認してください：

```bash
1 ip a
```

ターミナルに類似の出力が表示されます。接続設定に応じて有効なIPアドレスを見つけてください：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Projects/Frigate/ip_address.png" /></div>

[Odyssey Blue](https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products)のIPアドレスを特定したら、お気に入りのWebブラウザを開き、アドレスバーに**ip-address:5000**を入力してください。例えば、IPアドレスが192.168.8.57の場合、ブラウザのアドレスバーに入力するURLは192.168.8.57:5000となります。以下の画像のようなホームページにアクセスできるはずです：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Projects/Frigate/home_page.png" /></div>

ライブ検出を観察するには、ビデオフィードをクリックし、メインビューの右上にあるDebugをクリックしてください。その後、ライブフィードの下にある**SHOW OPTIONS**ボタンをクリックし、Bonding Boxやその他のオプションを選択してライブフィードに表示させてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Projects/Frigate/live_detection.png" /></div>

**[Odyssey Blue](https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products)でFrigateのさまざまなオプションを探索して楽しんでください。また、エッジAIをアプリケーションに追加するために、[reComputer](https://www.seeedstudio.com/catalogsearch/result/?q=recomputer)シリーズなどの他のSBCオプションもぜひチェックしてください。**

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>