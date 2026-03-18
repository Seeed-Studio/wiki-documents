---
description: Introdução ao EdgeBox-ESP-100 com Arduino
title: Introdução ao EdgeBox-ESP-100 com Arduino
keywords:
  - Edge
  - Controle de CLP
  - Sistema de controle
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Edgebox-ESP-100-Arduino
sku: 102991558,102991559,102110771,102110772,102110773,102991734,102991735,102110779,E23010424,114993117
last_update:
  date: 03/10/2023
  author: Peter Pan
createdAt: '2023-03-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Edgebox-ESP-100-Arduino/
---

## Edgebox-ESP-100

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/e/d/edgebox-esp100_1.jpg" style={{width: 600}}/></div>

EdgeBox-ESP-100 é um controlador baseado em ESP32 projetado para soluções de automação leves. Ele suporta entrada analógica, monitorando e controlando efetivamente em um ambiente remoto, ideal para malhas de controle PID, controle de sequenciamento lógico ou um gateway com expansão flexível de sensores sem fio e de campo.

Além do EdgeBox-ESP-100, também temos outros 2 produtos Edge para diferentes soluções na família Edge, alimentados por Raspberry Pi. Para ajudá-lo a entender melhor as diferenças e escolher a parte mais adequada para seus projetos, consulte a [Página da Série Edge](https://www.seeedstudio.com/raspberrypi/device/industry.html) da Seeed Studio.

Ele oferece conexões Fieldbus isoladas CAN, RS485 e ricos recursos de IO para extensas instalações e entrada de sensores, tanto para sinais digitais quanto analógicos. É perfeitamente satisfatório para aplicações de automação de campo e CLP.

Como contém funções Wi-Fi e BLE integradas no chip, e também inclui um módulo Celular 4G LTE, o EdgeBox-ESP-100 pode ser utilizado para estabelecer um gateway industrial, permitindo que o CLP original se conecte à rede ou à nuvem.

Esta caixa portátil vem com hardware robusto, um design elétrico e um gabinete de liga de alumínio, pelo qual mantém sua função em uma ampla faixa de temperatura e fornece alta proteção contra surtos e curto-circuito, para diversos métodos de implantação com base no seu negócio.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-ESP-100-p-5490.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Recursos

> ⚠️ **Aviso Importante: Disponibilidade da Função de Programação/Depuração USB**
>
> - A **função de Programação/Depuração USB está disponível apenas** na **versão mais recente** do **EdgeBox-ESP-100**.
> - A **versão anterior** suporta apenas **alimentação via porta USB-A** e **não suporta programação ou depuração**.

---

> ❗**Aviso: Não Conecte a Porta USB-A das Versões Antigas a um PC**
>
> - Conectar a porta USB-A da **versão antiga** a uma porta USB de PC pode resultar em **comportamento inadequado**.
> - Use apenas a **nova versão** se você planeja programar ou depurar o dispositivo via USB.

---

> **🔍 Como Identificar a Nova Versão**
>
> Verifique o rótulo do **Número de Série (SN)** no gabinete do dispositivo:
>
> **SNs da Versão Antiga**:
>
> - Todos os números de série com `2437` ou **anteriores**
> - Exemplo: `102991735243700001`, `102991735243700093`
> - `2437` = produzido na **Semana 37 de 2024**
>
> **SNs da Nova Versão**:
>
> - Todos os números de série com `2438` ou **posteriores**
> - Exemplo: `102991735243800001`, `102991735243800093`
> - `2438` = produzido a partir da **Semana 38 de 2024 em diante**

- Suporte a Multi-Fieldbus: CAN, RS485, Ethernet
- Capacidade Multiwireless: WiFi integrado no chip, conectividade BLE; módulo Celular 4G LTE embutido
- Design de Hardware Confiável: Estrutura robusta, com redução de manutenção
- Design Elétrico Confiável: Alta isolação, alta proteção contra surtos e curto-circuito
- Suporte a programas compatíveis com IEC 61131-3 (em desenvolvimento)
- Programável com ESP-IDF, Arduino

## Comparação de especificações

<div class="table-center">

<table data-style="height: 1345px;">
  <tbody>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p><strong>Parâmetros</strong></p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p><strong>Detalhes</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 629px;" colSpan={2} style={{height: 46, width: 629}}>
        <p><strong>Básico</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>CPU</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>ESP32S3</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>Memória</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>512KB + 8MB RAM</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>Armazenamento</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>16MB Flash</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 629px;" colSpan={2} style={{height: 46, width: 629}}>
        <p><strong>Sem fio</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>WiFi</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>2,4 GHz integrado no chip</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>Bluetooth</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>Bluetooth 5.0 integrado no chip, BLE</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>Celular</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>4G - Módulo SIMCom LTE Cat 1 A7670G</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>LoRa</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>Suportado*</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 629px;" colSpan={2} style={{height: 46, width: 629}}>
        <p><strong>Interface</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>Ethernet</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>100M RJ45 *1</p>
      </td>
    </tr]
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>USB</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>USB2.0 A*1</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>CAN BUS</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>CAN BUS *1 (Isolado)</p>
      </td>
    </tr>
    <tr data-style="height: 39px;" style={{height: 39}}>
      <td data-style="height: 39px; width: 132px;" style={{height: 39, width: 132}}>
        <p>Serial RS</p>
      </td>
      <td data-style="height: 39px; width: 491px;" style={{height: 39, width: 491}}>
        <p>RS485 *1 (Isolado)</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 92px; width: 132px;" rowSpan={2} style={{height: 92, width: 132}}>
        <p>Entrada Digital</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>4 (Isoladas) on-board</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <div>
          <div className="document">
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">Tensão de Entrada CC - 24V</p>
          </div>
        </div>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 92px; width: 132px;" rowSpan={2} style={{height: 92, width: 132}}>
        <p>Saída Digital</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>6 (isoladas)</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>Tensão Recomendada - 24V</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 92px; width: 132px;" rowSpan={2} style={{height: 92, width: 132}}>
        <p>Entrada Analógica</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>4 (Isoladas)</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <div>
          <div className="document">
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">Entrada: 0 ~ 20 mA padrão, 0-10V opcional</p>
          </div>
        </div>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 92px; width: 132px;" rowSpan={2} style={{height: 92, width: 132}}>
        <p>Saída Analógica</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>2 (Isolada)</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>Saída: 0 ~ 5 V</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>Fonte de Alimentação</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>10.8 ~ 36 V</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 629px;" colSpan={2} style={{height: 46, width: 629}}>
        <p><strong>Recursos extras</strong></p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>RTC</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>RTC</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>Chip de Criptografia</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>Atecc608a(opcional)</p>
      </td>
    </tr>
    <tr data-style="height: 64px;" style={{height: 64}}>
      <td data-style="height: 64px; width: 132px;" style={{height: 64, width: 132}}>
        <p>Temperatura de operação</p>
      </td>
      <td data-style="height: 64px; width: 491px;" style={{height: 64, width: 491}}>
        <p>-20 a +60 °C</p>
      </td>
    </tr>
    <tr data-style="height: 46px;" style={{height: 46}}>
      <td data-style="height: 46px; width: 132px;" style={{height: 46, width: 132}}>
        <p>Certificação</p>
      </td>
      <td data-style="height: 46px; width: 491px;" style={{height: 46, width: 491}}>
        <p>RoHS, CE, FCC, UKCA</p>
      </td>
    </tr>
    <tr>
      <td data-style="width: 132px;" style={{width: 132}}>
        <p>Garantia</p>
      </td>
      <td data-style="width: 491px;" style={{width: 491}}>
        <p>2 Anos</p>
      </td>
    </tr>
  </tbody>
