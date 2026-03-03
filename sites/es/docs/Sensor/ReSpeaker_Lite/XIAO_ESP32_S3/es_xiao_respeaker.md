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
  date: 7/1/2024
  author: Jessie
---


Alimentado por el chipset de sonido e IA XMOS XU316, es un kit de desarrollo de asistente de voz de código abierto de alto rendimiento. El kit integra el arreglo de micrófono dual ReSpeaker Lite y un potente procesador [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html), ofreciendo capacidades excepcionales de reconocimiento de voz, reducción de ruido y procesamiento de voz. Este kit proporciona integración de firmware con Home Assistant a través de ESPHome, haciéndolo ideal para asistentes de voz inteligentes y aplicaciones de automatización del hogar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/xiao-res.png" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Lite-Voice-Assistant-Kit-p-5929.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

### Características

- **Controlador ESP32 Pre-Soldado**: Un potente XIAO ESP32S3 está pre-soldado a través de los pines I2S, ofreciendo una experiencia sin soldadura para mayor desarrollo e integración.
- **Arreglo de Micrófono Dual para Captura de Voz de Campo Lejano**: Los 2 micrófonos digitales de alto rendimiento capturan y extraen habla y voz de campo lejano (hasta 3 metros) incluso en ambientes ruidosos ya que cancela el ruido puntual usando entrada de dos micrófonos.
- **Algoritmos ASR de IA Integrados**: Alimentado por el chip de sonido e IA XMOS XU-316, el kit incluye algoritmos de Comprensión de Lenguaje Natural para Cancelación de Interferencia (IC), Cancelación de Eco Acústico, Supresión de Ruido y Control Automático de Ganancia (AGC), habilitando captura de voz de alta calidad.
- **Adoptando Código Abierto**: Como hardware de código abierto, es compatible con Arduino, PlatformIO, MicroPython, CircuitPython para mayor desarrollo.
- **Compatible con Asistentes de Voz Populares**: Este kit te permite construir tu propio procesador de lenguaje natural y conectarlo a Home Assistant a través de ESPHome, Amazon Alexa Voice Service, Google Assistant, o servicio Cloud Speech-to-Text, permitiéndote hacer preguntas y emitir comandos de voz a tus programas.
- **LED RGB Integrado**: El kit cuenta con un LED RGB WS2812 programable, soportando efectos personalizados y ofreciendo una interfaz visual para tus aplicaciones.

### Especificación

|**Arreglo de Micrófono Dual**|Proporciona entrada de audio de alta calidad.|
| :- | :- |
|**Luz Indicadora de Energía**|Se ilumina cuando está encendido.|
|**Luz RGB**|WS2812 programable, proporciona retroalimentación visual.|
|**Luz Indicadora de Silencio**|Se ilumina en rojo cuando se presiona el botón de silencio.|
|**Botón USR**|Botón definido por el usuario.|
|**Botón de Silencio**|Silencia la entrada de audio cuando se presiona.|
|[**XIAO ESP32S3**](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)|Para mayor desarrollo e integración.|
|**Procesador Central XU316**|Responsable del procesamiento y transmisión de audio.|
|**Pad de Soldadura para Fuente de Alimentación Externa**|Soporta fuente de alimentación externa de 5V.|
|**Puerto USB Tipo-C**|Usado para energía y transmisión de datos.|
|**Conector de Altavoz**|Para salida de audio. Soporta altavoces amplificadores de 5W.|
|**Jack de Auriculares de 3.5mm**|Salida de audio, Podemos conectar altavoces activos o Auriculares a este puerto.|
|**Pad de energía externa 1** |Pines IO no utilizados en el XU316.|
|**Pad de energía externa 2**|Pines IO no utilizados en el XIAO ESP32.|
|**JTAG**|Para depuración y programación del XU316.|

### Descripción General del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/front.png" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/back.png" alt="pir" width={800} height="auto" /></p>

### Esquemático

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/respeaker_lite_v1.0_sch_1.png" alt="pir" width={800} height="auto" /></p>

### Distribución de Pines

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/pinout.png" alt="pir" width={600} height="auto" /></p>

