---
description: 在 reTerminal DM 上部署 InfluxDB，用于在 IoT 应用中进行高效的时间序列数据收集和分析。本指南涵盖安装、配置和使用，以在您的 Raspberry Pi 驱动的 HMI 上充分利用 InfluxDB 的强大功能。直接在网络边缘实现实时洞察和强大的监控能力。
title: reTerminal DM 与 Node Red 和 InfluxDB
keywords:
  - Raspberry Pi
  - HMI
  - Node-Red
  - InfluxDB
image: https://files.seeedstudio.com/wiki/reTerminalDM/nodered/reterminal-influx.png
slug: /cn/reterminal_dm_200_node_red_influxdb
last_update:
  date: 06/28/2024
  author: Kasun Thushara
---
## 介绍

在 reTerminal DM（一个 Raspberry Pi 驱动的 HMI）上部署 [InfluxDB](https://www.influxdata.com/) 可以在网络边缘实现强大的时间序列数据收集和分析。这种设置非常适合 IoT 应用，提供实时洞察和监控能力。通过利用轻量级但功能强大的 InfluxDB 数据库，您可以直接在 reTerminal DM 上高效地管理和分析传感器数据。以下指南概述了在您的 reTerminal DM 上安装、配置和使用 InfluxDB 的步骤，确保无缝集成到您的数据基础设施中。

### 硬件准备

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### 软件准备

我们已经准备了一个 [Node-RED 入门指南](https://wiki.seeedstudio.com/cn/reTerminal-DM-Getting-Started-with-Node-Red/)。建议您在继续阅读本 wiki 之前先查看此指南。

## 在 reTerminal DM 上安装 InfluxDB

本指南涵盖在 reTerminal DM HMI 上安装和设置 InfluxDB 的步骤。

**步骤 1**：更新系统

首先，通过运行以下命令确保您的系统是最新的：SSH 到 reTerminal DM 并

```sh
sudo apt update
```

**步骤 2**: 添加 InfluxDB 仓库

将 InfluxDB GPG 密钥和仓库添加到您的系统中。

Add the GPG key:

```sh
curl https://repos.influxdata.com/influxdata-archive.key | gpg --dearmor | sudo tee /usr/share/keyrings/influxdb-archive-keyring.gpg >/dev/null
 ```

将该仓库添加到 translations 列表中：

```sh
echo "deb [signed-by=/usr/share/keyrings/influxdb-archive-keyring.gpg] https://repos.influxdata.com/debian stable main" | sudo tee /etc/apt/sources.list.d/influxdb.list
```

**步骤 3**：更新软件包列表

更新软件包列表以包含InfluxDB存储库：

```sh
sudo apt update
```

**步骤 4**：安装 InfluxDB

安装 InfluxDB 版本 1

```sh
sudo apt install influxdb
```

## 启动 InfluxDB 服务器

启用并启动 InfluxDB 服务：

**步骤 1**. 取消屏蔽该服务：

```sh
sudo systemctl unmask influxdb
 ```

**步骤 2**. 启用服务：

```sh
sudo systemctl enable influxdb
```

**步骤 3**. 启动服务：

```sh
sudo systemctl start influxdb
```

## 测试 InfluxDB

访问 InfluxDB CLI 工具来执行基本的数据库操作。

**步骤 1**. 打开终端：

```sh
influx
```

**步骤 2**. 创建一个数据库：

```sh
CREATE DATABASE data
 ```

**步骤 3**. 使用该数据库：

```sh
USE data
```

**步骤 4**. 插入一个样本数据点：

```sh
INSERT room,temperature=30.1 humidity=80.2
 ```

**步骤 5**. 查询插入的数据：

```sh
SELECT * FROM room
 ```

## 为 InfluxDB 添加身份验证

**步骤 1**. 打开终端：

```sh
influx
```

**步骤 2**. 创建具有所有权限的管理员用户（将 `<password>` 替换为您的安全密码）：

```sh
CREATE USER admin WITH PASSWORD '<password>' WITH ALL PRIVILEGES
 ```

**步骤 3**. 退出 InfluxDB CLI:

```sh
exit
```

**步骤 4**. 编辑 InfluxDB 配置以启用身份验证：

```sh
sudo nano /etc/influxdb/influxdb.conf
```

在 `[HTTP]` 部分下，添加或修改以下行：

```
    auth-enabled = true
    pprof-enabled = true
    pprof-auth-enabled = true
    ping-auth-enabled = true
    enabled=true
    bind-address=":8086"
```

**步骤 5**. 重启 InfluxDB 服务以应用更改：

```sh
sudo systemctl restart influxdb
```

**步骤 6**. 使用管理员用户连接到InfluxDB：

```sh
influx -username admin -password <password>
```

确保将 `<password>` 替换为您为管理员用户设置的密码。

## 通过 Node-RED 向 InfluxDB 发送数据

**步骤 1**. 在浏览器中打开您的 Node-RED（通常是 `http://<your-reTerminal-DM-ip>:1880`）。

**步骤 2**. 使用 Node-RED 管理面板安装 `node-red-contrib-influxdb`。

**步骤 3**. 将一个 `inject` 节点、一个 `function` 节点和一个 `influxdb out` 节点拖放到流画布上，并按如下方式连接它们：

```
[Inject Node] -> [Function Node] -> [InfluxDB Out Node]
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/ifdb-flow.PNG" /></center>

### Function 节点

此节点格式化要发送到 InfluxDB 的数据。

**步骤 1**. 双击 `function` 节点。

**步骤 2**. 输入名称（例如，`Format Data for InfluxDB`）。

**步骤 3**. 在函数编辑器中输入以下代码：

```javascript
msg.payload = [
    {
        temperature: 30.1,
        humidity: 80.2
    }
];
return msg;
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/js-influxdb.PNG" /></center>

**步骤 4**. 点击"Done"。

### InfluxDB Out 节点

此节点将格式化的数据发送到 InfluxDB。

**步骤 1**. 双击 `influxdb out` 节点。

**步骤 2**. 输入以下详细信息：

- **Name**: labdata
- **Database**: data（之前创建的）
- **Measurement**: lab

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/influxin.PNG" /></center>

**步骤 3**. 点击铅笔图标添加新的 InfluxDB 服务器配置。

**步骤 4**. 输入以下详细信息：

- **Name**: InfluxDB
- **Version**: 1.8-flux
- **URL**: `http://localhost:8086`
- **Username**: admin
- **Password**: `<password>`（您创建的密码）

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/server-ifdb.PNG" /></center>

**步骤 5**. 点击"Add"然后点击"Done"。

**步骤 6**. 点击"Deploy"保存并部署您的流程。

### 测试流程

1. 点击 `inject` 节点上的按钮手动触发流程。

2. 通过在终端运行以下命令检查您的 InfluxDB 数据库，查看数据是否已成功写入：

```sh
influx -username admin -password <password>
USE data
SELECT * FROM lab
```

确保将 `<password>` 替换为您为管理员用户设置的密码。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/result-lab.PNG" /></center>

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
