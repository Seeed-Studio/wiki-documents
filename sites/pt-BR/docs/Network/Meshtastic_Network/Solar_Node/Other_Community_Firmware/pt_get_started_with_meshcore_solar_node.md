---
description: Comece a usar o SenseCAP Solar Node para Meshcore e LoRa. Guia para instalação do dispositivo, gravação de firmware e conexão do dispositivo.
title: Comece a usar o MeshCore no SenseCAP Solar Node
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
updatedAt: '2026-07-13'
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/image1_2.jpeg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshcore-p-6741.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

<br></br>

:::danger note
Quando o dispositivo estiver nos estados abaixo, não o reinicie ou desligue manualmente. Caso contrário, o dispositivo pode ser danificado permanentemente.
1. Não tiver concluído o processo de transmissão de mensagens
2. Estiver sendo configurado
:::

## Gravação de Firmware

### Método 1 via Web Flasher

Conecte seu dispositivo ao computador com um cabo USB. Certifique-se de que o cabo suporta transmissão de dados. 

:::warning
Mantenha o cabo USB conectado durante a transmissão de dados, caso contrário o dispositivo pode ser danificado.
:::

Acesse o [Meshcore Web Flasher](https://meshcore.io/flasher). 

Escolha `Seeed Studio SenseCAP Solar` no grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

Escolha `Repeater`. Se você quiser gravar outro firmware, por favor [clique aqui](https://docs.meshcore.io/) para ver o tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### Apagar Flash

Clique em `Enter DFU Mode`, escolha a porta serial chamada "Solar Node" ou "TinyUSB serial". Em seguida, clique em `Erase Flash` e escolha a porta serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseSelect.png" alt="pir" width={800} height="auto" /></p>

Se você clicou em `Erase Flash` mas não houve resposta, clique em `Enter DFU` novamente e depois clique em `Erase Flash` para garantir que entrou com sucesso no modo DFU.

Se você vir "Flashing erase firmware:100%", o dispositivo foi apagado com sucesso.

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### Gravar Firmware

Selecione a versão do firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

Clique em `Enter DFU Mode`, escolha a porta serial chamada "P1 Pro" ou "TinyUSB" serial. Em seguida, clique em `Flash` e escolha a porta serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

Se você clicou em `Flash` mas não houve resposta, clique em `Enter DFU` novamente e depois clique em `Flash` para garantir que entrou com sucesso no modo DFU.

Quando a barra de progresso estiver completamente preenchida, isso indica que a gravação do Flash foi concluída. Em seguida, o dispositivo será reiniciado automaticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### Método 2 Arrastar e Soltar

Conecte seu dispositivo ao computador com um cabo USB. Certifique-se de que o cabo suporta transmissão de dados. 

:::warning
Mantenha o cabo USB conectado durante a transmissão de dados, caso contrário o dispositivo pode ser danificado.
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

O disco desaparecerá após o firmware ser gravado com sucesso. Neste momento não há firmware no dispositivo, portanto o dispositivo `NOT` será reiniciado automaticamente.

#### Gravar Firmware

Escolha a versão mais recente do firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

Baixe o arquivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FlashFirmware.png" alt="pir" width={800} height="auto" /></p>

Clique duas vezes no botão RST para entrar manualmente no modo DFU. Você verá um disco chamado `Xiao-Boot` ou `Solar Node` aparecer após 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

Arraste o arquivo UF2 baixado para o disco que apareceu.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareDr.png" alt="pir" width={800} height="auto" /></p>

O disco desaparecerá após o firmware ser gravado com sucesso. Neste momento não há firmware no dispositivo, portanto o dispositivo NÃO será reiniciado automaticamente.

## Primeiros Passos

Antes da implantação formal, teste e configure o nó primeiro.

### Instalação

#### Montar o Dispositivo

:::danger note
Como o dispositivo será usado ao ar livre por longos períodos, evite instalar o painel em posição horizontal. Recomenda-se uma instalação inclinada ou diagonal para evitar acúmulo de água. Além disso, certifique-se de que todos os parafusos estejam bem apertados e a tampa esteja corretamente instalada. Para maior proteção contra água, você também pode considerar aplicar medidas extras de vedação.
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
A versão P1-Pro possui bateria e módulo GPS integrados; para a versão P1, o usuário precisa instalar a bateria e o módulo GPS manualmente, se necessário.
:::



- Etapa 1: Remova todos os parafusos e a tampa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- Etapa 2: Instale a bateria e o módulo GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- Etapa 3: Monte a carcaça.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
Certifique-se de que a carcaça esteja corretamente montada e que os parafusos estejam bem apertados para manter a integridade à prova d'água do dispositivo.
:::

#### (Opcional) Atualizar antena

- Você pode substituir a antena por uma de fibra de vidro assistindo a este vídeo.

Se você precisar de uma antena com ganho mais alto, recomendamos a antena [860-930MHz 3dBi fiberglass](https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-with-base-860-930MHz-3dBi-360mm-p-5315.html) e a antena [902-928MHz 5.8dBi fiberglass](https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html).

### Ligar o dispositivo

O dispositivo precisa ser ativado conectando o cabo USB. O LED azul Mesh acenderá por cerca de 3s, isso significa que o dispositivo foi ligado com sucesso. 

A luz LED azul mesh não acenderá até que ele envie o anúncio.

:::tip
Somente a partir da versão 1.14.1 o botão de energia foi habilitado. Pressione o dispositivo por `3s` para ligar/desligar o dispositivo. Você verá uma luz branca piscar rapidamente. Isso indica que o dispositivo está ligando com sucesso.
<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/blinkingonetime.mp4" scrolling="yes" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
:::


### Configuração

- **Etapa 1 Configuração inicial**

Quando o MeshCore é gravado em um dispositivo LoRa pela primeira vez, é necessário definir a frequência do dispositivo servidor para que ele utilize a frequência que é legal em seu país ou região.

[Clique aqui](https://config.meshcore.io/) para configurar o repetidor.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Altere a região LoRa e salve a configuração. Em seguida, `Reboot` o dispositivo, caso contrário a configuração não terá efeito.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/LoRaSettingg.png" alt="pir" width={600} height="auto" /></p>

**Lista de regiões**

|**Código da região**|**Descrição**|**Faixa de frequência (MHz)**|**Ciclo de trabalho (%)**|**Limite de potência (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Não definido|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|União Europeia 868MHz|869.4 - 869.65|10|27|

:::info
**EU_868** deve obedecer a uma limitação de ciclo de trabalho horário de 10%, calculada a cada minuto com base em uma janela móvel de 1 hora. Seu dispositivo irá parar de transmitir se você atingir esse limite, até que seja permitido novamente.
:::


- **Etapa 2 Enviar anúncio**

Clique em "send advert" para permitir que outros dispositivos Meshcore vejam este repetidor. Então o repetidor poderá ser visto na lista de dispositivos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertSending.png" alt="pir" width={600} height="auto" /></p>

Após a configuração de inicialização, clique 

- **Etapa 3 (Opcional) Login de administrador**

A senha padrão de administrador de um repetidor é `password`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={600} height="auto" /></p>

Após fazer login, você pode ver a página de configuração. Agora você pode ajustar a configuração do repetidor.

Se você quiser mostrar a posição do repetidor, pode habilitar o GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/GPSS.jpg" alt="pir" width={300} height="auto" /></p>

Além disso, você pode ajustar o intervalo de transmissão do anúncio. A faixa de intervalo de `auto zero hop advert` é de 60-240 minutos. A faixa de intervalo de `auto flood advert` é de 3-168 horas. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertInterval.jpg" alt="pir" width={300} height="auto" /></p>

### Definir caminho

Antes de adicionar o repetidor à sua rota, talvez você precise usar o repetidor para enviar o anúncio primeiro. O repetidor enviará anúncios automaticamente em intervalos regulares. Esse intervalo pode ser de várias horas (padrão 3 horas). Portanto, você precisa enviar o anúncio manualmente ou então terá que esperar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SendAdvert.png" alt="pir" width={600} height="auto" /></p>

Você pode definir manualmente o caminho de envio das mensagens. Conecte seu dispositivo Companion Bluetooth ao aplicativo do telefone. Abra uma janela de mensagem privada. Então você pode escolher o repetidor descoberto para formar o seu caminho.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SetPath1.png" alt="pir" width={600} height="auto" /></p>

Após definir o caminho, o método de transmissão será alterado para "n hop". Por exemplo, se você adicionar 1 repetidor na sua rota, ele mudará para 1 hop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/1Hop.png" alt="pir" width={300} height="auto" /></p>

## Verificar se o dispositivo funciona corretamente

Antes da verificação, confirme se você está usando apenas um dispositivo Solar Node ou se também possui outros dispositivos MeshCore Companion na sua configuração.

Para o modo Repetidor, o seguinte comportamento é esperado:

- Quando o dispositivo está conectado via USB, ele pode aparecer online e ser configurado.
- Após desconectar a alimentação USB, o dispositivo muda para o modo bateria e continua funcionando como repetidor.
- O LED azul piscando uma vez durante a transmissão é normal e indica atividade LoRa.
- Não se espera que o Solar Node Repeater se comporte como um dispositivo independente conectado ao telefone, a menos que seja usado junto com um dispositivo Companion.

Para verificar corretamente se o repetidor está funcionando, siga este procedimento de teste padrão:

1. Conecte o Solar Node via USB.
2. Abra a página de configuração do MeshCore: [https://config.meshcore.io/](https://config.meshcore.io/).
3. Clique em **Send Advert**.
4. Verifique a partir de outro dispositivo MeshCore, como um dispositivo Companion.
5. O Solar Node deve aparecer na lista de dispositivos.
6. No dispositivo Companion, abra o contato do Solar Node Repeater e use a função **Ping** para confirmar a comunicação.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-6.png" alt="Verify Solar Node repeater with Ping from another MeshCore device" width={700} height="auto" /></p>

:::note
O aplicativo móvel é usado principalmente com um dispositivo Companion, não diretamente com um Repetidor. O próprio repetidor não se comportará como um acessório de telefone conectado por Bluetooth normal.
:::

Se o comportamento do LED e o estado de conexão USB corresponderem à descrição acima, isso geralmente indica um comportamento normal do repetidor.

## FAQ

### Loop de inicialização

- Motivo 

Isso geralmente é causado por falha na gravação do firmware. Ao gravar o firmware, mantenha uma conexão estável. 

- Solução de problemas

[Clique aqui](https://wiki.seeedstudio.com/pt-br/get_started_with_meshcore_solar_node/#flash-erase) para regravar o firmware.

### Dispositivo brickado

#### Descrição

O dispositivo não responde, nenhum LED, não consegue parear com seu App.

**1) O dispositivo ainda consegue entrar no modo DFU, então tente gravar o bootloader**.

#### Gravar o Bootloader

- [Download do bootloader](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

:::danger note
Ao gravar o bootloader, certifique-se de que a conexão do cabo esteja estável e **NÃO** a desconecte durante o processo de gravação.
:::

**Etapa 1: Instalação do Adafruit-nrfutil**

Para usuários Windows, pressione a tecla "Win" e a tecla "r", depois digite "cmd" na janela pop-up e clique em "Enter". Isso pode abrir a linha de comando. 

Para usuários MAC, pressione a tecla "Command" e a tecla "Space", assim você pode abrir o Spotlight. Em seguida, digite "termial" e clique em "Return". Isso pode abrir a linha de comando. 

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

Então "Python xxx" e "pip xxx" devem aparecer. Se não aparecerem, tente instalar o Python novamente.

<Tabs>
<TabItem value="pypi" label="Instalando a partir do PyPI">

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

Para usuários Windows, talvez seja necessário adicionar o caminho manualmente. Copie o local de instalação mostrado na última etapa. Em seguida, adicione-o como a seguir:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>

<TabItem value="sou" label="Instalando a partir do código-fonte">

Use este método se você tiver problemas para instalar com o PyPi ou quiser modificar a ferramenta. Primeiro faça o clone deste repositório e entre na pasta dele.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Nota: os comandos a seguir usam `python3`, porém se você estiver no Windows, talvez precise alterá-lo para `python`, já que a instalação do python 3.x no Windows ainda usa o nome python.exe

Para instalar no espaço do usuário em seu diretório pessoal:

```
pip3 install -r requirements.txt
python3 setup.py install
```

Se você receber erros de permissão ao executar `pip3 install`, seu `pip3` é antigo ou está configurado para tentar instalar nos diretórios do sistema. Nesse caso, use a flag `--user`:

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

Se você quiser instalar em diretórios do sistema (geralmente não recomendado):

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

Para gerar um binário executável independente da ferramenta (Windows e MacOS), execute estes comandos:

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

**Passo 2: Verifique o número da sua porta**

Conecte seu dispositivo ao PC e verifique o número da porta.

Para usuário Windows, por exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

Para usuário Mac, por exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**Passo 3: Grave o bootloader**

No terminal ou prompt de comando, navegue até o diretório onde você baixou o pacote zip do bootloader e execute o seguinte comando, substituindo a porta correta para o seu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```
Por favor, altere COMXX para o número da sua porta COM. Por exemplo, se o seu dispositivo estiver na COM6, altere o comando para:

`adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COM6 -b 115200 --singlebank --touch 1200`

 Alguns dispositivos irão mudar o número da porta depois que você inserir este comando. Portanto, se a instalação falhar, verifique o número da porta novamente.


- **Para outros**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

Quando você tiver concluído as etapas acima, poderá então [gravar o firmware do aplicativo](https://wiki.seeedstudio.com/pt-br/get_started_with_meshcore_solar_node/#flash-erase).

### Qualidade do sinal

- **SNR** reflete a qualidade do link de comunicação. Um dispositivo normal geralmente opera acima de -7 dB. Dispositivo com SNR menor que -10 dB indica desempenho ruim.

- **RSSI** é determinado em conjunto pelo dispositivo e seu ambiente ao redor. Um dispositivo normal geralmente opera acima de -110 dBm. Dispositivo com RSSI menor que -115 dBm é considerado como tendo desempenho ruim.

      Para obter o melhor efeito de sinal, use o dispositivo em uma área aberta, desobstruída e com interferência mínima.

### Corrente de carregamento

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>

A corrente máxima de carregamento do Xiao nRF-52840 Plus é 200 mA. O chip de gerenciamento de carregamento CN3165 é 0,99 A. Portanto, a corrente máxima de carregamento é 1 A.

## Recurso
- [Tabela de cálculo da vida útil da bateria do Solar Node](https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/mesh_repeater_power_table_en1.xlsx)
