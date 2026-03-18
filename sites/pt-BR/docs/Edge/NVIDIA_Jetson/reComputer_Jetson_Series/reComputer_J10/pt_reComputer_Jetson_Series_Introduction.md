---
description: reComputer para a Série Jetson
title: Introdução ao reComputer para a Série Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_Jetson_Series_Introduction
sku: 114992562,114110047,114110049,114110048,103110043,110991666,110061363,110061401,110061361,102991694,102991695,102991714,110061482,110061481
last_update:
  date: 01/03/2023
  author: w0x7ce
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reComputer_Jetson_Series_Introduction/
---

# Introdução ao reComputer para a Série Jetson

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerheadline.png" /></div>

## ✨ Projeto de Contribuidores

- Atualizações Públicas da Plataforma Wiki da Seeed Studio
- Temos uma lista de tarefas para atualizar esta página, que está categorizada em nosso [projeto de contribuidores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479), pois estamos dedicados a aprimorar a experiência do usuário e fornecer melhor suporte por meio do desenvolvimento da nossa plataforma wiki.
- [Sua contribuição para esta página](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35025656) é essencial para nós! Valorizamos muito o seu feedback e agradeceríamos imensamente a sua ajuda na geração de ideias.

## Introdução

A série reComputer para Jetson é composta por computadores de borda compactos construídos com sistemas embarcados de IA avançada da NVIDIA: reComputer J10 (Nano) e reComputer J20 (Xavier NX). Com módulos de expansão ricos, periféricos industriais, gerenciamento térmico combinado com décadas de experiência em hardware da Seeed, o reComputer para Jetson está pronto para ajudar você a acelerar e escalar o próximo produto de IA de nova geração que surge em diversos cenários de IA.

A série é compatível com a pilha de software NVIDIA Jetson, fluxos de trabalho cloud-native e frameworks de IA líderes do setor, ajudando a oferecer uma integração de IA perfeita. Atualmente, lançamos quatro deles, conforme mostrado abaixo:

| Produto                 | [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html ) | [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) | [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)   | [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html)   |
|-------------------------|----------------|----------------|------------------|------------------|
| SKU | 110061362 |110061361 |110061363 | 110061401 |
|          Vista lateral               |  <img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview3_1.png" />|     <img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" />          |     <img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" />            |    <img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png"  />            |
| Módulo incluso         | Jetson Nano 4GB   | Jetson Nano 4GB   | Jetson Xavier NX 8GB | Jetson Xavier NX 16GB |
| Placa carrier em operação | Placa carrier J1010  | Jetson A206           | Jetson A206             |Jetson A206             |
| Interface de energia         | Conector Type-C  | Adaptador de energia DC           | Adaptador de energia DC             | Adaptador de energia DC            |
|Link |<a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a> |<a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a> |<a href="https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a> |<a href="https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a> |

## Detalhes da Interface

Os 4 produtos reComputer atuais têm a mesma aparência, a diferença está na interface na parte traseira. O [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) usa uma combinação de interfaces, e os outros três usam a mesma outra combinação de interfaces, porque há duas placas carrier diferentes usadas no chassi.

### Placa carrier J1010

