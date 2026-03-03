---
description: このページでは、Nvidia Jetsonプラットフォームを使用してreComputerデバイス上に生成AI技術を展開する方法を紹介します。テキスト生成、画像生成、音声生成、マルチモーダル生成、検索拡張生成を含みます。各技術の応用シナリオ、技術的特徴、関連リソースリンクを詳述し、開発者に包括的な参考資料と技術サポート情報を提供します。
title: reComputer-Jetson®による生成AI
keywords:
  - Edge
  - reComputer 
  - Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Generative_AI_Intro
last_update:
  date: 08/06/2024
  author: Youjiang
---

<div style={{textAlign:'center'}}>
    <a href="https://github.com/Seeed-Projects/jetson-examples">
        <img src="https://files.seeedstudio.com/wiki/reComputer/deploy-genai-on-jetson.png" style={{width:800, height:'auto'}}/>
    </a>
</div>

[**生成AI**](https://www.seeedstudio.com/edge-ai/generative-ai)は、既存のデータから学習することで、画像、テキスト、音声などの新しいデータを生成できる人工知能技術です。**Nvidia Jetson**は、NVIDIAが開発したエッジAIプラットフォームで、高性能処理能力と低消費電力設計を特徴とし、様々な組み込みデバイスやIoTデバイスに適しています。深層学習、コンピュータビジョン、その他のAIアプリケーションをサポートし、強力な計算能力と豊富な開発ツールセットを提供します。生成AIとJetsonの組み合わせにより、エッジデバイス上で効率的なローカルリアルタイム生成と推論が可能になります。

## テキスト生成

テキスト生成は、深層学習と大規模言語モデルを使用して自然言語テキストを生成する技術です。これらのモデルは大規模なデータセットで訓練されており、言語の語彙、文法、意味構造を学習できます。流暢で一貫性のあるテキストを生成でき、質問への回答や会話に限定されず、記事の執筆、物語の創作、コードの生成、言語翻訳などのタスクも含みます。ここでは、Jetson上にテキスト生成アルゴリズムを展開して、独自のローカルチャットボットを作成します。

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>ローカルAIアシスタント</font></th>
            <th class="table-trnobg"><font size={"4"}>ローカル音声チャットボット</font></th>
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
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}>ollamaとAnythingLLMを使用してJetsonデバイス上にローカル知識ベースを構築します。</font></td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}>Nvidia RivaとMeta Llama2を使用してローカル動作する音声チャットボットを構築します。</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/local_ai_ssistant/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Local_Voice_Chatbot/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## 画像生成

画像生成は、入力されたテキスト記述を解釈することで、記述に一致する高品質な画像をモデルが生成することを可能にします。この技術は、芸術創作、広告デザイン、ゲーム開発などの分野で幅広く応用されており、ユーザーのニーズに合った視覚的コンテンツの自動生成を実現します。

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>ローカルLLMテキスト-画像変換の実行</font></th>
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
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}> Jetson上に画像生成モデルをデプロイし、その推論性能を評価します。</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/How_to_run_local_llm_text_to_image_on_reComputer/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a>
                </div>
            </td>
        </tr>
    </table>
</div>

## 音声生成

音声生成は、ニューラルネットワークを使用して、音声、音楽、効果音を含む高品質で現実的な音声を生成することができます。広範なデータセットでトレーニングすることにより、これらのモデルは自然な音のパターンとニュアンスを複製することを学習し、音声合成、自動音楽作曲、効果音作成などのアプリケーションを可能にします。

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>音声字幕生成</font></th>
            <th class="table-trnobg"><font size={"4"}>NVIDIA Jetson OrinでのWhisperデプロイ</font></th>
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
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}><font size={"2"}>  Jetsonでの音声字幕生成は、インターネット上での情報漏洩を回避しながら、リアルタイムの音声から字幕へのサービスを提供できます。 </font></td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}> Jetson Orin上でWhisperをデプロイして、堅牢で効率的なSTTアプリケーションを構築します。</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Real%20Time%20Subtitle%20Recoder%20on%20Nvidia%20Jetson/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Edge/NVIDIA_Jetson/Application/Generative_AI/Whisper_on_Jetson_for_Real_Time_Speech_to_Text/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a>
                </div>
            </td>
        </tr>
    </table>
</div>

## マルチモーダル生成

マルチモーダル生成技術は、テキスト、画像、音声などの様々な形式のデータを組み合わせて、複数の種類の情報を統合したコンテンツを作成します。この技術は深層学習モデルを使用して異なるモダリティからのデータを処理・融合し、より表現力豊かで多様なコンテンツを生成します。例えば、テキストから画像への変換モデルはテキストの説明に基づいて対応する画像を生成でき、音声合成モデルはテキストから音声を生成すると同時に関連する画像を生成できます。マルチモーダル生成は、バーチャルリアリティ、拡張現実、マルチメディアコンテンツ作成において幅広い応用の可能性を示しています。

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>reComputer上でVLMを実行</font>
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
                <font size={"2"}>  このwikiでは、Jetson Platform ServicesでreComputer J4012 Jetson Orin NX上でVLMを実行する方法のチュートリアルを提供します。 </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/run_vlm_on_recomputer/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>

## 検索拡張生成

RAG（Retrieval-Augmented Generation）は、検索メカニズムと生成モデルを組み合わせた技術です。RAGモデルは、生成モデルを使用して応答を生成するだけでなく、情報検索技術を組み込んで、大規模データベースから関連情報を検索することで、生成されるコンテンツの精度と豊富さを向上させます。この技術は、質問応答システム、インテリジェント検索、コンテンツ生成などのアプリケーションで優れた性能を発揮します。検索された情報を活用することで、RAGモデルはより詳細で情報豊富な応答を生成でき、生成されるコンテンツの品質と関連性を向上させることができます。

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>ローカルAIアシスタント</font>
            </th>
            <th class="table-trnobg">
                <font size={"4"}>LlamaIndexを使用したローカルRAG</font>
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
                <font size={"2"}> ollamaとAnythingLLMを使用してJetsonデバイス上にローカル知識ベースを構築します。 </font>
            </td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> このローカルRAGプロジェクトにより、データプライバシーを保護し、低遅延の通信体験を提供できます。 </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/local_ai_ssistant/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Local_RAG_based_on_Jetson_with_LlamaIndex/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>

## その他

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>Jetson上でのLLMファインチューニング</font>
            </th>
            <th class="table-trnobg">
                <font size={"4"}>MLCによる量子化LLM</font>
            </th>
            <th class="table-trnobg">
                <font size={"4"}>ゼロショット検出</font>
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
                <font size={"2"}> Nvidia Jetson上にLlama-Factoryをデプロイし、Llama-Factoryを使用して大規模言語モデルを訓練します。 </font>
            </td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> Jetson Orin NX上でMLC LLMを使用して量子化されたLlama2-7Bをデプロイします。 </font>
            </td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> Zero Shot Detection AIサービスは、ストリーム入力と検出するオブジェクトを制御するREST APIエンドポイントを公開します。 </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Finetune_LLM_on_Jetson/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/run_zero_shot_detection_on_recomputer/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>Langchainによる出力フォーマット</font>
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
                <font size={"2"}> Langchainを使用して大規模言語モデルの出力をフォーマットし、エッジコンピューティングデバイスにデプロイします。 </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson/" target="_blank" rel="noopener noreferrer">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
    <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
    <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
    <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
    <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
