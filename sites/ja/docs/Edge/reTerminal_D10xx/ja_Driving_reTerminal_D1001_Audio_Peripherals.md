---
description: この記事では、reTerminal D1001 上の I2S オーディオペリフェラルを駆動する方法を説明します。
sku: 100058144
title: reTerminal D1001 オーディオペリフェラルの駆動
image: https://files.seeedstudio.com/wiki/reTerminal_d10xx/1-reTeriminal-D1001.webp
slug: /driving_reterminal_d1001_audio_peripherals
last_update:
  date: 04/02/2026
  author: Jackson.Li
createdAt: '2026-04-02'
url: https://wiki.seeedstudio.com/ja/driving_reterminal_d1001_audio_peripherals/
updatedAt: '2026-04-02'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal D1001 オーディオペリフェラルの駆動

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/hardware.webp" style={{width:900, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=D1001" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div><br />

## はじめに

このガイドでは、**reTerminal D1001** 開発ボード上の I2S オーディオペリフェラルを駆動する方法を紹介します。システムアーキテクチャは、次の 3 つのコアコンポーネントで構成されています。
- **ESP32-P4**: オーディオデータストリームを管理し、ペリフェラル構成を制御するメインプロセッサです。
- **ES8311**: デジタル I2S データをアナログオーディオ信号に変換する低消費電力モノラルオーディオコーデックです。
- **PCA9535**: パワーアンプのイネーブル状態を制御するための I2C IO エクスパンダで、ペリフェラル制御用の柔軟な GPIO 拡張を提供します。


### オーディオアーキテクチャのブロック図

オーディオシステムはデュアルバスアーキテクチャを採用しており、**I2S バス**は高速なデジタルオーディオデータ伝送専用、**I2C バス**はコーデックおよび IO エクスパンダ向けの低速制御コマンドを処理します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/Driving_Audio_Peripherals/D1001_Block_diagram.jpg" style={{width:800, height:'auto'}}/></div>

### ピンアサインと原理

#### ESP32-P4 & ES8311（オーディオデータ & 制御）

| シグナル名 | ESP32-P4 ピン | 機能説明 |
| :--- | :--- | :--- |
| **I2C_SDA** | GPIO20 | **シリアルデータ**: ES8311 へ構成コマンド（音量、サンプルレート）を送信します。 |
| **I2C_SCL** | GPIO21 | **シリアルクロック**: I2C データ転送を同期します。 |
| **I2S_MCK** | GPIO33 | **マスタークロック**: コーデック内部のデルタシグマ変調器用の高周波リファレンスクロックです。 |
| **I2S_BCK** | GPIO32 | **ビットクロック**: オーディオデータストリームの各ビットを同期します。 |
| **I2S_WS**  | GPIO31 | **ワードセレクト**: LRCK とも呼ばれ、新しいオーディオフレームの開始を定義し、左/右チャンネルを選択します。 |
| **I2S_DO**  | GPIO30 | **データ出力**: ESP32-P4 からコーデックへデジタル PCM オーディオデータを送信します。 |
| **I2S_DI**  | GPIO11 | **データ入力**: 将来的なオーディオ録音またはコーデックからのループバック用に予約されています。 |

#### ESP32-P4 & PCA9535RGER（GPIO 拡張）

| シグナル名 | ESP32-P4 ピン | 機能説明 |
| :--- | :--- | :--- |
| **I2C_SDA** | GPIO20 | PCA9535 IO エクスパンダを制御するための共有 I2C データバスです。 |
| **I2C_SCL** | GPIO21 | 共有 I2C クロックバスです。 |
| **EN_PA**   | **EXP_GPO11** | **PA イネーブル**: PCA9535 上のピン **P13** にマップされます。これを High に設定すると外部パワーアンプが有効になります。 |

## ソフトウェアフロー

### GitHub サンプルリポジトリ

GitHub から公式の reTerminal D1001 リポジトリをダウンロードして、ソースコードとドライバを入手します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/reTerminal-D1001" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>サンプルコードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::tip
このオーディオサンプル用の特定のソースコードとプロジェクトファイルを見つけるには、リポジトリ内の `driver_examples/01_I2SCodec` ディレクトリに移動してください。
:::

