---
description: Comece a usar o SenseCAP Solar Node para Meshcore e LoRa. Guia para instalação do dispositivo, gravação de firmware e conexão do dispositivo.
title: Introdução ao MeshCore no SenseCAP Solar Node
keywords:
  - Meshcore
  - Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /get_started_with_meshcore_solar_node
sku: 114993633,114993643
sidebar_position: 1
last_update:
  date: 3/6/2026
  author: Michelle Huang
createdAt: '2025-05-13'
url: https://wiki.seeedstudio.com/pt-br/get_started_with_meshcore_solar_node/
updatedAt: '2026-04-03'
---

:::danger note
Quando o dispositivo estiver em um dos estados abaixo, não reinicie nem desligue manualmente. Caso contrário, o dispositivo poderá ser danificado permanentemente.
1. Não concluiu o processo de transmissão de mensagem
2. Está sendo configurado
:::

## Gravação de firmware

### Método 1 via Web Flasher

Conecte seu dispositivo ao computador com um cabo USB. Certifique-se de que o cabo suporta transmissão de dados. 

:::warning
Mantenha o cabo USB conectado durante a transmissão de dados, caso contrário o dispositivo poderá ser danificado.
:::

Acesse o [Meshcore Web Flasher](https://meshcore.io/flasher). 

Escolha `Seeed Studio SenseCAP Solar` no grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

Escolha `Repeater`. Se você quiser gravar outro firmware, por favor [clique aqui](https://docs.meshcore.io/) para ver o tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### Apagar Flash

Clique em `Enter DFU Mode`, escolha a porta serial chamada "Solar Node" ou "TinyUSB serial". Em seguida clique em `Erase Flash` e escolha a porta serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseSelect.png" alt="pir" width={800} height="auto" /></p>

Se você clicou em `Erase Flash` mas não houve resposta, clique em `Enter DFU` novamente e depois em `Erase Flash` para garantir que entrou no modo DFU com sucesso.

Se você vir "Flashing erase firmware:100%", o dispositivo foi apagado com sucesso.

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### Gravar firmware

Selecione a versão do firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

Clique em `Enter DFU Mode`, escolha a porta serial chamada "P1 Pro" ou "TinyUSB" serial. Em seguida clique em `Flash` e escolha a porta serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

Se você clicou em `Flash` mas não houve resposta, clique em `Enter DFU` novamente e depois em `Flash` para garantir que entrou no modo DFU com sucesso.

Quando a barra de progresso estiver completamente preenchida, isso indica que a gravação foi concluída. Em seguida o dispositivo será reiniciado automaticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### Método 2: arrastar e soltar

Conecte seu dispositivo ao computador com um cabo USB. Certifique-se de que o cabo suporta transmissão de dados. 

:::warning
Mantenha o cabo USB conectado durante a transmissão de dados, caso contrário o dispositivo poderá ser danificado.
:::

Acesse o [Meshcore Web Flasher](https://meshcore.io/flasher). 

Escolha `Seeed Studio SenseCAP Solar` no grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

Escolha `Repeater`. Se você quiser gravar outro firmware, por favor [clique aqui](https://docs.meshcore.io/) para ver o tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### Apagar Flash

Baixe o arquivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseFirmware.png" alt="pir" width={800} height="auto" /></p>

Clique duas vezes no botão RST para entrar manualmente no modo DFU. Você verá um disco chamado `Xiao-Boot` ou `Solar Node` aparecer após 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

Arraste o arquivo UF2 baixado para o disco que apareceu.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseDr.png" alt="pir" width={800} height="auto" /></p>

O disco desaparecerá depois que o firmware for gravado com sucesso. Neste momento não há firmware no dispositivo, portanto ele `NÃO` será reiniciado automaticamente.

#### Gravar firmware

Escolha a versão mais recente do firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

Baixe o arquivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FlashFirmware.png" alt="pir" width={800} height="auto" /></p>

Clique duas vezes no botão RST para entrar manualmente no modo DFU. Você verá um disco chamado `Xiao-Boot` ou `Solar Node` aparecer após 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

Arraste o arquivo UF2 baixado para o disco que apareceu.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareDr.png" alt="pir" width={800} height="auto" /></p>

O disco desaparecerá depois que o firmware for gravado com sucesso. Neste momento não há firmware no dispositivo, portanto ele NÃO será reiniciado automaticamente.

## Introdução

Antes da implantação formal, teste e configure o nó primeiro.

### Instalação

#### Montar o dispositivo

:::danger note
Como o dispositivo será usado ao ar livre por longos períodos, evite instalar o painel na posição horizontal. Recomenda-se uma instalação inclinada ou diagonal para evitar o acúmulo de água. Além disso, certifique-se de que todos os parafusos estejam bem apertados e a tampa corretamente instalada. Para uma proteção à prova d’água aprimorada, você também pode considerar aplicar medidas de vedação adicionais.
:::

- **Lista de peças**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>


- Etapa 1: conecte a peça 1 à parte inferior do dispositivo usando arruelas e parafusos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Etapa 2: conecte a junta universal (peça 2) e o suporte (peça 3) com parafusos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Etapa 3: conecte o cabo RF (peça 4) e a antena (peça 5).

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Etapa 4: instale o aro na posição apropriada.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hoop-ring.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Etapa 5: conecte o suporte da junta universal.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connector.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Etapa 6: afrouxe os parafusos, ajuste a junta universal para a posição adequada e depois aperte os parafusos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Etapa 7: conecte a antena ao dispositivo.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>



#### Instalar bateria e módulo GPS (opcional)

:::tip
Quando precisar instalar ou substituir a bateria, use bateria `Button-top` 18650 (3,6 V).
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-battery.png" alt="pir" width={500} height="auto" /></p>
A versão P1-Pro possui bateria e módulo GPS embutidos; para a versão P1, o usuário precisa instalar manualmente a bateria e o módulo GPS, se necessário.
:::



- Etapa 1: remova todos os parafusos e a tampa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- Etapa 2: instale a bateria e o módulo GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- Etapa 3: monte a carcaça.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
Certifique-se de que a carcaça esteja devidamente montada e os parafusos bem apertados para manter a integridade à prova d’água do dispositivo.
:::

#### (Opcional) Atualizar antena

- Você pode substituir a antena por uma de fibra de vidro assistindo a este vídeo.

Se você precisar de uma antena com ganho maior, recomendamos a antena [860-930MHz 3dBi fiberglass](https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-with-base-860-930MHz-3dBi-360mm-p-5315.html) e a antena [902-928MHz 5.8dBi fiberglass](https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html).

### Ligar o dispositivo

O dispositivo precisa ser ativado conectando o cabo USB. O LED Mesh azul ficará aceso por cerca de 3s, isso significa que o dispositivo foi ligado com sucesso. 

A luz azul do LED mesh não acenderá até que ele envie advert.

:::tip
Somente a partir do lançamento da versão 1.14.1 o botão de energia foi habilitado. Pressione o dispositivo por `3s` para ligar/desligar o dispositivo. Você verá uma luz branca piscar rapidamente. Isso indica que o dispositivo está sendo ligado com sucesso.
<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/blinkingonetime.mp4" scrolling="yes" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
:::


### Configuração

- **Etapa 1 Configuração inicial**

Quando o MeshCore é gravado em um dispositivo LoRa pela primeira vez, é necessário definir a frequência do dispositivo servidor para que ele utilize a frequência que é legal no seu país ou região.

[Click here](https://config.meshcore.io/) para configurar o repetidor.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Altere a região LoRa e salve a configuração. Em seguida `Reboot` o dispositivo, caso contrário a configuração não terá efeito.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/LoRaSettingg.png" alt="pir" width={600} height="auto" /></p>

**Lista de regiões**

|**Código da Região**|**Descrição**|**Faixa de frequência (MHz)**|**Ciclo de trabalho (%)**|**Limite de potência (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Não definido|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|União Europeia 868MHz|869.4 - 869.65|10|27|

:::info
**EU_868** precisa obedecer a uma limitação de ciclo de trabalho horário de 10%, calculada a cada minuto em uma base contínua de 1 hora. Seu dispositivo deixará de transmitir se você atingir esse limite, até que seja permitido novamente.
:::


- **Etapa 2 Enviar Advert**

Clique em "send advert" para permitir que outros dispositivos Meshcore vejam este repetidor. Em seguida o repetidor poderá ser visto na lista de dispositivos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertSending.png" alt="pir" width={600} height="auto" /></p>

Após a configuração de inicialização, clique 

- **Etapa 3 (Opcional) Login do administrador**

A senha padrão de administrador de um repetidor é `password`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={600} height="auto" /></p>

Após fazer login, você pode ver a página de configuração. Agora você pode ajustar a configuração do repetidor.

Se você quiser mostrar a posição do repetidor, pode habilitar o GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/GPSS.jpg" alt="pir" width={300} height="auto" /></p>

Além disso, você pode ajustar o intervalo de transmissão do advert. A faixa de intervalo de `auto zero hop advert` é de 60-240 minutos. A faixa de intervalo de `auto flood advert` é de 3-168 horas. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertInterval.jpg" alt="pir" width={300} height="auto" /></p>

### Definir caminho

Antes de adicionar o repetidor à sua rota, você pode precisar usar o repetidor para enviar advert primeiro. O repetidor enviará automaticamente em intervalos regulares. Esse intervalo pode ser de várias horas (padrão 3 horas). Portanto, você precisa enviar advert manualmente ou então terá que esperar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SendAdvert.png" alt="pir" width={600} height="auto" /></p>

Você pode definir manualmente o caminho de envio das mensagens. Conecte seu dispositivo companheiro Bluetooth ao aplicativo do seu telefone. Abra uma janela de mensagem privada. Então você pode escolher o repetidor descoberto para formar o seu caminho.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SetPath1.png" alt="pir" width={600} height="auto" /></p>

Após definir o caminho, o método de transmissão será alterado para "n hop". Por exemplo, se você adicionar 1 repetidor à sua rota, ele será alterado para 1 hop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/1Hop.png" alt="pir" width={300} height="auto" /></p>

## FAQ

### Loop de inicialização

- Motivo 

Isso geralmente é causado por falha ao gravar o firmware. Ao gravar o firmware, mantenha uma conexão estável. 

- Solução de problemas

[Click here](https://wiki.seeedstudio.com/pt-br/get_started_with_meshcore_solar_node/#flash-erase) para regravar o firmware.

### Dispositivo brickado

#### Descrição

O dispositivo não responde, sem LED, não consegue parear com o seu App.

**1) O dispositivo ainda consegue entrar no modo DFU, então tente gravar o bootloader**.

#### Gravar o bootloader

- [Download do bootloader](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

:::danger note
Quando estiver gravando o bootloader, certifique-se de que a conexão do cabo esteja estável e **NÃO** a desconecte durante o processo de gravação.
:::

**Etapa 1: Instalação do Adafruit-nrfutil**

Para usuário Windows, pressione a tecla "Win" e a tecla "r", depois digite "cmd" na janela que aparecer e clique em "Enter". Isso pode abrir a linha de comando. 

Para usuário MAC, pressione a tecla "Command" e a tecla "Space", assim você pode abrir o Spotlight. Em seguida digite "termial" e clique em "Return". Isso pode abrir a linha de comando. 

**Pré-requisitos**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

Verifique na sua linha de comando se o python e o pip foram instalados com sucesso.

```
python --version
```

```
python -m pip --version
```

Em seguida, "Python xxx" e "pip xxx" devem aparecer. Se não aparecerem, tente instalar o python novamente.

<Tabs>
<TabItem value="pypi" label="Instalando pelo PyPI">

Este é o método recomendado, para instalar a versão mais recente:

```
pip3 install --user adafruit-nrfutil
```

Verifique o caminho de instalação:

```
python -m pip show adafruit-nrfutil
```

Este é o local de instalação:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

Para usuário Windows, talvez seja necessário adicionar o caminho manualmente. Copie o local de instalação exibido na última etapa. Em seguida, adicione-o como a seguir:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>

<TabItem value="sou" label="Instalando a partir do código-fonte">

Use este método se você tiver problemas para instalar com o PyPi ou quiser modificar a ferramenta. Primeiro, clone este repositório e vá para sua pasta.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Observação: os comandos a seguir usam `python3`, porém se você estiver no Windows, talvez precise alterá-lo para `python`, já que a instalação do python 3.x no Windows ainda usa o nome python.exe

Para instalar no espaço do usuário em seu diretório pessoal:

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

Para usuário Windows, por exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

Para usuário Mac, por exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**Etapa 3: Gravar o bootloader**

No terminal ou prompt de comando, navegue até o diretório onde você baixou o pacote zip do bootloader e execute o seguinte comando, substituindo pela porta correta do seu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```
Por favor, altere COMXX para o número da sua porta COM. Por exemplo, se o seu dispositivo estiver em com6, altere o comando para:

`adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COM6 -b 115200 --singlebank --touch 1200`

 Alguns dispositivos mudarão o número da porta após você inserir este comando. Portanto, se a instalação falhar, verifique o número da porta novamente.


- **Para outros**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

Quando você tiver concluído as etapas acima, poderá então [gravar o firmware da aplicação](https://wiki.seeedstudio.com/pt-br/get_started_with_meshcore_solar_node/#flash-erase).

### Qualidade do sinal

- **SNR** reflete a qualidade do enlace de comunicação. Um dispositivo normal geralmente opera acima de -7 dB. Um dispositivo com SNR menor que -10 dB indica desempenho ruim.

- **RSSI** é determinado em conjunto pelo dispositivo e pelo ambiente ao seu redor. Um dispositivo normal geralmente opera acima de -110 dBm. Um dispositivo com RSSI menor que -115 dBm é considerado com desempenho ruim.

      Para obter o melhor efeito de sinal, utilize o dispositivo em uma área aberta, sem obstruções e com interferência mínima.

### Corrente de carregamento

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>

A corrente máxima de carregamento do Xiao nRF-52840 Plus é 200 mA. O chip de gerenciamento de carregamento CN3165 é de 0,99 A. Portanto, a corrente máxima de carregamento é 1 A.

## Recurso
- [Tabela de Cálculo de Vida Útil da Bateria do Nó Solar](https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/mesh_repeater_power_table_en1.xlsx)
