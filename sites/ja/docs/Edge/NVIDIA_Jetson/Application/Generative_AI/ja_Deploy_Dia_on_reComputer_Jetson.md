---
description: このwikiは、NVIDIA JetsonデバイスにDiaテキスト音声合成モデルをデプロイするためのステップバイステップの手順を提供し、その印象的なリアルタイム音声合成機能を実演します。依存関係のインストール、設定の調整をカバーし、reComputer J4012とJetson Orin NXを使用した実践的なデモンストレーションを含み、高品質なオーディオ生成を紹介します。
title: reComputer JetsonにDiaをデプロイする
keywords:
- reComputer
- Jetson
- LLM
- Dia
- Audio
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/deploy_deepseek.webp
slug: /ja/deploy_dia_on_jetson
last_update:
  date: 05/16/2025
  author: Youjiang
---

# reComputer JetsonにDiaをデプロイする

## はじめに

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>
    AI駆動音声合成の急速な進歩により、様々な分野で高品質なリアルタイムテキスト音声合成（TTS）アプリケーションが可能になりました。これらの中でも、Diaは最小限の計算オーバーヘッドで自然な音声を生成できる効率的で表現力豊かなニューラル音声生成モデルとして際立っています。これにより、パフォーマンスと電力効率のバランスが取れているため組み込みAIアプリケーションで広く使用されているNVIDIA Jetsonシリーズなどのエッジデバイスでのデプロイに特に適しています。
</div>

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/dia/dia.png" />
</div>

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>
    この記事では、JetsonデバイスにDia TTSモデルをデプロイするプロセスを探求し、推論中のパフォーマンスを実演します。
</div>


## 前提条件

- 8GB以上のメモリを持つJetsonデバイス。
- jetsonデバイスには、jetpack [6.1](https://wiki.seeedstudio.com/ja/reComputer_Intro/)オペレーティングシステム以降が事前にフラッシュされている必要があります。

:::note
このwikiでは、[reComputer J4012 - Edge AI Computer with NVIDIA® Jetson™ Orin™ NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D)を使用して以下のタスクを実行しますが、他のJetsonデバイスを使用することも可能です。
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/j4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

### ハードウェア接続
- Jetsonデバイスをネットワーク、マウス、キーボード、モニターに接続します。

:::note
もちろん、ローカルネットワーク経由でSSHを使用してJetsonデバイスにリモートアクセスすることも可能です。
:::

### 依存関係のインストール

1. [こちら](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ER_DifB_INZLnzTPyz6rqP8BESl1LiGtttOSojNM4G3jHA?e=AmDZv0)からお使いのJetsonデバイスに適した依存関係をダウンロードして解凍してください。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/dia/dependencies.png" />
</div>

2. Jetsonデバイス上で、ターミナルで以下のコマンドを実行してインストールします：

```bash
pip install torch-2.7.0-cp310-cp310-linux_aarch64.whl
pip install torchaudio-2.7.0-cp310-cp310-linux_aarch64.whl
pip install triton-3.3.0-cp310-cp310-linux_aarch64.whl
```

### Diaのダウンロードとインストール

1. 以下のターミナルコマンドを使用して、JetsonデバイスでDiaのソースコードをクローンします：

```bash
git clone https://github.com/nari-labs/dia.git
```

2. インストールファイルを編集します。

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>
    torch、torchaudio、およびtriton関連の設定をコメントアウトします。Vimを使用してpyproject.tomlを開き、19〜22行目を無効にします。
</div>

```bash
cd dia
vim pyproject.toml
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/dia/comment_out.png" />
</div>

:::note
終了前に変更を保存することを忘れないでください。
:::

3. dia の実行環境をインストールします。

```bash
pip install -e .
pip install numpy==1.26.4
```

4. Diaを起動する

```bash
export GRADIO_SERVER_NAME=0.0.0.0
python app.py
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/dia/launch.png" />
</div>

:::info
Gradio WebUIへのリモートアクセスを容易にするため、GRADIO_SERVER_NAME環境変数を再設定しました。
:::


## デモンストレーション

デモンストレーション動画では、DeepSeekを使用してSeeed Studioを紹介する対話を生成し、その後テキストを直接入力してDIAで音声を生成しました。私のプロンプトは特別なテクニックを使用していませんでしたが、生成された音声の品質は依然として非常に印象的でした。

```txt
[S1] Hey, have you heard of Seeed Studio?
[S2] Of course! It's a company focused on open-source hardware right?
[S1] Exactly! They offer a wide range of development boards, sensor modules, and edge computing devices, perfect for makers, engineers, and developers to quickly bring their ideas to life.
[S2] Yeah, and their Grove ecosystem is really famous—its modular design makes hardware connections super easy, no messy soldering or wiring needed.
[S1] True! They also run Seeed Fusion, providing small-batch PCB manufacturing and assembly services, which is great for startups and hardware entrepreneurs.
[S2] Plus, their community and documentation are well-developed, and many of their projects are open-source, making them beginner-friendly!
[S1] In short, if you're into DIY smart hardware or IoT projects, Seeed Studio is an awesome choice!
[S2] Couldn’t agree more!
```

<div class="video-container">
    <iframe width="900" height="506" src="https://www.youtube.com/embed/g9jQzwnsHr0" title="Deploy Dia on reComputer Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考資料
- https://github.com/nari-labs/dia
- https://www.deepseek.com/
- https://docs.nvidia.com/deeplearning/frameworks/index.html#installing-frameworks-for-jetson


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>