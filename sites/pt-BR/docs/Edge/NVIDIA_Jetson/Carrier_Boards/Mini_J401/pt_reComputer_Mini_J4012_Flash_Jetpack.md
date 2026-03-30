---
description: Este artigo explica como gravar o JetPack 6.0 na Placa Carrier J401-Mini, cobrindo a visão geral do dispositivo, preparação, entrada no modo Force Recovery e uso de um script de gravação com um clique, ajudando os usuários a implantar rapidamente dispositivos NVIDIA Jetson Orin.
title: Gravar Jetpack
keywords:
  - reComputer Mini
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/recomputer-mini-1.webp
slug: /recomputer_mini_j401_getting_started
last_update:
  date: 03/28/2025
  author: Dayu
createdAt: '2023-02-16'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/pt-br/recomputer_mini_j401_getting_started/
---

# Gravar JetPack na Placa Carrier J401-Mini

reComputer Mini é um minicomputador de IA alimentado pelo módulo NVIDIA Jetson Orin Nano/Orin NX, oferecendo até 100 TOPS de desempenho de IA. Ele é equipado com uma porta PCIe na parte inferior para fornecer ricas capacidades de expansão, que também podem ser personalizadas de forma flexível. Todo o sistema é projetado para ser embutido em máquinas autônomas, como drones, robôs de patrulha, robôs de entrega etc. Pode aceitar diretamente entrada DC de 54V, podendo ser amplamente utilizado em sistemas alimentados por bateria.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/recomputer-mini-1.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoyLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
</a></div>

<!-- Buy links -->

## Recursos

- **Brilhante desempenho de IA para produção:** Alcança até **100 TOPS** de desempenho de IA com baixo consumo de energia e baixa latência, construído pelo SoC NVIDIA Orin que combina a arquitetura de GPU NVIDIA Ampere™ com capacidade operacional de 64 bits, processamento avançado integrado de vídeo e imagem multifunção e Aceleradores de Deep Learning NVIDIA.
- **Dispositivo Edge AI do tamanho da mão:** Tamanho compacto de **63mmx95mmx42mm**, apresentando um módulo NVIDIA Jetson Orin NX 16GB, placa carrier Mini J401, ventoinha e gabinete. Suporta instalação em mesa e em parede.
- **Expansível com ricos I/Os:** Inclui até 7x USB, 1x DP 2.1, 2x CSI, 1x RJ45 para GbE, M.2 Key E, M.2 Key M, canal CAN duplo e GPIO com placa de extensão.
- **Acelere as soluções para o mercado:** JetPack 6.0 pré-instalado em SSD NVMe de 128GB, BSP de SO Linux, compatível com o software Jetson e principais frameworks de IA.
- **Escale para implantar:** suporta OTA e serviços de gerenciamento remoto fornecidos pela Allxon e Balena.
- **Personalização flexível:** inclui alteração de módulos de acessórios, logotipo e modificação de interfaces de hardware com base no design original do reComputer Mini J4012.

