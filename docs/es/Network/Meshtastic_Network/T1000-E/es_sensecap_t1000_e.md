---
description: Comienza con SenseCAP Card Tracker T1000-E para Meshtastic
title: Comienza con T1000-E Tracker
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/sensecap_t1000_e
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
## Tutorial en Video

### Parte 1: Configuración de Desempaquetado

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/9sCHpWPSPcw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Parte 2: Indicadores de Estado

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/8p34S_9DDEQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Parte 3: Flashear Nuevo Firmware

:::caution note
Antes de flashear el firmware, por favor asegúrate de haber comprado el `T1000-E for Meshtastic`. Por favor no flashees el firmware a otro modelo de tracker que no soporte Meshtastic. Por favor `no uses NRF-OTA` para actualizar el firmware, puede causar que el dispositivo quede completamente inutilizado.
:::

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/li6DTOeXK3M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Parte 4: Instrucciones de Solución de Problemas

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/iWahTuXwYnU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Comenzar

Descargar la App `Meshtastic`:

- [App IOS](https://meshtastic.org/docs/category/apple-apps/)
- [App Android](https://meshtastic.org/docs/category/android-app/)

### Encender el dispositivo

Presiona una vez para encender el dispositivo, habrá una melodía ascendente, y la luz LED permanecerá encendida por aproximadamente 1s.

:::tip
Si el dispositivo no responde cuando presionas el botón, por favor cárgalo primero. No uses el cargador de carga rápida.
:::

### Conectar vía App

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="App IOS">

- Selecciona el dispositivo objetivo en el panel de Bluetooth.

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

 Método 2: Vía Serial

    Elige el método serial. Abre el administrador de dispositivos para ver a qué puerto está conectado el dispositivo. Elige ese puerto en la ventana emergente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    Tu dispositivo se mostrará en la lista. Haz clic para conectar. Si la conexión es exitosa, puedes ver el estado del dispositivo directamente en el sitio web.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### Configurar el LoRa

Para comenzar a comunicarte a través de la malla, debes establecer tu región. Esta configuración controla qué rango de frecuencia usa tu dispositivo y debe establecerse según tu ubicación regional.

<Tabs>
<TabItem value="ios" label="App IOS">

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

### Configurar Sensor

|Sensor|Descripción|
|-|-|
|Temperatura|✅|
|Luz|No soportado por la App actualmente|
|Acelerómetro|Por continuar|

**Configuración del Sensor de Temperatura**

<Tabs>
<TabItem value="ios" label="App IOS">

Navega a `Settings` -> `Telemetry(Sensors)` -> Habilitar sensores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-ios.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">

Navega a `Settings` -> `Telemetry(Sensors)` -> Habilitar sensores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

**Configuración de Buzzer y LED**

||Tipo|PIN de Salida|
|-|-|-|
|Buzzer|Buzzer PWM|25|
|LED|-|24|

<Tabs>
<TabItem value="ios" label="App IOS">

Navega a `Settings` -> `External Notification` -> Habilitar `GPIO` -> Establecer `Output Pin GPIO`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-en.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">

Navega a `Settings` -> `External Notification` -> Habilitar `GPIO` -> Establecer `Output Pin GPIO`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

Consulta [Configuración de Notificación Externa](https://meshtastic.org/docs/configuration/module/external-notification/) para más detalles.

:::tip
Después de actualizar la configuración del dispositivo, el dispositivo se reiniciará, lo cual puede tomar algún tiempo.
:::

### Configurar GPS

Por favor establece GPS habilitado. Puedes ajustar el intervalo de actualización e intervalo de transmisión para obtener información de ubicación más actualizada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

Para IOS, por favor activa la `Accurate Location`. De lo contrario, el posicionamiento puede desviarse.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

## Flashear Firmware

### Verificar la Versión del Firmware

Navega a `Settings` -> `Firmware Updates`, verifica la versión actual del firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/check-version.png" alt="pir" width={400} height="auto" /></p>

### <div class="danger">⚠️NO FLASHEES EL SIGUIENTE FIRMWARE</div>

:::danger
NO FLASHEES OTRO FIRMWARE QUE NO SEA EL FIRMWARE T1000-E, ESTO PUEDE CAUSAR QUE EL DISPOSITIVO SE CONGELE.
:::

El siguiente firmware dañará tu dispositivo：

- nrf52_promicro_diy_tcxo<br/>
- nrf52_promicro_diy_xtal<br/>
- Dongle_nRF52840-pca10059-v1<br/>
- feather_diy<br/>
- TWC_mesh_v4<br/>
- wio-sdk-wm1110<br/>
- wio-tracker-wm1110<br/>
- xiao_ble

### Flashear el Firmware de Aplicación

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Flash%20Firmware.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
:::caution note
Antes de flashear el firmware, por favor asegúrate de haber comprado el `T1000-E for Meshtastic`. Por favor no flashees el firmware a otro modelo de tracker que no soporte Meshtastic. Por favor `no uses NRF-OTA` para actualizar el firmware, puede causar que el dispositivo quede completamente inutilizado.
:::
#### Paso 1: Entrar al modo DFU

<Tabs>
<TabItem value="method1" label="Método 1">

Visita [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Conecta el dispositivo a tu PC, selecciona el dispositivo como `Seeed Card Tracker T1000-E` y elige el firmware más reciente, luego haz clic en `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-2.png" alt="pir" width={800} height="auto" /></p>

Haz clic en `Enter DFU Mode`, aparecerá un puerto serie llamado `T1000-E xxx`, haz clic y conéctalo, el LED verde se mantendrá encendido, y debería aparecer un controlador llamado `T1000-E`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-serial.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="method2" label="Método 2">

Conecta el cable USB a tu PC, mantén presionado el botón del dispositivo, luego conecta **rápidamente** el cable de carga dos veces, el LED verde se mantendrá encendido, y debería aparecer un controlador llamado `T1000-E`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={800} height="auto" /></p>

#### Paso 2: Borrado de Flash

:::caution note
¡Antes de flashear el firmware, por favor flashea primero el firmware de borrado!
:::

Haz clic en el símbolo de `papelera`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase1.png" alt="pir" width={800} height="auto" /></p>

Descarga el firmware de borrado y cópialo al controlador.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase-uf2.png" alt="pir" width={800} height="auto" /></p>

Este proceso puede tomar algún tiempo, espera a que la unidad desaparezca, luego abre un monitor serie para completar el proceso de borrado.

#### Paso 3: Flashear Firmware

Selecciona el firmware más reciente y descarga el archivo `UF2`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/down-uf2.png" alt="pir" width={800} height="auto" /></p>

Copia el archivo UF2 a la unidad DFU. El firmware debería ser flasheado después de que el archivo se descargue y el dispositivo se reinicie.

## FAQ

### Cómo verificar el nombre del dispositivo

 Visita [Meshtastic Web Flasher](https://flasher.meshtastic.org/).<br/>

 Haz clic en `Open Serial Monitor`, conecta el dispositivo a tu PC, verifica el registro serie, palabra clave `using nodenum`.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name3.png" alt="pir" width={800} height="auto" /></p>

### Cómo reiniciar el dispositivo

 Mantén presionado el botón, luego conecta el cable de carga.

## Solución de Problemas

### El dispositivo nunca se enciende

- Carga el dispositivo durante 1~2 horas

- Cambia el cable de carga

- A veces parece que está apagado, pero en realidad es porque el LED y el zumbador no han sido activados. Verifica los siguientes parámetros: 

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/LEDLightEnable.png" alt="pir" width={800} height="auto" /></p>

 - Si aún no tienes suerte, mantén presionado el botón del dispositivo, luego conecta el cable de carga, verifica si aparece un disco en tu PC. Si es así, [haz clic aquí](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#dispositivo-bloqueado) para reinstalar el bootloader

### Dispositivo atascado en bucle de arranque

**Descripción:**

El dispositivo se reiniciará repetidamente, y el puerto serie se conecta y desconecta repetidamente.

**Solución:**

- Paso 1: Intenta entrar al modo DFU manualmente: mantén presionado el botón del dispositivo, luego conecta **rápidamente** el cable de carga dos veces, el LED verde se mantendrá encendido.

:::note
Para entrar exitosamente al modo DFU, necesitas realizar esta operación rápidamente. Puede que necesites intentar múltiples veces.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- Paso 2: [Borrar Flash](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#paso-2-borrado-de-flash).

- Paso 3: [Flashear Firmware](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#paso-3-flashear-firmware).

### Dispositivo bloqueado

#### Descripción

El dispositivo no responde, no hay LED, no se puede emparejar con tu App.

**1) El dispositivo aún puede entrar al modo DFU, entonces intenta flashear el bootloader**.

#### Flashear el Bootloader

- [Descarga del bootloader](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash%20bootloader.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::danger note
Cuando estés flasheando el bootloader, por favor asegúrate de que la conexión del cable sea estable y **NO** lo desconectes durante el proceso de flasheo.
:::

**Paso1: Instalación de Adafruit-nrfutil**

**Prerrequisitos**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

<Tabs>
<TabItem value="pypi" label="Instalando desde PyPI">

Este es el método recomendado, para instalar la versión más reciente:

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

**Paso3: Flashear el bootloader**

En la terminal o símbolo del sistema, navega al directorio donde descargaste el paquete zip del bootloader y ejecuta el siguiente comando, reemplazando el puerto correcto para tu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```

- **Para otros**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

Cuando hayas completado los pasos anteriores, entonces puedes seguir este [paso](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#flashear-el-firmware-de-aplicación) para flashear el firmware de aplicación.

**2) El dispositivo no puede entrar al modo DFU, pero el puerto serie puede ser detectado**.

- Abre una herramienta de puerto serie

- Establece la velocidad de baudios a `1200`.

- Conecta el dispositivo.
   La luz parpadeará brevemente cuando lo conectes. Sigue intentando esto hasta que la luz se mantenga encendida, significa que el dispositivo puede volver al modo DFU, entonces [flashea bootloader](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#flashear-el-bootloader) -> [Borrar flash](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#paso-2-borrado-de-flash) -> [flashear el firmware](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#paso-3-flashear-firmware).

<div class="video-container">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/reset%20via%20serial%20tool.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**3) El dispositivo no puede entrar al modo DFU y no se muestra puerto serie**

- mantén presionado el botón del dispositivo, luego conecta el cable de carga. Después de que aparezca un disco en tu PC, puede que veas el puerto serie.

- Si aún no tienes suerte, por favor desconecta el cable de carga y deja el dispositivo por unos días hasta que la batería se agote completamente, luego conecta el cable de carga e intenta emparejarlo nuevamente.

**4) Si ninguno de los pasos anteriores funciona, por favor contacta al soporte técnico: support@sensecapmx.com**

### Falló el flasheo del firmware

- **No se recibieron datos en el puerto serie**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 Verifica si el dispositivo está en modo DFU, la luz verde se mantendrá encendida cuando el dispositivo esté en modo DFU.

- **No se puede abrir el puerto serie**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 Verifica si el puerto es correcto, o prueba con otro puerto.

 ### El dispositivo se apaga automáticamente

 #### Descripción

 - Después de encender el dispositivo, se apagará o reiniciará automáticamente después de un tiempo.
 - El registro del puerto serie funcionó por un tiempo y luego se detuvo.

 Esto posiblemente es causado por reiniciar o apagar manualmente y forzadamente el dispositivo cuando el dispositivo está en los siguientes estados: no terminando el proceso de transmisión de mensajes, siendo configurado......

 #### Solución de problemas

 [Haz clic aquí](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#step-2-flash-erase) para realizar un borrado de flash.

 ### Restablecimiento de fábrica
Si quieres restaurar la configuración predeterminada, puedes hacer el restablecimiento de fábrica. Hay dos métodos para hacer el restablecimiento de fábrica.

- [Haz clic aquí](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#step-2-flash-erase) para borrar el flash del dispositivo. Y luego vuelve a flashear el firmware más reciente.

- Haz clic en el botón `Factory Reset` en la App. El dispositivo se reiniciará con la configuración de fábrica automáticamente.
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### Calidad de la señal

  - **SNR** refleja la calidad del enlace de comunicación. El dispositivo normal generalmente opera por encima de -7 dB. Un dispositivo con un SNR inferior a -10 dB indica un rendimiento deficiente.

  - **RSSI** está determinado conjuntamente por el dispositivo y su entorno circundante. El dispositivo normal generalmente opera por encima de -110 dBm. Un dispositivo con un RSSI inferior a -115 dBm se considera que tiene un rendimiento deficiente.

      Para lograr el mejor efecto de señal, por favor usa el dispositivo en un área abierta y sin obstrucciones con interferencia mínima.

## Recursos

- [Documentación de Meshtastic](https://meshtastic.org/docs/introduction/)
- [Hoja de datos del SenseCAP T1000 Tracker](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker_T1000_Datasheet.pdf)


## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
