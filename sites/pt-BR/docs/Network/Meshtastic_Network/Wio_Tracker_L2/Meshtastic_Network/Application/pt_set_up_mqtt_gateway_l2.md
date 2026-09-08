---
description: Tutorial de configuração de gateway MQTT Meshtastic baseado no Wio-Trcker L2. Permite mensagens globais, fornece backup quando os sinais da malha estão fracos e garante entrega mais rápida de mensagens via internet.
title: Gateway MQTT
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/mqttworkflow.png
slug: /set_up_mqtt_gateway_l2
sku: 100029766
sidebar_position: 3
last_update:
  date: 3/4/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/pt-br/set_up_mqtt_gateway_l2/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Por que você precisa de Meshtastic + mqtt

Integrar MQTT com Meshtastic estende a comunicação off-grid ao fazer a ponte entre redes distantes. Isso permite mensagens globais, fornece um backup quando os sinais da malha estão fracos e garante uma entrega mais rápida de mensagens via internet. Perfeito para áreas remotas e situações de emergência.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/mqttworkflow.png" style={{width:900, height:'auto'}}/></div>

## Preparação de hardware

Configurar um gateway Meshtastic requer um dispositivo que possa executar LoRa e Wi-Fi. Além disso, se você quiser compartilhar a localização do seu gateway via mqtt, pode adicionar um módulo GPS.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora🖱️</font></span></strong>
</a>
</div>

## Configuração

### Etapa 1: Gravar o firmware

