---
description: Primeros pasos con SenseCAP Card Tracker T1000-E para Meshtastic
title: Primeros pasos con el rastreador T1000-E
keywords:
  - Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecap_t1000_e
sku: 114993369
sidebar_position: 2
last_update:
  date: 3/11/2026
  author: Michelle Huang
createdAt: '2024-07-24'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/es/sensecap_t1000_e/
---
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

:::danger note
Cuando el dispositivo se encuentre en los siguientes estados, no lo reinicies ni lo apagues manualmente. De lo contrario, el dispositivo puede quedar inservible.
1. No ha terminado el proceso de transmisión de mensajes
2. Está siendo configurado
:::
## Tutorial en video

### Parte 1: Configuración inicial tras el unboxing

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/9sCHpWPSPcw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Parte 2: Indicadores de estado

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/8p34S_9DDEQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Parte 3: Flashear nuevo firmware

:::caution note
Antes de flashear el firmware, asegúrate de que has comprado el `T1000-E for Meshtastic`. No flashees el firmware en otros modelos de rastreador que no admitan Meshtastic. Por favor, `don't use NRF-OTA` para actualizar el firmware, ya que puede hacer que el dispositivo quede completamente inservible.
:::

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/li6DTOeXK3M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Parte 4: Instrucciones de resolución de problemas

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/iWahTuXwYnU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Primeros pasos

Descarga la app `Meshtastic`:

