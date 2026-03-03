---
title: Wio RP2040 mini Dev Board con Arduino
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio-RP2040-with-Arduino-WIFI/
slug: /es/Wio-RP2040-with-Arduino-WIFI
last_update:
  date: 01/11/2022
  author: gunengyu
---
# **Wio RP2040 mini Dev Board con Arduino**

Aquí vamos a usar la Wio RP2040 mini Dev Board para transmitir datos a través de MQTT y Socket con Arduino.


## **Hardware**

Materiales requeridos

- [Wio RP2040 mini Dev Board](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html) x1
- Computadora x1
- Cable USB tipo C x1

:::tip
    Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes verificar [seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::
- Paso 1. Prepara una Wio RP2040 mini Dev Board y un cable Tipo-C.
- Paso 2. **Mantén presionado** el botón 'boot' mientras vas a conectar la placa a la computadora.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_5.png)


- Paso 3. Conecta y verifica si aparece un disco en la computadora.

Si todo va bien, el LED rojo de alimentación en la Wio RP2040 mini Dev Board debería encenderse y un disco debería aparecer en la computadora.


## **Software**

Antes de comenzar a subir el código y transmitir datos, es posible que quieras configurar el servidor primero.

### **Comunicación con MQTT**

MQTT es un protocolo de transporte de mensajería de publicación/suscripción Cliente-Servidor. Los clientes pueden usarlo como publicador, suscriptor, o ambos.

#### **Configurar el servidor MQTT**

Descarga el [software del servidor MQTTX](https://github.com/emqx/MQTTX/) e instálalo en la computadora, y luego configura el servidor MQTT. Si no puedes descargar el servidor a través del sitio web en tu país/región, por favor prepara el servidor MQTT por ti mismo.

---

Usaremos el servidor gratuito de "mqtt.p2hp.com" en este proyecto.

**Servidor en línea**

- Dirección: mqtt.p2hp.com
- Puertos: 1883 (TCP), 8083 (WebSocket)
- Tipo: EMQ
- Compatible con MQTT V3.1.1/V5.0

---

Ingresa al software MQTTX para crear una nueva conexión, llena el nombre, servidor, puerto, tema, y luego haz clic en "Connect" para conectarte al servidor.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_12.png)

Después de que la conexión sea exitosa, habrá una ventana emergente en la esquina superior derecha del software.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_13.png)

Luego configura el tema y mensaje abajo. En este proyecto, usamos MQTT para recibir o enviar mensajes con la Wio RP2040 mini Dev Board.

Llena el 'topic' como "temperature".

:::note
    El 'topic' que escribimos aquí es muy importante. El publicador o suscriptor no puede transmitir datos a menos que los 'topics' entre ellos sean los mismos. Descubrirás más cuando subas el código.
:::
![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window5.png)

Las preparaciones se han completado y el servidor MQTT está configurado. Ahora vamos a subir el código.

#### **Código Arduino con MQTT**

:::note
    Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::
- **Paso 1. Instalar un Software Arduino**

<p style={{}}><a href="https://www.arduino.cc/en/software" target="_blank"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png" /></a></p>


**Lanzar la aplicación Arduino**

Haz doble clic en la aplicación Arduino (arduino.exe) que has descargado previamente.

:::note
    Si el Software Arduino se carga en un idioma diferente, puedes cambiarlo en el diálogo de preferencias. Consulta la [página del Software Arduino (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para más detalles.
:::
- **Paso 2. Descargar y abrir el ejemplo MQTT**

Puedes descargar [MQTT.ino](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/MQTT.ino) aquí y abrirlo.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window.png)

- **Paso 3. Agregar Wio RP2040 mini Dev Board a tu Arduino IDE**

Haz clic en **File > Preference**, y llena Additional Boards Manager URLs con la URL de abajo:

https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window2.png)

Haz clic en **Tools-> Board-> Boards Manager...**, y escribe la palabra clave "**XIAO RP2040**" en el espacio de búsqueda. Encuentra "Seeed XIAO RP2040" e instálalo.

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl2.png)

- **Paso 4. Seleccionar la placa correspondiente**

Después de instalar la placa, haz clic en **Tools-> Board**, encuentra "**Wio RP2040 Mini Dev Board**" y selecciónala.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window3.png)

Una vez que la placa esté conectada a la computadora, **no hay necesidad** de seleccionar un puerto. Porque la computadora escribirá un **archivo .uf2** a la placa en la primera subida, después de eso seleccionará automáticamente el puerto.

- **Paso 5. Subir el programa**
Ahora puedes subir el código y abrir MQTTX para ver los resultados.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window6.png)

- **Además**

Si envías algunos mensajes a través de MQTT, puedes verlo en el Monitor Serie en Arduino, siempre que los 'topics' entre ellos sean los mismos.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window16.png)

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window8.png)

### **Comunicación con Socket**

Ahora intentamos usar una computadora para construir un servidor TCP para enviar o recibir mensajes a través de Socket. El software que usamos aquí es [NetAssist](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/NetAssist.exe).

#### **Configurar el servidor TCP**

- Haz doble clic en el archivo '.exe' descargado y abre NetAssist.

- Selecciona 'TCP Server' en la esquina superior izquierda para configurar el 'Protocol'.

- Rellena la 'Dirección del host local' y el 'Puerto del host local' a continuación.
 
- Una vez que todo esté configurado, haz clic en 'Abrir' para ingresar al Servidor.

:::note
    La **'Dirección del host local'** y el **'Puerto del host local'** aquí son importantes, así como el **'tema'** en MQTT. No recibirás el mensaje a menos que estos parámetros sean los mismos que en el código.
:::
![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window14.png)

Los preparativos se han completado y el servidor MQTT está configurado. Ahora vamos a cargar el código.

#### **Código Arduino con Socket**

- **Paso 1. Descargar y abrir el ejemplo Socket**

Puedes descargar [Socket.ino](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Socket.ino) aquí y abrirlo. 

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window10.png)

- **Paso 2. Seleccionar la placa correspondiente**

Después de instalar la placa, haz clic en **Herramientas-> Placa**, encuentra "**Wio RP2040 Mini Dev Board**" y selecciónala.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window3.png)

Una vez que la placa esté conectada a la computadora, **no es necesario** seleccionar un puerto. Porque la computadora escribirá el **archivo .uf2** a la placa en la primera carga, después de eso seleccionará automáticamente el puerto.
       
- **Paso 3. Cargar el programa**
Ahora puedes cargar el código y abrir NetAssist para ver los resultados.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window13.png)

- **Además**

Si envías algunos mensajes a través de NetAssist, puedes verlo en NetAssist, siempre que la 'Dirección del Host Local' y el 'Puerto del Host Local' entre ellos sean los mismos.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window15.png)

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window11.png)

## Soporte Técnico y Discusión del Producto
 si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
