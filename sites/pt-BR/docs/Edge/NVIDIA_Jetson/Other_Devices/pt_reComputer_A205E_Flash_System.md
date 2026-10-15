---
description: Gravar Jetpack no Mini PC A205E
title: Mini PC A205E
tags:
  - Gravação de Jetpack em Mini PC
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_A205E_Flash_System
sku: 114110048
last_update:
  date: 01/05/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-01-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reComputer_A205E_Flash_System/
---
<!-- ---
name: 
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 
tags:
--- -->

# Gravar o JetPack OS na A205E Carrier Board ou no Mini PC A205E (compatível com NVIDIA Jetson Xavier NX)

Neste wiki, mostraremos como gravar o Jetpack OS na A205E Carrier Board ou no Mini PC A205E que suporta o módulo NVIDIA Jetson Xavier. Aqui apresentaremos duas maneiras de gravar o sistema e, como a A205 Carrier Board é diferente da Carrier Board oficial da NVIDIA Jetson, o driver correspondente também deve ser instalado.

<div align="center">
  <table>
    <tbody><tr>
        <td align="center"><a href="https://www.seeedstudio.com/A205E-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5496.html" target="_blank"><span>A205E Carrier Board</span></a></td>
        <td align="center"><a href="https://www.seeedstudio.com/A205E-Mini-PC-with-128GB-SSD-p-5495.html" target="_blank"><span>Mini PC A205E</span></a></td>
      </tr>
      <tr>
        <td align="center">
          <a href="https://www.seeedstudio.com/A205E-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5496.html" target="_blank" rel="noopener"><img width={350} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/5/_/5_7_1.png" alt /></a>
        </td>
        <td align="center">
          <a href="https://www.seeedstudio.com/A205E-Mini-PC-with-128GB-SSD-p-5495.html" target="_blank" rel="noopener"><img width={380} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/1/_/1_9_2.png" alt /></a>
        </td>
      </tr>
    </tbody></table>
</div>

## Primeiros Passos

podemos fazer isso facilmente usando o **Terminal Linux**. Para pessoas que têm base de conhecimento em Linux, recomendamos fortemente usar apenas o Terminal Linux.

- [Gravando o JetPack OS via terminal Linux](#Gravando-o-JetPack-OS-via-linha-de-comando)

### Preparação de Software

- <a href="https://developer.nvidia.com/login" target="_blank"><span>Conta NVIDIA</span></a>
- Sistema operacional Ubuntu 18.04 no computador host

!!!note
 In this tutorial, we will use Ubuntu 18.04 LTS based system to complete the installation.

### Preparação de Hardware (Modo de Recuperação Forçada)

- Computador host com sistema operacional Ubuntu 18.04
- Um cabo de dados USB Tipo-C
- Adaptador de energia para A205E Carrier Board ou Mini PC A205E

Antes de podermos avançar para as etapas de instalação, precisamos ter certeza de que a placa está no modo de recuperação forçada

**Passo 1.** Localize a porta USB Tipo-C, o botão de energia (Power Button), o botão de reset (Reset Button) e o botão de recuperação (Recovery Button) na lateral da A205E Carrier Board ou do Mini PC A205E.

<div align="center">
  <table>
    <tbody><tr>
        <td align="center">A205E Carrier Board</td>
        <td align="center">Mini PC A205E</td>
      </tr>
      <tr>
        <td align="center">
          <a href="https://www.seeedstudio.com/A205E-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5496.html" target="_blank" rel="noopener"><img width={350} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/a/n/antenna_dc_jack_io_controller_20_pin_1_.png" alt /></a>
        </td>
        <td align="center">
          <a href="https://www.seeedstudio.com/A205E-Mini-PC-with-128GB-SSD-p-5495.html" target="_blank" rel="noopener"><img width={380} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/2/_/2_8_3.png" alt /></a>
        </td>
      </tr>
    </tbody></table>
</div>

Para colocar a A205E em modo de recuperação forçada, certifique-se de que a A205E esteja desligada.

**Passo 2.** Conecte o cabo USB Tipo-C à porta de programação Tipo-C na **A205E Carrier Board ou no Mini PC A205E** e ao computador host.

**Passo 3.** Conecte o adaptador de energia para a **A205E Carrier Board ou o Mini PC A205E**.

**Passo 4.** **Pressione e mantenha pressionada** a **Tecla de Recuperação** primeiro e então **Pressione e mantenha pressionada** a **Tecla de Energia**; espere o LED acender, então **Solte** a **Tecla de Energia**, agora **Espere 2 segundos** e **Solte** a **Tecla de Recuperação**.

**Ou**

Se a **A205E Carrier Board ou o Mini PC A205E** estiver no estado de **ligado (Power On)**, **Pressione e mantenha pressionada** a **Tecla de Reset** e a **Tecla de Recuperação**, **Solte** a **Tecla de Reset** por **2 segundos**, então **Solte** a **Tecla de Recuperação**.

**Passo 5.** Na tela do PC host Linux, podemos clicar com o botão direito do mouse para abrir um Terminal e inserir o comando `lsusb`. Quando o conteúdo retornado tiver `NVidia Corp.` nele, isso significa que sua A205 Carrier Board está no modo de recuperação forçada e você pode prosseguir para as operações subsequentes.

O ID depende dos módulos na carrier board e as informações são mostradas como abaixo:

- Para Jetson Xavier NX: **0955:7e19 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png" /></div>

## Gravando o JetPack OS via linha de comando

Aqui está o fluxo de trabalho usando script de linha de comando para gravar o Jetpack OS:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### Passo 1. Baixar o pacote adequado do NVIDIA Linux Driver

No **PC host Linux**, precisamos abrir um navegador e ir para o <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>. Primeiro devemos verificar se a versão do Jetson Linux é suportada. Neste caso estamos usando o NVIDIA L4T 35.1.0 (equivalente ao Jetpack 5.0.2)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/select_35_1.png" /></div>

Depois de encontrar a versão adequada, clique para ir à página de download. Encontre e clique em "L4T Driver Package (BSP)" e "Sample Root Filesystem" para baixar os arquivos de driver. Os nomes dos arquivos são como `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` e `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/download_files.png" /></div>

Como exemplo, escolhemos a versão NVIDIA L4T 35.1.0. Os nomes dos arquivos devem ser:

- Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
- Jetson_Linux_R35.1.0_aarch64.tbz2

### Passo 2. Descompactar os pacotes e montar o Rootfs via linha de comando

No PC host Linux, abra um ``Terminal`` e use a linha de comando abaixo para descompactar os arquivos e montar o rootfs:

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

!!!Note
    `${XXX_XX_XXX}` é onde você coloca os nomes dos arquivos.

- Por exemplo, se os arquivos baixados forem armazenados em `~/Downloads/`, abra o ``Terminal`` em seu computador host Ubuntu e insira os seguintes comandos:

```bash
cd ~/Downlands/
mkdir Jetpack_502
mv Jetson_Linux_R35.1.0_aarch64.tbz2 Jetpack_502/
mv Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2 Jetpack_502/
cd Jetpack_501/
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

### Passo 3. Gravar o sistema na placa

No exemplo, usamos o módulo NVIDIA Jetson Xavier NX e podemos gravar diretamente o sistema na placa executando o seguinte comando:

```sh
cd ~/Downlands/Jetpack_502/Linux_for_Tegra
sudo ./flash.sh -r jetson-xavier-nx-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
