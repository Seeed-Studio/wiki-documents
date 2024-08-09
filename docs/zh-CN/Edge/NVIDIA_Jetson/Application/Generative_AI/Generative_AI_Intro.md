---
description: 本页面介绍了如何使用Nvidia Jetson平台在reComputer设备上部署生成式AI技术，包括文本生成、图像生成、音频生成、多模态生成和检索增强生成。详细介绍了每种技术的应用场景、技术特性和相关资源链接，为开发人员提供了全面的参考资料和技术支持信息。
title: 生成式人工智能应用
keywords:
  - Edge
  - reComputer 
  - Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Generative_AI_Intro
last_update:
  date: 08/06/2024
  author: 于剑锋
---

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/reComputer/deploy-genai-on-jetson.png" style={{width:800, height:'auto'}}/>
</div>

**生成式人工智能**是一种人工智能技术，能够通过学习已有数据生成新的数据，如图片、文本或音频。**Nvidia Jetson**是由NVIDIA开发的边缘AI平台，具有高性能处理能力和低功耗设计，适用于各种嵌入式和物联网设备。它支持深度学习、计算机视觉和其它AI应用，提供强大的计算能力和丰富的开发工具。生成式AI与Jetson的结合能在边缘设备上高效地进行本地实时生成和推断。

## 文本生成

文本生成是一项使用深度学习和大型语言模型来生成自然语言文本的技术。这些模型在大量数据集上进行训练，使它们能够学习语言的词汇、语法和语义结构。它们可以产生流畅且连贯的文本，不仅限于回答问题或进行对话，还包括写文章、创作故事、生成代码和翻译语言等任务。这里，我们在Jetson上部署文本生成算法，创建我们自己的本地聊天机器人。

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>本地AI助手</font></th>
            <th class="table-trnobg"><font size={"4"}>本地语音聊天机器人</font></th>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/ai-assistant.png" style={{width:300, height:'auto'}}/>
                </div>
            </td>
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/workflow.png" style={{width:300, height:'auto'}}/>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}>在Jetson设备上设置本地知识库，使用ollama和AnythingLLM。</font></td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}>使用Nvidia Riva和Meta Llama2构建本地运行的语音聊天机器人。</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/local_ai_ssistant/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Local_Voice_Chatbot/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## 图像生成

图像生成通过解释输入的文本描述，使模型能够生成与描述相匹配的高质量图像。这项技术在艺术创作、广告设计和游戏开发等领域具有广泛的应用，使得自动化生成符合用户需求的视觉内容成为可能。

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>在本地运行LLM文本到图像</font></th>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/28_dreamshaperxl_image_result.png" style={{width:300, height:'300'}}/>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}>在Jetson上部署图像生成模型并评估其推断性能。</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/How_to_run_local_llm_text_to_image_on_reComputer/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a>
                </div>
            </td>
        </tr>
    </table>
</div>

## 音频生成

音频生成可以使用神经网络产生高质量、逼真的音频，包括语音、音乐和音效。通过在广泛的数据集上训练，这些模型学会复制自然声音的模式和细微差别，使得语音合成、自动音乐创作和音效创建等应用成为可能。

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>Speech Subtitle Generation</font></th>
            <th class="table-trnobg"><font size={"4"}>Deploy Whisper on NVIDIA Jetson Orin</font></th>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recoder.gif" style={{width:300, height:'auto'}}/>
                </div>
            </td>
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Real-Time-Whisper.gif" style={{width:300, height:'300'}}/>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}><font size={"2"}>  Speech Subtitle Generation on Jetson, which can offer real-time speech-to-subtitle services while avoiding information leakage on the internet. </font></td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}> Deploying Whisper on the Jetson Orin to build robust, efficient STT applications.</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Real%20Time%20Subtitle%20Recoder%20on%20Nvidia%20Jetson/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Edge/NVIDIA_Jetson/Application/Generative_AI/Whisper_on_Jetson_for_Real_Time_Speech_to_Text/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a>
                </div>
            </td>
        </tr>
    </table>
</div>

## Multimodal Generation

Multimodal generation technology combines various forms of data, such as text, images, and sound, to create content that integrates multiple types of information. This technology uses deep learning models to process and fuse data from different modalities, resulting in more expressive and diverse content. For example, text-to-image models can generate corresponding images based on textual descriptions, while speech synthesis models can produce speech from text and simultaneously generate related images. Multimodal generation shows broad application prospects in virtual reality, augmented reality, and multimedia content creation.

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>Run VLM on reComputer</font>
            </th>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer/Application/vlm/vlmgif.gif" style={{width:300, height:'auto'}}/>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}>  This wiki provides a tutorial on how to run VLM on reComputer J4012 Jetson Orin NX with Jetson Platform Services. </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/run_vlm_on_recomputer/">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Learn More</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>

## Retrieval Augmented Generation

RAG (Retrieval-Augmented Generation) is a technology that combines retrieval mechanisms with generation models. The RAG model not only uses a generative model to produce responses but also incorporates information retrieval techniques to enhance the accuracy and richness of the generated content by retrieving relevant information from large databases. This technology excels in applications such as question-answering systems, intelligent search, and content generation. By leveraging retrieved information, RAG models can generate more detailed and information-rich responses, thereby improving the quality and relevance of the generated content.

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>Local AI Assistant</font>
            </th>
            <th class="table-trnobg">
                <font size={"4"}>Local RAG with LlamaIndex</font>
            </th>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/ai-assistant.png" style={{width:300, height:'auto'}}/>
                </div>
            </td>
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/RAG-MLC-Jetson.gif" style={{width:300, height:'auto'}}/>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> Set up a local knowledge base on Jetson devices with ollama and AnythingLLM. </font>
            </td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> With this local RAG project, it can protect your data privacy and provide you with low-latency communication experience. </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/local_ai_ssistant/">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Learn More</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Local_RAG_based_on_Jetson_with_LlamaIndex/">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Learn More</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>

## Others

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>Fine-tune LLM on Jetson</font>
            </th>
            <th class="table-trnobg">
                <font size={"4"}>Quantized LLM with MLC</font>
            </th>
            <th class="table-trnobg">
                <font size={"4"}>Zero-Shot Detection</font>
            </th>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run.gif" style={{width:300, height:'auto'}}/>
                </div>
            </td>
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/MLC_LLM.gif" style={{width:300, height:'auto'}}/>
                </div>
            </td>
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer/Application/zero_shot_detection/fig1.gif" style={{width:300, height:'auto'}}/>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> Deploy Llama-Factory on Nvidia Jetson and use Llama-Factory to train a large language model. </font>
            </td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> Deploying the quantized Llama2-7B with MLC LLM on the Jetson Orin NX. </font>
            </td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> The Zero Shot Detection AI service exposes REST API endpoints to control stream input and objects to detect. </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Finetune_LLM_on_Jetson/">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Learn More</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson/">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Learn More</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/run_zero_shot_detection_on_recomputer/">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Learn More</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>Format Output with Langchain</font>
            </th>    
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer/Application/Format_LLM_Opt/format_llm_opt.gif" style={{width:300, height:'auto'}}/>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> Use Langchain to format the output of large language models and deploy it on edge computing devices. </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson/">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Learn More</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>


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


