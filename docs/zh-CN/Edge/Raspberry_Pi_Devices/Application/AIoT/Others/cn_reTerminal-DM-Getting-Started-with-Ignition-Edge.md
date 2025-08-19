---
description: reTerminal DM 使用 Ignition Edge 入门指南
title: reTerminal DM 使用 Ignition Edge 入门指南
keywords:
  - Edge
  - reTerminal-DM
  - Ignition Edge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-DM-Getting-Started-with-Ignition-Edge
last_update:
  date: 09/29/2023
  author: Corey Thompson
---
# reTerminal DM 使用 Ignition Edge 入门指南

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/reTerminal_DM_Ignition_Edge.png" alt="pir" width="600" height="auto"/></p>

> 在网络边缘捕获、处理和可视化关键数据可能既困难又昂贵。Inductive Automation® 提供的 Ignition Edge 是一系列有限、轻量级的 Ignition® 软件解决方案，专为现场设备和网络边缘的 OEM 设备设计。有了 Ignition Edge，边缘计算变得比以往更简单、更经济实惠，因此您可以将数据收集、可视化和系统管理扩展到网络的边缘。
>
> — [inductiveautomation.com](https://inductiveautomation.com/ignition/edge)

Ignition Edge 提供了多种产品，可以在边缘设备上混合搭配使用，以在网络边缘创建强大的解决方案：
- **Ignition Edge IIoT**: 通过 MQTT 发布现场设备数据。
- **Ignition Edge Panel**: 为现场设备创建本地 HMI。
- **Ignition Edge Compute**: 为您的网络添加真正的边缘计算功能。
- **Ignition Edge Sync Services**: 从网络边缘同步数据。
- **Ignition Edge EAM**: 与其他 Edge 产品结合，实现集中管理。

通过将 Ignition Edge 嵌入到网络边缘的现场设备和 OEM 设备中，您可以将 Ignition 的功能扩展到网络的边缘。reTerminal DM 配备了丰富的可扩展性和混合连接功能，例如数字 I/O、CAN 总线、RS485、RS232，以及强大的无线通信能力（如 WiFi、BLE、\*4G、\*LoRa®）和 10.1 英寸 10 点多点触控高灵敏度电容屏，使其成为承载 Ignition Edge 系列强大应用程序的绝佳选择。

> \*4G 和 LoRa® 模块默认不随 reTerminal DM 提供，请根据需要单独购买相关模块。

## 硬件准备
- 具有 SSH 终端功能的 PC / Mac
- 具有足够硬盘容量以安装 Ignition Designer 应用程序的 PC / Mac
- 12-24V DC 电源
- 以太网线
- reTerminal DM x 1

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

<br />

:::note
*本指南假设您的 reTerminal DM 正在运行全新安装的 Raspberry Pi OS (x64)，并且可以从其他客户端设备通过 SSH 终端访问。如果您需要有关此过程的详细说明，请参阅 [reTerminal DM 操作系统刷写说明](https://wiki.seeedstudio.com/cn/reterminal-dm-flash-OS/#steps-for-flashing-raspbian-os)。*
:::

## 在 reTerminal 上安装 Ignition Edge

在您的设备上安装 Ignition Edge 非常简单。

1. 访问 [Ignition 的下载页面](https://inductiveautomation.com/downloads/)
2. 下载您希望使用的应用程序版本 - 在下载软件包之前，您需要填写相关信息
3. 将压缩包复制到您希望安装的边缘设备上（本文选择了 `/opt/` 目录下的位置）
4. 在当前位置解压该软件包
5. 删除原始的压缩包
6. 修改权限以执行 Ignition 的启动脚本
7. 启动 Ignition 的启动脚本

我们已经编写了一个便捷脚本，可以按照上述步骤操作，并且无需在 Inductive Automation 的网站上创建用户登录。要使用此脚本，您只需获取 Ignition Edge 的下载/安装脚本。下载脚本后，将其标记为可执行文件并运行。您可能需要超级用户权限来创建必要的目录。安装过程可能需要几分钟，您可以趁此时间去喝杯咖啡。

```bash
curl -o download-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/download-ignition-edge.sh
chmod +x ./download-ignition-edge.sh
./download-ignition-edge.sh
```

### 卸载

如果您希望卸载通过安装脚本安装的软件包，只需下载并执行卸载脚本。由于 Inductive Automation 没有建议应用程序的默认安装位置，*此脚本仅适用于此自定义安装*。

```bash
curl -o uninstall-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/uninstall-ignition-edge.sh
chmod +x ./uninstall-ignition-edge.sh
./uninstall-ignition-edge.sh
```

## 第一次启动 Ignition Edge 网关

安装完成后，您需要启动服务。您可以选择 [设置网关在启动时自动运行](#launch-ignition-edge-gateway-on-boot) 并重启 reTerminal，或者手动启动服务。

```bash
/opt/ignitionedge/ignition.sh start
```

:::tip
如果您能够加载 Ignition Edge 网关的主页，就可以轻松检查服务是否正在运行。
:::

要加载网关的主页，可以在 reTerminal 本地的浏览器中访问 `localhost:8088`，或者在网络中的其他设备上访问 `{reterminalhostname}:8088`，或者通过 reTerminal 的 IP 地址在网络中的任何地方访问 `{reterminalip}:8088`。

<p style={{textAlign: 'center'}}>
  <img src ="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-eula-screenshot.png" />
</p>

### 启动 Ignition Edge 网关并设置为开机启动

:::note
建议在设备启动时自动运行网关服务。有多种方法可以实现这一点，最终由用户决定采用哪种方式。
:::

一种方法是在 `.bashrc` 文件中添加启动命令。为此，请使用您喜欢的文本编辑器打开 `.bashrc` 文件。
```bash
nano ~/.bashrc
```
将启动命令追加到文件中：
```bash
/opt/ignitionedge/ignition.sh start
```
<p style={{textAlign: 'center'}}>
  <img alt="启动时运行设置" src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-gateway-launch-setup.png" />
</p>
别忘了保存文件！
（在上述 nano 编辑器示例中，按 `ctrl + x` 保存）

:::warning
此方法不会在保存后立即启动网关，因此请重启 reTerminal 以确保更改生效。
:::

## 配置 Ignition Edge

配置网关是一个简单的过程。首先接受最终用户许可协议（EULA），然后为 Ignition 创建一个默认的用户名和密码。请记住这些信息，因为它将以管理员凭据创建，并在整个系列中用于系统配置。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-create-user.png" />
</p>

:::note
虽然 Ignition Edge 默认配置为与主 SCADA 系统通信，但并不要求必须使用 SCADA 服务器。Ignition Edge 是一个完全独立的产品，配置后可以轻松地在未来连接到 SCADA 网络（如果需要）。
:::

创建用户后，系统会询问您是否希望更改安装的默认端口配置。我没有网络端口冲突，因此选择接受默认配置。这些端口将用于与主 SCADA 安装通信，因此如果您正在配置以与现有的 Ignition 安装协作，请确保此页面与您的预期值匹配。请注意，这些是应用程序使用的核心端口，但如果您选择未来安装模块，可能需要配置更多端口。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-configure-ports.png" />
</p>

现在您可以初始化并启动服务了！设置过程需要几分钟时间，不需要任何交互，因此您可以稍后再回来查看。完成后，它会重定向到设计器主页，您可以开始工作了！

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-launch-screen.png" />
</p>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>