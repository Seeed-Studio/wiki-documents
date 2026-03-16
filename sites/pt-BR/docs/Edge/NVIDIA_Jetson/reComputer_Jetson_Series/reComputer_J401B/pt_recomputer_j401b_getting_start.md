---
description: O reComputer J401B é um dispositivo de borda de IA compacto e de alto desempenho com módulos NVIDIA Jetson Orin, oferecendo interfaces ricas de E/S e suporte ao JetPack 5.1.3 até 6.2 para aplicações de IA versáteis. Este guia abrange suas especificações, instruções de gravação e uso de interfaces para desenvolvimento e implantação.
title: Primeiros passos com o reComputer J401B
keywords:
  - reComputer
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/J401B/recomputer-j401b_1.webp
slug: /recomputer_j401b_getting_start
sku: 114993486,114993487,114993489,114993488,E2025031201
last_update:
  date: 4/27/2025
  author: Youjiang
createdAt: '2023-03-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_j401b_getting_start/
---

# Primeiros passos com o reComputer J401B

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401B/recomputer-j401b_1.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J401B-optional-accessories.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
</div>

## Introdução

A série reComputer J401B é uma evolução da série reComputer Classic. O reComputer J4011B com módulos NVIDIA Jetson Orin NX 8GB é um dispositivo de borda de IA poderoso e compacto, com interfaces ricas: 2x USB 3.2, HDMI, Ethernet, M.2 Key E para módulo Wi-Fi, M.2 Key M para SSD, mini-PCIe para módulo LTE, CAN, conector de 40 pinos e mais.

## Recursos

- **Construa a Plataforma de IA Embarcada Mais Poderosa:** Compatível com o módulo Jetson Orin NX, oferecendo até 100 TOPS.

- **Projetado Tanto para Desenvolvimento quanto para Produção:** Equipado com um conjunto rico de E/S: 2x USB3.2, HDMI, Ethernet, M.2 Key M, M.2 Key E, mini-PCIe, GPIO de 40 pinos, etc. Suporta múltiplas comunicações com e sem fio, incluindo Wi-Fi e LTE

- **Vá Imediatamente para o Mercado:** JetPack5.1.3 pré-instalado, BSP de SO Linux pronto

- **Certificações incluem** ROHS, CE, FCC, KC, UKCA, REACH

- **Fornecimento de Longa Duração:** Vida útil de produção: até pelo menos 2032

## Especificações

