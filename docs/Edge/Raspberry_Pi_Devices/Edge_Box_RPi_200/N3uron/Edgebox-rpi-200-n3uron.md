---
description: EdgeBox RPi 200 with N3uron
title: EdgeBox RPi 200 with N3uron
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Edgebox-rpi-200-n3uron
last_update:
  date: 07/29/2023
  author: José Granero Nueda & Kasun Thushara
---

## What is N3uron?

N3uron is a complete Industrial Edge Platform for IIoT & DataOps that enables seamless integration between the industrial plant floor and third-party applications, whether on-premise or in the cloud.
With N3uron, you can easily create bidirectional data pipelines between OT and IT systems and decouple devices from applications by consolidating, modeling, processing and visualizing all your operational data in a single source of truth and ultimately making all this data available across the entire organization.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron1.png" alt="pir" width="700" height="auto" /></div>

- **Modular**: It is fully modular, with nearly fifty modules, users can stack as required to meet their project needs, acquiring only the ones strictly necessary for their applications.

- **Cross-platform**: N3uron can run on most versions of Windows and Linux distributions as well as on ARM architectures like Raspberry Pi.

- **Unlimited license**: N3uron boasts an unlimited licensing model, offering unrestricted usage in terms of tags, users, devices, and connections, all at an affordable price.

- **Web-based**: Once installed all you need to access the node is a web browser.

- **Rapid deployment and development**: N3uron can be installed in less than a minute, and its development environment facilitates quick data model creation, especially when utilizing templates.

- **Extremely efficient**: A single node can easily manage several hundred thousand tags, while maintaining low hardware requirements.

- **Scalable and versatile architecture**: From its inception, N3uron was conceived to seamlessly deploy distributed architectures with several hundred or thousand nodes. Users can connect multiple nodes quickly using N3uron Links, effortlessly scaling their architecture to suit their needs.


## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

EdgeBox-RPI-200 series are all-in-one Raspberry Pi-based industrial edge computing controllers, combining multiple industrial purposes. Designed as high-scalability and rugged industrial hardware, mounted with rich IO resources and supported by the great Raspberry Pi industrial software ecosystem, it is an ideal choice for smart automation and Industrial Internet of Things(IIoT) solutions.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Prerequisites

### Hardware
* [EdgeBox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html) 

