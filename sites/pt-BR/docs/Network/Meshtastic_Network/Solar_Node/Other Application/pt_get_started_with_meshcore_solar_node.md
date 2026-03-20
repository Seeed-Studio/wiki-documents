---
description: Comece a usar o SenseCAP Solar Node para Meshcore & LoRa. Guia para instalação do dispositivo, gravação de firmware e conexão do dispositivo.
title: Primeiros Passos com MeshCore no SenseCAP Solar Node
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
---

:::danger note
Quando o dispositivo estiver nos estados abaixo, não reinicie nem desligue manualmente. Caso contrário, o dispositivo pode ficar inutilizável.
1. Não tiver concluído o processo de transmissão de mensagens
2. Estiver sendo configurado
:::

## Gravação de Firmware

### Método 1 via Web Flasher

Conecte seu dispositivo ao computador com um cabo USB. Certifique-se de que o cabo suporte transmissão de dados. 

:::warning
Mantenha o cabo USB conectado durante a transmissão de dados, caso contrário o dispositivo poderá ser danificado.
:::

Acesse o [Meshcore Web Flasher](https://flasher.meshcore.co.uk/). 

Escolha `Seeed Studio SenseCAP Solar` no grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

Escolha `Repeater`. Se você quiser gravar outro firmware, por favor [clique aqui](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md) para ver o tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### Apagar Flash

Clique em `Enter DFU Mode`, escolha a porta serial chamada "Solar Node" ou "TinyUSB serial". Depois clique em `Erase Flash` e escolha a porta serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseSelect.png" alt="pir" width={800} height="auto" /></p>

Se você clicou em `Erase Flash` mas não houve resposta, clique em `Enter DFU` novamente e depois clique em `Erase Flash` para garantir que entrou no modo DFU com sucesso.

Se você vir "Flashing erase firmware:100%", o dispositivo foi apagado com sucesso.

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### Gravar Firmware

Selecione a versão do firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

Clique em `Enter DFU Mode`, escolha a porta serial chamada "P1 Pro" ou "TinyUSB" serial. Depois clique em `Flash` e escolha a porta serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

Se você clicou em `Flash` mas não houve resposta, clique em `Enter DFU` novamente e depois clique em `Flash` para garantir que entrou no modo DFU com sucesso.

Quando a barra de progresso estiver completamente preenchida, isso indica que a gravação do Flash foi concluída. Em seguida, o dispositivo irá reiniciar automaticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### Método 2 Arrastar e Soltar

Conecte seu dispositivo ao computador com um cabo USB. Certifique-se de que o cabo suporte transmissão de dados. 

:::warning
Mantenha o cabo USB conectado durante a transmissão de dados, caso contrário o dispositivo poderá ser danificado.
:::

Acesse o [Meshcore Web Flasher](https://flasher.meshcore.co.uk/). 

Escolha `Seeed Studio SenseCAP Solar` no grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

Escolha `Repeater`. Se você quiser gravar outro firmware, por favor [clique aqui](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md) para ver o tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### Apagar Flash

Baixe o arquivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseFirmware.png" alt="pir" width={800} height="auto" /></p>

Clique duas vezes no botão RST para entrar manualmente no modo DFU. Você verá que um disco chamado `Xiao-Boot` ou `Solar Node` será exibido após 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

Arraste o arquivo UF2 baixado para o disco exibido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseDr.png" alt="pir" width={800} height="auto" /></p>

O disco desaparecerá depois que o firmware for gravado com sucesso. Neste ponto, não há firmware no dispositivo, portanto o dispositivo `NÃO` irá reiniciar automaticamente.

#### Gravar Firmware

Escolha a versão mais recente do firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

Baixe o arquivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FlashFirmware.png" alt="pir" width={800} height="auto" /></p>

Clique duas vezes no botão RST para entrar manualmente no modo DFU. Você verá que um disco chamado `Xiao-Boot` ou `Solar Node` será exibido após 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

Arraste o arquivo UF2 baixado para o disco exibido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareDr.png" alt="pir" width={800} height="auto" /></p>

O disco desaparecerá depois que o firmware for gravado com sucesso. Neste ponto, não há firmware no dispositivo, portanto o dispositivo NÃO irá reiniciar automaticamente.

## Primeiros Passos

Antes da implantação formal, teste e configure o nó primeiro.

### Instalação

#### Montar o Dispositivo

:::danger note
Como o dispositivo será usado ao ar livre por longos períodos, evite instalar o painel em posição horizontal. Recomenda-se uma instalação inclinada ou diagonal para evitar o acúmulo de água. Além disso, certifique-se de que todos os parafusos estejam bem apertados e a tampa devidamente instalada. Para maior proteção contra água, você também pode considerar aplicar medidas extras de vedação.
:::

- **Lista de Peças**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>


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

- Etapa 6: Afrouxe os parafusos, ajuste a junta universal para a posição adequada e depois aperte os parafusos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Etapa 7: Conecte a antena ao dispositivo.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>



#### Instalar Bateria e Módulo GPS (Opcional)

:::tip
Quando você precisar instalar ou substituir a bateria, use bateria `Button-top` 18650 (3,6 V).
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-battery.png" alt="pir" width={500} height="auto" /></p>
A versão P1-Pro possui bateria e módulo GPS embutidos; para a versão P1, o usuário precisa instalar a bateria e o módulo GPS manualmente, se necessário.
:::



- Etapa 1: Remova todos os parafusos e a tampa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- Etapa 2: Instale a bateria e o módulo GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- Etapa 3: Monte o invólucro.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
Certifique-se de que o invólucro esteja corretamente montado e os parafusos bem apertados para manter a integridade de impermeabilidade do dispositivo.
:::

#### (Opcional) Atualizar antena

- Você pode substituir a antena por uma de fibra de vidro assistindo a este vídeo.

Se você precisar de uma antena com ganho mais alto, recomendamos a antena [860-930MHz 3dBi fiberglass](https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-with-base-860-930MHz-3dBi-360mm-p-5315.html) e a antena [902-928MHz 5.8dBi fiberglass](https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html).

### Ligar o dispositivo

O dispositivo precisa ser ativado conectando o cabo USB. O LED Mesh azul acenderá por cerca de 3s, o que significa que o dispositivo foi ligado com sucesso. 

O LED Mesh azul não acenderá até que ele envie advert.

:::tip
Se o dispositivo não responder quando você inserir o cabo USB, carregue-o primeiro. Não use carregador de carregamento rápido.
:::


### Configuração

- **Passo1 Configuração Inicial**

Quando o MeshCore é gravado em um dispositivo LoRa pela primeira vez, é necessário definir a frequência do dispositivo servidor para que ele utilize a frequência que é legal em seu país ou região.

[Clique aqui](https://config.meshcore.dev/) para configurar o repetidor.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Altere a região LoRa e salve a configuração. Em seguida, `Reboot` o dispositivo, caso contrário a configuração não terá efeito.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/LoRaSettingg.png" alt="pir" width={600} height="auto" /></p>

**Lista de Regiões**

|**Código da Região**|**Descrição**|**Faixa de Frequência (MHz)**|**Duty Cycle (%)**|**Limite de Potência (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Não definido|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|União Europeia 868MHz|869.4 - 869.65|10|27|

Consulte [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para uma lista mais abrangente.

:::info
**EU_868** precisa obedecer a uma limitação de duty cycle de 10% por hora, calculada a cada minuto em uma base contínua de 1 hora. Seu dispositivo irá parar de transmitir se você atingir esse limite, até que seja permitido novamente.
:::

Agora que você definiu a região LoRa no seu dispositivo, pode continuar configurando quaisquer [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) para atender às suas necessidades.

- **Passo2 Enviar Advert**

Clique em "send advert" para permitir que outros dispositivos Meshcore vejam este repetidor. Em seguida, o repetidor poderá ser visto na lista de dispositivos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertSending.png" alt="pir" width={600} height="auto" /></p>

Após a configuração de inicialização, clique 

- **Passo3(Opcional) Login de Administrador**

A senha padrão de administrador de um repetidor é `password`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={600} height="auto" /></p>

Após fazer login, você pode ver a página de configuração. Agora você pode ajustar a configuração do repetidor.

Se você quiser mostrar a posição do repetidor, pode ativar o GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/GPSS.jpg" alt="pir" width={300} height="auto" /></p>

Além disso, você pode ajustar o intervalo de transmissão de advert. O intervalo de `auto zero hop advert` é de 60-240 minutos. O intervalo de `auto flood advert` é de 3-168 horas. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertInterval.jpg" alt="pir" width={300} height="auto" /></p>

### Definir Caminho

Antes de adicionar o repetidor à sua rota, talvez seja necessário usar o repetidor para enviar advert primeiro. O repetidor enviará automaticamente em intervalos regulares. Esse intervalo pode ser de várias horas (padrão 3 horas). Portanto, você precisa enviar advert manualmente, caso contrário terá que esperar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SendAdvert.png" alt="pir" width={600} height="auto" /></p>

Você pode definir manualmente o caminho de envio da mensagem. Conecte seu dispositivo Bluetooth companion ao app do seu telefone. Abra uma janela de mensagem privada. Então você pode escolher o repetidor descoberto para formar o seu caminho.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SetPath1.png" alt="pir" width={600} height="auto" /></p>

Após definir o caminho, o método de transmissão será alterado para "n hop". Por exemplo, se você adicionar 1 repetidor na sua rota, ele mudará para 1 hop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/1Hop.png" alt="pir" width={300} height="auto" /></p>

## FAQ

### Loop de Inicialização

- Motivo 

Isso geralmente é causado por falha na gravação do firmware. Ao gravar o firmware, mantenha uma conexão estável. 

- Solução de problemas

[Clique aqui](https://wiki.seeedstudio.com/pt-br/get_started_with_meshcore_solar_node/#flash-erase) para regravar o firmware.

### Dispositivo brickado

#### Descrição

O dispositivo não responde, nenhum LED, não consegue parear com seu App.

**1) O dispositivo ainda consegue entrar em modo DFU, então tente gravar o bootloader**.

#### Gravar o Bootloader

- [Download do Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

:::danger note
Quando você estiver gravando o bootloader, certifique-se de que a conexão do cabo esteja estável e **NÃO** a desconecte durante o processo de gravação.
:::

**Passo1: Instalação do Adafruit-nrfutil**

**Pré-requisitos**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

<Tabs>
<TabItem value="pypi" label="Instalando a partir do PyPI">

Este é o método recomendado, para instalar a versão mais recente:

```
pip3 install --user adafruit-nrfutil
```

</TabItem>

<TabItem value="sou" label="Instalando a partir do código-fonte">

Use este método se você tiver problemas ao instalar com o PyPi ou quiser modificar a ferramenta. Primeiro clone este repositório e entre na pasta dele.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Nota: os comandos a seguir usam `python3`, porém se você estiver no Windows, talvez precise mudar para `python`, pois a instalação do python 3.x no Windows ainda usa o nome python.exe

Para instalar no espaço do usuário no seu diretório home:

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

Para gerar um executável binário autônomo da ferramenta (Windows e MacOS), execute estes comandos:

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

**Passo2: Verifique o número da sua porta**

Conecte seu dispositivo ao PC e verifique o número da porta.

Exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**Passo3: Gravar o bootloader**

No terminal ou prompt de comando, navegue até o diretório onde você baixou o pacote zip do bootloader e execute o seguinte comando, substituindo pela porta correta do seu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```

- **Para outros**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

Quando você tiver concluído as etapas acima, poderá então [gravar o firmware da aplicação](https://wiki.seeedstudio.com/pt-br/get_started_with_meshcore_solar_node/#flash-erase).

### Qualidade do Sinal

- **SNR** reflete a qualidade do link de comunicação. Um dispositivo normal geralmente opera acima de -7 dB. Um dispositivo com SNR menor que -10 dB indica desempenho ruim.

- **RSSI** é determinado em conjunto pelo dispositivo e seu ambiente ao redor. Um dispositivo normal geralmente opera acima de -110 dBm. Um dispositivo com RSSI menor que -115 dBm é considerado como tendo desempenho ruim.

      Para obter o melhor efeito de sinal, use o dispositivo em uma área aberta, desobstruída e com interferência mínima.

### Corrente de Carga

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>

A corrente máxima de carga do Xiao nRF-52840 Plus é 200 mA. O chip de gerenciamento de carga CN3165 é 0,99 A. Portanto, a corrente máxima de carga é 1 A.

## Recursos
- [Tabela de Cálculo da Vida Útil da Bateria do Solar Node](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Solar%20Node%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
