---
description: 本文将指导你在 reTerminal D1001 上驱动 I2S 音频外设。
sku: 100058144
title: 驱动 reTerminal D1001 音频外设
image: https://files.seeedstudio.com/wiki/reTerminal_d10xx/1-reTeriminal-D1001.webp
slug: /driving_reterminal_d1001_audio_peripherals
last_update:
  date: 04/02/2026
  author: Jackson.Li
createdAt: '2026-04-02'
url: https://wiki.seeedstudio.com/cn/driving_reterminal_d1001_audio_peripherals/
updatedAt: '2026-04-02'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 驱动 reTerminal D1001 音频外设

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/hardware.webp" style={{width:900, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=D1001" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div><br />

## 介绍

本指南介绍如何在 **reTerminal D1001** 开发板上驱动 I2S 音频外设。系统架构包含三个核心组件：
- **ESP32-P4**：主处理器，用于管理音频数据流并控制外设配置。
- **ES8311**：低功耗单声道音频编解码器，负责将数字 I2S 数据转换为模拟音频信号。
- **PCA9535**：I2C IO 扩展芯片，用于控制功率放大器的使能状态，为外设控制提供灵活的 GPIO 扩展。


### 音频架构框图

音频系统采用双总线架构：**I2S 总线**专门用于高速数字音频数据传输，而 **I2C 总线**则负责对编解码器和 IO 扩展芯片进行低速控制命令传输。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/Driving_Audio_Peripherals/D1001_Block_diagram.jpg" style={{width:800, height:'auto'}}/></div>

### 引脚分配与工作原理

#### ESP32-P4 与 ES8311（音频数据与控制）

| 信号名称 | ESP32-P4 引脚 | 功能描述 |
| :--- | :--- | :--- |
| **I2C_SDA** | GPIO20 | **串行数据**：将配置命令（音量、采样率）发送到 ES8311。 |
| **I2C_SCL** | GPIO21 | **串行时钟**：用于同步 I2C 数据传输。 |
| **I2S_MCK** | GPIO33 | **主时钟（Master Clock）**：为编解码器内部的 Δ-Σ 调制器提供高频参考时钟。 |
| **I2S_BCK** | GPIO32 | **位时钟（Bit Clock）**：用于同步音频数据流中的每一位数据。 |
| **I2S_WS**  | GPIO31 | **字选择（Word Select）**：也称为 LRCK，用于定义新音频帧的开始并选择左右声道。 |
| **I2S_DO**  | GPIO30 | **数据输出**：将来自 ESP32-P4 的数字 PCM 音频数据发送到编解码器。 |
| **I2S_DI**  | GPIO11 | **数据输入**：为后续音频录制或编解码器回环功能预留。 |

#### ESP32-P4 与 PCA9535RGER（GPIO 扩展）

| 信号名称 | ESP32-P4 引脚 | 功能描述 |
| :--- | :--- | :--- |
| **I2C_SDA** | GPIO20 | 与 PCA9535 IO 扩展芯片共享的 I2C 数据总线。 |
| **I2C_SCL** | GPIO21 | 共享的 I2C 时钟总线。 |
| **EN_PA**   | **EXP_GPO11** | **PA 使能**：映射到 PCA9535 的引脚 **P13**。将其置为高电平可使能外部功率放大器。 |

## 软件流程

### GitHub 示例仓库

从 GitHub 下载官方 reTerminal D1001 仓库以获取源代码和驱动程序。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/reTerminal-D1001" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载示例代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::tip
请在仓库中导航至 `driver_examples/01_I2SCodec` 目录，以找到该音频示例的具体源代码和工程文件。
:::

### 开发执行顺序

#### 步骤 1. 初始化 I2C IO 扩展芯片（PCA9535RGER）

外部功率放大器（PA）通过 PCA9535 扩展芯片进行控制。启用 PA 至关重要，因为即便编解码器工作正常，如果未使能 PA，扬声器也不会输出可听声音。

