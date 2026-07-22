---
description: Introdução ao reComputer Industrial
title: Introdução ao reComputer Industrial
keywords:
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_Industrial_Getting_Started
sku: 110110190, 110110193, 110110188, 110110191, 110110189, 110110192, B802000101
last_update:
  date: 05/16/2023
  author: Lakshantha
createdAt: '2025-06-05'
updatedAt: '2026-06-29'
url: https://wiki.seeedstudio.com/pt-br/reComputer_Industrial_Getting_Started/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Introdução ao reComputer Industrial

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/2.png"/></div>

A série reComputer industrial oferece sistemas completos incluindo módulos NVIDIA Jetson™ Xavier NX/ Orin Nano/ Orin NX/, com desempenho de IA variando de 20 TOPS a 100 TOPS. Pré-instalado com Jetpack 5.1.3, o reComputer industrial simplifica o desenvolvimento, sendo ideal para criar aplicações de análise de vídeo, detecção de objetos, processamento de linguagem natural, imagens médicas e robôs, o que traz transformação digital para setores como cidades inteligentes, segurança, automação industrial e fábricas inteligentes.

O reComputer industrial vem com um dissipador de calor passivo e um design sem ventoinha, tornando-o ideal para uso em ambientes exigentes. O dissipador de calor passivo permite um resfriamento eficiente sem a necessidade de uma ventoinha, reduzindo o risco de falha de componentes devido a poeira ou outros contaminantes. O design sem ventoinha também reduz os níveis de ruído e o consumo de energia, tornando-o adequado para uso em ambientes sensíveis a ruído e minimizando os custos de energia.

O reComputer industrial possui 2 portas RJ45 GbE, uma das quais é uma porta PoE PSE para fornecer energia via Ethernet a dispositivos como câmeras IP. Isso elimina a necessidade de uma fonte de alimentação separada e facilita a implantação de dispositivos de rede em áreas sem tomadas de energia facilmente disponíveis. A outra porta GbE é usada para conectar a um switch ou roteador de rede, permitindo a comunicação com outros dispositivos na rede e o acesso à Internet.

:::note
Opções de personalização disponíveis: identidade visual com logotipo, embalagem e gravação de firmware.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J4011-p-5681.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a>
<a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>Personalizar agora ➜</font></span></strong></a>
</div>

## Recursos

- **PC compacto sem ventoinha:** Design térmico de referência, suporte a faixa de temperatura mais ampla de -20 ~ 60°C com fluxo de ar de 0,7 m/s
- **Projetado para interfaces industriais:** 2x RJ-45 GbE (1 para POE-PSE 802.3 af); 1x RS-232/RS-422/RS-485; 4x DI/DO; 1x CAN; 3x USB3.2; 1x TPM2.0 (módulo opcional)
- **Conectividade híbrida:** Suporte a 5G/4G/LTE/LoRaWAN® (módulo opcional) com 1x slot para cartão Nano SIM
- **Montagem flexível:** Mesa, trilho DIN, montagem em parede, VESA
- **Certificações:** FCC, CE, RoHS, UKCA

## Especificações

