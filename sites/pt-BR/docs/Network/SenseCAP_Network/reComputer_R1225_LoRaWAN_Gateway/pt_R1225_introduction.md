---
description: Visão geral do Gateway LoRaWAN reComputer R1225
title: Visão geral do Gateway LoRaWAN reComputer R1225
keywords:
  - SenseCAP Network
  - Controlador de Borda
  - reComputer R1225
  - Gateway
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /r1225_introduction
last_update:
  date: 03/13/2026
  author: Kian
createdAt: '2026-01-05'
updatedAt: '2026-03-26'
url: https://wiki.seeedstudio.com/pt-br/r1225_introduction/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Appearance_Image/R1225_White_Background.png" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1225-LoRaWAN-Gateway-Industrial-Controller-US915-p-6722.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

# Visão geral

## Descrição

reComputer R1225 é um gateway e controlador IoT LoRaWAN industrial poderoso e flexível, baseado em Raspberry Pi, alimentado pelo CM4 e equipado com recursos de IA. Ele possui 3 interfaces RS485, portas Ethernet duplas e suporta os protocolos BACnet e Modbus, fornecendo todas as funções necessárias para um dispositivo IoT de borda industrial robusto e confiável. Com suporte para aceleradores de IA NPU, é uma solução ideal para aplicações de controle de acesso remoto, especialmente em sistemas BMS, BAS e iBMS.

## Recursos

### Projetado para Sistema de Automação Predial

- Múltiplos canais RS485 isolados suportam comunicação de alta e baixa velocidade

- Suporta protocolos BACnet, Modbus RTU e Modbus TCP/IP
- Até 4GB de RAM suportam o processamento de milhares de pontos de dados
- Indicadores LED de dupla face e de fácil visualização permitem que os usuários verifiquem rapidamente o status operacional
- Gabinete metálico de alta qualidade, compatível com instalação em trilho DIN e em parede
- Software de código aberto Seeed Gateway OS, ChirpStack, Basics™ Station, Packet Forwarder integrados. Suporta personalização e desenvolvimento secundário.

### Desempenho poderoso

- Alimentado por Raspberry Pi CM4

- Broadcom BCM2711 SoC quad-core Cortex-A72 (ARM v8) 64 bits @ 1,5GHz
- Até 4GB de RAM e 32GB eMMC

### Amplos recursos sem fio

- Wi-Fi integrado

- BLE integrado

- Mini-PCIe1: LTE
  - Versão 4G pré-instalada com módulo LTE:
    - EU868: EC25-EUX-mini-PCIe (LTE Cat 4)
    - US915: EC25-AFXGA-mini-PCIe (LTE Cat 4)

- Mini-PCIe2: Módulo SPI LoRa® pré-instalado
  - EU868: Wio-WM1302 LoRaWAN Gateway Module (SPI) - EU868
  - US915: Wio-WM1302 LoRaWAN Gateway Module (SPI) - US915

### Interfaces ricas

- 3x RS485 (isoladas)
- 1x Ethernet 10M/100M/1000M (Suporta PoE)
- 1x Ethernet 10M/100M
- 1x HDMI 2.0
- 2x USB2.0 Tipo A
- 1x USB2.0 Tipo C (console USB para atualização do SO)
- 1x slot para cartão SIM

### Segurança e confiabilidade

- Watchdog de hardware
- Supercapacitor de UPS (**incluído**)
- Gabinete metálico com painéis laterais em PC
- ESD: EN61000-4-2, nível 3
- EFT: EN61000-4-4, nível 2
- Surto: EN61000-4-5, nível 2
- Vida útil de produção: o reComputer R1225 permanecerá em produção até pelo menos dezembro de 2030

## Convenções de nomenclatura

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig11.png" alt="pir" width="800" height="auto"/></p>

## Especificações

