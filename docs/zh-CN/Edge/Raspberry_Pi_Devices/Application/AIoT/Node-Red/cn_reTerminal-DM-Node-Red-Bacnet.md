---
description: 本维基提供了关于使用 reTerminal DM 的全面指南，这是一款基于 Raspberry Pi 4 的工业物联网边缘 HMI。内容包括设置 Node-RED、使用 YABE 模拟室内温度，以及发现和读取 BACnet IP 设备参数以实现高效的楼宇管理系统 (BMS) 集成。

title: 使用 Node-RED 和 BACnet TCP 的 reTerminal DM
keywords:
  - BMS
  - HMI
  - Raspberry pi
  - Node-Red
  - Bacnet
image: https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet-reterminaldm.png
slug: /cn/reterminal_dm_rpi_200_node_red_bacnet_tcp
last_update:
  date: 06/26/2024
  author: Kasun Thushara
---
## 简介
BACnet IP（基于 IP 的楼宇自动化和控制网络）是一种用于管理和自动化楼宇系统的通信协议。它使来自不同制造商的设备能够在标准 IP 网络上无缝互操作，从而增强系统集成和灵活性。BACnet IP 在楼宇管理系统 (BMS) 中的主要优势包括提高可扩展性、更容易安装和维护，以及能够利用现有的网络基础设施。BACnet IP 还支持实时数据交换，促进楼宇系统的更好监控和控制。这带来了更高的能源效率、降低的运营成本以及增强的居住舒适性和安全性。

## 开始

在开始这个项目之前，您需要提前准备好硬件和软件，如下所述。

### 硬件

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件准备

