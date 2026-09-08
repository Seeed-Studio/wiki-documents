---
description: Introdução ao MUI. Apresenta a definição, recursos e uso do MUI.
title: Introdução ao MUI
keywords:
  - Meshtastic
  - Wio Tracker L2
  - MUI
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIMUI.png
slug: /l2_mui
sku: 100029766
sidebar_position: 0
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/pt-br/l2_mui/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## O que é MUI?

MUI (Meshtastic User Interface) é uma interface gráfica de código aberto projetada para dispositivos Meshtastic. Ela fornece uma forma mais intuitiva para os usuários interagirem com o dispositivo. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIMUI.png" alt="pir" width={900} height="auto" /></p>

**Principais recursos**

- **Mapa interativo**: o MUI exibe as localizações dos nós diretamente em mapas online ou offline. Verifique dispositivos próximos e suas posições sem abrir um APP móvel ou de desktop.

- **Configuração conveniente do dispositivo**: configure as definições do Meshtastic diretamente no dispositivo, incluindo rádio, GPS, tela e outras opções comuns. Nenhum aplicativo externo é necessário para configurações de rotina.

- **Interface gráfica intuitiva**: o MUI fornece uma interface otimizada para tela sensível ao toque, com menus claros e navegação baseada em mapa. Operações comuns podem ser concluídas com apenas alguns toques, tornando o dispositivo mais fácil de usar tanto para usuários novos quanto experientes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIIntro.gif" alt="pir" width={600} height="auto" /></p>

## Comece a usar o MUI com o Wio Tracker L2


### Alternância de UI

<Tabs>

<TabItem value="1" label="MUI para BaseUI">
Vá para a página Setting **->** escolha `Reboot/Shutdown` **->** pressione e segure o ícone de Bluetooth **->** clique em `OK`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIToBaseUI.png" alt="pir" width={900} height="auto" /></p>

:::tip
A janela pop-up de alternância para BaseUI aparece quando você `long-press` o ícone de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/LongPress.gif" alt="pir" width={250} height="auto" /></p>

Se você apenas clicar no ícone de Bluetooth, entrará no modo Bluetooth. Nesse caso, pressione e segure o ícone de Bluetooth mostrado na tela e o dispositivo será reiniciado automaticamente para o MUI.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GoBackMUI.gif" alt="pir" width={250} height="auto" /></p>

:::

</TabItem>

<TabItem value="2" label="BaseUI para MUI">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BasetoMui.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

### Conexão com o telefone
Vá para a página `Setting`, clique em `Reboot/Shutdown` e depois clique no `Bluetooth icon`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="pir" width={800} height="auto" /></p>

O dispositivo será então reiniciado no modo Bluetooth. O código de pareamento Bluetooth será exibido na tela.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothParingMode1.png" alt="pir" width={500} height="auto" /></p>

### Configuração LoRa
Para começar a se comunicar pela malha, você deve definir sua região. Essa configuração controla qual faixa de frequência seu dispositivo usa e deve ser definida de acordo com sua localização regional.

**Lista de regiões**

