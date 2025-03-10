---
description: WiFi Usage on Seeed Studio XIAO ESP32C3
title: Uso de WiFi
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO_ESP32C3_WiFi_Usage
last_update:
  date: 02/03/2025
  author: Guillermo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Inicio

La XIAO ESP32C3 de Seeed Studio soporta conectividad WiFi con IEEE 802.11b/g/n. Esta wiki introducirá los conceptos básicos del uso de WiFi en esta placa.

:::caution attention
⚠️ Ten cuidado al usar la placa como un punto de acceso (hotspot). Puede sobrecalentarse y causar quemaduras.
:::

## Configuración del hardware

- **Paso 1.** Conecta la **antena WiFi/Bluetooth** incluida al **conector IPEX** en la placa.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-6.png" alt="pir" width={130} height="auto" /></div>

- **Paso 2.** Conecta el XIAO ESP32C3 a tu computadora mediante un cable USB Tipo-C.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" alt="pir" width={120} height="auto" /></div>

## Modo 1: Modo STA (Modo Estación) - Escanear redes WiFi

### Escanear puntos de acceso Wi-Fi

En este ejemplo, vamos a usar la XIAO ESP32C3 para escanear las redes WiFi disponibles a su alrededor. Aquí la placa se configurará en Modo Estación (STA).

- **Paso 1.** Copia y pega el código de abajo en la IDE de Arduino.

<Tabs> 
  <TabItem value="basic wifi scan" label="Escaneo básico de Wi-Fi" default>

```cpp
#include "WiFi.h"

void setup() {
  Serial.begin(115200);

  // Configura WiFi en modo estación y desconéctalo de un AP si estaba previamente conectado
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  Serial.println("Configuración lista");
}

void loop() {
  Serial.println("inicio del escaneo");

  // WiFi.scanNetworks devolverá el número de redes encontradas
  int n = WiFi.scanNetworks();
  Serial.println("escaneo terminado");
  if (n == 0) {
    Serial.println("no se encontraron redes");
  } else {
    Serial.print(n);
    Serial.println(" redes encontradas");
    for (int i = 0; i < n; ++i) {
      // Imprime SSID y RSSI para cada red encontrada
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

  // Espera un poco antes de escanear nuevamente
  delay(5000);
}


```

  </TabItem>
  <TabItem value="advan-wifi-scan" label="Advance Wi-Fi Scan">

```cpp title="https://github.com/espressif/arduino-esp32/blob/master/libraries/WiFi/examples/WiFiScan/WiFiScan.ino"
/*
 *  Este sketch demuestra cómo escanear redes WiFi.
 *  La API está basada en la biblioteca Arduino WiFi Shield, pero tiene cambios significativos ya que se soportan funciones WiFi más nuevas.
 *  Por ejemplo, el valor de retorno de `encryptionType()` es diferente porque se soportan encriptaciones más modernas.
 */
#include "WiFi.h"

void setup() {
  Serial.begin(115200);

  // Configura WiFi en modo estación y desconéctalo de un AP si estaba previamente conectado.
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  Serial.println("Configuración lista");
}

void loop() {
  Serial.println("Inicio del escaneo");

  // WiFi.scanNetworks devolverá el número de redes encontradas.
  int n = WiFi.scanNetworks();
  Serial.println("Escaneo terminado");
  if (n == 0) {
    Serial.println("No se encontraron redes");
  } else {
    Serial.print(n);
    Serial.println(" redes encontradas");
    Serial.println("Nr | SSID                             | RSSI | Canal | Encriptación");
    for (int i = 0; i < n; ++i) {
      // Imprime SSID y RSSI para cada red encontrada
      Serial.printf("%2d", i + 1);
      Serial.print(" | ");
      Serial.printf("%-32.32s", WiFi.SSID(i).c_str());
      Serial.print(" | ");
      Serial.printf("%4ld", WiFi.RSSI(i));
      Serial.print(" | ");
      Serial.printf("%2ld", WiFi.channel(i));
      Serial.print(" | ");
      switch (WiFi.encryptionType(i)) {
        case WIFI_AUTH_OPEN:            Serial.print("abierta"); break;
        case WIFI_AUTH_WEP:             Serial.print("WEP"); break;
        case WIFI_AUTH_WPA_PSK:         Serial.print("WPA"); break;
        case WIFI_AUTH_WPA2_PSK:        Serial.print("WPA2"); break;
        case WIFI_AUTH_WPA_WPA2_PSK:    Serial.print("WPA+WPA2"); break;
        case WIFI_AUTH_WPA2_ENTERPRISE: Serial.print("WPA2-EAP"); break;
        case WIFI_AUTH_WPA3_PSK:        Serial.print("WPA3"); break;
        case WIFI_AUTH_WPA2_WPA3_PSK:   Serial.print("WPA2+WPA3"); break;
        case WIFI_AUTH_WAPI_PSK:        Serial.print("WAPI"); break;
        default:                        Serial.print("desconocido");
      }
      Serial.println();
      delay(10);
    }
  }
  Serial.println("");

  // Elimina el resultado del escaneo para liberar memoria para el código siguiente.
  WiFi.scanDelete();

  // Espera un poco antes de escanear nuevamente.
  delay(5000);
}
```
  </TabItem>