## Especificações

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Jetson Orin System on Module</th>
    </tr>
    <tr>
      <th>Especificações</th>
      <th>reComputer Mini J3010</th>
      <th>reComputer Mini J3011</th>
      <th>reComputer Mini J4011</th>
      <th>reComputer Mini J4012</th>
    </tr>
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
      <td>GPU NVIDIA Ampere de 512 núcleos com 16 Tensor Cores</td>
      <td colSpan={3}>GPU NVIDIA Ampere de 1024 núcleos com 32 Tensor Cores</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan={2}>CPU Arm® Cortex®-A78AE v8.2 de 6 núcleos 64-bit<br />1.5MB L2 + 4MB L3</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 de 6 núcleos 64-bit 1.5MB L2 + 4MB L3</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 de 8 núcleos 64-bit 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Frequência Máxima da CPU</td>
      <td colSpan={2}>1.5 GHz</td>
      <td colSpan={2}>2 GHz</td>
    </tr>
    <tr>
      <td>Memória</td>
      <td>4GB 64-bit LPDDR5<br />34 GB/s</td>
      <td>8GB 128-bit LPDDR5<br />68 GB/s</td>
      <td>8GB 128-bit LPDDR5 102.4GB/s</td>
      <td>16GB 128-bit LPDDR5 102.4GB/s</td>
    </tr>
    <tr>
      <td>Acelerador DL</td>
      <td colSpan={2}>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>Codificador de Vídeo</td>
      <td colSpan={2}>1080p30 suportado por 1–2 núcleos de CPU</td>
      <td colSpan={2}>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de Vídeo</td>
      <td colSpan={2}>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan={2}>1x 8K30 (H.265)<br />2x 4K60 (H.265)<br />4x 4K30 (H.265)<br />9x 1080p60 (H.265)<br />18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Placa Carrier</th>
    </tr>
    <tr>
      <td>Armazenamento</td>
      <td colSpan={4}>SSD NVMe de 128GB</td>
    </tr>
    <tr>
      <td>Rede</td>
      <td>M.2 KEY E</td>
      <td colSpan={3}>1x M.2 Key E para módulo WiFi/Bluetooth</td>
    </tr>
    <tr>
      <td rowSpan={7}>I/O</td>
      <td >USB</td>
      <td colSpan={3}>2x USB 3.2 Type-A (10Gbps)<br />1x USB 2.0 Micro-B (Modo Device)<br />1x USB 3.0 Type-C (Modo Host)<br />1x USB 2.0 JST-5pin (Modo Host)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td colSpan={3}>1x UART; 1x UART para Depuração</td>
    </tr>
    <tr>
      <td>Display</td>
      <td colSpan={3}>1x DP 2.1 (incluído no conector Type-C)</td>
    </tr>
    <tr>
      <td>Ventoinha</td>
      <td colSpan={3}>1x conector de ventoinha de 4 pinos (5V PWM)</td>
    </tr>
    <tr>
      <td>Botão</td>
      <td colSpan={3}>1x botão Reset; 1x botão Recovery</td>
    </tr>
    <tr>
      <td>Porta de Extensão</td>
      <td colSpan={3}>2x conectores de alta velocidade de 60 pinos (para placa de extensão)<br />1x conector de energia de 10 pinos (para placa de extensão)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>1x RTC 2-pin</td>
    </tr>
    <tr>
      <td>Alimentação</td>
      <td colSpan={4}>1x conector XT30 (12–54V DC)</td>
    </tr>
    <tr>
      <td colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Placa de Extensão</td>
    </tr>
    <tr>
      <td>Rede</td>
      <td>Ethernet</td>
      <td colSpan={3}>1x RJ-45 Gigabit Ethernet (10/100/1000M)</td>
    </tr>
    <tr>
      <td rowSpan={5}>I/O</td>
      <td >USB</td>
      <td colSpan={3}>4x USB 3.2 Type-A (5 Gbps)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={3}>1x CAN JST 4pin (3.3V); 1x CAN (XT30 2+2) </td>
    </tr>
    <tr>
      <td>Ventoinha</td>
      <td colSpan={3}>1x conector de ventoinha de 4 pinos (5V PWM)</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td colSpan={3}>2x I2C JST 4pin (3.3V)</td>
    </tr>
    <tr>
      <td>SPI</td>
      <td colSpan={3}>1x I2S JST 6pin (3.3V)</td>
    </tr>
    <tr>
      <td>Alimentação</td>
      <td colSpan={4}>2x conector XT30 2+2 (12–54V DC)</td>
    </tr>
    <tr>
      <td colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Outros</td>
    </tr>
    <tr>
      <td rowSpan={3}>Mecânico</td>
      <td >Dimensões (L x P x A)</td>
      <td colSpan={3}>63mm * 95mm * 42mm (Sem Extensão)<br />63mm * 95mm * 66.7mm (Com Extensão)</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td colSpan={3}>345g (Sem Extensão)<br />462g (Com Extensão)</td>
    </tr>
    <tr>
      <td>Instalação</td>
      <td colSpan={3}>Mesa, montagem em parede</td>
    </tr>
    <tr>
      <td>Temperatura de Operação</td>
      <td colSpan={4}>-10℃ ~ 50℃</td>
    </tr>
    <tr>
      <td>Garantia</td>
      <td colSpan={4}>1 Ano</td>
    </tr>
  </tbody>
</table>
</div>

## Visão Geral de Hardware

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B1.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B2.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B3.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B4.png"/>  
</div>

## Gravar o SO JetPack

