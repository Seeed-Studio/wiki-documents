---
description: Grove - 高精度气压计
title: Grove - 高精度气压计
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.webp
slug: /cn/Grove-Barometer-High-Accuracy
last_update:
  date: 4/22/2025
  author: carla guo
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.jpg" alt="pir" width={600} height="auto" /></p>

这款 Grove - 高精度气压计传感器采用 HP206F 高精度芯片，可检测气压、高度计和温度。它可以广泛测量范围为 300mbar~1200mbar 的压力，测量分辨率为 0.02mbar。
该芯片仅接受 1.8V 至 3.6V 的输入电压。然而，通过添加外部电路，该模块变得兼容 3.3V 和 5V。因此，它可以在 Arduino/Seeeduino 或 Seeeduino Stalker 上无需修改直接使用。它设计为通过 I2C 总线直接连接到微控制器。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Barometer-(High-Accuracy)-p-1865.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 立即购买 </font></span></strong></a>
</div>

## 特性

-   数字双线 (I2C) 接口
-   基于命令的读取，补偿（可选）
-   可编程事件和中断控制
-   全数据补偿
-   宽气压测量范围
-   灵活的供电电压范围
-   超低功耗
-   高度分辨率低至 0.01 米
-   包含温度测量
-   I2C 地址：0x76

:::note
    如果您想使用多个 I2C 设备，请参考 [软件 I2C](https://wiki.seeedstudio.com/cn/Arduino_Software_I2C_user_guide/)。
:::
:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)。
:::

## 应用场景

-   高精度移动高度计/气压计
-   工业压力和温度传感器系统
-   汽车系统
-   个人电子设备高度计
-   冒险和运动手表
-   医用气体控制系统
-   气象站设备
-   室内导航和地图辅助
-   供暖、通风、空调系统

## 规格

<div class="table-center">
<table align="center">
	<tr>
	    <th style={{width:300, height:'auto'}}>参数</th>
      <th style={{width:300, height:'auto'}}>描述</th>
	</tr>
  <tr>
    <td>供电电压</td>
    <td>1.8v~3.6v</td>
  </tr>
  <tr>
    <td>工作温度范围</td>
    <td>-40℃~85℃</td>
  </tr>
  <tr>
    <td>压力测量范围</td>
    <td>300mbar~1200mbar</td>
  </tr>
  <tr>
    <td>压力分辨率</td>
    <td>0.02mbar</td>
  </tr>
  <tr>
    <td>高度分辨率</td>
    <td>0.2m</td>
  </tr>
  <tr>
    <td>尺寸</td>
    <td>20.4 × 41.8 × 9.7 mm</td>
  </tr>
</table></div>

## 支持的平台

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户需要自行编写软件库。
:::

## 硬件概述
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/dimensions.jpg) -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/dimensions.jpg" style={{width:700, height:'auto'}}/></div>

## 入门指南

### 使用 Arduino

气压条件是预测天气变化和海拔高度的标准之一。以下是一个演示，展示如何从此 Grove - 高精度气压传感器读取气压数据。

#### 硬件

- **步骤 1.** 准备以下物品：

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeeduino V4.2</th>
			<th>Base Shield</th>
			<th>Grove-高精度气压传感器</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Base-Shield-V2.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Barometer-High-Accuracy.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

- **步骤 2.** 将 Grove-高精度气压传感器连接到 Grove-Base Shield 的 **I2C** 端口。
- **步骤 3.** 将 Grove-Base Shield 插入 Seeeduino。
- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<!--link-->
<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
	如果没有 Grove Base Shield，我们也可以直接将此模块连接到 Seeeduino，如下所示。
:::
<!--I2C-->
| Seeeduino V4 | Grove-高精度气压传感器 |
|--------------|--------------------------|
| 5V           | VCC                      |
| GND          | GND                      |
| SDA          | SDA                      |
| SCL          | SCL                      |

#### 软件

