---
description: Grove - IMU 9DOF v2.0
title: Grove - IMU 9DOF v2.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-IMU_9DOF_v2.0
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2.0.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2.0.JPG" alt="pir" width={600} height="auto" /></p>

Grove - IMU 9DOF v2.0 是 **Grove - IMU 9DOF v1.0** 的升级版本，它是一款高性能的9轴运动跟踪模块，基于 MPU-9250。MPU-9250 是一款集成的9轴运动跟踪设备，专为智能手机、平板电脑和可穿戴传感器等消费电子设备的低功耗、低成本和高性能需求而设计。MPU-9250 配备了三个16位 ADC，用于数字化陀螺仪输出；三个16位 ADC，用于数字化加速度计输出；以及三个16位 ADC，用于数字化磁力计输出。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)

## 规格

-   I2C/SPI 接口
-   辅助 I2C
-   低功耗
-   400kHz 快速模式 I2C，用于与所有寄存器通信
-   数字输出3轴角速度传感器（陀螺仪），具有用户可编程的全量程范围：±250、±500、±1000 和 ±2000°/秒
-   数字输出3轴加速度计，具有可编程的全量程范围：±2g、±4g、±8g 和 ±16g
-   数字输出3轴加速度计，全量程测量范围为 ±4800μT
-   I2C 地址：0x68

:::note
    如果您想使用多个 I2C 设备，请参考 [软件 I2C](https://wiki.seeedstudio.com/cn/Arduino_Software_I2C_user_guide/)。
:::
:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)。
:::

## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。在大多数情况下，我们仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 硬件概述

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/dimensions.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/dimensions.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2_inter.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2_inter.png" alt="pir" width={600} height="auto" /></p>

① - Grove 接口，连接到 I2C

② - I2C 或 SPI 选择焊盘（默认是 I2C），如果需要使用 SPI，断开此焊盘

③ - 地址选择焊盘，默认连接 b 和 c 地址为 0x68，如果连接 b 和 a 地址为 0x69，如果需要使用 SPI，断开此焊盘至任意一侧。

④ - SPI 接口

⑤ - 辅助 I2C 主机串行数据

⑥ - 辅助 I2C 主机串行时钟

⑦ - 中断数字输出

## 入门指南

### 使用 Arduino

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield | Grove-IMU_9DOF_v2.0 |
|----------------|-------------|--------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)|

- **步骤 2.** 将 Grove-IMU_9DOF_v2.0 连接到 Grove-Base Shield 的 **I2C** 端口。
- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
	如果没有 Grove Base Shield，我们也可以直接将此模块连接到 Seeeduino，如下所示。
:::
| Seeeduino_v4 | Grove-IMU_9DOF_v2.0  |
|--------------|--------------------------|
| 5V           | VCC                      |
| GND          | GND                      |
| SDA          | SDA                      |
| SCL          | SCL                      |

#### 软件

**步骤 1.** 从 Github 下载 [库文件](https://github.com/Seeed-Studio/Grove_IMU_9DOF/archive/master.zip)。

**步骤 2.** 参考 [如何安装库文件](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库文件。

**步骤 3.** 创建一个新的 Arduino 草图，并将以下代码粘贴到其中，或者直接通过路径打开代码：File -> Example -> IMU_9DOF_Demo_Compass_Calibrated -> IMU_9DOF_Demo_Compass_Calibrated。

以下是代码的主要部分：

```cpp

void setup() {
  // 加入 I2C 总线（I2Cdev 库不会自动执行此操作）
  Wire.begin();

  // 初始化串行通信
  // （选择 38400，因为它在 8MHz 和 16MHz 下都能正常工作，但具体取决于您的项目需求）
  Serial.begin(38400);

  // 初始化设备
  Serial.println("Initializing I2C devices...");
  accelgyro.initialize();

  // 验证连接
	Serial.println("Testing device connections...");
	Serial.println(accelgyro.testConnection() ? "MPU9250 connection successful" : "MPU9250 connection failed");
	delay(1000);
	Serial.println("     ");

 //Mxyz_init_calibrated ();
}

void loop()
{   
	getAccel_Data();
	getGyro_Data();
	getCompassDate_calibrated(); // 罗盘数据已在此处校准
	getHeading();				// 在使用此函数之前，我们应该先运行 'getCompassDate_calibrated()'，以便获取校准数据，然后才能获得正确的角度。					
	getTiltHeading();           

	Serial.println("校准参数: ");
	Serial.print(mx_centre);
	Serial.print("         ");
	Serial.print(my_centre);
	Serial.print("         ");
	Serial.println(mz_centre);
	Serial.println("     ");


	Serial.println("X、Y、Z 轴的加速度 (g):");
	Serial.print(Axyz[0]);
	Serial.print(",");
	Serial.print(Axyz[1]);
	Serial.print(",");
	Serial.println(Axyz[2]);
	Serial.println("X、Y、Z 轴的陀螺仪 (度/秒):");
	Serial.print(Gxyz[0]);
	Serial.print(",");
	Serial.print(Gxyz[1]);
	Serial.print(",");
	Serial.println(Gxyz[2]);
	Serial.println("X、Y、Z 轴的罗盘值:");
	Serial.print(Mxyz[0]);
	Serial.print(",");
	Serial.print(Mxyz[1]);
	Serial.print(",");
	Serial.println(Mxyz[2]);
	Serial.println("磁北与 X 轴之间的顺时针角度:");
	Serial.print(heading);
	Serial.println(" ");
	Serial.println("磁北与水平面上正 X 轴投影之间的顺时针角度:");
	Serial.println(tiltheading);
	Serial.println("   ");
	Serial.println("   ");
    Serial.println("   ");
	delay(300);
}
```
:::note 如果没有 Grove Base Shield，我们也可以直接将此模块连接到 Seeeduino LoRaWAN，但需要添加如下图所示的三行代码。
:::
<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/modify_code.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/modify_code.png" alt="pir" width={600} height="auto" /></p>

**步骤 4.** 上传代码，之后您可以看到：
<!-- 
![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2.0_demo.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2.0_demo.jpg" alt="pir" width={600} height="auto" /></p>

在静止状态下，z 轴的输出值约为 0.98g，因此您可以参考此值来测试您的传感器是否正常工作。

## 参考资料

**轴的方向**

下图显示了加速度计和陀螺仪的灵敏度轴方向以及旋转极性。请注意图中的引脚 1 标识符（•）。

- 加速度计和陀螺仪的灵敏度轴方向及旋转极性

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/MPU9250_axes.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/MPU9250_axes.jpg" alt="pir" width={600} height="auto" /></p>

- 罗盘的灵敏度轴方向

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/MPU9250_axes2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/MPU9250_axes2.jpg" alt="pir" width={600} height="auto" /></p>


## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/Grove-IMU_9DOF_v2.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源

- **[Eagle&PDF]**  [Grove - IMU 9DOF v2.0 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/Grove-IMU_9DOF_v2.0_sch_pcb.zip)
- **[Library]**  [Grove - IMU 9DOF v2.0 库文件](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/Grove_IMU_9DOF_9250.zip)
- **[PDF]**  [MPU-9250 数据手册](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/MPU-9250A_Product_Specification.pdf)
- **[PDF]**  [MPU-9250 寄存器映射](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/MPU-9250A_Reg_Map.pdf)

## 项目

**使用 LinkIt ONE 测试 MPU9150 的功能速度**：我设置了这个项目，目的是测量 MPU9150 标准功能的执行时间（以毫秒为单位）。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kg6hxm/speed-testing-the-mpu9150-s-functions-using-a-linkit-one-181c67/embed' width='350'></iframe>


## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得流畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>