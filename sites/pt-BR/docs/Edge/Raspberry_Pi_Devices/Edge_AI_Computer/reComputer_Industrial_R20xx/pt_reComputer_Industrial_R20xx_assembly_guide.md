---
description: Guia de Montagem do reComputer Industrial R20xx
title: Guia de Montagem do reComputer Industrial R20xx
keywords:
  - Raspberry pi
  - Controlador de Borda
  - reComputer Industrial R20xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg
slug: /recomputer_industrial_r20xx_assembly_guide
last_update:
  date: 09/28/2025
  author: Nolan Chen
createdAt: '2023-05-22'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_industrial_r20xx_assembly_guide/
---

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2045-12-p-6544.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

O reComputer Industrial R20xx oferece suporte a uma variedade de comunicações sem fio para IoT, incluindo 4G, 5G, LoRa®, Wi-Fi/BLE e Zigbee. Ele suporta expansão por meio de um slot M.2 para armazenamento em SSD ou capacidades de IA por meio de um acelerador NPU. Se você optar por incluir o acelerador de IA diretamente na sua compra, obterá 26 TOPS adicionais de poder de computação. Além disso, nossos serviços de engenharia de hardware incluem personalização de logotipo, branding de embalagem, rotulagem, gravação de firmware e serviços de imagem, fornecendo suporte abrangente adaptado às suas necessidades específicas.

Este Wiki mostrará como montar e desmontar a unidade para instalar componentes periféricos, bem como as opções de montagem.

## Pré-requisitos de Hardware

Você precisa preparar o seguinte hardware

- reComputer Industrial R20xx x 1
- Acessórios
- Jogo de chaves de fenda
  - Ponta Phillips + 3,5
  - Ponta Phillips + 3,0
  - Ponta chata - 2,5

## Guia de Desmontagem do Dispositivo

Seguir estas etapas deve ajudá-lo a desmontar o dispositivo sem nenhum problema.

**Passo 1:** Remova os quatro parafusos na parte inferior e retire os painéis frontal e traseiro:

- Localize e remova os quatro parafusos localizados na parte inferior do dispositivo usando uma chave de fenda adequada.
- Depois que os parafusos forem removidos, levante cuidadosamente os painéis frontal e traseiro do dispositivo.

**Passo 2:**  Desaperte as porcas dos conectores de antena laterais e remova o painel inferior.

**Passo 3:** Remova os quatro parafusos que fixam a placa de circuito impresso (PCB).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/4.1_disassembly_guide_1.png" style={{width:800, height:'auto'}}/></div>

## Instalando um Cartão Nano SIM

**Passo 1:** Insira o cartão Nano SIM no slot SIM.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/4.2_assemble_nano_sim_card_1.png" style={{width:800, height:'auto'}}/></div>

## Instalando um SSD  

**Passo 1:** Remova a tampa traseira seguindo o guia de desmontagem.

**Passo 2:** Insira o SSD no soquete M.2 e aperte os parafusos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/4.3_assemble_ssd_1.png" style={{width:800, height:'auto'}}/></div>

## Montando o Módulo e Antena 5G/4G/LoRa®/Zigbee

**Passo 1:** Remova a placa de expansão e insira o módulo 4G/módulo LoRa®/módulo Zigbee no slot Mini-PCIe/M.2 B-KEY e aperte os parafusos.

**Passo 2:** Conecte o cabo coaxial ao furo da antena no gabinete, conforme mostrado no diagrama a seguir.

**Passo 3:** Instale o cabo coaxial na base de antena do módulo correspondente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/4.5_assemble_5g4glora_zigbee_module_and_antenna_1.png" style={{width:800, height:'auto'}}/></div>

## Montando o Módulo TPM 2.0

**Passo 1:** Remova a tampa traseira seguindo o guia de desmontagem.

**Passo 2:** Insira o módulo TPM 2.0 no soquete J26.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/4.6_assemble_tpm_2.0_module_1.png" style={{width:800, height:'auto'}}/></div>

