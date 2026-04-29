---
description: Página preliminar de primeiros passos para a placa carrier reComputer Robotics J601 projetada para módulos NVIDIA Jetson AGX Thor.
title: Primeiros Passos com reComputer Robotics J601
keywords:
  - reComputer Robotics J601
  - AGX Thor
  - Jetson
  - Placa Carrier
  - Robótica
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ai_robotics_recomputer_robotics_j601_carrier_board_getting_started
sku: 100060965
last_update:
  date: 04/24/2026
  author: Dayu
createdAt: '2026-04-24'
updatedAt: '2026-04-24'
url: https://wiki.seeedstudio.com/pt-br/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/
---

# Primeiros Passos com reComputer Robotics J601

:::note
Esta página é um rascunho preliminar para a futura placa carrier reComputer Robotics J601 para módulos NVIDIA Jetson AGX Thor. As especificações, o suporte de software, os conjuntos de acessórios e os detalhes mecânicos ainda estão sujeitos a alterações.
:::

<div align="center">
  <img width="700" src="https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png"/>
</div>

A reComputer Robotics J601 é uma placa carrier voltada para robótica para módulos NVIDIA Jetson AGX Thor. Ela é destinada a cargas de trabalho de IA incorporada de alto desempenho e controle robótico que exigem rede de alta velocidade, E/S industriais, expansão de câmera GMSL e entrada DC de ampla faixa em um formato compacto de placa carrier.

## Recursos Preliminares

- Suporte para módulo **NVIDIA Jetson AGX Thor**
- Slot **M.2 Key M** para SSD NVMe 2280
- Slot **M.2 Key E** para módulo Wi-Fi/Bluetooth
- Slot **M.2 Key B** para módulo 5G e suporte a **Nano SIM**
- Ethernet de alta velocidade com suporte planejado a **PTP** e **EtherCAT**
- E/S ricas para robótica, incluindo **CAN**, **RS-232/422/485**, **DI/DO**, **I2C**, **I2S**, **SPI** e **GPIO**
- **Expansão GMSL** para até **8 câmeras**
- Entrada **DC de 19 V a 48 V** de ampla faixa por meio de **XT30**
- Plataforma de software alvo: **JetPack 7**

## Especificações Preliminares

A tabela a seguir mantém intencionalmente apenas as partes mais claras da definição atual de hardware e deixa os itens ainda não definidos como TBD.

<div class="table-center">
<table>
  <tbody>
    <tr>
      <td>Módulo</td>
      <td>NVIDIA Jetson AGX Thor x 1</td>
    </tr>
    <tr>
      <td>Armazenamento</td>
      <td>1x M.2 Key M para SSD M.2 NVMe 2280</td>
    </tr>
    <tr>
      <td>Rede</td>
      <td>Definição de Ethernet em andamento; plano preliminar inclui portas RJ45 de alta velocidade com suporte a PTP e EtherCAT</td>
    </tr>
    <tr>
      <td>Expansão sem fio</td>
      <td>1x M.2 Key E para Wi-Fi/Bluetooth, 1x M.2 Key B para 5G, 1x Nano SIM</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>Até 4x USB 3.2 Tipo A (Host), 1x USB 2.0 Tipo C (UART de depuração / Modo dispositivo), 1x USB 3.0 Tipo C para gravação</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1x HDMI</td>
    </tr>
    <tr>
      <td>Resfriamento</td>
      <td>1x conector de ventoinha de 4 pinos (PWM 12 V); placa carrier e ventoinha estão planejadas para serem vendidas separadamente</td>
    </tr>
    <tr>
      <td>Câmera</td>
      <td>Expansão GMSL, até 8 câmeras</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>4x CAN via conectores JST</td>
    </tr>
    <tr>
      <td>Serial</td>
      <td>2x RS-232/422/485 via DB9, 1x RS-232/422/485 via DB9, 1x RS-485 via JST de 4 pinos</td>
    </tr>
    <tr>
      <td>E/S digitais</td>
      <td>4x DI e 4x DO via conectores terminais JST</td>
    </tr>
    <tr>
      <td>Áudio</td>
      <td>1x I2S, 2x saídas de amplificador, 1x entrada de microfone</td>
    </tr>
    <tr>
      <td>Expansão de baixa velocidade</td>
      <td>1x I2C, 1x SPI, GPIO via conector JST/cabeçalho de pinos</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC de 2 pinos</td>
    </tr>
    <tr>
      <td>Botões</td>
      <td>Recovery e Reset</td>
    </tr>
    <tr>
      <td>LEDs</td>
      <td>PWR, ACT e LED RGB definido pelo usuário</td>
    </tr>
    <tr>
      <td>Entrada de energia</td>
      <td>XT30, DC de 19 V a 48 V</td>
    </tr>
    <tr>
      <td>Corrente / Potência</td>
      <td>Corrente máxima de 10 A, definição de potência do sistema de 160 W</td>
    </tr>
    <tr>
      <td>Temperatura de operação</td>
      <td>-10°C a +60°C</td>
    </tr>
    <tr>
      <td>Umidade</td>
      <td>10% a 95% UR</td>
    </tr>
    <tr>
      <td>Certificação</td>
      <td>CE, FCC, RoHS, classe EMI alvo: Classe A</td>
    </tr>
    <tr>
      <td>Mecânico</td>
      <td>Tamanho alvo da placa carrier dentro de 150 mm x 130 mm</td>
    </tr>
  </tbody>