Esta placa carrier é adequada para o [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-a01mark.png" alt="pir" width={900} height="auto" /></p>

| Marcação | Nome                    | Observação                  |
|-------|-------------------------|-----------------------|
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num1.png" width="30px" height="30px"></image> | DCIN(interface Type-C)  | Somente alimentação     |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num5.png" width="30px" height="30px"></image>     |  HDMI               |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num4.png" width="30px" height="30px"></image>    | 1x porta USB 3.0 Type-A  |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num3.png" width="30px" height="30px"></image>    | 2x portas USB 2.0 Type-A |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num2.png" width="30px" height="30px"></image>    | LAN                     |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num6.png" width="30px" height="30px"></image>   | Porta USB Type-C         | Somente transmissão de dados |

### Placa carrier Jetson A206

Esta placa carrier é para o [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html), [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html) e [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-h01mark.png" alt="pir" width={900} height="auto" /></p>

| Marcação | Nome                    | Observação                  |
|-------|-------------------------|-----------------------|
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num1.png" width="30px" height="30px"></image>    | DCIN(interface circular)| Somente alimentação     |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num5.png" width="30px" height="30px"></image>    | DP
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num4.png" width="30px" height="30px"></image>    | HDMI |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num3.png" width="30px" height="30px"></image>    | 4x portas USB 3.0 Type-A                     |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num2.png" width="30px" height="30px"></image>    | LAN        |             |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num6.png" width="30px" height="30px"></image>    | Porta Micro-B         | Somente transmissão de dados |

## O que vem na caixa

Antes de ligar e iniciar, você precisa fazer todas as verificações e preparos para a primeira inicialização do reComputer. Desembale o produto que você recebeu e verifique se o conteúdo da embalagem está completo de acordo com o modelo do produto que você comprou.

### [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-10-1-A0shangxiang.png" alt="pir" width={500} height="auto" /></p>

**Lista de itens incluídos na caixa:**

- reComputer J1010, incluindo:
  - Módulo Jetson Nano 4G1 x1
  - Placa carrier J1010 x1

**Acessórios não incluídos, mas necessários para ligar:**

- Teclado e mouse USB
- Tela de exibição
- Cabo de alimentação Type-C e fonte de alimentação

:::note
    Não haverá cabo de alimentação Type-C nem fonte de alimentação incluídos no produto.
:::

---

### [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-10-1-H0shangxiang.png" alt="pir" width={500} height="auto" /></p>

**Lista de itens incluídos na caixa:**

- reComputer J1020, incluindo:
  - Módulo Jetson Nano 4G1 x1
  - Placa carrier Jetson A206 x1
- Adaptador de energia 12V/2A (com 5 plugs de adaptador intercambiáveis) x1

**Acessórios não incluídos, mas necessários para ligar:**

- Teclado e mouse USB
- Tela de exibição

:::note
Haverá 5 adaptadores de energia selecionáveis para você. Cabo de alimentação Type-C e fonte de alimentação incluídos no produto. Assim, você pode escolher aquele que seja adequado para o seu país ou região para alimentar o reComputer sem precisar comprar nenhuma fonte de alimentação adicional.
:::

---

### [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-20-1-H1shangxiang.png" alt="pir" width={500} height="auto" /></p>

**Lista de itens incluídos na caixa:**

- reComputer Jetson J2011, incluindo:
  - Módulo Jetson Xavier NX 8G x1
  - Placa carrier Jetson A206 x1
- Adaptador de energia 19V/4.74A (MÁX 90W) (sem cabo de alimentação) x1

**Acessórios não incluídos, mas necessários para ligar:**

- Teclado e mouse USB
- Tela de exibição
- Cabo de alimentação para o adaptador

:::note
Combine o cabo de alimentação para o adaptador de energia de acordo com o padrão de plugue de energia local.
:::

---

### [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-20-1-H2shangxiang.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-20-1-H2shangxiang1.png" alt="pir" width={500} height="auto" /></p>

**Lista de itens incluídos na caixa:**

- reComputer J2012, incluindo:
  - Módulo Jetson Xavier NX 16G x1
  - Placa carrier Jetson A206 x1
- Adaptador de energia 19V/4,74A (MÁX 90W) (sem cabo de alimentação) x1

**Acessórios não incluídos, mas necessários para ligar:**

- Teclado e mouse USB
- Tela de exibição
- Cabo de alimentação para o adaptador

:::note
Combine o cabo de alimentação do adaptador de energia de acordo com o padrão de tomada de energia do seu país/região.
:::

---

## E mais

Aqui apresentamos tabelas mais completas sobre a comparação de dispositivos alimentados por NVIDIA® Jetson Module e a comparação de placas-carrier compatíveis com NVIDIA® Jetson Module. Você pode clicar na imagem ou no título para uma melhor visualização.

### <a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png" target="_blank"><span>Comparação de dispositivos alimentados por NVIDIA® Jetson Module</span></a>

<div class="document">
<div class="document">
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png" alt="" /></a></p>
</div>
</div>

### <a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png" target="_blank"><span>Comparação de placas-carrier compatíveis com NVIDIA® Jetson Module</span></a>

<div class="document">
<div class="document">
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png" alt="" /></a></p>
</div>
</div>

## Recursos

- **[PDF]** [Comparação de dispositivos e placas-carrier NVIDIA Jetson](https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
