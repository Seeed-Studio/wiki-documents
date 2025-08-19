---
description: 配置 Wio Tracker 1110 的参数
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

Wio Tracker 1110 开发板利用 Arduino 提升您的编码体验。在开始开发之前，您需要先设置工具链。

### 设置您的工具链

#### 安装 Arduino IDE

Arduino IDE（集成开发环境）是一款开源软件，主要用于编写、编译和上传代码到几乎所有 Arduino 模块。它适用于所有操作系统（如 MAC、Windows、Linux），运行在 Java 平台上，内置的功能和命令在调试、编辑和编译代码中起着重要作用。

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

导航到 `Arduino IDE` -> `Preferences`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-add.png" alt="pir" width={800} height="auto" /></p>

将以下 URL 复制到 `Additional boards manager URLs`，然后点击 `OK`。

```cpp
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/copy-urls.png" alt="pir" width={800} height="auto" /></p>

点击 `Board Manager`。
搜索 `Seeed nRF52 Boards` 并安装它。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/install-boa.png" alt="pir" width={800} height="auto" /></p>

然后需要选择开发板和端口。<br/>
搜索 `Seeed Wio Tracker 1110` 并选择它，选择端口并点击 `OK`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/port.png" alt="pir" width={800} height="auto" /></p>

:::info
端口应类似于 'Serial Port(USB)'
:::

#### Wio Tracker 1110 示例

SenseCAP 提供了 `Wio Tracker 1110 示例`，方便用户快速入门。

导航到 `File` 标签，选择 `Example` -> `Wio Tracker 1110 Examples`，然后选择您需要的示例。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/example.png" alt="pir" width={800} height="auto" /></p>

### 添加库

在 Arduino IDE 中，您可以在 `Library Manager` 中搜索，例如 `Seeed_Arduino_AHT20`，然后安装它。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/install-lib.png" alt="pir" width={800} height="auto" /></p>
<details>
<summary>点击查看离线安装</summary>

要 *离线* 安装，您可以从 GitHub **下载库的 zip 文件**，然后导航到 **Sketch** -> **Include Library** -> **Add .ZIP Library**，选择您下载的库。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_32.png"/></div>

</details>

:::note 参考库
[Adafruit TinyUSB Arduino 库](https://github.com/adafruit/Adafruit_TinyUSB_Arduino)<br/>
[Adafruit SPI Flash](https://github.com/adafruit/Adafruit_SPIFlash)<br/>
[Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR)<br/>
[Sensirion I2C SGP41 Arduino 库](https://github.com/Sensirion/arduino-i2c-sgp41)<br/>
[Sensirion I2C SHT4X Arduino 库](https://github.com/Sensirion/arduino-i2c-sht4x)<br/>
[Sensirion 气体指数算法 Arduino 库](https://github.com/Sensirion/arduino-gas-index-algorithm)
:::