---
title: Introdução ao XIAO IR Mate Smart IR Remote
description: |
  Um controle remoto IR inteligente da Seeed Studio, projetado para integrar aparelhos tradicionais como TVs e aparelhos de ar-condicionado ao seu ecossistema de casa inteligente Home Assistant.
image: https://files.seeedstudio.com/wiki/XIAO_IR_MATE/XIAO-Smart-IR-Mate.webp
slug: /XIAO_IR_Mate_Smart_IR_Remote
sku: 109990586
keywords:
  - XIAO
  - Home Assistant
  - Casa inteligente
sidebar_position: 5
last_update:
  author: TienjuiWong
  date: 07/17/2025
createdAt: '2025-07-18'
updatedAt: '2026-07-14'
url: https://wiki.seeedstudio.com/pt-br/XIAO_IR_Mate_Smart_IR_Remote/
---


# Introdução ao XIAO IR Mate Smart IR Remote (Para Home Assistant)

Bem-vindo ao **XIAO IR Mate Smart IR Remote**\! Este dispositivo é especialmente projetado para usuários do Home Assistant, com o objetivo de fornecer uma solução de controle remoto infravermelho inteligente integrada, eficiente e contínua. Por meio deste guia, você aprenderá como configurar o dispositivo, conectá-lo à sua rede doméstica, integrá-lo ao Home Assistant e liberar todo o seu potencial, desde o aprendizado básico de sinais até o controle avançado de ar-condicionado inteligente.

<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/6-109990586-XIAO-Smart-IR-Mate.jpg"
    alt="Diagrama do produto"
    style={{
      maxWidth: '50%',
      height: 'auto',
      display: 'block',
      borderRadius: '8px'
    }}
  />
</div>

## Introdução

O **XIAO IR Mate** é um módulo infravermelho inteligente compacto baseado no **Seeed Studio XIAO ESP32-C3**. Ele integra transmissão e recepção infravermelha, detecção por toque, feedback por vibração e indicação de status. Conectado via Wi-Fi, pode ser perfeitamente integrado ao seu ecossistema de casa inteligente Home Assistant. Sua missão principal é tornar todos os seus aparelhos tradicionais que usam controles remotos infravermelhos (como TVs, aparelhos de ar-condicionado, ventiladores etc.) “inteligentes” e permitir que você os controle por meio do HA para automações.

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
  alignItems: 'center'
}}>
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/1-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate diagrama do produto 1" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/2-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate diagrama do produto 2" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/3-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate diagrama do produto 3" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/4-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate diagrama do produto 4" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/5-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate diagrama do produto 5" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/touch.jpg" alt="XIAO Smart IR Mate diagrama do produto 6" />
</div>

- **Integração perfeita com Home Assistant**

Baseado na plataforma ESPHome, o IR Mate é descoberto automaticamente pelo Home Assistant, oferecendo entidades simples para automação e criação de scripts sem esforço.

- **Poderoso aprendizado e transmissão de IR**

Equipado com três emissores IR de alta potência para cobertura de 360° e um receptor de alta sensibilidade. Suporta o aprendizado de até 10 comandos IR de controles remotos padrão (por exemplo, controlar projetores, aparelhos de ar-condicionado, temporizadores) para reprodução com um toque no Home Assistant.

- **Feedback físico intuitivo de interação**

Possui um motor de vibração e um LED indicador. Vibrações curtas confirmam ações, vibrações longas indicam o modo de aprendizado e o LED exibe o status da rede, simplificando a configuração e a solução de problemas.

- **Atualizável para um controlador de ar-condicionado inteligente avançado**

Grave um firmware personalizado para transformar o IR Mate em um controle remoto inteligente de ar-condicionado. Defina temperatura, modo e velocidade do ventilador com precisão diretamente no Home Assistant, com geração automática de códigos IR, eliminando o aprendizado repetitivo.

- **Design compacto, alimentado por USB-C**

## Visão geral do hardware

Entender os componentes básicos do dispositivo ajudará você a usá-lo melhor:

