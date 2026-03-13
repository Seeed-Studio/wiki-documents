---
description: Este artigo se concentra no uso do sensor Grove SGP41.
title: Grove - Sensor Inteligente de Qualidade do Ar (SGP41)
keywords:
  - SGP41
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove-smart-air-quality-sensor-sgp41
sku: 101021092
last_update:
  date: 5/11/2023
  author: Stephen Lo
createdAt: '2023-05-11'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/grove-smart-air-quality-sensor-sgp41/
---

# Grove - Sensor Inteligente de Qualidade do Ar (SGP41)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/1.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br />

O Grove - Sensor Inteligente de Qualidade do Ar (SGP41) é um módulo de sensor de gás digital da série Grove. Ele possui uma interface Grove de 4 pinos que permite aos usuários conectar facilmente o sensor a um microcontrolador. O módulo suporta alimentação de 3,3 V e 5 V, tornando-o flexível.

O sensor de gás digital SGP41 usa a tecnologia CMOSens® da Sensirion, que oferece um sistema de sensor completo e fácil de usar em um único chip. Ele pode medir a concentração de compostos orgânicos voláteis (VOCs) e óxidos de nitrogênio (NOx) no ar interior e fornece sinais de saída digitais. Além disso, este sensor tem excelente estabilidade e vida útil em longo prazo.

O módulo Grove - Sensor Inteligente de Qualidade do Ar (SGP41) é compacto e adequado para aplicações com espaço limitado. Ele também possui alta confiabilidade e reprodutibilidade. Se você precisa medir a qualidade do ar interior, considere usar nosso módulo Grove - Sensor de Qualidade do Ar (SGP41)!

:::tip

