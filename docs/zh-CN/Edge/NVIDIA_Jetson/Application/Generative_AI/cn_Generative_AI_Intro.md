---
description: 本页面介绍如何在使用 Nvidia Jetson 平台的 reComputer 设备上部署生成式 AI 技术，包括文本生成、图像生成、音频生成、多模态生成和检索增强生成。详细介绍了每种技术的应用场景、技术特点和相关资源链接，为开发者提供全面的参考资料和技术支持信息。
title: 使用 reComputer-Jetson® 的生成式 AI
keywords:
  - Edge
  - reComputer 
  - Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Generative_AI_Intro
last_update:
  date: 08/06/2024
  author: Youjiang
---

<div style={{textAlign:'center'}}>
    <a href="https://github.com/Seeed-Projects/jetson-examples">
        <img src="https://files.seeedstudio.com/wiki/reComputer/deploy-genai-on-jetson.png" style={{width:800, height:'auto'}}/>
    </a>
</div>

[**生成式 AI**](https://www.seeedstudio.com/edge-ai/generative-ai) 是一种人工智能技术，能够通过学习现有数据来生成新的数据，如图像、文本或音频。**Nvidia Jetson** 是 NVIDIA 开发的边缘 AI 平台，具有高性能处理能力和低功耗设计，适用于各种嵌入式和物联网设备。它支持深度学习、计算机视觉和其他 AI 应用，提供强大的计算能力和丰富的开发工具集。生成式 AI 与 Jetson 的结合使得在边缘设备上能够高效地进行本地实时生成和推理。

## 文本生成

文本生成是一种使用深度学习和大型语言模型来生成自然语言文本的技术。这些模型在大规模数据集上进行训练，使它们能够学习语言的词汇、语法和语义结构。它们可以产生流畅连贯的文本，不仅限于回答问题或进行对话，还包括写文章、创作故事、生成代码和翻译语言等任务。在这里，我们在 Jetson 上部署文本生成算法来创建我们自己的本地聊天机器人。

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>本地 AI 助手</font></th>
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
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}>使用 ollama 和 AnythingLLM 在 Jetson 设备上建立本地知识库。</font></td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}>使用 Nvidia Riva 和 Meta Llama2 构建本地运行的语音聊天机器人。</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/local_ai_ssistant/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Local_Voice_Chatbot/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## 图像生成

图像生成通过解释输入的文本描述，使模型能够生成与描述相匹配的高质量图像。这项技术在艺术创作、广告设计和游戏开发等领域有着广泛的应用，能够自动生成满足用户需求的视觉内容。

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>运行本地 LLM 文本转图像</font></th>
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
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}> 在 Jetson 上部署图像生成模型并评估其推理性能。</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/How_to_run_local_llm_text_to_image_on_reComputer/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a>
                </div>
            </td>
        </tr>
    </table>
</div>

## 音频生成

音频生成可以使用神经网络产生高质量、逼真的音频，包括语音、音乐和音效。通过在大量数据集上训练，这些模型学会复制自然声音模式和细微差别，从而实现语音合成、自动音乐创作和音效创建等应用。

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>语音字幕生成</font></th>
            <th class="table-trnobg"><font size={"4"}>在 NVIDIA Jetson Orin 上部署 Whisper</font></th>
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
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}><font size={"2"}>  在 Jetson 上的语音字幕生成，可以提供实时语音转字幕服务，同时避免互联网上的信息泄露。 </font></td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}> 在 Jetson Orin 上部署 Whisper 来构建强大、高效的 STT 应用程序。</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Real%20Time%20Subtitle%20Recoder%20on%20Nvidia%20Jetson/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Edge/NVIDIA_Jetson/Application/Generative_AI/Whisper_on_Jetson_for_Real_Time_Speech_to_Text/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a>
                </div>
            </td>
        </tr>
    </table>
</div>

## 多模态生成

多模态生成技术结合了各种形式的数据，如文本、图像和声音，创建整合多种信息类型的内容。该技术使用深度学习模型来处理和融合来自不同模态的数据，产生更具表现力和多样性的内容。例如，文本到图像模型可以根据文本描述生成相应的图像，而语音合成模型可以从文本生成语音并同时生成相关图像。多模态生成在虚拟现实、增强现实和多媒体内容创作方面展现出广阔的应用前景。

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>在 reComputer 上运行 VLM</font>
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
                <font size={"2"}>  本 wiki 提供了如何在 reComputer J4012 Jetson Orin NX 上使用 Jetson Platform Services 运行 VLM 的教程。 </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/run_vlm_on_recomputer/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 了解更多</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>

## 检索增强生成

RAG（检索增强生成）是一种将检索机制与生成模型相结合的技术。RAG 模型不仅使用生成模型来产生响应，还结合信息检索技术，通过从大型数据库中检索相关信息来增强生成内容的准确性和丰富性。这项技术在问答系统、智能搜索和内容生成等应用中表现出色。通过利用检索到的信息，RAG 模型可以生成更详细和信息丰富的响应，从而提高生成内容的质量和相关性。

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>本地 AI 助手</font>
            </th>
            <th class="table-trnobg">
                <font size={"4"}>基于 LlamaIndex 的本地 RAG</font>
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
                <font size={"2"}> 使用 ollama 和 AnythingLLM 在 Jetson 设备上建立本地知识库。 </font>
            </td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> 通过这个本地 RAG 项目，它可以保护您的数据隐私并为您提供低延迟的通信体验。 </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/local_ai_ssistant/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 了解更多</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Local_RAG_based_on_Jetson_with_LlamaIndex/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 了解更多</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>

## 其他

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>在 Jetson 上微调 LLM</font>
            </th>
            <th class="table-trnobg">
                <font size={"4"}>使用 MLC 量化 LLM</font>
            </th>
            <th class="table-trnobg">
                <font size={"4"}>零样本检测</font>
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
                <font size={"2"}> 在 Nvidia Jetson 上部署 Llama-Factory 并使用 Llama-Factory 训练大型语言模型。 </font>
            </td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> 在 Jetson Orin NX 上使用 MLC LLM 部署量化的 Llama2-7B。 </font>
            </td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> 零样本检测 AI 服务暴露 REST API 端点来控制流输入和要检测的对象。 </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Finetune_LLM_on_Jetson/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 了解更多</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 了解更多</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/run_zero_shot_detection_on_recomputer/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 了解更多</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>使用 Langchain 格式化输出</font>
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
                <font size={"2"}> 使用 Langchain 格式化大型语言模型的输出并将其部署在边缘计算设备上。 </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 了解更多</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>

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
