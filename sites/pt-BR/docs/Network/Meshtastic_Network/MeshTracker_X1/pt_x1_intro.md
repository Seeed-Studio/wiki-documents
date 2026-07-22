---
description: SenseCAP MeshTracker X1 para Meshtastic Introdução. Este wiki apresentará os recursos, especificações, visão geral de hardware, botão, LED e lista de pinos.
title: Introdução ao SenseCAP MeshTracker X1
keywords:
  - Tracker
  - Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/X1First.png
sku: 100087698
slug: /meshtracker_x1_intro
sidebar_position: 0
last_update:
  date: 5/29/2026
  author: MichelleHuang
url: https://wiki.seeedstudio.com/pt-br/meshtracker_x1_intro/
createdAt: '2026-07-13'
updatedAt: '2026-07-16'
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/X1First.png" alt="pir" width={800} height="auto" /></p>

O primeiro dispositivo Meshtastic do mundo do tamanho de um cartão com GPS de banda dupla. Desenvolvido para comunicação confiável fora da rede, o MeshTracker X1 é um rastreador GPS [Meshtastic®](https://meshtastic.org/) com classificação IP66 que suporta frequências de 863–928 MHz. Alimentado pelo mais recente chip LoRa Semtech LR2021, ele possui conectividade USB-C, até 5 dias de duração de bateria e um design compacto, pronto para uso ao ar livre.

### Recursos

- **Um dispositivo Meshtastic que você realmente vai carregar** 

O SenseCAP MeshTracker X1 é projetado para pessoas que precisam de comunicação confiável e compartilhamento de localização além das redes celulares — seja em ambientes externos, em grandes eventos ou durante situações de emergência. Com um formato verdadeiramente portátil e proteção robusta IP66, ele traz conectividade Meshtastic para o uso diário e para aplicações reais em campo.
- **Rastreamento GPS de banda dupla ultrapréciso** 

Alimentado por GNSS de banda dupla L1+L5 e um barômetro integrado, o MeshTracker X1 oferece posicionamento mais confiável e melhor percepção de altitude do que o GPS de banda única. Ele também é o primeiro dispositivo Meshtastic do mundo do tamanho de um cartão com GPS de banda dupla.
- **Conectividade LoRa de próxima geração (LR2021)** 

Alimentado pelo Semtech LR2021, o MeshTracker X1 oferece desempenho de RF mais robusto com sensibilidade de até -141 dBm e taxas de dados FLRC de 2,6 Mbps para comunicação em malha mais rápida e confiável, criando uma base para recursos futuros como transmissão de voz e imagem.
- **Comunicação confiável de longo alcance** 

Testado em 915 MHz, o MeshTracker X1 permite comunicação confiável em distâncias de até 8 km em condições de linha de visada aberta, mantendo as equipes conectadas durante aventuras ao ar livre, eventos e situações de emergência.
- **Design do tamanho de um cartão, fácil de carregar** 

Fino e leve, o MeshTracker X1 é projetado para uso diário durante aventuras ao ar livre. Use-o em um cordão, prenda-o a uma mochila, fixe-o em uma bolsa de bicicleta ou simplesmente coloque-o no bolso para uma conectividade fora da rede sem esforço.
- **Alertas flexíveis de vibração e som** 

O MeshTracker X1 oferece opções flexíveis de notificação com vibração integrada e feedback por buzzer. Mantenha-se ciente das mensagens recebidas, esteja você em um evento barulhento, pedalando ao ar livre ou explorando trilhas silenciosas onde prefere distrações mínimas.
- **Proteção robusta para uso externo IP66** 

Construído com proteção IP66 contra poeira e água, garantindo desempenho confiável em ambientes externos severos, como chuva, lama e trilhas empoeiradas.
- **Conectividade USB-C** 

Interface USB-C padrão para carregamento, atualizações de firmware e depuração, projetada para uso robusto ao ar livre e conveniência no dia a dia.
- **Vida útil estendida da bateria** 

Um formato altamente integrado, do tamanho de um cartão, otimizado em torno de uma bateria de alta capacidade de 1100mAh, oferecendo até 5 dias de funcionamento, mantendo-se compacto e portátil para uso ao ar livre e comunicação fora da rede.


### Especificação

**Geral**

|**Protocolo de rede**|LoRa (863-928 MHz), Bluetooth (v5.0)|
| :- | :- |
|**LED**|1\* RGB|
|**Buzzer**|1\* buzzer para indicar status|
|**Botão**|1\* botão para operar|
|**Motor**|1\* DRV2605L|
|**Antena**|Interna (GNSS/LoRa/Bluetooth)|
|**Distância de comunicação**|até 8 km|
|**Grau de proteção IP**|IP66|
|**Dimensões**|90\*57\*8 mm|
|**Peso do dispositivo**|45g|
|**Temperatura de operação**|-20 a 60℃|
|**Certificação**|CE/FCC/RoSH/TELEC|

**Bateria**

|Item|Parâmetro|
| :- | :- |
|**Capacidade da bateria**|Bateria de lítio recarregável, 1100mAh|
|**Monitoramento da vida útil da bateria**|Nível de bateria enviado periodicamente em uplink|
|<p>**Cabo de carregamento**</p><p>**(Adaptador não incluído)**</p>|Cabo de carregamento USB Tipo-C, 20 cm|
|**Entrada de energia do dispositivo**|5V, 0.55A|
|**Limite de temperatura de carregamento**|5 a +45℃|

### Lista de pinos

<table>
  <tr>
    <th>Componente</th>
    <th>Pino</th>
    <th>Nº do pino</th>
    <th>Protocolo</th>
  </tr>
  <tr>
    <td rowspan="3">LED</td>
    <td>R</td>
    <td>P0.03</td>
    <td rowspan="3">GPIO</td>
  </tr>
  <tr>
    <td>G</td>
    <td>P0.24</td>
  </tr>
  <tr>
    <td>B</td>
    <td>P0.28</td>
  </tr>
  <tr>
    <td>Sensor PWR EN</td>
    <td>-</td>
    <td>P1.07</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td>Buzzer</td>
    <td>-</td>
    <td>P0.25</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td rowspan="3">Driver do motor</td>
    <td>EN</td>
    <td>P1.05</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td>SCL</td>
    <td>P1.14</td>
    <td rowspan="2">IIC</td>
  </tr>
  <tr>
    <td>SDA</td>
    <td>P1.15</td>
  </tr>
  <tr>
    <td rowspan="2">Sensor de pressão de ar</td>
    <td>SCL</td>
    <td>P1.14</td>
    <td rowspan="2">IIC</td>
  </tr>
  <tr>
    <td>SDA</td>
    <td>P1.15</td>
  </tr>
  <tr>
    <td rowspan="3">Sensor de 6 eixos (versão futura)</td>
    <td>INT</td>
    <td>P1.02</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td>SCL</td>
    <td>P1.14</td>
    <td rowspan="2">IIC</td>
  </tr>
  <tr>
    <td>SDA</td>
    <td>P1.15</td>
  </tr>
  <tr>
    <td rowspan="3">Sensor de 3 eixos (versão futura)</td>
    <td>INT</td>
    <td>P1.12</td>
    <td>GPIO</td>
  </tr>
    <tr>
    <td>SCL</td>
    <td>P1.14</td>
    <td rowspan="2">IIC</td>
  </tr>
  <tr>
    <td>SDA</td>
    <td>P1.15</td>
  </tr>
  <tr>
    <td>Botão</td>
    <td>-</td>
    <td>P0.06</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td rowspan="7">LR2021</td>
    <td>SPIMISO</td>
    <td>P1.08</td>
    <td rowspan="4">SPI</td>
  </tr>
  <tr>
    <td>SPIMOSI</td>
    <td>P1.09</td>
  </tr>
  <tr>
    <td>SPISCK</td>
    <td>P0.11</td>
  </tr>
  <tr>
    <td>SPInCS</td>
    <td>P0.12</td>
  </tr>
  <tr>
    <td>LR_RST</td>
    <td>P1.10</td>
    <td rowspan="3">GPIO</td>
  </tr>
  <tr>
    <td>LR_BUSY</td>
    <td>P0.07</td>
  </tr>
  <tr>
    <td>LR_DIO8</td>
    <td>P1.01</td>
  </tr>
  <tr>
    <td rowspan="7">GNSS</td>
    <td>TX</td>
    <td>P0.13</td>
    <td rowspan="2">UART</td>
  </tr>
  <tr>
    <td>RX</td>
    <td>P0.14</td>
  </tr>
  <tr>
    <td>Sleep_INT</td>
    <td>P0.30</td>
    <td rowspan="5">GPIO</td>
  </tr>
  <tr>
    <td>PPS0</td>
    <td>P0.04</td>
  </tr>
  <tr>
    <td>RTC_INT</td>
    <td>P0.29</td>
  </tr>
  <tr>
    <td>PWR_EN</td>
    <td>P1.11</td>
  </tr>
  <tr>
    <td>RTC_PWR_EN</td>
    <td>P1.13</td>
  </tr>
   <tr>
    <td rowspan="6">Flash de 8MB</td>
    <td>SPISCK</td>
    <td>P0.19</td>
    <td rowspan="6">SPI</td>
  </tr>
  <tr>
    <td>SPInCS</td>
    <td>P0.20</td>
  </tr>
  <tr>
    <td>SPIO0</td>
    <td>P0.21</td>
  </tr>
  <tr>
    <td>SPIO1</td>
    <td>P0.22</td>
  </tr>
  <tr>
    <td>SPIO2</td>
    <td>P0.23</td>
  </tr>
  <tr>
    <td>SPIO3</td>
    <td>P1.00</td>
  </tr>
</table>

### Botão

|Ação do botão|Descrição|Buzzer|
|- |- |- |
|Pressionar uma vez|Ligar|Melodia ascendente|
|Pressionar duas vezes|Atualizar informações de nó/localização|-|
|Pressionar três vezes|Ligar/desligar o GPS|-|
|Quatro cliques|Silenciar/reativar temporariamente|-|
|Pressionar e segurar por 5s|Desligar|Melodia descendente|

### LED

<table>
  <tr>
    <th colspan="2">Status da luz</th>
    <th colspan="1">Status do dispositivo</th>
  </tr>
  <tr>
    <td rowspan="4">🟢verde</td>
    <td>Constante</td>
    <td>Dispositivo ligando</td>
  </tr>
  <tr>
    <td>Piscando rápido </td>
    <td>Funcionando normalmente</td>
  </tr>
  <tr>
    <td>Piscando devagar </td>
    <td>Carregando</td>
  </tr>
 <tr>
    <td>Constante</td>
    <td>Totalmente carregado</td>
  </tr>
  <tr>
    <td>🔴vermelho</td>
    <td>Piscando</td>
    <td>Baixa energia</td>
  </tr>
    <tr>
    <td>⚪️branco</td>
    <td>Constante</td>
    <td>Modo DFU/Modo bootloader</td>
  </tr>
</table>

### Diagrama de hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/HardWareOverview.png" alt="pir" width={900} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/HardwareDiagram.png" alt="pir" width={900} height="auto" /></p>

### Recurso

[Relatório de teste de bateria](https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Battry_Certification.zip)