---
description: Grove - 三轴数字罗盘 v2.0
title: Grove - 三轴数字罗盘 v2.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-3-Axis_Digitial_Compass_v2.0
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Bazaar_doc/101020492/main_page.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bazaar_doc/101020492/main_page.jpg" alt="pir" width={600} height="auto" /></p>


Grove - 三轴数字罗盘是一款基于 Bosch BMM150 的数字罗盘传感器。它可以测量三个垂直轴上的磁场，并通过 I2C 和 SPI 接口读取输出，非常适合三轴移动应用。

这是 Grove - 三轴数字罗盘的第二代产品，与第一代相比，这一版本能够完美满足所有三轴应用的严格要求，同时价格几乎是第一代的一半，非常具有成本效益。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2-p-3034.html)

## 特性

- 高分辨率
- 高精度方向测量
- 易于使用

## 规格


| 项目                         | 参数                                |
|------------------------------|---------------------------------------|
| 工作电压                     | 3.3V / 5V                             |
| 磁场范围（典型值）           | ±1300μT（x, y轴），±2500μT（z轴）      |
| 磁场分辨率                   | 0.3μT                                 |
| 输出角度                     | 0º ~ 360º                             |
| 接口                         | I2C                                   |
| 工作温度                     | -40℃ 至 +85℃                         |
| 尺寸                         | 20mm x 20mm x 15mm                    |
| I2C 地址                     | 0x13                                  |

:::note
    如果您想使用多个 I2C 设备，请参考 [软件 I2C](https://wiki.seeedstudio.com/cn/Arduino_Software_I2C_user_guide/)。
:::
:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)。
:::
## 支持的平台


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
| Arduino | Raspberry Pi |
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino
#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield | Grove-3-Axis_Digitial_Compass_v2.0 |
|----------------|-------------|-----------------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2-p-3034.html)|

- **步骤 2.** 将 Grove-3-Axis_Digitial_Compass_v2.0 连接到 Grove-Base Shield 的 **I2C** 端口。
- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到电脑。

    <!--链接-->
<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
如果没有 Grove Base Shield，也可以直接将模块连接到 Seeeduino，如下所示。
:::

| Seeeduino_v4 | Grove-3-Axis_Digitial_Compass_v2.0 |
|--------------|---------------------------------------|
| 5V           | VCC                                   |
| GND          | GND                                   |
| SDA          | SDA                                   |
| SCL          | SCL                                   |

<div class="admonition warning">
<p class="admonition-title">注意</p>
请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，2 根线的 USB 数据线无法传输数据。如果不确定手头的数据线是否符合要求，可以点击 <a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html">这里</a> 购买。
</div>

