---
description: 本维基介绍了 J501 载板的功能，并解释如何将 Jetpack 系统刷入 J501 载板。
title: 刷入 Jetpack
keywords:
- reServer
- Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reserver_j501_getting_started
last_update:
  date: 08/19/2024
  author: Youjiang
---

# reServer J501 入门指南

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/reServer_J501.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-Industrial-J501-Carrier-Board-Add-on.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
  </a>
</div>

J501 载板是一款强大的扩展板，支持 NVIDIA Jetson AGX Orin 模块。它具有丰富的数据端口和扩展接口，完全释放了 AGX Orin 模块的全部性能。此外，它支持添加 GMSL 扩展以连接最多 8 个 GMSL 摄像头。

## 特性

- **打造最强大的边缘计算 AI 计算机：** 专为集成 Jetson AGX Orin 模块设计，提供高达 275 TOPS 的 AI 性能，比 Jetson AGX Xavier 提高 8 倍。功耗可配置在 15W 至 60W 之间。
- **支持多传感器的高速接口：** 提供 22 条 PCIe Gen4 通道、1 个 10GbE、一个 Display Port、16 条 MIPI CSI-2 通道、USB 3.2 接口以及一个 40 针接头。
- **支持多 IO 的低速接口：** 提供 4x DI、4x DO、3x GND_DI、2x GND_DO、1x GND_ISO、1x CAN、1x RS232/RS422/RS485。
<!-- - **支持 BSP 开发：** 支持 Jetpack 6 的板级 BSP，方便开发自定义系统镜像。 -->

## 规格

<div class="table-center">
<table>
  <tbody>
    <tr>
      <td rowSpan={7}>I/O</td>
      <td>以太网</td>
      <td> 1x LAN0 RJ45 GbE (10/100/1000Mbps), <br /> 1x LAN RJ45 GbE (10/100/1000/10000Mbps) </td>
    </tr>
    <tr>
      <td>USB</td>
      <td> 3x USB3.1, <br /> 1x USB3.1 Type C（主机模式）, <br /> 1x USB2.0 Type C（设备模式） </td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td> 4x DI,4x DO,3x GND_DI,2x GND_DO,1x GND_ISO,1x CAN
1x RS232/RS422/RS485 </td>
    </tr>
    <tr>
      <td>显示</td>
      <td> 1x HDMI 2.1 Type A 7680x4320 </td>
    </tr>
    <tr>
      <td>SATA</td>
      <td> 2x SATA III 6.0Gbps at 30 Hz </td>
    </tr>
    <tr>
      <td>SIM</td>
      <td> 1x Nano SIM 卡槽 </td>
    </tr>
    <tr>
      <td>按钮</td>
      <td> 重置按钮，恢复按钮 </td>
    </tr>
    <tr>
      <td rowSpan={9}>扩展</td>
      <td> Mini PCIE </td>
      <td> 1x Mini PCIe 用于 LoRaWAN®/4G/系列无线（不包含模块） </td>
    </tr>
    <tr>
      <td> M.2 Key B </td>
      <td> 1x M.2 Key B (3042/3052) 支持 4G/5G（不包含模块） </td>
    </tr>
    <tr>
      <td> M.2 Key E </td>
      <td> 1x M.2 Key E </td>
    </tr>
    <tr>
      <td> M.2 Key M </td>
      <td> 1x M.2 Key M (PCIE 4.0) </td>
    </tr>
    <tr>
      <td> 风扇 </td>
      <td> 1x 风扇连接器 (5V PWM) </td>
    </tr>
    <tr>
      <td> TPM </td>
      <td> 1x TPM 2.0 连接器（不包含模块） </td>
    </tr>
    <tr>
      <td> RTC </td>
      <td> 1x RTC 插座（包含 CR1220）, <br />1x RTC 2 针 </td>
    </tr>
    <tr>
      <td> 摄像头 </td>
      <td> 2x 扩展连接器（每个连接器 8 条通道） </td>
    </tr>
    <tr>
      <td> PCIE </td>
      <td> 1x PCIE </td>
    </tr>
    <tr>
      <td> 电源 </td>
      <td> 电源供应 </td>
      <td> DC 12V-36V 接线端子 2 针（包含 24V/5A 电源适配器）</td>
    </tr>
    <tr>
      <td rowSpan={3}>机械规格</td>
      <td> 尺寸 (宽 x 深) </td>
      <td> 176 x 163mm（不包含模块）</td>
    </tr>
    <tr>
      <td> 工作温度 </td>
      <td> -20~60℃ </td>
    </tr>
    <tr>
      <td> 重量 </td>
      <td> 225g（不包含模块） </td>
    </tr>
  </tbody>
