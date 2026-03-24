---
description: Este artigo fornece um guia de primeiros passos para o reComputer Mini (baseado na plataforma NVIDIA Jetson Orin), incluindo as especificações do dispositivo e as etapas para a configuração e preparação inicial.
title: Primeiros Passos com o reComputer Mini
keywords:
  - reComputer
  - reComputer mini
  - computador embarcado
  - robôs
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.webp
slug: /recomputer_jetson_mini_getting_started
sku: 114993553,114993551,102111001,102110999,114993592,114993593
last_update:
  date: 12/11/2024
  author: Youjiang
createdAt: '2024-12-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_jetson_mini_getting_started/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Primeiros Passos com o reComputer Mini

<!-- change image -->

O reComputer Mini é um minúsculo computador de IA alimentado pelo módulo NVIDIA Jetson Orin Nano/Orin NX, oferecendo até 100 TOPS de desempenho de IA. Ele é equipado com uma porta PCIe na parte inferior para fornecer ricas capacidades de expansão, que também podem ser personalizadas de forma flexível. Todo o sistema é projetado para ser embutido em máquinas autônomas, como drones, robôs de patrulha, robôs de entrega, etc. Ele pode aceitar diretamente entrada DC de 54V, podendo ser amplamente utilizado em sistemas alimentados por bateria.

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoyLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

<!-- Buy links -->

## Recursos

- **Brilhante desempenho de IA para produção:** Alcança até **100 TOPS** de desempenho de IA com baixo consumo de energia e baixa latência, construído com o SoC NVIDIA Orin que combina a arquitetura de GPU NVIDIA Ampere™ com capacidade operacional de 64 bits, processamento avançado integrado de vídeo e imagem multifunção e Aceleradores de Deep Learning da NVIDIA.
- **Dispositivo de IA de borda do tamanho da mão:** Tamanho compacto de **63mmx95mmx42mm**, com módulo NVIDIA Jetson Orin NX 16GB, placa-carregadora Mini J401, ventoinha e gabinete. Suporta montagem em mesa e na parede.
- **Expansível com I/Os ricos:** Inclui até 7x USB, 1x DP 2.1, 1x RJ45 para GbE, M.2 Key E, M.2 Key M, CAN de canal duplo e GPIO com placa de extensão.
- **Acelere soluções para o mercado:** JetPack 6.0 **pré-instalado** em SSD NVMe de 128GB, BSP de sistema operacional Linux, suportando software Jetson e principais frameworks de IA.
- **Escalonável para implantação:** suporta OTA, serviços de gerenciamento remoto fornecidos pela Allxon e Balena.
- **Personalização flexível:** inclui alteração de módulos de acessórios, logotipo e modificação de interfaces de hardware com base no design original do reComputer Mini J4012.

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

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
      <td colSpan={2}>CPU Arm® Cortex®-A78AE v8.2 de 6 núcleos, 64-bit<br />1.5MB L2 + 4MB L3</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 de 6 núcleos, 64-bit 1.5MB L2 + 4MB L3</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 de 8 núcleos, 64-bit 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Frequência Máxima da CPU</td>
      <td colSpan={2}>1,5 GHz</td>
      <td colSpan={2}>2 GHz</td>
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
      <td colSpan={2}>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>Codificador de Vídeo</td>
      <td colSpan={2}>1080p30 suportado por 1-2 núcleos de CPU</td>
      <td colSpan={2}>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de Vídeo</td>
      <td colSpan={2}>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan={2}>1x 8K30 (H.265)<br />2x 4K60 (H.265)<br />4x 4K30 (H.265)<br />9x 1080p60 (H.265)<br />18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Placa-Carregadora</th>
    </tr>
    <tr>
      <td>Armazenamento</td>
      <td colSpan={4}>128GB NVMe SSD</td>
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
      <td colSpan={3}>1x UART; 1x UART para Debug</td>
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
      <td colSpan={3}>2x conectores High Speed de 60 pinos (para placa de extensão)<br />1x conector de energia de 10 pinos (para placa de extensão)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>1x RTC 2 pinos</td>
    </tr>
    <tr>
      <td>Alimentação</td>
      <td colSpan={4}>1x conector XT30 (12-54V DC)</td>
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
      <td colSpan={3}>1x CAN JST 4 pinos (3,3V); 1x CAN (XT30 2+2) </td>
    </tr>
    <tr>
      <td>Ventoinha</td>
      <td colSpan={3}>1x conector de ventoinha de 4 pinos (5V PWM)</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td colSpan={3}>2x I2C JST 4 pinos (3,3V)</td>
    </tr>
    <tr>
      <td>SPI</td>
      <td colSpan={3}>1x I2S JST 6 pinos (3,3V)</td>
    </tr>
    <tr>
      <td>Alimentação</td>
      <td colSpan={4}>2x conectores XT30 2+2 (12-54V DC)</td>
    </tr>
    <tr>
      <td colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Outros</td>
    </tr>
    <tr>
      <td rowSpan={3}>Mecânica</td>
      <td >Dimensões (L x P x A)</td>
      <td colSpan={3}>63mm * 95mm * 42mm (sem extensão)<br />63mm * 95mm * 66,7mm (com extensão)</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td colSpan={3}>345g (sem extensão)<br />462g (com extensão)</td>
    </tr>
    <tr>
      <td>Instalação</td>
      <td colSpan={3}>Mesa, montagem na parede</td>
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
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/hardware_overview.png"/>  
</div>

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