### Software
* [N3uron Industrial IIoT & DataOps Platform](https://n3uron.com/)

## Installation

N3uron can be easily installed with our one-step automated installation script, simply run the following command in your EdgeBox terminal:

```sh
sudo curl -fsSL https://get.n3uron.com/install.sh | sudo bash
``` 
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/gif1.gif" alt="pir" width="600" height="auto" /></div>

In a few seconds you’ll have N3uron installed, up and running.

If you prefer a manual installation take a look at our [Knowledge Base section](https://docs.n3uron.com/docs/platform-installation-upgrade#linux-setup) for more information.

## Usage

N3uron was designed with a microservice-oriented architecture in which each module runs as an independent process and Bootstrap is the core service that manages the rest of the processes. By default the [WebUI module](https://docs.n3uron.com/docs/platform-web-user-interface) is automatically activated, making it accessible as soon as the installation is complete, additional functionalities are enabled creating new module instances.

Each module requires a valid license to run in production mode. If a module doesn’t find a valid license, it will run in demo mode for two hours. In order to restart the demo period, the module must be restarted.

Let’s see a step-by-step example of how N3uron facilitates data collection through the [OPC UA Client](https://docs.n3uron.com/docs/opc-ua-client) and how this data can be seamlessly published to an MQTT Broker using the [MQTT Client module](https://docs.n3uron.com/docs/mqtt), enabling continuous data pushing via MQTT.

### Configure OPC UA Client

- **Step 1** : Please open your favourite browser on a different machine on the local network to access the N3uron WebUI, use the Edgebox-RPI-200's IP address and the port that was configured for the WebUI (by default 8003 for HTTP or 8443 for HTTPS).

Default N3uron WebUI users.

<div class="table-center">

|            |   Full access |  Read-only access |  
|---         |     ---       |        ---        |
|  User:     |    admin      |       user        |
|  Password: |    n3uron     |       n3uron      |

</div>

- **Step 2** : Open the N3uron WebUI and navigate to Config→Modules, click on the menu and then create a **New Module**, we’ll name it **OpcUaClient**. 

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron4.png" alt="pir" width="600" height="auto" /></div>

- **Step 3**: Select **OpcUaClient** as the module type, then, click on the **Save** button below to instantiate the module.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron5.png" alt="pir" width="600" height="auto" /></div>

- **Step 4**: The newly created module will appear under Modules, navigate to its configuration and create a **New Client**, we’ll name it **DataSim**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron6.png" alt="pir" width="600" height="auto" /></div>

- **Step 5**: Configure the OPC UA Client to connect to our DataSim endpoint as follows:

```sh
Endpoint URL: opc.tcp://datasim.n3uron.com:4840
Security Mode: None
Security Policy: None

Authentication:
	Enabled: Yes
	User: sunn3rgy
	Password: n3uron

``` 

Click on **Save** to apply changes and reload the module.
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron7.png" alt="pir" width="600" height="auto" /></div>

- **Step 5**: Navigate to the OPC Browser section inside the module and select the previously created DataSim client.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron8.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron9.png" alt="pir" width="600" height="auto" /></div>

### Create a tag

- **Step 1**: Drag and drop the desired object from the browser to the data model section.
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/gif2.gif" alt="pir" width="600" height="auto" /></div>

- **Step 2**: Now you can find the newly created tag in Config→Tags and view its value in the [Real Time section](https://docs.n3uron.com/docs/platform-visualizing-real-time-values).

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron10.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron11.png" alt="pir" width="600" height="auto" /></div>

### Create a template

[Templates](https://docs.n3uron.com/docs/platform-templates) offer the ability to leverage object-oriented data design principles in N3uron. Allowing users to dramatically reduce the amount of time invested in deploying a new project.

By creating and using [Templates](https://docs.n3uron.com/docs/platform-templates), users can generate new instances to rapidly build complex data structures and communication configurations. Any changes to the template definition are then inherited by all instances, drastically saving time when making routing changes.

Just drag and drop the desired object into the templates section and start building your template using [custom properties](https://docs.n3uron.com/docs/platform-templates-custom-properties), [inheritance](https://docs.n3uron.com/docs/platform-templates-inheritance) and [more](https://docs.n3uron.com/docs/platform-templates-nesting).

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/gif3.gif" alt="pir" width="600" height="auto" /></div>

### Configure MQTT Client

**Step 1**: Go to Config→Modules, click on the menu and then create a **New Module** named MqttClient.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron12.png" alt="pir" width="600" height="auto" /></div>

- **Step 2**: Select MqttClient as the module type, then click Save.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron13.png" alt="pir" width="600" height="auto" /></div>

- **Step 3**: Navigate to the new module and create a **New Connection** named HiveMQ.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron14.png" alt="pir" width="600" height="auto" /></div>

- **Step 4**: Configure the connection to use the public HiveMQ broker:

```sh
Broker URL: broker.hivemq.com
Port: 1883
``` 
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron15.png" alt="pir" width="600" height="auto" /></div>


- **Step 5**: Create a New Publisher and set a destination topic, for example “/n3/edgebox”.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron16.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron17.png" alt="pir" width="600" height="auto" /></div>

- **Step 6**: Create a **Tag Filter** to match all tags in this node, the Tag Filter is how we tell the module which tags should be published to the broker. Click on **Save** to apply all the changes and reload the module. 

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron18.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron19.png" alt="pir" width="600" height="auto" /></div>


- **Step 7**: Head to Diagnostics and enable the Real-Time logs for the MqttClient module, wait to see the logs emitted by the module every time it publishes new data to the broker.

 <div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron20.png" alt="pir" width="600" height="auto" /></div>


### Instantiate a WebVision module

**Step 1:** Open N3uron and navigate to the Config menu.

**Step 2:**  Click on Modules, then create a new module. This instance can be given any name (except names with special characters like ‘.’, ‘/’, etc.), although users are recommended to name instances in a similar way to the name of the module being instantiated for easy identification. In this example, the WebVision module has been selected and has also been named WebVision.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_5.gif" /></center>

**Step 3:** Navigate to the main configuration of WebVision and choose the appropriate server settings. The default settings should suffice for most use cases. For further details, please refer to the following link: [WebVision Initial Configuration](https://docs.n3uron.com/docs/web-vision-configuration).


<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_6.png" /></center>

**Step 4:** Once the WebVision module has been instantiated, the first step is to assign permissions to the roles previously created in the Roles section of WebUI. By default, two roles exist: Administrator for administrative access and User for regular access. You can add users to these roles or create new ones as needed. Once roles are established, set permissions for Designer and Viewer roles accordingly. 
Additionally, establish a Tag filter path for each role. Tag filter path access determines which tags from the tag model will be accessible for visualization by the corresponding role. In this case, we will assign the complete path of the tag model to both roles.


- Administrator:
    - Designer: Edit
    - Viewer: View
    - TagFilterPath:
        - Mode: Include
        - Path: /
        - Regex pattern: .*
- User:
    - Designer: None
    - Viewer: View
    - TagFilterPath:
        - Mode: Include
        - Path: /
        - Regex pattern: .*

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_7.gif" /></center>

- Useful Links 

  - [Users and Roles Configuration](https://docs.n3uron.com/docs/platform-security-users-and-roles)

  - [Access Configuration](https://docs.n3uron.com/docs/web-vision-configuration#access-configuration)

**Step 5:** To test our initial WebVision screen, let's create a tag. Go to the WebUI, select **Config**, and then click on **Tag**. In the **Model** section, click on the menu and choose **New Tag**. Name it **TestTag**, for instance, select the type as **Number**, grant it **Read-Write permission**, initialize it to 0 (optional) and then save the settings.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_8.gif" /></center>

**Step 6:** Next, navigate to WebVision in the Config section and click on **Open Designer**.
Log in using your **Administrator credentials**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_9.png" /></center>

**Step 7:** In the Templates section, create a new Container named Main. Then, designate this container as the startup. This will set Main as our initial WebVision screen. It will appear with an asterisk symbol (*) beside it.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_10.gif" /></center>

**Step 8:** Change the background color of the Main container. 

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_11.gif" /></center>


**Step 9:** Inside the Main container, navigate to Components and add a new component. For this example, select the Gauge component.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_12.gif" /></center>

**Step 10:** Within the Gauge component, select the tag that will provide the values displayed on the gauge component.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_13.gif" /></center>

**Step 11:** Next, navigate to WebVision in the Config section and click on Open UI.
Log in using your Administrator credentials.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_14.png" /></center>

**Step 12:** To test our simple design, navigate to the WebUI and select Data > Realtime. Change the value of TestTag. Afterwards, return to the WebVision UI and verify if the value displayed by the Gauge component has been updated.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_15.gif" /></center>


There is much to explore about WebVision to enhance your Edge Box experience. For further details, please refer to our [Knowledge Base on WebVision](https://docs.n3uron.com/docs/web-vision-configuration).


What you've seen is just the beginning. Embrace the limitless possibilities offered by its impressive array of nearly 50 modules. Dare to dream big, innovate, and take your projects to new heights with N3uron's cutting-edge features. For a deeper dive into this powerful platform, visit [https://n3uron.com/](https://n3uron.com/) and embark on an exciting journey of discovery!