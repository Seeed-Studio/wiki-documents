---
description: ...
title: Atualizando o Jetson Linux com Atualização Over-the-Air Baseada em Imagem
keywords:
  - reComputer
  - OTA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /updating_jetpack_with_ota
last_update:
  date: 3/19/2025
  author: Youjiang
createdAt: '2025-03-20'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/updating_jetpack_with_ota/
---


Este wiki usará o [reComputer J3010](https://www.seeedstudio.com/reComputer-J3010-p-5589.html) como exemplo para demonstrar como atualizar o Jetson Linux do JetPack 5.1.3 para o JetPack 6.0 com atualização over-the-air baseada em imagem.

## Pré-requisitos

- reComputer J4012/ J4011/ J3010 ou J3011
- Computador host com Ubuntu 20.04
- Cabo USB Type-C para transmissão de dados

:::info
Aqui, usamos a série clássica reComputer para demonstração. Outras séries de reComputers também podem seguir este tutorial para realizar upgrades de firmware OTA.
:::

## 1 Gerar a Imagem de Sistema do JP5.1.3

### 1.1 Preparar o BSP do JP5.1.3

Primeiro, você precisa abrir uma janela de terminal no **PC host** e executar o seguinte comando para baixar o BSP da versão NVIDIA JetPack 5.1.3.

```bash
cd <root_dir>
mkdir jp5 && cd jp5
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v5.0/release/jetson_linux_r35.5.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v5.0/release/tegra_linux_sample-root-filesystem_r35.5.0_aarch64.tbz2
```

:::note
Onde `<root_dir>` é o diretório raiz do projeto.
:::

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ota/bsp_jp5.png"/>
</div>

### 1.2 Construir a Imagem de Sistema do JP5.1.3

Execute o seguinte comando na janela de terminal do PC host para construir a imagem de sistema 5.1.3.

```bash
tar xf jetson_linux_r35.5.0_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.5.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra
sudo ./apply_binaries.sh
sudo  BOARDID=<BOARDID> BOARDSKU=<BOARDSKU> FAB=<FAB>  BOARDREV=<BOARDREV> CHIP_SKU=<CHIP_SKU> ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --no-flash  --massflash 5  --network usb0  jetson-orin-nano-devkit  external
```

:::info
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <td> Jetson </td>
      <td> BOARDID </td>
      <td> BOARDSKU </td>
      <td> FAB </td>
      <td> BOARDREV </td>
      <td> CHIP_SKU </td>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td > Orin Nano 4G </td>
        <td > 3767 </td>
        <td > 0004 </td>
        <td > 300 </td>
        <td > N.2 </td>
        <td > 00:00:00:D6 </td>
    </tr>
    <tr>
        <td > Orin Nano 8G </td>
        <td > 3767 </td>
        <td > 0003 </td>
        <td > 300 </td>
        <td > N.2 </td>
        <td > 00:00:00:D6 </td>
    </tr>
    <tr>
        <td > Orin Nx 8G </td>
        <td > 3767 </td>
        <td > 0001 </td>
        <td > 300 </td>
        <td > M.3 </td>
        <td > 00:00:00:D4 </td>
    </tr>
    <tr>
        <td > Orin Nx 16G </td>
        <td > 3767 </td>
        <td > 0000 </td>
        <td > 300 </td>
        <td > G.3 </td>
        <td > 00:00:00:D3 </td>
    </tr>
  </tbody>
</table>

Substitua as variáveis correspondentes com base no módulo Jetson específico que você está usando. Para o reComputer J3010:
`sudo  BOARDID=3767 BOARDSKU=0004 FAB=300  BOARDREV=N.2 CHIP_SKU=00:00:00:D6 ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --no-flash  --massflash 5  --network usb0  jetson-orin-nano-devkit  external`
:::

Após a compilação bem-sucedida, um pacote de imagem de sistema será gerado no diretório `Linux_for_Tegra`.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ota/build_jp5.png"/>
</div>

### 1.3 Gravar o JP5.1.3 no Dispositivo (Opcional)

Se você quiser testar este firmware no dispositivo Jetson, pode consultar [este wiki](https://wiki.seeedstudio.com/pt-br/reComputer_J4012_Flash_Jetpack/) para gravar o firmware no dispositivo Jetson.

```bash
sudo tar xpf mfi_jetson-orin-nano-devkit.tar.gz
cd mfi_jetson-orin-nano-devkit
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

## 2 Gerar o Pacote OTA do JP6.0

### 2.1 Preparar o BSP

Você precisa abrir uma janela de terminal no **PC host** e executar o seguinte comando para baixar o BSP da versão NVIDIA JetPack 6.0.

```bash
cd <root_dir>
mkdir jp6 && cd jp6
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v3.0/release/jetson_linux_r36.3.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v3.0/release/tegra_linux_sample-root-filesystem_r36.3.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v3.0/release/ota_tools_R36.3.0_aarch64.tbz2
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ota/bsp_jp6.png"/>
</div>

### 2.2 Construir a Imagem de Sistema do JP6

Consulte as etapas em [1.2](./#12-Construir-imagem-de-sistema-do-jp513) para execução e lembre-se de modificar as variáveis ali mencionadas.

```bash
tar xf jetson_linux_r36.3.0_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs
cd Linux_for_Tegra
sudo ./apply_binaries.sh
sudo BOARDID=<BOARDID> BOARDSKU=<BOARDSKU> FAB=<FAB> BOARDREV=<BOARDREV> CHIP_SKU=<CHIP_SKU> ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" --no-flash --massflash 5 --network usb0 jetson-orin-nano-devkit external
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ota/build_jp6.png"/>
</div>

### 2.3 Gerar o Pacote de Payload OTA

Execute os seguintes comandos na janela de terminal do PC host.

```bash
cd <root_dir>/jp6
tar xf ota_tools_R36.3.0_aarch64.tbz2
cd Linux_for_Tegra
sudo BASE_BSP=<root_dir>/jp5/Linux_for_Tegra ./tools/ota_tools/version_upgrade/l4t_generate_ota_package.sh --external-device nvme0n1 -S 80GiB jetson-orin-nano-devkit R35-5
```

Após a conclusão do comando, você obterá o `ota_payload_package.tar.gz` em Linux_for_Tegra/bootloader/jetson-orin-nano-devkit.

## 3 Aplicar o Pacote OTA no Dispositivo

### 3.1 Preparar o trabalho

Copie o pacote OTA gerado (`ota_payload_package.tar.gz`) para o dispositivo Jetson e execute os seguintes comandos na janela de terminal do dispositivo Jetson.

```bash
scp <...>/jp6/Linux_for_Tegra/bootloader/jetson-orin-nano-devkit/ota_payload_package.tar.gz ~
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v3.0/release/ota_tools_R36.3.0_aarch64.tbz2
sudo mkdir /ota
sudo mv ~/ota_payload_package.tar.gz /ota
tar xf ota_tools_R36.3.0_aarch64.tbz2
```

### 3.2 Aplicar o OTA

```bash
cd ~/Linux_for_Tegra/tools/ota_tools/version_upgrade
sudo ./nv_ota_start.sh /ota/ota_payload_package.tar.gz
```

Depois que este comando for concluído com sucesso, reinicie o dispositivo.

Por fim, o dispositivo é atualizado com sucesso da versão 5.1.3 para a 6.0.

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
