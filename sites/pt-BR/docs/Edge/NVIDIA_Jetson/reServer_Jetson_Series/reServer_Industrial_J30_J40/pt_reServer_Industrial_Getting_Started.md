---
description: Introdução ao reServer Industrial
title: Introdução ao reServer Industrial
keywords:
  - reServer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reServer_Industrial_Getting_Started
sku: 114110247,114110248,114110250,114110249
last_update:
  date: 09/22/2023
  author: Lakshantha
createdAt: '2023-06-08'
updatedAt: '2026-06-29'
url: https://wiki.seeedstudio.com/pt-br/reServer_Industrial_Getting_Started/
---

# Introdução ao reServer Industrial

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reServer-Industrial/1.png"/></div>

A série reServer Industrial oferece servidores NVR (Network Video Recorder) sem ventoinha, compactos e habilitados para IA, incluindo módulos NVIDIA Jetson™ Orin Nano/Orin NX, com desempenho de IA de 20 TOPS a 100 TOPS. O reServer Industrial vem pré-instalado com Jetpack 5.1.1, simplifica o desenvolvimento, é ideal para construir VMS (Video Management System) juntamente com poderosos recursos de IA, o que traz transformação digital para setores como cidades inteligentes, segurança, automação industrial e fábricas inteligentes.

O reServer Industrial vem com um dissipador de calor passivo e um design sem ventoinha, tornando-o ideal para uso em ambientes exigentes. O dissipador de calor passivo permite um resfriamento eficiente sem a necessidade de uma ventoinha, reduzindo o risco de falha de componentes devido a poeira ou outros contaminantes. O design sem ventoinha também reduz os níveis de ruído e o consumo de energia, tornando-o adequado para uso em ambientes sensíveis a ruído e minimizando os custos de energia.

O reServer Industrial possui 5 portas RJ45 GbE, das quais 4 são portas PoE PSE para fornecer energia via Ethernet para dispositivos como câmeras IP. Isso elimina a necessidade de uma fonte de alimentação separada e facilita a implantação de dispositivos de rede em áreas sem tomadas de energia facilmente disponíveis. A porta GbE restante é usada para conectar a um switch de rede ou roteador, permitindo a comunicação com outros dispositivos na rede e o acesso à Internet.

:::note
Opções de personalização disponíveis: identidade visual com logotipo, embalagem e gravação de firmware.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a>
<a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>Personalizar agora ➜</font></span></strong></a>
</div>

## Recursos

- **Servidor de Borda de IA Compacto e sem Ventoinha:** Alimentado por módulos NVIDIA Jetson™ Orin Nano/Orin NX, com desempenho de IA de 20 TOPS a 100 TOPS, faixa de temperatura mais ampla de -20 ~ 60°C com fluxo de ar de 0,7 m/s
- **Processamento Multi-Stream:** 5× GbE RJ45 (4 para 802.3af PSE), lida com múltiplos streams com processamento em tempo real
- **Armazenamento Expansível:** 2 baias para unidades SATA HDD/SSD de 2,5", além de um soquete M.2 2280 para SSD NVMe
- **Interfaces Industriais:** Inclui porta COM, portas DI/DO, porta CAN, USB 3.1 e módulo TPM2.0 opcional
- **Conectividade Híbrida:** Suporta 5G/4G/LTE/LoRaWAN® (módulo opcional) com slot para cartão Nano SIM
- **Certificações:** FCC, CE, UKCA, ROHS, KC

## Especificações

