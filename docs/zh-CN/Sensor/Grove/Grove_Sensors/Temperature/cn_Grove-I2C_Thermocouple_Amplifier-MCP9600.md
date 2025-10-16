---
description: Grove - I2C 热电偶放大器 (MCP9600)
title: Grove - I2C 热电偶放大器 (MCP9600)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-I2C_Thermocouple_Amplifier-MCP9600
last_update:
  date: 1/4/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Main.jpg" /></div>

Grove - I2C 热电偶放大器 (MCP9600) 是一个集成了冷端补偿和 I2C 通信协议的热电偶数字转换器。该模块设计用于与 K 型热电偶配合使用。热电偶比热敏电阻具有更大的测量范围。例如，我们网站上的这款 [K 型热电偶](https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html) 的测量范围为 -50℃ 到 +600℃。

我们还为该模块提供了报警功能，您可以使用可编程报警引脚为控制器提供中断信号。

再次说明，该模块无法单独工作，必须与 K 型热电偶配合使用，如果您没有热电偶，可以考虑我们商城中的 [热电偶温度传感器 K 型-1M](https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html)。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-I2C-Thermocouple-Amplifier-%28MCP9600%29-p-3199.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 产品版本  | 变更                                                                                               | 发布日期 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - I2C 热电偶放大器 (MCP9600) | 初始版本                                                                                               | 2018年8月      |

## 特性

- 集成冷端补偿
- 支持的类型（由 NIST ITS-90 指定）：K、J、T、N、S、E、B 和 R 型
- 四个可编程温度报警输出：
  - 监控热端或冷端温度
  - 检测温度上升或下降
  - 高达 255°C 的可编程滞后
- 可编程数字温度滤波器
- 低功耗

:::note
Grove - I2C 热电偶放大器 (MCP9600) 在硬件上确实支持 K、J、T、N、S、E、B 和 R 型，但是目前我们的库除了 K 型热电偶外不支持任何其他类型的热电偶。
:::

## 规格参数

|项目|值|
|---|---|
|工作电压|3.3V/5V|
|环境温度|-40℃ ~ +125℃|
|存储温度|-65℃ ~ +150℃|
|最大结温|+150℃|
|热端精度|±1.5°C（最大值）|
|测量分辨率|热端和冷端：0.0625°C（典型值）|
|接口|I2C|
|I2C 地址|0x60（默认）/ 0x67（可选）|
|尺寸|长：40mm 宽：20mm 高：18mm|
|重量|4.8g|
|包装尺寸|长：130mm 宽：85mm 高：20mm|
|毛重|11g|

## 应用

- 石化热管理
- 手持式测量设备
- 工业设备热管理
- 烤箱
- 工业发动机热监控
- 温度检测架

## 硬件概述

### 引脚图

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Pin_map.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Pin_map_back.jpg" /></div>

### 原理图

**电源**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/schematic_1.jpg" /></div>

MCP9600的工作电压范围是2.7V ~ 5.5V，我们使用电源转换芯片*XC6206P332MR-G*为MCP9600提供稳定的3.3V电源。

**输入插座**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/schematic.jpg" /></div>

由于涉及的信号电平很小，我们采取了很多措施来过滤噪声。

- **1--L1,L2** 我们使用长达1米的热电偶。这样的长导线可以被视为天线，会接收空间电场干扰并产生高频噪声。因此我们使用两个电感来过滤高频噪声。

- **2--C1** 芯片制造商强烈建议添加一个100nF陶瓷表面贴装差分电容器，放置在T+和T-引脚之间，以过滤热电偶线路上的噪声。

- **3--D1** 我们使用SZNUP2105LT3G双向电压抑制器来保护此模块免受ESD（静电放电）的影响。

**双向电平转换电路**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/schematic_2.jpg" /></div>

