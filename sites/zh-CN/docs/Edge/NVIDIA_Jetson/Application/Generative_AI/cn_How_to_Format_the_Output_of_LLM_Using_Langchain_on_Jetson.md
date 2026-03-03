---
description: 如何在 Jetson 上使用 Langchain 格式化 LLM 的输出
title: 使用 Langchain 格式化输出
keywords:
- reComputer
- LLM
- Langchain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson
last_update:
  date: 4/1/2024
  author: Youjiang
---


## 介绍

在现代家庭中，智能家居的趋势变得越来越普遍。您可以通过连接智能设备、自动化和人工智能技术，将您的家庭转变为更智能、更便利的生活空间。为此，我们计划将 LLM 集成到 HomeAssistant 中，以创建更智能的家庭助手。实现这一目标的第一步是使 LLM 能够输出可以管理智能家居设备的控制信号。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Format_LLM_Opt/ai_assistant.png" />
</div>

在本教程中，您将学习如何使用 Langchain 来格式化大型语言模型的输出，并将其部署在边缘计算设备上。具体来说，利用大型语言模型强大的理解能力来构建本地聊天机器人，然后利用 Langchain 工具来固定大型模型的输出格式。

## 什么是 LLM？

大型语言模型（LLM）是一种基于深度学习的人工智能模型，如 GPT，它们在自然语言处理任务中表现出色。它们能够理解和生成文本，因此被广泛应用于各种应用中，如文本生成、翻译、问答系统等。

## 为什么需要格式化 LLM 的输出？

格式化大型语言模型（LLM）的输出对于使其更易理解并适应特定应用非常重要。通常，LLM 生成的文本可能包含冗余信息、不必要的细节或格式不一致的内容。通过格式化输出，您可以确保文本符合特定标准，删除不需要的部分，并确保它符合您应用程序的要求。这个过程对于将 LLM 输出有效集成到各种系统和应用程序中至关重要，确保生成的内容既相关又有用。

## 如何格式化 LLM 的输出？

在这里，我们可以利用一个非常用户友好的工具——Langchain。它是一个强大的框架，旨在帮助开发人员使用语言模型构建端到端的应用程序。它提供了一套工具、组件和接口，简化了创建由大型语言模型和聊天模型支持的应用程序的过程。

## 如何在边缘设备中部署？

**步骤 1.** 您需要准备一个配备 Jetpack 5.0+ 操作系统的 Jetson 设备（[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products)）。

**步骤 2.** 打开终端并安装相应的依赖软件。

```bash
pip3 install --no-cache-dir --verbose langchain[llm] openai
pip3 install --no-cache-dir --verbose gradio==3.38.0
```

**步骤 3.** 创建一个新的 Python 脚本，命名为 `format_opt.py`，并将以下代码插入其中。

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

**步骤 4.** 在终端中输入 python3 `format_opt.py` 启动脚本，然后在浏览器中访问 `http://127.0.0.1:7861/` 来访问 WebUI 并测试效果。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Format_LLM_Opt/format_llm_opt.gif" />
</div>

## 下一步计划？

- 集成 Nvidia Riva 以用语音交互替代文本输入。
- 连接到 Home Assistant 以使用 LLM 的输出控制智能家居设备。

<!-- Code END -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
