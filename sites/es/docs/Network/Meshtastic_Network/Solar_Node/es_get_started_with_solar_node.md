---
description: Primeros pasos con SenseCAP Solar Node para Meshtastic y LoRa
title: Primeros pasos con SenseCAP Solar Node
keywords:
  - Meshtastic
  - Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /get_started_with_meshtastic_solar_node
sku: 114993633,114993643
sidebar_position: 2
last_update:
  date: 3/10/2026
  author: Michelle Huang
createdAt: '2025-05-13'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/es/get_started_with_meshtastic_solar_node/
---

:::danger note
Cuando el dispositivo se encuentre en cualquiera de los estados siguientes, no lo reinicies ni lo apagues manualmente. De lo contrario, el dispositivo podría quedar inutilizable.
1. No ha finalizado el proceso de transmisión de mensajes
2. Está siendo configurado
:::
## Primeros pasos

Antes del despliegue formal, primero prueba y configura el nodo.

### Grabar firmware

:::caution note
No utilices `NRF-OTA` para actualizar el firmware, ya que podría hacer que el dispositivo deje de responder por completo.
Antes de grabar el firmware, ejecuta primero el paso de borrado de la memoria flash.
:::

Visita [Meshtastic Web Flasher](https://flasher.meshtastic.org/). Selecciona `Seeed SenseCAP Solar Node` como dispositivo de destino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-solar.png" alt="pir" width={800} height="auto" /></p>

#### Borrado de la memoria flash

Haz clic en el símbolo de `trash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/FlashEraseIcon.png" alt="pir" width={800} height="auto" /></p>

Descarga y copia el firmware de borrado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

Haz clic en `Enter DFU Mode`, selecciona y conéctate al puerto serie llamado `XIAO-xxx`, y debería aparecer una unidad llamada `XIAO-xxx`. Copia el firmware de borrado en esa unidad.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

Este proceso puede tardar un poco. Espera a que la unidad "XIAO-XXX" desaparezca.

#### Grabar el firmware de la aplicación

Elige la versión de firmware que desees. Haz clic en `flash`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/3-steps.png" alt="pir" width={800} height="auto" /></p>

Descarga el archivo UF2 y entra en modo DFU. Arrastra el archivo UF2 a la unidad DFU. El firmware debería grabarse después de copiar el archivo y reiniciarse el dispositivo.

### Instalar batería y módulo GPS (opcional)

:::tip
Cuando necesites instalar o reemplazar la batería, utiliza una batería 18650 (3,6 V) de `button-top`.
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-battery.png" alt="pir" width={500} height="auto" /></p>
La versión P1-Pro tiene una batería y un módulo GPS integrados. Para la versión P1, los usuarios deben instalar manualmente la batería y el módulo GPS si es necesario.
:::



- Paso 1: Retira todos los tornillos y la tapa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- Paso 2: Instala la batería y el módulo GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- Paso 3: Ensambla la carcasa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
Asegúrate de que la carcasa esté correctamente montada y los tornillos bien apretados para mantener la estanqueidad del dispositivo.
:::

### Encender el dispositivo

El dispositivo debe activarse conectando el cable USB antes del primer uso. Si la luz azul de Mesh parpadea, el dispositivo se ha encendido correctamente, como se muestra en el siguiente vídeo:

<div class="table-center">
<iframe width="700" height="250" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solarnodeturnon.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
Si el dispositivo no responde cuando presionas el botón, cárgalo primero. No utilices un cargador rápido.
:::

### Conectar mediante la app

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="App para iOS">

- Selecciona el dispositivo de destino en el panel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Introduce el código (el código predeterminado es `123456`) y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App para Android">

- Haz clic en `+` y elige el dispositivo de destino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- Introduce el código (el código predeterminado es `123456`) y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>


### Conectar mediante la página web

Si quieres enviar mensajes de texto y comunicarte con otros nodos en el cliente web, ahora puedes conectar el dispositivo al [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0).

  Paso 1: Abrir la página web

[Haz clic aquí](https://client.meshtastic.org/messages/broadcast/0) para ir a la página web.
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  Paso 2: Añadir el nuevo dispositivo 

    Haz clic en "+ New Connection". 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    Hay dos formas de conectar. Puedes elegir el método que prefieras.

 Method 1: Via Bluetooth

    Elige el método Bluetooth. Selecciona el ID del dispositivo en la ventana emergente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 Method 2: Via Serial

    Elige el método serie. Abre el administrador de dispositivos para ver a qué puerto está conectado el dispositivo. Selecciona ese puerto en la ventana emergente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    Tu dispositivo se mostrará en la lista. Haz clic para conectar. Si la conexión se realiza correctamente, podrás ver el estado del dispositivo directamente en la página web.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### Configurar el LoRa

Para empezar a comunicarte a través de la malla, debes establecer tu región. Este ajuste controla qué rango de frecuencias utiliza tu dispositivo y debe configurarse según tu ubicación regional.

<Tabs>
<TabItem value="ios" label="App para iOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App para Android">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**Lista de regiones**

|**Código de región**|**Descripción**|**Rango de frecuencias (MHz)**|**Ciclo de trabajo (%)**|**Límite de potencia (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Sin configurar|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|Unión Europea 868MHz|869.4 - 869.65|10|27|

Consulta [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para obtener una lista más completa.

:::info
**EU_868** debe cumplir una limitación de ciclo de trabajo por hora del 10 %, calculada cada minuto sobre una base móvil de 1 hora. Tu dispositivo dejará de transmitir si alcanzas este límite, hasta que se le permita de nuevo.
:::

Ahora que has configurado la región LoRa en tu dispositivo, puedes continuar configurando cualquier [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) según tus necesidades.

### Configurar el GPS

Activa el GPS. Puedes ajustar el intervalo de actualización y el intervalo de difusión para obtener información de ubicación más actualizada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

En iOS, activa `Accurate Location`. De lo contrario, el posicionamiento puede ser inexacto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

### Botón

|Acción del botón|Descripción|
|--|--|
|Pulsar PWR durante 3 s|Encender|
|Pulsar PWR dos veces|Actualizar información de nodo/ubicación|
|Pulsar PWR tres veces|Activar/desactivar el GPS|
|Pulsar PWR durante 5 s|Apagar|
|Pulsar RST dos veces|Entrar manualmente en DFU|

## Instalación

:::danger note
Dado que el dispositivo se utilizará en exteriores durante períodos prolongados, evita instalar el panel en posición horizontal. Se recomienda una instalación inclinada o diagonal para evitar la acumulación de agua. Además, asegúrate de que todos los tornillos estén bien apretados y la tapa correctamente instalada. Para una protección impermeable mejorada, también puedes considerar aplicar medidas de sellado adicionales.
:::

- **Lista de piezas**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>



### Guía de instalación paso a paso

- Paso 1: Conecta la pieza 1 a la parte inferior del dispositivo usando arandelas y tornillos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 2: Conecta la rótula universal (pieza 2) y el soporte (pieza 3) con tornillos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 3: Conecta el cable RF (pieza 4) y la antena (pieza 5).

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 4: Instala el aro de sujeción en la posición adecuada.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hoop-ring.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 5: Conecta el soporte de la rótula universal.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connector.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 6: Afloja los tornillos, ajusta la rótula universal a la posición adecuada y luego aprieta los tornillos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 7: Conecta la antena al dispositivo.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Guía de instalación completa

- Puedes completar todo el proceso de instalación e inicialización mediante un vídeo.

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/smQe7G0Bbsk?si=kcB8BdoxiwpZqB4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Añadir sensores al Solar Node (Opcional)

- Puedes instalar tu sensor siguiendo este vídeo.

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/AUFAdRgOCK8?si=9P-X1B7g8unZvVqb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

- Los siguientes sensores se han verificado como compatibles con la interfaz Grove del dispositivo.

<table>
  <tr>
    <th colspan="2">Tipo de sensor</th>
    <th colspan="1">Modelo de sensor</th>
  </tr>
  <tr>
    <td rowspan="4">Sensor ambiental</td>
    <td>Presión</td>
    <td>BMP085</td>
  </tr>
  <tr>
    <td>Temperatura</td>
    <td>[MCP9808](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html)、PCT2075</td>
  </tr>
  <tr>
    <td>Temperatura y humedad</td>
    <td>[SHT31](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)/SHTC3/[SHT4X](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)、AHT10</td>
  </tr]
  <tr>
    <td>Temperatura, humedad y presión</td>
    <td>[BME280](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)</td>
  </tr>
  <tr>
    <td rowspan="2">Otros</td>
    <td>Frecuencia cardíaca y SpO₂</td>
    <td>[MAX30102](https://www.seeedstudio.com/MAXREFDES117-HEART-RATE-AND-PULSE-OXIMETRY-MONITOR-p-2762.html)</td>
  </tr>
  <tr>
    <td>Teclado I2C</td>
    <td>CardKB</td>
  </tr>
</table>

### Actualizar la antena (Opcional)

- Puedes sustituir la antena por una de fibra de vidrio viendo este vídeo.

Si necesitas una antena con mayor ganancia, recomendamos la antena [860-930MHz 3dBi fiberglass](https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-with-base-860-930MHz-3dBi-360mm-p-5315.html) y la antena [902-928MHz 5.8dBi fiberglass](https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html).

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/uCUq7VrNkzc?si=9uiAAZY45B-Sg-wD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Preguntas frecuentes (FAQ)

### Bucle de arranque

- Motivo 

Esto suele deberse a un fallo al grabar el firmware. Al grabar el firmware, mantén una conexión estable.

- Solución de problemas

[Haz clic aquí](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_solar_node/#volver-a-grabar-el-firmware) para volver a grabar el firmware.

### Dispositivo bloqueado (bricked)

#### Descripción

El dispositivo no responde, el LED no se enciende y no puede emparejarse con tu aplicación.

**1) El dispositivo aún puede entrar en modo DFU, entonces intenta grabar el bootloader**.

#### Grabar el bootloader

- [Descarga del bootloader](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

:::danger note
Cuando estés grabando el bootloader, asegúrate de que la conexión del cable sea estable y **NO** lo desconectes durante el proceso de grabación.
:::

**Paso 1: Instalación de Adafruit-nrfutil**

Para usuarios de Windows, pulsa la tecla "Win" y la tecla "R", luego introduce "cmd" en la ventana emergente y pulsa "Enter". Esto abre la línea de comandos.

Para usuarios de Mac, pulsa la tecla "Command" y la barra espaciadora para abrir Spotlight. Luego introduce "terminal" y pulsa "Return". Esto abre la línea de comandos.

**Requisitos previos**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)


Comprueba en tu línea de comandos si Python y pip se han instalado correctamente.

```
python --version
```

```
python -m pip --version
```

Entonces deberían aparecer "Python xxx" y "pip xxx". Si no aparecen, intenta instalar Python de nuevo.

<Tabs>
<TabItem value="pypi" label="Instalación desde PyPI">

Este es el método recomendado para instalar la última versión:

```
pip3 install --user adafruit-nrfutil
```


Comprueba la ruta de instalación:

```
python -m pip show adafruit-nrfutil
```

Esta es la ubicación de instalación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

Para usuarios de Windows, puede que necesites añadir la ruta manualmente. Copia la ubicación de instalación mostrada en el último paso. Luego añádela de la siguiente manera:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>


</TabItem>

<TabItem value="sou" label="Instalación desde el código fuente">

Utiliza este método si tienes problemas al instalar con PyPI o si quieres modificar la herramienta. Primero, clona este repositorio y entra en su carpeta.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Nota: Los siguientes comandos usan `python3`; sin embargo, si estás en Windows, puede que necesites cambiarlo a `python`, ya que las instalaciones de Python 3.x en Windows siguen usando el nombre `python.exe`.

Para instalar en el espacio de usuario en tu directorio personal:

```
pip3 install -r requirements.txt
python3 setup.py install
```

Si obtienes errores de permisos al ejecutar `pip3 install`, tu `pip3` es antiguo o está configurado para intentar instalar en los directorios del sistema. En ese caso usa la opción `--user`:

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

Si quieres instalar en los directorios del sistema (generalmente no recomendado):

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

Para generar un binario ejecutable autónomo de la utilidad (Windows y MacOS), ejecuta estos comandos:

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

Encontrarás el ejecutable en `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` (con `.exe` si estás en Windows).
Cópialo o muévelo a otro lugar para tu comodidad, como un directorio en tu `%PATH%`.

</TabItem>
</Tabs>

**Paso 2: Comprueba tu número de puerto**

Conecta tu dispositivo a tu PC y comprueba el número de puerto.

Para usuarios de Windows, por ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

Para usuarios de Mac, por ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**Paso 3: Graba el bootloader**

En la terminal o símbolo del sistema, navega al directorio donde descargaste el paquete zip del bootloader y ejecuta el siguiente comando, sustituyendo el puerto por el correcto para tu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```
Cambia COMXX por tu número de puerto COM. Por ejemplo, si tu dispositivo está en COM6, cambia el comando a:

`adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COM6 -b 115200 --singlebank --touch 1200`

 Algunos dispositivos cambiarán su número de puerto después de introducir este comando. Si la instalación falla, comprueba de nuevo el número de puerto.


- **Para otros**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

Cuando hayas completado los pasos anteriores, sigue este [paso](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_solar_node/#flashear-firmware) para flashear el firmware de la aplicación.

 ### El dispositivo se apaga automáticamente

 #### Descripción

 - Después de que el dispositivo se enciende, se apaga o se reinicia automáticamente después de un tiempo.
 - El registro del puerto serie se ejecuta durante un tiempo y luego se detiene.

 Esto puede deberse a reiniciar o apagar manualmente y por la fuerza el dispositivo mientras se encuentra en uno de los siguientes estados: sin haber terminado el proceso de transmisión de mensajes o mientras está siendo configurado.

 #### Solución de problemas

[Haz clic aquí](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_solar_node/#borrado-flash) para realizar un borrado de la memoria flash y luego volver a flashear el firmware más reciente.


### Restablecimiento de fábrica

Si deseas restaurar la configuración predeterminada, puedes realizar un restablecimiento de fábrica. Hay dos métodos para hacer el restablecimiento de fábrica.

- [Haz clic aquí](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_solar_node/#borrado-flash) para realizar un borrado de la memoria flash y luego volver a flashear el firmware más reciente.

- Haz clic en el botón `Factory Reset` en la app. El dispositivo se reiniciará automáticamente con la configuración de fábrica.
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### Restablecimiento de NodeDB

NodeDB es la base de datos local que almacena información sobre los nodos descubiertos en la red Mesh actual, incluyendo:

- **ID de nodo**
- **Nombre de usuario**
- **Información de ubicación**
- **Información de señal (SNR)**
- **Hora de última visualización**

**Cuándo restablecer**

Restablece NodeDB cuando:

- La lista de nodos contiene entradas obsoletas, duplicadas o no válidas.
- Te mueves a un entorno Mesh diferente y quieres redescubrir los nodos cercanos.
- La información de los nodos en la app parece incorrecta o incompleta.

:::danger
Restablecer NodeDB solo borra la base de datos de nodos almacenada en el dispositivo. **No realiza un restablecimiento de fábrica** y **no elimina la configuración básica del dispositivo**.
:::

**Restablecer desde la app**

1. Abre la app y conéctate al dispositivo de destino.
2. Ve a **Settings**.
3. Toca **Device**.
4. Desplázate hasta la parte inferior de la página **Device Config** y encuentra **Reset NodeDB**.
5. Tócalo y confirma la acción.

**Ruta en la app**

`Settings > Device > Reset NodeDB`

**Pantallas de ejemplo**

Paso 1: Abre **Device** desde la página **Settings**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB3.png" alt="Device entry in Settings" width={300} height="auto" /></p>

Paso 2: Toca `Reset NodeDB` en la página **Device Config**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB4.png" alt="Reset NodeDB button in Device Config" width={300} height="auto" /></p>

:::tip
Ten en cuenta la diferencia entre las siguientes opciones:

- **Reset NodeDB**: Solo borra la base de datos de nodos.
- **Factory Reset**: Restaura el dispositivo a la configuración de fábrica y elimina los datos de configuración adicionales.
:::

**Qué sucede después del restablecimiento**

Después de ejecutar **Reset NodeDB**, el dispositivo borra la lista de nodos almacenada actualmente. A medida que el dispositivo continúa funcionando, volverá a descubrir y registrar los nodos cercanos.

Puedes observar lo siguiente:

- La lista de nodos puede quedar temporalmente vacía o más pequeña.
- Los nodos reaparecerán gradualmente a medida que el dispositivo continúe operando.
- Los registros históricos de nodos almacenados anteriormente ya no estarán disponibles.

**Notas**

- Antes de restablecer, asegúrate de que el problema esté realmente relacionado con una lista de nodos anómala.
- Si el problema es solo un retraso en la visualización de los nodos, espera un tiempo primero para ver si se recupera automáticamente.
- Si el problema persiste después de restablecer NodeDB, continúa solucionando la configuración del dispositivo u otras posibles causas.
- Usa **Factory Reset** con cuidado para evitar eliminar accidentalmente la configuración del dispositivo.

### Consumo de energía

El consumo de energía depende principalmente de factores como la frecuencia de transmisión de datos y la tasa de actualización del GPS.
Las cifras siguientes son solo de referencia; el consumo real puede variar según las condiciones de uso en el mundo real.

- **Consumo de energía en modo de suspensión con apagado**

|Descripción|Consumo|
|---|---|
|Corriente de funcionamiento del GPS_LED|1.02 mA|
|Alimentado pero no activado|56.195 μA|
|Alimentado y activado|611 μA|

**Ejemplo:**

|Capacidad de la batería |Vida útil de la batería|
|---|---|
|3350|136.8|
|12000|490.2|

- **Consumo de energía en modo activo**

|Modo|Corriente|
|---|---|
|Corriente estática|10.65 mA|
|Corriente de transmisión EU868|157.74 mA|
|Corriente de transmisión US915|205.22 mA|
|Corriente de funcionamiento del GPS|50 mA|
|Corriente de funcionamiento del GPS_LED|1.02 mA|

### Calidad de la señal

- **SNR** refleja la calidad del enlace de comunicación. Un dispositivo normal suele funcionar por encima de -7 dB. Un dispositivo con un SNR inferior a -10 dB indica un rendimiento deficiente.

- **RSSI** está determinado conjuntamente por el dispositivo y su entorno. Un dispositivo normal suele funcionar por encima de -110 dBm. Se considera que un dispositivo con un RSSI inferior a -115 dBm tiene un rendimiento deficiente.

      Para lograr el mejor rendimiento de señal, utiliza el dispositivo en un área abierta y sin obstrucciones, con interferencias mínimas.

### Corriente de carga

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>

La corriente máxima de carga de Xiao nRF-52840 Plus es de 200 mA. El chip de gestión de carga CN3165 admite 0.99 A. Por lo tanto, la corriente máxima de carga es de 1 A.

## Recurso
- [Tabla de cálculo de la vida útil de la batería del Solar Node](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Solar%20Node%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
