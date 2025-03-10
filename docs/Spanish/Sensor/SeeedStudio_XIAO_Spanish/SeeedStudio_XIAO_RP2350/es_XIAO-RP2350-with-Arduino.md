---
description: Usando Arduino con XIAO RP2350 de Seeed Studio
title: Usando Arduino con XIAO RP2350 de Seeed Studio
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550_XIAO_RP2350-45font_1.webp
slug: /es/xiao_rp2350_arduino
sidebar_position: 1
last_update:
  date: 2024-10-30T01:39:16.136Z
  author: Guillermo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seeed Studio XIAO RP2350 con Arduino

La placa Seeed Studio XIAO RP2350 ahora es compatible con la programación a través de Arduino, gracias al [core arduino-pico](https://github.com/earlephilhower/arduino-pico). Esta guía te ayudará a configurar y comenzar a usar Arduino en tu placa RP2350.

## Requisitos previos

Para comenzar, asegúrate de tener:

- Una placa RP2350
- El IDE de Arduino
- Un cable USB

## Configuración del Software

### 1. Instalar el IDE de Arduino

Descarga e instala la última versión del IDE de Arduino desde el sitio oficial: [Software Arduino](https://www.arduino.cc/en/software).

### 2. Agregar soporte para la placa RP2350

1. Abre el IDE de Arduino y navega a **Archivo** > **Preferencias**.
2. En el campo **URLs de gestores de placas adicionales**, agrega esta URL:

    ```shell
    https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json
    ```

    <div style={{ textAlign: 'center' }}>
    <img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-url.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
    </div>

3. Haz clic en **OK** para guardar los ajustes.
4. Ve a **Herramientas** > **Placa** > **Gestor de placas**.
5. En el Gestor de Placas, busca **pico** y haz clic en **Instalar**.
6. Después de la instalación, ve a **Herramientas** > **Placa** y selecciona la placa que aparece a continuación como tu placa.

:::note
Asegúrate de instalar la versión 4.2.0 o posterior para tener soporte completo de la placa XIAO RP2350.
:::

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-board-option.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>

### 3. Subir un Sketch

Antes de subir un sketch, coloca tu XIAO RP2350 en modo BOOT. Usa uno de los siguientes métodos:

<Tabs>
<TabItem value="method1" label="Method 1: Before Connecting to Computer" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-no-charge.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>Mantén presionado el botón Boot -> Conecta el cable -> Suelta el botón Boot</em></div></div>

</TabItem>

<TabItem value="method2" label="Method 2: While Connected to Computer">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-charged.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>Mantén presionado el botón Boot -> Haz clic en Reset -> Suelta el botón Boot</em></div></div>

</TabItem>
</Tabs>

1. Abre el IDE de Arduino y crea un nuevo sketch.
2. Escribe tu código. Por ejemplo, utiliza el código de ejemplo `Blink`.
3. Ve a **Herramientas** > **Puerto** y selecciona el puerto donde está conectada tu RP2350.

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-firmware-upload.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>

## Recursos adicionales

- [arduino-pico GitHub](https://github.com/earlephilhower/arduino-pico)
- [Documentación de Arduino-Pico Core](https://arduino-pico.readthedocs.io/en/latest/install.html)

## Soporte y Discusión

¡Gracias por utilizar los productos de Seeed! Ofrecemos múltiples canales para soporte y discusión en la comunidad:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
