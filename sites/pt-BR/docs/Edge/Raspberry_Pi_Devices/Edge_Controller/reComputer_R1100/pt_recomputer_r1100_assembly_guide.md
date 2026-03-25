---
description: Guia de Montagem do reComputer R1100
title: Guia de Montagem do reComputer R1100
keywords:
  - Raspberry pi
  - Controlador de Borda
  - reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/recomputer3.jpg
slug: /recomputer_r1100_assembly_guide
last_update:
  date: 2/27/2024
  author: Kasun Thushara
createdAt: '2023-05-22'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1100_assembly_guide/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
</div>

O reComputer R1100 suporta múltiplas comunicações sem fio para IoT, incluindo 4G, LoRa®, Wi-Fi/BLE e Zigbee. Ele permite a expansão de cartões SSD via soquete M.2 para aumento de armazenamento ou acelerador NPU para capacidades de IA. Além disso, nossos serviços de engenharia de hardware incluem personalização de logotipo, branding de embalagem, rotulagem, gravação de firmware, serviço de imagem e mais, oferecendo suporte abrangente para suas necessidades específicas.

Este Wiki mostrará como Montar e Desmontar a unidade para instalar componentes periféricos, bem como a opção de montagem

## Pré-requisitos de Hardware

Você precisa preparar o seguinte hardware

- reComputer R1000 x 1
- Acessórios
- Conjunto de Chaves de Fenda
  - Phillips + ponta 3.5
  - Phillips + ponta 3.0
  - Reta - ponta 2.5

## Guia de Desmontagem do Dispositivo

Siga estas etapas para **desmontar o dispositivo** com segurança e sem problemas:  

**Etapa 1: Remova os Quatro Parafusos na Parte Inferior**  

- Localize e remova os **quatro parafusos** na parte inferior do dispositivo usando uma chave de fenda adequada.  

**Etapa 2: Retire o Painel Inferior**  

- Após remover os parafusos, **levante cuidadosamente o painel inferior** do dispositivo.  

**Etapa 3: Remova os Painéis Laterais de Plástico**  

- Identifique os **painéis laterais de plástico** em três lados do dispositivo.  
- **Alavanque ou desencaixe** suavemente cada painel. Se estiverem muito justos, você pode precisar de uma ferramenta, mas tome cuidado para não danificá-los.  

**Etapa 4: Atenção à Plaquinha Plástica da Chave de Boot**  

- Observe a **chave de boot** em um dos painéis — ela pode ter **uma pequena placa plástica presa**.  
- Garanta que essa plaquinha não caia nem se perca durante a desmontagem.  

**Etapa 5: Remova a Carcaça Externa de Alumínio**  

- Com os **painéis laterais removidos**, agora você pode acessar a **carcaça externa de alumínio**.  
- **Levante e remova** cuidadosamente a carcaça de alumínio.  

**Etapa 6: Remova os Parafusos que Fixam a Placa de Circuito (PCB)**  

- Por fim, **remova os quatro parafusos** que mantêm a **PCB (Placa de Circuito Impresso) no lugar**.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dissambly_guide.PNG" style={{width:600, height:'auto'}}/></div>

## Instalando um Cartão Nano SIM

**Etapa 1: Remova a Tampa Traseira**  

- Siga o **guia de desmontagem** para remover cuidadosamente a tampa traseira.  

**Etapa 2: Insira o Cartão Nano SIM**  

- Coloque o **cartão Nano SIM** no **slot SIM** designado.  

Certifique-se de que o cartão SIM esteja devidamente alinhado antes de recolocar e fixar a tampa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/sim_dis.PNG" style={{width:600, height:'auto'}}/></div>

## Instalando um SSD  

**Etapa 1: Remova a Tampa Traseira**  

- Siga o **guia de desmontagem** para retirar cuidadosamente a tampa traseira.  

**Etapa 2: Insira o SSD**  

- Insira firmemente o **SSD** no **soquete M.2**.  
- Aperte os **parafusos** para travá-lo no lugar.  

Certifique-se de que o SSD esteja corretamente encaixado antes de remontar o dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/ssd_dis.PNG" style={{width:600, height:'auto'}}/></div>

## Instalando a Antena Wi-Fi/BLE  

**Etapa 1: Desmonte o Dispositivo**  

- Siga a **Seção 4.1 - Guia de Desmontagem** para desmontar cuidadosamente o dispositivo.  

**Etapa 2: Conecte a Antena**  

- Conecte a **linha de alimentação** do **módulo CM4** ao **furo da antena**, consultando as ilustrações fornecidas para o alinhamento correto.  

**Etapa 3: Remonte o Dispositivo**  

- Depois que a antena estiver firmemente conectada, **remonte** o dispositivo para operação normal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/wifi_dis.PNG" style={{width:600, height:'auto'}}/></div>

## Montagem do Módulo e Antena 4G/LoRa®/Zigbee

**Etapa 1: Verifique a Posição do Módulo**  

