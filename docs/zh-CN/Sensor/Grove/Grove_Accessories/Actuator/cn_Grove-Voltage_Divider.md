---
title: Grove - 分压器
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Voltage_Divider//
slug: /cn/Grove-Voltage_Divider
last_update:
  date: 11/30/2023
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/img/Voltage_Divider_01.jpg)

Grove – 分压器提供了一个用于测量外部电压的接口，无需将电阻连接到输入接口。此外，电压增益可以通过拨码开关选择。它们使用起来非常方便。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Voltage-Divider-p-1472.html)


## 特性
---
- 外部电压接口和 Grove 接口
- 使用简单
- 可调节增益

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格
---

| 项目 | 最小值 | 典型值 | 最大值 | 单位 |
|---|---|---|---|---|
| 工作电压 | 4.7 | 5.0 | 5.3 | VDC |
| 测量精度 | - | &lt;=1 | - | % |
| 外部电压范围（选择 3） | 0.3 | - | 12.9 | V |
| 外部电压范围（选择 10） | 1.0 | - | 43 | V |
| 尺寸 | - | 24X20 | - | mm |

## 支持的平台

| Arduino                                                                                             | 树莓派                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
上述提到的平台作为支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/示例代码。因此，用户需要自行编写软件库。
:::

## 入门指南
---
在测量外部电压时，将外部电压连接到 J1，然后将板载 Grove 接口连接到 Arduino/Seeeduino 的模拟端口：
- 使用通用 Grove 电缆将模块连接到 [Grove - 基础扩展板](https://wiki.seeedstudio.com/cn/Base_Shield_V2) 的 A0 端口。
- 将 [Grove - 基础扩展板](https://wiki.seeedstudio.com/cn/Base_Shield_V2) 连接到 Arduino/Seeeduino。

为了测试该模块的精度，我测试了一些电压输入并得到了以下数据：

![](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/img/Voltage_Divider_Test_Score.jpg)

- 如您所见，当输入在测量范围内时，分压器具有高精度（&lt;1%，我标记为“OK”）。但当输入不在范围内时，精度会降低（我标记为“NO”）。请参阅 [规格](https://wiki.seeedstudio.com/cn/Grove-Voltage_Divider/#specification) 了解具体的测量范围。

当分压器输出电压高于 VCC（Grove 的工作电压和模拟读取的参考电压）时，指示灯会亮起以显示错误。

- 使用 Arduino 的串口监视器，您可以测量输入电压值。示例代码如下所示：

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

    Serial.print("如果您将增益设置为 10，输入电压为：");
    Serial.println(10*sum*4980/1023.00);

    Serial.print("如果您将增益设置为 3，输入电压为：");
    Serial.println(3*sum*4980/1023.00);

    delay(1000);
}
```

### 使用 Codecraft

#### 硬件

**步骤 1.** 将 Grove - 分压器连接到基础扩展板的 A0 端口。

**步骤 2.** 将基础扩展板插入您的 Seeeduino/Arduino。

**步骤 3.** 使用 USB 电缆将 Seeeduino/Arduino 连接到您的电脑。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区域。

:::note
如果这是您第一次使用 Codecraft，请参阅 [Codecraft 使用 Arduino 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 按下图拖动代码块，或打开可以在本页面底部下载的 cdc 文件。

![cc](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/img/cc_Voltage_Divider.png)

将程序上传到您的 Arduino/Seeeduino。

:::success
当代码上传完成后，您将在串口监视器中看到电压值。
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/res/Grove-Voltage_Divider_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源
---
- [Grove - 分压器 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/res/Grove-Voltage_Divider_Eagle_File.zip)
- [LMV358ID 数据手册](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/res/LMV358ID_Datasheet.pdf)
- [Codecraft CDC 文件](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/res/Grove_Voltage_Divider_CDC_File.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时拥有顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>