<!--Power Consumption功耗待重新测试后补充-->

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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>CPU</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi CM4, Quad-core Cortex-A72@ 1.5GHz</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Sistema operacional</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi OS, Ubuntu</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RAM</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>4GB</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>eMMC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>32GB</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Padrão IEEE 802.3af PoE de 12,95W</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Tensão de alimentação (CA/CC)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>12&#126;24V AC/9&#126;36V DC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Proteção contra sobretensão</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>40V</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Consumo de energia</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>                 </td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>suporta um cartão SIM padrão</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI(reserved)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>suporta LCD* (na placa dentro do gabinete)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Comunicação sem fio</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Wi-Fi 2.4/5.0 GHz</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>Wi-Fi integrado no chip</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>Sim</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>BLE 5.0</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>BLE integrado no chip</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>Sim</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LoRa®(Occupied)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>SPI LoRa®</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>4G Cellular(Optional)</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Surto:  EN61000-4-5, Nível 2</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>Certificação</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>CE, FCC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>RoHS</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Condições ambientais</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Grau de proteção IP</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>IP40</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Temperatura de operação</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>-30~70 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Umidade de operação</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>10~95% UR</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Temperatura de armazenamento</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>-40~80 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Outros</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Supercapacitor UPS</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Módulo SuperCAP UPS LTC3350</td>
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
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Declaração de status de componentes e interfaces</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Reservado</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Designado para uso ou expansão futura.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Opcional</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Componentes não essenciais, o usuário pode optar por incluir ou excluir.</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Dimensão(L x A x P)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>130 mm x 93 mm x 49.6 mm</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Gabinete</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Carcaça de liga de alumínio 6061 com painéis laterais de PC transparente</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Montagem</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Trilho DIN/Parede</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Peso(Líquido)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>750g; R1225 com módulo 4G: 800g</td>
    </tr>
  </tbody>
</table>
</div>

### Declaração

**As opções marcadas com * exigem compra adicional de acordo com a lista de acessórios.**

## Visão geral do hardware

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Details_Image/Hardware_Overview03.jpg" /></div>

## Visão geral da placa principal

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Details_Image/Mainboard_Overview02.jpg" /></div>

## Diagrama de alimentação

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Details_Image/Power_Diagram04.jpg" /></div>

O reComputer R1225 suporta três opções de alimentação: AC, terminal DC e porta PoE. Por padrão, o reComputer R1225 é alimentado através do terminal AC/DC (adaptador de energia oficial regional SKU:110061505/110061506).  **Um módulo PoE (SKU:110991925) está incluído**, proporcionando flexibilidade adicional de alimentação.

### Terminal de alimentação de 2 pinos

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

O reComputer R1225 é alimentado com uma tensão AC nominal de 12&#126;24  V ou tensão DC de 9&#126;36V. A fonte de alimentação é conectada através do conector de bloco de terminais de alimentação de 2 pinos. Para aterrar corretamente o dispositivo, o fio terra pode ser fixado ao parafuso localizado no canto superior esquerdo do terminal de alimentação.

:::note
A solução de alimentação utiliza um diodo retificador de ponte para proteção contra polaridade reversa e é compatível com entradas AC e DC. Isso garante que **independentemente de como os terminais positivo e negativo da fonte de alimentação sejam conectados**, o circuito não será danificado. Ao usar um retificador de ponte, a polaridade da tensão de saída permanece fixa, independentemente da polaridade DC de entrada, proporcionando proteção eficaz contra polaridade reversa.
:::

### POE (incluído)

Com o módulo PoE instalado, a porta ETH0 do reComputer R1225 pode suportar alimentação PoE, fornecendo uma forma conveniente e eficiente de alimentar o dispositivo via Ethernet. Esta opção simplifica o processo de instalação e reduz a quantidade de cabeamento necessário, tornando-a uma solução ideal para aplicações com fontes de energia limitadas ou onde tomadas de energia não estão prontamente disponíveis.

- Entrada PoE: Faixa 44~57V; Típico 48V
- Saída PoE: 12V, 1,1A máx.

:::note
Vale ressaltar que o módulo PoE fornecido com o reComputer R1225 é compatível com o padrão IEEE 802.3af e pode fornecer uma potência máxima de 12,95W. **Portanto, se houver necessidade de conectar periféricos de alta potência, como SSD ou módulos 4G, a alimentação PoE pode não ser suficiente**. Nesse caso, recomenda-se usar o terminal AC/DC para alimentação, a fim de garantir o funcionamento estável e confiável do dispositivo.
:::

### Consumo de energia

Consulte a tabela abaixo para o consumo de energia testado do reComputer R1225 no laboratório da Seeed Studio. Observe que este valor é apenas para referência, pois os métodos e o ambiente de teste podem resultar em variações nos resultados.

A tabela de consumo de energia será atualizada em breve.

