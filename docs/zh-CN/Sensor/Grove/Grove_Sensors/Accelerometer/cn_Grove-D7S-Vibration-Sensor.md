---
description: 入门指南 Grove D7S 振动传感器
title: Grove - D7S 振动传感器
keywords:
- Grove
- vibration
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/grove-d7s-vibration-sensor
last_update:
  date: 6/6/2023
  author: Stephen Lo
---

# Grove - D7S 振动传感器

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/main.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-D7S-Vibration-Sensor-p-5701.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

<br />

Grove - D7S 振动传感器是一款强大的地震检测模块，可实时监测地震活动。它基于由欧姆龙公司（Omron Corporation）开发的先进 D7S 模块，欧姆龙是传感技术领域的领先制造商。

该传感器配备高精度三轴加速度计和复杂的地震算法，能够准确可靠地检测地震事件。它可以检测各种类型的振动，并根据其严重程度进行分类，为地震监测和安全应用提供有价值的信息。

Grove - D7S 振动传感器以简单性和多功能性为设计理念，与 Grove 系统（一个模块化原型平台）无缝集成。其标准化接口允许轻松连接到 Arduino 板和其他兼容的开发平台。

## 简介

### 特性

- **高精度加速度计**：配备三轴加速度计，传感器可准确测量振动和地震活动。
- **实时地震检测**：Grove - D7S 振动传感器使用先进的算法实时检测和分类地震事件。它可以区分不同震级的地震，并提供相应的警报信号。
- **轻松集成到 Grove 系统**：传感器具有 Grove 兼容接口，可轻松连接到 Arduino 板和其他兼容平台。无需复杂的布线或焊接，适合各类技能水平的用户。
- **紧凑且坚固的设计**：Grove - D7S 振动传感器具有紧凑的外形尺寸，适用于空间有限的各种应用。其坚固的结构确保了在恶劣环境中的耐用性和可靠性能。
- **低功耗**：传感器设计为低功耗运行，适合长期监测应用，不会快速耗尽电源。

### 规格

- 芯片：D7S  
- 测量范围：±6g  
- 通信接口：I2C  
- Grove 接口：4 针 HY2.0  
- 工作电压：3.3/5V  

### 包装清单

- 1 x Grove - D7S 振动传感器板  
- 1 x Grove 电缆（20cm）  

### 应用场景

Grove - D7S 振动传感器可用于广泛的应用场景，包括但不限于：

- **地震监测系统**：将传感器部署在建筑物、桥梁和关键基础设施中，可实时监测地震活动。它支持早期检测和警报系统，有助于提高安全性和灾害响应能力。
- **地震研究与分析**：研究人员可以利用 Grove - D7S 振动传感器收集地震研究和分析的数据。传感器的高精度测量为地震模式和特性提供了宝贵的见解。
- **结构安全评估**：传感器可集成到结构健康监测系统中，用于评估建筑物、桥梁和其他结构的完整性和稳定性。它有助于识别地震事件引起的潜在结构弱点。
- **基于物联网的地震监测网络**：通过在网络中部署多个 Grove - D7S 振动传感器，可以创建一个分布式系统，用于更大范围的综合地震监测。此设置支持高效的数据收集和分析，从而提高地震准备能力。

以上只是 Grove - D7S 振动传感器所支持的多种应用中的一部分示例。其多功能性和高性能使其成为地震相关项目中的宝贵工具。

## 硬件概述

### 引脚图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/pinmap.png" alt="pir" width={500} height="auto" /></p>

## 入门指南

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | 基础扩展板 | Grove - D7S 振动传感器 |
|----------------|------------|---------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/main.jpg" alt="pir" width={250} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-D7S-Vibration-Sensor-p-5701.html" target="_blank">立即购买</a>|

:::note
**1.** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

**2.** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了 Grove 数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

- **步骤 1.** 将 Grove - D7S 振动传感器连接到 Grove 基础扩展板的 **I2C** 接口。

- **步骤 2.** 将 Grove 基础扩展板插入 Seeeduino。

- **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到电脑。

| Seeeduino     | Grove - D7S 振动传感器 |
|---------------|-------------------------|
| 3.3/5V        | 红色                   |
| GND           | 黑色                   |
| SDA           | 白色                   |
| SCL           | 黄色                   |

#### 软件

