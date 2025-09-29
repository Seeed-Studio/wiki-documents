---
title: Grove - EL 驱动器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-EL_Driver/
slug: /cn/Grove-EL_Driver
last_update:
  date: 01/09/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Grove-EL_Driver/img/Grove-EL_Driver.jpg)

Grove - EL 驱动器专为驱动 EL 电线设计。它集成了一个非常小的逆变器来驱动 EL 电线，因此您只需一个 Grove 电缆即可轻松点亮 EL 电线。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-EL-Driver-p-2269.html)

版本追踪
---------------

| 修订版 | 描述                   | 发布日期      |
|--------|------------------------|--------------|
| v1.0   | 初次公开发布           | 2014年12月11日 |

#### **支持的 EL 电线：**

- [EL 电线-绿色 3m](https://www.seeedstudio.com/depot/EL-WireGreen-3m-p-1102.html)
- [EL 电线-红色 3m](https://www.seeedstudio.com/depot/EL-WireRed-3m-p-1129.html)
- [EL 电线-蓝色 3m](https://www.seeedstudio.com/depot/EL-WireBlue-3m-p-1128.html)
- [EL 电线-黄色 3m](https://www.seeedstudio.com/depot/EL-WireYellow-3m-p-1127.html)
- [EL 电线-白色 3m](https://www.seeedstudio.com/depot/EL-WireWhite-3m-p-1130.html)

特点
--------

- Grove 兼容接口
- 3.3V/5V 兼容
- 集成逆变器变压器
- 输入电流：最大 300mA（根据负载）
- 支持的最大 EL 电容：15nF

:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

使用方法
-----

### 使用 Arduino

以下是如何使用 Arduino 控制 LED 状态的示例。

1. 使用 4pin Grove 电缆将 Grove - EL 驱动器连接到 Base Shield 的 **数字端口 2**。当然，如果需要，您可以更改为其他有效的数字端口，并相应地更改端口定义。使用产品包装中提供的电缆将 EL 电线连接到 EL 驱动器的 **J1** 端口。

2. 将其插入 Arduino/Seeeduino。使用 USB 电缆将板连接到 PC。

3. 将示例代码复制到您的草图中，然后上传到 Arduino 或 Seeeduino 板。您会看到 EL 电线每秒闪烁一次。

```
/*************************   2014 Seeedstudio   **************************
* 文件名          : GroveELDriverDemoCode.ino
* 作者             : Seeedteam
* 版本            : V1.0
* 日期               : 11/12/2014
* 描述        : Grove - EL 驱动器的示例代码
*************************************************************************/
 
#define ELPin 2 //将 EL 驱动器连接到数字端口2
void setup() {                
  // 初始化数字端口2为输出。
  pinMode(ELPin, OUTPUT);     
}
 
void loop() {
  digitalWrite(ELPin, HIGH);   // 打开 EL 电线
  delay(500);               // 持续 500ms
  digitalWrite(ELPin, LOW);   // 关闭 EL 电线
  delay(500);
}
```

![](https://files.seeedstudio.com/wiki/Grove-EL_Driver/img/Grove-EL_Driver_usage.jpg)

### 使用 Codecraft

#### 硬件

**步骤 1.** 将 Grove - EL 驱动器连接到 Base Shield 的 D2 端口。

**步骤 2.** 将 Base Shield 插入您的 Seeeduino/Arduino。

**步骤 3.** 使用 USB 电缆将 Seeeduino/Arduino 连接到您的 PC。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区。

:::note
    如果这是您第一次使用 Codecraft，请参阅 [使用 Arduino 的 Codecraft 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 按下图拖动模块或打开页面底部提供的 cdc 文件。

![](https://files.seeedstudio.com/wiki/Grove-EL_Driver/img/EL_Driver.png)

将程序上传到您的 Arduino/Seeeduino。

:::tip
    当代码上传完成后，您会看到 EL 电线闪烁。
:::

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/Grove-EL_Driver_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [sch_pcb_eagle](https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/Grove-EL_Driver_v1.0.zip)
- [sch_pdf](https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/Grove-EL_Driver_v1.0.pdf)
- [CodeCraft 库](https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/EL%20Driver.zip)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_EL_Driver -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>