<!--
| Status   | Voltage | Current | Power Consumption | Description                                                                                                         |
|   ---    |    ---  |   ---   |         ---       |      ---                                                                                                            |
|Shutdown  |24V      |  mA     |    W              | Static power consumption test in shutdown and power-off state.                                                      |
|Idle      |24V      |  mA     |    W              | To test the input current when supplying 24V power to the reComputer R1225 device without running any test programs.|
|Full Load |24V      |  mA     |    W              | Configure CPU to run at full load using the "stress -c 4" command. No external devices connected.                   |
-->

### Ligar e desligar

O reComputer R1225 não vem com um botão de energia por padrão, e o sistema será iniciado automaticamente assim que a alimentação for conectada. Ao desligar, selecione a opção de desligamento no sistema operacional e aguarde o sistema desligar completamente antes de cortar a alimentação. Para reiniciar o sistema, basta reconectar a alimentação.

:::note
Observe que, após o desligamento, aguarde **pelo menos 10 segundos** antes de reiniciar o sistema para permitir a descarga completa dos capacitores internos.
:::

## Diagrama em blocos

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Details_Image/Block_Diagram05.jpg" /></div>

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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps IEEE 1588-2008 (suporta PoE)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100 Mbps IEEE802.3/802.3u</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>USB</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 Host</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x USB-C 2.0 (para gravar o sistema operacional)</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>suporta um cartão SIM padrão</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>suporta LCD* (na placa dentro do gabinete)</td>
    </tr>
  </tbody>
</table>
</div>

Para consultar mapeamentos e deslocamentos de GPIO, use o seguinte comando:

```bash
cat /sys/kernel/debug/gpio
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/16.png" /></div>

### Status dos indicadores LED

O reComputer R1225 possui 6 indicadores LED que servem para sinalizar o status operacional da máquina. Consulte a tabela abaixo para as funções específicas e o status de cada LED:

| Indicador LED | Cor            | Status | Descrição                                                                 |
| ------------- | -------------- | ------ | ------------------------------------------------------------------------- |
| PWR           | Verde          | On     | O dispositivo foi conectado à alimentação.                                |
|               |                | Off    | O dispositivo não está conectado à alimentação.                           |
| ACT           | Verde          |        | No Linux, este pino piscará para indicar acesso à eMMC.<br /> Se ocorrer algum erro durante a inicialização, este LED piscará um <br />padrão de erro que pode ser decodificado usando a tabela de consulta no [site do Raspberry Pi](https://www.raspberrypi.com/documentation/computers/configuration.html#led-warning-flash-codes).|
| USER          | Verde/Vermelho/Azul |        | Precisa ser definido pelo usuário.                                        |
| RS485-1       | Verde          | Off    | Nenhuma transferência de dados no canal RS485 1.                          |
|               |                | Blink  | O canal RS485 1 está recebendo ou enviando dados.                         |
| RS485-2       | Verde          | Off    | Nenhuma transferência de dados no canal RS485 2.                          |
|               |                | Blink  | O canal RS485 2 está recebendo ou enviando dados.                         |
| RS485-3       | Verde          | Off    | Nenhuma transferência de dados no canal RS485 3.                          |
|               |                | Blink  | O canal RS485 3 está recebendo ou enviando dados.                         |

#### Tabela de status do ACT

| **Long flashes** | **Short flashes** | **Status**                          |
| ---------------- | ----------------- | ----------------------------------- |
| 0                | 3                 | Falha genérica ao inicializar       |
| 0                | 4                 | start*.elf não encontrado           |
| 0                | 7                 | Imagem do kernel não encontrada     |
| 0                | 8                 | Falha na SDRAM                      |
| 0                | 9                 | SDRAM insuficiente                  |
| 0                | 10                | Em estado HALT                      |
| 2                | 1                 | Partição não é FAT                  |
| 2                | 2                 | Falha ao ler da partição            |
| 2                | 3                 | Partição estendida não é FAT        |
| 2                | 4                 | Assinatura/hash do arquivo não confere - Pi 4 |
| 4                | 4                 | Tipo de placa não suportado         |
| 4                | 5                 | Erro fatal de firmware              |
| 4                | 6                 | Falha de energia tipo A             |
| 4                | 7                 | Falha de energia tipo B             |

Se o LED ACT piscar em um padrão regular de quatro piscadas, ele não consegue encontrar o bootcode (start.elf)
Se o LED ACT piscar em um padrão irregular, então a inicialização foi iniciada.
Se o LED ACT não piscar, o código da EEPROM pode estar corrompido; tente novamente sem nada conectado para ter certeza. Para mais detalhes, verifique o fórum do Raspberry Pi:
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums
Para mais detalhes, consulte o [fórum do Raspberry Pi](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151).

#### LEDs personalizáveis via interface Luci

#### Controlar LEDs via comandos

Para controlar os LEDs de usuário, recomendamos usar o sysfs, um pseudo-sistema de arquivos fornecido pelo kernel Linux que expõe informações sobre vários subsistemas do kernel, dispositivos de hardware e seus drivers associados. No reComputer R1225, abstraímos a interface de LED de usuário em três arquivos de dispositivo (led-red, led-blue e led-green), permitindo que os usuários controlem os LEDs simplesmente interagindo com esses arquivos. Os exemplos são os seguintes:

1. Para ligar o LED vermelho, insira o seguinte comando no Terminal:

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
```

