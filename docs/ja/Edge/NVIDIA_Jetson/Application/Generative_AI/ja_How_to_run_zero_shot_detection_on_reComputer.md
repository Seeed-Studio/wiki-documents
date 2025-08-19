---
description: この Wiki は、reComputer Jetson 上で Zero-Shot Detection を実行する方法に関するチュートリアルを提供します。
title: reComputer 上で Zero-Shot Detection を実行する方法
keywords:
- reComputer
- Zero-Shot Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/run_zero_shot_detection_on_recomputer
last_update:
  date: 05/15/2025
  author: ZhuYaoHui
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Jetson プラットフォームサービスを使用して reComputer 上で Zero-Shot Detection を実行する方法

## はじめに
CLIP のような生成型 AI ビジョントランスフォーマーにより、オープンボキャブラリーオブジェクト検出を可能にする Zero-Shot Detection モデルを構築することが可能になりました。つまり、モデルは検出するための事前定義されたクラスセットに縛られることなく、ユーザーが実行時に設定したオブジェクトを検出します。Zero-Shot Detection AI サービスは、Jetson サービスを使用して、ビデオライブストリーム入力でオープンボキャブラリー検出を迅速に展開することを可能にします。このサービスは、ストリーム入力と検出するオブジェクトを制御するための REST API エンドポイントを公開します。

この Wiki では、[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 上で Zero-Shot Detection を実行する方法についてのチュートリアルを提供します。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/zero_shot_detection/fig1.gif" />
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
- ドライバーバージョン: `535.113.01`、Jetpack `6.0`、および CUDA バージョン: `12.2`。
- JetPack と関連する Jetson サービスパッケージがインストールされていることを確認してください。
  ```bash
  sudo apt-get install nvidia-jetpack
  sudo apt install nvidia-jetson-services
  ```
- IP カメラまたはローカルビデオは RTSP を介してストリーミング可能です。（RTSP ストリーミングには、提供されている [NVStreamer チュートリアル](/ja/getting_started_with_nvstreamer) の使用を推奨します。）

## 始めるにあたって

**ステップ 1**: NGC から **`zero_shot_detection-1.1.0.tar.gz`** アプリケーションパッケージを Jetson にダウンロードします。このリンクを使用してください: [NGC Reference Workflow and Resources](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources)。NGC の資格情報を入力する必要があります。ページ上部右側の **`Download`** メニューで利用可能なオプションのいずれかを使用してください。
```bash
tar -xvf zero_shot_detection-1.1.0.tar.gz
cd ~/zero_shot_detection/example_1
```
**ステップ 2**: Zero-Shot Detection AI サービスは `jetson-ingress` と `jetson-redis` サービスを使用します。Zero-Shot Detection REST API を公開するために jetson-ingress サービスを構成する必要があります。提供されたデフォルト設定を対応するサービス設定ディレクトリにコピーします。
```bash
sudo cp config/zero_shot_detection-nginx.conf /opt/nvidia/jetson/services/ingress/config
```
**ステップ 3**: 基本サービスを実行します。
```bash
sudo systemctl start jetson-monitoring
sudo systemctl start jetson-sys-monitoring
sudo systemctl start jetson-gpu-monitoring
```
**ステップ 4**: プラットフォーム ingress 設定ファイル（モニタリングサービスで使用される）内のすべての行が以下のファイルでコメント解除されていることを確認してください。
```bash
/opt/nvidia/jetson/services/ingress/config/platform-nginx.conf
```
**ステップ 5**: モニタリングダッシュボードにアクセスするために API Gateway を開始します。
```bash
sudo systemctl restart jetson-ingress
sudo systemctl restart jetson-redis
sudo systemctl restart jetson-vst
```
**ステップ 6**: Zero-Shot Detection AI サービスを開始します。
```bash
sudo docker compose up -d
```
必要なすべてのコンテナが開始されたかどうかを確認するには、以下のコマンドを実行できます。
```bash
sudo docker ps
```
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/zero_shot_detection/fig2.png" />
</div>

## RTSPストリーム入力を追加する
以下のcurlコマンドを使用して、ゼロショット検出モデルで使用するRTSPストリームを最初に追加できます。ストリーミングには[NVStreamerチュートリアル](/ja/getting_started_with_nvstreamer)を使用することを推奨します。
- **ステップ1**: `0.0.0.0`をJetsonのIPアドレスに置き換え、`liveStreamUrl`リンクをRTSPリンクに置き換えた後、以下のコマンドをターミナルに入力してください:
    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream' \
    --header 'Content-Type: application/json' \
    --data '{
    "liveStreamUrl": "rtsp://0.0.0.0:31554/nvstream/root/store/nvstreamer_videos/car.mp4"
    }'
    ```
注意: curlコマンド以外にも、ゼロショット検出サービスが開始されている場合、`http://0.0.0.0:5010/docs`で利用可能なAPIドキュメントページを通じてREST APIを直接テストすることもできます。

- **ステップ2**: 最初のステップを実行した後、IDが返されます。このIDを記録して、後続のステップで使用します。
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
## 検出クラスを追加する
ゼロショット検出モデルは、実行中に検出クラスを更新することができます。このエンドポイントは、検出するオブジェクトのリストと関連する閾値を受け付けます。閾値は検出の感度を示します。値が高いほど誤検出が減少し、値が低いほど誤検出が増加します。現在、このサービスは1つのストリームのみをサポートしていますが、将来的にはマルチストリームのサポートが予定されています。
- **ステップ1**: `0.0.0.0`をreComputerのIPアドレスに置き換え、`objects`を検出する必要があるオブジェクト（最大10個）に変更し、各カテゴリの`thresholds`を設定し、前のステップで返された`id`を使用します。コマンドを完成させた後、以下をターミナルに入力してください:
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
## RTSPストリーム結果を表示する
検出結果は`rtsp://reComputer_ip:5011/out`を通じてストリーミングされます。ビデオストリーム出力を視覚化するためのPythonスクリプトを提供しています。事前にopencv-pythonライブラリをインストールし、以下のPythonスクリプトを実行してください:
- **ステップ1:** opencv-pythonライブラリをインストールします:
    ```bash
    pip install opencv-python
    ```
- **ステップ2:** 以下のPythonスクリプトを実行します:
    ```python
    import cv2
    rtsp_url = "rtsp://reComputer_ip:5011/out"
    cap = cv2.VideoCapture(rtsp_url)
    if not cap.isOpened():
        print("RTSPストリームを開けません")
        exit()
    while True:
        ret, frame = cap.read()
        if not ret:
            print("フレームの取得に失敗しました")
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
Jetson プラットフォームサービスを使用したゼロショット検出の詳細については、以下をご覧ください：  
https://docs.nvidia.com/jetson/jps/inference-services/zero_shot_detection.html

## 技術サポート & 製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>