#### 软件
**步骤 1.** 从 [Github](https://github.com/Seeed-Studio/Grove_3_Axis_Compass_V2.0_BMM150) 下载库文件。

**步骤 2.** 参考 [如何安装库文件](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库文件。

**步骤 3.** 创建一个新的 Arduino 草图，将以下代码粘贴到其中，或者直接通过路径打开代码：**File->Examples->Grove_3_Axis_Compass_V2.0_BMM150-master->compass**

以下是代码：
```c
/**
 * 此示例
*/

#include <Arduino.h>
#include <Wire.h>
// 库文件
#include "bmm150.h"
#include "bmm150_defs.h"

BMM150 bmm = BMM150();

void setup()
{
  Serial.begin(9600);

  if(bmm.initialize() == BMM150_E_ID_NOT_CONFORM) {
    Serial.println("无法读取芯片 ID！");
    while(1);
  } else {
    Serial.println("初始化完成！");
  }

}

void loop()
{
  bmm150_mag_data value;
  bmm.read_mag_data();

  value.x = bmm.raw_mag_data.raw_datax;
  value.y = bmm.raw_mag_data.raw_datay;
  value.z = bmm.raw_mag_data.raw_dataz;

  float xyHeading = atan2(value.x, value.y);
  float zxHeading = atan2(value.z, value.x);
  float heading = xyHeading;

  if(heading < 0)
    heading += 2*PI;
  if(heading > 2*PI)
    heading -= 2*PI;
  float headingDegrees = heading * 180/M_PI;
  float xyHeadingDegrees = xyHeading * 180 / M_PI;
  float zxHeadingDegrees = zxHeading * 180 / M_PI;

  Serial.print("方向：");
  Serial.println(headingDegrees);

  delay(100);
}
```

**步骤 4.** 上传代码。如果不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

**步骤 5.** 打开串口监视器以接收传感器数据。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/ardu_serial.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/ardu_serial.jpg" alt="pir" width={600} height="auto" /></p>

**步骤 6.** 在这 3 秒内，请按照下图所示在每个轴上倾斜并旋转指南针。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/calibrate.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/calibrate.jpg" alt="pir" width={600} height="auto" /></p>

校准时间可以通过函数 **calibrate(uint16_t timeout)** 的参数 timeout 来更改。

:::note
指南针需要校准，否则会得到不准确的数据！请确保已完成步骤 5。
:::

**步骤 7.** 最后，您将看到类似下图的内容。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/ardu_serial2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/ardu_serial2.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
方向值范围为 0º ~ 360º，此值对应 Y 轴。0º 表示 Y 轴指向北方，90º 表示 Y 轴指向西方，180º 表示 Y 轴指向南方，270º 表示 Y 轴指向东方。
:::
享受您的指南针吧！

### 使用 Raspberry Pi（配合 Grove Base Hat for Raspberry Pi）

#### 硬件

- **步骤 1.** 本项目所需物品：

| Raspberry Pi | Grove Base Hat for RasPi | Grove - 3-axis compass |
|--------------|------------------------------|----------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2-p-3034.html)|

- **步骤 2**. 将 Grove Base Hat 插入到树莓派中。
- **步骤 3**. 将三轴电子罗盘连接到 Base Hat 的 I2C 接口。
- **步骤 4**. 通过 USB 数据线将树莓派连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Compass_Hat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Compass_Hat.jpg" alt="pir" width={600} height="auto" /></p>

#### 软件

- **步骤 1**. 按照 [设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 的说明配置开发环境，并在树莓派上安装 grove.py。

- **步骤 2**. 执行以下命令运行代码。

```
virtualenv -p python3 env
source env/bin/activate
#输入命令
grove_3_axis_compass_bmm150
```

以下是 grove_3_axis_compass_bmm150.py 的代码。

```python
from __future__ import print_function
import time
import bmm150
import math


def main():
    device = bmm150.BMM150()  # 总线号默认为 1
    while (1):
        x, y, z = device.read_mag_data()

        heading_rads = math.atan2(x, y)

        heading_degrees = math.degrees(heading_rads)

        print("磁力计 x: {0:.2f}".format(x), end=' ')
        print(" y: {0:.2f}".format(y), end=' ')
        print(" z: {0:.2f}".format(z), end=' ')
        print(" uT")

        print('方向（Y 轴指向）：{0:.2f} 度'.format(heading_degrees))
        time.sleep(.250)

if __name__ == '__main__':
    main()
```

:::success
    如果一切正常，您将能够看到以下结果
:::
```python

pi@raspberrypi:~/grove.py/grove $ grove_3_axis_compass_bmm150
磁力计 x: -34.12  y: 36.71  z: -21.25  uT
方向（Y 轴指向）：317.10 度
磁力计 x: -34.49  y: 38.20  z: -16.32  uT
方向（Y 轴指向）：317.92 度
磁力计 x: -34.12  y: 38.20  z: -9.87  uT
方向（Y 轴指向）：318.23 度
磁力计 x: -32.64  y: 38.94  z: -5.69  uT
方向（Y 轴指向）：320.03 度
磁力计 x: -31.52  y: 38.20  z: -2.28  uT
方向（Y 轴指向）：320.47 度
磁力计 x: -29.67  y: 38.20  z: 0.38  uT
方向（Y 轴指向）：322.16 度
磁力计 x: -26.33  y: 38.20  z: 4.55  uT
方向（Y 轴指向）：325.42 度
^C退出程序
```

您可以通过按 ++ctrl+c++ 退出此程序。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/res/Eagle File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[库]** [Grove-3_Axis_Compass_V2.0 lib](https://github.com/Seeed-Studio/Grove_3_Axis_Compass_V2.0_BMM150)
- **[数据表]** [BST-BMM150-Datasheet](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/res/Datasheet.pdf)

- **[Zip]** [Grove-3轴数字罗盘 v2_Eagle 文件](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/res/Eagle File.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>