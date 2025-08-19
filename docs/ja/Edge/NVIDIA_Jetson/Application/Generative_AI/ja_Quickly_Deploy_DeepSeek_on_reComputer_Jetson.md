---
description: このウィキでは、Ollama を使用して reComputer Jetson デバイス上で DeepSeek モデルをデプロイする方法を案内し、最小限の電力消費で効率的な AI 推論を実現する方法を紹介します。
title: reComputer Jetson で DeepSeek を迅速にデプロイ
keywords:
- reComputer
- LLM
- ollama
- deepseek
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/deepseek.webp
slug: /ja/deploy_deepseek_on_jetson
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer Jetson で DeepSeek を迅速にデプロイ

## はじめに

DeepSeek は、効率性、精度、リアルタイム処理に最適化された最先端の AI モデルスイートです。エッジコンピューティング向けに高度に最適化されており、Jetson デバイス上で高速で低遅延の AI 推論を可能にし、クラウドコンピューティングへの依存を減らしながらパフォーマンスを最大化します。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/deepseek.png" />
</div>

このウィキでは、[DeepSeek](https://www.deepseek.com/) モデルを reComputer Jetson デバイス上でデプロイし、エッジで効率的な AI 推論を実現するためのステップバイステップガイドを提供します。

## 前提条件

- 8GB 以上のメモリを搭載した Jetson デバイス。
- Jetson デバイスには、Jetpack [5.1.1](https://wiki.seeedstudio.com/ja/reComputer_Intro/) オペレーティングシステムまたはそれ以降のバージョンが事前にフラッシュされている必要があります。

:::note
このウィキでは、[reComputer J4012 - Edge AI Computer with NVIDIA® Jetson™ Orin™ NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D) を使用してタスクを実行しますが、他の Jetson デバイスを使用することも可能です。
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/j4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

## はじめに

### ハードウェア接続
- Jetson デバイスをネットワーク、マウス、キーボード、モニターに接続します。

:::note
もちろん、ローカルネットワーク経由で SSH を使用して Jetson デバイスにリモートアクセスすることも可能です。
:::

### Ollama 推論エンジンのインストール

Ollama は、大規模言語モデル (LLM) をローカルで最小限のセットアップで実行するために設計された軽量で効率的な推論エンジンです。簡単に使用できるインターフェースと、Jetson デバイスを含むさまざまなハードウェア構成向けに最適化されたランタイムを提供することで、AI モデルのデプロイを簡素化します。

Ollama をインストールするには、Jetson デバイスのターミナルウィンドウを開き、以下のコマンドを実行します：

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/install_ollama.png" />
</div>

このスクリプトは、Ollama を自動的にダウンロードしてシステムにセットアップし、AI アプリケーションのシームレスなローカル推論を可能にします。

### DeepSeek のロードと実行

Ollama は現在、さまざまなバージョンの DeepSeek モデルをサポートしており、ニーズに応じて異なるモデルサイズをデプロイできます。デモンストレーションの目的で、デフォルトの DeepSeek-R1 7B モデルを使用します。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/ollama_deepseek.png" />
</div>

```bash
ollama run deepseek-r1
```
このコマンドは、DeepSeek モデルをダウンロードして、Ollama を使用したローカル推論の準備を行います。
モデルの読み込みが完了すると、ターミナルウィンドウでクエリを入力できます。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/load_model.png" />
</div>

## 効果のデモンストレーション

デモンストレーションビデオでは、Jetson デバイスがわずか 20W で動作しながら、驚異的な推論速度を達成している様子が示されています。

<div align="center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/7EYq9Y8Jp8o" title="deploy deepseek on jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考資料
- https://www.deepseek.com/
- https://ollama.com/library/deepseek-r1
- https://wiki.seeedstudio.com/ja/local_ai_ssistant/
- https://www.seeedstudio.com/tag/nvidia.html

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>