---
description: El ReSpeaker XVF3800 USB 4-Mic Array es un arreglo de micrófonos circular profesional con AEC, formación de haces, supresión de ruido y captura de voz de 360°. Emparejado con el XIAO ESP32S3, permite control de voz avanzado para dispositivos inteligentes, robótica y aplicaciones IoT. Descubre la integración perfecta y flexibilidad de modo dual.
title: Primeros Pasos con reSpeaker XVF3800 USB Mic Array con XIAO ESP32S3
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
createdAt: '2025-09-03'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/respeaker_xvf3800_xiao_getting_started/
---

# reSpeaker XVF3800 USB Arreglo de 4 Micrófonos con XIAO ESP32S3

## Descripción General

**El ReSpeaker XVF3800 USB 4-Mic Array** es un arreglo circular profesional de 4 micrófonos basado en el XMOS XVF3800. Cuenta con AEC, AGC, DoA, formación de haces, VAD, supresión de ruido, des-reverberación y captura de voz de 360° (hasta 5 metros). También soporta modos de operación dual, haciéndolo ideal para aplicaciones de voz avanzadas. Cuando se combina con el Xiao ESP32S3, controlar el ReSpeaker XVF3800 USB se vuelve aún más poderoso, desbloqueando posibilidades infinitas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- **Actualización de chip** :De XVF3000 a XVF3800
  
- **Arreglo de Cuatro Micrófonos** :4 micrófonos de alto rendimiento en patrón circular para captura de voz de campo lejano de 360° hasta 5 metros
  
- **Procesamiento de Audio Avanzado** :Alimentado por XVF3800 con AEC, multi-formación de haces, des-reverberación, detección DoA, supresión de ruido dinámico, rango AGC de 60dB

- **Número de Serie Único del Dispositivo** :SN integrado permite despliegues multi-dispositivo y gestión avanzada de dispositivos

- **Modos de Operación Dual** :Modo USB plug-and-play para conectividad instantánea a PC y modo INT-Device (I2S) para integración con sistemas embebidos—configurable vía comandos USB o I2C cambiando el firmware correspondiente

- **Compatible con Código Abierto** :Funciona con hosts USB (Windows, macOS, Raspberry Pi OS) y hosts I2S (Serie XIAO, ESP32, Arduino).

- **Retroalimentación Visual** :LEDs RGB programables e indicadores de estado muestran estados del dispositivo y actividad de voz

- **Calidad de audio igual o mejor** :comparado con el modelo anterior


## Descripción General del Hardware


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/xiao-xvf.jpg" alt="pir" width={900} height="auto" /></p>

### Componentes Principales

| **Componente / Característica**       | **Descripción**                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Procesador de Audio Principal**      | **XMOS XVF3800**, maneja el procesamiento de audio incluyendo AEC, beamforming, supresión de ruido, etc.       |
| **Array de Micrófonos**          | **Cuatro micrófonos MEMS PDM** en patrón circular, soportando **captura de voz de campo lejano 360° (5m)**. |
| **Códec de Audio**               | **TLV320AIC3104**, maneja la conversión y salida de audio.                                              |
| **LEDs RGB**                  | **12x WS2812** LEDs RGB direccionables individualmente para retroalimentación visual (ej., estado, actividad de voz). |
| **Botón de Silencio**               | Presionar para **silenciar/activar** la entrada del micrófono.                                                       |
| **LED Indicador de Silencio**        | Se enciende (típicamente rojo) para mostrar que el audio está silenciado.                                               |
| **Botón de Reinicio**              | Reinicio por hardware para la placa/sistema.                                                                 |
| **Puerto USB Tipo-C**           | Usado tanto para **alimentación como datos** (compatible con USB Audio Class 2.0).                                    |
| **Jack de Auriculares AUX de 3.5mm**  | Salida de audio para auriculares o altavoces activos.                                                      |
| **Conector de Altavoz**         | **Interfaz de altavoz JST**, soporta **altavoces amplificados de 5W**.                                       |
| **Pads de Depuración**                | Acceso de depuración para **XTAG4** u otros programadores.                                                     |
| **Headers I2C e I2S**         | Headers expuestos para **comunicación I2C e I2S** con dispositivos externos.                             |
| **Pads IO No Utilizados (XIAO)**     | Pads de soldadura I/O adicionales conectados al módulo XIAO.                                                 |
| **Comunicación I2S e I2C**   | Soporta conexión a hosts externos como Raspberry Pi, PC, etc. usando estos protocolos.             |
| **Modos USB e INT-Device**    | Operación de modo dual: USB plug-and-play o modo de dispositivo INT interno vía I2S.                          |
| **Número de Serie Único**      | **SN de dispositivo** integrado para identificación y gestión de múltiples dispositivos.                               |
| **Compatibilidad de Código Abierto** | Funciona con **Arduino, Raspberry Pi, PC/Mac**, y compatible con **Serie XIAO**.                   |
| **Características de Audio Avanzadas**   | AEC, beamforming, desreverberación, **detección DoA**, supresión de ruido basada en DNN, AGC de 60dB.         |
| **Retroalimentación Visual**           | Estado del dispositivo y actividad de audio mostrados vía **patrones de LED RGB** e **indicadores de estado**.            |
| **Calidad de Audio**             | Igual o mejor que los **diseños previos basados en XVF3000**.                                         |

