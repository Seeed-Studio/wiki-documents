---
description: Send message from Watcher & Node-RED to Telegram
title: Watcher & Node-RED to Telegram
keywords:
- watcher
- Telegram
image: https://files.seeedstudio.com/wiki/watcher_to_telegram_image/telhead.png
slug: /watcher_node_red_to_telegram
last_update:
  date: 06/07/2024
  author: Allen
---

# Watcher To Telegram Quick Start

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/watcher_telegram.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## What is [Telegram](https://telegram.org/)

Telegram is a popular messaging app that offers a wide range of features for users and developers alike. With its open API and protocol, developers can create custom Telegram clients, bots, and integrate Telegram's services into their own applications. Telegram provides a secure and reliable platform for real-time communication, supporting various media types, group chats, and end-to-end encryption. Its cloud-based infrastructure ensures seamless synchronization across devices and allows for easy scalability. Developers can leverage Telegram's features and tools to build innovative solutions and enhance user experiences within their projects.

## How to access Telegram API

### Step 1. Get bot token

1. First you need to download a Telegram APP and get into **BotFather** page. Send **/newbot** and according to tips to **name your bot**.

2. After that, **click the link** in page 2 to jump to your bot(page 3) and then **send something to you bot**. Remenber to send something, otherwise you can't get your chatid.

3. Another important thing is to **save your token** where I make masaic in page 2. We will use it later.

<div class="table-center">
  <table align="center">
    <tr>
      <th>page 1</th>
      <th>page 2</th>
      <th>page 3</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/10.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/11.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/12.png" style={{width:400, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

### Step 2. Get bot chatId

According to previous step, BotFather will give you some feedback when you created your bot. You will find **Token** in the feedback and the format would be like: **123456789:AoUJnnpoFlkkdfJbCXlo....** And then use your Token to access this link to get your **ChatId**.

```python
#access this link using your Token
https://api.telegram.org/bot{Token}/getUpdates

#example
https://api.telegram.org/bot123456789:AoUJnnpoFlkkdfJbCXlo.../getUpdates
```

You will find your **ChatId** following the image below. The ChatId would be like: **7283028524**. **Save your Token and ChatId**, we will use them later.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/1.png" style={{width:800, height:'auto'}}/></div>

## Configure Telegram module in Node-RED

### Step 3. Install Telegram module

Following the image below to install Telegram module. If you haven't install Node-RED yet,[please refer here](https://wiki.seeedstudio.com/watcher_to_node_red/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/2.png" style={{width:500, height:'auto'}}/></div>

**Search telegram** and install the third one.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/3.png" style={{width:800, height:'auto'}}/></div>

### Step 4. Connect and configure modules

**Drag** those modules to workspace and connect them together. If you don't know how to configure **OpenStream**, you can still [refer this link](https://wiki.seeedstudio.com/watcher_to_node_red/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/4.png" style={{width:1000, height:'auto'}}/></div>

Now we are going to configure **function** module. Double click it and paste the following code into it.

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

After that, next we are going to configure **sender** module, following the below image.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/6.png" style={{width:800, height:'auto'}}/></div>

Paste you **bot name, Token, ChatId** here.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/7.png" style={{width:800, height:'auto'}}/></div>

Another **sender**'s configuration is similar, just following the below image.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/14.png" style={{width:800, height:'auto'}}/></div>

## Send infomation to Telegram

### Step 5. Run a task in Watcher

First of all, you need to run a task in Watcher following the video below. If you want to know more [please click here](https://wiki.seeedstudio.com/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Step 6. Send message and photo to Telegram

When the task is triggered, you will receive message from your Watcher. Both Node-RED and Telegram App.

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

Congratulations on successfully connecting Watcher to Telegram! You've unlocked a world of exciting possibilities for your development journey. Get ready to explore and create innovative applications that leverage Telegram's powerful features. The future is bright, and we can't wait to see what you'll build next!

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