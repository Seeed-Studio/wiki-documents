---
description: O reComputer Industrial R22xx é um NVR de nível industrial com IA, baseado no Raspberry Pi CM5, equipado com um acelerador de IA Hailo-8 que oferece até 26 TOPS. Com 4 portas Ethernet Gigabit com suporte PoE PSE, além de uma porta Ethernet Gigabit adicional, ele possibilita streaming de vídeo de alta largura de banda e implantação simplificada de PoE para câmeras IP. Oferece I/O industrial rico, conectividade sem fio flexível, design térmico sem ventoinha e ampla faixa de temperatura de operação de –20 °C a 50 °C, garantindo análise de vídeo por IA confiável e operação contínua e estável em cenários exigentes.
title: Guia de Montagem do reComputer Industrial R22xx
keywords:
  - Controlador de Borda
  - Raspberry pi
  - Controlador de Borda
  - reComputer Industrial R22xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg
slug: /recomputer_industrial_r22xx_assembly_guide
sku: 100077451,100079040
last_update:
  date: 02/09/2026
  author: Nolan Chen
createdAt: '2023-05-22'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_industrial_r22xx_assembly_guide/
---

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2235-12-p-6654.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

O reComputer Industrial R22xx oferece suporte a uma variedade de comunicações sem fio de IoT, incluindo 4G, 5G, LoRa®, Wi-Fi/BLE e Zigbee. Ele permite expansão via slot M.2 para armazenamento SSD ou capacidades de IA por meio de um acelerador NPU. Se você optar por incluir o acelerador de IA diretamente na sua compra, ganhará 26 TOPS adicionais de poder computacional. Além disso, nossos serviços de engenharia de hardware incluem personalização de logotipo, branding de embalagem, rotulagem, gravação de firmware e serviços de imageamento, oferecendo suporte abrangente e adaptado às suas necessidades específicas.

Este Wiki mostrará como montar e desmontar a unidade para instalar componentes periféricos, bem como as opções de montagem.

## Pré-requisitos de Hardware

Você precisa preparar o seguinte hardware

- reComputer Industrial R22xx x 1
- Acessórios
- Jogo de chaves de fenda
  - Phillips + 3.5 bit
  - Phillips + 3.0 bit
  - Slotted - 2.5 bit

## Guia de Desmontagem do Dispositivo

Seguir estas etapas deve ajudá-lo a desmontar o dispositivo sem quaisquer problemas.

**Passo 1:** Remova os quatro parafusos na parte inferior e remova os painéis frontal e traseiro:

- Localize e desparafuse os quatro parafusos localizados na parte inferior do dispositivo usando uma chave de fenda apropriada.
- Depois que os parafusos forem removidos, levante cuidadosamente os painéis frontal e traseiro do dispositivo.

**Passo 2:**  Desparafuse as porcas dos conectores das antenas laterais e remova o painel inferior.

**Passo 3:**  Remova a placa de expansão.

**Passo 4:** Remova os quatro parafusos que fixam a placa de circuito impresso (PCB) no lugar

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.1-1.png" style={{width:800, height:'auto'}}/></div>

## Instalando um Cartão Nano SIM

**Passo 1:** Insira o cartão Nano SIM no slot SIM.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.2-1.png" style={{width:800, height:'auto'}}/></div>

## Instalando um SSD  

**Passo 1:** Remova a tampa traseira seguindo o guia de desmontagem.

**Passo 2:** Insira o SSD no soquete M.2 e aperte os parafusos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.3-1.png" style={{width:800, height:'auto'}}/></div>

## Montar o Acelerador de IA M.2

**Passo 1:** Desmonte todo o dispositivo seguindo a seção 4.1 "Guia de Desmontagem".
**Passo 2:** Insira o Acelerador de IA no soquete M.2 e aperte os parafusos.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.4-1.png" style={{width:800, height:'auto'}}/></div>

## Montagem do Módulo e Antena 5G/4G/LoRa®/Zigbee

**Passo 1:** Remova a placa de expansão e insira o módulo 4G/módulo LoRa®/módulo Zigbee no slot Mini-PCIe/M.2 B-KEY e aperte os parafusos.

**Passo 2:** Conecte o alimentador ao orifício da antena na carcaça, conforme mostrado no diagrama a seguir.

**Passo 3:** Instale o alimentador na base da antena do módulo correspondente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.5-1.png" style={{width:800, height:'auto'}}/></div>


## Montagem do Módulo TPM 2.0

**Passo 1:** Remova a tampa traseira seguindo o guia de desmontagem.

**Passo 2:** Insira o módulo TPM 2.0 no soquete J26.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.6-1.png" style={{width:800, height:'auto'}}/></div>

## Montagem do Módulo UPS e PoE

**Passo 1:** Antes de instalar o módulo UPS e PoE no lado da placa do módulo CM5, desmonte todo o dispositivo seguindo o guia de desmontagem fornecido.

**Passo 2:** Instale o Módulo UPS**  

- Usando dois parafusos PM2.0xL5.0 e espaçadores M2.0x5.0, fixe o módulo UPS em dois furos sem pastilhas de contato metálicas.
- Certifique-se de que o módulo UPS esteja devidamente alinhado e firmemente preso usando os parafusos e espaçadores fornecidos.

