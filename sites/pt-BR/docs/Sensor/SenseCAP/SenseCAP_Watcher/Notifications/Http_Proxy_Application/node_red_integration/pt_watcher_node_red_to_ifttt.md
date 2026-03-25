---
description: Enviar mensagem do Watcher & Node-RED para o IFTTT
title: Watcher & Node-RED para IFTTT
keywords:
  - watcher
  - IFTTT
image: https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/ifttthead.png
slug: /watcher_node_red_to_ifttt
last_update:
  date: 06/28/2024
  author: Allen
createdAt: '2024-07-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/watcher_node_red_to_ifttt/
---

# Guia Rápido: Watcher para IFTTT

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/watcher_ifttt.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Parte 1. O que é o [IFTTT (If This Then That)](https://ifttt.com/)

 IFTTT é um serviço baseado na web que permite aos desenvolvedores criar automações e integrações entre vários aplicativos, dispositivos e serviços sem programação complexa. Ele permite que os usuários definam instruções condicionais simples chamadas de "applets" que disparam ações com base em eventos específicos. Ele fornece uma interface amigável e uma vasta biblioteca de applets prontos, tornando mais fácil para os desenvolvedores criarem automações e integrações poderosas de forma eficiente.

## Parte 2. Como configurar o IFTTT

### Passo 1. Configurar Webhooks

Primeiro, precisamos **criar** um Applet no IFTTT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/1.png" style={{width:1000, height:'auto'}}/></div>

Precisamos **adicionar** um gatilho.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/2.png" style={{width:500, height:'auto'}}/></div>

Pesquise por **Webhooks** e clique nesse serviço.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/3.png" style={{width:500, height:'auto'}}/></div>

Você verá uma breve introdução do gatilho Webhooks e vamos selecionar o segundo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/4.png" style={{width:500, height:'auto'}}/></div>

Dê um nome ao seu gatilho e crie-o.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/5.png" style={{width:500, height:'auto'}}/></div>

### Passo 2. Configurar Email

Quando o gatilho for acionado, precisamos executar uma ação. Então aqui você define qual ação deseja realizar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/6.png" style={{width:500, height:'auto'}}/></div>

Vamos enviar um email via Gmail quando o gatilho for acionado. Claro, há milhares de serviços que você pode usar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/7.png" style={{width:800, height:'auto'}}/></div>

Selecione a conta Gmail e preencha o endereço de email para onde você quer enviar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/8.png" style={{width:600, height:'auto'}}/></div>

Personalize o **Assunto** e o **Corpo** como quiser ou deixe o padrão.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/9.png" style={{width:600, height:'auto'}}/></div>

Clique no botão **Continue**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/11.png" style={{width:600, height:'auto'}}/></div>

### Passo 3. Finalizar o Applet

Você pode editar o **título do Applet** ou deixá-lo como padrão e então clicar em **Finish**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/12.png" style={{width:600, height:'auto'}}/></div>

Quando terminar, você pode salvar este link porque iremos usá-lo depois.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/13.png" style={{width:600, height:'auto'}}/></div>

## Parte 3. Acessar o IFTTT no Node-RED

### Passo 4. Mensagem do Watcher enviada para o Node-RED

Arraste esses módulos para o workspace e conecte-os. Se você ainda não sabe como enviar mensagem do Watcher para o Node-RED, [clique aqui](https://wiki.seeedstudio.com/pt-br/watcher_to_node_red/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/20.png" style={{width:1000, height:'auto'}}/></div>

### Passo 5. Processar a mensagem que você quer enviar para o IFTTT

Dê um clique duplo no módulo **function** e escreva algum código para obter **value1** e **value2**, talvez **value3**. Esses valores serão enviados para o IFTTT.

```javascript
var content = msg.payload.value[0].content;
var image_url = msg.payload.value[0].image_url;

msg.payload = {
    value1: content,
    value2: image_url,
};
return msg;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/21.png" style={{width:1000, height:'auto'}}/></div>

Dê um clique duplo no módulo **http request**, selecione o método **POST** e **cole a URL** que você acabou de copiar do IFTTT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/22.png" style={{width:1000, height:'auto'}}/></div>

Quando terminar, não se esqueça de **Deploy**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/23.png" style={{width:800, height:'auto'}}/></div>

## Parte 4. Enviar mensagem via IFTTT

### Passo 6. Enviar uma tarefa para o Watcher

Antes de tudo, você precisa executar uma tarefa no Watcher seguindo o vídeo abaixo. Se quiser saber mais [clique aqui](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Passo 7. Verificar essas mensagens no IFTTT e no telefone

Abra **My Applets** e clique no applet que você criou antes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/14.png" style={{width:1000, height:'auto'}}/></div>

Role a página para baixo e clique no botão **View activity**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/15.png" style={{width:800, height:'auto'}}/></div>

Continue rolando para baixo e clique nesses dois botões.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/16.png" style={{width:800, height:'auto'}}/></div>

E então você verá essas mensagens enviadas pelo Watcher, bem como o seu email.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Mensagem do IFTTT</th>
      <th>Mensagem de email</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/16_1.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/wm.png" style={{width:320, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

Parabéns por concluir o demo de email do Watcher para IFTTT! Este é apenas o começo da sua jornada com o IFTTT. Há incontáveis outras aplicações e integrações esperando para você descobrir. Continue explorando, aprendendo e automatizando para tornar sua vida mais eficiente e produtiva. As possibilidades são infinitas com o IFTTT, então divirta-se e boas experiências!

## Suporte Técnico & Discussão sobre Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
