---
description: Conectar ao Helium
title: Conectar ao Helium
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Connecting-to-Helium
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Connecting-to-Helium/
---

# Conectando ao Helium

Neste capítulo, veremos o uso básico da plataforma Helium e como retransmitir os dados do sensor pela plataforma Helium.

## Atualizável para sensores industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) SenseCAP e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você na prototipagem, como também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustes [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A carcaça IP66, configuração via Bluetooth, compatibilidade com a rede global LoRaWAN®, bateria interna de 19 Ah e o forte suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x no seu próximo projeto industrial bem-sucedido.

<div>
  <table style={{marginLeft: 'auto', marginRight: 'auto'}}>
    <tbody>
      <tr><td colspan="4" bgcolor="#0e3c49" align="center"><font color="white" size="4"><strong>Sensor Industrial SenseCAP</strong></font></td></tr>
      <tr>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></div></a></td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></div></a></td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
      </tr>
      <tr>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Data Logger</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temp &amp; Umidade do Ar</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temp &amp; Umidade do Ar &amp; CO2</strong></a></td>
      </tr>
      <tr>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></div></a></td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></div></a></td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></div></a></td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></div></a></td>
      </tr>
      <tr>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Umidade &amp; Temp do Solo</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Umidade &amp; Temp do Solo &amp; EC</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estação Meteorológica 8 em 1</strong></a></td>
      </tr>
    </tbody>
  </table>
  <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/28.png" /></div>
  Se você não tem nenhuma experiência com Helium, recomendamos que leia primeiro sobre o console Helium.
  <table align="center">
    <tbody><tr>
        <td align="cent er"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/178.jpeg" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>Introdução ao Helium</strong><br /><br />Neste capítulo, apresentaremos os controles do console Helium que usamos para obter uma primeira impressão do console Helium.<br /><br /><a href="https://wiki.seeedstudio.com/pt-br/Helium-Introduction">Vamos começar &gt;</a></td>
      </tr>
    </tbody></table>
</div>

