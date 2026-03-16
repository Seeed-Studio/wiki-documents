---
description: Gravar o JetPack no reComputer J4012 (placa carrier J401)
title: Primeiros passos com reComputer J1020v2
keywords:
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_J1020v2_with_Jetson_getting_start
last_update:
  date: 6/29/2023
  author: Lakshantha
createdAt: '2024-04-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reComputer_J1020v2_with_Jetson_getting_start/
---

# Primeiros passos com reComputer J1020v2

<div align="center"><img width ="800" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110061441.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J1020-v2-w-o-power-adapter-p-5608.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
</a></div>

## Introdução
A série reComputer para Jetson são computadores de borda compactos construídos com sistemas embarcados de IA avançada da NVIDIA: J10 (Jetson Nano 4GB) e J20 (Jetson [Xavier NX](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Module-p-4421.html?queryID=fa33abfaf6f67f95a4c01b60263d2793&objectID=4421&indexName=bazaar_retailer_products) 8GB e Jetson Xavier 16GB). Com ricos módulos de extensão, periféricos industriais e gerenciamento térmico, o reComputer para Jetson está pronto para ajudar você a acelerar e escalar a próxima geração de produtos de IA, implantando modelos DNN populares e frameworks de ML na borda e realizando inferência com alto desempenho.

O reComputer J1020 v2 é uma caixa de borda inteligente poderosa e compacta construída com o módulo de produção Jetson Nano, trazendo desempenho moderno de IA para a borda. A placa carrier J202 incorporada tem as mesmas dimensões do Jetson Nano Developer Kit, incluindo 4xUSB 3, M.2 Key M, HDMI e DP. O sistema completo também inclui uma ventoinha e um adaptador de energia.

