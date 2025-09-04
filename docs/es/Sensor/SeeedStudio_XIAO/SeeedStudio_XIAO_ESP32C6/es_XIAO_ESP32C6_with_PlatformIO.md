---
description: Seeed Studio XIAO ESP32C6 con PlatformIO
title: XIAO ESP32C6 con PlatformIO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/esp32c6_circuitpython/title.png
slug: /es/xiao_esp32c6_with_platform_io
last_update:
  date: 08/13/2024
  author: Jason
---

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_platformio/7.png" /></div>

## Introducción a PlatformIO

PlatformIO es una plataforma de desarrollo que integra muchos tipos de placas de desarrollo y tiene buena escalabilidad. Si la plataforma no tiene el tipo que necesitas, puedes añadir manualmente el tipo de placa de desarrollo tú mismo. El código que escribes en Arduino puede usarlo, solo añade la biblioteca correspondiente

En este wiki, introduciremos cómo instalar y ejecutar el código de ejemplo en PlatformIO

## Usar PlatformIO Para XIAO ESP32C6

### Configuración 1. Instalar [PlatformIO](https://platformio.org/platformio-ide) en el sitio web oficial

si no has instalado el software de PlatformIO, puedes hacer clic en el enlace de arriba.

### Configuración 2. Crear cualquier proyecto en PlatformIO

Debido a que la plataforma ya tiene nuestras opciones de placas de desarrollo XIAO ESP32S3 y XIAO ESP32C3, podemos elegir una de ellas para crear nuestros archivos. Por supuesto, otros archivos también están bien, no importa. El nombre del proyecto también se puede elegir arbitrariamente. Aquí uso el XIAO ESP32 C3 como ejemplo.

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
Antes de esto, ya había instalado el paquete de instalación del XIAO ESP32C6, por lo que puedes ver que la imagen en la operación dos tiene la opción para XIAO ESP32C6, pero tú no la tienes cuando realizas la operación
:::

### Configuración 3. Modificar el archivo platformio.ini

Cuando crees exitosamente el archivo de PlatformIO, aparecerán muchos archivos en la columna izquierda. Podemos ver un archivo llamado platform.ini. A continuación, necesitamos reemplazar el contenido dentro de él
<table align="center">
  <tr>
      <th>Operación tres</th>
  </tr>
  <tr>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/platformIO_file.jpg" /></div>
  </tr>
</table>

Necesitas copiar el siguiente código y reemplazar el contenido en el archivo platform.ini

```
[env:seeed_xiao_esp32_c6]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-c6
framework = arduino
```
:::tip
Recuerda guardar el archivo, ctrl+s, se cargará
:::

### Configuración 4. Compilar y Grabar

<table align="center">
  <tr>
      <th>Operación cuatro</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c6_platformio/setup3.png" /></div>
  </tr>
</table>

Al final, si tienes el mismo resultado que la siguiente imagen, eso significa que añadiste la Placa de Desarrollo XIAO ESP32C6 exitosamente. cuando crees un proyecto nuevamente, las operaciones del XIAO ESP32C6

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