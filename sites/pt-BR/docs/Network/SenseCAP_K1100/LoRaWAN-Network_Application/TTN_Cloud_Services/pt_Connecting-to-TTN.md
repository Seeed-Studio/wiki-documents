---
description: Conectar ao TTN
title: Conectar ao TTN
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Connecting-to-TTN
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Connecting-to-TTN/
---
# Conectando ao TTN

Neste capítulo, veremos o uso básico da plataforma TTN e como retransmitir os dados do sensor por meio da plataforma TTN.

## Atualizável para sensores industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) SenseCAP e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só o ajuda com a prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustes [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O gabinete IP66, a configuração por Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o poderoso suporte do APP tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial bem-sucedido.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td colSpan={4} bgcolor="#0e3c49" align="center">
        <font color="white" size={4}>
          <strong>Sensor Industrial SenseCAP</strong>
        </font>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Registrador de Dados</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temperatura do Ar &amp; Umidade</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temperatura do Ar &amp; Umidade &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Umidade do Solo &amp; Temperatura</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Umidade do Solo &amp; Temperatura &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estação Meteorológica 8 em 1</strong></a></td>
    </tr>
  </tbody>
</table>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/27.png" /></div>

Se você não tem nenhuma experiência com TTN, recomendamos que leia primeiro sobre o console do TTN.

<table align="center">
  <tbody><tr>
      <td align="cent er"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/TTN.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Introdução ao TTN</strong><br /><br />Neste capítulo, apresentaremos os controles do console do TTN que usamos para obter uma primeira impressão do console do TTN.<br /><br /><a href="https://wiki.seeedstudio.com/pt-br/TTN-Introduction">Vamos começar &gt;</a></td>
    </tr>
  </tbody></table>