</table>
</div>

## Visão geral de hardware

### Visão frontal

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/edge_box_esp/font-port.png" /></div>

### Portas laterais

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/edge_box_esp/connector_side.png" /></div>

1. 4 X LEDs
2. Porta Ethernet
3. Porta CAN bus e RS485
4. Conector Phoenix multifunção

#### Indicador LED

<div align="center"><img style={{background: 'rgb(255, 255, 255)', border: '10px solid transparent'}} width={300}src="https://files.seeedstudio.com/wiki/edge_box_esp/LED.png" /></div>

<div class="table-center">

| Nome do LED | Sinal        | Descrição            |
|  :---:   |  :---:        |    :---:               |
|   PWR    | Status de energia  |                        |
| Celular | 4G/LTE        |                        |
|   ACT    | Status de TX Serial | Multiplexado com U0TXD |
|   ERR    | Status de RX Serial | Multiplexado com U0RXD |

</div>

#### Porta Ethernet

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/eth.png" alt="pir" width={300} height="auto" /></div>

<div class="table-center">

| PIN#          |  Sinal      | Descrição                               |
|  :---:        |  :---:       |    :---:                                  |
|      1        |      TXP     |                                           |
|      2        |      TXN     |                                           |
|      3        |      RXP     |                                           |
|      4        |      N.C.    |                                           |
|      5        |      N.C.    |                                           |
|      6        |      RXN     |                                           |
|      7        |      N.C.    |                                           |
|      8        |      N.C.    |                                           |
|   LED Amarelo  |    ACTIVE    |  Ativo quando dados TX e RX passam        |
|   LED Verde   |     LINK     |          Ativo quando LINK UP             |

