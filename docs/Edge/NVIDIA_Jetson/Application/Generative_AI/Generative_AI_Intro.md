---
description: This page introduces how to deploy generative AI technologies on reComputer devices using the Nvidia Jetson platform, including text generation, image generation, audio generation, multimodal generation, and retrieval-augmented generation. It details the application scenarios, technical features, and relevant resource links for each technology, providing developers with comprehensive reference materials and technical support information.
title: Generative AI with reComputer-Jetson®
keywords:
  - Edge
  - reComputer 
  - Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Generative_AI_Intro
last_update:
  date: 08/06/2024
  author: Youjiang
---

<div style={{textAlign:'center'}}>
    <a href="https://github.com/Seeed-Projects/jetson-examples">
        <img src="https://files.seeedstudio.com/wiki/reComputer/deploy-genai-on-jetson.png" style={{width:800, height:'auto'}}/>
    </a>
</div>

[**Generative AI**](https://www.seeedstudio.com/edge-ai/generative-ai) is an artificial intelligence technology that can generate new data, such as images, text, or audio, by learning from existing data. **Nvidia Jetson** is an edge AI platform developed by NVIDIA, featuring high-performance processing capabilities and low-power design, suitable for various embedded and IoT devices. It supports deep learning, computer vision, and other AI applications, offering powerful computing capabilities and a rich set of development tools. The combination of Generative AI and Jetson enables efficient local real-time generation and inference on edge devices.

## Text Generation

Text generation is a technology that uses deep learning and large language model to generate natural language text. These models are trained on massive datasets, allowing them to learn the vocabulary, grammar, and semantic structure of language. They can produce fluent and coherent text, not only limited to answering questions or engaging in conversations but also including tasks like writing articles, creating stories, generating code, and translating languages. Here, we are deploying text generation algorithms on Jetson to create our own local chatbot.

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>Local AI Assistant</font></th>
            <th class="table-trnobg"><font size={"4"}>Local Voice Chatbot</font></th>
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
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}>Set up a local knowledge base on Jetson devices with ollama and AnythingLLM.</font></td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}>Building a locally-operated voice chatbot with Nvidia Riva and Meta Llama2.</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/local_ai_ssistant/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Local_Voice_Chatbot/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## Image Generation

Image generation, by interpreting input text descriptions, allows models to produce high-quality images that match the descriptions. This technology has broad applications in fields such as artistic creation, advertising design, and game development, enabling the automated generation of visual content that meets user needs.

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>Run a Local LLM Text-to-Image</font></th>
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
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}> Deploy the image generation model on Jetson and evaluate its inference performance.</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/How_to_run_local_llm_text_to_image_on_reComputer/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a>
                </div>
            </td>
        </tr>
    </table>
</div>

## Audio Generation

Audio generation can produce high-quality, realistic audio, including speech, music, and sound effects, using neural networks. By training on extensive datasets, these models learn to replicate natural sound patterns and nuances, enabling applications such as speech synthesis, automated music composition, and sound effect creation.

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
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Real%20Time%20Subtitle%20Recoder%20on%20Nvidia%20Jetson/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/Edge/NVIDIA_Jetson/Application/Generative_AI/Whisper_on_Jetson_for_Real_Time_Speech_to_Text/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a>
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
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/run_vlm_on_recomputer/" target="_blank" rel="noopener noreferrer">
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
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/local_ai_ssistant/" target="_blank" rel="noopener noreferrer">
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
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/Local_RAG_based_on_Jetson_with_LlamaIndex/" target="_blank" rel="noopener noreferrer">
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
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/Finetune_LLM_on_Jetson/" target="_blank" rel="noopener noreferrer">
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
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson/" target="_blank" rel="noopener noreferrer">
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
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/run_zero_shot_detection_on_recomputer/" target="_blank" rel="noopener noreferrer">
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
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson/" target="_blank" rel="noopener noreferrer">
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
