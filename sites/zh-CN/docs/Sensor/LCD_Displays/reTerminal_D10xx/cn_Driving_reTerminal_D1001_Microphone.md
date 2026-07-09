---
description: 本文介绍如何驱动 reTerminal D1001 上的 I2S 麦克风，并通过扬声器实现 10 秒录音和 10 秒回放循环。
sku: 100058144
title: 驱动 reTerminal D1001 麦克风
image: https://files.seeedstudio.com/wiki/reTerminal_d10xx/1-reTeriminal-D1001.webp
slug: /driving_reterminal_d1001_microphone
last_update:
  date: 04/17/2026
  author: Jackson.Li
createdAt: '2026-04-17'
url: https://wiki.seeedstudio.com/cn/driving_reterminal_d1001_microphone/
updatedAt: '2026-04-17'
---

# 驱动 reTerminal D1001 麦克风

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/hardware.webp" style={{width:900, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=D1001" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div><br />

## 介绍

本教程展示如何驱动 **reTerminal D1001** 上的 **I2S 麦克风**，以及如何构建一个完整的**录音-回放循环**：
- 从麦克风录音 **10 秒**（ES7210 采集路径）。
- 将录制的 PCM 数据回放 **10 秒**（ES8311 扬声器路径）。
- 持续循环以验证 RX 和 TX 音频通路。

本示例中的音频路径包含三个关键部分：
- **ESP32-P4**：采集麦克风 PCM 数据并发送回放 PCM 数据。
- **ES7210**（**I2C 地址：`0x40`**）：将模拟麦克风信号转换为数字 I2S 数据。
- **ES8311 + PA 控制（PCA9535）**：将 PCM 转换为扬声器输出，并在回放时使能功放。

## 麦克风 + 扬声器架构

### 方框图（ES7210 + ES8311）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/Driving_Audio_Peripherals/microphone.jpg" style={{width:800, height:'auto'}}/></div>

### 引脚映射表

| 信号组 | 信号名称 | ESP32-P4 引脚 | 连接器件 | 描述 |
| :--- | :--- | :--- | :--- | :--- |
| 共享 I2C 控制 | I2C_SDA | GPIO20 | ES7210 / PCA9535 | 用于 ES7210 配置和 PA 控制的共享 I2C 数据线 |
| 共享 I2C 控制 | I2C_SCL | GPIO21 | ES7210 / PCA9535 | 共享 I2C 时钟线 |
| 麦克风 I2S（RX） | ADC_I2S_MCLK | GPIO29 | ES7210 | ES7210 的主时钟 |
| 麦克风 I2S（RX） | ADC_I2S_SCLK | GPIO28 | ES7210 | ES7210 采集路径的位时钟 |
| 麦克风 I2S（RX） | ADC_I2S_LRCK | GPIO27 | ES7210 | 字选择（LRCK） |
| 麦克风 I2S（RX） | ADC_I2S_SDOUT | GPIO26 | ES7210 | 从 ES7210 输出到 ESP32-P4 的 PCM 数据 |
| PA 控制 | EN_PA (EXP_GPO11) | PCA9535 P13 | 功率放大器 | 在验证麦克风 + 扬声器循环回放时保持为 HIGH |

此表聚焦于麦克风路径。在本示例中，ES8311 也共享同一 I2C 总线用于回放编解码器配置。

## 软件流程

### GitHub 示例仓库

从 GitHub 下载官方 reTerminal D1001 仓库：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/reTerminal-D1001" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载示例代码</font></span></strong>
    </a>
</div><br />

### 工程目录结构

下图展示了本示例所使用的工程目录结构。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/Driving_Audio_Peripherals/Project_Structure_Diagram.jpg" style={{width:900, height:'auto'}}/></div>

:::tip
请在仓库中进入 ES7210 + ES8311 的录音与回放示例目录（例如 `driver_examples/02_I2SCodec_es7210`）。
:::

### 开发执行顺序

#### 步骤 1. 通过 PCA9535 初始化 PA 控制

