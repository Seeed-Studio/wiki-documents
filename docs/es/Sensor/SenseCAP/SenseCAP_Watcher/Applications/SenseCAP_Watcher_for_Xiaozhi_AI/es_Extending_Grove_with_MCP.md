---
description: Guía para usar la expansión Grove con la herramienta MCP
title: Extendiendo Grove con MCP
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
slug: /es/extending_grove_with_mcp
last_update:
  date: 10/22/2025
  author: Twelve
---
# Extendiendo MCP con Grove

## Descripción general

Este documento describe cómo usar el sensor de temperatura y humedad DHT20 a través de la interfaz Grove en la placa de desarrollo SenseCAP Watcher basada en ESP32-S3.

## Definición de la interfaz Grove (J5)

Según el esquema de hardware, la interfaz Grove utiliza los siguientes pines:

| Pin Grove | función | Conexión ESP32-S3 |
|-----------|------|---------------|
| Pin 1     | VCC  | GROVE_3.3V (Alimentación 3.3V) |
| Pin 2     | SDA  | GPIO47 (I2C0_SDA) |
| Pin 3     | SCL  | GPIO48 (I2C0_SCL) |
| Pin 4     | GND  | GND |

## Sensor DHT20

- Dirección I2C: 0x38 (Fija, no se puede cambiar)
- Voltaje de alimentación: 2.0V - 5.5V (usar 3.3V)
- Protocolo de comunicación: I2C (hasta 400kHz)
- Rango de medición:
    - Temperatura: -40°C a +80°C (Precisión: ±0.5°C)
    - Humedad: 0% a 100% RH (Precisión: ±3% RH)

## Estructura de archivos

