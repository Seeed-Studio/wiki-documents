---
description: Como formatar a saída de um LLM usando Langchain no Jetson
title: Formatar saída com Langchain
keywords:
  - reComputer
  - LLM
  - Langchain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson
last_update:
  date: 4/1/2024
  author: Youjiang
createdAt: '2024-01-02'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson/
---


## Introdução

Nas famílias modernas, a tendência em direção às casas inteligentes está se tornando cada vez mais comum. Você pode transformar sua casa em um espaço de convivência mais inteligente e conveniente conectando dispositivos inteligentes, automação e tecnologia de inteligência artificial. Para isso, planejamos integrar um LLM ao HomeAssistant para criar um assistente doméstico mais inteligente. O primeiro passo para atingir esse objetivo é permitir que o LLM produza sinais de controle capazes de gerenciar dispositivos de casa inteligente.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Format_LLM_Opt/ai_assistant.png" />
</div>

Neste wiki, você aprenderá como usar Langchain para formatar a saída de grandes modelos de linguagem e implantá-la em dispositivos de computação de borda. Especificamente, utilizar a poderosa capacidade de compreensão de grandes modelos de linguagem para construir um chatbot local e, em seguida, usar as ferramentas do Langchain para fixar o formato de saída do grande modelo.

## O que é LLM?

Large Language Models (LLM) são um tipo de modelo de inteligência artificial baseado em aprendizado profundo, como o GPT, que se destacam em tarefas de processamento de linguagem natural. Eles são capazes de compreender e gerar texto e, portanto, são amplamente utilizados em várias aplicações, como geração de texto, tradução, sistemas de perguntas e respostas e muito mais.

## Por que é necessário formatar a saída de um LLM?

Formatar a saída de um Large Language Model (LLM) é importante para torná-la mais compreensível e adaptada a aplicações específicas. Com frequência, o texto gerado por um LLM pode incluir informações redundantes, detalhes desnecessários ou conteúdo com formatação inconsistente. Ao formatar a saída, você pode garantir que o texto atenda a padrões específicos, remover partes indesejadas e assegurar que ele esteja alinhado com os requisitos da sua aplicação. Esse processo é crucial para integrar de forma eficaz as saídas de LLM em vários sistemas e aplicações, garantindo que o conteúdo gerado seja ao mesmo tempo relevante e útil.

## Como formatar a saída de um LLM?

Aqui, podemos utilizar uma ferramenta muito fácil de usar — Langchain. É um framework poderoso projetado para ajudar desenvolvedores a criar aplicações de ponta a ponta usando modelos de linguagem. Ele oferece um conjunto de ferramentas, componentes e interfaces que simplificam o processo de criação de aplicações baseadas em Large Language Models e modelos de chat.

## Como implantar em dispositivos de borda?

**Passo 1.** Você precisará preparar um dispositivo Jetson ([reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products)) equipado com o sistema operacional Jetpack 5.0+.

**Passo 2.** Abra o terminal e instale o software de dependências correspondente.

```bash
pip3 install --no-cache-dir --verbose langchain[llm] openai
pip3 install --no-cache-dir --verbose gradio==3.38.0
```

**Passo 3.** Crie um novo script Python, chamado `format_opt.py`, e insira o seguinte código nele.

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

**Passo 4.** Digite python3 `format_opt.py` no terminal para iniciar o script e, em seguida, acesse `http://127.0.0.1:7861/` em um navegador para abrir a WebUI e testar os efeitos.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Format_LLM_Opt/format_llm_opt.gif" />
</div>

## Próximos passos?

- Integrar com Nvidia Riva para substituir a entrada de texto por interação por voz.
- Conectar ao Home Assistant para controlar dispositivos de casa inteligente usando a saída do LLM.

<!-- Code END -->

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
