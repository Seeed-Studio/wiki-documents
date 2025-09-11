---
description: Send data from Watcher & Node-RED to WhatsApp
title: Watcher & Node-RED to WhatsApp
keywords:
- Watcher
- WhatsApp
- Node-RED
image: https://files.seeedstudio.com/wiki/Watcher_WhatsApp/watcher_whatsapp.png
slug: /watcher_node_red_to_whatsapp
last_update:
  date: 07/25/2024
  author: Vincent
---

# Watcher To WhatsApp Quick Start

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/watcher_whatsapp.png" style={{width:1000, height:'auto'}}/></div>

[**WhatsApp**](https://web.whatsapp.com/) is an instant messaging and voice-over-IP service owned by Meta. It enables users to send text, voice, and video messages, make voice and video calls, and share images, documents, locations, and other content.

This tutorial will guide you through integrating the Watcher API with Node-RED to seamlessly send data from the Watcher to WhatsApp. This integration provides a simple and efficient method to **receive notifications and opens the door for further applications and integrations**.

## Part 1. Set up Watcher in Node-RED

### Step 1. Set up Node-RED

Fisrt of all, you need to run a task in Watcher following the video below. If you want to know more [please click here](https://wiki.seeedstudio.com/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Node-RED is required for this setup, along with the Watcher API. If you haven't installed Node-RED or connected it with the Watcher API, start here: [**Watcher to Node-RED Quick Start**](https://wiki.seeedstudio.com/watcher_to_node_red).

### Step 2. Get data from Watcher

After setting up the Watcher to work with Node-RED, the next step is to prepare the data from the Watcher for WhatsApp. Double click the function node to format the data appropriately.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

For the purpose of this tutorial, we will be sending the content as well as the the image URL. However, you are encouraged to transform the data as needed for your application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_2.png" style={{width:1000, height:'auto'}}/></div>

#### Example Node-RED Function to Format Data

```sh
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```
## Part 2. Set up WhatsApp API 

### Step 3. Sign up for WhatsApp

A WhatsApp account is required to proceed. If you do not already have an account, please [**click here**](https://www.whatsapp.com) and complete the steps to create an account.

If you already have an account, please proceed to [**Step 4**](#step-4-get-callmebot-api-key).

### Step 4. Get CallMeBot API Key

Once you have your WhatsApp account set up and logged in, now it is time to set up the CallMeBot API. This is the API that will link between Node-RED and WhatsApp.

To get your CallMeBot API key, follow these steps (taken from [**this Github repo**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/blob/main/README.md#create-api-key)):

1. Add the phone number +34 644 66 32 62 into your Phone Contacts. (Name it it as you wish)
2. Send this message "I allow callmebot to send me messages" to the new Contact created (using WhatsApp of course)
3. Wait until you receive the message "API Activated for your phone number. Your APIKEY is 123123" from the bot. As this is still in beta testing, the activation can take up to 2 minutes.
4. The WhatsApp message from the bot will contain the apikey needed to send messages using the API.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_API.png" style={{width:1000, height:'auto'}}/></div>

:::note
There is a possibility that the phone number provided in this tutorial for the CallMeBot API might be full and unable to accept more requests. If this occurs, CallMeBot will send you a WhatsApp message with an alternative phone number to use.

In case you do not receive such a message and all provided phone numbers are full, you may need to find an alternative API to link Node-RED to WhatsApp. Make sure to check the latest updates and documentation on the CallMeBot website or explore other WhatsApp messaging APIs compatible with Node-RED.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_Full.png" style={{width:1000, height:'auto'}}/></div>
:::

## Part 3. Integrate WhatsApp with Node-RED 

### Step 5. Install WhatsApp module 

Click the three bars icon and then click **Manage palette** option. This opens a new window where you can add or remove nodes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

Switch to the **Install** tab within the palette management window. In the search bar, type `whatsapp` to find the module. Then, click the **install** button next to the **node-red-contrib-whatsapp-cmb** entry.

We also recommend reviewing the [**node's documentation**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/blob/main/README.md) and the associated [**Github repository**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb) if you want a more in-depth understanding of how the module works and how to maximize its potential.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

:::note
The **node-red-contrib-whatsapp-cmb** module is recommended for its current compatibility and reliability at the time of writing this tutorial (July 2024). However, the availability and functionality of Node-RED modules can vary over time. It's advisable to review the most recent user feedback and compatibility notes in the Node-RED library or GitHub repositories. If you encounter issues with this module, consider exploring other WhatsApp modules listed in the Node-RED library for a more suitable option.
:::

### Step 6. Configure WhatsApp node 

Once you installed the WhatsApp module, drag the **Send Message** node to your Node-RED flow and connect it to the function node.

Double-click the **Send Message** node to configure it. Then, click the plus icon next to the Account field to add a new Account configuration.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_5.png" style={{width:1000, height:'auto'}}/></div>

1. Enter the name you would like to use for this account.
2. Enter the phone number associated with your WhatsApp account.
3. Enter your API key.

Then, click **Add** or **Update** to save the Account configuration.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_6.png" style={{width:1000, height:'auto'}}/></div>

With the account configured, change the dropdown next to the Message field to **msg.**, and type `payload` into the text field. Finally, click **Done** to complete the configuration of the WhatsApp node.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

### Step 7. Deploy

Finally, deploy your flow by clicking the Deploy button at the top right of the Node-RED interface. This action activates your configured nodes, allowing data to flow from your function node to the CallMeBot API.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_8.png" style={{width:1000, height:'auto'}}/></div>

Now, you will receive a notification from WhatsApp whenever your Watcher is triggered.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_Result.png" style={{width:1000, height:'auto'}}/></div>

## Debugging: Node-RED Errors

When trying to integrate Node-RED with WhatsApp, it is possible you will encounter an error like this. If this does occur, you can follow these steps to fix it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_Error.png" style={{width:300, height:'auto'}}/></div>

To resolve this issue, you could try the following steps:

1. Install the missing `aws4` module by running in your Node-RED user directory:

   ```sh
   npm install aws4
   ```

2. If that doesn't work, you might need to reinstall the `request` package:

   ```sh
   npm install request
   ```

3. If the problem persists, you may need to reinstall the WhatsApp node:

   ```sh
   npm install node-red-contrib-whatsapp-cmb
   ```

4. As a last resort, you could try clearing your npm cache and reinstalling all dependencies:

   ```sh
    npm cache clean --force
    npm install
   ```

After trying these steps, restart Node-RED and see if the error is resolved. If you're still encountering issues, you may need to check for compatibility between your Node.js version, Node-RED version, and the versions of the packages you're using.

Congratulations on successfully integrating Watcher with WhatsApp! You've opened the door to a vast array of exciting opportunities in your development endeavors. Prepare to dive into creating innovative applications that harness the robust capabilities of WhatsApp. We look forward to seeing the remarkable solutions you'll develop next!

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
