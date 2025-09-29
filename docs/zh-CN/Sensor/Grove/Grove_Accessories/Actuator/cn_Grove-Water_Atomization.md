---
title: Grove - 水雾化
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Water_Atomization/
slug: /cn/Grove-Water_Atomization
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_product_1200.jpg)

Grove - 水雾化是一款优秀的 Grove 模块，可帮助您轻松开发雾化器或雾化模块。通过几个简单的步骤，您就可以快速制作一个雾化器原型。它具有 Grove 接口，使其能够轻松应用于众多场景。加湿器是一个基本应用，您还可以利用数字气味技术以及任何需要雾化的场景开发更高级、有趣的项目。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Grove-Water-Atomization-v10-p-2542.html)

特点
--------

- 超声波加热。
- 轻松制作新应用原型。
- 广泛适用于各种应用场景。
- 可用于各种有趣、智能和时尚的应用。

:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

应用创意
-----------------

- 加湿器。
- 不同场景中的气味发射器。
- 智能家居应用。
- 消费电子产品上的智能设备。

规格参数
--------------

| 参数                  | 值             |
|----------------------|----------------|
| 工作电压             | 5.0V(DC)       |
| 纹波（最大功率时）   | ≤100 mV        |
| 最大功率             | 2W             |
| 峰值输出电压         | 65±5V          |
| 工作频率             | 105±5kHz       |
| 芯片                 | ETA1617, NE555 |

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。在大多数情况下，我们仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码，因此用户需要自行编写软件库。
:::

硬件概览
-----------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_overview_1200.jpg) -->

**Grove 接口**
将主控板（如 Seeeduino 板）与驱动板连接。

**换能器接口**
将超声波换能器与驱动板连接。

**Grove 线**
将主控板与驱动板连接。

### **部件清单**

| 部件名称                  | 数量       |
|-----------------------------|----------|
| 驱动板                    | 1个       |
| Grove 线                  | 1根       |
| 超声波换能器板             | 1个       |

开始使用
-----------

### **所需材料**

Seeeduino v4.2 x 1

Grove - 基础扩展板 v2 x 1

Grove - 线 x 1

### **准备工作**

参考以下指南以构建合适的 IDE：

:::note
我们在此案例中选择了 Seeeduino。
:::

- Windows 上的入门指南
- Mac OS X 上的入门指南

### **硬件连接**

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_connection.jpg)

### **一个小演示**

:::note
  在此演示中，我们还需要一个 Grove - 触摸传感器，并将其连接到 D5。
:::

1. 将以下代码复制到 Arduino IDE 编辑器中。

```
/*
  Grove 雾化演示代码。
  触摸以开始雾化。
  最后修改者：he
  作者：xiaohe
*/

// setup 函数在按下复位或为板供电时运行一次
void setup() {
    // 初始化数字引脚 13 为输出。
    pinMode(A5, OUTPUT);// 设置 A5 为输出
    pinMode(5, INPUT); // 使用数字引脚 5 作为输出端口
}

// loop 函数会不断重复运行
void loop() {
    int D2Sig = digitalRead(5);// 读取引脚 5 的信号
    if (D2Sig == 1)
    {
        /* 代码 */
        digitalWrite(A5, HIGH);   // 开始雾化
        delay(10000);              // 等待 10 秒
        digitalWrite(A5, LOW);    // 停止雾化

    }
}
```

2. 将一些纸巾放入一个修剪过的装满水的纸杯中，将超声波换能器放在纸巾上。

:::note
  底部是带有空洞的一侧，应朝下。让换能器板的底部浸入水中，并保持顶部在水面以上。纸巾的作用是将水引导到换能器，同时保持换能器的上侧在水面以上。
:::

3. 将代码上传到主控板。

4. 现在，如果您触摸 Grove 触摸传感器，就可以看到产生的水雾。

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_connection.jpg)

:::caution
  请勿直接触摸换能器接口引脚，因为驱动板的峰值输出电压可能达到 65V。
:::

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/High_voltage_warning_600.jpg)

:::caution
  电感器 <span style={{fontWeight: 'bold'}}>L2</span>（如上图红色矩形标记）会发热，因此请勿直接触摸。
:::

### 使用 Codecraft 编程

#### 硬件

**步骤 1.** 将 Grove - Water Atomization 连接到 Base Shield 的 D2 端口，并将 Grove - Button 连接到 D5 端口。

**步骤 2.** 将 Base Shield 插入 Seeeduino/Arduino。

**步骤 3.** 使用 USB 数据线将 Seeeduino/Arduino 连接到电脑。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区。

:::note
    如果这是您第一次使用 Codecraft，请参阅 [Codecraft 使用 Arduino 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤 2.** 按下图所示拖动模块，或者打开页面底部提供的 cdc 文件。

![cc](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/cc_Water_Atomization.png)

将程序上传到您的 Arduino/Seeeduino。

:::tip
    当代码上传完成后，按下按钮，水雾化器将开始雾化。
:::

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [Eagle 格式原理图文件](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_Eagle.zip)
- [PDF 格式原理图文件](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_PDF.zip)
- [Codecraft CDC 文件](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Grove_Water_Atomization_CDC_File.zip)

## 项目

**智能加湿器** 让您的房间在冬季更加舒适。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/taifur/smart-humidifier-dac66f/embed' width='350'></iframe>

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_Water_Atomization -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>