```c
static esp_err_t pca9535_write_reg(uint8_t reg, uint8_t data)
{
    uint8_t write_buf[2] = {reg, data};
    return i2c_master_write_to_device(1, PCA9535_I2C_ADDR, write_buf, sizeof(write_buf), 1000 / portTICK_PERIOD_MS);
}

static void pca9535_init(void)
{
    int i2c_master_port = 1; // Use I2C_NUM_1
    i2c_config_t conf = {
        .mode = I2C_MODE_MASTER,
        .sda_io_num = MISC_I2C_SDA,
        .sda_pullup_en = GPIO_PULLUP_ENABLE,
        .scl_io_num = MISC_I2C_SCL,
        .scl_pullup_en = GPIO_PULLUP_ENABLE,
        .master.clk_speed = 100000,
    };
    i2c_param_config(i2c_master_port, &conf);
    i2c_driver_install(i2c_master_port, conf.mode, 0, 0, 0);

    // Configure Port 0 and Port 1 as output mode (0 = output, 1 = input)
    pca9535_write_reg(0x06, 0x00); 
    pca9535_write_reg(0x07, 0x00); 

    // Set P13 to HIGH to enable the Power Amplifier
    pca9535_write_reg(0x02, 0x00); 
    pca9535_write_reg(0x03, 0x08); 

    ESP_LOGI(TAG, "PCA9535 initialized, P13 set to HIGH");
}
```

#### 步骤 2. 配置 I2S 驱动

I2S 是一种专门用于传输数字音频的同步串行通信协议。我们将 ESP32-P4 配置为 **I2S 主机（Master）**，这意味着它向编解码器提供 BCLK 和 WS 时钟。

```c
static esp_err_t i2s_driver_init(void)
{
    i2s_chan_config_t chan_cfg = I2S_CHANNEL_DEFAULT_CONFIG(I2S_NUM, I2S_ROLE_MASTER);
    chan_cfg.auto_clear = true; // Prevents playing stale data from the buffer
    ESP_ERROR_CHECK(i2s_new_channel(&chan_cfg, &tx_handle, &rx_handle));
    i2s_std_config_t std_cfg = {
        .clk_cfg = I2S_STD_CLK_DEFAULT_CONFIG(EXAMPLE_SAMPLE_RATE),
        .slot_cfg = I2S_STD_PHILIPS_SLOT_DEFAULT_CONFIG(I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_STEREO),
        .gpio_cfg = {
            .mclk = I2S_MCK_IO,
            .bclk = I2S_BCK_IO,
            .ws = I2S_WS_IO,
            .dout = I2S_DO_IO,
            .din = I2S_DI_IO,
            .invert_flags = {
                .mclk_inv = false,
                .bclk_inv = false,
                .ws_inv = false,
            },
        },
    };
    std_cfg.clk_cfg.mclk_multiple = EXAMPLE_MCLK_MULTIPLE;

    ESP_ERROR_CHECK(i2s_channel_init_std_mode(tx_handle, &std_cfg));
    ESP_ERROR_CHECK(i2s_channel_init_std_mode(rx_handle, &std_cfg));
    ESP_ERROR_CHECK(i2s_channel_enable(tx_handle));
    ESP_ERROR_CHECK(i2s_channel_enable(rx_handle));
    return ESP_OK;
}
```

#### 步骤 3. 初始化 ES8311 编解码器

ES8311 必须根据 ESP32-P4 中定义的 I2S 设置（采样率、数据宽度）进行相应配置。这通过 I2C 总线完成。在构建工程之前，你可以通过修改 `main/example_config.h` 中的宏来自定义音频行为：

| 宏 | 描述 | 设置原则 |
| :--- | :--- | :--- |
| **EXAMPLE_SAMPLE_RATE** | **音频采样率**（Hz） | 定义音频采样的频率。常见取值为 `16000`（语音）或 `44100`/`48000`（音乐）。 |
| **EXAMPLE_MCLK_MULTIPLE** | **MCLK 与 LRCLK 的倍数关系** | 主时钟（MCLK）必须是采样率的整数倍。`256` 是 16 位音频的常用值，而 `384` 经常用于更高精度。 |
| **EXAMPLE_VOICE_VOLUME** | **播放音量** | 范围为 `0` 到 `100`。设置 ES8311 编解码器的初始输出电平。 |
| **EXAMPLE_MIC_GAIN** | **麦克风增益**（dB） | 调节双麦克风的灵敏度。值越大，音量越高，但可能引入噪声。 |
| **EXAMPLE_RECV_BUF_SIZE** | **DMA 缓冲区大小** | 控制 DMA 处理的数据块大小。更大的缓冲区可避免卡顿，但会增加音频延迟。 |

