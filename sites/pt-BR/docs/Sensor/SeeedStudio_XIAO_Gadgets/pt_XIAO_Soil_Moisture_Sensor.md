---
description: Primeiros passos com o XIAO Soil Moisture Sensor
title: Primeiros passos com o XIAO Soil Moisture Sensor
keywords:
  - XIAO
  - Soil Moisture Sensor
  - ESP32-C6
  - Umidade
image: https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/1.webp
slug: /xiao_soil_moisture_sensor
last_update:
  date: 05/26/2025
  author: Robben
createdAt: '2025-05-26'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_soil_moisture_sensor/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/top.jpg" style={{width:550, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-Soil-Sensor-p-6452.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

O XIAO Soil Moisture Sensor é um monitor ambiental compacto e de baixo consumo, alimentado pelo [XIAO ESP32-C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-Pre-Soldered-p-6328.html). Funcionando com uma única bateria AA, ele oferece operação de longa duração e atualizações em tempo real das condições do solo. Possui detecção adaptativa de umidade do solo pré-calibrada para um monitoramento preciso. Ao mesmo tempo, permite intervalos de monitoramento dinâmicos e leituras instantâneas para dados precisos e responsivos. Totalmente compatível com o Home Assistant, é ideal para jardinagem inteligente e agricultura de precisão — eficiente, confiável e feito para um cuidado sustentável das plantas.

## Recursos

**1. Monitoramento de umidade do solo em três níveis**  

- 🌿 **Normal:** A umidade do solo está ideal, não é necessário regar.  
- 🌤 **Quase seco:** A umidade está diminuindo, prepare-se para regar em breve.  
- 🌵 **Seco:** Criticamente baixa, regue imediatamente.

Limiares padrão:

- **60%** → Transição de verde para amarelo.
- **20%** → Transição de amarelo para vermelho.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_1.jpg" style={{width:800, height:'auto'}}/></div>

**2. Plug-and-Play com Home Assistant**  
Pré-carregado com ESPHome — funciona imediatamente com o Home Assistant, permitindo monitorar e automatizar diretamente a partir do painel da sua casa inteligente.

**3. Monitoramento adaptativo e leitura instantânea**  

- Ajusta automaticamente os intervalos de verificação (8h → 1h → 15min) dependendo do nível de umidade.  
- Pressione o botão uma vez para obter uma leitura instantânea de umidade a qualquer momento.

**4. Calibração simples (opcional)**  
Pressione rapidamente o botão três vezes para recalibrar para o seu solo específico: leitura em solo seco + leitura em solo molhado → o sistema se ajusta automaticamente.

- Três pressões curtas → Entrar no modo de calibração:
  - O LED vermelho pisca → Em até 10 segundos, insira o sensor em solo completamente seco.
  - Aguarde até o LED vermelho parar de piscar e então espere 3 segundos.
  - O LED verde pisca → Em até 10 segundos, insira o sensor em solo totalmente molhado.
  - Aguarde até o LED verde parar de piscar e então espere 3 segundos.
  - Resultado da calibração:
    - Dois rápidos flashes verdes → Sucesso.
    - Dois rápidos flashes vermelhos → Falha (provavelmente devido à inversão das leituras de solo seco/molhado).

Observação: Durante a calibração, as leituras iniciais podem ser instáveis se o sensor não for inserido rapidamente. O sistema fará múltiplas amostragens, aplicará filtragem e fará a média das leituras para uma calibração confiável.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_4.jpg" style={{width:800, height:'auto'}}/></div>

## Visão geral do hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/hardware.jpg" style={{width:800, height:'auto'}}/></div>

## Primeiros passos

Esta seção irá guiá-lo na configuração do seu XIAO Soil Moisture Sensor pela primeira vez.

### Materiais necessários

Antes de iniciar o conteúdo do tutorial deste artigo, talvez você precise ter o seguinte hardware pronto.

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO Soil Moisture Sensor</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/big.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:270, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

