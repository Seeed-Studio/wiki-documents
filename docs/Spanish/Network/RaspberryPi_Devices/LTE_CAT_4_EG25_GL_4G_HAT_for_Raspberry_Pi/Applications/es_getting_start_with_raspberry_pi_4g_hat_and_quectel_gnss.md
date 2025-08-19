---
description: Mejora tus aplicaciones IoT con nuestro módulo HAT 4G LTE y GNSS para Raspberry Pi. Esta solución integrada ofrece una conectividad celular robusta y posicionamiento en tiempo real preciso, ideal para el rastreo de activos, la monitorización de entornos remotos y la optimización de operaciones en campo.

title: Comenzando con las funcionalidades GNSS del HAT 4G para Raspberry Pi
keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - GNSS
  - Edge Computing
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/gnss_setup.webp
slug: /es/raspberry_pi_4g_hat_gnss_functionlities
last_update:
  date: 06/04/2025
  author: Guillermo
---

## Introducción

La integración del GNSS en el módulo 4G LTE mejora sus capacidades, permitiendo un posicionamiento preciso en tiempo real y una comunicación confiable para aplicaciones IoT. Con soporte para sistemas GNSS multiconstelación, el módulo ofrece un seguimiento de ubicación exacto y fiable, incluso en áreas remotas o con poca cobertura. Estas características lo hacen ideal para escenarios como rastreo de activos, gestión de flotas y monitoreo remoto en tiempo real.

Combinado con la conectividad 4G LTE, esta solución asegura una transmisión de datos fluida hacia la nube o sistemas de control, facilitando la gestión eficiente de casos críticos como la conservación de vida silvestre, automatización agrícola y respuesta a emergencias. Esta combinación ofrece un enfoque escalable y rentable para la automatización basada en ubicación, adecuado para industrias que requieren movilidad y accesibilidad.

## Preparación de Hardware

Necesitas conectar tu antena GNSS. Además, utilizaremos una API en Python para obtener la ubicación exacta en un formato legible y comprensible. También debe instalarse una antena 4G.


## Hardware preparation
<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
        <th>GPS Antenna</th>
        <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-110061521-gps-antenna-kit-for-reterminal-dm-4g-module-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/GPS-Antenna-Kit-for-reTerminal-DM-4G-Module-p-5774.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>