```c
static esp_err_t es8311_codec_init(void)
{
    const i2c_config_t es_i2c_cfg = {
        .sda_io_num = I2C_SDA_IO,
        .scl_io_num = I2C_SCL_IO,
        .mode = I2C_MODE_MASTER,
        .sda_pullup_en = GPIO_PULLUP_ENABLE,
        .scl_pullup_en = GPIO_PULLUP_ENABLE,
        .master.clk_speed = 100000,
    };
    i2c_param_config(I2C_NUM, &es_i2c_cfg);
    i2c_driver_install(I2C_NUM, I2C_MODE_MASTER,  0, 0, 0);

    es8311_handle_t es_handle = es8311_create(I2C_NUM, ES8311_ADDRRES_0);
    const es8311_clock_config_t es_clk = {
        .mclk_inverted = false,
        .sclk_inverted = false,
        .mclk_from_mclk_pin = true,
        .mclk_frequency = EXAMPLE_MCLK_FREQ_HZ,
        .sample_frequency = EXAMPLE_SAMPLE_RATE
    };

    es8311_init(es_handle, &es_clk, ES8311_RESOLUTION_16, ES8311_RESOLUTION_16);
    es8311_sample_frequency_config(es_handle, EXAMPLE_SAMPLE_RATE * EXAMPLE_MCLK_MULTIPLE, EXAMPLE_SAMPLE_RATE);
    es8311_voice_volume_set(es_handle, EXAMPLE_VOICE_VOLUME, NULL);
    es8311_microphone_config(es_handle, false);
    return ESP_OK;
}
```

#### 步骤 4. 主入口与任务创建

主应用程序首先初始化各外设，然后将播放逻辑交由一个专用的 FreeRTOS 任务来处理。

```c
void app_main(void)
{
    pca9535_init();

    if (i2s_driver_init() != ESP_OK) {
        ESP_LOGE(TAG, "i2s driver init failed");
        abort();
    }

    if (es8311_codec_init() != ESP_OK) {
        ESP_LOGE(TAG, "es8311 codec init failed");
        abort();
    }

    xTaskCreate(i2s_music, "i2s_music", 4096, NULL, 5, NULL);
}
```

#### 步骤 5. DMA 预加载与数据播放

**DMA（Direct Memory Access，直接存储器访问）** 允许 I2S 外设在无需 CPU 干预的情况下直接从内存中获取数据。对 DMA 缓冲区进行**预加载**是一项关键技术，可防止在 I2S 硬件以空缓冲区启动时产生“爆音”——这是由于直流偏移突然变化而导致的噪声。

```c
static void i2s_music(void *args)
{
    esp_err_t ret = ESP_OK;
    size_t bytes_write = 0;
    uint8_t *data_ptr = (uint8_t *)music_pcm_start;

    // Preload data to avoid initial "pop" sound
    ESP_ERROR_CHECK(i2s_channel_disable(tx_handle));
    ESP_ERROR_CHECK(i2s_channel_preload_data(tx_handle, data_ptr, music_pcm_end - data_ptr, &bytes_write));
    data_ptr += bytes_write;

    ESP_ERROR_CHECK(i2s_channel_enable(tx_handle));
    while (1) {
        ret = i2s_channel_write(tx_handle, data_ptr, music_pcm_end - data_ptr, &bytes_write, portMAX_DELAY);
        if (ret != ESP_OK) {
            ESP_LOGE(TAG, "[music] i2s write failed");
            abort();
        }
        data_ptr = (uint8_t *)music_pcm_start; // Loop playback
        vTaskDelay(1000 / portTICK_PERIOD_MS);
    }
}
```

## 故障排查

### Q1：扬声器无声音输出
- **检查**：确认功率放大器（PA）已启用。`EN_PA` 信号由 PCA9535 IO 扩展器的 **P13** 引脚控制。确保已调用 `pca9535_init()` 并正确设置输出寄存器（端口 1，第 3 位）。
- **检查**：确认 I2S 连接无误，并确保已为 TX 通道调用 `i2s_channel_enable()` 函数。

### Q2：音频失真或包含噼啪噪声
- **检查**：确保 I2S 时钟配置（MCLK、BCLK、WS）与音频文件的采样率匹配。`EXAMPLE_SAMPLE_RATE` 不匹配会导致音高和速度问题。
- **检查**：确认已按 **步骤 5** 所示实现 DMA 预加载。预加载可防止在缓冲区为空时启动通道所产生的“爆音”。

### Q3：与 ES8311 或 PCA9535 的 I2C 通信失败
- **检查**：确认 I2C SDA（GPIO20）和 SCL（GPIO21）连接正确。确保没有其他外设与这些引脚发生冲突。
- **检查**：确认 I2C 地址正确：PCA9535 为 **0x20**，ES8311 为 **0x18**。

## 技术支持与产品讨论

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
