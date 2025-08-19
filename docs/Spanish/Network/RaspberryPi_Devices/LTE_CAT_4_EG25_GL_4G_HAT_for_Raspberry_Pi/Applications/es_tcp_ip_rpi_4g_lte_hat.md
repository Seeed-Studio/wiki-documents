---
description: Libera el poder de TCP para tu Raspberry Pi con el 4G HAT. Descubre cómo TCP garantiza un intercambio de datos confiable, esencial para aplicaciones IoT, monitoreo remoto y más.

title: HAT 4G LTE en Raspberry Pi – Redes TCP/IP Explicadas
keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - IoT
  - TCP/IP
  - Edge Computing
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/tcp_python.webp
slug: /es/tcp_ip_raspberry_pi_4g_lte_hat
last_update:
  date: 06/05/2025
  author: Guillermo
---

## Introducción

TCP (Protocolo de Control de Transmisión) es fundamental para aplicaciones que utilizan el Raspberry Pi con un HAT 4G, ya que garantiza una transmisión de datos confiable, ordenada y verificada a través de internet. Esto es crucial para aplicaciones en tiempo real como los dispositivos IoT, donde se necesita una comunicación constante con servidores en la nube o sistemas remotos. La fiabilidad de TCP lo hace ideal para enviar datos críticos (por ejemplo, lecturas de sensores, telemetría) y recibir comandos, asegurando que no se pierda ni corrompa información. Soporta diversas aplicaciones como monitoreo remoto, sistemas de mensajería y transferencia de archivos, con el Raspberry Pi actuando como puerta de enlace o cliente.

## Requisitos Previos

### Requisitos de Hardware

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

### Requisitos de Software

#### Controladores y herramientas de comunicación

