---
description: visão geral da relação entre JetPack e Jetson
title: Visão Geral da Relação Entre JetPack e Jetson
keywords:
  - jetson
  - jetpack
  - L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /overview_of_the_relationship_between_jetpack_and_jetson
last_update:
  date: 06/05/2025
  author: Dayu
createdAt: '2025-06-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/overview_of_the_relationship_between_jetpack_and_jetson/
---

Este wiki fornece uma breve introdução aos componentes do JetPack, ajudando você a entender rapidamente a relação entre JetPack e Jetson, e respondendo a algumas das perguntas mais frequentes.

## 1. Do que o JetPack é composto?
JetPack é um conjunto de pacotes de software que inclui dois componentes principais: 

**① L4T (Linux for Tegra).** L4T é uma distribuição Linux de middleware personalizada para plataformas de hardware Jetson. Ela é composta por: 

- Sistema de arquivos raiz Ubuntu

- Kernel Linux (com patches da NVIDIA)

- Drivers (GPU, ISP, CSI, I2C, etc.)

- Firmware (Bootloader, UEFI, U-Boot, initrd)

- BSP (Pacote de Suporte à Placa) incluindo árvores de dispositivo, configurações de boot e ferramentas de gravação

- e mais

**② JetPack SDK.** Esta é a camada superior de software que fornece principalmente ferramentas de desenvolvimento de aplicações, incluindo: 

- CUDA Toolkit

- cuDNN (Biblioteca de Deep Learning)

- TensorRT (Motor de Inferência de Modelo de IA)

- e mais

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.png"/></div>

## 2. Qual é a relação entre JetPack e Ubuntu?

Conforme descrito na primeira resposta acima, o Ubuntu é parte do JetPack. Cada versão do JetPack inclui uma versão específica do Ubuntu. Nossas versões do JetPack incluem as seguintes versões do Ubuntu:

| Versão do JetPack | Versão do L4T | Versão do Ubuntu |
|------------------|--------------|-----------------|
| JetPack 6.2      | L4T 36.4.3   | Ubuntu 22.04    |
| JetPack 6.1      | L4T 36.4.0   | Ubuntu 22.04    |
| JetPack 6.0      | L4T 36.3.0   | Ubuntu 22.04    |
| JetPack 5.1.3    | L4T 35.5.0   | Ubuntu 20.04    |
| JetPack 5.1.1    | L4T 35.3.1   | Ubuntu 20.04    |
| JetPack 4.6.6    | L4T 32.7.6   | Ubuntu 18.04    |

## 3. Versão do JetPack suportada por nossos produtos?
As versões do JetPack suportadas pelos nossos produtos atualmente disponíveis podem ser encontradas no seguinte link: 

[seeed's jetpack verson](https://docs.google.com/spreadsheets/d/1Sf7IdmVkKTAUH95XwxHK0ojV5aFq3ItKZ-iT28egzIk/edit?pli=1&gid=0#gid=0)



## 4. Relação Entre JetPack 6.2 e Super Mode

Dispositivos gravados com o JetPack 6.2 suportam a ativação do Super Mode. No entanto, observe que o Super Mode está atualmente disponível apenas em alguns produtos da Seeed.

## 5. Como encontrar o conteúdo de cada versão do JetPack?

Você pode consultar os recursos oficiais publicados pela NVIDIA. Veja o link a seguir para detalhes:

[contents of each jetpack](https://developer.nvidia.com/embedded/jetpack-archive)

## Recursos

- [Código-fonte do L4T da Seeed](https://github.com/Seeed-Studio/Linux_for_Tegra)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

