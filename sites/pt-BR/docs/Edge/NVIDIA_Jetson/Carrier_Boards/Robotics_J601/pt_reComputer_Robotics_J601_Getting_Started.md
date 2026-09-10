---
description: Introdução à placa carrier reComputer Robotics J601 para módulos NVIDIA Jetson AGX Thor.
title: Introdução ao reComputer Robotics J601
sidebar_label: Gravar JetPack
keywords:
  - reComputer Robotics J601
  - AGX Thor
  - Jetson
  - Carrier Board
  - Robotics
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ai_robotics_recomputer_robotics_j601_carrier_board_getting_started
sku: 100060965
last_update:
  date: 08/28/2026
  author: haochen
createdAt: '2026-04-24'
updatedAt: '2026-08-28'
url: https://wiki.seeedstudio.com/pt-br/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import J601DemoGrid from '@site/src/components/jetson/J601DemoGrid';

# Introdução ao reComputer Robotics J601

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg"/>
</div>

O reComputer J601 é uma placa carrier de borda de IA compacta, porém poderosa, para Jetson AGX Thor, oferecendo até 2070 TFLOPS. Projetada para desenvolvimento e produção, ela possui M.2 Key E/M/B, 4x 10Gb RJ45, 4×USB 3.2, HDMI 2.1, 8×GMSL e vários IOs, garantindo integração perfeita. Pode servir como o cérebro de um robô humanoide. Com suporte a frameworks de LLM e IA Física como NVIDIA Isaac, Hugging Face, PyTorch e ROS2/1, faz a ponte entre IA e robótica. Com processamento em tempo real otimizado, executa visão computacional, transformers e modelos multimodais, liberando IA avançada para dispositivos de borda.

## Recursos

- Suporta módulos **NVIDIA Jetson AGX Thor T5000 e T4000**
- Até **2070 TFLOPS** de desempenho de IA
- Até **4x portas 10GbE RJ45**
- **4x portas USB 3.2 Type-A** com até 10Gbps
- Saída de vídeo **HDMI 2.1**
- **M.2 Key M** para SSD PCIe Gen 4 NVMe 2280
- **M.2 Key E** para módulos Wi-Fi M.2 2230
- **M.2 Key B** para módulos 4G/5G
- Até **8x câmeras GMSL2** por meio de dois conectores Mini-Fakra e placas de extensão GMSL
- I/O para robótica incluindo CAN isolado, RS-232/422/485, I2C, I2S, GPI e GPO
- Entrada DC de ampla faixa **19V a 48V** através de XT30
- Plataforma de software: **JetPack 7.1**

## Especificações

<div class="table-center">
<table>
  <tbody>
    <tr>
      <td>Compatibilidade de módulo</td>
      <td>NVIDIA Jetson AGX Thor T5000 / T4000</td>
    </tr>
    <tr>
      <td>Tamanho da PCB</td>
      <td>168 mm x 155 mm (sem o módulo Jetson AGX Thor)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>4x USB 3.2 Type-A (10Gbps, Host), 1x USB 2.0 Type-C (Debug), 1x USB 3.0 Type-C (Recovery)</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>4x RJ45 10GbE com T5000; 3x RJ45 10GbE com T4000</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td>1x M.2 Key M para SSD PCIe Gen 4 NVMe 2280</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td>1x M.2 Key E para módulo Wi-Fi M.2 2230</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td>1x M.2 Key B para módulo 4G/5G</td>
    </tr>
    <tr>
      <td>Serial</td>
      <td>1x RS-232/422/485 (conector DB9)</td>
    </tr>
    <tr>
      <td>Portas JST</td>
      <td>4x CAN com T5000 ou 2x CAN com T4000, 1x RS-485, 1x I2S, 1x I2C, 4x GPI e 4x GPO</td>
    </tr>
    <tr>
      <td>Áudio</td>
      <td>1x entrada de microfone e 1x saída de áudio</td>
    </tr>
    <tr>
      <td>Ventoinha</td>
      <td>1x conector de ventoinha de 4 pinos (12V PWM)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x header RTC de 2 pinos</td>
    </tr>
    <tr>
      <td>LEDs</td>
      <td>1x LED PWR verde, 1x LED SSD verde e 1x LED USR RGB</td>
    </tr>
    <tr>
      <td>Botões</td>
      <td>1x botão Recovery e 1x botão Reset</td>
    </tr>
    <tr>
      <td>GMSL</td>
      <td>2x conectores Mini-Fakra para até 8x câmeras GMSL2</td>
    </tr>
    <tr>
      <td>Temperatura de operação</td>
      <td>-10°C a 60°C com pasta térmica; -10°C a 55°C com um pad térmico</td>
    </tr>
    <tr>
      <td>Fonte de alimentação</td>
      <td>XT30, 19V a 48V DC</td>
    </tr>
    <tr>
      <td>JetPack</td>
      <td>JetPack 7.1</td>
    </tr>
  </tbody>
