---
description: ODYSSEY - X86J4105
title: Introdução ao LinkStar
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Linkstar_Datasheet
sku: 102110775,102110777
last_update:
  date: 01/03/2023
  author: w0x7ce
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Linkstar_Datasheet/
---

<!-- ---
name: 
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 
tags:
--- -->

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/OVerview.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H68K-1432-p-5501.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

O roteador LinkStar-H68K é equipado com o chip RK3568 Cortex-A55 quad-core, contando com 4 interfaces Ethernet para dual-2.5G e dual-1G, juntamente com a tecnologia Wi-Fi 6 (opcional), ao mesmo tempo em que oferece alta capacidade de armazenamento e funcionalidade de reprodutor de mídia. Neste wiki mostraremos a visão geral do hardware e como começar rapidamente a usar o LinkStar.

## Visão Geral do Hardware

Esta é a visão geral de hardware do LinkStar - H68K, aqui apresentaremos os detalhes de cada componente.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/hardware_overview1.jpg" /></div>

### Fonte de Alimentação

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-y6fn{background-color:#c0c0c0;text-align:left;vertical-align:top}\n.tg .tg-0lax{text-align:left;vertical-align:top}\n" }} /> -->

<table className="tg">
  <thead>
    <tr>
      <th className="tg-y6fn">Tensão de Operação</th>
      <th className="tg-0lax">5V~24V DC (12V-1A DC recomendado)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-y6fn">Adaptador de Energia DC</td>
      <td className="tg-0lax">12V-1A DC (recomendado)</td>
    </tr>
    <tr>
      <td className="tg-y6fn">Adaptador de Energia DC</td>
      <td className="tg-0lax">12-2A DC para acionamento de hardware adicional (recomendado)</td>
    </tr>
    <tr>
      <td className="tg-y6fn"><span style={{fontWeight: 400, fontStyle: 'normal'}}>Fonte de alimentação Type-C</span></td>
      <td className="tg-0lax">Abaixo de 5V (não suporta carga rápida)</td>
    </tr>
  </tbody>
</table>

### Rede Ethernet

<div align="center"><img width={700} src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEyMg_968748_fi2e0dpZ5__TlzPp_1668582262?w=960&h=500" /></div>

### Desempenho do Chip

O RK3568 é um chip SoC 4K topo de linha com alto custo-benefício pertencente à SWICK. Ele adota a arquitetura ARM e integra um Cortex-A55 quad-core com um coprocessador NEON separado para suportar decodificação de vídeo 4K e codificação de vídeo 3K. Muitos poderosos mecanismos de hardware embarcados fornecem desempenho otimizado para aplicações de alto nível.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/chip_performance.png" /></div>

### Interfaces

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-w2ai{background-color:#FFF;border-color:inherit;color:#3D3D3D;text-align:left;vertical-align:top}\n.tg .tg-2e9t{background-color:#FFF;color:#3D3D3D;text-align:left;vertical-align:top}\n" }} /> -->

<table class="tg">
<tbody>
  <tr>
    <td class="tg-0pky">ETH0</td>
    <td class="tg-0pky">Suporta Ethernet 1G com chip PHY RTL8211F</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH1</td>
    <td class="tg-0pky">Suporta Ethernet 1G com chip PHY RTL8211F</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH2</td>
    <td class="tg-0pky">Suporta Ethernet 2.5G/1G com chip PHY RTL8211F</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH3</td>
    <td class="tg-0pky">Suporta Ethernet 2.5G/1G com chip PHY RTL8211F</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB3.0 Type-C</td>
    <td class="tg-0pky">Passagem direta de IO com fonte de alimentação de 5V (não suporta carga rápida)</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 3.0 Type-A</td>
    <td class="tg-0pky">x1</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 2.0 Type-A</td>
    <td class="tg-0pky">x2</td>
  </tr>
  <tr>
    <td class="tg-0pky">M2 WIFI(opcional)</td>
    <td class="tg-0pky">Módulo MT7921 com interface PCIE2.0</td>
  </tr>
    <tr>
    <td class="tg-0pky">HDMI</td>
    <td class="tg-0pky">HDMI 2.0 para saída 4K, áudio e vídeo</td>
  </tr>
  <tr>
    <td class="tg-0pky">Entrada/saída de áudio 3,5 mm</td>
    <td class="tg-0pky">Implementado pelo chip de alimentação RK809-5</td>
  </tr>
  <tr>
    <td class="tg-0pky">Receptor infravermelho</td>
    <td class="tg-0pky">Modelo IRM-3638</td>
  </tr>
  <tr>
    <td class="tg-0pky">Slot para cartão TF</td>
    <td class="tg-0pky">Sinal SDIO SDMMC0</td>
  </tr>
</tbody>
</table>

### Luz Indicadora

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/indicator.png" /></div>

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-y698{background-color:#efefef;border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n" }} /> -->

<table class="tg">
<thead>
  <tr>
    <th class="tg-y698">STA</th>
    <th class="tg-y698">Indicador de Disco Rígido</th>
    <th class="tg-y698">Indicador ETH</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">Indicador de operação/atividade</td>
    <td class="tg-0pky">Indicações de conexão do Disco Rígido</td>
    <td class="tg-0pky">Indicação de conexão de rede</td>
  </tr>
</tbody>
</table>

## Início Rápido

Com o sistema Android 11 pré-instalado, você pode usar o LinkStar diretamente assim que receber o pacote.

### Preparação

- LinkStar
- Conector HDMI
- Monitor
- Mouse
- Adaptador de energia 12V1A

### Instalação

- **Passo 1**. Conecte o LinkStar a um monitor e a um mouse.

- **Passo 2**. Ligue-o conectando o adaptador de energia 12V1A e pressionando o botão de energia.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/power.png" /></div>

- **Passo 3**. O monitor será exibido como:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/display.png" /></div>

:::note
Observe que o botão direito do mouse representa "voltar"; ao clicar nele a página retornará.
:::

Agora você está pronto para começar!

## Recursos

- [RK3568 Datasheet](https://files.seeedstudio.com/wiki/LinkStar/RK3568_Brief_Datasheet.pdf)
- [M7921E Wi-Fi Module](https://files.seeedstudio.com/wiki/LinkStar/M7921E_Wi-Fi_Module.pdf)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
