---
description: Primeiros passos com o Semtech LR2021 LoRa Plus™ Evaluation Kit.
title: Semtech LR2021 LoRa Plus™ Evaluation Kit
keywords:
  - Semtech LR2021
  - XIAO
  - nRF54L15
  - docusaurus
image: https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/Semtech-LR2021-LoRa-Plus-Evaluation-Kit.webp
slug: /semtech_lr2021_evk_getting_started
last_update:
  date: 12/30/2025
  author: David Du
createdAt: '2026-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/semtech_lr2021_evk_getting_started/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/2-100039980-LR2021-LoRa-Plus-Evaluation-kit-868Mhz-EU-V2.0.jpg" style={{width:600, height:'auto'}}/></div>

## Recursos

O **Semtech LR2021 LoRa Plus Evaluation Kit** apresenta um design modular que integra perfeitamente a poderosa **Seeed Studio XIAO nRF54L15 Core Board** com a **LoRa Plus Expansion Board**. Esta plataforma de hardware compacta e robusta é especificamente projetada para avaliar a comunicação solo‑para‑satélite em cenários completos. Sua compatibilidade com diversos protocolos IoT amplamente utilizados garante que atenda aos requisitos de desenvolvimento em variados cenários de aplicação.

### Transceptor Semtech LR2021

- **Conectividade universal (suporte multifaixa):**
    - **Sub-GHz LoRa/FSK:** Perfeitamente compatível com redes LoRaWAN tradicionais de 470/868/915 MHz, mantendo capacidades extremas de transmissão de longo alcance e penetração.
    - **LoRa de 2,4GHz:** Suporta modulação LoRa na banda ISM global. Isso resolve a fragmentação regulatória entre diferentes países (possibilitando "One SKU Globally"), ao mesmo tempo em que oferece taxas de dados mais altas do que Sub-GHz.
    - **Suporte a satélite em banda S:** Uma grande atualização. O LR2021 conta com suporte nativo para a faixa de **1,9GHz - 2,5GHz**, possibilitando comunicação direta com satélites de órbita baixa (LEO) para preencher lacunas de cobertura em oceanos, desertos e áreas remotas onde as redes terrestres não alcançam.

- **Suporte aprimorado a LR-FHSS:** 
O chip inclui suporte em hardware para **Long Range - Frequency Hopping Spread Spectrum (LR-FHSS)**. Essa tecnologia de modulação aumenta significativamente a capacidade da rede e a imunidade a interferências, servindo como tecnologia crítica para **IoT direto‑para‑satélite**.

- **Suporte a múltiplas modulações:**
LoRa, LR-FHSS, FLRC, FSK/GFSK, OQPSK, OOK, BLE 5.0 PHY

- **Compatível com múltiplos protocolos:**
LoRaWAN(Sub-GHz, 2.4 GHz), Amazon Sidewalk, Wi-SUN, Wireless M-Bus, Z-Wave, BLE, IEEE 802.15.4 (Thread, Zigbee)

- **Arquitetura de ultrabaixo consumo:** 
Mesmo integrando um front-end RF multifaixa, o LR2021 mantém os padrões de baixo consumo líderes da indústria da Semtech: 
    - 105mA @ +22dBm de potência de transmissão
    - 5,7mA de corrente de recepção
    - 470nA de corrente em modo sleep

Tornando‑o ideal para dispositivos de rastreamento de ativos alimentados por bateria e de longo ciclo de vida.

- **Detecção de atividade em canal (CAD) aprimorada:**
O Fast CAD do LR2021 emprega um limiar adaptativo inteligente e um mecanismo de término antecipado, que reduz significativamente o consumo de energia e o tempo necessários para detecção de canal ocioso.


### Recursos da LoRa Plus Expansion Board

#### Design com interface de antena dupla
- **Porta LF (SMA):** Dedicada às bandas Sub-GHz (150MHz - 960MHz).
- **Porta HF (SMA):** Dedicada às frequências ISM de 2,4GHz e satélite em banda S.

#### Núcleo host: XIAO nRF54L15
- **Silício de próxima geração:** 
Baseado na mais recente **série nRF54** (nRF54L15) da Nordic Semiconductor.
- **Processamento de alto desempenho:** 
Possui um núcleo ARM Cortex-M33 operando a até **128 MHz**, fornecendo ampla capacidade de computação para pilhas de protocolo LoRaWAN complexas e algoritmos de Edge AI.
- **Eficiência de próxima geração:** 
Em comparação com a série nRF52, o nRF54 proporciona um salto em eficiência energética. Quando combinado com o LR2021, permite a construção de produtos terminais com vida útil de bateria excepcional.
- **Fator de forma compacto:** 
Utiliza o clássico design XIAO com furos em formato de selo, facilitando a integração em gabinetes de protótipos menores.

## Especificação

