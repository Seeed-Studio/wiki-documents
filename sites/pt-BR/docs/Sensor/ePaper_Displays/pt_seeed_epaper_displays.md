---
description: Uma visão geral completa da matriz de produtos de displays ePaper da Seeed Studio, desde terminais integrados reTerminal E Series até placas driver, kits DIY e os frameworks de aplicação que os alimentam.
title: Displays ePaper Seeed
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png
slug: /seeed_epaper_displays
sidebar_position: 1
last_update:
  date: 04/28/2026
  author: dimo
createdAt: '2026-04-28'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/pt-br/seeed_epaper_displays/
---

# Displays ePaper Seeed — Visão Geral da Matriz de Produtos

## Introdução

ePaper (papel eletrônico) só consome energia quando seu conteúdo muda, o que o torna a tecnologia de display ideal para **painéis de informação sempre ligados** — sinalização digital, dashboards de casa inteligente, etiquetas eletrônicas de prateleira, quadros de sala de reunião, porta-retratos digitais e muito mais.

A Seeed Studio oferece um portfólio de ePaper ponta a ponta organizado em três linhas de produtos:

1. **reTerminal E Series** — terminais ePaper totalmente integrados e prontos para uso (basta ligá-los).
2. **Placas Driver / Expansão** — combine um MCU com telas ePaper universais ou de grande formato para construir seu próprio produto.
3. **Kits DIY e Painéis Avulsos** — projetados para a comunidade maker, otimizados para plataformas específicas como TRMNL ou XIAO.

As três linhas compartilham o **mesmo ecossistema de software**: SenseCraft HMI (no-code), Home Assistant / ESPHome, TRMNL, Arduino / ESP-IDF / PlatformIO, além de ferramentas visuais de UI como SquareLine Vision, EEZ Studio e Lopaka. Escolha uma família de hardware e o restante da cadeia de ferramentas permanece o mesmo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

## Escolha pelo formato físico

Se você não tem certeza por onde começar, use esta matriz de decisão:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Eu quero…</th>
      <th>Linha de produto recomendada</th>
      <th>Por quê</th>
    </tr>
    <tr>
      <td>Ligar um dashboard ePaper pronto para uso, sem solda e sem fiação extra</td>
      <td><a href="https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_main_page" target="_blank" rel="noopener noreferrer"><strong>reTerminal E Series →</strong></a></td>
      <td>Bateria, gabinete, sensor T/H, buzzer, botões e Wi-Fi totalmente integrados. Enviado com firmware SenseCraft HMI.</td>
    </tr>
    <tr>
      <td>Combinar uma tela ePaper existente (24 pinos, 50 pinos, 13,3", 10,3", etc.) com um MCU e bateria</td>
      <td><a href="https://wiki.seeedstudio.com/pt-br/xiao_epaper_display_board_overview" target="_blank" rel="noopener noreferrer"><strong>Série de Placas Driver / Expansão →</strong></a></td>
      <td>Placas driver (EE0x para ESP32-S3, EN0x para nRF52840) fornecem conector de bateria JST, CI de carregamento, botão de reset e botões de usuário.</td>
    </tr>
    <tr>
      <td>Construir um dashboard compatível com TRMNL com um kit DIY amigável para makers</td>
      <td><a href="https://wiki.seeedstudio.com/pt-br/trmnl_7inch5_diy_kit_main_page" target="_blank" rel="noopener noreferrer"><strong>Kit DIY TRMNL 7,5" (OG) →</strong></a></td>
      <td>Pré-ajustado para a plataforma TRMNL; também oferece suporte a ESPHome e Arduino.</td>
    </tr>
    <tr>
      <td>Conectar um painel ePaper de 7,5" diretamente a um módulo Seeed Studio XIAO</td>
      <td><a href="https://wiki.seeedstudio.com/pt-br/xiao_075inch_epaper_panel" target="_blank" rel="noopener noreferrer"><strong>Painel ePaper XIAO 7,5" →</strong></a></td>
      <td>Painel avulso + breakout que se conecta a qualquer placa XIAO; pegada mínima.</td>
    </tr>
  </table>
</div>

## reTerminal E Series — Terminais ePaper Integrados

