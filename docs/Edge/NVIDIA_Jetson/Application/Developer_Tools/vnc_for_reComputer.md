---
description: This wiki describes how to use VNC remote desktop tools on reComputer Jetson step by step.
title: Using VNC on reComputer Jetson
tags:
  - AI model deploy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /vnc_for_recomputer
last_update:
  date: 9/30/2024
  author: YaoHui Zhu
---

# How to use VNC remote desktop tools on the reComputer Nvidia Jetson

## Introduction

VNC is a remote desktop tool that allows you to remotely control your reComputer Nvidia Jetson form ohter PC devices, with real-time access to the graphical desktop. This wiki describes how to install and use VNC on the reComputer Nvidia Jetson.

## Prerequisites
-  A Jetson device: suitable for [all Seeed Stuido Nvidia devices](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)


<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

-  [A Hdmi Dummy Plug](https://www.cytron.io/p-full-size-hdmi-dummy-plug-for-headless-setup). 
:::note
If you don't want to connect a monitor, you must use an **`HDMI Dummy Plug`** to enable remote desktop control.
:::


<div align="center">
    <img width={300} 
     src="https://static.cytron.io/image/cache/catalog/products/CA-HDMI-DMP/HDMI%20USB%20(a)-800x800.png" />
</div>


## Getting Started
### Insatll VNC
 **Step 1.** Install VNC on Jetson:
 ```bash
  sudo apt update
  sudo apt install vino
 ```

 **Step 2.** Enable the VNC server to start each time you log in:
 ```bash
  cd /usr/lib/systemd/user/graphical-session.target.wants
  sudo ln -s ../vino-server.service ./.
 ```

 **Step 3.** Configure VNC Server
 ```bash
  gsettings set org.gnome.Vino prompt-enabled false
  gsettings set org.gnome.Vino require-encryption false
 ```

 **Step 4.** Set a password to access the VNC server
 ```bash
 # Replace thepassword with your desired password
  gsettings set org.gnome.Vino authentication-methods "['vnc']"
  gsettings set org.gnome.Vino vnc-password $(echo -n 'thepassword'|base64)
 ```

 **Step 5.** Edit `org.gnome` to add a parameter for the `enabled key`
 ```bash
  cd /usr/share/glib-2.0/schemas
  sudo cp org.gnome.Vino.gschema.xml org.gnome.Vino.gschema.xml.old
  sudo vi org.gnome.Vino.gschema.xml 
 ```
Paste the following code into the location below, ensuring the format is the same as below.

  ```bash
  <key name='enabled' type='b'>
        <summary>Enable remote access to the desktop</summary>
        <description>
                If true, allows remote access to the desktip via the RFB
                protocol. Users on remote machines may then connect to the
                desktop using a VNC viewer.
        </description>
        <default>false</default>
      </key>
  ```

<div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig1.png" />
  </div>

### Compile and start
 Compile:

 ```bash
  sudo glib-compile-schemas /usr/share/glib-2.0/schemas
  sudo reboot
 ```
 start:

 ```bash
  /usr/lib/vino/vino-server
 ```

## Connecting to VNC service from another computer

You’ll need to know the IP address of your Jetson developer kit to connect from another computer. Run the ifconfig command on your developer kit and note down the IP address assigned to eth0 interface if using ethernet, wlan0 interface if using wireless, or l4tbr0 if using the USB device mode Ethernet connection. Then, you need to connect an HDMI dummy plug to Jetson.

- Windows:
  - Step 1: Download and Install VNC viewer from [here](https://www.realvnc.com/en/connect/download/viewer/).
  - Step 2: Launch the VNC viewer and type in the IP address of your developer kit.
  - Step 3: If you have configured the VNC server for authentication, provide the VNC password.

- MacOS:
  - Step 1. Open FInder and choose Go | Go to Folder from the menu bar.
  - Step 2: Enter “/System/Library/CoreServices/Applications” and click Go.
  - Step 3: Open the app named Screen Sharing and enter the connection information. For example: username@.
  - Step 4: Click connect.
  - Step 5: If you have configured the VNC server for authentication, provide the VNC password.

- Linux: The example below is using gvncviewer, however any of your favourite vnc clients should work as well. One popular alternative is remmina.
  - Step 1. Install gvncviewer by executing following commands:

    ```bash
    sudo apt update
    sudo apt install gvncviewer
    ```
  - Step 2: Launch gvncviewer.
      ```bash
    gvncviewer 
    ```
  - Step 3: If you have configured the VNC server for authentication, provide the VNC password.

## Enable the VNC server to start each time you log in:
**Step 1.** Search for `Startup Application Preferences` in the application.
<div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig2.png" />
  </div>

**Step 2.** Click the `Add` button, and you can fill in `Name` and `Comment` fields with any text. In the `Command` field, add the following instruction:
```bash
nohup /usr/lib/vino/vino-server > /dev/null 2>&1 &
```

<div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig3.png" />
  </div>

Click `Save` and restart the reComputer. Disconnect the monitor and connect the **HDMI Dummy Plug** to the Jetson. Now, You can verify through VNC. 

<div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig4.png" />
  </div>

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