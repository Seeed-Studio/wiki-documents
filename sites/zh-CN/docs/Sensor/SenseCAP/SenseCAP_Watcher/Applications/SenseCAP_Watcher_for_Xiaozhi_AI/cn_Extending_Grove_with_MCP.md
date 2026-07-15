---
description: 使用 MCP 工具扩展 Grove 的指南
title: 使用 MCP 扩展 Grove
sidebar_position: 6
keywords:
  - AI
  - SenseCAP
  - Watcher
  - Agent
  - IIC
  - Model
  - Context
  - protocol
  - Grove
  - MCP
image: http://files.seeedstudio.com/wiki/SenseCAP-Watcher-for-Xiaozhi-AI/Watcher_Agent.webp
slug: /extending_grove_with_mcp
last_update:
  date: 10/22/2025
  author: Twelve
createdAt: '2025-10-22'
updatedAt: '2025-10-24'
url: https://wiki.seeedstudio.com/cn/extending_grove_with_mcp/
---
# 使用 Grove 扩展 MCP

## 概述

本文档描述了如何在基于 ESP32-S3 的 SenseCAP Watcher 开发板上通过 Grove 接口使用 DHT20 温湿度传感器。

## 硬件准备

<table align="center">
  <tr>
    <th>SenseCAP Watcher for XiaoZhi</th>
    <th>Grove - Temperature & Humidity Sensor V2.0 (DHT20)</th>
  </tr>
      <tr>
          <td><div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove4.png" style={{width:230, height:'auto'}}/></div></td>
          <td><div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove3.png" style={{width:200, height:'auto'}}/></div></td>
      </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## Grove 接口定义 (J5)

<div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove1.png" style={{width:400, height:'auto'}}/></div>

根据硬件原理图，Grove 接口使用以下引脚：

| Grove 引脚 | 功能 | ESP32-S3 连接 |
|-----------|------|---------------|
| Pin 1     | SCL  | GPIO48 (I2C0_SCL) |
| Pin 2     | SDA  | GPIO47 (I2C0_SDA) |
| Pin 3     | VCC  | GROVE_3.3V (3.3V 电源) |
| Pin 4     | GND  | GND |

<div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove2.png" style={{width:400, height:'auto'}}/></div>

## DHT20 传感器

- I2C 地址：0x38（固定，无法更改）
- 供电电压：2.0V - 5.5V（使用 3.3V）
- 通信协议：I2C（最高 400kHz）
- 测量范围：
    - 温度：-40°C 至 +80°C（精度：±0.5°C）
    - 湿度：0% 至 100% RH（精度：±3% RH）

## 执行结果

<div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove5.png" style={{width:800, height:'auto'}}/></div>

## 文件结构

