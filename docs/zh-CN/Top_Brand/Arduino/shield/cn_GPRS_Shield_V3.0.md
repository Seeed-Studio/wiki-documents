---
description: GPRS Shield V3.0
title: GPRS Shield V3.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/GPRS_Shield_V3.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---
<!-- ---
name: GPRS Shield V3.0
category: Shield
bzurl: https://www.seeedstudio.com/GPRS-Shield-V3.0-p-2333.html
oldwikiname:  GPRS Shield V3.0
prodimagename:
surveyurl: https://www.research.net/r/GPRS_Shield_V3
sku:  113030009
--- -->

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/img/GPRS_Shield_V3.0_p1.jpg)

这是 GPRS Shield 的 3.0 版本。
使用 GPRS shield 将您的 Arduino 连接到 GSM/GPRS 蜂窝网络！您现在可以使用 Arduino/Seeeduino 或其他主板通过易于使用的 AT 命令拨打电话号码或向朋友发送短信。
GPRS Shield 采用四频低功耗 GSM/GPRS 模块 SIM900 以及紧凑的 PCB 天线。同时，对接口和基础电路进行了改进，使其更加简洁可靠。
您有两种选择与主板通信 GPRS shield -- UART 或 SoftwareSerial。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/GPRS-Shield-V3.0-p-2333.html)

## 版本

---
| 版本 | 描述                                              | 发布日期      |
|----------|-----------------------------------------------------------|--------------|
| v0.9b    | 初始公开发布版本（测试版）                             | 2011年3月3日  |
| v1.2     | 添加软件端口来开启/关闭 SIM90              | 2011年12月2日  |
| v1.4     | 重新设计电源电路，重新布局 PCB | 2012年8月30日 |
| v2.0     | 四频支持并重新设计 PCB 天线                                     | 2013年2月3日  |
| v3.0     | 将 arduino 插座更改为最新的 Arduino Uno 标准  | 2015年3月20日 |

**V3.0 与之前版本有什么区别？**

- 将 arduino 插座更改为最新的 Arduino Uno 标准。除此之外，所有功能都与之前版本相同。

## 注意事项

---
- 确保您的 SIM 卡已激活。
- GPRS Shield 没有 ESD 防护措施。在干燥天气下处理时要特别小心。

## 硬件概述

---
![](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/img/Gprs_shield_v3_layout1.png)

规格和应用指南请链接到 [GPRS Shield V2.0](https://wiki.seeedstudio.com/cn/GPRS_Shield_V2.0/) 的文档。

## 常见问题

**Q1: 如何为 leonardo 修改代码？**

A1: 代码如下。

```cpp
#include <SoftwareSerial.h>

unsigned char buffer[64]; // buffer array for data recieve over serial port
int count = 0;     // counter for buffer array

void setup()
{
    Serial1.begin(19200);               // the GPRS baud rate   
    Serial.begin(19200);             // the Serial port of Arduino baud rate.
}

void loop()
{
    if (Serial1.available())              // if date is comming from softwareserial port ==> data is comming from gprs shield
    {
        while (Serial1.available())          // reading data into char array
        {
            buffer[count++] = Serial1.read();     // writing data into array
            if (count == 64)
                break;
        }
    
        for ( int j=0;j<count;j++)
        {
          Serial.write(buffer[j]);
        }
        clearBufferArray();              // call clearBufferArray function to clear the storaged data from the array
        count = 0;                       // set counter of while loop to zero
    }
    if (Serial.available())            // if data is available on hardwareserial port ==> data is comming from PC or notebook
        Serial1.write(Serial.read());       // write it to the GPRS shield
}

void clearBufferArray()              // function to clear buffer array
{
    for (int i=0; i < count; i++)
    {
        buffer[i] = NULL;
    }                               // clear all index of array with command NULL
}
```

**Q2: 如何更新 SIM900 的固件？**

Q2: 如果您有任何软件或硬件问题，请从 wiki 的资源模块下载固件"SIM_900_AGPS_instructions"。这个最新版本可以支持 HTTPS 等。更多信息请参考其中的介绍。

**Q3: GPRS shield 的 RTC 怎么样？**

Q3: SIM900 的规格说它有 RTC 备份，但我们到目前为止还没有使用过。也许您可以参考手册自己制作一个演示，或者我们将来会制作它。

**Q4: 我无法使用这个 GPRS shield 发送或接收任何短信。**

A4: 请按照以下说明操作。

- 请确保 SIM 卡插入良好
- 在手机上检查卡是否工作。
- 尝试从我们的 wiki 上传测试代码并发送 AT 命令，看看是否有良好的返回。
- 尝试将"libraries\SoftwareSerial\SoftwareSeriall.h"中的"#define _SS_MAX_RX_BUFF 64 // RX buffer size"更改为"#define_SS_MAX_RX_BUFF 128 // RX buffer size

**Q5: 两种帮助唤醒 GPRS shield 的替代方法**

A5: 这里有 2 种方法。

- 拉低 DTR 引脚：DTR 被拉低 20ms 后串口将激活
- RTC 闹钟到期

**Q6: 哪种类型的 SIM 卡可以与 GPRS Shield 配合使用？**

A6: GPRS Shield 中使用的 SIM900 支持 850/900/1800/1900MHz GSM 频段。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/GPRS_Shield_V3.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle]** [GPRS Shield v3.0 Eagle格式原理图和PCB](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/GPRS_Shield_V3.0_sch_pcb.zip)
- **[PDF]** [GPRS Shield v3.0 PDF格式原理图](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/GPRS_Shield_v3.0%20sch.pdf)
- **[PDF]** [GPRS Shield v3.0 PDF格式PCB](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/GPRS%20Shield%20v3.0%20PCB.pdf)
- **[库文件]** [GitHub上的GPRS_Shield库 - 基于Suli](https://github.com/Seeed-Studio/GPRS_Shield_Suli)
- **[库文件]** [GitHub上的GPRS_SIM900库 - 非Suli](https://github.com/Seeed-Studio/GPRS_SIM900)
- **[文档]** [AT命令 v1.11](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/AT_Commands_v1.11.pdf)
- **[文档]** [SIM900硬件设计](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/SIM900_HD_V1.05.pdf)
- **[数据手册]** [Si5902BDC](http://www.vishay.com/docs/70415/si5902bd.pdf)
- **[数据手册]** [SIM900数据手册](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/SIM900datasheeet.zip)
- **[数据手册]** [SIM_900_AGPS说明](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/SIM_900_AGPS_instructions.zip)
- **[工具]** [SIM900固件和工具(固件:1137B08SIM900M64_ST)](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/1137B08SIM900M64_ST.zip)
- **[工具]** [SIM900固件和工具(固件:1137B13SIM900M64_ST)](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/1137B13SIM900M64_ST.zip)

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