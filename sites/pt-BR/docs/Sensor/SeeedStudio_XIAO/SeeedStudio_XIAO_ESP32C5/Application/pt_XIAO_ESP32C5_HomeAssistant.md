---
title: Conectar o Seeed Studio XIAO ESP32-C5 ao Home Assistant
description: ''
keywords:
  - xiao
  - esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_homeassistant
last_update:
  date: 12/17/2025
  author: Zeller
  sidebar_position: 0
createdAt: '2025-12-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_homeassistant/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Conectando o XIAO ESP32-C5 ao Home Assistant

Este tutorial da wiki irá demonstrar como conectar o Seeed Studio XIAO ESP32-C5 ao Home Assistant, bem como como controlar dispositivos ou transmitir dados após conectar módulos Grove ao XIAO ESP32-C5. Então, vamos começar!

## Introdução ao [Home Assistant](https://www.home-assistant.io/)

Home Assistant é uma poderosa plataforma de automação residencial de código aberto que permite controlar e monitorar seus dispositivos de casa inteligente a partir de uma interface única e unificada. Ele atua como o hub central da sua casa inteligente, permitindo automatizar rotinas, monitorar sensores e criar um ambiente doméstico mais inteligente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Saiba Mais 🖱️</font></span></strong></a>
</div>

## Integração com [ESPHome](https://esphome.io/)

ESPHome é uma ferramenta de criação de firmware de código aberto especificamente projetada para dispositivos ESP8266 / ESP32. Ela permite criar firmwares personalizados usando simples arquivos de configuração YAML, que podem então ser gravados no seu dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:600, height:'auto'}}/></div>
<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://esphome.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Saiba Mais 🖱️</font></span></strong></a>
</div>

## Método 1: Usando ESPHome

Este exemplo irá se conectar ao Home Assistant via ESPHome.

### Preparação de Hardware

Você precisa preparar os itens listados na tabela.

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32-C5</th>
      <th>Seeed Studio Grove Base para XIAO</th>
      <th>Grove - LED Vermelho</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg" style={{width:400, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Confira Mais 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### Instalar o Firmware

