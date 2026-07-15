---
description: Conecte o SenseCAP Indicator ao Home Assistant via MQTT
title: Home Assistant - SenseCAP Indicator
keywords:
  - SenseCAP Indicator
  - Home Assistant
  - MQTT
  - ESP32S3
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-ha-thumbnail.jpg
slug: /SenseCAP_Indicator_Application_Home_Assistant
sku: E23010426,E24121301
sidebar_position: 1
last_update:
  date: 05/29/2026
  author: Spencer
createdAt: '2023-05-24'
updatedAt: '2026-05-29'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_Indicator_Application_Home_Assistant/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SenseCAP Indicator com Home Assistant via MQTT

Este guia mostra como transformar o SenseCAP Indicator em um painel complementar do Home Assistant. Após a configuração, o Indicator publica as leituras de seus sensores integrados no Home Assistant por meio de MQTT, e o Home Assistant pode enviar comandos de interruptor e controle deslizante de volta para a tela do Indicator.

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/PKMcutZDjDg" title="SenseCAP Indicator Home Assistant demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="button-container">
<a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">
        Adquira agora
</a>
</div>

## O que você vai construir

A integração usa três tópicos MQTT fixos:

| Direção | Tópico | Finalidade |
| --- | --- | --- |
| Indicator para Home Assistant | `indicator/sensor` | Publica leituras de temperatura, umidade, CO2 e tVOC |
| Home Assistant para Indicator | `indicator/switch/set` | Envia comandos de interruptor e controle deslizante |
| Indicator para Home Assistant | `indicator/switch/state` | Publica o estado atual do interruptor e do controle deslizante |

No lado do Home Assistant, você criará quatro entidades de sensor, seis entidades de interruptor e duas entidades numéricas. No lado do Indicator, você configurará o Wi-Fi e o broker MQTT e, em seguida, usará a tela como um painel de controle local.

## Pré-requisitos

- SenseCAP Indicator D1 ou hardware SenseCAP Indicator compatível
- Uma instância do Home Assistant em execução
- Um broker MQTT acessível tanto pelo Home Assistant quanto pelo Indicator
- ESP-IDF v5.4.x instalado se você planeja compilar o firmware a partir do código-fonte
- Um cabo USB para gravação e monitoramento serial

Antes de continuar, leia o [guia do usuário do SenseCAP Indicator](/pt-br/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator) se você não estiver familiarizado com a placa.

## 1. Prepare o Home Assistant

