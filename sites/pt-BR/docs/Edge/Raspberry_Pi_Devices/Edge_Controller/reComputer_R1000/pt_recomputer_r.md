---
description: Introdução ao reComputer R1000
title: Introdução ao reComputer R1000
keywords:
  - Borda
  - reComputer R1000
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/113991274-2_3.webp
slug: /recomputer_r
sku: 113991274,E24010521,113991334,113991375
last_update:
  date: 09/15/2025
  author: Kasun Thushara
createdAt: '2024-05-10'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<!-- ---
name: The reComputer R1000 edge IoT controller is built on the high-performance Raspberry Pi CM4 platform, featuring a quad-core A72 processor with a maximum support of 8GB RAM and 32GB eMMC.
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 113991274
tags:
--- -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

<br />

O controlador de IoT de borda reComputer R1000 é construído sobre a plataforma de alto desempenho Raspberry Pi CM4, com um processador A72 quad-core com suporte máximo de 8GB de RAM e 32GB de eMMC. Equipado com interfaces Ethernet duplas que podem ser configuradas de forma flexível, também inclui 3 canais RS485 isolados que suportam os protocolos BACnet, Modbus RTU e Modbus TCP/IP.
Com robustas capacidades de comunicação de rede IoT, a série R1000 suporta múltiplas opções de comunicação sem fio, incluindo 4G, LoRa®, Wi-Fi/BLE, permitindo configurações flexíveis para atuar como gateways sem fio correspondentes. Este controlador é ideal para gerenciamento remoto de dispositivos, gerenciamento de energia e vários outros cenários no campo de edifícios inteligentes.

## Recursos

### Projetado para sistemas de automação predial

- Múltiplos canais RS485 isolados suportam comunicação em alta e baixa velocidade.

- Suporta protocolos BACnet, Modbus RTU e Modbus TCP/IP
- Até 8GB de RAM suportam o processamento de milhares de pontos de dados, garantindo desempenho eficiente
- Indicadores LED de dupla face claros ajudam a verificar rapidamente o status operacional
- Gabinete metálico de alta qualidade, compatível com instalação em trilho DIN e em parede
- Suporta Yocto e Buildroot para sistema operacional personalizado

### Desempenho poderoso

- Alimentado por Raspberry Pi CM4

- Broadcom BCM2711 SoC quad-core Cortex-A72 (ARM v8) 64 bits @ 1,5GHz
- Até 8GB de RAM e 32GB de eMMC

### Amplos recursos sem fio

- Wi-Fi integrado

- BLE integrado
- Mini-PCIe1: LTE, USB LoRa®
- Mini-PCIe2: SPI LoRa®, USB LoRa®

### Interfaces ricas

- 3x RS485 (isolado)

- 1x Ethernet 10M/100M/1000M (Suporta PoE)
- 1x Ethernet 10M/100M
- 1x HDMI 2.0
- 2x USB2.0 Tipo-A
- 1x USB2.0 Tipo-C (console USB para atualização do SO)
- 1x slot para cartão SIM

### Segurança e confiabilidade

- Watchdog de hardware

- Supercapacitor de UPS (opcional)
- Gabinete metálico com painéis laterais em PC
- ESD: EN61000-4-2, nível 3
- EFT: EN61000-4-4, nível 2
- Surto: EN61000-4-5, nível 2
- Vida útil de produção: o reComputer R1000 permanecerá em produção até pelo menos dezembro de 2030

> \*Os módulos 4G e LoRa® não acompanham o reComputer R1000 por padrão, adquira os módulos relevantes separadamente.

## Convenções de nomenclatura

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig11.png" alt="pir" width="800" height="auto"/></p>

## Especificações

<div class="table-center">
<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Parâmetro</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Descrição</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Especificações de hardware</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Série de produtos</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>R10xx-10</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>R10xx-00</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>CPU</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi CM4, Cortex-A72 quad-core @ 1,5GHz</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Sistema operacional</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi OS, Ubuntu</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RAM</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1GB/2GB/4GB/8GB</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>eMMC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>8GB/16GB/32GB</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Especificações do sistema</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Entrada</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Bloco de terminais de 2 pinos</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>PoE (como dispositivo alimentado)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Padrão IEEE 802.3af PoE de 12,95W*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Tensão de alimentação (CA/CC)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>12\~24V AC/9\~36V DC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Proteção contra sobretensão</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>40V</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Consumo de energia</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Em repouso: 2,88W; Carga total: 5,52W</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Interruptor de energia</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Não</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Interruptor de reinicialização</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Sim</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Interface</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>Ethernet</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps (suporta PoE*)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100 Mbps IEEE802.3/802.3u</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>USB</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 Host</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x USB-C 2.0 (para gravação do SO)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RS485</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>3 x bloco de terminais de 3 pinos (isolado)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Slot para cartão SIM</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>suporta cartão SIM padrão</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Slot M.2</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>suporta SSD M.2 NVMe</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LED</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6 x indicadores LED</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Buzzer</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Botão de reset</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI(reservado)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>suporta LCD* (na placa dentro do gabinete)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Alto-falante(reservado)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>suporta microfone* (na placa dentro do gabinete)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Comunicação sem fio</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Wi-Fi 2.4/5.0 GHz</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>Wi-Fi integrado*</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>Não</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>BLE 5.0</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>BLE integrado*</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>Não</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LoRa®</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>USB LoRa®/SPI LoRa®*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>4G Celular</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>4G LTE*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Normas</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={3} style={{height: 18, width: '35.4622%'}}>EMC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>ESD:  EN61000-4-2, Nível 3</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>EFT:  EN61000-4-4, Nível 2</td>
    </tr>
     <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Surge:  EN61000-4-5, Nível 2</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={4} style={{height: 18, width: '35.4622%'}}>Certificação</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>CE, FCC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>TELEC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>RoHS</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>REACH</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strongCondições ambientais</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Grau de proteção</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>IP40</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Temperatura de operação</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>-30~70 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Umidade de operação</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>10~95% RH</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Temperatura de armazenamento</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>-40~80 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Outros</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>UPS com supercapacitor</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Módulo SuperCAP UPS LTC3350*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Watchdog de hardware</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1~255s</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RTC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>RTC de alta precisão</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>Segurança</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Chip de criptografia TPM 2.0*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>ATECC608A</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Dissipação de calor</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Sem ventoinha</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Garantia</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 anos</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Vida útil de produção</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Até dezembro de 2030</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Declaração</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Opções marcadas com * exigem compra adicional de acordo com a lista de acessórios.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Declaração de status de componentes e interfaces</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Reservado</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Designado para uso ou expansão futura.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Opcional</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Componentes não essenciais, o usuário pode escolher incluir ou não.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Ocupado</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Atualmente em uso e parte integrante da funcionalidade do produto.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Incluído</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Componentes essenciais fornecidos com o pacote padrão.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Mecânico</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Dimensão (L x A x P)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>130 mm x 93 mm x 49.6 mm</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Gabinete</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Carcaça de liga de alumínio 6061 com painéis laterais transparentes de PC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Montagem</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Trilho DIN/Parede</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Peso (Líquido)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>560g</td>
    </tr>
  </tbody>