Aqui, mostraremos como gravar o [Jetpack 6.0](https://developer.nvidia.com/embedded/jetson-linux-archive) em um SSD NVMe conectado ao reComputer Mini.

### Módulo Nvidia Jetson Suportado

- [Módulo NVIDIA® Jetson Orin™ Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5554.html)
- [Módulo NVIDIA® Jetson Orin™ Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5552.html)
- [Módulo NVIDIA® Jetson Orin™ NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5523.html)
- [Módulo NVIDIA® Jetson Orin™ NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html)

### Pré-requisitos

- Computador Host com Ubuntu
- Placa Carrier reComputer J401-Mini com módulo Jetson Orin
- Cabo USB Micro-B para transmissão de dados

:::info

Recomendamos que você use dispositivos host físicos com Ubuntu em vez de máquinas virtuais.
Consulte a tabela abaixo para preparar a máquina host.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> Versão do JetPack </td>
        <td class="dbon" colspan="3"> Versão do Ubuntu (Computador Host) </td>
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

### Preparar a Imagem do Jetpack

Aqui, precisamos baixar a imagem do sistema para o nosso PC com Ubuntu correspondente ao módulo Jetson que estamos usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versão do Jetpack</th>
      <th>Módulo Jetson</th>
      <th>Link de Download</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>5.1.3</td>
      <td>Orin Nx 16GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfA7P_6gLnJAnxptIAURoCgBDF-emSfyD9uGWYY2vuFhmg?e=DF6a8l" target="_blank" rel="noopener noreferrer">Baixar</a></td>
      <td>099bf8e706468dc36600ffdb3444168<br />3cde7454646621017fc39db49c16a2c53</td>
    </tr>
    <tr>
      <td>Orin Nx 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Eew7pWvWB3RLtT5vMkVTFHABADBzxS8id4xNtrQHGcO3eg?e=drxTwI" target="_blank" rel="noopener noreferrer">Baixar</a></td>
      <td>6ce30b9e212310498eee2c0a363cb35<br />14b1c607ae6a1ab403d5029115bc3a71b</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcEvOGxB9DpOuFubj-xJ1oYBixiZy4vd0t_chXQcezPy9A?e=RnX7NN" target="_blank" rel="noopener noreferrer">Baixar</a></td>
      <td>b8f7a0b6d5974add33c3102824c671b<br />61ca8e278b0c5e3c38a7c5a45e251251e</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EYi8K66PG6xOjwiU-_x3Ey4BpZhEiLFS8c_JoEDzeTVaxg?e=TkAgJV" target="_blank" rel="noopener noreferrer">Baixar</a></td>
      <td>cc6efd6e4a42f099dde47e9ed71a34e<br />0981e77c50e3dc74f38338210c1f3bda0</td>
    </tr>
    <tr>
      <td rowSpan={4}>6.0</td>
      <td>Orin Nx 16GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcQFCfXEWVREuzwvvBX7vRsBlr9H6HQpTBzmDw0rigIt1Q?e=IzLuYu" target="_blank" rel="noopener noreferrer">Baixar</a></td>
      <td>7B4ABE1D1A8711D5D4E9B676DBB1E76<br />CDA35C614608CE7ECE112BC4A50E71C7C</td>
    </tr>
    <tr>
      <td>Orin Nx 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUpeLu1P7RJOv7-nqR7QbmABfmWR45xVUt95bMplpp25mQ?e=oiWB6b" target="_blank" rel="noopener noreferrer">Baixar</a></td>
      <td>3956B968F2BFB9FDF37D952E83DDB70<br />3980C813156919BC367CA5E23BBDEC89F</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWbSLkBX0XpIrFjkT0vndGsBysfm51HvFkBFsRnfRaWBxA?e=t7vRcH" target="_blank" rel="noopener noreferrer">Baixar</a></td>
      <td>BF6921DF313B467254154BDA835C379<br />AD86D817E03D0301543B62F7CA0C9222F</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUB7YoQeCrVHnDjsrfFaL8EBxkjRrclpDxFwDB3dJpM3xQ?e=oYHLp7" target="_blank" rel="noopener noreferrer">Baixar</a></td>
      <td>8941C13204A8069CE70B109B6A13EA2<br />40CBB02F69B8D4028D465134B3744BC28</td>
    </tr>
    <tr>
      <td rowSpan={2}>6.2</td>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVjuq6G9y_5OjIxMIHFiBj0BVckYdcRQBunaXMHFBLZ3tw?e=tY89se" target="_blank" rel="noopener noreferrer">Baixar</a></td>
      <td>A1C5F44B19B6C06E11AC38ABDA79AD6<br />CBFF2AAFBEEA7BF3A14B2FE08EA37267F</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcdaeIBdGRpCp0Dev5R3o1sB2Tr4HIwjgtp3d_XX7lE9Gg?e=bxteCW" target="_blank" rel="noopener noreferrer">Baixar</a></td>
      <td>23855098982DD1E05C025D3F078BCA0<br />2F396C1FB68DC58E539D83569A894571D</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
O arquivo de imagem do Jetpack6 tem aproximadamente **16,7GB** de tamanho e deve levar cerca de 60 minutos para ser baixado. Aguarde gentilmente até que o download seja concluído.
:::

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido no wiki, isso confirma que o firmware que você baixou está completo e íntegro.
:::

### Entrar no Modo Force Recovery

:::info
Antes de podermos prosseguir para as etapas de instalação, precisamos ter certeza de que a placa está em modo force recovery.
:::

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/HEIXFkizP5Y" title="Enter Force Recovery Mode (reComputer Mini)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<details>

<summary> Passo a passo </summary>

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini_rec.png" />
</div>

- **Passo 1.**  Conecte um cabo USB Micro-B entre a porta USB2.0 DEVICE e o PC host com Ubuntu.
- **Passo 2.**  Use um pino e insira no orifício RECOVERY para pressionar o botão de recuperação e, enquanto o mantém pressionado.
- **Passo 3.**  Conecte a fonte de alimentação.
- **Passo 4.**  Solte o botão de recuperação.

</details>

No PC host Linux, abra uma janela do Terminal e digite o comando `lsusb`. Se o conteúdo retornado tiver uma das seguintes saídas de acordo com o Jetson SoM que você usa, então a placa está em modo force recovery.

- Para Orin NX 16GB: 0955:7323 NVidia Corp
- Para Orin NX 8GB: 0955:7423 NVidia Corp
- Para Orin Nano 8GB: 0955:7523 NVidia Corp
- Para Orin Nano 4GB: 0955:7623 NVidia Corp

A imagem abaixo é para Orin Nx 16GB:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"/>
</div>
<!-- 
### Flash to Jetson with Single Command

<details>

<summary> Flash the device with a single command. </summary>

The reComputer Jetson J30/40 Mini has launched a one-click flashing script, which supports flashing Jetpack 6.0.

```bash
wget -O ./flashing.sh https://files.seeedstudio.com/OSHW_Jetson/flashing.sh  && sudo chmod 777 ./flashing.sh && ./flashing.sh
```

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZFBzTlyOjhE?si=uNN-l5VVGbAyGnot" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::caution
Disclaimer: The one-click flashing script aims to make jetpack flashing quicker. The current version is a beta one and may have many problems. We hope for your understanding. If there are flashing issues, follow the `Flash The Device Step by Step` below and give feedback in our [Discord Jetson channel](https://discord.com/channels/862602258452578314/930732339624026152). We'll fix them promptly and improve this function in the near future.
:::

</details> -->

### Gravar no Jetson Passo a Passo

**Passo 1:** Extraia o arquivo de imagem baixado no PC host com Ubuntu:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**Passo 2:** Execute o seguinte comando para gravar o sistema Jetpack no SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
O comando de gravação pode rodar por 2-10 minutos.
:::

**Passo 3:** Conecte o J501 a um monitor usando o conector HDMI na placa e finalize a configuração inicial:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Conclua a **Configuração do Sistema** de acordo com suas necessidades.
:::

**Passo 4 (Opcional):** Instalar Nvidia Jetpack SDK

Abra o terminal no dispositivo Jetson e execute os seguintes comandos:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## Uso das Interfaces de Hardware

:::info
Se você quiser saber mais sobre as especificações detalhadas e o uso da interface de hardware, consulte [este wiki](https://wiki.seeedstudio.com/pt-br/recomputer_jetson_mini_hardware_interfaces_usage/).
:::

## Recursos

- [reComptuer Mini Datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)
- [reComptuer Mini Schematic](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_SCH.7z)
- [reComputer Mini 3D file](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_3D.7z)
- [Seeed Jetson Serials Catalog](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio Edge AI Success Stories](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson Serials Comparision](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson Devices One Page](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
