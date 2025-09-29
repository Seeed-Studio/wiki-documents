---
description: 配置 12V RS485 传感器
title: 配置 12V RS485 传感器
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/f/i/first_page_all-22.jpg
slug: /cn/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_12V_RS485_Sensor_for_S2100_Data_Logger
keywords: [SenseCAP data logger, data logger, collector]
last_update:
  date: 08/17/2024
  author: Yvonne
---

# S2100 和 12V RS485 传感器入门指南

本指南将帮助您开始使用 S2100 和 12V RS485 传感器。完成本指南后，您将了解如何在未来连接自己的定制传感器。

## 步骤 1：准备必要物品

- 数据记录器
- ONE 紧凑型气象站传感器（作为示例）
- 接线盒
- M12 电缆
- 8 芯线（40cm）
- 十字螺丝刀（十字槽 No.2）
- SenseCAP Mate 应用程序

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/2.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

## 步骤 2：连接传感器

按照以下步骤完成接线过程。

### 步骤 2.1：拆解数据记录器

1. 拧下三颗螺丝。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/3.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

2. 取下盖子。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/4.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. 取下螺纹帽，将传感器电缆穿过帽子和底盖，然后连接到接线端子。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/5.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

### 步骤 2.2：接线端子说明

|**编号**|**引脚**|**描述**|
| - | - | - |
| 1 | 12V | 外部 12V 输入电压。数据记录器可以由外部 12V 直流电源供电。使用 12V 电源时，电池将作为备用电源。 |
| 2 | 5V  | 5V 输出电压，为传感器提供 5V 电压。 |
| 3 | 3V  | 3V 输出电压，为传感器提供 3V 电压。 |
| 4 | IO  | 采集电平或脉冲输入。 |
| 5 | V1  | 采集 0 到 10V 的电压输入。 |
| 6 | V2  | 采集 0 到 10V 的电压输入。 |
| 7 | A   | RS485 A/+ |
| 8 | B   | RS485 B/- |
| 9 | I1  | 采集 4 到 20mA 的电流输入。 |
| 10 | I2 | 采集 4 到 20mA 的电流输入。 |
| 11 | GND| 接地引脚。 |
| 12 | GND| 接地引脚。 |

### 步骤 2.3：传感器供电选项

数据记录器支持两种供电模式。我们将在这里使用外部 12V DC 模式：

| **模式** | **描述** |
| - | - |
| 内置电池 | 数据记录器和传感器由电池供电。在这种情况下，数据记录器可以连接到 5V 传感器。 |
| 外部 12V DC | 通过外部 12V 电源为数据记录器和传感器供电。如果外部 12V 断开，系统会切换到电池供电。使用外部 12V 电源时，请与接线盒一起使用以确保设备的防水性能。 |

### 步骤 2.4：连接到接线盒

M12 电缆的接线顺序：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/6.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

当您的传感器需要 12V 电源时，仅靠电池无法驱动传感器。因此，需要外部 12V 电源。

1. 准备以下物品：12V 直流适配器、接线盒和 8 芯线（仅需要 4 芯）。
2. 连接数据记录器的端子。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/7.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

   依次安装盖子、橡胶圈和螺帽。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/8.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/9.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. 连接接线盒的端子。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/10.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

4. 将 M12 传感器线缆连接到接线盒。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/11.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

5. 将 12V 直流适配器连接到电源。

## 步骤 3：连接传感器

现在您已经成功将接线盒连接到 S2100，我们将继续连接传感器。

### 步骤 3.1：了解 ONE 紧凑型气象站传感器的接线顺序

该设备使用 M12 8 芯连接器。不同颜色的引脚提供电源和数据通信，如下所示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/12.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

使用 RS-485 时，您只需连接 4 根线（不使用加热功能）。其余的应该用胶带单独包裹以防止短路。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/13.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

插入电缆时，确保电缆孔和设备连接器引脚**正确对齐**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/14.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

插入电缆并顺时针拧紧。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/15.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

最后，完成组装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/16.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

**拧紧螺丝和螺帽**以确保防水。如果线径太细，请添加防水胶带进行缠绕。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/17.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

**\*注意：** 组装设备时，确保数据记录器和适配器盒的防水垫已安装，螺帽和螺丝已拧紧。否则，设备的防水性能可能会受到影响。如果线径太小，请用防水胶带包裹，如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/18.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

至此，接线完成。现在，让我们设置 S2100 并使用我们的应用程序进行配置。