2. Para desligar o LED vermelho, insira o seguinte comando no Terminal:

```bash
echo 0 | sudo tee /sys/class/leds/led-red/brightness
```

3. Você pode ligar os LEDs vermelho e verde ao mesmo tempo; insira o seguinte comando no Terminal:

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
echo 1 | sudo tee /sys/class/leds/led-green/brightness
```

### Buzzer

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig07.png" /></div>

O reComputer R1225 possui um buzzer ativo, que pode ser usado para vários propósitos, como alarmes e notificações de eventos.

Para usuários do reComputer R1225 (**R1225 é baseado na plataforma de hardware R1000 v1.1**), o buzzer está conectado ao PCA9535 P15; para desligar(ligar) o buzzer, insira o seguinte comando no Terminal:

```bash
echo 591 | sudo tee /sys/class/gpio/export
echo out | sudo tee /sys/class/gpio/gpio591/direction
echo 1 | sudo tee /sys/class/gpio/gpio591/value # turn on
echo 0 | sudo tee /sys/class/gpio/gpio591/value # turn off
```

### RS485

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig21.png" /></div>

O reComputer R1225 é equipado com 3 conjuntos de interface RS485 usando conector de 3 pinos, que é isolado tanto para sinal quanto para alimentação, a fim de garantir operação segura e confiável em aplicações industriais e de automação. Os sinais RS485A e RS485B são isolados usando isolamento capacitivo, o que fornece excelente imunidade a EMI e atende aos requisitos de comunicação em alta velocidade da interface RS485.
**Por padrão, os resistores terminais de 120Ω não estão instalados. No entanto, a embalagem inclui cinco resistores de montagem em superfície. Se necessário, os usuários devem soldar o resistor no dispositivo por conta própria.**

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position.png" /></div>

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position2.png" /></div>

:::note
A interface RS485 usa uma fonte de alimentação isolada, o que significa que o sinal de terra para dispositivos externos conectados à interface RS485 deve ser conectado ao pino GND_ISO.

:::

Estes são os pinos relacionados à interface 485 do reComputer para a tabela de dados.

| RS485         | RS485_POWER_EN         | Arquivo de dispositivo do SO | P14         | padrão(High) |
| ------------- | ---------------------- | ----------------------------- | ----------- | ------------- |
| TX5           |                        | /dev/ttyAMA5                  | GPIO12      |               |
| RX5           |                        |                               | GPIO13      |               |
| TX2           | ID_SD                  | /dev/ttyAMA2                  | GPIO0/ID_SD |               |
| RX2           | ID_SC                  |                               | GPIO1/ID_SC |               |
| TX3           |                        | /dev/ttyAMA3                  | GPIO4       |               |
| RX3           |                        |                               | GPIO5       |               |
| RS485_1_DE/RE | (Hight/DE \|\| Low/RE) | /dev/ttyAMA2                  | GPIO6       | padrão Low    |
| RS485_2_DE/RE |                        | /dev/ttyAMA3                  | GPIO17      | padrão Low    |
| RS485_3_DE/RE |                        | /dev/ttyAMA5                  | GPIO24      | padrão Low    |

Por padrão, a porta de habilitação de energia da porta RS485 está em nível alto. E cada interface RS485 está no estado de recepção. Você pode fazer um experimento simples.

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

A chave de Boot do reComputer R1225 está conectada ao pino nRPI_BOOT do CM4. Essa chave oferece aos usuários a opção de selecionar a fonte de boot entre eMMC e USB. No modo normal, a chave deve ser posicionada afastada do lado com o rótulo "BOOT", permitindo que o sistema inicialize a partir da eMMC. Por outro lado, quando os usuários precisarem gravar a imagem do sistema, eles devem posicionar a chave em direção ao rótulo "BOOT", permitindo que o sistema inicialize a partir da interface USB Type-C.

<div class="table-center">

| Posição da chave                                                                                                      | Modo        | Descrição          | nRPI-BOOT |
| ---------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------ | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Modo normal | Boot pela eMMC     | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Modo flash  | Boot pelo USB      | High      |

</div>

:::note
**No modo Boot, a função de alimentação POE não está disponível.**
:::

### USB

<div align="left"><img width={150} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig20.png" /></div>

O reComputer R1225 é equipado com uma porta USB Type-C e duas portas USB Type-A. Consulte a tabela abaixo para suas funções e descrições.

| **Tipo**  | **Quantidade** | **Protocolo** | **Função** | **Descrição**                                                                    |
| ---------- | -------------- | ------------- | ---------- | -------------------------------------------------------------------------------- |
| **Type-C** | *1             | USB2.0        | USB-Device | Usada para depuração serial e gravação de firmware, etc.                         |
| **Type-A** | *2             | USB2.0        | USB-Host   | Conecta vários dispositivos USB, como pen drives, teclados USB e mouses.        |

Verifique se o hub USB foi detectado executando o comando **lsusb**. Este comando lista todos os dispositivos USB conectados, incluindo hubs.

```shell
lsusb
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/23.png" /></div>