</table>
</div>

## Definição de LED e Botão

### Botões

| Botão | Pino | Sinal | Tipo | Descrição |
| --- | --- | --- | --- | --- |
| RECOVERY | 240 | - | CMOS-5V | Usado para recuperação do sistema / fluxo de configuração de baixo nível |
| RESET | 239 | SYS_RESET* | Dreno aberto, 1,8 V | Puxar para nível baixo para reiniciar o módulo; quando a alimentação do módulo estiver pronta, o nível alto pode ser usado como habilitação de alimentação da placa carrier |

### Indicadores LED

| LED | Cor | Status | Descrição |
| --- | --- | --- | --- |
| PWR | Verde | On | O dispositivo está conectado à alimentação |
| PWR | Verde | Off | O dispositivo não está conectado à alimentação |
| ACT | Verde | Piscando | Atividade do SSD |
| USER | R / G / B | TBD | Comportamento definido pelo usuário |

## Software

- Base de software planejada: **JetPack 7**
- Capacidade Ethernet planejada: **EtherCAT**
- Guia detalhado de gravação, pacote BSP e etapas de validação: **TBD**

## Adaptação de Câmera Planejada

A lista de requisitos atual inclui os seguintes modelos de câmera GMSL:

- Senyun `SG3S-ISX031C-GMSL2F`
- Senyun `SG2-AR0233C-5200-G2A`
- Senyun `SG2-IMX390C-5200-G2A`
- Senyun `SG8S-AR0820C-5300-G2A`
- Orbbec `335LG`

## Projeto Térmico

Esta placa carrier é destinada ao uso dentro de carcaças de robôs humanóides, onde os clientes podem projetar sua própria solução térmica. A Seeed planeja fornecer orientações de projeto térmico para implantação baseada em AGX Thor.

Documento de referência:

- `Jetson_Thor_Thermal_DG_TDG12271001_v1.0.pdf`

## Lista de Embalagem Preliminar

### Acessórios

- Cabo XT30 para DC, 200 mm x 1
- Chicotes de fios soltos JST, 100 mm x 10
- Cabo USB Tipo C para Tipo A, 1 m x 1
- Parafuso para Key E x 1
- Parafuso para Key M x 1
- Parafuso para Key B x 1
- Parafusos para AGX Thor SOM x 4
- Suportes para sustentação da placa carrier x 4
- Parafusos para suportes x 4
- Manual do usuário x 1

### Embalagem

- Caixa para transporte aéreo
- Bandeja interna para a placa carrier e acessórios
- Manual do usuário na parte superior com uma camada adicional de espuma
- Estilo de embalagem semelhante ao da mini placa carrier J501

## Recursos

- Layout detalhado de hardware: TBD
- Guia de gravação: TBD
- Notas de lançamento do BSP: TBD

## Suporte Técnico

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
