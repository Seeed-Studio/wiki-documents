---
description: Este artigo explica como acionar o microfone I2S no reTerminal D1001 e implementar um loop de gravação de 10 segundos e reprodução de 10 segundos com o alto-falante.
sku: 100058144
title: Acionando o Microfone do reTerminal D1001
image: https://files.seeedstudio.com/wiki/reTerminal_d10xx/1-reTeriminal-D1001.webp
slug: /driving_reterminal_d1001_microphone
last_update:
  date: 04/17/2026
  author: Jackson.Li
createdAt: '2026-04-17'
url: https://wiki.seeedstudio.com/pt-br/driving_reterminal_d1001_microphone/
updatedAt: '2026-04-17'
---

# Acionando o Microfone do reTerminal D1001

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/hardware.webp" style={{width:900, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=D1001" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div><br />

## Introdução

Este wiki mostra como acionar o **microfone I2S** no **reTerminal D1001** e como construir um **loop completo de gravação e reprodução**:
- Gravar a partir do microfone por **10 segundos** (caminho de captura ES7210).
- Reproduzir os dados PCM gravados por **10 segundos** (caminho do alto-falante ES8311).
- Repetir continuamente para validar ambos os pipelines de áudio RX e TX.

O caminho de áudio neste exemplo inclui três partes principais:
- **ESP32-P4**: Captura dados PCM do microfone e envia dados PCM para reprodução.
- **ES7210** (**endereço I2C: `0x40`**): Converte sinais analógicos do microfone em dados I2S digitais.
- **ES8311 + controle de PA (PCA9535)**: Converte PCM em saída para o alto-falante e habilita o amplificador de potência para reprodução.

## Arquitetura de Microfone + Alto-falante

### Diagrama de Blocos (ES7210 + ES8311)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/Driving_Audio_Peripherals/microphone.jpg" style={{width:800, height:'auto'}}/></div>

### Tabela de Mapeamento de Pinos

| Grupo de Sinais | Nome do Sinal | Pino ESP32-P4 | Dispositivo Conectado | Descrição |
| :--- | :--- | :--- | :--- | :--- |
| Controle I2C Compartilhado | I2C_SDA | GPIO20 | ES7210 / PCA9535 | Linha de dados I2C compartilhada para configuração do ES7210 e controle do PA |
| Controle I2C Compartilhado | I2C_SCL | GPIO21 | ES7210 / PCA9535 | Linha de clock I2C compartilhada |
| I2S do Microfone (RX) | ADC_I2S_MCLK | GPIO29 | ES7210 | Clock mestre para ES7210 |
| I2S do Microfone (RX) | ADC_I2S_SCLK | GPIO28 | ES7210 | Clock de bits para o caminho de captura do ES7210 |
| I2S do Microfone (RX) | ADC_I2S_LRCK | GPIO27 | ES7210 | Seleção de palavra (LRCK) |
| I2S do Microfone (RX) | ADC_I2S_SDOUT | GPIO26 | ES7210 | Saída de dados PCM do ES7210 para o ESP32-P4 |
| Controle de PA | EN_PA (EXP_GPO11) | PCA9535 P13 | Amplificador de Potência | Manter em HIGH ao validar o loop de reprodução microfone + alto-falante |

Esta tabela foca no caminho do microfone. Neste exemplo, o ES8311 também compartilha o mesmo barramento I2C para configuração do codec de reprodução.

## Fluxo de Software

### Repositório de Exemplo no GitHub

Baixe o repositório oficial do reTerminal D1001 no GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/reTerminal-D1001" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Baixar o Código de Exemplo</font></span></strong>
    </a>
</div><br />

### Estrutura de Diretórios do Projeto

O diagrama a seguir mostra a estrutura de diretórios do projeto usada neste exemplo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/Driving_Audio_Peripherals/Project_Structure_Diagram.jpg" style={{width:900, height:'auto'}}/></div>

:::tip
Navegue até o diretório de exemplo de gravação e reprodução para ES7210 + ES8311 no repositório (por exemplo, `driver_examples/02_I2SCodec_es7210`).
:::

### Sequência de Execução de Desenvolvimento

#### Etapa 1. Inicializar o Controle de PA via PCA9535

O caminho do alto-falante requer que o pino de habilitação do PA seja acionado através do PCA9535 (P13 = HIGH).

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

#### Etapa 2. Inicializar I2S para ES8311 (TX do Alto-falante)

Configure um canal I2S TX para reprodução no ES8311.

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

#### Etapa 3. Inicializar o Codec ES8311

O ES8311 é configurado para o formato de reprodução do alto-falante e volume.

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

#### Etapa 4. Inicializar I2S + ES7210 (RX do Microfone)

Configure a captura do microfone a partir do ES7210 através de I2S RX.

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

#### Etapa 5. Gravar 10s e Reproduzir 10s em Loop

Aloque um buffer em PSRAM, grave em blocos a partir do ES7210 e depois escreva o PCM gravado no ES8311.

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

#### Etapa 6. Entrada principal

Inicialize todos os módulos em ordem e, em seguida, inicie a tarefa de gravação e reprodução.

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

### Log serial esperado antes da gravação

Ao usar nosso projeto de exemplo, antes que a primeira gravação de 10 segundos comece, o monitor serial deve exibir mensagens de inicialização semelhantes a:

```text
Record & Play Example (ES7210 + ES8311)
PCA9535 initialized, P13 set to HIGH
ES8311 I2S initialized
ES8311 codec configured
ES7210 I2S initialized in STD mode (Stereo)
ES7210 codec configured
=== Start Recording for 10 seconds ===
```

Se esses logs não aparecerem em sequência, verifique primeiro o valor de retorno de cada etapa de inicialização.

## Solução de problemas

### P1: Sem som durante a reprodução
- **Verifique**: Confirme se o PCA9535 foi inicializado e se o P13 (`EN_PA`) está em nível ALTO.
- **Verifique**: Confirme os pinos I2S TX do ES8311 e a execução de `i2s_channel_enable(tx_handle_es8311)`.

### P2: Nenhum dado capturado do microfone
- **Verifique**: Confirme o mapeamento dos pinos I2S RX do ES7210 e a execução de `i2s_channel_enable(rx_handle_es7210)`.
- **Verifique**: Confirme o endereço I2C do ES7210 e o valor de retorno da inicialização do codec.

### P3: Áudio distorcido ou ruído alto
- **Verifique**: Mantenha a taxa de amostragem e a razão MCLK consistentes entre ES8311, ES7210 e as configurações de I2S.
- **Verifique**: Reduza o ganho do microfone (por exemplo, menor que `ES7210_MIC_GAIN_24DB`) se ocorrer clipping em campo próximo.
- **Verifique**: Se a saída do alto-falante tiver ruído metálico contínuo ou voz incompleta, confirme a configuração do slot do canal:
  `slot_cfg = I2S_STD_PHILIPS_SLOT_DEFAULT_CONFIG(I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_STEREO)`.
- **Verifique**: Certifique-se de que o alinhamento dos canais RX/TX esteja correto; incompatibilidade mono/estéreo pode causar voz truncada ou robótica.

## Suporte técnico e discussão sobre o produto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
