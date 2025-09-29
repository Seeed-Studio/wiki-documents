---
description: Grove - IMU 10DOF
title: Grove - IMU 10DOF
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-IMU_10DOF
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/main.jpg" alt="pir" width={600} height="auto" /></p>


Grove - IMU 10DOF 是 Grove - IMU 9DOF 和 [Grove - Barometer Sensor (BMP180)](/cn/Grove-Barometer_Sensor-BMP180/ "Grove - Barometer Sensor (BMP180)") 的组合。该模块基于 MPU-9250 和 BMP180，MPU-9250 是一个 9 轴运动跟踪设备，集成了 3 轴陀螺仪、3 轴加速度计、3 轴磁力计和数字运动处理器 (DMP)，而 BMP180 是一种高精度、超低功耗的数字压力传感器，适用于消费类应用。该模块非常适合智能手机、平板电脑和可穿戴设备的应用。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)

规格

-   I2C 接口
-   MPU-9250 I2C 地址可选
-   低功耗
-   400kHz 快速模式 I2C，用于与所有寄存器通信
-   数字输出 X、Y 和 Z 轴角速度传感器（陀螺仪），具有用户可编程的全量程范围：±250、±500、±1000 和 ±2000°/秒
-   数字输出 3 轴加速度计，具有可编程的全量程范围：±2g、±4g、±8g 和 ±16g
-   数字输出磁力计，具有全量程范围：±4800uT
-   数字输出气压计，范围为 300 ~ 1100hPa（相对于海平面 +9000m ~ -500m）
-   尺寸：25.43mm x 20.35mm
-   I2C 地址：默认 0x68，参考硬件概述可更改为 0x69。

:::note
    如果您想使用多个 I2C 设备，请参考 [软件 I2C](https://wiki.seeedstudio.com/cn/Arduino_Software_I2C_user_guide/)
:::
:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::
## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|


:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 硬件概述

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/dimensions.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/dimensions.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Grove-imu10dof-layout.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Grove-imu10dof-layout.jpg" alt="pir" width={600} height="auto" /></p>

-   1：MPU-9250 I2C 地址选择焊盘，默认连接 **a** 和 **b**，地址为 0x68；如果连接 **b** 和 **c**，地址为 0x69。
-   2：MPU-9250 中断引脚，中断需要配置，可用的中断源包括：运动检测、FIFO 溢出、数据就绪、I2C 主机错误。

## 入门指南

我们将在这里提供一个示例，展示如何使用此传感器。

### 使用 Arduino

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield | Grove-IMU_10DOF |
|----------------|-------------|---------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)|

- **步骤 2.** 将 Grove-IMU_10DOF 连接到 Grove-Base Shield 的 **I2C** 端口。
- **步骤 3.** 将 Grove-Base Shield 插入 Seeeduino。
- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
如果没有 Grove Base Shield，我们也可以直接将此模块按如下方式连接到 Seeeduino。
:::

<!--I2C-->
| Seeeduino V4 | Grove-IMU_10DOF  |
|--------------|-----------------------|
| 5V           | VCC                  |
| GND          | GND                  |
| SDA          | SDA                  |
| SCL          | SCL                  |

#### 软件

