---
description: Integración de ReSpeaker Lite con XIAO ESP32S3
title: Kit de Asistente de Voz ReSpeaker Lite
keywords:
  - ESP32S3
  - XIAO
  - ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /xiao_respeaker
sku: 110061601
last_update:
  date: 3/17/2026
  author: Citric
createdAt: '2024-07-03'
updatedAt: '2026-03-17'
url: https://wiki.seeedstudio.com/es/xiao_respeaker/
---



Impulsado por el chipset de sonido y audio con IA XMOS XU316, es un kit de desarrollo de asistente de voz de alto rendimiento y de código abierto. El kit integra la matriz de micrófonos dual ReSpeaker Lite y un potente procesador [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html), ofreciendo capacidades excepcionales de reconocimiento de voz, reducción de ruido y procesamiento de voz. Este kit proporciona integración de firmware con Home Assistant mediante ESPHome, lo que lo hace ideal para asistentes de voz inteligentes y aplicaciones de automatización del hogar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/xiao-res.png" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Lite-Voice-Assistant-Kit-p-5929.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

### Características

- **Controlador ESP32 pre-soldado**: Un potente XIAO ESP32S3 viene pre-soldado a través de los pines I2S, ofreciendo una experiencia sin soldadura para un mayor desarrollo e integración.
- **Matriz de micrófonos dual para captura de voz de campo lejano**: Los 2 micrófonos digitales de alto rendimiento capturan y extraen voz y habla de campo lejano (hasta 3 metros) incluso en entornos ruidosos, ya que cancelan el ruido puntual utilizando dos entradas de micrófono.
- **Algoritmos de IA ASR integrados**: Impulsado por el chip de sonido y audio con IA XMOS XU-316, el kit incluye algoritmos de comprensión del lenguaje natural para Cancelación de Interferencias (IC), Cancelación de Eco Acústico, Supresión de Ruido y Control Automático de Ganancia (AGC), lo que permite una captura de voz de alta calidad.
- **Apuesta por el código abierto**: Como hardware de código abierto, es compatible con Arduino, PlatformIO, MicroPython y CircuitPython para un mayor desarrollo.
- **Compatible con asistentes de voz populares**: Este kit te permite crear tu propio procesador de lenguaje natural y conectarlo a Home Assistant mediante ESPHome, Amazon Alexa Voice Service, Google Assistant o servicios de Cloud Speech-to-Text, lo que te permite hacer preguntas y emitir comandos de voz a tus programas.
- **LED RGB integrado**: El kit incorpora un LED RGB WS2812 programable, que admite efectos personalizados y ofrece una interfaz visual para tus aplicaciones.

### Especificación

|**Matriz de micrófonos dual**|Proporciona entrada de audio de alta calidad.|
| :- | :- |
|**Luz indicadora de encendido**|Se ilumina cuando está encendido.|
|**Luz RGB**|WS2812 programable, proporciona retroalimentación visual.|
|**Luz indicadora de silencio**|Se ilumina en rojo cuando se pulsa el botón de silencio.|
|**Botón USR**|Botón definido por el usuario.|
|**Botón de silencio**|Silencia la entrada de audio cuando se pulsa.|
|[**XIAO ESP32S3**](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)|Para un mayor desarrollo e integración.|
|**Procesador central XU316**|Responsable del procesamiento y la transmisión de audio.|
|**Almohadilla de soldadura para alimentación externa**|Admite fuente de alimentación externa de 5V.|
|**Puerto USB Tipo C**|Se utiliza para alimentación y transmisión de datos.|
|**Conector de altavoz**|Para salida de audio. Admite altavoces con amplificador de 5W.|
|**Conector de auriculares de 3,5 mm**|Salida de audio. Podemos conectar altavoces activos o auriculares a este puerto.|
|**Almohadilla de alimentación externa 1** |Pines IO no utilizados en el XU316.|
|**Almohadilla de alimentación externa 2**|Pines IO no utilizados en el XIAO ESP32.|
|**JTAG**|Para depuración y programación del XU316.|

### Descripción general del hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/front.png" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/back.png" alt="pir" width={800} height="auto" /></p>

### Esquema

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/respeaker_lite_v1.0_sch_1.png" alt="pir" width={800} height="auto" /></p>