### 原始代码：
- [小智固件代码仓库](https://github.com/Wvirgil123/xiaozhi-esp32/tree/main)

### 新文件：

- [dht20.h](https://files.seeedstudio.com/wiki/Watcher_Agent/Grove/dht20.h)
- [dht20.cc](https://files.seeedstudio.com/wiki/Watcher_Agent/Grove/dht20.cc)

- 您应该将上述两个文件放置在以下位置：

    - 文件位置
        ```text
        main/boards/sensecap-watcher/
        ├── dht20.h              # DHT20 driver header
        └── dht20.cc             # DHT20 driver implementation
        ```

### 修改的文件

- [sensecap_watcher.cc](https://files.seeedstudio.com/wiki/Watcher_Agent/Grove/sensecap_watcher.cc)

- 请参考[核心功能（内部 MCP 工具接口）](#修改的代码部分和说明)了解修改的代码部分。

- 您应该在以下位置替换上述文件：

    - 文件位置
        ```text
        main/boards/sensecap-watcher/
        └── sensecap_watcher.cc  # Integrates DHT20 sensor and MCP tool
        ```

:::caution 注意
上述示例代码仅供参考。您应该根据您的具体传感器型号、开发环境和固件版本进行修改，以确保正确集成和成功编译。

- Grove I2C 传感器可以直接连接到 I2C 总线。  
- 非 I2C 传感器可以通过可用的 GPIO 引脚连接，允许灵活集成各种传感器类型。
:::

## 核心功能（DHT20 传感器）

### 1. 传感器初始化
DHT20 驱动程序实现了完整的初始化过程：
    - 步骤 1. 重置传感器：发送 0xBA 重置命令
    - 步骤 2. 系统配置：向寄存器 0xE1 写入 [0x08, 0x00]
    - 步骤 3. 校准检查：检查状态寄存器位[3]以确保传感器已校准
    - 步骤 4. 重试机制：如果校准失败，最多重试 5 次
    ```cpp
    esp_err_t ret = dht20_sensor_->Initialize();
    if (ret == ESP_OK) {
        ESP_LOGI(TAG, "DHT20 initialized successfully");
    }
    ```

### 2. 温湿度读取

读取过程：
    - 步骤 1. 触发测量：发送命令 [0xAC, 0x33, 0x00]
    - 步骤 2. 等待测量：延迟 80ms
    - 步骤 3. 读取 8 字节：[状态, 湿度高, 中, 低 | 温度高, 中, 低, CRC]
    - 步骤 4. 数据解析：
        - 湿度 = (20 位原始值) × 100 / 2^20
        - 温度 = (20 位原始值) × 200 / 2^20 - 50

    ```cpp
    float temperature, humidity;
    esp_err_t ret = dht20_sensor_->ReadTempAndHumidity(temperature, humidity);
    if (ret == ESP_OK) {
        printf("Temperature: %.2f°C, Humidity: %.2f%%\n", temperature, humidity);
    }
    ```

### 3. I2C 通信协议

    | 功能 | 命令/寄存器 | 数据 |
    |-----|-----------|------|
    | 重置传感器 | 0xBA | - |
    | 配置寄存器 | 0xE1 | [0x08, 0x00] |
    | 触发测量 | - | [0xAC, 0x33, 0x00] |
    | 读取状态 | - | 1 字节 |
    | 读取数据 | - | 7 字节 |

### 4. 状态字节定义

    | 位 | 功能 | 值 |
    |---|-----|---|
    | bit[7] | 测量状态 | 1=测量中, 0=空闲 |
    | bit[6:4] | 保留 | - |
    | bit[3] | 校准状态 | 1=已校准, 0=未校准 |
    | bit[2:0] | 保留 | - |

### 5. 数据解析算法

```cpp
// Humidity data (20 bits)
uint32_t humidity_raw = (data[1] << 12) | (data[2] << 4) | (data[3] >> 4);
float humidity = humidity_raw * 100.0f / 1048576.0f;

// Temperature data (20 bits)
uint32_t temperature_raw = ((data[3] & 0x0F) << 16) | (data[4] << 8) | data[5];
float temperature = temperature_raw * 200.0f / 1048576.0f - 50.0f;
```

## 核心功能（内部 MCP 工具接口）

### 1. 功能描述

- 工具名称：`self.grove.get_temperature_humidity`
- 工具应用：从 Grove 连接的 DHT20 传感器读取当前温度和湿度

### 2. 调用示例

AI 可以如下调用：

```cpp
result = call_tool("self.grove.get_temperature_humidity", {})
```

### 3. 返回格式

- 成功：
    ```cpp
    {
        "temperature": 25.32,
        "humidity": 65.47,
        "status": "ok"
    }
    ```

- 失败：

    ```cpp
    {
        "error": "DHT20 sensor not initialized"
    }
    ```

    或

    ```cpp
    {
        "error": "Failed to read DHT20: ESP_ERR_TIMEOUT"
    }
    ```

<a id="修改的代码部分和说明"></a>

### 4. 修改的代码部分和说明

#### 添加头文件包含

- 在 `sensecap_watcher.cc` 的开头添加以下包含语句：

    ```cpp
    #include "dht20.h"
    #include "mcp_server.h"
    ```
- 目的

    - dht20.h — 引入 DHT20 传感器的驱动程序 API，实现温湿度读取。

    - mcp_server.h — 提供与内部 MCP 服务器相关的 API，允许通信和注册 MCP 工具。

#### 添加成员变量

- 在 `SensecapWatcher` 类中添加以下成员变量：

    ```cpp
    DHT20* dht20_sensor_ = nullptr;
    ```

- 目的

    - `dht20_sensor_` — 指向通过 Grove 接口连接的 DHT20 传感器对象的指针。  
      它用于在 `SensecapWatcher` 实例的整个生命周期中初始化、存储和访问温湿度传感器。  
    - 它在 `InitializeDHT20()` 中分配，并由 MCP 工具用于读取传感器数据。  
    - 初始化为 `nullptr` 以表示传感器尚未设置，在读取前执行空值检查。

#### 添加 DHT20 初始化和 MCP 工具

- 在 `SensecapWatcher` 类中添加以下成员函数：

    ```cpp
    void InitializeDHT20() {
        ESP_LOGI(TAG, "Initialize DHT20 sensor on Grove port");

        // Create DHT20 sensor instance
        dht20_sensor_ = new DHT20(i2c_bus_);

        // Initialize and calibrate the sensor
        esp_err_t ret = dht20_sensor_->Initialize();
        if (ret != ESP_OK) {
            ESP_LOGE(TAG, "DHT20 initialization failed: %s", esp_err_to_name(ret));
            delete dht20_sensor_;
            dht20_sensor_ = nullptr;
            return;
        }

        ESP_LOGI(TAG, "DHT20 sensor initialized successfully");

        // Register MCP tool for reading temperature and humidity
        auto& mcp_server = McpServer::GetInstance();
        mcp_server.AddTool("self.grove.get_temperature_humidity",
            "Read temperature and humidity from the Grove-connected DHT20 sensor.\n"
            "Return format: {\"temperature\": value(°C), \"humidity\": value(%), \"status\": \"ok\"}\n"
            "If reading fails, returns an error message.",
            PropertyList(),
            [this](const PropertyList&) -> ReturnValue {
                if (!dht20_sensor_) {
                    return "{\"error\": \"DHT20 sensor not initialized\"}";
                }

                float temperature = 0.0f;
                float humidity = 0.0f;

                esp_err_t ret = dht20_sensor_->ReadTempAndHumidity(temperature, humidity);
                if (ret != ESP_OK) {
                    std::string error_msg = "{\"error\": \"Failed to read DHT20: ";
                    error_msg += esp_err_to_name(ret);
                    error_msg += "\"}";
                    return error_msg;
                }

                // Format response as JSON
                char buffer[128];
                snprintf(buffer, sizeof(buffer),
                        "{\"temperature\": %.2f, \"humidity\": %.2f, \"status\": \"ok\"}",
                        temperature, humidity);
                return std::string(buffer);
            });

        ESP_LOGI(TAG, "DHT20 MCP tool registered: self.grove.get_temperature_humidity");
    }
    ```

- 在构造函数中添加 DHT20 初始化调用

    ```cpp
    SensecapWatcher() {
        ...
        InitializeCamera();
        InitializeDHT20();  // Initialize Grove DHT20 sensor
    }
    ```

- 目的

    - `InitializeDHT20()` — 在 Grove 接口上初始化 DHT20 传感器，并注册一个 MCP 工具以允许内部访问温湿度数据。
    - 该函数创建 `DHT20` 实例，对其进行校准，并检查初始化错误。
    - 如果初始化成功，它会注册 MCP 工具 `self.grove.get_temperature_humidity` 用于通过 JSON 读取传感器数据。
    - 在 `SensecapWatcher` 的构造函数中调用，以确保传感器在板子启动时就绪：



## 故障排除

### 常见问题

1. **传感器初始化失败**
- 可能原因：
    - Grove 接口供电不正确
    - I2C 连接问题
    - 传感器未连接或损坏
- 解决方案
    ```cpp
    uint32_t grove_power = esp_io_expander_get_level(io_exp_handle, BSP_PWR_GROVE);
    ESP_LOGI(TAG, "Grove power status: %d", grove_power);
    ```
2. **读取超时**
- 可能原因：
    - 传感器忙碌
    - I2C 总线冲突
- 解决方案
    - 确保读取间隔 ≥1s
    - 检查 I2C 上的其他设备

3. **无效数据**
- 可能原因：
    - 传感器未校准
    - CRC 校验失败（当前版本未实现）
- 解决方案：
    - 重新初始化传感器
    - 考虑实现 CRC 校验（data[6]）

## 参考资料

- [DHT20 数据手册](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/DHT20.pdf)
- [SenseCAP Watcher 原理图](https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher/tree/main/Hardware)
- [Grove 接口规范](https://wiki.seeedstudio.com/cn/Grove_System/)

## 维护

代码位于 `main/boards/sensecap-watcher/`，不影响其他板子。

## 技术支持

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>