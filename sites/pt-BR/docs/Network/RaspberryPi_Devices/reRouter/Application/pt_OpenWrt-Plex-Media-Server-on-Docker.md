---
description: Plex Media Server em Docker
title: Plex Media Server
keywords:
  - Sorftware OpenWrt
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /OpenWrt-Plex-Media-Server-on-Docker
last_update:
  date: 1/13/2023
  author: jianjing Huang
createdAt: '2023-01-13'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/OpenWrt-Plex-Media-Server-on-Docker/
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/thumb-1.png" alt="pir" width="1000" height="auto"/></p>

Este guia explica como configurar o Plex Media Server como um contêiner Docker no firmware Seeed OpenWrt. Usando o Plex Media Server, você pode transmitir todos os seus arquivos de mídia locais de qualquer lugar do mundo! Aqui o OpenWrt pode ser executado na [ODYSSEY – X86 Board](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html) ou na [Dual Gigabit Ethernet Carrier Board for Raspberry Pi Compute Module 4](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html).

**Nota:** Certifique-se de seguir o [guia de primeiros passos do OpenWrt](https://wiki.seeedstudio.com/pt-br/OpenWrt-Getting-Started) antes de prosseguir com este guia.

## O que é Docker?

[Docker](https://docs.docker.com/) é uma plataforma aberta para desenvolver, enviar e executar aplicações. O Docker fornece a capacidade de empacotar e executar uma aplicação em um ambiente isolado de forma flexível chamado contêiner. O isolamento e a segurança permitem que você execute muitos contêineres simultaneamente em um determinado host. Os contêineres são leves e contêm tudo o que é necessário para executar a aplicação, portanto você não precisa depender do que está atualmente instalado no host. Você pode facilmente compartilhar contêineres enquanto trabalha e ter certeza de que todos com quem você compartilha recebem o mesmo contêiner que funciona da mesma maneira.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/vertical-logo-monochromatic.png" alt="pir" width="200" height="auto"/></p>

## O que é Plex Media Server?

[Plex Media Server](https://www.plex.tv) é uma ferramenta que permite acessar a música, fotos e vídeos armazenados em um dispositivo a partir de muitos outros dispositivos. Você pode instalar o software Plex Media Server em um computador Windows, Mac ou Linux, em um dispositivo de armazenamento conectado à rede (NAS) ou até mesmo em um roteador. Você pode transmitir todos os seus arquivos de mídia armazenados no seu Plex Media Server remotamente pela internet e acessá-los de qualquer lugar do mundo usando o app Plex.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/Plex_logo.png" alt="pir" width="200" height="auto"/></p>

## Plex Media Server em Docker

Agora vamos passar pelo processo de executar o Plex Media Server como um contêiner Docker no OpenWrt.

### Criar uma conta Plex

Antes de tudo, precisamos ter uma conta Plex

- **Passo 1.** Clique [neste link](https://www.plex.tv) para visitar o site do Plex

- **Passo 2.** Clique em **Sign Up** e crie uma nova conta Plex

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-sign-up.jpg" alt="pir" width="1000" height="auto"/></p>

### Conectar armazenamento externo para armazenar a mídia

Agora precisamos conectar unidades de armazenamento externo para expandir o armazenamento nas placas X86 e CM4, para que possamos armazenar toda a nossa mídia.

A ODYSSEY - X86J4125 possui várias opções de armazenamento, tais como:

- PCIe SSD
- SATA SSD
- SATA HDD
- Cartão Micro-SD
- Unidades Flash USB

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png" alt="pir" width="650" height="auto"/></p>

A Dual Gigabit Ethernet Carrier Board for Raspberry Pi CM4 possui várias opções de armazenamento, tais como:

- Unidades Flash USB
- Cartão Micro-SD
- Expansão USB via conector de 9 pinos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/cm4-storage-2.jpg" alt="pir" width="1000" height="auto"/></p>

Você pode conectar qualquer armazenamento externo de sua escolha consultando as opções de armazenamento acima.

### Montar o armazenamento externo no OpenWrt

Depois de conectar um dispositivo de armazenamento externo, precisamos montá-lo para que possamos usá-lo

- **Passo 1.** Abra um navegador da web e faça login no dispositivo OpenWrt

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/Luci.png" alt="pir" width="1000" height="auto"/></p>

**Nota:** Anteriormente configuramos **192.168.2.1** como o endereço IP para fazer login no OpenWrt. Portanto, você pode digitar este endereço IP no navegador

- **Passo 2.** Navegue até `System > Disk Man` e você verá as unidades de armazenamento conectadas ao dispositivo OpenWrt

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/Disk-man-1.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 3.** Sob a unidade de armazenamento conectada, clique em **EDIT**

- **Passo 4.** Em **Partitions Info**, remova todas as partições clicando em **REMOVE** ao lado da partição

- **Passo 5.** Em **Device Info**, selecione **GPT** para a **Partition Table**

- **Passo 6.** Em **Partitions Info**, clique em **NEW** para criar uma partição

- **Passo 7.** Na partição recém-criada, clique em **FORMAT**, escolha **ext4** e clique em **FORMAT** para formatar a partição

- **Passo 8.** Navegue novamente até `System > Disk Man`

- **Passo 9.** Em **Mount Point**, escolha a partição que criamos antes

- **Passo 10.** Deixe **File system** como **auto**

- **Passo 11.** Em **Mount Options** digite **rw** para permitir acesso de leitura e escrita a esta partição

- **Passo 12.** Em **Mount Point** digite **/plex** e clique em **MOUNT** para montar a partição

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/disk-mount-1.png" alt="pir" width="1000" height="auto"/></p>

### Criar o contêiner Docker do Plex Media Server

Agora vamos criar o contêiner Docker do Plex Media Server

- **Passo 1.** Na interface Luci do OpenWrt, navegue até `Docker > Images`

- **Passo 2.** Em **Pull Image** digite **linuxserver/plex** e clique em **PULL** para baixar a imagem Docker do Plex Media Server

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-image.png" alt="pir" width="1000" height="auto"/></p>

**Nota:** Aguarde alguns segundos até que a imagem seja baixada

- **Passo 3.** Navegue até `Docker > Containers` e clique em **ADD**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/docker-add.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 4.** Clique em **COMMAND LINE** e insira o seguinte:

```sh
docker run \
-d \
--name plex \
--network=host \
-e TZ=<enter timezone> \
-e PLEX_CLAIM=<enter claimToken> \
-v /plex/database:/config \
-v /plex/temp:/transcode \
-v /plex/media:/data \
linuxserver/plex
```

**Nota:** Para obter o **timezone**, visite [este link](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) e copie o **TZ database name**. Para obter o **claimToken**, visite [este link](#www.plex.tv/claim) e copie/cole o token.

- **Passo 5.** Por fim, clique em **SUBMIT**

### Executar e configurar o Plex Media Server

- **Passo 1.** Agora você verá o contêiner listado. Marque a **checkbox** e clique em **START** para executar o contêiner

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/docker-start.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 2.** Digite **192.168.2.1:32400/web** para abrir a configuração inicial do Plex Media Server

**Nota:** 32400 é a porta onde o contêiner docker do Plex está em execução.

- **Passo 3.** Digite um **Server name** e clique em **NEXT**

- **Passo 4.** Em **Organize Media**, clique em **ADD LIBRARY**

- **Passo 5.** Selecione o **library type** e clique em **NEXT**

- **Passo 6.** Clique em **BROWSE FOR MEDIA FOLDER**, selecione a pasta **data** e clique em **ADD LIBRARY**

**Nota:** Como configuramos anteriormente, a pasta **data** dentro do contêiner plex está vinculada à pasta **/plex/media** no OpenWrt

- **Passo 7.** Clique em **NEXT** e depois em **DONE** para concluir a configuração inicial.

Agora você verá a interface do usuário do Plex Media Server

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-ui.png" alt="pir" width="1000" height="auto"/></p>

### Montar o diretório Plex no PC e transferir a mídia

Depois que o armazenamento externo foi montado, agora precisamos montar o diretório **/plex** no PC para que ele possa ser acessado facilmente.

- **Passo 1.** Na interface Luci do OpenWrt, navegue até `Services > Network Shares`

- **Passo 2.** Em **Shared Directories**, clique em **ADD**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/network-shares.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 3.** Preencha a linha de acordo com o seguinte:

        - name: Plex 
        - Path: /plex
        - Browse-able: marcado
        - Force Root: marcado
        - Allow guests: marcado
        - Create mask: 0666
        - Directory mask: 0777

**Nota:** Aqui o campo **name** pode ser qualquer coisa de sua escolha. **Force Root** é habilitado para permitir acesso root a esta pasta.

- **Passo 4.** Clique em **SAVE** e depois clique em **SAVE & APPLY**

- **Passo 5.** Vá para o **File Explorer** no PC e clique em **Network**

- **Passo 6.** Navegue até `OpenWrt > plex > media` e copie toda a mídia para dentro deste diretório

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/PC-shares.png" alt="pir" width="1000" height="auto"/></p>

### Reproduzir a mídia em aplicativos clientes Plex

Agora você pode usar os aplicativos clientes Plex para ver toda a sua mídia dentro do Plex Media Server. O app Plex pode ser instalado em vários dispositivos como celulares, PCs, TVs inteligentes, etc...

Visite [este link](https://www.plex.tv/media-server-downloads/#plex-app) para ver os dispositivos compatíveis e assim instalar o app Plex neles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-client.jpg" alt="pir" width="1000" height="auto"/></p>

Agora você pode navegar até o aplicativo cliente Plex, fazer login e transmitir todos os seus filmes, músicas, fotos e outras mídias armazenadas no Plex Media Server!

### Transformar uma TV comum em uma Smart TV para executar o Plex

É muito conveniente transmitir mídia, como filmes, do seu Plex Media Server usando uma Smart TV em casa. Você precisa de uma Smart TV porque o app Plex pode ser instalado se a TV tiver uma loja de aplicativos. No entanto, se você tiver uma TV comum, pode transformá-la em uma Smart TV usando um Raspberry Pi!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/rpi-tv.jpg" alt="pir" width="1000" height="auto"/></p>

Você pode seguir [este link](https://pimylifeup.com/raspberry-pi-android-tv-lineageos) para saber mais!

## Recursos

- **[Página da Web]** [Documentação Oficial do Docker](https://docs.docker.com)

- **[Página da Web]** [Docker Hub](https://hub.docker.com)

- **[Página da Web]** [Plex Media Server](https://www.plex.tv)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
