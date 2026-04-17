---
description: Este artigo irá guiá-lo a acionar o periférico de áudio I2S no reTerminal D1001.
sku: 100058144
title: Acionando os Periféricos de Áudio do reTerminal D1001
image: https://files.seeedstudio.com/wiki/reTerminal_d10xx/1-reTeriminal-D1001.webp
slug: /driving_reterminal_d1001_audio_peripherals
last_update:
  date: 04/02/2026
  author: Jackson.Li
createdAt: '2026-04-02'
url: https://wiki.seeedstudio.com/pt-br/driving_reterminal_d1001_audio_peripherals/
updatedAt: '2026-04-02'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Acionando os Periféricos de Áudio do reTerminal D1001

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/hardware.webp" style={{width:900, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=D1001" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div><br />

## Introdução

Este guia apresenta como acionar o periférico de áudio I2S na placa de desenvolvimento **reTerminal D1001**. A arquitetura do sistema envolve três componentes centrais:
- **ESP32-P4**: O processador principal que gerencia o fluxo de dados de áudio e controla as configurações dos periféricos.
- **ES8311**: Um codec de áudio mono de baixo consumo responsável por converter dados digitais I2S em sinais de áudio analógicos.
- **PCA9535**: Um expansor de IO I2C usado para controlar o estado de habilitação do amplificador de potência, fornecendo expansão flexível de GPIO para controle de periféricos.


### Diagrama de Blocos da Arquitetura de Áudio

O sistema de áudio utiliza uma arquitetura de barramento duplo: o **barramento I2S** é dedicado à transmissão de dados de áudio digitais em alta velocidade, enquanto o **barramento I2C** lida com comandos de controle em baixa velocidade tanto para o codec quanto para o expansor de IO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/Driving_Audio_Peripherals/D1001_Block_diagram.jpg" style={{width:800, height:'auto'}}/></div>

### Atribuição de Pinos e Princípios

#### ESP32-P4 & ES8311 (Dados e Controle de Áudio)

| Nome do Sinal | Pino do ESP32-P4 | Descrição da Função |
| :--- | :--- | :--- |
| **I2C_SDA** | GPIO20 | **Dados Seriais**: Transporta comandos de configuração (volume, taxa de amostragem) para o ES8311. |
| **I2C_SCL** | GPIO21 | **Clock Serial**: Sincroniza as transferências de dados I2C. |
| **I2S_MCK** | GPIO33 | **Clock Mestre**: Clock de referência de alta frequência para os moduladores delta-sigma internos do codec. |
| **I2S_BCK** | GPIO32 | **Clock de Bits**: Sincroniza cada bit individual do fluxo de dados de áudio. |
| **I2S_WS**  | GPIO31 | **Seleção de Palavra**: Também conhecido como LRCK, define o início de um novo quadro de áudio e seleciona os canais Esquerdo/Direito. |
| **I2S_DO**  | GPIO30 | **Saída de Dados**: Transmite os dados de áudio PCM digitais do ESP32-P4 para o codec. |
| **I2S_DI**  | GPIO11 | **Entrada de Dados**: Reservado para possível gravação de áudio ou loopback a partir do codec. |

#### ESP32-P4 & PCA9535RGER (Expansão de GPIO)

| Nome do Sinal | Pino do ESP32-P4 | Descrição da Função |
| :--- | :--- | :--- |
| **I2C_SDA** | GPIO20 | Barramento de dados I2C compartilhado para controlar o expansor de IO PCA9535. |
| **I2C_SCL** | GPIO21 | Barramento de clock I2C compartilhado. |
| **EN_PA**   | **EXP_GPO11** | **Habilitação do PA**: Mapeado para o pino **P13** no PCA9535. Ajustar este pino para nível ALTO habilita o amplificador de potência externo. |

## Fluxo de Software

### Repositório de Exemplo no GitHub

Baixe o repositório oficial do reTerminal D1001 no GitHub para obter o código-fonte e os drivers.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/reTerminal-D1001" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Example Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::tip
Por favor, navegue até o diretório `driver_examples/01_I2SCodec` dentro do repositório para encontrar o código-fonte específico e os arquivos de projeto deste exemplo de áudio.
:::

### Sequência de Execução de Desenvolvimento

