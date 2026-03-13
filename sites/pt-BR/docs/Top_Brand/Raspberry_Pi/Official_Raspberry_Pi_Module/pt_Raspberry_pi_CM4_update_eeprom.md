---
description: Atualizar eeprom
title: Atualizar EEPROM para Compute Module 4
keywords:
  - Raspberry_Pi
  - Official_Raspberry_Pi_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Raspberry_pi_CM4_update_eeprom
last_update:
  date: 2/15/2023
  author: Peter Pan
createdAt: '2023-02-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Raspberry_pi_CM4_update_eeprom/
---
<!-- ---
name: Atualizar eeprom
category: Software
bzurl: 
wikiurl: 
sku: 
--- -->

# O que é o Compute Module 4

O Raspberry Pi Compute Module 4 (CM4) aproveita o poder de computação do popular Raspberry Pi 4 Model B, com mudanças dramáticas de desempenho em comparação com seu antecessor: núcleos de CPU mais rápidos, melhor multimídia, mais capacidades de interface. E, pela primeira vez, este lançamento oferece múltiplas opções de densidade de RAM e opções de conectividade sem fio.

Em termos de dimensões externas, esta versão adota um padrão mecânico completamente novo. A área total ocupada do módulo em sua placa-carregadora é reduzida, resultando em um formato menor e mais compacto, adequado para integração em produtos.

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/102991421_front-05_2_1.png" alt="pir" width={650} height="auto" /></p>

