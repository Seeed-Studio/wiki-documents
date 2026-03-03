---
description: SenseCAP M4 常见问题
title: SenseCAP M4 常见问题
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_FAQ
last_update:
  date: 02/14/2023
  author: Matthew
---

# 常见问题

### **节点的平均 flux 链同步时间是多少？**

下载并加载 20GB 快照文件，然后链同步大约一小时以追上最新区块。正确的同步时间取决于设备网络，请确保设备有良好的网络连接。

### **SenseCAP M4 Square 是否支持 NIMBUS 和 STRATUS？**

**不支持**，SenseCAP M4 Square 仅支持 CUMULUS。如需 NIMBUS 请点击[这里](https://www.seeedstudio.com/flux?utm_source=discord&utm_campaign=sensecapm4)

### **如何检查我的端口是否开放？**

SenseCAP M4 Square 开放了 Flux 所需的所有端口。SenseCAP Hotspot 应用提供 UPNP 检测。如果 UPNP 状态为开启，则端口已开放。如果状态为关闭，请检查您路由器的 UPNP。更多详情，请访问 [Flux 节点网络设置](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)

### **M4 是否需要静态 IP，是否可以在同一个外部 IP 下运行多个 SenseCAP M4 Square？**

需要外部 IP。

每个 IP 最多运行 8 台设备，并确保您的路由器支持 UPnP 或端口转发。

### **如何测试网络带宽是否满足要求？**

https://www.speedtest.net

### **flux 和 flux tokens 有什么区别？**

Flux tokens 就是 Flux。Flux tokens 是在不同区块链上支付的平行资产，如 ETH Flux、BSC Flux 等。它们可以在 Zelcore 内的 Fusion 应用中领取。从右上角三个点选择"平行挖矿领取"。只有当您的 Flux-Token 数量高于领取所需费用时，您才会看到可领取金额。

### **如果我是专业用户，可以擦除原系统并安装其他系统吗？**

这不是推荐的操作。但是，这是基于 x86 的设备，您可以重新安装任何您想要的系统，在此之前，请确保您知道自己在做什么。

但请记住，如果擦除标准系统，您将失去保修，并且很难恢复到原始系统。

### **我需要自己选择电源插头吗？**

M4 Square 包含宽输入电源适配器，并配有 US/AU/UK/EU 插头。

### **需要外部天线吗？**

wifi 天线在设备内部。SenseCAP M4 Square-Fluxnode 不需要外部天线。

### **我需要质押 1000 Flux 吗？**

**是的**，硬件中不包含 1000 Flux，所以您需要自己质押。

### **我的 M1 可以转换为 FluxNode 吗，可以将 8GB Pi 转换为 FluxNode 吗？**

目前，Flux 支持 Raspi 8GB，但需要外部 SSD，并且无法保证稳定性，这可能会影响设备的稳定运行。