Quatro terminais alimentados por ESP32-S3, compartilhando a mesma família de gabinetes, pilha de software e design de bateria. As diferenças são tamanho de tela, cor vs. monocromático, toque e duração da bateria.

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:240, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center"><strong>7,5" Monocromático</strong><br/>Escala de cinza de 4 níveis<br/>~3 meses de bateria</td>
      <td align="center"><strong>7,3" Colorido</strong><br/>E Ink Spectra 6<br/>~3 meses de bateria</td>
      <td align="center"><strong>10,3" Monocromático</strong><br/>Escala de cinza de 16 níveis + Toque<br/>~6 meses de bateria</td>
      <td align="center"><strong>13,3" Colorido</strong><br/>E Ink Spectra 6<br/>~6 meses de bateria</td>
    </tr>
    <tr>
      <td align="center"><a href="https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1001" target="_blank" rel="noopener noreferrer"><strong>Wiki E1001 →</strong></a></td>
      <td align="center"><a href="https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1002" target="_blank" rel="noopener noreferrer"><strong>Wiki E1002 →</strong></a></td>
      <td align="center"><a href="https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1003" target="_blank" rel="noopener noreferrer"><strong>Wiki E1003 →</strong></a></td>
      <td align="center"><a href="https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1004" target="_blank" rel="noopener noreferrer"><strong>Wiki E1004 →</strong></a></td>
    </tr>
  </table>
</div>

:::tip
Para uma comparação lado a lado de especificações (resolução, tempo de atualização, suporte a atualização parcial, certificações, MSRP, etc.) e uma matriz detalhada de suporte de software, acesse a página dedicada **[Visão Geral da reTerminal E Series](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_main_page)**.
:::

## Série de Placas Driver / Expansão — Traga sua própria tela

Se você já tem (ou quer adquirir separadamente) um painel ePaper de 24 pinos, 50 pinos, 10,3" ou 13,3", a família de placas driver fornece a eletrônica de suporte — gerenciamento de bateria, botões, CI de carregamento e o MCU.

### Placas driver ESP32-S3 (Wi-Fi / BLE, SenseCraft HMI)

<div class="table-center">
  <table align="center">
    <tr>
      <th>Placa</th>
      <th>Telas alvo</th>
      <th>Destaques</th>
      <th>Wiki</th>
    </tr>
    <tr>
      <td align="center"><strong>EE02</strong></td>
      <td align="center">13,3" Spectra 6</td>
      <td>Driver dedicado para grandes formatos coloridos; Wi-Fi + BLE; ideal para sinalização digital.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/pt-br/getting_started_with_ee02" target="_blank" rel="noopener noreferrer">EE02 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EE03</strong></td>
      <td align="center">10,3" Monocromático (atualização em alta velocidade)</td>
      <td>Temporização T-CON integrada; SHT40 onboard para compensação de waveform; XIAO ESP32-S3 Plus.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/pt-br/getting_started_with_ee03" target="_blank" rel="noopener noreferrer">EE03 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EE04</strong></td>
      <td align="center">24 pinos / 50 pinos universal</td>
      <td>Layout de pinos selecionável por jumpers; funciona com a maioria das pequenas telas ePaper prontas para uso.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/pt-br/epaper_ee04" target="_blank" rel="noopener noreferrer">EE04 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EE05</strong></td>
      <td align="center">24 pinos / 50 pinos universal (mais recente)</td>
      <td>Layout atualizado do EE04; mesma base XIAO ESP32-S3, suporte de firmware mais recente.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/pt-br/epaper_ee05" target="_blank" rel="noopener noreferrer">EE05 →</a></td>
    </tr>
  </table>
</div>

### Placas driver nRF52840 (BLE / NFC, ultrabaixo consumo)

<div class="table-center">
  <table align="center">
    <tr>
      <th>Placa</th>
      <th>Telas alvo</th>
      <th>Destaques</th>
      <th>Wiki</th>
    </tr>
    <tr>
      <td align="center"><strong>EN04</strong></td>
      <td align="center">24 pinos / 50 pinos universal</td>
      <td>Bluetooth LE + NFC; XIAO nRF52840 Plus; ideal para ESLs e tags offline.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/pt-br/epaper_EN04" target="_blank" rel="noopener noreferrer">EN04 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EN05</strong></td>
      <td align="center">24 pinos / 50 pinos universal (mais recente)</td>
      <td>Layout atualizado do EN04; mesma base nRF52840 com suporte de firmware mais recente.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/pt-br/epaper_en05" target="_blank" rel="noopener noreferrer">EN05 →</a></td>
    </tr>
  </table>
</div>

### Placas projetadas para módulos XIAO