</div>

#### Porta CAN bus e RS485

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/eth.png" alt="pir" width={300} height="auto" /></div>

<div class="table-center">

| PIN#          |  Sinal      | Descrição                               |
|  :---:        |  :---:       |    :---:                                  |
|      1        |      N.C.     |                                           |
|      2        |      N.C.     |                                           |
|      3        |      N.C.     |                                           |
|      4        |      CAN_H    |                                           |
|      5        |      CAN_L    |                                           |
|      6        |      N.C.     |                                           |
|      7        |      RS485_A  |                                           |
|      8        |      RS485_B  |                                           |
|   LED Amarelo  |    ACTIVE     |  Ativo quando dados TX e RX do CAN BUS passam  |
|   LED Verde   |     LINK      |  Ativo quando dados TX e RX do RS485 passam    |

</div>

:::note

    1. O resistor de terminação de 120 Ohms para RS485 já foi instalado internamente.
    2. O resistor de terminação de 120 Ohms para CAN BUS já foi instalado internamente.

:::

#### Conector Phoenix multifunção

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/multi-func-connector.png" alt="pir" width={500} height="auto" /></div>

<div class="table-center">

| Função  | Nº do pino  |  Nº do pino | Função  |
|:---:      | :---: | :---: | :---: |
|  S/S      | 2  | 1  | DO_24V  |
|  DI0      | 4  | 3  | DO_0V  |
|  DI1      | 6  | 5  | DO0  |
|  DI2      | 8  | 7  | DO1  |
|  DI3      | 10  | 9 | DO2  |
|  AGND     | 12 | 11 | DO3  |
|  AI0      | 14 | 13 | DO4  |
|  AI1      | 16 | 15 | DO5  |
|  AI2      | 18 | 17 | AO0  |
|  AI3      | 20 | 29 | AO1  |
|  AGND     | 22 | 21 | AGND  |
|  GND      | 24 | 23 | +24V  |

</div>

:::note
    1. Cabos de 24AWG a 16AWG são recomendados
    2. GND e AGND são isolados
    3. Todos os sinais AGND são conectados internamente
    4. A tensão CC para entrada é 24V(+- 10%)
    5. A tensão CC para saída deve ser 24V(+- 10%). a capacidade de corrente é 1A.
:::

### Portas SUPERIORES

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/connector_top.png" alt="pir" width={500} height="auto" /></div>

1. Porta de antena Wi-Fi (SMA Fêmea)
2. CARTÃO SIM
3. Reset
4. PORTA USB (somente saída de energia 5V)
5. Porta de antena 4G/LTE (SMA Fêmea)

