---
title: Demo de Detección Humana con IA y Notificación Meshtastic
description: Este wiki demuestra un sistema de detección humana impulsado por IA usando una cámara AI y XIAO ESP32S3 & Wio SX1262 con redes Meshtastic para transmitir alertas en tiempo real.
keywords:
    - Detección Humana con IA
    - XIAO ESP32S3
    - ESP-Mesh
    - IA de Borde
    - Activador GPIO
slug: /es/ai_human_detection_meshtastic_broadcast
sku: 100029708,102010611,114993649
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 1
last_update:
    date: 2026-01-28
    author: John Xiang
---

## Introducción
Esta demostración presenta una poderosa solución de IA de Borde que integra la reCamera con una red de malla LoRa Meshtastic. Al ejecutar un modelo YOLO11n local, la reCamera identifica humanos en tiempo real y activa una señal GPIO. Esta señal física impulsa a un nodo XIAO ESP32S3 a transmitir una alerta de "Humano detectado" a través de la red descentralizada. Esta configuración permite monitoreo autónomo y seguridad fuera de la red sin depender de infraestructura de internet. La guía cubre el ensamblaje de hardware para la placa base PoE, implementación en C++, y configuración de nodos Mesh para conectar la visión de IA con comunicación de largo alcance.

## Preparación del Hardware
<table align="center">
<tbody><tr>
<th>Seeed Studio reCamera HQ PoE 8GB/64GB</th>
<th>Kit XIAO ESP32S3 & Wio-SX1262 para Meshtastic & LoRa</th>
<th>Wio Tracker L1 Pro</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:210, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t3.jpg" style={{width:210, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Ver Más🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> Ver Más🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

## Configuración de la Demo
Para lograr esta demostración, necesitamos configurar la reCamera y dos nodos Mesh de manera diferente. Primero, ejecutar un programa en C++ en la reCamera, que activará una señal GPIO cuando se detecte una persona. Posteriormente, necesitamos flashear el firmware Meshtastic en el primer nodo Mesh, habilitando este nodo Mesh para monitorear la señal GPIO y enviar un mensaje a la red Meshtastic cuando la señal se active. El mensaje transmitido será recibido por el segundo nodo Mesh; finalmente, al conectar un teléfono al segundo nodo Mesh vía Bluetooth, el mensaje enviado puede verse en el teléfono.

