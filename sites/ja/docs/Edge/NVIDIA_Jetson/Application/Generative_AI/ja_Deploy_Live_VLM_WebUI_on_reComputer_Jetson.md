---
description: この記事では、reComputer Jetson デバイスに Live VLM WebUI をデプロイして、リアルタイムの Vision-Language Model (VLM) インタラクションと評価を可能にする方法について説明します。テストでは、ワークフロー全体が 16GB のメモリを持つハードウェアで実行できることが示されていますが、推論速度は比較的遅いです。
title: reComputer Jetson に Live VLM WebUI をデプロイする
keywords:
- reComputer
- Jetson
- VLM
- Live VLM WebUI
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/gptoss-running-live.webp
slug: /ja/deploy_live_vlm_webui_on_jetson
last_update:
  date: 12/26/2025
  author: Youjiang
---


# reComputer Jetson に Live VLM WebUI をデプロイする

## はじめに

Live VLM WebUI は、リアルタイムの Vision Language Model インタラクションとベンチマーキングのための汎用ウェブインターフェースです。ウェブカメラを任意の VLM にストリーミングし、ライブ AI 駆動分析を取得できます - モデルのテスト、パフォーマンスのベンチマーク、複数のドメインとハードウェアプラットフォームにわたるビジョン AI 機能の探索に最適です。

この Wiki では、reComputer Super J4012 に Live VLM WebUI をデプロイする方法を説明します。

<!-- <div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/live_vlm_webui/webui.png" />
</div> -->


## 前提条件
- reComputer Super J4012
- USB カメラ

<div class="table-center">
<table style={{textAlign: 'center'}}>
    <tr>
        <th> reComputer Super J4012 </th>
        <th> USB カメラ </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110311-recomputer-super-j3010_1.jpg" style={{width:400, height:'auto'}}/>
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
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/X10-USB-wired-camera-p-6506.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

:::info
Jetson デバイスに Jetpack 6.2 オペレーティングシステムがインストールされていることを確認してください。
:::

:::info
ソフトウェアを設定する前に、USB カメラを reComputer Super J4012 の Type-A ポートに接続してください。
:::


## Live VLM WebUI のデプロイ

ステップ1. reComputer Jetson に ollama をインストールして実行します。

reComputer Jetson のターミナルウィンドウで以下のコマンドを実行します。

```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull llama3.2-vision:11b
```
:::note
モデルのダウンロードには約10分かかります。しばらくお待ちください。
:::

ステップ2. Live VLM WebUI をインストールします。

reComputer Jetson のターミナルウィンドウで以下のコマンドを実行します。

```bash
# Install dependencies
sudo apt install openssl python3-pip

# Install the package
python3 -m pip install --user live-vlm-webui

# Add to PATH (one-time setup)
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Run it
live-vlm-webui
```

ステップ3. Live VLM WebUI を設定して起動します。

アプリケーションが正常に実行されると、ブラウザで `https://localhost:8090` を入力して WebUI を開くことができます。


- VLM API Configuration で、`ollama` 推論エンジンと先ほどダウンロードした `llama3.2-vision` モデルを選択します。
- Camera and App Control で、`USB Camera` を選択します。
- Run ボタンをクリックした後、バックエンドからの推論結果を待つことができます。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/live_vlm_webui/config.png" />
</div>

## 効果のデモンストレーション

ワークフロー全体は、16GB のメモリを持つ reComputer Super J4012 デバイスで正常に実行できます。ただし、実際のテストでは、推論速度が非常に遅いことがわかりました。

<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/GrdIRkmiXUc" title="Deploy Live LLM WebUI on reComputer Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考文献
- https://ollama.com/download/linux
- https://github.com/NVIDIA-AI-IOT/live-vlm-webui


## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>