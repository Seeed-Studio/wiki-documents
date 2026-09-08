---
description: Wio Tracker L2 系列 SD 卡教程。包括格式化、地图生成和地图安装
title: SD 卡使用
keywords:
  - Meshtastic
  - Wio Tracker L2
  - MUI
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png
slug: /l2_sd_card
sku: 100029766
sidebar_position: 1
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/cn/l2_sd_card/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

离线地图允许 **Wio Tracker L2** 在没有互联网连接的情况下本地显示地图瓦片。这在在偏远地区或网络覆盖有限的地点使用时非常有用。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/OfflineMapL2.png" alt="pir" width={600} height="auto" /></p>

## 前置准备

在开始之前，请准备以下物品。

### 硬件

- Wio Tracker L2
- microSD 卡（容量：**8 GB–32 GB**，文件系统：**FAT32**）
- 电脑
- microSD 读卡器

### 软件

- Meshtastic 固件
- 离线地图包

:::tip

如果你的设备尚未安装 MUI，请先完成固件安装。

:::

## 准备 microSD 卡

### 步骤 1. 格式化 microSD 卡

[点击此处](https://www.sdcard.org/downloads/formatter/) 下载格式化工具：

安装软件后：

1. 将 microSD 卡插入读卡器。
2. 启动 **SD Memory Card Formatter**。
3. 选择你的 microSD 卡。
4. 选择 `Quick format`
5. 点击 **Format**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SDCardFormat.png" alt="pir" width={400} height="auto" /></p>

现在这张卡已经可以用于存储离线地图。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/FormatSucceed.png" alt="pir" width={400} height="auto" /></p>

:::warning

格式化会永久删除 microSD 卡上的所有数据。继续操作前请备份所有重要文件。

:::
### 步骤 2. 创建目录结构
为了让 MUI 识别你的地图，必须将它们放在 SD 卡根目录下特定的文件夹层级中：
1. 创建一个名为 maps（小写）的文件夹。
2. 在 maps 文件夹内，为样式创建一个子文件夹，例如 CartoDark。
3. 最终路径应类似于：SD_ROOT/maps/CartoDark/


###  步骤 3. 下载离线地图

[点击此处](https://github.com/meshtastic/device-ui/tree/master/maps) 从官方下载页面下载离线地图包。 

下载的压缩包包含 MUI 所需的全部地图数据。`atlas.zip`, `dark-matter-brown.zip`, `osm.zip`, `positron.zip` 是四种不同类型的地图文件包。你可以选择下载一个或多个你喜欢的类型。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/Downloadmap.png" alt="pir" width={400} height="auto" /></p>

###  步骤 4. 拷贝地图文件

1. 打开 microSD 卡。
2. 将下载的 ZIP 压缩包解压到 `maps` 文件夹中

目录结构应如下所示：

```text
microSD
└── maps
    ├── atlas
        └── 0
        └── ...
        └── 8
    ├── dark-matter-brown
    └── osm
```

:::note

除非有特别说明，否则不要重命名 **maps** 文件夹。

:::

在拷贝完成后，请安全弹出 microSD 卡。然后你就可以将卡插入 L2 并检查地图显示效果。