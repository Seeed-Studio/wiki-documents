---
description: Introdução ao Wio Tracker L1
title: Introdução ao Wio Tracker L1
keywords:
  - Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-L1.webp
slug: /wio_tracker_l1_node
sidebar_position: 1
last_update:
  date: 12/18/2025
  author: Michelle Huang
createdAt: '2025-05-23'
updatedAt: '2026-06-28'
url: https://wiki.seeedstudio.com/pt-br/wio_tracker_l1_node/
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg" alt="pir" width={600} height="auto" /></p>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-p-6453.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
    </a>
</div>
A Série Wio Tracker L1 é um nó [Meshtastic®](https://meshtastic.org/) de baixo consumo e alta extensibilidade, com LoRa (862–930 MHz), nRF52840 para processamento eficiente e um módulo GPS L76K para rastreamento de localização preciso. Projetado para flexibilidade, ele é compatível com telas OLED e E-Ink, bem como painéis solares e alimentação por bateria, tornando-o ideal para uma ampla gama de aplicações de IoT e fora da rede.

## Modelo da Série L1

:::tip
A Série Wio Tracker L1 está disponível em 4 versões — escolha a que melhor atende às suas necessidades.
:::

### Introdução à Série

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/TTiDN3h7cNk?si=2F0PXFlQmDSefCdX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Comparação de Versões

|Nome do Produto|Wio Tracker L1 Lite|Wio Tracker L1|Wio Tracker L1 Pro|Wio Tracker L1 E-Ink|
|------------------|------------------|--------------------------|-----------------------|-----------------------|
|Imagem|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993653-wio-tracker-l1-lite.jpg" alt="pir" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993648-wio-tracker-l1.jpg" alt="pir" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993649-wio-tracker-l1-pro.jpg" alt="pir" width={300} height="auto" />|<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/L1-e-ink.png" alt="pir" width={300} height="auto" />|
|Link de Compra|<p style={{textAlign: 'center'}}>[Adquira agora!](https://www.seeedstudio.com/Wio-Tracker-L1-Lite-p-6455.html)</p>|<p style={{textAlign: 'center'}}>[Adquira agora!](https://www.seeedstudio.com/Wio-Tracker-L1-p-6453.html)</p>|<p style={{textAlign: 'center'}}>[Adquira agora!](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html)</p>|<p style={{textAlign: 'center'}}>[Adquira agora!](https://www.seeedstudio.com/Wio-Tracker-L1-E-ink-p-6456.html)</p>|
|LoRa|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|GPS|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|Tela|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>OLED de 1,3 polegada</p><br/><p style={{textAlign: 'center'}}>Resolução: 128 × 64 pixels</p>|<p style={{textAlign: 'center'}}>OLED de 1,3 polegada</p><br/><p style={{textAlign: 'center'}}>Resolução: 128 × 64 pixels</p>|<p style={{textAlign: 'center'}}>E-ink de 2,13 polegadas</p><br/><p style={{textAlign: 'center'}}>Resolução: 122 × 250 pixels</p>|
|Conector Solar+Bateria|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>Bateria interna de 2000mAh</p>|<p style={{textAlign: 'center'}}>✅</p>|
|Carcaça|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>-</p>|

## Visão Geral

### Recursos

- **Pré-gravado com firmware Meshtastic**
Pronto para uso imediato, com firmware Meshtastic pré-instalado para uma configuração simples e contínua.

- **Três Opções de Alimentação**
Suporta carregamento rápido via Type-C, entrada solar e alimentação por bateria de íon de lítio para implantação flexível em vários ambientes — ideal para aplicações externas e móveis.

- **Suporte Flexível a Telas**
Telas opcionais OLED de 1,3 polegada e E-Ink de 2,13 polegadas, oferecendo opções de exibição versáteis para diferentes necessidades de consumo de energia e retorno visual.

- **Alta Expansibilidade**
Totalmente compatível com o ecossistema Grove e inclui cabeçalhos PTH e uma interface de depuração SWD para expansão de hardware personalizada e desenvolvimento avançado.

### Especificação

:::tip
Os lotes mais recentes de L1, L1 Lite e L1 E-Ink vêm todos com um cabo adaptador de bateria, convertendo a interface de 1mm para uma interface de 2mm. Isso oferece mais opções de baterias para você.
:::

<table>
  <tr>
    <th colspan="1">Processador</th>
    <th colspan="1">
      Nordic nRF52840<br />ARM® Cortex®-M4 com FPU, opera até 64 MHz
    </th>
  </tr>
  <tr>
    <td colspan="1">Memória On-chip</td>
    <td colspan="1">1 MB flash e 256 kB RAM</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">Sem Fio</td>
    <td colspan="1">LoRa: Baseado em <a href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html">Wio-SX1262</a>, suporta 862-930MHz</td>
  </tr>
   <tr>
  <td colspan="1">Antena LoRa para L1 Pro: 3dBi</td>
  </tr>
  <tr>
    <td colspan="1">Bluetooth 5.0</td>
  </tr>
  <tr>
    <td colspan="1">GPS</td>
    <td colspan="1">L76K (GPS, BeiDou, GLONASS, QZSS)</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">Interface</td>
    <td colspan="1">Grove *1: UART/IIC/GPIO</td>
  </tr>
  <tr>
    <td colspan="1">Plated Through Hole（PTH）: UART/IIC/GPIO/Analógico</td>
  </tr>
  <tr>
    <td colspan="1">Pads de solda reservados para SWD</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">Entrada de Energia</td>
    <td colspan="1">USB Type-C: 5V — 1A</td>
  </tr>
  <tr>
    <td colspan="1">Painel Solar (2P-2,0mm): 5V — 1A</td>
  </tr>
  <tr>
    <td colspan="1">Bateria de Lítio (2P-1,25mm): 3,7V — 1A</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">[Tela OLED](https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html)</td>
    <td colspan="1">Tamanho: 1,3 polegada</td>
  </tr>
  <tr>
    <td colspan="1">Resolução: 128 × 64 pixels</td>
  </tr>
  <tr>
    <td colspan="1">Área Ativa (mm): 34,5 × 23,0</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">[Tela E-Ink](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html)</td>
    <td colspan="1">Tamanho: 2,13 polegadas</td>
  </tr>
  <tr>
    <td colspan="1">Resolução: 122 × 250 pixels</td>
  </tr>
  <tr>
    <td colspan="1">Área Ativa (mm): 48,55 × 23,7046</td>
  </tr>
  <tr>
    <td colspan="1">Certificação</td>
    <td colspan="1">FCC, CE, RoHS</td>
  </tr>
</table>

### Visão Geral de Hardware

**Wio Tracker L1**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio_tracker-l1.png" alt="pir" width={800} height="auto" /></p>

**Wio Tracker L1 Lite**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio_tracker_l1_lite.png" alt="pir" width={800} height="auto" /></p>

**Wio Tracker L1 Pro**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio_tracker_l1-pro.png" alt="pir" width={800} height="auto" /></p>

**Diagrama**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1%20Diagram.png" alt="pir" width={800} height="auto" /></p>

## Suporte Técnico e Discussão sobre o Produto

<p style={{textAlign: 'center'}}><a href="https://www.facebook.com/groups/1755190828846458" target="_blank"><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Banner_QRCode_FB.jpg" border="0" /></a></p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>