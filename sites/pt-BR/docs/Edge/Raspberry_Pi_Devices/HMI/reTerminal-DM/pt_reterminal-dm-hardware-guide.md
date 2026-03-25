---
description: Guia de Hardware do reTerminal DM
title: Guia de Hardware do reTerminal DM
keywords:
  - Edge
  - reTerminal-DM
  - Guia de Hardware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reterminal-dm-hardware-guide
last_update:
  date: 05/19/2023
  author: Peter Pan
createdAt: '2023-05-22'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reterminal-dm-hardware-guide/
---
# Visão Geral do Hardware do reTerminal DM

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

O reTerminal DM é uma IHM industrial open source de 10,1" – um Device Master integrado para unificar o fluxo de dados e gerenciar o dispositivo local.

Baseado no Raspberry Pi CM4 e, como um dispositivo tudo‑em‑um Panel PC, IHM, CLP e gateway IIoT, o reTerminal DM é uma nova geração de hub interativo de sensoriamento com uma tela grande industrial de grau IP65.

Ele é equipado com rica capacidade de expansão e conectividade híbrida, suportando barramento CAN, RS485, RS232, porta Ethernet Gigabit e outras interfaces, bem como poderosos recursos de comunicação sem fio como 4G, LoRa®, WiFi e BLE.

