---
title: Platform IO con Seeed Studio XIAO ESP32-C5
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
updatedAt: '2025-12-26'
url: https://wiki.seeedstudio.com/es/xiao_esp32c5_with_platformio/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_started.png" style={{width:800, height:'auto'}}/></div>

## Introducción a [PlatformIO](https://platformio.org/)

PlatformIO es un ecosistema de desarrollo potente y altamente extensible diseñado para sistemas embebidos. Integra de forma fluida compatibilidad con una amplia variedad de placas de desarrollo y microcontroladores, ofreciendo una flexibilidad inigualable. Lo que distingue a PlatformIO es su notable escalabilidad: incluso si tu placa específica no está soportada de forma nativa, su arquitectura permite definir placas personalizadas de manera sencilla.

De forma crucial, PlatformIO cierra la brecha para los desarrolladores familiarizados con Arduino, permitiendo compilar y desplegar código al estilo Arduino simplemente incluyendo las bibliotecas correspondientes.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://platformio.org/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Más información 🖱️</font></span></strong></a>
</div>

## Usar PlatformIO para XIAO ESP32-C5

A continuación, realizaremos el desarrollo para la XIAO ESP32-C5 basado en PlatformIO, ayudándote a explorar el flujo de trabajo de desarrollo con PlatformIO.

### Preparación de hardware

Necesitas preparar de antemano una **XIAO ESP32-C5**.

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Descargar VS Code

Descarga [VS Code](https://code.visualstudio.com/download) según el sistema que estés utilizando

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### Instalar PlatformIO

Abre VSCode, haz clic en Extensions, luego busca PlatformIO y selecciona instalar. Una vez completada la instalación, reinicia VSCode.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>

### Instalar el paquete de plataforma platform-seeedboards

Las placas de la serie Seeed Studio XIAO utilizan una plataforma personalizada de PlatformIO, por lo que necesitas instalar manualmente el paquete de plataforma correspondiente.

- Ejecuta el siguiente comando para una instalación desde cero:

```bash
pio pkg install -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

- Si ya has utilizado anteriormente placas de la serie Seeed Studio XIAO en PlatformIO, ejecuta el siguiente comando para actualizar:

```bash
# for Windows
pio pkg update -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"

# for macOS/Linux
pio pkg uninstall -g -p "SeeedStudio" && pio pkg install -g -p "SeeedStudio=https://github.com/Seeed-Studio/platform-seeedboards.git" --force
```

:::tip

Si quieres usar un proyecto existente de PlatformIO, reemplaza el contenido de **platformio.ini** como se muestra a continuación:

```ini
[env:seeed-xiao-esp32-c5]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = arduino
board = seeed-xiao-esp32-c5
monitor_speed = 115200
```

:::

### Nuevo proyecto

- Abre la interfaz PIO Home y selecciona `New Project`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_1.png" style={{width:800, height:'auto'}}/></div><br/>

- Name: Asigna un nombre a tu proyecto
- Board: Selecciona **Seeed Studio XIAO ESP32-C5**
- Framework: Selecciona Ardunio
- Location: La ruta de los archivos del proyecto se puede establecer como una ruta personalizada o se puede seleccionar la ruta predeterminada.
- Haz clic en **Finish** y espera a que se complete la creación. Luego, abre el archivo del proyecto en el espacio de trabajo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_1.png" style={{width:600, height:'auto'}}/></div>

### Ejemplo de parpadeo de LED

En este ejemplo de parpadeo de LED, te guiaremos para compilar y subir archivos usando PlatformIO.

**Paso 1.** Copia el código de ejemplo

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

**Paso 2.** Compila el proyecto

  Haz clic en el icono ***√*** en la barra de estado en la parte inferior de VS Code para compilar.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_2.png" style={{width:800, height:'auto'}}/></div><br/>

  Si la compilación es exitosa, se mostrará como en la figura.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_3.png" style={{width:800, height:'auto'}}/></div><br/>

**Paso 3.** Subir

  Haz clic en el icono **→** en la barra de estado en la parte inferior de VS Code para subir.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_3_1.png" style={{width:800, height:'auto'}}/></div><br/>

**Paso 4.** Comprobar el efecto del programa

Abre el Serial Monitor como se muestra en la figura siguiente. Imprimirá el estado de encendido/apagado del LED a intervalos de 1 segundo.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_4.png" style={{width:800, height:'auto'}}/></div><br/>

El LED parpadeará con el mismo intervalo de 1 segundo.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:400, height:'auto'}}/></div><br/>

### Ejemplo de conexión Wi-Fi de 5 GHz

XIAO ESP-C5 es compatible con Wi-Fi 6 de doble banda de 2.4 GHz y 5 GHz. Este ejemplo demostrará el efecto de conectarse a una red Wi-Fi de 5 GHz.<br/>

Copia el siguiente código en tu proyecto de PlatformIO.
<details>

<summary> Código de referencia para conexión WiFi </summary>

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

Compila y sube el código<br/>

Una vez que la XIAO ESP32-C5 esté conectada a la red WiFi, el Serial Monitor imprimirá información como la intensidad de la señal de la red WiFi conectada.<br/>
También se puede ver claramente que la XIAO ESP32-C5 tiene una gran capacidad para conectarse a redes Wi-Fi de 5 GHz.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_5_1.png" style={{width:600, height:'auto'}}/></div><br/>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_6.png" style={{width:600, height:'auto'}}/></div><br/>

Siguiendo los dos ejemplos anteriores, deberías haber dominado las operaciones básicas de desarrollo con PlatformIO. ¡Esperamos ver que crees proyectos más interesantes con la XIAO ESP32-C5!

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
