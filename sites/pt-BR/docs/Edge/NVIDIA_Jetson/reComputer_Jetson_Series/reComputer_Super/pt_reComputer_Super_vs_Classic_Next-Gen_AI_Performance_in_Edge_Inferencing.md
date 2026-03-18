---
description: Este artigo destaca o desempenho superior de IA do reComputer Super em comparação com o reComputer Classic, demonstrando até 1,7x de aumento na capacidade de computação de IA com o NVIDIA Jetson Orin NX 16GB. Por meio de benchmarks práticos em geração de texto com IA usando o modelo DeepSeek-R1:7B com Ollama e processamento de vídeo com IA usando o modelo de detecção de objetos YOLOv11, os resultados mostram que o reComputer Super oferece velocidades de inferência significativamente mais rápidas e frequências de GPU mais altas. Notavelmente, ele processa aproximadamente 2,37 vezes mais imagens por segundo do que o Classic. O artigo também explica a importância de avaliar o desempenho com base no FPS reportado pelo terminal, em vez do FPS na tela, que pode ser limitado por fatores de exibição e do sistema.
title: reComputer Super vs Classic Desempenho de IA de Próxima Geração em Inferência de Borda
tags:
  - reComputer Super
  - Super
  - deepseek
  - yolo
  - Jetson
  - AI
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/recomputer-super_robotics_2.webp
slug: /recomputer_jetson_super_performance
last_update:
  date: 06/04/2025
  author: Zibo
createdAt: '2025-06-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_jetson_super_performance/
---


<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super.png"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira o seu agora 🖱️</font></span></strong>
</a></div>

## Introdução

<div style={{ textAlign: "justify" }}>
A reComputer Super Série turbina a reComputer Classic, oferecendo até 1,7x de aumento, chegando a 157 TOPS em desempenho de IA. Este wiki compara as diferenças de desempenho entre o reComputer Super e o reComputer Classic em geração de texto com IA e processamento de vídeo com IA. Usando o <a href="https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html" target="_blank">módulo NVIDIA Jetson Orin NX 16GB</a> como plataforma de teste, demonstra claramente que o reComputer Super oferece desempenho superior em comparação com o reComputer Classic.
</div>

## Geração de Texto com IA

<div style={{ textAlign: "justify" }}>
Nesta seção, usamos o Ollama para carregar o modelo deepseek-r1:7b e comparamos a velocidade de inferência do modelo em diferentes dispositivos. É evidente que o reComputer Super apresenta uma melhoria na velocidade de inferência e na frequência da GPU em relação ao reComputer Classic.
</div>

:::info
As principais etapas para implantar este modelo são:

**Etapa 1.** Instalar o jetson-containers.

**Etapa 2.** Entrar no contêiner Docker para executar o serviço Ollama.

**Etapa 3.** Fazer o pull do modelo deepseek-r1:7b a partir do Ollama.
:::

<div class="video-container">
<iframe width="682" height="480" src="https://www.youtube.com/embed/nD1w-odV-ZU" title="Deepseek Inference on reComputer Classic and reComputer Super" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div style={{ textAlign: "justify" }}>
Para facilitar a demonstração, inserimos "tell me a story." no terminal e pedimos ao DeepSeek para gerar uma pequena história para nós. Devido à aleatoriedade dos resultados de geração produzidos pelo modelo, os resultados que obtemos geralmente não serão os mesmos. Podemos medir o desempenho da inferência do dispositivo com base na velocidade com que o modelo gera tokens. (Conforme demonstrado no vídeo, o indicador `eval rate` é utilizado)
</div>

:::note
Se você também quiser implantar o Ollama no seu dispositivo Jetson, consulte [este tutorial](https://www.jetson-ai-lab.com/tutorial_ollama.html) para aprender como implantá‑lo rapidamente no Nvidia Jetson.
:::

## Processamento de Vídeo com IA

<div style={{ textAlign: "justify" }}>
Nesta seção, implantamos o modelo de detecção de objetos YOLOv11 em dois dispositivos e comparamos as diferenças de desempenho entre eles ao processar entradas de vídeo. Os resultados indicam que o reComputer Super é capaz de processar aproximadamente 2,37 vezes mais imagens por segundo do que o reComputer Classic.
</div>

:::info
Consulte [este repositório](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11) para implantar o YOLOv11 em seus dispositivos como nós fizemos.
As principais etapas para implantar este modelo são:

**Etapa 1.** Fazer o clone deste [repositório GitHub](https://github.com/wang-xinyu/tensorrtx/tree/master).

**Etapa 2.** Baixar o arquivo de pesos pré‑treinados yolo11n.pt a partir do [ultralytics](https://github.com/ultralytics/ultralytics).

**Etapa 3.** Seguir [este repositório](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11) para compilar o modelo e executar a inferência.

**Etapa 4.** Seguimos o script yolo11_det_trt.py neste [repositório](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11) para executar a inferência.
:::

<div class="video-container">
<iframe width="682" height="480" src="https://www.youtube.com/embed/ELbltFieez4" title="Yolo Inference on reComputer Classic and reComputer Super" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
O FPS médio exibido no terminal reflete a velocidade de inferência pura do modelo, indicando diretamente a diferença na capacidade de computação do dispositivo, por isso o reComputer Super apresenta um FPS significativamente maior. No entanto, o FPS em tempo real exibido no canto superior esquerdo da janela de exibição representa a taxa de quadros de todo o pipeline de processamento, incluindo captura de imagem, pré‑processamento, inferência, pós‑processamento e exibição. Esse FPS é afetado por múltiplos fatores, como taxa de quadros da câmera, taxa de atualização da tela e limites de taxa de quadros do programa, fazendo com que o FPS exibido em ambos os dispositivos seja semelhante e masque a diferença de desempenho de inferência. Portanto, o desempenho do dispositivo deve ser avaliado com base no FPS médio de inferência exibido no terminal, em vez de se basear apenas no FPS apresentado em tempo real na tela.
:::

## Referências

- https://www.jetson-ai-lab.com/tutorial_ollama.html
- https://www.deepseek.com/
- https://wiki.seeedstudio.com/pt-br/deploy_deepseek_on_jetson/
- https://www.seeedstudio.com/edge-ai/generative-ai
- https://github.com/ultralytics/ultralytics
- https://github.com/wang-xinyu/tensorrtx?tab=readme-ov-file

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
