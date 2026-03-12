---
description: Começando com L76-L GNSS para XIAO
title: L76-L GNSS para XIAO
keywords:
  - gps
  - gnss
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /gnss_for_xiao
last_update:
  date: 10/09/2023
  author: Stephen Lo
createdAt: '2023-10-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/gnss_for_xiao/
---

# L76-L GNSS para XIAO

:::danger
Este produto está em espera.
:::

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/Longan-Labs/XIAO_GPS/main/IMG/back.png" alt="pir" width={250} height="auto" /></p>

Bem-vindo ao L76-L GNSS para XIAO - a mais recente adição à linha de produtos XIAO da Seeed Studio. Este módulo GNSS não só oferece capacidades de posicionamento preciso para seus projetos, como sua integração perfeita com o controlador principal XIAO o torna uma ferramenta poderosa. Quer você esteja projetando uma aplicação móvel, um dispositivo de rastreamento ou simplesmente deseje adicionar recursos de geolocalização ao seu projeto, este módulo é a escolha ideal.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/pt-br/gnss_for_xiao" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introdução

### Recursos

- Suporte a Múltiplas Constelações: Suporta GPS, GLONASS, Galileo e QZSS.
- Alto Desempenho: Equipado com 33 canais de rastreamento, 99 canais de aquisição e 210 canais PRN.
- Compatibilidade com XIAO: Projetado para integração perfeita com o controlador principal XIAO.
- Conectividade Flexível: Além da conexão com o XIAO, também fornece pads como VCC, GND para aplicações mais amplas.

### Especificação

- Tipo de GNSS: L76-L
- Sistemas de Satélite Suportados: GPS, GLONASS, Galileo e QZSS.
- Porta de Conexão: Feita sob medida para XIAO.
- Porta de Conexão para XIAO: D2/D3(TX/RX)
- Pads Adicionais: VCC, GND, TX, RX

### Aplicações

- Aplicações Móveis: Forneça capacidades precisas de geolocalização para seus apps móveis.
- Dispositivos de Rastreamento: Projete e construa dispositivos de localização e rastreamento.
- Recursos de Geolocalização: Adicione capacidades de geolocalização aos seus projetos.

## Primeiros Passos

Bem-vindo ao guia de início rápido do L76-L GNSS para XIAO. Este guia tem como objetivo ajudar você a configurar e começar a usar sua nova placa de expansão GPS em conjunto com o controlador principal XIAO nRF52840.

### Preparação de Hardware

#### Soldando os Headers

Ao receber seu produto, será necessário fazer algumas soldagens. Fornecemos dois headers de pinos no pacote. Você precisará soldar esses headers na placa de expansão.

#### Conectando o XIAO à Placa de Expansão

Após concluir a soldagem, você pode prosseguir para conectar a placa de expansão ao controlador principal XIAO.

### Preparação de Software

#### EspSoftwareSerial (Somente para a série XIAO ESP32)

Se você estiver usando a série XIAO ESP32 como master, talvez precise baixar separadamente a biblioteca para a porta serial por software.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://www.arduino.cc/reference/en/libraries/espsoftwareserial/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Você pode buscar e instalar a biblioteca `EspSoftwareSerial` diretamente pelo Library Manager na Arduino IDE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/gnss-xiao/1.png" style={{width:400, height:'auto'}}/></div>

:::note
Se você estiver usando outra série de XIAO, então não precisa baixar separadamente a biblioteca para a porta serial por software.
:::

#### TinyGPSPlus

Também precisamos de uma biblioteca para analisar as mensagens de dados de GPS relatadas pela placa de expansão. Você pode baixar esta biblioteca **TinyGPSPlus** clicando no botão abaixo.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://www.arduino.cc/reference/en/libraries/tinygpsplus/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Você pode buscar e instalar a biblioteca `TinyGPSPlus` diretamente pelo Library Manager na Arduino IDE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/gnss-xiao/2.png" style={{width:400, height:'auto'}}/></div>

## Exemplo com XIAO nRF52840

