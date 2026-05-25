---
description: Implantar modelo de IA com CVEDIA-RT em Dispositivos NVIDIA Jetson
title: Primeiros Passos com CVEDIA-RT
tags:
  - implantação de modelo de IA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /CVEDIA-Jetson-Getting-Started
sku: 110110144,110110146,110110184,110110185,110110186,110110187
last_update:
  date: 03/10/2023
  author: Lakshantha
createdAt: '2023-03-10'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/CVEDIA-Jetson-Getting-Started/
---

# Primeiros Passos com CVEDIA-RT em Dispositivos NVIDIA® Jetson

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CVEDIA/thumb.gif" style={{width:1000, height:'auto'}}/></div>

[CVEDIA-RT](https://www.cvedia.com/cvedia-rt) é um mecanismo de inferência de IA modular e multiplataforma que fornece bases sólidas para a construção de sistemas de apoio à decisão. Ele é projetado desde o início tendo em mente desenvolvedores e integradores, oferecendo interfaces de alto e baixo nível.

Este wiki vai mostrar, passo a passo, como você pode instalar facilmente o CVEDIA-RT na plataforma NVIDIA Jetson e começar a criar aplicações interessantes.

## Hardware Suportado

CVEDIA-RT é suportado pelas seguintes plataformas:

- Windows
- Linux 
- NVIDIA Jetson
- Ambarella

No entanto, neste wiki iremos focar apenas em como implantar o CVEDIA-RT na plataforma NVIDIA Jetson.

## Pré-requisitos

- Dispositivo NVIDIA Jetson executando NVIDIA JetPack com todos os componentes do SDK instalados e conectado à internet

  - Testamos este wiki com o [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) executando o [JetPack 5.1](https://developer.nvidia.com/embedded/jetpack-sdk-51)
- PC host com Windows, Linux ou Mac e conectado à internet

## Baixar o Instalador do CVEDIA-RT para NVIDIA Jetson

**Passo 1:** Visite [esta página](https://rt.cvedia.com/) e clique em **Sign in** 

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/CVEDIA/10.png" /></div>

**Passo 2:** Cadastre uma nova conta CVEDIA ou faça login com sua conta Google

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/CVEDIA/14.png" /></div>

**Passo 3:** Clique em **Download** em **NVIDIA Jetson**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/CVEDIA/12.jpg" /></div>

**Passo 4:** Clique em **Docker(Recommended)** para baixar o arquivo tar.gz que inclui o instalador do CVEDIA-RT 

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/13.png" /></div>

## Instalar CVEDIA-RT no NVIDIA Jetson

**Passo 1:** Mova o arquivo que você baixou anteriormente para uma nova pasta no dispositivo Jetson e extraia-o executando

```sh
tar -xzvf <filename.tar.gz>
```

**Passo 2:** Dentro da pasta extraída no dispositivo Jetson, execute o script de instalação

```sh
sudo ./install.sh
```

Responda às perguntas do script de instalação de acordo com as suas necessidades

## Executar CVEDIA-RT no NVIDIA Jetson

Execute o aplicativo

```sh
./run.sh
```

Agora você verá o aplicativo CVEDIA-RT aberto como a seguir e ele já vem pré-carregado com muitas aplicações diferentes prontas para uso, tais como:

- Estimativa de multidão
- Detecção de drones
- Detecção de quedas
- Ocupação de faixas
- Contador de tipo de veículo
- Detecção de pacotes e mais! 

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/15.png" /></div>

Se você quiser executar o CVEDIA-RT localmente sem uma conexão com a internet, execute da seguinte forma

```sh
./run.sh -U
```

No entanto, você precisa executar uma aplicação específica pelo menos uma vez com internet para que os arquivos e modelos necessários sejam baixados

## Explorar as aplicações pré-carregadas 

Agora vamos explorar algumas aplicações que já vêm prontas para uso e como você pode configurá-las

**Passo 1:** Clique em **intelligent-transportation-systems** e clique no botão de executar ao lado da solução **lane-occupancy**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/2.jpg" /></div>

Agora serão baixados os arquivos necessários, como o arquivo de modelo, arquivo de configuração, arquivo de vídeo de exemplo e a demonstração será iniciada. Aqui você verá zonas desenhadas de acordo com as faixas e cada zona indicando quantos veículos estão dentro daquela zona específica. 

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/lane-GIF.gif" /></div>

**Passo 2:** Altere as configurações de acordo com a sua preferência dentro do aplicativo, como ligar/desligar caixas delimitadoras e rótulos, alterar zonas, cores das zonas e mais

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/CVEDIA/3.jpg" /></div>

**Passo 3:** PARE ou PAUSE a demonstração usando os dois ícones ao lado de **lane-occupancy**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/CVEDIA/4.jpg" /></div>

**Passo 4:** Clique no ícone de engrenagem ao lado de **lane-occupancy**, clique em **Edit Source** para alterar o fluxo de vídeo de acordo com a sua preferência

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/CVEDIA/5.jpg" /></div>

Aqui você tem várias opções para escolher

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/CVEDIA/6.jpg" /></div>

**Passo 5:** Depois de selecionar a fonte de vídeo desejada, você pode clicar em **Save Instance** para executar o aplicativo com a fonte de vídeo que você selecionou

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/CVEDIA/7.jpg" /></div>

**Nota:** Certifique-se de parar o aplicativo e executá-lo novamente para que as alterações entrem em vigor

**Passo 6:** Da mesma forma, você pode navegar para outra solução, como **people_walking** em **crowd-estimation**, e clicar no botão de reprodução para executar a solução

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/Crowd-GIF-small.gif" /></div>

Aqui você pode configurar mais opções e alterar o fluxo de vídeo da mesma forma que na solução anterior mencionada

<div align="center"><img width={180} src="https://files.seeedstudio.com/wiki/CVEDIA/9.jpg" /></div>

## Saiba mais

CVEDIA-RT oferece documentação muito detalhada e abrangente. Portanto, é altamente recomendado consultá-la [aqui](http://docs.cvedia.com).

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>