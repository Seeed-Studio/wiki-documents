---
description: reSpeaker Flex es un potente sistema de voz modular con XMOS XVF3800, con arrays de 4 micrófonos intercambiables, circular y lineal, para una captura de audio precisa de 360° o direccional, ideal para robótica y dispositivos inteligentes.
title: Primeros pasos con reSpeaker Flex con Xiao ESP32S3
keywords:
  - reSpeaker flex
  - xvf3800
  - ESP32S3

image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array.webp
slug: /respeaker_flex_xiao_introduction
sku: 100005504,100099135,100070894,100026178
last_update:
  date: 04/8/2026
  author: Kasun Thushara
createdAt: '2026-04-08'
updatedAt: '2026-04-08'
url: https://wiki.seeedstudio.com/es/respeaker_flex_xiao_introduction/
---

# reSpeaker Flex con XIAO ESP32S3

## Descripción general

La versión reSpeaker Flex ESP32 integra un módulo XIAO ESP32S3 pre-soldado en la placa principal, proporcionando conectividad Wi-Fi y Bluetooth integrada para control inalámbrico y procesamiento en el borde. Impulsado por el procesador de voz XMOS XVF3800, el sistema mantiene la misma arquitectura modular donde la placa del array de micrófonos se conecta a la placa principal a través de un cable FPC flexible de 24 pines, permitiendo una colocación flexible dentro de las carcasas de los dispositivos. Es compatible tanto con arrays de 4 micrófonos circulares como lineales, lo que permite una captura omnidireccional de 360° o una captación frontal direccional. El sistema puede funcionar mediante USB (UAC 2.0) o I2S, mientras que el ESP32S3 integrado permite conectividad IoT, control local e integración más sencilla con aplicaciones embebidas.


<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Lineal con XIAO ESP32S3 </th>
    <th>reSpeaker Flex XVF3800 Circular con XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-with-XIAO-ESP32S3-p-6739.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>

## Características 

- **Diseño modular dividido**: La placa principal y la placa del array de micrófonos están físicamente separadas y conectadas mediante un cable plano FPC para una colocación flexible en cualquier chasis de producto

- **Opciones de configuración de micrófonos**: Intercambia entre array circular de 4 micrófonos (captación de 360°, separación de 44 mm) o array lineal de 4 micrófonos (directividad frontal de 180°, separación de 33 mm) utilizando la misma placa principal

- **Procesamiento de audio XMOS XVF3800**: Conjunto completo de AEC, AGC, DoA, formación de haz multicanal, VAD, supresión de ruido y desreverberación

- **Modos de funcionamiento duales**: USB UAC 2.0 para plug-and-play con PCs y SBCs; modo I2S para integración embebida directa

- **Conectividad USB dual**: El puerto USB-C y el puerto con conector de bloqueo PH2.0 admiten audio UAC 2.0 y actualización de firmware DFU

- **Amplificador de altavoz integrado**: Admite el control de altavoces de 10W 4 Ohmios mediante conector JST, con salida de auriculares AUX de 3,5 mm

- **Compatibilidad con XIAO ESP32S3**: El módulo pre-soldado añade Wi-Fi/Bluetooth, con buses I2S e I2C conectados directamente al XVF3800 para control inalámbrico y reenvío de audio

- **Flexibilidad de firmware**: Variantes de firmware USB dual (2 canales y 6 canales), firmware I2S, actualización DFU mediante dfu-util y persistencia de la configuración entre ciclos de encendido

- **SDK de Python**: Formato de grabación ajustable, volumen, parámetros de algoritmo y encaminamiento de canales mediante Python


## Componentes principales 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/main.jpg" alt="pir" width={800} height="auto" /></p>


### Placa principal

