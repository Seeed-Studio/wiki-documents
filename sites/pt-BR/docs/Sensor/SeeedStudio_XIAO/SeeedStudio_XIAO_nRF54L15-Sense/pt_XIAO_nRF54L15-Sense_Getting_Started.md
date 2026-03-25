---
title: Seeed Studio XIAO nRF54L15(Sense)
description: ''
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.webp
slug: /xiao_nrf54l15_sense_getting_started
sku: 101991421, 101991422, 114993696, 114993697, 100039813
keywords:
  - XIAO
  - nRF54L15
last_update:
  date: 7/2/2025
  author: Jason
sidebar_position: 0
createdAt: '2025-07-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_getting_started/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:600, height:'auto'}}/></div>

# Introdução ao Seeed Studio XIAO nRF54L15(Sense)

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15</th>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991421-XIAO-nRF54L14.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-p-6493.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Introdução

O **Seeed Studio XIAO nRF54L15** é uma placa de desenvolvimento compacta e de alto desempenho que apresenta o avançado chip Nordic nRF54L15. Este SoC de próxima geração integra um rádio multiprotocolo de 2,4 GHz de ultrabaixo consumo com um MCU contendo um **processador Arm® Cortex®-M33 de 128 MHz** e um **coprocessador RISC-V de 128 MHz**. Ele oferece memória escalável de até **1,5 MB de NVM e 256 KB de RAM**, e um design interno de ultrabaixo consumo que estende significativamente a vida útil da bateria. Seu poderoso rádio oferece suporte a **Bluetooth® 6.0 (incluindo Channel Sounding), Matter, Thread, Zigbee** e modos proprietários de alta taxa de transferência em 2,4 GHz de até **4 Mbps**. A placa inclui um conjunto abrangente de periféricos, um **coprocessador RISC-V de 128 MHz** integrado e recursos avançados de segurança, como isolamento **TrustZone®** e proteção do mecanismo criptográfico. Com **gerenciamento de bateria de íon de lítio integrado**, o XIAO nRF54L15 é ideal para soluções IoT compactas, seguras e energeticamente eficientes, como wearables inteligentes, sensores industriais e HMIs avançadas.

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

### Especificações

<table align="center">
  <tr>
      <th>Item</th>
      <th>XIAO nRF54L15</th>
      <th>XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
      <th>MCU</th>
      <td align="center">Arm Cortex-M33 128 MHz<br/>RISC-V coprocessor 128 MHz FLPR</td>
      <td align="center">Arm Cortex-M33 128 MHz<br/>RISC-V coprocessor 128 MHz FLPR</td>
  </tr>
  <tr>
      <th>Conectividade sem fio</th>
      <td align="center">
        Bluetooth LE 6.0（include Channel Sounding）<br/>
        NFC<br/>
        Thread<br/>
        Zigbee<br/>
        Matter<br/>
        Amazon Sidewalk<br/>
        Protocolos proprietários de 2,4 GHz<br/>
      </td>
      <td align="center">
        Bluetooth LE 6.0（include Channel Sounding）<br/>
        NFC<br/>
        Thread<br/>
        Zigbee<br/>
        Matter<br/>
        Amazon Sidewalk<br/>
        Protocolos proprietários de 2,4 GHz<br/>
      </td>
  </tr>
  <tr>
      <th>Memória</th>
      <td align="center">NVM 1,5 MB + RAM 256 KB</td>
      <td align="center">NVM 1,5 MB + RAM 256 KB</td>
  </tr>
  <tr>
      <th>Sensor integrado</th>
      <td align="center">N/A</td>
      <td align="center">IMU de 6 DOF (LSM6DS3TR-C)<br/>Microfone (MSM261DGT006)</td>
  </tr>
  <tr>
      <th>Potência de TX</th>
      <td align="center">+8 dBm</td>
      <td align="center">+8 dBm</td>
  </tr>
  <tr>
      <th>Sensibilidade de RX</th>
      <td align="center">-96 dBm</td>
      <td align="center">-96 dBm</td>
  </tr>
  <tr>
      <th>Periféricos em destaque</th>
      <td align="center">ADC de 14 bits, Global RTC</td>
      <td align="center">ADC de 14 bits, Global RTC</td>
  </tr>
  <tr>
      <th>Alimentação</th>
      <td align="center">
        Fonte de alimentação pela interface USB Type-C<br/>
        PMIC interno com suporte a alimentação por bateria de lítio<br/>
        Suporta coleta de energia da bateria de lítio
      </td>
      <td align="center">
        Fonte de alimentação pela interface USB Type-C<br/>
        PMIC interno com suporte a alimentação por bateria de lítio<br/>
        Suporta coleta de energia da bateria de lítio
      </td>
  </tr>
  <tr>
      <th>Temperatura de operação</th>
      <td align="center">-40 a 105°C</td>
      <td align="center">-40 a 105°C</td>
  </tr>
  <tr>
      <th>Faixa de tensão de alimentação</th>
      <td align="center">3,7 a 5 V</td>
      <td align="center">3,7 a 5 V</td>
  </tr>
  <tr>
      <th>ESB e protocolos proprietários de 2,4 GHz</th>
      <td align="center">até 4 Mbps</td>
      <td align="center">até 4 Mbps</td>
  </tr>
  <tr>
      <th>Detectores de violação (tamper)</th>
      <td align="center">SIM</td>
      <td align="center">SIM</td>
  </tr>
  <tr>
      <th>Bluetooth channel sounding</th>
      <td align="center">SIM</td>
      <td align="center">SIM</td>
  </tr>
</table>

### Recursos

- **CPU poderosa**: processador Arm® Cortex®-M33 de 128 MHz com suporte a instruções DSP e operações de ponto flutuante FPU, arquitetura RISC de 32 bits e coprocessador RISC-V integrado de 128 MHz.
- **Ultrabaixo consumo de energia**: projetado para consumo de energia ultrabaixo superior, estende significativamente a vida útil da bateria e inclui gerenciamento avançado de energia.
- **Transmissão sem fio multimodo**: transceptor sem fio multiprotocolo de 2,4 GHz integrado com suporte a Bluetooth Low Energy (incluindo Channel Sounding), 802.15.4-2020, Matter, Thread, Zigbee e modos proprietários de 2,4 GHz (até 4 Mbps).
- **Segurança robusta**: recursos avançados de segurança, incluindo isolamento TrustZone®, detecção de violação (tamper) e proteção contra vazamento de canal no lado do mecanismo de criptografia.
- **Ricos recursos on-chip**: configurações de memória escaláveis de até 1,5 MB de NVM e 256 KB de RAM fornecem amplo espaço de armazenamento.
- **Interfaces ricas**: conjunto abrangente de periféricos, incluindo o novo Global RTC (disponível no modo System OFF), ADC de 14 bits e interfaces seriais de alta velocidade. Gerenciamento de bateria de lítio integrado.

<JetsonLeadQuote
  buttonText="Solicitar orçamento personalizado"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Visão geral de hardware

<Tabs>
<TabItem  value="54l15" label="XIAO nRF54L15" default>

<table align="center">
  <tr>
    <th>Diagrama de indicação frontal do XIAO nRF54L15</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_nRF54L15_front.png" style={{width:680, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>Diagrama de indicação traseira do XIAO nRF54L15</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/sense_newback.png" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
    <th>Lista de pinos do XIAO nRF54L15</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nr_definition.png" style={{width:800, height:'auto'}}/></div></td>
  </tr>
