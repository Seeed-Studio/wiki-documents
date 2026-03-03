---
description: JetsonでLangchainを使用してLLMの出力をフォーマットする方法
title: Langchainで出力をフォーマット
keywords:
- reComputer
- LLM
- Langchain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson
last_update:
  date: 4/1/2024
  author: Youjiang
---


## はじめに

現代の家庭では、スマートホームへの傾向がますます一般的になっています。スマートデバイス、自動化、人工知能技術を接続することで、あなたの家をより賢く便利な生活空間に変えることができます。この目的のために、私たちはLLMをHomeAssistantに統合して、より知的なホームアシスタントを作成することを計画しています。この目標を達成するための最初のステップは、LLMがスマートホームデバイスを管理できる制御信号を出力できるようにすることです。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Format_LLM_Opt/ai_assistant.png" />
</div>

このwikiでは、Langchainを使用して大規模言語モデルの出力をフォーマットし、エッジコンピューティングデバイスにデプロイする方法を学びます。具体的には、大規模言語モデルの強力な理解能力を使用してローカルチャットボットを構築し、その後Langchainツールを利用して大規模モデルの出力フォーマットを固定します。

## LLMとは何ですか？

大規模言語モデル（LLM）は、GPTなどの深層学習に基づく人工知能モデルの一種で、自然言語処理タスクに優れています。テキストを理解し生成することができるため、テキスト生成、翻訳、質問応答システムなど、さまざまなアプリケーションで広く使用されています。

## なぜLLMの出力をフォーマットする必要があるのですか？

大規模言語モデル（LLM）の出力をフォーマットすることは、より理解しやすく、特定のアプリケーションに適したものにするために重要です。多くの場合、LLMによって生成されたテキストには、冗長な情報、不要な詳細、または一貫性のないフォーマットのコンテンツが含まれる可能性があります。出力をフォーマットすることで、テキストが特定の基準を満たし、不要な部分を削除し、アプリケーションの要件に合致することを保証できます。このプロセスは、LLMの出力をさまざまなシステムやアプリケーションに効果的に統合し、生成されたコンテンツが関連性があり有用であることを保証するために重要です。

## LLMの出力をフォーマットする方法は？

ここでは、非常にユーザーフレンドリーなツール—Langchainを利用できます。これは、開発者が言語モデルを使用してエンドツーエンドのアプリケーションを構築するのを支援するために設計された強力なフレームワークです。大規模言語モデルとチャットモデルによってサポートされるアプリケーションを作成するプロセスを簡素化する一連のツール、コンポーネント、インターフェースを提供します。

## エッジデバイスにデプロイする方法は？

**ステップ1.** Jetpack 5.0+オペレーティングシステムを搭載したJetsonデバイス（[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products)）を準備する必要があります。

**ステップ2.** ターミナルを開き、対応する依存関係ソフトウェアをインストールします。

```bash
pip3 install --no-cache-dir --verbose langchain[llm] openai
pip3 install --no-cache-dir --verbose gradio==3.38.0
```

**ステップ 3.** 新しいPythonスクリプトを作成し、`format_opt.py`という名前を付けて、以下のコードを挿入してください。

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
            ResponseSchema(name="user_input", description="This is the user's input"),
            ResponseSchema(name="suggestion", type="string", description="your suggestion"),
            ResponseSchema(name="control", description="This is your response"),
            ResponseSchema(name="temperature", type="int", description="This is used to indicate the degrees "
                                                                       "centigrade temperature of the air conditioner.")
        ]
        self.output_parser = StructuredOutputParser.from_response_schemas(response_schemas)
        self.format_instructions = self.output_parser.get_format_instructions()

        self.template = """
            Now you are a smart speaker, and you need to determine whether to turn on the air conditioner based on the
            user's input.
            In the suggestion section, please reply normal conversation.
            In the control section, if you need to turn on the air conditioner, please reply with <1>; if you need to 
            turn off the air conditioner, please reply with <0>.
            
            {format_instructions}
            
            Please do not generate any comments.
            
            % USER INPUT:
            {user_input}

            YOUR RESPONSE:
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
            prompt = f"{prompt}\nUser: {user_message}\nAssistant: {bot_message}"
        prompt = f"{prompt}\nUser: {message}\nAssistant:"
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
            gr.Markdown("# This is a demo for format output of LLM")
            chatbot = gr.Chatbot(height=500)
            msg = gr.Textbox(label="Prompt")
            btn = gr.Button("Submit")
            clear = gr.ClearButton(components=[msg, chatbot], value="Clear console")

            btn.click(self.respond, inputs=[msg], outputs=[msg, chatbot])
            msg.submit(self.respond, inputs=[msg], outputs=[msg, chatbot])

        gr.close_all()
        demo.launch()


if __name__ == '__main__':
    chatbot_ins = ChatBot("/home/nvidia/Mirror/llama-2-7b-chat.Q4_0.gguf")
    chatbot_ins.run_webui()

```

</details>

**ステップ4.** ターミナルでpython3 `format_opt.py`を入力してスクリプトを開始し、ブラウザで`http://127.0.0.1:7861/`にアクセスしてWebUIにアクセスし、効果をテストします。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Format_LLM_Opt/format_llm_opt.gif" />
</div>

## 次のステップ計画は？

- Nvidia Rivaと統合して、テキスト入力を音声インタラクションに置き換える。
- Home Assistantに接続して、LLMの出力を使用してスマートホームデバイスを制御する。

<!-- Code END -->

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
