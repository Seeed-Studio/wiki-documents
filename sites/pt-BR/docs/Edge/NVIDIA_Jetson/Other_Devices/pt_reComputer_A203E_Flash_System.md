---
description: Gravar o Jetpack no Mini PC A203E
title: Mini PC A203E
tags:
  - Gravação do Jetpack no Mini PC
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_A203E_Flash_System
last_update:
  date: 01/05/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-01-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reComputer_A203E_Flash_System/
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

# Gravar o sistema JetPack OS no Mini PC A203E (NVIDIA Jetson Xavier NX)

Neste wiki, mostraremos como gravar o Jetpack OS no Mini PC A203E, que é compatível com o módulo NVIDIA Jetson Xavier NX. Aqui apresentaremos duas maneiras de gravar o sistema e, como o Mini PC A203E é diferente da Placa Carrier oficial NVIDIA Jetson, o driver correspondente também deve ser instalado.

<div align="center">
  <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><a href="https://www.seeedstudio.com/A203-Mini-PC-with-128GB-SSD-p-5494.html" target="_blank" rel="noopener"><img width={600} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/a/2/a203_mini_pc_-1.png" alt /></a></p>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A203-Mini-PC-with-128GB-SSD-p-5494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Primeiros Passos

podemos fazer isso facilmente usando o **Terminal do Linux**. Para pessoas que têm base de conhecimento em Linux, recomendamos fortemente usar apenas o Terminal do Linux.

- [Gravando o JetPack OS via terminal do Linux](#gravando-o-jetpack-os-via-command-line)

### Preparação de Software

- <a href="https://developer.nvidia.com/login" target="_blank"><span>Conta NVIDIA</span></a>
- Sistema Ubuntu 18.04 no computador host

!!!note
 Neste tutorial, usaremos um sistema baseado em Ubuntu 18.04 LTS para concluir a instalação.

### Preparação de Hardware (Modo de Recuperação Forçada)

- Computador host com sistema Ubuntu 18.04
- Um cabo de dados Micro-USB
- Fonte de alimentação para o A203E

Antes de prosseguirmos para as etapas de instalação, precisamos garantir que a placa esteja em modo de recuperação forçada.

**Passo 1.** Localize primeiro a porta Micro-USB, o botão de alimentação e o botão de reset na lateral do A203E.

Para colocar o A203E em Modo de Recuperação Forçada, certifique-se de que o A203E esteja desligado.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/A203E/a203E_interface.png" /></div>

**Passo 2.** Conecte o A203E e o computador host com o cabo Micro-USB.

**Passo 3.** Conecte a fonte de alimentação do A203E.

**Passo 4.** **Pressione e mantenha pressionada** a **Tecla de Reset** primeiro e, em seguida, **pressione e mantenha pressionada** a **Tecla de Alimentação**, aguarde o LED acender, então **libere** a **Tecla de Alimentação**, agora **espere 2 segundos** e **libere** a **Tecla de Reset**.

**Passo 5.** Na tela do PC host com Linux, podemos clicar com o botão direito do mouse para abrir um Terminal e inserir o comando `lsusb`. Quando o conteúdo retornado tiver `NVidia Corp.` nele, isso significa que sua Placa Carrier A203 está em modo de recuperação forçada e você pode prosseguir para as operações subsequentes.

O ID depende dos módulos na placa carrier e as informações são mostradas abaixo:

- Para Jetson Xavier NX: **0955:7e19 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png" /></div>

## Gravando o JetPack OS via Command Line

Aqui está o fluxo de trabalho usando um script de Command Line para gravar o Jetpack OS:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### Passo 1. Baixar o pacote de driver NVIDIA Linux adequado

No **PC host com Linux**, precisamos abrir um navegador e acessar o <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>. Primeiro devemos verificar se a versão do Jetson Linux é suportada. Neste caso, estamos usando o NVIDIA L4T 35.1.0 (equivalente ao Jetpack 5.0.2)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/select_35_1.png" /></div>

Depois de encontrar a versão adequada, clique para ir para a página de download. Encontre e clique em "L4T Driver Package (BSP)" e "Sample Root Filesystem" para baixar os arquivos de driver. Os nomes dos arquivos são como `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` e `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/download_files.png" /></div>

Como exemplo, escolhemos a versão NVIDIA L4T 35.1.0. Os nomes dos arquivos devem ser:

- Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
- Jetson_Linux_R35.1.0_aarch64.tbz2

### Passo 2. Descompactar os arquivos do pacote e montar o Rootfs via Command Line

No PC host com Linux, abra um ``Terminal`` e use a linha de comando abaixo para descompactar os arquivos e montar o rootfs:

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

!!!Note
    `${XXX_XX_XXX}` é onde você coloca os nomes dos arquivos.

- Por exemplo, se os arquivos baixados estiverem armazenados em `~/Downloads/`, abra o ``Terminal`` no seu computador host Ubuntu e insira os seguintes comandos:

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

### Passo 3. Baixar e aplicar o driver

No PC host com Linux, baixe o driver que preparamos clicando em <a href="https://files.seeedstudio.com/wiki/A203_V.2/203_jp5.0.2.zip">*Download do driver A203E*</a>

Para aplicar o driver, insira o seguinte comando no ``Terminal``, dando continuidade ao passo de exemplo anterior em que o arquivo de driver foi baixado e salvo na pasta **~/Downloads** e também criamos a pasta **Jetpack_501** dentro da pasta **~/Downloads** para garantir que temos apenas os arquivos do sistema mais recentes do **Jetpack 5.0.2** na pasta **Linux_for_Tegra**:

```
cd ~/Downloads/
unzip 203_jp5.0.2.zip
cp -r203_jp5.0.2/203_jp5.0.2/Linux_for_Tegra Jetpack_501/Linux_for_Tegra
```

### Passo 4. Gravar o sistema na placa

No exemplo usamos o módulo NVIDIA Jetson Xavier NX e podemos gravar o sistema diretamente na placa executando o seguinte comando:

```sh
cd ~/Downlands/Jetpack_502/Linux_for_Tegra
sudo ./flash.sh -r jetson-xavier-nx-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
