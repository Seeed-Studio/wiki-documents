---
description: Hardware components of the SenseCAP Watcher.
title: Vista General del Hardware
image: https://files.seeedstudio.com/wiki/watcher_getting_started/hardware_overview_1.webp
slug: /es/watcher_hardware_overview
sidebar_position: 1
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Vista General del Hardware de SenseCAP Watcher

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware_overview.jpg" style={{width:1000, height:'auto'}}/></div>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Video del Watcher</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Repositorio de Github</font></span></strong>
    </a>
</div><br />

En esta sección de la Wiki, nos enfocaremos en los componentes de hardware del SenseCAP Watcher, su construcción y el uso de accesorios adicionales.

## Especificaciones

<div class="table-center">
	<table align="center">
        <tr>
            <th>Hardware</th>
            <th>Descripción</th>
        </tr>
        <tr>
            <td align="center">MCU</td>
            <td align="center">ESP32-S3 @240MHz 8MB PSRAM</td>
        </tr>
        <tr>
            <td align="center">Procesador AI integrado</td>
            <td align="center">Himax HX6538 (Cortex M55 + Ethos-U55)</td>
        </tr>
        <tr>
            <td align="center">Cámara</td>
            <td align="center">OV5647 120° FOV <br /> Enfoque fijo a 3 metros</td>
        </tr>
        <tr>
            <td align="center">Wi-Fi</td>
            <td align="center">Compatible con IEEE 802.11b/g/n<br />Banda de 2.4GHz<br />Alcance inalámbrico: Hasta 100 metros (prueba en espacio abierto)</td>
        </tr>
        <tr>
            <td align="center">Bluetooth LE</td>
            <td align="center">Bluetooth 5</td>
        </tr>
        <tr>
            <td align="center">Antena</td>
            <td align="center">Antena integrada Wi-Fi y BLE</td>
        </tr>
        <tr>
            <td align="center">Pantalla</td>
            <td align="center">Pantalla táctil de 1.45 pulgadas, resolución 412×412</td>
        </tr>
        <tr>
            <td align="center">Micrófono</td>
            <td align="center">Micrófono único</td>
        </tr>
        <tr>
            <td align="center">Altavoz</td>
            <td align="center">Salida de altavoz de 1W</td>
        </tr>
        <tr>
            <td align="center">Rueda</td>
            <td align="center">Soporta desplazamiento arriba/abajo y botón</td>
        </tr>
        <tr>
            <td align="center">LED</td>
            <td align="center">1x luz RGB para indicación</td>
        </tr>
        <tr>
            <td align="center">Ranura para tarjeta microSD</td>
            <td align="center">Soporta tarjeta microSD FAT32 hasta 32GB</td>
        </tr>
        <tr>
            <td align="center">Flash</td>
            <td align="center">32MB Flash para ESP32-S3<br />16MB Flash para Himax HX6538</td>
        </tr>
        <tr>
            <td align="center">Interfaz de expansión</td>
            <td align="center">1x interfaz Grove IIC<br />2x4 header hembra (1xIIC, 2xGPIO, 2xGND, 1x3.3V_OUT, 1x5V_IN)</td>
        </tr>
        <tr>
            <td align="center">USB-C</td>
            <td align="center">1x USB-C en la parte trasera (solo alimentación)<br />1x USB-C en la parte inferior (alimentación y programación)</td>
        </tr>
        <tr>
            <td align="center">Botón Reset</td>
            <td align="center">1x botón RST en el orificio inferior</td>
        </tr>
        <tr>
            <td align="center">Alimentación</td>
            <td align="center">Alimentación DC 5V</td>
        </tr>
        <tr>
            <td align="center">Batería</td>
            <td align="center">Batería Li-ion 3.7V 400mAh como fuente de respaldo</td>
        </tr>
        <tr>
            <td align="center">Temperatura de operación</td>
            <td align="center">0 ~ 45°C</td>
        </tr>
        <tr>
            <td align="center">Soporte de montaje</td>
            <td align="center">Soporta instalación en pared, escritorio y con soporte<br />1 x rueda universal y placa base con adhesivo<br />1 x adaptador hembra 1/4"</td>
        </tr>
    </table>
</div>

## Características

- Arquitectura de alta eficiencia con procesamiento AI en dispositivo + servidor
- Extensa con Infinite Modal
- Privacidad garantizada con código abierto y despliegue local
- Respuestas emocionales personalizables

## Vista frontal

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-1.png" style={{width:1000, height:'auto'}}/></div>

## Vista trasera

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-2.png" style={{width:1000, height:'auto'}}/></div>

## Interior

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-3.png" style={{width:1000, height:'auto'}}/></div>

## Interfaz de montaje

En la parte trasera de tu dispositivo Watcher encontrarás un soporte de montaje que te permite fijar el dispositivo de forma segura a diversas superficies o accesorios. Actualmente, ofrecemos dos tipos de soportes de montaje para adaptarse a diferentes necesidades de colocación:

