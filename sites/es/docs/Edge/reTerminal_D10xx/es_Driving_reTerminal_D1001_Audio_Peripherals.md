---
description: Este artículo te guiará para manejar el periférico de audio I2S en la reTerminal D1001.
sku: 100058144
title: Control de los periféricos de audio de reTerminal D1001
image: https://files.seeedstudio.com/wiki/reTerminal_d10xx/1-reTeriminal-D1001.webp
slug: /driving_reterminal_d1001_audio_peripherals
last_update:
  date: 04/02/2026
  author: Jackson.Li
createdAt: '2026-04-02'
url: https://wiki.seeedstudio.com/es/driving_reterminal_d1001_audio_peripherals/
updatedAt: '2026-04-03'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Control de los periféricos de audio de reTerminal D1001

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/1-reTeriminal-D1001.jpg" style={{width:900, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=D1001" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div><br />

## Introducción

Esta guía presenta cómo manejar el periférico de audio I2S en la placa de desarrollo **reTerminal D1001**. La arquitectura del sistema implica tres componentes principales:
- **ESP32-P4**: El procesador principal que gestiona el flujo de datos de audio y controla las configuraciones de los periféricos.
- **ES8311**: Un códec de audio mono de bajo consumo, responsable de convertir los datos digitales I2S en señales de audio analógicas.
- **PCA9535**: Un expansor de E/S I2C utilizado para controlar el estado de habilitación del amplificador de potencia, proporcionando una expansión flexible de GPIO para el control de periféricos.


### Diagrama de bloques de la arquitectura de audio

El sistema de audio utiliza una arquitectura de bus dual: el **bus I2S** está dedicado a la transmisión de datos de audio digital de alta velocidad, mientras que el **bus I2C** maneja los comandos de control de baja velocidad tanto para el códec como para el expansor de E/S.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/Driving_Audio_Peripherals/D1001_Block_diagram.jpg" style={{width:800, height:'auto'}}/></div>

### Asignación de pines y principios

#### ESP32-P4 y ES8311 (datos y control de audio)

| Nombre de la señal | Pin ESP32-P4 | Descripción de la función |
| :--- | :--- | :--- |
| **I2C_SDA** | GPIO20 | **Datos serie**: Transporta los comandos de configuración (volumen, frecuencia de muestreo) al ES8311. |
| **I2C_SCL** | GPIO21 | **Reloj serie**: Sincroniza las transferencias de datos I2C. |
| **I2S_MCK** | GPIO33 | **Reloj maestro**: Reloj de referencia de alta frecuencia para los moduladores delta-sigma internos del códec. |
| **I2S_BCK** | GPIO32 | **Reloj de bit**: Sincroniza cada bit individual del flujo de datos de audio. |
| **I2S_WS**  | GPIO31 | **Selección de palabra**: También conocido como LRCK, define el inicio de una nueva trama de audio y selecciona los canales izquierdo/derecho. |
| **I2S_DO**  | GPIO30 | **Salida de datos**: Transmite los datos de audio PCM digitales desde el ESP32-P4 al códec. |
| **I2S_DI**  | GPIO11 | **Entrada de datos**: Reservado para una posible grabación de audio o loopback desde el códec. |

#### ESP32-P4 y PCA9535RGER (expansión de GPIO)

| Nombre de la señal | Pin ESP32-P4 | Descripción de la función |
| :--- | :--- | :--- |
| **I2C_SDA** | GPIO20 | Bus de datos I2C compartido para controlar el expansor de E/S PCA9535. |
| **I2C_SCL** | GPIO21 | Bus de reloj I2C compartido. |
| **EN_PA**   | **EXP_GPO11** | **Habilitación de PA**: Se asigna al pin **P13** en el PCA9535. Ponerlo en nivel ALTO habilita el amplificador de potencia externo. |

## Flujo de software

### Repositorio de ejemplo en GitHub

Descarga el repositorio oficial de reTerminal D1001 desde GitHub para obtener el código fuente y los controladores.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/reTerminal-D1001" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Example Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::tip
Por favor navega al directorio `driver_examples/01_I2SCodec` dentro del repositorio para encontrar el código fuente específico y los archivos de proyecto para este ejemplo de audio.
:::

### Secuencia de ejecución de desarrollo