</table>
</div>

## Visão geral do hardware

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig03.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig031.png" /></div>

## Visão geral da placa principal

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig02.png" /></div>

## Diagrama de alimentação

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig13.png" /></div>

O reComputer R1000 suporta três opções de alimentação: AC, terminal DC e porta PoE. Por padrão, o reComputer R1000 é alimentado através do terminal AC/DC (adaptador de energia oficial regional SKU:110061505/110061506), enquanto **a alimentação PoE (módulo PoE, SKU:110991925) é opcional**. Isso oferece flexibilidade na seleção da fonte de alimentação e permite fácil integração com várias fontes de energia.

### Terminal de alimentação de 2 pinos

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

O reComputer R1000 é alimentado com uma tensão AC nominal de 12\~24 V ou tensão DC de \9~36 V. A fonte de alimentação é conectada através do conector de bloco de terminais de alimentação de 2 pinos. Para aterrar o reComputer R1000, o fio terra pode ser fixado ao parafuso localizado no canto superior esquerdo do terminal de alimentação.

:::note
A solução de alimentação utiliza um diodo retificador de ponte para proteção contra polaridade reversa e é compatível com entradas AC e DC. Isso garante que **independentemente de como os terminais positivo e negativo da fonte de alimentação sejam conectados**, o circuito não será danificado. Ao usar um retificador de ponte, a polaridade da tensão de saída permanece fixa, independentemente da polaridade DC de entrada, proporcionando proteção eficaz contra polaridade reversa.
:::

### PoE (opcional)

Com o módulo PoE instalado, a porta ETH0 do reComputer R1000 pode suportar alimentação PoE, fornecendo uma maneira conveniente e eficiente de alimentar o dispositivo pela Ethernet. Essa opção simplifica o processo de instalação e reduz a quantidade de cabeamento necessário, tornando-a uma solução ideal para aplicações com fontes de energia limitadas ou onde tomadas de energia não estão prontamente disponíveis.

- Entrada PoE: Faixa 44~57V; Típico 48V
- Saída PoE: 12V, 1.1A máx.

:::note
Vale ressaltar que o módulo PoE fornecido com o reComputer R1000 é compatível com o padrão IEEE 802.3af e pode fornecer uma potência máxima de 12,95W. Portanto, se houver necessidade de conectar periféricos de alta potência, como SSD ou módulos 4G, a alimentação PoE pode não ser suficiente. Nesse caso, é recomendável usar o terminal AC/DC para alimentação, a fim de garantir o funcionamento estável e confiável do dispositivo.
:::

### Consumo de energia

Consulte a tabela abaixo para o consumo de energia testado do reComputer R1000 no laboratório da Seeed Studio. Observe que esse valor é apenas para referência, pois os métodos e o ambiente de teste podem resultar em variações nos resultados.

| Status   | Tensão | Corrente | Consumo de energia | Descrição |
|   ---      |    ---    |   ---      |         ---          |        ---    |
|Desligado  |24V      |  51mA  |    1.224W         | Teste de consumo de energia estático em estado de desligamento e corte de energia.|
|Ocioso      |24V      |  120mA |    2.88W          | Testar a corrente de entrada ao fornecer 24V de energia ao dispositivo reComputer R1000 sem executar nenhum programa de teste.|
|Carga total |24V      |  230mA  |    5.52W          | Configurar a CPU para operar em carga total usando o comando "stress -c 4". Nenhum dispositivo externo conectado. |

### Ligar e desligar

O reComputer R1000 não vem com um botão de energia por padrão, e o sistema iniciará automaticamente assim que a alimentação for conectada. Ao desligar, selecione a opção de desligamento no sistema operacional e aguarde o desligamento completo do sistema antes de cortar a energia. Para reiniciar o sistema, basta reconectar a alimentação.

:::note
Observe que, após o desligamento, aguarde pelo menos 10 segundos antes de reiniciar o sistema para permitir a descarga completa dos capacitores internos.
:::

## Diagrama em blocos

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig12.png" /></div>

### Diagrama IIC

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig10.png" /></div>

## Interface

<div class="table-center">
<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Interface</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>Ethernet</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps IEEE 1588-2008 (suporta PoE*)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100 Mbps IEEE802.3/802.3u</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>USB</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 Host</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x USB-C 2.0 (para gravação do SO)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RS485</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>3 x bloco de terminais de 3 pinos (isolado)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Slot para cartão SIM</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>suporta cartão SIM padrão</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Slot M.2</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>suporta SSD M.2 NVMe</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LED</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6 x indicadores LED</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Buzzer</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Botão de reset</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>suporta LCD*(na placa dentro do gabinete)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Alto-falante*</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>suporta Microfone*(na placa dentro do gabinete)</td>
    </tr>
  </tbody>
</table>
</div>

Para consultar os mapeamentos e deslocamentos de GPIO, use o seguinte comando:

```bash
cat /sys/kernel/debug/gpio
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/16.png" /></div>

### Status do LED indicador

O reComputer R1000 possui 6 LEDs indicadores que servem para sinalizar o status operacional da máquina. Consulte a tabela abaixo para as funções específicas e o status de cada LED:

| LED Indicator | Cor            | Status | Descrição                                                   |
| ------------- | -------------- | ------ | ----------------------------------------------------------- |
| PWR           | Verde          | On     | O dispositivo foi conectado à alimentação.                  |
|               |                | Off    | O dispositivo não está conectado à alimentação.             |
| ACT           | Verde          |        | No Linux este pino piscará para indicar acesso ao eMMC.<br /> Se ocorrer algum erro durante a inicialização, este LED piscará um <br />padrão de erro que pode ser decodificado usando a [tabela no site da Raspberry Pi](https://www.raspberrypi.com/documentation/computers/configuration.html#led-warning-flash-codes). |
| USER          | Verde/Vermelho/Azul |        | Precisa ser definido pelo usuário.                          |
| RS485-1       | Verde          | Off    | Nenhuma transferência de dados no canal RS485 1.            |
|               |                | Blink  | O canal RS485 1 está recebendo ou enviando dados.           |
| RS485-2       | Verde          | Off    | Nenhuma transferência de dados no canal RS485 2.            |
|               |                | Blink  | O canal RS485 2 está recebendo ou enviando dados.           |
| RS485-3       | Verde          | Off    | Nenhuma transferência de dados no canal RS485 3.            |
|               |                | Blink  | O canal RS485 3 está recebendo ou enviando dados.           |

**Tabela de status do ACT**

| **Piscadas longas** | **Piscadas curtas** | **Status**                         |
| ------------------- | ------------------- | ---------------------------------- |
| 0                   | 3                   | Falha genérica ao inicializar      |
| 0                   | 4                   | start*.elf não encontrado          |
| 0                   | 7                   | Imagem do kernel não encontrada    |
| 0                   | 8                   | Falha de SDRAM                     |
| 0                   | 9                   | SDRAM insuficiente                 |
| 0                   | 10                  | Em estado HALT                     |
| 2                   | 1                   | Partição não é FAT                 |
| 2                   | 2                   | Falha ao ler da partição           |
| 2                   | 3                   | Partição estendida não é FAT       |
| 2                   | 4                   | Assinatura/hash de arquivo não confere - Pi 4 |
| 4                   | 4                   | Tipo de placa não suportado        |
| 4                   | 5                   | Erro fatal de firmware              |
| 4                   | 6                   | Falha de energia tipo A            |
| 4                   | 7                   | Falha de energia tipo B            |

Se o LED ACT piscar em um padrão regular de quatro piscadas, ele não consegue encontrar o bootcode (start.elf)
Se o LED ACT piscar em um padrão irregular, então a inicialização foi iniciada.
Se o LED ACT não piscar, o código da EEPROM pode estar corrompido; tente novamente sem nada conectado para ter certeza. Para mais detalhes, consulte o fórum da Raspberry Pi:
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums
Para mais detalhes, consulte o [fórum da Raspberry Pi](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151).

Para controlar os LEDs de usuário, recomendamos usar o sysfs, um pseudo-sistema de arquivos fornecido pelo kernel Linux que expõe informações sobre vários subsistemas do kernel, dispositivos de hardware e seus drivers associados. No reComputer R1000, abstraímos a interface de LED de usuário em três arquivos de dispositivo (led-red, led-blue e led-green), permitindo que os usuários controlem as luzes LED simplesmente interagindo com esses arquivos. Os exemplos são os seguintes:

1. Para ligar o LED vermelho, insira o seguinte comando no Terminal:

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
```