Si no has instalado los controladores y herramientas de comunicación necesarios, por favor consulta primero esta [guía](https://wiki.seeedstudio.com/getting_started_raspberry_pi_4g_lte_hat/#software-preparation).

### Requisitos Adicionales

Necesitarás un servidor TCP preconfigurado con los siguientes datos:

- **Host**: Por ejemplo, tu propio servidor o, para fines de prueba, `tcpbin.com`.
- **Número de Puerto**: Un puerto dedicado; en este caso, usaremos el puerto `4242` de `tcpbin.com`.

tcpbin.com es un servidor TCP público utilizado para pruebas y depuración de comunicación TCP/IP. Devuelve (hace eco) de los mensajes que se le envían, lo que lo hace ideal para verificar la conectividad y la transmisión de datos.

## Enviar Comandos AT a tcpbin.com

Abre Minicom en Raspberry Pi o Qcom Tool en Windows mediante USB.


```bash
sudo minicom -D /dev/ttyUSB2
```

| Paso | Acción                                                  | Comando AT                                   | Respuesta Esperada                                          |
|------|----------------------------------------------------------|----------------------------------------------|-------------------------------------------------------------|
| 1    | Configura el APN de tu proveedor de red móvil.           | `AT+QICSGP=1,1,"dialogbb","","",1`            | `OK`                                                        |
| 2    | Activa el contexto PDP.                                  | `AT+QIACT=1`                                  | `OK`                                                        |
| 3    | Verifica que el contexto PDP esté activado.              | `AT+QIACT?`                                   | `+QIACT: 1,1,1,"<Tu_Dirección_IP>"`<br />`OK`                  |
| 4    | Abre una conexión TCP con el servidor.                   | `AT+QIOPEN=1,0,"TCP","tcpbin.com",4242,0,0`   | `+QIOPEN: 0,0` (Indica una conexión exitosa)                |
| 5    | Envía un mensaje al servidor.                            | `AT+QISEND=0`                                 | `>` (Indica que puedes escribir el mensaje)<br />Después de escribir el mensaje: `Hello TCPBin<Ctrl+Z>`<br />`SEND OK` |
| 6    | Lee la respuesta del servidor.                           | `AT+QIRD=0,1500`                              | `+QIRD: <longitud>`<br />`Hello TCPBin`<br />`OK`               |
| 7    | Cierra la conexión TCP.                                  | `AT+QICLOSE=0`                                | `OK`                                                        |


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/tcp.PNG" 
    style={{ width: 500}} 
  />
</div>

## Script Automatizado en Python

A continuación se muestra un script automatizado en Python para interactuar con el módulo Quectel 4G LTE en una Raspberry Pi. El script utiliza la biblioteca `serial` para enviar comandos AT al módulo. Puedes personalizar variables como el APN, el puerto, la velocidad de baudios, el puerto TCP y la dirección.

## Implementación del Código en Python

### Paso 1. Preparar el Directorio y el Entorno Virtual

- Abre una terminal en tu Raspberry Pi.
- Crea una nueva carpeta para el proyecto y navega dentro de ella:

```bash
mkdir TCP_EX
cd TCP_EX
```
- Configura un entorno virtual de Python:
```bash
python3 -m venv --system-site-packages env
```

- Activa el entorno virtual:

```bash
source env/bin/activate
```

- Instala las bibliotecas requeridas

```bash
pip install pyserial 
```

### Paso 2. Preparar el Script en Python

- Abre el **IDE Thonny** (preinstalado en Raspberry Pi).

- Crea un nuevo archivo en Thonny y pega el código proporcionado en el editor.

- Actualiza el parámetro usb_port para que coincida con el puerto serial del HAT 4G en tu Raspberry Pi. Normalmente será `/dev/ttyUSB2` o `/dev/ttyUSB3`. Ejemplo:

```bash
usb_port = "/dev/ttyUSB2"
```
- Guarda el archivo como test_mqtt.py en la carpeta **TCP_EX**.

```bash 
import serial
import time

# Configuration Variables
APN = "dialogbb"  # Replace with your network APN
PORT = "/dev/ttyUSB2"  # Serial port connected to the Quectel module
BAUDRATE = 9600  # Communication baud rate
TCP_ADDRESS = "tcpbin.com"  # TCP server address
TCP_PORT = 4242  # TCP server port
MESSAGE = "Hello TCPBin"  # Message to send


def send_command(ser, command, wait_for="OK", timeout=5):
    """
    Send an AT command to the module and wait for a response.
    """
    ser.write((command + "\r\n").encode())
    time.sleep(0.5)
    end_time = time.time() + timeout
    response = b""
    while time.time() < end_time:
        if ser.in_waiting > 0:
            response += ser.read(ser.in_waiting)
            if wait_for.encode() in response:
                break
    print(f">> {command}")
    print(response.decode().strip())
    return response.decode().strip()


def main():
    try:
        # Open serial connection
        ser = serial.Serial(PORT, BAUDRATE, timeout=1)
        time.sleep(2)  # Allow the module to initialize

        # 1. Configure APN
        send_command(ser, f'AT+QICSGP=1,1,"{APN}","","",1')

        # 2. Activate PDP Context
        send_command(ser, "AT+QIACT=1")

        # 3. Check PDP Context State
        send_command(ser, "AT+QIACT?")

        # 4. Open TCP Connection
        send_command(ser, f'AT+QIOPEN=1,0,"TCP","{TCP_ADDRESS}",{TCP_PORT},0,0')
        time.sleep(5)  # Allow connection to establish

        # 5. Send Data
        send_command(ser, f"AT+QISEND=0")
        ser.write((MESSAGE + "\x1A").encode())  # Send message and end with Ctrl+Z
        time.sleep(1)  # Allow time for sending
        print("Message sent.")

        # 6. Read Response
        response = send_command(ser, "AT+QIRD=0,1500")
        print(f"Server Response: {response}")

        # 7. Close Connection
        send_command(ser, "AT+QICLOSE=0")
        print("Connection closed.")

        # Close serial port
        ser.close()

    except Exception as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    main()


```

### Paso 3. Ejecutar el Script

- Abre una terminal y asegúrate de estar en el directorio del proyecto:
```bash
cd TCP_EX
```

- Activa el entorno virtual:

```bash
source env/bin/activate
```

- Ejecuta el script con Python:
```bash
python test_tcp.py
```
- Salida esperada: 
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/tcp_python.PNG" style={{width:600}}/></div>


## Recursos


- **[Libro en PDF]** [Guía de Aplicación TCP](https://www.quectel.com/download/quectel_ec2xeg2xeg9xem05_series_tcpip_application_note_v1-3/ )
  

## Soporte Técnico y Discusión sobre el Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes formas de soporte y asegurarnos de que tu experiencia con nuestros dispositivos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>