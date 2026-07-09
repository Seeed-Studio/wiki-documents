---
description: Envie dados do Watcher e Node-RED para o WhatsApp
title: Watcher & Node-RED para WhatsApp
keywords:
  - Watcher
  - WhatsApp
  - Node-RED
image: https://files.seeedstudio.com/wiki/Watcher_WhatsApp/watcher_whatsapp.png
slug: /watcher_node_red_to_whatsapp
last_update:
  date: 07/25/2024
  author: Vincent
createdAt: '2024-07-29'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/watcher_node_red_to_whatsapp/
---

# Guia Rápido: Watcher para WhatsApp

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/watcher_whatsapp.png" style={{width:1000, height:'auto'}}/></div>

[**WhatsApp**](https://web.whatsapp.com/) é um serviço de mensagens instantâneas e voz sobre IP pertencente à Meta. Ele permite que os usuários enviem mensagens de texto, voz e vídeo, façam chamadas de voz e vídeo e compartilhem imagens, documentos, localizações e outros conteúdos.

Este tutorial irá guiá-lo na integração da API do Watcher com o Node-RED para enviar dados perfeitamente do Watcher para o WhatsApp. Essa integração oferece um método simples e eficiente para **receber notificações e abre portas para outras aplicações e integrações**.

## Parte 1. Configurar o Watcher no Node-RED

### Etapa 1. Configurar o Node-RED

Antes de tudo, você precisa executar uma tarefa no Watcher seguindo o vídeo abaixo. Se quiser saber mais, [clique aqui](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

O Node-RED é necessário para esta configuração, juntamente com a API do Watcher. Se você ainda não instalou o Node-RED ou não o conectou com a API do Watcher, comece aqui: [**Guia Rápido: Watcher para Node-RED**](https://wiki.seeedstudio.com/pt-br/watcher_to_node_red).

### Etapa 2. Obter dados do Watcher

Depois de configurar o Watcher para funcionar com o Node-RED, o próximo passo é preparar os dados do Watcher para o WhatsApp. Dê um clique duplo no nó de função para formatar os dados adequadamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

Para fins deste tutorial, vamos enviar o conteúdo, bem como o URL da imagem. No entanto, você é encorajado a transformar os dados conforme necessário para sua aplicação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_2.png" style={{width:1000, height:'auto'}}/></div>

#### Exemplo de Função Node-RED para Formatar Dados

```sh
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```

## Parte 2. Configurar a API do WhatsApp

### Etapa 3. Criar conta no WhatsApp

É necessário ter uma conta no WhatsApp para prosseguir. Se você ainda não tem uma conta, [**clique aqui**](https://www.whatsapp.com) e conclua as etapas para criar uma conta.

Se você já tem uma conta, prossiga para a [**Etapa 4**](#Etapa-4-Obter-chave-de-API-do-CallMeBot).

### Etapa 4. Obter chave de API do CallMeBot

Depois que sua conta do WhatsApp estiver configurada e conectada, é hora de configurar a API do CallMeBot. Esta é a API que fará a ligação entre o Node-RED e o WhatsApp.

Para obter sua chave de API do CallMeBot, siga estas etapas (retiradas deste [**repositório do Github**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/blob/main/README.md#create-api-key)):

1. Adicione o número de telefone +34 644 66 32 62 aos Contatos do seu telefone. (Dê o nome que desejar)
2. Envie esta mensagem "I allow callmebot to send me messages" para o novo Contato criado (usando o WhatsApp, é claro)
3. Aguarde até receber a mensagem "API Activated for your phone number. Your APIKEY is 123123" do bot. Como isso ainda está em fase de testes beta, a ativação pode levar até 2 minutos.
4. A mensagem do WhatsApp enviada pelo bot conterá a chave de API necessária para enviar mensagens usando a API.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_API.png" style={{width:1000, height:'auto'}}/></div>

:::note
Existe a possibilidade de que o número de telefone fornecido neste tutorial para a API do CallMeBot possa estar cheio e incapaz de aceitar mais solicitações. Se isso acontecer, o CallMeBot enviará uma mensagem no WhatsApp para você com um número de telefone alternativo para usar.

Caso você não receba tal mensagem e todos os números de telefone fornecidos estejam cheios, talvez seja necessário encontrar uma API alternativa para conectar o Node-RED ao WhatsApp. Certifique-se de verificar as atualizações mais recentes e a documentação no site do CallMeBot ou explore outras APIs de mensagens do WhatsApp compatíveis com o Node-RED.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_Full.png" style={{width:1000, height:'auto'}}/></div>
:::

## Parte 3. Integrar o WhatsApp com o Node-RED

### Etapa 5. Instalar o módulo do WhatsApp

Clique no ícone com três barras e depois clique na opção **Manage palette**. Isso abre uma nova janela onde você pode adicionar ou remover nós.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

Altere para a aba **Install** na janela de gerenciamento da paleta. Na barra de pesquisa, digite `whatsapp` para encontrar o módulo. Em seguida, clique no botão **install** ao lado da entrada **node-red-contrib-whatsapp-cmb**.

Também recomendamos revisar a [**documentação do nó**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/blob/main/README.md) e o [**repositório Github**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb) associado se você quiser um entendimento mais aprofundado de como o módulo funciona e como maximizar seu potencial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

:::note
O módulo **node-red-contrib-whatsapp-cmb** é recomendado por sua compatibilidade e confiabilidade atuais no momento da redação deste tutorial (julho de 2024). No entanto, a disponibilidade e a funcionalidade dos módulos do Node-RED podem variar com o tempo. É aconselhável revisar os comentários de usuários mais recentes e notas de compatibilidade na biblioteca do Node-RED ou nos repositórios do GitHub. Se você encontrar problemas com este módulo, considere explorar outros módulos de WhatsApp listados na biblioteca do Node-RED para encontrar uma opção mais adequada.
:::

### Etapa 6. Configurar o nó do WhatsApp

Depois de instalar o módulo do WhatsApp, arraste o nó **Send Message** para o seu fluxo do Node-RED e conecte-o ao nó de função.

Dê um clique duplo no nó **Send Message** para configurá-lo. Em seguida, clique no ícone de mais ao lado do campo Account para adicionar uma nova configuração de Conta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_5.png" style={{width:1000, height:'auto'}}/></div>

1. Insira o nome que você gostaria de usar para esta conta.
2. Insira o número de telefone associado à sua conta do WhatsApp.
3. Insira sua chave de API.

Em seguida, clique em **Add** ou **Update** para salvar a configuração da Conta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_6.png" style={{width:1000, height:'auto'}}/></div>

Com a conta configurada, altere o menu suspenso ao lado do campo Message para **msg.**, e digite `payload` no campo de texto. Por fim, clique em **Done** para concluir a configuração do nó do WhatsApp.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 7. Fazer o deploy

Por fim, faça o deploy do seu fluxo clicando no botão Deploy no canto superior direito da interface do Node-RED. Essa ação ativa seus nós configurados, permitindo que os dados fluam do seu nó de função para a API do CallMeBot.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_8.png" style={{width:1000, height:'auto'}}/></div>

Agora, você receberá uma notificação no WhatsApp sempre que o seu Watcher for acionado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_Result.png" style={{width:1000, height:'auto'}}/></div>

## Depuração: Erros do Node-RED

Ao tentar integrar o Node-RED com o WhatsApp, é possível que você encontre um erro como este. Se isso acontecer, você pode seguir estas etapas para corrigi-lo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_Error.png" style={{width:300, height:'auto'}}/></div>

Para resolver esse problema, você pode tentar as seguintes etapas:

1. Instale o módulo ausente `aws4` executando, no diretório de usuário do Node-RED:

   ```sh
   npm install aws4
   ```

2. Se isso não funcionar, talvez seja necessário reinstalar o pacote `request`:

   ```sh
   npm install request
   ```

3. Se o problema persistir, talvez seja necessário reinstalar o nó do WhatsApp:

   ```sh
   npm install node-red-contrib-whatsapp-cmb
   ```

4. Como último recurso, você pode tentar limpar o cache do npm e reinstalar todas as dependências:

   ```sh
    npm cache clean --force
    npm install
   ```

Depois de tentar essas etapas, reinicie o Node-RED e veja se o erro foi resolvido. Se você ainda estiver enfrentando problemas, talvez seja necessário verificar a compatibilidade entre sua versão do Node.js, a versão do Node-RED e as versões dos pacotes que você está usando.

Parabéns por integrar com sucesso o Watcher ao WhatsApp! Você abriu a porta para uma vasta gama de oportunidades empolgantes em seus empreendimentos de desenvolvimento. Prepare-se para mergulhar na criação de aplicações inovadoras que aproveitam as robustas capacidades do WhatsApp. Esperamos ver as soluções notáveis que você desenvolverá a seguir!

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
