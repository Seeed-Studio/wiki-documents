---
description: Inicialização do EdgeBox RPi 200 a partir de mídia externa
title: Inicialização do EdgeBox RPi 200 a partir de mídia externa
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /EdgeBox-RPi-200-boot-from-external-media
last_update:
  date: 6/14/2023
  author: Peter Pan
createdAt: '2023-06-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/EdgeBox-RPi-200-boot-from-external-media/
---


## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

A série EdgeBox-RPi-200 são controladores de computação de borda industrial tudo-em-um baseados em Raspberry Pi, que combinam múltiplos propósitos industriais. Projetado como hardware industrial robusto e de alta escalabilidade, equipado com ricos recursos de IO e suportado pelo excelente ecossistema de software industrial Raspberry Pi, é uma escolha ideal para automação inteligente e soluções de Internet Industrial das Coisas (IIoT).

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

:::tipBefore you Proceed:
Desde que atualizamos o EEPROM do Raspberry Pi Compute Module 4 para o lote lançado após 30/03/2023, em que a ordem de boot foi alterada para `NVME > USB-MSD > BCM-USB-MSD > SD CARD/eMMC > NETWORK > RESTART`, para mais informações visite a página [Update EEPROM for Compute Module 4](/pt-br/Raspberry_pi_CM4_update_eeprom/).

**Se você comprou o Edgebox-RPI-200 antes de 30/03/2023 e deseja seguir o guia para atualizar o EEPROM ou gravar o sistema operacional no Edgebox-RPI-200, você precisará obter uma placa de desenvolvimento mínima que contenha a função de seleção do modo de boot para o Raspberry Pi CM4, na qual a [Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html) é perfeita para isso.**

Portanto, este guia só se aplica ao `EdgeBox-RPi-200 lançado após 30/03/2023`, onde você pode localizar essa informação no `número de S/N` da `etiqueta do produto`; o número destacado na imagem abaixo `2312` indica que `23` é o `ano de produção 2023` e `12` é a `semana de produção 12` de 2023.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/label.jpg" alt="pir" width="500" height="auto" /></div>
:::

## Pré-requisitos

- 1 x computador Host PC (Ubuntu OS)
- 1 x [EdgeBox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html)
- 1x Dispositivo de Armazenamento:
  - Opção 1: 1 x Unidade de armazenamento USB (16Gb ou superior)
  - Opção 2: 1 x **Unidade M.2 NVMe**

:::danger
As etapas a seguir apagarão o seu dispositivo de armazenamento, portanto tenha cuidado com o dispositivo de armazenamento que você está tentando usar e certifique-se de que ele possa ser formatado.
:::

### Configure seu dispositivo inicializável

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="USB Storage" label="Armazenamento USB">

#### Configurar um dispositivo USB inicializável com o sistema operacional padrão de fábrica do EdgeBox-RPI-200

