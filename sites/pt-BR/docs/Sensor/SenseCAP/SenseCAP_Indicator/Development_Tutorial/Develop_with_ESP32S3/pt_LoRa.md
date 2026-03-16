---
description: LoRa®
title: LoRa®
keywords:
  - Tutorial de Desenvolvimento SenseCAP Indicator ESP32 Lora
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_ESP32_LoRa
last_update:
  date: 5/23/2023
  author: Thomas
createdAt: '2023-05-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_Indicator_ESP32_LoRa/
---
# **LoRa®**

O SenseCAP Indicator possui um módulo LoRa® SX1262 integrado, que pode realizar comunicação ponto a ponto (p2p).

## **Enviar Pacotes de Dados**

Este código de exemplo demonstra um caso básico de como usar o módulo de rádio LoRa® no modo de transmissão para enviar pacotes de dados no modo LoRa®. Ele define a frequência, largura de banda, fator de espalhamento, taxa de codificação, comprimento do preâmbulo e outros parâmetros do esquema de modulação LoRa®.

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "esp_log.h"
#include "radio.h"
#include "bsp_board.h"

#define RF_FREQUENCY                                868000000 // Hz
#define LORA_BANDWIDTH                              0         // [0: 125 kHz,
                                                              //  1: 250 kHz,
                                                              //  2: 500 kHz,
                                                              //  3: Reserved]
#define LORA_SPREADING_FACTOR                       12         // [SF7..SF12]
#define LORA_CODINGRATE                             1         // [1: 4/5,
                                                              //  2: 4/6,
                                                              //  3: 4/7,
                                                              //  4: 4/8]
#define LORA_PREAMBLE_LENGTH                        8         // Same for Tx and Rx
#define LORA_SYMBOL_TIMEOUT                         5         // Symbols
#define LORA_FIX_LENGTH_PAYLOAD_ON                  false
#define LORA_IQ_INVERSION_ON                        false

static RadioEvents_t RadioEvents;

static const char *TAG = "app_main";

void OnTxDone( void )
{
    ESP_LOGI(TAG, "OnTxDone");
}

void demo_lora_tx(void)
{
    int cnt = 0;
    ESP_LOGI(TAG, "system start");
    ESP_LOGI(TAG, "demo lora tx");
    ESP_ERROR_CHECK(bsp_board_init());

    RadioEvents.TxDone = OnTxDone;
    Radio.Init( &RadioEvents );

    Radio.SetChannel( RF_FREQUENCY );
    Radio.SetTxConfig( MODEM_LORA,22, 0, LORA_BANDWIDTH,
                                   LORA_SPREADING_FACTOR, LORA_CODINGRATE,
                                   LORA_PREAMBLE_LENGTH, LORA_FIX_LENGTH_PAYLOAD_ON,
                                   true, 0, 0, LORA_IQ_INVERSION_ON, 3000 );

    Radio.SetMaxPayloadLength( MODEM_LORA, 255 );

    while(1) {
        printf("send... %d\n", cnt++);
        Radio.Send( "1234567890", sizeof("1234567890") );
        vTaskDelay(5000 / portTICK_PERIOD_MS);
    }
}
```

## **Receber Pacotes de Dados**

Este código de exemplo configura um receptor LoRa® usando o módulo de rádio SX126x e registra os pacotes recebidos no console. Ele pode ser usado como ponto de partida para desenvolver aplicações LoRa® que exijam recebimento de dados a longas distâncias com baixo consumo de energia.

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "esp_log.h"
#include "radio.h"
#include "bsp_board.h"

#define RF_FREQUENCY                                868000000 // Hz
#define LORA_BANDWIDTH                              0         // [0: 125 kHz,
                                                              //  1: 250 kHz,
                                                              //  2: 500 kHz,
                                                              //  3: Reserved]
#define LORA_SPREADING_FACTOR                       7         // [SF7..SF12]
#define LORA_CODINGRATE                             1         // [1: 4/5,
                                                              //  2: 4/6,
                                                              //  3: 4/7,
                                                              //  4: 4/8]
#define LORA_PREAMBLE_LENGTH                        8         // Same for Tx and Rx
#define LORA_SYMBOL_TIMEOUT                         5         // Symbols
#define LORA_FIX_LENGTH_PAYLOAD_ON                  false
#define LORA_IQ_INVERSION_ON                        false

static RadioEvents_t RadioEvents;

static const char *TAG = "app_main";

void OnRxDone( uint8_t *payload, uint16_t size, int16_t rssi, int8_t snr )
{
    int i = 0;
    ESP_LOGI(TAG, "rssi:%d dBm, snr:%d dB, len:%d, payload:", rssi, snr, size);
    for( i = 0; i < size; i++) {
        printf("0x%x ",payload[i] );
    }
    printf("\n");
}

void demo_lora_rx(void)
{
    int cnt = 0;
    ESP_LOGI(TAG, "system start");
    ESP_LOGI(TAG, "demo lora rx continue");
    bsp_sx126x_init();

    RadioEvents.RxDone = OnRxDone;
    Radio.Init( &RadioEvents );

    Radio.SetChannel( RF_FREQUENCY );
    Radio.SetTxConfig( MODEM_LORA,22, 0, LORA_BANDWIDTH,
                                   LORA_SPREADING_FACTOR, LORA_CODINGRATE,
                                   LORA_PREAMBLE_LENGTH, LORA_FIX_LENGTH_PAYLOAD_ON,
                                   true, 0, 0, LORA_IQ_INVERSION_ON, 3000 );

    Radio.SetRxConfig( MODEM_LORA, LORA_BANDWIDTH, LORA_SPREADING_FACTOR,
                                   LORA_CODINGRATE, 0, LORA_PREAMBLE_LENGTH,
                                   LORA_SYMBOL_TIMEOUT, LORA_FIX_LENGTH_PAYLOAD_ON,
                                   0, true, 0, 0, LORA_IQ_INVERSION_ON, true );
    Radio.SetMaxPayloadLength( MODEM_LORA, 255 );

    Radio.Rx( 0 );
    while(1) {
        printf("cnt: %d\n", cnt++);
        vTaskDelay(10000 / portTICK_PERIOD_MS);
    }
}

```

# **Suporte Técnico**

Não se preocupe, nós cuidamos de você! Visite nosso [Canal Oficial da Seeed no Discord](https://discord.com/invite/QqMgVwHT3X) para fazer suas perguntas!

Se você tiver um pedido em grande quantidade ou necessidade de customização, entre em contato pelo e-mail iot@seeed.cc