Lançamos o [Guia de Seleção de Sensores de Gás da Seeed](https://wiki.seeedstudio.com/pt-br/Seeed_Gas_Sensor_Selection_Guide/), que ajudará você a escolher o sensor de gás que melhor se adapta às suas necessidades.

:::

## Recursos

- Sensor de gás digital: o SGP41 é um sensor de gás digital que pode medir a concentração de compostos orgânicos voláteis (VOCs) e óxidos de nitrogênio (NOx) no ar interior.
- Tecnologia CMOSens®: o SGP41 usa a tecnologia CMOSens® da Sensirion, que oferece um sistema de sensor completo e fácil de usar em um único chip.
- Estabilidade em longo prazo: o SGP41 possui excelente estabilidade e vida útil em longo prazo, tornando-o ideal para aplicações que exigem monitoramento contínuo da qualidade do ar interior.
- Sinais de saída digitais: o SGP41 fornece sinais de saída digitais, o que facilita a integração com microcontroladores e outros sistemas digitais.
- Fator de forma reduzido: o SGP41 é muito compacto e adequado para aplicações com espaço limitado. Ele possui uma interface Grove de 4 pinos que permite aos usuários conectar facilmente o sensor a um microcontrolador.
- Alimentação flexível: o módulo suporta alimentação de 3,3 V e 5 V, tornando-o muito flexível e fácil de usar em diferentes aplicações.
- Alta confiabilidade e reprodutibilidade: o processo de produção de ponta da Sensirion garante alta reprodutibilidade e confiabilidade do módulo SGP41.

## Especificação

- Tecnologia de detecção: sensor de gás baseado em MOx para aplicações de qualidade do ar
- Detecção de gás: medições de VOC e NOx
- Interface: interface I2C com sinais de saída digitais
- Consumo de energia: baixo consumo de energia de 3,0 mA a 3,3 V
- Faixa de temperatura de operação: -40°C a +85°C
- Faixa de umidade: 0% a 100% UR (não condensante)
- Tempo de resposta: &lt;10 segundos para VOCs e &lt;60 segundos para NOx
- Precisão: ±15% para VOCs e ±50 ppb para NOx (em condições padrão)

## Aplicações

- Monitoramento da qualidade do ar interior: o SGP41 é ideal para monitorar a qualidade do ar interior em casas, escritórios, escolas e outros ambientes internos.
- Purificadores de ar: o SGP41 pode ser integrado em purificadores de ar para detectar e remover gases nocivos do ar.
- Sistemas de ventilação controlados por demanda: o SGP41 pode ser usado em sistemas de ventilação controlados por demanda para ajustar a taxa de ventilação com base no nível de poluentes no ar.
- Casas inteligentes: o SGP41 pode ser integrado em sistemas de casa inteligente para fornecer informações em tempo real sobre a qualidade do ar interior e acionar ações com base nessas informações.
- Aplicações industriais: o SGP41 pode ser usado em aplicações industriais, como plantas químicas, refinarias e instalações de manufatura, para monitorar a qualidade do ar interior e garantir a segurança dos trabalhadores.
- Monitoramento ambiental: o SGP41 pode ser usado para monitoramento ambiental de emissões de VOCs e NOx de fábricas, veículos e outras fontes.

## Visão Geral de Hardware

### Mapa de Pinos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/sgp41_hw.png" alt="pir" width={600} height="auto" /></p>

## Primeiros Passos

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brinque com Arduino

#### Materiais necessários

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeeduino V4.3</th>
   <th>Grove Base Shield V2.0</th>
            <th>Grove - Sensor Inteligente de Qualidade do Ar (SGP41)</th>
  </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/1.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::note
**1**. Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Utilize o cabo USB com 4 fios internos; o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2**. Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - Sensor Inteligente de Qualidade do Ar (SGP41) à porta **I2C** do Grove Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/3.jpg" alt="pir" width={600} height="auto" /></p>

:::note
Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove - Sensor Inteligente de Qualidade do Ar (SGP41) ao Seeeduino como abaixo.
:::

| Seeeduino     | Grove-VOC and eCO2 Gas Sensor(SGP30) |
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| SDA           | Branco                  |
| SCL           | Amarelo                 |

#### Software

- **Passo 1.** Baixe as bibliotecas de dependência do Github.

  - **arduino-core Library**:

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Sensirion/arduino-core" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

  - **arduino-i2c-sgp41 Library**:

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Sensirion/arduino-i2c-sgp41" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Baixar as Bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Após baixar e instalar a biblioteca corretamente, você pode encontrar um programa de exemplo chamado `exampleUsage.ino` na pasta de exemplos. Este programa é projetado para o sensor SGP41.

```cpp
#include <Arduino.h>
#include <SensirionI2CSgp41.h>
#include <Wire.h>

SensirionI2CSgp41 sgp41;

// time in seconds needed for NOx conditioning
uint16_t conditioning_s = 10;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sgp41.begin(Wire);

    uint16_t serialNumber[3];
    uint8_t serialNumberSize = 3;

    error = sgp41.getSerialNumber(serialNumber, serialNumberSize);

    if (error) {
        Serial.print("Error trying to execute getSerialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("SerialNumber:");
        Serial.print("0x");
        for (size_t i = 0; i < serialNumberSize; i++) {
            uint16_t value = serialNumber[i];
            Serial.print(value < 4096 ? "0" : "");
            Serial.print(value < 256 ? "0" : "");
            Serial.print(value < 16 ? "0" : "");
            Serial.print(value, HEX);
        }
        Serial.println();
    }

    uint16_t testResult;
    error = sgp41.executeSelfTest(testResult);
    if (error) {
        Serial.print("Error trying to execute executeSelfTest(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else if (testResult != 0xD400) {
        Serial.print("executeSelfTest failed with error: ");
        Serial.println(testResult);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];
    uint16_t defaultRh = 0x8000;
    uint16_t defaultT = 0x6666;
    uint16_t srawVoc = 0;
    uint16_t srawNox = 0;

    delay(1000);

    if (conditioning_s > 0) {
        // During NOx conditioning (10s) SRAW NOx will remain 0
        error = sgp41.executeConditioning(defaultRh, defaultT, srawVoc);
        conditioning_s--;
    } else {
        // Read Measurement
        error = sgp41.measureRawSignals(defaultRh, defaultT, srawVoc, srawNox);
    }

    if (error) {
        Serial.print("Error trying to execute measureRawSignals(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("SRAW_VOC:");
        Serial.print(srawVoc);
        Serial.print("\t");
        Serial.print("SRAW_NOx:");
        Serial.println(srawNox);
    }
}
```

- **Passo 4.** Envie o código de demonstração.

- **Passo 5.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/2.png" style={{width:700, height:'auto'}}/></div>

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-SGP41/AIR_QUALITY_SENSOR(SGP41)_sch&pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Grove - Smart Air Quality Sensor (SGP41) SCH&PCB](https://files.seeedstudio.com/wiki/Grove-SGP41/AIR_QUALITY_SENSOR(SGP41)_sch&pcb.zip)
- **[PDF]** [SGP41 Datasheet](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf)

## Suporte Técnico & Discussão do Produto

.

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
