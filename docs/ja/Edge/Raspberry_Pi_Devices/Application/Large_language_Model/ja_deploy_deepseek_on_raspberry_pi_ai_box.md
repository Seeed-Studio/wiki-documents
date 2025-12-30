---
description: このwikiでは、Raspberry Pi AI Boxにollamaを使用してdeepseek LLMをデプロイする方法を説明します。
title: Raspberry Pi AI Box & Industrial boxにDeepSeekをデプロイ
keywords:
  - Edge
  - RasberryPi 5
  - Deepseek
  - Ollama
image: https://files.seeedstudio.com/wiki/AI_box_deepseek/install_deepseek.webp
slug: /ja/deploy_deepseek_on_raspberry_pi_ai_box
last_update:
  date: 03/11/2025
  author: Jiahao

no_comments: false # for Disqus
---

# Raspberry Pi AI Box & Industrial boxにDeepSeekをデプロイ

## はじめに

このwikiでは、[Ollama](https://ollama.com/)デプロイメントフレームワークを使用してRaspberry Pi AI Boxに[DeepSeek](https://github.com/deepseek-ai/DeepSeek-LLM)モデルをデプロイする方法を説明します。OllamaはRaspberry PiのようなコンパクトなハードウェアでのAIモデルのインストールと実行プロセスを簡素化し、依存関係管理とシステム設定を処理します。このガイドでは、環境のセットアップ、必要なソフトウェアのインストール、DeepSeekモデルの起動について、明確でステップバイステップの手順を見つけることができます。このリソースは、低消費電力デバイスでAIの力を活用したい開発者やAI愛好家を対象としています。


## ハードウェアの準備

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## ソフトウェアの準備

### システムの更新：

```
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### Ollamaのインストール

`Ctrl+Alt+T`でターミナルを開き、以下のようなコマンドを入力してollamaをインストールします：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/AI_box_deepseek/install_ollama.png" alt="pir" width={1000} height="auto"/></p>

```
curl -fsSL https://ollama.com/install.sh | sh
```

### deepseekモデルのインストールと実行

次に、以下のようなコマンドを入力してdeepseek 7bモデルをインストールして実行します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/AI_box_deepseek/install_deepseek.png" alt="pir" width={1000} height="auto"/></p>

```
ollama run deepseek-r1
```

## 結果

このデモンストレーションでは、DeepSeek 1.5bモデルを使用しました。ニーズとハードウェアの容量に基づいて、使用するモデルを選択できます。

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/qo2iv5RLgbA" title="How to deploy deepseek on raspberry pi AI box?  #deepseek #raspberrypi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>