---
description: reTerminal DM 开始使用 Ignition Edge
title: reTerminal DM 开始使用 Ignition Edge
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
# reTerminal DM 开始使用 Ignition Edge

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/reTerminal_DM_Ignition_Edge.png" alt="pir" width="600" height="auto"/></p>

> 在网络的远程边缘捕获、处理和可视化关键数据可能既困难又昂贵。Inductive Automation® 的 Ignition Edge 是一系列有限的、轻量级的 Ignition® 软件解决方案，专门为现场使用的设备和网络边缘的 OEM 设备而设计。借助 Ignition Edge，边缘计算比以往任何时候都更容易、更经济实惠，因此您可以将数据收集、可视化和系统管理扩展到网络的边缘。
>
> — [inductiveautomation.com](https://inductiveautomation.com/ignition/edge)

Ignition Edge 提供多种产品，可以在边缘设备上混合搭配，在网络边缘创建强大的解决方案：

- **Ignition Edge IIoT**：通过 MQTT 发布现场设备数据。
- **Ignition Edge Panel**：为现场设备创建本地 HMI。
- **Ignition Edge Compute**：为您的网络添加真正的边缘计算。
- **Ignition Edge Sync Services**：从网络边缘同步数据。
- **Ignition Edge EAM**：与其他 Edge 产品结合进行集中管理。

通过将 Ignition Edge 嵌入到网络边缘的现场和 OEM 设备中，您可以将 Ignition 一直扩展到网络的边缘。reTerminal DM 配备了丰富的可扩展性和混合连接能力，如数字 I/O、CAN 总线、RS485、RS232，强大的无线通信能力如 WiFi、BLE、\*4G、\*LoRa® 以及 10.1" 10 点多点触控高灵敏度电容面板，这使其成为托管 Ignition Edge 系列中任何强大应用组合的绝佳选择。

> \*4G 和 LoRa® 模块默认不随 reTerminal DM 提供，请相应购买相关模块。

## 硬件先决条件

- 具有 SSH 终端功能的 PC / Mac
- 具有可用硬盘容量以安装 Ignition Designer 应用程序的 PC / Mac
- 12-24V 直流电源
- 以太网线
- reTerminal DM x 1

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

<br />

:::note
*本指南假设您的 reTerminal DM 运行全新安装的 Raspberry Pi OS(x64)，并且可以从另一个客户端设备进行 SSH 终端访问。如果您需要此过程的详细说明，请参阅[刷写 reTerminal DM 操作系统的说明](https://wiki.seeedstudio.com/cn/reterminal-dm-flash-OS/#steps-for-flashing-raspbian-os)。*
:::

## 在 reTerminal 上安装 Ignition Edge

在您的设备上安装 Ignition Edge 很简单。

1. 访问 [Ignition 下载页面](https://inductiveautomation.com/downloads/)
2. 下载您希望使用的应用程序版本 - 在下载软件包之前，系统会提示您输入信息
3. 将压缩包复制到您希望安装的边缘设备上（我选择了 /opt/ 下的位置）
4. 在当前位置解压软件包
5. 删除剩余的原始软件包
6. 修改权限以执行 Ignition 启动脚本
7. 启动 Ignition 启动脚本

已编写了一个便利脚本，遵循这些步骤，不需要您为 Inductive Automation 的网站创建用户登录。要使用它，您只需获取 ignition edge 下载/安装脚本。下载脚本后，将其标记为可执行并运行它。您可能需要超级用户凭据才能创建必要的目录。去喝杯咖啡吧，安装需要几分钟时间。

```bash
curl -o download-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/download-ignition-edge.sh
chmod +x ./download-ignition-edge.sh
./download-ignition-edge.sh
```

### 卸载

如果您希望卸载软件包（通过安装程序脚本安装的），只需下载并执行卸载脚本。Inductive Automation 没有为其应用程序建议默认位置，因此*这仅适用于此自定义安装*。

```bash
curl -o uninstall-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/uninstall-ignition-edge.sh
chmod +x ./uninstall-ignition-edge.sh
./uninstall-ignition-edge.sh
```

## 首次启动 Ignition Edge 网关

安装完成后，您需要启动服务。您可以[设置网关在启动时自动启动](#launch-ignition-edge-gateway-on-boot)并重启 reTerminal，或者您可以选择手动启动服务。

 ```bash
/opt/ignitionedge/ignition.sh start
```

:::tip
如果您能够加载 Ignition Edge 网关的主页，您可以轻松检查服务是否正在运行。
:::

要加载网关的主页，请在 reTerminal 本身上启动 Web 浏览器访问 `localhost:8088`，或者从网络上的另一台设备访问 `{reterminalhostname}:8088`，或者从网络上的任何地方使用 reTerminal 本身的 IP 地址访问 `{reterminalip}:8088`

<p style={{textAlign: 'center'}}>
  <img src ="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-eula-screenshot.png" />
</p>
### 在启动时启动 Ignition Edge 网关
:::note
建议在设备启动时自动启动网关服务。有多种方法可以实现这一点，最终由用户决定如何执行此操作。
:::

在启动时启动服务的一种方法是将启动命令添加到您的 `.bashrc` 中。要执行此操作，只需在您选择的文本编辑器中打开您的 `.bashrc`。

```bash
nano ~/.bashrc
```
将启动命令附加到文件中

```bash
/opt/ignitionedge/ignition.sh start'
```

<p style={{textAlign: 'center'}}>
  <img alt="Launch On Boot Setup" src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-gateway-launch-setup.png" />
</p>
别忘了保存文件！
（在上面使用 nano 的示例中使用 `ctrl + x`）

:::warning
此方法不会在保存时启动网关，因此请重启 reTerminal 以确保更改按预期工作。
:::

## 配置 Ignition Edge

配置网关是一个直接的过程。首先接受 EULA，然后为 Ignition 创建默认用户名/密码。请记住这些信息，因为它将使用管理员凭据创建，并在本系列的系统配置中使用。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-create-user.png" />
</p>

:::note
虽然 Ignition Edge 默认配置为与主 SCADA 系统通信，但不需要使用 SCADA 服务器。Ignition Edge 是一个完全独立的产品，配置为在将来需要时轻松连接到 SCADA 网络。
:::

创建用户后，系统会询问您是否要更改安装的任何默认端口配置。我的网络中没有任何冲突的端口，所以我选择接受默认设置。这些端口将用于与主 SCADA 安装通信，因此如果您正在配置以与现有的 Ignition 安装配合使用，请确保此页面与您的预期值匹配。请注意，这些是应用程序使用的核心端口，但如果您选择在将来安装模块，您可能需要稍后配置更多端口。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-configure-ports.png" />
</p>

现在您已准备好初始化并启动服务！这需要几分钟来设置，不需要任何交互，所以您可以稍后再查看。完成后它将重定向到设计器主页，您可以开始工作！

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-launch-screen.png" />
</p>

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
