---
description: Visão geral de hardware do Wio-WM1110 Dev Kit
title: Visão geral de hardware
keywords:
  - Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-WM1110_Dev_Kit_Hardware_Overview
last_update:
  date: 8/8/2023
  author: Jessie
createdAt: '2023-06-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-WM1110_Dev_Kit_Hardware_Overview/
---


O Wio WM1110 Dev Kit é uma plataforma de código aberto para criar projetos de IoT. Ele fornece conexão de rede LoRa de baixo consumo de energia e uma gama completa de serviços de cobertura de localização. Este kit também inclui uma variedade de sensores e periféricos, tornando-o uma plataforma versátil para construir projetos de IoT.

Neste tutorial, vamos apresentar a visão geral do hardware e como desenvolver sua própria aplicação!

## Visão geral de hardware

O Wio-WM1110 Dev Kit é baseado no [Wio-WM1110 Module](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html), integra o transceptor LoRa® da Semtech e um front-end de rádio multiuso para geolocalização, a placa possui um sensor de temperatura e um acelerômetro de 3 eixos integrados, além de fornecer opções de conectividade para uma variedade de periféricos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/hardware_overview1.png" alt="pir" width={800} height="auto" /></p>

## Pinout

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/PIN.png" alt="pir" width={800} height="auto" /></p>

## Comunicação LoRaWAN®

### Configure as chaves

Antes que um dispositivo possa se comunicar via NS, precisamos registrá-lo com as 3 chaves.

O Wio-WM1110 DK permite que os usuários definam o DevEUI, AppEUI e AppKey, então você pode configurar seus próprios parâmetros no arquivo 'lorawan_key_config.h' e depois gravá-lo no DK.

```cpp
...\Seeed_Wio_WM1110_Dev_Board\apps\common\lorawan_key_config.h
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/keys.png" alt="pir" width={800} height="auto" /></p>

**Exemplo LoRa Basics Modem LoRaWAN® Classe A/C**

O aplicativo iniciará automaticamente um procedimento para ingressar em uma rede LoRaWAN, consulte **lorawan_key_config.h**

Quando uma rede é ingressada (ou seja, quando o evento correspondente é acionado), uplinks são enviados periodicamente. Esta ação periódica é baseada na funcionalidade de alarme do LoRa Basics Modem. Cada vez que o evento relacionado ao alarme é acionado, o aplicativo solicita um uplink.

O conteúdo do uplink é o valor lido do contador de carga chamando `smtc_modem_get_charge()`.

O aplicativo também é capaz de exibir dados e metadados de um downlink recebido.

**Configuração**

Vários parâmetros podem ser atualizados no arquivo de cabeçalho `main_lorawan.h`:

| Constante                  | Descrição                                                                           |
| -------------------------- | ---------------------------------------------------------------------------------- |
| `LORAWAN_APP_PORT`         | FPort LoRaWAN® usado para as mensagens de uplink                                   |
| `LORAWAN_CONFIRMED_MSG_ON` | Solicita uma confirmação do LNS de que a mensagem de uplink foi recebida          |
| `APP_TX_DUTYCYCLE`         | Atraso, em segundos, entre dois uplinks                                            |

## Posicionamento

### GNSS

Capturando uma pequena porção do sinal transmitido pelos satélites GNSS e extraindo as informações necessárias para calcular a posição do dispositivo - as pseudo-distâncias. Essas informações são agregadas em uma mensagem NAV que pode ser enviada para um sistema de back-end para calcular a posição do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_47857_JbH8r_MU_X1uz1V7_1687329215?w=1265&h=592&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

O scanner GNSS do Wio-WM1110 possui dois modos de operação: autônomo e assistido.

**Modo GNSS autônomo:** Não requer nenhum dado de localização de assistência ou almanaque, e tem como objetivo detectar sinais fortes de satélite. Portanto, é adequado para condições externas com boa visibilidade do céu.

**Modo GNSS assistido**：Permite a geolocalização GNSS mais eficiente. As informações de assistência podem construir uma lista dos satélites visíveis no momento e local atuais, a fim de reduzir o espaço de busca dos satélites GNSS e, portanto, otimizar o tempo e a energia gastos na geolocalização. As informações de assistência são adaptadas a uma rede LPWAN, limitando os dados enviados, especialmente o tamanho e a frequência dos downlinks. Ela consiste em:  

- Posição aproximada do LR1110
- Hora atual
- Informações de Almanaque atualizadas e de tamanho reduzido (menos de 3 meses)

**Exemplo de Geolocalização GNSS**

Este exemplo ilustra o procedimento de varredura GNSS:

- configuração da biblioteca LoRa Basics Modem; e
- execução do recurso de GNSS *scan & send* usando o *middleware de geolocalização GNSS*.

**Configuração relacionada à demonstração GNSS**

O arquivo de cabeçalho `main_geolocation_gnss.h` define várias constantes para configurar os parâmetros de geolocalização.

| Constante                                | Comentários                                                                              | Valores possíveis | Valor padrão |
| ---------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------- | ------------ |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_AUTO` | Se definido como `true`: configura o aplicativo para obter automaticamente uma posição de assistência | {`true`,`false`} | `true`       |

