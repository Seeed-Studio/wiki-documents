---
description: Esta página é a página de navegação para o TRMNL 7inch5(OG) DIY Kit.
title: Introdução ao TRMNL 7.5inch(OG) DIY Kit
image: https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.webp
slug: /trmnl_7inch5_diy_kit_main_page
sidebar_position: 1
last_update:
  date: 06/29/2025
  author: Allen
createdAt: '2025-07-16'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/pt-br/trmnl_7inch5_diy_kit_main_page/
---

# Introdução ao TRMNL 7.5" (OG) DIY Kit

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/TRMNL-7-5-Inch-OG-DIY-Kit-p-6481.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

### Visão geral do produto

O TRMNL 7.5" (OG) DIY Kit, co-desenvolvido pela Seeed Studio e TRMNL, é uma solução versátil de desenvolvimento com e-ink. Ele combina um display e-ink monocromático de 7,5 polegadas 800×480, placa controladora XIAO ESP32-S3 PLUS, bateria recarregável de 2000 mAh e cabo de extensão FPC de 10 cm. Totalmente compatível com o ecossistema TRMNL BYOD, este kit permite criar dashboards sem código com mais de 375 plugins e 8 layouts, ideal para entusiastas de DIY, interfaces de casa inteligente e sinalização digital criativa.

### Recursos

<!-- :::tip
To celebrate the collaboration, Team TRMNL offers 30% off on TRMNL BYOD firmware access (35 dollar, usually for 50 dollar). Use code **trmnl-seeed-diy** at checkout (first 200 customers, 1 per customer). First come, first serve!
::: -->

- **Compatibilidade com TRMNL BYOD**: Kit oficial para construir o dispositivo TRMNL 7.5'' OG com mais de 375 plugins e 8 layouts sem código (por exemplo, Calendar, Shopify, GitHub)
- **Display E-Ink de 7,5"**: Display monocromático 800×480 com atualização parcial (0,34s) e atualização completa (3,5s)
- **Design de baixo consumo de energia**: Bateria de 2000mAh fornece até 3 meses de operação em modo de deep sleep (intervalo de atualização de 6 horas)
- **Suporte a dois ecossistemas**: Compatível com Home Assistant (via ESPHome) e Arduino IDE para desenvolvimento personalizado
- **Gabinetes open source**: Disponíveis no Printables e Thingiverse para fácil personalização

### Especificação

| Parâmetro | Descrição |
| --- | --- |
| MCU | XIAO ePaper Display Dev Board com XIAO ESP32-S3 Plus onboard |
| Display | Display ePaper monocromático de 7,5 polegadas |
| Resolução | 800x480 |
| Tensão de operação | 5V |
| Bateria | Bateria Li-ion recarregável de 2000mAh (autonomia de 3 meses em modo de deep sleep) |
| Temperatura de operação | -40°C a 85°C |
| Gabinete | Não incluído (projetos open source no Printables e Thingiverse) |

## Visão geral de hardware

### Diagrama dos componentes

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/overview.png" style={{width:600, height:'auto'}}/></div>

### Lista de peças

| Produto | Quantidade |
| --- | --- |
| XIAO ePaper Display Dev Board (XIAO ESP32-S3 Plus) | 1 |
| Display ePaper monocromático de 7,5 polegadas (800×480) | 1 |
| Cabo de extensão FPC (10 cm) | 1 |
| Conector FPC | 1 |
| Bateria Li-ion recarregável de 2000mAh | 1 |

## Primeiros passos

### Instalação do equipamento

**Passo 1. Conectar o display à placa controladora**  
Alinhe o cabo FPC com o conector na XIAO ePaper Display Board e, em seguida, prenda a trava para garantir uma conexão firme.  

:::tip
O lado metálico do cabo FPC deve ficar voltado para cima, caso contrário, nenhum conteúdo será exibido.

Siga o tutorial de instalação abaixo, muitas pessoas fazem isso de forma incorreta.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**Passo 2. Conectar a bateria**  
Conecte o cabo da bateria ao conector JST na placa controladora, garantindo a polaridade correta (fio vermelho em +, preto em -).  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**Passo 3. Montagem do gabinete (Opcional)**  

:::tip
Observe que o cabo flexível da tela é muito frágil. Tenha cuidado ao manuseá-lo. Se ele for danificado, toda a tela deixará de funcionar.
:::
Imprima as peças de gabinete open source a partir da [Resource part](#recursos) e monte os componentes dentro.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>

Primeiro, monte a placa controladora e a bateria.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/base.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Teste o kit TRMNL para verificar se está funcionando bem.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/test.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Encaixe a tela no gabinete e deixe o FPC sair.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Conecte o cabo de extensão FPC e monte todo o gabinete.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

O gabinete em formato de L é muito semelhante.

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
Se o seu kit TRMNL estiver longe do roteador, você pode mover a antena para fora do gabinete. Isso proporcionará um desempenho melhor.
:::

## Centro da Wiki

### Explore guias detalhados

#### 1. [Tutorial do ecossistema TRMNL BYOD](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_trmnl/)

Descubra como usar a plataforma TRMNL BYOD com mais de 375 plugins, incluindo criação de dashboards sem código para o seu trabalho e vida pessoal.

#### 2. [Funciona com Home Assistant](https://wiki.seeedstudio.com/pt-br/ogdiy_kit_works_with_esphome)

Aprenda como configurar seu kit TRMNL com o Home Assistant via ESPHome, incluindo upload de firmware e programação básica.

#### 3. [Funciona com Arduino](https://wiki.seeedstudio.com/pt-br/ogdiy_kit_works_with_arduino/)

Domine o controle do kit TRMNL com Arduino, incluindo mecanismos de atualização, renderização gráfica e gerenciamento de energia.

## <span id="resource">Recursos</span>

- **[Firmware]** [Biblioteca TRMNL ePaper (GitHub)](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)
- **[Hardware]** [Driver Board SCH](https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/XIAO_ePaper_driver_board_sch.pdf)
- **[Imprimível]** [base triangular](https://www.printables.com/model/1354873)  
- **[Imprimível]** [base triangular protegida](https://www.printables.com/model/1361112-upgrated-triangular-prism-3d-enclosure-for-trmnl-7)  
- **[Imprimível]** [base em formato de L](https://www.printables.com/model/1354879)  
- **[Thingiverse]** [base triangular](https://www.thingiverse.com/thing:7091094)
- **[Thingiverse]** [base triangular protegida](https://www.thingiverse.com/thing:7097231)
- **[Thingiverse]** [base em formato de L](https://www.thingiverse.com/thing:7091096)
- **[Makerworld]** [base triangular](https://makerworld.com/en/models/1625037-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [base triangular protegida](https://makerworld.com/en/models/1625119-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [base em formato de L](https://makerworld.com/en/models/1625065-trmnl-7-5-og-diy-l-shaped-case-kit)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Oferecemos vários canais de suporte:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
