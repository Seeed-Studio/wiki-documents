---
description: Aplicativo Wi-Fi HaLow Media Gateway — envio de mídia do smartphone via XIAO ESP32-S3 e Wio-WM6180 por um link Wi-Fi HaLow até um gateway HaLowLink 2 e console de mídia em PC
title: Wi-Fi HaLow Media Gateway
keywords:
  - HaLowLink 2
  - Wi-Fi HaLow
  - Wio-WM8108
  - Media Gateway
  - XIAO ESP32-S3
  - Wio-WM6180
  - Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /halowlink2_media_gateway
sku: 100072966
last_update:
  date: 11/12/2026
  author: Advent Jiang
createdAt: '2026-11-06'
updatedAt: '2026-11-12'
url: https://wiki.seeedstudio.com/pt-br/halowlink2_media_gateway/
---

# Wi-Fi HaLow Media Gateway

<!-- Internal note: TOP-PRIORITY application page. Content sourced from the Seeed engineering demo write-up "Wi-Fi HaLow Media Gateway Demo.docx" (received 2026-11-12) — the end-to-end path was demonstrated by Seeed engineering and the figures below come from that demonstration. Firmware files, source code, and flashing instructions must NOT be documented until officially released and verified; those parts stay as internal comments, not visible TODOs. -->

## Introdução

Este aplicativo transforma um HaLowLink 2 mais um nó XIAO ESP32-S3 em um **media gateway**: um smartphone comum envia fotos, vídeos e arquivos para um PC por um **link Wi-Fi HaLow** de longo alcance, sem qualquer suporte HaLow no telefone.

O caminho de ponta a ponta demonstrado:

```text
Smartphone --2.4 GHz Wi-Fi--> XIAO ESP32-S3 + Wio-WM6180 --Wi-Fi HaLow--> HaLowLink 2 --Ethernet--> PC (Media Console)
```

O smartphone só precisa de Wi-Fi de 2,4 GHz comum. O nó XIAO faz a ponte entre os dois mundos: ele hospeda um hotspot de 2,4 GHz para o telefone e mantém o link HaLow com o gateway.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-setup.jpg" alt="HaLowLink 2 com antena ao lado de sua caixa de varejo, e o nó gateway XIAO ESP32-S3 mais Wio-WM6180 à frente" width={600} height="auto" /></p>

## Requisitos de Hardware

| Produto | SKU | Papel na demonstração |
|:----|:----|:----|
| HaLowLink 2 Wi-Fi HaLow Gateway | 100072966 | Ponto de Acesso Wi-Fi HaLow; ponte Ethernet para o PC |
| Wi-Fi HaLow Transceiver for Seeed Studio XIAO (Wio-WM6180) | 109100041 | O rádio HaLow no nó gateway |
| Seeed Studio XIAO ESP32-S3 | 113991114 | Controlador do gateway: hospeda o SoftAP de 2,4 GHz e retransmite a mídia |

Você também precisa de:

- Um smartphone com Wi-Fi de 2,4 GHz (nenhum suporte HaLow é necessário)
- Um PC com Windows com porta Ethernet, executando o Media Console
- Fontes de alimentação e cabos para todos os dispositivos

## Arquitetura do Sistema

Cinco estágios, cada um entregando a mídia ao próximo:

| Estágio | Link | Observações |
|:-----:|:----:|:------|
| Smartphone → nó XIAO | Wi-Fi de 2,4 GHz | O telefone faz upload para o SoftAP do nó por meio de uma página no navegador |
| XIAO ESP32-S3 → Wio-WM6180 | SPI | O controlador transmite os bytes recebidos para o rádio HaLow |
| Wio-WM6180 → HaLowLink 2 | Wi-Fi HaLow (sub-1 GHz) | O salto de longo alcance; o nó ingressa na rede HaLow do gateway |
| HaLowLink 2 → PC com Windows | Ethernet | O gateway entrega o tráfego ao Media Console |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-architecture.png" alt="Arquitetura de sistema da demonstração Wi-Fi HaLow Media Gateway: smartphone, XIAO ESP32-S3, transceptor Wio-WM6180, HaLowLink 2, PC com Windows" width={800} height="auto" /></p>

## Configurar o Lado do Gateway