Se o modo manual for selecionado para a posição de assistência, as seguintes constantes definem a posição a ser usada.

| Constante                                | Comentários                                                                       | Valores possíveis            | Valor padrão       |
| ---------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------- | ------------------ |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LAT`  | A latitude a ser usada para a varredura GNSS Assistida (grau decimal)            | Qualquer `float` em [-90, 90]   | 45.181454          |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LONG` | A longitude a ser usada para a varredura GNSS Assistida (grau decimal)           | Qualquer `float` em [-180, 180] | 5.720893           |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_TEXT` | Uma representação em texto da posição de assistência, apenas para impressão de informações | Qualquer c-string constante     | "Grenoble, FRANCE" |

***Nota***: A posição de assistência predefinida deve estar dentro de um raio de 150 km da localização real.

| Constante                | Comentários                                                                                       | Valores possíveis          | Valor padrão          |
| ------------------------ | ------------------------------------------------------------------------------------------------- | -------------------------- | --------------------- |
| `GNSS_SCAN_GROUP_PERIOD` | Define a duração entre o final de uma sequência de varredura e envio e o início da próxima sequência | `uint32_t`                 | 30                    |
| `GNSS_SCAN_MODE`         | Define o modo de varredura GNSS (estático ou móvel) a ser usado para as sequências de varredura e envio. | Valor em `gnss_mw_mode_t` | `GNSS_MW_MODE_STATIC` |

O modo de varredura GNSS selecionado por padrão é `GNSS_MW_MODE_STATIC`, o que significa que este exemplo de aplicação tem como alvo objetos não móveis.

### Wi-Fi

Descobrindo os pontos de acesso Wi-Fi b/g/n disponíveis nas proximidades do dispositivo e extraindo endereços MAC que permitem geolocalizar o dispositivo. O objetivo é obter pelo menos 2 endereços MAC, que podem ser usados para posicionar o dispositivo depois de terem sido enviados para um serviço online de busca de Wi-Fi.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Schematic02.png" alt="pir" width={800} height="auto" /></p>

**Exemplo de Geolocalização Wi-Fi**

Este aplicativo demonstra o uso do middleware de geolocalização Wi-Fi e como o LoRa Basics Modem deve ser configurado para atender aos pré-requisitos para
Este exemplo ilustra o procedimento de varredura Wi-Fi:

- configuração da biblioteca LoRa Basics Modem; e
- execução do recurso de Wi-Fi *scan & send* usando o *middleware de geolocalização Wi-Fi*.

**Configuração relacionada à demonstração Wi-Fi**

O arquivo de cabeçalho `main_geolocation_wifi.h` define várias constantes que podem ser definidas para configurar os parâmetros configuráveis do aplicativo.

| Constante          | Comentários                                                                                       | Valores possíveis | Valor padrão |
| ------------------ | ------------------------------------------------------------------------------------------------ | ----------------- | ------------ |
| `WIFI_SCAN_PERIOD` | Define a duração entre o final de uma sequência de varredura e envio e o início da próxima sequência | `uint32_t`        | 30           |

### GNSS e Wi-Fi

**Exemplo de Geolocalização GNSS e Wi-Fi**
Este exemplo ilustra a combinação dos procedimentos de varredura GNSS e Wi-Fi:

- configuração da biblioteca LoRa Basics Modem; e
- execução concorrente dos recursos GNSS e Wi-Fi *scan & send* usando o *middleware de geolocalização GNSS* e o *middleware de geolocalização Wi-Fi*.

**Configuração relacionada à demonstração de geolocalização**

O arquivo de cabeçalho `main_geolocation_gnss_wifi.h` define várias constantes para configurar os parâmetros de geolocalização.

| Constante                                | Comentários                                                                              | Valores possíveis | Valor padrão |
| ---------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------- | ------------ |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_AUTO` | Se definido como `true`: configura o aplicativo para obter automaticamente uma posição de assistência | {`true`,`false`} | `false`      |

