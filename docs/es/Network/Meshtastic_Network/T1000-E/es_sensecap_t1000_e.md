---
description: Comenzar con SenseCAP Card Tracker T1000-E para Meshtastic
title: Comenzar con T1000-E Tracker
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/sensecap_t1000_e
sidebar_position: 2
last_update:
  date: 7/1/2024
  author: Jessie
---

## Tutorial en Video

### Parte 1: Configuración de Desempaquetado

<iframe width="100%" height="500" src="https://www.youtube.com/embed/9sCHpWPSPcw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Parte 2: Indicadores de Estado

<iframe width="100%" height="500" src="https://www.youtube.com/embed/8p34S_9DDEQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Parte 3: Flashear Nuevo Firmware

<iframe width="100%" height="500" src="https://www.youtube.com/embed/li6DTOeXK3M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Parte 4: Instrucciones de Solución de Problemas

<iframe width="100%" height="500" src="https://www.youtube.com/embed/iWahTuXwYnU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Comenzar

Descargar la aplicación `Meshtastic`:

- [Aplicación IOS](https://meshtastic.org/docs/category/apple-apps/)
- [Aplicación Android](https://meshtastic.org/docs/category/android-app/)

### Encender el dispositivo

Presiona una vez para encender el dispositivo, habrá una melodía ascendente, y la luz LED permanecerá encendida por aproximadamente 1s.

:::tip
Si el dispositivo no responde cuando presionas el botón, por favor cárgalo primero.
:::

### Conectar a través de la Aplicación

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="Aplicación IOS">

- Selecciona el dispositivo objetivo en el panel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Ingresa el código (el código predeterminado es `123456`) y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Aplicación Android">

- Haz clic en `+` y elige el dispositivo objetivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- Ingresa el código (el código predeterminado es `123456`) y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Configurar los Parámetros

Para comenzar a comunicarse a través de la malla, debes establecer tu región. Esta configuración controla qué rango de frecuencia usa tu dispositivo y debe establecerse según tu ubicación regional.

<Tabs>
<TabItem value="ios" label="Aplicación IOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Aplicación Android">
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
**EU_868** debe cumplir con una limitación de ciclo de trabajo por hora del 10%, calculada cada minuto en una base móvil de 1 hora. Tu dispositivo dejará de transmitir si lo alcanzas, hasta que se permita nuevamente.
:::

Ahora que has configurado la región LoRa en tu dispositivo, puedes continuar configurando cualquier [Configuración LoRa](https://meshtastic.org/docs/configuration/radio/lora/) para satisfacer tus necesidades.

### Configuración del Sensor

|Sensor|Descripción|
|-|-|
|Temperatura|✅|
|Luz|Actualmente no compatible con la App|
|Acelerómetro|Continuará|

**Configuración del Sensor de Temperatura**

<Tabs>
<TabItem value="ios" label="IOS App">

Navega a `Settings` -> `Telemetry(Sensors)` -> Habilitar sensores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-ios.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

Navega a `Settings` -> `Telemetry(Sensors)` -> Habilitar sensores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

**Configuración del Zumbador y LED**

||Tipo|PIN de Salida|
|-|-|-|
|Zumbador|Zumbador PWM|25|
|LED|-|24|

<Tabs>
<TabItem value="ios" label="Aplicación iOS">

Navega a `Configuración` -> `Notificación Externa` -> Habilitar `GPIO` -> Establecer `Pin de Salida GPIO`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-en.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Aplicación Android">

Navega a `Configuración` -> `Notificación Externa` -> Habilitar `GPIO` -> Establecer `Pin de Salida GPIO`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

Consulta [Configuración de Notificación Externa](https://meshtastic.org/docs/configuration/module/external-notification/) para más detalles.

:::tip
Después de actualizar la configuración del dispositivo, el dispositivo se reiniciará, lo cual puede tomar algún tiempo.
:::

## Flashear Firmware

### Verificar la Versión del Firmware

Navega a `Configuración` -> `Actualizaciones de Firmware`, verifica la versión actual del firmware.

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

#### Paso 1: Entrar al modo DFU

<Tabs>
<TabItem value="method1" label="Método 1">

Visita [Flasheador Web de Meshtastic](https://flasher.meshtastic.org/).

Conecta el dispositivo a tu PC, selecciona el dispositivo como `Seeed Card Tracker T1000-E` y elige el firmware más reciente, luego haz clic en `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-2.png" alt="pir" width={800} height="auto" /></p>

Haz clic en `Entrar Modo DFU`, aparecerá un puerto serie llamado `T1000-E xxx`, haz clic y conéctalo, el LED verde se mantendrá encendido, y debería aparecer un controlador llamado `T1000-E`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-serial.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="method2" label="Método 2">

Conecta el cable USB a tu PC, mantén presionado el botón del dispositivo, luego conecta **rápidamente** el cable de carga dos veces, el LED verde se mantendrá encendido, y debería aparecer un controlador llamado `T1000-E`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={800} height="auto" /></p>

#### Paso 2: Borrado Flash

:::caution note
¡Antes de flashear el firmware, por favor flashea primero el firmware de borrado!
:::

Haz clic en el símbolo de `papelera`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase1.png" alt="pir" width={800} height="auto" /></p>

Descarga el firmware de borrado y cópialo al controlador.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase-uf2.png" alt="pir" width={800} height="auto" /></p>

Este proceso puede tomar algún tiempo, espera a que la unidad desaparezca, luego abre un monitor serie para completar el proceso de borrado.

#### Paso 3: Flashear Firmware

Selecciona el firmware más reciente, y descarga el archivo `UF2`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/down-uf2.png" alt="pir" width={800} height="auto" /></p>

Copia el archivo UF2 a la unidad DFU. El firmware debería ser flasheado después de que el archivo se descargue y el dispositivo se reinicie.

## FAQ

- **Cómo verificar el nombre del dispositivo**

 Visita [Meshtastic Web Flasher](https://flasher.meshtastic.org/).<br/>

 Haz clic en `Open Serial Monitor`, conecta el dispositivo a tu PC, verifica el registro serial, palabra clave `using nodenum`.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name3.png" alt="pir" width={800} height="auto" /></p>

- **¿Cómo reiniciar el dispositivo?**

 Mantén presionado el botón, luego conecta el cable de carga.

## Solución de problemas

### El dispositivo nunca se enciende

- Carga el dispositivo durante 1~2 horas

- Cambia el cable de carga

### El dispositivo se queda atascado en bucle de arranque

**Descripción:**

El dispositivo se reiniciará repetidamente, y el puerto serial se conecta y desconecta repetidamente.

**Solución:**

- Paso 1: Intenta entrar al modo DFU manualmente: mantén presionado el botón del dispositivo, luego conecta **rápidamente** el cable de carga dos veces, el LED verde permanecerá encendido sólido.

:::note
Para entrar exitosamente al modo DFU, necesitas realizar esta operación rápidamente. Puede que necesites intentar múltiples veces.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- Paso 2: [Borrar Flash](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#step-2-flash-erase).

- Paso 3: [Flashear Firmware](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#step-3-flash-firmware).

### Dispositivo bloqueado

**Descripción:**

El dispositivo no responde, no hay LED, no se puede emparejar con tu App.

**1) El dispositivo aún puede entrar al modo DFU, entonces intenta flashear el bootloader**.

#### Flashear el Bootloader

- [Descarga del Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

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

Este es el método recomendado, para instalar la última versión:

```
pip3 install --user adafruit-nrfutil
```

</TabItem>

<TabItem value="sou" label="Instalación desde el Código Fuente">

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

Si obtienes errores de permisos al ejecutar `pip3 install`, tu `pip3` es más antiguo
o está configurado para intentar instalar en los directorios del sistema. En ese caso usa la
bandera `--user`:

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

Si deseas instalar en directorios del sistema (generalmente no recomendado):

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

Para generar un binario ejecutable independiente de la utilidad (Windows y MacOS), ejecuta estos comandos:

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

**Paso 2: Verifica tu número de puerto**

Conecta tu dispositivo a tu PC y verifica el número de puerto.

Ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**Paso 3: Flashea el bootloader**

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

Cuando hayas completado los pasos anteriores, entonces puedes seguir este [paso](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#flash-the-application-firmware) para flashear el firmware de aplicación.

**2) El dispositivo no puede entrar en modo DFU, pero el puerto serie puede ser detectado**.

- Abre una herramienta de puerto serie

- Establece la velocidad de baudios a `1200`.

- Conecta el dispositivo.
   La luz parpadeará brevemente cuando lo conectes. Sigue intentando esto hasta que la luz permanezca encendida, significa que el dispositivo puede volver al modo DFU, entonces [flashea el bootloader](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#flash-the-bootloader) -> [Borra la flash](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#step-2-flash-erase) -> [flashea el firmware](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#step-3-flash-firmware).

<div class="video-container">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/reset%20via%20serial%20tool.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**3) El dispositivo no puede entrar en modo DFU y no se muestra puerto serie**

- Por favor desconecta el cable de carga y deja el dispositivo por unos días hasta que la batería esté completamente agotada, luego conecta el cable de carga e intenta emparejarlo nuevamente.

**4) Si ninguno de los pasos anteriores funciona, por favor contacta al soporte técnico: support@sensecapmx.com**

### Fallo en el flasheo del firmware

- **No se recibieron datos en el puerto serie**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 Verifica si el dispositivo está en modo DFU, la luz verde estará fija cuando el dispositivo esté en modo DFU.

- **No se puede abrir el puerto serie**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 Verifica si el puerto es correcto, o prueba otro puerto.

## Recursos

[Documentación de Meshtastic](https://meshtastic.org/docs/introduction/)

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