### Multiplexação GPIO

<div class="table-center">
<table className="tg">
  <thead>
    <tr>
      <th className="tg-3gxb"><span style={{fontWeight: 'var(--ifm-table-head-font-weight)'}}>Nome do pino</span></th>
      <th className="tg-3gxb"><span style={{fontWeight: 'var(--ifm-table-head-font-weight)'}}>ESP32S3 IO</span></th>
      <th className="tg-3gxb"><span style={{fontWeight: 'var(--ifm-table-head-font-weight)'}}>Tipo</span></th>
      <th className="tg-3gxb"><span style={{fontWeight: 'var(--ifm-table-head-font-weight)'}}>Função</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-lhaa">DO0</td>
      <td className="tg-lhaa">IO40</td>
      <td className="tg-lhaa">Saída Digital</td>
      <td className="tg-lhaa">Saída Digital 0</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO1</td>
      <td className="tg-lhaa">IO39</td>
      <td className="tg-lhaa">Saída Digital</td>
      <td className="tg-lhaa">Saída Digital 1</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO2</td>
      <td className="tg-lhaa">IO38</td>
      <td className="tg-lhaa">Saída Digital</td>
      <td className="tg-lhaa">Saída Digital 2</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO3</td>
      <td className="tg-lhaa">IO37</td>
      <td className="tg-lhaa">Saída Digital</td>
      <td className="tg-lhaa">Saída Digital 3</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO4</td>
      <td className="tg-lhaa">IO36</td>
      <td className="tg-lhaa">Saída Digital</td>
      <td className="tg-lhaa">Saída Digital 4</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DO5</td>
      <td className="tg-lhaa">IO35</td>
      <td className="tg-lhaa">Saída Digital</td>
      <td className="tg-lhaa">Saída Digital 5</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DI0</td>
      <td className="tg-lhaa">IO4</td>
      <td className="tg-lhaa">Entrada Digital</td>
      <td className="tg-lhaa">Entrada Digital 0</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DI1</td>
      <td className="tg-lhaa">IO5</td>
      <td className="tg-lhaa">Entrada Digital</td>
      <td className="tg-lhaa">Entrada Digital 1</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DI2</td>
      <td className="tg-lhaa">IO6</td>
      <td className="tg-lhaa">Entrada Digital</td>
      <td className="tg-lhaa">Entrada Digital 2</td>
    </tr>
    <tr>
      <td className="tg-lhaa">DI3</td>
      <td className="tg-lhaa">IO7</td>
      <td className="tg-lhaa">Entrada Digital</td>
      <td className="tg-lhaa">Entrada Digital 3</td>
    </tr>
    <tr>
      <td className="tg-lhaa" rowSpan={2}>AO0</td>
      <td className="tg-lhaa">IO42</td>
      <td className="tg-lhaa">Saída Analógica</td>
      <td className="tg-lhaa">Saída Analógica 0</td>
    </tr>
    <tr>
      <td className="tg-lhaa">IO41</td>
      <td className="tg-lhaa">Saída analógica</td>
      <td className="tg-lhaa">Saída analógica 1</td>
    </tr>
    <tr>
      <td className="tg-rzif" rowSpan={3}>RS485 </td>
      <td className="tg-rzif">IO17</td>
      <td className="tg-rzif">U1TXD</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">IO18</td>
      <td className="tg-rzif">U1RXD</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">IO8</td>
      <td className="tg-rzif">RS485_RTS</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif" rowSpan={4}>4G/LTE</td>
      <td className="tg-rzif">IO48</td>
      <td className="tg-rzif">U2TXD</td>
      <td className="tg-rzif" rowSpan={4}>WWAN</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO47</td>
      <td className="tg-rzif">U2RXD</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO21</td>
      <td className="tg-rzif">PWR_KEY</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO16</td>
      <td className="tg-rzif">PWR_EN</td>
    </tr>
    <tr>
      <td className="tg-rzif" rowSpan={6}>Ethernet </td>
      <td className="tg-rzif">IO10</td>
      <td className="tg-rzif">FSPI_CS0</td>
      <td className="tg-rzif" rowSpan={6}>Conectado ao W5500</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO11</td>
      <td className="tg-rzif">FSPI_MISO</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO12</td>
      <td className="tg-rzif">FSPI_MOSI</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO13</td>
      <td className="tg-rzif">FSPI_SCLK</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO14</td>
      <td className="tg-rzif">INT #</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO15</td>
      <td className="tg-rzif">RST #</td>
    </tr>
    <tr>
      <td className="tg-rzif">CAN_TXD</td>
      <td className="tg-rzif">IO1</td>
      <td className="tg-rzif">TX do barramento CAN</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">CAN_RXD</td>
      <td className="tg-rzif">IO2</td>
      <td className="tg-rzif">RX do barramento CAN</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">TXD0/LED_ACT#</td>
      <td className="tg-rzif">U0TXD</td>
      <td className="tg-rzif" />
      <td className="tg-rzif">Programação/Depuração e driver de LED</td>
    </tr>
    <tr>
      <td className="tg-rzif">RXD0/LED_ERR#</td>
      <td className="tg-rzif">U0RXD</td>
      <td className="tg-rzif" />
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif">Beep</td>
      <td className="tg-rzif">IO45</td>
      <td className="tg-rzif">Beep</td>
      <td className="tg-rzif">Ativo em nível alto habilita o buzzer</td>
    </tr>
    <tr>
      <td className="tg-rzif">Reset</td>
      <td className="tg-rzif">IO0</td>
      <td className="tg-rzif">Botão de reset</td>
      <td className="tg-rzif" />
    </tr>
    <tr>
      <td className="tg-rzif" rowSpan={3}>I2C </td>
      <td className="tg-rzif">IO19</td>
      <td className="tg-rzif" />
      <td className="tg-rzif">I2C_SCL</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO20</td>
      <td className="tg-rzif" />
      <td className="tg-rzif">I2C_SDA</td>
    </tr>
    <tr>
      <td className="tg-rzif">IO9</td>
      <td className="tg-rzif" />
      <td className="tg-rzif">Alarme ou despertar a partir do PCF8563</td>
    </tr>
  </tbody>
