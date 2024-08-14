---
description: 入门使用reComputer J1010
title: 入门使用reComputer J1010
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_J1010_with_Jetson_getting_start
last_update:
  date: 6/29/2023
  author: Lakshantha
---

# 入门使用reComputer J1010

<div align="center"><img width ="800" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-110061362-recomputer-j1010-first.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>

## 介绍
reComputer J1010 是一款紧凑型边缘计算机，内置NVIDIA Jetson Nano 4GB生产模块，配备128个NVIDIA CUDA®核心，提供0.5 TFLOPs（FP16）算力以运行AI框架和应用程序，如图像分类、目标检测和语音处理。生产模块提供16GB eMMC、更长的保修期和在生产环境中5-10年的操作寿命。([Jetson 常见问题解答](https://developer.nvidia.com/embedded/faq)). 我们也有reComputer [J20系列](https://www.seeedstudio.com/reComputer-J2021-p-5438.html?queryID=14111cbf2ca4f2951fd8a4c1762eb435&objectID=5438&indexName=bazaar_retailer_products) 采用Jetson Xavier NX模块构建，提供21 TOPS的AI性能，适用于更复杂的AI工作负载。

除了Jetson模块，reComputer J1010还包括 [J101载板](https://www.seeedstudio.com/reComputer-J101-v2-Carrier-Board-for-Jetson-Nano-p-5396.html) 带有板载 microSD 卡插槽、1*USB 3.0、2*USB2.0、HDMI、M.2 密钥 E 用于 WiFi、LTE 和蓝牙、RTC、树莓派 GPIO 40 针脚等功能,以及散热器和铝制外壳。该设备预装了 Jetpack 4.6.1,只需插上 USB C 5V/3A 电源适配器、键盘、鼠标和以太网线缆,即可开始您的嵌入式 AI 之旅!如果您需要更多的 USB 3.0 和板载 M.2 密钥 M 用于连接 SSD,可以选择 reComputer J1020。

注意:我们收到客户询问,他们需要更多存储空间,超出了我们提供的16GB eMMC。从2022年7月30日起,我们在产品上增加了microSD卡插槽。 [载板](https://www.seeedstudio.com/reComputer-J101-v2-Carrier-Board-for-Jetson-Nano-p-5396.html) 电脑型号 J1010。请检查。 [guide](https://wiki.seeedstudio.com/Flash_System_on_SD_card/#step-1-clone-this-repo) 向microSD卡刷入引导镜像,并调整I/O速度。


## 特征

- **手掌大小的边缘 AI 全系统** 提供 AI 算力 0.5 TFLOPS (FP16)，以及嵌入式开发丰富的接口。
- **准备好进行开发和部署:** 预装的 NVIDIA JetPack 支持整个 [Jetson 软件栈](https://developer.nvidia.com/embedded/develop/software) 行业领先的 [[AI开发工具](https://wiki.seeedstudio.com/Jetson-AI-developer-tools/) 针对于诸如物流、零售、服务、农业、智慧城市、医疗保健和生命科学等领域的强大人工智能应用的构建。
- **节能环保:** 由 Type C 5V/3A 供电,功耗仅需 5 瓦。
- **可扩展的** 带有内置接口和机箱的电脑可以通过后部的安装孔固定在墙壁上。

## 规格说明

<table>
  <thead>
    <tr>
      <th>规格说明</th>
      <th><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010</a></th>
      <th><a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">reComputer J1020</a></th>
      <th><a href="https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html">NVIDIA Jetson Nano Developer Kit-B01</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>模块</td>
      <td colspan='2'>Jetson Nano 4GB (正式版本)</td>
      <td>Nano (非生产版本)</td>
    </tr>
    <tr>
      <td>储存</td>
      <td colspan='2' align='center'>16 GB eMMC</td>
      <td>MicroSD (不包含卡)</td>
    </tr>
    <tr>
      <td>SD卡插槽</td>
      <td>包括在载板上</td>
      <td>-</td>
      <td>包括在内（模块上）</td>
    </tr>
    <tr>
      <td>视频编码器</td>
      <td colspan='2'>4K30 | 2x1080p60 | 4x1080p30 | 4x720p60 | 9x720p30 (H.265 & H.264)</td>
      <td>4Kp30 | 4x 1080p30 | 9x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>视频解码器</td>
      <td colspan='2' align='center'>4K60 | 2x 4K30 | 4x 1080p60 | 8x 1080p30 | 9x 720p60 (H.265 & H.264)
      </td>
      <td>4Kp60 | 2x 4Kp30 | 8x 1080p30 | 18x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>千兆以太网</td>
      <td colspan='3' align='center'>1*RJ45 Gigabit Ethernet Connector (10/100/1000)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>1 * USB 3.0 Type A; 
2 * USB 2.0 Type A;
1 * USB Type C for device mode;
1 * USB Type C for 5V power input</td>
      <td>4 * USB 3.0 Type-A ；
1 * Micro-USB port for device mode;</td>
      <td>4 * USB 3.0 Type-A; 
1 * Micro-USB port for 5V power input  or for device mode</td>
    </tr>
    <tr>
      <td>CSI相机连接</td>
      <td colspan='3' align='center'>2*CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )</td>
    </tr>
    <tr>
      <td>显示</td>
      <td>1*HDMI Type A</td>
      <td colspan='2' align='center'>1*HDMI Type A; 
1*DP</td>
    </tr>
    <tr>
      <td>风扇</td>
      <td>1* FAN Connector (5V PWM)</td>
      <td colspan='2' align='center'>1* FAN (5V PWM)</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1*M.2 Key E</td>
      <td>1*M.2 Key E (Disabled)</td>
      <td>1*M.2 Key E</td>
    </tr>
    <tr>
      <td>M.2 KEY M</td>
      <td>-</td>
      <td>1*M.2 Key M</td>
      <td>-</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colspan='2'>RTC套接字(保留)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>多功能接口</td>
      <td colspan='3' align='center'>1* 40-Pin header</td>
    </tr>
    <tr>
      <td>电源</td>
      <td>USB-Type C 5V⎓3A</td>
      <td>DC Jack 12V/2A</td>
      <td>DC Jack 5V⎓4A；
Micro-USB 5V⎓2A</td>
    </tr>
    <tr>
      <td>尺寸</td>
      <td colspan='2'>130 mm x 120 mm x 50 mm (with case)</td>
      <td>100 mm x 80 mm x 29 mm</td>
    </tr>
  </tbody>
</table>

## 给J1010电脑烧录Flash JetPack

:::info
更多信息请参见[维基](/reComputer_J1010_J101_Flash_Jetpack)页面,因为J1010使用J101主板。
:::

