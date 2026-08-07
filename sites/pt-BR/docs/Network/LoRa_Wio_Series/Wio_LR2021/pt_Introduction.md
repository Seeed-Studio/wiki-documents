---
description: A introdução do Wio-LR2021
title: Introdução ao Wio-LR2021
keywords:
  - Wio-LR2021
  - LoRa
  - LR2021
  - Semtech
  - Sub-GHz
  - 2.4GHz
  - LoRaWAN
  - BLE 5.0
  - Transceiver
  - Wio
image: https://files.seeedstudio.com/wiki/Wio-LR2021/img/1-100058045-Seeed-Studio-Wio-LR2021-Wireless-module-masked.jpg
slug: /wio_lr2021_introduction
sku: 100058045
sidebar_position: 1
last_update:
  date: 06/03/2026
  author: David Du
createdAt: '2026-06-03'
updatedAt: '2026-06-22'
url: https://wiki.seeedstudio.com/pt-br/wio_lr2021_introduction/
---

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/1-100058045-Seeed-Studio-Wio-LR2021-Wireless-module-masked.jpg" style={{width:900, height:'auto'}}/></div></td>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Wio-LR2021-Wireless-module-868-915MHz-Tape-reel-p-6831.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## 1. Introdução
O **Módulo Sem Fio Wio-LR2021** é um módulo transceptor sem fio multibanda de próxima geração, alimentado pelo chipset LR2021 de quarta geração da Semtech. Ele integra operação em **Sub-GHz (863-928MHz)** e **2.4GHz ISM** em um único subsistema compacto, eliminando a necessidade de múltiplos projetos de rádio para diferentes regiões e aplicações.

Projetado para desenvolvedores de IoT, provedores de soluções LPWAN, engenheiros de rastreamento de ativos, integradores de sistemas de agricultura inteligente e gerentes de produto de IoT industrial, o Wio-LR2021 faz a ponte entre comunicação Sub-GHz de alcance ultra‑longo e links de dados de alta velocidade em 2.4GHz, permitindo que desenvolvedores criem produtos com implantação global sem manter múltiplas variantes de hardware RF.

## 2. Recursos

### 2.1. Arquitetura RF Multibanda Unificada

O Wio-LR2021 integra múltiplas faixas de RF distintas em um único subsistema compacto. A cobertura Sub-GHz (863-928MHz) garante conformidade com faixas não licenciadas regionais em todo o mundo, enquanto a operação em 2.4GHz ISM oferece maiores taxas de dados e harmonização global.

:::info Detalhes Técnicos
O chipset Semtech LR2021 emprega uma arquitetura de rede de casamento **Switchless Direct-Tie** que elimina a necessidade de chaves RF externas. A saída do PA e a entrada do LNA compartilham o mesmo nó RF na porta Sub-GHz, reduzindo a contagem de BOM e a complexidade da placa. Ao transmitir acima de +6dBm, é necessária proteção adicional de front-end; a entrada máxima absoluta é de +10dBm.
:::

:::caution
A interface RF do módulo possui uma potência de entrada máxima de **+10dBm**; exceder esse valor pode causar danos irreversíveis. Recomendamos adicionar proteção extra ao front-end RF quando a potência de entrada exceder **+6dBm**. Tenha cuidado especial ao usar o módulo próximo a transmissores de alta potência.
:::

### 2.2. Design de Ultra Baixo Consumo

Com uma corrente em deep sleep de apenas **583nA** e corrente em idle de **960uA**, o Wio-LR2021 é otimizado para aplicações alimentadas por bateria e por colheita de energia. 

:::info Dicas de Otimização de Energia
Para máxima vida útil da bateria, utilize o modo Warm Sleep, que mantém a configuração de DIO entre ciclos de despertar.
:::

| Modo | Corrente | Condições |
|------|---------|------------|
| TX (868MHz, +22dBm) | 116.0 mA | Potência máxima Sub-GHz |
| TX (915MHz, +22dBm) | 119.4 mA | Potência máxima Sub-GHz |
| TX (2.4GHz, +12dBm) | 28.4 mA | Potência máxima em 2.4GHz |
| RX (Sub-GHz, LoRa SF12/125kHz) | 8.19 mA | Modo de sensibilidade máxima |
| RX (2.4GHz, LoRa SF12/125kHz) | 8.59 mA | Modo de sensibilidade máxima |
| Deep Sleep | 583 nA | Todas as funções desligadas, configuração mantida |
| Idle / Standby | 960 uA | Oscilador RC em funcionamento, retenção de registradores |

### 2.3. Modulação Avançada e Suporte a Protocolos

O módulo oferece suporte a uma ampla gama de esquemas de modulação: **LoRa** para LPWAN de longo alcance, **FLRC** (Fast Long Range Communication) para links de alta velocidade de até 2.6Mbps, **(G)FSK** e **(G)MSK** para compatibilidade legada, **4-FSK** e **O-QPSK** para protocolos padronizados, e LR-FHSS para conexões robustas de IoT via satélite.

:::info Agilidade de Protocolo
O suporte nativo em hardware permite migração definida por software entre LoRaWAN, BLE 5.0, IEEE 802.15.4 (Thread/Zigbee), Wi-SUN, Wireless M-BUS e Amazon Sidewalk sem mudanças de hardware. Isso torna os projetos à prova de futuro frente à evolução de padrões e requisitos regionais.
:::

