---
description: このwikiでは、reComputer Mini J501とReachy Mini Liteのハードウェア組み合わせを使用して、完全にローカルな音声対話型ロボットアシスタントをデプロイし、操作する方法を詳しく説明します。このガイドでは、Ollamaサーバーのインストール、ローカル音声モデルと会話アプリケーションの設定を通じて、最終的にインターネット接続を必要としないオフライン、低遅延の音声会話システムを実現します。ハードウェアセットアップ、ソフトウェアデプロイメント、および動作システムの最終デモンストレーションをカバーする完全なエンドツーエンドプロジェクトを提示します。
title: Reachy Mini用reComputer Miniにローカル音声LLMをデプロイ！
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/world_frame.webp
slug: /local_voice_llm_on_recomputer_jetson_for_reachy_mini_bk
sku: E2025123101
last_update:
  date: 01/06/2026
  author: youjiang
createdAt: '2026-01-07'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/local_voice_llm_on_recomputer_jetson_for_reachy_mini_bk/
---

ダブルMini！このプロジェクトでは、完全にローカライズされた、低遅延、高プライバシーの音声対話型ロボットアシスタントシステムを構築します。reComputer Mini J501エッジコンピューティングデバイスを中心として、ローカル音声認識、大規模言語モデル、音声合成サービスをデプロイします。オープンソースロボットプラットフォームReachy Miniを人間とコンピューターの相互作用の物理的端末として使用し、知覚的、会話的、行動的な具現化されたインテリジェント対話体験を実現します。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/workflow.png" />
</div>

## 前提条件
- reComputer Mini J501 Kit
- Reachy Mini Lite

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> reComputer Mini J501 Kit </th>
        <th> Reachy Mini Lite </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100020039-recomputer-mini-j501---carrier-board-for-jetson-agx-orin.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/world_frame.png" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.pollen-robotics.com/reachy-mini/#order">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

:::info
Jetsonデバイスに[キャリアボード](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html)、Jetsonモジュール、[冷却システム](https://www.seeedstudio.com/reComputer-Mini-J501-heatsink-with-fan-p-6605.html)が含まれており、JP6.2オペレーティングシステムがインストールされていることを確認してください。
:::

:::info
ソフトウェアを設定する前に、Reachy MiniをreComputer Mini J501のType-Aポートに接続してください。
:::


## ソフトウェアアプリケーションのデプロイ

**ステップ1.** reComputer Jetsonにollama推論サーバーをインストールして実行します。

reComputer Jetsonのターミナルウィンドウ（`Ctrl + Alt + T`）で以下のコマンドを実行します。

```bash
# Install Ollama (visit https://ollama.ai for platform-specific instructions)
curl -fsSL https://ollama.com/install.sh | sh

# Pull the required model
ollama pull llama3.2-vision:11b
```
:::note
モデルのダウンロードには約10分かかります。しばらくお待ちください。
:::

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/ollama.png" />
</div>

**ステップ2.** 会話アプリケーションをインストールします。

reComputer Jetsonのターミナルウィンドウで以下のコマンドを実行します。

:::note
conda仮想環境でランタイム環境を設定したい場合は、以下のインストールコマンドを実行する前に`conda activate <name>`コマンドを使用してターゲット環境をアクティベートしてください。
:::

```bash
cd Downloads
git clone https://github.com/Seeed-Projects/reachy-mini-loacl-conversation.git
cd reachy-mini-loacl-conversation
pip install -r requirements.txt -i https://pypi.jetson-ai-lab.io/
pip install "reachy-mini"
```

:::info
詳細なインストール情報については[こちら](https://github.com/Seeed-Projects/reachy-mini-loacl-conversation/tree/master)を参照してください。
:::


**ステップ3.** アプリケーションを起動します。

reComputer Jetsonのターミナルウィンドウで以下のコマンドを実行してreachy miniデーモンを起動します。

```bash
reachy-mini-daemon
```

別のターミナルを開いて実行します：

```bash
# Set environment variables
export OLLAMA_HOST="http://localhost:11434"
export OLLAMA_MODEL="qwen2.5:7b"
export COQUI_MODEL_NAME="tts_models/zh-CN/baker/tacotron2-DDC-GST"
export DEFAULT_VOLUME="1.5"

# Start the voice assistant
python main.py
```
<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/launch_app.png" />
</div>

:::info
ここでは、デモンストレーション用に中国語モデルを使用しています。必要に応じて他の言語のモデルに置き換えることができます。
:::


## 効果のデモンストレーション

プログラムが正常に開始された後、キーボードの`R`キーと`S`キーを使用して録音の開始と停止を制御できます。録音が停止されると、プログラムはローカル大規模言語モデルを呼び出して応答を生成します。

<div class="video-container">
  <iframe width="801" height="450" src="https://www.youtube.com/embed/broyI7PLm_g" title="Double Mini! Deploy local voice LLM on reComputer Mini for Reachy Mini!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考文献

- https://ollama.com/download/linux
- https://github.com/modelscope/FunASR
- https://github.com/coqui-ai/TTS
- https://github.com/Seeed-Projects/reachy-mini-loacl-conversation/

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