Se você ainda não configurou o Home Assistant, pode clicar neste link e seguir o tutorial oficial do Home Assistant para concluir a configuração. [Home Assistant Installation](https://www.home-assistant.io/installation/)

**Passo 1.** Instalar ESPHome<br/>

Se você já instalou o ESPHome, pode pular esta etapa.

- Vá para **Settings** -> **Add-ons**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/01.png" style={{width:800, height:'auto'}}/></div>

- **ADD-ON STORE** -> **Search ESPHome**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/02.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/03.png" style={{width:800, height:'auto'}}/></div>

- Inicie o ESPHome

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
Certifique-se de que a versão do ESPHome que você instalou seja **maior ou igual a 25.11.5**; caso contrário, talvez ele não ofereça suporte ao XIAO ESP32-C5.
:::

**Passo 2.** Adicionar novo dispositivo

Vá para o ESPHome e clique no botão **Add New Device** no canto inferior direito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device1.png" style={{width:800, height:'auto'}}/></div>
<br/>
Adicione um novo dispositivo e dê o nome **XIAO ESP32-C5**.
<br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_2.png" style={{width:800, height:'auto'}}/></div><br/>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_3.png" style={{width:'90%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3.png" style={{width:'100%', height:'auto'}}/></div>
</div>

**Passo 3.** Instalar o firmware

<details>
<summary>Configuração de Arquivo YAML de Referência</summary>

:::tip
Você precisa modificar os parâmetros para corresponder aos do seu dispositivo, como a chave da API, SSID, senha e assim por diante. Além disso, o XIAO ESP32-C5 suporta WiFi dual-band (2,4 GHz e 5 GHz), o que significa que você pode conectá-lo ao roteador de 5 GHz da sua casa.
:::

```yaml
esphome:
  name: xiao-esp32-c5
  friendly_name: XIAO ESP32-C5

esp32:
  board: esp32-c5-devkitc-1
  variant: esp32c5
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: 

ota:
  - platform: esphome
    password: 

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32-C5 Fallback Hotspot"
    password: 

captive_portal:
  # Example configuration entry
output:
  - platform: gpio
    pin: GPIO1
    id: led_gpio_output
    inverted: false

switch:
  - platform: output
    name: "LED Switch"
    output: led_gpio_output
    id: dev_board_led
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_4.png" style={{width:800, height:'auto'}}/></div>

Clique em **INSTALL** para instalar o código no dispositivo e você verá a seguinte imagem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_5.png" style={{width:800, height:'auto'}}/></div>

<Tabs>
<TabItem value='Install through browser'>

:::tip
Se o seu Host do Home Assistant (Raspberry PI/Green/Yellow etc.) estiver longe de você, recomendamos usar este método. Você pode instalar com o computador que tiver em mãos.
:::

Primeiro, você precisa clicar em **Manual download** para baixar o firmware compilado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

Abra este site onde iremos enviar o firmware para o XIAO ESP32-C5.<br/>
[ESPHome dashboard_install](https://web.esphome.io/?dashboard_install)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_4.png" style={{width:800, height:'auto'}}/></div>
<br/>
Volte para o ESPHome para baixar o firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>
<br/>
Selecione o formato Factory.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

Use um cabo USB para **conectar o dispositivo ao seu computador** e clique em **CONNECT**.<br/>
[ESPHome dashboard_install](https://web.esphome.io/?dashboard_install)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>
<br/>
Selecione usbmodemxxx (no Windows é COMxxx) e clique em connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

Clique em **INSTALL** e selecione o firmware que você acabou de baixar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through host'>

:::tip
Se o seu Host do Home Assistant (Raspberry PI/Green/Yellow etc.) estiver próximo, recomendamos usar este método, pois é mais simples.
:::

Antes de instalar o código no dispositivo, você precisa usar um cabo USB para **conectar este dispositivo ao seu Raspberry Pi ou HA Green(Yellow) etc** que está executando o Home Assistant.

Clique nas opções conforme a imagem para instalar o código no dispositivo.

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'120%', height:'auto'}}/></div>
</div>

Aguarde um momento e você verá o retorno como na imagem a seguir. Isso significa que o código está sendo executado com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device6.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through Wi-Fi'>

:::tip
Esta é a maneira mais simples, mas com a premissa de que, ao instalar o programa pela primeira vez, você deve primeiro enviar o programa para o ePaper Panel usando o método à esquerda. Depois disso, você pode enviá-lo via wifi. Além disso, certifique-se de que sua configuração YAML inclua as seções `ota` e `api` devidamente configuradas com chaves de criptografia válidas para que esse método funcione.
:::

Dessa forma, você não precisa conectar o XIAO ESP32-C5 a nada, apenas certifique-se de que ele esteja online.

Clique na opção e então o firmware será instalado automaticamente no ePaper panel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

Aguarde um momento e você verá o retorno como na imagem a seguir. Se falhar, pode ser devido a um sinal fraco. Por favor, aproxime o dispositivo do seu roteador.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device7.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

**Etapa 4.** Adicionar Dispositivo

- Navegue até **Settings** → **Devices & services**

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_1.png" style={{width:800, height:'auto'}}/></div>

- ESPHome Device -> Add.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_6.png" style={{width:800, height:'auto'}}/></div>

- Se você optou por adicionar uma chave secreta, você precisa inseri-la, ela pode ser encontrada no arquivo YAML que você criou.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_7.png" style={{width:800, height:'auto'}}/></div>

- A tela a seguir será exibida após uma adição bem-sucedida.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_8.png" style={{width:800, height:'auto'}}/></div>

### Exibir no Dashboard

**Etapa 1.**  Abra Overview -> Clique em Edit no canto superior direito

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_9.png" style={{width:800, height:'auto'}}/></div>

**Etapa 2.** Crie uma seção e nomeie-a **LED Control** -> Adicione o Card

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_10.png" style={{width:800, height:'auto'}}/></div>

**Etapa 3.** Adicionar por entidade -> Pesquise **XIAO ESP32-C5** -> Continue

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_11.png" style={{width:800, height:'auto'}}/></div>

**Etapa 4.** Selecione **Add to dashboard** na janela pop-up -> Clique em **Done** no canto superior direito para concluir a adição.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_12.png" style={{width:800, height:'auto'}}/></div>

- Os efeitos são os seguintes:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_13.png" style={{width:800, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_effect_1.gif" style={{width:800, height:'auto'}}/></div>

## Método 2: [Seeed Home Assistant Discovery](https://github.com/limengdu/Seeed-Homeassistant-Discovery)

- **Seeed HA Discovery** é uma solução completa para conectar facilmente dispositivos ESP32/nRF52840 ao Home Assistant, fornecida pela [Seeed Studio](https://www.seeedstudio.com/).<br/>
- Com apenas algumas linhas de código na Arduino IDE ou PlatformIO para suas placas de desenvolvimento da série XIAO, você pode se conectar ao Home Assistant via WiFi ou BLE.<br/>
- Aqui usaremos um exemplo de leitura de um sensor de temperatura e umidade de estufa para mostrar como usar o Seeed Home Assistant Discovery para conectar o XIAO ESP32-C5 ao Home Assistant.

### Preparação de Hardware

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32-C5</th>
      <th>Seeed Studio Grove Base for XIAO</th>
      <th>Grove - Temperature & Humidity Sensor (DHT11)</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-temperature-humidity-sensor-dht11-preview.png" style={{width:400, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Saiba Mais 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### Instalar HACS  Instagram

Antes de adicionar a integração **Seeed Home Assistant Discovery**, você precisa instalar o **HACS** primeiro.

Etapas de Instalação:

1. Settings -> Devices & services -> Add integration -> Pesquise **HACS**

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/hacs_1.png" style={{width:800, height:'auto'}}/></div>

2. Selecione todas as opções -> Submit

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/hacs_2.png" style={{width:800, height:'auto'}}/></div>

3. Clique no hiperlink e copie o código de ativação contido nele.

4. Insira o código de ativação mencionado anteriormente

5. Volte ao HomeAssistant -> Developer tools -> Reboot system

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/hacs_3.png" style={{width:800, height:'auto'}}/></div>

6. A barra de navegação à esquerda exibirá HACS

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/hacs_4.png" style={{width:800, height:'auto'}}/></div>

### Instalar Integração

- Instalação com um clique via HACS (Recomendado)

1. Abra HACS -> Integrations:

    <!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_1.png" style={{width:800, height:'auto'}}/></div> -->

2. Clique no ícone **⋮** no canto superior direito -> **Custom repositories**

      <!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_2.png" style={{width:800, height:'auto'}}/></div> -->

3. Insira `https://github.com/limengdu/Seeed-Homeassistant-Discovery`, selecione a categoria **Integration**

    <!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_3.png" style={{width:800, height:'auto'}}/></div> -->

4. Clique em Add, depois pesquise por **Seeed HA Discovery** e instale

      <!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_4.png" style={{width:800, height:'auto'}}/></div> -->

5. Reinicie o Home Assistant

### Instalar Biblioteca Arduino

#### Instalar a Biblioteca de Dependência WiFi

- Para Arduino IDE

1. Baixe a pasta `arduino/SeeedHADiscovery`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Homeassistant-Discovery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

2. Copie para `C:\Users\yourname\Documents\Arduino\libraries\`

3. ArduinoJson (por Benoit Blanchon)

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_5.png" style={{width:800, height:'auto'}}/></div>

4. WebSockets (por Markus Sattler)

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_6.png" style={{width:800, height:'auto'}}/></div>

- Para PlatformIO

```ini
lib_deps =
    bblanchon/ArduinoJson@^7.0.0
    links2004/WebSockets@^2.4.0
```

#### Instalar a Biblioteca de Dependência BLE

- Para Arduino IDE

1. Baixe a pasta `arduino/SeeedHADiscoveryBLE`

2. Copie para `C:\Users\yourname\Documents\Arduino\libraries\`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Homeassistant-Discovery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

3. NimBLE-Arduino

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_7.png" style={{width:800, height:'auto'}}/></div>

- Para PlatformIO

```ini
lib_deps =
    h2zero/NimBLE-Arduino@^1.4.0
```

### Escrever Programa Arduino

Escolha a versão correspondente de acordo com suas necessidades reais.

<Tabs>
<TabItem value='WiFi Version Code'>

```cpp
#include <SeeedHADiscovery.h>

const char* WIFI_SSID = "Your WiFi Name";
const char* WIFI_PASSWORD = "Your WiFi Password";

SeeedHADiscovery ha;
SeeedHASensor* tempSensor;
SeeedHASensor* humiditySensor;

void setup() {
    Serial.begin(115200);
    ha.setDeviceInfo("Living Room Sensor", "ESP32-C5", "1.0.0");
    ha.enableDebug(true);

    if (!ha.begin(WIFI_SSID, WIFI_PASSWORD)) {
        Serial.println("WiFi connection failed!");
        while (1) delay(1000);
    }

    tempSensor = ha.addSensor("temperature", "Temperature", "temperature", "°C");
    tempSensor->setPrecision(1);

    humiditySensor = ha.addSensor("humidity", "Humidity", "humidity", "%");
    humiditySensor->setPrecision(0);
}

void loop() {
    ha.handle();

    static unsigned long lastUpdate = 0;
    if (millis() - lastUpdate > 5000) {
        lastUpdate = millis();
        tempSensor->setValue(25.5);
        humiditySensor->setValue(55);
    }
}
```

Depois de enviar o código, abra o monitor serial. Assim que a conexão WiFi for bem-sucedida, o endereço IP correspondente será impresso.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_8.png" style={{width:800, height:'auto'}}/></div>

:::tip
XIAO ESP-C5 suporta WiFi de banda dupla (2,4 GHz & 5 GHz).<br/>
Se você achar a configuração manual de rede muito trabalhosa, também pode usar a página de gravação de firmware que lançamos: [Web Firmware Flasher](https://limengdu.github.io/Seeed-Homeassistant-Discovery/flasher/)
:::

</TabItem>

<TabItem value=' BLE Version Code'>

```cpp
#include <SeeedHADiscoveryBLE.h>

SeeedHADiscoveryBLE ble;
SeeedBLESensor* tempSensor;
SeeedBLESensor* humiditySensor;
SeeedBLESensor* batterySensor;

void setup() {
    Serial.begin(115200);
    ble.enableDebug(true);

    if (!ble.begin("XIAO Temperature Sensor")) {
        Serial.println("BLE initialization failed!");
        while (1) delay(1000);
    }

    // Use BTHome standard sensor types
    tempSensor = ble.addTemperature();
    humiditySensor = ble.addHumidity();
    batterySensor = ble.addBattery();
}

void loop() {
    // Set sensor values
    tempSensor->setValue(25.5f);      // Temperature 25.5°C
    humiditySensor->setValue(55.0f);  // Humidity 55%
    batterySensor->setValue(100.0f);    // Battery 100%

    // Send BLE broadcast
    ble.advertise();

    // Wait 10 seconds (BLE is suitable for low frequency updates)
    delay(10000);
}
```

Depois de enviar o código, abra o monitor serial, e as informações de Bluetooth do XIAO ESP32-C5 serão exibidas.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_9.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

### Adicionar Dispositivo no Home Assistant

<Tabs>
<TabItem value='WiFi Device'>

Ele será descoberto automaticamente! Ou adicione manualmente:

1. Vá para **Settings** -> **Devices & Services**

2. Clique em **Add Integration**

3. Procure por **Seeed HA Discovery**

4. Insira o endereço IP do ESP32

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_10.png" style={{width:800, height:'auto'}}/></div>

</TabItem>

<TabItem value='BLE Device'>

Ele usa o protocolo BTHome e será automaticamente descoberto pelo Home Assistant!

1. Certifique-se de que o HA tenha um adaptador Bluetooth ou um proxy Bluetooth ESP32

2. O dispositivo aparecerá automaticamente em Settings -> Devices & Services -> BTHome

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_11.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Demonstração de Efeito

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_12.png" style={{width:800, height:'auto'}}/></div>
<br/>
Parabéns! Até agora, você já deve ter dominado dois métodos para conectar o **XIAO ESP32-C5** ao **Home Assistant**. Estamos ansiosos para ver seus projetos incríveis e convidamos você a compartilhá-los conosco!

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