Para iniciantes em IA, se você deseja obter habilidades essenciais em IA e se aprofundar em deep learning, o [NVIDIA’s Deep Learning Institute (DLI)](https://www.nvidia.com/en-us/training/) oferece treinamento prático, mão na massa, e certificação. Consulte também o guia da [wiki](https://wiki.seeedstudio.com/pt-br/reComputer_Jetson_Series_Started_Guide/) da Seeed, incluindo primeiros passos com o Jetson Nano e também a construção de diferentes projetos.

Para provedores de soluções, o reComputer J1020 v2 vem pré-instalado com Jetpack 4.6.1; com um conjunto rico de I/Os, esta caixa de IA simplifica o desenvolvimento e é adequada para implantação por provedores de soluções de IA de borda que trabalham com análise de vídeo, detecção de objetos, processamento de linguagem natural, imagem médica e robótica em setores como cidades inteligentes, segurança, automação industrial e fábricas inteligentes.

## Recursos

- **Alternativa ao NVIDIA Jetson Nano Dev Kit:** dispositivo de IA de borda do tamanho da mão construído com o módulo de produção Jetson Nano 4GB; a placa carrier traz I/Os extensos: GPIO, CSI, Gigabit Ethernet, 4 x USB 3.0 Type A, 16 GB eMMC onboard. Verifique aqui a expansão de armazenamento por SSD.
- **128 núcleos NVIDIA CUDA® entregam 0.5 TFLOPs (FP16)** para executar frameworks e modelos de IA para aplicações como classificação de imagens, detecção de objetos, segmentação e processamento de fala.
- **NVIDIA Jetpack pré-instalado**, o JetPack SDK inclui um board support package (BSP), sistema operacional Linux, NVIDIA CUDA, cuDNN e bibliotecas de software TensorRT para deep learning, visão computacional, computação em GPU, processamento multimídia etc.
- **Suporta toda a** [pilha de software Jetson](https://developer.nvidia.com/embedded/develop/software) e várias [ferramentas de desenvolvimento](https://wiki.seeedstudio.com/pt-br/Jetson-AI-developer-tools/) para construir aplicações de IA rápidas e robustas fornecidas pelos parceiros de Edge AI da Seeed.

## Especificações

<table>
  <thead>
    <tr>
      <th>Especificações</th>
      <th><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J1020-v2-w-o-power-adapter-p-5608.html">reComputer J1020v2</a></th>
      <th><a href="https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html">NVIDIA Jetson Nano Developer Kit-B01</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Módulo</td>
      <td colspan='2'>Jetson Nano 4GB (versão de produção)</td>
      <td>Nano (não é versão de produção)</td>
    </tr>
    <tr>
      <td>Armazenamento</td>
      <td colspan='2' align='center'>16 GB eMMC</td>
      <td>MicroSD (Cartão não incluído)</td>
    </tr>
    <tr>
      <td>Slot para cartão SD</td>
      <td>Incluído (na placa carrier)</td>
      <td>-</td>
      <td>Incluído (no módulo)</td>
    </tr>
    <tr>
      <td>Codificador de vídeo</td>
      <td colspan='2'>4K30 | 2x1080p60 | 4x1080p30 | 4x720p60 | 9x720p30 (H.265 & H.264)</td>
      <td>4Kp30 | 4x 1080p30 | 9x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de vídeo</td>
      <td colspan='2'>4K60 | 2x 4K30 | 4x 1080p60 | 8x 1080p30 | 9x 720p60 (H.265 & H.264)</td>
      <td>4Kp60 | 2x 4Kp30 | 8x 1080p30 | 18x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>Gigabit Ethernet</td>
      <td colspan='3' align='center'>1\*Conector RJ45 Gigabit Ethernet (10/100/1000)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>1 \* USB 3.0 Type A;
2 \* USB 2.0 Type A;
1 \* USB Type C para modo dispositivo;
1 \* USB Type C para entrada de energia 5V</td>
      <td>4 \* USB 3.0 Type-A ；
1 \* porta Micro-USB para modo dispositivo;</td>
      <td>4 \* USB 3.0 Type-A;
1 \* porta Micro-USB para entrada de energia 5V ou para modo dispositivo</td>
    </tr>
    <tr>
      <td>Conexão de câmera CSI</td>
      <td colspan='3' align='center'>2\*Câmeras CSI (15 pos, passo 1mm, MIPI CSI-2 )</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1\*HDMI Tipo A</td>
      <td colspan='2' align='center'>1\*HDMI Tipo A; 1\*DP</td>
    </tr>
    <tr>
      <td>VENTOINHA</td>
      <td colspan='3' align='center'>1\* Conector de ventoinha (5V PWM)</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1\*M.2 Key E</td>
      <td>1\*M.2 Key E (Desativado)</td>
      <td>1\*M.2 Key E</td>
    </tr]
    <tr>
      <td>M.2 KEY M</td>
      <td>-</td>
      <td>1\*M.2 Key M</td>
      <td>-</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1\*Soquete RTC</td>
      <td>1\*Soquete RTC 1\*RTC 2 pinos</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Porta multifuncional</td>
      <td colspan='3' align='center'>1\* Conector de 40 pinos</td>
    </tr>
    <tr>
      <td>Fonte de alimentação</td>
      <td>USB-Type C 5V⎓3A</td>
      <td>Adaptador de energia 9-12V não incluído (Conector barril 5.5/2.5mm)</td>
      <td>Conector DC 5V⎓4A；Micro-USB 5V⎓2A</td>
    </tr>
    <tr>
      <td>Mecânica</td>
      <td colspan='2'>130 mm x 120 mm x 50 mm (com gabinete)</td>
      <td>100 mm x 80 mm x 29 mm</td>
    </tr>
  </tbody>
</table>

## Gravar JetPack no reComputer J1020v2

:::info
Consulte esta página da [wiki](/pt-br/reComputer_J2021_J202_Flash_Jetpack) para mais informações, pois o J1020v2 usa a placa carrier J202.
:::

## Recursos
[reComputer J1020 v2 – folha de dados](https://files.seeedstudio.com/wiki/reComputer/reComputer-J1020-v2-datasheet.pdf)

[Esquema das placas carrier reComptuer J102 (também J202)](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J202_V1.0_SCH_PDF_240822.pdf)

[Arquivo 3D do reComputer J1010](https://files.seeedstudio.com/products/NVIDIA-Jetson/J2021-Xavier-NX.stp)

[Catálogo das séries Jetson da Seeed](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Histórias de sucesso de Edge AI da Seeed Studio](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Comparação das séries Jetson da Seeed](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Página única dos dispositivos Jetson da Seeed](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

