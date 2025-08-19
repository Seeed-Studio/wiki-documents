---
description: Edge Box RPi 200 con Node-RED y MQTT
title: Edge Box RPi 200 con Node-RED y MQTT
keywords:
  - Edge Controller
  - Edge-Box
  - Node-Red
  - MQTT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Edge-Box-Node-Red-MQTT
last_update:
  date: 02/13/2025
  author: Erick González
---

## Introducción

**MQTT (Message Queuing Telemetry Transport)** es un protocolo de mensajería ligero, ideal para aplicaciones IoT (Internet de las Cosas) gracias a su eficiencia y requerimientos mínimos de ancho de banda. Facilita la comunicación entre dispositivos en un modelo de publicación-suscripción, permitiendo el intercambio de datos en tiempo real incluso sobre redes poco confiables. Con Node-RED, la integración de MQTT posibilita una conectividad fluida entre dispositivos de borde y servidores centrales (u otros dispositivos), promoviendo una transmisión y procesamiento de datos eficientes. EdgeBox Edge Controller, al ser compatible con MQTT de manera nativa, elimina la necesidad de puertas de enlace de hardware adicionales al permitir la instalación de un broker MQTT directamente en el propio EdgeBox. Esto reduce la complejidad, minimiza la latencia y mejora la confiabilidad, ya que los datos pueden procesarse y utilizarse en el propio borde sin depender de intermediarios externos, optimizando así la arquitectura del sistema IoT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/noderedmqtt.png" style={{width:800, height:'auto'}}/></div>

## Comenzando

Antes de iniciar este proyecto, puede que necesites preparar tu hardware y software con anticipación, tal y como se describe aquí.

### Preparación de Hardware

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el tuyo! 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Preparación de Software

