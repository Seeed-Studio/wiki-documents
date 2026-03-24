---
description: Este artigo fornece um guia detalhado sobre como gravar o sistema operacional JetPack na placa-carregadora A608, que oferece suporte aos módulos NVIDIA Jetson Orin NX/Nano. Ele cobre tudo, desde os pré-requisitos e a entrada no modo de recuperação forçada, até o download da imagem do sistema e dos drivers e, por fim, a gravação do sistema operacional em um SSD NVMe, unidade flash USB ou cartão SD, garantindo que os usuários consigam concluir com êxito a instalação e a inicialização do sistema.
title: Placa-Carregadora A608
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608CB.webp
slug: /reComputer_A608_Flash_System
sku: 105110001
last_update:
  date: 12/4/2024
  author: Youjiang
createdAt: '2024-01-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reComputer_A608_Flash_System/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Gravar o JetPack OS na Placa-Carregadora A608 (compatível com NVIDIA Jetson Orin NX/Nano)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608CB.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-A608-Carrier-Board-for-Orin-NX-Orin-Nano-Series-p-5853.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
</div>

Neste wiki, mostraremos como gravar o JetPack em um SSD NVMe e em uma unidade flash USB conectados à Placa-Carregadora A608, que oferece suporte tanto ao módulo NVIDIA Jetson Orin NX quanto ao módulo NVIDIA Jetson Orin Nano.

## Pré-requisitos

- PC Host com Ubuntu
- Placa-Carregadora A608 com módulo Jetson Orin NX ou Jetson Orin Nano
- Cabo de transmissão de dados USB Type-C

:::info
Recomendamos que você use dispositivos host Ubuntu físicos em vez de máquinas virtuais.
Consulte a tabela abaixo para preparar a máquina host.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> Versão do JetPack </td>
        <td class="dbon" colspan="3"> Versão do Ubuntu (Computador Host) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
    </tr>
    <tr>
        <td >JetPack 5.x</td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::

## Entrar no modo de recuperação forçada

Antes de prosseguirmos para as etapas de instalação, precisamos garantir que a placa esteja em modo de recuperação forçada.

**Passo 1.** Desligue a alimentação do sistema; certifique-se de que a energia esteja desligada em vez de entrar no modo de espera.

**Passo 2.** Use o cabo Type C para USB Type A para conectar a placa-carregadora e o host.

**Passo 3.** Use o fio de terminal de travamento GH1.25MM para fazer um curto-circuito entre o pino 1 e o pino 2 em Recovery para colocá-lo em modo de recuperação.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/hardware_connection.png" /></div>

**Passo 4.** Ligue o dispositivo.

**Passo 5.** No PC host com Linux, abra uma janela do Terminal e insira o comando `lsusb`. Se o conteúdo retornado tiver uma das seguintes saídas, de acordo com o Jetson SoM que você usa, então a placa está em modo de recuperação forçada.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

A imagem abaixo é para Orin NX 8GB

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/lsusb.png" /></div>

**Passo 6.** Remova o fio de curto-circuito

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.1" label="JP5.1.1">

Aqui usaremos o NVIDIA L4T 35.3.1 para instalar o JetPack 5.1.1 na Placa-Carregadora A608 com módulo Jetson Orin NX.

