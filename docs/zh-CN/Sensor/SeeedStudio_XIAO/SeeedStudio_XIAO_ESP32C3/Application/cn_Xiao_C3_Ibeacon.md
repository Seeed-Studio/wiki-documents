---
description: 使用 ESP-IDF 的 XIAO ESP32-C3 iBeacon 与 BME680 传感器
title: 使用 ESP-IDF 的 XIAO ESP32-C3 iBeacon 与 BME680 传感器
keywords:
  - ESP-IDF
  - XIAO
image: https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/8.webp
slug: /cn/xiao-c3-ibeacon
last_update:
  date: 04/14/2025
  author: Priyanshu Roy
---

# 使用 ESP-IDF 的 XIAO ESP32-C3 iBeacon 与 BME680 传感器

在本教程中，我们将构建一个低功耗温度监测系统，使用蓝牙低功耗（BLE）以 iBeacon 格式广播环境数据。我们将使用 Seeed Studio XIAO ESP32-C3、XIAO 扩展板和 Grove BME680 环境传感器。本项目演示了如何使用 ESP-IDF（乐鑫官方开发框架）构建强大的嵌入式应用程序。

## 概述

我们的系统将：

1. 从 BME680 传感器读取温度、湿度和压力数据
2. 将这些数据打包到 BLE 广播数据包中
3. 定期唤醒、进行测量、广播数据，然后返回睡眠状态以节省电池电量

### 系统流程图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/1.png" style={{width:300, height:800}}/></div>

此流程图说明了我们系统的主要操作周期，从唤醒到返回深度睡眠。

## 硬件要求

<table align="center">
<tr>
    <th>Seeed Studio XIAO ESP32C3</th>
    <th>Seeed Studio Grove Base for XIAO</th>
    <th>Grove BME680 环境传感器</th>
</tr>
<tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/main.jpg" style={{height: 150, objectFit: 'contain'}}/></div></td>
</tr>
<tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
</tr>
</table>

- USB Type-C 数据线
- 安装了 ESP-IDF 的计算机

## 软件要求

