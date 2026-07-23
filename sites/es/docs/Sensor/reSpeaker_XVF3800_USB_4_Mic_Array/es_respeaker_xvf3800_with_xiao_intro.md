---
description: La ReSpeaker XVF3800 USB 4-Mic Array es una matriz de micrófonos circular profesional con AEC, conformación de haz, supresión de ruido y captura de voz de 360°. Combinada con la XIAO ESP32S3, permite un control de voz avanzado para dispositivos inteligentes, robótica y aplicaciones IoT. Descubre una integración perfecta y flexibilidad de doble modo.
title: Introducción a reSpeaker XVF3800 USB Mic Array con XIAO ESP32S3
keywords:
  - reSpeaker
  - XIAO
  - ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_xvf3800_xiao_getting_started
sku: 114993700
last_update:
  date: 8/20/2025
  author: Kasun Thushara
createdAt: '2025-07-16'
updatedAt: '2026-04-21'
url: https://wiki.seeedstudio.com/es/respeaker_xvf3800_xiao_getting_started/
---

# reSpeaker XVF3800 USB 4 Microphone Array con XIAO ESP32S3

## Descripción general

**La ReSpeaker XVF3800 USB 4-Mic Array** es una matriz circular profesional de 4 micrófonos basada en el XMOS XVF3800. Incorpora AEC, AGC, DoA, conformación de haz, VAD, supresión de ruido, desreverberación y captura de voz de 360° (hasta 5 metros). También admite modos de funcionamiento duales, lo que la hace ideal para aplicaciones de voz avanzadas. Cuando se combina con la Xiao ESP32S3, el control de la ReSpeaker XVF3800 USB se vuelve aún más potente, desbloqueando infinitas posibilidades.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- **Actualización de chip** :De XVF3000 a XVF3800

- **Matriz de cuatro micrófonos** :4 micrófonos de alto rendimiento en un patrón circular para captura de voz de campo lejano de 360° hasta 5 metros

- **Procesamiento de audio avanzado** :Impulsado por XVF3800 con AEC, conformación de haz múltiple, desreverberación, detección de DoA, supresión de ruido dinámica, rango de AGC de 60 dB

- **Número de serie de dispositivo único** :El SN integrado permite despliegues con múltiples dispositivos y gestión avanzada de dispositivos

- **Modos de funcionamiento duales** :Modo USB plug-and-play para conectividad instantánea al PC y modo INT-Device (I2S) para integración con sistemas embebidos—configurable mediante comandos USB o I2C cambiando el firmware en consecuencia

- **Compatible con código abierto** :Funciona con hosts USB (Windows, macOS, Raspberry Pi OS) y hosts I2S (Serie XIAO, ESP32, Arduino).

- **Retroalimentación visual** :LED RGB programables e indicadores de estado muestran los estados del dispositivo y la actividad de voz

- **Calidad de audio igual o mejor** :en comparación con el modelo anterior

## Introducción (firmware I2S vs USB)

De forma predeterminada, la reSpeaker XVF3800 USB 4 Microphone Array con XIAO ESP32S3 utiliza el **firmware I2S**. En el modo I2S **NO** se detecta como un **dispositivo USB**.

Puedes cambiar entre el modo I2S y USB instalando el firmware correspondiente. Usa el modo seguro para conectar el dispositivo como dispositivo USB y flashear el firmware para actualizarlo o cambiar entre modos.

### Flashear el firmware I2S