</table>




 </TabItem>
 <TabItem value="54L15Sense" label="XIAO nRF54L15 Sense" default>

 <table align="center">
  <tr>
    <th>Diagrama de indicação frontal do XIAO nRF54L15 Sense</th>
  </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_nRF54L15_Sense_Font.png" style={{width:680, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>Diagrama de indicação traseira do XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/sense_newback.png" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
    <th>Lista de pinos do XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_sensedefinition.png" style={{width:800, height:'auto'}}/></div></td>
  </tr>
 </table>

</TabItem>

</Tabs>

## **Mapa de pinos**
| Pino XIAO              | Função    | Pino do chip | Descrição                    |
| :--------------------: | :-------: | :-------:| :-------------------------- |
| 5V                     | VBUS       |                               | Entrada/Saída de alimentação |
| GND                    |            |                               |                              |
| 3V3                    | 3V3_OUT    |                              | Saída de alimentação         |
| D0                     | Analógico  | P1.04                        | GPIO, ADC                    |
| D1                     | Analógico  | P1.05                        | GPIO, ADC                    |
| D2                     | Analógico  | P1.06                         | GPIO, ADC                    |
| D3                     | Analógico  | P1.07                         | GPIO, ADC                    |
| D4                     | SDA-0      | P1.10                         | GPIO, I2C Dados              |
| D5                     | SCL-0      | P1.11                         | GPIO, I2C Clock              |
| D6                     | TX         | P2.08                         | GPIO, UART Transmit          |
| D7                     | RX         | P2.07                         | GPIO, UART Receive           |
| D8                     | SPI_SCK    | P2.01                         | GPIO, SPI Clock              |
| D9                     | SPI_MISO   | P2.04                         | GPIO, SPI Dados              |
| D10                    | SPI_MOSI   | P2.02                         | GPIO, SPI Dados              |
| D11                    | SCL-1      | P0.03                         | GPIO, I2C                    |
| D12                    | SDA-1      | P0.04                         | GPIO,I2C                     |
| D13                    | GPIO       | P2.10                         | GPIO                         |
| D14                    | GPIO       | P2.09                         | GPIO                         |
| D15                    | GPIO       | P2.06                         | GPIO                         |
| nRF54L15_SWCLK         |            | SWDCLK                        | JTAG                         |
| nRF54L15_SWD-IO        |            | SWDIO                         | JTAG                         |
| nRF54L15_RST           |            | RST                           | JTAG                         |
| SAMD11_SWCLK           |            | PA30                          | JTAG                         |
| SAMD11_SWDIO           |            | PA31                          | JTAG                         |
| SAMD11_RST             |            | RST2                          | JTAG                         |
| NFC1                   |            | P1.02                         | NRF                          |
| NFC2                   |            | P1.03                         | NRF                          |
| Reset                  |            | nRF54_RESET                    | EN                           |
| USER KEY               |            | P0.00                         | Tecla do usuário             |
| RF Switch Port Select  |            | P2.05                         | Alternar antena onboard      |
| RF Switch Power        |            | P2.03                         | Alimentação                  |
| AIN7_VBAT              |            | P1.14                         | Ler o valor de tensão da BAT |
| CHARGE_LED             |            | charge_LED                    | CHG-LED_Red                  |
| USER_LED               |            | P2.00                         | Luz do usuário               |


## Uso do nRFConnect SDK

O nRF Connect SDK (NCS) é um kit de desenvolvimento de software extensível e unificado da Nordic Semiconductor, projetado especificamente para a criação de aplicações sem fio de baixo consumo para dispositivos sem fio baseados nas séries Nordic nRF52, nRF53, nRF54, nRF70 e nRF91.

O NCS fornece um rico ecossistema de aplicações de exemplo prontas para uso, pilhas de protocolo, bibliotecas e drivers de hardware projetados para simplificar o processo de desenvolvimento e acelerar o tempo de lançamento no mercado. Sua natureza modular e configurável oferece aos desenvolvedores a flexibilidade de criar software otimizado em tamanho para dispositivos com restrição de memória, bem como funcionalidades poderosas para aplicações mais avançadas e complexas. O NCS é um projeto de código aberto hospedado no GitHub e oferece excelente suporte para ambientes de desenvolvimento integrados, como o Visual Studio Code.

### Usando o nRF Connect SDK no VSCode

<details>

<summary>Instalar previamente o conhecimento sobre nRF Connect SDK</summary>

Este documento detalha como instalar o ambiente de desenvolvimento do nRF Connect SDK em um computador com Windows 11. A seguir está uma visão geral das ferramentas que precisam ser instaladas

