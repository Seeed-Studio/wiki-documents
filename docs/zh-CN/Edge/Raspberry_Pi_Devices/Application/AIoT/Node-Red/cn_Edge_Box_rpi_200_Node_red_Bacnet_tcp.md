---
description: 本wiki提供了使用Edge Box RPi 200的全面指南，这是一个基于Raspberry Pi 4的工业物联网边缘控制器。它包括设置Node-RED、使用YABE模拟房间温度以及发现和读取BACnet IP设备参数的说明，以实现高效的楼宇管理系统(BMS)集成。

title: Edge Box RPi 200与Node Red和BACnet TCP
keywords:
  - Edge Controller
  - Edge-Box
  - Node-Red
  - Bacnet
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /cn/edge_box_rpi_200_node_red_bacnet_tcp
last_update:
  date: 06/05/2024
  author: Kasun Thushara
---

## 介绍

BACnet IP（基于IP的楼宇自动化和控制网络）是一种专为管理和自动化楼宇系统而设计的通信协议。它使来自不同制造商的设备能够在标准IP网络上无缝互操作，增强了系统集成和灵活性。BACnet IP在楼宇管理系统(BMS)中的主要优势包括改善的可扩展性、更容易的安装和维护，以及利用现有网络基础设施的能力。BACnet IP还支持实时数据交换，促进了对楼宇系统更好的监控和控制。这导致了能源效率的提高、运营成本的降低，以及居住者舒适度和安全性的增强。

## 开始使用

在开始这个项目之前，您可能需要按照此处描述的方式提前准备硬件和软件。

### 硬件准备

<div class="table-center">
   <table class="table-nobg">
      <tr class="table-trnobg">
         <th class="table-trnobg">Edge Box RPi 200</th>
      </tr>
      <tr class="table-trnobg"></tr>
      <tr class="table-trnobg">
         <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
      </tr>
      <tr class="table-trnobg"></tr>
      <tr class="table-trnobg">
         <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
         </a></div></td>
      </tr>
   </table>
</div>

### 软件准备