<table>
  <thead>
    <tr>
      <th colSpan={2}>Nome do Produto </th>
      <th><a href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">reServer Industrial</a><br /><a href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">J4012</a></th>
      <th><a href="https://www.seeedstudio.com/reServer-industrial-J4011-p-5748.html">reServer Industrial</a><br /><a href="https://www.seeedstudio.com/reServer-industrial-J4011-p-5748.html">J4011</a></th>
      <th><a href="https://www.seeedstudio.com/reServer-industrial-J3011-p-5750.html">reServer Industrial</a><br /><a href="https://www.seeedstudio.com/reServer-industrial-J3011-p-5750.html">J3011</a></th>
      <th><a href="https://www.seeedstudio.com/reServer-industrial-J3010-p-5749.html">reServer Industrial</a><br /><a href="https://www.seeedstudio.com/reServer-industrial-J3010-p-5749.html">J3010</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan={2}>Módulo NVIDIA Jetson</td>
      <td>Orin NX 16GB</td>
      <td>Orin NX 8GB</td>
      <td>Orin Nano 8GB</td>
      <td>Orin Nano 4GB</td>
    </tr>
    <tr>
      <td colSpan={2}>SKU</td>
      <td>114110247</td>
      <td>114110248</td>
      <td>114110249</td>
      <td>114110250</td>
    </tr>
    <tr>
      <td rowSpan={6}>Processador<br />Sistema</td>
      <td>Desempenho de IA</td>
      <td>100 TOPS</td>
      <td>70 TOPS</td>
      <td>40 TOPS</td>
      <td>20 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td colSpan={3}>GPU NVIDIA Ampere com 1024 núcleos e 32 Tensor Cores </td>
      <td>GPU NVIDIA Ampere com 512 núcleos e 16 Tensor Cores</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 64 bits de 8 núcleos; 2MB L2 + 4MB L3 </td>
      <td colSpan={3}>CPU Arm® Cortex®-A78AE v8.2 64 bits de 6 núcleos 1.5MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Memória</td>
      <td>16GB 128-bit LPDDR5 102.4GB/s</td>
      <td>8GB 128-bit LPDDR5 102.4GB/s</td>
      <td>8GB 128-bit LPDDR5 68 GB/s</td>
      <td>4GB 64-bit LPDDR5 34 GB/s</td>
    </tr>
    <tr>
      <td>Codificação de Vídeo</td>
      <td colSpan={2}>Padrões suportados: H.265 (HEVC), H.264, AV1 1×4K60 (H.265) | 3×4K30 (H.265) | 6×1080p60 (H.265) | 12×1080p30 (H.265)</td>
      <td colSpan={2}>1080p30 suportado por 1-2 núcleos de CPU </td>
    </tr>
    <tr>
      <td>Decodificação de Vídeo</td>
      <td colSpan={2}>Padrões suportados: H.265 (HEVC), H.264, VP9, AV1 1×8K30 (H.265) | 2×4K60 (H.265) | 4×4K30 (H.265) | 9×1080p60 (H.265) | 18×1080p30 (H.265)</td>
      <td colSpan={2}>Padrões suportados: H.265 (HEVC), H.264, VP9, AV1 1×4K60 (H.265) | 2×4K30 (H.265) | 5×1080p60 (H.265) | 11×1080p30 (H.265)</td>
    </tr>
    <tr>
      <td rowSpan={2}>Armazenamento</td>
      <td>eMMC</td>
      <td colSpan={4}>-</td>
    </tr>
    <tr>
      <td>Expansão</td>
      <td colSpan={4}>M.2 Key M (2280) PCIe Gen4.0 SSD (inclui SSD M.2 NVMe 128G)</td>
    </tr>
    <tr>
      <td rowSpan={9}>I/O</td>
      <td>Ethernet</td>
      <td colSpan={4}>1× LAN0 RJ45 GbE (10/100/1000Mbps)</td>
    </tr>
    <tr>
      <td> </td>
      <td colSpan={4}>4× LAN RJ45 GbE PoE (PSE 802.3 af 15 W, 10/100/1000Mbps)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={4}>4× USB3.1, 1× USB2.0 Tipo C (modo Device), 1× USB2.0 Tipo C para Debug UART &amp; RP2040</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={4}>4×DI,4×DO,3×GND_DI,2×GND_DO,1×GND_ISO,1×CAN</td>
    </tr>
    <tr>
      <td>COM</td>
      <td colSpan={4}>1× DB9 (RS232/RS422/RS485)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td colSpan={2}>1×HDMI 2.1 Tipo A 7680x4320 a 30 Hz</td>
      <td colSpan={2}>1×HDMI 1.4 Tipo A 3840x2160 a 30 Hz</td>
    </tr>
    <tr>
      <td>SATA</td>
      <td colSpan={4}>2 baias para suportar HDD/SSD SATA de 2,5" (SATA III 6.0Gbps)</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={4}>1× slot para cartão Nano SIM</td>
    </tr>
    <tr>
      <td>Botão</td>
      <td colSpan={4}>Botão de Reset, Botão de Recovery</td>
    </tr>
    <tr>
      <td rowSpan={5}>Expansão</td>
      <td>Mini PCIe</td>
      <td colSpan={4}>Mini PCIe para LoRaWAN®/4G/Série Wireless (módulo opcional)</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td colSpan={4}>M.2 Key B (3042/3052) suporta 4G/5G (módulo opcional) </td>
    </tr>
    <tr>
      <td>Ventoinha</td>
      <td colSpan={4}>Sem ventoinha, dissipador de calor passivo; 1× conector de ventoinha (5V PWM)</td>
    </tr>
    <tr>
      <td>TPM</td>
      <td colSpan={4}>1× conector TPM 2.0 (módulo opcional)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={4}>1× soquete RTC (CR1220 incluída),×RTC 2 pinos</td>
    </tr>
    <tr>
      <td rowSpan={2}>Alimentação</td>
      <td>Fonte de Alimentação</td>
      <td colSpan={4}>Bloco terminal DC 12V-36V de 2 pinos</td>
    </tr>
    <tr>
      <td>Adaptador de Energia</td>
      <td colSpan={4}>Adaptador de Energia 24V /5A (sem cabo de alimentação)</td>
    </tr>
    <tr>
      <td rowSpan={9}>Mecânico</td>
      <td>Dimensões (L x P x A)</td>
      <td colSpan={4}>194.33mm×187mm×95.5mm</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td colSpan={4}>2.8kg</td>
    </tr>
    <tr>
      <td>Instalação</td>
      <td colSpan={4}>Mesa, trilho DIN, VESA</td>
    </tr>
    <tr>
      <td>Temperatura de Operação</td>
      <td colSpan={4}>-20 ~ 60°C com 0.7m/s</td>
    </tr>
    <tr>
      <td>Umidade de Operação</td>
      <td colSpan={4}>95% @ 40 °C (sem condensação)</td>
    </tr>
    <tr>
      <td>Temperatura de Armazenamento</td>
      <td colSpan={4}>-40 ~ 85°C</td>
    </tr>
    <tr>
      <td>Umidade de Armazenamento</td>
      <td colSpan={4}>60°C@ 95% RH (sem condensação)</td>
    </tr>
    <tr>
      <td>Vibração</td>
      <td colSpan={4}>3 Grms @ 5 ~ 500 Hz, aleatório, 1 hr/eixo</td>
    </tr>
    <tr>
      <td>Choque</td>
      <td colSpan={4}>Aceleração de pico de 50G (duração de 11 mseg, eMMC, microSD ou mSATA)</td>
    </tr>
    <tr>
      <td colSpan={2}>SO</td>
      <td colSpan={4}>Jetpack 5.1.1 (ou superior) pré-instalado (fornece sistema operacional Linux com pacote de suporte à placa) </td>
    </tr>
    <tr>
      <td colSpan={2}>Certificação</td>
      <td colSpan={4}>FCC, CE, RoHS, UKCA, KC</td>
    </tr>
    <tr>
      <td colSpan={2}>Garantia</td>
      <td colSpan={4}>2 anos</td>
    </tr>
  </tbody>
