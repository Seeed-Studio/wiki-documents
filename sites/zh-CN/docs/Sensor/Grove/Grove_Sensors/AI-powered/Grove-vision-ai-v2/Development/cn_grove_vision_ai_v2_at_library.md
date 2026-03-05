---
title: 使用 Grove Vision AI V2 和 AT 指令
hide_title: false
description: 本指南展示如何使用 Grove Vision AI V2 和 AT 指令。
keywords:
  - Vision
  - Grove
  - AT
  - SSCMA
image: https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg
slug: /grove_vision_ai_v2_at
last_update:
  date: 04/22/2024
  author: Spencer
toc_max_heading_level: 3
createdAt: '2025-08-07'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/grove_vision_ai_v2_at/
---

## 简介

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Grove Vision AI V2 是一个强大的 AI 摄像头模块，允许用户部署现成的模型用于视觉应用。除了其 AI 功能外，Grove Vision AI V2 还提供了多种硬件功能和使用选项，以增强其功能性和易用性。

![](https://mermaid.ink/svg/pako:eNp1kk9vozAQxb_KyCciRSi4aRe4RemfXWmrVpuqh4qL155St-CJjMk2G-W7r02AZKXmNr_3xuN5mB2TpJDlrNZG1WJdGABL5KLoztIG4Vk3mgw888kkWABLqsheo0PpvBF1CCP3TQA_tcFbqir6o00ZBYIRxyZFroniOO6Fh9_vfsovlFQa3U0_KHAijWe_U42L1lEtus6AcOSxbVUL6xZSYtMsyThLVdRJcNCgF8-tBHCzQeOerC5LtKjCJlaFSJ0OowGj05-8FRJPowT-Msgj2oaMqH4oP1C_atkFWKFsrXbbaLDhfx-GhgkMg_r0qJZt4yu0K7QbLTEaDRgc6K1zse8p3HF85QN_8cxPb_jqFpWwddSV0NXHnR7R3ZMPTDZ8M09wxHOXnyCbMr9tLbTyf-gu2AVzb1hjwXJfKmE_ClaYve8TPuRqayTLnW1xytq18pGvtSitqAdxLcwL0SmyfMc-Wc7jS55m6cXFFU-yNJ0lU7ZlecKTePYtm3vmPMtmfD9lf7vzszg0Z_wyu-LzeZrw_T852RLp)

在本页面中，我们将重点指导用户**如何有效利用专为 Grove Vision AI V2 设计的 Arduino 库**。我们将涵盖安装过程、主要功能，并提供实际示例，展示如何使用库函数来控制和配置模块，从而使用户能够轻松创建创新的基于视觉的应用。

## 固件和 AT 指令集

Grove Vision AI V2 附带预装的固件，支持 AT 指令集。该指令集允许用户在无需复杂编程环境的情况下控制和配置模块的功能。

AT 指令集规范可以在 [SSCMA-Micro](https://github.com/Seeed-Studio/SSCMA-Micro) 中找到。需要注意的是，AT 指令集可能会随着时间的推移而更新，较新的固件版本可能包含额外的指令。建议保持固件更新以访问最新功能。

:::note
如果需要刷新新固件或更新固件，可以访问 [SenseCraft AI](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process) 网站。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/at-diagram.png" alt="at diagram" width={320} height="auto" /></p>

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>查看 AT 协议</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Arduino 库

为了简化 AT 指令集的使用并提供用户友好的界面，一个名为 [Seeed_Arduino_SSCMA](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA) 的 Arduino 库可供使用。该库将 AT 指令封装成易于使用的函数，使用户能够快速将 Grove Vision AI V2 集成到 Arduino 项目中。

Arduino 库与最新的 AT 指令集保持兼容，确保与模块交互的一致性和统一性。通过使用该库，用户可以专注于开发应用，而无需担心 AT 指令的底层细节。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

:::info

<div class="table-center">
<table align="center">
    <tr>
        <td>MCU</td>
        <td>板版本</td>
        <td>Grove(I2C)</td>
        <td>引脚(Uart)</td>
    </tr>
    <tr>
        <td>SAMD21</td>
        <td>1.8.5</td>
        <td>✅</td>
        <td>⚠️</td>
    </tr>
    <tr>
        <td>RP2040</td>
        <td>3.9.1</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>nRF52840 - nRF52 Boards</td>
        <td>1.1.8</td>
        <td>✅</td>
        <td>⚠️</td>
    </tr>
    <tr>
        <td>nRF52840 - mbed-enabled</td>
        <td>2.9.2</td>
        <td>✅</td>
        <td>⚠️</td>
    </tr>
    <tr>
        <td>ESP32C3</td>
        <td>2.0.17</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>ESP32S3</td>
        <td>2.0.17</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
</table>
</div>

\*⚠️: 可能无法正常工作
:::

## 连接 Grove Vision AI V2

<Tabs groupId="grove_connect">
<TabItem value="i2c" label="Grove(I2C)" >

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/i2c-connect.jpg" width={420} height="auto" /></p>

使用 Grove 线缆将 Grove Vision AI V2 连接到任意 MCU 板。

</TabItem>
<TabItem value="uart" label="XIAO-Compatible" default>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" width={420} height="auto" /></p>

这种方式不仅可以使用 **UART**，还可以使用 **I2C** 建立连接。

:::tip 串口波特率
为了实现高响应速度，Grove Vision V2 的默认串口波特率为 `921600`。
因此需要使用硬件串口而不是软件串口进行连接。
:::
</TabItem>
</Tabs>

## *示例 1:* 捕获图像

:::tip invoke 的功能是什么？
查看 [invoke - FAQ](#faq_invoke)
:::

```cpp
// 调用一次，无过滤器，包含图像
if (!AI.invoke(1, false, true)){
   if (AI.last_image().length() > 0){
      Serial.print("最后的图像:");
      Serial.println(AI.last_image());
   }
}
```

`AI.last_image()` 是一个字符串，包含通过 base64 编码的图像数据（JPEG）。[🖱️了解如何解析它？](#base64tojpeg)

### 完整代码

<Tabs groupId="grove_connect">
<TabItem value="i2c" label="Grove(I2C)" >

<!-- I2C -->

```cpp
#include <Seeed_Arduino_SSCMA.h>
SSCMA AI;

void setup()
{
    AI.begin();
    Serial.begin(9600);
}

void loop()
{
    // 调用一次，无过滤器，获取图像
    if (!AI.invoke(1, false, true)){
        if (AI.last_image().length() > 0){
            Serial.print("最后的图像:");
            Serial.println(AI.last_image());
        }
    }
}
```

</TabItem>
<TabItem value="xiao" label="XIAO-Compatible (UART)" default>

<!-- UART 图像-->
```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

// 定义两个串口设备映射到两个内部 UART
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

SSCMA AI;

void setup()
{
   AI.begin(&atSerial);
   Serial.begin(9600);
}

void loop()
{
    // 调用一次，无过滤器，获取图像
    if (!AI.invoke(1, false, true)){
        if (AI.last_image().length() > 0){
            Serial.print("最后的图像:");
            Serial.println(AI.last_image());
        }
    }
}
```

</TabItem>
</Tabs>

<table align="center">
 <tr>
     <th>连接设备</th>
     <th>上传固件</th>
        <th>监控</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/capture_image_connect.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/capture_image_code.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/capture_image_monitor.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

## *示例 2:* 获取推理结果

### 完整代码

<Tabs groupId="grove_connect">
<TabItem value="i2c" label="Grove(I2C)" >

```cpp
#include <Seeed_Arduino_SSCMA.h>

SSCMA AI;

void setup() {
  AI.begin();
  Serial.begin(9600);
}

void loop() {
  if (!AI.invoke(1, false, false)) { // 调用一次，无滤波，不包含图像
    Serial.println("调用成功");
    Serial.print("性能: 预处理=");
    Serial.print(AI.perf().prepocess);
    Serial.print(", 推理=");
    Serial.print(AI.perf().inference);
    Serial.print(", 后处理=");
    Serial.println(AI.perf().postprocess);

    for (int i = 0; i < AI.boxes().size(); i++) {
      Serial.print("框[");
      Serial.print(i);
      Serial.print("] 目标=");
      Serial.print(AI.boxes()[i].target);
      Serial.print(", 分数=");
      Serial.print(AI.boxes()[i].score);
      Serial.print(", x=");
      Serial.print(AI.boxes()[i].x);
      Serial.print(", y=");
      Serial.print(AI.boxes()[i].y);
      Serial.print(", 宽度=");
      Serial.print(AI.boxes()[i].w);
      Serial.print(", 高度=");
      Serial.println(AI.boxes()[i].h);
    }
    for (int i = 0; i < AI.classes().size(); i++) {
      Serial.print("类别[");
      Serial.print(i);
      Serial.print("] 目标=");
      Serial.print(AI.classes()[i].target);
      Serial.print(", 分数=");
      Serial.println(AI.classes()[i].score);
    }
    for (int i = 0; i < AI.points().size(); i++) {
      Serial.print("点[");
      Serial.print(i);
      Serial.print("]: 目标=");
      Serial.print(AI.points()[i].target);
      Serial.print(", 分数=");
      Serial.print(AI.points()[i].score);
      Serial.print(", x=");
      Serial.print(AI.points()[i].x);
      Serial.print(", y=");
      Serial.println(AI.points()[i].y);
    }
    for (int i = 0; i < AI.keypoints().size(); i++) {
      Serial.print("关键点[");
      Serial.print(i);
      Serial.print("] 目标=");
      Serial.print(AI.keypoints()[i].box.target);
      Serial.print(", 分数=");
      Serial.print(AI.keypoints()[i].box.score);
      Serial.print(", 框:[x=");
      Serial.print(AI.keypoints()[i].box.x);
      Serial.print(", y=");
      Serial.print(AI.keypoints()[i].box.y);
      Serial.print(", 宽度=");
      Serial.print(AI.keypoints()[i].box.w);
      Serial.print(", 高度=");
      Serial.print(AI.keypoints()[i].box.h);
      Serial.print("], 点:[");
      for (int j = 0; j < AI.keypoints()[i].points.size(); j++) {
        Serial.print("[");
        Serial.print(AI.keypoints()[i].points[j].x);
        Serial.print(",");
        Serial.print(AI.keypoints()[i].points[j].y);
        Serial.print("],");
      }
      Serial.println("]");
    }
  }
}
```

</TabItem>
<TabItem value="uart" label="XIAO-Compatible (UART)" default>

```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

// 定义两个映射到内部UART的Serial设备
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

SSCMA AI;

void setup() {
  AI.begin( & atSerial);
  Serial.begin(9600);
}

void loop() {
  if (!AI.invoke(1, false, false)) { // 调用一次，无滤波，不包含图像
    Serial.println("调用成功");
    Serial.print("性能: 预处理=");
    Serial.print(AI.perf().prepocess);
    Serial.print(", 推理=");
    Serial.print(AI.perf().inference);
    Serial.print(", 后处理=");
    Serial.println(AI.perf().postprocess);

    for (int i = 0; i < AI.boxes().size(); i++) {
      Serial.print("框[");
      Serial.print(i);
      Serial.print("] 目标=");
      Serial.print(AI.boxes()[i].target);
      Serial.print(", 分数=");
      Serial.print(AI.boxes()[i].score);
      Serial.print(", x=");
      Serial.print(AI.boxes()[i].x);
      Serial.print(", y=");
      Serial.print(AI.boxes()[i].y);
      Serial.print(", 宽度=");
      Serial.print(AI.boxes()[i].w);
      Serial.print(", 高度=");
      Serial.println(AI.boxes()[i].h);
    }
    for (int i = 0; i < AI.classes().size(); i++) {
      Serial.print("类别[");
      Serial.print(i);
      Serial.print("] 目标=");
      Serial.print(AI.classes()[i].target);
      Serial.print(", 分数=");
      Serial.println(AI.classes()[i].score);
    }
    for (int i = 0; i < AI.points().size(); i++) {
      Serial.print("点[");
      Serial.print(i);
      Serial.print("]: 目标=");
      Serial.print(AI.points()[i].target);
      Serial.print(", 分数=");
      Serial.print(AI.points()[i].score);
      Serial.print(", x=");
      Serial.print(AI.points()[i].x);
      Serial.print(", y=");
      Serial.println(AI.points()[i].y);
    }
    for (int i = 0; i < AI.keypoints().size(); i++) {
      Serial.print("关键点[");
      Serial.print(i);
      Serial.print("] 目标=");
      Serial.print(AI.keypoints()[i].box.target);
      Serial.print(", 分数=");
      Serial.print(AI.keypoints()[i].box.score);
      Serial.print(", 框:[x=");
      Serial.print(AI.keypoints()[i].box.x);
      Serial.print(", y=");
      Serial.print(AI.keypoints()[i].box.y);
      Serial.print(", 宽度=");
      Serial.print(AI.keypoints()[i].box.w);
      Serial.print(", 高度=");
      Serial.print(AI.keypoints()[i].box.h);
      Serial.print("], 点:[");
      for (int j = 0; j < AI.keypoints()[i].points.size(); j++) {
        Serial.print("[");
        Serial.print(AI.keypoints()[i].points[j].x);
        Serial.print(",");
        Serial.print(AI.keypoints()[i].points[j].y);
        Serial.print("],");
      }
      Serial.println("]");
    }
  }
}
```

</TabItem>
</Tabs>

<table align="center">
 <tr>
     <th>连接设备</th>
     <th>上传固件</th>
      <th>监控</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/capture_image_connect.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/reference_code.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/reference_monitor.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

## *示例 3:* 将 JPEG 图像保存到 SD 卡

> 更多详情请参阅 [设置动作触发器 - AT 协议](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md#set-action-trigger-experimental) 部分。

Grove Vision AI V2 模块允许将 JPEG 图像直接保存到外部 SD 卡。为了确保兼容性，建议将 SD 卡格式化为 ***FAT32***，并设置簇大小为 `8192`，或者使用 **exFAT** 文件系统。当保存图像时，如果默认保存路径 `Grove Vision AI (V2) Export` 不存在，模块会自动创建该路径。

:::info 注意

- 请确保固件版本高于 2024 年 4 月 18 日。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/jpeg_format_sd.png" alt="文件系统" width={220} height="auto" /></p>

在此保存路径中，每次启动会话触发保存动作时，都会创建一个新文件夹，文件夹名称为递增的数字。最新的文件夹名称存储在保存路径中的一个名为 `.sscma` 的隐藏文件中，*用户不应修改该文件*，以避免潜在错误。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/export_files.png" alt="导出文件" width={480} height="auto" /></p>

<details>
<summary>使用 Python 预览图像流</summary>

```python
import os
import platform
import tkinter as tk
from PIL import Image, ImageTk
import time

class ImagePlayer:
    def __init__(self, parent_directory, switch_time=1):
        self.parent_directory = parent_directory
        self.image_files = []
        self.current_index = 0
        self.switch_time = switch_time
        self.root = tk.Tk()
        self.label = tk.Label(self.root)
        self.label.pack()
        self.load_image_files()
    
    def load_image_files(self):
        # 获取父目录中的所有子目录
        directories = [os.path.join(self.parent_directory, folder) for folder in os.listdir(self.parent_directory) if os.path.isdir(os.path.join(self.parent_directory, folder))]

        # 遍历子目录并获取图像文件路径
        for directory in directories:
            image_files = [os.path.join(directory, file) for file in sorted(os.listdir(directory)) if file.endswith(('.jpg', '.jpeg', '.png'))]
            self.image_files.extend(image_files)

    def play_images(self):
        if self.current_index < len(self.image_files):
            image_file = self.image_files[self.current_index]
            image = Image.open(image_file)
            self.display_image(image)
            self.current_index += 1
            self.root.after(int(self.switch_time * 1000), self.play_images)
        else:
            self.root.destroy()

    def display_image(self, image):
        # 调整图像大小以适应窗口
        width, height = self.root.winfo_screenwidth(), self.root.winfo_screenheight()
        image.thumbnail((width, height))

        # 将图像转换为 Tkinter 可用的格式
        photo = ImageTk.PhotoImage(image)

        # 在标签中显示图像
        self.label.config(image=photo)
        self.label.image = photo

    def start(self):
        self.root.geometry("240x240")  # 设置窗口大小
        self.root.title("Image Player")  # 设置窗口标题

        self.root.after(0, self.play_images)  # 开始播放图像
        self.root.mainloop()

# 创建 ImagePlayer 对象并提供父目录路径
parent_directory = r"E:\Grove Vision AI (V2) Export"
player = ImagePlayer(parent_directory, switch_time=0.3)  # 在此自定义图像切换时间（以秒为单位）

# 启动图像播放器
player.start()
```

</details>

调用 `save_jpeg()` 时，意味着您向 Grove Vision AI V2 模块发送了 AT 命令 `AT+ACTION="save_jpeg()"`。
此命令应仅调用一次。

如果您不再需要存储 JPEG 图像，则必须清除动作集，即使您重新启动 Grove Vision AI V2 模块也是如此。

<div class="table-center">
<iframe width="380" height="300" src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/insert_sd_visionv2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

```cpp
void setup()
{
   atSerial.println("AT+ACTION=\"\""); // 等同于 `AI.clean_actions()`
   AI.clean_actions(); 
}
```

### 完整代码

<Tabs groupId="grove_connect">
<TabItem value="i2c" label="Grove(I2C)" >

<!-- 将 JPEG 图像保存到 SD 卡 -->

```cpp
#include <Seeed_Arduino_SSCMA.h>

SSCMA AI;

void setup()
{
  Serial.begin(9600); // 初始化串口
  AI.begin(); 
  AI.save_jpeg();
}

void loop()
{
  static int cnt = 0;
  // 每次调用都会保存 JPEG
  if (!AI.invoke(1, false, false)){
    Serial.printf("记录图像 %d\n", ++cnt);
  } 
}

```

</TabItem>
<TabItem value="uart" label="XIAO-Compatible (UART)" default>

<!-- 将 JPEG 图像保存到 SD 卡 -->

```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

// 定义两个串口设备映射到两个内部 UART
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

SSCMA AI;

void setup()
{
  Serial.begin(9600); // 初始化串口
  AI.begin(&atSerial);
  AI.save_jpeg();
}

void loop()
{
  static int cnt = 0;
  // 每次调用都会保存 JPEG
  if (!AI.invoke(1, false, true)){
    Serial.printf("记录图像 %d\n", ++cnt);
  } 
}
```

</TabItem>
<TabItem value="at_actions" label="检查 AT 动作">

<!-- AT 动作 -->

```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

// 定义两个串口设备映射到两个内部 UART
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

SSCMA AI;

void setup()
{
   Serial.begin(9600); // 初始化串口
   AI.begin(&atSerial);
   AI.save_jpeg();
}

void loop()
{
  atSerial.println("AT+ACTION?"); // 请求获取动作信息

  String str_action = atSerial.readString(); // 读取响应
  if(str_action.indexOf("save_jpeg") > 0){ // 检查动作是否存在
      Serial.println("save_jpeg 存在");
      Serial.println("触发动作: clean_actions");
      AI.clean_actions(); // 清除动作
  }else{ // 如果为空，再次触发 save_jpeg 动作
      Serial.println("save_jpeg 不存在");
      Serial.println("触发动作: save_jpeg");
      AI.save_jpeg();
  }
  delay(5000);
}
```

:::提示
如果无法正常工作，请检查 SD 卡是否已正确格式化并插入。
:::

</TabItem>
</Tabs>

<table align="center">
 <tr>
     <th>连接设备</th>
     <th>上传固件</th>
      <th>监控</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/capture_image_connect.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/save_image_code.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/save_image_monitor.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

## Base64 转换为 JPEG 图像 {#base64tojpeg}

当您尝试在编程中获取 JPEG 图像时，有两种方法可以解码图像：

<Tabs>
<TabItem value="esp32" label="ESP32">

如果您的 MCU 是 ESP32，可以使用以下代码获取图像：

```cpp
#include <string.h>

#include "mbedtls/base64.h"

#include <Seeed_Arduino_SSCMA.h>

#define DECODED_IMAGE_MAX_SIZE(15 * 1024) // 选择您自己的最大 size_t

static unsigned char jpegImage[DECODED_IMAGE_MAX_SIZE + 1];

size_t decode_base64_image(const unsigned char * p_data, unsigned char * decoded_str) {
  if (!p_data || !decoded_str)
    return 0;

  size_t str_len = strlen((const char * ) p_data);
  size_t output_len = 0;
  // 获取解码后的长度
  int decode_ret = mbedtls_base64_decode(NULL, 0, & output_len, p_data, str_len);
  if (decode_ret == MBEDTLS_ERR_BASE64_INVALID_CHARACTER) {
    Serial.println(TAG, "Base64 字符串中存在无效字符");
    return 0;
  }

  // 检查解码后的长度是否合理
  if (output_len == 0 || output_len > DECODED_IMAGE_MAX_SIZE) {
    Serial.println("Base64 解码输出大小过大或为零。");
    return 0;
  }

  // 实际解码操作
  decode_ret = mbedtls_base64_decode(decoded_str, DECODED_IMAGE_MAX_SIZE, & output_len, p_data, str_len);
  if (decode_ret != 0) {
    Serial.println(TAG, "解码 Base64 字符串失败，错误: %d", decode_ret);
    return 0;
  }

  Serial.println("str_len: %d, output_len: %d", str_len, output_len);

  return output_len;
}

SSCMA AI;

void setup() {
  AI.begin();
  Serial.begin(115200);
}

void loop() {
  if (!AI.invoke(1, false, true)) {
    if (AI.last_image().length() > 0) {
      Serial.print("最后的图像:");
      Serial.println(AI.last_image());
      size_t jpegImageSize = decode_base64_image(AI.last_image().c_str(), jpegImage);
      if (jpegImageSize > 0) {
        // 您的函数，用于显示 JPEG 图像
        display_jpeg_image(jpegImage, jpegImageSize);
      }
    }
  }
}
```

</TabItem>
<TabItem value="arduino" label="Arduino" default>

```cpp
#include <base64.h>

#include <Seeed_Arduino_SSCMA.h>

#define atSerial Serial1 /* 定义您的串口接口 */

SSCMA AI;

void setup() {
  AI.begin( & atSerial);
  Serial.begin(115200);
}

void loop() {
  // 调用一次，无过滤器，获取图像
  if (!AI.invoke(1, false, true)) {
    if (AI.last_image().length() > 0) {
      String toEncode = AI.last_image();
      Serial.print("图像代码:");
      Serial.println(toEncode);
      String encoded_jpeg = base64::encode(toEncode);
      // 您的函数，用于显示 JPEG 图像
      func_display_jpeg(encoded_jpeg);
    }
  }
}
```

</TabItem>
</Tabs>

:::提示 为什么使用 Base64 编码？
Base64 是一种将二进制数据（如图像）编码为 ASCII 字符串的方法。这使得二进制数据可以包含在不原生支持二进制的格式中，例如 JSON。

Base64 编码用于避免通过文本协议（如 HTTP、JSON、XML）直接传输二进制数据。它还避免了对额外解析库的需求，因为大多数编程语言都内置了 Base64 编码/解码功能。Base64 允许二进制数据以标准 ASCII 文本安全传输，并轻松解码回原始二进制形式。

有许多在线工具可以轻松将 Base64 解码为图像，例如：
[Base64 在线解码器](https://base64.guru/converter/decode/image)
只需将 Base64 字符串粘贴到工具中，它就会显示解码后的图像。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/e.g.base64.png" width={420} height="auto" /></p>

## 定制化与SDK开发

对于需要更多定制化和高级功能的用户，Grove Vision AI V2 还支持 SDK 开发。该模块的 Himax 主控制芯片可以通过提供的 SDK 直接编程，从而实现具有高度个性化功能的工业级项目。

对 SDK 开发感兴趣的用户可以参考现有示例，例如 [sdio_app](https://github.com/Seeed-Studio/sscma-example-we2/tree/main/EPII_CM55M_APP_S/app/scenario_app/sdio_app)，该示例展示了直接进行 SDIO 操作。这些示例可以作为修改和实现自定义项目的起点。

通过利用 SDK 的强大功能，用户可以充分发挥 Grove Vision AI V2 的潜力，为其特定需求创建量身定制的解决方案。请参考[之前的 Wiki 页面](/cn/grove_vision_ai_v2_himax_sdk)以获取更多指导。

## 常见问题与故障排除

### invoke 的功能是什么？ {#faq_invoke}

每次从 Grove Vision V2 获取数据值时，都需要调用 `invoke` 函数：

```cpp
/**
 * @brief 调用算法指定次数
 * 
 * 此函数调用算法指定次数，并等待响应和事件。结果可以根据与之前结果的差异进行过滤，
 * 事件回复可以配置为仅包含结果数据或同时包含图像数据。
 *
 * @param times 调用算法的次数
 * @param filter 如果为 true，则事件回复仅在最后结果与之前结果不同（通过几何和分数比较）时发送
 * @param show 如果为 true，则事件回复还将包含图像数据；如果为 false，则事件回复*仅包含*结果数据
 * @return int 如果调用成功并在超时时间内收到响应和事件，则返回 CMD_OK；
 *             否则返回 CMD_ETIMEDOUT
 *
 * 格式：AT+INVOKE=<N_TIMES,DIFFERED,RESULT_ONLY>\r
 * 请求：AT+INVOKE=1,0,1\r
 */
int SSCMA::invoke(int times, bool filter, bool show);
```

### `AI.begin()` 的作用是什么？ {#faq_begin}

:::info
如果使用 `SSCMA.begin()`，它默认使用 I2C（Wire）进行通信，如函数头中定义：

```cpp
bool begin(TwoWire *wire = &Wire, int32_t rst = -1, uint16_t address = I2C_ADDRESS,
      uint32_t wait_delay = 2, uint32_t clock = SSCMA_IIC_CLOCK);
```

:::

## 资源

- [AT 命令参考手册](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)
- [Seeed Arduino SSCMA - Arduino 库](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA)

## 参考资料

- [WiseEye2 AI 处理器 - Himax](https://www.himax.com.tw/products/wiseeye-ai-sensing/wiseeye2-ai-processor/)
- [WiseEye2 技术亮点](https://himaxwiseeyeplus.github.io/)

## 贡献

我们欢迎任何形式的贡献！如果您希望为此页面做出贡献，可以：

- 通过打开一个 [issue](https://github.com/Seeed-Studio/wiki-documents/issues) 报告错误或建议新功能
- 通过创建一个 [pull request](https://github.com/Seeed-Studio/wiki-documents/pulls) 提交页面改进或修复
- 通过建议编辑或添加内容来改进文档
- 帮助回答问题或为其他用户提供支持
- 与可能感兴趣的人分享该产品

要开始，请阅读我们的[贡献指南](https://raw.githubusercontent.com/Seeed-Studio/wiki-documents/docusaurus-version/CONTRIBUTING.md)，了解如何贡献以及提交 pull request 的流程。

我们感谢所有的贡献，并感谢您帮助我们使其变得更好！

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
