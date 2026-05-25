---
title: Quectel L76K
description: Primeiros passos com o Módulo L76K GNSS para XIAO
keywords:
  - XIAO
  - Quectel L76K
  - GNSS
image: https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg
slug: /get_start_l76k_gnss
sku: 109100021
sidebar_position: 0
last_update:
  date: 2024-10-14T00:00:00.000Z
  author: Spencer
createdAt: '2024-01-19'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/get_start_l76k_gnss/
---

# Primeiros passos com o Módulo L76K GNSS para SeeedStudio XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre agora 🖱️</font></span></strong>
    </a>
</div>

<!-- TODO Add bazaar link -->

## Introdução

O Módulo L76K GNSS para SeeedStudio XIAO é um módulo Multi-GNSS (Global Navigation Satellite System) compatível com todas as placas de desenvolvimento XIAO, que suporta os sistemas GPS, BeiDou (BDS), GLONASS e QZSS, permitindo posicionamento combinado de múltiplos sistemas ou posicionamento independente de um único sistema. Ele também suporta a função AGNSS, possui amplificador de baixo ruído embutido e filtro de superfície acústica, e oferece uma boa experiência de posicionamento rápido, preciso e de alto desempenho.

O módulo vem com uma antena GNSS ativa de alto desempenho projetada para cobrir as bandas GPS L1 C/A, BeiDou B1 e GLONASS L1. O design também possui um pequeno LED verde brilhante para indicar a saída 1PPS quando o sinal é fixado.

### Recursos

- **Recepção aprimorada:** Amplificador de baixo ruído embutido e filtro de onda acústica de superfície para melhor sensibilidade e redução de ruído
- **Alta precisão:** 32/72 canais, -162dBm de rastreamento, -160dBm de sensibilidade de reaquisição
- **Eficiência energética**: 41mA em rastreamento/aquisição, 360µA em modo de espera
- **Sistemas Multi-GNSS**: Alimentado pelo Quectel L76K, suportando GPS, BeiDou, GLONASS e QZSS
- **Antena cerâmica:** Recepção de sinal aprimorada, superior às antenas tradicionais.

### Especificação

<div class="table-center">
<table align="center">
 <tr>
     <th>Item</th>
     <th>Detalhe</th>
 </tr>
 <tr>
     <th>Bandas GNSS</th>
     <td>GPS L1 C/A: 1575.42MHz<br></br> GLONASS L1: 1602MHz<br></br> BeiDou B1: 1561.098MHz</td>
 </tr>
 <tr>
     <th>Canais</th>
     <td>32 canais de rastreamento / 72 canais de aquisição</td>
 </tr>
  <tr>
     <th>TTFF (Time To First Fix)</th>
     <td>Cold Starts: 30s (sem AGNSS), 5.5s (com GNSS)<br></br> Hot Starts: 5.5s (sem AGNSS), 2s (com AGNSS)</td>
 </tr>
  <tr>
     <th>Sensibilidade</th>
     <td>Auto-aquisição: -148dBm<br></br> Rastreamento: -162dBm<br></br> Reaquisição: -160dBm</td>
 </tr>
  <tr>
     <th>Precisão</th>
     <td>Posição: 2.0m CEP<br></br> Velocidade: 0.1m/s<br></br> Aceleração: 0.1m/s²<br></br> Temporização: 30ns</td>
 </tr>
  <tr>
     <th>Interface UART</th>
     <td>Taxa de baud: 9600~115200bps (9600bps padrão)<br></br> Taxa de atualização: 1Hz (padrão), 5Hz (máx.)<br></br> Protocolo: NMEA 0183, protocolo proprietário CASIC </td>
 </tr>
  <tr>
     <th>Antena</th>
     <td>Tipo: Antena ativa<br></br> Frequência de operação: 1559–1606MHz<br></br> Cabo coaxial: RF1.13 Comprimento = 10cm<br></br> Conector do cabo: U.FL Plug RA </td>
 </tr>
  <tr>
     <th>Consumo de corrente (com antena ativa)</th>
     <td>Auto-aquisição: 41mA<br></br> Rastreamento: 41mA<br></br> Modo de espera: 360uA </td>
 </tr>
  <tr>
     <th>Dimensão</th>
     <td>18mm x 21mm</td>
 </tr>