|**Código da região**|**Descrição**|**Faixa de frequência (MHz)**|**Ciclo de trabalho (%)**|**Limite de potência (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Não definido|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|União Europeia 868MHz|869.4 - 869.65|10|27|

Consulte [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para uma lista mais abrangente.

:::info
**EU_868** deve obedecer a uma limitação de ciclo de trabalho horário de 10%, calculada a cada minuto com base em uma janela contínua de 1 hora. Seu dispositivo parará de transmitir se você atingir esse limite, até que seja permitido novamente.
:::

<Tabs>

<TabItem value="7" label="Configurar no MUI">

Vá para a página `Setting`, clique em `Region`, escolha a região e depois clique em `OK`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/LoRaSetting.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="9" label="Configurar no telefone">

<Tabs>
<TabItem value="ios" label="App iOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndridLorasetting.jpg" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

</TabItem>

</Tabs>

Agora que você definiu a região LoRa no seu dispositivo, pode continuar configurando quaisquer [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) para atender às suas necessidades.


### Uso do mapa
<Tabs>

<TabItem value="10" label="Mapa online">

**Passo 1. Ativar o GPS**

Você precisa ativar o GPS para obter a posição. Isso pode ser configurado diretamente no dispositivo `long pressing the position icon`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

Você também pode configurá-lo no APP do seu telefone.

**Passo 2. Preparação do cartão SD**

Você precisa formatar e instalar o mapa no seu cartão SD. Para um tutorial detalhado de uso do cartão SD, clique aqui para visualizar.

**Passo 3. Instalar o cartão SD**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SDCardPlugin.gif" alt="pir" width={450} height="auto" /></p>

**Passo 4. Visualizar o mapa**

Aguarde o carregamento do mapa. Após conectar-se com sucesso ao Wi-Fi e obter a localização, o dispositivo exibirá um mapa offline.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/OfflineMapL2.png" alt="pir" width={450} height="auto" /></p>

</TabItem>

<TabItem value="11" label="Mapa offline">

**Passo 1. Ativar o GPS**

Você precisa ativar o GPS para obter a posição. Isso pode ser configurado diretamente no dispositivo `long pressing the position icon`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

Você também pode configurá-lo no APP do seu telefone.

**Passo 2. Definir e ativar o Wi-Fi**

Defina o nome e a senha do Wi-Fi. Isso pode ser feito diretamente no dispositivo. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSetting.png" alt="pir" width={450} height="auto" /></p>

O Wi-Fi está desativado quando o IP do Wi-Fi está vazio e o ícone de Wi-Fi está cinza. O Wi-Fi está ativado quando o IP do Wi-Fi é exibido e o ícone de Wi-Fi está branco. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="pir" width={900} height="auto" /></p>

Pressione e segure o ícone `Wifi` para alternar o status.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSwitchMUI.png" alt="pir" width={450} height="auto" /></p>

:::tip

O Wi-Fi conectado deve ser 2.4G. Wi-Fi 5G não pode ser usado pelo dispositivo.

:::



**Passo 3. Visualizar o mapa**

Aguarde o carregamento do mapa. Após conectar-se com sucesso ao Wi-Fi e obter a localização, o dispositivo exibirá um mapa online.



</TabItem>
</Tabs>


## Interação avançada

### Barra de menu
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MenuBarMUII.png" alt="pir" width={600} height="auto" /></p>


### Página inicial

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIHOme.png" alt="pir" width={900} height="auto" /></p>

### Página de nós

- **Clique em qualquer nó**: expande as informações detalhadas de parâmetros do nó

- **Pressione e segure qualquer nó**: entra na conversa

- **Pressione e segure a coordenada**: vê a posição do nó no mapa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/NodePaje.png" alt="pir" width={300} height="auto" /></p>

### Página de canais

- **Clique em um canal**: entra na conversa do canal

- **Pressione e segure um canal**: silencia/reativa o canal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/ChannelPage.png" alt="pir" width={300} height="auto" /></p>

:::tip

Apenas canais configurados, como o canal nomeado mostrado na imagem à esquerda abaixo, podem ser interagidos. Canais como o mostrado na imagem à direita, que não estão configurados e apenas rotulados, não podem ser interagidos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/ChannelConfiguration.png" alt="pir" width={300} height="auto" /></p>

:::

### Página de mensagens

- **Clique em um chat**: entra em uma conversa.

- **Pressione e segure um chat**: revela um botão DEL para excluí-lo.

- **Destacado em laranja**: indica uma nova mensagem não lida.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/ChatInterct.png" alt="pir" width={900} height="auto" /></p>

### Página de configurações

- **Reiniciar**: escolha "Reboot/Shutdown", clique no ícone verde "Reboot".

- **Desligar**: escolha "Reboot/Shutdown", clique no ícone vermelho "Turn off".

- **Entrar no modo Bluetooth**: escolha "Reboot/Shutdown", clique no ícone azul "Bluetooth".

- **Alternar para BaseUI**: escolha "Reboot/Shutdown", pressione e segure o ícone azul "Bluetooth".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SettingMUII.png" alt="pir" width={900} height="auto" /></p>


### Ferramenta

- **Mesh Detector**: exibe nós ativos detectados
- **Signal Scanner**: exibe o RSSI e o SNR do nó selecionado
- **Trace Route**: exibe o caminho de roteamento do nó selecionado
- **Statistic**: exibe informações de decodificação de pacotes
- **Packet Log**: mostra o log do dispositivo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/TOOLMUI.png" alt="pir" width={500} height="auto" /></p>

## Requisitos de dispositivo para MUI

O MUI foi projetado para ser executado em hardware que ofereça suporte ao Meshtastic e forneça uma tela gráfica. Para usar todos os recursos do MUI, incluindo mapas offline, seu dispositivo deve atender aos seguintes requisitos.

| Componente | Requisito |
|-----------|-------------|
| Tela | Tela colorida com suporte a toque |
| GNSS | Receptor GNSS integrado para serviços de localização |
| LoRa® | Rádio LoRa® compatível para comunicação Meshtastic |
| Armazenamento | Slot para cartão microSD para mapas offline |
| MCU | É necessário um MCU de alto desempenho, capaz de suportar tanto a exibição na tela quanto o firmware Meshtastic|


**Seeed Wio Tracker L2** é a plataforma de hardware recomendada para o MUI.

Ele integra todos os componentes necessários em um único dispositivo:

- Tela sensível ao toque colorida
- GNSS integrado
- Comunicação LoRa®
- Conectividade Wi-Fi e Bluetooth®
- Slot para cartão microSD para mapas offline
- USB Type-C para programação e alimentação

Nenhuma placa de expansão adicional é necessária.

## FAQ
### Como ativar o teclado
Clique no ícone de teclado mostrado abaixo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/Keyboardicon.png" alt="pir" width={500} height="auto" /></p>

Em seguida, você pode inserir números e letras. Nem todas as páginas têm um ícone de teclado; ele geralmente aparece apenas em páginas onde a entrada é necessária.

### Por que meu Wi-Fi foi desligado automaticamente

Quando você entra no modo de pareamento Bluetooth, o Wi-Fi do dispositivo será automaticamente definido como desativado. 
Você pode ativar o Wi-Fi no aplicativo de celular quando o dispositivo estiver no modo Bluetooth.

### Como enviar mensagem MQTT no MUI

O dispositivo não pode transmitir mensagem MQTT quando está no MUI. Se você quiser transmitir mensagem MQTT, por favor:

**Passo 1**. Entre no modo de pareamento Bluetooth

**Passo 2**. Emparelhe seu dispositivo com o aplicativo de celular

**Passo 3**. Configure MQTT no aplicativo de celular

**Passo 4**. Inicie a transmissão de mensagens