Visite o [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Selecione o dispositivo de destino como `Seeed Wio Tracker L2` e escolha o firmware mais recente, depois clique em `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/Flash.png" alt="pir" width={800} height="auto" /></p>

[LINE_44>Ligue o dispositivo, clique em `Enter DFU Mode`, haverá uma porta serial chamada `Tracker L2`, clique nela e conecte.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/StartFlash.png" alt="pir" width={800} height="auto" /></p>

Em seguida, clique em "Flash". Não se esqueça de marcar "Full Erase and Install" se quiser substituir o firmware anterior.

### Etapa 2: Verifique o ID do seu dispositivo

<Tabs>
<TabItem value="23" label="Verificar na parte de trás do dispositivo">
Os `últimos quatro dígitos` do endereço MAC são o ID do dispositivo

Por exemplo, o ID do dispositivo abaixo seria `A0D4`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/MACAd.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="22" label="Via ferramenta serial">
Visite o [Meshtastic Web Flasher](https://flasher.meshtastic.org/).<br/>

 Clique em `Open Serial Monitor`, conecte o dispositivo ao seu PC, verifique o log serial, palavra-chave `using nodenum`.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/UsingNodeName.png" alt="pir" width={800} height="auto" /></p>


</TabItem>
</Tabs>

### Etapa 3: Conexão com o app

<Tabs>

<TabItem value="3" label="MUI">

Vá para a página `Setting`, clique em `Reboot/Shutdown` e depois clique no `Bluetooth icon`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="pir" width={800} height="auto" /></p>

O dispositivo será reiniciado no modo Bluetooth. O código de pareamento Bluetooth será exibido na tela.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothParingMode1.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="4" label="BaseUI">

O dispositivo está sempre em modo de pareamento Bluetooth, não exigindo nenhuma operação especial.

</TabItem>
</Tabs>

[Clique aqui](https://meshtastic.org/downloads/) para baixar o app Meshtastic.

Emparelhe seu dispositivo com o app no seu telefone.

<Tabs>

<TabItem value="5" label="IOS">

- Selecione o dispositivo de destino no painel Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Digite o código exibido na tela e clique em `Pair` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="6" label="Android">

- Selecione o dispositivo de destino no painel Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1Connection.png" alt="pir" width={300} height="auto" /></p>

- Digite o código exibido na tela e clique em `OK` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/CodePairingPhone.png" alt="pir" width={300} height="auto" /></p>


</TabItem>
</Tabs>

### Etapa 4: Configurar o gateway Mesh-mqtt Xiao ESP32S3

<Tabs>
<TabItem value="pypi" label="Android">

**1. Configuração LoRa**
- altere a região de UNSET para o seu país/região (por exemplo, EU868 para Europa, US para EUA, etc.).
- Escolha `OK to MQTT`
- Clique em Send
- O dispositivo reinicia e reconecta automaticamente. O dispositivo será reiniciado e reconectado automaticamente. Isso pode levar de 30 s a 2 min.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTLoRaConfiguration.jpg" style={{width:350, height:'auto'}}/></div>

**2. Configuração MQTT**

- Você pode usar o `MQTT Address` padrão (mqtt.meshtastic.org), `User name` (meshdev) e `Password` (large4cats). 
- Escolha `MQTT Enabled`
- Escolha `MQTT Client Proxy Enabled`
- (Opcional) Se você quiser que outros usuários mqtt vejam você no mapa, selecione `Map Reporting` e `I agree`.
- Clique em Send
- O dispositivo reinicia e reconecta automaticamente. O dispositivo será reiniciado e reconectado automaticamente. Isso pode levar de 30 s a 2 min.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTSetting.jpg" style={{width:350, height:'auto'}}/></div>


**3. Configuração de canal**

- ative `Uplink enabled` e `Downlink enabled` para o seu canal primário
- Clique em Send

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/UPLINKDOWNLINK.jpg" style={{width:350, height:'auto'}}/></div>


**4. Configuração de rede**

Após essa configuração, seu dispositivo não poderá mais se conectar ao seu app via Bluetooth. Mas ele poderá se conectar ao seu app via rede.

- Preencha o SSID (nome do Wi-Fi) e a senha do Wi-Fi. O Wi-Fi que você pretende usar deve ser 2.4G.
- Clique em Send
- O dispositivo reinicia automaticamente. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTNetwork.jpg" style={{width:350, height:'auto'}}/></div> 

**5. Conexão do app**

Agora seu dispositivo não pode ser conectado via Bluetooth. Mas você pode conectar via rede.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Network%20Connection.png" style={{width:350, height:'auto'}}/></div> 

</TabItem>

<TabItem value="sou" label="IOS">

**1. Configuração LoRa**
- altere a região de UNSET para o seu país/região (por exemplo, EU868 para Europa, US para EUA, etc.).
- Escolha `OK to MQTT`
- Clique em Send
- O dispositivo reinicia e reconecta automaticamente. O dispositivo será reiniciado e reconectado automaticamente. Isso pode levar de 30 s a 2 min.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTLoRa.png" style={{width:350, height:'auto'}}/></div>

**2. Configuração MQTT**

- Você pode usar o `MQTT Address` padrão (mqtt.meshtastic.org), `User name` (meshdev) e `Password` (large4cats). 
- Escolha `MQTT Enabled`
- Escolha `MQTT Client Proxy Enabled`
- (Opcional) Se você quiser que outros usuários mqtt vejam você no mapa, selecione `Map Reporting` e `I agree`.
- Clique em Send
- O dispositivo reinicia e reconecta automaticamente. O dispositivo será reiniciado e reconectado automaticamente. Isso pode levar de 30 s a 2 min.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTSetting.png" style={{width:350, height:'auto'}}/></div>


**3. Configuração de canal**

- ative `Uplink enabled` e `Downlink enabled` para o seu canal primário
- Clique em Send

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTChanel.png" style={{width:350, height:'auto'}}/></div>


**4. Configuração de rede**

Após essa configuração, seu dispositivo não poderá mais se conectar ao seu app via Bluetooth. Mas ele poderá se conectar ao seu app via rede.

- Preencha o SSID (nome do Wi-Fi) e a senha do Wi-Fi. O Wi-Fi que você pretende usar deve ser 2.4G.
- Clique em Send
- O dispositivo reinicia automaticamente. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMTTNestwork.png" style={{width:350, height:'auto'}}/></div> 

**5. Conexão do app**

Agora seu dispositivo não pode ser conectado via Bluetooth. Mas você pode conectar via rede.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTConnect.png" style={{width:350, height:'auto'}}/></div> 

</TabItem>
</Tabs>

## Envio de mensagens

Agora você pode se comunicar com outras pessoas pela internet. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTTest.png" style={{width:600, height:'auto'}}/></div> 

Se você tiver outro dispositivo Meshtastic que esteja na mesma faixa de frequência do gateway MQTT, ele também poderá transmitir mensagens via gateway L2 com outras pessoas na internet.

