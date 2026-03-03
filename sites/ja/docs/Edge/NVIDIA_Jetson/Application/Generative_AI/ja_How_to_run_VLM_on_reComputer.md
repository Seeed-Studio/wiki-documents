---
description: このwikiでは、reComputer JetsonでVLMを実行する方法のチュートリアルを提供します。
title: reComputerでVLMを実行する方法
keywords:
- reComputer
- VLM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/run_vlm_on_recomputer
last_update:
  date: 7/24/2024
  author: ZhuYaoHui
---

# Jetson Platform ServicesでreComputerでVLMを実行する方法

## はじめに

vision language models（VLM）は、画像、動画、テキストをサポートするマルチモーダルモデルで、大規模言語モデルとビジョントランスフォーマーの組み合わせを使用しています。この機能に基づいて、テキストプロンプトを使用して動画や画像にクエリを実行することができ、動画とのチャットや自然言語ベースのアラートの定義などの機能を可能にします。[VLM AIサービス](https://docs.nvidia.com/jetson/jps/inference-services/vlm.html)は、動画インサイトアプリケーション向けにJetson Platform ServicesでVLMの迅速な展開を可能にします。VLMサービスは、動画ストリーム入力の設定、アラートの設定、入力動画ストリームに関する自然言語での質問を行うためのREST APIエンドポイントを公開します。

このwikiでは、[reComputer J4012 Jetson Orin NX](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)でVLMを実行する方法のチュートリアルを提供します。

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/vlm/vlmgif.gif" />
</div>

## 要件

セットアッププロセスを進める前に、システムが以下の前提条件を満たしていることを確認してください：

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

- Ubuntu `22.04`以降を実行するreComputer J4012 Orin NX 16G。
- ドライバーバージョン：`535.113.01`、Jetpack `6.0`、CUDAバージョン：`12.2`。
- JetPackと関連するJetsonサービスパッケージがインストールされていることを確認してください。

  ```bash
  sudo apt-get install nvidia-jetpack
  sudo apt install nvidia-jetson-services
  ```

- IPカメラやローカル動画はRTSP経由でストリーミングできます。（RTSPストリーミングには、提供している[NVStreamerチュートリアル](/ja/getting_started_with_nvstreamer)の使用を推奨します。）

## はじめに

**ステップ1**: アプリケーションパッケージ **`vlm-1.1.0.tar.gz`** をNGCからJetsonにダウンロードします。このリンクを使用してください：[NGC Reference Workflow and Resources](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources)。NGC認証情報の入力が必要です。ページで、**`Download`** メニュー（右上角）で利用可能なオプションの1つを使用してください：

```bash
tar -xvf vlm-1.1.0.tar.gz
cd ~/vlm/example_1
```

**ステップ 2**: VLM AI サービスは `jetson-ingress` と `jetson-monitoring` サービスを使用します。これら2つのサービスを VLM AI サービスと統合するように設定する必要があります。提供されたデフォルト設定を対応するサービス設定ディレクトリにコピーしてください：

```bash
sudo cp config/vlm-nginx.conf /opt/nvidia/jetson/services/ingress/config
sudo cp config/prometheus.yml /opt/nvidia/jetson/services/monitoring/config/prometheus.yml
sudo cp config/rules.yml /opt/nvidia/jetson/services/monitoring/config/rules.yml
```

**ステップ 3**: 基本サービスを実行します：

```bash
sudo systemctl start jetson-ingress
sudo systemctl start jetson-monitoring
sudo systemctl start jetson-sys-monitoring
sudo systemctl start jetson-gpu-monitoring
sudo systemctl start jetson-redis
sudo systemctl start jetson-vst
```

**ステップ4**: VLMサービスを初回起動する際、VLMの自動ダウンロードと量子化が行われます。この処理には時間がかかる場合があります。Orin NX16にデプロイする場合、量子化プロセスが大量のメモリを消費する可能性があるため、より多くのSWAP領域をマウントする必要があるかもしれません。以下のコマンドを実行して、より多くのスワップ領域をマウントしてください：

```bash
sudo fallocate -l 10G /data/10GB.swap
sudo mkswap /data/10GB.swap
sudo swapon /data/10GB.swap
```

**ステップ 5**: VLM AI サービスを開始します：

```bash
cd ~/vlm/example_1
sudo docker compose up -d
```

すべての必要なコンテナが起動したかどうかを確認するには、以下のコマンドを実行できます：

```bash
sudo docker ps
```

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/vlm/vlmfig2.png" />
</div>

## RTSP ストリーム入力の追加

以下の curl コマンドを使用して、VLM モデルで使用する RTSP ストリームを最初に追加できます。ストリーミングには [NVStreamer チュートリアル](/ja/getting_started_with_nvstreamer) の使用を推奨します。

- **ステップ 1**: `0.0.0.0` を Jetson の IP に、`liveStreamUrl` リンクを RTSP リンクに置き換えて、ターミナルで以下のコマンドを入力します：

    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream' \
    --header 'Content-Type: application/json' \
    --data '{
    "liveStreamUrl": "rtsp://0.0.0.0:31554/nvstream/root/store/nvstreamer_videos/car.mp4"
    }'
    ```

    注意：curl コマンドの他に、ゼロショット検出サービスが開始されている際に `http://0.0.0.0:5010/docs` で利用可能な API ドキュメントページを通じて REST API を直接テストすることもできます。

- **ステップ 2**: 最初のステップを実行すると、ID が返されます。この ID を記録して、後続のステップで使用する必要があります：

    ```bash
    {"id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"}
    ```

    以下のコマンドを使用して、後で ID を取得することもできます：

    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream'
    ```

    ID でストリームを削除するには、以下のコマンドを使用できます：

    ```bash
    curl --location --request DELETE 'http://0.0.0.0:5010/api/v1/live-stream/{id}'
    ```

## アラートの設定

アラートは、VLM がライブストリーム入力で継続的に評価する質問です。各アラートルールセットに対して、VLM はライブストリームの最新フレームに基づいて True または False かを判断しようとします。VLM によって決定されたこれらの True と False の状態は、websocket と jetson 監視サービスに送信されます。

アラートを設定する際、アラートルールは yes/no の質問として表現する必要があります。「火災はありますか？」や「煙はありますか？」などです。リクエストの本文には、RTSP ストリームが追加された際に返されたストリーム ID に対応する「id」フィールドも含める必要があります。

デフォルトでは、VLM サービスは最大 10 個のアラートルールをサポートします。これは設定ファイルを調整することで増やすことができます。

**ステップ 1**: `0.0.0.0` を reComputer の IP アドレスに置き換え、`alerts` をアラートが必要なオブジェクトを含むように変更し、前のステップで返された `id` を使用します。コマンドを完成させた後、ターミナルで以下を入力します：

``` bash
curl --location 'http://0.0.0.0:5010/api/v1/alerts' \
--header 'Content-Type: application/json' \
--data '{
    "alerts": ["is there a fire?", "is there smoke?"],
    "id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"
}'
```

## RTSP ストリーム結果の表示

検出出力は `rtsp://reComputer_ip:5011/out` を通じてストリーミングされます。ビデオストリーム出力を可視化するための Python スクリプトを提供しています。事前に opencv-python ライブラリをインストールしてから、以下の Python スクリプトを実行する必要があります：

- **ステップ 1:** opencv-python ライブラリをインストールします：

    ```bash
    pip install opencv-python
    ```

- **ステップ 2:** 以下の Python スクリプトを実行します：

    ```python
    import cv2
    rtsp_url = "rtsp://reComputer_ip:5011/out"
    cap = cv2.VideoCapture(rtsp_url)
    if not cap.isOpened():
        print("Cannot open RTSP stream")
        exit()
    while True:
        ret, frame = cap.read()
        if not ret:
            print("Failed to retrieve frame")
            break
        cv2.imshow('RTSP Stream', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    cap.release()
    cv2.destroyAllWindows()
    ```

## シャットダウン

ゼロショット検出サービスを停止するには、`compose.yaml` ファイルが配置されているのと同じディレクトリで以下のコマンドを実行します：

```bash
sudo docker compose down
```

## 詳細情報

Jetson Platform Services を使用した Visual Language Models (VLM): https://docs.nvidia.com/jetson/jps/inference-services/vlm.html

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
