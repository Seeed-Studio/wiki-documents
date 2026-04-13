---
description: El ReSpeaker XVF3800 USB 4-Mic Array es una matriz circular de 4 micrófonos de nivel profesional con AEC, conformación de haz, supresión de ruido y captura de voz de 360°. Combinado con el XIAO ESP32S3, permite un control de voz avanzado para dispositivos inteligentes, robótica y aplicaciones IoT. Descubre una integración fluida y flexibilidad de doble modo.
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
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/respeaker_xvf3800_xiao_getting_started/
---

# ReSpeaker XVF3800 USB 4 Microphone Array con XIAO ESP32S3

## Descripción general

**El ReSpeaker XVF3800 USB 4-Mic Array** es una matriz circular profesional de 4 micrófonos basada en el XMOS XVF3800. Incorpora AEC, AGC, DoA, conformación de haz, VAD, supresión de ruido, desreverberación y captura de voz de 360° (hasta 5 metros). También admite modos de funcionamiento duales, lo que lo hace ideal para aplicaciones avanzadas de voz. Cuando se combina con el Xiao ESP32S3, controlar el ReSpeaker XVF3800 USB se vuelve aún más potente, desbloqueando posibilidades infinitas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- **Actualización de chip** :De XVF3000 a XVF3800

- **Matriz de cuatro micrófonos** :4 micrófonos de alto rendimiento en un patrón circular para captura de voz de campo lejano de 360° hasta 5 metros

- **Procesamiento de audio avanzado** :Impulsado por XVF3800 con AEC, conformación de haz múltiple, desreverberación, detección de DoA, supresión dinámica de ruido, rango de AGC de 60 dB

- **Número de serie único del dispositivo** :El SN integrado permite despliegues con múltiples dispositivos y gestión avanzada de dispositivos

- **Modos de funcionamiento duales** :Modo USB plug-and-play para conectividad instantánea a PC y modo INT-Device (I2S) para integración con sistemas embebidos—configurable mediante comandos USB o I2C cambiando el firmware en consecuencia

- **Compatibilidad con código abierto** :Funciona con hosts USB (Windows, macOS, Raspberry Pi OS) y hosts I2S (XIAO Serie, ESP32, Arduino).

- **Retroalimentación visual** :LED RGB programables e indicadores de estado muestran los estados del dispositivo y la actividad de voz

- **Calidad de audio igual o mejor** :en comparación con el modelo anterior

## Descripción de hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/xiao-xvf.jpg" alt="pir" width={900} height="auto" /></p>

### Componentes principales

| **Componente / Característica** | **Descripción**                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Procesador de audio principal**      | **XMOS XVF3800**, gestiona el procesamiento de audio incluyendo AEC, conformación de haz, supresión de ruido, etc.       |
| **Matriz de micrófonos**          | **Cuatro micrófonos PDM MEMS** en patrón circular, que admiten **captura de voz de campo lejano de 360° (5 m)**. |
| **Codec de audio**               | **TLV320AIC3104**, gestiona la conversión y salida de audio.                                              |
| **LED RGB**                  | **12x WS2812** LED RGB direccionables individualmente para retroalimentación visual (p. ej., estado, actividad de voz). |
| **Botón de silencio**               | Presione para **silenciar/activar** la entrada del micrófono.                                                       |
| **LED indicador de silencio**        | Se enciende (normalmente rojo) para indicar que el audio está silenciado.                                               |
| **Botón de reinicio**              | Reinicio por hardware de la placa/sistema.                                                                 |
| **Puerto USB Tipo-C**           | Se utiliza tanto para **alimentación y datos** (compatible con USB Audio Class 2.0).                                    |
| **Conector de auriculares de 3,5 mm**  | Salida de audio para auriculares o altavoces activos.                                                      |
| **Conector de altavoz**         | **Interfaz de altavoz JST**, admite **altavoces amplificados de 5 W**.                                       |
| **Pads de depuración**                | Acceso de depuración para **XTAG4** u otros programadores.                                                     |
| **Cabeceras I2C e I2S**         | Cabeceras expuestas para **comunicación I2C e I2S** con dispositivos externos.                             |
| **Pads IO sin usar (XIAO)**     | Pads de E/S adicionales soldados y conectados al módulo XIAO.                                                 |
| **Comunicación I2S e I2C**   | Admite conexión a hosts externos como Raspberry Pi, PC, etc., usando estos protocolos.             |
| **Modos USB e INT-Device**    | Funcionamiento de doble modo: USB plug-and-play o modo de dispositivo interno INT a través de I2S.                          |
| **Número de serie único**      | **SN del dispositivo** incorporado para identificación y gestión de múltiples dispositivos.                               |
| **Compatibilidad con código abierto** | Funciona con **Arduino, Raspberry Pi, PC/Mac**, y es compatible con **XIAO Serie**.                   |
| **Funciones avanzadas de audio**   | AEC, conformación de haz, desreverberación, **detección de DoA**, supresión de ruido basada en DNN, AGC de 60 dB.         |
| **Retroalimentación visual**           | Estado del dispositivo y actividad de audio mostrados mediante **patrones de LED RGB** e **indicadores de estado**.            |
| **Calidad de audio**             | Igual o mejor que los **diseños anteriores basados en XVF3000**.                                         |

