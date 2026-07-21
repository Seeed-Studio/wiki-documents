---
description: 使用 reCamera 实现实时热力图 + 本地模糊处理 + Grafana 数据看板集成
title: 实时热力图与 Grafana 数据看板的集成
keywords:
  - reCamera
  - heatmap
  - Grafana
  - InfluxDB
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/headmap.gif
slug: /integration_of_real-time_heat_map_with_grafana_data_dashboard
sku: 102991896, 108990119, 100029708
sidebar_position: 10
last_update:
  date: 12/21/2025
  author: Xinrui Wu
createdAt: '2025-12-22'
updatedAt: '2026-05-07'
url: https://wiki.seeedstudio.com/cn/integration_of_real-time_heat_map_with_grafana_data_dashboard/
---

# 实时热力图与 Grafana 数据看板的集成

## 介绍

本项目使用 reCamera 内置的 YOLO11n 模型进行目标检测，对人员目标进行模糊处理并显示热力图效果。以上所有操作都在 reCamera 本地完成！同时，reCamera 会将检测到的数据发送到本地运行的 Influxdb 数据库，然后由 Grafana 从 Influxdb 数据库中读取数据，用于展示实时数据看板。

下面是完成本示例后的使用效果。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/headmap.gif" /></div>

## 硬件准备

一台 reCamera
一台电脑

<table align="center">
 <tr>
  <th>reCamera 2002 系列</th>
  <th>reCamera 云台</th>
  <th>reCamera HQ POE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
   </a>
  </div></td>

 </tr>
</table>

## 1.InfluxDB 配置

### 1.1 下载 InfluxDB2-2.1.1 并启动