- **Controlador principal**: Seeed Studio XIAO ESP32-C3, oferecendo alto desempenho e conectividade Wi-Fi.
- **Alimentação**: Alimentado pela porta Type-C onboard (5V).
- **Emissor infravermelho**: 3 LEDs infravermelhos de alta potência (usando o pino D1), garantindo transmissão de sinal em 360° sem pontos cegos.
- **Receptor infravermelho**: 1 receptor infravermelho de alta precisão (usando o pino D2), para aprender sinais de outros controles remotos.
- **Sensor de toque**: O dispositivo integra um módulo de toque (usando o pino D3). Um único toque aciona uma vibração curta (0,5 segundos) como feedback de operação.
- **Motor de vibração**: Um motor de vibração integrado (usando o pino D4) fornece feedback tátil claro com diferentes durações de vibração.
- **LED indicador de status**: Uma luz LED (usando o pino D5) para indicar os diferentes estados de funcionamento do dispositivo.
- **Botão de reset**: Um botão físico no dispositivo (conectado ao pino D0), usado para reinicialização ou restauração de fábrica.

## Primeiro uso e configuração de rede (firmware de fábrica)

Quando você receber o dispositivo pela primeira vez, siga estas etapas para concluir a configuração inicial.

### Etapa 1: Ligar

Use um cabo USB Type-C padrão para alimentar o dispositivo. Após a inicialização, o dispositivo entrará em um estado de espera por configuração, e você verá o **LED branco piscando a uma frequência de 1Hz**.

### Etapa 2: Entrar no modo de provisionamento AP

Quando a rede não está configurada, o dispositivo criará automaticamente um hotspot Wi-Fi (AP) chamado **XIAO IR Mate** (ou **Seeed_ir**, dependendo do que você encontrar).

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

### Etapa 3: Conectar ao hotspot e configurar a rede

1. Abra as configurações de Wi-Fi do seu celular ou computador, procure e conecte-se à rede chamada **XIAO IR Mate**.

:::note
O hotspot possui uma senha de rede padrão: ‘12345678’.
:::