## Gravar o JetPack OS

Aqui, mostraremos como gravar o [Jetpack 6.0](https://developer.nvidia.com/embedded/jetson-linux-archive) em um SSD NVMe conectado ao reComputer Mini.

### Módulo Nvidia Jetson Suportado

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5554.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5552.html)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5523.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html)

### Pré-requisitos

- Computador Host com Ubuntu
- reComputer Mini J4012/ J4011/ J3010 ou J3011
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

Aqui, precisamos baixar a imagem do sistema para o nosso PC com Ubuntu correspondente ao módulo Jetson que estamos utilizando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versão do Jetpack</th>
      <th>Módulo Jetson</th>
      <th>Link para Download</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>5.1.3</td>
      <td>Orin Nx 16GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDSbMzCkdgXTJsBIw2bFLCgAV5njnZV4i3Tqk62-Z9UZGE?e=9dWNfh" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>82ab9068c5e03081391d22dc5d7c4db<br />ac9041016c1dd7a7ec2475871a10fd543</td>
    </tr>
    <tr>
      <td>Orin Nx 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC6mf8MQDgwRIDZweH69G45AYoMudFTg8oc5CiEyGU9jg8?e=KrAaiV" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>5f016131a9ab6e90c3bd21850efe13b<br />479d72046aea4aa6d3bd2f3a04df5a7a2</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCqGvCStwmPRpVHo4yBNEJEAfiD6w_iCeRtB0IuXotrdK0?e=P5sImI" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>a2ea4d9ad06e66e2befab14484471cb<br />6984ccef396e59262c83c40ed7911bbb2</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQApozlc_COgSLacJfvEAe6vAXeBTLY6z8H5WOfGQMGiLU4?e=ePzheb" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>928a20a94320e901576cfd8679affc2<br />6caae9e9a30f3bc9497534f42ac4093cc</td>
    </tr>
    <tr>
      <td rowSpan={4}>6.0</td>
      <td>Orin Nx 16GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcQFCfXEWVREuzwvvBX7vRsBlr9H6HQpTBzmDw0rigIt1Q?e=IzLuYu" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>7B4ABE1D1A8711D5D4E9B676DBB1E76<br />CDA35C614608CE7ECE112BC4A50E71C7C</td>
    </tr>
    <tr>
      <td>Orin Nx 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUpeLu1P7RJOv7-nqR7QbmABfmWR45xVUt95bMplpp25mQ?e=oiWB6b" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>3956B968F2BFB9FDF37D952E83DDB70<br />3980C813156919BC367CA5E23BBDEC89F</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWbSLkBX0XpIrFjkT0vndGsBysfm51HvFkBFsRnfRaWBxA?e=t7vRcH" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>BF6921DF313B467254154BDA835C379<br />AD86D817E03D0301543B62F7CA0C9222F</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUB7YoQeCrVHnDjsrfFaL8EBxkjRrclpDxFwDB3dJpM3xQ?e=oYHLp7" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>8941C13204A8069CE70B109B6A13EA2<br />40CBB02F69B8D4028D465134B3744BC28</td>
    </tr>
    <tr>
      <td rowSpan={2}>6.2</td>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVjuq6G9y_5OjIxMIHFiBj0BVckYdcRQBunaXMHFBLZ3tw?e=tY89se" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>A1C5F44B19B6C06E11AC38ABDA79AD6<br />CBFF2AAFBEEA7BF3A14B2FE08EA37267F</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcdaeIBdGRpCp0Dev5R3o1sB2Tr4HIwjgtp3d_XX7lE9Gg?e=bxteCW" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>23855098982DD1E05C025D3F078BCA0<br />2F396C1FB68DC58E539D83569A894571D</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
O arquivo de imagem do Jetpack6 tem aproximadamente **16,7GB** de tamanho e deve levar cerca de 60 minutos para ser baixado. Por favor, aguarde até que o download seja concluído.
:::

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host com Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido no wiki, isso confirma que o firmware que você baixou está completo e íntegro.
:::

### Entrar no modo Force Recovery

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
- **Passo 2.**  Use um pino e insira-o no orifício RECOVERY para pressionar o botão de recovery e, mantendo-o pressionado.
- **Passo 3.**  Conecte a fonte de alimentação.
- **Passo 4.**  Solte o botão de recovery.

</details>

No PC host Linux, abra uma janela do Terminal e insira o comando `lsusb`. Se o conteúdo retornado tiver uma das seguintes saídas de acordo com o Jetson SoM que você usa, então a placa está em modo force recovery.

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

### Gravar no Jetson passo a passo

**Passo 1:** Extraia o arquivo de imagem baixado no PC host com Ubuntu:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**Passo 2:** Execute o seguinte comando para gravar o sistema jetpack no SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
O comando de gravação pode levar de 2 a 10 minutos para ser executado.
:::

**Passo 3:** Conecte o J401 a um monitor usando a **USB Type-C com DisplayPort** na placa e conclua a configuração inicial:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Conclua a **Configuração do Sistema** de acordo com suas necessidades.
:::

**Passo 4 (Opcional):** Instalar Nvidia Jetpack SDK

Por favor, abra o terminal no dispositivo Jetson e execute os seguintes comandos:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## Uso das interfaces de hardware

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

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
