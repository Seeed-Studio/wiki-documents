---
description: このwikiでは、reComputer Jetson上でZero-Shot Detectionを実行する方法のチュートリアルを提供します。
title: reComputerでZero-Shot Detectionを実行する方法
keywords:
- reComputer
- Zero-Shot Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/run_zero_shot_detection_on_recomputer
last_update:
  date: 7/24/2024
  author: ZhuYaoHui
---

# Jetson Platform ServicesでreComputer上でZero-Shot Detectionを実行する方法

## はじめに

CLIPなどの生成AI vision transformerにより、オープンボキャブラリオブジェクト検出が可能なゼロショット検出モデルの構築が可能になりました。つまり、モデルは検出する事前定義されたクラスのセットに制限されません。検出するオブジェクトは、ユーザーによって実行時に設定されます。Zero Shot Detection AIサービスは、ビデオライブストリーム入力でのオープンボキャブラリ検出のためのJetson Servicesを使用した生成AIの迅速な展開を可能にします。Zero Shot Detection AIサービスは、ストリーム入力と検出するオブジェクトを制御するREST APIエンドポイントを公開します。

このwikiでは、[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)上でZero-Shot Detectionを実行する方法のチュートリアルを提供します。

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/zero_shot_detection/fig1.gif" />
</div>

## 要件

セットアップ手順を進める前に、システムが以下の前提条件を満たしていることを確認してください：

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
- JetPackおよび関連するJetsonサービスパッケージがインストールされていることを確認してください。

  ```bash
  sudo apt-get install nvidia-jetpack
  sudo apt install nvidia-jetson-services
  ```

- IPカメラやローカル動画はRTSP経由でストリーミングできます。（RTSPストリーミングには、提供している[NVStreamerチュートリアル](/ja/getting_started_with_nvstreamer)の使用を推奨します。）

## はじめに

**ステップ1**: このリンクを使用してNGCからJetsonにアプリケーションパッケージ**`zero_shot_detection-1.1.0.tar.gz`**をダウンロードします：[NGC Reference Workflow and Resources](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources)。NGCの認証情報を入力する必要があります。ページで、**`Download`**メニュー（右上角）で利用可能なオプションの1つを使用してください：

```bash
tar -xvf zero_shot_detection-1.1.0.tar.gz
cd ~/zero_shot_detection/example_1
```

**ステップ 2**: ゼロショット検出AIサービスは`jetson-ingress`と`jetson-redis`サービスを使用します。jetson-ingressサービスを設定して、ゼロショット検出REST APIを公開する必要があります。提供されたデフォルト設定を対応するサービス設定ディレクトリにコピーしてください。

```bash
sudo cp config/zero_shot_detection-nginx.conf /opt/nvidia/jetson/services/ingress/config
```

**ステップ 3**: 基本サービスを実行します。

```bash
sudo systemctl start jetson-monitoring
sudo systemctl start jetson-sys-monitoring
sudo systemctl start jetson-gpu-monitoring
```

**ステップ4**: プラットフォームイングレス設定ファイル（監視サービスに使用）内のすべての行が、以下のファイルでコメントアウトされていないことを確認してください：

```bash
/opt/nvidia/jetson/services/ingress/config/platform-nginx.conf
```

**ステップ5**: APIゲートウェイを起動して監視ダッシュボードにアクセスします。

```bash
sudo systemctl restart jetson-ingress
sudo systemctl restart jetson-redis
sudo systemctl restart jetson-vst
```

**ステップ 6**: ゼロショット検出AIサービスを開始します。

```bash
sudo docker compose up -d
```

必要なコンテナがすべて起動しているかを確認するには、次のコマンドを実行できます：

```bash
sudo docker ps
```

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/zero_shot_detection/fig2.png" />
</div>

## RTSP ストリーム入力の追加

まず、ゼロショット検出モデルで使用するRTSPストリームを以下のcurlコマンドで追加できます。ストリーミングには[NVStreamerチュートリアル](/ja/getting_started_with_nvstreamer)の使用を推奨します。

- **ステップ 1**: `0.0.0.0`をあなたのJetson IPに、`liveStreamUrl`リンクをあなたのRTSPリンクに置き換えて、ターミナルで以下のコマンドを入力してください：

    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream' \
    --header 'Content-Type: application/json' \
    --data '{
    "liveStreamUrl": "rtsp://0.0.0.0:31554/nvstream/root/store/nvstreamer_videos/car.mp4"
    }'
    ```

注意：curlコマンドの他に、ゼロショット検出サービスが開始されている時に`http://0.0.0.0:5010/docs`で利用可能なAPIドキュメントページを通じて直接REST APIをテストすることもできます。

- **ステップ 2**: 最初のステップを実行した後、IDが返されます。このIDを記録して、後続のステップで使用する必要があります。

    ```bash
    {"id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"}
    ```

    後でIDを取得するには、以下のコマンドを使用することもできます：

    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream'
    ```

    IDでストリームを削除するには、以下のコマンドを使用できます：

    ```bash
    curl --location --request DELETE 'http://0.0.0.0:5010/api/v1/live-stream/{id}'
    ```

## 検出クラスの追加

ゼロショット検出モデルは、実行時に検出クラスを更新することができます。このエンドポイントは検出するオブジェクトのリストと関連する閾値を受け取ります。閾値は検出の感度です。高い値は偽陽性を減らします。低い値は偽陽性を増やします。現在このサービスは1つのストリームのみをサポートしていますが、将来的にはこのAPIはマルチストリームサポートを可能にします。

- **ステップ 1**: `0.0.0.0`をあなたのreComputer IPアドレスに置き換え、`objects`を検出する必要があるオブジェクト（最大10個）に変更し、各カテゴリの`thresholds`を設定し、前のステップで返された`id`を使用してください。コマンドを完成させた後、ターミナルで以下を入力してください：

    ```bash
    curl -X 'POST' \
    'http://192.168.49.101:5010/api/v1/detection/classes' \
    -H 'accept: application/json' \
    -H 'Content-Type: application/json' \
    -d '{
    "objects": [
        "a car", "a people"
    ],
    "thresholds": [
        0.2, 0.04
    ],
    "id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"
    }'
    ```

## RTSPストリーム結果の表示

検出出力は`rtsp://reComputer_ip:5011/out`を通じてストリーミングされます。ビデオストリーム出力を可視化するためのPythonスクリプトを提供しています。事前にopencv-pythonライブラリをインストールしてから、以下のPythonスクリプトを実行してください：

- **ステップ 1:** opencv-pythonライブラリをインストールします：

    ```bash
    pip install opencv-python
    ```

- **ステップ 2:** 以下のPythonスクリプトを実行します：

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

ゼロショット検出サービスを停止するには、`compose.yaml`ファイルが配置されている同じディレクトリで以下のコマンドを実行してください：

```bash
sudo docker compose down
```

## 詳細情報

Jetson Platform Servicesを使用したゼロショット検出: https://docs.nvidia.com/jetson/jps/inference-services/zero_shot_detection.html

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