- [IOS App](https://meshtastic.org/docs/category/apple-apps/)
- [Android App](https://meshtastic.org/docs/category/android-app/)

### Encender el dispositivo

Pulsa una vez para encender el dispositivo, sonará una melodía ascendente y el LED permanecerá encendido durante aproximadamente 1 s.

:::tip
Si el dispositivo no responde cuando presionas el botón, cárgalo primero. No utilices un cargador de carga rápida.
:::

### Conectar mediante la App

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

- Selecciona el dispositivo de destino en el panel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Introduce el código (el código predeterminado es `123456`) y haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- Haz clic en `+` y elige el dispositivo de destino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- Introduce el código (el código predeterminado es `123456`) y haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Conectar mediante la página web

Si quieres enviar mensajes de texto y comunicarte con otros nodos en la página web, ahora puedes conectar el dispositivo al [sitio web de Meshtastic](https://client.meshtastic.org/messages/broadcast/0). 

  Paso 1: Abre la página web

[Haz clic aquí](https://client.meshtastic.org/messages/broadcast/0) para ir al sitio web. 
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  Paso 2: Añadir el nuevo dispositivo 

    Haz clic en "+ New Connection". 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    Hay dos formas de conectar. Puedes elegir el método que prefieras.

 Método 1: Mediante Bluetooth

    Elige el método bluetooth. Selecciona el ID del dispositivo en la ventana emergente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 Método 2: Mediante Serial

    Elige el método serial. Abre el administrador de dispositivos para ver en qué puerto está conectado el dispositivo. Selecciona ese puerto en la ventana emergente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    Tu dispositivo se mostrará en la lista. Haz clic para conectar. Si la conexión tiene éxito, podrás ver el estado del dispositivo directamente en la página web.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### Configurar el LoRa

Para empezar a comunicarte a través de la malla, debes establecer tu región. Esta configuración controla qué rango de frecuencias usa tu dispositivo y debe ajustarse según tu ubicación regional.

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**Lista de regiones**

|**Código de región**|**Descripción**|**Rango de frecuencia (MHz)**|**Ciclo de trabajo (%)**|**Límite de potencia (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Sin configurar|N/D|N/D|N/D|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|Unión Europea 868MHz|869.4 - 869.65|10|27|

Consulta [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para obtener una lista más completa.

:::info
**EU_868** debe cumplir una limitación de ciclo de trabajo por hora del 10 %, calculada cada minuto sobre una base móvil de 1 hora. Tu dispositivo dejará de transmitir si alcanzas este límite, hasta que se le permita hacerlo de nuevo.
:::

Ahora que has configurado la región LoRa en tu dispositivo, puedes continuar configurando cualquier [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) según tus necesidades.

### Configurar sensor

|Sensor|Descripción|
|-|-|
|Temperature|✅|
|Luz|Actualmente no está soportado por la App|
|Acelerómetro|Próximamente|

**Configuración del sensor de temperatura**

<Tabs>
<TabItem value="ios" label="IOS App">

Ve a `Settings` -> `Telemetry(Sensors)` -> Enable sensors.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-ios.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

Ve a `Settings` -> `Telemetry(Sensors)` -> Enable sensors.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

**Configuración del zumbador y LED**

||Tipo|PIN de salida|
|-|-|-|
|Zumbador|Zumbador PWM|25|
|LED|-|24|

<Tabs>
<TabItem value="ios" label="IOS App">

Ve a `Settings` -> `External Notification` -> Enable `GPIO` -> Set `Output Pin GPIO`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-en.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

Ve a `Settings` -> `External Notification` -> Enable `GPIO` -> Set `Output Pin GPIO`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

Consulta [External Notification Config](https://meshtastic.org/docs/configuration/module/external-notification/) para más detalles.

:::tip
Después de actualizar la configuración del dispositivo, este se reiniciará, lo cual puede llevar algo de tiempo.
:::

### Configurar tono de llamada

Ve a `Settings` -> `Ringtone Config`, luego introduce la cadena RTTTL del tono de llamada que quieras usar para las notificaciones externas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/T1000E20260410.png" alt="pir" width={500} height="auto" /></p>

Puedes pegar directamente uno de los siguientes ejemplos RTTTL:

**The Legend of Zelda: Item Get**

```plain
24:d=16,o=5,b=120:g,c6,d6,2g6
```

**Super Mario Theme (Corto)**

```plain
24:d=4,o=5,b=100:16e6,16e6,32p,8e6,16c6,8e6,8g6,8p,8g
```

**Moneda de Mario**

```plain
24:d=8,o=6,b=200:b,e7
```

**Power-Up de Mario**

```plain
powerup:d=16,o=5,b=200:g,a,b,c6,d6,e6,f#6,g6,a6,b6,2c7
```

**Tono de Nokia**

```plain
24:d=4,o=5,b=180:8e6,8d6,f#,g#,8c#6,8b,d,e,8b,8a,c#,e,2a
```

**Código Morse CQ**

```plain
24:d=16,o=6,b=120:8c,p,c,p,8c,p,c,4p,8c,p,8c,p,c,p,8c,8p
```

**Video de demostración**

<div class="video-container">
<video width="100%" height="500" controls>
  <source src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/08242BD2-2694-4E8E-8190-8EB6806319B6.MOV" type="video/mp4" />
</video>
</div>

### Configurar GPS

Activa la opción de GPS. Puedes ajustar el intervalo de actualización y el intervalo de difusión para obtener información de ubicación más actualizada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

En IOS, activa `Accurate Location`. De lo contrario, el posicionamiento puede desviarse.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

## Flashear firmware

### Comprobar la versión de firmware

Ve a `Settings` -> `Firmware Updates` y comprueba la versión actual del firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/check-version.png" alt="pir" width={400} height="auto" /></p>

### <div class="danger">⚠️NO FLASHE EL SIGUIENTE FIRMWARE</div>

:::danger
NO FLASHE OTRO FIRMWARE DISTINTO AL FIRMWARE T1000-E, ESTO PUEDE HACER QUE EL DISPOSITIVO SE CONGELE.
:::

El siguiente firmware bloqueará su dispositivo:

- nrf52_promicro_diy_tcxo<br/>
- nrf52_promicro_diy_xtal<br/>
- Dongle_nRF52840-pca10059-v1<br/>
- feather_diy<br/>
- TWC_mesh_v4<br/>
- wio-sdk-wm1110<br/>
- wio-tracker-wm1110<br/>
- xiao_ble

### Flashear el firmware de la aplicación

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Flash%20Firmware.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
:::caution note
Antes de flashear el firmware, asegúrese de que compró el `T1000-E for Meshtastic`. No flashee el firmware en otro modelo de rastreador que no sea compatible con Meshtastic. Por favor `don't use NRF-OTA` para actualizar el firmware, puede hacer que el dispositivo quede completamente inutilizado.
:::
#### Paso 1: Entrar en modo DFU

<Tabs>
<TabItem value="method1" label="Method 1">

Visite [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Conecte el dispositivo a su PC, seleccione el dispositivo como `Seeed Card Tracker T1000-E` y elija el firmware más reciente, luego haga clic en `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-2.png" alt="pir" width={800} height="auto" /></p>

Haga clic en `Enter DFU Mode`, aparecerá un puerto serie llamado `T1000-E xxx`, haga clic y conéctelo, el LED verde quedará fijo y debería aparecer una unidad llamada `T1000-E`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-serial.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="method2" label="Method 2">

Conecte el cable USB a su PC, mantenga presionado el botón del dispositivo y luego conecte **rápidamente** el cable de carga dos veces; el LED verde quedará fijo y debería aparecer una unidad llamada `T1000-E`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={800} height="auto" /></p>

#### Paso 2: Borrado de la memoria Flash

:::caution note
Antes de flashear el firmware, ¡flashee primero el firmware de borrado!
:::

Haga clic en el símbolo de `trash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase1.png" alt="pir" width={800} height="auto" /></p>

Descargue el firmware de borrado y cópielo en la unidad.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase-uf2.png" alt="pir" width={800} height="auto" /></p>

Este proceso puede llevar algún tiempo; espere a que la unidad desaparezca y luego abra un monitor serie para completar el proceso de borrado.

#### Paso 3: Flashear el firmware

Seleccione el firmware más reciente y descargue el archivo `UF2`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/down-uf2.png" alt="pir" width={800} height="auto" /></p>

Copie el archivo UF2 a la unidad DFU. El firmware debería flashearse después de que el archivo se copie y el dispositivo se reinicie.

## Preguntas frecuentes (FAQ)

### Cómo comprobar el nombre del dispositivo

 Visite [Meshtastic Web Flasher](https://flasher.meshtastic.org/).<br/>

 Haga clic en `Open Serial Monitor`, conecte el dispositivo a su PC y compruebe el registro serie; la palabra clave es `using nodenum`.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name3.png" alt="pir" width={800} height="auto" /></p>

### Cómo reiniciar el dispositivo

 Mantenga presionado el botón y luego conecte el cable de carga.

## Solución de problemas

### El dispositivo nunca se enciende

- Cargue el dispositivo durante 1~2 horas

- Desconecte el cable USB, luego mantenga presionado el botón y vuelva a conectar el cable USB mientras continúa manteniendo presionado el botón durante 5 segundos.

- Cambie el cable de carga

- A veces parece que está apagado, pero en realidad es porque el LED y el zumbador no se han activado. Compruebe los siguientes parámetros: 

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/LEDLightEnable.png" alt="pir" width={800} height="auto" /></p>

 - Si aún no tiene éxito, mantenga presionado el botón del dispositivo y luego conecte el cable de carga para ver si aparece una unidad en su PC. Si es así, [haga clic aquí](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#device-bricked) para reinstalar el bootloader

### El dispositivo se queda atascado en un bucle de arranque

**Descripción:**

El dispositivo se reiniciará repetidamente y el puerto serie se conectará y desconectará repetidamente.

**Solución:**

- Paso 1: Intente entrar en modo DFU manualmente: mantenga presionado el botón del dispositivo y luego conecte **rápidamente** el cable de carga dos veces; el LED verde quedará fijo.

:::note
Para entrar correctamente en el modo DFU, debe realizar esta operación rápidamente. Es posible que deba intentarlo varias veces.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- Paso 2: [Erase Flash](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#step-2-flash-erase).

- Paso 3: [Flash Firmware](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#step-3-flash-firmware).

### Dispositivo bloqueado (bricked)

#### Descripción

El dispositivo no responde, no hay LED y no se puede enlazar con su app.

**1) El dispositivo aún puede entrar en modo DFU, entonces intente flashear el bootloader**.

#### Flashear el bootloader

- [Descarga del bootloader](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash%20bootloader.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::danger note
Cuando esté flasheando el bootloader, asegúrese de que la conexión del cable sea estable y **NO** la desconecte durante el proceso de flasheo.
:::

**Paso 1: Instalación de Adafruit-nrfutil**

Para usuarios de Windows, presione la tecla "Win" y la tecla "R", luego escriba "cmd" en la ventana emergente y pulse "Enter". Esto abrirá la línea de comandos. 

Para usuarios de Mac, presione la tecla "Command" y la tecla "Space" para abrir Spotlight. Luego escriba "terminal" y pulse "Return". Esto abrirá la línea de comandos. 

**Requisitos previos**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

Compruebe en su línea de comandos si Python y pip se han instalado correctamente.

```
python --version
```

```
python -m pip --version
```

Entonces deberían aparecer "Python xxx" y "pip xxx". Si no es así, intente instalar Python de nuevo.

<Tabs>
<TabItem value="pypi" label="Installing from PyPI">

Este es el método recomendado para instalar la versión más reciente:

```
pip3 install --user adafruit-nrfutil
```

Compruebe la ruta de instalación:

```
python -m pip show adafruit-nrfutil
```

Esta es la ubicación de instalación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

Para usuarios de Windows, es posible que deba añadir la ruta manualmente. Copie la ubicación de instalación mostrada en el último paso. Luego añádala como se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>



</TabItem>

<TabItem value="sou" label="Installing from Source">

Use este método si tiene problemas al instalar con PyPi o si desea modificar la herramienta. Primero clone este repositorio y vaya a su carpeta.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Nota: los siguientes comandos usan `python3`, sin embargo, si está en Windows, puede que necesite cambiarlo a `python` ya que la instalación de Windows de Python 3.x sigue usando el nombre python.exe

Para instalar en el espacio de usuario en su directorio personal:

```
pip3 install -r requirements.txt
python3 setup.py install
```

Si obtiene errores de permisos al ejecutar `pip3 install`, su `pip3` es antiguo o está configurado para intentar instalar en los directorios del sistema. En ese caso utilice la opción `--user`:

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

Si desea instalar en los directorios del sistema (generalmente no recomendado):

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

Para generar un binario ejecutable autónomo de la utilidad (Windows y macOS), ejecute estos comandos:

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

Encontrará el .exe en `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` (con `.exe` si está en Windows).
Cópielo o muévalo a otra ubicación para su comodidad, como un directorio en su %PATH%.

</TabItem>
</Tabs>

**Paso 2: Compruebe su número de puerto**

Conecte su dispositivo a su PC y compruebe el número de puerto.

Para usuarios de Windows, abra el administrador de dispositivos y vaya a "port"; el número de puerto que aparece tras la conexión del dispositivo es el número de puerto del dispositivo.

Para usuarios de Mac, por ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

Para usuarios de Windows, por ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

**Paso 3: Flashear el bootloader**

En la terminal o símbolo del sistema, navega al directorio donde descargaste el paquete zip del bootloader y ejecuta el siguiente comando, sustituyendo el puerto correcto para tu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```

Por favor cambia COMXX por el número de tu puerto COM. Por ejemplo, si tu dispositivo está en el com6, cambia el comando a:

`adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 Algunos dispositivos cambiarán su número de puerto después de que introduzcas este comando. Así que si la instalación falla, comprueba de nuevo el número de puerto.

- **Para otros**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

Cuando hayas completado los pasos anteriores, puedes seguir este [paso](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#flash-the-application-firmware) para grabar el firmware de la aplicación.

**2) El dispositivo no puede entrar en modo DFU, pero se puede detectar el puerto serie**.

- Abre una herramienta de puerto serie

- Configura la velocidad en baudios a `1200`.

- Conecta el dispositivo.
   La luz parpadeará brevemente cuando lo conectes. Sigue intentándolo hasta que la luz permanezca encendida, lo que significa que el dispositivo puede volver al modo DFU, luego [graba el bootloader](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#flash-the-bootloader) -> [Borra la memoria flash](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#step-2-flash-erase) -> [graba el firmware](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#step-3-flash-firmware).

<div class="video-container">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/reset%20via%20serial%20tool.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**3) El dispositivo no puede entrar en modo DFU y no aparece ningún puerto serie**

- Mantén pulsado el botón del dispositivo y luego conecta el cable de carga. Después de que aparezca un disco en tu PC, es posible que veas el puerto serie.

- Si aún así no hay suerte, desconecta el cable de carga y deja el dispositivo unos días hasta que la batería se agote por completo, luego conecta el cable de carga e intenta emparejarlo de nuevo.

**4) Si ninguno de los pasos anteriores funciona, por favor contacta con el soporte técnico: support@sensecapmx.com**

### Error al grabar el firmware

- **No se reciben datos en el puerto serie**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 Comprueba si el dispositivo está en modo DFU, la luz verde permanecerá fija cuando el dispositivo esté en modo DFU.

- **No se puede abrir el puerto serie**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 Comprueba si el puerto es correcto o prueba con otro puerto.

 ### El dispositivo se apaga automáticamente

 #### Descripción

 - Después de encender el dispositivo, se apagará o se reiniciará automáticamente al cabo de un rato. 
 - El registro del puerto serie funciona durante un tiempo y luego se detiene.

 Esto puede deberse a que se haya reiniciado o apagado el dispositivo manualmente y a la fuerza cuando el dispositivo se encuentra en los siguientes estados: sin haber terminado el proceso de transmisión de mensajes, estando en configuración......

 #### Solución de problemas

 [Haz clic aquí](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#step-2-flash-erase) para realizar un borrado de la memoria flash. 

 ### Restablecimiento de fábrica
Si deseas restaurar la configuración predeterminada, puedes hacer un restablecimiento de fábrica. Hay dos métodos para que hagas el restablecimiento de fábrica.

- [Haz clic aquí](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#step-2-flash-erase) para borrar la memoria flash del dispositivo. Y luego vuelve a grabar el firmware más reciente.

- Haz clic en el botón `Factory Reset` en la App. El dispositivo se reiniciará automáticamente con la configuración de fábrica. 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### Restablecimiento de NodeDB

NodeDB es la base de datos local que almacena información sobre los nodos descubiertos en la red Mesh actual, incluyendo:

- **ID de nodo**
- **Nombre de usuario**
- **Información de ubicación**
- **Información de señal (SNR)**
- **Hora de la última vez visto**

**Cuándo restablecer**

Restablece NodeDB cuando:

- La lista de nodos contiene entradas obsoletas, duplicadas o no válidas.
- Te trasladas a un entorno Mesh diferente y quieres redescubrir los nodos cercanos.
- La información de los nodos en la app parece incorrecta o incompleta.

:::danger
Restablecer NodeDB solo borra la base de datos de nodos almacenada en el dispositivo. **No realiza un restablecimiento de fábrica** y **no elimina la configuración básica del dispositivo**.
:::

**Restablecer desde la App**

1. Abre la app y conéctate al dispositivo de destino.
2. Ve a **Settings**.
3. Pulsa **Device**.
4. Desplázate hasta la parte inferior de la página **Device Config** y encuentra **Reset NodeDB**.
5. Tócalo y confirma la acción.

**Ruta en la App**

`Settings > Device > Reset NodeDB`

**Pantallas de ejemplo**

Paso 1: Abre **Device** desde la página **Settings**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB3.png" alt="Device entry in Settings" width={300} height="auto" /></p>

Paso 2: Pulsa `Reset NodeDB` en la página **Device Config**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB4.png" alt="Reset NodeDB button in Device Config" width={300} height="auto" /></p>

:::tip
Ten en cuenta la diferencia entre las siguientes opciones:

- **Reset NodeDB**: Solo borra la base de datos de nodos.
- **Factory Reset**: Restaura el dispositivo a la configuración de fábrica y elimina más datos de configuración.
:::

**Qué ocurre después del restablecimiento**

Después de ejecutar **Reset NodeDB**, el dispositivo borra la lista de nodos almacenada actualmente. A medida que el dispositivo siga funcionando, volverá a descubrir y registrar los nodos cercanos.

Puedes observar lo siguiente:

- La lista de nodos puede quedar temporalmente vacía o más pequeña.
- Los nodos reaparecerán gradualmente a medida que el dispositivo siga funcionando.
- Los registros históricos de nodos almacenados anteriormente dejarán de estar disponibles.

**Notas**

- Antes de restablecer, asegúrate de que el problema está realmente relacionado con una lista de nodos anormal.
- Si el problema es solo un retraso en la visualización de los nodos, espera un momento primero para ver si se recupera automáticamente.
- Si el problema persiste después de restablecer NodeDB, continúa solucionando la configuración del dispositivo u otras posibles causas.
- Usa **Factory Reset** con cuidado para evitar eliminar la configuración del dispositivo por accidente.

### Calidad de la señal

  - **SNR** refleja la calidad del enlace de comunicación. Un dispositivo normal suele funcionar por encima de -7 dB. Un dispositivo con un SNR inferior a -10 dB indica un rendimiento deficiente.

  - **RSSI** está determinado conjuntamente por el dispositivo y su entorno. Un dispositivo normal suele funcionar por encima de -110 dBm. Un dispositivo con un RSSI inferior a -115 dBm se considera que tiene un rendimiento deficiente. 

      Para conseguir el mejor efecto de señal, utiliza el dispositivo en una zona abierta y sin obstáculos, con la mínima interferencia posible.

### Definición de los Pogo Pin

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/PogoPin4.png" alt="pir" width={900} height="auto" /></p>

## Recursos

- [Documentación de Meshtastic](https://meshtastic.org/docs/introduction/)
- [Hoja de datos del rastreador SenseCAP T1000](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker_T1000_Datasheet.pdf)
- [UN38.3](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/UN38.3.zip)



## Recursos

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