:::note
Si no has instalado los controladores necesarios para comunicarte mediante comandos AT, será necesario que los [instales](https://wiki.seeedstudio.com/getting_started_raspberry_pi_4g_lte_hat/#software-preparation).
:::

## Configuración
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/gnss_setup.png" style={{width:800}}/></div>

## Uso de GNSS con Raspberry Pi 4G LTE Hat o Herramienta Qcom en Windows

### Paso 1: Encender el GNSS

- Abre Minicom en Raspberry Pi o la herramienta Qcom en Windows mediante conexión USB.

```bash
sudo minicom -D /dev/ttyUSB2 #for minicom on raspberry
```

- Introduce el siguiente comando para activar el GNSS:

```bash
AT+QGPS=1
```

**Respuesta esperada**:

```bash
OK
```
- Esto enciende la funcionalidad GNSS.
- Tras la activación, las frases NMEA se emitirán por defecto desde el puerto "usbnmea".

### Paso 2: Obtener información de posicionamiento

- Para recuperar las coordenadas GNSS y otra información, introduce:

```bash
AT+QGPSLOC=0
```
**Ejemplo de respuesta**:

+QGPSLOC: 063416.400,3143.2951N,11713.0655E,0.6,224.9,2,162.57,17.6,9.5,110620,07 OK

- **Explicación de la respuesta**:
  - `063416.400`: Hora UTC (formato HHMMSS.SSS)
  - `3143.2951N`: Latitud (31°43.2951'N)
  - `11713.0655E`: Longitud (117°13.0655'E)
  - `0.6`: Dilución horizontal de precisión (HDOP)
  - `224.9`: Altitud en metros
  - `2`: Tipo de fijación de posición (2 = fijación 2D, 3 = fijación 3D)
  - Otros parámetros proporcionan datos detallados del GNSS.

### Paso 3: Desactivar GNSS

- Después de obtener los datos necesarios, desactiva el GNSS para ahorrar energía introduciendo:

```bash
AT+QGPSEND
```
**Respuesta esperada**:

```bash 
OK
```
- Este comando apaga el módulo GNSS, conservando recursos.

## Implementación en Python

### Paso 1. Preparar el directorio y entorno virtual

- Abre una terminal en tu Raspberry Pi.
- Crea una nueva carpeta para el proyecto y accede a ella:

```bash
mkdir GNSS_EX
cd GNSS_EX
```
- Configura un entorno virtual de Python:
```bash
python3 -m venv --system-site-packages env
```

- Activa el entorno virtual:

```bash
source env/bin/activate
```

- Instala las librerías necesarias:

```bash
pip install pyserial geopy
```

### Paso 2. Preparar el Script en Python

- Abre el **IDE Thonny Python** (preinstalado en Raspberry Pi).

- Crea un nuevo archivo en Thonny y pega el código proporcionado en el editor.

- Actualiza el parámetro `usb_port` para que coincida con el puerto serial de tu Raspberry Pi donde está conectado el 4G HAT. Típicamente puede ser `/dev/ttyUSB2` o `/dev/ttyUSB3`. Ejemplo:

```bash
usb_port = "/dev/ttyUSB2"
```
- Guarda el archivo como test_gnss.py dentro de la carpeta **GNSS_EX**.

```bash 

import serial
import time
from geopy.geocoders import Nominatim


def send_at_command(serial_port, command, delay=1):
    """Send an AT command and read the response."""
    serial_port.write((command + '\r\n').encode())
    time.sleep(delay)
    response = serial_port.read_all().decode()
    print(f"Command: {command}\nResponse: {response}")
    return response


def parse_coordinates(response):
    """Parse coordinates from AT+QGPSLOC response."""
    if "+QGPSLOC:" in response:
        try:
            data = response.split(":")[1].strip().split(",")
            # Extract raw coordinates (with N/S/E/W)
            latitude_raw, longitude_raw = data[1], data[2]

            # Correct parsing by removing N/S/E/W at the end
            latitude = convert_to_decimal(latitude_raw[:-1], 'N' in latitude_raw)
            longitude = convert_to_decimal(longitude_raw[:-1], 'E' in longitude_raw)

            print(f"Latitude: {latitude}, Longitude: {longitude}")
            return latitude, longitude
        except (IndexError, ValueError) as e:
            print(f"Error parsing coordinates: {e}")
            return None, None
    return None, None


def convert_to_decimal(coord, positive=True):
    """Convert NMEA-style coordinate to decimal format."""
    # Split the coordinate into degrees and minutes
    degrees = int(float(coord) // 100)
    minutes = float(coord) % 100
    decimal = degrees + (minutes / 60)

    # If it's in the Southern or Western hemisphere, make it negative
    return decimal if positive else -decimal


def get_location(lat, lon):
    """Get a human-readable location using geopy."""
    geolocator = Nominatim(user_agent="gnss_locator")
    try:
        location = geolocator.reverse((lat, lon), exactly_one=True)
        return location.address if location else "Location not found"
    except Exception as e:
        print(f"Geocoding error: {e}")
        return "Error retrieving location"


def automate_gnss(port, baudrate=9600):
    """Automate GNSS commands and fetch location."""
    try:
        with serial.Serial(port, baudrate, timeout=1) as ser:
            print("Serial port connected.")

            # Turn on GNSS
            send_at_command(ser, "AT+QGPS=1", delay=2)

            # Get positioning information
            response = send_at_command(ser, "AT+QGPSLOC=0", delay=2)
            latitude, longitude = parse_coordinates(response)

            if latitude and longitude:
                print(f"Coordinates: Latitude = {latitude}, Longitude = {longitude}")
                location = get_location(latitude, longitude)
                print(f"Location: {location}")
            else:
                print("Unable to retrieve coordinates.")

            # Turn off GNSS
            send_at_command(ser, "AT+QGPSEND", delay=2)
            print("GNSS process completed.")

    except serial.SerialException as e:
        print(f"Error: {e}")


# Set your USB port (e.g., '/dev/ttyUSB0' or 'COM3' on Windows)
usb_port = "/dev/ttyUSB2"  # Update based on your system
automate_gnss(usb_port)


```

### Paso 3. Ejecutar el Script

- Abre una terminal y asegúrate de estar en el directorio del proyecto:

```bash
cd GNSS_EX
```

- Activa el entorno virtual:

```bash
source env/bin/activate
```

- Ejecuta el script con Python:
```bash
python test_gnss.py
```
- La salida debería ser similar a la siguiente: 
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/gnss_output.PNG" style={{width:800}}/></div>

## Recursos

- **[Página Web]** [LTE EG25-G](https://www.quectel.com/product/lte-eg25-g/)

- **[Manual PDF]** [GNSS AT Commands Manual V1.4](https://www.quectel.com/download/quectel_ec2xeg9xeg2x-gem05_series_gnss_application_note_v1-4/)

## Soporte Técnico y Comunidad

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte distintos canales de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Contamos con diversas vías de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>