</table>
</div>

## Visão geral do hardware

Antes de começarmos, podemos consultar as imagens a seguir para entender o design dos pinos do Módulo L76K GNSS para SeeedStudio XIAO a fim de facilitar nossa compreensão da função do módulo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/L76K_GNSS_Module_for_XIAO_Pinout_V1.1.png" style={{width:800, height:'auto'}}/></div>

## Primeiros passos

### Preparação de hardware

Para experimentar totalmente os recursos do Módulo L76K GNSS, recomendamos emparelhá-lo com uma placa-mãe da nossa série XIAO. *Qualquer um dos seguintes modelos XIAO* seria compatível para uso com o Módulo L76K GNSS.

<table align="center">
 <tr>
  <th>Seeed Studio XIAO SAMD21</th>
  <th>Seeed Studio XIAO RP2040</th>
  <th>Seeed Studio XIAO nRF52840 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C3</th>
     <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre agora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre agora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre agora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre agora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Antes de usar este módulo em uma placa-mãe XIAO, você precisa instalar os soquetes de cabeçalho no módulo e conectar a antena GNSS ativa ao módulo. Ao conectar ao XIAO, preste atenção especial à direção de instalação do módulo, não o conecte ao contrário, caso contrário há grande chance de queimar o módulo ou o XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-xiao-assembled.png" style={{width:500, height:'auto'}}/></div>

:::caution
Por favor, preste atenção especial à direção de instalação do módulo, não o conecte ao contrário, caso contrário há grande chance de queimar o módulo ou o XIAO.
:::

### Preparação de software

Para usar o Módulo L76K GNSS para SeeedStudio XIAO, precisamos programar a série XIAO. A ferramenta de programação recomendada é o Arduino IDE, e você precisa configurar o ambiente Arduino para o XIAO e adicionar o pacote da placa.

:::tip
Se esta é sua primeira vez usando o Arduino, recomendamos fortemente que você consulte [Primeiros passos com Arduino](/pt-br/Getting_Started_with_Arduino/).
:::

#### Passo 1. Baixe e instale a versão estável do Arduino IDE de acordo com o seu sistema operacional

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

#### Passo 2. Inicie o aplicativo Arduino

#### Passo 3. Configure o Arduino IDE para o XIAO que você está usando