<table class="tg">
<thead>
<tr>
<th class="tg-6cwf">Parâmetros</th><th class="tg-6cwf">Especificações</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">Dimensão</td>
<td class="tg-g9rn">Placa de expansão: 65(L)x73(C)x27(A)mm  Pacote: 200x130x50mm</td>
</tr>
<tr>
<td class="tg-g9rn">Tensão - Alimentação</td>
<td class="tg-g9rn">5V (USB Tipo C)</td>
</tr>
<tr>
<td class="tg-g9rn">Tensão - Saída</td>
<td class="tg-g9rn">3,3V / 5V</td>
</tr>
<tr>
<td class="tg-g9rn">Corrente máxima de operação (Transmissor)</td>
<td class="tg-g9rn">Sub-GHz: 105mA @ +22dBm<br />2,4 GHz: 27mA @ +14dBm</td>
</tr>
<tr>
<td class="tg-g9rn">Corrente máxima de operação (Receptor)</td>
<td class="tg-g9rn">LoRa SF7 @ 125KHz: 5,7mA<br />FLRC: 10,9mA</td>
</tr>
<tr>
<td class="tg-g9rn">Plano de frequência</td>
<td class="tg-g9rn">EU868 / US915 / CN490</td>
</tr>
<tr>
<td class="tg-g9rn">Potência de saída</td>
<td class="tg-g9rn">Sub-GHz: +22dBm a -10dBm<br />2,4 GHz: +12dBm</td>
</tr>
<tr>
<td class="tg-g9rn">Sensibilidade de recepção</td>
<td class="tg-g9rn">LoRa SF12 @ 125kHz: -141,5dBm<br />FLRC @ 260kbps: -111dBm<br />BLE @ 2Mbps: -97dBm</td>
</tr>
<tr>
<td class="tg-g9rn">Interfaces</td>
<td class="tg-g9rn">USB Tipo C / Grovex3(IICx2 / UARTx1) / SMA-Kx2 </td>
</tr>
<tr>
<td class="tg-g9rn">Modulação</td>
<td class="tg-g9rn">LoRa, (G)FSK, LR-FHSS, FLRC, OQPSK, OOK, BLE 5.0 PHY</td>
</tr>
<tr>
<td class="tg-g9rn">Temperatura de trabalho</td>
<td class="tg-g9rn">-40℃ ~ 85℃</td>
</tr>
</tbody>
</table>

<br />

## Visão geral de hardware



### Diagrama



### Pinout

**Placa de expansão:**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/100039980-LR2021-LoRa-Plus-Evaluation-kit-868Mhz-EU-V2.0-Pinout-Front.jpg" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/100039980-LR2021-LoRa-Plus-Evaluation-kit-868Mhz-EU-V2.0-Pinout-Back.jpg" style={{width:600, height:'auto'}}/></div>

<br />

**XIAO nRF54L15:**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nr_definition.png" style={{width:600, height:'auto'}}/></div>

<br />

**Mapeamento de pinout:**

<table class="tg">
<thead>
<tr>
<th class="tg-6cwf">Definição de pino XIAO</th><th class="tg-6cwf">Definição de pino nRF54L15</th><th class="tg-6cwf">Função do pino</th><th class="tg-6cwf">Índice DeviceTree</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">A0 / D0</td>
<td class="tg-g9rn">P1.04</td>
<td class="tg-g9rn">IO digital</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">A1 / D1</td>
<td class="tg-g9rn">P1.05</td>
<td class="tg-g9rn">IO digital</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">A2 / D2</td>
<td class="tg-g9rn">P1.06</td>
<td class="tg-g9rn">IO digital</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">A3 / D3</td>
<td class="tg-g9rn">P1.07</td>
<td class="tg-g9rn">IO digital</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">SDA0 / D4</td>
<td class="tg-g9rn">P1.10</td>
<td class="tg-g9rn">I2C</td>
<td class="tg-g9rn" rowspan="2">i2c22</td>
</tr>
<tr>
<td class="tg-g9rn">SCL0 / D5</td>
<td class="tg-g9rn">P1.11</td>
<td class="tg-g9rn">I2C</td>
</tr>
<tr>
<td class="tg-g9rn">TX / D6</td>
<td class="tg-g9rn">P2.08</td>
<td class="tg-g9rn">UART</td>
<td class="tg-g9rn" rowspan="2">uart21</td>
</tr>
<tr>
<td class="tg-g9rn">RX / D7</td>
<td class="tg-g9rn">P2.07</td>
<td class="tg-g9rn">UART</td>
</tr>
<tr>
<td class="tg-g9rn">SCK / D8</td>
<td class="tg-g9rn">P2.01</td>
<td class="tg-g9rn">SPI</td>
<td class="tg-g9rn" rowspan="3">spi00</td>
</tr>
<tr>
<td class="tg-g9rn">MISO / D9</td>
<td class="tg-g9rn">P2.04</td>
<td class="tg-g9rn">SPI</td>
</tr>
<tr>
<td class="tg-g9rn">MOSI / D10</td>
<td class="tg-g9rn">P2.02</td>
<td class="tg-g9rn">SPI</td>
</tr>
<tr>
<td class="tg-g9rn">SCL1 / D11</td>
<td class="tg-g9rn">P0.03</td>
<td class="tg-g9rn">I2C</td>
<td class="tg-g9rn" rowspan="2">i2c30</td>
</tr>
<tr>
<td class="tg-g9rn">SDA1 / D12</td>
<td class="tg-g9rn">P0.04</td>
<td class="tg-g9rn">I2C</td>
</tr>
<tr>
<td class="tg-g9rn">D13</td>
<td class="tg-g9rn">P2.10</td>
<td class="tg-g9rn">IO digital</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">D14</td>
<td class="tg-g9rn">P2.09</td>
<td class="tg-g9rn">IO digital</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">D15</td>
<td class="tg-g9rn">P2.06</td>
<td class="tg-g9rn">IO digital</td>
<td class="tg-g9rn"></td>
</tr>
</tbody>
</table>



