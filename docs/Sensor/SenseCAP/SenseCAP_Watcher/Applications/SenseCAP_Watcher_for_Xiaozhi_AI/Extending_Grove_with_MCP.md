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

## Grove Interface Definition (J5)

According to the hardware schematic, the Grove interface uses the following pins:

| Grove Pin | function | ESP32-S3 Connection |
|-----------|------|---------------|
| Pin 1     | VCC  | GROVE_3.3V (3.3V Power) |
| Pin 2     | SDA  | GPIO47 (I2C0_SDA) |
| Pin 3     | SCL  | GPIO48 (I2C0_SCL) |
| Pin 4     | GND  | GND |

## DHT20 Sensor

- I2C Address: 0x38 (Fixed, cannot be changed)
- Supply Voltage: 2.0V - 5.5V (use 3.3V)
- Communication Protocol: I2C (up to 400kHz)
- Measurement Range:
    - Temperature: -40°C to +80°C (Accuracy: ±0.5°C)
    - Humidity: 0% to 100% RH (Accuracy: ±3% RH)

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

- You should replace the above file in the following location:

    - file location
        ```text
        main/boards/sensecap-watcher/
        └── sensecap_watcher.cc  # Integrates DHT20 sensor and MCP tool
        ```

:::caution Note
The above example code is for reference only. You should modify it according to your specific sensor model, development environment, and firmware version to ensure proper integration and successful compilation.
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

### 4. I2C Communication Protocol

    | Function | Command/Register | Data |
    |-----|-----------|------|
    | Reset Sensor | 0xBA | - |
    | Configuration Register | 0xE1 | [0x08, 0x00] |
    | Trigger Measurement | - | [0xAC, 0x33, 0x00] |
    | Read Status | - | 1 byte |
    | Read Data | - | 7 bytes |

### 5. Status Byte Definition

    | Bit | Function | Value |
    |---|-----|---|
    | bit[7] | Measurement Status | 1=Measuring, 0=Idle |
    | bit[6:4] | Reserved | - |
    | bit[3] | Calibration Status | 1=Calibrated, 0=Not Calibrated |
    | bit[2:0] | Reserved | - |

### 6. Data Parsing Algorithm

```cpp
// Humidity data (20 bits)
uint32_t humidity_raw = (data[1] << 12) | (data[2] << 4) | (data[3] >> 4);
float humidity = humidity_raw * 100.0f / 1048576.0f;

// Temperature data (20 bits)
uint32_t temperature_raw = ((data[3] & 0x0F) << 16) | (data[4] << 8) | data[5];
float temperature = temperature_raw * 200.0f / 1048576.0f - 50.0f;
```

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