---
description: Comienza con SenseCAP Solar Node para Meshtastic y LoRa
title: Comienza con SenseCAP Solar Node
keywords:
- Meshtastic
- Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /es/get_started_with_meshtastic_solar_node
sidebar_position: 2
last_update:
  date: 12/24/2025
  author: Michelle Huang
---

:::danger note
Cuando el dispositivo esté en los estados siguientes, por favor no lo reinicies manualmente ni lo apagues. De lo contrario, el dispositivo puede quedar inutilizado.
1. No haber terminado el proceso de transmisión de mensajes
2. Estar siendo configurado
:::
## Comenzar

Antes del despliegue formal, por favor prueba y configura el nodo primero.

### Flashear Firmware

:::caution note
Por favor `no uses NRF-OTA` para actualizar el firmware, puede causar que el dispositivo quede completamente inutilizado.
¡Antes de flashear el firmware, por favor flashea primero el firmware de borrado!
:::

Visita [Meshtastic Web Flasher](https://flasher.meshtastic.org/). Selecciona el dispositivo objetivo como `Seeed SenseCAP Solar Node`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-solar.png" alt="pir" width={800} height="auto" /></p>

#### Borrado Flash

Haz clic en el símbolo de `papelera`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/FlashEraseIcon.png" alt="pir" width={800} height="auto" /></p>

Descarga y copia el firmware de borrado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

Haz clic en `Enter DFU Mode`, aparecerá un puerto serie llamado `XIAO-xxx`, haz clic y conéctalo, y debería aparecer un controlador llamado `XIAO-xxx`. Pega el firmware de borrado en el disco.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

Este proceso puede tomar algo de tiempo. Por favor espera a que el disco "XIAO-XXX" desaparezca.

#### Flashear Firmware de Aplicación

Elige la versión de firmware que desees. Haz clic en `flash`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/3-steps.png" alt="pir" width={800} height="auto" /></p>

Descarga el archivo UF2 y entra en el DFU. Arrastra el archivo UF2 a la unidad DFU. El firmware debería flashearse después de que el archivo se descargue y el dispositivo se reinicie.

### Instalar Batería y Módulo GPS (Opcional)

:::tip
Cuando necesites instalar o reemplazar la batería, usa una batería 18650 (3.6V) de `botón superior`.
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-battery.png" alt="pir" width={500} height="auto" /></p>
La versión P1-Pro tiene batería y módulo GPS integrados, para la versión P1, el usuario necesita instalar la batería y el módulo GPS manualmente si es necesario.
:::



- Paso 1: Retira todos los tornillos y la cubierta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- Paso 2: Instala la batería y el módulo GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- Paso 3: Ensambla la carcasa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
Asegúrate de que la carcasa esté montada correctamente y los tornillos estén firmemente apretados para mantener la integridad impermeable del dispositivo.
:::

### Encender el dispositivo

El dispositivo necesita ser activado conectando el cable USB para el primer uso. Si la luz azul Mesh parpadea, significa que el dispositivo se ha encendido exitosamente. Como se muestra en el video a continuación:

<div class="table-center">
<iframe width="700" height="250" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solarnodeturnon.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
Si el dispositivo no responde cuando presionas el botón, por favor cárgalo primero. No uses el cargador de carga rápida.
:::

### Conectar vía App

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="App iOS">

- Selecciona el dispositivo objetivo en el panel Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Ingresa el código (el código predeterminado es `123456`) y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">

- Haz clic en `+` y elige el dispositivo objetivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- Ingresa el código (el código predeterminado es `123456`) y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>


### Conectar vía Sitio Web

Si quieres enviar mensajes de texto y comunicarte con otros nodos en el sitio web, puedes conectar el dispositivo al [Sitio Web de Meshtastic](https://client.meshtastic.org/messages/broadcast/0) ahora.

  Paso 1: Abrir el Sitio Web

[Haz clic aquí](https://client.meshtastic.org/messages/broadcast/0) para ir al sitio web.
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  Paso 2: Agregar el nuevo dispositivo

    Haz clic en "+ New Connection".

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    Hay dos formas de conectar. Puedes elegir tu método preferido.

 Método 1: Vía Bluetooth

    Elige el método bluetooth. Elige el ID del dispositivo en la ventana emergente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 Método 2: Vía Serie

    Elige el método serie. Abre el administrador de dispositivos para ver a qué puerto está conectado el dispositivo. Elige ese puerto en la ventana emergente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    Tu dispositivo se mostrará en la lista. Haz clic para conectar. Si la conexión es exitosa, puedes ver el estado del dispositivo directamente en el sitio web.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### Configurar el LoRa

Para comenzar a comunicarte a través de la malla, debes establecer tu región. Esta configuración controla qué rango de frecuencia usa tu dispositivo y debe establecerse según tu ubicación regional.

<Tabs>
<TabItem value="ios" label="App iOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**Lista de Regiones**

|**Código de Región**|**Descripción**|**Rango de Frecuencia (MHz)**|**Ciclo de Trabajo (%)**|**Límite de Potencia (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Sin establecer|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|Unión Europea 868MHz|869.4 - 869.65|10|27|

Consulta [Región LoRa por País](https://meshtastic.org/docs/configuration/region-by-country/) para una lista más completa.

:::info
**EU_868** debe adherirse a una limitación de ciclo de trabajo por hora del 10%, calculada cada minuto en una base móvil de 1 hora. Tu dispositivo dejará de transmitir si lo alcanzas, hasta que se permita nuevamente.
:::

Ahora que has establecido la región LoRa en tu dispositivo, puedes continuar configurando cualquier [Configuración LoRa](https://meshtastic.org/docs/configuration/radio/lora/) para satisfacer tus necesidades.

### Configurar GPS

Por favor establece GPS habilitado. Puedes ajustar el intervalo de actualización e intervalo de transmisión para obtener información de ubicación más actualizada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

Para iOS, por favor activa la `Accurate Location`. De lo contrario, el posicionamiento puede desviarse.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

### Botón

|Acción del Botón|Descripción|
|--|--|
|Presionar PWR por 3s|Encender|
|Presionar PWR dos veces|Actualizar información del nodo/ubicación|
|Presionar PWR tres veces|Encender/apagar el GPS|
|Presionar PWR por 5s|Apagar|
|Presionar RST dos veces|Entrar manualmente en DFU|

## Instalación

:::danger note
Dado que el dispositivo se usará al aire libre por períodos prolongados, por favor evita instalar el panel en posición horizontal. Se recomienda una instalación inclinada o diagonal para prevenir la acumulación de agua. Además, asegúrate de que todos los tornillos estén firmemente apretados y la cubierta esté instalada correctamente. Para mayor protección impermeable, también puedes considerar aplicar medidas de sellado adicionales.
:::

- **Lista de Partes**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>



### Guía de Instalación Paso a Paso

- Paso1: Conecta la parte 1 a la parte inferior del dispositivo usando arandelas y tornillos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso2: Conecta la junta universal (parte 2) y el soporte (parte 3) con tornillos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso3: Conecta el cable RF (parte 4) y la antena (parte 5).

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso4: Instala el anillo de aro en la posición apropiada.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hoop-ring.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso5: Conecta el soporte de la junta universal.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connector.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso6: Afloja los tornillos, ajusta la junta universal a la posición apropiada, y luego aprieta los tornillos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso7: Conecta la antena al dispositivo.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Guía completa de instalación

- Puedes completar todo el proceso de instalación e inicialización a través de un video.

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/smQe7G0Bbsk?si=kcB8BdoxiwpZqB4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Agregar sensores al nodo solar (Opcional)

- Puedes instalar tu sensor a través de este video.

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/AUFAdRgOCK8?si=9P-X1B7g8unZvVqb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

- Los siguientes sensores han sido verificados como compatibles con la interfaz Grove del dispositivo.

<table>
  <tr>
    <th colspan="2">Tipo de sensor</th>
    <th colspan="1">Modelo de sensor</th>
  </tr>
  <tr>
    <td rowspan="4">Sensor Ambiental</td>
    <td>Presión</td>
    <td>BMP085</td>
  </tr>
  <tr>
    <td>Temperatura</td>
    <td>[MCP9808](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html)、PCT2075</td>
  </tr>
  <tr>
    <td>Temperatura y Humedad</td>
    <td>[SHT31](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)/SHTC3/[SHT4X](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)、AHT10</td>
  </tr>
  <tr>
    <td>Temperatura, Humedad y Presión</td>
    <td>[BME280](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)</td>
  </tr>
  <tr>
    <td rowspan="2">Otros</td>
    <td>Frecuencia Cardíaca y SpO₂</td>
    <td>[MAX30102](https://www.seeedstudio.com/MAXREFDES117-HEART-RATE-AND-PULSE-OXIMETRY-MONITOR-p-2762.html)</td>
  </tr>
  <tr>
    <td>Teclado I2C</td>
    <td>CardKB</td>
  </tr>
</table>

### Actualizar antena (Opcional)

- Puedes reemplazar la antena con una de fibra de vidrio viendo este video.

Si necesitas una antena con mayor ganancia, recomendamos la antena de [fibra de vidrio 860-930MHz 3dBi](https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-with-base-860-930MHz-3dBi-360mm-p-5315.html) y la antena de [fibra de vidrio 902-928MHz 5.8dBi](https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html).

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/uCUq7VrNkzc?si=9uiAAZY45B-Sg-wD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## FAQ

### Bucle de Arranque

- Razón

Esto generalmente es causado por el fallo en la grabación del firmware. Al grabar el firmware, por favor mantén una conexión estable.

- Solución de problemas

[Haz clic aquí](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_solar_node/#flash-firmware) para volver a grabar el firmware.

### Dispositivo bloqueado

#### Descripción

El dispositivo no responde, no hay LED, no se puede emparejar con tu App.

**1) El dispositivo aún puede entrar en modo DFU, entonces intenta grabar el bootloader**.

#### Grabar el Bootloader

- [Descarga del Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

:::danger note
Cuando estés grabando el bootloader, por favor asegúrate de que la conexión del cable sea estable y **NO** lo desconectes durante el proceso de grabación.
:::

**Paso1: Instalación de Adafruit-nrfutil**

**Prerrequisitos**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

<Tabs>
<TabItem value="pypi" label="Instalando desde PyPI">

Este es el método recomendado, para instalar la última versión:

```
pip3 install --user adafruit-nrfutil
```

</TabItem>

<TabItem value="sou" label="Instalando desde el Código Fuente">

Usa este método si tienes problemas instalando con PyPi o quieres modificar la herramienta. Primero clona este repositorio y ve a su carpeta.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Nota: los siguientes comandos usan `python3`, sin embargo si estás en Windows, puede que necesites cambiarlo a `python` ya que la instalación de python 3.x en Windows aún usa el nombre python.exe

Para instalar en el espacio de usuario en tu directorio home:

```
pip3 install -r requirements.txt
python3 setup.py install
```

Si obtienes errores de permisos al ejecutar `pip3 install`, tu `pip3` es más antiguo o está configurado para intentar instalar en los directorios del sistema. En ese caso usa la bandera `--user`:

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

Si quieres instalar en directorios del sistema (generalmente no recomendado):

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

Para generar un binario ejecutable autocontenido de la utilidad (Windows y MacOS), ejecuta estos comandos:

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

Encontrarás el .exe en `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` (con `.exe` si estás en Windows).
Cópialo o muévelo a otro lugar para tu conveniencia, como un directorio en tu %PATH%.

</TabItem>
</Tabs>

**Paso2: Verifica tu número de puerto**

Conecta tu dispositivo a tu PC, y verifica el número de puerto.

Ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**Paso3: Grabar el bootloader**

En la terminal o símbolo del sistema, navega al directorio donde descargaste el paquete zip del bootloader y ejecuta el siguiente comando, reemplazando el puerto correcto para tu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```

- **Para otros**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

Cuando hayas completado los pasos anteriores, entonces puedes seguir este [paso](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_solar_node/#flash-firmware) para grabar el firmware de la aplicación.

 ### El dispositivo se apaga automáticamente

 #### Descripción

 - Después de que el dispositivo se enciende, se apagará o reiniciará automáticamente después de un tiempo.
 - El registro del puerto serie funcionó por un tiempo y luego se detuvo.

 Esto posiblemente es causado por reiniciar manual y forzadamente o apagar el dispositivo cuando el dispositivo está en los siguientes estados: no terminando el proceso de transmisión de mensajes, siendo configurado......

 #### Solución de problemas

[haz clic aquí](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_solar_node/#flash-erase) para realizar un borrado de flash. Y luego vuelve a grabar el firmware más reciente.


### Restablecimiento de Fábrica

Si quieres restaurar a la configuración predeterminada, puedes hacer el restablecimiento de fábrica. Hay dos métodos para hacer el restablecimiento de fábrica.

- [haz clic aquí](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_solar_node/#flash-erase) para realizar un borrado de flash. Y luego vuelve a grabar el firmware más reciente.

- Haz clic en el botón `Factory Reset` en la App. El dispositivo se reiniciará con la configuración de fábrica automáticamente.
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### Consumo de Energía

El consumo de energía depende principalmente de factores como la frecuencia de transmisión de datos y la tasa de actualización del GPS.
Las cifras a continuación son solo para referencia; el consumo real puede variar según las condiciones de uso del mundo real.

- **Consumo de Energía en Modo de Suspensión de Apagado**

|Descripción|Consumo|
|---|---|
|Corriente de trabajo del GPS_LED|1.02 mA|
|Alimentado pero no activado|56.195 μA|
|Alimentado y activado|611 μA|

**Ejemplo:**

|Capacidad de la batería |Vida útil de la batería|
|---|---|
|3350|136.8|
|12000|490.2|

- **Consumo de Energía en Modo Activo**

|Modo|Corriente|
|---|---|
|Corriente Estática|10.65 mA|
|Corriente de Transmisión EU868|157.74 mA|
|Corriente de Transmisión US915|205.22 mA|
|Corriente de Operación GPS|50 mA|
|Corriente de Operación GPS_LED|1.02 mA|

### Calidad de la Señal

- **SNR** refleja la calidad del enlace de comunicación. Los dispositivos normales suelen operar por encima de -7 dB. Un dispositivo con un SNR inferior a -10 dB indica un rendimiento deficiente.

- **RSSI** está determinado conjuntamente por el dispositivo y su entorno circundante. Los dispositivos normales suelen operar por encima de -110 dBm. Un dispositivo con un RSSI inferior a -115 dBm se considera que tiene un rendimiento deficiente.

      Para lograr el mejor efecto de señal, utilice el dispositivo en un área abierta y sin obstrucciones con interferencia mínima.

## Recursos
- [Tabla de Cálculo de Vida Útil de Batería del Nodo Solar](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Solar%20Node%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
