---
description: Otimizando o desenvolvimento web, a dupla perfeita - Linkstar e WordPress
title: Otimizando o desenvolvimento web, a dupla perfeita - Linkstar e WordPress
keywords:
  - LinkStar
  - Primeiros passos
  - WordPress
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /wordpress_linkstar
last_update:
  date: 6/8/2023
  author: Kasun Thushara
createdAt: '2023-06-08'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/wordpress_linkstar/
---
# Otimizando o desenvolvimento web A dupla perfeita - Linkstar e WordPress

Bem-vindo a este wiki informativo que irá guiá-lo pelo processo de instalação do WordPress usando Docker e como acessar o painel do WordPress. Aproveite o poder transformador do Linkstar enquanto você personaliza seu site em localhost, cativando clientes e impulsionando as vendas. Prepare-se para experimentar um crescimento, eficiência e capacidade técnica incomparáveis com os recursos de ponta do Linkstar. Dê hoje o primeiro passo rumo a um sucesso sem precedentes.

## O que é Docker?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker.png" alt="pir" width="200" height="auto"/></p>

[Docker](https://docs.docker.com/) é uma plataforma de código aberto que permite aos desenvolvedores automatizar a implantação e o gerenciamento de aplicativos dentro de contêineres leves e isolados. Os contêineres são unidades autocontidas que empacotam um aplicativo junto com suas dependências, bibliotecas e arquivos de configuração, permitindo que ele seja executado de forma consistente em diferentes ambientes. O Docker simplifica o processo de criação, distribuição e execução de aplicativos, tornando mais fácil desenvolver e implantar software de maneira consistente e reproduzível. Com o Docker, os desenvolvedores podem encapsular seus aplicativos e garantir que eles sejam executados sem problemas em diferentes sistemas operacionais e infraestruturas, tornando-o uma ferramenta inestimável para criar aplicativos portáteis e escaláveis, otimizar fluxos de trabalho de desenvolvimento e permitir uma colaboração eficiente entre os membros da equipe.

## O que é Portainer?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/pontainer-bg.png" alt="pir" width="200" height="auto"/></p>

[Portainer](https://www.portainer.io/) é uma interface de gerenciamento poderosa e intuitiva, de código aberto, projetada especificamente para Docker. Com sua GUI baseada na web e fácil de usar, o Portainer simplifica a implantação e a administração de contêineres, imagens, redes e volumes do Docker. Ele oferece uma representação visual do ambiente de contêiner, permitindo que os usuários criem, iniciem, parem e removam contêineres com apenas alguns cliques. Monitorar o uso de recursos, visualizar logs e acessar terminais de contêiner se torna algo simples dentro da interface do Portainer. Além disso, o Portainer oferece controle de acesso baseado em função, fornecendo controle detalhado sobre os privilégios dos usuários. Seja você um iniciante ou um usuário experiente de Docker, o Portainer é uma ferramenta inestimável que simplifica o gerenciamento de contêineres, tornando-o acessível e eficiente para todos.

## O que é WordPress?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/wordpress.png" alt="pir" width="200" height="auto"/></p>

[WordPress](https://wordpress.com/) é um sistema de gerenciamento de conteúdo (CMS) de código aberto, popular e amplamente utilizado, que alimenta milhões de sites em todo o mundo. Ele fornece uma interface amigável e um vasto ecossistema de temas, plugins e extensões que permitem aos usuários criar e personalizar seus sites com facilidade. Com o WordPress, você pode publicar e gerenciar facilmente vários tipos de conteúdo, incluindo postagens de blog, páginas, imagens e multimídia. Sua natureza flexível e extensível o torna adequado para uma ampla variedade de sites, desde blogs simples até complexas plataformas de comércio eletrônico. Seja você um iniciante ou um usuário experiente, o WordPress oferece uma plataforma robusta e versátil para construir e gerenciar sua presença online.

## Configure o ambiente Docker no roteador LinkStar OpenWRT

Por padrão, a instalação do Docker no LinkStar possui uma capacidade de armazenamento em torno de 250 MB, o que pode não ser suficiente para instalar imagens. Portanto, precisamos alocar mais espaço para o Docker a fim de atender às nossas necessidades. Da mesma forma que no [Plex media server WiKi](https://wiki.seeedstudio.com/pt-br/plex_media_server/) você precisa seguir as etapas. Se você já fez isso, pule esta etapa.

**Observação:** Para isso, certifique-se de seguir o guia [Set up the docker environment on the linkstar openwrt router](https://wiki.seeedstudio.com/pt-br/plex_media_server/#set-up-the-docker-environment-on-the-linkstar-openwrt-router) antes de prosseguir com este guia.

## Instalar o contêiner Portainer

### Etapa 1: Abra o Putty e faça SSH para o terminal OpenWrt

Para iniciar o processo de instalação, abra o Putty e estabeleça uma conexão SSH com o terminal OpenWrt. Insira os seguintes detalhes:

:::note

Username: root

Password: password

:::

### Etapa 2: Instalar o Portainer

Para isso, use este comando.

```sh
docker pull portainer/portainer
```

Em seguida, digite o seguinte comando no terminal

```sh
docker run -d -p 9000:9000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer1.PNG" alt="pir" width="600" height="auto"/></p>

 Você poderá observar o contêiner em execução com a interface LuCi operando em Docker-Container. Você pode ver que o número da porta é 9000.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer2.PNG" alt="pir" width="600" height="auto"/></p>

### Etapa 3: Acessar o Portainer

Abra o navegador da web e insira o seguinte endereço: **192.168.100.1:9000**.

Isso o levará para a página inicial do Portainer. Para prosseguir, basta informar o nome de usuário e a senha desejados. Em seguida, clique no botão create user

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer3.PNG" alt="pir" width="600" height="auto"/></p>

## Instalar o WordPress

### Etapa 1: Criar template personalizado da imagem do WordPress

Na página inicial do Portainer, navegue até a seção "App Templates". Role para baixo até localizar o template do WordPress. Quando encontrá-lo, clique em "Copy as Custom" para criar uma configuração personalizada para sua instalação do WordPress. Isso permitirá que você ajuste as configurações e opções de acordo com seus requisitos específicos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer4.PNG" alt="pir" width="600" height="auto"/></p>

### Etapa 2: Modificar o template

Ao clicar em "Copy as Custom" para o template do WordPress, será apresentado um formulário que exige que você forneça um título e uma descrição para sua configuração personalizada. Preencha os campos correspondentes com um título e uma descrição adequados, que representem com precisão o propósito e a natureza da sua instalação do WordPress.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer5.PNG" alt="pir" width="600" height="auto"/></p>

Abaixo, você encontrará o script docker-compose.yml para o WordPress. Esse arquivo desempenha um papel crucial na definição e configuração da aplicação WordPress em um ambiente Docker. Ele permite especificar uma variedade de parâmetros, incluindo imagens de contêiner, variáveis de ambiente, configurações de rede, mapeamentos de volumes e dependências de serviços.

Ao definir o estado desejado da aplicação no arquivo docker-compose.yml, o Docker pode criar, iniciar e gerenciar automaticamente os contêineres interconectados. Isso garante implantações consistentes e reproduzíveis em vários ambientes. O script docker-compose.yml atua como um blueprint para orquestrar os contêineres e suas configurações, permitindo gerenciar e escalar facilmente aplicações complexas com eficiência e facilidade.

**Em Services >>db>>image altere para:**

```sh
mysql/mysql-server:8.0
```

:::note

Você pode alterar outros parâmetros como MYSQL_USER, MYSQL_PASSWORD etc. Mas eu mantenho como está

:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer8.PNG" alt="pir" width="600" height="auto"/></p>

Então você pode encontrar **Create custom template** na parte inferior da página e clicar nele.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer9.PNG" alt="pir" width="600" height="auto"/></p>

Em seguida, você será redirecionado para uma página como esta com o nome do seu template personalizado. E basta um clique nele.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer10.PNG" alt="pir" width="600" height="auto"/></p>

Depois você será redirecionado para uma página como esta e pressione **Deploy the Stack**. Aguarde alguns minutos para a implantação.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer11.PNG" alt="pir" width="600" height="auto"/></p>

Em seguida, você será redirecionado para uma página como esta. Você pode ver sua lista de stacks. Clique na stack que você criou.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer12.PNG" alt="pir" width="600" height="auto"/></p>

Agora você pode ver que dois contêineres estão em execução e o número da porta do WordPress é 49153.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer13.PNG" alt="pir" width="600" height="auto"/></p>

## Acessar o WordPress

Em seguida, abra o navegador da web e digite o endereço do roteador Linkstar e a porta. ou seja **192.168.100.1:49153**
Você pode ver a página inicial :)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer15.PNG" alt="pir" width="600" height="auto"/></p>

Ao pressionar o botão Continue você verá um formulário para preencher. Depois de informar Título, Username, password, email você poderá acessar o painel.

Aqui está o painel.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer16.PNG" alt="pir" width="600" height="auto"/></p>

A hospedagem local de sites no Linkstar oferece uma infinidade de benefícios para diversos negócios, incluindo **cafés, pizzarias, instituições** e muito mais. Ao hospedar seus sites localmente, esses estabelecimentos podem reduzir o tempo de fila e melhorar a experiência geral do cliente. Com um site hospedado localmente, os clientes podem **acessar facilmente os cardápios, fazer pedidos, realizar reservas ou agendar compromissos, tudo a partir da comodidade de seus próprios dispositivos. Esse processo simplificado economiza tempo tanto para os clientes quanto para a equipe, resultando em tempos de espera mais curtos e maior eficiência**. Além disso, um site hospedado localmente abre oportunidades para **publicidade eficaz, permitindo que as empresas promovam suas ofertas mais recentes, promoções ou eventos diretamente para seu público-alvo**. Ao aproveitar o poder do Linkstar, as empresas podem criar uma presença online contínua e envolvente, atraindo clientes de forma eficaz e melhorando sua satisfação geral.

## Recursos

- **[Web Page]** [Docker Offficial Documentation](https://docs.docker.com)

- **[Web Page]** [Docker Hub](https://hub.docker.com)

- **[Web Page]** [Portainer](https://www.portainer.io/)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
