---
description: Whisper、Ollama、NVIDIA Jetsonを使用して独自のローカル音声エージェントを構築します。GPU設定、音声認識、LLM、TTS、オフライン音声AIのステップバイステップガイド。
title: オフラインスマート音声アシスタントのエンドツーエンド展開
keywords:
- reSpeaker
- TTS
- STT
- LLM
- Voice Assistant
- Speech Recognition
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /ja/respeaker_voice_assistant
last_update:
  date: 12/16/2025
  author: Kasun Thushara
---

## 概要

このプロジェクトは、スマートオフィスやスマートスペース向けに設計された完全ローカルのスマート音声アシスタントを実演します。高品質な音声キャプチャのためにReSpeaker XVF3800マイクアレイを使用し、正確な転写のためのオンデバイス音声認識（STT）と組み合わせています。ローカル大規模言語モデル（LLM）がクラウドに依存することなくユーザークエリを知的に処理し、プライバシーと低遅延を確保します。音声合成（TTS）が自然な音声応答を生成し、リアルタイムでの対話を可能にします。このシステムは、セキュアなオフライン音声制御が不可欠なオフィス、モール、キオスク、会議室などの環境に最適です。

## 必要なハードウェア

<table align="center">
  <tr>
    <th>ReSpeaker XVF3800 </th>
    <th>Jetson AGX Orin 32GB H01 Kit</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/6.png" style={{width:500, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## デバイスの準備

#### ReSpeaker XVF3800 – USBファームウェアインストール

使用前にReSpeaker XVF3800 USBマイクアレイが最新のファームウェアで更新されていることを確認してください。

- 公式ファームウェア更新ガイドに従ってください：

  - ReSpeaker XVF3800ファームウェア更新 [Seeed Studio Wiki](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#ファームウェア更新)

この手順により、安定したUSBオーディオ入力と下流の音声処理パイプラインとの互換性が確保されます。

#### NVIDIA Jetson AGX Orin – 初期設定

Jetson AGX Orinがまだ設定されていない場合は、適切なJetPackバージョンでフラッシュしてください。

- 公式設定ガイド：

  - Jetson AGX Orin 32GB H01 Flash JetPack [Seeed Studio Wiki](https://wiki.seeedstudio.com/ja/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack/#前提条件)

フラッシュしてUbuntuに起動した後、システムを更新してJetPackコンポーネントをインストールします：

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

### CUDA環境設定

#### インストール済みCUDAバージョンの確認

利用可能なCUDAディレクトリを確認します：

```bash
ls /usr/local
```

`cuda`、`cuda-12.x`などのフォルダが表示されるはずです。

#### CUDAパスの永続的な追加

シェル設定ファイルを編集します：

```bash
nano ~/.bashrc
```

最下部に以下の行を追加します（実際のCUDAバージョンに置き換えてください）：

```bash
# CUDA paths
export PATH=/usr/local/cuda-(your_version)/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda-(your_version)/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```

変更を適用します：

```bash
source ~/.bashrc
```

#### CUDAインストールの確認

CUDAが正しくインストールされ、アクセス可能であることを確認します：

```bash
nvcc --version
```

CUDAバージョンが表示されれば、GPUサポートの準備が完了です。

### GPUサポート付きWhisperのインストール

#### Whisperリポジトリのクローン

WhisperはCUDAアクセラレーションを有効にするためにソースからビルドされます。

- リポジトリ：

  - [https://github.com/ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp)

必要な依存関係をインストールします：

```bash
sudo apt-get install libsdl2-dev
```

#### CUDA有効化でのWhisperビルド

`whisper.cpp`ディレクトリから実行します：

```bash
cmake -B build -DGGML_CUDA=1 -DWHISPER_SDL2=ON
cmake --build build -j --config Release
```

これによりGPUアクセラレーションとSDLサポート付きでWhisperがコンパイルされます。

#### Whisperモデルのダウンロード

Hugging FaceからWhisperモデルをダウンロードします：

- モデル：

  - ggml-base-q8_0.bin

ダウンロードしたモデルを`models/`ディレクトリ内に配置します：

```bash
whisper.cpp/models/
```

#### Whisperサーバーの実行

GPUサポート付きでWhisperサーバーを開始します：

```bash
cd whisper.cpp
./build/bin/whisper-server \
  -m models/ggml-base.en.bin \
  --host 0.0.0.0 \
  --port 8080 \
  --gpu
```

これによりネットワーク経由でアクセス可能なリアルタイム音声認識サーバーが起動します。

### ローカルLLM推論用Ollamaのインストール

OllamaはNVIDIA Jetsonデバイスを公式にサポートし、CUDAアクセラレーション付きローカルLLM実行を提供します。

公式インストーラーを使用してOllamaをインストールします：

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

Gemma 3モデルを実行します：

```bash
ollama run gemma3:4b
```

## スマート音声AIアシスタント – クイックスタートガイド

### アーキテクチャ概要

1. **ウェイクワード検出** – 事前定義されたアクティベーションフレーズを継続的に聞き取ります。
2. **音声認識（STT）** – ローカル音声認識エンジンを使用してユーザーの音声をテキストに変換します。
3. **RAG対応LLM** – ベクターデータベースから関連するコンテキストを取得し、ローカルLLMを使用して知的な応答を生成します。
4. **音声合成（TTS）** – 生成された応答を自然な音声に変換します。

すべての処理はローカルで実行され、低遅延、データプライバシー、オフライン機能を確保します。

プロジェクトリポジトリ：

- [https://github.com/KasunThushara/LocalVoiceAssistant.git](https://github.com/KasunThushara/LocalVoiceAssistant)

リポジトリをクローンします

```bash
git clone https://github.com/KasunThushara/LocalVoiceAssistant.git
```

### クイックスタート

#### 依存関係のインストール

Pythonと必要なシステム依存関係がインストールされていることを確認してから、実行します：

```bash
pip install -r requirements.txt
```

#### 音声合成（TTS）モデルのダウンロード

このプロジェクトは**Piper TTS**モデルを使用します。以下は男性英語音声（Amy）を使用した例です：

```bash
# Example: female voice (amy)
wget -O models/en_US-amy-low.onnx \
  https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_US/amy/low/en_US-amy-low.onnx

wget -O models/en_US-amy-low.onnx.json \
  https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_US/amy/low/en_US-amy-low.onnx.json
```

必要に応じて、これを任意の互換性のあるPiper音声モデルに置き換えることができます。

#### 埋め込みモデルのダウンロード（一回限りの設定）

埋め込みモデルは、RAGパイプラインで使用されるベクターデータベースの構築に必要です。

```bash
python download_sentence_tf.py
```

この手順は一度だけ実行する必要があります。

#### ベクターデータベースの構築

コンテキスト検索に使用されるベクターデータベースを作成または再構築します：

```bash
python test_scripts/rebuild_vector.py
```

このプロセスはドキュメントをインデックス化し、高速なセマンティック検索のために準備します。

#### アプリケーションの実行

スマート音声AIアシスタントを開始します：

```bash
python app.py
```

実行されると、システムはウェイクワードを聞き取り、音声クエリにリアルタイムで応答します。

## 参考文献

- [Whisperサーバー例：](https://github.com/ggml-org/whisper.cpp/tree/master/examples/server)
- [Whisperリポジトリ：](https://github.com/ggml-org/whisper.cpp)
- [Ollamaモデルライブラリ：](https://ollama.com/library/gemma3)
- [Jetson上のOllamaガイド：](https://www.jetson-ai-lab.com/tutorial_ollama.html)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
