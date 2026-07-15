---
description: SenseCAP M4 快速入门
title: SenseCAP M4 快速入门
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Quick_Start
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-02-24'
updatedAt: '2025-09-10'
url: https://wiki.seeedstudio.com/cn/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Quick_Start/
---

# SenseCAP M4 Square 快速入门

**SenseCAP M4 Square** 提供了部署下一代计算网络（FluxNode）的最简便方式。无需 Linux 命令、无需搭建环境，只需 4 个步骤即可完成部署。

## 前置条件

- 网络上行带宽足以部署 CUMULUS FluxNode **（至少 25Mbps 上行）**
- 已创建一个新的 CUMULUS FluxNodes

## 你需要准备什么

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.png" alt="quick-start" width={600} height="auto" /></div>

## 质押 Flux CUMULUS 节点

本教程以币安（Binance）为例

### 步骤 1 前往交易所购买 Flux

1. 下载 [Binance App](https://www.binance.com/zh-CN/download) 并注册账号

2. Flux 不能直接用法币购买。请先购买 USDT，然后将 USDT 兑换为 Flux

3. 在交易页面选择现货，在市场中选择 FLUX/USDT

4. 输入 USDT 数量，并确保兑换得到的 Flux 大于 1000

5. 点击 Buy 按钮，现在你已经成功购买了 Flux

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node.jpg" alt="stake-flux" width={600} height="auto" /></div>

### 步骤 2 下载 Zelcore App 并注册账号

1. 下载 [Zelcore App](https://zelcore.io/) 并登录你的 Zelcore 账号

2. 在 Portfolio 页面，点击 Add Assets 按钮添加 FLUX BSC 资产（Payments portfolio）

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node-1.png" alt="zelcore" width={600} height="auto" /></div>

### 步骤 3 将 Flux 从 Binance 提现到 Zelcore 钱包

1. 打开 Binance App 并进入钱包页面

2. 找到 Flux，点击 Withdraw 并选择 Send via Crypto Network

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_342796_dUNV1mJGFQqnbdUX_1672995944?w=1200&h=1200" alt="binance" width={600} height="auto" /></div>

3. 输入提现信息并发送

- 地址：打开 Zelcore App，复制 FLUX BSC 收款地址，并粘贴到 Binance 中

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_846590_gzvPZu5rXihuT8F5_1672996316?w=1280&h=1268.796498905908" alt="withdraw" width={600} height="auto" /></div>

- 网络：选择 BB Smart Chain (BEP20)
- 数量：1000+ Flux
- 从以下账户发送：Spot&Funding Wallet

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_462161_Dwa_CwJs_TZZu9PS_1672996442?w=1200&h=1200" alt="send" width={600} height="auto" /></div>

4. 检查你的提现信息并发送到 Zelcore

### 步骤 4 创建新的 Flux Cumulus 节点

1. 打开 Zelcore App，并检查你的 Flux 是否已经转入 FLUX BSC 资产（Payments portfolio）

2. 进入 Apps 页面，打开 Fusion，将 FLUX BSC 兑换为 Flux（Payments portfolio）。

- 卖出资产：选择 FLUX BSC
- 买入资产：选择 FLUX

注意：请确保你有足够的 BNB 支付兑换手续费

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_153450_KYFKcuB_o6xATDxg_1672996615?w=1200&h=1200" alt="swap" width={600} height="auto" /></div>

3. 将 Flux 从 Payments portfolio 发送到另一个 portfolio。

4. 现在你可以在 SenseCAP M4 Sqaure 上部署新的 Flux Cumulus 节点了！

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_337290_CDU9M2a95R8QqPsg_1672997135?w=1280&h=1277.1806167400882" alt="deploy" width={600} height="auto" /></div>

## 在 SenseCAP M4 Square 上部署 FluxNode

### 步骤 1 上电并连接网络

1. 将随附的 12V/2A 电源适配器插入 DC-IN 电源接口。

2. 将网线连接到 Ethernet2。

3. 设备会自动完成自配置。L3 指示灯常亮橙色表示配置完成并成功连接到互联网。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.png" alt="power" width={600} height="auto" /></div>

### 步骤 2 安装 SenseCAP Hotspot App 和 Zelcore App

1. SenseCAP Hotspot App 用于设置和管理设备。请扫描下方二维码安装 SenseCAP Hotspot App。

2. 使用你的邮箱注册 SenseCAP 账号或直接登录。

<div style={{textAlign: 'center'}}><a href="https://app.sensecapmx.com/"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-2.png" alt="app" width={600} height="auto" /></a></div>

3. Zelcore App 由 Flux 发布，用于查找、管理、交易并真正拥有你的数字资产、**FluxNode** 和相关信息。请点击下图安装 Zelcore App。

<div style={{textAlign: 'center'}}><a href="https://zelcore.io/"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-3.png" alt="zelcore" width={600} height="auto" /></a></div>

### 步骤 3 设置 SenseCAP M4

1. 按压设备左下方的顶针，顶盖会被顶起，然后将其取下。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-4.png" alt="setup1" width={600} height="auto" /></div>

2. 长按 B1 按钮 5 秒，直到 L2 指示灯蓝色闪烁，以开启蓝牙配置模式。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-5.png" alt="setup2" width={600} height="auto" /></div>

3. 在 SenseCAP Hotspot App 中选择 Flux 并点击 Setup

- 通过蓝牙扫描设备
- 选择设备进行连接

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.jpg" alt="setup3" width={600} height="auto" /></div>

4. App 成功连接设备后，点击 install 按钮，在设备上安装 flux dApp。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-7.png" alt="setup4" width={600} height="auto" /></div>

### 步骤 4 部署 Flux Node

1. Flux dApp 安装完成后，点击 Open 按钮，开始部署 CUMULUS FluxNode。

**注意：请购买 1000 枚 Flux 作为抵押，并将其转入你的 Zelcore Flux 钱包，用于 CUMULUS FluxNode 的设置。**

**指南**

- [FluxNode 设置指南](https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb)
- [Flux 轻节点设置视频教程指南（Zelcore 设置和存入 Flux 教程在 8:07 到 12:30）](https://www.youtube.com/watch?v=RT1uaSrurv4)

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-8.png" alt="deploy1" width={600} height="auto" /></div>

2. 从 Zelcore APP 中输入 Identity Key、Collateral TX ID、Output Index、Zel ID 和 Kadena Address，更多信息请下载 Zelcore。

> **Identity Key**: 点击 Apps > 在 Apps 页面点击 FluxNodes > 点击你的 FluxNode > 在展开菜单中点击 edit > 点击 Identity Key 进行复制
>
> **Collateral TX ID**: 点击 Apps > 在 Apps 页面点击 FluxNodes > 点击你的 FluxNode > 在展开菜单中点击 Edit > 点击 Collateral TX ID 进行复制
>
> **Output Index**: 点击 Apps > 在 Apps 页面点击 FluxNodes > 点击你的 FluxNode > 在展开菜单中点击 Edit > 点击 Output Index 进行复制
>
> **Zel ID**: 点击 Apps > 在 Apps 页面点击 Zel ID > 点击二维码复制 Zel ID
>
> **Kadena Address**: NIMBUS 和 STRATUS 可以输入 Kadena 地址以获得额外的 KDA 奖励。如果你部署的是 CUMULUS 则无需输入。点击 Portfolio > 在页面上点击 Show Zero Sum > 点击 Kadena > 点击 Details > 点击 Receive 操作 > 点击二维码复制 Kadena 地址

3. 点击 Start Deploy，SenseCAP M4 将自动部署 FluxNode。部署时间取决于设备的网络情况，请确保设备网络良好。此时 App 可以与 SenseCAP M4 断开连接，或继续通过 App 监控部署进度。

**注意：请确保你的设备网络具有公网 IP，且 DownloadSpeed >= 25 Mb/s 且 UploadSpeed >= 25 Mb/s。否则，Flux benchmark 将会失败。**

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-13.png" alt="deploy2" width={600} height="auto" /></div>

4. 当开始同步 Flux 链时，请前往 Zelcore App，在你的 FluxNode 中输入公网 IP 和名称。然后点击 Start 按钮启动你的 FluxNode。

如果你的 FluxNode 运行良好并通过 benchmark，FluxNode 状态会在 1 个区块处理后变为 Started，并在 1-10 个区块（2 到 20 分钟）后变为 Confirmed。Confirmed 为最终状态。你可以在 FluxOS 上通过刷新主页来检查节点是否已变为 Confirmed，若已确认，会在 Status 页面显示。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-14.png" alt="deploy3" width={600} height="auto" /></div>

## 高级功能

UPnP 设置
------------

UPnP 是通用即插即用（universal plug and play）的缩写，它允许你网络中的设备向路由器请求为入站流量打开端口。如果你的路由器支持并遵循正确的 UPnP 标准，UPNP 会是一个更简单的解决方案。

如果你想在单个外网 IP 地址上部署多个 SenseCAP M4 Square，请确保**设备所连接的路由器支持 UPnP 并已开启。**

注意：单个外网 IP 地址**最多支持部署 8 个 FluxNodes**。

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-16.png)

- 1 台 SenseCAP M4 Square 已部署 FluxNode

- 2 SenseCAP Hotspot App 通过蓝牙连接 M4

- 3 点击设置图标并进入 UPnP Setting

- 4 启用 UPnP 并选择一个未被占用的端口

- 5 点击确认并发送配置

- 6 现在 M4 UPnP 已启用，UPnP 状态为 ENABLE

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.jpg)

Fractus 设置
---------------

Fractus 节点诞生是为了增加 Flux 网络存储。Fractus 节点是提供至少 10TB 存储的 Cumulus 层级节点。Fractus 节点将在原生 Flux 区块奖励的基础上额外获得 15% 的 Flux。

运行 Fractus 节点的最低要求：

- 1000 Flux 抵押。
- 2 个 CPU 核心。
- 4 个 CPU 线程。
- 每秒 240 个 CPU 事件。
- 单个分区上 9250 GB 存储空间（允许 Raid）。
- 80MB/s 磁盘写入速度。
- 100Mb/s 下载/上传。

![](https://wdcdn.qpic.cn/MTMxMDI3MDEwODc4Njk2MTk_47467_AZXsjpYcOQweNFnJ_1675844077?w=1200&h=654)

- 1 SenseCAP M4 Square 已部署 FluxNode
- 2 将 10TB 硬盘插入 SenseCAP M4 Square 的 USB3.1 接口
- 3 使用 SenseCAP Hotspot App 通过蓝牙连接 M4
- 4 点击设置图标并进入 Fractus 设置
- 5 打开 Fractus，并点击 Confirm 发送配置
- 6 现在 M4 Fractus 已开启，Fractus 状态为 True

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/稿定设计导出-20230220-153442.jpg)

添加到 Dashboard
----------------

如需了解更多关于 SenseCAP M4 Square 的信息，请将其添加到 SenseCAP dashboard。

- 直接添加：在 FluxNode 页面，点击 + 图标并输入自定义名称和 SN（设备标签上）将设备添加到 Dashboard

- 通过蓝牙添加：如果你的 M4 已部署 FluxNode，使用 SenseCAP Hotspot App 通过蓝牙连接 M4，然后将其添加到 dashboard。

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-15.png)