<div class="table-center">
  <table align="center">
    <tr>
      <th>Placa</th>
      <th>Descrição</th>
      <th>Wiki</th>
    </tr>
    <tr>
      <td align="center"><strong>XIAO eInk Expansion Board v2</strong></td>
      <td>Placa de expansão plug-and-play para qualquer módulo XIAO; suporta pequenas telas ePaper populares.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/pt-br/xiao_eink_expansion_board_v2" target="_blank" rel="noopener noreferrer">v2 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>XIAO ePaper Breakout Board</strong></td>
      <td>A placa breakout original para XIAO + ePaper; bem documentada com suporte a OpenEpaperLink (OEPL).</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/pt-br/XIAO-eInk-Expansion-Board" target="_blank" rel="noopener noreferrer">Breakout →</a></td>
    </tr>
  </table>
</div>

:::tip
Uma **[Visão Geral das Placas Driver ePaper](https://wiki.seeedstudio.com/pt-br/xiao_epaper_display_board_overview)** consolidada também está disponível, com listas de recursos de cada placa lado a lado.
:::

## Kits DIY e Painéis Avulsos

Para makers que preferem montar tudo por conta própria, duas opções flexíveis:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Produto</th>
      <th>O que vem na caixa / o que é</th>
      <th>Melhor para</th>
      <th>Wiki</th>
    </tr>
    <tr>
      <td><strong>TRMNL 7.5" (OG) DIY Kit</strong><br/><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.webp" style={{width:200, height:'auto'}}/></div></td>
      <td>Display ePaper monocromático de 7,5" + placa controladora ESP32 + suporte de acrílico. Pré-ajustado para a plataforma em nuvem TRMNL; também roda ESPHome e Arduino.</td>
      <td>O caminho mais rápido para um painel no estilo TRMNL com o menor custo de BOM.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/pt-br/trmnl_7inch5_diy_kit_main_page" target="_blank" rel="noopener noreferrer">TRMNL Kit →</a></td>
    </tr>
    <tr>
      <td><strong>XIAO 7.5" ePaper Panel</strong><br/><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.webp" style={{width:200, height:'auto'}}/></div></td>
      <td>Painel ePaper de 7,5" sem moldura, com um conector FPC que se conecta diretamente ao footprint de um módulo XIAO.</td>
      <td>Projetos compactos e de baixo custo em que você já tem um XIAO e quer adicionar uma tela.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/pt-br/xiao_075inch_epaper_panel" target="_blank" rel="noopener noreferrer">XIAO Panel →</a></td>
    </tr>
  </table>
</div>

## Ecossistema de software em um relance

Todo produto ePaper da Seeed converge para o mesmo ecossistema de software. Escolha o fluxo de trabalho que corresponde ao seu nível de habilidade — você pode misturar e combinar:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Ferramenta / Plataforma</th>
      <th>Tipo</th>
      <th>O que faz</th>
      <th>Compatível com</th>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/pt-br/sensecraft_hmi_overview" target="_blank" rel="noopener noreferrer"><strong>SenseCraft HMI</strong></a></td>
      <td align="center">No-code (nuvem)</td>
      <td>Gerador de IA, Galeria, Canvas, conteúdo RSS / Web, implantação OTA. O firmware padrão na reTerminal E Series.</td>
      <td>reTerminal E1001 / E1002 / E1003 / E1004 · EE02 · EE03 · EE04 · EE05</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/pt-br/epaper_work_with_esphome" target="_blank" rel="noopener noreferrer"><strong>ESPHome / Home Assistant</strong></a></td>
      <td align="center">Baseado em YAML</td>
      <td>Integração nativa com Home Assistant; crie dashboards de forma declarativa em YAML.</td>
      <td>reTerminal E1001 / E1002 / E1004 · EE04 · TRMNL DIY Kit · XIAO 7.5" Panel</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_trmnl" target="_blank" rel="noopener noreferrer"><strong>TRMNL</strong></a></td>
      <td align="center">Dashboard em nuvem</td>
      <td>Dashboards baseados em plug-ins (calendário, notícias, clima, finanças, dados personalizados).</td>
      <td>reTerminal E1001 · E1002 (modo mono) · TRMNL 7.5" DIY Kit · XIAO 7.5" Panel</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_arduino" target="_blank" rel="noopener noreferrer"><strong>Arduino / PlatformIO / ESP-IDF</strong></a></td>
      <td align="center">Código (C/C++)</td>
      <td>Controle totalmente programático: GPIO, sensores, rede, renderização personalizada.</td>
      <td>Todos os produtos ESP32-S3 (E1001–E1004, EE02–EE05, TRMNL Kit, XIAO Panel)</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_squareline_vision" target="_blank" rel="noopener noreferrer"><strong>SquareLine Vision</strong></a></td>
      <td align="center">Design visual de UI</td>
      <td>UI LVGL de arrastar e soltar no navegador, depois exporte código pronto para compilação.</td>
      <td>reTerminal E1001 / E1002</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_eezstudio" target="_blank" rel="noopener noreferrer"><strong>EEZ Studio</strong></a></td>
      <td align="center">Design visual de UI</td>
      <td>Projete telas HMI visualmente e faça a implantação por meio da Arduino IDE.</td>
      <td>reTerminal E1001 / E1002 · EE04</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_lopaka" target="_blank" rel="noopener noreferrer"><strong>Lopaka</strong></a></td>
      <td align="center">Design visual de UI</td>
      <td>Ferramenta de desenho baseada na Web que exporta código para layouts ePaper monocromáticos e coloridos.</td>
      <td>reTerminal E1001 / E1002</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/pt-br/EN04_opendisplay" target="_blank" rel="noopener noreferrer"><strong>OpenEPaperLink / OpenDisplay</strong></a></td>
      <td align="center">Firmware open-source (BLE)</td>
      <td>Firmware ePaper open-source acionado por BLE. OpenDisplay tem como alvo o EN04 pronto para uso; OEPL Config Builder tem como alvo a Breakout Board + caminho DIY com XIAO nRF52840.</td>
      <td>EN04 · XIAO ePaper Breakout Board</td>
    </tr>
  </table>
</div>

## Índice de tutoriais de aplicação

Cada tutorial abaixo percorre uma plataforma de ponta a ponta:

### Frameworks de casa inteligente e dashboards

- [Work with ESPHome](https://wiki.seeedstudio.com/pt-br/epaper_work_with_esphome) — referência principal: caminhos de gravação, esqueleto YAML genérico, integração com Home Assistant. Guias por produto: [reTerminal E (Básico)](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_esphome), [reTerminal E (Avançado)](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_esphome_advanced), [EE04](https://wiki.seeedstudio.com/pt-br/EE04_with_esphome_advanced), [XIAO 7.5" Panel](https://wiki.seeedstudio.com/pt-br/xiao_075inch_epaper_panel_esphome), [TRMNL DIY Kit](https://wiki.seeedstudio.com/pt-br/ogdiy_kit_works_with_esphome).
- [Work with TRMNL](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_trmnl) — implante dashboards E-Ink por meio da plataforma em nuvem TRMNL. Um único artigo agora cobre reTerminal E1001/E1002, o TRMNL DIY Kit e o XIAO 7.5" ePaper Panel — escolha seu hardware nas abas.

### Ferramentas no-code / de design visual de UI

- [Work with SenseCraft HMI](https://wiki.seeedstudio.com/pt-br/EE04_with_hmi) — plataforma de interface visual no-code da Seeed; cobre reTerminal E Series e placas controladoras EE0x.
- [Work with SquareLine Vision](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_squareline_vision)
- [Work with EEZ Studio](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_eezstudio) — fluxo de trabalho LVGL combinado reTerminal E Series + EE04.
- [Work with Lopaka](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_lopaka)

### Desenvolvimento baseado em código

- [Work with Arduino](https://wiki.seeedstudio.com/pt-br/epaper_work_with_arduino) — referência principal: configuração da IDE, biblioteca `Seeed_GFX`, geração de `driver.h`. Guias por produto: [reTerminal E Series](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_arduino), [TRMNL DIY Kit](https://wiki.seeedstudio.com/pt-br/ogdiy_kit_works_with_arduino), [XIAO 7.5" Panel](https://wiki.seeedstudio.com/pt-br/xiao_075inch_epaper_panel_arduino).
- [Work with PlatformIO — EE04](https://wiki.seeedstudio.com/pt-br/ee04_with_platformio)

### ESL / OEPL open-source

- [Work with OpenEPaperLink / OpenDisplay](https://wiki.seeedstudio.com/pt-br/EN04_opendisplay) — um único artigo cobre o kit EN04 BLE e o caminho DIY com ePaper Breakout Board + XIAO nRF52840.

## Recursos

- [SenseCraft HMI Documentation](https://wiki.seeedstudio.com/pt-br/sensecraft_hmi_overview/)
- [ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [XIAO Series Overview](https://wiki.seeedstudio.com/pt-br/xiao_topic_page/)
- [Seeed Studio ePaper Category Store](https://www.seeedstudio.com/catalogsearch/result/?q=epaper)

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
