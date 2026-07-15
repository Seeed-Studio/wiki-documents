---
title: Platform IO com Seeed Studio XIAO ESP32-C5
description: ''
keywords:
  - xiao
  - esp32c5
  - platformio
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_start.webp
slug: /xiao_esp32c5_with_platformio
last_update:
  date: 12/18/2025
  author: Zeller
createdAt: '2025-12-15'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_with_platformio/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_started.png" style={{width:800, height:'auto'}}/></div>

## Introdução ao [PlatformIO](https://platformio.org/)

PlatformIO é um poderoso e altamente extensível ecossistema de desenvolvimento projetado para sistemas embarcados. Ele integra de forma transparente o suporte a uma ampla variedade de placas de desenvolvimento e microcontroladores, oferecendo flexibilidade incomparável. O que diferencia o PlatformIO é sua notável escalabilidade: mesmo que sua placa específica não seja suportada nativamente, sua arquitetura permite definições de placa personalizadas de forma simples.

De forma crucial, o PlatformIO faz a ponte para desenvolvedores familiarizados com Arduino, permitindo a compilação e o envio de código no estilo Arduino simplesmente incluindo as bibliotecas relevantes.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://platformio.org/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Saiba Mais 🖱️</font></span></strong></a>
</div>

## Usar PlatformIO para XIAO ESP32-C5

Em seguida, faremos o desenvolvimento para o XIAO ESP32-C5 com base no PlatformIO, ajudando você a explorar o fluxo de trabalho de desenvolvimento do PlatformIO.

### Preparação de Hardware

Você precisa preparar um **XIAO ESP32-C5** com antecedência.

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira o Seu Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Baixar o VS Code

