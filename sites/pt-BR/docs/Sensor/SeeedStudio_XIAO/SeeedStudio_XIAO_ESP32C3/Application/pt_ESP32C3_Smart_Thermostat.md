---
description: XIAO ESP32C3 ESPHome Smart ThermoStat
title: Xiao ESP32C3 ESPHome Smart ThermoStat
keywords:
  - Contribution
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /esp32c3_smart_thermostat
last_update:
  date: 12/1/2023
  author: Chris (Echo7394)
createdAt: '2024-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/esp32c3_smart_thermostat/
---

# Xiao ESP32C3 ESPHome Smart ThermoStat

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/9.jpg" alt="pir" width={500} height="auto" /></p>

Este wiki irá guiá-lo passo a passo sobre como fazer um Xiao ESP32C3 ESPHome Smart ThermoStat. Vamos começar!

## Preparação de Hardware

Se você quiser seguir este tutorial do início ao fim, precisará preparar o seguinte.

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Placa de Expansão Seeed Studio</th>
      <th>Dispositivos Home Assistant <br /> ex.: Seeed Studio Home Assistant Yellow</th>
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
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora🖱️</font></span></strong>
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

<table align="center">
  <tbody><tr>
      <th>Grove - Sensor de Temperatura e Umidade Pro (DHT22/AM2302)</th>
      <th>Grove - Relé SPDT de 2 Canais</th>
      <th>Grove - Relé de Alta Corrente 5V/10A</th>
      <th>Grove - Display OLED 0.96" (SSD1315)</th>
      <th>Botões momentâneos (qualquer tipo serve)</th>
    </tr>
    <tr>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/2.jpg" alt="pir" width={210} height="auto" /></p></td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/3.jpg" alt="pir" width={210} height="auto" /></p></td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/4.jpg" alt="pir" width={210} height="auto" /></p></td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/5.jpg" alt="pir" width={210} height="auto" /></p></td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/8.jpg" alt="pir" width={400} height="auto" /></p></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-Pro-AM2302-DHT22.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

<!-- ### 1. Items Used

a. Seed Studio Xiao ESP32C3

<!-- ![image1](./1.jpg)
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/1.jpg" alt="pir" width={1000} height="auto" /></p>

b. Grove DHT22 Sensor

<!-- ![image2](./2.jpg)
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/2.jpg" alt="pir" width={1000} height="auto" /></p>

c. Grove 2 Channel Relay

<!-- ![image3](./3.jpg) 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/3.jpg" alt="pir" width={1000} height="auto" /></p>

d. Grove Single Channel Relay

<!-- ![image4](./4.jpg)
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/4.jpg" alt="pir" width={1000} height="auto" /></p>

e. Grove SSD1315 Module

<!-- ![image5](./5.jpg) 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/5.jpg" alt="pir" width={1000} height="auto" /></p>

f. (Optional) Seeed Studio Expansion Board

<!-- ![image6](./6.jpg) 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/6.jpg" alt="pir" width={1000} height="auto" /></p>

