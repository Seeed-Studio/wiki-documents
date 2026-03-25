---
description: Grove - Sensor de formaldeído
title: Grove - Sensor de formaldeído
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/GroveFormaldehydehardware.jpg
slug: /Grove-Formaldehyde-Sensor
sku: 101020972
last_update:
  date: 3/7/2024
  author: Spencer Yan
createdAt: '2023-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Formaldehyde-Sensor/
---
<!-- ---
name: Grove - Formaldehyde sensor
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html
oldwikiname: Grove - PIR Motion Sensor
prodimagename: Breakout_for_LinkIt_Smart_7688_v2.0_product_view_700.jpg
surveyurl: https://www.surveymonkey.com/r/grove-pir-motion-sensor
sku: 101020972
tags: io_3v3, io_5v, plat_duino, plat_pi
--- -->

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/101020972_Front-05.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>
<br />

O Grove Formaldehyde Sensor pode detectar formaldeído na faixa de 0~1000 ppb com baixa sensibilidade cruzada a álcool e alta estabilidade com vida útil de 6 anos. O sensor RHT integrado garante que ele mantenha um desempenho preciso em diferentes temperaturas e umidades e transmite dados por meio das portas UART e I2C.

## Recursos

- Baixa sensibilidade cruzada a álcool
- Faixa padrão de medição de formaldeído: 0 ~ 1000 ppb
- Estabilidade de longo prazo e vida útil de serviço de 6 anos
- Célula eletroquímica patenteada com tecnologia anti-ressecamento
- Interface I2C/UART com saída calibrada para toda a vida útil
- Mantém o desempenho em diferentes temperaturas e umidades: compensado via sensor Sensirion RHT

## Especificação

|Parâmetro|Valor/Faixa
|---|---|
|Faixa de tensão de alimentação|3,3V ou 5V
|Faixa de medição|0 a 1.000 ppb
|Tempo de resposta|&lt;2 min
|Limite de detecção|&lt;20 ppb
|Interface|I2C / UART
|Precisão do formaldeído|±20 ppb ou ±20% do valor medido, o que for maior

## Plataformas Suportadas

| Arduino| Raspberry |   |   |   |
|:------:|:---------:|---|---|---|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as plataformas de MCU possíveis. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### **Hardware**

- **Passo 1.** Prepare os seguintes itens:

| Seeeduino V4.2 | Base Shield|  Grove-Formaldehyde Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/GroveFormaldehydehardware.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|   [Adquira agora](https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html)    |

- **Passo 2.** Coloque o botão no Grove-Formaldehyde Sensor na posição **"1"**.

![](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/hardware1.png)

- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino e conecte o Grove-Formaldehyde Sensor à porta **I²C** do Grove-Base Shield
- **Passo 4.** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/Arduous-link.jpg)

:::note
Se você não tiver o Grove Base Shield, ainda é possível conectar diretamente o Grove-Formaldehyde Sensor ao Seeeduino como abaixo.
:::

| Seeeduino |  Grove-Loudness Sensor |
|-----------|-----------------|
| 5V        | Red             |
| GND       | Black           |
| SDA       | White           |
| SCL       | Yellow          |

#### **Software**

- **Passo 1.** Baixe a [Grove-Formaldehyde Sensor Library](https://github.com/Sensirion/arduino-i2c-sfa3x) para uso com o Grove Formaldehyde Sensor e [instale](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/) ela.

- **Passo 2.** Abra a IDE do Arduino. Copie os códigos abaixo para a IDE do Arduino e faça o upload. Se você não souber como fazer o upload dos códigos, aqui temos alguns guias sobre [como fazer upload de código](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

:::tip
Você também pode baixar a biblioteca diretamente procurando por **Sensirion I2C SFA3X** no gerenciador de bibliotecas.
:::

```cpp
#include <Arduino.h>
#include <SensirionI2CSfa3x.h>
#include <Wire.h>

SensirionI2CSfa3x sfa3x;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sfa3x.begin(Wire);

    // Start Measurement
    error = sfa3x.startContinuousMeasurement();
    if (error) {
        Serial.print("Error trying to execute startContinuousMeasurement(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);
    int16_t hcho;
    int16_t humidity;
    int16_t temperature;
    error = sfa3x.readMeasuredValues(hcho, humidity, temperature);
    if (error) {
        Serial.print("Error trying to execute readMeasuredValues(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Hcho:");
        Serial.print(hcho / 5.0);
        Serial.print("\t");
        Serial.print("Humidity:");
        Serial.print(humidity / 100.0);
        Serial.print("\t");
        Serial.print("Temperature:");
        Serial.println(temperature / 200.0);
    }
}
```

- **Passo 4.** Neste programa, o Seeeduino pode monitorar em tempo real a concentração de gás formaldeído, a umidade do ar e os dados de temperatura. Ao abrir o 'Serial Monitor', os resultados devem ser semelhantes a:

![](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/test.png)

### Brincar com Raspberry Pi

#### **Hardware**

- **Passo 1.** Prepare os seguintes itens:

| Raspberry pi | Grove Base Hat for Raspberry Pi | Grove-Formaldehyde Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/GroveFormaldehydehardware.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html)|

- **Passo 2.** Conecte o Grove Base Hat for Raspberry Pi ao Raspberry Pi.
- **Passo 3.** Conecte o Grove-Dust Sensor à porta **I²C** do Grove Base Hat for Raspberry Pi.
- **Passo 4.** Conecte o Raspberry Pi ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/raspberry-link.jpg)

