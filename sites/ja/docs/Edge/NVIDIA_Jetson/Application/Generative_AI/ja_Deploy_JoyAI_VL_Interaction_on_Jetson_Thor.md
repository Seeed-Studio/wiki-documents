---
description: このWikiでは、NVIDIA Jetson AGX Thor 上で JoyAI-VL-Interaction をデプロイする方法を説明し、シングルGPUエッジデプロイ向けの最小リアルタイム動画と言語インタラクションスタックに焦点を当てます。
title: Jetson Thor で JoyAI-VL-Interaction をデプロイする
keywords:
  - Jetson Thor
  - JoyAI
  - VLM
  - Streaming
  - Generative AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /deploy_joyai_vl_interaction_on_jetson_thor
sku: 100060965
last_update:
  date: 07/07/2026
  author: Youjiang
createdAt: '2026-07-07'
updatedAt: '2026-07-07'
url: https://wiki.seeedstudio.com/ja/deploy_joyai_vl_interaction_on_jetson_thor/
---

# Jetson Thor で JoyAI-VL-Interaction をデプロイする

## はじめに

[JoyAI-VL-Interaction](https://github.com/jd-opensource/JoyAI-VL-Interaction) は、オープンなリアルタイム動画と言語インタラクションシステムです。ストリーミング VLM バックエンド、ブラウザベースの WebUI、オプションの ASR/TTS サービス、長文コンテキストメモリパイプラインを組み合わせることで、モデルがライブ映像を見ながら適切なタイミングで応答できるようにします。

**2026年7月7日**時点で、上流の JoyAI-VL-Interaction リポジトリでは、**NVIDIA Hopper シリーズ GPU** 上でテストされていると記載されています。このWikiでは、実用的な **Jetson AGX Thor** への適用パスに焦点を当てます。まず Thor のシングルGPU上に **最小スタック（`webinfer + webui`）を先に** デプロイし、その後コアパイプラインが安定してから音声サービスを拡張します。

<div align="center">
    <img width={900}
     src="https://raw.githubusercontent.com/jd-opensource/JoyAI-VL-Interaction/main/img/joyvl-system-architecture.png" />
</div>

## 前提条件

- NVIDIA Jetson AGX Thor Developer Kit 1台
- USB カメラ 1台、または RTSP ストリームソース
- キーボード、マウス、モニタ、およびネットワーク接続
- Python 環境、モデルの重み、ログ用に少なくとも 30 GB の空きストレージ

:::note
このガイドでは、Jetson Thor システムがすでにフラッシュ済みで、正常に起動し、インターネットにアクセスできることを前提としています。
:::

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> NVIDIA Jetson AGX Thor Developer Kit </th>
        <th> USB Camera </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-kit-3.png" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-114090066--x10-usb-camera.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/X10-USB-wired-camera-p-6506.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

## はじめに（Getting Started）

### ステップ 1. Jetson Thor システムを準備する

Jetson Thor 上でターミナルを開き、必要なシステムパッケージをインストールします：

```bash
sudo apt update
sudo apt install -y git git-lfs curl ffmpeg python3-pip python3.12-venv
git lfs install
```

Jetson でより良い推論性能を得るために、デバイスを高性能電力モードに切り替えます：

```bash
sudo nvpmodel -m 0
sudo jetson_clocks
```

:::info
JoyAI-VL-Interaction は Python `3.12` を標準としているため、このガイドでも Thor 上で同じバージョンを使用します。
:::

### ステップ 2. `uv` と Hugging Face CLI をインストールする

上流のインストールスクリプトは [`uv`](https://docs.astral.sh/uv/) を使用しており、モデルダウンロードスクリプトは `hf` コマンドを想定しています。

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
source $HOME/.local/bin/env

uv tool install "huggingface_hub[cli]"
hf --version
```

それでも `hf` が見つからない場合は、ターミナルを再度開くか、次を実行します：

```bash
export PATH="$HOME/.local/bin:$PATH"
```

### ステップ 3. JoyAI-VL-Interaction リポジトリをクローンする

```bash
git clone https://github.com/jd-opensource/JoyAI-VL-Interaction.git
cd JoyAI-VL-Interaction
```

### ステップ 4. ランタイムをインストールする

まず、コアとなる WebUI とストリーミング推論環境のみをインストールします：

```bash
./install/install.sh --with-all
```

このスクリプトは `services/.venv` 配下に共有仮想環境を作成し、プロジェクトで必要とされる固定バージョンの `vllm==0.22.0` ランタイムをインストールします。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/joyai_vl_interaction/install_runtime_env.jpg" />
</div>

:::note
もし Jetson ARM64 上で `vllm==0.22.0` のインストールに失敗した場合は、デフォルトのホイールベースのフローを続行しないでください。その場合は、まず公式の vLLM ARM64/ソースビルド手順に切り替え、その後このガイドに戻ってください。
:::

### ステップ 5. モデルの重みをダウンロードする

ここでは GitHub の README に従って、すべてのモデルの重みをダウンロードします：

```bash
./install/download-models.sh --all
```

デフォルトでは、モデルは次の場所にダウンロードされます：

- `/tmp/models/JoyAI-VL-Interaction-Preview`
- `/tmp/models/Qwen3-VL-4B-Instruct`
- `/tmp/models/Qwen3-ASR-1.7B`
- `/tmp/models/Qwen3-TTS-12Hz-1.7B-CustomVoice`

### ステップ 6. Thor 上で最小構成の JoyAI スタックを起動する

上流のデフォルト GPU レイアウトは、複数 GPU を前提としています：

- メインモデルは GPU `0`
- 要約モデルは GPU `1`
- オプションの ASR/TTS は GPU `2`

Jetson Thor は **シングルGPU** プラットフォームであるため、メインモデルと要約モデルの両方を `GPU 0` 上に配置し、保守的なメモリ設定から開始する必要があります。

ここでは、Jetson 上で 4 つのターミナルを開き、それぞれで以下のコマンドを実行する必要があります。

- ターミナル1：
    ```bash
    source /home/seeed/JoyAI-VL-Interaction/services/.venv/bin/activate
    cd services/webinfer
    MAIN_GPU=0 MAIN_GPU_MEMORY_UTILIZATION=0.6 bash scripts/run.sh models
    ```
- ターミナル2：
    ```bash
    source /home/seeed/JoyAI-VL-Interaction/services/.venv/bin/activate
    cd services/webinfer
    SUMMARY_GPU=0 SUMMARY_GPU_MEMORY_UTILIZATION=0.3 bash scripts/run.sh summary
    ```

:::danger
ターミナル 3 でコマンドを実行し続ける前に、ターミナル 2 が完全に起動するまで待つ必要があることに注意してください。

ターミナル 2 で次のコマンドを使用して、ランタイムログを確認できます：

`tail -f /home/seeed/JoyAI-VL-Interaction/services/webinfer/summary_vllm_logs/vllm_8065.log`
:::

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/joyai_vl_interaction/lunch.jpg" />
</div>

- ターミナル3：
    ```bash
    source /home/seeed/JoyAI-VL-Interaction/services/.venv/bin/activate
    cd services/webinfer
    bash scripts/run.sh adapter
    ```
- ターミナル4：
    ```bash
    source /home/seeed/JoyAI-VL-Interaction/services/.venv/bin/activate
    cd services/webui 
    bash scripts/start_server.sh
    ```

:::info
これらの値は、シングルGPUデプロイ向けに Thor を意識した初期設定です。サービスが安定して起動するようであれば、GPU メモリ使用率を徐々に増やすことができます。vLLM が OOM エラーを報告する場合は、これらの値をさらに下げてください。
:::

起動に成功すると、スクリプトは次を起動します：

- ポート `7060` 上のメイン VLM OpenAI 互換 API
- ポート `8065` 上の要約モデル
- ポート `8070` 上のストリーミングアダプタ
- ポート `8099` 上の WebUI

### ステップ 7. WebUI を開く

Jetson Thor 上でブラウザを開き、次にアクセスします：

```text
https://<jetson-thor-ip>:8099
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/joyai_vl_interaction/webui.png" />
</div>

WebUI はデフォルトで自己署名証明書を使用しているため、初回アクセス時にブラウザが証明書警告を表示する場合があります。警告を受け入れて続行してください。

その後、次のことができます：

- ブラウザで USB ウェブカメラを選択する
- RTSP ストリーム URL を入力する
- JoyAI-VL-Interaction を使ってリアルタイム動画インタラクションを開始する

## デプロイを検証する

別のターミナルを開き、次のヘルスチェックを実行します：

```bash
curl http://127.0.0.1:7060/v1/models
curl http://127.0.0.1:8065/v1/models
curl http://127.0.0.1:8070/health
```

すべてのサービスが正しく動作していれば、WebUI フロントエンドは次のストリーミングアダプタに接続できるはずです：

```text
http://127.0.0.1:8070/v1
```

## デモ

<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/iyxkqZrzvHs" title="deploy joyai vl interaction on jetson thor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## トラブルシューティング

### 1. `hf: command not found`

ローカルバイナリパスが読み込まれていることを確認します：

```bash
source $HOME/.local/bin/env
export PATH="$HOME/.local/bin:$PATH"
```

### 2. `vllm==0.22.0` または `vllm-omni==0.22.0` が ARM64 で失敗する

上流プロジェクトは vLLM ベースのサービスを前提として設計されています。Jetson ARM64 上でデフォルトの pip または `uv` インストールが失敗する場合は、`vllm` または `vllm-omni` をソースからビルドするか、対応するランタイムをすでに含んだ ARM64 CUDA コンテナに切り替えてください。

### 3. WebUI は開くが、推論が `502` を返す

これは通常、ブラウザフロントエンドは起動しているものの、バックエンドのモデルサービスがまだ準備できていないことを意味します。次を再確認してください：

```bash
curl http://127.0.0.1:7060/v1/models
curl http://127.0.0.1:8065/v1/models
curl http://127.0.0.1:8070/health
```

## 参考資料

- [JoyAI-VL-Interaction GitHub リポジトリ](https://github.com/jd-opensource/JoyAI-VL-Interaction)
- [JoyAI-VL-Interaction 入門ガイド](https://github.com/jd-opensource/JoyAI-VL-Interaction/blob/main/doc/getting_started.md)
- [JoyAI-VL-Interaction WebInfer README](https://github.com/jd-opensource/JoyAI-VL-Interaction/blob/main/services/webinfer/README.md)
- [vLLM インストールガイド](https://docs.vllm.ai/en/stable/getting_started/installation/gpu.html)
- [vLLM Omni リポジトリ](https://github.com/vllm-project/vllm-omni)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
