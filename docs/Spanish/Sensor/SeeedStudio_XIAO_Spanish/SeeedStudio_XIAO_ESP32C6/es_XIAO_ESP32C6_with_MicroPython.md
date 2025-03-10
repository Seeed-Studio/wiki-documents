---
description: MicroPython for XIAO ESP32C6
title: XIAO ESP32C6 con MicroPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_esp32c6_micropython
last_update:
  date: 08/02/2025
  author: Guillermo
---

# Micropython para XIAO ESP32C6

MicroPython es una implementación eficiente y ligera del lenguaje de programación Python 3 que incluye un pequeño subconjunto de la biblioteca estándar de Python y está optimizada para ejecutarse en microcontroladores y en entornos limitados.

Desde su lanzamiento en 2014, MicroPython ha dado soporte a muchos microcontroladores, incluyendo la serie ESP32, pero actualmente no soporta oficialmente el chip ESP32C6. Este firmware es auto-compilado y el firmware oficial ya está en camino. Por favor, ten paciencia.

En esta página, te guiaremos sobre cómo usar las capacidades de XIAO ESP32C6 utilizando la sintaxis simple y fácil de MicroPython.

## Preparación del Hardware

Estoy utilizando la placa Seeed Studio XIAO ESP32C6 aquí.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32C6</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991254-seeedxiao-esp32c6-45font_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno aquí 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>


## Preparación del Software

En esta guía estaré utilizando **Windows 10** junto con el IDE Thonny y esptool. Para usar esptool, asegúrate de tener instalado el entorno Python 3 en tu sistema operativo Windows. Antes de comenzar, asegúrate de descargar el firmware e instalar Thonny.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Thonny IDE</th>
        <th>Firmware y Código ejemplo</th>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://thonny.org/">
              <strong><span><font color={'FFFFFF'} size={"4"}> Descarga ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/ESP32C6-MicroPy/XIAO_ESP32C6_Micropython.zip">
              <strong><span><font color={'FFFFFF'} size={"4"}> Descarga ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>


### 👍 Muchas gracias

<strong><font color={'8DC215'} size={"3"}>El firmware diseñado para la placa XIAO ESP32C6, utilizado en esta wiki, fue creado por nuestro amigo: Zhishuo Song, a quien estamos muy agradecidos.</font></strong>

## Empezando

El firmware está diseñado únicamente para la programación en MicroPython de la XIAO ESP32C6. Primero flashearemos el firmware y luego usaremos el ejemplo en él.

### Paso 1. Flashear el firmware

Ubica la dirección del puerto USB a serie abriendo el administrador de dispositivos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

Extrae el archivo zip descargado y navega hasta la carpeta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205037972.png" alt="pir" width={600} height="auto" /></p>

Haz clic en la caja de la ruta, luego escribe "CMD" y presiona Enter.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205105289.png" alt="pir" width={600} height="auto" /></p>

Serás dirigido al terminal cmd.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022204711119.png" alt="pir" width={600} height="auto" /></p>

Instala esptool usando el comando pip (asegúrate de que Python 3 ya esté instalado).

```cpp
pip install esptool
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/esptool_install.jpg" alt="pir" width={600} height="auto" /></p>

Borra la memoria flash del XIAO ESP32C6 usando este comando:

```cpp
esptool.py --port COMXX --chip esp32c6 erase_flash
```

Ahora proceda a instalar el firmware de Micropython utilizando este comando

```cpp
esptool.py --port COMXX --baud 460800 --before default_reset --after hard_reset --chip esp32c6  write_flash --flash_mode dio --flash_size detect --flash_freq 80m 0x0 ESP32C6_MicroPython.bin
```

:::tip
Cambie el número Comxx con el número de puerto COM en su PC
:::


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205457866.png" alt="pir" width={600} height="auto" /></p>

### Paso 2. Subir el código de ejemplo

Ahora subiremos el código de ejemplo a la memoria flash interna de XIAO ESP32C6.

Para esta parte, estoy utilizando el IDE de Thonny. Primero configuro el puerto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205437800.png" alt="pir" width={600} height="auto" /></p>

Ejecuta el programa de ejemplo `blinker.py`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220104960.png" alt="pir" width={600} height="auto" /></p>

## NTP obtener la hora actual desde Wi-Fi

### Paso 1: Abre el archivo `wifi_Ntp.py` en Thonny.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220645986.png" alt="pir" width={600} height="auto" /></p>

### Paso 2: Cambia el SSID y la contraseña de tu router Wi-Fi en la línea 8

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220714175.png" alt="pir" width={600} height="auto" /></p>

### Paso 3: Ejecuta el código

Al ejecutar el programa, puedes ver en la ventana de la terminal que el XIAO se conecta al Wi-Fi especificado y obtiene la hora NTP de la red.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220808948.png" alt="pir" width={600} height="auto" /></p>

## Solución de problemas

Si no se puede cargar el programa, intenta usar los botones **BOOT** y **RST** para poner la placa en el modo de descarga de arranque.

## ✨ Proyecto de Contribuidores

- Este proyecto es respaldado por el [Proyecto de Contribuidores de Seeed Studio](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479).
- Agradecimientos a [Hendra y shariltumin por sus esfuerzos](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=c6&pane=issue&itemId=59874459&issue=Seeed-Studio%7Cwiki-documents%7C1117), y su trabajo será exhibido [aquí](https://wiki.seeedstudio.com/contributors/).

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes formas de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
