---
description: Introdução à Série Wio Tracker L1
title: Introdução ao Wio Tracker L1
keywords:
  - Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /get_started_with_meshtastic_wio_tracker_l1
sku: 114993648,114993649,114993653,114993654
sidebar_position: 2
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_wio_tracker_l1/
---

:::tip
A Série Wio Tracker L1 compartilha a mesma estrutura de hardware. Embora o guia em vídeo seja para o L1 Pro, ele é aplicável a todos os outros produtos da série L1.
:::
## Tutorial em Vídeo

### Parte 1 Desembalagem

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
O firmware do L1 E-Ink atualmente não oferece suporte ao joystick de quatro direções. Se você quiser usar o joystick, compre outros modelos.

#### Barra de Menu
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/Menu.jpeg" alt="pir" width={600} height="auto" /></p>
Apenas o firmware 2.7 oferece suporte à barra de menu. Se você quiser usar a barra de menu, siga o [Tutorial de Gravação de Firmware](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_wio_tracker_l1/#parte-2-gravação-de-firmware) para atualizar o firmware.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

#### Buzzer

Se você quiser ligar ou desligar o buzzer, primeiro `update the firmware` para a versão `2.7`. Porque somente o firmware da versão 2.7 possui a barra de menu.
- Ligar o buzzer
Setting (ícone em forma de engrenagem) -> Notification -> Buzzer Action -> Disable
- Desligar o buzzer
Setting (ícone em forma de engrenagem) -> Notification -> Buzzer Action -> All enabled

<div class="table-center">
<iframe width="350" height="450" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer%20_turnonturnoff.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Parte 4 Conexão com o Telefone

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/OFtUwN3z0tI?si=9zr3j-hLuoj0-CXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Parte 5 Diferentes Estados

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/eZa8kfUD2e4?si=3Fe_30obcercIXXO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Primeiros Passos

:::danger note
Quando o dispositivo estiver nos estados abaixo, não o reinicie ou desligue manualmente. Caso contrário, o dispositivo pode parar de funcionar.
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


Ligue o dispositivo, clique em `Enter DFU Mode`, haverá uma porta serial chamada `Tracker L1`, clique e conecte-a, e deve aparecer uma unidade chamada `Tracker L1`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

Arraste o arquivo UF2 para a unidade DFU. O firmware deve ser gravado após o download do arquivo e a reinicialização do dispositivo.

### Ligar o dispositivo

Conecte o cabo USB para ativar o dispositivo. Levante o interruptor de energia para ligá-lo.

:::tip
Se o dispositivo não responder quando você pressionar o botão, carregue-o primeiro. Não use carregador de carregamento rápido.
:::

### Conectar via App

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="App iOS">

- Selecione o dispositivo de destino no painel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Digite o código exibido na tela e clique em `OK` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">

- Clique em `+` e escolha o dispositivo de destino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- Digite o código (o código padrão é `123456`) e clique em `OK` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Conectar via Website

Se você quiser enviar mensagens de texto e se comunicar com outros nós pelo site, agora você pode conectar o dispositivo ao [Site Meshtastic](https://client.meshtastic.org/messages/broadcast/0).

  Passo 1: Abra o site

[Clique aqui](https://client.meshtastic.org/messages/broadcast/0) para ir ao site.
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  Passo 2: Adicionar o novo dispositivo

    Clique em "+ New Connection".

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    Há duas maneiras de conectar. Você pode escolher o método de sua preferência.

 Método 1: Via Bluetooth

    Escolha o método bluetooth. Escolha o ID do dispositivo na janela pop-up.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 Método 2: Via Serial

    Escolha o método serial. Abra o gerenciador de dispositivos para ver em qual porta o dispositivo está conectado. Escolha essa porta na janela pop-up.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    Seu dispositivo será mostrado na lista. Clique para conectar. Se a conexão for bem-sucedida, você poderá ver o status do dispositivo diretamente no site.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>


### Configurar o LoRa

Para começar a se comunicar pela malha, você deve definir sua região. Essa configuração controla qual faixa de frequência seu dispositivo usa e deve ser definida de acordo com sua localização regional.

<Tabs>
<TabItem value="ios" label="App iOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**Lista de Regiões**

|**Código da Região**|**Descrição**|**Faixa de Frequência (MHz)**|**Ciclo de Trabalho (%)**|**Limite de Potência (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Não definido|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|União Europeia 868MHz|869.4 - 869.65|10|27|

Consulte [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para uma lista mais abrangente.

:::info
**EU_868** deve obedecer a uma limitação de ciclo de trabalho horário de 10%, calculada a cada minuto com base em uma janela contínua de 1 hora. Seu dispositivo vai parar de transmitir se você atingir esse limite, até que seja permitido novamente.
:::

Agora que você definiu a região LoRa no seu dispositivo, você pode continuar configurando quaisquer [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) para atender às suas necessidades.

### Configurar GPS

Por favor, ative o GPS. Você pode ajustar o intervalo de atualização e o intervalo de transmissão para obter informações de localização mais atualizadas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

Para IOS, por favor ative o `Accurate Location`. Caso contrário, o posicionamento pode desviar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>


### Conexão de sensor

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/SensorConnection.jpg" alt="pir" width={700} height="auto" /></p>

Você pode adicionar sensor ao dispositivo através da interface Grove. Os seguintes sensores foram verificados como compatíveis com a interface Grove no dispositivo.

<table>
  <tr>
    <th colspan="2">Tipo de sensor</th>
    <th colspan="1">Modelo do sensor</th>
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

- Ative Telemetry para obter dados do sensor. Se você quiser mostrar os dados do sensor na tela OLED, ative `on screen`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/TelemetryIOS.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="Android" label="Android">

- Ative Telemetry para obter dados do sensor. Se você quiser mostrar os dados do sensor na tela OLED, ative `on screen`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/TelemetryAndroid.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

A tela OLED mostrará os dados do sensor se você ativar `on screen`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Telemetryscreen.jpg" alt="pir" width={800} height="auto" /></p>

### Conexão de tela
 - Tela E-Ink
  [Clique aqui](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html) para obter a tela E-Ink compatível.
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/E-Ink_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>

- Tela OLED
[Clique aqui](https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html) para obter a tela OLED compatível. O driver OLED atual é SSD1306.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/OLED_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>


### Teclado virtual
<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html" alt="pir" width={600} height="auto" /></p>
A versão de firmware 2.7 agora suporta teclado virtual! Você pode digitar mensagens diretamente no dispositivo para se comunicar com outro dispositivo. Siga o [Tutorial de Gravação de Firmware](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) para atualizar o firmware.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

## FAQ

### Dispositivo travado e instalação do Bootloader

**Descrição:**

O dispositivo não está respondendo, sem LED, não é possível parear com o seu App. Se você achar que o dispositivo está completamente morto após gravar o seu próprio firmware, você também pode tentar reinstalar o bootloader.

:::danger note
Quando você estiver gravando o bootloader, certifique-se de que a conexão do cabo esteja estável e **NÃO** o desconecte durante o processo de gravação.
:::

- Passo 1: [Clique aqui para baixar o Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)

- Passo 2: Entre no modo DFU

  Clique duas vezes no botão RST para entrar no modo DFU. O disco com o nome "Tracker L1" irá aparecer.

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1RstButton.png" alt="pir" width={300} height="auto" /></p>

- Passo 3: Cole o arquivo do bootloader

  Substitua todos os arquivos no disco pelo arquivo de bootloader baixado.

- Passo 4: Grave o firmware

  Quando você tiver concluído as etapas acima, poderá seguir este [passo](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware) para gravar o firmware da aplicação. Talvez você precise [entrar no modo DFU manualmente](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_wio_tracker_l1/#unable-to-enter-dfu--entering-dfu-mode-manually)


### Não é possível entrar em DFU e entrando no modo DFU manualmente

Conecte o dispositivo ao seu PC, pressione duas vezes o botão `Reset`. O LED amarelo ficará aceso continuamente e uma nova unidade USB chamada `Tracker L1` aparecerá no seu PC.

### Saindo do modo DFU

Pressione o botão `Reset` uma vez para sair do modo DFU.

 ### Dispositivo desliga automaticamente

 #### Descrição

 - Após o dispositivo ser ligado, ele irá desligar ou reiniciar automaticamente depois de um tempo. 
 - O log da porta serial roda por um tempo e depois para.

 Isso pode ser causado por reiniciar ou desligar o dispositivo manualmente e à força quando o dispositivo está nos seguintes estados: sem terminar o processo de transmissão de mensagens, sendo configurado......

 #### Solução de problemas

[clique aqui](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) para ver o vídeo. Você precisa executar um apagamento da flash e então gravar novamente o firmware mais recente.

### Restauração de fábrica
Se você quiser restaurar as configurações padrão, pode fazer a restauração de fábrica. Há dois métodos para você fazer a restauração de fábrica.

- [clique aqui](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) para ver o vídeo. Você precisa executar um apagamento da flash e então gravar novamente o firmware mais recente.

- Clique no botão `Factory Reset` no App. O dispositivo irá reiniciar automaticamente com a configuração de fábrica. 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### Reset do NodeDB

NodeDB é o banco de dados local que armazena informações sobre os nós descobertos na rede Mesh atual, incluindo:

- **ID do nó**
- **Nome de usuário**
- **Informações de localização**
- **Informações de sinal (SNR)**
- **Horário da última visualização**

**Quando redefinir**

Redefina o NodeDB quando:

- A lista de nós contiver entradas desatualizadas, duplicadas ou inválidas.
- Você se mover para um ambiente Mesh diferente e quiser redescobrir nós próximos.
- As informações de nó no app parecerem incorretas ou incompletas.

:::danger
Redefinir o NodeDB apenas limpa o banco de dados de nós armazenado no dispositivo. Isso **não executa uma restauração de fábrica** e **não remove a configuração básica do dispositivo**.
:::

**Método 1: Redefinir pelo dispositivo**

1. Abra o menu no dispositivo.
2. Vá para **Node Actions / Settings**.
3. Selecione **Reset NodeDB**.
4. Confirme a redefinição.

**Exemplos de telas**

Passo 1: Pressione o botão do dispositivo para entrar no menu.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB1.png" alt="Device button to enter the menu" width={300} height="auto" /></p>

Passo 2: Encontre `Reset NodeDB` no menu.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB2.png" alt="Reset NodeDB option in the device menu" width={300} height="auto" /></p>

**Método 2: Redefinir pelo App**

1. Abra o app e conecte ao dispositivo de destino.
2. Vá para **Settings**.
3. Toque em **Device**.
4. Role até o final da página **Device Config** e encontre **Reset NodeDB**.
5. Toque nele e confirme a ação.

**Caminho no App**

`Settings > Device > Reset NodeDB`

**Exemplos de telas**

Passo 1: Abra **Device** na página **Settings**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB3.png" alt="Device entry in Settings" width={300} height="auto" /></p>

Passo 2: Toque em `Reset NodeDB` na página **Device Config**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB4.png" alt="Reset NodeDB button in Device Config" width={300} height="auto" /></p>

:::tip
Por favor, observe a diferença entre as seguintes opções:

- **Reset NodeDB**: Apenas limpa o banco de dados de nós.
- **Factory Reset**: Restaura o dispositivo para as configurações de fábrica e remove mais dados de configuração.
:::

**O que acontece após a redefinição**

Depois que **Reset NodeDB** é executado, o dispositivo limpa a lista de nós armazenada atualmente. À medida que o dispositivo continua em funcionamento, ele voltará a descobrir e registrar nós próximos.

Você pode observar o seguinte:

- A lista de nós pode ficar temporariamente vazia ou menor.
- Os nós irão reaparecer gradualmente à medida que o dispositivo continuar operando.
- Os registros históricos de nós armazenados anteriormente não estarão mais disponíveis.

**Notas**

- Antes de redefinir, certifique-se de que o problema esteja realmente relacionado a uma lista de nós anormal.
- Se o problema for apenas um atraso na exibição dos nós, aguarde um pouco primeiro para ver se ele se recupera automaticamente.
- Se o problema persistir após redefinir o NodeDB, continue solucionando a configuração do dispositivo ou outras possíveis causas.
- Use o **Factory Reset** com cuidado para evitar remover acidentalmente a configuração do dispositivo.

### Qualidade do sinal

- **SNR** reflete a qualidade do link de comunicação. Um dispositivo normal geralmente opera acima de -7 dB. Um dispositivo com SNR inferior a -10 dB indica baixo desempenho.

- **RSSI** é determinado em conjunto pelo dispositivo e pelo ambiente ao seu redor. Um dispositivo normal geralmente opera acima de -110 dBm. Um dispositivo com RSSI inferior a -115 dBm é considerado como tendo baixo desempenho.

      Para obter o melhor efeito de sinal, use o dispositivo em uma área aberta, desobstruída e com interferência mínima.

### Antena compatível

Se você precisar substituir a antena do L1 Pro, [clique aqui](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html) para obter uma.

## Recursos
- [Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)
- [Arquivo de referência para impressão 3D (V1)](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing) 
- [Arquivo de referência para impressão 3D (V2 Novo joystick de quatro direções)](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip) 
- [Desafio de Design de Gabinete L1](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [Arquivo de contorno](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [Certificação TELEC](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [Certificação FCC](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [Certificação CE](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [Teste de consumo de energia e cálculo da vida útil da bateria](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