:::note
Antes de iniciar esta seção, certifique-se de que você tenha cobertura TTN LoRaWAN® em torno do seu ambiente de implantação, caso contrário você não poderá adicionar dispositivos ao TTN via LoRa®. Para mais detalhes, leia [TTN LoRaWAN®](https://www.thethingsnetwork.org/docs/lorawan/).
:::

## <span id="jump1">Adicionando dispositivos Grove - Wio-E5 ao console TTN</span>

Para retransmitir os dados do sensor para fora do TTN, o primeiro passo é adicionar o Grove - Wio-E5 ao TTN Application para criar a conexão entre o dispositivo local e a plataforma TTN.

**Passo 1.** Obter o DevEUI, AppEUI para o Grove - Wio-E5.

Por favor, baixe o ambiente necessário para Arduino e Wio Terminal na [pre-approved content](https://wiki.seeedstudio.com/pt-br/K1100-Light-Sensor-Grove-LoRa-E5/#preliminary-preparation).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/wiolora.jpg" /></div>

Clique [aqui](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/example/Get-Grove-LoRa-E5-AppEUI-DevEUI/Get-Grove-LoRa-E5-AppEUI-DevEUI.ino) para baixar o código para o DevEUI, AppEUI que vem com o Grove - Wio-E5 e carregá-lo no Wio Terminal.

```cpp
#include <Arduino.h>
#include "disk91_LoRaE5.h"

Disk91_LoRaE5 lorae5(&Serial); // Where the AT command and debut traces are printed

void setup() {
  Serial.begin(9600);
  uint32_t start = millis();
  while ( !Serial && (millis() - start) < 3000 );  // Open the Serial Monitor to get started or wait for 3.0"

  // init the library, search the Wio-E5 over the different WIO port available
  if ( ! lorae5.begin(DSKLORAE5_SEARCH_WIO) ) {
    Serial.println("Wio-E5 Init Failed");
    while(1); 
  }
}

void loop() {
  //Grove - Wio-E5 allows querying DevEUI, AppEUI, but not AppKey.
  lorae5.sendATCommand("AT+ID=DevEui","","+ID: ERROR","",1000,false,NULL);
  lorae5.sendATCommand("AT+ID=AppEUI","","+ID: ERROR","",1000,false,NULL);
  delay(30000);
}
```

Abra o monitor de porta serial da Arduino IDE, defina a taxa de baud para **9600** e observe a configuração.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/95.png" /></div>

Anote os 16 dígitos após **DevEUI** e **AppEUI**, que serão usados na seção de adição de dispositivo no TTN.

**Passo 2.** Adicionar uma aplicação

Clique no botão **Add application** no canto superior direito.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/31.png" /></div>

Preencha os campos com asterisco e defina o conteúdo de acordo com sua preferência.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1100/32.png" /></div>

Em seguida, clique em **Create Application**.

**Passo 3.** Adicionar dispositivos

Vá para **End devices** no menu à esquerda e clique em **+ Add end device** para acessar a página de registro de dispositivos finais.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/33.png" /></div>

Para usar o Grove - Wio-E5 no repositório de dispositivos, certifique-se de que a guia **From the LoRaWAN® Device Repository** esteja selecionada.

Em seguida, clique nas seguintes opções para selecionar.

- **Brand** -- SenseCAP
- **Modelo** -- Módulo LoRa-E5 STM32WLE5JC
- **Versão de Hardware** -- 1.0
- **Versão de Firmware** -- 1.0
- **Perfil (Região)** -- Escolha um plano de frequência apropriado para a sua região.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/29.png" /></div>

:::note
Escolha um plano de frequência apropriado para a sua região. Seu dispositivo e gateway devem usar o mesmo plano de frequência para se comunicarem. Diferentes regiões do mundo usam diferentes [planos de frequência](https://www.thethingsindustries.com/docs/reference/frequency-plans/), por ex. 863-870 MHz para a Europa, 902-928 MHz para a América do Norte, etc.
:::
Aqui, vou escolher a banda do gateway TTN que utilizo, EU868.

Em seguida, preencha o **DevEUI** e o **AppEUI** que você acabou de obter nos campos correspondentes do TTN.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/35.png" /></div>

Quanto ao **AppKey**, clique no botão **Generate** e depois faça o upload para o Wio Terminal usando o código a seguir para habilitar o Grove - Wio-E5.

Observe que o AppKey de 32 bits gerado pelo TTN é substituído pelo conteúdo no código.

```c
lorae5.sendATCommand("AT+KEY=APPKEY,\"2B7E151628XXXXXXXXXX158809CF4F3C\"","","+KEY: ERROR","",1000,false,NULL);
```

Aqui está o código completo.

```cpp
#include <Arduino.h>
#include "disk91_LoRaE5.h"

Disk91_LoRaE5 lorae5(&Serial); // Where the AT command and debut traces are printed

void setup() {
  Serial.begin(9600);
  uint32_t start = millis();
  while ( !Serial && (millis() - start) < 3000 );  // Open the Serial Monitor to get started or wait for 3.0"

  // init the library, search the Wio-E5 over the different WIO port available
  if ( ! lorae5.begin(DSKLORAE5_SEARCH_WIO) ) {
    Serial.println("Wio-E5 Init Failed");
    while(1); 
  }
}

void loop() {
  //Grove - Wio-E5 allows querying DevEUI, AppEUI, but not AppKey.
  lorae5.sendATCommand("AT+KEY=APPKEY,\"2B7E151628XXXXXXXXXX158809CF4F3C\"","","+KEY: ERROR","",1000,false,NULL);
  delay(30000);
}
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/96.png" /></div>

Neste ponto, os três códigos para Grove - Wio-E5 e TTN foram configurados. Basta clicar em **Register end device**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/37.png" /></div>

## Escrever função de decodificação para diferentes sensores

Nas seções anteriores, mostramos como usar o Wio Terminal para ler os valores dos sensores individuais do kit. Para enviar os valores dos sensores para o TTN via Grove - Wio-E5, é necessário usar comandos AT para isso. Os dados enviados são recebidos pelo TTN e precisam ser decodificados antes de se tornarem dados reais que possamos ler. Esta é a razão pela qual escrevemos o decodificador.

Além disso, como o formato de dados enviado não é uniforme, com sensores tendo dados inteiros, float, positivos e negativos, etc., o código do decodificador necessário para cada sensor é diferente.

<table align="center">
  <tbody><tr>
      <th>Tipo de sensor</th>
      <th>Endereço para download</th>
    </tr>
    <tr>
      <td align="center">Sensor de luz integrado do Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/Wio-Terminal-Light-Sensor-data-decoder.js">Download</a></td>
    </tr>
    <tr>
      <td align="center">Sensor IMU integrado do Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/Wio-Terminal-IMU-Sensor-data-decoder.js">Download</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Umidade do Solo</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/soil-moisture-data-decoder.js">Download</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Gás VOC e eCO2 (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/SGP30-data-decoder.js">Download</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Temperatura &amp; Umidade (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/SHT40-data-decoder.js">Download</a></td>
    </tr>
    <tr>
      <td align="center">Módulo Vision AI</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/VisionAI-data-decoder.js">Download</a></td>
    </tr>
  </tbody></table>

### Opção 1. Decodificador de dados do Sensor de Luz do Wio Terminal

Na seção anterior [Wio Terminal Light Sensor](https://wiki.seeedstudio.com/pt-br/K1100-Light-Sensor-Grove-LoRa-E5/), usamos uma variável inteira `light` para armazenar o valor de luz lido pelo sensor de luz e enviamos esse valor usando a função **send_sync()**. Portanto, o objetivo do decodificador que escrevemos no TTN é ser capaz de analisar esses dados inteiros.

O código de configuração do seu decodificador é o seguinte. Cole o código a seguir na seção de código do TTN. Clique em **Save Function** para salvar este decodificador.

```java
function Decoder(bytes, port) {

  var decoded = {};
  if (port == 8) {
    decoded.light = bytes[0]<<8 | bytes[1];
  }

  return decoded;
}
```

Clique em **Payload formatters** --> **Uplink** --> **Custom Javascript formatter** do dispositivo, nesta ordem.

Em seguida, basta colar o código do decodificador acima em **Formatter code**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/38.png" /></div>

Podemos inserir os dados de um sensor de luz de 8 bits na janela **Test** no lado direito para verificar se o decodificador analisa corretamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/39.png" /></div>

### Opção 2. Decodificador de dados do Sensor IMU do Wio Terminal

Na seção anterior [Wio Terminal IMU Sensor](https://wiki.seeedstudio.com/pt-br/K1100-IMU-Sensor-Grove-LoRa-E5/), usamos números float `x_values`, `y_values`, `z_values` para armazenar os três eixos de dados retornados pela IMU, e multiplicamos esses três conjuntos de dados por 100 para convertê-los em inteiros e depois enviá-los juntos.

Em particular, é importante notar que esses dados podem ser tanto positivos quanto negativos, portanto também precisamos analisá-los e restaurá-los para um número float.

O código de configuração do seu decodificador é o seguinte. Cole o código a seguir na seção de código do TTN. Clique em **Save changes** para salvar este decodificador.

```java
function Decoder(bytes, port) {

  var decoded = {};

  function transformers(bytes){
    value = bytes[0] * 256 + bytes[1];
    if (value >= 32768) {
      value = 32768 - value;
    }
    value = value/100.0;
    return value;
  }

  if (port == 8) {
    decoded.x = transformers(bytes.slice(0,2));
    decoded.y = transformers(bytes.slice(2,4));
    decoded.z = transformers(bytes.slice(4,6));
  }

  return decoded;
}
```

Podemos inserir os dados de um sensor IMU de 48 bits em **Test** no lado direito para verificar se o decodificador analisa corretamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/97.png" /></div>

### Opção 3. Decodificador de dados do Sensor de Umidade do Solo Grove

Na seção anterior [Grove Soil Moisture Sensor](https://wiki.seeedstudio.com/pt-br/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5/), usamos uma variável inteira `sensorValue` para armazenar o valor de umidade do solo lido pelo sensor de umidade do solo e enviamos esse valor usando a função **send_sync()**. Portanto, o objetivo do decodificador que escrevemos no TTN é ser capaz de analisar esses dados inteiros.

O código de configuração do seu decodificador é o seguinte. Cole o código a seguir na seção de código do TTN. Clique em **Save changes** para salvar este decodificador.

```java
function Decoder(bytes, port) {

  var decoded = {};
  if (port == 8) {
    decoded.soil = bytes[0]<<8 | bytes[1];
  }

  return decoded;
}
```

Podemos inserir os dados de um sensor de umidade do solo de 8 bits em **Test** no lado direito para verificar se o decodificador analisa corretamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/23.png" /></div>

### Opção 4. Decodificador de dados do Sensor de Gás VOC e eCO2 Grove (SGP30)

Na seção anterior [Grove VOC and eCO2 Gas Sensor (SGP30)](https://wiki.seeedstudio.com/pt-br/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5/), usamos as variáveis inteiras `tvoc_ppb` e `co2_eq_ppm` para armazenar os valores de VOC e eCO2.

O código de configuração do seu decodificador é o seguinte. Cole o código a seguir na seção de código do TTN. Clique em **Save changes** para salvar este decodificador.

```java
function Decoder(bytes, port) {

  var decoded = {};

  function transformers(bytes){
    value = bytes[0] * 256 + bytes[1];
    return value;
  }

  if (port == 8) {
    decoded.voc = transformers(bytes.slice(0,2));
    decoded.eco2 = transformers(bytes.slice(2,4));
  }

  return decoded;
}
```

Podemos inserir os dados de um SGP30 de 16 bits em **Test** no lado direito para verificar se o decodificador analisa corretamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/24.png" /></div>

### Opção 5. Decodificador de dados do Sensor de Temperatura &amp; Umidade Grove (SHT40)

Na seção anterior [Grove Temp&Humi Sensor (SHT40)](https://wiki.seeedstudio.com/pt-br/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/), usamos variáveis float `temperature` e `humidity` para armazenar os valores de temperatura e umidade. E enviamos os dois valores depois de tê-los ampliado cem vezes em inteiros.

O código de configuração do seu decodificador é o seguinte. Cole o código a seguir na seção de código do TTN. Clique em **Save changes** para salvar este decodificador.

```java
function Decoder(bytes, port) {

    var decoded = {};

    function transformers(bytes){
        value = bytes[0] * 256 + bytes[1];
        if (value >= 32768) {
        value = 32768 - value;
        }
        value = value/100.0;
        return value;
    }

    if (port == 8) {
        decoded.temp = transformers(bytes.slice(0, 2));
        decoded.humi = transformers(bytes.slice(2, 4));
    }

    return decoded;
}
```

Podemos inserir os dados de 32 bits do SHT40 em **Test** no lado direito para verificar se o decodificador analisa corretamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/98.png" /></div>

### Opção 6. Decodificador de dados do Grove Vision AI Module

Na seção anterior [Grove Vision AI Module](https://wiki.seeedstudio.com/pt-br/K1100-Vision-AI-Module-Grove-LoRa-E5/), usamos variáveis int `model` e `confi` para armazenar o tipo de modelo identificado e seu nível de confiança.

O código de configuração do seu decodificador é o seguinte. Cole o código a seguir na seção de código do TTN. Clique em **Save changes** para salvar este decodificador.

```java
function Decoder(bytes, port) {

  var decoded = {};

  function transformers(bytes){
    value = bytes[0] * 256 + bytes[1];
    return value;
  }

  if (port == 8) {
    decoded.model = transformers(bytes.slice(0,2));
    decoded.confidence = transformers(bytes.slice(2,4));
  }

  return decoded;
}
```

Podemos inserir os dados de 16 bits do Vision AI em **Test** no lado direito para verificar se o decodificador analisa corretamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/26.png" /></div>

## Enviar código de upload de dados para o TTN

Nas diferentes páginas de sensores, fornecemos códigos detalhados para upload de dados. Você também pode encontrar o código do sensor que deseja usar na lista abaixo.

:::note
Antes de usar o código fornecido nesta seção, observe que o Device EUI, App EUI e App Key no código são consistentes com as informações do dispositivo adicionadas pelo TTN. E verifique se a banda de frequência configurada para o Grove - Wio-E5 é a mesma que a banda do gateway em sua área ou do TTN. Caso contrário, isso pode resultar em falha de acesso à rede.

O código para definir a banda LoRaWAN® é o seguinte, e a configuração padrão é a banda EU868. (A banda EU868 é comumente usada na região europeia.)<br />
    `#define Frequency DSKLORAE5_ZONE_EU868`<br />
Banda US915 (A banda US915 é comumente usada na América do Norte.)<br />
    `#define Frequency DSKLORAE5_ZONE_US915`<br />
Banda AU915 (A banda AU915 é comumente usada na região da Austrália.)<br />
    `#define Frequency DSKLORAE5_ZONE_AU915`
:::
<table align="center">
  <tbody><tr>
      <th>Tipo de Sensor</th>
      <th>Endereço para Download</th>
    </tr>
    <tr>
      <td align="center">Sensor de luz integrado do Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Lightsensor-send-data">Download</a></td>
    </tr>
    <tr>
      <td align="center">Sensor IMU integrado do Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/IMU-send-data">Download</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Umidade do Solo</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data">Download</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Gás VOC e eCO2 (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SGP30-send-data">Download</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Temperatura e Umidade (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SHT40-send-data">Download</a></td>
    </tr>
    <tr>
      <td align="center">Vision AI Module</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/AI-Module-send-data">Download</a></td>
    </tr>
  </tbody></table>

O código acima para envio de dados do sensor pode ser enviado diretamente para o Wio Terminal a partir do Arduino IDE e executado. Nesse momento, ligue o monitor serial e ajuste a taxa de baud para 9600 para observar a transmissão de dados em tempo real.

Para mais detalhes, volte à seção sobre o uso de sensores individuais no catálogo de referência.

### Dados em tempo real

Na guia **Application**, podemos clicar em **Live data** para ver as informações sobre os dados recebidos pelo TTN.

Podemos ver diretamente as informações dos dados após a decodificação pelo decodificador.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/40.png" /></div>

### Análise do Código-fonte

Se você quiser aplicar o conteúdo deste tutorial ao desenvolvimento do seu próprio projeto, aprender a entender o significado do código é essencial. Aqui usaremos o código do sensor **SHT40** como exemplo para explicar a lógica de implementação do código.

No início do programa, precisamos preparar as informações necessárias da tríade para conectar ao TTN e definir a frequência do Wio-E5.

```cpp
#define Frequency DSKLORAE5_ZONE_EU868
/*
Select your frequency band here.
DSKLORAE5_ZONE_EU868
DSKLORAE5_ZONE_US915
DSKLORAE5_ZONE_AS923_1
DSKLORAE5_ZONE_AS923_2
DSKLORAE5_ZONE_AS923_3
DSKLORAE5_ZONE_AS923_4
DSKLORAE5_ZONE_KR920
DSKLORAE5_ZONE_IN865
DSKLORAE5_ZONE_AU915
 */

char deveui[] = "2CF7FXXXXXX0A49F";
char appeui[] = "80000XXXXXX00009";
char appkey[] = "2B7E151628XXXXXXXXXX158809CF4F3C";
```

Em seguida, uma função `data_decord()` é definida. Esta função converte os valores do sensor em quadros de dados que podem ser analisados pelo decodificador do TTN e que também estejam em conformidade com o protocolo LoRaWAN®, e os armazena no array `data[]`.

Em geral, para evitar estouro de dados, precisamos considerar os valores máximos e mínimos que o sensor pode ler. E dividir em números hexadecimais que não irão estourar.

```cpp
void data_decord(int val_1, int val_2, uint8_t data[4])
{
  int val[] = {val_1, val_2};

  for(int i = 0, j = 0; i < 2; i++, j += 2)
  {
    if(val[i] < 0)
    {
      val[i] = ~val[i] + 1;
      data[j] = val[i] >> 8 | 0x80;
      data[j+1] = val[i] & 0xFF;
    }
    else
    {
      data[j] = val[i] >> 8 & 0xFF;
      data[j+1] = val[i] & 0xFF;
    }
  }
}
```

Para o sensor SHT40, ele terá dois dados, um é o dado de temperatura e o outro é o dado de umidade, e há valores positivos e negativos, então os números negativos precisam ser processados, e também as casas decimais precisam ser tratadas.

```cpp
int_temp = temperature*100;
int_humi = humidity*100;
```

O próximo passo é a inicialização do SHT40 e a configuração inicial do Wio-E5. Tudo isso será executado na função `setup()`.

```cpp
lorae5.begin(DSKLORAE5_SWSERIAL_WIO_P2)
```

No código de inicialização, `DSKLORAE5_SWSERIAL_WIO_P2` representa a interface Grove no lado **direito** do Wio Terminal, enquanto `DSKLORAE5_SWSERIAL_WIO_P1` representa a interface Grove no lado **esquerdo**. Para outros projetos sem sensores externos, você também pode usar `DSKLORAE5_SEARCH_WIO`, que pesquisará automaticamente a interface Grove à qual seu Wio-E5 está conectado.

```cpp
lorae5.send_sync(              //Sending the sensor values out
        8,                     // LoRaWan Port
        data,                  // data array
        sizeof(data),          // size of the data
        false,                 // we are not expecting a ack
        7,                     // Spread Factor
        14                     // Tx Power in dBm
       ) 
```

O papel importante da função `send_sync()` é enviar os valores do sensor pela LoRaWAN®. O primeiro parâmetro indica o número do canal para enviar os dados, o segundo parâmetro indica o conteúdo dos dados enviados e o terceiro parâmetro indica o comprimento dos dados enviados. Em geral, só precisamos nos concentrar no conteúdo dos três primeiros parâmetros.

```cpp
delay(15000);
```

O atraso no final do programa determina com que frequência você deseja enviar dados. Não recomendamos o envio em uma taxa inferior a 10 segundos, pois o envio em uma frequência tão alta pode fazer com que o Wio-E5 funcione de forma anormal e pode ser reconhecido pelo TTN como um dispositivo anormal e bloqueado devido à alta frequência.

Para saber mais sobre o código e os recursos do Grove - Wio-E5, consulte o [link do repositório no GitHub](https://github.com/limengdu/Disk91_LoRaE5). Agradecimentos especiais a [**Paul Pinault (disk91)**](https://github.com/disk91) por escrever a biblioteca para o Grove - Wio-E5.

Fique ligado para mais conteúdo!

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Declaração

- A marca LoRa® é uma marca registrada da Semtech Corporation ou de suas subsidiárias.
- LoRaWAN® é uma marca usada sob licença da LoRa Alliance®.
