---
description: J101 Habilitar Cartão SD
title: J101 Habilitar Cartão SD
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /J101_Enable_SD_Card
last_update:
  date: 01/05/2022
  author: w0x7ce
no_comments: false
createdAt: '2023-01-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/J101_Enable_SD_Card/
---

<!-- # Boot NVIDIA JetPack OS from SD card for J101 Carrier Board -->

# J101 Habilitar Cartão SD

O método é gravar o NVIDIA JetPack OS no cartão SD na J101 Carrier Board, que é operada no reComputer J1010. Portanto, é necessário primeiro <a href="https://wiki.seeedstudio.com/pt-br/reComputer_J1010_J101_Flash_Jetpack/" target="_blank"><span>Gravar o JetPack OS no reComputer J1010</span></a>.

## Configuração do Driver

No início, precisamos ligar o reComputer e ir para a área de trabalho como abaixo:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/S.png" /></div>


### Passo 1. Clonar o repositório

Clique com o botão direito e abra o Terminal e, em seguida, execute o comando abaixo para baixar o código relevante:

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
```

### Passo 2. Compilar jetson-sdmmc-overlay

Acesse o local do workspace:

```bash
cd seeed-linux-dtoverlays
```

Para a J101 Carrier board, precisamos alterar o valor de "compatible" neste arquivo "overlays\jetsonnano\jetson-sdmmc-overlay.dts".

```bash
sed -i '17s#JETSON_COMPATIBLE#\"nvidia,p3449-0000-b00+p3448-0002-b00\"\, \"nvidia\,jetson-nano\"\, \"nvidia\,tegra210\"#' overlays/jetsonnano/jetson-sdmmc-overlay.dts
```

<!-- Just like this.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/change.png"/></div> -->

Em seguida, compilamos o arquivo que alteramos para garantir que ele foi modificado corretamente.

```bash
make overlays/jetsonnano/jetson-sdmmc-overlay.dtbo
```

### Passo 3. Certificar-se de que o cartão SD pode ser reconhecido

Insira o cartão SD na **J101 Carrier board**.

```bash
sudo cp overlays/jetsonnano/jetson-sdmmc-overlay.dtbo /boot/
cd /boot/
sudo /opt/nvidia/jetson-io/config-by-hardware.py -l
```

Após executar esses comandos acima, devemos obter uma saída **similar** (**pode não ser exatamente a mesma. Depende dos periféricos e dos drivers já instalados**) à seguinte e assim saberemos que o cartão SD foi reconhecido:

```txt
    Header 1 [default]: Jetson 40pin Header
    Available hardware modules:
    1. Adafruit SPH0645LM4H
    2. Adafruit UDA1334A
    3. FE-PI Audio V1 and Z V2
    4. MCP251x CAN Controller
    5. ReSpeaker 4 Mic Array
    6. ReSpeaker 4 Mic Linear Array
    7. reComputer sdmmc
    Header 2: Jetson Nano CSI Connector


    Available hardware modules:
    1. Camera IMX219 Dual
    2. Camera IMX477 Dual
    3. Camera IMX477-A and IMX219-B
    Header 3: Jetson M.2 Key E Slot
    No hardware configurations found!
```

### Passo 4. Dar um nome ao nosso dispositivo e finalizar a instalação do driver

```bash
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "reComputer sdmmc"
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/fix01.png" /></div>


!!!Note
    Talvez você precise **reiniciar** para executar o jtop após concluir a instalação pela primeira vez.

<!-- ## Move system to SD card

First, we need to clone the script include the tools we need.

```bash
git clone https://github.com/limengdu/bootFromUSB
```

Second , We need to make sure the sd card is in ext4 format, which can be seen visually in the "disk" tool, if it is not ext4 we need to format it and change it to ext4 format.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_view_1.png"/></div>

And then , go to the script directory , execute the following command like this

```bash
cd bootFromUSB
./copyRootToUSB.sh -p /dev/mmcblk1p1
```

Wait a while, only until it finishes automatically, if no error is reported, the burning is done

## Boot Configuration

Once the driver has been successfully installed and configured,we can simply view it via the command like "lsblk" or view device in "/dev".

### Change boot device

We are supposed to change the configuration in "/boot/extlinux/extlinux.conf".

- Boot from sd card

    After we boot from the emmc on the carrier board, we want to modify it to boot from the SD card. We need to make sure that the previous process, including the system burn to the sd card, and the sd card drivers are installed properly. Modify the parameters after root to the address of the device we are booting from. When we have completed our changes, reboot the system.

    **Before reboot Modify "/boot/extlinux/extlinux.conf" After reboot view "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf"**

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_3.png"></div>

    !!!Note
        Our configuration file after booting the system from the sd card is "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf" and the configuration file after booting the system from the onboard emmc is in "/boot/extlinux/extlinux.conf" . They are the same files from which the device reads the configuration and chooses where to boot the system after power-up, and the relative paths change when the system has finished booting.

- Boot from board emmc

    We want to change back to booting from emmc after booting from an SD card or we need to change the SD card for some purpose. Then we need to change the device back to boot from emmc first. We should make the following changes.

    **Before reboot Modify "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf" After reboot view "/boot/extlinux/extlinux.conf"**

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_4.png"></div>

Finally, we find it really works well.

- Boot from emmc

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_emmc.png"></div>

- Boot from sd card

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_sd.png"></div> -->

## Mais

### Alterar velocidade de E/S do cartão SD

Nós fornecemos a função de cartão SD na <a href="https://wiki.seeedstudio.com/pt-br/install_NVIDIA_software_to_Jetson-101" target="_blank"><span>reComputer J101 carrier board</span></a>, que suporta frequência de CLK de 48MHz. O CLK aqui é projetado para atender certificações (como CE/FCC). Se você quiser aumentar o CLK por conta própria, pode usar a instrução abaixo.

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/jetsonnano/jetson-sdmmc-overlay.dts" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/jetsonnano/jetson-sdmmc-overlay.dts" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>


- **Passo 1**. Clone este repositório e modifique o código abaixo.

    ```bash
    git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
    ```

- **Passo 2**. Modificar e compilar o valor de max-clk-limit

    ```bash
    cd seeed-linux-dtoverlays
    sed -i '10s#48000000#208000000#' overlays/jetsonnano/jetson-sdmmc-overlay.dts
    make overlays/jetsonnano/jetson-sdmmc-overlay.dtbo
    sudo cp overlays/jetsonnano/jetson-sdmmc-overlay.dtbo /boot/
    sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "reComputer sdmmc"
    ```

- **Passo 3**. Reiniciar

    ```bash
    reboot
    ```

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

