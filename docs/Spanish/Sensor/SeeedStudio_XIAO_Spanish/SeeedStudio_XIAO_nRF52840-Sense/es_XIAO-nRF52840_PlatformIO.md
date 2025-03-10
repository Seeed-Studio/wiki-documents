---
description: Seeed Studio XIAO nRF52840 with PlatformIO
title: XIAO nRF52840-Sense con PlatformIO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/nRF52840_PlatformIO/1.png
slug: /es/xiao_nrf52840_with_platform_io
last_update:
  date: 02/17/2025
  author: Guillermo
---

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/nRF52840_PlatformIO/1.png" /></div>

# **Seeed Studio XIAO nRF52840 con PlatformIO**

PlatformIO es una plataforma de desarrollo que integra muchos tipos de placas de desarrollo y tiene una buena escalabilidad. Si la plataforma no tiene el tipo que necesitas, puedes agregar manualmente el tipo de placa de desarrollo tú mismo. El código que escribas en Arduino puede usarse en ella, solo debes agregar la biblioteca correspondiente.

En esta wiki, te mostraremos cómo instalar y ejecutar el código de ejemplo en PlatformIO.

## Usar PlatformIO para XIAO nRF52840

### Configuración 1. Instalar [PlatformIO](https://platformio.org/platformio-ide) desde el sitio web oficial

Si aún no has instalado el software de PlatformIO, puedes hacer clic en el enlace anterior.

### Configuración 2. Crear cualquier proyecto en PlatformIO

Dado que la plataforma ya tiene opciones para las placas de desarrollo XIAO ESP32S3 y XIAO ESP32C3, podemos elegir una de ellas para crear nuestros archivos. Por supuesto, también se pueden elegir otros archivos, no importa. El nombre del proyecto también puede ser elegido libremente.

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
Antes de esto, ya había instalado el paquete de instalación de XIAO ESP32C6 y XIAO nRF52840, por lo que puedes ver que la imagen en la operación dos tiene la opción para XIAO ESP32C6 y XIAO nRF52840, pero no la tienes cuando realizas la operación.
:::

### Configuración 3. Modificar el archivo platformio.ini

Cuando crees el archivo de PlatformIO con éxito, aparecerán muchos archivos en la columna izquierda. Podremos ver un archivo llamado platform.ini. A continuación, necesitamos reemplazar el contenido dentro de él.
<table align="center">
  <tr>
      <th>Operación tres</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c6_platformio/2.png" /></div>
  </tr>
</table>

Necesitas copiar el siguiente código y reemplazar el contenido en el archivo platform.ini.

```
[env]
platform = https://github.com/maxgerhardt/platform-nordicnrf52
framework = arduino
 
[env:xiaoblesense_arduinocore_mbed]
board = xiaoblesense
 
[env:xiaoble_arduinocore_mbed]
board = xiaoble
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
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/nRF52840_PlatformIO/2.png" /></div>
  </tr>
</table>

Al final, si obtienes el mismo resultado que la imagen, significa que agregaste exitosamente la placa de desarrollo XIAO nRF52840. Cuando crees un proyecto nuevamente, las opciones para XIAO nRF52840 estarán disponibles.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>