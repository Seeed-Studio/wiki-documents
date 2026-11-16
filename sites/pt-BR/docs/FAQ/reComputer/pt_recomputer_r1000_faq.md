---
title: reComputer R1000 e R1100 FAQ
description: Perguntas frequentes sobre os controladores de borda reComputer R1000 e R1100, incluindo as credenciais padrão, comunicação RS485 e BACnet, gravação do sistema operacional e configuração do sistema.
slug: /recomputer_r1000_r1100_faq
last_update:
  date: 11/10/2026
  author: doublelf
keywords:
  - reComputer R1000 FAQ
  - reComputer R1100 FAQ
  - reComputer R1000 troubleshooting
  - reComputer R1100 edge gateway
  - Raspberry Pi CM4
  - RS485 Modbus RTU
  - BACnet MS/TP
---

<div class="recomputer-faq-page">

# reComputer R1000 e R1100 FAQ

Esta página contém respostas verificadas para o reComputer R1000 e R1100. Cada resposta indica a variante do produto e o modo de firmware ao qual se aplica, juntamente com a data em que foi verificada pela última vez em relação às fontes oficiais atuais.

## Antes de começar

- Confirme o modelo exato: reComputer R1000 ou reComputer R1100, e a variante de Raspberry Pi CM4 instalada.
- Verifique a versão atual da imagem do Raspberry Pi OS antes de aplicar etapas específicas de versão.
- As respostas nesta página foram verificadas pela última vez em 2026-11-10; verifique novamente as fontes oficiais vinculadas se você estiver lendo isto depois dessa data.

<!-- RECOMPUTER_FAQ_AUTO_START -->
## Sistema operacional e firmware {#os-and-firmware}

### Como desativo a função de USB Mass Storage / Bootloader do reComputer R1024-10 sem privilégios de root? {#r1024-10-disable-usb-mass-storage}

**Aplica-se a:** série reComputer R10xx (reComputer R1024-10 como exemplo), para casos em que a capacidade de USB Mass Storage / Bootloader precisa ser desativada sem privilégios de root

**Última verificação:** 2026-11-01

Os produtos padrão reComputer R10xx (incluindo o R1024-10) não oferecem uma forma de desativar a capacidade de USB Mass Storage / Bootloader sem privilégios de root; a função não é suportada na configuração padrão de firmware. Tecnicamente isso pode ser feito modificando o driver USB do Linux, mas isso exige solicitar o serviço de customização de sistema ODM. Entre em contato com a equipe de vendas da Seeed para conhecer as opções de personalização.

**Referências:**

