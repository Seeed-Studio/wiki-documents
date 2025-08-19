---
description: Descubre cómo el HAT 4G LTE para Raspberry Pi y el protocolo MQTT permiten una comunicación eficiente y en tiempo real para aplicaciones IoT e IIoT. Simplifica la conectividad remota con comandos AT para una transmisión de datos escalable, de alta velocidad y gestión remota.

title: Configuración de conectividad 4G LTE para IIoT con MQTT
keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - IoT
  - MQTT
  - Edge Computing
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_ex.webp
slug: /es/mqtt_raspberry_pi_4g_lte_hat
last_update:
  date: 04/06/2025
  author: Guillermo
---

## Introducción

El HAT 4G LTE para Raspberry Pi ofrece una conectividad celular confiable y de alta velocidad, lo que lo hace esencial para aplicaciones remotas e industriales de IoT (IIoT). Con MQTT, un protocolo de mensajería ligero, los dispositivos pueden comunicarse eficientemente a través de redes celulares, incluso en ubicaciones aisladas. Usando comandos AT para la configuración, se simplifica el proceso de conectar dispositivos IoT a la red. Esta combinación de 4G LTE y MQTT mejora la transmisión de datos en tiempo real, permitiendo soluciones IIoT escalables con capacidades de gestión remota.

## Requisitos previos

### Requisitos de hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
         <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>    
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
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

### Requisitos de software

#### Controladores y herramientas de comunicación

Si no has instalado los controladores relevantes y herramientas de comunicación, por favor revisa primero la [guía](https://wiki.seeedstudio.com/getting_started_raspberry_pi_4g_lte_hat/#software-preparation).

#### Mosquitto Explorer

Usaremos el broker Mosquitto, específicamente el broker de prueba disponible en **https://test.mosquitto.org**, que `no requiere nombre de usuario ni contraseña`. Para mayor comodidad, se recomienda [instalar Mosquitto Explorer](https://mqtt-explorer.com/) directamente en tu PC para fines de prueba.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_ex.PNG" 
    style={{ width: 500}} 
  />
</div>

## Uso de comandos AT: Conectémonos al Broker MQTT

**Paso 1: Configurar el modo de recepción**

```bash
AT+QMTCFG="recv/mode",0,0,1
```
**Paso 2: Abrir una red para el cliente MQTT**

```bash
AT+QMTOPEN=0,"test.mosquitto.org",1883

```
**Paso 3: Verificar el estado de la conexión MQTT (opcional)**

```bash
AT+QMTOPEN?
```

**Paso 4: Conectar un cliente al servidor Mosquitto MQTT**

```bash
AT+QMTCONN=0,"clientExample"
```

:::note
Ten en cuenta que el ID del cliente debe ser único, así que asegúrate de generar uno altamente único. El broker público de Mosquitto no requiere nombre de usuario ni contraseña para el acceso.
:::

**Paso 5: Publicar un mensaje en un tópico**

```bash
AT+QMTPUBEX=0,0,0,0,"test/topic",30 

```
:::note
 Cuando aparezca `>`, escribe el mensaje y presiona Ctrl+Z
:::

```bash
> This is test data, hello MQTT.
```
Abre Mosquitto Explorer e ingresa el tópico al que publicaste. Verás las actualizaciones aparecer allí.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_pub.PNG" 
    style={{ width: 500}} 
  />
</div>


**Paso 6: Suscribirse a un tópico**

```bash
AT+QMTSUB=0,1,"test/topic",2
```

Abre Mosquitto Explorer e ingresa el tópico y mensaje al que quieres publicar desde el módulo 4G.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_sub_2.PNG" 
    style={{ width: 500}} 
  />
</div>

Verás que el mensaje publicado fue recibido correctamente en el módulo 4G.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_sub_1.PNG" 
    style={{ width: 500}} 
  />
</div>

**Paso 7: Cancelar suscripción a un tópico**

```bash
AT+QMTUNS=0,2,"test/topic"
```

**Paso 8: Desconectar el cliente del servidor MQTT**
```bash
AT+QMTDISC=0
```

## Implementación en Python

### Paso 1. Preparar el directorio y entorno virtual

- Abre una terminal en tu Raspberry Pi.
- Crea una nueva carpeta para el proyecto y navega dentro de ella:

```bash
mkdir mqtt_EX
cd mqtt_EX
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
pip install pyserial 
```

### Paso 2. Preparar el script en Python

- Abre el **IDE Thonny Python** (preinstalado en Raspberry Pi).

- Crea un archivo nuevo en Thonny y pega el código proporcionado en el editor.

- Actualiza el parámetro `usb_port` para que coincida con el puerto serial de tu Raspberry Pi para el HAT 4G. Normalmente, puede ser `/dev/ttyUSB2` o `/dev/ttyUSB3`. Ejemplo:

```bash
usb_port = "/dev/ttyUSB2"
```
- Guarda el archivo como `test_mqtt.py` dentro de la carpeta **mqtt_EX**.

```bash 

import serial
import time

# Serial port configuration
SERIAL_PORT = '/dev/ttyUSB2'  # Adjust based on your setup
BAUD_RATE = 9600


def send_at_command(ser, command, delay=1):
    """
    Sends an AT command to the Quectel module and waits for a response.
    """
    ser.write((command + '\r\n').encode())
    time.sleep(delay)
    response = ser.read_all().decode()
    print(f"Command: {command}\nResponse: {response}")
    return response


def main():
    # Open serial connection
    ser = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=5)
    if not ser.is_open:
        ser.open()

    try:
        # Configure MQTT receive mode
        send_at_command(ser, 'AT+QMTCFG="recv/mode",0,0,1')

        # Open MQTT connection
        send_at_command(ser, 'AT+QMTOPEN=0,"test.mosquitto.org",1883')
        send_at_command(ser, 'AT+QMTOPEN?')  # Check connection status

        # Connect to the MQTT broker
        send_at_command(ser, 'AT+QMTCONN=0,"clientExample"')

        # Subscribe to the topic
        send_at_command(ser, 'AT+QMTSUB=0,1,"test/topic_subscribe",2')

        print("Publishing and subscribing. Press Ctrl+C to stop.")

        while True:
            try:
                # Publish a message
                send_at_command(ser, 'AT+QMTPUBEX=0,0,0,0,"test/topic_publish",30')
                send_at_command(ser, 'This is test data, hello MQTT.', delay=0.5)

                # Read incoming messages
                print("Checking for subscribed topic messages...")
                incoming = ser.read_all().decode()
                if incoming:
                    print(f"Received: {incoming}")

                # Delay between operations
                time.sleep(2)
            except KeyboardInterrupt:
                print("Exiting loop...")
                break

        # Unsubscribe from the topic
        send_at_command(ser, 'AT+QMTUNS=0,2,"test/topic_subscribe"')

        # Disconnect from the broker
        send_at_command(ser, 'AT+QMTDISC=0')
    finally:
        # Close serial connection
        ser.close()


if __name__ == '__main__':
    main()

```

### Paso 3. Ejecutar el script

- Abre una terminal y asegúrate de estar en el directorio del proyecto:

```bash
cd mqtt_EX
```

- Activa el entorno virtual:

```bash
source env/bin/activate
```

- Ejecuta el script usando Python:

```bash
python test_mqtt.py
```
- La salida será similar a la siguiente:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_python.PNG" style={{width:800}}/></div>


## Recursos

- **[Libro PDF]** [Guía de Aplicación MQTT](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_LTE_Standard_MQTT_Application_Note_V1.2.pdf)

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes formas de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>