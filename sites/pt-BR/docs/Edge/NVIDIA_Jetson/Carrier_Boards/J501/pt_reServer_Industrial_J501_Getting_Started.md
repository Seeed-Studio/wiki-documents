---
description: Este wiki apresenta os recursos da placa carrier J501 e explica como gravar o sistema Jetpack na placa carrier J501.
title: Gravar Jetpack
keywords:
  - reServer
  - Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reserver_j501_getting_started
sku: 102991854,E24081601
last_update:
  date: 08/19/2024
  author: Youjiang
createdAt: '2024-08-19'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/pt-br/reserver_j501_getting_started/
---

# Introdução ao reServer J501

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/reServer_J501.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-Industrial-J501-Carrier-Board-Add-on.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
  </a>
</div>

A placa carrier J501 é uma poderosa placa de expansão que suporta módulos NVIDIA Jetson AGX Orin. Ela possui portas de dados ricas e interfaces de expansão, liberando completamente todo o desempenho do módulo AGX Orin. Além disso, suporta a adição de expansão GMSL para conectar até 8 câmeras GMSL.

## Recursos

- **Construa o computador de IA mais poderoso para computação de borda:** Projetada para integrar com o módulo Jetson AGX Orin, com até 275 TOPS de desempenho de IA, 8 vezes o desempenho de IA em comparação com o Jetson AGX Xavier. Potência configurável entre 15W e 60W.
- **Suporte de interface de alta velocidade para múltiplos sensores:** 22 pistas de PCIe Gen4, 1x 10GbE, uma Display Port, 16 pistas de MIPI CSI-2, interfaces USB 3.2 e um conector de 40 pinos.
- **Suporte de interface de baixa velocidade para múltiplas IO:** 4x DI, 4x DO, 3x GND_DI, 2x GND_DO, 1x GND_ISO, 1x CAN, 1x RS232/RS422/RS485.
<!-- - **BSP ready for development:** Jetpack 6 supported Board BSP ready for developing your custom system image. -->

## Especificações

<div class="table-center">
<table>
  <tbody>
    <tr>
      <td rowSpan={7}>I/O</td>
      <td>Ethernet</td>
      <td> 1x LAN0 RJ45 GbE (10/100/1000Mbps), <br /> 1x LAN RJ45 GbE (10/100/1000/10000Mbps) </td>
    </tr>
    <tr>
      <td>USB</td>
      <td> 3x USB3.1, <br /> 1x USB3.1 Type C(Host mode), <br /> 1x USB2.0 Type C(Device mode) </td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td> 4x DI,4x DO,3x GND_DI,2x GND_DO,1x GND_ISO,1x CAN
1x RS232/RS422/RS485 </td>
    </tr>
    <tr>
      <td>Display</td>
      <td> 1x HDMI 2.1 Tipo A 7680x4320 </td>
    </tr>
    <tr>
      <td>SATA</td>
      <td> 2x SATA III 6.0Gbps a 30 Hz </td>
    </tr>
    <tr>
      <td>SIM</td>
      <td> 1x slot para cartão Nano SIM </td>
    </tr>
    <tr>
      <td>Button</td>
      <td> Botão de Reset, Botão de Recovery </td>
    </tr>
    <tr>
      <td rowSpan={9}>Expansão</td>
      <td> Mini PCIE </td>
      <td> 1x Mini PCIe para LoRaWAN®/4G/Série Wireless (Módulo não incluído) </td>
    </tr>
    <tr>
      <td> M.2 Key B </td>
      <td> 1x M.2 Key B (3042/3052) com suporte a 4G/5G (Módulo não incluído) </td>
    </tr>
    <tr>
      <td> M.2 Key E </td>
      <td> 1x M.2 Key E </td>
    </tr>
    <tr>
      <td> M.2 Key M </td>
      <td> 1x M.2 Key M (PCIE 4.0) </td>
    </tr>
    <tr>
      <td> Fan </td>
      <td> 1x conector de Fan (5V PWM) </td>
    </tr>
    <tr>
      <td> TPM </td>
      <td> 1x conector TPM 2.0 (Módulo não incluído) </td>
    </tr>
    <tr>
      <td> RTC </td>
      <td> 1x soquete RTC (CR1220 incluída), <br />1x RTC 2 pinos </td>
    </tr>
    <tr>
      <td> Camera </td>
      <td> 2x conectores de expansão (8 pistas para cada conector) </td>
    </tr>
    <tr>
      <td> PCIE </td>
      <td> 1x PCIE </td>
    </tr>
    <tr>
      <td> Power </td>
      <td> Fonte de alimentação </td>
      <td> Bloco terminal DC 12V-36V de 2 pinos (inclui adaptador de energia 24V/5A)</td>
    </tr>
    <tr>
      <td rowSpan={3}> Mecânica </td>
      <td> Dimensões (L x P) </td>
      <td> 176 x 163mm (Módulo não incluído)</td>
    </tr>
    <tr>
      <td> Temperatura de operação </td>
      <td> -20~60℃ </td>
    </tr>
    <tr>
      <td> Peso </td>
      <td> 225g (Módulo não incluído) </td>
    </tr>
  </tbody>