**Passo 3: Instale o Módulo PoE**  

- Alinhe o **módulo PoE** com o **slot designado** na placa.  
- **Solde cuidadosamente o módulo PoE** na placa, garantindo precisão para evitar danos a componentes próximos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.7-1.png" style={{width:800, height:'auto'}}/></div>

## Guia de Montagem

### Guia de Montagem em Trilho DIN

O reComputer Industrial R21xx oferece vários métodos de instalação. O clipe para trilho DIN e os parafusos de instalação estão incluídos na embalagem. Siga o diagrama para fixar corretamente o clipe de trilho DIN nos orifícios de montagem na lateral do dispositivo. Depois que os parafusos estiverem firmemente presos, você poderá instalar o dispositivo no trilho de montagem.

#### Etapas de Instalação

- **Passo 1:** Posicione o dispositivo e o clipe do trilho na borda superior do trilho de perfil padrão na posição mostrada e empurre o dispositivo para baixo.
- **Passo 2:** Gire o clipe do trilho do dispositivo por baixo através do trilho de perfil padrão.
- **Passo 3:** Empurre o dispositivo na direção do trilho de perfil padrão. Você ouvirá o dispositivo encaixar no lugar.

#### Etapas de Remoção

- **Passo 1:** Empurre o dispositivo para baixo até que seja liberado pelo clipe do trilho.
- **Passo 2:** Gire o dispositivo para fora do trilho de perfil padrão.
- **Passo 3:** Levante o dispositivo para cima e retire-o

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/4.8.1_din-rail_mounting_guide_1.png" style={{width:1000, height:'auto'}}/></div>

### Guia de Montagem em Parede

O método de montagem vertical também é adequado para o reComputer Industrial R2000, porém os suportes de montagem não estão incluídos na caixa e precisam ser adquiridos separadamente.

#### Etapas de Instalação

- **Passo 1:** Coloque os suportes de montagem na parte traseira do dispositivo.
- **Passo 2:** Aperte os suportes com os parafusos fornecidos.
- **Passo 3:** Marque os furos, faça as perfurações necessárias na parede e fixe o dispositivo na parede usando dois parafusos.

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
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html" target="_blank" rel="noopener noreferrer">Módulo Gateway LoRaWAN com região opcional (SPI)-US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX126-SPI-EU868-p-5847.html" target="_blank" rel="noopener noreferrer">Módulo Gateway LoRaWAN com região opcional (SPI)-EU868</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank" rel="noopener noreferrer">Módulo Gateway LoRaWAN com região opcional (USB)-US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html" target="_blank" rel="noopener noreferrer">Módulo Gateway LoRaWAN com região opcional (USB)-EU868</a></td>
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
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-AFXGA-mini-PCIe-p-5668.html" target="_blank" rel="noopener noreferrer">Módulo LTE Cat 4 EC25-AFXGA-Mini-PCIe - para América do Norte</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991134</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html" target="_blank" rel="noopener noreferrer">Módulo LTE Cat 4 EC25-EUXGR-Mini-PCIe - para EMEA e Tailândia</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991135</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-AUXGR-mini-PCIe-p-5885.html" target="_blank" rel="noopener noreferrer">Módulo LTE Cat 4 EC25-AUXGR-Mini-PCIe - para Austrália</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991174</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EFA-mini-PCIe-p-5824.html" target="_blank" rel="noopener noreferrer">Módulo LTE Cat 4 EC25-EFA-Mini-PCIe - para Tailândia</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991214</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EMGA-mini-PCIe-p-5831.html" target="_blank" rel="noopener noreferrer">Módulo LTE Cat 4 EC25-EMGA-Mini-PCIe - para Malásia</a></td>
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
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Supercapacitor UPS</td>
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
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={6} style={{height: 18, width: '20%'}}>Adaptador de Energia</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.8.2-table-23.png" /></td>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-3P-Black-19V-4-74A-AC-p-6377.html" target="_blank" rel="noopener noreferrer">Adaptador de Energia 3P-Preto-19V-4,74A/7,4*5mm</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>313080684</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={5} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.8.2-table-24.png" /></td>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-EU-p-5732.html" target="_blank" rel="noopener noreferrer">Cabo de Alimentação AC Cloverleaf - US</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>313990332</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/AC-UK-p-5124.html" target="_blank" rel="noopener noreferrer">Cabo de Alimentação AC Cloverleaf - UK</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>313990328</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/Power-Cord-JP-0-5m-p-6386.html" target="_blank" rel="noopener noreferrer">Cabo de Alimentação AC Cloverleaf - JP</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>106990469</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/Power-Cord-EU-0-5m-p-6385.html" target="_blank" rel="noopener noreferrer">Cabo de Alimentação AC Cloverleaf - EU</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>106990468</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/Power-Cord-CN-0-5m-p-6387.html" target="_blank" rel="noopener noreferrer">Cabo de Alimentação AC Cloverleaf - CN</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>106990470</td>
    </tr>
  </tbody>
</table>
</div>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
