---
description: LLM の出力を Langchain を使用して Jetson 上でフォーマットする方法
title: Langchain を使用した出力フォーマット
keywords:
- reComputer
- LLM
- Langchain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに
現代の家庭では、スマートホームへの移行がますます一般的になっています。スマートデバイス、オートメーション、人工知能技術を接続することで、家庭をよりスマートで便利な生活空間に変えることができます。この目的を達成するために、LLM を HomeAssistant に統合し、よりインテリジェントなホームアシスタントを作成する計画を立てています。この目標を達成するための第一歩は、スマートホームデバイスを管理できる制御信号を LLM が出力できるようにすることです。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Format_LLM_Opt/ai_assistant.png" />
</div>

この Wiki では、Langchain を使用して大規模言語モデルの出力をフォーマットし、エッジコンピューティングデバイスにデプロイする方法を学びます。具体的には、大規模言語モデルの強力な理解能力を活用してローカルチャットボットを構築し、その後 Langchain ツールを使用して大規模モデルの出力形式を固定します。

## LLM とは何ですか？
大規模言語モデル（LLM）は、深層学習に基づいた人工知能モデルの一種であり、GPT のような自然言語処理タスクに優れています。これらはテキストの理解と生成が可能であり、テキスト生成、翻訳、質問応答システムなど、さまざまなアプリケーションで広く使用されています。

## なぜ LLM の出力をフォーマットする必要があるのですか？
大規模言語モデル（LLM）の出力をフォーマットすることは、より理解しやすく、特定のアプリケーションに合わせるために重要です。LLM が生成するテキストには、冗長な情報、不必要な詳細、または一貫性のない形式が含まれることがあります。出力をフォーマットすることで、テキストが特定の基準を満たし、不要な部分を削除し、アプリケーションの要件に合致するようにすることができます。このプロセスは、LLM の出力をさまざまなシステムやアプリケーションに効果的に統合し、生成されたコンテンツが関連性があり有用であることを保証するために重要です。

## LLM の出力をどのようにフォーマットするのですか？
ここでは、非常に使いやすいツールである Langchain を利用できます。Langchain は、言語モデルを使用したエンドツーエンドのアプリケーションを構築する際に開発者を支援するために設計された強力なフレームワークです。これにより、大規模言語モデルやチャットモデルをサポートするアプリケーションを作成するプロセスが簡素化されるツール、コンポーネント、インターフェースが提供されます。

## エッジデバイスにデプロイする方法

**ステップ 1.** Jetpack 5.0+ オペレーティングシステムを搭載した Jetson デバイス（[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products)）を準備します。

**ステップ 2.** ターミナルを開き、対応する依存ソフトウェアをインストールします。

```bash
pip3 install --no-cache-dir --verbose langchain[llm] openai
pip3 install --no-cache-dir --verbose gradio==3.38.0
```

**ステップ 3.** 新しい Python スクリプトを作成し、`format_opt.py` という名前を付け、以下のコードを挿入します。

<details>

<summary> format_opt.py</summary>

```python
import copy

import gradio as gr
from langchain.llms import LlamaCpp
from langchain.output_parsers import StructuredOutputParser, ResponseSchema
from langchain.prompts import PromptTemplate
from langchain.llms import OpenAI
import os
os.environ["OPENAI_API_KEY"] = "your openai api key"


class ChatBot:
    def __init__(self, llama_model_path=None,history_length=3):
        self.chat_history = []
        self.history_threshold = history_length
        self.llm = None
        if llama_model_path is not None:
            self.llm = LlamaCpp(
                model_path=llama_model_path,
                temperature=0.75,
                max_tokens=2000,
                top_p=1
            )
        else:
            self.llm = OpenAI(model_name="text-davinci-003")

        response_schemas = [
            ResponseSchema(name="user_input", description="これはユーザーの入力です"),
            ResponseSchema(name="suggestion", type="string", description="あなたの提案"),
            ResponseSchema(name="control", description="これはあなたの応答です"),
            ResponseSchema(name="temperature", type="int", description="エアコンの摂氏温度を示すために使用されます。")
        ]
        self.output_parser = StructuredOutputParser.from_response_schemas(response_schemas)
        self.format_instructions = self.output_parser.get_format_instructions()

        self.template = """
            あなたは現在スマートスピーカーであり、ユーザーの入力に基づいてエアコンをオンにするかどうかを判断する必要があります。
            提案セクションでは、通常の会話で返信してください。
            制御セクションでは、エアコンをオンにする必要がある場合は <1> と返信し、オフにする必要がある場合は <0> と返信してください。
            
            {format_instructions}
            
            コメントを生成しないでください。
            
            % ユーザー入力:
            {user_input}

            あなたの応答:
        """
        self.prompt = PromptTemplate(
            input_variables=["user_input"],
            partial_variables={"format_instructions": self.format_instructions},
            template=self.template
        )

    def format_chat_prompt(self, message):
        prompt = ""
        for turn in self.chat_history:
            user_message, bot_message = turn
            prompt = f"{prompt}\nユーザー: {user_message}\nアシスタント: {bot_message}"
        prompt = f"{prompt}\nユーザー: {message}\nアシスタント:"
        return prompt

    def respond(self, message):
        prompt = self.prompt.format(user_input=message)
        formatted_prompt = self.format_chat_prompt(prompt)
        bot_message = self.llm(formatted_prompt)
        # self.output_parser.parse(bot_message)

        if len(self.chat_history) >= self.history_threshold:
            del self.chat_history[0]
        self.chat_history.append((message, bot_message))
        return "", self.chat_history

    def run_webui(self):
        with gr.Blocks() as demo:
            gr.Markdown("# これは LLM の出力をフォーマットするデモです")
            chatbot = gr.Chatbot(height=500)
            msg = gr.Textbox(label="プロンプト")
            btn = gr.Button("送信")
            clear = gr.ClearButton(components=[msg, chatbot], value="コンソールをクリア")

            btn.click(self.respond, inputs=[msg], outputs=[msg, chatbot])
            msg.submit(self.respond, inputs=[msg], outputs=[msg, chatbot])

        gr.close_all()
        demo.launch()


if __name__ == '__main__':
    chatbot_ins = ChatBot("/home/nvidia/Mirror/llama-2-7b-chat.Q4_0.gguf")
    chatbot_ins.run_webui()
```


</details>

**ステップ 4.** ターミナルで `python3 format_opt.py` を入力してスクリプトを開始し、その後ブラウザで `http://127.0.0.1:7861/` にアクセスして WebUI を開き、効果をテストします。


<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Format_LLM_Opt/format_llm_opt.gif" />
</div>


## 次のステップの計画
- Nvidia Riva と統合し、テキスト入力を音声インタラクションに置き換える。
- Home Assistant に接続し、LLM の出力を使用してスマートホームデバイスを制御する。


<!-- コード終了 -->

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