A execução deste comando deve exibir informações sobre os dispositivos USB conectados ao seu sistema, incluindo quaisquer hubs USB presentes.

Se o hub USB estiver funcionando corretamente, você deverá ver seus detalhes listados na saída do comando **lsusb**. Se ele não estiver listado, pode haver um problema com o hub ou com sua conexão ao sistema. Nesses casos, talvez seja necessário solucionar problemas do hub USB ou de suas conexões.

### Slot SIM

<div style={{ position: 'relative', left: '150px' }}>
    <img
        width="40"
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig19.png"
        style={{ transform: 'rotate(90deg)', position: 'absolute', top: '0', left: '0', transformOrigin: 'left top' }}
    />
</div>
<br />
<br />
O reComputer R1225 utiliza um slot para cartão SIM de tamanho padrão, comumente encontrado em aplicações industriais, que requer um cartão SIM padrão com dimensões de 25mm x 15mm.
:::note
O reComputer R1225 está disponível em uma versão 4G. Se você adquirir a edição padrão (sem o módulo 4G), poderá comprar um módulo 4G separadamente para instalação. O Bazaar Mall atualmente oferece dois módulos 4G: Europa (EMEA & Thai <a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">**SKU 113991135**</a>) e América (América do Norte **<a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">SKU 113991134</a>**)
:::

### Slot SSD

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig08.png" /></div>
<br />
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig04.png" /></div>
O slot SSD no reComputer R1225 é projetado para acomodar SSDs NVMe M.2 2280 com capacidades de 128GB, 256GB, 512GB e 1TB. Este slot permite expansão de armazenamento em alta velocidade, possibilitando aos usuários melhorar o desempenho e a capacidade do sistema.

Para listar os discos, incluindo o SSD, você pode usar o comando *fdisk -l*. Veja como:

```bash
sudo fdisk -l
```

Este comando exibirá uma lista de todos os discos conectados ao seu sistema, incluindo o SSD se ele for detectado corretamente. Procure pelas entradas que representam o seu SSD. Elas normalmente começam com /dev/sd seguido de uma letra (por exemplo, /dev/sda, /dev/sdb, etc.).
Depois de identificar a entrada correspondente ao seu SSD, você pode prosseguir com o particionamento ou formatação conforme necessário.

:::note
Existem dois usos principais para cartões SSD:<br />
1. Armazenamento de alta capacidade: cartões SSD podem ser utilizados para necessidades de armazenamento de alta capacidade.<br />
2. Unidade de boot com imagem: outro uso envolve utilizar o SSD tanto como armazenamento de alta capacidade quanto para armazenar imagens de sistema, permitindo inicializar diretamente a partir do cartão SSD.<br />
É importante observar que nem todos os cartões SSD disponíveis no mercado suportam o segundo uso. Portanto, se você pretende utilizá-lo como unidade de boot e não tem certeza de qual modelo comprar, recomendamos optar pelo nosso SSD de 1TB recomendado (SKU 112990267). Este modelo foi testado e verificado quanto à funcionalidade de boot, reduzindo o risco de problemas de compatibilidade e minimizando custos de tentativa e erro.
:::

