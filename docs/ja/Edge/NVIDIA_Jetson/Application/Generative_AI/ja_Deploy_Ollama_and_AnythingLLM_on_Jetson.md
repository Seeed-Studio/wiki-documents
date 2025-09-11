---
description: このウィキでは、Jetson デバイス上で ollama と AnythingLLM を使用してローカル知識ベースをセットアップする方法を示します。大規模言語モデルの強力な機能を活用することで、作業効率を向上させることを目指します。
title: ローカル AI アシスタント
keywords:
- reComputer
- LLM
- チャットボット
- ollama
- AnythingLLM
- llama
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/local_ai_ssistant
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# ローカル AI アシスタント : Jetson 上で Ollama と AnythingLLM をデプロイする

## はじめに

ローカル AI アシスタントは、ローカルのハードウェアとソフトウェア上で動作する人工知能アプリケーションであり、インテリジェントな対話とデータ処理機能を提供します。クラウドサービスに依存せずに動作するため、ユーザーのプライバシーを保護しながら、迅速な応答時間と高いカスタマイズ性を実現します。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/ai-assistant.png" />
</div>

このウィキでは、[ollama](https://ollama.com/) と [AnythingLLM](https://anythingllm.com/) を使用して、Jetson デバイス上でローカル知識ベースをセットアップする方法を示します。大規模言語モデルの強力な機能を活用することで、作業効率を向上させることを目指します。

## 前提条件

- メモリが16GB以上の Jetson デバイス。
- ハードウェアデバイスには、jetpack [5.1.1](https://wiki.seeedstudio.com/ja/reComputer_Intro/) オペレーティングシステムが事前にフラッシュされている必要があります。

:::note
このウィキでは、[NVIDIA® Jetson AGX Orin™ 64GB Developer Kit](https://www.seeedstudio.com/NVIDIArJetson-AGX-Orintm-64GB-Developer-Kit-p-5641.html) を使用して以下のタスクを実行しますが、他の Jetson デバイスを使用することも可能です。
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/AGX-Orin.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=a07376a957f072a4f755e1832fa0e544&objectID=5569&indexName=bazaar_retailer_products" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

## 始めましょう

### ハードウェア接続
- Jetson デバイスをネットワーク、マウス、キーボード、モニターに接続します。

:::note
もちろん、ローカルネットワーク経由で SSH を使用して Jetson デバイスにリモートアクセスすることもできます。
:::

### Ollama のインストールと実行

ここでは、[jetson-examples](https://github.com/Seeed-Projects/jetson-examples) を使用して、Jetson デバイス上で Ollama を迅速にデプロイすることをお勧めします。

**ステップ1.** Jetson デバイス上でターミナルを開き、以下のコマンドを実行して `jetson-examples` をインストールします：

```bash
sudo apt install python3-pip
pip3 install jetson-examples
```

**ステップ2.** 単一のコマンドで Jetson デバイス上に Ollama をデプロイするには、以下を実行します：

```bash
reComputer run ollama
```

**ステップ3.** Ollama を使用して Llama3 大規模モデルをダウンロードします：

```bash
ollama run llama3
```

:::info
このターミナルをアクティブな状態に保ってください。
:::

### AnythingLLM のインストールと実行

[ローカル Docker セットアップ](https://docs.anythingllm.com/installation/self-hosted/local-docker#recommend-way-to-run-dockerized-anythingllm) を使用して、AnythingLLM を簡単にインストールできます。

**ステップ1.** Jetson 上で AnythingLLM を実行します。

ターミナルを再度開き、以下のコマンドを入力します：

```bash
docker pull mintplexlabs/anythingllm

export STORAGE_LOCATION=$HOME/anythingllm 
mkdir -p $STORAGE_LOCATION 
touch "$STORAGE_LOCATION/.env" 
docker run -d -p 3001:3001 --cap-add SYS_ADMIN \
    -v ${STORAGE_LOCATION}:/app/server/storage \
    -v ${STORAGE_LOCATION}/.env:/app/server/.env \
    -e STORAGE_DIR="/app/server/storage" \
    mintplexlabs/anythingllm
```

**ステップ2.** 独自のローカル知識ベースを構成します。

ブラウザで `http://<jetson-ip>:3001` にアクセスして、完全なアプリケーションにアクセスします。

:::note
Jetson ターミナルで `ifconfig` コマンドを入力すると、IP アドレスを確認できます。
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/anythingllm-init.png" />
</div>

画面の指示に従って AnythingLLM の構成を完了してください。

:::danger
`LLM Perference` の構成ページでは、Ollama の Llama 3.1 大規模言語モデルを選択する必要があります。
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/select-ollama.png" />
</div>

最後に、必要なドキュメントをインポートします。その後、大規模言語モデルはインポートされたドキュメントに基づいて質問に回答します。

`import` --> `click to upload or drag and drop` --> `select document` --> `move to Workspace` --> `save and embed`

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/inport-doc.png" />
</div>

これで、独自のローカル知識ベースを正常にセットアップできました。

:::note
より詳細な構成チュートリアルについては、[こちらのリンク](https://docs.anythingllm.com/) を参照してください。
:::

### 実行してみましょう

ダイアログボックスに質問を入力すると、大規模言語モデルが知識ベースに基づいて回答を提供します。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/test.png" />
</div>

<details>

<summary> story1.txt </summary>

```txt
昔々、緩やかな丘に囲まれた小さな村に、エリザという名の若い少女が住んでいました。彼女は家の裏にある森を探検するのが大好きでした。その森は魔法のような場所で、高い木々が秘密をささやき、小川が柔らかなメロディーを奏で、花々が月明かりの下で輝いているように見えました。

ある晴れた朝、エリザは冒険に出かけ、胸が高鳴る思いで森の奥深くへと進みました。すると、彼女がこれまで見たことのない隠れた小道を発見しました。その小道は星のように輝く石で縁取られていました。興味をそそられたエリザは、その道を進むことにしました。

しばらく歩くと、その道は壮大な空き地に続いていました。その中心には立派なオークの木が立っており、その根元には小さな装飾された扉がありました。扉には動物やツタの精巧な彫刻が施されていました。エリザは興奮と緊張で胸を高鳴らせながら、その扉をそっと押し開けました。

中に入ると、彼女は居心地の良い魔法の部屋にたどり着きました。本や奇妙な工芸品が並ぶ棚があり、石の暖炉では暖かい火がパチパチと音を立てていました。部屋の中央には、大きな葉を持つ植物の枝に賢そうなフクロウが止まっていました。

そのフクロウは、親しみのある知的な目でエリザを見つめました。「ようこそ、若き旅人よ」とフクロウは柔らかく鳴きました。「私はオリバー。この魔法の領域の守護者だ。ここにたどり着く者は少ない。君は特別な心を持っているに違いない。」

エリザは目を見開き、驚きました。「ここは何ですか？」と彼女は尋ねました。

「ここは『驚異の領域』だ」とオリバーは説明しました。「ここは夢が現実となり、純粋な意図を持つ者が心からの願いを見つける場所だ。」

エリザは部屋を見回し、好奇心をそそられました。「ここで何ができるのですか？」

オリバーは微笑みました。「君は願いを叶えることができる。ただし、ここで叶えられる願いには大きな責任が伴う。それは君の人生だけでなく、周りの人々の人生も変える力を持っている。」

エリザはじっくりと考えました。彼女は村が干ばつに苦しんでいることを思い出し、友人や家族が困っていることを思い出しました。決意を込めた表情で、彼女は願いを口にしました。

「私の村に雨を降らせ、大地に命を取り戻してください。」

オリバーは満足そうにうなずきました。「利他的な願いだ。それは叶えられるだろう。」

翌朝、エリザが村に戻ると、空に暗い雲が集まり、優しい雨が降り始めました。村人たちは驚きながら空を見上げ、乾いた大地が命の水を吸い込むのを見守りました。畑は緑に変わり、村は再び繁栄しました。

エリザの心は喜びで満たされました。彼女は自分の願いがもたらした影響を実感しました。『驚異の領域』は彼女に変化をもたらすチャンスを与え、彼女は真の魔法は他者を思いやる心から生まれることを学びました。

それ以来、エリザは森を探検し続け、人生の真の驚異は優しさと利他主義にあることを知りました。

こうして村は繁栄し、エリザの冒険は伝説となり、魔法は確かに優しい心から始まることを人々に思い出させました。
```

</details>

## 効果のデモンストレーション

ここでは、設定済みのローカルパーソナルアシスタントを使用して、必要な情報を照会します。

<div align="center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/JjPfXNqhO1g" title="ローカルAIアシスタント：Jetson上でOllamaとAnythingLLMをデプロイ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考文献
- https://ollama.com/library/llama3.1
- https://anythingllm.com/
- https://www.youtube.com/watch?v=4UFrVvy7VlA&t=4s

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品のご利用がスムーズに進むよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>