Se o modo manual for selecionado para a posição de assistência, as seguintes constantes definem a posição a ser usada.

| Constante                                | Comentários                                                                       | Valores possíveis            | Valor padrão       |
| ---------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------- | ------------------ |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LAT`  | A latitude a ser usada para a varredura GNSS Assistida (grau decimal)            | Qualquer `float` em [-90, 90]   | 45.181454          |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LONG` | A longitude a ser usada para a varredura GNSS Assistida (grau decimal)           | Qualquer `float` em [-180, 180] | 5.720893           |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_TEXT` | Uma representação em texto da posição de assistência, apenas para impressão de informações | Qualquer c-string constante     | "Grenoble, FRANCE" |

***Nota***: A posição de assistência predefinida deve estar dentro de um raio de 150 km da localização real.

| Constante                | Comentários                                                                                   | Valores possíveis         | Valor padrão          |
| ------------------------ | --------------------------------------------------------------------------------------------- | ------------------------- | --------------------- |
| `GNSS_SCAN_GROUP_PERIOD` | Define a duração entre o fim de uma sequência de varredura e envio e o início da próxima      | `uint32_t`                | 30                    |
| `GNSS_SCAN_MODE`         | Define o modo de varredura GNSS (estático ou móvel) a ser usado para sequências de varredura e envio. | Valor em `gnss_mw_mode_t` | `GNSS_MW_MODE_MOBILE` |

O modo de varredura GNSS selecionado por padrão é `GNSS_MW_MODE_MOBILE`, o que significa que este exemplo de aplicação é voltado para objetos móveis.

## BLE

Bluetooth Low Energy (BLE), também conhecido como Bluetooth de Baixa Energia, é uma tecnologia de comunicação sem fio projetada para fornecer um método de comunicação de baixa potência e baixa complexidade para dispositivos que exigem fonte de alimentação de longo prazo, baixas taxas de transferência de dados e curtas distâncias de comunicação. Otimizado com base na tecnologia Bluetooth, o BLE possui menor consumo de energia e uma pilha de protocolos mais simples, tornando-o adequado para aplicações de baixo consumo de energia e de Internet das Coisas (IoT).

O Wio-WM1110 possui Bluetooth Low Energy baseado no chip nRF52840.

**Teste com a rotina de Bluetooth**

Há um exemplo 'Bluetooth: Peripheral UART' no SDK. O teste exige que você tenha se conectado ao exemplo e tenha o emulador de terminal conectado aberto.

A demonstração de BLE está localizada em:
`nRF5_SDK_17.1.0_ddde560/examples/ble_peripheral/ble_app_uart/pca10056/s140/ses/`

- [Testando com um dispositivo móvel](https://infocenter.nordicsemi.com/index.jsp?topic=%2Fug_gsg_ses%2FUG%2Fgsg%2Ftest_mobile.html)

- [Testando com um computador](https://infocenter.nordicsemi.com/index.jsp?topic=%2Fug_gsg_ses%2FUG%2Fgsg%2Ftest_desktop.html)

## Sensores Embarcados

### Sensor de Temperatura e Umidade (SHT41)

O SHT41 é um sensor digital de umidade e temperatura, que se comunica com um microcontrolador ou outro dispositivo digital através de uma interface I2C.

O sensor SHT41 é comumente utilizado em uma ampla gama de aplicações, incluindo sistemas HVAC, estações meteorológicas, monitoramento da qualidade do ar interno e controle de processos industriais. Seu tamanho reduzido, baixo consumo de energia e alta precisão o tornam uma escolha popular para muitos tipos diferentes de projetos.

|  | Faixa | Precisão |
| -------- | -------- | -------- |
|Temperatura  | -40~125°C |0.2°C|
| Umidade | 0~100%RH |1.8%RH|

**Código:**

Este exemplo fornece funções para inicializar o sensor, ler valores de temperatura e umidade e definir a unidade de temperatura.

Aqui está um breve resumo das funções definidas neste código:

**SHT41Init**: uma função que inicializa o sensor, redefinindo-o e aguardando 1 ms antes de prosseguir.

**SHT41GetTemperature, SHT41GetHumidity e SHT41GetTempAndHumi**: funções para ler valores de temperatura e/ou umidade do sensor. Essas funções convertem os valores brutos do sensor em um valor float em graus Celsius ou Fahrenheit, dependendo da configuração atual da unidade de temperatura.

**SHT41SetTemperatureUnit e SHT41GetTemperatureUnit**: funções para definir e obter a unidade de temperatura.
crc8: uma função interna que calcula o checksum CRC-8 de um array de bytes.

### Acelerômetro de 3 eixos (LIS3DHTR)

O LIS3DHTR é um sensor de alto desempenho que mede a aceleração em três dimensões e fornece leituras precisas e confiáveis.

O sensor LIS3DHTR se comunica com um microcontrolador ou outro dispositivo digital por meio de uma interface I2C ou SPI. Ele também inclui recursos avançados, como interrupções programáveis e uma ampla variedade de modos de economia de energia para ajudar a minimizar o consumo de energia.

| Faixa | Largura de banda | Sensibilidade (LSB/g) |
| -------- | -------- | -------- |
| ±2g, 4g, 8g, 16g | 0.5Hz ~ 625Hz |1000 (±2g) ~ 83 (±16g)

## Grove

Há 3 interfaces Grove no DK, que podem ser conectadas a mais de 400 módulos Grove e suportam os protocolos de transmissão ADC/UART e IIC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/grove_pins.png" alt="pir" width={600} height="auto" /></p>

### Grove IIC

Há uma porta Grove IIC no DK, com `SDA` no pino 27 e `SCL` no pino 26.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_iic.png" alt="pir" width={300} height="auto" /></p>

Para conectar a um módulo Grove IIC, a alimentação do sensor deve ser ativada: `I2C_PWR` (pino 7). Este pino controla a tensão de pull-up na linha de sinal IIC:

```cpp
#define IIC_POWER          7
```

O TWI precisa ser habilitado no arquivo `sdk_config.h` antes do uso.

```cpp
// <e> TWI_ENABLED - nrf_drv_twi - TWI/TWIM peripheral driver - legacy layer
//==========================================================
#ifndef TWI_ENABLED
#define TWI_ENABLED 1
#endif
// <e> TWI0_ENABLED - Enable TWI0 instance
//==========================================================
#ifndef TWI0_ENABLED
#define TWI0_ENABLED 1
#endif
// <q> TWI0_USE_EASY_DMA  - Use EasyDMA (if present)
#ifndef TWI0_USE_EASY_DMA
#define TWI0_USE_EASY_DMA 1
#endif
// </e>
// <e> TWI1_ENABLED - Enable TWI1 instance
//==========================================================
#ifndef TWI1_ENABLED
#define TWI1_ENABLED 1
#endif
// <q> TWI1_USE_EASY_DMA  - Use EasyDMA (if present)
 #ifndef TWI1_USE_EASY_DMA
