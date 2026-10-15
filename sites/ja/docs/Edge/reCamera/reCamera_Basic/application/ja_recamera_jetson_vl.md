---
title: reCamera と NVIDIA Jetson で VLM イベントゲートウェイを構築する
description: reCamera が YOLOv8 で人物を検出し、NVIDIA Jetson が Qwen3-VL を使って赤い服を着た人物かどうかを判定し、WebSocket イベントを配信する 2 段階ビジョンアプリケーションをデプロイします。
keywords:
  - reCamera
  - NVIDIA Jetson
  - Qwen3-VL
  - llama.cpp
  - YOLOv8
  - WebSocket
  - Edge AI
slug: /recamera_jetson_vlm_gateway
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sku: 102991897, 100029708, 108990120
sidebar_position: 20
last_update:
  date: 08/20/2026
  author: yylin
createdAt: '2026-08-20'
updatedAt: '2026-08-20'
url: https://wiki.seeedstudio.com/ja/recamera_jetson_vlm_gateway/
---

# reCamera と NVIDIA Jetson で VLM イベントゲートウェイを構築する

## はじめに

このガイドでは、完全な 2 段階ビジョンデモをデプロイします：

1. reCamera Basic が YOLOv8 を継続的に実行します。
2. 人物を検出した場合にのみ、そのフレームを NVIDIA Jetson に送信します。
3. Jetson 上の Qwen3-VL が、そのフレームに明確に赤い服を着た人物が含まれているかどうかを判定します。
4. Jetson は WebSocket 経由で、赤い人物のアラートまたはシーンの説明のいずれかをブロードキャストします。
5. reCamera は人物のバウンディングボックス付きで 1920×1080 H.264 RTSP ストリームも提供します。

```text
reCamera Basic                     NVIDIA Jetson                         Client
YOLOv8 person detector             :8080 llama-server + Qwen3-VL
  |                                :8000 Vision Gateway
  +-- HTTP Base64 JPEG -----------> analyze -> structured VLM result
  +-- RTSP :8554/live0             +---------------- WebSocket /ws ----> app
```

このアーキテクチャでは、低消費電力な reCamera 上で連続的な物体検出を行い、人が存在する場合にのみ大きな Vision-Language モデルを呼び出します。これにより Jetson への推論リクエストを削減しつつ、下流アプリケーションに自然言語でのシーン理解を提供できます。

:::note
このプロジェクトのビルド済みアプリケーションは **SG2002 RISC-V SoC を搭載した reCamera Basic** を対象としています。aarch64 ベースの reCamera Pro では動作しません。
:::

## ハードウェアの準備

| Item | Purpose |
|---|---|
| [reCamera 2002 Series](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html) | YOLOv8 による人物検出と RTSP ストリームを実行 |
| NVIDIA Jetson Orin device | llama.cpp、Qwen3-VL、および Vision Gateway を実行 |
| 開発用コンピュータ | アプリケーションを reCamera にコピーし、RTSP/WebSocket 出力を購読 |
| LAN または USB/Ethernet ネットワーク | reCamera、Jetson、およびクライアントを接続 |

## ソフトウェア要件

- reCamera Basic（SG2002/RISC-V）。reCamera Pro ではありません。
- JetPack、CUDA を備えた NVIDIA Jetson Orin。少なくとも 8 GB の統合メモリを推奨。
- 両方のデバイスが同じ信頼できる LAN 上にあり、互いの IP アドレスに到達できること。
- Jetson 上に Git と Python 3.10 以上。
- 互換性のある Qwen3-VL GGUF 言語モデルと、それに対応する `mmproj` ファイル。

Jetson または開発用コンピュータ上でデモリポジトリをダウンロードします：

```bash
git clone https://github.com/yyling0101-a11y/reCamera-VLM-Gateway.git
```

このガイドでは `/home/nvidia/recamera_vl` と、次のプレースホルダを使用します：

```text
JETSON_IP    Jetson LAN address, for example 192.168.4.33
RECAMERA_IP  reCamera LAN address
```

