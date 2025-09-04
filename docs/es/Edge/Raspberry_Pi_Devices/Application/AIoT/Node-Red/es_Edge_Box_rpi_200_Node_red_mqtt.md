---
description: Edge Box RPi 200 con Node Red y MQTT
title: Edge Box RPi 200 con Node Red y MQTT
keywords:
  - Edge Controller
  - Edge-Box
  - Node-Red
  - MQTT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Edge-Box-Node-Red-MQTT
last_update:
  date: 05/16/2024
  author: Kasun Thushara
---

## Introducción

**MQTT (Message Queuing Telemetry Transport)** es un protocolo de mensajería ligero ideal para aplicaciones IoT (Internet de las Cosas) debido a su eficiencia y bajos requisitos de ancho de banda. Facilita la comunicación entre dispositivos en un modelo de publicación-suscripción, permitiendo el intercambio de datos en tiempo real a través de redes no confiables. Con Node-RED, la integración de MQTT permite una conectividad perfecta entre dispositivos edge y servidores centrales u otros dispositivos, fomentando la transmisión y procesamiento eficiente de datos. EdgeBox Edge Controller, al soportar MQTT de forma nativa, elimina la necesidad de gateways de hardware adicionales al permitir la instalación de un broker MQTT directamente en el EdgeBox mismo. Esto reduce la complejidad, minimiza la latencia y mejora la confiabilidad, ya que los datos pueden ser procesados y actuar sobre ellos en el edge sin depender de intermediarios externos, optimizando así la arquitectura del sistema IoT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/noderedmqtt.png" style={{width:800, height:'auto'}}/></div>

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

### Preparación del Hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparación del Software