| Componente / Característica | Descripción |
|--------------------|------------|
| **Procesador de audio principal** | XMOS XVF3800 (firmware v3.2.1), gestiona todo el DSP de audio incluyendo AEC, formación de haz, DoA y supresión de ruido |
| **Códec de audio** | TLV320AIC3104, gestiona la conversión de audio y la salida DAC |
| **Interfaz del array de micrófonos FPC** | Conector FPC de 24 pines con pestillo de bloqueo, compatible con arrays de hasta 8 micrófonos con 2 líneas GPIO |
| **Puerto USB-C** | Audio UAC 2.0, actualización de firmware DFU y alimentación |
| **Puerto PH2.0** | Conector con pestillo de bloqueo; proporciona el mismo audio UAC 2.0 y soporte DFU que el puerto USB-C |
| **Conector AUX de 3,5 mm** | Salida de auriculares lateral impulsada desde el DAC integrado |
| **Conector JST para altavoz** | Conector de montaje vertical que controla altavoces de hasta 10W a 4Ω; almohadilla de soldadura reservada para conexión de altavoz cableada |
| **Terminal de alimentación externa** | Suministra 12V a todo el sistema y admite cargas de altavoz de 10W (prioridad P1) |
| **Botón RST** | Reinicio por hardware del XVF3800 |
| **Botón SafeMode (Boot)** | Mantener pulsado durante el encendido para entrar en modo seguro para recuperación de firmware |
| **LED PWR** | Indicador verde de encendido |
| **Pad de depuración** | Pad reservado para XMOS XTAG4 (no soldado en fábrica) |
| **Cabeceras IO XMOS 3800** | Pines de cabecera/pads expuestos para I2C, I2S, 5V/GND, pines de altavoz y el resto de IO del XVF3800 |
| **Orificios de montaje** | 4 × orificios de montaje M3 |
| **XIAO ESP32S3** | Admite soldadura de XIAO ESP32S3 cuando se utiliza como dispositivo host |
| **GPIO de XIAO ESP32S3** | Los GPIO restantes se pueden utilizar para IO y expansión de periféricos |

### Placa de array circular 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_doa.jpg" alt="pir" width={800} height="auto" /></p>

| Componente / Característica | Descripción |
|--------------------|------------|
| **Micrófonos** | 4× micrófonos PDM MEMS con separación de 44 mm dispuestos en un diseño circular |
| **Patrón de captación** | Captura de audio omnidireccional de 360° |
| **Interfaz** | Conector FPC a la placa principal |
| **Montaje** | 3 × orificios de montaje M3 para fijación a caja o carcasa |




### Placa de array lineal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_linear.jpg" alt="pir" width={800} height="auto" /></p>

| Componente / Característica | Descripción |
|--------------------|------------|
| **Micrófonos** | 4× micrófonos PDM MEMS con separación de 33 mm dispuestos en un diseño lineal |
| **Patrón de captación** | Patrón de captación frontal de aproximadamente 180°, con el sonido trasero suprimido |
| **Interfaz** | Conector FPC; el cable puede rutearse desde el lateral o la parte trasera |
| **Montaje** | 2 × orificios de montaje M3 |

### Compatibilidad con XIAO ESP32S3 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/xiao_esp32s3.png" alt="pir" width={700} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/header_pinout.jpg" alt="pir" width={800} height="auto" /></p>


La placa principal de reSpeaker Flex incluye una huella dedicada para soldar un módulo Seeed Studio XIAO ESP32S3, lo que habilita conectividad Wi-Fi y Bluetooth además de la cadena de procesamiento de audio del XVF3800. Los SKU que incluyen XIAO (-C4-1 y -L4-1) se envían con este módulo ya montado; los SKU base (-C4-0 y -L4-0) dejan la huella sin poblar.
Cuando se monta el XIAO, se establecen las siguientes conexiones entre este y el XVF3800:

- **Bus I2S** — bus dual (reproducción y grabación) con BCLK, MCLK y LRCLK compartidos para transmisión de audio en ambas direcciones
- **Bus I2C** — para leer y escribir parámetros de configuración del XVF3800 desde el XIAO
- **Línea RST** — el XIAO puede activar un reinicio por hardware en el XVF3800 mediante un pin IO dedicado
- **IO restante de XIAO** — expuesto en cabeceras/pads etiquetados para expansión por parte del usuario

### Cabecera de pines 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_2.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_1.png" alt="pir" width={600} height="auto" /></p>


