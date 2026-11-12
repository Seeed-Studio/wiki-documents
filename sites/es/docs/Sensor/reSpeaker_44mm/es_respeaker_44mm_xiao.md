---
description: reSpeaker XVF3800 44mm con XIAO ESP32-S3 Plus combina la compacta matriz circular de 4 micrófonos de 44 mm con un módulo ESP32-S3 pre-soldado, añadiendo Wi‑Fi/Bluetooth, audio I2S y control I2C sobre la canalización de voz XMOS XVF3800.
title: Introducción a reSpeaker XVF3800 44mm con XIAO ESP32-S3 Plus
keywords:
  - reSpeaker 44mm
  - reSpeaker XVF3800
  - XIAO ESP32-S3 Plus
  - ESP32S3
  - xvf3800
  - matriz de micrófonos i2s
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_xiao_getting_started
sku: 100066841,100065276
last_update:
  date: 11/04/2026
  author: Kasun Thushara
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/es/respeaker_44mm_xiao_getting_started/
---
# Introducción a reSpeaker XVF3800 44mm con XIAO ESP32-S3 Plus

{/* TODO(image): add a product render per variant — see wiki_44mm_images/README.txt */}

## Descripción general

El reSpeaker XVF3800 USB 44mm con XIAO ESP32-S3 Plus es una matriz circular profesional de 4 micrófonos basada en el XMOS XVF3800. Incorpora AEC, AGC, DoA, formación de haz, VAD, supresión de ruido, desreverberación y captura de voz de 360° hasta 5 metros, y admite funcionamiento tanto por USB como por I2S. Al combinar la matriz con el XIAO ESP32-S3 Plus se añaden Wi‑Fi y Bluetooth más un procesador host local, de modo que la canalización de voz puede controlarse y transmitirse sin un PC.

La placa mantiene el **paso de micrófono de 44 mm** compacto de la matriz estándar de 44 mm, por lo que encaja en las mismas carcasas, mientras que el módulo XIAO está soldado directamente en la parte posterior y cableado al XVF3800 mediante I2S e I2C.

{/* TODO: replace the href="#" values with the Seeed Studio product page URLs once they are published. */}

<table align="center">
  <tr>
    <th>Variant</th>
    <th>Contents</th>
    <th>Order</th>
  </tr>
  <tr>
    <td><strong>reSpeaker XVF3800 4-Mic Array 44mm with XIAO ESP32-S3 Plus</strong></td>
    <td>PCBA con XIAO ESP32-S3 Plus pre-soldado, firmware I2S<br /><code>SKU 100066841</code></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
  <tr>
    <td><strong>reSpeaker XVF3800 4-Mic Array 44mm with Case &amp; XIAO ESP32-S3 Plus</strong></td>
    <td>PCBA + carcasa + XIAO ESP32-S3 Plus pre-soldado<br /><code>SKU 100065276</code></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## Características

- **Diseño compacto de 44 mm**: el paso de micrófono se reduce de 66 mm a 44 mm para obtener una placa más pequeña y fácil de integrar en productos con limitaciones de espacio.

- **XIAO ESP32-S3 Plus integrado**: el módulo pre-soldado añade Wi‑Fi y Bluetooth, con audio I2S y control I2C cableados directamente al XVF3800.

- **Procesamiento de audio avanzado**: XMOS XVF3800 con AEC, AGC (rango de 60 dB), formación de haz multicanal, DoA, VAD, supresión dinámica de ruido y desreverberación, todo ajustable.

- **Alta calidad de audio**: a la par con la matriz circular de 4 micrófonos reSpeaker XVF3800 de paso de 66 mm existente.

- **Modos de funcionamiento duales**: USB Audio Class 2.0 para plug-and-play, o modo I2S/INT-Device para el XIAO y otros hosts embebidos, seleccionable mediante firmware.

- **Conectividad y actualizaciones flexibles**: configuración por USB e I2C más actualizaciones de firmware DFU.

- **Identificación única del dispositivo**: lectura y escritura de un UUID para la gestión de múltiples dispositivos, identificación y seguimiento de datos.

- **Retroalimentación RGB programable**: 24 × LED WS2812 muestran el estado del dispositivo, la animación de arranque y la dirección DoA, y pueden ser dirigidos al XIAO.

- **Tres botones personalizables**: subir volumen, bajar volumen y silencio por defecto, conmutables entre el XVF3800 y las almohadillas del XIAO.

- **Amplia compatibilidad de plataforma**: hosts USB como Windows, macOS y Raspberry Pi OS, además de integración I2S con la serie XIAO, ESP32 y Arduino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg" alt="reSpeaker XVF3800 44mm PCB component callouts" width={900} height="auto" /></p>

## Introducción (firmware I2S vs USB)

De forma predeterminada, el reSpeaker XVF3800 44mm con XIAO ESP32-S3 Plus se envía con el **firmware I2S**. En modo I2S la placa **NO** se detecta como un dispositivo USB.