## 步骤 4：设置 S2100

### 步骤 4.1：通过应用程序连接传感器

1. 按住按钮 **3 秒钟**。LED 将以 1 秒频率闪烁。在 1 分钟内使用应用程序连接传感器；否则，设备将关机或重启。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/19.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

2. 选择"S2100 Data Logger"。

   点击"Setup"按钮打开蓝牙，然后点击"Scan"开始扫描传感器的蓝牙。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/20.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/21.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. 通过 S/N 选择传感器（S/N 在传感器正面标签上）。将显示传感器的基本信息。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/22.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/23.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

4. 蓝牙连接成功后进入配置模式。LED 将以 2 秒频率闪烁。

### 步骤 4.2：通过应用程序配置基本参数

#### 选择平台和频率

S210x 传感器支持从 863MHz 到 928MHz 的通用频率计划。每个设备可以支持七种频率计划。

在这里，根据您的实际情况选择"SenseCAP for Helium"或"SenseCAP for TTN"。

**\*注意：** 当附近有 Helium 网络时，数据记录器可以上传数据。它运行在 SenseCAP 的私有 Helium Console 上，因此用户无需在 Helium Console 上创建设备。

SenseCAP for TTN 平台需要与 [SenseCAP LoRaWAN 室外网关](https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html)配合使用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/25.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

#### 设置间隔

设备**默认每 60 分钟**收集和上传一次数据。您可以根据需要调整此间隔。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/26.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

#### 设置数据包策略

根据您的要求选择上行数据包策略。我们在这里选择 1N。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/27.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

| **参数** | **描述** |
| - | - |
| 2C+1N（默认） | 2C+1N（2 个确认数据包和 1 个非确认数据包）最大程度地减少数据包丢失，但在 TTN 中消耗最多的数据包或在 Helium 网络中消耗最多的数据积分。 |
| 1C | 1C（1 个确认）将使设备在从服务器接收到 1 个确认数据包后进入睡眠状态。 |
| 1N | 1N（1 个非确认）将发送数据包然后开始睡眠，无论服务器是否接收到数据。 |

#### 恢复出厂设置

如果您要从其他平台切换回 SenseCAP 平台，请恢复出厂设置。这将重置设备的基本设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/28.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

### 步骤 4.3：通过 App 配置 RS485 Modbus-RTU 传感器

选择"协议"为"RS485 Modbus RTU"，并依次设置以下参数。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/29.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

| **波特率** | 与传感器通信的波特率。选择 **9600**。 |
| - | - |
| **Modbus 地址** | Five in ONE 的默认地址是 10，Seven in ONE 是 20，Nine in ONE 是 38，Ten in ONE 是 43。传感器的从机地址范围为 1 到 247。这里输入 **20**。 |
| **电源类型** | 选择 **始终开启**。周期性供电通过仅在数据采集前为传感器供电来降低功耗并延长电池寿命。 |
| **电源电压** | 选择向传感器提供 **12V** 电压。 |
| **传感器预热时间** | 传感器在通电后达到最高精度或性能水平所需的时间。输入 **200ms**。 |
| **响应超时** | 数据记录器向传感器发送数据读取请求后等待响应的时间。如果超时，命令将重新发送。**5(\*100ms)** 是合适的。 |
| **启动时间** | 传感器通电后开始与 Modbus 通信的时间。**10\*(100ms)** 是合适的。 |
| **测量数量** | 在 RS485 模式下采集 0 到 10 个测量值。由于传感器有七种传感器寄存器，选择 **7**。 |
| **工作模式** | 选择 **周期采集** 模式：周期性采集和上传数据。 |
| **测量设置** | 设置测量值的寄存器和其他配置。 |

#### 测量设置

依次设置每个测量项。测量1（**空气温度**）

