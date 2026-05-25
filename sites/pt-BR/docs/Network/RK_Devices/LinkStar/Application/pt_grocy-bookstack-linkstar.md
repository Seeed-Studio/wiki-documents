---
description: Um guia para integrar LinkStar, Grocy e BookStack no seu escritório
title: Um guia para integrar LinkStar, Grocy e BookStack no seu escritório
keywords:
  - LinkStar
  - Primeiros passos
  - Bookstack
  - Grocy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /grocy-bookstack-linkstar
last_update:
  date: 6/26/2023
  author: Kasun Thushara
createdAt: '2022-11-15'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/grocy-bookstack-linkstar/
---
# Assumindo o Controle: Soluções Self-Hosted para Gestão de Escritório com LinkStar, Grocy e BookStack

A integração do Grocy e do BookStack em um servidor de escritório self-hosted alimentado por um roteador LinkStar oferece uma solução convincente para operações eficientes e organizadas. Com o Grocy, as empresas podem gerenciar com eficiência seus mantimentos, listas de compras e tarefas, garantindo processos otimizados e redução de desperdícios. Por outro lado, o BookStack fornece uma plataforma de documentação centralizada que promove colaboração, compartilhamento de conhecimento e fácil acesso a informações importantes. Ao hospedar ambos os aplicativos no roteador LinkStar, as empresas ganham controle sobre seus dados, aumentam a segurança e eliminam a dependência de serviços externos. Essa configuração self-hosted capacita os escritórios a otimizar fluxos de trabalho, melhorar a produtividade e criar um ambiente de trabalho bem estruturado e produtivo. Nesta postagem de blog, vamos nos aprofundar na importância de integrar Grocy e BookStack em um servidor de escritório baseado em LinkStar, explorando os benefícios e mostrando como essa combinação revoluciona a gestão do escritório.

## O que é Docker?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker.png" alt="pir" width="200" height="auto"/></p>

