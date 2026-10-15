---
description: ODYSSEY - X86J41x5
title: Sistema operacional original
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ODYSSEY-X86J4105-Installing-OS
sku: 102110399,102110398,102110397,110991412,110991465,102110477,102110478,102110479
last_update:
  date: 01/03/2023
  author: w0x7ce
createdAt: '2023-01-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-Installing-OS/
---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-Installing-OS/
sku: 102110399
--- -->

Este tutorial demonstra como criar um USB inicializável e instalar o sistema operacional Linux (Ubuntu Desktop 18.04) no ODYSSEY - X86J41x5.

## Requisitos de hardware

- Um computador funcional

- Um drive USB (>= 8GB é recomendado)

- Um monitor

- Teclado e mouse

## Criando um USB inicializável

### Etapa 1 - Baixar a imagem do sistema operacional

Baixe a imagem do SO necessária para o seu disco local. Neste tutorial, *Ubuntu Desktop 18.04* é usado para demonstrar a instalação no ODYSSEY - X86J41x5.

- Você pode baixar a imagem do sistema operacional [Ubuntu](https://ubuntu.com/download/desktop) aqui.

### Etapa 2 - Preparar seu USB inicializável

Formate o drive USB. Se você é usuário Windows, pode formatar o drive USB clicando com o botão direito no drive USB e selecionando `Format`.  

**Nota:** Escolha `FAT32` para o sistema de arquivos.

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### Etapa 3 - Baixar o gravador de imagem

Baixe o gravador de imagem de código aberto [balenaEtcher](https://www.balena.io/etcher/). Baixe a versão de acordo com o seu sistema operacional (Windows/macOS/Linux).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### Etapa 4 - Gravando a imagem do SO no USB

Selecione a imagem do sistema operacional baixada, selecione o drive USB formatado e clique em Flash! Agora o USB inicializável está pronto para uso.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div>

## Instalando o sistema operacional (Ubuntu)

### Etapa 1 - Selecionar o USB inicializável como dispositivo de boot

Conecte seu USB inicializável, monitor e teclado ao ODYSSEY - X86J41x5 e ligue o dispositivo. Durante a inicialização, continue pressionando **`F7`** para entrar na tela do Gerenciador de Boot. Use as teclas &#8593; e &#8595; no teclado para selecionar o seu USB inicializável.

Neste tutorial, `UEFI: Mass Storage Device 1.00` é o USB inicializável.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/bios.png" /></div>

### Etapa 2 - Instalando o sistema operacional

Selecione **`Install ubuntu`** e pressione Enter. Siga as instruções de instalação na tela, ou seja, idioma do sistema, nome de usuário, localização etc.

**Nota:** Para etapas detalhadas de instalação do Ubuntu, você pode seguir [este](https://www.youtube.com/watch?v=vt5Lu_ltPkU) vídeo para mais informações. *A parte de instalação começa em 3:20 no vídeo.*

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/install.png" /></div>

### Etapa 3 - Reinicie e aproveite o novo sistema operacional

Se tudo correr bem, o Ubuntu deverá estar instalado no ODYSSEY - X86J41x5 e você poderá começar a aproveitar o seu novo sistema operacional!

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/result.jpg" /></div>

## Notas

- **Ubuntu 16 não é suportado pelo ODYSSEY - X86J41x5**

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
