---
description: Tutorial de configuração de Gateway MQTT Meshtastic baseado no Kit XIAO ESP32S3 & Wio-SX1262. Permite mensagens globais, fornece backup quando o sinal da malha está fraco e garante entrega mais rápida de mensagens via internet.
title: Configurando um Gateway MQTT
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /xiao_esp32s3_&_wio_sx1262_kit_mqtt
sku: 102010611,113110064
sidebar_position: 1
last_update:
  date: 3/4/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_&_wio_sx1262_kit_mqtt/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Por que você precisa de Meshtastic + mqtt

Integrar MQTT com Meshtastic estende a comunicação off-grid ao fazer a ponte entre redes distantes. Isso permite mensagens globais, fornece um backup quando os sinais da malha estão fracos e garante uma entrega mais rápida de mensagens via internet. Perfeito para áreas remotas e situações de emergência.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTFramework.png" style={{width:900, height:'auto'}}/></div>

## Preparação de hardware

Configurar um Gateway Meshtastic requer um dispositivo que possa rodar tanto LoRa quanto Wifi. Além disso, se você quiser compartilhar a localização do seu gateway via mqtt, pode adicionar um módulo GPS.

<table align="center">
<tbody><tr>
<th>Kit XIAO ESP32S3 & Wio-SX1262 para Meshtastic & LoRa</th>
<th>(Opcional) Módulo L76K GNSS</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Compre agora🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> Saiba mais🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

## Instalação de hardware

### Conectado à bateria

O XIAO ESP32S3 possui um chip de gerenciamento de energia integrado que permite que o XIAO ESP32S3 seja alimentado de forma independente usando uma bateria ou que carregue a bateria pela porta USB do XIAO ESP32S3.

Se você quiser conectar a bateria ao XIAO, recomendamos que compre uma bateria recarregável `3.7V lithium` qualificada com `protection circuit`. Ao soldar a bateria, tenha cuidado para distinguir entre os terminais positivo e negativo. O terminal negativo da fonte de alimentação deve ser o lado mais próximo da porta USB, e o terminal positivo da fonte de alimentação é o lado mais distante da porta USB.

<div class="table-center">
<iframe width="730" height="420" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/video.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Conectado ao SX-1262

O SX-1262 pode ser conectado ao Xiao ESP32-S3 via interface B2B. O SX-1262 usa SPI para se comunicar com o Xiao ESP32-S3.
:::warning
O SX-1262 compatível só pode ser comprado dentro do kit.
:::

### (Opcional) Conectado ao módulo L76K GNSS

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Coonection.png" style={{width:600, height:'auto'}}/></div>

## Configuração

### Etapa 1: Gravar o firmware

**1**: Primeiro, abra um navegador e visite https://flasher.meshtastic.org/# requer navegador Chrome ou Edge.

**2**: Em seguida, use um cabo USB adequado para conectar o dispositivo ao PC. Talvez seja necessário desligar e então **manter pressionado o botão BOOT** enquanto conecta o cabo USB.

**3**: Siga as instruções fornecidas a seguir para realizar as operações subsequentes de gravação. Selecione o dispositivo como "**Seeed XIAO S3**", o firmware como **o mais recente**, e então clique em "**Flash**". Não se esqueça de marcar "**Full Erase and Install**" se quiser sobrescrever o firmware anterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

### Etapa 2: Verifique o ID do seu dispositivo

O ID do dispositivo normalmente são os últimos quatro dígitos do endereço MAC. Você pode abrir o monitor da porta serial para verificar.

