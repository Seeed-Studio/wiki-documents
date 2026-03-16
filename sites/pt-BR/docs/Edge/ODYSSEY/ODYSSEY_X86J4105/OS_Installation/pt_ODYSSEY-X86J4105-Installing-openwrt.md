---
description: ODYSSEY - X86J41x5
title: Instalação do OpenWRT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ODYSSEY-X86J4105-Installing-openwrt
sku: 102110399,102110398,102110397,110991412,110991465,102110477,102110478,102110479
last_update:
  date: 01/03/2023
  author: w0x7ce
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-Installing-openwrt/
---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-Installing-openwrt/
sku: 102110399
--- -->

Este tutorial demonstra como instalar o sistema operacional de código aberto para rede de roteador. Com a ajuda do OpenWrt, seu ODYSSEY - X86J41x5 pode se transformar em um roteador e cuidar da sua rede doméstica!

## Requisitos de Hardware

- Um computador funcionando

- Um pendrive USB (>= 8GB é recomendado)

- Um monitor

- Teclado e mouse

- Cabo Ethernet x 2

## Baixar a imagem do sistema OpenWrt

Primeiro, baixe a imagem do sistema operacional [OpenWrt](https://downloads.openwrt.org/releases/). Escolha a versão desejada, navegue até `x86` -> `64` e baixe a versão necessária.

Neste tutorial, a versão 19.07 é usada; clique [aqui](https://downloads.openwrt.org/releases/19.07.0/targets/x86/64/openwrt-19.07.0-x86-64-combined-ext4.img.gz) para baixar.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/Openwrt.jpg" /></div>

## Criando um USB bootável

### Passo 1 - Prepare seu USB bootável

Formate o pendrive USB. Se você é um usuário Windows, pode formatar o pendrive clicando com o botão direito no pendrive USB e selecionando `Format`.  

**Nota:** Escolha `FAT32` para o sistema de arquivos.

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### Passo 2 - Baixar o gravador de imagem

Baixe o gravador de imagem de código aberto [balenaEtcher](https://www.balena.io/etcher/). Baixe a versão de acordo com o seu sistema operacional (Windows/macOS/Linux).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### Passo 3 - Gravando a imagem do sistema no USB

Selecione a imagem do sistema operacional baixada, selecione o pendrive USB formatado e clique em Flash! Agora o USB bootável está pronto para uso.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div>

## Instalando o OpenWrt

### Passo 1 - Habilitando o modo CSM no ODYSSEY - X86J41x5

Conecte seu USB bootável, monitor e teclado ao ODYSSEY - X86J41x5 e ligue o dispositivo. Ao inicializar, continue pressionando a tecla **`DEL`** para entrar na tela de configuração. Navegue até **`Advanced`** -> **`CSM Support`** e pressione Enter para habilitar.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg" /></div>

### Passo 2 - Instalar o sistema

Reinicie seu ODYSSEY - X86J41x5 e continue pressionando **`F7`** para entrar na tela do gerenciador de boot. Selecione o USB bootável e pressione Enter.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" /></div>

### Passo 3 - Processo de instalação

Selecione o **`OpenWrt`** e pressione Enter. Siga as instruções de instalação na tela.
<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/installingOpenwrt.jpg" /></div>

Quando terminar, pressione Enter e você deverá ver a seguinte tela:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/OpenWrtShell.jpg" /></div>

Agora seu OpenWrt está instalado e pronto para uso!

## Configurações

Agora vamos configurar o acesso ao sistema OpenWrt a partir de uma interface web em outro PC. Digite o seguinte no shell do OpenWrt:

```sh
vi /etc/config/network
```

E altere as configurações como a seguir:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/settings.jpg" /></div>

Aqui você altera o endereço IP da estação para configurações de LAN, de modo que possa usar esse IP para acessar o roteador. Aqui o IP é alterado para `192.168.10.1`

**Nota:** No vim, digite **`i`** primeiro para entrar no modo de inserção e poder editar. Quando terminar a edição, pressione a tecla **`ESC`** e digite **`:wq`** e Enter para salvar e sair.

## Acessando de outro PC

Agora você pode acessar o OpenWrt de outro computador via interface web LuCI. Simplesmente use **um cabo Ethernet para conectar à porta Ethernet que fica próxima à porta HDMI**. Conecte o outro cabo Ethernet à outra porta Ethernet no ODYSSEY - X86J41x5 e à internet (isso pode variar, como no método PPPoE).

Agora, a partir do seu computador, digite `192.168.10.1` (o endereço IP especificado anteriormente) no navegador web e você deverá ver a seguinte tela:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/ipAddress.jpg" /></div>

Agora você pode acessar seu OpenWrt a partir de outro PC!

## Configurando LAN e WAN

Navegue até **`Network`** -> **`Interfaces`** e configure as definições de WAN para acesso à internet:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/interface.jpg" /></div>

 Isso mostra todas as configurações de interfaces do OpenWrt. Aqui, apenas certifique‑se de que a **porta WAN(eth1)** esteja conectada à internet e configurada como **DHCP client Protocol**, como a seguir:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/interface2.jpg" /></div>

  Agora, seu computador deve ter acesso à internet e seu roteador está pronto para uso!

  *Para desenvolvimento adicional, você pode começar a baixar e implantar todos os tipos de aplicativos, como bloqueio de anúncios, espelhamento de porta etc.! Para mais informações, visite o [OpenWrt](https://openwrt.org/).*

## Suporte técnico e discussão de produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