Se você já tem o Home Assistant e um broker MQTT, pode pular para a [Etapa 3: Compile e grave o firmware](#3-compile-e-grave-o-firmware).

O Home Assistant OS é o caminho mais simples porque oferece suporte a Add-ons, incluindo o broker Mosquitto e o File editor.

:::note
O Home Assistant pode ser executado em vários modos de instalação. Se você usar o Home Assistant Container, os Add-ons não estarão disponíveis, portanto será necessário executar separadamente um broker MQTT como Mosquitto ou EMQX.
:::

<Tabs>
<TabItem value="Home Assistant Green" label="Home Assistant Green">

<div align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA/HA_Green.png" style={{ width: 680, height: 'auto', "border-radius": '6.66px' }}/></div>

[Home Assistant Green](https://www.home-assistant.io/green) é uma forma plug-and-play de começar a usar o Home Assistant.

</TabItem>
<TabItem value="Home Assistant Yellow" label="Home Assistant Yellow">

<div align="center"><img width={680} src="https://www.home-assistant.io/images/yellow/home-assistant-yellow-exploded-and-labeled.png" style={{ width: 680, height: 'auto', "border-radius": '6.66px' }}/></div>

[Home Assistant Yellow](https://www.home-assistant.io/yellow) é um hub Home Assistant baseado no Raspberry Pi Compute Module 4.

</TabItem>
</Tabs>

Siga o [guia de instalação oficial do Home Assistant](https://www.home-assistant.io/installation/) para o seu dispositivo. Quando a configuração inicial estiver concluída, você deverá chegar ao painel do Home Assistant.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Installed.png"/></div>

## 2. Instale o Mosquitto e ative o MQTT

### Instalar Add-ons

No Home Assistant OS, instale dois Add-ons:

- **Mosquitto broker** para mensagens MQTT
- **File editor** para editar `configuration.yaml` pela interface web do Home Assistant

Vá em **Settings** > **Add-ons** > **Add-on Store** e instale ambos os Add-ons.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Setting.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Add-ons.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Press_Add.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add-on_Store.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

Para maior conveniência, ative **Show in sidebar** para o File editor.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_editor_show.png"/></div>

Após a instalação, você deverá ver ambos os Add-ons.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Two_Adds.png"/></div>

### Ativar a integração MQTT

Vá em **Settings** > **Devices & services** > **Integrations**, procure por **MQTT** e siga o fluxo de configuração.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Devices.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Config_MQTT.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

:::tip
Se o Home Assistant não descobrir seu broker automaticamente, insira o host do broker manualmente. Isso é comum quando você usa um broker externo em vez do Add-on Mosquitto.
:::

### Criar credenciais MQTT

Se o seu broker MQTT exigir autenticação, crie um nome de usuário e senha para o Indicator. No Add-on Mosquitto broker, adicione um usuário e mantenha as credenciais à mão; você irá inseri-las no Indicator mais tarde.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_User.png" style={{width:480, height:'auto'}} alt="Add User Button"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Create_User.png" style={{width:480, height:'auto'}} alt="Create User Form"/></div></td>
    </tr>
  </table>
</div>

## 3. Compile e grave o firmware

O firmware atual para Home Assistant é mantido no repositório `sensecap-indicator-ha`.

```bash
git clone https://github.com/Love4yzp/sensecap-indicator-ha
cd sensecap-indicator-ha
```

Instale o ESP-IDF v5.4.x e exporte `IDF_PATH` no seu shell. Em seguida, compile, grave e abra o monitor serial:

```bash
./dev build
./dev flash
./dev monitor
```

Para sair do monitor serial, pressione `Ctrl-]`.

:::tip
`./dev flash` detecta automaticamente a porta serial. Se você precisar especificar uma porta, execute `./dev flash -p /dev/ttyUSB0` ou use o nome de dispositivo serial correspondente ao seu sistema operacional.
:::

<details>
<summary>Comandos manuais do ESP-IDF</summary>

Se você preferir chamar o ESP-IDF diretamente:

```bash
. "$IDF_PATH/export.sh"
idf.py build
idf.py -p /dev/ttyUSB0 -b 460800 flash monitor
```

O firmware do ESP32-S3 usa ESP-IDF v5.4.x e LVGL 9. Mantenha as configurações do `sdkconfig.defaults` do projeto, especialmente `CONFIG_LV_MEM_CUSTOM=y`, PSRAM em modo OCT a 120 MHz, CPU a 240 MHz e flash QIO a 120 MHz.

</details>

## 4. Configure Wi-Fi e MQTT no Indicator

Após a gravação, configure o Wi-Fi e o MQTT na tela sensível ao toque do Indicator. O endereço do broker MQTT deve apontar para o broker usado pelo Home Assistant.

Você também pode configurar o MQTT pelo console serial:

| Comando | Descrição |
| --- | --- |
| `mqtthelp` | Imprime exemplos de broker, tópico e payload |
| `haconfig` | Imprime a configuração atual de MQTT e do Home Assistant |
| `setmqtt -a <addr>` | Define o endereço do broker |
| `setmqtt -a <addr> -c <client-id> -u <user> -p <pass>` | Define o endereço do broker, ID do cliente, nome de usuário e senha |

Exemplos:

```text
setmqtt -a 192.168.1.10 -c indicator-01 -u mqtt_user -p mqtt_password
setmqtt --addr mqtt://192.168.1.10:1883
setmqtt --addr mqtt://broker.emqx.io
```

Depois que o `setmqtt` for bem-sucedido, a configuração será salva na memória não volátil e o cliente MQTT será reiniciado automaticamente.

:::caution
O Indicator e o Home Assistant devem conseguir alcançar o mesmo broker MQTT. Se eles estiverem em redes ou VLANs diferentes, verifique o roteamento, as regras de firewall e as configurações de escuta do broker.
:::

## 5. Adicione entidades MQTT ao Home Assistant

O Home Assistant precisa de definições de entidades que correspondam aos tópicos do firmware. Abra o **File editor**, escolha `configuration.yaml` e adicione o seguinte bloco sob a chave de nível superior `mqtt:`.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_File_editor.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_Choose_config.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_edit.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

:::caution
Não substitua todo o seu `configuration.yaml`. Se você já tiver uma seção `mqtt:`, acrescente as entradas `sensor`, `switch` e `number` dentro dessa seção existente.
:::

<details>
<summary>YAML de entidades MQTT</summary>

```yaml
mqtt:
  sensor:
    - unique_id: indicator_temperature
      name: "Indicator Temperature"
      state_topic: "indicator/sensor"
      suggested_display_precision: 1
      unit_of_measurement: "°C"
      value_template: "{{ value_json.temp }}"
    - unique_id: indicator_humidity
      name: "Indicator Humidity"
      state_topic: "indicator/sensor"
      unit_of_measurement: "%"
      value_template: "{{ value_json.humidity }}"
    - unique_id: indicator_co2
      name: "Indicator CO2"
      state_topic: "indicator/sensor"
      unit_of_measurement: "ppm"
      value_template: "{{ value_json.co2 }}"
    - unique_id: indicator_tvoc
      name: "Indicator tVOC"
      state_topic: "indicator/sensor"
      unit_of_measurement: ""
      value_template: "{{ value_json.tvoc }}"
  switch:
    - unique_id: indicator_switch1
      name: "Indicator Switch1"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch1 }}"
      payload_on: '{"switch1":1}'
      payload_off: '{"switch1":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch2
      name: "Indicator Switch2"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch2 }}"
      payload_on: '{"switch2":1}'
      payload_off: '{"switch2":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch3
      name: "Indicator Switch3"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch3 }}"
      payload_on: '{"switch3":1}'
      payload_off: '{"switch3":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch4
      name: "Indicator Switch4"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch4 }}"
      payload_on: '{"switch4":1}'
      payload_off: '{"switch4":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch6
      name: "Indicator Switch6"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch6 }}"
      payload_on: '{"switch6":1}'
      payload_off: '{"switch6":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch7
      name: "Indicator Switch7"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch7 }}"
      payload_on: '{"switch7":1}'
      payload_off: '{"switch7":0}'
      state_on: 1
      state_off: 0
  number:
    - unique_id: indicator_switch5
      name: "Indicator Switch5"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      command_template: '{"switch5": {{ value }} }'
      value_template: "{{ value_json.switch5 }}"
    - unique_id: indicator_switch8
      name: "Indicator Switch8"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      command_template: '{"switch8": {{ value }} }'
      value_template: "{{ value_json.switch8 }}"
```

</details>

Salve o arquivo e, em seguida, vá para **Developer Tools** > **YAML** e recarregue a configuração YAML.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_ALL_YAML.png" alt="Configuração YAML em Developer Tools"/></div>

:::tip
Se as entidades não aparecerem, use primeiro **Check configuration**. Se a configuração for válida, mas as entidades ainda não aparecerem, reinicie o Home Assistant e confirme que o Indicator está publicando em `indicator/sensor`.
:::

## 6. Criar um painel

Você pode adicionar as novas entidades a qualquer painel. Para manter o Indicator separado, crie um painel dedicado em **Settings** > **Dashboards**.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_dashboard_info.png" style={{width:480, height:'auto'}} alt="Criar painel"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard.png" style={{width:480, height:'auto'}} alt="Novo painel"/></div></td>
    </tr>
  </table>
</div>

Abra o painel, escolha **Edit Dashboard** e, em seguida, use o **Raw configuration editor**.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_SenseCAP.png" style={{width:480, height:'auto'}} alt="Editar painel"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard.png" style={{width:480, height:'auto'}} alt="Assumir controle"/></div></td>
    </tr>
  </table>
</div>

<details>
<summary>YAML do painel</summary>

:::caution
Este YAML é para o editor de configuração bruta do painel Lovelace. Não cole isso em `configuration.yaml`.
:::

```yaml
views:
  - title: Indicator device
    icon: ''
    badges: []
    cards:
      - graph: line
        type: sensor
        detail: 1
        icon: mdi:molecule-co2
        unit: ppm
        entity: sensor.indicator_co2
      - graph: line
        type: sensor
        entity: sensor.indicator_temperature
        detail: 1
        icon: mdi:coolant-temperature
      - graph: line
        type: sensor
        detail: 1
        entity: sensor.indicator_humidity
      - graph: line
        type: sensor
        entity: sensor.indicator_tvoc
        detail: 1
        icon: mdi:air-filter
      - type: entities
        entities:
          - entity: switch.indicator_switch1
          - entity: switch.indicator_switch2
          - entity: switch.indicator_switch3
          - entity: switch.indicator_switch4
          - entity: number.indicator_switch5
          - entity: switch.indicator_switch6
          - entity: switch.indicator_switch7
          - entity: number.indicator_switch8
        title: Indicator control
        show_header_toggle: false
        state_color: true
```

</details>

Salve a configuração do painel.

<div class="table-center">
   <table align="center">
      <tr>
         <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard_config.png" style={{width:480, height:'auto'}} alt="Editor de configuração bruta"/></div>
         </td>
         <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard_Save.png" style={{width:480, height:'auto'}} alt="Salvar configuração"/></div>
         </td>
      </tr>
   </table>
</div>

Agora você deve ver as leituras dos sensores e os controles do Indicator no Home Assistant.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_data_show.gif"/></div>

## Referência do protocolo MQTT

Use esta seção quando quiser depurar o tráfego MQTT ou criar seus próprios cards do Home Assistant.

| Tópico | Exemplo de payload |
| --- | --- |
| `indicator/sensor` | `{"temp":"23.5","humidity":"45","co2":"450","tvoc":"100"}` |
| `indicator/switch/set` | `{"switch1":1,"switch5":50}` |
| `indicator/switch/state` | `{"switch1":1,"switch2":0}` |

Chaves de sensor:

| Chave | Significado |
| --- | --- |
| `temp` | Temperatura |
| `humidity` | Umidade relativa |
| `co2` | Concentração de CO2 |
| `tvoc` | Compostos orgânicos voláteis totais |

Chaves de controle:

| Chave | Tipo de entidade no Home Assistant | Faixa |
| --- | --- | --- |
| `switch1` a `switch4`, `switch6`, `switch7` | `switch` | `0` ou `1` |
| `switch5`, `switch8` | `number` | Valor inteiro |

## Solução de problemas

| Sintoma | O que verificar |
| --- | --- |
| O Home Assistant não mostra entidades | Confirme que o YAML foi adicionado sob `mqtt:`, depois recarregue o YAML ou reinicie o Home Assistant |
| Os valores dos sensores permanecem desconhecidos | Confirme que o Indicator está conectado ao Wi-Fi e publicando em `indicator/sensor` |
| Os controles não atualizam o Indicator | Confirme que o Home Assistant publica em `indicator/switch/set` e que o Indicator está conectado ao mesmo broker |
| Falha no login MQTT | Digite novamente o endereço do broker, nome de usuário e senha no Indicator ou com `setmqtt` |
| Comando serial não está claro | Execute `mqtthelp` no console serial |

## Para desenvolvedores

O firmware usa um design com dois MCUs:

| MCU | Função |
| --- | --- |
| ESP32-S3 | Display, toque, Wi-Fi, MQTT, lógica do Home Assistant, configurações e console |
| RP2040 | Aquisição de sensores internos e Grove, retransmitida para o ESP32-S3 via UART |

O firmware do ESP32-S3 é construído com ESP-IDF v5.4.x e LVGL 9. Domínios de runtime são organizados como fatias de modelo/visão: o código do modelo é responsável pelo estado, NVS, MQTT e análise de sensores; o código da visão é responsável pelos objetos LVGL e callbacks da tela sensível ao toque.

Comandos úteis para desenvolvedores:

```bash
python3 scripts/dev_check.py --skip-build
python3 scripts/dev_check.py
./dev build
```

O simulador para PC pode ajudar ao iterar no layout da interface sem precisar gravar o hardware:

```bash
cmake -S sim -B sim/build && cmake --build sim/build -j4
./sim/build/sensecap_sim
```

## Recursos

- [Repositório de firmware sensecap-indicator-ha](https://github.com/Love4yzp/sensecap-indicator-ha)
- [Guia do usuário do SenseCAP Indicator](/pt-br/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator)
- [Guia de instalação do Home Assistant](https://www.home-assistant.io/installation/)
- [Integração MQTT do Home Assistant](https://www.home-assistant.io/integrations/mqtt)
- [Guia de início rápido do ESP-IDF v5.4](https://docs.espressif.com/projects/esp-idf/en/v5.4/esp32s3/get-started/)
- [SDK e exemplos do SenseCAP Indicator](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32)

## Suporte técnico

Precisa de ajuda com o seu SenseCAP Indicator? Visite o [Canal oficial da Seeed no Discord](https://discord.gg/kpY74apCWj) ou inicie uma discussão em [Discussões do SenseCAP Indicator SDK no GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions).
