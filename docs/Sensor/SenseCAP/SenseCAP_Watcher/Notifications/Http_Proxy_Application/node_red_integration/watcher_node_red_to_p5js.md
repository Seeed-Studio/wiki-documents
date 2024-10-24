---
description: Send message from Watcher & Node-RED to p5js
title: Watcher & Node-RED to P5JS
keywords:
- watcher
- p5js
image: https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/headpic.png
slug: /watcher_node_red_to_p5js
last_update:
  date: 08/12/2024
  author: Allen
---

# Watcher & Node-RED To p5.js Quick Start

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/p5js_video.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## What is [p5.js](https://p5js.org/)

 p5.js is a JavaScript library that makes coding accessible for artists and designers. It provides an easy way to create graphics, animations, and interactive applications using a simple syntax. With features like drawing on a canvas, handling user input, and supporting multimedia, p5.js is ideal for creative coding projects, educational purposes, and digital art. Its vibrant community and extensive resources help users of all skill levels get started.

## Node-RED configuration

### Step 1.Run task in Watcher

First of all, you need to run a task in Watcher following the video below. If you want to know more [please click here](https://wiki.seeedstudio.com/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Step 2.Configuration

There are 4 modules you need to configure:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/1.png" style={{width:800, height:'auto'}}/></div>

1. **OpenStream:** Get data from Watcher to Node-RED. [Details please click here](https://wiki.seeedstudio.com/watcher_to_node_red/).

2. **function:** To process data from Watcher. **Double click** the function module and past the following codes into it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/2.png" style={{width:800, height:'auto'}}/></div>

```javascript
msg.payload = {
    content: msg.payload.value[0].content,
    image_url: msg.payload.value[0].image_url
};
return msg;
```

3. **http request:** Send a <span id="post">POST request</span> to **server** and then to p5.js.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/3.png" style={{width:800, height:'auto'}}/></div>

4. **debug:** To see output infomation, to debug it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/4.png" style={{width:600, height:'auto'}}/></div>

### Step 3.Deployment

When finish configuration, don't forget to **Deploy** it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/5.png" style={{width:800, height:'auto'}}/></div>

## Build a server

### Step 4.Download server code

[Please click this link](https://github.com/Seeed-Projects/SenseCAP_Watcher_WebSocket_P5js) to download the whole project code.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/7.png" style={{width:1000, height:'auto'}}/></div>

### Step 5.Run the server

Before running the server, you should install some packages first. 

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