O módulo L76-L envia informações de GPS pela porta serial a cada 1 segundo. Neste exemplo, imprimimos o conteúdo recebido da porta serial. Você poderá ver muitas informações, incluindo hora, satélites, bem como latitude e longitude. Aqui está o código.

```cpp
#include <TinyGPSPlus.h>
#include <SoftwareSerial.h>

static const int RXPin = D3, TXPin = D2;
static const uint32_t GPSBaud = 9600;

// The TinyGPSPlus object
TinyGPSPlus gps;

// The serial connection to the GPS device
SoftwareSerial ss(RXPin, TXPin);

void setup()
{
    Serial.begin(115200);
    ss.begin(GPSBaud);

    Serial.println(F("DeviceExample.ino"));
    Serial.println(F("A simple demonstration of TinyGPSPlus with an attached GPS module"));
    Serial.print(F("Testing TinyGPSPlus library v. ")); Serial.println(TinyGPSPlus::libraryVersion());
    Serial.println(F("by Mikal Hart"));
    Serial.println();
}

void loop()
{
    // This sketch displays information every time a new sentence is correctly encoded.
    while (ss.available() > 0)
    if (gps.encode(ss.read()))
    displayInfo();

    if (millis() > 5000 && gps.charsProcessed() < 10)
    {
        Serial.println(F("No GPS detected: check wiring."));
        while(true);
    }
}

void displayInfo()
{
    Serial.print(F("Location: "));
    if (gps.location.isValid())
    {
        Serial.print(gps.location.lat(), 6);
        Serial.print(F(","));
        Serial.print(gps.location.lng(), 6);
    }
    else
    {
        Serial.print(F("INVALID"));
    }

    Serial.print(F("  Date/Time: "));
    if (gps.date.isValid())
    {
        Serial.print(gps.date.month());
        Serial.print(F("/"));
        Serial.print(gps.date.day());
        Serial.print(F("/"));
        Serial.print(gps.date.year());
    }
    else
    {
        Serial.print(F("INVALID"));
    }

    Serial.print(F(" "));
    if (gps.time.isValid())
    {
        if (gps.time.hour() < 10) Serial.print(F("0"));
        Serial.print(gps.time.hour());
        Serial.print(F(":"));
        if (gps.time.minute() < 10) Serial.print(F("0"));
        Serial.print(gps.time.minute());
        Serial.print(F(":"));
        if (gps.time.second() < 10) Serial.print(F("0"));
        Serial.print(gps.time.second());
        Serial.print(F("."));
        if (gps.time.centisecond() < 10) Serial.print(F("0"));
        Serial.print(gps.time.centisecond());
    }
    else
    {
        Serial.print(F("INVALID"));
    }

    Serial.println();
}
```

Certifique-se de que o módulo GPS seja usado em um local mais aberto para que ele possa obter um bom sinal de GPS. Com um bom sinal de GPS, em até cinco minutos, a porta serial exibirá as informações de latitude, longitude e hora retornadas pelo módulo GPS.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/gnss-xiao/3.png" style={{width:700, height:'auto'}}/></div>

## Funcionamento sem XIAO

Se você desejar utilizar o módulo GPS com outros microcontroladores, eles podem usar os quatro pads de solda disponíveis na placa de circuito: 3V, GND, TX e RX.

Conectando esses pads aos pinos correspondentes do microcontrolador desejado, o módulo L76-L pode ser integrado e operado sem o XIAO. Certifique-se de consultar a documentação específica do microcontrolador para as devidas configurações e conexões de pinos.

|Módulo L76-L|Outros MCU|
|------------|----------|
|3V|3.3V|
|GND|GND|
|TX|RX|
|RX|TX|

## Recursos

- **[Zip]** [Arquivo Eagle](https://files.seeedstudio.com/wiki/gnss-xiao/XIAO_GPS_SCH&PCB.zip)
- **[PDF]** [Datasheet - L76-L](https://files.seeedstudio.com/wiki/gnss-xiao/L76-L_doc.zip)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
