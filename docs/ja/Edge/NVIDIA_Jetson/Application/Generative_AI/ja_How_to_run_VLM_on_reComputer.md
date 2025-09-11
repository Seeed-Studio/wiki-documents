---
description: このウィキでは、reComputer Jetson 上で VLM を実行する方法のチュートリアルを提供します。
title: reComputer 上で VLM を実行する方法
keywords:
- reComputer
- VLM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/run_vlm_on_recomputer
last_update:
  date: 05/15/2025
  author: ZhuYaoHui
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Jetson プラットフォームサービスを使用して reComputer 上で VLM を実行する方法

## はじめに
ビジョン言語モデル（VLM）は、画像、動画、テキストをサポートするマルチモーダルモデルであり、大規模言語モデルとビジョントランスフォーマーの組み合わせを使用します。この機能に基づいて、テキストプロンプトを使用して動画や画像をクエリすることが可能となり、動画とのチャットや自然言語ベースのアラートの定義などの機能を実現します。[VLM AI サービス](https://docs.nvidia.com/jetson/jps/inference-services/vlm.html)は、Jetson プラットフォームサービスを使用して、動画インサイトアプリケーション向けに VLM を迅速に展開することを可能にします。VLM サービスは、動画ストリーム入力の設定、アラートの設定、入力動画ストリームに関する自然言語での質問を行うための REST API エンドポイントを提供します。

このウィキでは、[reComputer J4012 Jetson Orin NX](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 上で VLM を実行する方法のチュートリアルを提供します。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/vlm/vlmgif.gif" />
</div>

## 必要条件
セットアッププロセスを進める前に、システムが以下の前提条件を満たしていることを確認してください：

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

- Ubuntu `22.04` またはそれ以降を実行している reComputer J4012 Orin NX 16G。
- ドライバーバージョン：`535.113.01`、Jetpack `6.0`、および CUDA バージョン：`12.2`。
- JetPack と関連する Jetson サービスパッケージがインストールされていることを確認してください。
  ```bash
  sudo apt-get install nvidia-jetpack
  sudo apt install nvidia-jetson-services
  ```
- IP カメラまたはローカル動画は RTSP を介してストリーミング可能です。（RTSP ストリーミングには、提供されている [NVStreamer チュートリアル](/ja/getting_started_with_nvstreamer) の使用を推奨します。）

## はじめに

**ステップ 1**: アプリケーションパッケージ **`vlm-1.1.0.tar.gz`** を NGC から Jetson にダウンロードします。このリンクを使用してください：[NGC Reference Workflow and Resources](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources)。NGC の資格情報を入力する必要があります。ページ上部右側の **`Download`** メニューにあるいずれかのオプションを使用してください：
```bash
tar -xvf vlm-1.1.0.tar.gz
cd ~/vlm/example_1
```

**ステップ 2**: VLM AI サービスは `jetson-ingress` と `jetson-monitoring` サービスを使用します。これら 2 つのサービスを VLM AI サービスと統合するように設定する必要があります。提供されたデフォルト設定を対応するサービス設定ディレクトリにコピーします：
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

**ステップ 4**: 初めて VLM サービスを開始する際には、VLM が自動的にダウンロードおよび量子化されます。このプロセスには時間がかかる場合があります。Orin NX16 上で展開する場合、量子化プロセスが大量のメモリを消費する可能性があるため、より多くの SWAP スペースをマウントする必要があるかもしれません。以下のコマンドを実行して SWAP スペースをマウントします：

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
すべての必要なコンテナが起動しているか確認するには、以下のコマンドを実行します：
```bash
sudo docker ps
```
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/vlm/vlmfig2.png" />
</div>

## RTSPストリーム入力を追加する
以下のcurlコマンドを使用して、VLMモデルで使用するRTSPストリームを最初に追加できます。ストリーミングには[NVStreamerチュートリアル](/ja/getting_started_with_nvstreamer)を使用することを推奨します。
- **ステップ1**: `0.0.0.0`をJetsonのIPアドレスに置き換え、`liveStreamUrl`リンクをRTSPリンクに置き換えた後、以下のコマンドをターミナルに入力してください:
    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream' \
    --header 'Content-Type: application/json' \
    --data '{
    "liveStreamUrl": "rtsp://0.0.0.0:31554/nvstream/root/store/nvstreamer_videos/car.mp4"
    }'
    ```
    注意: curlコマンド以外にも、ゼロショット検出サービスが開始されている場合、`http://0.0.0.0:5010/docs`で利用可能なAPIドキュメントページを通じてREST APIを直接テストすることもできます。

- **ステップ2**: 最初のステップを実行した後、IDが返されます。このIDを記録して、後続のステップで使用してください:
    ```bash
    {"id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"}
    ```
    後で以下のコマンドを使用してIDを取得することもできます:

    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream'
    ```
    IDを指定してストリームを削除するには、以下のコマンドを使用します:
    ```bash
    curl --location --request DELETE 'http://0.0.0.0:5010/api/v1/live-stream/{id}'
    ```

## アラートを設定する
アラートは、VLMがライブストリーム入力に対して継続的に評価する質問です。各アラートルールセットについて、VLMはライブストリームの最新フレームに基づいてそれがTrueかFalseかを判断しようとします。VLMによって決定されたTrueおよびFalseの状態は、WebSocketおよびJetsonモニタリングサービスに送信されます。

アラートを設定する際、アラートルールは「火事はありますか？」や「煙はありますか？」のようなはい/いいえ形式の質問として記述する必要があります。また、リクエストの本文には、RTSPストリームが追加された際に返されたストリームIDに対応する「id」フィールドを含める必要があります。

デフォルトでは、VLMサービスは最大10個のアラートルールをサポートしています。この制限は設定ファイルを調整することで増やすことができます。

**ステップ1**: `0.0.0.0`をreComputerのIPアドレスに置き換え、`alerts`を必要なオブジェクトを含むように修正し、前のステップで返された`id`を使用してください。コマンドを完成させた後、以下をターミナルに入力してください:
```bash
curl --location 'http://0.0.0.0:5010/api/v1/alerts' \
--header 'Content-Type: application/json' \
--data '{
    "alerts": ["is there a fire?", "is there smoke?"],
    "id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"
}'
```

## RTSPストリーム結果を表示する
検出結果は`rtsp://reComputer_ip:5011/out`を通じてストリーミングされます。ビデオストリーム出力を視覚化するためのPythonスクリプトを提供しています。事前にopencv-pythonライブラリをインストールし、以下のPythonスクリプトを実行してください:
- **ステップ1:** opencv-pythonライブラリをインストールする:
    ```bash
    pip install opencv-python
    ```
- **ステップ2:** 以下のPythonスクリプトを実行する:
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
ゼロショット検出サービスを停止するには、`compose.yaml` ファイルがあるディレクトリで以下のコマンドを実行してください：
```bash
sudo docker compose down
```

## 詳細情報
Jetson プラットフォームサービスを使用したビジュアル言語モデル (VLM)：https://docs.nvidia.com/jetson/jps/inference-services/vlm.html

## 技術サポート & 製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>