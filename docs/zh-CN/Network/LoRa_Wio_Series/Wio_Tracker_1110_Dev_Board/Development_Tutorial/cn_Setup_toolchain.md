---
description: Configure_the_Parameters_of_Wio_Tracker_1110 
title: 设置您的工具链
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/setup_toolchain_for_wio_tracker
last_update:
  date: 9/19/2023
  author: Jessie
---


Wio Tracker 1110 开发板利用 Arduino 来增强您的编程体验，在开始开发之前，需要先设置您的工具链。

### 设置您的工具链

#### 安装 Arduino IDE

Arduino IDE（集成开发环境）是一个开源软件，主要用于编写、编译和上传代码到几乎所有的 Arduino 模块。
它适用于所有操作系统，即 MAC、Windows、Linux，并运行在 Java 平台上，该平台带有内置函数和命令，在调试、编辑和编译代码方面发挥着重要作用。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-wio.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.arduino.cc/en/software" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Arduino IDE 下载 </font></span></strong>
    </a>
</div>

:::tip
如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

#### 添加 Seeed 开发板

导航到 `Arduino IDE` -> `首选项`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-add.png" alt="pir" width={800} height="auto" /></p>

将此 URL 复制到 `附加开发板管理器网址`，然后点击 `确定`。

```cpp
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/copy-urls.png" alt="pir" width={800} height="auto" /></p>

点击 `开发板管理器`。
搜索 `Seeed nRF52 Boards` 并安装它。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/install-boa.png" alt="pir" width={800} height="auto" /></p>

然后需要选择开发板和端口。<br/>
搜索 `Seeed Wio Tracker 1110` 并选择它，选择端口并点击 `确定`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/port.png" alt="pir" width={800} height="auto" /></p>

:::info
端口应该类似于 'Serial Port(USB)'
:::

#### Wio Tracker 1110 示例

SenseCAP 为用户提供了 `Wio Tracker 1110 Examples` 以便快速入门。

导航到 `文件` 选项卡，选择 `示例`-> `Wio Tracker 1110 Examples`，然后选择您需要的示例。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/example.png" alt="pir" width={800} height="auto" /></p>

### 添加库文件

在 Arduino IDE 中，您可以在 `库管理器` 中搜索它，例如 `Seeed_Arduino_AHT20`，然后安装它。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/install-lib.png" alt="pir" width={800} height="auto" /></p>
<details>
<summary>点击预览离线安装</summary>

要 *离线* 安装，您可以从 GitHub **下载仓库 zip 文件**，导航到 **项目** -> **加载库** -> **添加 .ZIP 库**，然后选择您下载的库文件。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_32.png"/></div>

</details>

:::note 参考库文件
[Adafruit TinyUSB Arduino 库](https://github.com/adafruit/Adafruit_TinyUSB_Arduino)<br/>
[Adafruit SPI Flash](https://github.com/adafruit/Adafruit_SPIFlash)<br/>
[Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR)<br/>
[Sensirion I2C SGP41 Arduino 库](https://github.com/Sensirion/arduino-i2c-sgp41)<br/>
[Sensirion I2C SHT4X Arduino 库](https://github.com/Sensirion/arduino-i2c-sht4x)<br/>
[Sensirion Gas Index Algorithm Arduino Library](https://github.com/Sensirion/arduino-gas-index-algorithm)
:::