Para usar la reSpeaker XVF3800 con XIAO ESP32S3, asegúrate de que el firmware de la reSpeaker XVF3800 sea la versión I2S y que esté actualizado a la última versión.
Por favor visita esta [sección](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#actualizar-firmware).

:::note
Para trabajar con la XIAO ESP32S3, necesitas flashearla con el firmware I2S. Sin embargo, el firmware I2S no admite USB DFU (el dispositivo no se detecta como dispositivo USB). Cambia al modo seguro, ya que admite tanto USB DFU como I2C DFU. Para obtener más información, visita esta [sección](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#modo-seguro).
:::

## Descripción del hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/xiao-xvf.jpg" alt="pir" width={900} height="auto" /></p>

### Componentes principales

| **Componente / Característica** | **Descripción**                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Procesador de audio principal** | **XMOS XVF3800**, gestiona el procesamiento de audio incluyendo AEC, conformación de haz, supresión de ruido, etc. |
| **Matriz de micrófonos**      | **Micrófonos MEMS PDM cuádruples** en patrón circular, que admiten **captura de voz de campo lejano de 360° (5 m)**. |
| **Códec de audio**            | **TLV320AIC3104**, gestiona la conversión y salida de audio.                                         |
| **LED RGB**                   | **12x WS2812** LED RGB direccionables individualmente para retroalimentación visual (por ejemplo, estado, actividad de voz). |
| **Botón de silencio**         | Presiona para **silenciar/activar** la entrada del micrófono.                                        |
| **LED indicador de silencio** | Se enciende (normalmente rojo) para indicar que el audio está silenciado.                            |
| **Botón de reinicio**         | Reinicio por hardware para la placa/sistema.                                                         |
| **Puerto USB tipo C**         | Se utiliza tanto para **alimentación como para datos** (compatible con USB Audio Class 2.0).         |
| **Conector de auriculares AUX de 3,5 mm** | Salida de audio para auriculares o altavoces activos.                                                |
| **Conector de altavoz**       | **Interfaz de altavoz JST**, admite **altavoces amplificados de 5 W**.                               |
| **Pads de depuración**        | Acceso de depuración para **XTAG4** u otros programadores.                                           |
| **Cabeceras I2C e I2S**       | Cabeceras expuestas para **comunicación I2C e I2S** con dispositivos externos.                        |
| **Pads IO no usados (XIAO)**  | Pads de E/S adicionales soldados y conectados al módulo XIAO.                                        |
| **Comunicación I2S e I2C**    | Admite conexión a hosts externos como Raspberry Pi, PC, etc. usando estos protocolos.                |
| **Modos USB e INT-Device**    | Funcionamiento de doble modo: USB plug-and-play o modo de dispositivo interno INT mediante I2S.      |
| **Número de serie único**     | **SN de dispositivo** integrado para identificación y gestión de múltiples dispositivos.             |
| **Compatibilidad con código abierto** | Funciona con **Arduino, Raspberry Pi, PC/Mac**, y es compatible con la **Serie XIAO**.               |
| **Funciones avanzadas de audio** | AEC, conformación de haz, desreverberación, **detección de DoA**, supresión de ruido basada en DNN, AGC de 60 dB. |
| **Retroalimentación visual**  | El estado del dispositivo y la actividad de audio se muestran mediante **patrones de LED RGB** e **indicadores de estado**. |
| **Calidad de audio**          | Igual o mejor que los **diseños anteriores basados en XVF3000**.                                     |

### Compatibilidad con XIAO ESP32S3

- Entrada/salida I2S estéreo con múltiples opciones de salida; interfaz I2C para configurar y gestionar los parámetros del XVF3800.
- Reinicio de XIAO mediante pin IO
- Interfaz y pads de soldadura

### Distribución de pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

### Antena WIFI integrada en la placa

Cuando uses la XIAO ESP32S3, no se necesita una antena externa; simplemente conecta las ranuras de la antena para usar la antena PCB integrada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/antenna.PNG" alt="pir" width={600} height="auto" /></p>

### Descripción general de los GPIO

La reSpeaker XVF3800 expone 3 pines de entrada (GPI) y 5 pines de salida (GPO) para control externo. Puedes usarlos para leer estados de botones o controlar hardware como el LED de silencio, el amplificador o los LED.

| **Nombre de pin** | **Dirección** | **Función**                                         |
|--------------|---------------|------------------------------------------------------|
| X1D09        | Entrada (RO)   | Estado del botón de silencio (alto cuando está liberado) |
| X1D13        | Entrada (RO)   | Flotante                                             |
| X1D34        | Entrada (RO)   | Flotante                                             |
| X0D11        | Salida (RW)    | Flotante                                             |
| X0D30        | Salida (RW)    | Control del LED de silencio + silencio del micrófono (alto = silencio) |
| X0D31        | Salida (RW)    | Habilitación del amplificador (bajo = habilitado)    |
| X0D33        | Salida (RW)    | Control de alimentación del LED WS2812 (alto = encendido) |
| X0D39        | Salida (RW)    | Flotante                                             |

## Preparación de software

### Instalar Arduino IDE

Descarga e instala la versión estable de Arduino IDE según tu sistema operativo

 <div className="download_arduino_container" style={{ textAlign: 'center' }}>
  <a
    className="download_arduino_item"
    href="https://www.arduino.cc/en/software"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: '#FFFFFF', fontSize: '1.25rem' }}
  >
    <strong>Download Arduino IDE</strong>
  </a>
</div>

<br />

#### Instalar Arduino-ESP32

Para iniciar el proceso de instalación usando el Gestor de placas, sigue estos pasos:

- Instala la versión actual de Arduino IDE de nivel 1.8 o posterior. La versión actual está en el sitio web de [arduino.cc](https://www.arduino.cc/en/Main/Software).

- Inicia Arduino y abre la ventana de `Settings`.

- Introduce uno de los enlaces de lanzamiento anteriores en el campo Additional Board Manager URLs. Puedes añadir varias URL, separándolas con comas.

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>

- Abre `Boards Manager` desde la barra lateral, busca `ESP32` y haz clic en `INSTALL`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>

- Reinicia Arduino IDE.

### Librería de soporte 

:::note
Por favor instala la [librería Arduino Audio Tools](https://github.com/pschatzmann/arduino-audio-tools) para poder ejecutar los ejemplos proporcionados.
:::

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
