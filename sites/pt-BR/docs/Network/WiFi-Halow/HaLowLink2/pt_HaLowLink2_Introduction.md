---
description: Introdução ao HaLowLink 2 Wi-Fi HaLow Gateway — recursos, especificações, visão geral de hardware, conteúdo da embalagem e recursos
title: HaLowLink 2 Wi-Fi HaLow Gateway
keywords:
  - HaLowLink 2
  - Wi-Fi HaLow
  - Wio-WM8108
  - MM8108
  - IEEE 802.11ah
  - OpenWrt
  - Gateway
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /halowlink2_introduction
sku: 100072966
last_update:
  date: 11/12/2026
  author: Advent Jiang
createdAt: '2026-11-06'
updatedAt: '2026-11-12'
url: https://wiki.seeedstudio.com/pt-br/halowlink2_introduction/
---

# HaLowLink 2 Wi-Fi HaLow Gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-hero.png" alt="HaLowLink 2 Wi-Fi HaLow Gateway standing on a desk with its antenna attached" width={700} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>HaLowLink 2 em seu suporte com a antena específica da região conectada.</em></p>

## Introdução

O **HaLowLink 2** é um gateway Wi-Fi HaLow (IEEE 802.11ah) vendido pela Seeed Studio (SKU **100072966**). Ele opera como **Roteador, Ponto de Acesso ou Extensor** Wi-Fi HaLow: crie uma nova rede HaLow, adicione conectividade HaLow a uma rede existente ou emparelhe duas unidades para alcançar locais remotos a até 1 km de distância (linha de visada; dependente do ambiente). Seu rádio sub-1 GHz **MM8108** fornece o link HaLow.

Com uma segunda unidade como Extensor, ele também leva **hotspots Wi-Fi de 2,4 GHz e Ethernet com fio para locais remotos** através do link HaLow — assim, celulares, laptops e dispositivos IoT comuns também entram na rede. As configurações de Roteador e Ponto de Acesso são selecionadas no assistente de configuração baseado em OpenWrt; o botão físico Mode alterna a unidade para o modo Extensor, inicia o emparelhamento ou executa uma restauração de fábrica.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/HaLowLink-2-Wi-Fi-Halow-Gateway-p-7025.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Recursos

<!-- Internal note: features below are taken from the Seeed product page and the official Morse Micro HaLowLink 2 Product Brief (Rev 9), which agree with each other. -->

- **Wi-Fi HaLow sub-1 GHz de longo alcance** — IEEE 802.11ah no rádio MM8108: alcance de até 1 km em linha de visada, melhor penetração que Wi-Fi de 2,4 GHz, larguras de canal de 1 / 2 / 4 / 8 MHz e taxa PHY máxima de 43,3 Mbps.
- **Três modos, assistente ou botão** — funciona como Roteador, Ponto de Acesso ou Extensor Wi-Fi HaLow. Escolha Roteador ou Ponto de Acesso no assistente de configuração; use o botão Mode para alternar uma unidade para o modo Extensor e emparelhá-la.
- **Conectividade HaLow e 2,4 GHz** — Wi-Fi HaLow mais um ponto de acesso de 2,4 GHz (802.11n, 2×2), para que dispositivos não HaLow também possam entrar na rede.
- **Interfaces cabeadas Gigabit** — 2× portas Ethernet Gigabit (WAN e LAN) e uma porta USB-C que transporta energia e dados Ethernet.
- **Gerenciamento baseado em OpenWrt** — baseado em OpenWrt 23.05, com interface web, assistentes de configuração, diagnósticos, SSH/CLI e atualizações online.

:::note
43,3 Mbps é a **taxa de dados PHY (camada física) máxima** em largura de banda de 8 MHz, não a taxa de transferência de aplicação medida na prática; "até 1 km" é um máximo em linha de visada e não é garantido em todos os ambientes.
:::

## Especificações

