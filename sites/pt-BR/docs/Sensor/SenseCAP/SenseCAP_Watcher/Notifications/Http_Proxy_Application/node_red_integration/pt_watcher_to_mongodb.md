---
description: Enviar dados do Watcher e Node-RED para o MongoDB
title: Watcher & Node-RED para MongoDB
keywords:
  - Watcher
  - MongoDB
  - Node-RED
image: https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Watcher_MongoDB_Cover.jpg
slug: /watcher_node_red_to_mongodb
last_update:
  date: 07/18/2024
  author: Vincent
createdAt: '2024-07-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/watcher_node_red_to_mongodb/
---

# Guia Rápido: Watcher para MongoDB

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Watcher_MongoDB_Cover.jpg" style={{width:1000, height:'auto'}}/></div>

[**MongoDB**](https://www.mongodb.com/) é um banco de dados de documentos poderoso e multiplataforma, que se destaca no gerenciamento de dados estruturados e não estruturados. Seu modelo de dados flexível e sem esquema é baseado em documentos semelhantes a JSON, tornando-o uma excelente escolha para aplicações dinâmicas que exigem consultas ad hoc e indexação.

Usar o MongoDB oferece um método simples para **armazenar e utilizar dados do Watcher para processamento posterior ou outras aplicações de projeto.**

Este tutorial irá guiá-lo no uso da API do Watcher e do Node-RED para enviar dados de forma transparente ao MongoDB, uma configuração perfeita para projetos que exigem tratamento e persistência de dados em tempo real.

## Parte 1. Configurar o Watcher no Node-RED

### Passo 1. Instalar o Node-RED

Primeiro de tudo, você precisa executar uma tarefa no Watcher seguindo o vídeo abaixo. Se quiser saber mais [clique aqui](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

O Node-RED é necessário para esta configuração, juntamente com a API do Watcher. Se você ainda não instalou o Node-RED ou não o conectou com a API do Watcher, comece aqui: [**Watcher to Node-RED Quick Start**](https://wiki.seeedstudio.com/pt-br/watcher_to_node_red).

### Passo 2. Preparar dados para o MongoDB

Depois de integrar o Watcher com o Node-RED, o próximo passo é preparar os dados do Watcher para o MongoDB. Use um nó de função no Node-RED para formatar os dados adequadamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

Para o propósito deste tutorial, simplesmente retornaremos todos os dados do Watcher. No entanto, você é encorajado a transformar os dados conforme necessário para a sua aplicação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_2.png" style={{width:1000, height:'auto'}}/></div>

#### Exemplo de função do Node-RED para formatar dados

```sh
msg.payload = {
    "tlid": msg.payload.value[0].tlid,
    "tn": msg.payload.value[0].tn,
    "content": msg.payload.value[0].content,
    "image_url": msg.payload.value[0].image_url,
    "timestamp": msg.payload.timestamp,
    "orgId": msg.payload.orgId,
    "eui": msg.payload.eui,
    "channel": msg.payload.channel,
    "measurementID": msg.payload.value[0].measurementID
};
return msg;
```

## Parte 2. Configurar o MongoDB

### Passo 3. Criar uma conta

Em seguida, crie uma conta MongoDB ou faça login se você já tiver uma. Se você é novo no MongoDB, comece acessando [**mongodb.com**](https://www.mongodb.com) e cadastrando-se para uma conta gratuita.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_1.png" style={{width:1000, height:'auto'}}/></div>

### Passo 4. Fazer o deploy de um novo Cluster

Depois de fazer login, prossiga para fazer o deploy de um novo cluster:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_4.png" style={{width:1000, height:'auto'}}/></div>

1. **Escolha a configuração do Cluster**: Para desenvolvimento, recomendamos usar a configuração M0 porque ela é gratuita e suficiente para testes em pequena escala. No entanto, você pode escolher uma configuração diferente se ela estiver mais alinhada com os requisitos do seu projeto.
2. **Selecione um provedor de nuvem**: Escolhemos a AWS devido à sua ampla disponibilidade e confiabilidade, mas outros provedores, como Google Cloud ou Azure, são igualmente viáveis, dependendo dos seus requisitos geográficos ou técnicos.
3. **Selecione uma região**: Deve ser a região mais próxima da sua base principal de usuários para minimizar a latência e melhorar o desempenho.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_5.png" style={{width:1000, height:'auto'}}/></div>

### Passo 5. Configurar a segurança do seu banco de dados

Quando o seu nó for criado, navegue até o menu **Quickstart** na barra lateral esquerda em **Security**. Aqui, você irá criar um usuário de banco de dados especificando um nome de usuário e uma senha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_6.png" style={{width:1000, height:'auto'}}/></div>

:::note
Por padrão, os usuários recebem privilégios de *leitura e gravação* em qualquer banco de dados. Você tem a opção de atualizar essas permissões e/ou criar usuários adicionais posteriormente.
:::

Depois de configurar o seu usuário, permaneça na página **Quickstart** e role para baixo para adicionar o seu endereço IP atual à sua lista de acesso de IP (IP Access List).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_7.png" style={{width:1000, height:'auto'}}/></div>

### Passo 6. Criar um banco de dados e uma coleção

Na barra lateral esquerda, clique no menu **Databases** na categoria **Deployment**. Em seguida, clique em **Browse Collections** para abrir a página de gerenciamento de banco de dados. É aqui que todos os seus bancos de dados e coleções são gerenciados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_8.png" style={{width:1000, height:'auto'}}/></div>

Dentro do gerenciador de banco de dados, clique em **Add My Own Data** para iniciar o processo de criação de um novo banco de dados e coleção.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_9.png" style={{width:1000, height:'auto'}}/></div>

Uma janela será exibida pedindo que você insira os nomes para o seu novo banco de dados e coleção. Preencha os nomes desejados para cada um.

Depois de inserir os nomes, clique no botão **Create** para finalizar a criação do seu novo banco de dados e coleção.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_10.png" style={{width:1000, height:'auto'}}/></div>

### Passo 7. Obter o seu hostname

Comece fazendo login no seu painel do MongoDB Atlas. A partir daí, navegue até o menu **Database** na barra lateral esquerda para encontrar o seu cluster. Localize o cluster desejado e clique no botão **Connect** associado a ele. Isso abrirá uma série de opções de conexão.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_11.png" style={{width:1000, height:'auto'}}/></div>

Nas opções de conexão apresentadas, clique em **Shell**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_12.png" style={{width:1000, height:'auto'}}/></div>

Após selecionar a opção MongoDB Shell, você será direcionado para uma seção intitulada **Run your connection string in your command line.** Aqui, você encontrará sua string de conexão completa.

Na string de conexão, procure pela parte que começa após `mongodb+srv://` e continua até você encontrar um caractere `/`. Essa parte é o seu hostname. Ele normalmente contém o nome do seu cluster seguido de `.mongodb.net`.

Por exemplo, se a sua string de conexão for:

```sh
mongosh "mongodb+srv://my-cluster123.mongodb.net" --apiVersion 1 --username my-username
```

O hostname será:

```sh
my-cluster123.mongodb.net
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_13.png" style={{width:1000, height:'auto'}}/></div>

## Parte 3. Conectar o banco de dados MongoDB ao Node-RED

### Passo 8. Instalar o módulo MongoDB

Clique no ícone de três barras e depois clique na opção **Manage palette**. Isso abre uma nova janela onde você pode adicionar ou remover nós.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

Altere para a aba **Install** dentro da janela de gerenciamento de paleta. Na barra de pesquisa, digite `mongodb-aleph` para encontrar o módulo. Em seguida, clique no botão **install** ao lado da entrada **node-red-contrib-mongodb-aleph**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

:::note
O módulo **node-red-contrib-mongodb-aleph** é recomendado pela sua compatibilidade e confiabilidade atuais na data de redação deste tutorial (julho de 2024). No entanto, a disponibilidade e a funcionalidade dos módulos do Node-RED podem variar com o tempo. É aconselhável revisar o feedback mais recente dos usuários e as notas de compatibilidade na biblioteca do Node-RED ou nos repositórios do GitHub. Se você encontrar problemas com este módulo, considere explorar outros módulos MongoDB listados na biblioteca do Node-RED em busca de uma opção mais adequada.
:::

### Passo 9. Configurar o nó MongoDB

Depois de instalar o módulo MongoDB, arraste o nó **mongodb - aleph - out** para o seu fluxo do Node-RED e conecte-o ao nó de função.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_5.png" style={{width:1000, height:'auto'}}/></div>

Clique duas vezes no nó MongoDB para configurá-lo. Em seguida, clique no ícone de mais ao lado do campo de servidor para adicionar uma nova configuração de servidor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_6.png" style={{width:1000, height:'auto'}}/></div>

1. Insira o hostname que você obteve anteriormente.
2. Altere a topologia de conexão para **DNS Cluster \(mongodb+srv://\)** no menu suspenso.
3. Insira o nome do seu banco de dados MongoDB.
4. Insira o nome de usuário que você configurou nas definições de segurança.
5. Insira a senha correspondente.
6. Forneça um nome descritivo para a sua conexão MongoDB que será usado dentro do Node-RED.

Em seguida, clique em **Add** ou **Update** para salvar a configuração do servidor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

Com o servidor configurado, agora você pode especificar os detalhes para a inserção de dados:

1. Insira o nome da coleção MongoDB onde você deseja inserir os dados.
2. Defina a operação como **Insert**, o que adicionará novos documentos à coleção.

Clique em **Done** para concluir a configuração.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_8.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 10. Deploy

Por fim, faça o deploy do seu fluxo clicando no botão Deploy no canto superior direito da interface do Node-RED. Essa ação ativa os nós configurados, permitindo que os dados fluam do seu nó de função para o MongoDB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_9.png" style={{width:1000, height:'auto'}}/></div>

Agora, você verá os dados sendo preenchidos no MongoDB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Watcher_Collection_Finished.png" style={{width:1000, height:'auto'}}/></div>

Parabéns por integrar com sucesso o Watcher ao MongoDB! Você abriu a porta para uma vasta gama de oportunidades empolgantes em seus esforços de desenvolvimento. Prepare-se para mergulhar na criação de aplicações inovadoras que aproveitam as robustas capacidades do MongoDB. Estamos ansiosos para ver as notáveis soluções que você irá desenvolver em seguida!

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
