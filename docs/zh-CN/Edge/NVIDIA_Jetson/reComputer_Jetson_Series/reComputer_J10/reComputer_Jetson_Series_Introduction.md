---
description: Jetson 系列计算机介绍。
title: Jetson 系列计算机介绍。
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_Jetson_Series_Introduction
last_update:
  date: 01/03/2023
  author: w0x7ce

---

# Jetson 系列计算机介绍。

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerheadline.png" /></div>

## ✨ 贡献者项目

- Seeed Studio公开维基平台更新
- 我们有更新此页面的任务列表，该列表分类在我们的[贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)下，我们致力于通过发展维基平台来增强用户体验并提供更好的支持。
- [您对此页面的贡献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35025656)对我们至关重要！我们非常重视您的意见，非常感谢您在提出想法方面的帮助。

## 介绍

Jetson系列的reComputer是紧凑的边缘计算机，内置了NVIDIA先进的AI嵌入式系统：reComputer J10（Nano）和reComputer J20（Xavier NX）。凭借丰富的扩展模块、工业外围设备、热管理以及数十年Seeed的硬件专业知识，reComputer for Jetson已经准备好帮助您加速和扩展在各种AI场景中出现的下一代AI产品。

该系列兼容NVIDIA Jetson软件堆栈、云原生工作流程、行业领先的AI框架，有助于实现无缝的AI集成。目前，我们已经推出了其中的四款，如下所示：

| 产品                 | [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html ) | [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) | [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)   | [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html)   |
|-------------------------|----------------|----------------|------------------|------------------|
| SKU | 110061362 |110061361 |110061363 | 110061401 |
|          Side View               |  <img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview3_1.png" />|     <img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" />          |     <img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" />            |    <img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png"  />            |
| Equipped Module         | Jetson Nano 4GB   | Jetson Nano 4GB   | Jetson Xavier NX 8GB | Jetson Xavier NX 16GB |
| Operating carrier Board | J1010 Carrier Board  | Jetson A206           | Jetson A206             |Jetson A206             |
| Power Interface         | Type-C connector  | DC power adapter           | DC power adapter             | DC power adapter            |
|Link |<a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a> |<a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a> |<a href="https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a> |<a href="https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png" alt="pir" width="200" height="auto"/></a> |

## 接口详情。

当前的4款reComputer产品外观相同，区别在于背部接口。[reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)使用一种接口组合，其他三款使用另一种接口组合，因为底盘上使用了两个不同的载板。


### J1010 载板

这个载板适用于[reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-a01mark.png" alt="pir" width={900} height="auto" /></p>

| Mark. | Name                    | Note                  |
|-------|-------------------------|-----------------------|
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num1.png" width="30px" height="30px"></image> | DCIN(Type-C interface)  | Power supply only     |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num5.png" width="30px" height="30px"></image>     |  HDMI               |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num4.png" width="30px" height="30px"></image>    | 1x USB 3.0 Type-A port  |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num3.png" width="30px" height="30px"></image>    | 2x USB 2.0 Type-A ports |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num2.png" width="30px" height="30px"></image>    | LAN                     |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num6.png" width="30px" height="30px"></image>   | USB Type-C port         | Data transmitted only |

### Jetson A206载板

这个载板适用于[reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)，[reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)，以及[reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-h01mark.png" alt="pir" width={900} height="auto" /></p>

| Mark. | Name                    | Note                  |
|-------|-------------------------|-----------------------|
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num1.png" width="30px" height="30px"></image>    | DCIN(circular interface)| Power supply only     |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num5.png" width="30px" height="30px"></image>    | DP
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num4.png" width="30px" height="30px"></image>    | HDMI |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num3.png" width="30px" height="30px"></image>    | 4x USB 3.0 Type-A ports                     |                       |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num2.png" width="30px" height="30px"></image>    | LAN        |             |
| <image src = "https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num6.png" width="30px" height="30px"></image>    | Micro-B port         | Data transmitted only |

## 盒子里是什么

在开机启动之前，您需要对reComputer进行所有检查和准备工作，准备第一次启动。打开您收到的产品并检查包装内容是否与您购买的产品型号完整一致。

### [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-10-1-A0shangxiang.png" alt="pir" width={500} height="auto" /></p>

**包含的箱子清单如下：**

- reComputer J1010，包括：
  - 4G Jetson Nano模块 x1
  - J1010载板 x1

**未包含配件，但需要用电源启动：**

- USB键盘和鼠标
- 显示屏
- Type-C电源线和电源适配器

:::note
    产品中不包括Type-C电源电缆和电源适配器。
:::

---

### [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-10-1-H0shangxiang.png" alt="pir" width={500} height="auto" /></p>

**包装盒清单如下：**

- reComputer J1020，包括：
  - 4G Jetson Nano 模块 x1
  - Jetson A206 扩展板 x1
- 12V/2A 电源适配器（带有5种可替换适配器插头） x1

**不包括配件，但需要使用以下物品进行启动：**

- USB键盘和鼠标
- 显示屏幕

:::note
您将有5种可选择的电源适配器。产品包含Type-C电源线和电源适配器。因此，您可以选择适合您所在国家或地区的适配器为reComputer供电，无需额外购买任何电源设备。
:::

---

### [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-20-1-H1shangxiang.png" alt="pir" width={500} height="auto" /></p>

**包含的盒子清单如下：**

- reComputer Jetson J2011，包括：
  - 8G Jetson Xavier NX 模块 x1
  - Jetson A206 扩展板 x1
- 19V/4.74A（最大90W）电源适配器（不含电源供应线）x1

**请注意: 不包括配件，但需要配件来供电:**

- USB键盘和鼠标
- 显示屏幕
- 适配器电源供应线

:::note
请根据您当地的电源插头标准匹配适配器的电源供应电缆。
:::

---

### [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-20-1-H2shangxiang.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-20-1-H2shangxiang1.png" alt="pir" width={500} height="auto" /></p>

**包含的盒子清单如下：**

- reComputer J2012，包括：
  - 16G Jetson Xavier NX 模块 x1
  - Jetson A206 扩展板 x1
- 19V/4.74A（最大90W）电源适配器（不含电源线）x1

**配件不包括在内，但需要额外购买以供开机使用。**

- USB键盘和鼠标
- 显示屏
- 适配器电源供应电缆

:::note
请根据您当地的电源插头标准匹配电源适配器的电源供应电缆。
:::

---

## 更何况

我们在这里向您展示更完整的关于NVIDIA® Jetson模块供电设备比较和NVIDIA® Jetson模块兼容载板比较的表格。您可以点击图片或标题进行更详细查看。

### <a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png" target="_blank"><span>NVIDIA® Jetson模块供电设备比较</span></a>

<div class="document">
<div class="document">
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png" alt="" /></a></p>
</div>
</div>

### <a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png" target="_blank"><span>NVIDIA® Jetson模块兼容的载板比较。</span></a>

<div class="document">
<div class="document">
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
<p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png" alt="" /></a></p>
</div>
</div>

## Resources

- **[PDF]** [NVIDIA Jetson设备和载板比较](https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里提供不同的支持，以确保您使用我们的产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