|**1**|**Arreglo de Micrófono Dual**|Proporciona entrada de audio de alta calidad.|
| :- | :- | :- |
|**2**|**Luz Indicadora de Alimentación**|Se ilumina cuando está encendido.|
|**3**|**Luz RGB**|WS2812 programable, proporciona interfaz visual|
|**4**|**Luz Indicadora de Silencio**|Se enciende en rojo cuando se presiona el botón de silencio.|
|**5**|**Botón USR**|Botón definido por el usuario.|
|**6**|**Botón de Silencio**|Silencia la entrada de audio cuando se presiona.|
|**7**|[XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) **(opcional)**|Para desarrollo e integración adicional.|
|**8**|**Procesador Principal XU316**|Responsable del procesamiento y transmisión de audio.|
|**9**|**Almohadilla de Soldadura para Fuente de Alimentación Externa**|Soporta fuente de alimentación externa de 5V.|
|**10**|**Puerto USB Tipo-C**|Utilizado para alimentación y transmisión de datos.|
|**11**|**Conector de Altavoz**|Para salida de audio. Soporta altavoces amplificadores de 5W.|
|**12**|**Conector de Auriculares de 3.5mm**|Salida de audio, Podemos conectar altavoces activos o Auriculares a este puerto.|
|**13**|**Almohadilla de alimentación externa 1**|Pines IO no utilizados en el XIAO ESP32.|
|**14**|**Almohadilla de alimentación externa 2**|Pines IO no utilizados en el XU316.|
|**15**|**JTAG**|Para depuración y programación del XU316.|

### Flashear el firmware I2S

Para usar el ReSpeaker Lite con XIAO ESP32S3, asegúrate de que el firmware del ReSpeaker Lite sea la versión I2S.

Consulta [Flash de Firmware](https://wiki.seeedstudio.com/es/reSpeaker_usb_v3/#update-firmware) para flashear el firmware I2S más reciente.

### Preparación del Software

#### Instalar Arduino IDE

Descarga e instala la versión estable de Arduino IDE según tu sistema operativo.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
   <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong></a>
</div>

<br></br>

#### Instalar Arduino-ESP32

Para iniciar el proceso de instalación usando el Gestor de Placas, sigue estos pasos:

- Instala el Arduino IDE upstream actual en el nivel 1.8 o posterior. La versión actual está en el sitio web [arduino.cc](https://www.arduino.cc/en/Main/Software).

- Inicia Arduino y abre la ventana de `Configuración`.

- Ingresa uno de los enlaces de lanzamiento anteriores en el campo URLs Adicionales del Gestor de Placas. Puedes agregar múltiples URLs, separándolas con comas.

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>

- Abre `Boards Manager` desde la barra lateral, busca `ESP32` y haz clic en `INSTALL`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>

- Reinicia Arduino IDE.

#### Instalar la Biblioteca ReSpeaker Lite

Proporcionamos una biblioteca para que los usuarios puedan comenzar rápidamente:

Clona este proyecto en la carpeta de bibliotecas de Arduino, por ejemplo, con el siguiente comando:

```
cd  ~/Documents/Arduino/libraries
git clone https://github.com/limengdu/reSpeaker_Lite-Arduino-Library.git
```

O descargar la biblioteca como archivo `zip` y añadirla a la biblioteca en Arduino IDE.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/add-lib.png" alt="pir" width={600} height="auto" /></p>

### FAQ

- **¿No se puede detectar el dispositivo de sonido USB ReSpeaker Lite en Windows después de flashear el firmware USB?**

- Abre el menú de inicio y escribe `Administrador de dispositivos`. Encuentra el dispositivo `ReSpeaker Lite`, haz clic derecho sobre él y selecciona `Desinstalar dispositivo`. Selecciona `Eliminar el software del controlador para este dispositivo` y haz clic en `Desinstalar`. Después de eso, reinicia el dispositivo y Windows reinstalará automáticamente el controlador de tarjeta de sonido correcto para él.

 <p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/delete-driver.png" alt="pir" width={600} height="auto" /></p>

### Recursos

[Firmware XMOS de ReSpeaker Lite](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

[Github de ReSpeaker Lite](https://github.com/respeaker/ReSpeaker_Lite/)
