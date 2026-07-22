---
description: Comienza con SenseCAP Solar Node para Meshcore y LoRa. Guía para la instalación del dispositivo, flasheo de firmware y conexión del dispositivo.
title: Comienza con MeshCore en SenseCAP Solar Node
keywords:
  - Meshcore
  - Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /get_started_with_meshcore_solar_node
sku: 114993633,114993643
sidebar_position: 1
last_update:
  date: 3/6/2026
  author: Michelle Huang
createdAt: '2025-05-13'
url: https://wiki.seeedstudio.com/es/get_started_with_meshcore_solar_node/
updatedAt: '2026-07-13'
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/image1_2.jpeg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshcore-p-6741.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

<br></br>

:::danger note
Cuando el dispositivo se encuentre en los siguientes estados, no lo reinicies ni lo apagues manualmente. De lo contrario, el dispositivo podría quedar inservible.
1. No ha finalizado el proceso de transmisión de mensajes
2. Está siendo configurado
:::

## Flasheo de firmware

### Método 1 mediante Web Flasher

Conecta tu dispositivo al ordenador con un cable USB. Asegúrate de que el cable admite transmisión de datos. 

:::warning
Mantén el cable USB conectado durante la transmisión de datos, de lo contrario el dispositivo podría dañarse.
:::

