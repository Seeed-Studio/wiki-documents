---
description: Esta página presenta cómo desplegar tecnologías de IA generativa en dispositivos reComputer utilizando la plataforma Nvidia Jetson, incluyendo generación de texto, generación de imágenes, generación de audio, generación multimodal y generación aumentada por recuperación. Detalla los escenarios de aplicación, características técnicas y enlaces de recursos relevantes para cada tecnología, proporcionando a los desarrolladores materiales de referencia completos e información de soporte técnico.
title: IA Generativa con reComputer-Jetson®
keywords:
  - Edge
  - reComputer 
  - Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Generative_AI_Intro
last_update:
  date: 08/06/2024
  author: Youjiang
---

<div style={{textAlign:'center'}}>
    <a href="https://github.com/Seeed-Projects/jetson-examples">
        <img src="https://files.seeedstudio.com/wiki/reComputer/deploy-genai-on-jetson.png" style={{width:800, height:'auto'}}/>
    </a>
</div>

[**IA Generativa**](https://www.seeedstudio.com/edge-ai/generative-ai) es una tecnología de inteligencia artificial que puede generar nuevos datos, como imágenes, texto o audio, aprendiendo de datos existentes. **Nvidia Jetson** es una plataforma de IA de borde desarrollada por NVIDIA, que cuenta con capacidades de procesamiento de alto rendimiento y diseño de bajo consumo, adecuada para varios dispositivos embebidos e IoT. Soporta aprendizaje profundo, visión por computadora y otras aplicaciones de IA, ofreciendo potentes capacidades de cómputo y un conjunto rico de herramientas de desarrollo. La combinación de IA Generativa y Jetson permite generación e inferencia local eficiente en tiempo real en dispositivos de borde.

## Generación de Texto

La generación de texto es una tecnología que utiliza aprendizaje profundo y modelos de lenguaje grandes para generar texto en lenguaje natural. Estos modelos se entrenan en conjuntos de datos masivos, permitiéndoles aprender el vocabulario, gramática y estructura semántica del lenguaje. Pueden producir texto fluido y coherente, no solo limitado a responder preguntas o participar en conversaciones, sino también incluyendo tareas como escribir artículos, crear historias, generar código y traducir idiomas. Aquí, estamos desplegando algoritmos de generación de texto en Jetson para crear nuestro propio chatbot local.

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>Asistente de IA Local</font></th>
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
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}>Configurar una base de conocimiento local en dispositivos Jetson con ollama y AnythingLLM.</font></td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}>Construir un chatbot de voz operado localmente con Nvidia Riva y Meta Llama2.</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/local_ai_ssistant/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprender Más</font></span></strong></a></div></td>
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Local_Voice_Chatbot/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprender Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## Generación de Imágenes

La generación de imágenes, al interpretar descripciones de texto de entrada, permite a los modelos producir imágenes de alta calidad que coinciden con las descripciones. Esta tecnología tiene aplicaciones amplias en campos como la creación artística, diseño publicitario y desarrollo de juegos, permitiendo la generación automatizada de contenido visual que satisface las necesidades del usuario.

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>Ejecutar un LLM Local de Texto a Imagen</font></th>
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
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}> Desplegar el modelo de generación de imágenes en Jetson y evaluar su rendimiento de inferencia.</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/How_to_run_local_llm_text_to_image_on_reComputer/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprender Más</font></span></strong></a>
                </div>
            </td>
        </tr>
    </table>
</div>

## Generación de Audio

