---
title: Seeed Studio XIAO nRF54L15 Sense 内置传感器
description: 本文介绍如何使用 XIAO MG24 Sense 上的麦克风。
image: https://files.seeedstudio.com/wiki/mg24_mic/mg24.jpg
slug: /cn/xiao_nrf54l15_sense_built_in_sensor
keywords:
  - XIAO
  - MG24
last_update:
  date: 11/20/2024 
  author: Jason
sidebar_position: 1
---

# Seeed Studio XIAO nRF54L15 Sense 内置传感器的使用

以下示例代码专为 PlatformIO 设计，但也与 nRF Connect SDK 兼容。

:::tip
基于 VS Code，如果您想在 nRF Connect SDK 上使用以下案例，请参考提供的连接，添加 app.overlay 文件并修改 prj.conf 中的内容

[XIAO nRF54L15 添加 overlay 文件并修改 conf 文件](https://wiki.seeedstudio.com/xiao_nrf54l15_sense_getting_started/#/add-overlay-and-modify-the-conf-file/)。

:::

## XIAO nRF54L15 Sense IMU

**6轴 IMU（惯性测量单元）** 传感器如 **LSM6DS3TR-C** 集成了加速度计和陀螺仪，用于测量物体在三维空间中的运动和方向。具体来说，LSM6DS3TR-C 具有以下特性：

**加速度计功能：**

- 测量物体沿 X、Y 和 Z 轴的加速度。能够感知物体运动（例如，静止、加速、减速）和倾斜变化（例如，物体的角度）。
- 可用于检测步态、位置变化、振动等。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz1.5.jpg" style={{width:320, height:'auto'}}/></div>

**陀螺仪功能：**

- 测量物体围绕 X、Y 和 Z 轴的角速度，即物体的旋转。
- 可用于检测旋转、旋转速率和方向变化。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz2.0.jpg" style={{width:320, height:'auto'}}/></div>

- **X轴角度（Roll）** 是围绕 X 轴旋转方向的角度。
- **Y轴角度（Pitch）** 是围绕 Y 轴旋转方向的角度。
- **Z轴角度（Yaw）** 是围绕 Z 轴旋转方向的角度。

### IMU 驱动程序

为了简化您的开发体验并确保快速开始使用此 IMU 程序，我们利用了 PlatformIO 平台来编写必要的驱动程序代码。PlatformIO 为嵌入式开发提供了一个全面而高效的环境，使其成为 XIAO nRF54L15 Sense 的理想选择。

在继续之前，请确保您的开发环境已正确设置。如果您尚未将 Seeed Studio XIAO nRF54L15 开发板添加到您的 PlatformIO 配置中，请参考此[链接](http://localhost:3000/xiao_nrf54l15_with_platform_io/)获取如何配置的详细说明。这个关键步骤将使 PlatformIO 能够正确识别并为您的开发板编译代码。

- 一旦您的环境准备就绪，IMU 驱动程序将允许您从 LSM6DS3TR-C 读取原始传感器数据。此数据包括：

- 加速度计原始值（accel raw）：表示沿 X、Y 和 Z 轴的加速度。

- 陀螺仪原始值（gyro raw）：表示围绕 X、Y 和 Z 轴的角速度。

触发计数（trig_cnt）：一个随每个新数据样本递增的计数器。

以下是您可以从 IMU 期望看到的串行输出示例，如 PlatformIO 设备监视器中显示的那样。此输出提供加速度计和陀螺仪数据的实时读数，这对于理解设备的运动和方向至关重要。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/imu_display.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:1000, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>来自 PlatformIO 设备监视器的实时 IMU 数据输出，显示原始加速度计和陀螺仪读数。</em></p>
</div>

这些原始数据通过应用适当的算法（例如，滤波、传感器融合），为各种应用奠定了基础，从简单的运动检测到复杂的方向跟踪。

---

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-imu" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

```cpp
#include <stdio.h>
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/i2c.h>
#include <zephyr/logging/log.h>
#include <zephyr/devicetree.h>

LOG_MODULE_REGISTER(lsm6dso_i2c_example, LOG_LEVEL_INF);

// --- LSM6DSO I2C address and register definitions ---
#define LSM6DSO_I2C_ADDR    0x6A // LSM6DSO I2C device address

#define LSM6DSO_REG_WHO_AM_I 0x0F // Identification register
#define LSM6DSO_WHO_AM_I_VAL 0x6A // Expected WHO_AM_I value

#define LSM6DSO_REG_CTRL1_XL 0x10 // Accelerometer control register
#define LSM6DSO_REG_CTRL2_G  0x11 // Gyroscope control register
// Accelerometer/gyroscope data output registers (low byte first)
#define LSM6DSO_REG_OUTX_L_XL 0x28 // Accelerometer X axis low byte
#define LSM6DSO_REG_OUTX_L_G  0x22 // Gyroscope X axis low byte

// --- Data structure definitions ---
// Structure for storing raw sensor data
struct lsm6dso_raw_data {
    int16_t accel_x;
    int16_t accel_y;
    int16_t accel_z;
    int16_t gyro_x;
    int16_t gyro_y;
    int16_t gyro_z;
};

// --- Helper functions ---

/**
 * @brief Write a single byte to an LSM6DSO register via I2C.
 */
static int lsm6dso_i2c_reg_write_byte(const struct device *i2c_dev, uint8_t reg_addr, uint8_t value)
{
    uint8_t tx_buf[2] = {reg_addr, value};
    return i2c_write(i2c_dev, tx_buf, sizeof(tx_buf), LSM6DSO_I2C_ADDR);
}

/**
 * @brief Read a single byte from an LSM6DSO register via I2C.
 */
static int lsm6dso_i2c_reg_read_byte(const struct device *i2c_dev, uint8_t reg_addr, uint8_t *value)
{
    return i2c_reg_read_byte(i2c_dev, LSM6DSO_I2C_ADDR, reg_addr, value);
}

/**
 * @brief Read multiple consecutive bytes from LSM6DSO register via I2C.
 */
static int lsm6dso_i2c_reg_read_bytes(const struct device *i2c_dev, uint8_t reg_addr, uint8_t *data, uint8_t len)
{
    return i2c_burst_read(i2c_dev, LSM6DSO_I2C_ADDR, reg_addr, data, len);
}

// --- LSM6DSO driver core functionality ---

/**
 * @brief Initialize the LSM6DSO sensor.
 * Check WHO_AM_I and set ODR for accelerometer and gyroscope.
 */
static int lsm6dso_init(const struct device *i2c_dev)
{
    uint8_t who_am_i = 0;
    int ret;

    // Verify device ID
    ret = lsm6dso_i2c_reg_read_byte(i2c_dev, LSM6DSO_REG_WHO_AM_I, &who_am_i);
    if (ret != 0) {
        LOG_ERR("Failed to read WHO_AM_I register (err: %d)", ret);
        return ret;
    }
    if (who_am_i != LSM6DSO_WHO_AM_I_VAL) {
        LOG_ERR("Invalid WHO_AM_I: 0x%02x, expected 0x%02x", who_am_i, LSM6DSO_WHO_AM_I_VAL);
        return -ENODEV;
    }
    LOG_INF("LSM6DSO WHO_AM_I check passed. ID: 0x%02x", who_am_i);

    // Set accelerometer ODR (12.5 Hz) and 2g range (0x20)
    ret = lsm6dso_i2c_reg_write_byte(i2c_dev, LSM6DSO_REG_CTRL1_XL, 0x20);
    if (ret != 0) {
        LOG_ERR("Failed to set CTRL1_XL register (err: %d)", ret);
        return ret;
    }

    // Set gyroscope ODR (12.5 Hz) and 250dps range (0x20)
    ret = lsm6dso_i2c_reg_write_byte(i2c_dev, LSM6DSO_REG_CTRL2_G, 0x20);
    if (ret != 0) {
        LOG_ERR("Failed to set CTRL2_G register (err: %d)", ret);
        return ret;
    }

    LOG_INF("LSM6DSO initialized successfully.");
    return 0;
}

/**
 * @brief Fetch raw accelerometer and gyroscope data from LSM6DSO sensor.
 * @param i2c_dev Pointer to I2C device structure.
 * @param raw_data_out Pointer to structure for storing raw data.
 * @return 0 on success, negative value on failure.
 */
static int lsm6dso_fetch_raw_data(const struct device *i2c_dev, struct lsm6dso_raw_data *raw_data_out)
{
    uint8_t accel_data[6];
    uint8_t gyro_data[6];
    int ret;

    // Read accelerometer data (6 bytes)
    ret = lsm6dso_i2c_reg_read_bytes(i2c_dev, LSM6DSO_REG_OUTX_L_XL, accel_data, 6);
    if (ret != 0) {
        LOG_ERR("Failed to read accelerometer data (err: %d).", ret);
        return ret;
    }
    // Raw data is 16-bit signed integer, low byte first
    raw_data_out->accel_x = (int16_t)(accel_data[0] | (accel_data[1] << 8));
    raw_data_out->accel_y = (int16_t)(accel_data[2] | (accel_data[3] << 8));
    raw_data_out->accel_z = (int16_t)(accel_data[4] | (accel_data[5] << 8));

    // Read gyroscope data (6 bytes)
    ret = lsm6dso_i2c_reg_read_bytes(i2c_dev, LSM6DSO_REG_OUTX_L_G, gyro_data, 6);
    if (ret != 0) {
        LOG_ERR("Failed to read gyroscope data (err: %d).", ret);
        return ret;
    }
    // Raw data is 16-bit signed integer, low byte first
    raw_data_out->gyro_x = (int16_t)(gyro_data[0] | (gyro_data[1] << 8));
    raw_data_out->gyro_y = (int16_t)(gyro_data[2] | (gyro_data[3] << 8));
    raw_data_out->gyro_z = (int16_t)(gyro_data[4] | (gyro_data[5] << 8));

    return 0;
}

/**
 * @brief Display raw accelerometer and gyroscope data.
 * @param raw_data Pointer to structure containing raw data.
 * @param count Polling counter.
 */
static void lsm6dso_display_raw_data(const struct lsm6dso_raw_data *raw_data, int count)
{
    printf("accel raw: X:%d Y:%d Z:%d (LSB)\n",
           raw_data->accel_x, raw_data->accel_y, raw_data->accel_z);
    printf("gyro raw: X:%d Y:%d Z:%d (LSB)\n",
           raw_data->gyro_x, raw_data->gyro_y, raw_data->gyro_z);
    printf("trig_cnt:%d\n\n", count);
}

// --- Main function ---

int main(void)
{
    const struct device *i2c_dev = DEVICE_DT_GET(DT_NODELABEL(i2c30));
    struct lsm6dso_raw_data sensor_data;
    static int trig_cnt = 0; // Ensure only initialized once in main scope

    if (!device_is_ready(i2c_dev)) {
        LOG_ERR("I2C device %s is not ready!", i2c_dev->name);
        return 0;
    }
    LOG_INF("I2C device %s is ready.", i2c_dev->name);

    if (lsm6dso_init(i2c_dev) != 0) {
        LOG_ERR("Failed to initialize LSM6DSO sensor.");
        return 0;
    }

    printf("Testing LSM6DSO sensor in polling mode (custom I2C driver) - Raw Data Output.\n\n");

    while (1) {
        trig_cnt++; // Increment counter at the start of each loop

        // Fetch raw data
        if (lsm6dso_fetch_raw_data(i2c_dev, &sensor_data) == 0) {
            // Display raw data
            lsm6dso_display_raw_data(&sensor_data, trig_cnt);
        } else {
            LOG_ERR("Failed to fetch data.");
        }

        k_sleep(K_MSEC(1000)); // Read once every second
    }

    return 0;
}
```

## XIAO nRF54L15 Sense 麦克风

**MSM261DGT006** 是一个数字麦克风（DMIC），输出脉冲密度调制（PDM）数据，使其适合与 XIAO nRF54L15 Sense 等微控制器进行直接数字接口连接。我们的 DMIC 驱动程序专门设计用于处理这种 PDM 输出，将其转换为可用的音频采样，并为各种应用进行处理。

驱动程序初始化麦克风，设置适当的采样率（例如，标准音频为 16000 Hz），并配置 PDM 时钟频率。然后它持续从麦克风读取采样缓冲区，允许实时音频捕获。

当在 PlatformIO 设备监视器中查看时，DMIC 驱动程序的输出提供了关于麦克风操作和传入音频数据的重要信息。您将观察到的关键消息包括：

- `DMIC sample=:`：表示 DMIC 采样过程的开始。

- `PCM output rate: 16000, channels: 1`：确认音频输出设置，通常为 16 kHz 的采样率和单声道音频。

- `dmic_nrf_pdm: PDM clock frequency: 1280000, actual PCM rate: 16000`：显示内部 PDM 时钟频率和生成的 PCM 音频采样率。

- `got buffer 0x... of 3200 bytes:`：确认驱动程序成功从麦克风接收到音频数据缓冲区。显示十六进制地址（例如 0x20004C8）和字节大小（例如 3200 字节）。这些缓冲区包含可以进行处理或分析的原始音频采样。

- `dmix_sample: Exiting:`：表示 DMIC 采样过程已停止。

以下是当 DMIC 驱动程序运行时，您可以在 PlatformIO 设备监视器中看到的典型输出示例，说明了音频数据的成功捕获和缓冲。

### DMIC 驱动程序

这些原始音频数据一旦被捕获，就可以用于广泛的应用，包括语音命令、声音事件检测、环境噪声监测以及更复杂的音频处理任务。

以下代码示例演示了如何使用 XIAO nRF54L15 板上的按钮录制音频，并将录制的 WAV 文件保存在计算机上。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-dmic-recorder">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

```cpp
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/audio/dmic.h>
#include <zephyr/sys/util.h>
#include <zephyr/logging/log.h>
#include <zephyr/drivers/uart.h>

LOG_MODULE_REGISTER(mic_capture_sample, LOG_LEVEL_INF);

#define RECORD_TIME_S  10                // Recording duration (seconds)
#define SAMPLE_RATE_HZ 16000            // Sample rate (Hz)
#define SAMPLE_BIT_WIDTH 16             // Sample bit width (bits)
#define BYTES_PER_SAMPLE (SAMPLE_BIT_WIDTH / 8) // Bytes per sample

#define READ_TIMEOUT_MS 1000            // DMIC read timeout (ms)
#define CHUNK_DURATION_MS 100           // Duration of each chunk (ms)
#define CHUNK_SIZE_BYTES  (BYTES_PER_SAMPLE * (SAMPLE_RATE_HZ * CHUNK_DURATION_MS) / 1000) // Chunk size (bytes)
#define CHUNK_COUNT       8             // Number of blocks in memory pool
#define TOTAL_CHUNKS      (RECORD_TIME_S * 1000 / CHUNK_DURATION_MS) // Total number of chunks

static const struct device *const dmic_dev = DEVICE_DT_GET(DT_ALIAS(dmic20)); // DMIC device handle
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(DT_ALIAS(led0), gpios); // LED device descriptor
static const struct gpio_dt_spec button = GPIO_DT_SPEC_GET(DT_ALIAS(sw0), gpios); // Button device descriptor
static const struct device *const console_dev = DEVICE_DT_GET(DT_CHOSEN(zephyr_console)); // Console UART device

K_MEM_SLAB_DEFINE_STATIC(mem_slab, CHUNK_SIZE_BYTES, CHUNK_COUNT, 4); // Audio data memory pool
K_MSGQ_DEFINE(audio_msgq, sizeof(void *), CHUNK_COUNT, 4);

static K_SEM_DEFINE(tx_done_sem, 0, 1); // Button semaphore
static K_SEM_DEFINE(button_sem, 0, 1); // UART TX done semaphore

static const uint8_t packet_start[] = {0xAA, 0x55, 'S', 'T', 'A', 'R', 'T'}; // Packet start marker
static const uint8_t packet_end[] = {0xAA, 0x55, 'E', 'N', 'D'};             // Packet end marker

static struct gpio_callback button_cb_data;

/**
 * @brief UART callback function
 *
 * @param dev UART device pointer
 * @param evt UART event
 * @param user_data User data (unused)
 */
static void uart_tx_callback(const struct device *dev, struct uart_event *evt, void *user_data)
{
    if (evt->type == UART_TX_DONE) {
        k_sem_give(&tx_done_sem);
    }
}

/**
 * @brief Button interrupt callback function
 *
 * @param dev Button device pointer
 * @param cb  Callback structure pointer
 * @param pins Triggered pins
 */
void button_pressed(const struct device *dev, struct gpio_callback *cb, uint32_t pins)
{
    k_sem_give(&button_sem);
}

/**
 * @brief Send a data packet via UART (polling, for small packets)
 *
 * @param data Data pointer
 * @param len  Data length
 */
static void send_packet_poll(const uint8_t *data, size_t len)
{
    for (size_t i = 0; i < len; i++) {
        uart_poll_out(console_dev, data[i]);
    }
}

/**
 * @brief UART writer thread function
 *
 * This thread continuously reads audio data from the message queue and sends it via UART.
 * It waits for the semaphore to signal that the previous transmission is done before sending the next chunk.
 */
void uart_writer_thread(void *p1, void *p2, void *p3)
{
    uart_callback_set(console_dev, uart_tx_callback, NULL);

    while (true) {
        void *buffer;
        k_msgq_get(&audio_msgq, &buffer, K_FOREVER);

        if (buffer == NULL) {
            send_packet_poll(packet_end, sizeof(packet_end));
            continue;
        }
        
        uart_tx(console_dev, buffer, CHUNK_SIZE_BYTES, SYS_FOREVER_US);
        k_sem_take(&tx_done_sem, K_FOREVER);
        
        k_mem_slab_free(&mem_slab, buffer);
    }
}


K_THREAD_DEFINE(uart_writer_tid, 2048, uart_writer_thread, NULL, NULL, NULL,
                K_PRIO_COOP(7), 0, 0);

static struct pcm_stream_cfg stream_cfg = {
    .pcm_rate = SAMPLE_RATE_HZ,
    .pcm_width = SAMPLE_BIT_WIDTH,
    .block_size = CHUNK_SIZE_BYTES,
    .mem_slab = &mem_slab,
}; // PCM stream configuration

static struct dmic_cfg dmic_config = {
    .io = {
        .min_pdm_clk_freq = 1000000,
        .max_pdm_clk_freq = 3500000,
        .min_pdm_clk_dc = 40,
        .max_pdm_clk_dc = 60,
    },
    .streams = &stream_cfg,
    .channel = {
        .req_num_streams = 1,
        .req_num_chan = 1,
    },
}; // DMIC configuration

/**
 * @brief Record audio from DMIC and stream it via UART
 *
 * @return 0 on success, negative error code on failure
 */
static int record_and_stream_audio(void)
{
    int ret;
    void *buffer;
    uint32_t size;

    k_msgq_purge(&audio_msgq);

    ret = dmic_configure(dmic_dev, &dmic_config);
    if (ret < 0) {
        LOG_ERR("Failed to configure DMIC: %d", ret);
        return ret;
    }

    ret = dmic_trigger(dmic_dev, DMIC_TRIGGER_START);
    if (ret < 0) {
        LOG_ERR("Failed to start DMIC: %d", ret);
        return ret;
    }

    ret = dmic_read(dmic_dev, 0, &buffer, &size, READ_TIMEOUT_MS);
    if (ret < 0) {
        LOG_WRN("Failed to read discard chunk: %d", ret);
    } else {
        k_mem_slab_free(&mem_slab, buffer);
    }

    send_packet_poll(packet_start, sizeof(packet_start));

    for (int i = 0; i < TOTAL_CHUNKS; i++) {
        ret = dmic_read(dmic_dev, 0, &buffer, &size, READ_TIMEOUT_MS);
        if (ret < 0) {
            LOG_ERR("Failed to read from DMIC: %d", ret);
            break;
        }

        ret = k_msgq_put(&audio_msgq, &buffer, K_MSEC(500));
        if (ret != 0) {
            LOG_ERR("Failed to queue buffer. UART thread might be too slow.");
            k_mem_slab_free(&mem_slab, buffer);
            break;
        }
    }

    (void)dmic_trigger(dmic_dev, DMIC_TRIGGER_STOP);

    void *end_marker = NULL;
    k_msgq_put(&audio_msgq, &end_marker, K_NO_WAIT);

    LOG_INF("Audio capture finished and data queued.");
    return 0;
}

/**
 * @brief Main function, initializes peripherals and waits for button to trigger recording in a loop
 *
 * @return Always returns 0
 */
int main(void)
{
    int ret;

 // Check if all required devices are ready
    if (!device_is_ready(dmic_dev) || !device_is_ready(led.port) || 
        !device_is_ready(button.port) || !device_is_ready(console_dev)) {
        LOG_ERR("A required device is not ready.");
        return -ENODEV;
    }

 // Configure DMIC channel mapping
    dmic_config.channel.req_chan_map_lo = dmic_build_channel_map(0, 0, PDM_CHAN_LEFT);

    // Configure LED as output
    ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE);
    if (ret < 0) { return ret; }

    // Configure button as input and enable interrupt
    ret = gpio_pin_configure_dt(&button, GPIO_INPUT);
    if (ret < 0) { return ret; }
    ret = gpio_pin_interrupt_configure_dt(&button, GPIO_INT_EDGE_TO_ACTIVE);
    if (ret < 0) { return ret; }
    gpio_init_callback(&button_cb_data, button_pressed, BIT(button.pin));
    gpio_add_callback(button.port, &button_cb_data);

    LOG_INF("Zephyr Audio Streamer Ready.");
    LOG_INF("Press button SW0 to start recording...");

    // Main loop, wait for button to trigger recording
    while (1) {
        k_sem_take(&button_sem, K_FOREVER);
        LOG_INF("Button pressed, starting capture...");

        gpio_pin_set_dt(&led, 0);
        record_and_stream_audio();
        gpio_pin_set_dt(&led, 1);

        LOG_INF("\nPress button SW0 to start recording again...");
    }

    return 0;
}
```

接下来，在 scripts 文件夹目录中打开终端并执行以下操作，前提是程序已经被烧录。

**步骤 1:**

- `python3 -m pip install pyserial`

**步骤 2:**

- `python record.py -p /dev/cu.usbmodemA0CBDDC33 -o output.wav -b 921600`

:::tip
在此命令`python record.py -p **/dev/cu.usbmodemA0CBDDC33** -o output.wav -b 921600`中，您需要将其替换为您的串口以供使用。
:::
**步骤 3:**

- 执行命令后，系统将提示您按下按钮来录制声音。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/dmic_record1.jpg" style={{width:900, height:'auto'}}/></div>

录制音频后，文件将保存在 scripts 中
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/dmic_record2.jpg" style={{width:500, height:'auto'}}/></div>

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
