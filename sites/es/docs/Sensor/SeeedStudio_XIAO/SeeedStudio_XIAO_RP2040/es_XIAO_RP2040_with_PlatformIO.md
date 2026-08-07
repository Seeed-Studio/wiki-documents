---
description: Seeed Studio XIAO RP2040 con PlatformIO
title: XIAO RP2040 con PlatformIO
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/rp2040_with_platformio.webp
slug: /xiao_rp2040_with_platform_io
last_update:
  date: 04/08/2025
  author: Hugo
createdAt: '2024-08-27'
updatedAt: '2025-04-10'
url: https://wiki.seeedstudio.com/es/xiao_rp2040_with_platform_io/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/rp2040_with_platformio.jpg" /></div>

## Introducción a PlatformIO

PlatformIO es una plataforma de desarrollo que integra muchos tipos de placas de desarrollo y tiene buena escalabilidad. Si la plataforma no tiene el tipo que necesitas, puedes añadir manualmente el tipo de placa de desarrollo tú mismo. El código que escribes en Arduino puede utilizarlo, solo tienes que añadir la biblioteca correspondiente.

En este wiki, presentaremos cómo instalar y ejecutar el código de ejemplo en PlatformIO.

## Usar PlatformIO para XIAO RP2040

### Configuración 1. Descargar VS Code

Descarga según el sistema que estés utilizando [VS Code](https://code.visualstudio.com/download)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### Configuración 2. Instalar la extensión PlatformIO

Abre VSCode, haz clic en Extensions, luego busca PlatformIO y selecciona instalar. Después de que la instalación se complete, reinicia VSCode.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>

### Configuración 3. Instalar el paquete de plataforma platform-seeedboards

Las placas de la serie Seeed Studio XIAO utilizan una plataforma personalizada de PlatformIO, por lo que necesitas instalar manualmente el paquete de plataforma correspondiente.

- Ejecuta el siguiente comando para una instalación nueva:

```bash
pio pkg install -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

- Si has utilizado anteriormente placas de la serie Seeed Studio XIAO en PlatformIO, ejecuta el siguiente comando para actualizar:


```bash
pio pkg uninstall -g -p "SeeedStudio"
pio pkg install -g -p "SeeedStudio=https://github.com/Seeed-Studio/platform-seeedboards.git" --force
```

:::tip

Como alternativa, puedes realizar reemplazos basados en proyectos existentes.

```ini
[env:seeed_xiao_rp2040]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-rp2040
framework = arduino
```

:::

### Configuración 4. Crear cualquier proyecto en PlatformIO

Abre la extensión PlatformIO y selecciona Create New Project.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/pio_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

### Configuración 4. Compilar y grabar

Copia el siguiente programa en `main.c` y súbelo a la placa.

```cpp
#include <Arduino.h>

void setup() {
    pinMode(PIN_LED, OUTPUT);
}

void loop() {
    digitalWrite(PIN_LED, HIGH);
    delay(1000);
    digitalWrite(PIN_LED, LOW);
    delay(1000);
}
```
<br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/pio_2.png" style={{width:800, height:'auto'}}/></div>
<br/>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>