---
description: 这是一个关于在 NVIDIA Jetson 设备上使用 IMX219 摄像头的常见问题解答
title: 在 NVIDIA Jetson 设备上使用 IMX219 摄像头
keywords:
  - Jetson
  - IMX219 Camera
  - CSI Camera
image: https://files.seeedstudio.com/wiki/imx219/IMG_20260602_165135.jpg
slug: /how_to_use_camera_imx219
last_update:
  date: 06/03/2026
  auther: Dongxu Jin
  createdAt: '2026-6-3'
  updatedAt: '2025-6-5'
url: https://wiki.seeedstudio.com/cn/how_to_use_camera_imx219/
---

# IMX219 摄像头安装指南

IMX219 是一款广泛使用的 800 万像素 CMOS 图像传感器，使用 15 针 CSI 软排线。

## 硬件安装
CSI 摄像头不支持热插拔。所有接线操作必须在开发板完全断电的情况下进行。
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/imx219/IMG_20260602_165135.jpg"/></div>
抬起 Jetson 开发板上 CSI 接口的卡扣。
插入 CSI 软排线，确保排线的金属触点与 Jetson 载板上的触点正确对齐。
向下按压卡扣，将排线牢牢锁紧固定。

## 软件驱动配置
启动 NVIDIA 配置工具：
 ```bash
  sudo /opt/nvidia/jetson-io/jetson-io.py
```
导航到 Configure Jetson Nano CSI Connector。
<div style={{display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'nowrap'}}>
    <div style={{flex: 1, textAlign: 'center'}}>
        <img width="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-16-40.png"/>
    </div>
    <div style={{flex: 1, textAlign: 'center'}}>
        <img width="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-17-20.png"/>
    </div>
</div>
选择 Configure for compatible hardware。
在列表中选择 Camera IMX219 Dual。
<div style={{display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'nowrap'}}>
    <div style={{flex: 1, textAlign: 'center'}}>
        <img width="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-17-41.png"/>
    </div>
    <div style={{flex: 1, textAlign: 'center'}}>
        <img width="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-18-07.png"/>
    </div>
</div>
选择 Save pin changes。
选择 Save and reboot 以重新配置引脚并应用设备树更改。

***💡 提示：如果连接的是单摄像头，必须选择 "Camera IMX219 Dual" 模式才能正常工作。相反，如果连接的是双摄像头，则应选择 "Single" 模式。***

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-18-36.png"/></div>
设备节点验证
系统重启后，打开终端并运行以下命令，检查硬件是否被识别：

```bash
ls /dev/video*
```

如果输出中包含类似 `/dev/video0` 的设备节点，则说明硬件连接成功。然后你可以使用最简单的方法测试摄像头：
```bash
nvgstcapture
```
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-21-00.png"/></div>
你可能会注意到画面边缘有红色偏色。这是由于缺少 ISP（图像信号处理）配置文件导致的。

## ISP 文件配置
你可以通过下载并安装 NVIDIA 官方的 ISP 配置文件来修复颜色失真问题。

下载并解压文件：
```bash
wget https://files.seeedstudio.com//Driver/Camera_overrides.tar.gz
tar zxvf Camera_overrides.tar.gz
```

将文件移动到系统的 Nvidia 摄像头设置目录并修改权限：
```bash
sudo mv camera_overrides.isp /var/nvidia/nvcam/settings/
sudo chmod 664 /var/nvidia/nvcam/settings/camera_overrides.isp
sudo chown root:root /var/nvidia/nvcam/settings/camera_overrides.isp
```

替换 ISP 文件后，重新启动摄像头预览应用程序。画面边缘的红色偏色应已被修正。
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-32-48.png"/></div>

***⚠️ 注意：如果你切换回标准的 Raspberry Pi V2 摄像头，应用此 ISP 覆盖文件可能会导致图像周围出现蓝色偏色。建议在不同摄像头模组之间切换时，备份或恢复原始 ISP 设置。***


## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>