### Slot Mini-PCle

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig06.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/slot.png" /></div>
<br />
<div class="table-center">

|         Slot         | Protocolo suportado |
| -------------------- | ------------------- |
|       Mini-PCIe 1    |       4G LTE        |
|       Mini-PCIe 2    |      SPI LoRa®      |

</div>

:::note
O reComputer R1225 vem nas versões padrão e 4G: para a versão padrão, o Mini-PCIe 1 fica vazio; para a versão 4G, o Mini-PCIe 1 vem pré-instalado com 4G LTE.
:::

Este dispositivo possui duas interfaces Mini-PCIe, nomeadas Mini-PCIe Slot 1 e Mini-PCIe Slot 2. O Slot 1 se conecta ao slot do cartão SIM e suporta protocolos USB, enquanto o Slot 2 suporta protocolos USB e SPI, mas não se conecta ao slot do cartão SIM. Portanto, dispositivos como 4G LTE podem ser conectados através do Slot 1, enquanto dispositivos SPI LoRa® podem ser conectados através do Slot 2.

### Orifício de reset

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig16.png" /></div>

Há um Mini Push Button Switch localizado no orifício de reset do reComputer R1225. Ao pressionar este botão com um objeto fino, o CM4 pode ser reiniciado. Este pino, quando em nível alto, sinaliza que o CM4 foi iniciado. Colocar este pino em nível baixo reinicia o módulo.

### Ethernet RJ45

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig15.png" /></div>
<br />
<div class="table-left">

| Nome | Tipo                         | Velocidades        | PoE                                |
| ---- | --------------------------- | ------------------ | ---------------------------------- |
| ETH0 | Ethernet Gigabit nativo CM4 | 10/100/1000 Mbit/s | Pré-instalado                      |
| ETH1 | Convertido de USB           | 10/100 Mbit/s      | Não suportado                      |

</div>

O reComputer R1225 vem com duas portas Ethernet RJ45. ETH0 é uma interface Ethernet Gigabit nativa do CM4 que suporta três velocidades diferentes: 10/100/1000 Mbit/s. Um módulo PoE adicional pode ser adquirido para habilitar fornecimento de energia via Ethernet (PoE) através desta interface, fornecendo energia ao reComputer R1225. A outra porta, ETH1, suporta 10/100 Mbit/s e é convertida a partir de USB.

### HDMI

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig17.png" /></div>

O reComputer R1225 possui uma interface HDMI nativa do CM4, suportando saída de vídeo de até 4K @ 60 fps. É ideal para aplicações que exigem múltiplas telas, permitindo aos usuários enviar seu conteúdo para telas externas de grande porte.

### RTC

O reComputer R1225 possui um circuito RTC que vem pré-instalado com uma bateria CR2032, permitindo manter a funcionalidade de contagem de tempo mesmo em caso de perda de energia.

Para testar a funcionalidade do Relógio em Tempo Real (RTC), siga estas etapas:

1. Desative a sincronização automática de horário:

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. Defina o horário para 12:00 em 20 de março de 2024:

```bash
sudo hwclock --set --date "2024-03-20 12:00:00"
```

3. Sincronize o horário do RTC com o sistema:

```bash
sudo hwclock --hctosys
```

4. Verifique o horário do RTC:

```bash
sudo hwclock -r
```

Este comando irá ler e exibir o horário armazenado no RTC.
5. Desconecte a fonte de alimentação do RTC, aguarde alguns minutos, depois reconecte-a e verifique novamente o horário do RTC para ver se ele manteve o horário correto.

### Watchdog

O reComputer R1225 vem equipado com um circuito watchdog de hardware independente que garante a reinicialização automática do sistema em caso de travamentos anormais. O circuito watchdog é implementado por meio do RTC e permite tempos de alimentação flexíveis de 1 a 255 segundos.

Para realizar um teste do watchdog, siga estas etapas:

1. Instale o software do watchdog:

```bash
sudo apt install watchdog 
```

2. Edite o arquivo de configuração do watchdog:

```bash
# make sure you install vim already, if haven't, can install by the command below
sudo apt-get install vim
sudo vim /etc/watchdog.conf
```

