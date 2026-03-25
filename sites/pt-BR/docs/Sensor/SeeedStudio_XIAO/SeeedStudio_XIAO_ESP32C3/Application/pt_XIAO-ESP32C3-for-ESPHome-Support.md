---
description: ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3
title: Suporte ESPHome no Seeed Studio XIAO ESP32C3
keywords:
  - ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /XIAO-ESP32C3-for-ESPHome-Support
sku: 113991054,110061541,102010633
last_update:
  date: 10/20/2023
  author: Zachary
createdAt: '2023-10-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/XIAO-ESP32C3-for-ESPHome-Support/
---

# XIAO ESP32C3 conectando com Home Assistant via ESPHome (todas as portas suportadas)

<!-- # ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3 -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/43.png"style={{width:900, height:'auto'}}/></div>

Este wiki irá guiá-lo passo a passo sobre como conectar o [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html) com o ESPHome rodando no Home Assistant e enviar dados de sensores/controlar dispositivos após conectar módulos Grove ao XIAO ESP32C3. Apliquei todos os tipos de portas aqui, incluindo **digital, analógica, IIC, SPI e UART**. Vamos começar!

## O que são ESPHome e Home Assistant?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:900, height:'auto'}}/></div>

[ESPHome](https://esphome.io/) é uma ferramenta que visa tornar o gerenciamento das suas placas ESP o mais simples possível. Ela lê um arquivo de configuração YAML e cria firmware personalizado que instala no seu dispositivo ESP. Dispositivos ou sensores adicionados na configuração do ESPHome aparecerão automaticamente na interface do Home Assistant. O ESPHome pode ajudá-lo a conectar e enviar dados para dispositivos Home Assistant.

## Preparação de Hardware

Estou usando o XIAO ESP32C3 como placa de controle, usando o [reRouter](https://www.seeedstudio.com/reRouter-CM4102032-p-5734.html) como hardware aqui, juntamente com múltiplos sensores Grove.

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Placa de Expansão Seeed Studio</th>
      <th>Dispositivos Home Assistant</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/home_assistant_topic/#-devices-for-home-assistant-" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Ver Mais 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

**Sensores Grove**

- [Grove - Sensor de Temperatura e Umidade (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)
- [Grove - Sensor Inteligente de Qualidade do Ar (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html)
- [Grove - Microfone Analógico](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html)
- [Grove - Sensor PIR Digital](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)

## Preparação de Software

### Instalar o Home Assistant

Certifique-se de que você já tem o Home Assistant em funcionamento. Existem vários wikis apresentando como instalar o Home Assistant nos [produtos](https://wiki.seeedstudio.com/pt-br/home_assistant_topic/#-devices-for-home-assistant-) aqui. Estou usando o reRouter que é alimentado pelo Raspberry Pi CM4, então posso [usar diretamente o oficial para instalar o SO no reRouter](https://www.home-assistant.io/installation/raspberrypi).

### Instalar ESPHome no Home Assistant

O ESPHome está disponível como um **Add-On do Home Assistant** e pode ser instalado simplesmente pela loja de complementos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png" style={{width:900, height:'auto'}}/></div>

<!-- - **Step 1.** To quickly setup ESPHome on Home Asssistant, click the below button -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/4.png"style={{width:300, height:'auto'}}/></div> -->
<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/4.png" style={{width:300, height:'auto'}}/></div> -->

<!-- - **Step 2.** Once you see the following pop-up, click **OPEN LINK** -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/5.png"style={{width:300, height:'auto'}}/></div> -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/5.png" style={{width:300, height:'auto'}}/></div> -->

- **Passo 1.** Clique em **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **Passo 2.** Ative todas as opções e clique em **START**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

<!-- - **Step 3.** Click **OPEN WEB UI** or **ESPHOME from the side-panel** -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/8.png"style={{width:700, height:'auto'}}/></div> -->

Você verá a seguinte janela se o ESPHome for carregado com sucesso

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

## Primeiros Passos

Assim que todo o software e hardware estiverem prontos, podemos começar.

### 1. Adicionar o Seeed Studio XIAO ESP32C3 ao ESPHome

- **Passo 1.** Clique em **+ NEW DEVICE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

- **Passo 2.** Clique em CONTINUE

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

- **Passo 3.** Insira um **Nome** para o dispositivo e insira as credenciais WiFi como **Nome da rede** e **Senha**. Em seguida, clique em **NEXT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/7.png" style={{width:900, height:'auto'}}/></div>

- **Passo 4.** Selecione **ESP32-C3** e clique

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/8.png" style={{width:900, height:'auto'}}/></div>

- **Passo 5.** Clique em **SKIP** porque iremos configurar esta placa manualmente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

- **Passo 6.** Clique em **EDIT** abaixo da placa recém-criada

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/9.png" style={{width:900, height:'auto'}}/></div>

- **Passo 7.** Isso abrirá um arquivo **YAML** e este arquivo será usado para definir todas as configurações da placa. Edite o conteúdo em **esp32** conforme abaixo

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:
  password: "Your password"

ota:
  password: "Your password"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "Your Password"
```

:::note Aqui estamos usando a versão mais recente do [Arduino core](https://github.com/espressif/arduino-esp32/releases) para ESP32 e o [suporte ESP32 para PlatformIO](https://github.com/platformio/platform-espressif32/releases)
:::

- **Passo 8.** Clique em **SAVE** e depois clique em **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/10-2.png" style={{width:900, height:'auto'}}/></div>

- **Passo 9.** Conecte uma extremidade de um cabo USB Tipo-C ao Seeed Studio XIAO ESP32C3 e a outra extremidade a uma das portas USB no reRouter CM4 1432

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/17.png" style={{width:900, height:'auto'}}/></div>

- **Passo 10.** Clique em **Plug into the computer running ESPHome Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/12-1.png" style={{width:900, height:'auto'}}/></div>

- **Passo 11.** Selecione a porta conectada. Provavelmente será ```/dev/ttyACM1``` porque ```/dev/ttyACM0``` está conectado ao reRouter CM4 1432

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/13-1.png" style={{width:900, height:'auto'}}/></div>

:::tip
É melhor usar Wi-Fi 2.4GHz
:::

Agora ele irá baixar todos os pacotes de placa necessários e gravar o firmware ESPHome no XIAO ESP32C3. Se a gravação for bem-sucedida, você verá a seguinte saída. Se aparecer algum erro, tente reiniciar seu XIAO ESP32C3 ou entre no modo bootloader segurando o BOTÃO BOOT e conecte o XIAO ESP32C3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/20.png" style={{width:900, height:'auto'}}/></div>

- **Passo 12.** A janela acima exibe os logs em tempo real da placa conectada. Feche-a clicando em **STOP**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/14.png" style={{width:900, height:'auto'}}/></div>

- **Passo 13.** Se você ver o status da placa como **ONLINE**, significa que a placa foi conectada com sucesso ao WiFi

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/15.png" style={{width:900, height:'auto'}}/></div>

- **Passo 14.** Vá para **Settings** e selecione **Devices & Services**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/19.png" style={{width:900, height:'auto'}}/></div>

- **Passo 15.** Você verá o **ESPHome** como uma integração descoberta. Clique em **CONFIGURE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/20.png"style={{width:900, height:'auto'}}/></div>

- **Passo 16.** Clique em **SUBMIT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/21.png"style={{width:900, height:'auto'}}/></div>

- **Passo 17.** Insira sua senha. Esta é a senha da API que você pode encontrar no **PASSO 8**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/22.png"style={{width:900, height:'auto'}}/></div>

- **Passo 18.** Clique em **FINISH**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/23.png"style={{width:900, height:'auto'}}/></div>

### 2. Conectar Módulos Grove e Enviar os Dados

Agora vamos conectar módulos Grove ao Seeed Studio XIAO ESP32C3 para que possamos exibir dados de sensores ou controlar dispositivos usando o Home Assistant!

### Conhecimento de Desenvolvimento

#### Placa de Expansão XIAO

Para usar módulos Grove com o Seeed Studio XIAO ESP32C3, utilizaremos uma [Base de Expansão Seeed Studio para XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) e conectaremos o XIAO ESP32C3 nela.

Depois disso, os conectores Grove na placa podem ser usados para conectar módulos Grove. Aqui estão as definições de pinos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:900, height:'auto'}}/></div>

#### Definições de Pinos

Você precisa seguir o gráfico abaixo para usar os números de pinos internos apropriados ao conectar os módulos Grove aos conectores Grove no Grove Shield para Seeed Studio XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pin_map.png"style={{width:900, height:'auto'}}/></div>

Por exemplo, se você quiser conectar um módulo Grove à porta D0, precisará definir o pino no ESPHome como GPIO2

#### Lista de Compatibilidade Grove com ESPHome

Atualmente os seguintes módulos Grove são suportados pelo ESPHome. Verifique [aqui](https://esphome.io/components/sensor/index.html#see-also)

### 3. Conexão Grove e Transmissão de Dados

Agora vamos selecionar alguns módulos Grove e explicar como eles podem ser conectados com ESPHome e Home Assistant.

#### Grove - Sensor de Temperatura e Umidade (DHT20)

Este sensor de Temperatura e Umidade fornece uma saída digital pré-calibrada. Um elemento sensor capacitivo exclusivo mede a umidade relativa e a temperatura é medida por um termistor de coeficiente de temperatura negativo (NTC). Possui excelente confiabilidade e estabilidade a longo prazo. [Clique aqui](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html) para adquirir.

##### Configuração

- **Passo 1.** Conecte o Grove - DHT20 a um dos conectores I2C na Base de Expansão Seeed Studio para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pic1.png"style={{width:300, height:'auto'}}/></div>

- **Passo 2.** Dentro do arquivo **xiao-esp32c3.yaml** que criamos anteriormente, altere o arquivo e envie via OTA para o XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

api:
  password: "F4MQG/rBhNmqP8Nud+AJ+5CYu7LuIhIFTOcRwOm5Nw4="

ota:
  password: "999afa1f8a07e85959a9f89f8f6aebb2"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "YtpCwOqLoYlp"

captive_portal:

# 0x28 is the I2C address of DHT20
i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_0x38

sensor:
  - platform: aht10
    temperature:
      name: "Living Room Temperature"
    humidity:
      name: "Living Room Humidity"
    update_interval: 60s
```

Você pode aprender mais sobre o [componente DHT20](https://esphome.io/components/sensor/aht10) aqui. Aqui adicionamos o componente de Barramento I²C porque o DHT20 se comunica usando o protocolo I2C.

##### Visualizar no Painel

- **Passo 1.** Na página de Visão Geral do Home Assistant, clique nos 3 pontos e clique em **Edit Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/35.png"style={{width:900, height:'auto'}}/></div>

- **Passo 2.** Clique em **+ ADD CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/36.png"style={{width:900, height:'auto'}}/></div>

- **Passo 3.** Selecione **By ENTITY**, digite **temperature** e selecione a **caixa de seleção** ao lado de **Temperature**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/37.png"style={{width:900, height:'auto'}}/></div>

- **Passo 4.** Clique em **ADD TO DASHBOARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/38.png"style={{width:900, height:'auto'}}/></div>

- **Passo 5.** Você também pode visualizar os dados do sensor como medidores. Clique em **Gauge** em **BY CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/37-1.png"style={{width:900, height:'auto'}}/></div>

Agora seu painel do Home Assistant ficará como abaixo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/39.png"style={{width:900, height:'auto'}}/></div>

#### Grove - Sensor de Luz (LS06-S)

O Grove - Sensor de Luz v1.2 é um módulo analógico e pode emitir vários sinais elétricos que podem ser convertidos para diferentes faixas. Ele integra um fotoresistor LS06-S, um fotodiodo altamente sensível e confiável, para detectar a intensidade da luz no ambiente. É um módulo sensor de luz Arduino perfeito para medição de luz, detecção de luz e um interruptor controlado por luz.

[Clique aqui](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html) para adquirir.

##### Configuração

- **Passo 1.** Conecte o Grove - Sensor de Luz a um dos conectores Analógico/Digital na Base de Expansão Seeed Studio para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pic2.png"style={{width:300, height:'auto'}}/></div>

- **Passo 2.** Dentro do arquivo **xiao-esp32c3.yaml** que criamos anteriormente, altere o arquivo e envie via OTA para o XIAO ESP32C3

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/41-1.png"style={{width:900, height:'auto'}}/></div>

Você verá este resultado se tudo correr bem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/42.png"style={{width:900, height:'auto'}}/></div>

##### Visualizar no Painel

- **Passo 1.** Na página de Visão Geral do Home Assistant, clique nos 3 pontos e clique em **Edit Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/35.png"style={{width:900, height:'auto'}}/></div>

- **Passo 2.** Clique em **+ ADD CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/36.png"style={{width:900, height:'auto'}}/></div>

- **Passo 3.** Selecione **By ENTITY**, selecione o **Light Sensor**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/43.png"style={{width:900, height:'auto'}}/></div>

- **Passo 4.** Selecione **PICK DIFFERENT CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/44.png"style={{width:900, height:'auto'}}/></div>

- **Passo 5.** Selecione **Gauge**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/45.png"style={{width:900, height:'auto'}}/></div>

- **Passo 6.** Defina o mínimo e o máximo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/46.png"style={{width:900, height:'auto'}}/></div>

- **Passo 7.** Em seguida, você verá o valor do sensor de luz no seu painel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/47.png"style={{width:900, height:'auto'}}/></div>

<!-- #### Grove - Sensor de Temperatura e Umidade (BME680)

O Grove-Sensor de Temperatura, Umidade, Pressão e Gás (BME680) é um sensor multifuncional que pode medir temperatura, pressão, umidade e gás ao mesmo tempo. É baseado no módulo BME680 e você pode usar este sensor em seus dispositivos GPS, IoT ou outros dispositivos que precisem desses quatro parâmetros. [Clique aqui](https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html) para adquirir.

##### Configuração

- **Passo 1.** Conecte o Grove - [Sensor de Temperatura, Umidade, Pressão e Gás (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html) a um dos conectores I2C na Seeed Studio Expansion Base para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/30.jpg"style={{width:700, height:'auto'}}/></div>

- **Passo 2.** Dentro do arquivo **xiao-esp32c3.yaml** que criamos anteriormente, altere o arquivo e envie via OTA para o XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:
  password: "Your password"

ota:
  password: "Your password"

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

i2c:
  sda: GPIO6
  scl: GPIO7

sensor:
  - platform: bme680
    temperature:
      name: "BME680 Temperature"
      oversampling: 16x
    pressure:
      name: "BME680 Pressure"
    humidity:
      name: "BME680 Humidity"
    gas_resistance:
      name: "BME680 Gas Resistance"
    address: 0x76
    update_interval: 60s
```

Você pode aprender mais sobre o [componente BME680](https://esphome.io/components/sensor/bme680) aqui. Ele permite usar sensores baseados em BME280, BME680, BMP085, BMP280, AHT10, AHT20 e AHT21. Aqui adicionamos o componente de Barramento I²C porque o AHT20 se comunica usando o protocolo I2C.

##### Visualizar no Painel

- **Passo 1.** Na página de Visão Geral do Home Assistant, clique nos 3 pontos e clique em **Edit Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/31.png"style={{width:900, height:'auto'}}/></div>

- **Passo 2.** Clique em **+ ADD CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/32.png"style={{width:900, height:'auto'}}/></div>

- **Passo 3.** Selecione **By ENTITY**, digite **temperature** e marque a **caixa de seleção** ao lado de **Temperature**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/33.png"style={{width:900, height:'auto'}}/></div>

- **Passo 4.** Repita o mesmo para **Humidity**, **Gas Resitance** e **Pressure**

- **Passo 5.** Clique em **CONTINUE**

- **Passo 6.** Clique em **ADD TO DASHBOARD**

Agora seu painel do Home Assistant ficará como abaixo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/34.png"style={{width:900, height:'auto'}}/></div>

- **Passo 7.** Você também pode visualizar os dados do sensor como medidores. Clique em **Gauge** em **BY CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/35.png"style={{width:900, height:'auto'}}/></div>

- **Passo 8.** Selecione **Temperature** no menu suspenso

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/36.png"style={{width:900, height:'auto'}}/></div>

- **Passo 9.** Clique em **SAVE**

- **Passo 10.** Repita o mesmo para **Humidity**, **Gas Resitance** e **Pressure**

- Agora seu painel ficará como abaixo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/37.png"style={{width:900, height:'auto'}}/></div>
 -->

<!-- #### Grove - Sensor Inteligente de Qualidade do Ar (SGP41)

O sensor de gás digital SGP41 utiliza a tecnologia CMOSens® da Sensirion, que oferece um sistema de sensor completo e fácil de usar em um único chip. Ele pode medir a concentração de compostos orgânicos voláteis (VOCs) e óxidos de nitrogênio (NOx) no ar interno e fornece sinais de saída digitais. Além disso, este sensor possui excelente estabilidade a longo prazo e vida útil. [Clique aqui](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products) para adquirir.

##### Configuração

- **Passo 1.** Conecte o Grove - [Sensor Inteligente de Qualidade do Ar (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products) a um dos conectores I2C na Seeed Studio Expansion Base para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/38.jpg"style={{width:900, height:'auto'}}/></div>

- **Passo 2.** Dentro do arquivo **xiao-esp32c3.yaml** que criamos anteriormente, altere o arquivo e envie via OTA para o XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:
  password: "Your password"

ota:
  password: "Your password"

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

sensor:
  - platform: sgp4x
    voc:
      id: sgp41_voc
      name: "VOC Index"
    nox:
      id: sgp41_nox
      name: "NOx Index"

``` 

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:
  password: "Your password"

ota:
  password: "Your password"

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz
sensor:
  - platform: bme680
    temperature:
      id:  bme680_temp
      name: "BME680 Temperature"
      oversampling: 16x
    pressure:
      name: "BME680 Pressure"
    humidity:
      id: bme680_hum
      name: "BME680 Humidity"
    gas_resistance:
      name: "BME680 Gas Resistance"
    address: 0x76

  - platform: sgp4x
    voc:
      name: "VOC Index"
    nox:
      name: "NOx Index"
    compensation:
      humidity_source: bme680_hum
      temperature_source: bme680_temp
```
**Nota:** Este sensor precisará de 90 ciclos para coletar amostras de dados suficientes e o aviso não pode ser evitado por enquanto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/38.png"style={{width:700, height:'auto'}}/></div>

##### Visualizar no Painel

Veja anteriormente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/39.png"style={{width:700, height:'auto'}}/></div> -->

<!-- #### Grove - Microfone Analógico

O Grove - Microfone Analógico é baseado na tecnologia MEMS SiSonic de alto desempenho, oferecendo um microfone extremamente silencioso, de baixo consumo, confiável e pequeno para a indústria de hardware de código aberto, com desempenho aprimorado em condições adversas. [Clique aqui](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html) para adquirir.

##### Configuração

- **Passo 1.** Conecte o Grove - [Microfone Analógico](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html) ao conector A0 na Seeed Studio Expansion Base para XIAO

- **Passo 2.** Dentro do arquivo **xiao-esp32c3.yaml** que criamos anteriormente, altere o arquivo e envie via OTA para o XIAO ESP32C3
```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

binary_sensor:
  - platform: gpio
    pin: GPIO2
    name: "Sound level"
    device_class: sound
```

Você pode verificar mais informações sobre o [Componente de Sensor Binário](https://esphome.io/components/binary_sensor/index.html#binary-sensor-component)

##### Visualizar no Painel

Veja antes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/41.png"style={{width:700, height:'auto'}}/></div> -->

<!-- #### Grove - Sensor PIR Digital

O sensor PIR é um sensor IR para detectar movimentos humanos. Este Grove Digital PIR Sensor é o sensor PIR mais barato da família PIR, porém é capaz de responder rapidamente e gerar um sinal alto pelo pino "sig". [Clique aqui](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html) para adquirir.

##### Configuração

- **Passo 1.** Conecte o [Grove - Sensor PIR Digital](https://wiki.seeedstudio.com/pt-br/Grove-Digital-PIR-Sensor/) ao conector D7 na Seeed Studio Expansion Base para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/42.jpg"style={{width:700, height:'auto'}}/></div>

- **Passo 2.** Dentro do arquivo **xiao-esp32c3.yaml** que criamos anteriormente, altere o arquivo e envie via OTA para o XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

binary_sensor:
  - platform: gpio
    pin: GPIO20
    name: "PIR Sensor"
    device_class: motion
```

##### Visualizar no Painel

Veja antes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/43.png"style={{width:700, height:'auto'}}/></div> -->

<!-- #### Display (SSD1306) na Placa de Expansão XIAO

##### Configuração

- **Passo 1.** Baixe os arquivos de fonte para o display, [clique aqui](https://esphome.io/components/display/index.html#fonts) para referência

- **Passo 2.** Instale o "File editor" em **Setting** >>> **Add-ons** >>> **File editor**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/44.png"style={{width:700, height:'auto'}}/></div>

- **Passo 3.** Clique em **File editor** >>> Insira o caminho: **config/esphome** >>> **faça o upload** do seu arquivo de fonte

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/45.png"style={{width:700, height:'auto'}}/></div>

- **Passo 4.** Dentro do arquivo **xiao-esp32c3.yaml** que criamos anteriormente, altere o arquivo e envie via OTA para o XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

display:
  - platform: ssd1306_i2c
    model: "SSD1306 128x64"
    address: 0x3C
    lambda: |-
      it.print(0, 0, id(font), "Wi-fi Connected");

sensor:
  - platform: bme680
    temperature:
      id:  bme680_temp
      name: "BME680 Temperature"
      oversampling: 16x
    pressure:
      name: "BME680 Pressure"
    humidity:
      id: bme680_hum
      name: "BME680 Humidity"
    gas_resistance:
      name: "BME680 Gas Resistance"
    address: 0x76

  - platform: sgp4x
    voc:
      name: "VOC Index"
    nox:
      name: "NOx Index"
    compensation:
      humidity_source: bme680_hum
      temperature_source: bme680_temp

binary_sensor:
  - platform: gpio
    pin: GPIO20
    name: "PIR Sensor"
    device_class: motion

  - platform: gpio
    pin: GPIO2
    name: "Sound level"
    device_class: sound
```
 Você pode explorar mais sobre o componente de display que abriga o poderoso motor de renderização e exibição do ESPHome [clicando aqui.](https://esphome.io/components/display/#display-engine)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/46.jpg"style={{width:700, height:'auto'}}/></div> -->

## ✨ Projeto de Colaboradores

- Este projeto é apoiado pelo [Projeto de Colaboradores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) da Seeed Studio.
- Obrigado pelos [esforços do Zachary](https://github.com/Seeed-Studio/wiki-documents/issues/603) e seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/Honorary-Contributors/).

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