O Home Assistant Green é a forma mais fácil e com maior foco em privacidade para automatizar sua casa. Ele oferece uma configuração sem esforço e permite controlar todos os dispositivos inteligentes com apenas um sistema, onde todos os dados são armazenados localmente por padrão. Esta placa se beneficia do ecossistema em crescimento do Home Assistant e será melhorada todos os meses por meio de código aberto.

Recomendamos usar o Home Assistant Green como o host do Home Assistant para este tutorial, ou você pode usar qualquer host de Home Assistant com Supervisor.

:::tip install Home Assistant
Também escrevemos como instalar o Home Assistant para alguns produtos da Seeed Studio, consulte-os.

- **[Primeiros passos com Home Assistant no ODYSSEY-X86](https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86-Home-Assistant/)**
- **[Primeiros passos com Home Assistant no reTerminal](https://wiki.seeedstudio.com/pt-br/reTerminal_Home_Assistant/)**
- **[Primeiros passos com Home Assistant no LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/pt-br/h68k-ha-esphome/)**

Se você não estiver usando um produto Seeed Studio, também pode verificar e aprender como instalar o Home Assistant para outros produtos no site oficial do Home Assistant.

- **[Instalação do Home Assistant](https://www.home-assistant.io/installation/)**
:::

### Etapa 1. Instalar o ESPHome

Se você já instalou o ESPHome, pode pular esta etapa.

Vá para **Settings** -> **Add-ons** -> **ADD-ON STORE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/01.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/02.png" style={{width:800, height:'auto'}}/></div>

Pesquise por ESPHome e clique nele. Clique em **INSTALL** e **START**.

:::tip
Se você não encontrar o ESPHome na loja de complementos, certifique-se de que está usando uma instalação do Home Assistant que oferece suporte a complementos (como Home Assistant OS ou instalações supervisionadas). Para outros tipos de instalação (como Home Assistant Container), talvez seja necessário executar o ESPHome Device Builder de forma independente usando Docker. Consulte a [documentação oficial do ESPHome](https://esphome.io/guides/getting_started_hassio) para mais detalhes.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/03.png" style={{width:800, height:'auto'}}/></div>

Em seguida, o ESPHome Builder aparecerá na barra lateral.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/04.png" style={{width:800, height:'auto'}}/></div>

### Etapa 2: Preparando o Soil Moisture Sensor

Por padrão, seu dispositivo (XIAO ESP32C6) vem pré-gravado com o firmware para o XIAO Soil Moisture Sensor. No entanto, se você precisar modificar ou atualizar o firmware padrão, um arquivo de configuração YAML de fábrica está disponível na seção Recursos abaixo. Você pode personalizar a lógica conforme necessário e gravá-lo via Home Assistant.

:::tip
Para garantir leituras precisas, basta realizar uma rápida calibração do sensor antes de usar.
:::

### Etapa 3: Configuração de rede

1. **Ativar o ponto de acesso**:
   - Ao ligar pela primeira vez, o módulo criará uma rede Wi-Fi (SSID: `Xiao-Soil-Moisture-Monitor`).

2. **Acessar a configuração**:
   - Conecte-se à rede usando um telefone ou PC.
   - Abra um navegador e acesse `http://192.168.4.1`.
   - Insira o SSID e a senha da sua rede Wi-Fi doméstica.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:650, "border-radius": '15px'}}/></div>

3. **Integração com Home Assistant**:
   - Depois de conectado à rede doméstica, o módulo poderá ser descoberto no Home Assistant em `Settings -> Devices & Services`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:400, height:'auto', "border-radius": '15px'}}/></div>

Dessa forma, você pode conectar o módulo à sua rede Home Assistant e deixar o Home Assistant descobri-lo.

### Etapa 4: Adicionar o dispositivo do módulo

1. **Descoberta automática**:
   - Certifique-se de que o **ESPHome** esteja instalado no Home Assistant.
   - Navegue até `Settings -> Devices & Services -> Integrations` e procure pelo dispositivo.

2. **Configuração manual**:
   - Se não for descoberto automaticamente, adicione o dispositivo manualmente especificando seu endereço IP.