**Passo 1.** [Baixe](https://developer.nvidia.com/embedded/jetson-linux-r3531) os drivers NVIDIA no PC host. Os drivers necessários são mostrados abaixo:

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/nvidia_driver.png" /></div>

**Passo 2.** [Baixe](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZ5nv2iWBQlIvPq7_aTQiucBp_HUwDmFNgkBMR04SI_teg?e=wseTuy) os drivers periféricos e coloque todos os drivers na mesma pasta.

Agora você verá três arquivos compactados na mesma pasta:

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/drivers.png" /></div>

**Passo 3.** Preparar a imagem do sistema.

Abra uma janela de terminal no PC host e execute o seguinte comando：

```bash
cd <path to drivers>
sudo apt install unzip 
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
cd ..
unzip 608_jp511.zip
cp -r ./608_jp511/Linux_for_Tegra/* ./Linux_for_Tegra/

```

**Passo 4.** Gravar o sistema na A608.

- Gravar em NVMe

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

- Gravar em USB

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

- Gravar em SD

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device mmcblk1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

Você verá a seguinte saída se o processo de gravação for bem-sucedido.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/flash.png" /></div>

Após a gravação, ligue novamente o dispositivo Jetson e faça login no sistema.
</TabItem>
<TabItem value="JP5.1.2" label="JP5.1.2">

Aqui usaremos o NVIDIA L4T 35.4.1 para instalar o JetPack 5.1.2 na Placa-Carregadora A608 com módulo Jetson Orin NX.

**Passo 1.** [Baixe](https://developer.nvidia.com/embedded/jetson-linux-r3541) os drivers NVIDIA no PC host. Os drivers necessários são mostrados abaixo:
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png" /></div>

**Passo 2.** [Baixe](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZcvwwGTgLBBq_M_pAa2tmEB-pZmFQraF9v9JcdiqcRbLA?e=Px98MO) os drivers periféricos e coloque todos os drivers na mesma pasta.

Agora você verá três arquivos compactados na mesma pasta:

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P2.png" /></div>

**Passo 3.** Preparar a imagem do sistema.

Abra uma janela de terminal no PC host e execute o seguinte comando：

```bash
cd <path to drivers>
sudo apt install unzip 
tar xf Jetson_Linux_R35.4.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
cd ..
unzip a608_jp512.zip
cp -r ./608_jp512/Linux_for_Tegra/* ./Linux_for_Tegra/
```

**Passo 4.** Gravar o sistema na A608.

- Gravar em NVMe

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

- Gravar em USB

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

- Gravar em SD

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device mmcblk1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

Você verá a seguinte saída se o processo de gravação for bem-sucedido.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

Após a gravação, ligue novamente o dispositivo Jetson e faça login no sistema.

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

Aqui usaremos o NVIDIA L4T 36.3 para instalar o JetPack 6.0 na Placa-Carregadora A608 com módulo Jetson Orin NX.

**Passo 1.** [Baixe](https://developer.nvidia.com/embedded/jetson-linux-r363) os drivers NVIDIA no PC host. Os drivers necessários são mostrados abaixo:
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png" /></div>

**Passo 2.** [Baixe](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZdUUKln2yBKhPS8yegaLzMBWZm2MtIaFnHbFYkwazArzA?e=blzKtI) os drivers periféricos e coloque todos os drivers na mesma pasta.

Agora você verá três arquivos compactados na mesma pasta:

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/6.0.png" /></div>

**Passo 3.** Preparar a imagem do sistema.

Abra uma janela de terminal no PC host e execute o seguinte comando：

```sh
cd <path to drivers>
sudo apt install unzip 
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
cd ..
unzip 608_jp60.zip
sudo cp -r ./608_jp60/Linux_for_Tegra/* ./Linux_for_Tegra/
```

**Passo 4.** Gravar o sistema no Nvme da A608.

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

Após a gravação, ligue novamente o dispositivo Jetson e faça login no sistema.

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

Aqui usaremos o NVIDIA L4T 36.4 para instalar o JetPack 6.1 na Placa-Carregadora A608 com módulo Jetson Orin NX.

**Etapa 1.** [Faça o download](https://developer.nvidia.com/embedded/jetson-linux-r3640) dos drivers NVIDIA no PC host. Os drivers necessários são mostrados abaixo:
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png" /></div>

**Etapa 2.** [Faça o download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVrGntfS1wxHhrgnwGeHQmQBtQ0gvHj4udkREIDIACvFDw?e=5B07Za) dos drivers periféricos e coloque todos os drivers na mesma pasta.

Agora você verá três arquivos compactados na mesma pasta:

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/a608_jp6.1.png" /></div>

**Etapa 3.** Prepare a imagem do sistema.

Abra uma janela de terminal no PC host e execute o seguinte comando：

```bash
cd <path to drivers>
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
cd ..
tar xf A608_Jetpack_6.1.tar.gz
sudo cp -r 608_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/
```

**Etapa 4.** Grave o sistema na NVMe do A608.

```bash
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

Após a gravação, ligue o dispositivo Jetson novamente e faça login no sistema.

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

Aqui usaremos o NVIDIA L4T 36.4.3 para instalar o Jetpack 6.2 na Placa de Expansão A608 com módulo Jetson Orin NX.

**Etapa 1.** [Faça o download](https://developer.nvidia.com/embedded/jetson-linux-r3643) dos drivers NVIDIA no PC host. Os drivers necessários são mostrados abaixo:
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/jp6.2.png" /></div>

**Etapa 2.** [Faça o download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EYGdRLSx_oxDjagkG2J6GTYBB9TDLvTKagnRfQcbz6gplA?e=sswKna) dos drivers periféricos e coloque todos os drivers na mesma pasta.

Agora você verá três arquivos compactados na mesma pasta:

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/jp62_files.png" /></div>

**Etapa 3.** Prepare a imagem do sistema.

Abra uma janela de terminal no PC host e execute o seguinte comando：

```bash
cd <path to drivers>
tar xf Jetson_Linux_R36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
sudo tar zxpf 608_jp62.tar.gz
sudo cp -r 608_jp62/Linux_for_Tegra/* Linux_for_Tegra/ 
cd Linux_for_Tegra/
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

**Etapa 4.** Grave o sistema na NVMe do A608.

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit-super internal
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

Após a gravação, ligue o dispositivo Jetson novamente e faça login no sistema.

</TabItem>

</Tabs>

## Recursos

- [Arquivos CAD do A608](https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608_V1.2.zip)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
