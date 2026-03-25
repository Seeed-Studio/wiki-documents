---
description: Introdução ao SenseCAP Solar Node para Meshtastic & LoRa
title: Introdução ao SenseCAP Solar Node
keywords:
  - Meshtastic
  - Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /get_started_with_meshtastic_solar_node
sku: 114993633,114993643
sidebar_position: 2
last_update:
  date: 3/10/2026
  author: Michelle Huang
createdAt: '2025-05-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_solar_node/
---

:::danger note
Quando o dispositivo estiver nos estados abaixo, não o reinicie ou desligue manualmente. Caso contrário, o dispositivo pode ficar inutilizável.
1. Não tiver concluído o processo de transmissão de mensagem
2. Estiver sendo configurado
:::
## Introdução

Antes da implantação formal, teste e configure o nó primeiro.

### Gravar o firmware

:::caution note
Por favor, `don't use NRF-OTA` para atualizar o firmware, isso pode fazer com que o dispositivo fique completamente inutilizável.
Antes de gravar o firmware, grave primeiro o firmware de apagamento!
:::

Visite o [Meshtastic Web Flasher](https://flasher.meshtastic.org/). Selecione o dispositivo de destino como `Seeed SenseCAP Solar Node` .

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-solar.png" alt="pir" width={800} height="auto" /></p>

#### Gravar apagamento

Clique no símbolo de `trash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/FlashEraseIcon.png" alt="pir" width={800} height="auto" /></p>

Baixe e copie o firmware de apagamento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

Clique em `Enter DFU Mode`, aparecerá uma porta serial chamada `XIAO-xxx`, clique e conecte-a, e deverá ser exibida uma unidade chamada `XIAO-xxx`. Cole o firmware de apagamento no disco.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

Esse processo pode levar algum tempo. Aguarde até o disco "XIAO-XXX" desaparecer.

#### Gravar o firmware de aplicação

Escolha a versão de firmware desejada e clique em `flash`. 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/3-steps.png" alt="pir" width={800} height="auto" /></p>

Baixe o arquivo UF2 e entre no modo DFU. Arraste o arquivo UF2 para a unidade DFU. O firmware deverá ser gravado após o arquivo ser copiado e o dispositivo reiniciar.

### Instalar bateria e módulo GPS (Opcional)

:::tip
Quando precisar instalar ou substituir a bateria, use bateria `Button-top` 18650 (3,6 V).
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-battery.png" alt="pir" width={500} height="auto" /></p>
A versão P1-Pro possui bateria e módulo GPS integrados; para a versão P1, o usuário precisa instalar manualmente a bateria e o módulo GPS, se necessário.
:::



- Passo 1: Remova todos os parafusos e a tampa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- Passo 2: Instale a bateria e o módulo GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- Passo 3: Monte novamente a carcaça.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
Certifique-se de que a carcaça esteja corretamente montada e os parafusos bem apertados para manter a integridade à prova d'água do dispositivo.
:::

### Ligar o dispositivo

O dispositivo precisa ser ativado conectando o cabo USB na primeira utilização. Se a luz azul Mesh piscar, significa que o dispositivo foi ligado com sucesso, conforme mostrado no vídeo abaixo: 

<div class="table-center">
<iframe width="700" height="250" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solarnodeturnon.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
Se o dispositivo não responder quando você pressionar o botão, carregue-o primeiro. Não use carregador de carga rápida.
:::

### Conectar via App

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="App iOS">

- Selecione o dispositivo de destino no painel Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Insira o código (o código padrão é `123456`) e clique em `OK` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">

- Clique em `+` e escolha o dispositivo de destino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- Insira o código (o código padrão é `123456`) e clique em `OK` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>


### Conectar via site

Se você quiser enviar mensagens de texto e se comunicar com outros nós pelo site, agora pode conectar o dispositivo ao [Meshtastic Website](https://client.meshtastic.org/messages/broadcast/0). 

  Passo 1: Abra o site

[Click here](https://client.meshtastic.org/messages/broadcast/0) para ir ao site. 
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  Passo 2: Adicionar o novo dispositivo 

    Clique em "+ New Connection". 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    Há duas maneiras de conectar. Você pode escolher o método de sua preferência.

 Método 1: Via Bluetooth

    Escolha o método Bluetooth. Escolha o ID do dispositivo na janela pop-up.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 Método 2: Via Serial

    Escolha o método serial. Abra o gerenciador de dispositivos para ver em qual porta o dispositivo está conectado. Escolha essa porta na janela pop-up.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    Seu dispositivo será exibido na lista. Clique para conectar. Se a conexão for bem-sucedida, você poderá ver o status do dispositivo diretamente no site.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### Configurar o LoRa

Para começar a se comunicar pela malha, você deve definir sua região. Essa configuração controla qual faixa de frequência seu dispositivo usa e deve ser ajustada de acordo com sua localização regional.

<Tabs>
<TabItem value="ios" label="App iOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**Lista de regiões**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Unset|N/A|N/A|N/A|
|US|United States|902.0 - 928.0|100|30|
|EU_868|European Union 868MHz|869.4 - 869.65|10|27|

Consulte [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para uma lista mais abrangente.

:::info
**EU_868** deve obedecer a uma limitação de duty cycle horário de 10%, calculada a cada minuto em uma janela contínua de 1 hora. Seu dispositivo deixará de transmitir se você atingir esse limite, até que seja permitido novamente.
:::

Agora que você definiu a região LoRa no seu dispositivo, pode continuar configurando quaisquer [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) para atender às suas necessidades.

### Configurar o GPS

Ative o GPS. Você pode ajustar o intervalo de atualização e o intervalo de transmissão para obter informações de localização mais atualizadas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

Para iOS, ative o `Accurate Location`. Caso contrário, o posicionamento pode apresentar desvio.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

### Botão

|Ação do botão|Descrição|
|--|--|
|Pressione PWR por 3s|Ligar|
|Pressione PWR duas vezes|Atualizar informações do nó/localização|
|Pressione PWR três vezes|Ligar/desligar o GPS|
|Pressione PWR por 5s|Desligar|
|Pressione RST duas vezes|Entrar manualmente em DFU|

## Instalação

:::danger note
Como o dispositivo será usado ao ar livre por longos períodos, evite instalar o painel na posição horizontal. Recomenda-se uma instalação inclinada ou diagonal para evitar o acúmulo de água. Além disso, certifique-se de que todos os parafusos estejam bem apertados e a tampa corretamente instalada. Para maior proteção contra água, você também pode considerar aplicar medidas extras de vedação.
:::

- **Lista de peças**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>



### Guia de instalação passo a passo

- Passo 1: Conecte a peça 1 à parte inferior do dispositivo usando arruelas e parafusos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Etapa 2: Conecte a junta universal (parte 2) e o suporte (parte 3) com parafusos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Etapa 3: Conecte o cabo RF (parte 4) e a antena (parte 5).

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Etapa 4: Instale o anel de fixação na posição apropriada.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hoop-ring.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Etapa 5: Conecte o suporte da junta universal.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connector.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Etapa 6: Afrouxe os parafusos, ajuste a junta universal para a posição apropriada e, em seguida, aperte os parafusos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Etapa 7: Conecte a antena ao dispositivo.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Orientação completa de instalação

- Você pode concluir todo o processo de instalação e inicialização por meio de um vídeo.

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/smQe7G0Bbsk?si=kcB8BdoxiwpZqB4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Adicionar sensores ao nó solar (Opcional)

- Você pode instalar seu sensor através deste vídeo.

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/AUFAdRgOCK8?si=9P-X1B7g8unZvVqb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

- Os seguintes sensores foram verificados como compatíveis com a interface Grove no dispositivo.

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
    <td>[MCP9808](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html)、PCT2075</td>
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

### Atualizar antena (Opcional)

- Você pode substituir a antena por uma de fibra de vidro assistindo a este vídeo.

Se você precisar de uma antena com ganho mais alto, recomendamos a antena [860-930MHz 3dBi fiberglass](https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-with-base-860-930MHz-3dBi-360mm-p-5315.html) e a antena [902-928MHz 5.8dBi fiberglass](https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html).

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/uCUq7VrNkzc?si=9uiAAZY45B-Sg-wD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## FAQ

### Loop de inicialização

- Motivo 

Isso geralmente é causado por falha no processo de gravação do firmware. Ao gravar o firmware, mantenha uma conexão estável. 

- Solução de problemas

[Clique aqui](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_solar_node/#flash-firmware) para regravar o firmware.

### Dispositivo brickado

#### Descrição

O dispositivo não responde, nenhum LED, não é possível parear com seu App.

**1) O dispositivo ainda consegue entrar no modo DFU, então tente gravar o bootloader**.

#### Gravar o bootloader

- [Download do bootloader](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

:::danger note
Ao gravar o bootloader, certifique-se de que a conexão do cabo esteja estável e **NÃO** o desconecte durante o processo de gravação.
:::

**Etapa 1: Instalação do Adafruit-nrfutil**

Para usuários de Windows, pressione a tecla "Win" e a tecla "r", depois digite "cmd" na janela pop-up e clique em "Enter". Isso abrirá a linha de comando. 

Para usuários de Mac, pressione a tecla "Command" e a tecla "Space", assim você pode abrir o Spotlight. Em seguida, digite "termial" e clique em "Return". Isso abrirá a linha de comando. 

**Pré-requisitos**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)


Verifique na sua linha de comando se o Python e o pip foram instalados com sucesso.

```
python --version
```

```
python -m pip --version
```

Então "Python xxx" e "pip xxx" devem aparecer. Se não aparecerem, tente instalar o Python novamente.

<Tabs>
<TabItem value="pypi" label="Instalando a partir do PyPI">

Este é o método recomendado para instalar a versão mais recente:

```
pip3 install --user adafruit-nrfutil
```


Verifique o caminho de instalação:

```
python -m pip show adafruit-nrfutil
```

Este é o local de instalação:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

Para usuários de Windows, talvez seja necessário adicionar o caminho manualmente. Copie o local de instalação mostrado na última etapa. Em seguida, adicione-o da seguinte forma:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>


</TabItem>

<TabItem value="sou" label="Instalando a partir do código-fonte">

Use este método se você tiver problemas para instalar com o PyPi ou quiser modificar a ferramenta. Primeiro, clone este repositório e acesse a pasta dele.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Observação: os comandos a seguir usam `python3`, porém, se você estiver no Windows, talvez precise alterá-lo para `python`, já que a instalação do Python 3.x no Windows ainda usa o nome python.exe

Para instalar no espaço do usuário no seu diretório pessoal:

```
pip3 install -r requirements.txt
python3 setup.py install
```

Se você receber erros de permissão ao executar `pip3 install`, seu `pip3` é antigo ou está configurado para tentar instalar nos diretórios do sistema. Nesse caso, use a flag `--user`:

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

Se você quiser instalar nos diretórios do sistema (geralmente não recomendado):

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

Para gerar um binário executável autônomo da ferramenta (Windows e MacOS), execute estes comandos:

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

Você encontrará o .exe em `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` (com `.exe` se você estiver no Windows).
Copie ou mova-o para outro lugar para sua conveniência, como um diretório no seu %PATH%.

</TabItem>
</Tabs>

**Etapa 2: Verifique o número da sua porta**

Conecte seu dispositivo ao PC e verifique o número da porta.

Para usuários de Windows, por exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

Para usuários de Mac, por exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**Etapa 3: Grave o bootloader**

No terminal ou prompt de comando, navegue até o diretório onde você baixou o pacote zip do bootloader e execute o seguinte comando, substituindo a porta correta do seu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```
Altere COMXX para o número da sua porta COM. Por exemplo, se o seu dispositivo estiver na COM6, altere o comando para:

`adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COM6 -b 115200 --singlebank --touch 1200`

 Alguns dispositivos mudarão o número da porta após você inserir este comando. Portanto, se a instalação falhar, verifique o número da porta novamente.


- **Para outros**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

Quando você tiver concluído as etapas acima, poderá seguir este [passo](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_solar_node/#flash-firmware) para gravar o firmware do aplicativo.

 ### Dispositivo desliga automaticamente

 #### Descrição

 - Após o dispositivo ser ligado, ele irá desligar ou reiniciar automaticamente depois de um tempo. 
 - O log da porta serial é executado por um tempo e depois para.

 Isso pode ser causado por reiniciar ou desligar o dispositivo manualmente e à força quando o dispositivo está nos seguintes estados: sem concluir o processo de transmissão de mensagens, sendo configurado......

 #### Solução de problemas

[clique aqui](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_solar_node/#flash-erase) para executar um apagamento da flash. Em seguida, grave novamente o firmware mais recente.


### Restauração de fábrica

Se você quiser restaurar as configurações padrão, pode fazer a restauração de fábrica. Há dois métodos para você fazer a restauração de fábrica.

- [clique aqui](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_solar_node/#flash-erase) para executar um apagamento da flash. Em seguida, grave novamente o firmware mais recente.

- Clique no botão `Factory Reset` no App. O dispositivo irá reiniciar automaticamente com a configuração de fábrica. 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### Redefinição do NodeDB

NodeDB é o banco de dados local que armazena informações sobre os nós descobertos na rede Mesh atual, incluindo:

- **ID do Nó**
- **Nome de Usuário**
- **Informações de Localização**
- **Informações de Sinal (SNR)**
- **Horário da Última Visualização**

**Quando redefinir**

Redefina o NodeDB quando:

- A lista de nós contiver entradas desatualizadas, duplicadas ou inválidas.
- Você se mover para um ambiente Mesh diferente e quiser redescobrir os nós próximos.
- As informações do nó no aplicativo parecerem incorretas ou incompletas.

:::danger
Redefinir o NodeDB apenas limpa o banco de dados de nós armazenado no dispositivo. Isso **não executa uma restauração de fábrica** e **não remove a configuração básica do dispositivo**.
:::

**Redefinir pelo App**

1. Abra o aplicativo e conecte-se ao dispositivo de destino.
2. Vá para **Settings**.
3. Toque em **Device**.
4. Role até o final da página **Device Config** e encontre **Reset NodeDB**.
5. Toque nela e confirme a ação.

**Caminho no App**

`Settings > Device > Reset NodeDB`

**Telas de exemplo**

Passo 1: Abra **Device** na página **Settings**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB3.png" alt="Device entry in Settings" width={300} height="auto" /></p>

Passo 2: Toque em `Reset NodeDB` na página **Device Config**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB4.png" alt="Reset NodeDB button in Device Config" width={300} height="auto" /></p>

:::tip
Observe a diferença entre as seguintes opções:

- **Reset NodeDB**: Apenas limpa o banco de dados de nós.
- **Factory Reset**: Restaura o dispositivo para as configurações de fábrica e remove mais dados de configuração.
:::

**O que acontece após a redefinição**

Depois que **Reset NodeDB** for executado, o dispositivo limpa a lista de nós armazenada no momento. À medida que o dispositivo continua em funcionamento, ele redescobrirá e registrará novamente os nós próximos.

Você poderá observar o seguinte:

- A lista de nós pode ficar temporariamente vazia ou menor.
- Os nós irão reaparecer gradualmente à medida que o dispositivo continuar operando.
- Os registros históricos de nós armazenados anteriormente não estarão mais disponíveis.

**Notas**

- Antes de redefinir, certifique-se de que o problema esteja realmente relacionado a uma lista de nós anormal.
- Se o problema for apenas um atraso na exibição dos nós, aguarde um pouco primeiro para ver se ele se recupera automaticamente.
- Se o problema permanecer após redefinir o NodeDB, continue solucionando a configuração do dispositivo ou outras possíveis causas.
- Use **Factory Reset** com cuidado para evitar remover acidentalmente a configuração do dispositivo.

### Consumo de energia

O consumo de energia depende principalmente de fatores como a frequência de transmissão de dados e a taxa de atualização do GPS.
Os valores abaixo são apenas para referência; o consumo real pode variar com base nas condições reais de uso.

- **Consumo de energia no modo de suspensão desligado**

|Descrição|Consumo|
|---|---|
|Corrente de operação do GPS_LED|1,02 mA|
|Alimentado, mas não ativado|56,195 μA|
|Alimentado e ativado|611 μA|

**Exemplo:**

|Capacidade da bateria |Vida útil da bateria|
|---|---|
|3350|136,8|
|12000|490,2|

- **Consumo de energia em modo ativo**

|Modo|Corrente|
|---|---|
|Corrente estática|10,65 mA|
|Corrente de transmissão EU868|157,74 mA|
|Corrente de transmissão US915|205,22 mA|
|Corrente de operação do GPS|50 mA|
|Corrente de operação do GPS_LED|1,02 mA|

### Qualidade do sinal

- **SNR** reflete a qualidade do link de comunicação. Um dispositivo normal geralmente opera acima de -7 dB. Um dispositivo com SNR inferior a -10 dB indica desempenho ruim.

- **RSSI** é determinado em conjunto pelo dispositivo e pelo ambiente ao seu redor. Um dispositivo normal geralmente opera acima de -110 dBm. Um dispositivo com RSSI inferior a -115 dBm é considerado como tendo desempenho ruim.

      Para obter o melhor efeito de sinal, use o dispositivo em uma área aberta, desobstruída e com interferência mínima.

### Corrente de carregamento

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>

A corrente máxima de carregamento do Xiao nRF-52840 Plus é 200 mA. O CI de gerenciamento de carregamento CN3165 é de 0,99 A. Portanto, a corrente máxima de carregamento é 1 A.

## Recurso
- [Tabela de Cálculo da Vida Útil da Bateria do Solar Node](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Solar%20Node%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