Depois de adicionar o dispositivo, você verá um novo cartão de sensor chamado Solid_sensor na página Overview do Home Assistant, exibindo tanto a medição da bateria quanto o status atual de umidade do solo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/View_in_HA.png" style={{width:400, height:'auto', "border-radius": '15px'}}/></div>

Agora que seu sensor de solo está funcionando, divirta-se monitorando suas plantas!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_2.jpg" style={{width:800, height:'auto'}}/></div>

## Uso avançado

Você pode modificar a lógica original do firmware e gravar sua versão personalizada do sensor de solo diretamente através do Home Assistant.

### Passo 1. Instale o ESPHome

Veja o guia de instalação no Passo 1 acima.

### Passo 2. Adicione um novo dispositivo

Vá para o ESPHome e clique em **NEW DEVICE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/06.png" style={{width:800, height:'auto'}}/></div>

Dê ao dispositivo um nome de sua preferência e clique em **NEXT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/1.png" style={{width:800, height:'auto'}}/></div>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/2.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3.png" style={{width:'100%', height:'auto'}}/></div>
</div>

Depois de criar um novo dispositivo, clique em **EDIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/4.png" style={{width:800, height:'auto'}}/></div>

### Passo 3. Instale o firmware

Aqui está o firmware de fábrica：
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/xiao-soil-moisture-monitor" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Aqui está uma configuração YAML `ESPHome` pronta para uso no Home Assistant:
<details>

<summary>Clique aqui para visualizar o código completo</summary>

