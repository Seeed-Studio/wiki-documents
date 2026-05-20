---
description: Gravar o JetPack no reComputer J4012 (placa carrier J401)
title: Introdução ao reComputer J30/40
keywords:
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_J30_40_with_Jetson_getting_start
sku: 110110145, 110110184, 114993114, 110110144, 110110185, 110110147, 110110186, 110110146, 110110187
last_update:
  date: 6/29/2023
  author: Lakshantha
createdAt: '2024-04-08'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/pt-br/reComputer_J30_40_with_Jetson_getting_start/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Introdução ao reComputer J30/40

## Introdução

<div class="video-container">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/-KAyUHzRxHc" title="Unboxing &amp; Plug in reComputer J4012 - Powered by NVIDIA Jetson Orin NX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br />

O reComputer J30/40 construído com Jetson Orin é uma caixa de borda inteligente poderosa e compacta que traz até 100 TOPS de desempenho de IA moderno para a borda, combinando a arquitetura de GPU NVIDIA Ampere™ com capacidade operacional de 64 bits.

O sistema completo inclui um módulo de produção NVIDIA Jetson Orin, um dissipador de calor e um adaptador de energia. O reComputer J30/40 vem pré-instalado com Jetpack 5.1.3, simplifica o desenvolvimento e é adequado para implantação por provedores de soluções de IA de borda que trabalham com análise de vídeo, detecção de objetos, processamento de linguagem natural, imagem médica e robótica em setores como cidades inteligentes, segurança, automação industrial e fábricas inteligentes.

Se você está procurando a versão sem adaptador de energia, confira o [reComputer-Jetson](https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html).

:::note
Personalização disponível para marca em logotipo, embalagem e gravação de firmware.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a>
<a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>Personalize agora ➜</font></span></strong></a>
</div>

## Recursos

- **Brilhante desempenho de IA para produção:** processamento no dispositivo com até 100 TOPS de desempenho de IA com baixo consumo de energia e baixa latência
- **Dispositivo de IA de borda do tamanho da mão:** tamanho compacto de 130mm x120mm x 58,5mm, inclui módulo de produção NVIDIA Jetson Orin, um dissipador de calor, gabinete e um adaptador de energia. Suporta uso em mesa, montagem na parede, se encaixa em qualquer lugar
- **Expansível com ricas E/S:** 4x USB3.2, HDMI 2.1, 2xCSI, 1xRJ45 para GbE, M.2 Key E, M.2 Key M, CAN e GPIO
- **Acelere a solução para o mercado:** Jetpack pré-instalado com NVIDIA JetPack™ 5.1 no SSD NVMe de 128GB incluído, BSP de SO Linux, SSD de 128GB, módulo combo WiFi BT, 2x antenas, suporta software Jetson e principais frameworks e plataformas de software de IA
- **Certificações abrangentes:** FCC, CE, RoHS, UKCA

## Especificações

