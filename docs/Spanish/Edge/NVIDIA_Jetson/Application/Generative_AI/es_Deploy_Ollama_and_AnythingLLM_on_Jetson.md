---
description: Esta wiki demostrará cómo configurar una base de conocimiento local en dispositivos Jetson con ollama y AnythingLLM. Al aprovechar las potentes capacidades de los LLM, nuestro objetivo es mejorar la eficiencia de nuestro trabajo.
title: Asistente local potenciado por IA
keywords:
- reComputer
- LLM
- Chatbot
- ollama
- AnythingLLM
- llama
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/local_ai_ssistant
last_update:
  date: 07/30/2024
  author: Youjiang
---


# Asistente de IA local: implementa Ollama y AnytingLLM en la Jetson

## Introducción

Local AI Assistant es una aplicación de inteligencia artificial que se ejecuta en hardware y software local y ofrece interacción inteligente y capacidades de procesamiento de datos. Opera independientemente de los servicios en la nube, protegiendo la privacidad del usuario y al mismo tiempo brinda tiempos de respuesta rápidos y altos niveles de personalización.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/ai-assistant.png" />
</div>

En esta wiki, demostraremos cómo configurar una base de conocimientos local en dispositivos Jetson con [ollama](https://ollama.com/) y [AnythingLLM](https://anythingllm.com/). Al aprovechar las poderosas capacidades de los LLM's, nuestro objetivo es mejorar la eficiencia de nuestro trabajo.

## Prerequisitos

- Dispositivo Jetson con más de 16GB de memoria.
- El dispositivo debe ser previamente flasheado con el sistema operativo jetpack [5.1.1](https://wiki.seeedstudio.com/reComputer_Intro/).

:::nota
En esta wiki, trabajaremos utilizando el [NVIDIA® Jetson AGX Orin™ 64GB Developer Kit](https://www.seeedstudio.com/NVIDIArJetson-AGX-Orintm-64GB-Developer-Kit-p-5641.html), pero también puedes intentar usar otros dispositivos Jetson.
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/AGX-Orin.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=a07376a957f072a4f755e1832fa0e544&objectID=5569&indexName=bazaar_retailer_products"><strong><span><font color={'FFFFFF'} size={"4"}> Conseguir una 🖱️</font></span></strong>
    </a>
</div>

## Primeros pasos

### Conexiones de Hardware
- Conecta el dispositivo Jetson a la red, también cablea: el mouse, el teclado y el monitor.

:::nota
Por supuesto, también puedes acceder de forma remota al dispositivo Jetson a través de SSH mediante la red local.
:::

### Instalar y Correr Ollama

Aquí, recomendamos encarecidamente utilizar [jetson-examples](https://github.com/Seeed-Projects/jetson-examples) para implementar rápidamente Ollama en tu dispositivo Jetson.

**Paso 1.** Abre una terminal en el dispositivo Jetson y ejecuta el siguiente comando para instalar `jetson-examples`:

```bash
sudo apt install python3-pip
pip3 install jetson-examples
```

**Paso 2.** Para implementar ollama en el dispositivo Jetson con un solo comando, podemos ejecutar el siguiente comando:

```bash
reComputer run ollama
```

**Paso 3.** Descarga el LLM de Llama3 usando Ollama:

```bash
ollama run llama3
```

:::info
Por favor, mantén esta terminal activa
:::

### Instala y corre AnythingLLM

Podemos instalar cómodamente AnythingLLM usando una [configuración local de Docker](https://docs.anythingllm.com/installation/self-hosted/local-docker#recommend-way-to-run-dockerized-anythingllm).

**Paso 1.** Ejecuta AnythingLLM en la Jetson.

Vuelve a abrir la terminal e ingresa el siguiente comando:

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

**Paso 2.** Configura tu propia base de conocimientos local.

Para acceder a la aplicación completa, visita `http://<jetson-ip>:3001` en tu navegador.

:::nota
Puedes ingresar el comando `ifconfig` en la terminal de la Jetson para encontrar tu dirección IP.
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/anythingllm-init.png" />
</div>

Sigue las instrucciones en pantalla para completar la configuración de AnythingLLM.

:::Peligro
Ten en cuenta que en la página de configuración de `LLM Perference`, debemos seleccionar el LLM Llama 3.1 de Ollama.
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/select-ollama.png" />
</div>

Finalmente, importa los documentos necesarios. Luego, el LLM responderá preguntas basadas en los documentos importados.

`import` --> `click to upload or drag and drop` --> `select document` --> `move to Workspace` --> `save and embed`

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/inport-doc.png" />
</div>

En este punto, has configurado con éxito tu propia base de conocimientos local.

:::nota
Para obtener tutoriales de configuración más detallados, consulta [este enlace](https://docs.anythingllm.com/).
:::

### ¡Ejecutemos el sistema!

Ingresa preguntas en el cuadro de diálogo y el LLM proporcionará respuestas basadas en la base de conocimientos.

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



## Demostración

Aquí, utilizamos el asistente personal local configurado para consultar la información que necesitamos.

<div align="center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/JjPfXNqhO1g" title="Local AI Assistant : Deploy Ollama and AnytingLLM on Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referencias
- https://ollama.com/library/llama3.1
- https://anythingllm.com/
- https://www.youtube.com/watch?v=4UFrVvy7VlA&t=4s


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