```yaml
# ==== AUTO-SYNC START: xiao-soil-moisture-monitor/xiao-soil-moisture-monitor.yaml ====

substitutions:
  name: "xiao-soil-moisture"
  friendly_name: "XIAO Soil Moisture Monitor"

esphome:
  name: "${name}"
  friendly_name: "${friendly_name}"
  name_add_mac_suffix: true
  project:
    name: "xiao.soil-moisture-monitor"
    version: "1.0"
  on_boot:
    then:
      - output.turn_off: gpio_3_output
      - output.turn_on: gpio_14_output
      - light.turn_on:
          id: pwm_led
          brightness: 68%  # Set 68% duty cycle
      - if:
          condition:
            lambda: 'return id(wifi_net_status) == 0;'
          then:
            - logger.log: "The device has not been set to the network"
            - deep_sleep.prevent: deep_sleep_control
          else:
            - logger.log: "The device has been networked"
      - delay: 1s
      - script.execute: check_moisture_once


esp32:
  board: esp32-c6-devkitc-1
  framework:
    type: esp-idf

# LED Yellow	D10 18
# LED RED	D9  20
# LED Green	D8 19
# button	D2  2

# Battery	D0 0
# PWM out	D3 21
# Soil sensor	D1  1


output:
  - platform: gpio
    pin: GPIO18
    id: yellow_led_output

  - platform: gpio
    pin: GPIO19
    id: green_led_output

  - platform: gpio
    pin: GPIO20
    id: red_led_output

  - platform: ledc
    pin: GPIO21
    id: pwm_output
    frequency: 200kHz  # Set the frequency to 200kHz

  - platform: gpio
    pin: GPIO3
    id: gpio_3_output

  - platform: gpio
    pin: GPIO14
    id: gpio_14_output

light:
  - platform: binary
    id: yellow_led
    output: yellow_led_output

  - platform: binary
    id: green_led
    output: green_led_output

  - platform: binary
    id: red_led
    output: red_led_output

  - platform: monochromatic
    output: pwm_output
    id: pwm_led
    name: "200kHz PWM"
    internal: true
    default_transition_length: 0s


script:
  - id: red_led_blink
    mode: restart
    then:
      - repeat:
          count: 10
          then:
            - light.turn_on: red_led
            - delay: 500ms
            - light.turn_off: red_led
            - delay: 500ms

  - id: green_led_blink
    mode: restart
    then:
      - repeat:
          count: 10
          then:
            - light.turn_on: green_led
            - delay: 500ms
            - light.turn_off: green_led
            - delay: 500ms

  - id: fast_blink_green
    then:
      - repeat:
          count: 5
          then:
            - light.turn_on: green_led
            - delay: 200ms
            - light.turn_off: green_led
            - delay: 200ms

  - id: fast_blink_red
    then:
      - repeat:
          count: 5
          then:
            - light.turn_on: red_led
            - delay: 200ms
            - light.turn_off: red_led
            - delay: 200ms

  - id: red_led_blink_3_times
    then:
      - repeat:
          count: 1
          then:
            - light.turn_on: red_led
            - delay: 1000ms
            - light.turn_off: red_led
            - delay: 100ms
  - id: yellow_led_blink_3_times
    then:
      - repeat:
          count: 1
          then:
            - light.turn_on: yellow_led
            - delay: 1000ms
            - light.turn_off: yellow_led
            - delay: 100ms

  - id: green_led_blink_3_times
    then:
      - repeat:
          count: 1
          then:
            - light.turn_on: green_led
            - delay: 1000ms
            - light.turn_off: green_led
            - delay: 100ms


  - id: do_calibration
    then:
      - deep_sleep.prevent: deep_sleep_control
      - logger.log: "Starting calibration"
      - script.execute: red_led_blink
      - delay: 10s
      - script.stop: red_led_blink
      - lambda: |-
          float sum = 0;
          for (int i = 0; i < 10; i++) {
            id(soil_sensor).update();
            sum += id(soil_sensor).state;
            delay(200);
          }
          id(dry_value) = sum / 10.0;
          ESP_LOGI("calibration", "Dry value: %f", id(dry_value));

      - delay: 3s

      - script.execute: green_led_blink
      - delay: 10s
      - script.stop: green_led_blink
      - lambda: |-
          float sum = 0;
          for (int i = 0; i < 10; i++) {
            id(soil_sensor).update();
            sum += id(soil_sensor).state;
            delay(200);
          }
          id(wet_value) = sum / 10.0;
          ESP_LOGI("calibration", "Wet value: %f", id(wet_value));

      - delay: 3s

      - lambda: |-
          if (id(dry_value) > id(wet_value)) {
            ESP_LOGI("calibration", "Calibration success");
            id(fast_blink_green).execute();
          } else {
            ESP_LOGW("calibration", "Calibration failed");
            id(fast_blink_red).execute();
          }

      - delay: 3s
      - script.execute: check_moisture_once
      - delay: 3s
      - deep_sleep.enter: deep_sleep_control

  - id: check_moisture_once
    then:
      - lambda: |-
          for(int i = 0; i < 10; i++){
            id(soil_sensor).update();
            delay(200);
          }
          float moisture = id(soil_sensor).state;
          ESP_LOGI("moisture_check", "Moisture reading: %f", moisture);
          float Diff = id(dry_value) - id(wet_value);
          ESP_LOGI("moisture_check", "Diff is: %f", Diff);
          ESP_LOGI("moisture_check", "ref_dry Diff is: %f",id(dry_value) - Diff * id(ref_dry));
          ESP_LOGI("moisture_check", "ref_wet Diff is: %f",id(dry_value) - Diff * id(ref_wet));
          if (moisture >= (id(dry_value) - Diff * id(ref_dry))) {  // The drier -> the higher the voltage
            id(red_led_blink_3_times).execute();
            id(deep_sleep_control).set_sleep_duration(900000);
          } else if(moisture >  (id(dry_value) - Diff * id(ref_wet)) && moisture < (id(dry_value) - Diff * id(ref_dry))){
            id(yellow_led_blink_3_times).execute();
            id(deep_sleep_control).set_sleep_duration(3600000);
          }else{
            // moisture >  (id(dry_value) - Diff * id(ref_wet))
            id(green_led_blink_3_times).execute();
            id(deep_sleep_control).set_sleep_duration(28800000);
          }



globals:
  - id: button_press_count
    type: int
    restore_value: no
    initial_value: '0'
  - id: dry_value
    type: float
    restore_value: yes
    initial_value: '2.75'
  - id: wet_value
    type: float
    restore_value: yes
    initial_value: '1.2'
  - id: wifi_net_status
    type: int
    restore_value: yes
    initial_value: "0"
  - id: ref_dry
    type: float
    restore_value: no
    initial_value: "0.23"
  - id: ref_wet
    type: float
    restore_value: no
    initial_value: "0.58"

binary_sensor:
  - platform: gpio
    pin:
      number: GPIO2
      mode: INPUT_PULLUP
      allow_other_uses: true
    id: my_button
    on_press:
      - lambda: |-
          id(button_press_count)++;
      - delay: 1s  # Delay 1 second to see if the button is pressed 3 times in a row
      - lambda: |-
          if (id(button_press_count) == 3) {
            id(button_press_count) = 0;
            id(do_calibration).execute();  // Trigger calibration process
          } else if (id(button_press_count) == 1) {
            id(button_press_count) = 0;
            id(check_moisture_once).execute();  // Perform an ADC decision
          } else {
            id(button_press_count) = 0;
          }


# interval:
#   - interval: 10s
#     then:
#       - script.execute: check_moisture_once



# Deep sleep configuration
deep_sleep:
  id: deep_sleep_control
  run_duration: 120s
  sleep_duration: 180min
  wakeup_pin:
    number: GPIO2
    inverted: true
    allow_other_uses: true
    mode: INPUT_PULLUP

sensor:
  - platform: adc
    id: soil_sensor
    pin: GPIO1
    name: "Soil moisture measurement"
    update_interval: 4s
    internal: true
    attenuation: 12db


  - platform: adc
    pin: GPIO0
    name: "Battery measurement"
    attenuation: 12db
    # internal: true
    filters:                     # When the battery drops below 1V, it is dead.
      - lambda: |-
          if (x < 1.2) {
            return 0.0;
          }else if(x > 1.5){
            return 1.0 * 100.0;
          }else {
            return ((x - 1.2) / (1.5 - 1.2)) * 100.0;
          }
    unit_of_measurement: "%"
    update_interval: 5s
    force_update: True

  - platform: wifi_signal
    name: "wifi singnal strength"
    update_interval: 10s

# text_sensor:
#   - platform: template
#     name: "Soil Moisture Status"   # ✅ Status displayed on the HA panel
#     id: soil_status
#     # internal: true
#     lambda: |-
#       float value = id(soil_sensor).state;
#       float Diff = id(dry_value) - id(wet_value);
#       if (value >= (id(dry_value) - Diff * id(ref_dry))) {
#         //id(red_led_blink_3_times).execute();
#         return {"Dry"};
#       } else if (value > (id(dry_value) - Diff * id(ref_wet)) && value < (id(dry_value) - Diff * id(ref_dry))) {
#         //id(yellow_led_blink_3_times).execute();
#         return {"Almost Dry"};
#       } else {
#         //id(green_led_blink_3_times).execute();
#         return {"Normal Moisture"};
#       }
#     update_interval: 5s

text_sensor:
  - platform: template
    name: "Soil Moisture Status"
    id: soil_status
    lambda: |-
      float value = id(soil_sensor).state;
      float Diff = id(dry_value) - id(wet_value);
      if (value >= (id(dry_value) - Diff * id(ref_dry))) {
        return {"Dry"};
      } else if (value > (id(dry_value) - Diff * id(ref_wet)) && value < (id(dry_value) - Diff * id(ref_dry))) {
        return {"Almost Dry"};
      } else {
        return {"Normal Moisture"};
      }
    update_interval: never  # 不让自动触发上报，我们自己控制

interval:
  - interval: 5s
    then:
      - text_sensor.template.publish:
          id: soil_status
          state: !lambda |-
            return "";
      - delay: 10ms
      - text_sensor.template.publish:
          id: soil_status
          state: !lambda |-
            float value = id(soil_sensor).state;
            float Diff = id(dry_value) - id(wet_value);
            if (value >= (id(dry_value) - Diff * id(ref_dry))) {
              id(deep_sleep_control).set_sleep_duration(900000);
              return "Dry";
            } else if (value > (id(dry_value) - Diff * id(ref_wet)) && value < (id(dry_value) - Diff * id(ref_dry))) {
              id(deep_sleep_control).set_sleep_duration(3600000);
              return "Almost Dry";
            } else {
              id(deep_sleep_control).set_sleep_duration(28800000);
              return "Normal Moisture";
            }

# Enable logging
logger:

improv_serial:

# Enable Home Assistant API
api:

ota:
  - platform: esphome

wifi:
  on_connect:
    then:
      - if:
          condition:
            lambda: 'return id(wifi_net_status) == 0;'
          then:
            - logger.log: "The device has not been configured yet, but now it is successfully configured"
            - globals.set:
                id: wifi_net_status
                value: '1'
            - delay: 5s
            - deep_sleep.allow: deep_sleep_control
          else:
            - logger.log: "The device has been networked"


  on_disconnect:
    then:
      - globals.set:
          id: wifi_net_status
          value: '0'
  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "XIAO-Soil-Moisture-Monitor"

captive_portal:
# ==== AUTO-SYNC END ====
```

