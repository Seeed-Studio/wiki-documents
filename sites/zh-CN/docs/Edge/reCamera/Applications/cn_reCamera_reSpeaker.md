---
description: 使用 reSpeaker XVF3800 控制 reCamera Gimbal 进行声源定位
title: reCamera Gimbal 的声源定位
keywords:
  - reCamera Gimbal
  - reSpeaker
  - 声源定位
image: https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker.gif
slug: /sound_source_localization_of_recamera_gimbal
sku: 108990119,114993700
sidebar_position: 11
last_update:
  date: 04/17/2026
  author: Xinrui Wu
createdAt: '2026-04-17'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/cn/sound_source_localization_of_recamera_gimbal/
---


# reCamera Gimbal 的声源定位

## 介绍

我们决定来点有趣的玩法，尝试把音频和视觉边缘 AI 结合在一起！🤖

在这个演示中，我们将 Seeed Studio reSpeaker USB Mic Array 连接到了基于 RISC-V 的 reCamera Gimbal 上。通过利用声源定位（DOA），系统可以驱动云台的无刷电机自动旋转，并实时朝向说话者的方向。这是一次非常有趣的探索，展示了我们的多模态边缘设备如何实现无缝交互！  

下面是完成本演示后的使用效果。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker.gif" /></div>

## 硬件准备

一台 reCamerab Gimbal  
一块 reSpeaker XVF3800  
一台电脑  

<table align="center">
  <tr>
    <th style={{textAlign:'center'}}>reCamera Gimbal</th>
    <th style={{textAlign:'center'}}>reSpeaker XVF3800</th>
  </tr>
  <tr>
    <td>
      <div style={{textAlign:'center'}}>
        <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
      </div>
    </td>
    <td>
      <div style={{textAlign:'center'}}>
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.jpg" style={{width:300, height:'auto'}}/>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div>
    </td>
    <td>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-With-Case-XIAO-ESP32S3-p-6628.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div>
    </td>
  </tr>
</table>

## 1. 打开 SenseCraft 部署应用

### 1.1 设置 reCamera Gimbal

首先，不要连接 reCamera Gimbal 的电源，直接用 Type-C 连接电脑，访问 192.168.42.1，进入后点击左下角的 "Login to SenseCraft"，登录后给它连接 WiFi，确保连接的 WiFi 与你的电脑相同，然后查看 reCamera Gimbal 的 IP 地址，复制该 IP 地址并访问，确认是否可以正常访问。接着拔掉 Type-C 线，插上 12V 电源，在 reCamera Gimbal 自动校准完成后，在浏览器中重新访问刚才的 IP 地址，进入 reCamera Gimbal 的界面，确保 Node-RED 已经正常启动运行。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker_1.png" /></div>

### 1.2 部署应用

进入 [SenseCraft](https://sensecraft.seeed.cc/ai/application)，点击 "Applications" 找到名为 "Sound source localization Camera" 的应用，进入后点击 "Deploy this Application"，然后选择 "Option 1: Deploy via USB"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker_2.png" /></div>

部署完成后，你看到的工作流应如下所示：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker_3.png" /></div>

## 2. 获取源码并配置 Python 工作环境

访问 [GitHub 项目](https://github.com/xr686/reCamera-Gimbal-reSpeaker-Tracker.git)，下载压缩包，然后解压。

为了通过 USB 与 reSpeaker 通信，在你的电脑上安装依赖：

\# Install the required Python package from the provided requirements file

```bash
pip install -r Sound-Tracking/requirements.txt
```

\# Install libusb via Conda (essential for back-end driver support)

```bash
conda install -c conda-forge libusb
```

请将 reSpeaker.py 代码中的 "192.168.31.198" 替换为你的 reCamera Gimbal 连接 WiFi 后的真实 IP 地址！

## 3. 测试

在你的电脑上运行 Python 脚本，执行以下操作：

```bash
python Sound-Tracking/reSpeaker.py
```

对着麦克风说话——你应该能看到 Python 终端持续打印 SPEECH_DETECTED:1，同时 reCamera 会快速转向你声音所在的角度。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_reSpeaker/reCamera_reSpeaker_4.png" /></div>

## 拓展更多玩法！

这个 Demo 只是一个开始。我们非常鼓励大家在此基础上进行二次开发，拓展更多硬核玩法！例如：

-** 触发联动 **：你可以修改 Node-RED 或 Python 脚本，让 reCamera Gimbal 在转到声源位置后立即开始录像 ** 或 *拍照* *。

-**智能安防**：结合 Home Assistant，当房间内出现异常噪音时，可自动跟踪并记录。

-**视听双重确认**：将 YOLO11n 目标检测与听觉跟踪结合（例如：听到声音 -> 转头查看 -> 视觉识别确认是否为“人”）。

期待看到你的创意！🎉

## 操作说明与注意事项

1. **确认部署**：在 Node-RED 导入前述节点后，点击右上角的 **Deploy** 使其生效。

2. **测试机制**：先启动 Node-RED，确保其在后台运行，然后在 PC 上执行以下命令运行 Python 脚本：

请将 reSpeaker.py 代码中的 "192.168.31.198" 替换为 reCamera Gimbal 连接 WiFi 后的实际 IP 地址！

   ```
   python Sound-Tracking/reSpeaker.py
   ```

对着麦克风说话，你应该能看到 Python 终端不断打印：

   ```
   SPEECH_DETECTED: 1
   ```

同时，reCamera 会快速转向声音所在的物理角度。

3. **物理朝向校准**：reSpeaker 麦克风阵列的“0 度”朝向可能与 reCamera 默认正前方的“0 度”并不完全一致。如果你发现云台每次转动后总是固定偏离一个角度（例如总是偏差 90 度），可以直接在 Node-RED 中双击新建的 `Calculate & Throttle` 函数节点，取消注释相关代码并修改偏移量计算：`targetYaw = (targetYaw +90)% 360;`。

4. - - 防抖设计 **：由于 Python 代码每 0.1 秒就会刷新并发送一次数据，如果将这些高频信号全部推送给电机控制器（CAN 总线），很容易导致设备总线过载卡顿。因此，我在 Node-RED 的函数节点中写入了防抖逻辑（只有当角度变化“>5 °”或时间间隔“>1 second”时才会触发下发）。

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
