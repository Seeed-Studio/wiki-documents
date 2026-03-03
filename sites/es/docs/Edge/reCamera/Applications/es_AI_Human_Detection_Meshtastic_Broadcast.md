---
title: Detección Humana con IA y Notificación vía Meshtastic
description: Este wiki demuestra un sistema de detección humana impulsado por IA utilizando una cámara con IA y redes Meshtastic con XIAO ESP32S3 y Wio SX1262 para difundir alertas en tiempo real.
keywords:
    - Detección Humana con IA
    - XIAO ESP32S3
    - ESP-Mesh
    - Edge AI
    - Disparo por GPIO
slug: /es/ai_human_detection_meshtastic_broadcast
sku: 100029708,102010611,114993649
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 1
last_update:
    date: 2026-01-28
    author: John Xiang
---

## Introducción
Esta demostración muestra una solución de monitorización remota con Edge AI que integra la reCamera con una red mallada LoRa Meshtastic. Aprovechando las capacidades de inferencia en el dispositivo de la reCamera, un modelo local YOLO11n identifica personas y activa directamente una señal GPIO. Esta señal física hace que un nodo XIAO ESP32S3 envíe una alerta de "Human detected" a través de la red Meshtastic. La arquitectura admite la integración de múltiples reCamera y nodos Meshtastic para una cobertura amplia. 

## Preparación de Hardware
<table align="center">
<tbody><tr>
<th>Seeed Studio reCamera HQ PoE 8GB/64GB</th>
<th>Kit XIAO ESP32S3 & Wio-SX1262 para Meshtastic y LoRa</th>
<th>Wio Tracker L1(Pro)</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:210, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t3.jpg" style={{width:210, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Check More🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> Check More🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

## Configurar la Demostración
Para lograr esta demostración, necesitamos configurar la reCamera y dos nodos Mesh de forma diferente. Primero, ejecuta un programa en C++ en la reCamera, que activará una señal GPIO cuando se detecte una persona. Posteriormente, necesitamos grabar el firmware Meshtastic en el primer nodo Mesh, lo que permitirá que este nodo Mesh supervise la señal GPIO y envíe un mensaje a la red Meshtastic cuando se active la señal. El mensaje difundido será recibido por el segundo nodo Mesh; finalmente, conectando un teléfono al segundo nodo Mesh mediante Bluetooth, se podrá ver el mensaje enviado en el teléfono.

