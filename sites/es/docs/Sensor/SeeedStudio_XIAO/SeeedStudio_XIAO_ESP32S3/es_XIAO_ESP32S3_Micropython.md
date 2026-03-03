---
description: MicroPython para XIAO ESP32S3 Sense
title: Proyecto XIAO ESP32S3 MicroPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /XIAO_ESP32S3_Micropython
last_update:
  date: 08/30/2023
  author: Hendra
---

# Micropython para XIAO ESP32S3 Sense(Cámara, Wi-Fi)

MicroPython es una implementación ligera y eficiente del lenguaje de programación Python 3 que incluye un pequeño subconjunto de la biblioteca estándar de Python y está optimizada para ejecutarse en microcontroladores y en entornos restringidos.

Desde su primera iniciación en 2014, micropython ya ha soportado muchos microcontroladores incluyendo el ESP32S3 que es el cerebro principal en la placa de desarrollo Xiao ESP32S3 Sense.

En esta página te guiaré sobre cómo usar la capacidad del Xiao ESP32S3 Sense usando la sintaxis simple y fácil de micropython

## Preparación del Hardware

Estoy usando la placa Seeed Studio XIAO ESPS3 Sense aquí.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Preparación del Software

En esta guía estaré usando **windows 10** junto con Thonny IDE y esptool. Para usar esptool asegúrate de instalar el entorno Python 3 en tu sistema operativo Windows. Antes de comenzar asegúrate de descargar el firmware e instalar Thonny

<div class="table-center">
  <table align="center">
    <tr>
        <th>Thonny IDE</th>
        <th>Firmware y Código de Ejemplo</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://thonny.org/" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Descargar ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/XIAO_ESP32S3_Micropython.zip" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Descargar ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 👍 Muchas Gracias

<strong><font color={'8DC215'} size={"3"}>El firmware diseñado para la placa XIAO ESP32S3 Sense, utilizado en esta wiki, fue creado por nuestro amigo: shariltumin, a quien estamos realmente agradecidos.</font></strong>

## Comenzando

El firmware está diseñado únicamente para la programación MicroPython de XIAO ESP32S3. Primero flashearemos el firmware y luego usaremos el ejemplo en él.

### Paso 1. Flasheando el firmware

Localiza la dirección del puerto serie USB abriendo el administrador de dispositivos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

Extrae el archivo zip descargado y navega a la carpeta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/firmware%20folder.jpg" alt="pir" width={600} height="auto" /></p>

haz clic en la caja de ruta luego escribe "CMD" y presiona enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/cmd_on_folder.jpg" alt="pir" width={600} height="auto" /></p>

Serás dirigido al terminal cmd.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/on_cmd.jpg" alt="pir" width={600} height="auto" /></p>

Instala esptool usando el comando pip (asegúrate de que python 3 ya esté instalado)

```cpp
pip install esptool
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/esptool_install.jpg" alt="pir" width={600} height="auto" /></p>

Borra la memoria flash del Xiao ESP32S3 usando este comando

```cpp
esptool.py --port COMXX erase_flash
```

Ahora procede a instalar el firmware de micropython usando este comando

```cpp
esptool.py --port COMXX --baud 460800 --before default_reset --after hard_reset --chip esp32s3  write_flash --flash_mode dio --flash_size detect --flash_freq 80m 0x0 firmware.bin 
```

:::tip
cambia COMXX con el número de puerto COM en tu PC
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

### Paso 2. Subir el código de ejemplo

Ahora subiremos el código de ejemplo a la memoria flash interna del Xiao ESP32S3 sense.

Para esta parte estoy usando el IDE thonny, primero configuro el puerto

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/configure_port_thonny.png" alt="pir" width={600} height="auto" /></p>

luego en el menú ver marca la opción de archivos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/check_the_files.png" alt="pir" width={600} height="auto" /></p>

Navega a la carpeta donde se extrajo el código de ejemplo, luego sube los archivos haciendo clic derecho en el archivo y elige la opción como en la imagen de abajo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/upload_the_file.png" alt="pir" width={600} height="auto" /></p>

después de que todo el código de ejemplo se haya subido a la placa xiao esp32s3, cambia las credenciales wifi tanto en el archivo streamin_server.py como en el archivo Wifi.py basándote en tu configuración wifi local

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/wifi_configuration.png" alt="pir" width={600} height="auto" /></p>

### Paso 3. Probar el ejemplo de streaming

Antes de probar el streaming asegúrate de instalar la librería opencv de python usando pip

```cpp
pip install opencv-python
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/install_opencv.png" alt="pir" width={600} height="auto" /></p>

después de que la librería python opencv se instale exitosamente regreso a thonny y ejecuto el streamin_server.py y copio la dirección IP de la placa xiao ESP32S3

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_script.png" alt="pir" width={600} height="auto" /></p>

luego regreso a la carpeta zip extraída y abro el steamin_client.py usando el IDLE de python y cambio la parte de la dirección IP para que sea la misma que la placa xiao ESP32S3

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/change_ip.png" alt="pir" width={600} height="auto" /></p>

Luego trato de ejecutar el archivo y deberías ver una nueva ventana mostrando la imagen en streaming desde la placa Xiao ESP32S3 sense

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_client.jpeg" alt="pir" width={600} height="auto" /></p>

:::caution
Al lanzar el ejemplo de streaming, la Placa Xiao ESP32S3 Sense podría calentarse bastante.
:::

## Qué Más

Al usar estos ejemplos puedes hacer un proyecto de CCTV rápido y simple y dado que el Xiao ESP32S3 sense es pequeño en tamaño el proyecto podría ser perfecto

## Solución de Problemas

Si la cámara no se inicializa exitosamente (muestra un frame y luego se congela) o no puede reconectarse al wifi trata de desconectar la placa y relanzar Thonny IDE.

## ✨ Proyecto de Colaborador

- Este proyecto está respaldado por el [Proyecto de Colaborador](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Gracias a [los esfuerzos de Hendra y shariltumin](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35979545) y su trabajo será [exhibido](https://wiki.seeedstudio.com/es/Honorary-Contributors/).

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
