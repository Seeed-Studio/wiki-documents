---
description: Este wiki fornece um tutorial sobre como usar o Llava no reComputer Industrial J4012 para monitorar o seu armazém e controlar as cores da luz de aviso via RS485, ajudando a garantir a segurança do armazém.
title: Use Llava para proteger seu armazém
keywords:
  - Multimodal
  - LLava
  - RS485
  - VLM
image: https://files.seeedstudio.com/wiki/reComputer-Industrial/reComputer-Industrial-J4012.webp
slug: /vlm
last_update:
  date: 10/10/2025
  author: Jiahao Li
createdAt: '2025-10-11'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/vlm/
---

# Como usar o LLaVa no reComputer Industrial J4012 para monitorar seu armazém

## Introdução

Este wiki descreve a implantação de um VLM (Visual Learning Model) no [reComputer Industrial J4012](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html), usando uma câmera USB como entrada para o VLM. Quando o sistema detecta uma situação segura, a luz de sinalização ficará verde por meio do controle RS485. Em situações perigosas, como um incêndio ou a presença de alguém com uma arma, a luz de sinalização ficará amarela. Quando o sensor de luz detectar o sinal de que a luz do armazém foi apagada via RS485, a luz de sinalização ficará vermelha.

## Pré-requisitos

<div align="center">
    <img width={800}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110191.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

> **Observação sobre os componentes necessários:**
> Além do Jetson, são necessários os seguintes componentes RS485:
>
> - Um hub RS485 para dividir uma interface em duas.
> - Uma luz de sinalização RS485 com mudança de cor.
> - Um sensor de luz RS485.

## Inicializar o ambiente do sistema

1. Após instalar o sistema inicial com o JP6, você precisa verificar a instalação do `CUDA` e de outras bibliotecas. Você pode verificá-las e instalá-las executando `sudo apt-get install nvidia-jetpack`.

2. Instale o [ollama](https://ollama.com/download) usando um comando como o abaixo:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

3. Execute o [LLaVa](https://ollama.com/library/llava-llama3) com o ollama como abaixo:

```bash
ollama run llava-llama3:8b
```

## Instalar o projeto

1. Use um comando como o abaixo para instalar o uv

```bash
pip install uv
```

2. Clonar o projeto

```bash
git clone https://github.com/Seeed-Projects/VLM-Guard.git
```

3. Use o uv para sincronizar o ambiente

```bash
cd VLM_Guard
uv sync
source .venv/bin/activate
```

## Executar o projeto

1. Use o script abaixo para executar o projeto.

```bash
./start_demo.sh
```

2. Abra um navegador web e, em seguida, digite `localhost:5002` para abrir a interface da aplicação

## Resultado

Conforme demonstrado no vídeo, a luz do armazém indica verde durante as operações normais, amarelo em situações perigosas, como quando alguém está segurando uma faca, e vermelho quando o sensor de luz não detecta nenhuma luz — indicando uma falha na iluminação do armazém, além de permitir a interação com dados históricos e consultas por meio do modelo VLM para obter as informações desejadas.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/J0sS-1zQid8?list=PLpH_4mf13-A1EnNUgEMTsy2PxejFllSGM" title="Build a Local AI Watchdog for Industrial Safety with reComputer J4012 powered by NVIDIA Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
