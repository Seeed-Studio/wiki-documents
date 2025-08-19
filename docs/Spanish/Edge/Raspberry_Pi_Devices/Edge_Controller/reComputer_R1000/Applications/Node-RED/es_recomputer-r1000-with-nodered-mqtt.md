---
description: Learn how to install MQTT on the reComputer R1000 and test it with Node-RED. MQTT is a lightweight messaging protocol ideal for IoT applications, enabling efficient, real-time data exchange even over unreliable networks. With Node-RED integration, edge devices and central servers achieve seamless connectivity, optimizing data transmission and processing directly at the edge.

title: reComputer R1000 con Node Red y MQTT
keywords:
  - Edge Controller
  - reComputer R1000
  - Node-Red
  - MQTT
image: https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/recomputer-mqtt.png
slug: /es/recomputer_r1000_nodered_mqtt
last_update:
  date: 02/17/2025
  author: Erick González
---

## Introducción

**MQTT (Message Queuing Telemetry Transport)** es un protocolo de mensajería ligero, ideal para aplicaciones IoT (Internet de las Cosas) debido a su eficiencia y bajos requisitos de ancho de banda. Facilita la comunicación entre dispositivos mediante un modelo de publicación-suscripción, permitiendo el intercambio de datos en tiempo real incluso en redes poco confiables.

Con Node-RED, la integración de MQTT posibilita una conectividad fluida entre dispositivos Edge, servidores centrales u otros dispositivos, optimizando la transmisión y el procesamiento de datos. El controlador Edge reComputer R1000, al soportar MQTT de manera nativa, elimina la necesidad de hardware adicional para gateways al permitir la instalación de un broker MQTT directamente en el dispositivo. Esto reduce la complejidad, minimiza la latencia y mejora la confiabilidad, ya que los datos pueden procesarse y utilizarse en el Edge sin depender de intermediarios externos, optimizando así la arquitectura del sistema IoT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/recomputer-mqtt.png" style={{width:800, height:'auto'}}/></div>

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación, como se describe aquí.

### Preparación del Hardware

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el tuyo! 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Preparación del Software