**步骤 1.** 从 [Github](https://github.com/Seeed-Studio/Grove_Barometer_HP20x) 下载库文件。

**步骤 2.** 参考 [如何安装库文件](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库文件。

**步骤 3.** 创建一个新的 Arduino 草图并将以下代码粘贴到其中，或者通过路径直接打开代码：文件 -> 示例 -> Grove barometer HP20x -> HP20x_demo。

以下是代码：

```c
/*
* 示例名称  : HP20x_dev 示例
* 用途      : I2C 精密气压计和高度计 [HP206F hopeRF]
* 作者      : Seeed Studio 的 Oliver Wang
* 版本      : V0.2
* 更新日志  : 添加卡尔曼滤波器 2014/04/04
               更新芯片至 HP206F 2025/04/07
*/

#include <HP20x_dev.h>
#include <KalmanFilter.h>

#include "Arduino.h"
#include "Wire.h"

unsigned char ret = 0;

    /* 实例化 */
KalmanFilter t_filter;    // 温度滤波器
KalmanFilter p_filter;    // 气压滤波器
KalmanFilter a_filter;    // 高度滤波器

void setup()
{
    Serial.begin(9600);        // 启动串口输出

    Serial.println("****HP20x_dev 示例 by Seeed Studio****\n");
    Serial.println("计算公式: H = [8.5(101325-P)]/100 \n");
      /* 上电，延迟 150ms，直到电压稳定 */
    delay(150);
      /* 重置 HP20x_dev */
    HP20x.begin();
    delay(100);

      /* 检测 HP20x_dev 是否可用 */
    ret = HP20x.isAvailable();
    if(OK_HP20X_DEV == ret)
    {
        Serial.println("HP20x_dev 可用。\n");
    }
    else
    {
        Serial.println("HP20x_dev 不可用。\n");
    }
}

void loop()
{
    char display[40];
    if(OK_HP20X_DEV == ret)
    {
        Serial.println("------------------\n");
        long Temper = HP20x.ReadTemperature();
        Serial.println("温度:");
        float t = Temper/100.0;
        Serial.print(t);
        Serial.println("C.\n");
        Serial.println("滤波:");
        Serial.print(t_filter.Filter(t));
        Serial.println("C.\n");

        long Pressure = HP20x.ReadPressure();
        Serial.println("气压:");
        t = Pressure/100.0;
        Serial.print(t);
        Serial.println("hPa.\n");
        Serial.println("滤波:");
        Serial.print(p_filter.Filter(t));
        Serial.println("hPa\n");

        long Altitude = HP20x.ReadAltitude();
        Serial.println("高度:");
        t = Altitude/100.0;
        Serial.print(t);
        Serial.println("m.\n");
        Serial.println("滤波:");
        Serial.print(a_filter.Filter(t));
        Serial.println("m.\n");
        Serial.println("------------------\n");
        delay(1000);
    }
}
```

**步骤 4.** 打开串口监视器以接收传感器数据，包括温度、气压值、相对大气压和高度。

### 使用 Raspberry Pi

#### 硬件

- **步骤 1.** 准备以下物品：

<div class="table-center">
	<table align="center">
		<tr>
			<th>Raspberry Pi</th>
			<th>Grove Base Hat for Raspberry Pi</th>
			<th>Grove-高精度气压传感器</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Barometer-High-Accuracy.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

- **步骤 2.** 将 Grove Base Hat 插入 Raspberry Pi。
- **步骤 3.** 将 Grove-Barometer-High-Accuracy 连接到 Grove Base Hat 的 **I2C** 接口。
- **步骤 4.** 使用 USB 数据线将 Raspberry Pi 连接到电脑。

<!-- ![with_rpi](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_rpi.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_rpi.jpg" alt="pir" width={600} height="auto" /></p>

#### 软件

- **步骤 1.** 按照 [设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#install-dependencies) 配置开发环境并安装依赖。

- **步骤 2.** 克隆 Github 仓库。

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
sudo pip3 install .
```

- **步骤 3.** 执行以下命令以使用此传感器：

```bash
sudo apt install python3-virtualenv
virtualenv -p python3 env
source env/bin/activate
cd ./grove.py/grove
python3 grove_i2c_hp206f_driver.py
```

以下是代码：

```python
#!/usr/bin/env python
#
# 用于与 Grove - HP20x 传感器交互的库（用于测量温度、压力和海拔）
#
# 这是用于连接 Raspberry Pi 的 Grove Base Hat 的库。
#

'''
## 许可证

MIT 许可证 (MIT)

Grove Base Hat for the Raspberry Pi，用于连接 Grove 传感器。
版权所有 (C) [您的公司名称或相关方]

特此免费授予任何获得本软件及相关文档副本的人使用本软件的权利，
包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售本软件的副本，
并允许获得本软件的人这样做，条件是：

上述版权声明和本许可声明应包含在本软件的所有副本或重要部分中。

本软件按“原样”提供，不提供任何形式的明示或暗示担保，包括但不限于适销性、
适合特定用途和非侵权的担保。在任何情况下，作者或版权持有人均不对因使用本软件或
与本软件相关的其他交易而产生的任何索赔、损害或其他责任负责，无论是合同纠纷、
侵权行为或其他原因。
'''

import time
from grove.i2c import Bus

# 用于与 HP20x 传感器交互的类
class HP20x:
    def __init__(self):
        # 初始化 Raspberry Pi 上的 I2C 总线（总线 1）
        self.bus = Bus()
        # HP206F 传感器的 I2C 地址，可能需要根据实际情况调整
        self.address = 0x76

        # CSB PIN 为 VDD 电平时的 I2C 设备 ID（地址为 0x76）
        self.HP20X_I2C_DEV_ID = (0xEC) >> 1
        # CSB PIN 为 GND 电平时的 I2C 设备 ID（地址为 0x77）
        self.HP20X_I2C_DEV_ID2 = (0XEE) >> 1
        # HP20x 传感器的软复位命令
        self.HP20X_SOFT_RST = 0x06
        # HP20x 传感器的写转换命令
        self.HP20X_WR_CONVERT_CMD = 0x40
        # 不同的过采样率 (OSR) 配置
        self.HP20X_CONVERT_OSR4096 = 0 << 2
        self.HP20X_CONVERT_OSR2048 = 1 << 2
        self.HP20X_CONVERT_OSR1024 = 2 << 2
        self.HP20X_CONVERT_OSR512 = 3 << 2
        self.HP20X_CONVERT_OSR256 = 4 << 2
        self.HP20X_CONVERT_OSR128 = 5 << 2

        # 读取压力、海拔、温度等的命令
        self.HP20X_READ_P = 0x30  # 读取压力命令
        self.HP20X_READ_A = 0x31  # 读取海拔命令
        self.HP20X_READ_T = 0x32  # 读取温度命令
        self.HP20X_READ_PT = 0x10  # 读取压力和温度命令
        self.HP20X_READ_AT = 0x11  # 读取海拔和温度命令
        self.HP20X_READ_CAL = 0X28  # RE-CAL ANALOG 命令

        # HP20x 传感器的写寄存器模式
        self.HP20X_WR_REG_MODE = 0xC0
        # HP20x 传感器的读寄存器模式
        self.HP20X_RD_REG_MODE = 0x80

        # 设置过采样率配置
        self.OSR_CFG = self.HP20X_CONVERT_OSR1024
        # 与过采样率对应的转换时间（以毫秒为单位）
        self.OSR_ConvertTime = 25

    def begin(self):
        # 向 HP20x 传感器发送软复位命令
        self.HP20X_IIC_WriteCmd(self.HP20X_SOFT_RST)
        # 等待 0.1 秒以确保复位操作完成
        time.sleep(0.1)

    def isAvailable(self):
        # 通过读取地址 0x0F 的寄存器检查 HP20x 传感器是否可用
        return self.HP20X_IIC_ReadReg(0x0F)

    def ReadTemperature(self):
        # 发送指定过采样率配置的转换命令
        self.HP20X_IIC_WriteCmd(self.HP20X_WR_CONVERT_CMD | self.OSR_CFG)
        # 等待转换时间（转换为秒）
        time.sleep(self.OSR_ConvertTime / 1000.0)
        # 从传感器读取 3 字节的原始温度数据
        t_raw = self.bus.read_i2c_block_data(self.address, self.HP20X_READ_T, 3)
        # 将 3 字节数据组合成一个值
        t = t_raw[0] << 16 | t_raw[1] << 8 | t_raw[2]
        # 使用二进制补码处理负值
        if t & 0x800000:
            t |= 0xff000000
            us = (1 << 32)
            t = -1 * (us - t)
        # 返回以摄氏度为单位的温度值（除以 100）
        return t / 100.0

    def ReadPressure(self):
        # 发送指定过采样率配置的转换命令
        self.HP20X_IIC_WriteCmd(self.HP20X_WR_CONVERT_CMD | self.OSR_CFG)
        # 等待转换时间（转换为秒）
        time.sleep(self.OSR_ConvertTime / 1000.0)
        # 从传感器读取 3 字节的原始压力数据
        p_raw = self.bus.read_i2c_block_data(self.address, self.HP20X_READ_P, 3)
        # 将 3 字节数据组合成一个值
        p = p_raw[0] << 16 | p_raw[1] << 8 | p_raw[2]
        # 使用二进制补码处理负值
        if p & 0x800000:
            p |= 0xff000000
        # 返回以百帕斯卡为单位的压力值（除以 100）
        return p / 100.0

    def ReadAltitude(self):
        # 发送指定过采样率配置的转换命令
        self.HP20X_IIC_WriteCmd(self.HP20X_WR_CONVERT_CMD | self.OSR_CFG)
        # 等待转换时间（转换为秒）
        time.sleep(self.OSR_ConvertTime / 1000.0)
        # 从传感器读取 3 字节的原始海拔数据
        a_raw = self.bus.read_i2c_block_data(self.address, self.HP20X_READ_A, 3)
        # 将 3 字节数据组合成一个值
        a = a_raw[0] << 16 | a_raw[1] << 8 | a_raw[2]
        # 使用二进制补码处理负值
        if a & 0x800000:
            a |= 0xff000000
            us = (1 << 32)
            a = -1 * (us - a)
        # 返回以米为单位的海拔值（除以 100）
        return a / 100.0

    def HP20X_IIC_WriteCmd(self, uCmd):
        # 向指定的 I2C 地址写入命令字节
        self.bus.write_byte(self.address, uCmd)

    def HP20X_IIC_ReadReg(self, bReg):
        # 从指定的寄存器地址读取一个字节
        return self.bus.read_byte_data(self.address, bReg | self.HP20X_RD_REG_MODE)


# 表示卡尔曼滤波器的类
class KalmanFilter:
    def __init__(self):
        # 过程噪声协方差
        self.q = 0.01
        # 测量噪声协方差
        self.r = 0.1
        # 初始估计值
        self.x = 0
        # 初始估计误差协方差
        self.p = 1
        # 初始卡尔曼增益
        self.k = 0

    def Filter(self, measurement):
        # 预测步骤：更新估计误差协方差
        self.p = self.p + self.q
        # 更新步骤：计算卡尔曼增益
        self.k = self.p / (self.p + self.r)
        # 更新步骤：根据测量值更新估计值
        self.x = self.x + self.k * (measurement - self.x)
        # 更新步骤：更新估计误差协方差
        self.p = (1 - self.k) * self.p
        # 返回滤波后的估计值
        return self.x


# 温度数据的卡尔曼滤波器
t_filter = KalmanFilter()
# 压力数据的卡尔曼滤波器
p_filter = KalmanFilter()
# 海拔数据的卡尔曼滤波器
a_filter = KalmanFilter()

# 创建 HP20x 传感器的实例
hp20x = HP20x()


# 模拟设置过程的函数
def setup():
    print("****HP20x_dev 演示由 Seeed Studio 提供****\n")
    print("计算公式: H = [8.5(101325-P)]/100 \n")
    # 上电后等待 0.15 秒以稳定电压
    time.sleep(0.15)
    # 初始化 HP20x 传感器
    hp20x.begin()
    # 等待 0.1 秒
    time.sleep(0.1)
    # 检查 HP20x 传感器是否可用
    ret = hp20x.isAvailable()
    if ret:
        print("HP20x_dev 可用。\n")
    else:
        print("HP20x_dev 不可用。\n")
    return ret


# 模拟循环过程的函数
def loop(ret):
    if ret:
        while True:
            print("------------------\n")
            # 从 HP20x 传感器读取温度值
            temper = hp20x.ReadTemperature()
            print("温度:")
            print(f"{temper}C.\n")
            print("滤波后:")
            # 对温度值应用卡尔曼滤波器
            print(f"{t_filter.Filter(temper)}C.\n")

            # 从 HP20x 传感器读取压力值
            pressure = hp20x.ReadPressure()
            print("压力:")
            print(f"{pressure}hPa.\n")
            print("滤波后:")
            # 对压力值应用卡尔曼滤波器
            print(f"{p_filter.Filter(pressure)}hPa\n")

            # 从 HP20x 传感器读取海拔值
            altitude = hp20x.ReadAltitude()
            print("海拔:")
            print(f"{altitude}m.\n")
            print("滤波后:")
            # 对海拔值应用卡尔曼滤波器
            print(f"{a_filter.Filter(altitude)}m.\n")
            print("------------------\n")
            # 等待 1 秒后进行下一次读取
            time.sleep(1)


if __name__ == "__main__":
    # 执行设置过程
    ret = setup()
    # 如果传感器可用，则开始循环过程
    loop(ret)

```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/res/Grove_Barometer_High_Accuracy_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源

-  **[Eagle]** [Grove_Barometer_High-Accuracy_v1.0_sch_pcb Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/res/Grove_Barometer_High_Accuracy_ v1.0_sch_pcb.zip)
-  **[Datasheet]** [HP206F 数据手册](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/res/HP206F_Datasheet.pdf)
-  **[Library]** [Grove_Barometer_HP20x Arduino 库的 Github 仓库](https://github.com/Carla-Guo/Grove_Barometer_HP20x)

## 项目

**智能农作物**：在传统农业中实现物联网！
我们的使命是与自然和谐共处，通过 Helium 的物联网技术设计和实施技术及监测方法。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

## 技术支持与产品讨论

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 可升级为工业传感器
通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转变为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供使用 SenseCAP 系列坚固的 [工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) 扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温度和湿度、光强度、二氧化碳、EC，以及一体化 8 合 1 气象站传感器。尝试最新的 SenseCAP S210x，为您的下一个工业项目取得成功。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