### Cable FPC de 24 

La interfaz del array de micrófonos FPC es un conector de 24 pines y paso de 0,5 mm con pestillo de bloqueo, y el cable plano FPC de 20 cm incluido en la caja está adaptado a este conector.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/24_fpc_cable.png" alt="pir" width={600} height="auto" /></p>

| Pin | Nombre de señal | Tipo | Descripción de la función | Notas |
|-----|------------|------|----------------------|-------|
| 1 | MIC_VDD | Alimentación | Fuente de alimentación de micrófono | Alimentación de 3.3V |
| 2 | MIC_VDD | Alimentación | Fuente de alimentación de micrófono | Pin doble para mayor estabilidad de alimentación |
| 3 | GND | GND | Retorno de tierra de alimentación | GND de alimentación |
| 4 | MIC_CLK | Out | Señal de reloj global | Señal principal, 2–4 MHz |
| 5 | GND | GND | Tierra de apantallamiento del reloj | Tierra dedicada para el reloj |
| 6 | MIC_D1 | In | Línea de datos 1 | Micrófono CH1 |
| 7 | GND | GND | Tierra de aislamiento de D1 | |
| 8 | MIC_D2 | In | Línea de datos 2 | Micrófono CH2 |
| 9 | GND | GND | Tierra de aislamiento de D2 | |
| 10 | MIC_D3 | In | Línea de datos 3 | Micrófono CH3 |
| 11 | GND | GND | Tierra de aislamiento de D3 | |
| 12 | MIC_D4 | In | Línea de datos 4 | Micrófono CH4 |
| 13 | GND | GND | Tierra de aislamiento de D4 | |
| 14 | MIC_D5 | In | Línea de datos 5 | Micrófono CH5 |
| 15 | GND | GND | Tierra de aislamiento de D5 | |
| 16 | MIC_D6 | In | Línea de datos 6 | Micrófono CH6 |
| 17 | GND | GND | Tierra de aislamiento de D6 | |
| 18 | MIC_D7 | In | Línea de datos 7 | Micrófono CH7 |
| 19 | GND | GND | Tierra de aislamiento de D7 | |
| 20 | MIC_D8 | In | Línea de datos 8 | Micrófono CH8 |
| 21 | GND | GND | Tierra de aislamiento de D8 | |
| 22 | GPIO_1 | I/O | Entrada/salida de propósito general | Función de expansión |
| 23 | GPIO_2 | I/O | Entrada/salida de propósito general | Función de expansión |
| 24 | GND | GND | Tierra de apantallamiento GPIO | Absorbe el ruido de GPIO |

## Primeros pasos

### Preparación de hardware 

- Cable USB Tipo-C 
- Ordenador host o Raspberry Pi 


### Flashear el firmware I2S 

Para usar reSpeaker Flex con XIAO ESP32S3, asegúrate de que el firmware de reSpeaker Flex sea la versión `I2S`. Consulta Firmware Flash para grabar el firmware `I2S` más reciente. Visita la [sección](https://wiki.seeedstudio.com/es/respeaker_flex_introduction/#update-firmware)


:::note
Normalmente, el reSpeaker Flex con el XIAO ESP32S3 viene con firmware de fábrica configurado para la versión I2S.
:::

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

Para iniciar el proceso de instalación usando el Boards Manager, sigue estos pasos:

- Instala la versión actual de Arduino IDE a nivel 1.8 o posterior. La versión actual está en el sitio web de [arduino.cc](https://www.arduino.cc/en/Main/Software).

- Inicia Arduino y abre la ventana de `Settings`.

- Introduce uno de los enlaces de lanzamiento anteriores en el campo Additional Board Manager URLs. Puedes añadir varias URLs, separándolas con comas.

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>

- Abre `Boards Manager` desde la barra lateral, busca `ESP32` y haz clic en `INSTALL`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>

- Reinicia Arduino IDE.

### Librería de soporte 

:::note
Instala la [librería Arduino Audio Tools](https://github.com/pschatzmann/arduino-audio-tools) para poder ejecutar los ejemplos proporcionados.
:::

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


