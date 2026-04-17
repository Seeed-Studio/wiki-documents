---
description: Exemplo XIAO MG24 - Matter
title: Seeed Studio XIAO MG24 Exemplo - Matter
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg
slug: /xiao_mg24_matter
sidebar_position: 2
last_update:
  date: 11/07/2024
  author: Spencer
createdAt: '2024-11-07'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao_mg24_matter/
---

## Introdução

Matter é um **padrão unificado e de código aberto** para tecnologia de casa inteligente que promove a interoperabilidade entre dispositivos e ecossistemas. Desenvolvido pela Connectivity Standards Alliance (CSA), ele permite comunicação perfeita entre dispositivos de vários fabricantes sem exigir conectividade com a internet. Matter oferece compatibilidade nativa com plataformas como Apple HomeKit, Google Home e Amazon Alexa, facilitando a integração de dispositivos em configurações de casa inteligente. Para um entendimento mais profundo sobre Matter, consulte a [documentação oficial do Matter](https://project-chip.github.io/connectedhomeip-doc/index.html).

> Em 2024[^1], a Silicon Labs e a Arduino uniram forças para reduzir as barreiras de adoção do Matter, fornecendo um caminho de desenvolvimento que simplifica o uso de Matter com o ecossistema Arduino. Essa colaboração tem como objetivo tornar o desenvolvimento com Matter mais acessível, ajudando desenvolvedores Arduino a superar desafios típicos e adotar Matter sem dificuldades.

[^1]: [Silicon Labs and Arduino Partner to Democratize Matter - Feb 6, 2024](https://news.silabs.com/2024-02-06-Silicon-Labs-and-Arduino-Partner-to-Democratize-Matter)

Matter opera de forma eficiente em redes locais, oferecendo comunicação confiável e de baixa latência sem necessidade de acesso à internet. Esse recurso melhora significativamente tanto a segurança quanto o desempenho dos dispositivos.

Esta documentação o guiará pelos passos para desenvolver um aplicativo Matter no XIAO MG24 usando Arduino.

## Pré-requisitos

Para começar a desenvolver um aplicativo Matter no XIAO MG24, certifique-se de que os seguintes componentes de hardware e software estejam preparados e prontos.

### Hardware

- Placa **Seeed Studio XIAO MG24**.
- **Hub Matter compatível** (por exemplo, Apple HomePod mini) para se conectar à rede Matter.
- **Controlador Matter** (por exemplo, app Apple HomeKit) para gerenciar e interagir com o seu dispositivo compatível com Matter.

A tabela a seguir[^2] fornece exemplos de hubs compatíveis com Matter em vários ecossistemas:

| Fabricante / Ecossistema | Dispositivo                |
| ------------------------ | -------------------------- |
| Google Home              | Nest Hub Gen2              |
| Apple HomeKit            | HomePod Gen2, HomePod mini |
| Amazon Alexa             | Echo Gen4                  |
| Raspberry Pi OTBR        | Raspberry Pi               |

Por padrão, presume-se que você tenha pelo menos um [Matter Hub](https://en.wikipedia.org/wiki/Matter_(standard)#Supported_ecosystems_and_hubs) e um Matter Controller (por exemplo, um iPhone com HomeKit instalado) prontos para teste.

[^2]: [README - Arduino Matter library](https://github.com/SiliconLabs/arduino/blob/main/libraries/Matter/readme.md)

### Software

O software necessário inclui a **IDE Arduino com o Arduino Core da Silicon Labs**:

- Se ainda não estiver instalado, baixe e configure o [Silicon Labs Arduino Core](https://github.com/SiliconLabs/arduino) para compatibilidade com o XIAO MG24.
- Para instruções detalhadas de configuração, consulte o [Guia de Primeiros Passos](/pt-br/xiao_mg24_getting_started/#add-board).

Certifique-se de optar pela pilha do protocolo Matter:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-arduino-tool-option.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

## Início Rápido com o Exemplo de Lâmpada Matter

O [Exemplo de Lâmpada Matter](https://github.com/Silabs/arduino-matter/tree/main/examples/MatterLightBulb) demonstra um aplicativo Matter simples, permitindo o controle do `built-in LED` via uma rede Matter. Este exemplo serve como um ponto de partida prático para desenvolvedores iniciantes na integração do Matter no XIAO MG24.

Para acessar o exemplo na IDE Arduino:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-bulb-example.png" style={{width:480, height:'auto', "border-radius": '12.8px'}}/></div>

Para conveniência, são fornecidas abaixo modificações no nome do dispositivo no código de exemplo para permitir uma configuração personalizada.

```cpp
/*
   Matter lightbulb example

   The example shows how to create a simple on/off lightbulb with the Arduino Matter API.

   The example lets users control the onboard LED through Matter.
   The device has to be commissioned to a Matter hub first.

   Author: Tamas Jozsi (Silicon Labs)
   Modified by: Spencer Y (Seeed Studio)
 */
#include <Matter.h>
#include <MatterLightbulb.h>

MatterLightbulb matter_bulb;

void setup()
{
  Serial.begin(115200);
  Matter.begin();
  matter_bulb.begin();

  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);

  Serial.println("Matter lightbulb");

  matter_bulb.set_device_name("XIAO MG24 bulb");    // Customize the default device name
  matter_bulb.set_vendor_name("Seeed Studio");      // Set the vendor name
  matter_bulb.set_product_name("Seeed Matter Lightbulb"); // Define the product name

  if (!Matter.isDeviceCommissioned()) {
    Serial.println("Matter device is not commissioned");
    Serial.println("Commission it to your Matter hub with the manual pairing code or QR code");
    Serial.printf("Manual pairing code: %s\n", Matter.getManualPairingCode().c_str());
    Serial.printf("QR code URL: %s\n", Matter.getOnboardingQRCodeUrl().c_str());
  }
  while (!Matter.isDeviceCommissioned()) {
    delay(200);
  }

  Serial.println("Waiting for Thread network...");
  while (!Matter.isDeviceThreadConnected()) {
    delay(200);
  }
  Serial.println("Connected to Thread network");

  Serial.println("Waiting for Matter device discovery...");
  while (!matter_bulb.is_online()) {
    delay(200);
  }
  Serial.println("Matter device is now online");
}

void loop()
{
  static bool matter_lightbulb_last_state = false;
  bool matter_lightbulb_current_state = matter_bulb.get_onoff();

  // Turn on the LED if the state is ON and the previous state was OFF
  if (matter_lightbulb_current_state && !matter_lightbulb_last_state) {
    matter_lightbulb_last_state = matter_lightbulb_current_state;
    digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
    Serial.println("Bulb ON");
  }

  // Turn off the LED if the state is OFF and the previous state was ON
  if (!matter_lightbulb_current_state && matter_lightbulb_last_state) {
    matter_lightbulb_last_state = matter_lightbulb_current_state;
    digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
    Serial.println("Bulb OFF");
  }
}
```

### Gravação do Firmware

1. Copie o código para a IDE Arduino e faça o upload para a placa XIAO MG24.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-lightbulb-flash.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>
2. Após gravar o firmware, pressione o botão `RESET` ou reconecte o XIAO MG24 para reiniciar a placa.
3. Abra o Serial Monitor para confirmar a configuração. Você deverá ver uma saída semelhante a esta:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-qr-url.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

### QR Code para Comissionamento

O Serial Monitor exibirá uma URL para gerar um QR code, necessário para o comissionamento do dispositivo. Copie a URL, cole-a em um navegador e escaneie o QR code resultante com o seu controlador Matter (por exemplo, HomeKit).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-qr-scan.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

### Testando o Dispositivo

Após escanear o QR code, o controlador Matter (HomeKit) solicitará que você confirme a identidade do dispositivo. Uma vez confirmada, o dispositivo ficará visível no app. Agora você pode controlar o LED integrado do XIAO MG24 e testar sua resposta diretamente pela interface do aplicativo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-device-online.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

<div class="video-container">
<iframe
  className="youtube-video-r"
  src="https://youtube.com/embed/tmCpIWuRojQ"
  title="MG24 Matter Lightbulb Example"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  style={{ width: '380px', height: '640px' }}
></iframe>
</div>

## Referências & Recursos

Se você é novo em Matter, os recursos a seguir fornecem conhecimento fundamental e suporte de desenvolvimento para trabalhar dentro do ecossistema Matter:

- **[Guias de Início Rápido](https://docs.silabs.com/matter/2.2.0/matter-fundamentals/)**: Um ponto de partida ideal para aprender os fundamentos de Matter, cobrindo conceitos essenciais e componentes do ecossistema.
- **[Matter Developer Journey](https://www.silabs.com/wireless/matter/matter-developer-journey)**: Um guia abrangente pelo processo de desenvolvimento com Matter, incluindo ferramentas necessárias, recursos e boas práticas para uma implementação eficaz.
- **[Especificações do Matter](https://csa-iot.org/developer-resource/specifications-download-request/)**: Especificações técnicas para o protocolo Matter e seus componentes. Este é o recurso principal para entender as capacidades e detalhes de operação do protocolo.
- **[The Device Data Model - Google Home Developers](https://developers.home.google.com/matter/primer/device-data-model)**: Uma explicação detalhada do modelo de dados do dispositivo, que padroniza como os recursos e capacidades dos dispositivos são representados no ecossistema Matter.
- **[Visão Geral do Framework de Desenvolvimento Matter](/pt-br/matter_development_framework)**: Um guia especificamente voltado para o Matter Development Framework para o XIAO ESP32C6, oferecendo uma abordagem alternativa para o desenvolvimento de dispositivos Matter.

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