:::tip
Ten en cuenta que el cuerpo del Watcher solo viene con el soporte giratorio de 360°. Si requieres el soporte para trípode con rosca 1/4, por favor [cómpralo](https://www.seeedstudio.com/Mini-Tripod-p-5978.html) por separado.
:::

### Soporte giratorio 360°

   - Este soporte está diseñado para facilitar la instalación en paredes u otras superficies verticales.
   - Proporciona una rotación completa de 360 grados, permitiéndote ajustar la orientación de tu Watcher para lograr el ángulo de visión deseado.
   - El soporte giratorio ofrece flexibilidad en la posición y asegura una fijación segura a la pared.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/omni_wheel_bracket.gif" style={{width:650, height:'auto'}}/></div><br />

### Soporte para trípode con rosca 1/4

   - Este soporte es ideal para colocar tu Watcher sobre superficies planas como escritorios, mesas o estantes.
   - Cuenta con una rosca estándar de 1/4 de pulgada, compatible con la mayoría de los trípodes y otros accesorios de montaje.
   - El soporte para trípode proporciona estabilidad y te permite posicionar tu Watcher a diferentes alturas y ángulos, según tus necesidades específicas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/threaded_bracket.gif" style={{width:650, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Mini-Tripod-p-5978.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Cómpralo ahora</font></span></strong>
    </a>
</div>

Para usar cualquiera de estos soportes de montaje, sigue estos pasos generales:

1. Elige el soporte adecuado según el lugar donde planeas colocarlo (pared o superficie plana).

2. Fija el soporte seleccionado al soporte de montaje en la parte trasera de tu Watcher. Asegura una conexión segura para evitar desprendimientos accidentales.

3. Para el soporte giratorio 360°:
   - Identifica el lugar deseado en la pared donde quieras instalar tu Watcher.
   - Usa los tornillos y anclajes proporcionados (si es necesario) para fijar el soporte a la pared.
   - Ajusta la orientación de tu Watcher rotándolo hasta el ángulo deseado.

4. Para el soporte para trípode con rosca 1/4:
   - Selecciona una superficie plana y estable donde quieras colocar tu Watcher.
   - Si usas un trípode, fija el trípode al soporte usando la rosca de 1/4 de pulgada.
   - Ajusta la altura y el ángulo del trípode para lograr la posición óptima para tu Watcher.

5. Una vez que tu Watcher esté montado de forma segura con cualquiera de los soportes, puedes proceder a conectarlo a la energía y configurarlo según tus preferencias.

Al ofrecer estas dos opciones de soporte de montaje, buscamos proporcionar flexibilidad y comodidad para integrar tu dispositivo Watcher en diversos entornos. Ya sea que prefieras una instalación en pared o una disposición sobre escritorio, nuestros soportes aseguran una fijación segura y ajustable.

:::tip
Ten en cuenta que el cuerpo del Watcher no incluye ninguno de los soportes que se muestran a continuación, por lo que si necesitas uno, por favor cómpralo por separado.
:::

## Diagrama de Hardware

Continuando con la arquitectura de hardware del Watcher, exploremos los detalles proporcionados en el diagrama.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/Diagram.png" style={{width:1000, height:'auto'}}/></div>

El corazón del Watcher es el MCU principal, un chip **ESP32-S3**. Este potente microcontrolador opera a 240MHz y cuenta con 8MB de PSRAM para un procesamiento y gestión de memoria eficientes.

El ESP32-S3 se comunica con varios periféricos e interfaces:

1. **Pantalla**: Conectado a una pantalla LCD táctil de **1.45 pulgadas 412×412** vía interfaz SPI/I2C, permitiendo una interacción intuitiva y salida visual vibrante.

2. **Audio**: La interfaz I2S permite que el ESP32-S3 se comunique con un altavoz y un micrófono, facilitando entrada y salida de audio.

3. **Almacenamiento**: El Watcher cuenta con un módulo Flash de 32M, conectado por SPI, que ofrece espacio suficiente para firmware, datos y archivos de usuario.

4. **Conectividad inalámbrica**: El ESP32-S3 integra funcionalidad Wi-Fi y BLE para comunicación inalámbrica con otros dispositivos y redes.

5. **Expandibilidad**: Un puerto de expansión conectado vía interfaz I2C permite futuras adiciones de hardware y personalización.

6. **Entrada de usuario**: Una rueda de control conectada por GPIO/PWM ofrece una forma intuitiva para navegar y controlar funciones del Watcher.

7. **Almacenamiento externo**: Una ranura para tarjeta Micro SD, con interfaz SPI, permite ampliar la capacidad de almacenamiento para datos y archivos multimedia.

8. **Energía y datos**: Un puerto USB está disponible para cargar la batería de 400mAh y transferir datos entre el Watcher y otros dispositivos.

El MCU AI, un chip Himax HX6538 con núcleos Cortex M55 y US5, trabaja junto con el MCU principal para manejar tareas y cálculos relacionados con IA, mejorando las capacidades inteligentes del Watcher.

Finalmente, el Watcher cuenta con un módulo de cámara OV5647, probablemente conectado vía interfaz MIPI, que habilita aplicaciones de visión por computadora y detección visual.

Esta arquitectura de hardware integral permite que el Watcher ofrezca una experiencia de usuario versátil y rica en funciones, combinando pantalla, audio, conectividad inalámbrica, almacenamiento y capacidades de IA en un diseño compacto y eficiente.

## Carga del Watcher

El Watcher tiene un total de dos puertos USB-C, lo que permite a los usuarios elegir la fuente de alimentación más adecuada para las diferentes ubicaciones del Watcher.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/charging.png" style={{width:1000, height:'auto'}}/></div>

Al cargar el Watcher, asegúrate de usar un adaptador de corriente estándar del fabricante; recomendamos usar una fuente de alimentación de **5V/1A** para alimentar el Watcher. Si deseas comunicarte con el Watcher, puede que necesites usar un cable USB-C compatible que incluya señal.

:::caution
Por favor usa un enchufe de alimentación compatible con el Watcher; el Watcher debe ser alimentado con una fuente de 5V y puede quemarse si usas un adaptador no compatible o una fuente con voltaje mayor a 5V.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

La tabla arriba muestra las especificaciones recomendadas del adaptador. Si no sabes dónde comprar el adaptador correcto, puedes adquirirlo directamente en el enlace siguiente.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>
:::

## Conexión a la Consola Serial

Cuando conectas tu Watcher vía USB, Windows registra dos nuevos puertos seriales. En mi caso, COM23 y COM24. Decidí hacer un experimento para ver qué aparecía en un terminal serial, porque soy fan de CircuitPython y me encanta el REPL! Para esto usé Putty y lo configuré para usar el puerto serial a 115200 baudios (tuve suerte, el primer puerto COM23 fue el que necesitaba para descubrir la consola de comandos). El otro puerto, COM24, se usa para actualizar el firmware con protocolo Xmodem, igual que en Grove Vision AI V2.

De inmediato, el terminal muestra una serie de información sobre la memoria del dispositivo. Si presionas Enter, aparece un prompt donde puedes escribir algunos comandos que listo a continuación:


```
help  [<string>] 
Print the summary of all registered commands if no arguments are given, otherwise print summary of given command, where <string> is the name of command

wifi_sta  [-s <ssid>] [-p <password>]
WiFi is station mode, join specified soft-AP
s <ssid> SSID of AP
p <password> password of AP
ota  [-t <int>] [--url=<string>] force ota, ignoring version check
-t, --ota_type=<int> 0: ai model, 1: himax, 2: esp32
-url=<string> url for ai model, himax or esp32 firmware

taskflow  [-iej] [-f <string>]
i, --import import taskflow
e, --export export taskflow
f, --file=<string> File path, import or export taskflow json string by SD, eg: test.json
j, --json import taskflow json string by stdin

Example: Import taskflow by json string or SD file: taskflow -i -f "test.json".
Example: Export taskflow to stdout or SD file: taskflow -e -f "test.json"

factory_info
Get factory infomation

battery
Get battery percent

bsp  subcmd [subcmd args] 
Bsp call bsp functions

Example Scan the specified i2c bus: bsp i2cdetect <0|1>

reboot 
Reboot the device

factory_reset 
Factory reset and reboot the device

record  [-t <int>] [-f <string>]
Record audio and save to SD.
-t, --time=<int> record time, s
-f, --file=<string> File path, Store PCM audio data in SD card

vi_ctrl  [-sec] [-z <int>] 
Voice interaction ctrl (Probably will be used with Push to Talk function)
-s, --start start wakeup, and start record
-e, --end end record
-c, --stop stop voice interaction when analyzing or palying, Put it into idle.
-z, --exit=<int> 0: exit vi, 1:exit vi then run new taskflow

iperf  [-suVa] [-c <ip>] [-p <port>] [-l <length>] [-i <interval>] [-t <time>] [-b <bandwidth>]
Check conection performance. Similar to iperf linux command.
-c, --client=<ip> run in client mode, connecting to <host>
-s, --server run in server mode
-u, --udp use UDP rather than TCP
-V, --ipv6_domain use IPV6 address rather than IPV4
-p, --port=<port> server port to listen on/connect to
-l, --len=<length> Set read/write buffer size
-i, --interval=<interval> seconds between periodic bandwidth reports
-t, --time=<time> time in seconds to transmit for (default 10 secs)
-b, --bandwidth=<bandwidth> bandwidth to send at in Mbits/sec
-a, --abort abort running iperf

rgb  [-r <int>] [-g <int>] [-b <int>] [-m <int>] [-v <int>] [-t <int>]
Set the rgb LED value. eg: rgb -r 255 -g 0 -b 0 -m 3
-r, --red=<int> red value, 0~255
-g, --green=<int> green value, 0~255
-b, --blue=<int> blue value, 0~255
-m, --mode=<int> 1: breath, 2: blink, 3:solid, default 3
-v, --step_value=<int> RGB step value, default 3
-t, --step_time_ms=<int> RGB step time(ms), default 5
``` 

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurar que tu experiencia sea óptima. Ofrecemos diversos canales de comunicación para atender tus necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