2. Para desligar o LED vermelho, insira o seguinte comando no Terminal:

```bash
echo 0 | sudo tee /sys/class/leds/led-red/brightness
```

3. Você pode ligar os LEDs vermelho e verde ao mesmo tempo, insira o seguinte comando no Terminal:

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
echo 1 | sudo tee /sys/class/leds/led-green/brightness
```

### Buzzer

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig07.png" /></div>

O reComputer R1000 possui um buzzer ativo, que pode ser usado para vários propósitos, como alarmes e notificações de eventos. O buzzer é controlado através do GPIO21 para o CM4 no reComputer R1000 v1.0, e do GPIO20 para o CM4 no reComputer R1000 1.1.

:::note
Para distinguir entre as revisões de hardware (v1.0 e v1.1), você pode consultar [reComputer R1000 V1.1 Product change details](https://wiki.seeedstudio.com/pt-br/recomputer_r1000_v1_1_description/).
:::

Para usuários do reComputer R1000 v1.0, o buzzer está conectado ao GPIO-21; para ligar/desligar o buzzer, insira o seguinte comando no Terminal:

```bash
raspi-gpio set 21 op dh # turn on
raspi-gpio set 21 op dl # turn off
```

Para usuários do reComputer R1000 v1.1, o buzzer está conectado ao PCA9535 P15; para desligar(ligar) o buzzer, insira o seguinte comando no Terminal:

```bash
echo 591 | sudo tee /sys/class/gpio/export
echo out | sudo tee /sys/class/gpio/gpio591/direction
echo 1 | sudo tee /sys/class/gpio/gpio591/value # turn on
echo 0 | sudo tee /sys/class/gpio/gpio591/value # turn off
```

### RS485

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig21.png" /></div>

O reComputer R1000 está equipado com 3 conjuntos de interface RS485 usando conector de 3 pinos, que é isolado tanto para sinal quanto para alimentação para garantir operação segura e confiável em aplicações industriais e de automação. Os sinais RS485A e RS485B são isolados usando isolamento capacitivo, o que fornece excelente imunidade a EMI e atende aos requisitos de comunicação em alta velocidade da interface RS485.
Por padrão, os resistores terminais de 120Ω não estão instalados. No entanto, a caixa de embalagem inclui cinco resistores de montagem em superfície. Se necessário, os usuários devem soldar o resistor no dispositivo por conta própria.

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position.png" /></div>

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position2.png" /></div>

:::note
A interface RS485 usa uma fonte de alimentação isolada, o que significa que o sinal de terra para dispositivos externos conectados à interface RS485 deve ser conectado ao pino GND_ISO.

:::

Estes são os pinos relacionados à interface 485 do reComputer para a tabela de dados.

| RS485         | RS485_POWER_EN         | Arquivo de dispositivo do SO | P14         | padrão(High) |
| ------------- | ---------------------- | ----------------------------- | ----------- | ------------ |
| TX5           |                        | /dev/ttyAMA5                  | GPIO12      |              |
| RX5           |                        |                               | GPIO13      |              |
| TX2           | ID_SD                  | /dev/ttyAMA2                  | GPIO0/ID_SD |              |
| RX2           | ID_SC                  |                               | GPIO1/ID_SC |              |
| TX3           |                        | /dev/ttyAMA3                  | GPIO4       |              |
| RX3           |                        |                               | GPIO5       |              |
| RS485_1_DE/RE | (Hight/DE \|\| Low/RE) | /dev/ttyAMA2                  | GPIO6       | padrão Low   |
| RS485_2_DE/RE |                        | /dev/ttyAMA3                  | GPIO17      | padrão Low   |
| RS485_3_DE/RE |                        | /dev/ttyAMA5                  | GPIO24      | padrão Low   |

Por padrão, a porta de habilitação de alimentação da porta RS485 está em nível alto. E cada interface RS485 está no estado de recepção. Você pode fazer um experimento simples.

A porta 485 que conecta o PC ao reComputer-R.

Digite no terminal do reComputer:

```shell
cat /dev/ttyAMA2
```

Em seguida, envie alguns dados na ferramenta de depuração serial do seu computador; você poderá observar os dados na janela de terminal do reComputer.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/21.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/22.png" /></div>

### Chave de Boot

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" /></div>

A chave de Boot do reComputer R1000 está conectada ao pino nRPI_BOOT do CM4. Esta chave oferece aos usuários a opção de selecionar a fonte de boot entre eMMC e USB. No modo normal, a chave deve ser posicionada afastada do lado com o rótulo "BOOT", permitindo que o sistema inicialize a partir do eMMC. Por outro lado, quando os usuários precisarem gravar a imagem do sistema, eles devem posicionar a chave em direção ao rótulo "BOOT", permitindo que o sistema inicialize a partir da interface USB Type-C.

<div class="table-center">

| Posição do switch                                           | Modo        | Descrição      | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Modo normal | Inicializar a partir do eMMC | Baixo     |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Modo flash  | Inicializar a partir do USB  | Alto      |

</div>

### USB

<div align="left"><img width={150} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig20.png" /></div>

O reComputer R1000 está equipado com uma porta USB Type-C e duas portas USB Type-A. Consulte a tabela abaixo para ver suas funções e descrições.

| **Tipo**   | **Quantidade** | **Protocolo** | **Função** | **Descrição**                                              |
| ---------- | -------------- | ------------- | ---------- | ---------------------------------------------------------- |
| **Type-C** | *1             | USB2.0        | USB-Device | Usada para depuração de porta serial, gravação de imagem, etc.          |
| **Type-A** | *2             | USB2.0        | USB-Host   | Conectar diferentes dispositivos USB, como pen drives,<br /> teclados ou mouses USB. |

Verifique se o hub USB foi detectado executando o comando **lsusb**. Este comando lista todos os dispositivos USB conectados, incluindo hubs.

```shell
lsusb
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/23.png" /></div>

