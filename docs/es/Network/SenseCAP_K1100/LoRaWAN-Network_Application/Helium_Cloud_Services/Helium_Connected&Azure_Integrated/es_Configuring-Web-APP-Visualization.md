---
description: Configurar Visualización de Aplicación Web
title: Configurar Visualización de Aplicación Web
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Configuring-Web-APP-Visualization
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# Configurando Visualización de Aplicación Web

Ahora que tenemos un dispositivo conectado a la Red Helium así como datos fluyendo desde el dispositivo a la Red Helium hacia Microsoft Azure IoT Hubs, comencemos a explorar cómo analizar y visualizar estos datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/192.png" /></div>

## Preparación del entorno

Para usar esta rutina, por favor descarga y configura [Git](https://www.git-scm.com/downloads) y la CLI de Azure para tu computadora con anticipación.

No entraremos en la instalación y configuración de Git aquí, sino que nos enfocaremos en la instalación de la CLI de Azure para sistemas Windows y MacOS.

La Interfaz de Línea de Comandos (CLI) de Azure es una herramienta de línea de comandos multiplataforma para conectarse a Azure y ejecutar comandos administrativos en recursos de Azure. Permite la ejecución de comandos a través de una terminal usando indicaciones interactivas de línea de comandos o un script.

Para uso interactivo, primero inicias un shell como cmd.exe en Windows, o Bash en Linux o macOS, y luego emites un comando en el indicador del shell. Para automatizar tareas repetitivas, ensamblas los comandos de CLI en un script de shell usando la sintaxis de script de tu shell elegido, y luego ejecutas el script.

### instalación -Windows

Para Windows, la CLI de Azure se instala a través de un MSI, que te da acceso a la CLI a través del Símbolo del sistema de Windows (CMD) o PowerShell. Al instalar para el Subsistema de Windows para Linux (WSL), hay paquetes disponibles para tu distribución de Linux.

La versión actual de la CLI de Azure es **2.37.0**. Para información sobre la versión más reciente, consulta las [notas de versión](https://docs.microsoft.com/en-us/cli/azure/release-notes-azure-cli). Para encontrar tu versión instalada y ver si necesitas actualizar, ejecuta [az version](https://docs.microsoft.com/en-us/cli/azure/reference-index#az_version).

También puedes instalar la CLI de Azure usando PowerShell. Inicia PowerShell como administrador y ejecuta el siguiente comando:

:::note
    PowerShell debe ejecutarse como administrador.
:::
Inicia PowerShell como administrador y ejecuta el siguiente comando:

```sh
$ProgressPreference = 'SilentlyContinue'; Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\AzureCLI.msi; Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet'; rm .\AzureCLI.msi
```

Esto descargará e instalará la última versión de la CLI de Azure para Windows. Si ya tienes una versión instalada, el instalador actualizará la versión existente.

Para instalar una versión específica, reemplaza el argumento `-Uri` con `https://azcliprod.blob.core.windows.net/msi/azure-cli-<version>.msi` cambiando el segmento de versión. Las versiones disponibles se pueden encontrar en las [notas de lanzamiento de la CLI de Azure](https://docs.microsoft.com/en-us/cli/azure/release-notes-azure-cli).

:::note
Después de que la instalación esté completa, necesitarás reabrir PowerShell para usar la CLI de Azure.
:::
Ahora puedes ejecutar la CLI de Azure con el comando `az` desde el Símbolo del sistema de Windows o PowerShell.

### install -MacOS

Para la plataforma macOS, puedes instalar la CLI de Azure con el [gestor de paquetes homebrew](https://brew.sh/). Homebrew facilita mantener tu instalación de la CLI actualizada. El paquete de la CLI ha sido probado en versiones de macOS 10.9 y posteriores.

La versión actual de la CLI de Azure es **2.34.1**. Para información sobre el último lanzamiento, consulta las [notas de lanzamiento](https://docs.microsoft.com/en-us/cli/azure/release-notes-azure-cli). Para encontrar tu versión instalada y ver si necesitas actualizar, ejecuta [az version](https://docs.microsoft.com/en-us/cli/azure/reference-index#az_version).

Puedes instalar la CLI de Azure en macOS actualizando la información de tu repositorio brew, y luego ejecutando el comando `install`:

```sh
brew update && brew install azure-cli
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/1.jpg" /></div>

:::note
La CLI de Azure tiene una dependencia del paquete `python@3.10` de Homebrew, y lo instalará.
:::

## Iniciar sesión en la CLI de Microsoft Azure

Cuando uses por primera vez la CLI de Microsoft Azure en tu computadora, primero necesitarás iniciar sesión en los centros de IoT y escribir `az login` en la ventana de comandos para abrir la ventana de inicio de sesión. En este punto, por favor completa la operación de inicio de sesión.

Si la CLI puede abrir tu navegador predeterminado, iniciará el [flujo de código de autorización](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) y abrirá el navegador predeterminado para cargar una página de inicio de sesión de Azure.

De lo contrario, iniciará el [flujo de código de dispositivo](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-device-code) y te indicará que abras una página del navegador en [https://aka.ms/devicelogin](https://aka.ms/devicelogin) e ingreses el código mostrado en tu terminal.

Inicia sesión con las credenciales de tu cuenta en el navegador.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/161.png" /></div>

## Conectar la CLI de Microsoft Azure al Centro de IoT de Microsoft Azure

Los grupos de consumidores proporcionan vistas independientes del flujo de eventos que permiten a las aplicaciones y servicios de Azure consumir datos de forma independiente desde el mismo punto final del Centro de Eventos. En esta sección, agregas un grupo de consumidores al punto final integrado de tu centro de IoT que la aplicación web utilizará para leer datos.

Los centros de IoT se crean con varias políticas de acceso predeterminadas. Una de estas políticas es la política de servicio, que proporciona permisos suficientes para que un servicio lea y escriba en los puntos finales del centro de IoT. Ejecuta el siguiente comando para obtener una cadena de conexión para tu centro de IoT que se adhiera a la política de servicio:

```sh
az iot hub connection-string show --hub-name ${YourIotHub} --policy-name service
```

Donde la variable de entorno `${YourIotHub}` indica el nombre de tu Azure IoT Hub, como se muestra a continuación.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/157.png" /></div>

La cadena de conexión debería verse similar a la siguiente:

```sh
"HostName={YourIotHubName}.azure-devices.net;SharedAccessKeyName=service;SharedAccessKey={YourSharedAccessKey}"
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/27.jpg" /></div>

**Anota la cadena de conexión del servicio**, la necesitarás más adelante en este tutorial.

:::note
Si por alguna razón no puedes instalar la CLI de Azure en tu computadora, puedes considerar ejecutar bash con el entorno de CLI de Azure directamente desde el panel de IoT hubs para ayudarte con los siguientes pasos.
:::
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/158.png" /></div>

    Puedes ingresar el comando az anterior directamente aquí para obtener la cadena de conexión.
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/159.png" /></div>

## Descargar el Framework del Servicio de Aplicación Web

Por favor descarga la biblioteca correspondiente según el tipo de sensor que desees usar.

<table align="center">
  <tbody><tr>
      <th>Tipo de Sensor</th>
      <th>Dirección de Descarga</th>
    </tr>
    <tr>
      <td align="center">Sensor de luz integrado de Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/lightsensor-Web-APP">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">Sensor IMU integrado de Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/IMUsensor-Web-APP">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Humedad del Suelo</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/soil-moisture-Azure-IoT-hub-Web-APP">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Gas VOC y eCO2 (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/SGP30-Azure-IoT-hub-Web-APP">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Temp&amp;Humedad (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/SHT40-Azure-IoT-hub-Web-APP">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">Módulo Vision AI</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/VisionAI-Azure-IoT-hub-Web-APP">Descargar</a></td>
    </tr>
  </tbody></table>

Abre la biblioteca de la aplicación web en tu editor favorito. Lo siguiente muestra la estructura de archivos vista en VS Code:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/38.jpg" /></div>

Tómate un momento para examinar los siguientes archivos:

- **Chart-device-data.js** es un script del lado del cliente que escucha en el socket web, realiza un seguimiento de cada DeviceId y almacena los últimos 50 puntos de datos entrantes para cada dispositivo. Luego vincula los datos del dispositivo seleccionado al objeto del gráfico.

- **Index.html** maneja el diseño de la interfaz de usuario para la página web y hace referencia a los scripts necesarios para la lógica del lado del cliente.

- **Event-hub-reader.js** es un script del lado del servicio que se conecta al punto final integrado del hub de IoT utilizando la cadena de conexión especificada y el grupo de consumidores. Extrae el DeviceId y EnqueuedTimeUtc de los metadatos en los mensajes entrantes y luego retransmite el mensaje utilizando el método de callback registrado por server.js.

- **Server.js** es un script del lado del servicio que inicializa el socket web y la clase wrapper del Event Hub. Proporciona un callback a la clase wrapper del Event Hub que la clase utiliza para difundir mensajes entrantes al socket web.

## Configurar variables de entorno para la aplicación web

Para leer datos de tu hub de IoT, la aplicación web necesita la cadena de conexión de tu hub de IoT y el nombre del grupo de consumidores a través del cual debe leer. Obtiene estas cadenas del entorno del proceso en las siguientes líneas en **server.js**:

```c
const iotHubConnectionString = process.env.IotHubConnectionString;
const eventHubConsumerGroup = process.env.EventHubConsumerGroup;
```

Habrá dos métodos para este paso, así que comencemos con el más común.

- El primer método. Establece las variables de entorno en tu ventana de comandos con los siguientes comandos. Reemplaza los valores de marcador de posición con la cadena de conexión del servicio para tu hub de IoT y el nombre del grupo de consumidores que creaste anteriormente. No pongas las cadenas entre comillas.

```sh
set IotHubConnectionString = YourIoTHubConnectionString
set EventHubConsumerGroup = YourConsumerGroupName
```

- En el segundo método, podemos hacer cambios directamente en el código. Sería adecuado para casos donde, por ejemplo, añadir variables de entorno es tedioso bajo MacOS.

Por favor, abre el archivo **server.js** con un editor y modifica el código según el nombre del grupo de consumidores que creaste y la cadena de conexión que obtuvimos en el [**paso2**](https://wiki.seeedstudio.com/es/Configuring-Web-APP-Visualization/#connecting-microsoft-azure-cli-to-microsoft-azure-iot-hub). Consulta la siguiente figura para la modificación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/160.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/29.jpg" /></div>

## Ejecutar la Aplicación Web

Por favor, sube el código según el contenido del [wiki anterior](https://wiki.seeedstudio.com/es/Connecting-to-Helium/#upload-code-send-data-to-helium). Asegúrate de que tu dispositivo esté funcionando y enviando datos.

En la ventana de comandos, ejecuta las siguientes líneas para descargar e instalar los paquetes referenciados e iniciar el sitio web:

```sh
npm install
npm start
```

Deberías ver una salida en la consola que indica que la aplicación web se ha conectado exitosamente a tu hub de IoT y está escuchando en el puerto 3000:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/30.jpg" /></div>

## Abrir una página web para ver datos del hub de IoT de Azure

Abre un navegador en `http://localhost:3000`.

En el cuadro de selección de lista en la esquina superior izquierda, selecciona el número de ID de tu dispositivo. Espera hasta que llegue el siguiente conjunto de datos enviados y podrás observar el gráfico de líneas de los cambios de datos.

### Visualización en vivo del sensor de luz

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/31.png" /></div>

También deberías ver una salida en la consola que muestra los mensajes que tu aplicación web está transmitiendo al cliente del navegador:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/32.jpg" /></div>

### Visualización en vivo del sensor IMU

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/176.png" /></div>

También deberías ver una salida en la consola que muestra los mensajes que tu aplicación web está transmitiendo al cliente del navegador:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/177.png" /></div>

### Visualización en vivo del sensor de humedad del suelo

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/188.png" /></div>

También deberías ver una salida en la consola que muestra los mensajes que tu aplicación web está transmitiendo al cliente del navegador:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/187.png" /></div>

### Visualización en vivo del sensor SHT40

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/194.png" /></div>

También deberías ver una salida en la consola que muestra los mensajes que tu aplicación web está transmitiendo al cliente del navegador:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/193.png" /></div>

### Visualización en vivo del sensor SGP30

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/182.png" /></div>

También deberías ver una salida en la consola que muestra los mensajes que tu aplicación web está transmitiendo al cliente del navegador:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/183.png" /></div>

### Visualización en vivo del Módulo de IA de Visión Grove

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/201.png" /></div>

También deberías ver una salida en la consola que muestra los mensajes que tu aplicación web está transmitiendo al cliente del navegador:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/199.png" /></div>

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
