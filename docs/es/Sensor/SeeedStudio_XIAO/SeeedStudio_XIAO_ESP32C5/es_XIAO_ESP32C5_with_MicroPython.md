---
title: Seeed Studio XIAO ESP32-C5 Con Micropython
description: |
keywords:
  - xiao
  - esp32c5
  - micropython
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /es/xiao_esp32c5_with_micropyhton
last_update:
  date: 12/22/2025
  author: Zeller
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[MicroPython](https://github.com/micropython/micropython/wiki) es un intérprete de Python con soporte para emisión de código nativo para código crítico en rendimiento. Proporciona un subconjunto de las características principales de Python 3.6+, optimizado para microcontroladores y sistemas con recursos limitados. Difiere de CPython, y puedes leer más sobre las diferencias en la página [MicroPython vs CPython differences](https://github.com/micropython/micropython/wiki/Differences).

## Usando MicroPython con XIAO ESP32-C5

A continuación, te guiaré sobre cómo usar **MicroPython** en el **XIAO ESP32-C5** y programarlo con [Thonny IDE](https://thonny.org/), basado en el sistema operativo Windows.

### Preparación del Hardware

Antes de comenzar, necesitas preparar una placa de desarrollo XIAO ESP32-C5.

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

### Desplegando el Firmware de MicroPython

A continuación, te guiaremos sobre cómo desplegar el firmware de MicroPython en el XIAO ESP32-C5.

#### Instalar esptool

Antes de instalar el firmware de MicroPython para el ESP32-C5, necesitas instalar [esptool](https://docs.espressif.com/projects/esptool/en/latest/esp32c5/) primero. Usaremos esptool.py para borrar y flashear el firmware en la placa de desarrollo.<br/>

Abre una terminal en cualquier carpeta e ingresa el siguiente comando.

```bash
pip install esptool
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_1.png" style={{width:800, height:'auto'}}/></div>

#### Borrado

:::tip
En el sistema operativo Windows, el programa instalado puede haber sido renombrado de `esptool.py` a `esptool`.
:::

Si estás instalando MicroPython en el **XIAO ESP32-C5** por primera vez, usa el siguiente comando para borrar la Flash primero.<br/>

```bash
esptool.py eraase_flash
```

:::tip
`esptool.py` intentará detectar automáticamente el puerto serie con el ESP32.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_2.png" style={{width:800, height:'auto'}}/></div><br/>

 Pero si esto falla o podría haber más de un dispositivo basado en Espressif conectado a tu computadora, entonces pasa la opción --port con el nombre del puerto serie objetivo. Por ejemplo:

```bash
esptool.py --port PORTNAME erase_flash
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_3.png" style={{width:800, height:'auto'}}/></div><br/>

#### Flasheo

**Paso 1.** Haz clic en el enlace, selecciona una versión adecuada del firmware de MicroPython para el ESP32-C5 para descargar, y aquí se elige la versión v1.27.0. [ESP32_GENERIC_C5 MicroPython](https://micropython.org/download/ESP32_GENERIC_C5/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_4_1.png" style={{width:800, height:'auto'}}/></div><br/>

**Paso 2.** despliega el firmware en la placa, comenzando en la dirección 0x2000.

Para evitar perder el rastro del firmware, se recomienda que coloques el firmware de MicroPython descargado en una carpeta separada, luego haz clic derecho en esta carpeta para abrir una terminal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_5.png" style={{width:800, height:'auto'}}/></div><br/>

Ingresa el comando a continuación y reemplaza `ESP32_BOARD_NAME-DATE-VERSION.bin` con `ESP32_GENERIC_C5-20251209-v1.27.0.bin`.

```bash
esptool.py --baud 460800 write_flash 0x2000 ESP32_BOARD_NAME-DATE-VERSION.bin
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_6.png" style={{width:800, height:'auto'}}/></div><br/>

Si esptool.py no puede detectar automáticamente el puerto serie, entonces puedes pasarlo explícitamente en la línea de comandos en su lugar.

```bash
esptool.py --port PORTNAME --baud 460800 write_flash 0x2000 ESP32_BOARD_NAME-DATE-VERSION.bin
```

- En Windows, el nombre del puerto es usualmente similar a `COM4`.
- En Linux, el nombre del puerto es usualmente similar a `/dev/ttyUSB` o `/dev/ttyACM0`.
- En Mac, el nombre del puerto es usualmente similar a `/dev/cu.usbmodem01`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_7.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
Si el flasheo comienza y luego falla a mitad de camino, intenta remover la opción `--baud 460800` para flashear a la velocidad predeterminada más lenta.
:::

### Instalar [Thonny IDE](https://thonny.org/)

Elige la versión apropiada para la instalación. Aquí, estoy instalándolo en un sistema Windows, así que he seleccionado la versión de Windows.

Sigue las instrucciones para la versión de Python deseada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_ide_1.png" style={{width:800, height:'auto'}}/></div>

Luego, simplemente sigue los pasos predeterminados para la configuración.

### Ejemplo de Parpadeo de LED

Aquí te mostraremos cómo encender el LED L en el XIAO ESP32-C5 usando MicroPython con Thonny IDE.

#### **Paso 1.** Configuración del Intérprete

- Abre Thonny IDE, luego haz clic en la esquina inferior derecha de la interfaz para las opciones de **Configure interpreter**. Selecciona MicroPython (generic) y Port

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_8.png" style={{width:800, height:'auto'}}/></div><br/>

Después de una conexión exitosa, la información de la versión del firmware de MicroPython se mostrará en la ventana del shell a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_9.png" style={{width:800, height:'auto'}}/></div><br/>

#### **Paso 2.** Nuevo Archivo led_blink.py

- Haz clic en **File** -> **New** en la esquina superior izquierda para crear un nuevo archivo, luego presiona **Ctrl + S** para nombrarlo led_blink y guardarlo en tu computadora.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_10.png" style={{width:400, height:'auto'}}/></div><br/>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_11.png" style={{width:400, height:'auto'}}/></div><br/>

- Haz clic en **View** -> **Files** en la esquina superior izquierda para marcarlo (aparecerá un **√** junto a él), y una ventana mostrando la ubicación de tus archivos almacenados aparecerá en el lado izquierdo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_12.png" style={{width:400, height:'auto'}}/></div><br/>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_13_1.png" style={{width:600, height:'auto'}}/></div><br/>

#### **Paso 3.** Escribir el Código de Ejemplo

Para el LED L en el XIAO ESP32-C5, el pin correspondiente es GPIO27, y se enciende con una señal de nivel bajo.

- Copia el código de ejemplo en el archivo `led_blink.py`.

```py
from machine import Pin
import time

# Define GPIO27
led = Pin(27, Pin.OUT)

while True:
    # Low-level illumination
    led.value(0)
    print("LED ON")
    time.sleep(1) # Wait for 1 second

    # High-level extinction
    led.value(1)
    print("LED OFF")
    time.sleep(1) 
```

#### **Paso 4.** Ejecutar el Código

- Haz clic en el icono mostrado en la esquina superior derecha o presiona F5 para ejecutar el código, y la información del LED se imprimirá.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_14_1.png" style={{width:600, height:'auto'}}/></div><br/>

- El LED L integrado parpadeará a intervalos de 1 segundo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:400, height:'auto'}}/></div>

### Ejemplo de Conexión Wi-Fi de 5 GHz

XIAO ESP-C5 soporta Wi-Fi 6 de banda dual de 2.4 GHz y 5 GHz. Este ejemplo demostrará el efecto de conectarse a una red Wi-Fi de 5 GHz.

- Crea un nuevo archivo llamado `wifi_connect.py` y copia el siguiente código de ejemplo en él.

```py
import network
import time


def connect_wifi(ssid, password):
    # Create a Station interface (STA_IF = client mode, connects to a router/AP)
    wlan = network.WLAN(network.STA_IF)

    # If already connected, return immediately
    if wlan.isconnected():
        print("Already connected before, skipping connection step.")
        print("Network config:", wlan.ifconfig())
        return True

    # Enable the Wi-Fi interface
    wlan.active(True)

    print(f"Connecting to network: {ssid} ...")
    wlan.connect(ssid, password)

    # Wait for connection with a timeout (e.g., 10 seconds)
    max_wait = 10
    while max_wait > 0:
        if wlan.isconnected():
            break
        max_wait -= 1
        print("Waiting for connection...")
        time.sleep(1)

    # Check connection result
    if wlan.isconnected():
        print("Connected successfully!")
        print("Network config (IP/Mask/Gateway/DNS):", wlan.ifconfig())

        # led.value(0)  # If you want to turn on an LED after connection succeeds, add code here
        return True
    else:
        print("Connection failed. Please check SSID or password.")
        return False


# ==========================================
# Main Program
# ==========================================

# Fill in your Wi-Fi SSID and password here
SSID = "YourWiFiName"
PASSWORD = "YourWiFiPassword"

# Call the function
connect_wifi(SSID, PASSWORD)
```

- Ingresa el SSID y PASSWORD del WiFi de 5GHz en tu entorno, luego ejecuta el código, y se imprimirá la información de conexión.

:::tip
Antes de ejecutar un nuevo código de ejemplo, necesitas hacer clic en el ícono **Stop** en la esquina superior izquierda o presionar **Ctrl + F2** para salir del entorno de ejecución anterior.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_15.png" style={{width:600, height:'auto'}}/></div><br/>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_6.png" style={{width:600, height:'auto'}}/></div><br/>

Esto demuestra que es factible para el **XIAO ESP32-C5** conectarse a una red WiFi de 5GHz.

### Ejemplo BLE

Este ejemplo te mostrará la funcionalidad BLE del **XIAO ESP32-C5**, y demostrará cómo descubrirlo y conectarse a él usando la App nRF Connect.

- Crea un nuevo archivo llamado `BLE_connect.py` y copia el siguiente código de ejemplo en él.

<details>

<summary>Código de Referencia para Conexión BLE</summary>

```py
import bluetooth
import random
import struct
import time
from machine import Pin
from micropython import const

# --- Configuration ---
# Define the LED pin (Using GPIO 27 as per your previous request)
# Active LOW: 0 = On, 1 = Off
LED_PIN = 27
DEVICE_NAME = "XIAO ESP32-C5-BLE"

# --- BLE Constants (UUIDs) ---
# We use standard UUIDs for simplicity, but you can use 128-bit custom UUIDs.
# 0x181A is "Environmental Sensing" Service
_IRQ_CENTRAL_CONNECT = const(1)
_IRQ_CENTRAL_DISCONNECT = const(2)
_IRQ_GATTS_WRITE = const(3)

_FLAG_READ = const(0x0002)
_FLAG_WRITE = const(0x0008)
_FLAG_NOTIFY = const(0x0010)

# Define a Service with one Characteristic (Read/Write/Notify)
# Service UUID: 0x181A
# Characteristic UUID: 0x2A6E (Temperature - just as an example)
_UART_UUID = bluetooth.UUID(0x181A)
_UART_TX = (
    bluetooth.UUID(0x2A6E),
    _FLAG_READ | _FLAG_WRITE | _FLAG_NOTIFY,
)
_UART_SERVICE = (
    _UART_UUID,
    (_UART_TX,),
)

# --- Helper: Advertising Payload Generator ---
def advertising_payload(limited_disc=False, br_edr=False, name=None, services=None, appearance=0):
    payload = bytearray()

    def _append(adv_type, value):
        nonlocal payload
        payload += struct.pack("BB", len(value) + 1, adv_type) + value

    _append(
        0x01,  # Flags
        struct.pack("B", (0x02 if not limited_disc else 0x01) | (0x04 if not br_edr else 0x00)),
    )

    if name:
        _append(0x09, name)  # Complete Local Name

    if services:
        for uuid in services:
            b = bytes(uuid)
            if len(b) == 2:
                _append(0x03, b)  # 16-bit Service Class UUIDs
            elif len(b) == 16:
                _append(0x06, b)  # 128-bit Service Class UUIDs

    if appearance:
        _append(0x19, struct.pack("<h", appearance))

    return payload

# --- BLE Class ---
class BLEPeripheral:
    def __init__(self, ble, name="ESP32"):
        self._ble = ble
        self._ble.active(True)
        self._ble.irq(self._irq)

        # Register services
        ((self._handle_tx,),) = self._ble.gatts_register_services((_UART_SERVICE,))

        self._connections = set()
        self._payload = advertising_payload(name=name, services=[_UART_UUID])

        # Initialize LED
        self._led = Pin(LED_PIN, Pin.OUT)
        self._led.value(1) # Turn OFF initially (High)

        self._advertise()
        print(f"BLE Active. Device Name: {name}")

    def _irq(self, event, data):
        # Track connections so we can send notifications
        if event == _IRQ_CENTRAL_CONNECT:
            conn_handle, _, _ = data
            print(f"New connection: {conn_handle}")
            self._connections.add(conn_handle)
            self._led.value(0) # Turn LED ON (Active Low)

        elif event == _IRQ_CENTRAL_DISCONNECT:
            conn_handle, _, _ = data
            print(f"Disconnected: {conn_handle}")
            self._connections.remove(conn_handle)
            self._led.value(1) # Turn LED OFF
            # Start advertising again to allow new connections
            self._advertise()

        elif event == _IRQ_GATTS_WRITE:
            conn_handle, value_handle = data
            value = self._ble.gatts_read(value_handle)
            if value_handle == self._handle_tx:
                print(f"Received write request: {value}")
                # You can parse 'value' here to control hardware

    def update_value(self, data):
        # Write the local value to the handle
        self._ble.gatts_write(self._handle_tx, data)
        # Notify all connected centrals
        for conn_handle in self._connections:
            self._ble.gatts_notify(conn_handle, self._handle_tx, data)

    def _advertise(self):
        self._ble.gap_advertise(100, adv_data=self._payload)
        print("Advertising...")

# --- Main Execution ---
def demo():
    ble = bluetooth.BLE()
    p = BLEPeripheral(ble, name=DEVICE_NAME)

    counter = 0

    try:
        while True:
            # Only update value if connected, to save power/cpu (optional)
            if p._connections:
                # Create a string data: "Count: 1", "Count: 2"...
                data_str = f"Count: {counter}"
                print(f"Sending notification: {data_str}")

                # Send data (must be bytes)
                p.update_value(data_str.encode('utf-8'))

                counter += 1

            time.sleep(2) # Wait 2 seconds

    except KeyboardInterrupt:
        print("Stopping...")
        ble.active(False)

if __name__ == "__main__":
    demo()
```

</details>

- Luego ejecuta el código, abre la app nRF Connect en tu teléfono, y descubrirás el dispositivo llamado **XIAO ESP32-C5-BLE**. Después de una conexión exitosa, el LED L integrado se encenderá, y la información del conteo de transmisión también se imprimirá en ese momento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_16.png" style={{width:800, height:'auto'}}/></div><br/>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_1.jpg" style={{width:'90%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_2.jpg" style={{width:'90%', height:'auto'}}/></div>
</div><br/>

¡Felicitaciones! Después de completar todos los ejemplos anteriores, creemos que has dominado cómo desarrollar proyectos en el **XIAO ESP32-C5** usando MicroPython con Thonny IDE. ¡Esperamos ver más de tus creaciones!

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
