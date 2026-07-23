---
description: Comece a usar o SenseCAP MeshTracker X1 para Meshtastic. Este tutorial apresentará o guia de configuração e o guia de FAQ para o dispositivo
title: Comece a usar o MeshTracker X1
keywords:
  - Rastreador
  - Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/X1First.png
slug: /x1_get_started_for_meshtastic
sku: 100087698
sidebar_position: 1
last_update:
  date: 7/13/2026
  author: Michelle Huang
createdAt: '2026-07-13'
updatedAt: '2026-07-16'
url: https://wiki.seeedstudio.com/pt-br/x1_get_started_for_meshtastic/
---
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

:::danger note
Quando o dispositivo estiver nos estados abaixo, não reinicie nem desligue manualmente. Caso contrário, o dispositivo pode ficar inutilizável.
1. Não tiver concluído o processo de transmissão de mensagem
2. Estiver sendo configurado
:::


## Introdução


### Ligar o dispositivo

Pressione uma vez para ligar o dispositivo. Haverá uma melodia ascendente e o LED verde 🟢 permanecerá aceso por cerca de 1 s.

:::tip
Se o dispositivo não responder quando você pressionar o botão, carregue-o primeiro. Não use carregador de carregamento rápido.
::: 

### Desligar o dispositivo

Mantenha o botão pressionado por mais de 5 s. O dispositivo será desligado após três bipes do buzzer.

### Conectar via App

Baixe o App `Meshtastic`:

