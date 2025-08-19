---
description: 使用 ESP32C3 的 XIAO 棱镜显示器
title: XIAO ESP32C3 棱镜显示器
keywords:
- Xiao
- Prism
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao-esp32c3-prism-display
last_update:
  date: 02/01/2024
  author: timo614
---

# XIAO ESP32C3 棱镜显示器

<iframe class="youtube-video" src="https://www.youtube.com/embed/wSJa8HP0BkM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## 入门指南

如果您想完整地跟随本教程，您需要准备以下物品。

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3</th>
      <th>Grove Shield for XIAO <br />带电池管理芯片</th>
      <th>Grove 智能红外手势 <br />传感器 (PAJ7660)</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/main.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

<div align="center">
    <img width={400} src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/assembled.jpg" />
</div>

本项目使用 ESP32C3 创建一个使用分光棱镜的三维显示器。本指南解释了构建外壳、连接相关电子元件和安装固件所需的步骤。还提供了更新跟踪的加密货币列表以及缩小和处理动画图像以在图像浏览器中使用的任务的附加文档。

主要步骤

1. [下载并3D打印外壳](#download-and-3d-print-enclosure)
2. [连接相关电子元件](#attach-associated-electronics)
3. [设置环境](#setup-environment)
4. [配置 XIAO ESP32C3](#configure-the-xiao-esp32c3)

附加文档

1. [添加新的加密货币](#adding-new-cryptocurrencies)
2. [缩小和处理动画图像](#downsizing-and-processing-animated-images)

## 下载并3D打印外壳

<div align="center">
    <img width={400} src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/3d-render-bottom.png" />
</div>

3D外壳由两个半部分组成，设计为在内部零件组装后压配合在一起。打印零件时应使用支撑，以确保结构正确组装。

零件可以在github仓库中找到，并可通过其STL查看器进行预览：<br />
https://github.com/Timo614/xiao-prism-buddy/blob/main/docs/enclosure/xiao-prism-top.stl<br />
https://github.com/Timo614/xiao-prism-buddy/blob/main/docs/enclosure/xiao-prism-bottom.stl<br />

## 连接相关电子元件

<div align="center">
    <img width={400} src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/xiao_screwed_in.jpg" />
</div>

Grove扩展板简化了棱镜显示器的设置，因为它允许使用简单的面包板线完成组装，无需焊接。Grove扩展板应将第二组母头焊接到Xiao引脚旁边的开放引脚中。此扩展板应拧入外壳上可用的两个螺丝孔中。这可能有点棘手，因此可以先放入螺丝，然后将扩展板放下并拧紧每个螺丝。

从这里有两个主要连接：
- 到手势传感器的i2c连接
- 到显示器的spi连接

对于i2c连接，使用从扩展板到手势传感器的Grove 4针连接器。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/inward_bend_install.jpg" style={{width:400, height:'auto'}}/></div>

外壳设计允许手势传感器紧密就位，其螺丝将其牢固地固定在外壳外侧。要正确定位手势传感器，应首先定位USB侧，然后一旦主体齐平就应安装螺丝。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/sensor_screwed_in.jpg" style={{width:400, height:'auto'}}/></div>

spi连接更复杂一些，因为它需要更多引脚。

```
Xiao上的3V3连接到显示器的VCC引脚
Xiao上的GND连接到显示器的GND引脚
Xiao上的D0连接到显示器的CS引脚
Xiao上的D1连接到显示器的BL引脚
Xiao上的D2连接到显示器的DC引脚
Xiao上的D3连接到显示器的RST引脚
Xiao上的D8 (SCK)连接到显示器的SCL引脚
Xiao上的D10 (MOSI)连接到显示器的SDA引脚
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png" style={{width:700, height:'auto'}}/></div>

将线缆连接到所有组件后，设备可以完全组装。外壳设置为在以相似公差打印时允许压配合闭合。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/press_fit_close.jpg" style={{width:400, height:'auto'}}/></div>

组装完成后，将棱镜放在屏幕顶部。

## 设置环境

设置本地环境最简单的方法是使用 Visual Studio Code，因为它简化了机器配置。

- 从 GitHub 克隆仓库：https://github.com/Timo614/xiao-prism-buddy
- 在 Visual Studio Code 中打开仓库
- 安装 ESP-IDF 扩展
- 安装 ESP-IDF 5.0.4
- 将 ESP-IDF Espressif 设备目标设置为 esp32c3
- 为您的 wifi 网络配置环境变量（参见下面的步骤）
- 构建、烧录并监控您的设备

## 配置 XIAO ESP32C3

准备应用程序的下一步是为 wifi 网络配置您的凭据。

按 `Ctrl` + `Shift` + `P` 打开快速菜单并输入 `menuconfig`。这将过滤列表以包含 `ESP-IDF: SDK Configuration editor (Menuconfig)` 条目。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/menuconfig.png" style={{width:400, height:'auto'}}/></div>

在此菜单中，请设置 wifi 网络名称和访问密码。

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/config.png" style={{width:400, height:'auto'}}/></div>

## 添加新的加密货币

Xiao Prism Buddy 可以修改为显示不同的加密货币，因为它由 CoinGecko 提供支持。CoinGecko 为其 API 提供免费层级，允许用户在速率限制下访问。

应用程序每 15 分钟访问一次 `/simple/price` 端点，更新一组配置的加密货币。调用使用的货币可通过 [仓库中的 `config.h` 文件](https://github.com/Timo614/xiao-prism-buddy/blob/main/main/config.h#L26) 配置，以及应用中显示的货币符号。可以参考 [api 文档](https://www.coingecko.com/api/documentation) 获取有关调用本身的更多信息。

添加新加密货币的过程目前有点复杂，但可以通过以下步骤完成：

1. 更新加密货币总数以反映正确的计数（此硬编码值用于在页面本身上循环）
https://github.com/Timo614/xiao-prism-buddy/blob/main/main/controller/prism_controller.cpp#L29
2. 在加密货币模型文件中搜索现有加密货币之一（例如：bitcoin），并在代码的每个相关段中添加新条目（数据初始化、coingecko 响应解析、coingecko 获取请求字符串等）
https://github.com/Timo614/xiao-prism-buddy/blob/main/main/model/prism_cryptocurrency.c
3. 更新加密货币视图数据结构以反映新的加密货币 https://github.com/Timo614/xiao-prism-buddy/blob/main/main/view_data.h#L54
4. 在控制器逻辑中搜索现有加密货币（例如：bitcoin）并复制相关逻辑以处理事件数据和渲染 https://github.com/Timo614/xiao-prism-buddy/blob/main/main/controller/prism_controller.cpp
5. 为新加密货币提供适当大小的 png 文件，使用 LVGL 在线图像转换器将 PNG 转换为 C 文件，并根据上述需要在控制器中引用 https://lvgl.io/tools/imageconverter

## 缩小和处理动画图像

使用微控制器的一个限制是可用闪存的不足。GIF 文件占用相当大的闪存空间，这使得它们的包含变得更加困难。这里记录了一套用于转换应用程序中使用的图像的流程，以便其他人希望执行相同的步骤来将图像浏览器使用的图像更改为他们自己选择的图像时参考。

1. 选择一个合适的动画图像。理想情况下是透明的、设置为循环的、并且具有合适尺寸的图像。为了使过程更容易，我发现寻找 Lottie 文件特别有帮助。对于这个应用程序，我能够通过 https://lottiefiles.com/ 找到几个有用的图像
2. 使用 Lottie 到 gif 转换器将 Lottie 文件转换为透明的 GIF 文件（例如 https://lottiefiles.com/lottie-to-gif）

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/convert-lottie.png" style={{width:400, height:'auto'}}/></div>

3. 使用您选择的 GIF 编辑器进行以下修改（我发现在线工具 https://ezgif.com 在其 GIF 优化套件中提供了这些功能，我将其用于此应用程序的目的）：

3.1. 减少帧之间的帧数，直到只剩下大约 20 帧

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/remove-frames.png" style={{width:400, height:'auto'}}/></div>

3.2. 将图像大小调整为大约 100x100 或更小

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/resize.png" style={{width:400, height:'auto'}}/></div>

3.3. 减慢图像速度，因为没有额外的帧，它会非常快

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/slow-speed.png" style={{width:400, height:'auto'}}/></div>

3.4. 减少 GIF 的颜色组成以减小其大小

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/reduce-colors.png" style={{width:400, height:'auto'}}/></div>

3.5. 根据需要进一步压缩 GIF

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/compress.png" style={{width:400, height:'auto'}}/></div>

4. 使用 [LVGL 在线图像转换器](https://lvgl.io/tools/imageconverter) 将 GIF 文件转换为 C 数组，按照 [LVGL 文档](https://docs.lvgl.io/8.3/libs/gif.html#convert-gif-files-to-c-array) 的说明。注意：`选择"Raw"颜色格式和"C array"输出格式。`

按照这些步骤，您就有了一个文件大小减小但仍然有效的 GIF 图像，已处理用于在 Prism 设备上显示。最简单的方法是替换现有的火焰或西瓜图像进行测试。

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