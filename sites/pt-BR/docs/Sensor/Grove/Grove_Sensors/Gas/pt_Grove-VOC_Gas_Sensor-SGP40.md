---
description: A ser definido
title: Grove - Sensor de Gás VOC (SGP40)
keywords:
  - Grove
  - SGP40
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_voc_gas_sensor_sgp40
last_update:
  date: 6/6/2023
  author: Stephen Lo
createdAt: '2023-06-06'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/grove_voc_gas_sensor_sgp40/
---

# Grove - Sensor de Gás VOC (SGP40)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_SGP40/main.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP40-p-5700.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

<br />

O Grove - Sensor de Gás VOC (SGP40) é um módulo inovador de detecção ambiental desenvolvido para uma ampla gama de aplicações de detecção de Compostos Orgânicos Voláteis (VOC). Baseado no avançado sensor Sensirion SGP40, ele se destaca por transformar sinais brutos do sensor em sinais digitais padronizados para integração perfeita em sistemas existentes.

Com sua capacidade de realizar medições de VOC em tempo real com alta qualidade, este módulo de sensor oferece uma solução versátil para rastrear e monitorar a qualidade do ar interno. Dada a crescente conscientização e necessidade de monitorar a qualidade do ar devido à sua correlação direta com a saúde, o Grove - Sensor de Gás VOC (SGP40) pode ser um componente essencial de sistemas voltados à melhoria da qualidade do ar interno, monitoramento do ambiente pessoal, sistemas HVAC, segurança industrial e qualquer aplicação em que a avaliação da qualidade do ar seja fundamental.

Sua compatibilidade com o ecossistema Grove facilita um processo de configuração fácil e direto. A natureza plug-and-play do sistema Grove permite que desenvolvedores incorporem este módulo sem precisar lidar com fiação complicada ou codificação intrincada. Esse recurso pode acelerar significativamente o tempo de desenvolvimento e permite que os usuários se concentrem mais na interpretação dos dados e nas ações com base nas medições de VOC.

Uma das principais vantagens do Grove - Sensor de Gás VOC (SGP40) é seu protocolo de comunicação. O módulo do sensor usa a interface I2C, um protocolo amplamente adotado conhecido por sua simplicidade e eficiência. Isso torna o processo de transferência de dados entre o sensor e o seu controlador principal extremamente suave, permitindo tempos de reação rápidos para aplicações em que ações imediatas com base nos níveis de VOC são cruciais.

Em suma, o Grove - Sensor de Gás VOC (SGP40) é um módulo compacto, poderoso e fácil de integrar que torna a tarefa desafiadora de detecção de VOC mais simples e acessível, abrindo portas para inovações e desenvolvimentos em aplicações ambientais.


## Recursos

- Utiliza o sensor Sensirion SGP40 para detecção confiável de VOC.
- Fácil integração ao ecossistema Grove, simplificando o processo de fiação e codificação.
- Fornece medições de VOC em tempo real para avaliação precisa da qualidade do ar.
- Se comunica via interface I2C, permitindo transferência eficiente de dados.
- Design compacto e modular, perfeito para ser incorporado em várias aplicações.

## Especificação

- Tensão de operação: 3,3/5 V
- Interface: I2C
- Dimensões: 20 x 40 mm

## Aplicações

- Sistema de monitoramento da qualidade do ar interno: o Grove - Sensor de Gás VOC pode ser usado em edifícios para monitorar a qualidade do ar e garantir um ambiente saudável para viver ou trabalhar.
- Dispositivo de monitoramento de ambiente pessoal: o sensor pode ser usado para criar um dispositivo portátil que permita às pessoas monitorar a qualidade do ar em seu ambiente imediato.
- Sistemas HVAC: o sensor pode ajudar a regular a qualidade do ar em sistemas de aquecimento, ventilação e ar-condicionado.
- Segurança industrial: pode ser usado em fábricas e locais industriais para garantir a segurança dos trabalhadores, detectando níveis nocivos de VOC.

## Visão geral de hardware

### Mapa de pinos


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_SGP40/pinmap.png" alt="pir" width={500} height="auto" /></p>


## Primeiros passos

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield| Grove - Sensor de Gás VOC (SGP40) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_SGP40/main.jpg" alt="pir" width={250} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira Agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira Agora</a>|<a href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP40-p-5700.html" target="_blank">Adquira Agora</a>|

:::note
**1.** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos; o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2.** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - Sensor de Gás VOC (SGP40) à porta **I2C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/3.jpg" alt="pir" width={600} height="auto" /></p>


:::note
Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove - Smart Air Quality Sensor (SGP41) ao Seeeduino como abaixo.
:::

| Seeeduino     | Grove - Sensor de Gás VOC (SGP40) |
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| SDA           | Branco                  |
| SCL           | Amarelo                 |

#### Software

- **Passo 1.** Baixe a [SGP40 Arduino Library](https://github.com/Sensirion/arduino-i2c-sgp40) do GitHub.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para o Arduino.

- **Passo 3.** Depois de baixar e instalar a biblioteca corretamente, você pode encontrar um programa de exemplo chamado `exampleUsage.ino` na pasta de exemplos. Este programa é projetado para o sensor SGP40.

```cpp
#include <Arduino.h>
#include <SensirionI2CSgp40.h>
#include <Wire.h>

SensirionI2CSgp40 sgp40;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sgp40.begin(Wire);

    uint16_t serialNumber[3];
    uint8_t serialNumberSize = 3;

    error = sgp40.getSerialNumber(serialNumber, serialNumberSize);

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
    error = sgp40.executeSelfTest(testResult);
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

    delay(1000);

    error = sgp40.measureRawSignal(defaultRh, defaultT, srawVoc);
    if (error) {
        Serial.print("Error trying to execute measureRawSignal(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("SRAW_VOC:");
        Serial.println(srawVoc);
    }
}
```

- **Passo 4.** Envie o demo. Se você não souber como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Se tudo correr bem, você obterá o resultado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_SGP40/result.png" alt="pir" width={800} height="auto" /></p>

## Visualizador online do esquema

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_SGP40/Grove-VOC_Gas_Sensor(SGP40).rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Grove - VOC Gas Sensor (SGP40) SCH&PCB](https://files.seeedstudio.com/wiki/Grove_SGP40/Grove-VOC_Gas_Sensor(SGP40).zip)
- **[PDF]** [SGP40 Datasheet](https://files.seeedstudio.com/wiki/Grove_SGP40/Sensirion_Gas_Sensors_Datasheet_SGP40.pdf)


## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