<table>
  <thead>
    <tr>
      <th>Especificações</th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3010-w-o-power-adapter-p-5631.html?queryID=e8d0ae9b2e338e8a860f07dacef58f6e&objectID=5631&indexName=bazaar_retailer_products">reComputer J3010</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html">reComputer J3011</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4011-w-o-power-adapter-p-5629.html?queryID=5577f61da645361a7aad9179bc04efc2&objectID=5629&indexName=bazaar_retailer_products">reComputer J4011</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html?queryID=639ef60cde4a38ccc9ff2f82070d4854&objectID=5628&indexName=bazaar_retailer_products">reComputer J4012</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Módulo</td>
      <td>Jetson Orin Nano 4GB</td>
      <td>Jetson Orin Nano 8GB</td>
      <td>Jetson Orin NX 8GB</td>
      <td>Jetson Orin NX 16GB</td>
    </tr>
    <tr>
      <td>Desempenho de IA</td>
      <td>20 TOPS</td>
      <td>40 TOPS</td>
      <td>70 TOPS</td>
      <td>100 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>GPU NVIDIA Ampere de 512 núcleos com 16 Tensor Cores</td>
      <td>GPU NVIDIA Ampere de 1024 núcleos com 32 Tensor Cores</td>
      <td colspan='2' align='center'>GPU NVIDIA Ampere de 1024 núcleos com 32 Tensor Cores</td>
    </tr>
    <tr>
      <td>Frequência Máx. da GPU</td>
      <td colSpan='2' align='center'>625 MHz</td>
      <td>765 MHz</td>
      <td>918 MHz</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan='2'>CPU Arm® Cortex®-A78AE v8.2 de 6 núcleos, 64 bits<br />1,5MB L2 + 4MB L3</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 de 6 núcleos, 64 bits 1,5MB L2 + 4MB L3</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 de 8 núcleos, 64 bits 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Frequência Máx. da CPU</td>
      <td colSpan='2' align='center'>1,5 GHz</td>
      <td colSpan='2' align='center'>2 GHz</td>
    </tr>
    <tr>
      <td>Memória</td>
      <td>4GB 64-bit LPDDR5<br />34 GB/s</td>
      <td>8GB 128-bit LPDDR5<br />68 GB/s</td>
      <td>8GB 128-bit LPDDR5 102,4GB/s</td>
      <td>16GB 128-bit LPDDR5 102,4GB/s</td>
    </tr>
    <tr>
      <td>Acelerador DL</td>
      <td colSpan='2' align='center'>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>Frequência Máx. da DLA</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>614 MHz</td>
    </tr>
    <tr>
      <td>Acelerador de Visão</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>1x PVA v2</td>
    </tr>
    <tr>
      <td>Armazenamento</td>
      <td colSpan='4' align='center'>SSD NVMe de 128GB</td>
    </tr>
    <tr>
      <td>Codificador de Vídeo</td>
      <td colSpan='2' align='center'>1080p30 suportado por 1-2 núcleos de CPU</td>
      <td colSpan='2' align='center'>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de Vídeo</td>
      <td colSpan='2' align='center'>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan='2' align='center'>1x 8K30 (H.265) | 2x 4K60 (H.265) | 4x 4K30 (H.265)<br />9x 1080p60 (H.265) | 18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td colSpan='4' align='center'>1* HDMI 2.1</td>
    </tr>
    <tr>
      <td>Câmera CSI</td>
      <td colSpan='4' align='center'>2* CSI （2-lane 15pin）</td>
    </tr>
    <tr>
      <td>Rede</td>
      <td colSpan='4' align='center'>1* Ethernet Gigabit (10/100/1000M)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan='4' align='center'>4* USB 3.2 Tipo-A (10Gbps); 1* USB2.0 Tipo-C (Modo Dispositivo)</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td colSpan='4' align='center'>1* M.2 Key M</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td colSpan='4' align='center'>1* M.2 Key E</td>
    </tr>
    <tr>
      <td>Ventoinha</td>
      <td colSpan='4' align='center'>1* Conector de ventoinha de 4 pinos (5V PWM)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan='4' align='center'>1* CAN</td>
    </tr>
    <tr>
      <td>Porta Multifuncional</td>
      <td colSpan='4' align='center'>1* cabeçalho de expansão de 40 pinos, 1* cabeçalho de controle e UART de 12 pinos</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan='4' align='center'>RTC 2 pinos, soquete RTC (suporta CR1220, mas não incluída)</td>
    </tr>
    <tr>
      <td>Alimentação</td>
      <td colSpan='4' align='center'>9-19V</td>
    </tr>
    <tr>
      <td>Fonte de Alimentação</td>
      <td colSpan='4' align='center'>Adaptador de energia não incluído</td>
    </tr>
    <tr>
      <td>Temperatura</td>
      <td colSpan='4' align='center'>-10℃~60℃</td>
    </tr>
    <tr>
      <td>Mecânico</td>
      <td colSpan='4' align='center'>130mm x120mm x 58,5mm</td>
    </tr>
  </tbody>
</table>

## Gravar JetPack

:::info
reComputer J30/40 alimentado pela placa carrier J401.
Consulte esta [página wiki](/pt-br/reComputer_J4012_Flash_Jetpack) para mais informações sobre gravação do JetPack.
:::

## Uso das Interfaces

:::info
reComputer J30/40 alimentado pela placa carrier J401.
Consulte esta [página wiki](/pt-br/J401_carrierboard_Hardware_Interfaces_Usage) para mais informações sobre o uso das interfaces.
:::


## Recursos
- [Folha de dados do reComputer J30x](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [Folha de dados do reComputer J40x](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [Esquemático do reComputer J30/J40](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [Arquivo 3D do reComputer J30/J40](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Catálogo da série Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Casos de sucesso de Edge AI da Seeed Studio](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Comparação das séries Seeed Jetson](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Página única dos dispositivos Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Exemplos Jetson](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-para-Iniciantes](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
