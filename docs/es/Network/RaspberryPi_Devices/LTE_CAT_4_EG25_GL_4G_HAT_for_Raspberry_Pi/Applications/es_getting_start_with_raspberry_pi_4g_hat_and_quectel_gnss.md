---
description: Mejora tus aplicaciones IoT con nuestro módulo HAT 4G LTE y GNSS para Raspberry Pi. Esta solución integrada ofrece conectividad celular robusta y posicionamiento preciso en tiempo real, ideal para rastreo de activos, monitoreo de entornos remotos y optimización de operaciones de campo.

title: Primeros Pasos con las Funcionalidades GNSS del HAT 4G para Raspberry Pi
keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - GNSS
  - Edge Computing
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/gnss_setup.webp
slug: /es/raspberry_pi_4g_hat_gnss_functionlities
last_update:
  date: 12/12/2024
  author: Kasun Thushara
---

## Introducción

La integración de GNSS en el módulo 4G LTE mejora sus capacidades, permitiendo posicionamiento preciso en tiempo real y comunicación confiable para aplicaciones IoT. Con soporte para sistemas GNSS multi-constelación, el módulo ofrece seguimiento de ubicación preciso y confiable, incluso en áreas remotas o desatendidas. Estas características lo hacen ideal para escenarios como rastreo de activos, gestión de flotas y monitoreo remoto en tiempo real.

Combinado con conectividad 4G LTE, esta solución asegura transmisión de datos sin interrupciones a sistemas de nube o control, permitiendo gestión eficiente de casos de uso críticos como conservación de vida silvestre, automatización agrícola y respuesta de emergencia. Esta combinación ofrece un enfoque escalable y rentable para automatización basada en ubicación, adecuado para industrias que requieren movilidad y accesibilidad.

## Preparación del Hardware

Necesitas conectar tu antena GNSS. Además, utilizaremos una API de Python para obtener la ubicación exacta en un formato legible y comprensible para humanos. Adicionalmente, se debe instalar una antena 4G.

## Preparación del hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
        <th>Antena GPS</th>
        <th>HAT 4G LTE CAT4 para Raspberry Pi</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-110061521-gps-antenna-kit-for-reterminal-dm-4g-module-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/GPS-Antenna-Kit-for-reTerminal-DM-4G-Module-p-5774.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::note
Si los controladores necesarios para comunicarse con comandos AT no están instalados, necesitarás [instalarlos](https://wiki.seeedstudio.com/es/getting_started_raspberry_pi_4g_lte_hat/#software-preparation)
:::

## La Configuración

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/gnss_setup.png" style={{width:800}}/></div>

## Usando GNSS con Raspberry Pi 4G LTE Hat o Windows Qcom Tool

### Paso 1: Encender GNSS

- Abre Minicom en Raspberry Pi o Qcom Tool en Windows vía USB.

```bash
sudo minicom -D /dev/ttyUSB2 #for minicom on raspberry
```

- Ingresa el siguiente comando para activar GNSS:

```bash
AT+QGPS=1
```

**Respuesta Esperada**:

```bash
OK
```

- Esto activa la funcionalidad GNSS.
- Después de la activación, las sentencias NMEA se enviarán desde el puerto "usbnmea" por defecto.

### Paso 2: Obtener Información de Posicionamiento

- Para recuperar las coordenadas GNSS y otra información, ingresa:

```bash
AT+QGPSLOC=0
```

**Respuesta de Ejemplo**:

+QGPSLOC: 063416.400,3143.2951N,11713.0655E,0.6,224.9,2,162.57,17.6,9.5,110620,07 OK

- **Explicación de la Respuesta**:
  - 063416.400: Hora UTC (formato HHMMSS.SSS)
  - 3143.2951N: Latitud (31°43.2951'N)
  - 11713.0655E: Longitud (117°13.0655'E)
  - 0.6: Dilución Horizontal de Precisión (HDOP)
  - 224.9: Altitud en metros
  - 2: Tipo de fijación de posición (2 = fijación 2D, 3 = fijación 3D)
  - Otros parámetros proporcionan datos GNSS detallados.

### Paso 3: Apagar GNSS

- Después de recuperar los datos requeridos, desactiva GNSS para ahorrar energía ingresando:

```bash
AT+QGPSEND
```

**Respuesta Esperada**

```bash
OK
```

- Este comando apaga el módulo GNSS, conservando recursos.

## Implementación del Código Python

### Paso 1. Preparar el Directorio y el Entorno Virtual

- Abre una terminal en tu Raspberry Pi.
- Crea una nueva carpeta de proyecto y navega hacia ella:

```bash
mkdir GNSS_EX
cd GNSS_EX
```

- Configurar un entorno virtual de Python:

```bash
python3 -m venv --system-site-packages env
```

- Activa el entorno virtual:

```bash
source env/bin/activate
```

- Instala las librerías requeridas:

```bash
pip install pyserial geopy
```

### Paso 2. Preparar el Script de Python

- Abra el **IDE de Python Thonny** (preinstalado en Raspberry Pi).

- Cree un nuevo archivo en Thonny y pegue el código proporcionado en el editor.

- Actualice el parámetro usb_port para que coincida con el puerto serie de su Raspberry Pi para el HAT 4G. Típicamente, podría ser `/dev/ttyUSB2` o `/dev/ttyUSB3`. Ejemplo:

```bash
usb_port = "/dev/ttyUSB2"
```

- Save the file as test_gnss.py in the **GNSS_EX** folder.

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

- Abre una terminal, asegúrate de estar en el directorio del proyecto:

```bash
cd GNSS_EX
```

- Activa el entorno virtual:

```bash
source env/bin/activate
```

- Run the script using Python:

```bash
python test_gnss.py
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/gnss_output.PNG" style={{width:800}}/></div>

## Recursos

- **[Página Web]** [LTE EG25-G](https://www.quectel.com/product/lte-eg25-g/)

- **[Página Web]** [Manual de Comandos AT GNSS V1.4](https://www.quectel.com/download/quectel_ec2xeg9xeg2x-gem05_series_gnss_application_note_v1-4/)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
