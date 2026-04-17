---
description: Grove - IMU 9DOF(lcm20600+AK09918)
title: Grove - IMU 9DOF(lcm20600+AK09918)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-IMU_9DOF-lcm20600+AK09918
sku: 101020585
last_update:
  date: 1/5/2023
  author: shuxu hu
createdAt: '2025-08-07'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/Grove-IMU_9DOF-lcm20600+AK09918/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/Main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/Main.jpg" alt="pir" width={600} height="auto" /></p>


Grove - IMU 9DOF (lcm20600+AK09918) 是一款 9 自由度的 [IMU](https://en.wikipedia.org/wiki/Inertial_measurement_unit)（惯性测量单元），它结合了陀螺仪、加速度计和电子罗盘。我们使用了两个芯片 LCM20600 和 AK09918 来实现这三种功能。

LCM20600 是一个 6 轴运动跟踪设备，结合了 3 轴陀螺仪和 3 轴加速度计。[陀螺仪](https://en.wikipedia.org/wiki/Gyroscope) 是一种用于测量或保持方向和角速度的设备，通常用于测量旋转和扭曲。[加速度计](https://en.wikipedia.org/wiki/Accelerometer) 是一种测量实际加速度的设备。

AK09918 是一款采用高灵敏度霍尔传感器技术的 3 轴 [电子罗盘](https://en.wikipedia.org/wiki/Magnetometer) IC。我们使用电子罗盘来测量磁力，它可以为我们提供方向信息。

顾名思义，只需使用这个小模块，您就可以测量 9 自由度：x/y/z 轴的角旋转、x/y/z 轴的加速度以及 x/y/z 轴的磁力。

多么神奇的模块！只需使用这个模块，就可以构建您自己的运动和方向系统😄



<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html)


## 特性

- 具有可编程 FSR 的 3 轴陀螺仪，范围为 ±250 dps、±500 dps、±1000 dps 和 ±2000 dps
- 具有可编程 FSR 的 3 轴加速度计，范围为 ±2g、±4g、±8g 和 ±16g
- 具有 0.15 μT/LSB（典型值）灵敏度的 3 轴电子罗盘
- 用户可编程中断
- 16 位 ADC 分辨率和用于加速度测量的可编程滤波器
- 磁测量的 16 位 ADC 分辨率
- 1 KB FIFO 缓冲区使应用处理器能够以突发方式读取数据（LCM20600）
- 嵌入式温度传感器
- 磁传感器溢出监控功能
- 内置振荡器作为内部时钟源



## 规格

|项目|值|
|---|---|
|工作电压|3.3V / 5V|
|工作温度|-30°C 至 +85°C|
|陀螺仪全量程范围|±250 dps、±500 dps、±1000 dps、±2000 dps|
|陀螺仪灵敏度比例因子|131 LSB/(dps)@±250 dps 65.5 LSB/(dps)@±500 dps 32.8 LSB/(dps)@±1000 dps 16.4 LSB/(dps)@±2000 dps|
|加速度计全量程范围|±2g、±4g、±8g、±16g|
|加速度计灵敏度比例因子|16384 LSB/g@±2g / 8192 LSB/g@±4g / 4096 LSB/g@±8g / 2048 LSB/g@±16g|
|磁传感器测量范围|±4912μT（典型值）|
|磁传感器灵敏度|0.15μT（典型值）|
|接口|I^2^C|
|I^2^C 地址|**LCM20600** / 0x69（默认） / 0x68（可选） / **AK09918** / 0x0C|

## 应用

- 智能手机和平板电脑
- 可穿戴传感器

## 硬件概述

### 引脚分布

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map_back.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map_back.jpg" alt="pir" width={600} height="auto" /></p>

:::danger
LCM20600 的默认 I2C 地址是 0x69，您可以将其更改为 0x68。中央焊盘连接到地址线，您可以通过切断线路并重新焊接来更改 I2C 地址。为了您和他人的安全，请小心使用可能使用的刀具或焊枪。
:::

### 原理图

**电源**
<!-- 
![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic.jpg" alt="pir" width={600} height="auto" /></p>

由于 LCM20600 的工作电压范围为 1.71V 至 3.45V，而 AK09918 的工作电压范围为 1.65V 至 1.95V，我们使用电源转换芯片 **XC6206P182MR** 为两个芯片提供稳定的 1.8V。

**双向电平转换电路**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic_1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic_1.jpg" alt="pir" width={600} height="auto" /></p>

这是一个典型的双向电平转换电路，用于连接 I^2^C 总线的两个不同电压部分。两个芯片的 I<sup>2</sup>C 总线使用 1.8V，如果 Arduino 的 I<sup>2</sup>C 总线使用 5V 或 3.3V，则需要此电路。在上面的原理图中，**Q1** 和 **Q2** 是 N-Channel MOSFET [CJ2102](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/CJ2102.pdf)，它们充当双向开关。为了更好地理解这一部分，您可以参考 [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)。

## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::


## 入门指南

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - IMU 9DOF |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank">立即购买</a>|

:::note
    **1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

    **2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了 Grove 数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

- **步骤 1.** 将 Grove - IMU 9DOF (lcm20600+AK09918) 连接到 Grove-Base Shield 的 **I^2^C** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/connect.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        如果没有 Grove Base Shield，我们也可以直接将此模块连接到 Seeeduino，如下所示。
:::

| Seeeduino     |  Grove - IMU 9DOF       |
|---------------|-------------------------|
| 5V            | 红色                   |
| GND           | 黑色                   |
| SDA           | 白色                   |
| SCL           | 黄色                   |

#### 软件

:::note
        如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Grove - IMU 9DOF (lcm20600+AK09918)](https://github.com/Seeed-Studio/Seeed_ICM20600_AK09918) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。打开示例代码，可以通过以下三种方式打开：
    1. 在 Arduino IDE 中直接通过路径打开：**File --> Examples --> Grove IMU 9DOF ICM20600 AK09918 --> compass**。
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/path.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/path.jpg" alt="pir" width={600} height="auto" /></p>

    2. 在电脑中打开，点击 **compass.ino** 文件，该文件位于 **XXXX\Arduino\libraries\Seeed_ICM20600_AK09918-master\examples\compass** 文件夹中，**XXXX** 是您安装 Arduino IDE 的位置。
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/path_1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/path_1.jpg" alt="pir" width={600} height="auto" /></p>

    3. 或者，您可以直接点击代码块右上角的图标 
    <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>将以下代码复制到 Arduino IDE 的新草图中。

```cpp
#include "AK09918.h"
#include "ICM20600.h"
#include <Wire.h>

AK09918_err_type_t err;
int32_t x, y, z;
AK09918 ak09918;
ICM20600 icm20600(true);
int16_t acc_x, acc_y, acc_z;
int32_t offset_x, offset_y, offset_z;
double roll, pitch;
// 在您的位置查找磁偏角
// http://www.magnetic-declination.com/
double declination_shenzhen = -2.2;

void setup()
{
    // 加入 I2C 总线（I2Cdev 库不会自动完成此操作）
    Wire.begin();

    err = ak09918.initialize();
    icm20600.initialize();
    ak09918.switchMode(AK09918_POWER_DOWN);
    ak09918.switchMode(AK09918_CONTINUOUS_100HZ);
    Serial.begin(9600);

    err = ak09918.isDataReady();
    while (err != AK09918_ERR_OK) 
    {
        Serial.println("等待传感器");
        delay(100);
        err = ak09918.isDataReady();
    }

    Serial.println("2 秒后开始 8 字形校准。");
    delay(2000);
    calibrate(10000, &offset_x, &offset_y, &offset_z);
    Serial.println("");
}

void loop()
{
    // 获取加速度
    acc_x = icm20600.getAccelerationX();
    acc_y = icm20600.getAccelerationY();
    acc_z = icm20600.getAccelerationZ();

    Serial.print("A:  ");
    Serial.print(acc_x);
    Serial.print(",  ");
    Serial.print(acc_y);
    Serial.print(",  ");
    Serial.print(acc_z);
    Serial.println(" mg");

    Serial.print("G:  ");
    Serial.print(icm20600.getGyroscopeX());
    Serial.print(",  ");
    Serial.print(icm20600.getGyroscopeY());
    Serial.print(",  ");
    Serial.print(icm20600.getGyroscopeZ());
    Serial.println(" dps");

    ak09918.getData(&x, &y, &z);
    x = x - offset_x;
    y = y - offset_y;
    z = z - offset_z;

    Serial.print("M:  ");
    Serial.print(x);
    Serial.print(",  ");
    Serial.print(y);
    Serial.print(",  ");
    Serial.print(z);
    Serial.println(" uT");

    // 滚转/俯仰角（弧度）
    roll = atan2((float)acc_y, (float)acc_z);
    pitch = atan2(-(float)acc_x, sqrt((float)acc_y*acc_y+(float)acc_z*acc_z));
    Serial.print("滚转角: ");
    Serial.println(roll*57.3);
    Serial.print("俯仰角: ");
    Serial.println(pitch*57.3);

    double Xheading = x * cos(pitch) + y * sin(roll) * sin(pitch) + z * cos(roll) * sin(pitch);
    double Yheading = y * cos(roll) - z * sin(pitch);
    

    double heading = 180 + 57.3*atan2(Yheading, Xheading) + declination_shenzhen;

    Serial.print("航向角: ");
    Serial.println(heading);
    Serial.println("--------------------------------");
  
    delay(500);
    
}

void calibrate(uint32_t timeout, int32_t *offsetx, int32_t *offsety, int32_t*offsetz)
{
  int32_t value_x_min = 0;
  int32_t value_x_max = 0;
  int32_t value_y_min = 0;
  int32_t value_y_max = 0;
  int32_t value_z_min = 0;
  int32_t value_z_max = 0;
  uint32_t timeStart = 0;

  ak09918.getData(&x, &y, &z);

  value_x_min = x;
  value_x_max = x;
  value_y_min = y;
  value_y_max = y;
  value_z_min = z;
  value_z_max = z;
  delay(100);

  timeStart = millis();
  
  while((millis() - timeStart) < timeout)
  {
    ak09918.getData(&x, &y, &z);
    
    /* 更新 x 轴最大/最小值 */
    if(value_x_min > x)
    {
      value_x_min = x;
      // Serial.print("更新 value_x_min: ");
      // Serial.println(value_x_min);

    } 
    else if(value_x_max < x)
    {
      value_x_max = x;
      // Serial.print("更新 value_x_max: ");
      // Serial.println(value_x_max);
    }

    /* 更新 y 轴最大/最小值 */
    if(value_y_min > y)
    {
      value_y_min = y;
      // Serial.print("更新 value_y_min: ");
      // Serial.println(value_y_min);

    } 
    else if(value_y_max < y)
    {
      value_y_max = y;
      // Serial.print("更新 value_y_max: ");
      // Serial.println(value_y_max);
    }

    /* 更新 z 轴最大/最小值 */
    if(value_z_min > z)
    {
      value_z_min = z;
      // Serial.print("更新 value_z_min: ");
      // Serial.println(value_z_min);

    } 
    else if(value_z_max < z)
    {
      value_z_max = z;
      // Serial.print("更新 value_z_max: ");
      // Serial.println(value_z_max);
    }
    
    Serial.print(".");
    delay(100);

  }

  *offsetx = value_x_min + (value_x_max - value_x_min)/2;
  *offsety = value_y_min + (value_y_max - value_y_min)/2;
  *offsetz = value_z_min + (value_z_max - value_z_min)/2;
}
```

:::note
库中包含3个示例：  
**test_6axis**  
> 此示例展示如何从 ICM20600 获取陀螺仪和加速度数据。  

**test_magnet**  
> 此示例展示如何从 AK09918 获取磁力数据。  

**compass**  
> 此示例获取磁力数据和加速度数据，用于计算俯仰角和横滚角，并制作一个指南针应用。
:::

- **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 打开 Arduino IDE 的 **串口监视器**，点击 **工具->串口监视器**，或者同时按下 ++ctrl+shift+m++ 键。将波特率设置为 **9600**。

:::success
如果一切正常，当您打开串口监视器时，会弹出提示——*2秒后开始进行8字校准。* 这意味着为了校准此模块，您需要移动它并在空中画出数字8的轨迹。当 "......." 出现时，您可以开始校准。
:::

```cpp
2秒后开始进行8字校准。
.......................................................................
A:  -362,  -205,  738 mg
G:  -45,  12,  -1 dps
M:  -6,  -23,  -33 uT
Roll: -15.53
Pitch: 25.30
Heading: 23.99
--------------------------------
A:  -269,  583,  61 mg
G:  102,  377,  -2 dps
M:  18,  -21,  -18 uT
Roll: 84.03
Pitch: 24.65
Heading: 215.58
--------------------------------
A:  -495,  229,  37 mg
G:  -43,  -231,  201 dps
M:  7,  -30,  6 uT
Roll: 80.83
Pitch: 64.90
Heading: 21.76
--------------------------------

```

:::note
如您所见，指南针示例的结果包括三个参数：Roll（横滚角）、Pitch（俯仰角）和 Heading（航向角）。这些是 **[欧拉角](https://en.wikipedia.org/wiki/Euler_angles)** 的术语（点击了解更多信息）。
:::

#### 功能表

|功能|描述|
|---|---|
|**ICM20600**|| 
|initialize()|初始化芯片 ICM20600，默认设置：陀螺仪的测量范围为 ±2000 dps / 加速度计的测量范围为 ±16g|
|setGyroScaleRange(gyro_scale_type_t range)|初始化后，您可以设置陀螺仪的测量范围以满足您的需求，参数 gyro_scale_type_t range 的选项包括：**RANGE_250_DPS** / **RANGE_500_DPS** / **RANGE_1K_DPS** / **RANGE_2K_DPS**  / 例如： **icm20600.setGyroScaleRange(RANGE_1K_DPS);** 这行代码将陀螺仪的测量范围更改为 ±1000 dps|
|setAccScaleRange(acc_scale_type_t range)|初始化后，您可以设置加速度计的测量范围以满足您的需求，参数 acc_scale_type_t range 的选项包括：**RANGE_2G** / **RANGE_4G** / **RANGE_8G** / **RANGE_16G**  / 例如： **icm20600.setAccScaleRange(RANGE_8G);** 这行代码将加速度计的测量范围更改为 ±8g|
|getGyroscope(int16_t* x, int16_t* y, int16_t* z))|您可以使用此函数同时获取陀螺仪 X/Y/Z 三轴数据，数据单位为 **dps**|
|getGyroscopeX(void)  getGyroscopeY(void)  getGyroscopeZ(void)|或者，您可以分别使用这些函数获取陀螺仪 X/Y/Z 三轴数据，数据单位为 **dps** |
|getRawGyroscopeX(void)  getRawGyroscopeY(void)  getRawGyroscopeZ(void)|这些函数直接从 ICM20600 的寄存器中获取原始数据，而不将数据单位转换为 **dps**|
|getAcceleration(int16_t* x, int16_t* y, int16_t* z)|您可以使用此函数同时获取 X/Y/Z 三轴加速度，数据单位为 **mg**|
|getAccelerationX(void)  getAccelerationY(void)  getAccelerationZ(void)|或者，您可以分别使用这些函数获取 X/Y/Z 三轴加速度，数据单位为 **mg** |
|getRawAccelerationX(void)  getRawAccelerationY(void)  getRawAccelerationZ(void)|这些函数直接从 ICM20600 的寄存器中获取原始数据，而不将数据单位转换为 **mg**|
|getTemperature(void)|您可以使用此函数获取温度|
|**AK09918**||
|getData(int32_t *axis_x, int32_t *axis_y, int32_t *axis_z)  |您可以使用此函数获取三轴的磁力数据。|

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/Grove%20-%20IMU%209DOF%20(ICM20600%20%26%20AK09918).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源

- **[Zip]** [Grove - IMU 9DOF (lcm20600+AK09918) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/Grove%20-%20IMU%209DOF%20(ICM20600%20%26%20AK09918).zip)

- **[Zip]** [Seeed ICM20600+AK09918 库](https://github.com/Seeed-Studio/Seeed_ICM20600_AK09918/archive/master.zip)

- **[PDF]** [ICM-20600 数据手册](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/ICM-20600.pdf)

- **[PDF]** [AK09918 数据手册](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/AK09918.pdf)

- **[PDF]** [CJ2102 数据手册](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/CJ2102.pdf)



## 项目

这是该产品的介绍视频，包含简单演示，您可以尝试观看。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/oFmvKxoZIuw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>


## 技术支持与产品讨论
感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>