---
description: 通过在公共频道中共享联系人，并让同伴设备启用重复模式中继消息，临时扩展使用 SenseCAP Card Tracker T1000-E 的 MeshCore 通信路径。
title: 联系人共享与同伴重复中继
keywords:
  - MeshCore
  - Card Tracker T1000-E
  - Companion Repeat
  - Contact Sharing
  - Public Channel
  - LoRa Mesh
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/t1000e-meshcore-hero.png
slug: /t1000e_meshcore_contact_sharing_companion_repeat
sku: 114993369,114993649
sidebar_position: 3
last_update:
  date: 10/16/2026
  author: Advent Jiang
---

# 使用 T1000-E 扩展 MeshCore 网络：联系人共享与同伴重复中继

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/t1000e-meshcore-hero.png" alt="SenseCAP T1000-E devices used with the MeshCore App" width={900} height="auto" /></p>

## 介绍

当两个 MeshCore 用户相距较远，或者建筑物和地形阻挡了无线电路径时，他们可能无法接收彼此的消息。如果这两个设备都能与位于中间位置的一台 SenseCAP Card Tracker T1000-E 通信，你可以在这台中间设备上启用同伴重复模式，让它临时转发消息。

本指南使用三台运行 MeshCore 固件的 T1000-E 设备。它展示了如何通过公共频道共享联系人身份信息，如何使用一台同伴设备搭建临时中继，以及在中继设备断电和上电时通信结果的对比。

## 关键特性

- 在合适的网络条件下，尝试临时扩展通信路径，而无需事先部署专用固定中继器。
- 在熟悉的 MeshCore App 中完成所有配置——联系人共享和重复模式开关——让小团队可以快速完成设置。
- 通过开关中间节点的对比测试，直观了解该节点对跨节点通信的贡献。

## 工作原理

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-relay-topology.png" alt="Three-node topology: Companion1 relays between Companion2 and Companion3" width={900} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>Companion1 启用重复模式运行，而 Companion2 和 Companion3 保持在普通同伴模式。</i></p>

联系人共享和消息转发解决的是两个不同的问题：

- **联系人共享** 让 Companion2 和 Companion3 获取彼此的身份信息并保存为联系人。它本身并不会产生任何无线覆盖。
- **同伴重复模式** 让中间设备 Companion1 在条件允许时参与数据包转发。

在尚未交换任何联系人信息之前，公共频道就可以承载消息；交换身份主要是为后续的定向消息通信做准备。

## 硬件与软件需求

| 项目 | 本次测试中使用 |
| --- | --- |
| 设备 | SenseCAP Card Tracker T1000-E × 3 |
| 固件 / App | MeshCore 固件 V1.17.1；MeshCore App V1.47.0 |
| 角色 | Companion1：Repeat Mode 开启；Companion2 / Companion3：Repeat Mode 关闭 |
| 无线参数 | 869.495 MHz，带宽 250 kHz，扩频因子 10，编码率 5，发射功率 22 dBm |

:::caution
上述参数仅为本次测试中使用的配置；这并不意味着在所有地区都允许使用该频率和功率。请根据当地无线电法规选择无线参数。首次配置时，请参考 T1000-E 的 [Get Started with MeshCore](https://wiki.seeedstudio.com/cn/sensecap_t1000_e_meshcore/) 指南。
:::

## 入门

### 步骤 1：配置设备和 LoRa 参数

将三台 T1000-E 都配置为可以连接 MeshCore App 的同伴设备，并确保它们的固件版本和 LoRa 设置完全一致。本示例使用自定义无线参数。保存设置后，确认每台设备都在使用新的配置运行。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-radio-settings.png" alt="LoRa radio settings used in the test" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>本次测试使用的无线配置。截图来自 Companion2，其运行时禁用了重复模式。</i></p>

### 步骤 2：在中间设备上启用同伴重复模式

在 Companion1 的 Radio Settings 中，打开 **Enable Repeat Mode** 并保存。在 Companion2 和 Companion3 上保持 Repeat Mode 禁用。请注意，可启用重复模式的频率范围受到固件和 App 的限制。如果某个设置被拒绝，请使用既受支持又符合当地法规的配置。

### 步骤 3：建立联系人关系

让 Companion1 分别与 Companion2 和 Companion3 交换身份信息。完成后，两台端设备都会出现在 Companion1 的联系人列表中，但此时 Companion2 和 Companion3 还没有将对方保存为联系人。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-contact-list.png" alt="Companion1 contact list showing Companion2 and Companion3" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>Companion1 的联系人列表中同时包含 Companion2 和 Companion3。</i></p>

### 步骤 4：通过公共频道共享联系人

在公共频道中共享 Companion2 和 Companion3 的联系人卡片。在接收设备上，点击 **Add Contact** 以保存另一台设备的身份信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-contact-sharing.png" alt="Contact card shared in the Public Channel with an add confirmation" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>频道中的联系人卡片以及其已被添加的确认信息。</i></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-contact-before-after.png" alt="Companion3 before and after adding the contact" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>Companion3 在添加联系人前后的对比。</i></p>

### 步骤 5：验证消息中继

在本次部署中，两台端设备之间无法可靠、直接互通。首先关闭 Companion1 电源，从 Companion2 发送一条 Public 消息：Companion3 无法接收。然后重新开启 Companion1 电源并重复相同的消息测试：跨节点的 Public 通信恢复。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-repeat-result.png" alt="Sender status showing Heard 1 Repeat in the MeshCore App" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>发送端显示 “Heard 1 Repeat”。消息是否真正送达，始终应以接收设备上显示的结果为准。</i></p>

## 测试结果

在本次测试环境中，在 Companion1 与每个端设备建立联系人关系后，通过公共频道共享了联系人卡片，Companion2 和 Companion3 成功保存了彼此的身份信息。

在对比测试中：

- 当 Companion1 断电时，Companion2 发送的 Public 消息不会被 Companion3 接收。
- 当 Companion1 重新上电并启用重复模式后，Companion3 能够接收到 Companion2 发送的 Public 消息，且发送端显示 “Heard 1 Repeat” 状态。

需要注意的是，此次对比是通过切换 Companion1 的电源开关实现的，而不是仅勾选或取消重复模式复选框。在本次部署中，中间节点确实起到了临时中继的作用。

## 应用场景

- **临时户外小组**：在没有固定中继基础设施时，尝试利用你已经携带的设备来补充通信路径。
- **临时活动和现场部署**：快速共享联系人，为分散成员提供短期通信选项。
- **MeshCore 学习与实验**：最小三节点搭建，让身份共享与数据包转发之间的区别一目了然。

## 限制与注意事项

- 同伴重复中继是对专用固定中继器的补充，而不是替代。
- 转发性能取决于节点位置、干扰情况、电源供给以及网络规模。
- 不建议在拥挤的公共 Mesh 网络中随意启用重复模式。
- 成功添加联系人并不保证无线链路可用，“Heard 1 Repeat” 状态也不代表目标一定收到了消息。

## 资源

- [在 SenseCAP T1000-E 上 Get Started with MeshCore](https://wiki.seeedstudio.com/cn/sensecap_t1000_e_meshcore/)

## 技术支持与产品讨论

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
