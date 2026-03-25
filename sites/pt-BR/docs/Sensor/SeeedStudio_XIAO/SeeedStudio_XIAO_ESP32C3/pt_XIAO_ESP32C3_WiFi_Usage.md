---
description: Uso de WiFi no Seeed Studio XIAO ESP32C3
title: Uso de WiFi
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO_ESP32C3_WiFi_Usage
last_update:
  date: 07/26/2024
  author: Spencer
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_WiFi_Usage/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Início

O Seeed Studio XIAO ESP32C3 suporta conectividade WiFi com IEEE 802.11b/g/n. Este wiki apresentará os conceitos básicos de uso do WiFi nesta placa.

:::caution atenção
⚠️ Tenha cuidado ao usar a placa como ponto de acesso (hotspot). Ela pode superaquecer e causar queimaduras.
:::

## Configuração de hardware

- **Passo 1.** Conecte a **antena WiFi/Bluetooth** incluída ao **conector IPEX** na placa

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-6.png" alt="pir" width={130} height="auto" /></div>

- **Passo 2.** Conecte o XIAO ESP32C3 ao seu computador via cabo USB Type-C

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" alt="pir" width={120} height="auto" /></div>

## Modo 1: Modo STA (Modo Estação) - Escanear redes WiFi

### Escanear pontos de acesso Wi-Fi

Neste exemplo, vamos usar o XIAO ESP32C3 para escanear redes WiFi disponíveis ao redor dele. Aqui a placa será configurada no Modo Estação (STA).

- **Passo 1.** Copie e cole o código abaixo no Arduino IDE

<Tabs>
  <TabItem value="basic wifi scan" label="Varredura Wi-Fi Básica" default>

```cpp
#include "WiFi.h"

void setup() {
  Serial.begin(115200);

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  Serial.println("Setup done");
}

void loop() {
  Serial.println("scan start");

  // WiFi.scanNetworks will return the number of networks found
  int n = WiFi.scanNetworks();
  Serial.println("scan done");
  if (n == 0) {
    Serial.println("no networks found");
  } else {
    Serial.print(n);
    Serial.println(" networks found");
    for (int i = 0; i < n; ++i) {
      // Print SSID and RSSI for each network found
      Serial.print(i + 1);
      Serial.print(": ");
      Serial.print(WiFi.SSID(i));
      Serial.print(" (");
      Serial.print(WiFi.RSSI(i));
      Serial.print(")");
      Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN) ? " " : "*");
      delay(10);
    }
  }
  Serial.println("");

  // Wait a bit before scanning again
  delay(5000);
}
```

  </TabItem>
  <TabItem value="advan-wifi-scan" label="Varredura Wi-Fi Avançada">

```cpp title="https://github.com/espressif/arduino-esp32/blob/master/libraries/WiFi/examples/WiFiScan/WiFiScan.ino"
/*
 *  This sketch demonstrates how to scan WiFi networks.
 *  The API is based on the Arduino WiFi Shield library, but has significant changes as newer WiFi functions are supported.
 *  E.g. the return value of `encryptionType()` different because more modern encryption is supported.
 */
#include "WiFi.h"

void setup() {
  Serial.begin(115200);

  // Set WiFi to station mode and disconnect from an AP if it was previously connected.
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  Serial.println("Setup done");
}

void loop() {
  Serial.println("Scan start");

  // WiFi.scanNetworks will return the number of networks found.
  int n = WiFi.scanNetworks();
  Serial.println("Scan done");
  if (n == 0) {
    Serial.println("no networks found");
  } else {
    Serial.print(n);
    Serial.println(" networks found");
    Serial.println("Nr | SSID                             | RSSI | CH | Encryption");
    for (int i = 0; i < n; ++i) {
      // Print SSID and RSSI for each network found
      Serial.printf("%2d", i + 1);
      Serial.print(" | ");
      Serial.printf("%-32.32s", WiFi.SSID(i).c_str());
      Serial.print(" | ");
      Serial.printf("%4ld", WiFi.RSSI(i));
      Serial.print(" | ");
      Serial.printf("%2ld", WiFi.channel(i));
      Serial.print(" | ");
      switch (WiFi.encryptionType(i)) {
        case WIFI_AUTH_OPEN:            Serial.print("open"); break;
        case WIFI_AUTH_WEP:             Serial.print("WEP"); break;
        case WIFI_AUTH_WPA_PSK:         Serial.print("WPA"); break;
        case WIFI_AUTH_WPA2_PSK:        Serial.print("WPA2"); break;
        case WIFI_AUTH_WPA_WPA2_PSK:    Serial.print("WPA+WPA2"); break;
        case WIFI_AUTH_WPA2_ENTERPRISE: Serial.print("WPA2-EAP"); break;
        case WIFI_AUTH_WPA3_PSK:        Serial.print("WPA3"); break;
        case WIFI_AUTH_WPA2_WPA3_PSK:   Serial.print("WPA2+WPA3"); break;
        case WIFI_AUTH_WAPI_PSK:        Serial.print("WAPI"); break;
        default:                        Serial.print("unknown");
      }
      Serial.println();
      delay(10);
    }
  }
  Serial.println("");

  // Delete the scan result to free memory for code below.
  WiFi.scanDelete();

  // Wait a bit before scanning again.
  delay(5000);
}
```

  </TabItem>
</Tabs>

**Passo 2.** Faça o upload do código e abra o Monitor Serial para começar a escanear redes WiFi

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-1.jpg" alt="pir" width={500} height="auto" /></div>

### Conectar a uma rede WiFi

