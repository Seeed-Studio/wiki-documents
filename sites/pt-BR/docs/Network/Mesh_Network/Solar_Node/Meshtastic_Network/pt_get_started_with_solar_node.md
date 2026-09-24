---
description: Introdução ao SenseCAP Solar Node para Meshtastic & LoRa
title: Introdução ao Meshtastic
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
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_solar_node/
---

:::danger note
Quando o dispositivo estiver em qualquer um dos estados abaixo, não reinicie nem desligue manualmente. Caso contrário, o dispositivo pode ficar inutilizável (bricked).
1. Não tiver concluído o processo de transmissão de mensagem
2. Estiver sendo configurado
:::
## Introdução

Antes da implantação formal, teste e configure o nó primeiro.

### Gravar firmware

:::caution note
Não use `NRF-OTA` para atualizar o firmware, pois isso pode fazer com que o dispositivo fique completamente sem resposta.
Antes de gravar o firmware, execute primeiro a etapa de apagar a memória flash!
:::

Visite o [Meshtastic Web Flasher](https://flasher.meshtastic.org/). Selecione `Seeed SenseCAP Solar Node` como o dispositivo de destino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-solar.png" alt="pir" width={800} height="auto" /></p>

#### Apagar memória flash

Clique no símbolo de `trash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/FlashEraseIcon.png" alt="pir" width={800} height="auto" /></p>

Baixe e copie o firmware de apagamento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

Clique em `Enter DFU Mode`, selecione e conecte-se à porta serial chamada `XIAO-xxx`, e uma unidade chamada `XIAO-xxx` deverá aparecer. Copie o firmware de apagamento para essa unidade.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

Esse processo pode levar algum tempo. Aguarde até que a unidade "XIAO-XXX" desapareça.

#### Gravar firmware de aplicação

Escolha a versão de firmware desejada. Clique em `flash`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/3-steps.png" alt="pir" width={800} height="auto" /></p>

Baixe o arquivo UF2 e entre no modo DFU. Arraste o arquivo UF2 para a unidade DFU. O firmware deverá ser gravado após a cópia do arquivo e a reinicialização do dispositivo.

### Instalar bateria e módulo GPS (Opcional)

:::tip
Quando precisar instalar ou substituir a bateria, use uma bateria 18650 (3,6 V) com `button-top`.
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-battery.png" alt="pir" width={500} height="auto" /></p>
A versão P1-Pro possui bateria e módulo GPS integrados. Para a versão P1, os usuários precisam instalar manualmente a bateria e o módulo GPS, se necessário.
:::



- Etapa 1: Remova todos os parafusos e a tampa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- Etapa 2: Instale a bateria e o módulo GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- Etapa 3: Monte a carcaça.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
Certifique-se de que a carcaça esteja corretamente montada e os parafusos bem apertados para manter a integridade à prova d’água do dispositivo.
:::

### Ligar o dispositivo

O dispositivo precisa ser ativado conectando o cabo USB antes do primeiro uso. Se a luz azul Mesh piscar, o dispositivo foi ligado com sucesso, conforme mostrado no vídeo abaixo:

<div class="table-center">
<iframe width="700" height="250" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solarnodeturnon.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
Se o dispositivo não responder quando você pressionar o botão, carregue-o primeiro. Não use um carregador rápido.
:::

### Conectar via aplicativo

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="App iOS">

- Selecione o dispositivo de destino no painel Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/device_select123.jpeg" alt="pir" width={300} height="auto" /></p>

- Insira o código (o código padrão é `123456`) e clique em `OK` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/pairing_code123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">

- Clique em `+` e escolha o dispositivo de destino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- Insira o código (o código padrão é `123456`) e clique em `OK` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>


### Conectar via site

Se você quiser enviar mensagens de texto e se comunicar com outros nós no cliente web, pode conectar o dispositivo ao [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) agora.

  Etapa 1: Abrir o site

[Clique aqui](https://client.meshtastic.org/messages/broadcast/0) para acessar o site.
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  Etapa 2: Adicionar o novo dispositivo 

    Clique em "+ New Connection". 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    Há duas maneiras de conectar. Você pode escolher o método de sua preferência.

 Method 1: Via Bluetooth

    Escolha o método Bluetooth. Selecione o ID do dispositivo na janela pop-up.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 Method 2: Via Serial

    Escolha o método serial. Abra o gerenciador de dispositivos para ver em qual porta o dispositivo está conectado. Selecione essa porta na janela pop-up.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    Seu dispositivo será exibido na lista. Clique para conectar. Se a conexão for bem-sucedida, você poderá ver o status do dispositivo diretamente no site.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### Configurar o LoRa

Para começar a se comunicar pela malha, você deve definir sua região. Essa configuração controla qual faixa de frequência seu dispositivo usa e deve ser ajustada de acordo com sua localização regional.

<Tabs>
<TabItem value="ios" label="App iOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/configure_LoRa123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**Lista de regiões**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Não definido|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|União Europeia 868MHz|869.4 - 869.65|10|27|

Consulte [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para uma lista mais abrangente.

:::info
**EU_868** deve obedecer a uma limitação de duty cycle horário de 10%, calculada a cada minuto em uma janela móvel de 1 hora. Seu dispositivo deixará de transmitir se você atingir esse limite, até que seja permitido novamente.
:::

Agora que você definiu a região LoRa no seu dispositivo, pode continuar configurando quaisquer [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) para atender às suas necessidades.

### Configurar GPS

Ative o GPS. Você pode ajustar o intervalo de atualização e o intervalo de transmissão para obter informações de localização mais atualizadas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

No iOS, ative `Accurate Location`. Caso contrário, o posicionamento pode ser impreciso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

### Botão

|Ação do botão|Descrição|
|--|--|
|Pressionar PWR por 3s|Ligar|
|Pressionar PWR duas vezes|Atualizar informações do nó/localização|
|Pressionar PWR três vezes|Ligar/desligar o GPS|
|Pressionar PWR por 5s|Desligar|
|Pressionar RST duas vezes|Entrar manualmente em DFU|

## Instalação

:::danger note
Como o dispositivo será usado ao ar livre por longos períodos, evite instalar o painel na posição horizontal. Recomenda-se uma instalação inclinada ou diagonal para evitar o acúmulo de água. Além disso, certifique-se de que todos os parafusos estejam bem apertados e a tampa corretamente instalada. Para maior proteção contra água, você também pode considerar aplicar medidas extras de vedação.
:::

- **Lista de peças**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>



### Guia de instalação passo a passo

- Etapa 1: Conecte a peça 1 à parte inferior do dispositivo usando arruelas e parafusos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Etapa 2: Conecte a junta universal (peça 2) e o suporte (peça 3) com parafusos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Etapa 3: Conecte o cabo RF (peça 4) e a antena (peça 5).

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

### Adicionar sensores ao Solar Node (Opcional)

- Você pode instalar seu sensor seguindo este vídeo.

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

Isso geralmente é causado por uma falha na gravação do firmware. Ao gravar o firmware, mantenha uma conexão estável.

- Solução de problemas

[Clique aqui](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_solar_node/#flash-firmware) para regravar o firmware.

### Dispositivo inutilizado (bricked)

#### Descrição

O dispositivo não responde, o LED não acende e ele não consegue parear com o seu aplicativo.

**1) O dispositivo ainda consegue entrar no modo DFU, então tente gravar o bootloader**.

#### Gravar o bootloader

- [Download do bootloader](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

:::danger note
Ao gravar o bootloader, certifique-se de que a conexão do cabo esteja estável e **NÃO** a desconecte durante o processo de gravação.
:::

**Etapa 1: Instalação do Adafruit-nrfutil**

Para usuários do Windows, pressione a tecla "Win" e a tecla "R", depois digite "cmd" na janela pop-up e pressione "Enter". Isso abre a linha de comando.

Para usuários de Mac, pressione a tecla "Command" e a tecla "Espaço" para abrir o Spotlight. Em seguida, digite "terminal" e pressione "Return". Isso abre a linha de comando.

Para usuários de Linux, abra um terminal e use a guia **Linux** abaixo para instalar a ferramenta com pipx.

**Pré-requisitos**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)


Verifique na sua linha de comando se o Python e o pip foram instalados com sucesso. No Linux, use `python3` em vez de `python` para essas verificações.

```
python --version
```

```
python -m pip --version
```

Em seguida, "Python xxx" e "pip xxx" devem aparecer. Se não aparecerem, tente instalar o Python novamente.

<Tabs>
<TabItem value="pypi" label="Instalando a partir do PyPI">

Para Windows e macOS, instale a versão mais recente com o seguinte comando. Usuários de Linux devem usar a guia **Linux**.

```
pip3 install --user adafruit-nrfutil
```


Verifique o caminho de instalação:

```
python -m pip show adafruit-nrfutil
```

Este é o local de instalação:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

Para usuários do Windows, talvez seja necessário adicionar o caminho manualmente. Copie o local de instalação mostrado na última etapa. Em seguida, adicione-o da seguinte forma:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>


</TabItem>

<TabItem value="sou" label="Instalando a partir do código-fonte">

Use este método se você tiver problemas para instalar com o PyPI ou quiser modificar a ferramenta. Primeiro, clone este repositório e entre na pasta dele.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Observação: os comandos a seguir usam `python3`; no entanto, se você estiver no Windows, talvez seja necessário alterá-lo para `python`, já que instalações do Python 3.x no Windows ainda usam o nome `python.exe`.

Para instalar no espaço do usuário no seu diretório pessoal:

```
pip3 install -r requirements.txt
python3 setup.py install
```

Se você receber erros de permissão ao executar `pip3 install`, seu `pip3` é antigo ou está configurado para tentar instalar nos diretórios do sistema. Nesse caso, use a opção `--user`:

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

Se você quiser instalar nos diretórios do sistema (geralmente não recomendado):

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

Para gerar um binário executável autônomo da ferramenta (Windows e macOS), execute estes comandos:

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

Você encontrará o executável em `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` (com `.exe` se você estiver no Windows).
Copie ou mova-o para outro lugar para sua conveniência, como um diretório no seu `%PATH%`.

</TabItem>

<TabItem value="linux" label="Linux">

No Ubuntu/Debian, instale `adafruit-nrfutil` com pipx. Ele isola a ferramenta do ambiente Python do sistema e evita o erro `externally-managed-environment`:

```bash
sudo apt update
sudo apt install pipx
pipx install adafruit-nrfutil
pipx ensurepath
```

No Fedora, use `sudo dnf install pipx` em vez de apt. Reabra o seu terminal e, em seguida, verifique:

```bash
adafruit-nrfutil version
```

Use `adafruit-nrfutil version`, não `adafruit-nrfutil --version`. Se o comando não for encontrado, verifique se `pipx ensurepath` foi concluído e reabra o terminal.

</TabItem>
</Tabs>

**Etapa 2: Verifique o número da sua porta**

Conecte seu dispositivo ao PC e verifique o número da porta.

Para usuários do Windows, por exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

Para usuários de Mac, por exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**Para usuários de Linux:**

Conecte o Solar Node P1 / P1-Pro com um cabo de dados USB. Compare a seguinte saída antes e depois de conectá-lo para identificar sua porta serial:

```bash
ls /dev/ttyACM*
```

O dispositivo geralmente aparece como `/dev/ttyACM0`; se nada for listado, tente também `ls /dev/ttyUSB*`. Para entrar no modo DFU manualmente, pressione duas vezes o botão `RST` do dispositivo e, em seguida, verifique a porta novamente. Use a porta DFU atual para a gravação.

Verifique as permissões da porta, substituindo `/dev/ttyACM0` pela sua porta real:

```bash
ls -l /dev/ttyACM0
```

No Ubuntu/Debian, as portas seriais geralmente pertencem ao grupo `dialout`. Se você receber `Permission denied` e a porta pertencer a `dialout`, adicione seu usuário a esse grupo:

```bash
sudo usermod -aG dialout "$USER"
```

Saia da sessão e entre novamente para que a alteração tenha efeito. Em outras distribuições, use o grupo de acesso serial mostrado por `ls -l` e siga as instruções da sua distribuição.

**Passo 3: Grave o bootloader**

No terminal ou prompt de comando, navegue até o diretório onde você baixou o pacote zip do bootloader e execute o seguinte comando, substituindo a porta pela correta para o seu dispositivo:

Mantenha `xiao_nrf52840_ble_bootloader.zip` como um arquivo ZIP; não o extraia. Feche qualquer monitor serial ou gravador via navegador conectado ao dispositivo. Se o dispositivo já estiver em modo DFU após pressionar `RST` duas vezes, omita `--touch 1200` e use a porta DFU atual.

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```
Altere COMXX para o número da sua porta COM. Por exemplo, se o seu dispositivo estiver em COM6, altere o comando para:

`adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COM6 -b 115200 --singlebank --touch 1200`

Se a porta serial mudar após este comando, siga o Passo 4 abaixo.


- **Para macOS**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

- **Para Linux**:

Se você entrou no modo DFU manualmente no Passo 2, execute este comando sem `--touch 1200`. Substitua `/dev/ttyACM0` pela sua porta DFU atual:

```bash
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/ttyACM0 -b 115200 --singlebank
```

Se o dispositivo ainda estiver executando o firmware de aplicação e tiver uma porta serial, você pode adicionar `--touch 1200` para solicitar o modo DFU. Se ele não responder, pressione `RST` duas vezes, identifique novamente a porta DFU e use o comando sem `--touch 1200`.

**Passo 4: Lidar com a mudança de porta serial**

`--touch 1200` solicita o modo DFU abrindo e fechando a porta serial a 1200 baud. O sistema operacional pode então atribuir uma porta diferente. Se a saída mostrar `Touched serial port` seguida de um erro de porta não encontrada, verifique se apareceu uma nova porta DFU. Esse erro por si só não confirma uma gravação bem-sucedida nem significa que o dispositivo foi danificado.

Mantenha o cabo USB conectado. No Linux, execute `ls /dev/ttyACM*` novamente (ou `ls /dev/ttyUSB*` se aplicável). No Windows, atualize o Gerenciador de Dispositivos; no macOS, verifique `ls /dev/cu.*`. Tente novamente usando a nova porta DFU e **omita `--touch 1200`**. Por exemplo, se a nova porta Linux for `/dev/ttyACM1`:

```bash
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/ttyACM1 -b 115200 --singlebank
```

Use o nome real da sua porta. Se a porta não puder ser aberta, verifique suas permissões conforme descrito no Passo 2 e certifique-se de que nenhum outro aplicativo a esteja usando. Se nenhuma porta DFU aparecer, pressione `RST` duas vezes e verifique novamente antes de tentar de novo.

**Passo 5: Confirme o resultado e reinstale o firmware de aplicação**

Aguarde a conclusão da transferência e a ferramenta exibir:

```text
Device programmed.
```

Esta mensagem confirma que a transferência do bootloader foi concluída com sucesso. Mantenha o cabo conectado durante a transferência. Uma mudança de porta ou o aparecimento de uma unidade USB por si só não é confirmação de uma gravação bem-sucedida.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

Gravar o bootloader não reinstala o firmware de aplicação Meshtastic. Após a transferência bem-sucedida, siga [Flash Firmware](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_solar_node/#flash-firmware) para instalá-lo antes de usar o dispositivo.

### Incapaz de se comunicar no canal primário

Se o dispositivo não conseguir se comunicar com nós próximos ou enviar mensagens, primeiro verifique se a região LoRa e o modem preset correspondem aos nós ao redor. Você também deve verificar se o **PSK** padrão foi alterado. Um PSK diferente no canal primário impedirá o dispositivo de se comunicar com outros nós nesse canal.

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

Se você não tiver certeza de quais configurações foram alteradas, restaure o dispositivo para as configurações padrão seguindo o guia de [Factory Reset](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_solar_node/#factory-reset). Se apenas o PSK tiver sido alterado, defina-o novamente para `AQ==`.

 ### Dispositivo desliga automaticamente

 #### Descrição

 - Após o dispositivo ligar, ele desliga ou reinicia automaticamente depois de um tempo.
 - O log da porta serial executa por um tempo e depois para.

 Isso pode ser causado por reiniciar ou desligar manualmente e à força o dispositivo enquanto ele está em um dos seguintes estados: sem concluir o processo de transmissão de mensagem ou enquanto está sendo configurado.

 #### Solução de problemas

[Clique aqui](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_solar_node/#flash-erase) para executar um flash erase e, em seguida, gravar novamente o firmware mais recente.


### Factory Reset

Se você quiser restaurar as configurações padrão, pode realizar um factory reset. Existem dois métodos para fazer o factory reset.

- [Clique aqui](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_solar_node/#flash-erase) para executar um flash erase e, em seguida, gravar novamente o firmware mais recente.

- Clique no botão `Factory Reset` no app. O dispositivo será reiniciado automaticamente com a configuração de fábrica.
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### Falha em mensagem direta

#### Reset do NodeDB

NodeDB é o banco de dados local que armazena informações sobre os nós descobertos na rede Mesh atual. Se você encontrar uma situação em que não consegue se comunicar com um determinado nó, isso pode ocorrer porque seu NodeDB armazenou informações desatualizadas para esse nó. Você precisará atualizá-lo.

NodeDB armazena detalhes como:

- **ID do nó**
- **Nome de usuário**
- **Informações de localização**
- **Informações de sinal (SNR)**
- **Horário da última visualização**

Abra o app e conecte-se ao dispositivo de destino. Vá para **Settings**->**Device**->**Device Config**->**Reset NodeDB**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/sending_failed123.png" alt="Configurações do dispositivo e botão Reset NodeDB no app" width={600} height="auto" /></p>

#### Exchange User Info

Cada nó enviará periodicamente suas próprias informações de nó, permitindo que outros nós na malha o "vejam" e o "reconheçam". Dois nós precisam trocar suas informações de nó entre si para poder se comunicar um com o outro. Se você não conseguir enviar ou receber mensagens privadas com outro nó na lista, pode solicitá-los manualmente a trocar informações no app.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Entrada do dispositivo em Settings" width={300} height="auto" /></p>

#### Regenerar chave privada

Dois nós precisam conhecer a chave privada um do outro para poder se comunicar entre si. Se um nó continuar falhando na transmissão de mensagens privadas, tente regenerar a chave privada para ele.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Entrada do dispositivo em Settings" width={600} height="auto" /></p>

Reinicie o dispositivo com falha para que a configuração tenha efeito.

:::note
Após a regeneração da chave, o outro dispositivo precisa se reconectar ao nó. Portanto, é melhor excluir o nó da lista de nós do outro dispositivo.
:::

:::tip
Observe a diferença entre as seguintes opções:

- **Reset NodeDB**: Apenas limpa o banco de dados de nós.
- **Factory Reset**: Restaura o dispositivo para as configurações de fábrica e remove dados de configuração adicionais.
:::

### Consumo de energia

O consumo de energia depende principalmente de fatores como a frequência de transmissão de dados e a taxa de atualização do GPS.
Os valores abaixo são apenas para referência; o consumo real pode variar com base nas condições de uso no mundo real.

- **Consumo de energia em modo de desligamento com sono**

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

- **RSSI** é determinado em conjunto pelo dispositivo e pelo ambiente ao seu redor. Um dispositivo normal geralmente opera acima de -110 dBm. Um dispositivo com RSSI inferior a -115 dBm é considerado com desempenho ruim.

      Para obter o melhor desempenho de sinal, utilize o dispositivo em uma área aberta, desobstruída e com interferência mínima.

### Corrente de carregamento

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>

A corrente máxima de carregamento do Xiao nRF-52840 Plus é 200 mA. O chip de gerenciamento de carregamento CN3165 suporta 0,99 A. Portanto, a corrente máxima de carregamento é 1 A.

## Recursos
- [Tabela de Cálculo da Vida Útil da Bateria do Nó Solar](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Solar%20Node%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)

## Suporte Técnico e Discussão de Produto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>