Puedes cambiar entre el modo I2S y USB flasheando el firmware correspondiente. Usa el **Modo Seguro (Safe Mode)** para iniciar la placa como un dispositivo USB y así poder flashearla, actualizarla o cambiar entre modos.

:::note
Para garantizar una captación de voz óptima y el funcionamiento correcto de los algoritmos de audio, orienta el puerto del micrófono (entrada del micrófono / orificio de sonido) en la parte posterior del dispositivo hacia la fuente de sonido. El puerto del micrófono está en el lado impreso con el logotipo de Seeed Studio.

{/* TODO(image): mic_inlet_orientation.jpg — mic port / Seeed logo side */}
:::

### Flashear el firmware I2S

Para usar la matriz con el XIAO ESP32-S3 Plus, asegúrate de que el XVF3800 esté ejecutando el firmware `I2S` y actualízalo a la última versión. Consulta la sección [Update Firmware](https://wiki.seeedstudio.com/es/respeaker_44mm_introduction/#actualizar-firmware) de la página de introducción.

:::note
El firmware I2S **no** admite DFU por USB, porque la placa no se enumera como un dispositivo USB en ese modo. En su lugar, entra en [Safe Mode](https://wiki.seeedstudio.com/es/respeaker_44mm_introduction/#modo-seguro): el firmware de fábrica de Safe Mode admite tanto DFU por USB como DFU por I2C, por lo que siempre puede recuperarse y volver a flashearse.
:::

## Descripción del hardware

{/* TODO(image): xiao_soldered.jpg — board with the XIAO ESP32-S3 Plus soldered on */}

El módulo XIAO se sitúa en la parte posterior de la placa, junto al conector USB-C y las almohadillas de E/S de XMOS. Todas sus E/S restantes se llevan a almohadillas etiquetadas, por lo que el módulo puede controlar periféricos sin una placa portadora adicional.

### Componentes principales

| Componente / Característica | Descripción |
|--------------------|-------------|
| **Procesador de audio principal** | XMOS XVF3800, encargado de AEC, formación de haz, supresión de ruido y detección de DoA |
| **Matriz de micrófonos** | 4 × micrófonos MEMS PDM en una disposición circular con un paso de 44 mm, captura de campo lejano de 360° |
| **Códec de audio** | TLV320AIC3104, conversión de audio y salida DAC |
| **Amplificador** | Amplificador de audio Clase D LM48511 |
| **LED RGB** | 24 × LED RGB WS2812 direccionables individualmente |
| **Botones personalizables** | Tres botones físicos, por defecto subir volumen / bajar volumen / silencio, direccionables al XIAO |
| **LED indicador de silencio** | LED rojo que se enciende mientras los micrófonos están silenciados |
| **Puerto USB tipo C** | Alimentación de 5 V, audio UAC 2.0, control y DFU |
| **Conector de altavoz** | JST vertical para un altavoz de 5 W 4 Ω, más un conector AUX de 3,5 mm |
| **XIAO ESP32-S3 Plus** | Módulo pre-soldado con ruteo de I2S, I2C, RST, botón y LED |
| **Antena integrada** | Antena PCB para Wi‑Fi/Bluetooth, con un conector IPEX para un alimentador externo |

Consulta [Main Components](https://wiki.seeedstudio.com/es/respeaker_44mm_introduction/#componentes-principales) en la página de introducción para ver la lista completa a nivel de pines, incluidas las almohadillas de alimentación, depuración y expansión.

### Compatibilidad con XIAO ESP32-S3 Plus

El XIAO ESP32-S3 Plus está cableado al XVF3800 y a los botones y LED integrados:

- **Entrada/salida I2S estéreo** con múltiples opciones de salida, utilizando un bus dual (reproducción y grabación) con BCLK, MCLK y LRCLK compartidos.
- **Interfaz I2C** para configurar y gestionar los parámetros del XVF3800 desde el XIAO.
- **Línea de reinicio**: el XIAO puede forzar un reinicio por hardware en el XVF3800 mediante un pin de E/S dedicado.
- **Interfaz y almohadillas de soldadura**: las E/S restantes del XIAO se llevan a almohadillas etiquetadas para la expansión por parte del usuario.
- **Ruteo flexible de botones y LED**: un interruptor conecta los tres botones y la cadena de LED ya sea al XVF3800 o al XIAO.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/xiao_esp32s3_plus_schematic.png" alt="XIAO ESP32-S3 Plus schematic on the 44mm array" width={900} height="auto" /></p>

El esquema muestra U24, la huella del XIAO ESP32-S3 Plus: D4/D5 llevan I2C, D6–D10 llevan el bus I2S y MCLK, D11 selecciona el ruteo de botones/LED, D12 es la interrupción I2C y D15–D19 controlan la cadena de LED, la habilitación/silencio del micrófono y los botones de volumen.

| Pin XIAO | Señal | Función |
|----------|--------|----------|
| D0 | `XIAO_D0` | GPIO libre |
| D1 | `XIAO_D1` | GPIO libre |
| D2 | `XIAO_D2` | GPIO libre |
| D3 | `XIAO_D3` | GPIO libre |
| D4 | `I2C_SDA` | Datos I2C hacia el XVF3800 |
| D5 | `I2C_SCL` | Reloj I2C hacia el XVF3800 |
| D6 | `I2S_DATA1` | Datos de grabación I2S (RX) |
| D7 | `I2S_DATA0` | Datos de reproducción I2S (TX) |
| D8 | `I2S_LRCK` | Reloj izquierda/derecha I2S |
| D9 | `I2S_BCLK` | Reloj de bit I2S |
| D10 | `MCLK` | Reloj maestro I2S |
| D11 | `XIAO_D11_SWITCH` | Control del interruptor de ruteo de botones / LED |
| D12 | `I2C_INT` | Interrupción I2C |
| D13 | `XIAO_D13` | GPIO libre |
| D14 | `XIAO_D14` | GPIO libre |
| D15 | `WS2812_DIN_XIAO` | Datos de LED WS2812 (cuando se enrutan al XIAO) |
| D16 | `MIC_OEN_XIAO` | Habilitación del micrófono |
| D17 | `MIC_Mute_XIAO` | Control de silencio del micrófono |
| D18 | `Audio_Down_XIAO` | Botón de bajar volumen |
| D19 | `Audio_Up_XIAO` | Botón de subir volumen |

### Pin Out

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/xiao_pinout.jpg" alt="XIAO expansion pads on the 44mm array" width={600} height="auto" /></p>

Las serigrafías de las almohadillas coinciden con la tabla siguiente. Las señales compartidas con el XVF3800 están marcadas; el resto son GPIO libres del XIAO.



Las almohadillas que se exponen con un número de pin XIAO se asignan a estos GPIO del ESP32-S3:

| Pin XIAO ESP32-S3 Plus | GPIO ESP32-S3 |
|------------------------|---------------|
| D0 | GPIO1 |
| D2 | GPIO2 |
| D3 | GPIO4 |
| D13 | GPIO40 |
| D14 | GPIO41 |

Para ver el pinout completo del XIAO y los detalles de la cadena de herramientas, consulta la página [XIAO ESP32S3 Getting Started](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started/).

### Antena Wi‑Fi integrada en la placa

Al usar el XIAO ESP32-S3 Plus, no se necesita una antena externa: simplemente conecta las ranuras de la antena para usar la antena PCB integrada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/on_board_antenna.jpg" alt="Onboard antenna slots" width={400} height="auto" /></p>

El conector IPEX junto a las ranuras de la antena puede alimentar la antena integrada desde el módulo XIAO con un cable RF adecuado si prefieres enrutarla de forma diferente.

## Preparación de software

### Instalar Arduino IDE

Descarga e instala la versión estable de Arduino IDE para tu sistema operativo.

 <div className="download_arduino_container" style={{ textAlign: 'center' }}>
  <a
    className="download_arduino_item"
    href="https://www.arduino.cc/en/software"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: '#FFFFFF', fontSize: '1.25rem' }}
  >
    <strong>Descargar Arduino IDE</strong>
  </a>
</div>

<br />

#### Instalar Arduino-ESP32

Para instalar la compatibilidad con la placa ESP32 a través del Gestor de placas:

- Instala la versión actual del Arduino IDE aguas arriba en la versión 1.8 o posterior. La versión actual está en el sitio web [arduino.cc](https://www.arduino.cc/en/Main/Software).

- Inicia Arduino y abre la ventana de `Settings`.

- Introduce el enlace de la versión que aparece a continuación en el campo **Additional Board Manager URLs**. Puedes añadir varias URL separadas por comas.

```text
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/arduino_preferences.png" alt="Preferencias de Arduino IDE con la URL del gestor de placas" width={900} height="auto" /></p>

- Abre `Boards Manager` desde la barra lateral, busca `ESP32` y haz clic en `INSTALL`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/arduino_boards_manager.png" alt="Gestor de placas de Arduino IDE instalando esp32" width={900} height="auto" /></p>

- Reinicia Arduino IDE.

### Biblioteca de soporte

:::note
Instala la [biblioteca Arduino Audio Tools](https://github.com/pschatzmann/arduino-audio-tools) para poder ejecutar los ejemplos proporcionados.
:::

## Recursos

- [Introducción a reSpeaker XVF3800 44mm](https://wiki.seeedstudio.com/es/respeaker_44mm_introduction/)
- [Firmware y control en Python (GitHub)](https://github.com/respeaker/reSpeaker_XVF3800_4MIC_44mm)
- [Biblioteca Arduino Audio Tools](https://github.com/pschatzmann/arduino-audio-tools)
- [Documentación de XMOS XVF3800](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/index.html)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
