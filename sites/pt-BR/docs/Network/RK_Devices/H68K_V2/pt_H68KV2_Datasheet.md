---
description: Manual de instruções do LinkStar-V2
title: Introdução ao LinkStar-V2
keywords:
  - Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /h68kv2_datasheet
sku: 102110958
last_update:
  date: 04/18/2024
  author: Parker
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/h68kv2_datasheet/
---

<!-- ---
name: 
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 102110958
tags:
--- -->

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/01.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H68K-1432-V2-p-5886.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introdução

O roteador LinkStar-H68K-V2 é equipado com o chip quad-core Cortex-A55 RK3568, apresentando 4 interfaces Ethernet para duas de 2,5G e duas de 1G, juntamente com a tecnologia Wi-Fi 6, ao mesmo tempo em que oferece alta capacidade de armazenamento e funcionalidade de reprodutor de mídia, sendo recomendado para uso em ambientes internos. Em comparação com a primeira geração do H68K, ele não só possui melhor comunicação e efeito de dissipação de calor, como também o layout das interfaces é mais razoável e conveniente. Neste wiki mostraremos a visão geral do hardware e como começar rapidamente a usar o LinkStar-V2.

## Visão Geral de Hardware

Esta é a visão geral de hardware do LinkStar - H68K - V2, aqui apresentaremos os detalhes de cada componente.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/02.jpg" /></div>

### Fonte de Alimentação

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-y6fn{background-color:#c0c0c0;text-align:left;vertical-align:top}\n.tg .tg-0lax{text-align:left;vertical-align:top}\n" }} /> -->

<table className="tg">
  <thead>
    <tr>
      <th className="tg-y6fn">Tensão de Operação</th>
      <th className="tg-0lax">Suporta entrada DC de ampla faixa de 5V-20V, exigência de potência >10W</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-y6fn">Adaptador de Energia DC</td>
      <td className="tg-0lax">Fonte de alimentação pela interface DC 12V cancelada</td>
    </tr>
    <tr>
      <td className="tg-y6fn"><span style={{fontWeight: 400, fontStyle: 'normal'}}>Fonte de alimentação Type-C</span></td>
      <td className="tg-0lax">Suporta carregamento rápido PD com cabo CC</td>
    </tr>
  </tbody>
</table>

### Rede Ethernet

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/03.jpg" /></div>

### Desempenho do Chip

RK3568 é um chip SoC topo de linha 4K com alta relação custo-benefício pertencente à SWICK. Adota arquitetura ARM e integra um Cortex-A55 quad-core com um coprocessador NEON separado para suportar decodificação de vídeo 4K e codificação de vídeo 3K. Muitos poderosos motores de hardware embarcados fornecem desempenho otimizado para aplicações de alto nível.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/04.png" /></div>
<br/>
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/05.png" /></div>

### Interfaces

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-w2ai{background-color:#FFF;border-color:inherit;color:#3D3D3D;text-align:left;vertical-align:top}\n.tg .tg-2e9t{background-color:#FFF;color:#3D3D3D;text-align:left;vertical-align:top}\n" }} /> -->

<table class="tg">
<tbody>
  <tr>
    <td class="tg-0pky">ETH0</td>
    <td class="tg-0pky">Suporta Ethernet de 1G com chip PHY RTL8211F</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH1</td>
    <td class="tg-0pky">Suporta Ethernet de 1G com chip PHY RTL8211F</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH2</td>
    <td class="tg-0pky">Suporta Ethernet 2,5G/1G com chip PHY RTL8211F</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH3</td>
    <td class="tg-0pky">Suporta Ethernet 2,5G/1G com chip PHY RTL8211F</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB3.0 Type-C</td>
    <td class="tg-0pky">Suporta carregamento rápido PD com cabo CC e entrada DC de ampla faixa de 5V-20V</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 3.0 Type-A</td>
    <td class="tg-0pky">x1</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 2.0 Type-A</td>
    <td class="tg-0pky">x1</td>
  </tr>
  <tr>
    <td class="tg-0pky">M2 WIFI</td>
    <td class="tg-0pky">Módulo MT7921 com interface PCIE2.0</td>
  </tr>
    <tr>
    <td class="tg-0pky">HDMI</td>
    <td class="tg-0pky">HDMI 2.0 para saída 4K, com áudio e vídeo</td>
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

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/06.png" /></div>

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-y698{background-color:#efefef;border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n" }} /> -->

<table class="tg">
<thead>
  <tr>
    <th class="tg-y698">Energia</th>
    <th class="tg-y698">Indicador de Disco Rígido</th>
    <th class="tg-y698">Indicador ETH</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">Indicador de operação/atividade</td>
    <td class="tg-0pky">Instruções de conexão do disco rígido</td>
    <td class="tg-0pky">Indicação de conexão de rede</td>
  </tr>
</tbody>
</table>

## Início Rápido

Com o sistema OpenWRT pré-instalado, você pode usar o LinkStar diretamente assim que receber o pacote.

### Preparação

- LinkStar-H68K-V2
- Cabo de rede x2
- Adaptador de energia com carregamento rápido PD e cabo CC

### Instalação

- **Passo 1**. ETH0 é a porta WAN e as outras portas de rede são portas LAN. Se você quiser gerenciar o OpenWRT do LinkStar-V2 via cabo de rede, conecte o cabo de rede a uma porta LAN diferente de ETH0.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/33.png" /></div>

- **Passo 2**. Ligue-o conectando o adaptador de energia com carregamento rápido PD e cabo CC

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/32.png" /></div>

**Passo 3.** Gerenciar o backend do OpenWRT

Use um cabo de rede para conectar à porta de rede ETH1/ETH2/ETH3 do LinkStar-V2. Em seguida, digite o endereço: `192.168.100.1` no seu navegador para acessar o backend de administração.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/31.png" /></div>

A conta e a senha iniciais do sistema são as seguintes.

```text
account: root
password: password
```

## Recursos

LinkStar H68K-V2 é um hardware de código aberto. Links de download para materiais relevantes.

| Versão                     | Descrição        | Download                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| OpenWRT R22.11.18           | Adicionar suporte a Docker| [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |
| Armbian 24.5.0 desktop (opcional)|-| [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/download/Armbian_community_24.5.0_trunk.389_h68k_desktop.zip) |
| Ferramenta de gravação em eMMC e driver | - | [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) |
| balenaEtcher                | Ferramenta de gravação de ISO  | [Download](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| H68K-V2-SCH                    | Esquemáticos H68K  | [Download](https://files.seeedstudio.com/wiki/LinkStar_V2/H68K_V2_Schematic.pdf) |
| RK3568 Datasheet            | - | [Download](https://files.seeedstudio.com/wiki/LinkStar/RK3568_Brief_Datasheet.pdf) |
| M7921E Wi-Fi Module         | - | [Download](https://files.seeedstudio.com/wiki/LinkStar/M7921E_Wi-Fi_Module.pdf) |

## Suporte Técnico e Discussão do Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
