---
description: このwikiでは、Jetsonプラットフォームをベースとした音声制御モーターソリューションを紹介し、必要なハードウェア、接続方法、ソフトウェア展開手順について詳しく説明します。
title: JetsonでのVoice LLMによるモーター制御
keywords:
- reComputer
- Jetson
- LLM
- Motor
- Qwen
- Function Calling
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/hardware_connect.webp
slug: /ja/control_motor_by_voice_llm_on_jetson
last_update:
  date: 08/19/2025
  author: Youjiang
---


# JetsonでのVoice LLMによるモーター制御

## はじめに

このwikiでは、Jetsonプラットフォーム（reComputer Robotics J4012）をベースとしたエンドツーエンドの音声制御モーターシステムを構築し、音声認識、エッジ大規模言語モデル（LLM）意図理解、ハードウェア制御を統合して自然な人間-機械間相互作用を実現します。ユーザーは簡単な音声コマンド（例：「時計回りに90度回転」）でMyActuator X Seriesモーターを制御できます。

## 前提条件
- reComputer Robotics J4012
- reSpeaker XVF3800
- MyActuator X Seriesモーター

<table align="center">
    <tr>
        <th>reComputer Robotics J4012</th>
        <th>reSpeaker XVF3800</th>
        <th>MyActuator X Seriesモーター</th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg" style={{width:250, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.jpg" style={{width:250, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-motor.png" style={{width:250, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>

## ハードウェア接続

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/hardware_connect.jfif" />
</div>

## はじめに

システム全体のワークフローは3つのステップで構成されています：

1. ASR：マイクがユーザーからの音声コマンドを取得し、Whisperを使用してテキストに変換します。
2. 関数呼び出し：大規模言語モデルがユーザーの入力指示に基づいて要件を満たすモーター制御パラメータを生成します。
3. モーター制御：適切な制御プログラムが呼び出され、モーターを指定された位置まで回転させます。

次に、各ステップの実装について詳しく説明します。

### Whisperサーバーのインストール

まず、ASR機能を有効にするためにWhisperサービスをインストールする必要があります。Jetsonデバイスでターミナルウィンドウを開き、以下のコマンドを実行してください。

```bash
git clone https://github.com/jjjadand/whisper-stable4curl
cd whisper-stable4curl
export PATH=/usr/local/cuda-12.6/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda-12.6/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
cmake --build build -j --config Release
```

すべてが正常に動作すれば、ターミナルウィンドウに以下のログが表示されます。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/whisper.png" />
</div>

次に、Whisper推論サービスを起動します：

```bash
./build/bin/whisper-stream -m ./models/ggml-base.en-q5_1.bin -t 8 --step 0 --length 7000 -vth 0.7 --keep 1200
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/launch_whisper.png" />
</div>

### Ollama のインストール

Ollama は非常にユーザーフレンドリーなエッジコンピューティング LLM 推論フレームワークで、単一のコマンドで Jetson にデプロイできます。Jetson デバイスで新しいターミナルウィンドウを開き、以下を実行してください：

```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull qwen2.5
```

:::info
ここでは、Qwen 2.5大規模言語モデルを使用してユーザーの意図を理解します。
:::

### モーター制御スクリプトのインストール

以下のコマンドを実行してモーター制御スクリプトを開始します：

```bash
git clone https://github.com/yuyoujiang/voice_control.git
cd voice_control
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
python app.py
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/motor_control.png" />
</div>


## 効果デモンストレーション


<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/ORv8x0aSXfQ" title="🤖 Voice-Controlled Robot: Full Pipeline from Speech Recognition to Motor Control!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


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