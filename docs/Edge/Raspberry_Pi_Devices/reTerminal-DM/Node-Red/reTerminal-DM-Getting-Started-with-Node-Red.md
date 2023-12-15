---
description: reTerminal DM Getting Started with Node-Red
title: reTerminal DM Getting Started with Node-Red
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-DM-Getting-Started-with-Node-Red
last_update:
  date: 04/04/2023
  author: Peter Pan
---
#  reTerminal DM Getting Started with Node Red

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br />

> Node-RED is a programming tool for wiring together hardware devices, APIs and online services in new and interesting ways.
> It provides a browser-based editor that makes it easy to wire together flows using the wide range of nodes in the palette that can be deployed to its runtime in a single-click.
>
> — nodered.org

Since reTerminal DM is equipped with rich scalability and hybrid connectivity, such as Digital I/O, CAN bus, RS485, RS232 and powerful wireless communication capabilities such as WiFi, BLE, \*4G, \*LoRa®. Where Node-RED is one of the best low-code programming tool which could rule them all, and Thanks to the Node-RED Dashboard node which could be configured and utilised together with the 10.1" 10-point multi-touch high-sensitivity capacitive panel for the on-site Human Machine Interface purpose.

> \*4G and LoRa® modules does not come with reTerminal DM by default, please purchase the relevant modules accordingly.

Here is the getting started guide on how to setup, as well as getting familiar with the Node-RED interface together on reTerminal DM.