- [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/get-started/index.html) (v5.0 或更高版本)
- Git
- [项目 GitHub 仓库](https://github.com/Priyanshu0901/xiao_ibeacon)

## 步骤 1：硬件设置

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/2.webp" style={{width:800, height:'auto'}}/></div>

1. **将 BME680 传感器连接到 XIAO 扩展板**：

   - 将 Grove BME680 传感器连接到 XIAO 扩展板上的任一 I2C 端口。
   - 该传感器通过 I2C 通信，因此任何兼容 I2C 的 Grove 端口都可以使用。

2. **将 XIAO ESP32-C3 安装到扩展板上**：

   - 小心对齐并将 XIAO ESP32-C3 模块插入扩展板。
   - 确保引脚正确对齐，模块牢固就位。

3. **连接到您的计算机**：
   - 使用 USB Type-C 数据线将 XIAO 扩展板连接到您的计算机。

## 步骤 2：设置开发环境

1. **安装 ESP-IDF**：
   按照您操作系统的[官方安装说明](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/get-started/index.html)进行操作。

   对于 Linux，您可以使用：

   ```bash
   mkdir -p ~/esp
   cd ~/esp
   git clone --recursive https://github.com/espressif/esp-idf.git
   cd esp-idf
   ./install.sh
   . ./export.sh
   ```

2. **Clone the project repository**:

   ```bash
   cd ~/Desktop
   git clone --recurse-submodules https://github.com/Priyanshu0901/xiao_ibeacon.git
   cd xiao_ibeacon
   ```

   :::caution
   `--recurse-submodules` 标志至关重要，因为项目依赖于作为 Git 子模块包含的外部库。没有这个标志，编译将会失败。

   如果您已经在没有子模块的情况下克隆了仓库，请运行：

   ```bash
   git submodule update --init --recursive
   ```

   :::

## 步骤 3：项目结构和组件理解

该项目由三个主要组件组成：

1. **BME680 传感器组件 (`sensor_t_a_h`)**：

   - 处理与 BME680 传感器的通信
   - 管理传感器初始化、读取和数据处理
   - 提供温度、湿度和压力数据

2. **BLE 信标组件 (`ble_beacon`)**：

   - 配置 BLE 协议栈
   - 创建并广播包含传感器数据的 BLE 广告
   - 管理 BLE 初始化和清理

3. **电源管理组件 (`power_manager`)**：
   - 处理深度睡眠功能
   - 管理节能操作
   - 控制唤醒源和睡眠持续时间

### 组件交互

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/3.png" style={{width:800, height:'auto'}}/></div>

此图显示了不同软件组件如何与系统的硬件元素交互。

## 步骤 4：理解配置

在构建之前，让我们了解关键配置：

1. **主应用程序设置**（在 `main.c` 中）：

   - `ADV_TIME_MS`：BLE 广告持续时间（500ms）
   - `POLL_INTERVAL_MS`：轮询传感器的频率（150ms）
   - `TIMEOUT_MS`：等待传感器读数的最大时间（2000ms）
   - `SLEEP_TIME_MS`：测量之间的睡眠时长（约 29.3 秒）

2. **传感器配置**（在 `components/sensor_t_a_h/Kconfig` 中）：

   ```
   menu "BME68X Configuration"
       config BME68X_I2C_ADDR
           hex "BME68X I2C Address"
           default 0x76
           help
               I2C address of the BME68X sensor. Default is 0x76.
               Use 0x77 if SDO pin is pulled high.

       choice BME68X_INTERFACE
           prompt "BME68X Interface"
           default BME68X_USE_I2C
           help
               Select the interface to use with BME68X sensor.

           config BME68X_USE_I2C
               bool "I2C Interface"

           config BME68X_USE_SPI
               bool "SPI Interface"
       endchoice

       if BME68X_USE_I2C
           config BME68X_I2C_PORT
               int "I2C Port Number"
               range 0 1
               default 0
               help
                   I2C port number for BME68X.

           config BME68X_I2C_SDA_PIN
               int "I2C SDA GPIO"
               range 0 48
               default 12
               help
                   GPIO pin for I2C SDA.

           config BME68X_I2C_SCL_PIN
               int "I2C SCL GPIO"
               range 0 48
               default 13
               help
                   GPIO pin for I2C SCL.

           config BME68X_I2C_CLOCK_SPEED
               int "I2C Clock Frequency (Hz)"
               range 100000 400000
               default 100000
               help
                   I2C clock frequency for BME68X. Standard mode (100 KHz) or Fast mode (400 KHz).
       endif
   endmenu
   ```

3. **BLE 配置**（在 `components/ble_beacon/common.h` 中）：
   BLE 设备名称在 `common.h` 文件中定义：

   ```c
   #define DEVICE_NAME "Xiao_TempSensor"
   ```

### 修改配置参数

#### 使用 ESP-IDF 的 menuconfig 工具

ESP-IDF 框架提供了一个强大的配置工具叫做 **menuconfig**，它提供了一个基于文本的用户界面来修改项目设置。这个工具基于 Kconfig，与 Linux 内核使用的配置系统相同。

启动配置界面：

```bash
idf.py menuconfig
```

这将显示一个基于文本的UI,其中包含配置类别:

```
    Application Configuration  --->
    ESP-IDF Components         --->
    SDK tool configuration     --->
    Compiler options          --->
    Component config          --->
    Bootloader config         --->
    Serial flasher config     --->
```

**在 menuconfig 中导航：**

- 使用 `↑` 和 `↓` 箭头键导航
- 按 `Enter` 进入子菜单
- 按 `Esc` 返回上级菜单
- 按 `Space` 切换选项
- 在布尔选项上按 `Y` 表示"是"，按 `N` 表示"否"
- 按 `?` 查看当前选中选项的帮助
- 按 `Q` 或多次按 `Esc` 退出，然后按 `Y` 保存更改

**查找传感器配置：**

1. 导航到 `Component config`
2. 向下滚动找到 `BME68X Configuration`
3. 按 `Enter` 查看传感器设置

**查找 BLE 配置：**

1. 导航到 `Component config`
2. 找到并进入 `Bluetooth`
3. 选择 `NimBLE Options`
4. 在这里您可以配置各种 BLE 参数

##### 为 BME680 配置 I2C 引脚

要为 BME680 传感器配置 I2C 引脚：

1. 在 menuconfig 中，导航到：`Component config` → `BME68X Configuration`
2. 选择 `I2C SDA GPIO` 来更改 SDA 引脚
3. 输入 SDA 的 GPIO 编号（默认为 12，但对于带扩展板的 XIAO ESP32-C3，使用 6）
4. 选择 `I2C SCL GPIO` 来更改 SCL 引脚
5. 输入 SCL 的 GPIO 编号（默认为 13，但对于带扩展板的 XIAO ESP32-C3，使用 7）
6. 如果您的传感器有不同的 I2C 地址，选择 `BME68X I2C Address` 并修改它

##### 通过 menuconfig 配置 BLE 参数

虽然设备名称在代码中定义，但其他 BLE 参数可以通过 menuconfig 配置：

1. 导航到：`Component config` → `Bluetooth` → `NimBLE Options`
2. 在这里您可以修改：
   - 最大并发连接数
   - BLE 角色（中心/外围/观察者/广播者）
   - 安全设置
   - GAP 和 GATT 参数
   - BLE 协议栈的内存分配

##### 高级配置选项

对于高级用户，还有其他配置选项可用：

1. **电源管理：**

   - 导航到：`Component config` → `Power Management`
   - 启用/禁用自动轻度睡眠
   - 配置 DFS（动态频率调节）

2. **Flash 加密：**

   - 导航到：`Security features`
   - 为安全部署配置 flash 加密选项

3. **分区表：**

   - 导航到：`Partition Table`
   - 为不同应用需求修改 flash 分区

4. **日志记录：**
   - 导航到：`Component config` → `Log output`
   - 配置调试日志级别和输出目标

完成更改后，按 `Q` 退出并按 `Y` 保存更改。然后使用以下命令重新构建项目：

```bash
idf.py build
```

#### 更改 BLE 设备名称

要更改 BLE 设备名称，您需要修改 `components/ble_beacon/common.h` 中的 `DEVICE_NAME` 宏：

1. 打开文件：

   ```bash
   nano components/ble_beacon/common.h
   ```

2. 找到 `DEVICE_NAME` 定义并将其更改为您想要的名称：

   ```c
   #define DEVICE_NAME "MyCustomSensor"
   ```

3. 保存文件并重新构建项目。

## 步骤 5：构建和烧录项目

1. **导航到项目目录**：

   ```bash
   cd ~/Desktop/xiao_ibeacon
   ```

2. **Configure the project**:

   ```bash
   idf.py set-target esp32c3
   idf.py menuconfig
   ```

   通过菜单导航来检查或调整设置：

   - Component Config → BME680 Sensor Settings
   - Component Config → BLE Beacon Settings
   - Component Config → Power Management

3. **构建项目**：

   ```bash
   idf.py build
   ```
4. **将项目烧录到 XIAO ESP32-C3**：

   ```bash
   idf.py -p /dev/ttyUSB0 flash
   ```

   注意：您的端口可能不同（Windows：COM3、COM4等）

5. **Monitor the output** (optional):

   ```bash
   idf.py -p /dev/ttyUSB0 monitor
   ```

   按 Ctrl+] 退出监视器。

