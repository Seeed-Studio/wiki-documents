---
description: O Futuro do Entretenimento Doméstico, Roteador LinkStar-H68K e Plex Media Server
title: O Futuro do Entretenimento Doméstico, Roteador LinkStar-H68K e Plex Media Server
keywords:
  - LinkStar
  - Primeiros passos
  - plex media server
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /plex_media_server
last_update:
  date: 6/14/2023
  author: Kasun Thushara
createdAt: '2022-11-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/plex_media_server/
---
# O Futuro do Entretenimento Doméstico; Roteador LinkStar-H68K e Plex Media Server

Descubra a ideia inovadora de transformar seu roteador em um servidor de mídia de entretenimento compacto, porém poderoso. Imagine um portal para um reino ilimitado de opções de entretenimento, tudo consolidado em um único dispositivo. Essa inovação revolucionária transcende as capacidades convencionais de um dispositivo de rede, enriquecendo seu dia a dia e revolucionando pequenos estabelecimentos como cafés e restaurantes, oferecendo experiências extraordinárias aos clientes. Prepare-se para mergulhar em um mundo de possibilidades cativantes, aprimorando cada momento e garantindo entretenimento incomparável. Aqui estão algumas aplicações em potencial e fatores a considerar se você busca uma transformação tão notável para o seu roteador.

## O que é Docker?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker.png" alt="pir" width="200" height="auto"/></p>

