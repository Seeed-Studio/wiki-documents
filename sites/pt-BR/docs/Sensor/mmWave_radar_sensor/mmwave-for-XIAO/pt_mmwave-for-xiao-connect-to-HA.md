---
description: Introdução de como o Sensor mmWave se conecta ao HA.
title: mmWave para XIAO no Home Assistant via Bluetooth ou Wifi
keywords:
  - mmwave
  - radar
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /mmwave_for_xiao_to_ha_bt
last_update:
  date: 09/14/2024
  author: Allen, Djair
createdAt: '2023-12-08'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/mmwave_for_xiao_to_ha_bt/
---

# mmWave para XIAO no Home Assistant via Bluetooth

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/9.png" style={{width:1000, height:'auto'}}/></div>

## Introdução

O 24GHz mmWave Sensor for XIAO - Human Static Presence é uma placa de expansão para a série Seeed Studio XIAO. É um sensor mmWave integrado à antena e de alta sensibilidade, baseado no princípio FMCW. Combinado com processamento de sinal de sensor e algoritmos precisos de detecção do corpo humano, ele pode identificar corpos humanos em estados de movimento e estacionário. 

Este capítulo apresenta principalmente como o 24GHz mmWave Sensor for XIAO se conecta ao HA via Bluetooth. Para recursos funcionais detalhados do 24GHz mmWave Sensor for XIAO, você pode consultar [aqui](https://wiki.seeedstudio.com/pt-br/mmwave_for_xiao/).

:::caution
Todo o conteúdo deste Wiki se aplica apenas ao 24GHz mmWave for XIAO e não deve ser usado em outros sensores de ondas milimétricas.
:::

## Primeiros Passos

### Preparações de Hardware

Neste artigo, usaremos o mmWave for XIAO em conjunto com o XIAO ESP32C3 para conectá-lo ao Home Assistant, visando estética e facilidade de fiação. Se você quiser seguir este tutorial ao pé da letra, então você precisará preparar os seguintes módulos.

<table align="center">
	<tr>
		<th>Seeed Studio XIAO ESP32C3</th>
        <th>24GHz mmWave for XIAO</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/1.png" style={{width:150, height:'auto'}}/></div></td>
	</tr>
    <tr>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>

O sensor é projetado para compatibilidade com o XIAO, portanto, em geral, se você quiser usar este sensor, precisa preparar um XIAO e instalar o conector fêmea (pino de fileira) para o sensor. Ao conectar ao XIAO, preste atenção especial à direção de instalação do sensor, não o conecte invertido, caso contrário é provável que queime o sensor ou o XIAO.

:::caution
A direção correta a seguir é que a antena do sensor deve ficar voltada para fora.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/5.png" style={{width:800, height:'auto'}}/></div>

Depois de confirmar que a direção da conexão está correta, você pode conectar o cabo tipo USB-C ao computador ou à fonte de alimentação de 3,3 V, e o sensor começará a funcionar.

:::tip
Se você não tiver um XIAO em mãos no momento, então você tem a opção de alimentar o mmwave for XIAO separadamente conectando o TTL ao seu pino de 3,3 V e ao pino GND, o que também pode ser feito usando o conteúdo deste tutorial. Para este tutorial, não há necessidade de usar os pinos RX e TX.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/10.jpg" style={{width:300, height:'auto'}}/></div>
:::


### Preparações de Software

Se você ainda não instalou o HomeAssistant, pode consultar o tutorial oficial do HomeAssistant clicando [aqui](https://www.home-assistant.io/installation/).

## Procedimentos

### Passo 1. Descobrir Dispositivo

No Home Assistant, clique em **setting** no canto inferior esquerdo e selecione **Devices&Services** no centro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/1.png" style={{width:1000, height:'auto'}}/></div>

Na área de Discovered, haverá um ícone de sensor, clique em **configure**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/2.png" style={{width:1000, height:'auto'}}/></div>

Uma janela pop-up aparecerá, clique em **submit**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/3.png" style={{width:1000, height:'auto'}}/></div>

Você verá um pop-up de configuração bem-sucedida, clique em **finish**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/4.png" style={{width:1000, height:'auto'}}/></div>

### Passo 2. Configurar Dispositivo

Na área configurada, clique em **ld2410_ble**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/5.png" style={{width:1000, height:'auto'}}/></div>

Assim que estiver na página de configurações do sensor, clique em **1 device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/6.png" style={{width:1000, height:'auto'}}/></div>

Adicione o valor de retorno do sensor ao dashboard.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/7.png" style={{width:1000, height:'auto'}}/></div>

Selecione **ADD TO DASHBOARD** na janela pop-up.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/8.png" style={{width:1000, height:'auto'}}/></div>

Por fim, clique em **overview** no canto superior esquerdo; você verá os dados do sensor mmwave-for-xiao exibidos com sucesso no dashboard. Até aqui, o sensor mmwave for xiao foi conectado com sucesso ao Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/9.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, você pode soltar a criatividade com suas automações!

# mmWave para XIAO no Home Assistant via Wifi usando ESPHome
O arquivo yaml a seguir conecta um Seeed XIAO ESP32-C3 com módulo Radar ao Home Assistant, usando o firmware ESPHome:

```
# Configuration for ESPHome
substitutions:
  name: "xiao-24ghz-mmwave"
  friendly_name: "XIAO 24GHz mmwave"

esphome:
  name: "${name}"
  friendly_name: "${friendly_name}"
  name_add_mac_suffix: True

esp32:
  board: esp32-c3-devkitm-1
  framework:
    type: arduino

# Enable logging
logger:

# Enable Home Assistant API
api:

ota:
  - platform: esphome

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "${friendly_name}"

captive_portal:

uart:
  id: mmWave_uart
  tx_pin: GPIO5  # D3
  rx_pin: GPIO4  # D2
  baud_rate: 9600
  parity: NONE
  stop_bits: 1

ld2410:
  id: ld2410_radar
  uart_id: mmWave_uart

number:
  - platform: ld2410
    timeout:
      name: Radar Timeout
    max_move_distance_gate:
      name: Radar Max Move Distance
    max_still_distance_gate:
      name: Radar Max Still Distance
    g0:
      move_threshold:
        name: g0 move threshold
      still_threshold:
        name: g0 still threshold
    g1:
      move_threshold:
        name: g1 move threshold
      still_threshold:
        name: g1 still threshold
    g2:
      move_threshold:
        name: g2 move threshold
      still_threshold:
        name: g2 still threshold
    g3:
      move_threshold:
        name: g3 move threshold
      still_threshold:
        name: g3 still threshold
    g4:
      move_threshold:
        name: g4 move threshold
      still_threshold:
        name: g4 still threshold
    g5:
      move_threshold:
        name: g5 move threshold
      still_threshold:
        name: g5 still threshold
    g6:
      move_threshold:
        name: g6 move threshold
      still_threshold:
        name: g6 still threshold
    g7:
      move_threshold:
        name: g7 move threshold
      still_threshold:
        name: g7 still threshold
    g8:
      move_threshold:
        name: g8 move threshold
      still_threshold:
        name: g8 still threshold

binary_sensor:
  - platform: ld2410
    has_target:
      name: Radar Target
      id: radar_has_target
    has_moving_target:
      name: Radar Moving Target
    has_still_target:
      name: Radar Still Target

sensor:
  - platform: ld2410
    moving_distance:
      name: Radar Moving Distance
      id: moving_distance
    still_distance:
      name: Radar Still Distance
      id: still_distance
    moving_energy:
      name: Radar Move Energy
    still_energy:
      name: Radar Still Energy
    detection_distance:
      name: Radar Detection Distance
      id: radar_detection_distance
    g0:
      move_energy:
        name: g0 move energy
      still_energy:
        name: g0 still energy
    g1:
      move_energy:
        name: g1 move energy
      still_energy:
        name: g1 still energy
    g2:
      move_energy:
        name: g2 move energy
      still_energy:
        name: g2 still energy
    g3:
      move_energy:
        name: g3 move energy
      still_energy:
        name: g3 still energy
    g4:
      move_energy:
        name: g4 move energy
      still_energy:
        name: g4 still energy
    g5:
      move_energy:
        name: g5 move energy
      still_energy:
        name: g5 still energy
    g6:
      move_energy:
        name: g6 move energy
      still_energy:
        name: g6 still energy
    g7:
      move_energy:
        name: g7 move energy
      still_energy:
        name: g7 still energy
    g8:
      move_energy:
        name: g8 move energy
      still_energy:
        name: g8 still energy
```

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