### 2.4. FLRC de Alta Velocidade para Streaming Multimídia

A modulação FLRC permite taxas de dados de até 2.6Mbps — muito além das capacidades tradicionais do LoRa. Isso torna o Wio-LR2021 adequado para aplicações que exigem pré-visualização de vídeo, streaming de áudio ou atualizações de firmware em massa por links sem fio que ainda se beneficiam das características de alcance e robustez do LoRa.

### 2.5. Sensibilidade de Recepção de Classe Mundial

O Wio-LR2021 atinge sensibilidade de **-141.1dBm** em Sub-GHz SF12/125kHz de largura de banda, permitindo orçamentos de enlace superiores a 160dBm em condições favoráveis. Em 2.4GHz, a sensibilidade chega a **-133dBm** em SF12/400kHz, superando a maioria das soluções concorrentes de banda dupla.

### 2.6. Pacote SMT Compacto com Pré-Certificação

Medindo apenas 17.07x10.42x2.8mm em um pacote SMT de 22 pinos, o Wio-LR2021 minimiza o espaço na placa enquanto maximiza a capacidade. O status de pré-certificação FCC e CE reduz o tempo de chegada ao mercado ao simplificar o processo de certificação do dispositivo hospedeiro.

:::note MCU Hospedeiro Necessário
O Wio-LR2021 é um módulo transceptor RF puro, sem processador de aplicação integrado. Ele requer um MCU hospedeiro externo (como STM32, nRF52, ESP32 ou RP2040) para controle via interface SPI.
:::

## 3. Visão Geral de Hardware

### 3.1. Diagrama Esquemático

<td><div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/Wio-LR2021-pinout-5-mask.jpg" style={{width:950, height:'auto'}}/></div></td>

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/WIO-LR2021_Pinout-3.png" style={{width:900, height:'auto'}}/></div></td>

### 3.2. Pinagem
| Número do Pino| Nome do Pino | Tipo | Descrição |
|-----|----------|------|-------------|
|1| VCC_IN | Entrada de Alimentação | Entrada de alimentação de 1.8V - 3.7V |
|2| DIO5 | E/S Digital | IRQ, controle de chave RF, saída de clock, pull-up fraco interno para VCC_IN no reset |
|3| RESET | Entrada Digital | **Ativo em LOW** |
|4| SPI_MISO | Saída Digital | Lógica de 3.3V, Hi-Z quando NSS desativado (HIGH) |
|5| SPI_MOSI | Entrada Digital | Lógica de 3.3V, Hi-Z quando NSS desativado (HIGH) |
|6| SPI_SCK | Entrada Digital | Máx. 16MHz, Modo 0 (CPOL=0, CPHA=0). |
|7| SPI_NSS | Entrada Digital | **Ativo em LOW** |
|8| BUSY | Saída Digital | Saída open-drain, pull-up externo necessário na PCB do host. LOW = pronto; HIGH = processando. Automaticamente puxado para HIGH na borda de descida de NSS. |
|9| GND | Terra | Referência de terra comum |
|10| SubG_RF | RF | Pinagem RF Sub-GHz |
|11| GND | Terra | Referência de terra comum |
|12| GND | Terra | Referência de terra comum |
|13| 2.4G_RF | RF | Pinagem RF 2.4GHz |
|14| GND | Terra | Referência de terra comum |
|15| GND | Terra | Referência de terra comum |
|16| DIO11 | E/S Digital | Alta impedância no reset |
|17| DIO10 | E/S Digital | Alta impedância no reset |
|18| DIO9 | E/S Digital | Alta impedância no reset |
|19| DIO8 | E/S Digital | Alta impedância no reset |
|20| GND | Terra | Referência de terra comum |
|21| DIO6 | E/S Digital | Pull-up fraco interno para VCC_IN no reset |
|22| DIO7 | E/S Digital | Alta impedância no reset |

<br />

:::tip Configuração de DIO
Todas as funções de DIO devem ser configuradas via comando SPI `SetDioFunction` enquanto estiver no modo STDBY_RC. A configuração é mantida entre ciclos de Sleep aquecido. Planeje o firmware do host para configurar os DIOs imediatamente após o reset do módulo.
:::



## Recursos

- **[PDF]** [Datasheet do Módulo Wio-LR2021](https://files.seeedstudio.com/wiki/Wio-LR2021/res/Wio-LR2021%20Module%20Datasheet.pdf)

- **[STEP]** [Modelo 3D do Módulo Wio-LR2021](https://files.seeedstudio.com/wiki/Wio-LR2021/res/Wio-LR2021_3D%20Model.step)

- **[DXF]** [Desenho Mecânico do Módulo Wio-LR2021](https://files.seeedstudio.com/wiki/Wio-LR2021/res/Wio-LR2021_Mechanical%20Drawing.dxf)

- **[ZIP]** [Biblioteca KiCad do Módulo Wio-LR2021](https://files.seeedstudio.com/wiki/Wio-LR2021/res/kicad-library.zip)

- **[ZIP]** [Biblioteca Allegro do Módulo Wio-LR2021](https://files.seeedstudio.com/wiki/Wio-LR2021/res/allegro-library.zip)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>