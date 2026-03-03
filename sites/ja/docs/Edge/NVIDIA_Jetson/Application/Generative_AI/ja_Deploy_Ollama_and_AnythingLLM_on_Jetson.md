---
description: このwikiでは、ollamaとAnythingLLMを使用してJetsonデバイス上にローカル知識ベースを設定する方法を説明します。大規模言語モデルの強力な機能を活用して、作業効率の向上を目指します。
title: ローカルAIアシスタント
keywords:
- reComputer
- LLM
- Chatbot
- ollama
- AnythingLLM
- llama
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /local_ai_ssistant
last_update:
  date: 07/30/2024
  author: Youjiang
---


# ローカルAIアシスタント : JetsonでOllamaとAnytingLLMをデプロイ

## はじめに

ローカルAIアシスタントは、ローカルハードウェアとソフトウェア上で動作する人工知能アプリケーションで、インテリジェントなインタラクションとデータ処理機能を提供します。クラウドサービスに依存せずに独立して動作し、ユーザーのプライバシーを保護しながら、迅速な応答時間と高度なカスタマイゼーションレベルを提供します。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/ai-assistant.png" />
</div>

このwikiでは、[ollama](https://ollama.com/)と[AnythingLLM](https://anythingllm.com/)を使用してJetsonデバイス上にローカル知識ベースを設定する方法を説明します。大規模言語モデルの強力な機能を活用して、作業効率の向上を目指します。

## 前提条件

- 16GB以上のメモリを搭載したJetsonデバイス。
- ハードウェアデバイスには、jetpack [5.1.1](https://wiki.seeedstudio.com/ja/reComputer_Intro/)オペレーティングシステムが事前にフラッシュされている必要があります。

:::note
このwikiでは、[NVIDIA® Jetson AGX Orin™ 64GB Developer Kit](https://www.seeedstudio.com/NVIDIArJetson-AGX-Orintm-64GB-Developer-Kit-p-5641.html)を使用して以下のタスクを実行しますが、他のJetsonデバイスでも試すことができます。
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/AGX-Orin.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=a07376a957f072a4f755e1832fa0e544&objectID=5569&indexName=bazaar_retailer_products" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

## はじめに

### ハードウェア接続

- Jetsonデバイスをネットワーク、マウス、キーボード、モニターに接続します。

:::note
もちろん、ローカルネットワーク経由でSSHを使用してJetsonデバイスにリモートアクセスすることも可能です。
:::

### Ollamaのインストールと実行

ここでは、[jetson-examples](https://github.com/Seeed-Projects/jetson-examples)を使用してJetsonデバイス上にOllamaを迅速にデプロイすることを強く推奨します。

**ステップ1.** jetsonデバイス上でターミナルを開き、以下のコマンドを実行して`jetson-examples`をインストールします：

```bash
sudo apt install python3-pip
pip3 install jetson-examples
```

**ステップ2.** Jetsonデバイス上でollamaを単一のコマンドでデプロイするには、以下を実行します：

```bash
reComputer run ollama
```

**ステップ3.** Ollamaを使用してLlama3大規模モデルをダウンロードします：

```bash
ollama run llama3
```

:::info
このターミナルをアクティブに保ってください。
:::

### AnythingLLMのインストールと実行

[ローカルDockerセットアップ](https://docs.anythingllm.com/installation/self-hosted/local-docker#recommend-way-to-run-dockerized-anythingllm)を使用してAnythingLLMを便利にインストールできます。

**ステップ1.** JetsonでAnythingLLMを実行します。

ターミナルを再度開き、以下のコマンドを入力してください：

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

**ステップ2.** 独自のローカル知識ベースを設定する。

完全なアプリケーションにアクセスするには、ブラウザで `http://<jetson-ip>:3001` にアクセスしてください。

:::note
Jetsonターミナルで `ifconfig` コマンドを入力すると、IPアドレスを確認できます。
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/anythingllm-init.png" />
</div>

画面上のプロンプトに従って、AnythingLLMの設定を完了してください。

:::danger
`LLM Perference`の設定ページでは、OllamaのLlama 3.1大規模言語モデルを選択する必要があることにご注意ください。
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/select-ollama.png" />
</div>

最後に、必要なドキュメントをインポートします。大規模言語モデルは、インポートされたドキュメントに基づいて質問に回答します。

`import` --> `click to upload or drag and drop` --> `select document` --> `move to Workspace` --> `save and embed`

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/inport-doc.png" />
</div>

この時点で、独自のローカル知識ベースの設定が正常に完了しました。

:::note
より詳細な設定チュートリアルについては、[このリンク](https://docs.anythingllm.com/)を参照してください。
:::

### 実行してみましょう

対話ボックスに質問を入力すると、大規模言語モデルが知識ベースに基づいて回答を提供します。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/test.png" />
</div>

<details>

<summary> story1.txt </summary>

```txt
Once upon a time in a quaint village nestled between rolling hills, there was a young girl named Eliza who loved to explore the woods behind her home. The forest was a magical place, filled with tall trees that whispered secrets, streams that sang soft melodies, and flowers that seemed to glow under the moonlight.

One sunny morning, Eliza set out on one of her adventures, her heart brimming with excitement. As she wandered deeper into the forest, she discovered a hidden path she had never seen before. The path was lined with shimmering stones that sparkled like stars. Curious and intrigued, Eliza followed it.

After a short walk, the path led her to a magnificent clearing where a majestic oak tree stood in the center. At the base of the tree was a small, ornate door. It was covered in intricate carvings of animals and vines. Eliza, with her heart pounding with both excitement and nervousness, gently pushed the door open.

Inside, she found herself in a cozy, enchanted room. There were shelves lined with books and strange artifacts, and a warm fire crackling in a stone hearth. In the middle of the room, a wise old owl perched on a branch of a large, leafy plant.

The owl looked at Eliza with kind, knowing eyes. “Welcome, young traveler,” it hooted softly. “I am Oliver, the guardian of this magical realm. Few people find their way here. You must have a special heart.”

Eliza’s eyes widened in awe. “What is this place?” she asked.

“This is the Realm of Wonders,” Oliver explained. “It is a place where dreams come to life and where those with pure intentions can find their heart’s true desire.”

Eliza gazed around the room, her curiosity piqued. “What can I do here?”

Oliver smiled. “You can make a wish. But remember, wishes made here come with great responsibility. They have the power to change not just your life but the lives of those around you.”

Eliza thought long and hard. She remembered how her village had been struggling with drought and how her friends and family were suffering. With a determined look, she made her wish.

“I wish for rain to fall upon my village and bring life back to the land.”

Oliver nodded approvingly. “A selfless wish. It will be granted.”

The next morning, as Eliza returned to her village, dark clouds gathered in the sky, and a gentle rain began to fall. The villagers looked up in amazement as the parched earth drank in the life-giving water. The fields began to turn green, and the village flourished once more.

Eliza’s heart swelled with joy as she realized the impact of her wish. The Realm of Wonders had given her the chance to make a difference, and she learned that true magic comes from caring for others.

From that day on, Eliza continued to explore the woods, knowing that the true wonders of life were found in kindness and selflessness.

And so, the village thrived, and Eliza’s adventures became the stuff of legends, reminding everyone that magic, indeed, begins with a kind heart.
```

</details>

## 効果デモンストレーション

ここでは、設定したローカル個人アシスタントを使用して、必要な情報を照会します。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/JjPfXNqhO1g" title="Local AI Assistant : Deploy Ollama and AnytingLLM on Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考文献

- https://ollama.com/library/llama3.1
- https://anythingllm.com/
- https://www.youtube.com/watch?v=4UFrVvy7VlA&t=4s

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