## 步骤 6：测试 iBeacon

1. **在智能手机上下载 BLE 扫描应用**：

   - iOS："LightBlue" 或 "nRF Connect"
   - Android："nRF Connect" 或 "BLE Scanner"

2. **打开应用并扫描 BLE 设备**：

   - 查找名为 "Xiao_TempSensor" 的设备
   - 选择该设备以查看其广播数据

3. **理解广播数据**：
   BLE 广播包含：

   - 温度（以摄氏度为单位，按 100 倍缩放）
   - 湿度（以百分比为单位）
   - 压力（以 hPa 为单位，按 10 倍缩放）

4. **预期行为**：
   - 设备大约每 30 秒唤醒一次
   - 从 BME680 传感器读取数据
   - 广播此数据 500 毫秒
   - 然后进入深度睡眠以节省电力

### Python 测试脚本

该项目包含 Python 脚本来帮助测试和验证 BLE 信标功能。让我们来探索它们：

#### 设置 Python 环境

1. 导航到测试脚本目录：

   ```bash
   cd ~/Desktop/xiao_ibeacon/test_scripts
   ```

2. 运行安装脚本来创建和配置虚拟环境：

   ```bash
   # On Linux/macOS
   chmod +x setup_venv.sh
   ./setup_venv.sh

   # On Windows
   setup_venv.bat
   ```