Conecte o dispositivo via cabo USB. Em seguida, [clique aqui](https://flasher.meshtastic.org/#) para ir ao web flasher Meshtastic. Clique em `Open the serial port monitor`. Selecione o dispositivo como `Seeed XIAO S3` ou `Tiny USB XXX`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/OpenSerialPortMonitor.png" style={{width:600, height:'auto'}}/></div>

Verifique o ID do seu dispositivo no log da porta serial. Por exemplo, o log abaixo indica que o ID do dispositivo é 24c0.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/DEviceIDD.png" style={{width:600, height:'auto'}}/></div>

### Etapa 3: Conexão do app

Abra o app Meshtastic para Android e conecte-se ao seu dispositivo via Bluetooth. O código PIN padrão é 123456

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/ConnectionESP32S33.png" style={{width:600, height:'auto'}}/></div>

### Etapa 4: Configurar o Gateway Mesh-mqtt do Xiao ESP32S3

<Tabs>
<TabItem value="pypi" label="Android">

**1. Configuração LoRa**
- altere a região de UNSET para o seu país/região (por exemplo, EU868 para Europa, US para EUA, etc.).
- Escolha `OK to MQTT`
- Clique em Enviar
- O dispositivo reinicia e reconecta automaticamente. O dispositivo será reiniciado e reconectado automaticamente. Isso pode levar de 30 s a 2 min.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTLoRaConfiguration.jpg" style={{width:350, height:'auto'}}/></div>

**2. Configuração MQTT**

- Você pode usar o `MQTT Address`(mqtt.meshtastic.org), `User name`(meshdev) e `Password`(large4cats) padrão. 
- Escolha `MQTT Enabled`
- Escolha `MQTT Client Proxy Enabled`
- (Opcional) Se você quiser que outros usuários mqtt vejam você no mapa, selecione `Map Reporting` e `I agree`.
- Clique em Enviar
- O dispositivo reinicia e reconecta automaticamente. O dispositivo será reiniciado e reconectado automaticamente. Isso pode levar de 30 s a 2 min.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTSetting.jpg" style={{width:350, height:'auto'}}/></div>


**3. Configuração do canal**

- ative `Uplink enabled` e `Downlink enabled` para o seu canal primário
- Clique em Enviar

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/UPLINKDOWNLINK.jpg" style={{width:350, height:'auto'}}/></div>


**4. Configuração de rede**

Após essa configuração, seu dispositivo não poderá mais se conectar ao seu app via Bluetooth. Mas ele poderá se conectar ao seu app via rede.

- Preencha o SSID (nome do Wifi) e a senha do Wifi. O wifi que você pretende usar deve ser 2.4G.
- Clique em Enviar
- O dispositivo reinicia automaticamente. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTNetwork.jpg" style={{width:350, height:'auto'}}/></div> 

**5. Conexão do app**

Agora seu dispositivo não pode ser conectado via Bluetooth. Mas você pode se conectar via rede.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Network%20Connection.png" style={{width:350, height:'auto'}}/></div> 

</TabItem>

<TabItem value="sou" label="IOS">

**1. Configuração LoRa**
- altere a região de UNSET para o seu país/região (por exemplo, EU868 para Europa, US para EUA, etc.).
- Escolha `OK to MQTT`
- Clique em Enviar
- O dispositivo reinicia e reconecta automaticamente. O dispositivo será reiniciado e reconectado automaticamente. Isso pode levar de 30 s a 2 min.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTLoRa.png" style={{width:350, height:'auto'}}/></div>

**2. Configuração MQTT**

- Você pode usar o `MQTT Address`(mqtt.meshtastic.org), `User name`(meshdev) e `Password`(large4cats) padrão. 
- Escolha `MQTT Enabled`
- Escolha `MQTT Client Proxy Enabled`
- (Opcional) Se você quiser que outros usuários mqtt vejam você no mapa, selecione `Map Reporting` e `I agree`.
- Clique em Enviar
- O dispositivo reinicia e reconecta automaticamente. O dispositivo será reiniciado e reconectado automaticamente. Isso pode levar de 30 s a 2 min.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTSetting.png" style={{width:350, height:'auto'}}/></div>


**3. Configuração do canal**

- ative `Uplink enabled` e `Downlink enabled` para o seu canal primário
- Clique em Enviar

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTChanel.png" style={{width:350, height:'auto'}}/></div>


**4. Configuração de rede**

Após essa configuração, seu dispositivo não poderá mais se conectar ao seu app via Bluetooth. Mas ele poderá se conectar ao seu app via rede.

- Preencha o SSID (nome do Wifi) e a senha do Wifi. O wifi que você pretende usar deve ser 2.4G.
- Clique em Enviar
- O dispositivo reinicia automaticamente. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMTTNestwork.png" style={{width:350, height:'auto'}}/></div> 

**5. Conexão do app**

Agora seu dispositivo não pode ser conectado via Bluetooth. Mas você pode se conectar via rede.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTConnect.png" style={{width:350, height:'auto'}}/></div> 

</TabItem>
</Tabs>

## Envio de mensagens

Agora você pode se comunicar com outras pessoas pela internet. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTTest.png" style={{width:600, height:'auto'}}/></div> 

Se você tiver outro dispositivo Meshtastic que esteja na mesma faixa de frequência que o Gateway MQTT ESP32S3, ele também poderá transmitir mensagens via ESP32S3 com outras pessoas na internet.