### 開発実行シーケンス

#### ステップ 1. I2C IO エクスパンダ（PCA9535RGER）の初期化

外部パワーアンプ（PA）は PCA9535 エクスパンダ経由で制御されます。PA を有効化することは非常に重要で、これを行わないと、コーデックが正しく動作していてもスピーカーから音が聞こえません。

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

#### ステップ 2. I2S ドライバの設定

I2S は、デジタルオーディオを送信するために特化した同期式シリアル通信プロトコルです。ここでは ESP32-P4 を **I2S マスター**として構成し、コーデックに BCLK と WS クロックを供給します。

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

#### ステップ 3. ES8311 コーデックの初期化

ES8311 は、ESP32-P4 で定義した I2S 設定（サンプルレート、データ幅）と一致するように構成する必要があります。これは I2C バス経由で行います。プロジェクトをビルドする前に、`main/example_config.h` 内のマクロを変更することでオーディオ動作をカスタマイズできます。

| マクロ | 説明 | 設定の指針 |
| :--- | :--- | :--- |
| **EXAMPLE_SAMPLE_RATE** | **オーディオサンプルレート**（Hz） | オーディオサンプルの周波数を定義します。一般的な値は `16000`（音声）や `44100`/`48000`（音楽）です。 |
| **EXAMPLE_MCLK_MULTIPLE** | **MCLK と LRCLK の比率** | マスタークロック（MCLK）はサンプルレートの整数倍である必要があります。`256` は 16 ビットで標準的ですが、高精度用には `384` がよく使用されます。 |
| **EXAMPLE_VOICE_VOLUME** | **再生音量** | 範囲は `0` ～ `100`。ES8311 コーデックの初期出力レベルを設定します。 |
| **EXAMPLE_MIC_GAIN** | **マイクゲイン**（dB） | デュアルマイクの感度を調整します。値を大きくすると音量が上がりますが、ノイズが増える可能性があります。 |
| **EXAMPLE_RECV_BUF_SIZE** | **DMA バッファサイズ** | DMA で処理されるデータチャンクのサイズを制御します。バッファを大きくすると音切れを防げますが、オーディオレイテンシが増加します。 |

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

#### ステップ 4. メインエントリとタスク作成

メインアプリケーションはペリフェラルを初期化した後、再生ロジックを専用の FreeRTOS タスクに引き渡します。

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

#### ステップ 5. DMA プリロードとデータ再生

**DMA（Direct Memory Access）** を使用すると、I2S ペリフェラルは CPU を介さずにメモリから直接データを取得できます。DMA バッファの**プリロード**は、I2S ハードウェアが空のバッファから動作を開始して急激な DC オフセット変化を起こし、「ポップ」ノイズが発生するのを防ぐための重要な手法です。

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

## トラブルシューティング

### Q1: スピーカーから音が出ない
- **確認**: パワーアンプ（PA）が有効になっているか確認します。`EN_PA` 信号は PCA9535 IO エクスパンダのピン **P13** で制御されます。`pca9535_init()` が呼び出され、出力レジスタ（ポート 1、ビット 3）が正しく設定されていることを確認してください。
- **確認**: I2S 接続を確認し、TX チャンネルに対して `i2s_channel_enable()` 関数が呼び出されていることを確認します。

### Q2: 音声が歪んでいる、またはパチパチというノイズが入る
- **確認**: I2S クロック構成（MCLK、BCLK、WS）が、使用している音声ファイルのサンプルレートと一致していることを確認します。`EXAMPLE_SAMPLE_RATE` が一致していないと、ピッチや再生速度に問題が発生することがあります。
- **確認**: **ステップ 5** に示すように DMA プリロードが実装されていることを確認します。プリロードにより、空のバッファでチャンネルを開始することで発生する「ポップ」ノイズを防ぐことができます。

### Q3: ES8311 または PCA9535 との I2C 通信が失敗する
- **確認**: I2C SDA（GPIO20）および SCL（GPIO21）の接続を確認します。これらのピンと競合する他のペリフェラルがないことを確認してください。
- **確認**: I2C アドレスが正しいことを確認します：PCA9535 は **0x20**、ES8311 は **0x18** です。

## 技術サポート & 製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