- Se você quiser usar o **Seeed Studio XIAO SAMD21** para as rotinas posteriores, consulte **[este tutorial](/pt-br/Seeeduino-XIAO/#software)** para concluir a adição.

- Se você quiser usar o **Seeed Studio XIAO RP2040** para as rotinas posteriores, consulte **[este tutorial](/pt-br/XIAO-RP2040-with-Arduino/#software-setup)** para concluir a adição.

- Se você quiser usar o **Seeed Studio XIAO nRF52840** para as rotinas posteriores, consulte **[este tutorial](/pt-br/XIAO_BLE/#software-setup)** para concluir a adição.

- Se você quiser usar o **Seeed Studio XIAO ESP32C3** para as rotinas posteriores, consulte **[este tutorial](/pt-br/XIAO_ESP32C3_Getting_Started#software-setup)** para concluir a adição.

- Se você quiser usar o **Seeed Studio XIAO ESP32S3** para as rotinas posteriores, consulte **[este tutorial](/pt-br/xiao_esp32s3_getting_started#preparação-de-software)** para concluir a adição.

#### Passo 4. Adicione a biblioteca TinyGPSPlus ao Arduino

Primeiro, você precisa pesquisar e baixar a versão mais recente da biblioteca **TinyGPSPlus** no Arduino IDE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/installing-tinygpsplus.png" style={{width:800, height:'auto'}}/></div>

## Demonstração de aplicação

### Exemplo 1: Leitura e exibição de dados GNSS

Quando o hardware e o software estiverem prontos, começamos a enviar nosso primeiro programa de exemplo. O Módulo L76K GNSS imprime as informações GNSS pela porta serial a cada 1 segundo após a energização. Neste exemplo, usaremos a biblioteca **TinyGPSPlus** para analisar as sentenças NMEA recebidas do módulo e imprimir os resultados, incluindo altitude, longitude e hora, no Monitor Serial do Arduino IDE.

Aqui está o código-fonte:

```cpp
#include <TinyGPSPlus.h>
#include <SoftwareSerial.h>
/*
   This sample sketch demonstrates how to use L76K GNSS Module on SeeedStudio XIAO.
*/
static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;

// The TinyGPSPlus object
TinyGPSPlus gps;

// The serial connection to the GNSS module
SoftwareSerial ss(RXPin, TXPin);

void setup() {
  Serial.begin(115200);
#ifdef ARDUINO_SEEED_XIAO_RP2040
  pinMode(D2,OUTPUT);
  digitalWrite(D2,1);
  pinMode(D0,OUTPUT);
  digitalWrite(D0,1);
#endif
  ss.begin(GPSBaud);

  Serial.println(F("DeviceExample.ino"));
  Serial.println(F("A simple demonstration of TinyGPSPlus with L76K GNSS Module"));
  Serial.print(F("Testing TinyGPSPlus library v. "));
  Serial.println(TinyGPSPlus::libraryVersion());
  Serial.println(F("by Mikal Hart"));
  Serial.println();
}

void loop() {
  // This sketch displays information every time a new sentence is correctly encoded.
  while (ss.available() > 0)
    if (gps.encode(ss.read()))
      displayInfo();

  if (millis() > 5000 && gps.charsProcessed() < 10) {
    Serial.println(F("No GPS detected: check wiring."));
    while (true);
  }
}

void displayInfo() {
  Serial.print(F("Location: "));
  if (gps.location.isValid()) {
    Serial.print(gps.location.lat(), 6);
    Serial.print(F(","));
    Serial.print(gps.location.lng(), 6);
  } else {
    Serial.print(F("INVALID"));
  }

  Serial.print(F("  Date/Time: "));
  if (gps.date.isValid()) {
    Serial.print(gps.date.month());
    Serial.print(F("/"));
    Serial.print(gps.date.day());
    Serial.print(F("/"));
    Serial.print(gps.date.year());
  } else {
    Serial.print(F("INVALID"));
  }

  Serial.print(F(" "));
  if (gps.time.isValid()) {
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
  } else {
    Serial.print(F("INVALID"));
  }

  Serial.println();
}
```

Basta selecionar o XIAO que você está usando e o número da porta onde o XIAO está localizado, compilar e fazer o upload.

Certifique-se de que o Módulo GNSS L76K esteja colocado ao ar livre, onde bons sinais GNSS possam ser recebidos. Envie o código para o seu XIAO e aguarde alguns minutos; você deverá ver as informações exibidas no monitor serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-output.png" style={{width:800, height:'auto'}}/></div>

Este código usa a biblioteca TinyGPSPlus para ler dados do módulo GNSS L76K via conexão serial e exibir informações válidas de localização e data/hora no monitor serial.

<!-- PCN(May 25, 2025): Considering the scenario of power saving, we removed the fix status indicator. Therefore, hide the following LED demo.

## Configuração

### Exemplo 1: Alterar o comportamento do LED

Esta seção demonstra como controlar um LED verde usando Arduino enviando comandos hexadecimais específicos por meio de comunicação serial. O exemplo abaixo mostra como desligar o LED e depois retorná-lo ao seu estado normal de piscar.

```cpp
static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;
SoftwareSerial SerialGNSS(RXPin, TXPin);

void setup() {
  SerialGNSS.begin(GPSBaud);

  // Define the byte array to turn the LED off
  byte OffState[] = {0xBA, 0xCE, 0x10, 0x00, 0x06, 0x03, 0x40, 
                     0x42, 0x0F, 0x00, 0xA0, 0x86, 0x01, 0x00, 
                     // highlight-start
                     0x00, 
                     // highlight-end
                     0x00, 0x01, 0x05, 0x00, 0x00, 0x00, 0x00, 
                     // highlight-start
                     0xF0, 
                    // highlight-end
                     0xC8, 0x17, 0x08};

  // Define the byte array to recover the LED blinking state
  byte RecoverState[] = {0xBA, 0xCE, 0x10, 0x00, 0x06, 0x03, 0x40, 
                         0x42, 0x0F, 0x00, 0xA0, 0x86, 0x01, 0x00, 
                         // highlight-start
                         0x03, 
                         // highlight-end
                         0x00, 0x01, 0x05, 0x00, 0x00, 0x00, 0x00,
                         // highlight-start
                         0xF3, 
                         // highlight-end
                         0xC8, 0x17, 0x08};

  // Send the command to turn off the LED.
  SerialGNSS.write(OffState, sizeof(OffState));
  // Wait for 5 seconds.
  delay(5000);
  // Send the command to return the LED to blinking.
  SerialGNSS.write(RecoverState, sizeof(RecoverState));
}

void loop() {}
```

:::info
Para mais detalhes, consulte CASIC Protocol Messages of Quectel_L76K_GNSS.

```c
struct CASIC_Messages {  
  uint16_t header; // 0xBA, 0xCE
  uint16_t len;    // 0x10, 0x00
  uint8_t class;   // 0x06
  uint8_t id;      // 0x03
  uint8_t* payload; // 0x40, 0x42, 0x0F, 0x00, 0xA0, 0x86, 0x01, 0x00, ->8
                   // 0x00, 0x00, 0x01, 0x05, 0x00, 0x00, 0x00, 0x00, ->8
  uint8_t checksum; // 0xF0,0xC8, 0x17, 0x08
} L76KStruct;
```

::: -->

## Recursos

- **PDF**: [L76K GNSS Module for Seeed Studio XIAO Schematic](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/109100021-L76K-GNSS-Module-for-Seeed-Studio-XIAO-Schematic.pdf)
- **PDF**: [Quectel_L76K_GNSS_协议规范_V1.0](https://raw.githubusercontent.com/Seeed-Projects/Seeed_L76K-GNSS_for_XIAO/fb74b715224e0ac153c3884e578ee8e024ed8946/docs/Quectel_L76K_GNSS_协议规范_V1.0.pdf)
- **PDF**: [Quectel_L76K_GNSS_Protocol_Specification_V1.1](https://raw.githubusercontent.com/Seeed-Projects/Seeed_L76K-GNSS_for_XIAO/fb74b715224e0ac153c3884e578ee8e024ed8946/docs/Quectel_L76K_GNSS_Protocol_Specification_V1.1.pdf)
- **GitHub**: [Seeed_L76K-GNSS_for_XIAO](https://github.com/Seeed-Projects/Seeed_L76K-GNSS_for_XIAO)

## Solução de Problemas

<details>
<summary>A célula recarregável pode alimentar o XIAO?</summary>
Não, a célula recarregável neste contexto é usada somente para o Relógio de Tempo Real (RTC) e para manter um estado de inicialização rápida (warm start) no Módulo GNSS L76K. Ela não pode ser usada como fonte de alimentação principal para o XIAO nem para as operações gerais do módulo GNSS.
</details>

<details>
<summary>Por que as informações GNSS não são exibidas no monitor serial?</summary>

Certifique-se de que o Módulo GNSS L76K esteja colocado ao ar livre, onde bons sinais GNSS possam ser recebidos.
</details>

<details>
<summary>Por que a luz verde do dispositivo permanece acesa constantemente quando conectada ao XIAO RP2040?</summary>
Para resolver esse problema, você precisa puxar D0 e D2 para nível alto. A iluminação constante da luz verde de fix indica que o dispositivo entrou em um estado de funcionamento anormal.

```cpp
pinMode(D2,OUTPUT);
digitalWrite(D2,1);
pinMode(D0,OUTPUT);
digitalWrite(D0,1);
```

</details>

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
