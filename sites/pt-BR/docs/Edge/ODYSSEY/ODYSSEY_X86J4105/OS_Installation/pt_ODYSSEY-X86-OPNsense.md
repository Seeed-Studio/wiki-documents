---
description: ODYSSEY - X86J4105
title: Instalação do OPNsense
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ODYSSEY-X86-OPNsense
last_update:
  date: 01/03/2023
  author: w0x7ce
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86-OPNsense/
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/1.png" alt="pir" width={1000} height="auto" /></p>

Este guia explica como transformar o seu ODYSSEY-X86 em um roteador e firewall por software instalando o OPNsense. Vamos começar!

## O que é OPNsense?

[OPNsense](https://opnsense.org) é um software de firewall e roteamento de código aberto baseado no sistema operacional FreeBSD, desenvolvido pela Deciso. É um fork do pfSense, que por sua vez foi derivado do m0n0wall. Ele foi lançado em janeiro de 2015. OPNsense possui uma interface web (GUI) e oferece suporte à plataforma x86-64. Ele não só pode atuar como um firewall, mas também possui recursos de controle de tráfego (traffic shaping), balanceamento de carga e rede privada virtual (VPN). Outros recursos também podem ser adicionados por meio de plugins.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/25.png" alt="pir" width={300} height="auto" /></p>

## Pré-requisitos

- [ODYSSEY-X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)
- Unidade flash USB (>1GB)
- 2 cabos Ethernet e um roteador com acesso à Internet
- Mídia de armazenamento externa (se você usar o ODYSSEY-X86 com eMMC integrado, também pode usá-lo)

  - NVMe SSD ou
  - SATA SSD ou
  - SATA HDD ou
  - Cartão Micro-SD ou
  - Unidade flash USB (>1GB)

## Primeiros Passos

Agora vamos passar pelo processo de instalação do OPNsense no ODYSSEY-X86.

### Gravar a imagem do OPNsense em uma unidade flash USB

- **Passo 1.** Acesse [este link](https://opnsense.org/download) para abrir a página de download do OPNsense

- **Passo 2.** Selecione **amd64** como Architecture, **vga** como o tipo de imagem, escolha **any** em Mirror Location e clique em **Download**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/2.png" alt="pir" width={550} height="auto" /></p>

- **Passo 3.** Extraia o arquivo **.bz2** para obter um arquivo **.img**

- **Passo 4.** Baixe e instale o **BalenaEtcher** de acordo com o seu sistema operacional acessando [este link](https://www.balena.io/etcher) e abra-o

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/3.jpg" alt="pir" width={1000} height="auto" /></p>

- **Passo 5.** Conecte uma unidade flash USB ao seu PC, clique em **Flash from file**, selecione o arquivo baixado/ extraído anteriormente, clique em **Select target**, escolha a unidade flash USB conectada e clique em **Flash**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/4.png" alt="pir" width={1000} height="auto" /></p>

### Inicializar o OPNsense a partir da unidade USB e instalar na unidade externa

- **Passo 1.** Conecte a unidade flash USB na qual gravamos a imagem do OPNsense anteriormente a uma das portas USB do ODYSSEY-X86

- **Passo 2.** Conecte uma unidade de armazenamento externa para instalar o OPNsense. O ODYSSEY-X86 possui várias opções de armazenamento, tais como:

  - NVMe SSD
  - SATA SSD
  - SATA HDD
  - Cartão Micro-SD
  - Unidade flash USB (>1GB)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png" alt="pir" width={650} height="auto" /></p>

- **Passo 3.** Ligue o ODYSSEY-X86 e pressione continuamente a tecla **DELETE** para entrar no BIOS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/5.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 4.** Vá até a aba **Boot**, selecione **Boot Option #1** e selecione **UEFI: USB, Partition 1**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/6.jpg" alt="pir" width={1000} height="auto" /></p>

- **Passo 5.** Vá até a aba **Save & Exit**, selecione **Save Changes and Reset** e selecione **Yes** na janela pop-up

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/8.jpg" alt="pir" width={1000} height="auto" /></p>

Agora o ODYSSEY-X86 será inicializado a partir da unidade flash USB no OPNsense e você verá a seguinte saída se a inicialização for bem-sucedida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/9.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 6.** Digite **installer** no prompt **login:** e digite **opnsense** como senha para entrar na página de instalação

- **Passo 7.** Selecione **Continue with default keymap** (opção padrão) e pressione **ENTER**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/10.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 8.** Selecione **Install (UFS)** (opção padrão) e pressione **ENTER**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/11.png" alt="pir" width={1000} height="auto" /></p]

- **Passo 9.** Selecione a unidade externa conectada e pressione **ENTER**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/12.png" alt="pir" width={1000} height="auto" /></p>

Agora ele começará a instalar o OPNsense na unidade externa conectada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/13.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 10.** Quando a instalação estiver concluída, será solicitado que você altere **the root password**. Isso é **recomendado**. Pressione **ENTER** na janela e altere a senha de root

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/14.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/15.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 11.** Selecione **Complete Install** e pressione **ENTER** para reiniciar

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/16.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 12.** Quando o sistema começar a inicializar novamente, remova a unidade flash USB, entre no BIOS, selecione a unidade externa conectada como dispositivo de boot e inicialize novamente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/17.png" alt="pir" width={1000} height="auto" /></p>

Agora o ODYSSEY-X86 será inicializado a partir da unidade externa no OPNsense e você verá a seguinte saída se a inicialização for bem-sucedida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/9.png" alt="pir" width={1000} height="auto" /></p>

### Configurar o OPNsense

#### Alterar o endereço IP da interface LAN

Por padrão, o OPNsense atribuirá à interface LAN o endereço **192.168.1.1** com o **servidor DHCP** habilitado. Se o endereço IP do seu roteador também for 192.168.1.1 (a maioria dos roteadores possui esse IP), você pode querer alterar o IP da LAN do OPNsense. Portanto, precisamos fazer isso primeiro.

No entanto, se o seu roteador tiver um endereço IP diferente de 192.168.1.1, você pode pular esta seção e ir para a **seção de Configuração de Hardware**, que é a seção após esta

- **Passo 1.** Faça login na **conta root** digitando **root** no prompt **login:** seguido da senha que você especificou anteriormente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/18.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 2.** Configure da seguinte forma

  - Digite **2** para definir o endereço IP da interface
  - Digite **1** para selecionar LAN como a interface a ser configurada
  - Digite **N** para NÃO configurar o endereço IPv4 da interface LAN via DHCP
  - Digite **192.168.2.1** como o novo endereço IPv4 da LAN (você pode inserir qualquer endereço IP de sua escolha aqui)
  - Digite **24** como a nova contagem de bits da sub-rede IPv4 da LAN
  - Pressione **ENTER** para configurar para LAN, não para WAN
  - Pressione **ENTER** para pular a configuração do endereço IPv6 da interface LAN via rastreamento WAN
  - Digite **y** para habilitar o servidor DHCP na LAN
  - Digite **192.168.2.1** como o endereço inicial da faixa de endereços de cliente IPv4
  - Digite **192.168.2.254** como o endereço final da faixa de endereços de cliente IPv4
  - Digite **N** para NÃO alterar o protocolo da interface web GUI de HTTPS para HTTP
  - Digite **N** para NÃO gerar um novo certificado web GUI autoassinado
  - Digite **N** para NÃO restaurar os padrões de acesso à web GUI

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/20.png" alt="pir" width={1000} height="auto" /></p>

Depois disso, você verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/21.png" alt="pir" width={1000} height="auto" /></p>

#### Configuração de Hardware

Conecte as 2 portas Ethernet do ODYSSEY-X86 a um PC (cliente) e a um roteador por meio de 2 cabos Ethernet da seguinte forma

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/22.png" alt="pir" width={1000} height="auto" /></p>

Depois disso, seu PC poderá se conectar à Internet por meio do novo roteador OPNsense configurado!

#### GUI do OPNsense

Digite **192.168.2.1** em um navegador web e faça login na interface web GUI do OPNsense inserindo os dados da conta root especificados anteriormente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/24.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/1.png" alt="pir" width={1000} height="auto" /></p>

Aqui você pode configurar muitas opções de acordo com suas necessidades consultando a [documentação oficial do OPNsense](https://docs.docker.com)!

## Comunidade

<iframe width={560} height={315} src="https://www.youtube.com/embed/_IzyJTcnPu8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## Recursos

- **[Web Page]** [Documentação Oficial do OPNsense](https://docs.docker.com)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