### Código original:
- [Repositorio de código del firmware Xiaozhi](https://github.com/Wvirgil123/xiaozhi-esp32/tree/main)

### Archivos nuevos:

- [dht20.h](https://files.seeedstudio.com/wiki/Watcher_Agent/Grove/dht20.h)
- [dht20.cc](https://files.seeedstudio.com/wiki/Watcher_Agent/Grove/dht20.cc)

- Debes colocar los dos archivos anteriores en la siguiente ubicación:

    - ubicación del archivo
        ```text
        main/boards/sensecap-watcher/
        ├── dht20.h              # DHT20 driver header
        └── dht20.cc             # DHT20 driver implementation
        ```

### Archivos modificados

- [sensecap_watcher.cc](https://files.seeedstudio.com/wiki/Watcher_Agent/Grove/sensecap_watcher.cc)

- Debes reemplazar el archivo anterior en la siguiente ubicación:

    - ubicación del archivo
        ```text
        main/boards/sensecap-watcher/
        └── sensecap_watcher.cc  # Integrates DHT20 sensor and MCP tool
        ```

:::caution Nota
El código de ejemplo anterior es solo para referencia. Debes modificarlo según tu modelo de sensor específico, entorno de desarrollo y versión de firmware para asegurar una integración adecuada y una compilación exitosa.
:::

## Funcionalidad principal (Sensor DHT20)

### 1. Inicialización del sensor
El controlador DHT20 implementa el proceso completo de inicialización:
    - Paso 1. Reiniciar sensor: Enviar comando de reinicio 0xBA
    - Paso 2. Configuración del sistema: Escribir [0x08, 0x00] al registro 0xE1
    - Paso 3. Verificación de calibración: Verificar el bit[3] del registro de estado para asegurar que el sensor esté calibrado
    - Paso 4. Mecanismo de reintento: Reintentar hasta 5 veces si falla la calibración
    ```cpp
    esp_err_t ret = dht20_sensor_->Initialize();
    if (ret == ESP_OK) {
        ESP_LOGI(TAG, "DHT20 initialized successfully");
    }
    ```

### 2. Lectura de temperatura y humedad
Proceso de lectura:
    - Paso 1. Activar medición: enviar comando [0xAC, 0x33, 0x00]
    - Paso 2. Esperar medición: retraso de 80ms
    - Paso 3. Leer 8 bytes: [estado, humedad Alto, Medio, Bajo | temperatura Alto, Medio, Bajo, CRC]
    - Paso 4. Análisis de datos:
        - Humedad = (valor crudo de 20 bits) × 100 / 2^20
        - Temperatura = (valor crudo de 20 bits) × 200 / 2^20 - 50

    ```cpp
    float temperature, humidity;
    esp_err_t ret = dht20_sensor_->ReadTempAndHumidity(temperature, humidity);
    if (ret == ESP_OK) {
        printf("Temperature: %.2f°C, Humidity: %.2f%%\n", temperature, humidity);
    }
    ```
## Funcionalidad principal (Interfaz de herramienta MCP interna)

### 1. Descripción de la función

- Nombre de la herramienta: `self.grove.get_temperature_humidity`
- Aplicación de la herramienta: Leer la temperatura y humedad actuales del sensor DHT20 conectado a Grove

### 2. Ejemplo de llamada

La IA puede llamarla de la siguiente manera:

```cpp
result = call_tool("self.grove.get_temperature_humidity", {})
```

### 3. Formato de retorno

- Éxito:
    ```cpp
    {
        "temperature": 25.32,
        "humidity": 65.47,
        "status": "ok"
    }
    ```

- Fallo:

    ```cpp
    {
        "error": "DHT20 sensor not initialized"
    }
    ```

    o

    ```cpp
    {
        "error": "Failed to read DHT20: ESP_ERR_TIMEOUT"
    }
    ```

### 4. Protocolo de comunicación I2C

    | Función | Comando/Registro | Datos |
    |-----|-----------|------|
    | Reiniciar sensor | 0xBA | - |
    | Registro de configuración | 0xE1 | [0x08, 0x00] |
    | Activar medición | - | [0xAC, 0x33, 0x00] |
    | Leer estado | - | 1 byte |
    | Leer datos | - | 7 bytes |

### 5. Definición del byte de estado

    | Bit | Función | Valor |
    |---|-----|---|
    | bit[7] | Estado de medición | 1=Midiendo, 0=Inactivo |
    | bit[6:4] | Reservado | - |
    | bit[3] | Estado de calibración | 1=Calibrado, 0=No calibrado |
    | bit[2:0] | Reservado | - |

### 6. Algoritmo de análisis de datos

```cpp
// Humidity data (20 bits)
uint32_t humidity_raw = (data[1] << 12) | (data[2] << 4) | (data[3] >> 4);
float humidity = humidity_raw * 100.0f / 1048576.0f;

// Temperature data (20 bits)
uint32_t temperature_raw = ((data[3] & 0x0F) << 16) | (data[4] << 8) | data[5];
float temperature = temperature_raw * 200.0f / 1048576.0f - 50.0f;
```

## Solución de problemas

### Problemas comunes

1. **Fallo en la inicialización del sensor**
- Posibles causas:
    - La interfaz Grove no está alimentada correctamente
    - Problemas de conexión I2C
    - Sensor no conectado o dañado
- Solución
    ```cpp
    uint32_t grove_power = esp_io_expander_get_level(io_exp_handle, BSP_PWR_GROVE);
    ESP_LOGI(TAG, "Grove power status: %d", grove_power);
    ```
2. **Tiempo de espera de lectura agotado**
- Posibles causas:
    - Sensor ocupado
    - Conflicto en el bus I2C
- Solución
    - Asegurar intervalo ≥1s entre lecturas
    - Verificar otros dispositivos en I2C

3. **Datos inválidos**
- Posibles causas:
    - Sensor no calibrado
    - Verificación CRC falló (no implementada en la versión actual)
- Solución:
    - Re-inicializar sensor
    - Considerar implementar verificación CRC (data[6])

## Referencias

- [Hoja de datos DHT20](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/DHT20.pdf)
- [Esquema de SenseCAP Watcher](https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher/tree/main/Hardware)
- [Especificación de la interfaz Grove](https://wiki.seeedstudio.com/es/Grove_System/)

## Mantenimiento

el código reside en `main/boards/sensecap-watcher/`, no afecta otras placas.

## Soporte técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>