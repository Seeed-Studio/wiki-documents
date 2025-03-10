---
description: Cómo dar formato la salida de un LLM usando Langchain en Jetson
title: Cómo dar formato la salida de un LLM usando Langchain en Jetson
keywords:
- reComputer
- LLM
- Langchain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson
last_update:
  date: 4/1/2024
  author: Youjiang
---


## Introducción
En las familias modernas, la tendencia hacia los hogares inteligentes es cada vez más común. Puedes transformar tu hogar en un espacio habitable más inteligente conectando dispositivos inteligentes, automatización y tecnología de inteligencia artificial. Con este fin, planeamos integrar un LLM en HomeAssistant para crear un asistente doméstico más inteligente. El primer paso para lograr este objetivo es permitir que el LLM emita señales de control que puedan administrar dispositivos domésticos inteligentes.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Format_LLM_Opt/ai_assistant.png" />
</div>


En esta wiki, aprenderás cómo usar Langchain para dar formato a la salida de LLM's e implementarlos en dispositivos informáticos de vanguardia. Específicamente, utilizarás la poderosa capacidad de comprensión de los LLM's para crear un chatbot local y luego utilizarás las herramientas Langchain para corregir el formato de salida del LLM.

## ¿Qué es un LLM?
Los Large Language Models (LLM) son un tipo de modelo de inteligencia artificial basado en aprendizaje profundo, como GPT, que destacan en tareas de procesamiento del lenguaje natural. Son capaces de comprender y generar texto y, por lo tanto, se utilizan ampliamente en diversas aplicaciones, como generación de texto, traducción, sistemas de preguntas y respuestas, etc.

## ¿Por qué es necesario dar formato a la respuesta del LLM?
Es importante para hacerlo más comprensible y adaptado a aplicaciones específicas. A menudo, el texto generado por un LLM puede incluir información redundante, detalles innecesarios o contenido con un formato inconsistente. Al dar formato a la salida, puedes asegurarte de que el texto cumpla con estándares específicos, eliminar partes no deseadas y asegurarte de que se ajuste a los requisitos de tu aplicación. Este proceso es crucial para integrar los resultados del LLM de manera efectiva en varios sistemas y aplicaciones, asegurando que el contenido generado sea relevante y útil.

## ¿Cómo dar formato a la respuesta de un LLM?
Aquí podemos utilizar una herramienta muy sencilla: Langchain. Es un poderoso framework diseñado para ayudar a los desarrolladores a crear aplicaciones de un extremo a otro utilizando modelos de lenguaje. Ofrece un conjunto de herramientas, componentes e interfaces que simplifican el proceso de creación de aplicaciones compatibles con LLM's y modelos de chat.

## ¿Cómo implementarlo en dispositivos de cómputo en el borde?

**Paso 1.** Deberás preparar un dispositivo Jetson ([reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products)) equipado con el sistema operativo Jetpack 5.0+.

**Paso 2.** Abre la terminal e instala el software de dependencia correspondiente.

```bash
pip3 install --no-cache-dir --verbose langchain[llm] openai
pip3 install --no-cache-dir --verbose gradio==3.38.0
```

**Paso 3.** Crea un nuevo script de Python, denominado `format_opt.py`, e inserta el siguiente código en él.

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

**Paso 4.** Escribe python3 `format_opt.py` en la terminal para iniciar el script y luego visita `http://127.0.0.1:7861/` en un navegador para acceder a la WebUI y probar los efectos.


<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Format_LLM_Opt/format_llm_opt.gif" />
</div>


## Próximos pasos
- Integra con Nvidia Riva para reemplazar la entrada de texto con interacción de voz.
- Conéctate a Home Assistant para controlar dispositivos domésticos inteligentes utilizando la salida del LLM.


<!-- Code END -->

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