- Certifique-se de que o **módulo do slot Mini-PCIe** esteja posicionado **acima do cartão SSD**.  

**Etapa 2: Instale o Módulo**  

- Insira o **módulo 4G, LoRa® ou Zigbee** no **slot Mini-PCIe** apropriado, seguindo as diretrizes de correspondência da **Seção 2.2.8**.  
- Prenda o módulo no lugar **apertando os parafusos**.  

**Etapa 3: Conecte a Antena**  

- Conecte a **linha de alimentação** ao módulo, consultando as ilustrações fornecidas para o posicionamento correto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/lora_dis.PNG" style={{width:600, height:'auto'}}/></div>

## Montagem do Módulo TPM 2.0

**Etapa 1: Remova a Tampa Traseira**  

- Siga o **guia de desmontagem** para destacar a tampa traseira.  

**Etapa 2: Instale o Módulo TPM 2.0**  

- Insira com firmeza o **módulo TPM 2.0** no **soquete J13**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/tpm_dis.PNG" style={{width:600, height:'auto'}}/></div>

## Montagem do Módulo de UPS e PoE

**Etapa 1: Desmonte o Dispositivo**  

- Antes da instalação, **desmonte todo o dispositivo** seguindo o **guia de desmontagem**.  

**Etapa 2: Instale o Módulo de UPS**  

- Use **dois parafusos PM2.0xL5.0** e **espaçadores M2.0x5.0** para fixar o **módulo de UPS** nos **furos designados** sem almofadas de contato metálico.  
- Certifique-se de que o **módulo de UPS** esteja **corretamente alinhado** e firmemente preso com os parafusos e espaçadores fornecidos.  

**Etapa 3: Instale o Módulo PoE**  

- Alinhe o **módulo PoE** com o **slot designado** na placa.  
- **Solde cuidadosamente o módulo PoE** na placa, garantindo precisão para evitar danos a componentes próximos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/ups_dis.PNG" style={{width:600, height:'auto'}}/></div>

## Guia de Montagem

### Guia de Montagem em Trilho DIN

O reComputer R1100 suporta vários métodos de instalação, incluindo **montagem em trilho DIN**. O **clipe de trilho DIN** e os **parafusos de instalação** estão incluídos na embalagem. Siga o diagrama para fixar o clipe de trilho DIN nos furos de montagem na lateral do dispositivo. Depois de fixado, você pode instalar o dispositivo no trilho de montagem.  

#### Etapas de Instalação

- **Posicione o Dispositivo:**  
  - Coloque o dispositivo e o **clipe de trilho** na **borda superior** do **trilho DIN** padrão, como mostrado no diagrama.  
  - Empurre o dispositivo **para baixo** para alinhá-lo corretamente.  

- **Fixe o Clipe de Trilho:**  
  - Gire o **clipe de trilho** por baixo através do perfil do **trilho DIN**.  

- **Trave no Lugar:**  
  - Empurre o dispositivo **em direção ao trilho** até ouvir um **clique**, indicando que está firmemente montado.  

#### Etapas de Remoção

- **Libere a Trava:**  
  - Empurre o dispositivo **para baixo** até que seja liberado pelo **clipe de trilho**.  

- **Desencaixe do Trilho:**  
  - Gire o dispositivo **para fora** do **trilho DIN**.  

- **Levante e Remova:**  
  - Levante o dispositivo **para cima** para removê-lo completamente do trilho de montagem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dinmount.PNG" style={{width:600, height:'auto'}}/></div>

### Guia de Montagem na Parede

O reComputer R1100 suporta **montagem vertical na parede**, mas os **suportes de montagem** **não estão incluídos** no pacote e devem ser adquiridos separadamente.  

#### Etapas de Instalação

- **Fixe os Suportes:**  
  - Coloque os **suportes de montagem** na **parte traseira** do dispositivo.  

- **Prenda os Suportes:**  
  - Aperte os **suportes** usando os **parafusos fornecidos**.  

- **Monte na Parede:**  
  - Marque os **furos de perfuração** na parede.  
  - Faça os **furos** necessários.  
  - Fixe o dispositivo na parede usando **dois parafusos**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/wallmount.PNG" style={{width:600, height:'auto'}}/></div>

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
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html" target="_blank" rel="noopener noreferrer">Módulo Gateway LoRaWAN com região opcional (SPI) - US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX126-SPI-EU868-p-5847.html" target="_blank" rel="noopener noreferrer">Módulo Gateway LoRaWAN com região opcional (SPI) - EU868</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank" rel="noopener noreferrer">Módulo de Gateway LoRaWAN com Região Opcional (USB) - US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html" target="_blank" rel="noopener noreferrer">Módulo de Gateway LoRaWAN com Região Opcional (USB) - EU868</a></td>
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
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Módulo Zigbee</td>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}></td>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Módulo Zigbee Mini-PCIe USB</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992005</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Antena Zigbee</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/50.png" /></td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Kit de Antena Zigbee para reComputer R</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061641</td>
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

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