Modifique a configuração da seguinte forma:

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
Este comando aciona um crash do kernel e deve fazer com que o watchdog reinicie o sistema.
:::

5. Monitore o sistema para confirmar que ele reinicia após o período de tempo limite especificado.
Essas etapas ajudarão você a testar e garantir a funcionalidade do temporizador watchdog em seu sistema.

## Interfaces e módulos opcionais

### Wi-Fi/BLE (incluído)

O reComputer R1225 é alimentado pelo CM4 com uma versão onboard de Wi-Fi/BLE, fornecendo os mesmos parâmetros de Wi-Fi/BLE do CM4. Para informações detalhadas de parâmetros, consulte o site oficial da Raspberry Pi.

:::note
É importante observar que, devido ao gabinete metálico do reComputer R1225, os sinais de Wi-Fi/BLE podem ter dificuldade em atravessar o exterior metálico. Portanto, se você precisar desse recurso, recomendamos instalar a antena externa que preparamos para você.
:::

#### Conectar ao Wi-Fi

##### Conectar ao Wi-Fi pela interface Luci

##### Comando para conectar ao Wi-Fi

passo 1. Para escanear redes Wi-Fi:

  ```bash
  nmcli dev wifi list
  ```

passo 2. Conecte-se à rede Wi-Fi:

  ```bash
  sudo nmcli dev wifi connect network-ssid password "network-password"
  sudo nmcli --ask dev wifi connect network-ssid
  ```

passo 3. Após o dispositivo ser ligado, ele se conectará automaticamente ao Wi-Fi.  
  Se você quiser apagar as informações de Wi-Fi salvas:

  ```bash
  nmcli con del network-ssid
  ```

  Após a desconexão, conecte-se a outro Wi-Fi.

#### Conectar dispositivos bluetooth

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

### Módulo 4G (opcional)

O reComputer R1225 LoRaWAN Gateway está disponível nas versões Standard e 4G. O Slot Mini-PCIe 1 na versão Standard está vago, enquanto a versão 4G vem com um módulo Mini-PCIe pré-instalado, voltado para a Europa (EMEA e Tailândia <a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">**SKU 113991135**</a>) e América (América do Norte **<a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">SKU 113991134</a>**) respectivamente.

### Módulo LoRa® (incluído)

O Slot Mini-PCIe 2 no reComputer R1225 LoRaWAN Gateway é ocupado pelo módulo SPI LoRa®.

### PoE (incluído)

O reComputer R1225 LoRaWAN Gateway vem equipado com um módulo PoE, eliminando a necessidade de os usuários comprarem, soldarem e montarem um por conta própria.

### Slot M.2 (opcional)

O reComputer R1225 suporta SSD NVMe 2280 e acelerador de IA (Hailo) por meio do uso de um slot PCIe (J62) abaixo de dois slots Mini-PCIe na placa. É importante observar que o PCIe do CM4 é gen2.0 com uma velocidade teórica máxima de 5Gbps. Se você estiver usando um SSD Gen3.0 ou superior, ele pode não conseguir atingir a velocidade máxima do SSD. Após os testes, o reTerminal DM com SSD instalado pode atingir uma velocidade máxima de gravação de 230MB/s e uma velocidade máxima de leitura de 370MB/s. Se você não tiver certeza de quais SSDs são compatíveis, pode comprar seguindo a lista de acessórios abaixo.

