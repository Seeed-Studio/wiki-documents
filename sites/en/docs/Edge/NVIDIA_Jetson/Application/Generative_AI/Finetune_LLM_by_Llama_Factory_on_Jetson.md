---
description: Deploy Riva and Llama2 on reComputer
title: Finetune with Llama-Factory
keywords:
- reComputer
- LLM
- Chatbot
- Finetune
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Finetune_LLM_on_Jetson
last_update:
  date: 07/03/2024
  author: Youjiang
---


# Custom Local LLM: Fine-tune LLM by Llama-Factory on Jetson


## Introduction

🚀Finetune LLM by Llama-Factory on Jetson! Now you can tailor a custom private local LLM to meet your requirements. 

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run.gif" />
</div>

Llama-Factory provides a highly convenient large language model fine-tuning tool that supports common large language models, datasets, and fine-tuning methods. With this platform, we can easily customize private large language models.

In this wiki, we will learn how to deploy Llama-Factory on Nvidia Jetson and use Llama-Factory to train a large language model that supports Chinese Q&A.


## Prerequisites

- Jetson device with more than 16GB of memory.
- Monitor, mouse, keyboard and network. (not necessary)

:::note
We have already tested the feasibility of this wiki on reComputer [Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) and [AGX Orin 64GB](https://www.seeedstudio.com/NVIDIArJetson-AGX-Orintm-64GB-Developer-Kit-p-5641.html) Developer Kit.
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/agx_orin.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=a07376a957f072a4f755e1832fa0e544&objectID=5569&indexName=bazaar_retailer_products" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Getting Started

### Hardware Connection

1. Connect the Ethernet cable to the reComputer (Powered by Jetson).
2. Connect the mouse, keyboard, and monitor to the reComputer.
3. Power on reComputer.

<!-- Need a GIF here! -->

### Install Jetson-Examples

:::note
The [jetson-examples](https://github.com/Seeed-Projects/jetson-examples) by Seeed Studio offers a seamless, one-line command deployment to run vision AI and Generative AI models on the NVIDIA Jetson platform.
:::

To install the package, please open the terminal in Jetson and run:

```bash
pip3 install jetson-examples
sudo reboot
```

### Install and Run Llama-Factory on Jetson

Deploy `Llama-Factory` by jetson-examples in one-line:

```bash
reComputer run llama-factory
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run_llama_factory.png" />
</div>

We can then open a web browser and access the address to open the WebUI:
```bash
# http://<jetson-ip>:7860
http://127.0.0.1:7860
```

### Start Training

Here, we use the `alpaca_zh` dataset to fine-tune the `Phi-1.5` model, enabling it to have Chinese conversational capabilities. Therefore, in the web UI, we only configure the training `Model name` and `Dataset`, keeping the other training parameters as default. 

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run_train.png" />
</div>

Finally, click the `start` button to initiate the training.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/training.png" />
</div>

:::note
The training process will take approximately 18 hours.
:::

After completing the fine-tuning, you can find the fine-tuned model in the save directory.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/train_result.png" />
</div>

### Testing the Fine-tuned Model.


Finally, we can use Llama-Factory with the fine-tuned model to test if it indeed has acquired Chinese conversational capabilities. The specific steps are as follows.


**Step1.** Load the fine-tuned model by Llama-Factory WebUI.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/load_model.png" />
</div>

**Step2.** Enter a Chinese prompt in the `Input` text box, click the `Submit` button, and check the output result of the large language model in the `Chatbot` text box.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/test_model.png" />
</div>

From the test results, we can see that the fine-tuned model already has the capability to talk with human in Chinese. If you want your model to have more advanced capabilities, try using a more diverse set of fine-tuning data to train your model!


### Demonstration

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/OaGEn7pVve0" title="Finetune LLM by Llama-Factory on Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## References
- [https://github.com/hiyouga/LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory)
- [https://github.com/dusty-nv/jetson-containers](
https://github.com/dusty-nv/jetson-containers/tree/cb6c847f88df221e705397a1ee98424c2e893243/packages/llm/text-generation-inference)
- [https://github.com/Seeed-Projects/jetson-examples](https://github.com/Seeed-Projects/jetson-examples/tree/main/reComputer/scripts/llama-factory)

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