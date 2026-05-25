---
description: Esta página apresenta como implantar tecnologias de IA generativa em dispositivos reComputer usando a plataforma Nvidia Jetson, incluindo geração de texto, geração de imagem, geração de áudio, geração multimodal e geração aumentada por recuperação. Ela detalha os cenários de aplicação, características técnicas e links de recursos relevantes para cada tecnologia, fornecendo aos desenvolvedores materiais de referência abrangentes e informações de suporte técnico.
title: IA Generativa com reComputer-Jetson®
keywords:
  - Borda
  - reComputer
  - Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Generative_AI_Intro
last_update:
  date: 08/06/2024
  author: Youjiang
createdAt: '2024-08-06'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Generative_AI_Intro/
---

<div style={{textAlign:'center'}}>
    <a href="https://github.com/Seeed-Projects/jetson-examples">
        <img src="https://files.seeedstudio.com/wiki/reComputer/deploy-genai-on-jetson.png" style={{width:800, height:'auto'}}/>
    </a>
</div>

[**Generative AI**](https://www.seeedstudio.com/edge-ai/generative-ai) é uma tecnologia de inteligência artificial que pode gerar novos dados, como imagens, textos ou áudios, aprendendo a partir de dados existentes. **Nvidia Jetson** é uma plataforma de IA de borda desenvolvida pela NVIDIA, com recursos de processamento de alto desempenho e design de baixo consumo de energia, adequada para diversos dispositivos embarcados e de IoT. Ela oferece suporte a aprendizagem profunda, visão computacional e outras aplicações de IA, fornecendo poder de computação robusto e um conjunto abrangente de ferramentas de desenvolvimento. A combinação de IA Generativa e Jetson permite geração e inferência locais em tempo real de forma eficiente em dispositivos de borda.

## Geração de Texto

A geração de texto é uma tecnologia que utiliza aprendizagem profunda e modelos de linguagem de grande porte para gerar texto em linguagem natural. Esses modelos são treinados em conjuntos de dados massivos, o que lhes permite aprender o vocabulário, a gramática e a estrutura semântica da linguagem. Eles podem produzir textos fluentes e coerentes, não se limitando apenas a responder perguntas ou participar de conversas, mas também incluindo tarefas como escrever artigos, criar histórias, gerar código e traduzir idiomas. Aqui, estamos implantando algoritmos de geração de texto no Jetson para criar nosso próprio chatbot local.

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>Assistente de IA Local</font></th>
            <th class="table-trnobg"><font size={"4"}>Chatbot de Voz Local</font></th>
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
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}>Configurar uma base de conhecimento local em dispositivos Jetson com ollama e AnythingLLM.</font></td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}>Construindo um chatbot de voz operado localmente com Nvidia Riva e Meta Llama2.</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/local_ai_ssistant/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/Local_Voice_Chatbot/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## Geração de Imagem

A geração de imagem, ao interpretar descrições de texto de entrada, permite que modelos produzam imagens de alta qualidade que correspondem às descrições. Essa tecnologia tem ampla aplicação em campos como criação artística, design publicitário e desenvolvimento de jogos, possibilitando a geração automatizada de conteúdo visual que atenda às necessidades do usuário.

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>Executar um LLM Local de Texto para Imagem</font></th>
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
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}> Implantar o modelo de geração de imagem no Jetson e avaliar seu desempenho de inferência.</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/How_to_run_local_llm_text_to_image_on_reComputer/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a>
                </div>
            </td>
        </tr>
    </table>
</div>

## Geração de Áudio