Edge Box-200 llega a tus manos con Raspberry Pi OS preinstalado. Si estás iniciando este dispositivo por primera vez, por favor lee nuestra Wiki de [Primeros Pasos](https://wiki.seeedstudio.com/es/Edge_Box_introduction/).
Hemos preparado una [Guía de Primeros Pasos sobre Node-RED](https://wiki.seeedstudio.com/es/Edge-Box-Getting-Started-with-Node-Red/). Se recomienda que revises esta guía antes de proceder con la wiki.

## Configurar EdgeBox como Broker MQTT

- **Paso 01** : SSH o VNC al EdgeBox RPi 200 y Actualizar Raspberry Pi OS:

```sh
sudo apt update
```

- **Paso 02** : Luego, instala Mosquitto en él. Para hacerlo, abre la terminal y ejecuta este comando:

```sh
sudo apt-get install mosquitto 
```

- **Paso 03** :A continuación, instala el cliente de línea de comandos de Mosquitto ejecutando el siguiente comando en la terminal:

```sh
sudo apt-get install mosquitto-clients -y
```

- **Paso 04** : Una vez que la instalación del broker MQTT esté completa, son necesarios ajustes a sus archivos de configuración. El archivo de configuración predeterminado se puede encontrar en `/etc/mosquitto/mosquitto.conf`. Para acceder y modificar este archivo, usa el editor nano ejecutando el siguiente comando en la terminal:

```sh
sudo nano /etc/mosquitto/mosquitto.conf
```

En el archivo de configuración, deshabilitaremos la configuración predeterminada con esta línea:

```sh
include_dir /etc/mosquitto/conf.d
```

```sh
#include_dir /etc/mosquitto/conf.d
```

A continuación, aplicaremos una política que prohíbe a los usuarios anónimos conectarse al broker agregando la línea:

```sh
allow_anonymous false
```

Para almacenar contraseñas de forma segura, especificaremos una ubicación de archivo agregando:

```sh
password_file /etc/mosquitto/pwfile
```

a

Luego, para establecer el puerto de escucha en 1883, añadiremos:

```sh
listener 1883
```

Guarda las modificaciones presionando Ctrl+S y sal del editor con Ctrl+X.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/mqttconfig.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 05** : Para establecer nombres de usuario y contraseñas, otorgando acceso a clientes MQTT, o restablecer contraseñas existentes, utiliza el siguiente comando en la terminal:

```sh
sudo mosquitto_passwd -c /etc/mosquitto/pwfile <username>
```

Después de generar un nombre de usuario y contraseña, reinicia Edgebox

```sh
sudo reboot
```

Puedes iniciar el broker Mosquitto ingresando el siguiente comando en la terminal:

```sh
sudo systemctl start mosquitto
```

`sudo systemctl status mosquitto`   Para verificar si el broker Mosquitto está ejecutándose

`sudo systemctl stop mosquitto`     Para detener el broker Mosquitto

`sudo systemctl restart mosquitto`  Para reiniciar el broker Mosquitto

`sudo systemctl enable mosquitto`   Para asegurar que el broker Mosquitto se inicialice al arrancar el sistema

## Probar Conexión

- **Paso 01** : Abre una nueva sesión SSH o terminal y ejecuta el siguiente comando para suscribirse a un tema

```sh
mosquitto_sub -h localhost -t test -u <USER> -P <PASSWORD>
```

- **Paso 02** : En otra sesión SSH o terminal, ejecuta el siguiente comando para publicar un mensaje al mismo tema. Asegúrate de ingresar el Nombre de usuario y Contraseña correspondientes.

```sh
mosquitto_pub -h localhost -t test -m "Hello, world!" -u <USER> -P <PASSWORD>
```

Deberías ver el mensaje "Hello, world!" aparecer en la primera ventana de sesión SSH donde ejecutaste el comando mosquitto_sub. Asegúrate de ingresar el nombre de usuario y la contraseña correspondientes.

## Editar Flujos

**Nodo MQTT in**

El nodo MQTT-in se suscribe a temas MQTT y recibe mensajes del broker. Cuando se publica un mensaje en uno de sus temas suscritos, el nodo MQTT-in se activa y reenvía el mensaje recibido a los nodos subsiguientes en el flujo para su posterior procesamiento.

- **Paso 01** Arrastra y suelta un nodo MQTT-in desde la paleta de Node-RED al lienzo.
- **Paso 02** Haz doble clic en el nodo MQTT-in para abrir su diálogo de configuración.
- **Paso 03** En el diálogo de configuración, configura los siguientes campos:
  - **Server**: Asegúrate de que los detalles del broker estén pre-poblados. Si no, haz clic en el ícono del lápiz para agregar la dirección IP del broker, nombre de usuario y contraseña.

  - **Action**: Selecciona si suscribirse a un solo tema o usar una suscripción dinámica. Para una suscripción dinámica, extrae el tema MQTT deseado del payload del mensaje usando un nodo de función u otros nodos de procesamiento. Aquí, nos suscribiremos a un solo tema.
  - **Topic**: Ingresa el tema MQTT al que quieres suscribirte.
  - **QoS**: Elige el nivel de Calidad de Servicio (QoS) deseado para la entrega de mensajes (0, 1, o 2).
  - **Name**: Opcionalmente, asigna un nombre significativo a tu nodo.

- **Paso 04** Haz clic en Done para guardar la configuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/connection.PNG" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/mqttin.PNG" style={{width:600, height:'auto'}}/></div>

**Nodo MQTT-out**

El nodo MQTT-out (salida MQTT) se usa para publicar mensajes a temas MQTT. Puedes configurar el tema y el payload del mensaje a publicar, que puede ser estático o generado dinámicamente basado en datos de otros nodos en el flujo.

- **Paso 01** Arrastra y suelta un nodo MQTT-out desde la paleta de Node-RED al lienzo.

- **Paso 02** Haz doble clic en el nodo MQTT-out para abrir su diálogo de configuración.

- **Paso 03** En el diálogo de configuración, haz clic en el ícono del lápiz junto al campo Server para crear una nueva configuración de broker.

- **Paso 04** Edita la configuración del broker MQTT agregando la dirección del broker en el campo server, puerto, y cualquier credencial de autenticación si es requerida (ej., nombre de usuario y contraseña).

- **Paso 05** Haz clic en Done para guardar la configuración del broker.

- **Paso 06** En el diálogo de configuración, configura los siguientes campos:

  - **Topic**: Ingresa el tema MQTT al cual quieres publicar mensajes.

  - **QoS**: Elige el nivel de Calidad de Servicio (QoS) deseado para la entrega de mensajes (0, 1, o 2).

  - **Retain**: Elige si retener el mensaje publicado en el broker (true o false).

  - **Name**: Opcionalmente, asigna un nombre significativo a tu nodo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/mqttout.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 07** Haz clic en Done para guardar la configuración.

Usamos el nodo inject para inyectar el mensaje en un cierto intervalo, y también usamos el nodo debug para inspeccionar el mensaje publicado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/debugnode.PNG" style={{width:600, height:'auto'}}/></div>

Puedes ver esta representación gráfica a continuación para entender cómo conectar y configurar los nodos MQTT-in, MQTT-out, debug, e inject.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/mqtt-edgebox.gif" style={{width:800, height:'auto'}}/></div>

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
