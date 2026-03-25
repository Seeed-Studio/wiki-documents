---
description: Conecte módulos Grove ao Home Assistant usando ESPHome no ODYSSEY e Seeed Studio XIAO ESP32C3
title: Conecte módulos Grove ao Home Assistant usando ESPHome
tags:
  - Home Assistant
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Connect-Grove-to-Home-Assistant-ESPHome
sku: E22011026,110992044
last_update:
  date: 03/16/2023
  author: Lakshantha
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Connect-Grove-to-Home-Assistant-ESPHome/
---

# Conecte módulos Grove ao Home Assistant usando ESPHome

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/106.png" /></div>

## Introdução

Este wiki irá guiá-lo passo a passo sobre como conectar o [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html) com ESPHome em execução no Home Assistant e enviar os dados dos sensores/ controlar dispositivos depois de conectar módulos Grove ao XIAO ESP32C3. Então, vamos começar!

## O que é ESPHome?

[ESPHome](https://esphome.io) é uma ferramenta que tem como objetivo tornar o gerenciamento das suas placas ESP o mais simples possível. Ela lê um arquivo de configuração YAML e cria um firmware personalizado que é instalado no seu dispositivo ESP. Dispositivos ou sensores adicionados na configuração do ESPHome aparecerão automaticamente na interface do Home Assistant.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/54.png" /></div>

## Instalar o Home Assistant

Certifique-se de que você já tem o Home Assistant em execução. Você pode seguir [este wiki](https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86-Home-Assistant) para um guia passo a passo sobre como instalar o Home Assistant em um ODYSSEY-X86 SBC.

## Instalar o ESPHome no Home Assistant

ESPHome está disponível como um **Add-On do Home Assistant** e pode ser simplesmente instalado pela loja de add-ons.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/6.png" /></div>

- **Passo 1.** Para configurar rapidamente o ESPHome no Home Assistant, clique no botão abaixo

<div align="center"><a href="https://my.home-assistant.io/redirect/supervisor_addon/?addon=5c53de3b_esphome&repository_url=https%3A%2F%2Fgithub.com%2Fesphome%2Fhome-assistant-addon"><img width={200} src="https://files.seeedstudio.com/wiki/ESPHome/1.png" /></a></div>

- **Passo 2.** Quando você vir o seguinte pop-up, clique em **OPEN LINK**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/2.png" /></div>

- **Passo 3.** Clique em **INSTALL**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/3.png" /></div>

- **Passo 4.** Ative todas as opções e clique em **START**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/4.png" /></div>

- **Passo 5.** Clique em **OPEN WEB UI** ou **ESPHOME** na barra lateral

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/5.png" /></div>

Você verá a seguinte janela se o ESPHome for carregado com sucesso

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/7.png" /></div>

## Adicionar o Seeed Studio XIAO ESP32C3 ao ESPHome

- **Passo 1.** Clique em **+ NEW DEVICE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/8.png" /></div>

- **Passo 2.** Clique em **CONTINUE**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/9.png" /></div>

- **Passo 3.** Insira um **Name** para o dispositivo e insira as credenciais de WiFi como **Network name** e **Password**. Em seguida, clique em **NEXT**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/10.png" /></div>

- **Passo 4.** Selecione **ESP32-C3** e clique

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/11.png" /></div>

- **Passo 5.** Clique em **SKIP** porque vamos configurar esta placa manualmente

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/12.png" /></div>

- **Passo 6.** Clique em **EDIT** na placa recém-criada

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/13.png" /></div>

- **Passo 7.** Isso abrirá um arquivo **YAML** e este arquivo será usado para definir todas as configurações da placa. Edite o conteúdo em **esp32** da seguinte forma

```sh
esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    version: 2.0.5
    platform_version: 5.2.0
```

**Nota:** Aqui estamos usando a versão mais recente do [Arduino core for ESP32](https://github.com/espressif/arduino-esp32/releases) e do [ESP32 support for PlatformIO](https://github.com/platformio/platform-espressif32/releases)

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/14.png" /></div>

- **Passo 8.** Clique em **SAVE** e depois clique em **INSTALL**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/ESPHome/16.png" /></div>

- **Passo 9.** Conecte uma ponta de um cabo USB Type-C ao Seeed Studio XIAO ESP32C3 e a outra ponta a uma das portas USB do ODYSSEY-X86

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/49.png" /></div>

- **Passo 10.** Clique em **Plug into the computer running ESPHome Dashboard**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/17.png" /></div>

- **Passo 11.** Selecione a porta conectada. Provavelmente será **/dev/ttyACM1** porque **/dev/ttyACM0** está conectada ao coprocessador ATSAMD21 onboard no ODYSSEY-X86

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/18.png" /></div>

Agora ele fará o download de todos os pacotes necessários da placa e gravará o firmware ESPHome no XIAO ESP32C3. Se a gravação for bem-sucedida, você verá a seguinte saída

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/19.png" /></div>

- **Passo 12.** A janela acima exibe os logs em tempo real da placa conectada. Feche-a clicando em **STOP**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/20.png" /></div>

- **Passo 12.** Se você vir o status da placa como **ONLINE**, isso significa que a placa foi conectada com sucesso ao WiFi

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/21.png" /></div>

Agora você pode desconectar o XIAO ESP32C3 da placa X86 e apenas alimentá-lo por meio de um cabo USB. Isso porque, a partir de agora, se você quiser gravar firmware no XIAO ESP32C3, pode simplesmente fazer isso por OTA sem conectar à placa X86 via cabo USB.

- **Passo 13.** Clique nos **três pontos** e clique em **Install**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ESPHome/28.png" /></div>

- **Passo 14.** Clique nos **três pontos** e clique em **Install**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ESPHome/28.png" /></div>

- **Passo 15.** Selecione **Wirelessly** e isso irá enviar as alterações para a placa sem fio

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/29.png" /></div>

- **Passo 16.** Vá para **Settings** e selecione **Devices & Services**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/22.png" /></div>

- **Passo 17.** Você verá **ESPHome** como uma integração descoberta. Clique em **CONFIGURE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/23.png" /></div>

- **Passo 18.** Clique em **SUBMIT**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/24.png" /></div>

Aqui será solicitada a chave de criptografia que você tem na sua configuração para xiao-esp32c3

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/25.png" /></div>

- **Passo 19.** Volte para **xiao-esp32c3.yaml**, copie a chave de criptografia, cole na caixa de diálogo acima e clique em **SUBMIT**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/26.png" /></div>

- **Passo 20.** Clique em **FINISH**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/27.png" /></div>

## Módulos Grove com ESPHome e Home Assistant

Agora vamos conectar módulos Grove ao Seeed Studio XIAO ESP32C3 para que possamos exibir dados de sensores ou controlar os dispositivos usando o Home Assistant!

### Conectar módulos Grove ao XIAO ESP32C3

Para usar módulos Grove com o Seeed Studio XIAO ESP32C3, usaremos um [Grove Shield for Seeed Studio XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) e conectaremos o XIAO ESP32C3 nele.

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/51.png" /></div>

Depois disso, os conectores Grove na placa podem ser usados para conectar módulos Grove

### Definições de pinos

Você precisa seguir a tabela abaixo para usar os números de pinos internos apropriados ao conectar os módulos Grove aos conectores Grove no Grove Shield for Seeed Studio XIAO.

| Número de pino interno  | Mapeamento de pino  |
|--- |--- |
| 2  | D0  |
| 3  | D1  |
| 4  | D2  |
| 5  | D3  |
| 6  | D4  |
| 7  | D5  |
| 21  | D6  |
| 20  | D7  |
| 8  | D8  |
| 9  | D9  |
| 10  | D10  |
| 6  | SDA  |
| 7  | SCL  |

Por exemplo, se você quiser conectar um módulo Grove à porta **D0**, você precisa definir o pino no ESPHome como **2**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/50.png" /></div>

### Lista de compatibilidade Grove com ESPHome

Atualmente, os seguintes módulos Grove são suportados pelo ESPHome

<table>
<thead>
  <tr>
    <th>Grove</th>
    <th>Categoria</th>
    <th>Componentes ESPHome</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Laser-PM2-5-Sensor-HM3301.html">Grove - Laser PM2.5 Dust Sensor</a></td>
    <td>Gás</td>
    <td><a href="https://esphome.io/components/sensor/hm3301">The Grove - Laser PM2.5 Sensor (HM3301)</a></td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN55-p-5373.html">Grove - SEN55 All-in-one environmental sensor</a>, NOx, PM, VOC, RH, Temp</td>
    <td>Gás</td>
    <td><a href="https://esphome.io/components/sensor/sen5x.html">Sen5x Series Environmental sensor</a></td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN54-p-5374.html">Grove - SEN54 All-in-one environmental sensor</a>, PM, VOC, RH, Temperature</td>
    <td>Gás</td>
    <td><a href="https://esphome.io/components/sensor/sen5x.html">Sensor ambiental da Série Sen5x</a></td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-for-Arduino-SGP30.html">Grove - Sensor de Gás VOC e eCO2 - SGP30</a></td>
    <td>Gás</td>
    <td><a href="https://esphome.io/components/sensor/sgp30.html">Sensor de CO₂ e Compostos Orgânicos Voláteis SGP30</a></td>
  </tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP40-p-5700.html">Grove - Sensor de Gás VOC (SGP40)</a></td>
  <td>Gás</td>
  <td><a href="https://esphome.io/components/sensor/sgp4x.html">Sensor de Compostos Orgânicos Voláteis SGP40 e Sensor de VOC e NOx SGP41</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html">Grove - Sensor de Formaldeído (SFA30) - Sensor de HCHO</a></td>
  <td>Qualidade do Ar</td>
  <td><a href="https://esphome.io/components/sensor/sfa30.html">Sensor de Formaldeído SFA30</a></td>
</tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-4-Digit-Display.html">Grove - Display de 4 Dígitos</a></td>
    <td>Display</td>
    <td><a href="https://esphome.io/components/display/tm1637.html">Display TM1637 de 7 Segmentos</a></td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank" rel="noopener noreferrer">Grove - Servo</a></td>
    <td>Atuador</td>
    <td><a href="https://esphome.io/components/servo.html">Componente Servo</a></td>
  </tr>
  <tr>
  <td><a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-TB6612FNG-p-3220.html">Grove - Driver de Motor I2C (TB6612FNG)</a></td>
  <td>Atuador</td>
  <td><a href="https://esphome.io/components/grove_tb6612fng.html">Driver de Motor Grove TB6612FNG</a></td>
</tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-RTC-DS1307.html">Grove - DS1307 RTC (Relógio de Tempo Real) para Arduino</a></td>
    <td>Tempo</td>
    <td><a href="https://esphome.io/components/time/">Componente de Tempo</a></td>
  </tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-High-Precision-RTC.html">Grove - RTC de Alta Precisão (DS1307)</a></td>
  <td>Tempo</td>
  <td><a href="https://esphome.io/components/time/">Componente de Tempo</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-WS2813-RGB-LED-Strip-Waterproof-30-LED-m-1m.html">Grove - Fita de LED RGB WS2813 à Prova d'Água - 30 LED/m - 1m</a></td>
  <td>Luz</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">Luz NeoPixelBus</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-WS2813-RGB-LED-Strip-Waterproof-60-LED-m-1m.html">Grove - Fita de LED RGB WS2813 à Prova d'Água - 60 LED/m - 1m</a></td>
  <td>Luz</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">Luz NeoPixelBus</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html">Grove - Anel de LED RGB (20 - WS2813 Mini)</a></td>
  <td>Luz</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">Luz NeoPixelBus</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Mini.html">Grove - Barra de LED RGB (10 - WS2813 Mini)</a></td>
  <td>Luz</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">Luz NeoPixelBus</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-24-WS2813-Mini-p-4202.html">Grove - Anel de LED RGB (24-WS2813 Mini)</a></td>
  <td>Luz</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">Luz NeoPixelBus</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-WS2813-Mini-p-4269.html">Grove - LED RGB (WS2813 Mini)</a></td>
  <td>Luz</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">Luz NeoPixelBus</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-20-WS2813-Mini-p-4271.html">Grove - Barra de LED RGB (20-WS2813 Mini)</a></td>
  <td>Luz</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">Luz NeoPixelBus</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-16-WS2813-Mini-p-4201.html">Grove - Anel de LED RGB (16-WS2813 Mini)</a></td>
  <td>Luz</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">Luz NeoPixelBus</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-15-WS2813-Mini-p-4270.html">Grove - Barra de LED RGB (15-WS2813 Mini)</a></td>
  <td>Luz</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">Luz NeoPixelBus</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-Ultimate-RGB-LED-Ring-p-4203.html">Grove - Anel de LED RGB Ultimate</a></td>
  <td>Luz</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">Luz NeoPixelBus</a></td>
</tr>
</tbody>
</table>

Agora vamos selecionar 6 módulos Grove da tabela acima e explicar como eles podem ser conectados com ESPHome e Home Assistant.

### Grove - Sensor de Temperatura e Umidade (AHT20)

#### Configuração de instalação

- **Passo 1.** Conecte o [Grove - Sensor de Temperatura e Umidade (AHT20)](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html) a um dos conectores I2C no Grove Shield para Seeed Studio XIAO

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png" /></div>

- **Passo 2.** Dentro do arquivo **xiao-esp32c3.yaml** que criamos antes, adicione o seguinte ao final do arquivo e envie por OTA para o XIAO ESP32C3

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: aht10
    variant: AHT20
    temperature:
      name: "Temperature"
    humidity:
      name: "Humidity"
```

Você pode aprender mais sobre o **componente AHT10** [aqui](https://esphome.io/components/sensor/aht10.html). Ele permite que você use sensores baseados em **AHT10, AHT20** e **AHT21**. Aqui adicionamos o componente [Barramento I²C](https://esphome.io/components/i2c.html) porque o AHT20 se comunica usando o protocolo I2C.

#### Visualizar no Painel

- **Passo 1.** Na página **Overview** do Home Assistant, clique nos **3 pontos** e clique em **Edit Dashboard**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/30.png" /></div>

- **Passo 2.** Clique em **+ ADD CARD**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/31.png" /></div>

- **Passo 3.** Selecione **By ENTITY**, digite **temperature** e selecione a **caixa de seleção** ao lado de **Temperature**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/ESPHome/32.png" /></div>

- **Passo 4.** Repita o mesmo para **Humidity**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/ESPHome/33.png" /></div>

- **Passo 5.** Clique em **CONTINUE**

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/ESPHome/34.png" /></div>

- **Passo 6.** Clique em **ADD TO DASHBOARD**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/35.png" /></div>

Agora o seu painel do Home Assistant ficará como abaixo

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/37.png" /></div>

- **Passo 7.** Você também pode visualizar os dados do sensor como medidores. Clique em **Gauge** em **BY CARD**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/39.png" /></div>

- **Passo 8.** Selecione **Temperature** no menu suspenso

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/42.png" /></div>

- **Passo 9.** Clique em **SAVE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/43.png" /></div>

- **Passo 10.** Repita o mesmo para **Humidity**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/44.png" /></div>

Agora o seu painel ficará como abaixo

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/45.png" /></div>

Para o **Grove - Sensor de Gás VOC e eCO2 (SGP30)** e o **Grove - Sensor de CO2 & Temperatura & Umidade (SCD41)** neste wiki, você pode seguir um procedimento semelhante para visualizar os dados do sensor no painel

### Grove - Sensor de Gás VOC e eCO2 (SGP30)

#### Configuração de instalação

- **Passo 1.** Conecte o [Grove - Sensor de Gás VOC e eCO2 (SGP30)](https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-for-Arduino-SGP30.html) a um dos conectores I2C no Grove Shield para Seeed Studio XIAO

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png" /></div>

- **Passo 2.** Dentro do arquivo **xiao-esp32c3.yaml** que criamos antes, adicione o seguinte ao final do arquivo e envie por OTA para o XIAO ESP32C3

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: sgp30
    eco2:
      name: "eCO2"
      accuracy_decimals: 1
    tvoc:
      name: "TVOC"
      accuracy_decimals: 1
```

Você pode aprender mais sobre o **componente SGP30** [aqui](https://esphome.io/components/sensor/sgp30.html).

### Grove - Sensor de CO2 & Temperatura & Umidade (SCD41)

#### Configuração de instalação

- **Passo 1.** Conecte o [Grove - Sensor de CO2 & Temperatura & Umidade (SCD41)](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html) a um dos conectores I2C no Grove Shield para Seeed Studio XIAO

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png" /></div>

- **Passo 2.** Dentro do arquivo **xiao-esp32c3.yaml** que criamos antes, adicione o seguinte ao final do arquivo e envie por OTA para o XIAO ESP32C3

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: scd4x
    co2:
      name: "CO2"
    temperature:
      name: "Temperature"
    humidity:
      name: "Humidity"
```

Você pode aprender mais sobre o **componente SGP4x** [aqui](https://esphome.io/components/sensor/scd4x.html)

### Grove - Relé

#### Configuração de instalação

- **Passo 1.** Conecte o [Grove - Relay](https://www.seeedstudio.com/Grove-Relay.html) a uma das portas **Digital** no Grove Shield para Seeed Studio XIAO. Aqui selecionamos a porta **D0**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png" /></div>

- **Passo 2.** Dentro do arquivo **xiao-esp32c3.yaml** que criamos antes, adicione o seguinte ao final do arquivo e envie OTA para o XIAO ESP32C3

```sh
switch:
  - platform: gpio
    pin: 2
    name: "Relay"
```

Você pode aprender mais sobre o **componente Relay** [aqui](https://esphome.io/cookbook/relay.html)

#### Visualizar no Dashboard

- **Passo 1.** Em **+ ADD CARD** que mencionamos antes, selecione **BY ENTITY**, digite **relay**, selecione-o e clique em **CONTINUE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/55.png" /></div>

- **Passo 2.** Clique em **ADD TO DASHBOARD**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/56.png" /></div>

Agora você pode ligar e desligar o relé (**ON/OFF**) usando o interruptor de alternância

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/57.jpg" /></div>

### Grove - mini PIR motion sensor

#### Configuração de instalação

- **Passo 1.** Conecte o [Grove - mini PIR motion sensor](https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html) a uma das portas **Digitais** no Grove Shield para Seeed Studio XIAO. Aqui selecionamos a porta **D0**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png" /></div>

- **Passo 2.** Dentro do arquivo **xiao-esp32c3.yaml** que criamos antes, adicione o seguinte ao final do arquivo e envie OTA para o XIAO ESP32C3

```sh
binary_sensor:
  - platform: gpio
    pin: 2
    name: "PIR Sensor"
    device_class: motion
```

Você pode aprender mais sobre o **componente PIR** [aqui](https://esphome.io/cookbook/pir.html)

#### Visualizar no Dashboard

- **Passo 1.** Em **+ ADD CARD** que mencionamos antes, selecione **BY ENTITY**, digite **pir**, selecione-o e clique em **CONTINUE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/58.png" /></div>

- **Passo 2.** Clique em **ADD TO DASHBOARD**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/59.png" /></div>

Agora, se um movimento for detectado, será exibido como **Detected**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/60.png" /></div>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