[Docker](https://docs.docker.com/) é uma plataforma open-source que permite que desenvolvedores automatizem a implantação e o gerenciamento de aplicações dentro de containers leves e isolados. Containers são unidades autocontidas que empacotam uma aplicação junto com suas dependências, bibliotecas e arquivos de configuração, permitindo que ela seja executada de forma consistente em diferentes ambientes. O Docker simplifica o processo de criar, distribuir e executar aplicações, tornando mais fácil desenvolver e implantar software de maneira consistente e reproduzível. Com o Docker, os desenvolvedores podem encapsular suas aplicações e garantir que elas sejam executadas sem problemas em diferentes sistemas operacionais e infraestruturas, tornando-o uma ferramenta inestimável para construir aplicações portáteis e escaláveis, otimizar fluxos de trabalho de desenvolvimento e possibilitar uma colaboração eficiente entre membros da equipe.

## O que é Plex?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/Plex_logo.png" alt="pir" width="200" height="auto"/></p>

[Plex Media Server](https://www.plex.tv) é uma poderosa plataforma de gerenciamento e streaming de mídia que permite aos usuários organizar, acessar e transmitir sua biblioteca de mídia pessoal em vários dispositivos. Com o Plex Media Server, os usuários podem centralizar facilmente sua coleção de filmes, séries, músicas, fotos e muito mais, criando um hub de mídia unificado dentro de sua rede doméstica. O Plex organiza e indexa automaticamente os arquivos de mídia, obtendo metadados como descrições, artes e legendas, para criar uma interface visualmente atraente e fácil de usar. O servidor pode ser acessado por meio dos aplicativos dedicados do Plex em smartphones, tablets, TVs inteligentes e dispositivos de streaming, permitindo o streaming contínuo de conteúdo de mídia tanto em casa quanto remotamente. O Plex Media Server também oferece recursos robustos, como controles parentais, suporte a múltiplos usuários e capacidades de transcodificação, garantindo compatibilidade e qualidade de streaming ideal em diferentes dispositivos e condições de rede. Em resumo, o Plex Media Server capacita os usuários a aproveitar sua coleção de mídia pessoal a qualquer hora, em qualquer lugar, proporcionando uma experiência de entretenimento abrangente e imersiva.

## Configurar o ambiente Docker no roteador LinkStar OpenWRT

- **Passo 01**  Instalando OpenWRT no LinkStar

Para iniciar o processo de instalação do OpenWRT no seu dispositivo LinkStar, consulte o guia de instalação abrangente disponível no Wiki do LinkStar. Este tutorial foca em utilizar o sistema OpenWRT e demonstra como instalar o Container Plex garantindo que o LinkStar funcione como um roteador virtual (soft router).
Escolha uma das opções a seguir com base na sua preferência para instalar o OpenWRT no LinkStar:

1. Gravar o OpenWRT no cartão TF. [Aqui está o tutorial](https://wiki.seeedstudio.com/pt-br/linkstar-install-system/#flash-openwrt-to-the-tf-card)
2. Gravar o OpenWRT na eMMC. [Aqui está o tutorial](https://wiki.seeedstudio.com/pt-br/linkstar-install-system/#flash-openwrt-to-emmc)

- **Passo 2**: Configurando a Rede do LinkStar

Para começar a configurar as definições de rede no seu dispositivo LinkStar, estabeleça uma conexão ligando-o ao seu computador por meio de um cabo de rede. Acesse o backend do sistema operacional OpenWRT digitando o endereço IP 192.168.100.1 no seu navegador. A senha inicial da conta é:

```
Account: root
Password: password
```

Depois de fazer login, o próximo passo é estabelecer uma conexão com a internet para o seu dispositivo LinkStar.
Você tem a opção de conectar por meio de um cabo de rede ou via WiFi. Escolha o método de conexão que se adapta à sua configuração e preferências. Aqui eu usei o método sem fio. Depois de selecionar a rede sem fio, você pode simplesmente inserir a senha e salvar e aplicar.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img1.png"/></div>

- **Passo 3** : Aumentar a Capacidade de Armazenamento do Docker

Por padrão, a instalação do Docker no LinkStar possui uma capacidade de armazenamento de cerca de 250 MB, o que pode não ser suficiente para instalar imagens. Portanto, precisamos alocar mais espaço para o Docker para atender às nossas necessidades.
Para começar, navegue até a seção System no backend do OpenWRT. Em seguida, clique em Disk Man e localize a opção **EDIT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img2.png"/></div>

Na coluna **"END SECTOR"**, especifique o tamanho desejado do espaço de armazenamento adicional a ser alocado para o Docker. Neste exemplo, vamos adicionar 20 GB de armazenamento. Depois de inserir o valor, clique no botão **"NEW"** para criar a nova alocação de armazenamento.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img3.png"/></div>

Escolha o formato ext4, depois clique no botão FORMAT.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img4.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img5.png"/></div>

Quando a alocação estiver concluída, você notará a adição de um novo espaço de 20 GB. No entanto, esse espaço está atualmente não montado e precisa ser associado ao Docker.
Para continuar, navegue até a seção System no backend do OpenWRT e selecione Mount Points. Procure pela seção Mount Point e clique no botão **"ADD"**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img6.png"/></div>

Escolha o novo espaço que você acabou de criar.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img7.png"/></div>

Escolha o Mount Point Use as **Docker data (/opt)**. Não se esqueça de marcar a caixa de seleção Enable this mount, depois clique no botão **SAVE & APPLY**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img8.png"/></div>

Depois de concluir as configurações necessárias para a expansão de armazenamento, o passo final é reiniciar o dispositivo LinkStar para aplicar as alterações.

Para iniciar o processo de reinicialização, vá até a seção System no backend do OpenWRT e selecione Reboot. Clique no botão **"PERFORM REBOOT"** para iniciar o processo de reinicialização. Aguarde o OpenWRT reiniciar e, em seguida, faça login novamente quando o sistema estiver pronto.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/img9.png"/></div>

## Criar o Container Docker do Plex Media Server

Em seguida, precisamos obter a imagem docker do Plex. Para isso você deve visitar este [link](https://hub.docker.com/r/linuxserver/plex) para mais detalhes.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/pull_img.PNG"/></div>

Depois vá para a aba Containers e clique no botão add

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/LinkStar/plex/pull_img2.png"/></div>

Depois disso você verá um formulário para preencher.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/plex3.PNG"/></div>

- **Passo 1**: Definir Nome do Container e Rede

        Defina o nome do container como "plex".
        Escolha o modo de rede como "host".

- **Passo 2**: Configurar Variáveis de Ambiente

    Obtenha o fuso horário acessando o [link](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) fornecido e copie o nome da base de dados TZ.
    Defina o fuso horário usando o seguinte formato

        TZ=[enter timezone]

    Obtenha o claimToken acessando o [link](https://www.plex.tv/claim/) fornecido e copie/cole o token.
    Defina o claimToken usando o seguinte formato

         PLEX_CLAIM=[enter claimToken]

- **Passo 3** : Configurar Bind Mounts

 Na seção de bind mounts, adicione as seguintes linhas uma por uma:

        /plex/database:/config
        /plex/temp:/transcode
        /plex/media:/data

- **Passo 4**: Enviar Configuração

    Depois de configurar o nome do container, rede, variáveis de ambiente e bind mounts, clique no botão "Submit" para salvar as alterações.

    Seguindo esses passos, você configurará com sucesso o container Plex com as definições especificadas.

## Executar e Configurar o Plex Media Server

- **Passo 1:**

    Na seção de containers do docker você pode ver as informações do container. Clique no botão de seleção e pressione start.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker 1.PNG"/></div>

- **Passo 2**: Abrir a Configuração Inicial do Plex Media Server

    No seu navegador, digite o endereço 192.168.2.1:32400/web. Isso abrirá a página de configuração inicial do Plex Media Server. Observe que 32400 é a porta onde o container Docker do Plex está em execução.

- **Passo 3**: Definir um Nome de Servidor

    Insira o nome de servidor desejado no campo fornecido e clique em "NEXT" para continuar.

- **Passo 4**: Organizar Biblioteca de Mídia

    Para começar a organizar sua biblioteca de mídia, clique no botão "ADD LIBRARY".

- **Passo 5**: Selecionar Tipo de Biblioteca

     Escolha o tipo de biblioteca apropriado para sua mídia, como Movies, TV shows, Music, etc., e clique em "NEXT".

- **Passo 6**: Adicionar Pasta de Mídia

     Clique em "BROWSE FOR MEDIA FOLDER" e selecione a pasta de dados. Ao configurar o contêiner Plex anteriormente, essa pasta de dados foi vinculada à pasta /plex/media no OpenWrt. Clique em "ADD LIBRARY" para confirmar.

- **Passo 7**: Concluir a Configuração

     Clique em "NEXT" e depois em "DONE" para finalizar o processo de configuração inicial.

Agora você será recebido com a interface de usuário do Plex Media Server, permitindo que você acesse e gerencie sua coleção de mídia de forma perfeita.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/plex interface.PNG"/></div>

## Montar o Diretório do Plex no PC e Transferir a Mídia

- **Passo 1.** Na interface Luci do OpenWrt, navegue até `NAS > Network Shares > ADD`

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/NAS1.PNG"/></div>

- **Passo 2.** Preencha a linha de acordo com o seguinte

        - name: Plex 
        - Path: /plex
        - Browse-able: marcado
        - Allow guests: marcado
        - Create mask: 0666
        - Directory mask: 0777
- **Passo 3** Pressione **Save and apply**:
- **Passo 4** Vá para o explorador do Windows e clique em **Map network drive** e digite //192.168.100.1/plex

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/LinkStar/plex/NAS2.PNG"/></div>

- **Passo 5** Adicione seus filmes e músicas favoritos à pasta de mídia.
- **Passo 6** Vá novamente ao servidor de mídia Plex e clique aqui em **More**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/LinkStar/plex/NAS3.PNG"/></div>

- **Passo 7** Em seguida, clique nestes três pontos e clique em **Scan Library Files**. Então você poderá ver os filmes ou músicas que adicionou recentemente à sua biblioteca.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/LinkStar/plex/NAS4.PNG"/></div>

Ao implementar um servidor de mídia, seja em casa ou em um pequeno hotel ou café, os usuários podem oferecer uma experiência de entretenimento excepcional para si mesmos, membros da família, hóspedes e clientes. É uma solução econômica que centraliza o armazenamento de mídia, reduz a desordem de dispositivos e fornece opções de acesso remoto e personalização.

## Recursos

- **[Web Page]** [Docker Offficial Documentation](https://docs.docker.com)

- **[Web Page]** [Docker Hub](https://hub.docker.com)

- **[Web Page]** [Plex Media Server](https://www.plex.tv)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