</details>

<details>
<summary>Aqui está uma visão geral das principais funções e lógicas usadas na configuração YAML.</summary>

`on_boot` – Define o que acontece quando o dispositivo é inicializado.

- **Parâmetros de entrada**: Nenhum.
- **Ação**: Liga o GPIO 14, define o brilho do LED PWM, verifica o status do Wi‑Fi e aciona a primeira verificação de umidade.

`scripts (red_led_blink, green_led_blink, fast_blink_green, fast_blink_red, etc.)` – Padrões predefinidos de piscar de LED.

- **Parâmetros de entrada**: Nenhum.
- **Ação**: Faz os LEDs piscarem em vários padrões para indicar status ou etapas de calibração.

`do_calibration` – Executa o processo de calibração para solo seco e úmido.

- **Parâmetros de entrada**: Nenhum.
- **Ação**: Pisca o LED vermelho, aguarda a leitura em seco; depois pisca o LED verde, aguarda a leitura em úmido; armazena valores médios e confirma sucesso ou falha.

`check_moisture_once` – Lê e avalia os níveis de umidade do solo.

- **Parâmetros de entrada**: Nenhum.
- **Ação**: Faz múltiplas leituras do ADC, calcula a média, compara com os limiares calibrados, decide o estado de umidade, aciona os LEDs e as configurações de deep sleep de acordo.

