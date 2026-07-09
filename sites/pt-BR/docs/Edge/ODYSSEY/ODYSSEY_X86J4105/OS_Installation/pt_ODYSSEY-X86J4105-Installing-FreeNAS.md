---
description: ODYSSEY - X86J41x5
title: Instalação do FreeNAS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ODYSSEY-X86J4105-Installing-FreeNAS
sku: 102110399,102110398,102110397,110991412,110991465,102110477,102110478,102110479
last_update:
  date: 01/03/2023
  author: w0x7ce
createdAt: '2023-01-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-Installing-FreeNAS/
---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-Installing-FreeNAS/
sku: 102110399
--- -->

Este tutorial demonstra como instalar o sistema operacional de armazenamento de código aberto. O [FreeNAS](https://www.freenas.org/) é um sistema operacional que pode ser instalado em praticamente qualquer plataforma de hardware para compartilhar dados por uma rede. Ao instalar o FreeNAS no ODYSSEY - X86J41x5 você terá construído seu próprio drive de nuvem pessoal!

## Requisitos de Hardware

- Um computador em funcionamento

- Pen drive USB x 2 (>= 8GB é recomendado)

- Um monitor

- Teclado

## Baixar a imagem do SO FreeNAS

Primeiro, baixe a [imagem do SO FreeNAS](https://www.freenas.org/download-freenas-release/) para sua unidade. Deve ser um arquivo `.iso`.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-download.jpg)

Neste tutorial, é usado o FreeNAS 11.3. O FreeNAS precisará ser instalado em uma unidade diferente. Você pode instalar o FreeNAS em um disco rígido HDD ou SSD.

**Nota:** Neste tutorial, o sistema operacional FreeNAS é instalado em um pen drive USB por conveniência.

## Criando um USB inicializável

### Etapa 1 - Prepare seu USB inicializável

Formate um dos pen drives USB. Se você for usuário de Windows, pode formatar o pen drive USB clicando com o botão direito na unidade USB e selecionando `Format`.  

**Nota:** Escolha `FAT32` para o sistema de arquivos.

<div align="center"><img width="{450}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### Etapa 2 - Baixar o gravador de imagem

Baixe o gravador de imagem Open Source [balenaEtcher](https://www.balena.io/etcher/). Baixe a versão de acordo com o seu sistema operacional (Windows/macOS/Linux).

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### Etapa 3 - Gravando a imagem do SO no USB

Selecione a imagem do sistema operacional baixada, selecione o pen drive USB formatado e clique em Flash! Agora o USB inicializável está pronto para uso.

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div>

## Instalando o SO FreeNAS

### Etapa 1 - Ativando o modo CSM no ODYSSEY - X86J41x5

Conecte seu USB inicializável, monitor e teclado ao ODYSSEY - X86J41x5 e ligue-o. Ao iniciar, continue pressionando a tecla **`DEL`** para entrar na tela de configuração. Navegue até **`Advanced`** -> **`CSM Support`** e pressione Enter para ativá-lo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg" /></div>

### Etapa 2 - Instalar o SO

Reinicie seu ODYSSEY - X86J41x5 e continue pressionando **`F7`** para entrar na tela do gerenciador de boot. Selecione o USB inicializável (Installer) e pressione Enter.

**Nota:** Lembre-se de escolher aquele que possui a imagem iso do FreeNAS.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" /></div>

### Etapa 3 - Processo de instalação

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-boot.jpg)

Uma tela de boot como a acima deve aparecer. Pressione `Enter` para selecionar o Boot FreeNAS Installer.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-option.jpg)

Depois de entrar no instalador, um menu de opções deve aparecer como a seguir, selecione **Install/Select** e pressione `Enter`.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-drive.jpg)

Selecione uma unidade para instalar a imagem do FreeNAS. Aqui devemos conseguir ver o outro pen drive USB.

**Nota:** Use a `barra de espaço` para selecionar o pen drive USB.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-warning.jpg)

Um aviso aparecerá informando que tudo na unidade escolhida será apagado, simplesmente pressione Yes.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-pw.jpg" /></div>

Crie sua senha de root para fazer login no FreeNAS a partir da interface Web posteriormente.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-complete.jpg)

O processo de instalação ocorrerá, e aguarde até que a instalação seja concluída. Quando terminar, deve estar como acima.

O processo de instalação está concluído, você pode reiniciar o ODYSSEY - X86J41x5 e desconectar o USB inicializável (Installer).

Conecte o cabo Ethernet para acesso à internet e para que possa ser acessado pela interface Web.

## Configurações

Reinicie o ODYSSEY - X86J41x5 e pressione `F7` novamente para entrar na tela do Gerenciador de Boot e escolha o pen drive USB em que o FreeNAS acabou de ser instalado.

**Nota:** Também é possível alterá-lo na configuração pressionando `DEL` e definindo o pen drive USB como primeira opção de inicialização.

Depois de inicializar no FreeNAS, você deverá ver o endereço da interface Web:

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-bootcomplete.jpg" /></div>

**Nota:** Se indicar que a interface Web não pode ser acessada, verifique sua conexão com a internet.

Use outro computador usando a mesma internet, ou seja, seu laptop, para digitar o endereço no navegador web:

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-web1.jpg)

O nome de usuário é `root` e a senha é aquela definida durante a instalação.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-web2.jpg)

Se você conseguir ver esta tela, então instalou o FreeNAS com sucesso e sinta-se à vontade para adicionar mais armazenamento ao ODYSSEY - X86J41x5 e se divertir com o drive de nuvem pessoal!

*Para desenvolvimento adicional, você pode visitar o [Fórum oficial do FreeNAS](https://www.ixsystems.com/community/?__hstc=54333623.367bb0a280861850367fe7c0081ee5de.1582628751612.1582693495900.1582699340011.3&__hssc=54333623.1.1582699340011&__hsfp=3609375136) e descobrir mais sobre plugins e recursos*

## Case de Acrílico

Também projetamos um case de acrílico para construir seu próprio NAS em um gabinete! Aqui fornecemos duas versões de gabinete dependendo do tamanho do seu disco rígido:

1. Para disco rígido [**SATA HDD de 2,5 polegadas**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/J4105-2.5.dwg).

2. Para disco rígido [**SATA HDD de 3,5 polegadas**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/J4105-3.5.dwg).

**Materiais necessários:**

- Chapas de acrílico de 3mm

- Pilar roscado sextavado M3 x 20mm fêmea-fêmea x 4

- Pilar roscado sextavado M3 x 40mm fêmea-fêmea x 4 (ou use M3 x 20mm empilhados até 40mm)

- Parafusos M3

## Recursos

- Vídeo do canal Explaining Computers sobre FreeNAS no Odyssey-X86:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/qyz91Q_JrBc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Outras aplicações úteis:

- [Primeiros passos com FreeNAS 11 Instalar, Configurar, Configurar Usuários, Configurar Compartilhamentos e Como funcionam os Snapshots](https://www.youtube.com/watch?v=sMZ-s8wHkHw&list=PLMeX7dgR89SvzGW0eumZuP_LAeBGEDnBb&index=11)

- [Como configurar um servidor de arquivos doméstico usando FreeNAS](https://www.windowscentral.com/how-to-set-up-freenas-home-file-server)

- [Fazendo backup do FreeNAS e TrueNAS para o Backblaze B2](https://www.backblaze.com/blog/how-to-setup-freenas-cloud-storage/)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
