---
description: Gravar JetPack no reComputer J4012 (placa-carrier J401)
title: Primeiros passos com o reComputer J1010
keywords:
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_J1010_with_Jetson_getting_start
last_update:
  date: 6/29/2023
  author: Lakshantha
createdAt: '2024-04-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reComputer_J1010_with_Jetson_getting_start/
---

# Primeiros passos com o reComputer J1010

<div align="center"><img width ="800" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-110061362-recomputer-j1010-first.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

## Introdução

O reComputer J1010 é um computador de borda compacto construído com o módulo de produção NVIDIA Jetson Nano 4GB, que vem com 128 núcleos NVIDIA CUDA® entregando 0,5 TFLOPs (FP16) para executar frameworks e aplicações de IA como classificação de imagens, detecção de objetos e processamento de fala. Os módulos de produção oferecem 16GB de eMMC, uma garantia mais longa e vida útil de operação de 5–10 anos em um ambiente de produção ([Jetson FAQ](https://developer.nvidia.com/embedded/faq)). Também temos a reComputer [série J20](https://www.seeedstudio.com/reComputer-J2021-p-5438.html?queryID=14111cbf2ca4f2951fd8a4c1762eb435&objectID=5438&indexName=bazaar_retailer_products) construída com um módulo Jetson Xavier NX, oferecendo desempenho de IA de 21 TOPS para cargas de trabalho de IA mais complexas.

Além do módulo Jetson, o reComputer J1010 também inclui a [placa-carrier J101](https://www.seeedstudio.com/reComputer-J101-v2-Carrier-Board-for-Jetson-Nano-p-5396.html) com slot para cartão microSD onboard, 1×USB 3.0, 2×USB2.0, HDMI, M.2 Key E para Wi-Fi, LTE e Bluetooth, RTC, GPIO de 40 pinos tipo Raspberry Pi, e assim por diante, bem como um dissipador de calor e gabinete de alumínio. O dispositivo já vem com o Jetpack 4.6.1 pré-instalado, basta conectar uma fonte de alimentação USB C 5V/3A, teclado, mouse e cabo ethernet, e você estará pronto para iniciar sua jornada de IA embarcada! Se você precisar de mais USB 3.0 e M.2 key M onboard para conectar um SSD, você pode escolher o reComputer J1020.

Nota: Recebemos consultas de clientes que precisam de mais armazenamento do que os 16GB de eMMC oferecidos. Para pedidos após 30 de julho de 2022, incluímos o slot para cartão microSD na [placa-carrier](https://www.seeedstudio.com/reComputer-J101-v2-Carrier-Board-for-Jetson-Nano-p-5396.html) do reComputer J1010. Verifique o [guia](https://wiki.seeedstudio.com/pt-br/J1010_Boot_From_SD_Card/#flashing-system-from-j101-to-sd-card) sobre como inicializar a imagem no cartão microSD e ajustar a velocidade de E/S.

## Recursos

- **Sistema completo de IA de borda do tamanho da mão:** oferecendo poder de IA moderno de 0,5 TFLOPs (FP16) e interfaces ricas para desenvolvimento embarcado.
- **Pronto para desenvolvimento e implantação:** o NVIDIA JetPack pré-instalado oferece suporte a toda a [pilha de software Jetson](https://developer.nvidia.com/embedded/develop/software) e a [ferramentas de desenvolvimento de IA](https://wiki.seeedstudio.com/pt-br/Jetson-AI-developer-tools/) líderes do setor para construir aplicações de IA robustas, como logística, varejo, serviços, agricultura, cidade inteligente, saúde e ciências da vida, etc.
- **Eficiente em energia:** alimentado por Type C 5V/3A, consumindo apenas 5 watts.
- **Expansível:** com as interfaces onboard e o gabinete do reComputer, capaz de ser montado na parede com furos de fixação na parte traseira.

## Especificações

<table>
  <thead>
    <tr>
      <th>Especificações</th>
      <th><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010</a></th>
      <th><a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">reComputer J1020</a></th>
      <th><a href="https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html">Kit de Desenvolvimento NVIDIA Jetson Nano-B01</a></th>
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
      <td>Slot para Cartão SD</td>
      <td>Incluído (na placa-carrier)</td>
      <td>-</td>
      <td>Incluído (no módulo)</td>
    </tr>
    <tr>
      <td>Codificador de Vídeo</td>
      <td colspan='2'>4K30 | 2x1080p60 | 4x1080p30 | 4x720p60 | 9x720p30 (H.265 & H.264)</td>
      <td>4Kp30 | 4x 1080p30 | 9x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de Vídeo</td>
      <td colspan='2' align='center'>4K60 | 2x 4K30 | 4x 1080p60 | 8x 1080p30 | 9x 720p60 (H.265 & H.264)</td>
      <td>4Kp60 | 2x 4Kp30 | 8x 1080p30 | 18x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>Ethernet Gigabit</td>
      <td colspan='3' align='center'>1×Conector Ethernet Gigabit RJ45 (10/100/1000)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>1 × USB 3.0 Tipo A; 2 × USB 2.0 Tipo A; 1 × USB Tipo C para modo dispositivo; 1 × USB Tipo C para entrada de alimentação 5V</td>
      <td>4 × USB 3.0 Tipo-A ；1 × porta Micro-USB para modo dispositivo;</td>
      <td>4 × USB 3.0 Tipo-A; 1 × porta Micro-USB para entrada de alimentação 5V ou para modo dispositivo</td>
    </tr>
    <tr>
      <td>Conexão de Câmera CSI</td>
      <td colspan='3' align='center'>2×Câmera CSI (15 posições, passo de 1mm, MIPI CSI-2 )</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1×HDMI Tipo A</td>
      <td colspan='2' align='center'>1×HDMI Tipo A; 1×DP</td>
    </tr>
    <tr>
      <td>VENTOINHA</td>
      <td>1× Conector de VENTOINHA (5V PWM)</td>
      <td colspan='2' align='center'>1× VENTOINHA (5V PWM)</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1×M.2 Key E</td>
      <td>1×M.2 Key E (Desativado)</td>
      <td>1×M.2 Key E</td>
    </tr>
    <tr>
      <td>M.2 KEY M</td>
      <td>-</td>
      <td>1×M.2 Key M</td>
      <td>-</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colspan='2'>Soquete RTC (reservado)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Porta multifuncional</td>
      <td colspan='3' align='center'>1× Header de 40 pinos</td>
    </tr>
    <tr>
      <td>Fonte de Alimentação</td>
      <td>USB-Type C 5V⎓3A</td>
      <td>Conector DC 12V/2A</td>
      <td>Conector DC 5V⎓4A；Micro-USB 5V⎓2A</td>
    </tr>
    <tr>
      <td>Mecânico</td>
      <td colspan='2'>130 mm x 120 mm x 50 mm (com gabinete)</td>
      <td>100 mm x 80 mm x 29 mm</td>
    </tr>
  </tbody>
</table>

## Gravar JetPack no reComputer J1010

:::info
Consulte esta página da [wiki](/pt-br/reComputer_J1010_J101_Flash_Jetpack) para obter mais informações, pois o J1010 usa a placa-carrier J101.
:::

## Recursos

[Folha de dados do reComputer J1010](https://files.seeedstudio.com/wiki/reComputer/reComputer-J1010-datasheet.pdf)

[Esquemático das Placas-Carrier reComptuer J101](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J101_V2.0_SCH_240822.pdf)

[Arquivo 3D do reComputer J1010](https://files.seeedstudio.com/products/NVIDIA-Jetson/J1010-Jetson-Nano.stp)

[Catálogo das Séries Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Casos de Sucesso de Edge IA da Seeed Studio](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Comparação das Séries Seeed Jetson](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Folheto Único dos Dispositivos Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