:::note
Antes de iniciar esta seção, certifique-se de que você tem cobertura Helium LoRaWAN® ao redor do seu ambiente de implantação, caso contrário você não conseguirá adicionar dispositivos ao Helium via LoRa®. Para mais detalhes, leia [Helium LoRaWAN®](https://www.helium.com/lorawan).
:::

## <span id="jump1">Adicionando dispositivos Grove - Wio-E5 ao console Helium</span>

Para retransmitir os dados do sensor para fora do Helium, o primeiro passo é adicionar o Grove - Wio-E5 ao console Helium para construir a conexão entre o dispositivo local e a plataforma Helium.

Para adicionar o Grove - Wio-E5, vá para **Devices** e clique no ícone **+** Add Device no canto superior direito da janela.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/125.png" /></div>

Conforme descrito acima para o dispositivo do console Helium, um trio de dados -- **DevEUI**, **AppEUI** e **AppKey** é gerado automaticamente neste ponto.

Começaremos preenchendo o nome do dispositivo, aqui vou chamá-lo de **lora wio terminal**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/129.png" /></div>

:::note
Baixe o ambiente necessário para Arduino e Wio Terminal em [pre-approved content](https://wiki.seeedstudio.com/pt-br/K1100-Light-Sensor-Grove-LoRa-E5/#preparation-preliminar).
:::
   <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/wiolora.jpg" /></div>

O Grove - Wio-E5 permite que os usuários definam seu próprio **DevEUI**, **AppEUI** e **AppKey**, portanto podemos preencher as informações do trio geradas pelo Helium acima nas colunas correspondentes.

Abra a IDE do Arduino e copie o seguinte código para a IDE do Arduino.

```c
#include <Arduino.h>
#include "disk91_LoRaE5.h"

Disk91_LoRaE5 lorae5(&Serial); // Where the AT command and debut traces are printed

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

void setup() {

  Serial.begin(9600);
  uint32_t start = millis();
  while ( !Serial && (millis() - start) < 1500 );  // Open the Serial Monitor to get started or wait for 1.5"

  // init the library, search the LORAE5 over the different WIO port available
  if ( ! lorae5.begin(DSKLORAE5_SEARCH_WIO) ) {
    Serial.println("LoRa E5 Init Failed");
    while(1); 
  }

  // Setup the LoRaWan Credentials
  if ( ! lorae5.setup(
        Frequency,     // LoRaWan Radio Zone EU868 here
        deveui,
        appeui,
        appkey
     ) ){
    Serial.println("LoRa E5 Setup Failed");
    while(1);         
  }
}

void loop() {

}
```

:::note
O código acima não tem restrições sobre a conexão do Grove - Wio-E5, ele irá procurar automaticamente a porta Grove à qual o Grove - Wio-E5 está conectado, mas o processo de busca pode levar um tempo (cerca de um minuto ou mais).
:::
Selecione a banda LoRaWAN® que você deseja usar. Essa banda deve ser consistente com a banda do gateway que você está usando. As bandas de frequência disponíveis estão nos comentários do código abaixo. Nos tutoriais que usamos, o padrão é a banda **EU868**.

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
```

:::tip
A banda **EU868** é comumente usada na região **Europeia**.<br />
A banda **US915** é comumente usada na **América do Norte**.<br />
A banda **AU915** é comumente usada na região da **Austrália**.
:::
Substitua o **DevEUI**, **AppEUI** e **AppKey** gerados pela Helium pelo código abaixo.

```c
char deveui[] = "2CF7FXXXXXX0A49F";
char appeui[] = "80000XXXXXX00009";
char appkey[] = "2B7E151628XXXXXXXXXX158809CF4F3C";
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/89.png" /></div>

Envie o código para o Wio Terminal e abra o monitor de porta serial da Arduino IDE, defina a taxa de baud para 9600 e observe a configuração.

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/K1100/90.png" /></div>

Depois de se certificar de que as informações acima foram preenchidas, clique em **Save Device** abaixo para finalizar a adição do dispositivo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/130.png" /></div>

Aguarde pacientemente a adição do dispositivo. (Isso levará cerca de 20 minutos.)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/131.png" /></div>

## Escrever função de decodificador para diferentes sensores

Nas seções anteriores, instruímos você sobre como usar o Wio Terminal para ler os valores dos sensores individuais do kit. Para enviar os valores dos sensores para a Helium via Grove - Wio-E5, é necessário usar comandos AT para fazê-lo. Os dados enviados são recebidos pela Helium e precisam ser decodificados antes de se tornarem dados reais que possamos ler. Este é o motivo pelo qual escrevemos o decodificador.

Além disso, como o formato dos dados enviados não é uniforme, com sensores tendo dados inteiros, de ponto flutuante, positivos e negativos, etc., o código do decodificador necessário para cada sensor é diferente.

<table align="center">
  <tbody><tr>
      <th>Tipo de sensor</th>
      <th>Endereço de download</th>
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
      <td align="center">Sensor de Temperatura e Umidade (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/SHT40-data-decoder.js">Download</a></td>
    </tr>
    <tr>
      <td align="center">Módulo Vision AI</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/VisionAI-data-decoder.js">Download</a></td>
    </tr>
  </tbody></table>

### Opção 1. Decodificador de dados do Sensor de Luz do Wio Terminal

Criamos um novo Custom Script e o nomeamos Light_data.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/132.png" /></div>

Na seção anterior [Wio Terminal Light Sensor](https://wiki.seeedstudio.com/pt-br/K1100-Light-Sensor-Grove-LoRa-E5/), usamos uma variável inteira `light` para armazenar o valor de luz lido pelo sensor de luz e enviamos esse valor usando a função **send_sync()**. Portanto, o objetivo do decodificador que escrevemos na Helium é conseguir analisar esses dados inteiros.

O código de configuração do seu decodificador é o seguinte. Cole o código a seguir na seção de código da Helium. Clique em **Save Function** para salvar este decodificador.

```java
function Decoder(bytes, port) {

  var decoded = {};
  if (port == 8) {
    decoded.light = bytes[0]<<8 | bytes[1];
  }

  return decoded;
}
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/133.png" /></div>

Podemos inserir os dados do sensor de luz de 8 bits em **SCRIPT VALIDATOR** no lado direito para verificar se o decodificador está analisando corretamente.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/134.png" /></div>

Volte para Flows e conecte o dispositivo ao decodificador.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/180.png" /></div>

### Opção 2. Decodificador de dados do Sensor IMU do Wio Terminal

Criamos um novo Custom Script e o nomeamos IMU_data.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/135.png" /></div>

Na seção anterior [Wio Terminal IMU Sensor](https://wiki.seeedstudio.com/pt-br/K1100-IMU-Sensor-Grove-LoRa-E5/), usamos números de ponto flutuante `x_values`, `y_values`, `z_values` para armazenar os três eixos de dados retornados pela IMU, e multiplicamos esses três conjuntos de dados por 100 para convertê-los em inteiros e depois enviá-los juntos.

Em particular, é importante notar que esses dados podem ser tanto positivos quanto negativos, portanto também precisamos analisá-los e restaurá-los para um número de ponto flutuante.

O código de configuração do seu decodificador é o seguinte. Cole o código a seguir na seção de código da Helium. Clique em **Save Function** para salvar este decodificador.

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

Podemos inserir os dados do sensor IMU de 48 bits em **SCRIPT VALIDATOR** no lado direito para verificar se o decodificador está analisando corretamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/91.png" /></div>

Volte para Flows e conecte o dispositivo ao decodificador.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/179.png" /></div>

### Opção 3. Decodificador de dados do Sensor de Umidade do Solo Grove

Criamos um novo Custom Script e o nomeamos Soil_data.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/184.png" /></div>

Na seção anterior [Grove Soil Moisture Sensor](https://wiki.seeedstudio.com/pt-br/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5/), usamos uma variável inteira `sensorValue` para armazenar o valor de umidade do solo lido pelo sensor de umidade do solo e enviamos esse valor usando a função **send_sync()**. Portanto, o objetivo do decodificador que escrevemos na Helium é conseguir analisar esses dados inteiros.

O código de configuração do seu decodificador é o seguinte. Cole o código a seguir na seção de código da Helium. Clique em **Save Function** para salvar este decodificador.

```java
function Decoder(bytes, port) {

  var decoded = {};
  if (port == 8) {
    decoded.soil = bytes[0]<<8 | bytes[1];
  }

  return decoded;
}
```

Podemos inserir os dados do sensor de umidade do solo de 8 bits em **SCRIPT VALIDATOR** no lado direito para verificar se o decodificador está analisando corretamente.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/185.png" /></div>

Volte para Flows e conecte o dispositivo ao decodificador.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/186.png" /></div>

### Opção 4. Decodificador de dados do Sensor de Gás VOC e eCO2 Grove (SGP30)

Criamos um novo Custom Script e o nomeamos SGP30_data.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/173.png" /></div>

Na seção anterior [Grove VOC and eCO2 Gas Sensor (SGP30)](https://wiki.seeedstudio.com/pt-br/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5/), usamos as variáveis inteiras `tvoc_ppb` e `co2_eq_ppm` para armazenar os valores de VOC e eCO2.

O código de configuração do seu decodificador é o seguinte. Cole o código a seguir na seção de código da Helium. Clique em **Save Function** para salvar este decodificador.

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

Podemos inserir os dados de 16 bits do SGP30 em **SCRIPT VALIDATOR** no lado direito para verificar se o decodificador está analisando corretamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/174.png" /></div>

Volte para Flows e conecte o dispositivo ao decodificador.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/181.png" /></div>

### Opção 5. Decodificador de dados do Sensor de Temperatura e Umidade Grove (SHT40)

Criamos um novo Custom Script e o nomeamos SHT40_data.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/189.png" /></div>

Na seção anterior [Grove Temp&Humi Sensor (SHT40)](https://wiki.seeedstudio.com/pt-br/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/), usamos as variáveis de ponto flutuante `temperature` e `humidity` para armazenar os valores de temperatura e umidade. E enviamos os dois valores depois de terem sido ampliados cem vezes e convertidos em inteiros.

O código de configuração do seu decodificador é o seguinte. Cole o código a seguir na seção de código da Helium. Clique em **Save Function** para salvar este decodificador.

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

Podemos inserir os dados de 32 bits do SHT40 em **SCRIPT VALIDATOR** no lado direito para verificar se o decodificador analisa corretamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/92.png" /></div>

Volte para Flows e conecte o dispositivo ao decodificador.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/190.png" /></div>

### Opção 6. Decodificador de dados do Grove Vision AI Module

Criamos um novo Custom Script e o nomeamos AI_Version_data.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/195.png" /></div>

Na seção anterior [Grove Vision AI Module](https://wiki.seeedstudio.com/pt-br/K1100-Vision-AI-Module-Grove-LoRa-E5/), usamos variáveis `int` `model` e `confi` para armazenar o tipo de modelo identificado e seu nível de confiança.

O código de configuração do decodificador é o seguinte. Cole o código a seguir na seção de código do Helium. Clique em **Save Function** para salvar este decodificador.

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

Podemos inserir os dados de 16 bits do Vision AI em **SCRIPT VALIDATOR** no lado direito para verificar se o decodificador analisa corretamente.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/200.png" /></div>

Volte para Flows e conecte o dispositivo ao decodificador.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/196.png" /></div>

## Enviar código para transmitir dados ao Helium

Nas diferentes páginas de sensores, fornecemos códigos detalhados para upload de dados. Você também pode encontrar o código do sensor que deseja usar na lista abaixo.

:::note
Antes de usar o código fornecido nesta seção, observe que o Device EUI, App EUI e App Key no código são consistentes com as informações do dispositivo adicionadas no Helium. E verifique se a banda de frequência configurada para o Grove - Wio-E5 é a mesma que a banda do gateway em sua região ou no Helium. Caso contrário, isso pode resultar em falha de acesso à rede.

O código para definir a banda LoRaWAN® é o seguinte, e a configuração padrão é a banda EU868. (A banda EU868 é comumente usada na região europeia.)
    `#define Frequency DSKLORAE5_ZONE_EU868`
Banda US915 (A banda US915 é comumente usada na América do Norte.)
    `#define Frequency DSKLORAE5_ZONE_US915`
Banda AU915 (A banda AU915 é comumente usada na região da Austrália.)
    `#define Frequency DSKLORAE5_ZONE_AU915`
:::
<table align="center">
  <tbody><tr>
      <th>Tipo de Sensor</th>
      <th>Endereço de Download</th>
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

O código acima para envio de dados do sensor pode ser carregado diretamente para o Wio Terminal a partir da Arduino IDE e executado. Nesse momento, ligue o monitor serial e ajuste a taxa de transmissão para **9600** para observar a transmissão de dados em tempo real.

Para mais detalhes, volte à seção sobre o uso de sensores individuais no catálogo de referência.

### Dados em tempo real e depuração

Depois que tivermos o dispositivo conectado, você pode começar a visualizar as transferências de dados nos pacotes em tempo real e no log de eventos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/93.png" /></div>

:::note
Na versão mais recente da atualização do Helium, o Helium não oferece mais 10.000 DATA CREDITS para novos usuários, apenas **250 DATA CREDITS**. Você é livre para ajustar a frequência de envio de dados para reduzir o consumo de DC ou comprá-los conforme sua escolha.
:::
Na aba **My Devices**, podemos clicar no **botão de besouro** no lado direito da tela para ver as informações sobre os dados recebidos pelo Helium.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/172.png" /></div>

Podemos prestar atenção especial às informações nas seguintes seções.

- payload: Informações sobre os dados enviados ao Helium em formato base64.

- port: O número da porta em que os dados foram recebidos.

:::note
Em nosso código, o número da porta para envio de mensagens é definido como **8**, então, na janela de depuração, todas as mensagens sobre o sensor devem ser payload para a porta **8**. Para leitura e decodificação do payload, você pode fazê-lo com a ajuda deste [site de decodificação](https://cryptii.com/pipes/base64-to-hex).
:::
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/175.png" /></div>

### Análise do Código-Fonte

Se você quiser aplicar o conteúdo deste tutorial ao desenvolvimento do seu próprio projeto, aprender a entender o significado do código é essencial. Aqui usaremos o código do sensor **SHT40** como exemplo para explicar a lógica de implementação do código.

No início do programa, precisamos preparar as informações necessárias da tríade para conectar ao Helium e definir a frequência do Wio-E5.

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

Em seguida, é definida uma função `data_decord()`. Essa função converte os valores do sensor em quadros de dados que podem ser analisados pelo decodificador do Helium e também estejam em conformidade com o protocolo LoRaWAN®, e os armazena no array `data[]`.

Em geral, para evitar estouro de dados, precisamos considerar os valores máximo e mínimo que o sensor pode ler. E dividir em números hexadecimais que não irão estourar.

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

Para o sensor SHT40, ele terá dois dados, um é o dado de temperatura e o outro é o dado de umidade, e existem valores positivos e negativos, então os números negativos precisam ser processados e também as casas decimais precisam ser tratadas.

```cpp
int_temp = temperature*100;
int_humi = humidity*100;
```

A próxima etapa é a inicialização do SHT40 e a configuração inicial do Wio-E5. Tudo isso será executado na função `setup()`.

```cpp
lorae5.begin(DSKLORAE5_SWSERIAL_WIO_P2)
```

No código de inicialização, `DSKLORAE5_SWSERIAL_WIO_P2` representa a interface Grove no lado **direito** do Wio Terminal, enquanto `DSKLORAE5_SWSERIAL_WIO_P1` representa a interface Grove no lado **esquerdo**. Para outros projetos sem sensores externos, você também pode usar `DSKLORAE5_SEARCH_WIO`, que irá procurar automaticamente a interface Grove à qual seu Wio-E5 está conectado.

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

O atraso no final do programa determina com que frequência você deseja enviar dados. Não recomendamos o envio em um intervalo inferior a 10 segundos, pois o envio com uma frequência tão alta pode fazer com que o Wio-E5 funcione de forma anormal e pode ser reconhecido pelo Helium como um dispositivo anormal e bloqueado devido à alta frequência.

Para saber mais sobre o código e os recursos do Grove - Wio-E5, consulte o [link do repositório no GitHub](https://github.com/limengdu/Disk91_LoRaE5). Um agradecimento especial a [**Paul Pinault (disk91)**](https://github.com/disk91) por escrever a biblioteca para o Grove - Wio-E5.

A seção acima é um guia passo a passo sobre como usar o dispositivo para se conectar ao Helium e receber dados. No entanto, do ponto de vista prático, os dados atualmente enviados ao Helium não são legíveis para humanos. Se você tiver uma necessidade de visualização de dados, pode então consultar as etapas a seguir para concluir o tutorial sobre como integrar o Helium aos hubs Microsoft Azure IoT, que o levará por todo o processo de exibição dos dados de forma gráfica.

<div>
  <table align="center">
    <tbody><tr>
        <td align="cent er"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/azure.png" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>Integração do Helium no Azure IoT Hub</strong><br /><br />Esta seção descreve como configurar o Microsoft Azure e integrá-lo ao Helium para enviar dados para a plataforma Microsoft Azure.<br /><br /><a href="https://wiki.seeedstudio.com/pt-br/Integrate-into-Azure-IoT-Hub">Vamos começar &gt;</a></td>
      </tr>
    </tbody></table>
  Além disso, você pode escolher mais plataformas de acordo com suas necessidades.
  <table align="center">
    <tbody><tr>
        <td colSpan={2} bgcolor="8FBC8F"><b>Seção de Plataformas em Nuvem</b></td>
      </tr>
      <tr>
        <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/Google-Sheets.jpeg" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>Integração do Helium ao Google Sheets</strong><br /><br />Esta seção apresenta o uso de Google Forms na integração com Helium e o uso de Google Forms para armazenar dados de sensores.<br /><br /><a href="https://wiki.seeedstudio.com/pt-br/Configuring-Web-APP-Visualization">Ir para o capítulo &gt;</a></td>
      </tr>
      <tr>
        <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/AWS.png" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>Integração do Helium ao AWS IOT Core</strong><br /><br />Esta seção descreve como visualizar as informações de dados recebidas pelo Microsoft Azure usando a integração Web APP gratuita.<br /><br /><a href="https://wiki.seeedstudio.com/pt-br/Configuring-Web-APP-Visualization">Ir para o capítulo &gt;</a></td>
      </tr>
    </tbody></table>
</div>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

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
