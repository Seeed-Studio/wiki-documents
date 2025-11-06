---
description: Speech-to-Text（STT）、Text-to-Speech（TTS）、およびOllamaとNVIDIA Rivaを使用したローカル大規模言語モデル（LLM）を組み合わせた、完全にローカルで動作する音声対話型AIアシスタント。NVIDIA Jetsonなどのエッジデバイス上で完全に動作し、クラウドに依存することなく、プライベートでリアルタイムな自然な音声会話を可能にします。
title: Jetson上のチャットボット
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/local_chatbot_recomputer
last_update:
  date: 01/29/2025
  author: kourosh
---

# ローカルLLM、STT、TTSを使用した音声対話型チャットボットの構築

このプロジェクトは、**完全に音声対話型のAIアシスタント**の夢を実現します — **ローカルハードウェア**上で完全に動作し、クラウドサービスに依存しません。  
**Speech-to-Text（STT）**、**Text-to-Speech（TTS）**、および**Ollama**を使用した**ローカル大規模言語モデル（LLM）**を組み合わせることで、人間と機械の間の自然でプライベートなリアルタイム会話を可能にします。

全体のセットアップはDockerコンテナ内で動作し、**NVIDIA Jetsonデバイス**、**エッジコンピュータ**、またはGPUアクセラレーション付きの任意のLinuxベースシステムにデプロイできます。

---

## プロジェクト概要

このプロジェクトの目標は、以下の機能を持つ**音声駆動チャットボット**を作成することです：

- リアルタイムであなたの声を聞く
- ローカル**ASR（自動音声認識）**を使用してあなたの音声を理解する
- **ローカルLLM**を使用してインテリジェントな応答を生成する
- **TTS（Text-to-Speech）**を使用してそれらの応答を自然に話す

すべてのコンポーネントは自己完結型でローカルで動作し、データを完全にコントロールできます — クラウド依存なし、レイテンシなし、プライバシーの懸念なし。

---

## システムコンポーネント

### 1. Speech-to-Text（STT）モジュール

話された入力をリアルタイムでテキストに変換します。  
主な機能：

- **NVIDIA Riva ASR**を使用した高速で正確な転写  
- 複数言語のサポート  
- エッジデバイス向けに最適化

### 2. Text-to-Speech（TTS）モジュール

チャットボットの応答を自然な音声出力に変換します。  
ハイライト：

- 多言語、表現豊かで現実的な音声合成  
- **NVIDIA Riva TTS**によって駆動  
- 低レイテンシ — インタラクティブな会話に最適

### 3. ローカルLLM（Ollama）

チャットボットの中核は**Ollama**で、現代のLLMを効率的に実行するローカル推論エンジンです。  
機能：

- オフライン動作（インターネット不要）  
- Jetsonデバイスでもリアルタイム応答  
- スムーズで一貫した対話のためのコンテキスト保持  
- Llama、Phi、Gemma、Mistralなど様々なモデルをサポート

### 4. ユーザーインタラクション層

シンプルで直感的なインターフェースにより、ユーザーは以下が可能です：

- ボタンやコマンドで音声インタラクションを開始または停止  
- ライブ転写とチャットボットの応答を確認  
- 音声から音声へのスムーズで低レイテンシなコミュニケーションを楽しむ

---

## Ollamaのローカルセットアップ

