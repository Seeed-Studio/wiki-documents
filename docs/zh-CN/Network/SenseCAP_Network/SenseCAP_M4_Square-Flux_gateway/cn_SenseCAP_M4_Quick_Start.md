---
description: SenseCAP M4 快速入门
title: SenseCAP M4 快速入门
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Quick_Start
last_update:
  date: 02/14/2023
  author: Matthew
---

# SenseCAP M4 Square 快速入门

**SenseCAP M4 Square** 提供了部署下一代计算网络（FluxNode）的最简单方式。无需 Linux 命令，无需构建环境，只需 4 个步骤即可完成部署。

## 先决条件

* 网络具有足够的上传速度来部署 CUMULUS FluxNode **（最低 25Mbps 上传速度）**
* 已创建新的 CUMULUS FluxNodes

## 您需要的物品

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.png" alt="quick-start" width={600} height="auto" /></div>

## 质押 Flux CUMULUS 节点

本教程以币安为例

### 步骤1 前往交易所购买 Flux

1. 下载 [币安 App](https://www.binance.com/zh-CN/download) 并注册账户

2. Flux 无法用法币直接购买。请先购买 USDT，然后将 USDT 兑换为 Flux

3. 在交易页面，选择现货，市场选择 FLUX/USDT

4. 输入 USDT 数量，确保兑换的 Flux 大于 1000

5. 点击买入按钮，现在您已成功购买 flux

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node.jpg" alt="stake-flux" width={600} height="auto" /></div>

### 步骤2 下载 Zelcore App 并注册您的账户

1. 下载 [Zelcore App](https://zelcore.io/) 并登录您的 Zelcore 账户

2. 在投资组合页面，点击添加资产按钮来添加 FLUX BSC 资产（支付投资组合）

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node-1.png" alt="zelcore" width={600} height="auto" /></div>

### 步骤3 从币安提取 Flux 到 Zelcore 钱包

1. 打开币安 App 并访问钱包页面

2. 访问 Flux，点击提现并选择通过加密网络发送

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_342796_dUNV1mJGFQqnbdUX_1672995944?w=1200&h=1200" alt="binance" width={600} height="auto" /></div>

3. 输入提现信息并发送

* 地址：打开 Zelcore App，复制 FLUX BSC 接收地址，并粘贴到币安中

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_846590_gzvPZu5rXihuT8F5_1672996316?w=1280&h=1268.796498905908" alt="withdraw" width={600} height="auto" /></div>

* 网络：选择 BB Smart Chain (BEP20)
* 数量：1000+ flux
* 发送来源：现货和资金钱包

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_462161_Dwa_CwJs_TZZu9PS_1672996442?w=1200&h=1200" alt="send" width={600} height="auto" /></div>

4. 检查您的提现信息并发送到 Zelcore

### 步骤4 创建新的 Flux Cumulus 节点

1. 打开 Zelcore App，检查您的 Flux 是否已发送到您的 FLUX BSC 资产（支付投资组合）

2. 访问应用页面，打开 Fusion 将 FLUX BSC 兑换为 Flux（支付投资组合）。

* 出售资产：选择 FLUX BSC
* 购买资产：选择 FLUX

注意：确保您有足够的 BNB 来支付兑换费用

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_153450_KYFKcuB_o6xATDxg_1672996615?w=1200&h=1200" alt="swap" width={600} height="auto" /></div>

3. 将 Flux 从支付投资组合发送到另一个投资组合，如挖矿的 Flux 资产

4. 现在您可以在 SenseCAP M4 Square 上部署新的 Flux Cumulus 节点了！

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_337290_CDU9M2a95R8QqPsg_1672997135?w=1280&h=1277.1806167400882" alt="deploy" width={600} height="auto" /></div>

## 在 SenseCAP M4 Square 上部署 FluxNode

### 步骤1 通电并连接互联网

1. 将提供的 12V/2A 电源适配器插入 DC-IN 电源连接器。

2. 将网线连接到 Ethernet2。

3. 设备将自动进行自我设置。L3 指示灯稳定橙色表示设置和互联网连接成功。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.png" alt="power" width={600} height="auto" /></div>

### 步骤2 安装 SenseCAP Hotspot 应用和 Zelcore 应用

1. SenseCAP Hotspot 应用专为设置和管理设备而设计。请扫描以下二维码安装 SenseCAP Hotspot 应用。

2. 使用您的邮箱注册 SenseCAP 账户或直接登录。

<div style={{textAlign: 'center'}}><a href="https://app.sensecapmx.com/"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-2.png" alt="app" width={600} height="auto" /></a></div>

3. Zelcore 应用由 Flux 发布，用于查找、管理、交易和真正拥有您的数字资产、**FluxNode** 和信息，请点击以下图片安装 Zelcore 应用。

<div style={{textAlign: 'center'}}><a href="https://zelcore.io/"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-3.png" alt="zelcore" width={600} height="auto" /></a></div>

### 步骤3 设置 SenseCAP M4

1. 按下设备左下角的顶针，端盖被抬起后将其取下。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-4.png" alt="setup1" width={600} height="auto" /></div>

2. 按住 B1 按钮 5 秒，直到 L2 指示灯闪烁蓝色，以开启蓝牙配置模式。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-5.png" alt="setup2" width={600} height="auto" /></div>

3. 在 SenseCAP Hotspot 应用中选择 Flux 并点击设置

* 通过蓝牙扫描设备
* 选择设备进行连接

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.jpg" alt="setup3" width={600} height="auto" /></div>

4. 应用成功连接到设备。现在点击安装按钮在设备上安装 flux dApp。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-7.png" alt="setup4" width={600} height="auto" /></div>

### 步骤4 部署 Flux Node

1. Flux dApp 安装完成，现在点击打开按钮并开始部署 CUMULUS FluxNode。

**注意：请购买 1000 个 Flux 作为抵押品并将其转移到您的 Zelcore Flux 钱包中以进行 CUMULUS FluxNode 设置。**

**指南**

* [FluxNode 设置指南](https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb)
* [Flux Light Node 设置视频教程指南（设置 Zelcore 和存入 Flux 教程从 8:07 到 12:30）](https://www.youtube.com/watch?v=RT1uaSrurv4)

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-8.png" alt="deploy1" width={600} height="auto" /></div>

2. 从 Zelcore 应用输入身份密钥、抵押品交易 ID、输出索引、Zel ID 和 Kadena 地址，请下载 Zelcore 获取更多信息。

> **身份密钥**：点击应用 > 在应用页面点击 FluxNodes > 点击您的 FluxNode > 在展开菜单中点击编辑 > 点击身份密钥复制它
> 
> **抵押品交易 ID**：点击应用 > 在应用页面点击 FluxNodes > 点击您的 FluxNode > 在展开菜单中点击编辑 > 点击抵押品交易 ID 复制它
> 
> **输出索引**：点击应用 > 在应用页面点击 FluxNodes > 点击您的 FluxNode > 在展开菜单中点击编辑 > 点击输出索引复制它
> 
> **Zel ID**：点击应用 > 在应用页面点击 Zel ID > 点击二维码复制 Zel ID
> 
> **Kadena 地址**：NIMBUS 和 STRATUS 可以输入 Kadena 地址以获得额外的 KDA 奖励。如果您部署 CUMULUS 则无需输入。点击投资组合 > 在页面上点击显示零和 > 点击 Kadena > 点击详情 > 点击接收操作 > 点击二维码复制 Kadena 地址

3. 点击开始部署，然后 SenseCAP M4 将自动部署 FluxNode。部署时间取决于设备网络，请确保设备有良好的网络。现在应用可以断开与 SenseCAP M4 的连接或继续使用应用监控部署进度。

**注意：确保您的设备网络有公共 IP 且下载速度 >= 25 Mb/s，上传速度 >= 25 Mb/s。否则，Flux 基准测试将失败。**

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-13.png" alt="deploy2" width={600} height="auto" /></div>

4. 当开始同步 Flux 链时，请转到 Zelcore 应用并在您的 FluxNode 中输入公共 IP 和名称。然后点击开始按钮启动您的 FluxNode。

如果您的 FluxNode 运行良好并通过基准测试。您的 FluxNode 状态需要挖掘 1 个区块才能更改为已启动，需要 1-10 个区块（2 到 20 分钟）才能获得确认。确认是最终状态。您可以通过刷新主页在 FluxOS 上检查节点是否获得确认，它将在状态页面上显示。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-14.png" alt="deploy3" width={600} height="auto" /></div>

## 高级功能

UPnP 设置
--------

UPnP 代表通用即插即用，本质上允许网络上的设备请求路由器为传入流量打开端口。如果您的路由器受支持并遵循适当的 UPnP 标准，UPnP 可以是一个更简单的解决方案。

如果您想在单个外部 IP 地址上部署多个 SenseCAP M4 Square，请确保**设备连接的路由器支持 UPnP 并将其打开。**

注意：单个外部 IP 地址**最多支持部署 8 个 FluxNode**。

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-16.png)

*   1 SenseCAP M4 Square 已部署 FluxNode
    
*   2 SenseCAP Hotspot App 通过蓝牙连接 M4
    
*   3 点击设置图标和 UPnP 设置
    
*   4 启用 UPnP 并选择一个未使用的端口
    
*   5 点击确认并发送配置
    
*   6 现在 M4 UPnP 已启用，UPnP 状态为 ENABLE
    

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.jpg)

Fractus 设置
-----------

Fractus 节点的诞生是为了增加 Flux 网络存储。Fractus 节点是提供至少 10TB 存储的 Cumulus 层节点。Fractus 节点将在原生 Flux 区块奖励基础上额外获得 15% 的 Flux。

运行 Fractus 节点的最低要求：

*   1000 Flux 抵押品。
*   2 个 CPU 核心。
*   4 个 CPU 线程。
*   每秒 240 个 CPU 事件。
*   单个分区上 9250 GB 的存储（允许 Raid）。
*   80MB/s 磁盘写入速度。
*   100Mb/s 下载/上传。

![](https://wdcdn.qpic.cn/MTMxMDI3MDEwODc4Njk2MTk_47467_AZXsjpYcOQweNFnJ_1675844077?w=1200&h=654)

*   1 SenseCAP M4 Square 已部署 FluxNode
*   2 将 10TB 驱动器插入 SenseCAP M4 Square USB3.1
*   3 SenseCAP Hotspot App 通过蓝牙连接 M4
*   4 点击设置图标和 Fractus 设置
*   5 打开 Fractus 并点击确认发送配置
*   6 现在 M4 Fractus 已打开，Fractus 状态为 True

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/稿定设计导出-20230220-153442.jpg)

添加到仪表板
-------

有关您的 SenseCAP M4 Square 的更多信息，请将其添加到 SenseCAP 仪表板。

*   直接添加：在 FluxNode 页面，点击 + 图标并输入自定义名称和 SN（在设备标签中）将您的设备添加到仪表板
    
*   通过蓝牙添加：如果您的 M4 已部署 FluxNode，通过蓝牙使用 SenseCAP Hotspot App 连接 M4。然后将其添加到仪表板。
    

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-15.png)

