---
description: Presenta cómo descargar el repositorio de código abierto de Watcher y construir un entorno IDF.
title: Construir el Entorno de Desarrollo de Watcher
image: https://files.seeedstudio.com/wiki/watcher_getting_started/64.webp
slug: /es/build_watcher_development_environment
sidebar_position: 1
last_update:
  date: 11/5/2024
  author: Citric
---

# Construir el Entorno de Desarrollo de Watcher

## Instalación de ESP-IDF

Por favor consulta la [guía de instalación oficial](https://docs.espressif.com/projects/esp-idf/en/v5.2.1/esp32s3/get-started/index.html) de espressif.

Ten en cuenta que el ejemplo `factory_fw` está basado exactamente en la versión v5.2.1 de IDF.

```
mkdir -p ~/esp
cd ~/esp
git clone --recursive https://github.com/espressif/esp-idf.git
```

Te recomendamos encarecidamente que hagas el alias `get_idf` para la inicialización del entorno IDF si estás usando macOS o Linux.

## Primera Construcción

### Obtener el entorno IDF

```
get_idf
idf.py
```

Si has instalado el IDF correctamente, después del comando `idf.py` obtendrás una impresión de ayuda de la herramienta idf.py.

```
$ idf.py
Usage: idf.py [OPTIONS] COMMAND1 [ARGS]... [COMMAND2 [ARGS]...]...

  ESP-IDF CLI build management tool. For commands that are not known to idf.py an attempt to execute it as a build system target will be
  made. Selected target: esp32s3

...

```

Establece el objetivo del chip a `esp32s3`.

```
idf.py set-target esp32s3
```

### Construir el proyecto

```
idf.py build
```

El código para el firmware de fábrica más reciente está en `example/factory_firmware`.

```
cd example/factory_firmware
idf.py build
```

### Flashear

Conecta el SenseCAP Watcher a tu PC o laptop con un **cable USB de datos**.

**¡¡¡POR FAVOR NOTA!!!**

**SOLO el puerto USB en la parte inferior (en el lateral) tiene transmisión de datos**

**El puerto USB en la parte trasera solo proporciona energía al dispositivo.**

Cuando conectes el Watcher con un cable de datos apropiado y desde el puerto USB C correcto, obtendrás 1 entrada de dispositivo USB en tu PC, y también 2 dispositivos UART. Están conectados al UART del ESP32S3, y el UART conectado al SoC Himax. No hay un patrón observado de qué SoC usará qué UART. Así que por favor prueba el siguiente comando con cada dispositivo UART hasta que veas impresiones de registro.

```
idf.py --port /dev/ttyACM0 monitor
```

Por favor reemplaza `/dev/ttyACM0` con el nombre correcto del dispositivo UART en tu sistema operativo. p. ej. en MacOS se ve como `/dev/tty.wchusbserial56F3067xxxx, y en Windows se ve como `COMx`. Y de nuevo si no ves el progreso de la impresión del registro, prueba el siguiente UART.

**¡¡¡POR FAVOR NOTA!!!**

La partición llamada `nvsfactory` contiene datos críticos de fábrica para que el dispositivo funcione, por favor ten cuidado de no borrar esa partición. Así que se recomienda encarecidamente que hagas una copia de seguridad de esta partición antes de ejecutar cualquier operación de flasheo.

Vamos a usar esptool.py para hacer la copia de seguridad. Esta herramienta es parte de la instalación de IDF, así que ya debería estar ahí si pasaste por la instalación de IDF.

```
# Linux / MacOS
which esptool.py

# Windows
where esptool.py
```

Ahora hagamos una copia de seguridad de nuestra partición `nvsfactory`.

```
esptool.py --port /dev/tty.wchusbserial56F3067xxxx --baud 2000000 --chip esp32s3 --before default_reset --after hard_reset --no-stub read_flash 0x9000 204800 nvsfactory.bin
```

Una vez que hayas terminado la copia de seguridad, es hora de flashear nuestro firmware.

```
idf.py --port /dev/ttyACM0 -b 2000000 app-flash
```

Usa el subcomando `app-flash` para flashear solo la partición de aplicación, eso protegerá tu partición `nvsfactory`, y lo más importante te ahorrará tiempo.

### Monitorear la salida del registro

```
idf.py monitor
```

Usa `ctrl + ]` para salir del monitoreo.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>