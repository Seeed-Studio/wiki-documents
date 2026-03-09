---
title: Seeed Studio XIAO nRF54L15 Sense Zigbee
description: ''
keywords:
  - xiao
  - nrf54l15
  - zigbee
  - ncs
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_0_1.webp
slug: /xiao_nrf54l15_zigbee
sku: 101991422
last_update:
  date: 1/27/2026
  author: Brandy
createdAt: '2026-01-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/xiao_nrf54l15_zigbee/
---

This tutorial guides you through implementing [Zigbee](https://en.wikipedia.org/wiki/Zigbee) applications on the Seeed Studio **XIAO nRF54L15** development board, this board combines **Wi-Fi**, **Bluetooth Low Energy (BLE)**, and **Zigbee** connectivity, making it perfect for **IoT applications**. The examples in this guide use the NCS to bring Zigbee functionality to life.



:::note Prerequisite: nRFConnect SDK Usage

If you haven't prepared your NCS, refer to the **[Getting Started Guide](https://wiki.seeedstudio.com/xiao_nrf54l15_sense_getting_started/#nrfconnect-sdk-usage)**. 

If you are concerned that the nRF Connect SDK has not been downloaded completely or has issues, you can verify the integrity and correctness of the downloaded nRF Connect SDK in the following way. Select **Manage west workspace**, then select **West Update**, as shown below. 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/26.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/27.png" style={{width:800, height:'auto'}}/></div>

:::
## Table of Contents
- [Zigbee Overview](#zigbee-overview)
  - [Zigbee Data Model](#zigbee-data-model)
  - [Zigbee Network Architecture](#zigbee-network-architecture)
    - [Network Topologies](#network-topologies)
- [Started with NCS Zigbee](#started-with-ncs-zigbee)

## Zigbee Overview

Zigbee is a **low-power**, **low-bandwidth** wireless communication protocol based on the IEEE 802.15.4 standard. It is tailored for IoT scenarios such as **home automation**, **smart cities**, and **industrial control**, offering robust mesh networking capabilities for reliable communication in dynamic environments.

- We will provide a brief explanation of Zigbee-related content. If you want to directly refer to the application examples, you can also skip ahead.
       - [Started with NCS Zigbee](#started-with-ncs-zigbee)

### Zigbee Data Model

Zigbee communication relies on the **Zigbee Cluster Library (ZCL)**, which defines how devices organize their functionality and interact. Key components include:

1. **Device Types**
    Zigbee devices (e.g., switches, sensors, lights) are pre-defined with specific behaviors, grouped into functional **Clusters**.

2. **Clusters**
    Clusters are logical groupings of:

   - **Attributes**: Represent device states, like brightness or temperature.
   - **Commands**: Trigger actions, such as turning a light on or setting brightness to 50%.

   Examples:

   - **On/Off Cluster**: Controls binary states like power.
   - **Level Control Cluster**: Adjusts intensity or brightness.
   - **Temperature Measurement Cluster**: Sends temperature readings.
   - **Scenes Cluster**: Saves and recalls preset configurations.

3. **Attributes & Commands**
    Attributes store device data (e.g., state, configuration), while commands initiate actions.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

### Zigbee Network Architecture

A Zigbee network consists of three primary node types:

1. **Zigbee Coordinator (ZC)**  
   - Serves as the central hub of the network.  
   - Handles network creation, device authentication, and address allocation.  
   - Responsible for initializing and managing the network.  
   - Each Zigbee network can have only **one Coordinator**.  

2. **Zigbee Router (ZR)**  
   - Extends the network range by relaying messages between devices.  
   - Supports additional devices joining the network.  
   - Typically mains-powered to ensure constant operation and reliable message relaying.  
   - Battery-powered Routers are possible but less common due to higher energy demands. 

 :::tip

Of course, routers are not necessary. When the distance is short, routers can be omitted. For example, our next demo does not use a router.

:::

3. **Zigbee End Device (ZED)**  
   - Lightweight and power-efficient devices that communicate with a parent node (either a Coordinator or Router).  
   - Do not route messages to other devices.  
   - Optimized for battery operation and typically enter sleep modes to conserve energy.

:::note

- **Addressing and Routing**:
  - Zigbee uses a 16-bit addressing scheme. Devices communicate through a mix of direct and indirect addressing.  
  - Routing decisions are made by Routers using algorithms like AODV (Ad hoc On-demand Distance Vector).  

- **Power Management**:
  - Zigbee End Devices are optimized for low power consumption. They often operate in sleep mode and only wake when needed.  
  - Routers and the Coordinator are generally mains-powered for consistent availability.

:::

#### Network Topologies

Zigbee supports three primary network topologies, depending on the application requirements and environment:

#### 1. Mesh Topology

- A single Coordinator and multiple Routers form a self-healing, robust network.  
- Devices can dynamically reroute messages if a communication path is disrupted, ensuring high reliability.  
- Ideal for large-scale networks requiring wide coverage and redundancy.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNptkcEOgjAQRH9lsydI5CDcuIo_oJ5MLxu6AlG6pLYmxvjvVlFSgj3NtG9nmvaBtWjGEgGgsTS0cKiUgXFtRKzuDDmxSRKZNIUsy2An3rFdJ8koYJ2m_0YjNp_YPGK_OR9ua3TFt67mEBs0jGYWHeOjLqbYYsHlMff3bKrMZ5XLGxZzvJjhoRlX2LPtqdPhPR_vYYWu5Z4VlkFqsmeFyjwDR97J_m5qLJ31vEIrvml_xg-aHFcdhQ_psTzR5Rp2BzJHkZ9_vgDkroUg" style={{width:380, height:'auto', "border-radius": '1px'}}/></div>

- **Key Features**:  
  - Dynamic rerouting ensures high reliability.  
  - Supports large networks with scalable coverage.  
  - Self-healing mechanisms increase fault tolerance.  

#### 2. Tree Topology

- The Coordinator acts as the root of a hierarchical structure, with Routers forming branches.  
- Each branch can have multiple End Devices or additional Routers, creating a tree-like structure.  
- Communication depends on hierarchical paths, which introduces potential single points of failure.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqF0MEKwjAMBuBXCTmt4A5OT7s6X0A9SS9hjW7omlFbQcR3tzqVFQV7yl--_IdcsRbDWCIA7B31DWwqbWF4CxFnWkteXJaNglKQ5zmsJHh20ywbBpgq9Wt1ZIuPLUb21fN0S2sqPrc1x9o4wxCS6p-8SPh3e5HyWcJn__g84XOlcIIdu45aE093fSxr9A13rLGMoyF30KjtLToKXtYXW2PpXeAJOgn7BssdHU8xhd6Q56qlePzu89uT3Yq88-0OO1R_gA" style={{width:600, height:'auto', "border-radius": '1px'}}/></div>

- **Key Features**:  
  - Works well for structured environments.  
  - Easier to set up and manage than a mesh network.  
  - Vulnerable to branch failure, which can disconnect entire sub-networks.  

#### 3. Star Topology

- All devices communicate directly with the Coordinator.  
- Simple to deploy, but the Coordinator is a single point of failure.  
- Best suited for small networks where devices are located close to the Coordinator.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqNkMEKwjAMhl8l5LTCdth269X5BHqSXsIat6JtR20FGXt3K0Nx4MGc_i_kCyEz9l4zSgSAIdA0wrFTDtbaeR-0cRR9KIovEAKqqoK90x3fTc91UeQMK0AtxK8NW6XZKM0_SrtRWiGwRMvBktH5_vm1QGEc2bJCmaOmcFGo3JLnKEV_eLgeZQyJSww-DSPKM11vmdKkKXJnKH_AfroTuZP3b16etDldgQ" style={{width:480, height:'auto', "border-radius": '1px'}}/></div>

- **Key Features**:  
  - Easy to set up and manage.  
  - Limited scalability due to range and device capacity constraints.  
  - Reliance on the Coordinator for all communication reduces fault tolerance.  

:::tip

Our next demo is also this type of topology
:::

## Started with NCS Zigbee

### Hardware Preparation

You need to prepare 3 XIAO nRF54L15 boards.

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-114993697-xiao-nrf54l15-sense_pre-soldered_.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54L15-Sense-Pre-Soldered-p-6500.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

**connect the devices in the way shown in the figure**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/12.png" style={{width:800, height:'auto'}}/></div><br/>

### Software Preparation

**Step 1.** Install the Zigbee R23 plugin

- Click **NCS** plugin icon -> **Create a new application** and select the mode as **Browse nRF Connect SDK Add-on Index**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/1.png" style={{width:800, height:'auto'}}/></div>

- Search for**R23**, go to **Zigbee R23 nRF Connect** -> **V1.2.1**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/2.png" style={{width:800, height:'auto'}}/></div><br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/3.png"style={{width:800, height:'auto'}}/></div><br/>

- Select the latest version -> Select the workspace directory and create it

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/4.5.png"style={{width:800, height:'auto'}}/></div><br/>
:::note

Wait for the Zigbee plugin to be installed completely, and the NCS version will be switched to v2.9.2 automatically.
Since the plugin is quite large (over 4 GB), the download process will take a long time. Please keep the network connection stable and do not interrupt the process halfway.

:::

- A pop-up prompt will appear upon completion of the creation.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/6.png"style={{width:800, height:'auto'}}/></div><br/>

**Step 2.** Code Preparation

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/8.png"style={{width:400, height:'auto'}}/></div><br/>

- Refer to the official Seeed Studio repository to obtain examples.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/StarSphere-1024/XIAO_nRF54L15_Zigbee_Examples " target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

- Alternatively, if you have a Git environment set up, you can directly pull the code into the file directory you specified just now.

```Linux
git clone https://github.com/StarSphere-1024/XIAO_nRF54L15_Zigbee_Examples
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/7.png"style={{width:800, height:'auto'}}/></div><br/>

After obtaining the sample code, let's have a brief understanding of it:

1.The boards directory contains board-level configuration files, which are used to adapt to hardware differences between different development boards (such as pins and peripherals):
- The .overlay files inside are "Device Tree Overlay files", which are used to modify the default hardware configurations of the chip/development board;
- For example, xiao_nrf54l15_nrf54l15_cpuapp.overlay is a configuration specifically written for XIAO nRF54L15 (e.g., mapping the D3 pin to the LED control pin in the code);

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/10.5.png"style={{width:800, height:'auto'}}/></div><br/>

- Other files (e.g., nrf54l15dk_xxx.overlay) are intended for Nordic's official development kits (DKs), so you don't need to concern yourself with them—only focus on the files prefixed with xiao_xxx.

2. The include directory is where header files are stored:
- zb_dimmable_light.h is the functional header file for Zigbee dimmable lights, which defines the Zigbee protocol-related functions and parameters for the light node (e.g., brightness control, status reporting).

3. The src directory is where core code is stored:
 - main.c is the entry file of the entire project, containing the program startup logic, Zigbee network initialization, and LED control logic (e.g., controlling the level of the D3 pin after receiving a switch command).

4. Files in the root directory These are project build and configuration files (standard files of the NCS/Zephyr framework):

- CMakeLists.txt: A CMake build script that defines which files the project needs to compile and which libraries it depends on;
- Kconfig.sysbuild: Configures the project's compilation options (e.g., whether to enable Zigbee functionality, debug logs);
- prj.conf: The core configuration file of the project, which sets chip parameters and Zephyr system parameters (e.g., enabling GPIO functionality, Zigbee protocol stack);
- sample.yaml: An NCS sample configuration file that describes basic information about the project (e.g., supported development boards, function descriptions).

### Compile and Flash the Code

This guide shows you how to add an existing application (taking light_switch as an example) to your VS Code environment, and compile and flash it to your target hardware (taking xiao_nrf54l15 as an example).

**Step 1.** Add the application to the workspace

- Locate the APPLICATIONS panel: In the sidebar, find the panel named "APPLICATIONS".

- Add an existing application: Click the "+" (Add an existing application) icon in the upper right corner of the panel, as indicated by the red box in the figure below.

- Select the application folder: In the pop-up file browser window, navigate to the folder where your project is located (e.g., D:...\workspace). From the list, select the application folder you want to flash—light_switch in this example—and then click the "Open" button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/14.6.png"style={{width:800, height:'auto'}}/></div><br/>


**Step 2.** Create and Configure Compilation Options

- Add a build configuration: In the "APPLICATIONS" panel, you will see the newly added light_switch project. Click on "+ Add build configuration" below it.

- Configure compilation parameters: In the opened "Add Build Configuration" page, make the following settings: SDK and Toolchain: Your installed nRF Connect SDK and toolchain will usually be selected automatically—please verify that the version is correct. (If the plugin you downloaded earlier is intact, V2.9 will be selected here automatically.)

- Board target: This is the most critical step. You need to select the hardware on which the code will run. Click "Browse" or search directly in the input box. As shown in the figure, the target board you need to select is xiao_nrf54l15/nrf54l15/cpuapp. You can check "Custom" to quickly filter or find boards that are not officially supported.

- Other configurations: Unless there are special requirements, leave other settings such as Kconfig fragments and Devicetree overlays as default for now.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/15.png"style={{width:800, height:'auto'}}/></div><br/>
:::note
It is recommended to first check **"Custom"** to quickly filter or find boards that are not officially supported, and then locate the target board you need to select:**xiao_nrf54l15/nrf54l15/cpuapp**. If you search directly, the troubleshooting process may take too long, and the target board might not be found.

:::


:::note

- Update the board-level files. If your files have not been updated for a long time, it is also recommended that you update them before use.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/11.png" style={{width:800, height:'auto'}}/></div><br/>

:::
For the detailed tutorial, you can refer to the link below.
      **[Getting Started Guide](https://wiki.seeedstudio.com/xiao_nrf54l15_sense_getting_started/#nrfconnect-sdk-usage)**. 

**Step 3.** Compilation and Flashing

- Connect the hardware: Ensure that your target hardware (e.g., XIAO nRF54L15 development board) is properly connected to your computer via a data cable.

- Open the terminal: In the WELCOME panel of the **NRF CONNECT extension**, locate and click on the "Open terminal" option (marked by the red box in the figure).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/21.png" style={{width:250, height:'auto'}}/></div><br/>

- Navigate to the project directory: In the terminal, use the cd command to enter your project folder.

```Linux
cd D:\code\nrf54115_zigbee\workspace\light_switch\.lbuild 
west flash
```

- Please replace this path with your own actual project path.

- Monitor the flashing process: The terminal will output detailed logs, including the compilation progress, connection to the debugger (e.g., CMSIS-DAP), flash erasure, and data writing processes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/17.png" style={{width:800, height:'auto'}}/></div><br/>

- Similarly, flash the remaining two code projects following the same steps.
- If you are concerned about whether the code has been flashed successfully, there are the method to verify it:

  -  Connect to the development board via a serial port and observe the serial port output (this method not only verifies the flashing result but also allows you to view the program running logs intuitively, making the verification logic clearer).

### Connect to Zigbee

**Step 1.** Connect to Zigbee

1. Power on and start the XIAO development board with the **Coordinator program** loaded.
2. Observe the logs in the serial port assistant, and wait for the coordinator to complete Zigbee stack initialization and network parameter configuration until serial port information is output.
3. Keep the coordinator powered on to maintain the network continuously, which provides a foundation for subsequent devices to join the network.

**Step 2.** Network Joining Configuration for Light Bulb End

1. After the powered-on coordinator network is ready, power on and start the XIAO development board with the Light Bulb program loaded.

2. The light bulb end automatically starts network scanning to find available Zigbee coordinator networks.
3. Check the serial port logs to confirm that the light bulb end has successfully joined the coordinator network.
Reference for core logs:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/22.png" style={{width:800, height:'auto'}}/></div><br/>

**Step 3.** Network Joining and Device Discovery for Light Switch End

1. After confirming the light bulb end has successfully joined the network, power on and start the XIAO development board with the Light Switch program loaded (trigger a factory reset via the onboard button as needed to ensure network rescanning).
2.The light switch end automatically scans and joins the same coordinator network.
Reference for core logs:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/23.png" style={{width:600, height:'auto'}}/></div><br/>
3. Check the serial port logs of the light bulb end to confirm the command is received and executed, and the LED completes the on/off action. Reference for core logs:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/243.png" style={{width:400, height:'auto'}}/></div><br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/25.png" style={{width:400, height:'auto'}}/></div><br/>

### Zigbee Network Reset Procedure

**Step 1.** Network Reset for Coordinator

Press the onboard button of the network coordinator to complete the Zigbee network reset.

**Step 2.** Reset and Rejoin of Light Control Devices (Light Switch/Light Bulb)

1. Press and hold the onboard button of the light control device (light switch/light bulb);
2. Press the reset button of the device;
3. Release the onboard button. The device will complete the reset and automatically join the new Zigbee network.

:::note

> **Important:** If the device is powered by a battery, the serial port must be explicitly disabled; otherwise, the program will fail to start.

:::

## Result

If everything goes well, you will see the following results.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/result.gif" style={{width:600, height:'auto'}}/></div>

### FQA

1.Do NOT use an overly long directory as the installation root directory. Otherwise, when compiling examples on Windows, you will frequently encounter compilation errors caused by excessively long directory names.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/4.png" style={{width:1000, height:'auto'}}/></div><br/> 


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