- [reComputer R1000 Getting Started](https://wiki.seeedstudio.com/pt-br/recomputer_r/)

### Como instalo o Raspberry Pi OS Lite 64-bit Bookworm no reComputer R1124-10? {#r1124-10-raspberry-pi-os-lite}

**Aplica-se a:** série reComputer R11xx (reComputer R1124-10 como exemplo), para casos que precisam do Raspberry Pi OS Lite 64-bit Bookworm

**Última verificação:** 2026-11-01

Atualmente não há imagem oficial adaptada para a versão Raspberry Pi OS Lite. Se você quiser usar uma imagem fornecida oficialmente, siga o fluxo de instalação "reComputer R1100 Flash OS" no Seeed Studio Wiki: https://wiki.seeedstudio.com/pt-br/recomputer_r1100_flash_os/ . Se você ainda precisar do Raspberry Pi OS Lite, pode gravá-lo diretamente com o Raspberry Pi Imager, mas, como não há arquivo de device tree, algumas funções podem não funcionar corretamente.

**Referências:**

- [reComputer R1100 Flash OS](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_flash_os/)

## Conectividade e rede {#connectivity-and-networking}

### O reComputer R1125-10 atualmente oferece suporte ao módulo Zigbee mini-PCIe? Ele ainda pode ser adquirido e implantado? {#r1125-10-mini-pcie-zigbee}

**Aplica-se a:** série reComputer R11xx (reComputer R1125-10 como exemplo), para implantações que precisam de um módulo Zigbee na interface mini-PCIe

**Última verificação:** 2026-11-01

O reComputer R1125-10 atualmente não oferece suporte ao módulo Zigbee mini-PCIe. Esse módulo continua descontinuado e não há expectativa de reposição, portanto ele não pode ser comprado e implantado diretamente como uma configuração suportada do dispositivo. Se o projeto não precisar usar a interface mini-PCIe, você pode considerar o Zigbee 3.0 USB Dongle Plus (ZBDongle-E), que atualmente está disponível para compra, e primeiro confirmar se seus recursos atendem aos requisitos para conectar dispositivos Zigbee.

**Pré-requisitos:**

- Confirme se o projeto precisa necessariamente ocupar a interface mini-PCIe

**Referências:**

- [Sonoff Zigbee 3.0 USB Dongle Plus（ZBDongle-E）](https://www.seeedstudio.com/sonoff-zigbee-usb-dongle-plus-p-5510.html)
- [reComputer R1100 Getting Started](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_intro/)

### O reComputer ER1124-10 pode ser substituído diretamente por um módulo Laird/Ezurio BL654 (Nordic nRF52840) e conectado a uma antena externa? {#er1124-10-laird-bl654-replacement}

**Aplica-se a:** série reComputer R11xx (reComputer ER1124-10 como exemplo), para casos que precisam substituir o Bluetooth on-board por um Laird/Ezurio BL654 ou usar uma antena externa

**Última verificação:** 2026-11-01

O Laird/Ezurio BL654 não pode substituir diretamente o Bluetooth on-board do reComputer ER1124-10. O Raspberry Pi CM4 usado nessa placa já integra Bluetooth nativamente, e o BL654 não pode assumir o lugar do Bluetooth on-board do CM4. Se o BL654 e uma antena externa forem obrigatórios, o BL654 só pode ser projetado como um módulo externo separado. Atualmente não há módulo externo BL654 nem solução de compatibilidade de antena externa que a Seeed tenha verificado para o ER1124-10, portanto isso não pode ser tratado como uma opção de upgrade que a Seeed fornece ou garante ser compatível. Antes de implementá-lo, você precisa confirmar as interfaces de placa disponíveis, o método de conexão do módulo, o suporte de driver, a alimentação e o layout da antena, e concluir toda a verificação de comunicação e RF.

**Referências:**

- [reComputer R1100 Getting Started](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_intro/)

### O reComputer R1124-10 (SKU 113991374) pode ser usado diretamente como um gateway de rede Zigbee? Um módulo Zigbee separado é obrigatório e o BLE on-board pode substituí-lo? {#r1124-10-zigbee-gateway}

**Aplica-se a:** série reComputer R11xx (reComputer R1124-10, SKU 113991374, como exemplo), para casos que precisam que o dispositivo seja usado como um gateway de rede Zigbee

**Última verificação:** 2026-11-01

Não, ele não pode ser usado diretamente. A interface Mini PCIe do atual reComputer R1124-10 não oferece suporte a Zigbee, e o BLE on-board não pode atuar como um rádio Zigbee. Embora BLE e Zigbee operem ambos na faixa de 2,4 GHz, eles usam protocolos sem fio diferentes e precisam de suporte de hardware e software incompatíveis, portanto o BLE integrado não pode substituir um módulo Zigbee dedicado. Para usar o dispositivo como um gateway Zigbee, é necessário instalar um coordenador ou módulo Zigbee dedicado compatível e conectá-lo por meio de uma das interfaces de host que o dispositivo suporta.

**Referências:**

- [reComputer R1100 Getting Started](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_intro/)

### O reComputer R1124-10 pode usar o módulo Quectel EC25-EUX 4G LTE Cat 4 e o módulo WM1302 SPI EU868 LoRaWAN ao mesmo tempo? {#r1124-10-ec25-wm1302-concurrent}

**Aplica-se a:** série reComputer R11xx (reComputer R1124-10 como exemplo), para casos que precisam de um módulo 4G LTE Cat 4 e um módulo SPI LoRaWAN conectados ao mesmo tempo

**Última verificação:** 2026-11-01

Sim, o reComputer R1124-10 oferece suporte ao EC25-EUX e ao WM1302 SPI funcionando ao mesmo tempo: instale o EC25-EUX no Slot 1 Mini-PCIe e conecte-o por meio da USB HUB2 Porta 4; instale o WM1302 SPI no Slot 2 Mini-PCIe e conecte-o por meio de SPI0 / CE1.

**Referências:**

- [reComputer R1100 Configure System](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_configure_system/)
- [reComputer R1100 Getting Started](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_intro/)

### Quais são o código de peça e a forma de comprar o conector de 3 pinos do reComputer R1024 / R1025? {#r1024-r1025-3pin-connector}

**Aplica-se a:** série reComputer R10xx (reComputer R1024 / R1025 como exemplo), para projetos que precisam selecionar um conector plugável para um cabo de 3 pinos

**Última verificação:** 2026-11-01

O reComputer-R1024 / R1025 é fornecido com três conectores de 3 pinos que os clientes podem usar em seus próprios projetos. O conector não está listado no Bazaar, portanto não pode ser comprado separadamente.

**Referências:**

- [reComputer R1000 Getting Started](https://wiki.seeedstudio.com/pt-br/recomputer_r/)

## Hardware e interfaces {#hardware-and-interfaces}

### Existe um módulo TPM oficialmente suportado para o módulo reComputer R1035 e como faço para instalá-lo? {#r1035-tpm-module}

**Aplica-se a:** série reComputer R10xx (reComputer R1035 como exemplo), para casos que precisam adicionar um chip de segurança TPM 2.0 ao dispositivo

**Última verificação:** 2026-11-01

Sim, mas o módulo não é vendido como item avulso; você precisa atender ao requisito por meio de customização.

**Referências:**

- [reComputer R1000 Getting Started](https://wiki.seeedstudio.com/pt-br/recomputer_r/)

### Há espaço no R1025-10 para instalar o Seeed PoE add-on e o Seeed SuperCAP UPS Module (LTC3350) ao mesmo tempo? {#r1025-10-poe-ups-fit}

**Aplica-se a:** série reComputer R10xx (reComputer R1025-10 como exemplo), para casos que precisam do Seeed PoE add-on e do Seeed SuperCAP UPS Module (LTC3350) instalados ao mesmo tempo

**Última verificação:** 2026-11-01

Sim, o R1025-10 pode receber o Seeed PoE add-on e o Seeed SuperCAP UPS Module (LTC3350) ao mesmo tempo. Para a instalação exata, consulte a seção "assemble-ups-and-poe-module" do guia de montagem do reComputer R1000: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_assembly_guide/ .

**Referências:**

- [reComputer R1000 Assembly Guide — Assemble UPS and PoE module](https://wiki.seeedstudio.com/pt-br/recomputer_r1000_assembly_guide/)

### O reComputer R1100 pode alimentar diretamente sensores externos de 24 V e 12 V e, se 220 V, 24 V e 12 V tiverem que ser usados ao mesmo tempo, como a fonte de alimentação deve ser escolhida? {#r1100-external-sensor-power}

**Aplica-se a:** série reComputer R11xx (reComputer R1100 como exemplo), para aplicações que alimentam sensores externos de 24 V / 12 V ou usam 220 V, 24 V e 12 V ao mesmo tempo

**Última verificação:** 2026-11-01

A série reComputer R1100 não integra uma saída de alimentação dedicada para sensores externos de 12 V ou 24 V, portanto esses sensores precisam de uma fonte de alimentação independente. Se a aplicação precisar de 220 V, 24 V e 12 V ao mesmo tempo, você pode escolher uma combinação de fontes independentes ou uma fonte de alimentação multi-saída adequada de acordo com a carga real, mas, antes de selecionar, é necessário confirmar a tensão, corrente ou potência nominais dos sensores, sua polaridade, os requisitos de fiação, a carga de partida, o uso exato dos 220 V e os requisitos de segurança elétrica no local. Sensores de 12 V e 24 V normalmente usam alimentação CC, portanto deve ser selecionada uma fonte de alimentação industrial que corresponda a essas especificações de saída, adicionando um conversor CC/CC quando necessário; um transformador não deve ser combinado com os sensores apenas com base no valor de tensão.

**Referências:**

- [reComputer R1100 Introdução](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_intro/)

<!-- RECOMPUTER_FAQ_AUTO_END -->

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

</div>
