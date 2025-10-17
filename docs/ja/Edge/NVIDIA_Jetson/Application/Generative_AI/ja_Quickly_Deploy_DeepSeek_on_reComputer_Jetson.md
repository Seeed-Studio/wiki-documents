---
description: このwikiでは、Ollamaを使用してreComputer Jetsonデバイス上にDeepSeekモデルをデプロイする方法をガイドし、最小限の消費電力で効率的なAI推論を実現する方法を紹介します。
title: reComputer Jetson上でDeepSeekを迅速にデプロイする
keywords:
- reComputer
- LLM
- ollama
- deepseek
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/deepseek.webp
slug: /ja/deploy_deepseek_on_jetson
last_update:
  date: 02/08/2025
  author: Youjiang
---


# reComputer Jetson上でDeepSeekを迅速にデプロイする

## はじめに

DeepSeekは、効率性、精度、リアルタイム処理に最適化された最先端のAIモデルスイートです。エッジコンピューティング向けの高度な最適化により、DeepSeekはJetsonデバイス上で直接高速で低遅延のAI推論を可能にし、クラウドコンピューティングへの依存を減らしながらパフォーマンスを最大化します。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/deepseek.png" />
</div>

このwikiでは、エッジでの効率的なAI推論のためにreComputer Jetsonデバイス上に[DeepSeek](https://www.deepseek.com/)モデルをデプロイするためのステップバイステップガイドを提供します。

## 前提条件

- 8GB以上のメモリを搭載したJetsonデバイス。
- Jetsonデバイスには、jetpack [5.1.1](https://wiki.seeedstudio.com/ja/reComputer_Intro/)オペレーティングシステム以降が事前にフラッシュされている必要があります。

:::note
このwikiでは、[reComputer J4012 - NVIDIA® Jetson™ Orin™ NX 16GB搭載エッジAIコンピュータ](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D)を使用して以下のタスクを実行しますが、他のJetsonデバイスでも試すことができます。
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/j4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## はじめに

### ハードウェア接続
- Jetsonデバイスをネットワーク、マウス、キーボード、モニターに接続します。

:::note
もちろん、ローカルネットワーク経由でSSHを使用してJetsonデバイスにリモートアクセスすることも可能です。
:::

### Ollama推論エンジンのインストール

Ollamaは、最小限のセットアップで大規模言語モデル（LLM）をローカルで実行するために設計された軽量で効率的な推論エンジンです。使いやすいインターフェースとJetsonデバイスを含む様々なハードウェア構成に最適化されたランタイムを提供することで、AIモデルのデプロイメントを簡素化します。

Ollamaをインストールするには、Jetsonデバイス上でターミナルウィンドウを開き、以下のコマンドを実行します：

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/install_ollama.png" />
</div>

このスクリプトは自動的にOllamaをダウンロードしてシステムにセットアップし、AIアプリケーションのシームレスなローカル推論を可能にします。

### DeepSeekの読み込みと実行

Ollamaは現在、DeepSeekモデルの様々なバージョンをサポートしており、ニーズに基づいて異なるモデルサイズをデプロイできます。デモンストレーションの目的で、デフォルトのDeepSeek-R1 7Bモデルを使用します。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/ollama_deepseek.png" />
</div>

```bash
ollama run deepseek-r1
```
このコマンドは、Ollamaを使用してローカル推論用のDeepSeekモデルをダウンロードして準備します。
モデルの読み込みが完了したら、ターミナルウィンドウでクエリを入力できます。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/load_model.png" />
</div>

## 効果のデモンストレーション

デモンストレーション動画では、Jetsonデバイスがわずか20Wで動作しながら、印象的な推論速度を実現しています。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/7EYq9Y8Jp8o" title="deploy deepseek on jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考文献
- https://www.deepseek.com/
- https://ollama.com/library/deepseek-r1
- https://wiki.seeedstudio.com/local_ai_ssistant/
- https://www.seeedstudio.com/tag/nvidia.html


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、様々なサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>