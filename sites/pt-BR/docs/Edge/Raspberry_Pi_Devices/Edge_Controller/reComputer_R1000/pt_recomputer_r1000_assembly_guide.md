---
description: Guia de Montagem do reComputer R1000
title: Guia de Montagem do reComputer R1000
keywords:
  - Edge
  - reComputer R1000
  - Guia de Montagem
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /recomputer_r1000_assembly_guide
sku: 113991274,E24010521,113991334,113991375
last_update:
  date: 06/06/2024
  author: Evelyn Chen
createdAt: '2023-05-22'
updatedAt: '2026-04-23'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_assembly_guide/
---
# Guia de Montagem do reComputer R1000

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/recomputer_r1000_assembly.gif" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

<br />

O reComputer R1000 suporta múltiplas comunicações sem fio para IoT, incluindo 4G, LoRa® e Wi‑Fi/BLE. Ele permite a expansão de cartões SSD via soquete M.2 para aumento de armazenamento ou acelerador NPU para recursos de IA. Além disso, nossos serviços de engenharia de hardware incluem personalização de logotipo, branding de embalagem, rotulagem, gravação de firmware, serviço de imagem e muito mais, oferecendo suporte abrangente para suas necessidades específicas.

Este Wiki mostrará como montar e desmontar a unidade para instalar componentes periféricos, bem como as opções de montagem.

## Pré-requisitos de hardware

Você precisa preparar o seguinte hardware

- reComputer R1000 x 1
- Acessórios
- Jogo de chaves de fenda
  - Phillips + 3.5 bit
  - Phillips + 3.0 bit
  - Slotted - 2.5 bit

### Guia de Desmontagem

Seguir estas etapas deve ajudá-lo a desmontar o dispositivo sem quaisquer problemas.

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/Disassembly_guide.gif" /></div>

**ETAPA 1:** Remova os quatro parafusos na parte inferior e o parafuso de aterramento dos painéis laterais:

- Localize e desparafuse os quatro parafusos localizados na parte inferior do dispositivo usando uma chave de fenda apropriada.
- Remova e desparafuse o parafuso de aterramento dos painéis laterais.

**ETAPA 2:** Retire o painel inferior:

- Depois que os parafusos forem removidos, levante cuidadosamente o painel inferior do dispositivo.

**ETAPA 3:** Remova os painéis laterais de plástico:

- Identifique os painéis laterais de plástico em três lados do dispositivo.
- Com cuidado, desencaixe ou solte cada painel lateral do dispositivo. Se estiverem firmes, talvez seja necessário usar ferramentas, mas tome cuidado para não danificar os painéis.

**ETAPA 4:** Tenha atenção à placa plástica do botão de boot:

- Observe o botão de boot em um dos painéis; ele pode ter uma pequena placa plástica acoplada.
- Certifique-se de que essa placa não caia nem se perca durante o processo de desmontagem.

**ETAPA 5:** Retire a carcaça externa de alumínio:

- Depois que os painéis laterais forem removidos, você poderá acessar a carcaça externa de alumínio.
- Levante e remova cuidadosamente a carcaça de alumínio do dispositivo.

**ETAPA 6:** Remova os quatro parafusos que fixam a placa de circuito impresso (PCB) no lugar

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass01.jpg" /></div>

### Montar o SSD

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/ssd.gif" /></div>

**ETAPA 1:** Remova a tampa traseira seguindo o guia de desmontagem.

**ETAPA 2:** Insira o SSD no soquete M.2 e aperte os parafusos.

<div align="left"><img width={350} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass02.jpg" /></div>

### Montar a antena Wi‑Fi/BLE

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/Wifi_and_ble.gif" /></div>

