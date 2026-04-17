---
description: Envie dados do Watcher e Node-RED para o Discord
title: Watcher e Node-RED para Discord
keywords:
  - Watcher
  - Discord
  - Node-RED
image: https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Watcher_Discord_Cover.png
slug: /watcher_node_red_to_discord
last_update:
  date: 08/02/2024
  author: Vincent
createdAt: '2024-08-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/watcher_node_red_to_discord/
---

# Guia Rápido: Watcher para Discord

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Watcher_Discord_Cover.png" style={{width:1000, height:'auto'}}/></div>

[**Discord**](https://discord.com/) é uma plataforma social de mensagens instantâneas e VoIP que facilita a comunicação por chamadas de voz, videochamadas, mensagens de texto e compartilhamento de mídia. As conversas no Discord podem ser privadas ou ocorrer em comunidades virtuais conhecidas como "servers".

Este tutorial irá guiá-lo na integração da API do Watcher com o Node-RED para enviar dados do Watcher para o Discord de forma transparente. Essa integração fornece um método simples e eficiente para **receber notificações e abre portas para outras aplicações e integrações**.

## Parte 1. Configurar o Watcher no Node-RED

### Etapa 1. Configurar o Node-RED

Antes de tudo, você precisa executar uma tarefa no Watcher seguindo o vídeo abaixo. Se quiser saber mais, [clique aqui](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

O Node-RED é necessário para esta configuração, juntamente com a API do Watcher. Se você ainda não instalou o Node-RED ou não o conectou à API do Watcher, comece por aqui: [**Guia Rápido Watcher para Node-RED**](https://wiki.seeedstudio.com/pt-br/watcher_to_node_red).

### Etapa 2. Preparar dados do Watcher

Após configurar o Watcher para funcionar com o Node-RED, o próximo passo é preparar os dados do Watcher para o Discord. Clique duas vezes no nó de função para formatar os dados de forma apropriada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

Para o propósito deste tutorial, vamos enviar o conteúdo bem como a imagem. No entanto, você é encorajado a transformar os dados conforme necessário para a sua aplicação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_2.png" style={{width:700, height:'auto'}}/></div>

#### Exemplo de função Node-RED para formatar dados

```sh
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```

## Parte 2. Configurar o Bot do Discord

### Etapa 3. Criar uma conta no Discord

É necessária uma conta Discord para continuar. Se você ainda não tem uma conta, por favor [**clique aqui**](https://discord.com) e conclua as etapas para criar uma conta.

Se você já tem uma conta, prossiga para a [**Etapa 4**](#Etapa-4-Criar-aplicativo-de-desenvolvimento).

Se você já tem um bot do Discord que deseja configurar no Node-RED, pule para a [**Parte 3**](#Parte-3-Integrar-o-Discord-ao-Node-RED).

### Etapa 4. Crear aplicativo de desenvolvimento

Depois de ter sua conta Discord configurada e conectada, acesse o [**Discord Developer Portal**](https://discord.com/developers/applications) e crie um novo aplicativo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_1.png" style={{width:1000, height:'auto'}}/></div>

Digite um nome para o seu aplicativo, concorde com os [**Termos de Serviço para Desenvolvedores**](https://support-dev.discord.com/hc/articles/8562894815383-Discord-Developer-Terms-of-Service) e com a [**Política para Desenvolvedores**](https://support-dev.discord.com/hc/articles/8563934450327-Discord-Developer-Policy) do Discord e, em seguida, clique em **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_2.png" style={{width:1000, height:'auto'}}/></div>

:::note
Você precisará de um endereço de e-mail válido vinculado à sua conta Discord para prosseguir. Se você não tiver um e-mail associado à sua conta Discord, siga estas instruções: [How to Change Your Account's Email Address](https://support.discord.com/hc/en-us/articles/4423385681175-How-to-Change-Your-Account-s-Email-Address)
:::

### Etapa 5. Configurar as definições do Bot

Agora vamos configurar as definições do bot. Para isso, siga estes passos:

1. Na barra lateral esquerda da página do seu aplicativo, clique na aba **Bot** em **Settings**.

2. Na seção **Privileged Gateway Intents**, você verá várias opções. Para este tutorial, precisamos apenas ativar o **MESSAGE CONTENT INTENT**. Isso permite que o seu bot leia o conteúdo das mensagens. Ative a chave ao lado de **MESSAGE CONTENT INTENT** para habilitá-lo. Quando estiver ativado, o interruptor ficará azul.

Sempre que você fizer uma alteração no seu bot, aparecerá um pop-up na parte inferior, solicitando que você **Save Changes**. Certifique-se de fazer isso antes de prosseguir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_3.png" style={{width:1000, height:'auto'}}/></div>

:::note
Dependendo do que você pretende fazer com o seu aplicativo, pode ser necessário ativar intents adicionais. Para funcionalidades de bot mais complexas, talvez seja necessário ativar outros intents como **PRESENCE INTENT** ou **SERVER MEMBERS INTENT**. No entanto, para o propósito deste tutorial, em que estamos apenas enviando mensagens, ativar o **MESSAGE CONTENT INTENT** é suficiente.
:::

Enquanto estiver na página Bot, você também verá uma seção intitulada **Token** na parte superior da página. Clique no botão **Reset Token** para gerar um novo token para o seu bot.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_4.png" style={{width:1000, height:'auto'}}/></div>

Esteja ciente de que redefinir o seu token fará com que o seu bot pare de funcionar até que você atualize o token no código do bot. Certifique-se de estar preparado para atualizar a configuração do seu bot antes de prosseguir com a redefinição.

Talvez seja solicitado que você faça autenticação de múltiplos fatores. Se for o caso, conclua esta etapa conforme necessário antes de continuar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_5.png" style={{width:1000, height:'auto'}}/></div>

Copie esse token e mantenha-o em segurança. Você precisará desse token para autenticar o seu bot no Node-RED mais tarde.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_6.png" style={{width:1000, height:'auto'}}/></div>

:::warning
Nunca compartilhe o token do seu bot publicamente. Qualquer pessoa com o seu token pode controlar o seu bot. Se você expuser o token acidentalmente, redefina-o imediatamente nesta página.
:::

### Etapa 6. Configurar as definições de OAuth2

Agora, mude para a aba **OAuth2** em **Settings** e role para baixo até ver **OAuth2 URL Generator**. Aqui, vamos marcar o escopo **bot**, pois estamos criando uma aplicação de bot.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_7.png" style={{width:1000, height:'auto'}}/></div>

Após selecionar o escopo bot, aparecerá uma nova caixa que permite selecionar as **Bot Permissions**. Para os propósitos deste tutorial, vamos conceder ao bot permissões de **Administrator**, o que dá ao bot acesso a todas as funcionalidades.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_8.png" style={{width:1000, height:'auto'}}/></div>

:::warning
Conceder permissões de Administrator a um bot lhe dá acesso total a todas as funcionalidades do servidor. Em um ambiente de produção, é recomendado seguir o princípio do menor privilégio e conceder apenas as permissões específicas de que o seu bot precisa para as funções pretendidas.
:::

Por fim, role para baixo para ver sua nova URL gerada. Copie esta URL e cole-a na barra de endereços do seu navegador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_9.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 7. Conceder acesso do Bot ao servidor

Você será solicitado a selecionar um servidor onde deseja adicionar o bot. Escolha o servidor apropriado no menu suspenso e clique em **Continue**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_10.png" style={{width:1000, height:'auto'}}/></div>

Na próxima tela, você verá uma lista abrangente das permissões que está concedendo ao bot. Essas permissões são baseadas no que você selecionou no Gerador de URL OAuth2 na [**Etapa 6**](#Etapa-6-Configurar-as-definições-de-OAuth2). Revise cada permissão cuidadosamente e clique em **Authorize**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_11.png" style={{width:1000, height:'auto'}}/></div>

Da mesma forma que na [**Etapa 5**](#Etapa-5-Configurar-as-definições-do-Bot), talvez você seja solicitado novamente a fazer autenticação de múltiplos fatores. Se for o caso, conclua esta etapa conforme necessário antes de continuar.

Após a autorização bem-sucedida, você verá uma mensagem de confirmação indicando que o bot foi adicionado ao servidor Discord selecionado. Agora, volte para o seu servidor Discord para continuar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_12.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 8. Obter o ID do canal

Assim que chegar ao seu servidor Discord, clique no ícone de engrenagem (⚙️) perto da parte inferior da tela, ao lado das informações do seu perfil. Isso abrirá as configurações do usuário (User Settings).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_13.png" style={{width:1000, height:'auto'}}/></div>

Na barra lateral de User Settings, role até a seção **App Settings** e clique em **Advanced**. Certifique-se de que a chave **Developer Mode** esteja ativada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_14.png" style={{width:1000, height:'auto'}}/></div>

Feche as User Settings e volte ao seu servidor Discord. Clique com o botão direito no canal que você deseja usar (neste tutorial, estamos usando o canal **general**). Na parte inferior do menu de contexto que aparecer, clique em **Copy Channel ID**. Guarde este Channel ID para usar no seu fluxo Node-RED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_15.png" style={{width:1000, height:'auto'}}/></div>

:::note
O ID do Canal é um identificador exclusivo para cada canal do Discord. Certifique-se de mantê-lo seguro e não o compartilhe publicamente.
:::

## Parte 3. Integrar o Discord com o Node-RED

### Passo 9. Instalar o módulo do Discord

Clique no ícone de três barras e depois clique na opção **Manage palette**. Isso abrirá uma nova janela onde você pode adicionar ou remover nós.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_2.5.png" style={{width:1000, height:'auto'}}/></div>

Altere para a aba **Install** dentro da janela de gerenciamento da paleta. Na barra de pesquisa, digite `discord` para encontrar o módulo. Em seguida, clique no botão **install** ao lado da entrada **node-red-contrib-discord-advanced**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

Também recomendamos revisar a [**documentação do nó**](https://github.com/Markoudstaal/node-red-contrib-discord-advanced/blob/main/README.md) e o [**repositório Github**](https://github.com/Markoudstaal/node-red-contrib-discord-advanced) associado se você quiser um entendimento mais aprofundado de como o módulo funciona e como maximizar seu potencial.

:::note
O módulo **node-red-contrib-discord-advanced** é recomendado por sua compatibilidade e confiabilidade atuais no momento da escrita deste tutorial (agosto de 2024). No entanto, a disponibilidade e a funcionalidade dos módulos do Node-RED podem variar com o tempo. É recomendável revisar os feedbacks mais recentes dos usuários e as notas de compatibilidade na biblioteca do Node-RED ou nos repositórios do GitHub. Se você encontrar problemas com este módulo, considere explorar outros módulos de Discord listados na biblioteca do Node-RED para uma opção mais adequada.
:::

### Passo 10. Configurar o nó do Discord

Depois de instalar o módulo do Discord, arraste o nó **discordMessageManager** para o seu fluxo do Node-RED e conecte-o ao nó de função

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

Clique duas vezes no nó **discordMessageManager** para abrir seu painel de configuração. Clique no ícone de mais ao lado do campo **token** para adicionar uma nova configuração de token da API do Discord.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_5.png" style={{width:700, height:'auto'}}/></div>

Na nova janela, insira as seguintes informações:

- Token: Insira o token que você obteve no [**Passo 5**](#Passo-5-Configurar-as-configurações-do-bot)
- Name: Dê um nome para a configuração do seu token

Depois, clique em **Add** ou **Update** para salvar a configuração.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_6.png" style={{width:700, height:'auto'}}/></div>

No campo **Channel**, insira o ID do Canal que você obteve no [Passo 8](#Passo-8-Obter-o-ID-do-Canal). Em seguida, clique em **Done** para fechar o painel de configuração.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_6.5.png" style={{width:700, height:'auto'}}/></div>

:::note
Para configurações mais complexas com múltiplos canais e condições de disparo, você pode deixar o campo Channel em branco e usar `msg.channel` para definir o canal dinamicamente. No entanto, para este tutorial básico, usaremos um ID de canal estático.
:::

### Passo 11. Deploy

Por fim, clique no botão **Deploy** no canto superior direito da interface do Node-RED. Uma vez feito o deploy, seu Watcher enviará mensagens para o Node-RED, que então as encaminhará para o seu canal do Discord.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_16.png" style={{width:1000, height:'auto'}}/></div>

Parabéns! Você configurou com sucesso o seu Watcher para enviar mensagens ao Discord por meio do Node-RED. Essa configuração garante que você receba notificações em tempo real no seu canal do Discord sempre que o seu Watcher for acionado. Ao fazer isso, você desbloqueou uma infinidade de oportunidades empolgantes para seus projetos de desenvolvimento. Estamos ansiosos para ver as soluções inovadoras que você criará a seguir!

## Solução de Problemas

Ao integrar o Discord com o Node-RED, você pode encontrar alguns erros. Aqui estão dois erros comuns e etapas detalhadas para resolvê-los:

### Erro: Used disallowed intents

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_Error_1.png" style={{width:1000, height:'auto'}}/></div>

Esse erro ocorre quando seu bot tenta usar intents que não foram habilitados no Discord Developer Portal. Para corrigir isso:

1. Vá para o [**Discord Developer Portal**](https://discord.com/developers/applications).
2. Selecione sua aplicação.
3. Clique em **Bot** na barra lateral esquerda.
4. Role para baixo até a seção **Privileged Gateway Intents**.
5. Habilite as intents de que seu bot precisa (normalmente **Presence Intent**, **Server Members Intent** e **Message Content Intent**).
6. Clique em **Save Changes** na parte inferior da página.
7. Faça o redeploy do seu fluxo Node-RED.

### DiscordAPIError&#91;50001&#93;: Missing Access

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_Error_2.png" style={{width:1000, height:'auto'}}/></div>

Esse erro sugere que seu bot não tem as permissões necessárias para executar a ação. Para resolver isso:

1. Certifique-se de que seu bot foi convidado para o servidor com as permissões corretas:

- Vá para o [**Discord Developer Portal**](https://discord.com/developers/applications).
- Selecione sua aplicação e vá para a seção **OAuth2**.
- Em **URL Generator**, selecione **bot** em **SCOPES**.
- Em **BOT PERMISSIONS**, selecione as permissões de que seu bot precisa (no mínimo, **Send Messages** e **View Channels**).
- Copie a URL gerada e abra-a em uma nova aba para convidar o bot para o seu servidor com essas permissões.

2. Verifique as permissões do canal:

- No Discord, clique com o botão direito no canal para o qual você está tentando enviar mensagens.
- Clique em **Edit Channel** > **Permissions**.
- Certifique-se de que a função do seu bot tenha as permissões necessárias, especialmente **View Channel** e **Send Messages**.

3. Verifique o ID do Canal:

- Verifique novamente se o ID do Canal na sua configuração do Node-RED está correto.
- Certifique-se de que você está usando o ID de um canal de texto, e não de um canal de voz ou categoria.

4. Verifique o token do seu bot:

- Certifique-se de que o token na sua configuração do Node-RED está correto e atualizado.
- Em caso de dúvida, você pode regenerar o token no Discord Developer Portal na seção **Bot**.

5. Faça o redeploy do seu fluxo Node-RED após fazer essas alterações.

Se você continuar enfrentando problemas após tentar essas etapas, considere consultar a [**documentação da API do Discord**](https://discord.com/developers/docs/reference) ou buscar ajuda na [**comunidade de desenvolvedores do Discord**](https://discord.com/invite/discord-developers) para uma solução de problemas mais específica.

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer suporte de diferentes formas para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
