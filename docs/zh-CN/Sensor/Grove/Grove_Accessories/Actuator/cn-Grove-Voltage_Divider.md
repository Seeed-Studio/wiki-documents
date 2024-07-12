---
title: Grove - 分压器
description: Grove - 分压器
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Voltage_Divider//
slug: /cn/Grove-Voltage_Divider
last_update:
  date: 03/21/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/img/Voltage_Divider_01.jpg)

Grove——分压器提供了一个接口，用于测量外部电压，从而无需在输入接口上连接电阻。此外，电压增益可以通过拨码开关来选择。它们易于使用。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Voltage-Divider-p-1472.html)

## 特性

---
- 外部电压接口和Grove接口
- 易于使用
- 可调节增益

:::提示
更多关于Grove模块的信息，请参考[Grove系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 规格

---

|项目| 最小值 | 典型值 | 最大值 | 单位 |
|---|---|---|---|---|
| 工作电压               | 4.7    | 5.0    | 5.3    | VDC  |
| 测量精度               | /      | <=1    | /      | %    |
| 外部电压范围（选择3）  | 0.3    | /      | 12.9   | V    |
| 外部电压范围（选择10） | 1.0    | /      | 43     | V    |
| 尺寸                   | /      | 24X20  | /      | mm   |

## 支持的平台

| Arduino                                                      | 树莓派                                                       | BeagleBone                                                   | Wio                                                          | LinkIt ONE                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::警告
上述列为支持的平台，仅表示该模块在软件或理论上的兼容性。在大多数情况下，我们只针对Arduino平台提供软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/演示代码，因此用户需要编写自己的软件库。
:::

## 入门指南

---
在测量外部电压时，请将外部电压连接到J1，然后将板载Grove连接器连接到Arduino/Seeeduino的模拟端口：

- 使用通用Grove电缆将模块连接到[Grove - Base Shield](https://wiki.seeedstudio.com/Base_Shield_V2)的A0端口。
- 将[Grove - Base Shield](https://wiki.seeedstudio.com/Base_Shield_V2)连接到Arduino/Seeeduino。

为了测试此模块的精度，我测试了一些电压输入，并获得了以下数据：

![](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/img/Voltage_Divider_Test_Score.jpg)

- 如您所见，当输入值在测量范围内时，分压器具有高精度（<1%，我在此标记为“OK”）。但是，当输入值不在范围内时，精度会降低（我标记为“NO”）。请参考[规格参数](https://wiki.seeedstudio.com/Grove-Voltage_Divider/#specification)了解具体的测量范围。

  当分压器输出电压高于VCC（Grove工作电压和模拟读取的参考电压）时，指示灯会亮起以显示错误。

- 使用Arduino的串行监视器，您可以测量输入电压值。演示代码如下所示：

```cpp
void setup()
{
    Serial.begin(9600);
}

void loop()
{
    long  sensorValue=analogRead(A0);
    long  sum=0;
    for(int i=0;i<1000;i++)
    {
        sum=sensorValue+sum;
        sensorValue=analogRead(A0);
        delay(2);
    }
    sum=sum/1000;

    Serial.print("if you set the Gain to 10,the input voltage:");
    Serial.println(10*sum*4980/1023.00);

    Serial.print("if you set the Gain to 3,the input voltage:");
    Serial.println(3*sum*4980/1023.00);

    delay(1000);
}
```

### 使用Codecraft编程

#### 硬件

**步骤 1.** 将Grove - Voltage Divider连接到Base Shield的A0端口。

**步骤 2.** 将Base Shield插入您的Seeeduino/Arduino。

**步骤 3.** 通过USB电缆将Seeeduino/Arduino连接到您的电脑。

#### 软件

**步骤 1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将一个主程序拖放到工作区域。

:::注意
如果您是第一次使用Codecraft，请同时参阅[Codecraft使用Arduino指南](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 按照以下图片拖动模块，或者打开可以在本页面底部下载的cdc文件。

![cc](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/img/cc_Voltage_Divider.png)

将程序上传到您的Arduino/Seeeduino。

:::成功后
当代码上传完成时，您将在串行监视器中看到电压值。
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/res/Grove-Voltage_Divider_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源

---
- [Grove - Voltage Divider Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/res/Grove-Voltage_Divider_Eagle_File.zip)
- [LMV358ID 数据手册](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/res/LMV358ID_Datasheet.pdf)
- [Codecraft CDC 文件](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/res/Grove_Voltage_Divider_CDC_File.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您在使用我们的产品时能够尽可能顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