- **步骤 1.** 从 Github 下载 [Grove - D7S 振动传感器](https://github.com/limengdu/d7s-grove-arduino)。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 正确下载并安装库后，您可以在示例文件夹中找到一个名为 sample.ino 的示例程序。此程序专为 D7S 模块设计。

```cpp
#include <D7S.h>

// 旧的地震数据
float oldSI = 0;
float oldPGA = 0;

// 标志变量，用于在地震期间仅处理一次坍塌/关闭事件
bool shutoffHandled = false;
bool collapseHandled = false;

// 处理坍塌事件的函数
void handleCollapse()
{
    // 在此处编写处理坍塌事件的代码
    Serial.println("-------------------- 坍塌！ --------------------");
}

void setup()
{
    // 打开串口通信并等待端口打开：
    Serial.begin(9600);
    while (!Serial)
    {
        ; // 等待串口连接，仅适用于原生 USB 端口
    }

    Serial.print("启动 D7S 通信（可能需要一些时间）...");
    // 启动 D7S 连接
    D7S.begin();
    // 等待 D7S 准备好
    while (!D7S.isReady())
    {
        Serial.print(".");
        delay(500);
    }
    Serial.println("已启动");

    // 设置 D7S 在初始化时切换轴
    Serial.println("设置 D7S 传感器在初始化时切换轴。");
    D7S.setAxis(SWITCH_AT_INSTALLATION);

    Serial.println("将在 2 秒内初始化 D7S 传感器。请在初始化过程中保持稳定。");
    delay(2000);
    Serial.print("初始化...");
    // 开始初始安装过程
    D7S.initialize();
    // 等待 D7S 准备好（初始化过程结束）
    while (!D7S.isReady())
    {
        Serial.print(".");
        delay(500);
    }
    Serial.println("已初始化！");

    // 检查是否发生坍塌（如果这是 D7S 第一次安装，安装数据可能不正确）
    if (D7S.isInCollapse())
    {
        handleCollapse();
    }

    // 重置 D7S 中记忆的关闭/坍塌事件
    D7S.resetEvents();

    Serial.println("\n正在监听地震！");
}

void loop()
{
    // 检查是否正在发生地震
    if (D7S.isEarthquakeOccuring())
    {
        // 检查关闭事件是否已处理以及关闭条件是否满足
        // 在调用 D7S.isInShutoff() 之前执行，以避免不必要的 I2C 调用
        if (!collapseHandled && D7S.isInCollapse())
        {
            handleCollapse();
            collapseHandled = true;
        }

        // 打印当前地震的信息
        float currentSI = D7S.getInstantaneusSI();
        float currentPGA = D7S.getInstantaneusPGA();

        if (currentSI > oldSI || currentPGA > oldPGA)
        {
            // 获取瞬时 SI
            Serial.print("\t瞬时 SI: ");
            Serial.print(currentSI);
            Serial.println(" [m/s]");

            // 获取瞬时 PGA
            Serial.print("\t瞬时 PGA（峰值地面加速度）: ");
            Serial.print(currentPGA);
            Serial.println(" [m/s^2]\n");

            // 保存当前数据
            oldSI = currentSI;
            oldPGA = currentPGA;
        }
    }
    else
    {
        // 重置旧的地震数据
        oldPGA = 0;
        oldSI = 0;
        // 重置已处理事件的标志
        shutoffHandled = false;
        collapseHandled = false;
        // 重置 D7S 事件
        D7S.resetEvents();
    }
}
```

- **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 打开 Arduino IDE 的 **串口监视器**，点击 **工具->串口监视器**。您可以通过产生一些振动，例如敲击桌子，来获得以下结果。

:::note
传感器初始化大约需要 3 到 5 分钟。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/output.png" style={{width:1000, height:'auto'}}/></div>

## 故障排除

### 问题 1：Grove - D7S 振动传感器能检测所有类型的地震吗？

Grove - D7S 振动传感器设计用于检测各种地震活动，包括轻微和重大地震。然而，检测范围和灵敏度可能会因地震的震级和距离而有所不同。

### 问题 2：除了 Arduino，Grove - D7S 振动传感器还能与其他开发板一起使用吗？

是的，Grove - D7S 振动传感器兼容支持 I2C 接口的其他开发板。请确保您为所选平台准备了必要的库和资源。

### 问题 3：Grove - D7S 振动传感器的电源需求是什么？

该传感器可以在 3.3V 电压下运行。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/D7S-Vibration-Sensor.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - D7S 振动传感器原理图和 PCB](https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/D7S-Vibration-Sensor.zip)
- **[PDF]** [D7S 数据手册](https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/en-d7s-957666.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>