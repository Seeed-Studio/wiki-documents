---
description: MicroPython for XIAO ESP32S3 Sense
title: XIAO ESP32S3 con MicroPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/XIAO_ESP32S3_Micropython
last_update:
  date: 02/11/2025
  author: Guillermo
---

# Micropython para XIAO ESP32S3 Sense (Cámara, Wi-Fi)

MicroPython es una implementación ligera y eficiente del lenguaje de programación Python 3, que incluye un subconjunto pequeño de la biblioteca estándar de Python y está optimizado para ejecutarse en microcontroladores y en entornos limitados.

Desde su inicio en 2014, MicroPython ya ha soportado muchos microcontroladores, incluido el ESP32S3, que es el cerebro principal de la placa de desarrollo Xiao ESP32S3 Sense.

En esta página te guiaré sobre cómo usar las capacidades de la Xiao ESP32S3 Sense utilizando la sintaxis simple y fácil de MicroPython.

## Preparación de Hardware

Estoy utilizando aquí la placa XIAO ESP32S3 Sense de Seeed Studio.

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
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Preparación del Software

En esta guía utilizaré **Windows 10** junto con el IDE Thonny y esptool. Para usar esptool, asegúrate de instalar el entorno Python 3 en tu sistema operativo Windows. Antes de comenzar, asegúrate de descargar el firmware e instalar Thonny.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Thonny IDE</th>
        <th>Firmware y código de muestra</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://thonny.org/">
              <strong><span><font color={'FFFFFF'} size={"4"}> Descarga ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/XIAO_ESP32S3_Micropython.zip">
              <strong><span><font color={'FFFFFF'} size={"4"}> Descarga ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 👍 Agradecimientos

<strong><font color={'8DC215'} size={"3"}>El firmware diseñado para la placa XIAO ESP32S3 Sense, utilizado en esta wiki, fue creado por nuestro amigo: shariltumin, a quien estamos realmente agradecidos.</font></strong>


## Comenzando

El firmware está diseñado únicamente para la programación de MicroPython en el XIAO ESP32S3. Primero, flashearemos el firmware y luego utilizaremos el ejemplo en él.

### Paso 1. Flashear el firmware

Localiza la dirección del puerto USB a serie abriendo el administrador de dispositivos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

Extrae el archivo ZIP descargado y navega hasta la carpeta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/firmware%20folder.jpg" alt="pir" width={600} height="auto" /></p>

Haz clic en el cuadro de la ruta, luego escribe "CMD" y presiona Enter.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/cmd_on_folder.jpg" alt="pir" width={600} height="auto" /></p>

Serás dirigido a la terminal de cmd.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/on_cmd.jpg" alt="pir" width={600} height="auto" /></p>

Instala esptool usando el comando pip (asegúrate de que Python 3 ya esté instalado).
```cpp
pip install esptool
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/esptool_install.jpg" alt="pir" width={600} height="auto" /></p>

Borra la memoria flash del Xiao ESP32S3 usando este comando.

```cpp
esptool.py --port COMXX erase_flash
```

Ahora procede a instalar el firmware de MicroPython usando este comando.
```cpp
esptool.py --port COMXX --baud 460800 --before default_reset --after hard_reset --chip esp32s3  write_flash --flash_mode dio --flash_size detect --flash_freq 80m 0x0 firmware.bin 
```

:::tip
Cambia el COMXX por el número de puerto COM en tu PC.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>



### Paso 2. Subir el código de ejemplo

Ahora subiremos el código de ejemplo a la memoria flash interna del Xiao ESP32S3 Sense.

Para esta parte, utilizaré el IDE Thonny. Primero, configuro el puerto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/configure_port_thonny.png" alt="pir" width={600} height="auto" /></p>

Luego, en el menú de vista, marca la opción de archivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/check_the_files.png" alt="pir" width={600} height="auto" /></p>

Navega hasta la carpeta donde se extrajo el código de ejemplo y sube los archivos haciendo clic derecho sobre el archivo y eligiendo la opción como se muestra en la imagen a continuación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/upload_the_file.png" alt="pir" width={600} height="auto" /></p>

Después de que todo el código de ejemplo se haya subido a la placa Xiao ESP32S3, cambia las credenciales de Wi-Fi en ambos archivos streamin_server.py y Wifi.py según la configuración de tu red Wi-Fi local.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/wifi_configuration.png" alt="pir" width={600} height="auto" /></p>


### Paso 3. Probar el ejemplo de transmisión

Antes de probar la transmisión, asegúrate de instalar la biblioteca OpenCV para Python usando pip.

```cpp
pip install opencv-python
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/install_opencv.png" alt="pir" width={600} height="auto" /></p>

Después de que la biblioteca OpenCV para Python se haya instalado correctamente, regreso a Thonny y ejecuto el archivo `streamin_server.py`, luego copio la dirección IP de la placa XIAO ESP32S3.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_script.png" alt="pir" width={600} height="auto" /></p>

Luego, regresa a la carpeta del archivo ZIP extraído y abre el archivo `streamin_client.py` usando el IDLE de Python. Cambia la parte de la dirección IP para que coincida con la dirección IP de la placa Xiao ESP32S3.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/change_ip.png" alt="pir" width={600} height="auto" /></p>

Luego, intenta ejecutar el archivo y deberías ver una nueva ventana mostrando la imagen de transmisión desde la placa Xiao ESP32S3 Sense.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_client.jpeg" alt="pir" width={600} height="auto" /></p>

:::caution
Al ejecutar el ejemplo de transmisión, la placa Xiao ESP32S3 Sense podría calentarse bastante.
:::

## Qué más

Usando estos ejemplos, puedes crear rápidamente un proyecto de CCTV. Dado que la placa Xiao ESP32S3 Sense es pequeña, el proyecto podría ser muy práctico.

## Solución de problemas

Si la cámara no se inicializa correctamente (muestra un cuadro y luego se congela) o no puede reconectarse al Wi-Fi, intenta desconectar la placa y relanzar el IDE Thonny.

## ✨ Proyecto Contribuyente

- Este proyecto es respaldado por el proyecto [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Gracias a los esfuerzos de [Hendra y shariltumin](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35979545). Su trabajo será exhibido [aquí](https://wiki.seeedstudio.com/Honorary-Contributors/).

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
