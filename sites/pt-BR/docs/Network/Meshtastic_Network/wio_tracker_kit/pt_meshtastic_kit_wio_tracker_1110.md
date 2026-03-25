---
description: Primeiros passos com o Wio Tracker Dev Kit para Meshtastic®
title: Primeiros passos com o Kit Meshtastic®
keywords:
  - Meshtastic
  - Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /meshtastic_kit_wio_tracker_1110
sku: E24070201,114993370
last_update:
  date: 6/17/2024
  author: Jessie
createdAt: '2024-06-21'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/meshtastic_kit_wio_tracker_1110/
---

## Introdução

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-kit.gif" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Kit-for-Meshtastic.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

Apresentando uma Wio Tracker 1110 Dev Board (baseada em Nordic nRF52840 para BLE, Semtech LR1110 para LoRa), [Grove Air530 GPS Module](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html), [Grove0.96" OLED Display](https://www.seeedstudio.com/Grove-OLED-Display-0-96.html) e compatibilidade nativa com o firmware [Meshtastic®](https://meshtastic.org/), é um kit de desenvolvimento plug and play para você construir seu dispositivo rastreador Meshtatstic de baixo consumo de energia.

### Recursos

- **Configuração fácil**: Basta gravar o firmware para experimentar os poderosos recursos da rede Meshtastic.
- **Posicionamento em tempo real**: Equipado com um módulo GPS (Air530), oferecendo suporte a posicionamento GPS de alta precisão.
- **Exibição de informações**: Inclui uma tela Grove - OLED Display 0.96" para visualização clara de dados em tempo real.
- **Interfaces de expansão extensas**: Compatível com o ecossistema Grove, permitindo expansão fácil com mais sensores e módulos.
- **Hardware e software de código aberto**: Suporta desenvolvimento secundário e personalização, fornecendo ricos recursos de desenvolvimento e suporte da comunidade Meshtastic.

### Especificação

<table>
<tr><th colspan="3"><b>Geral</b></th></tr>
<tr><td colspan="1" rowspan="2"><b>Tensão - alimentação</b></td><td colspan="2">5V (USB 2.0 Type-C)</td></tr>
<tr><td colspan="1">Conector de bateria</td><td colspan="1">3.7V</td></tr>
<tr><td colspan="1" rowspan="3"><b>Interface</b></td><td colspan="1">RFIO</td><td colspan="1"><p>Conector de antena GNSS* 1</p><p>Conector de antena LoRa* 1</p></td></tr>
<tr><td colspan="1">USB type-C</td><td colspan="1">* 1</td></tr>
<tr><td colspan="1">Interface Grove</td><td colspan="1"><p>ADC* 1I2C* 1UART* 1</p><p>Digital*3</p></td></tr>
<tr><td colspan="1" rowspan="2"><b>Botão</b></td><td colspan="1">USER</td><td colspan="1">Botão configurável</td></tr>
<tr><td colspan="1">RESET</td><td colspan="1">Reiniciar</td></tr>
<tr><td colspan="1"><b>Memória FLASH externa</b></td><td colspan="2">4M</td></tr>
<tr><td colspan="3"><b>LoRa® e Posicionamento (Semtech LR1110)</b></td></tr>
<tr><td colspan="1"><b>Protocolo LoRaWAN®</b></td><td colspan="2">V1.0.4</td></tr>
<tr><td colspan="1"><b>Plano de frequência</b></td><td colspan="2">863&#126;928MHz</td></tr>
<tr><td colspan="1"><b>Sensibilidade</b></td><td colspan="2"><p>-125dBm @125K/SF7</p><p>-141dBm @125K/SF12</p></td></tr>
<tr><td colspan="1"><b>Potência de saída</b></td><td colspan="2">20dBm máx @LoRa®</td></tr>
<tr><td colspan="1"><b>Tecnologia de posicionamento</b></td><td colspan="2">GNSS(GPS/BeiDou), WiFi Sniffer</td></tr>
<tr><td colspan="1"><b>Alcance</b></td><td colspan="2">2&#126;10km (depende da antena e do ambiente)</td></tr>
<tr><td colspan="3"><b>Bluetooth (Nordic nRF52840)</b></td></tr>
<tr><td colspan="1"><b>Bluetooth</b></td><td colspan="2">Bluetooth 5.3</td></tr>
<tr><td colspan="1"><b>Flash</b></td><td colspan="2">1MB</td></tr>
<tr><td colspan="1"><b>RAM</b></td><td colspan="2">256KB</td></tr>
<tr><td colspan="1"><b>Protocolo</b></td><td colspan="2">Bluetooth LE, Bluetooth mesh, Thread, Zigbee, 802.15.4, ANT e pilhas proprietárias de 2.4 GHz</td></tr>
<tr><td colspan="1"><b>Potência de saída</b></td><td colspan="2">6dBm máx @Bluetooth</td></tr>
<tr><td colspan="3"><b>Sensores onboard -- Sensor de temperatura e umidade (SHT41)</b></td></tr>
<tr><td colspan="1"></td><td colspan="1"><b>Faixa</b></td><td colspan="1"><b>Precisão</b></td></tr>
<tr><td colspan="1"><b>Temperatura</b></td><td colspan="1">-40&#126;85°C</td><td colspan="1">± 0.2°C</td></tr>
<tr><td colspan="1"><b>Umidade</b></td><td colspan="1">0&#126;100%RH</td><td colspan="1">±1.8%RH</td></tr>
<tr><td colspan="3"><b>Sensores onboard -- Acelerômetro de 3 eixos (não utilizado)</b></td></tr>
<tr><td colspan="1"><b>Faixa</b></td><td colspan="2">±2g, 4g, 8g, 16g</td></tr>
<tr><td colspan="1"><b>Largura de banda</b></td><td colspan="2">0.5Hz &#126; 625Hz</td></tr>
<tr><td colspan="1"><b>Sensibilidade (LSB/g)</b></td><td colspan="2">1000 (±2g) &#126; 83 (±16g)</td></tr>
</table>

**Grove - OLED Display 0.96 inch**

|**Tensão de alimentação (VCC)**|3.3 / 5 V|
| :- | :- |
|**CI controlador**|SSD1308Z|
|**Cor da tela**|Branco|
|**Matriz de pontos**|128×64|
|**Tamanho do painel**|26.7(L)×19.26(A) mm|
|**Área ativa**|21.74(L)×11.175 (A) mm|
|**Passo de ponto**|0.17(L)×0.175 (A) mm|
|**Tamanho do ponto**|0.15(L)×0.15 (A) mm|
|**Ampla faixa de temperatura de operação**|-20&#126;70 ℃|

## Primeiros passos

### Conexão de hardware

Conecte o `Grove-GPS module` à porta `UART`, e o `Grove-OLED Display` à porta `I2C`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-grove.png" alt="pir" width={800} height="auto" /></p>

Ligue a placa.

### Configuração

#### Conexão do dispositivo

Diferentes tipos de conexão; descubra qual cliente é melhor para o seu tipo de conexão.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="App iOS">

- Baixe o app `Meshtastic`.<br/>

- Selecione o dispositivo de destino no painel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- A tela exibirá o nome e o código PIN

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pin-code.png" alt="pir" width={400} height="auto" /></p>

- Digite o código e depois clique em `Pair` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">

- Baixe o app `Meshtastic`.<br/>

- Clique em `+` e escolha o dispositivo de destino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- A tela exibirá o nome e o código PIN

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pin-code.png" alt="pir" width={400} height="auto" /></p>

- Digite o código e depois clique em `OK` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>

<TabItem value="web" label="Cliente Web">

Abra o [Cliente Web](https://client.meshtastic.org/), clique em `New Connection`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-new.png" alt="pir" width={600} height="auto" /></p>

- **Conectar via Bluetooth**

 Ative o Bluetooth do seu PC e selecione a aba `Bluetooth` para conectar um novo dispositivo.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/ble-new.png" alt="pir" width={600} height="auto" /></p>

 Selecione o dispositivo e insira o código PIN exibido na tela para conectar o dispositivo.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-ble-pair.png" alt="pir" width={600} height="auto" /></p>

- **Conectar via Serial**

 Conecte a placa ao seu PC e selecione a aba `Serial` para conectar um novo dispositivo.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-serial-new.png" alt="pir" width={600} height="auto" /></p>

 Você pode verificar a porta via:

 ```
 ls /dev/cu.*
 ```

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-serial-connect.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="cli" label="CLI">

Esta biblioteca fornece uma interface de linha de comando (CLI) para gerenciar as configurações de usuário dos nós Meshtastic e oferece uma API simples para enviar e receber mensagens por rádios mesh.

</TabItem>
</Tabs>

#### Configuração de parâmetros

Para começar a se comunicar pela malha, você deve definir sua região. Essa configuração controla qual faixa de frequência o seu dispositivo usa e deve ser definida de acordo com a sua localização regional.

<Tabs>
<TabItem value="ios" label="App iOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
<TabItem value="web" label="Cliente Web">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-lora-config.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="cli" label="CLI">

Execute o seguinte comando, substituindo `REGION-CODE` pelo código de região listado acima de acordo com a sua localização regional.

```
meshtastic --set lora.region <REGION-CODE>
```

Por exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/cli-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

**Lista de regiões**

Consulte [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para uma lista mais abrangente.

|**Código da região**|**Descrição**|**Faixa de frequência (MHz)**|**Ciclo de trabalho (%)**|**Limite de potência (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Não definido|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_433|União Europeia 433MHz|433.0 - 434.0|10|12|
|EU_868|União Europeia 868MHz|869.4 - 869.65|10|27|
|CN|China|470.0 - 510.0|100|19|
|JP|Japão|920.8 - 927.8|100|16|
|ANZ|Austrália & Nova Zelândia|915.0 - 928.0|100|30|
|KR|Coreia|920.0 - 923.0|100||
|TW|Taiwan|920.0 - 925.0|100|27|
|RU|Rússia|868.7 - 869.2|100|20|
|IN|Índia|865.0 - 867.0|100|30|
|NZ_865|Nova Zelândia 865MHz|864.0 - 868.0|100|36|
|TH|Tailândia|920.0 - 925.0|100|16|
|UA_433|Ucrânia 433MHz|433.0 - 434.7|10|10|
|UA_868|Ucrânia 868MHz|868.0 - 868.6|1|14|
|MY_433|Malásia 433MHz|433.0 - 435.0|100|20|
|MY_919|Malásia 919MHz|919.0 - 924.0|100|27|
|SG_923|Singapura 923MHz|917.0 - 925.0|100|20|
|LORA_24|Faixa de 2.4 GHz em todo o mundo|2400.0 - 2483.5|100|10|

:::info
**EU_433** e **EU_868** devem obedecer a uma limitação de ciclo de trabalho horário de 10%, calculada a cada minuto em uma janela contínua de 1 hora. Seu dispositivo irá parar de transmitir se você atingir esse limite, até que seja permitido novamente.
:::

Agora que você definiu a região LoRa no seu dispositivo, você pode continuar configurando quaisquer [configurações adicionais](https://meshtastic.org/docs/configuration/) para atender às suas necessidades.

## Recursos

[Wio Tracker 1110 Dev Board v1.0_SCH](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%201110%20v1.0_SCH_PDF_20230822.pdf)

[Documentação Meshtastic](https://meshtastic.org/docs/introduction/)

[Github-Firmware Meshtastic](https://github.com/meshtastic/firmware/blob/master/boards/wio-tracker-wm1110.json)

[Arquivo do Case (Impressão 3D)](https://files.seeedstudio.com/products/E24070201/wio%20tracker%20723.stp)

[Arquivo do Case (Acrílico)](https://files.seeedstudio.com/products/114993370/%E4%BA%9A%E5%85%8B%E5%8A%9B%E5%A4%96%E5%A3%B3%E5%9B%BE%E7%BA%B8.zip)

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