这是一个典型的双向电平转换电路，用于连接I2C总线的两个不同电压部分。该传感器的I<sup>2</sup>C总线使用3.3V，如果Arduino的I<sup>2</sup>C总线使用5V，则需要此电路。在上面的原理图中，**Q1**和**Q5**是N沟道MOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)，充当双向开关。为了更好地理解这部分，您可以参考[AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    上述提到的支持平台是/是模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 开始使用

### 与Arduino一起使用

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - I2C热电偶放大器 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank">立即购买</a>|

:::note
**1** 请轻柔地插入USB线缆，否则可能会损坏端口。请使用内部有4根线的USB线缆，2根线的线缆无法传输数据。如果您不确定您的线缆规格，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买

**2** 每个Grove模块在购买时都会附带一根Grove线缆。如果您丢失了Grove线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

- **步骤1.** 将Grove - I2C热电偶放大器(MCP9600)连接到Grove-Base Shield的**I2C**端口。

- **步骤2.** 将Grove - Base Shield插入Seeeduino。

- **步骤3.** 通过USB线缆将Seeeduino连接到PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/connect.jpg" /></div>

:::note
如果我们没有Grove Base Shield，我们也可以按照以下方式直接将此模块连接到Seeeduino。
:::

| Seeeduino     |  Grove线缆 |Grove - I2C热电偶放大器       |
|---------------|-------------------------|--------|
| GND            |     黑色               |GND |
| 5V / 3.3V          |   红色                    | VCC |
| SDA           | 白色                   |  SDA  |
| SCL           | 黄色                  |  SCL  |

#### 软件

:::note
        如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤1.** 从Github下载[Seeed_MCP9600](https://github.com/Seeed-Studio/Seeed_MCP9600)库。

- **步骤2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)来为Arduino安装库。

- **步骤3.** 重启Arduino IDE。打开示例，您可以通过以下三种方式打开：
    1. 在Arduino IDE中通过路径直接打开：**文件 --> 示例 --> Grove Temperature sensor MCP9600 --> MCP9600_4channel_INT_demo**。
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Path.jpg" /></div>

    2. 在您的计算机中点击**MCP9600_4channel_INT_demo.ino**打开，您可以在文件夹**XXXX\Arduino\libraries\Seeed_MCP9600-master\examples\MCP9600_4channel_INT_demo**中找到它，**XXXX**是您安装Arduino IDE的位置。
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Path_1.jpg" /></div>

    3. 或者，您可以直接点击代码块右上角的图标![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)将以下代码复制到Arduino IDE的新草图中。

```cpp
#include "Seeed_MCP9600.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif

MCP9600 sensor;

/**@brief 中断配置。
 * 
 * 
 * */
err_t sensor_INT_config()
{
    err_t ret=NO_ERROR;
    CHECK_RESULT(ret,sensor.set_filt_coefficients(FILT_MID));

    for(int i=0;i<4;i++)
    {
        /*将温度数值转换为16位数据*/
        CHECK_RESULT(ret,sensor.set_alert_limit(i,sensor.covert_temp_to_reg_form(28+i)));
        /*设置滞后。例如，设置滞后为2℃，当中断限制为30℃时，当温度超过限制时将产生中断，
        中断标志将保持，直到温度低于30-2(限制-滞后) 28℃。 */
        CHECK_RESULT(ret,sensor.set_alert_hys(i,2)); 

         /*设置中断产生时引脚的状态*/
        CHECK_RESULT(ret,sensor.set_alert_bit(i,ACTIVE_LOW));

        CHECK_RESULT(ret,sensor.clear_int_flag(i));

        /*默认为比较器模式*/
        CHECK_RESULT(ret,sensor.set_alert_mode_bit(i,COMPARE_MODE));

        /*设置报警引脚启用。*/
        CHECK_RESULT(ret,sensor.set_alert_enable(i,ENABLE));
       
        

    }    

    /*设备配置*/
    CHECK_RESULT(ret,sensor.set_cold_junc_resolution(COLD_JUNC_RESOLUTION_0_25));
    CHECK_RESULT(ret,sensor.set_ADC_meas_resolution(ADC_14BIT_RESOLUTION));
    CHECK_RESULT(ret,sensor.set_burst_mode_samp(BURST_32_SAMPLE));
    CHECK_RESULT(ret,sensor.set_sensor_mode(NORMAL_OPERATION));

    return NO_ERROR;
}


err_t get_temperature(float *value)
{
    err_t ret=NO_ERROR;
    float hot_junc=0;
    float junc_delta=0;
    float cold_junc=0;
    bool stat=true;
    
    CHECK_RESULT(ret,sensor.check_data_update(&stat));
    if(stat)
    {
        CHECK_RESULT(ret,sensor.read_hot_junc(&hot_junc));
        CHECK_RESULT(ret,sensor.read_junc_temp_delta(&junc_delta));
        
        CHECK_RESULT(ret,sensor.read_cold_junc(&cold_junc));
        
        *value=hot_junc;
    }
    else
    {
        SERIAL.println("数据未就绪!!");
    }

    return NO_ERROR;
}


void setup()
{
    SERIAL.begin(115200);
    delay(10);
    SERIAL.println("串口启动!!");
    if(sensor.init(THER_TYPE_K))
    {
        SERIAL.println("传感器初始化失败!!");
    }
    sensor_INT_config();
}



void loop()
{
    float temp=0;
    u8 byte=0;
    u8 stat=0;
 

    get_temperature(&temp);
    SERIAL.print("温度 ==============================>>");
    SERIAL.println(temp);

    sensor.read_INT_stat(&stat);

    SERIAL.println(" ");
    SERIAL.println(" ");

    delay(1000);
}
```

:::note
        库中有2个演示程序：  
**MCP9600_basic_demo.ino**
        >这个例子是温度传感器的基本使用示例，您需要轮询获取数据。  

**MCP9600_4channel_INT_demo.ino**  
        >传感器模块上有四个连接到报警引脚的报警焊盘。您可以通过调用我们提供的API来设置温度限制。当温度值超出限制时，报警引脚输出低电平。您可以将报警引脚连接到主机的中断引脚，以提高程序运行效率。
:::

- **步骤4.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤5.** 通过点击**工具-> 串口监视器**打开Arduino IDE的**串口监视器**。或者同时按下++ctrl+shift+m++键。将波特率设置为**115200**。

:::tip
如果一切正常，当您打开串口监视器时，您将看到温度值和报警信息。
:::

```cpp
serial start!!
version =4011

temperature ==============================>>25.81
 
 
temperature ==============================>>27.62
 
 
temperature ==============================>>29.37
channel 0generate interruption!!!
channel 1generate interruption!!!
 
 
temperature ==============================>>30.81
channel 0generate interruption!!!
channel 1generate interruption!!!
channel 2generate interruption!!!
 
 
temperature ==============================>>31.56
channel 0generate interruption!!!
channel 1generate interruption!!!
channel 2generate interruption!!!
channel 3generate interruption!!!


temperature ==============================>>28.56
channel 0generate interruption!!!
channel 1generate interruption!!!
channel 2generate interruption!!!


temperature ==============================>>27.33
channel 0generate interruption!!!
channel 1generate interruption!!!


temperature ==============================>>26.71
channel 0generate interruption!!!
```

#### 报警功能

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Function_ep.jpg" /></div>

如您所见，当温度上升和温度下降触发中断时存在滞后现象。例如，当温度上升时，当达到28℃时，报警引脚0将触发，而当温度下降时，限制点变为26℃。只有当温度低于26℃时，报警引脚0才会释放。

```
滞后 = 28℃-26℃ = 2℃
```

报警引脚1、报警引脚2和报警引脚3遵循相同的原理。您可以通过修改第23行和第26行来更改滞后值和限制。

```cpp
CHECK_RESULT(ret,sensor.set_alert_limit(i,sensor.covert_temp_to_reg_form(28+i)));

/*设置滞后。例如，设置滞后为2℃，当中断限制为30℃时，当温度超过限制时将产生中断，
中断标志将保持，直到温度低于30-2（限制-滞后）28℃。 */

CHECK_RESULT(ret,sensor.set_alert_hys(i,2)); 
```

使用参数**i**选择报警引脚号，参数**28**是限制值，至于滞后，我们使用函数**sensor.set_alert_hys(i,2)**。
参数**2**是滞后值。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/res/Grove%20-%20I2C%20Thermocouple%20Amplifier(MCP9600).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - I2C 热电偶放大器 (MCP9600) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/res/Grove%20-%20I2C%20Thermocouple%20Amplifier(MCP9600).zip)

- **[Zip]** [Seeed MCP9600 库](https://github.com/Seeed-Studio/Seeed_MCP9600/archive/master.zip)

- **[PDF]** [MCP9600 数据手册](https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/res/MCP9600.pdf)

## 项目

这是本产品的介绍视频，包含简单的演示，您可以尝试一下。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/3slfeHKSSCw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 传感器以及 8 合 1 气象站。为您下一个成功的工业项目尝试最新的 SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>