<table>
  <thead>
    <tr>
      <th>Especificações</th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3010B-p-6404.html">reComputer J3010B</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3011B-p-6405.html">reComputer J3011B</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4011B-p-6407.html">reComputer J4011B</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4012B-p-6406.html">reComputer J4012B</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Módulo</td>
      <td>Jetson Orin Nano 4GB</td>
      <td>Jetson Orin Nano 8GB</td>
      <td>Jetson Orin NX 8GB</td>
      <td>Jetson Orin NX 16GB</td>
    </tr>
    <tr>
      <td>Desempenho de IA</td>
      <td>20 TOPS</td>
      <td>40 TOPS</td>
      <td>70 TOPS</td>
      <td>100 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>GPU NVIDIA Ampere com 512 núcleos e 16 Tensor Cores</td>
      <td>GPU NVIDIA Ampere com 1024 núcleos e 32 Tensor Cores</td>
      <td colspan='2' align='center'>GPU NVIDIA Ampere com 1024 núcleos e 32 Tensor Cores</td>
    </tr>
    <tr>
      <td>Frequência Máx. da GPU</td>
      <td colSpan='2' align='center'>625 MHz</td>
      <td>765 MHz</td>
      <td>918 MHz</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan='2'>CPU de 6 núcleos Arm® Cortex®-A78AE v8.2 64-bit<br />1,5MB L2 + 4MB L3</td>
      <td>CPU de 6 núcleos Arm® Cortex®-A78AE v8.2 64-bit 1,5MB L2 + 4MB L3</td>
      <td>CPU de 8 núcleos Arm® Cortex®-A78AE v8.2 64-bit 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Frequência Máx. da CPU</td>
      <td colSpan='2' align='center'>1,5 GHz</td>
      <td colSpan='2' align='center'>2 GHz</td>
    </tr>
    <tr>
      <td>Memória</td>
      <td>4GB 64-bit LPDDR5<br />34 GB/s</td>
      <td>8GB 128-bit LPDDR5<br />68 GB/s</td>
      <td>8GB 128-bit LPDDR5 102,4GB/s</td>
      <td>16GB 128-bit LPDDR5 102,4GB/s</td>
    </tr>
    <tr>
      <td>Acelerador DL</td>
      <td colSpan='2' align='center'>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>Frequência Máx. da DLA</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>614 MHz</td>
    </tr>
    <tr>
      <td>Acelerador de Visão</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>1x PVA v2</td>
    </tr>
    <tr>
      <td>Armazenamento</td>
      <td colSpan='4' align='center'>SSD NVMe de 128GB</td>
    </tr>
    <tr>
      <td>Codificador de Vídeo</td>
      <td colSpan='2' align='center'>1080p30 suportado por 1-2 núcleos de CPU</td>
      <td colSpan='2' align='center'>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de Vídeo</td>
      <td colSpan='2' align='center'>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan='2' align='center'>1x 8K30 (H.265) | 2x 4K60 (H.265) | 4x 4K30 (H.265)<br />9x 1080p60 (H.265) | 18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td colSpan='4' align='center'>1* HDMI 2.1</td>
    </tr>
    <tr>
      <td>Câmera CSI</td>
      <td colSpan='4' align='center'>2* CSI (2 trilhas, 15 pinos)</td>
    </tr>
    <tr>
      <td>Rede</td>
      <td colSpan='4' align='center'>1* Ethernet Gigabit (10/100/1000M)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan='4' align='center'>2* USB 3.2 Type-A (10Gbps); 1* USB2.0 Type-C (Modo Dispositivo)</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td colSpan='4' align='center'>1* M.2 Key M</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td colSpan='4' align='center'>1* M.2 Key E</td>
    </tr>
    <tr>
      <td>Mini PCIe</td>
      <td colSpan='4' align='center'>1* mini-PCIe para módulo LTE</td>
    </tr>
    <tr>
      <td>Ventoinha</td>
      <td colSpan='4' align='center'>1* conector de ventoinha de 4 pinos (5V PWM)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan='4' align='center'>1* CAN</td>
    </tr>
    <tr>
      <td>Porta Multifuncional</td>
      <td colSpan='4' align='center'>1* cabeçalho de expansão de 40 pinos, 1* cabeçalho de controle e UART de 12 pinos</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan='4' align='center'>RTC de 2 pinos, soquete RTC (compatível com CR1220, mas não incluída)</td>
    </tr>
    <tr>
      <td>Alimentação</td>
      <td colSpan='4' align='center'> DC 9-19V via conector DC 5525 </td>
    </tr>
    <tr>
      <td>Fonte de Alimentação</td>
      <td colSpan='4' align='center'>Adaptador de energia não incluído</td>
    </tr>
    <tr>
      <td>Temperatura</td>
      <td colSpan='4' align='center'>-10℃~60℃</td>
    </tr>
    <tr>
      <td>Mecânico</td>
      <td colSpan='4' align='center'>130mm x120mm x 58,5mm</td>
    </tr>
  </tbody>
</table>

## Gravar o JetPack