:::note
A potência do Raspberry Pi 4 em um fator de forma compacto para aplicações profundamente embarcadas. O Raspberry Pi Compute Module 4 incorpora um processador ARM Cortex-A72 quad-core, saída de vídeo dupla e uma ampla seleção de outras interfaces. Disponível em 32 variantes, com uma variedade de opções de RAM e Flash eMMC, e com ou sem conectividade sem fio. -- [Raspbarry Pi CM4](https://www.raspberrypi.com/products/compute-module-4/?variant=raspberry-pi-cm4001000)
:::

## Produtos Compute Module 4 da Seeed Studio

| reTerminal  | Edgebox-RPI-100  |EdgeLogix-RPI-1000| reRouter| Placa-carregadora Dual Gigabit Ethernet NICs |
|---|---|---|---| --- |
| <a href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/reterminal-cover-1.png" alt="pir" width="650" height="auto"/></a> |  <a href="https://www.seeedstudio.com/EdgeBox-RPI4-A-4G32G-WiFi-p-4971.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first_3.jpg" alt="pir" width="650" height="auto"/></a> | <a href="https://www.seeedstudio.com/EdgeLogix-RPI-1000-CM4108032-p-5488.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991734-102110773-edgelogix--rpi-1000-firstone_1.jpg" alt="pir" width="650" height="auto"/></a> | <a href="https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110110_preview-16.png" alt="pir" width="650" height="auto"/></a> | <a href="https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110090_preview-07-min.png" alt="pir" width="650" height="auto"/></a> |

## Como atualizar a EEPROM do CM4

### Pré-requisito

**Hardware necessário:**

- Computador host baseado em Linux (pode ser um dos seguintes):
  - Raspberry Pi 4B com Raspberry Pi OS instalado
  - PC com a versão mais recente do Ubuntu OS instalada
- Cabo USB Tipo-C

**Hardware aplicável da Seeed Studio:**

| reTerminal | reRouter | Placa-carregadora Dual Gigabit Ethernet NICs |
|---|---|---|
| <a href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/reterminal-cover-1.png" alt="pir" width="650" height="auto"/></a>  | <a href="https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110110_preview-16.png" alt="pir" width="650" height="auto"/></a> | <a href="https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110090_preview-07-min.png" alt="pir" width="650" height="auto"/></a> |

:::note
Este processo exige colocar o armazenamento eMMC do CM4 no modo 'USB mass storage', o que atualmente só é aplicável com reRouter e reTerminal. Se você tiver Edgebox-RPI-200 ou EdgeLogix-RPI-1000, será necessário ter uma placa de desenvolvimento CM4 que possa colocar o armazenamento eMMC do CM4 em modo de armazenamento USB, por exemplo, a [Placa-carregadora Dual Gigabit Ethernet NICs](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html)
:::

### Colocar o armazenamento eMMC do CM4 em modo de USB mass storage

**Para reTerminal**

- **Passo 1:** Abra o gabinete e remova o dissipador de calor do reTerminal para obter acesso ao seletor de boot. Siga as etapas na [Página Wiki de Primeiros Passos do reTerminal](/pt-br/reTerminal) até que você tenha alternado a chave de modo de boot.

**Para reRouter**

- **Passo 1:** Abra o gabinete do reRouter removendo os 4 parafusos inferiores e a tampa inferior, como mostrado abaixo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/bottom_screw.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 2:** Deslize a placa do reRouter para fora do gabinete e retire-a

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/slide_pcb.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 3:** Localize a interface de 3 pinos e faça curto entre os pinos GND e BOOT.

:::note
A **Placa-carregadora Dual Gigabit Ethernet NICs** é a mesma PCB que o reRouter, sendo necessário apenas executar o **Passo 3** para selecionar o modo de boot.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width={600} height="auto" /></p>

### Configuração de software e atualização do firmware da EEPROM

**No seu PC ou Raspberry Pi 4B (Flash Tool)**

:::note
Para atualizar a EEPROM do Raspberry Pi, há suporte apenas para sistema operacional baseado em Linux. As etapas a seguir foram testadas apenas em **PC com Ubuntu 22.04** e **Raspberry Pi 4B (Flash Tool) com Raspberry Pi OS (64-bit)**
:::

- **Passo 1:** Instale o pacote de software de sistema necessário. Abra o aplicativo **`Terminal`** e digite o seguinte comando:

```bash

sudo apt-get update

sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **Passo 2:** Clone o repositório da ferramenta **`usbboot`**

```bash
cd ~/

git clone --depth=1 https://github.com/raspberrypi/usbboot

cd usbboot
```

- **Passo 3:** Compile a ferramenta **`usbboot`**

```bash

make
```

- **Passo 4:** Atualize a EEPROM

:::note
O repositório **`usbboot`** no GitHub deve ter o firmware mais recente do bootloader da EEPROM atualizado, portanto, a etapa a seguir deve atualizá-lo para o firmware mais recente do bootloader da EEPROM
:::

```bash

cd recovery

./update-pieeprom.sh
```

Você deverá ver uma mensagem semelhante à mostrada abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/eeprom_update_log.png" alt="pir" width={1000} height="auto" /></p>

**Opcional:** Se você quiser usar uma versão específica do firmware do bootloader, pode visitar a pasta de firmware do repositório [rpi-eeprom](https://github.com/raspberrypi/rpi-eeprom/tree/master/firmware/) para selecionar e baixar o arquivo bin de firmware para substituir o arquivo **`pieeprom.original.bin`**. Por exemplo:

:::note
Esta etapa opcional substituirá o arquivo **`pieeprom.original.bin`** pela compilação `stable` mais recente **`pieeprom-2023-01-11.bin`** no momento da redação deste wiki.
:::

```bash

cd ~/usbboot/recovery

rm -f pieeprom.original.bin

curl -L -o pieeprom.original.bin https://github.com/raspberrypi/rpi-eeprom/blob/master/firmware/stable/pieeprom-2023-01-11.bin

./update-pieeprom.sh
```

Você deverá ver uma mensagem semelhante à mostrada abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/eeprom_update_log.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 5:** Conecte o cabo USB Tipo-C ao Dispositivo CM4 (**`reTerminal`** \ **`reRouter`** \ **`Dual Gigabit Ethernet NICs Carrier Board`**) e ao dispositivo **`Host PC/Rasbperry Pi 4B(Flash Tool)`**, em que o **Dispositivo CM4** deve ser colocado no **modo USB massive storage**.

- **Passo 6:** Aplicar e atualizar o firmware da EEPROM

```bash

cd ~/usbboot

./rpiboot -d recovery

```

Você deverá ver uma mensagem semelhante à mostrada abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/update_log.png" alt="pir" width={600} height="auto" /></p>

Neste ponto, o seu **`Dispositivo CM4`** deverá ter a nova ordem de boot configurada e o firmware da EEPROM atualizado.

### Alterar ordem de boot e atualizar EEPROM

:::note
Você deve ter seguido as etapas de configuração acima até o **`Passo 3`**
:::

- **Passo 1:** Edite o `boot.conf`

```bash
cd ~/usbboot/recovery

nano boot.conf
```

o arquivo deverá ficar como a seguir:

```bash

[all]
BOOT_UART=0
WAKE_ON_GPIO=1
POWER_OFF_ON_HALT=0

# Try SD first (1), followed by, USB PCIe, NVMe PCIe, USB SoC XHCI then network
BOOT_ORDER=0xf25641

# Set to 0 to prevent bootloader updates from USB/Network boot
# For remote units EEPROM hardware write protection should be used.
ENABLE_SELF_UPDATE=1
```

onde a linha **`BOOT_ORDER=0xf25641`** são as configurações de ordem de boot, em que a ordem de boot atual é `CARTÃO SD/eMMC > USB-MSD > NVME > BCM-USB-MSD > REDE > REINICIAR`. Se você quiser alterar a ordem de boot para `NVME > USB-MSD > BCM-USB-MSD >  CARTÃO SD/eMMC > REDE > REINICIAR`, a configuração de ordem de boot deverá ser **`BOOT_ORDER=0xf21564`**.

Portanto, a nova configuração de ordem de boot no `boot.conf` deverá ficar como a seguir:

```bash

[all]
BOOT_UART=0
WAKE_ON_GPIO=1
POWER_OFF_ON_HALT=0

# Try SD first (1), followed by, USB PCIe, NVMe PCIe, USB SoC XHCI then network
BOOT_ORDER=0xf21564

# Set to 0 to prevent bootloader updates from USB/Network boot
# For remote units EEPROM hardware write protection should be used.
ENABLE_SELF_UPDATE=1
```

Salve e saia do editor `nano`.

A seguir está a tabela que define a propriedade das diferentes configurações de modos de boot para BOOT_ORDER para referência.

| Valor | Modo  | Descrição |
|---|---|---|
|  0x0 | SD CARD DETECT | Tenta SD e então aguarda o card-detect indicar que o cartão foi trocado - obsoleto agora que 0xf (RESTART) está disponível.  |
|  0x1 | SD CARD/eMMC |  Cartão SD (ou eMMC no Compute Module 4).  |
|  0x2 | NETWORK  | Boot pela rede  |
|  0x3 | RPIBOOT | RPIBOOT  |
|  0x4 | USB-MSD  | Boot por armazenamento em massa USB   |
|  0x5 | BCM-USB-MSD  |  Boot USB 2.0 a partir do conector USB Type C (CM4: conector USB tipo A na placa CM4IO).  |
|  0x6 | NVME | Apenas CM4: boot a partir de um SSD NVMe conectado à interface PCIe.   |
|  0x7 | HTTP | Boot HTTP pela Ethernet.  |
|  0xe | STOP | Parar e exibir o padrão de erro. Um ciclo de energia é necessário para sair deste estado. |
|  0xf | RESTART|  Reiniciar a partir do primeiro modo de boot no campo BOOT_ORDER, ou seja, em loop |

> Referência: [BOOT_ORDER Property Table](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#BOOT_ORDER)

- **Etapa 2:** Obtenha o firmware mais recente

```bash

wget -O pieeprom.original.bin https://github.com/raspberrypi/rpi-eeprom/blob/master/firmware/stable/pieeprom-2023-01-11.bin
```

- **Etapa 3:** Atualize o firmware da EEPROM com o novo `boot.conf`

```bash

./update-pieeprom.sh
```

- **Etapa 4:** Conecte o USB Type-C ao Dispositivo CM4 (**`reTerminal`** \ **`reRouter`** \ **`Dual Gigabit Ethernet NICs Carrier Board`**) e ao Dispositivo **`Host PC/Rasbperry Pi 4B(Flash Tool)`**, no qual o **Dispositivo CM4** deve ser colocado no **modo de armazenamento em massa USB**.

- **Etapa 5:** Aplique o firmware ao dispositivo

```bash
cd ~/usbboot

sudo ./rpiboot -d recovery
```

Você deverá ver uma mensagem semelhante à mostrada abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/update_log.png" alt="pir" width={600} height="auto" /></p>

Neste ponto seu **`CM4 Device`** deverá ter a nova ordem de boot configurada e o firmware da EEPROM atualizado.

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