[Por favor, clique aqui para instruções de montagem](/pt-br/recomputer_r1000_assembly_guide/#montar-ssd).

<div class="table-center">

<table >
  <tbody>
  <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>Cartão SSD</td>
      <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>NVMe M.2 2280 SSD 1TB</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html">112990267</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>512GB NVMe M.2 PCle Gen3x4 2280 SSD Interno</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html">112990247</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>256GB NVMe M.2 PCle Gen3x4 2280 SSD Interno</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html">112990246</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>128GB NVMe M.2 PCle Gen3x4 2280 SSD Interno</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html">112990226</a></td>
  </tr>
  </tbody>
</table>
</div>

:::note
Por favor, observe que:<br />
1- Os resultados do teste de velocidade podem variar dependendo do modelo de SSD, método de teste e ambiente de teste. Os valores fornecidos aqui são apenas para fins de referência e foram obtidos no laboratório da Seeed.<br />

Existem dois usos principais para cartões SSD:<br />
1. Armazenamento de alta capacidade: cartões SSD podem ser utilizados para necessidades de armazenamento de alta capacidade.<br />
2. Unidade de boot com imagem: outro uso envolve utilizar o SSD tanto como armazenamento de alta capacidade quanto para armazenar imagens de sistema, permitindo inicializar diretamente a partir do cartão SSD.<br />
É importante observar que nem todos os cartões SSD disponíveis no mercado suportam o segundo uso. Portanto, se você pretende usá-lo como unidade de boot e não tem certeza de qual modelo comprar, recomendamos optar pelo nosso **SSD de 1TB (<a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html">SKU [112990267]</a>)** recomendado. Este modelo foi testado e verificado quanto à funcionalidade de boot, reduzindo o risco de problemas de compatibilidade e minimizando os custos de tentativa e erro.
:::

### Chip de Criptografia TPM 2.0 (opcional)

O TPM apresenta o OPTIGA™ TPM SLB9670 da Infineon, que é compatível com a especificação Trusted Computing Group (TCG) TPM 2.0 e é recomendado como chip de criptografia para o reComputer R1225. O chip possui uma interface SPI aplicada à porta J13 na placa, para habilitar uma raiz de confiança para integridade da plataforma, atestação remota e serviços criptográficos.

:::note
[Por favor, clique aqui para instruções de montagem](https://wiki.seeedstudio.com/pt-br/recomputer_r1000_assembly_guide/#montar-módulo-tpm-20).
:::

Se você conectar o módulo TPM 2.0 ao dispositivo, o código a seguir pode ajudar a verificar a conexão do TPM.

```bash
ls /dev | grep tpm
```

Se você vir **tpm0** e **tpmrm0** na saída, isso significa que os dispositivos TPM (Trusted Platform Module) foram detectados e estão disponíveis no seu sistema. Isso indica que o hardware TPM é reconhecido e acessível, o que é um bom sinal. Você pode prosseguir usando funcionalidades ou aplicativos relacionados a TPM sabendo que os dispositivos estão presentes e acessíveis.

### UPS (incluído)

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/30.png" /></div>

O UPS é 7F, que opera em série. O módulo UPS é posicionado entre os componentes DC5V e CM4, com um sinal GPIO utilizado para alertar a CPU no caso de perda de energia da fonte de 5V. Ao receber esse sinal, a CPU executa um script de urgência antes que a energia do supercapacitor se esgote, iniciando um comando "$ shutdown".
<br />
A duração de backup fornecida pelo UPS depende fortemente da carga do sistema. Abaixo estão alguns cenários típicos testados com um módulo CM4 com 4GB de RAM, 32GB de armazenamento eMMC e um módulo Wi-Fi.
<br />

| Modo de Operação | Tempo(s) | Observação                                                         |
| ----------------- | ------- | ----------------------------------------------------------------- |
| Ocioso            | 37      | Teste em condições ociosas com programa de driver oficial carregado |
| Carga total da CPU| 18      | stress -c 4 -t 10m -v &                                           |

:::note
Para a função de UPS, entre em contato conosco para mais informações, e o sinal de alarme é ativo em nível BAIXO.
:::

Um GPIO25 entre a CPU e a entrada de energia CC/CA é usado para alertar a CPU quando a fonte de alimentação de 5V cai. Então a CPU deve executar algo urgente em um script antes da exaustão de energia do supercapacitor e executar um `$ shutdown`
<br />
Outra maneira de usar essa função é iniciar um desligamento quando o pino GPIO mudar. O pino GPIO fornecido é configurado como uma tecla de entrada que gera eventos KEY_POWER. Este evento é tratado pelo systemd-logind iniciando um desligamento.
Use `/boot/overlays/README` como referência e, em seguida, modifique `/boot/config.txt`.

```bash
dtoverlay=gpio-shutdown,gpio_pin=25,active_low=1
```

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

### DSI (opcional)

Um DSI (J24) é reservado na placa, para uso especial. Os usuários devem adquirir plug-ins de acordo com suas próprias necessidades.

## Recursos Adicionais

- [Arquivo 3D do reComputer R1225](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000.stp)
- [Desenho Esquemático e Desenho de PCB do reComputer R1225](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_schematic_design_files.zip)
- [Atribuição de Pinos do reComputer R1225 (R1000 v1.1)](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_v1_1_Pin_Assignment.xlsx)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
