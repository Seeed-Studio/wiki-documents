---
description: このWikiでは、ollamaを使用してRaspberry Pi AI BoxにDeepSeek LLMをデプロイする方法を説明します。
title: Raspberry Pi AI BoxにDeepSeekをデプロイする
keywords:
  - Edge
  - RasberryPi 5
  - Deepseek
  - Ollama
image: https://files.seeedstudio.com/wiki/AI_box_deepseek/install_deepseek.webp
slug: /ja/deploy_deepseek_on_raspberry_pi_ai_box
last_update:
  date: 05/15/2025
  author: Jiahao

no_comments: false # for Disqus
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Raspberry Pi AI BoxにDeepSeekをデプロイする

## はじめに

このWikiでは、[DeepSeek](https://github.com/deepseek-ai/DeepSeek-LLM)モデルを[Raspberry Pi AI Box](https://ollama.com/)にデプロイする方法を説明します。Ollamaは、Raspberry Piのようなコンパクトなハードウェア上でAIモデルをインストールして実行するプロセスを簡素化し、依存関係の管理やシステム構成を処理します。このガイドでは、環境のセットアップ、必要なソフトウェアのインストール、DeepSeekモデルの起動に関する明確なステップバイステップの手順を提供します。このリソースは、低消費電力デバイスでAIの力を活用したい開発者やAI愛好家を対象としています。

## ハードウェアの準備

<div class="table-center">
	<table align="center">
	<tr>
		<th>reComputer AI R2130</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## ソフトウェアの準備

### システムを更新する:

```
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### Ollamaをインストールする

`Ctrl+Alt+T`でターミナルを開き、以下のコマンドを入力してollamaをインストールします:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/AI_box_deepseek/install_ollama.png" alt="pir" width={1000} height="auto"/></p>

```
curl -fsSL https://ollama.com/install.sh | sh
```

### DeepSeekモデルをインストールして実行する

次に、以下のコマンドを入力してDeepSeek 7bモデルをインストールして実行します:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/AI_box_deepseek/install_deepseek.png" alt="pir" width={1000} height="auto"/></p>

```
ollama run deepseek-r1
```

## 結果

このデモでは、DeepSeek 1.5bモデルを使用しました。使用するモデルは、ニーズやハードウェアの容量に応じて選択できます。

<iframe width="800" height="400" src="https://www.youtube.com/embed/qo2iv5RLgbA" title="Raspberry Pi AI BoxでDeepSeekをデプロイする方法 #deepseek #raspberrypi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>