:::caution
llama.cpp のマルチモーダルサブシステムは変化が速く、そのドキュメント自身も破壊的変更が予想されると警告しています。再現性のあるデプロイのために、テスト済みの llama.cpp のコミットに固定してください。マルチモーダルモデルは通常、言語 GGUF と対応するプロジェクタの両方を必要とします。公式の [multimodal documentation](https://github.com/ggml-org/llama.cpp/tree/master/tools/mtmd) と [server documentation](https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md) を参照してください。
:::

## NVIDIA Jetson のセットアップ

### ステップ 1: JetPack と CUDA を確認する

Jetson 上で：

```bash
uname -m
cat /etc/nv_tegra_release
nvcc --version
```

想定されるアーキテクチャは `aarch64` です。`nvcc` が存在しない場合は、先に CUDA 開発ツールキットを含む JetPack リリースをインストールしてください。デバイスの監視には次を使用できます：

```bash
sudo tegrastats
```

任意の UI モニタ：

```bash
sudo python3 -m pip install jetson-stats
jtop
```

### ステップ 2: ビルド依存関係をインストールする

```bash
sudo apt update
sudo apt install -y git cmake build-essential ninja-build pkg-config \
  libssl-dev python3-venv curl
mkdir -p /home/nvidia/recamera_vl
cd /home/nvidia/recamera_vl
```

llama-server 自身が HTTPS 画像を取得する必要がある場合、OpenSSL は有用です。このデモは Base64 の data URI を送信するため、リモート画像の取得には依存しません。

### ステップ 3: CUDA 対応で llama.cpp をビルドする

```bash
git clone https://github.com/ggml-org/llama.cpp.git
cd llama.cpp

# Recommended: replace this with a commit you have tested and record it.
git rev-parse HEAD

cmake -S . -B build \
  -DGGML_CUDA=ON \
  -DCMAKE_CUDA_ARCHITECTURES=87 \
  -DLLAMA_OPENSSL=ON \
  -DCMAKE_BUILD_TYPE=Release
cmake --build build --config Release -j2 --target llama-server llama-cli
```

Jetson Orin は compute capability 8.7 を使用します。別の Jetson を使用する場合は、適切な CUDA アーキテクチャを選択してください。メモリの少ないデバイスでは `-j1` が必要になる場合があります。

出力と CUDA バックエンドを確認します：

```bash
file build/bin/llama-server
build/bin/llama-server --list-devices
```

一覧には CPU のみではなく CUDA デバイスが含まれているはずです。

### ステップ 4: Qwen3-VL モデルを準備する

同じ信頼できるモデルリリースから、言語 GGUF と対応するマルチモーダルプロジェクタを入手します。モデルのバリアントやリビジョン間でプロジェクタを混在させないでください。デプロイ前にライセンスとチェックサムを確認してください。

以下は、後述のファイル名に対応する例のレイアウトです：

```text
/home/nvidia/recamera_vl/models/Qwen3-VL-4B-Instruct-GGUF/
├── Qwen3VL-4B-Instruct-Q8_0.gguf
└── mmproj-Qwen3VL-4B-Instruct-Q8_0.gguf
```

:::caution
CUDA、KV キャッシュ、プロジェクタ、OS を含めると、8 GB の Jetson では Q8 はかなり厳しい場合があります。パブリッシャが提供する Q4 バリアントを使うとメモリ使用量を削減できます。この例に合わせるために無関係なファイル名を変更することは絶対にしないでください。
:::

### ステップ 5: llama-server を起動する

`/home/nvidia/recamera_vl/start_qwen3_vl.sh` を作成します：

```bash
#!/usr/bin/env bash
set -euo pipefail

BASE=/home/nvidia/recamera_vl
MODEL="$BASE/models/Qwen3-VL-4B-Instruct-GGUF/Qwen3VL-4B-Instruct-Q8_0.gguf"
MMPROJ="$BASE/models/Qwen3-VL-4B-Instruct-GGUF/mmproj-Qwen3VL-4B-Instruct-Q8_0.gguf"

exec "$BASE/llama.cpp/build/bin/llama-server" \
  --model "$MODEL" \
  --mmproj "$MMPROJ" \
  --alias qwen3-vl \
  --host 0.0.0.0 \
  --port 8080 \
  --n-gpu-layers all \
  --ctx-size 4096 \
  --parallel 1 \
  --flash-attn auto
```

次に実行します：

```bash
chmod +x /home/nvidia/recamera_vl/start_qwen3_vl.sh
/home/nvidia/recamera_vl/start_qwen3_vl.sh
```

フラグは llama.cpp のリビジョン間で変更される可能性があります。フラグが拒否された場合は、別のリリースからフラグをコピーするのではなく、同じビルドの `build/bin/llama-server --help` を使用してください。

別のターミナルで：

```bash
curl http://127.0.0.1:8080/health
curl http://127.0.0.1:8080/v1/models
```

メモリが不足する場合は、`--ctx-size 2048`、より小さい公式量子化、または `--no-mmproj-offload`（低速）を試してください。量子化された KV キャッシュ用のフラグが利用可能な場合もあります。その名称は `--help` で確認してください。

### ステップ 6: Vision Gateway をインストールして起動する

このリポジトリを `/home/nvidia/reCamera-VLM-Gateway` にクローンし、次を実行します：

```bash
cd /home/nvidia
git clone https://github.com/yyling0101-a11y/reCamera-VLM-Gateway.git
cd reCamera-VLM-Gateway
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r vision_gateway/requirements.txt
chmod +x vision_gateway/start.sh
./vision_gateway/start.sh
```

同梱のスクリプトは、`127.0.0.1:8080` 上の llama-server、モデルエイリアス `qwen3-vl` を想定し、`0.0.0.0:8000` で単一ワーカーを起動します。推論の直列化と WebSocket 接続がプロセスメモリ内にあるため、ワーカーは 1 つのままにしてください。

検証します：

```bash
curl http://127.0.0.1:8000/health
curl http://127.0.0.1:8000/api/v1/status
```

ヘルスチェックのレスポンスには、`status: ok`、`busy: false`、および llama-server の URL が表示されるはずです。

### ステップ 7: 画像解析と WebSocket をテストする

リポジトリのルートから：

```bash
base64 -w 0 vision_gateway/image.jpg > /tmp/vision-image.b64
curl http://127.0.0.1:8000/api/v1/analyze \
  -H 'Content-Type: application/json' \
  --data-binary "{\"image_base64\":\"$(</tmp/vision-image.b64)\"}"
```

成功したレスポンスには、`red_person_detected`、`message`、`processing_ms` が含まれます。

別の画像を送信する前に、ブラウザまたはアプリケーションから購読します：

```js
const ws = new WebSocket("ws://JETSON_IP:8000/ws");
ws.onmessage = e => console.log(JSON.parse(e.data));
setInterval(() => ws.readyState === WebSocket.OPEN && ws.send("ping"), 30000);
```

イベントは次のいずれかです：

```json
{"type":"red_person_detected","message":"发现了红色衣服的人","request_id":"...","timestamp":0}
```

または：

```json
{"type":"scene_description","message":"...","request_id":"...","timestamp":0}
```

## reCamera のセットアップ

### ステップ 1: reCamera に接続する

まず [reCamera Getting Started](https://wiki.seeedstudio.com/ja/recamera_getting_started/) ガイドを完了してください。reCamera と Jetson を同じ LAN に接続し、それぞれの IP アドレスを確認します。reCamera のデフォルトの USB ネットワークアドレスは一般的に `192.168.42.1` ですが、Jetson と通信する際は実際のネットワークで割り当てられたアドレスを使用してください。

:::note
カメラリソースは排他的です。スタンドアロンの C++ アプリケーションがカメラにアクセスする前に、デフォルトの `sscma-node` サービスを停止する必要があります。
:::

### ステップ 2: アプリケーションをデプロイして起動する

あなたのコンピュータから：

```bash
git clone https://github.com/yyling0101-a11y/reCamera-VLM-Gateway.git
cd reCamera-VLM-Gateway
scp -r recamera root@RECAMERA_IP:/home/recamera/person-vl
ssh root@RECAMERA_IP
```

reCamera 上で：

```bash
cd /home/recamera/person-vl
chmod +x run.sh bin/person_vl
killall sscma-node 2>/dev/null || true
JETSON_VL_URL=http://JETSON_IP:8000/api/v1/analyze ./run.sh
```

同梱のバイナリは reCamera Basic（SG2002/RISC-V）を対象としており、ビデオ SDK は root 権限を必要とします。人物が検出されると 1 枚の JPEG アップロードがキューに入り、デフォルトのクールダウンは 10 秒です。

RTSP-over-TCP を使用してアノテーション付きストリームを表示します：

```bash
ffplay -rtsp_transport tcp rtsp://RECAMERA_IP:8554/live0
```

## デモ全体を検証する

赤いメインの服を着て画角内を歩き、その後、赤い服なしで同じテストを繰り返します。次の 3 つの出力すべてを確認します：

- reCamera が `[vl] response ... http=200` を出力する。
- WebSocket が `red_person_detected` または `scene_description` を受信する。
- RTSP に人物のバウンディングボックスが表示される。

:::tip
Gateway は意図的に、同時に 1 つの VLM 推論のみを許可しています。複数のカメラを使用する場合は、`VL_COOLDOWN_SECONDS` を増やすか、外部のリクエストキューを追加してください。
:::

## リソース

- [reCamera Getting Started](https://wiki.seeedstudio.com/ja/recamera_getting_started/)
- [Develop with C/C++ on reCamera](https://wiki.seeedstudio.com/ja/recamera_develop_with_c_cpp/)
- [llama.cpp CUDA Build Documentation](https://github.com/ggml-org/llama.cpp/blob/master/docs/build.md)
- [llama.cpp Multimodal Documentation](https://github.com/ggml-org/llama.cpp/tree/master/tools/mtmd)
- [llama.cpp Server Documentation](https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md)

## 技術サポートと製品ディスカッション  

弊社製品をお選びいただきありがとうございます。弊社では、製品をできるだけスムーズにご利用いただけるよう、さまざまなレベルのサポートを提供しています。また、異なる好みやニーズに対応するため、複数のコミュニケーションチャネルも用意しています。  

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>  

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
