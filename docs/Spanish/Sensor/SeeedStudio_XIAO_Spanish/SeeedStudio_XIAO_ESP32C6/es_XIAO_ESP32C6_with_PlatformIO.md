---
description: Seeed Studio XIAO ESP32C6 with PlatformIO
title: XIAO ESP32C6 con PlatformIO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/esp32c6_circuitpython/title.png
slug: /es/xiao_esp32c6_with_platform_io
last_update:
  date: 08/02/2025
  author: Guillermo
---

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_platformio/7.png" /></div>

## Introducción a PlatformIO

PlatformIO es una plataforma de desarrollo que integra muchos tipos de placas de desarrollo y tiene una buena escalabilidad. Si la plataforma no tiene el tipo que necesitas, puedes agregar manualmente el tipo de placa de desarrollo por ti mismo. El código que escribes en Arduino puede utilizarlo, solo debes agregar la biblioteca correspondiente.

En este wiki, introduciremos cómo instalar y ejecutar el código de ejemplo en PlatformIO.

## Usar PlatformIO para XIAO ESP32C6

### Configuración 1. Instalar [PlatformIO](https://platformio.org/platformio-ide) desde su sitio oficial

Si no has instalado PlatformIO, puedes hacer clic en el enlace anterior.

### Configuración 2. Crear un proyecto en PlatformIO

Dado que la plataforma ya tiene opciones para las placas de desarrollo XIAO ESP32S3 y XIAO ESP32C3, podemos elegir una de ellas para crear nuestros archivos. Por supuesto, también se pueden utilizar otros archivos, no importa. El nombre del proyecto también puede ser elegido arbitrariamente.

<table align="center">
  <tr>
      <th>Operación uno</th>
        <th>Operación dos</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_platformio/4.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_platformio/3.png" style={{width:700, height:'auto'}}/></div></td>
  </tr>
</table>

:::tip
Antes de esto, ya había instalado el paquete de instalación para el XIAO ESP32C6, por lo que puedes ver que la imagen en la operación dos tiene la opción para el XIAO ESP32C6, pero no la tienes cuando realizas la operación.
:::

### Configuración 3. Modificar el archivo platformio.ini

Cuando hayas creado correctamente el archivo de PlatformIO, aparecerán varios archivos en la columna izquierda. Podremos ver un archivo llamado platform.ini. A continuación, necesitamos reemplazar el contenido dentro de este archivo.

<table align="center">
  <tr>
      <th>Operación tres</th>
  </tr>
  <tr>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/esp32c6_platformio/2.png" /></div>
  </tr>
</table>

Necesitas copiar el siguiente código y reemplazar el contenido en el archivo platform.ini.

```
platform = https://github.com/mnowak32/platform-espressif32.git#boards/seeed_xiao_esp32c6
platform_packages = 
	framework-arduinoespressif32 @ https://github.com/espressif/arduino-esp32.git#3.0.2
	framework-arduinoespressif32-libs @ https://github.com/espressif/arduino-esp32/releases/download/3.0.2/esp32-arduino-libs-3.0.2.zip
framework = arduino
board = seeed_xiao_esp32c6
```
:::tip
Recuerde guardar el archivo , ctrl+s , se cargará
:::

### Configuración 4 . Compilar y quemar

<table align="center">
  <tr>
      <th>Operación cuatro</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c6_platformio/setup3.png" /></div>
  </tr>
</table>

Al final, si obtienes el mismo resultado que en la imagen siguiente, significa que has agregado correctamente la placa de desarrollo XIAO ESP32C6. Cuando crees el proyecto nuevamente, las operaciones de XIAO ESP32C6 estarán disponibles.

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte el apoyo necesario y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>