---
description: Comece a usar a Wio Tracker L2 Series. Guia para instalação do dispositivo, gravação de firmware e conexão do dispositivo.
title: Comece a usar o Meshtastic
keywords:
  - Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png
slug: /get_started_with_meshtastic_wio_tracker_l2
sku: 114993648,114993649,114993653,114993654
sidebar_position: 1
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_wio_tracker_l2/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::danger note
Quando o dispositivo estiver nos estados abaixo, não reinicie ou desligue manualmente. Caso contrário, o dispositivo pode ficar inutilizável.

1. Não tiver concluído o processo de transmissão de mensagem
2. Estiver sendo configurado
:::

## Gravar firmware


Visite o [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Selecione o dispositivo de destino como `Seeed Wio Tracker L2` e escolha o firmware mais recente, depois clique em `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/Flash.png" alt="pir" width={800} height="auto" /></p>

Ligue o dispositivo, clique em `Enter DFU Mode`, aparecerá uma porta serial chamada `Tracker L2`, clique e conecte-a.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/StartFlash.png" alt="pir" width={800} height="auto" /></p>

Em seguida, clique em "Flash". Não se esqueça de marcar "Full Erase and Install" se quiser sobrescrever o firmware anterior.

## Introdução


### Alternar interface


<Tabs>

<TabItem value="1" label="MUI para BaseUI">
Vá para a página Setting **->** Escolha `Reboot/Shutdown` **->** Pressione e segure o ícone de Bluetooth **->** Clique em `OK`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIToBaseUI.png" alt="pir" width={900} height="auto" /></p>

:::tip
A janela de alternância para BaseUI aparece quando você `long-press` o ícone de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/LongPress.gif" alt="pir" width={250} height="auto" /></p>

Se você apenas clicar no ícone de Bluetooth, entrará no modo Bluetooth. Nesse caso, pressione e segure o ícone de Bluetooth mostrado na tela e o dispositivo será reiniciado automaticamente para MUI.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GoBackMUI.gif" alt="pir" width={250} height="auto" /></p>

:::

</TabItem>

<TabItem value="2" label="BaseUI para MUI">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BasetoMui.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

### Conexão com o telefone

**Passo 1. Entrar no modo de conexão Bluetooth**

<Tabs>

<TabItem value="3" label="MUI">

Vá para a página `Setting`, clique em `Reboot/Shutdown` e depois clique no `ícone de Bluetooth`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="pir" width={800} height="auto" /></p>

:::tip
Ao usar MUI, primeiro altere para o modo de pareamento Bluetooth antes de parear com o seu telefone. Caso contrário, o telefone não conseguirá reconhecer o dispositivo.
:::

O dispositivo será então reiniciado em modo Bluetooth. O código de pareamento Bluetooth será mostrado na tela.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothParingMode1.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="4" label="BaseUI">

O dispositivo está sempre em modo de pareamento Bluetooth, não sendo necessária nenhuma operação especial.

</TabItem>
</Tabs>

**Passo 2. Baixar o aplicativo Meshtastic**

[Clique aqui](https://meshtastic.org/downloads/) para baixar o aplicativo Meshtastic.

**Passo 3. Parear com o dispositivo**

<Tabs>

<TabItem value="5" label="IOS">

- Selecione o dispositivo de destino no painel Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Digite o código mostrado na tela e clique em `Pair` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="6" label="Android">

- Selecione o dispositivo de destino no painel Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1Connection.png" alt="pir" width={300} height="auto" /></p>

- Digite o código mostrado na tela e clique em `OK` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/CodePairingPhone.png" alt="pir" width={300} height="auto" /></p>


</TabItem>
</Tabs>

### Configurar LoRa

Para começar a se comunicar pela malha, você deve definir sua região. Essa configuração controla qual faixa de frequência o dispositivo usa e deve ser ajustada de acordo com sua localização regional.

**Lista de regiões**

|**Código da região**|**Descrição**|**Faixa de frequência (MHz)**|**Ciclo de trabalho (%)**|**Limite de potência (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Não definido|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|União Europeia 868MHz|869.4 - 869.65|10|27|

Consulte [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para uma lista mais abrangente.

:::info
**EU_868** deve obedecer a uma limitação de ciclo de trabalho horário de 10%, calculada a cada minuto em uma janela contínua de 1 hora. O dispositivo deixará de transmitir ao atingir esse limite, até que seja permitido novamente.
:::

<Tabs>

<TabItem value="7" label="Configurar no MUI">

Vá para a página `Setting`, clique em `LeoR Region`, o dispositivo será reiniciado automaticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/LoRaSetting.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="8" label="Configurar no BaseUI">

Vá para a página `LoRa Info`, clique em `Region`, escolha a região e depois clique em `OK`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BaseUILoRa.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="9" label="Configurar no telefone">

<Tabs>
<TabItem value="ios" label="Aplicativo IOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Aplicativo Android">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndridLorasetting.jpg" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

</TabItem>

</Tabs>

Agora que você definiu a região LoRa no seu dispositivo, pode continuar configurando quaisquer [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) para atender às suas necessidades.

### Uso de mapa

<Tabs>

<TabItem value="10" label="Mapa offline">

**Passo 1. Ativar GPS**

Você precisa ativar o GPS para obter a posição. Isso pode ser configurado diretamente no dispositivo `long pressing the position icon`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

Você também pode configurá-lo no aplicativo do seu telefone.

**Passo 2. Preparação do cartão SD**

Você precisa formatar e instalar o mapa no cartão SD. Para um tutorial detalhado de uso do cartão SD, clique aqui para visualizar.

**Passo 3. Instalar o cartão SD**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SDCardPlugin.gif" alt="pir" width={450} height="auto" /></p>

**Passo 4. Visualizar o mapa**

Aguarde o carregamento do mapa. Após conectar-se com sucesso ao Wi-Fi e obter a localização, o dispositivo exibirá um mapa offline.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/OfflineMapL2.png" alt="pir" width={450} height="auto" /></p>

</TabItem>

<TabItem value="11" label="Mapa online">

**Passo 1. Ativar GPS**

Você precisa ativar o GPS para obter a posição. Isso pode ser configurado diretamente no dispositivo `long pressing the position icon`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

Você também pode configurá-lo no aplicativo do seu telefone.

**Passo 2. Definir e ativar o Wi-Fi**

Defina o nome e a senha do Wi-Fi. Isso pode ser feito diretamente no dispositivo. 

:::tip

O Wi-Fi conectado deve ser 2.4G. Wi-Fi 5G não pode ser usado pelo dispositivo.

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSetting.png" alt="pir" width={450} height="auto" /></p>

O Wi-Fi está desativado quando o IP do Wi-Fi está vazio e o ícone de Wi-Fi está cinza. O Wi-Fi está ativado quando o IP do Wi-Fi é exibido e o ícone de Wi-Fi está branco. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="pir" width={900} height="auto" /></p>

Pressione e segure o ícone `Wifi` para alternar o status.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSwitchMUI.png" alt="pir" width={450} height="auto" /></p>



**Passo 3. Visualizar o mapa**

Aguarde o carregamento do mapa. Após conectar-se com sucesso ao Wi-Fi e obter a localização, o dispositivo exibirá um mapa online.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/OfflineMapL2.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>


## Uso avançado

### Conectar via site

Se você quiser enviar mensagens de texto e se comunicar com outros nós pelo site, pode conectar o dispositivo ao [site Meshtastic](https://client.meshtastic.org/messages/broadcast/0) agora.

  **Passo 1**: Alternar para BaseUI

  **Passo 2**: Abrir o site

[Clique aqui](https://client.meshtastic.org/messages/broadcast/0) para ir ao site.
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  **Passo 3**: Adicionar o novo dispositivo

    Clique em "+ New Connection". 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    Escolha o método serial. Abra o gerenciador de dispositivos para ver em qual porta o dispositivo está conectado. Escolha essa porta na janela pop-up.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    Seu dispositivo será exibido na lista. Clique para conectar. Se a conexão for bem-sucedida, você poderá ver o status do dispositivo diretamente no site.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### Configurar GPS

Você pode ajustar o intervalo de atualização e o intervalo de transmissão para obter informações de localização mais atualizadas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

Para IOS, ative o `Accurate Location`. Caso contrário, o posicionamento pode desviar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>


### Conexão de sensor

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SensorConnection.png" alt="pir" width={500} height="auto" /></p>

Você pode adicionar sensor ao dispositivo por meio da interface Grove. Os seguintes sensores foram verificados como compatíveis com a interface Grove no dispositivo.

<table>
  <tr>
    <th colspan="2">Tipo de sensor</th>
    <th colspan="1">Modelo de sensor</th>
  </tr>
  <tr>
    <td rowspan="4">Sensor ambiental</td>
    <td>Pressão</td>
    <td>BMP085</td>
  </tr>
  <tr>
    <td>Temperatura</td>
    <td>[MCP9808](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html) 、PCT2075</td>
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

<Tabs>

<TabItem value="ios" label="IOS">

- Ative Telemetry para obter dados do sensor. Se você quiser mostrar os dados do sensor na tela OLED, ative `on screen`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/TelemetryIOS.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- Ative Telemetry para obter dados do sensor. Se você quiser mostrar os dados do sensor na tela OLED, ative `on screen`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/TelemetryL2.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

### Outras funções

<Tabs>

<TabItem value="12" label="MUI">

<Tabs>

<TabItem value="13" label="Barra de menu">
| Método de interação | Efeito |
|---|---|
| Pressione e segure o ícone inicial | Resincronizado |
| Pressione e segure o ícone da lista de nós | Entra na página de filtro de nós |
| Pressione e segure o ícone de configurações | A tela desliga |

</TabItem>


<TabItem value="15" label="Página inicial">

| Método de interação | Efeito |
|---|---|
| Clique no ícone Mensagem| Navega para a página de mensagens |
| Clique no ícone Nó | Navega para a página de nós |
| Clique no ícone Relógio| Alterna entre hora real/tempo de atividade |
| Pressione e segure o ícone LoRa| LoRa TX desligado/ligado|
| Pressione e segure o ícone de Notificação| Notificação ativada/desativada|
| Clique no ícone de Notificação| Alterna entre Som/Banner/Som e Banner|
| Pressione e segure o ícone de GPS| GPS ligado/desligado|
| Pressione e segure o ícone de WiFi| WiFi ligado/desligado|
| Pressione e segure o ícone MQTT| MQTT ligado/desligado|
| Clique no ícone de código QR| Exibe o código QR do dispositivo |

</TabItem>

<TabItem value="16" label="Página de nós">
| Método de interação | Efeito |
|---|---|
| Clique em um nó| Exibe informações detalhadas|
| Pressione e segure um nó| Entra no chat privado|
| Ver a posição de um nó| Exibe a localização do nó no mapa|

</TabItem>

<TabItem value="17" label="Página de canais">
Pressione e segure um canal para desativar/ativar notificações. Escolha e clique em um canal para entrar na janela de chat.

</TabItem>

<TabItem value="18" label="Página de mensagens">
Pressione e segure um chat para excluí-lo. Escolha e clique em um chat para entrar na janela de chat.

</TabItem>

<TabItem value="19" label="Página de configurações">

| Método de interação | Efeito |
|---|---|
| Nome curto do usuário | Alterar o nome curto do dispositivo|
| Nome longo do usuário | Alterar o nome longo do dispositivo|
| PIN da tela | Definir senha para inicialização do dispositivo |
| PIN de configuração | Definir senha para alterações de configuração |
| Região | Configurar região LoRa|
| Modem Preset| Configurar preset LoRa |
| Canal | Editar canal|
| Função do dispositivo | Configurar função |
| WiFi | Definir SSID e senha do WiFi |
| Tempo limite da tela| Definir tempo limite da tela|
| Brilho da tela| Definir brilho da tela|
| Tema| Alterna o tema entre fundos escuros e claros |
| Calibração da tela | Calibrar tela|
| Idioma| Alternar idioma exibido|
| Restauração de fábrica | Configuração restaurada para os padrões |
| Reset do NodeDB | Dados de nós apagados |
| Limpar histórico de chat | Histórico de chat apagado |
| Reiniciar (ícone verde) | Dispositivo reinicia |
| Desligar (ícone vermelho) | Dispositivo desliga |

</TabItem>

<TabItem value="20" label="Ferramenta">
| Método de interação | Efeito |
|---|---|
| Mesh Detector| Exibe nós ativos detectados |
| Signal Scanner| Exibe RSSI e SNR do nó selecionado |
| Trace Route| Exibe o caminho de roteamento do nó selecionado |
| Estatística | Exibe informações de decodificação de pacotes |
| Registro de pacotes | Mostra o log do dispositivo|

</TabItem>
</Tabs>

</TabItem>

<TabItem value="13" label="BaseUI">

<Tabs>

<TabItem value="21" label="Início">
| Método de interação | Efeito |
|---|---|
| Selecione "Sleep Screen" | Desliga o display temporariamente; acorda com o pressionar do botão do usuário |
| Selecione "Send Position" | Anuncia manualmente a posição do dispositivo para os nós na malha (acelera a descoberta) |

</TabItem>

<TabItem value="23" label="Nó">

Navegue até "Node Action"

| Método de interação | Efeito |
|---|---|
| Selecione "Favorite" | Marca o nó selecionado como favorito|
| Selecione "Trace Route" | Executa um trace route para o nó selecionado |

</TabItem>

<TabItem value="24" label="Posição">
| Método de interação | Efeito |
|---|---|
| Selecione "GPS Toggle" | GPS ligado/desligado|
| Selecione "GPS Format" | Alterna o formato de GPS|
| Selecione "Compass Headings" | Alterna entre Dynamic, Fixed e Freeze Heading para "N" |
| Selecione "Compass Calibrate" | Inicia uma rotina de calibração da bússola de 30 segundos |
</TabItem>

<TabItem value="25" label="LoRa">
| Método de interação | Efeito |
|---|---|
| Selecione "LoRa Region" | Selecionar região LoRa |
| Selecione "Device Role" | Alterna entre funções do dispositivo |
| Selecione "Radio Preset" | Escolhe entre os presets disponíveis|

</TabItem>

<TabItem value="26" label="Sistema">
| Método de interação | Efeito |
|---|---|
| Selecione "Notifications" | Ativa/desativa bipes|
| Selecione "Bluetooth Toggle" | Ativa/desativa Bluetooth|
| Selecione "Reboot/Shutdown" | Reinicia manualmente ou desliga o dispositivo|

</TabItem>

</Tabs>

</TabItem>
</Tabs>

## FAQ

### O dispositivo não consegue parear com o telefone via BLE

- Ao usar MUI, primeiro alterne para o modo de pareamento Bluetooth antes de parear com seu telefone. Caso contrário, seu telefone não conseguirá reconhecer seu dispositivo. Vá para a página `Setting`, clique em `Reboot/Shutdown` e depois clique no `Bluetooth icon`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="pir" width={800} height="auto" /></p>

- Ao usar BaseUI, depois de configurar e ativar o Wifi, você só poderá conectar seu dispositivo ao aplicativo do telefone via rede. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Network%20Connection.png" style={{width:350, height:'auto'}}/></div> 

### O dispositivo não consegue se conectar ao meu Wifi

- Certifique-se de que você está conectando a um `2.4g Wifi`. O dispositivo não consegue parear com Wifi 5G. Normalmente o hotspot do telefone pode ser ajustado para 2.4g nas configurações do telefone. Portanto, você pode testar primeiro o hotspot do seu telefone.

- Ative o Wifi depois de definir o nome e a senha do Wifi.

O Wifi está desativado quando o IP do wifi está vazio e o ícone do wifi está cinza. O Wifi está ativado quando o IP do wifi é exibido e o ícone do wifi está branco. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="pir" width={900} height="auto" /></p>

### O dispositivo desliga automaticamente

**Descrição**

- Após o dispositivo ligar, ele desliga ou reinicia automaticamente depois de um tempo.
- O log da porta serial executa por um tempo e depois para.

 Isso pode ser causado por reiniciar ou desligar manualmente e à força o dispositivo quando ele está nos seguintes estados: sem terminar o processo de transmissão de mensagens, sendo configurado......

**Solução de problemas**

Você precisa executar um apagamento de flash e, em seguida, regravar o firmware mais recente.

### Restauração de fábrica

Se você quiser restaurar as configurações padrão, pode fazer a restauração de fábrica. Há dois métodos para você fazer a restauração de fábrica.

<Tabs>

<TabItem value="7" label="Configurar no MUI">

Vá para a página `Setting`, clique em `Configure Reset`, escolha `Factory Reset` e depois clique em `OK`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/FactoryResetMUI.png" alt="pir" width={900} height="auto" /></p>

O dispositivo será reiniciado com a configuração padrão.

</TabItem>

<TabItem value="9" label="Configurar no celular">

Clique no botão `Factory Reset` no App. O dispositivo será reiniciado automaticamente com a configuração de fábrica. 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

</TabItem>

</Tabs>

### Falha em Mensagem Direta

#### Reset do NodeDB

NodeDB é o banco de dados local que armazena informações sobre os nós descobertos na rede Mesh atual. Se você encontrar uma situação em que não consegue se comunicar com um determinado nó, isso pode ser porque o seu nodedB armazenou informações desatualizadas para esse nó. Você precisará atualizá-lo.

<Tabs>

<TabItem value="7" label="Configurar no MUI">

Vá para a página `Setting`, clique em `Configure Reset`, escolha `NodedB Reset` e então clique em `OK`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/NodedbL2.png" alt="pir" width={900} height="auto" /></p>

O dispositivo será reiniciado.

</TabItem>

<TabItem value="9" label="Configurar no celular">

Abra o app e conecte ao dispositivo de destino. Vá para **Settings**->**Device**->**Device Config**->**Reset NodeDB**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB3.png" alt="Device entry in Settings" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB4.png" alt="Reset NodeDB button in Device Config" width={300} height="auto" /></p>

</TabItem>
</Tabs>


#### Trocar Informações de Usuário

Cada nó enviará periodicamente suas próprias informações de nó, permitindo que outros nós na malha o "vejam" e o "reconheçam". Dois nós precisam trocar suas informações de nó entre si para poder se comunicar um com o outro. Se você não conseguir enviar ou receber mensagens privadas com outro nó na lista, você pode solicitá-los manualmente para trocar informações no app.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Device entry in Settings" width={300} height="auto" /></p>

#### Regenerar Chave Privada

Dois nós precisam conhecer sua chave privada um do outro para poder se comunicar entre si. Se um nó continuar falhando na transmissão de mensagens privadas, tente regenerar a chave privada para ele.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Device entry in Settings" width={600} height="auto" /></p>

Reinicie o dispositivo com falha para que a configuração tenha efeito.

:::note
Após a regeneração da chave, o outro dispositivo precisa se reconectar ao nó. Portanto, é melhor excluir o nó da lista de nós do outro dispositivo.
:::

### Qualidade do Sinal

- **SNR** reflete a qualidade do link de comunicação. Um dispositivo normal geralmente opera acima de -7 dB. Um dispositivo com SNR menor que -10 dB indica desempenho ruim.

- **RSSI** é determinado em conjunto pelo dispositivo e seu ambiente ao redor. Um dispositivo normal geralmente opera acima de -110 dBm. Um dispositivo com RSSI menor que -115 dBm é considerado como tendo desempenho ruim.

      Para obter o melhor efeito de sinal, use o dispositivo em uma área aberta, desobstruída e com interferência mínima.


<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>