3. Activate the virtual environment:

   ```bash
   # On Linux/macOS
   source venv/bin/activate

   # On Windows
   venv\Scripts\activate
   ```

安装脚本将安装所需的包：

- `bleak`：用于 BLE 通信
- `colorama`：用于彩色终端输出

#### 使用 BLE 扫描器脚本

BLE 扫描器脚本（`ble_beacon_scanner.py`）扫描 BLE 广播并显示来自我们信标的传感器数据。

扫描器的主要功能：

- 查找名为 "Xiao_TempSensor" 的设备
- 解码制造商特定数据以提取温度、湿度和压力
- 在格式化的终端 UI 中显示数值
- 在接收到新广播时持续更新

运行扫描器：

```bash
python ble_beacon_scanner.py
```

该脚本将显示一个格式良好的输出,其中包含最新的传感器读数:

```
╔═══════════════════════════════════════════════╗
║ Xiao Temperature Sensor Beacon Scanner        ║
╠═══════════════════════════════════════════════╣
║ Last Update: 15:42:27                         ║
║ Signal Strength: -63 dBm                      ║
╠═══════════════════════════════════════════════╣
║ Temperature: 23.45 °C                         ║
║ Humidity: 48 %                                ║
║ Pressure: 1013.2 hPa                          ║
╠═══════════════════════════════════════════════╣
║ Press Ctrl+C to exit                          ║
╚═══════════════════════════════════════════════╝
```

如果您在脚本中通过设置 `DEBUG_MODE = True` 启用调试模式，您将看到关于 BLE 广播和数据解析的额外信息。

#### 信标数据格式

信标以压缩格式传输数据，以适应 BLE 广播的限制：

1. 公司 ID：0x02E5（乐鑫系统）
2. 温度：16 位有符号整数，按 100 缩放（除以 100 得到 °C）
3. 湿度：8 位无符号整数（直接百分比值）
4. 压力：16 位无符号整数，按 10 缩放（除以 10 得到 hPa）

Python 脚本解码此格式并显示实际值。

#### 测试过程流程

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/4.png" style={{width:600, height:'auto'}}/></div>

## 步骤 7：工作原理 - 深入了解

### 传感器初始化和读取

BME680 传感器通过以下步骤进行初始化：

1. **I2C 配置**：在适当的引脚上设置 I2C 通信（对于带扩展板的 XIAO ESP32-C3，SDA/SCL 使用 GPIO6/GPIO7）
2. **传感器初始化**：配置 BME680 传感器的温度、湿度、压力和气体测量设置
3. **读取过程**：启动测量并等待数据准备就绪
4. **数据处理**：将原始传感器值转换为人类可读的测量值

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/5.png" style={{width:800, height:'auto'}}/></div>

### BLE 广播

BLE 功能的工作原理如下：

1. **BLE 协议栈初始化**：设置 ESP32 的 BLE 协议栈
2. **广播配置**：配置广播参数（间隔、数据格式）
3. **数据打包**：获取传感器读数并将其打包到制造商特定数据中
4. **广播启动/停止**：控制广播时序

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/6.png" style={{width:800, height:'auto'}}/></div>

### 电源管理

电源管理系统使用 ESP32-C3 的内置睡眠功能：

1. **深度睡眠配置**：使用 ESP-IDF 的睡眠 API（`esp_sleep_enable_timer_wakeup()`）配置唤醒定时器
2. **唤醒源**：将定时器设置为唯一的唤醒源（系统将在指定持续时间后唤醒）
3. **进入睡眠**：在使用 `esp_deep_sleep_start()` 进入深度睡眠之前安全关闭活动外设
4. **唤醒过程**：当定时器到期时，系统执行复位并从头开始重新启动应用程序

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/7.png" style={{width:800, height:'auto'}}/></div>

电源管理组件（`power_manager.c`）提供了一个简单的接口来处理睡眠模式：

```c
// Initialize power manager
power_manager_init();

// Later, when it's time to sleep:
power_manager_enter_deep_sleep(30000); // Sleep for 30 seconds
```

