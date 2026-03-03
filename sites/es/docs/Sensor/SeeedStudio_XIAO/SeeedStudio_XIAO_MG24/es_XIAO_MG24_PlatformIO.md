---
description: Seeed Studio XIAO MG24 con PlatformIO
title: XIAO MG24 con PlatformIO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/mg24_platform/top_mg24_platform02.webp
slug: /es/xiao_mg24_with_platform_io
last_update:
  date: 03/17/2024
  author: Jason
  sidebar_position: 5
---


<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/mg24_platform/top_mg24_platform02.webp" /></div>

## Introducción a PlatformIO

PlatformIO es una plataforma de desarrollo que integra muchos tipos de placas de desarrollo y tiene buena escalabilidad. Si la plataforma no tiene el tipo que necesitas, puedes añadir manualmente el tipo de placa de desarrollo tú mismo. El código que escribes en Arduino puede usarlo, solo añade la biblioteca correspondiente

En este wiki, introduciremos cómo instalar y ejecutar el código de ejemplo en PlatformIO

## Usar PlatformIO Para XIAO MG24

### Configuración 1. Instalar [PlatformIO](https://platformio.org/platformio-ide) en el sitio web oficial

si no has instalado el software de PlatformIO, puedes hacer clic en el enlace de arriba.

### Configuración 2. Crear cualquier proyecto en PlatformIO

Aquí puedes elegir cualquiera de las versiones de desarrollo para crear un archivo de proyecto, tomo XIAO ESP32 C3 como ejemplo.

<table align="center">
  <tr>
      <th>Operación uno</th>
        <th>Operación dos</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_platform/mg24patform2.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/mg24_platformIO.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
</table>


### Configuración 3. Modificar el archivo platformio.ini

Cuando crees exitosamente el archivo de PlatformIO, aparecerán muchos archivos en la columna izquierda. Podemos ver un archivo llamado platform.ini. A continuación, necesitamos reemplazar el contenido dentro de él
<table align="center">
  <tr>
      <th>Operación tres</th>
  </tr>
  <tr>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/mg24_platform/mg24platform.jpg"/></div>
  </tr>
</table>

Necesitas copiar el siguiente código y reemplazar el contenido en el archivo platform.ini

```
[env:seeed_xiao_mg24]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-mg24
framework = arduino
```

:::tip
Recuerda guardar el archivo, ctrl+s, se cargará
:::

### Configuración 4. Compilar y Grabar

**A continuación compilamos y grabamos usando este código**

```cpp
#include <Arduino.h>
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // turn the LED on (HIGH is the voltage level)
  delay(1000);                      // wait for a second
  digitalWrite(LED_BUILTIN, LOW);   // turn the LED off by making the voltage LOW
  delay(1000);                      // wait for a second
}
```


<table align="center">
  <tr>
      <th>Operación cuatro</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/mg24_platform/mg.png" /></div>
  </tr>
</table>

Dice que se ha compilado exitosamente, y luego podemos acceder al XIAO MG24 para grabarlo.


### Configuración 5. Resultado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/00.gif" style={{width:500, height:'auto'}}/></div>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>