---
description: reComputerでRivaとLlama2をデプロイする
title: Llama-Factoryでのファインチューニング
keywords:
- reComputer
- LLM
- チャットボット
- ファインチューニング
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Finetune_LLM_on_Jetson
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# カスタムローカルLLM: JetsonでLlama-Factoryを使用してLLMをファインチューニング


## はじめに

🚀JetsonでLlama-Factoryを使用してLLMをファインチューニング！これで、あなたのニーズに合わせたカスタムプライベートローカルLLMを作成できます。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run.gif" />
</div>

Llama-Factoryは、一般的な大規模言語モデル、データセット、ファインチューニング方法をサポートする非常に便利なファインチューニングツールを提供します。このプラットフォームを使用すると、簡単にプライベートな大規模言語モデルをカスタマイズできます。

このWikiでは、Nvidia JetsonにLlama-Factoryをデプロイし、中国語のQ&Aをサポートする大規模言語モデルをトレーニングする方法を学びます。


## 前提条件

- 16GB以上のメモリを持つJetsonデバイス。
- モニター、マウス、キーボード、ネットワーク。（必須ではありません）

:::note
このWikiの実現可能性は、reComputer [Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)および[AGX Orin 64GB](https://www.seeedstudio.com/NVIDIArJetson-AGX-Orintm-64GB-Developer-Kit-p-5641.html)開発キットで既にテスト済みです。
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/agx_orin.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=a07376a957f072a4f755e1832fa0e544&objectID=5569&indexName=bazaar_retailer_products" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 始める前に

### ハードウェア接続

1. EthernetケーブルをreComputer（Jetson搭載）に接続します。
2. マウス、キーボード、モニターをreComputerに接続します。
3. reComputerの電源を入れます。

<!-- GIFが必要です！ -->

### Jetson-Examplesのインストール

:::note
Seeed Studioの[jetson-examples](https://github.com/Seeed-Projects/jetson-examples)は、NVIDIA JetsonプラットフォームでビジョンAIおよび生成AIモデルをシームレスにワンラインコマンドでデプロイする方法を提供します。
:::

パッケージをインストールするには、Jetsonのターミナルを開いて以下を実行してください：

```bash
pip3 install jetson-examples
sudo reboot
```

### JetsonでLlama-Factoryをインストールして実行

jetson-examplesを使用して`Llama-Factory`をワンラインでデプロイ：

```bash
reComputer run llama-factory
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run_llama_factory.png" />
</div>

その後、Webブラウザを開き、以下のアドレスにアクセスしてWebUIを開きます：
```bash
# http://<jetson-ip>:7860
http://127.0.0.1:7860
```

### トレーニングを開始

ここでは、`alpaca_zh`データセットを使用して`Phi-1.5`モデルをファインチューニングし、中国語の会話能力を持たせます。そのため、Web UIではトレーニングの`Model name`と`Dataset`のみを設定し、その他のトレーニングパラメータはデフォルトのままにします。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run_train.png" />
</div>

最後に、`start`ボタンをクリックしてトレーニングを開始します。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/training.png" />
</div>

:::note
トレーニングプロセスは約18時間かかります。
:::

ファインチューニングが完了すると、保存ディレクトリにファインチューニングされたモデルが見つかります。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/train_result.png" />
</div>

### ファインチューニングされたモデルのテスト


最後に、Llama-Factoryを使用してファインチューニングされたモデルをテストし、中国語の会話能力を実際に取得しているか確認します。具体的な手順は以下の通りです。


**ステップ1.** Llama-Factory WebUIでファインチューニングされたモデルをロードします。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/load_model.png" />
</div>

**ステップ2.** `Input`テキストボックスに中国語のプロンプトを入力し、`Submit`ボタンをクリックして、`Chatbot`テキストボックスに表示される大規模言語モデルの出力結果を確認します。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/test_model.png" />
</div>

テスト結果から、ファインチューニングされたモデルが既に中国語で人間と会話する能力を持っていることがわかります。モデルにさらに高度な能力を持たせたい場合は、より多様なファインチューニングデータを使用してモデルをトレーニングしてみてください！


### デモンストレーション

<div align="center">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/OaGEn7pVve0" title="JetsonでLlama-Factoryを使用してLLMをファインチューニング" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考文献
- [https://github.com/hiyouga/LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory)
- [https://github.com/dusty-nv/jetson-containers](https://github.com/dusty-nv/jetson-containers/tree/cb6c847f88df221e705397a1ee98424c2e893243/packages/llm/text-generation-inference)
- [https://github.com/Seeed-Projects/jetson-examples](https://github.com/Seeed-Projects/jetson-examples/tree/main/reComputer/scripts/llama-factory)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なるニーズやご希望に応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>