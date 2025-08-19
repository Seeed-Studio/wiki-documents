---
description: Integrating ReSpeaker Lite with XIAO ESP32S3
title: Kit de Asistente de Voz con ReSpeaker Lite
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/xiao_respeaker
last_update:
  date: 07/20/2025
  author: Guillermo
---

Impulsado por el chipset de sonido y audio AI XMOS XU316, es un kit de desarrollo de asistente de voz de código abierto y alto rendimiento. El kit integra la matriz de doble micrófono ReSpeaker Lite y un potente procesador [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html), ofreciendo capacidades excepcionales de reconocimiento de voz, reducción de ruido y procesamiento de voz. Este kit proporciona integración de firmware con Home Assistant vía ESPHome, ideal para asistentes de voz inteligentes y aplicaciones de automatización del hogar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/xiao-res.png" alt="pir" width={600} height="auto" /></p>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Lite-Voice-Assistant-Kit-p-5929.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

### Características

* **Controlador ESP32 Pre-Soldado**: Un potente XIAO ESP32S3 está pre-soldado a través de los pines I2S, ofreciendo una experiencia sin soldadura para desarrollo e integración adicional.
* **Matriz de Doble Micrófono para Captura de Voz a Distancia**: Los 2 micrófonos digitales de alto rendimiento capturan y extraen voz a distancia (hasta 3 metros) incluso en entornos ruidosos, cancelando ruido puntual con la entrada de dos micrófonos.
* **Algoritmos AI ASR Integrados**: Impulsado por el chip de sonido y audio AI XMOS XU-316, el kit incluye algoritmos de Comprensión de Lenguaje Natural para Cancelación de Interferencias (IC), Cancelación de Eco Acústico, Supresión de Ruido y Control Automático de Ganancia (AGC), permitiendo captura de voz de alta calidad.
* **Hardware Open Source**: Compatible con Arduino, PlatformIO, MicroPython y CircuitPython para desarrollo posterior.
* **Compatible con Asistentes de Voz Populares**: Permite construir tu propio procesador de lenguaje natural y conectarlo a Home Assistant vía ESPHome, Amazon Alexa Voice Service, Google Assistant o Cloud Speech-to-Text, para hacer preguntas y comandos de voz.
* **LED RGB Integrado**: Cuenta con un LED RGB programable WS2812 que soporta efectos personalizados y ofrece una interfaz visual para tus aplicaciones.

### Especificaciones

|**Matriz de Doble Micrófono**|Provee entrada de audio de alta calidad.|
| :- | :- |
|**Indicador de Encendido**|Se ilumina cuando está encendido.|
|**Luz RGB**|WS2812 programable, proporciona retroalimentación visual.|
|**Indicador de Mute**|Se enciende en rojo cuando se presiona el botón de mute.|
|**Botón USR**|Botón definido por el usuario.|
|**Botón Mute**|Silencia la entrada de audio al presionarlo.|
|[**XIAO ESP32S3**](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)|Para desarrollo e integración adicional.|
|**Procesador Core XU316**|Responsable del procesamiento y transmisión de audio.|
|**Pad de Soldadura para Fuente Externa**|Soporta alimentación externa de 5V.|
|**Puerto USB Tipo-C**|Usado para alimentación y transmisión de datos.|
|**Conector para Altavoz**|Para salida de audio. Soporta altavoces amplificados de 5W.|
|**Jack para Auriculares 3.5mm**|Salida de audio para conectar altavoces activos o auriculares.|
|**Pad de alimentación externa 1**|Pines IO no usados en el XU316.|
|**Pad de alimentación externa 2**|Pines IO no usados en el XIAO ESP32.|
|**JTAG**|Para depuración y programación del XU316.|

### Vista General del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/front.png" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/back.png" alt="pir" width={800} height="auto" /></p>

### Esquemático

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/respeaker_lite_v1.0_sch_1.png" alt="pir" width={800} height="auto" /></p>

### Pin Out

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/pinout.png" alt="pir" width={600} height="auto" /></p>

