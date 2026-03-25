---
description: Conectando ao HA usando Matter sobre os protocolos de rede OpenThread
title: Seeed Studio XIAO MG24 Conectar HomeAssistant Com Matter
keywords:
  - MG24
  - xiao
  - HomeAssistant
  - Matter
  - OpenThread
  - Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E
image: https://files.seeedstudio.com/wiki/HA_OpenThread/Wiki-XIAO-MG24-HA-Matter.webp
slug: /xiao_mg24_ha_openthread
sidebar_position: 8
last_update:
  date: 05/5/2025
  author: Jason
createdAt: '2025-05-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_mg24_ha_openthread/
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/Wiki XIAO MG24-HA-Matter.png" style={{width:900, height:'auto'}}/></div>

## Introdução

Neste wiki, utilizaremos o Sonoff Zigbee 3.0 USB Dongle para acessar o HomeAssistant e, assim, atuar como um roteador de borda, enquanto o Seeed Studio XIAO MG24 atuará como um dispositivo de protocolo Matter com a rede Thread. Para sua conveniência, iremos guiá-lo através das três perguntas a seguir para se engajar melhor no processo. ***Agradecimentos ao autor [@tutoduino](https://tutoduino.fr/en/tutorials/matter-xiao-mg24/) pelas ideias deste WiKi***

### O que é Matter?

Matter (anteriormente CHIP) é um padrão universal de camada de aplicação desenvolvido pela Connectivity Standards Alliance (CSA).

- Interoperabilidade entre diferentes fornecedores em redes IP (Wi-Fi/Ethernet/Thread)
- Tipos de dispositivos padronizados (por exemplo, luzes, fechaduras de portas, termostatos)
- Comissionamento seguro usando códigos QR/NFC
- Criptografia de ponta a ponta com Distributed Compliance Ledger (DCL)

### O que é OpenThread?

OpenThread é uma implementação de código aberto do protocolo de rede Thread. Ele cria redes mesh de baixa potência e seguras para dispositivos IoT usando a tecnologia de rádio IEEE 802.15.4. Principais recursos:

- Suporte IPv6 integrado (6LoWPAN)
- Topologia de rede auto-organizável
- Criptografia AES-128 para todas as comunicações
- Compatível com dispositivos tão pequenos quanto lâmpadas ou sensores

### Qual é a relação entre Matter e Thread?

***Agradecimentos ao autor[@tutoduino](https://tutoduino.fr/en/tutorials/matter-xiao-mg24/) por uma explicação muito detalhada deste ponto, aqui citada!***

Após esta breve introdução ao Matter e ao Thread, você agora entende que Thread e Matter têm propósitos diferentes e operam em camadas diferentes da pilha de tecnologia. Para recapitular:

Thread:

- Thread é um protocolo de rede mesh sem fio e de baixa potência projetado para dispositivos de casa conectada. Ele fornece uma forma confiável e segura para que os dispositivos se comuniquem entre si e com a internet.
- Thread cria uma rede local que permite que os dispositivos conversem entre si mesmo se a internet cair.

Matter:

- Matter é um protocolo de camada de aplicação que fica em cima de protocolos de rede como Thread, Wi-Fi e Ethernet. Ele tem como objetivo simplificar e unificar o ecossistema de casa inteligente, garantindo que dispositivos de diferentes fabricantes possam funcionar juntos de forma transparente.
- Matter define como os dispositivos se comunicam e interagem no nível de aplicação, com foco em interoperabilidade, segurança e facilidade de uso.

Conexão entre Thread e Matter:

- Matter pode usar Thread como um de seus protocolos de rede subjacentes. Isso significa que dispositivos usando o protocolo Matter podem se comunicar por meio de uma rede Thread.
- A combinação de Matter e Thread permite um ecossistema de casa inteligente robusto, seguro e interoperável, no qual os dispositivos podem se comunicar localmente e de forma eficiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/TOPPLOGY.jpg" style={{width:900, height:'auto'}}/></div>

## Visão Geral do Hardware

<table align="center">
    <tr>
        <th>Home Assistant Green</th>
        <th>Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E</th>
        <th>XIAO MG24</th>
        <th>Grove - Temperature&Humidity Sensor (SHT31)</th>
        <th>Seeed Studio Grove Base for XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/Gree_HA.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/Dongle.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/XIAO_MG24.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/SHT31.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/sonoff-zigbee-usb-dongle-plus-p-5510.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
</table>

## Visão Geral do Software

### Gravando o dongle Sonoff ZBDongle-E

O dongle Sonoff ZBDongle-E vem com firmware que permite apenas a comunicação com dispositivos Zigbee. Para habilitá-lo a funcionar com o protocolo de rádio Thread, você deve gravar um novo firmware. Você pode atualizar o firmware do dongle diretamente pelo navegador Chrome em https://darkxst.github.io/silabs-firmware-builder. Depois de inserir o dongle no seu computador, clique em "Connect" e selecione o firmware "OpenThread" para alterar o firmware.
<div class="table-center">
    <table align="center">
    <tr>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/1.jpg"
            style={{width: 300, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/2.jpg"
            style={{width: 300, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/3.jpg"
            style={{width: 300, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
    </tr>
    </table>
</div>

### Dispositivo Sensor de Temperatura e Umidade Matter

Se esta é a primeira vez que você usa o XIAO MG24 como um dispositivo Matter, você pode consultar este [wiki](https://wiki.seeedstudio.com/pt-br/xiao_mg24_matter/) sobre como configurá-lo.

- **Passo 1.** Baixe a [Library](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a Arduino IDE. Abra um novo sketch e copie o código a seguir para o novo sketch.

```cpp
#include <Matter.h>
#include <MatterTemperature.h>
#include <MatterHumidity.h>
#include "ArduinoLowPower.h"
#include "SHT31.h"
#include <Wire.h>


SHT31 sht31 = SHT31();

float humidity;
float temperature;

MatterHumidity matter_humidity_sensor;
MatterTemperature matter_temp_sensor;


void setup() {
  Serial.begin(115200);
  while(!Serial);
  Serial.println("begin...");  
  sht31.begin();  

  float temperature = sht31.getTemperature();
  float humidity = sht31.getHumidity();

  Serial.printf("Temperature: %.02f\n", temperature);
  Serial.printf("Humidity: %.02f\n", humidity);

  Matter.begin();
  matter_temp_sensor.begin();
  matter_humidity_sensor.begin();
  matter_temp_sensor.set_device_name("XIAO_MG24");
  matter_temp_sensor.set_vendor_name("Seeed_Studio");
  matter_temp_sensor.set_product_name("Matter_SHT31");

  if (!Matter.isDeviceCommissioned()) {
    Serial.println("Matter device is not commissioned");
    Serial.println("Commission it to your Matter hub with the manual pairing code or QR code");
    Serial.printf("Manual pairing code: %s\n", Matter.getManualPairingCode().c_str());
    Serial.printf("QR code URL: %s\n", Matter.getOnboardingQRCodeUrl().c_str());
  }
  while (!Matter.isDeviceCommissioned()) {
    delay(200);
  }
  Serial.println("Matter device is commissioned, waiting for Thread network...");
  while (!Matter.isDeviceThreadConnected()) {
    delay(200);
  }
  Serial.println("Device is connected to Thread network");
  Serial.println("Waiting for Matter device discovery...");
  while (!matter_temp_sensor.is_online() || !matter_humidity_sensor.is_online()) {
    delay(200);
  }
  Serial.println("Matter device is now online");
}

void loop() {

  delay(1000);

  float temperature = sht31.getTemperature();
  float humidity = sht31.getHumidity();

  Serial.printf("Temperature: %.02f\n", temperature);
  Serial.printf("Humidity: %.02f\n", humidity);

  matter_temp_sensor.set_measured_value_celsius(temperature);
  matter_humidity_sensor.set_measured_value(humidity);


  LowPower.sleep(600000);
}
```

### Configuração do HomeAssistant

**Etapa 1. Add-on Store**

Você precisa baixar dois plugins com base nas imagens。

<div class="table-center">
    <table align="center">
    <tr>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/addon1.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/addon2.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
    </tr>
    </table>
</div>

**Etapa 2. Configuração do Thread**

Adicione o plugin OpenThread Border Router. Este plugin permite criar ou ingressar em uma rede Thread e transformar o Home Assistant em um Thread Border Router!
<div class="table-center">
    <table align="center">
    <tr>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/thread1.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/thread2.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
    </tr>
    </table>
</div>
Selecione a rede correspondente na configuração do serviço Thread.
<div class="table-center">
    <table align="center">
    <tr>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/thread3.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/thread4.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
    </tr>
    </table>
</div>

### Configuração do Home Assistant no celular

Para adicionar um dispositivo Matter ao Home Assistant, você precisa instalar o aplicativo Home Assistant no seu smartphone. O smartphone atua como o “coordenador” do Matter, adicionando novos dispositivos à rede Matter e definindo configurações de segurança, enquanto o HomeAssistant Green atua como o controlador do Matter, gerenciando todos os dispositivos conectados à rede Matter.

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone1.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone2.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone4.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone5.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>

### Adicionando um dispositivo Matter

Para incorporar um novo dispositivo Matter ao seu sistema de automação residencial, escolha "Add Matter Device" e escaneie o código QR incluído com o dispositivo. Este tutorial demonstra como gerar o código QR usando o site CHIP, com base na URL fornecida pelo XIAO MG24 no Serial Monitor.

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone7.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone6.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone8.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone9.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>

### Painel do HA para ver temperatura e umidade

Depois que o código QR for adicionado com sucesso, podemos ver nosso sensor de temperatura e umidade no painel do HA!

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/result1.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/result2.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/result3.jpg" style={{width:400, height:'auto'}}/></div></td>
    </tr>
</table>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