1. **HaLowLink 2.** Configure o gateway — antena, alimentação, conexão ao computador — seguindo [Preparation](/pt-br/halowlink2_getting_started#preparation), depois faça login via [Access the Web UI](/pt-br/halowlink2_getting_started#access-the-web-ui). A configuração de fábrica Router é suficiente para uma demonstração autônoma; use [Access Point Mode](/pt-br/halowlink2_getting_started#access-point-mode-recommended) para integrar a uma LAN existente.
2. **Nó XIAO.** Monte o XIAO ESP32-S3 com o módulo Wio-WM6180 seguindo o guia [Wi-Fi HaLow Module for XIAO](/pt-br/getting_started_with_wifi_halow_module_for_xiao), conecte sua antena e grave o firmware Media Gateway fornecido pela Seeed Studio.
3. **PC.** Conecte o PC com Windows à **porta LAN** do gateway por Ethernet (rede de demonstração `192.168.12.x`) e inicie o servidor Media Console.

<!-- Pending official release (internal): XIAO firmware binary/source, flashing procedure, and the Media Console package. Do NOT fabricate download links, repository URLs, server ports, or flashing steps — insert the official ones here when the release package arrives. -->

Após energizar, o nó opera automaticamente: o ESP32-S3 inicializa o Wio-WM6180, associa-se ao Ponto de Acesso HaLowLink 2 via Wi-Fi HaLow e inicia seu SoftAP de 2,4 GHz para o telefone.

**Verifique o link HaLow antes de executar a demonstração:** na página inicial do gateway, abra o cartão **Access Point (HaLow)** — o nó associado aparece com nível de sinal e taxa RX/TX, e as páginas **Local Network** / **Network → Interfaces** mostram o lado LAN que carrega o tráfego até o PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-ap-clients.png" alt="Janela Access Point (HaLow) da interface web do HaLowLink 2 listando o nó gateway associado com nível de sinal e taxa RX/TX" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Interface web do gateway: o cartão Access Point (HaLow) lista o nó gateway associado com nível de sinal e taxa RX/TX — o link está ativo antes de qualquer mídia trafegar.</em></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-lan-interface.png" alt="Página Network Interfaces da interface web do HaLowLink 2 mostrando a interface LAN usada para a rede de demonstração" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Interface web do gateway, Network → Interfaces: a interface LAN (192.168.12.x) carrega o tráfego da demonstração até o PC.</em></p>

## Executar a Demonstração

1. **Telefone:** conecte-se ao SoftAP de 2,4 GHz do nó XIAO, abra a página web do Media Gateway em `192.168.4.1` no navegador, escolha uma foto, vídeo ou arquivo e inicie o upload.
2. **Nó:** o ESP32-S3 recebe o upload e o transmite pelo link HaLow — sem armazenamento intermediário envolvido.
3. **PC:** o Media Console recebe, armazena e lista o arquivo; abra-o ali para pré-visualizar, reproduzir, salvar ou baixar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-phone-upload.png" alt="Página do navegador do smartphone do Media Gateway com uma foto selecionada e o upload em andamento" width={400} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Lado do smartphone: a página de upload baseada em navegador servida pelo SoftAP do nó XIAO, com uma foto selecionada e a transferência em andamento.</em></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-console.png" alt="Página do Media Console no PC listando fotos, vídeos e arquivos recebidos com ações de pré-visualização e download" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Lado do PC: o Media Console lista cada arquivo recebido — fotos, vídeos, documentos — prontos para pré-visualizar, reproduzir, salvar ou baixar.</em></p>

Como o nó move os dados:

- **Gateway de dupla rede:** o SoftAP atende o lado do telefone enquanto a interface HaLow atende o lado do PC; o gerenciamento de rota padrão mantém a mídia de saída no caminho Wi-Fi HaLow.
- **Retransmissão em streaming:** a mídia é encaminhada em **blocos de 16 KB** — o ESP32-S3 nunca armazena um arquivo completo na memória, e nenhuma codificação Base64 é usada.
- **Tipos de arquivo:** JPG, PNG, MP4 e arquivos gerais.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-node.png" alt="XIAO ESP32-S3 empilhado com o módulo Wi-Fi HaLow Wio-WM6180 e cabo de antena, o nó gateway da demonstração" width={600} height="auto" /></p>

## Resultados da Demonstração

A transferência completa de ponta a ponta foi demonstrada pela equipe de engenharia da Seeed:

- **Upload de foto** — transferência de JPG / PNG verificada
- **Transferência de vídeo** — upload e reprodução de MP4 verificados
- **Arquivos genéricos** — upload e download suportados
- **PC Media Console** — arquivos recebidos pré-visualizados, reproduzidos, salvos e baixados
- **Conectividade de ponta a ponta** — transferência de mídia de smartphone para PC via Wi-Fi HaLow, sem suporte HaLow no telefone

<!-- Pending demo verification (internal): record the exact firmware versions, HaLow channel/bandwidth, and distance used in the demonstration once the engineering write-up is finalized; add per-stage troubleshooting entries observed in real runs. -->

## Solução de Problemas

Para problemas do gateway e do link HaLow — acesso à interface web, pareamento, endereçamento IP, taxa de transferência — consulte [Getting Started → Troubleshooting](/pt-br/halowlink2_getting_started#troubleshooting).

## Recursos

- [Getting Started with Wi-Fi HaLow Module for XIAO](/pt-br/getting_started_with_wifi_halow_module_for_xiao)
- [Getting Started with Wi-Fi HaLow Mini PCIe Module](/pt-br/getting_started_with_wifi_halow_mini_pcie_module)
- [HaLowLink 2 Getting Started](/pt-br/halowlink2_getting_started)

<!-- Pending official release (internal): add source code / firmware links here once released. -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