Ve a [Meshcore Web Flasher](https://meshcore.io/flasher). 

Elige `Seeed Studio SenseCAP Solar` en el grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

Elige `Repeater`. Si quieres flashear otro firmware, por favor [haz clic aquí](https://docs.meshcore.io/) para ver el tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### Borrado de la Flash

Haz clic en `Enter DFU Mode`, elige el puerto serie llamado "Solar Node" o "TinyUSB serial". Luego haz clic en `Erase Flash` y elige el puerto serie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseSelect.png" alt="pir" width={800} height="auto" /></p>

Si has hecho clic en `Erase Flash` pero no hay respuesta, haz clic en `Enter DFU` de nuevo y luego haz clic en `Erase Flash` para asegurarte de que has entrado correctamente en DFU.

Si ves "Flashing erase firmware:100%", el dispositivo se ha borrado correctamente.

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### Flashear firmware

Selecciona la versión de firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

Haz clic en `Enter DFU Mode`, elige el puerto serie llamado "P1 Pro" o "TinyUSB" serial. Luego haz clic en `Flash` y elige el puerto serie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

Si has hecho clic en `Flash` pero no hay respuesta, haz clic en `Enter DFU` de nuevo y luego haz clic en `Flash` para asegurarte de que has entrado correctamente en DFU.

Cuando la barra de progreso esté completamente llena, indica que el flasheo ha finalizado. Entonces el dispositivo se reiniciará automáticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### Método 2 Arrastrar y Soltar

Conecta tu dispositivo al ordenador con un cable USB. Asegúrate de que el cable admite transmisión de datos. 

:::warning
Mantén el cable USB conectado durante la transmisión de datos, de lo contrario el dispositivo podría dañarse.
:::

Ve a [Meshcore Web Flasher](https://meshcore.io/flasher). 

Elige `Seeed Studio SenseCAP Solar` en el grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

Elige `Repeater`. Si quieres flashear otro firmware, por favor [haz clic aquí](https://docs.meshcore.io/) para ver el tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### Borrado de la Flash

Descarga el archivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseFirmware.png" alt="pir" width={800} height="auto" /></p>

Haz doble clic en el botón RST para entrar manualmente en modo DFU. Verás que aparece un disco llamado `Xiao-Boot` o `Solar Node` después de 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

Arrastra el archivo UF2 descargado al disco que aparece.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseDr.png" alt="pir" width={800} height="auto" /></p>

El disco desaparecerá después de que el firmware se haya flasheado correctamente. En este punto no hay firmware en el dispositivo, por lo que el dispositivo `NOT` se reiniciará automáticamente.

#### Flashear firmware

Elige la última versión de firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

Descarga el archivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FlashFirmware.png" alt="pir" width={800} height="auto" /></p>

Haz doble clic en el botón RST para entrar manualmente en modo DFU. Verás que aparece un disco llamado `Xiao-Boot` o `Solar Node` después de 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

Arrastra el archivo UF2 descargado al disco que aparece.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareDr.png" alt="pir" width={800} height="auto" /></p>

El disco desaparecerá después de que el firmware se haya flasheado correctamente. En este punto no hay firmware en el dispositivo, por lo que el dispositivo NO se reiniciará automáticamente.

## Primeros pasos

Antes del despliegue formal, primero prueba y configura el nodo.

### Instalación

#### Ensamblar el dispositivo

:::danger note
Dado que el dispositivo se utilizará en exteriores durante períodos prolongados, evita instalar el panel en posición horizontal. Se recomienda una instalación inclinada o diagonal para evitar la acumulación de agua. Además, asegúrate de que todos los tornillos estén bien apretados y la tapa esté correctamente instalada. Para una mejor protección impermeable, también puedes considerar aplicar medidas de sellado adicionales.
:::

- **Lista de partes**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>


- Paso 1: Conecta la parte 1 a la parte inferior del dispositivo usando arandelas y tornillos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 2: Conecta la rótula universal (parte 2) y el soporte (parte 3) con tornillos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 3: Conecta el cable RF (parte 4) y la antena (parte 5).

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 4: Instala el aro de sujeción en la posición adecuada.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hoop-ring.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 5: Conecta el soporte de rótula universal.

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



#### Instalar batería y módulo GPS (Opcional)

:::tip
Cuando necesites instalar o reemplazar la batería, usa batería `Button-top` 18650(3.6V).
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-battery.png" alt="pir" width={500} height="auto" /></p>
La versión P1-Pro tiene batería y módulo GPS integrados; para la versión P1, el usuario necesita instalar manualmente la batería y el módulo GPS si es necesario.
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

#### (Opcional) Actualizar antena

- Puedes reemplazar la antena por una de fibra de vidrio viendo este video.

Si necesitas una antena con mayor ganancia, recomendamos la antena [860-930MHz 3dBi fiberglass](https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-with-base-860-930MHz-3dBi-360mm-p-5315.html) y la antena [902-928MHz 5.8dBi fiberglass](https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html).

### Encender el dispositivo

El dispositivo necesita ser activado conectando el cable USB. El LED azul de Mesh se encenderá durante unos 3 s, lo que significa que el dispositivo se ha encendido correctamente. 

El LED azul de mesh no se encenderá hasta que envíe un anuncio.

:::tip
No fue hasta el lanzamiento de la versión 1.14.1 que se habilitó el botón de encendido. Mantén presionado el dispositivo durante `3s` para encender/apagar el dispositivo. Verás una luz blanca parpadear brevemente. Esto indica que el dispositivo se está encendiendo correctamente.
<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/blinkingonetime.mp4" scrolling="yes" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
:::


### Configuración

- **Paso 1 Configuración inicial**

Cuando MeshCore se flashea en un dispositivo LoRa por primera vez, es necesario configurar la frecuencia del dispositivo servidor para que utilice la frecuencia que es legal en tu país o región.

[Click here](https://config.meshcore.io/) para configurar el repetidor.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Cambia la región LoRa y guarda la configuración. Luego `Reboot` el dispositivo, de lo contrario la configuración no surtirá efecto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/LoRaSettingg.png" alt="pir" width={600} height="auto" /></p>

**Lista de regiones**

|**Código de región**|**Descripción**|**Rango de frecuencia (MHz)**|**Ciclo de trabajo (%)**|**Límite de potencia (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Sin configurar|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|Unión Europea 868MHz|869.4 - 869.65|10|27|

:::info
**EU_868** debe cumplir con una limitación de ciclo de trabajo por hora del 10 %, calculada cada minuto sobre una base móvil de 1 hora. Tu dispositivo dejará de transmitir si alcanzas este límite, hasta que se le permita de nuevo.
:::


- **Paso 2 Enviar anuncio**

Haz clic en "send advert" para permitir que otros dispositivos Meshcore vean este repetidor. Entonces el repetidor podrá verse en la lista de dispositivos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertSending.png" alt="pir" width={600} height="auto" /></p>

Después de la configuración de inicialización, haz clic 

- **Paso 3 (Opcional) Inicio de sesión de administrador**

La contraseña de administrador predeterminada de un repetidor es `password`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={600} height="auto" /></p>

Después de iniciar sesión, puedes ver la página de configuración. Ahora puedes ajustar la configuración del repetidor.

Si quieres mostrar la posición del repetidor, puedes habilitar el GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/GPSS.jpg" alt="pir" width={300} height="auto" /></p>

Además, puedes ajustar el intervalo de transmisión de anuncios. El rango de intervalo de `auto zero hop advert` es de 60-240 minutos. El rango de intervalo de `auto flood advert` es de 3-168 horas. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertInterval.jpg" alt="pir" width={300} height="auto" /></p>

### Configurar ruta

Antes de añadir el repetidor a tu ruta, es posible que necesites usar el repetidor para enviar primero un anuncio. El repetidor enviará anuncios automáticamente a intervalos regulares. Este intervalo puede ser de varias horas (por defecto 3 horas). Por lo tanto, necesitas enviar anuncios manualmente o de lo contrario tendrás que esperar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SendAdvert.png" alt="pir" width={600} height="auto" /></p>

Puedes configurar manualmente la ruta de envío de mensajes. Conecta tu dispositivo compañero Bluetooth a la app de tu teléfono. Abre una ventana de mensaje privado. Luego puedes elegir el repetidor detectado para formar tu ruta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SetPath1.png" alt="pir" width={600} height="auto" /></p>

Después de configurar la ruta, el método de transmisión cambiará a "n hop". Por ejemplo, si añades 1 repetidor en tu ruta, cambiará a 1 hop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/1Hop.png" alt="pir" width={300} height="auto" /></p>

## Verificar que el dispositivo funciona correctamente

Antes de la verificación, confirma si estás usando solo un dispositivo Solar Node o si también tienes otros dispositivos MeshCore Companion en tu configuración.

Para el modo Repetidor, se espera el siguiente comportamiento:

- Cuando el dispositivo está conectado por USB, puede aparecer en línea y ser configurado.
- Después de desconectar la alimentación USB, el dispositivo cambia al modo batería y continúa funcionando como repetidor.
- El parpadeo una vez del LED azul durante la transmisión es normal e indica actividad LoRa.
- No se espera que el Solar Node Repeater se comporte como un dispositivo independiente conectado al teléfono, a menos que se use junto con un dispositivo Companion.

Para verificar correctamente que el repetidor está funcionando, sigue este procedimiento de prueba estándar:

1. Conecta el Solar Node mediante USB.
2. Abre la página de configuración de MeshCore: [https://config.meshcore.io/](https://config.meshcore.io/).
3. Haz clic en **Send Advert**.
4. Comprueba desde otro dispositivo MeshCore, como un dispositivo Companion.
5. El Solar Node debería aparecer en la lista de dispositivos.
6. En el dispositivo Companion, abre el contacto del Solar Node Repeater y usa la función **Ping** para confirmar la comunicación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-6.png" alt="Verify Solar Node repeater with Ping from another MeshCore device" width={700} height="auto" /></p>

:::note
La app móvil se usa principalmente con un dispositivo Companion, no directamente con un Repeater. El propio repetidor no se comportará como un accesorio de teléfono conectado por Bluetooth normal.
:::

Si el comportamiento del LED y el estado de conexión USB coinciden con la descripción anterior, esto suele indicar un funcionamiento normal del repetidor.

## Preguntas frecuentes

### Bucle de arranque

- Motivo 

Esto suele deberse a un fallo al flashear el firmware. Al flashear el firmware, mantén una conexión estable. 

- Solución de problemas

[Click here](https://wiki.seeedstudio.com/es/get_started_with_meshcore_solar_node/#flash-erase) para volver a flashear el firmware.

### Dispositivo bloqueado (bricked)

#### Descripción

El dispositivo no responde, no hay LED, no se puede emparejar con tu App.

**1) El dispositivo aún puede entrar en modo DFU, entonces intenta flashear el bootloader**.

#### Flashear el Bootloader

- [Bootloader download](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

:::danger note
Cuando estés flasheando el bootloader, asegúrate de que la conexión del cable sea estable y **NO** la desconectes durante el proceso de flasheo.
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
<TabItem value="pypi" label="Installing from PyPI">

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

Para usuarios de Windows, es posible que necesites añadir la ruta manualmente. Copia la ubicación de instalación mostrada en el último paso. Luego añádela como se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>

<TabItem value="sou" label="Installing from Source">

Usa este método si tienes problemas instalando con PyPi o si quieres modificar la herramienta. Primero clona este repositorio y entra en su carpeta.

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

Si deseas instalar en directorios del sistema (generalmente no recomendado):

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

**Paso 3: Flashea el bootloader**

En la terminal o símbolo del sistema, navega al directorio donde descargaste el paquete zip del bootloader y ejecuta el siguiente comando, sustituyendo el puerto correcto para tu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```
Cambia COMXX por tu número de puerto COM. Por ejemplo, si tu dispositivo está en el puerto COM6, cambia el comando a:

`adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COM6 -b 115200 --singlebank --touch 1200`

 Algunos dispositivos cambiarán su número de puerto después de que introduzcas este comando. Así que si la instalación falla, comprueba de nuevo el número de puerto.


- **Para otros**:

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

Cuando hayas completado los pasos anteriores, entonces podrás [flashear el firmware de la aplicación](https://wiki.seeedstudio.com/es/get_started_with_meshcore_solar_node/#flash-erase).

### Calidad de la señal

- **SNR** refleja la calidad del enlace de comunicación. Un dispositivo normal suele funcionar por encima de -7 dB. Un dispositivo con un SNR inferior a -10 dB indica un rendimiento deficiente.

- **RSSI** está determinado conjuntamente por el dispositivo y su entorno. Un dispositivo normal suele funcionar por encima de -110 dBm. Un dispositivo con un RSSI inferior a -115 dBm se considera que tiene un rendimiento deficiente.

      Para lograr el mejor efecto de señal, utiliza el dispositivo en un área abierta y sin obstáculos, con una interferencia mínima.

### Corriente de carga

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>

La corriente máxima de carga del Xiao nRF-52840 Plus es de 200 mA. El chip de gestión de carga CN3165 es de 0,99 A. Así que la corriente máxima de carga es de 1 A.

## Recursos
- [Tabla de cálculo de la vida útil de la batería del Solar Node](https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/mesh_repeater_power_table_en1.xlsx)