<br />

## Primeiros passos

### 1. Visão geral
Este guia fornece instruções passo a passo para configurar um ambiente de desenvolvimento Zephyr RTOS em linha de comando, integrado com o módulo `usp_zephyr` da Semtech para uma avaliação rápida usando os exemplos fornecidos com a **XIAO-nRF54L15** on-board. Saiba mais sobre o LoRa [USP™ (Unified Software Platform)](https://www.semtech.com/products/wireless-rf/unified-software-platform) da Semtech. Você também pode baixar o código-fonte e encontrar informações mais detalhadas no repositório **usp_zephyr** da Semtech:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Lora-net/usp_zephyr" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Baixar do GitHub</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

O projeto `usp_zephyr` segue uma estrutura híbrida, combinando:

- **Estrutura de módulo de workspace West:** O suporte principal de hardware (placas, drivers, HAL) é integrado diretamente ao sistema de build do Zephyr como um módulo padrão.

- **Estrutura em camadas:** Bibliotecas e exemplos da camada de aplicação residem separadamente no workspace para melhor organização e reutilização.

### 2. Pré-requisitos

Certifique-se de que seu sistema atenda a estes requisitos antes de prosseguir. Saiba [mais](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) sobre como configurar o ambiente de desenvolvimento Zephyr:

- **Sistema Operacional:** 
    - Ubuntu 22.04 LTS (recomendado) ou outra distribuição Linux suportada, Windows (10 e posterior) ou macOS.

- **Dependências principais:**

    - `west` (meta-ferramenta do Zephyr)

    - `ninja`

    - `cmake` (versão 3.20.0 ou superior)

    - Python 3.8 ou superior com `pip`

    - Compilador Devicetree `dtc`


<details>
<summary>Instalar e verificar dependências</summary>

- Para Linux:
```shell
sudo apt install --no-install-recommends git cmake ninja-build gperf \
  ccache dfu-util device-tree-compiler wget python3-dev python3-venv python3-tk \
  xz-utils file make gcc gcc-multilib g++-multilib libsdl2-dev libmagic1
```
Devido à indisponibilidade de `gcc-multilib` e `g++-multilib` em sistemas AArch64 (ARM64), pode ser necessário omití-los da lista de pacotes a serem instalados.

- Para macOS:
Use o `brew` para instalar as dependências necessárias:
```shell
brew install cmake ninja gperf python3 python-tk ccache qemu dtc libmagic wget openocd
```

- Para Windows:
Aqui usamos o gerenciador de pacotes do Windows pré-instalado, o `winget`. Se isso não for uma opção, você também pode instalar as dependências a partir de seus respectivos sites e adicionar suas variáveis de ambiente ao `PATH`.

Use o `winget` para instalar as dependências necessárias:
```shell
winget install Kitware.CMake Ninja-build.Ninja oss-winget.gperf Python.Python.3.12 Git.Git oss-winget.dtc wget 7zip.7zip
```

<br />

Você pode verificar as versões das principais dependências instaladas em seu sistema por meio de:

```shell
cmake --version
```

```shell
python3 --version
```

```shell
ninja --version
```

</details>


### 3. Configurar o workspace Zephyr (Workspace independente)

Crie um workspace Zephyr básico:
```shell
# Create and navigate into your workspace directory
mkdir ~/zephyr_workspace && cd ~/zephyr_workspace
```

:::note
Para evitar conflitos de ambiente Python, recomendamos fortemente criar e usar um ambiente virtual para desenvolvimento e testes. Lembre-se de ativar o ambiente virtual toda vez que começar a trabalhar.
:::


<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Linux" label="Linux">

Crie um novo ambiente virtual:
```shell
python3 -m venv ~/zephyr_workspace/.venv
```

Ative o ambiente virtual:
```shell
source ~/zephyr_workspace/.venv/bin/activate
```

Uma vez ativado, seu shell será prefixado com `(.venv)`. O ambiente virtual pode ser desativado a qualquer momento executando `deactivate`.

```shell
# 1. Install west
pip3 install west

# 2. Navigate into your workspace directory
cd ~/zephyr_workspace

# 3. Clone the usp_zephyr repository from GitHub
git clone https://github.com/Lora-net/usp_zephyr.git

# 4. Initialize the workspace with the loacal manifest repository
west init -l usp_zephyr

# 5. Update/fetch all Zephyr modules and dependencies
west update

# 6. Install Python dependencies
west packages pip --install
```

Em seguida, precisamos instalar o Zephyr Software Development Kit (SDK), que contém toolchains para todas as arquiteturas suportadas pelo Zephyr. O SDK inclui um compilador, montador, linker e outros programas necessários para compilar aplicações Zephyr:
```shell
cd ~/zephyr_workspace/zephyr
west sdk install
```

</TabItem>
<TabItem value="macOS" label="macOS">

Crie um novo ambiente virtual:
```shell
python3 -m venv ~/zephyr_workspace/.venv
```

Ative o ambiente virtual:
```shell
source ~/zephyr_workspace/.venv/bin/activate
```

Uma vez ativado, seu shell será prefixado com `(.venv)`. O ambiente virtual pode ser desativado a qualquer momento executando `deactivate`.

```shell
# 1. Install west
pip3 install west

# 2. Navigate into your workspace directory
cd ~/zephyr_workspace

# 3. Clone the usp_zephyr repository from GitHub
git clone https://github.com/Lora-net/usp_zephyr.git

# 4. Initialize the workspace with the loacal manifest repository
west init -l usp_zephyr

# 5. Update/fetch all Zephyr modules and dependencies
west update

# 6. Install Python dependencies
west packages pip --install
```

Em seguida, precisamos instalar o Zephyr Software Development Kit (SDK), que contém toolchains para todas as arquiteturas suportadas pelo Zephyr. O SDK inclui um compilador, montador, linker e outros programas necessários para compilar aplicações Zephyr:
```shell
cd ~/zephyr_workspace/zephyr
west sdk install
```

</TabItem>
<TabItem value="Windows" label="Windows">

Abra um `cmd.exe` como usuário comum e crie um novo ambiente virtual:
```shell
cd %HOMEPATH%
python -m venv zephyr_workspace\.venv
```

Ative o ambiente virtual:
```shell
zephyr_workspace\.venv\Scripts\activate.bat
```

Uma vez ativado, seu shell será prefixado com `(.venv)`. O ambiente virtual pode ser desativado a qualquer momento executando `deactivate`.

```shell
# 1. Install west
pip3 install west

# 2. Navigate into your workspace directory
cd ~/zephyr_workspace

# 3. Clone the usp_zephyr repository from GitHub
git clone https://github.com/Lora-net/usp_zephyr.git

# 4. Initialize the workspace with the loacal manifest repository
west init -l usp_zephyr

# 5. Update/fetch all Zephyr modules and dependencies
west update

# 6. Install Python dependencies
cmd /c scripts\utils\west-packages-pip-install.cmd
```

Em seguida, precisamos instalar o Zephyr [Software Development Kit (SDK)](https://docs.zephyrproject.org/latest/develop/toolchains/zephyr_sdk.html#toolchain-zephyr-sdk), que contém toolchains para todas as arquiteturas suportadas pelo Zephyr. O SDK inclui um compilador, montador, linker e outros programas necessários para compilar aplicações Zephyr:
```shell
cd %HOMEPATH%\zephyr_workspace\zephyr
west sdk install
```

</TabItem>
</Tabs>


<br />

Aguarde enquanto a ferramenta `west` conclui a busca e instalação de todos os módulos e componentes. Quando a instalação estiver concluída, você obterá a seguinte estrutura de diretórios em `zephyr_workspace`:

```shell
zephyr_workspace/
├── bootloader/
├── modules/
├── tools/
├── usp_zephyr/
│       ├── boards/
│       │     ├── seeed/xiao_nrf54l15/
│       │     └── shields/
│       ├── doc/
│       ├── drivers/
│       │     └── usp/
│       │          ├── lr11xx/
│       │          ├── lr20xx/
│       │          └── sx126x/
│       ├── dts/bindings/
│       ├── include/zephyr/
│       ├── modules/
│       │     ├── lora_basics_modem/
│       │     ├── smtc_modem_hal/
│       │     ├── usp/
│       │     └── usp_drivers/
│       ├── samples/
│       │     └── usp/
│       │          ├── lbm/
│       │          ├── rac/
│       │          └── sdk/
│       ├── subsys/
│       └── zephyr/
│             └─ module.yml
└── zephyr
```

<br />

**USP para estrutura do projeto Zephyr:**

<table class="tg">
<thead>
<tr>
<th class="tg-6cwf">Caminho do diretório</th><th class="tg-6cwf">Descrição</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">boards/</td>
<td class="tg-g9rn">**Suporte à placa** Contém definições para plataformas de hardware: <br />- `seeed/xiao_nrf54l15/`: Suporte para a placa Seeed Studio XIAO nRF54L15 <br />- `shields/`: Definições para shields Zephyr (placas de expansão) que são compatíveis com os drivers de rádio LoRa</td>
</tr>
<tr>
<td class="tg-g9rn">drivers/usp/</td>
<td class="tg-g9rn">**Drivers de dispositivo** Camada principal de abstração de hardware para rádios Semtech:<br />- `lr11xx/`,`lr20xx/`,`sx126x/`: Contém a implementação de Radio HAL & BSP para chips transceptores Semtech LoRa específicos.
O usuário não deve modificar esses arquivos.</td>
</tr>
<tr>
<td class="tg-g9rn">dts/bindings/</td>
<td class="tg-g9rn">**Bindings de Devicetree** Contém arquivos YAML que definem como descrever o hardware de rádio LoRa (conexão SPI, pinos de controle) no Devicetree do Zephyr (`.dts`). Isso vincula a descrição de hardware aos drivers.</td>
</tr>
<tr>
<td class="tg-g9rn">include/zephyr/</td>
<td class="tg-g9rn">**Headers de API pública** Expõe as APIs públicas dos drivers (`drivers/usp/lr20xx.h`) para o restante do código de aplicação Zephyr.</td>
</tr>
<tr>
<td class="tg-g9rn">modules/</td>
<td class="tg-g9rn">**Bibliotecas e HALs da Semtech** <br />- `lora_basics_modem/`: Biblioteca de software Semtech LoRa Basics Modem. <br />- `smtc_modem_hal/`: Camada de abstração de hardware (HAL) para o modem. <br />- `usp/` e `usp_drivers/`: Orientam o arquivo de compilação apontando para o componente correspondente nos módulos do Zephyr.</td>
</tr>
<tr>
<td class="tg-g9rn">samples/usp/</td>
<td class="tg-g9rn">**Aplicações de exemplo** Código de exemplo pronto para compilar que demonstra funções-chave. <br />- `lbm/`: Amostras para o Lora Basics Modem. <br />- `rac/`: Amostras para o Radio Abstraction Controller. <br />- `sdk/`: Exemplos genéricos do SDK</td>
</tr>
<tr>
<td class="tg-g9rn">subsys/</td>
<td class="tg-g9rn">**Integração de subsistemas** </td>
</tr>
<tr>
<td class="tg-g9rn">zephyr/module.yml</td>
<td class="tg-g9rn">**Manifesto do módulo** O arquivo YAML declara todo este diretório `usp_zephyr/` como um módulo Zephyr. A ferramenta `west` usará isso para localizar e integrar os `boards`, `drivers` do módulo na compilação.</td>
</tr>
</tbody>
</table>

<br />

### 4. Compilar e executar

A Semtech forneceu vários exemplos para uma avaliação rápida junto com o kit de avaliação. Todos os exemplos estão localizados no diretório `samples/usp` e você pode usar qualquer placa/shield suportado, conforme definido, para compilar e gravar esses exemplos. Começaremos com os exemplos `LBM`, demonstrando os recursos principais da nova geração LR2021.

```shell
usp_zephyr/samples/
└── usp/
     ├── lbm/
     │    ├── geolocation
     │    ├── lctt_certif
     │    ├── periodical_uplink
     │    └── porting_tests     
     ├── rac/
     └── sdk/
```

<br />

:::note
**LoRa Basics Modem (LBM):**

LoRa Basics Modem é uma biblioteca de software fácil de usar projetada pela Semtech para simplificar o desenvolvimento de dispositivos finais LoRaWAN® que operam tanto nas bandas ISM Sub-GHz quanto em 2,4GHz, garantindo interoperabilidade em todo o mundo. Ela oferece aos desenvolvedores uma interface de alto nível orientada a eventos, abstraindo a complexidade enquanto mantém total conformidade com a especificação [TS001-LoRaWAN L2 1.0.4](https://resources.lora-alliance.org/technical-specifications/ts001-1-0-4-lorawan-l2-1-0-4-specification) e o padrão de Parâmetros Regionais [RP2-1.0.3](https://resources.lora-alliance.org/technical-specifications/rp2-1-0-3-lorawan-regional-parameters).

Saiba mais sobre o [LoRa Basics Modem](https://www.semtech.com/products/wireless-rf/lora-basics-modem) aqui.
:::

<br />

#### 4.1. Uplink Periódico LoRaWAN

Este aplicativo demonstra como configurar e executar um dispositivo LoRaWAN usando a pilha LoRa Basics Modem (LBM). Ele suporta `uplinks automáticos periódicos`, `uplinks manuais acionados por botão` e `recepção de downlink`, tornando-o um protótipo ideal para validação básica de funcionalidades LoRaWAN.

**Principais Recursos**
- **Ingressar na Rede LoRaWAN:** Suporta apenas ingresso na rede por **OTAA** (Over-The-Air Activation).
- **Uplinks Periódicos:** Uplinks automáticos configuráveis a cada 60 segundos por padrão na `FPort 101`.
- **Uplinks Acionados por Botão:** Transmissão de uplink manual acionada ao pressionar o botão na `FPort 102`.
- **Recepção de Downlink:** Recebe e processa mensagens de downlink.
- **Várias Regiões LoRaWAN:** Suporte para múltiplas regiões incluindo EU868, US915 e CN470.
- **Suporte a TX via Relay:** Capacidade opcional de transmissão via relay LoRaWAN.
- **Modo de Baixa Potência:** Configuração opcional otimizada para consumo de energia.

**Pré-requisitos**

- Uma conta em uma **rede LoRaWAN** (The Things Network, ChirpStack, etc.)
- **Credenciais** LoRaWAN válidas: `DevEUI`, `JoinEUI`, `AppKey`
- Um **gateway LoRaWAN** compatível dentro do alcance

**Definir Credenciais LoRaWAN**

:::note
Aqui usamos The Thing Network como exemplo. Você pode escolher o LNS de sua preferência, se necessário.
:::

- **Passo 1.** Acesse o site [The Things Network](https://www.thethingsnetwork.org) e registre-se para uma nova conta.

- **Passo 2.** Após fazer login, clique no seu perfil e selecione **Console**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

- **Passo 3.** Selecione um cluster para começar a adicionar gateways e dispositivos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_cluster.png" style={{width:600, height:'auto'}}/></div>

<br />

:::note
Para uma implantação rápida de redes de cobertura LoRaWAN no seu local, confira nosso gateway interno LoRaWAN pronto para uso [SenseCAP M2 multi-platform LoRaWAN indoor gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html).
:::

- **Passo 4.** Clique em **Applications** no painel e então clique em **Add application**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_add_application.png" style={{width:600, height:'auto'}}/></div>

- **Passo 5.** Preencha o **Application ID** e depois clique em **Create application**.

- **Passo 6.** Clique no aplicativo criado e escolha **End devices** no painel, depois clique em **Register end device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_add_device.png" style={{width:600, height:'auto'}}/></div>

- **Passo 7.** Escolha **Manually** para inserir as credenciais de registro manualmente.

- **Passo 8.** Selecione o **Frequency plan** de acordo com a sua região. Certifique-se também de usar a mesma frequência do gateway ao qual você conectará este dispositivo. Selecione **LoRaWAN Specification 1.0.4** como **LoRaWAN version** e **RP002 Regional Parameters 1.0.3** como **Regional Parameters version**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_register_device_1.png" style={{width:500, height:'auto'}}/></div>

- **Passo 9.** Defina **JoinEUI**, **DevEUI** e **AppKey** de acordo com suas próprias necessidades. Essas credenciais serão usadas posteriormente para a configuração do dispositivo final. Escolha um **End device ID** para o dispositivo registrado e clique em **Register end device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_register_device_2.png" style={{width:500, height:'auto'}}/></div>

- **Passo 10.** Edite o arquivo `boards/user_keys.overlay` e substitua os valores de espaço reservado pelas suas credenciais reais:

```dts
/ {
    zephyr,user {
        user-lorawan-device-eui = <0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00>;
        user-lorawan-join-eui = <0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00>;
        user-lorawan-gen_app-key = <0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
                                   0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00>;
        user-lorawan-app-key = <0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
                               0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00>;
        user-lorawan-region = "EU_868";
    };
};
```

Escolha o código de região apropriado a partir da lista suportada e atualize o `user-lorawan-region` em `user_keys.overlay`:

<table class="tg">
<thead>
<tr>
<th class="tg-6cwf">Region Code</th><th class="tg-6cwf">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">EU_868</td>
<td class="tg-g9rn">Europa 868 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">US_915</td>
<td class="tg-g9rn">América do Norte 915 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">AS_923_GRP1</td>
<td class="tg-g9rn">Ásia-Pacífico 923 MHz (GRP1)</td>
</tr>
<tr>
<td class="tg-g9rn">AS_923_GRP2</td>
<td class="tg-g9rn">Ásia-Pacífico 923 MHz (GRP2)</td>
</tr>
<tr>
<td class="tg-g9rn">AS_923_GRP3</td>
<td class="tg-g9rn">Ásia-Pacífico 923 MHz (GRP3)</td>
</tr>
<tr>
<td class="tg-g9rn">AS_923_GRP4</td>
<td class="tg-g9rn">Ásia-Pacífico 923 MHz (GRP4)</td>
</tr>
<tr>
<td class="tg-g9rn">AU_915</td>
<td class="tg-g9rn">Austrália 915 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">CN_470</td>
<td class="tg-g9rn">China 470 MHz (RP2)</td>
</tr>
<tr>
<td class="tg-g9rn">CN_470_RP_1_0</td>
<td class="tg-g9rn">China 470 MHz (RP1)</td>
</tr>
<tr>
<td class="tg-g9rn">IN_865</td>
<td class="tg-g9rn">Índia 865 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">KR_920</td>
<td class="tg-g9rn">Coreia do Sul 920 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">RU_864</td>
<td class="tg-g9rn">Rússia 864 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">WW_2G4</td>
<td class="tg-g9rn">Mundial 2,4 GHz</td>
</tr>
</tbody>
</table>

<br />

**Compilar Versão Padrão:**

```shell
# Enable full logging and debug capabilities
west build --pristine --board xiao_nrf54l15/nrf54l15/cpuapp --shield semtech_loraplus_expansion_board --shield semtech_wio_lr2021 usp_zephyr/samples/usp/lbm/periodical_uplink
```

**Compilar Versão de Baixa Potência:**

```shell
# Power-optimized with minimal logging features
west build --pristine --board xiao_nrf54l15/nrf54l15/cpuapp --shield semtech_loraplus_expansion_board --shield semtech_wio_lr2021 usp_zephyr/samples/usp/lbm/periodical_uplink -- -DCONF_FILE=prj_lowpower.conf
```



Se o processo de compilação for bem-sucedido, você deverá ver informações de compilação e build do Zephyr conforme mostrado abaixo:

```shell
...
-- Zephyr version: 4.2.0 (/Users/admin/zephyr_workspace/zephyr), build: v4.2.0
[248/248] Linking C executable zephyr/zephyr.elf
Memory region         Used Size  Region Size  %age Used
           FLASH:      257576 B      1428 KB     17.61%
             RAM:       40292 B       188 KB     20.93%
        IDT_LIST:          0 GB        32 KB      0.00%
Generating files from /Users/admin/zephyr_workspace/build/zephyr/zephyr.elf for board: xiao_nrf54l15
```

**Gravar o Dispositivo (Flash):**

```shell
# Flash the firmware to the board
west flash
```
**Monitorar a Saída do Console Serial:**

Conecte um monitor serial (screen, PuTTY, etc.) para visualizar os logs. Aqui usamos o aplicativo Terminal integrado `screen` para demonstrar:

```shell
# Unplug the XIAO-nRF54L15
# Use ls /dev/tty.* command to list current ports
ls /dev/tty.*
```

```shell
# Plug in the Type-c cable and run the ls /dev/tty.* command again
/dev/tty.Bluetooth-Incoming-Port	/dev/tty.usbmodemB141F6A13
/dev/tty.debug-console			/dev/tty.wlan-debug
```

Aqui, encontramos a nova entrada `/dev/tty.usbmodemB141F6A13`, que é a porta da nossa placa de desenvolvimento.

```shell
# Connect to the device with screen
# The default baud rate is 115200
screen /dev/tty.usbmodemB141F6A13 115200
```

Agora a saída serial aparecerá no terminal, a partir da qual você pode monitorar os logs de saída do kit. Para sair da sessão `screen`, pressione `Ctrl + A`, depois `Ctrl + \`.

<br />

**Ingressar no LNS:**

<details>
<summary>Saída: Inicialização e Ingresso no LNS</summary>

```shell
[00:00:00.046,323] <inf> lorawan: smtc_modem_join_network
[00:00:00.046,388] <inf> lorawan:  Start a new join sequence in 5 seconds on stack 0
[00:00:05.057,559] <inf> lorawan: DevEUI
                                  70 b3 d5 7e d0 07 44 86                          |p..~..D.         
[00:00:05.057,586] <inf> lorawan: JoinEUI
                                  00 00 00 00 00 00 00 00                          |........         
[00:00:05.057,624] <inf> lorawan: DevNonce 0x1d2, stack_id 0
...
[00:00:12.433,537] <inf> usp: Event received: JOINED
[00:00:12.433,543] <inf> usp: Modem is now joined 
[00:00:12.433,568] <inf> lorawan: add send task
[00:00:12.438,666] <inf> lorawan:  User LoRaWAN tx on FPort 101
```

</details>

- **Uplink Periódico:** O dispositivo envia dados uma vez por minuto usando um contador que incrementa iniciando de `01` na `FPort 101`. Você pode monitorar os dados em tempo real no console, conforme mostrado abaixo:

<details>
<summary>Saída: Uplink Periódico</summary>

```shell
[00:00:18.811,852] <inf> lorawan:   *************************************
[00:00:18.811,879] <inf> lorawan:   *  TX DONE
[00:00:18.811,896] <inf> lorawan:   *************************************
[00:00:18.811,984] <inf> lorawan: 

[00:00:18.812,016] <inf> lorawan:   Open Rx1 for Hook Id = 4
[00:00:18.812,072] <inf> lorawan:   RX1 LoRa at 23841 ms: freq:867300000, SF12, BW125, sync word = 0x34
[00:00:18.812,102] <inf> lorawan:   Timer will expire in 5030 ms
[00:00:24.041,328] <inf> lorawan: 

[00:00:24.041,357] <inf> lorawan:   *************************************
[00:00:24.041,389] <inf> lorawan:   * RX1 Timeout for stack_id = 0
[00:00:24.041,407] <inf> lorawan:   *************************************
[00:00:24.041,498] <inf> lorawan: 

[00:00:24.041,530] <inf> lorawan:   Open Rx2 for Hook Id = 4
[00:00:24.041,585] <inf> lorawan:   RX2 LoRa at 24813 ms: freq:869525000, SF9, BW125, sync word = 0x34
[00:00:24.041,614] <inf> lorawan:   Timer will expire in 772 ms
[00:00:24.839,344] <inf> lorawan: 

[00:00:24.839,363] <inf> lorawan:   *************************************
[00:00:24.839,408] <inf> lorawan:   * RX2 Timeout for stack_id = 0
[00:00:24.839,426] <inf> lorawan:   *************************************
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_periodical_uplink.png" style={{width:600, height:'auto'}}/></div>

<br />

**Uplink acionado por botão:** Cada pressionamento da `user_key` aciona um uplink de dados imediato, incrementando o contador em `1` na `FPort 102`. Relatórios acionados por botão não afetam o tempo dos relatórios periódicos.

<details>
<summary>Saída: Uplink acionado por botão</summary>

```shell
[00:01:43.010,970] <inf> usp: Button pushed
[00:01:43.011,015] <inf> lorawan: add send task
[00:01:43.011,449] <inf> lorawan:  User LoRaWAN tx on FPort 102
[00:01:43.011,489] <inf> lorawan: 

[00:01:43.011,507] <inf> lorawan:   *************************************
[00:01:43.011,536] <inf> lorawan:   * Send Payload  for stack_id = 0
[00:01:43.011,553] <inf> lorawan:   *************************************
[00:01:43.011,627] <inf> lorawan:   Tx  LoRa at 107167 ms: freq:867100000, SF12, BW125, len 17 bytes 14 dBm, fcnt_up 4, toa = 1319
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_button_uplink.png" style={{width:600, height:'auto'}}/></div>

<br />

**Downlink agendado:** Agende um pacote de downlink a partir do TTN na opção `Messaging`. Especifique a porta de quadro (`FPort 1`) e o conteúdo dos dados (`AA BB CC DD`), depois clique em **Schedule downlink**. Você pode observar que o payload agora está aguardando na fila e, assim que o próximo uplink chegar, o pacote de downlink será enviado pelo servidor de rede e recebido pelo dispositivo.

<details>
<summary>Saída: Recepção de Downlink</summary>

```shell
[00:02:14.666,960] <inf> lorawan:   Open Rx1 for Hook Id = 4
[00:02:14.667,016] <inf> lorawan:   RX1 LoRa at 139695 ms: freq:867100000, SF12, BW125, sync word = 0x34
[00:02:14.667,046] <inf> lorawan:   Timer will expire in 5029 ms
[00:02:20.837,445] <inf> lorawan: 

[00:02:20.837,477] <inf> lorawan:   *************************************
[00:02:20.837,523] <inf> lorawan:   * Receive a Valid downlink Rx1 for stack_id = 0, rssi: -121 dBm, snr: -9 dB
[00:02:20.837,540] <inf> lorawan:   *************************************
[00:02:20.837,594] <inf> usp: Event received: DOWNDATA
[00:02:20.837,625] <inf> usp: Event received: TXDONE
[00:02:20.837,630] <inf> usp: Transmission done 
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_downlink_config.png" style={{width:600, height:'auto'}}/></div>

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_downlink_payload.png" style={{width:600, height:'auto'}}/></div>


## Recursos

### Semtech LR2021

- **[PDF]** [Semtech LR2021 Datasheet](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/RQ00000BIigz/OP1EbZuxbCU2JJQ7kD9ooPlC8c0u0TFp3e0WDJ5yrNQ)

- **[PDF]** [Semtech LR2021_EU868/US915 Schematic](https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/res/LR2021WIO1XDCS_Wio-LR2021_e769v02a_868_915_sch_layout.pdf)

- **[PDF]** [Semtech LR2021_CN490 Schematic](https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/res/LR2021WIO1XGCS_Wio_LR2021_e768v02a_490_sch_layout.pdf)

### Placa de Expansão

- **[PDF]** [Esquemático da Placa de Expansão](https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/res/LR20xx_XIAO_LoRa_Plus_Expansion_Board_e758v03a_sch_layout.pdf)

### Seeed Studio XIAO nRF54L15

- **[PDF]** [Esquemático do Seeed Studio XIAO nRF54L15](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Schematic.pdf)

- **[ZIP]** [Bibliotecas KiCAD do Seeed Studio XIAO nRF54L15](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_KICAD.zip)

- **[DXF]** [Dimensões do Seeed Studio XIAO nRF54L15 em DXF](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15(Sense)_DXF.zip)

- **[XLSX]** [Planilha de pinagem do Seeed Studio XIAO nRF54L15](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15datasheet.xlsx)


## Certificados



## Suporte Técnico & Discussão de Produtos

Por favor, envie qualquer problema técnico para o nosso [fórum](http://forum.seeedstudio.com/).

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
