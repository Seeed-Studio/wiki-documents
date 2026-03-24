---
description: Comece a usar o SenseCAP Card Tracker T1000-E para Meshtastic
title: Introdução ao T1000-E Tracker
keywords:
  - Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecap_t1000_e
sku: 114993369
sidebar_position: 2
last_update:
  date: 3/11/2026
  author: Michelle Huang
createdAt: '2024-07-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/
---
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

:::danger note
Quando o dispositivo estiver nos estados abaixo, não o reinicie ou desligue manualmente. Caso contrário, o dispositivo pode ficar inutilizável.
1. Não tiver concluído o processo de transmissão de mensagem
2. Estiver sendo configurado
:::
## Tutorial em Vídeo

### Parte 1: Configuração após o Desembalamento

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/9sCHpWPSPcw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Parte 2: Indicadores de Status

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/8p34S_9DDEQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Parte 3: Gravar Novo Firmware

:::caution note
Antes de gravar o firmware, certifique-se de que você comprou o `T1000-E for Meshtastic`. Não grave o firmware em outro modelo de tracker que não ofereça suporte ao Meshtastic. Por favor, `não use NRF-OTA` para atualizar o firmware, isso pode fazer com que o dispositivo fique completamente inutilizável.
:::

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/li6DTOeXK3M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Parte 4: Instruções de Solução de Problemas

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/iWahTuXwYnU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Introdução

Baixe o App `Meshtastic`:

- [IOS App](https://meshtastic.org/docs/category/apple-apps/)
- [Android App](https://meshtastic.org/docs/category/android-app/)

### Ligar o dispositivo

Pressione uma vez para ligar o dispositivo, haverá uma melodia ascendente e o LED permanecerá aceso por cerca de 1s.

:::tip
Se o dispositivo não responder quando você pressionar o botão, carregue-o primeiro. Não use carregador de carga rápida.
:::

### Conectar via App

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

- Selecione o dispositivo de destino no painel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Insira o código (o código padrão é `123456`) e clique em `OK` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- Clique em `+` e escolha o dispositivo de destino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- Insira o código (o código padrão é `123456`) e clique em `OK` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Conectar via Website

Se você quiser enviar mensagens de texto e se comunicar com outros nós pelo website, agora você pode conectar o dispositivo ao [Website Meshtastic](https://client.meshtastic.org/messages/broadcast/0). 

  Passo 1: Abra o Website

[Clique aqui](https://client.meshtastic.org/messages/broadcast/0) para ir para o website. 
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

    Seu dispositivo será exibido na lista. Clique para conectar. Se a conexão for bem-sucedida, você poderá ver o status do dispositivo diretamente no website.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### Configurar o LoRa

Para começar a se comunicar pela malha, você deve definir sua região. Essa configuração controla qual faixa de frequência seu dispositivo usa e deve ser definida de acordo com sua localização regional.

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
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
**EU_868** deve obedecer a uma limitação de ciclo de trabalho horário de 10%, calculada a cada minuto com base em uma janela contínua de 1 hora. Seu dispositivo parará de transmitir se você atingir esse limite, até que seja permitido novamente.
:::

Agora que você definiu a região LoRa no seu dispositivo, pode continuar configurando quaisquer [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) para atender às suas necessidades.

### Configurar Sensor

|Sensor|Descrição|
|-|-|
|Temperature|✅|
|Light|Atualmente não suportado pelo App|
|Accelerometer|Em breve|

**Configuração do Sensor de Temperatura**

<Tabs>
<TabItem value="ios" label="IOS App">

Vá para `Settings` -> `Telemetry(Sensors)` -> Ative os sensores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-ios.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

Vá para `Settings` -> `Telemetry(Sensors)` -> Ative os sensores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

**Configuração do Buzzer e LED**

||Tipo|Pino de Saída|
|-|-|-|
|Buzzer|Buzzer PWM|25|
|LED|-|24|

<Tabs>
<TabItem value="ios" label="IOS App">

Vá para `Settings` -> `External Notification` -> Ative `GPIO` -> Defina `Output Pin GPIO`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-en.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

Vá para `Settings` -> `External Notification` -> Ative `GPIO` -> Defina `Output Pin GPIO`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

Consulte [External Notification Config](https://meshtastic.org/docs/configuration/module/external-notification/) para mais detalhes.

:::tip
Depois de atualizar a configuração do dispositivo, ele será reiniciado, o que pode levar algum tempo.
:::

### Configurar GPS

Ative o GPS. Você pode ajustar o intervalo de atualização e o intervalo de broadcast para obter informações de localização mais atualizadas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

Para IOS, ative o `Accurate Location`. Caso contrário, o posicionamento pode ficar impreciso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

## Gravar Firmware

### Verificar a Versão do Firmware

Vá para `Settings` -> `Firmware Updates` e verifique a versão atual do firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/check-version.png" alt="pir" width={400} height="auto" /></p>

### <div class="danger">⚠️NÃO GRAVE O SEGUINTE FIRMWARE</div>

:::danger
NÃO GRAVE OUTRO FIRMWARE QUE NÃO SEJA O FIRMWARE T1000-E, ISSO PODE FAZER COM QUE O DISPOSITIVO TRAVE.
:::

O seguinte firmware deixará seu dispositivo inutilizável：

- nrf52_promicro_diy_tcxo<br/>
- nrf52_promicro_diy_xtal<br/>
- Dongle_nRF52840-pca10059-v1<br/>
- feather_diy<br/>
- TWC_mesh_v4<br/>
- wio-sdk-wm1110<br/>
- wio-tracker-wm1110<br/>
- xiao_ble

### Gravar o Firmware do Aplicativo

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Flash%20Firmware.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
:::caution note
Antes de gravar o firmware, certifique-se de que você comprou o `T1000-E for Meshtastic`. Não grave o firmware em outro modelo de tracker que não ofereça suporte ao Meshtastic. Por favor, `não use NRF-OTA` para atualizar o firmware, isso pode fazer com que o dispositivo fique completamente inutilizável.
:::
#### Passo 1: Entrar no modo DFU

<Tabs>
<TabItem value="method1" label="Method 1">

Visite o [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Conecte o dispositivo ao seu PC, selecione o dispositivo como `Seeed Card Tracker T1000-E` e escolha o firmware mais recente, depois clique em `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-2.png" alt="pir" width={800} height="auto" /></p>

Clique em `Enter DFU Mode`, aparecerá uma porta serial chamada `T1000-E xxx`, clique e conecte-a, o LED verde ficará aceso continuamente e deverá aparecer um driver chamado `T1000-E`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-serial.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="method2" label="Método 2">

Conecte o cabo USB ao seu PC, mantenha o botão do dispositivo pressionado e então conecte o cabo de carregamento **rapidamente** duas vezes, o LED verde ficará aceso continuamente e deverá aparecer um driver chamado `T1000-E`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={800} height="auto" /></p>

#### Etapa 2: Apagar Flash

:::caution note
Antes de gravar o firmware, grave primeiro o firmware de apagamento!
:::

Clique no símbolo de `trash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase1.png" alt="pir" width={800} height="auto" /></p>

Baixe o firmware de apagamento e copie-o para o driver.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase-uf2.png" alt="pir" width={800} height="auto" /></p>

Esse processo pode levar algum tempo, aguarde até que a unidade desapareça e então abra um monitor serial para concluir o processo de apagamento.

#### Etapa 3: Gravar Firmware

Selecione o firmware mais recente e baixe o arquivo `UF2`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/down-uf2.png" alt="pir" width={800} height="auto" /></p>

Copie o arquivo UF2 para a unidade DFU. O firmware deverá ser gravado após o arquivo ser copiado e o dispositivo reiniciar.

## FAQ

### Como verificar o nome do dispositivo

 Visite o [Meshtastic Web Flasher](https://flasher.meshtastic.org/).<br/>

 Clique em `Open Serial Monitor`, conecte o dispositivo ao seu PC, verifique o log serial, palavra‑chave `using nodenum`.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name3.png" alt="pir" width={800} height="auto" /></p>

### Como reiniciar o dispositivo

 Pressione e segure o botão e então conecte o cabo de carregamento.

## Solução de problemas

### Dispositivo nunca liga

- Carregue o dispositivo por 1~2 horas

- Desconecte o cabo USB, então mantenha o botão pressionado e conecte o cabo USB novamente enquanto continua segurando o botão por 5 segundos.

- Troque o cabo de carregamento

- Às vezes parece que está desligado, mas na verdade é porque o LED e o buzzer não foram ativados. Verifique os seguintes parâmetros: 

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/LEDLightEnable.png" alt="pir" width={800} height="auto" /></p>

 - Se ainda não funcionar, pressione e segure o botão do dispositivo e então conecte o cabo de carregamento, veja se um disco aparece no seu PC. Se aparecer, [clique aqui](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#device-bricked) para reinstalar o bootloader

### Dispositivo preso em loop de inicialização

**Descrição:**

O dispositivo irá reiniciar repetidamente, e a porta serial irá conectar e desconectar repetidamente.

**Solução:**

- Etapa 1: Tente entrar no modo DFU manualmente: pressione e segure o botão do dispositivo e então conecte o cabo de carregamento **rapidamente** duas vezes, o LED verde ficará continuamente aceso.

:::note
Para entrar no modo DFU com sucesso, você precisa realizar essa operação rapidamente. Talvez seja necessário tentar várias vezes.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- Etapa 2: [Apagar Flash](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#step-2-flash-erase).

- Etapa 3: [Gravar Firmware](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#step-3-flash-firmware).

### Dispositivo brickado

#### Descrição

O dispositivo não responde, nenhum LED, não é possível parear com o seu App.

**1) O dispositivo ainda consegue entrar no modo DFU, então tente gravar o bootloader**.

#### Gravar o Bootloader

- [Download do bootloader](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash%20bootloader.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::danger note
Quando estiver gravando o bootloader, certifique-se de que a conexão do cabo esteja estável e **NÃO** o desconecte durante o processo de gravação.
:::

**Etapa 1: Instalação do Adafruit-nrfutil**

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

Use este método se você tiver problemas ao instalar com o PyPi ou quiser modificar a ferramenta. Primeiro faça o clone deste repositório e entre na pasta dele.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Nota: os comandos a seguir usam `python3`, porém se você estiver no Windows, talvez precise mudar para `python`, já que a instalação do python 3.x no Windows ainda usa o nome python.exe

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

**Etapa 2: Verifique o número da sua porta**

Conecte seu dispositivo ao PC e verifique o número da porta.

Exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**Etapa 3: Grave o bootloader**

No terminal ou prompt de comando, navegue até o diretório onde você baixou o pacote zip do bootloader e execute o seguinte comando, substituindo pela porta correta do seu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```

- **Para outros**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

Quando você tiver concluído as etapas acima, poderá seguir esta [etapa](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#flash-the-application-firmware) para gravar o firmware da aplicação.

**2) O dispositivo não consegue entrar no modo DFU, mas a porta serial pode ser detectada**.

- Abra uma ferramenta de porta serial

- Defina a taxa de transmissão para `1200`.

- Conecte o dispositivo.
   A luz piscará brevemente quando você conectá-lo. Continue tentando até que a luz permaneça acesa, o que significa que o dispositivo voltou ao modo DFU, então [grave o bootloader](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#flash-the-bootloader) -> [apague o flash](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#step-2-flash-erase) -> [grave o firmware](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#step-3-flash-firmware).

<div class="video-container">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/reset%20via%20serial%20tool.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**3) O dispositivo não consegue entrar no modo DFU e nenhuma porta serial é exibida**

- pressione e segure o botão do dispositivo e então conecte o cabo de carregamento. Depois que um disco aparecer no seu PC, você poderá ver a porta serial.

- Se ainda não funcionar, desconecte o cabo de carregamento e deixe o dispositivo por alguns dias até que a bateria esteja completamente descarregada, então conecte o cabo de carregamento e tente parear novamente.

**4) Se nenhuma das etapas acima funcionar, entre em contato com o suporte técnico: support@sensecapmx.com**

### Falha ao gravar o firmware

- **Nenhum dado recebido na porta serial**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 Verifique se o dispositivo está no modo DFU, a luz verde ficará continuamente acesa quando o dispositivo estiver no modo DFU.

- **Não é possível abrir a porta serial**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 Verifique se a porta está correta ou tente outra porta.

 ### Dispositivo desliga automaticamente

 #### Descrição

 - Após ligar o dispositivo, ele irá desligar ou reiniciar automaticamente depois de um tempo. 
 - O log da porta serial executa por um tempo e depois para.

 Isso pode ser causado por reiniciar ou desligar o dispositivo manualmente e à força quando ele está nos seguintes estados: sem concluir o processo de transmissão de mensagens, em configuração......

 #### Solução de problemas

 [Clique aqui](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#step-2-flash-erase) para executar um flash-erase. 

 ### Restauração de fábrica
Se você quiser restaurar as configurações padrão, pode fazer a restauração de fábrica. Existem dois métodos para você realizar a restauração de fábrica.

- [Clique aqui](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#step-2-flash-erase) para apagar o dispositivo com flash erase. Em seguida, regrave o firmware mais recente.

- Clique no botão `Factory Reset` no App. O dispositivo irá reiniciar automaticamente com a configuração de fábrica. 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### Qualidade do sinal

  - **SNR** reflete a qualidade do link de comunicação. Um dispositivo normal geralmente opera acima de -7 dB. Um dispositivo com SNR abaixo de -10 dB indica desempenho ruim.

  - **RSSI** é determinado em conjunto pelo dispositivo e pelo ambiente ao seu redor. Um dispositivo normal geralmente opera acima de -110 dBm. Um dispositivo com RSSI abaixo de -115 dBm é considerado como tendo desempenho ruim. 

      Para obter o melhor efeito de sinal, use o dispositivo em uma área aberta, desobstruída e com interferência mínima.

### Definição do Pogo Pin

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/PogoPin4.png" alt="pir" width={900} height="auto" /></p>

## Recursos

- [Meshtastic Doc](https://meshtastic.org/docs/introduction/)
- [SenseCAP T1000 Tracker Datasheet](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker_T1000_Datasheet.pdf)
- [UN38.3](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/UN38.3.zip)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

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