当设备进入深度睡眠时，功耗急剧下降（约10-20 μA），从而实现长电池续航。设备完全关闭，当定时器到期时会重新启动，因此任何需要保留的状态都必须存储在RTC内存或非易失性存储中。

### 功耗配置文件

#### 功耗分析设置

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/8.webp" style={{width:600, height:'auto'}}/></div>

#### 功耗配置文件

系统具有不同的功耗使用阶段，如下面的功耗配置文件所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/9.png" style={{width:800, height:'auto'}}/></div>

**功耗阶段：**

1. **睡眠阶段**：深度睡眠模式下约150μA（ESP32-C3 RTC控制器激活 + bme680睡眠）
2. **唤醒和初始化**：启动和传感器初始化期间约40mA
3. **活跃BLE广播**：BLE传输期间峰值约16mA
4. **清理和进入睡眠**：进入睡眠前资源清理期间约5mA

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/10.png" style={{width:800, height:'auto'}}/></div>

**电池续航计算：**

- 深度睡眠时的平均电流（28秒）：150μA
- 活跃阶段的平均电流（2秒）：约40mA
- 有效平均电流：3.92 mA（1分钟内测量）
- 使用典型的1500 mAh锂离子电池：
  - 1500 mAh ÷ 3.92 mA ≈ 382小时 ≈ 15.9天

**功耗优化技巧：**

- 减少广播时间以最小化高电流周期
- 使用最低可行的广播功率
- 禁用未使用的外设
- 优化传感器读取过程
- 考虑延长睡眠持续时间

## 步骤8：自定义项目

您可以自定义项目的各个方面：

1. **更改睡眠持续时间**：

   - 编辑`main.c`中的`SLEEP_TIME_MS`以调整读取频率

2. **修改传感器设置**：

   - 使用`idf.py menuconfig`更改传感器采样率、滤波器等

3. **调整BLE参数**：

   - 在BLE信标组件中更改设备名称或广播间隔

4. **添加其他传感器**：
   - 扩展传感器组件以包含其他Grove传感器

### 添加您自己的传感器

要将不同的传感器集成到此项目中，请按照以下步骤操作：

1. **创建新的传感器组件**：

   ```bash
   # Create component directory structure
   mkdir -p components/my_new_sensor/include
   touch components/my_new_sensor/CMakeLists.txt
   touch components/my_new_sensor/Kconfig
   touch components/my_new_sensor/my_new_sensor.c
   touch components/my_new_sensor/include/my_new_sensor.h
   ```

2. **实现组件接口**：

   - 定义初始化函数
   - 创建数据读取函数
   - 设置任何必要的配置

   示例头文件（`my_new_sensor.h`）：

   ```c
   #pragma once
   #include <stdbool.h>
   #include "esp_err.h"

   typedef struct {
       float value1;
       float value2;
       // Additional sensor values
   } my_sensor_data_t;

   /**
    * @brief Initialize the sensor
    * @return ESP_OK on success
    */
   esp_err_t my_sensor_init(void);

   /**
    * @brief Read data from the sensor
    * @param data Pointer to structure to store readings
    * @return ESP_OK on success
    */
   esp_err_t my_sensor_read(my_sensor_data_t *data);
   ```

3. **Configure Build System**:
   Example `CMakeLists.txt`:

   ```cmake
   idf_component_register(
       SRCS "my_new_sensor.c"
       INCLUDE_DIRS "include"
       REQUIRES driver
   )
   ```

4. **更新主应用程序**：

   - 将您的组件添加到主应用程序的依赖项中
   - 在主应用程序流程中初始化您的传感器
   - 将您的传感器读数包含在 BLE 广播数据中

   在 `main.c` 中的集成示例：

   ```c
   #include "my_new_sensor.h"

   void app_main(void) {
       // Initialize other components
       // ...

       // Initialize your new sensor
       ESP_ERROR_CHECK(my_new_sensor_init());

       // Read from your sensor
       my_sensor_data_t sensor_data;
       ESP_ERROR_CHECK(my_sensor_read(&sensor_data));

       // Modify BLE data to include your sensor readings
       // ...
   }
   ```

5. **扩展 BLE 广播数据**：

   - 更新 BLE 信标组件以在广播中包含您的传感器数据
   - 为您的新测量数据分配适当的数据类型 ID

