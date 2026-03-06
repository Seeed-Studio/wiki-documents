---
description: この記事では、NVIDIA Jetsonプラットフォームを使用してAI NVR（Network Video Recorder）を実装する包括的なガイドを提供します。ハードウェアのセットアップとソフトウェアのインストールから、リアルタイムビデオ分析とビデオウォールでの表示のためのDeepStreamとVSTの設定まで、すべてをカバーしています。
title: Jetson OrinによるAI NVR
keywords:
  - reComputer
  - AI NVR
  - Jetpack6.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ai_nvr_with_jetson
last_update:
  date: 08/12/2024
  author: Youjiang
createdAt: '2025-05-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/ai_nvr_with_jetson/
---

# reServer JetsonによるAI NVR

## はじめに

人工知能技術の進歩により、従来のビデオ監視システムはより高度な知能化に向けて進化しています。AI NVR（Network Video Recorder）は人工知能とビデオ監視技術を組み合わせ、ビデオの録画だけでなく、ビデオコンテンツのリアルタイム分析、認識、処理を可能にします。これにより、セキュリティ監視の効率性と精度が向上します。この記事では、NVIDIA Jetsonプラットフォームを使用してAI NVRを実装する方法を紹介します。

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/vst.png" />
</div>

このwikiでは、[Nvidia VST](https://docs.nvidia.com/mms/text/media-service/VST_Overview.html)と[Jetson Platform Service](https://developer.nvidia.com/embedded/jetpack/jetson-platform-services-get-started)の他のマイクロサービスを使用して、Jetsonデバイス上にローカルAI NVRを迅速にデプロイします。
ここでは、VSTを使用してカメラを追加し、DeepStream歩行者検出モデルを使用してオブジェクトを検出し、検出結果を元のビデオストリームと共にVSTビデオウォールに表示します。

### AI NVRとは？

AI NVRは、ビデオ録画と人工知能分析機能を統合したデバイスです。従来のNVRとは異なり、AI NVRはビデオ映像内の重要なイベント（侵入や物体の紛失など）を自動的に識別し、事前定義されたルールに基づいてアラームをトリガーすることもできます。このレベルの知能は、強力な計算能力と深層学習アルゴリズムに依存しています。

### なぜreServer（NVIDIA Jetson）プラットフォームを選ぶのか？

NVIDIA Jetsonは高性能で低消費電力の組み込み計算プラットフォームであり、AIと深層学習アプリケーションに理想的です。JetsonプラットフォームはNVIDIA GPUを搭載しており、深層学習推論プロセスを加速し、TensorFlowやPyTorchなどの幅広いAIツールとフレームワークをサポートします。

reServerは、Nvidia Jetsonプラットフォームをベースとしたエッジコンピューティングデバイスです。コンパクトな設計、パッシブ冷却、PoE対応5x RJ45 GbE、2.5" HDD/SSD用2xドライブベイ、豊富な産業用インターフェースを特徴とし、エッジAI IoTデバイスに理想的な選択肢です。

## 前提条件

- Jetson Orinデバイス（[jetpack 6.0](https://developer.nvidia.com/embedded/jetson-linux-r363) OS搭載）
- IPカメラ

:::note
このwikiでは、[reServer Industrial J4012](https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html)を使用して以下のタスクを実行しますが、他のJetsonデバイスでも試すことができます。
:::

:::note
[このwiki](https://wiki.seeedstudio.com/ja/reServer_Industrial_Getting_Started/#flash-jetpack)の手順に従って、最新のJetPack 6.0システムをreServerにフラッシュできます。
:::

<div align="center">
    <img width={1000}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110247.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong></a>
</div>

## はじめに

### ハードウェア接続

- Jetsonデバイスをネットワーク、マウス、キーボード、モニターに接続します。
- IPカメラをネットワークに接続します。

:::note
もちろん、ローカルネットワーク経由でSSHを使用してJetsonデバイスにリモートアクセスすることもできます。
:::

### ステップ1. `nvidia-jetson-services`のインストール

Jetsonデバイスのターミナルを開いて、以下を入力します：

```bash
sudo apt update
sudo apt install nvidia-jetson-services
```

そうすると、`/opt/nvidia/jetson/services/` に多くのマイクロサービスがあることがわかります。

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/jps.png" />
</div>

### ステップ2. ingress設定の変更

`/opt/nvidia/jetson/services/ingress/config/` ディレクトリで、ai-nvr-nginx.conf という名前の新しいファイルを作成し、以下の内容を記入します：

```bash
# specify you service discovery config here

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

### ステップ 3. NVR データストレージの場所を変更する（オプション）

ファイル `/opt/nvidia/jetson/services/vst/config/vst_storage.json` を開き、必要に応じてディレクトリを変更します。

```bash
{
    "data_path": "/home/seeed/VST/storage/data/",
    "video_path": "/home/seeed/VST/storage/video/",
    "total_video_storage_size_MB": 10000
}
```

### ステップ4. VSTサービスを開始する

VSTサービスは他のサービスに依存しているため、すべての依存サービスを一緒に開始する必要があります。

```bash
sudo systemctl start jetson-redis
sudo systemctl start jetson-ingress
sudo systemctl start jetson-vst
```

マイクロサービスが開始されると、対応するDockerコンテナが作成されます。

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/dockers.png" />
</div>

:::info
これで、ブラウザでVST Web UIを開くことができます。

ローカルネットワークで、ブラウザを開いて次のように入力してください：`http://<ip-of-jetson>:81/`
:::

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/webui.png" />
</div>

### ステップ5. AI NVR設定ファイルをダウンロードする

ブラウザを開いて[ダウンロードページ](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources)に移動します。

`Download(右上角)` --> `Browser(Diect Download)`

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/download_ai_nvr.png" />
</div>

```bash
cd <path-of-download>
unzip files.zip
cd files
tar -xvf ai_nvr-1.1.0.tar.gz
cd ai_nvr
```

### ステップ6. DeepStream 設定ファイルの修正

モデルの推論結果をリアルタイムで確認できるようにするため、DeepStreamの入力方法を修正する必要があります。ここでは、RTSP出力として設定できます。

この設定ファイルを見つけて、その内容を更新してください。

`<path-of-ai_nvr>/config/deepstream/pn26/service-maker/ds-config-0_nx16.yaml`

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
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
# THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
# FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
# DEALINGS IN THE SOFTWARE.
################################################################################

deepstream:
  nodes:
  - type: nvinfer
    # name of the primary inference must be 'pgie' for test app to route streams here
    name: pgie
    properties:
      config-file-path: "/ds-config-files/pn26/config_infer_primary_RN34_PN26_960x544_dla0_orin_unprune_nx.txt"
      model-engine-file: "/pn26-files/dla0_pn26_jp6_halfmem_bs4.engine"
      unique-id: 1
      # be sure to rename model-engine-file whenever batch-size is changed
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
お使いのJetsonデバイスのモデルにご注意ください。この場合、Orin Nx 16GBモジュールが使用されています。異なるモデルを使用している場合は、対応する設定ファイルを見つけて必要な変更を行ってください。
:::

composeファイルのSDRの下にWDM_WL_NAME_IGNORE_REGEX環境変数を追加します。
ここでは、私のJetsonデバイスはOrin Nx 16GBを搭載したreServer J4012なので、このcomposeファイルを編集する必要があります：

`<path-of-ai_nvr>/compose_nx16.yaml`

```yaml
...
WDM_CONSUMER_GRP_ID: sdr-deepstream-cg
WDM_CLUSTER_CONTAINER_NAMES: '["deepstream", "vst"]'
WDM_WL_NAME_IGNORE_REGEX: ".*deepstream.*"
...
```

### ステップ7. AI NVRアプリケーションを開始する

Jetsonターミナルで、適切なコマンドを入力してAI NVRアプリケーションを開始します。

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

起動プロセス中に、アプリケーションはDeepStreamなどの追加のDockerコンテナを作成します。

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/all_containers.png" />
</div>

### ステップ8. Web UIを通じてローカルAI NVRを設定する

この時点で、JetsonデバイスにAI NVRアプリケーションを正常にインストールし、起動しました。
次のステップは、Web UIを通じてカメラを設定することです。

ローカルネットワークで、ブラウザを開いて次のように入力します：`http://<ip-of-jetson>:30080/vst/`

IPカメラとDeepstream出力ビデオストリームを手動で設定します。

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

これはDeepStream設定ファイルに依存しており、必要に応じて変更できます。
:::

:::danger
deepstream出力ストリームを設定する際、カメラ名に`deepstream`フィールドを追加する必要があります
:::

設定が正常に完了すると、ビデオウォールですべてのフィードを表示できます。

`Video Wall` -->  `Select All`  --> `Start`

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ai-nvr/result.png" />
</div>

### ai-nvrアプリケーションを終了する

Jetsonターミナルで、適切なコマンドを入力してAI NVRアプリケーションを終了します。

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

サービスは以下のコマンドを使用して停止できます：

`sudo systemctl stop <service-name>`

例えば：

```bash
sudo systemctl stop jetson-redis
sudo systemctl stop jetson-ingress
sudo systemctl stop jetson-vst
```

## References

- https://developer.nvidia.com/embedded/jetpack/jetson-platform-services-get-started
- https://docs.nvidia.com/jetson/jps/moj-overview.html

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