La generación de audio puede producir audio de alta calidad y realista, incluyendo habla, música y efectos de sonido, utilizando redes neuronales. Al entrenar con extensos conjuntos de datos, estos modelos aprenden a replicar patrones de sonido naturales y matices, habilitando aplicaciones como síntesis de voz, composición musical automatizada y creación de efectos de sonido.

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>Generación de Subtítulos de Voz</font></th>
            <th class="table-trnobg"><font size={"4"}>Desplegar Whisper en NVIDIA Jetson Orin</font></th>
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
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}><font size={"2"}>  Generación de Subtítulos de Voz en Jetson, que puede ofrecer servicios de voz a subtítulos en tiempo real mientras evita la fuga de información en internet. </font></td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}> Desplegando Whisper en el Jetson Orin para construir aplicaciones STT robustas y eficientes.</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Real%20Time%20Subtitle%20Recoder%20on%20Nvidia%20Jetson/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Edge/NVIDIA_Jetson/Application/Generative_AI/Whisper_on_Jetson_for_Real_Time_Speech_to_Text/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a>
                </div>
            </td>
        </tr>
    </table>
</div>

## Generación Multimodal

La tecnología de generación multimodal combina varias formas de datos, como texto, imágenes y sonido, para crear contenido que integra múltiples tipos de información. Esta tecnología utiliza modelos de aprendizaje profundo para procesar y fusionar datos de diferentes modalidades, resultando en contenido más expresivo y diverso. Por ejemplo, los modelos de texto a imagen pueden generar imágenes correspondientes basadas en descripciones textuales, mientras que los modelos de síntesis de voz pueden producir habla a partir de texto y simultáneamente generar imágenes relacionadas. La generación multimodal muestra amplias perspectivas de aplicación en realidad virtual, realidad aumentada y creación de contenido multimedia.

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>Ejecutar VLM en reComputer</font>
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
                <font size={"2"}>  Esta wiki proporciona un tutorial sobre cómo ejecutar VLM en reComputer J4012 Jetson Orin NX con Jetson Platform Services. </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/run_vlm_on_recomputer/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>

## Generación Aumentada por Recuperación

RAG (Retrieval-Augmented Generation) es una tecnología que combina mecanismos de recuperación con modelos de generación. El modelo RAG no solo utiliza un modelo generativo para producir respuestas, sino que también incorpora técnicas de recuperación de información para mejorar la precisión y riqueza del contenido generado mediante la recuperación de información relevante de grandes bases de datos. Esta tecnología sobresale en aplicaciones como sistemas de preguntas y respuestas, búsqueda inteligente y generación de contenido. Al aprovechar la información recuperada, los modelos RAG pueden generar respuestas más detalladas y ricas en información, mejorando así la calidad y relevancia del contenido generado.

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>Asistente de IA Local</font>
            </th>
            <th class="table-trnobg">
                <font size={"4"}>RAG Local con LlamaIndex</font>
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
                <font size={"2"}> Configurar una base de conocimiento local en dispositivos Jetson con ollama y AnythingLLM. </font>
            </td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> Con este proyecto RAG local, puede proteger la privacidad de sus datos y proporcionarle una experiencia de comunicación de baja latencia. </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/local_ai_ssistant/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Local_RAG_based_on_Jetson_with_LlamaIndex/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>

## Otros

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>Ajuste fino de LLM en Jetson</font>
            </th>
            <th class="table-trnobg">
                <font size={"4"}>LLM Cuantizado con MLC</font>
            </th>
            <th class="table-trnobg">
                <font size={"4"}>Detección Zero-Shot</font>
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
                <font size={"2"}> Despliega Llama-Factory en Nvidia Jetson y usa Llama-Factory para entrenar un modelo de lenguaje grande. </font>
            </td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> Desplegando el Llama2-7B cuantizado con MLC LLM en el Jetson Orin NX. </font>
            </td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> El servicio de IA de Detección Zero Shot expone endpoints de API REST para controlar la entrada de flujo y los objetos a detectar. </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Finetune_LLM_on_Jetson/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/run_zero_shot_detection_on_recomputer/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>Formatear Salida con Langchain</font>
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
                <font size={"2"}> Usa Langchain para formatear la salida de modelos de lenguaje grandes y desplegarlo en dispositivos de computación en el borde. </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
    <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
    <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
    <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
    <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