- Instalar o VS Studio Code

  [Visual Studio Code - Code Editing .Redefined](https://code.visualstudio.com/ )

- nRF Command Line Tools
- nRF Connect for Desktop
- Git

- Ninja

```cpp
ninja --version
```

- CMake

```cpp
cmake --version
```

- Zephyr SDK

```cpp
west --version
```

- nRF Connect SDK
- Plugin nRF Connect para VSCode

***Se você já o tiver pré-instalado em seu computador, poderá verificar o número da versão da sua ferramenta seguindo o comando abaixo***

</details>

<Steppers>

<!-- #### Installation of SEGGER J-Link v8.18
Download the installer for your platform from https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack. Run the installer; when the “Select Optional Components” window appears during the installation process, be sure to check “Install legacy USB driver for J-Link”, which is a required component for some supported development kits.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/jlink2.png" style={{width:600, height:'auto'}}/></div>
#### Install the nrfutil and nrfutil device commands.

- 2.1. Download a binary file compatible with your operating system from https://www.nordicsemi.com/Products/Development-tools/nRF-Util/Download?lang=en#infotabs and save it to your disk drive (e.g. Windows). For Windows, save it as C:\nordic_tools\nrfutil.exe. 
If you are using macOS or Linux, save it in a directory that has been added to your system's PATH (e.g., /usr/bin/), and you can skip step 2.2.

- 2.2. (Windows) Update your system's PATH to include where nrfutil is stored. Open “Edit account environment variables” and add the path where the nrfutil binaries are stored (C:\nordic_tools\). 

- 2.3. The nrfutil binaries you just downloaded do not contain any pre-installed commands. In this step, we will upgrade the core nrfutil and download the device commands.

- 2.3.1 To make sure we have the latest version of nrfutil, run the following command in a terminal (command prompt or PowerShell). It does not matter which terminal you use, as nrfutil was set globally in step 2.2.
```cpp
nrfutil self-upgrade
```

- 2.3.2 Installing the nrfutil device Command 
We need to burn the binary to the development kit using the device command.
In your currently active terminal, type: nrfutil install device 
You should see the following output:
```cpp
[00:00:02] ###### 100% [Install packages] Install packages
```
-->

#### O VScode configura a placa e compila o arquivo de gravação

Abra o VS Code e pesquise por nRF Connect for VS Code Extension Pack no Centro de Plugins. Este pacote de plugins instalará automaticamente outros plugins do VS Code necessários para o nRF Connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn8.png" style={{width:600, height:'auto'}}/></div>
<br />
A extensão nRF Connect for VS Code permite que os desenvolvedores utilizem o popular Ambiente de Desenvolvimento Integrado Visual Studio Code (VS Code IDE) para desenvolver, compilar, depurar e implantar aplicações embarcadas baseadas no nRF Connect SDK (Software Development Kit) da Nordic. A extensão inclui ferramentas de desenvolvimento úteis, como uma interface de compilador, vinculador, sistema de compilação completo, depurador habilitado para RTOS, interface perfeita com o nRF Connect SDK, editor de visualização de device tree e um terminal serial integrado.

O pacote de extensões nRF Connect para VS Code inclui os seguintes componentes:

- nRF Connect for VS Code: A extensão principal contém a interface entre o sistema de compilação e o nRF Connect SDK, bem como uma interface para gerenciar a versão do nRF Connect SDK e a toolchain.
- nRF DeviceTree: Fornece suporte à linguagem device tree e um editor de visualização de device tree.
- nRF Kconfig: Fornece suporte à linguagem Kconfig.
- nRF Terminal: Terminais seriais e RTT.
- Microsoft C/C++: Adiciona suporte de linguagem para C/C++, incluindo recursos do IntelliSense.
- CMake: Suporte à linguagem CMake.
- GNU Linker Mapping Files: Suporte para arquivos de mapeamento do linker.
Podemos baixar qualquer versão preferida do nRF Connect SDK e sua toolchain por meio da extensão. A documentação completa do nRF Connect para VS Code está disponível em https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html.

#### Instalando a toolchain

A toolchain é uma coleção de ferramentas que trabalham juntas para compilar aplicações do nRF Connect SDK, incluindo montador, compilador, vinculador e componentes CMake.
Na primeira vez que você abrir o nRF Connect para VS Code, será solicitado que instale a toolchain. Isso geralmente acontece se a extensão não detectar nenhuma toolchain instalada em seu computador.
Clique em Install Toolchain e será exibida uma lista de versões da toolchain que podem ser baixadas e instaladas em seu computador. Selecione a versão da toolchain que corresponde à versão do nRF Connect SDK que você planeja usar. Recomendamos sempre usar a versão marcada mais recente do nRF Connect SDK.

Por padrão, o nRF Connect para VS Code exibe apenas a guia Released (ou seja, a versão estável) da toolchain. Se você estiver avaliando um novo recurso e quiser usar a guia Preview ou outro tipo de guia (por exemplo, Customer Sampling -cs), clique em "Show all toolchain versions" como mostrado abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/toolchain2.png" style={{width:800, height:'auto'}}/></div>

:::note
**A ToolChain aqui é 3.0.1 ou superior**
:::

#### Instalando o nRF Connect SDK

Na extensão nRF Connect para VS Code, clique em Manage SDK. No menu Manage SDK, podemos instalar ou desinstalar a versão do nRF Connect SDK. Como esta é a primeira vez que usamos a extensão, a interface mostrará apenas duas opções.

Ao clicar em Install SDK, serão listadas todas as versões disponíveis do nRF Connect SDK que podem ser baixadas e instaladas localmente. Selecione a versão do nRF Connect SDK necessária para o desenvolvimento do seu projeto.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/install_sdk.png" style={{width:800, height:'auto'}}/></div>

Se você tiver aberto a pasta do SDK no VS Code, em vez da opção de menu Manage SDK, verá Manage west workspace. Para resolver esse problema, abra outra janela ou pasta no VS Code.

:::note
**O nRF Connect SDK aqui é 3.0.1 ou superior**
:::

:::tip
Se você não vir nenhuma dessas opções, certifique-se de ter instalada a versão mais recente do pacote de extensões nRF Connect para VS Code.
É importante notar que o nRF Connect SDK é independente de IDE, o que significa que você pode optar por usar qualquer IDE ou nenhum. O nRF Connect SDK está disponível por meio da interface de linha de comando (CLI) https://www.nordicsemi.com/Products/Development-tools/nRF-Util (nrfutil), que fará o download e instalará o nRF Connect. No entanto, recomendamos fortemente o uso da nossa extensão nRF Connect para VS Code com o VS Code, pois ela integra não apenas uma interface gráfica de usuário (GUI) conveniente e uma interface de linha de comando (CLI) eficiente, mas também inclui vários recursos que simplificarão muito o desenvolvimento de firmware. Configurar outras IDEs para funcionar com o nRF Connect SDK requer etapas manuais adicionais que estão além do escopo deste curso.
:::

#### Criando programas de usuário

Neste exercício, escreveremos uma aplicação simples baseada no exemplo blinky para controlar o piscar de LEDs em uma placa de desenvolvimento. O mesmo se aplica a todas as placas de desenvolvimento da Nordic Semiconductor suportadas (séries nRF54, nRF53, nRF52, nRF70 ou nRF91). O objetivo é garantir que todas as ferramentas necessárias para compilar e gravar o exemplo estejam configuradas corretamente. O foco é aprender como criar uma aplicação, compilá-la e gravá-la em uma placa de desenvolvimento com chip Nordic usando o modelo “Copy Example”!

- No VS Code, clique no ícone da extensão nRF Connect. Na visualização Welcome, clique em Create New Application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/create_project1.png" style={{width:800, height:'auto'}}/></div>

- Digite blinky na barra de pesquisa e selecione o segundo exemplo Blinky (caminho zephyr/samples/basic/blinky), como mostrado abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/create_project2.png" style={{width:800, height:'auto'}}/></div>

O exemplo Blinky fará com que o LED1 na placa de desenvolvimento pisque continuamente.
Nossa primeira aplicação será baseada no exemplo Blinky. O exemplo Blinky é derivado do bloco de modelo Zephyr no nRF Connect SDK, portanto você verá o nome zephyr no caminho do exemplo: zephyr\samples\basic\blinky.

#### Adicionar a placa XIAO nRF54L15

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar as bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Para começar, **clone o repositório a partir do link do GitHub**`git clone https://github.com/Seeed-Studio/platform-seeedboards.git` na sua pasta local preferida. Depois de clonado, navegue até o diretório `platform-seeedboards/zephyr/`. **Lembre-se deste caminho da pasta `zephyr`**;

Para configurar sua placa para o nRF Connect no VS Code, você pode seguir estas etapas:

- Abra o VS Code e vá para Settings.

- Digite nRF Connect na caixa de pesquisa.

- Encontre o item de configuração Board Roots e clique em Edit in settings.json.

- Adicione o caminho `zephyr` do arquivo de placa XIAO nRF54L15 baixado ao array boardRoots.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config1.jpg" style={{width:600, height:'auto'}}/></div> -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/add_board1.png" style={{width:800, height:'auto'}}/></div>

- Na visualização da aplicação, clique em Add Build Configuration abaixo do nome da aplicação.

- Podemos selecionar o modelo do XIAO nRF54L15 em Board target e selecionar o arquivo prj.config padrão em Base configuration files e, por fim, clicar em `Generate and Build` para compilar o arquivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/add_board2.png" style={{width:800, height:'auto'}}/></div>

#### Download do plug-in de gravação

<Tabs>
<TabItem  value="window" label="Window" default>

**Plug-ins adicionais:**

No Windows, usaremos o gerenciador de pacotes Chocolatey para instalar o OpenOCD.

**1. Abra o PowerShell (Executar como administrador):**

- Na barra de pesquisa do Windows, digite "PowerShell".
- Clique com o botão direito em "Windows PowerShell" e selecione "Run as administrator".

**2. Verifique a Execution Policy do PowerShell:**

- Digite `Get-ExecutionPolicy` e pressione Enter.
- Digite `Get-ExecutionPolicy -List` e pressione Enter.

**3. Instale o Chocolatey:**

- Cole e execute o seguinte comando:

```cpp
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Este comando ignora a execution policy para a sessão atual do PowerShell e instala o Chocolatey. Após a instalação, feche e reabra a janela do PowerShell (ainda executando como administrador).

**4. Instale o OpenOCD:**

- Na nova janela do PowerShell (como administrador), digite:

```cpp
choco install openocd
```

**5. Verifique a instalação do OpenOCD:**

- Digite `Get-Command openocd` e pressione Enter.

- Se a instalação for bem-sucedida, este comando exibirá o caminho para o openocd.exe.

</TabItem>

<TabItem value="mac" label="Mac OS" default>

**Plug-ins adicionais:**

No macOS, usaremos o gerenciador de pacotes Homebrew para instalar as ferramentas necessárias.

**1. Instale o Homebrew (se ainda não estiver instalado):**

- Abra o Terminal.app.

- Execute o seguinte comando:

```cpp
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- Siga as instruções na tela; talvez seja necessário inserir a senha do usuário do macOS. Após a instalação, execute os comandos indicados pelo terminal para adicionar o Homebrew à sua variável de ambiente PATH `(por exemplo, eval "$(/opt/homebrew/bin/brew shellenv)")`. Em seguida, feche e reabra o terminal.

**2. Instale o Ccache:**

No terminal, digite:

```cpp
brew install ccache
```

**3. Instale o OpenOCD:**

No terminal, digite:

```cpp
brew install openocd
```

**4. Verifique a instalação do OpenOCD::**

- Digite `which openocd` e pressione Enter.

- Se a instalação for bem-sucedida, este comando exibirá o caminho para o executável `openocd`.

</TabItem>

</Tabs>

#### Programa de gravação West Flash

- Abra o terminal do nRF

- Basta inserir o comando `west flash`. Para gravar seu dispositivo, simplesmente insira o comando west flash. O caminho destacado em vermelho indica a localização do seu arquivo .elf compilado. Você pode usar esse mesmo caminho para encontrar o arquivo .hex correspondente, que é adequado para programação com um depurador J-Link.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/west_flash_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
Se ocorrer um erro de west flash, isso significa que há um conflito com o plug-in CMake no VS Code, e você precisa remover o plug-in CMake.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/error.jpg" style={{width:800, height:'auto'}}/></div>
:::

Quando gravamos o programa com sucesso no Seeed Studio XIAO nRF54L15 Sense, você pode ver na placa, acima do indicador do usuário, a luz verde piscando sem parar; se o efeito visual nas suas mãos for o mesmo, significa que você teve sucesso!🎊

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light3.gif" style={{width:400, height:'auto'}}/></div>

#### Explicação do programa Blinky

```cpp
/*
 * Copyright (c) 2016 Intel Corporation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <stdio.h>
#include <zephyr/kernel.h>
#include <zephyr/drivers/gpio.h>

/* 1000 msec = 1 sec */
#define SLEEP_TIME_MS   1000

/* The devicetree node identifier for the "led0" alias. */
#define LED0_NODE DT_ALIAS(led0)

/*
 * A build error on this line means your board is unsupported.
 * See the sample documentation for information on how to fix this.
 */
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);

int main(void)
{
int ret;
bool led_state = true;

if (!gpio_is_ready_dt(&led)) {
  return 0;
}

ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE);
if (ret < 0) {
  return 0;
}

while (1) {
  ret = gpio_pin_toggle_dt(&led);
  if (ret < 0) {
    return 0;
  }

  led_state = !led_state;
  printf("LED state: %s\n", led_state ? "ON" : "OFF");
  k_msleep(SLEEP_TIME_MS);
}
return 0;
}
```

**Definição do dispositivo LED**:

- `#define LED0_NODE DT_ALIAS(led0)`: Recupera o identificador do nó da device tree para o alias "led0", permitindo uma referência ao LED independente do hardware.
- `static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios)`: Cria uma estrutura de especificação GPIO (`led`) usando o nó da device tree, contendo detalhes de hardware (pino, porta) para o LED. Um erro de compilação aqui indica hardware não suportado.

**Inicialização da função main()**：

- **Configuração de variáveis**:
  - `int ret`: Armazena valores de retorno de funções para verificar o sucesso das operações.
  - `bool led_state = true`: Acompanha o status do LED (inicializado como "ON").

- **Verificação de prontidão do GPIO**:
  - `if (!gpio_is_ready_dt(&led)) { return 0; }`: Verifica se o hardware GPIO do LED está pronto (por exemplo, driver carregado). Encerra se não estiver pronto.

- **Configuração do GPIO**:
  - `ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE)`: Configura o pino GPIO do LED como saída ativa em nível alto.
  - Encerra em caso de falha (`ret < 0`) para evitar operações inválidas.

**Loop principal**:
É executado em um loop infinito `while (1)` para alternar o LED periodicamente:

- **Alternar o estado do LED**:
  - `ret = gpio_pin_toggle_dt(&led)`: Inverte a saída GPIO do LED (ON ↔ OFF). Encerra em caso de falha.

- **Atualizar o acompanhamento de status**:
  - `led_state = !led_state`: Sincroniza o indicador de status de software com o estado do hardware.

- **Registrar e atrasar**:
  - `printf("LED state: %s\n", led_state ? "ON" : "OFF")`: Imprime o status atual do LED via saída serial.
  - `k_msleep(SLEEP_TIME_MS)`: Pausa por 1000 ms (1 segundo) usando a função de atraso do RTOS do Zephyr, controlando a frequência do piscar.

#### Aprofundando nos internos do nRF Connect SDK

Se você quiser ter uma compreensão mais profunda dos princípios internos do nRF Connect SDK, pode consultar os seguintes cursos:

- [**nRF Connect SDK Fundamentals**](https://academy.nordicsemi.com/courses/nrf-connect-sdk-fundamentals/)

- [**nRF Connect SDK Intermediate**](https://academy.nordicsemi.com/courses/nrf-connect-sdk-intermediate/)

- [**nRF Connect Vscode**](https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html)

</Steppers>

## Restaurar configurações de fábrica

Para as placas XIAO nRF54L15, é fornecido um script de reset de fábrica para recuperar a placa de um estado ruim (por exemplo, quando não é possível fazer upload devido à proteção de gravação da NVM interna). Este script realizará um apagamento em massa da flash e programará um firmware de fábrica.
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/scripts/factory_reset" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Factory Reset</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Localização**
Os scripts estão localizados no diretório scripts/factory_reset/.
**Uso**
O script criará e gerenciará automaticamente um ambiente virtual Python local para instalar as ferramentas necessárias, de modo que possa ser executado imediatamente.

### Window

- Para Windows: navegue até o diretório scripts/factory_reset e execute:

```cpp
.\factory_reset.bat
```

### Linux-MacOS
- Para Linux e macOS: navegue até o diretório scripts/factory_reset e execute:

```cpp
bash factory_reset.sh
```

## Modo de Comutação Sem Fio

Este exemplo demonstra como controlar o switch RF no Seeed Studio XIAO nRF54L15 para alternar entre a placa 

:::
O exemplo a seguir funciona tanto para PlatformIO quanto para nRF Connect SDK. Ele pode ser usado diretamente no PlatformIO, enquanto o SDK exige a adição manual de arquivos. Consulte este [link](https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_getting_started/#battery-powered-board)
:::

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/IN_antenna.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:400, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Antena externa</em></p>
</div>

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-rfsw" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar as bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

- Antena cerâmica e uma antena externa.

- Pressione o botão de usuário (SW0) para alternar entre as antenas cerâmica e externa.

- O LED de usuário indica a seleção atual da antena (LED LIGADO para externa, LED DESLIGADO para cerâmica).

- A antena padrão na inicialização pode ser configurada via prj.conf.

```cpp
/*
 * Copyright (c) 2024 Seeed Technology Co.,Ltd
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/logging/log.h>
#include <zephyr/devicetree.h>

LOG_MODULE_REGISTER(app, CONFIG_LOG_DEFAULT_LEVEL);

/* Devicetree node identifiers */
#define RFSW_REGULATOR_NODE DT_NODELABEL(rfsw_ctl)
#define SW0_NODE            DT_ALIAS(sw0)
#define LED0_NODE           DT_ALIAS(led0)

/* State variables */
static uint8_t onoff_flag = 0;
#ifdef CONFIG_DEFAULT_ANTENNA_EXTERNAL
static bool is_external_antenna = true;
#else
static bool is_external_antenna = false;
#endif

/* GPIO device specs */
/* Manually build gpio_dt_spec for rfsw_ctl */
static const struct gpio_dt_spec rfsw_gpio = {
	.port = DEVICE_DT_GET(DT_GPIO_CTLR(RFSW_REGULATOR_NODE, enable_gpios)),
	.pin = DT_GPIO_PIN(RFSW_REGULATOR_NODE, enable_gpios),
	.dt_flags = DT_GPIO_FLAGS(RFSW_REGULATOR_NODE, enable_gpios),
};
static const struct gpio_dt_spec button = GPIO_DT_SPEC_GET(SW0_NODE, gpios);
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);

/* Button callback data */
static struct gpio_callback button_cb_data;

/* Forward declarations */
void button_pressed(const struct device *dev, struct gpio_callback *cb, uint32_t pins);
void update_antenna_switch(void);

/* Function to update antenna switch and LED */
void update_antenna_switch(void)
{
    int ret;
    is_external_antenna = !is_external_antenna;

    if (is_external_antenna) {
        /* Switch to external antenna */
        LOG_INF("Switching to External Antenna");

        // To get a physical high level (Inactive state), we need to set the logic to '0'
        ret = gpio_pin_set_dt(&rfsw_gpio, 0); 
        if (ret < 0) {
            LOG_ERR("Error setting rfsw-ctl to physical HIGH: %d\n", ret);
        }

        // Turn on the LED (set 0 for on)
        ret = gpio_pin_set_dt(&led, 0); 
        if (ret < 0) {
            LOG_ERR("Error turning on LED: %d\n", ret);
        }

    } else {
        /* Switch back to ceramic antenna */
        LOG_INF("Switching to Ceramic Antenna");

        // To get a physical low level (Active state), we need to set the logic to '1'
        ret = gpio_pin_set_dt(&rfsw_gpio, 1); 
        if (ret < 0) {
            LOG_ERR("Error setting rfsw-ctl to physical LOW: %d\n", ret);
        }

        // Turn off the LED (set 1 for off)
        ret = gpio_pin_set_dt(&led, 1);
        if (ret < 0) {
            LOG_ERR("Error turning off LED: %d\n", ret);
        }
    }
}

/* Button pressed callback function */
void button_pressed(const struct device *dev, struct gpio_callback *cb,
                    uint32_t pins)
{
    update_antenna_switch();
}

int main(void)
{
    int ret;

    /* Check if GPIO devices are ready */
    if (!gpio_is_ready_dt(&rfsw_gpio)) {
        LOG_ERR("RF switch control GPIO not ready\n");
        return -1;
    }
    if (!gpio_is_ready_dt(&button)) {
        LOG_ERR("Button GPIO not ready\n");
        return -1;
    }
    if (!gpio_is_ready_dt(&led)) {
        LOG_ERR("LED GPIO not ready\n");
        return -1;
    }

    /* Configure GPIO pins */
    ret = gpio_pin_configure_dt(&rfsw_gpio, GPIO_OUTPUT);
    if (ret < 0) {
        LOG_ERR("Error configuring rfsw-ctl: %d\n", ret);
        return ret;
    }

    /* Configure LED as output, default off */
    ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE);
    if (ret < 0) {
        LOG_ERR("Error configuring LED: %d\n", ret);
        return ret;
    }

    /* Set initial LED state based on antenna selection */
    if (is_external_antenna) {
        // External antenna
        LOG_INF("Initial state: External Antenna");
        ret = gpio_pin_set_dt(&rfsw_gpio, 0);
        if (ret < 0) {
            LOG_ERR("Error setting rfsw-ctl to physical HIGH: %d\n", ret);
        }
        ret = gpio_pin_set_dt(&led, 0);  // Turn on LED
        if (ret < 0) {
            LOG_ERR("Error turning on LED: %d\n", ret);
        }
    } else {
        // Ceramic antenna
        LOG_INF("Initial state: Ceramic Antenna");
        ret = gpio_pin_set_dt(&rfsw_gpio, 1);
        if (ret < 0) {
            LOG_ERR("Error setting rfsw-ctl to physical LOW: %d\n", ret);
        }
        ret = gpio_pin_set_dt(&led, 1);  // Turn off LED
        if (ret < 0) {
            LOG_ERR("Error turning off LED: %d\n", ret);
        }
    }

    /* Configure button as input */
    ret = gpio_pin_configure_dt(&button, GPIO_INPUT);
    if (ret < 0) {
        LOG_ERR("Error configuring button: %d\n", ret);
        return ret;
    }

    /* Configure button interrupt */
    ret = gpio_pin_interrupt_configure_dt(&button, GPIO_INT_EDGE_TO_ACTIVE);
    if (ret < 0) {
        LOG_ERR("Error configuring button interrupt: %d\n", ret);
        return ret;
    }

    /* Initialize button callback */
    gpio_init_callback(&button_cb_data, button_pressed, BIT(button.pin));
    gpio_add_callback(button.port, &button_cb_data);

    LOG_INF("Antenna switch example started. Press SW0 to switch.\n");
    return 0;
}
```

:::tip
Se você deseja alternar entre a antena externa ou interna, precisa modificar o arquivo zephyr/prj.conf.,
Descomente # CONFIG_DEFAULT_ANTENNA_EXTERNAL=y para habilitar a antena externa. Se estiver usando a antena interna, comente a linha.
:::

```cpp
CONFIG_GPIO=y
CONFIG_SERIAL=y
CONFIG_LOG=y
CONFIG_CONSOLE=y
CONFIG_UART_CONSOLE=y
CONFIG_SHELL_BACKEND_SERIAL=y
CONFIG_SHELL_BACKEND_DUMMY=n
CONFIG_PM_DEVICE=y
CONFIG_NRFX_POWER=y
CONFIG_POWEROFF=y

CONFIG_BT=y
CONFIG_BT_PERIPHERAL=y
CONFIG_BT_DEVICE_NAME="zephyr-ble"

# Enable this option to default to external antenna
# CONFIG_DEFAULT_ANTENNA_EXTERNAL=y
```



## Acessar os pinos J-Link para gravar um programa

Se você quiser usar o JLink para programação, pode seguir os passos abaixo. No entanto, sugerimos que você use a porta serial integrada na placa Seeed Stduio XIAO nRF54L15 para programação, o que será muito mais conveniente.

**Hardware necessário**

- [Seeed Studio XIAO nRF54L15](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Jlink](https://www.segger.com/downloads/jlink/)

:::tip
Você precisa baixar a versão mais recente do J-Link para ter suporte ao modelo de placa nRF54L15.
:::

**Software necessário**

É necessário baixar o software [Segger](https://www.segger.com/downloads/jlink/) no site.

- **Passo 1.** Use o Jlink para conectar os pinos abaixo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link.png" alt="pir" width={250} height="auto" /></p>

- **Passo 2.** Inicie o J-Flash e procure por nRF54L15_M33, criando um novo projeto:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link4.jpg" alt="pir" width={700} height="auto" /></p>

- **Passo 3.** Clique em "Target" e depois selecione "Connect".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link3.jpg" alt="pir" width={700} height="auto" /></p>

- **Passo 4.** Arraste o arquivo bin ou o [arquivo hex](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/zephyr.hex) para o software. Em seguida, pressione F4 e F5 nessa ordem. A regravação estará concluída.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link2.jpg" alt="pir" width={700} height="auto" /></p>

## Placa alimentada por bateria

O XIAO nRF54L15 possui um chip de gerenciamento de energia integrado que permite que o XIAO nRF54L15 seja alimentado de forma independente usando uma bateria ou que a bateria seja carregada através da porta USB do XIAO nRF54L15.

Se você quiser conectar a bateria ao XIAO, recomendamos que você adquira uma bateria de lítio recarregável qualificada de 3,7 V. Ao soldar a bateria, tenha cuidado para distinguir entre os terminais positivo e negativo.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/battery_connect.jpg" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:500, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Esquemático de Conexão da Bateria</em></p>
</div>

**Instruções para o uso de baterias:**

1. Utilize baterias qualificadas que atendam às especificações.
2. O XIAO pode ser conectado ao seu computador por meio de um cabo de dados enquanto utiliza a bateria; fique tranquilo, pois o XIAO possui um chip de proteção de circuito integrado, sendo seguro.
3. O XIAO nRF54L15 não terá nenhum LED aceso quando estiver alimentado por bateria (a menos que você tenha escrito um programa específico). Portanto, não julgue se o XIAO nRF54L15 está funcionando ou não pela condição do LED; avalie isso de forma adequada por meio do seu programa.

Ao mesmo tempo, projetamos uma luz indicadora vermelha para o carregamento da bateria, que, por meio da indicação luminosa, informa ao usuário o estado atual da bateria durante a carga.

<!-- 1. When XIAO nRF54L15 is not connected to the battery, the red light comes on when the Type-C cable is connected and goes off after 30 seconds.
2. The red light flashes when the battery is connected and the Type-C cable is connected for charging.
3. When connecting Type-C to charge the battery fully, the red light turns off. -->

:::caution
Tenha cuidado para não causar curto-circuito entre os terminais positivo e negativo e queimar a bateria e o equipamento durante a soldagem.
:::

### Detecção de Tensão da Bateria
:::tip

Se você encontrar uma situação em que o XIAO nRF54L15 falha ao inicializar quando alimentado apenas por uma bateria de lítio de 3,7 V após gravar o programa, consulte as soluções abaixo.

Para a versão atual de hardware (v1.0), recomendamos gerenciar duas configurações de build para alternar facilmente entre **Depuração em Bancada** (USB conectado, UART habilitado) e **Implantação com Bateria** (Autônomo, UART desabilitado).

**Cenário A: Depuração em Bancada via USB**

**Quando usar:** Você está escrevendo código, gravando firmware e precisa visualizar logs por meio da **Porta Serial USB**.

**Configuração (`prj_uart.conf`):**
Crie um novo arquivo chamado `prj_uart.conf` no diretório do seu projeto. Este arquivo de overlay irá reativar temporariamente a UART para fins de depuração.

```properties
# Enable UART for USB debugging
CONFIG_SERIAL=y
CONFIG_UART_CONSOLE=y
```

```cpp
# Optional: Keep RTT enabled as a secondary logging backend
CONFIG_USE_SEGGER_RTT=y
CONFIG_RTT_CONSOLE=y
CONFIG_LOG_BACKEND_RTT=y
CONFIG_LOG_BACKEND_UART=y
```

**Como Compilar:**
Adicione o argumento de configuração de overlay ao compilar o seu projeto.

```bash
# Build with UART enabled for USB debugging
west build -p always -d build_uart -b xiao_nrf54l15/nrf54l15/cpuapp . -DOVERLAY_CONFIG="prj_uart.conf"
```

**Cenário B: Implantação com Bateria (Padrão)**

**Quando usar:** Você terminou a depuração e pretende alimentar a placa apenas pelos **Pads da Bateria**.

**Configuração (`prj.conf`):**
Modifique o arquivo principal `prj.conf` para desabilitar a UART por padrão. Isso garante que a placa possa inicializar corretamente quando alimentada por uma bateria.

```cpp
# Disable UART to ensure successful boot on battery
CONFIG_SERIAL=n
CONFIG_UART_CONSOLE=n
```

```cpp
# Use RTT for low-power logging (requires J-Link)
CONFIG_USE_SEGGER_RTT=y
CONFIG_RTT_CONSOLE=y
CONFIG_LOG=y
CONFIG_LOG_BACKEND_RTT=y
```

**Como Compilar:**
Compile normalmente sem o argumento de overlay.

```bash
# Build default firmware (Battery Safe)
west build -p always -d build_batt -b xiao_nrf54l15/nrf54l15/cpuapp .
```

**Resumo**

- **Conectado via USB**  Use o overlay **`prj_uart.conf`** para habilitar o Monitor Serial.
- **Rodando com Bateria**  Use o **`prj.conf`** padrão para garantir que o dispositivo inicialize sem problemas.

:::

O XIAO nRF54L15 integra um recurso de detecção de tensão da bateria que se concentra em gerenciar de forma eficiente as medições de energia da bateria usando o switch de carga TPS22916CYFPR. Este guia focará em analisar a implementação de software da detecção de bateria **(especialmente o código main.c)** e orientará você sobre como implantar e usar facilmente esse recurso em um ambiente PlatformIO, evitando a complexidade do Zephyr NCS SDK.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/battery_A.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:600, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Esquemático de Detecção da Bateria</em></p>
</div>

O que o chip TPS22916CYFPR faz:

- Ele é um switch de energia inteligente que controla o liga-desliga da tensão da bateria sob demanda. Quando é necessário medir a tensão da bateria, ele liga, conectando a bateria ao circuito divisor de tensão; quando não é necessário medir, ele desliga, interrompendo a conexão.

- Em que esse recurso nos ajuda?
Por meio desse mecanismo de comutação sob demanda, o chip reduz significativamente o consumo de corrente desnecessário e estende de forma eficaz a vida útil da bateria. Combinado com o circuito divisor de tensão subsequente e o ADC (conversor analógico-digital) do nRF54L15, o XIAO nRF54L15 é capaz de monitorar com precisão a carga restante da bateria, fornecendo uma otimização importante de autonomia para aplicações de baixa potência alimentadas por bateria, como dispositivos de IoT.

:::note
O código de exemplo a seguir foi projetado para PlatformIO, mas também é compatível com o nRF Connect SDK.

Usando o XIAO nRF54L15 no PlatformIO
Se você quiser usar o XIAO nRF54L15 no PlatformIO, consulte este tutorial para configurá-lo: [XIAO nRF54L15 PlatformIO Configuration](https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_with_platform_io/).

:::
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-battery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Adicionar overlay e modificar o arquivo conf

Se você quiser usar esta rotina de bateria no nRF Connect SDK, será necessário adicionar o app.overlay e modificar o arquivo prj.conf.

- Crie um novo arquivo chamado `app.overlay` no diretório do projeto. Em seguida, cole o código abaixo nele e, por fim, pressione Ctrl + S para salvar.

  - O arquivo de overlay estende a camada de descrição de hardware e personaliza as conexões físicas de hardware por meio da device tree. Ele não modifica a lógica do código, mas declara os detalhes reais do hardware para garantir que o driver possa inicializar corretamente o dispositivo físico.
<br />
  <details>

  <summary>código do app.overlay</summary>

  ```cpp
  / {
  /*
    * @brief Device Tree Overlay for XIAO nRF54L15
    *
    * This file customizes the base board device tree to configure
    * peripherals for a specific application, including:
    * - User-defined ADC channels
    * - PWM-controlled LED
    * - Buttons and a relay
    * - E-paper display (UC8179) via SPI
    * - OLED display (SSD1306) via I2C
    *
    * To switch between the two displays, simply uncomment one and comment
    * out the other in the "chosen" node below.
    */

  /************************************************************
    * Aliases for easy access to devices in application code
    ************************************************************/
  aliases {
    pwm-led = &pwm0_led0;
    sw1 = &xiao_button0;
    relay0 = &xiao_relay0;
  };

  /************************************************************
    * Display selection (choose one if multiple)
    ************************************************************/
  chosen {
    zephyr,display = &uc8179_7inch5_epaper_gdew075t7;
    zephyr,display = &ssd1306_128x64;
  };

  /************************************************************
    * PWM LED, Button, and Relay configuration
    ************************************************************/
  pwm_leds {
    compatible = "pwm-leds";
    pwm0_led0: my_pwm_led {
      // PWM channel 0 on PWM instance 20
      // PWM_MSEC(20) sets a period of 20ms
      pwms = <&pwm20 0 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
      status = "okay";
    };
  };

  buttons {
    compatible = "gpio-keys";
    xiao_button0: button_0 {
      // Connect to the XIAO nRF54L15 pin D1
      // GPIO_PULL_UP ensures the pin is high when the button is not pressed
      // GPIO_ACTIVE_LOW means the button press drives the pin low
      gpios = <&xiao_d 1 (GPIO_PULL_UP | GPIO_ACTIVE_LOW)>;
      zephyr,code = <INPUT_KEY_0>;
    };
  };

  relay {
    compatible = "gpio-leds";
    xiao_relay0: relay_0 {
      // Connect to the XIAO nRF54L15 pin D0
      gpios = <&xiao_d 0 GPIO_ACTIVE_HIGH>;
    };
  };

  /************************************************************
    * Local nodes that don't modify existing ones
    ************************************************************/
  zephyr,user {
    io-channels = <&adc 0>, <&adc 1>, <&adc 2>, <&adc 3>,
            <&adc 4>, <&adc 5>, <&adc 6>, <&adc 7>;
  };

  // MIPI-DBI SPI interface for the E-paper display
  mipi_dbi_xiao_epaper {
    compatible = "zephyr,mipi-dbi-spi";
    spi-dev = <&xiao_spi>;
    // D3 pin for Data/Command control
    dc-gpios = <&xiao_d 3 GPIO_ACTIVE_HIGH>;
    // D0 pin for Reset
    reset-gpios = <&xiao_d 0 GPIO_ACTIVE_LOW>;
    write-only;
    #address-cells = <1>;
    #size-cells = <0>;

    uc8179_7inch5_epaper_gdew075t7: uc8179@0 {
      compatible = "gooddisplay,gdew075t7", "ultrachip,uc8179";
      // Max SPI frequency for the display
      mipi-max-frequency = <4000000>;
      reg = <0>;
      width = <800>;
      height = <480>;
      // D2 pin for Busy signal from the display
      busy-gpios = <&xiao_d 2 GPIO_ACTIVE_LOW>;
      softstart = [17 17 17 17];
      full {
        pwr = [07 07 3f 3f];
        cdi = <07>;
        tcon = <0x22>;
      };
    };
  };
  };

  /************************************************************
  * Device fragments (modifying nodes from the base board DTS)
  ************************************************************/
  // PWM instance 20
  &pwm20 {
  status = "okay";
  pinctrl-0 = <&pwm20_default>;
  pinctrl-1 = <&pwm20_sleep>;
  pinctrl-names = "default", "sleep";
  };

  // GPIO pin control
  &pinctrl {
  pwm20_default: pwm20_default {
    group1 {
      // Configure PWM channel 0 on P1.04 pin (Pin D0)
      psels = <NRF_PSEL(PWM_OUT0, 1, 4)>;
    };
  };

  pwm20_sleep: pwm20_sleep {
    group1 {
      psels = <NRF_PSEL(PWM_OUT0, 1, 4)>;
      low-power-enable;
    };
  };
  };

  // PDM instance 20 for DMIC
  dmic_dev: &pdm20 {
  status = "okay";
  };

  // Power configuration
  &pdm_imu_pwr {
  /delete-property/ regulator-boot-on;
  };

  // UART instance 20
  &uart20 {
  current-speed = <921600>;
  };

  // SPI peripheral
  &xiao_spi {
  status = "okay";
  // D1 pin for Chip Select
  cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>;
  };

  // I2C peripheral
  &xiao_i2c {
  status = "okay";
  zephyr,concat-buf-size = <2048>;

  ssd1306_128x64: ssd1306@3c {
    compatible = "solomon,ssd1306fb";
    reg = <0x3c>;
    width = <128>;
    height = <64>;
    segment-offset = <0>;
    page-offset = <0>;
    display-offset = <0>;
    multiplex-ratio = <63>;
    segment-remap;
    com-invdir;
    prechargep = <0x22>;
  };
  };
  ```

  </details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/add_overlay1.png" style={{width:800, height:'auto'}}/></div>

- Adicione o seguinte conteúdo no arquivo prj.conf

  - prj.conf é o arquivo de configuração principal do projeto Zephyr. Ele é gerenciado pelo sistema Kconfig para a seleção de funções de software durante a compilação. Ele determina quais drivers (como ADC, display, Bluetooth), middlewares (como LVGL) e serviços de sistema (como registro de logs, gerenciamento de memória) são incluídos no firmware e define seus parâmetros de comportamento (como nível de log, tamanho do heap). Por fim, pressione Ctrl + S para salvar.
<br />
  <details>

  <summary>código prj.conf</summary>

    ```python
    # =========================================================
    # Basic system configuration
    # =========================================================
    CONFIG_GPIO=y
    CONFIG_I2C=y
    CONFIG_ADC=y
    CONFIG_ADC_ASYNC=y
    CONFIG_PWM=y
    CONFIG_SENSOR=y
    CONFIG_INPUT=y

    # =========================================================
    # Power management
    # =========================================================
    CONFIG_PM_DEVICE=y
    CONFIG_NRFX_POWER=y
    CONFIG_POWEROFF=y
    CONFIG_HWINFO=y
    CONFIG_CRC=y

    # =========================================================
    # Serial port and console configuration
    # =========================================================
    CONFIG_SERIAL=y
    CONFIG_CONSOLE=y
    CONFIG_STDOUT_CONSOLE=y
    CONFIG_UART_CONSOLE=y
    CONFIG_UART_ASYNC_API=y
    CONFIG_UART_INTERRUPT_DRIVEN=y
    CONFIG_UART_NRFX_UARTE_ENHANCED_RX=y
    CONFIG_CBPRINTF_FP_SUPPORT=y

    # =========================================================
    # Log and Debugging
    # =========================================================
    CONFIG_LOG=y
    CONFIG_LOG_PRINTK=y
    CONFIG_LOG_MODE_IMMEDIATE=y
    CONFIG_LOG_DEFAULT_LEVEL=3
    CONFIG_PWM_LOG_LEVEL_DBG=y
    CONFIG_PRINTK=y

    # =========================================================
    #  Memory and Stack
    # =========================================================
    CONFIG_MAIN_STACK_SIZE=4096
    CONFIG_HEAP_MEM_POOL_SIZE=16384
    CONFIG_NEWLIB_LIBC=y
    CONFIG_NEWLIB_LIBC_FLOAT_PRINTF=y

    # =========================================================
    # Bluetooth configuration
    # =========================================================
    CONFIG_BT=y
    CONFIG_BT_PERIPHERAL=y
    CONFIG_BT_DEVICE_NAME="zephyr-ble"

    # =========================================================
    # Audio configuration
    # =========================================================
    CONFIG_AUDIO=y
    CONFIG_AUDIO_DMIC=y

    # =========================================================
    # Display and Graphics
    # =========================================================
    CONFIG_DISPLAY=y
    CONFIG_MIPI_DBI_SPI=y
    CONFIG_SSD1306=y
    CONFIG_CHARACTER_FRAMEBUFFER=y

    # LVGL Graphics Library
    CONFIG_LVGL=y
    CONFIG_LV_Z_MEM_POOL_SIZE=49152
    CONFIG_LV_Z_SHELL=y
    CONFIG_LV_USE_MONKEY=y
    CONFIG_LV_USE_LABEL=y
    CONFIG_LV_COLOR_DEPTH_1=y
    CONFIG_LV_FONT_MONTSERRAT_12=y
    CONFIG_LV_FONT_MONTSERRAT_14=y
    CONFIG_LV_FONT_MONTSERRAT_16=y
    CONFIG_LV_FONT_MONTSERRAT_18=y
    CONFIG_LV_FONT_MONTSERRAT_24=y
    CONFIG_LV_USE_FONT_COMPRESSED=y

    # =========================================================
    # Shell configuration
    # =========================================================
    CONFIG_SHELL=y
    CONFIG_SHELL_BACKEND_DUMMY=y
    ```

  </details>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/add_prj1.png" style={{width:800, height:'auto'}}/></div>

### Código principal

```cpp
#include <inttypes.h>
#include <stddef.h>
#include <stdint.h>
#include <zephyr/device.h>
#include <zephyr/devicetree.h>
#include <zephyr/drivers/regulator.h>
#include <zephyr/drivers/adc.h>
#include <zephyr/kernel.h>


#if !DT_NODE_EXISTS(DT_PATH(zephyr_user)) || \
 !DT_NODE_HAS_PROP(DT_PATH(zephyr_user), io_channels)
#error "No suitable devicetree overlay specified"
#endif

#define DT_SPEC_AND_COMMA(node_id, prop, idx) \
 ADC_DT_SPEC_GET_BY_IDX(node_id, idx),

/* Data of ADC io-channels specified in devicetree. */
static const struct adc_dt_spec adc_channels[] = {
 DT_FOREACH_PROP_ELEM(DT_PATH(zephyr_user), io_channels,
       DT_SPEC_AND_COMMA)};

static const struct device *const vbat_reg = DEVICE_DT_GET(DT_NODELABEL(vbat_pwr));

int main(void)
{
 int err;
 uint16_t buf;
 int32_t val_mv;
 struct adc_sequence sequence = {
  .buffer = &buf,
  /* buffer size in bytes, not number of samples */
  .buffer_size = sizeof(buf),
 };

 regulator_enable(vbat_reg);
 k_sleep(K_MSEC(100));

 /* Configure channels individually prior to sampling. */
 if (!adc_is_ready_dt(&adc_channels[7]))
 {
  printf("ADC controller device %s not ready\n", adc_channels[7].dev->name);
  return 0;
 }

 err = adc_channel_setup_dt(&adc_channels[7]);
 if (err < 0)
 {
  printf("Could not setup channel #7 (%d)\n", err);
  return 0;
 }

 (void)adc_sequence_init_dt(&adc_channels[7], &sequence);

 err = adc_read_dt(&adc_channels[7], &sequence);
 if (err < 0)
 {
  printf("Could not read (%d)\n", err);
  return 0;
 }

 /*
  * If using differential mode, the 16 bit value
  * in the ADC sample buffer should be a signed 2's
  * complement value.
  */
 if (adc_channels[7].channel_cfg.differential)
 {
  val_mv = (int32_t)((int16_t)buf);
 }
 else
 {
  val_mv = (int32_t)buf;
 }
 err = adc_raw_to_millivolts_dt(&adc_channels[7],
           &val_mv);
 /* conversion to mV may not be supported, skip if not */
 if (err < 0)
 {
  printf(" value in mV not available\n");
 }
 else
 {
  printf("bat vol = %" PRId32 " mV\n", val_mv * 2);
 }

 regulator_disable(vbat_reg);
 return 0;
}
```

## Recursos

### Seeed Studio XIAO nRF54L15

**Projeto de hardware**
- **📄[Datasheet]** [Nordic nRF54L15 Datasheet](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Nordic_nRF54L15_Datasheet_v1.0.pdf )
- **📄[Esquemático]** [XIAO nRF54L15 Schematic](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Schematic.pdf )
- **🗃️[Arquivos de projeto de PCB]** [XIAO nRF54L15 KiCad Project](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_KICAD.zip )
- **🗃️[Bibliotecas de projeto de PCB]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de pinagem]** [XIAO nRF54L15 Pinout Sheet](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15datasheet.xlsx )

**Mecânico**
- **🗃️[Dimensões 2D]** [XIAO nRF54L15 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15(Sense)_DXF.zip )

### Seeed Studio XIAO nRF54L15 Sense

**Projeto de hardware**
- **📄[Datasheet]** [Nordic nRF54L15 Datasheet](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Nordic_nRF54L15_Datasheet_v1.0.pdf )
- **📄[Esquemático]** [XIAO nRF54L15 Sense Schematic](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Sense_Schematic.pdf )
- **🗃️[Arquivos de projeto de PCB]** 
  - [XIAO nRF54L15 Sense KiCad Project](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Sense_KICAD.zip )
  - [XIAO nRF54L15 Sense Flux.ai Project](https://www.flux.ai/seeedstudio/seeed-studio-xiao-nrf54l15-sense )
- **🗃️[Bibliotecas de projeto de PCB]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **🗃️[Diagrama de pinagem]** [XIAO nRF54L15 Sense Pinout Sheet](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15datasheet.xlsx )

**Mecânico**
- **📄[Dimensões 2D]** [XIAO nRF54L15 Sense Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15(Sense)_DXF.zip )
- **🗃️[Dimensões 3D]** [XIAO nRF54L15 Sense 3D imensions](https://grabcad.com/library/seeed-studio-xiao-nrf54l15-sense-1 )

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