#### Etapa 1. Inicializar o Expansor de IO I2C (PCA9535RGER)

O amplificador de potência externo (PA) é controlado por meio do expansor PCA9535. Habilitar o PA é crucial porque, sem isso, nenhum som audível chegará aos alto-falantes mesmo que o codec esteja funcionando corretamente.

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

#### Etapa 2. Configurar o Driver I2S

I2S é um protocolo de comunicação serial síncrona usado especificamente para transmitir áudio digital. Nós configuramos o ESP32-P4 como **Mestre I2S**, o que significa que ele fornece os clocks BCLK e WS para o codec.

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

#### Etapa 3. Inicializar o Codec ES8311

O ES8311 deve ser configurado para corresponder às configurações de I2S (taxa de amostragem, largura de dados) definidas no ESP32-P4. Isso é feito através do barramento I2C. Antes de compilar o projeto, você pode personalizar o comportamento de áudio modificando as macros em `main/example_config.h`:

| Macro | Descrição | Princípios de Configuração |
| :--- | :--- | :--- |
| **EXAMPLE_SAMPLE_RATE** | **Taxa de Amostragem de Áudio** (Hz) | Define a frequência das amostras de áudio. Valores comuns são `16000` (voz) ou `44100`/`48000` (música). |
| **EXAMPLE_MCLK_MULTIPLE** | **Relação MCLK para LRCLK** | O Clock Mestre (MCLK) deve ser um múltiplo da taxa de amostragem. `256` é o padrão para 16 bits, mas `384` é frequentemente usado para maior precisão. |
| **EXAMPLE_VOICE_VOLUME** | **Volume de Reprodução** | Varia de `0` a `100`. Define o nível de saída inicial do codec ES8311. |
| **EXAMPLE_MIC_GAIN** | **Ganho do Microfone** (dB) | Ajusta a sensibilidade dos microfones duplos. Valores mais altos aumentam o volume, mas podem introduzir ruído. |
| **EXAMPLE_RECV_BUF_SIZE** | **Tamanho do Buffer DMA** | Controla o tamanho dos blocos de dados processados pelo DMA. Buffers maiores evitam travamentos, mas aumentam a latência de áudio. |

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

#### Etapa 4. Função Principal e Criação de Tarefas

O aplicativo principal inicializa os periféricos e então delega a lógica de reprodução a uma tarefa dedicada do FreeRTOS.

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

#### Etapa 5. Pré-carregamento de DMA e Reprodução de Dados

**DMA (Direct Memory Access)** permite que o periférico I2S busque dados diretamente da memória sem intervenção da CPU. O **pré-carregamento** do buffer DMA é uma técnica crítica para evitar o ruído de “estalo” que ocorre quando o hardware I2S inicia com um buffer vazio, causando uma mudança repentina de deslocamento DC.

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

## Solução de problemas

### P1: Nenhuma saída de som no alto-falante
- **Verificação**: Confirme se o amplificador de potência (PA) está habilitado. O sinal `EN_PA` é controlado via o expansor de IO PCA9535 no pino **P13**. Certifique-se de que `pca9535_init()` seja chamado e configure corretamente o registrador de saída (Porta 1, Bit 3).
- **Verificação**: Confirme as conexões de I2S e garanta que a função `i2s_channel_enable()` seja chamada para o canal TX.

### P2: O áudio está distorcido ou contém ruídos de estalos
- **Verificação**: Certifique-se de que a configuração de clock do I2S (MCLK, BCLK, WS) corresponda à taxa de amostragem do seu arquivo de áudio. Uma incompatibilidade em `EXAMPLE_SAMPLE_RATE` pode causar problemas de tom e velocidade.
- **Verificação**: Verifique se o pré-carregamento de DMA está implementado conforme mostrado na **Etapa 5**. O pré-carregamento evita o som de “estalo” causado por iniciar um canal com um buffer vazio.

### P3: Falha de comunicação I2C com ES8311 ou PCA9535
- **Verificação**: Verifique as conexões I2C SDA (GPIO20) e SCL (GPIO21). Certifique-se de que nenhum outro periférico esteja em conflito com esses pinos.
- **Verificação**: Confirme se os endereços I2C estão corretos: **0x20** para PCA9535 e **0x18** para ES8311.

## Suporte técnico e discussão de produto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
