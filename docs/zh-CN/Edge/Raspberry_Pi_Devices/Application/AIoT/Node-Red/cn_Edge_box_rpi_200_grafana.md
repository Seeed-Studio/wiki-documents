---
description: 在本教程中，我们将指导您在基于树莓派的 EdgeBox RPi 200 上安装 Grafana。我们还将向您展示如何将 Grafana 连接到现有的 InfluxDB 数据库并创建详细的说明性仪表板
title: Edge Box RPi 200 与 Grafana
keywords:
  - Edge Box Rpi 200
  - IIoT
  - Grafana
  - Dash board
  - SCADA
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /cn/edgebox_rpi_200_grafana
last_update:
  date: 6/24/2024
  author: Kasun Thushara
---
## 介绍

[Grafana](https://grafana.com/oss/grafana/) 是一个开源的可视化和分析软件，使您能够从任何存储位置查询、可视化、告警和探索您的指标、日志和跟踪数据。它提供工具将您的时间序列数据库（TSDB）数据转换为有洞察力的图表和可视化。作为一个强大的监控解决方案，Grafana 有助于做出明智的决策、提高系统性能和简化故障排除。在本 wiki 中，我们将指导您在基于树莓派的 EdgeBox RPi 200 上安装 Grafana，将其连接到现有的 InfluxDB 数据库，并创建一个说明性仪表板。

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

建议参考之前的教程[如何创建 InfluxDB 数据库](https://wiki.seeedstudio.com/edge_box_rpi_200_node_red_influxdb/)。在本教程中，我们将使用现有的 InfluxDB 连接进行设置。

## 添加 Grafana 仓库

**确保您的树莓派上当前安装的所有软件包都是最新的**：

```bash
sudo apt update
```

**Add the Grafana APT Key:**

To add the Grafana APT key to your Raspberry Pi’s keychain, run the following command:

```bash
curl https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /usr/share/keyrings/grafana-archive-keyrings.gpg >/dev/null
```

**添加 Grafana 仓库：**

在您的树莓派上使用以下命令将 Grafana 仓库添加到列表中：

```bash
echo "deb [signed-by=/usr/share/keyrings/grafana-archive-keyrings.gpg] https://apt.grafana.com stable main" | sudo tee /etc/apt/sources.list.d/grafana.list
```

**Update Package List:**

As we have made changes to our package list, we need to run an update:

```bash
sudo apt update
```

## Installing Grafana on EdgeBox

Install the latest version of Grafana by running the following command:

```bash
sudo apt install grafana
```

**Configuring Grafana to Start at Boot**

Enable Grafana to start at boot:

```bash
sudo systemctl enable grafana-server
```

**Starting Grafana**

Start the Grafana server software by running the command below:

```bash
sudo systemctl start grafana-server
```

**Accessing Grafana**

To access the Grafana web interface, open a web browser and navigate to:

```
http://<IPADDRESS>:3000
```

将 `<IPADDRESS>` 替换为您的 EdgeBox RPi 200 的 IP 地址。

**登录**

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/login.PNG" /></center>

默认的用户名和密码是：

- **用户名：** `admin`
- **密码：** `admin`

登录后，系统会提示您更改默认密码。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/updatepsw.PNG" /></center>

## 创建您的第一个仪表板

**导航到仪表板：**

点击左侧菜单中的 **Dashboards**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/dashboard1.PNG" /></center>

**创建新仪表板：**

在仪表板页面，点击 **New** 并选择 **New Dashboard**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/dashboard2.PNG" /></center>

**添加可视化：**

在仪表板上，点击 **+ Add visualization**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/dashboard3.PNG" /></center>

**选择数据源：**

您将被重定向到选择数据源页面。在上一个教程中，我们创建了一个 InfluxDB 数据库。点击 **Configure a new data source**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/configuresource.PNG" /></center>

**配置 InfluxDB：**

- 在时间序列数据库下选择 **InfluxDB**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/addsource.PNG" /></center>

- 提供 **URL**、**数据库名称** 和 **用户权限**。
  
<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/configuresource2.PNG" /></center>

- 点击 **Save & Test**。如果没有警告，您就可以继续了。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/saveandtest.PNG" /></center>

**构建您的仪表板：**

您将看到确认数据源配置的消息。点击 **Building a dashboard**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/saveandtest2.png" /></center>

**添加可视化：**

您将被重定向到新仪表板页面。点击 **Add visualization**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/dashboard3.PNG" /></center>

**选择数据源：**

您将被重定向到选择数据源页面。我们创建了一个 InfluxDB 数据库连接。点击 **InfluxDB**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/datasource.PNG" /></center>

**配置可视化**

Grafana 提供了一个用户友好的界面来选择测量值、字段和其他相关数据点。我们将创建一个时间序列可视化。在左侧，您将看到输入面板标题、图例、轴设置和图形设置的选项。
注意以下视觉元素，为您的第一个仪表板添加一个简单的图表。
有关更详细的设置和自定义，请参考 [Grafana 文档](https://grafana.com/docs/grafana/latest/panels-visualizations/visualizations/)。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/grafana/grafana.gif" /></center>

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
