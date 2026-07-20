---
title: 使用 Arduino 开发 XIAO nRF54LM20A Sense
description: 本文介绍如何使用 Arduino IDE 开发 Seeed Studio XIAO nRF54LM20A Sense。
keywords:
  - xiao
  - nrf54lm20a
  - Arduino
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_with_arduino
sku: 100018440
last_update:
  date: 06/22/2026
  author: Brandy
createdAt: '2025-07-15'
updatedAt: '2026-07-16'
url: https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_with_arduino/
---

# 使用 Arduino 开发 Seeed Studio XIAO nRF54LM20A Sense

本节将引导你完成 Arduino 开发所需的硬件和软件准备。按照以下步骤操作，你将完成开发环境的搭建、Arduino IDE 的配置，并让你的 XIAO 开发板做好编程准备。完成这些设置后，你就可以快速构建、上传并测试提供的示例草图。

## 入门指南

### 硬件准备

你需要准备以下物品：

- 1 x [Seeed Studio XIAO nRF54LM20A Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html)
- 1 x 电脑
- 1 x USB Type-C 线缆

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54LM20A Sense</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  立即获取 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>


### 软件

XIAO nRF54LM20A 支持使用 Arduino IDE 进行开发。开始之前，请先安装并配置 Arduino IDE。

:::tip
如果你是第一次使用 Arduino，我们强烈建议你参考文档 [Getting Started with Arduino](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 根据你的操作系统下载并安装稳定版本的 Arduino IDE。

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

- **步骤 2.** 启动 Arduino 应用程序。

- **步骤 3.** 打开 **Arduino IDE** > **Settings**，找到 **Additional Boards Manager URLs**，并添加以下 URL：

```shell
https://raw.githubusercontent.com/lolren/nrf54-arduino-core/main/package_nrf54l15clean_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/1.png" style={{width:800, height:'auto'}}/></div>

- **步骤 4.** 进入 **Tools** > **Board** > **Boards Manager**，搜索 **nRF54L15 Boards** 并安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/2.png" style={{width:800, height:'auto'}}/></div>

- **步骤 5.** 连接开发板后，在 Arduino IDE 中选择以下开发板：

**Tools** > **Board** > **nRF54L15 Boards** > **XIAO nRF54LM20A**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/3.png" style={{width:800, height:'auto'}}/></div>

### 上传程序

下面的示例使用一个简单的闪烁程序。

**步骤 1.** 选择 **Blink** 示例代码进行测试。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/4.png" style={{width:800, height:'auto'}}/></div>

**步骤 2.** 点击 **Upload** 以编译并上传草图。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/6.png" style={{width:800, height:'auto'}}/></div><br/>

效果演示：

上传程序并按下复位按钮后，L 指示灯将以 1 秒的间隔闪烁。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/7.gif" style={{width:800, height:'auto'}}/></div>

## 特别鸣谢

特别感谢 **lolren** 为 XIAO nRF54LM20A 贡献 Arduino 适配。其代码和 README 清晰且非常有帮助。如果你想进一步了解如何在 Arduino 中使用 XIAO nRF54LM20A，请参考下面的 GitHub 链接。

- [Arduino Core 仓库](https://github.com/lolren/nrf54-arduino-core)
- [作者 GitHub 主页](https://github.com/lolren)


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
