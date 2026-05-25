---
description: Este wiki fornece instruções passo a passo para implantar o modelo de conversão de texto em fala Dia em dispositivos NVIDIA Jetson, demonstrando suas impressionantes capacidades de síntese de fala em tempo real. Ele abrange a instalação de dependências, ajustes de configuração e inclui uma demonstração prática usando o reComputer J4012 com Jetson Orin NX para mostrar a geração de áudio de alta qualidade.
title: Implantar Dia no reComputer Jetson
keywords:
  - reComputer
  - Jetson
  - LLM
  - Dia
  - Audio
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/deploy_deepseek.webp
slug: /deploy_dia_on_jetson
last_update:
  date: 05/16/2025
  author: Youjiang
createdAt: '2025-05-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/deploy_dia_on_jetson/
---

# Implantar Dia no reComputer Jetson

## Introdução

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>
    O rápido avanço da síntese de fala com IA possibilitou aplicações de conversão de texto em fala (TTS) em tempo real e de alta qualidade em diversos domínios. Entre elas, o Dia se destaca como um modelo de geração neural de fala eficiente e expressivo, capaz de produzir áudio com som natural com sobrecarga computacional mínima. Isso o torna particularmente adequado para implantação em dispositivos de borda, como a série NVIDIA Jetson, amplamente utilizada em aplicações de IA embarcada devido ao seu equilíbrio entre desempenho e eficiência energética.
</div>

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/dia/dia.png" />
</div>

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>
    Neste artigo, exploramos o processo de implantação do modelo Dia TTS em um dispositivo Jetson e demonstramos seu desempenho durante a inferência.
</div>


## Pré-requisitos

- Dispositivo Jetson com mais de 8 GB de memória.
- O dispositivo Jetson precisa estar pré-gravado com o sistema operacional jetpack [6.1](https://wiki.seeedstudio.com/pt-br/reComputer_Intro/) ou posterior.

:::note
Neste wiki, concluiremos as seguintes tarefas usando o [reComputer J4012 - Edge AI Computer with NVIDIA® Jetson™ Orin™ NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D), mas você também pode tentar usar outros dispositivos Jetson.
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/j4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
</div>

## Primeiros Passos

### Conexão de Hardware
- Conecte o dispositivo Jetson à rede, mouse, teclado e monitor.

:::note
Claro, você também pode acessar o dispositivo Jetson remotamente via SSH pela rede local.
:::

### Instalar Dependências

1. Faça o download e descompacte as dependências apropriadas para o seu dispositivo Jetson a partir [daqui](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ER_DifB_INZLnzTPyz6rqP8BESl1LiGtttOSojNM4G3jHA?e=AmDZv0).

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/dia/dependencies.png" />
</div>

2. No seu dispositivo Jetson, execute o seguinte comando no terminal para instalar:

```bash
pip install torch-2.7.0-cp310-cp310-linux_aarch64.whl
pip install torchaudio-2.7.0-cp310-cp310-linux_aarch64.whl
pip install triton-3.3.0-cp310-cp310-linux_aarch64.whl
```

### Baixar e Instalar o Dia

1. Clone o código-fonte do Dia no seu dispositivo Jetson usando este comando no terminal:

```bash
git clone https://github.com/nari-labs/dia.git
```

2. Edite o arquivo de instalação.

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>
    Comente as configurações relacionadas a torch, torchaudio e triton. Usando o Vim, abra pyproject.toml e desative as linhas 19–22.
</div>

```bash
cd dia
vim pyproject.toml
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/dia/comment_out.png" />
</div>

:::note
Lembre-se de salvar as alterações antes de sair.
:::

3. instale o ambiente de execução para o Dia.

```bash
pip install -e .
pip install numpy==1.26.4
```

4. inicie o Dia

```bash
export GRADIO_SERVER_NAME=0.0.0.0
python app.py
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/dia/launch.png" />
</div>

:::info
Para facilitar o acesso remoto ao Gradio WebUI, eu reconfigurei a variável de ambiente GRADIO_SERVER_NAME.
:::


## Demonstração

No vídeo de demonstração, usei o DeepSeek para gerar um diálogo apresentando a Seeed Studio e depois inseri diretamente o texto para gerar áudio com o DIA. Mesmo que meu prompt não tenha usado nenhuma técnica especial, a qualidade do áudio gerado ainda foi incrivelmente impressionante.

```txt
[S1] Hey, have you heard of Seeed Studio?
[S2] Of course! It's a company focused on open-source hardware right?
[S1] Exactly! They offer a wide range of development boards, sensor modules, and edge computing devices, perfect for makers, engineers, and developers to quickly bring their ideas to life.
[S2] Yeah, and their Grove ecosystem is really famous—its modular design makes hardware connections super easy, no messy soldering or wiring needed.
[S1] True! They also run Seeed Fusion, providing small-batch PCB manufacturing and assembly services, which is great for startups and hardware entrepreneurs.
[S2] Plus, their community and documentation are well-developed, and many of their projects are open-source, making them beginner-friendly!
[S1] In short, if you're into DIY smart hardware or IoT projects, Seeed Studio is an awesome choice!
[S2] Couldn’t agree more!
```

<div class="video-container">
    <iframe width="900" height="506" src="https://www.youtube.com/embed/g9jQzwnsHr0" title="Deploy Dia on reComputer Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referências
- https://github.com/nari-labs/dia
- https://www.deepseek.com/
- https://docs.nvidia.com/deeplearning/frameworks/index.html#installing-frameworks-for-jetson


## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer a você diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>