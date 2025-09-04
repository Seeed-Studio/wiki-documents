---
title: Seeed Studio XIAO nRF54L15 Sense sensor integrado
description: Este artículo describe cómo usar el micrófono en el XIAO MG24 Sense.
image: https://files.seeedstudio.com/wiki/mg24_mic/mg24.jpg
slug: /es/xiao_nrf54l15_sense_built_in_sensor
keywords:
  - XIAO
  - MG24
last_update:
  date: 11/20/2024 
  author: Jason
sidebar_position: 1
---

# Uso del sensor integrado del Seeed Studio XIAO nRF54L15 Sense

## XIAO nRF54L15 Sense IMU

Los sensores **IMU de 6 ejes (Unidad de Medición Inercial)** como el **LSM6DS3TR-C** integran acelerómetros y giroscopios para medir el movimiento y la orientación de un objeto en el espacio tridimensional. Específicamente, el LSM6DS3TR-C tiene las siguientes características:

**Función del acelerómetro:**
- Mide la aceleración de un objeto a lo largo de los ejes X, Y y Z. Es capaz de detectar el movimiento del objeto (por ejemplo, reposo, aceleración, desaceleración) y cambios de inclinación (por ejemplo, ángulo del objeto).
- Se puede usar para detectar marcha, cambios de posición, vibraciones, etc.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz1.5.jpg" style={{width:320, height:'auto'}}/></div>

**Función del giroscopio:**
- Mide la velocidad angular de un objeto alrededor de los ejes X, Y y Z, es decir, la rotación del objeto.
- Se puede usar para detectar rotación, velocidad de rotación y cambio de dirección.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz2.0.jpg" style={{width:320, height:'auto'}}/></div>

- El **ángulo del eje X (Roll)** es el ángulo en la dirección de rotación alrededor del eje X.
- El **ángulo del eje Y (Pitch)** es el ángulo en la dirección de rotación alrededor del eje Y.
- El **ángulo del eje Z (Yaw)** es el ángulo en la dirección de rotación alrededor del eje Z.

### Controlador del IMU

Para simplificar tu experiencia de desarrollo y asegurar un inicio rápido con este programa de IMU, hemos aprovechado la plataforma PlatformIO para escribir el código de controlador necesario. PlatformIO ofrece un entorno integral y eficiente para el desarrollo embebido, convirtiéndolo en una opción ideal para el XIAO nRF54L15 Sense.

Antes de continuar, por favor asegúrate de que tu entorno de desarrollo esté configurado correctamente. Si aún no has añadido la placa de desarrollo Seeed Studio XIAO nRF54L15 a tu configuración de PlatformIO, por favor consulta este [enlace](http://localhost:3000/xiao_nrf54l15_with_platform_io/) para obtener instrucciones detalladas sobre cómo configurarla. Este paso crucial permitirá que PlatformIO reconozca y compile código para tu placa correctamente.

- Una vez que tu entorno esté listo, el controlador del IMU te permitirá leer datos de sensor en bruto del LSM6DS3TR-C. Estos datos incluyen:

- Valores en bruto del acelerómetro (accel raw): Representando la aceleración a lo largo de los ejes X, Y y Z.

- Valores en bruto del giroscopio (gyro raw): Indicando la velocidad angular alrededor de los ejes X, Y y Z.

Contador de activación (trig_cnt): Un contador que se incrementa con cada nueva muestra de datos.


A continuación se muestra un ejemplo de la salida serie que puedes esperar ver del IMU, como se muestra en el Monitor de Dispositivo de PlatformIO. Esta salida proporciona lecturas en tiempo real de los datos del acelerómetro y giroscopio, que son fundamentales para entender el movimiento y la orientación de tu dispositivo.


<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/imu_display.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:1000, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em> Salida de datos del IMU en tiempo real desde el Monitor de Dispositivo de PlatformIO, mostrando lecturas en bruto del acelerómetro y giroscopio.</em></p>
</div>


Estos datos en bruto forman la base para varias aplicaciones, desde la detección simple de movimiento hasta el seguimiento complejo de orientación, aplicando algoritmos apropiados (por ejemplo, filtrado, fusión de sensores).

---
 
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-imu" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
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


## XIAO nRF54L15 Sense MIC

El **MSM261DGT006** es un Micrófono Digital (DMIC) que produce datos de Modulación por Densidad de Pulsos (PDM), lo que lo hace adecuado para interfaz digital directa con microcontroladores como el XIAO nRF54L15 Sense. Nuestro controlador DMIC está específicamente diseñado para manejar esta salida PDM, convertirla en muestras de audio utilizables y procesarla para diversas aplicaciones.

El controlador inicia el micrófono, establece la frecuencia de muestreo apropiada (por ejemplo, 16000 Hz para audio estándar) y configura la frecuencia del reloj PDM. Luego lee continuamente buffers de muestras del micrófono, permitiendo la captura de audio en tiempo real.

La salida del controlador DMIC, cuando se visualiza en el Monitor de Dispositivo de PlatformIO, proporciona información crucial sobre el funcionamiento del micrófono y los datos de audio entrantes. Los mensajes clave que observará incluyen:

- `DMIC sample=:` Indica el inicio del proceso de muestreo DMIC.

- `PCM output rate:` 16000, channels: 1: Confirma la configuración de salida de audio, típicamente una frecuencia de muestreo de 16 kHz y un canal único (mono) de audio.

- `dmic_nrf_pdm:` PDM clock frequency: 1280000, actual PCM rate: 16000: Muestra la frecuencia del reloj PDM interno y la frecuencia de muestreo de audio PCM resultante.

- `got buffer 0x... of 3200 bytes:` Confirma que el controlador recibió exitosamente un buffer de datos de audio del micrófono. Se muestran la dirección hexadecimal (por ejemplo, 0x20004C8) y el tamaño en bytes (por ejemplo, 3200 bytes). Estos buffers contienen las muestras de audio en bruto que luego pueden ser procesadas o analizadas.

- `dmix_sample: Exiting:` Indica que el proceso de muestreo DMIC ha sido detenido.

A continuación se muestra un ejemplo de la salida típica que puede esperar ver en el Monitor de Dispositivo de PlatformIO cuando el controlador DMIC está ejecutándose, ilustrando la captura y almacenamiento en buffer exitoso de datos de audio.

### Controlador DMIC

Estos datos de audio en bruto, una vez capturados, pueden ser utilizados para una amplia gama de aplicaciones, incluyendo comandos de voz, detección de eventos sonoros, monitoreo de ruido ambiental y tareas de procesamiento de audio más complejas.

El siguiente ejemplo de código demuestra cómo grabar audio usando el botón pulsador en la placa XIAO nRF54L15 y guardar el archivo WAV grabado en una computadora.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-dmic-recorder">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
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

A continuación, abre la terminal en el directorio de la carpeta scripts y realiza las siguientes operaciones, siempre que el programa ya haya sido grabado.

**Paso 1:**
- `python3 -m pip install pyserial`

**Paso 2:**
- `python record.py -p /dev/cu.usbmodemA0CBDDC33 -o output.wav -b 921600`

:::tip
En este comando `python record.py -p **/dev/cu.usbmodemA0CBDDC33** -o output.wav -b 921600`, necesitas reemplazarlo con tu puerto serie para su uso.
:::
**Paso 3:**
- Después de ejecutar el comando, se te pedirá que presiones el botón para grabar sonido.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/dmic_record1.jpg" style={{width:900, height:'auto'}}/></div>

Después de grabar el audio, el archivo se guardará en scripts
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/dmic_record2.jpg" style={{width:500, height:'auto'}}/></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