2. Após uma conexão bem-sucedida, seu dispositivo geralmente abrirá automaticamente uma página de configuração. Se isso não acontecer, abra manualmente um navegador e acesse **[http://192.168.4.1](http://192.168.4.1)**.
3. Nesta página, você verá uma lista de redes Wi-Fi. Selecione a **rede Wi-Fi de 2,4GHz (SSID)** da sua casa e insira a senha correta.
4. Clique em "Connect" ou "Save". O dispositivo tentará se conectar à rede Wi-Fi que você forneceu.

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect_02.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

### Etapa 4: Conexão bem-sucedida

Quando o dispositivo se conectar com sucesso ao seu Wi-Fi doméstico, o hotspot AP será desligado automaticamente e a **luz indicadora de status ficará acesa continuamente**. A configuração de rede está concluída.

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect_03.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## Integração com Home Assistant (firmware de fábrica)

O firmware do dispositivo é baseado em **ESPHome**, o que torna a integração ao Home Assistant muito fácil.

1. **Descoberta automática**: Certifique-se de que o host do Home Assistant e o XIAO IR Mate estejam conectados à mesma rede local. Normalmente, o HA descobrirá automaticamente novos dispositivos ESPHome. Você verá uma notificação em **Settings \> Devices & Services** dizendo "New device discovered".
2. **Adição manual**: Se não for descoberto automaticamente, você pode clicar no botão **[Add Integration]** no canto inferior direito, procurar por **"ESPHome"** e então inserir o hostname do dispositivo (por exemplo, **xiao-ir-mate**) ou o endereço IP para adicioná-lo manualmente.

<div style={{textAlign:'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_01.png"
    alt=""
    style={{width:1000, height:'auto'}}
  /><br />

  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_02.png"
    alt=""
    style={{width:1000, height:'auto'}}
  /><br />

  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_05.png"
    alt=""
    style={{width:800, height:'auto'}}
  /><br />

  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_06.png"
    alt=""
    style={{width:1000, height:'auto'}}
  />
</div>

3. **Painel do dispositivo**: Após a adição bem-sucedida, o XIAO IR Mate aparecerá como um dispositivo no HA. Seu painel conterá as seguintes entidades para controlar 10 sinais infravermelhos diferentes:

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_07.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## Detalhes das funções principais (firmware de fábrica)

Se você quiser restaurar seu dispositivo ou atualizar o firmware, pode acessar por meio do botão abaixo. Criamos uma página dedicada ao XIAO Gadget Direct Flash Firmware.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://gadgets.seeed.cc/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Flash the Firmwave</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Aprendizado de sinais IR

Quando você precisar ensinar ao IR Mate um novo comando de controle remoto, siga estas etapas. A interface principal do firmware de fábrica inclui uma **lista de seleção de slots de sinal**, juntamente com os botões **Learn** e **Send**.

1. No painel de dispositivo do Home Assistant, primeiro encontre a lista suspensa de seleção chamada **"Signal"**.
2. Clique na lista suspensa e selecione o slot de sinal que você deseja usar, por exemplo, **"signal_1"**.
3. Depois de selecionar, encontre o botão **"Learn"** e clique em **"PRESS"** ao lado dele.
4. O XIAO IR Mate agora entrará no modo de aprendizado e começará a **vibrar continuamente**, indicando que você pode iniciar o pareamento.
5. Aponte o controle remoto original para a janela do receptor infravermelho do IR Mate e pressione rapidamente o botão que você deseja aprender.
6. Depois que o IR Mate receber e registrar o sinal com sucesso, a **vibração irá parar**, indicando que o aprendizado foi bem-sucedido.
7. Neste momento, um indicador de status chamado **"Is Learned Signal"** será automaticamente alterado para "ON", indicando que o slot de sinal atualmente selecionado na lista suspensa (ou seja, "signal_1") agora tem um sinal armazenado.

### Envio de Sinal IR

Depois que um sinal for aprendido com sucesso, você poderá enviá-lo a qualquer momento.

1. Na lista suspensa **"Signal"**, certifique-se de ter selecionado o slot de sinal que deseja enviar, por exemplo, **"signal_1"**.
2. Encontre o botão **"Send"** e clique em **"PRESS"** ao lado dele.
3. O XIAO IR Mate transmitirá imediatamente o sinal armazenado no slot atualmente selecionado por meio de seus 3 emissores infravermelhos.
4. **Observação**: Se você selecionar na lista suspensa um slot de sinal ao qual nunca foi ensinado um sinal, clicar no botão de envio não terá efeito.

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_08.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## Interação Física e Indicação de Status

Além do controle via HA, você também pode entender e controlar o dispositivo por meio de interação física.

### Luz Indicadora de Status (LED Branco)

- **Piscar Lento (1Hz)**: O dispositivo está aguardando para se conectar a uma rede Wi-Fi.
- **Aceso Fixo**: O dispositivo está conectado com sucesso à rede Wi-Fi e operando normalmente.

### Feedback de Vibração

- **Vibração Curta (100ms)**: Usada para confirmação geral de operação, como ao tocar no dispositivo.
- **Vibração Longa (500ms)**: Usada para alertas de status importantes, como ao entrar no modo de aprendizado ou realizar uma redefinição de fábrica.

### Botão RESET

- **Pressão Curta (dentro de 1 segundo)**: O dispositivo será reiniciado, acompanhada por uma vibração curta. Isso é muito útil se o dispositivo deixar de responder.
- **Pressão Longa (mais de 5 segundos)**: O dispositivo **executará uma redefinição de fábrica**. Essa ação **apagará todas as credenciais de Wi-Fi salvas e todos os 10 sinais infravermelhos aprendidos**. Quando essa ação for executada, o dispositivo emitirá uma vibração longa como aviso. Após a conclusão, o dispositivo será reiniciado e retornará ao estado inicial de espera por configuração (LED piscando).

## Uso Avançado - Controle Inteligente de Ar-Condicionado

O modo básico de "gravar-reproduzir" fornecido pelo firmware de fábrica é universal, mas pode ser pouco prático ao controlar dispositivos com vários estados, como aparelhos de ar-condicionado (temperatura, modo, velocidade do ventilador etc.). Para obter um controle de ar-condicionado mais refinado e inteligente, podemos gravar um firmware ESPHome especializado para transformar o XIAO IR Mate de um "repetidor de sinal IR" em um verdadeiro "controlador inteligente de ar-condicionado".

Neste capítulo, usaremos um ar-condicionado Gree como exemplo detalhado, mas isso está longe de ser a única opção. O poderoso ecossistema do ESPHome oferece suporte a inúmeras marcas de ar-condicionado, e você pode facilmente seguir os conceitos deste guia, fazendo pequenas alterações no código de configuração, para obter controle inteligente para outras marcas como Midea, Daikin, Panasonic e mais.

### Vantagens Centrais

- **Controle com Estado**: Nada de simples reproduções. Você pode definir diretamente "24°C, Resfriar, Ventilador Automático" no HA, e o dispositivo gerará e enviará imediatamente o comando infravermelho correto.
- **Interface Mais Amigável**: Ele aparece como um cartão de Clima padrão no HA, tornando a operação intuitiva.
- **Economia de Espaço**: Não é necessário aprender um sinal separado para cada temperatura ou modo; uma única configuração pode controlar todas as funções do ar-condicionado.

### Pré-requisitos

1. **Instalar o ESPHome**: Se ainda não o fez, instale e inicie o add-on ESPHome na Home Assistant Add-on Store.
2. **Obter o Protocolo da Marca do seu Ar-Condicionado**: O ESPHome oferece suporte a muitos protocolos de marcas de ar-condicionado (como Gree, Midea, Daikin etc.). Você precisa saber a marca do seu ar-condicionado para selecionar o protocolo correto.

### Gravando Firmware Personalizado

1. **Criar uma Nova Configuração de Dispositivo**
      - Abra a interface do ESPHome no HA.
      - Clique no botão **"+ NEW DEVICE"** no canto inferior direito e, na janela pop-up, clique em **"Continue"**.
      - Dê um nome ao seu dispositivo (por exemplo, **xiao-ir-ac-controller**) e, em seguida, selecione o tipo de placa como **Seeed Studio XIAO ESP32C3**.
2. **Editar o Arquivo de Configuração**
      - Clique no botão **EDIT** no cartão do dispositivo recém-criado para entrar no editor de configuração YAML.
      - Exclua todo o conteúdo padrão no editor.
      - **Copie e cole completamente** o código abaixo no editor:

<Details>

```yaml title="seeed-ir-v1.yaml"
substitutions:
  name: "seeed-ir"
  friendly_name: "Gree AC Controller" # You can customize a more friendly name
  version: "v1"

esphome:
  name: "${name}-${version}"
  friendly_name: "${friendly_name}"
  name_add_mac_suffix: True

esp32:
  board: esp32-c3-devkitm-1
  framework:
    type: arduino

globals:
  - id: is_wifi_connected
    type: bool
    initial_value: 'false'
  - id: reset_press_time
    type: uint32_t
    initial_value: '0'
  - id: touch_count
    type: int
    restore_value: no
    initial_value: '0'
  - id: touch_timer
    type: unsigned long
    restore_value: no
    initial_value: '0'

logger:
  level: INFO

api:

ota:
  platform: esphome

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  on_connect:
    - globals.set: {id: is_wifi_connected, value: 'true'}
    - light.turn_on: rgb_light
  on_disconnect:
    - globals.set: {id: is_wifi_connected, value: 'false'}

captive_portal:

remote_transmitter:
  id: default_ir_transmitter
  pin: GPIO3
  carrier_duty_percent: 50%
  rmt_symbols: 48
  non_blocking: false

remote_receiver:
  id: default_ir_receiver
  pin:
    number: GPIO4
    inverted: true
  dump: raw # Keep for learning or debugging other infrared codes
  rmt_symbols: 96

# Gree Climate Control
climate:
  - platform: gree
    name: "Gree Air Conditioner" # The name displayed in Home Assistant
    id: gree_ac    # Internal ID used by ESPHome, for touch button control
    # --- Required configuration for the gree platform ---
    model: "yan"   # [IMPORTANT] This is a required parameter. Gree has multiple infrared protocols.
                   # You may need to try the following values to find the one that suits your air conditioner:
                   # "generic", "yan", "yaa", "yac", "yac1fb9", "yx1ff", "yag"
                   # "yan" is a common starting point.
    # Optional configuration:
    # sensor: my_temperature_sensor_id # If you have an external temperature sensor
    supports_cool: true
    supports_heat: true # If your Gree AC does not support heating, set to false
    # Note: According to the documentation, the gree platform does not seem to support receiver_id to sync the state from the original remote

binary_sensor:
  - platform: gpio
    id: touch_pad
    pin:
      number: GPIO5
      mode: INPUT_PULLDOWN
    on_state:
      then:
        - if:
            condition:
              binary_sensor.is_on: touch_pad
            then:
              - script.execute: vibe_short
              - lambda: |-
                  unsigned long current_time = millis();
                  if (current_time - id(touch_timer) < 300) {
                    id(touch_count)++;
                  } else {
                    id(touch_count) = 1;
                  }
                  id(touch_timer) = current_time;
                  ESP_LOGD("touch_pad", "Touch detected. Current count: %d", id(touch_count));
                  if (id(check_touch_actions_script).is_running()) {
                    id(check_touch_actions_script).stop();
                  }
                  id(check_touch_actions_script).execute();

  - platform: gpio
    id: reset_button
    pin:
      number: GPIO9 # Strapping Pin!
      mode: INPUT_PULLUP
    filters:
      - invert
    on_press:
      then:
        - lambda: id(reset_press_time) = millis();
    on_release:
      then:
        - lambda: |-
            uint32_t press_duration = millis() - id(reset_press_time);
            if (press_duration < 5000) {
              id(vibe_short).execute();
              ESP_LOGI("reset_button", "Short press: Restarting device.");
              ESP.restart();
            } else {
              id(vibe_long).execute();
              ESP_LOGI("reset_button", "Long press: Activating factory reset.");
              id(factory_reset_switch).turn_on();
            }

output:
  - platform: gpio
    id: vibration_output
    pin: GPIO6

switch:
  - platform: output
    id: vibration_switch
    name: "Vibration Motor"
    output: vibration_output
  - platform: factory_reset
    id: factory_reset_switch
    name: "Factory Reset"

light:
  - platform: esp32_rmt_led_strip
    rgb_order: GRB
    pin: GPIO7
    num_leds: 1
    rmt_symbols: 48
    chipset: ws2812
    name: "RGB Status Light"
    id: rgb_light
    default_transition_length: 0s
    on_turn_on:
      - light.control:
          id: rgb_light
          red: 1.0
          green: 1.0
          blue: 1.0
          brightness: 0.7
    effects:
      - addressable_scan:
      - addressable_rainbow:

script:
  - id: vibe_short
    then:
      - switch.turn_on: vibration_switch
      - delay: 100ms
      - switch.turn_off: vibration_switch
  - id: vibe_long
    then:
      - switch.turn_on: vibration_switch
      - delay: 500ms
      - switch.turn_off: vibration_switch

  - id: check_touch_actions_script
    mode: restart
    then:
      - delay: 350ms
      - if: # Single-click action
          condition:
            lambda: 'return id(touch_count) == 1;'
          then:
            - logger.log: "Single Click: Toggling Gree AC Power"
            - lambda: |-
                // [IMPORTANT] Ensure the climate ID used below is gree_ac
                if (id(gree_ac).mode == climate::CLIMATE_MODE_OFF) {
                  ESP_LOGD("touch_action", "Gree AC is OFF, attempting to turn to COOL mode.");
                  auto call = id(gree_ac).make_call();
                  call.set_mode(climate::CLIMATE_MODE_COOL);
                  call.set_target_temperature(25);
                  call.perform();
                } else {
                  ESP_LOGD("touch_action", "Gree AC is ON, attempting to turn OFF.");
                  auto call = id(gree_ac).make_call();
                  call.set_mode(climate::CLIMATE_MODE_OFF);
                  call.perform();
                }
          else: # If not a single click, then check for a double click
            - if:
                condition:
                  lambda: 'return id(touch_count) == 2;'
                then: # Double-click action
                  - logger.log: "Double Click: Gree AC Temperature Up"
                  - lambda: |-
                      // [IMPORTANT] Ensure the climate ID used below is gree_ac
                      if (id(gree_ac).mode != climate::CLIMATE_MODE_OFF) {
                        float current_temp = id(gree_ac).target_temperature;
                        float max_temp = id(gree_ac).get_traits().get_visual_max_temperature();
                        if (current_temp < max_temp) {
                           ESP_LOGD("touch_action", "Increasing Gree AC temp from %.1f to %.1f", current_temp, current_temp + 1.0f);
                           auto call = id(gree_ac).make_call();
                           call.set_target_temperature(current_temp + 1.0f);
                           call.perform();
                        } else {
                          ESP_LOGD("touch_action", "Gree AC already at max temp: %.1f", max_temp);
                        }
                      }
                else: # If not a double click, then check for a triple click
                  - if:
                      condition:
                        lambda: 'return id(touch_count) == 3;'
                      then: # Triple-click action
                        - logger.log: "Triple Click: Gree AC Temperature Down"
                        - lambda: |-
                            // [IMPORTANT] Ensure the climate ID used below is gree_ac
                            if (id(gree_ac).mode != climate::CLIMATE_MODE_OFF) {
                              float current_temp = id(gree_ac).target_temperature;
                              float min_temp = id(gree_ac).get_traits().get_visual_min_temperature();
                              if (current_temp > min_temp) {
                                 ESP_LOGD("touch_action", "Decreasing Gree AC temp from %.1f to %.1f", current_temp, current_temp - 1.0f);
                                 auto call = id(gree_ac).make_call();
                                 call.set_target_temperature(current_temp - 1.0f);
                                 call.perform();
                              } else {
                                ESP_LOGD("touch_action", "Gree AC already at min temp: %.1f", min_temp);
                              }
                            }
                      else: # Other click counts
                        - logger.log:
                            level: WARN
                            format: "Touch Action: No specific action defined for %d clicks."
                            args: ['id(touch_count)']
      # Reset the touch count
      - lambda: 'id(touch_count) = 0; ESP_LOGD("check_touch_actions", "Touch count reset to 0.");'

interval:
  - id: blink_rgb_interval
    interval: 500ms
    then:
      - if:
          condition:
            lambda: 'return !id(is_wifi_connected);'
          then:
            - lambda: |-
                static bool intervalos_led_state = false;
                intervalos_led_state = !intervalos_led_state;
                auto call = id(rgb_light).turn_on();
                if (intervalos_led_state) {
                  call.set_rgb(0, 0, 1);
                  call.set_brightness(0.5);
                } else {
                  call.set_rgb(0, 0, 0); // Off
                }
                call.perform();
```

</Details>

3. **Personalize sua configuração**
      - **Wi-Fi**: Se você não usar arquivos `!secret`, descomente a seção `wifi:` e substitua `Your_WiFi_SSID` e `Your_WiFi_Password` pelas informações da sua própria rede Wi-Fi.
      - **Selecione o protocolo AC correto**: Este é o passo mais crítico\! O exemplo usa `platform: gree`. Se o seu ar-condicionado não for Gree, substitua pela plataforma da sua marca. Como encontrar as marcas compatíveis? Acesse a página [ESPHome Climate Components](https://esphome.io/components/climate/index.html), que lista todas as marcas compatíveis e seus nomes de plataforma (por exemplo, `daikin`, `midea`, `panasonic_ac`, etc.).
          - Depois de selecionar a plataforma correspondente, talvez você também precise ajustar parâmetros como `model` ou modos suportados de acordo com a documentação dessa plataforma.
4. **Compilar e gravar**
      - Salve sua configuração YAML.
      - Conecte seu XIAO IR Mate ao computador que está executando o HA por meio de um cabo USB.
      - Clique no botão **INSTALL** no cartão do dispositivo.
      - Selecione a opção **"Plug into this computer"**.
      - O ESPHome irá compilar o firmware e gravá-lo no seu dispositivo pelo navegador. Siga as instruções na tela para concluir o processo.
      - Após uma gravação bem-sucedida, o dispositivo será reiniciado automaticamente e se conectará ao Wi-Fi configurado.

### Uso no Home Assistant

Depois de gravar o firmware e reiniciar, seu dispositivo aparecerá no Home Assistant como uma nova entidade de Clima (por exemplo, `climate.gree_air_conditioner`). Você pode adicionar um "Thermostat Card" ao seu painel para obter um painel de controle de ar-condicionado totalmente funcional, permitindo ajustar livremente a temperatura, o modo, a velocidade do ventilador e o swing, como em um ar-condicionado inteligente nativo\!

### Perspectivas futuras: abra sua mente

Parabéns! Agora você já dominou os dois usos principais do XIAO IR Mate: um é a função "controle remoto universal com aprendizado" pronta para uso, e o outro é o modo "controlador de clima profissional" para controle preciso de ar-condicionado.

Mas não pare por aí, porque isso é só o começo! A verdadeira diversão do XIAO IR Mate está em sua incrível flexibilidade. Pense nele como um "bloco de construção criativo" definido por você, que pode ser usado para criar coisas muito além da sua imaginação. Aqui vão duas ideias inspiradoras para abrir sua mente:

#### Ideia 1: Reviver controles remotos antigos como botões de cena universais

**Cenário de aplicação**

Olhe ao seu redor. Você tem vários controles remotos antigos parados por aí? Controles de TVs, DVDs ou aparelhos de som antigos, cheios de botões e com uma ótima sensação de uso, mas que agora só acumulam poeira em uma gaveta. Não seria legal se você pudesse usar os botões desses controles para acender suas luzes inteligentes, iniciar o robô aspirador ou até acionar cenas complexas de "bem-vindo em casa"?

**Como funciona**

O núcleo dessa ideia é transformar o XIAO IR Mate de um "transmissor" em um "ouvinte". Ele deixa de controlar ativamente outros dispositivos e passa a ouvir silenciosamente os sinais de qualquer controle remoto antigo, então avisa o Home Assistant: "Eu ouvi um sinal, você decide o que fazer!"

- **Etapas de implementação**

  1. **Configurar um firmware "ouvinte":** No firmware ESPHome, a configuração principal é o componente `remote_receiver`. A única função do dispositivo após ser ligado é "ficar atento" aos sinais IR.

  2. **Identificar o "código secreto" de cada botão:** Pegue um controle remoto antigo e pressione qualquer botão apontando para o dispositivo. Nos logs do ESPHome, você verá o código IR exclusivo do botão (como uma sequência de dados `RAW` ou um código de protocolo `NEC`). Anote esse "código secreto".

  3. **Criar regras de automação no HA:** No Home Assistant, configure uma automação com a condição de disparo: "Quando o XIAO IR Mate detectar um código IR secreto específico".

  4. **Definir a ação:** A ação da regra pode ser qualquer coisa\! Por exemplo:

     - Quando detectar o **botão "Volume +" do controle da TV** -> **Iniciar o robô aspirador** para começar a limpeza.

     - Quando detectar o **botão "Play" de um Apple Remote** -> **Ligar a luz do banheiro**.

     - Quando detectar o **botão "Red" do controle do DVD** -> Executar a cena "Modo Ausente".

- **Vantagens dessa abordagem**

  - **Reaproveitamento e sustentabilidade:** Dá uma nova vida a hardwares parados, colocando o lixo eletrônico para trabalhar novamente, o que economiza dinheiro e é bom para o meio ambiente.

  - **Experiência real de botão físico:** Em comparação com uma tela sensível ao toque, um controle remoto físico com dezenas de botões distintos e com boa sensação de clique é mais direto e satisfatório em muitos cenários.

  - **Alto fator de aceitação da esposa (WAF):** Para familiares que não estão acostumados com apps de celular ou assistentes de voz (como idosos ou crianças), dizer "aperte este botão para acender a luz" é a forma de interação mais intuitiva e fácil de aprender.

  - **Um "interruptor inteligente" que não precisa ser recarregado:** As pilhas de um controle remoto tradicional costumam durar um ou dois anos, o que é muito mais conveniente do que muitos gadgets inteligentes que precisam ser recarregados com frequência.

#### **Ideia 2: Criar um "botão mágico" universal para IoT**

**Conceito central**

O botão touch do dispositivo precisa mesmo servir apenas para controlar IR? Claro que não\! Podemos transformá-lo em um botão mágico que controla **qualquer coisa** na sua casa. A chave é "desacoplar" — separar completamente a ação física de "apertar o botão" da ação inteligente de "o que realmente acontece".

- **Etapas de implementação**

  1. **Fazer do botão apenas um "repórter":** No firmware, configure o botão touch (para toque simples, duplo toque, pressão longa) para não executar nenhuma tarefa específica, mas apenas enviar uma "notificação de evento" ao Home Assistant. Por exemplo, em um duplo toque, ele apenas informa ao HA: "Ei\! Fui pressionado duas vezes!"

  2. **Deixar o HA ser o "comandante":** No Home Assistant, crie automações que escutem especificamente esses vários "relatos" (eventos) vindos do botão.

  3. **Conectar tudo, fazer qualquer coisa:** Assim que o HA receber um relato, ele pode comandar qualquer dispositivo da sua casa a agir\!

     - Recebe um relato de **"toque simples"** -> Alterna todas as **luzes Zigbee** da casa entre ligado/desligado.

     - Recebe um relato de **"duplo toque"** -> Ordena que o **robô aspirador** comece a limpeza.

     - Recebe um relato de **"pressão longa"** -> Executa uma cena "Modo Filme", fechando as cortinas, diminuindo as luzes e ligando o projetor e o sistema de som.

- **Vantagens dessa abordagem**

  - **Quebre fronteiras, possibilidades infinitas:** Seu botão touch deixa de ser apenas parte de um "controle remoto IR" e passa a ser um interruptor físico para toda a sua casa inteligente, capaz de controlar qualquer dispositivo conectado ao HA.

  - **Defina com flexibilidade, mude quando quiser:** Hoje o duplo toque inicia o robô aspirador, mas amanhã você quer que ele toque música? Basta editar a automação na interface do HA, sem precisar mexer no firmware.

  - **A interação mais intuitiva:** Dê à sua família a forma mais simples de controlar as coisas. Um botão físico com retorno tátil costuma ser muito mais conveniente e elegante do que abrir um app no celular.

Em resumo, não veja o XIAO IR Mate apenas como uma ferramenta de IR. Pense nele como um mini-robô conectado ao Wi-Fi, com senso de toque e uma "voz" (o emissor IR). O que ele pode fazer é limitado apenas pela sua imaginação!

## Perguntas frequentes (FAQ)

> **P: Por que não consigo encontrar o hotspot do XIAO IR Mate no meu celular?**
> **R:** Confirme se o dispositivo está devidamente alimentado via Type-C. Verifique se o LED branco está piscando. Se a luz estiver apagada, tente trocar o cabo ou a fonte de alimentação. Se o dispositivo já tiver sido configurado com sucesso em uma rede antes, ele não criará novamente um hotspot AP, a menos que a conexão de rede falhe ou que ele tenha sido restaurado para as configurações de fábrica mantendo o botão RESET pressionado por um longo tempo.

> **P: O que devo fazer se o aprendizado de IR falhar? (Firmware de fábrica)**
> **R:** Certifique-se de que o controle remoto original tenha carga de bateria suficiente e seja mantido o mais próximo possível do receptor do IR Mate (geralmente o componente preto semitransparente). Além disso, evite realizar o processo de aprendizado sob luz forte ou próximo a outras fontes de interferência infravermelha.

> **P: O dispositivo aparece como offline no HA?**
> **R:** Verifique se o Wi-Fi da sua casa está funcionando corretamente e se o IR Mate está dentro da área de cobertura do sinal Wi-Fi. Você pode tentar pressionar rapidamente o botão RESET para reiniciar o dispositivo.

> **P: Depois de gravar um firmware personalizado, como restauro o firmware de fábrica?**
> **R:** Você precisará obter o arquivo `.bin` do firmware de fábrica ou seu arquivo-fonte YAML do ESPHome e, em seguida, gravá-lo novamente via ESPHome para sobrescrever o firmware personalizado.

> **P: Como uso os sinais aprendidos (firmware de fábrica) ou o controle de AC (firmware avançado) em automações?**
> **R:** No editor de automações ou scripts do HA, escolha "Call service".

## Recursos

- **[ZIP]** [Hardware](https://files.seeedstudio.com/wiki/XIAO_IR_MATE/XIAO_IR_REMOTE_hardware.zip)
- **[ZIP]** [Software](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/xiao_smart_ir_mate)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos\! Estamos aqui para oferecer diferentes formas de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
