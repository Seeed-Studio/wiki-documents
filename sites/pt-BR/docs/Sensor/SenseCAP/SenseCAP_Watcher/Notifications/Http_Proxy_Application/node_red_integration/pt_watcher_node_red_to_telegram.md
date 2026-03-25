---
description: Enviar mensagem do Watcher e Node-RED para o Telegram
title: Watcher e Node-RED para Telegram
keywords:
  - watcher
  - Telegram
image: https://files.seeedstudio.com/wiki/watcher_to_telegram_image/telhead.png
slug: /watcher_node_red_to_telegram
last_update:
  date: 06/07/2024
  author: Allen
createdAt: '2024-07-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/watcher_node_red_to_telegram/
---

# Guia Rápido: Watcher para Telegram

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/watcher_telegram.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## O que é o [Telegram](https://telegram.org/)

Telegram é um aplicativo de mensagens popular que oferece uma ampla variedade de recursos tanto para usuários quanto para desenvolvedores. Com sua API e protocolo abertos, desenvolvedores podem criar clientes personalizados do Telegram, bots e integrar os serviços do Telegram em suas próprias aplicações. O Telegram fornece uma plataforma segura e confiável para comunicação em tempo real, suportando vários tipos de mídia, bate-papos em grupo e criptografia de ponta a ponta. Sua infraestrutura em nuvem garante sincronização perfeita entre dispositivos e permite fácil escalabilidade. Desenvolvedores podem aproveitar os recursos e ferramentas do Telegram para construir soluções inovadoras e aprimorar a experiência dos usuários em seus projetos.

## Como acessar a API do Telegram

### Etapa 1. Obter o token do bot

1. Primeiro você precisa baixar o aplicativo Telegram e entrar na página do **BotFather**. Envie **/newbot** e, de acordo com as instruções, **dê um nome ao seu bot**.

2. Depois disso, **clique no link** na página 2 para ir para o seu bot (página 3) e então **envie algo para o seu bot**. Lembre-se de enviar alguma coisa, caso contrário você não conseguirá obter o seu chatid.

3. Outra coisa importante é **salvar o seu token** onde eu fiz o mosaico na página 2. Vamos usá‑lo mais tarde.

<div class="table-center">
  <table align="center">
    <tr>
      <th>página 1</th>
      <th>página 2</th>
      <th>página 3</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/10.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/11.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/12.png" style={{width:400, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

### Etapa 2. Obter o chatId do bot

De acordo com a etapa anterior, o BotFather vai lhe dar algum retorno quando você criar o seu bot. Você encontrará o **Token** no retorno, e o formato será algo como: **123456789:AoUJnnpoFlkkdfJbCXlo....** Em seguida, use o seu Token para acessar este link e obter o seu **ChatId**.

```python
#access this link using your Token
https://api.telegram.org/bot{Token}/getUpdates

#example
https://api.telegram.org/bot123456789:AoUJnnpoFlkkdfJbCXlo.../getUpdates
```

Você encontrará o seu **ChatId** conforme a imagem abaixo. O ChatId será algo como: **7283028524**. **Salve o seu Token e o ChatId**, vamos usá‑los mais tarde.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/1.png" style={{width:800, height:'auto'}}/></div>

## Configurar o módulo do Telegram no Node-RED

### Etapa 3. Instalar o módulo do Telegram

Siga a imagem abaixo para instalar o módulo do Telegram. Se você ainda não instalou o Node-RED, [consulte aqui](https://wiki.seeedstudio.com/pt-br/watcher_to_node_red/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/2.png" style={{width:500, height:'auto'}}/></div>

**Pesquise por telegram** e instale o terceiro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/3.png" style={{width:800, height:'auto'}}/></div>

### Etapa 4. Conectar e configurar módulos

**Arraste** esses módulos para a área de trabalho e conecte‑os. Se você não souber como configurar o **OpenStream**, você ainda pode [consultar este link](https://wiki.seeedstudio.com/pt-br/watcher_to_node_red/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/4.png" style={{width:1000, height:'auto'}}/></div>

Agora vamos configurar o módulo **function**. Dê um clique duplo nele e cole o código a seguir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/5.png" style={{width:1000, height:'auto'}}/></div>

```javascript
msg.image_url = msg.payload.value[0].image_url;
msg.content = msg.payload.value[0].content;
msg.chatId = "7098248409";  // change to your Telegram Chat ID

// set payload to send photo
var photoPayload = {
    chatId: msg.chatId,
    type: "photo",
    content: msg.image_url
};

// set payload to send message
var messagePayload = {
    chatId: msg.chatId,
    type: "message",
    content: msg.content
};

// send photo
node.send({ payload: photoPayload });

// send message
node.send({ payload: messagePayload });
```

Depois disso, em seguida vamos configurar o módulo **sender**, seguindo a imagem abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/6.png" style={{width:800, height:'auto'}}/></div>

Cole aqui o **nome do seu bot, Token, ChatId**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/7.png" style={{width:800, height:'auto'}}/></div>

A configuração do outro **sender** é semelhante, basta seguir a imagem abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/14.png" style={{width:800, height:'auto'}}/></div>

## Enviar informações para o Telegram

### Etapa 5. Executar uma tarefa no Watcher

Antes de tudo, você precisa executar uma tarefa no Watcher seguindo o vídeo abaixo. Se quiser saber mais, [clique aqui](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Etapa 6. Enviar mensagem e foto para o Telegram

Quando a tarefa for acionada, você receberá uma mensagem do seu Watcher. Tanto no Node-RED quanto no aplicativo Telegram.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Node-RED</th>
      <th>Telegram</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/8.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/13.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

Parabéns por conectar o Watcher ao Telegram com sucesso! Você desbloqueou um mundo de possibilidades empolgantes para a sua jornada de desenvolvimento. Prepare‑se para explorar e criar aplicações inovadoras que aproveitam os poderosos recursos do Telegram. O futuro é promissor, e estamos ansiosos para ver o que você vai construir a seguir!

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que a sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
