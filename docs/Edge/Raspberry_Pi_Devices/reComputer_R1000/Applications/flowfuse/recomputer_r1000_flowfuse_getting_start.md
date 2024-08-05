---
description: Learn how to set up and configure FlowFuse on a reComputer. This guide covers creating an account, installing Node.js, adding and configuring devices, creating Node-RED flows, and deploying snapshots to devices from cloud for seamless integration and management.
title: reComputer R1000 with FlowFuse
keywords:
  - Flow Fuse
  - reComputer R1000
  - Node-Red
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_flow_fuse
last_update:
  date: 07/30/2024
  author: Kasun Thushara
---
## Introduction

[FlowFuse](https://flowfuse.com/) enhances Node-RED by adding features for collaborative development, managing remote deployments, supporting DevOps delivery pipelines, and hosting Node-RED applications. It serves as a DevOps platform specifically designed for the development and delivery of Node-RED applications, making it easier for teams to work together and deploy their projects efficiently.


## Getting Start

Before you start this project, you may need to prepare your hardware and software in advance as described here.

### Hardware Preparation

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

## Software Preparation

### Installing Node.js for FlowFuse on a reComputer

To prepare your reComputer for FlowFuse, you need to install Node.js. Follow these steps to install Node.js version 20:

1. **Preparing for the Node.js Repository**

First, update your package list and install the necessary certificates and tools:

```sh
sudo apt update
sudo apt install -y ca-certificates curl gnupg
```
2. **Setting Up the NodeSource Repository**

Next, set up the NodeSource repository on your reComputer:

```sh
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /usr/share/keyrings/nodesource.gpg
```

3. **Adding the Node.js Repository**

According to FlowFuse documentation, it is recommended to install Node.js version 20. Set the `NODE_MAJOR` variable to 20:

```sh
NODE_MAJOR=20
```

Add the Node.js repository to your reComputer’s sources list:

```sh
echo "deb [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
```
Update your package list again to include the Node.js repository:

```sh
sudo apt update
```
4. **Installing Node.js**

Finally, install Node.js:

```sh
sudo apt install nodejs
```
Now you have Node.js version 20 installed on your device.

To start using FlowFuse, you'll need to create an account and verify your email. Follow these simple steps:

## Create an Account

1. **Visit the Registration Page**:
   - Go to [FlowFuse Account Creation](https://app.flowfuse.com/account/create).

2. **Fill in the Registration Form**:
   - **Username**: Choose a unique username.
   - **Full Name**: Enter your full name.
   - **Email**: Provide a valid email address.
   - **Password**: Create a strong password.

3. **Submit the Form**:
   - After filling in all the required fields, click on the 'Create Account' button.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/signinpage.PNG" /></center>

4. **Check Your Email**:
   - Go to your email inbox and look for a verification email from FlowFuse.

5. **Open the Verification Email**:
   - Open the email and using the code verify email.

6. **Return to the FlowFuse Login Page**:
   - Go to the FlowFuse login page.

7. **Enter Your Credentials**:
   - Username/Email: Enter the username or email you registered with.
   - Password: Enter your password.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/email.PNG" /></center>

8. **Login**:
   - Click on the `Login` button to access your FlowFuse account. and you may ask to create a team. 

## Creating an Application in FlowFuse

To organize your Node-RED instances, they are grouped within Applications. Within your Application, you can have one or more Instances of Node-RED. The Instance is a customized version of Node-RED that includes various FlowFuse plugins to integrate it with the platform.

1. **Navigate to the Application Section**:
   - On the FlowFuse dashboard, click on `Create Application`.
  
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/application.PNG" /></center>

2. **Fill in the Application Details**:
   - **Name**: Enter a name for your application.
   - **Description**: Provide a brief description of your application.
   - **Instance Name**: Choose a name for your Node-RED instance.
   - **Blueprint: Select** `Blank Workspace` as the blueprint.
   - **Node-RED Version**: Choose the latest Node-RED version from the dropdown menu.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/application2.PNG" /></center>

3. **Create the Application**:
   - After filling in all the details, click on the `Create` button.

## Creating a Flow in FlowFuse

Let's create a flow in Node-RED to generate a random number and display it on a dashboard. If you're new to Node-RED, you can visit our [Node-RED Getting Started guide](https://wiki.seeedstudio.com/recomputer_r1000_getting_started_node_red/). Steps to Create a Flow

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/selectin.PNG" /></center>

1. **Open Node-RED Editor**:
   - Go to your instance and select the instance you just created.
   - Click on `Open Editor` to launch the Node-RED editor.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/openeditor.png" /></center>

2. **Install Required Nodes**:
   - You may not see the `random` node and `gauge` node by default. To install these:
   - Go to the top-right menu, select `Manage palette`.
   - Go to the `Install` tab.
   - Search for `Random` and `Dashboard` nodes and install them.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/noderedflow.PNG" /></center>

3. **Create the Flow**:
   - Copy the following flow and import it into your Node-RED editor to save time:
  
```sh
[
    {
        "id": "fd017c5f719054f5",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "45888468a69bbabb",
        "type": "random",
        "z": "fd017c5f719054f5",
        "name": "Random",
        "low": 1,
        "high": "100",
        "inte": "true",
        "property": "payload",
        "x": 340,
        "y": 160,
        "wires": [
            [
                "ce3820147521aaa6"
            ]
        ]
    },
    {
        "id": "5e571c440b2340e9",
        "type": "inject",
        "z": "fd017c5f719054f5",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "5",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 130,
        "y": 160,
        "wires": [
            [
                "45888468a69bbabb"
            ]
        ]
    },
    {
        "id": "ce3820147521aaa6",
        "type": "ui_gauge",
        "z": "fd017c5f719054f5",
        "name": "",
        "group": "7ac87662e9cf0550",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "Random Number",
        "label": "units",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "diff": false,
        "className": "",
        "x": 670,
        "y": 160,
        "wires": []
    },
    {
        "id": "7ac87662e9cf0550",
        "type": "ui_group",
        "name": "Default",
        "tab": "0dc7fe4a8add5b68",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "0dc7fe4a8add5b68",
        "type": "ui_tab",
        "name": "Home",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]
```
4. **Deploy the Flow**:
   -Click on the `Deploy` button in the top-right corner to deploy your flow.

## Adding and Configuring a Device in FlowFuse

1. **To add and configure a device in FlowFuse, follow these steps**:
 - In the FlowFuse dashboard, navigate to the `Devices` section.
 - Click on the `Add Device` button.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/device.PNG" /></center>

 - Fill in Device Details
 - Click the `Add` button to create your device.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_device.PNG" /></center>

2. **Copy the Device Configuration**

  - After adding the device, you will be presented with a Device Configuration.
  - Under the manual instructions, copy the provided code snippet. You will need these credentials to connect the device with the FlowFuse cloud.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_device2.PNG" /></center>

## Installing the Device Agent

On your reComputer terminal, run the following command to install the FlowFuse device agent:

```sh
sudo npm install -g @flowfuse/device-agent
```
### Configuring the Device Agent

1. **Create Configuration Directory**:  - Run the following command one by one to create the configuration directory and set the appropriate permissions:

```sh
   sudo mkdir /opt/flowfuse-device
   sudo chown -R $USER /opt/flowfuse-device
   sudo su
   cd /
   cd opt/flowfuse-device
```
2. Create and Edit Configuration File:**  - Open a new configuration file named `device.yml`:
   
```sh
nano device.yml
``` 
- Paste the copied device configuration into this file and save it by pressing `Ctrl + X`, then `Y`, and `Enter`.

3. Run the Device Agent:  - Execute the following command to start the FlowFuse device agent:
   
```sh
flowfuse-device-agent --port=1881
```
Your device is now configured and connected to the FlowFuse cloud, ready for use.

## Deploying the Flow to a Device

To deploy the flow to your device, you need to create a snapshot of your Node-RED instance and push it to the reComputer terminal. Follow these steps:

### Create a Snapshot

1. **Navigate to the Application**:
   - Go to your FlowFuse application and select the instance you created.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot1.PNG" /></center>

2. **Select 'Snapshot'**:
   - Click on the `Snapshot` option in the instance menu.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot2.PNG" /></center>

3. **Create a New Snapshot**:
   - Since there are no snapshots yet, you need to create one.
   - Click on `Create Snapshot`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot3.PNG" /></center>

4. **Fill in Snapshot Details**:
   - `Name`: Enter a name for your snapshot.
   - `Description`: Provide a brief description of the snapshot.
   - `Set as Target`: Tick the box to set this snapshot as the target.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot4.PNG" /></center>

5. **Create the Snapshot**:
   - Click on the `Create` button to create the snapshot. This will capture the current state of your Node-RED instance, including flows, credentials, environment variables, NPM packages (with locked versions), and runtime settings.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot5.PNG" /></center>

## Pushing the Snapshot to the Device

To deploy the snapshot to your device, follow these steps:

1. **Go to the Device Section**
  - In the FlowFuse dashboard, go to the `Devices` section.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/device_add_sanp.PNG" /></center>

2. **Select the Device**
  - Find the device you created and configured earlier.
  - Tap on the three dots next to the device name.
  - Click on `Add Instance`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_instance.PNG" /></center>

3. **Add the Instance to the Device**
  - Choose the application and instance you created earlier.
  - Click the `Add` button.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_instance2.PNG" /></center>

4. **Deploy the Flow**
  - Your flow will be deployed to the device within a few seconds. It will run with the configurations and settings captured in the snapshot.

5. **Access the Device**
  - Go to your device by navigating to `<ip_address_recomputer>:1881/ui` in your web browser.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/gauge.PNG" /></center>

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










