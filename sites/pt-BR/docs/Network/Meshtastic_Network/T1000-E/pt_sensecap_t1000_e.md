---
description: Introdução ao SenseCAP Card Tracker T1000-E para Meshtastic
title: Introdução ao T1000-E Tracker
keywords:
  - Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecap_t1000_e
sku: 114993369
sidebar_position: 2
last_update:
  date: 09/01/2026
  author: Advent Jiang
createdAt: '2024-07-24'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/
---
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

:::danger note
Quando o dispositivo estiver nos estados abaixo, não o reinicie nem o desligue manualmente. Caso contrário, o dispositivo pode ficar inutilizável.

1. Não tiver concluído o processo de transmissão de mensagem
2. Estiver sendo configurado
:::

## Tutorial em vídeo

### Parte 1: Configuração após o unboxing

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/9sCHpWPSPcw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Parte 2: Indicadores de status

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/8p34S_9DDEQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Parte 3: Gravar novo firmware

:::caution note
Antes de gravar o firmware, certifique-se de que você comprou o `T1000-E for Meshtastic`. Não grave o firmware em outro modelo de tracker que não ofereça suporte ao Meshtastic. Por favor, `não use NRF-OTA` para atualizar o firmware, isso pode fazer com que o dispositivo fique completamente inutilizável.
:::

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/li6DTOeXK3M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Parte 4: Instruções de solução de problemas

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/iWahTuXwYnU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Primeiros passos

Baixe o app `Meshtastic`:

- [IOS App](https://meshtastic.org/docs/category/apple-apps/)
- [Android App](https://meshtastic.org/docs/category/android-app/)

### Ligar o dispositivo

Pressione uma vez para ligar o dispositivo, haverá uma melodia ascendente e o LED permanecerá aceso por cerca de 1s.

:::tip
Se o dispositivo não responder quando você pressionar o botão, carregue-o primeiro. Não use carregador de carga rápida.
:::

### Conectar via app

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

- Selecione o dispositivo de destino no painel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/device_select123.jpeg" alt="pir" width={300} height="auto" /></p>

- Insira o código (o código padrão é `123456`) e clique em `OK` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/pairing_code123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- Clique em `+` e escolha o dispositivo de destino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-choose-new.png" alt="pir" width={600} height="auto" /></p>

- Insira o código (o código padrão é `123456`) e clique em `OK` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-click-ok-new.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Configurar o LoRa

Para começar a se comunicar pela malha, você deve definir sua região. Essa configuração controla qual faixa de frequência seu dispositivo usa e deve ser definida de acordo com sua localização regional.

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/configure_LoRa123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-region-new.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**Lista de regiões**

|**Código da região**|**Descrição**|**Faixa de frequência (MHz)**|**Ciclo de trabalho (%)**|**Limite de potência (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Não definido|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|União Europeia 868MHz|869.4 - 869.65|10|27|

Consulte [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para uma lista mais abrangente.

:::info
**EU_868** deve obedecer a uma limitação de ciclo de trabalho horário de 10%, calculada a cada minuto com base em uma janela contínua de 1 hora. Seu dispositivo deixará de transmitir se você atingir esse limite, até que seja permitido novamente.
:::

Agora que você definiu a região LoRa no seu dispositivo, pode continuar configurando quaisquer [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) para atender às suas necessidades.

## Configuração avançada

### Conectar via site

Se você quiser enviar mensagens de texto e se comunicar com outros nós pelo site, pode conectar o dispositivo ao [site do Meshtastic](https://client.meshtastic.org/messages/broadcast/0) agora.

  Etapa 1: Abra o site

[Clique aqui](https://client.meshtastic.org/messages/broadcast/0) para ir ao site.
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  Etapa 2: Adicionar o novo dispositivo

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

### Configurar sensor

|Sensor|Descrição|
|-|-|
|Temperature|✅|
|Light|Atualmente não é compatível com o app|
|Accelerometer|Em breve|

**Configuração do sensor de temperatura**

<Tabs>
<TabItem value="ios" label="IOS App">

Vá para `Settings` -> `Telemetry(Sensors)` -> Ative os sensores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/temp_sensor123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

Vá para `Settings` -> `Telemetry(Sensors)` -> Ative os sensores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/temp-an-new.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

**Configuração do buzzer e do LED**

||Tipo|Pino de saída|
|-|-|-|
|Buzzer|Buzzer PWM|25|
|LED|-|24|

<Tabs>
<TabItem value="ios" label="IOS App">

Vá para `Settings` -> `External Notification` -> Ative `GPIO` -> Defina `Output Pin GPIO`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/buzzer123.png" alt="pir" width={600} height="auto" /></p>

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

### Configurar toque

Vá para `Settings` -> `Ringtone Config` e insira a string de toque RTTTL que você deseja usar para notificações externas.

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

### Configurar GPS

Ative o GPS. Você pode ajustar o intervalo de atualização e o intervalo de transmissão para obter informações de localização mais atualizadas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

Para IOS, ative o `Accurate Location`. Caso contrário, o posicionamento pode apresentar desvio.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

### Configurar o buzzer

O buzzer vem ativado por padrão. Se você quiser desativá-lo, defina `Alert Message buzzer`, `Alert bell buzzer` e `Use PWM bizzer` conforme a captura de tela a seguir.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/buzzer.png" alt="pir" width={200} height="auto" /></p>

## Gravar firmware

### Verificar a versão do firmware

Vá para `Settings` -> `Firmware Updates` e verifique a versão atual do firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/check_firmware123.png" alt="pir" width={400} height="auto" /></p>

### <div class="danger">⚠️NÃO GRAVE O FIRMWARE A SEGUIR</div>

:::danger
NÃO GRAVE NENHUM OUTRO FIRMWARE ALÉM DO FIRMWARE T1000-E, ISSO PODE FAZER O DISPOSITIVO TRAVAR.
:::

O seguinte firmware deixará seu dispositivo inutilizável:

- nrf52_promicro_diy_tcxo<br/>
- nrf52_promicro_diy_xtal<br/>
- Dongle_nRF52840-pca10059-v1<br/>
- feather_diy<br/>
- TWC_mesh_v4<br/>
- wio-sdk-wm1110<br/>
- wio-tracker-wm1110<br/>
- xiao_ble

### Gravar o firmware do aplicativo

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Flash%20Firmware.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
:::caution note
Antes de gravar o firmware, certifique-se de que você comprou o `T1000-E for Meshtastic`. Não grave o firmware em outro modelo de rastreador que não ofereça suporte ao Meshtastic. Por favor, `não use NRF-OTA` para atualizar o firmware, isso pode fazer com que o dispositivo pare de funcionar completamente.
:::
#### Etapa 1: Entrar no modo DFU

<Tabs>
<TabItem value="method1" label="Método 1">

Acesse o [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Conecte o dispositivo ao seu PC, selecione o dispositivo como `Seeed Card Tracker T1000-E` e escolha o firmware mais recente, depois clique em `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-2.png" alt="pir" width={800} height="auto" /></p>

Clique em `Enter DFU Mode`, aparecerá uma porta serial chamada `T1000-E xxx`, clique nela e conecte-a, o LED verde ficará aceso continuamente e deverá aparecer um driver chamado `T1000-E`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-serial.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="method2" label="Método 2">

Conecte o cabo USB ao seu PC, mantenha o botão do dispositivo pressionado e então conecte o cabo de carregamento **rapidamente** duas vezes; o LED verde ficará aceso continuamente e deverá aparecer um driver chamado `T1000-E`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={800} height="auto" /></p>

#### Etapa 2: Apagar a memória Flash

:::caution note
Antes de gravar o firmware, grave primeiro o firmware de apagamento!
:::

Clique no símbolo de `lixeira`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase1.png" alt="pir" width={800} height="auto" /></p>

Baixe o firmware de apagamento e copie-o para o driver.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase-uf2.png" alt="pir" width={800} height="auto" /></p>

Esse processo pode levar algum tempo; aguarde até que a unidade desapareça e então abra um monitor serial para concluir o processo de apagamento.

#### Etapa 3: Gravar firmware

Selecione o firmware mais recente e baixe o arquivo `UF2`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/down-uf2.png" alt="pir" width={800} height="auto" /></p>

Copie o arquivo UF2 para a unidade DFU. O firmware deverá ser gravado após o arquivo ser copiado e o dispositivo reiniciar.

## FAQ

### Como verificar o nome do dispositivo

 Visite o [Meshtastic Web Flasher](https://flasher.meshtastic.org/).<br/>

 Clique em `Open Serial Monitor`, conecte o dispositivo ao seu PC e verifique o log serial, com a palavra-chave `using nodenum`.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name3.png" alt="pir" width={800} height="auto" /></p>

### Como reiniciar o dispositivo

 Pressione e segure o botão e então conecte o cabo de carregamento.

## Solução de problemas

### Dispositivo nunca liga

- O dispositivo pode parecer desligado quando o LED indicador e o buzzer não estão ativados. Antes de executar as etapas abaixo, é recomendável `verificar os seguintes parâmetros`:

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/LEDLightEnable.png" alt="pir" width={600} height="auto" /></p>

- Use um cabo USB em bom estado para `carregar o dispositivo` continuamente por 1–2 horas, garantindo que a bateria tenha energia suficiente para acordar o sistema.

:::note
Baterias de lítio se auto descarregam lentamente mesmo quando desligadas. Um dispositivo armazenado sem uso por muito tempo pode, portanto, ficar profundamente descarregado e não ligar ou ficar reiniciando durante a inicialização. Isso é comum em dispositivos com bateria de lítio, não é um defeito do T1000-E.
:::

- Se o dispositivo ficou armazenado sem uso por muito tempo e não consegue iniciar, carregue-o continuamente por até 24 horas e tente novamente. A carga de 24 horas é apenas para recuperar uma bateria profundamente descarregada, não para carregamento normal.

- Se ele ainda continuar reiniciando durante a inicialização, desconecte o cabo e deixe o dispositivo sem uso por cerca de 7 dias, depois carregue-o novamente e tente ligá-lo.

- Para evitar descarga profunda, não armazene o dispositivo com a bateria vazia ou muito baixa por muito tempo; recarregue-o quando cair abaixo de 20% e periodicamente durante o armazenamento prolongado.

- Se o dispositivo ainda não responder após o carregamento, `execute um hard reset` da seguinte forma: desconecte o cabo USB. Pressione e segure o botão e, em seguida, conecte o cabo USB mantendo o botão pressionado. Segure por aproximadamente 3 segundos e depois solte. Isso força uma reinicialização do sistema.

- Se ainda assim não funcionar, tente `reinstalar o bootloader`. Conecte um cabo USB a um computador. Mantenha o botão do dispositivo pressionado e então conecte o dispositivo ao computador; verifique se um disco aparece no seu PC. Se aparecer, [reinstale o bootloader](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#flash-the-bootloader).

### Dispositivo preso em loop de inicialização

**Descrição:**

O dispositivo reinicia repetidamente e a porta serial conecta e desconecta repetidamente.

**Solução:**

:::note
Se o dispositivo ficou sem uso por muito tempo, uma bateria profundamente descarregada também pode causar reinicializações repetidas durante a inicialização. Tente as etapas de recuperação da bateria em [Device never turns on](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#device-never-turns-on) antes da recuperação de firmware abaixo.
:::

- Etapa 1: Tente entrar manualmente no modo DFU: pressione e segure o botão do dispositivo e então conecte o cabo de carregamento **rapidamente** duas vezes; o LED verde ficará aceso continuamente.

:::note
Para entrar no modo DFU com sucesso, você precisa realizar essa operação rapidamente. Talvez seja necessário tentar várias vezes.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- Etapa 2: [Apagar a Flash](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#step-2-flash-erase).

- Etapa 3: [Gravar firmware](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#step-3-flash-firmware).

### Dispositivo inutilizado (bricked)

#### Descrição

O dispositivo não responde, não há LED e não é possível pareá-lo com o seu aplicativo.

**1) O dispositivo ainda consegue entrar no modo DFU, então tente gravar o bootloader**.

#### Gravar o bootloader

- [Download do bootloader](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash%20bootloader.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::danger note
Ao gravar o bootloader, certifique-se de que a conexão do cabo esteja estável e **NÃO** o desconecte durante o processo de gravação.
:::

**Etapa 1: Instalação do Adafruit-nrfutil**

Para usuários de Windows, pressione a tecla "Win" e a tecla "r", depois digite "cmd" na janela pop-up e pressione "Enter". Isso abrirá a linha de comando.

Para usuários de Mac, pressione a tecla "Command" e a tecla "Espaço" para abrir o Spotlight. Em seguida, digite "termial" e pressione "Return". Isso abrirá a linha de comando.

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

Então “Python xxx” e “pip xxx” devem aparecer. Se isso não acontecer, tente instalar o Python novamente.

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

Para usuários de Windows, talvez seja necessário adicionar o caminho manualmente. Copie o local de instalação mostrado na última etapa. Em seguida, adicione-o conforme a seguir:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>

<TabItem value="sou" label="Instalando a partir do código-fonte">

Use este método se você tiver problemas ao instalar com o PyPi ou quiser modificar a ferramenta. Primeiro, clone este repositório e entre na pasta dele.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Observação: os comandos a seguir usam `python3`, porém, se você estiver no Windows, talvez seja necessário alterá-lo para `python`, já que a instalação do Python 3.x no Windows ainda usa o nome python.exe

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

**Passo 2: Verifique o número da sua porta**

Conecte seu dispositivo ao PC e verifique o número da porta.

Para usuários de Windows, abra o Gerenciador de Dispositivos e vá para "port", o número de porta que aparecer após a conexão do dispositivo é o número da porta do dispositivo.

Para usuários de Mac, por exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

Para usuários de Windows, por exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

**Passo 3: Grave o bootloader**

No terminal ou prompt de comando, navegue até o diretório onde você baixou o pacote zip do bootloader e execute o seguinte comando, substituindo a porta correta do seu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```

Altere COMXX para o número da sua porta COM. Por exemplo, se o seu dispositivo estiver na COM6, altere o comando para:

`adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 Alguns dispositivos irão mudar o número da porta após você inserir este comando. Portanto, se a instalação falhar, verifique o número da porta novamente.

- **Para outros**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

Quando você tiver concluído as etapas acima, poderá seguir este [passo](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#flash-the-application-firmware) para gravar o firmware da aplicação.

**2) O dispositivo não consegue entrar no modo DFU, mas a porta serial pode ser detectada**.

- Abra uma ferramenta de porta serial

- Defina a taxa de transmissão para `1200`.

- Conecte o dispositivo.
   A luz piscará brevemente quando você conectá-lo. Continue tentando até que a luz permaneça acesa, o que significa que o dispositivo pode voltar ao modo DFU, então [grave o bootloader](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#flash-the-bootloader) -> [apague a flash](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#step-2-flash-erase) -> [grave o firmware](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#step-3-flash-firmware).

<div class="video-container">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/reset%20via%20serial%20tool.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**3) O dispositivo não consegue entrar no modo DFU e nenhuma porta serial é exibida**

- mantenha pressionado o botão do dispositivo e conecte o cabo de carregamento. Depois que um disco aparecer no seu PC, você poderá ver a porta serial.

- Se ainda assim não funcionar, desconecte o cabo de carregamento e deixe o dispositivo por alguns dias até que a bateria esteja completamente descarregada, depois conecte o cabo de carregamento e tente pareá-lo novamente.

**4) Se nenhuma das etapas acima funcionar, entre em contato com o suporte técnico: support@sensecapmx.com**

### Falha na gravação do firmware

- **Nenhum dado recebido na porta serial**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 Verifique se o dispositivo está no modo DFU, a luz verde ficará acesa continuamente quando o dispositivo estiver no modo DFU.

- **Não é possível abrir a porta serial**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 Verifique se a porta está correta ou tente outra porta.

### Não é possível se comunicar no canal primário

Se o dispositivo não conseguir se comunicar com nós próximos ou enviar mensagens, primeiro verifique se a região LoRa e o modem preset correspondem aos nós ao redor. Você também deve verificar se o **PSK** padrão foi alterado. Um PSK diferente no canal primário impedirá o dispositivo de se comunicar com outros nós nesse canal.

A maneira mais fácil de encontrar esse problema é por meio do aplicativo móvel. Abra o app, conecte-se ao dispositivo de destino e navegue até `Settings` -> `Channels`. Selecione o canal primário e verifique o valor do **PSK**. Se for diferente dos nós ao redor, atualize-o para o mesmo PSK e salve as configurações do canal.

<Tabs>
<TabItem value="ios" label="App iOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problems_ios.png" alt="Check primary channel PSK in the iOS app" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problem_and.png" alt="Check primary channel PSK in the Android app" width={900} height="auto" /></p>

</TabItem>
</Tabs>

**Solução**

Se você não tiver certeza de quais configurações foram alteradas, restaure o dispositivo para as configurações padrão seguindo o guia de [Restauração de Fábrica](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#factory-reset). Se apenas o PSK tiver sido alterado, defina-o novamente para `AQ==`.

### Dispositivo desliga automaticamente

#### Descrição

- Após ligar o dispositivo, ele desligará ou reiniciará automaticamente depois de um tempo.
- O log da porta serial é executado por um tempo e depois para.

 Isso pode ser causado por reiniciar ou desligar o dispositivo manualmente e à força quando ele está nos seguintes estados: sem concluir o processo de transmissão de mensagens, sendo configurado......

#### Solução de problemas

 [Clique aqui](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#step-2-flash-erase) para executar um flash-erase.

### Restauração de Fábrica

Se você quiser restaurar as configurações padrão, pode fazer a restauração de fábrica. Há dois métodos para você fazer a restauração de fábrica.

- [Clique aqui](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#step-2-flash-erase) para apagar a flash do dispositivo. Em seguida, regrave o firmware mais recente.

- Clique no botão `Factory Reset` no App. O dispositivo será reiniciado automaticamente com a configuração de fábrica.
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### Falha na comunicação de mensagens

#### Reset do NodeDB

NodeDB é o banco de dados local que armazena informações sobre os nós descobertos na rede Mesh atual. Se você encontrar uma situação em que não consegue se comunicar com um determinado nó, isso pode ser porque seu NodeDB armazenou informações desatualizadas para esse nó. Você precisará atualizá-lo.

Abra o app e conecte-se ao dispositivo de destino. Vá para **Settings**->**Device**->**Device Config**->**Reset NodeDB**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/sending_failed123.png" alt="Device settings and Reset NodeDB button in the app" width={600} height="auto" /></p>

#### Trocar informações do usuário

Cada nó enviará periodicamente suas próprias informações de nó, permitindo que outros nós na malha o "vejam" e "reconheçam". Dois nós precisam trocar suas informações de nó entre si para poder se comunicar um com o outro. Se você não conseguir enviar ou receber mensagens privadas com outro nó na lista, poderá solicitá-los manualmente a trocar informações no app.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Device entry in Settings" width={300} height="auto" /></p>

#### Regenerar chave privada

Dois nós precisam conhecer a chave privada um do outro para poder se comunicar entre si. Se um nó continuar falhando na transmissão de mensagens privadas, tente regenerar a chave privada para ele.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Device entry in Settings" width={600} height="auto" /></p>

Reinicie o dispositivo com problema para que a configuração tenha efeito. Após a regeneração da chave, outro dispositivo precisa se reconectar ao nó. Portanto, é melhor excluir o nó da lista de nós do outro dispositivo.

:::note
Para mais informações sobre a comunicação com outro chip LoRa, consulte: [link](https://meshtastic.org/docs/hardware/devices/seeed-studio/sensecap/card-tracker/)

:::

### Qualidade do sinal

- **SNR** reflete a qualidade do link de comunicação. Um dispositivo normal geralmente opera acima de -7 dB. Um dispositivo com SNR inferior a -10 dB indica desempenho ruim.

- **RSSI** é determinado em conjunto pelo dispositivo e pelo ambiente ao seu redor. Um dispositivo normal geralmente opera acima de -110 dBm. Um dispositivo com RSSI inferior a -115 dBm é considerado como tendo desempenho ruim.

      Para obter o melhor efeito de sinal, utilize o dispositivo em uma área aberta, desobstruída e com interferência mínima.

### Definição do pino pogo

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/PogoPin4.png" alt="pir" width={900} height="auto" /></p>

## Recursos

- [Documentação Meshtastic](https://meshtastic.org/docs/introduction/)
- [SenseCAP T1000 Tracker Datasheet](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker_T1000_Datasheet.pdf)
- [UN38.3](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/UN38.3.zip)

## Suporte técnico e discussão sobre o produto

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