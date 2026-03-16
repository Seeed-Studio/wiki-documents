---
description: Este wiki orienta você na implantação de modelos DeepSeek em dispositivos reComputer Jetson usando Ollama, demonstrando inferência de IA eficiente com consumo mínimo de energia.
title: Implante rapidamente o DeepSeek no reComputer Jetson
keywords:
  - reComputer
  - LLM
  - ollama
  - deepseek
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/deepseek.webp
slug: /deploy_deepseek_on_jetson
last_update:
  date: 02/08/2025
  author: Youjiang
createdAt: '2025-02-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/deploy_deepseek_on_jetson/
---


# Implante rapidamente o DeepSeek no reComputer Jetson

## Introdução

DeepSeek é um conjunto de modelos de IA de ponta, otimizados para eficiência, precisão e processamento em tempo real. Com otimizações avançadas para computação de borda, o DeepSeek permite inferência de IA rápida e com baixa latência diretamente em dispositivos Jetson, reduzindo a dependência da computação em nuvem enquanto maximiza o desempenho.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/deepseek.png" />
</div>

Este wiki fornece um guia passo a passo para implantar modelos [DeepSeek](https://www.deepseek.com/) em dispositivos reComputer Jetson para uma inferência de IA eficiente na borda.

## Pré-requisitos

- Dispositivo Jetson com mais de 8 GB de memória.
- O dispositivo Jetson precisa estar pré-gravado com o sistema operacional jetpack [5.1.1](https://wiki.seeedstudio.com/pt-br/reComputer_Intro/) ou posterior.

:::note
Neste wiki, concluiremos as seguintes tarefas usando o [reComputer J4012 - Edge AI Computer with NVIDIA® Jetson™ Orin™ NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D), mas você também pode experimentar usando outros dispositivos Jetson.
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/j4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Primeiros Passos

### Conexão de Hardware
- Conecte o dispositivo Jetson à rede, mouse, teclado e monitor.

:::note
Claro, você também pode acessar remotamente o dispositivo Jetson via SSH pela rede local.
:::

### Instalar o mecanismo de inferência Ollama

Ollama é um mecanismo de inferência leve e eficiente, projetado para executar modelos de linguagem grande (LLMs) localmente com configuração mínima. Ele simplifica a implantação de modelos de IA fornecendo uma interface fácil de usar e um ambiente de execução otimizado para várias configurações de hardware, incluindo dispositivos Jetson.

Para instalar o Ollama, abra a janela do terminal no dispositivo Jetson e execute o seguinte comando:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/install_ollama.png" />
</div>

Esse script fará automaticamente o download e a configuração do Ollama em seu sistema, permitindo uma inferência local contínua para aplicações de IA.

### Carregar e executar o DeepSeek

O Ollama agora oferece suporte a várias versões dos modelos DeepSeek, permitindo que implantemos diferentes tamanhos de modelo com base em nossas necessidades. Para fins de demonstração, usaremos o modelo padrão DeepSeek-R1 7B.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/ollama_deepseek.png" />
</div>

```bash
ollama run deepseek-r1
```
Este comando baixa e prepara o modelo DeepSeek para inferência local usando o Ollama.
Quando o carregamento do modelo for concluído, você poderá inserir sua consulta na janela do terminal.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/load_model.png" />
</div>

## Demonstração de Efeito

No vídeo de demonstração, o dispositivo Jetson opera com apenas 20 W e ainda assim atinge uma impressionante velocidade de inferência.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/7EYq9Y8Jp8o" title="deploy deepseek on jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referências
- https://www.deepseek.com/
- https://ollama.com/library/deepseek-r1
- https://wiki.seeedstudio.com/pt-br/local_ai_ssistant/
- https://www.seeedstudio.com/tag/nvidia.html


## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>