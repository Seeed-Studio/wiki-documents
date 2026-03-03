---
description: reTerminal DM Getting Started with Node-Red
title: reTerminal DM Getting Started with Node-Red
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-DM-Getting-Started-with-Node-Red
last_update:
  date: 04/04/2023
  author: Peter Pan
---
# reTerminal DM Node Red 入门指南

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

<br />

> Node-RED 是一个编程工具，用于以新颖有趣的方式将硬件设备、API 和在线服务连接在一起。
> 它提供了一个基于浏览器的编辑器，使用调色板中的各种节点可以轻松地将流程连接在一起，并且可以一键部署到其运行时。
>
> — nodered.org

由于 reTerminal DM 具有丰富的可扩展性和混合连接能力，如数字 I/O、CAN 总线、RS485、RS232 以及强大的无线通信能力，如 WiFi、BLE、\*4G、\*LoRa®。Node-RED 是最好的低代码编程工具之一，可以统一管理所有这些功能，并且感谢 Node-RED Dashboard 节点，它可以与 10.1" 10 点多点触控高灵敏度电容面板一起配置和使用，用于现场人机界面目的。

> \*4G 和 LoRa® 模块默认不随 reTerminal DM 提供，请根据需要购买相关模块。

这是关于如何在 reTerminal DM 上设置以及熟悉 Node-RED 界面的入门指南。

:::tip

