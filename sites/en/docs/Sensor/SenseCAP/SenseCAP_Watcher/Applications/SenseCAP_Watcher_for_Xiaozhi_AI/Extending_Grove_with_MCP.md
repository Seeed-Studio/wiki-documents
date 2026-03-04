---
description: Guide for using Grove Expansion with MCP tool
title: Extending Grove with MCP
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
---
# Extending MCP with Grove

## Overview

This document describes how to use the DHT20 temperature and humidity sensor via the Grove interface on the ESP32-S3-based SenseCAP Watcher development board.

## Hardware Preparation

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
      <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## Grove Interface Definition (J5)

<div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove1.png" style={{width:400, height:'auto'}}/></div>

According to the hardware schematic, the Grove interface uses the following pins:

| Grove Pin | function | ESP32-S3 Connection |
|-----------|------|---------------|
| Pin 1     | SCL  | GPIO48 (I2C0_SCL) |
| Pin 2     | SDA  | GPIO47 (I2C0_SDA) |
| Pin 3     | VCC  | GROVE_3.3V (3.3V Power) |
| Pin 4     | GND  | GND |

<div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove2.png" style={{width:400, height:'auto'}}/></div>

## DHT20 Sensor

- I2C Address: 0x38 (Fixed, cannot be changed)
- Supply Voltage: 2.0V - 5.5V (use 3.3V)
- Communication Protocol: I2C (up to 400kHz)
- Measurement Range:
    - Temperature: -40°C to +80°C (Accuracy: ±0.5°C)
    - Humidity: 0% to 100% RH (Accuracy: ±3% RH)

## Execution Result

<div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove5.png" style={{width:800, height:'auto'}}/></div>

## File Structure

