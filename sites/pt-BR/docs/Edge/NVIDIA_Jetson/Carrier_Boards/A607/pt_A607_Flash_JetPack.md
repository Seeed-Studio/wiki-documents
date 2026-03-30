---
description: Placa Carrier A607
title: Placa Carrier A607
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_A607_Flash_System
sku: 102110841
last_update:
  date: 04/17/2023
  author: Lakshantha
createdAt: '2023-04-17'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reComputer_A607_Flash_System/
---

# Gravar o sistema JetPack na Placa Carrier A607 (compatível com NVIDIA Jetson Orin NX/Nano)

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A607/1.png" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A607-Carrier-Board-for-Jetson-Orin-NX-Nano-p-5634.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
</div>

Neste wiki, mostraremos como gravar o [Jetpack](https://developer.nvidia.com/embedded/jetpack) em um SSD NVMe conectado à Placa Carrier A607, que é compatível tanto com o módulo NVIDIA Jetson Orin NX quanto com o módulo NVIDIA Jetson Orin Nano

## Pré-requisitos

- PC host com Ubuntu (nativo ou VM usando VMware Workstation Player)
- Placa Carrier A607 com módulo Jetson Orin NX ou Jetson Orin Nano
- Cabo USB Tipo-C para transmissão de dados

## Entrar no modo Force Recovery

Antes de prosseguirmos para as etapas de instalação, precisamos garantir que a placa esteja em modo force recovery.

**Passo 1.** Conecte um cabo USB entre o conector Tipo-C da placa e o PC host com Linux

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A607/3.png" /></div>

**Passo 2.** Pressione o botão RECOVERY e, mantendo esse botão pressionado, conecte o adaptador de energia ao conector DC JACK na placa para ligá-la

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A607/2.png" /></div>

**Passo 3.** No PC host com Linux, abra uma janela do Terminal e insira o comando `lsusb`. Se o conteúdo retornado tiver uma das seguintes saídas de acordo com o Jetson SoM que você utiliza, então a placa está em modo force recovery.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

A imagem abaixo é para Orin NX 16GB

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/A607/4.png" /></div>

**Passo 4.** Remova o fio jumper

## Baixar os drivers dos periféricos

Antes de tudo, você precisa instalar os drivers dos periféricos para esta placa. Eles são necessários para que alguns periféricos de hardware funcionem na placa. Clique nos links abaixo para baixar os drivers de acordo com o módulo Jetson.

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Versão do JetPack</th>
      <th>Versão do L4T</th>
      <th>Link para Download</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>Jetson Orin NX 8GB/ 16GB</td>
      <td>5.1</td>
      <td>35.2.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-NX-JP5.1.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-NX-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQS4f032w2VIsYE-4Bs80K8BIRD7YGXgBdDq6umW3zCIlw?e=l0LWr0" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ecv3iI8SWcNJs7f_6_bOcyIB9xr9o9x7Ghs98Hj07Im1Ew?e=fkwe6b" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td rowSpan={3}>Jetson Orin Nano 4GB</td>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-Nano-4GB-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQS4f032w2VIsYE-4Bs80K8BIRD7YGXgBdDq6umW3zCIlw?e=l0LWr0" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>  
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ecv3iI8SWcNJs7f_6_bOcyIB9xr9o9x7Ghs98Hj07Im1Ew?e=fkwe6b" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td rowSpan={3}>Jetson Orin Nano 8GB</td>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-Nano-8GB-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQS4f032w2VIsYE-4Bs80K8BIRD7YGXgBdDq6umW3zCIlw?e=l0LWr0" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ecv3iI8SWcNJs7f_6_bOcyIB9xr9o9x7Ghs98Hj07Im1Ew?e=fkwe6b" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
  </tbody>
</table>
</div>

**Nota:** Atualmente fornecemos os drivers acima. Continuaremos atualizando os drivers no futuro com o lançamento de novas versões do JetPack.

## Gravar no Jetson

:::note
 Antes de prosseguir para a gravação, é importante observar que o módulo Jetson Orin NX é compatível apenas com JetPack 5.1 e superior, enquanto o módulo Jetson Orin Nano é compatível apenas com JetPack 5.1.1 e superior.
:::  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1/JP5.1.1" label="JP5.1/JP5.1.1">

### Jetson Orin NX

Aqui usaremos o NVIDIA L4T **35.3.1** para instalar o **Jetpack 5.1.1** na Placa Carrier A607 com módulo Jetson Orin NX

**Passo 1:** [Baixe](https://developer.nvidia.com/embedded/jetson-linux-r3531) os drivers NVIDIA no PC host. Os drivers necessários são mostrados abaixo:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Passo 2:** Mova os drivers de periféricos baixados anteriormente para a mesma pasta dos drivers NVIDIA. Agora você verá três arquivos compactados na mesma pasta.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/A607/5.png" /></div>

**Passo 3:** Extraia **Jetson_Linux_R35.3.1_aarch64.tbz2** e **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2** navegando até a pasta que contém esses arquivos, aplique as alterações e instale os pré-requisitos necessários

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Passo 4:** Extraia **A607-Orin-NX-JP5.1.1.zip**. Aqui instalamos adicionalmente o pacote **unzip**, que é necessário para descompactar o arquivo .zip

```sh
cd ..
sudo apt install unzip 
unzip A607-Orin-NX-JP5.1.1.zip
```

Aqui será perguntado se deseja substituir os arquivos. Digite **A** e pressione **ENTER** para substituir os arquivos necessários

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/A607/7.jpg" /></div>

**Passo 5:** Configure seu nome de usuário, senha e hostname para que você não precise passar pelo assistente de instalação do Ubuntu depois que o dispositivo concluir a inicialização

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por exemplo (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Passo 6:** Grave o sistema em um SSD NVMe ou unidade flash USB

#### SSD NVMe

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

#### Unidade flash USB

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

### Jetson Orin Nano

Aqui usaremos o NVIDIA L4T **35.3.1** para instalar o **Jetpack 5.1.1** na Placa Carrier A607 com módulo Jetson Orin Nano. Observe que os módulos Orin Nano de 4GB e 8GB utilizam arquivos de driver diferentes e as instruções são um pouco diferentes.

**Passo 1:** [Baixe](https://developer.nvidia.com/embedded/jetson-linux-r3531) os drivers NVIDIA no PC host. Os drivers necessários são mostrados abaixo:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Passo 2:** Mova os drivers de periféricos baixados anteriormente para a mesma pasta dos drivers NVIDIA. Agora você verá três arquivos compactados na mesma pasta.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/A607/8.png" /></div>

**Passo 3:** Extraia **Jetson_Linux_R35.3.1_aarch64.tbz2** e **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2** navegando até a pasta que contém esses arquivos, aplique as alterações e instale os pré-requisitos necessários

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Passo 4:** Extraia **A607-Orin-Nano-8GB-JP5.1.1.zip** para a versão de 8GB e **A607-Orin-Nano-4GB-JP5.1.1.zip** para a versão de 4GB. Aqui instalamos adicionalmente o pacote **unzip**, que é necessário para descompactar o arquivo .zip.

```sh
cd ..
sudo apt install unzip 
# for 8GB version
unzip A607-Orin-Nano-8GB-JP5.1.1.zip
# for 4GB version
unzip A607-Orin-Nano-4GB-JP5.1.1.zip
```

Aqui será perguntado se deseja substituir os arquivos. Digite **A** e pressione **ENTER** para substituir os arquivos necessários

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/A607/10.jpg" /></div>

**Passo 5:** Configure seu nome de usuário, senha e hostname para que você não precise entrar no assistente de instalação do Ubuntu depois que o dispositivo terminar de inicializar

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por exemplo (nome de usuário:"nvidia", senha:"nvidia", nome do dispositivo:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Passo 6:** Grave o sistema em um SSD NVMe ou unidade flash USB

#### SSD NVMe

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit internal
```

#### Unidade flash USB

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>
</TabItem>

<TabItem value="JP6.0" label="JP6.0">

Aqui usaremos o NVIDIA L4T **36.3** para instalar o **Jetpack 6.0** na Placa Carrier A607 com módulo Jetson Orin NX.

**Passo 1:** [Baixe](https://developer.nvidia.com/embedded/jetson-linux-r363) os drivers NVIDIA no PC host. Os drivers necessários são mostrados abaixo:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Passo 2:** Mova os drivers periféricos baixados anteriormente para a mesma pasta dos drivers NVIDIA. Agora você verá três arquivos compactados na mesma pasta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/compressed_files.png" /></div>

**Passo 3:** Extraia **Jetson_Linux_R36.3.0_aarch64.tbz2** e **Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2** navegando até a pasta que contém esses arquivos, aplique as alterações e instale os pré-requisitos necessários

```sh
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Passo 4:** Extraia **A607-JP6.0.zip**. Aqui instalamos adicionalmente o pacote **unzip**, que é necessário para descompactar o arquivo .zip

```sh
cd ..
sudo apt install unzip 
sudo unzip A607-JP6.0.zip
```

Aqui será perguntado se deseja substituir os arquivos. Digite **A** e pressione **ENTER** para substituir os arquivos necessários:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/replace_files.png" /></div>

**Passo 5:** Grave o sistema em um SSD NVMe:

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

Aqui usaremos o NVIDIA L4T **36.4** para instalar o **Jetpack 6.1** na Placa Carrier A607 com módulo Jetson Orin NX.

**Passo 1:** [Baixe](https://developer.nvidia.com/embedded/jetson-linux-r3640) os drivers NVIDIA no PC host. Os drivers necessários são mostrados abaixo:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Passo 2:** Mova os drivers periféricos baixados anteriormente para a mesma pasta dos drivers NVIDIA. Agora você verá três arquivos compactados na mesma pasta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/a607_jp6.1.png" /></div>

:::note
Você pode usar o seguinte comando para verificar se o arquivo baixado está completo.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/verify_download_file.webp"/>
</div>
:::

**Passo 3:** Extraia **Jetson_Linux_R36.4.0_aarch64.tbz2** e **Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2** navegando até a pasta que contém esses arquivos e aplique as alterações:

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

**Passo 4:** Extraia **A607_Jetpack_6.1.tar.gz**:

```sh
cd ..
tar xf A607_Jetpack_6.1.tar.gz
sudo cp -r 607_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/
```

**Passo 5:** Grave o sistema em um SSD NVMe:

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>

</Tabs>

## Configurar WiFi e Bluetooth

Após a gravação ser concluída com sucesso, o Jetson iniciará o sistema operacional. Agora você precisa configurar adicionalmente o WiFi e o Bluetooth.

**Passo 1:** Visite [esta página](https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/WiFi-BT-Driver) e clique em **8723du.ko** para baixar o arquivo de driver de WiFi/ Bluetooth necessário e copiá-lo para o dispositivo

**Passo 2:** Crie um novo diretório para o driver

```sh
cd /lib/modules/5.10.104-tegra/kernel/drivers/net/wireless/realtek/
sudo mkdir rtl8723du
```

**Passo 3:** Copie o arquivo **8723du.ko** baixado anteriormente para o diretório recém-criado

```sh
cd ~
sudo cp 8723du.ko /lib/modules/5.10.104-tegra/kernel/drivers/net/wireless/realtek/rtl8723du
```

**Passo 4:** Habilite o driver

```sh
sudo modprobe cfg80211
sudo insmod /lib/modules/5.10.104-tegra/kernel/drivers/net/wireless/realtek/rtl8723du/8723du.ko
sudo depmod -a
sudo modprobe 8723du
sudo echo 8723du >> /etc/modules
```

**Passo 5:** Reinicie o dispositivo

```sh
sudo reboot
```

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
