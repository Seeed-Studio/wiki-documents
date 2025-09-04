---
description: Usando Arduino en tu placa XIAO RP2350
title: Primeros Pasos con Seeed Studio XIAO RP2350(Arduino)
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550_XIAO_RP2350-45font_1.webp
slug: /es/xiao_rp2350_arduino
sidebar_position: 1
last_update:
  date: 2024-10-30T01:39:16.136Z
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seeed Studio XIAO RP2350 con Arduino

La placa Seeed Studio XIAO RP2350 ahora soporta programación vía Arduino, gracias al [núcleo arduino-pico](https://github.com/earlephilhower/arduino-pico). Esta guía te ayudará a configurar y comenzar a usar Arduino en tu placa RP2350.

## Prerrequisitos

Para comenzar, asegúrate de tener:

- Una placa RP2350
- El IDE de Arduino
- Un cable USB

## Configuración del Software

### 1. Instalar el IDE de Arduino

Descarga e instala el IDE de Arduino más reciente desde el sitio oficial: [Software de Arduino](https://www.arduino.cc/en/software).

### 2. Agregar Soporte para la Placa RP2350

1. Abre el IDE de Arduino y navega a **Archivo** > **Preferencias**.
2. En el campo **URLs Adicionales del Gestor de Placas**, agrega esta URL:

    ```shell
    https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json
    ```

    <div style={{ textAlign: 'center' }}>
    <img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-url.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
    </div>

3. Haz clic en **OK** para guardar tu configuración.
4. Ve a **Herramientas** > **Placa** > **Gestor de Placas**.
5. En el Gestor de Placas, busca **pico** y haz clic en **Instalar**.
6. Después de la instalación, ve a **Herramientas** > **Placa** y selecciona la placa mostrada abajo como tu placa.

:::note
Asegúrate de instalar la versión 4.2.0 o posterior para soporte completo de la placa XIAO RP2350.
:::

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-board-option.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>

### 3. Subir un Sketch

Antes de subir un sketch, coloca tu XIAO RP2350 en modo BOOT. Usa uno de los métodos siguientes:

<Tabs>
<TabItem value="method1" label="Método 1: Antes de Conectar a la Computadora" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-no-charge.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>Mantén Boot-> Conecta el Cable-> Suelta Boot</em></div></div>

</TabItem>

<TabItem value="method2" label="Método 2: Mientras Está Conectado a la Computadora">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-charged.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>Mantén Boot-> Haz Clic en Reset-> Suelta Boot</em></div></div>

</TabItem>
</Tabs>

1. Abre el IDE de Arduino y crea un nuevo sketch.
2. Escribe tu código. Por ejemplo, usa el código de ejemplo `Blink`.
3. Ve a **Herramientas** > **Puerto** y selecciona el puerto donde tu RP2350 está conectado.

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-firmware-upload.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>

## Recursos Adicionales

- [GitHub de arduino-pico](https://github.com/earlephilhower/arduino-pico)
- [Documentación del Núcleo Arduino-Pico](https://arduino-pico.readthedocs.io/en/latest/install.html)

## Soporte y Discusión

¡Gracias por usar productos Seeed! Ofrecemos múltiples canales para soporte y discusión comunitaria:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>