|寄存器地址|传感器中测量值的寄存器地址，为整数。空气温度寄存器地址为0。在此输入**0**。|
| - | - |
|功能码|Modbus功能码，在此选择**03**。|
|数据类型|<p>数据类型决定从传感器读取的寄存器数量以及数据应如何解析值。</p><p>在此选择**有符号32位整数，0xABCD**。</p>|
|精度|<p>值的精度。您可以选择测量值的小数位数。如果选择1，则保留一位小数。</p><p>在此选择**2, #.##**。</p>|
|Y= Ax + B|<p>"Y"：这是数据记录器将上传的值。</p><p>"x"：这是原始当前值。</p><p>系数A：可以按"x"的倍数放大或缩小的自定义值。</p><p>系数B：增加或减少"x"值的自定义值。</p><p>通过设置A和B的值，您可以计算出所需的值。如果只上传原始值，请设置A=1和B=0。</p><p>**系数A为0.001，系数B为0。**</p>|
|写入策略|<p>此功能仅对某些特殊传感器启用，通常默认禁用</p><p>读取寄存器值后，可以向传感器发出特殊指令，例如读取寄存器0后清空寄存器的指令。</p><p>无：默认关闭。</p><p>读取后：读取寄存器后向传感器发送RS485命令。</p><p>新数据时：每24小时向传感器发送一次RS485命令。</p><p>我们不需要写入策略，所以在此选择**无**。</p>|

测量2（**空气湿度**）

|寄存器地址|在此输入 **2**。|
| - | - |
|功能码|在此选择 **03**。|
|数据类型|在此选择 **有符号32位整数，0xABCD**。|
|精度|在此选择 **2, #.##**。|
|Y= Ax + B|**出厂A值为0.001，出厂B值为0。**|
|写入策略|我们不需要写入策略，所以在此选择 **无**。|

测量3（**大气压力**）

|寄存器地址|在此输入 **4**。|
| - | - |
|功能码|在此选择 **03**。|
|数据类型|在此选择 **有符号32位整数，0xABCD**。|
|精度|在此选择 **0, #**。|
|Y= Ax + B|**出厂A值为0.001，出厂B值为0。**|
|写入策略|我们不需要写入策略，所以在此选择 **无**。|

测量4（**光照强度**）

|寄存器地址|在此输入 **6**。|
| - | - |
|功能码|在此选择 **03**。|
|数据类型|在此选择 **有符号32位整数，0xABCD**。|
|精度|在此选择 **0, #**。|
|Y= Ax + B|**出厂A值为0.001，出厂B值为0。**|
|写入策略|我们不需要写入策略，所以在此选择 **无**。|

测量5（**平均风向**）

|寄存器地址|在此输入 **12**。|
| - | - |
|功能码|在此选择 **03**。|
|数据类型|在此选择 **有符号32位整数，0xABCD**。|
|精度|在此选择 **1, #.#**。|
|Y= Ax + B|**出厂A值为0.001，出厂B值为0。**|
|写入策略|我们不需要写入策略，所以在此选择 **无**。|

测量6（**平均风速**）

|寄存器地址|在此输入 **18**。|
| - | - |
|功能码|在此选择 **03**。|
|数据类型|在此选择 **有符号32位整数，0xABCD**。|
|精度|在此选择 **1, #.#**。|
|Y= Ax + B|**出厂A值为0.001，出厂B值为0。**|
|写入策略|我们不需要写入策略，所以在此选择 **无**。|

测量7（**雨强**）

|寄存器地址|在此输入 **24**。|
| - | - |
|功能码|在此选择 **03**。|
|数据类型|在此选择 **有符号32位整数，0xABCD**。|
|精度|在此选择 **1, #.#**。|
|Y= Ax + B|**出厂A值为0.001，出厂B值为0。**|
|写入策略|我们不需要写入策略，所以在此选择 **无**。|

配置这些测量参数后，点击**"Back to Home"**。节点和应用程序蓝牙将自动断开连接。数据记录器将尝试连接到网络。LED指示灯在尝试连接时会缓慢闪烁红色，网络连接成功后会快速闪烁绿色。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/30.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

## 步骤5：在SenseCAP门户上查看数据

### 步骤5.1：将传感器绑定到SenseCAP门户

打开SenseCAP Mate应用程序。

1. **扫描二维码**：点击设备页面右上角的**"Add device"**进入设备绑定页面。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/31.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

2. 扫描设备上的二维码将其绑定到您的账户。如果您没有将其设置到指定组，设备将被放入**"default"**组。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/32.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. **手动填写EUI**：如果二维码贴纸损坏，您可以手动填写设备的EUI将其绑定到您的账户。确保EUI按照系统建议的格式输入，然后点击**"confirm"**。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/33.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/34.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

### 步骤5.2：在SenseCAP门户上查看数据

在SenseCAP Mate应用程序或[SenseCAP门户](http://sensecap.seeed.cc/)上，您可以查看设备的在线状态和最新数据。每个传感器的列表将显示其在线状态和最后一次数据上传的时间。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/35.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

您也可以在SenseCAP Mate应用程序上查看数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/36.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/1.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
