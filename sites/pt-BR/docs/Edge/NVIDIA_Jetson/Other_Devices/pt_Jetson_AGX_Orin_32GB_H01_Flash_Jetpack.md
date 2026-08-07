---
description: Gravar o JetPack no Kit NVIDIA® Jetson AGX Orin 32GB H01
title: Kit NVIDIA® Jetson AGX Orin 32GB H01 32GB
tags:
  - NVIDIA Jetson H01
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Jetson_AGX_Orin_32GB_H01_Flash_Jetpack
sku: 114110207
last_update:
  date: 07/02/2026
  author: Lakshantha/Youjiang
createdAt: '2023-03-02'
updatedAt: '2026-07-03'
url: https://wiki.seeedstudio.com/pt-br/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack/
---

<!-- # Flash JetPack to NVIDIA® Jetson AGX Orin 32GB H01 Kit  -->

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/6.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a>
</div>

:::info
Observe que as seguintes atualizações foram feitas no produto em 25 de novembro de 2024:

1. O esquema de alimentação de 5 V foi alterado (o CI de alimentação foi substituído de ONNCP3020ADR2G para TI TPS53015DGS, e os componentes periféricos foram ajustados de acordo), o que resolve o problema de reinicialização do dispositivo ao usar certos dispositivos USB com alta corrente dinâmica.
2. O layout da placa foi otimizado para ampliar o slot do cabo do ventilador a fim de acomodar a fiação do ventilador.
3. Para estabilizar o fornecimento de acessórios, o modelo do módulo WiFi foi alterado de 8265.NGW para BL-M8822CP1, e os drivers de software foram atualizados de acordo.

:::

Este wiki irá guiá-lo sobre como instalar o JetPack no Jetson AGX Orin 32GB H01 Kit.

## Pré-requisitos

