---
title: Primeiros Passos com o XIAO IR Mate Smart IR Remote
description: |
  Um controle remoto IR inteligente da Seeed Studio, projetado para integrar eletrodomésticos tradicionais como TVs e aparelhos de ar-condicionado ao seu ecossistema de casa inteligente com Home Assistant.
image: https://files.seeedstudio.com/wiki/XIAO_IR_MATE/XIAO-Smart-IR-Mate.webp
slug: /XIAO_IR_Mate_Smart_IR_Remote
sku: 109990586
keywords:
  - XIAO
  - Home Assistant
  - Smart Home
sidebar_position: 5
last_update:
  author: TienjuiWong
  date: 07/17/2025
createdAt: '2025-07-18'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/XIAO_IR_Mate_Smart_IR_Remote/
---

# Primeiros Passos com o XIAO IR Mate Smart IR Remote (Para Home Assistant)

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

O **XIAO IR Mate** é um módulo compacto de infravermelho inteligente baseado no **Seeed Studio XIAO ESP32-C3**. Ele integra transmissão e recepção de infravermelho, detecção de toque, feedback por vibração e indicação de status. Conectado via Wi-Fi, pode ser perfeitamente integrado ao seu ecossistema de casa inteligente com Home Assistant. Sua missão principal é tornar “inteligentes” todos os seus aparelhos tradicionais que usam controles remotos infravermelhos (como TVs, aparelhos de ar-condicionado, ventiladores etc.) e permitir que você os controle pelo HA para automação.

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

- **Integração Contínua com o Home Assistant**

Baseado na plataforma ESPHome, o IR Mate é descoberto automaticamente pelo Home Assistant, oferecendo entidades simples para automação e criação de scripts sem esforço.

- **Poderoso Aprendizado e Transmissão de IR**

Equipado com três emissores IR de alta potência para cobertura de 360° e um receptor de alta sensibilidade. Suporta o aprendizado de até 10 comandos IR de controles remotos padrão (por exemplo, controle de projetores, aparelhos de ar-condicionado, temporizadores) para reprodução com um toque no Home Assistant.

- **Feedback Intuitivo de Interação Física**

Possui um motor de vibração e um LED indicador. Vibrações curtas confirmam ações, vibrações longas indicam o modo de aprendizado e o LED exibe o status da rede, simplificando a configuração e a solução de problemas.

- **Atualizável para um Controlador de Ar-Condicionado Inteligente Avançado**

Grave um firmware personalizado para transformar o IR Mate em um controle inteligente de ar-condicionado. Defina temperatura, modo e velocidade do ventilador com precisão diretamente no Home Assistant, com geração automática de códigos IR, eliminando aprendizado repetitivo.

- **Design Compacto, Alimentado por USB-C**

## Visão Geral do Hardware

Compreender os componentes básicos do dispositivo ajudará você a usá-lo melhor:

- **Controlador Principal**: Seeed Studio XIAO ESP32-C3, oferecendo desempenho poderoso e conectividade Wi-Fi.
- **Fonte de Alimentação**: Alimentado pela porta Type-C onboard (5V).
- **Emissor de Infravermelho**: 3 LEDs infravermelhos de alta potência (usando o pino D1), garantindo transmissão de sinal de 360° sem pontos cegos.
- **Receptor de Infravermelho**: 1 receptor infravermelho de alta precisão (usando o pino D2), para aprender sinais de outros controles remotos.
- **Sensor de Toque**: O dispositivo integra um módulo de toque (usando o pino D3). Um único toque aciona uma vibração curta (0,5 segundos) como feedback de operação.
- **Motor de Vibração**: Um motor de vibração embutido (usando o pino D4) fornece feedback tátil claro com diferentes durações de vibração.
- **LED Indicador de Status**: Uma luz LED (usando o pino D5) para indicar os diferentes estados de funcionamento do dispositivo.
- **Botão de Reset**: Um botão físico no dispositivo (conectado ao pino D0), usado para reinicialização ou restauração de fábrica.

## Primeiro Uso e Configuração de Rede (Firmware de Fábrica)

