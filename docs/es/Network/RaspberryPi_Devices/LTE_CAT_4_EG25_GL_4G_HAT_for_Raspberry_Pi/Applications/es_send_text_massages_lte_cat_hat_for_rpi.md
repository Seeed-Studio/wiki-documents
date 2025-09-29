---
description: Explora el papel crítico del envío y recepción de SMS en sistemas de TI usando Quectel 4G HAT. Aprende cómo los SMS aseguran comunicación confiable, mejoran las alertas del sistema, habilitan control remoto y soportan aplicaciones IoT con integración perfecta y escalabilidad. Perfecto para profesionales de TI y entusiastas de IoT.

title: Envío y Recepción de Mensajes SMS con Quectel 4G Raspberry pi Hat 
keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - M2M
  - SMS
  - Edge Computing
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_setup.webp
slug: /es/send_receive_sms_raspberry_pi_4g_lte_hat
last_update:
  date: 12/11/2024
  author: Kasun Thushara
---

## Introducción

En áreas rurales y remotas, donde la cobertura 4G es escasa o no está disponible, la comunicación SMS a través de redes 2G se convierte en una herramienta vital para asegurar conectividad ininterrumpida en sistemas IoT. **Para la preservación de vida silvestre, esta tecnología habilita sistemas de alerta automatizados para monitorear condiciones ambientales, rastrear movimientos de animales y reportar eventos críticos en tiempo real**. Al aprovechar módulos 4G con capacidades SMS, los dispositivos pueden enviar alertas automatizadas y recibir instrucciones, asegurando que incluso en regiones aisladas, los esfuerzos de conservación no se vean obstaculizados por la falta de infraestructura de red moderna. Esta integración de automatización y comunicación ayuda a mejorar la efectividad de los sistemas de monitoreo en áreas remotas de vida silvestre, ofreciendo una solución confiable para protección e investigación.

## Preparación del Hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## La Configuración

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_setup.png" style={{width:800}}/></div>

## Envío de SMS Usando la Herramienta QCOM en Windows

### Paso 1: Configurar el Módulo

- **Conectar el Módulo**
  - Conecta el módulo a tu PC con Windows vía USB. Asegúrate de que los interruptores DIP estén posicionados en el orden correcto. En este caso, todos los interruptores están configurados en 0, lo que significa que están deshabilitados.
- **Encender el Módulo**
  - Presiona el botón de encendido en el módulo.
