---
description: Enviar mensagem do Watcher & Node-RED para o Twilio
title: Watcher & Node-RED para Twilio
keywords:
  - watcher
  - twilio
image: https://files.seeedstudio.com/wiki/watcher_to_twilio_image/tw1.png
slug: /watcher_node_red_to_twilio
last_update:
  date: 07/03/2024
  author: Allen
createdAt: '2024-07-04'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/watcher_node_red_to_twilio/
---

# Guia Rápido Watcher para Twilio

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/watcher_twilio.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Parte 1. O que é o [Twilio](https://www.twilio.com/)

Twilio é uma das principais plataformas de comunicação em nuvem para desenvolvedores. Ela oferece um conjunto de APIs para integrar recursos de voz, vídeo e mensagens em aplicativos. Com o Twilio, os desenvolvedores podem facilmente criar recursos avançados de comunicação, como chamadas de voz, chat por vídeo e mensagens SMS. Ele oferece ferramentas fáceis de usar e uma infraestrutura confiável, tornando-se uma das principais escolhas para desenvolvedores que desejam criar aplicações inovadoras e melhorar a experiência do usuário. O Twilio funciona em um modelo de pagamento conforme o uso, permitindo que os desenvolvedores paguem apenas pelos serviços de comunicação específicos que utilizarem.

## Parte 2. Como se registrar

**Passo 1.**[Clique aqui para ir ao Twilio](https://console.twilio.com/). Quando você terminar o registro, verá seu **SID** e **Token**. Além disso, precisamos comprar um número para enviar mensagens.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/1.png" style={{width:1000, height:'auto'}}/></div>

**Passo 2.** Vá para esta página, selecione um número de que você goste e compre-o. Como novo usuário, o Twilio lhe dará 15 dólares para testar suas funções.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/2.png" style={{width:1000, height:'auto'}}/></div>

**Passo 3.** Aqui está uma introdução sobre esse número, você pode dar uma olhada e então clicar no botão Buy.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/3.png" style={{width:600, height:'auto'}}/></div>

**Passo 4.** Esta página mostrará todos os números ativos. O número que você acabou de comprar aparecerá aqui.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/4.png" style={{width:1000, height:'auto'}}/></div>

**Passo 5.** Volte para a página do console e você verá o **SID**, o **Token** e o **número de telefone**. É isso que vamos precisar <span id="jump">mais tarde</span>.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/5.png" style={{width:1000, height:'auto'}}/></div>

## Parte 3. Como configurar o Twilio no Node-RED

Se você ainda não sabe como enviar mensagem do Watcher para o Node-RED, [clique aqui](https://wiki.seeedstudio.com/pt-br/watcher_to_node_red/).

**Passo 1.** Primeiro precisamos baixar o add-on Twilio no Node-RED, então clique em **Manage palette**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/6.png" style={{width:600, height:'auto'}}/></div>

**Passo 2.** Pesquise por twilio e instale o primeiro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/7.png" style={{width:600, height:'auto'}}/></div>

**Passo 3.** Arraste o módulo Twilio para a área de trabalho e dê um clique duplo nele, depois adicione uma nova configuração Twilio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/8.png" style={{width:1000, height:'auto'}}/></div>

**Passo 4.** Preencha essas propriedades, **SID**, **From** e **Token** vêm do [console do Twilio](#jump). **Name** significa o nome desta configuração.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/9.png" style={{width:600, height:'auto'}}/></div>

**Passo 5.** Preencha essas propriedades, **Output** significa se você quer SMS ou chamada telefônica, **To** significa para qual número de telefone você deseja enviar, **Name** significa o nome deste módulo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/10.png" style={{width:600, height:'auto'}}/></div>

**Passo 6.** Depois disso, você verá esta página.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/12.png" style={{width:600, height:'auto'}}/></div>

## Parte 4. Enviar mensagem para o Twilio

### Obter todos os resultados

**Passo 1.** Execute uma tarefa no Watcher.

Antes de tudo, você precisa executar uma tarefa no Watcher seguindo o vídeo abaixo. Se quiser saber mais, [clique aqui](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**Passo 2.** Arraste o módulo **OpenStream** do SenseCAP e o módulo **debug** para a área de trabalho e configure-os. Se você não souber como configurá-los, [clique aqui](https://wiki.seeedstudio.com/pt-br/watcher_to_node_red/). Conecte-os e clique no botão **Deploy** no canto superior direito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/101.png" style={{width:700, height:'auto'}}/></div>

**Passo 3.** Você receberá mensagens tanto na **página de depuração (debug)** quanto como **mensagem Twilio** no seu telefone.

<div class="table-center">
  <table align="center">
    <tr>
      <th>página de debug</th>
      <th>mensagem Twilio</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/11.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/allmsg.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

### Obter resultados específicos

**Passo 1.** Se você acha que receber todos os resultados é demais e quer apenas resultados específicos, precisa arrastar um **módulo function** para o meio e conectá-los.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/13.png" style={{width:1000, height:'auto'}}/></div>

**Passo 2.** Dê um clique duplo no **módulo function** e escreva alguns códigos para obter a mensagem que você deseja. Clique em **Done** e em **Deploy**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/14.png" style={{width:1000, height:'auto'}}/></div>

Obter uma mensagem específica.

```cpp
msg.payload = msg.payload.value[0].content;
return msg;
```

Se você quiser obter mais de uma mensagem, siga os códigos abaixo.

```cpp
var content = msg.payload.value[0].content;
var image_url = msg.payload.value[0].image_url;
var timestamp = new Date(msg.payload.timestamp).toLocaleString();

msg.payload = {
    value1: content,
    value2: image_url,
    value3: "Alert received at " + timestamp
};
return msg;
```

**Passo 2.** Execute uma tarefa no Watcher. Se você não souber como executar uma tarefa, [consulte aqui.](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher_task)

**Passo 3.** Você receberá mensagens tanto na **página de debug** quanto como **mensagem Twilio** no seu telefone.

<div class="table-center">
  <table align="center">
    <tr>
      <th>página de debug</th>
      <th>mensagem Twilio</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/15.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/onemsg.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

Parabéns por conectar o Watcher com o Twilio com sucesso! Agora, libere o poder dessa integração e comece a criar aplicações inovadoras que aproveitam recursos de comunicação perfeitos～

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
