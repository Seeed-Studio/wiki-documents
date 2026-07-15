---
title: Wifi Halow 快速上手指南
description: 本应用案例展示了在 reCamera 边缘计算平台上运行最新 YOLO11n 模型的极致性能表现与实测数据。
keywords:
  - reCamera
  - Edge AI
  - Wifi Halow
slug: /wifi_halow_getting_started
sku: 100063704
image: https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/getting_start/wifi_halow_log.jpg
sidebar_position: 1
last_update:
  date: 2026-06-02T00:00:00.000Z
  author: Sizhao zhou
createdAt: '2026-06-02'
updatedAt: '2026-06-02'
url: https://wiki.seeedstudio.com/cn/wifi_halow_getting_started/
---

# Wifi Halow 入门指南

在开始配置之前，请确保已准备好以下硬件：
* **数据线缆**：一根具备数据传输能力的 USB Type-C 线缆（请勿使用仅具备充电功能的线缆）。
* **reCamera**：一个拆去底板的reCamera设备。
---


## 介绍

Wifi Halow 是 reCamera 的一个无线网络模块，它允许您将 reCamera 连接到无线网络，实现远程监控和管理。相较于传统的Wifi连接，Wifi Halow 具有更强的穿墙与信号穿透力，超远的传输距离，极低的功耗，海量的设备连接容量多个优势。

---


## 开箱组装

收到货后盒子里会有如下三样物品：

1. Wifi Halow 模块
2. 后盖
3. 螺丝

![物品列表](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_list.png)

然后你需要准一个拆掉后盖的reCamera，如下图所示：

![拆掉后盖的reCamera](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/reCamera_uncover.jpg)

安装教程视频：
<video
  src="https://raw.githubusercontent.com/6zsz6/seeed_wiki_video/main/Wifi_Halow_install.mp4"
  controls
  width="100%"
  preload="metadata">
  您的浏览器不支持播放该视频。
</video>


:::note 注意
你的reCamera的OS版本必须是最新版本否则会无法正常识别出Wifi Halow模块，OS版本更新参考[升级OS版本](https://wiki.seeedstudio.com/cn/recamera_gimbal_getting_started/#ota-%E7%B3%BB%E7%BB%9F%E5%8D%87%E7%BA%A7)。
:::


## 硬件接口

在Wifi Halow的模组上有多个接口，分别是：
- BAT接口：用于连接电池使用，封装规格是MX1.25-2P
- DC 接口：用于连接12V的DC供电，封装规格是PH2.0-2P
- USB转接线端口：用于连接reCamera设备，封装规格是GH1.25-4P
![接口示意图](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/getting_start/wifi_halow_line.png)

---


## Web 连接界面介绍

连接USB线缆通过 ***192.168.42.1*** 这个IP地址登录到Web界面后，点击左边的 ***Network*** 进入网络设置界面，如下所示：

![Network 设置界面](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_network_set.png)
- ***Enable Halow***：使能Wifi Halow模块开关
- ***Keep-Alive***：开关Keep-Alive功能，保持与服务器的连接（可在设置中调整Keep-Alive时间间隔最低1s），避免断开连接
- ***Networks Found***：显示当前扫描到的无线网络列表（如果没有扫描到要连接的wifi可以点击右侧的'+'按钮手动添加网络）
- ***IPEX Antenna***：切换天线（在Wifi Halow模块上面存在两个天线一个是外部的SMA天线一个是内部的IPEX天线）开启则启用内部天线，详见下图：

  ![天线位置](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_antenna.jpg)

---

## 接入 Wi‑Fi HaLow 网络

1. 在 ***Networks Found*** 下方选择你要接入的Wifi Halow网络
2. 点击要连接的网络，保持和你要连接的网络相同配置，输入密码点击 ***Confirm*** 即可进行连接
3. 连接成功后，在 ***My Networks*** 下点击网络就可以查看IP等详细信息，如下图所示：
![天线位置](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_detial.png)

---


## 查看电池电压

在Wifi Halow模块上面有一个PH接口是接电池使用的，在其旁边还有两个LED指示灯，电池充电的时候红灯亮，充满绿灯亮，如下图所示：

![电池](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_BAT.jpg)

### 1.Node-Red 模块查看电池电压
在 ***node-red*** 面板左侧的列表中找到 ***reCamera*** 这个板块，在其下面有个 ***Battery Voltage*** 模块，此模块的作用就是查看电池电量，将其拖动到面板上然后点击右上角的部署，等待部署成功后，其下方就显示电池电压了，如下图所示：
![node-red_电池电压](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_node-red_bat.png)

### 2.linux 命令查看电池电压

使用 ***ssh*** 命令连接reCamera后，在终端输入如下命令即可查看电池电压（得到的数值是以 ***mv*** 为单位的）:
```bash
curl -s http://192.168.42.1/api/deviceMgr/queryBatteryInfo | python3 -c 'import sys,json; print(json.load(sys.stdin)["data"]["voltage"])'
```
效果如下图所示：
![linux_电池电压](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_linux_bat.png)

:::note 注意
1. 当没有接入电池的时候，以上两种方法所显示出来的数值会飘忽不定。
2. 持续远距离进行图传时，因为此时天线功耗较高，所以整板发热会比较严重。
:::

---


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
