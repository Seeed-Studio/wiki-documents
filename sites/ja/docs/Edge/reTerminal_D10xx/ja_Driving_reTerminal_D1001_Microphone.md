---
description: この記事では、reTerminal D1001 上の I2S マイクを駆動し、スピーカーを使って 10 秒録音・10 秒再生を繰り返すループを実装する方法を説明します。
sku: 100058144
title: reTerminal D1001 マイクの駆動
image: https://files.seeedstudio.com/wiki/reTerminal_d10xx/1-reTeriminal-D1001.webp
slug: /driving_reterminal_d1001_microphone
last_update:
  date: 04/17/2026
  author: Jackson.Li
createdAt: '2026-04-17'
url: https://wiki.seeedstudio.com/ja/driving_reterminal_d1001_microphone/
updatedAt: '2026-04-17'
---

# reTerminal D1001 マイクの駆動

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/hardware.webp" style={{width:900, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=D1001" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div><br />

## はじめに

この Wiki では、**reTerminal D1001** 上の **I2S マイク**の駆動方法と、完全な**録音・再生ループ**の構築方法を説明します。
- マイクから **10 秒間**録音します（ES7210 キャプチャパス）。
- 録音した PCM データを **10 秒間**再生します（ES8311 スピーカーパス）。
- RX と TX の両方のオーディオパイプラインを検証するために連続して繰り返します。

この例のオーディオパスは、次の 3 つの主要コンポーネントで構成されています。
- **ESP32-P4**：マイクの PCM データをキャプチャし、再生用 PCM データを送信します。
- **ES7210**（**I2C アドレス: `0x40`**）：アナログマイク信号をデジタル I2S データに変換します。
- **ES8311 + PA 制御（PCA9535）**：PCM をスピーカー出力に変換し、再生用にパワーアンプを有効化します。

## マイク + スピーカー構成

### ブロック図（ES7210 + ES8311）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/Driving_Audio_Peripherals/microphone.jpg" style={{width:800, height:'auto'}}/></div>

### ピンマッピング表

| 信号グループ | 信号名 | ESP32-P4 ピン | 接続デバイス | 説明 |
| :--- | :--- | :--- | :--- | :--- |
| 共有 I2C 制御 | I2C_SDA | GPIO20 | ES7210 / PCA9535 | ES7210 の設定および PA 制御用の共有 I2C データライン |
| 共有 I2C 制御 | I2C_SCL | GPIO21 | ES7210 / PCA9535 | 共有 I2C クロックライン |
| マイク I2S（RX） | ADC_I2S_MCLK | GPIO29 | ES7210 | ES7210 用マスタークロック |
| マイク I2S（RX） | ADC_I2S_SCLK | GPIO28 | ES7210 | ES7210 キャプチャパス用ビットクロック |
| マイク I2S（RX） | ADC_I2S_LRCK | GPIO27 | ES7210 | ワードセレクト（LRCK） |
| マイク I2S（RX） | ADC_I2S_SDOUT | GPIO26 | ES7210 | ES7210 から ESP32-P4 への PCM データ出力 |
| PA 制御 | EN_PA (EXP_GPO11) | PCA9535 P13 | パワーアンプ | マイク + スピーカーループ再生を検証する際は HIGH を維持 |

この表はマイクパスに焦点を当てています。この例では、ES8311 も同じ I2C バスを共有しており、再生用コーデックの設定に使用されます。

## ソフトウェアフロー

### GitHub サンプルリポジトリ

GitHub から公式の reTerminal D1001 リポジトリをダウンロードします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/reTerminal-D1001" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>サンプルコードをダウンロード</font></span></strong>
    </a>
</div><br />

### プロジェクトディレクトリ構成

次の図は、この例で使用するプロジェクトディレクトリ構成を示しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/Driving_Audio_Peripherals/Project_Structure_Diagram.jpg" style={{width:900, height:'auto'}}/></div>

:::tip
リポジトリ内で、ES7210 + ES8311 用の録音・再生サンプルディレクトリ（例：`driver_examples/02_I2SCodec_es7210`）に移動してください。
:::

### 開発実行シーケンス

#### ステップ 1. PCA9535 による PA 制御の初期化

スピーカーパスでは、PCA9535 を介して PA イネーブルピンをアサートする必要があります（P13 = HIGH）。

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

#### ステップ 2. ES8311 用 I2S（スピーカー TX）の初期化

ES8311 への再生用として、1 つの I2S TX チャンネルを設定します。

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

#### ステップ 3. ES8311 コーデックの初期化

ES8311 はスピーカー再生フォーマットと音量に合わせて設定されます。

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

#### ステップ 4. I2S + ES7210（マイク RX）の初期化

I2S RX を介して ES7210 からマイクキャプチャを行うよう設定します。

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

#### ステップ 5. 10 秒録音・10 秒再生をループ実行

PSRAM バッファを確保し、ES7210 からチャンク単位で録音し、その録音 PCM を ES8311 に書き込んで再生します。

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

#### ステップ 6. メインエントリ

すべてのモジュールを順番に初期化し、その後レコード・再生タスクを開始します。

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

### 録音前に期待されるシリアルログ

サンプルプロジェクトを使用する場合、最初の 10 秒間の録音が始まる前に、シリアルモニタには次のような起動メッセージが表示されます：

```text
Record & Play Example (ES7210 + ES8311)
PCA9535 initialized, P13 set to HIGH
ES8311 I2S initialized
ES8311 codec configured
ES7210 I2S initialized in STD mode (Stereo)
ES7210 codec configured
=== Start Recording for 10 seconds ===
```

これらのログが順番に表示されない場合は、まず各初期化ステップの戻り値を確認してください。

## トラブルシューティング

### Q1: 再生時に音が出ない
- **確認**: PCA9535 が初期化されており、P13（`EN_PA`）が HIGH に設定されていることを確認します。
- **確認**: ES8311 の TX I2S ピンと `i2s_channel_enable(tx_handle_es8311)` の実行を確認します。

### Q2: マイクからデータが取得できない
- **確認**: ES7210 の I2S RX ピン割り当てと `i2s_channel_enable(rx_handle_es7210)` の実行を確認します。
- **確認**: ES7210 の I2C アドレスとコーデック初期化の戻り値を確認します。

### Q3: 音声の歪みや大きなノイズ
- **確認**: サンプリングレートと MCLK 比が ES8311、ES7210、および I2S 設定全体で一貫していることを確認します。
- **確認**: 近距離でクリッピングが発生する場合は、マイクゲインを下げます（例：`ES7210_MIC_GAIN_24DB` より低くする）。
- **確認**: スピーカー出力に連続した金属音や声が途切れる症状がある場合は、チャネルスロット設定を確認します：
  `slot_cfg = I2S_STD_PHILIPS_SLOT_DEFAULT_CONFIG(I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_STEREO)`。
- **確認**: RX/TX チャネルの整合性が正しいことを確認します。モノラル/ステレオの不一致は、途切れた声やロボットのような声の原因になります。

## 技術サポート & 製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