### Distribución de pines

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/pinout.png" alt="pir" width={600} height="auto" /></p>

|**1**|**Matriz de micrófonos dual**|Proporciona entrada de audio de alta calidad.|
| :- | :- | :- |
|**2**|**Luz indicadora de encendido**|Se ilumina cuando está encendido.|
|**3**|**Luz RGB**|WS2812 programable, proporciona interfaz visual|
|**4**|**Luz indicadora de silencio**|Se ilumina en rojo cuando se pulsa el botón de silencio.|
|**5**|**Botón USR**|Botón definido por el usuario.|
|**6**|**Botón de silencio**|Silencia la entrada de audio cuando se pulsa.|
|**7**|[XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) **(opcional)**|Para un mayor desarrollo e integración.|
|**8**|**Procesador central XU316**|Responsable del procesamiento y la transmisión de audio.|
|**9**|**Almohadilla de soldadura para alimentación externa**|Admite fuente de alimentación externa de 5V.|
|**10**|**Puerto USB Tipo C**|Se utiliza para alimentación y transmisión de datos.|
|**11**|**Conector de altavoz**|Para salida de audio. Admite altavoces con amplificador de 5W.|
|**12**|**Conector de auriculares de 3,5 mm**|Salida de audio. Podemos conectar altavoces activos o auriculares a este puerto.|
|**13**|**Almohadilla de alimentación externa 1**|Pines IO no utilizados en el XIAO ESP32.|
|**14**|**Almohadilla de alimentación externa 2**|Pines IO no utilizados en el XU316.|
|**15**|**JTAG**|Para depuración y programación del XU316.|

### Grabar el firmware I2S

Para usar ReSpeaker Lite con XIAO ESP32S3, asegúrate de que el firmware de ReSpeaker Lite sea la versión I2S.

Consulta [Firmware Flash](https://wiki.seeedstudio.com/es/reSpeaker_usb_v3/#update-firmware) para grabar el firmware I2S más reciente.

### Preparación de software

#### Instalar Arduino IDE

 Descarga e instala la versión estable de Arduino IDE de acuerdo con tu sistema operativo.

 <div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
 </div>

 <br></br>

#### Instalar Arduino-ESP32

Para iniciar el proceso de instalación usando el Gestor de placas, sigue estos pasos:

- Instala la versión actual de Arduino IDE a partir de la 1.8 o posterior. La versión actual está disponible en el sitio web [arduino.cc](https://www.arduino.cc/en/Main/Software).

- Inicia Arduino y abre la ventana de `Settings`.

- Introduce uno de los enlaces de lanzamiento anteriores en el campo Additional Board Manager URLs. Puedes añadir varias URL, separándolas con comas.

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>

- Abre `Boards Manager` desde la barra lateral, busca `ESP32` y haz clic en `INSTALL`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>

- Reinicia Arduino IDE.

#### Instalar la biblioteca ReSpeaker Lite

Proporcionamos una biblioteca para que los usuarios puedan comenzar rápidamente:

Clona este proyecto en la carpeta de bibliotecas de Arduino, por ejemplo, con el siguiente comando:

```
cd  ~/Documents/Arduino/libraries
git clone https://github.com/respeaker/respeaker_arduino_library.git
```

O descarga la biblioteca como archivo `zip` y añádela a las bibliotecas en Arduino IDE.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/add-lib.png" alt="pir" width={600} height="auto" /></p>

### Preguntas frecuentes

- **¿No se puede detectar el dispositivo de sonido USB ReSpeaker Lite en Windows después de grabar el firmware USB?**

- Abre el menú de inicio y escribe `Device manager`. Busca el dispositivo `ReSpeaker Lite`, haz clic derecho sobre él y selecciona `Uninstall device`. Selecciona `Delete the driver software for this device` y haz clic en `Uninstall`. Después de eso, reinicia el dispositivo y Windows volverá a instalar el controlador de tarjeta de sonido correcto.

 <p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/delete-driver.png" alt="pir" width={600} height="auto" /></p>

### Recursos

[Firmware XMOS de ReSpeaker Lite](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

[Github de ReSpeaker Lite](https://github.com/respeaker/ReSpeaker_Lite/)
