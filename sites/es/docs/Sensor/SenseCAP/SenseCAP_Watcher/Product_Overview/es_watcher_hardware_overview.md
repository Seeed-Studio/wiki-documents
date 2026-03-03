---
description: Componentes de hardware del SenseCAP Watcher.
title: Descripción General del Hardware
image: https://files.seeedstudio.com/wiki/watcher_getting_started/hardware_overview_1.webp
slug: /es/watcher_hardware_overview
sidebar_position: 1
last_update:
  date: 10/18/2024
  author: Citric, Djair
---

# Descripción General del Hardware del SenseCAP Watcher

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware_overview.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Video del Watcher</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Repositorio de Github</font></span></strong>
    </a>
</div><br />

En esta sección del Wiki, nos enfocaremos en los componentes de hardware del SenseCAP Watcher, su construcción y el uso de accesorios adicionales.

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
            <td align="center">Procesador de IA Integrado</td>
            <td align="center">Himax HX6538 (Cortex M55 + Ethos-U55)</td>
        </tr>
        <tr>
            <td align="center">Cámara</td>
            <td align="center">OV5647 120° FOV <br /> Focal Fijo 3 metros</td>
        </tr>
        <tr>
            <td align="center">Wi-Fi</td>
            <td align="center">Compatible con IEEE 802.11b/g/n<br />Banda de 2.4GHz<br />Alcance Inalámbrico: Hasta 100 metros (prueba en espacio abierto)</td>
        </tr>
        <tr>
            <td align="center">Bluetooth LE</td>
            <td align="center">Bluetooth 5</td>
        </tr>
        <tr>
            <td align="center">Antena</td>
            <td align="center">Antena Wi-Fi y BLE integrada</td>
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
            <td align="center">Soporta desplazamiento arriba y abajo y botón</td>
        </tr>
        <tr>
            <td align="center">LED</td>
            <td align="center">1xLuz RGB para indicación</td>
        </tr>
        <tr>
            <td align="center">Ranura para Tarjeta microSD</td>
            <td align="center">Soporta tarjeta microSD FAT32 de hasta 32GB</td>
        </tr>
        <tr>
            <td align="center">Flash</td>
            <td align="center">32MB Flash para ESP32-S3<br />16MB Flash para Himax HX6538</td>
        </tr>
        <tr>
            <td align="center">Interfaz de Extensión</td>
            <td align="center">1xInterfaz Grove IIC<br />2x4 Conector hembra(1xIIC, 2xGPIO, 2xGND, 1x3.3V_OUT, 1x5V_IN)</td>
        </tr>
        <tr>
            <td align="center">USB-C</td>
            <td align="center">1x USB-C en la parte trasera(solo alimentación)<br />1x USB-C en la parte inferior(alimentación y programación)</td>
        </tr>
        <tr>
            <td align="center">Botón de Reset</td>
            <td align="center">1xBotón RST en el orificio inferior</td>
        </tr>
        <tr>
            <td align="center">Fuente de Alimentación</td>
            <td align="center">Alimentación DC de 5V</td>
        </tr>
        <tr>
            <td align="center">Batería</td>
            <td align="center">Batería Li-ion de 3.7V 400mAh como alimentación de respaldo</td>
        </tr>
        <tr>
            <td align="center">Temperatura de Operación</td>
            <td align="center">0 ~ 45°C</td>
        </tr>
        <tr>
            <td align="center">Soporte de Montaje</td>
            <td align="center">Soporta instalación en pared, escritorio y soporte<br />1 x Rueda universal y placa base con adhesivo<br />1 x Juego de adaptador hembra de 1/4"</td>
        </tr>
    </table>
</div>

## Características

- Arquitectura de alta eficiencia con procesamiento de IA en dispositivo + servidor
- Extensible con Modal Infinito
- Garantizando Privacidad con Código Abierto y Despliegue Local
- Respuestas Emocionales Personalizables

## Vista Frontal

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-1.png" style={{width:1000, height:'auto'}}/></div>

