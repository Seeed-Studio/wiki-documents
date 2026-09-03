---
description: Introdução ao Wio Tracker L1 Series
title: Introdução ao Wio Tracker L1
keywords:
  - Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /get_started_with_meshtastic_wio_tracker_l1
sku: 114993648,114993649,114993653,114993654
sidebar_position: 2
last_update:
  date: 09/02/2026
  author: Advent Jiang
createdAt: '2025-06-17'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_wio_tracker_l1/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

:::tip
A Wio Tracker L1 Series compartilha a mesma estrutura de hardware. Embora o vídeo tutorial seja para o L1 Pro, ele é aplicável a todos os outros produtos da série L1.
:::

## Tutorial em Vídeo

### Parte 1 Unboxing

Ao usar os modelos L1, L1 Lite ou L1 E-Ink pela primeira vez, após conectar à fonte de alimentação USB, levante o interruptor de energia para ligá-lo.

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Wi_YmE76YcY?si=Ad-pUhle5X9QppPR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Parte 2 Gravação de Firmware

:::caution note
Por favor, `don't use NRF-OTA` para atualizar o firmware, isso pode fazer com que o dispositivo pare de funcionar completamente.
:::

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/hcjai4J1894?si=S_jaEfXVThWXscVJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Parte 3 Uso do Dispositivo

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Q97w2ompPtI?si=yLbAgE4cBbT6NbHS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### Joystick de quatro direções