</table>

## Visão Geral do Hardware

### Sistema Completo

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/2.jpg"/></div>

### Placa Carrier

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/3.jpg"/></div>

## Gravar o JetPack

:::danger
O dispositivo virá com JetPack 5.1.1 pré-instalado. Se não houver requisitos especiais, você não precisa regravar o sistema.
:::

O reServer Industrial vem pré-instalado com JetPack 5.1.1 em um SSD de 128GB juntamente com os drivers necessários. Isso inclui componentes do SDK como CUDA, CUDNN e TensorRT. No entanto, se você quiser regravar o JetPack no SSD incluído ou em um novo SSD, você pode seguir as etapas abaixo.

:::note
Se você quiser usar SSDs com o reServer Industrial, recomendamos apenas que escolha as versões de [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html), [256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html), [512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) e [1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html) da Seeed.
:::

### Pré-requisitos

Você precisa preparar o seguinte hardware antes de começar a usar o reServer Industrial

- reServer Industrial
- Fonte de alimentação fornecida com cabo de energia ([versão US](https://www.seeedstudio.com/AC-US-p-5122.html) ou [versão EU](https://www.seeedstudio.com/AC-EU-p-5121.html))
- PC host com Ubuntu (nativo ou VM usando VMware Workstation Player)
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

<p><strong>Note:</strong> Para o JetPack 7.2, o Ubuntu 24.04 é suportado apenas para gravação e instalação de componentes no lado do dispositivo. Use Ubuntu 20.04 ou 22.04 se você precisar de componentes de desenvolvimento no host.</p>
:::

### Entrar no modo Force Recovery

Agora você precisa entrar no modo de recuperação na placa reServer Industrial para poder gravar o dispositivo. Conecte um cabo USB Tipo-C entre a porta **DEVICE** e o seu PC. Use um pino e insira no orifício **REC** para pressionar o botão de recuperação e, enquanto o mantém pressionado, conecte o **conector de alimentação de bloco terminal de 2 pinos** incluído ao conector de alimentação na placa (certifique-se de usar os 2 parafusos para fixar o terminal no lugar) e conecte o adaptador de energia incluído com um cabo de energia para ligar a placa

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reServer-Industrial/4.jpg"/></div>

:::note
Certifique-se de ligar o dispositivo enquanto mantém o botão RECOVERY pressionado, caso contrário ele não entrará no modo de recuperação
:::

No PC host com Ubuntu, abra uma janela do Terminal e insira o comando **lsusb**. Se o conteúdo retornado tiver uma das seguintes saídas de acordo com o Jetson SoM que você usa, então a placa está em modo de recuperação forçada.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

### Diferentes métodos de gravação

Aqui oferecemos 2 métodos diferentes de gravação.

1. Baixar a imagem completa do sistema que preparamos, que inclui NVIDIA JetPack, drivers de periféricos de hardware e gravar no dispositivo
2. Baixar o NVIDIA L4T oficial, usar os drivers de periféricos de hardware incluídos e gravar no dispositivo

:::note
O download do primeiro método tem cerca de 14GB e o download do segundo método tem cerca de 3GB
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="method1" label="Método 1">

#### Baixar imagem do sistema

- **Passo 1:** Baixe a imagem do sistema para o seu PC com Ubuntu correspondente à placa que você está usando.

<div class="table-center">
  <table style={{textAlign: 'center'}}>
    <thead>
      <tr>
        <th>Dispositivo</th>
        <th>Versão do JetPack</th>
        <th>Versão do L4T</th>
        <th>Link da imagem</th>
        <th>Link alternativo da imagem</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowSpan={6}>reServer Industrial J4012</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUVO61wR2NhFqcAQCeWxsBsBWgOf5p_BBTxSgPG4gfAx7g?e=v0Qhhm" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EWxVw3rZF-JPuKp0ksJZkGABWmsSxVizaJIqQBL5TDL1JA?e=4JJ2XV" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQApYwrXCs7WTqZPvGNHA7YuAdAS_5YcEIXv-gnenja-Szk?e=Ub9Pvc" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EV0nlnSfW3NEmcDq4l3u1M4BrzThb0-y44qa4hGXk-XfWg?e=G9ub1C" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EdCn0yi0ArRKivHb3mKLrwcBmBEKXlGKLCnNkRQNzyylAw?e=QTnhQa" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWbfqyoEzXBBsDycFgKH0lEB05TQNLcZidMt2Py2ZOtLdw?e=4etAqu" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDs10njGAUER7nbpqF6dI7ZAceK7lnySeHU9k7KIySj6HA?e=iMWtO8" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>7.2</td>
        <td>39.2.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB2YV-odVTxTZGy3D-1hPMEAXOH0iN6v_IAmHIUVZFymiE?e=cgN4kc" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td rowSpan={6}>reServer Industrial J4011</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EYMjh00vng9JhG0d26iS1oIBOhHSs4oa19pPd40qrTkD7Q?e=x6zZTH" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EW5Dood6aQ9DpT6ZaXWF50QBmyAyOowCktzqZj48sQeyhw?e=VVP56J" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDP0PJc34WXRLzV7VqXzinRAWDanqL6CzmSPfSILTojKBI?e=XYR9ee" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZlrBLKGf5VDiczIJaPNpNoBcby3urzv85oWmS34pKtcGg?e=u7aWDL" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQJBb6D2ISBEnoUnUkqVEgkB9npGJ48jw5p2DXFIWaNJxA?e=lOJiFM" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EekoAp4j8WJHi9xe-eoJTW4BH-qx2Sttmlh7uljQdNkGXw?e=g7ZNa1" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
            <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDoOdZqBdvLQaQ45yKI9a7zAVwIdyxIrU_Sk2xicLYy6QE?e=cepk9Z" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>7.2</td>
        <td>39.2.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDWd-W-rHfES4JiXSPXUWJ4AQbt4APS-jeWDtskFAZb6kw?e=XaI195" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td rowSpan={6}>reServer Industrial J3011</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EelLW5qjyWBEgoJN_SUmKhQBTnkElasNJtxxfSgfVuXXuw?e=c2THTl" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eb6xTuWGRdlDpJfgLSWS7S4BpnKYxkI9RKl6tJbU0xI4FQ?e=m84vbP" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQA4HdvfMZwTQY0Aceq3uygRAVlGI13-oGlSRHRxDpxanUU?e=fCJ8ww" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY0cen9MPIhJpM2LBfm2edEBZtw53n2C9PwqsY2XaiSH_w?e=LWQren" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EdqRMLVCzHtIkHUShgZ91xoBK367uzXyC_mTGQOzlfJhyQ?e=wgOhwj" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUnzsQBX-jxJkHZNxkYdoFsBN0coyFSY50_5LspOv8kfew?e=2baOzY" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBZKkQtQMJiRYcOfA3DzOtEAV7O4ayXgVWrMKAclHYO-HQ?e=LWfgcH" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>7.2</td>
        <td>39.2.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB5T6WBaPY7Q5vjG9Q_u2uJAW2zWj9vOYU3GGT_R5lqSzE?e=gmOKa7" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td rowSpan={6}>reServer Industrial J3010</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETo-G6kS2atGpfsWK6uX2HIBcrwsAboHjDBB_rypE4iyTA?e=GZyglq" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EfzhFgx4V3NGu3q1MBtdqFkBdIxC0emeKmE22AHQL1GxhQ?e=KNHsQm" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQADLFrAQ2RAQb74nXNq6MlnAeaN-qPzaTk0Sg21ZqawFxA?e=KXkWZZ" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQgrBDUICyZCnKBI_qVeupoBYqQJ1dP7_lcxUwxUphg6Qw?e=ObUzPI" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EXxmIAk7sGdOnPcaZHvz7ykB36pGkNwZscpdu3ZytrfD0Q?e=ElJ2bb" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ET-LxPOYaNtIjoJQ4I-gKEcBxU-AmFX9R-mWPH1p-eyBdA?e=EpAopw" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBUl_MHgm8YSY6OQyCuNEf-AfgUPNTd9-rd2I6pimkcraE?e=KzSPtW" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>7.2</td>
        <td>39.2.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQA_GpwpaczHTbTaXQEsNAreAVBjoiwpi7dtiz4kiOZRlIo?e=ZKa4sL" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
    </tbody>
  </table>
</div>

<div class="table-center">
  <table style={{textAlign: 'center'}}>
    <thead>
      <tr>
        <th>Device</th>
        <th>JetPack Version</th>
        <th>SHA256</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>reServer Industrial J4012</td>
        <td>7.2</td>
        <td>fcf2eb2d0977856cc8e74aa1483397b61<br />eff588fdae00145c67a9ed7953beba7</td>
      </tr>
      <tr>
        <td>reServer Industrial J4011</td>
        <td>7.2</td>
        <td>b687dc99d86d9e9a9c071b39d3062e68<br />d8e7f542d58fcb7e8117db21b18d9c11</td>
      </tr>
      <tr>
        <td>reServer Industrial J3011</td>
        <td>7.2</td>
        <td>d805862bd75bb8d2f0970fb72c336d30<br />a69c7e3daa84dcecce83806e42b794e1</td>
      </tr>
      <tr>
        <td>reServer Industrial J3010</td>
        <td>7.2</td>
        <td>86ad9eec225bab64adccfb3d9ce5678f<br />85fb7f4881fe589df9e74334fb477acc</td>
      </tr>
    </tbody>
  </table>
</div>

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host Ubuntu, execute `sha256sum <file_name>.tar.gz` e compare a saída com o valor SHA256 na tabela acima.
:::

<p style={{ fontSize: '0.9em', color: 'yellow' , textAlign: 'center'}}>
  * Os arquivos de imagem de Download1 e Download2 são os mesmos. Você pode escolher o link com a velocidade de download mais rápida.
</p>

<!-- The source code for the above images can be found [here](https://github.com/Seeed-Studio/Linux_for_Tegra) -->

- **Passo 2:** Extraia o arquivo gerado

```sh
tar -xvf <file_name>.tar.gz
# For JetPack 7.2 example:
# tar -xvf mfi_reserver-industrial-orin-nx-16g-7.2.0-39.2.0-2026-06-24.tar.gz
```

#### Gravar no Jetson

- **Passo 1:** Navegue até o arquivo extraído anteriormente e execute o comando de gravação da seguinte forma

```sh
cd mfi_xxxx
# For JetPack 7.2 example:
# cd mfi_reserver-industrial-orin-nx-16g-7.2.0-39.2.0
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

Agora ele começará a gravar a imagem do sistema na placa. Se a gravação for bem-sucedida, você verá a saída abaixo

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Passo 2:** Conecte a placa a um monitor usando o conector HDMI na placa e finalize a configuração inicial

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

Depois disso, a placa será reiniciada e estará pronta para uso!

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

---

</TabItem>
<TabItem value="method2" label="Método 2">

#### Baixar e preparar o NVIDIA L4T e o rootfs

```sh
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/jetson_linux_r35.3.1_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2
tar xf jetson_linux_r35.3.1_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

#### Baixar e preparar os drivers

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
      <td rowSpan={2}>Jetson Orin NX 8GB/ 16GB</td>
      <td rowSpan={2}><a href="https://sourceforge.net/projects/nvidia-jetson/files/reServer-Industrial/orin-nx-8-16-reserver-industrial.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td rowSpan={4}>5.1.1</td>
      <td rowSpan={4}>35.3.1</td>
    </tr>
    <tr>
    </tr>
    <tr>
      <td>Jetson Orin Nano 8GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reServer-Industrial/orin-nano-8-reserver-industrial.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin Nano 4GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reServer-Industrial/orin-nano-4-reserver-industrial.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
  </tbody>
</table>

- **Passo 2:** Mova os drivers de periféricos baixados para a mesma pasta do diretório **Linux_For_Tegra**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/29.jpg"/></div>

- **Passo 3:** Extraia o arquivo .zip de driver baixado. Aqui instalamos adicionalmente o pacote **unzip**, que é necessário para descompactar o arquivo .zip

```sh
sudo apt install unzip
sudo unzip xxxx.zip # Replace xxxx with the driver file name
```

Aqui será perguntado se deseja substituir os arquivos. Digite A e pressione ENTER para substituir os arquivos necessários

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/30.png"/></div>

#### Gravar no Jetson

- **Passo 1:** Navegue até o diretório **Linux_for_Tegra** e execute o comando de gravação da seguinte forma

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --network usb0  reserver-orin-industrial external
```

Agora ele começará a gravar a imagem do sistema na placa. Se a gravação for bem-sucedida, você verá a saída abaixo

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Passo 2:** Conecte a placa a um monitor usando o conector HDMI na placa e conclua a configuração inicial

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

Depois disso, a placa será reiniciada e você verá o seguinte

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

- **Passo 3:** Abra uma janela de terminal dentro do dispositivo, execute o seguinte, o dispositivo será reiniciado e estará pronto para uso!

```sh
systemctl disable nvgetty.service
sudo depmod -a
sudo reboot
```

Além disso, se você quiser instalar componentes do SDK como CUDA, cuDNN, TensorRT, execute o seguinte

```sh
sudo apt update
sudo apt install nvidia-jetpack -y
```

---

</TabItem>
</Tabs>

<!-- Code END -->

## Uso de Hardware e Interfaces

:::info
  Para saber mais sobre como usar todo o hardware e interfaces na placa reServer Industrial, você precisa seguir este [**wiki**](/pt-br/reserver_industrial_hardware_interface_usage):
:::

## Recursos

(alterar os links)

- [Folha de Dados do reServer Industrial](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)
- [Guia de Referência do reServer Industrial](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Reference-Guide.pdf)
- [Comparação de Dispositivos NVIDIA Jetson e Carrier Boards](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [Arquivo 3D do reServer Industrial](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-3D.stp)

## Suporte Técnico

Não hesite em enviar problemas para o nosso [fórum](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
