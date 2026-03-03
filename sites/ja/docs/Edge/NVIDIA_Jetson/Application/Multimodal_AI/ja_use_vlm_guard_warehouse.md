---
description: このwikiでは、reComputer Industrial J4012でLlavaを使用して倉庫を監視し、RS485経由で警告灯の色を制御して倉庫の安全を確保する方法のチュートリアルを提供します。
title: Llavaを使用して倉庫を守る
keywords:
- Multimodal 
- LLava
- RS485
- VLM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/vlm
last_update:
  date: 10/10/2025
  author: Jiahao Li
---

# reComputer Industrial J4012でLLaVaを使用して倉庫を監視する方法

## はじめに

このwikiでは、[reComputer Industrial J4012](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html)にVLM（Visual Learning Model）を展開し、USBカメラをVLMの入力として使用する方法について説明します。システムが安全な状況を検出すると、RS485制御により信号灯が緑色に点灯します。火災や武器を持った人の存在などの危険な状況では、信号灯が黄色に点灯します。光センサーがRS485経由で倉庫の照明が消されたことを検出すると、信号灯が赤色に点灯します。

## 前提条件

<div align="center">
    <img width={800}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110191.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

> **必要なコンポーネントに関する注意：**
> Jetsonに加えて、以下のRS485コンポーネントが必要です：
>
> - 1つのインターフェースを2つに分割するRS485ハブ。
> - RS485色変更ライト。
> - RS485光センサー。

## システム環境の初期化

1. JP6で初期システムをインストールした後、`CUDA`およびその他のライブラリのインストールを確認する必要があります。`sudo apt-get install nvidia-jetpack`を実行して確認およびインストールできます。

2. 以下のようなコマンドを使用して[ollama](https://ollama.com/download)をインストールします：

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

3. 以下のようにollamaで[LLaVa](https://ollama.com/library/llava-llama3)を実行します：

```bash
ollama run llava-llama3:8b
```

## プロジェクトのインストール

1. 以下のようなコマンドを使用してuvをインストールします

```bash
pip install uv
```

2. プロジェクトをクローンします

```bash
git clone https://github.com/Seeed-Projects/VLM-Guard.git
```

3. uvを使用して環境を同期します

```bash
cd VLM_Guard
uv sync
source .venv/bin/activate
```

## プロジェクトの実行

1. 以下のスクリプトを使用してプロジェクトを実行します。

```bash
./start_demo.sh
```

2. Webブラウザを開き、`localhost:5002`を入力してアプリケーションインターフェースを開きます

## 結果

ビデオで実演されているように、倉庫ライトは通常の操作中は緑色を示し、ナイフを持った人がいるなどの危険な状況では黄色を示し、光センサーが光を検出しない場合（倉庫照明の故障を示す）は赤色を示します。また、VLMモデルを介して履歴データや必要な情報のクエリとの相互作用も可能です。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/J0sS-1zQid8?list=PLpH_4mf13-A1EnNUgEMTsy2PxejFllSGM" title="Build a Local AI Watchdog for Industrial Safety with reComputer J4012 powered by NVIDIA Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