Baixe de acordo com o sistema que você está usando o [VS Code](https://code.visualstudio.com/download)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### Instalar o PlatformIO

Abra o VSCode, clique em Extensions, depois procure por PlatformIO e selecione para instalar. Após a conclusão da instalação, reinicie o VSCode.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>

### Novo Projeto

- Abra a interface PIO Home e selecione `New Project`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_1.png" style={{width:800, height:'auto'}}/></div><br/>

- Name: Dê um nome ao seu projeto
- Board: Selecione **Seeed Studio XIAO ESP32-C5**
- Framework: Selecione Ardunio
- Location: O caminho dos arquivos do projeto pode ser definido como um caminho personalizado ou você pode selecionar o caminho padrão.
- Clique em **Finish** e aguarde até que a criação seja concluída. Em seguida, abra o arquivo do projeto no workspace.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_1.png" style={{width:800, height:'auto'}}/></div>

Se você quiser modificá-lo com base em outro projeto PlatformIO, também pode consultar diretamente a configuração abaixo.

- platfromio.ini

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
monitor_speed = 115200
```

### Exemplo de Piscar LED

Neste exemplo de Piscar LED, vamos guiá-lo na compilação e envio de arquivos usando o PlatformIO.

**Etapa 1.** Copie o código de exemplo

```cpp
#include <Arduino.h>

void setup()
{
  // put your setup code here, to run once:
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(115200);
}

void loop()
{
  // put your main code here, to run repeatedly:
  digitalWrite(LED_BUILTIN, LOW);
  Serial.print("LED ON \n");
  delay(1000);
  digitalWrite(LED_BUILTIN, HIGH);
  Serial.print("LED OFF \n");
  delay(1000);
}
```

**Etapa 2.** Compile o projeto

  Clique no ícone ***√*** na barra de status na parte inferior do VS Code para compilar.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_2.png" style={{width:800, height:'auto'}}/></div><br/>

  Se a compilação for bem-sucedida, será exibido conforme mostrado na figura.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_3.png" style={{width:800, height:'auto'}}/></div><br/>

**Etapa 3.** Upload

  Clique no ícone **→** na barra de status na parte inferior do VS Code para fazer o upload.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_3_1.png" style={{width:800, height:'auto'}}/></div><br/>

**Etapa 4.** Verifique o Efeito do Programa

Abra o Serial Monitor como mostrado na figura abaixo. Ele imprimirá o status ligado/desligado do LED em intervalos de 1 segundo.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_4.png" style={{width:800, height:'auto'}}/></div><br/>

O LED piscará no mesmo intervalo de 1 segundo.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:400, height:'auto'}}/></div><br/>

### Exemplo de Conexão Wi-Fi de 5 GHz

XIAO ESP-C5 suporta Wi-Fi 6 de banda dupla 2,4 GHz e 5 GHz. Este exemplo demonstrará o efeito de se conectar a uma rede Wi-Fi de 5 GHz.<br/>

Copie o código a seguir para o seu projeto PlatformIO.
<details>

<summary> Código de Referência para Conexão WiFi </summary>

```cpp
#include <Arduino.h>
#include <WiFi.h>

// ----------------------------------------------------------------
// Modify your WiFi SSID and Password here
// ----------------------------------------------------------------
const char* ssid     = "YOUR_WIFI_SSID";      // e.g., "MyHomeWiFi"
const char* password = "YOUR_WIFI_PASSWORD";  // e.g., "12345678"

void setup() {
  // Initialize serial communication at 115200 baud
  Serial.begin(115200);
  delay(5000); // Wait for serial to stabilize

  Serial.println("\nStarting ESP32 WiFi Connection Demo...");

  // 1. Set WiFi mode to Station (connect to a router as a client)
  WiFi.mode(WIFI_STA);

  // 2. Start connection
  Serial.printf("Connecting to SSID: %s ", ssid);
  WiFi.begin(ssid, password);

  // 3. Wait for connection to be established
  // This loop waits until the status becomes WL_CONNECTED
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  // ----------------------------------------------------------------
  // Connection successful, print detailed information
  // ----------------------------------------------------------------
  Serial.println("\n\n---------------------------------------");
  Serial.println("WiFi Connected Successfully!");
  Serial.println("---------------------------------------");

  // Print IP Address
  Serial.print("IPv4 Address:   ");
  Serial.println(WiFi.localIP());

  // Print Signal Strength (RSSI)
  // Unit is dBm, usually between -30 (Excellent) and -90 (Unusable)
  long rssi = WiFi.RSSI();
  Serial.print("Signal (RSSI):  ");
  Serial.print(rssi);
  Serial.println(" dBm");

  // Simple signal quality check based on RSSI value
  Serial.print("Signal Quality: ");
  if(rssi > -50) Serial.println("Excellent");
  else if(rssi > -60) Serial.println("Good");
  else if(rssi > -70) Serial.println("Fair");
  else if(rssi > -80) Serial.println("Weak");
  else Serial.println("Unstable/Very Poor");

  // Print MAC Address (Hardware ID)
  Serial.print("MAC Address:    ");
  Serial.println(WiFi.macAddress());

  // Print Gateway IP
  Serial.print("Gateway IP:     ");
  Serial.println(WiFi.gatewayIP());

  Serial.println("---------------------------------------");
}

void loop() {
  // In the main loop, we can periodically check the connection status
  // If the connection is lost, attempt to reconnect

  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("WiFi Connection Lost! Reconnecting...");
    WiFi.disconnect();
    WiFi.reconnect();
    delay(5000); // Wait a bit before checking again to avoid spamming
  }

  // Your other application logic goes here
  // ...

  delay(10000); // Loop every 10 seconds
}
```

</details>

Compile e envie o código<br/>

Quando o XIAO ESP32-C5 estiver conectado ao WiFi, o Serial Monitor imprimirá informações como a intensidade do sinal da rede WiFi conectada.<br/>
Também é possível ver claramente que o XIAO ESP32-C5 tem uma forte capacidade de conexão a redes Wi-Fi de 5 GHz.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_5_1.png" style={{width:600, height:'auto'}}/></div><br/>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_6.png" style={{width:600, height:'auto'}}/></div><br/>

Seguindo os dois exemplos acima, você já deve ter dominado as operações básicas de desenvolvimento com o PlatformIO. Estamos ansiosos para ver você criar projetos ainda mais interessantes com o XIAO ESP32-C5!

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