A geração de áudio pode produzir áudios realistas e de alta qualidade, incluindo fala, música e efeitos sonoros, utilizando redes neurais. Ao serem treinados em extensos conjuntos de dados, esses modelos aprendem a reproduzir padrões e nuances de sons naturais, permitindo aplicações como síntese de fala, composição automática de música e criação de efeitos sonoros.

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>Geração de Legendas de Fala</font></th>
            <th class="table-trnobg"><font size={"4"}>Implantar Whisper no NVIDIA Jetson Orin</font></th>
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
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}><font size={"2"}>  Geração de legendas de fala no Jetson, que pode oferecer serviços de fala para legenda em tempo real enquanto evita vazamento de informações na internet. </font></td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}> Implantando Whisper no Jetson Orin para construir aplicações STT robustas e eficientes.</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/Real%20Time%20Subtitle%20Recoder%20on%20Nvidia%20Jetson/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/Edge/NVIDIA_Jetson/Application/Generative_AI/Whisper_on_Jetson_for_Real_Time_Speech_to_Text/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a>
                </div>
            </td>
        </tr>
    </table>
</div>

## Geração Multimodal

A tecnologia de geração multimodal combina diversas formas de dados, como texto, imagens e som, para criar conteúdo que integra múltiplos tipos de informação. Essa tecnologia utiliza modelos de aprendizagem profunda para processar e fundir dados de diferentes modalidades, resultando em conteúdo mais expressivo e diversificado. Por exemplo, modelos de texto para imagem podem gerar imagens correspondentes com base em descrições textuais, enquanto modelos de síntese de fala podem produzir fala a partir de texto e, simultaneamente, gerar imagens relacionadas. A geração multimodal apresenta amplas perspectivas de aplicação em realidade virtual, realidade aumentada e criação de conteúdo multimídia.

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>Executar VLM no reComputer</font>
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
                <font size={"2"}>  Este wiki fornece um tutorial sobre como executar VLM no reComputer J4012 Jetson Orin NX com Jetson Platform Services. </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/run_vlm_on_recomputer/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>

## Geração Aumentada por Recuperação

RAG (Retrieval-Augmented Generation) é uma tecnologia que combina mecanismos de recuperação com modelos de geração. O modelo RAG não só utiliza um modelo generativo para produzir respostas, como também incorpora técnicas de recuperação de informações para aumentar a precisão e a riqueza do conteúdo gerado, recuperando informações relevantes de grandes bases de dados. Essa tecnologia se destaca em aplicações como sistemas de perguntas e respostas, busca inteligente e geração de conteúdo. Ao aproveitar as informações recuperadas, os modelos RAG podem gerar respostas mais detalhadas e ricas em informações, melhorando assim a qualidade e a relevância do conteúdo gerado.

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>Assistente de IA Local</font>
            </th>
            <th class="table-trnobg">
                <font size={"4"}>RAG Local com LlamaIndex</font>
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
                <font size={"2"}> Configure uma base de conhecimento local em dispositivos Jetson com ollama e AnythingLLM. </font>
            </td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> Com este projeto de RAG local, é possível proteger a privacidade dos seus dados e proporcionar uma experiência de comunicação com baixa latência. </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/local_ai_ssistant/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/Local_RAG_based_on_Jetson_with_LlamaIndex/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>

## Outros

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>Fazer Fine-Tuning de LLM no Jetson</font>
            </th>
            <th class="table-trnobg">
                <font size={"4"}>LLM Quantizado com MLC</font>
            </th>
            <th class="table-trnobg">
                <font size={"4"}>Detecção Zero-Shot</font>
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
                <font size={"2"}> Faça o deploy do Llama-Factory no Nvidia Jetson e use o Llama-Factory para treinar um grande modelo de linguagem. </font>
            </td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> Fazendo o deploy do Llama2-7B quantizado com MLC LLM no Jetson Orin NX. </font>
            </td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> O serviço de IA Zero Shot Detection expõe endpoints de REST API para controlar a entrada do stream e os objetos a serem detectados. </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/Finetune_LLM_on_Jetson/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/run_zero_shot_detection_on_recomputer/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>Formatar Saída com Langchain</font>
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
                <font size={"2"}> Use Langchain para formatar a saída de grandes modelos de linguagem e faça o deploy em dispositivos de computação de borda. </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>

## Suporte Técnico & Discussão de Produto

Agradecemos por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
    <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
    <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
    <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
    <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