|**Pin**|**Nombre**|**Descripción**|
| :- | :- | :- |
|**1**|**Matriz de Doble Micrófono**|Provee entrada de audio de alta calidad.|
|**2**|**Indicador de Encendido**|Se ilumina cuando está encendido.|
|**3**|**Luz RGB**|WS2812 programable, provee interfaz visual.|
|**4**|**Indicador de Mute**|Se enciende en rojo cuando se presiona el botón de mute.|
|**5**|**Botón USR**|Botón definido por el usuario.|
|**6**|**Botón Mute**|Silencia la entrada de audio al presionarlo.|
|**7**|[XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) **(opcional)**|Para desarrollo e integración adicional.|
|**8**|**Procesador Core XU316**|Responsable del procesamiento y transmisión de audio.|
|**9**|**Pad de Soldadura para Fuente Externa**|Soporta alimentación externa de 5V.|
|**10**|**Puerto USB Tipo-C**|Usado para alimentación y transmisión de datos.|
|**11**|**Conector para Altavoz**|Salida de audio, soporta altavoces amplificados de 5W.|
|**12**|**Jack para Auriculares 3.5mm**|Salida de audio para altavoces activos o auriculares.|
|**13**|**Pad de alimentación externa 1**|Pines IO no usados en XIAO ESP32.|
|**14**|**Pad de alimentación externa 2**|Pines IO no usados en XU316.|
|**15**|**JTAG**|Para depuración y programación del XU316.|

### Flashear el firmware I2S

Para usar el ReSpeaker Lite con XIAO ESP32S3, asegúrate que el firmware del ReSpeaker Lite sea la versión I2S.

Consulta [Firmware Flash](https://wiki.seeedstudio.com/reSpeaker_usb_v3/#update-firmware) para flashear el firmware I2S más reciente.

### Preparación del Software

#### Instalar Arduino IDE

Descarga e instala la versión estable del Arduino IDE acorde a tu sistema operativo.

<div className="download_arduino_container" style={{ textAlign: 'center' }}>
  <a
    className="download_arduino_item"
    href="https://www.arduino.cc/en/software"
    target="_blank"
    rel="noopener noreferrer"
  >
    <strong>
      <span>
        <font color="#FFFFFF" size="4">Descarga Arduino IDE</font>
      </span>
    </strong>
  </a>
</div>

 <br></br>

#### Instalar Arduino-ESP32

Para iniciar el proceso de instalación usando Boards Manager, sigue estos pasos:

* Instala la versión actual del Arduino IDE 1.8 o superior desde la página oficial [arduino.cc](https://www.arduino.cc/en/Main/Software).

* Abre Arduino y accede a la ventana `Settings`.

* Ingresa esta URL en el campo Additional Board Manager URLs. Puedes añadir varias separándolas con comas:

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>

* Abre `Boards Manager` desde la barra lateral, busca `ESP32` y haz clic en `INSTALL`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>

* Reinicia Arduino IDE.

#### Instalar la Biblioteca ReSpeaker Lite

Ofrecemos una biblioteca para que los usuarios comiencen rápido:

Clona este proyecto dentro de la carpeta de librerías de Arduino, por ejemplo con este comando:

```
cd  ~/Documents/Arduino/libraries
git clone https://github.com/limengdu/reSpeaker_Lite-Arduino-Library.git
```

O descarga la biblioteca en formato `zip` y añádela en Arduino IDE.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/add-lib.png" alt="pir" width={600} height="auto" /></p>

### Preguntas Frecuentes

* **¿No detecta el dispositivo de sonido USB ReSpeaker Lite en Windows tras flashear el firmware USB?**

- Abre el menú inicio y escribe `Device manager`. Encuentra el dispositivo `ReSpeaker Lite`, haz clic derecho y selecciona `Uninstall device`. Marca `Delete the driver software for this device` y presiona `Uninstall`. Luego reinicia el equipo y Windows reinstalará el driver correcto.

 <p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/delete-driver.png" alt="pir" width={600} height="auto" /></p>

### Recursos

[Firmware XMOS ReSpeaker Lite](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

[ReSpeaker Lite Github](https://github.com/respeaker/ReSpeaker_Lite/)