### Configuración de reCamera
:::warning
Por favor asegúrate de que la placa base de reCamera que tienes es la versión PoE, ya que solo la versión PoE de reCamera tiene interfaces GPIO. Respecto a las diferencias entre la versión estándar y la versión PoE de reCamera, por favor consulta[Especificación de Hardware reCamera 2002(w) 8GB/64GB](https://wiki.seeedstudio.com/es/recamera_hardware_and_specs/)y[Especificación de Hardware reCamera HQ PoE 8GB/64GB](https://wiki.seeedstudio.com/es/recamera_hq_poe_hardware/).

Si has comprado la versión PoE de reCamera[reCamera HQ PoE 8GB/64GB](https://www.seeedstudio.com/reCamera-2002-HQ-PoE-8GB-p-6558.html) puedes usarla directamente para reproducir esta demo.

Si has comprado la versión estándar de reCamera[reCamera 2002(w) 8GB/64GB](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html) necesitas comprar una placa base PoE adicional[reCamera Base Board PoE](https://www.seeedstudio.com/reCamera-2002-Base-Board-PoE-p-6559.html) e instalarla en la reCamera, reemplazando la placa base estándar.
:::

El propósito de la siguiente configuración es implementar una aplicación de **detección de objetos** en la **reCamera**. Al detener los servicios Node-RED predeterminados, liberamos los recursos de hardware necesarios para ejecutar un ejecutable C++ dedicado llamado `model_detector`.

Esta configuración utiliza un modelo YOLO11n (entrenado en el conjunto de datos COCO) para realizar computación de borde en tiempo real. El objetivo final es permitir que la reCamera detecte autónomamente objetos específicos (humanos en este caso). Una vez que ocurre una detección, el sistema activará una señal de hardware llevando **GPIO 490** a un nivel **Alto**. Este activador de hardware sirve como puente para comunicarse con el nodo Meshtastic **XIAO ESP32S3 + Wio SX1262**.

#### Exponer Pines GPIO
Para exponer los pines GPIO en la placa base PoE de reCamera, necesitamos desenroscar los tornillos de la placa base y quitar la cubierta. Luego, usa una llave hexagonal para quitar la cubierta. Encontrarás un conector en la placa base, que tiene 6 pines. Usaremos GPIO 490 de este conector. Para más información sobre las interfaces en la placa base, por favor consulta[Especificación de Hardware reCamera Base Board con PoE](https://wiki.seeedstudio.com/es/recamera_hq_poe_hardware/#b3_poe).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_1.jpg" /></div>

A continuación, del paquete reCamera PoE o del paquete reCamera Base Board con PoE, extrae el cable MX1.25-Dupont,6P,6Color:Rojo-Negro-Amarillo-Verde-Azul-Blanco.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_2.jpg" /></div>

Conecta el cable a la interfaz GPIO 490 en la placa base. La conexión final debe verse como la imagen mostrada abajo. GPIO 490 está conectado al cable verde.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_3.jpg" /></div>

#### Iniciar Sesión en reCamera
Primero, actualiza tu reCamera a la última versión 0.2.2 siguiendo este tutorial. Si tu versión ya es 0.2.2, puedes omitir este paso. [Tutorial de Actualización del SO reCamera](https://wiki.seeedstudio.com/es/recamera_os_version_control/)

:::note
Dado que los recursos de cámara de reCamera son exclusivos, el Node-RED y los servicios de IA relacionados que se ejecutan por defecto ocuparán el controlador de imagen subyacente durante mucho tiempo. Si el programa de detección de objetos C++ se inicia directamente mientras estos servicios están ejecutándose, causará conflictos entre múltiples procesos, llevando a que el programa C++ falle al iniciarse debido a la incapacidad de acceder a la cámara normalmente. Por lo tanto, necesitamos acceder a la reCamera vía SSH para asegurar que el dispositivo aún pueda ser controlado remotamente después de cerrar los servicios Web; posteriormente, ejecutar comandos en la terminal de reCamera vía SSH para detener procesos en segundo plano como Node-RED, liberando así el bloqueo en la cámara y despejando la ruta de acceso de hardware necesaria para el programa model_detector.
:::

#### Establecer Conexión SSH
Usa herramientas como **MobaXTerm** para iniciar sesión en **reCamera** vía SSH. IP predeterminada: Usualmente `192.168.42.1`
* Después de iniciar sesión, se recomienda cambiar al directorio `/userdata/`, ya que típicamente se usa para almacenar datos de usuario y modelos.

#### Detener Servicios Relacionados con Node-RED
Dado que el servicio Node-RED que se ejecuta por defecto en reCamera consume recursos significativos del sistema, debes ejecutar los siguientes tres comandos para detenerlo antes de ejecutar la Demo C++:

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_2_1.jpg" /></div>

#### Subir Modelo y Firmware

Usa **la función de transferencia de archivos de MobaXTerm** (el ícono de subida en el panel de archivos izquierdo) para subir los siguientes archivos al directorio `/userdata/`.

**Firmware compilado**: ej., `model_detector`
**Modelo cuantizado**: ej., `yolo11n_cv181x_int8.cvimodel`

El `model_detector` aquí es un archivo ejecutable. Se genera configurando el **SDK de reCamera** y **compilando cruzadamente** código fuente C++. La lógica de este programa es la siguiente: Usa el `yolo.cvimodel` subido para detectar si existe un humano en el cuadro. Si se detecta un humano, **GPIO 490** en la placa base PoE de reCamera se establecerá en **Alto**; de lo contrario, permanecerá **Bajo**.

Dado que configurar el entorno de compilación cruzada puede ser complejo, hemos proporcionado el ejecutable precompilado para tu conveniencia. Simplemente puedes descargarlo y subirlo directamente a tu reCamera. [Código Compilado C++ del Detector de Modelo](https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/model_detector)

Respecto al archivo del modelo, es un modelo de detección YOLO11n entrenado basado en el **conjunto de datos COCO**. Contiene 80 clases y puede reconocer objetos cotidianos comunes como humanos y vehículos. De manera similar, proporcionamos un enlace de descarga para que no necesites entrenar o convertir el modelo tú mismo. Después de descargar, puedes subirlo directamente a tu reCamera. [Modelos Yolo de reCamera](https://wiki.seeedstudio.com/es/recamera_on_device_models/)

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_2_2.jpg" /></div>

:::note
Modificar el código fuente y realizar compilación cruzada se recomienda para aquellos con experiencia en sistemas embebidos. Si estás interesado en explorar esto más a fondo, por favor consulta el documento.
:::

#### Otorgar Permisos y Ejecutar
En la terminal, primero visita la carpeta donde subiste el firmware compilado y el modelo cuantizado. Luego agrega permisos de ejecución al firmware e inicia el programa de detección.
```bash
chmod +x model_detector
```
Ejecuta el siguiente comando (usando `0.5`(50%) como ejemplo de umbral de confianza):

```bash
sudo ./model_detector yolo11n_cv181x_int8.cvimodel 0.5
```

Después de la ejecución exitosa, verás información de clase detectada en tiempo real (ej., `Class 0`) y sus coordenadas en la terminal.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_1.jpg" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_2.jpg" /></div>

### Configuración de XIAO ESP32S3 + Wio-SX1262 (Nodo Meshtastic)
Ahora, configuraremos el **primer nodo Mesh**. Este nodo es responsable de recibir la salida IO de la reCamera y transmitir un mensaje de texto: **"Human detected"**.

#### Flasheo de Firmware
Se debe flashear un firmware Mesh específico al dispositivo. Debido al mecanismo único de gestión de canales de las redes Mesh, la información enviada por el módulo **DetectionSensor** al **Channel 0** en el firmware estándar típicamente se descarta. Este diseño es intencional para prevenir que los datos de detección de alta frecuencia obstruyan los canales de la red Mesh. Por favor, sigue los pasos a continuación:

:::note
Antes del flasheo, retira temporalmente la **placa de expansión Wio SX1262** del XIAO. Aunque la placa de expansión no interfiere con el proceso de flasheo en sí, obstruye físicamente el botón **BOOT** en el XIAO ESP32S3.
:::

1.  Primero, descarga el firmware Mesh precompilado [Custom Meshtastic Firmware](https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/firmware-seeed-xiao-s3-2.7.17.63aadba52.factory.bin).
2.  Conecta el XIAO ESP32S3 a tu computadora mediante un cable USB y **entra en modo Bootloader**. Puedes consultar esta guía [XIAO S3 bootloader guide](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started/#bootloader-mode)
3.  Usa una herramienta de flasheo basada en web [Meshtastic Web Flasher](https://flasher.meshtastic.org/) selecciona el dispositivo **Seeed XIAO esp32s3**, luego selecciona el firmware que acabas de descargar y finalmente haz clic en el botón **Flash** para grabar el firmware en el XIAO ESP32S3.
Hay disponible un tutorial en video pero recuerda flashear el firmware descargado en lugar del firmware oficial de Meshtastic [Flash Firmware Video](https://wiki.seeedstudio.com/es/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic/#flash-firmware).
4.  Una vez que el flasheo esté completo y no se reporten errores, desconecta el XIAO ESP32S3 para apagarlo. Reinstala la placa de expansión Wio SX1262, y luego reconecta el cable USB a tu computadora. El dispositivo ahora arrancará con el nuevo firmware.

#### Configurar el Nodo Mesh
Hay dos formas de configurar los nodos Mesh. Primero, conecta el dispositivo a tu computadora con un cable USB, y luego puedes 1: Usar otra herramienta web Mesh: [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) para acceder al nodo mesh vía serial 2: Descargar la aplicación móvil Meshtastic para acceder al nodo Mesh vía Bluetooth en tu teléfono. Aquí demostramos usando el [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) en una PC para configurar el esp32s3 y Wio Tracker.

:::note
La interfaz de usuario de la aplicación Mesh en iOS y Android, así como la interfaz de usuario de la herramienta cliente web meshtastic, pueden ser diferentes, pero las configuraciones específicas, como configurar las bandas de frecuencia LoRa, se pueden encontrar en sus opciones de configuración correspondientes. Por lo tanto, si no tienes iOS, no hay necesidad de preocuparse; las aplicaciones en otras plataformas ciertamente tendrán las opciones de configuración correspondientes.
:::

:::note
[Meshtastic Web Flasher](https://flasher.meshtastic.org/) y [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0), son dos herramientas web oficiales proporcionadas por Meshtastic. Se usan para configurar nodos Mesh y flashear firmware Mesh, respectivamente. Por favor no las confundas entre sí.
:::

1.Asegúrate de que tu nodo Mesh XIAO esp32s3 esté conectado a la computadora vía cable USB. Abre el [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) y verás la página inicial. Ahora haz clic en "+ New Connection".

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_1.png" /></div>

2.Haz clic en "Serial", luego haz clic en "New Device", y selecciona el puerto para tu nodo Mesh.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_2.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_3.png" /></div>

3.Entra a la página de configuración del dispositivo; aquí, el nombre de mi dispositivo es "Meshtastic ff28".

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_4.png" /></div>

4.Haz clic en 'Config' -> 'Radio config' -> 'LoRa'

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_5.png" /></div>

5.Establece 'Region' y 'Modem Preset' a 'US' y 'Short Turbo' respectivamente:
:::note
En realidad, no hay restricciones estrictas en las configuraciones de Region y Modem Preset, pero debes asegurarte de que las configuraciones de Region y Modem Preset de los dos dispositivos de nodo Mesh que tienes sean consistentes. En este documento, usamos 'US' y 'Short Turbo' como ejemplos.
:::

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_6.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_7.png" /></div>

6.Ahora, vamos a 'Module Config' y selecciona 'DetectionSensor'.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_11.png" /></div>

7.Habilita este módulo, y luego establece el intervalo de transmisión a 15 segundos.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_12.png" /></div>

8.Friendly Name se establece a 'Human', Monitor Pin se establece a '3', y Detection Triggered Type se establece a 'LOGIC_HIGH'.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_13.png" /></div>

9.Ahora, vamos a 'Channel Config' y selecciona 'Ch1'.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_8.png" /></div>

10.Establece 'Role' a 'SECONDARY' y selecciona '128 bit' para el formato Pre-Shared Key. Luego haz clic en 'Generate' para crear una Pre-Shared Key aleatoria de 128 bits. **Recuerda esta Clave, y guárdala en un archivo de texto para uso posterior.** También, establece el Name a 'reCamera'.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_9.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_10.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_15.png" /></div>

11.Finalmente, haz clic en 'Save' para guardar la configuración. Espera a que el dispositivo guarde la configuración y luego se reinicie.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_14.png" /></div>

SjVzNWwzNTEwQWZUWlo0Yg==

### Configuración de Wio Tracker L1 (Nodo Meshtastic)
La configuración para Wio Tracker es similar, aún usamos [Meshtastic Web Flasher](https://flasher.meshtastic.org/) selecciona 'Wio Tracker L1' y graba el **Firmware Oficial de Meshtastic** en lugar del firmware personalizado que descargaste anteriormente. Por favor consulta [Wio Tracker L1 Firmware Flashing Tutorial](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing)

Igual que arriba, establecemos la Region y Modem Preset a 'US' y 'Short Turbo' para Wio Tracker L1. Luego, habilitamos su Channel1 y establecemos la Pre-Shared Key a la Clave de 128 bits que generaste anteriormente.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/3_1_1.png" /></div>

### Ensamblaje
Igual que arriba, conectamos GPIO490 (cable verde) en reCamera a D2 en XIAO esp32s3. Entonces, el sistema funcionará.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_1.jpg" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_2.jpg" /></div>

Cuando se establezca la conexión, escucharás un sonido del Wio Tracker L1, y la pantalla en Wio Tracker L1 mostrará el texto 'Human detected'.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_3.jpg" /></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Si necesitas orientación sobre objetivos de personalización específicos o quieres extender el flujo de trabajo más allá, no dudes en contactarnos. Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>