</table>
</div>

#### Porta de Programação/Depuração

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/programming_port.png" alt="pir" width={300} height="auto" /></div>

<div class="table-center">

| Porta de depuração | ESP32 IO | Outra função |
| :---:      | :---:    | :---:          |
| RXD        | RXD0     | LED_ACT#       |
| TXD        | TXD0     | LED_ERR#       |
| GND        | GND      |                |
| GPIO0      | IO0      | Botão RESET    |

</div>

:::note

O GIPIO0 também está conectado ao botão de Reset. E o RXD, TXD da UART0 são usados no modo de download.
Isso permite que os usuários desenvolvam o EdgeBox-ESP-100 em bare metal.

:::

### Dispositivos embutidos

#### Mapa de pinos I2C e dispositivos I2C embutidos

- Mapa de pinos I2C:

<div class="table-center">

| Pino I2C | ESP32 IO |
|  :---:  |  :---:   |  
| I2C_SDA |   IO20   |
| I2C_SCL |   IO19   |
| I2C_INT |   IO9    |

</div>

- Dispositivos I2C embutidos e endereço:

<div class="table-center">

|  Dispositivo         | Endereço | Função        |
|  :---:               | :---:   | :---:         |
|  FM24CL64B           |  0x50   | Memória de retenção |
|  PCF8563             |  0x51   |   RTC         |
|  Atecc608a           |  0x68   | Dispositivo criptográfico |
|  SGM58031            |  0x48   |   ADC         |

</div>

#### 4G LTE

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/4glte.png" alt="pir" width={300} height="auto" /></div>

<div class="table-center">