6. **更新配置**：
   - 在 `components/my_new_sensor/Kconfig` 中为您的传感器添加 Kconfig 选项
   - 这允许用户通过 menuconfig 配置您的传感器

通过遵循这种结构化方法，您可以无缝集成额外的传感器，同时保持项目的模块化架构。

## 故障排除

### 重要提示

:::tip
**正常运行期间无串口输出**  
为了获得最佳的功耗效率，设备在正常运行期间不会通过串口输出调试信息。当设备处于深度睡眠模式时，LED 也不会闪烁。这是为了最小化功耗而有意设计的。

**重新刷写设备**  
要重新刷写设备：

1. 在开始刷写过程时按下 XIAO 板上的复位按钮
2. 将您的刷写命令与短暂的活动期（当设备不在深度睡眠中时）同步
3. 或者，按住复位按钮，启动刷写命令，然后在刷写开始时释放复位按钮

**重新启用调试输出用于开发**  
在开发自己的模块或调试时，您可以重新启用串口输出：

1. 运行 `idf.py menuconfig`
2. 导航到 `Component config` → `Log output`
3. 将默认日志级别设置为 `INFO` 或 `DEBUG`
4. 将日志输出目标配置为 `UART0`
5. 记住在部署前再次禁用详细日志记录以保持电池寿命

:::

### 传感器未检测到

如果您遇到传感器检测问题：

1. **检查连接**：

   - 确保 Grove 线缆正确连接到传感器和扩展板
   - 验证您使用的是 I2C Grove 端口

2. **I2C 地址问题**：

   - BME680 的默认 I2C 地址是 0x76。某些模块可能使用 0x77。
   - 如果需要，在配置中编辑 I2C 地址

3. **电源问题**：
   - 确保 XIAO 获得足够的电源
   - 尝试不同的 USB 线缆或端口

### BLE 未广播

如果检测不到 BLE 广播：

1. **检查 BLE 扫描器应用**：

   - 尝试不同的 BLE 扫描器应用
   - 确保您的手机上启用了蓝牙

2. **监控调试输出**：

   - 使用 `idf.py monitor` 检查错误消息

3. **广播持续时间**：
   - 默认设置仅广播 500ms。如果您错过了，请在 `main.c` 中增加 `ADV_TIME_MS`

### 构建或刷写失败

如果您遇到构建或刷写问题：

1. **ESP-IDF 版本**：

   - 确保您使用的是 ESP-IDF v5.0 或更新版本
   - 在命令前运行 `. $IDF_PATH/export.sh`（Linux/macOS）或 `%IDF_PATH%\export.bat`（Windows）

2. **USB 连接**：

   - 验证 USB 连接稳定
   - 在刷写前尝试按下 XIAO 扩展板上的复位按钮

3. **端口问题**：
   - 使用 `ls /dev/tty*`（Linux/macOS）或设备管理器（Windows）识别正确的端口
   - 使用 `-p` 标志指定正确的端口

## 结论

您现在已经构建了一个功耗高效的环境监测系统，它使用 BLE 广播温度、湿度、压力和空气质量数据。这个项目演示了几个重要概念：

1. **传感器集成**：在 ESP-IDF 中使用 I2C 传感器
2. **BLE 通信**：创建和管理 BLE 广播
3. **电源管理**：实现深度睡眠以实现电池高效运行
4. **ESP-IDF 开发**：使用乐鑫官方框架进行 ESP32 开发

### 整体系统架构

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-c3-ibeacon/11.png" style={{width:800, height:'auto'}}/></div>

这个基础可以扩展为创建更复杂的物联网传感器节点、环境监测系统或资产跟踪解决方案。

## 资源

- [ESP-IDF 编程指南](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/)
- [XIAO ESP32-C3 Wiki](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started/)
- [BME680 数据手册](https://www.bosch-sensortec.com/products/environmental-sensors/gas-sensors/bme680/)
- [项目 GitHub 仓库](https://github.com/Priyanshu0901/xiao_ibeacon)

## ✨ 贡献者项目

- 本项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)支持。
- 特别感谢 [Priyanshu Roy](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=106309063&issue=Seeed-Studio%7Cwiki-documents%7C2422) 的专注努力。您的工作将被[展示](https://wiki.seeedstudio.com/contributors/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