<!-- Internal note (Specifications Audit): every row below was cross-checked between the Seeed product page (primary baseline) and the Morse Micro HaLowLink 2 Product Brief (Rev 9). No conflicts were found as of 2026-11-06. Audit table: D:\SeeedWiki\notes\halowlink2\SPEC_AUDIT.md. Never populate this table with HaLowLink 1 values. -->

### Sem fio

| Item | Valor |
|:----:|:-----:|
| Padrão Wi-Fi HaLow | IEEE 802.11ah |
| Módulo / Rádio HaLow | AzureWave AW-HM677 / Morse Micro MM8108 |
| Largura de Canal | 1 / 2 / 4 / 8 MHz (dependente da região) |
| Taxa de Dados PHY Máxima | 43,3 Mbps em largura de 8 MHz (taxa PHY, não taxa de transferência de aplicação) |
| Potência de TX | Até 26 dBm (dependente da região) |
| Wi-Fi de 2,4 GHz | IEEE 802.11n, MediaTek MT7603E, 2×2 com antenas internas |
| Modos de Rede | Roteador / Ponto de Acesso / Extensor Wi-Fi HaLow |
| Alcance | Até 1 km em linha de visada (dependente do ambiente, não garantido) |

### Hardware

| Item | Valor |
|:----:|:-----:|
| CPU | MediaTek MT7621 |
| Memória / Armazenamento | 256 MB DRAM / 32 MB NAND Flash |
| Entrada de Energia | 5 V ⎓ 2 A (USB-C) |
| Temperatura de Operação | 0–40 °C, 5–95% UR sem condensação |
| Dimensões / Peso | 88 × 68 × 24 mm / 102 g (168 g com suporte e antena) |

### Interfaces e Software

| Item | Valor |
|:----:|:-----:|
| Ethernet | 2× portas Ethernet Gigabit (rotuladas WAN e LAN) |
| USB-C | 1× porta USB-C (energia e dados Ethernet) |
| Conector de Antena | SMA (antena externa específica da região incluída) |
| Controle / Indicadores | Botão Mode; LEDs Status, Wi-Fi HaLow e Wi-Fi 2,4 GHz |
| Sistema Operacional | Baseado em OpenWrt 23.05 (pode mudar com atualizações de firmware) |
| Configuração | Interface web (HTTPS) e SSH/CLI (SSH desativado por padrão) |
| Endereço de Gerenciamento | `https://192.168.12.1` (padrão) |

:::note Informações Regionais
A família de produtos oferece suporte a mercados regionais incluindo **EUA, Canadá, Austrália, Reino Unido, Europa e Japão**. A potência de TX é limitada a 14 dBm na UE/Reino Unido e 16 dBm no Japão; bandas, canais e larguras de banda disponíveis variam conforme o modelo regional, e a operação EasyMesh / malha 802.11s não é suportada na UE ou no Reino Unido. Use o modelo destinado ao seu país ou região, com a antena e o adaptador de energia fornecidos. A região regulatória não pode ser alterada por meio de configuração de usuário suportada. Certificações e declarações se aplicam a modelos e regiões específicos; confirme a variante regional exata antes da compra.
:::

<!-- Requires Verification (internal): confirm the manufacturer regional part number for Seeed SKU 100072966 and archive the applicable FCC, EU DoC, Japan MIC/Giteki, and Wi-Fi CERTIFIED documents before listing them as certifications of this SKU. The existing specification audit records source agreement, not certificate coverage verification. -->

## Visão Geral de Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-ports.jpg" alt="HaLowLink 2 rear panel with WAN and LAN Ethernet ports and the USB-C power port" width={500} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Painel traseiro: portas Ethernet Gigabit WAN e LAN e a porta de alimentação USB-C (5 V ⎓ 2 A); o conector de antena SMA fica na borda superior.</em></p>