Hemos preparado una [Guía de inicio en Node-RED](https://wiki.seeedstudio.com/recomputer_r1000_getting_statrted_node_red/). Se recomienda revisar esta guía antes de continuar con el proceso.

## Configurar reComputer R1000 como Broker MQTT

- **Paso 01**: Conéctate por SSH o VNC al reComputer R1000 y actualiza Raspberry Pi OS:

```sh
sudo apt update
```

- **Paso 02**: Luego, instala Mosquitto ejecutando el siguiente comando en la terminal:

```sh
sudo apt-get install mosquitto 
```

- **Paso 03**: A continuación, instala el cliente de línea de comandos de Mosquitto con el siguiente comando:

```sh
sudo apt-get install mosquitto-clients -y
```

- **Paso 04**: Una vez completada la instalación del broker MQTT, es necesario ajustar sus archivos de configuración. El archivo de configuración predeterminado se encuentra en `/etc/mosquitto/mosquitto.conf`. Para acceder y modificar este archivo, utiliza el editor nano con el siguiente comando:

```sh
sudo nano /etc/mosquitto/mosquitto.conf
```

En el archivo de configuración, deshabilitaremos los ajustes predeterminados con esta línea:

```sh
include_dir /etc/mosquitto/conf.d
```

y la cambiaremos a:

```sh
#include_dir /etc/mosquitto/conf.d
```

A continuación, aplicaremos una política para evitar que usuarios anónimos se conecten al broker agregando la línea:

```sh
allow_anonymous false
```

Para almacenar contraseñas de manera segura, especificaremos una ubicación de archivo agregando:


```sh
password_file /etc/mosquitto/pwfile
```
Luego, para establecer el puerto de escucha en 1883, agregaremos:

```sh
listener 1883
```

Guarda las modificaciones presionando `Ctrl+S` y sal del editor con `Ctrl+X`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/mqttconfig.PNG" style={{width:800, height:'auto'}}/></div>

- **Paso 05**: Para establecer nombres de usuario y contraseñas que permitan el acceso a los clientes MQTT o restablecer contraseñas existentes, usa el siguiente comando en la terminal:

```sh
sudo mosquitto_passwd -c /etc/mosquitto/pwfile <username>
```

Después de generar un nombre de usuario y contraseña, reinicia el reComputer R1000:

```sh
sudo reboot
```

Puedes iniciar el broker Mosquitto ingresando el siguiente comando en la terminal:

```sh
sudo systemctl start mosquitto
```

Para verificar si el broker Mosquitto está en ejecución:

```sh
sudo systemctl status mosquitto
```

Para detener el broker Mosquitto:

```sh
sudo systemctl stop mosquitto
```

Para reiniciar el broker Mosquitto:

```sh
sudo systemctl restart mosquitto
```

Para asegurarte de que el broker Mosquitto se inicie automáticamente al arrancar el sistema:

```sh
sudo systemctl enable mosquitto
```

## Probar la Conexión

- **Paso 01**: Abre una nueva sesión SSH o terminal y ejecuta el siguiente comando para suscribirte a un tópico:

```sh
mosquitto_sub -h localhost -t test -u <USER> -P <PASSWORD>
```

- **Paso 02**: En otra sesión SSH o terminal, ejecuta el siguiente comando para publicar un mensaje en el mismo tópico. Asegúrate de ingresar el nombre de usuario y la contraseña correctamente.

```sh
mosquitto_pub -h localhost -t test -m "Hello, world!" -u <USER> -P <PASSWORD>
```

Deberías ver el mensaje "Hello, world!" aparecer en la primera ventana de sesión SSH donde ejecutaste el comando `mosquitto_sub`.

## Editar Flujos

### Nodo MQTT-in

El nodo MQTT-in se suscribe a los tópicos de MQTT y recibe mensajes del broker. Cuando se publica un mensaje en uno de sus tópicos suscritos, el nodo MQTT-in se activa y reenvía el mensaje recibido a los nodos subsiguientes en el flujo para su procesamiento.

- **Paso 01**: Arrastra y suelta un nodo MQTT-in desde la paleta de Node-RED al lienzo.
- **Paso 02**: Haz doble clic en el nodo MQTT-in para abrir su cuadro de configuración.
- **Paso 03**: En el cuadro de configuración, configura los siguientes campos:
  - **Servidor**: Asegúrate de que los detalles del broker estén preconfigurados. Si no, haz clic en el ícono del lápiz para agregar la dirección IP del broker, el nombre de usuario y la contraseña.
  - **Acción**: Selecciona si deseas suscribirte a un solo tópico o usar una suscripción dinámica. Para una suscripción dinámica, extrae el tópico MQTT deseado del payload del mensaje utilizando un nodo function u otros nodos de procesamiento. Aquí, nos suscribiremos a un solo tópico.
  - **Tópico**: Ingresa el tópico MQTT al que deseas suscribirte.
  - **QoS**: Elige el nivel de Calidad de Servicio (QoS) deseado para la entrega del mensaje (0, 1 o 2).
  - **Nombre**: Opcionalmente, asigna un nombre significativo a tu nodo.

- **Paso 04**: Haz clic en "Done" para guardar la configuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/connection.PNG" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/mqttin.PNG" style={{width:600, height:'auto'}}/></div>

## Nodo MQTT-out

El nodo MQTT-out (salida MQTT) se utiliza para publicar mensajes en tópicos MQTT. Puedes configurar el tópico y el contenido del mensaje a publicar, ya sea estático o generado dinámicamente a partir de los datos de otros nodos en el flujo.

- **Paso 01**: Arrastra y suelta un nodo MQTT-out desde la paleta de Node-RED al lienzo.

- **Paso 02**: Haz doble clic en el nodo MQTT-out para abrir su cuadro de configuración.

- **Paso 03**: En el cuadro de configuración, haz clic en el ícono del lápiz junto al campo Servidor para crear una nueva configuración de broker.

- **Paso 04**: Edita la configuración del broker MQTT agregando la dirección del broker en el campo de servidor, el puerto y cualquier credencial de autenticación si es necesario (por ejemplo, nombre de usuario y contraseña).

- **Paso 05**: Haz clic en "Done" para guardar la configuración del broker.

- **Paso 06**: En el cuadro de configuración, configura los siguientes campos:

  - **Tópico**: Ingresa el tópico MQTT en el que deseas publicar mensajes.
  
  - **QoS**: Elige el nivel de Calidad de Servicio (QoS) deseado para la entrega del mensaje (0, 1 o 2).
  
  - **Retain**: Selecciona si deseas que el mensaje publicado se retenga en el broker (true o false).
  
  - **Nombre**: Opcionalmente, asigna un nombre significativo a tu nodo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/mqttout.PNG" style={{width:600, height:'auto'}}/></div>

- **Paso 07**: Haz clic en "Done" para guardar la configuración.

Usamos el nodo Inject para inyectar el mensaje a un intervalo determinado y también usamos el nodo Debug para inspeccionar el mensaje publicado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/debugnode.PNG" style={{width:600, height:'auto'}}/></div>

Puedes ver esta representación gráfica a continuación para comprender cómo conectar y configurar los nodos MQTT-in, MQTT-out, Debug e Inject.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/mqtt-edgebox.gif" style={{width:800, height:'auto'}}/></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