| Módulo 4G A7670G | ESP32 IO| Função                                |
|  :---:            |  :---:  |  :---:                                  |
|  PWR_EN           |  IO16   | Habilitar energia para o A7670G através do SY8089A |
|  PWRKEY           |  IO21   | PWR_KEY                                 |
|  RXD              |  IO48   | U2TXD                                   |
|  TXD              |  IO47   | U2RXD                                   |

</div>

#### Entrada analógica (SGM58031)

<div class="table-center">

| SGM58031 (endereço I2C 0x48) |  IO            |
|   :---:                      |   :---:        |
| CH1+                         |  AI0           |
| CH2+                         |  AI1           |
| CH3+                         |  AI2           |
| CH4+                         |  AI3           |
| SDA                          |  IO20/I2C_SDA  |
| SCL                          |  IO19/I2C_SCL  |

</div>

:::note

  O tipo de entrada padrão é 4-20ma.
  O tipo de entrada 0-10V é opcional.

:::

#### Saída analógica

 Os canais duplos de saída analógica são formados pela tecnologia PWM e LPF.

<div class="table-center">

| Saída analógica | ESP32 IO |
|  :---:        |  :---:   |
|  AO0          |   IO42   |
|  AO1          |   IO41   |

</div>

## Especificações elétricas

### Como alimentar

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/Edgebox-esp-how-to-power.png" alt="pir" width={500} height="auto" /></div>

### Consumo de energia

 O consumo de energia do EdgeBox-ESP-100 depende fortemente da aplicação, do modo de operação e dos dispositivos periféricos conectados. Os valores fornecidos devem ser vistos como valores aproximados.

:::note

Na condição de alimentação de 24V

:::

<div class="table-center">

| Modo de operação | Corrente(ma) |
| :---:             | :---:       |
| Inativo           | 81          |

</div>

## Introdução à programação com Arduino

### Requisitos

#### Requisitos de hardware

Você precisa preparar o seguinte:

- 1 x [EdgeBox-ESP-100](https://www.seeedstudio.com/EdgeBox-ESP-100-p-5490.html)
- 1 x PC
- 1 x Adaptador USB para Serial
- 1 x Chave de fenda Phillips de cabeça PH2 (Opcional)
- 1 x Chave Allen H2.5
- 1 x Fonte de alimentação 12V3A (requisito mínimo de potência de entrada)

#### Requisitos de software

- [Arduino IDE](https://www.arduino.cc/en/software)

### Preparação

#### Hardware

- PASSO 1: Remova a case e localize a porta de Programação

- PASSO 1-1: Localize e remova os dois parafusos pretos allen de cabeça sextavada

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/remove_case.png" alt="pir" width={500} height="auto" /></div>

- PASSO 1-2: Em seguida, remova os 3 parafusos M.3 PH2 de cabeça Phillips.

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/remove_PH.png" alt="pir" width={500} height="auto" /></div>

- PASSO 1-3: Agora você deve conseguir localizar a porta de Programação.

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/programming_port.png" alt="pir" width={300} height="auto" /></div>

- PASSO 2: conecte o USB-para-Serial ao Edgebox-ESP-100

A conexão deve seguir como abaixo

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/programming.png" alt="pir" width={800} height="auto" /></div>

:::caution

Certifique-se de que a conexão está correta e que o Edgebox-ESP-100 esteja desligado durante a conexão.

:::

<div class="table-center">
<table className="tg">
  <thead>
    <tr>
      <th className="tg-wp8o">Edgebox-ESP-100</th>
      <th className="tg-c3ow">USB-Para-Serial</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-wp8o">RXD</td>
      <td className="tg-c3ow">TX</td>
    </tr>
    <tr>
      <td className="tg-wp8o">TXD</td>
      <td className="tg-c3ow">RX</td>
    </tr>
    <tr>
      <td className="tg-wp8o">GND</td>
      <td className="tg-c3ow">GND</td>
    </tr>
    <tr>
      <td className="tg-c3ow" rowSpan={2}>GPIO0</td>
      <td className="tg-c3ow">GND (modo de download de programa) <br /></td>
    </tr>
    <tr>
      <td className="tg-c3ow">Desconectado quando usado como depurador serial<br /></td>
    </tr>
  </tbody>
</table>
</div>

#### Software

- PASSO 1: Baixe o Ardunio IDE 2.0.X do [site oficial do Arduino](https://www.arduino.cc/en/software) e então instale-o.

- PASSO 2: Encontre e instale o ESP32 no gerenciador de placas.

- PASSO 2-1: Abra o Arduino IDE e clique na `Board Tab` (segunda aba) para abrir o `Board Manager`

- PASSO 2-2: Na barra de busca, digite **`ESP32`** e pressione enter, agora você deverá ver a biblioteca de placas esp32 listada.

- PASSO 2-3: Selecione a versão mais recente no menu suspenso de versão, por exemplo, no momento em que este wiki foi escrito a versão mais recente é **`version 2.0.7`**

:::note

Por favor, instale a versão >= **`2.0.7`** da biblioteca de placas esp32.

:::

- PASSO 2-4: Clique em `Install`

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/download_board.png" alt="pir" width="auto" height="auto" /></div>

### Edgebox-ESP-100 controlando solenóide com Arduino

#### Diagrama de fiação

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/connection.png" alt="pir" width={400} height="auto" /></div>

#### Código

Aqui está o código para percorrer todos os solenoides. Copie o código para o editor de código da Arduino IDE

```c
void setup() {
  //setup DO pins to output mode
  pinMode(DO0, OUTPUT);
  pinMode(DO1, OUTPUT);
  pinMode(DO2, OUTPUT);
  pinMode(DO3, OUTPUT);
  //setup DO pins default to Logic LOW
  digitalWrite(DO0, LOW);
  digitalWrite(DO1, LOW);
  digitalWrite(DO2, LOW);
  digitalWrite(DO3, LOW);
}

void loop() {
  //Switch on DO0 and Swith off DO3
  digitalWrite(DO0, HIGH);
  digitalWrite(DO3, LOW);
  delay(2000);

  //Switch on DO1 and Swith off DO0
  digitalWrite(DO0, LOW);
  digitalWrite(DO1, HIGH);
  delay(2000);

  //Switch on DO2 and Swith off DO1
  digitalWrite(DO1, LOW);
  digitalWrite(DO2, HIGH);
  delay(2000);

  //Switch on DO3 and Swith off DO2
  digitalWrite(DO2, LOW);
  digitalWrite(DO3, HIGH);
  delay(2000);
}

```

#### Enviar código

- PASSO 1: Agora conecte o adaptador USB-para-Serial ao seu PC e a conexão da Edgebox-ESP-100 com o conversor USB-para-Serial deve ser configurada para o modo de download de programa.

:::note

Não ligue a Edgebox-ESP-100 até o próximo passo

:::

- PASSO 2: Ligue a Edgebox-ESP-100

- PASSO 3: Selecione Board e PORTS

- PASSO 3-1: Abra a janela de seleção de Board e Port

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/select_boardandport.png" alt="pir" width="auto" height="auto" /></div>

- PASSO 3: Selecione Boards e PORTS na `Board and Port selection window`; neste caso, podemos colocar edgebox na barra de pesquisa e selecionar Edgebox-ESP-100 como a placa, e selecionar a porta de acordo com o seu adaptador USB-para-Serial. Em seguida, pressione **`OK`** para confirmar.

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/selectboard.png" alt="pir" width="auto" height="auto" /></div>

- PASSO 4: Pressione o botão de envio de código para enviar o código.

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/uploadcode.png" alt="pir" width="auto" height="auto" /></div>

- PASSO 5: reinicie a alimentação para monitorar a Edgebox-ESP-100 controlando o solenoide.

<div align="center"><img src="https://files.seeedstudio.com/wiki/edge_box_esp/demo.gif" alt="pir" width="auto" height="auto" /></div>

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
