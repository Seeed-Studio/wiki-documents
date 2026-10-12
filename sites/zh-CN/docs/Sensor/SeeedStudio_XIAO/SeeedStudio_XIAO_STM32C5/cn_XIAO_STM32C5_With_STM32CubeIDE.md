---
title: 使用 STM32CubeIDE 开发 XIAO STM32C5
description: ''
keywords:
  - xiao
  - stm32
  - stm32c5
  - stm32cubeide
image: https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/Seeed-Studio-XIAO-STM32C5.webp
slug: /xiao_stm32c5_with_stm32cubeide
sku: 100036669
last_update:
  date: 08/17/2026
  author: Zeller
createdAt: '2026-08-14'
updatedAt: '2026-08-17'
url: https://wiki.seeedstudio.com/cn/xiao_stm32c5_with_stm32cubeide/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiaostm32c5_cubeide.png" style={{width:600, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html"
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
  </table>
</div>

## 概述

[STM32CubeIDE](https://www.st.com/content/st_com/en/stm32cubeide.html#st-get-software) 是意法半导体官方推出的免费、跨平台 STM32 微控制器集成开发环境。同样适用于为 XIAO STM32C5 开发应用程序。

STM32CubeIDE 提供 GNU Arm 工具链，并支持基于 CMake 和 Ninja 的构建流程，从而减少额外的环境配置需求。它覆盖完整的开发流程，包括项目创建、外设配置、代码编辑、编译、固件烧录以及在线调试。

## 硬件准备

在开始之前，请准备以下物品：

- 1 × XIAO STM32C5
- 一台电脑和一根 Type‑C USB 线
- 1 × ST‑LINK/V2（可选）

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO STM32C5</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png"
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
            href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html"
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

## 安装 STM32CubeIDE

1. 下载安装包。点击 [STM32CubeIDE Software](https://www.st.com/en/development-tools/stm32cubeide.html) 进入下载页面。在首页选择 **Get Software**，或向下滚动到页面底部。选择与您电脑操作系统匹配的安装程序，建议使用最新版本。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_2.png" style={{width:600, height:'auto'}}/></div>

2. 您可以使用已注册账号或以访客身份下载安装程序。此过程中需要填写邮箱及其他相关信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_3.png" style={{width:600, height:'auto'}}/></div>

3. 下载链接会发送到您的邮箱。点击该链接即可获取软件安装程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_4.png" style={{width:600, height:'auto'}}/></div>

4. 运行安装程序，阅读相关许可协议，然后选择 **I Agree**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_5.png" style={{width:600, height:'auto'}}/></div>

5. 选择安装目录。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_6.png" style={{width:600, height:'auto'}}/></div>

6. 安装计划使用的调试探针驱动程序。对于下面的 UF2 烧录步骤，则不需要安装探针驱动。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_7.png" style={{width:600, height:'auto'}}/></div>

## 使用 XIAO STM32C5 进行开发

1. 由于 XIAO STM32C5 原生支持烧录 UF2 格式固件，我们提供了一个参考示例工程，以简化您的开发流程。点击下方链接下载该示例：

- **🗃️[Project]** [XIAO STM32C5 Blink Project](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/xiao_c5_project.zip)

- 下载完成后解压压缩包。解压后的工程结构应与下图所示布局一致。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_8.png" style={{width:800, height:'auto'}}/></div>

2. 启动 STM32CubeIDE，将会出现如下界面。本节内容节选自 **📄[PDF]** [STM32CubeIDE User Guide](https://www.st.com/resource/en/user_manual/um2609-stm32cubeide-user-guide-stmicroelectronics.pdf)

:::note

首次启动时，STM32CubeIDE 会要求选择工作空间。使用默认工作空间即可，这不会影响后续步骤。

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_9.png" style={{width:800, height:'auto'}}/></div>

3. 导入工程。在右上角工具栏中，依次选择 **File → STM32 Project Create/Import**，然后选择 **Import STM32CubeMX / STM32CubeIDE Project**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_10.png" style={{width:800, height:'auto'}}/></div>

4. 选择解压后的 **xiao_c5_project** 工程目录，并点击 **Finish**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_11.png" style={{width:800, height:'auto'}}/></div>

5. 导入完成后，工程结构如图所示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_12.png" style={{width:800, height:'auto'}}/></div>

- **SDK**：包含 STM32CubeC5 SDK 包。这是一个精简版 SDK，仅包含构建 XIAO STM32C5 固件所必需的文件，而非完整 SDK 发行版。
- **Source**：源代码目录，包含 `main.c` 以及 XIAO STM32C5 的板级定义文件。
- **Startup**：XIAO STM32C5 所需的启动文件。
- **tools**：包含 `uf2conv.py` 脚本，每次构建后会将编译生成的 bin 二进制文件转换为 UF2 格式。

### 构建与烧录固件

1. 程序概览。打开 **Source → main.c**。这是一个针对 XIAO STM32C5 的简单板载 LED 闪烁示例。它每隔 500 ms 翻转一次 LED 的逻辑电平，从而实现闪烁效果。

```c
/**
 * @file    main.c
 * @brief   Minimal LED application for the Seeed XIAO STM32C5.
 *
 * SPDX-License-Identifier: MIT
 * Copyright (c) 2026 Seeed Technology Co., Ltd.
 */
#include "board.h"
#include "uart_io.h"

int main(void)
{
    if (HAL_Init() != HAL_OK) {
        Error_Handler();
    }

    board_clock_init();
    board_uart_init();
    board_led_init();

//    uprintln("[LED] PB12 onboard LED is blinking (500 ms interval)");
    uart_log_flush();

    while (1) {
        HAL_GPIO_TogglePin(LED_PORT, LED);
        uprintln("[LED] PB12 onboard LED is blinking");
        uart_log_flush();
        HAL_Delay(500U);
    }
}
```

- `board_clock_init();`：初始化 XIAO STM32C5 所需的外设时钟。
- `board_uart_init();`：初始化 XIAO STM32C5 的 UART I/O 配置。
- `board_led_init();`：初始化 XIAO STM32C5 板载用户 LED 的 I/O 配置。
- `HAL_GPIO_TogglePin(LED_PORT, LED);`：STM32 HAL 库的 GPIO 翻转函数，用于翻转用户 LED 的 GPIO 逻辑电平。

2. 在工具栏中选择 **Release**，以触发工程的自动构建。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_13.png" style={{width:800, height:'auto'}}/></div>

3. 构建成功后，会生成一个 **Release** 文件夹，其中包含多个构建产物。在这些输出文件中，bin 文件和 uf2 文件是您需要使用的文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_14.png" style={{width:600, height:'auto'}}/></div>

:::tip

您也可以通过选择 **Build** 来构建工程。这样会生成一个 **Build** 文件夹，其中包含生成的固件文件。

:::

### 烧录 UF2 格式固件

- 快速双击 XIAO STM32C5 上的复位按键。此时会弹出 XIAO STM32C5 的大容量存储盘。将 UF2 文件复制到该磁盘中即可完成烧录。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_15.png" style={{width:800, height:'auto'}}/></div>


### 使用 [ST-LINK/V2](https://www.st.com/en/development-tools/st-link-v2.html) 烧录

[ST-LINK/V2](https://www.st.com/en/development-tools/st-link-v2.html) 是意法半导体推出的官方调试与编程工具。它支持 STM8 和 STM32 微控制器系列，并可通过 SWIM、JTAG 或 SWD 接口实现程序下载、固件烧录和片上调试。下面将介绍如何使用 ST‑LINK/V2 搭配 STM32CubeIDE 向 XIAO STM32C5 烧录固件。

- 将 ST‑LINK/V2 连接到电脑。在 IDE 中依次选择 **Help → ST‑LINK Upgrade**，将其固件升级到最新版本，以确保与 STM32C5 器件具有良好兼容性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_15_1.png" style={{width:800, height:'auto'}}/></div>

- 将 ST‑LINK/V2 连接到 XIAO STM32C5。引脚连接请参见下文。本步骤需要焊接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_16.png" style={{width:800, height:'auto'}}/></div>

:::tip

1. 在连接引脚中，RST 是一个可选接口，可以不连接。
2. 你也可以使用 [**XIAO Debug Mate**](https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html) 连接到 ST‑LINK/V2 工具，从而免去手动焊接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_16_1.jpg" style={{width:600, height:'auto'}}/></div>
:::
<br/>
- 点击工具栏上的 **Run** 完成烧录。STM32CubeIDE 会自动检测 ST‑LINK/V2 编程器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_17.png" style={{width:800, height:'auto'}}/></div>

## 总结

- 使用上述方法将对应固件烧录到 XIAO STM32C5 后，板载用户 LED 将以 500 ms 的周期翻转并闪烁。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_4_1.gif" style={{width:500, height:'auto'}}/></div>

你也可以将 D6 和 D7 连接到 TTL‑转‑UART 适配器。打开任意串口监视器；串口将每隔 500 ms 打印字符串 **[LED] PB12 onboard LED is blinking**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_18.png" style={{width:800, height:'auto'}}/></div>

## 源码文件夹中的文件

- **board.c / board.h**

  定义 XIAO STM32C5 的引脚映射和板级资源。它为包括时钟、GPIO、CAN 和 ADC 在内的外设提供初始化配置，可作为应用开发的基础。

- **test.c / test.h**

  提供对板载 IMU、LED 等外设以及 CAN、SPI、I2C 和 ADC 等接口的验证例程。这些例程可用于硬件功能验证和代码参考。

- **uart_io.c / uart_io.h**

  负责处理接收的 UART 数据的字符处理和命令解析，为测试例程提供交互式入口。底层通信接口由其他模块实现。

## 参考资源

- **🗃️[Project]** [XIAO STM32C5 Blink 项目](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/xiao_c5_project.zip)
- **📄[Document]** [STM32CubeIDE 用户指南](https://www.st.com/resource/en/user_manual/um2609-stm32cubeide-user-guide-stmicroelectronics.pdf)
- **📄[Datasheet]** [STM32C5A3CGX](https://www.st.com/resource/en/datasheet/stm32c5a3cg.pdf)
- **📄[Examples]** [STM32 示例库](https://dev.st.com/stm32-example-library/)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