d. (Optional) [Seeed Studio Home Assistant Yellow](https://www.seeedstudio.com/Home-Assistant-Yellow-Kit-with-selectable-CM4-p-5680.html), or device of choice

<!-- ![image7](./7.jpg) 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/7.jpg" alt="pir" width={1000} height="auto" /></p>

e. Momentary buttons (Any kind will do)

<!-- ![image8](./8.jpg)
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/8.jpg" alt="pir" width={1000} height="auto" /></p> -->

## Preparação de Software

### Instalar o Home Assistant

Certifique-se de que o Home Assistant já está em funcionamento. Existem vários wikis explicando como instalar o Home Assistant nos [produtos](https://wiki.seeedstudio.com/pt-br/home_assistant_topic/#-devices-for-home-assistant-) disponíveis aqui. Estou usando o Home Assistant Yellow, que é alimentado pelo Raspberry Pi CM4, então posso [usar diretamente o oficial para instalar o sistema operacional no Home Assistant Yellow](https://yellow.home-assistant.io/power-supply/).

### Instalar o ESPHome no Home Assistant

O ESPHome está disponível como um **Add-On do Home Assistant** e pode ser instalado facilmente pela loja de complementos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/esphome.jpg" alt="pir" width={1000} height="auto" /></p>

- **Passo 1.** Clique em **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **Passo 2.** Ative todas as opções e clique em **START**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

Você verá a seguinte janela se o ESPHome for carregado com sucesso

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

## Primeiros Passos

Assim que todo o software e hardware estiverem prontos, podemos começar.

### 1. Adicionar o Seeed Studio XIAO ESP32C3 ao ESPHome

- **Passo 1.** Clique em **+ NEW DEVICE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

- **Passo 2.** Clique em CONTINUE

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

- **Passo 3.** Insira um **Nome** para o dispositivo e as credenciais WiFi, como **Nome da rede** e **Senha**. Em seguida, clique em **NEXT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/7.png" style={{width:900, height:'auto'}}/></div>

- **Passo 4.** Selecione **ESP32-C3** e clique

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/8.png" style={{width:900, height:'auto'}}/></div>

- **Passo 5.** Clique em **SKIP** porque configuraremos esta placa manualmente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

### 2. Criar e Enviar Configuração YAML

- **Passo 1.** Clique em **EDIT** na placa recém-criada

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/9.png" style={{width:900, height:'auto'}}/></div>

<!-- ### 2. Instalar Home Assistant e ESPHome

- Instale o Home Assistant no dispositivo de sua escolha. Existem muitos guias informativos baseados no dispositivo em que você está tentando instalar o Home Assistant. O tipo de dispositivo determinará qual estilo de Home Assistant melhor atenderá às suas necessidades.

- A instalação do ESPHome é tão simples quanto pesquisar por "ESPHome" na aba Supervisor/Add-Ons/Extensions e clicar para instalar.

<!-- ![image9](./esphome.jpg)
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/esphome.jpg" alt="pir" width={1000} height="auto" /></p> -->

- **Passo 7.** Criar e Enviar Configuração YAML

  Explicação do código abaixo:

  - **Nome:** "thermostat"

  - **Configuração da Placa:** <br />
  Modo flash definido como DIO.<br />
  Placa especificada como "seeed_xiao_esp32c3" com o framework Arduino.

  - **Ações na Inicialização:**<br />
  Exibe uma mensagem de log: "Booting thermostat."<br />
  Desliga três relés: aquecimento, resfriamento e ventilador.<br />
  Aguarda 500 milissegundos.<br />
  Executa um script chamado "boot_beep."

  - **Configuração de Script:**<br />
  Script de Bipe na Inicialização:<br />
  Liga um buzzer, define sua frequência para produzir um bipe e o desliga após 300 milissegundos.

  - **Configuração de API e OTA:**<br />
  API:<br />
  Chave de criptografia especificada.<br />
  OTA:<br />
  Senha definida como "13371337" para atualizações over-the-air.

  - **Saída do Buzzer:**<br />
  Configurado usando a plataforma LEDC com o pino 5.

  - **Configuração de WiFi:**<br />
  Especifica SSID e senha para conexão ao Wi-Fi.<br />
  Hotspot de fallback (portal cativo) configurado com SSID "Xiao-Esp32C3" e senha "13371337."

  - **Configuração I2C:**<br />
  Configura a comunicação I2C com o pino SDA 6 e o pino SCL 7.

  - **Configuração de Fonte:**<br />
  Define duas fontes para o display com tamanhos diferentes.

  - **Configuração do Display:**<br />
  Utiliza um display I2C SSD1315 com uma função lambda para formatar e exibir informações.<br />
  Exibe temperatura em Fahrenheit, umidade, intensidade do sinal Wi-Fi e endereço IP.

  - **Configuração de Sensor:**<br />
  Utiliza um sensor DHT22 para leituras de temperatura e umidade com intervalo de atualização de 10 segundos.<br />
  Inclui um sensor de sinal Wi-Fi com intervalo de atualização de 20 segundos.

  - **Configuração de Sensor de Texto:**<br />
  Exibe o endereço IP do termostato e a versão do ESPHome.

  - **Configuração de Chave:**<br />
  Configura três chaves GPIO para relay_heat, relay_cooling e relay_fan.

  - **Configuração de Sensor Binário:**<br />
  Configura um sensor binário para o pressionamento do botão do ventilador circulante.<br />
  Quando pressionado, controla o modo de ventilador do sistema de climatização.

  - **Configuração de Climatização:**<br />
  Implementa um controle de termostato usando o sensor de temperatura especificado.<br />
  Define ações para aquecimento, resfriamento, modo ventilador e inativo.<br />
  Define limites de temperatura, tamanhos de passo e predefinições padrão.

  Cole isso no arquivo yaml de Configuração do Dispositivo ESPHome. Você também pode baixar o arquivo .yaml completo [aqui](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/esp32c3config.yaml)

```yaml
esphome:
  name: ecostat
  platformio_options:
    board_build.flash_mode: dio
  on_boot:
    priority: 750
    then:
      - logger.log: "Booting EcoStat"
      - delay: 500ms
      - lambda: |-
          id(relay_heat).turn_off();
          id(relay_cooling).turn_off();
          id(relay_fan).turn_off();
          id(ecostat_control_heat).mode = CLIMATE_MODE_OFF;
          id(ecostat_control_cooling).mode = CLIMATE_MODE_OFF;
      - script.execute: boot_beep

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

#logger:
 # level: VERY_VERBOSE

api:
  encryption:
    key: "YOURKEYHERE"

ota:
  password: "13371337"

script:
- id: boot_beep
  then:
    # First ^E
    - output.turn_on: buzzer
    - output.ledc.set_frequency:
        id: buzzer
        frequency: 659.25Hz  # E
    - output.set_level:
        id: buzzer
        level: "50%"
    - delay: 150ms
    - output.turn_off: buzzer
    - output.turn_on: buzzer
    - output.ledc.set_frequency:
        id: buzzer
        frequency: 1000Hz
    - output.set_level:
        id: buzzer
        level: "50%"
    - delay: 150ms
    - output.turn_off: buzzer
output:
  - platform: ledc
    pin: 5
    id: buzzer

wifi:
  ssid: YOURWIFINAME
  password: YOURWIFIPASS

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "13371337"

i2c:
  sda: 6
  scl: 7
  scan: False

font:
  # gfonts://family[@weight]
  - file: "gfonts://Roboto"
    id: roboto
    size: 20

  - file: "gfonts://Poppins@700"
    id: inter
    size: 10

display:
  - platform: SSD1315_i2c
    id: oled
    model: "SSD1315 128x64"
    address: 0x3C
    lambda: |-
      float temp_celsius = id(temp).state;
      float temp_fahrenheit = (temp_celsius * 9.0 / 5.0) + 32.0;
      char temp_str[6]; // Buffer for temperature string
      dtostrf(temp_celsius, 4, 1, temp_str); // Convert Celsius to string with 1 decimal place

      it.print(28, 0, id(inter), id(ip_address).state.c_str());
      it.printf(0, 18, id(roboto), "T: %.1f  ", temp_fahrenheit);
      it.printf(70, 18, id(roboto), "H: %d", int(id(humidity).state));
      it.printf(31, 45, id(inter), "RSSI: %d", int(id(rssi).state));

climate:
  - platform: thermostat
    name: "EcoStat Heating"
    id: ecostat_control_heat
    sensor: temp
    heat_deadband: 2 °F
    heat_overrun: 0
    min_heating_run_time: 60s
    min_heating_off_time: 120s
    min_idle_time: 3min
    visual:
      min_temperature: 60 °F
      max_temperature: 80 °F
      temperature_step:
        current_temperature: 0.1
        target_temperature: 1.0
        target_temperature_low: 65 °F
    heat_action:
      - switch.turn_on: relay_heat
    idle_action:
      - switch.turn_off: relay_heat
    default_preset: Normal
    preset:
      - name: Normal
        default_target_temperature_low: 65 °F


  - platform: thermostat
    name: "EcoStat Cooling"
    id: ecostat_control_cooling
    sensor: temp
    cool_deadband: 2 °F
    cool_overrun: 0
    min_cooling_off_time: 20s
    min_cooling_run_time: 60s
    min_idle_time: 3min
    visual:
      min_temperature: 60 °F
      max_temperature: 80 °F
      temperature_step:
        current_temperature: 0.1
        target_temperature: 1.0
        target_temperature_low: 70 °F
    cool_action:
      - switch.turn_on: relay_cooling
    idle_action:
      - switch.turn_off: relay_cooling
    min_fan_mode_switching_time: 20s
    fan_mode_on_action:
      - switch.turn_on: relay_fan
    fan_mode_off_action:
      - switch.turn_off: relay_fan
    default_preset: Normal
    preset:
      - name: Normal
        default_target_temperature_high: 70 °F

sensor:
  - platform: dht
    pin: 20
    model: DHT22
    update_interval: 10s
    temperature:
      name: "EcoStat Temperature"
      id: temp
    humidity:
      name: "EcoStat Humidity"
      id: humidity
  - platform: wifi_signal
    name: "Wi-Fi Signal Strength"
    id: rssi
    update_interval: 20s

text_sensor:
  - platform: wifi_info
    ip_address:
      name: "EcoStat IP Address"
      id: ip_address
  - platform: version
    name: "EcoStat ESPHome Version"

switch:
  - platform: gpio
    id: relay_heat
    pin:
      number: 10
      mode: OUTPUT
  - platform: gpio
    id: relay_cooling
    pin:
      number: 9
      mode: OUTPUT
  - platform: gpio
    id: relay_fan
    pin:
      number: 21
      mode: OUTPUT

binary_sensor:
  - platform: gpio
    id: tempup
    pin:
      number: 8
      mode: INPUT_PULLUP
    filters:
      - delayed_on: 50ms
      - delayed_off: 50ms
    on_press:
      then:
        - lambda: |-
            if (id(ecostat_control_heat).mode == esphome::climate::CLIMATE_MODE_HEAT) {
              auto current_target_temp = id(ecostat_control_heat).target_temperature_low;
              id(ecostat_control_heat).target_temperature_low = current_target_temp + 0.56;
              auto current_target_temp_high = id(ecostat_control_heat).target_temperature_high;
              id(ecostat_control_heat).target_temperature_high = current_target_temp_high + 0.56;
            } else if (id(ecostat_control_cooling).mode == esphome::climate::CLIMATE_MODE_COOL) {
              auto current_target_temp = id(ecostat_control_cooling).target_temperature_low;
              id(ecostat_control_cooling).target_temperature_low = current_target_temp + 0.56;
              auto current_target_temp_high = id(ecostat_control_cooling).target_temperature_high;
              id(ecostat_control_cooling).target_temperature_high = current_target_temp_high + 0.56;
            }

  - platform: gpio
    id: tempdown
    pin:
      number: 2
      mode: INPUT_PULLUP
    filters:
      - delayed_on: 50ms
      - delayed_off: 50ms
    on_press:
      then:
        - lambda: |-
            if (id(ecostat_control_heat).mode == esphome::climate::CLIMATE_MODE_HEAT) {
              auto current_target_temp = id(ecostat_control_heat).target_temperature_low;
              id(ecostat_control_heat).target_temperature_low = current_target_temp - 0.56;
              auto current_target_temp_high = id(ecostat_control_heat).target_temperature_high;
              id(ecostat_control_heat).target_temperature_high = current_target_temp_high - 0.56;
            } else if (id(ecostat_control_cooling).mode == esphome::climate::CLIMATE_MODE_COOL) {
              auto current_target_temp = id(ecostat_control_cooling).target_temperature_low;
              id(ecostat_control_cooling).target_temperature_low = current_target_temp - 0.56;
              auto current_target_temp_high = id(ecostat_control_cooling).target_temperature_high;
              id(ecostat_control_cooling).target_temperature_high = current_target_temp_high - 0.56;
            }

  - platform: gpio
    id: modeswitch
    pin:
      number: 3
      mode: INPUT_PULLUP
    filters:
      - delayed_on: 50ms
      - delayed_off: 50ms
    on_press:
      then:
        - lambda: |-
            auto current_mode = id(ecostat_control_heat).mode;
            if (current_mode == esphome::climate::CLIMATE_MODE_OFF) {
              id(ecostat_control_heat).mode = esphome::climate::CLIMATE_MODE_HEAT;
            } else if (current_mode == esphome::climate::CLIMATE_MODE_HEAT) {
              id(ecostat_control_heat).mode = esphome::climate::CLIMATE_MODE_COOL;
            } else if (current_mode == esphome::climate::CLIMATE_MODE_COOL) {
              id(ecostat_control_heat).mode = esphome::climate::CLIMATE_MODE_OFF;
            }

  - platform: gpio
    id: momentaryswitch0
    pin:
      number: 4
      mode: INPUT_PULLUP
    filters:
      - delayed_on: 50ms
      - delayed_off: 50ms
    on_press:
      then:
        - if:
            condition:
              switch.is_off: relay_fan
            then:
              - climate.control: 
                  id: ecostat_control_cooling
                  fan_mode: "on"
            else:
              - climate.control: 
                  id: ecostat_control_cooling
                  fan_mode: "off"
```

### 3. Monte o case de sua escolha (Opcional)

Aqui estão os arquivos STL do case que usei neste projeto.

[EcoStatV2 ecostatcase](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/EcoStatV2-ecostatcase.stl)

[EcoStatV2 ecostatlid](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/EcoStatV2-ecostatlid.stl)

Sinta-se à vontade para usá-los ou modificá-los como quiser. Se você não tiver uma impressora 3D,
há muitos serviços online que imprimirão esses arquivos em qualquer material que você desejar.

<!-- ![image10](./3dfile.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/3dfile.png" alt="pir" width={1000} height="auto" /></p>

### 4. Instale os Componentes

#### Passo 1: Instale todos os componentes listados no case

Usando parafusos M2x4 e M2x6, instale todos os componentes listados anteriormente em seus lugares correspondentes dentro do case. <br />
(O sensor DHT22 simplesmente se encaixa no lugar por pressão).

<!-- ![image11](./11.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/11.jpg" alt="pir" width={500} height="auto" /></p>

#### Passo 2. Conecte todos os sensores e periféricos aos seus pinos correspondentes no YAML mencionado anteriormente

Aqui está o método que usei durante o processo de conexão:

- **DHT22/SSD1315 - use conector JST:** Dessole e vire os conectores do DHT22 e do SSD1315 para o outro lado de suas PCBs para encaixe adequado.

<!-- I used a combination of the included JST -->
<!-- connectors and DuPont style connections as well. for the DHT22 and SSD1315 I used JST.  -->
<!-- For the relays I used JST on one side and for the other side I used DuPont connectors for GPIO breakout headers on the expansion board. As you can see in the photo below. I also have a 3.7V Lithium cell plugged into the expansion boards battery connection for use as a backup battery in case of main supply power loss. -->

- **Dois Tipos de Relé - use conector JST/DuPont:** Para os relés, usei JST em um lado e no outro lado usei conectores DuPont para os cabeçalhos de breakout GPIO na placa de expansão.

- **Conexão de Bateria:** Também tenho uma célula de lítio de 3,7V conectada à entrada de bateria da placa de expansão para uso como bateria de backup em caso de perda de energia da fonte principal.

<!-- ![image12](./10.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/10.jpg" alt="pir" width={500} height="auto" /></p>

#### Passo 3. Conecte o estilo desejado de botões momentâneos na parte interna frontal do case

Realizei isso fixando os botões com um pouco de cola quente. Em seguida, soldei fios nos pinos diagonalmente opostos dos botões momentâneos e coloquei conectores DuPont na outra extremidade dos fios para conectar aos cabeçalhos de breakout GPIO corretos na placa de expansão.

<!-- ![image13](./12.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/12.jpg" alt="pir" width={1000} height="auto" /></p>

#### Passo 4. Monte a tela na parte traseira da tampa frontal

Monte a tela na parte traseira da tampa frontal (fixe no lugar com uma pequena quantidade de cola quente). Em seguida, fixe a tampa frontal ao case com 3 parafusos M4x6 conforme mostrado abaixo.

<!-- ![image14](./9.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/9.jpg" alt="pir" width={500} height="auto" /></p>

### 5. Conecte os Fios aos Relés Correspondentes no EcoStat

Termostato Inteligente Concluído! Simplesmente remova o termostato existente da sua casa e use a imagem abaixo para conectar os fios corretos aos relés correspondentes no EcoStat!

<!-- ![image15](./13.jpg) -->
<img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/13.jpg" alt="pir" width={500} height="auto" />

## ✨ Projeto do Colaborador

- Este projeto é apoiado pelo [Projeto de Colaboradores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) da Seeed Studio.
- Obrigado pelo esforço do Chris e seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/Honorary-Contributors/).

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