扬声器路径需要通过 PCA9535 使能 PA 引脚（P13 = HIGH）。

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

    pca9535_write_reg(0x06, 0x00);
    pca9535_write_reg(0x07, 0x00);
    pca9535_write_reg(0x02, 0x00);
    pca9535_write_reg(0x03, 0x08); // Set P13 (EXP_GPO11) to HIGH
}
```

#### 步骤 2. 为 ES8311（扬声器 TX）初始化 I2S

配置一个 I2S TX 通道，用于向 ES8311 进行回放。

```c
static esp_err_t i2s_driver_init_es8311(void)
{
    i2s_chan_config_t tx_chan_cfg = I2S_CHANNEL_DEFAULT_CONFIG(I2S_NUM, I2S_ROLE_MASTER);
    tx_chan_cfg.auto_clear = true;
    ESP_ERROR_CHECK(i2s_new_channel(&tx_chan_cfg, &tx_handle_es8311, NULL));

    i2s_std_config_t std_cfg = {
        .clk_cfg = I2S_STD_CLK_DEFAULT_CONFIG(EXAMPLE_SAMPLE_RATE),
        .slot_cfg = I2S_STD_PHILIPS_SLOT_DEFAULT_CONFIG(I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_STEREO),
        .gpio_cfg = {
            .mclk = I2S_MCK_IO,
            .bclk = I2S_BCK_IO,
            .ws = I2S_WS_IO,
            .dout = I2S_DO_IO,
            .din = I2S_GPIO_UNUSED,
        },
    };
    std_cfg.clk_cfg.mclk_multiple = EXAMPLE_MCLK_MULTIPLE;

    ESP_ERROR_CHECK(i2s_channel_init_std_mode(tx_handle_es8311, &std_cfg));
    ESP_ERROR_CHECK(i2s_channel_enable(tx_handle_es8311));
    ESP_LOGI(TAG, "ES8311 I2S initialized");
    return ESP_OK;
}
```

#### 步骤 3. 初始化 ES8311 编解码器

将 ES8311 配置为扬声器回放格式和音量。

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
    i2c_driver_install(I2C_NUM, I2C_MODE_MASTER, 0, 0, 0);

    es8311_handle_t es_handle = es8311_create(I2C_NUM, ES8311_ADDRRES_0);
    const es8311_clock_config_t es_clk = {
        .mclk_inverted = false,
        .sclk_inverted = false,
        .mclk_from_mclk_pin = true,
        .mclk_frequency = EXAMPLE_MCLK_FREQ_HZ,
        .sample_frequency = EXAMPLE_SAMPLE_RATE
    };

    ESP_ERROR_CHECK(es8311_init(es_handle, &es_clk, ES8311_RESOLUTION_16, ES8311_RESOLUTION_16));
    ESP_ERROR_CHECK(es8311_sample_frequency_config(es_handle, EXAMPLE_SAMPLE_RATE * EXAMPLE_MCLK_MULTIPLE, EXAMPLE_SAMPLE_RATE));
    ESP_ERROR_CHECK(es8311_voice_volume_set(es_handle, EXAMPLE_VOICE_VOLUME, NULL));
    ESP_ERROR_CHECK(es8311_microphone_config(es_handle, false));
    ESP_LOGI(TAG, "ES8311 codec configured");
    return ESP_OK;
}
```

#### 步骤 4. 初始化 I2S + ES7210（麦克风 RX）

通过 I2S RX 从 ES7210 设置麦克风采集。

```c
static esp_err_t i2s_driver_init_es7210(void)
{
    i2s_chan_config_t rx_chan_cfg = I2S_CHANNEL_DEFAULT_CONFIG(ES7210_I2S_NUM, I2S_ROLE_MASTER);
    ESP_ERROR_CHECK(i2s_new_channel(&rx_chan_cfg, NULL, &rx_handle_es7210));

    i2s_std_config_t std_cfg = {
        .clk_cfg = I2S_STD_CLK_DEFAULT_CONFIG(EXAMPLE_SAMPLE_RATE),
        .slot_cfg = I2S_STD_PHILIPS_SLOT_DEFAULT_CONFIG(I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_STEREO),
        .gpio_cfg = {
            .mclk = ES7210_I2S_MCK_IO,
            .bclk = ES7210_I2S_BCK_IO,
            .ws = ES7210_I2S_WS_IO,
            .dout = I2S_GPIO_UNUSED,
            .din = ES7210_I2S_DI_IO,
        },
    };
    std_cfg.clk_cfg.mclk_multiple = EXAMPLE_MCLK_MULTIPLE;

    ESP_ERROR_CHECK(i2s_channel_init_std_mode(rx_handle_es7210, &std_cfg));
    ESP_ERROR_CHECK(i2s_channel_enable(rx_handle_es7210));
    ESP_LOGI(TAG, "ES7210 I2S initialized in STD mode (Stereo)");
    return ESP_OK;
}

static esp_err_t es7210_codec_init(void)
{
    es7210_dev_handle_t es7210_handle = NULL;
    es7210_i2c_config_t i2c_conf = {
        .i2c_port = I2C_NUM,
        .i2c_addr = ES7210_ADDRRES_00
    };
    ESP_ERROR_CHECK(es7210_new_codec(&i2c_conf, &es7210_handle));

    es7210_codec_config_t codec_conf = {
        .sample_rate_hz = EXAMPLE_SAMPLE_RATE,
        .mclk_ratio = EXAMPLE_MCLK_MULTIPLE,
        .i2s_format = ES7210_I2S_FMT_I2S,
        .bit_width = ES7210_I2S_BITS_16B,
        .mic_bias = ES7210_MIC_BIAS_2V87,
        .mic_gain = ES7210_MIC_GAIN_24DB,
        .flags.tdm_enable = false
    };
    ESP_ERROR_CHECK(es7210_config_codec(es7210_handle, &codec_conf));
    ESP_ERROR_CHECK(es7210_config_volume(es7210_handle, 0));
    ESP_LOGI(TAG, "ES7210 codec configured");
    return ESP_OK;
}
```

