---
description: |
title: XIAO ESP32C5 ESP-Mesh Audio
keywords:
- xiao esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /es/xiao_esp32c5_esp-mesh_audio
last_update:
  date: 12/12/2025
  author: Zeller
---

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/mesh_0.png" style={{width:800, height:'auto'}}/></div>

## [ESP-Wi-Fi-MESH](https://www.espressif.com/en/products/sdks/esp-wifi-mesh/overview)

La siguiente es la introducción oficial de **ESP-WIFI-MESH** por Espressif Systems:

ESP-WIFI-MESH es una red de comunicación inalámbrica con nodos organizados en una topología de malla utilizando la función simultánea AP-STA en los SoCs de Espressif. Proporciona una red que se forma y se cura automáticamente, con facilidad de implementación. La topología de red de ESP-WIFI-MESH puede escalar hasta 1000 nodos en áreas grandes, sin requerir ningún soporte específico de infraestructura Wi-Fi. ESP-WIFI-MESH también se puede usar para cubrir puntos ciegos de Wi-Fi en escenarios de implementación doméstica donde la señal Wi-Fi no puede alcanzarse.

Presenta las siguientes características:

1. **Configuración Fácil y Segura** : Se admite la configuración de red mediante aplicación móvil + Bluetooth LE, permitiendo la adición rápida de nuevos nodos y la entrega segura de configuraciones.
2. **Auto-formación y Auto-curación** : Los nodos se conectarán/reconectarán automáticamente, y la red puede formarse automáticamente y auto-curarse cuando un nodo falla.
3. **No se Requieren Gateways Adicionales** : No se requieren gateways o infraestructura adicionales. La red Mesh puede escalar hasta miles de nodos, haciéndola adecuada para implementaciones a gran escala.
4. **Conectividad IP** : Todos los nodos admiten comunicación IP, permitiendo tanto la interconexión entre ellos como el acceso a redes externas (a través de NAT o puente del nodo raíz).
5. **Seguro por Diseño** : Basado en Wi-Fi estándar, las comunicaciones entre nodos pueden adoptar cifrado WPA2 para garantizar la transmisión segura de datos.
6. **Aplicaciones** : Es aplicable a varios escenarios como iluminación inteligente, hogares inteligentes, control de automatización y redes en lugares a gran escala (por ejemplo, estacionamientos, fábricas, espacios compartidos).

Para información más detallada, consulte el enlace oficial de Espressif Systems :

- [ESP-Wi-Fi-MESH](https://www.espressif.com/en/products/sdks/esp-wifi-mesh/overview)
- [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/api-guides/esp-wifi-mesh.html)

## ESP-Mesh_Audio

A continuación, usaremos un XIAO ESP32-C5, un router que soporte la banda de frecuencia de 5 GHz, y una computadora para simular la transmisión de audio en banda de 5 GHz en un escenario de nodo Mesh.<br/>
Aquí, tu computadora actúa como un **nodo hijo Mesh**, enviando datos a través de un router de 5 GHz; el C5 actúa como un **nodo raíz Mesh**, recibiendo datos.

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::tip
Si no tienes un router que soporte la banda de frecuencia de 5 GHz en casa, puedes habilitar el hotspot de tu teléfono móvil, configurarlo a la banda de frecuencia de 5 GHz, y asegurarte de que tu computadora esté conectada a este hotspot.
:::

### Crear un Proyecto Arduino

Copia el siguiente código, y modifica el **ssid** y **password** al nombre y contraseña del router de banda de frecuencia de 5 GHz que estés usando.

```cpp
#include <WiFi.h>
#include <WiFiUdp.h>

const char* ssid = "Your_5G_Router_SSID";
const char* password = "Your_Router_Password";
#define UDP_PORT 4444

WiFiUDP udp;
uint8_t packetBuffer[1024]; // Buffer for storing received UDP packets

void setup() {
  Serial.begin(115200);

  // Connect to WiFi
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  Serial.print("Connecting to 5GHz WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConnected!");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());

  // Start UDP listening
  udp.begin(UDP_PORT);
  Serial.printf("Listening on UDP port %d\n", UDP_PORT);
}

void loop() {
  int packetSize = udp.parsePacket();
  if (packetSize) {
    // Read received data
    int len = udp.read(packetBuffer, 1024);

    // Statistics and print: size of received packet, and signal strength (RSSI)
    // Signal strength is crucial for 5GHz audio transmission
    Serial.printf("[RECV] %d bytes from %s, RSSI: %d dBm\n", 
                  len, udp.remoteIP().toString().c_str(), WiFi.RSSI());

    // If you have an I2S speaker, you can call i2s_write here for playback
  }
}
```

### Obtener la Dirección IP

Sube el código al XIAO ESP32-C5, abre el Monitor Serie, y la dirección IP conectada se imprimirá si se conecta exitosamente al router WiFi de 5 GHz.

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/mesh_1.png" style={{width:800, height:'auto'}}/></div>

### Crear un Script Python

Antes de usar el script Python, necesitas instalar primero el entorno Python 3. Puedes buscar los tutoriales de instalación correspondientes en línea para más detalles.<br/>

Crea un archivo llamado send_audio.py en cualquier carpeta en Windows, y copia el siguiente código Python en él.<br/>

Llena la dirección IP impresa por el Monitor Serie del Arduino IDE en la variable **TARGET_IP** en el código.

```py
import socket
import time
import random

# Set the target IP (View the IP printed out by the serial port of C5)
TARGET_IP = "192.168.x.x" # <--- Modify here!!!
TARGET_PORT = 4444

# Simulated Audio Parameters
# 16kHz sampling, 16-bit, mono -> 32000 bytes per second
# Send one packet every 20ms -> Each packet is 640 bytes
PACKET_SIZE = 640 
INTERVAL = 0.02 # 20ms

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
print(f"Start sending simulated audio to {TARGET_IP}:{TARGET_PORT}...")

sequence = 0

try:
    while True:
        # Generate simulated data (add serial numbers to facilitate packet loss detection)
        # The first 4 bytes are the serial numbers, followed by random noise
        payload = sequence.to_bytes(4, byteorder='big') + random.randbytes(PACKET_SIZE - 4)

        sock.sendto(payload, (TARGET_IP, TARGET_PORT))
        print(f"Sent packet #{sequence}, size: {len(payload)}")

        sequence += 1
        time.sleep(INTERVAL) # Control the transmission frequency

except KeyboardInterrupt:
    print("Stopped.")
    sock.close()
```

### Ejecutar el Archivo Script

Haz clic derecho en la carpeta donde está almacenado `send_audio.py` y abre la terminal en esta carpeta.<br/>
Ingresa `python send_audio.py` para ejecutar el script. Después de una conexión exitosa, enviará datos de audio al XIAO ESP32-C5 cada 20 ms.

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/mesh_3.png" style={{width:800, height:'auto'}}/></div>

La ventana del monitor del Arduino IDE devolverá la dirección IP y datos de bytes de tu computadora, así como la intensidad de señal del WiFi de 5 GHz conectado.

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/mesh_4.png" style={{width:800, height:'auto'}}/></div>

¡Felicitaciones! En este punto, has aprendido cómo transmitir audio sobre la banda WiFi de 5 GHz, ¡y más innovaciones están esperando que las realices!

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
