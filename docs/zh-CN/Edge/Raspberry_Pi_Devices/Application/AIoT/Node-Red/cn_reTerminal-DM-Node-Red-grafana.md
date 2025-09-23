---
description: 在本教程中，我们将指导您在基于树莓派的 reTerminal DM 上安装 Grafana。我们还将展示如何将 Grafana 连接到现有的 InfluxDB 数据库并创建详细的说明性仪表板
title: 使用 Grafana 为 IoT 仪表板配置 reTerminal DM
keywords:
  - reTerminal DM
  - IIoT
  - Grafana
  - Dash board
  - SCADA
image: https://files.seeedstudio.com/wiki/reTerminalDM/grafana/reterminal-grafana.png
slug: /cn/reterminal_dm_grafana
last_update:
  date: 6/27/2024
  author: Kasun Thushara
---
## 介绍

[Grafana](https://grafana.com/oss/grafana/) 是一个开源的可视化和分析软件，它使您能够从任何存储位置查询、可视化、告警和探索您的指标、日志和跟踪数据。它提供了将时间序列数据库（TSDB）数据转换为有洞察力的图表和可视化的工具。作为一个强大的监控解决方案，Grafana 有助于做出明智的决策、提高系统性能和简化故障排除。在本 wiki 中，我们将指导您在基于树莓派的 reTerminal DM 上安装 Grafana，将其连接到现有的 InfluxDB 数据库，并创建一个说明性仪表板。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/reterminal-grafana-dash.gif" /></center>

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

建议参考之前关于[如何创建 InfluxDB 数据库](https://wiki.seeedstudio.com/cn/reterminal_dm_200_node_red_influxdb/)的教程。在本教程中，我们将使用现有的 InfluxDB 连接进行设置。

## 添加 Grafana 仓库

**确保您的树莓派上当前安装的所有软件包都是最新的**：

```bash
sudo apt update
```
**添加 Grafana APT 密钥：**

要将 Grafana APT 密钥添加到您的树莓派密钥链中，请运行以下命令：

```bash
curl https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /usr/share/keyrings/grafana-archive-keyrings.gpg >/dev/null
```

**添加 Grafana 仓库：**

在您的树莓派上使用以下命令将 Grafana 仓库添加到列表中：

```bash
echo "deb [signed-by=/usr/share/keyrings/grafana-archive-keyrings.gpg] https://apt.grafana.com stable main" | sudo tee /etc/apt/sources.list.d/grafana.list
```

**Update Package List:**

由于我们对软件包列表进行了更改，我们需要运行一次更新：

```bash
sudo apt update
```
## 在 reTerminal 上安装 Grafana DM

通过运行以下命令安装最新版本的Grafana：

```bash
sudo apt install grafana
```
**配置 Grafana 在系统启动时自动运行**

启用 Grafana 在系统启动时自动运行：

```bash
sudo systemctl enable grafana-server
```

**Starting Grafana**

通过运行以下命令启动 Grafana 服务器软件：

```bash
sudo systemctl start grafana-server
```

**Accessing Grafana**

要访问 Grafana 网页界面，请打开网页浏览器并导航至：

```
http://<IPADDRESS>:3000
```

将 `<IPADDRESS>` 替换为您的 reTerminalDM 的 IP 地址。

**登录**

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/login.PNG" /></center>

默认用户名和密码为：

- **用户名：** `admin`
- **密码：** `admin`

登录后，系统会提示您更改默认密码。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/updatepsw.PNG" /></center>

## 创建您的第一个仪表板

**导航到仪表板：**

点击左侧菜单中的 **Dashboards**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/dashboard1.PNG" /></center>

**创建新仪表板：**

在仪表板页面，点击 **New** 并选择 **New Dashboard**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/dashboard2.PNG" /></center>

**添加可视化：**

在仪表板上，点击 **+ Add visualization**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/dashboard3.PNG" /></center>

**选择数据源：**

您将被重定向到选择数据源页面。在上一个教程中，我们创建了一个 InfluxDB 数据库。点击 **Configure a new data source**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/configuresource.PNG" /></center>

**配置 InfluxDB：**

- 在时间序列数据库下选择 **InfluxDB**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/addsource.PNG" /></center>

- 提供 **URL**、**数据库名称** 和 **用户权限**。
  
<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/configuresource2.PNG" /></center>

- 点击 **Save & Test**。如果没有警告，则表示配置成功。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/saveandtest.PNG" /></center>

**构建您的仪表板：**

您将看到确认数据源配置的消息。点击 **Building a dashboard**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/saveandtest2.png" /></center>

**添加可视化：**

您将被重定向到新仪表板页面。点击 **Add visualization**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/dashboard3.PNG" /></center>

**选择数据源：**

您将被重定向到选择数据源页面。我们创建了一个 InfluxDB 数据库连接。点击 **InfluxDB**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/datasource.PNG" /></center>

**配置可视化**

Grafana 提供了一个用户友好的界面来选择测量值、字段和其他相关数据点。我们将创建一个时间序列可视化。在左侧，您将看到输入面板标题、图例、轴设置和图形设置的选项。
注意以下视觉元素，为您的第一个仪表板添加一个简单的图表。
有关更详细的设置和自定义，请参考 [Grafana 文档](https://grafana.com/docs/grafana/latest/panels-visualizations/visualizations/)。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/grafana.gif" /></center>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