</table>
</div>

## Visão geral do hardware

| **Vista lateral 1** |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_04.jpg) |
| **Vista lateral 2** |
| ![fig2](https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_05.jpg) |
| **Vista inferior** |
| ![fig3](https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_06.jpg) |

## Gravar JetPack

Aqui, mostraremos como gravar o JetPack em um SSD NVMe conectado ao reComputer Robotics J6014 / J6015. Ambos os dispositivos usam a placa carrier J601, e o procedimento de gravação é o mesmo.

### Módulo compatível

- [Módulo NVIDIA Jetson T4000](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T4000-Module-p-6939.html)
- [Módulo NVIDIA Jetson T5000](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T5000-Module-p-6938.html)

### Pré-requisitos

- PC host com Ubuntu
- reComputer Robotics J6014 ou J6015
- SSD interno NVMe M.2 2280
- Cabo de transmissão de dados USB Type-C
- Pelo menos 220 GB de armazenamento livre no PC host

:::info
Recomendamos usar um host físico com Ubuntu em vez de uma máquina virtual. O Seeed Jetson DevelopTool também oferece suporte ao Windows por meio do WSL2, mas um host Ubuntu nativo proporciona a experiência de gravação mais confiável.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> Versão do JetPack </td>
        <td class="dbon" colspan="3"> Versão do Ubuntu (computador host) </td>
    </tr>
    <tr>
        <td > 20.04 </td>
        <td > 22.04 </td>
        <td > 24.04 </td>
    </tr>
    <tr>
        <td >JetPack 7.1</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::

### Escolher um método de gravação

Selecione abaixo o fluxo de trabalho gráfico do Seeed Jetson DevelopTool ou o fluxo de trabalho via linha de comando.

<Tabs groupId="j601-flashing-method">

<TabItem value="software" label="Gravação por software" default>

O Seeed Jetson DevelopTool oferece um fluxo de trabalho gráfico guiado que faz o download, verifica, extrai e grava o firmware sem exigir comandos de BSP. Instale a ferramenta seguindo o [guia de instalação do Seeed Jetson DevelopTool](/pt-br/jetson_developtool_installation).

#### Tutorial em vídeo

<div class="video-container">
<iframe width="1071" height="803" src="https://www.youtube.com/embed/O2rlSOdYujE" title="Flash Jetpack for reCompurer J601 by Jetson Develop Tool!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### Fluxo de trabalho de gravação por software

<details>

<summary> Passo a passo </summary>

**Passo 1.** Inicie o Seeed Jetson DevelopTool e abra o **Flash Center**. Selecione **reComputer J601** e **JetPack 7.1 (L4T 38.4.0)**.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_07.jpg"/></div>

**Passo 2.** Conecte o PC host à **porta de gravação USB 3.0 Type-C**. Pressione e segure o botão **RECOVERY**, conecte a fonte de alimentação DC de 19V a 48V através do XT30 e solte o botão após dois segundos.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_08.jpg"/></div>

**Passo 3.** Clique em **Detect Device**. Confirme que o módulo Jetson conectado foi detectado (por exemplo, **AGX Thor T5000**) e clique em **Next**.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_09.jpg"/></div>

