---
description: ODYSSEY - X86J41x5
title: Azure IoT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ODYSSEY-X86J4105-AzureIOT
last_update:
  date: 03/16/2023
  author: Lakshantha

---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/es/ODYSSEY-X86J4105-AzureIOT/
sku: 102110399
--- -->

# Edge IoT - Enviando Datos de Sensores a la Nube

Este tutorial demuestra cómo leer valores de sensores conectados al ODYSSEY - X86J41x5 y envía los datos a **Microsoft Azure IoT Hub**, donde estos datos pueden ser mostrados o procesados para aplicaciones IoT adicionales.

## Recibiendo Datos en Bruto

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/receivingData.gif" /></div>

## Visualización de Datos

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/visulizeData.jpg" /></div>

## Introducción

[IoT Hub](https://azure.microsoft.com/en-us/services/iot-hub/) es un servicio de Microsoft Azure que te permite ingerir grandes volúmenes de telemetría desde tus dispositivos IoT hacia la nube para almacenamiento o procesamiento.

## Prerrequisitos

- Instalar [Python 3](https://www.python.org/downloads/windows/) en ODYSSEY - X86J41x5

- Una cuenta de Microsoft Azure. Si no tienes una, crea una [cuenta gratuita](https://azure.microsoft.com/en-us/free/?WT.mc_id=A261C142F) antes de comenzar.

- Descargar e instalar [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest), una herramienta de línea de comandos para gestionar recursos de Azure.

Una vez instalado Azure CLI, abre `cmd` o `Powershell` y ejecuta el comando `az` y deberías ver la pantalla como se muestra a continuación:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/AzureCLI.png" /></div>

## Preconfiguraciones de Azure CLI

### Iniciar Sesión en Azure

Abre `cmd` o `Powershell` y ejecuta el comando `az login`. Aparecerá una ventana del navegador e inicia sesión en tu cuenta de Microsoft Azure.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/azAcc.png" /></div>

### Agregando Extensiones de Microsoft IoT Azure para Azure CLI

Ejecuta el siguiente comando para agregar la Extensión de Microsoft Azure IoT para Azure CLI a tu instancia de Cloud Shell. La Extensión IoT agrega comandos específicos de IoT Hub, IoT Edge y IoT Device Provisioning Service (DPS) a Azure CLI.

```shell
az extension add --name azure-cli-iot-ext
```

## Creando un IoT Hub

Esta parte describe cómo crear un IoT Hub usando el portal de Azure:

1.Inicia sesión en el [**portal de Azure**](https://portal.azure.com).

2.Elige **Crear un recurso**, y *Buscar en el Marketplace* **IoT Hub**.

3.Selecciona **IoT Hub** y haz clic en **Crear**.

4.En la pestaña **Básicos**, completa el campo:

- **Suscripción:** Selecciona la suscripción a usar para tu hub.

- **Grupo de Recursos:** Selecciona un grupo de recursos o crea uno nuevo. Para crear uno nuevo, selecciona **Crear nuevo** y completa el nombre que quieres usar.

- **Región:** Selecciona la región en la que tu hub estará ubicado. Selecciona la región que esté más cerca de ti.

- **Nombre del IoT Hub:** Ingresa un nombre para tu IoT hub. Este nombre debe ser globalmente único. Si el nombre está disponible, aparecerá una marca de verificación verde.

**Nota Importante:** el IoT hub será públicamente descubrible como un endpoint DNS, así que asegúrate de evitar cualquier información sensible al nombrar el IoT Hub.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/iotHub.jpg" /></div>

1.Selecciona **Siguiente: Tamaño y escala** para continuar:

- **Nivel de precios y escala:** Selecciona **F1: Nivel gratuito** por ahora. Puedes elegir entre varios niveles, dependiendo de cuántas características y cuántos mensajes envíes a través de tu solución por día.

2.Selecciona la pestaña **Revisar + crear** para revisar la configuración y haz clic en **Crear** para crear tu nuevo IoT Hub. Crear el IoT podría tomar unos minutos.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/iotHubProcess.jpg" /></div>

## Registrar un Dispositivo

Un dispositivo debe estar registrado con tu IoT Hub antes de que pueda conectarse:

1.Ejecuta el siguiente comando en `cmd` o `Powershell` para agregar la extensión CLI del IoT Hub y para crear la identidad del dispositivo:

```sh
az iot hub device-identity create --hub-name iot-test-1 --device-id MyPythonDevice
```

### Nota

- `hub-name` -> Reemplaza `iot-test-1` con el nombre de tu IoT Hub creado.

- `device-id` -> `MyPythonDevice`. Este es el nombre del dispositivo que se está registrando. En mi caso, MyPythonDevice es el id del dispositivo.

2.Ejecuta los siguientes comandos para obtener la *cadena de conexión del dispositivo* para el dispositivo que registramos.

```sh
az iot hub device-identity show-connection-string --hub-name iot-test-1 --device-id MyPythonDevice --output table
```

Toma nota de la cadena de conexión del dispositivo, que se ve así: `HostName={YourIoTHubName}.azure-devices.net;DeviceId=MyPythonDevice;SharedAccessKey={YourSharedAccessKey}`. Esto se usará más tarde.

### Nota

- Reemplaza tu `hub-name` y `device-id`, igual que arriba.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/deviceID.png" /></div>

## Recopilando Datos usando Arduino Core

Esta sección simplemente usa Arduino core para leer valores de sensores e imprime las lecturas al monitor Serie, que puede ser leído usando python desde otro lugar.

1.Sigue Getting Started para descargar, instalar y configurar **Arduino IDE**.

2.Conecta un cable de señal del sensor de luz Grove al **A0** del ODYSSEY - X86J41x5, y también alimentación y tierra. Por favor consulta el diagrama de Pinout en Getting Started para más información.

3.Sube el siguiente Código al ODYSSEY - X86J41x5 usando Arduino IDE. Recuerda seleccionar la **Placa** y **Puerto** correctos. Toma nota del **Puerto** aquí, que se usará más tarde. En mi caso, el puerto es `COM4`.

### Código Arduino

```cpp
#define LIGHT A0
#define Serial SerialUSB

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  pinMode(LIGHT, INPUT);

}

void loop() {
  // put your main code here, to run repeatedly:
  int state = analogRead(LIGHT);
  Serial.println(state);
  
  delay(500);

}
```

4.Abre **Serial Monitor** en Arduino IDE para verificar si el programa se está ejecutando correctamente.

## Enviando Lecturas del Sensor de Luz a Azure IoT Hub

Las lecturas del sensor de luz se imprimen en Serial, y se utiliza Python para extraer estos datos y enviarlos a Azure IoT Hub.

1.Abre `Powershell` y ejecuta el siguiente comando para instalar las librerías de Python requeridas.

```sh
pip install azure-iot-device
pip install pyserial
```

2.Copia el siguiente código Python y guárdalo en tu disco local. Usa un editor de texto para hacer los siguientes cambios.

- Reemplaza el valor de la variable `serialPort` con el Puerto Serie que anotamos anteriormente.

- Reemplaza el valor de la variable `CONNECTION_STRING` con la cadena de conexión del dispositivo que también anotamos anteriormente.

### Código Python

```py
# Copyright (c) Microsoft. All rights reserved.
# Licensed under the MIT license. See LICENSE file in the project root for full license information.

import time
import serial


# Using the Python Device SDK for IoT Hub:
#   https://github.com/Azure/azure-iot-sdk-python
# The sample connects to a device-specific MQTT endpoint on your IoT Hub.
from azure.iot.device import IoTHubDeviceClient, Message

# Settings for reading from Arduino Serial
serialPort= "COM4" #Change it to your Serial Port, Check in Arudino IDE 
baudRate = 115200
ser = serial.Serial(serialPort, baudRate, timeout=0.5)

# The device connection string to authenticate the device with your IoT hub.
# Using the Azure CLI:
# az iot hub device-identity show-connection-string --hub-name {YourIoTHubName} --device-id MyNodeDevice --output table
CONNECTION_STRING = "HostName=iot-test-1.azure-devices.net;DeviceId=MyPythonDevice;SharedAccessKey=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# Define the JSON message to send to IoT Hub.
MSG_TXT = '{{"Light": {light}}}'

def iothub_client_init():
    # Create an IoT Hub client
    client = IoTHubDeviceClient.create_from_connection_string(CONNECTION_STRING)
    return client

def iothub_client_telemetry_sample_run():

    try:
        client = iothub_client_init()
        print ( "IoT Hub device sending periodic messages, press Ctrl-C to exit" )

        while True:
            # Build the message with simulated telemetry values.
            time.sleep(0.1)
            light = ser.readline().decode("UTF-8")[:-2]
            if light:
              msg_txt_formatted = MSG_TXT.format(light=light)
              message = Message(msg_txt_formatted)

              # Send the message.
              print( "Sending message: {}".format(message) )
              client.send_message(message)
              print ( "Message successfully sent" )
              time.sleep(1)


    except KeyboardInterrupt:
        print ( "IoTHubClient sample stopped" )
        ser.close()

if __name__ == '__main__':
    print ( "IoT Hub Quickstart #1 - Simulated device" )
    print ( "Press Ctrl-C to exit" )
    iothub_client_telemetry_sample_run()
```

3.En `Powershell`, navega al directorio donde acabas de guardar el archivo de Python. Ejecuta el script de Python para enviar los datos del sensor a Azure IoT Hub.

**Nota:** En mi caso, el archivo de Python se llama `SendingData.py`, cambia el comando por el nombre con el que guardaste el archivo.

```sh
python3 SendingData.py
```

La siguiente captura de pantalla muestra la salida del envío de datos del sensor al IoT Hub de Azure.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/sendingData.png" /></div>

## Lectura de Datos desde el IoT Hub de Azure

La extensión CLI de IoT Hub puede conectarse al endpoint de Eventos del lado del servicio en IoT Hub. La extensión recibe los mensajes de dispositivo a nube enviados desde nuestro dispositivo.

Ejecuta el siguiente comando en cualquier terminal y puedes comenzar a monitorear los mensajes enviados al IoT Hub de Azure.

```sh
az iot hub monitor-events --hub-name iot-test-1 --device-id MyPythonDevice
```

### Nota

- Reemplaza tu `hub-name` y `device-id`, igual que arriba.

La siguiente captura de pantalla muestra los mensajes enviados desde ODYSSEY - X86J41x5 al IoT Hub. Estos datos pueden ser procesados o mostrados.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/recevingData.jpg" /></div>

---

## Visualización en tiempo real de datos de sensores usando Microsoft Power BI

En esta sección, procederemos a mostrar la lectura del sensor de luz en tiempo real usando [Microsoft Power BI](https://powerbi.microsoft.com/en-us/). Si no tienes una cuenta de Power BI, regístrate para obtener una cuenta gratuita antes de comenzar.

**Nota: Asegúrate de haber seguido todos los pasos anteriores y que los mensajes puedan ser recibidos por el IoT Hub exitosamente.**

## Agregar un grupo de consumidores a tu IoT Hub

Los [grupos de consumidores](https://docs.microsoft.com/zh-cn/azure/event-hubs/event-hubs-features#event-consumers) proporcionan vistas independientes del flujo de eventos que permiten a las aplicaciones y servicios de Azure consumir datos de forma independiente desde el mismo punto final de Event Hub.

Para agregar un grupo de consumidores:

1.Inicia sesión en el [**portal de Azure**](https://portal.azure.com).

2.Abre tu IoT Hub, selecciona **Built-in endpoints**, bajo **Consumer Groups** ingresa un nombre para crear un nuevo grupo de consumidores, y **Save**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/endpoint.jpg" /></div>

En mi caso, `lightsensor` es el nuevo grupo de consumidores.

## Crear, configurar y ejecutar un trabajo de Stream Analytics

Para crear un trabajo de Stream Analytics:

3.Inicia sesión en el [**portal de Azure**](https://portal.azure.com).

4.Elige **Create an resource**, y *Search the Marketplace* **Stream Analytics job**.

5.Selecciona **Stream Analytics job** y haz clic en **Create**.

6.Completa los campos como sigue, y **Create**:

- **Job name:** El nombre del trabajo. El nombre debe ser globalmente único. En mi caso, es `light-analytic`

- **Resource group:** Usa el mismo grupo de recursos que usa tu IoT hub.

- **Location:** Usa la misma ubicación que tu grupo de recursos.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/analytic.jpg" /></div>

## Agregar una entrada al trabajo de Stream Analytics

1.Abre el trabajo de Stream Analytics

2.Bajo **Job topology** haz clic en **Inputs**.

3.Haz clic en **Add stream input** -> **IoT Hub**

4.Completa los campos como sigue:

- **Input alias:** El nombre de tu entrada. Esto puede ser cualquier cosa.

- **IoT Hub:** Elige el que hemos usado todo el tiempo.

- **Consumer group**: Elige el que acabamos de crear.

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/settings.jpg" /></div>

1.Selecciona **Save**.

## Agregar una salida al trabajo de Stream Analytics

2.Abre el trabajo de Stream Analytics

3.Bajo **Job topology** haz clic en **Outputs**.

4.Haz clic en **Add** -> **Power BI**

5.**Authorize** con tu cuenta de Microsoft Power BI.

6.Completa los campos como sigue:

- **Output alias:** El nombre de tu salida. Esto también puede ser cualquier cosa.

- **Authentication mode:** Elige User token.

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/powerBI.jpg" /></div>

7.Selecciona **Save**.

## Configurar la consulta del trabajo de Stream Analytics

1.En **Topología del trabajo** haz clic en **Consulta**.

2.Reemplaza `[YourInputAlias]` con el alias de entrada. En mi caso, es `SensorReadings`.

3.Reemplaza `[YourOutputAlias]` con el alias de salida. En mi caso, es `SensorOutput`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/PowerBIsettings.jpg" /></div>

## Ejecutar el trabajo de Stream Analytics

1.En **Información general** haz clic en **Iniciar** -> **Ahora** -> **Iniciar**. El estado del trabajo cambia de **Detenido** a **En ejecución**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/run.jpg" /></div>

**Nota: Para comenzar a obtener lecturas del sensor, recuerda ejecutar el script de Python en ODYSSEY - X86J41x5 para enviar datos a la nube.**

## Crear y publicar un informe de Power BI para visualizar datos

1.Inicia sesión en tu cuenta de [Power BI](https://app.powerbi.com/signupredirect?pbi_source=web).

2.En **Espacios de trabajo** -> **Mi espacio de trabajo**, selecciona **Conjuntos de datos** y deberías ver la hoja de datos que especificaste anteriormente.

3.En **Acciones** selecciona el **primer icono (Crear informe)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/PowerBI1.jpg" /></div>

4.Crea un gráfico de líneas para mostrar el valor del sensor de luz en tiempo real a lo largo del tiempo.

- En **Visualizaciones** selecciona **Gráfico de líneas**.

- En Campos selecciona **EventEnqueuedUtcTime**.

- En Campos selecciona **Light**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/PowerBI2.jpg" /></div>

5.Haz clic en **Guardar** para guardar el Informe.

6.Haz clic en **Archivo** -> **Publicar en web** -> **Crear código de inserción** -> **Publicar**

¡Ahora puedes ver las lecturas del sensor en un panel de control a través de Power BI!

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/PowerBI3.jpg" /></div>

Microsoft también ofrece las [aplicaciones móviles de Power BI](https://powerbi.microsoft.com/en-us/documentation/powerbi-power-bi-apps-for-mobile-devices/) para ver e interactuar con tus paneles de control e informes de Power BI en tu dispositivo móvil.

## Desarrollo Adicional

¡Has configurado exitosamente tu ODYSSEY - X86J41x5 para uno de los escenarios de IoT, ahora puedes implementar esto y construir tus propias soluciones de IoT!

*Para más soporte técnico por favor visita [Azure IoT](https://azure.microsoft.com/en-us/overview/iot/).*

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