#### 步骤 5. 在循环中录音 10 秒并回放 10 秒

分配一个 PSRAM 缓冲区，从 ES7210 分块录音，然后将录制的 PCM 写入 ES8311。

```c
static void record_play_task(void *args)
{
    int16_t *record_buf = heap_caps_malloc(RECORD_BUFFER_SIZE, MALLOC_CAP_SPIRAM | MALLOC_CAP_8BIT);
    if (!record_buf) {
        vTaskDelete(NULL);
        return;
    }

    size_t bytes_read = 0;
    size_t bytes_written = 0;

    while (1) {
        size_t total_read = 0;
        size_t chunk_size = 4096;

        // Record phase (10s)
        while (total_read < RECORD_BUFFER_SIZE) {
            size_t to_read = RECORD_BUFFER_SIZE - total_read;
            if (to_read > chunk_size) {
                to_read = chunk_size;
            }
            if (i2s_channel_read(rx_handle_es7210, (uint8_t *)record_buf + total_read, to_read, &bytes_read, portMAX_DELAY) == ESP_OK) {
                total_read += bytes_read;
            } else {
                break;
            }
        }

        // Playback phase (10s)
        size_t total_written = 0;
        while (total_written < total_read) {
            size_t to_write = total_read - total_written;
            if (to_write > chunk_size) {
                to_write = chunk_size;
            }
            if (i2s_channel_write(tx_handle_es8311, (uint8_t *)record_buf + total_written, to_write, &bytes_written, portMAX_DELAY) == ESP_OK) {
                total_written += bytes_written;
            } else {
                break;
            }
        }
    }
}
```

#### 步骤 6. 主入口

按顺序初始化所有模块，然后启动录制-播放任务。

```c
void app_main(void)
{
    printf("\n============================================\n");
    printf("   Record & Play Example (ES7210 + ES8311)  \n");
    printf("============================================\n\n");

    pca9535_init();

    if (i2s_driver_init_es8311() != ESP_OK) {
        abort();
    }
    if (es8311_codec_init() != ESP_OK) {
        abort();
    }
    if (i2s_driver_init_es7210() != ESP_OK) {
        abort();
    }
    if (es7210_codec_init() != ESP_OK) {
        abort();
    }

    xTaskCreatePinnedToCore(record_play_task, "record_play_task", 32768, NULL, 5, NULL, 0);
}
```

### 录音前预期的串口日志

使用我们的示例工程时，在第一次 10 秒录音开始之前，串口监视器应打印类似如下的启动信息：

```text
Record & Play Example (ES7210 + ES8311)
PCA9535 initialized, P13 set to HIGH
ES8311 I2S initialized
ES8311 codec configured
ES7210 I2S initialized in STD mode (Stereo)
ES7210 codec configured
=== Start Recording for 10 seconds ===
```

如果这些日志没有按顺序出现，请先检查每个初始化步骤的返回值。

## 故障排查

### Q1：播放时没有声音
- **检查**：确认 PCA9535 已初始化且 P13（`EN_PA`）被设置为高电平。
- **检查**：确认 ES8311 TX I2S 引脚以及 `i2s_channel_enable(tx_handle_es8311)` 的执行情况。

### Q2：麦克风没有采集到数据
- **检查**：确认 ES7210 I2S RX 引脚映射以及 `i2s_channel_enable(rx_handle_es7210)` 的执行情况。
- **检查**：确认 ES7210 I2C 地址以及编解码器初始化返回值。

### Q3：音频失真或噪声很大
- **检查**：保持 ES8311、ES7210 和 I2S 配置之间的采样率与 MCLK 比例一致。
- **检查**：如果出现近场削波，降低麦克风增益（例如低于 `ES7210_MIC_GAIN_24DB`）。
- **检查**：如果扬声器输出存在持续的金属噪声或语音不完整，请确认通道时隙配置：
  `slot_cfg = I2S_STD_PHILIPS_SLOT_DEFAULT_CONFIG(I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_STEREO)`。
- **检查**：确保 RX/TX 通道对齐正确；单声道/立体声不匹配会导致断续或机器人音效。

## 技术支持与产品讨论

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