<table>
  <thead>
    <tr>
      <th colSpan={2}>Nome do produto</th>
      <th>reComputer Industrial J4012</th>
      <th>reComputer Industrial J4011</th>
      <th> reComputer Industrial J3011 </th>
      <th> reComputer Industrial J3010</th>
      <th>reComputer Industrial J2012</th>
      <th>reComputer Industrial J2011</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan={2}>Módulo NVIDIA Jetson</td>
      <td>Orin NX 16GB</td>
      <td>Orin NX 8GB</td>
      <td>Orin Nano 8GB</td>
      <td>Orin Nano 4GB</td>
      <td>Xavier NX 16GB</td>
      <td>Xavier NX 8GB</td>
    </tr>
    <tr>
      <td colSpan={2}>SKU</td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html">110110191</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J4011-p-5681.html">110110190</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html">110110193</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J3010-p-5686.html">110110192</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J2012-p-5685.html">110110189</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J2011-p-5683.html">110110188</a></td>
    </tr>
    <tr>
      <td rowSpan={6}>Sistema de processamento</td>
      <td>Desempenho de IA</td>
      <td>100 TOPS</td>
      <td>70 TOPS</td>
      <td>40 TOPS</td>
      <td>20 TOPS</td>
      <td colSpan={2}>21 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td colSpan={3}>GPU NVIDIA Ampere de 1024 núcleos com 32 Tensor Cores</td>
      <td>GPU NVIDIA Ampere de 512 núcleos com 16 Tensor Cores</td>
      <td colSpan={2}>GPU NVIDIA Volta™ de 384 núcleos com 48 Tensor Cores</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 64-bit de 8 núcleos<br />2MB L2 + 4MB L3</td>
      <td colSpan={3}>CPU Arm® Cortex®-A78AE v8.2 64-bit de 6 núcleos<br />1.5MB L2 + 4MB L3</td>
      <td colSpan={2}>CPU NVIDIA Carmel ARM®v8.2 64-bit de 6 núcleos, 6MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Memória</td>
      <td>16GB 128-bit LPDDR5<br />102.4GB/s</td>
      <td>8GB 128-bit LPDDR5<br />102.4GB/s</td>
      <td>8GB 128-bit LPDDR5<br />68 GB/s</td>
      <td>4GB 64-bit LPDDR5<br />34 GB/s</td>
      <td>16GB 128-bit LPDDR4x<br />59.7GB/s</td>
      <td>8GB 128-bit LPDDR4x<br />59.7GB/s</td>
    </tr>
    <tr>
      <td>Codificação de vídeo</td>
      <td colSpan={2}>1*4K60 (H.265) | 3*4K30 (H.265) | 6*1080p60 (H.265) | 12*1080p30 (H.265)</td>
      <td colSpan={2}>1080p30 suportado por 1-2 núcleos de CPU</td>
      <td colSpan={2}>2*4K60 | 4*4K30 | 10*1080p60 | 22*1080p30 (H.265)<br /> 2*4K60 | 4*4K30 | 10*1080p60 | 20*108p30 (H.264)</td>
    </tr>
    <tr>
      <td>Decodificação de vídeo</td>
      <td colSpan={2}>1×8K30 (H.265) | 2×4K60 (H.265) | 4×4K30 (H.265) | 9×1080p60 (H.265) | 18×1080p30 (H.265)</td>
      <td colSpan={2}>1*4K60 (H.265) | 2*4K30 (H.265) | 5*1080p60 (H.265) | 11*1080p30 (H.265)</td>
      <td colSpan={2}>2*8K30 | 6*4K60 | 12*4K30 | 22*1080p60 | 44*1080p30 (H.265)<br /> 2*4K60 | 6*4K30 | 10*1080p60 | 22*1080p30 (H.264)</td>
    </tr>
    <tr>
      <td rowSpan={2}>Armazenamento</td>
      <td>eMMC<br /></td>
      <td><br />-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td colSpan={2}>16GB eMMC 5.1</td>
    </tr>
    <tr>
      <td>Expansão</td>
      <td colSpan={6}>SSD M.2 Key M PCIe Gen4.0 (M.2 NVMe 2280 SSD 128G incluído)</td>
    </tr>
    <tr>
      <td rowSpan={6}>E/S</td>
      <td>Rede</td>
      <td colSpan={6}>1* LAN1 RJ45 GbE PoE (PSE 802.3 af 15 W)<br />1* LAN2 RJ45 GbE (10/100/1000Mbps) </td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={6}>3* USB3.2 Gen1, 1* USB2.0 Tipo C (modo Device), 1* USB2.0 Tipo C para Debug UART &amp; RP2040</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={6}>4*DI,4*DO,3*GND_DI,2*GND_DO,1*GND_ISO,1*CAN<br /></td>
    </tr>
    <tr>
      <td>COM</td>
      <td colSpan={6}>1* DB9 (RS232/RS422/RS485)</td>
    </tr>
    <tr>
      <td>Vídeo</td>
      <td colSpan={6}>1*HDMI 2.0 Tipo A</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={6}>1* slot para cartão Nano SIM</td>
    </tr>
    <tr>
      <td rowSpan={7}>Expansão</td>
      <td>Mini PCIe</td>
      <td colSpan={6}>Mini PCIe para 4G/LoRaWAN®&nbsp;&nbsp;(módulo opcional) <br /></td>
    </tr>
    <tr>
      <td>Wi-Fi</td>
      <td colSpan={6}>Suporta Wi-Fi/Bluetooth SMD (módulo opcional) </td>
    </tr>
    <tr>
      <td>M.2 Key B </td>
      <td colSpan={6}>M.2 Key B com suporte a 4G/5G (módulo opcional) </td>
    </tr>
    <tr>
      <td>Ventoinha</td>
      <td colSpan={6}>Sem ventoinha, dissipador de calor passivo<br />1*conector de ventoinha (5V PWM)</td>
    </tr>
    <tr>
      <td>TPM</td>
      <td colSpan={6}>1* conector TPM 2.0 (módulo opcional) </td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={6}>1* soquete RTC (CR1220 incluída), 1* RTC 2 pinos</td>
    </tr>
    <tr>
      <td>Câmera</td>
      <td colSpan={6}>2* CSI (2 trilhas, 15 pinos)</td>
    </tr>
    <tr>
      <td rowSpan={2}>Alimentação</td>
      <td>Fonte de alimentação</td>
      <td colSpan={6}>Bloco terminal DC 12V-24V de 2 pinos</td>
    </tr>
    <tr>
      <td>Adaptador de energia</td>
      <td colSpan={6}>Adaptador de energia de 19V (sem cabo de alimentação) </td>
    </tr>
    <tr>
      <td rowSpan={3}>Mecânico<br /></td>
      <td>Dimensões (L x P x A)</td>
      <td colSpan={6}>159mm×155mm×57mm</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td colSpan={6}>1.57kg</td>
    </tr>
    <tr>
      <td>Instalação</td>
      <td colSpan={6}>Mesa, trilho DIN, montagem em parede, VESA</td>
    </tr>
    <tr>
      <td rowSpan={4}>Ambiente</td>
      <td>Temperatura de operação</td>
      <td colSpan={6}> -20 ~ 60°C com 0.7m/s</td>
    </tr>
    <tr>
      <td>Umidade de operação</td>
      <td colSpan={6}>95% @ 40 °C (sem condensação)</td>
    </tr>
    <tr>
      <td>Vibração</td>
      <td colSpan={6}>3 Grms @ 5 ~ 500 Hz, aleatório, 1 hr/eixo</td>
    </tr>
    <tr>
      <td>Choque</td>
      <td colSpan={6}>Aceleração de pico de 50G (11 mseg)</td>
    </tr>
    <tr>
      <td colSpan={2}>SO</td>
      <td colSpan={6}>Jetpack 5.1 (ou superior) pré-instalado (fornece sistema operacional Linux com pacote de suporte à placa)</td>
    </tr>
    <tr>
      <td colSpan={2}>Certificação</td>
      <td colSpan={6}>FCC, CE, RoHS, UKCA</td>
    </tr>
    <tr>
      <td colSpan={2}>Garantia</td>
      <td colSpan={6}>2 anos</td>
    </tr>
  </tbody>
