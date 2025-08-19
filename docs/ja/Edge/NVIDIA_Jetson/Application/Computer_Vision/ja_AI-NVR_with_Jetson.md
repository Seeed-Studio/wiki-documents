---
description: 本記事では、NVIDIA Jetson プラットフォームを使用して AI NVR（ネットワークビデオレコーダー）を実装するための包括的なガイドを提供します。ハードウェアのセットアップやソフトウェアのインストールから、DeepStream と VST を使用したリアルタイムのビデオ解析およびビデオウォールでの表示の設定までを網羅しています。
title: AI NVR with Jetson Orin
keywords:
- reComputer
- AI NVR
- Jetpack6.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ai_nvr_with_jetson
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# AI NVR with reServer Jetson

## はじめに

人工知能技術の進歩に伴い、従来のビデオ監視システムはより高度なインテリジェンスへと進化しています。AI NVR（ネットワークビデオレコーダー）は、人工知能とビデオ監視技術を組み合わせることで、ビデオの録画だけでなく、リアルタイムでの解析、認識、処理を可能にします。これにより、セキュリティ監視の効率と精度が向上します。本記事では、NVIDIA Jetson プラットフォームを使用して AI NVR を実装する方法を紹介します。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/vst.png" />
</div>

本記事では、[Nvidia VST](https://docs.nvidia.com/mms/text/media-service/VST_Overview.html) および [Jetson Platform Service](https://developer.nvidia.com/embedded/jetpack/jetson-platform-services-get-started) の他のマイクロサービスを使用して、Jetson デバイス上でローカル AI NVR を迅速に展開する方法を説明します。ここでは、VST を使用してカメラを追加し、DeepStream の歩行者検出モデルを用いてオブジェクトを検出し、検出結果と元のビデオストリームを VST ビデオウォールに表示します。

### AI NVR とは？

AI NVR は、ビデオ録画と人工知能解析機能を統合したデバイスです。従来の NVR とは異なり、AI NVR は侵入や物品の紛失など、ビデオ映像内の重要なイベントを自動的に識別し、事前に設定されたルールに基づいてアラームをトリガーすることができます。このレベルのインテリジェンスは、強力な計算能力と深層学習アルゴリズムに依存しています。

### なぜ reServer（NVIDIA Jetson）プラットフォームを選ぶのか？

NVIDIA Jetson は、高性能かつ低消費電力の組み込みコンピューティングプラットフォームであり、AI や深層学習アプリケーションに最適です。Jetson プラットフォームは NVIDIA GPU を搭載しており、深層学習推論プロセスを加速し、TensorFlow や PyTorch などの幅広い AI ツールやフレームワークをサポートします。

reServer は、Nvidia Jetson プラットフォームに基づくエッジコンピューティングデバイスです。コンパクトなデザイン、パッシブ冷却、5x RJ45 GbE（PoE 対応）、2x 2.5インチ HDD/SSD 用ドライブベイ、豊富な産業用インターフェースを備えており、エッジ AI IoT デバイスに最適な選択肢です。

## 必要条件

- Jetson Orin デバイス（[Jetpack 6.0](https://developer.nvidia.com/embedded/jetson-linux-r363) OS を搭載）。
- IP カメラ。

:::note
本記事では、[reServer Industrial J4012](https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html) を使用して以下のタスクを実行しますが、他の Jetson デバイスを使用することも可能です。
:::

:::note
[こちらの wiki](https://wiki.seeedstudio.com/ja/reServer_Industrial_Getting_Started/#flash-jetpack) の手順に従って、reServer に最新の JetPack 6.0 システムをフラッシュすることができます。
:::

<div align="center">
    <img width={1000} 
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110247.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

## はじめに

### ハードウェア接続
- Jetson デバイスをネットワーク、マウス、キーボード、モニターに接続します。
- IPカメラをネットワークに接続します。

:::note
もちろん、ローカルネットワーク経由でSSHを使用してJetsonデバイスにリモートアクセスすることも可能です。
:::

### ステップ1. `nvidia-jetson-services` をインストールする

Jetsonデバイスのターミナルを開き、以下を入力します：

```bash
sudo apt update
sudo apt install nvidia-jetson-services
```
その後、`/opt/nvidia/jetson/services/`に多くのマイクロサービスがあることが確認できます。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/jps.png" />
</div>

### ステップ2. ingress設定を変更する

`/opt/nvidia/jetson/services/ingress/config/`ディレクトリに移動し、`ai-nvr-nginx.conf`という名前の新しいファイルを作成し、以下の内容を記述します：

```bash
# サービスディスカバリー設定をここに指定してください

location /emdx/ {
    rewrite ^/emdx/?(.*)$ /$1 break;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    access_log /var/log/nginx/access.log timed_combined;
    proxy_pass http://emdx_api;
}

location /ws-emdx/ {
    rewrite ^/ws-emdx/?(.*)$ /$1 break;
    proxy_set_header Host $host;
    proxy_pass http://emdx_websocket;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
```

### ステップ3. NVRデータ保存場所を変更する（オプション）

`/opt/nvidia/jetson/services/vst/config/vst_storage.json`ファイルを開き、必要に応じてディレクトリを変更します。

```bash
{
    "data_path": "/home/seeed/VST/storage/data/",
    "video_path": "/home/seeed/VST/storage/video/",
    "total_video_storage_size_MB": 10000
}
```

### ステップ4. VSTサービスを起動する
VSTサービスは他のサービスに依存しているため、すべての依存サービスを一緒に起動する必要があります。

```bash
sudo systemctl start jetson-redis
sudo systemctl start jetson-ingress
sudo systemctl start jetson-vst
```

マイクロサービスが起動すると、対応するDockerコンテナが作成されます。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/dockers.png" />
</div>

:::info
これで、ブラウザでVSTのWeb UIを開くことができます。

ローカルネットワーク内でブラウザを開き、以下を入力します：`http://<jetsonのIP>:81/`
:::

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/webui.png" />
</div>

### ステップ5. AI NVR設定ファイルをダウンロードする

ブラウザを開き、[ダウンロードページ](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources)にアクセスします。

`Download(右上)` --> `Browser(直接ダウンロード)`

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/download_ai_nvr.png" />
</div>

```bash
cd <ダウンロードしたパス>
unzip files.zip
cd files
tar -xvf ai_nvr-1.1.0.tar.gz
cd ai_nvr
```

### ステップ6. DeepStream設定ファイルを変更する

モデルの推論結果をリアルタイムで確認できるようにするため、DeepStreamの入力方法を変更する必要があります。ここでは、RTSPとして出力するように設定します。

この設定ファイルを見つけて内容を更新します。

`<ai_nvrのパス>/config/deepstream/pn26/service-maker/ds-config-0_nx16.yaml`

<details>

<summary> ds-config-0_nx16.yaml </summary>

```yaml
################################################################################
# SPDX-FileCopyrightText: Copyright (c) 2024 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
# SPDX-License-Identifier: MIT
#
# Permission is hereby granted, free of charge, to any person obtaining a
# copy of this software and associated documentation files (the "Software"),
# to deal in the Software without restriction, including without limitation
# the rights to use, copy, modify, merge, publish, distribute, sublicense,
# and/or sell copies of the Software, and to permit persons to whom the
# Software is furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
# OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
# THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
# FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
# DEALINGS IN THE SOFTWARE.
################################################################################

deepstream:
  nodes:
  - type: nvinfer
    # プライマリ推論の名前は 'pgie' である必要があります
    name: pgie
    properties:
      config-file-path: "/ds-config-files/pn26/config_infer_primary_RN34_PN26_960x544_dla0_orin_unprune_nx.txt"
      model-engine-file: "/pn26-files/dla0_pn26_jp6_halfmem_bs4.engine"
      unique-id: 1
      # バッチサイズを変更する場合は、model-engine-fileの名前を変更してください
      batch-size: 4
  - type: nvtracker
    name: tracker
    properties:
      ll-config-file: "/ds-config-files/pn26/config_tracker_NvDCF_PNv2.6_Interval_1_PVA.yml;/ds-config-files/pn26/config_tracker_NvDCF_PNv2.6_Interval_1_PVA.yml"
      ll-lib-file: "/opt/nvidia/deepstream/deepstream/lib/libnvds_nvmultiobjecttracker.so"
      sub-batches: "2:2"
      tracker-width: 960
      tracker-height: 544
  - type: nvmsgconv
    name: msgconv
    properties:
      payload-type: 1
  - type: nvmsgbroker
    name: msgbroker
    properties:
      config: "/ds-config-files/pn26/cfg_redis.txt"
      proto-lib: "/opt/nvidia/deepstream/deepstream/lib/libnvds_redis_proto.so"
      conn-str: "localhost;6379;test"
      topic: "test"
      sync: false
      async: false
  - type: queue
    name: checkpoint
  - type: nvmultistreamtiler
    name: tiler
    properties:
      width: 1280
      height: 720
  - type: nvdsosd
    name: osd
  - type: nvvideoconvert
    name: converter
  - type: tee
    name: tee
  - type: queue
    name: queue_tracker
  - type: queue
    name: queue_tee
  - type: queue
    name: queue_tiler
  - type: queue
    name: queue_msgconv
  - type: queue
    name: queue_converter
  - type: queue
    name: queue_osd
  - type: queue
    name: queue_sink
  - type: queue
    name: queue_msgbroker
  - type: nvvideoconvert
    name: converter1
  - type: nvrtspoutsinkbin
    name: sink
    properties:
      rtsp-port: 8555
      sync: false
  - type: sample_video_probe.sample_video_probe
    name: osd_counter
    properties:
      font-size: 15
  edges:
    pgie: [queue_tracker, osd_counter]
    queue_tracker: tracker
    tracker: queue_tee
    queue_tee: tee
    tee: [queue_tiler, queue_msgconv]
    queue_tiler: tiler
    tiler: queue_converter
    queue_converter: converter
    converter: queue_osd
    queue_osd: osd
    osd: queue_sink
    queue_sink: converter1
    converter1: sink
    queue_msgconv: msgconv
    msgconv: queue_msgbroker
    queue_msgbroker: msgbroker
```

</details>

:::note
お使いのJetsonデバイスのモデルに注意してください。この場合、Orin Nx 16GBモジュールが使用されています。異なるモデルを使用している場合は、対応する構成ファイルを見つけて必要な変更を行ってください。
:::

composeファイルのSDRセクションにWDM_WL_NAME_IGNORE_REGEX環境変数を追加します。
ここで、私のJetsonデバイスはOrin Nx 16GBを搭載したreServer J4012なので、以下のcomposeファイルを編集する必要があります：

`<path-of-ai_nvr>/compose_nx16.yaml`

```yaml
...
WDM_CONSUMER_GRP_ID: sdr-deepstream-cg
WDM_CLUSTER_CONTAINER_NAMES: '["deepstream", "vst"]'
WDM_WL_NAME_IGNORE_REGEX: ".*deepstream.*"
...
```


### Step7. AI NVRアプリケーションを起動する

Jetsonのターミナルで、AI NVRアプリケーションを起動するための適切なコマンドを入力します。

```bash
cd <path-of-download>/files/ai_nvr

# Orin AGX: 
# sudo docker compose -f compose_agx.yaml up -d --force-recreate
# Orin NX16: 
sudo docker compose -f compose_nx16.yaml up -d --force-recreate
# Orin NX8: 
# sudo docker compose -f compose_nx8.yaml up -d --force-recreate
# Orin Nano: 
# sudo docker compose -f compose_nano.yaml up -d --force-recreate
```

起動プロセス中に、DeepStreamなどの追加のDockerコンテナが作成されます。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/all_containers.png" />
</div>

### Step8. Web UIを通じてローカルAI NVRを構成する

この時点で、JetsonデバイスにAI NVRアプリケーションを正常にインストールして起動しました。
次のステップは、Web UIを通じてカメラを構成することです。

ローカルネットワークでブラウザを開き、以下を入力します：`http://<ip-of-jetson>:30080/vst/`

IPカメラとDeepStream出力ビデオストリームを手動で構成します。

`Sensor Management` -->  `Add device manually`  --> `Submit`

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/confing_camera.png" />
</div>

:::info
ここでは、有効なカメラアドレスまたはRTSPストリームパスを入力する必要があります。
:::

:::danger
DeepStream出力ストリームはrtsp://192.168.49.161:8555/ds-testです。

これはDeepStream構成ファイルに依存しており、必要に応じて変更できます。
:::

:::danger
DeepStream出力ストリームを構成する際には、カメラ名に`deepstream`フィールドを追加する必要があります。
:::

構成が成功すると、ビデオウォールで全てのフィードを確認できます。

`Video Wall` -->  `Select All`  --> `Start`

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/result.png" />
</div>

### AI NVRアプリケーションを終了する

Jetsonのターミナルで、AI NVRアプリケーションを終了するための適切なコマンドを入力します。

```bash
cd <path-of-download>/files/ai_nvr

# Orin AGX: 
# sudo docker compose -f compose_agx.yaml down --remove-orphans

# Orin NX16: 
sudo docker compose -f compose_nx16.yaml down --remove-orphans

# Orin NX8: 
# sudo docker compose -f compose_nx8.yaml down --remove-orphans

# Orin Nano: 
# sudo docker compose -f compose_nano.yaml down --remove-orphans
```

以下のコマンドを使用してサービスを停止することもできます：

`sudo systemctl stop <service-name>`

例：
```bash
sudo systemctl stop jetson-redis
sudo systemctl stop jetson-ingress
sudo systemctl stop jetson-vst
```

## 参考文献
- https://developer.nvidia.com/embedded/jetpack/jetson-platform-services-get-started
- https://docs.nvidia.com/jetson/jps/moj-overview.html

## 技術サポート & 製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>