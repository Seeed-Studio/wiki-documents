---
description: O que é TinyML
title: O que é TinyML
keywords:
  - Wio_terminal Kit_with_Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-TinyML
sku: 114992774
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-TinyML/
---

# O que é TinyML?

ML, como você talvez já tenha imaginado, significa Machine Learning e, na maioria dos casos hoje em dia (embora nem sempre), refere-se a Deep Learning. Tiny em TinyML significa que os modelos de ML são otimizados para rodar em dispositivos de consumo de energia muito baixo e de tamanho reduzido, como vários MCUs. É um subconjunto de ML na Borda ou Machine Learning Embarcado.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/81nihP0ASSL.jpg" /></div>

Dispositivos embarcados vêm em todos os tipos de formas e tamanhos, desde o “supercomputador embarcado” Nvidia Jetson Xavier AGX até os menores microcontroladores, por exemplo ESP32 ou Cortex M0.

<img width={200} align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/1-750x750.jpg" />

<img width={350} align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/xavier-module-dev-kit-3qrtr-1945px.png" />

Por que o ML embarcado em microcontroladores é colocado em uma categoria especial e até recebe um nome legal próprio?

Porque ele vem com seu próprio conjunto de vantagens e limitações. O atrativo do TinyML é, na verdade, que MCUs são onipresentes, pequenos, consomem pouca energia e são relativamente baratos.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/Seeeduino-XIAO-pinout.jpg" /></div>

Pegue o ARM Cortex M0+ e a pequena placa [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html), que é construída ao seu redor – a placa é tão pequena quanto um polegar (21×17.8mm), consome apenas 1.33 mAh de energia (o que significa que pode funcionar por ~112 horas com uma bateria de 150 mA, muito mais se colocada em deep sleep) e custa apenas 4,3 USD.

Graças aos avanços recentes em otimização de modelos e ao surgimento de frameworks criados especificamente para executar inferência de modelos de machine learning em microcontroladores, tornou-se possível dar mais inteligência a esses dispositivos minúsculos. Agora podemos implantar redes neurais em microcontroladores para reconhecimento de cenas de áudio (por exemplo atividade de elefantes ou som de vidro se quebrando), detecção de hot-word (para ativar o dispositivo com uma frase específica) ou até mesmo para tarefas simples de reconhecimento de imagens. Os dispositivos com microcontroladores embarcados podem ser usados para dar nova vida e significado a sensores antigos, como usar um acelerômetro instalado em um mecanismo para detecção de anomalias e manutenção preditiva – ou para distinguir vários tipos de licores como neste [demo](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Edge-Impulse-Distinguish-Alochol/)!
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg" /></div>
As possibilidades do TinyML são realmente enormes.
<br />

E quanto às limitações? O principal fator limitante é o tamanho de RAM/FLASH dos MCUs – não importa o quão bem você otimize, você não conseguiria colocar [aquele YOLO9999](https://arxiv.org/abs/1612.08242) em um microcontrolador minúsculo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/yolo9000-pr023-1-638.jpg" /></div>

O mesmo vale para reconhecimento automático de fala – enquanto uma hot word simples (ou detecção de comando de voz) é possível, o reconhecimento de fala de domínio aberto está fora do alcance dos MCUs. Por enquanto.

A equipe Seeed EDU elaborou um curso definitivo, passo a passo, sobre como começar com TinyML usando o Wio Terminal.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL5efXgSvwk9UCtJ6JKTyWAccSVfTXSlA3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Você pode baixar o curso em formato PDF e os materiais do curso clicando nos links abaixo. Além disso, você pode encontrar projetos independentes publicados anteriormente no blog da Seeed studio e no site Hackster.io - tanto os projetos do curso quanto os projetos independentes fazem uso da Arduino IDE para programar os dispositivos e de uma combinação de Edge Impulse e Tensorflow Lite for Microcontrollers para o treinamento e a inferência dos modelos.

:::note
A principal diferença entre o curso e os projetos independentes é que o curso tem como objetivo principal ser usado por professores de STEM como base para o desenvolvimento de seus próprios materiais didáticos ou como material de aula pronto para uso, enquanto os projetos independentes são para makers e hackers explorarem e aprimorarem.
:::

[Edge Impulse](https://www.edgeimpulse.com) é uma plataforma de desenvolvimento fácil de usar para machine learning em dispositivos de borda, fornecendo uma interface web amigável para iniciantes (e ainda assim poderosa) e um conjunto de ferramentas para todo o pipeline TinyML, desde a coleta de dados até a implantação do modelo.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/index.png" /></div>

[Tensorflow Lite for Microcontrollers](https://www.tensorflow.org/lite/microcontrollers/get_started), por outro lado, embora tenha uma curva de aprendizado mais íngreme, permite que você implemente seu próprio pipeline de treinamento e inferência de modelos.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/tensorflow-lite-logo-social.png" /></div>

## Curso TinyML com Wio Terminal

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/1.png" /></div>

##### Baixar PDF

[PDF do curso TinyML com Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/TinyML_with_Wio_Terminal_Course_v1-3.pdf)

##### Baixar materiais do curso

[Seeed_Arduino_WioTerminal_TinyML_Course-1.0.zip](https://github.com/Seeed-Studio/Seeed_Arduino_WioTerminal_TinyML_Course/archive/refs/tags/1.0.zip)

##### Repositório Github com materiais do curso

[Github do curso TinyML com Wio Terminal](https://github.com/Seeed-Studio/Seeed_Arduino_WioTerminal_TinyML_Course)

## Programação sem código para começar com TinyML

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/cc_tinyml_2.png" /></div>

Projetado para apresentar iniciantes aos conceitos básicos de Machine Learning Embarcado com Wio Terminal e programação gráfica Codecraft.

##### Baixar PDF

[PDF do curso Programação sem código para começar com TinyML](https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/No-code_Programming_to_Get_Started_with_TinyML.pdf)

## Suporte Técnico & Discussão sobre o Produto


Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
