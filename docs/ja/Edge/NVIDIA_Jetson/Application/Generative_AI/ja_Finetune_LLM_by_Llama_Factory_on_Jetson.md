---
description: Jetson上でRivaとLlama2をデプロイする
title: Llama-Factoryでファインチューニング
keywords:
- reComputer
- LLM
- Chatbot
- Finetune
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Finetune_LLM_on_Jetson
last_update:
  date: 07/03/2024
  author: Youjiang
---


# カスタムローカルLLM：JetsonでLlama-FactoryによるLLMファインチューニング


## はじめに

🚀JetsonでLlama-FactoryによるLLMファインチューニング！これで要件に合わせてカスタムプライベートローカルLLMを調整できます。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run.gif" />
</div>

Llama-Factoryは、一般的な大規模言語モデル、データセット、ファインチューニング手法をサポートする非常に便利な大規模言語モデルファインチューニングツールを提供します。このプラットフォームを使用することで、プライベート大規模言語モデルを簡単にカスタマイズできます。

このwikiでは、Nvidia JetsonにLlama-Factoryをデプロイし、Llama-Factoryを使用して中国語Q&Aをサポートする大規模言語モデルを訓練する方法を学びます。


## 前提条件

- 16GB以上のメモリを持つJetsonデバイス。
- モニター、マウス、キーボード、ネットワーク。（必須ではありません）

:::note
このwikiの実現可能性は、reComputer [Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)と[AGX Orin 64GB](https://www.seeedstudio.com/NVIDIArJetson-AGX-Orintm-64GB-Developer-Kit-p-5641.html) Developer Kitですでにテスト済みです。
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/agx_orin.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=a07376a957f072a4f755e1832fa0e544&objectID=5569&indexName=bazaar_retailer_products" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

### ハードウェア接続

1. EthernetケーブルをreComputer（Jetson搭載）に接続します。
2. マウス、キーボード、モニターをreComputerに接続します。
3. reComputerの電源を入れます。

<!-- Need a GIF here! -->

### Jetson-Examplesのインストール

:::note
Seeed Studioの[jetson-examples](https://github.com/Seeed-Projects/jetson-examples)は、NVIDIA Jetsonプラットフォーム上でビジョンAIと生成AIモデルを実行するためのシームレスなワンラインコマンドデプロイメントを提供します。
:::

パッケージをインストールするには、Jetsonでターミナルを開いて以下を実行してください：

```bash
pip3 install jetson-examples
sudo reboot
```

### JetsonでLlama-Factoryをインストールして実行する

jetson-examplesを使用して`Llama-Factory`をワンラインでデプロイ：

```bash
reComputer run llama-factory
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run_llama_factory.png" />
</div>

その後、Webブラウザを開いてアドレスにアクセスし、WebUIを開くことができます：
```bash
# http://<jetson-ip>:7860
http://127.0.0.1:7860
```

### トレーニング開始

ここでは、`alpaca_zh` データセットを使用して `Phi-1.5` モデルをファインチューニングし、中国語での会話能力を持たせます。そのため、Web UI では、トレーニングの `Model name` と `Dataset` のみを設定し、その他のトレーニングパラメータはデフォルトのままにします。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run_train.png" />
</div>

最後に、`start` ボタンをクリックしてトレーニングを開始します。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/training.png" />
</div>

:::note
トレーニングプロセスには約18時間かかります。
:::

ファインチューニングが完了すると、保存ディレクトリでファインチューニングされたモデルを見つけることができます。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/train_result.png" />
</div>

### ファインチューニングされたモデルのテスト


最後に、ファインチューニングされたモデルでLlama-Factoryを使用して、実際に中国語での会話能力を獲得したかどうかをテストできます。具体的な手順は以下の通りです。


**ステップ1.** Llama-Factory WebUIでファインチューニングされたモデルを読み込みます。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/load_model.png" />
</div>

**ステップ2.** `Input` テキストボックスに中国語のプロンプトを入力し、`Submit` ボタンをクリックして、`Chatbot` テキストボックスで大規模言語モデルの出力結果を確認します。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/test_model.png" />
</div>

テスト結果から、ファインチューニングされたモデルがすでに中国語で人間と会話する能力を持っていることがわかります。モデルにより高度な能力を持たせたい場合は、より多様なファインチューニングデータセットを使用してモデルをトレーニングしてみてください！


### デモンストレーション

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/OaGEn7pVve0" title="Finetune LLM by Llama-Factory on Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## 参考文献
- [https://github.com/hiyouga/LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory)
- [https://github.com/dusty-nv/jetson-containers](
https://github.com/dusty-nv/jetson-containers/tree/cb6c847f88df221e705397a1ee98424c2e893243/packages/llm/text-generation-inference)
- [https://github.com/Seeed-Projects/jetson-examples](https://github.com/Seeed-Projects/jetson-examples/tree/main/reComputer/scripts/llama-factory)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>