| Interface | Função |
|:---------:|:-----|
| Porta Ethernet (WAN) | Uplink — conecte ao seu roteador ou rede existente |
| Porta Ethernet (LAN) | Rede local — conecte um computador para configuração ou um dispositivo a jusante |
| Porta USB-C | Entrada de energia (5 V ⎓ 2 A) e dados Ethernet quando conectada a um computador |
| Conector SMA | Antena Wi-Fi HaLow externa específica da região (conecte antes de ligar) |
| Botão Mode | Entrar no modo Extensor (mantenha pressionado até o LED Status piscar em azul-piscina rápido, depois solte); iniciar emparelhamento (toque curto); executar restauração de fábrica (mantenha pressionado até o LED Status piscar em verde lentamente, depois solte) |

Três LEDs — **Status**, **Wi-Fi HaLow** e **Wi-Fi 2,4 GHz** — mostram o estado do dispositivo. O LED Status fica verde sólido na configuração de Roteador ou Ponto de Acesso (ambos hospedam o AP HaLow) e azul-piscina sólido no modo Extensor. Em um Extensor, um LED Wi-Fi HaLow roxo sólido significa que ele está associado via HaLow; no Ponto de Acesso, roxo sólido apenas significa que o HaLow está habilitado, portanto confirme os clientes em Dispositivos Conectados. Um close-up rotulado está em [Pair the Devices](/pt-br/halowlink2_getting_started#pair-the-devices); o comportamento completo dos LEDs está em [Getting Started](/pt-br/halowlink2_getting_started#network-configuration).

## Conteúdo da Embalagem

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-package.png" alt="HaLowLink 2 retail box with the package contents laid out beside it" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Conteúdo da embalagem de varejo ao lado da caixa: dispositivo, suporte, antena específica da região, cabo USB-C para USB-C, cabo Ethernet, adaptador de energia com adaptadores de tomada regionais e documentação impressa (Guia de Início Rápido e cartão de Suporte e Garantia).</em></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-box-diagram.png" alt="Official What's in the box diagram with labelled ports, dimensions and included accessories" width={700} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Diagrama oficial da embalagem: portas rotuladas (conector SMA, WAN, LAN, USB-C), dimensões do dispositivo (88 × 68 mm; suporte de 94 mm) e todos os acessórios incluídos com seu adaptador de tomada regional.</em></p>

<!-- Internal note: box contents below are from the official Morse Micro HaLowLink 2 Product Brief (Rev 9); the retail-package photo above (provided 2026-11-11) shows the same items in a Seeed-branded retail box. -->

- Dispositivo HaLowLink 2
- Suporte HaLowLink 2
- Adaptador de energia
- Cabo USB-C para USB-C
- Cabo Ethernet
- Antena específica da região (SMA)
- Adaptadores regionais: EUA, AU, Reino Unido, UE
- Guia de Início Rápido
- Cartão de Suporte e Garantia

## Recursos

- [Página de produto da Seeed Studio — HaLowLink 2 Wi-Fi HaLow Gateway](https://www.seeedstudio.com/HaLowLink-2-Wi-Fi-Halow-Gateway-p-7025.html) (SKU 100072966)
- [HaLowLink 2 Product Brief (PDF)](https://www.morsemicro.com/resources/product_brief/HaLowLink-2_Product-Brief.pdf)
- [HaLowLink User Guide (PDF)](https://www.morsemicro.com/resources/user_guides/HaLowLink-User-Guide.pdf)
- [Notas de versão de software do HaLowLink 2](https://docs.morsemicro.com/software-releases/halowlink2-software-release-notes)
- [Código-fonte OpenWrt da Morse Micro (GitHub)](https://github.com/MorseMicro/openwrt)

**Tutoriais relacionados no Wiki da Seeed Studio:**

- [Introdução ao Módulo Wi-Fi HaLow para XIAO](/pt-br/getting_started_with_wifi_halow_module_for_xiao) (Wio-WM6180)
- [Introdução ao Módulo Wi-Fi HaLow Mini PCIe](/pt-br/getting_started_with_wifi_halow_mini_pcie_module) (família Wio-WM6108)

**Próxima etapa:** continue com [Getting Started](/pt-br/halowlink2_getting_started) para configurar seu HaLowLink 2 pela primeira vez.

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