- **Verificar los Puertos de Comunicación**
  - [Asegúrate de que los controladores estén instalados correctamente](https://wiki.seeedstudio.com/es/getting_started_raspberry_pi_4g_lte_hat/#for-windows). Deberías ver los puertos COM listados en el Administrador de Dispositivos de Windows.

### Paso 2: Abrir la Interfaz QCOM

- **Instalar e Iniciar QCOM**
  - Descarga e instala el software **QCOM v1.6**.(si no lo tienes)
  - Inicia la herramienta en tu PC.
- **Configurar el Puerto COM**
  - Selecciona el puerto COM asociado con el módulo (ej., COM3) en la interfaz QCOM.
  - Configura la velocidad de baudios al valor recomendado (ej., 9600).

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/USBcommunication-2.PNG"
    style={{ width: 600}}
  />
</div>

### Paso 3: Enviar un SMS

**Probar la Comunicación del Módulo**

- En la caja de entrada de comandos, escribe el siguiente comando:

```bash
AT
```

- Haz clic en Enviar.
- El módulo debería responder con:

```bash
OK
```

- Esto confirma que el módulo está listo.
  
**Configurar Modo SMS**

- Escribe el siguiente comando para configurar el modo SMS a texto:

```bash
AT+CMGF=1
```

- Haz clic en Enviar.
- El módulo debería responder con:

```bash
OK
```

**Verificar Número SMSC**

- Consulta el número SMSC (Centro de Servicio de Mensajes Cortos) de la tarjeta SIM escribiendo:

```bash
AT+CSCA?
```

- Haz clic en Enviar. La respuesta debería ser algo como:
  
```bash
+CSCA: "+1234567890",145
OK
```

- Si no se ha configurado ningún SMSC, contacta a tu proveedor de servicios para obtener el número correcto, y configúralo usando:

```bash
AT+CSCA="+1234567890"
```

**Redactar y Enviar SMS**

- Escribe el comando para iniciar un SMS:

```bash
AT+CMGS="+9876543210"
```

- Reemplaza +9876543210 con el número de teléfono del destinatario.

- Haz clic en Enviar.

- La interfaz QCOM mostrará:

```bash
>
```

- Ahora, escribe tu mensaje (por ejemplo, ¡Hola!) en el cuadro de texto.

**Enviar el SMS**

- Presiona Ctrl + Z o usa la opción de interfaz QCOM para enviar el SMS.
- El módulo responderá con:

```bash
+CMGS: 25 
OK
```

- Esto indica que el SMS se envió exitosamente.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_send.PNG"
    style={{ width: 600}}
  />
</div>

### Paso 4: Verificar el SMS

- Revisa el teléfono del destinatario para asegurar que el mensaje haya sido recibido.

## Envío de un SMS Usando Minicom en Raspberry Pi

Asumiendo que has instalado los controladores y arrancado el módulo correctamente. Si no, [por favor sigue esta guía](https://wiki.seeedstudio.com/es/getting_started_raspberry_pi_4g_lte_hat/#raspberry-pi).

**Paso 1: Abrir Minicom**

:::note
Si los controladores necesarios para comunicarse con comandos AT no están instalados, necesitarás [instalarlos](https://wiki.seeedstudio.com/es/getting_started_raspberry_pi_4g_lte_hat/#software-preparation)
:::

```bash
sudo minicom -D /dev/ttyUSB2
```

**Paso 2: Sigue los Comandos en la Tabla**

| **Comando**          | **Respuesta**                 | **Explicación**                                   |
|-----------------------|------------------------------|---------------------------------------------------|
| `ATE`                | `OK`                        | Habilita el eco para ver los comandos escritos en Minicom.     |
| `AT`                 | `OK`                        | Verifica la disponibilidad del módulo.                         |
| `AT+CMGF=1`          | `OK`                        | Establece el modo SMS en Modo Texto.                  |
| `AT+CSCA?`           | `+CSCA: "+1234567890",145`  | Consulta el número SMSC (Centro de Servicio de Mensajes Cortos) de la SIM. |
| `AT+CMGS="+94712222803"` | `>`                      | Prepara el módulo para aceptar el contenido del mensaje para el destinatario especificado. |
| *(Escribe el mensaje: `Hello!`)* | *(Sin respuesta)*     | Escribe el contenido del mensaje.                        |
| *(Presiona `Ctrl+Z`)*   | `+CMGS: 25` `OK`       | Envía el mensaje. El módulo confirma con `+CMGS` y el ID de referencia del mensaje. |

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/rpi_send_msg_1.PNG"
    style={{ width: 600}}
  />
</div>

## Script de Python para Enviar Mensajes

```bash

import serial
import time

# Configure the serial port
SERIAL_PORT = "COM7"  # Replace with your module's COM port (e.g., COM3 on Windows, /dev/ttyUSB2 on Linux)
BAUD_RATE = 9600    # Adjust to the baud rate of your GSM module

# SMS details
SMSC_NUMBER = "+9477000000"  # Replace with your carrier's SMSC number in international format
RECIPIENT_NUMBER = "+94712222813"  # Replace with the recipient's phone number in international format
MESSAGE = "Hello, this is a test message from Python!"

def send_at_command(command, expected_response="OK", timeout=3):
    """Send an AT command to the GSM module and wait for a response."""
    ser.write((command + "\r").encode())
    time.sleep(timeout)
    response = ser.read_all().decode()
    print(f"Command: {command}\nResponse: {response}")
    return expected_response in response

try:
    # Open the serial connection
    ser = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=1)
    time.sleep(2)  # Allow the module to initialize

    # Test communication with the GSM module
    if not send_at_command("AT"):
        raise Exception("GSM module not responding. Check the connection.")

    # Set SMSC number (optional, only if needed)
    if not send_at_command(f'AT+CSCA="{SMSC_NUMBER}"'):
        raise Exception("Failed to set SMSC number.")

    # Set SMS to text mode
    if not send_at_command("AT+CMGF=1"):
        raise Exception("Failed to set SMS mode to text.")

    # Send SMS
    if not send_at_command(f'AT+CMGS="{RECIPIENT_NUMBER}"', ">"):
        raise Exception("Failed to initiate SMS sending.")

    # Provide the message content and send Ctrl+Z to finalize
    ser.write((MESSAGE + "\x1A").encode())  # Ctrl+Z is sent as '\x1A'
    time.sleep(5)  # Wait for the module to send the SMS
    response = ser.read_all().decode()
    print(f"SMS Send Response: {response}")

    if "OK" in response:
        print("SMS sent successfully!")
    else:
        print("Failed to send SMS. Check the module or command syntax.")

except Exception as e:
    print(f"Error: {e}")

finally:
    if ser.is_open:
        ser.close()


```

## Recibir Mensajes SMS Usando Comandos AT en Entorno Windows

Esto explica cómo recibir y leer mensajes SMS usando comandos AT paso a paso. Sigue estos comandos en el orden listado.

Asumiendo que has instalado los controladores y arrancado el módulo correctamente. Si no, [por favor sigue esta guía](https://wiki.seeedstudio.com/es/getting_started_raspberry_pi_4g_lte_hat/#for-windows).

### Paso 1: Configurar el Modo SMS a Texto

Usa el comando AT+CMGF=1 para configurar el módulo GSM al Modo Texto para un manejo más fácil de SMS.

**Comando:**

```bash
AT+CMGF=1
Expected Response:
OK
```

### Paso 2: Verificar el Almacenamiento Actual de Mensajes

Use el comando AT+CPMS? para verificar la configuración actual del almacenamiento de mensajes.

**Comando:**

```bash
AT+CPMS?
```

**Respuesta Esperada:**
+CPMS: "SR",0,5,"MT",19,255,"MT",19,255 OK

**Explicación:**

- `SR`: Almacenamiento de Informe de Estado (p. ej., informes de entrega de SMS).
- `MT`: Memoria del Terminal Móvil (almacenamiento SIM y módulo).
En este ejemplo, "MT" contiene 19 mensajes almacenados de una capacidad de 255.

### Paso 3: Cambiar el Almacenamiento de Mensajes a "MT"

Para acceder a los mensajes en la memoria del Terminal Móvil, cambie el almacenamiento a "MT" usando AT+CPMS="MT".

**Comando:**

```bash
AT+CPMS="MT"
```

**Respuesta Esperada:**

```bash
+CPMS: 19,255,19,255,19,255 OK
```

**Explicación**

- 19,255: 19 mensajes están almacenados actualmente, y el almacenamiento tiene una capacidad para 255 mensajes.

### Paso 4: Listar Todos los Mensajes Almacenados

Recupera todos los mensajes almacenados en la memoria seleccionada usando el comando AT+CMGL="ALL".

**Comando:**

```bash
AT+CMGL="ALL"
```

**Respuesta Esperada:**

```bash
+CMGL: 1,"REC UNREAD","+1234567890","","20/12/05,10:44:12+32" Hello, this is a test message! +CMGL: 2,"REC READ","+9876543210","","20/12/05,10:45:12+32" Another test message! OK
```

**Explicación:**

- +CMGL: 1: Índice del primer mensaje.
- "REC UNREAD": Estado del mensaje (No leído).
- "+1234567890": Número de teléfono del remitente.
- Hello, this is a test message!: Contenido del mensaje.

### Paso 5: Leer un Mensaje Específico

Para leer un mensaje específico por su índice (por ejemplo, índice 1), usa el comando AT+CMGR=|index|.

**Comando:**

```bash
AT+CMGR=1
```

**Respuesta Esperada:**

```bash
+CMGR: "REC UNREAD","+1234567890","","20/12/05,10:44:12+32" Hello, this is a test message! OK
```

**Explicación:**

- `REC UNREAD`: El mensaje está marcado como no leído.
- `+1234567890`: El número de teléfono del remitente.
- Hello, this is a test message!: El contenido del mensaje.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/rec_massages.PNG"
    style={{ width: 600}}
  />
</div>

## Recibir Mensajes SMS Usando Minicom en Raspberry Pi

Asumiendo que has instalado los controladores y arrancado el módulo correctamente. Si no, [por favor sigue esta guía](https://wiki.seeedstudio.com/es/getting_started_raspberry_pi_4g_lte_hat/#raspberry-pi).

## Paso 1: Abrir Minicom

```bash
sudo minicom -D /dev/ttyUSB2
```

## Paso 2: Sigue los Comandos en la Tabla

| **Paso** | **Comando**          | **Detalles de Respuesta**                                                                                                                                           | **Propósito/Explicación**                                                                                                                                        |
|----------|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **1**    | `ATE`                | `OK`                                                                                                                                                                 | Habilita el eco para ver los comandos escritos en el terminal.                                                                                                   |
| **2**    | `AT+CMGF=1`          | `OK`                                                                                                                                                                 | Establece el modo SMS a Modo Texto para un manejo más fácil de SMS.                                                                                              |
| **3**    | `AT+CPMS?`           | `+CPMS: "SR",0,5,"MT",19,255,"MT",19,255 OK`                                                                                                                         | Verifica el almacenamiento de mensajes actual. `"SR"`: Reportes de Estado. `"MT"` (Terminal Móvil): Contiene mensajes almacenados en la SIM y el módulo.       |
| **4**    | `AT+CPMS="MT"`       | `+CPMS: 19,255,19,255,19,255 OK`                                                                                                                                     | Cambia el almacenamiento de mensajes a `"MT"` (Terminal Móvil). `19,255`: Indica 19 mensajes almacenados de 255 espacios disponibles.                          |
| **5**    | `AT+CMGL="ALL"`      | `+CMGL: 1,"REC UNREAD","+1234567890","","20/12/05,10:44:12+32" Hello, this is a test message! +CMGL: 2,"REC READ","+9876543210","","20/12/05,10:45:12+32" Another test message! OK` | Recupera todos los mensajes almacenados en la memoria seleccionada. `"REC UNREAD"`: Mensaje no leído. `+1234567890`: Número de teléfono del remitente.          |
| **6**    | `AT+CMGR=1`          | `+CMGR: "REC UNREAD","+1234567890","","20/12/05,10:44:12+32" Hello, this is a test message! OK`                                                                      | Lee un mensaje específico por su índice (ej., `1`). `"REC UNREAD"`: Indica que el mensaje no está leído. `Hello, this is a test message!`: Contenido del mensaje. |

## Recursos

- **[Página Web]** [LTE EG25-G](https://www.quectel.com/product/lte-eg25-g/)

- **[Página Web]** [Manual de Comandos AT V2.0](https://www.quectel.com/download/quectel_ec2xeg9xeg2x-gem05_series_at_commands_manual_v2-0-2/)

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
