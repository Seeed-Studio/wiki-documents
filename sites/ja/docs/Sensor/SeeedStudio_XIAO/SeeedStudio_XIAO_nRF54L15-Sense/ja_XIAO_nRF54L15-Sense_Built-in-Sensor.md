---
title: Seeed Studio XIAO nRF54L15 Sense 内蔵センサー
description: この記事では、XIAO MG24 Sense のマイクロフォンの使用方法について説明します。
image: https://files.seeedstudio.com/wiki/mg24_mic/mg24.jpg
slug: /ja/xiao_nrf54l15_sense_built_in_sensor
keywords:
  - XIAO
  - MG24
last_update:
  date: 11/20/2024 
  author: Jason
sidebar_position: 1
---

# Seeed Studio XIAO nRF54L15 Sense 内蔵センサーの使用方法

以下のサンプルコードは PlatformIO 用に設計されていますが、nRF Connect SDK とも互換性があります。

:::tip
VS Code をベースとして、nRF Connect SDK で以下のケースを使用したい場合は、提供されたリンクを参照し、app.overlay ファイルを追加して prj.conf の内容を変更してください

[XIAO nRF54L15 オーバーレイファイルの追加と conf ファイルの変更](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_getting_started/#/add-overlay-and-modify-the-conf-file/)。

:::

## XIAO nRF54L15 Sense IMU

**6軸 IMU（慣性測定ユニット）** **LSM6DS3TR-C** のようなセンサーは、加速度計とジャイロスコープを統合して、三次元空間における物体の動きと方向を測定します。具体的に、LSM6DS3TR-C には以下の機能があります：

**加速度計機能：**

- X、Y、Z軸に沿った物体の加速度を測定します。物体の動き（例：静止、加速、減速）と傾きの変化（例：物体の角度）を感知できます。
- 歩行、位置変化、振動などの検出に使用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz1.5.jpg" style={{width:320, height:'auto'}}/></div>

**ジャイロスコープ機能：**

- X、Y、Z軸周りの物体の角速度、つまり物体の回転を測定します。
- 回転、回転速度、方向の変化の検出に使用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz2.0.jpg" style={{width:320, height:'auto'}}/></div>

- **X軸角度（Roll）** は、X軸周りの回転方向の角度です。
- **Y軸角度（Pitch）** は、Y軸周りの回転方向の角度です。
- **Z軸角度（Yaw）** は、Z軸周りの回転方向の角度です。

### IMU ドライバー

開発体験を簡素化し、この IMU プログラムでの迅速なスタートを確保するため、必要なドライバーコードの作成に PlatformIO プラットフォームを活用しました。PlatformIO は組み込み開発のための包括的で効率的な環境を提供し、XIAO nRF54L15 Sense にとって理想的な選択肢となっています。

続行する前に、開発環境が正しく設定されていることを確認してください。まだ Seeed Studio XIAO nRF54L15 開発ボードを PlatformIO 設定に追加していない場合は、設定方法の詳細な手順について、この[リンク](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_with_platform_io/)を参照してください。この重要なステップにより、PlatformIO がボードを適切に認識し、コードをコンパイルできるようになります。

環境の準備ができたら、IMU ドライバーを使用して LSM6DS3TR-C から生のセンサーデータを読み取ることができます。このデータには以下が含まれます：

- 加速度計生値（accel raw）：X、Y、Z軸に沿った加速度を表します。

- ジャイロスコープ生値（gyro raw）：X、Y、Z軸周りの角速度を示します。

- トリガーカウント（trig_cnt）：新しいデータサンプルごとに増加するカウンター。


---

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-imu" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

リポジトリを ``C:\Users\xxx\.platformio\platforms`` にダウンロードし、VS Code で ``examples\zephyr-imu`` フォルダを開きます。次に main.c をクリックすると、以下のコードが表示されます：

```cpp
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/sensor.h>
#include <zephyr/logging/log.h>

LOG_MODULE_REGISTER(zephyr_imu, LOG_LEVEL_INF);

static inline float out_ev(struct sensor_value *val)
{
	return (val->val1 + (float)val->val2 / 1000000);
}

static void fetch_and_display(const struct device *dev)
{
	struct sensor_value x, y, z;
	static int trig_cnt;

	trig_cnt++;

	/* lsm6dsl accel */
	sensor_sample_fetch_chan(dev, SENSOR_CHAN_ACCEL_XYZ);
	sensor_channel_get(dev, SENSOR_CHAN_ACCEL_X, &x);
	sensor_channel_get(dev, SENSOR_CHAN_ACCEL_Y, &y);
	sensor_channel_get(dev, SENSOR_CHAN_ACCEL_Z, &z);

	LOG_INF("accel x:%f m/s^2 y:%f m/s^2 z:%f m/s^2",
			(double)out_ev(&x), (double)out_ev(&y), (double)out_ev(&z));

	/* lsm6dsl gyro */
	sensor_sample_fetch_chan(dev, SENSOR_CHAN_GYRO_XYZ);
	sensor_channel_get(dev, SENSOR_CHAN_GYRO_X, &x);
	sensor_channel_get(dev, SENSOR_CHAN_GYRO_Y, &y);
	sensor_channel_get(dev, SENSOR_CHAN_GYRO_Z, &z);

	LOG_INF("gyro x:%f rad/s y:%f rad/s z:%f rad/s",
			(double)out_ev(&x), (double)out_ev(&y), (double)out_ev(&z));

	LOG_INF("trig_cnt:%d", trig_cnt);
}

static int set_sampling_freq(const struct device *dev)
{
	int ret = 0;
	struct sensor_value odr_attr;

	/* set accel/gyro sampling frequency to 12.5 Hz */
	odr_attr.val1 = 12.5;
	odr_attr.val2 = 0;

	ret = sensor_attr_set(dev, SENSOR_CHAN_ACCEL_XYZ,
			SENSOR_ATTR_SAMPLING_FREQUENCY, &odr_attr);
	if (ret != 0) {
		LOG_ERR("Cannot set sampling frequency for accelerometer.");
		return ret;
	}

	ret = sensor_attr_set(dev, SENSOR_CHAN_GYRO_XYZ,
			SENSOR_ATTR_SAMPLING_FREQUENCY, &odr_attr);
	if (ret != 0) {
		LOG_ERR("Cannot set sampling frequency for gyro.");
		return ret;
	}

	return 0;
}

#ifdef CONFIG_LSM6DSL_TRIGGER
static void trigger_handler(const struct device *dev,
			    const struct sensor_trigger *trig)
{
	fetch_and_display(dev);
}

static void test_trigger_mode(const struct device *dev)
{
	struct sensor_trigger trig;

	if (set_sampling_freq(dev) != 0) {
		return;
	}

	trig.type = SENSOR_TRIG_DATA_READY;
	trig.chan = SENSOR_CHAN_ACCEL_XYZ;

	if (sensor_trigger_set(dev, &trig, trigger_handler) != 0) {
		LOG_ERR("Could not set sensor type and channel");
		return;
	}
}

#else
static void test_polling_mode(const struct device *dev)
{
	if (set_sampling_freq(dev) != 0) {
		return;
	}

	while (1) {
		fetch_and_display(dev);
		k_sleep(K_MSEC(1000));
	}
}
#endif

int main(void)
{
	const struct device *const dev = DEVICE_DT_GET(DT_ALIAS(imu0));

	if (!device_is_ready(dev)) {
		LOG_ERR("%s: device not ready.", dev->name);
		return 0;
	}

#ifdef CONFIG_LSM6DSL_TRIGGER
	LOG_INF("Testing LSM6DSL sensor in trigger mode.");
	test_trigger_mode(dev);
#else
	LOG_INF("Testing LSM6DSL sensor in polling mode.");
	test_polling_mode(dev);
#endif
	return 0;
}
```

次に、XIAO nRF54L15 を USB 経由でコンピューターに接続します。VS Code で：

- ビルド：VS Code 下部の PlatformIO ツールバーの「Build」アイコン（チェックマーク）をクリックするか、PlatformIO サイドバーを使用します：PROJECT TASKS -> your_project_name -> General -> Build。

- アップロード：ビルドが成功した後、PlatformIO ツールバーの「Upload」アイコン（右矢印）をクリックするか、PlatformIO サイドバーを使用します：PROJECT TASKS -> your_project_name -> General -> Upload。

アップロードが成功した後、PlatformIO Device Monitor（PROJECT TASKS -> your_project_name -> General -> Monitor）で以下の例のような出力が表示されるはずです。このシリアル出力は、リアルタイムの加速度計とジャイロスコープの読み取り値を示し、デバイスの動きと方向に関する重要な洞察を提供します。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/imu_display.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:1000, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em> PlatformIO Device Monitor からのリアルタイム IMU データ出力、生の加速度計とジャイロスコープの読み取り値を表示。</em></p>
</div>

この生データは、適切なアルゴリズム（例：フィルタリング、センサーフュージョン）を適用することで、単純な動き検出から複雑な方向追跡まで、さまざまなアプリケーションの基礎となります。


## XIAO nRF54L15 Sense MIC

**MSM261DGT006** は、パルス密度変調（PDM）データを出力するデジタルマイクロフォン（DMIC）で、XIAO nRF54L15 Sense のようなマイクロコントローラーとの直接デジタルインターフェースに適しています。私たちの DMIC ドライバーは、この PDM 出力を処理し、使用可能なオーディオサンプルに変換し、さまざまなアプリケーション用に処理するように特別に設計されています。

ドライバーはマイクロフォンを初期化し、適切なサンプリングレート（例：標準オーディオ用の 16000 Hz）を設定し、PDM クロック周波数を構成します。その後、マイクロフォンからサンプルバッファを継続的に読み取り、リアルタイムオーディオキャプチャを可能にします。

PlatformIO Device Monitor で表示される DMIC ドライバーからの出力は、マイクロフォンの動作と入力オーディオデータに関する重要な情報を提供します。観察される主要なメッセージには以下があります：

- `DMIC sample=:`：DMIC サンプリングプロセスの開始を示します。

- `PCM output rate:` 16000, channels: 1：オーディオ出力設定を確認し、通常は 16 kHz のサンプルレートと単一チャンネル（モノ）オーディオです。

- `dmic_nrf_pdm:` PDM clock frequency: 1280000, actual PCM rate: 16000：内部 PDM クロック周波数と結果として得られる PCM オーディオサンプルレートを示します。

- `got buffer 0x... of 3200 bytes:` ドライバがマイクから音声データのバッファを正常に受信したことを確認します。16進数のアドレス（例：0x20004C8）とバイト単位のサイズ（例：3200バイト）が表示されます。これらのバッファには、処理や分析が可能な生の音声サンプルが含まれています。

- `dmix_sample: Exiting:` DMICサンプリングプロセスが停止されたことを示します。

以下は、DMICドライバが動作している際にPlatformIO Device Monitorで確認できる典型的な出力例で、音声データの正常なキャプチャとバッファリングを示しています。

### DMICドライバ

キャプチャされたこの生の音声データは、音声コマンド、音響イベント検出、環境騒音監視、より複雑な音声処理タスクなど、幅広いアプリケーションに使用できます。

以下のコード例は、XIAO nRF54L15ボード上のプッシュボタンを使用して音声を録音し、録音されたWAVファイルをコンピュータに保存する方法を示しています。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-dmic-recorder">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
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

次に、scriptsフォルダディレクトリでターミナルを開き、プログラムが既に書き込まれていることを前提として、以下の操作を実行します。

**ステップ 1:**

- `python3 -m pip install pyserial`

**ステップ 2:**

- `python record.py -p /dev/cu.usbmodemA0CBDDC33 -o output.wav -b 921600`

:::tip
このコマンド`python record.py -p **/dev/cu.usbmodemA0CBDDC33** -o output.wav -b 921600`では、使用するシリアルポートに置き換える必要があります。
:::
**ステップ 3:**

- コマンドを実行すると、音声を録音するためにボタンを押すよう促されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/dmic_record1.jpg" style={{width:900, height:'auto'}}/></div>

音声を録音した後、ファイルはscriptsに保存されます
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/dmic_record2.jpg" style={{width:500, height:'auto'}}/></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