Aqui, mostraremos como gravar o [Jetpack](https://developer.nvidia.com/embedded/jetpack) em um SSD NVMe conectado ao reComputer J4012B/ J4011B/ J3010B e J3011B. Todos esses dispositivos vêm com a placa-mãe J401B interna e o procedimento de gravação é o mesmo para todos.

:::danger
A série reComputer J401B vem com o JetPack 5.1.3 pré-instalado no SSD NVMe incluído, portanto você não precisa gravá-lo. No entanto, se quiser gravá-lo novamente com o JetPack, pode seguir este guia.
:::

### Módulo Suportado

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### Pré-requisitos

- Computador Host com Ubuntu
- reComputer J4012B/ J4011B/ J3010B ou J3011B
- Cabo de transmissão de dados USB Type-C

:::info
Recomendamos que você use dispositivos host físicos com Ubuntu em vez de máquinas virtuais.
Consulte a tabela abaixo para preparar a máquina host.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> Versão JetPack </td>
        <td class="dbon" colspan="3"> Versão Ubuntu (Computador Host) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
    </tr>
    <tr>
        <td >JetPack 5.x</td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::

:::note

- Não recomendamos o uso de máquinas virtuais e Ubuntu com arquitetura ARM para gravação.

:::

### Entrar no Modo de Recuperação Forçada

Antes de prosseguirmos para as etapas de instalação, precisamos garantir que o dispositivo Jetson esteja em modo de recuperação forçada.

Consulte as etapas a seguir para colocar o dispositivo Jetson em modo de recuperação forçada.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/j401_set_recovery.gif" /></div>

:::note
A placa-mãe no GIF animado é a J401, mas não se preocupe — as etapas para entrar no modo de recuperação forçada são as mesmas para as placas-mãe J401 e J401B.
:::

<details>

<summary> Passo a Passo </summary>

**Passo 1.** Use um fio jumper para conectar o pino **FC REC** e o pino **GND**.

<table align="center">
<thead>
  <tr>
    <th> </th>
    <th>Cabeçalho de Botões</th>
    <th>Descrição</th>
    <th>Cabeçalho de Botões</th>
    <th>Descrição</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="6"><div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/reComputer-J4012/1.png"/></div></td>
    <td>1</td>
    <td>PWR BTN</td>
    <td>7</td>
    <td>AUTO ON</td>
  </tr>
  <tr>
    <td>2</td>
    <td>GND</td>
    <td>8</td>
    <td>DIS</td>
  </tr>
  <tr>
    <td>3</td>
    <td>FC REC</td>
    <td>9</td>
    <td>UART TXD</td>
  </tr>
  <tr>
    <td>4</td>
    <td>GND</td>
    <td>10</td>
    <td>UART RXD</td>
  </tr>
  <tr>
    <td>5</td>
    <td>SYS RET</td>
    <td>11</td>
    <td>LED +</td>
  </tr>
  <tr>
    <td>6</td>
    <td>GND</td>
    <td>12</td>
    <td>LED -</td>
  </tr>
</tbody>
</table>

**Passo 2.** Ligue o reComputer conectando o cabo incluído do adaptador de energia e conecte a placa ao PC host Ubuntu com um cabo de transmissão de dados USB Type-C

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/2.png"/></div>

**Passo 3.** No PC host Linux, abra uma janela do Terminal e insira o comando `lsusb`. Se o conteúdo retornado tiver uma das seguintes saídas de acordo com o Jetson SoM que você usa, então a placa está em modo de recuperação forçada.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

A imagem abaixo é para Orin NX 16GB

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"/></div>

**Passo 4.** Remova o fio jumper

</details>

### Gravar o sistema Jetpack OS

:::note
Antes de prosseguir para a gravação, deve‑se notar que o módulo Jetson Orin NX suporta apenas JetPack 5.1 e superior, enquanto o módulo Jetson Orin Nano suporta apenas JetPack 5.1.1 e superior.
:::

Primeiro, instale as dependências necessárias abaixo no PC host com Ubuntu antes de prosseguir para gravar o JetPack.

```sh
sudo apt install qemu-user-static sshpass abootimg nfs-kernel-server libxml2-utils binutils -y
```

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.1" label="JP5.1.1">

Aqui usaremos NVIDIA L4T 35.3.1 para instalar o Jetpack 5.1.1 no reComputer

**Passo 1:** [Baixe](https://developer.nvidia.com/embedded/jetson-linux-r3531) os drivers NVIDIA no PC host. Os drivers necessários são mostrados abaixo:

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

**Passo 2:** Extraia **Jetson_Linux_R35.3.1_aarch64** e **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64** navegando até a pasta que contém esses arquivos, aplique as alterações e instale os pré‑requisitos necessários

```sh
tar xf Jetson_Linux_R35.3.1_aarch64
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Passo 3 (Opcional):** Configure seu nome de usuário, senha e hostname para que você não precise inserir o assistente de instalação do Ubuntu após o dispositivo terminar de inicializar

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por exemplo (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Passo 4:** Grave o sistema no SSD NVMe

```sh
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

Você verá a seguinte saída se o processo de gravação for bem‑sucedido

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

Agora, você pode conectar o mouse, teclado e monitor ao dispositivo Jetson. Ele estará pronto para uso!

:::tip
Se o seu dispositivo Jetson levar muito tempo para abrir a área de trabalho, reconecte a fonte de alimentação.
:::

**Passo 5 (Opcional):** Instalar Nvidia Jetpack SDK

Abra o terminal no **dispositivo Jetson** e execute os seguintes comandos:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

</TabItem>
<TabItem value="JP5.1.2" label="JP5.1.2">

Aqui usaremos NVIDIA L4T 35.4.1 para instalar o Jetpack 5.1.2 no reComputer

**Passo 1:** [Baixe](https://developer.nvidia.com/embedded/jetson-linux-r3541) os drivers NVIDIA no PC host. Os drivers necessários são mostrados abaixo:

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

**Passo 2:** Extraia **Jetson_Linux_R35.4.1_aarch64** e **Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64** navegando até a pasta que contém esses arquivos, aplique as alterações e instale os pré‑requisitos necessários

```sh
tar xf Jetson_Linux_R35.4.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

Agora precisamos aplicar um patch da NVIDIA que é necessário para JP5.1.2 e está explicado [aqui](https://docs.nvidia.com/jetson/archives/r35.4.1/ReleaseNotes/Jetson_Linux_Release_Notes_r35.4.1.pdf) na seção 4.2.3 das Notas de Lançamento oficiais do NVIDIA JetPack.

**Passo 3:** Navegue até o seguinte diretório

```sh
cd Linux_for_Tegra/bootloader/t186ref/BCT
```

**Passo 4:** Abra o arquivo **"tegra234-mb2-bct-scr-p3767-0000.dts"** e adicione as seguintes linhas na seção **tfc**

```sh
tfc {
    reg@322 { /* GPIO_M_SCR_00_0 */
    exclusion-info = <2>;
    value = <0x38008080>;
    };
```

**Passo 5 (Opcional):** Navegue até o diretório **"Linux_for_Tegra"** e insira o comando abaixo para configurar seu nome de usuário, senha e hostname para que você não precise inserir o assistente de instalação do Ubuntu após o dispositivo terminar de inicializar

```sh
cd Linux_for_Tegra
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por exemplo (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Passo 6:** Grave o sistema no SSD NVMe

```bash

cp p3509-a02+p3767-0000.conf p3509-a02-p3767-0000.conf
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1   -c tools/kernel_flash/flash_l4t_nvme.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg"   --showlogs --network usb0 p3509-a02-p3767-0000 external

```

Você verá a seguinte saída se o processo de gravação for bem‑sucedido

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

Agora, você pode conectar o mouse, teclado e monitor ao dispositivo Jetson. Ele estará pronto para uso!

:::tip
Se o seu dispositivo Jetson levar muito tempo para abrir a área de trabalho, reconecte a fonte de alimentação.
:::

**Passo 7 (Opcional):** Instalar Nvidia Jetpack SDK

Abra o terminal no **dispositivo Jetson** e execute os seguintes comandos:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

</TabItem>

<TabItem value="JP5.1.3" label="JP5.1.3">

Aqui iremos instalar o Jetpack 5.1.3 no reComputer.

**Passo 1:** Baixe a imagem do sistema para o seu PC com Ubuntu correspondente ao módulo Jetson que você está usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Link de Download</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Eaf_S-Dg_uxNkyRvriYIez4B6pl6VjO7aRNwAJ2DDDKjaA?e=Bl1p1G" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>37F99E90A746D07242EE17E2A74A3336490E997457DE0E9FC15A1E35D347543B</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcAN8eoa1m1MvKCN4p4VkMIBMZWuIj4OFrcH4uUx0Amxvg?e=Re90iJ" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>4FDD5F05EE83F425AD1D8E2768BDF35FA68D3F1143B09C2FB9537CBFD1A9D5EC</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZnkTHuxWIxHtwNs5mzjnPIBiFuB-Ym8zYVJb13Cnl0uqg?e=2U9i4S" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>6A002620B6E40673A39710F0ECC1C56CB5750480B799F97BB7DE4A5B6F49C527</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERwQtvZuYzdAoue4OzAH5kUBah_jgt9sPTNj2CeFRZTdNg?e=lbFjb6" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>63A3D59185BDB286452CA7774DD528F5087249B8065D902C9181703010B7836A</td>
    </tr>
  </tbody>
</table>
</div>

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host com Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido na wiki, isso confirma que o firmware que você baixou está completo e intacto.
:::

**Passo 2:** Extraia o arquivo de imagem baixado:

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**Passo 3:** Navegue até o diretório descompactado e execute o seguinte comando para gravar o sistema Jetpack no SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Você verá a seguinte saída se o processo de gravação for bem‑sucedido

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
O comando de gravação pode ser executado por 2–10 minutos.
:::

**Passo 4:** Conecte o J401 a um monitor usando o conector HDMI na placa e finalize a configuração inicial.

:::info
Conclua a **Configuração do Sistema** de acordo com suas necessidades.
:::

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

Aqui usaremos NVIDIA L4T 36.3 para instalar o Jetpack 6.0 no reComputer

**Passo 1:** Baixe a imagem do sistema para o seu PC com Ubuntu correspondente ao módulo Jetson que você está usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Link de Download1</th>
      <th>Link de Download2</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EavQHXoSEg9PuLs4vuujXLcB0-GW6Ti1zHGL2UHzgS6TWg?e=J7oRrf" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>
        <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EbEZRxHDtgBDjBrHK_7ltfEB6JBa3VGXLx3meNc0OJUL_g?e=8MNsTg" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>20b38d9524327fd714c37cb293036006e070b5335d6b4f6978a862be51c3db52</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcfUdbmSiOBFo_Po-Cui3jkBDORKexZ4S43Jde5XApqdeQ?e=zqealW" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQawJy3jmKBAmJgHght-vVUBHbsC3vtlvMsYfW7vsie3LQ?e=vor3t3" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>da966e7616ed86b45e184b6db9c3eb81e779a5f4524f6c3c5610e56c53532fe1</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EauK-aXvruxHsC1-bAmTwZkBNB0PsvPX6S6oV4Q1UrAUFw?e=rytWvU" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EeJP8SNF76BKiJg2e-FKNd4BhJwlWiMbLcT6Y286tRO7JQ?e=ct6qLf" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>e0fa101c5df6f507d123c2332e9fedea0ac54f8a5253cb28e71fdff01147fa68</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcHfrgY9GxVNiwGh6YTB50cBCc5QcKgnGpTZQfv94x4VNw?e=Rl73Zh" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERQJluPq9X1LmpLXTSGZVMwBVg9ikWw8veG2aOdHv504Gw?e=hujab4" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>80ebeac0a843baa2c3104ee6341d44f39a2cfab1c9c725e176c7b2a219b79dfc</td>
    </tr>
  </tbody>
</table>
</div>

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido no wiki, isso confirma que o firmware que você baixou está completo e intacto.
:::

**Passo 2:** Extraia o arquivo de imagem baixado:

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**Passo 3:** Navegue até o diretório descompactado e execute o seguinte comando para gravar o sistema JetPack no SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
O comando de gravação pode ser executado por 2 a 10 minutos.
:::

**Passo 4:** Conecte o J401 a um monitor usando o conector HDMI na placa e finalize a configuração inicial:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Conclua a **Configuração do Sistema** de acordo com suas necessidades.
:::

**Passo 5:** Após iniciar o sistema, você precisa executar o seguinte comando para reativar o driver da placa de rede sem fio:

```bash
sudo rm /lib/modules/5.15.136-tegra/build
sudo ln -s /usr/src/linux-headers-5.15.136-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source/ /lib/modules/5.15.136-tegra/build
sudo apt install -y iwlwifi-modules
```

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

Aqui usaremos o NVIDIA L4T 36.4 para instalar o Jetpack 6.1 no reComputer

**Passo 1:** Baixe a imagem do sistema para o seu PC Ubuntu correspondente ao módulo Jetson que você está usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Link de Download</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAeJrT8r6rJSKVpp2_32UtQAZJzy4wNyCuHqVSCy0f-q4U?e=84CkEW" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> b848e327b87c408565b899a11c52022b42df6de4f3dce1e5470cb2a7baccc898 </td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB9gz3ZuAZ1Rb_ml6eY-5eCAV-k2piT1qWtbedMSEUfyzk?e=LTL5kI" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> 3839c99fc9e2da1f35de824c42b7bb56f9660d8f4a6ce68b196c6cb50d5d4fb4 </td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDfJ9e2HfndQKxZp7e2_A_0Ab97_Oe0zA53nK6AZ6EHDYs?e=B3tvCO" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> a0863e7209351f9165cf6bd2d756a6a726b2e8fc1fa54b5d66279d5b136a3a33 </td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDrUdIOhLv6SrDpKbnUCnfgAR9URACZr46gifnBSEdOphA?e=TNUkWg" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> a40edfbcda9a7a07fbf72ca4e3149d171236f5ede2c4e3a5e243da77562f9b13 </td>
    </tr>
  </tbody>
</table>
</div>

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido no wiki, isso confirma que o firmware que você baixou está completo e intacto.
:::

**Passo 2:** Extraia o arquivo de imagem baixado:

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nx-16g-j401-6.1-36.4.0-2026-02-07.tar.gz
```

**Passo 3:** Navegue até o diretório descompactado e execute o seguinte comando para gravar o sistema JetPack no SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
O comando de gravação pode ser executado por 2 a 10 minutos.
:::

**Passo 4:** Conecte o J401 a um monitor usando o conector HDMI na placa e finalize a configuração inicial:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Conclua a **Configuração do Sistema** de acordo com suas necessidades.
:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

Aqui usaremos o NVIDIA L4T 36.4.3 para instalar o Jetpack 6.2 no reComputer

**Passo 1:** Baixe a imagem do sistema para o seu PC Ubuntu correspondente ao módulo Jetson que você está usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Link de Download</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDTDQf5Gh0LSIg9QSsHPNgBAcegrhbyGeZYrQF7kMpdgFQ?e=ahwlIc" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>b9529f008cf9a65460db3ee17736db971b8d110049f9f6ea8ecc8fe4d1691869</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDR6PGcF5i6Q5tWR9dJa1vSAfZrQUfHfQhTFe2DOeMKXuo?e=lf88Um" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>b7106b4f8c5835011040c071dd14e1144b5298af300f920e44517b99c183ed05</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDM6v_9Ggo4R5OXqj4R1T0PAf_uevclLKzjmj8XpkX0_jQ?e=B5oC3m" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> c2247262dec1379fd4494def6a6ed2d4414605a8dcb902c6d6afbb94a5e48499 </td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQA9g-hqq4_KR5bdPc2PgfgmAYq3mRxdRBkgrUtZBOm-jtE?e=WMICt2" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> 1d570b54853bba4ecc115789d1b03c5ba07b34344f7616dfa3c3772c9ff37e64 </td>
    </tr>
  </tbody>
</table>
</div>

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido no wiki, isso confirma que o firmware que você baixou está completo e intacto.
:::

:::note
Observe que, devido ao aumento do consumo de energia e da geração de calor após ativar o `super mode`, o [reComputer J4011B](https://www.seeedstudio.com/reComputer-J4011B-p-6407.html) e o [reComputer J4012B](https://www.seeedstudio.com/reComputer-J4012B-p-6406.html) não podem operar de forma estável no modo mais alto. Portanto, esta atualização não inclui esses dois produtos.
Atualmente estamos projetando uma nova versão do reComputer. Fique ligado!
:::

**Passo 2:** Extraia o arquivo de imagem baixado:

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.2-36.4.3-2026-02-05.tar.gz
```

**Passo 3:** Navegue até o diretório descompactado e execute o seguinte comando para gravar o sistema jetpack no SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
O comando de gravação pode levar de 2 a 10 minutos para ser concluído.
:::

**Passo 4:** Conecte o J401 a um monitor usando o conector HDMI na placa e finalize a configuração inicial:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Conclua a **Configuração do Sistema** de acordo com suas necessidades.
:::

</TabItem>

</Tabs>

## Uso das Interfaces

:::info
Consulte esta [página wiki](/pt-br/recomputer_j401b_interfaces_usage) para mais informações sobre o Uso das Interfaces.
:::

## Recursos

- [reComputer J401B Datasheet](https://files.seeedstudio.com/wiki/reComputer/reComputer_J401B_datasheet_v1.pdf)
- [Esquemático do reComputer J401B](https://files.seeedstudio.com/products/NVIDIA/reComputer_J401B_CarrierBoard_SCH_V1.0.pdf)
- [Esquemáticos da placa LTE](https://files.seeedstudio.com/products/NVIDIA/reComputer_J401B_LTE_SCH_V1.0.pdf)
- [Catálogo Seeed Jetson Serials](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Casos de Sucesso de Edge AI da Seeed Studio](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Comparação das Séries Seeed Jetson](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Página única dos dispositivos Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Exemplos Jetson](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-for-Beginners](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

## Suporte Técnico & Discussão de Produtos

Agradecemos por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