## Vista Trasera

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-2.png" style={{width:1000, height:'auto'}}/></div>

## Interior

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-3.png" style={{width:1000, height:'auto'}}/></div>

## Interfaz de Montaje

En la parte trasera de su dispositivo Watcher, encontrará un Soporte de Montaje que le permite fijar de forma segura el dispositivo a varias superficies o accesorios. Actualmente, ofrecemos dos tipos de soportes de montaje para acomodar diferentes necesidades de colocación:

:::tip
Tenga en cuenta que el cuerpo del Watcher solo viene con el Soporte de Rotación 360°. Si requiere el Soporte de Trípode con Rosca 1/4, por favor [cómprelo](https://www.seeedstudio.com/Mini-Tripod-p-5978.html) por separado.
:::

### Soporte de Rotación 360°

- Este soporte está diseñado para una fácil instalación en paredes u otras superficies verticales.
- Proporciona una rotación completa de 360 grados, permitiéndole ajustar la orientación de su dispositivo Watcher para lograr el ángulo de visión deseado.
- El soporte de rotación ofrece flexibilidad en el posicionamiento y asegura una fijación segura a la pared.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/omni_wheel_bracket.gif" style={{width:650, height:'auto'}}/></div><br />

### Soporte de Trípode con Rosca 1/4

- Este soporte es ideal para colocar su Watcher en superficies planas como escritorios, mesas o estantes.
- Cuenta con una rosca estándar de 1/4 de pulgada, haciéndolo compatible con la mayoría de trípodes y otros accesorios de montaje.
- El soporte de trípode proporciona estabilidad y le permite posicionar su Watcher a varias alturas y ángulos, dependiendo de sus necesidades específicas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/threaded_bracket.gif" style={{width:650, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Mini-Tripod-p-5978.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora</font></span></strong>
    </a>
</div>

Para usar cualquiera de estos soportes de montaje, siga estos pasos generales:

1. Elija el soporte apropiado basándose en su ubicación de colocación prevista (pared o superficie plana).

2. Fije el soporte seleccionado al Soporte de Montaje en la parte trasera de su dispositivo Watcher. Asegure una conexión segura para prevenir cualquier desprendimiento accidental.

3. Para el Soporte de Rotación 360°:
   - Identifique la ubicación deseada en la pared donde quiere instalar su Watcher.
   - Use los tornillos y anclajes proporcionados (si es necesario) para fijar de forma segura el soporte a la pared.
   - Ajuste la orientación de su Watcher rotándolo al ángulo deseado.

4. Para el Soporte de Trípode con Rosca 1/4:
   - Seleccione una superficie plana estable donde quiera colocar su Watcher.
   - Si usa un trípode, fije el trípode al soporte usando la rosca de 1/4 de pulgada.
   - Ajuste la altura y ángulo del trípode para lograr la posición de visión óptima para su Watcher.

5. Una vez que su Watcher esté montado de forma segura usando cualquiera de los soportes, puede proceder a conectarlo a la alimentación y configurarlo según sus preferencias.

Al ofrecer estas dos opciones de soportes de montaje, nuestro objetivo es proporcionar flexibilidad y conveniencia en la integración de su dispositivo Watcher en varios entornos. Ya sea que prefiera una configuración montada en pared o un arreglo amigable para escritorio, nuestros soportes aseguran una instalación segura y ajustable.

:::tip
Tenga en cuenta que el cuerpo del Watcher no viene con ninguno de los soportes de abajo, así que si necesita un soporte, por favor cómprelo por separado.
:::

## Diagrama de Hardware

Continuando con la arquitectura de hardware del Watcher, profundicemos en los detalles proporcionados en el diagrama.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/Diagram.png" style={{width:1000, height:'auto'}}/></div>

El corazón del Watcher es el MCU Principal, que es un chip **ESP32-S3**. Este potente microcontrolador opera a 240MHz y viene con 8MB de PSRAM para un procesamiento eficiente y gestión de memoria.

El ESP32-S3 se comunica con varios periféricos e interfaces:

1. **Pantalla**: Se conecta a una **Pantalla Táctil LCD de 1.45 pulgadas 412*412** a través de la interfaz SPI/I2C, permitiendo una interacción intuitiva del usuario y una salida visual vibrante.

2. **Audio**: La interfaz I2S permite al ESP32-S3 comunicarse con un altavoz y un micrófono, facilitando las capacidades de entrada y salida de audio.

3. **Almacenamiento**: El Watcher está equipado con un módulo Flash 32M, conectado a través de la interfaz SPI, proporcionando amplio almacenamiento para firmware, datos y archivos de usuario.

4. **Conectividad Inalámbrica**: El ESP32-S3 integra funcionalidad Wi-Fi y BLE, habilitando comunicación inalámbrica sin problemas con otros dispositivos y redes.

5. **Expandibilidad**: Un Puerto de Expansión, conectado a través de la interfaz I2C, permite futuras adiciones de hardware y personalización.

6. **Entrada del Usuario**: Una Rueda de Marcado, conectada a través de GPIO/PWM, ofrece una forma intuitiva para que los usuarios naveguen y controlen las funciones del Watcher.

7. **Almacenamiento Externo**: Una ranura para Tarjeta Micro SD, interfazada a través de SPI, permite a los usuarios extender la capacidad de almacenamiento del Watcher para datos adicionales y archivos multimedia.

8. **Energía y Datos**: Un puerto USB está disponible para cargar la batería de 400mAh y transferir datos entre el Watcher y otros dispositivos.

El MCU de IA, un chip Himax HX6538 con núcleos Cortex M55 y US5, trabaja junto al MCU Principal para manejar tareas y cálculos relacionados con IA, mejorando las capacidades inteligentes del Watcher.

Por último, el Watcher cuenta con un módulo Cámara OV5647, probablemente conectado a través de la interfaz MIPI, habilitando aplicaciones de visión por computadora y detección visual.

Esta arquitectura de hardware integral permite al Watcher ofrecer una experiencia de usuario rica en características y versátil, combinando pantalla, audio, conectividad inalámbrica, almacenamiento y capacidades de IA en un diseño compacto y eficiente.

## Carga del Watcher

Hay un total de dos puertos USB-C en el Watcher, permitiendo a los usuarios encontrar la fuente de alimentación más apropiada para cada una de las diferentes ubicaciones del Watcher.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/charging.png" style={{width:1000, height:'auto'}}/></div>

Al cargar el Watcher, por favor asegúrese de usar un adaptador de corriente de un fabricante regular, recomendamos usar una especificación de energía de **5V/1A** para alimentar el Watcher. Si desea comunicarse con el Watcher, puede necesitar usar un cable USB-C compatible con cable de señal.

:::caution
Por favor use un enchufe de corriente que sea compatible con el Watcher; el Watcher debe ser alimentado por una fuente de alimentación de 5V y puede quemarse si usa un adaptador de corriente no compatible o una fuente de alimentación con un voltaje mayor a 5V!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

El gráfico anterior muestra las especificaciones recomendadas del adaptador. Si no sabe dónde puede comprar el adaptador correcto, puede elegir comprarlo directamente en el enlace de abajo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>
:::

## Conectando a la Consola Serial

Cuando conectas tu Watcher vía USB, Windows registra dos nuevos puertos seriales. En mi caso, COM23 y COM24. Decidí hacer un experimento y ver qué aparecería en un terminal serial, porque soy fanático de Circuitpython, ¡y me encanta el REPL! Para esto usé Putty y lo configuré para usar el puerto serial a 115200 baudios (tuve suerte, el primer puerto COM23 ya era el que necesitaba para descubrir la consola de comandos). Pero el otro, COM24 se usa para actualizar firmware usando el protocolo Xmodem de la misma manera que Grove Vision AI V2.

De inmediato, el terminal muestra una serie de información sobre la memoria del dispositivo. Si presionas enter, aparece un prompt y puedes escribir algunos comandos que listo a continuación:

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
