---
description: Enviar mensagem do Watcher & Node-RED para p5js
title: Watcher & Node-RED para P5JS
keywords:
  - watcher
  - p5js
image: https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/headpic.png
slug: /watcher_node_red_to_p5js
last_update:
  date: 08/12/2024
  author: Allen
createdAt: '2024-08-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/watcher_node_red_to_p5js/
---

# Guia Rápido de Watcher & Node-RED para p5.js

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/p5js_video.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## O que é o [p5.js](https://p5js.org/)

 p5.js é uma biblioteca JavaScript que torna a programação acessível para artistas e designers. Ela fornece uma maneira fácil de criar gráficos, animações e aplicações interativas usando uma sintaxe simples. Com recursos como desenhar em um canvas, lidar com entrada do usuário e suporte a multimídia, p5.js é ideal para projetos de programação criativa, fins educacionais e arte digital. Sua comunidade vibrante e seus recursos extensivos ajudam usuários de todos os níveis de habilidade a começarem.

## Configuração do Node-RED

### Etapa 1. Executar tarefa no Watcher

Antes de tudo, você precisa executar uma tarefa no Watcher seguindo o vídeo abaixo. Se quiser saber mais [clique aqui](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Etapa 2. Configuração

Há 4 módulos que você precisa configurar:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/1.png" style={{width:800, height:'auto'}}/></div>

1. **OpenStream:** Obter dados do Watcher para o Node-RED. [Para mais detalhes clique aqui](https://wiki.seeedstudio.com/pt-br/watcher_to_node_red/).

2. **function:** Para processar dados do Watcher. **Clique duas vezes** no módulo function e cole nele os códigos a seguir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/2.png" style={{width:800, height:'auto'}}/></div>

```javascript
msg.payload = {
    content: msg.payload.value[0].content,
    image_url: msg.payload.value[0].image_url
};
return msg;
```

3. **http request:** Enviar uma <span id="post">requisição POST</span> para o **servidor** e depois para o p5.js.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/3.png" style={{width:800, height:'auto'}}/></div>

4. **debug:** Para ver informações de saída, para depurá-las.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/4.png" style={{width:600, height:'auto'}}/></div>

### Etapa 3. Implantação

Quando terminar a configuração, não se esqueça de **Deploy**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/5.png" style={{width:800, height:'auto'}}/></div>

## Construir um servidor

### Etapa 4. Baixar o código do servidor

[Clique neste link](https://github.com/Seeed-Projects/SenseCAP_Watcher_WebSocket_P5js) para baixar todo o código do projeto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/7.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 5. Executar o servidor

Antes de executar o servidor, você deve instalar alguns pacotes primeiro. 

```npm install express body-parser cors ws```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/14.png" style={{width:600, height:'auto'}}/></div>

Unzip the package and get into it, and then run ```node server.js``` to run the server.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/8.png" style={{width:800, height:'auto'}}/></div>

Now the server is listening port 3000, so the message from [Node-RED](#post) will be sent to this server, and then to p5.js.

## VScode configuration

### Step 6.Install extensions

You need to install 2 extensions, there are **Live Server** and **p5.vscode**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/6.png" style={{width:600, height:'auto'}}/></div>

### Step 7.Open project

Open the project you just download.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/12.png" style={{width:600, height:'auto'}}/></div>

The structure will like below image when open it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/13.png" style={{width:600, height:'auto'}}/></div>

### Step 7.Run project

Open **sketch.js** and click the **Go Live** button, which will run the project locally on default browser.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/9.png" style={{width:1000, height:'auto'}}/></div>

The effect will like below image, this servcie running on port 5500.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/10.png" style={{width:1000, height:'auto'}}/></div>

When detected people, it will look like this.

:::tip
You need to keep running Node-RED and server.js
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/11.png" style={{width:1000, height:'auto'}}/></div>

Congratulations on successfully completing your journey from Watcher to p5.js! You’ve gained valuable skills, and there are many more exciting features waiting for you to explore. Keep experimenting and enjoy the creative possibilities ahead!

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>