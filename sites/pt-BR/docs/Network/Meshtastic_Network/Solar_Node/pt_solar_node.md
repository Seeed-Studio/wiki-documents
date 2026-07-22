---
description: SenseCAP Solar Node para Meshtastic & LoRa
title: Introdução ao SenseCAP Solar Node
keywords:
  - Meshtastic
  - Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /meshtastic_solar_node
sidebar_position: 1
last_update:
  date: 3/10/2026
  author: Michelle Huang
createdAt: '2025-04-08'
updatedAt: '2026-05-29'
url: https://wiki.seeedstudio.com/pt-br/meshtastic_solar_node/
---



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png" alt="pir" width={800} height="auto" /></p>

É um nó de comunicação ou repetidor econômico alimentado por energia solar baseado em [Meshtastic®](https://meshtastic.org/), que integra o controlador principal XIAO nRF52840 Plus e o módulo LoRa Wio-SX1262. Ele é especificamente projetado para áreas sem cobertura de rede. Suporta comunicação de longa distância, posicionamento preciso e operação de baixo consumo de energia. É adequado para expandir a cobertura de rede em áreas externas.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
    </a>
</div>

## Comparação de versões

O Solar Node está disponível em duas variantes: [SenseCAP Solar Node P1](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-for-Meshtastic-LoRa-p-6425.html) e [SenseCAP Solar Node P1-Pro](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html).

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114993633-1_1.jpeg" alt="pir" width={800} height="auto" /></p>

## Visão geral

### Recursos

- Integrado com um painel solar de 5W e suporta baterias externas (que precisam ser fornecidas pelos próprios usuários).
- O dispositivo vem com o firmware Meshtastic pré-instalado de fábrica. Ele pode ser integrado perfeitamente ao ecossistema Meshtastic.
- Compatível com o ecossistema Grove e suporta plug-and-play de sensores como sensores de temperatura e umidade, sensores de luz etc.
- É adequado para uso externo de longo prazo.
- Suporta transmissão de 8 a 9KM em áreas abertas. Pode ser usado como um nó externo ou repetidor, expandindo facilmente a rede Mesh e aprimorando a cobertura da rede.

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114993633-3.png" alt="pir" width={800} height="auto" /></p>

### Especificação

<table>
  <tr>
    <td><b>Controlador principal</b></td>
    <th>
      <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html" target="_blank">XIAO nRF52840 Plus</a><br />
      (Nordic nRF52840, processador ARM® Cortex®-M4 de 32 bits com FPU, 64 MHz, 256KB RAM, 1MB Flash, 2MB de Flash onboard)
    </th>
  </tr>
  <tr>
    <td><b>Chip de gerenciamento de carregamento</b></td>
    <td>CN3165 (0,99A)</td>
  </tr>
  <tr>
    <td><b>Módulo LoRa</b></td>
    <td>
      <a href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html" target="_blank">Módulo Wio-SX1262</a><br />
      (Semtech SX1262, TXOP=22dBm@862-930MHz)
    </td>
  </tr>
  <tr>
    <td><b>Módulo GPS (para versão P1-Pro)</b></td>
    <td>
      <a href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">XIAO L76K</a><br />
      (Suporta GPS/GLONASS/Galileo)
    </td>
  </tr>
  <tr>
    <td rowSpan="3"><b>Antena</b></td>
    <td>
      <p>LoRa:</p>
      <p>Tipo: antena de borracha em forma de haste</p>
      <p>Faixa de frequência: 868-915MHz</p>
      <p>Ganho: 2dBi</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>GNSS:</p>
      <p>GPS L1 C/A: 1575,42MHz</p>
      <p>GLONASS L1: 1602MHz</p>
      <p>BeiDou B1: 1561,098MHz</p>
    </td>
  </tr>
  <tr>
    <td>Bluetooth 5.0</td>
  </tr>
  <tr>
    <td><b>Painel solar</b></td>
    <td>5W</td>
  </tr>
  <tr>
    <td rowSpan="2"><b>Interface</b></td>
    <td>Grove *1: IIC/GPIO/UART</td>
  </tr>
  <tr>
    <td>Depuração via USB-C</td>
  </tr>
  <tr>
    <td rowSpan="3"><b>Botão</b></td>
    <td>Ligar/desligar</td>
  </tr>
  <tr>
    <td>Reset</td>
  </tr>
  <tr>
    <td>Definido pelo usuário</td>
  </tr>
  <tr>
    <td rowSpan="4"><b>LED</b></td>
    <td>Luzes indicadoras de status de carregamento *2</td>
  </tr>
  <tr>
    <td>Luz indicadora de status do painel solar *1</td>
  </tr>
  <tr>
    <td>Luz de batimento da malha (Mesh) *1</td>
  </tr>
  <tr>
    <td>Definido pelo usuário *1</td>
  </tr>
  <tr>
    <td><b>Fonte de alimentação</b></td>
    <td>Type-C: 5V 1A</td>
  </tr>
  <tr>
    <td></td>
    <td>Alimentação solar: 5V 1A</td>
  </tr>
  <tr>
    <td><b>Grau de impermeabilidade</b></td>
    <td>IPX6</td>
  </tr>
  <tr>
    <td><b>Bateria (para versão P1-Pro)</b></td>
    <td>
      <p>- 4 baterias de lítio (NMC) 18650 (3350mAh cada)</p>
      <p>- Suporta carregamento via Type-C e solar.</p>
      <p>- Ambiente de descarga: -40～60°C</p>
      <p>- Ambiente de carregamento: 0-50°C</p>
    </td>
  </tr>
  <tr>
    <td><b>Certificação</b></td>
    <td>FCC, CE</td>
  </tr>
  <tr>
    <td><b>Dimensões</b></td>
    <td>191,2 x 201,2 x 42,1 mm</td>
  </tr>
</table>



### Visão geral do hardware

**Itens interativos**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/interactive.png" alt="pir" width={800} height="auto" /></p>

**Acessórios**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/accessory.png" alt="pir" width={800} height="auto" /></p>

**Diagrama**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>