:::tip
* For **Raspbian OS** User Please Go TO: [Install Node-RED](#install-and-setting-up-node-red)
* For **Sensecraft Edge OS** User Please Go TO: [Getting Familiar with Node-RED](#getting-familiar-with-node-red), Since Sensecraft Edge OS comes with Node-RED preinstalled
:::

## Install and Setting up Node-RED On Raspbian OS

Once you have complete with the setup a new Operating System with reTerminal DM by Following the [Install OS on reTerminal DM](/reterminal-dm-flash-OS/), please follow the steps below to setup the Node-RED.

### Install Node-RED

* **STEP 1:** Getting access to your reTerminal DM

  * option 1: Directly connect the Mouse and Keyboard

    Please go ahead and open `Terminal` APP on you reTerminal DM.

    make sure your reTerminal DM is connected to internet.

  * option 2: by using SSH

    Make sure your host computer could get access to the reTerminal DM via network and reTerminal DM is connected to internet

    **on Windows:**

      Please open **PowerShell** program and then type `ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}`, please replace `{USERNAME}` and `{RETERMINALDM_IP_ADDRESS}` according to your setup:
            
      For Example in my case the  `{USERNAME}` is `pi` and `{RETERMINALDM_IP_ADDRESS}` is `192.168.43.100` :

      ```sh
      ssh pi@192.168.43.100
      ```
      
      Then please enter the password for the `{USER}` of the Operating System you have setup on your reTerminal DM 
      
      eg: For Raspbian OS the default login credential is
       * Username: `pi`
       * Password: `raspberry`

    **on Mac/Linux:**

      Please open **Terminal** APP and type `ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}`, please replace `{USERNAME}` and `{RETERMINALDM_IP_ADDRESS}` according to your setup:
      
      For Example in my case the  `{USERNAME}` is `pi` and `{RETERMINALDM_IP_ADDRESS}` is `192.168.43.100` :

      ```sh
      ssh pi@192.168.43.100
      ```

      Then please enter the password for the `{USER}` of the Operating System you have setup on your reTerminal DM 
      
      eg: For Raspbian OS the default login credential is
       * Username: `pi`
       * Password: `raspberry`

* **STEP 2:** Install Node-RED:

The Node-RED team has prepared us with a [All-IN-ONE](https://nodered.org/docs/getting-started/raspberrypi) script, which you could just enter the following command into the reTerminal DM native `Terminal` APP or in the `SSH Shell` from the step above.

```sh
  bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```

:::note

There are many options on installing Node-RED with Raspberry Pi, you can explore the [official guide](https://nodered.org/docs/getting-started/), here we show you the [all-in-one](https://nodered.org/docs/getting-started/raspberrypi) guide to install Node-RED on reTerminal DM.
:::

Once the installation process finished you should see a `.node-red` folder with `ls -all` commands as shown in the image below:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-installed.png" /></div><br />

### Setup Node-RED

Once you have installed Node-RED, please follow the steps below to setup and getting the Node-RED environment ready.

* **STEP 1:** Start Node-RED:
  
    After the installation with the [All-IN-ONE](https://nodered.org/docs/getting-started/raspberrypi) script is complete, you can use follow commands accordingly:
  
    Use `node-red-stop`                          to stop Node-RED<br />
    Use `node-red-start`                         to start Node-RED again<br />
    Use `node-red-log`                           to view the recent log output<br />
    Use `sudo systemctl enable nodered.service`  to autostart Node-RED at every boot<br />
    Use `sudo systemctl disable nodered.service` to disable autostart on boot<br />

    So to start the Node-RED editor you can run following command in the `Terminal` APP on reTerminal DM:
    
    ```sh
    node-red-start
    ```
    if you want to enable the node-RED as autostart service you could use `sudo systemctl enable nodered.service` command and you should see the the output as shown below.

    <div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-autostart.png" /></div>

* **STEP 2:** Access Node-RED editor:

    Now please open your favorite Web Browser and enter the url described as below:
    * Option 1: Use `http://127.0.0.1:1880`, if the web browser is running locally on your reTerminal DM.
    * Option 2: Use `http://{RETERMINALDM_IP_ADDRESS}:1880`, if the web browser is running remotely on a host computer, please replace the `{RETERMINALDM_IP_ADDRESS}` with the ip address of reTerminal DM. 

## Getting familiar with Node-RED

Now you should see the similar result as the image below:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/inital-node-editor.png" /></div><br />

### Node-RED editor Overview

Please get yourself familiar with the Node-RED editor.

The core Element of the Node-RED editor are listed:

* Node Panel
* Flow Editor
* Config Panel
* Settings Button
* Deploy Button

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-editor.png" /></div><br />

### Install Nodes

There are two options on install Node-RED node modules, if you are using the SenseCraft EDGE OS please use the [Node-RED editor method](#option-2-node-red-editor): 

#### Option 1: Command line

STEP 1: Please go to Node-RED folder

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-folder.png" /></div><br />

```sh
cd .node-red/
```

STEP 2: Install Modbus Node

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/npm-install-node.png" /></div><br />

```sh
npm install node-red-contrib-modbus
```

STEP 3: Once the node gets install, Please restart the Node-RED service with:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-restart.png" /></div><br />

```sh
node-red-restart
```

#### Option 2: Node-RED editor

STEP 1: Click the `Settings` button with "three dash" icon located at the right corner and then select the `Manage palette`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/manage_palette.png" /></div>

STEP 2: At the palette tab click `Install` tab

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/install-tab.png" /></div>

STEP 3: Search for the node in the node search bar and Click `install` button to install

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/search-install.png" /></div>

STEP 4: click on 'Install` button from the dropdown warning window to confirm install

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-click.png" /></div>

STEP 5: Wait for the installation to complete and you should see the `install` button changed to `installed`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installing.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installed.png" /></div>

STEP 6: you should see the Modbus nodes in the side bar

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-nodes.png" /></div>

# reTerminal DM Supported Nodes

* [reTerminal DM RS485 Port with Node-RED](/reTerminal-DM-Node-Red-RS485)
* [reTerminal DM MQTT with Node-RED](/reTerminal-DM-Node-Red-mqtt)
* [reTerminal DM CAN BUS with Node-RED](/reTerminal-DM-Node-Red-canbus)
  
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