- 对于 **Raspbian OS** 用户，请转到：[安装 Node-RED](#install-and-setting-up-node-red)
- 对于 **Sensecraft Edge OS** 用户，请转到：[熟悉 Node-RED](#getting-familiar-with-node-red)，因为 Sensecraft Edge OS 预装了 Node-RED

:::

## 在 Raspbian OS 上安装和设置 Node-RED

一旦您按照 [在 reTerminal DM 上安装操作系统](/cn/reterminal-dm-flash-OS/) 完成了在 reTerminal DM 上设置新操作系统的步骤，请按照以下步骤设置 Node-RED。

### 安装 Node-RED

- **步骤 1：** 访问您的 reTerminal DM

  - 选项 1：直接连接鼠标和键盘

    请在您的 reTerminal DM 上打开 `Terminal` 应用程序。

    确保您的 reTerminal DM 已连接到互联网。

  - 选项 2：使用 SSH

    确保您的主机计算机可以通过网络访问 reTerminal DM，并且 reTerminal DM 已连接到互联网

    **在 Windows 上：**

      请打开 **PowerShell** 程序，然后输入 `ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}`，请根据您的设置替换 `{USERNAME}` 和 `{RETERMINALDM_IP_ADDRESS}`：

      例如，在我的情况下，`{USERNAME}` 是 `pi`，`{RETERMINALDM_IP_ADDRESS}` 是 `192.168.43.100`：

      ```sh
      ssh pi@192.168.43.100
      ```

      然后请输入您在 reTerminal DM 上设置的操作系统的 `{USER}` 密码

      例如：对于 Raspbian OS，默认登录凭据是
    - 用户名：`pi`
    - 密码：`raspberry`

    **在 Mac/Linux 上：**

      请打开 **Terminal** 应用程序并输入 `ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}`，请根据您的设置替换 `{USERNAME}` 和 `{RETERMINALDM_IP_ADDRESS}`：

      例如，在我的情况下，`{USERNAME}` 是 `pi`，`{RETERMINALDM_IP_ADDRESS}` 是 `192.168.43.100`：

      ```sh
      ssh pi@192.168.43.100
      ```

      然后请输入您在 reTerminal DM 上设置的操作系统的 `{USER}` 密码

      例如：对于 Raspbian OS，默认登录凭据是
    - 用户名：`pi`
    - 密码：`raspberry`

- **步骤 2：** 安装 Node-RED：

Node-RED 团队为我们准备了一个 [一体化](https://nodered.org/docs/getting-started/raspberrypi) 脚本，您只需在 reTerminal DM 原生的 `Terminal` 应用程序中或在上述步骤的 `SSH Shell` 中输入以下命令。

```sh
  bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```

:::note

在 Raspberry Pi 上安装 Node-RED 有很多选项，您可以查看[官方指南](https://nodered.org/docs/getting-started/)，这里我们向您展示在 reTerminal DM 上安装 Node-RED 的[一体化](https://nodered.org/docs/getting-started/raspberrypi)指南。
:::

安装过程完成后，您应该能够使用 `ls -all` 命令看到一个 `.node-red` 文件夹，如下图所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-installed.png" /></div><br />

### 设置 Node-RED

安装 Node-RED 后，请按照以下步骤设置并准备好 Node-RED 环境。

- **步骤 1：** 启动 Node-RED：
  
    使用[一体化](https://nodered.org/docs/getting-started/raspberrypi)脚本完成安装后，您可以相应地使用以下命令：
  
    使用 `node-red-stop`                          停止 Node-RED<br />
    使用 `node-red-start`                         重新启动 Node-RED<br />
    使用 `node-red-log`                           查看最近的日志输出<br />
    使用 `sudo systemctl enable nodered.service`  在每次启动时自动启动 Node-RED<br />
    使用 `sudo systemctl disable nodered.service` 禁用启动时自动启动<br />

    因此，要启动 Node-RED 编辑器，您可以在 reTerminal DM 上的 `Terminal` 应用程序中运行以下命令：

    ```sh
    node-red-start
    ```

    如果您想启用 node-RED 作为自动启动服务，您可以使用 `sudo systemctl enable nodered.service` 命令，您应该看到如下所示的输出。

    <div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-autostart.png" /></div>

- **步骤 2：** 访问 Node-RED 编辑器：

    现在请打开您喜欢的网络浏览器并输入如下所述的 url：
  - 选项 1：如果网络浏览器在您的 reTerminal DM 上本地运行，请使用 `http://127.0.0.1:1880`。
  - 选项 2：如果网络浏览器在主机计算机上远程运行，请使用 `http://{RETERMINALDM_IP_ADDRESS}:1880`，请将 `{RETERMINALDM_IP_ADDRESS}` 替换为 reTerminal DM 的 IP 地址。

## 熟悉 Node-RED

现在您应该看到与下图类似的结果：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/inital-node-editor.png" /></div><br />

### Node-RED 编辑器概述

请熟悉 Node-RED 编辑器。

Node-RED 编辑器的核心元素列表如下：

- 节点面板
- 流程编辑器
- 配置面板
- 设置按钮
- 部署按钮

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-editor.png" /></div><br />

### 安装节点

安装 Node-RED 节点模块有两个选项，如果您使用的是 SenseCraft EDGE OS，请使用 [Node-RED 编辑器方法](#option-2-node-red-editor)：

#### 选项 1：命令行

步骤 1：请转到 Node-RED 文件夹

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-folder.png" /></div><br />

```sh
cd .node-red/
```

步骤 2：安装 Modbus 节点

```
<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/npm-install-node.png" /></div><br />

```sh
npm install node-red-contrib-modbus
```

步骤 3：节点安装完成后，请使用以下命令重启 Node-RED 服务：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-restart.png" /></div><br />

```sh
node-red-restart
```

#### 选项 2：Node-RED 编辑器

步骤 1：点击位于右上角的"三横线"图标的 `Settings` 按钮，然后选择 `Manage palette`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/manage_palette.png" /></div>

步骤 2：在调色板选项卡中点击 `Install` 选项卡

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/install-tab.png" /></div>

步骤 3：在节点搜索栏中搜索节点，然后点击 `install` 按钮进行安装

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/search-install.png" /></div>

步骤 4：从下拉警告窗口中点击 `Install` 按钮确认安装

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-click.png" /></div>

步骤 5：等待安装完成，您应该看到 `install` 按钮变为 `installed`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installing.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installed.png" /></div>

步骤 6：您应该在侧边栏中看到 Modbus 节点

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-nodes.png" /></div>

# reTerminal DM 支持的节点

- [reTerminal DM RS485 端口与 Node-RED](/cn/reTerminal-DM-Node-Red-RS485)
- [reTerminal DM MQTT 与 Node-RED](/cn/reTerminal-DM-Node-Red-mqtt)
- [reTerminal DM CAN BUS 与 Node-RED](/cn/reTerminal-DM-Node-Red-canbus)
  
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
