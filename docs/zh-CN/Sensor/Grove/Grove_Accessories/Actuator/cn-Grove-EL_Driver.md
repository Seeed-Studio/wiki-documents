---
title: Grove - EL Driver
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-EL_Driver/
slug: /cn/Grove-EL_Driver
last_update:
  date: 03/20/2024
  author: WuFeifei
---
![](https://files.seeedstudio.com/wiki/Grove-EL_Driver/img/Grove-EL_Driver.jpg)

Grove - EL驱动器专为驱动EL线设计。它集成了一个非常小的逆变器来驱动EL线，因此您只需使用一根Grove线缆就可以轻松点亮EL线。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-EL-Driver-p-2269.html)

## 版本追踪

| 版本号 | 描述             | 发布日期       |
| ------ | ---------------- | -------------- |
| v1.0   | 初始公开发行版本 | 2014年12月11日 |

#### **支持的EL线：**

- [EL Wire-绿色 3m](https://www.seeedstudio.com/depot/EL-WireGreen-3m-p-1102.html)
- [EL Wire-红色 3m](https://www.seeedstudio.com/depot/EL-WireRed-3m-p-1129.html)
- [EL Wire-蓝色 3m](https://www.seeedstudio.com/depot/EL-WireBlue-3m-p-1128.html)
- [EL Wire-黄色 3m](https://www.seeedstudio.com/depot/EL-WireYellow-3m-p-1127.html)
- [EL Wire-白色 3m](https://www.seeedstudio.com/depot/EL-WireWhite-3m-p-1130.html)

## 特性

- Grove兼容接口
- 3.3V/5V兼容
- 集成逆变器变压器
- 输入电流：最大300mA（根据负载而定）
- 支持的最大EL电容：15nF

:::提示
    更多关于Grove模块的信息，请参考 [Grove系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 使用说明

### 与Arduino配合使用

这里我们展示如何使用Arduino来控制LED的状态。

1. 使用4pin Grove线缆将Grove - EL驱动器连接到Base Shield的**数字端口2**。当然，如果有必要，您可以更改为其他有效的数字端口，并应相应地更改端口定义。使用产品包装中提供的线缆将EL线连接到EL驱动器的**J1**端口。

2. 将其插入Arduino/Seeeduino。使用USB线缆将板连接到PC。

3. 将示例代码复制到您的草图中，然后上传到Arduino或Seeeduino板。您将看到EL线每秒闪烁一次。


```
/*************************   2014 Seeedstudio   **************************
* File Name          : GroveELDriverDemoCode.ino
* Author             : Seeedteam
* Version            : V1.0
* Date               : 11/12/2014
* Description        : Demo code for Grove - EL Driver
*************************************************************************/
 
#define ELPin 2 //connect EL Driver to digital pin2
void setup() {                
  // initialize the digital pin2 as an output.
  pinMode(ELPin, OUTPUT);     
}
 
void loop() {
  digitalWrite(ELPin, HIGH);   // set the EL Wire on
  delay(500);               // for 500ms
  digitalWrite(ELPin, LOW);   // set the EL Wire off
  delay(500);
}
```

![](https://files.seeedstudio.com/wiki/Grove-EL_Driver/img/Grove-EL_Driver_usage.jpg)

### 使用Codecraft编程

#### 硬件

**步骤 1.** 将Grove - EL驱动器连接到Base Shield的D2端口。

**步骤 2.** 将Base Shield插入您的Seeeduino/Arduino。

**步骤 3.** 通过USB线缆将Seeeduino/Arduino连接到您的PC。

#### 软件

**步骤 1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将一个主程序拖放到工作区域。

:::注意
    如果您是第一次使用Codecraft，也请参阅[使用Arduino的Codecraft指南](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 按照下面的图片拖拽模块，或者打开可以在本页面末尾下载的cdc文件。

![](https://files.seeedstudio.com/wiki/Grove-EL_Driver/img/EL_Driver.png)

将程序上传到您的Arduino/Seeeduino。

:::提示
    当代码上传完成后，您将看到EL线开始闪烁。
:::

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/Grove-EL_Driver_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [原理图_电路板_eagle](https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/Grove-EL_Driver_v1.0.zip)
- [原理图_pdf](https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/Grove-EL_Driver_v1.0.pdf)
- [CodeCraft 库](https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/EL%20Driver.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_EL_Driver -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供全方位的支持，以确保您在使用我们的产品时能够获得最顺畅的体验。我们提供多种沟通渠道，以满足您不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