A execução deste comando deve exibir informações sobre os dispositivos USB conectados ao seu sistema, incluindo quaisquer hubs USB presentes.

Se o hub USB estiver funcionando corretamente, você deverá ver seus detalhes listados na saída do comando **lsusb**. Se ele não estiver listado, pode haver um problema com o hub ou com sua conexão ao sistema. Nesses casos, talvez seja necessário solucionar problemas do hub USB ou de suas conexões.

### Slot para SIM

<div style={{ position: 'relative', left: '150px' }}>
    <img
        width="40"
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig19.png"
        style={{ transform: 'rotate(90deg)', position: 'absolute', top: '0', left: '0', transformOrigin: 'left top' }}
    />
</div>
<br />
<br />
O reComputer R1000 utiliza um slot para cartão SIM de tamanho padrão, comumente encontrado em aplicações industriais, que requer um cartão SIM padrão com dimensões de 25mm x 15mm.
:::note
Observe que a versão padrão do reComputer R1000 não vem com um módulo 4G. Se você precisar de funcionalidade 4G, um módulo 4G adicional deve ser adquirido separadamente.
:::

### Slot para SSD

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig08.png" /></div>
<br />
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig04.png" /></div>
O slot SSD no reComputer R1000 é projetado para acomodar SSDs NVMe M.2 2280 com capacidades de 128GB, 256GB, 512GB e 1TB. Este slot permite expansão de armazenamento em alta velocidade, possibilitando aos usuários melhorar o desempenho e a capacidade do sistema.

Para listar os discos, incluindo o SSD, você pode usar o comando *fdisk -l*. Veja como:

```bash
sudo fdisk -l
```

Este comando exibirá uma lista de todos os discos conectados ao seu sistema, incluindo o SSD se ele for detectado corretamente. Procure por entradas que representem o seu SSD. Elas normalmente começam com /dev/sd seguido por uma letra (por exemplo, /dev/sda, /dev/sdb, etc.).
Depois de identificar a entrada correspondente ao seu SSD, você pode prosseguir com o particionamento ou formatação conforme necessário.

:::note
Existem dois usos principais para cartões SSD:<br />
1. Armazenamento de alta capacidade: cartões SSD podem ser utilizados para necessidades de armazenamento de alta capacidade.<br />
2. Unidade de boot com imagem: outro uso envolve utilizar o SSD tanto como armazenamento de alta capacidade quanto para armazenar imagens de sistema, permitindo inicializar diretamente a partir do cartão SSD.<br />
É importante observar que nem todos os cartões SSD disponíveis no mercado suportam o segundo uso. Portanto, se você pretende usá-lo como unidade de boot e não tem certeza de qual modelo comprar, recomendamos optar pelo nosso SSD de 1TB recomendado (SKU 112990267). Este modelo foi testado e verificado quanto à funcionalidade de boot, reduzindo o risco de problemas de compatibilidade e minimizando custos de tentativa e erro.
:::

### Slot Mini-PCle

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig06.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/slot.png" /></div>
<br />
<div class="table-center">

| Slot        | Protocolo suportado |
| ----------- | ------------------- |
| Mini-PCIe 1 | 4G LTE              |
|             | USB LoRa®           |
| Mini-PCIe 2 | SPI LoRa®           |
|             | USB LoRa®           |

</div>

Este dispositivo possui duas interfaces Mini-PCIe, nomeadas Mini-PCIe Slot 1 e Mini-PCIe Slot 2. O Slot 1 se conecta ao slot do cartão SIM e suporta protocolos USB, enquanto o Slot 2 suporta protocolos USB e SPI, mas não se conecta ao slot do cartão SIM. Portanto, dispositivos como 4G LTE e USB LoRa® podem ser conectados através do Slot 1, enquanto dispositivos SPI LoRa® e USB LoRa® podem ser conectados através do Slot 2.

### Orifício de reset

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig16.png" /></div>

Há um mini botão de pressão localizado no orifício de reset do reComputer R1000. Ao pressionar esse botão com um objeto fino, o CM4 pode ser reiniciado. Este pino, quando em nível alto, sinaliza que o CM4 foi iniciado. Colocar este pino em nível baixo reinicia o módulo.

### Ethernet RJ45

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig15.png" /></div>
<br />
<div class="table-center">

| Nome | Tipo                        | Velocidades        | PoE                                |
| ---- | --------------------------- | ------------------ | ---------------------------------- |
| ETH0 | Ethernet Gigabit nativo CM4 | 10/100/1000 Mbit/s | Suportado (com módulo adicional)   |
| ETH1 | Convertido de USB           | 10/100 Mbit/s      | Não suportado                      |

</div>

O reComputer R1000 vem com duas portas Ethernet RJ45. ETH0 é uma interface Ethernet Gigabit nativa do CM4 que suporta três velocidades diferentes: 10/100/1000 Mbit/s. Um módulo PoE adicional pode ser adquirido para permitir fornecimento de energia via Ethernet (PoE) através desta interface, fornecendo energia ao reComputer R1000. A outra porta, ETH1, suporta 10/100 Mbit/s e é convertida a partir de USB.

### HDMI

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig17.png" /></div>

O reComputer R1000 possui uma interface HDMI nativa do CM4, suportando saída de vídeo de até 4K @ 60 fps. É ideal para aplicações que exigem múltiplas telas, permitindo aos usuários enviar seu conteúdo para telas externas de grande porte.

### RTC

O reComputer R1000 possui um circuito RTC que vem pré-instalado com uma bateria CR2032, permitindo manter a funcionalidade de contagem de tempo mesmo em caso de perda de energia.

Para testar a funcionalidade do Relógio em Tempo Real (RTC), siga estas etapas:

1. Desative a sincronização automática de horário:

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd

2. Defina o horário para 12:00 em 20 de março de 2024:

__CODE_LINE_PLH__
```bash
sudo hwclock --set --date "2024-03-20 12:00:00"

3. Sincronize o horário do RTC com o sistema:

__CODE_LINE_PLH__
```bash
sudo hwclock --hctosys

4. Verifique o horário do RTC:

