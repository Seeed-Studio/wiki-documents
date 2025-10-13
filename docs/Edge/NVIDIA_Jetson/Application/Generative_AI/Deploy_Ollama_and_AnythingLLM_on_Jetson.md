---
description: This wiki will demonstrate how to set up a local knowledge base on Jetson devices with ollama and AnythingLLM. By leveraging the powerful capabilities of large language models, we aim to enhance our work efficiency.
title: Local AI Assistant
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


# Local AI Assistant : Deploy Ollama and AnytingLLM on Jetson

## Introduction

Local AI Assistant is an artificial intelligence application that runs on local hardware and software, offering intelligent interaction and data processing capabilities. It operates independently of cloud services, protecting user privacy while providing quick response times and high levels of customization.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/ai-assistant.png" />
</div>

In this wiki, we will demonstrate how to set up a local knowledge base on Jetson devices with [ollama](https://ollama.com/) and [AnythingLLM](https://anythingllm.com/). By leveraging the powerful capabilities of large language models, we aim to enhance our work efficiency.

## Prerequisites

- Jetson device with more than 16GB of memory.
- The hardware device needs to be pre-flashed with the jetpack [5.1.1](https://wiki.seeedstudio.com/reComputer_Intro/) operating system.

:::note
In this wiki, we will accomplish the following tasks using the [NVIDIA® Jetson AGX Orin™ 64GB Developer Kit](https://www.seeedstudio.com/NVIDIArJetson-AGX-Orintm-64GB-Developer-Kit-p-5641.html), but you can also try using other Jetson devices.
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/AGX-Orin.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=a07376a957f072a4f755e1832fa0e544&objectID=5569&indexName=bazaar_retailer_products" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Getting Started

### Hardware Connection

- Connect the Jetson device to the network, mouse, keyboard, and monitor.

:::note
Of course, you can also remotely access the Jetson device via SSH over the local network.
:::

### Install and Run Ollama

Here, we highly recommend using [jetson-examples](https://github.com/Seeed-Projects/jetson-examples) to quickly deploy Ollama on your Jetson device.

**Step1.** Open a terminal on jetson device and run the following command to install `jetson-examples`:

```bash
sudo apt install python3-pip
pip3 install jetson-examples
```

**Step2.** To deploy ollama on Jetson device with a single command, we can run:

```bash
reComputer run ollama
```

**Step3.** Download the Llama3 large model using Ollama:

```bash
ollama run llama3
```

:::info
Please keep this terminal active.
:::

### Install and Run AnythingLLM

We can conveniently install AnythingLLM using a [local Docker setup](https://docs.anythingllm.com/installation/self-hosted/local-docker#recommend-way-to-run-dockerized-anythingllm).

**Step1.** Run AnythingLLM on Jetson.

Reopen the terminal and enter the following command:

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

**Step2.** Configure your own local knowledge base.

To access the full application, visit `http://<jetson-ip>:3001` in your browser.

:::note
You can enter the `ifconfig` command on the Jetson terminal to find its IP address.
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/anythingllm-init.png" />
</div>

Follow the on-screen prompts to complete the configuration of AnythingLLM.

:::danger
Please note that on the configuration page of `LLM Perference`, we should select Ollama's Llama 3.1 large language model.
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/select-ollama.png" />
</div>

Finally, import the necessary documents. The large language model will then answer questions based on the imported documents.

`import` --> `click to upload or drag and drop` --> `select document` --> `move to Workspace` --> `save and embed`

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/inport-doc.png" />
</div>

At this point, you have successfully set up your own local knowledge base.

:::note
For more in-depth configuration tutorials, please refer to [this link](https://docs.anythingllm.com/).
:::

### Let's Run It

Enter questions in the dialogue box, and the large language model will provide answers based on the knowledge base.

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

## Effect Demonstration

Here, we use the configured local personal assistant to query the information we need.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/JjPfXNqhO1g" title="Local AI Assistant : Deploy Ollama and AnytingLLM on Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## References

- https://ollama.com/library/llama3.1
- https://anythingllm.com/
- https://www.youtube.com/watch?v=4UFrVvy7VlA&t=4s

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
