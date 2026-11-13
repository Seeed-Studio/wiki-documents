---
description: HaLowLink 2 Wi-Fi HaLow 网关完整入门指南——硬件连接、Web 界面、网络模式、双设备 HaLow 链路搭建、高级配置、固件维护、常见问题与故障排查
title: HaLowLink 2 入门指南
keywords:
  - HaLowLink 2
  - Wi-Fi HaLow
  - Wio-WM8108
  - 入门指南
  - 接入点
  - 扩展器
  - 配对
  - OpenWrt
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /halowlink2_getting_started
sku: 100072966
last_update:
  date: 11/12/2026
  author: Advent Jiang
createdAt: '2026-11-06'
updatedAt: '2026-11-12'
url: https://wiki.seeedstudio.com/cn/halowlink2_getting_started/
---

# HaLowLink 2 入门指南

<!-- 内部备注：本页所有操作流程均来源于官方 Morse Micro HaLowLink User Guide，该文档声明适用于 HaLowLink 1 和 HaLowLink 2。尚未在 Seeed 零售硬件上重新验证的条目带有内部“Requires Verification”注释——在发布前需完成验证，并记录截图和测试使用的固件版本。本页任何位置都不得使用模拟结果。 -->
<!-- 内部备注（来源核对 2026-11-11，官方 HaLowLink User Guide PDF，58 页）：默认状态 = "Router with a HaLow Access Point"——§1.3.1 第 9 页（"This is the default mode of operation"），§2.5 第 13 页（"When you first power on your HaLowLink it will be a Router with a HaLow Access Point"）；恢复出厂设置会回到该模式——§5 第 24 页。USB-C 携带以太网：§2.1.3 第 10 页（初始连接方式），§6.4 第 28 页（"A new Ethernet adapter should appear on your computer… DHCP Client"），§12.2.1 表 6 第 44 页（USB-C 行：电脑获得 192.168.12.x IP 并访问 https://192.168.12.1）。规格表措辞与 Seeed 产品页和 Product Brief Rev 9 一致（"1x USB-C port (power and Ethernet data)"）。 -->

从开箱到搭建一个可工作的远距离 HaLow 链路共分四步：连接硬件、登录 Web 界面、选择网络模式，以及配对两台设备。规格与功能说明见：[Introduction](/cn/halowlink2_introduction)。

本指南中的 Web UI 截图基于 **HaLowLink 软件版本 2.11.8**；在其他固件版本中，菜单名称和卡片布局可能有所不同。

<!-- 需要视频：开箱 + 首次登录 + 双设备配对演示（可选，P1）。由 Seeed 制作；完成后嵌入到此处。 -->

## 准备工作

### 所需物品