#define TWI1_USE_EASY_DMA 1
#endif
```

**Código de exemplo**

Este exemplo lê o valor do [sensor de Temperatura e Umidade SHT41](https://wiki.seeedstudio.com/pt-br/Grove-SHT4x/) através da interface IIC e o imprime no monitor serial.

```cpp
#include "nrf_gpio.h"
#include "nrf_gpiote.h"
#include "nrf_drv_gpiote.h"
#include "nrf_delay.h"
#include "app_error.h"
#include "sht41.h"
#include "nrf_drv_twi.h"

int main(void)
{   
    float   temp = 0;
    float   humi = 0;
    hal_i2c_master_init( );
    hal_gpio_init_out( SENSOR_POWER, HAL_GPIO_SET ); 
    nrf_delay_ms(10);

    SHT41Init();

    while(1){
        SHT41GetTempAndHumi(&temp,&humi);
        nrf_delay_ms(1000);  
        printf("temperature:%.3f humidity:%.3f\n",temp,humi);
    }

}
```

Então você obterá os valores de temperatura e umidade:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/valueSHT41.png" alt="pir" width={500} height="auto" /></p>

### Grove UART

O Wio-WM1110 DK possui dois periféricos UART, `uart0` e `uart1`. Os pinos de `uart0` são conectados ao CH340C para fins de depuração, enquanto `uart1` serve como uma porta Grove UART.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_uart.png" alt="pir" width={300} height="auto" /></p>

De acordo com o esquemático, TXD está localizado no pino 8 e RXD está no pino 6.

```cpp
#define     LED1                      13
#define     LED2                      14
#define     TXD                       8
#define     RXD                       6
#define     UART_TX_RX_BUF_SIZE       256
```

:::tip Note
Exceto para interfaces analógicas como ADC, o chip nRF52840 possui pinos fixos para outros periféricos digitais. No entanto, outros periféricos digitais podem ser remapeados para qualquer pino. Por exemplo, as configurações dos pinos RXD e TXD podem ser trocadas.
:::

O UART precisa ser habilitado no arquivo `sdk_config.h` antes do uso:

```cpp
/ <e> NRFX_UARTE_ENABLED - nrfx_uarte - UARTE peripheral driver
//==========================================================
#ifndef NRFX_UARTE_ENABLED
#define NRFX_UARTE_ENABLED 1
#endif
// <o> NRFX_UARTE0_ENABLED - Enable UARTE0 instance 
#ifndef NRFX_UARTE0_ENABLED
#define NRFX_UARTE0_ENABLED 1
#endif

