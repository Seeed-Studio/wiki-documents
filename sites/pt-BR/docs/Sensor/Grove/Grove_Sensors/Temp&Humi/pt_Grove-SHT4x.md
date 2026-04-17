---
description: Grove - Sensor de Temperatura e Umidade (SHT4x)
title: Grove - Sensor de Temperatura e Umidade (SHT4x)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-SHT4x
sku: 101021033,101021032
last_update:
  date: 1/4/2022
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-SHT4x/
---


# Grove - Temperature & Humidity Sensor

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SHT4x/SHT4x.jpeg" /></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/grove-temp-humi-sensor-sht40-p-5384.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p>

## Introdução

Este sensor digital Grove SHT40 é baseado nos sensores de umidade e temperatura da Sensirion, já amplamente utilizados na indústria. Ele pode fornecer precisão constante de temperatura e umidade em uma ampla faixa de medição e, com a plataforma Grove, você está pronto para conectar e usar o sensor SHT4x em qualquer microcontrolador (Arduino) ou microprocessador (Raspberry Pi).

## Visão Geral de Hardware

Antes de tudo começar, é bastante essencial ter alguns parâmetros básicos do produto. A tabela a seguir fornece informações sobre as características do Grove - Temperature & Humidity Sensor.

<table border="0">
<tbody>
<tr>
<td><strong>Parâmetro       </strong></td>
<td><strong>Classificação</strong></td>
</tr>
<tr>
<td>Taxa de precisão de temperatura</td>
<td>±0.2 ℃</td>
</tr>
<tr>
<td>Taxa de precisão de umidade </td>
<td>±1.8% RH</td>
</tr>
<tr>
<td>Faixa de temperatura de operação  </td>
<td>-40°C a 125°C</td>
</tr>
<tr>
<td>Faixa de umidade de operação       </td>
<td>0% a 100% RH</td>
</tr>
<tr>
<td>Alimentação Grove            </td>
<td>5/3.3 V</td>
</tr>
<tr>
<td>Protocolo serial</td>
<td>I2C </td>
</tr>
<tr>
<td>Corrente média Grove </td>
<td>32 µA</td>
</tr>
<tr>
<td>Corrente em repouso Grove</td>
<td>1.2µA</td>
</tr>
<tr>
<td>Dimensões do produto</td>
<td>20mm x 40mm</td>
</tr>
<tr>
<td>Comunicação</td>
<td>IIC</td>
</tr>
<tr>
<td>Taxa</td>
<td>115200</td>
</tr>
</tbody>
</table>

## Primeiros Passos

Agora podemos configurar o módulo e detectar umidade e temperatura.

### Preparação

**Hardware**

- Grove - Temperature & Humidity Sensor
- PC host com Windows ou PC com MacOS (Win 10 e MacOS 12.2 testados)
- Cabo Type-C

**Software**

- [Arduino Software](https://www.arduino.cc/)
- [Biblioteca do módulo](https://github.com/Sensirion/arduino-i2c-sht4x)

## Visão Geral da Biblioteca Arduino

:::tip
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

A biblioteca que usamos aqui é publicada no Github, incluindo o exemplo.

<p style={{textAlign: 'center'}}><a href="https://github.com/Sensirion/arduino-i2c-sht4x" target="_blank"><img src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></a></p>

### Função

- `Serial.begin(115200);` —— O número aqui significa que a taxa é configurada em 115200. Quando enviarmos o código, é necessário configurar a taxa como 115200 ao abrir o monitor

### Instalação

Como você já baixou a biblioteca em formato ZIP, abra sua IDE Arduino, clique em **Sketch > Include Library > Add .ZIP Library**. Escolha o arquivo ZIP que você acabou de baixar e, se a biblioteca for instalada corretamente, você verá **Library added to your libraries** na janela de aviso. Isso significa que a biblioteca foi instalada com sucesso.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" /></div>

### Atualizando o Pacote

Por uma questão de continuidade do produto, podemos otimizar e atualizar a biblioteca do produto em uma fase posterior. De acordo com os dois métodos de instalação de biblioteca fornecidos acima, também há duas maneiras de atualizar a biblioteca para referência.

Nós atualizaremos o GitHub primeiro quando a biblioteca for otimizada. Você pode excluir a pasta da biblioteca original na pasta do seu computador, depois baixar a versão mais recente do GitHub, descompactá-la e colocá-la no diretório de bibliotecas da IDE Arduino. (**...\Arduino\libraries. ....** é o caminho onde você configurou o Arduino)

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Location_lib.png" /></div>

## Exemplo Arduino

Agora que temos nossa biblioteca instalada e entendemos as funções básicas, vamos executar alguns exemplos para o nosso Grove - Temp & Humidi Sensor para ver como ele se comporta.

**Pré-requisito**

| Seeeduino V4.2 | Base Shield | Grove - Temp & Humidi Sensor|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width="{210}" src="https://files.seeedstudio.com/wiki/SHT4x/SHT4x.jpeg" /></div>
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/grove-temp-humi-sensor-sht40-p-5384.html)|

**Passo 1.**  Conecte o hardware como abaixo e foque na conexão da porta IIC:

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SHT4x/SHT4xconnection.png" /></div>

**Passo 2.** Você precisa instalar o Arduino Software.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width = "{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></p>

**Passo 3.** Inicie o aplicativo Arduino.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**Passo 4.** Navegue até "file-->examples-->Sensirion IIC Sen4x-->exampleUsage" e abra o exemplo fornecido na biblioteca. Você também pode copiar o código abaixo:

```cpp
#include <Arduino.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>

SensirionI2CSht4x sht4x;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sht4x.begin(Wire);

    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);
    if (error) {
        Serial.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Serial Number: ");
        Serial.println(serialNumber);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);

    float temperature;
    float humidity;
    error = sht4x.measureHighPrecision(temperature, humidity);
    if (error) {
        Serial.print("Error trying to execute measureHighPrecision(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Temperature:");
        Serial.print(temperature);
        Serial.print("\t");
        Serial.print("Humidity:");
        Serial.println(humidity);
    }
}
```

**Passo 5.** Envie o código para o software Arduino e clique em "monitor" no canto superior direito. O resultado do monitor pode aparecer assim:

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SHT4x/SHT4xoutput.png" /></div>

## Recursos

- **[PDF]** [SHT4x Datasheet](https://files.seeedstudio.com/wiki/SHT4x/SHT4x_Datasheet.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