### Compatibilidad con XIAO ESP32S3

- Entrada/salida I2S estéreo con múltiples opciones de salida; interfaz I2C para configurar y gestionar los parámetros del XVF3800.
- Reinicio de XIAO mediante pin IO
- Interfaz y pads de soldadura

### Pin Out

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

### Antena WIFI integrada en la placa

Cuando utilices el XIAO ESP32S3, no se necesita una antena externa—simplemente conecta las ranuras de la antena para usar la antena PCB integrada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/antenna.PNG" alt="pir" width={600} height="auto" /></p>

### Descripción general de los GPIO

El reSpeaker XVF3800 expone 3 pines de entrada (GPI) y 5 pines de salida (GPO) para control externo. Puedes utilizarlos para leer estados de botones o controlar hardware como el LED de silencio, el amplificador o los LEDs.

| **Nombre de pin** | **Dirección** | **Función**                                         |
|--------------|---------------|------------------------------------------------------|
| X1D09        | Input (RO)    | Estado del botón de silencio (alto cuando está liberado)              |
| X1D13        | Input (RO)    | Flotante                                             |
| X1D34        | Input (RO)    | Flotante                                             |
| X0D11        | Output (RW)   | Flotante                                             |
| X0D30        | Output (RW)   | Control del LED de silencio + silencio del micrófono (alto = silencio)            |
| X0D31        | Output (RW)   | Habilitación del amplificador (bajo = habilitado)                     |
| X0D33        | Output (RW)   | Control de alimentación de LED WS2812 (alto = encendido)                 |
| X0D39        | Output (RW)   | Flotante                                             |

## Grabar el firmware I2S

Para usar el reSpeaker XVF3800 con XIAO ESP32S3, asegúrate de que el firmware del reSpeaker XVF3800 sea la versión I2S.
Consulta Firmware Flash para grabar el firmware I2S más reciente. Visita [esta sección](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#update-firmware).

:::note
Para trabajar con el XIAO ESP32S3, necesitas grabar el firmware I2S. Sin embargo, no es compatible con USB DFU. Si ya estás usando el firmware USB, puedes entrar en modo seguro para grabar el firmware. Este método es más flexible porque admite tanto USB DFU como I2C DFU. Para saber más, visita [esta sección](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#safe-mode).
:::

## Preparación de software

### Instalar Arduino IDE

Descarga e instala la versión estable de Arduino IDE de acuerdo con tu sistema operativo

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

Para iniciar el proceso de instalación usando el Boards Manager, sigue estos pasos:

- Instala la versión actual del Arduino IDE de nivel 1.8 o posterior. La versión actual está en el sitio web [arduino.cc](https://www.arduino.cc/en/Main/Software).

- Inicia Arduino y abre la ventana `Settings`.

- Introduce uno de los enlaces de lanzamiento anteriores en el campo Additional Board Manager URLs. Puedes añadir varias URLs, separándolas con comas.

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>

- Abre `Boards Manager` desde la barra lateral, busca `ESP32` y haz clic en `INSTALL`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>

- Reinicia Arduino IDE.

### Biblioteca de soporte 

:::note
Instala la [biblioteca Arduino Audio Tools](https://github.com/pschatzmann/arduino-audio-tools) para poder ejecutar los ejemplos proporcionados.
:::


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