:::note
Nós fizemos backup da imagem original do sistema operacional e a publicamos no Sourceforge; você pode visitar [esta página](https://sourceforge.net/projects/edgebox-rpi-200/files/edgeboxrpi200.img/download) para obter o arquivo de imagem.
:::

Siga [as etapas aqui](https://wiki.seeedstudio.com/pt-br/Raspberry_Pi_3_Model_B/) sobre como configurar um dispositivo Raspbian OS inicializável, usando o [Raspberry Pi official Imager](https://www.raspberrypi.com/software/)

#### Inicializar a partir do USB

Antes de conectar a alimentação ao EdgeBox-RPI-200, você deve inserir o dispositivo de armazenamento USB que preparou nas etapas acima.

Em seguida, conecte a alimentação e aguarde o dispositivo iniciar.

Agora seu EdgeBox-RPI-200 deve ter sido inicializado a partir do armazenamento USB.

##### Verificar a mídia de boot

Você pode verificar a partir de qual mídia o EdgeBox-RPI-200 foi inicializado usando o comando `lsblk`.

Você deverá ter uma saída como mostrado abaixo:

```sh
pi@raspberrypi:~ lsblk
NAME         MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda            8:0    1  7.2G  0 disk 
|-sda1         8:1    1  256M  0 part /boot
`-sda2         8:2    1    7G  0 part /
mmcblk0      179:0    0 14.6G  0 disk 
|-mmcblk0p1  179:1    0  256M  0 part 
`-mmcblk0p2  179:2    0 14.3G  0 part 
mmcblk0boot0 179:32   0    4M  1 disk 
mmcblk0boot1 179:64   0    4M  1 disk 
```

:::note
Se você vir a saída a seguir, o que provavelmente acontecerá na primeira inicialização:

```sh
pi@raspberrypi:~ $ lsblk
NAME         MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda            8:0    1  7.2G  0 disk 
|-sda1         8:1    1  256M  0 part /boot
`-sda2         8:2    1  4.6G  0 part 
mmcblk0      179:0    0 14.6G  0 disk 
|-mmcblk0p1  179:1    0  256M  0 part 
`-mmcblk0p2  179:2    0 14.3G  0 part /
mmcblk0boot0 179:32   0    4M  1 disk 
mmcblk0boot1 179:64   0    4M  1 disk 
```

Você precisará alterar o `root=` no `/boot/cmdline.txt` para apontar para o dispositivo de armazenamento correto para montar o diretório root como `root=/dev/sda2`, então seu `/boot/cmdline.txt` deverá ficar assim:

```sh
console=serial0,115200 console=tty1 root=/dev/sda2 rootfstype=ext4 elevator=deadline 
fsck.repair=yes rootwait quiet splash plymouth.ignore-serial-consoles
```

Em seguida, reinicie.
:::

</TabItem>
<TabItem value="NVMe Drive" label="Unidade NVMe">

#### Instalar a unidade NVMe

Instale a unidade NVMe no slot M.2

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/install-nvme.jpg" alt="pir" width="500" height="auto" /></div>

#### Criar uma unidade NVMe inicializável

:::note
Certifique-se de que a unidade NVMe esteja formatada e não contenha nenhuma partição inicializável
:::

Conecte a alimentação e aguarde o dispositivo iniciar.

Em seguida, use SSH para acessar o EdgeBox-RPI-200. Aqui está [o guia](/pt-br/reterminal-dm-flash-OS/#access-reterminal-dm-via-ssh).

Depois que você obtiver o acesso por SSH, pode seguir as etapas abaixo:

**ETAPA 1:** Verifique se a unidade NVMe foi carregada corretamente

Digite o comando `lsblk`. Você deverá ver a seguinte saída, onde `nvme0n1` é o nome do dispositivo para a unidade NVMe.

```sh
pi@raspberrypi:~ $ lsblk
NAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0      179:0    0  14.6G  0 disk 
|-mmcblk0p1  179:1    0   256M  0 part /boot
`-mmcblk0p2  179:2    0  14.3G  0 part /
mmcblk0boot0 179:32   0     4M  1 disk 
mmcblk0boot1 179:64   0     4M  1 disk 
nvme0n1      259:0    0 119.2G  0 disk 
|-nvme0n1p1  259:1    0   200M  0 part 
`-nvme0n1p2  259:2    0   119G  0 part 
```

**ETAPA 2:** Baixar o arquivo de imagem do EdgeBox-RPI-200

Digite o seguinte comando para baixar o arquivo de imagem:

```sh
wget https://altushost-swe.dl.sourceforge.net/project/edgebox-rpi-200/edgeboxrpi200.img -O edgeboxrpi200.img
```

Você deverá ver o progresso do download como:

```sh
pi@raspberrypi:~/Downloads $ wget https://altushost-swe.dl.sourceforge.net/project/edgebox-rpi-200/edgeboxrpi200.img -O edgeboxrpi200.img
--2023-06-27 16:34:07--  https://altushost-swe.dl.sourceforge.net/project/edgebox-rpi-200/edgeboxrpi200.img
Resolving altushost-swe.dl.sourceforge.net (altushost-swe.dl.sourceforge.net)... 79.142.76.130
Connecting to altushost-swe.dl.sourceforge.net (altushost-swe.dl.sourceforge.net)|79.142.76.130|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 5230625280 (4.9G) [application/octet-stream]
Saving to: 'edgeboxrpi200.img'

edgeboxrpi200.img                     3%[=>                                                                 ] 151.13M  14.2MB/s    eta 6m 4s
```

**ETAPA 3:** Usar a ferramenta `DD` para gravar a imagem do sistema operacional na unidade NVMe

Digite o seguinte comando, onde `if`, como arquivo de entrada, deve ser o nome do arquivo de imagem `edgeboxrpi200.img`, e `of`, como o nome da unidade NVMe, `/dev/nvme0n1`

```sh
sudo dd if=edgeboxrpi200.img of=/dev/nvme0n1 bs=4MB status=progress oflag=sync
```

**ETAPA 4:** Reiniciar

Digite o seguinte comando:

```sh
sudo reboot
```

##### Verificar a mídia de boot

Agora seu EdgeBox-RPI-200 deve ter sido inicializado a partir do dispositivo de armazenamento NVMe.

Você pode verificar a partir de qual mídia o EdgeBox-RPI-200 foi inicializado usando o comando `lsblk`.

Onde o diretório de boot `/boot` está montado na partição `nvme0n1p1` e o diretório root `/` está montado na partição `nvme0n1p2`.

```sh
pi@raspberrypi:~ $ lsblk   
NAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0      179:0    0  14.6G  0 disk 
|-mmcblk0p1  179:1    0   256M  0 part 
`-mmcblk0p2  179:2    0  14.3G  0 part 
mmcblk0boot0 179:32   0     4M  1 disk 
mmcblk0boot1 179:64   0     4M  1 disk 
nvme0n1      259:0    0 119.2G  0 disk 
|-nvme0n1p1  259:1    0   256M  0 part /boot
`-nvme0n1p2  259:2    0   119G  0 part /
```

</TabItem>
</Tabs>

<!-- Code END -->

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
