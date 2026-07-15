---
description: Placa Carrier A603
title: Placa Carrier A603
keywords:
  - Edge
  - Jetson Orin
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_A603_Flash_System
sku: 102110840
last_update:
  date: 04/19/2023
  author: Lakshantha
createdAt: '2023-04-17'
updatedAt: '2026-06-29'
url: https://wiki.seeedstudio.com/pt-br/reComputer_A603_Flash_System/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Gravar o JetPack OS na Placa Carrier A603

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/A603_Carrier_Board.png" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A603-Carrier-Board-for-Jetson-Orin-NX-Nano-p-5635.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a>
</div>

A Placa Carrier A603 é uma poderosa placa de expansão que suporta módulos Jetson Orin™ NX/Nano. Ela possui 1 porta GbE, M.2 Key M para SSD, M.2 Key E para WiFi/Bluetooth, CSI e HDMI para captura e exibição de vídeo em alta qualidade. Também contém 4 portas USB, ventoinha, RTC e fonte de alimentação flexível de 9–20 V. Graças ao design compacto, pode ser flexível e fácil de integrar em uma variedade de aplicações de computação de borda. Neste wiki, mostraremos como gravar o [Jetpack](https://developer.nvidia.com/embedded/jetpack) em um SSD NVMe e em uma unidade flash USB conectados à Placa Carrier A603.

## Módulo compatível

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

## Pré-requisitos

- PC host com Ubuntu 20.04/22.04/24.04
- Placa Carrier A603 com um módulo Jetson Orin NX ou Jetson Orin Nano
- Cabo de transmissão de dados Micro-USB ou Type-C
- Adaptador de energia

## Entrar no modo Force Recovery

:::note
Antes de prosseguirmos para as etapas de instalação, precisamos garantir que a placa esteja em modo force recovery.
:::

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/recovery.gif" /></div>

<details>

<summary> tutorial detalhado passo a passo </summary>

**Passo 1.** Conecte um cabo USB entre o conector micro-USB na placa e o PC host com Linux

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A603/2.jpg" /></div>

**Passo 2.** Conecte um fio jumper entre o pino 3 e o pino 4 do conector de 14 pinos

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/A603/3.jpg" /></div>

**Passo 3.** Conecte o adaptador de energia ao conector DC JACK na placa para ligá-la

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/A603/4.jpg" /></div>

**Passo 4.** No PC host com Linux, abra uma janela do Terminal e insira o comando `lsusb`. Se o conteúdo retornado tiver uma das seguintes saídas de acordo com o Jetson SoM que você usa, então a placa está em modo force recovery.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

A imagem abaixo é para o Orin NX 16GB.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/A607/4.png" /></div>

**Passo 5.** Remova o fio jumper.

</details>

## Baixar os drivers dos periféricos

Antes de tudo, você precisa instalar os drivers dos periféricos para esta placa. Eles são necessários para que alguns periféricos de hardware funcionem na placa. Clique nos links abaixo para baixar os drivers de acordo com o módulo Jetson

<div class="table-center">
<table style={{textAlign:'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Versão do JetPack</th>
      <th>Versão do L4T</th>
      <th>Link para download</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>Jetson Orin NX 8GB/ 16GB</td>
      <td>5.1</td>
      <td>35.2.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-NX/A603-Orin-NX-JP5.1.zip/download">Download</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-NX/A603-Orin-NX-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin Nano 4GB/ 8GB</td>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-Nano/A603-Orin-Nano-JP5.1.1.zip/download">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>5.1.2</td>
      <td>35.4.1</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZC4-Ci8o0dNkc0wWWlphf0BEQHp2nV-TM2Qpn7WwmpB1g?e=heBSc2">Download</a></td>
    </tr>
        <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>5.1.4</td>
      <td>35.6.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EShnCiOVY3ZPqptpnJZ0tlABemb3chgmuUZyuvsqJpHpcA?e=hXxCRr">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY0H4iNmfUxPjCfiwfi59NEB8KQ9HuYEiu_0VLnsJVPjVw?e=oR4LYr">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdmS2OfqVg5IpQt9MeiBoT0BdS3Uft6DlJ1GPTJqZHoVNQ?e=ocmcHG">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>6.2</td>
      <td>36.4.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQLFs4vd8N5Lp0nhbP_KU-gB6kYGlXu3_N3KLiL25ze52Q?e=CWhIaE">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>7.2</td>
      <td>39.2.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDFKQLWsQBBTrenUxxvj-qJAU4s62oPXWg6RxcdSg-uJnY?e=y3buDr" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
  </tbody>
</table>
</div>

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host com Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido [aqui](https://seeedstudio88-my.sharepoint.com/:x:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXljqlpW3ZNNplIPBwJuyvsBdkW92geUmV7_7VN4SDlggA?e=Xea32u), isso confirma que o firmware que você baixou está completo e intacto.
:::

**Observação:** Atualmente fornecemos os drivers acima. Continuaremos atualizando os drivers no futuro com o lançamento de novas versões do JetPack.

## Gravar no Jetson

Aqui está um vídeo para gravar o JetPack 6.1 na placa carrier A603 + módulo Orin Nx 16GB. Você pode consultar o vídeo e as etapas detalhadas abaixo para gravar o seu dispositivo.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/qN4GxscUGW0" title="A603 JetPack6.1 Installation Walkthrough" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
Antes de prosseguir para a gravação, deve-se observar que o módulo Jetson Orin NX suporta apenas JetPack 5.1 e superior, enquanto o módulo Jetson Orin Nano suporta apenas JetPack 5.1.1 e superior.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.1 for Jetson Orin NX" label="JP5.1.1 para Jetson Orin NX">

Aqui iremos instalar o **Jetpack 5.1.1** na Placa Carrier A603 com módulo Jetson Orin NX.

**Passo 1:** [Baixe](https://developer.nvidia.com/embedded/jetson-linux-r3531) os drivers NVIDIA no PC host. Os drivers necessários são mostrados abaixo:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Passo 2:** Mova os drivers de periféricos baixados anteriormente para a mesma pasta dos drivers NVIDIA. Agora você verá três arquivos compactados na mesma pasta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/6.png" /></div>

**Passo 3:** Extraia **Jetson_Linux_R35.3.1_aarch64.tbz2** e **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2** navegando até a pasta que contém esses arquivos, aplique as alterações e instale os pré-requisitos necessários

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Passo 4:** Extraia **A603-Orin-NX-JP5.1.1.zip**. Aqui instalamos adicionalmente o pacote **unzip**, que é necessário para descompactar o arquivo .zip

```sh
cd ..
sudo apt install unzip 
unzip A603-Orin-NX-JP5.1.1.zip
```

Aqui será perguntado se deseja substituir os arquivos. Digite **A** e pressione **ENTER** para substituir os arquivos necessários

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/7.jpg" /></div>

**Passo 5:** Configure seu nome de usuário, senha e hostname para que você não precise entrar no assistente de instalação do Ubuntu depois que o dispositivo terminar de inicializar.

Usando `cd Linux_for_Tegra` primeiro para garantir que você esteja no diretório correto.

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por exemplo (nome de usuário:"nvidia", senha:"nvidia", nome do dispositivo:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Passo 6:** Grave o sistema em um SSD NVMe ou unidade flash USB

```sh
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>
<TabItem value="JP5.1.1 for Jetson Orin Nano" label="JP5.1.1 for Jetson Orin Nano">

Aqui usaremos o NVIDIA L4T **35.3.1** para instalar o **Jetpack 5.1.1** na Placa Carrier A603 com módulo Jetson Orin Nano

**Passo 1:** [Download](https://developer.nvidia.com/embedded/jetson-linux-r3531) dos drivers NVIDIA no PC host. Os drivers necessários são mostrados abaixo:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Passo 2:** Mova os drivers periféricos baixados anteriormente para a mesma pasta dos drivers NVIDIA. Agora você verá três arquivos compactados na mesma pasta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/8.png" /></div>

**Passo 3:** Extraia **Jetson_Linux_R35.3.1_aarch64.tbz2** e **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2** navegando até a pasta que contém esses arquivos, aplique as alterações e instale os pré-requisitos necessários

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Passo 4:** Extraia **A603-Orin-NX-JP5.1.1.zip**. Aqui instalamos adicionalmente o pacote **unzip**, que é necessário para descompactar o arquivo .zip

```sh
cd ..
sudo apt install unzip 
unzip A603-Orin-NX-JP5.1.1.zip
```

Aqui será perguntado se deseja substituir os arquivos. Digite **A** e pressione **ENTER** para substituir os arquivos necessários

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/9.png" /></div>

**Passo 5:** Configure seu nome de usuário, senha e hostname para que você não precise entrar no assistente de instalação do Ubuntu após o dispositivo concluir a inicialização

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por exemplo (nome de usuário:"nvidia", senha:"nvidia", nome do dispositivo:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Passo 6:** Grave o sistema em um SSD NVMe ou unidade flash USB

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>

<TabItem value="JP5.1.2" label="JP5.1.2">

Aqui iremos instalar o **Jetpack 5.1.2** na Placa Carrier A603 com módulo Jetson Orin.

**Passo 1:** [Download](https://developer.nvidia.com/embedded/jetson-linux-r3541) dos drivers NVIDIA no PC host. Os drivers necessários são mostrados abaixo:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Passo 2:** Mova os drivers periféricos baixados anteriormente para a mesma pasta dos drivers NVIDIA. Agora você verá três arquivos compactados na mesma pasta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/jp512_files.png" /></div>

**Passo 3:** Extraia **Jetson_Linux_R35.4.1_aarch64.tbz2** e **Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2** navegando até a pasta que contém esses arquivos, aplique as alterações e instale os pré-requisitos necessários.

```sh
tar xf Jetson_Linux_R35.4.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Passo 4:** Extraia **A603-JP5.1.2.zip**. Aqui instalamos adicionalmente o pacote **unzip**, que é necessário para descompactar o arquivo .zip.

```sh
cd ..
sudo apt install unzip 
unzip A603-JP5.1.2.zip
```

**Passo 5:** Configure seu nome de usuário, senha e hostname para que você não precise entrar no assistente de instalação do Ubuntu após o dispositivo concluir a inicialização.

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por exemplo (nome de usuário:"nvidia", senha:"nvidia", nome do dispositivo:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Passo 6:** Grave o sistema no SSD NVMe.

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/flash_successful.png" /></div>

</TabItem>

<TabItem value="JP5.1.4" label="JP5.1.4">

Aqui iremos instalar o **Jetpack 5.1.4** na Placa Carrier A603 com módulo Jetson Orin.

**Passo 1:** Baixe os drivers NVIDIA no PC host:

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/jetson_linux_r35.6.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2
```

**Passo 2:** Monte o Pacote de Gravação
Execute os seguintes comandos na ordem:

```bash
tar xf jetson_linux_r35.6.0_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
tar zxpf 603_jp514.tar.gz # Unzip the driver package
sudo cp -r 603_jp514/Linux_for_Tegra/* Linux_for_Tegra/ # Replace all files in the Linux_for_Tegra directory with the files from the driver package
cd Linux_for_Tegra/ # Navigate to the Linux_for_Tegra path to run the flashing commands
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Passo 3:** Coloque o Dispositivo em Modo de Recuperação. O dispositivo deve estar em modo de recuperação para a gravação. Siga estas etapas para entrar no modo de recuperação:

1. Faça um curto-circuito entre o pino REC e o pino GND na placa carrier.
2. Conecte a placa carrier ao PC usando um cabo de dados Micro USB.
3. Ligue o dispositivo.
4. No PC, execute `lsusb` e verifique se o ID do produto é um dos seguintes: 7323, 7423, 7523 ou 7623. Isso indica que o dispositivo está em modo de recuperação:
   - 7323: Orin NX 16G
   - 7423: Orin NX 8G
   - 7523: Orin Nano 8G
   - 7623: Orin Nano 4G

**Passo 4:** Grave o Dispositivo.

   ```bash
   sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
   ```

**Dicas:** Faça backup do Sistema e Grave Usando a Imagem de Backup

1. Se você gravou o sistema no SSD, execute os seguintes comandos:
   - Para fazer backup da imagem (requer modo de recuperação):

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit
     ```

   - Para gravar usando a imagem de backup (requer modo de recuperação):

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit
     ```

   Após a conclusão, o dispositivo poderá inicializar no sistema.

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

Aqui iremos instalar o **Jetpack 6.0** na Placa Carrier A603 com módulo Jetson Orin.

**Passo 1:** [Download](https://developer.nvidia.com/embedded/jetson-linux-r363) dos drivers NVIDIA no PC host. Os drivers necessários são mostrados abaixo:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Passo 2:** Mova os drivers periféricos baixados anteriormente para a mesma pasta dos drivers NVIDIA. Agora você verá três arquivos compactados na mesma pasta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/jp6.0_files.png" /></div>

**Passo 3:** Extraia **Jetson_Linux_R36.3.0_aarch64.tbz2** e **Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2** navegando até a pasta que contém esses arquivos.

```sh
sudo tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

**Passo 4:** Extraia **A603-JP6.0.zip**. Aqui instalamos adicionalmente o pacote **unzip**, que é necessário para descompactar o arquivo .zip.

```sh
cd ..
sudo apt install unzip 
sudo unzip A603-JP6.0.zip
```

Em seguida, copie as três pastas `(bootloader, kernel, rootfs em A603-JP6.0.zip)` para a pasta Linux_for_Tegra.

**Passo 6:** Aplique as alterações e instale os pré-requisitos necessários

```sh
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Passo 6:** Configure seu nome de usuário, senha e hostname para que você não precise entrar no assistente de instalação do Ubuntu após o dispositivo concluir a inicialização.

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por exemplo (nome de usuário:"nvidia", senha:"nvidia", nome do dispositivo:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Passo 7:** Grave o sistema no SSD NVMe.

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/flash_successful.png" /></div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

Aqui iremos instalar o **Jetpack 6.1** na Placa Carrier A603 com módulo Jetson Orin.

**Passo 1:** Baixe os drivers NVIDIA no PC host:

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.0/release/Jetson_Linux_R36.4.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.0/release/Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2
```

**Passo 2:** Monte o pacote de gravação
Execute os seguintes comandos em ordem:

```bash
tar xf Jetson_Linux_R36.4.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
tar xpf 603_jetpack6.1.tar.gz # Unzip the driver package
sudo cp -r 603_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/ # Replace all files in the Linux_for_Tegra directory with the files from the driver package
cd Linux_for_Tegra/ # Navigate to the Linux_for_Tegra path to run the flashing commands
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Passo 3:** Coloque o dispositivo em modo de recuperação. O dispositivo deve estar em modo de recuperação para a gravação. Siga estas etapas para entrar no modo de recuperação:

1. Faça um curto-circuito entre o pino REC e o pino GND na placa carrier.
2. Conecte a placa carrier ao PC usando um cabo de dados Micro USB.
3. Ligue o dispositivo.
4. No PC, execute `lsusb` e verifique se o ID do produto é um dos seguintes: 7323, 7423, 7523 ou 7623. Isso indica que o dispositivo está em modo de recuperação:
   - 7323: Orin NX 16G
   - 7423: Orin NX 8G
   - 7523: Orin Nano 8G
   - 7623: Orin Nano 4G

**Passo 4:** Grave o dispositivo.

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml"   --showlogs --network usb0 jetson-orin-nano-devkit internal
```

:::info
Faça backup do sistema e grave usando a imagem de backup

Se você gravou o sistema no SSD, execute os seguintes comandos:

- Para fazer backup da imagem (requer modo de recuperação):

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit
     ```

- Para gravar usando a imagem de backup (requer modo de recuperação):

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit
     ```

   Quando concluído, o dispositivo poderá inicializar no sistema.
:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

Aqui iremos instalar o **Jetpack 6.2** na Placa Carrier A603 com módulo Jetson Orin.

**Passo 1:** Baixe os drivers NVIDIA no PC host:

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Jetson_Linux_r36.4.3_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2
```

**Passo 2:** Monte o pacote de gravação

Observe que precisamos colocar o driver Nvidia e os drivers periféricos no mesmo diretório e, em seguida, abrir o terminal nesse diretório e executar o seguinte código:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/driver_files_directory_layout.png" /></div>

```bash
tar xf Jetson_Linux_r36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
sudo tar zxpf 603_jp62.tar.gz
sudo cp -r 603_jp62/Linux_for_Tegra/* Linux_for_Tegra/
cd Linux_for_Tegra/
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

**Passo 3:** Coloque o dispositivo em modo de recuperação. O dispositivo deve estar em modo de recuperação para a gravação. Siga estas etapas para entrar no modo de recuperação:

1. Faça um curto-circuito entre o pino REC e o pino GND na placa carrier.
2. Conecte a placa carrier ao PC usando um cabo de dados Micro USB.
3. Ligue o dispositivo.
4. No PC, execute `lsusb` e verifique se o ID do produto é um dos seguintes: 7323, 7423, 7523 ou 7623. Isso indica que o dispositivo está em modo de recuperação:
   - 7323: Orin NX 16G
   - 7423: Orin NX 8G
   - 7523: Orin Nano 8G
   - 7623: Orin Nano 4G

**Passo 4:** Grave o dispositivo.

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit-super internal
```

:::info
Dicas: Faça backup do sistema e grave usando a imagem de backup

Se você gravou o sistema no SSD, execute os seguintes comandos:

- Para fazer backup da imagem (requer modo de recuperação):

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit-super
     ```

- Para gravar usando a imagem de backup (requer modo de recuperação):

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit-super
     ```

   Quando concluído, o dispositivo poderá inicializar no sistema.
:::

</TabItem>

<TabItem value="JP7.2" label="JP7.2">

Aqui iremos instalar o **JetPack 7.2** na Placa Carrier A603 com um módulo Jetson Orin NX ou Jetson Orin Nano.

### Requisitos de hardware

- PC host Ubuntu 20.04/22.04/24.04
- Cabo de dados Type-C
- Placa Carrier A603 com um módulo Jetson Orin NX ou Jetson Orin Nano
- Adaptador de energia

**Passo 1:** Baixe os pacotes de imagem de sistema NVIDIA no PC host com Ubuntu.

```bash
wget https://developer.nvidia.com/downloads/embedded/L4T/r39_Release_v2.0/release/Jetson_Linux_R39.2.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/L4T/r39_Release_v2.0/release/Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2
```

**Passo 2:** Baixe o pacote de driver periférico A603 JetPack 7.2 [603_jp72.tbz2](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDFKQLWsQBBTrenUxxvj-qJAU4s62oPXWg6RxcdSg-uJnY?e=y3buDr), coloque-o no mesmo diretório que os pacotes de imagem de sistema NVIDIA e monte o pacote de gravação.

```bash
# Extract the official flashing package files.
tar xf Jetson_Linux_R39.2.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/

# Create the A603 driver package directory and extract the package.
mkdir 603_jp72/
cp 603_jp72.tbz2 603_jp72/
cd 603_jp72
sudo tar xf 603_jp72.tbz2

# Enter the Linux_for_Tegra directory and run the setup scripts.
cd ../Linux_for_Tegra/
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh

# Replace the driver package files and directories in Linux_for_Tegra.
cp -r ../603_jp72/bootloader/ ./
cp -r ../603_jp72/kernel/ ./
cp ../603_jp72/p3768-0000-p3767-0000-a0.conf ./
sudo cp -r ../603_jp72/rootfs/ ./
```

**Passo 3:** Coloque o dispositivo em modo de recuperação. O dispositivo deve estar em modo de recuperação para a gravação.

1. Faça um curto-circuito entre o pino RECOVERY e o pino GND na placa carrier.
2. Conecte a placa carrier ao PC host com um cabo de dados Type-C.
3. Ligue o dispositivo.
4. No PC host, execute `lsusb`. Se o ID do produto for `7323`, `7423`, `7523` ou `7623`, o dispositivo está em modo de recuperação.
   - 7323: Orin NX 16GB
   - 7423: Orin NX 8GB
   - 7523: Orin Nano 8GB
   - 7623: Orin Nano 4GB

**Passo 4:** Grave o sistema no SSD.

```bash
sudo ./l4t_initrd_flash.sh --erase-all jetson-orin-nano-devkit-super internal
```

Após a conclusão da gravação, o dispositivo será inicializado automaticamente.

:::info
Dicas: Fazer backup e restaurar a imagem do sistema

- Para fazer backup da imagem, coloque o dispositivo em modo de recuperação e execute:

  ```bash
  sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit-super
  ```

- Para gravar usando a imagem de backup, coloque o dispositivo em modo de recuperação e execute:

  ```bash
  sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit-super
  ```
:::

</TabItem>

</Tabs>

## Interfaces CAN

Como há um transceptor CAN na placa carrier A603, você não precisa de um transceptor extra como no kit de desenvolvimento.

**Passo1.** Instale `devmem2` para escrever valores nos registradores:

```sh
sudo apt-get install devmem2
```

**Passo2.** Escreva os valores de acordo com [aqui](https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/HR/ControllerAreaNetworkCan.html#jetson-platform-details).

```sh
sudo devmem2 0x0c303010 w 0xc400
sudo devmem2 0x0c303018 w 0xc458
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/send1.png"/>
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/send2.png"/>
</div>

**Passo3.** Carregue os módulos do Kernel:

```bash
sudo modprobe can
sudo modprobe can_raw
sudo modprobe mttcan
```

Após carregar esses módulos, você deverá conseguir ver estes logs em `sudo dmesg`:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/check_can.png"/>
</div>

**Passo4.** Ative a interface can0:

```sh
sudo ip link set can0 type can bitrate 500000
```

Opcionalmente, você pode alterar o bitrate para 1000000. Em seguida, ative a can0:

```sh
sudo ip link set can0 up
```

Verifique a interface com `ifconfig`:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/ifconfig.png"/>
</div>

**Passo5.** Enviando dados (requer `can-utils` instalado). Do outro lado, usamos um MCU com placa de expansão CAN para receber dados.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/hardware.png"/>
</div>

Execute `cansend can0 123#11.22.33.50` no terminal do Jetson:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/cansend.png"/>
</div>

**Passo 6.** Recebendo dados. Do outro lado, usamos um MCU com placa de expansão CAN para enviar dados.

Execute `candump can0` no terminal do Jetson:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/candump.png"/>
</div>



## Recursos

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