O `latest Alpha firmware` do firmware L1 E-Ink atualmente oferece suporte ao joystick de quatro direções. Se você quiser usar o joystick, por favor [clique aqui](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_wio_tracker_l1/#Parte-2-Gravação-de-Firmware) para atualizar o firmware. 

#### Barra de Menu

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/Menu.jpeg" alt="pir" width={600} height="auto" /></p>
Apenas o firmware 2.7 oferece suporte à barra de menu. Se você quiser usar a barra de menu, siga o [Flash Firmware Tutorial](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_wio_tracker_l1/#Parte-2-Gravação-de-Firmware) para atualizar o firmware.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

#### Buzzer

Se você quiser ligar ou desligar o buzzer, primeiro `update the firmware` para a versão `2.7`. Porque apenas o firmware da versão 2.7 possui a barra de menu.

- Ligar o buzzer
Setting (ícone em forma de engrenagem) -> Notification -> Buzzer Action -> Disable
- Desligar o buzzer
Setting (ícone em forma de engrenagem) -> Notification -> Buzzer Action -> All enabled

<div class="table-center">
<iframe width="350" height="450" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer%20_turnonturnoff.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Parte 4 Conexão com o Celular

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/OFtUwN3z0tI?si=9zr3j-hLuoj0-CXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Parte 5 Diferentes Estados

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/eZa8kfUD2e4?si=3Fe_30obcercIXXO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Introdução

:::danger note
Quando o dispositivo estiver nos estados abaixo, por favor não o reinicie ou desligue manualmente. Caso contrário, o dispositivo pode parar de funcionar.

1. Não concluir o processo de transmissão de mensagem
2. Estar sendo configurado
:::

### Gravar Firmware

:::caution note
Por favor, `don't use NRF-OTA` para atualizar o firmware, isso pode fazer com que o dispositivo pare de funcionar completamente.
:::

Visite o [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Para L1, L1 Lite e L1 Pro, selecione o dispositivo de destino como `Seeed Wio Tracker L1` e escolha o firmware mais recente, depois clique em `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

Para L1 E-Ink, selecione o dispositivo de destino como `Seeed Wio Tracker L1 E-Ink` e escolha o firmware mais recente, depois clique em `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%201.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%202.png" alt="pir" width={800} height="auto" /></p>

Ligue o dispositivo, clique em `Enter DFU Mode`, aparecerá uma porta serial chamada `Tracker L1`, clique e conecte-a, e deverá ser exibida uma unidade chamada `Tracker L1`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

Arraste o arquivo UF2 para a unidade DFU. O firmware deve ser gravado após o download do arquivo e a reinicialização do dispositivo.

### Ligar o dispositivo

Conecte o cabo USB para ativar o dispositivo. Levante o interruptor de energia para ligá-lo.

:::tip
Se o dispositivo não responder quando você pressionar o botão, por favor carregue-o primeiro. Não use o carregador de carregamento rápido.
:::

### Conectar via App

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="App IOS">

- Selecione o dispositivo de destino no painel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/device_select123.jpeg" alt="pir" width={300} height="auto" /></p>

- Digite o código exibido na tela e depois clique em `OK` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/pairing_code123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">

- Clique em `+` e escolha o dispositivo de destino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-choose-new.png" alt="pir" width={600} height="auto" /></p>

- Digite o código (o código padrão é `123456`) e depois clique em `OK` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-click-ok-new.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Configurar o LoRa

Para começar a se comunicar pela malha, você deve definir sua região. Essa configuração controla qual faixa de frequência seu dispositivo usa e deve ser definida de acordo com sua localização regional.

<Tabs>
<TabItem value="ios" label="App IOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/configure_LoRa123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-region-new.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**Lista de Regiões**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Unset|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|União Europeia 868MHz|869.4 - 869.65|10|27|

Consulte [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para uma lista mais abrangente.

:::info
**EU_868** deve obedecer a uma limitação de duty cycle horário de 10%, calculada a cada minuto com base em uma janela móvel de 1 hora. Seu dispositivo vai parar de transmitir se você atingir esse limite, até que seja permitido novamente.
:::

Agora que você definiu a região LoRa no seu dispositivo, pode continuar configurando quaisquer [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) para atender às suas necessidades.

## Configuração Avançada

### Conectar via Website

Se você quiser enviar mensagens de texto e se comunicar com outros nós pelo site, pode conectar o dispositivo ao [Meshtastic Website](https://client.meshtastic.org/messages/broadcast/0) agora.

  Passo 1: Abra o Website

[Clique aqui](https://client.meshtastic.org/messages/broadcast/0) para ir ao site.
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  Passo 2: Adicionar o novo dispositivo

    Clique em "+ New Connection". 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    Há duas maneiras de conectar. Você pode escolher o método de sua preferência.

 Method 1: Via Bluetooth

    Escolha o método bluetooth. Escolha o ID do dispositivo na janela pop-up.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 Method 2: Via Serial

    Escolha o método serial. Abra o gerenciador de dispositivos para ver em qual porta o dispositivo está conectado. Escolha essa porta na janela pop-up.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    Seu dispositivo será exibido na lista. Clique para conectar. Se a conexão for bem-sucedida, você poderá ver o status do dispositivo diretamente no site.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### Configurar GPS

Defina o GPS como ativado. Você pode ajustar o intervalo de atualização e o intervalo de transmissão para obter informações de localização mais atualizadas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

Para IOS, ative o `Accurate Location`. Caso contrário, o posicionamento pode desviar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

### Conexão de sensor

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/SensorConnection.jpg" alt="pir" width={700} height="auto" /></p>

Você pode adicionar sensor ao dispositivo por meio da interface Grove. Os seguintes sensores foram verificados como compatíveis com a interface Grove no dispositivo.

<table>
  <tr>
    <th colspan="2">Tipo de sensor</th>
    <th colspan="1">Modelo de sensor</th>
  </tr>
  <tr>
    <td rowspan="4">Sensor ambiental</td>
    <td>Pressão</td>
    <td>BMP085</td>
  </tr>
  <tr>
    <td>Temperatura</td>
    <td>[MCP9808](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html) 、PCT2075</td>
  </tr>
  <tr>
    <td>Temperatura e umidade</td>
    <td>[SHT31](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)/SHTC3/[SHT4X](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)、AHT10</td>
  </tr>
  <tr>
    <td>Temperatura, umidade e pressão</td>
    <td>[BME280](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)</td>
  </tr>
  <tr>
    <td rowspan="2">Outros</td>
    <td>Frequência cardíaca e SpO₂</td>
    <td>[MAX30102](https://www.seeedstudio.com/MAXREFDES117-HEART-RATE-AND-PULSE-OXIMETRY-MONITOR-p-2762.html)</td>
  </tr>
  <tr>
    <td>Teclado I2C</td>
    <td>CardKB</td>
  </tr>
</table>

<Tabs>

<TabItem value="ios" label="IOS">

- Ative Telemetry para obter dados do sensor. Se quiser mostrar os dados do sensor na tela OLED, ative `on screen`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/temp_sensor123.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="Android" label="Android">

- Ative Telemetry para obter dados do sensor. Se quiser mostrar os dados do sensor na tela OLED, ative `on screen`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/TelemetryAndroid.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

A tela OLED exibirá os dados do sensor se você ativar `on screen`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Telemetryscreen.jpg" alt="pir" width={800} height="auto" /></p>

### Conexão de tela

- Tela E-Ink
  [Click here](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html) para obter a tela E-Ink compatível.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/E-Ink_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>

- Tela OLED
[Click here](https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html) para obter a tela OLED compatível. O driver OLED atual é o SSD1306.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/OLED_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>

### Teclado virtual

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html" alt="pir" width={600} height="auto" /></p>
A versão 2.7 do firmware agora oferece suporte a teclado virtual! Você pode digitar mensagens diretamente no dispositivo para se comunicar com outro dispositivo. Siga o [Flash Firmware Tutorial](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_wio_tracker_l1/#part-2-atualização-de-firmware) para atualizar o firmware.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

### Configurar toque

Vá para `Settings` -> `Ringtone Config` e, em seguida, insira a string de toque RTTTL que você deseja usar para notificações externas.

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/configure_ringtone123.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/ringtonex1.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="13" label="The Legend of Zelda: Item Get">

```plain
24:d=16,o=5,b=120:g,c6,d6,2g6
```
</TabItem>

<TabItem value="14" label="Super Mario Theme (Short)">

```plain
24:d=4,o=5,b=100:16e6,16e6,32p,8e6,16c6,8e6,8g6,8p,8g
```
</TabItem>

<TabItem value="15" label="Mario Coin">

```plain
24:d=8,o=6,b=200:b,e7
```
</TabItem>

<TabItem value="16" label="Nokia Ringtone">

```plain
24:d=4,o=5,b=180:8e6,8d6,f#,g#,8c#6,8b,d,e,8b,8a,c#,e,2a
```
</TabItem>

<TabItem value="17" label="Mario Power-Up">

```plain
powerup:d=16,o=5,b=200:g,a,b,c6,d6,e6,f#6,g6,a6,b6,2c7
```
</TabItem>

<TabItem value="18" label="Morse Code CQ">

```plain
24:d=16,o=6,b=120:8c,p,c,p,8c,p,c,4p,8c,p,8c,p,c,p,8c,8p
```
</TabItem>

</Tabs>

## FAQ

### Dispositivo inutilizado e recuperação do bootloader {#device-bricked--bootloader-installation}

**Descrição:**

O dispositivo não está respondendo, nenhum LED, não é possível parear com seu App. Se você achar que o dispositivo está completamente morto após gravar seu próprio firmware, também pode tentar reinstalar o bootloader.

O bootloader é restaurado pela porta serial USB (Serial DFU) com `adafruit-nrfutil`.

:::danger note
Durante a gravação, mantenha a conexão do cabo estável e **NÃO** a desconecte — mesmo que o número da porta serial mude.
:::

**Passo 1: Preparar**

- Um dispositivo da série Wio Tracker L1 (L1 / L1 Pro)
- Um cabo de dados USB em bom estado (não apenas de carregamento)
- Um PC com Windows, macOS ou Linux com Python 3 e pip
- O pacote do bootloader: [Click here to download Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip) — NÃO extraia o ZIP; o `adafruit-nrfutil` o utiliza como está

**Passo 2: Instalar adafruit-nrfutil**

<Tabs>
<TabItem value="windows" label="Windows">

Verifique se o Python 3 e o pip estão disponíveis (se o pip estiver ausente, execute primeiro `python -m ensurepip --upgrade`):

```
python --version
python -m pip --version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/00_python_pip_check.png" alt="Check Python and pip on Windows" width={600} height="auto" /></p>

Em seguida, instale e verifique (a versão testada para este guia é `0.5.3.post16`):

```
python -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/01_nrfutil_version.png" alt="adafruit-nrfutil version output on Windows" width={600} height="auto" /></p>

</TabItem>

<TabItem value="macos" label="macOS">

```
python3 --version
python3 -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

Se o pip estiver ausente, execute primeiro `python3 -m ensurepip --upgrade`.

</TabItem>

<TabItem value="linux" label="Linux">

```
python3 --version
python3 -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

Se o pip estiver ausente, execute primeiro `python3 -m ensurepip --upgrade`.

</TabItem>
</Tabs>

:::note
Sempre verifique a versão com `adafruit-nrfutil version`. NÃO use `adafruit-nrfutil --version`.
:::

**Passo 3: Verificar a porta serial**

Anote a porta serial do dispositivo — os exemplos abaixo variam conforme o PC:

<Tabs>
<TabItem value="windows" label="Windows">

Abra **Device Manager → Ports (COM & LPT)**, por exemplo:

```
USB Serial Device (COM43)
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/02_normal_com_port.png" alt="Wio Tracker L1 serial port in Windows Device Manager" width={600} height="auto" /></p>

</TabItem>

<TabItem value="macos" label="macOS">

```
ls /dev/cu.*
```

O dispositivo aparece como `/dev/cu.usbmodemXXXX`.

</TabItem>

<TabItem value="linux" label="Linux">

```
ls /dev/ttyACM*
```

O dispositivo geralmente aparece como `/dev/ttyACM0`; se nada for listado, tente também `ls /dev/ttyUSB*`.

</TabItem>
</Tabs>

**Passo 4: Gravar o bootloader**

Substitua a porta pela que você encontrou no Passo 3:

<Tabs>
<TabItem value="windows" label="Windows">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p COM43 -b 115200 --singlebank --touch 1200
```

Se o ZIP não estiver na pasta atual do seu terminal, passe o caminho completo para `--package`, por exemplo `"C:\path\to\wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip"`.

</TabItem>

<TabItem value="macos" label="macOS">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/cu.usbmodemXXXX -b 115200 --singlebank --touch 1200
```

</TabItem>

<TabItem value="linux" label="Linux">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/ttyACM0 -b 115200 --singlebank --touch 1200
```

</TabItem>
</Tabs>

**Passo 5: Lidar com a mudança de porta serial**

`--touch 1200` reinicia o dispositivo em modo DFU, então a porta serial geralmente muda e o primeiro comando pode parar com um traceback como este:

```
Touched serial port COM43
...
FileNotFoundError: could not open port 'COM43'
```

Isto NÃO é uma falha — o dispositivo já entrou em modo DFU em uma NOVA porta. No PC com Windows testado, por exemplo, ele mudou de `COM43` para `COM45`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/03_dfu_com_port.png" alt="Porta serial DFU após nova enumeração no Gerenciador de Dispositivos do Windows" width={600} height="auto" /></p>

**Mantenha o cabo USB conectado.** Encontre a nova porta (atualize o **Device Manager → Ports (COM & LPT)**, ou execute novamente `ls /dev/cu.*` / `ls /dev/ttyACM*`), então faça o flash novamente na nova porta SEM `--touch 1200`:

<Tabs>
<TabItem value="windows" label="Windows">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p COM45 -b 115200 --singlebank
```

</TabItem>

<TabItem value="macos" label="macOS">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/cu.usbmodemXXXX -b 115200 --singlebank
```

</TabItem>

<TabItem value="linux" label="Linux">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/ttyACM0 -b 115200 --singlebank
```

</TabItem>
</Tabs>

**Passo 6: Confirmar o resultado**

O flash foi bem-sucedido quando a saída termina com `Device programmed.`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/04_flash_success.png" alt="Saída do adafruit-nrfutil terminando com Device programmed" width={600} height="auto" /></p>

Depois disso, uma unidade UF2 aparece no seu PC (captura de tela do PC com Windows testado). Seu rótulo de volume varia conforme a compilação do bootloader — a unidade testada mostrou `XIAO-BOOT` — e NÃO é um critério de aprovação/reprovação; não julgue o resultado pelo nome da unidade ou por `INFO_UF2.TXT`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/05_uf2_drive.png" alt="Unidade UF2 aparece após o flash do bootloader" width={600} height="auto" /></p>

**Passo 7: Reinstalar o firmware de aplicação**

:::warning
Restaurar o bootloader NÃO reinstala o firmware de aplicação — o dispositivo ainda não tem um firmware funcional até que você o grave novamente.
:::

Quando você tiver concluído os passos acima, siga [Flash Firmware](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware) para gravar o firmware de aplicação.

**Solução de problemas**

- `adafruit-nrfutil` não é reconhecido após a instalação: o diretório de scripts de usuário do Python não está no seu PATH (`Scripts` no Windows, `bin` no seu diretório pessoal no macOS/Linux) — adicione-o ao PATH ou reinstale sem `--user`.
- Porta ocupada / acesso negado: feche monitores seriais, abas do web flasher, Arduino IDE ou qualquer outra coisa que esteja usando a porta.
- `FileNotFoundError: could not open port ...` após `Touched serial port ...`: o dispositivo entrou em modo DFU em uma nova porta — siga o Passo 5.
- Não é possível entrar em modo DFU: veja [Unable to enter DFU & Entering DFU Mode Manually](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_wio_tracker_l1/#unable-to-enter-dfu--entering-dfu-mode-manually).

**Recuperação DFU manual**

Se `--touch 1200` não conseguir colocar o dispositivo em modo DFU (por exemplo, o firmware está completamente sem resposta), entre em DFU manualmente: conecte o dispositivo, pressione duas vezes `Reset` (o LED amarelo permanece aceso), encontre a porta serial DFU como no Passo 3 e então execute o comando do Passo 5 nessa porta SEM `--touch 1200`. O sucesso é igual ao do Passo 6.

### Unable to enter DFU & Entering DFU Mode Manually

Conecte o dispositivo ao seu PC e pressione duas vezes o botão `Reset` — o LED amarelo permanece aceso e uma porta serial DFU aparece no seu PC.

Para gravar o bootloader neste modo, siga [Device Bricked & Bootloader Recovery](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_wio_tracker_l1/#device-bricked--bootloader-installation), mas ignore `--touch 1200` — o dispositivo já está em modo DFU.

### Saindo do modo DFU

Pressione o botão `Reset` uma vez para sair do modo DFU.

### Não é possível se comunicar no canal primário

Se o dispositivo não conseguir se comunicar com nós próximos ou enviar mensagens, primeiro verifique se a região LoRa e o preset do modem correspondem aos nós ao redor. Você também deve verificar se o **PSK** padrão foi alterado. Um PSK diferente no canal primário impedirá o dispositivo de se comunicar com outros nós nesse canal.

A maneira mais fácil de encontrar esse problema é por meio do aplicativo móvel. Abra o app, conecte-se ao dispositivo de destino e navegue até `Settings` -> `Channels`. Selecione o canal primário e verifique o valor do **PSK**. Se for diferente dos nós ao redor, atualize-o para o mesmo PSK e salve as configurações do canal.

<Tabs>
<TabItem value="ios" label="App iOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problems_ios.png" alt="Verificar o PSK do canal primário no app iOS" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problem_and.png" alt="Verificar o PSK do canal primário no app Android" width={900} height="auto" /></p>

</TabItem>
</Tabs>

**Solução**

Se você não tiver certeza de quais configurações foram alteradas, restaure o dispositivo para as configurações padrão seguindo o guia [Factory Reset](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_wio_tracker_l1/#factory-reset). Se apenas o PSK tiver sido alterado, defina-o novamente para `AQ==`.

### Dispositivo desliga automaticamente

#### Descrição

- Após o dispositivo ser ligado, ele desliga ou reinicia automaticamente depois de um tempo.
- O log da porta serial roda por um tempo e depois para.

 Isso pode ser causado por reiniciar ou desligar o dispositivo manualmente e à força quando ele está nos seguintes estados: sem ter concluído o processo de transmissão de mensagens, estando em configuração......

#### Solução de problemas

[click here](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) para ver o vídeo. Você precisa executar um apagamento de flash e então gravar novamente o firmware mais recente.

### Factory Reset

Se você quiser restaurar as configurações padrão, pode fazer o factory reset. Há dois métodos para você fazer o factory reset.

- [click here](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) para ver o vídeo. Você precisa executar um apagamento de flash e então gravar novamente o firmware mais recente.

- Clique no botão `Factory Reset` no App. O dispositivo será reiniciado automaticamente com a configuração de fábrica.
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### Falha em mensagem direta

#### Reset do NodeDB

NodeDB é o banco de dados local que armazena informações sobre os nós descobertos na rede Mesh atual. Se você encontrar uma situação em que não consegue se comunicar com um determinado nó, isso pode ser porque seu NodeDB armazenou informações desatualizadas para esse nó. Você precisará atualizá-lo.

Abra o app e conecte-se ao dispositivo de destino. Vá para **Settings**->**Device**->**Device Config**->**Reset NodeDB**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/sending_failed123.png" alt="Configurações do dispositivo e botão Reset NodeDB no app" width={600} height="auto" /></p>

#### Trocar informações de usuário

Cada nó enviará periodicamente suas próprias informações de nó, permitindo que outros nós na malha o "vejam" e "reconheçam". Dois nós precisam trocar suas informações de nó entre si para poder se comunicar um com o outro. Se você não conseguir enviar ou receber mensagens privadas com outro nó na lista, pode solicitá-los manualmente a trocar informações no app.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Entrada do dispositivo em Settings" width={300} height="auto" /></p>

#### Regenerar chave privada

Dois nós precisam conhecer a chave privada um do outro para poder se comunicar entre si. Se um nó continuar falhando na transmissão de mensagens privadas, tente regenerar a chave privada para ele.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Entrada do dispositivo em Settings" width={600} height="auto" /></p>

Reinicie o dispositivo com falha para que a configuração tenha efeito.

:::note
Após a regeneração da chave, outro dispositivo precisa se reconectar ao nó. Portanto, é melhor excluir o nó da lista de nós do outro dispositivo.
:::

### Qualidade do sinal

- **SNR** reflete a qualidade do link de comunicação. Um dispositivo normal geralmente opera acima de -7 dB. Um dispositivo com SNR abaixo de -10 dB indica desempenho ruim.

- **RSSI** é determinado em conjunto pelo dispositivo e pelo ambiente ao seu redor. Um dispositivo normal geralmente opera acima de -110 dBm. Um dispositivo com RSSI abaixo de -115 dBm é considerado como tendo desempenho ruim.

      Para obter o melhor efeito de sinal, use o dispositivo em uma área aberta, desobstruída e com interferência mínima.

### Antena compatível

Se você precisar de uma antena de reposição para o L1 Pro, [click here](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html) para obter uma.

## Recursos

- [Bootloader (pacote Serial DFU)](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip)
- [(V1) Arquivo de referência para impressão 3D](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing)
- [(V2 Novo joystick de quatro direções) Arquivo de referência para impressão 3D](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip)
- [Desafio de design de case para L1](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [Arquivo de contorno](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [Certificação TELEC](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [Certificação FCC](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [Certificação CE](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [Teste de consumo de energia e cálculo de vida útil da bateria](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)


## Suporte Técnico e Discussão de Produtos

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>