---
description: Send message from Watcher & Node-RED to twilio
title: Watcher & Node-RED to Twilio
keywords:
- watcher
- twilio
image: https://files.seeedstudio.com/wiki/watcher_to_twilio_image/tw1.png
slug: /watcher_node_red_to_twilio
last_update:
  date: 07/03/2024
  author: Allen
---

# Watcher To Twilio Quick Start

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/watcher_twilio.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Part 1. What is [Twilio](https://www.twilio.com/)

Twilio is a leading cloud communications platform for developers. It offers a set of APIs to integrate voice, video, and messaging capabilities into applications. With Twilio, developers can easily build powerful communication features such as voice calls, video chat, and SMS messaging. It provides user-friendly tools and reliable infrastructure, making it a top choice for developers to create innovative applications and improve user experiences. Twilio operates on a pay-as-you-go model, allowing developers to only pay for the specific communication services they use.

## Part 2. How to register

**Step 1.**[Click here jump to Twilio](https://console.twilio.com/). When you finish registration, you will see your **SID** and **Token**. Besides, we need to buy a number to send message.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/1.png" style={{width:1000, height:'auto'}}/></div>

**Step 2.** Go to this page and select a number you like and buy it. As a new user, Twilio will give you 15 dollars to try its functions.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/2.png" style={{width:1000, height:'auto'}}/></div>

**Step 3.** Here is a introduction of this number, you can take a look and then click the Buy button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/3.png" style={{width:600, height:'auto'}}/></div>

**Step 4.** This page will show all active numbers. The number you buy just now will show here.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/4.png" style={{width:1000, height:'auto'}}/></div>

**Step 5.** Go back to console page you will see **SID**, **Token** and **phone number**. That's what we need <span id="jump">later</span>.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/5.png" style={{width:1000, height:'auto'}}/></div>

## Part 3. How to configure Twilio in Node-RED

If you don't know how to send message from watcher to Node_RED yet, [please click here](https://wiki.seeedstudio.com/watcher_to_node_red/).

**Step 1.** First we need to download Twilio add-on in Node-RED, so click **Manage palette**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/6.png" style={{width:600, height:'auto'}}/></div>

**Step 2.** Search twilio and install the first one.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/7.png" style={{width:600, height:'auto'}}/></div>

**Step 3.** Drag the Twilio module to workspace and double click it, and then add a new Twilio configration.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/8.png" style={{width:1000, height:'auto'}}/></div>

**Step 4.** Fill in those properties, **SID** and **From** and **Token** are from [Twilio console](#jump). **Name** means this configuration name.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/9.png" style={{width:600, height:'auto'}}/></div>

**Step 5.** Fill in those properties, **Output** means you want SMS or phone call, **To** means which phone number you want to send, **Name** means this module name.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/10.png" style={{width:600, height:'auto'}}/></div>

**Step 6.** After that, you will see this page.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/12.png" style={{width:600, height:'auto'}}/></div>

## Part 4. Send message to twilio

### Get all results

**Step 1.** Run a task in Watcher.

First of all, you need to run a task in Watcher following the video below. If you want to know more [please click here](https://wiki.seeedstudio.com/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**Step 2.** Drag sensecap **OpenStream** module and **debug** module to workspace and configure them. If you don't know how to configure, [please click here](https://wiki.seeedstudio.com/watcher_to_node_red/). Connect them and Click the **Deploy** button on the right upside coner.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/101.png" style={{width:700, height:'auto'}}/></div>

**Step 3.** You will receive message at both **debug page** and **Twilio message** on your phone.

<div class="table-center">
  <table align="center">
    <tr>
      <th>debug page</th>
      <th>Twilio message</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/11.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/allmsg.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

### Get specific results

**Step 1.** If you thought getting all results is too much and you just want to get specific results. You need to drag a **function module** to the middle and connect them.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/13.png" style={{width:1000, height:'auto'}}/></div>

**Step 2.** Double click **function module** and write some codes to get which message you want. Click **Done** and **Deploy** it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/14.png" style={{width:1000, height:'auto'}}/></div>

Get one specific message.

```cpp
msg.payload = msg.payload.value[0].content;
return msg;
```

If you want to get more than one message please following the codes below.

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

**Step 2.** Run a task in Watcher, if you don't know how to run a task, [please refer here.](https://wiki.seeedstudio.com/getting_started_with_watcher_task)

**Step 3.** You will receive message at both **debug page** and **Twilio message** on your phone.

<div class="table-center">
  <table align="center">
    <tr>
      <th>debug page</th>
      <th>Twilio message</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/15.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/onemsg.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

Congratulations on successfully connecting Watcher with Twilio! Now, unleash the power of this integration and start building innovative applications that leverage seamless communication capabilities～

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