</table>
</div>

## 硬件概览

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/hardware_overview.jpeg"/>
</div>

## 将 JetPack 操作系统刷写到 J501 承载板

在这里，我们将向您展示如何将 [Jetpack](https://developer.nvidia.com/embedded/jetson-linux-archive) 刷写到连接到 reServer J501 的 NVMe SSD 上。

### 支持的模块
- [NVIDIA® Jetson AGX Orin™ 模块 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5458.html) 
- [NVIDIA® Jetson AGX Orin™ 模块 64GB](https://www.seeedstudio.com/NVIDIA-JETSON-AGX-ORIN-64GB-Module-p-5552.html) 

### 前置条件

- Ubuntu 主机电脑
- reServer J501 承载板
- NVIDIA® Jetson AGX Orin™ 模块 32GB/64GB
- AGX Orin 主动风扇
- NVMe M.2 2280 内部 SSD
- USB Type-C 数据传输线

:::info

我们建议您使用物理 Ubuntu 主机设备，而不是虚拟机。
请参考下表准备主机设备。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack 版本 </td>
        <td class="dbon" colspan="3"> Ubuntu 版本（主机电脑） </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
    </tr>
    <tr>
        <td >JetPack 5.x</td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::

### 准备 Jetpack 镜像

在这里，我们需要根据所使用的 Jetson 模块将系统镜像下载到我们的 Ubuntu 电脑上：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetpack 版本</th>
      <th>Jetson 模块</th>
      <th> GMSL </th>
      <th>下载链接1</th>
      <th>下载链接2</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>5.1.3</td>
      <td>AGX Orin 32GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EagENvz49i1GhTAMR9xCLlkBHscdcSHkYf9PQuPFcgR50A?e=mOMJ2c" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERG3upqXAQNHsJP6ZvG2MAEBGsndVCgrLnhcKvtWoGA6tA?e=14KO6z" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>56571770D7B1BAF53EAD3B1C173C075<br />4592601348501288C3E081FF8D51907F7</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUNTXrMsDcJCnIN2RvmXg6EBBLY6PRZiegvUjqI_N2i0YQ?e=SXEXXz" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EZ7iNOxMxL9AjcKFPLygVT8Bg5qnkE-ZsMmNmHkZzNayOg?e=qv2sbB" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>077878E3B84022BA1344ED2EE8738B9<br />EAECA6F6136468369B7DBB4FC5EF48802</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERoEi192vKFPnvFaqnqVz_oBNi3PAQ2W7gkZHpGu0XuuEw?e=pXYw9X" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ESfErbFgQl9NudcbGZXL3LMB9wavWcQwjtW6wYYtfwkE3A?e=H5sR4J" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>F3852FFC7A8CDDFD9C2857B2F3F6168<br />99DC69EE4D5BA92704DB192E803C29EA0</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ecebi5JjKaVHmY-DymgG8AIBPRgAuCXVCrf4IYiKIfsMxA?e=OJPKwB" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eccs1larF2FNhKi8MHred5kB4pQImN4ZHSgDM3BUDVzBtQ?e=reKIhD" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>61434E1A88FF2A95F6B13B5FFA51557<br />FAE8D46C67C72DDF862DE51D91DAF6987</td>
    </tr>
    <tr>
      <td rowSpan={4}>6.0</td>
      <td>AGX Orin 32GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERTmpYBKF2tAodLyqpajhLkBxPdGUIWXfGytdCGwNu28qw?e=cJIbtM" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EeHcCFk-chtDnEzoXiwvxZwBQuK3I3mTOAJ8mnZJE-P2uA?e=X9g0HK" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>B1C1BBB14058B0F5C00C5657A8EF8FA<br />7A4C3711DB8AD82F7E614311F95063989</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ef5wlNXtxVRIulSKwJTT3ocBmCBlHbQNVnz3LRDJtRwlGQ?e=KAIiVS" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EX5HoeV09eFKtWj9YhAfgZ8Bt2k9bxxxSO5-TQBZoGLB-Q?e=hvcfG1" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>0C58022F626321EE42464AACBB47029<br />6B1AFE0A7256787158539BE7EC73E19C6</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWbP7xmg-fRAs7N-7iL42QMBaRcQvV23IITvt-uC4p2rUg?e=XZmnzC" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EY-HFdsaHWVOvJJ5fMynVO0BvEOv5W0h1IxeSfesNFRYag?e=5thYHs" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>4077631986A66EB3AF5FBF4FF2FBDBC<br />CD07E4DC1AA4076414EB1F4640AF72451</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUK5fwDqq0hNgcnyXg_-qXUBa9qnRJQ0AXdcInMIJWtbZg?e=iFVAAl" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EUmpL5LNJDRLjoC6oQg6Vv4BgQ9eA4MUl4yE43fycz667w?e=Xw5nga" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td>8DCFF0FFBA81B756B0C62E50F4A106B<br />44116CC8171C05F48A328DE594D6A4CD9</td>
    </tr>
    <tr>
      <td rowSpan={4}>6.2</td>
      <td>AGX Orin 32GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfhMqk5d6tFKiDqbtyWKFdsBV-NLqs9L4NBY0dRC-Y_jHw?e=JQMYcn" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td> - </td>
      <td>69CFD82D0C70B55D5BDD34E3EAF7AE8<br />DDCE002CCCDBA3DCEE40F40CD8BBA0478</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Edgau76MPUZAnuAixzf7TSUBGF2edqqdZO3mHRaZB_Gd7Q?e=omVwi3" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td> - </td>
      <td>3BAEB35868E4B187F4B7C35FA44D8E0<br />BD9486161E14F9F073993216F83DFA0E4</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcWxzMVxULFJoPMMzcb2OU4B0TrE5PUoP-3-9uh9LFgA4g?e=oAUYmS" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td> - </td>
      <td>B6A9F41B8B42060D19F811B718E4B71<br />FCBE699BB9EC7A50B4B24DF205003111B</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQaWP2i_eNlOuzhWEQYy8YkBvKksE58swLgIqCXOO4m-kg?e=D95cXx" target="_blank" rel="noopener noreferrer">下载</a></td>
      <td> - </td>
      <td>AA04EFB99374DCDC89A57C039FA4E1F<br />F5C9371B22F8ED83612AC4C799CCB2640</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Jetpack5 镜像文件大小约为 **4.5GB**，下载大约需要 15 分钟。Jetpack6 镜像文件大小约为 **16.7GB**，下载大约需要 60 分钟。请耐心等待下载完成。
:::

:::info
为了验证下载的固件完整性，您可以比较 SHA256 哈希值。

在 Ubuntu 主机上，打开终端并运行命令 `sha256sum <File>` 来获取下载文件的 SHA256 哈希值。如果生成的哈希值与 Wiki 中提供的 SHA256 哈希值匹配，则说明您下载的固件是完整且无损的。
:::

### 进入强制恢复模式

:::info
在进行安装步骤之前，我们需要确保开发板处于强制恢复模式。
:::

<div align="center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/CGMGZGqZPKM" title="J501 进入强制恢复模式" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<details>

<summary> 分步操作 </summary>

**步骤 1.** 按住强制恢复按钮并保持不松开。

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/button.jpg" />
</div>

**步骤 2.** 通过连接电源线为载板供电。

**步骤 3.** 松开强制恢复按钮。

**步骤 4.** 使用 USB Type-C 数据传输线将开发板连接到 Ubuntu 主机。

**步骤 5.** 在 Linux 主机上，打开终端窗口并输入命令 `lsusb`。如果返回的内容中包含以下输出之一（根据您使用的 Jetson SoM），则说明开发板已进入强制恢复模式。

- 对于 AGX Orin 32GB: **0955:7223 NVidia Corp**
- 对于 AGX Orin 64GB: **0955:7423 NVidia Corp**

以下图片为 AGX Orin 32GB 的示例：

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### 刷写到 Jetson

**步骤 1:** 解压下载的镜像文件：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# 例如: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**步骤 2:** 执行以下命令将 Jetpack 系统刷写到 NVMe SSD：

```bash
cd mfi_xxxx
# 例如: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

如果刷写过程成功，您将看到以下输出：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
刷写命令可能需要运行 2-10 分钟。
:::

**步骤 3:** 使用板载 HDMI 接口将 J501 连接到显示器，并完成初始配置设置：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
请根据您的需求完成 **系统配置**。
:::

**步骤 4（可选）:** 安装 Nvidia Jetpack SDK

请在 Jetson 设备的终端中执行以下命令：

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## 资源

- [reServer Industrial J501 承载板数据手册](https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/reServer_Industrial_J501_Carrier_Board_Datasheet.pdf)
- [reServer Industrial J501 原理图](https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/202003906_reServer_Industrial_J501_Carrier_Board_v1.0_SCH_PDF_20240529.pdf)
- [reServer Industrial J501 3D 文件](https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/RESERVER_AGX_ORIN_CARRIER_BOARD.stp)
- [Seeed Jetson 系列产品目录](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio 边缘 AI 成功案例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson 系列比较](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson 设备一览](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)



## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时获得最佳体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>