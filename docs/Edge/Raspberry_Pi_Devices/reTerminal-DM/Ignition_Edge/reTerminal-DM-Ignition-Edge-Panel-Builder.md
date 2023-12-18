---
description: reTerminal DM Ignition Edge Panel Builder Hello World
title: reTerminal DM Ignition Edge Panel Builder Hello World
keywords:
  - Edge
  - reTerminal-DM
  - Ignition Edge
  - Panel Builder
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-DM-Ignition-Edge-Panel-Builder
last_update:
  date: 09/29/2023
  author: Corey Thompson
---

:::note
This document assumes you have already have an Ignition Edge Gateway running and on your network. 
Before attempting these instructions, follow [Getting Started with Ignition Edge](./reTerminal-DM-Getting-Started-with-Ignition-Edge.md) if you need assistance with this.
:::

## Hardware Prerequisites
- PC / Mac with SSH terminal capability
- PC / Mac with available hard drive capacity to install Ignition's Designer applciations
- 12-24V DC power supply
- Ethernet cable
- reTerminal DM x 1

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br />

## Licensing
This tutorial will not require activation of any products, although it may cause some interruption for you during the series depending on the pace you are working at while following along. Ignition Edge products requires a license for full usage in production. There is a trial version of the product available which has full feature support, however, it will clear its data every two hours. 

To get a license for the product, you will need to either reach out to an Inductive Automation sales representative or you can purchase your own on the [Inductive Automation Ignition pricing](https://inductiveautomation.com/pricing/ignition) page.

To enter the license, simply follow the green banner prompting you to activate ignition on your Ignition Edge Gateway's home page. Ensure your edge device has internet connectivity and enter the 6 or 8 character string and the device will take a few seconds to activate.

## Creating a Hello World View With Panel Designer

To demonstrate how to create a basic page and display it at a fixed URL, we will create a 'hello world' perspective project and view it on the gateway using a web browser. 

To load the gateway's home page, launch a web browser either on the reTerminal itself at `localhost:8088` OR from another device on the network at `{reterminalhostname}:8088` OR from anywhere on the network with the IP address of the reTerminal itself at `{reterminalip}:8088`

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-launch-screen.png" />
</p>

### Install and Setup Ignition Edge Panel Builder

On the gateway's home screen there is a button to download the Designer Launcher. The Designer Launcher is the HMI designer software which installs onto your local PC/Mac and remotely loads the designs onto the reTerminal DM. 

Begin by downloading and executing this installer. It will detect your operating system and install an app on your machine with a very basic installer. After the installation is complete, it will prompt whether you would like to import your setting from the gateway - click **yes**.

Launch the newly installed Ignition Designer Launcher, it should show the connection to your device. Click on your device and and then click the 'open designer' button that is now enabled in the bottom corner.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-designer-launcher.png" />
</p>

You should now see a login prompt appear. Enter your Ignition admin credentials that were entered during the setup of your Edge Gateway.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-designer-login.png" />
</p>

### Create and Load a Panel

1. In the left column, expand 'Perspectives' and right click on the 'Views'
2. Create a new view and give it a name 'hello-world'
3. Find the components pallete, which is sometimes in a hidden tab container on your right. Search for a 'label' and drag it onto the canvas.
4. Double click on the label and change your text to 'hello world'
5. Save the file and in the top menu bar navigate to File -> Update Project to publish the updated project (aka 'Perspective session') to the gateway.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-create-helloworld.gif" />
</p>

Now that you've updated your Perspective session, it is live and you can navigate to it with a web browser! 
To get help finding the URL for the view we just created, you can return to the Edge Gateway Launcher and view the active Perspective sessions. This will launch a browser on your session's home page URL.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-view-helloworld.gif" />
</p>

## Expanding Your HMI
You have now setup the basics of Ignition's Perspective module to power the visuals of your ReTerminal. To create more powerful visuals leveraging the full Ignition platform, you will likely need to setup Tag Servers, Historian Databases, etc which are outside the scope of this tutorial. To learn more about the Ignition platform, use their excellent documentation and instructions for free at [Inductive University.](https://inductiveuniversity.com/)

## Perspective Vs Vision
Ignition offers two panel builder softwares and it is a common question to decide which one to use. There is a lot of overlap in functionality between the two, but there are a couple key deciding factors to make the decision.

### Will your users be mobile-first? Choose Perspective.
If you wish to use iOS or Android native packages such as location services, or cameras you will only have access to these features through Perspective.

### Do you want to feel more native than a web browser? Choose Vision.
If you want to avoid the feel of many modern web apps (like Google Drive, Outlook for web, Zoom for web, etc) and fully immerse your user experience, then you should choose Vision.

### Will your users multi-task on this device? Choose Perspective
Perspective is a javascript-based tech stack and relies on a web browser to display the application. Vision is a Java-based application and was originally built for dedicated HMI panels and makes assumptions that the host machine will be wholly dedicated to your application. If your user will sometimes want to minimize the HMI to use another application on the operating system, you should choose Perspective.

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