恢复区块
-------------

使用 SenseCAP Hotspot App 通过蓝牙连接 M4，然后打开 Flux 应用并点击 Restore Block 按钮。M4 将自动恢复区块，无需其他步骤。恢复时间取决于设备网络情况，请确保设备网络良好。

删除
------

**请谨慎操作！** 删除已在 SenseCAP M4 上部署的 CUMULUS FluxNode。使用 SenseCAP Hotspot App 通过蓝牙连接 M4，然后打开 Flux 应用并点击 Delete 按钮以删除 FluxNode。

重新部署
--------

**请谨慎操作！** 重新部署会先自动删除已部署的 FluxNode。使用 SenseCAP Hotspot App 通过蓝牙连接 M4，然后打开 Flux 应用并点击 Redeploy 按钮并输入新的 FluxNode 信息以重新部署。

**去中心化应用支持列表**
====================================

- Flux Cumulus 节点

- Flux Cumulus Fractus（待定）

**Flux Cumulus 节点网络配置**
===========================================

为确保你的 Flux 节点正常运行，请务必正确设置网络。下面我们将介绍单节点和多节点的网络要求。

**要求**

- 一个外部 IP 地址，单个外部 IP 地址最多支持 8 个 Flux 节点。如果你有超过 8 台设备，可能需要更多外部 IP 地址

- 稳定的有线网络环境，≥25 Mbps 带宽

- 路由器支持 UPNP 和端口转发功能，用于将端口转发到设备。

**设置单节点**

[Refer to the flux official documentation](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)

**设置多节点**

SenseCAP M4 Square 不支持多个 FluxNode