- **一台 HaLowLink 2**（Router / Access Point），或用于远距离链路的 **两台设备**，其中一台作为 Extender（[双设备搭建](#连接两台-halowlink-2-设备)）
- 零售包装内附件：电源适配器、USB-C 转 USB-C 线缆、以太网线缆、天线、支架
- 一台用于配置的电脑或智能手机；可选：一台现有路由器作为互联网上行

:::tip
底部标签上印有 **Web UI 用户名和密码** 以及默认的 **2.4 GHz Wi-Fi SSID/密码**（外加一个二维码）。登录时需要用到这些信息。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-lan-connection.jpg" alt="HaLowLink 2 on its stand with the antenna, a LAN Ethernet cable and the USB-C power cable connected" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>设备侧：天线连接在 SMA 接头上，以太网线插在 LAN 口，USB-C 电源线已连接。此照片中 WAN 口为空，电脑端未显示。</em></p>

### 连接硬件

1. 在上电之前，先将 **天线** 拧紧到 SMA 接头上。
2. 使用 **USB-C** 接口，通过**随附的电源适配器**为设备供电。不要使用 USB-A 转 USB-C 适配器。
3. 将电脑连接到设备——从以下方式中选择一种：
   - 使用 **以太网线连接到 LAN 口**——推荐用于首次配置
   - 使用 **2.4 GHz Wi-Fi**——SSID 和密码见底部标签（设备启动完成后再连接）
   - 使用 **USB-C 转 USB-C 线缆**——设备会在电脑上显示为一个网络适配器
4. 需要向下游提供互联网？请将你的路由器连接到 **WAN** 口。

**预期结果：** 状态指示灯 **常亮绿色**——设备运行出厂默认的 **带 Wi-Fi HaLow 接入点的 Router 配置**。

## 访问 Web UI

1. 打开浏览器并访问：

   ```text
   https://192.168.12.1
   ```

   管理界面 **仅支持 HTTPS**；输入 `http://` 会自动重定向。
2. 首次访问会出现 **证书警告**——设备使用自签名证书。请接受该证书；连接仍然是加密的。
3. 使用 **设备标签上打印的用户名和密码** 登录。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-login.png" alt="HaLowLink 2 web UI login page with username and password fields" width={700} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>登录页面：输入设备标签上的用户名和密码，然后选择 Log in。</em></p>

4. **Home 页面** 打开后会显示以下卡片：**Access Point (HaLow)**、**Access Point (2.4 GHz)**、**Local Network**、**Uplink (Ethernet)**、**Mode**、**Network Interfaces**、**System**。固件版本位于**左下角**；**System** 卡片中还会显示型号、OpenWrt 版本以及任何升级提示（见 [Firmware](#固件更新与恢复出厂设置)）。

**预期结果：** Home 页面成功加载；左下角可以看到固件版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-home-2.11.8.png" alt="HaLowLink 2 web UI Home page on software 2.11.8" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Home 页面（2.11.8），出厂默认：Mode 卡片显示 "Router with HaLow Access Point"，已连接客户端为 0，Uplink (Ethernet) 为 Disconnected（未接 WAN 线）。该图仅展示布局——尚未形成可用的 HaLow 链路。</em></p>

## 网络配置

HaLowLink 2 可以在以下三种配置之一下运行：

- **Router** / **Access Point**——两者都会承载一个 **HaLow AP**；它们的区别在于客户端从哪里获取 IP 地址。通过 **Wizard** 设置。
- **Extender**——通过 HaLow 客户端链路加入该 AP。通过物理 **Mode 按钮** 设置。

仅凭绿色常亮的状态指示灯无法区分 Router 和 Access Point。

| 模式 | 状态指示灯 | 客户端获取 IP 的来源 | 管理地址 | 适用场景 |
|:----:|:----:|:----|:----|:----|
| **Router**（出厂默认） | 绿色常亮 | 设备自身——`192.168.12.x`，带有自己的 DHCP 服务器、NAT 和防火墙 | `https://192.168.12.1` | 独立的 HaLow 网络或隔离测试环境 |
| **Access Point**（推荐） | 绿色常亮 | 你现有路由器的 DHCP 服务器——无 NAT | 上游分配的 IP，以及 LAN 口上的 `https://192.168.12.1` | 将 HaLow 设备加入现有局域网，使所有设备互通 |
| **Extender** | 青色常亮 | 通过 HaLow 链路连接到 Access Point 背后的网络 | 无——通过 Access Point 进行管理 | 双设备部署中的远端单元 |

当设备承载 HaLow AP（Router 或 Access Point 配置）时：

- **`192.168.12.1` 管理地址在 LAN 口（以及 USB-C）上始终可用**，即使设备获得了不同的上游 IP。例外情况：已配对的 Extender，或[完全桥接配置](#静态-ip-与-dhcp)。
- **Wizard 总是从默认配置开始**——运行它会覆盖在 Wizard 之外所做的更改。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-wizard-2.11.8.png" alt="HaLowLink 2 Wizard page with the HaLow Mode and Network Mode options on software 2.11.8" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Wizard（2.11.8）。HaLow Mode：Access Point、EasyMesh Controller 或 802.11s Mesh。Network Mode：HaLow 设备从哪里获取 IP——截图中显示的是默认选择（本设备的本地网络）；推荐的现有路由器选项是第二个单选按钮。更改在 Save &amp; Apply 后生效。</em></p>

状态指示灯的瞬时状态：绿色或青色闪烁 = 启动中；黄色闪烁 = 正在恢复出厂设置；黄色常亮 = 引导加载程序（见 [Recovery](#固件更新与恢复出厂设置)）；**蓝色闪烁 = 正在更新固件——请勿断电**。

### Router 模式（默认）

开箱即用时，设备以路由模式转发流量：自有 `192.168.12.x` 子网、DHCP 服务器和防火墙，**WAN** 口作为上行。无需额外配置。Web UI 只在设备自身的网络（LAN、USB-C、2.4 GHz Wi-Fi、HaLow）上响应——绝不会从 WAN 侧提供管理访问。

### Access Point 模式（推荐）

使用此模式可让 HaLow 设备成为你现有网络中的一等公民：

1. 使用网线将 **WAN** 口连接到你的路由器。在 Home 页面中检查 **Uplink (Ethernet)** 是否显示已分配 IP。
2. 打开 **Wizard**。选择 *"Wi-Fi HaLow devices will get an IP on your existing router's network"*（标记为 *(Recommended)*）。

**预期结果：** HaLow 客户端从你的路由器获取 IP，并可访问局域网中的所有设备。Web UI 既可通过上游地址访问，也可在 LAN 口通过 `https://192.168.12.1` 访问。

### Extender 模式

Extender 模式用于双设备部署中的*远端*单元。通过物理 **Mode 按钮** 切换——无需使用 Web UI：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mode-button.jpg" alt="Mode button on the side of the HaLowLink 2 enclosure" width={400} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>机壳侧面的 Mode 按钮，位于散热孔之间。它不是电源开关。</em></p>

1. 开机。等待状态指示灯常亮（绿色或青色）。
2. **按住 Mode 按钮。** 状态指示灯先 **绿色慢闪**，然后 **青色快闪**。在青色快闪时松开。
   （在绿色慢闪阶段松开会执行[恢复出厂设置](#固件更新与恢复出厂设置)。）
3. 等待状态指示灯变为 **青色常亮**。

**预期结果：** 青色常亮 = Extender 模式。该单元现在需要进行配对（[下一节](#连接两台-halowlink-2-设备)）。配对完成后，它不再有独立的 Web UI——通过 Access Point 进行管理。其 LAN、WAN、USB-C 和 2.4 GHz Wi-Fi 均承载扩展后的网络。

## 连接两台 HaLowLink 2 设备

设备 #1 = 路由器旁边的 **HaLow Access Point**。设备 #2 = 远端位置的 **Extender**。任何接入 Extender 的设备——无论是以太网、USB-C 还是 2.4 GHz Wi-Fi——都会通过亚 1 GHz 的 HaLow 链路加入你的网络。所有应用场景都基于这一流程。

### 网络拓扑

```text
[ Router / LAN ] --Ethernet(WAN)-- [ HaLowLink 2 #1: HaLow AP (green LED) ]
                                        )))  Wi-Fi HaLow link ( sub-1 GHz )  (((
[ Remote devices ] --Ethernet/USB-C/2.4 GHz Wi-Fi-- [ HaLowLink 2 #2: Extender (aqua LED) ]
```

<!-- Image Required: verified two-device topology diagram with real photos. Priority P1. -->

### 为设备配对

准备这两个设备：

1. 之前配置过的设备？先进行[出厂重置](#firmware-update-and-factory-reset)，这样两个设备都从默认状态开始。
2. 设备 #1 = 路由器附近的 **Access Point**：WAN 口接到路由器，使用推荐选项运行向导（[步骤](#access-point-mode-recommended)）。Status 指示灯常亮绿色。
3. 设备 #2 = 远端位置的 **Extender**（[步骤](#extender-mode)）。Status 指示灯常亮青色。
4. 两台设备固件是否相同？在设备 #2 进入 Extender 模式并失去其 Web UI 之前，先在每个首页的**左下角**检查版本。

<!-- Requires Verification (internal): confirm whether units from different regional variants can pair, and whether HaLowLink 1 and HaLowLink 2 interoperate. Not stated in the official guide — do not publish an answer until confirmed with Morse Micro or on hardware. -->

然后为它们配对——推送配置，无需输入凭据：

1. 在 **Access Point** 上：按下并**立即松开** Mode 按钮。Wi-Fi HaLow 指示灯开始慢速闪烁。
2. 在 **Extender** 上：按下并**立即松开** Mode 按钮。它的 Wi-Fi HaLow 指示灯开始慢速闪烁。
3. 等待凭据交换完成（通常几秒钟）。

**预期结果：** Extender 的 Wi-Fi HaLow 指示灯变为**常亮紫色**——已接收凭据，链路已连接。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-led-indicators.jpg" alt="Front of the HaLowLink 2 showing the labelled Status, Wi-Fi HaLow and 2.4 GHz LEDs" width={400} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>前面板上带标签的三个指示灯。此处：Status 青色 + Wi-Fi HaLow 紫色 = 已配对的 Extender。静态照片只能显示颜色，无法显示闪烁节奏。</em></p>

配对失败？两个 HaLow 指示灯会**快速闪烁 120 秒**——安全重试延时。等待两台设备上的闪烁都停止后，再从步骤 1 重试。

:::note
如果 Access Point 作为 **EasyMesh Controller** 运行，已配对的 Extender 会自动变为 EasyMesh Agent（Mesh：**在欧盟或英国不支持**；也很少需要）。若改用手动凭据：对 Extender 进行出厂重置，并使用其配置门户 `https://192.168.12.1`。详情见官方 [HaLowLink User Guide](https://www.morsemicro.com/resources/user_guides/HaLowLink-User-Guide.pdf)。
:::

## 验证连接

1. **Access Point 首页 → Connected Devices：**此处会显示 Extender 及其后端设备——点击卡片查看信号强度。
2. **在 Extender 上：**Wi-Fi HaLow 指示灯为**常亮紫色**（紫色闪烁 = 有流量活动）。
3. **连接一台测试设备**到 Extender——通过以太网、USB-C 或其 2.4 GHz Wi-Fi。Wi-Fi 凭据在**Extender 自身的标签**上，而不是 Access Point 的标签。
4. **检查它的 IP 地址：**由 DHCP 分配——在推荐设置中，由你的主路由器分配（查看其租约表）。
5. 从测试设备 **Ping** 你的路由器或其他 LAN 主机，或在 Access Point 的 Web UI 中使用 **Network → Diagnostics**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-associated-client.jpg" alt="Expanded Access Point (HaLow) card on the Home page listing one associated HaLow client with signal and RX/TX rates" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Access Point（HaLow）卡片在 AP 首页展开：一个关联的 HaLow 客户端——已配对的 Extender——信号为 −32 dBm。RX/TX 数值是 UI 报告的无线链路速率，而不是实际应用吞吐量。</em></p>

**预期结果：**测试设备获得主 LAN 的 IP 地址，并通过 HaLow 链路访问你的网络。

<!-- Resolved 2026-11-11: screenshot inserted above. The device owner confirmed it shows the successful AP–Extender link and approved publishing the client MAC visible in it (0C:BF:74:00:50:AC). Same screen records firmware context: OpenWrt 23.05.6, hostname halowlink2-74e7, channel 28 (916.0 MHz, 8 MHz), WPA3 SAE. -->

## 高级设置

除了向导之外：**Quick Config**（常用设置，以图示实时显示）和 **Advanced Config**（细粒度访问：接口、无线、防火墙、系统、软件包、终端）。启用 Advanced Config 后，**Unsaved Changes** 指示器会在你应用前预览每项更改对应生成的精确 `uci` 命令。

:::caution
错误的网络设置可能会让你无法访问 Web UI。救援路径：在连接到 LAN 或 WAN 口的电脑上，设置静态 IP `10.22.121.110`（子网掩码 `255.255.255.254`，如果操作系统无法设置 /31，则用 `255.255.255.0`）。设备始终会在 **`https://10.22.121.111`** 响应。最后手段：[出厂重置](#firmware-update-and-factory-reset)。
:::

### 无线设置

- **Quick Config → Wireless** 设置 SSID、密码、信道和带宽。
- 带宽为 1 / 2 / 4 / 8 MHz：带宽越宽 = 吞吐量越高，带宽越窄 = 覆盖范围和鲁棒性越好。
- **管制区域已锁定。** 信道、带宽和发射功率遵循区域版本（欧盟/英国：14 dBm；日本：16 dBm；能力上限：26 dBm）。欧盟和英国不支持 Mesh。仅在其销售地区使用该设备。
- 空中环境拥挤？使用 **Status → Channel Analysis**（Advanced Config）寻找更安静的信道；**Status → Realtime Graphs** 显示实时链路质量。

<!-- Requires Verification (internal): capture the actual Quick Config → Wireless options on retail firmware (TX power exposure, bandwidth dropdown per region) before adding screenshots. -->

### 静态 IP 和 DHCP

- **Quick Config → Network Interfaces** 将每个逻辑接口设置为静态 IP（可选启用 DHCP 服务器）或 DHCP 客户端；同一网络中的端口会自动桥接。更改在 **Save & Apply** 后生效。
- **完全桥接的 Access Point（高级）：**通过将 LAN、2.4 GHz 和 USB 接口从 `lan` 网络移到 `wlan`，移除单独的 `192.168.12.1` 管理子网。请**从上游分配的地址**（而非 `192.168.12.1`）进行此操作，或使用 **Apply Unchecked**——否则会自动回滚。详情见官方 [HaLowLink User Guide](https://www.morsemicro.com/resources/user_guides/HaLowLink-User-Guide.pdf)。
- CLI：`uci set … && uci commit`，然后 `reload_config`（无需重启）；使用 `logread -l 100 -f` 跟踪日志。

### SSH 和诊断

- **SSH 默认禁用。** 在 **Advanced Config → Administration → SSH Access** 中启用；使用标签上的凭据登录。**Services → Terminal** 是基于浏览器的控制台（仅支持明文 HTTP——按浏览器的警告链接继续）。
- **Network → Diagnostics** 可运行 ping、traceroute、arp-scan 和 iperf3——并显示所用的精确命令。
- **Services → Range Test**（Advanced Config）在两台 HaLowLink 设备之间自动化 iperf3：两台设备固件相同，从下拉列表中选择远端设备，输入其**标签密码**，Start Test。可将结果导出为 CSV/JSON。CLI 额外工具：`morse_cli`（底层 HaLow 芯片访问）和 `wavemon`（信号监视器）。

:::caution
Range Test 结果是**易失的**——重启会删除结果，因此请先导出。若结果约为 40 Mbps UDP **且** 900+ Mbps TCP，说明测试跑在**以太网**上，而不是 HaLow 链路：重新摆放设备并重测。
:::

<!-- Requires Verification (internal): run a real Range Test on Seeed hardware and capture screenshots + a CSV export. Real results only — never publish throughput numbers that were not captured from a real test. -->

### 固件更新和出厂重置

**检查并更新固件。** 已安装版本显示在首页的**左下角**。联网时，**System** 卡片会显示升级提示（例如 *Upgrade to 3.2.3 available*）——仅为提示，直到你安装为止。从侧边栏的 **Upgrade** 页面进行安装：自动升级（从官方更新服务器下载；需要互联网）或手动上传文件。更新过程中 Status 指示灯会**蓝色闪烁——请勿断电**。

<!-- Requires Verification (internal): confirm whether Seeed will distribute firmware separately from the Morse Micro servers; only official Morse Micro / Seeed Studio download sources may ever be linked here. -->

**出厂重置。** 将设备恢复为默认的 **带 Wi-Fi HaLow Access Point 的 Router 配置**（常亮绿色）：

1. 上电。等待 Status 指示灯常亮（绿色或青色）。
2. **按住 Mode 按钮直到 Status 指示灯慢速绿色闪烁，然后松开。**（按住到快速变为青色则会进入 Extender 模式。）
3. 指示灯短暂黄色闪烁，然后变为**常亮绿色** = 完成。再次使用标签上的凭据在 `https://192.168.12.1` 登录。

**恢复。** 更新过程中断电可能会损坏固件：此时 Status 指示灯会保持**常亮黄色**，设备无法正常启动。恢复通过引导加载程序进行——请仔细遵循官方 [HaLowLink User Guide](https://www.morsemicro.com/resources/user_guides/HaLowLink-User-Guide.pdf) 中 “Recovering From Failed Updates” 章节的步骤，并在尝试前联系 Seeed 支持。

<!-- Requires Verification (internal): the full bootloader recovery procedure (User Guide §14.1: hold Mode while powering on → yellow + 5 white blinks → release → static IP 192.168.12.2/24 on the PC → http://192.168.12.1 → upload firmware → 10+ min LED sequence) is deliberately NOT published as executable steps until it has been reproduced on Seeed retail hardware. The previous full transcription is kept in D:\SeeedWiki\notes\halowlink2\old-drafts\. -->

## 常见问题

### 什么是 Wi-Fi HaLow？

Wi-Fi HaLow（IEEE 802.11ah）是在亚 1 GHz 频段工作的 Wi-Fi，为长距离和低功耗而设计。在 HaLowLink 2 上：视距可达 1 km，相比 2.4 GHz Wi-Fi 具有更好的障碍穿透能力，但单链路数据速率较低。

### 我需要两台 HaLowLink 2 设备吗？

一台设备即可为支持 HaLow 的客户端（例如基于 Wio-WM6108 / Wio-WM6180 的节点）添加一个 Wi-Fi HaLow 接入点。两台设备可以为**非 HaLow** 设备——手机、笔记本电脑、以太网设备——搭建一条远距离链路：一台作为接入点，一台作为扩展器。

### 默认管理地址和登录信息是什么？

`https://192.168.12.1`（仅支持 HTTPS；首次访问出现证书警告是预期行为），用户名和密码印在设备标签上。在扩展器模式下，设备无法通过该地址访问。

### 接入点模式和扩展器模式有什么区别？

**Access Point**（指示灯常亮绿色）：承载 HaLow 网络，连接到你的路由器，提供完整的 Web UI。**Extender**（指示灯常亮青色）：作为 HaLow 客户端，通过以太网、USB-C 以及自身的 2.4 GHz Wi-Fi 扩展 AP 的网络；配对完成后自身不再提供 Web UI。可通过 Mode 按钮切换到扩展器模式；恢复出厂设置会将设备恢复为接入点模式。

### 普通智能手机可以直接连接 Wi-Fi HaLow 吗？

不能——消费级手机没有 sub-1 GHz 802.11ah 射频。请使用第二台 HaLowLink 2 作为**扩展器**：它会将链路重新广播为普通的 2.4 GHz Wi-Fi 热点（凭据在其自身标签上），并通过其以太网/USB-C 端口转发。

### 43.3 Mbps 是实际吞吐量吗？

不是——这是 MM8108 射频在 8 MHz 带宽下的最大**PHY（物理层）速率**。实际吞吐量更低，并取决于带宽、距离、信号质量和干扰。请使用 [Diagnostics / Range Test tools](#ssh-和-diagnostics) 测量你自己的链路。

### 我可以更改工作区域吗？

不能。设备仅针对其销售地区（美国、加拿大、澳大利亚、英国、欧洲、日本）完成认证；频段、信道和发射功率限制随之固定。更改或绕过区域设置不受支持，并会违反无线电法规。

<!-- Requires Verification (internal): confirm with Morse Micro whether any region-selection mechanism exists in retail firmware at all before expanding this answer. -->

## 故障排查

| 症状 | 检查 | 解决方法 |
|:----|:----|:----|
| **无法访问 Web UI**，地址为 `https://192.168.12.1` | 状态指示灯颜色？电脑是否连接在 **LAN 或 USB-C**（而不是 WAN）？电脑是否获得 `192.168.12.x` 地址（DHCP 客户端）？ | 指示灯常亮**青色** = 扩展器模式——属正常；请从 AP 管理网络，或通过[恢复出厂设置](#firmware-更新和-factory-reset)退出扩展器模式。指示灯常亮绿色但无法访问：请[恢复出厂设置](#firmware-更新和-factory-reset)。修改设置后被锁在外：使用[诊断 IP](#advanced-设置) `10.22.121.111`。 |
| **设备无法配对**（HaLow 指示灯快速闪烁） | 两个按钮是否是*按下后立即松开*（而不是长按）？AP 是否常亮绿色，扩展器是否常亮青色？设备是否在有效范围内？ | 快速闪烁 = **120 秒重试延迟**——等待两台设备都停止闪烁后，再次配对。配对后 AP 模式发生变化：为 Network Mode 变化，请对扩展器断电重启；为 HaLow Mode 变化，请重新[配对](#pair-the-devices)。 |
| 已连接客户端**没有 IP 地址** | 设备当前处于哪种模式？由谁提供 DHCP？（参见[对比表](#network-配置)。） | Router 模式：设备分配 `192.168.12.x`。Access Point 模式：由你的**主路由器**分配 IP——请检查其租约表；客户端*不会*出现在设备的 Local Network 卡片中。扩展器客户端：通过 AP 的网络分配——如果 AP 被重新配置，请对扩展器断电重启。 |
| **已连接但无互联网** | AP 首页：**Uplink (Ethernet)** 是否显示 IP？WAN 端口是否接到路由器？ | 先修复 WAN 上行。如果仅在电脑通过网线连接到扩展器/AP 时互联网变差：你的操作系统更偏好有线链路——请调整其路由优先级/metric，使你的常用连接保持默认路由。 |
| HaLow 链路**吞吐量低** | 信号强度（Connected Devices 卡片）、实时图表、信道分析；距离和障碍物；带宽设置 | 重新摆放或调整设备朝向；选择更不拥挤的信道；检查带宽设置。每多一跳 Mesh，吞吐量减半。在 Range Test 中，约 40 Mbps UDP + 900+ Mbps TCP = 流量走的是**以太网**，而不是 HaLow。HaLow 指示灯持续快速闪烁 = **网络环路**——移除两端之间的任何第二根网线。 |

对于此处未涵盖的问题：请先更新固件，然后尝试恢复出厂设置。若需报告问题，请在 Web UI 中打开 **Help → Support → Create Archive** 并保留生成的归档文件以供技术支持使用。更多详情请参阅官方 [HaLowLink User Guide](https://www.morsemicro.com/resources/user_guides/HaLowLink-User-Guide.pdf)。

<!-- Requires Verification (internal): reproduce each troubleshooting row on retail hardware and record the firmware version. Full 11-entry Symptom/Checks/Resolution/Verification version is kept in D:\SeeedWiki\notes\halowlink2\old-drafts\ for reference. -->

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
