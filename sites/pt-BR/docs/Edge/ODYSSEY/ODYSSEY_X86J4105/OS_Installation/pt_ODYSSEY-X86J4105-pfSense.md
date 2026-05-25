---
description: ODYSSEY - X86J41x5
title: Instalação do pfSense
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ODYSSEY-X86J4105-pfSense
last_update:
  date: 01/03/2023
  author: w0x7ce
createdAt: '2023-01-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-pfSense/
---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-Installing-pfSense/
sku: 102110399
--- -->

Este tutorial demonstra como instalar o **[pfSense](https://www.pfsense.org/)** no [ODYSSEY-X86J41x5](https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html).

**[pfSense](https://www.pfsense.org/)** é uma distribuição de software de computador firewall/roteador de código aberto baseada em [FreeBSD](https://www.freebsd.org/). Ele é instalado em um computador físico ou em uma máquina virtual para criar um firewall/roteador dedicado para uma rede.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/X86-04-n.png" /></div>

Para mais informações, você também pode visitar a [documentação oficial do pfSense](https://docs.netgate.com/pfsense/en/latest/) para obter mais detalhes!

## Requisitos de Hardware

- Um computador funcional

- Pendrive USB x 2 (recomenda-se menos de 8GB)

- Um monitor

- Teclado

- Internet e cabo Ethernet

## Baixar a imagem do SO pfSense

Primeiro, baixe a [imagem do SO pfSense](https://www.pfsense.org/download/) para sua unidade.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/Download.png" /></div>

Para o ODYSSEY-X86J41x5, escolha as configurações como acima e clique em download.

## Criando um USB inicializável

### Etapa 1 - Prepare seu USB inicializável

Formate um dos pendrives USB. Se você é usuário do Windows, pode formatar o pendrive USB clicando com o botão direito na unidade USB e selecionando `Format`.  

**Nota:** Escolha `FAT32` para o sistema de arquivos.

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png" /></div>

### Etapa 2 - Baixar o gravador de imagem

Baixe o gravador de imagem Open Source [balenaEtcher](https://www.balena.io/etcher/). Baixe a versão de acordo com o seu sistema operacional (Windows/macOS/Linux).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg" /></div>

### Etapa 3 - Gravando a imagem do SO no USB

Selecione a imagem do sistema operacional baixada, selecione o pendrive USB formatado e clique em Flash! Agora o USB inicializável está pronto para uso.

<div>
  <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png" /></div><br />
</div>

**Nota:** Se aparecer um aviso indicando que ele não contém uma tabela de partição, você pode simplesmente clicar em **continue** para ignorar a mensagem.

## Instalando o SO pfSense

### Etapa 1 - Habilitando o modo CSM no ODYSSEY - X86J41x5

Conecte seu USB inicializável, monitor e teclado ao ODYSSEY - X86J41x5 e ligue-o. Durante a inicialização, pressione repetidamente a tecla **`DEL`** para entrar na tela de configuração. Navegue até **`Advanced`** -> **`CSM Support`** e pressione Enter para habilitá-lo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg" /></div>

### Etapa 2 - Instalar o SO

Reinicie seu ODYSSEY - X86J41x5 e pressione repetidamente **`F7`** para entrar na tela do gerenciador de boot. Selecione o USB inicializável (Installer) e pressione Enter.

**Nota:** Lembre-se de escolher aquele que contém a imagem ISO do pfSense.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" /></div>

### Etapa 3 - Processo de instalação

Uma tela de boot como a acima deve aparecer. Pressione `Enter` para selecionar Boot Multi User (pfSense Installer).

<div>
  <div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSenseBIOS.png" /></div><br />
</div>

Entre no instalador e pressione `Enter` para **aceitar**.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-1.png" /></div>

Um menu de opções deverá aparecer como a seguir, selecione **Install** e pressione `Enter`.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-2.png" /></div>

Agora, escolha o layout de teclado correto para o seu teclado, ou simplesmente selecione **Continue with default keymap** e pressione `Enter`.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-3.png" /></div>

Aqui você pode escolher Auto para instalar o pfSense automaticamente no ODYSSEY-X86J41x5, mas é melhor usar **Manual** para escolher exatamente onde você quer instalar o pfSense.

**Nota:** Neste tutorial, o pfSense é instalado em um pendrive USB por conveniência. Portanto, esse é outro bom motivo para escolher **Manual** em vez de Auto.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-4.png" /></div>

Aqui você pode ver todos os discos rígidos, bem como as partições. Escolha o disco rígido no qual você deseja instalar o pfSense. Selecione o disco rígido usando as setas do teclado. Aqui, `da1` é meu segundo pendrive USB e será usado para instalar o pfSense. Selecione **Auto** aqui para particionar automaticamente o pfSense neste disco rígido.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-5.png" /></div>

No disco rígido correto, selecione **OK**.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-6.png" /></div>

Agora o processo de instalação será iniciado.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-7.png" /></div>

Após a instalação, a seguinte janela aparecerá, selecione **No**.

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-8.png" /></div>

Selecione **Reboot** e o pfSense será instalado com sucesso!

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-9.png" /></div>

## Configurações do pfSense

Reinicie o ODYSSEY-X86J41x5 e escolha o disco rígido correto para inicializar o SO pfSense. Conecte o cabo Ethernet a uma das portas Ethernet do ODYSSEY-X86J41x5. O pfSense deve inicializar corretamente e mostrar a seguinte tela.

**Nota:** Se você ver que a LAN já está configurada, pode escolher **`1`** para atribuir interfaces e escolher a porta correta para **WAN** e remover a **LAN**. Por exemplo, na imagem abaixo, a LAN foi removida por enquanto.

Junto com a **WAN**, você deverá ver um IP atribuído ao dispositivo, e este IP será usado depois. Agora você pode tentar acessar o Web GUI usando outro PC conectado na mesma rede!

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-config-1.png" /></div>

### Alterando o protocolo da WebGUI do pfSense (opcional)

Por alguns motivos, o pfSense usa o protocolo https para o Web GUI e isso pode causar falha ao fazer login no Web GUI. Se você não conseguir fazer login no Web GUI, siga isto para mudar o protocolo `https` para o protocolo `http`.

Escolha **`8`** para entrar no shell do pfSense. Digite o seguinte para configurar:

```sh
viconfig
```

Um arquivo de configuração como mostrado irá aparecer; encontre a sessão `<webgui>` e mude o protocolo `https` para `http`.

**Nota:** isto está usando o editor vim, use a tecla **x** do teclado para apagar. Em seguida, pressione **Esc** e digite `:wq!` para salvar, sair e aplicar as alterações.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-config-2.png" /></div>

Agora, tente fazer login no Web GUI do pfSense usando o endereço IP novamente.

## Configurações do Web GUI do pfSense

Agora você pode fazer login no Web GUI do pfSense a partir de outro PC usando o endereço IP mostrado antes.

**Nota:** o login padrão é **`admin`** e a senha padrão é **`pfsense`**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/WebGUI.png" /></div>

Agora você pode gerenciar facilmente o seu pfSense em execução no ODYSSEY-X86J41x5!

### Instalando pacotes

Para instalar pacotes, você pode simplesmente navegar até **System** -> **Package manager** e procurar pelos pacotes que desejar!

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/packages.png" /></div><br />
</div>

*Para mais informações sobre o pfSense, visite também o [Fórum oficial do pfSense](https://forum.netgate.com/)!*

## Recursos

Outras aplicações úteis:

- [Primeiros passos com pfSense](https://www.pfsense.org/getting-started/)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