__CODE_LINE_PLH__
```bash
sudo hwclock -r

Este comando irá ler e exibir o horário armazenado no RTC.
5. Desconecte a fonte de alimentação do RTC, aguarde alguns minutos, depois reconecte-a e verifique novamente o horário do RTC para ver se ele manteve o horário correto.

### Watchdog

O reComputer R1000 vem equipado com um circuito watchdog de hardware independente que garante a reinicialização automática do sistema em caso de travamentos anormais. O circuito watchdog é implementado por meio do RTC e permite tempos de alimentação flexíveis de 1 a 255 segundos.

Para realizar um teste do watchdog, siga estas etapas:

1. Instale o software do watchdog:

__CODE_LINE_PLH__
```bash
sudo apt install watchdog 

2. Edite o arquivo de configuração do watchdog:

__CODE_LINE_PLH__
```bash
# make sure you install vim already, if haven't, can install by the command below
sudo apt-get install vim
sudo vim /etc/watchdog.conf

Modifique a configuração da seguinte forma:

__CODE_LINE_PLH__
```bash
watchdog-device  = /dev/watchdog
# Uncomment and edit this line for hardware timeout values that differ
# from the default of one minute.vi
watchdog-timeout = 120
# If your watchdog trips by itself when the first timeout interval
# elapses then try uncommenting the line below and changing the
# value to 'yes'.
#watchdog-refresh-use-settimeout = auto
# If you have a buggy watchdog device (e.g. some IPMI implementations)
# try uncommenting this line and setting it to 'yes'.
#watchdog-refresh-ignore-errors = no
# ====================== Other system settings ========================
#
# Interval between tests. Should be a couple of seconds shorter than
# the hardware time-out value.
interval  = 15
max-load-1  = 24
#max-load-5  = 18
#max-load-15  = 12
realtime  = yes
priority  = 1
```

Você pode ajustar outras configurações conforme necessário.
3. Certifique-se de que o serviço do watchdog está em execução:

```bash
sudo systemctl start watchdog
```

4. Para testar a funcionalidade do watchdog, execute o seguinte comando para simular um travamento do sistema:

```bash
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

:::warning
Este comando aciona um travamento do kernel e deve fazer com que o watchdog reinicie o sistema.
:::

5. Monitore o sistema para confirmar que ele reinicia após o período de tempo limite especificado.
Essas etapas ajudarão você a testar e garantir a funcionalidade do temporizador watchdog no seu sistema.

## Interfaces e Módulos Opcionais

O reComputer R1000 suporta uma ampla seleção de módulos de expansão e acessórios, tornando-o adequado para uma grande variedade de cenários e requisitos. Se você estiver interessado em personalizar o reComputer R1000, entre em contato com odm@seeed.cc para mais informações.
Aqui está a lista de acessórios e módulos opcionais:

<div class="table-center">
<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><strong>Observação</strong></td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><strong>Item</strong></td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}><strong>Nome do Produto</strong></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}><strong>SKU</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={5} style={{height: 18, width: '25%'}}>Deve ser usado em conjunto para a função LoRa®WAN</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>Módulo LoRa®</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo Gateway LoRaWAN (SPI) com região opcional - US915</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo Gateway LoRaWAN (SPI) com região opcional - EU868</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo Gateway LoRaWAN (USB) com região opcional - US915</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo Gateway LoRaWAN (USB) com região opcional - EU868</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992628</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Antena LoRa®</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Kit de Antena LoRa - 868-915 MHz</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061501</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Este acessório é necessário para a função Wi-Fi</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Antena Wi-Fi/BLE</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Kit de Antena para Raspberry Pi Compute Module 4</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992364</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={8} style={{height: 18, width: '25%'}}>Antena 4G com módulo 4G para função 4G, antena GPS com módulo 4G para função GPS</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={6} style={{height: 18, width: '25%'}}>Módulo 4G</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo LTE Cat 4 EC25-AFXGA-Mini-PCIe - para América do Norte</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991134</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo LTE Cat 4 EC25-EUXGR-Mini-PCIe - para EMEA e Tailândia</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991135</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo LTE Cat 4 EC25-AUXGR-Mini-PCIe - para Austrália</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991174</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo LTE Cat 4 EC25-EFA-Mini-PCIe - para Tailândia</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991214</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo LTE Cat 4 EC25-EMGA-Mini-PCIe - para Malásia</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991234</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-JFA-mini-PCIe</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991296</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Antena 4G</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Kit de Antena 4G para módulo 4G</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061502</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Antena GPS</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Kit de Antena GPS para Módulo 4G EC25</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061521</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Chip de Criptografia TPM 2.0</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo TPM 2.0 com infineon SLB9670</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993114</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>Cartão SSD</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>NVMe M.2 2280 SSD 1TB</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990267</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>SSD Interno 512GB NVMe M.2 PCle Gen3x4 2280</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990247</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>SSD Interno 256GB NVMe M.2 PCle Gen3x4 2280</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990246</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>SSD Interno 128GB NVMe M.2 PCle Gen3x4 2280</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990226</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Este módulo precisa ser soldado na placa carrier do reComputer R1000</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>PoE</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Kit de Módulo PoE MQ7813T120 para reTerminal DM</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110991925</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>UPS</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo SuperCAP UPS LTC3350</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992004</td>
    </tr>
  </tbody>
</table>
</div>

A placa-mãe do reComputer R1000 possui dois slots Mini-PCIe. O slot Mini-PCIe 1 oferece suporte a módulo 4G e módulo LoRa® usando o protocolo USB; enquanto o slot Mini-PCIe 2 oferece suporte a módulo LoRa® usando os protocolos USB e SPI.

:::note
Não é possível conectar 2 módulos LoRa® na placa.
:::

### Wi-Fi/BLE

O reComputer R1000-10 é alimentado pelo CM4 com uma versão de Wi-Fi/BLE onboard, fornecendo os mesmos parâmetros de Wi-Fi/BLE do CM4. Para informações detalhadas de parâmetros, consulte o site oficial da Raspberry Pi.

