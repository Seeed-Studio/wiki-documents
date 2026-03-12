---
title: Sensor integrado do Seeed Studio XIAO nRF54L15 Sense
description: Este artigo descreve como usar o Microfone no XIAO MG24 Sense.
image: https://files.seeedstudio.com/wiki/mg24_mic/mg24.jpg
slug: /xiao_nrf54l15_sense_built_in_sensor
keywords:
  - XIAO
  - MG24
last_update:
  date: 11/20/2024
  author: Jason
sidebar_position: 1
createdAt: '2025-07-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_built_in_sensor/
---

# Uso do Sensor integrado do Seeed Studio XIAO nRF54L15 Sense

O código de exemplo a seguir foi desenvolvido para o PlatformIO, mas também é compatível com o nRF Connect SDK.

:::tip
Com base no VS Code, se você quiser usar o caso a seguir no nRF Connect SDK, consulte o link fornecido, adicione o arquivo app.overlay e modifique o conteúdo em prj.conf

[XIAO nRF54L15 Adicionar arquivo overlay e modificar o arquivo conf](https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_getting_started/#/add-overlay-and-modify-the-conf-file/).

:::

## IMU do XIAO nRF54L15 Sense

**IMU de 6 eixos (Unidade de Medição Inercial)** Sensores como o **LSM6DS3TR-C** integram acelerômetros e giroscópios para medir o movimento e a orientação de um objeto no espaço tridimensional. Especificamente, o LSM6DS3TR-C possui as seguintes características:

**Função do acelerômetro:**

- Mede a aceleração de um objeto ao longo dos eixos X, Y e Z. É capaz de detectar o movimento do objeto (por exemplo, repouso, aceleração, desaceleração) e mudanças de inclinação (por exemplo, ângulo do objeto).
- Pode ser usado para detectar marcha, mudanças de posição, vibrações, etc.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz1.5.jpg" style={{width:320, height:'auto'}}/></div>

**Função do giroscópio (Giroscópio):**

- Mede a velocidade angular de um objeto em torno dos eixos X, Y e Z, ou seja, a rotação do objeto.
- Pode ser usado para detectar rotação, taxa de rotação e mudança de direção.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz2.0.jpg" style={{width:320, height:'auto'}}/></div>

- O **ângulo do eixo X ( Roll )** é o ângulo na direção de rotação em torno do eixo X.
- O **ângulo do eixo Y ( Pitch )** é o ângulo na direção de rotação em torno do eixo Y.
- O **ângulo do eixo Z ( Yaw )** é o ângulo na direção de rotação em torno do eixo Z.

### Driver do IMU

Para simplificar sua experiência de desenvolvimento e garantir um início rápido com este programa de IMU, utilizamos a plataforma PlatformIO para escrever o código de driver necessário. O PlatformIO oferece um ambiente abrangente e eficiente para desenvolvimento embarcado, tornando-o uma escolha ideal para o XIAO nRF54L15 Sense.

Antes de prosseguir, certifique-se de que seu ambiente de desenvolvimento esteja configurado corretamente. Se você ainda não adicionou a placa de desenvolvimento Seeed Studio XIAO nRF54L15 à sua configuração do PlatformIO, consulte este [link](https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_with_platform_io/) para obter instruções detalhadas sobre como configurá-la. Esta etapa essencial permitirá que o PlatformIO reconheça e compile corretamente o código para sua placa.

Quando seu ambiente estiver pronto, o driver do IMU permitirá que você leia dados brutos do sensor LSM6DS3TR-C. Esses dados incluem:

- Valores brutos do acelerômetro (accel raw): Representando a aceleração ao longo dos eixos X, Y e Z.

- Valores brutos do giroscópio (gyro raw): Indicando a velocidade angular em torno dos eixos X, Y e Z.

- Contagem de acionamentos (trig_cnt): Um contador que é incrementado a cada nova amostra de dados.


---

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-imu" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Baixe o repositório para ``C:\Users\xxx\.platformio\platforms`` e abra a pasta ``examples\zephyr-imu`` no VS Code. Em seguida, clique em main.c e você verá o seguinte código:

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

Agora, conecte seu XIAO nRF54L15 ao computador via USB. No VS Code:

- Compilar: Clique no ícone "Build" (marca de verificação) na barra de ferramentas do PlatformIO na parte inferior do VS Code, ou use a barra lateral do PlatformIO: PROJECT TASKS -> nome_do_seu_projeto -> General -> Build.

- Enviar: Após uma compilação bem-sucedida, clique no ícone "Upload" (seta para a direita) na barra de ferramentas do PlatformIO, ou use a barra lateral do PlatformIO: PROJECT TASKS -> nome_do_seu_projeto -> General -> Upload.

Após um envio bem-sucedido, você deverá ver uma saída semelhante ao exemplo abaixo no Monitor de Dispositivo do PlatformIO (PROJECT TASKS -> nome_do_seu_projeto -> General -> Monitor). Esta saída serial exibe leituras em tempo real do acelerômetro e do giroscópio, fornecendo informações essenciais sobre o movimento e a orientação do seu dispositivo.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/imu_display.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:1000, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em> Saída de dados do IMU em tempo real do Monitor de Dispositivo do PlatformIO, exibindo leituras brutas do acelerômetro e do giroscópio.</em></p>
</div>

Esses dados brutos formam a base para diversas aplicações, desde a simples detecção de movimento até o rastreamento complexo de orientação, mediante a aplicação de algoritmos adequados (por exemplo, filtragem, fusão de sensores).


## MIC do XIAO nRF54L15 Sense

O **MSM261DGT006** é um Microfone Digital (DMIC) que emite dados de Modulação por Densidade de Pulso (PDM), tornando-o adequado para interface digital direta com microcontroladores como o XIAO nRF54L15 Sense. Nosso driver DMIC foi especificamente projetado para lidar com essa saída PDM, convertê-la em amostras de áudio utilizáveis e processá-la para diversas aplicações.

O driver inicia o microfone, define a taxa de amostragem apropriada (por exemplo, 16000 Hz para áudio padrão) e configura a frequência do clock PDM. Em seguida, lê continuamente buffers de amostras do microfone, permitindo a captura de áudio em tempo real.

A saída do driver DMIC, quando visualizada no Monitor de Dispositivo do PlatformIO, fornece informações essenciais sobre o funcionamento do microfone e os dados de áudio recebidos. As principais mensagens que você observará incluem:

- `DMIC sample=:` Indica o início do processo de amostragem do DMIC.

- `PCM output rate:` 16000, channels: 1: Confirma as configurações de saída de áudio, tipicamente uma taxa de amostragem de 16 kHz e um único canal (mono) de áudio.

- `dmic_nrf_pdm:` PDM clock frequency: 1280000, actual PCM rate: 16000: Mostra a frequência interna do clock PDM e a taxa de amostragem de áudio PCM resultante.

- `got buffer 0x... of 3200 bytes:` Confirma que o driver recebeu com sucesso um buffer de dados de áudio do microfone. O endereço hexadecimal (ex.: 0x20004C8) e o tamanho em bytes (ex.: 3200 bytes) são exibidos. Esses buffers contêm as amostras de áudio brutas que podem ser processadas ou analisadas.

- `dmix_sample: Exiting:` Indica que o processo de amostragem do DMIC foi interrompido.

Abaixo está um exemplo da saída típica que você pode esperar ver no Monitor de Dispositivo do PlatformIO quando o driver DMIC está em execução, ilustrando a captura e o armazenamento em buffer de dados de áudio com sucesso.

### Driver DMIC

Esses dados de áudio brutos, uma vez capturados, podem ser usados para uma ampla gama de aplicações, incluindo comandos de voz, detecção de eventos sonoros, monitoramento de ruído ambiental e tarefas de processamento de áudio mais complexas.

O exemplo de código a seguir demonstra como gravar áudio usando o botão de pressão na placa XIAO nRF54L15 e salvar o arquivo WAV gravado em um computador.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-dmic-recorder">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
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

Em seguida, abra o terminal no diretório da pasta scripts e execute as seguintes operações, desde que o programa já tenha sido gravado.

**Passo 1:**

- `python3 -m pip install pyserial`

**Passo 2:**

- `python record.py -p /dev/cu.usbmodemA0CBDDC33 -o output.wav -b 921600`

:::tip
Neste comando `python record.py -p **/dev/cu.usbmodemA0CBDDC33** -o output.wav -b 921600`, você precisa substituir pela sua porta serial para uso.
:::
**Passo 3:**

- Após executar o comando, você será solicitado a pressionar o botão para gravar o som.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/dmic_record1.jpg" style={{width:900, height:'auto'}}/></div>

Após gravar o áudio, o arquivo será salvo nos scripts
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/dmic_record2.jpg" style={{width:500, height:'auto'}}/></div>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