## Montando o Módulo de UPS e PoE

**Passo 1:** Antes de instalar o módulo de UPS e PoE no lado do módulo CM5 da placa, desmonte todo o dispositivo seguindo o guia de desmontagem fornecido.

**Passo 2:** Instale o Módulo de UPS**  

- Usando dois parafusos PM2.0xL5.0 e espaçadores M2.0x5.0, fixe o módulo de UPS em dois furos sem ilhas de contato metálicas.
- Certifique-se de que o módulo de UPS esteja devidamente alinhado e firmemente preso usando os parafusos e espaçadores fornecidos.

**Passo 3: Instale o Módulo PoE**  

- Alinhe o **módulo PoE** com o **slot designado** na placa.  
- **Solde cuidadosamente o módulo PoE** na placa, garantindo precisão para evitar danos aos componentes próximos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/4.7_assemble_ups_module_1.png" style={{width:800, height:'auto'}}/></div>

## Guia de Montagem

### Guia de Montagem em Trilho DIN

O reComputer Industrial R20xx oferece vários métodos de instalação. O clipe para trilho DIN e os parafusos de instalação estão incluídos na embalagem. Siga o diagrama para fixar corretamente o clipe de trilho DIN nos furos de montagem na lateral do dispositivo. Depois que os parafusos estiverem bem apertados, você poderá instalar o dispositivo no trilho de montagem.

#### Etapas de Instalação

- **Passo 1:** Coloque o dispositivo e o clipe de trilho na borda superior do trilho de perfil padrão na posição mostrada e empurre o dispositivo para baixo.
- **Passo 2:** Gire o clipe de trilho do dispositivo por baixo através do trilho de perfil padrão.
- **Passo 3:** Empurre o dispositivo na direção do trilho de perfil padrão. Você ouvirá o dispositivo encaixar no lugar.

#### Etapas de Remoção

- **Passo 1:** Empurre o dispositivo para baixo até que ele seja liberado pelo clipe de trilho.
- **Passo 2:** Gire o dispositivo para fora do trilho de perfil padrão.
- **Passo 3:** Levante o dispositivo para cima e retire-o.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/4.8.1_din-rail_mounting_guide_1.png" style={{width:1000, height:'auto'}}/></div>

### Guia de Montagem em Parede

O método de montagem vertical também é adequado para o reComputer Industrial R20xx, porém os suportes de montagem não estão incluídos na caixa, sendo necessária a compra adicional.

#### Etapas de Instalação

- **Passo 1:** Posicione os suportes de montagem na parte traseira do dispositivo.
- **Passo 2:** Prenda os suportes com os parafusos fornecidos.
- **Passo 3:** Marque os pontos de furação, faça os furos necessários na parede e fixe o dispositivo à parede usando dois parafusos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/4.8.2_wall_mounting_guide_1.png" style={{width:1000, height:'auto'}}/></div>

## Lista de Acessórios

