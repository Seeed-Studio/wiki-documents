---
description: ODYSSEY - X86J41x5
title: Instalação do Servidor de Mídia Jellyfin
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Jellyfin-on-Docker-Ubuntu-X86
last_update:
  date: 01/03/2023
  author: w0x7ce
createdAt: '2023-01-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Jellyfin-on-Docker-Ubuntu-X86/
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/thumb.png" alt="pir" width={1000} height="auto" /></p>

Este guia explica como configurar o Jellyfin Media Server como um contêiner Docker instalado em um sistema Ubuntu executando no [ODYSSEY-X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html). Ao usar o Jellyfin, você pode transmitir todos os seus arquivos de mídia locais de qualquer lugar do mundo!

## O que é Docker?

[Docker](https://docs.docker.com/) é uma plataforma aberta para desenvolver, enviar e executar aplicações. O Docker fornece a capacidade de empacotar e executar uma aplicação em um ambiente fracamente isolado chamado contêiner. O isolamento e a segurança permitem que você execute muitos contêineres simultaneamente em um determinado host. Os contêineres são leves e contêm tudo o que é necessário para executar a aplicação, portanto você não precisa depender do que está instalado no host no momento. Você pode compartilhar contêineres facilmente enquanto trabalha e ter certeza de que todos com quem você compartilha recebem o mesmo contêiner que funciona da mesma maneira.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/vertical-logo-monochromatic.png" alt="pir" width={200} height="auto" /></p>

## O que é Jellyfin Media Server?

[Jellyfin Media Server](https://www.plex.tv) é uma ferramenta que permite acessar as músicas, fotos e vídeos armazenados em um dispositivo com muitos outros dispositivos. Você pode instalar o software Jellyfin em um computador Windows, Mac ou Linux, em um dispositivo de armazenamento conectado à rede (NAS) ou até mesmo em um roteador. Você pode transmitir todos os seus arquivos de mídia armazenados no seu Jellyfin Media Server remotamente pela internet e acessá-los de qualquer lugar do mundo usando o app Jellyfin.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/23.png" alt="pir" width={300} height="auto" /></p>

## Primeiros Passos

Agora vamos passar pelo processo de executar o Jellyfin Media Server como um contêiner Docker instalado em um sistema Ubuntu.

### Instalar Ubuntu no X86

Siga [este wiki](https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-Installing-OS) para instalar o Ubuntu no ODYSSEY-X86. Você pode baixar o Ubuntu OS mais recente a partir [daqui](https://ubuntu.com/download/desktop).

### Instalar Docker no Ubuntu

- **Passo 1.** Atualize a lista de pacotes existente

```sh
sudo apt update
```

- **Passo 2.** Instale os pacotes de pré-requisitos necessários

```sh
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
```

- **Passo 3.** Adicione a chave GPG do repositório oficial do Docker ao seu sistema Ubuntu

```sh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

- **Passo 4.** Adicione o repositório Docker às fontes do APT

```sh
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
```

- **Passo 5.** Instale o Docker

```sh
sudo apt install docker-ce -y
```

- **Passo 6.** Verifique se o Docker está instalado e já em execução

```sh
sudo systemctl status docker
```

E você verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/1.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 7.** Por padrão, o comando docker só pode ser executado como usuário root ou por um usuário no grupo docker. Portanto, adicione seu nome de usuário ao grupo Docker

```sh
sudo usermod -aG docker ${USER}
```

- **Passo 8.** Aplique a nova associação de grupo

```sh
su - ${USER}
```

### Instalar Jellyfin Media Server no Docker

- **Passo 1.** Baixe a imagem de contêiner Jellyfin mais recente

```sh
docker pull jellyfin/jellyfin
```

- **Passo 2.** Crie armazenamento persistente para dados de configuração e cache

```sh
docker volume create jellyfin-config
docker volume create jellyfin-cache
```

- **Passo 3.** Crie uma pasta para salvar os arquivos de mídia

```sh
# for example
mkdir /home/username/movies
```

**Nota:** Aqui **username** deve ser substituído pelo nome de usuário no seu sistema Ubuntu

- **Passo 4.** Crie e execute um contêiner

```sh
docker run -d \
 --name jellyfin \
 --net=host \
 --volume jellyfin-config:/config \
 --volume jellyfin-cache:/cache \
 --mount type=bind,source=/path/to/media,target=/media \
 --restart=unless-stopped \
 jellyfin/jellyfin
```

**Nota:** Aqui **/path/to/media** é o diretório **/home/username/movies** que criamos antes

### Configuração Inicial do Jellyfin Media Server

- **Passo 1.** Digite o seguinte em um navegador web a partir do ODYSSEY-X86 ou de qualquer outro PC na mesma rede que o ODYSSEY-X86

```sh
<IP_address_of_ODYSSEY-X86>:8096
```

```sh
# for example:
192.168.1.133:8096
```

- **Passo 2.** Na página inicial de configuração do Jellyfin, selecione seu idioma preferido e clique em **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/2.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 3.** Digite um **Username**, **Password** para a conta de administrador e clique em **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/3.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 4.** Clique em **Add Media Library**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/4.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 5.** Escolha o **Content type** no menu suspenso e preencha o Display name. Aqui o Display name será o mesmo que o content type

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/5.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 6.** Clique no símbolo **+** ao lado de **Folders**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/6.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 7.** Clique na pasta **/media** dentro do contêiner Docker e clique em **OK**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/7.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/8.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 8.** Clique em **OK** novamente mantendo as outras configurações no padrão. Você pode alterar as outras configurações se preferir.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/9.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 9.** Clique em **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/10.png" alt="pir" width={1000} height="auto" /></p>

**Nota:** Antes de clicar em **Next**, você pode continuar adicionando outras bibliotecas de mídia, como séries de TV. Basta clicar em **Add Media Library** e repetir o processo

- **Passo 10.** Altere as configurações se quiser e clique em **Next** para as telas seguintes

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/11.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/12.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 11.** Finalmente clique em **Finish**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/13.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 12.** Faça login na conta de administrador que criamos antes

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/14.png" alt="pir" width={1000} height="auto" /></p>

E você será levado para a página inicial do Jellyfin!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/15.png" alt="pir" width={1000} height="auto" /></p>

### Adicionar Filmes / Séries de TV

Agora vamos adicionar alguns filmes para que possamos reproduzi-los no Jellyfin

- **Passo 1.** Copie e cole todos os seus arquivos de filmes no diretório (/home/username/movies) que criamos antes

- **Passo 2.** Volte para a página inicial do Jellyfin, clique nos 3 pontos e selecione **Refresh metadata**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/16.png" alt="pir" width={400} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/17.png" alt="pir" width={400} height="auto" /></p>

- **Passo 3.** Mantenha o **Refresh mode** padrão e clique em **Refresh**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/18.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 4.** Clique em **Movies**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/20.png" alt="pir" width={1000} height="auto" /></p>

E finalmente você verá todos os seus filmes carregados

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/19.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 5.** Clique em um filme e clique no botão **Play** para começar a reproduzir o filme

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/21.png" alt="pir" width={1000} height="auto" /></p>

### Reproduzir a Mídia nos Aplicativos Cliente Jellyfin

Agora você pode usar os aplicativos Cliente Jellyfin para visualizar toda a sua mídia dentro do Jellyfin Media Server. O app Jellyfin pode ser instalado em vários dispositivos, como celulares, PCs, TVs inteligentes etc...

Visite [este link](https://jellyfin.org/clients) para ver os dispositivos suportados para que você possa instalar o app Jellyfin neles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/22.png" alt="pir" width={1000} height="auto" /></p>

Agora você pode navegar até o aplicativo Cliente Jellyfin, fazer login e transmitir toda a sua mídia armazenada no Jellyfin Media Server!

### Conectar Armazenamento Externo para Armazenar a Mídia

Você também pode conectar unidades de armazenamento externas para expandir o armazenamento no X86 para que possamos armazenar toda a nossa mídia.

ODYSSEY - X86J4125 possui várias opções de armazenamento, tais como:

- SSD PCIe
- SSD SATA
- HDD SATA
- Cartão Micro-SD
- Unidades Flash USB

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png" alt="pir" width={650} height="auto" /></p>

Você pode conectar qualquer armazenamento externo de sua escolha consultando as opções de armazenamento acima.

## Transforme uma TV Comum em uma Smart TV para Executar o Jellyfin

É muito conveniente transmitir mídia, como filmes, do seu Jellyfin Media Server usando uma Smart TV em casa. Você precisa de uma smart TV porque o aplicativo Jellyfin pode ser instalado se a TV tiver uma loja de aplicativos. Porém, se você tiver uma TV comum, poderá transformá-la em uma smart TV usando um Raspberry Pi!

Você pode seguir [este link](https://pimylifeup.com/raspberry-pi-android-tv-lineageos) para saber mais!

## Comunidade

<iframe width={560} height={315} src="https://www.youtube.com/embed/4VkY1vTpCJY" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## Recursos

- **[Web Page]** [Documentação Oficial do Docker](https://docs.docker.com)

- **[Web Page]** [Docker Hub](https://hub.docker.com)

- **[Web Page]** [Jellyfin Media Server](https://jellyfin.org)

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