#### **Software**

- **Passo 1.** Siga [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar o ambiente de desenvolvimento do Resberry Pi.
- **Passo 2.** Baixe a [Grove-Formaldehyde Sensor Library](https://github.com/Sensirion/raspberry-pi-i2c-sfa3x/archive/refs/heads/master.zip) e descompacte-a no Raspberry Pi.

- **Passo 3.** Navegue até o diretório de demonstrações. O comando a seguir pode monitorar a concentração de formaldeído, a umidade e a temperatura.

```python
cd ~/raspberry-pi-i2c-sfa3x-master
make
./sfa3x_i2c_example_usage
```

:::tip
Neste wiki usamos o caminho **~/embedded-sfa3x-main/i2c** em vez de **/home/pi/Desktop/embedded-sfa3x-main/i2c**, você precisa garantir que o Passo 2 e o Passo 3 usem o mesmo caminho.
:::

Aqui está o código **sfa3x_i2c_example_usage.c**.

```cpp
#include <stdio.h>  // printf

#include "sensirion_common.h"
#include "sensirion_i2c_hal.h"
#include "sfa3x_i2c.h"

/**
 * TO USE CONSOLE OUTPUT (PRINTF) IF NOT PRESENT ON YOUR PLATFORM
 */
//#define printf(...)

int main(void) {
    int16_t error = 0;

    sensirion_i2c_hal_init();

    error = sfa3x_device_reset();
    if (error) {
        printf("Error resetting device: %i\n", error);
        return -1;
    }

    uint8_t device_marking[42];
    error = sfa3x_get_device_marking(&device_marking[0], sizeof(device_marking));
    if (error) {
        printf("Error getting device marking: %i\n", error);
        return -1;
    }
    printf("Device marking: %s\n", device_marking);

    // Start Measurement
    error = sfa3x_start_continuous_measurement();
    if (error) {
        printf("Error executing sfa3x_start_continuous_measurement(): %i\n",
               error);
    }

    for (;;) {
        // Read Measurement

        int16_t hcho;
        int16_t humidity;
        int16_t temperature;

        sensirion_i2c_hal_sleep_usec(500000);

        error = sfa3x_read_measured_values(&hcho, &humidity, &temperature);

        if (error) {
            printf("Error executing sfa3x_read_measured_values(): %i\n", error);
        } else {
            printf("Measurement:\n");
            printf("  Formaldehyde concentration: %.1f\n", hcho / 5.0f);
            printf("  Relative humidity: %.2f\n", humidity / 100.0f);
            printf("  Temperature: %.2f\n", temperature / 200.0f);
        }
    }

    error = sfa3x_stop_measurement();
    if (error) {
        printf("Error executing sfa3x_stop_measurement(): %i\n", error);
    }

    return 0;
}

```

:::tip
Se tudo correr bem, os seguintes resultados podem ser exibidos como:
:::

```shell
pi@raspberrypi:~/Downloads/embedded-sfa3x-main/i2c $ ./sfa3x_i2c_example_usage
Device marking: 211117825F073B80
Measurement:
  Formaldehyde concentration: 0.0
  Relative humidity: 70.19
  Temperature: 27.41
```

Você pode sair deste programa simplesmente pressionando ++ctrl+c++.

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o poderoso suporte do aplicativo tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor opção para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x no seu próximo projeto industrial bem-sucedido.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