</Tabs>

**Paso 2.** Sube los códigos y abre el Monitor Serial para comenzar a escanear redes WiFi.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-1.jpg" alt="pir" width={500} height="auto" /></div>

### Conectarse a una red WiFi

En este ejemplo, vamos a usar el XIAO ESP32C3 para conectarnos a una red WiFi.

- **Paso 1.** Copia y pega el código abajo en el IDE de Arduino.

<Tabs>
  <TabItem value="basic wifi connect" label="Conexión básica Wi-Fi" default>

```cpp
#include <WiFi.h>

const char* ssid = "your-ssid";
const char* password = "your-password";

void setup() {
  Serial.begin(115200);
  delay(10);

  // Comenzamos conectándonos a una red WiFi
  Serial.println();
  Serial.println();
  Serial.print("Conectando a ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi conectado");
  Serial.println("Dirección IP: ");
  Serial.println(WiFi.localIP());
}
void loop() {}

</TabItem> <TabItem value="advan-wifi-connect" label="Conexión avanzada Wi-Fi">

```cpp title="https://github.com/espressif/arduino-esp32/blob/master/libraries/WiFi/examples/WiFiClientConnect/WiFiClientConnect.ino"
#include <WiFi.h>

const char *ssid = "your-ssid";
const char *password = "your-password";

void setup() {
  Serial.begin(115200);
  delay(10);

  // Comenzamos conectándonos a una red WiFi
  Serial.println();
  Serial.println();
  Serial.print("Conectando a ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  // Intentará durante unos 10 segundos (20x 500ms)
  int tryDelay = 500;

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  while (true) {
      switch (WiFi.status()) {
        case WL_NO_SSID_AVAIL: Serial.println("[WiFi] SSID no encontrado"); break;
        case WL_CONNECT_FAILED:
          Serial.print("[WiFi] Falló - ¡WiFi no conectado! Razón: ");
          return;
          break;
        case WL_CONNECTION_LOST: Serial.println("[WiFi] Conexión perdida"); break;
        case WL_SCAN_COMPLETED:  Serial.println("[WiFi] Escaneo completado"); break;
        case WL_DISCONNECTED:    Serial.println("[WiFi] WiFi desconectado"); break;
        case WL_CONNECTED:
          Serial.println("[WiFi] ¡WiFi conectado!");
          Serial.print("[WiFi] Dirección IP: ");
          Serial.println(WiFi.localIP());
          return;
          break;
        default:
          Serial.print("[WiFi] Estado de WiFi: ");
          Serial.println(WiFi.status());
          break;
      }
          delay(tryDelay);

    if (numberOfTries <= 0) {
      Serial.print("[WiFi] ¡No se pudo conectar a WiFi!");
      // Usa la función disconnect para detener el intento de conexión
      WiFi.disconnect();
      return;
    } else {
      numberOfTries--;
    }
  }

  Serial.println("");
  Serial.println("WiFi conectado");
  Serial.println("Dirección IP: ");
  Serial.println(WiFi.localIP());
}
void loop() {}
```

  </TabItem>
</Tabs>

**Paso 2.** Sube los códigos y abre el Monitor Serial para verificar que la placa esté conectada a la red WiFi.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-2.jpg" alt="pir" width={500} height="auto" /></div>

## Modo 2: Modo Soft-AP (Trabajando como STA) - Usar como punto de acceso

En este ejemplo, vamos a usar el XIAO ESP32C3 como un punto de acceso WiFi al que otros dispositivos pueden conectarse. Esto es similar a la función de hotspot WiFi en los teléfonos móviles.

- **Paso 1.** Copia y pega el código abajo en el IDE de Arduino.

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

:::caution note
Si tu versión de la placa de desarrollo ESP32 ya está actualizada a la 3.0.0, necesitas cambiar el código de ```softAPIPv6()``` a ```softAPlinkLocalIPv6()```.
:::

**Paso 2.** Sube los códigos y abre el Monitor Serial para verificar más detalles sobre el punto de acceso WiFi.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-3.png" alt="pir" width={700} height="auto" /></div>

**Paso 3.** Escanea las redes WiFi en una PC o teléfono móvil y podrás conectarte a esta nueva red creada usando la contraseña que especificamos en el código.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-4.png" alt="pir" width="{300}" height="auto" /></div>

Ahora verás que el **Número de Conexiones de Host** en el Monitor Serial se ha actualizado a **1**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-5.png" alt="pir" width={700} height="auto" /></div>

## XIAO ESP32C3 & Home Assistant

¡Nos complace anunciar que hemos habilitado el soporte para el acceso del XIAO ESP32C3 a ESPHome y Home Assistant!

Para más información sobre esta sección, por favor consulta los tutoriales correspondientes.

- [Connect Grove Modules to Home Assistant using ESPHome](https://wiki.seeedstudio.com/Connect-Grove-to-Home-Assistant-ESPHome/)
- [LinkStar Home Assistant](https://wiki.seeedstudio.com/h68k-ha-esphome/)

## Referencias

- [Wi-Fi API - esp-arduino](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/wifi.html)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>