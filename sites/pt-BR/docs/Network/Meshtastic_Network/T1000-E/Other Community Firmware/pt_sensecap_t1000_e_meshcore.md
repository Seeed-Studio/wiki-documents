---
description: Comece a usar o SenseCAP Card Tracker T1000-E para Meshcore. Guia para instalação do dispositivo, gravação de firmware e conexão do dispositivo.
title: Introdução ao MeshCore no SenseCAP T1000-E
keywords:
  - Tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/DeviceSelection.webp
slug: /sensecap_t1000_e_meshcore
sku: 114993369
sidebar_position: 3
last_update:
  date: 3/11/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e_meshcore/
---



## Gravação de Firmware

### Método 1 via Web Flasher

Conecte seu dispositivo ao computador com um cabo USB. 

:::warning
Mantenha o cabo USB conectado durante a transmissão de dados, caso contrário o dispositivo pode ser danificado.
:::

Acesse o [Meshcore Web Flasher](https://flasher.meshcore.co.uk/). 

Escolha `Seeed Studio SenseCAP T1000-E` no grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

Escolha `Companion Bluetooth`. Dispositivos gravados com o firmware Companion Bluetooth podem ser conectados ao APP. Se você quiser gravar outro firmware, por favor [clique aqui](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md) para ver o tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Apagar Flash

Clique em `Enter DFU Mode`, escolha a porta serial chamada "nRF xxx" ou "TinyUSB". Em seguida, clique em `Erase Flash` e escolha a porta serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/SerialSelection.png" alt="pir" width={800} height="auto" /></p>

Se você clicou em `Erase Flash` mas não houve resposta, clique em `Enter DFU` novamente e depois clique em `Erase Flash` para garantir que você entrou no modo DFU com sucesso.

Se você vir "Flashing erase firmware:100%", o dispositivo foi apagado com sucesso.

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### Gravar Firmware

Clique em `Enter DFU Mode`, escolha a porta serial chamada "nRF xxx" ou "TinyUSB". Em seguida, clique em `Flash` e escolha a porta serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/SerialSelection.png" alt="pir" width={800} height="auto" /></p>

Se você clicou em `Flash` mas não houve resposta, clique em `Enter DFU` novamente e depois clique em `Flash` para garantir que você entrou no modo DFU com sucesso.

Quando a barra de progresso estiver completamente preenchida, isso indica que a gravação foi concluída. Em seguida, o dispositivo será reiniciado automaticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### Método 2 Arrastar e Soltar

Conecte seu dispositivo ao computador com um cabo USB.

:::warning
Mantenha o cabo USB conectado durante a transmissão de dados, caso contrário o dispositivo pode ser danificado.
:::

Acesse o [Meshcore Web Flasher](https://flasher.meshcore.co.uk/). 

Escolha `Seeed Studio Wio Tracker T1000-E` no grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

Escolha `Companion Bluetooth`. Dispositivos gravados com o firmware Companion Bluetooth podem ser conectados ao APP. Se você quiser gravar outro firmware, por favor [clique aqui](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md) para ver o tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Apagar Flash

Baixe o arquivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

Entre no modo DFU manualmente: mantenha o botão do dispositivo pressionado e então conecte o cabo de carregamento **rapidamente** duas vezes; o LED verde ficará aceso de forma contínua.

:::warning
Para entrar no modo DFU com sucesso, você precisa realizar esta operação rapidamente. Pode ser necessário tentar várias vezes.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

Você verá um disco chamado `T1000-E` aparecer após 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/T1000-EDriver.png" alt="pir" width={800} height="auto" /></p>

Arraste o arquivo UF2 baixado para o disco que apareceu.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/EraseDrag.png" alt="pir" width={800} height="auto" /></p>

O disco desaparecerá após o firmware ser gravado com sucesso. Neste momento não há firmware no dispositivo, portanto o dispositivo `NÃO` será reiniciado automaticamente.

#### Gravar Firmware

Escolha a versão mais recente do firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/VersionSelection.png" alt="pir" width={800} height="auto" /></p>

Baixe o arquivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FirmwareUF2.png" alt="pir" width={800} height="auto" /></p>

Tente entrar no modo DFU manualmente: mantenha o botão do dispositivo pressionado e então conecte o cabo de carregamento **rapidamente** duas vezes; o LED verde ficará aceso de forma contínua.

:::warning
Para entrar no modo DFU com sucesso, você precisa realizar esta operação rapidamente. Pode ser necessário tentar várias vezes.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

Você verá um disco chamado `T1000-E` aparecer após 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/T1000-EDriver.png" alt="pir" width={800} height="auto" /></p>

Arraste o arquivo UF2 baixado para o disco que apareceu.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FirmwareDr.png" alt="pir" width={800} height="auto" /></p>

O disco desaparecerá após o firmware ser gravado com sucesso. Neste momento não há firmware no dispositivo, portanto o dispositivo será reiniciado automaticamente.

## Configuração

### Ligar o dispositivo

Pressione o botão para ligá-lo. O LED acenderá e haverá uma melodia descendente.

### Desligar o dispositivo

Pressione o botão por 3 s para desligá-lo. O LED apagará e haverá uma melodia de desligamento.

:::tip
Se o dispositivo não responder quando você pressionar o botão, carregue-o primeiro. Não use carregador de carga rápida.
:::

### Obter o APP

Baixe pela Google Store ou Apple Store. Ou [clique aqui](https://meshcore.co.uk/apps.html) para obter o APP Meshcore.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

### Conectar via App

Clique em `Connect` e escolha o dispositivo de destino. O ID de dispositivo padrão é `Meshcore-MAC Address`. O endereço MAC pode ser visto na parte de trás do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

Insira o código PIN padrão `123456` e então clique em `Pair` para conectar o dispositivo.

:::tip
Se a conexão falhar, abra a lista de Bluetooth do seu telefone e `forget` ou `Unpair` o dispositivo. Em seguida, tente conectar novamente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### Conectar via interface web (BLE)

1. Abra o [MeshCore Web App](https://app.meshcore.nz/) e clique no ícone **Settings**.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue1.png" alt="pir" width={600} height="auto" /></p>

2. Selecione a aba **BLE** e clique em **Scan Now**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue2.png" alt="pir" width={600} height="auto" /></p>

3. Na janela pop-up de Bluetooth do sistema, selecione seu dispositivo (por exemplo, Meshcore-xxxxxx) e clique em **Pair**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue3.png" alt="pir" width={600} height="auto" /></p>

4. Quando solicitado, insira a chave de acesso Bluetooth padrão `123456` e clique em **OK**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue4.png" alt="pir" width={600} height="auto" /></p>

5. Aguarde até que o status mude para conectado e seu nó apareça na interface do MeshCore.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue5.png" alt="pir" width={600} height="auto" /></p>

### Configurar o LoRa

Para começar a se comunicar pela malha, você deve definir sua região. Esta configuração controla qual faixa de frequência seu dispositivo usa e deve ser ajustada de acordo com sua localização regional.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

Em seguida, reinicie o dispositivo, caso contrário a configuração não terá efeito.

**Lista de Regiões**

|**Código da Região**|**Descrição**|**Faixa de Frequência (MHz)**|**Ciclo de Trabalho (%)**|**Limite de Potência (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Não definido|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|União Europeia 868 MHz|869.4 - 869.65|10|27|

Agora que você definiu a região LoRa no seu dispositivo, pode continuar configurando qualquer [parâmetro LoRa](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-general) para atender às suas necessidades.

### Configurar GPS

Se você quiser usar o GPS, ative-o. 

Você pode ir em `Position Settings` no APP para ativar o GPS. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/GPSConfig.png" alt="pir" width={300} height="auto" /></p>

### Botão

|Ação do botão|Descrição|
|--|--|
|Pressione por 3s|Ligar/desligar|
|Clique duplo|transmitir anúncio|
|Clique triplo|Interruptor do buzzer|
|Clique quádruplo|Interruptor do GPS|

## Transmissão de mensagens

Se você tiver dois dispositivos compatíveis e não houver muitos usuários MeshCore perto de você, grave o firmware BLE Companion em ambos para que você possa usar seus dispositivos para se comunicar com amigos e familiares próximos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/MeshcoreFramework.png" alt="pir" width={900} height="auto" /></p>

### Anúncio

MeshCore permite que você transmita manualmente seu nome, posição e chave pública de criptografia, que também é assinada para evitar falsificação. Quando você clica no botão de anúncio, ele transmite esses dados via LoRa. MeshCore chama isso de Advert. Há duas maneiras de anunciar, "zero hop" e "flood".

- **Zero hop** significa que seu anúncio é transmitido para qualquer pessoa que possa ouvi-lo, e é só isso.
- **Flooded** significa que ele é transmitido e depois repetido por todos os repetidores que o ouvirem.

Você pode enviar anúncios no APP. Você também pode enviar anúncios diretamente na página de anúncio do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/Advert.png" alt="pir" width={300} height="auto" /></p>

### Mensagem pública

Depois de configurar o LoRa, você pode enviar mensagens no canal primário. Todas as pessoas próximas na mesma faixa de frequência irão ouvi-las.


### Mensagem privada

Os dois dispositivos só estabelecem uma conexão quando ambos tiverem recebido o anúncio um do outro.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## FAQ

### Como reiniciar o dispositivo

 Pressione e segure o botão e, em seguida, conecte o cabo de carregamento.

## Solução de problemas

### Dispositivo nunca liga

- Carregue o dispositivo por 1~2 horas

- Troque o cabo de carregamento

 - Se ainda não funcionar, pressione e segure o botão do dispositivo e, em seguida, conecte o cabo de carregamento, veja se um disco aparece no seu PC. Se sim, [clique aqui](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e_meshcore/#flash-the-bootloader) para reinstalar o bootloader.

### Dispositivo preso em loop de inicialização

**Descrição:**

O dispositivo irá reiniciar repetidamente, e a porta serial conecta e desconecta repetidamente.

**Solução:**

- Etapa 1: Tente entrar no modo DFU manualmente: pressione e segure o botão do dispositivo e **rapidamente** conecte o cabo de carregamento duas vezes, o LED verde ficará aceso continuamente.

:::note
Para entrar com sucesso no modo DFU, você precisa realizar esta operação rapidamente. Talvez seja necessário tentar várias vezes.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- Etapa 2: Apagar a Flash

- Etapa 3: Gravar o firmware

### Dispositivo brickado

#### Descrição

O dispositivo não responde, nenhum LED, não é possível parear com o seu App.

**1) O dispositivo ainda consegue entrar no modo DFU, então tente gravar o bootloader**.

#### Gravar o bootloader

- [Download do bootloader](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash%20bootloader.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::danger note
Quando você estiver gravando o bootloader, certifique-se de que a conexão do cabo esteja estável e **NÃO** o desconecte durante o processo de gravação.
:::

**Etapa 1: Instalação do Adafruit-nrfutil**

Para usuários Windows, pressione a tecla "Win" e a tecla "r", depois digite "cmd" na janela pop-up e clique em "Enter". Isso abrirá a linha de comando. 

Para usuários MAC, pressione a tecla "Command" e a tecla "Space", assim você pode abrir o Spotlight. Em seguida, digite "termial" e clique em "Return". Isso abrirá a linha de comando. 

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

Então "Python xxx" e "pip xxx" devem aparecer. Se não aparecerem, tente instalar o python novamente.

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

Use este método se você tiver problemas para instalar com o PyPi ou quiser modificar a ferramenta. Primeiro clone este repositório e entre na pasta dele.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Observação: os comandos a seguir usam `python3`, porém, se você estiver no Windows, talvez precise alterá-lo para `python`, já que a instalação do python 3.x no Windows ainda usa o nome python.exe

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

Para usuários Windows, por exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

Para usuários Mac, por exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**Etapa 3: Gravar o bootloader**

No terminal ou prompt de comando, navegue até o diretório onde você baixou o pacote zip do bootloader e execute o seguinte comando, substituindo a porta correta do seu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```
Por favor, altere COMXX para o número da sua porta COM. Por exemplo, se o seu dispositivo estiver na com6, altere o comando para:

`adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 Alguns dispositivos irão mudar o número da porta após você inserir este comando. Portanto, se a instalação falhar, verifique o número da porta novamente.

- **Para outros**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

Quando você tiver concluído as etapas acima, então [clique aqui](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e_meshcore/#firmware-flashing) para gravar o firmware do aplicativo.

**2) O dispositivo não consegue entrar no modo DFU, mas a porta serial pode ser detectada**.

- Abra uma ferramenta de porta serial

- Defina a taxa de transmissão para `1200`.

- Conecte o dispositivo.
   A luz piscará brevemente quando você conectá-lo. Continue tentando até que a luz permaneça acesa, o que significa que o dispositivo pode voltar ao modo DFU, então grave o [bootloader](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e_meshcore/#flash-the-bootloader)-> [Apagar flash](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e_meshcore/#flash-erase) -> [gravar o firmware](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e_meshcore/#flash-firmware)

**3) O dispositivo não consegue entrar no modo DFU e nenhuma porta serial é exibida**

- pressione e segure o botão do dispositivo e, em seguida, conecte o cabo de carregamento. Depois que um disco aparecer no seu PC, você poderá ver a porta serial.

- Se ainda não funcionar, desconecte o cabo de carregamento e deixe o dispositivo por alguns dias até que a bateria esteja completamente descarregada, depois conecte o cabo de carregamento e tente pareá-lo novamente.

**4) Se nenhuma das etapas acima funcionar, entre em contato com o suporte técnico: support@sensecapmx.com**

### Falha na gravação do firmware

- **Nenhum dado recebido na porta serial**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 Verifique se o dispositivo está no modo DFU, a luz verde ficará acesa continuamente quando o dispositivo estiver no modo DFU.

- **Não é possível abrir a porta serial**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 Verifique se a porta está correta ou tente outra porta.

 ### Dispositivo desliga automaticamente

 #### Descrição

 - Após o dispositivo ser ligado, ele será desligado ou reiniciado automaticamente após um tempo. 
 - O log da porta serial executa por um tempo e depois para.

 Isso pode ser causado por reiniciar ou desligar o dispositivo manualmente e à força quando o dispositivo está nos seguintes estados: sem concluir o processo de transmissão de mensagens, em configuração......

 #### Solução de problemas

Execute um [flash-erase](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e_meshcore/#flash-erase). 

 ### Restauração de fábrica
Se você quiser restaurar as configurações padrão, pode fazer a restauração de fábrica. Há dois métodos para você fazer a restauração de fábrica.

- Faça o [Flash erase](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e_meshcore/#flash-erase) do dispositivo. Em seguida, regrave o firmware mais recente.

- Clique no botão `Factory Reset` no App. O dispositivo será reiniciado automaticamente com a configuração de fábrica. 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/Reset.png" alt="pir" width={400} height="auto" /></p>

### Qualidade do sinal

  - **SNR** reflete a qualidade do link de comunicação. Um dispositivo normal geralmente opera acima de -7 dB. Um dispositivo com SNR abaixo de -10 dB indica desempenho ruim.

  - **RSSI** é determinado em conjunto pelo dispositivo e pelo ambiente ao seu redor. Um dispositivo normal geralmente opera acima de -110 dBm. Um dispositivo com RSSI abaixo de -115 dBm é considerado como tendo desempenho ruim. 

      Para obter o melhor efeito de sinal, use o dispositivo em uma área aberta, desobstruída e com interferência mínima.

### Definição do Pogo Pin

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/PogoPin4.png" alt="pir" width={900} height="auto" /></p>

## Recursos

- [SenseCAP T1000 Tracker Datasheet](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker_T1000_Datasheet.pdf)
- [T1000-E for Meshtastic Consumption Test and Battery Life Calculation](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/T1000-E%20for%20Meshtastic%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
- [UN38.3](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/UN38.3.zip)

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