### Original Code:
- [Xiaozhi firmware Code Repository](https://github.com/Wvirgil123/xiaozhi-esp32/tree/main)

### New files:

- [dht20.h](https://files.seeedstudio.com/wiki/Watcher_Agent/Grove/dht20.h)
- [dht20.cc](https://files.seeedstudio.com/wiki/Watcher_Agent/Grove/dht20.cc)

- You should place the above two files in the following location:

    - file location
        ```text
        main/boards/sensecap-watcher/
        ├── dht20.h              # DHT20 driver header
        └── dht20.cc             # DHT20 driver implementation
        ```

### Modified files

- [sensecap_watcher.cc](https://files.seeedstudio.com/wiki/Watcher_Agent/Grove/sensecap_watcher.cc)

- Please refer to [Core Functionality (Internal MCP Tool Interface)](#modified-code-part-and-explanation) for the modified code part.

- You should replace the above file in the following location:

    - file location
        ```text
        main/boards/sensecap-watcher/
        └── sensecap_watcher.cc  # Integrates DHT20 sensor and MCP tool
        ```

:::caution Note
The above example code is for reference only. You should modify it according to your specific sensor model, development environment, and firmware version to ensure proper integration and successful compilation.

- Grove I2C sensors can be connected directly to the I2C bus.  
- Non-I2C sensors can be connected via available GPIO pins, allowing for flexible integration of various sensor types.
:::

## Core Functionality(DHT20 Sensor)

### 1. Sensor Initialization
The DHT20 driver implements the complete initialization process:
    - Step1. Reset Sensor: Send 0xBA reset command
    - Step2. System Configuration: Write [0x08, 0x00] to register 0xE1
    - Step3. Calibration Check: Check status register bit[3] to ensure sensor is calibrated
    - Step4. Retry Mechanism: Retry up to 5 times if calibration fails
    ```cpp
    esp_err_t ret = dht20_sensor_->Initialize();
    if (ret == ESP_OK) {
        ESP_LOGI(TAG, "DHT20 initialized successfully");
    }
    ```

### 2. Temperature & Humidity Reading

Reading Process:
    - Step1. Trigger measurement: send command [0xAC, 0x33, 0x00]
    - Step2. Wait for measurement: delay 80ms
    - Step3. Read 8 bytes: [status, humidity High, Middle, Low | temperature High, Middle, Low, CRC]
    - Step4. Data Parsing:
        - Humidity = (20-bit raw value) × 100 / 2^20
        - Temperature = (20-bit raw value) × 200 / 2^20 - 50

    ```cpp
    float temperature, humidity;
    esp_err_t ret = dht20_sensor_->ReadTempAndHumidity(temperature, humidity);
    if (ret == ESP_OK) {
        printf("Temperature: %.2f°C, Humidity: %.2f%%\n", temperature, humidity);
    }
    ```

### 3. I2C Communication Protocol

    | Function | Command/Register | Data |
    |-----|-----------|------|
    | Reset Sensor | 0xBA | - |
    | Configuration Register | 0xE1 | [0x08, 0x00] |
    | Trigger Measurement | - | [0xAC, 0x33, 0x00] |
    | Read Status | - | 1 byte |
    | Read Data | - | 7 bytes |

### 4. Status Byte Definition

    | Bit | Function | Value |
    |---|-----|---|
    | bit[7] | Measurement Status | 1=Measuring, 0=Idle |
    | bit[6:4] | Reserved | - |
    | bit[3] | Calibration Status | 1=Calibrated, 0=Not Calibrated |
    | bit[2:0] | Reserved | - |

### 5. Data Parsing Algorithm

```cpp
// Humidity data (20 bits)
uint32_t humidity_raw = (data[1] << 12) | (data[2] << 4) | (data[3] >> 4);
float humidity = humidity_raw * 100.0f / 1048576.0f;

// Temperature data (20 bits)
uint32_t temperature_raw = ((data[3] & 0x0F) << 16) | (data[4] << 8) | data[5];
float temperature = temperature_raw * 200.0f / 1048576.0f - 50.0f;
```

## Core Functionality(Internal MCP Tool Interface)

### 1. Function Description

- Tool name : `self.grove.get_temperature_humidity`
- Tool application : Read current temperature and humidity from the Grove-connected DHT20 sensor

### 2. Example Call

The AI can call it as follows:

```cpp
result = call_tool("self.grove.get_temperature_humidity", {})
```

### 3. Return Format

- Success:
    ```cpp
    {
        "temperature": 25.32,
        "humidity": 65.47,
        "status": "ok"
    }
    ```

- Failure:

    ```cpp
    {
        "error": "DHT20 sensor not initialized"
    }
    ```

    or

    ```cpp
    {
        "error": "Failed to read DHT20: ESP_ERR_TIMEOUT"
    }
    ```

<a id="modified-code-part-and-explanation"></a>

### 4. Modified Code Part and Explanation

#### Added Header Files Include

- Add the following include statements at the beginning of `sensecap_watcher.cc`:

    ```cpp
    #include "dht20.h"
    #include "mcp_server.h"
    ```
- Purpose

    - dht20.h — Introduces the driver APIs for the DHT20 sensor, enabling temperature and humidity reading.

    - mcp_server.h — Provides APIs related to the internal MCP server, allowing communication and registration of MCP tools.

#### Added Member Variable

- Add the following member variable in the `SensecapWatcher` class:

    ```cpp
    DHT20* dht20_sensor_ = nullptr;
    ```

- Purpose

    - `dht20_sensor_` — A pointer to the DHT20 sensor object connected via the Grove interface.  
      It is used to initialize, store, and access the temperature and humidity sensor throughout the lifecycle of the `SensecapWatcher` instance.  
    - It is assigned in `InitializeDHT20()` and used by MCP tools to read sensor data.  
    - Initialized to `nullptr` to indicate the sensor has not yet been set up, with null-checks performed before reading.

#### Added DHT20 Initialization and MCP Tool

- Add the following member function in the `SensecapWatcher` class:

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

- Add DHT20 Initialization Call in Constructor

    ```cpp
    SensecapWatcher() {
        ...
        InitializeCamera();
        InitializeDHT20();  // Initialize Grove DHT20 sensor
    }
    ```

- Purpose

    - `InitializeDHT20()` — Initializes the DHT20 sensor on the Grove interface and registers an MCP tool to allow internal access to temperature and humidity data.  
    - The function creates the `DHT20` instance, calibrates it, and checks for initialization errors.  
    - If initialization succeeds, it registers the MCP tool `self.grove.get_temperature_humidity` for reading sensor data via JSON.  
    - Called in the constructor of `SensecapWatcher` to ensure the sensor is ready when the board starts:



## Troubleshooting

### Common Issues

1. **Sensor Initialization Failure**
- Possible Causes:
    - Grove interface not powered correctly
    - I2C connection issues
    - Sensor not connected or damaged
- Solution
    ```cpp
    uint32_t grove_power = esp_io_expander_get_level(io_exp_handle, BSP_PWR_GROVE);
    ESP_LOGI(TAG, "Grove power status: %d", grove_power);
    ```
2. **Read Timeout**
- Possible Causes:
    - Sensor busy
    - I2C bus conflict
- Solution
    - Ensure ≥1s interval between readings
    - Check for other devices on I2C

3. **Invalid Data**
- Possible Causes:
    - Sensor not calibrated
    - CRC check failed (not implemented in current version)
- Solution:
    - Re-initialize sensor
    - Consider implementing CRC check (data[6])

## References

- [DHT20 Datasheet](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/DHT20.pdf)
- [SenseCAP Watcher Schematic](https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher/tree/main/Hardware)
- [Grove Interface Specification](https://wiki.seeedstudio.com/Grove_System/)

## Maintenance

code resides in `main/boards/sensecap-watcher/`, does not affect other boards.

## Technical Support

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>