前往下载[链接](https://dl.influxdata.com/influxdb/releases/influxdb2-2.1.1-windows-amd64.zip)，下载并解压。按下 Win + R 打开命令提示符，然后进入文件解压后的目录，最后输入：

```bash
influxd
```

如下图所示，即为启动成功

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_1.png" /></div>

如果你的设备是运行 Linux 系统的 ARM 架构设备（例如树莓派），下载链接在[这里](https://dl.influxdata.com/influxdb/releases/influxdb2-2.1.1-linux-arm64.tar.gz)。  

如果你的设备是运行 Linux 系统的 AMD 架构设备，请点击[这里](https://dl.influxdata.com/influxdb/releases/influxdb2-2.1.1-linux-amd64.tar.gz)进行下载。

Linux 设备启动 InfluxDB 的流程相同。进入解压后的目录并运行：

```bash
./influxd
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_86.png" /></div>

### 1.2 进入 InfluxDB 本地网页进行配置

然后打开一个 cmd 终端，输入以下命令查询你的电脑 IP

```bash
ipconfig
```

然后将查询到的 IP 输入浏览器中，再加上 8086 端口，即可进入 InfluxDB 的主界面。

例如，我的 IP 是 192.168.7.183，那么在浏览器中输入 192.168.7.183:8086

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_2.png" /></div>

然后点击 "Get Started"，并填写你的个人信息。注意这一步一定要记住你设置的用户名和密码！！

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_3.png" /></div>

然后点击 "Confgure Later"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_4.png" /></div>

然后点击 Data，可以看到我们刚刚在填写个人信息步骤中设置的 "Initial Bucket Name"。我这里填写的是 reCamera

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_5.png" /></div>

然后点击 Setting 来设置数据保留时间

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_6.png" /></div>

点击 API Token 查看你数据库的 Token，这将在后续 reCamera 配置以及热力图网页配置中使用。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_7.png" /></div>

## 2.reCamera 配置

### 2.1 将 reCamera 连接到 Linux 设备（如果你不使用 Linux 设备，请跳到下一步，从 2.2 步开始）

如果你计划将 reCamera 连接到 Linux 设备，我建议你先使用 Windows 或 Mac 电脑连接 reCamera 并进行一些设置修改，否则 reCamera 将无法直接连接到 Linux 设备。

以 Windows 为例，在浏览器中输入 192.168.42.1，然后点击 "setting"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_87.png" /></div>

然后点击 "Terminal"，输入账号名 "recamera" 和你的密码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_88.png" /></div>

然后在 recamera 终端中运行如下命令（这一步会要求你再次输入密码）：

```bash
sudo rootfs_rw on
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_89.png" /></div>

然后执行：

```bash
sudo vi /mnt/system/usb-ncm.sh
```

然后将这一行注释掉（先按键盘上的 "I" 键进入写入模式，再使用方向键移动到这一行，在开头添加一个 "#"）。/etc/run_usb.sh probe acm >> /tmp/ncm.log 2>&1

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_90.png" /></div>

然后保存并退出即可（按键盘上的 ESC 键退出写入模式，然后输入 ":wq" 保存并退出）。

:::note
多次重启后可能会失效，需要重新设置。
:::

### 2.2 在 reCamera 中从 SenseCraft 平台安装程序

在 [SenseCraft AI 平台](https://sensecraft.seeed.cc/ai)中，依次进入 **`Applications`** > **`Application Square`**，然后在搜索框中输入 "Real-time Crowd Heatmap"。找到名为 "Real-time Crowd Heatmap" 的应用并将其部署到你的 reCamera。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_92.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_9.png" /></div>

### 2.3 连接网络并安装缺失的节点

进入工作区后会弹出这个警告，这是正常现象。先点击 Close，之后我们需要为 reCamera 安装一个节点。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_10.png" /></div>

将 reCamera 连接到网络（确保它与电脑连接在同一个网络下！！这在后面非常重要）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_11.png" /></div>

然后为 reCamera 安装 node-red-contrib-influxdb 节点。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_12.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_13.png" /></div>

然后在搜索框中输入 node-red-contrib-influxdb，第一个 0.7.0 版本就是我们需要的节点。点击 Install

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_14.png" /></div>

安装过程需要较长时间，请耐心等待，安装成功后会如下图所示

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_15.png" /></div>

### 2.4 配置 InfluxDB 节点

此时我们还需要为名为 Write Person Count 的节点添加一些配置信息，先找到这个节点。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_16.png" /></div>

双击打开配置面板，然后点击 server 后面的小铅笔图标  

:::note
在此之前，记得小铅笔下方 "Organization" 和 "Bucket" 选项中的内容要与你在 InfluxDB 中配置的一致！！！"Organization" 是你在 InfluxDB 中的用户名，"Bucket" 是你创建的数据库名称。
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_17.png" /></div>

点击小铅笔后，我们需要填写 URL 和 Token

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_18.png" /></div>

这里的 URL 需要填写我们在第一步中访问的 InfluxDB 网页链接。例如，你的网页是 192.168.7.183:8086，那么 URL 就可以填写为 `http://192.168.7.183:8086`。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_19.png" /></div>

然后填写 Token，也就是我们一开始在 InfluxDB 网页中提到的 API Tokens。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_20.png" /></div>

我们点击 Copy to Cilpboard，然后把复制的 Token 填入配置中。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_21.png" /></div>

填完之后，点击右上角的 Update。不要修改其他设置。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_22.png" /></div>

然后我们点击右上角的 deployment，让刚才的更改生效。会弹出一个警告窗口，我们可以将其关闭。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_23.png" /></div>

### 2.5 查看 InfluxDB 数据

此时我们可以进入 InfluxDB 界面查看数据是否出现，如果成功，点击 Submit，你就会看到数据折线图，这里我们查询的是数据的数量。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_24.png" /></div>

## 3.Grafana 配置

### 3.1 安装 Grafana

#### 3.1.1 Windows 系统

进入 Grafana 的官方网站 [Grafana get started | Cloud, Self-managed, Enterprise](https://grafana.com/get/) 将安装包下载到本地。我这里下载的版本是 12.3.0。

:::note
记住，这里 Grafana 必须安装在 C 盘！！！否则后续无法修改它的配置文件。
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_25.png" /></div>

下载并安装完成后，Grafana 应该会自动在后台运行，你可以打开电脑的“服务”查看它是否在运行。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_26.png" /></div>

#### 3.1.2 Linux 系统

如果你的设备是运行 Linux 的 ARM 架构设备，例如树莓派，那么下载链接在[这里](https://dl.grafana.com/grafana/release/12.3.0/grafana_12.3.0_19497075765_linux_arm64.tar.gz)  

如果你的设备是运行 Linux 系统的 AMD 架构设备，请在[这里](https://dl.grafana.com/grafana/release/12.3.0/grafana_12.3.0_19497075765_linux_amd64.tar.gz)下载链接。

然后，解压你下载好的 tar.gz 文件。

### 3.2 修改 defaults.ini 以使 Grafana 支持嵌入 HTML

#### 3.2.1 Windows 系统

进入 "grafana/conf" 目录，找到 "defaults.ini" 文件，右键选择用记事本打开。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_80.png" /></div>

按 Ctrl + F，搜索 "disable_sanitize_html"，将原来的 "disable_sanitize_html = false" 修改为 "disable_sanitize_html = true"，以启用 Grafana 嵌入 html。修改完成后保存并退出。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_81.png" /></div>

#### 3.2.2 Linux 系统

在 Linux 系统中，defaults.ini 也位于 conf 目录下。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_82.png" /></div>

右键选择使用类似记事本的应用程序打开。然后，找到图中这句话，将原来的 "false" 修改为 "true"。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_83.png" /></div>

### 3.3 启动 Grafana

对于 Windows 系统，如果你已经安装了 Grafana，只需要像 3.1.1 步骤中所述，在“服务”中检查 Grafana 是否正在运行。一般情况下，Grafana 会在安装完成后自动启动。  

对于 Linux 系统，Grafana 需要手动启动。进入解压后的 grafana 文件目录后，运行以下命令：

```bash
./bin/grafana-server
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_84.png" /></div>

### 3.4 设置数据源

在确认 Grafana 正在运行后，此时你可以在浏览器中访问 `http://localhost:3000` 进入本地 Grafana 界面进行配置。首先需要登录，初始用户名和密码都是 admin。登录后系统会提示你修改新密码，请务必记住你的密码，账号仍然是 admin，不会改变。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_91.png" /></div>

登录后，我们点击左侧的 "Data sources"，然后选择 "Add new data source"。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_76.png" /></div>

然后选择 "InfluxDB"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_77.png" /></div>

接下来，你需要进行以下六项修改：
(1) 将 "Query language" 选择为 "Flux"
(2) 输入你的数据库网页的 URL，也就是你在第一步访问的 InfluxDB 网页链接。例如，如果你的网页地址是 192.168.7.183:8086，那么 URL 应填写为 `http://192.168.7.183:8086`。
(3) 关闭 "Basic auth" 选项
(4) "Organization" 应填写你注册数据库时使用的用户名。
(5) Token 应填写我们在 2.3 步中提到的 InfluxDB 网页中的 API Tokens。
(6) "Default Bucket" 应填写你创建的数据库名称。  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_85.png" /></div>

全部设置完成后，点击 "Save & Test"。如果测试成功，会显示 "datasource is working"。此时你可以直接进行下一步，这些设置会自动保存。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_79.png" /></div>

### 3.5 导入 Dashboard

点击 Dashboards

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_27.png" /></div>

然后点击 New dashboard

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_28.png" /></div>

选择 Import dashboard

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_29.png" /></div>

请下载我上传到 [GitHub](https://github.com/xr686/reCamera-with-Heatmap.git) 的项目。下载并解压后，找到其中名为 "Grafana Json File" 的文件夹，里面包含 "reCamera Heatmap-1766213863140.json"。这个文件就是我们需要导入到 Grafana 中的文件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_30.png" /></div>

导入后，你应该能看到如下效果（如果没有看到下面的界面，请移步到文章末尾的 FAQ 部分，那里会有解决方案）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_31.png" /></div>

## 4. python 标定软件的使用

记得先在 [GitHub](https://github.com/xr686/reCamera-with-Heatmap.git) 下载我的项目。解压并打开后，找到名为 "Heatmap area calibration" 的文件夹，其中包含三个文件：calibration_tool.py 是标定程序，R1.jpg 是 reCamera 拍摄的原始图像，R2.png 是我绘制的房间平面图。

### 4.1 从 reCamera 获取当前原生分辨率的图像

获取原始分辨率图像非常重要！！虽然步骤会比较麻烦，但它会直接影响热力图的定位精度！请耐心操作！

#### 4.1.1 使用 reCamera 拍照

回到 reCamera 的工作区界面，先停止程序。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_32.png" /></div>

然后在左侧找到 capture 节点，将它拖到 camera 节点后面，并用连线将它们连接起来。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_33.png" /></div>

然后双击打开 capture 节点，修改下面两个选项（这个节点的功能是每 2 秒拍一张照片并存储在 reCamera 本地），然后点击 Finish 并重新部署，再点击 Run。运行三四秒后点击 Stop Running（不需要一直运行，否则会一直拍照）。接下来，我们要把它拍的照片转移到本地电脑。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_34.png" /></div>

#### 4.1.2 将 reCamera 拍摄的照片移植到我们的电脑

我们先来看一下刚才拍的照片是否成功。

点击 Setting

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_35.png" /></div>

点击 Terminal，并输入 reCamera 账户密码进行登录。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_36.png" /></div>

然后依次输入以下两条命令：

进入 Images 文件夹

```bash
cd / && cd userdata/Images/
```

列出文件

```bash
ls
```

然后你应该会看到系统列出了一些图片文件名，这些就是刚刚由采集节点拍摄的图片。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_37.png" /></div>

回到刚才的设置界面，并打开 ssh 连接。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_38.png" /></div>

然后在键盘上按 Win R，输入 cmd，再在终端中输入

```bash
scp -r recamera@<reCamera IP>:/userdata/Images "The folder path of the 'Heatmap area calibration' file that you downloaded from GitHub after decompression"
```

这些 IP 对应的 reCamera 可以在网络设置中找到

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_39.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_40.png" /></div>

从 GitHub 下载并解压后的“Heatmap area calibration”文件夹路径，我们先进入 Heatmap area calibration，点击文件夹上方的路径框，并复制该路径。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_41.png" /></div>

例如：

```bash
scp -r recamera@10.228.172.71:/userdata/Images "C:\Users\seeed\Desktop\热力图\正式版\reCamera with Heatmap\Heatmap area calibration"
```

然后输入 reCamera 密码，将文件下载到你选择的路径

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_42.png" /></div>

回到你刚刚下载的文件夹，你会看到刚刚下载的 Images 文件夹。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_43.png" /></div>

现在从我的项目中删除原来的 R1.jpg。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_44.png" /></div>

我们选择最新的图片，通常是最后一张图片，并将其重命名为 R1

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_45.png" /></div>

然后将这张图片放到上一级目录中。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_46.png" /></div>

### 4.2 准备房间平面图

你可以使用 Windows 自带的绘图工具进行绘制并保存为图片，存放在 Heatmap area calibration 路径下，或者直接将你已有的房间平面图存放在 Heatmap area calibration 路径下。在这一步中，你还需要记得删除我之前项目中的 R2.png，并将你的图片重命名为 R2，存放在该路径下。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_47.png" /></div>

### 4.3 标定程序的使用

标定程序是 Heatmap 区域标定路径下的 calibration_tool.py 程序。

这里我默认使用 Pycharm。在使用前，需要先安装 Python 的 OpenCV 库。

```bash
pip install opencv-python
```

有两点需要注意：第一，两张图片需要在同一路径下，也就是在 Heatmap area calibration 路径下；第二，检查图片文件名是否正确

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_48.png" /></div>

程序运行后，会弹出一个窗口显示你的摄像头截图，此时需要用鼠标点击有效区域。点击顺序非常重要：请按照“左上 -> 右上 -> 右下 -> 左下”的顺时针顺序点击你想要选择区域的四个角。例如，如果你只想显示桌面的表面，就点击桌面的四个角。点击完 4 个点后，按键盘上的任意键（如空格）进入下一步。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_49.png" /></div>

接下来会弹出第二个窗口，显示你的俯视图 R2.png。点击顺序必须与第一步对应：点击刚才那张图上四个点在平面图上的对应位置。例如刚才先点击的是桌子的左上角，现在就在平面图上点击桌子的左上角。点击完 4 个点后，按任意键结束。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_50.png" /></div>

然后回到命令行窗口（CMD），你会看到脚本自动生成了一段 JS 代码，直接复制这段代码，替换你 index.html 中的 `const CALIBRATION = { ... };` 即可。（直到下一步“5.5 标定后的坐标数据”才会用到它，现在先不用管）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_51.png" /></div>

## 5. 热力图页面的配置

热力图的网页配置也可以在[我的 GitHub 项目](https://github.com/xr686/reCamera-with-Heatmap.git)中找到，具体位于 heatmap-demo 文件夹下的 index.html 文件中。我们还需要修改这个文件中的几个部分，否则将无法正常运行并接收热力图坐标数据。

### 5.1 热力图网页参数配置

#### 5.1.1 热力图底图

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_52.png" /></div>

请替换为你实际图片的文件名

#### 5.1.2 数据库部分的配置

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_53.png" /></div>

##### 参数说明

URL 是你打开的 InfluxDB 的网页地址。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_54.png" /></div>

ORG 是你配置 InfluxDB 时的用户名。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_55.png" /></div>

BUCKET 是你在 InfluxDB 中创建的数据库名称。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_56.png" /></div>

TOKEN 是你的 InfluxDB API Tokens，请将 HTML 中原来的 12345678 替换为你的实际 Token

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_57.png" /></div>

#### 5.1.3 热力数据刷新间隔与查询时间范围

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_58.png" /></div>

##### 参数说明

REFRESH_INTERVAL 指的是刷新所需的毫秒数，DATA_RANGE 指的是查询过去数据的时间范围。代码中默认的 "3000" 和 "-3s" 中，"3000" 表示 3000 毫秒，即每 3 秒刷新一次，而 "-3s" 表示查询过去 3 秒内的热力坐标数据。

##### 模式选择

可以配置两种模式：

(1) “实时模式”：热力坐标会实时刷新并清除之前的坐标，不进行累积叠加。要实现实时模式，需要将 DATA_RANGE 设置为较短的时间。例如我默认的 "-3s"，"-3s" 表示查询过去 3 秒内的热力坐标数据，比如程序现在已经运行了 10s，那么当你将 DATA_RANGE 配置为 -3s 时，热力图上显示的坐标数据就是第 8-10 秒的数据，之前 1-7 秒的坐标数据将不会显示；

(2) “累积模式”：热力坐标会实时刷新，但之前的坐标会被叠加。要实现累积模式，需要将 DATA_RANGE 设置为较长的时间，例如你可以将 DATA_RANGE 设置为 "-1h"，那么热力图会累积显示过去 1 小时内的数据。当程序运行 2 小时后，现在显示的是第 2 小时内的数据，第 1 小时的数据将不再显示。

#### 5.1.4 摄像头分辨率

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_59.png" /></div>

##### 参数说明

CAM_WIDTH / CAM_HEIGHT：这里必须填写摄像头实际推流的分辨率（例如 1920x1080 或 1280x720），否则透视变换会出错。

这个参数也在“4.1.1 使用 reCamera 拍照”这一步中出现过。当我们将摄像头节点与采集节点连接时，你可以查看摄像头节点的 Resolution 参数，这就是你需要修改的分辨率参数。如果这里选择的是 1920 × 1080，那么在代码中就应该将 CAM WIDTH 修改为 1920，将 CAM HEIGHT 修改为 1080

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_60.png" /></div>

#### 5.1.5 标定的坐标数据

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_61.png" /></div>

这是在上一步“4.3 校准程序的使用”中执行 python 程序后在控制台生成的代码。请将此代码替换

#### 5.1.6 热阈值

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_62.png" /></div>

##### 参数说明

灵敏度（最大值）：如果是实时模式（只有少量点），`max` 设置为大约 2，否则颜色太浅看不清；

如果是 1 小时累积（成千上万的点），`max` 应设置为 150 或更高，否则图像会瞬间变成红色（过曝）。

### 5.2 激活热力图

按 Win + R，输入 "cmd"，进入路径 "heatmap-demo"，然后输入

```bash
python -m http.server 8080
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_72.png" /></div>

然后在浏览器中打开网页 "[InfluxDB Heatmap (Grafana Fix + 1h Accumulation)](http://localhost:8080/index.html)"，即可看到地图已经加载完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_73.png" /></div>

此步骤同样适用于 Linux。

## 6. 返回 Grafana 面板查看最终结果

此时，你应该可以在 Grafana 面板上看到如下显示。如果遇到任何问题，请参考文章末尾的“常见问题”部分。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_74.png" /></div>

## 常见问题

### Grafana 网页无法打开

进入 "Services"，找到 "Grafana"，然后右键选择 "Restart"。之后再次打开 `http://localhost:3000` 即可。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_75.png" /></div>

### Grafana 面板加载异常

如果在 Grafana 中发现实时热力图或 reCamera 实时画面无法加载或显示异常，则需要点击有问题的面板进行刷新，以热力图面板为例：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_63.png" /></div>

然后点击 Refresh

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_64.png" /></div>

### 热力图加载出现问题

如果遇到热力图加载问题，请先检查本步骤中的所有配置项是否正确。如果所有配置项都正确但热力图加载仍有问题，请在 [InfluxDB Heatmap (Grafana Fix 1h Accumulation)](http:// localhost:8080/index.html) 界面按下 F12 键，查看网页控制台的输出以进行排查。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_65.png" /></div>

### reCamera 实时画面出现卡顿

如果发现 reCamera 的实时画面卡住，并在运行一段时间后出现 "WebSocket:Disconnected"，这是正常现象，reCamera 资源有限，内存会被占满。等待一段时间让其恢复显示即可。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_66.png" /></div>

### Grafana 面板中的 “Current Number” 和 “Number of People Today” 显示不正确

这是正常现象，因为会有噪声干扰，过一段时间数值会恢复正常。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_67.png" /></div>

### Grafana 面板中的 “continuous running time” 是什么意思

这里的 “continuous running time” 指的是数据库从第一天运行到现在的持续运行时间，因为我在 InfluxDB 中将 reCamera 数据库的数据保留时间设置为 7 天，所以七天后会自动清空并重新计时。你可以在 InfluxDB 中自由设置每个数据库的数据存储时间。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_68.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_69.png" /></div>

### 是否可以导出数据

可以，你需要在 InfluxDB 的 Explore 界面中选择所需数据，然后点击 Submit，再点击 Download CSV。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_70.png" /></div>

### 如果 IP 地址发生变化，例如切换到不同的网络，则需要相应修改以下部分

(1) Node-RED 中 "InfluxDB Out" 节点的 IP 地址和验证 token  
(2) InfluxDB 数据库的登录 IP，例如：: http://10.241.1.98:8086/  
(3) Grafana 中数据源的 IP    
(4) 热力图 HTML 代码中的 IP


## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