恢复区块
-----

通过蓝牙使用 SenseCAP Hotspot App 连接 M4。然后打开 Flux 应用并点击恢复区块按钮。M4 将自动恢复区块，无需其他步骤。恢复时间取决于设备网络，请确保设备有良好的网络。

删除
---

**请谨慎操作！** 删除已在 SenseCAP M4 上部署的 CUMULUS FluxNode。通过蓝牙使用 SenseCAP Hotspot App 连接 M4。然后打开 Flux 应用并点击删除按钮删除 FluxNode。

重新部署
-----

**请谨慎操作！** 重新部署将首先自动删除已部署的 FluxNode。通过蓝牙使用 SenseCAP Hotspot App 连接 M4。然后打开 Flux 应用并点击重新部署按钮，输入新的 FluxNode 信息进行重新部署。

**去中心化应用支持列表**
==============

*   Flux Cumulus Node
    
*   Flux Cumulus Fractus (TBD)
    

**Flux Cumulus Node 网络配置**
==========================

为确保您的 Flux Node 正常运行，请务必适当设置您的网络。下面我们将介绍单节点和多节点网络要求。

**要求**

*   外部 IP 地址，单个外部 IP 地址支持的 Flux 节点最大数量为 8 个。如果您有超过八个设备，您可能需要更多外部 IP 地址
    
*   稳定的有线网络环境，≥25 Mbps 带宽
    
*   路由器支持 UPNP 和端口转发功能，将端口转发到设备。
    

**设置单节点**

[参考 flux 官方文档](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)

**设置多节点**

SenseCAP M4 Square 不支持多个 FluxNode