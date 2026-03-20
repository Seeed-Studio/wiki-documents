---
description: Aprimore suas aplicações de IoT com nosso módulo HAT Raspberry Pi 4G LTE e GNSS. Esta solução integrada oferece conectividade celular robusta e posicionamento preciso em tempo real, ideal para rastrear ativos, monitorar ambientes remotos e otimizar operações em campo.
title: Primeiros Passos com as Funcionalidades GNSS do Raspberry Pi 4G HAT
keywords:
  - Raspberry Pi Hat
  - Primeiros passos
  - IIoT
  - GNSS
  - Edge Computing
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/gnss_setup.webp
slug: /raspberry_pi_4g_hat_gnss_functionlities
last_update:
  date: 12/12/2024
  author: Kasun Thushara
createdAt: '2024-12-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/raspberry_pi_4g_hat_gnss_functionlities/
---

## Introdução

A integração do GNSS ao módulo 4G LTE aprimora suas capacidades, permitindo posicionamento preciso em tempo real e comunicação confiável para aplicações de IoT. Com suporte a sistemas GNSS de múltiplas constelações, o módulo oferece rastreamento de localização preciso e confiável, mesmo em áreas remotas ou com pouca cobertura. Esses recursos o tornam ideal para cenários como rastreamento de ativos, gestão de frotas e monitoramento remoto em tempo real.

Combinado com a conectividade 4G LTE, esta solução garante transmissão de dados contínua para sistemas em nuvem ou de controle, permitindo o gerenciamento eficiente de casos de uso críticos como conservação da vida selvagem, automação agrícola e resposta a emergências. Essa combinação oferece uma abordagem escalável e econômica para automação baseada em localização, adequada para indústrias que exigem mobilidade e acessibilidade.

## Preparação de Hardware

Você precisa conectar sua antena GNSS. Além disso, usaremos uma API Python para obter a localização exata em um formato legível e compreensível para humanos. Adicionalmente, uma antena 4G deve ser instalada.

## Preparação de hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
        <th>Antena GPS</th>
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
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/GPS-Antenna-Kit-for-reTerminal-DM-4G-Module-p-5774.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::note
Se os drivers necessários para comunicação com comandos AT não estiverem instalados, você precisará [instalá-los](https://wiki.seeedstudio.com/pt-br/getting_started_raspberry_pi_4g_lte_hat/#preparação-de-software)
:::

## A Configuração

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/gnss_setup.png" style={{width:800}}/></div>

## Usando GNSS com Raspberry Pi 4G LTE Hat ou Ferramenta Qcom no Windows

### Etapa 1: Ligar o GNSS

- Abra o Minicom no Raspberry Pi ou a Ferramenta Qcom no Windows via USB.

```bash
sudo minicom -D /dev/ttyUSB2 #for minicom on raspberry
```

- Insira o seguinte comando para ativar o GNSS:

```bash
AT+QGPS=1
```

**Resposta Esperada**:

```bash
OK
```

- Isso liga a funcionalidade GNSS.
- Após a ativação, frases NMEA serão emitidas pela porta "usbnmea" por padrão.

### Etapa 2: Obter Informações de Posicionamento

- Para obter as coordenadas GNSS e outras informações, insira:

```bash
AT+QGPSLOC=0
```

**Exemplo de Resposta**:

+QGPSLOC: 063416.400,3143.2951N,11713.0655E,0.6,224.9,2,162.57,17.6,9.5,110620,07 OK

- **Explicação da Resposta**:
  - 063416.400: Hora UTC (formato HHMMSS.SSS)
  - 3143.2951N: Latitude (31°43.2951'N)
  - 11713.0655E: Longitude (117°13.0655'E)
  - 0.6: Diluição Horizontal de Precisão (HDOP)
  - 224.9: Altitude em metros
  - 2: Tipo de fix de posição (2 = fix 2D, 3 = fix 3D)
  - Outros parâmetros fornecem dados GNSS detalhados.

### Etapa 3: Desligar o GNSS

- Após obter os dados necessários, desative o GNSS para economizar energia inserindo:

```bash
AT+QGPSEND
```

**Resposta Esperada**

```bash
OK
```

- Este comando desliga o módulo GNSS, economizando recursos.

## Implementação em Código Python

### Etapa 1. Preparar o Diretório e o Ambiente Virtual

- Abra um terminal no seu Raspberry Pi.
- Crie uma nova pasta de projeto e navegue até ela:

```bash
mkdir GNSS_EX
cd GNSS_EX
```

- Configure um ambiente virtual Python:

```bash
python3 -m venv --system-site-packages env
```

- Ative o ambiente virtual:

```bash
source env/bin/activate
```

- Instale as bibliotecas necessárias:

```bash
pip install pyserial geopy
```

### Etapa 2. Preparar o Script Python

- Abra o **Thonny Python IDE** (pré-instalado no Raspberry Pi).

- Crie um novo arquivo no Thonny e cole o código fornecido no editor.

- Atualize o parâmetro usb_port para corresponder à porta serial do 4G HAT no seu Raspberry Pi. Normalmente, pode ser `/dev/ttyUSB2` ou `/dev/ttyUSB3`. Exemplo:

```bash
usb_port = "/dev/ttyUSB2"
```

- Salve o arquivo como test_gnss.py na pasta **GNSS_EX**.

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

### Etapa 3. Executar o Script

- Abra um terminal, certifique-se de que você está no diretório do projeto:

```bash
cd GNSS_EX
```

- Ative o ambiente virtual:

```bash
source env/bin/activate
```

- Execute o script usando Python:

```bash
python test_gnss.py
```

- A saída

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/gnss_output.PNG" style={{width:800}}/></div>

## Recursos

- **[Web Page]** [LTE EG25-G](https://www.quectel.com/product/lte-eg25-g/)

- **[Web Page]** [GNSS AT Commands Manual V1.4](https://www.quectel.com/download/quectel_ec2xeg9xeg2x-gem05_series_gnss_application_note_v1-4/)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Disponibilizamos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
