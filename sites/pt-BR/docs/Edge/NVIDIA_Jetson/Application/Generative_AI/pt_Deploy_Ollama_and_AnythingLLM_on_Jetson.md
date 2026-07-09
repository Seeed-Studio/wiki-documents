---
description: Este wiki demonstrará como configurar uma base de conhecimento local em dispositivos Jetson com ollama e AnythingLLM. Ao aproveitar os poderosos recursos de grandes modelos de linguagem, buscamos aumentar nossa eficiência de trabalho.
title: Assistente de IA Local
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
createdAt: '2024-07-30'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/local_ai_ssistant/
---


# Assistente de IA Local : Implementar Ollama e AnytingLLM no Jetson

## Introdução

O Assistente de IA Local é uma aplicação de inteligência artificial que é executada em hardware e software locais, oferecendo recursos de interação inteligente e processamento de dados. Ele funciona de forma independente de serviços em nuvem, protegendo a privacidade do usuário enquanto fornece tempos de resposta rápidos e altos níveis de personalização.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/ai-assistant.png" />
</div>

Neste wiki, demonstraremos como configurar uma base de conhecimento local em dispositivos Jetson com [ollama](https://ollama.com/) e [AnythingLLM](https://anythingllm.com/). Ao aproveitar os poderosos recursos de grandes modelos de linguagem, buscamos aumentar nossa eficiência de trabalho.

## Pré-requisitos

- Dispositivo Jetson com mais de 16 GB de memória.
- O dispositivo de hardware precisa estar pré-gravado com o sistema operacional jetpack [5.1.1](https://wiki.seeedstudio.com/pt-br/reComputer_Intro/).

:::note
Neste wiki, concluiremos as seguintes tarefas usando o [Kit de Desenvolvimento NVIDIA® Jetson AGX Orin™ 64GB](https://www.seeedstudio.com/NVIDIArJetson-AGX-Orintm-64GB-Developer-Kit-p-5641.html), mas você também pode tentar usar outros dispositivos Jetson.
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/AGX-Orin.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=a07376a957f072a4f755e1832fa0e544&objectID=5569&indexName=bazaar_retailer_products" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira o seu agora 🖱️</font></span></strong>
    </a>
</div>

## Primeiros Passos

### Conexão de Hardware

- Conecte o dispositivo Jetson à rede, mouse, teclado e monitor.

:::note
Claro, você também pode acessar remotamente o dispositivo Jetson via SSH pela rede local.
:::

### Instalar e Executar o Ollama

Aqui, recomendamos fortemente usar o [jetson-examples](https://github.com/Seeed-Projects/jetson-examples) para implantar rapidamente o Ollama no seu dispositivo Jetson.

**Passo 1.** Abra um terminal no dispositivo Jetson e execute o seguinte comando para instalar `jetson-examples`:

```bash
sudo apt install python3-pip
pip3 install jetson-examples
```

**Passo 2.** Para implantar o ollama no dispositivo Jetson com um único comando, podemos executar:

```bash
reComputer run ollama
```

**Passo 3.** Baixe o grande modelo Llama3 usando o Ollama:

```bash
ollama run llama3
```

:::info
Por favor, mantenha este terminal ativo.
:::

### Instalar e Executar o AnythingLLM

Podemos instalar o AnythingLLM de forma conveniente usando uma [configuração local com Docker](https://docs.anythingllm.com/installation/self-hosted/local-docker#recommend-way-to-run-dockerized-anythingllm).

**Passo 1.** Execute o AnythingLLM no Jetson.

Reabra o terminal e insira o seguinte comando:

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

**Passo 2.** Configure sua própria base de conhecimento local.

Para acessar a aplicação completa, visite `http://<jetson-ip>:3001` no seu navegador.

:::note
Você pode inserir o comando `ifconfig` no terminal do Jetson para encontrar o endereço IP dele.
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/anythingllm-init.png" />
</div>

Siga as instruções na tela para concluir a configuração do AnythingLLM.

:::danger
Observe que, na página de configuração de `LLM Perference`, devemos selecionar o grande modelo de linguagem Llama 3.1 do Ollama.
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/select-ollama.png" />
</div>

Por fim, importe os documentos necessários. O grande modelo de linguagem então responderá às perguntas com base nos documentos importados.

`import` --> `click to upload or drag and drop` --> `select document` --> `move to Workspace` --> `save and embed`

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/inport-doc.png" />
</div>

Neste ponto, você configurou com sucesso sua própria base de conhecimento local.

:::note
Para tutoriais de configuração mais detalhados, consulte [este link](https://docs.anythingllm.com/).
:::

### Vamos Executá-lo

Insira perguntas na caixa de diálogo, e o grande modelo de linguagem fornecerá respostas com base na base de conhecimento.

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

## Demonstração do Efeito

Aqui, usamos o assistente pessoal local configurado para consultar as informações de que precisamos.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/JjPfXNqhO1g" title="Local AI Assistant : Deploy Ollama and AnytingLLM on Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referências

- https://ollama.com/library/llama3.1
- https://anythingllm.com/
- https://www.youtube.com/watch?v=4UFrVvy7VlA&t=4s

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