// <o> NRFX_UARTE1_ENABLED - Enable UARTE1 instance 
#ifndef NRFX_UARTE1_ENABLED
#define NRFX_UARTE1_ENABLED 1
#endif

// <e> UART_ENABLED - nrf_drv_uart - UART/UARTE peripheral driver - legacy layer
//==========================================================
#ifndef UART_ENABLED
#define UART_ENABLED 1
#endif
```

**Código de exemplo**

O código de exemplo a seguir implementa as funções de transmissão e recepção da porta serial com retorno.

```cpp
#include "nrf_gpio.h"
#include "nrf_gpiote.h"
#include "nrf_drv_gpiote.h"
#include "nrf_delay.h"
#include "smtc_hal.h"
#include "app_uart.h"
#include "app_error.h"
#include "nrf_uart.h"
#include "nrf_drv_uart.h"

static void uart_handleEvent( app_uart_evt_t *pEvent );

APP_UART_DEF( uart, 0, UART_TX_RX_BUF_SIZE, uart_handleEvent );

static app_uart_comm_params_t const commParams =
{
    .rx_pin_no    = RXD,
    .tx_pin_no    = TXD,
    .rts_pin_no   = NRF_UART_PSEL_DISCONNECTED,
    .cts_pin_no   = NRF_UART_PSEL_DISCONNECTED,                    
    .flow_control = APP_UART_FLOW_CONTROL_DISABLED,
    .use_parity   = false,
    .baud_rate    = NRF_UART_BAUDRATE_115200
};

void uart_tx( uint8_t* buff, uint16_t len )
{
        for( uint16_t i = 0; i < len; i++ )
        {
            app_uart_put( &uart, buff[i] );
        }
}


int main(void)
{
    uint32_t err_code;
    uart.comm_params = &commParams;
    uint8_t arr[] = "hello world\n";
    nrf_gpio_cfg_output(LED1);
    nrf_gpio_cfg_output(LED2);
    nrf_gpio_pin_clear(LED1);
    nrf_gpio_pin_clear(LED2);
    app_uart_init( &uart, &uart_buffers, APP_IRQ_PRIORITY_LOWEST );


    while( 1 )
    {
        nrf_delay_ms(1000);
        nrf_gpio_pin_toggle(LED2);
        uart_tx(arr,strlen(arr));
    }
}

void uart_handleEvent(app_uart_evt_t * p_event)
{
 uint8_t dat;
    if (p_event->evt_type == APP_UART_COMMUNICATION_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_communication);
    }
    else if (p_event->evt_type == APP_UART_FIFO_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_code);
    }

    else if (p_event->evt_type == APP_UART_DATA_READY)
 {
  app_uart_get(&uart,&dat); 
  app_uart_put(&uart,dat); 
 }
    else if (p_event->evt_type == APP_UART_TX_EMPTY) 
 {
  nrf_gpio_pin_toggle(LED1);
 }
}
```

### Grove ADC

Existem oito periféricos ADC (0~7) no DK, `ADC6` e `ADC7` são usados como a porta Grove ADCT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_adc.png" alt="pir" width={300} height="auto" /></p>

:::tip Nota
Os pinos ADC são fixos e não podem ser remapeados.
:::

Os relacionamentos correspondentes para os pinos ADC são mostrados na tabela abaixo:

|ADC0|ADC1|ADC2|ADC3|ADC4|ADC5|ADC6|ADC7|
|:-------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
|2|3|4|5|28|29|30|31

SAADC precisa ser habilitado no arquivo `sdk_config.h` antes do uso:

```cpp
// <e> SAADC_ENABLED - nrf_drv_saadc - SAADC peripheral driver - legacy layer
//==========================================================
#ifndef SAADC_ENABLED
#define SAADC_ENABLED 1
#endif
// <e> NRFX_SAADC_ENABLED - nrfx_saadc - SAADC peripheral driver
//==========================================================
#ifndef NRFX_SAADC_ENABLED
#define NRFX_SAADC_ENABLED 1
#endif
// <o> SAADC_CONFIG_RESOLUTION  - Resolution

