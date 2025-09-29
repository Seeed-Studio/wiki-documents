---
title: DSO Nano
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/DSO_Nano/
slug: /cn/DSO_Nano
last_update:
  date: 02/03/2022
  author: gunengyu
---
DSO Nano 是一款单通道手持示波器，适用于快速现场测量及其他用途。您会发现它非常易于使用，但它仍然是一款令人惊叹的小工具。

作为一个新的动态开放硬件和开源项目，相关信息往往分散在各处。本页面将尝试将最相关的信息集中到一个地方，以帮助新手在现有的大量未组织材料中找到方向。

点击图片可查看不同版本的 DSO Nano。

|[![](https://files.seeedstudio.com/wiki/DSO_Nano/img/Dsonanointro.jpg)](https://www.seeedstudio.com/DSO-nano-Pocket-size-digital-storage-oscilloscope-p-512.html)|[![](https://files.seeedstudio.com/wiki/DSO_Nano/img/Dsonanov2intro.jpg)](https://www.seeedstudio.com/DSO-Nano-v2-p-681.html)|[![](https://files.seeedstudio.com/wiki/DSO_Nano/img/Nano_v3.jpg)](https://www.seeedstudio.com/DSO-Nano-v3-p-1358.html)|

<div>
  |:---:|:---:|:---:|
  |[DSO Nano v1](https://www.seeedstudio.com/DSO-nano-Pocket-size-digital-storage-oscilloscope-p-512.html)<br />**(已停产)**|[DSO Nano v2](https://www.seeedstudio.com/DSO-Nano-v2-p-681.html)<br />**(已停产)**|[DSO Nano v3](https://www.seeedstudio.com/DSO-Nano-v3-p-1358.html)
</div>

##   硬件详情
---
迄今为止，DSO Nano 已推出三个主要版本，最初版本于 2009 年发布，DSO Nano V2 于 2010 年发布。（[DSO Quad](https://wiki.seeedstudio.com/cn/DSO_Quad) 引入了显著的硬件升级，包括双通道功能。）除了 V2 中改进的充电单元和重新设计的 PCB 外，规格基本保持不变。它们可以使用相同的固件。

V2 内部的一张照片已发布到 [论坛](https://community.seeedstudio.com/discover.html?t=DSO)。

<table>
<tr>
<td> CPU</td>
<td> ARM Cortex™-M3 (STM32F103VBT6)</td>
</tr>
<tr>
<td> RAM</td>
<td> 20k</td>
</tr>
<tr>
<td> Flash ROM</td>
<td> 128k</td>
</tr>
<tr>
<td> 时钟频率</td>
<td> 72MHz</td>
</tr>
<tr>
<td> 显示屏</td>
<td> 2.8″ 彩色 TFT LCD</td>
</tr>
<tr>
<td> 显示分辨率</td>
<td> 320×240</td>
</tr>
<tr>
<td> 显示颜色</td>
<td> 65K</td>
</tr>
<tr>
<td> 通过 USB 连接 PC</td>
<td> 作为 SD 卡读取器</td>
</tr>
<tr>
<td> 升级</td>
<td> 通过 USB 引导加载程序</td>
</tr>
<tr>
<td> 电源</td>
<td> 3.7V 可充电锂电池 / USB (LTC4054 充电控制器)</td>
</tr>
</table>

##   固件升级
---
您手中的 DSO Nano 在到达您之前可能已经经历了一段时间；很可能已经有更新版本的固件可用。

BenF 的最新固件可从 [技术支持](https://forum.seeedstudio.com/viewtopic.php?f=12&amp;t=1793)（此链接已失效，如果您正在寻找固件，请参考 [DSO Nano V3](https://wiki.seeedstudio.com/cn/DSO_Nano_v3/) 的 wiki）论坛获取。在 ZIP 文件中，您还可以找到此固件版本的操作手册。

要将固件升级到最新版本，您有以下几种选择：

*   如果您使用 Windows，请按照官方 [v2 用户手册](https://files.seeedstudio.com/wiki/DSO_Nano/res/DSO%20Nano%20v2%20Manual.pdf)（第 8-10 页）中的说明进行操作。所需的工具 DfuSeDemo.exe 也可从 [这里](http://dsonano.googlecode.com/files/um0412.zip) 获取。
*   在 Linux 和 Mac OS X 上，您可以使用 [Dfu-util](https://wiki.seeedstudio.com/cn/Dfu-util)（0.5 或更新版本）。

## 功能
---
<table>
<tr>
<td>模拟带宽</td>
<td>0 - 1MHz</td>
</tr>
<tr>
<td>最大采样率</td>
<td>1Msps 12位</td>
</tr>
<tr>
<td>采样存储深度</td>
<td>4096点</td>
</tr>
<tr>
<td>水平灵敏度</td>
<td>1μS/Div～10S/Div (1-2-5步进)</td>
</tr>
<tr>
<td>水平位置</td>
<td>可调，带指示器</td>
</tr>
<tr>
<td>垂直灵敏度</td>
<td>10mV/Div～10V/Div (使用×1探头)</td>
</tr>
<tr>
<td></td>
<td>0.5V/Div～100V/Div (使用×10探头)</td>
</tr>
<tr>
<td>垂直位置</td>
<td>可调，带指示器</td>
</tr>
<tr>
<td>输入阻抗</td>
<td>&gt;500KΩ</td>
</tr>
<tr>
<td>最大输入电压</td>
<td>80Vpp (使用×1探头)</td>
</tr>
<tr>
<td>耦合</td>
<td>直流</td>
</tr>
<tr>
<td>触发模式</td>
<td>自动、正常、单次、无触发和扫描</td>
</tr>
<tr>
<td>功能：</td>
<td>自动测量：频率、周期、占空比、</td>
</tr>
<tr>
<td></td>
<td>V<sub>pp</sub>、V<sub>ram</sub>、V<sub>avg</sub>和直流电压</td>
</tr>
<tr>
<td></td>
<td>使用标记进行精确垂直测量</td>
</tr>
<tr>
<td></td>
<td>使用标记进行精确水平测量</td>
</tr>
<tr>
<td></td>
<td>上升/下降沿触发</td>
</tr>
<tr>
<td></td>
<td>触发电平可调，带指示器</td>
</tr>
<tr>
<td></td>
<td>触发灵敏度可调，带指示器</td>
</tr>
<tr>
<td></td>
<td>保持/运行功能</td>
</tr>
<tr>
<td>测试信号</td>
<td>内置10Hz～1MHz (1-2-5步进)</td>
</tr>
<tr>
<td>波形存储</td>
<td>SD卡</td>
</tr>
<tr>
<td>通过USB连接PC</td>
<td>作为SD卡读卡器</td>
</tr>
</table>

## 资源
---
* 请访问我们的 [DSO Nano论坛](https://community.seeedstudio.com/discover.html?t=DSO)，以获得及时的技术支持和使用讨论。
* [官方固件、原理图和开发文档](http://code.google.com/p/dsonano/)

* [社区固件源码Git树](https://gitlab.com/dsonano/dso-firmware) (支持gcc和IAR)

* [修改您的DSO Nano用户界面](https://files.seeedstudio.com/wiki/DSO_Nano/res/DSOUI.pdf)

* [Sewa Mobil Jakarta](http://www.awanirentcar.com)，[汽车配件](http://kiosauto.com)

## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>