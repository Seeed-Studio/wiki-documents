---
description: Guía para usar MeshCore Remote Terminal para monitorizar/visualizar/ejecutar MQTT en un nodo MeshCore.
title: Primeros pasos con MeshCore Remote Terminal
keywords:
  - MeshCore
  - ESP32 MeshCore
  - MeshCore mqtt
  - MeshCore Starter Kit
  - MeshCore network
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/first.png
slug: /get_started_with_meshcore_remote_terminal
sku: 102010611,113110064
sidebar_position: 4
last_update:
  date: 4/20/2026
  author: Michelle Huang
createdAt: '2026-04-20'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/es/get_started_with_meshcore_remote_terminal/
---
Este wiki presentará [Remote Terminal for MeshCore](https://github.com/jkingsman/Remote-Terminal-for-MeshCore) (RemoteTerm) para proporcionar una interfaz para que los dispositivos [MeshCore](https://meshcore.io/) transmitan mensajes. Este tutorial ofrece una configuración fundamental para ejecutar RemoteTerm en una Raspberry Pi usando el [Seeed XIAO ESP32S3 & SX1262 Kit](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) como radio complementaria y una [Raspberry Pi Zero 2W](https://www.seeedstudio.com/Raspberry-Pi-Zero-2-W-p-5197.html) para una solución MeshCore compacta y todo en uno para usuarios avanzados.

## Introducción a RemoteTerm

[RemoteTerm](https://github.com/jkingsman/Remote-Terminal-for-MeshCore) es una aplicación de código abierto que se ejecuta en un servidor con un dispositivo MeshCore conectado. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/first.png" style={{width:900, height:'auto'}}/></div>

Proporciona una interfaz a la red MeshCore local, lo que permite que cualquier dispositivo en la misma red local (incluso si está fuera de la red eléctrica) envíe y reciba mensajes a través de la radio. RemoteTerm es extremadamente amigable para dispositivos móviles. Permite capacidades adicionales como:

- Almacenamiento en caché de todos los paquetes recibidos
- Ejecución de múltiples bots de Python
- Supervisión de contactos y canales ilimitados 
- Acceso remoto a tu radio a través de tu red o VPN
- Reenvío de paquetes a MQTT, SQS, Apprise, etc.
- Visualizar el mapa de nodos de la malla

## Configuración

### Hardware

<table align="center">
<tbody><tr>
<th>Kit XIAO ESP32S3 & Wio-SX1262</th>
<th>Raspberry Pi Zero 2W</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:600, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/ZERO2W.jpg" style={{width:600, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-Zero-2-W-p-5197.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

Además del hardware principal, aquí están los accesorios necesarios:

- Tarjeta MicroSD de 16 GB o mayor
- Cable USB Micro a USB-C (para conectar la radio)
- USB Micro a USB-A o USB-C (para alimentar la Raspberry Pi)
-  Fuente de alimentación fiable para la Raspberry Pi (se recomienda 5V 2.5A)

### Configuración de la radio

- Combina la placa Seeed [XIAO ESP32S3](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) y el módulo SX1262 usando el acoplador B2B.
- Conecta la antena LoRa al SX1262.
- Conéctalo a tu ordenador y flashea con "Seeed Studio Xiao S3 WIO" (Serial Companion) mediante el [web flasher](https://meshcore.io/flasher). 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/Firmware.png" style={{width:900, height:'auto'}}/></div>

:::tip
 Este tutorial te indica cómo configurar un compañero serie. RemoteTerm también admite compañeros TCP y Bluetooth, pero son un poco más complicados de configurar. 
:::

### Configuración de la Pi

- [Haz clic aquí](https://www.raspberrypi.com/software/) para descargar Raspberry Pi Imager
- Abre el imager y selecciona tu modelo de Raspberry Pi, y selecciona "Raspberry Pi OS Lite (64 bit)"
- Configura SSH con una contraseña, o clave si lo deseas, y configura la conexión wifi
- Conecta el ESP32 MeshCore a la [Raspberry Pi](https://www.seeedstudio.com/Raspberry-Pi-Zero-2-W-p-5197.html) 

:::warning
asegúrate de que el nodo ESP32 LoRa Mesh esté conectado al puerto `USB`, no al puerto `POWER` 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/USB.png" style={{width:900, height:'auto'}}/></div>
:::

Una instalación completa (con adaptador en ángulo recto) puede verse así:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/HardwareInstallation.png" style={{width:500, height:'auto'}}/></div>

- Conecta la alimentación al puerto `POWER` de la Pi
- Usa la interfaz de administración de tu router doméstico para determinar la dirección asignada a la Raspberry Pi. Considera asignar una reserva DHCP para evitar cambios de dirección IP.

### Configuración de la Pi

- Abre una sesión SSH a la Raspberry Pi
- Valida que la radio aparezca. `find /dev/serial/by-id -maxdepth 1 -type l -print | sort` debería mostrar un listado como `/dev/serial/by-id/usb-Espressif_USB_JTAG_serial_debug_unit_XX:XX:XX:XX:XX:XX-if00`
- Actualiza y mejora
    ```bash
    sudo apt update                        # update package repositories
    sudo apt upgrade -y                    # upgrade packages
    sudo apt-get install -y git            # install git
    curl -fsSL https://get.docker.com | sh # install docker
    ```
- Clonar y lanzar
    ```bash
    git clone https://github.com/jkingsman/Remote-Terminal-for-MeshCore.git
    cd Remote-Terminal-for-MeshCore/

    # configure the docker setup
    ./scripts/setup/install_docker.sh
    ```

#### Recorrido por las opciones de configuración

El [README](https://github.com/jkingsman/Remote-Terminal-for-MeshCore/blob/main/README.md) y el [blog](https://jacksbrain.com/2026/04/meshcore-management-remoteterm-seeed-xiao-esp32s2-sx1262/) proporcionan instrucciones de configuración más detalladas

### Arranque del servidor
#### Configuración

Después de haber configurado tu dockerfile mediante el script de configuración, ejecuta

```bash
sudo docker compose up -d
```

para iniciar el servidor. Los siguientes comandos también pueden ser útiles:

```bash
sudo docker compose up -d    # start RemoteTerm in the background
sudo docker compose logs -f  # follow the container logs live
sudo docker compose down     # stop and remove the running container
sudo docker compose restart  # restart the container without changing the image
sudo docker compose pull && sudo docker compose up -d   # upgrade to the latest published image and restart
```

:::warning
RemoteTerm realiza una gestión **completa** de la radio, lo que significa que una vez que una radio está conectada a RemoteTerm, todos los contactos/canales se importarán y descargarán en RemoteTerm, y los contactos que realmente se sincronicen con el dispositivo estarán gobernados por RemoteTerm. 
:::

:::note

**Configuración de hotspot (opcional)**

Esto es opcional y se recomienda solo para radios que se usarán fuera de tu casa. Esta configuración desconectará la radio de tu wifi doméstica pero hará que comience a emitir su propio wifi para que pueda ser accesible sin conexión a Internet.

- Configura un hotspot

  ```bash
  sudo nmcli device wifi hotspot ssid <hotspot name> password <hotspot password> ifname wlan0
  ```

- Probablemente tendrás que conectarte a la nueva red Wi‑Fi y hacer SSH en la Pi de nuevo. La URL de tu Pi será la "puerta de enlace predeterminada" en la configuración wifi de la nueva red cuando te conectes a ella.

- Configura el hotspot para que se emita al arrancar

  ```bash
  nmcli connection
  # grab the UUID of the Hotspot connection
  sudo nmcli connection modify <hotspot UUID> connection.autoconnect yes connection.autoconnect-priority 100
  ```
:::

## Primeros pasos con RemoteTerm

### Pantalla principal

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/main_screen.png" style={{width:900, height:'auto'}}/></div>

La pantalla principal de RemoteTerm muestra una lista de canales conocidos, repetidores y servidores de salas, con un espacio para Favoritos en la parte superior. Haz clic en cualquier contacto o canal para empezar a enviar mensajes, o haz clic en un repetidor para iniciar sesión y ver la interfaz de administración. Puedes añadir canales o contactos con el botón verde de la parte superior.

Encima de la lista de contactos hay un conjunto de herramientas:

|Elemento general          |Función|
|---------------|-------------------------|
|Packet Feed   |Una visualización de los paquetes entrantes en bruto a medida que llegan|
|Node Map      |Visualizar la ubicación de los nodos|
|Mesh Visualizer|Una representación 3D personalizable de los nodos y el tráfico en tiempo real|
|Trace          |Ejecutar trazas de múltiples saltos entre repetidores para obtener información de intensidad de señal|
|Message Search |Buscar en el historial de canales y mensajes palabras o frases|
|Channel Finder |Channel finder encuentra nombres de canales para paquetes escuchados pero no descifrados|

### Mensajería (Canales)

Para crear o unirte a un canal, haz clic en el botón 'Add Channel/Contact” en la esquina superior izquierda del menú principal de la aplicación. Los canales privados, identificados solo por su clave, o los canales Hashtag, identificados por su nombre como un #hashtag, se pueden unir desde el menú que aparece.

El canal Public se añade automáticamente a todas las nuevas instancias de RemoteTerm. Es probable que tu malla local tenga su parte de canales activos: Public, #test o #testing, y #bots o #bot pueden ser buenos lugares para comenzar o encontrar personas que puedan indicarte buenas salas locales para recién llegados.

Cuando se selecciona un canal, la pantalla se verá algo así:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/channel.png" style={{width:900, height:'auto'}}/></div>

En la barra de estado:

|Icono|Función|
|---------------|---------------|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/bell.png" style={{width:50, height:'auto'}}/></div>|Configura las notificaciones, ya sea como notificaciones de escritorio (que requieren que el navegador esté abierto) o Web Push (que pueden entregarse incluso cuando el navegador está cerrado). Estas requieren un contexto HTTPS de confianza (los certificados snakeoil disponibles desde el instalador pueden o no ser suficientes para permitir notificaciones, dependiendo de tu sistema operativo y navegador)|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/earth.png" style={{width:50, height:'auto'}}/></div>|Habilita anulaciones de enrutamiento regional, que limitan el alcance regional de la radio cuando envía mensajes solo en este canal. Los usuarios con configuraciones de región correspondientes o diferentes podrán ver o ignorar automáticamente tus mensajes, respectivamente|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/chevrons-left-right.png" style={{width:50, height:'auto'}}/></div>|Permite anulaciones de ancho de salto por canal separadas del valor predeterminado de tu radio|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/star.png" style={{width:50, height:'auto'}}/></div>|Añade o elimina un canal de tus favoritos|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/trash-2.png" style={{width:50, height:'auto'}}/></div>|Elimina el canal, pero conserva los mensajes históricos si decides añadirlo de nuevo más tarde|
|Room Key|Proporciona la clave MeshCore para la sala dada|

En la esquina superior izquierda está el nombre del canal con un icono de información; puedes hacer clic en él para ver información sobre el canal, como qué tan activo es, quién está enviando mensajes y su clave (que también puedes ver haciendo clic en el texto "Show key" en la barra de estado superior):

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/example_room_analytic.png" style={{width:300, height:'auto'}}/></div>

### Mensajería (Mensajes Directos)

Enviar mensajes directos funciona de forma similar a los mensajes de canal, con algunas opciones diferentes.

|Icono|Función|
|---------------|---------------|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/route.png" style={{width:50, height:'auto'}}/></div>|Envía una sonda enrutada al contacto para descubrir una ruta de enrutamiento más ideal para que sigan los mensajes|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/trace.png" style={{width:50, height:'auto'}}/></div>|Envía un rastreo directo al contacto, con datos de SNR remotos y locales|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/bell.png" style={{width:50, height:'auto'}}/></div>|Configura las notificaciones, ya sea como notificaciones de escritorio (que requieren que el navegador esté abierto) o Web Push (que pueden entregarse incluso cuando el navegador está cerrado). Estas requieren un contexto HTTPS de confianza (los certificados snakeoil disponibles desde el instalador pueden o no ser suficientes para permitir notificaciones, dependiendo de tu sistema operativo y navegador)|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/star.png" style={{width:50, height:'auto'}}/></div>|Añade o elimina un contacto de tus favoritos|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/trash-2.png" style={{width:50, height:'auto'}}/></div>|Elimina la conversación, pero conserva los mensajes históricos si decides añadirla de nuevo más tarde|
|Clave de contacto|Proporciona la clave MeshCore para el contacto dado e información sobre cuándo se le escuchó por última vez (anuncio, mensaje, etc.), y el método (directo, o qué ruta siguió el paquete)|

De forma similar a los canales, puedes hacer clic en el icono de información o en el nombre en la barra superior de un contacto seleccionado para ver analíticas del contacto

## MQTT y Automatización

RemoteTerm destaca al proporcionar integraciones ricas para sistemas automatizados. Las integraciones realizan acciones cuando se escuchan paquetes de ciertos tipos (por ejemplo, cuando se envía un mensaje en un canal o se recibe un MD). Estas incluyen:

- MQTT, reenviando paquetes sobre MQTT a:
  - Brokers privados
  - Agregadores comunitarios
  - Home Assistant
- Webhooks, enviando solicitudes GET o POST a una URL específica con datos del mensaje
- Apprise, una herramienta flexible de distribución de notificaciones que puede reenviar a Discord, Telegram, SMS, correo electrónico, etc.
- Encolar paquetes o mensajes en colas Amazon SQS
- Bots en Python

### Configuración para el Mapeo de Malla Comunitaria

Mostrar la ubicación de los nodos MeshCore, los patrones de flujo de mensajes y las caídas de conectividad, etc., puede ser útil para la comunidad al construir la red MeshCore. Para proporcionar esta vista de depuración, los agregadores comunitarios ingieren un flujo de paquetes sin procesar de *observadores*.

RemoteTerm facilita usar la misma radio que utilizas para enviar y recibir mensajes para contribuir a estos esfuerzos comunitarios de mapeo y visibilidad como un nodo observador.

:::warning
MeshCore *no* permite que los mensajes entren en la malla a través de nodos MQTT; los esfuerzos de observabilidad de la comunidad son de solo lectura. 
:::

Hay muchas plataformas comunitarias de observadores, pero [LetsMesh](https://analyzer.letsmesh.net/) es una de las más populares, y es la que configuraremos.

1. [Haz clic aquí](https://analyzer.letsmesh.net/) para visitar LetsMesh e iniciar sesión en el analizador LetsMesh.
2. En RemoteTerm, ve a "Settings" y luego haz clic en "MQTT & Automation".
3. Haz clic en "Add Integration" y elige "LetsMesh (US)" de la lista de la izquierda.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/LetsMesh_selected_integration.png" style={{width:900, height:'auto'}}/></div>

4. Haz clic en "Create".
5. Rellena el mismo correo electrónico que usaste para registrarte en LetsMesh e introduce el código IATA del aeropuerto más cercano
6. Haz clic en "Save as Enabled".

Deberías ver un punto verde y un estado "Connected"; una integración saludable debería verse así:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/healthy_integration.png" style={{width:900, height:'auto'}}/></div>


Si en su lugar ves un punto ámbar, haz clic en el símbolo "ⓘ" junto al botón Edit para ver el error.

Ahora, navega a este [enlace](https://analyzer.letsmesh.net/my-nodes). En unos 15 minutos, deberías ver tu radio aparecer en verde allí, ¡y tu propia telemetría y paquetes siendo reenviados a LetsMesh!
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/healthy_letsmesh.png" style={{width:400, height:'auto'}}/></div>

### Bot

RemoteTerm proporciona una interfaz para programar tus propios bots. Los bots consisten en código Python sencillo que se ejecuta cada vez que se recibe un mensaje de un contacto o canal. 

:::warning
Los bots generan tráfico automatizado en respuesta a otros mensajes. Esto significa que es *tu* responsabilidad asegurarte de que los bots estén escritos cuidadosamente para evitar saturar la malla o entrar en bucles infinitos. 
:::

#### Configurar un Bot Sencillo de Lanzamiento de Dados

Aquí tienes un tutorial que te guía para crear un bot con capacidades sencillas de lanzamiento de dados, solicitadas en forma estándar (por ejemplo, "3d6" significa lanzar 3 dados de seis caras). Estos son los pasos sencillos:

1. En RemoteTerm, ve a "Settings" y luego haz clic en "MQTT & Automation".
2. Haz clic en "Add Integration" y elige "Python Bot" de la lista de la izquierda.
3. Haz clic en "Create".
4. Ponle al bot un nombre descriptivo, como "Dice Bot".
5. Borra el código del editor y pega en su lugar el siguiente código:

```python
import random
import re

def bot(**kwargs) -> str | list[str] | None:
    """Dice roller — responds to !dice NdS in #bot only."""
    sender_name = kwargs.get("sender_name")
    message_text = kwargs.get("message_text", "")
    channel_name = kwargs.get("channel_name")
    is_outgoing = kwargs.get("is_outgoing", False)

    if is_outgoing or channel_name != "#bot":
        return None

    match = re.match(r"^!dice\s+(\d+)d(\d+)$", message_text.strip())
    if not match:
        return None

    count, sides = int(match.group(1)), int(match.group(2))
    if count < 1 or count > 20 or sides < 2 or sides > 100:
        return "I don't know how to roll that! [1-20]d[2-100]"

    rolls = [random.randint(1, sides) for _ in range(count)]
    parts = " + ".join(str(r) for r in rolls)
    name = sender_name or "Someone"
    return f"@[{name}] rolled {parts} = {sum(rolls)}"
```

6. Haz clic en "Save as Enabled".

Usando otra radio, navega a la sala **#bot** y solicita un lanzamiento de dados (por ejemplo, "3d6"). La salida debería verse algo así:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/dice_bot_in_action.png" style={{width:900, height:'auto'}}/></div>

Si no ves la respuesta como esperas, puedes revisar los registros del servidor desde tu contenedor Docker para ver si se informa algún error cuando se ejecuta el código Python.

#### Configurar un Bot de Ancho de Ruta

El firmware MeshCore v1.14+ trajo grandes cambios en cómo los mensajes atraviesan la malla; los paquetes que atraviesan routers compatibles ahora pueden llevar identificadores de salto multibyte. 

Podemos crear un bot para ayudar a las personas a determinar si una ruta multibyte está asociada con su mensaje. Este script utiliza la capacidad de enviar múltiples mensajes en respuesta proporcionando un mensaje de ancho de salto y los propios datos de salto del paquete.

```python
def bot(**kwargs) -> str | list[str] | None:
    """Report the sender's path hop width in #bot."""
    sender_name = kwargs.get("sender_name")
    message_text = kwargs.get("message_text", "")
    channel_name = kwargs.get("channel_name")
    is_outgoing = kwargs.get("is_outgoing", False)
    path = kwargs.get("path")
    path_bytes_per_hop = kwargs.get("path_bytes_per_hop")

    if is_outgoing or channel_name != "#bot":
        return None

    if "!hopwidth" not in message_text.lower():
        return None

    name = sender_name or "Someone"

    if path_bytes_per_hop is None or not path:
        return f"@[{name}]'s hop width is unknown (no path data)"

    hop_count = (len(path) // 2) // path_bytes_per_hop

    if path_bytes_per_hop == 1:
        msg = f"@[{name}]'s hops are 1 byte wide; they might not be on 1.14+ or there may be incompatible repeaters in the path."
    else:
        msg = f"@[{name}]'s hops are {path_bytes_per_hop} bytes wide; they are using firmware v1.14+!"

    return [msg, f"Heard via {hop_count} hop{'s' if hop_count != 1 else ''}"]
```

### Reenviar Mensajes de Canal MeshCore a Discord

[Apprise](https://appriseit.com/) es un servicio de notificaciones flexible compatible con RemoteTerm. Apprise te permite elegir uno o muchos de cientos de servicios de notificación a los que enviar mensajes de canal o directos, desde Discord hasta Telegram, SMS, correo electrónico y mucho más.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/Aprise.png" style={{width:900, height:'auto'}}/></div>  

Como ejemplo, usaremos Apprise para reenviar todos los mensajes en un canal MeshCore concreto a Discord a través de RemoteTerm.

1. Abre Discord en un canal en el que tengas privilegios de administrador.
2. Haz clic derecho en el nombre del canal y haz clic en "Edit Channel".
3. Haz clic en "Integrations" en el menú de la izquierda y luego haz clic en "Create Webhook".
4. Ponle un nombre apropiado al webhook y copia la URL del webhook. El webhook debe tener la forma `https://discord.com/api/webhooks/<WebhookID>/<WebhookToken>`
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/discord_webhook_setup.png" style={{width:900, height:'auto'}}/></div>  

5. En RemoteTerm, ve a "Settings" y haz clic en "MQTT & Automation".
6. Haz clic en "Add Integration" y elige "Apprise" de la lista de la izquierda.
7. Haz clic en "Create".
8. Añade una URL de notificación en la entrada. Según la [documentación de Discord de Apprise](https://appriseit.com/services/discord/), esta debe tener la forma `discord://{WebhookID}/{WebhookToken}/`. Usa el WebhookID y el WebhookToken de la URL copiada. 
9. Elige si deseas preservar la identidad del usuario usando su nombre y avatar configurados cuando estén disponibles.
10. Elige si deseas incluir los datos de la ruta de enrutamiento en el mensaje (se sugiere deshabilitarlo)
11. Selecciona los contactos/canales que te gustaría reenviar a Discord y haz clic en "Save as Enabled".
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/discord_configured.png" style={{width:900, height:'auto'}}/></div>  

Una vez habilitado, ¡deberías empezar a ver fluir los mensajes! Si tienes problemas o no ves los mensajes que esperas, revisa los registros del servidor para ver si hay errores reportados, o intenta habilitar todos los canales para asegurarte de que al menos el enlace RemoteTerm ↔ Discord está funcionando.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/discord_integration_working.png" style={{width:900, height:'auto'}}/></div>   

### Integra RemoteTerm con Home Assistant

[Home Assistant](https://www.home-assistant.io/) proporciona un marco para una automatización del hogar potente y fácil de usar. RemoteTerm ofrece integración con Home Assistant mediante la integración MQTT incorporada. Con esta integración, puedes activar automatizaciones basadas en mensajes, monitorizar repetidores y telemetría de radio local, y rastrear contactos mediante GPS en sus anuncios.

Para poder aprovechar el seguimiento de telemetría de repetidores, tendrás que inscribir los repetidores deseados en la obtención automática de telemetría. Una vez inscritos, RemoteTerm solicitará telemetría a un intervalo configurable, conservando valores históricos y haciendo visibles en Home Assistant los valores actualizados. 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/enrolled_repeater.png" style={{width:900, height:'auto'}}/></div>   

:::tip
La obtención automática de telemetría de repetidores tiene un intervalo personalizable; puedes elegir una frecuencia que vaya desde una vez por hora hasta una vez al día, con la restricción de que las obtenciones automáticas no pueden exceder 24 en un período de 24 horas. 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/repeatertelemetryintervalcustomization.png" style={{width:900, height:'auto'}}/></div> 

:::

Una vez que hayas configurado tus repetidores rastreados como desees y MQTT Discovery esté habilitado en Home Assistant, puedes configurar una integración en RemoteTerm para iniciar el flujo de datos.

1. En RemoteTerm, ve a "Settings" y haz clic en "MQTT & Automation".
2. Haz clic en "Add Integration" y elige "Home Assistant MQTT Discovery" de la lista de la izquierda.
3. Haz clic en "Create".
4. Introduce la información de tu broker MQTT, incluyendo host y puerto, y la configuración de nombre de usuario/contraseña/TLS, si corresponde.
5. Elige los contactos que se rastrearán mediante la ubicación GPS de anuncios en Home Assistant.
6. Selecciona los repetidores con telemetría rastreada que deseas ver en Home Assistant.
7. Elige el alcance de los mensajes para los disparadores dentro de Home Assistant.
8. Haz clic en "Save as Enabled".

 Ten en cuenta que la pantalla de configuración de integración de RemoteTerm proporciona los temas/entidades creados exactamente en los desplegables "What gets created in Home Assistant" y "Published Topic Summary".

:::warning
Los contactos y repetidores rastreados crearán entidades en Home Assistant; es posible que desees limitar tu selección solo a los contactos que te interesan para evitar saturar Home Assistant.

Los eventos de mensajes *no* crean entidades y solo se usan para disparadores; en general, no hay problema en permitir que todos los mensajes fluyan hacia Home Assistant.
:::


Para ver las nuevas entidades, inicia sesión en la interfaz web de Home Assistant. Haz clic en Settings, luego Devices & Services y luego MQTT. Deberías ver tus entidades rastreadas mostradas. 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/example_ha_device_list.png" style={{width:900, height:'auto'}}/></div> 

Haz clic en ellas para ver sus métricas disponibles. Para los repetidores, se mostrarán las métricas no obsoletas más recientes; si solo has habilitado recientemente la obtención automática de telemetría, es posible que tengas que esperar hasta ocho horas para que todos los campos de telemetría de repetidores y radios se completen dentro de Home Assistant.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/example.png" style={{width:900, height:'auto'}}/></div> 

Para obtener orientación de configuración adicional, revisa [README_HA.md](https://github.com/jkingsman/Remote-Terminal-for-MeshCore/blob/main/README_HA.md) en el repositorio de RemoteTerm. Por ejemplo, seguir las instrucciones en "[Full monitoring dashboard with message feed](https://github.com/jkingsman/Remote-Terminal-for-MeshCore/blob/main/README_HA.md#full-monitoring-dashboard-with-message-feed)" proporcionará un panel como este:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/example_ha_dashboard.png" style={{width:900, height:'auto'}}/></div> 

## Próximos pasos

Mantente al día con el desarrollo de RemoteTerm o haz preguntas uniéndote al [Discord oficial de MeshCore](https://discord.gg/mr3Pt5s5V9) y luego siguiendo el [hilo de desarrollo de RemoteTerm](https://discord.com/channels/1343693475589263471/1477723940951429330). La base de código se actualiza con frecuencia y puedes encontrar la última versión en el [Changelog](https://github.com/jkingsman/Remote-Terminal-for-MeshCore/blob/main/CHANGELOG.md) y, por supuesto, RemoteTerm es gratis, sin anuncios y de código abierto para siempre: dale una estrella en [GitHub](https://github.com/jkingsman/Remote-Terminal-for-MeshCore).

## Soporte técnico y debate sobre el producto

<p style={{textAlign: 'center'}}><a href="https://www.facebook.com/groups/1755190828846458" target="_blank"><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Banner_QRCode_FB.jpg" border="0" /></a></p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>