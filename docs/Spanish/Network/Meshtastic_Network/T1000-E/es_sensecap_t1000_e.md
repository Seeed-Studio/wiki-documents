---
description: Get Started with SenseCAP Card Tracker T1000-E for Meshtastic
title: Primeros pasos con T1000-E Tracker
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/sensecap_t1000_e
sidebar_position: 2
last_update:
  date: 06/02/2025
  author: Guillermo
---

## Video Tutorial

### Parte 1: Desmpaquetado y Configuración

<iframe width="100%" height="500" src="https://www.youtube.com/embed/9sCHpWPSPcw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Parte 2: Indicadores de Estado

<iframe width="100%" height="500" src="https://www.youtube.com/embed/8p34S_9DDEQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Parte 3: Flashear Nuevo Firmware

<iframe width="100%" height="500" src="https://www.youtube.com/embed/li6DTOeXK3M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Parte 4: Instrucciones para Solución de Problemas

<iframe width="100%" height="500" src="https://www.youtube.com/embed/iWahTuXwYnU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Comenzar

Descarga la app `Meshtastic`:

- [App para IOS](https://meshtastic.org/docs/category/apple-apps/)
- [App para Android](https://meshtastic.org/docs/category/android-app/)

### Encender el dispositivo

Presiona una vez para encender el dispositivo. Sonará una melodía ascendente y la luz LED permanecerá encendida por aproximadamente 1 segundo.

:::tip
Si el dispositivo no responde al presionar el botón, cárgalo primero.
:::

### Conexión vía App

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

- Selecciona el dispositivo objetivo en el panel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Ingresa el código (el código predeterminado es `123456`) y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- Haz clic en `+` y selecciona el dispositivo objetivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- Ingresa el código (el código predeterminado es `123456`) y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Configura los Parámetros

Para comenzar a comunicarte a través de la red mesh, debes establecer tu región. Esta configuración controla qué rango de frecuencia usará tu dispositivo y debe ajustarse de acuerdo con tu ubicación geográfica.

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**Lista de Regiones**

|**Código de Región**|**Descripción**|**Rango de Frecuencia (MHz)**|**Ciclo de Trabajo (%)**|**Límite de Potencia (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|No establecido|N/A|N/A|N/A|
|US|Estados Unidos|902\.0 - 928.0|100|30|
|EU\_868|Unión Europea 868MHz|869\.4 - 869.65|10|27|

Consulta la [Región LoRa por País](https://meshtastic.org/docs/configuration/region-by-country/) para una lista más completa.

:::info
**EU_868** debe cumplir con una limitación de ciclo de trabajo del 10% por hora, calculado cada minuto en una base continua de 1 hora. Tu dispositivo dejará de transmitir si alcanza ese límite, hasta que se le permita transmitir nuevamente.
:::

Ahora que has configurado la región LoRa en tu dispositivo, puedes continuar con la configuración de cualquier [Parámetro LoRa](https://meshtastic.org/docs/configuration/radio/lora/) según tus necesidades.

### Configuración de Sensores

|Sensor|Descripción|
|-|-|
|Temperatura|✅|
|Luz|Actualmente no es compatible con la aplicación|
|Acelerómetro|Próximamente|

**Configuración del Sensor de Temperatura**

<Tabs>
<TabItem value="ios" label="IOS App">

Ve a `Configuración` -> `Telemetría (Sensores)` -> Habilitar sensores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-ios.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

Ve a `Configuración` -> `Telemetría (Sensores)` -> Habilitar sensores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

**Configuración del Buzzer y LED**

||Tipo|PIN de Salida|
|-|-|-|
|Buzzer|Buzzer PWM|25|
|LED|-|24|

<Tabs>
<TabItem value="ios" label="IOS App">

Ve a `Configuración` -> `Notificación Externa` -> Habilita `GPIO` -> Establece `Pin de Salida GPIO`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-en.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

Ve a `Configuración` -> `Notificación Externa` -> Habilita `GPIO` -> Establece `Pin de Salida GPIO`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

Consulta la [Configuración de Notificación Externa](https://meshtastic.org/docs/configuration/module/external-notification/) para más detalles.

:::tip
Después de actualizar la configuración del dispositivo, este se reiniciará. Esto puede tomar algo de tiempo.
:::

## Flashear el Firmware

### Verificar la Versión del Firmware

Ve a `Configuración` -> `Actualizaciones de Firmware`, y revisa la versión actual del firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/check-version.png" alt="pir" width={400} height="auto" /></p>

### <div class="danger">⚠️NO FLASHEES EL SIGUIENTE FIRMWARE</div>

:::danger
NO FLASHEES NINGÚN FIRMWARE QUE NO SEA EL FIRMWARE T1000-E, ESTO PUEDE HACER QUE EL DISPOSITIVO SE CONGELE.
:::

The following firmware will brick your device：

- nrf52_promicro_diy_tcxo<br/>
- nrf52_promicro_diy_xtal<br/>
- Dongle_nRF52840-pca10059-v1<br/>
- feather_diy<br/>
- TWC_mesh_v4<br/>
- wio-sdk-wm1110<br/>
- wio-tracker-wm1110<br/>
- xiao_ble

### Flashear el Firmware de la Aplicación

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Flash%20Firmware.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

#### Paso 1: Entrar en Modo DFU

<Tabs>
<TabItem value="method1" label="Método 1">

Visita [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Conecta el dispositivo a tu PC, selecciona el dispositivo como `Seeed Card Tracker T1000-E` y elige el firmware más reciente, luego haz clic en `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-2.png" alt="pir" width={800} height="auto" /></p>

Haz clic en `Enter DFU Mode`, aparecerá un puerto serial llamado `T1000-E xxx`, haz clic y conéctalo. El LED verde quedará encendido de forma continua y debería aparecer un controlador llamado `T1000-E`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-serial.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="method2" label="Método 2">

Conecta el cable USB a tu PC, mantén presionado el botón del dispositivo y luego **conecta rápidamente** el cable de carga dos veces. El LED verde quedará encendido de forma continua y debería aparecer un controlador llamado `T1000-E`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={800} height="auto" /></p>

#### Paso 2: Borrado del Firmware

:::caution note
¡Antes de flashear el firmware, primero debes borrar el firmware anterior!
:::

Haz clic en el símbolo de `papelera`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase1.png" alt="pir" width={800} height="auto" /></p>

Descarga el firmware de borrado y cópialo al controlador.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase-uf2.png" alt="pir" width={800} height="auto" /></p>

Este proceso puede tardar un poco. Espera a que la unidad desaparezca, luego abre un monitor serial para completar el proceso de borrado.

#### Paso 3: Flashear el Firmware

Selecciona la versión más reciente del firmware y descarga el archivo `UF2`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/down-uf2.png" alt="pir" width={800} height="auto" /></p>

Copia el archivo UF2 a la unidad DFU. El firmware se instalará automáticamente después de copiar el archivo y el dispositivo se reiniciará.

## Preguntas Frecuentes (FAQ)

- **¿Cómo verificar el nombre del dispositivo?**

 Visita [Meshtastic Web Flasher](https://flasher.meshtastic.org/).<br/>

 Haz clic en `Open Serial Monitor`, conecta el dispositivo a tu PC, revisa el registro serial, busca la palabra clave `using nodenum`.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name3.png" alt="pir" width={800} height="auto" /></p>

- **¿Cómo reiniciar el dispositivo?**

 Mantén presionado el botón, luego conecta el cable de carga.

## Solución de Problemas

### El dispositivo nunca enciende

- Carga el dispositivo durante 1 a 2 horas

- Cambia el cable de carga

### El dispositivo queda atascado en bucle de arranque (boot loop)

**Descripción:**

El dispositivo se reinicia repetidamente, y el puerto serial se conecta y desconecta continuamente.

**Solución:**

- Paso 1: Intenta ingresar manualmente al modo DFU: mantén presionado el botón del dispositivo y **conecta rápidamente** el cable de carga dos veces. El LED verde quedará encendido de forma continua.

:::note
Para ingresar correctamente al modo DFU, debes realizar esta operación rápidamente. Puede que necesites intentarlo varias veces.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- Paso 2: [Borrar el firmware](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#paso-2-borrado-del-firmware).

- Paso 3: [Flashear el firmware](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#paso-3-flashear-el-firmware).

### Dispositivo bloqueado (bricked)

**Descripción:**

El dispositivo no responde, no hay LED encendido, y no se puede emparejar con la App.

**1) Si el dispositivo aún puede entrar al modo DFU, intenta flashear el bootloader.**

#### Flashear el Bootloader

- [Descargar Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash%20bootloader.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::danger note
Cuando flashees el bootloader, asegúrate de que la conexión del cable sea estable y **NO** lo desconectes durante el proceso.
:::

**Paso 1: Instalación de Adafruit-nrfutil**

**Requisitos Previos**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

<Tabs>
<TabItem value="pypi" label="Installing from PyPI">

Este es el método recomendado para instalar la última versión:

```
pip3 install --user adafruit-nrfutil
```

</TabItem>

<TabItem value="sou" label="Installing from Source">

Usa este método si tienes problemas al instalar con PyPi o si deseas modificar la herramienta. Primero clona este repositorio y entra en su carpeta.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Nota: los siguientes comandos usan `python3`, sin embargo, si estás en Windows, puede que necesites cambiarlo a `python`, ya que en la instalación de Python 3.x en Windows el ejecutable sigue llamándose `python.exe`.

Para instalar en el espacio de usuario dentro de tu directorio personal:

```
pip3 install -r requirements.txt
python3 setup.py install
```

Si obtienes errores de permisos al ejecutar `pip3 install`, es posible que tu `pip3` sea una versión antigua o esté configurado para instalar en los directorios del sistema. En ese caso, utiliza la opción `--user`:

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

Si deseas instalar en los directorios del sistema (generalmente no recomendado):

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

Para generar un ejecutable binario autónomo de la utilidad (Windows y macOS), ejecuta los siguientes comandos:

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

Encontrarás el archivo .exe en `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` (con `.exe` si estás en Windows).
Cópialo o muévelo a otro lugar de tu conveniencia, como un directorio que esté en tu variable de entorno %PATH%.

</TabItem>
</Tabs>

**Paso 2: Verifica el número de puerto**

Conecta tu dispositivo a tu PC y verifica el número de puerto.

Ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**Paso 3: Flashea el bootloader**

En la terminal o símbolo del sistema, navega al directorio donde descargaste el paquete zip del bootloader y ejecuta el siguiente comando, reemplazando el puerto correcto de tu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```

- **Para otros**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

Cuando hayas completado los pasos anteriores, puedes seguir este [paso](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#flashear_el_firmware_de_la_aplicacion) para flashear el firmware de la aplicación.

---

**2) El dispositivo no puede entrar en modo DFU, pero el puerto serial puede ser detectado**.

- Abre una herramienta de puerto serial.
- Establece la velocidad en `1200`.
- Conecta el dispositivo.  
  La luz parpadeará brevemente al conectarlo. Sigue intentando hasta que la luz se mantenga encendida; esto significa que el dispositivo ha vuelto al modo DFU. Entonces [flashea el bootloader](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#flash-the-bootloader) -> [borra la memoria flash](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#paso_2_borrado_del_firmware) -> [flashea el firmware](https://wiki.seeedstudio.com/sensecap_t1000_e/#paso_2_flashear_el_firmware).

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/reset%20via%20serial%20tool.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**3) El dispositivo no puede entrar en modo DFU y no aparece el puerto serie**

- Desconecte el cable de carga y deje el dispositivo durante unos días hasta que la batería se descargue por completo, luego conecte el cable de carga nuevamente e intente emparejarlo otra vez.

**4) Si ninguno de los pasos anteriores funciona, póngase en contacto con el soporte técnico: support@sensecapmx.com**

### Fallo al flashear el firmware

- **No se recibió datos en el puerto serial**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 Verifica si el dispositivo está en modo DFU; la luz verde debe permanecer encendida cuando el dispositivo está en este modo.

- **No se puede abrir el puerto serial**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 Verifica si el puerto es el correcto o intenta con otro puerto.

## Recursos

[Documentación de Meshtastic](https://meshtastic.org/docs/introduction/)

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