### Configuración de reCamera
:::warning
Asegúrate de que la placa base de reCamera que tienes sea la versión PoE, ya que solo la versión PoE de reCamera dispone de interfaces GPIO. En cuanto a las diferencias entre la versión estándar y la versión PoE de reCamera, consulta [reCamera 2002(w) 8GB/64GB Hardware Specification](https://wiki.seeedstudio.com/es/recamera_hardware_and_specs/) y [reCamera HQ PoE 8GB/64GB Hardware Specification](https://wiki.seeedstudio.com/es/recamera_hq_poe_hardware/).

Si has comprado la versión PoE de reCamera - [reCamera HQ PoE 8GB/64GB](https://www.seeedstudio.com/reCamera-2002-HQ-PoE-8GB-p-6558.html) puedes usarla directamente para reproducir esta demostración.

Si has comprado la versión estándar de reCamera - [reCamera 2002(w) 8GB/64GB](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html) necesitas adquirir una placa base PoE adicional - [reCamera Base Board PoE](https://www.seeedstudio.com/reCamera-2002-Base-Board-PoE-p-6559.html) e instalarla en la reCamera, sustituyendo la placa base estándar.
:::

El propósito de la siguiente configuración es desplegar una aplicación de **detección de objetos** en la **reCamera**. Al detener los servicios Node-RED predeterminados, permitimos que la reCamera ejecute un programa ejecutable dedicado en C++ llamado `model_detector`. 

Esta configuración utiliza un modelo **YOLO11n** (entrenado en el conjunto de datos COCO) para realizar computación en tiempo real en el borde. 

El objetivo final es permitir que la reCamera detecte de forma autónoma objetos específicos (personas en este caso). Una vez que se produce una detección, el sistema activará una señal de hardware poniendo el **GPIO 490** a nivel **High**. Este disparador de hardware sirve como puente para comunicarse con el nodo Meshtastic **XIAO ESP32S3 + Wio SX1262**.

#### Exponer Pines GPIO
Para exponer los pines GPIO en la placa base PoE de la reCamera, necesitamos desenroscar los tornillos de la placa base y retirar la tapa. Luego encontrarás un conector en la placa base, que tiene 6 pines. Usaremos GPIO 490 y GND de este conector. Para obtener más información sobre las interfaces de la placa base, como este conector de 6 pines, consulta [reCamera Base Board with PoE Hardware Specification](https://wiki.seeedstudio.com/es/recamera_hq_poe_hardware/#B3-placa-base-poe).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_1.jpg" /></div>

A continuación, del paquete de reCamera, saca el cable de extensión que se muestra a continuación. Este cable es un **MX1.25-Dupont,6P,6Color:Red-Black-Yellow-Green-Blue-White wire**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_2.jpg" /></div>

Conecta el cable a la placa base. La conexión final debería verse como en la imagen que se muestra a continuación. El GPIO 490 está conectado al cable verde mientras que el GND está conectado al cable negro.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_3.jpg" /></div>

#### Iniciar sesión en reCamera
Primero, actualiza tu reCamera a la última versión 0.2.2 siguiendo este tutorial: [reCamera OS UPgrade Tutorial](https://wiki.seeedstudio.com/es/recamera_os_version_control/) Si tu versión ya es 0.2.2, puedes omitir este paso.

:::note
Dado que los recursos de la cámara de reCamera son exclusivos, los servicios de Node-RED y de IA relacionados que se ejecutan por defecto ocuparán el controlador de imagen subyacente durante mucho tiempo. Si el programa de detección de objetos en C++ se inicia directamente mientras estos servicios se están ejecutando, provocará conflictos entre múltiples procesos, lo que hará que el programa en C++ no pueda iniciarse debido a la imposibilidad de acceder a la cámara con normalidad. 

Por lo tanto, necesitamos acceder a la reCamera mediante SSH para garantizar que el dispositivo aún pueda controlarse de forma remota después de cerrar los servicios web; posteriormente, ejecuta comandos en el terminal de reCamera a través de SSH para detener procesos en segundo plano como Node-RED, liberando así el bloqueo de la cámara y despejando la ruta de acceso al hardware necesaria para el programa model_detector.
:::

#### Establecer Conexión SSH
Utiliza herramientas como **MobaXTerm** para iniciar sesión en **reCamera** mediante SSH. IP predeterminada: normalmente `192.168.42.1`
* Después de iniciar sesión, se recomienda cambiar al directorio `/userdata/`, ya que normalmente se utiliza para almacenar datos y modelos de usuario.

#### Detener Servicios Relacionados con Node-RED
Dado que el servicio Node-RED que se ejecuta por defecto en reCamera consume recursos significativos del sistema, debes ejecutar los siguientes tres comandos para detenerlo antes de ejecutar la demostración en C++:

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_2_1n.jpg" /></div>

#### Subir Modelo y Firmware

Utiliza la **función de transferencia de archivos de MobaXTerm** (el icono de subida en el panel de archivos izquierdo) para subir los siguientes archivos al directorio `/home/recamera/`.

**Firmware compilado**: por ejemplo, `model_detector`
**Modelo cuantizado**: por ejemplo, `yolo11n_cv181x_int8.cvimodel`

El `model_detector` aquí es un archivo ejecutable. Se genera configurando el **SDK de reCamera** y **compilando cruzadamente** el código fuente en C++. La lógica de este programa es la siguiente: utiliza el `yolo.cvimodel` subido para detectar si existe una persona en el fotograma. Si se detecta una persona, el **GPIO 490** en la placa base PoE de reCamera se establecerá en **High**; de lo contrario, permanecerá en **Low**.

Dado que configurar el entorno de compilación cruzada puede ser complejo, hemos proporcionado el ejecutable precompilado para tu comodidad. Simplemente puedes descargarlo y subirlo directamente a tu reCamera. [Compiled C++ Model Detector Code](https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/model_detector)

En cuanto al archivo de modelo, es un modelo de detección YOLO11n entrenado sobre el **conjunto de datos COCO**. Contiene 80 clases y puede reconocer objetos cotidianos comunes como personas y vehículos. Del mismo modo, proporcionamos un enlace de descarga para que no necesites entrenar ni convertir el modelo tú mismo. Después de descargarlo, puedes subirlo directamente a tu reCamera. [reCamera Yolo Models](https://wiki.seeedstudio.com/es/recamera_on_device_models/)

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_2_2n.jpg" /></div>

:::note
Se recomienda modificar el código fuente y realizar la compilación cruzada a quienes tengan experiencia en sistemas embebidos. Si te interesa profundizar en esto, consulta el documento.
:::

#### Conceder Permisos y Ejecutar
En el terminal, primero ve a la carpeta donde subiste el firmware compilado y el modelo cuantizado. Luego añade permisos de ejecución al firmware e inicia el programa de detección.
```bash
chmod +x model_detector
```

Para la demostración visual, el programa model_detector incluye una función integrada de transmisión de vídeo por UDP. Siempre que la reCamera y tu PC estén en la misma red local (LAN), puedes lograr una vista previa en tiempo real ejecutando el programa en la reCamera mientras ejecutas el script udp_receiver.py en tu PC.

:::note
Este flujo UDP es estrictamente para monitorización local y fines de demostración (una función "extra"). Debido a las limitaciones físicas de ancho de banda de la tecnología LoRa, la transmisión de vídeo no es compatible ni posible a través de la red Meshtastic. Los datos reales transmitidos a través de la red Mesh se limitan a alertas de texto ligeras, como "Human detected."
:::

Ejecute el siguiente comando para ejecutar el programa model_detector usando `0.5` (50%) como ejemplo de umbral de confianza:

```bash
sudo ./model_detector [model_name] [confidence_threshold] [PC_IP_address] [udp_port]
```
donde:
* `[model_name]`: El nombre del archivo de modelo cuantizado. En este ejemplo, es `yolo11n_cv181x_int8.cvimodel`.
* `[confidence_threshold]`: El umbral de confianza entre 0.0 y 1.0 para la detección de objetos. Un valor más alto significa menos detecciones pero mayor precisión. En este ejemplo, es `0.5`.
* `[PC_IP_address]`: La dirección IP de su PC donde se ejecutará el script `udp_receiver.py`. En este ejemplo, es `10.0.0.228`. **Recuerde siempre usar la dirección IP de su PC, no la mía.**
* `[udp_port]`: El número de puerto UDP utilizado para la transmisión de video. En este ejemplo, es `5000`.

Aquí está el comando de ejemplo completo:
```bash
sudo ./model_detector yolo11n_cv181x_int8.cvimodel 0.5 10.0.0.228 5000
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_1n.jpg" /></div>

Ahora configuraremos el script `udp_receiver.py` en su PC. Asegúrese de que su PC tenga instalado Python y las bibliotecas **OpenCV** y **NumPy**. Luego, descargue el script `udp_receiver.py` desde el enlace [udp_receiver.py](https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/udp_receiver.py) y ejecútelo en su PC. En este ejemplo, se ejecuta en Windows Powershell:

```bash
python .\udp_receiver.py --port [udp_port] --scale [scale_factor]
```
donde:
* `[udp_port]`: El número de puerto UDP utilizado para la transmisión de video desde reCamera. En este ejemplo, es `5000`.
* `[scale_factor]`: El factor de escala para cambiar el tamaño del fotograma de video. En este ejemplo, es `1.5`.

Aquí está el comando de ejemplo completo:
```bash
python .\udp_receiver.py --port 5000 --scale 1.5
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_3n.jpg" /></div>

Finalmente, verá en la terminal información de clases detectadas en tiempo real (por ejemplo, `Class 0`) y sus coordenadas.
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_2n.jpg" /></div>

Mientras tanto, se mostrará en su PC una transmisión de video en vivo:
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_4n.jpg" /></div>

### Configuración de XIAO ESP32S3 + Wio-SX1262 (Nodo Meshtastic)
Ahora configuraremos el **primer nodo Mesh**. Este nodo es responsable de recibir la salida IO de la reCamera y difundir un mensaje de texto: **"Human detected"**.

#### Grabación del firmware
Se debe grabar en el dispositivo un firmware Mesh específico. Debido al mecanismo único de gestión de canales de las redes Mesh, la información que el módulo **DetectionSensor** envía al **Channel 0** en el firmware estándar normalmente se descarta. Este diseño es intencional para evitar que los datos de detección de alta frecuencia saturen los canales de la red Mesh. Siga los pasos a continuación:

:::note
Antes de grabar el firmware, retire temporalmente la **placa de expansión Wio SX1262** del XIAO. Aunque la placa de expansión no interfiere con el proceso de grabación en sí, bloquea físicamente el botón **BOOT** en el XIAO ESP32S3.
:::

1.  Primero, descargue el firmware Mesh precompilado [Custom Meshtastic Firmware](https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/firmware-seeed-xiao-s3-2.7.17.63aadba52.factory.bin).
2.  Conecte el XIAO ESP32S3 a su computadora mediante un cable USB y **entre en modo Bootloader**. Puede consultar esta guía [XIAO S3 bootloader guide](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started/#bootloader-mode)
3.  Use una herramienta web de grabación de firmware [Meshtastic Web Flasher](https://flasher.meshtastic.org/), seleccione el dispositivo **Seeed XIAO esp32s3**, luego seleccione el firmware que acaba de descargar y finalmente haga clic en el botón **Flash** para grabar el firmware en el XIAO ESP32S3.
Hay disponible un tutorial en video, pero recuerde grabar el firmware descargado en lugar del firmware oficial de Meshtastic [Flash Firmware Video](https://wiki.seeedstudio.com/es/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic/#flash-firmware).
4.  Una vez que la grabación se complete y no se informen errores, desconecte el XIAO ESP32S3 para apagarlo. Vuelva a instalar la placa de expansión Wio SX1262 y luego reconecte el cable USB a su computadora. El dispositivo se iniciará ahora con el nuevo firmware.

#### Configurar el nodo Mesh
Hay dos formas de configurar los nodos Mesh. Primero, conecte el dispositivo a su computadora con un cable USB y luego puede: 1) usar otra herramienta web Mesh: [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) para acceder al nodo Mesh a través de serie; 2) descargar la app móvil Meshtastic para acceder al nodo Mesh mediante Bluetooth en su teléfono. Aquí mostramos el uso de [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) en un PC para configurar el esp32s3 y Wio Tracker.

:::note
La interfaz de usuario de la app Mesh en iOS y Android, así como la interfaz de usuario de la herramienta meshtastic web client, puede ser diferente, pero configuraciones específicas, como configurar las bandas de frecuencia LoRa, se pueden encontrar en sus opciones de configuración correspondientes. Por lo tanto, si no tiene iOS, no hay necesidad de preocuparse; las apps en otras plataformas ciertamente tendrán las opciones de configuración correspondientes.
:::

:::note
[Meshtastic Web Flasher](https://flasher.meshtastic.org/) y [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) son dos herramientas web oficiales proporcionadas por Meshtastic. Se utilizan para configurar nodos Mesh y grabar firmware Mesh, respectivamente. Por favor, no las confunda.
:::

1.Asegúrese de que su nodo Mesh XIAO esp32s3 esté conectado a la computadora mediante un cable USB. Abra [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) y verá la página inicial. Ahora haga clic en "+ New Connection".

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_1.png" /></div>

2.Haga clic en "Serial", luego haga clic en "New Device" y seleccione el puerto de su nodo Mesh.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_2.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_3.png" /></div>

3.Entre en la página de configuración del dispositivo; aquí, el nombre de mi dispositivo es "Meshtastic ff28". 

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_4.png" /></div>

4.Haga clic en 'Config' -> 'Radio config' -> 'LoRa'

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_5.png" /></div>

5.Configure 'Region' y 'Modem Preset' en 'US' y 'Short Turbo' respectivamente:
:::note
En realidad, no hay restricciones estrictas sobre las configuraciones de Region y Modem Preset, pero debe asegurarse de que los ajustes de Region y Modem Preset de los dos dispositivos nodo Mesh que tiene sean coherentes. En este documento, usamos 'US' y 'Short Turbo' como ejemplos.
:::

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_6.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_7.png" /></div>

6.Ahora, vayamos a 'Module Config' y seleccionemos 'DetectionSensor'.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_11.png" /></div>

7.Habilite este módulo y luego establezca el intervalo de transmisión en 15 segundos.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_12.png" /></div>

8.Friendly Name se establece en 'Human', Monitor Pin se establece en '3' y Detection Triggered Type se establece en 'LOGIC_HIGH'.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_13.png" /></div>

9.Ahora, vayamos a 'Channel Config' y seleccionemos 'Ch1'.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_8.png" /></div>

10.Configure 'Role' en 'SECONDARY' y seleccione '128 bit' para el formato de Pre-Shared Key. Luego haga clic en 'Generate' para crear una Pre-Shared Key aleatoria de 128 bits. **Recuerde esta clave y guárdela en un archivo de texto para usarla más adelante.** Además, establezca el Name en 'reCamera'.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_9.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_10.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_15.png" /></div>

11.Finalmente, haga clic en 'Save' para guardar la configuración. Espere a que el dispositivo guarde la configuración y luego se reinicie.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_14.png" /></div>

SjVzNWwzNTEwQWZUWlo0Yg==

### Configuración de Wio Tracker L1 (Nodo Meshtastic)
La configuración para Wio Tracker es similar a la anterior; seguimos usando [Meshtastic Web Flasher](https://flasher.meshtastic.org/), seleccionamos 'Wio Tracker L1' y grabamos el **Official Meshtastic Firmware** en lugar del firmware personalizado que descargó antes. Consulte [Wio Tracker L1 Firmware Flashing Tutorial](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing)

Igual que antes, configuramos Region y Modem Preset en 'US' y 'Short Turbo' para Wio Tracker L1. Luego, habilitamos su Channel1 y establecemos la Pre-Shared Key en la clave de 128 bits que generó anteriormente.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/3_1_1.png" /></div>

### Ensamblaje
Al igual que antes, conectamos GPIO490 (cable verde) en reCamera a D2 y GND al pin GND en XIAO esp32s3. Luego, el sistema se ejecutará.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_1.jpg" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_2.jpg" /></div>

Cuando se establece la conexión, escucharás un sonido del Wio Tracker L1 y la pantalla del Wio Tracker L1 mostrará el texto 'Human detected'.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_3.jpg" /></div>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Si necesitas orientación sobre objetivos de personalización específicos o quieres ampliar aún más el flujo de trabajo, no dudes en ponerte en contacto. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>