Edge Box 出厂时预装了 Raspberry Pi OS。如果您是第一次启动此设备，请阅读我们的[入门指南 Wiki](https://wiki.seeedstudio.com/cn/Edge_Box_introduction/)。我们已经准备了一份[Node-RED 入门指南](https://wiki.seeedstudio.com/cn/Edge-Box-Getting-Started-with-Node-Red/)。建议您在继续阅读本 wiki 之前先查看此指南。在本教程中，我们将连接运行 YABE 室温模拟器的主机 PC 与运行在 Edge Box 上的 Node-RED。

### YABE

请访问此[链接](https://sourceforge.net/projects/yetanotherbacnetexplorer/)并下载 YABE（Yet Another BACnet Explorer）。YABE 是一个多功能工具，允许您模拟和探索 BACnet 设备，非常适合测试和开发目的。在您的主机 PC 上下载并安装后，YABE 将用于模拟室温数据，然后我们将使用 Edge Box 上的 Node-RED 读取和处理这些数据。

### 为 BACnet IP 配置以太网设置

由于您的设备 IP 域与无线设置不同，您可能需要手动更改 IP 配置。为此，

- **步骤 01**：运行以下命令：

```sh
sudo nano /etc/dhcpcd.conf
```

- **步骤 02**：然后根据您的设备网络域配置以太网端口设置，并使用 metric 命令设置优先级。最低的 metric 值具有最高优先级。然后连接 Edge Box 和设备。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/ipconfig.PNG" /></center>

## 安装 BACnet 节点

1. **打开 Node-RED：**
   在您的 Edge Box 上启动 Node-RED。您通常可以通过打开网页浏览器并导航到 `http://<your-edgebox-ip>:1880` 来访问它。

2. **访问管理调色板：**
   在 Node-RED 界面的右上角，点击三条横线（菜单）打开主菜单。从下拉菜单中选择"管理调色板"。

3. **安装新节点：**
   在"管理调色板"窗口中，转到"安装"选项卡。

4. **搜索包：**
   在搜索框中，输入 `node-red-contrib-bacnet-extended` 来查找包。

5. **安装包：**
   一旦您在可用节点列表中看到 `node-red-contrib-bacnet-extended`，点击旁边的"安装"按钮。这将开始安装过程。

6. **等待安装完成：**
   安装可能需要几分钟时间。完成后，您应该会看到确认消息。

7. **验证安装：**
   安装完成后，BACnet 节点将在 Node-RED 调色板中可用。您可以通过检查 Node-RED 编辑器左侧边栏中的节点列表来验证这一点。

现在，您已成功安装了 `node-red-contrib-bacnet-extended`，可以开始使用它将 BACnet 设备与您的 Node-RED 流程集成。

## 启动房间温度控制器模拟器

安装 YABE 后，导航到 `add-on` 文件夹并双击 `bacnet.Room.Simulator` 来启动它。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/room-simulator.PNG" /></center>

完成后，您需要启动 YABE。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/Yabe-app.png" /></center>

然后，点击 `+` 标记添加设备并输入您 PC 以太网端口的 IP 地址。点击"开始"。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/YABE-config.PNG" /></center>

:::note
您可能需要配置以太网端口 IP 地址，以确保它与 EdgeBox 和您的 PC 在同一网络域中。
:::

之后，您应该能够看到具有与房间温度模拟器相同设备 ID 的设备。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/simulator&YABE.PNG" /></center>

## 发现 BACnet IP 设备

1. **所需节点：**
   您将需要以下四个节点：
   - Inject
   - Function
   - Discover-devices
   - Debug

2. **将节点添加到流程：**
   将上述节点拖放到您的 Node-RED 工作台流程中。

3. **连接节点：**
   按以下方式连接节点：
   - Inject >>> Function >>> Discover-devices >>> Debug

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/discover-device.PNG" /></center>

4. **配置 Function 节点：**
   双击 Function 节点打开其配置对话框。在函数块中，编写以下代码：

   ```javascript
   msg.reuseAddr = true;
   msg.transportClosedDuration = 8000;
   return msg;
   ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/discover-func.PNG" /></center>

5. **部署流程：**
   点击 Node-RED 界面右上角的"Deploy"按钮来部署流程。

6. **触发设备发现：**
   点击时间戳按钮（Inject 节点）来启动发现过程。

7. **检查调试输出：**
   等待输出出现在调试窗口中。您将在调试消息中看到设备 IP 和设备 ID。

<center><img width={600} height={400} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/debug-discover.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/bacnet1.gif" /></center>

## 读取所有设备参数

要使用 Node-RED 从 BACnet 设备读取所有参数，请按照以下步骤操作：

1. **准备节点：**
   - 您需要四个节点：Inject、Function、Read-All-Devices 和 Debug。

2. **将节点添加到工作台：**
   - 将 Inject、Function、Read-All-Devices 和 Debug 节点拖放到您的工作台上。

3. **连接节点：**
   - 按以下顺序连接节点：

     ```
     Inject >>>> Function >>>> Read-All-Devices >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/read-all-devices.PNG" /></center>

4. **配置 Function 节点：**
   - 双击 Function 节点打开其配置窗口。
   - 在函数块中输入以下代码：
   -

     ```javascript
     msg.reuseAddr = true;
     msg.transportClosedDuration = 8000;
     return msg;
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/discover-func.PNG" /></center>

5. **部署流程：**
   - 点击 Node-RED 界面右上角的"Deploy"按钮来部署流程。

6. **启动设备参数读取：**
   - 点击 Inject 节点上的时间戳按钮来启动过程。

7. **检查输出：**
   - 等待输出出现在调试窗口中。您将在 BACnet 网络区域中看到设备的参数。

此设置将从您网络上的 BACnet 设备读取所有参数，并在 Node-RED 的调试窗口中显示它们。

<center><img width="300" src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/debug-read-all.png" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/bacnet2.gif" /></center>

## 读取单个设备数据

1. **准备节点：**
   - 您需要四个节点：Inject、Function、Read-All-Devices 和 Debug。

2. **将节点添加到工作台：**
   - 将 Inject、Function、Read-Single-Device 和 Debug 节点拖放到您的工作台上。

3. **连接节点：**
   - 按以下顺序连接节点：

     ```
     Inject >>>> Function >>>> Read-Single-Device >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/read-single-device.PNG" /></center>

4. **配置 Function 节点：**
   - 双击 Function 节点打开其配置窗口。
   - 在函数块中输入以下代码：
   -

     ```javascript
        msg.deviceId=DeviceID;
        msg.address="IP:PORT ADD";
        return msg;
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/read-single-func.PNG" /></center>

5. **部署流程：**
   - 点击 Node-RED 界面右上角的"Deploy"按钮来部署流程。

6. **启动设备参数读取：**
   - 点击 Inject 节点上的时间戳按钮来启动过程。

7. **检查输出：**
   - 等待输出出现在调试窗口中。您将在 BACnet 网络区域中看到所选设备的参数。

<center><img width={300} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/debug-single-device.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/bacnet3.gif" /></center>

## 读取单个设备特定对象数据

1. **准备节点：**
   - 您需要四个节点：Inject、两个 function 节点、Read-Single-Device 和 Debug。

2. **将节点添加到工作台：**
   - 将 Inject、两个 function 节点、Read-Single-Device 和 Debug 节点拖放到您的工作台上。

3. **连接节点：**
   - 按以下顺序连接节点：

     ```
     Inject >>>> Function >>>> Read-Single-Devices >>>> Function >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/single-object.PNG" /></center>

4. **配置 Function 节点：**
   - 双击靠近 inject 节点的 Function 节点以打开其配置窗口。
   - 在函数块中输入以下代码：
   -

     ```javascript
        msg.deviceId=DeviceID;
        msg.address="IP:PORT ADD";
        return msg;
     ```

   - 双击靠近 debug 节点的 Function 节点以打开其配置窗口。
   - 在函数块中输入以下代码：
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

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/single-object-func.PNG" /></center>

5. **部署流程：**
   - 点击 Node-RED 界面右上角的"Deploy"按钮来部署流程。

6. **启动设备参数读取：**
   - 点击 Inject 节点上的时间戳按钮来启动过程。

7. **检查输出：**
   - 等待输出出现在 Debug 窗口中。您将在 Debug 窗口中看到 BACnet 网络区域中所选设备的特定对象的参数。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/debug-single-object.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/bacnet4.gif" /></center>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
