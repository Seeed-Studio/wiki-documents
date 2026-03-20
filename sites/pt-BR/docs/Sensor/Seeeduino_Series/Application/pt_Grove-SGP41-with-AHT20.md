---
description: Este artigo foca no uso do sensor Grove SGP41.
title: Correção para medição SGP41(raw) dependente de umidade e temperatura
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove-sgp41-with-aht20
last_update:
  date: 10/16/2023
  author: Hans Bausewein
createdAt: '2023-10-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/grove-sgp41-with-aht20/
---

# Correção para medição SGP41(raw) dependente de umidade e temperatura

## Visão geral (Como comecei com este projeto)

Primeiro eu li a documentação do [Grove - Smart Air Quality Sensor (SGP41)](https://wiki.seeedstudio.com/pt-br/grove-smart-air-quality-sensor-sgp41) e do [Grove - AHT20 I2C Industrial Grade Temperature&Humidity Sensor](https://wiki.seeedstudio.com/pt-br/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor/).

De acordo com a seção 3.2 (Raw Signal Measurement) do [SGP41 Datasheet (PDF)](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf), a medição do SGP41 é dependente da umidade e da temperatura, então precisamos aplicar uma correção para obter dados consistentes: ler a umidade relativa e a temperatura do AHT20 (ou outro sensor), calcular os ticks e passá-los para a função *sgp41_measure_raw_signals*.

### Teste teórico

A Tabela 11 (Descrição do comando de medição I2C) na página 15 descreve as fórmulas para calcular os ticks:

```
RHticks = RH% × 65535 / 100
Tticks = (T°C + 45) × 65535 / 175
```

Verifique usando os valores padrão de 25°C e 50% de umidade relativa:

```
50 × 65535 / 100 = 32767.5 = 0x8000 (hexadecimal, rounded up)
(25 + 45) × 65535 / 175 = 26214 = 0x6666 (hexadecimal) 
```

Os resultados correspondem às constantes usadas no programa utilizado por [Grove - Smart Air Quality Sensor (SGP41)](https://wiki.seeedstudio.com/pt-br/grove-smart-air-quality-sensor-sgp41) e definidas na Tabela 11 do [SGP41 Datasheet (PDF)](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf).

O mesmo em C:

```cpp
        int h_ticks = humi * 0xFFFF;
        int t_ticks = (temp + 45) * 0xFFFF / 175;
```

Observe que 'humi' no programa é um valor entre 0 e 1, portanto a divisão por 100 e a multiplicação anterior foram removidas.

## Preparação de hardware

Estou usando o Seeeduino Nano como placa de controle e usando Grove - Smart Air Quality Sensor (SGP41) e Grove - AHT20 I2C Industrial Grade Temperature&Humidity Sensor para realizar isso.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeeduino Nano</th>
   <th>Grove - AHT20 Temperature&amp;Humidity Sensor</th>
            <th>Grove - Smart Air Quality Sensor (SGP41)</th>
   <th>Grove - Branch Cable</th>
  </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/seeeduino-Nano-wiki.jpg" style={{width:185, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/101990644_4_.png" style={{width:185, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/1.jpg" style={{width:185, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/Grove-Branch_Cable-5PCs_pack-.jpg" style={{width:185, height:'auto'}}/></div></td>
        </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"3"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"3"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"3"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Branch-Cable-5PCs-pack.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"3"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Preparação de software

<div class="table-center">
  <table align="center">
    <tr>
        <th>Arduino IDE</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.arduino.cc/en/software" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

Há várias bibliotecas que são necessárias e serão apresentadas no próximo passo.

## Primeiros passos

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### 1. Conectar com o Arduino Nano

:::note
Por favor, conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use um cabo USB com 4 fios internos, o cabo com 2 fios não consegue transferir dados. Se você não tem certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - Branch Cable à porta **I2C** do Seeeduino Nano.

- **Passo 2.** Conecte o Grove - Branch Cable ao módulo de sensor Grove AHT20 I2C.

- **Passo 3.** Conecte o Grove - Branch Cable ao módulo de sensor Grove SGP41 I2C.

- **Passo 4.** Conecte o Seeeduino a um PC via cabo USB.

![Seeeduino_SGP41_AHT20](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/seeeduino_nano-SGP41-correction/1.jpg)

### 2. Baixar as bibliotecas necessárias e adicioná-las ao Arduino

- **Passo 1.** Baixe as bibliotecas de dependência do GitHub.

  - **arduino-core Library**:

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Sensirion/arduino-core" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

  - **arduino-i2c-sgp41 Library**:

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Sensirion/arduino-i2c-sgp41" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

  - **Seeed_Arduino_AHT20** Library:

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_AHT20" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para o Arduino.

- **Passo 3.** Depois de baixar e instalar as bibliotecas corretamente, você pode enviar o código abaixo, que é uma combinação dos softwares [SGP41](https://wiki.seeedstudio.com/pt-br/grove-smart-air-quality-sensor-sgp41#software) e [AHT20](https://wiki.seeedstudio.com/pt-br/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor//#software-code) com as fórmulas descritas na introdução adicionadas.

### 3. Faça o upload do código e verifique o resultado

- **Passo 1.** Faça o upload da demonstração. Se você não souber como enviar o código, consulte [Como enviar código](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```cpp
// ARDUINO DEMO FOR GROVE-AHT20+SGP41
//
#include <Wire.h>
#include "AHT20.h"
#include <Arduino.h>
#include <SensirionI2CSgp41.h>

SensirionI2CSgp41 sgp41;

// time in seconds needed for NOx conditioning
uint16_t conditioning_s = 10;

AHT20 AHT;

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
    AHT.begin();
}

uint16_t read_sgp41(uint16_t rh, uint16_t t) {
    uint16_t error;
    char errorMessage[256];
    uint16_t srawVoc = 0;
    uint16_t srawNox = 0;

    delay(1000);

    if (conditioning_s > 0) {
        // During NOx conditioning (10s) SRAW NOx will remain 0
        error = sgp41.executeConditioning(rh, t, srawVoc);
        conditioning_s--;
    } else {
        // Read Measurement
        error = sgp41.measureRawSignals(rh, t, srawVoc, srawNox);
    }

    if (error) {
        Serial.print("Error trying to execute measureRawSignals(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("RH ticks: ");
        Serial.print(rh);
        Serial.print("\t");
        Serial.print("T ticks: ");
        Serial.print(t);
        Serial.print("\t");
        Serial.print("SRAW_VOC: ");
        Serial.print(srawVoc);
        Serial.print("\t");
        Serial.print("SRAW_NOx: ");
        Serial.println(srawNox);
    }
    return error;
}

void loop()
{
    float humi, temp;

    int ret = AHT.getSensor(&humi, &temp);

    if(ret)     // GET DATA OK
    {
        Serial.print("humidity: ");
        Serial.print(humi*100);
        Serial.print("%\t temperature: ");
        Serial.print(temp);
        Serial.print("\t");
        // T-ticks = (T/°C + 45) × 65535 / 175
        // H-ticks = RH/% × 65535 / 100
        int h_ticks = humi * 0xFFFF;
        int t_ticks = (temp + 45) * 0xFFFF / 175;
        read_sgp41(h_ticks, t_ticks);
    }
    else        // GET DATA FAIL
    {
        Serial.println("GET DATA FROM AHT20 FAIL");
    }

    delay(100);
}

// END FILE
```

- **Passo 2.** Abra o **Monitor Serial** da Arduino IDE clicando em **Tool-> Serial Monitor**.

![Saída do Console Serial](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/seeeduino_nano-SGP41-correction/2.jpg)

Observe que os primeiros dez valores de SRAW_NOx são zero devido ao condicionamento.

## Recursos

- [SGP41](https://wiki.seeedstudio.com/pt-br/grove-smart-air-quality-sensor-sgp41#resources)
- [AHT20](https://wiki.seeedstudio.com/pt-br/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor/#resources)

## ✨ Projeto de Colaborador

- Este projeto é apoiado pelo [Projeto de Colaborador](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) da Seeed Studio.
- Agradecimentos aos [esforços do Hans](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35179519) e o seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/Honorary-Contributors/).

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