- [IOS App](https://apps.apple.com/us/app/meshtastic/id1586432531)
- [Android App](https://play.google.com/store/apps/details?id=com.geeksville.mesh&referrer=utm_source=downloads-page)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

- Selecione o dispositivo de destino no painel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Insira o código (o código padrão é `123456`) e clique em `Pair` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- Selecione o dispositivo de destino no painel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1Connection.png" alt="pir" width={300} height="auto" /></p>

- Insira o código (o código padrão é `123456`) e clique em `OK` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1PinCodee.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Configurar o LoRa

Para começar a se comunicar pela malha, você deve definir sua região. Essa configuração controla qual faixa de frequência seu dispositivo usa e deve ser definida de acordo com sua localização regional.

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndridLorasetting.jpg" alt="pir" width={300} height="auto" /></p>

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

### Status do Dispositivo

<table>
  <tr>
    <th colspan="2">Status da Luz</th>
    <th colspan="1">Status do Dispositivo</th>
  </tr>
  <tr>
    <td rowspan="4">🟢green</td>
    <td>Constante</td>
    <td>Dispositivo ligando</td>
  </tr>
  <tr>
    <td>Piscando rápido </td>
    <td>Funcionando normalmente</td>
  </tr>
  <tr>
    <td>Piscando devagar </td>
    <td>Carregando</td>
  </tr>
 <tr>
    <td>Constante</td>
    <td>Totalmente carregado</td>
  </tr>
  <tr>
    <td>🔴Red</td>
    <td>Piscando</td>
    <td>Baixa energia</td>
  </tr>
    <tr>
    <td>⚪️white</td>
    <td>Constante</td>
    <td>Modo DFU/Modo Bootloader</td>
  </tr>
</table>

### Controle do Botão

<table>
  <tr>
    <th colspan="1">Controle do Botão</th>
    <th colspan="1">Resposta do Dispositivo</th>
  </tr>
  <tr>
   <td>Clique uma vez (desligado)</td>
    <td>Dispositivo ligando</td>
  </tr>
  <tr>
   <td>Pressione e segure por 5 s</td>
    <td>Dispositivo desligando</td>
  </tr>
  <tr>
    <td>Clique duplo</td>
    <td>Transmitir ID do nó e posição</td>
  </tr>
  <tr>
    <td>Clique triplo</td>
    <td>Ligar/desligar o GPS</td>
  </tr>
  <tr>
    <td>Quatro cliques</td>
    <td>Ligar/desligar temporariamente o buzzer</td>
  </tr>
</table>

## Gravar Firmware

:::caution note
Por favor, `não use OTA` para atualizar o firmware, isso pode fazer com que o dispositivo fique completamente inutilizável. Para informações detalhadas, por favor [clique aqui](https://meshtastic.org/docs/getting-started/flashing-firmware/nrf52/ota/)
:::
#### Etapa 1: Entrar no modo DFU

Entre em DFU via o web flasher. Se isso falhar muitas vezes, entre em DFU manualmente.

<Tabs>
<TabItem value="method1" label="Via Web Flasher">

Acesse o [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Conecte o dispositivo ao seu PC, selecione o dispositivo como `SenseCAP Mesh Tracker X1` e escolha o firmware mais recente, depois clique em `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/SelectX1111.png" alt="pir" width={800} height="auto" /></p>

Clique em `Enter DFU Mode`, será exibida uma porta serial chamada `X1 xxx`. Clique e conecte-a. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/SerialSelectionX111.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="method2" label="Entrar Manualmente">

Conecte o cabo USB ao seu PC, pressione e segure o botão do dispositivo e, em seguida, conecte o cabo de carregamento **rapidamente** duas vezes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/DFUEnterManually.gif" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

O LED branco ⚪️ ficará constante se o X1 estiver no modo DFU. E deve haver um driver chamado `X1` exibido no seu computador.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/X1DriveMAC.png" alt="pir" width={300} height="auto" /></p>

#### Etapa 2: Apagar a Flash

Antes de gravar o firmware, por favor apague-o primeiro!

Clique no símbolo de `lixeira`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/EraseX11.png" alt="pir" width={800} height="auto" /></p>

Baixe o firmware de apagamento e copie-o para o driver.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/FlashFirmwareX11.png" alt="pir" width={800} height="auto" /></p>

Esse processo pode levar algum tempo; aguarde até que a unidade desapareça.

#### Etapa 3: Gravar Firmware

Selecione o firmware mais recente e baixe o arquivo `UF2`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/FlashClick.png" alt="pir" width={800} height="auto" /></p>

Copie o arquivo UF2 para a unidade DFU. O firmware deve ser gravado após o arquivo ser copiado e o dispositivo reiniciar.

## Tutorial Avançado

### Configurar GPS

Ative o GPS. Você pode ajustar o intervalo de atualização e o intervalo de transmissão para obter informações de localização mais atualizadas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

Para IOS, ative o `Accurate Location`. Caso contrário, o posicionamento pode ficar impreciso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>


### Conectar via Website

Se você quiser enviar mensagens de texto e se comunicar com outros nós pelo website, pode conectar o dispositivo ao [Website Meshtastic](https://client.meshtastic.org/messages/broadcast/0) agora. 

  Etapa 1: Abrir o Website

    [Clique aqui](https://client.meshtastic.org/messages/broadcast/0) para ir para o Website.

  Etapa 2: Adicionar o novo dispositivo 

    Clique em "+ New Connection". 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    Há duas maneiras de conectar. Você pode escolher o método de sua preferência.

<Tabs>

<TabItem value="11" label="Bluetooth">


    Escolha Bluetooth. Escolha o ID do dispositivo na janela pop-up.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>

<TabItem value="12" label="Serial">

    Escolha o método serial. Abra o gerenciador de dispositivos para ver em qual porta o dispositivo está conectado. Escolha essa porta na janela pop-up.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>
</Tabs>

  Seu dispositivo será exibido na lista. Clique para conectar. Se a conexão for bem-sucedida, você poderá ver o status do dispositivo diretamente no website.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Websitestatus.png" alt="pir" width={300} height="auto" /></p>

### Configurar Sensor

|Sensor|Descrição|
|-|-|
|Pressão|✅|
|Sensor de 6 eixos (versão futura)|✅|
|Sensor de 3 eixos (versão futura)|✅|

**Configuração do Buzzer e LED**

||Tipo|Pino de Saída|
|-|-|-|
|Buzzer|Buzzer PWM|25|
|LED|RGB|R:03<br/>G:24<br/>B:28|
|Vibra|-|05|

<Tabs>
<TabItem value="ios" label="IOS App">

Navegue até `Settings` -> `External Notification` -> Ative `GPIO` -> Defina `Output Pin GPIO`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-en.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Aplicativo Android">

Navegue até `Settings` -> `External Notification` -> Ative `GPIO` -> Defina `Output Pin GPIO`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

Consulte [External Notification Config](https://meshtastic.org/docs/configuration/module/external-notification/) para mais detalhes.

:::tip
Depois de atualizar a configuração do dispositivo, ele será reiniciado, o que pode levar algum tempo.
:::

### Configurar toque

Navegue até `Settings` -> `Ringtone Config`, depois insira a string de toque RTTTL que você deseja usar para notificações externas.

<Tabs>
<TabItem value="ios" label="Aplicativo iOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/T1000E20260410.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Aplicativo Android">
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

### Configurar buzzer

O buzzer vem ativado por padrão. Se você quiser desativar o buzzer, defina `Alert Message buzzer`, `Alert bell buzzer` e `Use PWM buzzer` como mostrado na captura de tela a seguir.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/buzzer.png" alt="pir" width={200} height="auto" /></p>

### Configurar alerta de mensagem

O alerta de mensagem pode ser configurado em `External Notification`.

<Tabs>

<TabItem value="aaa" label="iOS">

Navegue até `Setting` -> `External Notification`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/ExternalNotificationIOS.png" alt="pir" width={300} height="auto" /></p>

Você pode configurar para `buzzer off + vibra off`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/IONotificationOff.png" alt="pir" width={600} height="auto" /></p>

Ou `buzzer on + vibra on`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/IOSNotificationOn.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="bbb" label="Android">

Navegue até `Setting` -> `Module Configuration` -> `External Notification`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Module_Notification_Android.png" alt="pir" width={600} height="auto" /></p>

Ative `External notification enabled`, então você pode configurar para `buzzer only`, `vibra only` ou `buzzer on + vibra on`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/NotificationSettingConfig.png" alt="pir" width={900} height="auto" /></p>

Desative `External notification enabled`, então você pode configurar para `buzzer off + vibra off`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Notificationoff.jpg" alt="pir" width={300} height="auto" /></p>


</TabItem>

</Tabs>

## FAQ


### Como verificar o ID do dispositivo

<Tabs>
<TabItem value="23" label="Verificar a parte de trás do dispositivo">
Os `últimos quatro dígitos` do endereço MAC são o ID do dispositivo

Por exemplo, o ID do dispositivo abaixo seria `A0D4`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/MACAd.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="22" label="Via ferramenta serial">
Visite [Meshtastic Web Flasher](https://flasher.meshtastic.org/).<br/>

 Clique em `Open Serial Monitor`, conecte o dispositivo ao seu PC, verifique o log serial, palavra-chave `using nodenum`.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/UsingNodeName.png" alt="pir" width={800} height="auto" /></p>


</TabItem>
</Tabs>

### Como reiniciar o dispositivo

 Pressione e segure o botão e, em seguida, conecte o cabo de carregamento.

## Solução de problemas

### Dispositivo nunca liga

- O dispositivo pode parecer desligado quando o indicador LED e o buzzer não estão ativados. Antes de executar as etapas acima, é recomendável `verificar os seguintes parâmetros`:

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/LEDLightEnable.png" alt="pir" width={600} height="auto" /></p>

- Use um cabo USB em bom estado para `carregar o dispositivo` continuamente por 1–2 horas para garantir que a bateria tenha energia suficiente para acordar o sistema.

- Se o dispositivo ainda não responder após o carregamento, `execute um hard reset` da seguinte forma: desconecte o cabo USB. Pressione e segure o botão e, em seguida, conecte o cabo USB mantendo o botão pressionado. Segure por aproximadamente 3 segundos e depois solte. Isso força uma reinicialização do sistema.

 - Se ainda assim não funcionar, conecte um cabo USB a um computador. Mantenha o botão do dispositivo pressionado e, em seguida, conecte o dispositivo ao computador, veja se um disco aparece no seu PC. Se aparecer, reinstale o bootloader

### Dispositivo preso em loop de inicialização

**Descrição:**

O dispositivo irá reiniciar repetidamente, e a porta serial irá conectar e desconectar repetidamente.

**Solução:**

- Etapa 1: Tente entrar no modo DFU manualmente: pressione e segure o botão do dispositivo e, em seguida, conecte **rapidamente** o cabo de carregamento duas vezes

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/DFUEnterManually.gif" alt="pir" width={600} height="auto" /></p>

O dispositivo está em modo DFU se o LED branco estiver aceso continuamente.

:::note
Para entrar no modo DFU com sucesso, você precisa realizar esta operação rapidamente. Talvez seja necessário tentar várias vezes.
:::

- Etapa 2: Apagar a Flash

- Etapa 3: Gravar o firmware

### Instalação do bootloader


<Tabs>

<TabItem value="m2" label="Instalar a partir de Adafruit-nrfutil">


- [Download do bootloader](https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/mesh_tracker_x1_bootloader-0.10.0-13.zip)

:::danger note
Ao gravar o bootloader, certifique-se de que a conexão do cabo esteja estável e **NÃO** o desconecte durante o processo de gravação.
:::

**Etapa 1: Instalação do Adafruit-nrfutil**

Para usuários do Windows, pressione a tecla "Win" e a tecla "r", depois digite "cmd" na janela que aparecer e clique em "Enter". Isso abrirá a linha de comando. 

Para usuários de Mac, pressione a tecla "Command" e a tecla "Space" para abrir o Spotlight. Em seguida, digite "termial" e clique em "Return". Isso abrirá a linha de comando. 

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

Para usuários do Windows, talvez seja necessário adicionar o caminho manualmente. Copie o local de instalação mostrado na última etapa. Em seguida, adicione-o como a seguir:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

**Etapa 2: Verifique o número da sua porta**

Conecte seu dispositivo ao PC e verifique o número da porta.

Para usuários do Windows, abra o gerenciador de dispositivos e vá até `port`; o número da porta que aparecer após a conexão do dispositivo é o número da porta do dispositivo.

Para usuários de Mac, por exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

Para usuários do Windows, por exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

**Etapa 3: Gravar o bootloader**

No terminal ou prompt de comando, navegue até o diretório onde você baixou o pacote zip do bootloader e execute o seguinte comando, substituindo a porta correta do seu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p COMxx -b 115200 --singlebank --touch 1200
```

Altere COMXX para o número da sua porta COM. Por exemplo, se o seu dispositivo estiver na com6, altere o comando para:

`adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 Alguns dispositivos irão alterar o número da porta após você inserir este comando. Portanto, se a instalação falhar, verifique o número da porta novamente.

- **Para outros**:

```
adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

Quando você tiver concluído as etapas acima, poderá seguir esta [etapa](https://wiki.seeedstudio.com/pt-br/x1_get_started_for_meshtastic/#flash-firmware) para gravar o firmware do aplicativo.

</TabItem>

<TabItem value="m3" label="Instalar a partir do código-fonte">


Use este método se você tiver problemas para instalar com o PyPi ou quiser modificar a ferramenta. Primeiro, faça o clone deste repositório e entre na pasta dele.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Observação: os comandos a seguir usam `python3`; no entanto, se você estiver no Windows, talvez seja necessário alterá-lo para `python`, pois a instalação do Python 3.x no Windows ainda usa o nome python.exe

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

**Etapa 2: Verifique o número da sua porta**

Conecte seu dispositivo ao PC e verifique o número da porta.

Para usuários de Windows, abra o gerenciador de dispositivos e vá para "port", o número de porta que aparecer após a conexão do dispositivo é o número de porta do dispositivo.

Para usuários de Mac, por exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

Para usuários de Windows, por exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

**Etapa 3: Gravar o bootloader**

No terminal ou prompt de comando, navegue até o diretório onde você baixou o pacote zip do bootloader e execute o seguinte comando, substituindo a porta correta do seu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p COMxx -b 115200 --singlebank --touch 1200
```

Altere COMXX para o seu número de COM. Por exemplo, se o seu dispositivo estiver na com6, altere o comando para:

`adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 Alguns dispositivos mudarão o número da porta depois que você inserir este comando. Portanto, se a instalação falhar, verifique novamente o número da porta.

- **Para outros**:

```
adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

Quando você tiver concluído as etapas acima, poderá seguir esta [etapa](https://wiki.seeedstudio.com/pt-br/x1_get_started_for_meshtastic/#flash-firmware) para gravar o firmware do aplicativo.

</TabItem>
</Tabs>


**2) O dispositivo não consegue entrar no modo DFU, mas a porta serial pode ser detectada**.

- Abra uma ferramenta de porta serial

- Defina a taxa de transmissão para `1200`.

- Conecte o dispositivo.
   A luz piscará brevemente quando você conectá-lo. Continue tentando até que a luz permaneça acesa, o que significa que o dispositivo pode voltar ao modo DFU, então [grave o bootloader](https://wiki.seeedstudio.com/pt-br/x1_get_started_for_meshtastic/#bootloader-installation) -> [apague a flash](https://wiki.seeedstudio.com/pt-br/x1_get_started_for_meshtastic/#step-2-flash-erase) -> [grave o firmware](https://wiki.seeedstudio.com/pt-br/x1_get_started_for_meshtastic/#step-3-flash-firmware).

**3) O dispositivo não consegue entrar no modo DFU e nenhuma porta serial é exibida**

- mantenha pressionado o botão do dispositivo e conecte o cabo de carregamento. Depois que um disco aparecer no seu PC, você poderá ver a porta serial.

- Se ainda não funcionar, desconecte o cabo de carregamento e deixe o dispositivo por alguns dias até que a bateria esteja completamente descarregada, depois conecte o cabo de carregamento e tente pareá-lo novamente.

**4) Se nenhuma das etapas acima funcionar, entre em contato com o suporte técnico: support@sensecapmx.com**

 ### Dispositivo desliga automaticamente

- **Descrição do fenômeno**

 - Após o dispositivo ligar, ele desligará ou reiniciará automaticamente depois de um tempo. 
 - O log da porta serial roda por um tempo e depois para.

 Isso pode ser causado por reiniciar ou desligar manualmente e à força o dispositivo quando ele está nos seguintes estados: sem terminar o processo de transmissão de mensagens, sendo configurado......

- **Solução de problemas**

 [Clique aqui](https://wiki.seeedstudio.com/pt-br/x1_get_started_for_meshtastic/#step-2-flash-erase) para executar um apagamento da flash. 

 ### Restauração de fábrica
Se você quiser restaurar as configurações padrão, pode fazer uma restauração de fábrica. Há dois métodos para você fazer a restauração de fábrica.

- [Clique aqui](https://wiki.seeedstudio.com/pt-br/x1_get_started_for_meshtastic/#step-2-flash-erase) para apagar a flash do dispositivo e, em seguida, gravar novamente o firmware mais recente.

- Clique no botão `Factory Reset` no aplicativo. O dispositivo será reiniciado automaticamente com a configuração de fábrica. 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### Falha em Mensagem Direta

#### Reset do NodeDB

NodeDB é o banco de dados local que armazena informações sobre os nós descobertos na rede Mesh atual. Se você encontrar uma situação em que não consegue se comunicar com um determinado nó, pode ser porque o seu nodeDB armazenou informações desatualizadas para esse nó. Você precisará atualizá-lo.

Abra o aplicativo e conecte-se ao dispositivo de destino. Vá para **Settings**->**Device**->**Device Config**->**Reset NodeDB**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB3.png" alt="Device entry in Settings" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB4.png" alt="Reset NodeDB button in Device Config" width={300} height="auto" /></p>

#### Trocar informações do usuário

Cada nó enviará periodicamente suas próprias informações de nó, permitindo que outros nós na malha o "vejam" e o "reconheçam". Dois nós precisam trocar suas informações de nó entre si para poder se comunicar um com o outro. Se você não conseguir enviar ou receber mensagens privadas com outro nó na lista, poderá solicitá-los manualmente a trocar informações no aplicativo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Device entry in Settings" width={300} height="auto" /></p>

#### Regenerar chave privada

Dois nós precisam conhecer a chave privada um do outro para poder se comunicar entre si. Se um nó continuar falhando na transmissão de mensagens privadas, tente regenerar a chave privada para ele.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Device entry in Settings" width={600} height="auto" /></p>

Reinicie o dispositivo com falha para que a configuração tenha efeito.

:::note
Após a regeneração da chave, outros dispositivos precisam se reconectar ao nó. Portanto, é melhor excluir o nó da lista de nós do outro dispositivo.
:::

### Qualidade do sinal

  - **SNR** reflete a qualidade do link de comunicação. Um dispositivo normal geralmente opera acima de -7 dB. Um dispositivo com SNR abaixo de -10 dB indica baixo desempenho.

  - **RSSI** é determinado em conjunto pelo dispositivo e pelo ambiente ao seu redor. Um dispositivo normal geralmente opera acima de -110 dBm. Um dispositivo com RSSI abaixo de -115 dBm é considerado como tendo baixo desempenho. 

      Para obter o melhor efeito de sinal, use o dispositivo em uma área aberta, desobstruída e com interferência mínima.

## Recursos

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
