---
description: 低数据消耗模式配置（适用于4G版本）
title: 低数据消耗模式配置（适用于4G版本）
keywords:
- SenseCAP_M2
- Gateway
image: https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/sensecap_m2.jpg
slug: /cn/traffic_saving_config
last_update:
  date: 12/4/2024
  author: Jessie
---


本教程将指导用户为M2多平台网关**4G版本**配置低数据消耗模式。在此模式下，预计每月流量约为**60M**。具体流量取决于节点数据包等因素。

:::caution note

1. APP的状态显示可能会有延迟
2. 网络切换和RGB指示灯将在5分钟后改变
:::

### 检查固件版本

在配置低数据消耗模式之前，请先检查操作系统和固件版本。

:::tip
操作系统版本需要新于0.9.5<br/>
固件版本需要新于1.1.6
:::

查看[快速开始](https://wiki.seeedstudio.com/cn/quick_start_with_M2_MP/)以登录Luci页面。

导航到`Status` -> `Overview`，检查当前的操作系统和固件版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/version-check.png" alt="pir" width={800} height="auto" /></p>

#### 升级操作系统

固件将自动升级，但用户需要手动升级操作系统版本。

导航到`System` -> `Backup/Flash Firmware`，点击`Update`。

:::danger
在升级期间请保持电源连接。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/online-update.png" alt="pir" width={800} height="auto" /></p>

### 白名单配置

此选项卡用于过滤掉您不需要的节点以节省流量。

- 对于`SenseCAP`模式，除SenseCAP之外的节点将被自动过滤，无需额外配置。

- 对于`Packet Forwarder`和`Basic Station`模式，需要启用白名单模式。

 :::tip
 如果您使用的是AWS平台，可以跳过此步骤，只需在AWS控制台上配置白名单。
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/aws-white-list.png" alt="pir" width={600} height="auto" /></p>
 :::

 `OUI List`：节点EUI的前三个字节。    *用于过滤join-request数据包*。<br/>
  例如，对于SenseCAP节点，OUI是'2CF7F1'

  `Network ID List`/`DevAddr`：  *用于过滤上行数据包*。<br/>
 例如，对于SenseCAP节点，NetID是'000013'，DevAddr是'27000000 - 27FFFFFF'

  更多详情请参考[NetID和DevAddr前缀分配](https://www.thethingsnetwork.org/docs/lorawan/prefix-assignments/)
  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/white-list-config.png" alt="pir" width={800} height="auto" /></p>

### 设置PING参数

用于检查链路是否正常，留空则假设接口始终在线。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/mwan3.png" alt="pir" width={800} height="auto" /></p>

### 启用低数据消耗模式

启用`Low Data Consumption Mode`，并设置`alive time`，SenseCAP平台默认值：86400。

设置完成后，请重启网关以应用更改。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/mode-enable.png" alt="pir" width={800} height="auto" /></p>