</table>

## Visão geral do hardware

### Sistema completo

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/3.jpg"/></div>

### Placa carrier

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/4.jpg"/></div>

## Gravar o JetPack

O reComputer Industrial vem pré-instalado com JetPack 5.1.3 em um SSD de 128GB juntamente com os drivers necessários. Isso inclui componentes de SDK como CUDA, CUDNN e TensorRT. No entanto, se você quiser regravar o Jetpack no SSD incluído ou em um novo SSD, você pode seguir as etapas.

:::note
Se você quiser usar SSDs com o reComputer Industrial, recomendamos apenas que escolha as versões de [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html), [256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html) e [512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) da Seeed.
:::

### Pré-requisitos

Você precisa preparar o seguinte hardware antes de começar a usar o reComputer Industrial

- reComputer Industrial
- Adaptador de energia fornecido com cabo de alimentação ([US version](https://www.seeedstudio.com/AC-US-p-5122.html) ou [EU version](https://www.seeedstudio.com/AC-EU-p-5121.html))
- PC host com Ubuntu
- Cabo de transmissão de dados USB Tipo-C
- Monitor externo
- Cabo HDMI
- Teclado e mouse

:::info
Recomendamos que você use dispositivos host físicos com Ubuntu em vez de máquinas virtuais.
Consulte a tabela abaixo para preparar a máquina host.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> Versão do JetPack </td>
        <td class="dbon" colspan="4"> Versão do Ubuntu (Computador Host) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
        <td > 24.04 </td>
    </tr>
    <tr>
        <td >JetPack 5.x</td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 7.2</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

<p><strong>Nota:</strong> Para o JetPack 7.2, o Ubuntu 24.04 é suportado apenas para gravação e instalação de componentes no lado do dispositivo. Use Ubuntu 20.04 ou 22.04 se você precisar de componentes de desenvolvimento no host.</p>
:::

### Entrar no modo Force Recovery

Agora você precisa entrar no modo de recuperação na placa reComputer Industrial para poder gravar o dispositivo.

1. Conecte um cabo USB Tipo-C entre a porta **USB2.0 DEVICE** e o seu PC.
2. Use um pino e insira no orifício **RECOVERY** para pressionar o botão de recuperação e mantenha-o pressionado.
3. Conecte o **conector de alimentação de bloco terminal de 2 pinos** incluído ao conector de alimentação na placa e conecte o adaptador de energia incluído com um cabo de alimentação para ligar a placa.
4. Solte o botão de recuperação.

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/97.png"/></div>

:::note
Certifique-se de ligar o dispositivo enquanto mantém o botão RECOVERY pressionado, caso contrário ele não entrará no modo de recuperação
:::

No PC host com Ubuntu, abra uma janela do Terminal e insira o comando **lsusb**. Se o conteúdo retornado tiver uma das seguintes saídas de acordo com o Jetson SoM que você usa, então a placa está em modo force recovery.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

### Gravar no Jetson

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Jetpack 5.1.1" label="Jetpack 5.1.1">

Aqui oferecemos 2 métodos diferentes de gravação.

1. Baixar a imagem completa do sistema que preparamos, que inclui NVIDIA JetPack, drivers de periféricos de hardware e gravar no dispositivo
2. Baixar o NVIDIA L4T oficial, usar os drivers de periféricos de hardware incluídos e gravar no dispositivo

:::note
O download do primeiro método tem cerca de 14GB e o download do segundo método tem cerca de 3GB.
:::

<Tabs>
<TabItem value="Method 1" label="Method 1">

- **Passo 1:** Baixe a imagem do sistema para o seu PC com Ubuntu correspondente à placa que você está usando

<div class="table-center">
  <table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Dispositivo</th>
      <th>Link da imagem 1</th>
      <th>Link da imagem 2</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUhr3fzFqx9DmH83QrXmFAwBEpfC-VGsyBnqHSoOPPAzGQ?e=Wv7d8f" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EcXVegQs83tJpv3kmJPMmSEB8M9djK_gWgJapIJnOJQeUw?e=ntbXLi" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>F6623A277E538F309999107297405E1<br />378CF3791EA9FD19F91D263E3B4C88333</td>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbaTHCLEwfNOqAR1DH-IAWYB20HBEPG2G-IkPJ1dJJcWJw?e=2VYQXJ" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EStCSSWeyUtLkJXMj5Y6tXcBru2PIQNHLl6p2BZsRbzxjA?e=Gaaa6m" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>414DFE16703D0A2EE972DF1C77FCE2E<br />8B44BC71726BB6EE4B1439C2D0F19A653</td>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbQu844dGA5Fjn3n-320hmoBt6wngMrIv6fErKLEZI1GyQ?e=uSU6qb" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERgyc60CqY9Aog6BMW9-yqQBj8pMaakSFTzHHvb4edt_eg?e=9qFHKp" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>347AB7247ED83286BDFAEF84B49B84C<br />5F5B871AEE68192339EDE4773149D8737</td>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETnL5lrC6IBPqm6Lafx1nCMBJJjml1IrCagrHPGhxFpzxA?e=BBM0kl" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eb7J_TSNsDBCrvc1RbSOmnoBqmjR9jYhkvZpdQJOzkH5KA?e=h4r74v" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>860EC8EB3245CB91E7C5C321B26333B<br />59456A3418731FEF73AE0188DF655EE46</td>
    </tr>
    <tr>
      <td>reComputer Industrial J2012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeD01G8dJ8pIm187oS_VX-sBu3SmD4LhaBmwVz7X4-n_Gw?e=x9ULSq" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Ef_fEAq0aA5JksfnEz62JKABfYTUzlTdOxkiKwoThp17xg?e=UlSs7A" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>821CF92AF1FE8A785689FAF4751615A<br />A30E7F0770B4FA23327DFAF2C8B53FDD7</td>
    </tr>
    <tr>
      <td>reComputer Industrial J2011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVYQRYavCVRJrHGz12qUPlIBdmK3hrjEyglRkuLhBSlYuA?e=SBnrTU" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EVVUAexfVKxDnjbUGtYrJhEB1He6ZXIAD4uriNP76fxbMg?e=kGYF6h" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>DAB8FC069E4C62434C77AE3A6BA13EE<br />FB30003C9A14BFE82DE879B88ACDD85FA</td>
    </tr>
  </tbody>
  </table>
</div>

<p style={{ fontSize: '0.9em', color: 'yellow' , textAlign: 'center'}}>
  * Os arquivos de imagem de Download1 e Download2 são os mesmos. Você pode escolher o link com a velocidade de download mais rápida.
</p>

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host com Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido no wiki, isso confirma que o firmware que você baixou está completo e intacto.
:::

O código-fonte para as imagens acima pode ser encontrado [aqui](https://github.com/Seeed-Studio/Linux_for_Tegra)

- **Passo 2:** Extraia o arquivo gerado

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **Passo 3:** Navegue até o arquivo extraído anteriormente e execute o comando de gravação como a seguir

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

Agora ele começará a gravar a imagem do sistema na placa. Se a gravação for bem-sucedida, você verá a saída abaixo

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Passo 4:** Conecte a placa a um monitor usando o conector HDMI na placa e finalize a configuração inicial

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

Depois disso, a placa será reiniciada e estará pronta para uso!

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>
  </TabItem>
<TabItem value="Method 2" label="Method 2">

**Baixar e preparar NVIDIA L4T e rootfs**

```sh
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/jetson_linux_r35.3.1_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2
tar xf jetson_linux_r35.3.1_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Baixar e preparar drivers**

- **Passo 1:** Baixe os arquivos de driver para o seu PC com Ubuntu correspondentes à placa que você está usando

<table>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Link para download</th>
      <th>Versão do JetPack</th>
      <th>Versão do L4T</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>Jetson Orin NX 8GB/ 16GB,<br />Orin Nano 8GB</td>
      <td rowSpan={2}><a href="https://sourceforge.net/projects/nvidia-jetson/files/reComputer-Industrial/orin-nx-8-16-nano-8-recomputer-industrial.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td rowSpan={4}>5.1.1</td>
      <td rowSpan={4}>35.3.1</td>
    </tr>
    <tr>
    </tr>
    <tr>
      <td>Jetson Orin Nano 4GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reComputer-Industrial/orin-nano-4-recomputer-industrial.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Xavier NX 8GB/ 16GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reComputer-Industrial/xavier-nx-8-16-recomputer-industrial.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
  </tbody>
</table>

- **Step 2:** Mova os drivers periféricos baixados para a mesma pasta do diretório **Linux_For_Tegra**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/125.png"/></div>

- **Step 3:** Extraia o arquivo .zip de driver baixado. Aqui instalamos adicionalmente o pacote **unzip**, que é necessário para descompactar o arquivo .zip

```sh
sudo apt install unzip
sudo unzip xxxx.zip # Replace xxxx with the driver file name
```

Aqui será perguntado se deseja substituir os arquivos. Digite A e pressione ENTER para substituir os arquivos necessários

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/126.png"/></div>

- **Step 4:** Navegue até o diretório **Linux_for_Tegra** e execute o comando de gravação (`flash`) como a seguir

```sh
cd Linux_for_Tegra

# For Orin NX and Orin Nano
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --network usb0 recomputer-orin-industrial external

# For Xavier NX
sudo ADDITIONAL_DTB_OVERLAY_OPT="BootOrderNvme.dtbo" ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_l4t_t194_qspi_p3668.xml --no-systemimg" --network usb0  recomputer-xavier-nx-industrial external
```

Agora ele começará a gravar a imagem do sistema na placa. Se a gravação for bem-sucedida, você verá a saída abaixo

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Step 5:** Conecte a placa a um monitor usando o conector HDMI na placa e finalize a configuração inicial

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

Depois disso, a placa será reiniciada e você verá o seguinte

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

- **Step 6:** Abra uma janela de terminal no dispositivo, execute o seguinte, o dispositivo será reiniciado e estará pronto para uso!

```sh
systemctl disable nvgetty.service
sudo depmod -a
sudo reboot
```

Além disso, se você quiser instalar componentes do SDK, como CUDA, cuDNN, TensorRT, execute o seguinte

```sh
sudo apt update
sudo apt install nvidia-jetpack -y
```

  </TabItem>
  </Tabs>

---

</TabItem>

<TabItem value="Jetpack 5.1.3" label="Jetpack5.1.3">

- **Step 1:**Baixe a imagem do sistema para o seu PC com Ubuntu correspondente à placa que você está usando

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Device</th>
      <th>Link</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAJh3XDNNnbT7NU_WmR6d8-AV2KS89nk2raBrtbDX5lbRY" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>436017DA6FBA2EF910F5F6C5D80749FB53029EC5108A461101CA3A69C1F8CEC3</th>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCggS3uTiIzQqidauGapvXtAS8tiOaWRZtusAN1S6SXsTs?e=LLjnrY" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>9c590665723aa8847898f976070ecc120b936474262b360459627342c4c0c6f1</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAx3qELD5fvTKvYA8Bi-TwAAV5SJdxC6ok_lnwjqiw3Prg?e=MIcJng" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>fe3fe9b275156ddd9cde2b4fcf628122bf4a66e1ff1184cf6769be81ba6e4942</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBiL7sGB2_7RZs5FNIf2bikAXzJxCr6z1XA8fIkgqpzluA?e=dZYPSh" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>75de6440ca1c04f08b4356fee0d8e4a4ba1cb858f9fabb5bbc0eebd3c387c81d</th>
    </tr>
        <tr>
      <td>reComputer Industrial J2012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfB-onLVAIxFreZTCSpejYIBPX42dZoKnKrDm8ZC27DI_w?e=fAOXZr" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>B54CF2545A8ED8BFE115C439B0B427112BD882F03292B9F5C03AB55746C707C1</th>
    </tr>
        <tr>
      <td>reComputer Industrial J2011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXmfIDIx80hCk61-dZogyUwBe6uOlz0U6tZEW3i7WC2JBw?e=BLjUW3" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>11BDB47D06CA8409CFCEA109B8BACD9BB79A54A275D2664D6CF492BFEAD31131</th>
    </tr>
  </tbody>
  </table>
</div>

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host com Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido no wiki, isso confirma que o firmware que você baixou está completo e intacto.
:::

:::info
O código-fonte das imagens acima pode ser encontrado [aqui](https://github.com/Seeed-Studio/Linux_for_Tegra).
:::

- **Step 2:** Extraia o arquivo gerado

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **Step 3:** Navegue até o arquivo extraído anteriormente e execute o comando de gravação (`flash`) como a seguir

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

Agora ele começará a gravar a imagem do sistema na placa. Se a gravação for bem-sucedida, você verá a saída abaixo

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Step 4:** Conecte o J401 a um monitor usando o conector HDMI na placa e finalize a configuração inicial:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Conclua a **System Configuration** de acordo com suas necessidades.
:::

</TabItem>

<TabItem value="Jetpack 6.0" label="Jetpack6.0">

- **Step 1:** Baixe a imagem do sistema para o seu PC com Ubuntu correspondente à placa que você está usando

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Device</th>
      <th>Link</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbKZo6jvhR5MtP5hSB2mWIUBLkMB_pl4zCJoGhAbao5yQw?e=WmoPbO" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>6c1e5abbdd60f771cd5c1a6e82f4ce7dfd0448018af94926d0240b853badbaf0</th>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdScxnClMMZElyNJXLzqY5EBSXN9cyUnkkl4fWfsDhn0xg?e=XYZB6n" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>79c16c25602ebefa239402c23d0dcdae5ddc3eb23fdadb90654fbc34a1aa44dd</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Edt8dUapj7VCh5-X5ZgdeUIBjBSnx2wSweO-gjkMs1BxSw?e=Hi5rvU" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>7221185ba7f499d837b046e6f8b73c1c9f4e28cc76eb2068719370e00dcd3f42</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbKvTU_hdp9DjvFMMqi_RwkBC6LlpTtF_xfchhTtiV7fFg?e=pEhzOx" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>7b997786317b518f9762e0828a0ac411ef984bd9927a9eeb5f8a900b185627ba</th>
    </tr>
  </tbody>
  </table>
</div>

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host com Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido no wiki, isso confirma que o firmware que você baixou está completo e intacto.
:::

:::info
O código-fonte das imagens acima pode ser encontrado [aqui](https://github.com/Seeed-Studio/Linux_for_Tegra).
:::

- **Step 2:** Extraia o arquivo gerado

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **Passo 3:** Navegue até o arquivo extraído anteriormente e execute o comando de gravação (`flash`) como segue

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

Agora a imagem do sistema começará a ser gravada na placa. Se a gravação for bem-sucedida, você verá a saída abaixo

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Passo 4:** Conecte a placa a um monitor usando o conector HDMI na placa e conclua a configuração inicial

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

Depois disso, a placa será reiniciada e estará pronta para uso!

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>
</TabItem>

<TabItem value="Jetpack 6.1" label="Jetpack6.1">

- **Passo 1:** Baixe a imagem do sistema para o seu PC com Ubuntu correspondente à placa que você está usando

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Dispositivo</th>
      <th>Link</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUNMocOFBZNPqqC-W9uiIM4BgYUw-ZL0pk6juOVPFd_vqg?e=C8ldYX" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>6A2B3A71EE77E7000034351020FBF9A5260F944FB30B5DE672BF7897DEE87B5A</th>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfYrDXxD_oRCuk5nv8WmtqIBPY9FjkEHiAmsZDpvDj-sfQ?e=qxV5MG" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>EC94A1F9E10D07CE2C78D8C1B742575A84DA543CCD95564D8E0BEC823C0CA514</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeOq0sfMDhBEqZPX-ti_gJ0BzUdSGeFf5RrSdxFnQ70aNQ?e=GVr10a" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>547E541E40A133A2CDEB3FAC399850ABC108325BBF109771420DDBCAF19E5E29</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXK1GomjByJKnmt3OdE5Vq8BSqzYZm1MY_yD18YjmRplLw?e=dIWPKA" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>B7F400C225423C8BC4C00A5915C3C634D2D7B15145FE0735479E6AD7613D07E5</th>
    </tr>
  </tbody>
  </table>
</div>

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host com Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido na wiki, isso confirma que o firmware que você baixou está completo e intacto.
:::

:::info
O código-fonte para as imagens acima pode ser encontrado [aqui](https://github.com/Seeed-Studio/Linux_for_Tegra).
:::

- **Passo 2:** Extraia o arquivo gerado

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **Passo 3:** Navegue até o arquivo extraído anteriormente e execute o comando de gravação (`flash`) como segue

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

Agora a imagem do sistema começará a ser gravada na placa. Se a gravação for bem-sucedida, você verá a saída abaixo

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Passo 4:** Conecte o J401 a um monitor usando o conector HDMI na placa e conclua a configuração inicial:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Conclua a **Configuração do Sistema** de acordo com suas necessidades.
:::

</TabItem>

<TabItem value="Jetpack 6.2" label="Jetpack6.2">

:::danger
Se você estiver usando um módulo **Orin NX 16GB/8GB**, **não habilite o modo MAXN SUPER**.
A capacidade de resfriamento do J4011/J4012 é insuficiente para suportá-lo, e forçar esse modo pode resultar em danos permanentes ao módulo.
:::

- **Passo 1:** Baixe a imagem do sistema para o seu PC com Ubuntu correspondente à placa que você está usando

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Dispositivo</th>
      <th>Link</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB2G7x8LjMaTZ_JSm8QTKebAfjjE1zNMkx9967kemKxPdw?e=hdGqgd" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>adf524fa3c77f32da9a12bb875ec4b24<br />8da9dad4e4cce9c51641e1cabca4ab88</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAj4lhkKh6xTIe49xxjoViRAdXQciVaQMQmvpeAuo_ng6k?e=nGj5c7" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>38c8a5cbf2df922725824503e76605d4<br />43111e7ffec1db9eb3de4fccc7d54c21</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBUOqMK6XUtQL30glQY9r0jAeyJSw9AMIaGOzh5jsgSrAc?e=iRMDpG" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>2bd6ebb246f5b967a64b0fb10a4e85ac<br />4de9e40951d1fdde9fc69025525d8d5a</th>
    </tr>
  </tbody>
  </table>
</div>

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host com Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido na wiki, isso confirma que o firmware que você baixou está completo e intacto.
:::

:::info
O código-fonte para as imagens acima pode ser encontrado [aqui](https://github.com/Seeed-Studio/Linux_for_Tegra).
:::

:::note
Observe que, devido ao aumento do consumo de energia e da geração de calor após habilitar o `super mode`, o [reComputer Industrial J4011](https://www.seeedstudio.com/reComputer-Industrial-J4011-p-5681.html) e o [reComputer Industrial J4012](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html) não podem operar de forma estável no modo mais alto com o JetPack 6.2. Portanto, apenas o J4012 (Orin NX 16GB) está disponível para o JetPack 6.2, enquanto o J4011 (Orin NX 8GB) não é recomendado.
Atualmente estamos projetando uma nova versão do reComputer. Fique ligado!
:::

- **Passo 2:** Extraia o arquivo gerado

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **Passo 3:** Navegue até o arquivo extraído anteriormente e execute o comando de gravação (`flash`) como segue

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

Agora a imagem do sistema começará a ser gravada na placa. Se a gravação for bem-sucedida, você verá a saída abaixo

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Passo 4:** Conecte a placa a um monitor usando o conector HDMI na placa e conclua a configuração inicial

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Conclua a **Configuração do Sistema** de acordo com suas necessidades.
:::

- **Passo 4:** Conecte o J401 a um monitor usando o conector HDMI na placa e conclua a configuração inicial:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Conclua a **Configuração do Sistema** de acordo com suas necessidades.
:::

</TabItem>

<TabItem value="Jetpack 7.2" label="Jetpack7.2">

- **Passo 1:** Baixe a imagem do sistema para o seu PC com Ubuntu correspondente à placa que você está usando

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Dispositivo</th>
      <th>Link</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBfReHmaDICTY_-byQpDlSOAXzoeJxfBtyuMYKgIKn5pqo?e=kum4Aa" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>51035f2fee6a383a973250f1efcc2ea7<br />7c083dc4f3e7661541c5fdc579bc9f9d</th>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC2tUVw9b3HTqtmb7QI6Bi5AZS9iz9O9lXJyPlI07R5XUY?e=yY7o3T" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>dd03129ba599101972eb2ea75eaa2e5e<br />3b203d04130dbf6aaf4683461587945f</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQClwzLEoHNhR5r0RVE9G5H8Aa6Tc4-uBwOJNP-eDi4gSMI?e=8v78Ro" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>2bacc1a2577819630702901f2200e2e38<br />a905eb292a71e63532b5056a9e73f87</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQD1SrMagx31RoPYJRTfH0anAS_G9TCSJckK1pV_DdYFFPU?e=K0QfUg" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>b0a1466b3b0c7582a9d398109f53e507<br />92a6526fc51b5b1b9ddb1c04bdb52692</th>
    </tr>
  </tbody>
  </table>
</div>

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host com Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido na wiki, isso confirma que o firmware que você baixou está completo e intacto.
:::

:::info
O código-fonte para as imagens acima pode ser encontrado [aqui](https://github.com/Seeed-Studio/Linux_for_Tegra).
:::

- **Passo 2:** Extraia o arquivo gerado

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **Passo 3:** Navegue até o arquivo extraído anteriormente e execute o comando de gravação (`flash`) como segue

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

Agora ele começará a gravar a imagem do sistema na placa. Se a gravação for bem-sucedida, você verá a saída abaixo

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Passo 4:** Conecte a placa a um monitor usando o conector HDMI na placa e finalize a configuração inicial

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Conclua a **Configuração do Sistema** de acordo com suas necessidades.
:::

</TabItem>

</Tabs>

<!-- Code END -->

## Uso de Hardware e Interfaces

Para saber mais sobre como usar todo o hardware e as interfaces na placa reComputer Industrial, recomendamos que você siga as documentações relevantes da wiki que preparamos.

- [Uso de Hardware e Interfaces do reComputer Industrial J20](https://wiki.seeedstudio.com/pt-br/reComputer_Industrial_J20_Hardware_Interfaces_Usage)
- [Uso de Hardware e Interfaces do reComputer Industrial J40, J30](https://wiki.seeedstudio.com/pt-br/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage)

## Recursos

- [Folha de Dados do reComputer Industrial](https://files.seeedstudio.com/products/NVIDIA/reComputer-Industrial-datasheet.pdf)
- [Guia de Referência do reComputer Industrial](https://files.seeedstudio.com/products/NVIDIA/reComputer-Industrial-Reference-Guide.pdf)
- [Comparação de Dispositivos e Placas Carrier NVIDIA Jetson](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [Arquivo 3D do reComputer Industrial](https://files.seeedstudio.com/products/NVIDIA/Industrial/reComputer-Industrial.stp)
- [Catálogo das Séries Jetson da Seeed](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Casos de Sucesso de Edge AI da Seeed Studio](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Comparação das Séries Jetson da Seeed](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Visão Geral dos Dispositivos Jetson da Seeed](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
