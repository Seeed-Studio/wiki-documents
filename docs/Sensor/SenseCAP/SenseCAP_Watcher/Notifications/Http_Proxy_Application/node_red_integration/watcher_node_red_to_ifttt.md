---
description: Send message from Watcher & Node-RED to IFTTT
title: Watcher & Node-RED to IFTTT
keywords:
- watcher
- IFTTT
image: https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/ifttthead.png
slug: /watcher_node_red_to_ifttt
last_update:
  date: 06/28/2024
  author: Allen
---

# Watcher To IFTTT Quick Start

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/watcher_ifttt.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Part 1. What is [IFTTT (If This Then That)](https://ifttt.com/)

 IFTTT is a web-based service that allows developers to create automations and integrations between various apps, devices, and services without complex programming. It enables users to define simple conditional statements called "applets" that trigger actions based on specific events. It provides a user-friendly interface and a vast library of pre-built applets, making it accessible for developers to create powerful automations and integrations efficiently.

## Part 2. How to configure IFTTT

### Step 1. Configure Webhooks

First, we need to **Create** a IFTTT Applet.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/1.png" style={{width:1000, height:'auto'}}/></div>

We need to **Add** a trigger.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/2.png" style={{width:500, height:'auto'}}/></div>

Search **Webhooks** and click that service.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/3.png" style={{width:500, height:'auto'}}/></div>

You will see a brief introduction of Webhooks trigger and we're going to select the second one.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/4.png" style={{width:500, height:'auto'}}/></div>

Give it a name of your trigger and create it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/5.png" style={{width:500, height:'auto'}}/></div>

### Step 2. Configure Email

When trigger fired, we need to take action. So here is what action you want to take.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/6.png" style={{width:500, height:'auto'}}/></div>

We are going to send a email via Gmail when trigger fired. Of course, there are millions of services you can use.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/7.png" style={{width:800, height:'auto'}}/></div>

Select Gmail account and fill in email address where you want to send.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/8.png" style={{width:600, height:'auto'}}/></div>

Customize **Subject** and **Body** as you want or by default.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/9.png" style={{width:600, height:'auto'}}/></div>

Click **Continue** button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/11.png" style={{width:600, height:'auto'}}/></div>

### Step 3. Finish Applet

You can edit your **Applet Title** or let it by default, and then click **Finish**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/12.png" style={{width:600, height:'auto'}}/></div>

When you finish, you can save this link because we will use it later.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/13.png" style={{width:600, height:'auto'}}/></div>

## Part 3. Access IFTTT in Node-RED

### Step 4. Watcher message send to Node-RED

Drag those module to workspace and connect them together. If you don't know how to send message from watcher to Node-RED yet, [please click here](https://wiki.seeedstudio.com/watcher_to_node_red/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/20.png" style={{width:1000, height:'auto'}}/></div>

### Step 5. Process message you want to send to IFTTT

Double click **function** module and write some code to get **value1** and **value2**, maybe **value3**. Those value will be sent to IFTTT.

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

Double click **http request** module, select **POST** method and **paste URL** you just copy from IFTTT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/22.png" style={{width:1000, height:'auto'}}/></div>

When finished, don't forget to **Deploy** it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/23.png" style={{width:800, height:'auto'}}/></div>

## Part 4. Send message via IFTTT

### Step 6.Send a task to Watcher

First of all, you need to run a task in Watcher following the video below. If you want to know more [please click here](https://wiki.seeedstudio.com/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Step 7.Check those message in IFTTT and Phone

Open **My Applets** and click the applet you created before.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/14.png" style={{width:1000, height:'auto'}}/></div>

Scroll down the page and click **View activity** button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/15.png" style={{width:800, height:'auto'}}/></div>

Continue to scroll down and click this two button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/16.png" style={{width:800, height:'auto'}}/></div>

And then you will see those message sent by Watcher as well as your email.


<div class="table-center">
  <table align="center">
    <tr>
      <th>IFTTT message</th>
      <th>Email message</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/16_1.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/wm.png" style={{width:320, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

Congratulations on completing the Watcher to IFTTT email demo! This is just the beginning of your journey with IFTTT. There are countless more applications and integrations waiting for you to discover. Keep exploring, learning, and automating to make your life more efficient and productive. The possibilities are endless with IFTTT, so have fun and happy experimenting!

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