// <0=> 8 bit 
// <1=> 10 bit 
// <2=> 12 bit 
// <3=> 14 bit 

#ifndef SAADC_CONFIG_RESOLUTION
#define SAADC_CONFIG_RESOLUTION 2
#endif
```

**Código de exemplo**

Este é um programa de exemplo para o ADC6, que implementa a função de ler o valor de entrada analógica de um único canal do pino ADC6 e de enviar o valor medido do ADC pela UART:

```cpp
#include "nrf_gpio.h"
#include "nrf_gpiote.h"
#include "nrf_drv_gpiote.h"
#include "nrf_delay.h"
#include "app_uart.h"
#include "app_error.h"
#include "nrf_uart.h"
#include "nrf_drv_uart.h"
#include "nrf_drv_saadc.h"
#define     LED1                     13
#define     LED2                     14
#define     TXD                       8
#define     RXD                       6
#define     UART_TX_RX_BUF_SIZE       256

static void uart_handleEvent( app_uart_evt_t *pEvent );

APP_UART_DEF( uart, 0, UART_TX_RX_BUF_SIZE, uart_handleEvent );

static app_uart_comm_params_t const commParams =
{
    .rx_pin_no    = RXD,
    .tx_pin_no    = TXD,
    .rts_pin_no   = NRF_UART_PSEL_DISCONNECTED,
    .cts_pin_no   = NRF_UART_PSEL_DISCONNECTED,                    
    .flow_control = APP_UART_FLOW_CONTROL_DISABLED,
    .use_parity   = false,
    .baud_rate    = NRF_UART_BAUDRATE_115200
};

void uart_tx( uint8_t* buff, uint16_t len )
{
        for( uint16_t i = 0; i < len; i++ )
        {
            app_uart_put( &uart, buff[i] );
        }
}

void ADC_Interrupt(nrfx_saadc_evt_t const *p_event){

}

void uart_handleEvent(app_uart_evt_t * p_event)
{
 uint8_t dat;
    if (p_event->evt_type == APP_UART_COMMUNICATION_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_communication);
    }
    else if (p_event->evt_type == APP_UART_FIFO_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_code);
    }

    else if (p_event->evt_type == APP_UART_DATA_READY)
 {
  app_uart_get(&uart,&dat); 
  //app_uart_put(&uart,dat); 
 }
    else if (p_event->evt_type == APP_UART_TX_EMPTY) 
 {
  //nrf_gpio_pin_toggle(LED1);
 }
}

int main(void)
{
    nrf_saadc_value_t  saadc_val = 0; 
    uint8_t arr[32];
    nrf_saadc_channel_config_t channel_config = 
    {                                                   
        .resistor_p = NRF_SAADC_RESISTOR_DISABLED,      
        .resistor_n = NRF_SAADC_RESISTOR_DISABLED,      
        .gain       = NRF_SAADC_GAIN1_6,                
        .reference  = NRF_SAADC_REFERENCE_INTERNAL,     
        .acq_time   = NRF_SAADC_ACQTIME_10US,           
        .mode       = NRF_SAADC_MODE_SINGLE_ENDED,      
        .burst      = NRF_SAADC_BURST_DISABLED,         
        .pin_p      = NRF_SAADC_INPUT_AIN6,       
        .pin_n      = NRF_SAADC_INPUT_DISABLED          
    };

    nrf_drv_saadc_init(NULL, ADC_Interrupt);
    nrf_drv_saadc_channel_init(0, &channel_config);

    uart.comm_params = &commParams;
    app_uart_init( &uart, &uart_buffers, APP_IRQ_PRIORITY_LOWEST );

    nrf_gpio_cfg_output(LED2);
    while( 1 )
    {
        nrf_drv_saadc_sample_convert (0,&saadc_val);
        sprintf(arr,"value:%d\n",saadc_val);
        uart_tx(arr,strlen(arr));
        nrf_delay_ms(1000);
        nrf_gpio_pin_toggle(LED2);
    }
}

```

## Recursos

[Seeed_Wio_WM1110_Dev_Board](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board)

[nRF5-SDK](https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs)

## Suporte Técnico

**Precisa de ajuda com o seu Wio-WM1110 Dev Kit? Estamos aqui para ajudar você!**

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>
