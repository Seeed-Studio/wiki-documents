---
description: Comienza con SenseCAP Card Tracker T1000-E para Meshcore. Guía para la instalación del dispositivo, flasheo de firmware y conexión del dispositivo.
title: Comienza con MeshCore en SenseCAP T1000-E
keywords:
  - Tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/DeviceSelection.webp
slug: /sensecap_t1000_e_meshcore
sku: 114993369
sidebar_position: 3
last_update:
  date: 3/11/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/sensecap_t1000_e_meshcore/
---



## Flasheo de firmware

### Método 1 mediante Web Flasher

Conecta tu dispositivo al ordenador con un cable USB. 

:::warning
Mantén el cable USB conectado durante la transmisión de datos, de lo contrario el dispositivo puede dañarse.
:::

Ve a [Meshcore Web Flasher](https://flasher.meshcore.co.uk/). 

Elige `Seeed Studio SenseCAP T1000-E` en el grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

Elige `Companion Bluetooth`. Los dispositivos flasheados con el firmware Companion Bluetooth se pueden conectar a la APP. Si quieres flashear otro firmware, por favor [click here](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md) para ver el tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Borrado de la Flash

Haz clic en `Enter DFU Mode`, elige el puerto serie llamado "nRF xxx" o "TinyUSB" serial. Luego haz clic en `Erase Flash` y elige el puerto serie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/SerialSelection.png" alt="pir" width={800} height="auto" /></p>

Si has hecho clic en `Erase Flash` pero no hay respuesta, haz clic en `Enter DFU` de nuevo y luego haz clic en `Erase Flash` para asegurarte de que has entrado correctamente en DFU.

Si ves "Flashing erase firmware:100%", el dispositivo se ha borrado correctamente.

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### Flashear firmware

Haz clic en `Enter DFU Mode`, elige el puerto serie llamado "nRF xxx" o "TinyUSB" serial. Luego haz clic en `Flash` y elige el puerto serie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/SerialSelection.png" alt="pir" width={800} height="auto" /></p>

Si has hecho clic en `Flash` pero no hay respuesta, haz clic en `Enter DFU` de nuevo y luego haz clic en `Flash` para asegurarte de que has entrado correctamente en DFU.

Cuando la barra de progreso esté completamente llena, indica que el flasheo se ha completado. Entonces el dispositivo se reiniciará automáticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### Método 2 Arrastrar y Soltar

Conecta tu dispositivo al ordenador con un cable USB.

:::warning
Mantén el cable USB conectado durante la transmisión de datos, de lo contrario el dispositivo puede dañarse.
:::

Ve a [Meshcore Web Flasher](https://flasher.meshcore.co.uk/). 

Elige `Seeed Studio Wio Tracker T1000-E` en el grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

Elige `Companion Bluetooth`. Los dispositivos flasheados con el firmware Companion Bluetooth se pueden conectar a la APP. Si quieres flashear otro firmware, por favor [click here](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md) para ver el tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Borrado de la Flash

Descarga el archivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

Entra en modo DFU manualmente: mantén pulsado el botón del dispositivo y luego conecta **rápidamente** el cable de carga dos veces, el LED verde se quedará encendido fijo.

:::warning
Para entrar correctamente en modo DFU, necesitas realizar esta operación rápidamente. Puede que tengas que intentarlo varias veces.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

Verás que aparece un disco llamado `T1000-E` después de 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/T1000-EDriver.png" alt="pir" width={800} height="auto" /></p>

Arrastra el archivo UF2 descargado al disco que aparece.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/EraseDrag.png" alt="pir" width={800} height="auto" /></p>

El disco desaparecerá después de que el firmware se haya flasheado correctamente. En este punto no hay firmware en el dispositivo, por lo que el dispositivo `NO` se reiniciará automáticamente.

#### Flashear firmware

Elige la versión de firmware más reciente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/VersionSelection.png" alt="pir" width={800} height="auto" /></p>

Descarga el archivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FirmwareUF2.png" alt="pir" width={800} height="auto" /></p>

Intenta entrar en modo DFU manualmente: mantén pulsado el botón del dispositivo y luego conecta **rápidamente** el cable de carga dos veces, el LED verde se quedará encendido fijo.

:::warning
Para entrar correctamente en modo DFU, necesitas realizar esta operación rápidamente. Puede que tengas que intentarlo varias veces.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

Verás que aparece un disco llamado `T1000-E` después de 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/T1000-EDriver.png" alt="pir" width={800} height="auto" /></p>

Arrastra el archivo UF2 descargado al disco que aparece.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FirmwareDr.png" alt="pir" width={800} height="auto" /></p>

El disco desaparecerá después de que el firmware se haya flasheado correctamente. En este punto ya hay firmware en el dispositivo, por lo que el dispositivo se reiniciará automáticamente.

## Configuración

### Encender el dispositivo

Pulsa el botón para encenderlo. El LED se encenderá y sonará una melodía descendente.

### Apagar el dispositivo

Mantén pulsado el botón durante 3 s para apagarlo. El LED se apagará y sonará una melodía descendente.

:::tip
Si el dispositivo no responde cuando pulsas el botón, por favor cárgalo primero. No utilices un cargador de carga rápida.
:::

### Obtener la APP

Descárgala desde Google Store o Apple Store. O [click here](https://meshcore.co.uk/apps.html) para obtener la APP de Meshcore.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

### Conectar mediante la App

Haz clic en `Connect` y elige el dispositivo de destino. El ID de dispositivo predeterminado es `Meshcore-MAC Address`. La dirección MAC se puede ver en la parte posterior del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

Introduce el código PIN predeterminado `123456` y luego haz clic en `Pair` para conectar el dispositivo.

:::tip
Si la conexión falla, abre la lista de Bluetooth de tu teléfono y `forget` o `Unpair` el dispositivo. Luego intenta reconectar de nuevo.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### Conectar mediante la interfaz web（BLE）

1. Abre la [MeshCore Web App](https://app.meshcore.nz/) y haz clic en el icono **Settings**.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue1.png" alt="pir" width={600} height="auto" /></p>

2. Selecciona la pestaña **BLE** y luego haz clic en **Scan Now**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue2.png" alt="pir" width={600} height="auto" /></p>

3. En la ventana emergente de Bluetooth del sistema, selecciona tu dispositivo (por ejemplo, Meshcore-xxxxxx) y haz clic en **Pair**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue3.png" alt="pir" width={600} height="auto" /></p>

4. Cuando se te solicite, introduce la clave de acceso Bluetooth predeterminada `123456` y luego haz clic en **OK**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue4.png" alt="pir" width={600} height="auto" /></p>

5. Espera hasta que el estado cambie a conectado y tu nodo aparezca en la interfaz de MeshCore.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue5.png" alt="pir" width={600} height="auto" /></p>

### Configurar LoRa

Para empezar a comunicarte a través de la malla, debes establecer tu región. Esta configuración controla qué rango de frecuencias utiliza tu dispositivo y debe ajustarse de acuerdo con tu ubicación regional.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

Luego reinicia el dispositivo, de lo contrario la configuración no surtirá efecto.

**Lista de regiones**

|**Código de región**|**Descripción**|**Rango de frecuencia (MHz)**|**Ciclo de trabajo (%)**|**Límite de potencia (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Sin configurar|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|Unión Europea 868 MHz|869.4 - 869.65|10|27|

Ahora que has configurado la región LoRa en tu dispositivo, puedes continuar configurando cualquier [parámetro LoRa](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-general) para adaptarlo a tus necesidades.

### Configurar el GPS

Si quieres usar GPS, por favor actívalo.

Puedes ir a `Position Settings` en la APP para activar el GPS. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/GPSConfig.png" alt="pir" width={300} height="auto" /></p>

### Botón

|Acción del botón|Descripción|
|--|--|
|Pulsar durante 3 s|Encender/apagar|
|Doble clic|difundir anuncio|
|Triple clic|Interruptor del zumbador|
|Cuádruple clic|Interruptor del GPS|

## Transmisión de mensajes

Si tienes dos dispositivos compatibles y no hay muchos usuarios de MeshCore cerca de ti, flashea ambos con el firmware BLE Companion para que puedas usar tus dispositivos para comunicarte con tus amigos y familiares cercanos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/MeshcoreFramework.png" alt="pir" width={900} height="auto" /></p>

### Anuncio

MeshCore te permite difundir manualmente tu nombre, posición y clave pública de cifrado, que también se firma para evitar suplantaciones. Cuando haces clic en el botón de anuncio, difunde esos datos por LoRa. MeshCore llama a eso un Anuncio. Hay dos formas de anunciar, "salto cero" y "inundación".

- **Salto cero** significa que tu anuncio se difunde a cualquiera que pueda oírlo, y eso es todo.
- **Inundado** significa que se difunde y luego se repite por todos los repetidores que lo oyen.

Puedes enviar anuncios en la APP. También puedes enviar anuncios directamente en la página de anuncios del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/Advert.png" alt="pir" width={300} height="auto" /></p>

### Mensaje público

Después de configurar LoRa, puedes enviar mensajes en el canal principal. Todas las personas cercanas en la misma banda de frecuencia lo oirán.


### Mensaje privado

Los dos dispositivos solo establecen una conexión cuando ambos han recibido el anuncio del otro.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Preguntas frecuentes

### Cómo reiniciar el dispositivo

 Presiona y mantén pulsado el botón y luego conecta el cable de carga.

## Solución de problemas

### El dispositivo nunca se enciende

- Carga el dispositivo durante 1~2 horas

- Cambia el cable de carga

 - Si aún no tienes suerte, mantén pulsado el botón del dispositivo y luego conecta el cable de carga, mira si aparece o no un disco en tu PC. Si es así, [haz clic aquí](https://wiki.seeedstudio.com/es/sensecap_t1000_e_meshcore/#flash-the-bootloader) para volver a instalar el bootloader.

### El dispositivo se queda atascado en un bucle de arranque

**Descripción:**

El dispositivo se reiniciará repetidamente y el puerto serie se conectará y desconectará repetidamente.

**Solución:**

- Paso 1: Intenta entrar en el modo DFU manualmente: mantén pulsado el botón del dispositivo y luego conecta **rápidamente** el cable de carga dos veces, el LED verde se quedará encendido fijo.

:::note
Para entrar correctamente en el modo DFU, debes realizar esta operación rápidamente. Es posible que necesites intentarlo varias veces.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- Paso 2: Borrar la Flash

- Paso 3: Flashear el firmware

### Dispositivo bloqueado (bricked)

#### Descripción

El dispositivo no responde, no hay LED, no se puede emparejar con tu App.

**1) El dispositivo aún puede entrar en modo DFU, entonces intenta flashear el bootloader**.

#### Flashear el bootloader

- [Descarga del bootloader](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash%20bootloader.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::danger note
Cuando estés flasheando el bootloader, asegúrate de que la conexión del cable sea estable y **NO** lo desconectes durante el proceso de flasheo.
:::

**Paso 1: Instalación de Adafruit-nrfutil**

Para usuarios de Windows, presiona la tecla "Win" y la tecla "r", luego introduce "cmd" en la ventana emergente y pulsa "Enter". Esto puede abrir la línea de comandos. 

Para usuarios de MAC, presiona la tecla "Command" y la tecla "Space", para que puedas abrir Spotlight. Luego introduce "termial" y pulsa "Return". Esto puede abrir la línea de comandos. 

**Requisitos previos**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

Comprueba en tu línea de comandos si python y pip se han instalado correctamente.

```
python --version
```

```
python -m pip --version
```

Entonces deberían aparecer "Python xxx" y "pip xxx". Si no es así, intenta instalar python de nuevo.

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

Para usuarios de Windows, es posible que tengas que añadir la ruta manualmente. Copia la ubicación de instalación mostrada en el último paso. Luego añádela como se indica a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>


</TabItem>

<TabItem value="sou" label="Instalación desde el código fuente">

Utiliza este método si tienes problemas instalando con PyPi o si quieres modificar la herramienta. Primero clona este repositorio y entra en su carpeta.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Nota: los siguientes comandos usan `python3`, sin embargo, si estás en Windows, puede que necesites cambiarlo a `python` ya que la instalación de python 3.x en Windows sigue usando el nombre python.exe

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

Encontrarás el .exe en `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` (con `.exe` si estás en Windows).
Cópialo o muévelo a otro lugar para tu comodidad, como un directorio en tu %PATH%.

</TabItem>
</Tabs>

**Paso 2: Comprueba tu número de puerto**

Conecta tu dispositivo a tu PC y comprueba el número de puerto.

Para usuarios de Windows, por ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

Para usuarios de Mac, por ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**Paso 3: Flashear el bootloader**

En la terminal o símbolo del sistema, navega hasta el directorio donde descargaste el paquete zip del bootloader y ejecuta el siguiente comando, sustituyendo el puerto correcto para tu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```
Cambia COMXX por tu número de puerto COM. Por ejemplo, si tu dispositivo está en el com6, cambia el comando a:

`adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 Algunos dispositivos cambiarán su número de puerto después de introducir este comando. Así que si la instalación falla, comprueba de nuevo el número de puerto.

- **Para otros**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

Cuando hayas completado los pasos anteriores, entonces [haz clic aquí](https://wiki.seeedstudio.com/es/sensecap_t1000_e_meshcore/#firmware-flashing) para flashear el firmware de la aplicación.

**2) El dispositivo no puede entrar en modo DFU, pero se puede detectar el puerto serie**.

- Abre una herramienta de puerto serie

- Ajusta la velocidad en baudios a `1200`.

- Conecta el dispositivo.
   La luz parpadeará brevemente cuando lo conectes. Sigue intentándolo hasta que la luz permanezca encendida, lo que significa que el dispositivo puede volver al modo DFU, luego flashea el [bootloader](https://wiki.seeedstudio.com/es/sensecap_t1000_e_meshcore/#flash-the-bootloader)-> [Borrar la flash](https://wiki.seeedstudio.com/es/sensecap_t1000_e_meshcore/#flash-erase) -> [flashear el firmware](https://wiki.seeedstudio.com/es/sensecap_t1000_e_meshcore/#flash-firmware)

**3) El dispositivo no puede entrar en modo DFU y no se muestra ningún puerto serie**

- Mantén pulsado el botón del dispositivo y luego conecta el cable de carga. Después de que aparezca un disco en tu PC, es posible que veas el puerto serie.

- Si aún no tienes suerte, desconecta el cable de carga y deja el dispositivo unos días hasta que la batería se agote por completo, luego conecta el cable de carga e intenta emparejarlo de nuevo.

**4) Si ninguno de los pasos anteriores funciona, ponte en contacto con el soporte técnico: support@sensecapmx.com**

### Fallo al flashear el firmware

- **No se reciben datos en el puerto serie**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 Comprueba si el dispositivo está en modo DFU, la luz verde permanecerá encendida cuando el dispositivo esté en modo DFU.

- **No se puede abrir el puerto serie**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 Comprueba si el puerto es correcto o prueba con otro puerto.

 ### El dispositivo se apaga automáticamente

 #### Descripción

 - Después de encender el dispositivo, se apagará o reiniciará automáticamente después de un tiempo. 
 - El registro del puerto serie funcionó durante un tiempo y luego se detuvo.

 Esto posiblemente se deba a reiniciar o apagar el dispositivo de forma manual y forzada cuando el dispositivo se encuentra en los siguientes estados: sin haber terminado el proceso de transmisión de mensajes, estando en configuración......

 #### Solución de problemas

Realiza un [flash-erase](https://wiki.seeedstudio.com/es/sensecap_t1000_e_meshcore/#flash-erase). 

 ### Restablecimiento de fábrica
Si deseas restaurar la configuración predeterminada, puedes hacer el restablecimiento de fábrica. Hay dos métodos para que realices el restablecimiento de fábrica.

- [Flash erase](https://wiki.seeedstudio.com/es/sensecap_t1000_e_meshcore/#flash-erase) del dispositivo. Luego vuelve a grabar el firmware más reciente.

- Haz clic en el botón `Factory Reset` en la App. El dispositivo se reiniciará automáticamente con la configuración de fábrica. 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/Reset.png" alt="pir" width={400} height="auto" /></p>

### Calidad de la señal

  - **SNR** refleja la calidad del enlace de comunicación. Un dispositivo normal suele funcionar por encima de -7 dB. Un dispositivo con un SNR inferior a -10 dB indica un rendimiento deficiente.

  - **RSSI** está determinado conjuntamente por el dispositivo y su entorno. Un dispositivo normal suele funcionar por encima de -110 dBm. Se considera que un dispositivo con un RSSI inferior a -115 dBm tiene un rendimiento deficiente. 

      Para lograr el mejor efecto de señal, utiliza el dispositivo en un área abierta y sin obstrucciones, con una interferencia mínima.

### Definición de Pogo Pin

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/PogoPin4.png" alt="pir" width={900} height="auto" /></p>

## Recursos

- [Hoja de datos del rastreador SenseCAP T1000](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker_T1000_Datasheet.pdf)
- [T1000-E para prueba de consumo de Meshtastic y cálculo de vida útil de la batería](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/T1000-E%20for%20Meshtastic%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
- [UN38.3](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/UN38.3.zip)

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