Quando você receber o dispositivo pela primeira vez, siga estas etapas para concluir a configuração inicial.

### Passo 1: Ligar o Dispositivo

Use um cabo USB Type-C padrão para alimentar o dispositivo. Após a inicialização, o dispositivo entrará em um estado de espera para configuração, e você verá o **LED branco piscando a uma frequência de 1Hz**.

### Passo 2: Entrar no Modo de Provisionamento AP

Quando a rede não está configurada, o dispositivo criará automaticamente um hotspot Wi-Fi (AP) chamado **XIAO IR Mate** (ou **Seeed_ir**, dependendo do que você encontrar).

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

### Passo 3: Conectar-se ao Hotspot e Configurar a Rede

1. Abra as configurações de Wi-Fi do seu celular ou computador, procure e conecte-se à rede chamada **XIAO IR Mate**.

:::note
O hotspot possui a senha de rede padrão ‘12345678’.
:::

2. Após uma conexão bem-sucedida, seu dispositivo normalmente abrirá automaticamente uma página de configuração. Se isso não acontecer, abra manualmente um navegador e acesse **[http://192.168.4.1](http://192.168.4.1)**.
3. Nessa página, você verá uma lista de redes Wi-Fi. Selecione a **rede Wi-Fi de 2,4GHz (SSID)** da sua casa e insira a senha correta.
4. Clique em "Connect" ou "Save". O dispositivo tentará se conectar à rede Wi-Fi que você forneceu.

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect_02.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

### Passo 4: Conexão Bem-sucedida

Assim que o dispositivo se conectar com sucesso ao Wi-Fi da sua casa, o hotspot AP será automaticamente desligado e a **luz indicadora de status ficará acesa continuamente**. A configuração de rede está concluída.

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect_03.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## Integração com o Home Assistant (Firmware de Fábrica)

O firmware do dispositivo é baseado em **ESPHome**, o que torna muito fácil integrá-lo ao Home Assistant.

1. **Descoberta Automática**: Certifique-se de que o host do Home Assistant e o XIAO IR Mate estejam conectados à mesma rede local. Normalmente, o HA descobrirá automaticamente novos dispositivos ESPHome. Você verá uma notificação em **Settings \> Devices & Services** dizendo "New device discovered".
2. **Adição Manual**: Se não for descoberto automaticamente, você pode clicar no botão **[Add Integration]** no canto inferior direito, procurar por **"ESPHome"** e então inserir o hostname do dispositivo (por exemplo, **xiao-ir-mate**) ou o endereço IP para adicioná-lo manualmente.

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

3. **Painel do Dispositivo**: Após a adição bem-sucedida, o XIAO IR Mate aparecerá como um dispositivo no HA. Seu painel conterá as seguintes entidades para controlar 10 diferentes sinais infravermelhos:

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_07.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## Detalhes das Funções Principais (Firmware de Fábrica)

Se você quiser restaurar seu dispositivo ou atualizar o firmware, pode ir diretamente pelo botão abaixo. Criamos uma página dedicada ao XIAO Gadget Direct Flash Firmware.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://gadgets.seeed.cc/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Flash the Firmwave</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Aprendizado de Sinais IR

Quando você precisar ensinar ao IR Mate um novo comando de controle remoto, siga estas etapas. A interface principal do firmware de fábrica inclui uma **lista de seleção de slots de sinal**, juntamente com os botões **Learn** e **Send**.

1. No painel de dispositivo do Home Assistant, primeiro encontre a lista suspensa de seleção chamada **"Signal"**.
2. Clique na lista suspensa e selecione o slot de sinal que deseja usar, por exemplo, **"signal_1"**.
3. Após selecionar, encontre o botão **"Learn"** e clique em **"PRESS"** ao lado dele.
4. O XIAO IR Mate entrará agora no modo de aprendizado e começará a **vibrar continuamente**, indicando que você pode iniciar o pareamento.
5. Aponte o controle remoto original para a janela do receptor infravermelho do IR Mate e pressione rapidamente o botão que você deseja ensinar.
6. Depois que o IR Mate receber e registrar o sinal com sucesso, a **vibração irá parar**, indicando que o aprendizado foi bem-sucedido.
7. Nesse momento, um indicador de status chamado **"Is Learned Signal"** mudará automaticamente para "ON", indicando que o slot de sinal atualmente selecionado na lista suspensa (ou seja, "signal_1") agora tem um sinal armazenado.

### Envio de Sinal IR

Depois que um sinal for aprendido com sucesso, você poderá enviá-lo a qualquer momento.

1. Na lista suspensa **"Signal"**, verifique se você selecionou o slot de sinal que deseja enviar, por exemplo, **"signal_1"**.
2. Encontre o botão **"Send"** e clique em **"PRESS"** ao lado dele.
3. O XIAO IR Mate irá transmitir imediatamente o sinal armazenado no slot atualmente selecionado por meio de seus 3 emissores infravermelhos.
4. **Observação**: Se você selecionar na lista suspensa um slot de sinal ao qual nunca foi ensinado um sinal, clicar no botão de envio não terá efeito.

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_08.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## Interação Física e Indicação de Status

Além do controle pelo HA, você também pode entender e controlar o dispositivo por meio de interação física.

### Luz Indicadora de Status (LED Branco)

- **Piscagem Lenta (1Hz)**: O dispositivo está aguardando a conexão a uma rede Wi-Fi.
- **Aceso Fixo**: O dispositivo está conectado com sucesso à rede Wi-Fi e operando normalmente.

### Feedback de Vibração

- **Vibração Curta (100ms)**: Usada para confirmação geral de operação, como ao tocar no dispositivo.
- **Vibração Longa (500ms)**: Usada para alertas de status importantes, como ao entrar no modo de aprendizado ou realizar uma redefinição de fábrica.

### Botão RESET

- **Pressão Curta (dentro de 1 segundo)**: O dispositivo será reiniciado, acompanhada por uma vibração curta. Isso é muito útil se o dispositivo parar de responder.
- **Pressão Longa (mais de 5 segundos)**: O dispositivo irá **executar uma redefinição de fábrica**. Essa ação **apagará todas as credenciais de Wi-Fi salvas e todos os 10 sinais infravermelhos aprendidos**. Quando essa ação for executada, o dispositivo emitirá uma vibração longa como aviso. Após a conclusão, o dispositivo será reiniciado e retornará ao estado inicial de espera por configuração (LED piscando).

## Uso Avançado - Controle Inteligente de Ar-Condicionado

O modo básico de "gravar-reproduzir" fornecido pelo firmware de fábrica é universal, mas pode ser pouco prático ao controlar dispositivos com múltiplos estados, como ar-condicionados (temperatura, modo, velocidade do ventilador, etc.). Para obter um controle de ar-condicionado mais refinado e inteligente, podemos gravar um firmware ESPHome especializado para transformar o XIAO IR Mate de um "repetidor de sinal IR" em um verdadeiro "controlador inteligente de ar-condicionado".

Neste capítulo, usaremos um ar-condicionado Gree como exemplo detalhado, mas isso está longe de ser a única opção. O poderoso ecossistema do ESPHome oferece suporte a inúmeras marcas de ar-condicionado, e você pode facilmente seguir os conceitos deste guia, fazendo pequenas alterações no código de configuração, para obter controle inteligente para outras marcas como Midea, Daikin, Panasonic e outras.

### Vantagens Centrais

- **Controle com Estado**: Não há mais simples reproduções. Você pode definir diretamente "24°C, Resfriar, Ventilador Automático" no HA, e o dispositivo irá gerar e enviar imediatamente o comando infravermelho correto.
- **Interface Mais Amigável**: Ele aparece como um cartão Climate padrão no HA, tornando a operação intuitiva.
- **Economiza Espaço**: Não é necessário aprender um sinal separado para cada temperatura ou modo; uma única configuração pode controlar todas as funções do ar-condicionado.

### Pré-requisitos

1. **Instalar o ESPHome**: Se ainda não o fez, instale e inicie o add-on ESPHome na Home Assistant Add-on Store.
2. **Obter o Protocolo da Marca do seu Ar-Condicionado**: O ESPHome oferece suporte a muitos protocolos de marcas de ar-condicionado (como Gree, Midea, Daikin, etc.). Você precisa saber a marca do seu ar-condicionado para selecionar o protocolo correto.

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

<summary>seeed-ir-v2.yaml</summary>
```yaml
# ==== AUTO-SYNC START: xiao_smart_ir_mate/xiao_smart_ir_mate.yaml ====

substitutions:
  name: "xiao-smart-ir-mate"
  friendly_name: "XIAO Smart IR Mate"

esphome:
  name: "${name}"
  friendly_name: "${friendly_name}"
  name_add_mac_suffix: True
  project:
    name: "xiao.smart-ir-mate"
    version: "2.0"

esp32:
  board: seeed_xiao_esp32c3
  framework:
    type: arduino

globals:
  - id: is_wifi_connected
    type: bool
    initial_value: 'false'

  - id: reset_press_time
    type: uint32_t
    initial_value: '0'

  - id: touch_timer
    type: unsigned long
    restore_value: no
    initial_value: '0'

  # open or close the learning mode
  - id: is_learning_mode
    type: bool
    initial_value: 'false'

  # signal index , you can select the signal index on ESPHome
  - id: signal_select_index
    type: int
    restore_value: no
    initial_value: '0'

  # Read the signals stored in nvs and store them in this vector
  - id: send_data_vector
    type: std::vector<long int>
    restore_value: no

  - id: filter_size
    type: int
    initial_value: '10'

# Enable logging
logger:
  level: INFO

# Enable Home Assistant API
api:

ota:
  - platform: esphome
    password: "15afb09b5aba7b3d6a6ba01180c60df5"

wifi:
 # ssid: !secret wifi_ssid
 # password: !secret wifi_password
  on_connect:
    - globals.set:
        id: is_wifi_connected
        value: 'true'
    - light.turn_on: rgb_light
    - lambda: |-
        ESP_LOGI("ir", "IP address: %s", ::esphome::wifi::global_wifi_component->wifi_sta_ip_addresses()[0].str().c_str());

  on_disconnect:
    - globals.set:
        id: is_wifi_connected
        value: 'false'

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    # ssid: "XIAO Smart IR Mate"
    password: "12345678"

captive_portal:

# Custom components
external_components:
  - source:
      type: git        # git component
      url: https://github.com/Seeed-Studio/xiao-esphome-projects  # Path where the component is github
      ref: main   # Branch name
    components: [Flash_comp]   # Explicitly specify the components to import

# Component name
Flash_comp:
  id: signal_nvs  # Component id

remote_transmitter:
  id: my_transmitter
  pin: GPIO3
  carrier_duty_percent: 50%

remote_receiver:
  - id: rcvr
    pin:
      number: GPIO4
      inverted: true
    # Idle time, if the low level exceeds this time, it is considered as a new segment of the signal
    # That is "segmentation"
    idle: 65500us
    # Important, this parameter is used to segment the infrared signal
    # If a certain segment of the infrared signal is too long, it may be divided into several segments
    # For such a case, you must send the infrared signal strictly according to the corresponding timing, otherwise it will fail
    # If you don't want it to be segmented, you can reduce the frequency and adjust the idle parameter to make it receive as complete as possible
    clock_resolution: "500000"
    # Receive data: using raw data
    # In the infrared parsing of esphome, a signal (e.g., NEC) may be parsed into multiple signals (e.g., JVC, Pronto, etc.).
    # Here, we only retain the original signal and do not decode the protocol.
    on_raw:
      - switch.turn_off: vibration_switch
      - lambda: |-
          if (id(is_learning_mode)) {
            if (x.size() > id(filter_size)){
              ESP_LOGI("ir", "Saved signal index: %d", id(signal_select_index));
              id(signal_nvs).save_to_nvs(id(signal_select_index), x);
              id(send_data_vector).clear();
              id(send_data_vector) = id(signal_nvs).load_from_nvs<long int>(id(signal_select_index));
              id(is_learning_mode) = false;
              // Learned the signal, turn on the switch
              id(is_learned_signal_script).execute(true);
            }
          }

button:
  # Button in learning mode, you need to open learning mode first, and the signal will be saved
  - platform: template
    id: learn
    name: "Learn"
    on_press:
      - switch.turn_on: vibration_switch
      - lambda: |-
          id(is_learning_mode) = true;
          ESP_LOGI("ir", "Learning mode activated!");

  # Button in sending mode, according to your current index, read the signal from nvs and send it
  # Since it's using a script to send, it will always trigger a log print whether the sending is successful or not
  # That is, it will print Sending signal index
  # So when there is a log print but the control doesn't work, you need to write a separate receiving code to analyze the data
  # It is recommended to use the example program in the Arduino IRremote library.
  - platform: template
    id: transmit
    name: "Send"
    on_press:
      - lambda: |-
          if (id(send_data_vector).size() > 0) {
            id(send_raw).execute();
            ESP_LOGI("ir", "Sending signal index: %d", id(signal_select_index));
            ESP_LOGI("ir", "Sending signal size: %d", id(send_data_vector).size());
          } else {
            ESP_LOGI("ir", "Signal index %d not learned", id(signal_select_index));
          }

# Signal selection dropdown list
# Provides ten signals to choose from, and records the index
select:
  - platform: template
    name: signal_select
    id: signal_select
    options:
      - "Signal0"
      - "Signal1"
      - "Signal2"
      - "Signal3"
      - "Signal4"
      - "Signal5"
      - "Signal6"
      - "Signal7"
      - "Signal8"
      - "Signal9"
    initial_option: "Signal0"
    optimistic: true
    on_value:
      - lambda: |-
          id(signal_select_index) = i;
          ESP_LOGI("ir", "Current selected signal index: %d", i);
          id(send_data_vector).clear();
          id(send_data_vector) = id(signal_nvs).load_from_nvs<long int>(id(signal_select_index));
          if (id(send_data_vector).size() > 0) {
            id(is_learned_signal_script).execute(true);
          } else {
            id(is_learned_signal_script).execute(false);
          }

switch:
  - platform: output
    id: vibration_switch
    name: "Vibration device"
    output: vibration_output

  - platform: factory_reset
    id: factory_switch
    name: "Restart with Factory Default Settings"

  # Has the signal been learned?
  # If the signal has been learned, turn on this switch.
  # Otherwise, turn off this switch.
  - platform: template
    id: is_learned_signal_switch
    name: "Is Learned Signal?"
    optimistic: true

light:
  - platform: esp32_rmt_led_strip
    rgb_order: GRB
    pin: GPIO7 # D5
    num_leds: 1
    chipset: WS2812
    name: "WIFI RGB Light"
    id: rgb_light
    rmt_symbols: 48

binary_sensor:
  - platform: gpio
    id: touch_pad
    pin:
      number: GPIO5 # D3
      mode: INPUT_PULLDOWN
    on_state:
      then:
        - lambda: |-
            id(vibe).execute(100);
            id(touch_timer) = millis();
            if (id(check_touch_delay).is_running()) {
              id(check_touch_delay).stop();
              delay(10);
            }
            id(check_touch_delay).execute();

  - platform: gpio
    id: reset_button
    pin:
      number: GPIO9 # D9
      mode: INPUT_PULLUP
    filters:
      invert

    on_press:
      then:
        - lambda: |-
            id(reset_press_time) = millis();

    on_release:
      then:
        - lambda: |-
            uint32_t press_duration = millis() - id(reset_press_time);
            if (press_duration < 5000) {
              id(vibe).execute(100);
              ESP_LOGI("ir", "Restart Device");
              ESP.restart();
            } else {
              // clear all learned signals
              for (int i = 0; i < 10; i++) {
                id(signal_nvs).clear_signal_by_index(i);
              }
              ESP_LOGI("ir", "Restart with Factory Default Settings");
              id(vibe).execute(500);
              id(factory_switch).turn_on();
            }

output:
  - platform: gpio
    id: vibration_output
    pin: GPIO6 # D4

script:
  - id: vibe
    parameters:
      delay_ms: int
    then:
      - switch.turn_on: vibration_switch
      - delay: !lambda return delay_ms;
      - switch.turn_off: vibration_switch

  - id: check_touch_delay
    then:
      - delay: 300ms
      - lambda: |-
          unsigned long current_time = millis();
          if (current_time - id(touch_timer) >= 300) {
            ESP_LOGI("check click", "single click action");
            id(transmit).press();
          }

  # Send infrared signal
  # The saved signal is the original signal, we do not encode or decode, just send
  - id: send_raw
    then:
      - remote_transmitter.transmit_raw:
          code: !lambda return id(send_data_vector);
          carrier_frequency: 38000Hz
          repeat: 1

  # Used to indicate whether the signal can be sent
  # If there is a signal, turn on the switch
  # Otherwise, turn off the switch
  - id: is_learned_signal_script
    parameters:
      is_learned_signal: bool
    then:
      - lambda: |-
          if (is_learned_signal) {
            id(is_learned_signal_switch).turn_on();
          } else {
            id(is_learned_signal_switch).turn_off();
          }

interval:
  - id: blink_rgb
    interval: 500ms
    then:
      - lambda: |-
          if (!id(is_wifi_connected)) {
            static int state = 0;
            if (state == 1) {
              auto call = id(rgb_light).turn_on();
              call.set_rgb(1.0, 1.0, 1.0);
              call.set_transition_length(0);
              call.perform();
            } else {
              auto call = id(rgb_light).turn_off();
              call.set_transition_length(0);
              call.perform();
            }
            state = !state;
          }
# ==== AUTO-SYNC END ====
```

</Details>

3. **Personalize Sua Configuração**
      - **Wi-Fi**: Se você não usar arquivos `!secret`, descomente a seção `wifi:` e substitua `Your_WiFi_SSID` e `Your_WiFi_Password` pelas informações da sua própria rede Wi-Fi.
      - **Selecione o protocolo AC correto**: Este é o passo mais crítico\! O exemplo usa `platform: gree`. Se o seu ar-condicionado não for Gree, substitua pela plataforma da sua marca. Como encontrar as marcas compatíveis? Acesse a página [ESPHome Climate Components](https://esphome.io/components/climate/index.html), que lista todas as marcas suportadas e seus nomes de plataforma (por exemplo, `daikin`, `midea`, `panasonic_ac`, etc.).
          - Depois de selecionar a plataforma correspondente, talvez você também precise ajustar parâmetros como `model` ou modos suportados de acordo com a documentação dessa plataforma.
4. **Compilar e Gravar**
      - Salve sua configuração YAML.
      - Conecte o seu XIAO IR Mate ao computador que está executando o HA por meio de um cabo USB.
      - Clique no botão **INSTALL** no cartão do dispositivo.
      - Selecione a opção **"Plug into this computer"**.
      - O ESPHome irá compilar o firmware e gravá-lo em seu dispositivo através do navegador. Siga as instruções na tela para concluir o processo.
      - Após uma gravação bem-sucedida, o dispositivo será reiniciado automaticamente e se conectará ao Wi-Fi configurado.

### Uso no Home Assistant

Depois de gravar o firmware e reiniciar, seu dispositivo aparecerá no Home Assistant como uma nova entidade de Clima (por exemplo, `climate.gree_air_conditioner`). Você pode adicionar um "Thermostat Card" ao seu painel para obter um painel de controle de ar-condicionado totalmente funcional, permitindo que você ajuste livremente a temperatura, o modo, a velocidade do ventilador e o swing, como em um ar-condicionado inteligente nativo\!

### Perspectivas Futuras: Abra Sua Mente

Parabéns\! Até agora, você já dominou os dois usos principais do XIAO IR Mate: um é a função pronta para uso de "aprendizado de controle remoto universal", e o outro é o modo "controlador de clima profissional" para controle preciso de ar-condicionado.

Mas não pare por aí, porque isso é apenas o começo\! A verdadeira diversão do XIAO IR Mate está em sua incrível flexibilidade. Pense nele como um "bloco de construção criativo" definido por você, que pode ser usado para construir coisas muito além da sua imaginação. Aqui estão duas ideias que abrem a mente para te inspirar:

#### Ideia 1: Reviver Controles Remotos Antigos como Interruptores Universais de Cenas

**Cenário de Aplicação**

Olhe ao seu redor. Você tem vários controles remotos antigos parados por aí? Controles de TVs antigas, DVDs ou aparelhos de som, com muitos botões e uma ótima sensação de uso, agora apenas acumulando poeira em uma gaveta. Não seria legal se você pudesse usar os botões desses controles para acionar suas luzes inteligentes, o robô aspirador, ou até cenas complexas de "bem-vindo em casa"?

**Como Funciona**

O núcleo dessa ideia é transformar o XIAO IR Mate de um "transmissor" em um "ouvinte". Ele não controla mais outros dispositivos ativamente, mas fica em silêncio ouvindo sinais de qualquer controle remoto antigo, e então diz ao Home Assistant: "Eu ouvi um sinal, você decide o que fazer\!"

- **Etapas de Implementação**

  1. **Configurar um firmware "ouvinte":** No firmware ESPHome, a configuração principal é o componente `remote_receiver`. A única função do dispositivo após ser ligado é "prestar atenção" aos sinais IR.

  2. **Identificar o "código secreto" de cada botão:** Pegue um controle remoto antigo e aperte qualquer botão apontando para o dispositivo. Nos logs do ESPHome, você verá o código IR exclusivo do botão (como uma sequência de dados `RAW` ou um código de protocolo `NEC`). Anote esse "código secreto".

  3. **Criar regras de automação no HA:** No Home Assistant, configure uma automação com a condição de disparo: "Quando o XIAO IR Mate detectar um código secreto IR específico".

  4. **Definir a Ação:** A ação da regra pode ser qualquer coisa\! Por exemplo:

     - Quando detectar o **botão "Volume +" do controle da TV** -> **Iniciar o robô aspirador** para começar a limpeza.

     - Quando detectar o **botão "Play" de um Apple Remote** -> **Ligar a luz do banheiro**.

     - Quando detectar o **botão "Red" do controle do DVD** -> Executar a cena "Modo Ausente".

- **Vantagens Dessa Abordagem**

  - **Reaproveitamento e Eco-Friendly:** Dá uma nova vida a hardwares parados, colocando o lixo eletrônico de volta ao trabalho, o que economiza dinheiro e é bom para o meio ambiente.

  - **Experiência Real de Botões Táteis:** Comparado a uma tela sensível ao toque, um controle físico com dezenas de botões distintos e firmes é mais direto e satisfatório em muitos cenários.

  - **Alto Fator de Aceitação da Esposa (WAF):** Para familiares que não estão acostumados com aplicativos de celular ou assistentes de voz (como idosos ou crianças), dizer "aperta este botão para acender a luz" é a forma de interação mais intuitiva e fácil de aprender.

  - **Um "Interruptor Inteligente" que Não Precisa de Recarga:** As pilhas de um controle remoto tradicional costumam durar um ou dois anos, o que é muito mais conveniente do que muitos dispositivos inteligentes que precisam de recarga frequente.

#### **Ideia 2: Criar um "Botão Mágico" Universal de IoT**

**Conceito Central**

O botão touch do dispositivo realmente precisa servir apenas para controlar IR? Claro que não\! Podemos transformá-lo em um botão mágico que controla **qualquer coisa** na sua casa. A chave é "desacoplar" — separar completamente a ação física de "apertar o botão" da ação inteligente de "o que realmente acontece".

- **Etapas de Implementação**

  1. **Fazer com que o botão seja apenas um "relator":** No firmware, configure o botão touch (para toque simples, toque duplo, pressão longa) para não executar nenhuma tarefa específica, mas apenas enviar uma "notificação de evento" ao Home Assistant. Por exemplo, em um toque duplo, ele apenas informa ao HA: "Ei\! Eu fui acionado com um toque duplo\!"

  2. **Deixar o HA ser o "Comandante":** No Home Assistant, crie automações que escutem especificamente esses vários "relatos" (eventos) vindos do botão.

  3. **Conectar Tudo, Fazer Qualquer Coisa:** Assim que o HA receber um relato, ele pode comandar qualquer dispositivo da sua casa para agir\!

     - Recebe um relato de **"toque simples"** -> Alterna todas as **luzes Zigbee** da casa entre ligar/desligar.

     - Recebe um relato de **"toque duplo"** -> Ordena que o **robô aspirador** comece a limpeza.

     - Recebe um relato de **"pressão longa"** -> Executa uma cena "Modo Cinema", fechando as cortinas, diminuindo as luzes e ligando o projetor e o sistema de som.

- **Vantagens Dessa Abordagem**

  - **Quebre Fronteiras, Possibilidades Infinitas:** Seu botão touch não é mais apenas parte de um "controle remoto IR", mas um interruptor físico para toda a sua casa inteligente, capaz de controlar qualquer dispositivo conectado ao HA.

  - **Defina com Flexibilidade, Mude Quando Quiser:** Hoje um toque duplo inicia o robô aspirador, mas amanhã você quer que ele toque música? Basta editar a automação na interface do HA, sem precisar mexer no firmware.

  - **A Interação Mais Intuitiva:** Dê à sua família a forma mais simples de controlar as coisas. Um botão físico com feedback tátil é frequentemente muito mais conveniente e elegante do que abrir um aplicativo no celular.

Em resumo, não veja o XIAO IR Mate apenas como uma ferramenta IR. Pense nele como um mini-robô conectado ao Wi-Fi, com senso de toque e uma "voz" (o emissor IR). O que ele pode fazer é limitado apenas pela sua imaginação\!

## Perguntas Frequentes (FAQ)

> **P: Por que não consigo encontrar o hotspot do XIAO IR Mate no meu celular?**
> **R:** Confirme se o dispositivo está devidamente alimentado via Type-C. Verifique se o LED branco está piscando. Se a luz estiver apagada, tente trocar o cabo ou a fonte de alimentação. Se o dispositivo já tiver sido configurado com sucesso em uma rede antes, ele não criará novamente um hotspot AP, a menos que a conexão de rede falhe ou ele tenha sido restaurado para os padrões de fábrica ao manter o botão RESET pressionado por um longo tempo.

> **P: O que devo fazer se o aprendizado IR falhar? (Firmware de Fábrica)**
> **R:** Certifique-se de que o controle remoto original tenha carga de bateria suficiente e esteja o mais próximo possível do receptor do IR Mate (normalmente o componente preto semitransparente). Além disso, evite realizar o processo de aprendizado sob luz forte ou perto de outras fontes de interferência infravermelha.

> **P: O dispositivo aparece como offline no HA?**
> **R:** Verifique se o seu Wi-Fi doméstico está funcionando corretamente e se o IR Mate está dentro da área de cobertura do sinal Wi-Fi. Você pode tentar pressionar rapidamente o botão RESET para reiniciar o dispositivo.

> **P: Depois de gravar um firmware personalizado, como posso restaurar o firmware de fábrica?**
> **R:** Você precisará obter o arquivo `.bin` do firmware de fábrica ou seu arquivo-fonte YAML do ESPHome, e então gravá-lo novamente via ESPHome para sobrescrever o firmware personalizado.

> **P: Como usar os sinais aprendidos (firmware de fábrica) ou o controle de AC (firmware avançado) em automações?**
> **R:** No editor de automações ou scripts do HA, escolha "Call service".

## Recursos

- **[ZIP]** [Hardware](https://files.seeedstudio.com/wiki/XIAO_IR_MATE/XIAO_IR_REMOTE_hardware.zip)
- **[ZIP]** [Software](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/xiao_smart_ir_mate)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos\! Estamos aqui para oferecer diferentes formas de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