- [Ubuntu Host PC](https://developer.nvidia.com/sdk-manager) (nativo ou VM usando VMware Workstation Player).
- Jetson AGX Orin H01 Kit.
- Cabo de transmissão de dados USB Type-C

## Entrar no modo Force Recovery

- **Passo 1:** Há um botão de recuperação na placa, que fica no meio dos três botões, como mostrado na imagem abaixo. Mantenha pressionado o botão de recuperação e, em seguida, conecte a placa à fonte de alimentação para entrar no modo force recovery.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/4.jpg"/></div>

- **Passo 2:** Conecte o Jetson AGX Orin 32GB H01 Kit ao PC host com Ubuntu com um cabo de transmissão de dados USB Type-C.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/5.jpg"/></div>

- **Passo 3:** Use o comando `lsusb` na máquina host Ubuntu para verificar se o dispositivo entrou no modo de recuperação.
<div align="center"><img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/h01/check_rec.png"/></div>

:::info
Se `0955:7223 NVIDIA Corp.` aparecer nos logs, isso indica que o dispositivo entrou no modo de recuperação.
:::

## Baixar os drivers periféricos

Antes de tudo, você precisa instalar os drivers periféricos para esta placa. Eles são necessários para que alguns periféricos de hardware funcionem na placa. Clique nos links abaixo para baixar os drivers de acordo com a versão do JetPack

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versão do JetPack</th>
      <th>Versão do L4T</th>
      <th>Link para download do driver</th>
      <th>Link para download do L4T </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5.0.2</td>
      <td>35.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.0.2/AGX-Orin-32GB-H01-JP5.0.2.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r351" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.1.1/AGX-Orin-32GB-H01-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3531" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>5.1.4</td>
      <td>35.6.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EaRL0XDaYCdFhkBiwvO3b8UBk4HmzRBQgfhYCKlN_ANVpA?e=5ndnMu" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3560" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfdaZCD6wMZPrW_LtMm3eQgBXnPq_8ri8WmKw3nsxXVf1Q?e=uvKRhE" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r363" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbYu41kk-LNNmsssNIuM5AoBLYjTFZo_mEUTUtIJlCCnyw?e=dvCgKk" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3640" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
    <td>6.2</td>
      <td>36.4.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ES6058EFNl1LkrJGAvTYR6IBFTldWYyxJ4ZxQP3EM00BbQ?e=rjshwu" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3643" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>7.2</td>
      <td>39.2.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAOW5tcK2vPTagiGOFw9oMcAYITLgRqj_dXQJMchlUeGOk?e=8ar0lu" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetpack/downloads/archive-7.2#:~:text=Jetson%20Linux%2039.2%20%286%2F02%2F2026%29" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
  </tbody>
</table>
</div>

## Gravar no Jetson

:::danger
O Kit NVIDIA® Jetson AGX Orin 32GB H01 vem pré-instalado com o sistema operacional `JetPack 5.1.4`. O nome de usuário e a senha padrão são usuário: nvidia / senha: nvidia. Ao receber o dispositivo, você pode fazer login diretamente no sistema e começar a usá-lo sem a necessidade de regravar o sistema.

Se o seu sistema ficar corrompido, você pode consultar as etapas abaixo para regravar o sistema.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.0.2/JP5.1.1" label="JP5.0.2/JP5.1.1">

Aqui usaremos: **NVIDIA L4T 35.1** para instalar o **Jetpack 5.0.2** ou **NVIDIA L4T 35.3.1** para instalar o **Jetpack 5.1.1** no Jetson AGX Orin 32GB H01 Kit.

- **Passo 1:** Baixe os drivers NVIDIA apropriados no PC host. Os drivers necessários são mostrados abaixo:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

- **Passo 2:** Mova os drivers periféricos baixados anteriormente para a mesma pasta dos drivers NVIDIA. Agora você verá três arquivos compactados na mesma pasta.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/7.png"/></div>

- **Passo 3:** Extraia **Jetson_Linux_R35.1.0_aarch64.tbz2** e **Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2** navegando até a pasta que contém esses arquivos e aplique as alterações

```sh
cd <directory_where_the_files_are_located>
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_tegra/rootfs
sudo tar xfp ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

- **Passo 4:** Extraia **AGX-Orin-32GB-H01-JP5.0.2.zip**. Aqui instalamos adicionalmente o pacote **unzip**, que é necessário para descompactar o arquivo .zip

```sh
cd ..
sudo apt install unzip 
unzip AGX-Orin-32GB-H01-JP5.0.2.zip
```

Aqui será perguntado se deseja substituir os arquivos. Digite **A** e pressione **ENTER** para substituir os arquivos necessários

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/3.jpg"/></div>

- **Passo 5:** Grave o sistema na eMMC

```sh
cd Linux_for_Tegra
sudo ./flash.sh jetson‐agx‐orin‐devkit mmcblk0p1
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/9.jpg"/></div>

### Erros encontrados

- **ERROR: failed to read rcm_state** em **AGX Orin** e **NX Orin** para *Jetpack 5.1.1*
  - Há alterações de PCN no Jetson AGX Orin feitas pela NVidia, mas não são alterações de PCN da Seeed.
  - Além dos materiais mencionados no Wiki, faça o download de [Overlay_PCN210361_PCN210100_r35.3.1.tbz2](https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/overlay_pcn210361_pcn210100_r35.3.1.tbz2) na parte inferior da página Jetson Linux 35.3.1.
  - Após extrair *Jetson_Linux* e antes de aplicar os binários, extraia *Overlay_PCN210361_PCN210100_r35.3.1.tbz2*. Em seguida, copie todos os arquivos e pastas para *Linux_For_Tegra* (mesclar, não ignorar).
  - Depois continue com as etapas restantes das instruções.

</TabItem>

<TabItem value="JP5.1.4" label="JP5.1.4">

Aqui usaremos: **NVIDIA L4T 35.6.0** para instalar o **Jetpack 5.1.4** no Jetson AGX Orin 32GB H01 Kit.

Digite o seguinte comando na janela de terminal da máquina host Ubuntu:

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/jetson_linux_r35.6.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2

tar xf jetson_linux_r35.6.0_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
sudo tar xf 605_jp514.tbz2  # Please copy 605_jp514.tbz2 to the Linux_for_Tegra/ directory before execution.

```

Escolha um dos seguintes comandos para executar a operação de gravação:

(1). Gravar o sistema na eMMC:

```bash
sudo ./flash.sh jetson-agx-orin-devkit internal
```

(2). Gravar o sistema no SSD:

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
  --showlogs --network usb0 jetson-agx-orin-devkit external
```

<div align="center"><img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/h01/flash_successful.png"/></div>

Após a conclusão da gravação, o dispositivo será reiniciado automaticamente.

</TabItem>


<TabItem value="JP6.0" label="JP6.0">

Aqui usaremos **NVIDIA L4T 36.3** para instalar o **Jetpack 6.0** no Kit Jetson AGX Orin 32GB H01.

- **Passo 1:** [Baixe](https://developer.nvidia.com/embedded/jetson-linux-r363) os drivers NVIDIA no PC host. Os drivers necessários são mostrados abaixo:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **Passo 2:** Mova os drivers periféricos baixados anteriormente para a mesma pasta dos drivers NVIDIA. Agora você verá três arquivos compactados na mesma pasta.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/files.png"/>
</div>

- **Passo 3:** Extraia **Jetson_Linux_R36.3.0_aarch64.tbz2** e **Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2** navegando até a pasta que contém esses arquivos e aplique as alterações:

```bash
cd < directory_where_the_files_are_located >
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **Passo 4:** Extraia **AGX-Orin-H01-JP6.0.zip**. Aqui instalamos adicionalmente o pacote **unzip**, que é necessário para descompactar o arquivo .zip.

```sh
cd ..
sudo apt install unzip 
sudo unzip AGX-Orin-H01-JP6.0.zip
```

Aqui será perguntado se deseja substituir os arquivos. Digite **A** e pressione **ENTER** para substituir os arquivos necessários

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/extract_drivers.png"/>
</div>

- **Passo 5:** Grave o sistema na eMMC

```sh
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

Aqui usaremos **NVIDIA L4T 36.4** para instalar o **Jetpack 6.1** no Kit Jetson AGX Orin 32GB H01.

- **Passo 1:** [Baixe](https://developer.nvidia.com/embedded/jetson-linux-r3640) os drivers NVIDIA no PC host com Ubuntu. Os drivers necessários são mostrados abaixo:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **Passo 2:** Mova os drivers periféricos baixados anteriormente para a mesma pasta dos drivers NVIDIA. Agora você verá três arquivos compactados na mesma pasta.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/a605_jp6.1.png"/>
</div>

:::note
Você pode usar o seguinte comando para verificar se o arquivo baixado está completo.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/verify_download_file.webp"/>
</div>
:::

- **Passo 3:** Extraia **Jetson_Linux_R36.4.0_aarch64.tbz2** e **Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2** navegando até a pasta que contém esses arquivos e aplique as alterações:

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **Passo 4:** Extraia **A605_Jetpack_6.1.tar.gz**:

```bash
cd ..
tar xf A605_Jetpack_6.1.tar.gz
sudo cp -r 605_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/
```

- **Passo 5:** Grave o sistema na eMMC:

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
Também podemos executar o seguinte comando para instalar o sistema no SSD:

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```

:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

Aqui usaremos **NVIDIA L4T 36.4** para instalar o **Jetpack 6.2** no Kit Jetson AGX Orin 32GB H01.

- **Passo 1:** [Baixe](https://developer.nvidia.com/embedded/jetson-linux-r3643) os drivers NVIDIA no PC host com Ubuntu. Os drivers necessários são mostrados abaixo:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **Passo 2:** Mova os drivers periféricos baixados anteriormente para a mesma pasta dos drivers NVIDIA. Agora você verá três arquivos compactados na mesma pasta.

:::info
Semelhante ao processo de gravação do Jetpack 6.1！
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/a605_jp6.1.png"/>
</div>

:::note
Você pode usar o seguinte comando para verificar se o arquivo baixado está completo.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/verify_download_file.webp"/>
</div>
:::

- **Passo 3:** Extraia **Jetson_Linux_R36.4.3_aarch64.tbz2** e **Tegra_Linux_Sample-Root-Filesystem_R36.4.3_aarch64.tbz2** navegando até a pasta que contém esses arquivos e aplique as alterações:

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.3_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **Passo 4:** Extraia **605_jp62.tar.gz**:

```bash
cd ..
tar xf 605_jp62.tar.gz
sudo cp -r 605_jp62/Linux_for_Tegra/* Linux_for_Tegra/
```

- **Passo 5:** Grave o sistema na eMMC:

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
Também podemos executar o seguinte comando para instalar o sistema no SSD:

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```

:::

</TabItem>

<TabItem value="JP7.2" label="JP7.2">

Aqui usaremos **NVIDIA L4T 39.2.0** para instalar o **JetPack 7.2** no Kit Jetson AGX Orin 32GB H01.

- **Passo 1:** [Baixe](https://developer.nvidia.com/embedded/jetpack/downloads/archive-7.2#:~:text=Jetson%20Linux%2039.2%20%286%2F02%2F2026%29) os pacotes NVIDIA BSP e RootFS no PC host com Ubuntu. Os arquivos necessários do Jetson Linux 39.2.0 são mostrados abaixo:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/other/7.2-H01.png"/>
</div>

Você também pode baixar os arquivos com os seguintes comandos:

```bash
wget https://developer.nvidia.com/downloads/embedded/L4T/r39_Release_v2.0/release/Jetson_Linux_R39.2.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/L4T/r39_Release_v2.0/release/Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2
```

- **Passo 2:** Baixe o pacote de drivers periféricos JetPack 7.2 do Kit Jetson AGX Orin 32GB H01 [605_jp72.tbz2](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAOW5tcK2vPTagiGOFw9oMcAYITLgRqj_dXQJMchlUeGOk?e=8ar0lu) e coloque-o na mesma pasta que os pacotes NVIDIA BSP e RootFS. Agora você verá três arquivos compactados na mesma pasta.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/other/Seeed_AGX_Orin_Dev_Kit_JP72_downloaded_files.png"/>
</div>

- **Passo 3:** Extraia **Jetson_Linux_R39.2.0_aarch64.tbz2** e **Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2**, depois aplique os binários NVIDIA:

```bash
cd <path_to_files>
tar xf Jetson_Linux_R39.2.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **Passo 4:** Extraia **605_jp72.tbz2**:

```bash
cd ..
mkdir -p 605_jp72/Linux_for_Tegra
tar xf 605_jp72.tbz2 -C 605_jp72/Linux_for_Tegra/
sudo cp -r 605_jp72/Linux_for_Tegra/* Linux_for_Tegra/
```

- **Passo 5:** Grave o sistema na eMMC:

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
Também podemos executar o seguinte comando para instalar o sistema no SSD:

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```

:::

</TabItem>

</Tabs>

## Ferramentas de desenvolvimento

### Jetpack pré-instalado para desenvolvimento rápido e integração de IA de borda

[Jetson Software](https://developer.nvidia.com/embedded/develop/software) começa com o NVIDIA JetPack™ SDK, que fornece um ambiente de desenvolvimento completo e inclui bibliotecas aceleradas CUDA-X e outras tecnologias NVIDIA para impulsionar o seu desenvolvimento. O JetPack inclui o pacote de drivers Jetson Linux, que fornece o kernel Linux, bootloader, drivers NVIDIA, utilitários de gravação, sistema de arquivos de exemplo e toolchains para a plataforma Jetson. Ele também inclui recursos de segurança, capacidades de atualização over-the-air e muito mais.

### Visão computacional e aprendizado de máquina embarcado

- [Deepstream](https://developer.nvidia.com/deepstream-sdk) oferece um kit de ferramentas completo de análise de streaming para processamento multisensor baseado em IA e compreensão de vídeo e imagem no Jetson.
- [TAO](https://developer.nvidia.com/tao-toolkit), desenvolvido sobre TensorFlow e PyTorch, é uma versão low-code do framework NVIDIA TAO que acelera o treinamento de modelos
- [alwaysAI](https://alwaysai.co/blog/getting-started-with-the-jetson-nano-using-alwaysai): crie, treine e faça deploy de aplicações de visão computacional diretamente na borda do reComputer. Obtenha acesso gratuito a mais de 100 modelos de Visão Computacional pré-treinados e treine modelos de IA personalizados na nuvem em poucos cliques por meio de assinatura corporativa. Confira nosso guia na [wiki](https://wiki.seeedstudio.com/pt-br/alwaysAI-Jetson-Getting-Started/#detecção-de-objetos-em-arquivo-de-vídeo-pré-carregado) para começar com o alwaysAI.
- [edge impulse](https://www.edgeimpulse.com/) : o pipeline de aprendizado de máquina embarcado mais fácil para fazer deploy de aplicações de áudio, classificação e detecção de objetos na borda, com zero dependências da nuvem.
- [Roboflow](https://blog.roboflow.com/deploy-to-nvidia-jetson/) fornece ferramentas para converter imagens brutas em um modelo de visão computacional personalizado de detecção e classificação de objetos e fazer o deploy do modelo para uso em aplicações. Consulte https://docs.roboflow.com/inference/nvidia-jetson para fazer deploy no NVIDIA Jetson com o Roboflow.
- [ultralytics yolo](https://github.com/ultralytics/yolov5): use aprendizado por transferência para realizar detecção de objetos com poucos exemplos com YOLOv5, que precisa de pouquíssimas amostras de treinamento. Veja nossos tutoriais passo a passo na [wiki](https://wiki.seeedstudio.com/pt-br/YOLOv5-Object-Detection-Jetson/).
- [Deep Learning](https://deci.ai/blog/jetson-machine-learning-inference/): otimize seus modelos no NVIDIA Jetson Nano. Confira [aqui](https://info.deci.ai/benchmark-optimize-runtime-performance-nvidia-jetson) na Deci como fazer benchmark automático e otimizar o desempenho em tempo de execução em dispositivos NVIDIA Jetson Nano e Xavier NX

### IA de voz

- [Riva](https://developer.nvidia.com/riva) é um SDK acelerado por GPU para criar aplicações de IA de voz personalizadas para o seu caso de uso e que oferecem desempenho em tempo real.

### Gerenciamento remoto de frotas

Habilite OTA segura e gerenciamento remoto de dispositivos com a [allxon](https://www.allxon.com/). Desbloqueie 90 dias de avaliação gratuita com o código H4U-NMW-CPK.

### Desenvolvimento de robôs e ROS

- NVIDIA Isaac ROS GEMs são pacotes acelerados por hardware que facilitam para desenvolvedores ROS a criação de soluções de alto desempenho em hardware NVIDIA. Saiba mais sobre o [NVIDIA Isaac](https://developer.nvidia.com/embedded/develop/software).
- [Cogniteam Nimbus](https://www.cogniteam.com/nimbus) é uma solução baseada em nuvem que permite aos desenvolvedores gerenciar robôs autônomos de forma mais eficaz. A plataforma Nimbus oferece suporte a NVIDIA® Jetson™ e ISAAC SDK e GEMs prontos para uso. Confira nosso [webinar](https://www.seeedstudio.com/blog/2022/04/21/webinar-connect-your-ros-project-to-the-cloud-with-nimbus/) sobre como conectar seu projeto ROS à nuvem com o Nimbus.

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