我们已经准备了一份 [Node-RED 入门指南](https://wiki.seeedstudio.com/cn/reTerminal-DM-Getting-Started-with-Node-Red/)。建议您在继续阅读本维基之前先查看该指南。

### YABE

请访问此 [链接](https://sourceforge.net/projects/yetanotherbacnetexplorer/) 下载 YABE（Yet Another BACnet Explorer）。YABE 是一个多功能工具，可用于模拟和探索 BACnet 设备，非常适合测试和开发用途。下载并安装到您的主机 PC 后，YABE 将用于模拟室内温度数据，我们随后将在 reTerminal DM 上使用 Node-RED 读取和处理这些数据。

### 配置 BACnet IP 的以太网设置
由于您的设备 IP 域与无线设置不同，您可能需要手动更改 IP 配置。具体步骤如下：

- **步骤 01**：运行以下命令：

```sh
sudo nano /etc/dhcpcd.conf
```

- **步骤 02**：然后根据您的 PLC/设备网络域配置以太网端口设置，并使用 **metric** 命令设置优先级。数值越低的 metric 优先级越高。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/ipconfig.PNG"/></center>

## 安装 BACnet 节点

1. **打开 Node-RED：**  
   在您的 reTerminal 上启动 Node-RED。通常可以通过打开网页浏览器并导航到 `http://<your-reTerminal-DM-ip>:1880` 来访问。

2. **访问管理调色板：**  
   在 Node-RED 界面的右上角，点击三个水平线（菜单）以打开主菜单。从下拉菜单中选择“管理调色板”。

3. **安装新节点：**  
   在“管理调色板”窗口中，转到“安装”选项卡。

4. **搜索包：**  
   在搜索框中输入 `node-red-contrib-bacnet-extended` 以找到该包。

5. **安装包：**  
   当您在可用节点列表中看到 `node-red-contrib-bacnet-extended` 时，点击旁边的“安装”按钮。这将开始安装过程。

6. **等待安装完成：**  
   安装可能需要几分钟时间。完成后，您应该会看到确认消息。

7. **验证安装：**  
   安装完成后，BACnet 节点将可在 Node-RED 调色板中使用。您可以通过检查 Node-RED 编辑器左侧边栏中的节点列表来验证。

现在，您已经成功安装了 `node-red-contrib-bacnet-extended`，可以开始使用它将 BACnet 设备集成到您的 Node-RED 流中。

## 启动室温控制器模拟器

安装 YABE 后，导航到 `add-on` 文件夹并双击 `bacnet.Room.Simulator` 以启动它。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/room-simulator.PNG" /></center>

完成后，您需要启动 YABE。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/Yabe-app.png" /></center>

然后，点击 `+` 号以添加设备，并输入您电脑以太网端口的 IP 地址。点击“启动”。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/YABE-config.PNG" /></center>

:::note
您可能需要配置以太网端口的 IP 地址，以确保它与 reTerminal DM 和您的电脑处于同一网络域。
:::

之后，您应该能够看到与室温模拟器相同设备 ID 的设备。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/simulator&YABE.PNG" /></center>

## 发现 BACnet IP 设备

1. **所需节点：**  
   您需要以下四个节点：
   - Inject
   - Function
   - Discover-devices
   - Debug

2. **将节点添加到流：**  
   将上述节点拖放到您的 Node-RED 工作台流中。

3. **连接节点：**  
   按以下方式连接节点：  
   - Inject >>> Function >>> Discover-devices >>> Debug

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/discover-device.PNG" /></center>

4. **配置 Function 节点：**  
   双击 Function 节点以打开其配置对话框。在函数块中写入以下代码：

   ```javascript
   msg.reuseAddr = true;
   msg.transportClosedDuration = 8000;
   return msg;
   ```
<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/discover-func.PNG" /></center>

5. **部署流：**  
   点击 Node-RED 界面右上角的“部署”按钮以部署流。

6. **触发设备发现：**  
   点击时间戳按钮（Inject 节点）以启动发现过程。

7. **检查调试输出：**  
   等待调试窗口中出现输出。您将在调试消息中看到设备 IP 和设备 ID。

<center><img width={600} height={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/debug-discover.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet1.gif" /></center>

## 读取所有设备参数

要使用 Node-RED 从 BACnet 设备读取所有参数，请按照以下步骤操作：

1. **准备节点：**
   - 您需要四个节点：Inject、Function、Read-All-Devices 和 Debug。

2. **将节点添加到工作台：**
   - 将 Inject、Function、Read-All-Devices 和 Debug 节点拖放到工作台上。

3. **连接节点：**
   - 按以下顺序连接节点：
     ```
     Inject >>>> Function >>>> Read-All-Devices >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/read-all-devices.PNG" /></center>

4. **配置 Function 节点：**
   - 双击 Function 节点以打开其配置窗口。
   - 在函数块中输入以下代码：
   - 
     ```javascript
     msg.reuseAddr = true;
     msg.transportClosedDuration = 8000;
     return msg;
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/discover-func.PNG" /></center>

5. **部署流程：**
   - 点击 Node-RED 界面右上角的 "Deploy" 按钮以部署流程。

6. **启动设备参数读取：**
   - 点击 Inject 节点上的时间戳按钮以启动流程。

7. **检查输出：**
   - 等待输出显示在 Debug 窗口中。您将看到 BACnet 网络区域内设备的参数。

此设置将从网络中的 BACnet 设备读取所有参数，并在 Node-RED 的 Debug 窗口中显示。

<center><img width="300" src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/debug-read-all.PNG" /></center>


<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet2.gif" /></center>

## 读取单个设备数据

1. **准备节点：**
   - 您需要四个节点：Inject、Function、Read-Single-Device 和 Debug。

2. **将节点添加到工作台：**
   - 将 Inject、Function、Read-Single-Device 和 Debug 节点拖放到工作台上。

3. **连接节点：**
   - 按以下顺序连接节点：
     ```
     Inject >>>> Function >>>> Read-Single-Device >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/read-single-device.PNG" /></center>


4. **配置 Function 节点：**
   - 双击 Function 节点以打开其配置窗口。
   - 在函数块中输入以下代码：
   - 
     ```javascript
        msg.deviceId=DeviceID;
        msg.address="IP:PORT ADD";
        return msg;
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/read-single-func.PNG" /></center>

5. **部署流程：**
   - 点击 Node-RED 界面右上角的 "Deploy" 按钮以部署流程。

6. **启动设备参数读取：**
   - 点击 Inject 节点上的时间戳按钮以启动流程。

7. **检查输出：**
   - 等待输出显示在 Debug 窗口中。您将看到 BACnet 网络区域内所选设备的参数。

<center><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/debug-single-device.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet3.gif" /></center>

## 读取单个设备中特定对象的数据

1. **准备节点：**
   - 您需要以下四个节点：注入节点（Inject）、两个功能节点（Function）、读取单设备节点（Read-Single-Device）和调试节点（Debug）。

2. **将节点添加到工作台：**
   - 将注入节点、两个功能节点、读取单设备节点和调试节点拖放到您的工作台上。

3. **连接节点：**
   - 按以下顺序连接节点：
     ```
     Inject >>>> Function >>>> Read-Single-Devices >>>> Function >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/single-object.PNG" /></center>

4. **配置功能节点：**
   - 双击靠近注入节点的功能节点以打开其配置窗口。
   - 在功能块中输入以下代码：
   - 
     ```javascript
        msg.deviceId=DeviceID;
        msg.address="IP:PORT ADD";
        return msg;
     ```
   - 双击靠近调试节点的功能节点以打开其配置窗口。
   - 在功能块中输入以下代码：
   - 
     ```javascript
        const objects = msg.payload['OBJECT_LIST(76)'];
        let temperatureIndoor = null;

        for (let obj of objects) {
        if (obj['OBJECT_NAME(77)'] === 'Temperature.Indoor' && obj['OBJECT_TYPE(79)'] === 'ANALOG_INPUT(0)') {
        temperatureIndoor = obj['PRESENT_VALUE(85)'];
        break;
        }
        }

        if (temperatureIndoor !== null) {
        msg.payload = { 'Temperature.Indoor': temperatureIndoor };
        } else {
        msg.payload = { error: 'Temperature.Indoor not found' };
        }

        return msg;

     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/single-object-func.PNG" /></center>

5. **部署流程：**
   - 点击 Node-RED 界面右上角的“部署”按钮以部署流程。

6. **启动设备参数读取：**
   - 点击注入节点上的时间戳按钮以启动流程。

7. **检查输出：**
   - 等待输出显示在调试窗口中。您将看到所选设备中特定对象的参数，位于 BACnet 网络区域。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/debug-single-object.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet4.gif" /></center>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>