**步骤 1.** 从 [Github](https://github.com/Seeed-Studio/Seeed_Arduino_IMU10DOF) 下载库文件。

**步骤 2.** 参考 [如何安装库文件](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库文件。

**步骤 3.** 通过路径打开代码：文件 -> 示例 -> IMU_10DOF_Test。

以下是部分代码：
```cpp

void setup()
{
    // 加入 I2C 总线（I2Cdev 库不会自动完成此操作）
    Wire.begin();

    // 初始化串行通信
    // （选择 38400 是因为它在 8MHz 和 16MHz 下都能正常工作，但具体取决于您的项目需求）
    Serial.begin(38400);

    // 初始化设备
    Serial.println("Initializing I2C devices...");
    accelgyro.initialize();
    Barometer.init();

    // 验证连接
    Serial.println("Testing device connections...");
    Serial.println(accelgyro.testConnection() ? "MPU9250 connection successful" : "MPU9250 connection failed");

    delay(1000);
    Serial.println("     ");

    //  Mxyz_init_calibrated ();

}

void loop()
{

    getAccel_Data();
    getGyro_Data();
    getCompassDate_calibrated(); // 罗盘数据已在此处校准
    getHeading();               // 在使用此函数之前，应先运行 'getCompassDate_calibrated()'，以获取校准数据，然后才能获得正确的角度。
    getTiltHeading();

    Serial.println("校准参数: ");
    Serial.print(mx_centre);
    Serial.print("         ");
    Serial.print(my_centre);
    Serial.print("         ");
    Serial.println(mz_centre);
    Serial.println("     ");


    Serial.println("X、Y、Z 轴加速度 (g):");
    Serial.print(Axyz[0]);
    Serial.print(",");
    Serial.print(Axyz[1]);
    Serial.print(",");
    Serial.println(Axyz[2]);
    Serial.println("X、Y、Z 轴陀螺仪 (度/秒):");
    Serial.print(Gxyz[0]);
    Serial.print(",");
    Serial.print(Gxyz[1]);
    Serial.print(",");
    Serial.println(Gxyz[2]);
    Serial.println("X、Y、Z 轴罗盘值:");
    Serial.print(Mxyz[0]);
    Serial.print(",");
    Serial.print(Mxyz[1]);
    Serial.print(",");
    Serial.println(Mxyz[2]);
    Serial.println("磁北与 X 轴之间的顺时针角度:");
    Serial.print(heading);
    Serial.println(" ");
    Serial.println("磁北与 X 轴正方向在水平面上的投影之间的顺时针角度:");
    Serial.println(tiltheading);
    Serial.println("   ");

    temperature = Barometer.bmp180GetTemperature(Barometer.bmp180ReadUT()); // 获取温度，必须先调用 bmp180ReadUT
    pressure = Barometer.bmp180GetPressure(Barometer.bmp180ReadUP()); // 获取压力
    altitude = Barometer.calcAltitude(pressure); // 未补偿计算 - 单位为米
    atm = pressure / 101325;

    Serial.print("温度: ");
    Serial.print(temperature, 2); // 显示两位小数
    Serial.println("摄氏度");

    Serial.print("压力: ");
    Serial.print(pressure, 0); // 仅显示整数
    Serial.println(" 帕");

    Serial.print("相对大气压: ");
    Serial.println(atm, 4); // 显示四位小数

    Serial.print("海拔: ");
    Serial.print(altitude, 2); // 显示两位小数
    Serial.println(" 米");

    Serial.println();
    delay(1000);

}

```

**步骤 4.** 上传代码。请选择正确的板卡类型和 COM 端口。

您可以看到：
<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-test.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-test.png" alt="pir" width={600} height="auto" /></p>

## 参考资料
- 轴的方向  
下图显示了灵敏度轴的方向以及旋转的极性。  
<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-dir-axes.png) -->  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-dir-axes.png" alt="pir" width={600} height="auto" /></p>

# Grove - IMU 10DOF v1.0
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove-IMU_10DOF_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - IMU 10DOF v1.1
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove-IMU_10DOF_V1.1_Eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

-  **[ZIP]** [Grove - IMU 10DOF v1.0 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove-IMU_10DOF_v1.0_sch_pcb.zip)
-  **[Eagle]** [Grove - IMU 10DOF v1.1 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove-IMU_10DOF_V1.1_Eagle_file.zip)
-  **[PDF]** [Grove - IMU 10DOF v1.0 原理图 PDF 文件](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove-IMU_10DOF_v1.0.pdf)
-  **[PDF]** [Grove - IMU 10DOF v1.1 原理图 PDF 文件](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove%20-%20IMU%2010DOF%20v1.1.pdf)
-  **[Library]** [Grove-IMU_10DOF 库](https://github.com/Seeed-Studio/Seeed_Arduino_IMU10DOF)
-  **[PDF]** [BMP180 数据手册](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/BMP180.pdf)
-  **[PDF]** [MPU-9250 数据手册](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/MPU-9250A_Product_Specification.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>