Neste exemplo, vamos usar o XIAO ESP32C3 para conectar a uma rede WiFi.

- **Passo 1.** Copie e cole o código abaixo no Arduino IDE

<Tabs>
  <TabItem value="basic wifi connect" label="Conexão Wi-Fi Básica" default>

```cpp
#include <WiFi.h>

const char* ssid = "your-ssid";
const char* password = "your-password";

void setup() {
  Serial.begin(115200);
  delay(10);

  // We start by connecting to a WiFi network
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}
void loop() {}
```

  </TabItem>
  <TabItem value="advan-wifi-connect" label="Conexão Wi-Fi Avançada">

```cpp title="https://github.com/espressif/arduino-esp32/blob/master/libraries/WiFi/examples/WiFiClientConnect/WiFiClientConnect.ino"
#include <WiFi.h>

const char *ssid = "your-ssid";
const char *password = "your-password";

void setup() {
  Serial.begin(115200);
  delay(10);

  // We start by connecting to a WiFi network
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  // Will try for about 10 seconds (20x 500ms)
  int tryDelay = 500;

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  while (true) {
      switch (WiFi.status()) {
        case WL_NO_SSID_AVAIL: Serial.println("[WiFi] SSID not found"); break;
        case WL_CONNECT_FAILED:
          Serial.print("[WiFi] Failed - WiFi not connected! Reason: ");
          return;
          break;
        case WL_CONNECTION_LOST: Serial.println("[WiFi] Connection was lost"); break;
        case WL_SCAN_COMPLETED:  Serial.println("[WiFi] Scan is completed"); break;
        case WL_DISCONNECTED:    Serial.println("[WiFi] WiFi is disconnected"); break;
        case WL_CONNECTED:
          Serial.println("[WiFi] WiFi is connected!");
          Serial.print("[WiFi] IP address: ");
          Serial.println(WiFi.localIP());
          return;
          break;
        default:
          Serial.print("[WiFi] WiFi Status: ");
          Serial.println(WiFi.status());
          break;
      }
          delay(tryDelay);

    if (numberOfTries <= 0) {
      Serial.print("[WiFi] Failed to connect to WiFi!");
      // Use disconnect function to force stop trying to connect
      WiFi.disconnect();
      return;
    } else {
      numberOfTries--;
    }
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}
void loop() {}
```

  </TabItem>
</Tabs>

**Passo 2.** Faça o upload do código e abra o Monitor Serial para verificar se a placa está conectada à rede WiFi

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-2.jpg" alt="pir" width={500} height="auto" /></div>

## Modo 2: Modo Soft-AP (Funcionando como STA) - Usar como Ponto de Acesso

Neste exemplo, vamos usar o XIAO ESP32C3 como ponto de acesso WiFi onde outros dispositivos podem se conectar a ele. Isso é semelhante ao recurso de hotspot WiFi em telefones celulares.

- **Passo 1.** Copie e cole o código abaixo no Arduino IDE

```cpp
#include "WiFi.h"
void setup() {
  Serial.begin(115200);
  WiFi.softAP("ESP_AP", "123456789");
}

void loop() {
  Serial.print("Host Name:");
  Serial.println(WiFi.softAPgetHostname());
  Serial.print("Host IP:");
  Serial.println(WiFi.softAPIP());
  Serial.print("Host IPV6:");
#if ESP_ARDUINO_VERSION_MAJOR < 3
  Serial.println(WiFi.softAPIPv6());
#else
  Serial.println(WiFi.softAPlinkLocalIPv6());
#endif
  Serial.print("Host SSID:");
  Serial.println(WiFi.SSID());
  Serial.print("Host Broadcast IP:");
  Serial.println(WiFi.softAPBroadcastIP());
  Serial.print("Host mac Address:");
  Serial.println(WiFi.softAPmacAddress());
  Serial.print("Number of Host Connections:");
  Serial.println(WiFi.softAPgetStationNum());
  Serial.print("Host Network ID:");
  Serial.println(WiFi.softAPNetworkID());
  Serial.print("Host Status:");
  Serial.println(WiFi.status());
  delay(1000);
}
```

:::caution nota
Se a versão da sua placa de desenvolvimento ESP32 já foi atualizada para 3.0.0, você precisa alterar o código de ```softAPIPv6()``` para ```softAPlinkLocalIPv6()```.
:::

**Passo 2.** Faça o upload do código e abra o Monitor Serial para verificar mais detalhes sobre o ponto de acesso WiFi

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-3.png" alt="pir" width={700} height="auto" /></div>

**Passo 3.** Escaneie redes WiFi em um PC ou celular e você poderá se conectar a esta rede recém-criada usando a senha que especificamos no código

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-4.png" alt="pir" width="{300}" height="auto" /></div>

Agora você verá que o **Número de Conexões de Host** no monitor serial foi atualizado para **1**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-5.png" alt="pir" width={700} height="auto" /></div>

## XIAO ESP32C3 & Home Assistant

Temos o prazer de anunciar que adicionamos suporte para o XIAO ESP32C3 acessar o ESPHome e o Home Assistant!

Para mais informações sobre esta seção, consulte os tutoriais relevantes.

- [Conectar Módulos Grove ao Home Assistant usando ESPHome](https://wiki.seeedstudio.com/pt-br/Connect-Grove-to-Home-Assistant-ESPHome/)
- [LinkStar Home Assistant](https://wiki.seeedstudio.com/pt-br/h68k-ha-esphome/)

## Referência

- [Wi-Fi API - esp-arduino](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/wifi.html)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