### Soporte para XIAO ESP32S3

- Entrada/salida I2S estéreo con múltiples opciones de salida; interfaz I2C para configurar y gestionar parámetros XVF3800.
- Reinicio de XIAO mediante pin IO
- Interfaz y pads de soldadura

### Distribución de Pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

### Antena WIFI Integrada

Al usar el XIAO ESP32S3, no se necesita antena externa—simplemente conecta las ranuras de antena para usar la antena PCB integrada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/antenna.PNG" alt="pir" width={600} height="auto" /></p>

### Descripción General de GPIO

El reSpeaker XVF3800 expone 3 pines de entrada (GPI) y 5 pines de salida (GPO) para control externo. Puedes usarlos para leer estados de botones o controlar hardware como el LED de silencio, amplificador o LEDs.

| **Nombre del Pin** | **Dirección** | **Función**                                         |
|-------------------|---------------|-----------------------------------------------------|
| X1D09             | Entrada (RO)  | Estado del botón de silencio (alto cuando se libera) |
| X1D13             | Entrada (RO)  | Flotante                                            |
| X1D34             | Entrada (RO)  | Flotante                                            |
| X0D11             | Salida (RW)   | Flotante                                            |
| X0D30             | Salida (RW)   | LED de silencio + control de silencio del micrófono (alto = silencio) |
| X0D31             | Salida (RW)   | Habilitación del amplificador (bajo = habilitado)   |
| X0D33             | Salida (RW)   | Control de alimentación del LED WS2812 (alto = encendido) |
| X0D39             | Salida (RW)   | Flotante                                            |

## Flashear el firmware I2S

Para usar el reSpeaker XVF3800 con XIAO ESP32S3, asegúrate de que el firmware del reSpeaker XVF3800 sea la versión I2S.
Consulta Firmware Flash para flashear el firmware I2S más reciente. Por favor visita [esta sección](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#update-firmware).


:::note
Para trabajar con el XIAO ESP32S3, necesitas flashear el firmware I2S. Sin embargo, no soporta USB DFU. Si ya estás usando firmware USB, puedes entrar en modo seguro para flashear el firmware. Este método es más flexible porque soporta tanto USB DFU como I2C DFU. Para aprender más, por favor visita esta [sección](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#safe-mode).
:::

## Preparación del Software

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
    <strong>Descargar Arduino IDE</strong>
  </a>
</div>

<br />


 #### Instalar Arduino-ESP32

Para iniciar el proceso de instalación usando el Gestor de Placas, sigue estos pasos:

* Instala el Arduino IDE upstream actual en el nivel 1.8 o posterior. La versión actual está en el sitio web [arduino.cc](https://www.arduino.cc/en/Main/Software).

* Inicia Arduino y abre la ventana de `Configuración`.


* Ingresa uno de los enlaces de lanzamiento anteriores en el campo URLs Adicionales del Gestor de Placas. Puedes añadir múltiples URLs, separándolas con comas.

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>


* Abre `Boards Manager` desde la barra lateral, busca `ESP32` y haz clic en `INSTALL`.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>


* Reinicia Arduino IDE.


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