<div class="table-center">
<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}><strong>Item</strong></td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><strong>Produto</strong></td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}><strong>Nome do Produto</strong></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}><strong>SKU</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={4} style={{height: 18, width: '20%'}}>Módulo LoRa®</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={4} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/47.png" /></td>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html" target="_blank" rel="noopener noreferrer">Módulo Gateway LoRaWAN (SPI) com opção de região - US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX126-SPI-EU868-p-5847.html" target="_blank" rel="noopener noreferrer">Módulo Gateway LoRaWAN (SPI) com opção de região - EU868</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank" rel="noopener noreferrer">Módulo Gateway LoRaWAN (USB) com opção de região - US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html" target="_blank" rel="noopener noreferrer">Módulo Gateway LoRaWAN (USB) com opção de região - EU868</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992628</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Antena LoRa®</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/48.png" /></td>
      <td><a href="https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html" target="_blank" rel="noopener noreferrer">Kit de Antena LoRa - 868-915 MHz</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061501</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Antena Wi-Fi/BLE</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/49.png" /></td>
      <td><a href="https://www.seeedstudio.com/Compute-Module-CM4-Antenna-kit-p-4717.html" target="_blank" rel="noopener noreferrer">Kit de Antena para Raspberry Pi Compute Module 4</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992364</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={6} style={{height: 18, width: '20%'}}>Módulo 4G</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={6} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/51.png" /></td>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-AFXGA-mini-PCIe-p-5668.html" target="_blank" rel="noopener noreferrer">Módulo Mini-PCIe LTE Cat 4 EC25-AFXGA - para América do Norte</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991134</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html" target="_blank" rel="noopener noreferrer">Módulo Mini-PCIe LTE Cat 4 EC25-EUXGR - para EMEA e Tailândia</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991135</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-AUXGR-mini-PCIe-p-5885.html" target="_blank" rel="noopener noreferrer">Módulo Mini-PCIe LTE Cat 4 EC25-AUXGR - para Austrália</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991174</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EFA-mini-PCIe-p-5824.html" target="_blank" rel="noopener noreferrer">Módulo Mini-PCIe LTE Cat 4 EC25-EFA - para Tailândia</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991214</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EMGA-mini-PCIe-p-5831.html" target="_blank" rel="noopener noreferrer">Módulo Mini-PCIe LTE Cat 4 EC25-EMGA - para Malásia</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991234</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-JFA-mini-PCIe-p-5899.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-JFA-mini-PCIe</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991296</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Antena 4G</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/52.png" /></td>
      <td><a href="https://www.seeedstudio.com/4G-Antenna-Kit-for-reTerminal-DM-p-5713.html" target="_blank" rel="noopener noreferrer">Kit de Antena 4G para módulo 4G</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061502</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Antena GPS</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/GPS_Antenna.png" /></td>
      <td><a href="https://www.seeedstudio.com/GPS-Antenna-Kit-for-reTerminal-DM-4G-Module-p-5774.html" target="_blank" rel="noopener noreferrer">Kit de Antena GPS para Módulo 4G EC25</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061521</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Supercapacitor de UPS</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/54.png" /></td>
      <td><a href="https://www.seeedstudio.com/SuperCAP-UPS-LTC3350-Module-p-5934.html" target="_blank" rel="noopener noreferrer">Módulo SuperCAP UPS LTC3350</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992004</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Chip de criptografia TPM 2.0</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/55.png" /></td>
      <td><a href="https://www.seeedstudio.com/TPM2-0-Module-with-infineon-SLB9670-p-5711.html" target="_blank" rel="noopener noreferrer">Módulo TPM 2.0 com infineon SLB9670</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993114</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={5} style={{height: 18, width: '20%'}}>Cartão SSD</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={5} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/56.png" /></td>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html" target="_blank" rel="noopener noreferrer">NVMe M.2 2280 SSD 2TB</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990267</td>
    </tr>
     <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html" target="_blank" rel="noopener noreferrer">NVMe M.2 2280 SSD 1TB</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990267</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html" target="_blank" rel="noopener noreferrer">SSD Interno 512GB NVMe M.2 PCle Gen3x4 2280</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990247</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html" target="_blank" rel="noopener noreferrer">SSD Interno 256GB NVMe M.2 PCle Gen3x4 2280</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990246</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html" target="_blank" rel="noopener noreferrer">SSD Interno 128GB NVMe M.2 PCle Gen3x4 2280</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990226</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={2} style={{height: 18, width: '20%'}}>Adaptador de Energia</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={2} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/58.png" /></td>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html" target="_blank" rel="noopener noreferrer">Adaptador de Energia - Americano</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061505</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-EU-p-5732.html" target="_blank" rel="noopener noreferrer">Adaptador de Energia - Europeu</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061506</td>
    </tr>
  </tbody>
</table>
</div>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