> \*Os módulos 4G e LoRa® não acompanham o reTerminal DM por padrão, adquira os módulos relevantes conforme necessário, para
> [4G bundle](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

Este Wiki mostrará como montar e desmontar a unidade para instalar componentes periféricos, bem como a opção de montagem

## Pré-requisito de hardware

Você precisa preparar o seguinte hardware

- reTerminal DM x 1
- Jogo de chave de fenda
  - Ponta Phillips + 3,5
  - Ponta Phillips + 3,0
  - Ponta chata - 2,5

### Guia de Montagem e Desmontagem da Tampa Traseira

**PASSO 1:** Coloque cuidadosamente o reTerminal DM com a tela virada para baixo em uma superfície plana.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/facedown.png" alt="pir" width="800" height="auto"/></p>

**PASSO 2:** Afrouxe os parafusos e remova a tampa traseira.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/back_screw.png" alt="pir" width="800" height="auto"/></p>

### Montagem da Antena WiFi/BLE

**PASSO 1:** Remova a tampa traseira e retire a tampa de silicone.

**PASSO 2:** Coloque o conector SMA da antena na tampa traseira e rosqueie a antena no conector SMA

**PASSO 3:** Insira a outra extremidade do cabo da antena (conector IPEX) no soquete IPEX do CM4.

**PASSO 4:** Recoloque a tampa traseira e aperte os parafusos.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/wifi-antenna.png" alt="pir" width="800" height="auto"/></p>

### Montagem do Módulo e Antena 4G

**PASSO 1:** Remova a tampa traseira e retire a tampa de silicone.

**PASSO 2:** Coloque o conector SMA da antena na tampa traseira e rosqueie a antena no conector SMA

**PASSO 3:**  Insira o módulo 4G no soquete da placa principal e aperte os parafusos.

**PASSO 4:**  Insira a outra extremidade do cabo da antena (conector IPEX) no soquete IPEX do módulo 4G.

**PASSO 5:** Recoloque a tampa traseira e aperte os parafusos.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/4g-antenna.png" alt="pir" width="800" height="auto"/></p>

### Montagem do Módulo e Antena LoRa®

**PASSO 1:** Remova a tampa traseira e retire a tampa de silicone.

**PASSO 2:** Coloque o conector SMA da antena na tampa traseira e rosqueie a antena no conector SMA

**PASSO 3:**  Insira o módulo LoRa® no soquete da placa principal e aperte os parafusos.

**PASSO 4:**  Insira a outra extremidade do cabo da antena (conector IPEX) no soquete IPEX do módulo LoRa®.

**PASSO 5:** Recoloque a tampa traseira e aperte os parafusos.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/lora-antenna.png" alt="pir" width="800" height="auto"/></p>

### Instalar Módulo de Extensão PCIe

:::note
O Módulo de Extensão PCIe será lançado em breve, fique atento.
:::

**PASSO 1:** Remova a tampa traseira.

**PASSO 2:** Insira dois conjuntos de cabos de 16 pinos nos soquetes na placa do Módulo de Extensão PCIe e na Placa de Porta de Rede Dupla.

**PASSO 3:** Coloque a placa do Módulo de Extensão PCIe na placa principal e aperte os parafusos.

**PASSO 4:** Coloque a Placa de Porta de Rede Dupla na tampa frontal do DM e aperte os parafusos.

**PASSO 5:** Retire a Chapa da Porta de Rede do Slot de expansão.

**PASSO 6:** Recoloque a carcaça traseira e aperte os parafusos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/PCIe.png" alt="pir" width="800" height="auto"/></p>

### Instalar SSD

**PASSO 1:** Remova a tampa traseira.

**PASSO 2:** Coloque a [placa do Módulo de Extensão PCIe](https://www.seeedstudio.com/reTerminal-DM-Dual-LAN-and-SSD-extension-p-5766.html) na placa principal e aperte os parafusos.

**PASSO 3:** Recoloque a carcaça traseira e aperte os parafusos.

**PASSO 4:** Desparafuse o parafuso da tampa de remoção rápida e retire a tampa de remoção rápida.

**PASSO 5:** Coloque o SSD no soquete M.2 e aperte os parafusos.

**PASSO 6:** Recoloque a tampa de remoção rápida e aperte os parafusos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/ssd.png" alt="pir" width="800" height="auto"/></p>

### Instalar Câmera

:::note

O módulo PiCamera V2 foi testado e está funcionando no reTerminal DM. Você precisará obter um módulo de câmera FPC longo personalizado para uso no reTerminal DM.

:::

**PASSO 1:** Remova a tampa traseira.

**PASSO 2:** Insira a câmera na placa inferior da câmera.

**PASSO 3:** Insira o cabo FPC da câmera no soquete da placa inferior da câmera.

**PASSO 4:** Instale a câmera na tampa frontal e fixe‑a com um adesivo.

**PASSO 5:** Monte o módulo da câmera na tampa frontal e aperte os parafusos.

**PASSO 6:** Conecte o FPC ao soquete da placa principal, recoloque a tampa traseira e aperte os parafusos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/camera.png" alt="pir" width="800" height="auto"/></p>

### Instalar Módulo PoE

**PASSO 1:** Remova a tampa traseira e retire a placa principal.

**PASSO 2:** Insira o PoE na placa principal de acordo com a marca de ponto.

**PASSO 3:** Solde o módulo PoE na parte de trás da placa principal.

**PASSO 4:** Recoloque a placa principal, recoloque a tampa traseira e aperte os parafusos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/poe.png" alt="pir" width="800" height="auto"/></p>

### Substituição da Bateria do RTC

**PASSO 1:** Remova a tampa traseira.

**PASSO 2:** Insira o cabo da bateria do RTC no soquete da bateria do RTC e prenda a bateria do RTC à porta de rede.

**PASSO 3:** Recoloque a tampa traseira e aperte os parafusos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/RTC_battery.png" alt="pir" width="800" height="auto"/></p>

### Substituição do Fusível

**PASSO 1:** Remova a tampa traseira.

**PASSO 2:** Retire o fusível antigo do soquete de fusível na placa principal e coloque o novo fusível.

**PASSO 3:** Recoloque a tampa traseira e aperte os parafusos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/fuse.png" alt="pir" width="800" height="auto"/></p>

### Guia de Aterramento do Chassi

**PASSO 1:** Afrouxe o parafuso de aterramento.

**PASSO 2:** Coloque o conector de aterramento e aperte o parafuso

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/grounding.png" alt="pir" width="800" height="auto"/></p>

### Guia de Conexão do Terminal

**PASSO 1:** Insira o conector de alimentação na direção mostrada abaixo.

**PASSO 2:** Insira o conector do cabo na direção mostrada abaixo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/terminal_block.png" alt="pir" width="800" height="auto"/></p>

## Guia de Montagem

O reTerminal DM suporta vários métodos de instalação, e os usuários podem escolher com flexibilidade de acordo com seus cenários de uso. Deve‑se notar que o produto padrão não acompanha os acessórios necessários para montagem em painel e montagem em trilho DIN, e acessórios definidos precisam ser adquiridos para a instalação. Para detalhes sobre os acessórios, consulte a seção 2.3 Interfaces e Módulos Opcionais.

### Montagem em Painel

O kit de montagem em painel para o reTerminal DM é necessário para montagem em painel

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/panel_mount.png" alt="pir" width="800" height="auto"/></p>

### Montagem VESA

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/VESA.png" alt="pir" width="800" height="auto"/></p>

### Montagem em Trilho DIN

É necessário um Bloco Deslizante para Trilho de Guia Linear para a montagem em trilho DIN

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070181-sliding-block-for-linear-guideway-rail_including-screws_-45font.jpg" alt="pir" width="400" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Sliding-block-for-linear-guideway-rail-including-screws-p-5527.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/hardware/DIN.png" alt="pir" width="800" height="auto"/></p>

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe proporcionar diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