[Docker](https://docs.docker.com/) é uma plataforma open-source que permite aos desenvolvedores automatizar a implantação e o gerenciamento de aplicativos dentro de containers leves e isolados. Containers são unidades autocontidas que empacotam um aplicativo juntamente com suas dependências, bibliotecas e arquivos de configuração, permitindo que ele seja executado de forma consistente em diferentes ambientes. O Docker simplifica o processo de criar, distribuir e executar aplicativos, tornando mais fácil desenvolver e implantar software de maneira consistente e reproduzível. Com o Docker, os desenvolvedores podem encapsular seus aplicativos e garantir que eles sejam executados sem problemas em diferentes sistemas operacionais e infraestruturas, tornando-o uma ferramenta inestimável para construir aplicativos portáteis e escaláveis, agilizar fluxos de trabalho de desenvolvimento e possibilitar colaboração eficiente entre membros da equipe.

## O que é Portainer?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/pontainer-bg.png" alt="pir" width="200" height="auto"/></p>

[Portainer](https://www.portainer.io/) é uma interface de gerenciamento open-source poderosa e intuitiva, projetada especificamente para Docker. Com sua GUI baseada na web e fácil de usar, o Portainer simplifica a implantação e administração de containers, imagens, redes e volumes Docker. Ele oferece uma representação visual do ambiente de containers, permitindo que os usuários criem, iniciem, parem e removam containers com apenas alguns cliques. Monitorar o uso de recursos, visualizar logs e acessar terminais de containers torna-se algo simples dentro da interface do Portainer. Além disso, o Portainer oferece controle de acesso baseado em função, fornecendo controle granular sobre privilégios de usuários. Seja você iniciante ou um usuário experiente de Docker, o Portainer é uma ferramenta valiosa que simplifica o gerenciamento de containers, tornando-o acessível e eficiente para todos.

## O que é BookStack?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstackicon.png" alt="pir" width="200" height="auto"/></p>

[BookStack](https://www.bookstackapp.com/) é uma plataforma open-source poderosa e fácil de usar, projetada para criar e gerenciar documentações e bases de conhecimento. Com sua interface intuitiva, o BookStack permite que equipes e organizações organizem e compartilhem informações com eficiência. Ele oferece uma estrutura hierárquica em que o conteúdo pode ser organizado em livros, capítulos e páginas, permitindo fácil navegação e recuperação de informações. O BookStack oferece suporte a edição de texto rico, permitindo que os usuários formatem e estilizem seu conteúdo de forma eficaz. Ele também oferece recursos como incorporação de imagens, controle de versões e ferramentas de colaboração, promovendo trabalho em equipe contínuo e gerenciamento de conhecimento eficiente. Seja para documentação interna, suporte ao cliente ou fins educacionais, o BookStack é uma solução versátil e amplamente utilizada que simplifica o processo de criação e manutenção de bases de conhecimento abrangentes.

## O que é Grocy?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy_logo.svg" alt="pir" width="200" height="auto"/></p>

[Grocy](https://grocy.info/) é uma aplicação web self-hosted e open-source que ajuda os usuários a gerenciar seus mantimentos, itens domésticos e tarefas. Ele fornece recursos para acompanhar o inventário de alimentos, criar listas de compras, gerenciar receitas e controlar datas de validade.

## Configurar o ambiente Docker no roteador LinkStar OpenWRT

Por padrão, a instalação do Docker no LinkStar tem uma capacidade de armazenamento em torno de 250MB, o que pode não ser suficiente para instalar imagens. Portanto, precisamos alocar mais espaço para o Docker a fim de atender às nossas necessidades. Da mesma forma que no [WiKi do servidor de mídia Plex](https://wiki.seeedstudio.com/pt-br/plex_media_server/), você precisa seguir etapas. Se você já fez isso, pule esta etapa.

**Nota:** Para isso, certifique-se de seguir o guia [Set up the docker environment on the linkstar openwrt router](https://wiki.seeedstudio.com/pt-br/plex_media_server/#set-up-the-docker-environment-on-the-linkstar-openwrt-router) antes de prosseguir com este guia.

## Instalar o container Portainer

Este tópico é discutido na integração do WordPress ao LinkStar. Portanto, você precisa seguir essas etapas se estiver instalando o Portainer pela primeira vez. Aqui está o link para [instalar o container Portainer](https://wiki.seeedstudio.com/pt-br/wordpress_linkstar/#install-portainer-container).

## Instalar BookStack

### Etapa 01: Criar uma nova stack

No contexto de uso de aplicativos, uma stack se refere a um conjunto de serviços relacionados. Portanto, nossa primeira etapa é estabelecer uma nova stack. Para fazer isso, navegue até a barra lateral e localize a opção **Stacks**. Clique nela e selecione **Add Stack** para continuar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack1.PNG" alt="pir" width="600" height="auto"/></p>

### Etapa 02: Instalando BookStack usando o editor web

Nesta etapa, você precisará fornecer um nome para a stack e copiar o seguinte texto em formato docker-compose para o editor web.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack2.PNG" alt="pir" width="600" height="auto"/></p>

```sh
---
version: "2"
services:
  bookstack:
    image: lscr.io/linuxserver/bookstack
    container_name: bookstack
    environment:
      - APP_URL=http://192.168.100.1:6875
      - DB_HOST=bookstack_db
      - DB_PORT=3306
      - DB_USER=bookstack
      - DB_PASS=yourdbpass
      - DB_DATABASE=bookstackapp
    volumes:
      - ./bookstack_app_data:/config
    ports:
      - 6875:80
    restart: unless-stopped
    depends_on:
      - bookstack_db
  bookstack_db:
    image: lscr.io/linuxserver/mariadb
    container_name: bookstack_db
    environment:
      - MYSQL_ROOT_PASSWORD=yourdbpass
      - TZ=Asia/Colombo
      - MYSQL_DATABASE=bookstackapp
      - MYSQL_USER=bookstack
      - MYSQL_PASSWORD=yourdbpass
    volumes:
      - ./bookstack_db_data:/config
    restart: unless-stopped

```

O arquivo docker-compose fornecido inclui dois containers Docker distintos: um para o aplicativo BookStack e outro para o banco de dados SQL. Este é o método recomendado para instalar o BookStack. No entanto, há algumas alterações cruciais que precisam ser feitas antes de prosseguir.

Primeiro, substitua "yourappurl" pela URL desejada por meio da qual você pretende acessar o aplicativo BookStack. Além disso, modifique "yourdbpass" para uma senha de sua preferência. É essencial garantir que a mesma senha seja usada em ambos os containers para manter a consistência.

Por fim, lembre-se de ajustar a variável "TZ" para corresponder ao seu [Timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) específico.

Ao fazer essas modificações necessárias, você poderá configurar com sucesso o arquivo docker-compose para sua instalação do BookStack.

Na parte inferior da página você pode encontrar o botão **Deploy Stack** e clicar nele.

### Etapa 03: Acessar o BookStack

Após o término do processo de deploy, você poderá ver que uma nova stack foi criada. No nosso caso, é a bookstack; clique nela.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack3.PNG" alt="pir" width="600" height="auto"/></p>

Então você poderá observar que dois containers estão em execução e o número da porta é 6875.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack4.PNG" alt="pir" width="600" height="auto"/></p>

Em seguida, abra o seu navegador e digite 192.168.100.1:6875. Depois disso, você será direcionado para a página de login.

:::note

Email: admin@admin.com

Password: password

:::

Em seguida, você poderá acessar com sucesso a página inicial do BookStack.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack5.PNG" alt="pir" width="600" height="auto"/></p>

## Instalar Grocy

### Etapa 01: Criar uma nova stack

Da mesma forma que na primeira etapa da instalação do BookStack, precisamos criar uma nova stack. Portanto, você pode usar o guia acima sobre como criar uma nova stack.

### Etapa 02: Instalando Grocy usando o editor web

Assim como na segunda etapa da instalação do BookStack, você precisa fornecer um nome para a stack. Em seguida, copie e cole o seguinte texto docker-compose no editor web.

```sh
---
version: "2.1"
services:
  grocy:
    image: lscr.io/linuxserver/grocy
    container_name: grocy
    environment:
      - TZ=Asia/Colombo
    volumes:
      - /grocy/config:/config
    ports:
      - 9283:80
    restart: unless-stopped

```

Na parte inferior da página você pode encontrar o botão **Deploy Stack** e clicar nele.

### Etapa 03: Acessar o Grocy

 After the deploying process is done you can see a new stack is created. In our case, it is grocy and click on it.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy1.PNG" alt="pir" width="600" height="auto"/></p>

Então você pode observar que o contêiner grocy está em execução e o número da porta é 9283.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy2.PNG" alt="pir" width="600" height="auto"/></p>

 Em seguida, abra o seu navegador web e digite 192.168.100.1:9283. Depois disso, você será direcionado para a página de login.

:::note

Nome de usuário: admin

Senha: admin

:::

Então você poderá acessar com sucesso a página inicial do BookStack.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy3.PNG" alt="pir" width="600" height="auto"/></p>

## Recursos

- **[Página Web]** [Docker Offficial Documentation](https://docs.docker.com)

- **[Página Web]** [Docker Hub](https://hub.docker.com)

- **[Página Web]** [Portainer](https://www.portainer.io/)

- **[Página Web]** [BookStack](https://www.bookstackapp.com/)

- **[Página Web]** [Grocy](https://grocy.info/)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