`binary_sensor (GPIO2)` – Lida com a lógica de pressionamento do botão físico.

- **Parâmetros de entrada**: Nenhum.
- **Ação**: Conta os pressionamentos do botão; um toque aciona uma verificação de umidade, três toques acionam a calibração.

`globals` – Armazena o estado do sistema e os dados de calibração.

- **Variáveis**:
  - `button_press_count`: Rastreia a contagem de pressionamentos do botão.
  - `dry_value`, `wet_value`: Armazena valores ADC calibrados para seco/úmido.
  - `wifi_net_status`: Rastreia o estado da conexão Wi‑Fi.
  - `ref_dry`, `ref_wet`: Fatores de escala de referência para cálculos de limiar.

`deep_sleep` – Gerencia ciclos de economia de energia em modo de suspensão.

- **Parâmetros de entrada**: Nenhum.
- **Ação**: Executa por 120 segundos e depois entra em suspensão por até 180 minutos; acorda ao pressionar o botão ou em intervalos.

`sensor (ADC)` – Lê valores analógicos do sensor de solo e da bateria.

- **Parâmetros de entrada**: Nenhum.
- **Ação**: Mede a umidade do solo e a tensão da bateria; a bateria é escalonada para mostrar a porcentagem.

`text_sensor` – Publica o status de umidade do solo em formato legível por humanos.

