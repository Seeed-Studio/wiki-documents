---
description: Flasheo de Firmware del Kit Wio Tracker Meshtastic®
title:  Flashear Firmware
keywords:
- Meshtastic
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/flash_meshtastic_kit
last_update:
  date: 12/3/2025
  author: Michelle Huang
---
:::danger note
Cuando el dispositivo esté en los estados siguientes, por favor no lo reinicies manualmente ni lo apagues. De lo contrario, el dispositivo puede quedar inutilizado.
1. No haber terminado el proceso de transmisión de mensajes
2. Estar siendo configurado
:::
Este tutorial guiará a los usuarios para flashear la [Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) a la versión Meshtastic, para aquellos que quieran usar la red Meshtastic.

:::tip
Si quieres flashear la placa de vuelta a la versión LoRaWAN, por favor revisa este [tutorial](https://wiki.seeedstudio.com/es/flash_to_wio_tracker/). Por favor `no uses NRF-OTA` para actualizar el firmware, puede causar que el dispositivo quede completamente inutilizado.
:::

### Preparación

- Wio Tracker 1110 Board x 1
- Computadora x 1
- Cable USB Type-C x 1

### Cableado

Conecta la Dev Board a tu PC mediante el cable USB.

### Flashear el bootloader

<Tabs>
<TabItem value="uf2" label="UF2">

- [Descarga del Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/respeaker/update-wio_tracker_1110_bootloader-0.9.1_nosd.uf2)

Haz doble clic en el botón `Reset`, debería aparecer una unidad `WM1110_BOOT` en tu PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

Arrastra el archivo `update-wio_tracker_1110_bootloader-0.9.1_nosd.uf2` a la unidad. La descarga se ejecutará automáticamente, luego la unidad se desconectará.

</TabItem>
<TabItem value="serial" label="Serial">

- [Descarga del Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/respeaker/wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip)

**Paso1: Instalación de Adafruit-nrfutil**

**Prerrequisitos**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

Nota: los siguientes comandos usan `python3`, sin embargo si estás en Windows, puede que necesites cambiarlo a `python` ya que la instalación de python 3.x en windows aún usa el nombre python.exe

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

Encontrarás el .exe en `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` (con `.exe` si estás en windows).
Cópialo o muévelo a otro lugar para tu conveniencia, como un directorio en tu %PATH%.

</TabItem>
</Tabs>

**Paso2: Flashear el bootloader**

Haz doble clic en el botón `Reset` en la placa y ejecuta el siguiente comando:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p COMxx -b 115200
```

- **Para otros**:

```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200
```

Reemplaza el puerto serial con el puerto de tu dispositivo. Ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>
</TabItem>
</Tabs>

### Descargar la aplicación

Puedes usar el [Flasher Web de Meshtastic](https://flasher.meshtastic.org/) para descargar y copiar firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flasher.png" alt="pir" width={800} height="auto" /></p>

Selecciona el dispositivo como `Seeed Wio WM1110 Tracker` y el firmware más reciente, y descarga el archivo `UF2`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/download-uf2.png" alt="pir" width={800} height="auto" /></p>

<Tabs>
<TabItem value="uf2" label="UF2">

Haz doble clic en el botón `Reset`, debería aparecer una unidad `WM1110_BOOT` en tu PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

Arrastra el archivo `.uf2` a la unidad. La descarga se ejecutará automáticamente, luego la unidad se desconectará.

:::tip
Solo ignora este mensaje de error, el dispositivo en realidad se ha actualizado exitosamente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/error-prompt.png" alt="pir" width={600} height="auto" /></p>
:::

</TabItem>

<TabItem value="serial" label="Serial">

Haz doble clic en el botón `Reset` en la placa y ejecuta el siguiente comando:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p COMxx -b 115200
```

- **Para otros**:

```
adafruit-nrfutil --verbose dfu serial --package firmware-wio-tracker-wm1110-2.3.14.681ae9d8.zip --port /dev/tty.SLAB_USBtoUART -b 115200
```

Flasheo exitoso:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-flash-done.png" alt="pir" width={800} height="auto" /></p>

</TabItem>
</Tabs>
