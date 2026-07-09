---
description: Gravar JetPack no Jetson Xavier AGX H01
title: Jetson Xavier AGX H01
tags:
  - NVIDIA Jetson H01
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Jetson_Xavier_AGX_H01_Driver_Installation
sku: 110991666
last_update:
  date: 01/05/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-01-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Jetson_Xavier_AGX_H01_Driver_Installation/
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

# Instalação do Driver do Kit Jetson Xavier AGX H01

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/first_1.png" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
</div>

Este wiki mostrará como instalar o driver no Kit Jetson Xavier AGX H01. Existem várias maneiras de fazer isso.

## Instalar Jetson Xavier AGX H01 pela Linha de Comando

Esta é a instalação por meio de linhas de comando, com etapas estabilizadas.

### Materiais Necessários

- PC host com Ubuntu
- Jetson Xavier AGX H01
- Cabo de transmissão de dados Type‑C

### Instalação do Driver

Antes de instalar o driver, é necessário colocar a placa no modo Force Recovery.

#### Force Recovery Model

Há um botão de recuperação na placa, que fica no meio de três botões. Mantenha pressionado o botão de recuperação e ligue a placa; assim ela entrará no modo Force Recovery.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/driver1.png" /></div>

Conecte o Jetson Xavier AGX H01 ao PC host com Ubuntu usando um cabo de transmissão de dados Type‑C.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/driver.png" /></div>

#### Driver Necessário

Fornecemos diferentes versões de drivers para diferentes versões do sistema JetPack, para facilitar sua instalação.

<table>
  <thead>
    <tr>
      <th>Versão do JetPack</th>
      <th>Driver Necessário</th>
      <th>Arquivo do Jetson Linux</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.4</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_4.4.zip">Clique para Baixar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/linux-tegra-r32.4.3">NVIDIA L4T 32.4.3</a></td>
    </tr>
    <tr>
      <td>4.6.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver.zip">Clique para Baixar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/linux-tegra-r3271">NVIDIA L4T 32.7.1</a></td>
    </tr>
    <tr>
      <td>5.0.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.0.1.zip">Clique para Baixar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3411">NVIDIA L4T 34.1.1</a></td>
    </tr>
    <tr>
      <td>5.0.2</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.0.2.zip">Clique para Baixar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r351">NVIDIA L4T 35.1</a></td>
    </tr>
    <tr>
      <td>5.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.1.rar" target="_blank" rel="noopener noreferrer">Clique para Baixar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3521" target="_blank" rel="noopener noreferrer">NVIDIA L4T 35.2.1</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.1.1.zip" target="_blank" rel="noopener noreferrer">Clique para Baixar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3531" target="_blank" rel="noopener noreferrer">NVIDIA L4T 35.3.1</a></td>
    </tr>
    <tr>
      <td>5.1.2</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.1.2.zip" target="_blank" rel="noopener noreferrer">Clique para Baixar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3541" target="_blank" rel="noopener noreferrer">NVIDIA L4T 35.4.1</a></td>
    </tr>
  </tbody>
</table>

#### Primeiros Passos

O exemplo aqui usa **NVIDIA L4T 32.7.1** para instalar o **JetPack 4.6.1** no Jetson AGX H01.

- **Passo 1**. [Baixe](https://developer.nvidia.com/embedded/linux-tegra-r3271) os drivers no PC host a partir da NVIDIA. Os drivers 32.7.1 necessários são mostrados abaixo:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver4.png" /></div>

- **Passo 2**. [Baixe](https://files.seeedstudio.com/wiki/H01Driver/H01_Driver.zip) arquivos adicionais de instalação necessários **H01_Drivers** no PC host.

Mova os arquivos baixados no **Passo 1** para a mesma pasta de **H01_Drivers**. Agora você verá três arquivos descompactados na mesma pasta.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01drivera.png" /></div>

- **Passo 3**. Descompacte o arquivo **AGX_H01_Drivers.zip**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver1b.png" /></div>

- **Passo 4**. Abra o terminal na pasta e descompacte os demais arquivos. Execute o comando abaixo:

```
tar xf Jetson_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_tegra/rootfs
sudo tar xfp ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
cd ..
sudo  ./apply_binaries.sh
```

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver5.png" /></div>

!!!Note
    Se você baixar os arquivos em outro lugar, certifique‑se de adicionar o caminho para os arquivos. Como no exemplo aqui é "/Desktop/AGX/". Se você abrir o terminal diretamente no arquivo, o caminho será adicionado automaticamente.

As linhas de comando devem ser assim:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/agx0.png" /></div>

- **Passo 5**. Volte um nível e copie e cole o arquivo do **H01_Driver** baixado para o arquivo descompactado **Jetson_Linux_R32.6.1_aarch64.tbz2**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver6.png" /></div>

Aqui estão os comandos abaixo:

```
cd ..
cp -a -f H01_Driver/Linux_for_Tegra/kernel Linux_for_Tegra/
cd Linux_for_Tegra/
sudo ./flash.sh jetson-xavier mmcblk0p1
```

A gravação será executada e o progresso será assim:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/agx2.png" /></div>

O resultado final deve ser assim:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/agx3.png" /></div>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
