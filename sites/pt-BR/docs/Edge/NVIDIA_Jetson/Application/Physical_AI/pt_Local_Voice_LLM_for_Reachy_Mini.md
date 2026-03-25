---
description: Este wiki detalha como implantar e operar um assistente robótico de voz totalmente local e interativo usando a combinação de hardware do reComputer Mini J501 e Reachy Mini Lite. O guia explica a instalação do servidor Ollama, a configuração de modelos de voz locais e de aplicativos de conversação, alcançando, em última análise, um sistema de conversação por voz offline e de baixa latência que não exige conexão com a internet. Ele apresenta um projeto completo de ponta a ponta, abrangendo configuração de hardware, implantação de software e uma demonstração final do sistema em funcionamento.
title: Implante um LLM de voz local no reComputer Mini para o Reachy Mini!
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/world_frame.webp
slug: /local_voice_llm_on_recomputer_jetson_for_reachy_mini_bk
sku: E2025123101
last_update:
  date: 01/06/2026
  author: youjiang
createdAt: '2026-01-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/local_voice_llm_on_recomputer_jetson_for_reachy_mini_bk/
---

Double Mini! Este projeto irá construir um sistema de assistente robótico interativo por voz totalmente local, de baixa latência e com alta privacidade. Com foco no dispositivo de computação de borda reComputer Mini J501, ele implanta serviços locais de reconhecimento de fala, modelo de linguagem de grande porte e síntese de fala. Usando a plataforma robótica open-source Reachy Mini como terminal físico para interação humano-computador, ele alcança uma experiência de interação inteligente incorporada que é perceptiva, conversacional e acionável.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/workflow.png" />
</div>

## Pré-requisitos
- Kit reComputer Mini J501
- Reachy Mini Lite

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> Kit reComputer Mini J501 </th>
        <th> Reachy Mini Lite </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100020039-recomputer-mini-j501---carrier-board-for-jetson-agx-orin.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/world_frame.png" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.pollen-robotics.com/reachy-mini/#order">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

:::info
Certifique-se de que seu dispositivo Jetson inclua a [carrier board](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html), o módulo Jetson e o [sistema de refrigeração](https://www.seeedstudio.com/reComputer-Mini-J501-heatsink-with-fan-p-6605.html), e que o sistema operacional JP6.2 esteja instalado.
:::

:::info
Antes de configurar o software, conecte o Reachy Mini à porta Type-A do reComputer Mini J501.
:::


## Implantar aplicativos de software

**Passo 1.** Instale e execute o servidor de inferência ollama no reComputer Jetson.

Execute o seguinte comando na janela do terminal (`Ctrl + Alt + T`) no reComputer Jetson.

```bash
# Install Ollama (visit https://ollama.ai for platform-specific instructions)
curl -fsSL https://ollama.com/install.sh | sh

# Pull the required model
ollama pull llama3.2-vision:11b
```
:::note
O download do modelo levará aproximadamente 10 minutos. Aguarde pacientemente.
:::

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/ollama.png" />
</div>

**Passo 2.** Instale o aplicativo de conversação.

Execute o seguinte comando na janela do terminal no reComputer Jetson.

:::note
Se você quiser configurar o ambiente de execução em um ambiente virtual conda, use o comando `conda activate <name>` para ativar o ambiente de destino antes de executar os seguintes comandos de instalação.
:::

```bash
cd Downloads
git clone https://github.com/Seeed-Projects/reachy-mini-loacl-conversation.git
cd reachy-mini-loacl-conversation
pip install -r requirements.txt -i https://pypi.jetson-ai-lab.io/
pip install "reachy-mini"
```

:::info
Consulte [aqui](https://github.com/Seeed-Projects/reachy-mini-loacl-conversation/tree/master) para mais informações de instalação.
:::


**Passo 3.** Inicie o aplicativo.

Execute o seguinte comando na janela do terminal no reComputer Jetson para iniciar o daemon do Reachy Mini.

```bash
reachy-mini-daemon
```

Abra outro terminal e execute:

```bash
# Set environment variables
export OLLAMA_HOST="http://localhost:11434"
export OLLAMA_MODEL="qwen2.5:7b"
export COQUI_MODEL_NAME="tts_models/zh-CN/baker/tacotron2-DDC-GST"
export DEFAULT_VOLUME="1.5"

# Start the voice assistant
python main.py
```
<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/launch_app.png" />
</div>

:::info
Aqui, um modelo em chinês é usado para a demonstração. Você pode substituí-lo por modelos em outros idiomas de acordo com suas necessidades.
:::


## Demonstração do efeito

Depois que o programa iniciar normalmente, podemos usar as teclas `R` e `S` no teclado para controlar o início e o fim da gravação. Quando a gravação for interrompida, o programa chamará o modelo de linguagem de grande porte local para gerar uma resposta.

<div class="video-container">
  <iframe width="801" height="450" src="https://www.youtube.com/embed/broyI7PLm_g" title="Double Mini! Deploy local voice LLM on reComputer Mini for Reachy Mini!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referências

- https://ollama.com/download/linux
- https://github.com/modelscope/FunASR
- https://github.com/coqui-ai/TTS
- https://github.com/Seeed-Projects/reachy-mini-loacl-conversation/

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
