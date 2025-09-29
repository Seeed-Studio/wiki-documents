---
description: Grove - IMU 10DOF v2.0
title: Grove - IMU 10DOF v2.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-IMU_10DOF_v2.0
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/Grove-imu-10dof-v2.0.jpg" alt="pir" width={600} height="auto" /></p>

Grove-IMU 10DOF v2.0 是 Grove-IMU-10DOF 的升级版本，将 BMP180 替换为 BMP280。作为广泛采用的 BMP180 的继任者，BMP280 在所有需要精确压力测量的应用中提供了高性能。该模块基于 MPU-9250 和 BMP280，MPU-9250 是一个 9 轴运动跟踪设备，结合了 3 轴陀螺仪、3 轴加速度计、3 轴磁力计和数字运动处理器（DMP），而 BMP280 是一种高精度、超低功耗的数字压力传感器，适用于消费类应用。该模块非常适合智能手机、平板电脑和可穿戴设备的应用。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-IMU-10DOF-v2.0-p-2691.html)

## 版本

| 产品版本               | 变化                                                                                                                                                                                                                                      | 发布日期       |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| Grove - IMU 10DOF      | 基于 [MPU-9250 ](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/MPU-9250A_Product_Specification.pdf ) 和 [BMP180 ](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/BMP180.pdf )  | 2015年3月      |
| Grove - IMU 10DOF v2.0 | 将 BMP180 传感器升级为 [BMP280 ](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf )（来自 BOSCH）                                         | 2016年9月      |

## 规格

-   I2C Grove 接口，包括 GND、VCC、SDA、SCL。
-   MPU-9250 I2C 地址可选
-   低功耗
-   400kHz 快速模式 I2C，用于与所有寄存器通信
-   数字输出 X、Y 和 Z 轴角速度传感器（陀螺仪），具有用户可编程的全量程范围：±250、±500、±1000 和 ±2000°/秒
-   数字输出 3 轴加速度计，具有可编程的全量程范围：±2g、±4g、±8g 和 ±16g
-   数字输出磁力计，具有全量程范围：±4800uT
-   数字输出气压计，范围为 300 ~ 1100hPa（相对于海平面 +9000m ~ -500m）
-   尺寸：25.43mm x 20.35mm
-   I2C 地址：默认连接 I2C 选择焊盘的 a 和 b 地址为 0x68，如果连接 b 和 c 地址则为 0x69

:::note
    如果您想使用多个 I2C 设备，请参考 [软件 I2C](https://wiki.seeedstudio.com/cn/Arduino_Software_I2C_user_guide/)。
:::
:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)。
:::

## 支持的平台

| Arduino | Raspberry Pi |
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 硬件概览

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/dimensions.jpg" alt="pir" width={600} height="auto" /></p>

-  MPU-9250 I2C 地址选择焊盘，默认连接 **a** 和 **b** 地址为 0x68，如果连接 **b** 和 **c** 地址为 0x69。
-  MPU-9250 中断引脚，中断需要配置，可用的中断源包括：运动检测、FIFO 溢出、数据就绪、I2C 主错误。
- 轴的方向：
下图显示了灵敏度轴的方向以及旋转的极性。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-dir-axes.png" alt="pir" width={600} height="auto" /></p>

- BMP280 是一种专为移动应用设计的绝对气压传感器。传感器模块封装在一个极其紧凑的 8 引脚金属盖 LGA 封装中，尺寸仅为 2.0 × 2.5 mm²，封装高度为 0.95 mm。其小巧的尺寸和低功耗（2.7 μA @1Hz）使其能够应用于电池驱动的设备，例如手机、GPS 模块或手表。

## 入门指南

### 使用 Arduino

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | 基础扩展板 | 基础扩展板 |
|----------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/Grove-imu-10dof-v2.0_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-IMU-10DOF-v2.0-p-2691.html)|

- **步骤 2.** 将 Grove - IMU 10DOF v2.0 连接到基础扩展板的 **I2C** 接口。
- **步骤 3.** 将 Grove - 基础扩展板插入 Seeeduino。
- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<!--link-->
<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/with_ardu.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

#### 软件

- **步骤 1.** 下载 [Grove-IMU_10DOF_v2 库](https://github.com/Seeed-Studio/Grove_IMU_10DOF_v2.0/archive/master.zip)。
- **步骤 2.** 请按照 [如何安装 Arduino 库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/) 的步骤安装库。
- **步骤 3.** 重启 Arduino IDE。通过以下路径打开 “IMM_10DOF_Test” 示例：**File -> Example -> GROVE_IMU_10DOF_V2-master -> IMU_10DOF_V2_Test**。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/library%20example.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/library%20example.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 上传代码。注意，我们需要选择正确的板类型和 COM 端口。
上传后可以看到以下结果：

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/ardu_result.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/ardu_result.jpg" alt="pir" width={600} height="auto" /></p>

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/res/Grove%20-%20IMU%2010DOF%20v2.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

-   **[Eagle]** [Grove - IMU 10DOF v2 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/res/Grove%20-%20IMU%2010DOF%20v2.0.zip)
-   **[Library]** [从 GitHub 获取库](https://github.com/Seeed-Studio/Grove_IMU_10DOF_v2.0/archive/master.zip)
-   **[Datasheet]** [BMP280 数据手册](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/res/BMP280-Datasheet.pdf)
-   **[Datasheet]** [MPU-9250 数据手册](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/MPU-9250A_Product_Specification.pdf)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_IMU_10DOF -->

## 项目

**摩托车数据应用**：像专业人士一样从骑行中学习！摩托车赛车团队多年来一直使用IMU数据，有了RideData+Arduino，你也可以轻松做到。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/RideData/motorcycle-data-app-11698f/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>