</table>
</div>

## Visão geral do hardware

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/hardware_overview.jpeg"/>
</div>

## Gravar o JetPack OS na placa carrier J501

Aqui, mostraremos como gravar o [Jetpack](https://developer.nvidia.com/embedded/jetson-linux-archive) em um SSD NVMe conectado ao reServer J501.

### Módulo compatível

- [NVIDIA® Jetson AGX Orin™ Module 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)
- [NVIDIA® Jetson AGX Orin™ Module 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)

### Pré-requisitos

- PC host com Ubuntu
- Placa carrier reServer J501
- Módulo NVIDIA® Jetson AGX Orin™ 32GB/64GB
- Ventoinha ativa AGX Orin
- SSD interno NVMe M.2 2280
- Cabo de transmissão de dados USB Type-C

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

### Preparar a imagem do Jetpack

Aqui, precisamos baixar a imagem do sistema para o nosso PC com Ubuntu correspondente ao módulo Jetson que estamos usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versão do Jetpack</th>
      <th>Módulo Jetson</th>
      <th> GMSL </th>
      <th>Link de download 1</th>
      <th>Link de download 2</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>5.1.3</td>
      <td>AGX Orin 32GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQD3U5NHij5gR5r4FB_AzC9vAbb3ERak_RvvIMoow0-X2fM?e=Ddf7Zi" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERG3upqXAQNHsJP6ZvG2MAEBGsndVCgrLnhcKvtWoGA6tA?e=14KO6z" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>c673dc8ae75addf8ca3224cf700be35<br />4eec0ca41cb5ecabb8953c276213a7119</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQD3ZjNepbc7SoC24H82Y4txAUhoSQIZ4l2ZcKGa3qgd9_E?e=bk1qc5" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EZ7iNOxMxL9AjcKFPLygVT8Bg5qnkE-ZsMmNmHkZzNayOg?e=qv2sbB" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>425a931e65f2715d8486c68565ad711<br />fd34b626ab023d025df2d84af81b62aa3</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQClLB_mdGMPQpqEw1jxTRuFAYqxZRQJZIAtiYt7-clcocI" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>F95E91C3BFB00D50EB999383F85949B4</td>
      <td>76abdd6de0a49bd95d57b361bebea59<br />a6a05e56779c7ceb863ad178f3ed98aaf</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBh9HqX5MHBQZF0WLe01k7mAXYqzHd4YJXaDt4uS2VZ8T4?e=AX0KSd" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eccs1larF2FNhKi8MHred5kB4pQImN4ZHSgDM3BUDVzBtQ?e=reKIhD" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>49076bd4bb7179dfe38c25bd5831c03<br />296bf26e86d67d9bca766a749a14257bd</td>
    </tr>
    <tr>
      <td rowSpan={4}>6.0</td>
      <td>AGX Orin 32GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERTmpYBKF2tAodLyqpajhLkBxPdGUIWXfGytdCGwNu28qw?e=cJIbtM" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EeHcCFk-chtDnEzoXiwvxZwBQuK3I3mTOAJ8mnZJE-P2uA?e=X9g0HK" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>B1C1BBB14058B0F5C00C5657A8EF8FA<br />7A4C3711DB8AD82F7E614311F95063989</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ef5wlNXtxVRIulSKwJTT3ocBmCBlHbQNVnz3LRDJtRwlGQ?e=KAIiVS" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EX5HoeV09eFKtWj9YhAfgZ8Bt2k9bxxxSO5-TQBZoGLB-Q?e=hvcfG1" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>0C58022F626321EE42464AACBB47029<br />6B1AFE0A7256787158539BE7EC73E19C6</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQClLB_mdGMPQpqEw1jxTRuFAYqxZRQJZIAtiYt7-clcocI" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EY-HFdsaHWVOvJJ5fMynVO0BvEOv5W0h1IxeSfesNFRYag?e=5thYHs" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>4077631986A66EB3AF5FBF4FF2FBDBC<br />CD07E4DC1AA4076414EB1F4640AF72451</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQClLB_mdGMPQpqEw1jxTRuFAYqxZRQJZIAtiYt7-clcocI" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EUmpL5LNJDRLjoC6oQg6Vv4BgQ9eA4MUl4yE43fycz667w?e=Xw5nga" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>8DCFF0FFBA81B756B0C62E50F4A106B<br />44116CC8171C05F48A328DE594D6A4CD9</td>
    </tr>
    <tr>
      <td rowSpan={4}>6.2</td>
      <td>AGX Orin 32GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfhMqk5d6tFKiDqbtyWKFdsBV-NLqs9L4NBY0dRC-Y_jHw?e=JQMYcn" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td> - </td>
      <td>69CFD82D0C70B55D5BDD34E3EAF7AE8<br />DDCE002CCCDBA3DCEE40F40CD8BBA0478</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Edgau76MPUZAnuAixzf7TSUBGF2edqqdZO3mHRaZB_Gd7Q?e=omVwi3" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td> - </td>
      <td>3BAEB35868E4B187F4B7C35FA44D8E0<br />BD9486161E14F9F073993216F83DFA0E4</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCcNYUtYA0RTL2GQwXFv35rAdWnduxknLXrUtQNxklpIZo" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td> - </td>
      <td>B6A9F41B8B42060D19F811B718E4B71<br />FCBE699BB9EC7A50B4B24DF205003111B</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCcNYUtYA0RTL2GQwXFv35rAdWnduxknLXrUtQNxklpIZo" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td> - </td>
      <td>AA04EFB99374DCDC89A57C039FA4E1F<br />F5C9371B22F8ED83612AC4C799CCB2640</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
O arquivo de imagem do jetpack5 tem aproximadamente **4,5GB** de tamanho e deve levar cerca de 15 minutos para ser baixado. O arquivo de imagem do Jetpack6 tem aproximadamente **16,7GB** de tamanho e deve levar cerca de 60 minutos para ser baixado. Aguarde até que o download seja concluído.
:::

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido no wiki, isso confirma que o firmware que você baixou está completo e intacto.
:::

### Entrar no modo Force Recovery

:::info
Antes de prosseguirmos para as etapas de instalação, precisamos garantir que a placa esteja em modo force recovery.
:::

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/CGMGZGqZPKM" title="J501 Enter Force Recovery Mode" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<details>

<summary> Passo a passo </summary>

**Passo 1.** Pressione e segure o botão de force recovery sem soltá-lo.

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/button.jpg" />
</div>

**Passo 2.** Ligue a placa carrier conectando o cabo de alimentação.

**Passo 3.** Solte o botão de force recovery.

**Passo 4.** Conecte a placa ao PC host Ubuntu com um cabo de transmissão de dados USB Type-C.

**Passo 5.** No PC host Linux, abra uma janela do Terminal e insira o comando `lsusb`. Se o conteúdo retornado tiver uma das seguintes saídas de acordo com o Jetson SoM que você usa, então a placa está em modo force recovery.

- Para AGX Orin 32GB: **0955:7223 NVidia Corp**
- Para AGX Orin 64GB: **0955:7023 NVidia Corp**

A imagem abaixo é para AGX Orin 32GB

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### Gravar no Jetson

**Passo 1:** Extraia o arquivo de imagem baixado:

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
O comando de gravação pode ser executado por 2 a 10 minutos.
:::

**Passo 3:** Conecte o J501 a um monitor usando o conector HDMI na placa e conclua a configuração inicial:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Conclua a **Configuração do Sistema** de acordo com suas necessidades.
:::

**Passo 4 (Opcional):** Instalar o Nvidia Jetpack SDK

Abra o terminal no dispositivo Jetson e execute os seguintes comandos:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## Recursos

- [Folha de dados da placa carrier reServer Industrial J501](https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/reServer_Industrial_J501_Carrier_Board_Datasheet.pdf)
- [Esquemático do reServer Industrial J501](https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/202003906_reServer_Industrial_J501_Carrier_Board_v1.0_SCH_PDF_20240529.pdf)
- [Arquivo 3D do reServer Industrial J501](https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/RESERVER_AGX_ORIN_CARRIER_BOARD.stp)
- [Catálogo das séries Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Casos de sucesso de Edge AI da Seeed Studio](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Comparação das séries Seeed Jetson](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Página única dos dispositivos Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