- **Parâmetros de entrada**: Nenhum.
- **Ação**: Exibe "Dry", "Almost Dry" ou "Normal Moisture" no Home Assistant.

`wifi` + `api` + `ota` – Gerencia a conexão de rede, a integração com o Home Assistant e as atualizações de firmware over‑the‑air.

- **Parâmetros de entrada**: SSID e senha do Wi‑Fi.
- **Ação**: Conecta o dispositivo à rede, expõe sua API e permite atualizações remotas.

</details>

Clique em **INSTALL** para instalar o código no dispositivo e você verá a seguinte imagem.

<Tabs>
<TabItem value='Install through browser'>

:::tip
Se o seu Home Assistant Host (Raspberry PI/Green/Yellow etc.) estiver longe de você, recomendamos usar este método. Você pode instalar com o computador que tiver em mãos.
:::

Primeiro, você precisa clicar em **Manual download** para baixar o firmware compilado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

Abra este site onde faremos o upload do firmware para o painel ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

Volte para o ESPHome para baixar o firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

Selecione o formato Factory.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

Use um cabo USB para **conectar o painel ePaper ao seu computador** e clique em **CONNECT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

Selecione usbmodemxxx (no Windows é COMxxx) e clique em connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

Clique em **INSTALL** e selecione o firmware que você acabou de baixar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:650, height:'auto'}}/></div>

Seu firmware será gravado em breve ～

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/71.png" style={{width:650, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through host'>

:::tip
Se o seu Home Assistant Host (Raspberry PI/Green/Yellow etc.) estiver por perto, recomendamos usar este método, pois é mais simples.
:::

Antes de instalar o código no dispositivo, você precisa usar um cabo USB para **conectar este dispositivo ao seu Raspberry Pi ou HA Green(Yellow) etc.** que está executando o Home Assistant.

Clique nas opções conforme a imagem para instalar o código no dispositivo.

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

Aguarde um momento e você verá o retorno como na imagem a seguir. Isso significa que o código está sendo executado com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/9.png" style={{width:650, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through Wi-Fi'>

:::tip
Este é o método mais simples, mas com o pré-requisito de que, ao instalar o programa pela primeira vez, você deve primeiro fazer o upload do programa para o painel ePaper usando o método à esquerda. Depois disso, você pode fazer o upload via Wi‑Fi. Além disso, certifique‑se de que sua configuração YAML inclua seções `ota` e `api` devidamente configuradas com chaves de criptografia válidas para que este método funcione.
:::

Dessa forma, você não precisa conectar o painel ePaper a nada, apenas certifique‑se de que ele esteja online.

Clique na opção e o firmware será instalado automaticamente no painel ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

Aguarde um momento e você verá o retorno como na imagem a seguir. Se falhar, pode ser devido a um sinal fraco. Por favor, aproxime o dispositivo do seu roteador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/73.png" style={{width:650, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Resetar

Se o firmware precisar ser regravado, você pode usar o seguinte link para restaurar o firmware padrão:  
[https://gadgets.seeed.cc/](https://gadgets.seeed.cc/)

Conecte primeiro o seu dispositivo ao computador.  
Depois, encontre **XIAO Soil Moisture Monitor** na página e clique em **Connect** para prosseguir com a nova gravação.

## Recursos

- **[PDF]** [XIAO Soil Moisture Sensor SCH](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/SCH.pdf)
- **[Kicad]** [XIAO Soil Moisture Sensor PCB](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/Kicad.kicad_pcb)
- **[Yaml]** [XIAO Soil Moisture Sensor HA Yaml](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/HomeAssistanceYaml.yaml)
- **[Bin]** [XIAO Soil Moisture Sensor HA Factory Bin](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/factory.bin)
- **[LINK]** [XIAO Soil Moisture Sensor 3D file Printtables](https://www.printables.com/model/1260595-3d-enclosure-for-seeed-studio-xiao-75-epaper-panel/edit)
- **[LINK]** [XIAO Soil Moisture Sensor 3D file Thingiverse](https://www.thingiverse.com/thing:7039325)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