Edge Box-200 viene con Raspberry Pi OS preinstalado. Si es la primera vez que inicias este dispositivo, por favor revisa nuestro [Getting Started](https://wiki.seeedstudio.com/Edge_Box_introduction/) Wiki.
También hemos preparado una [Guía de Inicio con Node-RED](https://wiki.seeedstudio.com/Edge-Box-Getting-Started-with-Node-Red/). Se recomienda revisarla antes de continuar con este wiki.

## Configurar EdgeBox como Broker MQTT

- **Paso 01**: Accede a EdgeBox RPi 200 por SSH o VNC y actualiza Raspberry Pi OS:
```sh
sudo apt update
```
- **Paso 02**: Luego, instala Mosquitto. Para ello, abre la terminal y ejecuta:

```sh
sudo apt-get install mosquitto
```

- **Paso 03**: A continuación, instala el cliente de línea de comandos de Mosquitto:

```sh
sudo apt-get install mosquitto-clients -y
```

- **Paso 04**: Una vez completada la instalación del broker MQTT, se deben ajustar los archivos de configuración. El archivo de configuración por defecto se encuentra en `/etc/mosquitto/mosquitto.conf`. Para acceder y modificarlo, utiliza nano:

```sh
sudo nano /etc/mosquitto/mosquitto.conf
```

En el archivo de configuración, deshabilita la configuración por defecto con:

```sh
include_dir /etc/mosquitto/conf.d
```

a

```sh
#include_dir /etc/mosquitto/conf.d
```

Luego, bloquearemos el acceso anónimo al broker añadiendo:

```sh
allow_anonymous false
```

Para almacenar contraseñas de forma segura, especificamos la ubicación del archivo:

```sh
password_file /etc/mosquitto/pwfile
```

Después, para configurar el puerto de escucha en 1883, añadimos:

```sh
listener 1883
```
Guarda los cambios con Ctrl+S y sal del editor con Ctrl+X.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/mqttconfig.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 05**: Para crear nombres de usuario y contraseñas que otorguen acceso a los clientes MQTT, o restablecer contraseñas existentes, utiliza el siguiente comando:

```sh
sudo mosquitto_passwd -c /etc/mosquitto/pwfile <username>
```

Tras generar un nombre de usuario y contraseña, reinicia Edgebox:

```sh
sudo reboot
```

Puedes iniciar el broker Mosquitto con:

```sh
sudo systemctl start mosquitto
```
- `sudo systemctl status mosquitto`: Verifica el estado del broker.
- `sudo systemctl stop mosquitto`: Detén el broker.
- `sudo systemctl restart mosquitto`: Reinicia el broker.
- `sudo systemctl enable mosquitto`: Asegura que el broker se inicie automáticamente al encender el sistema.

## Probar Conexión

- **Paso 01**: Abre una nueva sesión SSH o terminal y ejecuta el siguiente comando para suscribirte a un tema:

```sh
mosquitto_sub -h localhost -t test -u <USER> -P <PASSWORD>
```

- **Paso 02**: En otra sesión SSH o terminal, ejecuta:

```sh
mosquitto_pub -h localhost -t test -m "Hello, world!" -u <USER> -P <PASSWORD>
```

Deberías ver el mensaje "Hello, world!" aparecer en la primera ventana donde corriste `mosquitto_sub`. Asegúrate de usar el usuario y la contraseña que creaste.

## Editar Flujos

**Nodo MQTT in**

El nodo MQTT in se suscribe a temas MQTT y recibe mensajes del broker. Cuando se publica un mensaje en uno de los temas a los que está suscrito, el nodo MQTT in se activa y reenvía el mensaje recibido a los nodos siguientes en el flujo.

- **Paso 01**: Arrastra y suelta un nodo MQTT in desde la paleta de Node-RED al lienzo.
- **Paso 02**: Haz doble clic en el nodo MQTT in para abrir su diálogo de configuración.
- **Paso 03**: Configura:
  - **Server**: Verifica que los detalles del broker estén completos. De no ser así, haz clic en el ícono de lápiz para agregar la dirección IP, usuario y contraseña.
  - **Action**: Elige si suscribirte a un solo tema o usar una suscripción dinámica. Para una suscripción dinámica, extrae el tema MQTT deseado desde el payload del mensaje con un nodo function u otros.
  - **Topic**: Ingresa el tema MQTT al que quieres suscribirte.
  - **QoS**: Selecciona el nivel de Calidad de Servicio (0, 1, 2).
  - **Name**: Opcionalmente, asigna un nombre al nodo.
- **Paso 04**: Haz clic en Done para guardar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/connection.PNG" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/mqttin.PNG" style={{width:600, height:'auto'}}/></div>


**Nodo MQTT out**

El nodo MQTT out se usa para publicar mensajes en temas MQTT. Puedes configurar el tema y el payload del mensaje, que pueden ser estáticos o generarse dinámicamente según datos de otros nodos en el flujo.

- **Paso 01**: Arrastra y suelta un nodo MQTT out desde la paleta de Node-RED al lienzo.

- **Paso 02**: Haz doble clic en el nodo MQTT out para abrir su diálogo de configuración.

- **Paso 03**: En el diálogo, haz clic en el ícono de lápiz junto a Server para crear una nueva configuración del broker.

- **Paso 04**: Edita los ajustes del broker MQTT, agregando la dirección del broker, el puerto y las credenciales de autenticación si son necesarias (usuario y contraseña).

- **Paso 05**: Haz clic en Done para guardar los ajustes.

- **Paso 06**: Configura:
  - **Topic**: El tema MQTT al que deseas publicar.
  - **QoS**: Nivel de Calidad de Servicio (0, 1 o 2).
  - **Retain**: Si el mensaje publicado debe mantenerse en el broker (true/false).
  - **Name**: Un nombre descriptivo opcional.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/mqttout.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 07**: Haz clic en Done para guardar la configuración.

Utilizamos el nodo inject para inyectar mensajes a intervalos específicos, y el nodo debug para inspeccionar el mensaje publicado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/debugnode.PNG" style={{width:600, height:'auto'}}/></div>

A continuación se muestra una representación gráfica de cómo conectar y configurar los nodos MQTT in, MQTT out, debug e inject.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/mqtt-edgebox.gif" style={{width:800, height:'auto'}}/></div>


## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecer diferentes tipos de soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diversas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