**Passo 4.** Clique em **Download / Prepare BSP**. A ferramenta faz o download do firmware, verifica o checksum SHA256 e extrai o BSP automaticamente.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_10.jpg"/></div>

**Passo 5.** Clique em **Start Flash** e aguarde até que a interface informe que a gravação foi concluída. Não desconecte a fonte de alimentação nem o cabo USB durante esse processo.

:::caution
A gravação apaga os dados no SSD NVMe de destino. Faça backup dos dados importantes antes de começar.
:::

**Passo 6.** Conecte o reComputer Robotics J601 a um monitor HDMI e conclua a configuração inicial do sistema.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

</details>

</TabItem>

<TabItem value="command-line" label="Gravação via linha de comando">

Baixe e grave a imagem JetPack que corresponde ao módulo Jetson na sua placa. Ambos os produtos usam a mesma placa carrier J601; selecione a aba para o seu módulo:

<Tabs groupId="j601-thor-module">

<TabItem value="t5000" label="AGX Thor T5000 (J6015)" default>

#### Preparar a imagem JetPack

<div class="table-center">
<table style={{textAlign: 'center', tableLayout: 'fixed', width: '100%'}}>
  <colgroup>
    <col style={{width: '18%'}} />
    <col style={{width: '22%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '14%'}} />
    <col style={{width: '26%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>Versão do JetPack</th>
      <th>Módulo Jetson</th>
      <th>Produto</th>
      <th>Link para download</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1 (L4T 38.4.0)</td>
      <td>AGX Thor T5000</td>
      <td>reComputer Robotics J6015</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAq5ofKK9Y1RaCzAfJ8-3J4ARhePBbGBc-mcjQ1bNAP0bY?e=CbmAN9" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td style={{overflowWrap: 'anywhere'}}>3f75780b43f6559bc950b6a97aa38fd6f61d4d001cce870bdfb498f64e6d18e5</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
O arquivo de imagem JetPack é grande e pode levar cerca de 60 minutos para ser baixado. Aguarde o término do download antes de extrair o arquivo compactado.
:::

Para verificar o firmware baixado, execute `sha256sum <file>` no host Ubuntu e compare o resultado com o valor SHA256 na tabela.

#### Entrar no modo Force Recovery

:::info
Antes de gravar, certifique-se de que a placa esteja em modo Force Recovery.
:::

**Passo 1.** Conecte o PC host com Ubuntu à **porta de gravação USB 3.0 Type-C** usando um cabo de dados USB Type-C.

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_03.jpg"/></div>

**Passo 2.** Pressione e segure o botão **RECOVERY**.

**Passo 3.** Conecte a fonte de alimentação (19 V a 48 V CC através do conector XT30).

**Passo 4.** Solte o botão **RECOVERY** após dois segundos.

**Passo 5.** No PC host, execute `lsusb`. A seguinte entrada confirma que a placa está em Force Recovery Mode:

- **0955:7026 NVIDIA Corp.**

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_02.jpg"/></div>

#### Gravar no Jetson

**Passo 1.** Extraia a imagem baixada:

```bash
cd <path-to-image>
sudo tar xpf mfi_recomputer-thor-carrier-j6015-7.1-38.4.0-YYYY-MM-DD.tar.gz
```

**Passo 2.** Grave o JetPack no SSD NVMe:

```bash
cd mfi_recomputer-thor-carrier-j6015
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --showlogs --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t264_nvme.xml -S 80GiB --network usb0 recomputer-thor-carrier-j6015 external
```

O comando de gravação geralmente leva de 2 a 10 minutos. A saída a seguir indica uma gravação bem-sucedida:

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

**Passo 3.** Conecte o reComputer Robotics J6015 a um monitor HDMI e conclua a configuração inicial do sistema.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

</TabItem>

<TabItem value="t4000" label="AGX Thor T4000 (J6014)">

#### Preparar a imagem do JetPack

<div class="table-center">
<table style={{textAlign: 'center', tableLayout: 'fixed', width: '100%'}}>
  <colgroup>
    <col style={{width: '18%'}} />
    <col style={{width: '22%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '14%'}} />
    <col style={{width: '26%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>Versão do JetPack</th>
      <th>Módulo Jetson</th>
      <th>Produto</th>
      <th>Link para download</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1 (L4T 38.4.0)</td>
      <td>AGX Thor T4000</td>
      <td>reComputer Robotics J6014</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBofCO4bWF9SLdbLQE1V8DgAS1tW6-UmQGEH3ULOZ7W16o?e=zdnK3s" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td style={{overflowWrap: 'anywhere'}}>c63eddfe7005a088ab439c64fb5d3bf9a52b85d62d377c6a4bf829295f7222ef</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
O arquivo de imagem do JetPack é grande e pode levar cerca de 60 minutos para ser baixado. Aguarde o término do download antes de extrair o arquivo compactado.
:::

Para verificar o firmware baixado, execute `sha256sum <file>` no host Ubuntu e compare o resultado com o valor SHA256 na tabela.

#### Entrar em Force Recovery Mode

:::info
Antes de gravar, certifique-se de que a placa esteja em Force Recovery Mode.
:::

**Passo 1.** Conecte o PC host com Ubuntu à **porta de gravação USB 3.0 Type-C** usando um cabo de dados USB Type-C.

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_03.jpg"/></div>

**Passo 2.** Pressione e segure o botão **RECOVERY**.

**Passo 3.** Conecte a fonte de alimentação (19 V a 48 V CC através do conector XT30).

**Passo 4.** Solte o botão **RECOVERY** após dois segundos.

**Passo 5.** No PC host, execute `lsusb`. A seguinte entrada confirma que a placa está em Force Recovery Mode:

- **0955:7226 NVIDIA Corp.**

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_02.jpg"/></div>

#### Gravar no Jetson

**Passo 1.** Extraia a imagem baixada:

```bash
cd <path-to-image>
sudo tar xpf mfi_recomputer-thor-carrier-j6014-7.1-38.4.0-YYYY-MM-DD.tar.gz
```

**Passo 2.** Grave o JetPack no SSD NVMe:

```bash
cd mfi_recomputer-thor-carrier-j6014
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --showlogs --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t264_nvme.xml -S 80GiB --network usb0 recomputer-thor-carrier-j6014 external
```

O comando de gravação geralmente leva de 2 a 10 minutos. A saída a seguir indica uma gravação bem-sucedida:

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

**Passo 3.** Conecte o reComputer Robotics J6014 a um monitor HDMI e conclua a configuração inicial do sistema.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

</TabItem>

</Tabs>

⚙️ **Todos os arquivos `.dts` e outros códigos-fonte das placas carrier Jetson da Seeed podem ser baixados em** [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra).

</TabItem>

</Tabs>

:::info
Conclua a **Configuração do Sistema** de acordo com suas necessidades após a primeira inicialização.
:::

Para uso detalhado das interfaces, consulte [Uso das interfaces de hardware do Robotics J601](/pt-br/recomputer_jetson_robotics_j601_interfaces_usage).

## O que você pode fazer com o J601?

Depois de gravar o JetPack, explore os wikis de demonstração abaixo para ver o que você pode construir no reComputer Robotics J601. Esses cards são gerados automaticamente a partir dos wikis publicados de **Aplicações** Jetson e **Outros dispositivos** que mencionam **J601** ou **Jetson Thor**.

<J601DemoGrid />

## Recursos

- [Folha de dados da placa carrier reComputer J601](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601_datasheet.pdf)
- [Esquemático da placa carrier reComputer J601](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20J601%20Carrier%20Board_V1.0_SCH_260612.pdf)
- [Arquivo 3D do reComputer J601](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601.stp)
- [Catálogo de produtos Seeed NVIDIA Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Casos de sucesso Seeed NVIDIA Jetson](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson AGX One Pager](https://files.seeedstudio.com/wiki/reComputer-Jetson/seeed_jetson_agx_new_series.pdf)
- [Código-fonte do BSP Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [Página do produto da placa carrier reComputer J601](https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thor-p-6937.html)

## Suporte técnico

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