**ETAPA 1:** Desmonte todo o dispositivo seguindo a seção [Guia de Desmontagem](/pt-br/recomputer_r1000_assembly_guide/#guia-de-montagem).

**ETAPA 2:** Conecte a linha de alimentação do módulo CM4 ao furo da antena seguindo as ilustrações abaixo.

**ETAPA 3:** Monte o dispositivo para uso.

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass08.jpg" /></div>

### Instalar antena LTE e GNSS

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/LTE.gif" /></div>

### Montar módulo e antena 4G/LoRa®

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/LoRa.gif" /></div>

**ETAPA 1:** Certifique-se de que o módulo para os slots Mini‑PCIe esteja instalado acima do cartão SSD.

**ETAPA 2:** Insira o módulo 4G/módulo LoRa® (seguindo a relação de correspondência de cada slot de acordo com a seção "2.2.8") no slot Mini‑PCIe e aperte os parafusos.

**ETAPA 3:** Instale a linha de alimentação seguindo as imagens abaixo.

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass03.jpg" /></div>

### Montar o módulo TPM 2.0

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/TPM2_0.gif" /></div>

**ETAPA 1:** Remova a tampa traseira seguindo o guia de desmontagem.

**ETAPA 2:** Insira o módulo TPM 2.0 no soquete J13.

<div align="left"><img width={350} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass04.jpg" /></div>

### Montar módulo UPS e PoE

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/UPS.gif" /></div>

**ETAPA 1:** Antes de instalar o módulo UPS e PoE no lado do módulo CM4 da placa, desmonte todo o dispositivo seguindo o guia de desmontagem fornecido.

**ETAPA 2:**

- Usando dois parafusos PM2.0xL5.0 e espaçadores M2.0x5.0, fixe o módulo UPS em dois furos sem pads de contato metálicos.
- Certifique-se de que o módulo UPS esteja devidamente alinhado e firmemente preso usando os parafusos e espaçadores fornecidos.

**ETAPA 3:** Instale o módulo PoE

- Alinhe o módulo PoE com a abertura designada na placa.
- Solde cuidadosamente o módulo PoE na placa. Devido à natureza compacta da placa, tenha cautela ao soldar para evitar danificar componentes próximos.

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/POE-AE.gif" /></div>

:::note
Instale corretamente o módulo PoE, posicionando os pontos brancos voltados para dentro, próximos a um capacitor.
:::

<div align="left"><img width={350} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass05.jpg" /></div>

<div align="left"><img width={350} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/POE.png" /></div>

## Guia de Montagem

### Guia de Montagem em trilho DIN

O reComputer R1000 oferece vários métodos de instalação. O clipe para trilho DIN e os parafusos de instalação estão incluídos na embalagem. Siga o diagrama para fixar corretamente o clipe de trilho DIN nos furos de montagem na lateral do dispositivo. Depois que os parafusos estiverem bem apertados, você poderá instalar o dispositivo no trilho de montagem.

**ETAPA 1:** Coloque o dispositivo e o clipe de trilho na borda superior do trilho de perfil padrão na posição mostrada e empurre o dispositivo para baixo.
**ETAPA 2:** Gire o clipe de trilho do dispositivo por baixo através do trilho de perfil padrão.
**ETAPA 3:** Empurre o dispositivo na direção do trilho de perfil padrão. Você ouvirá o dispositivo encaixar no lugar.
<br />

*Remoção*
**ETAPA 1:** Empurre o dispositivo para baixo até que ele seja liberado pelo clipe de trilho.
**ETAPA 2:** Gire o dispositivo para fora do trilho de perfil padrão.
**ETAPA 3:** Levante o dispositivo para cima e retire-o.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass06.jpg" /></div>

### Guia de Montagem na Parede

O método de montagem vertical também é adequado para o reComputer R1000, porém os suportes de montagem **não estão incluídos** na caixa, sendo necessário **compra adicional**.

**ETAPA 1:** Coloque os suportes de montagem na parte traseira do dispositivo.
**ETAPA 2:** Prenda os suportes com os parafusos fornecidos.
**ETAPA 3:** Marque os furos, faça as perfurações necessárias na parede e fixe o dispositivo na parede usando dois parafusos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass07.jpg" /></div>

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
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html" target="_blank" rel="noopener noreferrer">Módulo Gateway LoRaWAN opcional por região (SPI) - US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX126-SPI-EU868-p-5847.html" target="_blank" rel="noopener noreferrer">Módulo Gateway LoRaWAN opcional por região (SPI) - EU868</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank" rel="noopener noreferrer">Módulo Gateway LoRaWAN opcional por região (USB) - US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html" target="_blank" rel="noopener noreferrer">Módulo de Gateway LoRaWAN com região opcional (USB) - EU868</a></td>
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
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/53.png" /></td>
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
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={4} style={{height: 18, width: '20%'}}>Cartão SSD</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={4} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/56.png" /></td>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html" target="_blank" rel="noopener noreferrer">NVMe M.2 2280 SSD 1TB</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990267</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html" target="_blank" rel="noopener noreferrer">SSD Interno 512GB NVMe M.2 PCIe Gen3x4 2280</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990247</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html" target="_blank" rel="noopener noreferrer">SSD Interno 256GB NVMe M.2 PCIe Gen3x4 2280</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990246</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html" target="_blank" rel="noopener noreferrer">SSD Interno 128GB NVMe M.2 PCIe Gen3x4 2280</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990226</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>PoE</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/57.png" /></td>
      <td><a href="https://www.seeedstudio.com/POE-Module-Kit-for-reTerminal-DM-p-5707.html" target="_blank" rel="noopener noreferrer">Kit de Módulo MQ7813T120 PoE para reTerminal DM</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110991925</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={2} style={{height: 18, width: '20%'}}>Adaptador de energia</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={2} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/58.png" /></td>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html" target="_blank" rel="noopener noreferrer">Adaptador de energia - americano</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061505</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-EU-p-5732.html" target="_blank" rel="noopener noreferrer">Adaptador de energia - europeu</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061506</td>
    </tr>
  </tbody>
</table>
</div>

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
