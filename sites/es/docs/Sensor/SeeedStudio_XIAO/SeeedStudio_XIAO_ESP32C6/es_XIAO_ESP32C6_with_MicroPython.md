---
description: MicroPython para XIAO ESP32C6
title: XIAO ESP32C6 con MicroPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32c6_micropython
last_update:
  date: 08/30/2023
  author: Hendra
createdAt: '2023-08-30'
updatedAt: '2026-02-09'
url: https://wiki.seeedstudio.com/es/xiao_esp32c6_micropython/
---

# Micropython para XIAO ESP32C6

MicroPython es una implementación ligera y eficiente del lenguaje de programación Python 3 que incluye un pequeño subconjunto de la biblioteca estándar de Python y está optimizada para ejecutarse en microcontroladores y en entornos restringidos.

En esta página, te guiaremos sobre cómo usar las capacidades del XIAO ESP32C6 utilizando la sintaxis simple y fácil de micropython.

## Preparación del Hardware

Estoy usando la placa Seeed Studio XIAO ESP32C6 aquí.

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
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
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
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/ESP32C6-MicroPy/XIAO_ESP32C6_Micropython.zip" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Descargar ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 👍 Muchas Gracias

<strong><font color={'8DC215'} size={"3"}>El firmware diseñado para la placa XIAO ESP32C6, usado en esta wiki, fue hecho por nuestro amigo: Zhishuo Song, a quien estamos realmente agradecidos.</font></strong>

## Introducción

El firmware está diseñado solo para la programación MicroPython del XIAO ESP32C6. Primero flashearemos el firmware y luego usaremos el ejemplo en él.

### Paso 1. Flashear el firmware

Localiza la dirección del puerto USB a serie abriendo el administrador de dispositivos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

Extrae el archivo zip descargado y navega a la carpeta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205037972.png" alt="pir" width={600} height="auto" /></p>

haz clic en la caja de ruta luego escribe "CMD" y presiona enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205105289.png" alt="pir" width={600} height="auto" /></p>

Serás dirigido a la terminal cmd.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022204711119.png" alt="pir" width={600} height="auto" /></p>

Instala esptool usando el comando pip (asegúrate de que python 3 ya esté instalado)

```bash
pip install esptool
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/esptool_install.jpg" alt="pir" width={600} height="auto" /></p>

:::caution Pon la placa en modo Bootloader
Antes de flashear, **debes** poner el XIAO ESP32C6 en modo bootloader (descarga). Para hacer esto:
1. Presiona y **mantén** el botón **BOOT**.
2. Mientras mantienes BOOT, presiona y suelta el botón **RESET**.
3. Suelta el botón **BOOT**.

Si la placa no está en modo bootloader, el flasheo fallará con un error de **"Write timeout"** y puede dañar el módulo.
:::

Borra la memoria flash en el XIAO ESP32C6 usando este comando

```bash
esptool --port COMXX --chip esp32c6 erase-flash
```

Ahora procede a instalar el firmware de micropython usando este comando

```bash
esptool --port COMXX --baud 460800 --before default-reset --after hard-reset --chip esp32c6 write-flash --flash-mode dio --flash-size detect --flash-freq 80m 0x0 ESP32C6_MicroPython.bin
```

:::tip
Cambia el COMXX con el número de puerto COM en tu PC. Si el flasheo falla con un error de timeout, intenta reducir la velocidad de baudios a `115200`.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205457866.png" alt="pir" width={600} height="auto" /></p>

### Paso 2. Subir el código de ejemplo

Ahora subiremos el código de ejemplo a la memoria flash interna del XIAO ESP32C6.

Para esta parte estoy usando thonny IDE primero configuro el puerto

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205437800.png" alt="pir" width={600} height="auto" /></p>

ejecuta el programa de ejemplo `blinker.py`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220104960.png" alt="pir" width={600} height="auto" /></p>

## NTP obtener hora actual desde wifi

### paso1: Abre el archivo `wifi_Ntp.py` en Thonny

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220645986.png" alt="pir" width={600} height="auto" /></p>

### paso2: cambia el ssid y contraseña de tu router wifi en la línea 8

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220714175.png" alt="pir" width={600} height="auto" /></p>

### paso3: ejecutar código

Al ejecutar el programa, puedes ver en la ventana del shell que el XIAO se conecta al wifi especificado y obtiene la hora de red NTP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220808948.png" alt="pir" width={600} height="auto" /></p>

## Solución de Problemas

- **Error "Write timeout" o excepción serial**: Asegúrate de que la placa esté en **modo bootloader** antes de flashear. Mantén el botón **BOOT**, presiona y suelta **RESET**, luego suelta **BOOT**. También deberías intentar reducir la velocidad de baudios (por ejemplo, usa `--baud 115200` en lugar de `460800`).
- **Comando no encontrado (`esptool.py`)**: Usa `esptool` (sin `.py`) cuando se instale vía `pip install esptool`. En algunos sistemas, puede que necesites usar `python -m esptool` en su lugar.
- **Módulo dañado**: Si el módulo parece dañado, intenta entrar en modo bootloader y borrar la flash con `esptool --port COMXX --chip esp32c6 erase-flash`, luego vuelve a flashear el firmware.

## ✨ Proyecto Colaborador

- Este proyecto está respaldado por el [Proyecto Colaborador](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Gracias a los [esfuerzos de Hendra y shariltumin](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=c6&pane=issue&itemId=59874459&issue=Seeed-Studio%7Cwiki-documents%7C1117) y su trabajo será [exhibido](https://wiki.seeedstudio.com/es/contributors/).

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
