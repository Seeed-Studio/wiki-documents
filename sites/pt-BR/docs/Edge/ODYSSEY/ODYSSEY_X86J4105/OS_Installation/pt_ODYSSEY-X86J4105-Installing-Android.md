---
description: ODYSSEY - X86J41x5
title: Instalação do Android-x86
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ODYSSEY-X86J4105-Installing-Android
last_update:
  date: 01/03/2023
  author: w0x7ce
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-Installing-Android/
---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-Installing-Android/
sku: 102110399
--- -->

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/BBC.png" /></div>

Este tutorial demonstra como instalar o Android-x86 no ODYSSEY-X86J41x5 e usá-lo como uma TV Box inteligente para assistir TV ao vivo ou mídia do armazenamento local (como um NAS) com a ajuda do [Kodi](https://kodi.tv/).

O Android-x86 é um projeto para portar o projeto de código aberto Android para a plataforma x86, anteriormente conhecido como "patch hosting for android x86 support". Para mais referências, visite o site oficial [Android-x86](https://www.android-x86.org/).

## Requisitos de Hardware

- Um computador funcional

- 1 unidade USB (recomenda-se >= 8GB)

- Um monitor

- Teclado

## Baixar a imagem do sistema Android-x86

Primeiro, baixe a [imagem do sistema Android-x86](https://www.android-x86.org/download.html) para o seu disco. Deve ser um arquivo `.iso`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/download.png" /></div>

Neste tutorial, é usado `android-x86-7.1-r4-k419`.

## Criando um USB inicializável

### Passo 1 - Prepare seu USB inicializável

Formate uma das unidades USB. Se você for usuário do Windows, pode formatar a unidade USB clicando com o botão direito na unidade USB e selecionando `Format`.  

**Nota:** Escolha `FAT32` para o sistema de arquivos.

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### Passo 2 - Baixar o gravador de imagem

Baixe o gravador de imagem Open Source [balenaEtcher](https://www.balena.io/etcher/). Baixe a versão de acordo com o seu sistema operacional (Windows/macOS/Linux).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### Passo 3 - Gravando a imagem do sistema no USB

Selecione a imagem de sistema operacional baixada, selecione a unidade USB formatada e clique em Flash! Agora, o USB inicializável está pronto para uso.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div>

## Instalando o Android-x86

### Passo 1 - Ativar o modo CSM no ODYSSEY - X86J41x5

Conecte seu USB inicializável, monitor e teclado ao ODYSSEY - X86J41x5 e ligue-o. Durante a inicialização, continue pressionando a tecla **`DEL`** para entrar na tela de configuração. Navegue até **`Advanced`** -> **`CSM Support`** e pressione Enter para habilitá-lo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg" /></div>

### Passo 2 - Instalar o sistema operacional

Reinicie seu ODYSSEY - X86J41x5 e continue pressionando **`F7`** para entrar na tela do gerenciador de boot. Selecione o USB inicializável (Installer) e pressione Enter.

**Nota:** Lembre-se de escolher aquele que contém a imagem iso do Android-x86.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" /></div>

### Passo 3 - Processo de instalação

Em **GRUB options**, selecione `Advanced options`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/1.png" /></div>

Selecione `Android-x86** Auto Install to specific harddisk`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/2.png" /></div>

Isso inicia o processo de instalação e você pode escolher onde o Android-x86 será instalado no ODYSSEY-X86. Aqui ele é instalado na eMMC onboard.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/3.png" /></div>

Selecione `Yes` para confirmação:

<div align="center"><img src="https://files.seeedstudio.com/wiki/
ODYSSEY-X86J4105-Installing-Android/4.png" /></div>

Agora, o processo de instalação está em andamento e, quando terminar, selecione `Reboot`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/5.png" /></div>

Remova o USB inicializável e reinicie o dispositivo. O Android-x86 deve iniciar.

!!!Note
        Se não inicializar corretamente, pressione F7 e selecione a unidade na qual você instalou o Android-x86 para fazer o boot.

## Configurações

Se tudo correr bem, você irá inicializar no Android-x86 como na tela abaixo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/home.png" /></div>

Isso pode parecer familiar para pessoas que usam celulares Android!

## Configurando como Smart TV Box

Para fazer o ODYSSEY-X86J41x5 funcionar como uma Smart TV Box, precisaremos instalar o [Kodi](https://kodi.tv/).

Kodi é um software de centro de mídia gratuito e de código aberto que pode rodar em qualquer coisa, desde o seu celular Android até o seu PC doméstico, e muitos outros dispositivos intermediários. E, claro, ele é compatível com Android-x86!

### Baixar e instalar o KODI para Android-x86

Você pode baixar o [Kodi para Android-x86 aqui](https://mirrors.kodi.tv/releases/android/x86/). Talvez você queira baixá-lo em outro PC e salvar o arquivo `.apk` em uma unidade USB e instalar o aplicativo a partir do USB.

### Configurações de IPTV no Kodi

Abra o **Kodi** e navegue até **TV** -> **More Add-on**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/add-on.png" /></div>

Escolha **PVR clients**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/PVR.png" /></div>

Selecione **PVR IPTV Simple Client**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/iptv.png" /></div>

Selecione **configure** e digite a **URL de streaming IPTV `m3u`**. Você pode consultar este [`iptv repo`](https://github.com/iptv-org/iptv/blob/master/README.md) como referência. Selecione **OK** e lembre-se de **enable**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/config.png" /></div>

Reinicie o Kodi e você deverá ter os canais carregados! Agora você transformou seu ODYSSEY-X86 em uma Smart TV Box!

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/live.png" /></div>

### Iniciar a partir da inicialização

Se você quiser que o ODYSSEY-X86 inicie o Kodi diretamente ao ligar, você pode simplesmente conseguir isso instalando `Boot apps` pela Google Play Store!

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/boot.png" /></div>

Instale o aplicativo e selecione o Kodi como aplicativo para iniciar junto com o sistema!

## Recursos

- [Kodi](https://kodi.tv/)

- [How To Use Kodi – Everything You Need To Know for Unlimited Streaming](https://troypoint.com/how-to-use-kodi/)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