#### Paso 1. Inicializar el expansor de E/S I2C (PCA9535RGER)

El amplificador de potencia externo (PA) se controla mediante el expansor PCA9535. Habilitar el PA es crucial porque, sin él, no llegará sonido audible a los altavoces incluso si el códec funciona correctamente.

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

#### Paso 2. Configurar el controlador I2S

I2S es un protocolo de comunicación serie síncrono usado específicamente para transmitir audio digital. Configuramos el ESP32-P4 como **maestro I2S**, lo que significa que proporciona los relojes BCLK y WS al códec.

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

#### Paso 3. Inicializar el códec ES8311

El ES8311 debe configurarse para que coincida con los ajustes de I2S (frecuencia de muestreo, ancho de datos) definidos en el ESP32-P4. Esto se hace a través del bus I2C. Antes de compilar el proyecto, puedes personalizar el comportamiento de audio modificando las macros en `main/example_config.h`:

| Macro | Descripción | Principios de configuración |
| :--- | :--- | :--- |
| **EXAMPLE_SAMPLE_RATE** | **Frecuencia de muestreo de audio** (Hz) | Define la frecuencia de las muestras de audio. Los valores comunes son `16000` (voz) o `44100`/`48000` (música). |
| **EXAMPLE_MCLK_MULTIPLE** | **Relación MCLK a LRCLK** | El reloj maestro (MCLK) debe ser un múltiplo de la frecuencia de muestreo. `256` es el estándar para 16 bits, pero `384` se utiliza a menudo para mayor precisión. |
| **EXAMPLE_VOICE_VOLUME** | **Volumen de reproducción** | Va de `0` a `100`. Establece el nivel de salida inicial del códec ES8311. |
| **EXAMPLE_MIC_GAIN** | **Ganancia del micrófono** (dB) | Ajusta la sensibilidad de los micrófonos duales. Valores más altos aumentan el volumen pero pueden introducir ruido. |
| **EXAMPLE_RECV_BUF_SIZE** | **Tamaño del búfer DMA** | Controla el tamaño de los bloques de datos procesados por el DMA. Los búferes más grandes evitan cortes, pero aumentan la latencia de audio. |

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

#### Paso 4. Entrada principal y creación de tareas

La aplicación principal inicializa los periféricos y luego delega la lógica de reproducción a una tarea dedicada de FreeRTOS.

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

#### Paso 5. Precarga de DMA y reproducción de datos

**DMA (acceso directo a memoria)** permite que el periférico I2S obtenga datos directamente desde la memoria sin intervención de la CPU. La **precarga** del búfer DMA es una técnica crítica para evitar el ruido de "clic" que se produce cuando el hardware I2S arranca con un búfer vacío, causando un cambio repentino de offset de CC.

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

## Solución de problemas

### P1: No hay salida de sonido desde el altavoz
- **Comprobar**: Verifica si el amplificador de potencia (PA) está habilitado. La señal `EN_PA` se controla mediante el expansor de E/S PCA9535 en el pin **P13**. Asegúrate de que se llame a `pca9535_init()` y que configure correctamente el registro de salida (Puerto 1, Bit 3).
- **Comprobar**: Confirma las conexiones I2S y asegúrate de que se llame a la función `i2s_channel_enable()` para el canal TX.

### P2: El audio está distorsionado o contiene chasquidos
- **Comprobar**: Asegúrate de que la configuración del reloj I2S (MCLK, BCLK, WS) coincida con la frecuencia de muestreo de tu archivo de audio. Una discrepancia en `EXAMPLE_SAMPLE_RATE` puede causar problemas de tono y velocidad.
- **Comprobar**: Verifica que la precarga de DMA esté implementada como se muestra en el **Paso 5**. La precarga evita el sonido de "pop" causado por iniciar un canal con un búfer vacío.

### P3: Fallo de comunicación I2C con ES8311 o PCA9535
- **Comprobar**: Verifica las conexiones I2C SDA (GPIO20) y SCL (GPIO21). Asegúrate de que ningún otro periférico entre en conflicto con estos pines.
- **Comprobar**: Confirma que las direcciones I2C sean correctas: **0x20** para PCA9535 y **0x18** para ES8311.

## Soporte técnico y debate sobre el producto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