:::note
É importante observar que, devido ao gabinete metálico do reComputer R1000, os sinais de Wi-Fi/BLE podem ter dificuldade em atravessar o exterior metálico. Se você precisar de funcionalidade Wi-Fi/BLE, é recomendável comprar uma antena externa e [clique aqui para instruções de montagem](/pt-br/recomputer_r1000_assembly_guide/#assemble-wi-fible-antenna).
:::

#### Conectar ao Wi-Fi

passo 1. Para procurar redes Wi-Fi:

```bash
nmcli dev wifi list
```

passo 2. Conecte-se à rede Wi-Fi:

```bash
sudo nmcli dev wifi connect network-ssid password "network-password"
sudo nmcli --ask dev wifi connect network-ssid #If you don't want to write your password on the screen, you can use the --ask option.
```

passo 3. Após o dispositivo ser ligado, ele se conectará automaticamente ao Wi-Fi. Se você quiser excluir as informações de Wi-Fi salvas:

```bash
nmcli con del network-ssid
```

Depois que a conexão for desconectada, conecte-se a outro Wi-Fi.

#### Conectar dispositivos Bluetooth

Antes de adicionar um dispositivo Bluetooth, o serviço Bluetooth no seu computador deve estar iniciado e em execução. Você pode verificar isso com o comando systemctl.

```bash
sudo systemctl status bluetooth
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/32.png" /></div>
<br />
Se o status do serviço Bluetooth não estiver ativo, você deve habilitá-lo primeiro. Em seguida, inicie o serviço para que ele seja iniciado automaticamente quando você ligar o dispositivo.

```bash
sudo systemctl enable bluetooth
sudo systemctl start bluetooth
```

Você pode usar a ferramenta bluetoothctl para conectar e gerenciar o Bluetooth; a seguir estão alguns comandos e comentários comuns:

```bash
#Scan attachments to the device
bluetoothctl scan on

#To make your Bluetooth adapter discoverable to other devices, use the following command:
bluetoothctl discoverable on


#Replace A4:C1:38:F4:83:2E below with the Media Access Control (MAC) address you want to connect to
#Pair a new Bluetooth device
bluetoothctl pair A4:C1:38:F4:83:2E

#Connect previously paired devices
bluetoothctl connect A4:C1:38:F4:83:2E

#View the list of devices paired with the system
bluetoothctl paired-devices

#When a Bluetooth device is trusted, the system automatically connects to it after discovering it
bluetoothctl trust A4:C1:38:F4:83:2E

#Cancel trust
bluetoothctl untrust A4:C1:38:F4:83:2E

#Remove a paired Bluetooth device
bluetoothctl remove A4:C1:38:F4:83:2E

#Disconnect the Bluetooth connection, but do not remove it from the paired list
bluetoothctl disconnect A4:C1:38:F4:83:2E

#Block specific devices from connecting to your system
bluetoothctl block A4:C1:38:F4:83:2E

#Unblock device
bluetoothctl unblock A4:C1:38:F4:83:2E


#Use interactive mode and exit
bluetoothctl
exit 
```

### Módulo 4G

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991135--lte-cat-4-ec25-eux-mini-pcie-font_1.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

A placa-mãe do reComputer R1000 possui dois slots Mini-PCIe, sendo que o slot Mini-PCIe 1 oferece suporte a um módulo 4G usando o protocolo USB. O módulo 4G EC25 da Quectel foi totalmente testado e é compatível com o reComputer R1000.

:::note
Observe que, se você precisar de funcionalidade 4G, é necessário adquirir o módulo 4G correspondente e a antena externa. [Clique aqui para instruções de montagem](/pt-br/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna).
:::

#### Conectar ao módulo 4G pelo modo ECM

Para interagir com um módulo 4G usando comandos AT via minicom, siga estas etapas:

**Passo 1.** Insira o SIM card habilitado para 4G no [slot do SIM card](/pt-br/recomputer_r/#sim-slot), antes de ligar o sistema.

**Passo 2.** Verifique se o EC25-EUX foi detectado usando ```lsusb```

```
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

**Passo 3.** Instale a ferramenta de comunicação serial minicom.

```sh
sudo apt install minicom
```

**Passo 4.** Conecte o módulo 4G EC25-EUX através do minicom.

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

Depois que a conexão serial for aberta, digite AT e pressione 'Enter', e você deverá ver OK.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**Passo 5.** Habilitar o módulo 4G para se conectar à rede 4G

Na mesma janela serial do minicom, digite:

```sh
AT+QCFG="usbnet"
```

Ele retornará algo como ```+QCFG: "usbnet",0,``` mas precisamos que isso seja definido como 1 (modo ECM), então insira o seguinte comando:

```sh
AT+QCFG="usbnet",1
```

Em seguida, insira o seguinte comando para forçar o modem a reiniciar:

```sh
AT+CFUN=1,1
```

Depois você pode reiniciar ou aguardar um tempo para que o módulo obtenha internet da operadora do seu SIM card.

Você também pode usar o comando `ifconfig` para consultar o status de rede do reComputer R1000.

O modo ECM criará uma nova interface de rede `usb0` para você usar.


#### Conectar ao módulo 4G pelo modo QMI

Para interagir com um módulo 4G usando o protocolo QMI via qmicli, siga estas etapas:

**Passo 1.** Baixe a ferramenta quectel-CM para o diretório `/usr/bin/`.

```sh
# Use wget to download the compiled quectel-CM to /usr/bin/
sudo wget -O /usr/bin/quectel-CM https://files.seeedstudio.com/wiki/reComputer-R1000/network/quectel-CM
# Add execution permission
sudo chmod 777 /usr/bin/quectel-CM
```

**Passo 2.** Defina o modo da placa de rede 4G para QMI.

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200

# Enter the following command
AT+QCFG="usbnet",0
# Enter the following command to verify
AT+QCFG="usbnet"
# Successful configuration is indicated by the following response
AT+QCFG="usbnet",0

# Enter the command to restart and enable the module
AT+CFUN=1,1
```

**Passo 3.** Testar a conexão de rede.

```sh
# Use the -s parameter to specify the APN for the data connection
sudo ./quectel-CM -s APN

# APN settings for different carriers
China Mobile: "cmnet"
China Unicom: "3gnet"
China Telecom: "ctnet"
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/get_start/image-1.png"/></div>

Digite ifconfig para verificar se um endereço IP foi atribuído

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/get_start/image-2.png"/></div>

Após o teste de conexão de rede ser bem-sucedido, você pode criar um serviço systemd para garantir que o módulo 4G seja conectado automaticamente quando o sistema iniciar.

**Passo 4.** Criar um arquivo de serviço systemd.

Crie um script de inicialização automática:

```sh
sudo vi /opt/auto_4G.sh
```

Insira o seguinte conteúdo. O APN deve ser determinado com base na operadora do seu SIM card. Aqui, `3gnet` é o APN da China Unicom.

```sh
#!/bin/bash
sudo quectel-CM -s 3gnet
```

Adicione permissão de execução:

```bash
sudo chmod 0755 /opt/auto_4G.sh
```

Crie um arquivo de serviço de inicialização automática:

```bash
sudo vi /etc/systemd/system/auto_4G.service
```

Conteúdo do arquivo de serviço:

```bash
[Unit]
Description = auto_4G daemon

[Service]
ExecStart = /opt/auto_4G.sh
Restart = always
Type = simple

[Install]
WantedBy = multi-user.target
```

Habilite e inicie o auto_4G.service:

```bash
sudo systemctl enable auto_4G
sudo systemctl start auto_4G
```

Depois você pode reiniciar ou aguardar um tempo para que o módulo obtenha internet da operadora do seu SIM card.

Você também pode usar o comando `ifconfig` para consultar o status de rede do reComputer R1000.

O modo QMI criará uma nova interface de rede `wwan0` para você usar.




### Módulo LoRa®

:::note
Ambos os slots Mini-PCIe oferecem suporte a módulo LoRa® usando o protocolo USB. Enquanto isso, o slot Mini-PCIe 2 oferece suporte a um módulo LoRa® usando o protocolo SPI. O módulo WM1302 da Seeed Studio foi totalmente testado e é compatível com o reComputer R1000. No entanto, a versão USB precisará utilizar o Mini PCIe projetado para o módulo 4G, o que significa que, se você quiser usar tanto o módulo 4G quanto o módulo LoraWAN®, escolha a versão SPI do módulo WM1302 LoraWAN®.
<br />
Observe que, se você precisar de funcionalidade LoRa®, é necessário adquirir o módulo LoRa® correspondente e a antena externa.
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 SPI Module" label="Módulo WM1302 SPI">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992967-spi-us915.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1302-LoRaWAN-Gateway-Module-SPI-US-915-p-5454.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

<br />

**Passo 1.** Consulte o guia [Montagem de hardware do módulo LoraWAN®](/pt-br/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna) para instalar o `WM1302 SPI LoraWAN® Module` no `LoraWAN® Mini PCIe slot`, onde você deverá ver a serigrafia *`Lora`*.

**Passo 2.** digite `sudo raspi-config` na linha de comando para abrir a Ferramenta de Configuração de Software do Raspberry Pi:

- Selecione Interface Options
- Selecione SPI e, em seguida, selecione **Yes** para habilitá-lo
- Selecione I2C e, em seguida, selecione **Yes** para habilitá-lo
- Selecione Serial Port, depois selecione **No** para "Would you like a login shell..." e selecione **Yes** para "Would you like the serial port hardware..."

Depois disso, reinicie o Raspberry Pi para garantir que essas configurações funcionem.

**Passo 3.** Baixe o [código WM1302](https://github.com/Lora-net/sx1302_hal) para o reComputer R1000 e compile-o.

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo vim ./libloragw/inc/loragw_i2c.h
```

Altere `#define I2C_DEVICE "/dev/i2c-1"` para `#define I2C_DEVICE "/dev/i2c-3"`.

:::important
Se você estiver usando a versão 1.1 do reComputer R1000, altere para `#define I2C_DEVICE "/dev/i2c-6"`
:::

```bash
sudo make
```

**Passo 4.** Copie o script reset_lgw.sh

```bash
vim ./tools/reset_lgw.sh
```

Modifique o código:

```bash
SX1302_RESET_PIN=580     # SX1302 reset
SX1302_POWER_EN_PIN=578  # SX1302 power enable
SX1261_RESET_PIN=579     # SX1261 reset (LBT / Spectral Scan)
// AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

```
cp ./tools/reset_lgw.sh ./packet_forwarder/
```

**Passo 5.** Modifique o conteúdo do arquivo de configuração `global_conf.json.sx1250.EU868`:

```sh
cd packet_forwarder
vim global_conf.json.sx1250.EU868
```

Altere `"com_path": "/dev/spidev0.0"` para `"com_path": "/dev/spidev0.1"`

:::important
Se você estiver usando a versão 1.1 do reComputer R1000, altere para `"com_path": "/dev/spidev1.1"`
:::

**Passo 6.** Inicie o módulo LoraWAN®

Em seguida, execute o código a seguir para iniciar o módulo LoraWAN® de acordo com a versão de frequência de operação do seu WM1302.

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

</TabItem>
<TabItem value="WM1302 USB Module" label="WM1302 USB Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

**Passo 1.** Consulte o guia [Montagem de hardware do módulo LoraWAN®](/pt-br/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna) para instalar o `WM1302 USB LoraWAN®  Module` no `4G Mini PCIe slot`, onde você deverá ver a serigrafia *`4G`*.

**Passo 2.** digite `sudo raspi-config` na linha de comando para abrir a Ferramenta de Configuração de Software do Raspberry Pi:

- Selecione Interface Options
- Selecione I2C e, em seguida, selecione **Yes** para habilitá-lo
- Selecione Serial Port, depois selecione **No** para "Would you like a login shell..." e selecione **Yes** para "Would you like the serial port hardware..."

Depois disso, reinicie o Raspberry Pi para garantir que essas configurações funcionem.

**Passo 3.** Baixe o [código WM1302](https://github.com/Lora-net/sx1302_hal) para o reTerminal e compile-o.

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo vim ./libloragw/inc/loragw_i2c.h
```

Altere `#define I2C_DEVICE "/dev/i2c-1"` para `#define I2C_DEVICE "/dev/i2c-3"`.

```bash
sudo make
```

**Passo 4.** Copie o script reset_lgw.sh

```bash
vim ./tools/reset_lgw.sh
```

Modifique o código:

```bash
SX1302_RESET_PIN=580     # SX1302 reset
SX1302_POWER_EN_PIN=578  # SX1302 power enable
SX1261_RESET_PIN=579     # SX1261 reset (LBT / Spectral Scan)
// AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

```
cp ./tools/reset_lgw.sh ./packet_forwarder/
```

**Passo 5.** Carregue o módulo WM1302-USB

```bash
# Check the device
lsusb
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/check_lora_device.png" /></div>

```bash
# Use the ID number to find the port number
sudo dmesg | grep 5740
# Load ACM module 
sudo modprobe cdc_acm
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/load_lora_device.png" /></div>

**Passo 6.** Encontre o arquivo de dispositivo

```bash
sudo dmesg | grep 1-1.3.3
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/ACM.png" /></div>

**Passo 7.** Modifique o conteúdo do arquivo de configuração `global_conf.json.sx1250.EU868.USB`:

```sh
cd packet_forwarder
vim global_conf.json.sx1250.EU868.USB
```

Altere `"com_path": "/dev/ttyACM0"` para `"com_path": "/dev/ttyACM4"`

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/change_file.png" /></div>

**Passo 8.** Inicie o módulo LoraWAN®

Em seguida, execute o código a seguir para iniciar o módulo LoraWAN® de acordo com a versão de frequência de operação do seu WM1302.

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

Este comando especifica o arquivo de configuração a ser usado para LoRa® USB.

</TabItem>
</Tabs>

<!-- Code END -->

### PoE

O reComputer R1000, funcionando como dispositivo alimentado, pode suportar o padrão IEEE 802.3af adicionando um módulo de alimentação PoE. Os usuários precisam desmontar o dispositivo para instalar o módulo PoE para a função Ethernet PoE.

:::note
O reComputer R1000 suporta alimentação PoE, mas o produto padrão não inclui um módulo PoE por padrão. A Seeed pode fornecer serviços de soldagem e montagem de PoE para pedidos de customização em lote. No entanto, se um cliente estiver testando uma amostra, ele precisará [soldar e montar o módulo PoE por conta própria](/pt-br/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module).
:::

### Slot M.2

O reComputer R1000 suporta SSD NVMe 2280 e acelerador de IA (Hailo) por meio do uso de um slot PCIe (J62) abaixo de dois slots Mini-PCIe na placa. É importante observar que o PCIe do CM4 é gen2.0 com velocidade teórica máxima de 5 Gbps. Se você estiver usando um SSD Gen3.0 ou superior, ele pode não conseguir atingir a velocidade máxima do SSD. Após testes, o reTerminal DM com SSD instalado pode atingir uma velocidade máxima de gravação de 230 MB/s e uma velocidade máxima de leitura de 370 MB/s. Se você não tiver certeza de quais SSDs são compatíveis, pode comprar seguindo a lista de acessórios abaixo.

[Clique aqui para instruções de montagem](/pt-br/recomputer_r1000_assembly_guide/#assemble-ssd).

<div class="table-center">

<table >
  <tbody>
  <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>Cartão SSD</td>
      <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>NVMe M.2 2280 SSD 1TB</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html">112990267</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>512GB NVMe M.2 PCle Gen3x4 2280 SSD interno</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html">112990247</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>256GB NVMe M.2 PCle Gen3x4 2280 SSD interno</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html">112990246</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>128GB NVMe M.2 PCle Gen3x4 2280 SSD interno</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html">112990226</a></td>
  </tr>
  </tbody>
</table>
</div>

:::note
Observe que:<br />
1- Os resultados do teste de velocidade podem variar dependendo do modelo de SSD, método de teste e ambiente de teste. Os valores fornecidos aqui são apenas para fins de referência e foram obtidos no laboratório da Seeed.<br />

Existem dois usos principais para cartões SSD:<br />
1. Armazenamento de alta capacidade: cartões SSD podem ser utilizados para necessidades de armazenamento de alta capacidade.<br />
2. Unidade de boot com imagem: outro uso envolve utilizar o SSD tanto como armazenamento de alta capacidade quanto para armazenar imagens de sistema, permitindo inicializar diretamente a partir do cartão SSD.<br />
É importante observar que nem todos os cartões SSD disponíveis no mercado suportam o segundo uso. Portanto, se você pretende usá-lo como unidade de boot e não tem certeza de qual modelo comprar, recomendamos optar pelo nosso **SSD de 1TB (SKU [112990267](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html))** recomendado. Este modelo foi testado e verificado quanto à funcionalidade de boot, reduzindo o risco de problemas de compatibilidade e minimizando os custos de tentativa e erro.
:::

### Chip de criptografia TPM 2.0

O TPM apresenta o OPTIGA™ TPM SLB9670 da Infineon, que é compatível com a especificação Trusted Computing Group (TCG) TPM 2.0 e é recomendado como chip de criptografia para o reComputer R1000. O chip possui uma interface SPI aplicada à porta J13 na placa, para habilitar uma raiz de confiança para integridade da plataforma, atestação remota e serviços criptográficos.

:::note
[Por favor, clique aqui para obter instruções de montagem](/pt-br/recomputer_r1000_assembly_guide/#assemble-tpm-20-module).
:::

Se você conectar o módulo TPM 2.0 ao dispositivo, o código a seguir pode ajudar a verificar a conexão TPM.

```bash
ls /dev | grep tpm
```

Se você vir **tpm0** e **tpmrm0** na saída, isso significa que os dispositivos TPM (Trusted Platform Module) foram detectados e estão disponíveis no seu sistema. Isso indica que o hardware TPM foi reconhecido e está acessível, o que é um bom sinal. Você pode prosseguir usando funcionalidades ou aplicativos relacionados ao TPM sabendo que os dispositivos estão presentes e acessíveis.

### UPS

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/30.png" /></div>

O UPS é 7F, que opera em série. O módulo UPS é posicionado entre os componentes DC5V e CM4, com um sinal GPIO utilizado para alertar a CPU no caso de perda de energia da fonte de 5V. Ao receber esse sinal, a CPU executa um script de urgência antes que a energia do supercapacitor se esgote, iniciando um comando "$ shutdown".
<br />
A duração de backup fornecida pelo UPS depende fortemente da carga do sistema. Abaixo estão alguns cenários típicos testados com um módulo CM4 com 4GB de RAM, 32GB de armazenamento eMMC e um módulo Wi-Fi.
<br />

| Modo de operação | Tempo(s) | Observação                                                   |
| ----------------- | ------- | ------------------------------------------------------------ |
| Ocioso            | 37      | Teste em condições ociosas com programa de driver oficial carregado |
| Carga total da CPU | 18      | stress -c 4 -t 10m -v &                                      |

:::note
Para a função UPS, entre em contato conosco para mais informações, e o sinal de alarme é ativo em nível BAIXO.
[Por favor, clique aqui para obter instruções de montagem](/pt-br/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module).
:::

Um GPIO25 entre a CPU e a entrada de energia DC/AC é usado para alarmar a CPU quando a fonte de alimentação de 5V cai. Então a CPU deve executar algo urgente em um script antes do esgotamento da energia do supercapacitor e rodar um `$ shutdown`
<br />
Outra forma de usar essa função é iniciar um desligamento quando o pino GPIO mudar. O pino GPIO fornecido é configurado como uma tecla de entrada que gera eventos KEY_POWER. Esse evento é tratado pelo systemd-logind iniciando um desligamento.
Use `/boot/overlays/README` como referência e, em seguida, modifique `/boot/config.txt`.

```bash
dtoverlay=gpio-shutdown,gpio_pin=25,active_low=1
```

:::note

1. Para a função UPS, entre em contato conosco para mais informações.
2. O sinal de alarme é ativo em nível BAIXO.

:::

O código em Python abaixo é uma demonstração para detectar o modo de funcionamento do UPS de supercapacitor através do GPIO25 e salvar dados automaticamente e desligar quando o sistema for desligado.

```python
import RPi.GPIO as GPIO
import time,os

num = 0

GPIO.setmode(GPIO.BCM)
#set GPIO25 as input mode
#add 500ms jitter time for software stabilization
GPIO.setup(25,GPIO.IN,pull_up_down = GPIO.PUD_UP)
GPIO.add_event_detect(25,GPIO.FALLING, bouncetime = 500) 
while True:
  if GPIO.event_detected(25):
    print('...External power off...')
    print('')
    os.system('sync')
    print('...Data saving...')
    print('')
    time.sleep(3)
    os.system('sync')
    #saving two times
    while num<5:
      print('-----------')
      s = 5-num
      print('---' + str(s) + '---')
      num = num + 1
      time.sleep(1)
    print('---------')
    os.system('sudo shutdown -h now')
```

### DSI e alto-falante

Uma interface DSI (J24) e uma interface de alto-falante de 4 pinos (J7) são reservadas na placa, para uso especial. Os usuários devem adquirir plug-ins de acordo com suas próprias necessidades.

## Recursos adicionais

- [Manual do usuário - reComputer R1000](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputerR_UserManual_version01.pdf)
- [Manual do usuário - reComputer R1000 em chinês](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputerR_UserManual_CN_version01.pdf )
- [Arquivo 3D do reComputer R1000](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000.stp)
- [reComputer R1000 Schematic Desing, PCB Desing](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_schematic_design_files.zip)
- [Flyer do reComputer R1000](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_flyer.pdf)
- [Flyer do reComputer R1000 em chinês](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_flyer_CN.pdf)
- [Atribuição de pinos do reComputer R1000 v1.1](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_v1_1_Pin_Assignment.xlsx)



## Recursos

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