まず、[Jetson Containers](https://github.com/dusty-nv/jetson-containers)をインストールして、Docker内でサービスを簡単に管理・デプロイできるようにします。

```bash
# Install Jetson Container tools
git clone https://github.com/dusty-nv/jetson-containers
bash jetson-containers/install.sh
```

インストール後、**Ollama**コンテナをプルして実行します：

```bash
jetson-containers run --name ollama $(autotag ollama)
ollama run llama3.2:1b
```

💡 **ヒント：** 設定をテストするために小さなモデル（`llama3.2:1b`など）から始めて、その後スケールアップしてください。

[ollama.com/library](https://ollama.com/library)で利用可能なモデル：

| モデル | パラメータ | サイズ | コマンド |
|-------|-------------|------|----------|
| Llama 3.2 | 3B | 2.0 GB | `ollama run llama3.2` |
| Llama 3.2 | 1B | 1.3 GB | `ollama run llama3.2:1b` |
| Llama 3.2 Vision | 11B | 7.9 GB | `ollama run llama3.2-vision` |
| Phi 3 Mini | 3.8B | 2.3 GB | `ollama run phi3` |
| Gemma 2 | 9B | 5.5 GB | `ollama run gemma2` |
| Mistral | 7B | 4.1 GB | `ollama run mistral` |

**NVIDIA Jetson AGX**を使用している場合、中型から大型のモデルを快適に実行できます。小型のJetsonの場合は、軽量モデル（1B–3B）を使用してください。

Ollamaをターミナルで直接実行するか、提供されているPythonスクリプト`ollama_run.py`を使用して実行します。

```bash
python3 ollama_run.py
```

**例：**

ターミナル使用  
<img src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/local_voice_chatbot/terminal_ollama.gif" width="700"/>

Python統合  
<img src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/local_voice_chatbot/ollama_python.gif" width="700"/>

---

## NVIDIA Riva：STTとTTS

リアルな音声インタラクションを可能にするために、**NVIDIA Riva**を使用します。これは以下を提供するGPUアクセラレーションツールキットです：

- **自動音声認識（ASR）**  
- **Text-to-Speech（TTS）**  
- **ニューラル機械翻訳（NMT）**（オプション）

クラウドから**Jetson シリーズ**などの組み込みデバイスまで、どこでもデプロイできます。

### ステップ1：NGC APIキーの取得

1. [NVIDIA NGC](https://catalog.ngc.nvidia.com/)にログインします。
2. **APIキー**を作成してローカルに保存します — Rivaリソースにアクセスするために必要です。

### ステップ2：Jetson上でNGCを設定

```bash
cd ~ && mkdir ngc_setup && cd ngc_setup
wget --content-disposition https://api.ngc.nvidia.com/v2/resources/nvidia/ngc-apps/ngc_cli/versions/3.36.0/files/ngccli_arm64.zip
unzip ngccli_arm64.zip 
chmod u+x ngc-cli/ngc
echo "export PATH=\"$PATH:$(pwd)/ngc-cli\"" >> ~/.bash_profile && source ~/.bash_profile
ngc config set
```

プロンプトが表示されたらAPIキーを使用してください。

### ステップ3：Jetson上でRivaをインストール

**JetPack 6.0**を実行していることを確認してください（または[サポートマトリックス](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/support-matrix.html)で互換性を確認してください）。

```bash
cd ~ && mkdir riva_setup && cd riva_setup
ngc registry resource download-version nvidia/riva/riva_quickstart_arm64:2.16.0
cd riva_quickstart_v2.13.1
```

`config.sh`で、リソースを節約するために未使用のサービスを無効にします：

```bash
service_enabled_nlp=false
service_enabled_nmt=false
```

次に、`/etc/docker/daemon.json`を編集してDockerがNVIDIAランタイムを使用するように設定します：

```json
{
  "default-runtime": "nvidia",
  "runtimes": {
    "nvidia": {
      "path": "nvidia-container-runtime",
      "runtimeArgs": []
    }
  }
}
```

Dockerを再起動します：

```bash
sudo systemctl restart docker
```

最後に、Rivaを初期化して開始します：

```bash
sudo bash riva_init.sh
sudo bash riva_start.sh
```

---

## チャットボットの実行

すべての準備が整ったら、メインアプリケーションを実行します：

```bash
git clone https://github.com/kouroshkarimi/local_chatbot_jetson.git
cd local_chatbot_jetson
python3 app.py --list-input-devices
python3 app.py --list-output-devices
python3 app.py --input-device <your_input_id> --output-device <your_output_id>
```

これで**アシスタントに話しかける**ことができ、アシスタントは**聞いて、考えて、話し返す**でしょう — すべてローカルで、Jetsonによって駆動されます。

---

## 主な利点

- 🔒 100%プライベート – データがデバイスから出ることはありません  
- ⚡ リアルタイム応答 – 低レイテンシ向けに最適化  
- 🌐 多言語 – 複数の言語とアクセントをサポート  
- 🧩 モジュラー – 各コンポーネントを置き換えまたは拡張可能  
- 🖥️ エッジフレンドリー – JetsonまたはLinuxシステムにデプロイ可能

---

## 今後の改善

- マルチモーダルインタラクションのための**ビジョンモジュール**との統合  
- TTSでの**カスタム音声クローニング**のサポート  
- より自然な対話のためのセッション間での**メモリ永続化**  
- Webまたはモバイルインターフェース

---

## 🎉 会話を楽しんでください！

おめでとうございます — あなたは自分自身の**音声対応、プライバシー第一のAIアシスタント**を構築しました。  
さあ、リラックスして、ロボットと話し、人間とAIのインタラクションの未来を探索することを楽しんでください。🤖💬

> "ロボットと良い会話をしてください :)"

---

## 参考文献

1. [LlamaIndexを使用したJetsonベースのローカルRAG](https://wiki.seeedstudio.com/ja/Local_RAG_based_on_Jetson_with_LlamaIndex/)
2. [ローカル音声チャットボット：reComputerでRivaとLlama2をデプロイ](https://wiki.seeedstudio.com/ja/Local_Voice_Chatbot/)
3. [ChatTTS](https://github.com/2noise/ChatTTS)
4. [Speech to Text（STT）とText to Speech（TTS）](https://www.librechat.ai/docs/configuration/stt_tts)
5. [Ollama](https://github.com/ollama/ollama)

---

## ✨ コントリビュータープロジェクト

- このプロジェクトはSeeed Studioの[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によってサポートされています。
- [kourosh karimi](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=Building+a+Voice-Interactive+Chatbot+with+STT%2C+TTS%2C+and+Local+LLMs%21&pane=issue&itemId=74620249&issue=Seeed-Studio%7Cwiki-documents%7C1553)の献身的な努力に特別な感謝を捧げます。あなたの作品は[展示](https://wiki.seeedstudio.com/ja/contributors/)されます。

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
